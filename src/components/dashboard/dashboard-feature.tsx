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
    "2RSXymjoM5rcS3dFesR6Ed1wzf2WBxxehJDTTcaUk5q7ui2zneTJYRe9VJpA4dQqp7dHdVRvXRjkMhg6bb9bmZ3S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yod6fWsajCofhGddUHanf4YZMf3hQ3ZrxRJYefVew1ygiiXfCWrnzMkcdiZxD9Zpj5ardUXRYGaC5aEjXLzPbFj",
  "key1": "3UioagkJLwXJRP8Exj126YsLmKAHbw13QLGahT8g245gam2YPprYVYmdoBsUjAAke5VwZzjvzKoj3HsRDkyeiyz3",
  "key2": "2X8ce6hnPPiSiNcYV9U9nyNLbhWLPPg4BhtG7k3wUS9Pz1JVfHgTYeq4VGh8rAGArhc1wjW84SFEevkpZCJaoGiq",
  "key3": "4mzGDVrgxxcWwEymss6YTVRsgAbuzzps6YtjBuHri2LvyQTCnsXPKmmCsNXy64x6ACiNpYjHDCb1HHCfgjLbGK62",
  "key4": "2ZfEvgTVLYamwnrkzs1SGJwMgpgvauNyntRq9qVL96S8LeamZMbNouhVFBeExds785yqWLkysriKt3xDWrAf3UVJ",
  "key5": "5HxPpgc2Tr4J7CDnKWiiGLZkJebXdXZy2FcGRsHKczGjJDk8hYRUU9keM2GsMVpohXLana3a5DoHqooB2AGu74Ht",
  "key6": "4gsAtND6eCBbDZoPNqUqNAbwVyiFPU5sMXmeSAdmaGkhivGvaC4SAe9JaZgMa5s9QPLUeSD5Ygtpcj1yezDyvHeT",
  "key7": "58kTvSyjrZsiMQW7MamV1PS9YJYLbR7yvnKSt6h9TYEAUjzGqzEYZKqChE8nbUAdKwEE5KZcuC9HUMDjQbof5gHw",
  "key8": "5wZLLv8rfAk8UW2eNSh1UWhiPyHkhMq8hmfyAwY6cgNxZf4PAvs4mVmgFpPTGmDcTnVj7C9zsH3sanoA1erifs7Z",
  "key9": "3fCfUuJvoYifX8eCkA2q722uLJWPxHm1pHgG3jTrU9fUw7EPZePkRzYA5Q5x54dSWBxmQYv9tNs4KHjuG1jMEqsy",
  "key10": "5k8ujVHFG5ep4nLLQpmpF2717hDYs2a3fPxjF5utaf6vgHAfySTe4gC9Tnv5ssUEAHJpFdJ9RSEZqhRPd88mBgmD",
  "key11": "54wKzVZfcRuYgxojp7whfgrgMxUCagMxDxDzbecoTho1gcRuhMuwvCfqP3Mc3Cw7Rjxer5pZasvjArwTtPrpcpGM",
  "key12": "39xaqX6kJpgcEsUQnNgmf7MiSujb7tJJGHAHFKLWzFm8gGn8afDiyPpoWioNiLWNnK4dh69jWdh2TSWNpSaBNXGC",
  "key13": "JwqCJPQgxyimsmQwe4edfN4BEDxjnuay89LYmF5o7ULa6eGDNQiTs8Rs3LbRy5ZxieQaLPUwTjwixr8zZ9AbAAe",
  "key14": "3ahMLuujPexTA6TXsK5G3towjjcMM7CHooCTQ5YfFJ6tTD6tccGbw1yAc7aBDjfQPbiMruSTSZA9H9RW4Vqq8Fss",
  "key15": "4iGj1x5rk21rgSqCkcp8prSHCf2QtCscNm34vDZu1RPhyE4fmGkRsJpSTmBX8VWWV4XYR79N2YFNqqCWpwjwviLA",
  "key16": "2XDkfM6fPs2KsEXK7QgrmGnSwFzqW4GumvaskGtoczF2TtDzGsucpKw4HkB1jpWkKNwTv7eKEsTXviTTJzJiGZuv",
  "key17": "21XYqUd99ZXyfr53hZf4ZSXaBFY48DWtK91Yfoyyisec3HUYV3WmgQXKtGo4UdZhTLPK9NXW5AeCmujhzeVozGDx",
  "key18": "4WsoE3tQeXpdCZdaSbmgNFUQP2ALCEiThX1mgh5pDkQ1yMkJ4WtWX1hDrv1fDRR3mAg89d9peXhLQubxnvaqQuaK",
  "key19": "2MsisW26GFcTgZhMHFg6Y65g9cBzWXHCTihUvA8EUJT65nv4F4nbjwPWzpLnBJWqAZoScEAKQsZRsL666oMQJPz6",
  "key20": "2vzzuxs7W9VoN1sRuj11zrhVPdt58fkuEWh5J66SpmeckLL2hDrruw9SAq3ABd3A2fs3JcgaRkjpr6jo5u4Lk1tC",
  "key21": "2KXkJGxeqXX6Ud51Jau7Ytc92YckXzmk2pndy1rwH35wvGYmLUuVb4ZyfCF1mjDv83gfi9NNJGtGczGTCB2opxU7",
  "key22": "3os5Y1xdsD3u92fhpZrHWEk32i9WZtGCMRhEzQJWBUovBgPJBWVPtp2wu7hLYTwFQNgbuTspMXVfL5mwujbEtJv8",
  "key23": "3rwLPcAi8W5RWHm92bdYxXfz2Rp64jo433xyaouehng5dA5R5yryiZQyJ7G6Rd3xT5s9sFmeg5nEQf3wNbuTCt6X",
  "key24": "5ERLSgfZQqtPW9k2aVAtUjRqqNQ5AX6hbVRvFcFQV8mkQVyDB42EUMWkwLW8xsETxdTkUodAQDsT9eszEW22o8qv",
  "key25": "42s6HYsYjzpvZ4AnxaVY7PP2LbFKAXYuc2VZaG6eJTEWECpjsjDYhdV68FZRnH29wowJXWgU8sLb2hkbH69iV6z",
  "key26": "4Ah4oxNhYqJVoe5dgdvQgaUfhHE4bx7PQnCN8qbubcrXNYKFY2Mi3zSyVYEVBJ1NeVyczPYfVgxpZpbWmoLDJcfh",
  "key27": "2wGBq13Wj7dBmkvf9by5dhZ9rK9dDLP5TRmsktXyL2WS6HWw8RDAoKuNMshYGQtCbWspWAZbqv3wfaesqZnnKcyr",
  "key28": "4q38FhxguJ1K95aqPFiFBcobXMjK9Dwnat7QMK1PuT1J1SiYF8tyU9ivMezKqXuRSFvqciT3D36NpSSyUjRbsH6f",
  "key29": "5BG3mJzUFCfRiAnyFuyXPE83JEJxrPZiMkQ4pLuz1fNa4ALR8sr91rBrSKGV4bYZKF3TMrZqP4rvFjzrx7UFag3z",
  "key30": "5UJUfQwsxnUpJq38R9ZQ29nFm9GzNfCwT1daKSUctfXXpVW5t45RJkczaz6qarvu1U5WwS8tBEPWeZ4fScwEwdVR",
  "key31": "5WVP1yZB4yHXEyjw53AekxZNPVN6Usc7y8gBoJqKWapJE8r3FP6vkQHnMKRHdiK5jsVjhZkPAEXExrEyMjGsMiTs",
  "key32": "gLY9Pb6ZkP85FwsNU27LiJAiHKkFP8hcTaPvWhb34fVh9KXnwFPdJbWAAFN9XWrEMFxvAhfQgGQDeNs7Tc1Zi6k",
  "key33": "YtErufzPecJFnPiYe2C3EPwkjeuUw8TWC2XgANq1Cz5pH1ZPX7ghmeJ18GkgsAobdgXPZ9yMK9p3BJLFhByntJD",
  "key34": "5ugTSJDzzHd8utjtTjFVWU6ytnuRwEKs6idDL6u29KsEWdb4nj7ZEsH7JLRN8BDvXu9w9yBDRaAwxKUqri1Z7nJW",
  "key35": "EK8LTggyFwDkFHSXK8LCvMqwbJ2swNddqG4qDgp6k7p6nK3QEkhc1JbqahhbXm74PLPSE5xubvFWg18aJw3iFSe",
  "key36": "3LSiqhUzMrAs8AwjbPdpkmuzFpweWGDVnr1YXDT5PKJeHothwHXyE5QGQFmnRvK2kiGYuXxddcc69VQ2Wsmibnw6",
  "key37": "4mr49ZUk6SeVtk4mmWHsXP5scGGKarsUAzHfagT17k2uZJK4yijUJZDUpXXnAKDvWus2BWRXYoet9PXUmr4rZVPR",
  "key38": "5p67bH4J6JTBXLJ4A32H9oTaX3D6mJL5fEJ8pm1wcLt1An55YthRFVHkqJDmV1HggUtbxVKZhALfoPPeDWKYSRWi",
  "key39": "2U9UzUTxRg6GuA1agxgNPYnwwbsiafAFdEYPNHCrv7nLWg4iDzg8B6sPx6x8A2TiJGmpz664LHKkX9h2nc6uC76v",
  "key40": "u4nqUdxyVviDupjrVDnAeLXp6mT5c4eqkWbZyWR1kcURMz7E5Q1Mek914kfh4m4PXnuPXSqqq5GEVZmAjDC5g6f",
  "key41": "3oTnHCVkSUa6jvaXqg29c158GisTL9xGyjCrWHx9dG1Ydkh7JaugDgDWc8hU2XAnX9xbzJsrFCtsH42c7yTp21Gv",
  "key42": "5ZT9pSztqidnAbuF564RpMNdHSbw78RBJuRAQFS8W3pWYXpvQjkmWjkTXGYhcFbVjiaF4SGxp3zofRRJ9dhhmggg"
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
