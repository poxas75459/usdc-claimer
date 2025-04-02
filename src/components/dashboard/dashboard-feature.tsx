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
    "3S19AQBRRnnsfVnaZ5G2AQTkKxgcGMbGj1ZdWhsLgXbf8YqcY5SgFyXjUtCBa9frtDRwC6UDd1ZLJnHvowCj3KbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VYGXxzgoU5ox6k7C8VtBPkvXqgsqq2DqvcGm3qnNPkkAnSFZsnWq7buDNEDNxWe24Pp3UvW8RQ722JYv4DtYVFC",
  "key1": "3Vg6WZmh4Dfm83DAdD8H6yfud4FKu7dFeaANhwGXF4MJMUnb1BuEYcn6D4KZBp1PjcMo1MuqiEaH21HFKNJCd6dQ",
  "key2": "YPsw1amnj5Z7Ga5FFAUtqYJwn639kJcBMfaFoPFhK8TkAAy8Nwjt1mGQ9zyCGcHzqVmTTH5Xu9kCLVB7cLApoN2",
  "key3": "5wFqf9mUkxCDTASXMvLquvYbme2WfL4y551NA7tpbmVqHv9zVgXCKGAtZUpJy2fD98GeHKakLZUNhefJ1oC4obfJ",
  "key4": "4MyzXSQ3K6xBzAeJXJor3p4mbFWhEzZcSAgTsqWuXXnHWcrhFVvBtnK8Ky3sCgAavg4vaiS5fXdgsWwZwQ6UftEx",
  "key5": "5cnsugwYAqffFMsXNApJtaWpendpf3SMzxsmQ2YhyywWsFJHKU8PLQZFM7GSbWt7uXBkpN9Ro5cJSDCYNUVbUEjM",
  "key6": "4LgUDof3GfJJLiyVtDQGZRUNNm7DQQeZwoKPC5WP7JgQHbPUHm3VSYL7WKxZVpYBeTH94Z7WsRN64wbbNpAo5NrR",
  "key7": "31ppAXrkCk1zKcfaxmwrCcpg2R6MzJhru5KTpZMeT55cJWMt58LA9iVYyhDJDbRUEbB7Qtcpevyergr9o7oVo2VQ",
  "key8": "3xqpG5bXfZJqmTyuLW5rb9VregcCtk7jddB9rSsS4E5ko2GGLEDufZ4GDG6EvYKr49WqGfoajyREwwjxARwdNM1y",
  "key9": "uAVn1YJ1YkMccGY1TEhWs61jux9e6RjxKHNT7KD4Fzw2M4wMWDGmNMhSbXQzHCWM33WdejM2GVzaxDvvLmMUBWW",
  "key10": "4Q4EqRC1Z157PCk1mAd1MBPUNHySJ4HkmmnaoEdkeGQafnBvf5T2UoWDxQDGL9sT66Ryh1Xdep6hhcknPhKSwnpB",
  "key11": "29qJFzpswnTLYtUhp37AnaNFVcSodJ4iKrRgXe1od7UYAG5Gma6ReMsxFmQbokB7xQvEGVmKa4BtoWfh69GHNrb2",
  "key12": "2Xt9hSYXjTu1bDQLfWHKb3C7bdiGfGbFGJybaGJ8F6w6DdYU5dC4noT4713H4DWRoYuMst5JqaPxMJPLtDrsoKLL",
  "key13": "3HdYsv28TTfSNimtzzd1JrEyP1PeQk7FgfJGpftucvW1ApFMgou5wkAZt46SqVcdUHb9FyJHB71PicNczuaTW4xx",
  "key14": "twW8RrYka4eCWtLkDLy6Qs8cYeVhrtpAkShbDcagsrcogA1jcuFdhAn7fYZVxGXiPjxvJZWPc2Rcp1CbYxNtA8e",
  "key15": "5TGuecKBD4WFnyXrEr6MpXt4cpzEF8StKz9N1yg3bLoy8qDScB86jUNZgPBZTdzCsPBa1ZPq3r7tdoYFsjUdVCzp",
  "key16": "3439vqFi99qdm31u6qLSkqSw1aTqyAAMsJegkynJV31aKzV1hstvuUyRMEqsRr7V89PBWHnBqY9Z8gKLkgurLuDq",
  "key17": "5uQyCf5VgBXhycjcvsFrNMcboDfEU2B8y8CbtaTXLrrdyxw6oQisGPUTXjLAD4xZaRiCnYf1wzCpro2c8h6q153G",
  "key18": "5JREuofZJuAquHWjm5WMuVk96CVVxADjdBiMVAmXJimKdtiySCSJC4ikmtuoJWU12HdibgoJyVRX656pMbHa6ZQh",
  "key19": "4QNwzUQqQbSpMcfUqAUWpyrR5DBhFrfL4yatpAzvFAujrbnrbdEJq8nct9RepuPr3aH15QDBbXbtu4iFfWxrrRPQ",
  "key20": "tMdYfAcwLLw1dbVKPsc4WXiseGkrbt4wwo6kVDRqDA2piXtWyhJCQ9jP6PJGAt2TMXurZh9F9CuFGTsDCd4u9zb",
  "key21": "2HfwWLkUETTh5iZnFYY49GUTZp5yJUv9uoc36sWbHhs4GVk1EXzf8P2KswHymC4mhVhMqMPjD7RGcs53eWHX161L",
  "key22": "2qLHt42X9R3qamUP6DYQVuYUWSb5Rf8pv2oRrY7iFutmgwZ6dDZwGUBFCzksQSwhT1vRYc2t4j8PyqRxHN6ZboHi",
  "key23": "2MUm4tiH6EEgZcoHTGuxQYhRK3x1V6r5A3hii7X75h2o1Rjiq71dHQjoR4Sf1SMsLkBHAj3mFCMkjFyRu4sinJLm",
  "key24": "4xtV4DbXEhnWi9wyMbJzGRUMiSiH44Sv14G1Hzj6tKm2woWZKBENh5Z7NTNucAAYfba6NrA3opXWEGwhcAThj8d7",
  "key25": "2cGSp14Kk7d5TUzAhUxgeTpU4DzHGe8BsmFprZE6hZsMPJGEZwP9ym4ebEz9rjYxCEor1yvQVM7yv78SWf2qjTaP",
  "key26": "2E8zjHib1asopH91Ny69mXCkKQE6Sgxxuxo3tSCWws9VdomZy7znL8qNjHNg3ib9kKBxuobKabfQyuh6fUtCHJZS",
  "key27": "624SUcTfRDCfeZaxuHn2nMacVi3qshYaUX9L5K8ZXjFFcLAPdvug9vJSw6JJGNYGYHBDHxgieCMZBBHppZ7TLFP4",
  "key28": "29cEBSU7UmKziQWk1RjbbYDKFZrZGRLqzrppootaBPWcJzC6syPxszkjAMF76ygPzsr4KJ1SdXsbhsCXRzVQ9jWw",
  "key29": "5iEwbKhuGbi8FGmnPnSbPiHDSW2TXKSRP9mzc4qVi4LVhdBj7W2ZACppfGuNqAXyWdn8xmcmweuLug6nSJUpa5Tz",
  "key30": "3RDquNa9qV36DL2RmxJxUVqHfmbodeSDD2rZnpbeXQ8oXFX28cdqKPoBABAdG7rWmPG4BSviwNgPcGCoxBP63jc8",
  "key31": "2hESLY55uDNbCyFSkRjzLRyvkEk1wNh8tehyK6sjSe3MTf7p1YmfAVwGFWuK3MgphmLpDya4kL1tiDp2iW2CczKt",
  "key32": "3wqfsdRHYgtpiWtMnheiUkBaztdKa1UpPsYizrzQ1fuMG31AEGHYgTnWXMomT2JgU2VFkhoSWaqspGGMwqapXikY",
  "key33": "2xq7PUDvdC7JQgz5ZRrQdFdeVpn9nmxG6PVBrFFueDm2xHVPBDwmFjWPz4gUMkap59doZUcRfeipYbkBBxnxwQcb",
  "key34": "3vkyaeh2W5cAV9f8hPvFWQEgRr1jf96meNJX6cm29G17neMdpNDbEj6qi1xcPz6mFYZSzM8mSBfhzsnD6iwxtZPj",
  "key35": "3uGfJXf2UJkDRtp2UAnPfEL3FMPsw8kXpUn6o493DAXqeTGRof89u8WyfjsCwFsrhqVpDjR5PXLPn7WqkNfu2p6k",
  "key36": "86fxa7RT1WRhfRQQV7TPYTPe3RC8GAKZL53o8ti8Ss8gfk7Q8263XSQz99QqCFAjFFcdVb2fEdsgNd2Bd9XkNo8",
  "key37": "3Z2UJ8jFX9TbaPBi8jXeKLrcjLrMcAJRcu1dbcRSpTDEK9D3aMPxkr5hTiQ35VGuv3n5fmRLFBV3Xh7JbxiWkpCN",
  "key38": "3pxDCoxJagXVMHRPxTwer66yCNxMb6CrGhMrG6frocHHyCN8D3j93zGEPAEyMw8gjww27Mt6pngMkUYaVezddTHB",
  "key39": "2mbboprQLgzKHS672yLHALULtotRamjh2TB75Rgryuep4p7Jam5c8XiZwkjH9WfoSbQGwJpZHQGJG2oifVQcTsJm",
  "key40": "66fV8svxgFdVVo85Cb95YVoyfUjfwMAk5sNjrHkFT9mxjN3RA16KbwFszCoE5cKxDmjdBYcjUByycTtCpe2iXMbY"
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
