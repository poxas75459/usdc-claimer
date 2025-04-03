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
    "VRyLo7ajF4vLqVpaoignTMFTYKqhuVQTNBBNvYgshZ6cE5hyR8iBUE48MWq4wfBaBPkCLtNm6vKfQRox5BF5Evs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RMDPhWVFFKi7NEu4spENB1Yz4gVBMarmBsCVS7Wx53vBSgeGYRXgBpGHnfUN2RcaVRiC3kduvzwWcvZY2Sxv6Cm",
  "key1": "4kdNxrXB4kapqMiveP2zSjNYERHsT2tSZ79vqMQJvmJdTipbP6rV8wAZzkDfrEnF31Qx5Js6nR1WTMqtQTMERRTo",
  "key2": "2je1HPeaG2dLan5jGQgGJmoGgH5ALRwwdzZJHS7bn5igZmayuYcDaoxpgMiY7xvUie2JhNGmeBogsy4c5JvLAnyR",
  "key3": "3HZhZFs5FLCSVMEcthwBFwKi6Xjuk4cw3QgUs4g5CRrSjXT6TA73Vzgd4P3iJ3jeeVRRQSMXLZiKXcVkMQ1YZabQ",
  "key4": "3PKnB9Vjg2m3j1doXoBCnEjFb9EXa7k2NsbGkVGSzZpcsAMDM8FUSCt2QkrbNK5erhtsfefCLTJe8mBJTotLuoe7",
  "key5": "4Lr6b9YfvuLvByLD289b4ng81itfMmftVZZkzW2PFa1TweNhTAM4673DDevTYoZNtzTKmd56x4cmDxVCKQd3sSeE",
  "key6": "45Gs2u8Um7oHv9ajM7emqm5DVGf4Xdk9BMVzXxGv8Sq9SmfyiQ4K6kqJTBt5rh6iVDvzxSkz9mNYkvLNS28hkBa6",
  "key7": "5c7comtkBQD7PXR8s6YKMXhjwaJ72gzCkr1QdRQTcEKmZnns2hFUbmmHDP1891imvA8d8K2CEniPeAdrBEKjuJbs",
  "key8": "53ipovAgwGN6uTVzr1YrPfnpDxkoDnXuRecmUYoygwCXegVy8FrCqogXzGto7WHqoJC8N8i1P5kmMEGX4top34f7",
  "key9": "4FVY26HU45xb9JjYTUGvt4GBv8mJw6FbnNttiiskkE61e2Sdw972S9mTNJB6ujY1YsfjW3yZk2mm3oGnuFkYUwWQ",
  "key10": "L9BXNJy63fEabEknFrVHPLExaZkY9uuryJiDaE3KsHvioJc5R7ALn59vaFrbA3pBhZbPoNLPkLasotBuayuWnpL",
  "key11": "sVsHYA1fx52jbtoBJsjLgfbUsvr7F1Yhk6ogg28xXLBjLA84eXPNUaetbrYAUAswE1VB1jgtESPPQEkXZDYVU9v",
  "key12": "369afpycgV6QRxSAffKDUpmgWcX9eerHgCscMVavebb4dKJFFhKiavkpX2YPAsPfwXNWSXiPjPJy95FTwtbnX5Ty",
  "key13": "z9vr8mS3FyvCP52w91Mv61yPd3KXDM4NWucYLawcPa2sSTxCckcyUGgoCgyXRMbVprx3GAZqUFGfAPS7oSCfVcq",
  "key14": "4Y6AxphZBWkFknijePNBHvj7kJJBPndNhRNo1NTqUcDQRYEsSjxCLRLnGVrRDi5GRS8U7nxq8rLh9LaiQKBV7uWY",
  "key15": "4epnmK7ZYkVW77HoqhCsRRSqxKMNqMEcaS9UUC1Tg6koUUvQZAnF7LAJd6DCcp6FcQwCQZxBLuGMK6xGwBHeSiH",
  "key16": "3t7hjk4S7rtpoQxVrSk7bcFuqBY3TkJrDghoZdpxF198c159rNuaaihN5Yb25auDti93Wfetho5GmgCXmerWM9kX",
  "key17": "F47g8K2ikzHR1CTSdJpoUXKhdRmTsRzxX79TME7ARUmnECH3ZyutEy9mhR87ne12XH9ow32o4ZgeDd6CFWgsm8A",
  "key18": "49FW1TPhaHGWQCueCUSgBtKascD5So48HwkAtciigJWtUy5qovXn1yK351R3ptgynsAHiTTxV1USsSKoHd9iKA1b",
  "key19": "4Fs3hpawg72XAjCMhnMdEJEgaqsCmwseaQRnkyG9BiPbcEejnwHbJKGWRkgtTxqeviAoAimcJGBRohivu9hRaeLP",
  "key20": "5TXpFmAwBWjGfep12Pvuuj8dRRubfkoSLpvGGNLDuMz3Ygj5xBRecw4eAnaqDY6jiV4DhW2Jc5ij3BrtpTop1L5x",
  "key21": "4PsPE87kKvb6qZTSDHRdmGSFdYdCy3ECGMVGJa6iwKCJ6ppAoV1mNK7E253xsX2dcDH87cGcKXC6otu4TBV9fies",
  "key22": "eBn5e2cbTXPEZXKM5i3qDtsFSauwWbdDiJGhSkMouWfZRpTiZcycvtK8HnJJX4NERs3PafbKpBN2MtK2SHwKeJJ",
  "key23": "3jL5Z8zejx6WUDpfuvkgsDgigsoaywc75fU1adZrqRVcaW85W1zjE32VuRDd2v5PuQouGFTdezL4FiJ9wsNmqwR5",
  "key24": "27W2XS3iftgoJ1WVTj1ZkR1kkzvigGMRPeM6JXSX6f8Hb2rrzXjDFiDqVa8o1S7pLhuEFRyBbvseNjsv3MaR9pHH",
  "key25": "3q6T8bmuuBYd7ewyDRvYfro6pHWahTU6LNP6uh2ycWSxMGrj1MGEs7BbZBbLuXmVxRBvQCLfcPSBzUXGQQ2nRDVc",
  "key26": "2nNcRuZarNc6ry1HVc8GgoHFiSePaMaPn2n8Z2JRHKf4HdSwRQ92xppece6Xt8A2hK43rLEhj6x5JzKEJmnJB5fC",
  "key27": "2GDL2HSESdPXmZr95x5eWii525ArXBpXg3qDggMiSkGxfdPsCUzTH64WhNSt4jVa5GVRSfss2pAR7bLmFvW5DedT",
  "key28": "oFrpaw7QWDmhjvZu3AnN8VicUSYbdgVrHR1GDokdv1BBG1AD42rTsAuo5cHnNxs71KUAu8m3ou6942YZtf3M8UN",
  "key29": "3vF6syHoGdYXyKD4qjycDtKPYEoGUdRxJEdM5Ch1V4MDJdJkH5AszC4PSnAhUE83QofKMh48Nt7ocVwtkKsJ5ci9",
  "key30": "zcsMDY2om9zrD4TbMYA7UzjBN2QPvSiE9tWA29WM8z9xqEjKby6DWx4P1qXE3QqBFKkUn7UDqK76K7Hhm4kcGYh",
  "key31": "4qdJ7rBCAHciWGDVgJyK4cSFnDkEmnNjdazHc9Gj9GmsbdfoD7LYWC3ADXa1bPcfFtbHL6B8uTFKKMr7Eow2BBWK",
  "key32": "4e3TWDthVE9wFmaXWcb5cEasGxFKfH87PitE2zFL7okJBzAmkEQpSzN4oYkJHLwJQ1jH68E7MSm98YyE258e5tdD",
  "key33": "3aW1ZPQ5QTChN5HayKQnKF9HEVsJMavNqwQg5nfJ86kECNogwv3tHcBJNDFtZ5UsQHxSyx1UbL4dQrJVGf5DWfMG",
  "key34": "CoCgr8yRBJfER4TkyqCAjuEYZthrai6DoeQ8zmm41Sp7Ywso8FAhqqj82jopHkm68CAXanWy9UC8XAn4fCsUejw",
  "key35": "5Bug75jfHNk3MvhjEv99M7vmhs5kE5AnAkj2X3sS7xJsEmZZ2LuwZ7WPDBQL7RRJMzoc6ybYsVr2iwEsidNXzrs1",
  "key36": "66MJVVwLtMKj91Yv3yfg83VKiFzXbpjCtfHVXA74hzKLvDyMWfGHqpvQnVSSNo4Nme5pnp1jpXYjxCNf3ALZcNC8",
  "key37": "4ecKjpRW54AeE2GWQUoz21K2hEmx6sCrpV7JnpazxU14J2K69Kr9aeXiu2jU6LijHkPQwuEDx7fyKmpD7LUPY8wG"
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
