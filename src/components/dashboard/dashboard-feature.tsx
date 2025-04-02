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
    "3Wp6wfhTTgLTQF4VWYkaoiPFob1oP1k5JXtKevkpTH9dzQZwBM8K5QKkECngqkj9E5fSNM6WFttzYwcmmmmKgK2K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42Gq5Who52JdbcpjdStaJdv9PAoVb4DsNk2sk5DjGJGw7AuBrzcpQxRh6STJhtcPP28Y7fiApwr6UWhGDyzLy99",
  "key1": "fMQrYR2mx5sfEPsFzN3aBDfQrhvVRwWo8Ex3zpw9wPZ8VdUTujxtgorwGuFNPkP5E3FJAwVhUanwZSmv6XEc2ZD",
  "key2": "4s7MwTnEpYZeRBqqeSwFx2W6BVsgfCjP4zRs6iU9R336CPpTRx4vt6EGHXbSFnsYK7wBEiYzLyg1RGxsyxGBhfKG",
  "key3": "4V6ZeqxhuAhwGGy7L2FkhioZQ4tr2FGw5oHs1K4NLyVYHMmFxsYtrbBdhnSZGYQHg8VsPeDPAUDUM7K2KTeaVvaZ",
  "key4": "3BbjwLFrh3xTVa3A41fGeCpb6xzZy8D2RhYAo9foZAhJaGtcSV5msNVctNMF8sqic5v4WXb9wpJdxRNad5GEGHQU",
  "key5": "66BJU6wpfQunMnSh4npDXxYHRVweeJbrQtZwspjpsuQsU1XV5eojCj1qjfFzYvAD91iMGLGHn8TkHautECuWApD1",
  "key6": "QRQj1BtuGBGSeSmmKWY186HU7jfh8FTAin2VXuf8u25sRFEVPemw8JgH978BPBWwcdgcdpDaxZK34RGQcYgb5BB",
  "key7": "5SyK8dYjXZqTaJmgRXaMFG5BRTigXkHajK5skDHQ1mByKzUofJ8sFqueZA2hWyhjFDz91WRuGx67VyRY4n5B5iBY",
  "key8": "49U69VAhLwbu5Lj57Epc6mu6ods2JkknZ7aBi1LubWAwUWPreALkqS3gck3gWaWkLU6mnHDEGGCwqweLgRPBeFDw",
  "key9": "4oWnzQPU5kXRpKq22wQutYGkfJgdpPcgy8jmVygjw9HCbc3UWB4uAbwZxyre7gxybSstAGWQCTAA3crSxyzUvjpL",
  "key10": "4GpaTqfji4mhhwY9arXrzLttr3aT6d7DH9Cx1nSxt5zyz9vW4HF3VYzeZv4d93zxVSXNLoAgYjFpnStkL1SMsAQG",
  "key11": "5Yjc3FsjLVvVQrKHPbJABeH9dYYjYsz3WmxNKv3Hnsewj7V6ZpabH923XbezJiZCDTJZwFw2VEE9zwBML2jEpYQ",
  "key12": "4YsFcUetHNZFUv6viisXkjhHdTbwQnCfabmXeLhVMFyGJ5MmBvCPxpDKamzhPkwtre2H1HC8xdy9EraZ7YZBPPAZ",
  "key13": "2hg3hgg1hrdJEae6v2rV6smU6ZaKCJC4JDQZdTQMbJXYp5bp4Dv549nx2tjRj7KVFVqmzRyuopaXjsoCUDiKatQj",
  "key14": "5ujz69D9HQSpuTZxyFNd3r4angDff56siM79JcNPTutdENfrGuD9SYhdp8KAJe15zpF6zYyUiNkAYqxUU27UTRun",
  "key15": "5xgdYf5QD9d42VFx3uJM5GXjGSHKVDomZVFKa8pVT8wk9cQD7uJpAN8YFy6GNJZYpESgHhvkhxwg2yQ1KGLbEr7R",
  "key16": "2X5iocT2RLLzUCymY11hYu9UXWjcK6nemjLwZP56DGAFDiESJQUkQ1FuN8ivnC8y46wr7GkhriQswA4GjqUWa44z",
  "key17": "5ckNehap47oij4VKy3FRsmurfbE5zDPsSJXf2CH3ed8v4PKNpt7G38GUSeGE1rh1LRtaeCZX3sCm7oVJ6QbfnVFt",
  "key18": "ebYJMohAC9uam65hqjHNvMy7N5wDn8xmzb1ZHcV2e5fHa2ABoGe1vgtjUcFH3i6xBrTBzVgQQcX9uA4sAC2zeU1",
  "key19": "3daNneqEx1NaauFG9QuDhEBmrxJyXa5rHYwTmZF53WszFLVBA4b9VYajWcPznxVMFYooFR7EziUjhu5qyeX7zvgV",
  "key20": "4W4Y5kf9gyUna4SS67CrjeeyvMgWypp4Y4q3vpWvW7uoZaayruBP8LEG5UHqzjXawTPRjYJmZaqHvbhxqYSxKMTN",
  "key21": "3E72ivS5wDb46HV1L4fwrVd9L5K4QT3CL5SDKUpbgLNWkeWqxaUDi12sY57moxVwQVep6pgjPmDze8w4X4cD5u7J",
  "key22": "4mHCK8SmJxKY8cThxnwUm5UDy4ZfSJusEWwyxmB2LLFGh5KrDHeMiW9gtvX97Cei4PUMoM5vbXYc1pd4Yb2vd8ov",
  "key23": "361FKYuFQ1reeg2yE5qQeP3mtnVvZP9gRCykzZLjpAMFhta3DAq9FjwexPpmVGHTwFbDU1ugmBAJYkGhh5gxZeP",
  "key24": "yuT9Eeb7aDiMHxM2oYAHqTvNAuro4mD8UhRMnGgwG17sSBP6bMadi3otyLfukS4FqBSyPFvZHTRctVsVedq8j3F",
  "key25": "2C79E6Usrd9FgoDsr29Q4DYzyCCvEDE95DVgXTR66Lrhhbq3zjvJhdrmuWCmGeDv3SC5R89T9BoXD3BJFtyjQr6V",
  "key26": "26KdRRRb5KAYtdE3gHeMBS5xQ4rYw6GYc77C6PnaRmUxszQja8sNm1yEtf8RdSKDLpoKkD86jjQpAJvUEeviD5ao",
  "key27": "5ijfjW3wjsRbA93iNhwkJsevYSsEvXk4mJe4FHbaDzuyFiYNJLu9BSQ4w2jsnmdR2gvUXJQ3ZJhWBq3Q4hfGjkyV",
  "key28": "5asChtdfDKsiefjXQaiJtczEgbhSHU5fmMJMfGW8CLjqidtBrzit6ogod6xVzRhsbupwNEBQ86NzqGnUmy5Yc84n",
  "key29": "4NuVR8rQzxTZEvND3A9WrpvEGdK3bwhuz63BSRqv1yCnakW7a7wf3C5Mvy7qytNAnFtqPqvSN8eXEkuf6rgVsG9Q",
  "key30": "4HEbGtTPvb18LXqPiLLVscGpkMkZfkeH87ryxVHcCK99FKLK77uXvUTbXoNh6LmKtaQRSRnaNt3i9KmVRfSx86Qe",
  "key31": "3yjLkYruM6MmYVd6mz6LuLBHWZqe7P9VxBgkozi254UqWqCYnYdazXF8PfyFevPLmPRb63B4KsjwZQR6A7c5k5VJ"
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
