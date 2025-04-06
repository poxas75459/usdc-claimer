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
    "4GiHhtQ7deWb3J8CPdCFQhsyhMwPp11QnqK6UREt8gwPgBxkpCnnrFcmaC8ZKxPTMtHJr7soNj2bTFpdPNDSdXik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LgULW7pLctfrik4jvXEBn1T6nJpzwJx52r7St5DFzRdb3ZKTw85CzQu9aWV9xCagqGwvEZpHHfo3QBnAKoref66",
  "key1": "ZdwWEMZGAwvrGJ9wi7FTnoiwMSaeM7GbutVTwT21E2FDw1Q7ZNj2HEN9i5HbnecymZHLzvVFJmv9ZrbLpsNrRQy",
  "key2": "4PuRaAALgEVRMQjfxnDWFSsuF777o4JUpNB1Hreufh5Y2ZtVkUMNbZSAXnBBwDVrhBxuJK8yaM1g2QmTPB2HEUUD",
  "key3": "4mWPPwxFxCsq1H1xgKjnGNeMkJjzFtgV6sD5s7X8wszxAuTr76JNzN6MD5affdiDB6Y35cvnRpCmSCBPbfy9uA7m",
  "key4": "5agqCwYf2H4NMfANFR6UDU5v1Aj1oChYMZFq81m6Vwc95PrcyfYM6TdUMAmQ1WLPG14ySncKndqb69EzsJA7eDVs",
  "key5": "4JzL8MWdJNv7UiRZfXsgR7qsGwswfWVttr96SXTPtBv2qGXXHxiS38yFGPBtS8g5kyPb13FEz9fAVBT8PGiBpJxv",
  "key6": "2xekpxysEcCAg2vnbKBomqG2Wb3pPnvFXpfCdF3GrnuG4GZTkxjH7YWdWf9KanayqUQfV8E9JoK8x2bEgx8MzH1o",
  "key7": "4rHYn2w5vvacpyHTgNbk1wpCbiXo9ocmBvRAdoiersvYp7qKHpyP9kUoU9S83drxmXQdX3bBLWVGUWAgjNcnakdr",
  "key8": "2sTnndCGorNepU4WqiCNR5oE8kv8uegkWA3exqgbpHtYY9FpXHTtkW75kGXqTcXxTifJ2Qx6V3HvQRPa5UM7Z9ur",
  "key9": "2ZN9zFsza9QMC2rsi8XcTjL2p3UE4QL86bdaJyAUEVCN4qwT4Ktm8QdeAcarsaQTh2RG7964fMxSASoL68vgCRYW",
  "key10": "39L46cvB2YzRPhhLDmNnvzskjcFUtnHuhvdYQiGcPfK1GRtHFZu9gFm954EMKpcQFhkTwMMZNkmJDF9ZX4T9mdaw",
  "key11": "2dH3r21qz5eZt3ojggphskzRi9Tz8TomoXkJP94cLVZ292truewkiMvPyomq8MDTntRnuQmR8jrHo4vozqsjjnBg",
  "key12": "3i974UxwDd77g9838Vxh58iiiXrH6kykuDF7nr28mpicXa4S19tyeEksvTEhvKi16wtHMBGUBqgxMvRJvJeDEqeg",
  "key13": "2s8xspTxrqTgvRng6SfNhZCsT84p5PgYB7n3srEJ5vbRcyud99EVRMu42vQPPNM8v37EmAsJ41j6xS1zdLi8gBvA",
  "key14": "4TnRB42GZTAr2mZcoNeHKhWPgQU8oedxWGR1wWSSvVEovT11bxKPzBxTzkqjozSumjSRDCadrWkBLNNnaUi7YNnU",
  "key15": "5j8ERb62a9BuyvqH1kb66Y2tm7P4xaKnkByQmqWYjSM1nqYakBLXavsDxK9iRexXLdAzcLrcsXgGMDWoAgwGrZGW",
  "key16": "vxoDX9wRxcYQn4KKkcmkNcRMkiwXD4u83ABF6GtRW3vtvoCZ74EbhvcQ8u9fciaLPUNdW49p49LxjGN2bBaMu8J",
  "key17": "5HpQdZH6A9EYVCxzEvn1Ta4z5X2aPQBx7MrW2nboHLmBJem2DMgzEDhvyik3tXq3dSQnPpWRjWqp3S3nRDE4aGye",
  "key18": "5gF2bD8u2QFhLYkvJzUf5kSbA1cyhmtp4hxjvrTDkqQA12YqynTpT7hrt3J4LhHZWHUQwfo1MS8FPG4chkgaGigS",
  "key19": "QZ74gJbdrFezUUKzw1jJQ21oJ2YcoWHZ5xsbM6ibDRWtmNuyGCfy9gqxi8TwXGjuh6cyvwCrrhHNMtihjqRvLoD",
  "key20": "2VxwhaSSFQ8RajhWcuvuXQdxGsK4QkqxiCh3j5CnkeDBBoutKWe6fvSbzDC2dWW76RVBNFE9YBkqx19JiqtARrbr",
  "key21": "4fYbBf3P1TtnGnbDDCLF5St7CRgoN7cNZ8ZGhqAMVxb9AuK3d1zgMBeoq6mJ97xV8Xmxmv2mCwskNYTd6GJXZHzd",
  "key22": "M7PRrp9akDPAdYvhfosUkdZ6Hc3efVpT6FxrQY3RkLbmEha8QgJSxv71CpyPkq1p2t6j6QCEqr5LZyiZ12mN2F2",
  "key23": "2XBusTPcFr34f2waV3kR6ioujESoJV9M5V3b2ivrvFV8gCSHTsrxQsFSxP1YZK5mPDcYNixhT4F9f6R7MPhgxF2Z",
  "key24": "24tWsruGReZyWwvVqXVqC35mhFSWEGNECfs5XanQMjRhsB27A5hRhzqbSXWJdAJxdHZV96BtxKU7ZeWk6wQj8Up2",
  "key25": "34he8DQ9gGYvLLVQw7i4w29PEKhYqp2hYhxU2emdsPtbsVjqnjQhvvk8aqAs6Zj7tjaHX2FZtps1QESzde8jVdSM",
  "key26": "3CDGmdmLuCqMDM12FeXzdgd3seZyFPybUVrtMsKG9d3PB571P5j6YCxbbSCx85gAWWSsEnKU2wddjtUnYbYPFN2H",
  "key27": "3TesgZ3t8GSHBm3MXccz3mBdSSVyXvaW1wmBX3mVnSXy4fh5iMs4iTS9U3uWavJ1xzLeEphYktKjriBeuivjTLck",
  "key28": "32FRs4kdarwbwGHVDXgxXFhJyKsgUQUyUD262nRErND1V8z6ELm8DfmeQTDFHRUkDUCySsR6wXkoqpzqDV2FKk4u",
  "key29": "4Wr6DuAerMFMGdHMN89tg5CoiNrT7BpsGCmjPphUe7cbpw5u6K2v6uNMLBCCjrBuDPkRxaDuckDjXdsPdVChjdxq"
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
