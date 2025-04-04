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
    "VDUKtRzxCFj8a7eo5iUXFWhaByGXTruzw83Hjc4MiGew6izif9466QC2AXz4gsju6xGATzEND5mDj9yzS51HSL3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SE2coMp7fQtHbWaEwZMVKDwfxroZaacScvvswsSjZ6sTe3NXkzyFCSXuvnZAcnCZMNXV6Wqb8DZUkg1bEWsB66V",
  "key1": "2M14r4raRFgCRR2H3KA7DNHjBg9B5r49UU6YaH2TwYfwMgHBbbHvXREUrinXyfJv6XPdUavh17bF6zwCNJpPQWsK",
  "key2": "2otukxaGnzF8J4a4dT6CoRi8oK7zLtB7nU4atzPSF6UAMCDScGrVt72fmMwFQe1Wynv39W2jpkAsy9KedGSWk7gF",
  "key3": "6gDjoafe265cdv3PyMJ33Jdmnuu9RN9eT3RF5nB5cgkg2R5tM1AhHhZDDjnssrq5GQwrDiwZQovwqp3jjji1s2J",
  "key4": "5e8S2o2GUiJzUPLgGqCYHSKSbXGyikW3yWwc8ZvTsLFWybkfw3j2xUY2FMfW7CCNGopyZZYFcCh4UJXTNGWj2bZb",
  "key5": "2q2bCgRv2AxDJjwkZKvYeFu8rfPHYMpK4Li7LMnL4TZJh7BeG9WsUtKdb51CzXEeheojE4adc8uG2NJUGVA3bwgB",
  "key6": "dTBTX6MQnW8bgGKpKLEnasHdzYFHpHXyoipUPuFPeWosBX1g4THQUvHHjfzPTiydyfAGcuUTiYTJVa8rswucVho",
  "key7": "2GuHQYvWDSNn3P4EAkw56Fhj5yURHhz1tUpY1bA37VZCiXBRwSPP725vfvXdBayfLaJBcuUFzX9GJDG4gCL8LMgz",
  "key8": "5r636vksUh9ugMNZmExytiwmCEZvXJVs7muw41czekGjV1pCpTkoPtmtDPeFw1bqehd819tnYH2r71j4ecY7j8yB",
  "key9": "4iHHPPULuBkpvLGSDYdgkaQmiw1nsQXMtA68TAGaikP7XCH1zraQSu147FwMj9BUGz7tV8DY8E5BcfbLrJ2AcRyP",
  "key10": "4EY74QacxkQRWwLL2PnBtCWrBPmNV6LgbDBWBgktgxnN1PFQeTBhZwHBG2eiCH7Xu3PT5vUs1Zqou62ZHCCDy2U3",
  "key11": "3ZGhB3wAdzZyaLE1SPQkRGM67xHA3iWpwTFpQVb9EAjykJXC6H8sC8V8Rxp73kN7Tub6LCV3ACZvn8HCrmvnyMig",
  "key12": "3tsviMeWHAc3B1KEDfKPjYM7CHAwXe4FCbWkuh5vFRRobqpPaHRmWCfGoWRqhidjDWo61bj6q7fxUUXBC8AEShw8",
  "key13": "4E3886m5mniwStYVq8k1ESsANuowLjN6S7cULF47GrFpURkT6UtgtHTCqQFNkCRVEZcQuLs6HA7LJqXZsydKVpQk",
  "key14": "5ma1Fr9YwsHTthVa9xCfoy1cvvECADCQoE5yJDHQhGzP5udeTWR1o56UhVTfgLfDrxuHk3ooQqM5gzztxHtATumd",
  "key15": "4rWdcZ9ssEyvVQiW5pETL7qsL2YhyH834vmzspEPty7dBQJR6nmxGjeuetkBXSwSHxNiiUuBFaYammSNQTc8YmgT",
  "key16": "4EHBnV8WPasgaJfJsqyTzcvYxBN4c2dHXqsyifwAvr1mKDniPdWwqjcLY499m36sJwBwwczekCHzQV9oVg8jgJfC",
  "key17": "2bisfaU17jwCH1U9aby7dmw7TUiGyAF6ZtP5q6egBkJb8uK1zVuuSSE9NHZFrr2PzwRYDmnZ1HtttpNxLRkB6WBX",
  "key18": "3HUGdFZYK95RvDTaFZnP5x4vZx6RTepUFNSZ3P3196mbft8S3MYd7Zxys1z8LvfX1qhpTKWZxZS1c1vJhUoBXUtD",
  "key19": "4Z8rk7BN8r7ybWxnvv6G77t3N1txZd1WjJ9DD4XqBUkYjy4nZwNGRfsxZCedQwdZQSTg2GHAcAmq2k5aC33modB",
  "key20": "2eYTkhoBC1BnHiUC6mciYh6BY1yxdRG9e7dpjrPHZaKKCo6KVv9BndAFXEVtArjUezkWNFCJsiPYYJ7b1YQDEAza",
  "key21": "4kekXKvUYQ7PrGHpH8TR8bBSR1jvPMDx5GVj9eBK6zM1zRcaqNqR1EzAk8YRfV3e54r4NM8nDCu3jRPnNRzHRZsP",
  "key22": "2JJB6pSANmzyYR7i1ZJB39HW3rL5A2RdYRomNtwVnHmbWPbmp2XjiAZAFNVHJGgVaMpmka7dQGsCdaz5NEDnwKFz",
  "key23": "DdgJKKFKodsfvKKMnXLF8a2wrEs22xXRXNZoCER5iA1icWz26cnW4xpMpPpDEKqqYNKb4ERRGRucW9BYJK5T6QF",
  "key24": "3grc88uXYguEmd7SfKiWYKCzUhzhJyF8hAZVHF78WgKe9a45ezTTtoP9XCDYJpXydSLN1TNVKEneGTnL4UDeFhba",
  "key25": "4mkuB3Du7awxZUdaQ4tz2WkKapmr8KCMZoPTQV43mD8mnMjX1jhpobRoTsoE8Af2KhbtrF5ebB6tr42X7FkdKW13",
  "key26": "2N4AWD6iTofUmQCnpyAfogczfK4CvtKfrhSMDg4m2FCp8o55bc7m7uTHZmrqRJL9hcJGqqvjMtWBcqgLtJXv3o4Q",
  "key27": "3ikmck7HspH3BsJwLiDBV7TouJ3Z5C3tB3dScRkPmFGjj7G7hL3LirhMVi6fL4Viz5bFUqvPNJRyaz7ksF1rE5Cm",
  "key28": "36qaY7RupfHhgH1yBJEWgDjkL8jMfoh7n5EHWggnze5uevdJo6VpspNQtWqUi8udHi9gN5Jq3ZQEsTqx37q5HKqm",
  "key29": "2wGHzSxfieihoG4eLYweZtGMhyxswDJPAidSeYSiCPrBacrJioawJN2SZTeStoMJ6BKEfXNgDy2vfvPvSKwwhYGy",
  "key30": "5QyyMzjgSbxHo1n99v68eVH98K8U7knyf1HpLz9PiQDeRuRiopb2mtvJX2PSiwMxBy2PPuLXAUJrCBQBF2cCkD7B",
  "key31": "5a2MYyPt7Pi3FUiqE2EcPYxdsesu1aVSic3Eshigf93JNWgUp3DBLLWFGffUN6v7mPTScUNiWAizPKM2DhCXL7Us",
  "key32": "66MaU7czznY365iog5Fu1VxKeWZk6Ctd4uJAMTCwqMVroFgo87Bskpdbgdydn6ReMfeAP5WYCG27nTga4U88vx1P",
  "key33": "46XdyRs6r142nqysSFhsS33tr8k1yNZQCAFMScHPCF2iw4HGB6knSVZzvMcdzMABdRr8QqbDKssHtSx6ko3Mr2Cq",
  "key34": "4s1Zn6RJ6pQJqVvUrjHG5K1JK6iiQvbsQwiYbmPcTh3qcnQwkezLtAFriEnp4uj4FyqEcoWGfyckrG57YGcMnkiA",
  "key35": "4euGCWNR5iKooRUnVmYU7zYFj9d2LLHiTVKk1C3rcrMwZ5gkfkdBhxtW4GAjt9CxcACJhsi7T18axBVgRUUaAcwi",
  "key36": "jomPzqLzAmVKi6sDNGonohyk3Ebb58RvdVwbVWzY4wnL9vmmvn4oNov7Z1Shwnh8VNFmbHqm1dsuniqT9qzQPqz",
  "key37": "3ysgsE138e87ju2WU9HKV9JZKfE1HQj5HRbSxfnEUMTzRov2KjNxRDTCYndnPAW8oJa46RjqXvAm7CRqkVybo3bD",
  "key38": "3Kx5jDHeMSgFBcMFojpJPTaj31bTy3DUY9niXBfi6Ng45TTcxE38TkR4YcsJFcp8pqqVwAwNPip4FcYSrACkrfRz",
  "key39": "4GQkdX9ZGHYf7CdS2fUUDPEZu2HgJeiTSrpdqRWdfzfhb1wqRbji2P3RxmVshs7CyesUkLnkERGtb11rJUsfmZud",
  "key40": "5Zr28rzhVxthmwRsYxyMRA1NjzdWtWARWADnpJ9fKdN3KdBm9BKP5EmUCeb6hH8misvug7gaNeG2rgfB3YMSAWbx",
  "key41": "zMsyz1ZmR3YkTvNFrVN4ADpooS4zhDHrkgzJjX3u7TjCdvcz1CEknnWQcMDwhSwxM9GZhMLKMCZKreraAGmTMWG",
  "key42": "3WhrtVKM2hrkmoGRTCyZWrHZjd8xmbTEd2PgSbpwdpXUEneMYGQfsVn47MERp4waPJTQxUQinvz9VdS1ACsZAZJ5",
  "key43": "3zCjvRi98a4NVS4xpJztG3ajURLx3bX5mfdjUgrkQkcbTJ65MkHJCWMZcMLVD6STgdMYQ83ia9bKg8wnjn9LG6ss",
  "key44": "23ALmWFNhr6qrh8fbWDyaUxgtk6UPGRdZESpvANUYamBRGDjFbTjmV31yhYLEZmMgvTq4cKS1Tk85agoRqSGiLYN",
  "key45": "5P6MdaA6UBNd3sx2Scau4PTn9T5wtmN5HsFLBi2jXUNckn1ZGHBLhbcy4gSmhBaJ1bcA8X1cAsWXvwHWrUHiHEq4",
  "key46": "2EqLt1CdpwESRJt77BVTCxEt5uvMgNUVB7GZLpWxw53DcDKtrTqM7BtWk3yADDE98qBhQitf2XrmSV26xffmpZyY"
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
