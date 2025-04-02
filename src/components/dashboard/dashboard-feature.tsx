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
    "551EiBPH1Ywjz5TrruwSqrQq4me2JLRcewXwuCMYS5sEwXhCp2fWohHSFVdWDdbiZ8FY9sqdwVGhZPY2959nGbwb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZkHZABqzkJGiTCDQmmKqi2HK9UVf5bMdU7VXZkctgttcDW6rBjCMoYQdJqHPU3L19jsN9P8CBqnUYcEkMapAhvH",
  "key1": "4xnMg2mmp1ZyhmoY1spPz1J51Xe2bgihhbha8a8QQMSPwtKPvqtaK947Mkyv264yMS71eSWyJYuT2w2xVBUJaEn1",
  "key2": "2mt1wZe8PFXUkm4Q92hckgNhWYdHYC1JPibmP5s3QzhypgL61TmLduEXfzVNr117HM6v6CVfmZMbZ58oWedkPPXq",
  "key3": "4W1i1DNiLwQ6GYvCzQ2hZarLgR5vCy1wjMQvtKAJDdL1etmzhPNX1wZ3Wghy5pKeCtWsTJcNH2NRARNf2s62HyWU",
  "key4": "5ZBibBhjPQEobcVeCrdew1EmY157G8CmfuLkQZfnUXEcqRL19WjSvpfqvosV26VAYXgWoBCzAx6RH9UcwodbjtDW",
  "key5": "41B78yyn8V4FJKMZdqNT3FxMyxpmghX5kYPJDDiyw1dFbb9uLM7KZuKyqwPncBRWGc11JEyvUU5xcUtJ2dyP16vP",
  "key6": "5a8X8Lv1GezqEBLBAXZb3QCDLYUBwrtng2yxezD4XqvPRRoitcRJdVPmD6be9Ybk1715akCuqgHY2hhTgLpHPkVw",
  "key7": "2N66Mr8SiDoh6wQYLmqKmegouCPkgUkBM8d4VdxkimzfrEdkEZRCUhwuNoyZSep9W4a6eBWrDaVqc5TWpqkb6nSX",
  "key8": "5mvsL9PhrrCUjhWghr2M7TU1vbgoxUyHfbEFVB4W8QypuL2ZX7seZFSFrftWTfFfrLBbDGyi7dF61n4HaRyJRufJ",
  "key9": "3LA5nD2xG2jZ5vtFapNfxPUMfuABGqvvdRwgdXYurDo9kX4fXwuVuWZBk8gFWvtQWUyw8NhsdbtqHCZtXx4sAvLQ",
  "key10": "3VdbHN6KJyHn1mzEv7P5aYNNqeLV7ZAELNX5CVMsipapxwUmjGVPh3LT1xinF74QPeHVDUSGqNBKukK8MHiCuk9G",
  "key11": "5RBS76wnACxozVDpHLEC39XA3m5rXepvMGGmWzorxE8gipERMdf6fmnD4QNHe7dY9w8jthvq8XynGXEM86rw1VYC",
  "key12": "2wX1D3Xp6iD8Xxg1W2sCSjyMRHgDwBm4bGXuNEcX56mCnNwNP8nuokNEYKwBkp9d2qNN8hFkLWfoLas5R1Zwa31t",
  "key13": "4mDCbiYx18sVc4YAYxDV6T8rEPNr9iY1xRo489kppfqe1EZPC8vcbPiDZQc5CRrcwku87ZEoeToP48hgmb2SBoww",
  "key14": "5d3BTKgfpxzgds1AjZKESQsHtvxaLmv7QThjxRfyfDTBzF9gRLYwrTH18UDiCYSSKUZjQ8TR5kFoJeZ46DRc6LBV",
  "key15": "N3vK4yNZ4P6xcwizaivtXnM3RL7XvsxAsnrFstGBVPJTaVTqt6BL8WnSNH9bmEBDpHzXPR5MnTs2G5DS1uwYzFc",
  "key16": "4WBmKyUKfN5w5VMgTaBpBeQBmfGp2S9MAd7b6K8n9MpwNJwc79tYCPacAFAhoYsVWT6QP85xHHbCi6gCavVAAm1Z",
  "key17": "4y3cxM4trzaKGBtE2orpzdCH7objuBtw75JzHQbqENSRVWZHc93nqL8sMdg8bM7YiPB8h6X1kr4UwY8jAXpGgXLx",
  "key18": "4Jsr9JffLtc8LvK8UsSJZasqr6aAD2XndtCNKQuocmw9XkX5ipkehwX14PXrnZh7zdAf9MYamZKDbjkcVWgE8bGa",
  "key19": "5uK3QYB48Tb4awHcR5nHa1rwuxBcER5HKzE3HNoR5JFvYgt9Pn1wD8RBgJSd5AnSsyYMBnG4BysDyz4PdAhaZZ8k",
  "key20": "5qa96iVaz3of3YK8rAPkNu4Mzrye9MMkJFGJSjok1WswFpjFfMQvkjk4nKRY8TqZycRVGQ2zCWwYyHhe3XVUsShL",
  "key21": "2URw2NQoANubtyB7pWBrEiyCNHRV659KkkAGs62mW8c4kvAFW9r9xoZrLc8odYb956Usj4FTyxgb3SK1NSUyfB1u",
  "key22": "N2TzsQ5bbTgUuULm2NnhRFfwisfY53BjLLEvFBxAqpgsm92AWdW3XSwCAmhVf9JGvWuR3M3xqGnAbvzW4D2BHCr",
  "key23": "4xgF8VBzT9TZwsngTTt8LqCW6R22wKaVxxVVj4UgDcQe4s8z5z3uHLGezYkxQQBLEMXGnfPTRXAvQbw6ira8gecy",
  "key24": "rgBt42KDtp4WWA1B6Buay1r9x94U2acaHvVTtfafNw2ViA6YRFRzrLqP1o5uVHrRnqA3BiPqLiqLaSGXdjMrLip",
  "key25": "5VAGx5XJcZGNR7tWqsQsZesya5ZAi12GMnYBjT5qN5GaW4Np6uP3LacFN5LCKaQ8BNBse259Xzm1KZ3SqrqYbten"
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
