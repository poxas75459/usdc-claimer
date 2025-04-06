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
    "RpUNnWUsoFRGnkEMwJHNDbuNjmdx2BBfpGKLWXh7ximDBj22bfDNhsNfnHpD5dC9cwRp23nvDookAUCkbtFBFdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5piNrLUM4ZLSvJMNMFK3c2bjvUA9y92ZeDfyxG4GoCsmdRRfjxqjBnRwQtrvwBFJsa82k2DFzeWpUoM1rsyuQV7J",
  "key1": "4oVgSKTJEztGjsQbXxTdnrWFJaYKCrmj6cWdVxvpUHypmiagto2XjEfgDYiiGeUGvX8NzKyvLkFqopiXCwPRcyT2",
  "key2": "5AewhWXuFcLze3opBP9oCD3TZ5kTQAYeue5MMSbpiYFgMjQ41vGFgi3kevupwsPeptyPtP6tsXJZG6mPLJHWEiBD",
  "key3": "49XPcg5KH3sx3e4MQnfdF5Ep5ArQfcuXttL3SWLx2X1EJRM3Yfk6XuH2XYBrvZvUPT9RGV2pEUAw3gw2gFkWk3GN",
  "key4": "GoMukve82AJPPUEC9Uw2PpU3nCYpXdQvGfK1Se1B3pcHamYLq4Seu28Vot9ueq8GwSEEyQExGAmDzhivVXjr1H9",
  "key5": "5gg5yMKsdyJMfD4tC1xjeB7jkp9psBETvkzsh9m6TredQWUNF2PKLrxx2i1B8f6V7QavqW5XyPW4X1GfUeUzgaZc",
  "key6": "WNbJVkqDVCK1aHYsqrXR37NLKeJ3JHL85ocBbmWLMwrqcwjAJ4bJHvCofQXxVHtLkGH174MnNkgFe6AoUneWDjT",
  "key7": "YXB7vBUPDWapNVhFwMLBPb87tpYB2fUWtAirP3DTSB96bnBCNUEEd2RuD3PETj9RpfvkoDFj5GEvCb1RkPjrMfW",
  "key8": "3aoFwsE55W32HEczykMPo4PJd9NBMJF8d7SSUsB26m4jxTdBydWZUyvGR6V1uT4Kzy38n1SJzSeMvy4frARyQVgR",
  "key9": "2kuisHznpWQLRvVDZpZvnmAXLSHSqfJegKtwg2PUz1kAuNqEhgnkjoksVXyfggGXecNQusaBKGdPKJxD8y97c4D1",
  "key10": "4BoM9to8ABxDNJZGYR2btKXvzWAeMPFx59vZkNb9fDPduQtAMa9DUHE1Znh7pNpfUAAWdSggM8Bwz3mW12mqxH2C",
  "key11": "66W3Pp6dkYmrsH7xLwyraVUWAbu1SiAKWvN9bYoxwm6rkZjBLCNQUAoKNUf4nRUrVeJFswitZcUXMuxKcLEz9KyY",
  "key12": "3tPbrrSk8maje5crKfVMuQVcBpiZUu3oS5jBwu1EZNer2VySdK3fUPPbQh2buLLdvt3DXnercjbBKYYvB8hdFPYK",
  "key13": "4HH72ozbDMBiS6rJXtUeJrhFnwtbDYHRxDFvrDidzaawJxDjp3VGM3rhkcPfrjzfoUaADRiZhU6nXVD1PJVkkPw7",
  "key14": "55doNQ4WriENFa5gsERYLRVggDa2zBPvpRs8eLUdKEJtsvmFr7gPvGAsPCoCp2Pa5hKmeQP7GqcE1zAHDbGynU2s",
  "key15": "pL5DPc91n9DvX2nMM92ZBMQa4xcC5p2s9zpjkyYeBW7k4ncWLhyV43BVVbViu1PhThcGRorA6316DHYEXo3Sjeb",
  "key16": "43npPCa6iCZr2q3Sk93zLmisQyvikHkChTgpLKfXJcQT8xeDofWuCXHZuLsjN3iEXngNp2KoySeqV8NYJeDM5TQG",
  "key17": "CEYGWGDzUwaAotJid7Lt55x4rrfM7cRLoTYTtiozQokqSDG3vpHeoZVN6dmVdYyTZgBKZEWBDxYBvQ4dAkp2fFj",
  "key18": "3dCqL57ZYok1RSpwQDc8rFv771LQ6Q3xuQSRqqn6dk3PEcp4KRcWoL1LSKUJWKi9NeKV7a39AQjxRAC2A9PbSwHk",
  "key19": "4uE2h61714mNYttgR26NkCWk8VA6jsHiHEsdpNZ7CHkbWqUYcXvhKx1RX1CBkopykjfLFJxvQ4XW5d6LvqFiQszw",
  "key20": "4WUGV9qdTe1g9hhyZxoiukVPWeBTcJ56inMyA2C87njZD3zznkNCZ745pX2ieqTsbrZXn96wzpPamQkbiXhHPJGR",
  "key21": "32wj2D3zcYCKG9pPLy2psmmKHAJmBFE5umdcMpEBCNq3CLYHndHLpDVBkgicq8M5uCEQZrnBfqd7dBfbydq8LGt6",
  "key22": "5yzc8cGe7LvWP2aa9tx2A8SXw24mv6UxakMfL37MyHEK3EiDeCQ3sodkGvPWmB9PxRZC53FQmawF8bjpbRawm4ZA",
  "key23": "2SpSWX9NRy8Ru1jm148SDqTrEnALiFWWTznswxCXB9m4G1qu4g5ZeFqxvKCgYfeXZVudDXy1fu48mENU2r7LQHzE",
  "key24": "2g26WEuPM9Hs54ngoPDNzV6faTebfLsiBABJYA7aTUBPZj8YgMwuTRJApeQZ5zR5BsBhjB6ej3M8o1zpdLMQ96u3",
  "key25": "28gnEDq7GHHfrgBbAwMnPEYbZhd4qhkpkJKumWLgRYL3tb1yeAMCac5ZhLnRETLaHbgPQCGG71RPkxEQew272JCf",
  "key26": "4dyZJ8LyarYePgTe7qFnEiiEocXBSCjJiwJQbzxaUyf57BYeGRz48sgQpY2Jae7Jb2omoWEgdjBfRWiWLGeoeNjK",
  "key27": "4QxqvBzMKDXt7VqDBBvLYaywpXEQ6Sa2Swh2UhN5KGS2FwppX8LAaB6Buc71ictW6Uisw9FmaduqGn94WqvXKDjH"
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
