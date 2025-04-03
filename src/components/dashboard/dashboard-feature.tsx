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
    "JUmuPedrrvHK1ctVccdbo2aLho3YZsibTNNqqASpnB4cKcdsPFn9hUFnnMGt3pUqRyqqKGAfyZAdAkfEA52Ddqn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JhmBNuWeF538pqxJKoiFsMNQzbctyKM3XtuaWzqsUnMfppGJdiqA994NNaiSJvKjmVghXzBBy12EUzkJWmrdJ7x",
  "key1": "51cNB8Bh7LRRYax5RCkhCEjxMUs923XT8YZqroTwWBTXg2ZiNRhS2LhJokvopUhAuwYN1rbW2vuNhW42s5JDz3hq",
  "key2": "53jh45JnrLoMMcghDqLLurK8kKkmcBFoaRfkhNWjabKqbidYtcSb2ZTyYsSQkfU1Jrt2hGJWMRhKsBLV3gToPajV",
  "key3": "3BNGLpBguSMqbmwjzeYvD34hCRCWwCxf3G21BdjqJftvUynLtiSmEHpCuoLHbyRXU8MrZMkjmXZqe6ahRzJNLeZZ",
  "key4": "3bvWHd92HsjPdFZgSoYZk1n5eye8rQWwF3aPmM3NAkYK3fBvDw7uZLN4JzssqCoMvN7JuhbFib5HwUH7AzaqLwNr",
  "key5": "2kPpmyTmu2Th43WzYAMAgtYfS2P6aeibCLrZU1RFcG6gjVd1Z67DqhhK6FCdLbSSZ4uK4EiXJjD825qvegj9LbSJ",
  "key6": "3CtNEZspyr5hfkSKhgNxZbKDmEEwQYwp5AQL9LAwMTxrYGW8393u5HkQ7u7FwbAmo3LoAgegdrzgha6Ms9o2csGk",
  "key7": "423HWpMjr53pSA9Bwerr2vWpzSoYPpVdsBmLjn7C4p8QxDxhz1zxaEpjupoV3gGn8z1tqZKquwiK37C7jWo2XAXj",
  "key8": "55iQquiwh3tbEnRkzBttKBvZpBfEYS9531TfSqzs8E436RHouEfjPs74NYCh4G6vDn1d2LiJU2SN76N28iTo9WWL",
  "key9": "5B4Ev6n1jiJEAurB1WzWjt7qAqDRoEjDxFEmBGCDSmyKvepXMSsNBBovGiCK61hobTuYvtVgEMnJtD95GW3No2UN",
  "key10": "366Lwei1MZig9VtD6aTHc85BRZJsVtjEjawQKHQ5cvqhQ8ScRy7eJ18GWbb7k1wemVDHrZwBx5TgP1gxG3rvT2pt",
  "key11": "4etRAYNQNPBF5NpTEzdq2AWagAkgxbbUTiTm88RsQugeYrWU4bxb8Q2yR2FePnqXSPrX3ZMLKadvhmc7xLxKMvZs",
  "key12": "3mNmoRu6qXGeyP9cQgVZdJgtZKkcK7Ub9DiWmt5dZBJiWdfw5HqGTLW4ZAxc1kumptAf2M7sdrpyNHJ7AWUpW9fX",
  "key13": "xw1cKXdnrZjpEMQTHi7gx6UcuRE1mjz7wyqG6LeH8KUgqPuPy94t8JpC8ztJwmGeXNyqmujrgA6h22266hHGda3",
  "key14": "2JQs9pCrQPLrqkpoCRdoNRCjYoSt95V23n5av6x94Jo8Wg6zgxByzMT3aTFnt8ghKnyphbcpnZuMmEcUy1ctwkUL",
  "key15": "2mDCVQSkDULq3Mme6VYi8KJe4W9xKVqT81xVZiARRUkQLgVq8o2Eu54mBCztggREM3NXg2s16D9G8JFH96KupUWf",
  "key16": "3Zx463zf3B8mm89e4EJi27B4nRqGyKkdkLd7cxpnM6a7pNK8r3AExXjXmk2KWmogGdvq6TPxcMv5MphNU8QRtFZP",
  "key17": "5hj9ioNvMNThXN5wwAotaGJUSiXBgcZnB7gRnHhRsWizrwyvR7RbetUBgJVuV6bkhzHdfu7uZTaRJoBmvcxtvExD",
  "key18": "4cGLA6kjXeLRt7emWo4gcK3sTj6DXzRfoQ9GgriiziY6Zapv7Ngxr2yJHHMcZn9mNZpfuBezLJX775JNbGY5xqsP",
  "key19": "2jaycaUGwLZkrj1J2qvXVBpfN7nTd41xDtKAjjEB5bDh1VHCka9MX2nXZkXeunrJJojDEjjGwyRopeq1PdBPxBH5",
  "key20": "5nyb3N7Hqhxx13hs3XaSav1tWnN98G7UaN66xdQvPJ3X1NvP9phhvjNik9Bw9jhvGRg9P4vxcB5TZyiDsTKW6Up1",
  "key21": "TFetjTH35qEQ7XRLSqUwQQFAVcqk2jE1WQxF3FGsSbYiTYG3igugaCvrxdtgXFWwpS1Da7g9SqWZokKvjdkLQKA",
  "key22": "5KQsjKyJsSAkFx2EX1Q2AfZT3ZkD4i8Rmkn1Ef7B6XUteq2n3AeYpQDaNW1u17g3z8pvgsSWy8kSd8xJGv5nmkzk",
  "key23": "1HKeZGC1BryrZ8NYwQS9Jty1Dz6Z3QPiLzbMXD6CRn6pFJ5uTZnDxuRWPBgTS6ZSnFzrge1WrMXdDrwhYF35o84",
  "key24": "2Tb3cocDCEh8Lv8AZtpi1EUqcD9vUayj6tVA6mpKjbQu6QBLMWgyS5AxyN8KKbmawwsRNSEvP3Jy6R3W2ubtrweN",
  "key25": "52VSfx8Q9S87EKS8e3rGU2CBErzTndPZndh2vvsE2TmjpvMPWq7fSTz6t1MexnV1XJk6fZDfHVdru6qupywJ4meM",
  "key26": "3Hhsot5Awdowj7LqHt56HQG9MPs7wjEVhCTVFou89H8i1kBnUVHj8QmxLFzK7BFHe1CLa6rXmys86Snva7Jn3Udf",
  "key27": "3UbfFUxFtxMmvzCS39dnerwFMrPqtdKKu44H8BdfvZMpUt2KSUCcqbDwD1Ebf86RR4nrGsMu1ovyUAh2ZAv5WDTh",
  "key28": "3SYvb5a9Rv1hHdHXo5SejaKq28uHgPFhjBB97zzhGLuVSabHayPxSgnZ8mW7NktXgYD7HN5fcJVAGtUWZzyZMzg2",
  "key29": "3gYxMeWruqCum3PUem4ZmUZx2Qy3e7JzFJqBTN2T63ho74yxGqeNypzG8M1HF6Xc3cU6TxitUoQezSuVH5kpposi",
  "key30": "3e6aSuxX8ADPffFQm8hjEjRYMnw7eYAvSXKTQE6mmxnQmqy86CzbWM5AhHP2ZCxNJgD4jxquU12ZcCyJYrA8AkXq",
  "key31": "5deTDJfG2Q4b2SSv5WePNpppKm2M4HWAi6A5MZCSrE28vDYSHGYqr2fHyCmyVC2hQppETqEp5MctwrmdmTDqfFCH",
  "key32": "4ufLXdQVPb8FkQTjCA4RsNBUs59kWeJ42HUAinJasmCXJAMqSVKAnob5HsoH6DczDvCEHWJuXggsrSruQ4GtH4XQ",
  "key33": "4yqT9C2Xrj915aTqaLCkWRFQJdoPFky65oPCK8JjHjooJcBdYjcVUqhDtWqLS7fkPWFaYEn6ki5iYjVh2KLwFNqE",
  "key34": "3kPtMs2EFAjmsmc881Dc2AbFJRbPfPzoFM9Hd1iHfKzEDvnS3iGrWeKMAm3jagvoEfj8DWt62DstU4Cf9TV9NwsZ",
  "key35": "5pBDtQKuTiHdZdRcU8giybZn6aJ5h9mSoHFjAew5wocHUCWBGC3yCAztTbc76LdNYAC5PU1seHrgqcHW6fqybMwY",
  "key36": "4jKdKeLgLSnNByMS5gZ7Ss9ig12rpuhpQKvsgb8KhbNsZQnPSYoWSVfb3UzAxaxhGEdnYaSLVBFtwecKwzq13YR8",
  "key37": "2TNn3YihqPkgxn45jnSC1fdNdnkP1UdWAVQfKLNhaXbuSyrkhja3udfYCdt4suwmydmzdy2E3V7XTzx7ydd4Yr46",
  "key38": "5Hwu9m8Ye1cBM4tv3wCqGv9DAsXSxrCse3acvvQ96X1AUiwzpkmBJmFtec41n3FqBWMPphrFac8MKDL954DX6CfX",
  "key39": "26gER1JjUrVBSJGpxxibxfPyKzYS4i1bCdToSii4ygcGmYV4gAsewzsEo7oJRDcnEvXqSxygyKSPtwZNqEG8M7Hp",
  "key40": "NRAyqh4JFny3Yiqb1xgaYeK3auwGxyfyDAHGQ7jzXu3j3yXEGhwHQSmDpqJf8LTHYmwGBGees8T4qPudBJsfD12"
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
