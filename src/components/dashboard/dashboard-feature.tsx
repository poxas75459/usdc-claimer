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
    "5bNAwp7Ahxm2ohnxkGWaEqZjsPWewnqtebr6C2ADYW8bppponzP4Zedr2tteayHZRcUbDFrG7ke5SzR5kWr5VDZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8roYUzQ7RDh2nmrzP7H5TxfDVBpe7NmjskySi5zUtZa873JG84rqrUTYzqU8U5xC5j4XeQD5Y6Hq8HWB9rv5FN6",
  "key1": "67FdNM58yn1uGsM4birGCGQV5qnoFfwSGHJ1GsNFLHijp46UV54YVn1o2NzEFT8BCxVbm21CJVqFvTR75pyeBcNd",
  "key2": "5zJ3m4DUMvFgy6DHbbtHc6g3UB5AEcPJBubxJjK7iv86F7kLSiVrYCh4oHrG9qPAzKfoFiy6QVaiACMmpgfLJYJr",
  "key3": "2gFwrjQ6rGiSak4Ru99xyCZ9gksJLCXxDxLwdiJg5rDZ5Tg2ra8bRnxqGkaugP3VBSw8JwbEPBdf5NhppGso5PbK",
  "key4": "PwU5m1VHypjHTPV7S54GbgcKcHB7L6uzX1ULE8o5b4tUst4Pgz7LbMCiyWs1aFem62cEAyGJ1JGR8G59mTCTPLR",
  "key5": "2o7XHjsupwV5s9wbyGwhGurcbEqyQn7q7hL55if8MaAD4yiMRbAH56oHBTmme1cz6sPZ7FBvq9Qb1VfwdgTxYaok",
  "key6": "3pBApAEkPW2kiT3Qw4pNvTQpGz1omJ7KcMnsXGuGkpDhkgXw92F7dAevoBWDh6kjYNgaGag76x4Lt58eEmDPotGX",
  "key7": "2huob5tdmgx8ezPLPL6SAUUnxkdSjfpkzDfy6rdH1z19Lbihyxpj44NBBreNcTtiVpGMEEFErPyhZ31vAVFnm3mL",
  "key8": "3wAEW3KMuQg4AAmZiEkje8fm3wTfH9hjnduQkcXbW9bB1MA85s1jvxV3993yHWHEJJTGChcKHmEQtqbEDmNd5eJ6",
  "key9": "bUgomvZjxUqgbbY4q24oBw6hfi2JzZzXNcEyVR8xnpv6GAChUHynW2UZYyeqUoD2XZB89eH1YuqawGvmXYPy8Qc",
  "key10": "4awNsgGWZGdmAg3VSWcfHmikeWnL8ufXxU92F8n1cayzcaoBGQEfdLeZz6JeSonnEpv2Lcg5ZxLwtgkEmkP92diu",
  "key11": "3Bg5Zb7Pe4p5N32yypBwYuSeU5h5K68tSZLmjukKHz3HFrUcyjy9B8j86h7SaWV8VXfwCFz5u4poGUHdhxViQmNZ",
  "key12": "3pUqWx6JuzGjTeypHyQWk78787T35kfkTHAtB3v7YxGmmftqfv561jYTKMYLc9pS2RTgF7EYUunpEzmR9rdKxkSh",
  "key13": "5J3uapEtFxYqtMRLdoEG8gvh2k1FbUjreWMehEDFZnVtrUP23bdWzJjF4338iTSV3wBj8GttJdW9xpEK7iSpYJUs",
  "key14": "4qz3xBRjLgyGZ8UBy6tjQkiTziDko8oky61hyJVRb46MwSZuUrGkpg8R8AfwVbG4Hnc9AkyEaUqGQmBdL6asr9Hv",
  "key15": "2oqLTrKYqQGyHvD2ywugTVSGmv8mUnm779iWDEH64YYZXLvVNBh22Kadm6UCRozbpwNfpFwkf5Jj5EsgYMyJzMiG",
  "key16": "3t8USoEbEVXErFACKHykweYpHYfUzu9tsXJEaV9Dav5pehuKv8KDdNkAsXFLGQ2rJoSHVA499TYpkhS8GmFjse8X",
  "key17": "56r5Grs4DANZ2EzuSv72uLQDnM7LTKM8QS3jHdUDz4PVsNXSDXfMAfoadmPk9R5UUeFR7tXZKxH9bgY88yBbgGUn",
  "key18": "4d8j9GyPKP6gQ7t2DaRbVDXMF3oHZRzSoeBHdirtAnMzUpy3zzahFiqdRg7mjUBRt3NYDsGmQo1bdUnr1YdwHnL",
  "key19": "g3yhJA61dtbxdQ9WcymQ6hmxoNYn7zYKNcgtf1L9esVEPsrrpsWH13PDVCjRXptuFi1eXp57b4UskvhEx5ynqfT",
  "key20": "4sXnM3R6YJauCPJq7xZ8VacwYxb3HWg4FS1NmKmBeNjRkKJuKEURTn7Wisacv6fET7Ursd8NjhbQbGQyE5PvK9UY",
  "key21": "4ynWVQENYcZkXjS8WGwedjkaA77jTvTPUqBMKxHaPVJeYWJiB4GCYBiPaVG4vsEeFkLy9T9ZL9NXepbpJZCPe95E",
  "key22": "66Qwz8rrwW5ma5XyTJuNg5SXPsHNEghcTCkZfDSNJb1wfoQBbuq1s3qYQU3iMpyNGTYYZW3VfvbMPzVptqWA5vVo",
  "key23": "zGrgBAuoJXAHQt1Dhwg8zMcCmf8QQJyJrtUBHt7acx8Tf4oNxFp7U7QcjrbzCjNy6e9BSRag5mneMWfxYEM92Ku",
  "key24": "3LzrFvEeX29LM6RfMgwdYGyzY9dZupdGrMgdUjKDWmpnc2U26V56An3TxaYeyaiYJhZPLCeo6chQxXi29V4cJGJP"
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
