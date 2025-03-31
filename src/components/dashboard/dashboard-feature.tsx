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
    "497tXxpU1NKzxDiQR2mMJGbW37eL7bTxXMaE6f5Q33c9CtapZ3Nc9H8xpHhgXVdEo2Rw5eHjZgyzmWT2kDzmq1N7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HSC3JD2Z8LKBg6rStJaHYLojLqFKZS6oUpkUm94JdcjiS8ZfY479ZfMXhivJix26yZ4jBMR8oNZocdkKUb5FVsw",
  "key1": "DB4EfgzXgmu6q8kNEdGtbc3i5CAAdSLuZxwdiy97TceiqgYevbKBSRc3Hx2ShKjkMJkFYmU5jbzf5XymWgbVTuC",
  "key2": "34FHdoC4CexaArCPSd4fWfimmVRFZUMy3PJU6wiBCp5CZifaTkQaRbgRGBif2niyTGP9CJpZ9EdLmiCCqWvaVV4M",
  "key3": "2jdvr417b638eAcc1EjESJ573HSn1JmVPNMpEQswYbTBCEpb6cmVSdeSXnQZWYaF4B2nEoznYQK978TpmFrQL6KW",
  "key4": "3pqNUbqubmc9QVqvEpTdb3Mw6kDpBxMe5rkVu14vBJd37c9iKcryMYfQZhkkMVbKbpjHhVSjiZjAnoEagaBvYHZn",
  "key5": "3voejWH3y1adc4p3PxMYvD2HfdwhcfAzmkaJ9YyreZgpZPLjkCRbCcDvcHrXET3x9tJuCTpFqmGZoaJbgC8eYH5j",
  "key6": "3iRewH75c27EqwvN3J1UrZGJa5xFgqScyq4FVp8Z49zdDzGs22NPGC5icaKJ5pggtcG3Jr28dvu5bQzSaHEZRgRN",
  "key7": "2qWYGX4KhpgTwZaghAjSydipEFNkWk1qWAKouwC776g2fLSwUvPGt5SfnPpPZbZZ7GNVguLCpnFxcGWtjQMoikNV",
  "key8": "5x1mjDAtDb43QwUvvEBHz54KkvnZrRbPVXwu7zQQTFWKdLAc4tSnwaLQy2ufmii1qhUWCCNyg5Sj5qZoPKyQ9oeQ",
  "key9": "4riaVrawv4rneiPTHC9H91HrbM3RFt6tTd5ZNAisosaevTJQmu6AWf9Np4ZEPt66Q4vPa2fgZgXJ6J7PzQjkE1uC",
  "key10": "3oUU5ZNunMwy41TjKdgXKVXUiZZgFV1fAAhNQBreji6QHqSCH1UCAvt9wDuM5pnpzJ1Fk9B4AFkUEWRx8WR4PJP2",
  "key11": "3W5W6Y6gc3BqRgStE3rhwuk5aAaovf3SVze1em4MqgLvrnMBA2B4wQ9c8ExG4qg7gpMK3VUQuDRMkxs3v1yDm8LX",
  "key12": "3GWqQnSzv9KjkaHiypPktiUHyV4E9gynNX75yThca4vEoiKqNqeysJCPvJ4UP8cHaiRstHaMF5G1uZYnnYguVWPj",
  "key13": "279WQzmit2SkBwhPibX9Ap2nigNrNrZ1tt7FsFwmqhpmwS5RvYp5NGA7tMQyJRvzuUdivFTGYoQbR67RZVrB2Z6D",
  "key14": "4chvLFN61W1Dqmm1zmNrsiq3TVGGdCoQsyZyRttbrWyH2bkaBTPjA8fscLqC22UBAsRYr5Mqcextvx5Z4wMoi3v2",
  "key15": "2DUQKQ86ybF3EcH7nikL94SVSFTPFozu4a1sAHQfpbCVvcEQhJ4MWGaaWzHrGnL5NzTAuhBTVJSAFZmAuXgJCUff",
  "key16": "4c9fhpChHBGJg8ABdsqS5qndw1oxUuu27wxRhWUe41xZMqtnsaufJLcTQ8qJQhVsZ66NXtphh2YaLLPPFDMc1761",
  "key17": "N4HBrFDRtrWWzFHc53R6fyBxdHqb1ocLks83Zia2pFoM2RALfop4nbj4JdzaHGZap8LSt7Fzndqv2eGUoLbuoeU",
  "key18": "4AEhQNxJW8UxjvCH57Y8sffs9nzZugjnRrcvS69CwJk4L4NFS3DoawXRS7WbMATRfhgivdgt1upBmkRk1rmFipt8",
  "key19": "huqTNkRAifzA9BjDgB3jX7TdmxLmcNeYh5HdU8Kk7yicGKGW2KXoUif6ttfWC5QibZE3bRhz4y43jco7RFsxSFv",
  "key20": "4xDXzzNWvibAKkAc39eCRefdjWP24x3bMyJRhRiS2d78KQeD6RhTd2u8fWNFrEVJ2vaYGxoux2zmvCLQoPFuffyT",
  "key21": "4yjf2HkDfPwan4Cs5E1a5FvwxBW5pWzcJQTkbJtHwcuphNWtQoC1BPjQpCH3BGfKeX2UMF4bF4By55itpRDFH6d2",
  "key22": "5zo1m7EVRQ7j3pXG8xcg8HVQQYoM1YvpuSvqFdtNjV1yjGtkhuvFKWpYJhD72mEr5A4AFCgquf25YkF4TTWH3uyR",
  "key23": "41xJvQUC3gxqPkP9wUouK6i3DyGx5X5wFjb5sZZUX3meF8K9icJix7w3H6TF8WBUuvUUXNFVxpo6Wp4b57JpYAtw",
  "key24": "5WYW3BPLWdZ3Qh3ZNrTyGi69EDqqnFk7bKUmetczVefhLfXbwQRq1JfiwNZW1UiFw4RKDtickeR3W6qWV1W1Lrk7",
  "key25": "3pFNj6P7iv4tVkfGu6ueCtCE6fi43ooMv5gsofyEBjysUWN9fQjdyP7axmqu6bWpB7AreUmz8mLGUwtptrdnVNZs",
  "key26": "35wLTEszyucgzcz1oCWZfwm2HuGtp84gQsK6iQoF5JsgfAnsW5CBjMRnFrcRyxiRBn64ssGWmx79axEo3TaT5hcx",
  "key27": "k2SRA72CF5Akvwke8etLQY3qzvYsswqpA5FWH5AVE1EqSvVsX5B4ZVywYyNfYECZQWryuAdbFTMxpPDPSmSbLvw",
  "key28": "2FXaisvbF43hNfH6ohcQJPPTGwHxGGi5XYVbnqbRFsztU1oyf61BpG8VciJ6P8QcagKkfAQDAQvckVDeBFZQf8A5",
  "key29": "2pvPYefDa2YmyFeZbJMDJt71R3Y9Qt8CEKfidwPPLurzUyx4mF7bcpnJhVNXmdGT4ooYGbx6mk69487V7gLczaW7",
  "key30": "MuXsrZYHdLbrdsb3vbnU5ZsnJ7dH3dnddVzvJ7TMopMRBPNvbr4bMVWC7w8okVjSLSwP6ttpfuB2U4utSHC5Snw",
  "key31": "4GoBhwHhFQgvnYWhCUy4TTCAqy8Rm5DjpM1333ySnPrMDhQdfk1L6VfQDk3uQCZPhaoeiBnJmmuv7dedDPr7KxQi",
  "key32": "28M9RmN4JBSq8mQFDCr33hm6jRSP7ZYi7B3i82gZHh6XYkbKsc3DxuA1NivsEGNQEMEetAvJtU2FukKgWKCRGbUN",
  "key33": "4aQtzJECzeutkWyDcT1wRT7utZwj95VuKEW32DUdgVdDkE933pzdby2hp6LscAt7NbNbRqU2rXvodXnbBNKtKNb4",
  "key34": "5hjykTWygdZQNa8xHTmm4nUEsYpL4YkvizSn7Bthjk71WHE1Hh4Nfwn91ukaXLCQFwzXqiR8am8jofpdjw2fcbuB",
  "key35": "2i7Z6yGR1eQJgxtH7hbMSCi9c3HTGUWqanYQ2RgiN1vH9HMKWYkqvtx2ij49pe4Q7nWr2TPU4As8jq5ZBgQGoMHV",
  "key36": "4srSh1wFZdoA4fKUnCTxR61WXXRtARHZirYrL7sopynoNBeqksiTYFTTPd8MSTHs5DGzx8BFpsbR9nxv8HCCyhNG",
  "key37": "5dMYM2BAsuQNmaLRyzYC5SRDVToY3frBjUu8gDxUqy88o6tzoXkf8cNK74QuedeQhpLdb2YRZUbzYWxY8X6MbVXC",
  "key38": "2gTi1tWkNWZ4HafdWQKJ5y9ar3FWo72bFVxzNCSdsA4L5SxSKdriXBsiEKQ1BA6ttE5hpDJMf29RDPTUzGNpf97J",
  "key39": "47ZsXHpx8iXRWKVz767EHvsPUCcbvQRd9Tw6WFQepQuVXJjjctebRZBg1vYTCwtKKHNouoEEXsJGXQWCeTTW3Vo7",
  "key40": "47RsZaarZjCFi3fV93BJRuZ4njjc8U9cctc93wiXhDc3KRP4ZTBL5PFXMH4vuNjStZD1A82pNzbWbKtD356jJ1EE",
  "key41": "5U2mGfspm244zSSV6vN1x9w5tiJMzEhi8aGvgmSb7ur4DGd2Ns9r9mqAwvF3NafBznDzZPHfZTYke5zcPotjZscX",
  "key42": "5prMJiLBrZLpe3xY2EefsFbGgBQzNQpaR3DZ6PkjjgsVAQFVmCuMhhZESWeo8CENPPtEWFo9JQkDWevi62nbaGg1",
  "key43": "5jcF17f8Abyh8fnqRacEeeZ28TgvmGaC96xDpRupyW9TV4Wv85eFT8x9cnkRqrQGTtmTjJsJ68QRWkFwRjAVzGCc",
  "key44": "3Ku2iCCeMaKd53ecCSJvgPuSSXXEhWfaEr3ZYktgwRP1RPYvVUK2q8s5QxJjRUdpcCwXo2QPh41vYkeTaYwLaV1D",
  "key45": "4MfTHuf5p59pBFpNUwDdsUQ5SC7AN2JEZuzBCLVK4fwJd98YSbyDHweKhLdb6AgqgX73zwVcSxJYzYDHq4ch4w6y"
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
