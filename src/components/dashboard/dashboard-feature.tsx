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
    "37AGGcKGvJUZqL6dA1QGFWZfQecNKYzsmdnXKUH4gnb5oGCvTWASzE34Ch4LGdUGBTduf9DUnBzkSnJk47wDaNLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44peJNyeJrUHxCK1DKVDZsCYSdxKnUDEK2WY5Apw9B1zr4zHi6WrHN4BdrcferoJhenCYAetFdcXTtC3ED2AU3q9",
  "key1": "2wavXaDWCeEMhpq1nDGrQK9KcuY9DbDTETuEDvNw9AHu8qHiH2MSGBwRa22h3uxrFkgoazUsdN7mNBEXL8trrf1q",
  "key2": "4CPviUYqyKyiFPw9AT6h85gMAs3Ei2aJQyguf45DEhr6um8K2BGVpwnpJH7oir16aPg2aGreyLiTaB6Fdm3ee8RY",
  "key3": "26Ft7p4M7Pyvc7H9m2JdtsPtb6J6VPCQXvaq2J3LXkh1XNkUePkUeKMRpTHeRLh8yeg4hSMhcVUbWsBnECkTQfyh",
  "key4": "4T1uZXnS8aYB4MCMB6Jcin4aQ5Tbm4Wdt3RdFKGutJbtsuy6HDj23ph36TJytqELSSvYrUKbpSrCURJNb3CB21f7",
  "key5": "3etFhomunqh69F9qxMZsXV81mS4iyvcL6poucxkiNRuSjUU6CfW3monTsQynimLB6rXGPLoUm87nXLonCYgejK7C",
  "key6": "wdw8fUnwmTQPP16v2aAhRaTrmcBxyhbenFE4SFWojsLCBLM78G435RZ5hEz1xRjffeezmP9xPNSo6NTR7Diu6su",
  "key7": "57FnkjaZoUPopiD5nUJUPkbqdDYFTqsq1JDPqdfdi7cRxSjg1eo5XLA8viZUsu8C7X7TMThrAZ1CWGSLHmL2vT8d",
  "key8": "5mkPVP1fwTVrhFAEPdXvboRLW14ow2JEnFrt8Jcfn1b1H4jvHQ3xVUCRewXVVj6TPa7UnfgTPc6FMcuoWwzcDG89",
  "key9": "5DCBWri6tnX1nipVD83dWZzWKkapKX546gTQKKvtjL1kAbNSjTroRDNJyBPShj4Lj7LUgz8u5M5Nspn42Q51t836",
  "key10": "DREZoYrvCvLR5kfRzVPzWBXoWEEJsArod84xcqXVgtkmAZqpRb6bA6VTPm3yQNb5h2K6TKTC7u9rkzQURHKcAE3",
  "key11": "2XLyfSCXAECtJdWgaruidUT6GteSBkSeQZMR5govvLs4GoYKBiuXwwLAuqkVvss7DRBgujLn9xDowu5FtntkNDAE",
  "key12": "2V42di1p7MST6mwHGAN7P85ZM4LNGUSmtrw698kn3ot6rUMK2QvrqMjPbKcDdPZg34RbbStXxXdKHcMRiKLVG2ak",
  "key13": "61t1qRE3PkqNG8sBgoksLanAVZNXemJzbR1bWRftDHefgi1VXuin7VqdNAXABzHZBuAArvD3T5Lx6jH8qg8LrKDG",
  "key14": "3eXPMbx8DbiJB65PzLn9SdxPvqVPEpAm7i2msTGyZUonKPW4ckzJ7jHGne5H2eeTC23c1GLPy7vXQsvQk2oAvw5X",
  "key15": "Roc6KQdvtnZGHvfFm2XVzZxyAgdD9EiuWiH69kGNHewcfz6w5PEtBZ5HAG3FnwvLHpX4gcxQRetNxkkVXigrk2n",
  "key16": "584X9HukLXJyQBoD7dppsu82Gc8wsxRgWnA9mNUkiBmn19EDmgYicLv1ft6fUBogBPeH3NF3trefoskX2gc8Nyh7",
  "key17": "3AxxRSNPLmMhbjgv1ZNcjWPmZF8kGTwGprQJS4stRTgsLF9aHGmdGietRM5uXWz4C4VzXTkvsfxKe7oG7SaYoF4i",
  "key18": "56tCYM9BvV9x8N6C8WjKpyP2UnFTKEAVrXhKGST7bn2QK3PxMyU6HZXc2LAf7QNCr5qKQaxhv1MpxqnDPtA6J5ZP",
  "key19": "3QWjDc8W4CvU5dVZHtnvQHCzYgmNxFGNmnnngA5UFH53cLAxxS6h8914rhhBCEhZ55U7eAdVHaT5Zg4uzKyDZXFM",
  "key20": "5vqzqhFfnehWzYEta1Ev6Z9wRzF64kB3YX5NYd9amRoSj9j526cEsxdm9sTnFDp9j8BD7WV7zXjFCD16HuNP8vZ2",
  "key21": "256q32ad8mW3aWQQnrDUfESwy5LeLtpTWpxWv77Q1aUoYjgGB5h7whWbbpXyiF88dDPX5rjUKnSVy3yKSTNq7CBU",
  "key22": "2Hf9DbyQEYuBemZ5aMKx6KDvgjr2skwxCMqz55qEprQnwT5qyyGzTFpjSHrWBDT66G2GBmTVoPBdc3iaKegp6Vfc",
  "key23": "7Tutp5pe9vNwD7T61qdzJkEkpZtP98UFM7PQzoWbs7U3dMPp3oZpXdFCtsoeS8kmjMgoULZxmq1Dm9ZsqYorNVZ",
  "key24": "5f6aCSUhpGJ7EC39yvB7dC8USipNr15Py4A5UmuBK4k33qVEwPQVBUZ82V3dQjwCH6kpDyYfK7aVtzkhRpGCM9yp",
  "key25": "5VnXhFe4ik6yBr9ebtb1yJX649QhMZrjeU1ZMK8BTT7DRXxDiwyTRjTsUKM4wCB7YogQqson38QJ5iFX5a5vm81N",
  "key26": "UuaXru59CqrE37mRMNikrE5YiiEuomZp38Veb625HvifM9nneBimcz8ZjYYC5ZxiR2MStPDB3874d1onU42ckfP",
  "key27": "5iJXApzBQki6qz1GYcjmvpbyHyEqhid8hLpYpokg5ZtYoTmkMxcyaGdWKErtdRZvH1nnTZCdV9KCEk7pwesDaFp3"
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
