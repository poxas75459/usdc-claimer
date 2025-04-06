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
    "5uw2tc9MXepDtFHkeVKXjdem3s67eUpfCT5VTuwLoUHmyXceV2mqttWtyFXV8hRfHZom3hNr9MSeMjQth3Vh71pu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zSEK3s91pJTqicfn3GxJ8nqC51tdyzBXGJqfsM1kKcGKCbKCdfBGAhewi2rhETnu3vKsKZmHSerhW2nZVVUeNfm",
  "key1": "3hRQeYZAdXY32NhFeiv9eHrpzb8gp5RoRrxbbQbJHnBbSB2mVxNtjDG3SeyLcgvHswSZowdYDxRSBmqCBEFvJesA",
  "key2": "3nz169Bx8aqnrESi986bqFEt1qDzFXWi7g2SA9fmNuSAKQfpKE6iXwsS333PK6823cuSyVW1AhUsUW6EFMiXV4BV",
  "key3": "4GRKv8G2aaYnHdySU85RcqR5pB1pNXfuSuheNLWVC6ZCUZPVcJJRyT5MSnHyWrTnBCBeSaQ4SxTnb3VC6W7U4zWT",
  "key4": "5pxcs1bNJmyP2L1tSDsU35pXdthNUW3Aj4TWsihbfEsKpAcWVKwXqEcY25MdAoBnGpvwK5LYqfSe4w7XV1mzkXyW",
  "key5": "22MjGygLfM5ftfTakoiamhaLwgbpy1u6PuEGZMQz2EHvAT5EaiWG4Z2zzwcmasuTV4LE9jmy4JFFqUGphAyxVu8g",
  "key6": "37dknA5Bzct8BximYHQ836H8t96SWNh9sRW5QmuRuzXDCcMcm4MA7yws4ViCScCpASh8TUtYdTehEiAMw1r4oBHm",
  "key7": "5cNZ6wHuvommqZHv8ofWrdmb6HHaxvgeAArVvALqUwPHdj32WTV9zXoCd7U9gWaNt3n5ZHyyWLec4coZoh7UgLiZ",
  "key8": "4v86gR4DbCFrnwUHcTiA2b8da6Xom8TuXZMfKi382dEUAJvpC3UhqoAjRNjPQ6MqcgftaM4RbaNcLdk397MLUEU",
  "key9": "5e6eE6xvEEN13fPqxx34JFZJDXMzVZpfLZy1SCzMF526MYeSiKefLJmkENbjfVJ7hqru1cqadyny8o95ibDaiqZU",
  "key10": "2FkiMhrCy8ovPz5LXtbmDgDjdTgD4LiMyAainFJGa1LWzYNABkJH5FhVHSJ3Q3gDWdgtCAmCxBheMDbC1Wmcfz8S",
  "key11": "575W2XC3XLChyX6vrTt1o8u5BFoDJCM6STtNerYUpR6k5Uh1eMQErxYqV7hCBpXLFe9b5LfCJs6p9o9iitTf7dFV",
  "key12": "3KVmwJL2de3KqXmDDQJoL8B7Thm65b4HNshM67V9NneHYT7Ta6VE7eW58ULSVjECgUkMVHaAKT4E2zSGov9QWY8x",
  "key13": "41pL2GTFuDvmy7b2eX9byPtPbsVtwH4FSH2vD7bSPfJkLFRnKiANLAfjyMmDV6SfyRTnjU2nfJiEU31VeTrVBwEa",
  "key14": "3KqWAwhJYxm7cd6dBkExzz7HeCd5oS4cZb63iqNz663Wp6Pe7SUE31pP8RBaogKM3zXGvmEibbqC1mXM6q3fCGHN",
  "key15": "36AYcUTnf3r5fQLD1e1oYEvH2HjyokiihMQQ29Z7nAo8gtfQja2fCLShJoJMkiixgYi57SdLoYSCu66pvGGTjbPS",
  "key16": "MXkPmfKzW3GCRVypsCdrC5GoUHiQHv8UWHQUmHidEUbT3BPuq3vJ2B7jnCV8BJfFo8mmh8NVkBdKCGeSuZKKzgJ",
  "key17": "3VKBiy66rYfT6WBohrf1bxY6uKgARWjoAPcNVNCeax75gbo575Zr7gWgJQwkuqZDBfyu5v1Qqb29RoATEmhfA2bP",
  "key18": "5E8GgRAyftQ5UdYb5WVidRtGAjaXt8NRq5jysRgvrVqX97oFgPSkht4xCmwX5TkyJesSjSW3uGCiGcv6hJctn6X7",
  "key19": "4TjDK4J8NtgJ2jVyG4WaY195hEXK1Uav593QcBD39WVMUZ9gnFyK4F9PxQ4HcEL73R78nBaBYNWVftkGj4YSrjRC",
  "key20": "f7FvFvGwFL5dhy72y9rHx6zhUkRXWpo4y2fekMmYE7bWoePveagkNfztoSsdhwgtTKFdVtLAvGyz3CnJQddDY5X",
  "key21": "2A8Eqz8SEkmUXzUkmrgAjGKN78FyEz1PbwZNoFs2e7ibGUFPXe1PzMGEAPaZb8o9FxHFgHqmJ8iaV1f6JTyLoy6t",
  "key22": "4zJtEU9wqq5eiNCGHA192gwoZHn8ghsL3XurUFbCchZc7vDUHHfKUUivMWtrnQcT3NzhZkqax673Ee4erjkV93hX",
  "key23": "2NLjBrtphJHwpdY5ZAHWDQ6v6Fzc3mnn5RjzzU2VN8Pj2V5RNKAQcKxa5FBzAsjdBzCKk1WXc7KfMydVFybDbqD8",
  "key24": "4CqJ1Br16LMrpsS3MhJjXppbKRm8uy6wCGSwuxF5xEfYcjp2tNgZJkmHv337rFnAK7wrHscebYz3GN1y2eiuS7no",
  "key25": "Hm73ZieeexwepXN5j1NjNjSqkA6w96WmQvYaAEQUTnxpMgfs657QSmk3D4gZmiqBPpWztKJJ8KP1ovgY5BaubdA",
  "key26": "Hk14zWG4piteGsGL2UrgmvdgkY9sq84qEKfT6yjEtsBdMASpbUpDLhbqxLTXoWVBTtxirx55SdMtApEo22rAcFs",
  "key27": "5eaWN94LyDXUytaPrwto3hAe8rf5Bg8T1EjDNhPxQK8WgYfjvq7Rer3LG1Fbu2Tykizz5jcyyYhpGPL9y5CiTpsW",
  "key28": "BUhSMRMiWKa5Xfi7SekB4DG3exRx3RrNhHnLZbeHwq93oGTNq7MpUTTAH75xRo8NNM4KjsUbzrk5bUt6c3dBG3W",
  "key29": "5qYuxhF6Tec9T3NGdGBXJF7GFfe9tuBBvMUSsWaJpAxLnPsQn8BUYApf9n19b3EMsYy5hAJD6KZzurpn2vsi7dmF",
  "key30": "29UfuJvKgPWe4LfqFsfWMw83kCLPaq52XZxSSybyvYScyKKpsB8E5eFnLqiTBLhzQa75Q3eaydeK723wmPoV6AhV",
  "key31": "zM7goYz63yHdLzqDUu5WNJroPF73uK98RsvTgpEcR7Hs72cKekRZ4CAnuEy78Ldsns95Uvma5ETPAR7qF17mhAy",
  "key32": "byLFPB2mvjq2oRRkR43vjyuwsXJm8Ac1EiQcDCAp1TT4UR2EoUdJt7P7PWd7dyv3kKiQuewZcHJmjmwGQD8wwQW",
  "key33": "5VEY9h7RpsqZjZ46JdP6iudZ6H41Wh6zgSjmrnU3FPSnxEAcKutts8odo2r771qf7irHQmqEXirHK4fAddj7TtFw",
  "key34": "2UqXkxCbB1bQBsVD1fX8mZpB3mHo6LQCCafYTY5Y7u4yZCHU8nwPCCXSzjoVQj5j41yQqtPxGCn5gTP3CtSSsGqP",
  "key35": "5zTYeoXuWqEfgmvqtscj4NS8FghaiJ9jtL53SREJaGjjRMRY5CR9CXHF7hx3fCjVxLf5P3MReKN6SZPLCKNJ3u8",
  "key36": "3gBLvUeaHKDZFwbtdY5BXBePvmSB1nrXp8HEj1DK45hPBoKT5bvQxivr9Xz7dWay23jRxoQytrGBWCNub8kqeJnf",
  "key37": "5NhFJ4WBmrTgsbdtsiAKzPa9miNBfLnfoso8WF1nQZJftioCoKg42BwVpQSm4U2PWcwgMnD9w6Sqk7nR3QWqP7Qu",
  "key38": "5ypHX99WkETerKWXNMCABJh6F17T7CX4TWnmhhoWUstad1JBJkzbYgbvsW7JWuwmaiX2nhgjFFfzPJBTajodxdZq",
  "key39": "4QwGPx46ffrnJdFFj1C9HTHaaBekMbUV6Fkk4DS9h65od95UFYFKVDz1MxEbXuvQNshL2HVNNs6cbm9Xnxb2zdZN",
  "key40": "5kWM2uy8jrdFtv3QW3VaTf3xiigke8FYnikgHvG6n93drFU9L4BhykbQEfC6e57gA7nsn16qZ6ej4iDUoux7yzxR",
  "key41": "3jWcYG5yf2YDNZyvtJoBfxEmvhN4QeE7JFkqDRq7Z6iTv88HvLb76YHi3xsyNHXnAww9nr7GaMnpRKtcV2Q6sm7G",
  "key42": "HKDwyRk8oggTkanwLhu4jvmfMWgqgb4bkfkfNvyun7LZgp9BPfYFG7ox7bL6mMX2JPbizmhaJNQoVLbN4J78Szc",
  "key43": "2akFe9N7VfPjrvudWNpND1SF3UME8qJ7zq7oeiSLJcsSJZv4CsyFi8BLY2Z9UWeVerKyLV5dfQffierBZvSN5Jur",
  "key44": "4gB95NFRpfhBKxCtStY8bqs31wy7yTQLCGRPxgVjN5EQdDYky9saViNSeiat38qKjiaUmD1qvuhZTGTpjdZAhyuL",
  "key45": "228kSbdYV5zmKsFMCKeELFQYtMdbqPqqv6GQpuPqYfSBvL17MJ9ZDkgzGRrFJ5vayEzs2xwrkrgZCDrJ2UfhuXrz",
  "key46": "4iDnTzv47mqN8VVvLmiJCdhYYmnjvWmiUcuAoHffosCUaocdJL5mynrqbcJvWPYcaZjHxhTKJxaRbogmvYi4PKAp",
  "key47": "4FDb36Qdkwk69Y1L4xaUz4Zz6wik921UA5Ky4DaQW7ptVvJ8vbSiMGVKbqngDmAyb85pR5rM1q56SrPTF81HvaU7",
  "key48": "3n4eKAk5jRpDusDFF7j1bbL1LHaapJJbamnKeSFDMrr1s46CUpBTgRVMJzRAue657edFeyLXfe79GfheF4FQF6f3",
  "key49": "4ujKY6MJZQo4NDtdgjxiEdqJyhXtZMboVjs7rYfvGm4PbkvygV1b57DEZPKi2vkx9KTLRr1C4cfnmfJU8FRAj9nJ"
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
