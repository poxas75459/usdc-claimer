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
    "b3vkL73NGyw4pM1ZVrWAivN6uGVERW9aPUhc77NjwmjqUNTPgXCt3Wopyf99y8iEWWA6MmVND9kmb4YQBvyncRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MFs47vukDdyqp6bgFmHVE3N1Y6QFqg4XjCfJsvLFDeRfXWFnTBBh4jrVNwy6ChcrBwXUYSZGBssmFU1kXtwXhDg",
  "key1": "2vosDPED59TuQGERN1zkJgEXrPVxyjYAYbNxmN4YJuzLc9tKsY9g1nx3pvjSeQapy5VsmLJynC51RdvmznZ1uv6E",
  "key2": "2ZFGNUtYg9GddP7xWm8gkhnD9dhiUXJhEhJjYkbP9sUFCPNHP3e7WJFiqAcwi2q8MW5VPGAioEYtpzCV9kyZXc2h",
  "key3": "5djubbPPnESjADA9HTtqf7ktVx1WJMzoh5NuCTxBCcd2Awa8yp8hLYkdzpP4gD9hfjRH3U3J3q9731Qrg8Zv7zc7",
  "key4": "4USjdT7h9GiABN2oJaPfhmUcxob4MWuHcVXm1MKFBYGoGNeCFT3srMpqAPmi6mkwRPZeHuZoGu3W1ngG3JnaadL7",
  "key5": "D3htrjyXPi7ssdybuF6osvVVW8RHEN8geo8cBuyK9viczdfPr91cWuVzcweLXKchMXW8cRHb13ogds3TYH8veSw",
  "key6": "5V6LvqMZNt18CE7fJg5V8mgYjvHCNtccu2yySD4TJZYTB86BZBSiur52qMAX4cEx56brep2FtxqX3tyBMVZWBSWr",
  "key7": "4mDvZBaZfSMh4qeaHxsDLRP5DhHnjeRj2ALxjPzG4QYBmigTDYdfuaEbUcJUG3nXjjvUjkByrUNxDSeeY5rFQFTd",
  "key8": "LUjh32BMrpVdgv91XWvz7VkDSt3fgJ2gnECdUNzEuaC8aF2J535HEoVZsFMsrQfaKoKhPXMJz7w3vsFEQCFvB5f",
  "key9": "WcKXFZjwZGBJw1xqEXVviaQVwBWWBemRGQPrTH81tUnpMMYCZDp4fFe7Bpe2gpzde8gh7xcGpsRK1eLQZozh2vR",
  "key10": "3LDzfuuVkn1gMi1i2QhVCHEH8GQ6TgzWkovGLGDtYNqCoSmKxGYXkhEmdqkjkYMU4vX1E9EmoywPAjbATHPU2o5w",
  "key11": "5tLBqRZMkTve8NStWE2TXAXvwTb1bT4VZESHjRPXjbN3NyKE4UpqVrLJxdMu9FDRgW5sHCeEWtU9QWnHEQhE22YK",
  "key12": "37RUP9zu9ccVgfpe9FqpXVAGCoUgRnfMiYChScF6wzMH1chJkZQAYxuqC5XNcPdMUpijgGT2gie5Ro7DGKAfuSK5",
  "key13": "3h5FejzzWUybifgEM6Q3XCWQpVCmX2Nw6tKGKjfcq27iGbTqPBJaCg1s1toZRrkfDZxP5mbqiXSARFUTAZ9jQwkq",
  "key14": "4Nd4xNnBJSN15br2dgKNsjaT4jD6UKyZ121XANqTogK44qRNzcJv6R84EQEVpeDNoP2vFxnuXZiJpgNKqnFLWvmB",
  "key15": "2HUhFSBZ9Lf9FUb4snrFXd4ET9nU9NXzB2pqqeL2P4S69nxSU5jgSBYx148cb5BZpQiLeWs89pyC47R2fE28ZRmG",
  "key16": "datt7dr8fHXau2r635yWPGiSwrUZGaJ9bFbkwSF3DtbE4oGkAaP724nPvzxpTY4r5aWZSKFS8zmrDWkosVfQyaz",
  "key17": "3VDvj3GvbekUbMufwCNkpWDXwf4cqtVWMpciME7eCSL2evnG2HAenFfc31c9LTvkafQc133m5vhSyC2S3oNyGU9Z",
  "key18": "siP7M42s62JQmsipCYXr6Hf7Gy9eHArtkQ6JHWQsGSDLq9pjHjQnVdPsCn6nRdqAXqViBLwugXNu6gruz4TAP79",
  "key19": "3x77zmz5F72JJB275y6CdA89v1N6E8i6CxWtk2ADqAquAWaeh45E9HgatrFxRCiHfrefgXruqVAtQzh37AzkbuBf",
  "key20": "3WMMHAmPfADj52oHaH2x1BgyQwvc2qry69yPehBbFJQU3vgawSCwWjWZ4anwpezfFqWthCnU62pNtiGni5JrXASt",
  "key21": "3Dq2HNewZJCEBbvQ1zivA8p3ijgVDKRgfVQiuJfAaEdQKHSa1enWKyto7ndA9CTpUoNppFfJwo3C9s3tsuZVjZqW",
  "key22": "4Bi9XM9e5iZohPgS7DxnTnAZTREMUHbfwCqR5ffFXWkgp4KQuNcuMxaz6QKFgETf5MzVdFfQe6SbhEPbQfvxRqFm",
  "key23": "2bCo3yEMuJVezhMQJC1hFYkrMFXEqqQSjXqKdvpLjJLwGgGzDSfjk8qDiNLLjvGEus45QukLvzAkBmhJTCj4DUxH",
  "key24": "V988thxmT7ZSQ6CXLR2kSjzztsmZi5nj2wiN7erUnSLBCYK96nW3GkGzzxEyd1TnNvRYfFNBDJMfZU6L5oyaqDn",
  "key25": "4gaKynyV7h7sQ86XqfPtHS2DwWTyNxNzGuYHwTaqiPkxbaoM3EnR6RGuzNPbEnBrcaYyuew24VCRRG77Q21mk74T",
  "key26": "5DYwxnmse9mGMGcz84q3rqmHF28eFtAcXBJZvcATkkubv9ULzzmdjsvEXM1G7XRHS4JfLm622C5epxFCxcqY7a14"
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
