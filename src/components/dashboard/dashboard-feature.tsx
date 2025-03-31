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
    "4MkrjYmbhYc68zGC4Q9tVAgwRg1ooqdGSGtppnDChzDc8FwV744BTAY6F3Cji2fdkZMPKBBbeCH2NZyN7sar8fpf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47cSBJb6AVz41s4AqeDyJRtRNRrhuAUhZYAPpy7HhNiwbiSw9nXAYuoV9ZUHP9vLbdkXMkpNqcQxFEKqsHfS1RYm",
  "key1": "5Tfs6veM2d41oBW1NzrQboKHSD11wihSmt5F86uUfT1kfX2P8yNbQTnBRqmVXYdyUbuNfAFao3mjwHxBxfadD6Dd",
  "key2": "2XYFTcLdNiwKn5FFtXz71MSZYtNJX8LbbheyLaEPLXpAJiquZZQXK3vS2wU79zhUDiUUiruNusjdXuAkY1wwLd6K",
  "key3": "3T73fD3gzKKTj9VRDfpzU3pDSu2nA3N65yLkAtAtoVw8KyKTsYu81FzPCav32GDhmepX2yFWWakmTten7jzSCNNa",
  "key4": "2cRhm7AnPeFa1zykkVHwsyNp16t2gSkmxXwajxoKiT4mjegBpj2kPqZm5XA5k6sxcAWjfBgzQf7y87swrKm97p1m",
  "key5": "oSnBjBa5fihFCYTnLwCCyoDmtP4FerUTdWZprF4QzZZMZGS6nedBdDHLzmFdGTBNd2rEjFLR22JmVATqy8rhUNv",
  "key6": "5DkvbSx36R1ZP9Q8VCSLYU52JFa1AsHMKsk7AvVJC1wZVkG5LwuEHC7PH2JcgkfQvJNnnp3SUiY77PcPWpQx6UgR",
  "key7": "4Wjst6D4ZJyvhBuMWPSKMSJZYPcTHwjVY9LXqhu7GLYNZ2LmRA613YTv8n3NvACQUsmW2sepxXn4VATMaAn8qvDf",
  "key8": "43grkSPCAoBTFK766tvdqgUB2mEd9M3JAc8pCHcUonuXQpapD2mtDgB2rvDt24P4B968B8dZ3BoReFDnKEzzQC2n",
  "key9": "3bcAzLnJVnWkTDRuEPe6oVZRbBbP1YCfVzAbBCWVtzsTGzzSpz1eYqtvZdVA5hrbYZge2yHZjVf2Ju9TDMSb5EBE",
  "key10": "5JwZaWE6b4pzBK4NjBZLQ7mXMhVfRqVuFGbLCu8BXJezjPsGzVhZMHt6e7QzReN1ogTRBHZmEhsMfH8ttqmKBrm7",
  "key11": "5sGUAxZGseWbX6MWo8HmzkTDVqvDuReFYByzWFhut1DYcTQX1v6NibgKtU3ipBdsudq5Zh2NRxqDoftVsCqZLbfk",
  "key12": "2hnhc4NFZXZjzYncnfjDdbx9DWAwxrFThLPdNbFFiq6hJfNjPdFUZpvdreH59GLsYa8HrcozRP1hBc544GnW8GTt",
  "key13": "5S13dh7z6c4dexmYyjBLwYWoGqEMafon97GrxMHZ6fhZRtExsDkxQsTe6V9BeFYfsnqguWMuaVgQJzzKx85eNoES",
  "key14": "2p6cASHmmDyaoy32bFa7auaCgtzAjoXM83yv3n49dn4PfCLou6EtkzPuvQV7ddjsGj7ta4K7uBgg8uBvgzZ6hNkG",
  "key15": "4n1HvzZEL51XachFbfMJsdmZzUjExfYN4xfXF2xVRunkEBGAozy1Ez5NBwqt7gKwWZfXRAR3MeN5PnZoSVf2iPwz",
  "key16": "2wBF3FbKffPumfy7anGP3fh6Ezyft5dtPRZC3buEuHUfyx8xnzEq3ukK7xiXxbeDtUrhKqDdS75rLvAr528CijC9",
  "key17": "o2FXLC6WThFdifT8RGN6ZxonBGdLYdq8tS8xZTX6BxrpEtNHGMM2f3M91977aLkY44wGXN2kPNs9ZNMnhCTnnzC",
  "key18": "3xfySHxMknUzm1k5NHhc2Q2uunfCd5Q7pZcMry8B5vnyXmda9KRjR9qBQbbuQf3i3oJa29QPvonVmL44bQXvoZAj",
  "key19": "489Cu2LA7shUQ5wUWi5At2uDpMZNYabXVSdBP6RdgVncX1WGNN1PmJSVmxjc79PJNr9nnAHKC6CRBj456nxHjiWj",
  "key20": "4xW26LUYDFm67EKNC7HbsrTb4od4bQg1s7SrRX4K6P15BrQJb15aH7p3dEce9EjXneDG9kdFBtfDswAGkN1Sb6hX",
  "key21": "4BhAuQDVo4LWYGyDk5c61uYK1psavd7u34Pk8osLMoDfCfRH647SuQbT9jiiBSVVasrEFiU682NCgrMaUabrMTTc",
  "key22": "4vVwahN5f3jDikSYW46mSoUTYuxYJXQ6SYsQnuTvVM2atb38uFhmvjWiMUQX3aZifADyEVtsDxjR3g9bwomxbnYz",
  "key23": "2XHoiwSp3p5MmB8XHBCysYHxeLhjRbYu7BGDkEBhP9y2W9tfwBo1dgKdPgDqpxz4EbHiCeZrUUUrzKASAG279z5k",
  "key24": "4SNHVAqTPyUoJKJo85GfKiy4hrwVT3XTwdekgChoBTQmGcdxNT6zoYTHu6Pj5ZbU3CbtH7gEXkLpsgQHS7yBCEa1"
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
