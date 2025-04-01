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
    "4MeLz4BjrKY6nPsju2gmEDkUn7oZDovWGUVQNFXxQChio5nDacZ3kYhvwgE3CBAFPkooWEDFCdsGU1zqz8eBV3b7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66Y7qD7PsmDST97d1Lpzai6mGpjHCgLq1jRdD2xpsgaAN3rbos1eJsPdn58Tyrf32zdwvYDxzpeE4AQsd6SX2Ber",
  "key1": "5GgTKEEdWk9Csv6GaUWHHWgJx2yph62GNPX3yNQbCFjCp7cHDL5ctFDaJXxDiwYKfot8nzHbQqvoGv2uDVFvjwGa",
  "key2": "2vyo1NUQAQHky6sem25z4LEPwTrTv46o4UE4YhHQKkg3hWLmCcDLVr2DfxY5REsnjgu8xU1uGYtuvoFwYjZfru81",
  "key3": "4mnBbre98aoJMc86RPHFJdRXGzg45aQwo4u5dW9qaikxXTn3RegscjLsNgnPUZtvxXoRmEQ97zvL5hLmjm6X7yq6",
  "key4": "2swYKpPV7tCs2go4uMVjNL78CPpZcdARwJwgy15RWyxqAJW6vbTT4piNGJZ9mipDT6XaydjK8vDMpWH21uT2YAqu",
  "key5": "3hySo7NAiScvubvag9iDjQg6YH3GZPNrZGPd9pry9ectBiHHBCYkz4rXireTZMHejfw9UYhFpFCXo66VVFfmv6tq",
  "key6": "PymfJYgJNWD2ntTEN3XtjeHoNWSt6EcyBPx88KVpRx52gA3G8ZJWtzKerqoPLdYTwod6U9iRyLCaTro9wC2h3Us",
  "key7": "nUqbaEV4LFuV1yTBiS6RUQsiHd4dTVg8RhHzxZwWxFktvSZ1ydtaEJWnfWTmt7Fyi99wRDxxenPDMbpW3uXfSAQ",
  "key8": "3Bu8Hi16Anjmoj23MQ8Dc6XFWrdoNuzsHVJHK5Bo3WPmna2aqVcKy6ogU1RYLVNe1GidViPUcnLMNCkf6G6YBjV1",
  "key9": "5SbtKSythTRXa3oMhZfTMZ262RrFKietP8r6VVFuWsLpo8ciGrLesgsqEy7nTTCb8W2NvZfd2NUnh47vmcGyWwJE",
  "key10": "kJxnjvFvbFtMkH4osSaxAKoZ57BAuU6N5r6imvFRWxipSLjWyPg5URC3gPbFqShFkJiGhVjK7qGZom8zA7sC6Ug",
  "key11": "5EdaUYW34Xy31KyRMAd23m7QAskc1H4T1Hw6Tkgqi3eZFNratA8f7VQmnNagDssMBuhz1GcoYPgfxBojoeTMWW4f",
  "key12": "qjcLLfYwty3UdDUNzuBX3kRKT1PCrcfEYB8o1uEm9hAFE7nr3pSHvKbDGGBiXjpS214U89XLfAzmkaLC6F7tLvG",
  "key13": "3dDJ9GeC4LRhzJUvCt27XbhHwQqBVNBi4G4v9PLVgUN8caxaEKYAtiwmRETPdvX8GBJM2VDEkcxxLQfd29vnu5pQ",
  "key14": "3ApE8jgfNawkougXbQPWeE6fLyahfaEvkcAkEFTZW4FTTZM2cPbUZPrktrbBBv9ANUBRXdDFxw9QJX1TGXjh7YCD",
  "key15": "47cnuXjTQkg7HRxT43m7pPYte6Uh1ods5Kfr3GpJb4vdVL4VayNc6c3bQR2GWqQvYu5EYsCRAotvpbpQaUF2h1qa",
  "key16": "2z3z73fBVF8yPkcCDprpgctVx5QFf9ZsZ6UaiZdMZ5g9wsisDnhcfqmjAFpigUTmHTtXtYGn1BP5AFADhNRJgjBj",
  "key17": "5XdoGMbPZ8ZmyZdy3vMFndwaC7HSzqBtVoe5XNoLPig6ne8eEDaX4xh6FgceyUHif35m3YrZvsCB8FApKM2rST3e",
  "key18": "xNAUCmP5VAYFSvANb9rwUdmQX3UJSGBN4C3gqcr3bW7Ti1mvgNrNLg9LYjBn7oAmr6jhTw7soC4oFbiT2GUdDgS",
  "key19": "43jwf85US6QQes9yJVcNnVCRCZ6CBLgJkoG9SVdJcdMBskccHdJrdLxG33zbnqPwJ1R1XSUCTJqYkp9rpxMsAd7C",
  "key20": "39HmsJHchcRDGUkQJkHkEjbjC95wPtxsTRtv48a4w4oxcGS1wdq4VfJQK56HpYXEZNq33nK1jLFZwTiDxH8FFWWa",
  "key21": "2HMLVZjGqJa9YRibUWRsHtwJBYuXEhojChkiuFtYq2fCrxTnzE5PkLB92uDMNJXpGSXqRF3PuV3i543iMWjD7Pqn",
  "key22": "yoHRxoTGaSbCUdeJXWnjxmWyFwqJdWrenQLscmoRFutyWJBWRpove4LFJmSCLqUDPvSBRPD9pWSFPe8UnqLg5i4",
  "key23": "49jnV41JUn3VYP8M7gNa5bo6bhpM3wpof7mPhrveKjteCwjJVucVrWjpzgSdwtXwySbqMikehaLK37fzUyYXNxKq",
  "key24": "3AHzBxj6PbG5XsFCXZNvUpc1dN2S9rjnW2hviA68GbetNDz75VyK5woLK3dC5RTwoHYatkbxeetRWyk2sQrEMWoc",
  "key25": "3xR93hD5sSXruB3ZLih8dMtj718tQWPEXWpAgx3YFwuxTMByqDVFSXh1UGQK8kAS2xrEgTVLnu3kPXEKdcTkPUaM",
  "key26": "3JoJRjgSnCV62K3SgHFeQ623kr2bq5iXq9ux8iLBoY2ut4VHD1A97v8sTKPV9Qjwaz7yk2ctkYo5F6sjmwRoMVyV",
  "key27": "Jq7rUrdtGTAfPXapzbvo4iTdcA5sGJ5DrA7HhAVdB4pCjD6YPAvbs6ddn3VZPQh5Mnr9kkhCbHV3V3g5HgeECgY",
  "key28": "2tr9cyPPw1LqZGe2HocffS9FbX5PXyBhWtYwrycSRVfv73FndsrvLbbohrfSZER1227BXzFgnHAF9Ftf7xvkg7hR",
  "key29": "4vCaY9PiCSMjceYGG2GXQJ2QhLKB5M4WEhecmdPqBuPEFsgNZyQJHqAaR1A4YFmXMTpZwSp7KPJs4RoDhbEEVV1R",
  "key30": "24gubaDJao4htH6JdVejdvJGvCc8dNTVhrC3XCb8SNTy5kxfxSqidVgbVhdcfpfnspwEccoRjx83k3boLodWfwyc",
  "key31": "59iRBB6aPe3EoFbtLw2tLcm78nFUwxa5mJJ5ERdPAZFVwekZCE8ZjtcbkR7KqQZAh9Rwdat5FZYARVtw6qdointg",
  "key32": "5ijWpbeL4bFLszecENNr4nZKQv45gdVqhAQ2gkAffAASy8ZnuZLsy1iepGo21Got67QB4g9ZGUnicSKm9C8etKjt",
  "key33": "LgiQqRXx2xfcJ8MA375KFEJHoX3UgAFY5FHaZnyk97JpWF4eyXFsWatU5nZWBYMXh1AzoZNFHBUCiF7LJW6ZW5w",
  "key34": "2UiAGH322bGhPh9WRHmpWN199Y89Ynxx3KPm3kdowDUW1T1wSmkaTXeZSSsSxQjYqALneVUt7eKUhv1nExq7jcN8",
  "key35": "2MecYF7wzot698jvkVzp5gB3SVEz8chBKEsSxXCQUULgqzzeV6ubcj6b45voZS8jqqcTCJgf9QCPXGTpGYh57XRn",
  "key36": "3R1JNeGvJeYnTPr25CkZWyYYziDpQhsrv2srxsCV58aMcQrMs83K5jUpLqrV7S5vhQcNJyeGodoBBRbDSpmbmN8D",
  "key37": "5V6jDedzSPdhEEb3i2NxDfWYHpLU9GkfkaeYiVK3BNoG1DNRcCvN9W8W1XQtVVrrECgzP6mUtqR6c8aHpjWAoXkZ",
  "key38": "2c4tsFTvR3PB2xeohgkt42SMpiRFyDYETE8H9oodYTbhL721QrkFnAgrCQps14gNHUwK3jZWp4jR1Yf1hPLzg711",
  "key39": "5UNDwfqL2GKeS858rX3DheWjshoiJXdP7D83MJkN9HvDGtdo9HB9aLVPxmiSsNjcmKKthFz9bv4RTYowB4wYW4ER",
  "key40": "57hyYtpGpZCokH3ZzZHBx7DHpUx5SaECTwDjA8B9tjrn8tA6W8vZCw15A2AmtCL5QSrKcSrLATrSBQjdxJwqwe8N",
  "key41": "29jRmztjgLhB7ndySb7kbZ5FbGT2MCQ7RS38vpNm8PjZXEqb4SM2sCNjmw5Pt417jtCpKp2DNzRaAz3YNaoLCdi5"
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
