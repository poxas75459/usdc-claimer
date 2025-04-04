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
    "RfCytbX7QCAqEFMrY93euY1BzMCQGhpxR16AxPb7Y9onfDvSucc1TzwYKs1kucYKMubjeFCdPu16SvVCotBf82x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GMXepvtg39vS3MscTDJM3Ztw4TaTB9S91YctTomMqodzYAfnwLuGMVogt7Z43Mr2ANAJe4phYsdRaUZCg61HLUJ",
  "key1": "4RiyktrVCJjrjc9rdq4t5LUCpH6RtV6BiQCCoD2XtTFEY2GkvUDLw5NwveJQM1uFSDPLUwmkETHZoVrdnyVhvYU4",
  "key2": "15WotT7zwYmsM6neZiJBFYZ2Yzm2PxbhZhVUJ4AB2CbDDubQuRVyVpzXdb7sWDufuU2Yv6jJMbvnN3cMiSruXVd",
  "key3": "3uK4orNBCX9mj4i6tLnpnw29cbcm2ujCiBRzFYLuxNLdyYQeq5kzZefLQsPJ42mTvXhieFHsZgkxuVbWyyR7sNW1",
  "key4": "4DeTaaAhy5FChL9QafR2LTwBAEiBC32FFERUa9J95LsKwjbKZ3nbnt9am4PWShjMWaHTGtW7ycggR7KDC7Bn1KNC",
  "key5": "3kwjSZbkz8uvEc1dMjgEF2TMgyJ4MrA51z3LnWEd52wGazgXMu4dFxyoNwndDN3RfPKNUnXTwBa2MNvAsLh3P8n4",
  "key6": "4ByLwaQpDbrzRj9t8V4LCGKXtwDeYKNzXJV75UtSEgwYhv6c7qXnUfKVCXZ8dYinU82wNV9My6FpcPTVeYR4quAf",
  "key7": "5Y4hHMAnqEVWudehYrnUWbe2nZnvvH78JhkjVFEPXnccDBFx37CmhTdmurLVMw1exPVVRAVUytnJVrSsLbNWGv2",
  "key8": "2nDftfynmtHJ4PYhv31avjcWjw2SiX5cPvmogA36aGY3bNyg2v6kqdvCvdkvZ4AARvchziLKYRAPahQmV23ggbTE",
  "key9": "2wBCdbX83x9VM3S57n9JWtYTBbSP6eDtMjeWYDv8Vs8BwNuyZ7J4MmpoHSyrCPej4qJKXUvw4LcdRRJzmaJ73ygA",
  "key10": "34sk8sfmAWq9ZyrPSTymtWKezp5cvDFD7KqXTCQjfJedFaghDftWqpnfmdzDuvaENZnfYdoSUmRXw1Qi6fzbygNB",
  "key11": "DcVuk64huuPktMfLoUiA27fPEWXArCF5MZnrvreZfdsP1etj24TCP4rCEx86hbVukgDmHeA6nJLYnRhb1w9zkiB",
  "key12": "eFutaXx9BHKSo77H3ATyXYVtE3xC6f3yXeJ9C6Ei1zhpsK747UVaEzpTJLgumQdaPmudKGdkZc1sdJvPyJWPM8V",
  "key13": "qrJNLipvmKGVbcF8fdmR24FgEJuBis59qDm9hPynMNNX4Kd3LnhM4TxKNnsKCRh7tL9dzVzjjegCTvXZb9amA9A",
  "key14": "5S8E6RMAkS8G5HKLnCiFE3TnVGuuiEePDkqZhEm12Zq5cf9jHcoZNx5vNkKUuaRZQSTfKo1icia16x4eD8wvU34x",
  "key15": "2LcPGaQpsv1Sr9m3fhjLz6zPYifrFJ83TaSnzxaJ7kqPtQTdXQ2tfpmXRD4FUA4YRgj4e9Fwp6UNKS1apS9z6iYe",
  "key16": "4v5d2Snbj6zDnpxYdr8SmuBxgB8jYzJEtrwacojn7LerVHUwFydN2qKDRAPhsrq4eUUnqrvT2MjB6JiuUmcZc9S2",
  "key17": "427ynQU1aGp5GntREUA2YyNKhVCvM9EbWfuZUncLxxtD7ZCw6ETUTdedf8nUyzFCnBPS3RpbmsSMgvnDzrkpaTjw",
  "key18": "2eJorxwG1HyggNZRGPJJJcLur3xWszgQDrEDUwDCaGEWCip8ECBG82ShNpoHXpNkdrQmRHYskuxA78nmtyaNM3SX",
  "key19": "5G6eqT77ADFTaHqnSjQ3pZ5q11ja47gYLjoSn8kFqoxmQqQAe9wirnkxzWvmt8gTFGK992t9t1MYnfPNJmoW3PsA",
  "key20": "4e2EJumWqMLcj9JfELyWb2pvPtntfidKEHt11az2pMib8NhESkkYVq6jtaVLgMwuB8FQuCvfEgfNyhzWFeF8e4LU",
  "key21": "2V3rhf1vCAzf3xeyXdNjgoxuABf232btEJbQ1a8PpFGJpL3aWZKAoesSr36cViGWSg8SfzPhH1QSGLvYhV8kQGmH",
  "key22": "4v5GvXoaVa4ikuxSb2Lpiu7Tb3Wa1bnDU9wv5nEjQ6SbwxyaeQYWAfF2M68FmzoG4yZbopihLkEh3wvLWUnqRAii",
  "key23": "zQTqE12hfjoSGNRsdp7bvD6jCejf85kjvNtB1apJabVeAzm5HLL6Z6fvratKueA6dny33Zyf1z2A1ttw31RATtg",
  "key24": "2J8gMoq4vMoBZL32S7pwcaoxgGimJV4GJRGcnFsJwn5Gi8LKKupx6T6H81ZTnVr9mrQLAhpdcJKzWvWdupdtjc6b",
  "key25": "32RsJyJ1nSVRb7cm9LyVdXKr6zVGjrP2oLzUVw4nwsxYUsrgHgnrPeeJmM2f4onhSrhb6qrWuUHMCkTtF3DSkDzi",
  "key26": "2mvAL4gVFfitFLSjx4rQFuC97EibabugAyEUmLVh2px3YzZJorej5n8iKNQQEs2voTagomNtvtsVX1YnaFPZQ2LJ",
  "key27": "5GkBcY6eku58igNpcpeBUh2smQF4X9YDu41x1wVLdBxH1YKC6NWgAjuR8DEXu93v3pWP37QK6eBhNUqAbsEBC821",
  "key28": "4TqKKvNC7yXTLY6gTE65d3cNioujbaXxxp6ZCiXGX3DzgmedfiG1UCnuTyfEc1So2QeMHwN2s7Lk39nN9kMzPFnE",
  "key29": "yqGenmCMQ4stYAwe16uCNWJoD3qaBiRSFZzGj52aosfjWSZ9yLP3UQtmReSX3ZieZvmURUbeb3wbDucHxNFvLax",
  "key30": "4uffJhRsMqgq45MALqjbRyWSSDUwfixqTA2AXmQpeeY2TU2xBKrviPhU7zSKVRJMH1XmfAcJZka6Yi48U11LWJSQ",
  "key31": "3VfK8RtFBef7vizKK2TqyQvkYc53SvpeuCbmtThDmVFL8hmuRZ2smctsXCjTvWVi69s81B61eMTECXpNtRytdzka",
  "key32": "2FUeA6ywuwPBZdNyEeUEy2SP6uCgY7zwEfP4Aw1jp59VhtsWEXsQrE9QxGgPnYUxw8e4Lf1sT2NdQFcB9nPqAuEP",
  "key33": "4kSNTxdN2vKqtFrqte32SZFcssu2izeR5PRgE8LpHYooBNnK2JULbcXxi6XSiCV62U1Q65mDWqu5kHrAhzUhGXqd",
  "key34": "4UiQmRKwTMKyxEgMkEbjGPFbpMW8PLaMXP1id3Dm9NgpcfyjAEAuYTJ74SNFbasFxNxBtaESwknD5MsWyBj14urX",
  "key35": "E9xJCqSahXm5FShtBxMvY18x7K51gRu4uLvhioxBKBDGfUupuPiJ1bSE7x11F91a5PfVJnobM2Fmjwc9oRDaqFw",
  "key36": "2HWs8Ac2Y9b9WJaMxNiWc38oxSU5gpZtSSMypgVJhUxUv2Hksiu5sVVU7oPRyKZonyRUtFqs3vqtobmQhEv8E8c9",
  "key37": "5zXfp6GTGaHXBhNmQ7ygaUqDuxWcycUJ6jYP7Ja2dLFmGHUZLSyH6Hwr62u3npaSdqHD5GpaBAeeNiBtThPY8oQt",
  "key38": "5XY7eVbKehVNiyQmk6wMG3mb6wUJ7wUzYCoVwetK5Sdt7v6f2rRQrWxga8B3wBMms2sgE9hZz9fZQYgtfJUNsEUd"
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
