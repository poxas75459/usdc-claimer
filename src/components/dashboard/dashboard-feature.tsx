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
    "3TQ8u9EqmuwxTT4HbPULJ8ydBZ6c9yoMBy6pzAwwzHSrj7szL5Q8NyxenzYENHpGvWZw1MPYjFhQUbJVM43Ehmy5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BdL6mKti7KEf7MwT2v2UAw845Syu5G7nb2GFhqeqzCnVWjWkY7MMa3LnYkAfNWsUHnXe8qJXvWZB4KBs8ZaE1jn",
  "key1": "2hYXyaBRMuU5hoYk7UjEh6zU6Eh4i4ZjP1niPD1RhybRkK2n8aYKyMHvfVLf8V4gJFJbMiWvD1Q7vosB1qLEeasp",
  "key2": "4yALY1iPeH39kmWdTf7nuTn1RfTpAgvgNhyAcNSFZN288WMH6iygATthHWFLMF5QEAcBvvpQGD897tLzaHJTgXkk",
  "key3": "4rr6bRmdwrEJGEorezbGtovp7pSrdYY6hMbkw6RiuDmRd9HJhH5LCEe9uQRrctmtSSKJfVNFcE78JrmmLwMoMtEA",
  "key4": "SVdQrHGHaF226tmeLBshoJidtvbrdGcH16bkyuKHimT9wLFc1BjUhwtY57DQBQPLeZ11mQmYxeFhLXX6qZauWwo",
  "key5": "5f7FBBmK1qzPaywMc29V9g6jmbN42wXaf5jWKGyRXWz3GyQRc8kLH8WHHaxx13TePquwSGwJYQ21YcoojHzRTz9a",
  "key6": "4KLgkwNeRuwAQqiLhh6hUrP3Mj6WHBGTcrK7wfhWCkDAFGoKHUidBVeuwTTLVogmSMeGsrfJCe87boADw1GwwpF6",
  "key7": "5CH7ct4RjUBTZQWd7PbABfoSdLeTNMZrhfqZfvVSAE4APoWEqYwkSnMFVWYg9DNbwUjKydKYiPDMPP4LMckhuL6h",
  "key8": "122TUriwRfg7RDWMbkYxRAfTdTfRRz56zeLe5jFizE4Gk54w53u26Nv85VzixmWUj2djpwJ4bxfoQVR6avJdHdrG",
  "key9": "4h2W1ib8pbjnn2iwSWWTrt3feqiLegvPPbaue9pMPsFeYaUm2uos7yyfimmf4LutSBBQ9hzDBWbXALtz5HT7Arh9",
  "key10": "4qRssXyYFtjVoUWRMAoDMs8YWCerZzQtmEtJipH7M9Ariy3uUQj3YzEsxAdEa1c6xe2rogRTJ7pyevUrBTdnU2NN",
  "key11": "3BRLrHCeSCnmMYCxyiDCXTfwtsbSZEn4Crt7KniFoBFd5J7rKR1gL25RBTU7aJe3pg5T2TrxDqdpnz84cPFv7bKa",
  "key12": "5rgFsvs2yNsNDJg1tsfqGfhChszMCh1Rw9wedg2pAagfXtLjexwrxCUxz4zs2TSvzdQR9VovwBBAsbnouN1YEGb9",
  "key13": "25kENobn9hHFcJHJitJJ6k8QAPneUCjWLZBkzAeye7pRecgPDrt6NNMwygemDMCXS9HAiJZ8v2DeoqxHeQ3Rn1ba",
  "key14": "4mWt7rL3i3jMyzJgLSrwRvmZ2NGPKRtheLidKQgmy4xERFD3szd4Dz9LGxDdYjLHSnnJnyYFGj494yht6WwMR41u",
  "key15": "3hG5SXeVwmjSNHLSMN98ivR1WHVHs341no4Y11gP2h73aNUu1VkTFrQTQTQQU6c7bYhypFLt3MjeHRwZX988rxuN",
  "key16": "3ukQJNxC2B52Pqx4kndVbG8WNuMzZq5mqhANMV49uQWwvdSKaKqLAfNcKTp8q1jeY4TgbEX8tWUK5EsTgseFN4Qq",
  "key17": "3HPqx877cB6tpbZjK73SShTJGeTyzrDTTNMVgh1m69GciUdMR682FSU7SppVHuZ52c426DwEJnw5vU2n14ct5cz8",
  "key18": "43bK4KUzYU2PvhkHwS8cwnzuv2sfUQZxPMhtY6kjEuH2VexrfDjHCZbv8kKQQ7vDpVCQkSa64wx7qho51eYa841i",
  "key19": "3cmpB98CQUQvi7AFxm8ZRUtrebSjFamNZ6wBk8zXmy3gXMcfhxXoT3tVX6EoCn6U7eiiYKtc1Pv391XinnQE4kCv",
  "key20": "48FFEipj6PwLkg4ST5cCuKmeakPwbAn6bbSDvtWK9YoqTbkL7Ka4XKtbVDmY8YqkSMhSYT1tThQ75Mhh7uYdqhdg",
  "key21": "HhbEhkYQENuVRcJyp6BweG7AZygK91HXYtzDc9Z61BD83KsHMDr1Jfp6gW2Xzy1dANV79jk26HjbyVoZMfYYf8q",
  "key22": "Z19sgpFPZAs7Jvv45Ui5j2GsALEwPqw19Bx7AjZuwDGKQG8xqpW854AETPaUNq9DqxDMmTNCr4MZPep5Ykn5xZM",
  "key23": "3BQdRvJgTZ6mPk5aRRxiM3UsJrTW65yGnwbiANe3Yw3GdpNbhvy1NaYMz97FmKEFmbtuw7x97uRgvzgkd4ygu1J8",
  "key24": "4RjnY3NaBajumvHiEtUnGYjJ7ZLMe6jnK7n6HrxKBZ9KsSKRQXBRF5rPHtRFQo3fjgmXpuDgt68V5jSA8N2kirxw",
  "key25": "VitTswhdZGhf8CF7V2TBhD3LLB4aJeZoX1HwqZFCnK7GACv9StvoNo3Bx1iFrrjrZgXZqUsX3rrD61GM4ajE5Q4",
  "key26": "2GtGETM7AVRhnLcQngL7ms2994pCqCrsnFB9ZCMuas9J3Rr6gKM1MYBvDZbMb6RN6f7T15hrAUn5n9gyqdtzq6SZ",
  "key27": "4Ewn1HvQKfG2HZAA1MwruY1F1NHb4MvrxbnVeemKvhctRC2exEDbL1moc6wuJ4HLPKsQ1wQXJHDoXNZjYe6qA3mk",
  "key28": "4uqfE8x8dK5jzv4j4H88zf5qPduAjEoj8eWfbNitxTdVQzUyN7WL8JRgvd5EzGTexaDVM3CKbJPzwKFFD5yvdy17",
  "key29": "3xDmcbUrLK7ECUAgjgVbiJTRiEedrAkQXKepLftiy4UMc4pLZvaSneBuiMAjHH65Aj6ib6DYMncUW9C8YMd9bMRS",
  "key30": "2VLQud5kNwNUvhP7vojzQhjjLRxg1oUhsbXCTzQd182wRxemB8LQxP6h6EuBsnwjH9cHJGhaRX6oZCKbSrx1P2hW",
  "key31": "4tCus7u8bPcnyyJ7mVZ82Muz1n4gQ7gtricicrwCGvXqp5QdwT3HCx6E3DGcNmes34Udut8uMHnCz4TfXASGcLUE"
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
