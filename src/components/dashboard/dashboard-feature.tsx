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
    "2HamPp5M7sXJhHzroSkojaLYyWiowAGyPX97Wgssz1DLFLD3KuPeg17utUFdkft19ECqhZLqA1Vubxp9pUWr5cJA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DuSzKxjNCvMtvVW7WKYgTrQpuAZvLonKsinUwubvY7G1GGDWeVW1VwX5sghXHQv3X7dgQSACeoRVrGgGi2JpaRK",
  "key1": "5j2vz2PFWqKmEvekk2qe6si4QAPWo3oC9xfdpjkJK1kr5sS4gviwsAmAmPeYH2RQwRM7nbp5fXSFn2pSHyPzazgZ",
  "key2": "49cs3b8muQxZwZNYh82BGhgmyH8rN2n8HpqczPp3GKgoMrZbYtrgpe9L4Asa2pE4UQxU7XttKETX3UDQHSM9xkLN",
  "key3": "2XxoTHzEdm48gztS3zvvWPrXkyenyi4gSxCqZZ2rC9zafiQqe3uXvAxmpa7NvBxzxzBqid4jbXoKc6Pm9cL8s1Du",
  "key4": "5Ptr6oeVaXdpdgQ6HCW1PJ2VWG361xxoPmp6kD5T6ew6YuTwYAKN2rA5UKQBGT5a9APq6TY3yfxngh6ZMWPH6cSn",
  "key5": "VunoXKAqH9EaqoEYCvZXXDWtNEaMzYdYUodqDXpsVyNy7zBWVcR3yoiG7soLdK2YzXiAREfPHmw1kuVG9R2UQQU",
  "key6": "4wbsqcMmdWhFk64Ef4T7teA6c7qxeyXHivrx7qs6ei4T9GjtW4VAefPidswMKi8e1k2LA1AXNz3227deJzSVhPfg",
  "key7": "4W7zgpQhz4ThucKiyVjHwnBkRKCipzGJYbzd4pEzbRGC6Ew6kGBvo3RfsKFA8QCmV8y7qZZYY7UrXKiWW4zEhSBq",
  "key8": "arRCQhPVWqFchsCDerPoNp5F6LRhnVRg8oWxEc7ke17c33BGAcQgsBPo86zEjYQFKZmg2DmKr5jpPyjZAWsGBH1",
  "key9": "2WFV9FKUnfoL6EdDXtH6b9siPPBFyKAeQLFE5WxjWUXCUZafWswSKirpvhw3QzNhXz4zWngBUb3FMaWDsiT93pwd",
  "key10": "9pT6VvVUfhMShUPaNuDvtHCcY2HV3asLBMPktJDRcLV5duXy2kCrMSeY7AB3W7ooCaR2JKuLJcu9c6CxfTNoubL",
  "key11": "2Ekm2CDDJd4ExM8BPguRnRGpFpZDfjV97KDqrnFb5BH7TjvqeTUj8Hv5hZTgUexrQPRtvGZY545H1QQv6qzVDCAP",
  "key12": "214RUpoBW1ppuxFZdCG4yhB9CZUbzSo5Xdcc4CubWKjn5Q7F1QCJtzxDeWzMMEToAB13932QS5LP5wEQrK4Ldwex",
  "key13": "49Mg8mVj6VDhAjrXFEnmiz5mntkpddm3dGoCNmpqk6a7F4FfPtPnqKHG266abDP3ECQ1Pa9QdqopveAfiXGeFk6Q",
  "key14": "533PGGz1o2crM9CPf1xmbkUrZcNWo1jyYX2DESexfe4G9EniRqpDcB2DvejZYHQMH2AmcBDymYTt5szqdfrE1j1R",
  "key15": "2ESFLRtt5WsjepTSNMWxtHn2aCnwkqgBjwtJWMrB4a2cpnJk6iLbCAZPdMf9n3EDfDbgXKBCkHqKoFqiY1dL2tmB",
  "key16": "4Nsfi2V6QHJTeXKSC7jbbAHhGQwpPwjV95rND9p3GtdxBAuf1zgN4nrMfWSbYjsGWDLwgMreM9fksrD3S1cNuNDd",
  "key17": "5KZ6MWgrapCrwKBxENJbPuSDop5hQvJg16mXCpkhYFG6V1pcj1aTJB5JLetPLArbCAu7675Tmchzqh1QHxbWcEJn",
  "key18": "XMYLQHXfxGWns6T11rbjQEdQ3KFaRj98fnZXZ1hbF9xkdrsppQszWy2UuBL6TXM1cLoahkz7ZoCpVYcYzgWJ6HF",
  "key19": "xQ4CPEnsdU7TiGQ7JHbvcUrKyh8kPNiMW81mfywyTueVhZGkFvK4jLwJETphXdtLsADzUHBWKu7NrnfWrGbEpWJ",
  "key20": "3XmzqdLFzJe7RzFJeRzKiE7x4LmfYuvCmNe75SjXTTCNRMSND7UwpHLLuq9U658AoKJe5XxtRo9BpzzAhtai56vT",
  "key21": "beTW8UixmVddr5zz5yPnpRRyvm9J6915tfAFY6ZoPPsoE2GNxaGzPZbqbv3jhm82hpXL5AtSHxQfHDyPcdf7dSj",
  "key22": "4H6wHtRTe5v7UfGsd3mg6BSBkP7L1vZt2pvVcfok44pVnBcdS45X8a2GpdTGKwDzkGU9L67kEWcQC639Rdr3Zs74",
  "key23": "5HhDXommGMAMANwCDFup6iBipg4otWNeyGxUAKkr8HmseVyokcX9AsHawfV3265Jm47wGjVDRBo1Mf4RPaicGD6S",
  "key24": "4S88Gm6JPNtavWpGnc4tLj9zLXRiQ1Mr74TmhNaxH4gHc2MerfQ6kKwTfCBA6soT6STSB2dT14tGKjeaLswEDKR6",
  "key25": "F7ghWPiJ9CeGpSVDEgYqwypLZ4KVJgTQQZKQVvvca2MGNpy7eohbRmMk2zTi7tG8f3tLz1FJNWDpp5SsdjCXGC5",
  "key26": "4guHdaNaHSWbTsmZ3D9BrX31BihZrbHLoJWt42G6w1TqneNs9WzXM6urRNDEKXfLhtN4CZG1LYCWMkMz7qz6nF5U",
  "key27": "2sCbjqxFc7RayxwuFjrYACJYaNACUT36TUfMZGch5ZSDLZnYnkXmHZvvrXSq8BGDE3PrnzKt1HDvbTVsqcquh5zT",
  "key28": "45VYegpL3ajZYY9tSS5N8PPQAixqkGRdVK1SM1uty9cdv8Fqxvi8vJYnApcCs3D5hEvfZqduh17qAJqeQ32VJhF7",
  "key29": "4BQFbnGgR8CHtttfgwexvj5FURhqtvfa5FJ9w2boxZo5WX8GLcpmmps8pWMEb8tb7bajtJdt6THD6wwvLC31CNrP",
  "key30": "HFRit7Eoamvx1P8Rfm1D685LxZtGHJY1dEN4h2Rrj4Z9411HiCQY1nZkuMgESCmBAwVxTgKsbPdKyHdWtFpb1E6",
  "key31": "PnBr5LMnEfek3xuzSfcZ4ufFChdD4N1fmkeJmokPYtKFDrTmVM2H7XfMyJiTLxfDFgFBrYPJiwdDLfcfiD6xaUK",
  "key32": "iCU92D71AqPVKofMnqcK1mi6c91oDvTrhJyJFheMu9RTUFsixZGxaAhYDQ69Kx1P5Cavh8SuKWWAFKwJ8BmbFAi",
  "key33": "2YXvokzQmrY1Ccp5G25w5SQ83UUJpsau39NBzgNYw5SD2At8JUSB1kYch6TCYiksGogRkwv7qDbUhc6ETPY6uL4b",
  "key34": "4LgMMN6VPfbKC22BE9UtSy4L6MiLndx68dgYHN6Jr4MPhomATEuZNRFUU7sMa96Uk7FvAy74vZFFGgrwMvnE2kyG",
  "key35": "3J39q637WdAchDjL2bS7ZEPCxZLKvhfdSkhdy7fmPsPDg96U77uAncUgVANhi5n732zrjYXQMCsDNvkzqEjNTdva",
  "key36": "3B9yhR7K6o6ppVCPAzzypwvfYr6ELRAhVfEBYei7YWyYH4aXbhq92xBbYRq7kmMyQZnhqiQg6FTTw2yGjjFYeS3N",
  "key37": "3g9ZmbEVxFVzzkLrHWpTQbLsnzdk88dHgWZMUfWGnco97r3XZwLrDyNVT3XdAYdH7dVhPPCgK6GymHXKZpSty4qR",
  "key38": "MdYACYyFko9M78HgnXHV5JwpNY8smsptP5z1euXiL4YdVe45TpRv2eUzPaXPH5eZGcNyV6GwqAFDg82NXsHumgs"
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
