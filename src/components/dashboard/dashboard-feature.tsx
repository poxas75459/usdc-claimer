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
    "TmhabaxyNa9L3PukvjYynG8c5DnKx4EZUDjGuuxuSkeHvyrCvnuwsiQVEwT71JgggQ88jHDEMZw5VZY4AtpSQR4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QQHKdqRbymf25watDxnRnXRJq42gVjJRxr4ooRhwx3WeYkeN7bLJiGsvKoi5S4QNfTgBQY64F3Qu2iWnVkQY1EY",
  "key1": "58WGczQBKV92V3P2qbAF4fExCVfJ4vJwgBLYVQJ6mjaHegGnzChdEutTVJsy8dmmvD8rjNgKHFop8ekQyhD8DCeb",
  "key2": "9Gv9eubJVH9JrdcJz8vbNn56AFb7DppoF834onBeDofDzejZ6fmTwjqTvv3sTfbbsFZhtSNewdCduKzirUkwPSf",
  "key3": "49pUyjrbaB9X5vJaUVKi8QUvGQ3yavEvYPBSnBLfCf51qRqj1rGU3pHTELgWP1knxRW1p6dxDNBHHnvV4DBNN4mS",
  "key4": "2HN5qQnRsgBrUGGGRb3DQ2USf7c596RJn3fn9mb1n68XUNv2xA6iRQ1jYQS8Mnj1LaPMmGjMS34gtE2gco9JorRp",
  "key5": "5SDE3SFQorkS7Kc61yjGj76VtUXGYVCGBF8hKTay2SeEM46YXA9BAG5oXFzdNmB3FjuDw64FyheaVyXCcVpGcVhc",
  "key6": "SLZktEuUBFTFQWiKUxfEtsN381Hkqa46cT3tBJnirRDYtHwKVeNRs4YApPTvc2xrPdG3BLbVxnAqLTE7GizegZz",
  "key7": "y9uXuQaEA7qputAccYfiPdXMUq3ohf23Ueqq2vNiCSVfx2RFKrB2mBpaJCvYLFuKPFvfKmGbBCUWGeFmx6NQFvy",
  "key8": "2TuhcdAsjRtzScaYkuePBfYNcUMAmBvm5R35CvpSMPS9EL7M3jGrCZGefaTb6pJ28Q6YdouJbcFSvDwE5oPU6dVv",
  "key9": "2zyzrzs6AMeoYf4LWmBUVC6LytEmTiFhnJqVLc5D16UHkUioh7vR5VMaikwtrTrAtvZgQEysYZNnmkYLQgzHMzci",
  "key10": "563skg5QYEiNuZWH2hHUQYiaQJhFe8cgmnMue89kMoj8GJCWJcjZUHNjRZhxCUbhJWGe8hiY6zNiZGMVVoHZmtjf",
  "key11": "3cW9yMWPjjnLZJSRLQxqGL7852wtqLsK6mNTppyVoybmAww99btsKPa34AWemabVwcq97GfZ6XtighywtcwH7kz4",
  "key12": "PdPgw31Ntcouq3xE3dgUaFo82AtUVmq4Wt1uEnBrhGhRhwwV8esT6J1B8KKqD3QQv24mfSeh8bhBW276y4RELMp",
  "key13": "38LQh1gGFFnTNAXkM9PaDXQT6ipMydHjQ6JrUZ3vSh77ABiji6aQpKAkEjH5VuCGLemf44szNdHJMudcv4BfWcNC",
  "key14": "5nQ3Q2LtoZR4yzj1hbFow2xbYSFrvYHYzEBz1RN4JKckVxLtvB7ZpcGLHkX24B8dNbyBV246ULJcjovVrRsFBmsN",
  "key15": "4K6gYQqJVcKVfjrFfXzxVFHW8PXv9i6aQXB7ehTmELbn8Wifsf1h44GoMT4H8Qy39BviKAKocTFj1knQvZVWUr1M",
  "key16": "3A7KW7vvwEtVUX8Dx9KQDTk33BpEGergUfQu1EMCyTUHZEdpWDdiatFMoCNPbxC1wBSVPEQQj2PMwkAJfLL8y6C8",
  "key17": "5YkyWVVGV8XAhRzt5Z8W93aVjUieRUUUYH2ggDxPTSs443hpvR2oirCAdcSrEue1or98ueKCRg6rkNf5vcqAoC6D",
  "key18": "64Q9pgjvBEbVTdinhvmDxqJvjycfMUp4XSjtqUd6dG25iR6Ez5YXM1DQiJTpUtjobq6DnLw2jnTLv7cFC5LqrwqX",
  "key19": "58dxFHtAdkZXQK6uXvDFzhzLYA1zz1eiwMCs2rYRLxFgyWU9SFAUEtZVkzeNfc6LbNQtmsVdwGshvbfQrHjj4F9",
  "key20": "5s8cvXhmXPY7txyTanCwyUxT7HX6N2v1SRLFTB6mog3C9QFMPVA6eXnR9BFSdWoyTraubgo8wsEt489fafm7KMYi",
  "key21": "388S1dFCTZz6n7Fbkn1A94pAcwy5nSwCDQfQ3mHHBH24KGpK1tzRxZgvNYapXZhn16faCTJxA6JxuituxWPRz4Pd",
  "key22": "CmFXsCesdQupuuanwbggaJZ1D8f1yER993DLvUNd8LfSZcqRdKckiz3UFmmzPYjWCtMUtJcxkSMhVhXkrvzrEVi",
  "key23": "4REvTG3MMjtWW3aUrqbNiiDrvoR2bWGxUXddxPp551eHSXeTWTenvt7T4yf8oaN9ynKxCupVKN9BH5uX964QL2xP",
  "key24": "3jmwaesucF87LHTRQWqXAZBJxSmPoScrrAFRu7YVPrddQPvRBgXBRjiHuT3dTupryzN6PWQicKYL75DcQLaEJPGV",
  "key25": "2CX8e3EHsan4n13CyixstbusY3tEuwkAJ9ewLDuvWskQjLj3hYS8nctscgRybJqTkSCH73xgK7ESWkuuxoXL74Lc",
  "key26": "4FDQUoo9LTcVravw6ChLLZBv2GSg2vuRFWsFgxupLodjw9qu6Kj2WNd7cnnXp6XuMasEs3cZbQKxVAxFrvvY38yV",
  "key27": "2JPjBi4EdJ1vQQ8kTE7fZ3xHGPCe7uPSXDefMd3qKjSRJPgftdnk1m3yegcuMLgSKdLJuseQpEVrT3bG1JG3xZFe",
  "key28": "JbzL3frpSaiSeX3hB8XTqyccJ9zn1C31yCM3DHKdTGaW2zYNnHa3654gjeVAk68bGvNtX4Ex5tUP2H6Qs21fz6s"
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
