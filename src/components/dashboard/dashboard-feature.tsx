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
    "2arfEvcqAGpm7g28xFvXci3Ar8kcRNLZXaWYDKAqgX9z8yNxuvJh66oruitoWU1XN4rVse6x1Kr38QBaayqDFXT2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23MMRdDkmsyQRwRFkfCgCgupjt8cpoKPPCiveSaT9opgSj9PFZFeSXmSTEu8nkHayamWFPD7kMt9Aaj4FAFjFyor",
  "key1": "2jjT929muSiGWEs734aRCgwjqENcs7gvmvy6mSLzZn6iNx8LhkvnNtWY7JY7Lexiyp7i6GCckswMfRkfMVGwtUZw",
  "key2": "5ugystVGMLq55n9K4W6eFdnza3VDr1qNSSTbnu5fxNcTsMdetbpMaeKgHEsJ6TeZnjfBDxSegZeHScoEcHZHrej9",
  "key3": "4QU8dJxYr3xBrytb4v4x1viVV6K1Ur4xjHHuaVppdfowgurBvjqg5PzETXswiXs8uGdvYv4CNCutK5Bi8jh2DTLK",
  "key4": "62tYfR9XWYgESuUrNHaxuSMDJYeT1oof1TKRdhMHvS5WnSVoCNXVHSy8FZ1zAabfqGvseqDMDxzLZ44qM7T9orVd",
  "key5": "5Di7zbTGUFXC2cXmvMRcyC1nmjQgEf6sGdfvA6txxXS8JyWDbge8VFVYPTtFgJSZrfSQ6GgjusZSVjYUnC3sxxjZ",
  "key6": "5833BVaxz3YEAPuQdMmVdktSPeZd4jCqRtbEJJouTqBB7WdVYbzvUj6rcWGz38mtNF3sRG1nea1xbW4HHxEAAAgM",
  "key7": "2qVzupbZkXpA5yUDBmeT4RbxwpzbTZbWnusiLvhXKGAhk5ewE2crKwCUVqMJDaBR411NWCNnf2hfXPqnEJiAJMzm",
  "key8": "63MAEuWFkC2sfoE5bnZYTyPK5qd3BspLWRLikCAa8RwKF3cRHCo7eggYCQNpjgJY143axLzjt18VQ8iiNN86jHkY",
  "key9": "wDYCRbzZWJtEvtSojYEq3pFoMmHseBiLeRvz9VLbnS8wG78Mm54Q6UezTojUNd8uG3VU3X9Umf6xqbtBcYBgCwc",
  "key10": "2baZxymoGKM7Gbj3fZASFuwuWkyRTS9gtYZ1rk2ycdzb6RJ78ZMBhUe4FnwRwVXoSbdbhufDXNpTYoCSNBbV6kau",
  "key11": "2MTWd94UHi47cdemrEsBjTqzWcJDqKPmXyXXADfgsEpomZfhr4cpFPQoSuSJ6frtshbHTnkeMMkUk9sCuUN7Gmxq",
  "key12": "3ZYs2Eju6qEcmeAZjT4DzFQ4fCAFWCVLMozrwtzriCdZh7Z7K4PQ27C5q8xfzUKEqutYEUSEiePYQM9Rf4RbSurf",
  "key13": "2VCJcJA7qP3c8moTnC6UewTBiT99pfLDpKoi65YacCeHRQTPj2RnrjU1UgxWExhK9kmqA4wA37i6uz2HtgPGpeqh",
  "key14": "5YqZAunTfWUVvk4N1oNWQf1g2Z97hwGerwzp1Y4pMjbjvKenGPdz5BtWzrdT2QdBsPyTXe6BM4ppTkbuzYUqjW31",
  "key15": "3XaEi2Ka6sKCf2GMw3w6o6j7nRK34uLameX5pzHsfnSTPP56YP5kJ35caoM2F3Apb9iKsVTUp3zrd5XbwdbZP7xS",
  "key16": "2mLjaRsgQPxvCAq9EmMam3EZqGTxhcbSwr4t9GQiRyusbGtXQxjgsfJERcRy9586c9P18zESJhauf71gxo3TZgnA",
  "key17": "iM3AtPUFMNPBzKMLUYzmjHcrY8MwxMXzuyUS1swqgHZcFVCtXtwKsnfvQfabT34osH6BwfEBgoLhDLDDYyxiZBn",
  "key18": "338Kw4fopykAzqWk4oFEVJjm6esjEKEQ3d4tyoosyfWZxm4EZAESRnEWFkcyDt22533fhzjKLrq3h9zNKHpRegiT",
  "key19": "xNrczNHCJDihMmCqjPbTB7c46Ufkp1soZQFyHbfvnGUYCxFfqk3dzBWnQ7QCBiXQk3sLfcP8Y5uJFjnKG8LsB1c",
  "key20": "VebVyPw2DLafLTg5NpNCYLoggCDqYn6on9EacBD4HgejJn4gNCuYtL3UAb7vFVox9PbagKHddFGSXhNsGVLDFkN",
  "key21": "46LCpFWcgmw4SyQrizXxyjawygmkqfAagxUewj6Kgq3zBGmxvtrjvvySSxGoTGoRFC6hZokUbhL6zSR7h7ckNPKd",
  "key22": "cLw7muCTWtN5opMwDWj5uoaHFBmdy51JrqUY7MGWZGYp3ze9X4xmvijHrdRQCLby3WdDz6J5db9KJR21fZSmjgV",
  "key23": "5Arwu49aSwrnKn69UXo5EmbzmmjqEW1j6zPnoGQQU41C3TUtbbgfWodxnhLhuy2TkEBLk56Tk4sPzeaiQobxZeS8",
  "key24": "3eYKs8FG24a7qcMmjDiseN96EGMeTagcUtumjDR6i4iaphR39o2mMFAygoBjDEH38fRsewGwZiuadJpiCiQ2u3Rg",
  "key25": "CbTEboELUm97HNwQnBaocN5RUn7dW7dX8vawB3R9mFe7DUAFViwM7sNVhQBkTgJqyvyYhCawGZa9nJxZA3J59PF",
  "key26": "3nxGj8GUFiFNFNgPnzGpErBpkPUnXaBQP9yb8eQY82BPFL4g1JJoWZMG84QmeqXJWuMkzsdBkZE3mdMR8yBhZjjx",
  "key27": "5Z3j9wGFTPw4AyfoeLZFaNDtm81jRnE2S6nkWY1FvzypjjyYEJLc4nea7MBqMYJKDdFDfdyTDR26rM1GCp9T9JWs"
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
