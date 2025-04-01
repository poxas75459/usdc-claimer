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
    "4dqYbCXojWd73wuurKqP6GLtGcbQGQAZa6GRScmFGxtu6hCWL5t6mpExQX2LAdmkZUqLU1XAmww4wPSZLcELLAoQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cfp75NFQt8hVetsUW39JwWozXoXjhvvoqt7z7G7xyJxVMCBwL3Vd9BrgyugKS7jV2sktF9c6qKWmBQq3QJQcKEL",
  "key1": "5XFzzifeRHCMWspf6TH1fAnGU2Jc9RSgjihMh9HUFy9VaAZGTEhGtkrXYJBCj1o6jiFv6hZ4dkFMEJwwnFZUEXQn",
  "key2": "2MAbeVX3uzJNxZuGXN5wo2P18y6v2bX5FGKUvyhQa2v4TsCudJ2HzfBLDAQzuq9XdvvEoQLicDinYz8JXz4HRyPh",
  "key3": "2iZfXDzx7F59Z8fss1GdwSLnTG1JgvWkvsNqp1yfhVMrFxPHyZwywZPTkww5nFVxHZkfyvoX9487Fd2ymBsUbJiT",
  "key4": "5zN7p7SEKjy3hioDPqrdMbQDignCgmUFo2rmbTkuK1fA64yy93drs1XcA2f4jgRdXcWuZKdEVhbKJAWfg4hmD5py",
  "key5": "2Jdu3hZSnDoHDK336Fk1Fnf7GUwpiQgyU4vwXZNJf772qmSwCm6RjD6ouqsk4VKBPMgjfWo7ZXUGvQjHxz9sDZvX",
  "key6": "4BCQvuNDEjUcSuCoaGvUaboP8p4Koi6FkykENvehb9xP1jXfD63YMspzyaDAXWxn6iSbVuUanQfsY9mrBdg182LG",
  "key7": "5tckUSN5sYb8WP1AfCjq93tuwFqqu25Y7Kc3ZV8tfjKFVvdMmzGvyDtgSt3ufVKxrw1FRZBLyzkkq4DnYnSt8StH",
  "key8": "3VN3mdj4zzzK358A7yyofN8dUjU8ka5bWLyQRvCSGQ8MWc2bDzwnAYaR4r9BuMfWm7TTR7GMLWGVPLwPZPiZaAZv",
  "key9": "5e5NA6MKiY9U3pswko7HEu3BzXDFRb8cS8VY7r3MCnHk5G6WHsahPLCsWixATaKbgkmpCmHJawezGWKmmGEgLB5r",
  "key10": "2Fer5i1LJiUeAfBHwLnWYTvjXYK1SjT43NCVBsqV8UpsMcPdigLoho76g7RFGLy74ny4DxcTTkxatZiR2BMy8saV",
  "key11": "2R9arKPgZJG3NTtMxkuQtPGp5Rtepv2fPdoLespsqKJzaDsJ3aoYP6cWCaAVFJ6EAm3hGgNT3ZnMkKhPmSGNCk5N",
  "key12": "3UmBZQjAmuCd6sJk8sndEQCpbUGGPkWTHtonmyGzTYNWAYaNrDmwLdLLQ9dJDHxbHbLQtVucD49uTDuqaqCVFRpM",
  "key13": "3J1copx1nc6BhAJ5yVUNpwVfZDCryRAh1td3LXYnWygUUUdTAram2axwZHo56g1fUaz77pDzuBdnSVkGSYdWrv84",
  "key14": "cmo3jPQqnLcSsbwEvBoh3oHgT2qojyshAFM79ns4Z7y8nLNeqTTTddFvPGcobkTdtHhsrhV8pDA5VSi7KJTDqex",
  "key15": "5P8jswUgVst3RK81EtGbnMdqGsSapX2P1UoLhY3xHPveFQdRH4twSPbLKHDc2BV5ojuNGEpRt7NNQboAybsWa3Nj",
  "key16": "4LF7PnDLbj8kvaUYYkxuWDvRZSVZ54nHTknUfZqSmJRfPTxbUh3JuKyVMzWPUrdLfZ38MBUcALAyNjabK9Nwws23",
  "key17": "67byEeGgFEdkjPaPX2aGitofMU7LZHxSZs9aPxtzpFF7grqSNRoDWkB143ZjdkXWCsNhPnUfjtwrKVBJqEPykG4f",
  "key18": "2iCvJYEwMrDeWoEnMokUuHZv9rJruaMZCc1zkN4wzZ1gdGDsML3TvgzpncwzTzWH29JSL5WqSLhg6Z5136KmZeai",
  "key19": "5amNgbmPzqWZ7jCxZk84dx9tHReggzPsfBhjPTuMVxWprAPjGkQdqkxcVCeNVMvmRweVjpoABEG7A9NvfZ3ZiF9X",
  "key20": "5FNF5NfDXkxr53Y3zgjoMJLtvfMEQaGzrQeHnamUScGHRN6urScGCzodpDbiVUiSStytgnkL1cBEPW9EQrnxDVuQ",
  "key21": "4AhvPZPF3JV317iNrMVXr8Vi6xzaeDJXEtZYgmajh9SarMJYTuKx3mDEdffNyuhkcME3qdV5jj7ZmrGc9LQiUU1u",
  "key22": "hrT4Yq9pxr6YW9P7ybcTjE4kqn35tPzV7BLeyxkWMbyac5zpLETHp8TKhMmVrPJyzphmx7rNJfqM8atkUJPprq3",
  "key23": "4Gq9S2qw8fjoykvMGN4iqmufoCAwyqnSFW7FDJGpzuisx3FnsbzPS2T28TQ6MW6CjHxAEQ48FiaPBML7DDXYq6z1",
  "key24": "3Sxw2ahgg7w9aJ59vQLRYAf4pAtpGSqdVoc9YA6PZLvvrFsGEJPPRkHPg12qJZiVuMemkoVsAy7Q9uCEYMdnXKbF",
  "key25": "2ewr3XgJzLB52Eugp8iL9YLVT3Mu97zhUov6ueU1v63eSgsQBmzjs1GMnmi3Ady2Z5DSgrPACGsRsTa918sFx5j5",
  "key26": "JRrkhWCUzgy7Jx7ZmPvKdYutiwxnngdWBm1QcD1d6NA8FgHHk8goAZBPrMU9GawG3x6z8hqgJRRMBLDwD9JHHVA",
  "key27": "qYcXqQRg5nLRSekPiLe7v1VL5KhXkV544FvXMhi6ddqYp7B17PTJiju2TNqHSPaiP7ayboZ75mXFn4HFmZETFFL",
  "key28": "3U6A6LQjTmRoP93Rcx2EnyxxanDQmaGw45uioNiuXnrJVCfuhZinceF1ZZigTuEcDqsrhnHBN5JoXk7NnsBGd1vd",
  "key29": "SgPvLQow142Tvtek69sPLYumbQfGDvSJrtJazq62GcJFCh4bWbTTj2WSNjuMjFxTBbxciKJftHdL8GFd27ACRq8"
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
