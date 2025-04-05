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
    "2fWeCgFz5nFeXBvy2bgvVu8djRuNfHSBZ8FhTKqJDLUnzzvqPc3hfpMoedgv8xuNckUNwFxWpPbXCRqRmhW5dsAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JuZEeWpXeHGUUdvH8EHjLnVKNkNQS1vXKtsiUK1ArNZAThGamJW2bnR2RhAGrtrf6na8cffoTbWy4BGKNbhCp2x",
  "key1": "2GZM1CtD1aZ7ABqR8tYWCY2iTTr9qjWEvvPCm7exdxYTAgrTRxMSLmjeHzqv3eJy6gMiKM612yTrWLBugGjprbnA",
  "key2": "TA48yD3AF1992DER4ShbrgzvhiTCFMAGyZ3D6tyAsEh1iDKUp9o6waxGuSzVetbeg4uW7JmmYo2tWmprsEsUPfy",
  "key3": "4SFUEHQ3PdBeB2tT1Y34hTVK31PFGYYAzShfgBfSVbMEx2iSrXLcbdxx4GTVLuMnJB4iyJfD3VNk5RoTVRjDXLYE",
  "key4": "46RKspKomP6u6Sn9QqKNKeiccseGVKcgPNcnR9zZoKMcfAfgCUNxMEQfVtHpLUeXeyuKmPgXi9eZAZsRNr6fwdVU",
  "key5": "5taqEdDGjivFKNTCm2m1spu6GLw2e9oNyXWZ8TtYNmhkjrUHVLbcauZiRjMcnJpKAPcE9aehDMH42KY6wqwAmmF5",
  "key6": "4qiPkvKyNP6EfEYHRbRUBQ97u4UNsSUoQZXGNhTAhrwaHhR9dXKMgHqU1axktdBSPP9gryiV92SNay8RY5n5xNmR",
  "key7": "2idwYVmg9LiPE98thjCh9gZTaGGnd6oKy9NBhGmFSxjDBHxe5P6YQmeCZtwiBK1k2Ln178VoZyE6njrSZPtygVLX",
  "key8": "2TnzTtUBhMpfv323kJfFq9HeNszipFLxoQii6z97eHceVWrU8pDAX5zg8o6MwdCabt7Gu8d1r3xZACYRg7FwqPtw",
  "key9": "5pZN1yS5dbjL8J9HKBoVvPn6mzSDwsCfKrhhQeuDTaxHAWgMuG4KYCQCg7ZXVYemhc5hDuyPxh3QUZGtrYPqctSt",
  "key10": "5XiLd1vxQQ5sizHiz97EVth8EZxAAY94qa94HS7ED7owCYzpaN7iGFMbJvwLXYVhjRLNZrmLzJ2ayfTvW9Z4MTNc",
  "key11": "3VFpXDfBbxVX4RK4seoeYvD6u3f6qp5frJdq1w34Y89UNMvvtxo7fTLyL86tpo2GzbAPsZ8sze5Dzuwjor9ajkLo",
  "key12": "34f83s7hFUU9H24W2nBjM3ErcVFyzzEAzBYXV3R7xTLFa6xTQ5iig9KAAmnb7waa8Yfcqcb7adqNDuqCFB4uPYTV",
  "key13": "FHLAUZXuDjZpuSYqzPjAGQ9Pfj5iuhPwVNM9xnpc61C2Xu9Wpx988YiZBXuga61cEjT3D2msBg8LwLvvwdhm2FC",
  "key14": "MynFSr95HrFKR5SyxxHcRyeHNo4psL77qkv5NDBtYrsB3nQxo4DfGtE5wweZCJkZ99xznzvtiQXrA1NdAqAnLBn",
  "key15": "SXKEGEs4zMdzsQ8EnjRYagfVJarJxp6gngQXFN3hQ9eVwXvn8Mr2Quzct9CRff1xveqnKq4WxL1qP5KAhjzS8kv",
  "key16": "3C7YRQ5xCcqsa7R76WRYHnKkkozNZEH46K42sW1A9R9ud5PbXTK5QcU6o29KWSY1BzeLL6tCzzKVY5HyixJJKhuF",
  "key17": "57mpXaCD61K5cSm3eDwQZj2iLAFuw9CNF7hjtEUYJMMo8ePByDWE235rkHJAPm8TqBtd8VgdzfaJ1toCyGiFz4eT",
  "key18": "2pVtYNHgzU8aVoUQcdg8VZgmiBxWgNsS2Zewo2LCAHv8ogzpryNtcEcQ6cZe8gu558CjGGRjFchoqbNppQ35XRQK",
  "key19": "3Bwh3etwW8GYTi5h6La3DvuK69EWJxqY38hzdQciTtdqhhy8Hez4XrfbiaAVdB9Jp7bgYwRAXFvYRu363aZr1Zoy",
  "key20": "4EiEP8VdGsJZfdk4Z5rSPqS1me4nHcMwpHGUgcfCN6QZfhLrpXFgqnAGhhXM7eaW3y8NVBpwS1dvkzgHqucQEwmN",
  "key21": "5a14MbzYWsfh21PH9G1xGtBXQ5t5L2seBbxzNyHEjwpgHLEG8ivpJgTiMFdcPdWBmCfkawrQuwgFaE3C8WtyRUuq",
  "key22": "39E2ACvrCJpeJqiXfsuTYLamDXwxTHF9VjESAayVBywHWbdTVsdS5BDZdGwRRZfXvez846makzNJYhddniteeozN",
  "key23": "SXNd7y71BDjAWHJn3j85GGquysQEs6Q4g13RjpbDsSsH6gSJT5oZpcF9ybK6kmPX6ngytmo6oxF1rKdM5TL8JPJ",
  "key24": "4vNSmCcmqS8rfA1oDeA3nevWXv6jTnhyEFijNkS2M7EbGgTzzUoH9ETJ11dW6XWUMsA6WfK5p5GK1tdUxtemoV6K",
  "key25": "cHStPAv55D87fq62mecc7jrF2waWBPRJZRDwphtWS24P8tzGJPTsAQ71sSw6GmqTSTsmcAXhicVFfFHDAn7bdFc",
  "key26": "fG41JqeU7qgBwgDGKvs9EUbD7wuBVHGX7oZuh9KzcEAhuLDKsdnUjkcWuoE4PYWWfSxj74tHiaxpZCXLcwM6yq3",
  "key27": "3JYYPoBzsrfrbFb6d3UQuw1i5ctXyM1dHuaNBYVzBTvNM4X1HSc6eDbPSe5obGKaT6hG7mBkWPiNbcu6trie7UBr",
  "key28": "63JkTeQGBMSwJtZP3XwYLQ9uMRTyRi4vaTPV6DrJMYeWQoyT9UE2XDEgUdtEGgew47L7LhgoqGgwbfjgXFoUJWd6",
  "key29": "4VuYhLmQxN8X14N2X4Hh6wdsT1FcWdAknqCa2DmHRHbRUnNPpyShfwJxpuG3U7rpmG5g4pgrH8RSHeUyicx2TmUY",
  "key30": "zoFyQts1GeLR7zQ8xMdnbk1C3KdQegDQcAVr4tUEwzMZkJXMP3m6RWmncwJfyveCbDF7ybko27qYL8x7L5kEbe3",
  "key31": "3DEq2mCvQoiHmXpHh6g5Y9bMDtzfvmLan28HpAtBwrJH9o7WguwKMgsFokRJvFHBpN7DETvrkZP8KrJYBzTyz5Kj",
  "key32": "466zSbh2CMBvfKkUf3bq6GG6ucUtvdQwnxPrehGw8GN2F6jHt2p5VHUJejQgTnRExPEuBw645bT74vKbd6SPHeGE",
  "key33": "xzMDKtjVnJEsKRHU699T48Bp26Cwxx7zkYXHoVT9yZEACBMpjQSChBTPVPnD7pV4ZqQ9D826frWeJdS3ELrdm9L",
  "key34": "JSUymaftGDuLCbTgt8BGjaU4dDbopXZThwfG59SR9wyEqZxF8WjXZu9FQnShVgFdvNLY1sTqSpQMnui6Cr5iQGX",
  "key35": "KFCn4Kbom356EtRfFnKCzeaUZ9mrXothAvkHvLRjPuPioRngHm45KnihCPN97iG6qEa6DNcoHFeDW1nG8GS6Zt8",
  "key36": "4WHHtsn2kPifEcJHdq7nJySo4La7ZHGqyPw4kBEYrz5XAfHbNWzWxSfEv52f9UySp5eG9fHhRnzSUnvekKP4xW9x",
  "key37": "3h2LJT3k9LxRsgZ63z79u3N8LNF1EBqxewrJZzFwDy77MnrFxAzYH5Bg6oaPb4qNALa4P6vf8EjxyJpaPHnWuHLz",
  "key38": "2zrRWs5fBbZuDbbCZXCU1Gy2nQ41YuZYR1FoUtSLXRBCWLnwvJrQjU6PDRb7ddqa1vJj9ENHYT6s5NnjxHQf6WwL",
  "key39": "5nDQWZy3TApV4GAKR2VFtzrGL1i1jzRBU4DBT54UFpRsGDdsSTicSYwLygyDfYZxUt7KD1ZY6TYxqyprLdPg9ux8"
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
