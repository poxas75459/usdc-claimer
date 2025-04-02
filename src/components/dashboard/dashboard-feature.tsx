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
    "5nF8hD12cN7GN3SxejP2Pn3fKbAR7Tpzjc7w67JVuwc3uZDeeecCHNnCsvTMZeERPCR5kYLiCYhDFNpM9KkCAkst"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xi8w236uS6ek4BwyqeZhxMLiG6jLt5UE8AUNk9K6hQ32Z1jqdavHvXdcNFZ84Vvcs6ARENR4bFiSbezNDjRinMG",
  "key1": "4xALB3EnK6AEWsG5KgPQEXWxeKibRcY4xBLuyFKd6CyU7HhKbhf11oA7m3PVyCsjMegsymntTUxWrj42ScocgxAq",
  "key2": "3nhxSNPwvPPvNfwgZcHsEGWPenzV7EjRedK2AWvArYoNU8JuYvZMX1cYZ1pUG375euWbdvPVzAFtJELqMosoLzMG",
  "key3": "3qoCAmPhiHtCUz5i4o664kVErZPgied2F3AXgpvjexR9x7WMz59BGc7ZpS2pbnUq2t7i1FoDRC8S1dDDCjmk1pGw",
  "key4": "2Ng4YkNQaG4JS16DGuAcZGLjhdE56TGayeXpzPVwfnfWHu8aMQSZ2wPc5jTP4z6rFJ4pDcQcyZK6xaDWsmeJynWY",
  "key5": "5dJgJ6nDwy13S2mbPAen6T1Veajz8oPBm35Zcq8gaEr1PUmE8R4q5SJPr3AfKFSWensNmHAQLr2CyoLj8rD4t3VA",
  "key6": "5tTQXTZK4WGugHi8n1AmUhjKxdSmWLr1gH2UzBUU9RrxCstQXaNpZSLSNDauiG1MbL8P6W1N9EUjUY8qX3gwMtYc",
  "key7": "4MQC38mYPavt5Z3G65ebBeqhPFEuM1s8486LystEEaYmTgcu1wCHLmezf6z6WR5NFa7P3s6ddGvWQdd4F9uBmC1H",
  "key8": "4g88Q513vpLiRoX1E5YzbjnfZwbweKA1zavQNv5fNZBC3Eo1CvBKt6Kyi6pum77GX5pkUdvjCgyiPAzop5s3pfQd",
  "key9": "5Xp8fBvjuUixMVcNuv1Ei4QUNQGnhiT1mGF7MzsyPU9ooENJUkZeMF3SL86s75HnsL6zPuQkiMNyXNC7R6m5sTWp",
  "key10": "5xCRswNcGUshDAhPuTNcyfq9UezQFzWizQNSQaLqwvPDPHstwzyAtBmrffjUecaoa2cWm4XG7Dz1u6g11MgmeEVM",
  "key11": "59nHK4k8b4SksiK6uA4MetXp38BYqK9XiRRxbv944bbLkq8KCsCgQP7GPpQicRe6gwctTYuq4hjQ7o9p7zeJyEhB",
  "key12": "5wVzVtNDyojYnCaHxr5Dw6TfqnAN1gnoHje11UoH6ApqwGdnNqpB75TB5u9BdzUf7LjDC2NjrA8PJgzSqvjTm84x",
  "key13": "26wuSSLUUQuEpbrE1ZWeRkNoMAJU9bgdP36owV31JFCdGKsw85htdeZBnAm78cNdE2nA3RKsWkQPnRJb1qX1nBWY",
  "key14": "59e4zESFGK3Hh5jBmHiYTXFSGdTZwVx3uzaCai5GuRhQDc9NjaR2Ed7Gh1A9PoXu1HeGZecidaDZ4GQxCmUD5xHU",
  "key15": "2CW949GZMPGStAKWmh4ztjEqYG7E5Lv2RRuWCdhfgMj1eWfidavDcZswduYRdXtitAM6og6cjzLnHJSFktppZRiS",
  "key16": "2NdcWhXz3ymb4Vv1tPbvrn39rXipcDtzC2GHmxRN4cybEG3LW1PFkbrmchGFhxyqtiaPdm57LjLHqayc7K2wwpNv",
  "key17": "2HfypCLL8ybp3b5rAnhzXeRs4cqhVgHyFM3Dav9516p6gLWhpAWgkFrSnGVTu3mTgDrTNtsBmnofswxrTSWKSsbL",
  "key18": "Lu3zHY2zsETfe4uzxz2ya8J2vZWf4yTmRYsrKbTo3ziikybHRyoAW61ayeJdGsaFZ4k9QqMhfFDW1o3jHW3R3PV",
  "key19": "4h6TF8CT2QtK4AKXKnEPBcZazacwGv8Zip4r94Lzs9VckdqP8Ki2cud8fjPLUyJgnNLztsfVYNtyYV5bsFgD6dNB",
  "key20": "2dV8BUt7UmhgtNgdEA5WMxxtW53eBP8seftVERcZP2dadL65ERrKtVjSJMAdWtLgSG8DFphktMuEogW1Vajdt1zu",
  "key21": "2wKjcHtasLLsY1gHH9mtgVD4ucQqBtYWjT1w6xkzAk97m48sVNjwA7u63gTh2Z4PRfoWaniDqre2Hkk7WJe2GFbz",
  "key22": "4chBQvriRtXV5DmgDAfviWjpyb5TkWjWuEcPkFxc68ENE1pyb2PLpro6VhGQF3KhUtaovbURWVpKzHKCc5RjYWwN",
  "key23": "3MpNsJQBkLaXyEFSZfgcn2himsMUPS8e1hmS1omWWdVVeXBgfSN6Ch8uEjMq1WPQvEJ5twbTxsTLZGrtvWUSCcsd",
  "key24": "5qsMXigNaRoLaDGLk1GAR4jNShaAMbPiTjb8uxQBnhxTnvsEx2ZCueiPMhthYwJUeZqDJhb94K22Woj3vvwP5Ltx",
  "key25": "31yccT661QwbfUazGECuJvSPj9yLTDLZVJ4mkp38MczFzBT5RvAdm8MU4P9Xi51Wj3i5vRCgJNxcVj47osfPzLE3",
  "key26": "3MpAXpCfF336m27sTFo7JeDMRhQy5M2MBiiQrP2GXW556FAMMpwsBgTk1Pacgc8JPrG1dGxUJ5ELvmkHz6KXDwLG",
  "key27": "5Hart6e1Ypj12yRikz9wh9SFuCzJ2t3FL3Dt9omtwSVEN3uULH8mwCGfJPhNVhncnMoZyaUemDQPmdbXsvtmZ3HZ",
  "key28": "5wy7ya2yp7ziB7bWPLEW5GiqASyfa9eXLy1MK1WaR8tJp8Q8nSWKXBjTTufTZyKPeie7aMAScVd7vdJQFdWjNC2K",
  "key29": "8ZyEmoZFzNcwPrXZawtmewbjirov5zjppF5JSdH3SvpR4dgYwguPhrwzrJPHj2ajMQ2TQzht5pQJgS2ByR9GMCL",
  "key30": "u9JbFaCdms127zajbNXznK9GuVu8ijUCs3nVE6Pw1Wf22oPWtfALQn1XRTv7zfBWPQXyHBSMJdEwL63XPM6qUjE",
  "key31": "c3HP1gd49cJZauMa3cezA5iCKnHy44yWfSnXVCTWV9FALBhkF3YwRYWw8fGcKbP4gHZdNGSDvimGWgAmcMuEqYS",
  "key32": "2WwoRQZPCENHs6GnXhuxMR1KjMfcXsdug5xVtYLk5SrUkufnsgaEzcsJnW9VWxyb4F9kziTkEXcu9b54Gnu4Cbrr",
  "key33": "fDSSsZr3GGkH3zQzNzK2wfo7WmqyEo1N4VsAjra9DWHTaTdNpKwPUvjBS5fEpGSWSWx6x2m7nbGW1wA4fsMRuXT",
  "key34": "3TPYJLUs2T1SLX2M1GtLDUje92nRZ1A5qfJvo4ozxrLvLiwBbVvpVLzXz2Y5AxgsQQvV5nGJKdPHcuwBTCueXKnP",
  "key35": "5SAP7KKCGGU3vnE2RfmNvE1a8CdPVZiGKdbnUXKo64XmewAUfPYTbA9AbteGKnV97o3EFLq2c7YFeWon6CVy86RP",
  "key36": "2U7vNwsfdH94BJf5fxz2QGDpRE3BMiB8HNh8nh5dP4PsPPYgUWK7L8ZjC52CDbbdF6N5SCSZKxttz8EjBnWjWBR8",
  "key37": "5nj9q4dmZYgJzKToG5gHkE2TvBQUdGsgYFCPgcN9xwe2ixZmy3mmhtLf4vA73Dp2RDqJYDHhmRrchhX6XqqPfgwi",
  "key38": "3A8BMTVBSn1FRwnrfTjVVzNwrZoLkWMPDTF5iGGjgRDn63zeE1XC8iYESqAqALGPYvbBnKArVyUamq2DNjMFcV9V",
  "key39": "3v7a5tHWyphJaX8ua4eVmdCzNVkvjJqibhnwPRiem2PMM5VWDFLJyyYYY9uqr1T8R1qoiSQxdmykgCiGUztiodTi",
  "key40": "2uBKEcYinwKA1humUsaSJbvCbpvkXUae7uMguALKks8uoE21viV5c2g8Rj8nHJLhq7MDZNGJvNEig2KHWxJ1vpx2",
  "key41": "5TMra2xXPnfhKebVQdFKXaMX3XncUyqJZAXqTV5uA2fAWyHoHNDeGzLKfw72ViT7mBZnQxNw1GZWkD3tG5jKTpsE",
  "key42": "5NCFSDVTsJ6X8NBKZhnm3gkxmrVbVg9DHungGjvikoqmodBGrTG5CWkKurJdvqAugbhhEPKGJHS8CCVprKAit6ys",
  "key43": "3tfCbPor6B1rjEAbft6bxnPbG9ZsfaXph9ff5xvgajoB884vViKdeLSFvqPUdBfZ7LSERi2jkGsvy1k1NE6Tdkhx"
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
