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
    "5QGAr4GdBEZzf1QjbDjWNTRXpgHTcNAs64VEvGsbbJ5GqAF8NdzttspWfvdZc5tPZrZzWCcFvoM2bu69jGA7tBnr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BawsZbVaeGxXAAdURARQLhhj5dnKNdvb43PktrStaMW1M76oomWZqe2JrvdapAJjqktKX7s3UmJ88prfNcrebXG",
  "key1": "4tWbLzNwFfxAJcGSUXkJ7MU1k4ECZLD3ikR4WP1w3obDAQ7tiLDB4FBu8R3DsnKssod4q2t8TeHHVAZjUSqwb23c",
  "key2": "5BXU6UraxWDBineCy1RRv5obWvhR9h5gcxnUhJ2b3tRe9sq1S9ks6hfsvysVjBq7xQVFB7jruWKBp15A6PfiBj4v",
  "key3": "3r6QZgPEDpKdXTF4uioPWsNGeGck7ipFtmZyxSrnpi9p8ecawD8gTw75y1SKsY2hTLdrNeHhzXv6vBLxPwEdKAZy",
  "key4": "WkfHEZJ1e74DeVSpUwc7534nVb1vRi6Wu9cK3umLjtC4x457qPvaubYYYE7eCG11XUE15QxWYL7SELzNaa2Maqa",
  "key5": "5b1zcRAWs16ZQN9ZmpWUmNrnYD9sKk2Vb9faRjueiZ6cSLM1NW6FFeNQve6STfU8nY7VvUbaYt2E6s6Sv3KhQZ4z",
  "key6": "AWLzMCM84HzjChpbMjrciCnErChDBvcqxaYQ3VW2HNL9eveftd4wzrxM6gfCwSXpbjjn6o3tNbQKXb678tXhc4g",
  "key7": "2kSmqH9awDEwM1wR5xsLjzZPoCcBt74aby5NebL4jppjAczjK1nPcigZ68W3mgyf3a87BpyYf6aW5JzdR5inb2sc",
  "key8": "66jhYNMD3fWUHJg9Wh1iA5tT2SHPZ16BPDyHsZwvdSvXy5ZhSzeoEeBm4oGK957T7tgMknsbTHZwmNUuYWDZg56h",
  "key9": "3WdtsHWqezzEFYPEhYZvkTgBeJqak2pwecwUAwPaMn2kTaGAKUqEYeEN1UNeQk5Vng51V4wkfQMz9Uj7eRWUs8aC",
  "key10": "3VzrUMb5xv9PAowA59aovnT5YSu2r5iGdodg31hxsQRx2K4zgQBmkDZErdp3BZSG2fZL3417CzPBL3ePAVQJvfbp",
  "key11": "Jib8jVqjM2oD3twF8fTbpsgKus2hD4L8qoaYRtce6ZMwDqjs2xA28PYibAGk83PsERs64LUK4LPMbMJF2PeogNU",
  "key12": "4gkLKSgeNngGLaTsQ9qE3zbQviYpn8VgRdFLz9xz9VfEQvH9aLvyNEaFXwzV2CVeWkayKnua7donRV5BRfcCaxZh",
  "key13": "5CVMK5K9xAVZMmPE86D1cJV4SjWpWE7uRDxiMErtoxMASxZFhfp6girvusXaH4hbSBVSw8eFQ9ux4a6PJU3RKQCo",
  "key14": "9nSv8atgErysCzV2KXFqiycRGjEUShtwZ2jH9cLFL8ENyWj4GiGQpVWwvKi1uMoK2VBfiErStNT53wab7MsNmzr",
  "key15": "2Ud6774YfZefFtDzQw9gELfBG8Lbw8qVJv5icXMJ8a9XxcMCm8V18X68BQ4TjK6dL5YTxbEfReCRqgiGa5m4Jh3F",
  "key16": "3P6E1qR6xgUrWqghHRxyzvYp3EQfr99HVwBhRfX9XyxS7voKmCzKkKtoaLB1CvacSbkHiM8g5EMbBBgWcKwyXRLE",
  "key17": "4dCBvbrm6MgXeJ4sE1Yqdm3SQGQP3RKMaXbqNw3Nqz3FcPAF1M2fnDfXmu6XbfQWHT5ene7gky7tGwWVfCurZPmq",
  "key18": "24rNi8FRussjeQZUKxU9ZrcH4tS4mEqkPT1CDiNabfg3HETjc4kmje888nAHZzD5iDDMzFT6UQfHWq9VVTCK2w2Y",
  "key19": "43GsbLWFKxmqHmKtQfSJ9NAxJKA1duUedMPMN8ToazhxxqiWYin4cv54dydiANJdcVAZUigvvsYL5v1HmgfB3h5W",
  "key20": "TLj9KJaRoYBTBUGnTgxhDmH7byv58JRq3cdgYpkz6JNZ6RVhnhp9GFecdNJakX65ngjJej1onX6zwWNEN3JgAhN",
  "key21": "3iFo8EdoeFaQojzU841eWAUpeciicUg2mEHwMjNFG6L23eDbPMHkAjQRLaEDxzeCwiUm8moropjDH7XbpZuFfFYK",
  "key22": "4cicrH76ebQ7MtTeBRvcTUUKqPwgswYwzv5jNroPC3rzpDau3DA929H4FxhqgdHABv2je55NzpeueD9vgnAU4WM9",
  "key23": "35QM7jUrXn2RwymWVq5r2nipYqkAwfFGMbKCMaV3StBN5PSYAkGXpCUPDWUpAFR9qdqJXBjSSnF1ZmkK45hwp78a",
  "key24": "jAck993i44U45yRjgbDRfMQNNtW2pGuyQfx9sc5RkZdZCsA42f8MsR75XvoZqHESfGkMgBowi1nQXtXUQpLpLBc",
  "key25": "3z5TuxRb5cyrvk2fK1seXbaekSdZBs7EFcr5qbBC1YyBkiufEG66MMbEuKtumSB7TVKzFqtrYdveN48nBFkneUo3",
  "key26": "25er9F2815BEcyARrkAcHM9Abpt8TqRpzUM19zHYE7kDFr7UtHbbefFgYgcfZok68oYb5EXTcpBpXqW1UA5HuEYc",
  "key27": "4oSrbFYwc1puAFM3yoptXDf3UAsMhGzTXeLu5mfGMiVsQhJ6LFUTyRirENp2mBvSnMVb16rz21FH7r9QErHSvWak",
  "key28": "4F44Sq58PhyvB2x6QeBmgXTZDNjjeYEJxMTnZdoEA7grbVoX822TYLB6Yvv9iVXFuQiHWGBnhGtcomR13Af2Uf3H"
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
