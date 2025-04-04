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
    "2zBc4DKwDso8XvoH4xjsqwFjYGMFRJKADK974c7LMbHWZR2ynJMk7WxgwaRAD2RA5xw81CfZyfEefu9vZLUjMc7L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38HeBvCCpcq1QHQTdtSHq9efK4vifKEzHMTC1Kjco8BFLBALuva2bNPqBwTTaWrsXmhwVavkiffoBMQZwCxocvnZ",
  "key1": "4d2j5wnZRbJUhnSbMxDaAedLV2Gxfg4buaeYHzNDFNLcM64qNG3ky23VsDSHoBF4W5Pc8GtPoHRGSwJepqQzdu1R",
  "key2": "5SrjQJgEnone4FQcPqdbfDNvAoYfEbjkRFBGP2r5n1QHeXTHmRjBXLFr3uwf8t4QzyfSU4Z5H3bat7XdiSiKKsq2",
  "key3": "2nDDH5xeYCVTTWYgp1WR2F8ziZHZGGGUeZrhhnuxR8cAoydD37chAw6hAwppg1YkkJfRwLz7BUdVGX5oYFkuUrze",
  "key4": "42JVTSZKoBzif3GF2B7gdm3QByEHPqBDcRZ9deJWCj838vfnecz7NnnmPywUbniaGcn9NeZgB1jXeCcmLwWxXetX",
  "key5": "mtc9nJvE59vj466w9GRtGBFyZGtPsqY1ULoCXidAsUjEEWGvp1eGYYE58ccEhYVGpdmezXDXo34AJMzTpVe4uoT",
  "key6": "5BYYygMfgQTqBL5Ur91UZq8NBivSdoorJcR3aaB7w8KMqxT3N9Qi7dJReUou4J5Z9h9QEhdoJF54hnBrJns7Mhs6",
  "key7": "3XYodaYUQ97ShsKGttrUpBHT2TLgakkU4bNFatAknRiSXhcKnfzEdXWXNUEwMk4f2kyon35JekufzHJBxc9bWGfs",
  "key8": "5TTyk79G25AojTSdhbDceHbhFrrqUA9hUGFjLg2EnMgmUDwwPkBcEsZRZmbScKCxbSkaXcEqrH1UVkJdUPuU8PwF",
  "key9": "5RT7wsTQARN61EyaFCvR9Ww1r4QuPTex2nKrGg4n6tBD726y71kCdMPdb3CL2qzDeGmSmUyCRvNH1gr1NXcZf6QA",
  "key10": "5WFUSrq14Q2MWtq7vcXh5vJ3XPb51Gkj5ECMbLHEaeDuC8Tcwd9d54P6JvLub48UxDD2EXaubLqFY3DeMVFkdM5c",
  "key11": "2iuk3FXj3XDjQqSouAX5KJ7VWdrgBWDMMqzDe9VdaX3eSDCPmy2aETDNr9nxfHh5BVjC7F9f22yBio8dzTxSVUCQ",
  "key12": "5rdbpPG8p8ga3cEhrtBXgWdFMRp8z6tPEAquFm51zn18EN9Vx45oKSqLp2SvC4UkKXG2fveZJ6KSrxwrNnA9gBHm",
  "key13": "4FMZJycMxXMkNB58TeHW8WCPJsaKwrUb388K9ADQqWoYGjConhUL4MqGrQC621GUEWVNzJ7SSNX3NeQRPxgWAwuU",
  "key14": "qyWoDToScz5mW51TzKrvwqfe7HzReXtUqekN24BLy37hWyKy3gFmMKaTr21sdg5k1QmRYSTkvLPiHpuGWZqspV5",
  "key15": "5v2qzd25GtEPwhXUXyC8GF49puxFCSqJA8Z73ZGkXuL1wZoMp2S8T9gqYheFyw58h39vqF1pLLymMhTJda1HbGqB",
  "key16": "2jhRPy9dWq1i4PQnATsQ4oGV6kox7fYGSfp842qGybQtVJJznJykAS6H4MouEtQsNbGrJLc4XPbCKrTLQvSyKecn",
  "key17": "577PPd7nN2FKZRmJJcZRBcVemaQpXSpK5BcLMhNmPfQWMFY2SqKYmy7PRWZV4ii5Dvnwnvo92xGuy6Rv37vei3Y6",
  "key18": "31kBWQEguhyCaJmPsfeBRRHhkU966HTdBZKkufiKap6hyUj46D5PX7joMRYexonprFcdk9VG6gzusWuX16NtFERC",
  "key19": "48FnuJcis7bz9mZEWd9UBmuJ7C6yjnLSsLsGNsamCTPM14GuEixcJ3NNdLJrXQgA6fgz9RfBQnPmKpi5fNsj53vP",
  "key20": "5GwdGKNa3v9geKyvWrXSV8QF554CAqqFbUGUpFdXMzZ89ybVzVNVmjKeGS48SkqJCrKrCF7zrvom2o5Aw2qcfYjB",
  "key21": "3TgVNpxQL9HxZCgcLgMUpuvSxpoc5hr81FRv6jj2W4B5fTWRY5aquowF4tbhc7thJ3AiPhDLPVNfmikQcXzYcotw",
  "key22": "dbMRmXpKktnqZoSyKnmG9u2iXPDeaBvesc8YCANkQjzYZu5sD3K9iuwtcxz646hRpGeWXjs87X9kPjLpUFyFq8y",
  "key23": "dmrjEtt8GxHbdCdWSU4jkbCayUseitAPUknyNnCs7CW2jRUQ5CMVMLZJHqzv2XQhoNrNe3MwsGSNn8ksqg23AJi",
  "key24": "49Sqdp5AwD25iWs9wCg74QwoepzehRSzYHGdKdRENZS3KVmpFETTthexFrU9ZrPu4RPCBEsBTgDdVPHXSgng1RGB",
  "key25": "3MpNodrtsu2BVBHtEfBR38auM7HTm1oYVn6tjvdNtWgEY27CcUDHMvDUV5HgB6qPS9Fr1y9opj1wyLY4EdBxZQt9",
  "key26": "QBhckrUMmUFp4rYtohMpTajztJWg9ynYZTdnczv1TuaajGvLttPvYRuSq43DT92rDivjxRbchsTAb4TyjkdSsaj",
  "key27": "3YnmbXZknut7kWUsGxwxrqWQTgwJe4eSVDwZEqXt6FseDArTYh5YWvSq4SH4i4Y6MmSebode48dF6nXaFfuqu5nA",
  "key28": "2pv5giRnGFCde4aCHXhk45ZqTghCsTSboD7V9gnjWFGSRe1rv63u2ZHHkoJPxCyqyDfkb4EP4oQiQf69TmjjoWN8",
  "key29": "2CqRLuBysYrcdAgaQLnogEfHcQs7ouUFhnE9uhPnTo6oVxVwgRydPSKfrmdpxX2ovT6qrLfLY684wM66RPfNFhxp",
  "key30": "5onfANj16vj27d4kecgnfQ89iuZGt7E92djnJ92d8B7GjqWrJwGzbWTYVgkgLCwiw39iN5CKKScrjNn4amC3p8M",
  "key31": "4umPcHSJm27Qxjb3Y1cvMiWvfu4VHpW7tcX33raPn2Y7g2BkkiygcSxppigKrnBCpLUetaZ5s2p43WBFT63xgwNE",
  "key32": "2TmUxgmSvnzVXPNw8wwYYP68eEdLsCdBf2f7wzZ1hCiBY9Sx6jwFXoa42nJ2pBvp2NcWSiEbTicoQZHGHqWUXJ1Z",
  "key33": "4UCkd2LHiNoqcbeFknoJo97QbUkWaTXLhxziWur8ZvNcK67RwRJjyDn1HkmgkTSSq3Lb4gQMqSEAKV2BAszZAncx",
  "key34": "WufCnXakVV3esKJ59MKXydcnKAXRs9chgCEYvd86zZvLGTUVkNSd3U9GCaU5cBKUXHjxGvh33RWZ2qJHaBmvyZh",
  "key35": "5yrK5WxA74enwx9UbUvLC6TKEpXEZa56uMctCKyYA6fjevAnwSYcC5u8Z9oSd1Mv3Wmi3weHfbhVMn7vLu6vH55M",
  "key36": "2ezZfjzikcZJrqM652xB7VRGFc6TXY1c6XA2kNCTJZxQuuGyjqbwk98EZYk7W7cQ38zHu5y3bpzhoJxuW6KBJKZZ",
  "key37": "2pJv8m2aFLonHpaXkwr1THP6M8fi1SCFCUyCENcVxQzieNJDyTRos5vKUryjNsBU57QpGMcJrUMEZXdNLGVLCKE3",
  "key38": "4y9bCT85VTf5ThCPjyaeqFZGVBUNkTGm3upqwRqpUv74HS8ptmypgUmHrdbFtfhatDC1ZfkE1tg6KqjQypLnyrCr",
  "key39": "2BXBqbuH1MnjZX1QWLBJYgqKc4zJKzE9UZ4vVmBjtSSKpYJUTc5kFkpcPGhgHYWcfecVwmvtWJ4W6w7rGfGv5rz5",
  "key40": "oiM5dZk8u25xLckwpYSpe3ugAgro7gusmo2Rm4Xz4tQFybgnL3eS4b6eToWroNo4y4GJn4GcKGHE78q4e431uiy"
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
