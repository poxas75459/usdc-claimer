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
    "539MWVW7DRhgcSee9sjcHecJvb66iJCh4kkLWGDz6NhLqmbbTN3WvvfU62zQp9JJ7qyDrY5mRb6nz8eFs8T6PVfj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rrzungezFZVqisv1x4acn8p2tZu3GuY9KL3cfLcWoNJMYoWZy8z6AVN8r13Ja17Zp4R3gWTLAwurdbRUgdsNMRh",
  "key1": "2KzvktoGfenY9z7epAW2csX7q7KhedtVTxLX6KjU2zWd7gVDA9sUqgxHpjmsLJQgmaJ8ia6af5C538H8xqPREWer",
  "key2": "3wST2LRonzQfN9SzuZgXC8E5Apot3DbQfLY3UnsQmUxAR21vm1LY7Vcui8yNJjXTxNvmKVQHJoseYSSj4K7cwNrK",
  "key3": "3CCcPAhnv414DkthpT3nwwkyidCZYeFaqwLn8zQV7ehV1ocLnNLiYgCzgGVpysUuZ26B5F76hwFxATwuRw54mqrn",
  "key4": "492v95HYoN2y5PDtpVUAincTaGMorgzfGkakUQhfQmD7xCPZWDjQepPDxWitLZ1TXESXYusmTY8mHdq89CmYYJRv",
  "key5": "3Zba2N1yPu82pjjkm9dAz9W74vQQ2jsLmMDk5hGyyhzbeMHsQq2emrUnML7kwoSn8xQ88aYpWQX3eDVi51QR79be",
  "key6": "42oaVLRtNBkJBM1vDmHdzzJwwPNQqvs68GETuexXis7ioSHA719QAY7mLVaCPthPi31gEn2s11bXSz3ji1cz7Fuh",
  "key7": "5ywJfw1i9tsAiCPTKQu3aBTrh1uHzB5FJKTd9Ft42kBdiKErWfcK45xWBhp7ckjSihqYdKuAjMkMufWFynN8h6dZ",
  "key8": "5uMTC1ZAPeKzESVR5CNqJ4AnRFmH8Q88FjmirJf5ioNtQW8ATDiceFGKUVACB35qhJuBCXXp3vdujexoeGAvQxik",
  "key9": "3rSGUyhtpdBs6E2zUwN6XdLswwG12AdASMafySSTb54443JwZkUeFJvvhfqJ4sGkw2jrvJ9Jd2bpQzCATsDr3vWD",
  "key10": "3NzZkNgmsskrt6yMDXz5vqaoqTchppW5wy8TNjpMkjQyfm2Cdwg8KGtavWdpGyRyJmM4Qyzq61Qd6brGzKqqwt4q",
  "key11": "3oNmkHZQR78BNze75HZqffhSe3xTibz1MTh1hiocCLdZCkNd7jQssgCBdWJRZNuXXN2BgFbM1VjNoyBrMWHRdMLM",
  "key12": "5VB1v7xL8rPahQDBKiHc9vpTJGRbWdyNZDHkUuLkQKZcsKLaRLwT7cC8J65N2wrH3TerhorbdkoZrDmykDCtxJqt",
  "key13": "3rcCaaLnpAVnhfu2ceqMbpBJ7oFWodU6456tbGiPZjp5cuytWDFvAfwJJRkZzniriY3YqEck7wVc6iZVDSKkHMCw",
  "key14": "5P6srtPkB69BequB5T5LxqgX2cCkQsHtxFMbkdD72rtLjDeFRUBMoN7wprJ8XNLRurUi3kPfA55yspGNJMXy5QxJ",
  "key15": "3UndTQxz8SsnAhTEbzKuBU4GsnWKQo3PaSu7z47U3vUoU7ttdG2ukB2uaxvWbP9aHZQfQnMVyDNc21jLLfPRsxPB",
  "key16": "4YunsG2aMJ53Fqhuykkkcd48V3VAnWfqL7uHY4QEYGWefp655vPEeCk3bdGzSiBJZoBvDw7fnXSM2rtGJAGdprp7",
  "key17": "5CdNdiw5WvAe3KdaaYvSTzbinCWjZuKMJYGcSzCqhgd1T7CxsE5izJfgxEESLnmjinKSUXRdwZY3WrsK7sHVmfcN",
  "key18": "5CFiWoPicYrXYZmHe4usiewawPxTJX512dhCTAK71z63foQvGTkSSS6rFnaMtvmcjn3veQ4w8KWJ1z8xKq3AhxmA",
  "key19": "2BZfq6gURRxBt6YTXdnFsXBVDyKexZovEizwrSzik3X8d7ycfCaSo5DBATLojZvFvZhM2sSHeeDqLXpNv6seVpXR",
  "key20": "5YbSqY7mhWDeVUaLAyjYhhdiFpLVP1JbiUpJSbsxpZH6iYgxYwxh4pKMMYMt3ZwNsZoFRWdTpvZciHBtxGfrPJHR",
  "key21": "2sdCM97KB1B1zDgsjjHnBjmyxd5RGySSZPFHEHYxbdC2ut7XoVAjTkNXy7gpPBtaDYsikWSZJUDBLgQzT7Jt2qcy",
  "key22": "7MtUCzRokNX8atJznpQYV3auV7uZLGoQDV2MyV6nheRTGuV242NLzdDvzjt7rAwgUobinD26PR9NzdfvPnLQxqS",
  "key23": "4ZkGa55cs9wu4JEJq4Ku8Qe142qHVcLzBDMCN7w43nKArYvLrhhvHDLu8Q1h3wz6ru338rkuNzaAXFALHoBuMsAT",
  "key24": "1UfN6NN3s1ReYR7rrZFBc9VTUdje8qtEoCmnwYXF8bhQ8cnw2rJZvpzWAcwTnSWdvFNrLCHz3tXPu5iFgmL8LqX",
  "key25": "5CAjSirgSucEKA2EbK1rXLDUCRj2m5ZcbLqihN5BTx4HSoy16cQqMEeN4uGYR9ZQ18RuHtNAvpBfYGwkSG3xk4Zh",
  "key26": "5FxGxJAoAX1HD2bK2zfq8dojhWudb3DbCGDrHqNtE2M5YLs2MGMVwU2nGxymLthqQm7LwscaFxPTSWNbMxgqEJqG",
  "key27": "4j21vAv4EusvHhH5rhyxwpf2r3baWNPMmPxrUwHEHAwsxMcniXQ8w6iBAWNGHwhUmCH85wR1v5umkS87WMV5GEq7",
  "key28": "5qWXepMcKC6asd9w8YmcYR2wqVEMzCzhG1ahZJuqnpkYcjwFr8zTVE6kKyHNuLSHPhXNn62jYmrXqraVWkeC38Eq",
  "key29": "XyLtDemHu4DTnZ788zCbeftJhhr4cv2wsqsnLLPgjH9NzEAvUPLbi9WQCTsnToZ1HE23duhtQYfhJetC6Z3vNo9",
  "key30": "bnrt68xeg9k7Tn7prsgDk3aqwPcnhBiUCt1MJYgZJ4QDm236cJmTPz8XtmNgwDqiGFfRZAt14e5sVs7EVRuLKut",
  "key31": "5NLBdmVu1CDJBWUV5byTJn6JzwZE9EVpWEJu5VV2KnNbqXxGDDovwYPPsCf7P6ECZymtiZx9D4ZXAZeUU8hvPRmv",
  "key32": "5ZwX6LrzuDZiKusnXrn96K19smn5Gf2zd67Q7Ne3DGKUawmktN2jRBCMhjxNysnwNLXVH9iweQ4ukQwkgiduCXVu",
  "key33": "2h1mLTDQFL7KZjfnNN9Ab11qL7wXNcHbhBuaLeszbzNhxubUis4feGBWLBF2Y6se34jXzxga9MnvtSkKwMtrfXfg",
  "key34": "4ggX6SP4WmZMoJAYLjMWTAawWDesFnQF7doqEP71L2nx1Bm1VGSHhXTkWdTQ2Kcc2ST1Hmcv61QsQR9JJCzuW6Pf"
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
