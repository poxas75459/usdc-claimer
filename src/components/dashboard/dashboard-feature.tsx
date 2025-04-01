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
    "upR9LBGewCbKv6WZtvVBYSfJppXtEnAPtxS7RZakSjqx21XioxvUyNZiiYNbLJUSQwsC61UoCfx6nRjAuQCkvaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36H91hSMubrZj3ZfEfU57wxRW65orNmMp87MC6HRkwJp4DHqnsJjYYZiP1nh9wf7HMR75MDBL9hztWCK3ZiEA9ys",
  "key1": "5e1xwJEmPQ5uynPX3wLBUA6tp87xz3hwmXTErPdQLpMq91UNEU4ctSjHum8tq69DT9Ketd15dLVpCDdDL1RsWYe1",
  "key2": "524zkP8Zz413TRipstiSe7U5Q6S6HoH4RoBAmJH57oDLw1ZBNmuPjHtukqRhQHsSevUWbgNxgSbcrfKnmfJ8ded7",
  "key3": "4QmSj5rYL2B4jZ1W3qCGEngTdAn38Py5U3EboDS1KxX3K1R4RSav9BgH49HwFU82vfRCBYYmdy81NaB9XmW8pL1k",
  "key4": "4XgfjmFFxzue7dti6yYk2rb4EQvudw2AV476b1oP1NrqYF3GSGoxuRCr4ReqMQSWffkSr9mUUJnHuQiXMjscPowW",
  "key5": "2jWjFxYhC99UoqHridPPC7zcuze66k1VKuvCe8uxd8GXSxdMpxaXoHc2X3B965XuSfSeYg83Xf3FZwtvwjWfTTTH",
  "key6": "55VDoZ2Xa5UAJUj9Z8WTQ1rRqCBFjyUoWfwUwGanovRmEy4e2TASMcjzuwHrfB2FWDE2cY1Ne5SRtVaGcHD3P2dr",
  "key7": "4afmTjwUBmWKtqKrXapM6WTA1qsuCTkNS1nxeZiyqQwK2c3KirG2xX5hcdbin6fNPfnc84XN68B3Q8uEz6GQj16j",
  "key8": "5jcXpvFCT2xVsyHsbD9ThYHeDHDfskgZgCiSbGrmddVGgkbw9fgwWN6ZfjfkQsmhNbBVDCjb9TFzLW5ANHz8Yd9K",
  "key9": "4m4Y81cq1CGvhVDAmEGs8dZGzLtDieUfQP7j3cadrrhUyECiuGH7BaTYbTUm2XL5ckC6AoC25GdRj4HZc9DKu5dV",
  "key10": "122emFKfQe8xeD45eTZHDVpQdaiqEbaVHG5oBxRzpDsMqxdWkg5BGU8PtXqg4JaYmdqvrmCXBH5cd3XEgRwihSWk",
  "key11": "2Kr49Rm7nvSLFSUJ2Dm48gaNdAsB65aWqCWvdMMzCVbVe96rMPQxtGrpgAkUJA7TiJBjihfh4TiZJdbC9qRayNkA",
  "key12": "3NX6tzRk4kfJjX4pYEG4qoXh1LCr4KVNvQo9ku327gmSi6HrGBYvGWAWwgRB1gbD7VjzwtyrXDwTUqpDsig6ErqG",
  "key13": "2MB6S25qVECehDMPrnjrwqpCFsLfrxhyaihbhFukkKeWj3kSinBd2dNRjnuDWJNSPGZ2wiKGe1rWzdD6Rqot66dX",
  "key14": "3Bs6RUSzxEdgTZj1Wipzmf2SnqMiKT9R8EZPPmXuABZ5K632AhLgANcFBc6jipi7EEyjZraPL6GxJjKSM79C718W",
  "key15": "3Vdth5HVY3UVfaVogxrdzm5Zn16XtTeV6VLRH7zkwv4Wb3fLvqGETY5SHb25xzLjAiWC4qqM9WpDviNBLNcaDnBq",
  "key16": "4gt5AyKpV142nt881sYEVYLN6ucyWWEBkDniW1C8gBiHhFGdBj8yAJ8t3AsPrHFrrcz3wQNjZFajsDiWnx7bxDjY",
  "key17": "32JNvRMiY6UtMLGmkaDiXavHFEnVRiw52APZVA48aAX3RkT3XvxTYSqsF7cVe619aQiQgcNbJAtfudWpgj27MGAx",
  "key18": "5tcgTRF35JCNz4jirCmjbhrsLKqqk5MhNwivmMni9ACwjChzsgdLgSf6pK4Vq4xoYq2hJmgk41tHoaWr3aGHgWed",
  "key19": "4f4zGZuxBCuXU1hVgn9KB4GMWEf38DvrkBvjW8WwvRvxv4xNKDjzS8YcwKAoTd4PfheZBSNU7TXVqaqg34Kj8MvT",
  "key20": "4EvPgodiBSZP6piPh4bgLmdrT3hVKv4RiKA29V8W7nxG9NJS1cLtBXMBGc2Wdnaa5eUFbyi6UWQdRwgjEWZAmmLP",
  "key21": "55G8ssMyi346NU5TFK4sbzFob2FQLhjjdnsTbfA5Zx38Ve9ybLkoWcasUAXDw5NbufPamGeSrSM9GgrhbjSCZkzd",
  "key22": "66LFCEm1pNmZmDJbuq7ha5ue7ygJ2CNtUGbCb6KJr8AaFMmv3Pa74HVoowbxAuPTxyUYpgj16onLNa7FTbJwUwWs",
  "key23": "wgoTUy77YakGofVuQYHTXBV9krxmwTCitwZKVXCfZqHQjP1KRY24pepA4cPAVS4PNmZMsYwC1De83Cm7Gs8msQJ",
  "key24": "xg6Emp4oHa9YS85Eqg4eP8s7uHbH9eD4jgX98iLALkXTY8iF5d817r5ySntYkS8XdeQrXik6hkBidKKC7qSLtbq",
  "key25": "23eN3iQJm9pZdhcBBt2VpxrwCSLBLynn9ePHeVhuVjgvFy2fS61DZ8SPey4eRHzmnfKzkz9mRp9JjKWPvugCPXis",
  "key26": "4id5WGQRsxA5ttkCkne9cuaGkjy4Le5iph3aNehysEuNJggttpdi2GMKiHYd5Z5HVkDjcKGodBXn6g8LSV8Awbz5",
  "key27": "XrUkv69UiSbZL9KHtvx1KmhQ7KPXyJXYBdQ2agiarwv1SRw9KVfhDEvKVbQC6BGzbp8ASaqxrpjcPd4592fsTkx",
  "key28": "i6pLUCDVXrQ3mxVWGvn3Gx4QHYmUFKYfDo82YGbeNRA9zkVABopB9ciU7aBCofTyZ3YpZWBXzaQgq2rK6QAhBxZ",
  "key29": "64176EmsNUXGBrGx7dD8jkvpXDSZDzaZT2QHgjK5Jxhq7YJANkpmauTFT1J6v7YYfLTNZZMidX6AiYoiVw9mAjJk",
  "key30": "Li2wSGV11YcYM8ViHyNbF1MJCPLM6xFsnN8vhHVMYk5Y28fhQk6gx1hinaABLP4qvK77vTXWJdyY7ir6WFz3p5z",
  "key31": "5Nfe4aaCPRrG9Y9nztEeKr3s8xMkkquZgxfMQD6SUgAh8kcEaRbjYv4YVseM9GPdZq3zQbgcYZc5b4WisEFgxmum",
  "key32": "mgxmrzi5d2D94bAz7wCkMJduCgELqvcqiuuxvv73m2zoHCqTd74fhPgjabXi5SuvWUs6QwLr9Ntct6ZpLdcnnDJ",
  "key33": "5e3yj4yrGvqs6yVLH5fa1Y5d4TVjoBjkjQm46amamh99jzSWrYEHKsrHoeiGQ2wemmSC1dYX5qu76ETaYdAauU9i",
  "key34": "2Y1sgcwKS6m4DyUySXMEhGrnRLDpTcCVywoHBW5WbnaNdYzAsGKi9VAGbxWZWZJVthzFHvyYrgiPkkMHGNvdkYS1",
  "key35": "2CDmsrarp5RmfAhoNZC3xDJvJJK4Bu7H2TKr3L1WwZcGEBewrSUWpyt8zYAA6xghDzhq4qLrQcSkfiwEfWraQ31A",
  "key36": "2hNT8Yy2px26g8W5sFtEJwWdGRgVYykmz4q3cmJYuqmqX4yqW3R5RNEA2G4puMxhH1BvsrWrQj2KHmSRE1D8kVoN",
  "key37": "64mLDEQ6fhDXKUL65kQpMc9fyE2fwLn9as6SQYmqmvtykymK43zV3adU12aUp8xaxhwbQhJwGVAn1Fxg6ywMvidi",
  "key38": "5b9NMdb2iEkJ7XkfXgdJHnyiNod5dX8raHwAXQQ8fcND7CAZUTNUFWJNDm9QEG62RNuLurGXSpHfNh5CweC94ZKK",
  "key39": "qpum4Kvbyddj5rcPcoPE61VN2HCkiC7u3sCk9me3fpKof2fnK7isPzMxeUzsw1KQCjM9dhiJCnQS7AwTcx1n4oK",
  "key40": "3XQH1mf3MB3dUzYaTZ17m4B6hbMKocNJFRXJXC2NoLhQikwcLPUbYuaCvzYDfWkp5Km4jSRcLfQdDYgMsszZvB4A",
  "key41": "XxC5bQfJoG2C3R2q1NVLy7vq59VKXYBefgBHR4XQmJaX8YBeDMkyfkQh6hEj4AW5qwYYnJUxD1EZdWAU72Xkizm"
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
