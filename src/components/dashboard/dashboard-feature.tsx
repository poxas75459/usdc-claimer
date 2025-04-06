/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5AUAw2BYDKKZEtnHRa9L2u3E1yCRDctxvfwtHLZDXEWC1e2pmqDEhJtN6rK1xESDMddjvemjxkAksoDup3Y2e2b4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ke3u45BSExw9udVeof5KCbcVCUh3xBKPpMQnBrP9EusvGFD4Q3e1uDTNNajnyLCexQ4zeQnBKDQFhdWpThzXTDP",
  "key1": "2rrdGEKhRCaf15BJV6w5FyRoqLHZkB66MmH69U4fcrWGBz7FwpjHAGBJaejJZZQN4XZqNDK2TeFs9Lkw7QUPE6nF",
  "key2": "2JFh1Tv13hn3D5zkveFynT12ZAGw7s84hyY2D6kCEEtjzWeURmABi2EjP5qyR8uHLkESPsptVxXSANquRPsnV9hW",
  "key3": "Fcbo1jWWmb6T7KYp7oec97vYz1z5dfG1J1KdEKCMUD8GqBhXw9XejgLGugKnw2ZhKSyz4WZhkUShn6WyJCXDkPR",
  "key4": "5S9x4muQrk5HHBcAuWqx6i8LTTwTdfTLawyZixSk6YJJfgeaW99R2m2yQH7Tpf53mjx6f3M3pWzXBBsEi2Xntozp",
  "key5": "4xL4inRhvtrJyZ8cZu1NjMqWrEUrTPSkfTYb49t9EZn91q5EUKWwcKWnUJBAZbCcg3kFUdz8w7XLndDAU6gmKcBg",
  "key6": "3h9qyfe84JLaZozj8dGsqmm41SsRzPUriTgGH3C4kTQAZhnrJNKZuKoa4fGqS1PXFTTFDxoP62oX1ZcCvFYXxuWd",
  "key7": "xShEjE6BwoKR37wS1UV5Zd2ygw89YQfBPS6wreN61i5yQE8Fq9U3LBgstvQ16iAArEVSLp1Yw9b1K2qn6o3a3Xj",
  "key8": "EmN37dsZU9ZLYocDwh4WwNWZ5cdFZMMR4CRUbUEHnhnB3BAN6Wz2wEvB6jfonRvNbxQeBKxmDwiEbpSVtLw47d9",
  "key9": "6156pYf8TnFSwhJCVTxKL4wzCnG66CfinRjhDe6gpZU9y78MEq6C3iejdR5DQACjyaGeZvwz5maGdJSjvS7Xzwx2",
  "key10": "T8qdpju9o3EXoFHfcyt71wPkUiLR3KW1KDoNTb3DLNUikPUaKbTZ1yBt1JkKSUzrPVYxR77JJr59RctEUtDZ4z3",
  "key11": "3xSgbA5szWUJFZt35qdgw1oAhiAoNWTj4cThVZ7xPo5KnBMDSovdjVizqmmcGjDnxyRZB5d5iarpqdmMv4V2T5qa",
  "key12": "2rWGDkWKPG3Pn3AJDA2k3m3dnBcrJhh2ap3cBi7gMXBNhds7UWrNdRDhq395DH2bnMfmULLxvrJNcBj4Ct7dckNB",
  "key13": "2oVtWtBDR5ZJew19aXb13EBFeZMJRhQsQUBebAG3iikYYETnfwpNqR5LbLMnZAV16aKLuDeuGxqhHLGP9Qq4TNq2",
  "key14": "2mkDTorgdZDBKPYWQH8fjRHcd3YstWekq7UozjRvLnWzA6HumuvfRaPzWXCW22GNtY3vU7bKCJmn1V9STq9TqG75",
  "key15": "5gK7UsFUxqT2XpSr2aJZhWxzNXBxZji48WQbeLkGtEmp48NxH57bNbPiFuXXY28dDZigtFnPQmn4cmZUNtfSkM4c",
  "key16": "3FFumstXEn1GWBtBUJfZh5D8VJQv3zux6zbrqjSRvG4N9C8zZaHeJQAxkdxEeTydeuUD2nu8d4qA4ohJPebXbhkQ",
  "key17": "2GybGvhNzhtFXeVJPrCVxSbRSbeMC45WMsrGHcWZbckjdV2J1LTVmpzMteZdrmAVhf8MRytkMGQPUSBUaCb4F5a4",
  "key18": "Z7nWkyLFBrw7wQNRy1Cxdn5jBxBAtvEJqBuE4aHaXKRecVKJaBx4mW256crbvGzNuGnH2RDRTLngicTFxALzzR3",
  "key19": "5acBDcpHewPd6CvcrJd4Tjcpd7imNgJWPUR3xX4shjzYjP1VSfyWphTtFntTFHKqPtJ4LiKjJtZAp6kYkMkijJqB",
  "key20": "22pEkeiJHqCDCkdmpCRRiZy2TonG9gmujuVc37kHBiRNofdE3mjzxbZMVisjrnsCTPfc7skpp12X4cWmxKXuNKXh",
  "key21": "5DT6ZDgyCELRfFN9xVK7Jsg5QynwkcczsEuiowm8SHkWTVh9YNEffaEKsQA23BMXozi45zGtra2Rdaxzw9vKFZG4",
  "key22": "2xKtb4Y5SGEW7SDVpwr4N1r3sbdCgkEAqa8AC37nMTy7vct6wHtzJ8tCVkui8dMyYuyNZMjMKw4bNosYvYFXtWvb",
  "key23": "5Lea67SZ28P6v1WGFA8BWrG85pYBybe2TxkwdKZKbmmm9iRFQ3vT7yZ1bETHg5V4ybvtysxELQ7SnL8CkVo289EP",
  "key24": "gnrf3HNSw8KJKwF1m8XpKfsvhjQ8zt8uyz5zTnXem1Ujqe6AiJH9VhYvyrB3nx7Buw1cFReUgogvWYKci6tcB6s",
  "key25": "2zmjRxFrm95UDnGc6keyHvfdd4L9XbS77RJqSv89YCBQprPiYPDzGHuxCDtMquvpu1e6GdvJSDGLJT2i4rnQoYLc",
  "key26": "V4Ar61emRDjDJQ1sEyxZdPG5axFDxVk4oEtYJD6mY4pExQre9qQgKrbvC4jgbcNb6jyYUG6XMSYq2p7PzqCLz7m",
  "key27": "5PLLHjT8Aa349Rj5ng2bVZcHyQNTZ8Dk7XgDsPiYxxX8srZuk9Dqg3WocJcA8Lc82Y8CMwFk2LKa6SyKv7c2pSD8",
  "key28": "35u7QGpXYpr3KBUno29CAGV9YxDikVqNifobnvkTDB52UGGDkgvoAdre6AhQYMhrcWEU9njtbbmLA3MttDxKhr83",
  "key29": "21DAvrcT6jofY2pxYix7FXcAyKdb2uvZvF5bdhhbPDWz1dRMvHh6CrfyE5dC4G4NxeuC91mAMTPevbxqAGsUGwuc",
  "key30": "e7vWmcqsg1cbaE84SG5UypXP2iiCGGKpG5u2xPUZCW5kJEf7NrNjdYRBjwRCyX7vT7QBDFqV3wfT8WKQCmye2Eg",
  "key31": "3LPJTaZ6UJvEHDpkhPfMfnBNfUJmPLF6hD3gFikrNVWjUhVnNKXhRBbJYa5qn1TXpfjhATKHiSeRB4puUoGtFBC",
  "key32": "3MKSCu8iLEyfLDoBtFN8ZLsUYEJsw7qVbFG9BB2PeAwovrwjQmkfZ6ahgtVEpGcXo3hNpVXYGdSHn3Laf3nCvLeF",
  "key33": "5BX3GAth9LmmjSChsHPRfLuF8Nj27Y7E6SN7kcDAh4MryHiyWoXtQnbSYGyjpiKvGGfEMcweziUzsKorbiVar6Lz",
  "key34": "3o6wPRvnhK95uDTsLKxotX5tj3yUS5kPYF6B5BeRpQMd4ktxesCWEsoXgRGWWF1wxFySLNPkVHXUrrQDi5pguDw2",
  "key35": "DRB5WZtxkHHLJ3uh1s9NP9J761Ke2vjuR7zsuj8LiXwPH2roCKoXHidrZ5zJAb5bFwY3VgfErcL7iENXgi2cgYQ",
  "key36": "KwRpE3jqWdFSM3XmNU3aogQZy9g4ZDd6mh3xGExJ3p1QAUf5PDw9C3CcKP1WBC2tGcDGUHbeKx4K94UeoNSGVqN",
  "key37": "7cuz2drXwLspKgotj69gH8sU3QM97bQUq57DWDgheZa8qKywmUe5eJz9X9FoLXgTo7XgRCY6Rpn5rDBptiAGp9m",
  "key38": "2aQaxLuqtryCKbfXmiDDvgBodqLkTbKVEUfgYMDoSraoHan1w2hZcQviP7iwtYgY3sGQMT3es9mmihEXKXHucsNg",
  "key39": "3DBPj8EwbakTbxtBDtRW1GUKyPXyESwG8KoDwJBYJGg8wgDkXp5BrU9W3BkyFBVVGmum6ykgDu1q1Y7mvyuyavY9",
  "key40": "2sfEBMhLsABTKvCdANorbUTaZ9WfhbLzzoSZ33BJSHaChNGnPJfnabbC8uZTH9s3TThVb9tttjyV9RgG5QmkDEW",
  "key41": "4NaYF985d8wRHvAKuFQiNNF1dTp1oJkD5rKguKNqJdx2hoAobrxQ6nR6mt6QcRjcHohsd73oC5kXGKBKBbe24ypE"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
