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
    "5vHSH6GdfRCnyq2a65oYNFokS6pBKyULVt2v9bwjWaS2b5ZRq7vBDpxXS7EMVQ5dpH1tcvBU3cuAs6X6DqsjMaK2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iwoGwMgdRogTqf7z4zqaxJwSmLRSb86U6FjhL4PFn9o295N5fRGaKDQk2uedMBjSddg333WT3CkzuFwKp4UAkAL",
  "key1": "bnLB7qzzRUKjzoTAYtXJvZ5asuYHPrxWkVnR8XrHUjVRGJvYXNTKQ33E12tCiptGNx1Gdm3x4MhDGLcDEjHaomp",
  "key2": "5kYjvhQa7fWzykkDukZYdaXfozBuN37dn4zVgWVJFPtqByfNym8d9yRsw8ZPGkz9iRLFhHpNAVGSYhTtqieHQcPx",
  "key3": "61BNySPbkXMmPfRXFL2y4kbCVoa5bPwmyqJDjacpFrPYLCR7GwMmTUdnQAku5EQMSr5ewKyvjMsftsB356w5ajGV",
  "key4": "5m3EbPCzoxCU5tsj9QfCP3b8o4QaUAXPNLnR69RXs5thhL98Q8U1x1XoRMAcr6DsgbBbH9kUNLmDGefD1rD6J4HR",
  "key5": "4zYA9f4nWKvoaisLJoE6K8RkqzSkuAPk5r1FyhoDKgy5RYnTBL335sSVELM93QNj2opEr21UwKMSJqA3ecT1UCu5",
  "key6": "3gaCuCo5hjboTGi5G1NfkiRBEp3wuBzEqKKntkeYMPWcpXRsftZNCtdyx7NUYDSp8eRTmsLGTi2KNQJJCNn46coL",
  "key7": "2d1ZeMoPNWpqwVtW8dsVyxKde7UTpDfwi8CZPfjFjsCUUSW7gKTzXue2Ux34Qyir1tKNdAFTSC2zUdtpJfWPHqmX",
  "key8": "2oREzw13zUdwqMHsTsUx4cD9TX8pUtmUriKKvDnfvD8Mi8SnM2xKiQzdDDXC2yFnCcEb9C7sccboqUaJ5jCnrHbW",
  "key9": "43NPTYU4C6i4R5NMMCujbK2wsXv3knHtoFnw2ew892uf9D5fASiExH9p6QDz3M5RZoJkAxmzpPpxbZEdvpwXCmq7",
  "key10": "3zLsAVxzhtRdpuv4LSTD73cDf7xL2Ux5vk82a47csk9nEE2nJoNdHyBdgQQnCpYAGs3PpcbVPUNd85Gad8sWZFSw",
  "key11": "5mJHREV4rjsif1Tr8wtir47ZviX2Jv2FPeKoBFP59W7ct17Y1GPpkXwJt4LTbT3qmF6fWbkndwB5LU42NH4HshJb",
  "key12": "3ckSovMJvrB4BwhmTNA1YRTyo7QwySK1fteEiW9eg1WoRwoUSVCfuBuRRncUnkogi3noEw2qYbzffV7XprxnqRE1",
  "key13": "2JKspxF3c7o3BT6W9zR1LSAA7p1TBwv5swD2qgdYdh7qcN4mQB6XK3TbkMcCmrXk4CmxB5pgqwPkVZRyufzQ7ZAF",
  "key14": "2batwi1Ap3b19LPdt8ve64q2Bnb7VngDqWoUCf9gZ2XrKyFy8rW5uXZWz5H1gWF3CM8cEMM51BV2oo2Zkun7Paag",
  "key15": "5WwAF4c89YDuHRJovsWPEWZXGAmmbykFs9LcXUw4mRqaLCRZf327LG2m3geQymhYD9aMfGHA3EkZR7xfD4vyyZby",
  "key16": "5aq2E8JqSNmD64y9qLgd2EdBuzJ35yGAzBhu2vNGoxUo261yPvJYu6cYHjzPRJGACH29XqCuV7tgQyDzPHpqybJA",
  "key17": "5j62Ym5wLswvZVTuxm5ekXCZ9jf2GTW3GLDj9CmkPeZMaYoYpAkfMEBD3xMDFUndPC78DpuLgoZLBHoa8jPPEyhm",
  "key18": "2eGesQdEs3ca4ZnwTfJByGYPpp33j7rSvpHGcE795Z7QUdmDBpiQVC3yHdABZwjZtHy8G5DxFCn9fMNr6bLMfU9Z",
  "key19": "4qJ6eRRWkffcBbJ6qHcA1KudseN5qd19oir8NuDhnpSbhcazKEU9Qk44tCJ1GRGwJw2uLrTaDsyJ88V6E6HoeDDk",
  "key20": "jL7QJSYrP9u2k58ZZrB5FWhNi2Z8cU5Ktjkw8rGBzmp7KcjD5HGRbEfXC1HwZ92LSTYEEuTFpCu1AAkQeMesV7H",
  "key21": "4Hf7yZAV5j8BeQgqKcdkD6gf27LjTdaCjzH5hUiss9n8icXqQTKRAZd5GZ6M2cpJoEMmZ2VcPb7jutJz1SzesMKU",
  "key22": "3oq4LUUhvzsohmAcUHviqrhVacs3Hk35o8Dnajtox7S6D8qNpauS3JUuMurCHZT4bh6Yru4MMV54XvNDLvRHNg5G",
  "key23": "51AsjPE2SXPPAQfcg1jBdHPknTVxrkDCGueTwBTaTSUqx4xMkvg9GPQwa3U8Ap1bUyHhdrdLQVGM9JvrFma3SuQN",
  "key24": "3hGSofAfg8H9q9QLKKtK6SZRyUKdF7fEmncwpfJBaVt38LkVXwHJs8yMqfMQ6zQPjE2WPaGuiFwxfuK3Zk6zd2u1",
  "key25": "2yGdQ7cenZ4pNrJ4Mn4LVmG1MBWLTtD4Sg4Kpox4twmunUXZubEzRRkdeRnNdEXGXoMaFdZomLxQg2pX3mnMfTBz",
  "key26": "4bycNZjV1i3KtKjqsasY5oifJ6Sm6FZSD3QULyyj9cKMjVrAjBLFp47BPwo1Y35Nd7xQD3AunN7yFYovVvHN3Gpn",
  "key27": "u7RGXU9K77UgXL1i31nB9v3zWJR2yi1EYmzcaYr1SDktFaDmXBipCUqVMpsazzxG5xtoSi94MLh9H4oz9ffgrik",
  "key28": "2D9kXMY8mvMNLVbSXMXhweuipjLHxbERhkqAMh7JRBSzPwrzcUehQcsr6Vehv7g8sZBCtj8UYYC3f6u88qi35Uer",
  "key29": "2DGQAq1S65uRU1mDyTTKKtPkMnrfYY6dBiePbrhVt4kHxVimmkH7ufaopdqqFGN1k7jkeeRmDiq3CX2PQ9TR3kn8",
  "key30": "5fUynU7GimXvMRWMDNeemTwqH3qBuqyvjoonzNt2iuCkP9RvbSYC2i2BsMfAtCRCsgjUzRda3E7C17grG866WyCX",
  "key31": "djSME3ytw8TgZ4Vhs2HUper7ioBRhMw3QAk89KdecWg6rymNJ1nqE3iwtDaGvQefG73eLDHzspcPWNZwzvq3WmK",
  "key32": "gMbhUQptp4dJn9WjmmWkhezYHcBgtPNerxCuZTCjgxJuBN26odZgcFrHPc6trAXXoVonigXo7Nf23yURZkenzSz"
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
