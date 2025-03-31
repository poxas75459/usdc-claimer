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
    "3DC4tBugn3StQVkL6um8vgYKdN9uxYV1NznWGCZYFggWvmjmuqRdW3VxTuHbhNtRxt82YMcPJsVmsAcRBNZTGdqe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VZaFgCsbzCwfftucXbBB7BMzdVJNMC8JsJB129bU7XhpbnEgjdnN8MHwcSbY4FNBF98xMVBe61ByPo7uHzgAspx",
  "key1": "2tv4aDE4oT6qG34o6NdbAVP86azmvp1AKgV59w8PgwPmTRuPvFYW6QMe8Fpetne3StnSmVtDBrkuvTb6SSMZ4wSf",
  "key2": "2LU3TUqb8Ax94WerSyTTTwM9XAqadAMx8eawaqkafRHmNcytRD3TzidmT1Si2tPu4F6nfNkTwAQccXvWauTe5M8D",
  "key3": "2qPwHyzZrb7ZaWLXwJ1WA7BqZFKRtZvc9VqbnjZtfhnYs6j3KH5jszJkboTuREnBVt4RfiUSLDuFquF37YnhgmBj",
  "key4": "Vsm6wnbHNAJiDtxFH4ZoThY4UUi74WoTydsUx5QaQRJGR3CKMHsiHaSuRUW4XGqNfXwZaESHzCwqNned6HBT6LG",
  "key5": "5DNQgVXRnGUJrfhJC4BFVDgMyAzzwZrA3e5NvYRx53EasGzn1moxu8NmCywBc5sXM7PSyD8hoFNNVyz1WQJ6BaGZ",
  "key6": "2dwBf6P68LfBKL8MDYaz38iqa7MoFppHAAYdxfDU71E2p4XAwbipDbvmhYXLDdWGJdpvwXB1srJXCvy25QgMyAAR",
  "key7": "3XZA8VSgUFCgeYshWAS91jrMJcijh2BeV1CZvib9gWtgBFNpZpukixJu7DB1CGbZ6JVCwHyki9TvLmHeTTkgqvbv",
  "key8": "d9LQAe3WxAhaTsy7tzLwnf9WCzchcm57KtJPzjojB1LipaVf4nM2VWhsLsh1Nwzo6PRWh79XFPP3SkdsDwPSVpa",
  "key9": "4pqzX3FADUPkehP4wXB8bMaUnXLLqiUNhNYis4qTnvgBU1CTFjW87G3PYM5yR5qjMzdvrQ1tQyPs27fRTvYHQhi5",
  "key10": "3ZvfpZAFtcHRzhNs8pHQu2CtqY9SZx2Af3Ebs3iEMDziXWMGoa9W2jfeHbwkckfYV3XWgxW3r9X9ur5f4sJ2Es7",
  "key11": "4iYCpMtVXALK6f2V8fwKS2Ai7Wky2CZ45GrbaLu8Tz1NPJzwSNTKx8LqooP8cAM2DSbwufeHkREeotxLTZsEQe3f",
  "key12": "4cqm3UFK85iMQQmBfQZEYHrGLKVKvaxEzkADJQ1WAV5TSC5sFjie2uus6pZAeon7EHRZwEZWQezpHz3y5WBoAnP6",
  "key13": "21i4vAmrpQgrcDj7MD9XF4Q7MR6NENn4V7SqtwmjEB8E2gfGihCrhFAFp2j1CQbjHGMeTGRcPubqvm89UFNCdSit",
  "key14": "2wQxzj71eQm9CCgeRHW6mZ36pNzsBjrVcfjiBBe8XsRm7A5nTkqHA2aMDbvDUcG1MnrpPp5RTKLUGPbWgdwStbUX",
  "key15": "4WtiBKnKSHKEjSVx23nwWWy2yoaEcwo6wvnRrYmP5sihAJyrpRJm6dfSQZrnjFu8eshLhWGiZtkzB8G8gBJxPSkf",
  "key16": "2nGxUuNX3t1xeZ9C1MLK8HqmjceVZawA1DhWSy9PcxYy7rwfcZd9WtkaMAtthuftfCze5CBSCyYRzrLSA1jsi7r",
  "key17": "2nkFcjh8KvNtxbvUvC1ciS543TmHyQQV5K71P8PKYmdn4VUdtjhDBkXLCPNwPqYk8Dgytyp7h2U1Qs6ApzsAg5Wc",
  "key18": "3dGGw35Qgf39vmHreLxrh2VqshVi9coPsBcJHntNu1yrV48687u2EGdSN7N3gB54qzyC9CzsNUBiP7BH9ZqgsqkU",
  "key19": "49YBS7uJ8jpWVsh3Lgh5559B618joMxPPT7Qf1CPVkwGWpL8UwZphXedrJHC4pjeusgCtXrp6imWYFp7sivZAoHo",
  "key20": "esMy4RMUgkpejNTy2YkS55gfyYy6Zraiyyp5EMmT8oJBUvtTXNcBkc26KV8MUPz4nhnNvA3jpBjn37zBftjQExW",
  "key21": "4rsC6tsC61xcepu4yqV72bSpLYVnd4XroGJUHoam2RsEWaeVtFQJ9oNu63mziUx2Yxau47Nh1oUbREgjs4dUhBV",
  "key22": "3gTjmLuvQVagNoL4aHv19b777d34a8vCnRcYUjN3er7ssV3YyDGBPJwBqWzziXRGkygXf1utqK5nF7yvZBjj3LH1",
  "key23": "2QHpCqvbabBbu6fyNDYid4rhBbbTV4c2G2kmrTQHQyvzSPkvAt6hUg9D7aBx7oZkJEGeFs1EJ5AvPYmosRvb14m1",
  "key24": "5ajMQxxuNenNrrspy4KhSutypLuk4eTbghG68esC4J4yp8MdkTD8vPao92rew6MBRL5Jen54eyhSmHNdUQ4wxLxf",
  "key25": "2AyN3Cw42vyN28aL3cKhGtZMdasxPGTFSPZtoG2Gf6fbhQA82pHEd1ZJWZQrJkoEZLiee85Dkonay2NbUrLf2yru",
  "key26": "4wwcKQkrFiKo7uVDravtE3RQRM8HVqZsZURKPjkxf5KaT2choM2UWXpC9EWJ7U3CrJiNJbYCQJXXc418GeVrETCP",
  "key27": "26mG3KVDjtX9Ex93Va1v5fqz7ZDe5epS8XUWvsda5wojr31rBmecPxyEjk8kcPTR3MdYvLSZ7XeXHoGp1iFmHj2H",
  "key28": "2nNKAoZpJxHYiJHDHXBRTh5ZMaFPgUQL5ouTdGkKWRWh8nVRhgpwdhBR3v8u2CTSnxaFiSuMXRPerRzN8fQrvDw7",
  "key29": "WFCUN7JuewEPCojg2RgXUppnoUdXmuAtV2zz8Lrt7KzsT9FjY595dVXP2nHUGirHwEfSZnWQhVJ2BzFFS9mfAim",
  "key30": "5dwW8ZT5ipSKDwQWAnWBmByvQSXe3acLhi9iD7RSy782ezxceCj4r6GLd5Kb8Y9u8oAZMJmzYcm8mqXN6Mu2vyqu",
  "key31": "5fvi2mXU9i71V7ZMgSap86wntWUkn693UZNn8pWzNTUqdUHH1bDygz9HNBsMvqqL3QjYkhyUCzwZ5v1gDXMmxmXe",
  "key32": "4CJprFWGjYoM2v22zdAEdsEtpscYVmzt7eKw4N7Eynfyr3eEbMS5LuVhMYCh3Toq8kLgtBPncGqpzMRKvznyVcZy",
  "key33": "5yiZERxUchUtGdzfHPwukdarSJG7k6wjYgXo67c5Y45HybLPReHXAV1vvP2DJy5fvbkMuUY2cGFGCzTzJFCeSVLU",
  "key34": "4H74VoCxLZBpmyr7yTDyf48FUToEDivEvrE2pBiTUMsdc57ViTQdmcsc1sAmHTcRDZUzTDqrChhTxannBDWcSntH",
  "key35": "28v8VhrsYvWU12ZFXJoUwQvjSncjxm7UDCw5S372yPd7T9Bp7sJzNwKGCBS6ptRQvcfgZuMCvW8xyvfAjEXfzxi6",
  "key36": "3KqR49a5pxqZpw8Yo6XtnL6DyP8SRp4HWhZSMapRHWBtdNBRhtr32L7dYu6bxfBVBR29Mvw6ojNRepJPrHHF7Pcw",
  "key37": "3cC5ZNoBSVXZygiCUzbjZKy7CgUBotHtVvgrumuNapL9fEB5Fq7vRs4HbudgECmpZFaxnhPsyDQBGFc9CLPt3Xwy",
  "key38": "5ozDYD5nuh46CbrMp8ZZHoZjMZfJ2oGCbUyR1eHG6SBfco7pE6XmnGSDGyXGHKLJBy6Juyr9DbccrhNQe6M3orh5",
  "key39": "3MAAHCnGUDRh4JHpZdf4SsfVB61occhuvcb1aTqs8Jd97jjCcZKX2A8W3PjL9BNXK8XwQMozBFgi5RMJFUd9Bfzr",
  "key40": "2MJEzbPvuDUud92xc1ZoC9h6xW5nZzSjqAAhZkMQMX4m6yAdPLQnMdUahvSf6KcC8tbx5a9tx8g4WSgSdiMbkGk5",
  "key41": "4Va1cqhWVu6FPZCEBPepNx7kEsAgx3yXXu6r79rveQ73kLusguP8bVXde4C7hcm7oNdXQTKr1MZ4991z7f5CChVq",
  "key42": "5xhcwwhP9ApKqBFtmknrmp1waWcpNZvHWcJi9iJ66EF9CNdPN7xNwGVgaiTc3YbAibWS8DQZxg1EDaZnfeUVNizD",
  "key43": "5myVYP7GBeUzZUbsmZLfmZ1TVSpJT5TcPRPfgLZKpFS7ufXKdzabjW2nQKN6454NHYN1RpQdkhbWfgThkJCwpasV",
  "key44": "21xzvsCda2GwfC42xqfCvSWZWHWezhBcnAsYE4PxoswU458oHanKan6TiKtt5X34pLLGfdtMTgvDpJyBjETn9atC",
  "key45": "271ipXFwnGB8dPZ4pJwx5daWYHePsddyhGNaF4ZVTL25orYZmxiCHQL3nMMfbj9zDtkdP2joGdnFPm3ENFjdX2JD"
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
