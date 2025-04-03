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
    "3Jcz5tuT1VuvDu2pr4S4Xy6FUz7Uxd68BKawbFjCtURmHoQr2RhuHRGkf3QfXfouoQmoCARN11iUvcybmu4bAcDx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BFddNHaAe8K8Zgu8zNqwBiR61D997yXBUKvP85WSMS5gCC4dZ9ZCvNBhrwYFe5K2iAzzpEjKYUbqgQci9bfvNkt",
  "key1": "4okttTUXBvfK6L6gK26FpWVQsRKwbNXAEUKVTsSC6MqqnKAhsBgbRJqsKJ3PSWva4ugBYtAdF6NXmHtzCBEqYXND",
  "key2": "47bhuvdAjMS9eXMa1NBn4Z1nMMgfgMPYFypRn9x3dZS9JRdfMdRmjFze2FR7ntwuAaVDHrRb6qKaeiYXMi3ZjHcT",
  "key3": "5za7K3KJuPDDjeqNTFt1tK2rJzn9bBYtpvyDsyQUyCdYYJ5oprtTVbRGgiq9CChZ9AQJrr8KFefY65ywKeQDdifC",
  "key4": "xgfoCDDEn7JUaKEKcRwRZsTNo95T9u81k3e6oXXUK2wFPrgyDMoVkZxajzztPmQRyxA69ug5oNSa9S16X3t3zui",
  "key5": "2gQp9UKnRpzdvARbaBrdtvNLy8BMWdSxKf15pLBDT2j49cqDGEiqB9HhMsmCaESeKKeXa6ju8BU7wZGSj3s9rLph",
  "key6": "9NqCa6y6xiPUSwhzx6PRSRZ9EDgiFDqg9t7kA3UPH9Wde79iFDMgQ84U1YxvL9PTittuxAw7u5G2pAFq4i5GdhA",
  "key7": "64Hf1cp7HjZn2jr2LF7DBMhRfGt3EeyMX9mQoU8mZPK44Q3Xf6ecoPhGQd9WsEABdHrztzRSinq8JwiJ8hNoYDvX",
  "key8": "3adYLs9uuqERVGSCNxdHpDqUTWYiXbf3j8vZtdqNAyHfqRqsvY9qhHW97USe2BTXACa2SFZSMLXmb6tvbfnsiWWX",
  "key9": "61LrEJpF1fUy1ejVpkWMU7weZMorWDimki4HGUFqNo44ZYBRsDwAwNRzT6anTbLKxizUv8mF9GNUBN4k94mZp2SL",
  "key10": "Yv2okSYvtcu1tTqqvQCVLEUer9QPp8Adinnvbo4wwjn6dF4G14ewVuAytGWxcStwqswKGSbJKa15Yx9yJ1ymyf7",
  "key11": "32614nzjA9NUYNhBP3yJGsUAiEJZukzcyd4TyogxGSswg7HZfQfQofiFQ7ifNyQotLsig1svgY9EZQbKJNSWxBrd",
  "key12": "53Zbpn8FfZMYhjmMWMs18a822SW5otYr3HJsmnbbfiBSRwSjLUk2XcacRAs9oXGvAmWYYGyA6SRLMPX7piiqnoME",
  "key13": "2aghNPeYHprUKcs8xkJVwPMkftKR32Ug5ncYtf8PyauxU4LTEd8v65dWSoYXoVf4DAvPajfc1ezx4kaCejc6muDF",
  "key14": "4ATJv79rRLWRLvUY7cUv5pv9HUjciohjdptmyrznt4ApZoTzpnBPjxvSwMq8CJ7MbUbhHGTHqPgmetX8SNXsLdFN",
  "key15": "3Skdwb8JvSFCEsnN2SrsGurJzEZmj9Wfr4d2pdRHuF5dn27DLTmGbZW1bNuhnGkSpmdwLdKcRGmsoE53TYZJF34n",
  "key16": "4bbn5GpSNxB2kaCwCuZH9xioGAEsPHiA7PnTa2uKGujw2rKn3bQBM1aUuVCkVdtCfGf2wQjb8EPDgpwK1DDsEqjs",
  "key17": "3qyG8xLsML6X7s8yWSnfChVM92ubfnYDPmoXng9tGFM1Fqp76Bm2u96dGs9LaDrjBuAqGoaKRezEnLFDaRjydJyV",
  "key18": "47VW8v1tu4r6RijvUdvvHgW5MRuswJCbCDHVPua7LRKFcYctJuFAgjxNs4mpUNyozAyXSd9kfYrGZBj5gvjkZT3d",
  "key19": "7FNXpwzbkB2tG85PzZNY9Z4PaTWN2VpQq3hYdbJYCCVg8QKWVQYsCEruhhAtMv87ymgnzeqevruEKMXzpg5PZ6x",
  "key20": "63whQmTgkFbtj3kTkKNEKaME1aUWdDacnAmDzbGvVxcB3FC2svc3YKWm7SgznMZ3BEzGDWDBx4FbAkZ1pDFJ48pz",
  "key21": "5KMtWa4YgNBJtbDsaUxA5TYSUrWF4cnxS8Kh7Ww1UvmxoeUYSnSzhRRPmPDFSMmrphqQ7M45oezsZ64k4BfYGMTj",
  "key22": "4RHmnxTuuSJ9QdJJtgtuuNnKDgxszWMLjKnp9kqM8S9rctDv6ppwrMufkYc2R5gWdJrUNWkMFKHtYNf3ZVw1s8gv",
  "key23": "2mAoLmjGPnFzBaKXohG6edQJa2SLW1xPeefTkEkRGMhRKRqVmmfk8qkNJCQ1qWX7kPsgKZbN4oRx9Fvw3Eyku9qf",
  "key24": "3vKvBFgLqdvDpXf5V3mfMfwBHWyrSMqg6137oLbDZmT6fZcEbvH4K7VbeZfAjW5qsBtakbAJneH6XSso67FYVEVE",
  "key25": "aHTJ3drecsk3ZgthAXZVuZJnLm1MEWrUxcpFFZooLo9rB5suZieQpHUeSa4jBGBUMWUuABmtszZcGNrgNY33Kxb",
  "key26": "2GQUzm7xmByMWPWiafZCjCNxizdJMHm6Rtg2tgm1x5zfJURaGqhGK75h9U19XLAa3DkLN7M2e4kHrc3wKHFj1S8e",
  "key27": "5QZe2DPs37AY2SNG6mRaiku5Urez2pSpyE6gJajNW4aajuPdupuS4rrV7MtjhYsqWgSPBsLEhJ2ayKcQweMSCznF",
  "key28": "z8JvqPHXQJS1eG78YNzHH4hk158EtNsjcxz685thDa8WxbzMCDimnJDnMQdcxCPWfZLQFPdejtTqHnrkAgYzx8K",
  "key29": "2cCtifxaiqHNDC1Z5SNarLdtCjQXmrVFkSkgYTZ8UefagefwSKLBpv4jPfCk7AQXSxWWuhTKNdS8EyJUmiNBa4gg",
  "key30": "2JYwvU1Nz6Y47TQ3b2noFE3PhjcrHp69sPdzmU4mZ35xTqs2DNUyo3Eo2kHAXuErEBAmY11tJhAW8wywD84fc7zP",
  "key31": "ySWtr3Cm2io3hYpsxqK2G4VzZ758baLWSDVy8njAVj5eBPykxkczhaqsnHS3TdmzXm3hp1A7jhvEhqkBwhwUedA",
  "key32": "3QDD3CYgcczmggD76yPDn2H1zgedFDk7cCVdk8YUJgk1nAEwBL6dgXa2Kjcihc3wBGTvFcNaRS9WENoA1CggUt7P",
  "key33": "5GNTSpHNhoJKEJkSDMyF7nQnYqsWxPznvkC6ETpFCJWKvkMreHeYEtgZ75VMuE5sYU4m7K79zHBX4mro9bsoFWqX",
  "key34": "JmWDSwVqDnQ6xmSHzMbY9wNEVBFxFDRvSEvpqznpvQBMMTFx74rX3mtzT3U6HCC4NLpsFcBahrwD4SoPtt1GxnU",
  "key35": "2XHc4QXcSdn5FiFBvnnjTEdCWxD8EPNd5czjNRtsX6GSUXTbPhi2ffA9bc8SFdsqMEvocRCco9zuAP4oQbRQABNN",
  "key36": "uN8WQ45P1raKkd4YagSFDiPWciAP836Xu6DNvaJZ9LtdMXs6Qvi5wqVhxMvpXDZtu8on3BKWypthYpjJ73B5EVT",
  "key37": "2mHkp3TEaBe13AjomkSzvchLnDFbyNXEQ7JrvQxXBB5RuT9iAwy4mVUe3w9Ggkg4WcQPdkKEbLMVVJESruXQvFZt",
  "key38": "E1J49oqnP1e1RaXzf2CF3asuJmwAJxtBFZy3JGZM1CbRgABJDfgWsF8bXTZqxXq5UziZxdrmyJPMPMoh69neDtx",
  "key39": "2iCJkFqxg2uT5gYxMRTiY64BzmjLR5rdUtLiGfCUz1sHtPLoQzScPtnaJCDfm8dvdqU5QTdMAUDpjFrzyhfyfWSw",
  "key40": "4JjsvbH1YG8zR5MpyyFBvkiE7Rxbad34LDGVfurUZJPjZtcqcpYM4mHSFk93n98fNanak1EaM4kVnHLPhBfAKdsT",
  "key41": "LDycbAZAA1KtPdNkXguCr3B4NRghxnq8bdMJqGe7T9j4ZYejcvf9EMcxyfEmnwrEhd6WnKLDoF1pCUgJ9uqsZvF",
  "key42": "4ySQKixg4p8BTznD1XkfgTS9MP8p1tXeJCjecXN6ZPNMw8FAh4WXpbVRtnaLLxvBX3UqnMDyiarYtbbxahex5Wgf",
  "key43": "4jMfqHTsfsCCeXVjGX4XUrCw8Nfx6vdJQhSHCkN5228dzScvfhXt9F9EZ3yTNHYe9Tvddga4LerctEMXgddVMfD",
  "key44": "2D9mQPFL8UrS57nDMnRoDoEqRzHM8Q3HybVfUaAWkYetew8JKc5dnwasN5xeV5VAqhc8U4jN2tMa6zgdmM7sTNDd",
  "key45": "3xxN9Fv4phsJyMx8gNrUaRJHWNt4sW6K15jxWccBG23C8MDcSbBjgryw8CbVYtpXV63iWktYCHuuEa8YLgitNjHM"
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
