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
    "6fwAH3MZcqqLYrcLnoMzXkifjFyt4KqhrXH2NUZ3wztk9bpBS2cuRKrHyPD3yisDGj8444dqfVY2WLuWZ1EMwA6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ziyGuZmFutT5QuskmZkpii54S1WEW13ZtDhXHHG7c8s8gyGeyqVmg9d1ycWEHaPtdDaH4ueyuxEUUSX22Xn3VTd",
  "key1": "4YuESxtjz1uS7mCgbzFfHiSzogZFiJi4yAn94ReJhbtzvdtvLWHgeAh8spYbAeTWN4JTgM8YfQEBxAjC3oiCSZkP",
  "key2": "3hboVDm2Bv3jgaNtp2uUNXKRy98Nc3ZZcdkHk9CbQUCnxJjhJMmNLtSU6hukTzSoarkLg82wR9MKVuLbsV5wJtjV",
  "key3": "4C257Yq6nHEPAizJbCzUGG7SLdcK1iw5eD335SNWBLF9PFxR95bAcLZwyx1kkiUF93vstY2o28powt3SFSP8CFsA",
  "key4": "4xgVCacnh427Gf7gRfmnBSSNtfFwSpgWLPAeVsPZ1hk9pfxgsvnnVKGKZAVDRs1Tqotrtm8LxAaXTo1GAQ2RRzLy",
  "key5": "65Xd1yGAvX8zKV9BrZPwKDfCFNRMiQXrvWW5mWkEpuZYyuPCrYtNLa7rSw3aeg79xHenFD3GXnPtYnC43hkkfdBQ",
  "key6": "5VrQ5NVqEuXK7pqqiYEyiSnrwJZhcje3aVDeUGdWLyoEpUQfY5r4dYGR5WuQWyPjFgQuEW8yeA9uSKBYS8cF2st3",
  "key7": "4zDqB6sNRrugEjuDGp4JCYyKqN9vfW2T6sPoWFn3PCCozzwuUuAiegLddHvvy1GgYthH7JpRh4Lnp3mA1hEtinvb",
  "key8": "J3N6vcGP3CmGjsDF4E7z1WDBdL6yJrMMgd7S8o53yAzMkz2HW9itWP3pv1R1xaVb2drXZsTacUxgSCw4393msid",
  "key9": "2ZNpRdfzNFkMdezwD4C4s8BmRFLiE6X9hs8eMabxCSqtJxBeN6TL6kPFoc4RvJKNeefGV7GZ3BXE3tdYYmyqPU9G",
  "key10": "2vYp3aWTCeTjvjfkVJbdkfc9cWxMGRCxESGmDfT8V4Rs2mhJM4Dr4ojLVACcHcipkX77JesGZQyTDFh3Z3W7LsTZ",
  "key11": "64FmFGLbenPY99TB5sqobBSkpc4tVXzfWC9KwuPZ5jqJxLyAsn5H4iTFSwscm8nrLhTrFRxwfktFCPS9pUyoZjUF",
  "key12": "cBZZr1NmuXSaxnwghVXF6sezR5S6rDH9Mnx2RkcFRiiMxKfDRKfsaESde6nN6XpckkhJ1cM8cwRtFwdPyVeshiK",
  "key13": "3zTojR3JyqMsXgKSBfsfyzp7oJNXMwgScMCoRTzg9uaCqseywcSxkwfFDc5BQj9pMupzoTWA1R5JiqGUQazjeE1v",
  "key14": "2kAiwKTkaJRNezsSKGdr4eYsmgvR39rK1N6F16dYd2y3kMmfjvvUod6V6nMLZjGhaUpHUN1BPPCZwMLKjJkegUXm",
  "key15": "5pkLgKHkV5wBdrVAzyt46Pb8Pz7Azz5C4r6AozTR2k5LJR3AsRhPkMPGcYbM74iPez3MgxStsTwQHfryTPKTo7cp",
  "key16": "4TrkpXYqkbPU8vAzfsczyUM4zR3Eh4C4QgFbp2x3nh7fRfdbiiyYZHquxdt9jpU5XkQmA7pKZkGQCvE6AK2tpbRZ",
  "key17": "3A7CsDtugNF9Yy86CW9vaFqmX49KeopZLEBrcKGQCWRr5FrgTJBgAQP9YkTqUygeJwnLZXbfdqeob2YJyLBsKUMt",
  "key18": "4QUg87DnpAkSWNN8468Q2LTpmSN47bD5z51fwiHXSBC36zAcPGAcBk76SJTFfVku5d3UhPhQyyqHNARKhaGNpyhe",
  "key19": "5ZDHEe2z99DoVBZjaVhb6DXPGHH36vKDEMSJ1omMb3EC37pGcTcDbv6XSRbAskUNfNNAkxNcAih6wvh9yGM3FoxJ",
  "key20": "5h3XHKi9RndQe2jyGPxWZzLLL3AzWBtE8fcLzpD38eFgWDsfnHesPRyJJfN5YjG9jM3wKZDvVZs9u3vQqguccuDA",
  "key21": "XzraKNktdcs8kGryCxPV6qGR4LXfgQBuejGjxBZFyhYCQSvwGYRMja6kxQbB5M9YvcpYp8Ye8f2HC2sGxGkWhuY",
  "key22": "Uzyxiym7rh5hsshcXiBAyjA7H7fymWfMQJEP5k7WJtwSL6oVhpms2twErKGVhSkBQXjTUCfmpp1Uqsfruf8H6TN",
  "key23": "DtnNZLY1PMSS2QZ4Ro9gn2uu1zjeBrBRB2srzHPK8HMWtiT9UXLsSGJcEjA8mCK8jq1tX7ZNRQDjHSgnRAQ6wte",
  "key24": "4U8MwgsgneAugDkdge9QfhNuRje65PYgakjwHF3GABMU1rqwZoEhAAJF2W5avQMpLx6w67wsPMt62fjyKubZpLUz",
  "key25": "4pV6Wrng58feDS4GuUamtgeg482sZjwPANwR8t44KaPFmEXDbXDH7eLnRZDDWsXLAtxNEkQZxw3cYbbL3cN3xz1R",
  "key26": "3HEAKoN5qAeu1Mqjj32GjssrxDooxAZVvSDg61YrjfBP2YVGMu1fLBjjCgvz9X8rQEhUsD6nVuyasRaxF4eyqVBm",
  "key27": "4znJf32cciG6zyZwwnFe5JckRbPmt82DFbaK1q2sxaJP3NMvHTedmDvz18TDS7oZ2JZDQaLLhcZmxwYh1UxU7oSt",
  "key28": "2Cpw9N7DNMLStUwNcUnNikGkTkYitMjPyT9sEUbSqFeLMCzAMxghhrVu6pqHaX5kRAJqXHGS3t5AjR77sx8ke8sq",
  "key29": "2SmyTRk8EkemcUXfT5FMNbA1wvZFsVfftzyMKPredJL3P7nLoLfG7NMSe42MSs8gCnMCaXyYJsQbQ4FLUPemt7k3",
  "key30": "3H6HeLhSHAQhNgsnjZhSvVt99R65hZnr8N9KX1nkjHiLLwExJZV5p2Utq8j4kM6GVfDWZSwKv3oiyCx4KXgdXqgX",
  "key31": "375ggwe7HvBaWC4kBCB3NxSUt7HVgxExBoUWCFbq5cCj1Ze4v9WiMCAWdTcTNqn9tzM7ruLL7wNYhDZ15L4tPxf3"
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
