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
    "4xakVBqXanrbntFMatehZGqnqfAa8gFgNaNeNGgTCp8GrCfjupfQheG5pc84hkueG7ogB7yjVoQS7Yjdi5V56sAB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JJBP1tG3JkeVHN6vzBdVDJdFqcaE7UxPPACCvyDUx9Wpq8FWv5KxTgDetRbMCx6vNy8qJEaF8ZTtT3Sjy4pDKL3",
  "key1": "8afL3ksTwexBg5os3daYKXhUQJUd152FcJ5SqiuaoD2EhZ2ZBUdxii97t2DgEwcFom1JW6GMMUsoSSTFsEXzvYF",
  "key2": "2iEzLJdM8E3EwwxAoQXhqt7G26qqYr1WNWspYoTMnjn5jJFz7bwCefydhUJfQuN2Wb7ZcS7C6i6oiiJJULf4vZ4y",
  "key3": "5LRqjpToNCJLjQE99CXcQw7KR747YtzDfhu2NwEeekBkwsdw4s2C2LVAUXyM1vEzsTKxCC14nsRjebijnHqvixFN",
  "key4": "M2MGBnCEEp1QV6k7hizKGr47TU7YTzKJ9YQs34HKXjTNYKtHRTDJAtAAckKtRYfD959WzPdggMGA491zHu6N7r9",
  "key5": "iZB6EJWC47UbcDoVabtfXzNugFCiHcw37VAYycGFZEGCWVkTRMEWDCit6of7Xw3FYiw8whiTcgLtSAAnQieQiWj",
  "key6": "P8cKT98vTEsZKdZj4W25sSiSSJDmwtBorf4YPquAnEUHzRfxtGNYRFh3ryzK6ArfG4HKdiTacTUNn4xJTwANuJc",
  "key7": "3zH3uwtDqtyPfsbaf86k5sECSgjHzdRsedDHq69MX4WHxdN7ZiXSTMhcxwc39uPSstedy7aTvXBQuqXR3KcRLet3",
  "key8": "kgzx1noVbcu1x9335FVur5WbVbwnqqMR9oXU3zpdnGdqPAbKi4snevb4eF6cxtvHbreWu5fz32eXbRtxgu28SFf",
  "key9": "4hPDgYYAWRNNh4wHMxbzjfx9drjSszLHbmDL67NdUWLgsw29j2ToDvN4tsz3PNjFnnudsaPVCUaqcrxsG1Hgb9e1",
  "key10": "3Mo6wkT8s3MVmrbFg6SwuHM3p3eFEK5SqTNTv2J2anBBtBkPiwN6u2hZ1e8jLvTMYSSaQV6KCMbmjnX7GeEVLjQJ",
  "key11": "3KqBUcV5w7uwEj6F6xb293EWFRxuPZGch1XDfq8kVWftiqEDHvcxnmD5Le5sPTx6uRyHmzEu1BvfjDPsVGLAV3a7",
  "key12": "4jp7Wt57h7SRmkNFgggMe48aRZNNBG4RFdSpoC23KPGR4uqrmZ1BazbCYGhBD9g6HyrEETfs6Kx5QwE39g8aLNiy",
  "key13": "59s9fRqtHNUwzMUX4zqKzHCyejYZ55j3HAoK9Yw5LC3K9nCtFWtzuS99wN9oWLjWrUYPNVHw2kkYRJsLbGNBXXKb",
  "key14": "2CvWk183tZWDergiXohutSa5djSjW4wwMNqx1hH8bYyLqKH3FuWAS8Z5oEjnCUqDZ6d11frzLUohnwGTDhbHMGmr",
  "key15": "zdwZiHZiSjZChDdR6xPpERLzapXGfmAi23JpcuxgZD7keeST684zSMgojjPKofCgh2GXN9K26RAKNtFDmZyAZqG",
  "key16": "3Q4mQm6FWof8brMRvd6rAnvRobXMB7qdB7xH8MBhT52TKivjGPr9epiqCq55cmsVUMXFiXXFqgvBriZGKbo6tVKo",
  "key17": "2zFn2JqaWuKqjzNzcRKtpmY6paqeBxAKbBVfkY4rtuC6eZy3LX45naQhZmYMFZA2QLwfUnM9oVkZmUnqyNHgJ9nq",
  "key18": "hzduy1zAsttSWg8AucaGVyAJc2ubctyPznet75XLnxcMneLhhqJSU5wU7PZAoKiTEwb61K5XQPAxQK1W7nN71nT",
  "key19": "2SPXpnQbeYdW8DQh29MXr6YX9UuH5367LL1VFzjDgrrYkfvgK9vqwizpjVDKidhfsmsBMQbpbbnmsYTXv1rAcXuR",
  "key20": "5HhMZRuooQfW6UkJCSrd1rXeRpLEUpy6zdiVQUdLkCKezka4h8n9eFyJbc2Fibtf8pf6GRZjQ5eWSdoJzC8EsWaY",
  "key21": "4wqSXGErbiEZpHDvVkLdPstD8rzbAiEn95pVVNuSoSMjX5T4vkawhNCbYHvaeNAV1YLVTfWd2KGpuuqdbRtxGSb7",
  "key22": "4tGrzNZhRSM5UCvrLZai4GkxSFBRnxJ3gNhiwx1SG2XWWjBCTMysDdezaMG92kkHrjo3HixrpMEDLs2bCfLbPTpQ",
  "key23": "5KZMT8yqZhaiJkGjtZcBdajyL5X9xZbEEReMwhq6FkS18nEj8vdn8XJEPwW9KaiSYHtHRKbjqREJ53PLdD5vLgjK",
  "key24": "22Fg37WYPQZ84ZRqtgvLJcMFrdbVHef7TdDNxgtBrxQHSMSh6dkWgE4VBfH7s6aViZeTVXd53UozjAoTApCX6mEv",
  "key25": "ogD6ovPTwm6YaD4cqEu9CsGgFf29D5YybGiZTWoTRQUsrUxT2V5P8DJxehxzQEnGcgjLLjG6zBYWcjkzFziF2mc",
  "key26": "1KPrBoEiwJEQpwRY7hYbrSUBEvFUb5XSULUST5akdcdiMpYkHt43DkpsKEggLQkw33j9jmR2U26wT9EWwDsgzJ9",
  "key27": "Z3BuBkWZvCf4KPwscmykZWKJ5NJTVyHyr4atEgpjGDmeGbor2ypGxPCkZfGKwiCkvvVTviCysHYzGorNsxgK4Gn",
  "key28": "4sa52PDtE94CNqK9wkURXG2xwSZVdqBAtVm5bmW2jkvm6Y83KDEaVQkutfgeNrszUph4QLTVkGuQ4hCWTLb1BZkB",
  "key29": "2KoL1e51hT2b6nNdnsFTRMRYHoNdfvXtJsVDQ9g9jEroLMyZBysp87nEmGg6cXB6vji5ErD78p67N4tYykNs7Cq2",
  "key30": "95WyTA6zkYMdxrsB1MzLAjvkiHpUtb2Fp13b45VikGnS56FnydAYcBvy5uWW94Li8fJhbgn1f9AsmwquifivSUK",
  "key31": "5VCysPJMt5nVkw7rXohe4gapUsN6qZiGjr2RG53WncEDD96bAspgXr7wx9bsvoEr75X7sAXVNa1YZRoGQEddeN13",
  "key32": "4sJb8dGhSwXWYi4YNgjbRQhXcTZNjZBDBygFCBfDAQJZFr72TjfrEzeZ4CuCbfLRmop1hZ1oMVqVZ1Y8q7rSzLmY",
  "key33": "4gqZPptjoNBmvmnxhpVwAnPk1VmYnRaAJ3GP6obQpSXFvuNu89HPW3ZxuQom5mBMbBzBp3piMk6Yde6NvGUztf13",
  "key34": "2CUEj5XLEr9xyrZouDVsxK49Dp19pmdxakYYDDGBZfZoL56SwaRPfQPtYUqBWDSYM7iTnNuJkF3ncEwTE7UD5Uu2",
  "key35": "5RikbizUCe6tyiMhna9t1HBsY95aWfgVS2UXS1SiP39NGfoNfJNuzxBZsLfuD3AKc6FpwSYhkhK28Mpe4z1wLLe5",
  "key36": "3BtXuNpj16AXqTa7AB2ceCEbiKAw4cmqxdW1xDN4bdRatMMS6vrzSM1d7zTAoEWWZup7cbV8qTCEQoopzvqSdSWD",
  "key37": "QKdPFJprbFNQ6GvswLmASn4X4ECr2fMQMWLYJeiryfHhXoZwY9bbc8Vu2MVPVvgPZPsptJJBhgcQBC4zhMKUJZd",
  "key38": "5MESpTA4EC2CNTnLb6evSZztrs9rX498i96VKHLTDtTpcEQvQdkZXtHCS1UgJVVLwt6PQATtrPBzwojErQUNzPNQ",
  "key39": "SRmXj3kZG1gKEcCu8M1vWTwZGoWdXR4zinChvsVXr5VdMWQjs54sETP6AGRKZZNuKXp8F8z9SdctDzETQSCGfvC",
  "key40": "4LG9ZEsBtZ1pr5eiyf3R3KBU2rZZ6yQawS4fSeFyaFaLYrvFdxuYJ7Z47H9Xdq9xQRJHiZRxuqwesCvidquWctMt",
  "key41": "5xbHbCfDUBDPd5mg6Z5f1Jgbg2ndjnDTHp3KJHDehTnowiAEqm86Yot9vWNasZnrYPNDB3GhL8iCZfjhooicRbbA",
  "key42": "5yXFrXk6j9U8gqQBpxgRP8h5zvsXDQiTKxACp9DXhRQ9BxSeXKeNLJxSCvSuvdCZmVY9uuVi8nCT8X9aMxiiSnYc",
  "key43": "2NWFd35JJiQ4wK3Gv8bRfXcvbqtpjT91SS4PK1WjbKADhzjTu8stDQmNdCgyghBtFcHuTWoz6dQ6X6qqrLD7CNv",
  "key44": "JFTcqKnd7aURVTxzPvLvmp5aacS3DDbdF6T46yqw5zs8kJt8KvFZ6WKd3ppjnzQsubnjEKyxtLL3YnjUV3iPy6w",
  "key45": "3ayAoFodwL8g4fHyHdVpG33TJAYmpAbS4EutwuKc9smbDxQs2wsX7bzG6eEizFhh7yxRUGmk14Cug8A9uVY4tHrD",
  "key46": "34MszxefXPKVaeUQLfHjgRUiLGTXdu8sKky1e52KM8Q42Uw6jGhMp2xEvhnzRGBqJtxDfuXnoon2auPAuY1NGQWM",
  "key47": "oyf3J7CrNhpvDQR55RmWk4mkKxhrPVJxjocQdPzj1Ji94i4hCGYzTwKDdUsLR8j7Mbjb6iYNLkfxpu8P2Kaoahr",
  "key48": "5Pm5qeq7VA4RgRshKf1gvAFv4CARkTLVfZ3L1yM8vwPVmsfnXAh8fWABUjxVrt8PHWdaTwhcekWsZwFq6Lbih2EP",
  "key49": "qTGZKynUzkS2Lcdxwr8aN8C74Rw4eUUebfCtWRHNkFzaDr4LVW7dSL5uKfojHadDR58oPY77CXJiXK7ssov7Yi3"
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
