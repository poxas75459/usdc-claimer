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
    "5z2UbF8SfJoKND8dPnBLEDnRGvNSEGvuWrGP3xPLS8zQX3hgHKee9zPBHx3PPrCMZe11jj3NSnv9pYQk8eXRAE9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NGFJ4oyZRY8P8KKkhKse59cVREbN3kujo1eb37MjCJnWMpuzzeaowfxdbpaKDnb8pzvpc5yUqj4uJ6X8HnYv8HF",
  "key1": "eeYbTAA64txDrtJnk361pgaJuG3PaR7fuqNU6aPeANZZ45sX4sVMLo7cfDwzNipDBWUpcmvxGuSahDaK4D9p6to",
  "key2": "oRacRWcaj3D8ZALHNrkmcheEMvb7JzuvmvUSgfnWeBmb46RG4KJt5JtiYtcoKNAJot1fTqFb17MxpEHjBuNzK8U",
  "key3": "5SWjbNBC1jgBUAX8Y4dkHCg2gwgGtEojLyzk6KPKA44RwK5TFUFUnCiBVPtxVAfUoZYgGyt93gXBpn7xjiLWsPaK",
  "key4": "41WpQJjxMX5zRtBf3p8ZGJbRx4gMxeTgvNv4x4px6P1S4PWMaCHUHf6ALqxt9tpsGD38roeSe1QkkqoTiJXv5Szg",
  "key5": "qukpe9GZnGhe69ZRxC1WTNVkJKY268bMA4GF5H1vu8aSmwLGvh6AZUZacj8rKN26qPiSgmiGRzjQsxoqEpDQ3vY",
  "key6": "35Ftrq5vCkcjGLdpCBZsDFBnT1AnwbhELU91es1Dqh289ypgARAyi4QcASsb3n7dkZ4Mx6Gvty1ZwC35tnc7ErYC",
  "key7": "RF5dknASTuqfNbvQyoMBTyPNfnm7gPyD9EVXWzBZzm3VBPurC9Rd6d6gzWFmeXPE6uTk3dd6125hj5PfYRVMpnQ",
  "key8": "55MuyrU4NrmMaaNgs2tn4dyoNhR1Mv8nGYGrEnHRwfDxbpxoaxhAgZSi7uA4m71DBHQznjN5M5o9HXMxkKqHDtQT",
  "key9": "57mxzdSxGgoWJ3NCHQbu1cNV214RfUT7ujNcVWsyALsozHi89QXAQqz5xjHu3yrhcqoEQWpF646ZJ2ZVymZuLp4A",
  "key10": "gZnysUtAdFwfPWtAWacQWKM5yWhXmcT2gJnBTxw25ZS3bDn6gqgHNioneDj77vPjmGgUJMv5dU7Db3fpiMxEWvF",
  "key11": "JHiLGG7uhPnY1vEH4vghJvjy1WCaofYok2SbgM9vdR4WgjXiBpnXdxy4nM84eXY26rrEgaCQCtP4ZzYyKBBTkMb",
  "key12": "5zhbpdShkqUw7JdwoR1Cvysijuv4eQgEFB3bX5VhHXncB88f4GHKUX29PAPbqzak6oC6MAjMUZLyw5CQ8AUfZUY8",
  "key13": "4TN9ywWqD6ePtr3oeWPaTB2C6gkrmNJwnQLXTjCbpAkAt174UvTY6SSnsD4T9hMWs3pHVYvPqh1NX8QCkRfmsQ1b",
  "key14": "3dWfrpqQrZRoymBWP6MVNPVanPHn4sFeRKoS2RXCu42b9jy4SjVdd65AeEe9F9PJXACCU2ofyuQ3Rw548cJA9q2v",
  "key15": "56oAjFkYtiRxbvz2uka2X94iocAeroWcaNh1snTg5Ku1MbBmJ1x3RouLAXGsTLUuzrwiXSC4osRnjB4rouZt1XpE",
  "key16": "5e3Rx1797unWv9HDSWx7HEbPwy24FF546qGSvcNdVRyPrNM9gBnJjRiCpvanhdnksaHCM12PH45x3KneaxoVnFXN",
  "key17": "2ijE6Sout7XrQTJZA7nMSnmMsfCGFavBpctdKNynpBJQZJGmxsZYdHGwC4JHaWDDvFDzSZJeowcTpn72gGigZM6S",
  "key18": "5F48YCugW5Cr2in25EogRFTNZxXZDGEH3uv7SL9iXztkBxXTqkKAFV2GmzCj76zBQ6Br4ncSamx1EajioujZ29yB",
  "key19": "5o4tSf2WUgxxroY58SEVThyDvEcsF8rpwRW5ahWVKt5TRYkUwevqF3LXGuMqVnDQT47iAE8wMkt4rWKjyrF7YG6Q",
  "key20": "2HjvpkMegGCuMsj8edX7KRWta63qcrB8ft33TegigvW5TZsWkETYXUWGG2xwUJT8cN3mTBJBxjh96LNnswkJCqos",
  "key21": "29recL3B9pqe9CCXjH1w5YFsFxkEbUL3uBoW3KXzmQdY8bEBkdeERTB6vZLP5bgyhNHR5joWYB2HcJLnvXZ4Jodf",
  "key22": "2EogTAgdNejfTiFYKALX7sAHN7ZjaFEX6S16ZTaLcxKBoZDTRpDednN5ynVUQ3NsDQjEpedqbC2yKGEpbn98Sw4u",
  "key23": "4Rt1v5PCTh3UHwR6VhMiFRaArTw4Yy12arz4nByaDVgGZZwasENy9VbMLBqsSdot1UPGLcqnU1rAFLmhnJFvW677",
  "key24": "3mSX6J25GiRi85cd82V9StZwPrLogQaJnw4Fe9K82yHbB4Y457qK5na7ZHNn6C81FkKh4wEzjS36gwcm3sezYsma",
  "key25": "3WUwQ4h6WDKk69czj7cQ4EqCc3B1C6XcEZWdtESR7yx9Ki8YuyMve7u2jzAsfjmdXhHpqGvwJYDrxv9PVCm25qJp",
  "key26": "5oK9wtjJ7atVPknzxwVcwFcsaPSVp1SbJJt83kdLPuYkLp4ipfbTYWoT171sCZKtN9taVbJKidygwd4ocoMbufd3",
  "key27": "4MWXj6dnDgjnA7Cu55mPxfifMNpkQbnLZykLXzpYtCnywzafmTMpGX3ZiHLz6v6xexY6uQyso7fWAsuRNveRySs3",
  "key28": "5mxq7NiGyMD3qiEGmHopyNpcBGQgtdi5CXzkC2quTSX6n37THZFzSLhrPZeRa1GWCoy64pNxw5Bz8JfkWjAh5ns3",
  "key29": "3gB2GsaahGCuqMvzGaxRRnrrUaJPKbv67p95wo8zvB3JjGy23Eawjb45cvNEihjZeTr21tQbzn3wCUca7yGqW6tx",
  "key30": "dLUH2QujSGeqjUVEhPdd3wtU4rnX993RNR4M2HjTymnWV6dkKnWkRa9vRRscmtJuPLwQ2y1RV1jZfiGmoJT2hmu",
  "key31": "414E8kMzYDzGxCchyHJdrbHW5Ti3mN8vT3RAidEdZExFK1h8dxLTWicovP6JxeqTEa16wo7s7JApcT4qEDEmvjdm",
  "key32": "2zCqNQXhyBJrYCpdXPbVnVQTHTEeC7GkE2rVvVukN4hEsKQN6q6z4xrtnf18qVekmAzhbWzFHD1sDPvuHrnH6k9o",
  "key33": "4dpdnejaz5hdrkA1v882tFCeTznujof27pnwwXbtqJvEELdSXeuyGbQVG3FFbdjAaNVwUoD1LetqXLWwtioR3LS",
  "key34": "q6NMVXhkLAYuR15C8GEdWG6iRnfR63Hi8QWaCYe213Ed7scyBsrq9yTqR3fdmsbdPTdYfkR7pWFUHjkUUgJHr4W",
  "key35": "48iGGCjdobnk39ze9GmJDHP5ZfsZD5KycAmsEujjGo7YNw1FKyS6j5wdkEwA7EoDV6iGALU5M2B63BrCQmtzAf2p",
  "key36": "5mmbU3CU3FBqodhEDb74RZLgCxYMW59pXs3HCuV3L5bcuouZRanQ6J1LSCcvZZfKmtomVeHLfFUm6vWeRXpSzHNS",
  "key37": "4k1RaWX52iKczn2c6UCseZjwNKTrmj7YhFTq3d7KERnx6xWAVsij22n9eyqWY52WHX6pRg5WphUhXnzScfUJw9Wz",
  "key38": "KzzbA7XBuDxH8PtkavFmytPZGemDHMqwoJVVcmPyihb75Fv22RdSHyqBX9gL1PfgnJQejSw1QtD9XAQou5HvgpX",
  "key39": "52BKzX2cYTzVfwkconbPayPRqQPq91L2Vg2sW7P5KXosJZoDVzwRTgVHPcVeW79VBgHngNTTT4Fr9CSPgs8vbC7",
  "key40": "5KJ4U5pgPj4YhQkdxRkQWcNhue9z3b24xK8ncAxwJXqcxK1sGUegfv9N15hRaMwKKizBD9p5aCLdEt2sTpLk9hqk"
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
