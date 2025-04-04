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
    "3LUxMt8LeTPwDCXCXQV6fHNkUxQeZaYwgrbUmXXkrvmNMMpzs9b5ry7uxQADKNLjfbQXgqBVv3SzUaAEScAeQJds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gUXrCpkUG7T7z75uQQ2cuj34JfoAQeHGXuEN4yXocB9KaVm9AYCZTsR8MuwRyG7jEieDwuaWwZbHZrhtb6pvqzY",
  "key1": "4Boj7MB8e74QPf1FXuRxQPKkebYPLREGyfXfL6QwjVBj9PktibcP3AGwoshi1ssRHEkkSKk8F8j8tZGWai78BEJ9",
  "key2": "5NFha7UwhU5ZNR4csaL3w5j1cdedBSCdRfxQ5A6ejyFn4Ab2VXwczBCbbfUFSFLtndwjVpoteREwvFmogAathaLc",
  "key3": "5xAMUawgYu9Mo8br2QiKUYFbW2jyAdBWJ6guvHqytwXkyoSWA5qbndvzvukcNkM6dkECUjUDSnfGiCFTEqCRosoT",
  "key4": "8qYowHV8edYE2sfxniHfp9FzhF9qapecermvdjuHc5ZM829mE57ef4muj1LMrV6xCfjwVdGftDcJK6vEbNv1S7A",
  "key5": "4HrkT2NrcvemodaMd8qJ558ofJvG4bsxGbr4PGd2L6qJCM5js2XVh5MvmFhgJgu8TnwKHcz78p31THmTdaT6HqYa",
  "key6": "64js23DY6RkKwMaXmkL3tuD3qJ9utMaQEfVRmabeYuoETfLtjiHadkvK5uSNTvQLZAdZbM7vq9mY2mVQQpaBR4B3",
  "key7": "67mQxua17pg188hkLQ78U1F4ex9vX5bNEgq6nDC9z4ozFR29KLJFkMoPmN1AUjqEw5qGYXGUJzA2H2u8DZHm1fet",
  "key8": "2sb8y2bwyPBLfnxHYBN8PDLiyfij58ensoiaNKRWD4WpSBMpQWc2bMW3SbNJo5Cvhb14FM9YnCjzPSrqm9fKesnw",
  "key9": "2a4kvyHuYtSi2f5cW9MtEqQjBUeHENEZGUDrE93jFH74TkmgMXmEam3K23hXSea2Q2T4jEvfoVgp3nkH8GJpR85A",
  "key10": "2q2EM1jHK7Rk8LHWTLjvgP7Ep8T9WrWGqnbd8X9HgBtnfGWdMSPSvLc9JChG4QUDqdLmPY1vUoAgVEKxMmNZD1Vm",
  "key11": "5EwFpBvdRmGLmTY5XpWfMVjVE3QtUpXx9ZivZiXu3f56PNxFqNLRS6KULUD5uCzdpHHvhw4FkLLsMZkrNoFSyfre",
  "key12": "3QWq9LCovPUn7HzmXSC5sg5pynrp1b3jaTj3DUVXwfhaTFLaP6sWAp19CwUzt6pwrUQFFqDXbBPgBL3KspeSJbSR",
  "key13": "3K9h781k4owgZycnrE3eYtYhqiRHbXaZTzSKxenQjDjNfwU4MZnGTzAsosGPQRh1n4rZ4xotCK4HNpzYAhFrwge7",
  "key14": "3bPUuYaNLwMos6nZAPxwmhdze93suswGaj9ZX4nrCNWrfnhjHqbrx4tkrvDsL6MHai8s6i3EDnn8z7AVfUixhaLz",
  "key15": "3RWwu1zvRqrPWdZWmyy6x6pDUmwmanYAocSv5HvKGFyBSVZSBPtcHgoehdmLuiJXYGyz5cx8HEzPPjgGfH9xF7Hv",
  "key16": "4fXZskTuXAC5sHgEPR9X6CjzXMuSJcmCBCT2F7qmWnDg7mBsu1F8vAi9gLN4nSqVRRDABXYzbM5z27vH9T8hfvnJ",
  "key17": "WyVWidpraU7KC1Tc9eeiAbFfMjy5xnoQhvRXMvQYwJfEauKPKgUWX6H6nu4LYo2GqN2AzPGmfYKmRAfJcW7qbPn",
  "key18": "3moL9PvswSLWrnJ4MYJDv93sH4jTZmf43M4U5Sy21ReEXLuHFhTnUVqYWjXrbpfdys4NCDGGU7knJX6ERTDvToXY",
  "key19": "51hdBktK9H9X5oRuh8ZTUp9ub8iEKEf3NppNjuYnz73Kxk8bhHpFECg8gnQ5jAmA8Fssvmp5Z3UGwVnPWgqDff1D",
  "key20": "3zVyT2GUGwnLAfHXQV9QQKMGVgEAKdEPGpVNnuzzC17iQTdJMRH81zmH15L3RKQU3xonvL7sHa5pAofMQUwfiPt8",
  "key21": "269KumvkCMNLJH2oB69XZd6dNLf6AGPLgrLv8k7RkGYo5zVZvXza4uJ1b6unKY3MoKK2oTk7esEkq8TVxPca75pv",
  "key22": "2xmmhvN8RMTfPLxUZ79PWH9VYyrYVLZv4DS3EzepTBRT1pxkfoc7Y4eRc8rmZmwHtdFzsZ3PbLsGaZhrxjBj2wVr",
  "key23": "2RwC2mo2AtRY9GiK6wUEZnxQhcTm9TNWPh4D4uxzs5TkzTf1PYzT97ePjXYYnM9xTbT1f9dyJoSphbV3Z5xBDLAc",
  "key24": "4gLhL8xJFc4YBE5ZZk6HyG5dN2w6Zk1eCyDGvwrQbgSbftnMHj8ZZdBj1n5z7hHouSbvkkLkMynC1UcAkf5h2AJY",
  "key25": "5cwUJ4N29sHjoTHPEyn9JKaVCnTQ7oTQzELHXTtSGQEpmBUCXEVyCpoEkShXJ49var9LWjEbYdsntaM5SQbEAqms",
  "key26": "3zREnGChp826x7ANRsF4e83ZX8BQ75K4uFmh3MwQ6rQZJE77BZuCcK9VnL2TkzbwCsQm39v5x61cAtU1SSKBDSDH"
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
