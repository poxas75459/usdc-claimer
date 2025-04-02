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
    "4XwQMJVcUbrK1RXJrZtXT1RsaBiQPH5viP66ZWMFTkdmwTPtv4T4suRSHUG7hmuoi3Zdz4DhupV8YT44JjAZk43b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YKR29ZmDHMoLFBXcBJY8ifJGWuncnR6SV8iTeozxdehDYTbAye3JQCsFZFMJ8xhx4DyV7DfDEoaKojzP3iSGAyv",
  "key1": "HGacXou7va8QSksrXcXxz7JpHgJUxwa8zJRcXqp27tvSKTEs1FcJgPP2jZaqVPgQML8Ub1oECH7x81TGStuVyTh",
  "key2": "22j3mNHxL7fEBz6g411BvwALZRi392yriVJnmRhz76K3UmbgCDEHn5KhAH17YBZFjCH7hCJxpCor1vV3TikPxmBQ",
  "key3": "5sAbgJzE2oXgYc4xLBPQRw1FzVhWm7XJ1cDHs7abm727a7gkgMzYZtVC9UTx9xBC1eaorvzcB77WAHUm6evbiPVs",
  "key4": "5dnv41MkHNb5vxchHCJBJ4MXKB3xjPGvxqvXDscgYJFA3hSD3yRrNAfX5ZC3CYR3d1cxhYx8VRTtujYXwA8MSgvu",
  "key5": "4Qb5Suhj1zCuWejJZcV4VUg9CvTcycUuvc8zPbyz6ZckvAEukKnRu1RxSBxrwx2F1eH7Gi1a4i8N8n9bEUGxrzki",
  "key6": "37ZFVKpBVetruSdUf5RLTi7Z9wBYgRpSZ58Fjr5g5bBL2DjQB4JGVmaExj2BmHC4RaeTy6ncFVSE3cZZ55sSY9y1",
  "key7": "5ELUKtXncW8TMRAWJA2Mf7qJwrcoDuunhBj29S8eAbWGNwuAarKhwaHfgbVpqf5cXst3PxkrBR3to7MM86RK9k15",
  "key8": "3iuuq4K71L4Ltb8n4m1J5CPucQimAqRsCSS9a865mhVJmVpzAESNfsbTC2twaZjSJxgjbJLvVw1CXB7Kqy9rnnSZ",
  "key9": "5pVvU5uAaBqAQogTyY2mtsjdjbrVbZ4xfDbmowkZ8Jg4c2KnFQwqFXAi4wWkHemFWT6wGmJhBSFZTPfAvsapxV6e",
  "key10": "2t2X8kVfTFGs4AqBJ9sKGzEm2sM2RhxoPGJcaCHBecZf4T1PeXc2b7rCWJQAYydC2zwr5siz1vWLj576Hvv3TLNv",
  "key11": "5tJXmPTyQ2LhRFeW1tML1ApHpASPpnq1T658V3yekmDBvgqypsGjq4B6ELjvB41bJ43NwfWN2Rb5naWqVoh7BjAH",
  "key12": "4ypYSgT69iDDg5x5mDezuyXnkDdBz7B1E8w311PccYccw9aCMRPkV4Y4nrHKo557vVZ2KavHhoCE32Cy4ukcHPPL",
  "key13": "5K2HMTCkuVKoG7uZVo4WjF5PZEry8LSN2Udy3vegEtgty6z4BzDWSBx6hdQmf7486VqJ4XoMVHMtuvLcXtibZQAr",
  "key14": "3f56KroNfdCey1WebYvCZSyonoRjLrA43uz8w4Qt2R5TJom4vfAXRG3Vwu6u8MLfWypEXwgYu1WBJiUccPPEvpRF",
  "key15": "2YiqCCzSfeZhwv5vMTwjaxGDjMF4b9tunoLXNEpQ4QZ7MUknFkX3Kx7fWRAMWhhnueNQ6R9DoaWMhDLHwcqYQvuw",
  "key16": "3eP945gES64Vtv6MJHDcBhZhexBEemCFPDtJi9fYGykVGFWoKCnHWfZmLSdGUkgJVP5QDbwGG4U6KpC3yNrcqhWw",
  "key17": "oAfHJTcKQM6cU4TzjZpzJXPtN48hWdCKMSaygfNkaaiYTKq3278KMctfJeAztHcNu4M3n1UAEzqspXgJ8AYh54y",
  "key18": "2ytug6oyf6qwnxfpfrNYb9ReHvkrEXF9WHSisDn5C3Wj9uSDVdt7TPmgLfG4CzdSwX8YcT5p5wEhprBEK9ujcjDn",
  "key19": "4JZfh23UmNwb4HvBCYnS7qM7aLEXS9UTtJcNYBK811JGYhU5rdNvvcyNLFbufTL4xAZkinkhLR3aL82H1BnwfQug",
  "key20": "2u5eF135KWjVqx824o6p4sgNC6isMmmYcTtXQMJ5GdN7Xquw9nYUxjuVzumHb1CDx1xhvdPyj5XeUUzSE3z5r5cC",
  "key21": "Buzi1MppVY4sDV5nxctuLuAGJjTse1NpZPsyMvjEnBgosNX7hcZycUxJda9i4WrLZFcM2Cdvqt9odXzuNzXjeNf",
  "key22": "4gwVaPmFZuzXBYN4DSFj7MhwmQ5rfJbHaCJkKJxQexrTAjiAykotAdGYZz8PzE1g2n2LTp4orAYeJASwSnpLN4Yx",
  "key23": "5TXmhw16nGSuLX6uTX6JDk67ViBnBMYhoCbjMMxuM2FmXGfLs2k9hyKKetC8df6a6Sr27FUEjq7GvViLcTqxCPvs",
  "key24": "5uMSCBhYHvG24xFxKMhESGfeC3gsUZyRuCTWUMhw5cPvP3p9H3sjqhcEz8rrB2gVaYXgLSh3SyogS6JJMEGM2ctA",
  "key25": "5pTyEpFRiiHNH6uqc8yFJyQiNKdxCMGUyMrEDBE7ZJcpPRbJ8UD7kjpvqbketmvvfnycNfRMUnEkeaf6Bywq5Uk2",
  "key26": "4w9hmrr5zZR1rjhRQPLNXhEit63sZcEnTW84ncsgFzb8ESReFSJfZMzxscV25Gt3rzB51qwit4W2kyDy5meLMECf",
  "key27": "38AykaG9crnvwRvr5gu6PH9PDYquAPYVA66gCxQQ8jkUeyxNU86dsQWWrWRgxTPV6wUyNetRP7q1VRo2tpQBFDaZ",
  "key28": "3As6bDKv7UrDbgEL8BdFTVQrngifAyCLhc1S6VpNirEQNW4RoMXZ2241WZfCS9Fb3kScnZwTuiHbYDhsFQHuau9y",
  "key29": "2MicDGknKiz7hLyECFcrR784RcwuB69zNYf5sC66NwjbFKmqsdA4VJLKFrJTfMCsjEhkFA5qrr1PUKsCBLscp8yF",
  "key30": "3zRDeqkYsqep6wP4MtgHdgQxMtBxpNxq4ru2cgm82t2P4mEyZ1VqtaFkLfhc5i893UC6ZPa7MATNF7Jm6oC92SWN",
  "key31": "52gSfrUCzSJQiS5TiHr93bzybwvhfjshcQoS8a8iryWSC5ey1xei4A8hpXjEgCBGrAF6Mw88TRo34araWxbYGsjb",
  "key32": "2PLYt8mmdKFE2rWe51XpTRGQ5gNtiEZ4CfZ7nRKtQFMwgDwRfAPocFhx9DCUsjMog87cyMGEnEhpLhybj4v2ia1B",
  "key33": "4mfqdsaiR96k7KRXL7fcTaqBPRmuyrLe2A6DMzn2TYr5MgzvipU4Tv8Fhauzem3stqTTeGojBcEe8u1ihCq4hEnd",
  "key34": "5mWyfALfrpVNv6xDw9cHDLutKM8R3UPjrgoFpyciwc5rU6tnarBJjFPmXviiiZBoAjkDLU2DBThUbh1jwr4XeKmQ",
  "key35": "2BHZ7FMZ7WGhgcWhuv4sjurtq5p8gLee3HnNnH16NXhYEmmYwPPeGgq2CH66M6BkkTYXsuhGremrAn1yR1CVNVcU",
  "key36": "3CrtxSKKbr4KhjWKUGZE3dutwE4DYEwqFx2jUp3wMc68vDo19YUGWfHe3qoEZXUWcQKrvAQz4XpVhqajQDMWU7Ap",
  "key37": "2RzJmR8MVkJbDXGoUc3zABZSxLGrzgBkxQMYtmhjRGf8GgSGHvaBCrr9Yr3WMdeYWx4qd4ccPCkK9Az21oWdf5rv",
  "key38": "2s5kX1cCFajW431M2fR7smchoAToNMNQEgPjsPLUNMM3K7wDfdtsA1b4ooT7rFbUGFPxm9pQed1EN44gEhzVZq6w",
  "key39": "4CdGJGWqQsKK3MCtYy17EKnRrz4wd1GPVMEa2J38tfnw59Ban2GRMfSDv3aFPdRAkYmLEuVZQcSL6GP9Wv6h5kbb",
  "key40": "4bMxLuG9fweRjXPtJwPB1GMF7eaUKTiyyajLtaaVwLzsUEEWhPbn7YUe3jRzFYuTnoqNrMoLPcw7Kk1dQwN7xoCJ",
  "key41": "3WDopk5FdF5cW2bpwZtksgekfjnxHhj2A9R5pEa7bJ37ejHzQkUCEPy8GQYWrVGT3Qw1WopecL9iHx5gDt27xHZj",
  "key42": "3bZEsmeH9tDR4P1SFVfzXXJGAtgDFvfym8wFHcvM7MC979UKpNgJWaRuZf85U9oAavk2vA32ztPUn9aJobQBH4Cq",
  "key43": "CfW2qj4cHvPRW7kvuHoBPB1WtK4hgRcrx2H19cuCVQbWu7P51VxyMbgR56ZjwNXCpTmKdRQntLc5WnvoUCAAtgr",
  "key44": "ABEbZjv4pwssWp3quUDos4UYRKFezK9KptUkxQHt2Jo6MQucXwUeKP5TKoRyi8Aqp97vFMb16YhttuNr9rpQ61a",
  "key45": "RvJrPcDduMaYAJmug3PpxALeX31EcNLAGK5EiHZmUKR8VtoNnX4AVBKGzkmwgQfNi1WgZB8d4EL7ku4XibHeRoX",
  "key46": "5WxBtcF4DHSABPGoHVcNzJRwtpxFK1foSgpQzJASjRarcv1jyYFASJXYspodRkoY2ZFrmJj2uABPigR6U8o3r9gA"
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
