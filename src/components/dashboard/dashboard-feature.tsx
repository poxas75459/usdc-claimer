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
    "4KA34wcxVQhZ1mBoiTXkitPZgxzGpEMSEWgeYThLu1wVawgRMXYJDkp2SvetdnQKEi8cTSxbGLq7JgoMXe4FB3Av"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xxJLiUAtatHhuknfckk7YNdepJoXUSMJ6iKsB2UGJcQo9c9hvJS7RDuwUeGC1BmCzGj1MPecDVhW2XnGJ19v7xa",
  "key1": "2Lq2ABaadLwhBe1zoVjvoiGUZV6DxCZN4x9asbPbVBEZXWBJFr1yRFWmLAfTBGRrR1DiChQuUnAexi5eaiiDhBgd",
  "key2": "22iXYnfWZMBqmbMtkjBfGFwFEYcvyad1dzUB4cDd33VJvfWuEaaC82NkS5JbhwZwgfCgWg1HC3g1yXfkC9mu9CFW",
  "key3": "3bG9B8GDHNT97YRSRf3P24YRHqsyXYZiMuMGhZEtCiVJxjcms4gu8nvVBSXR16cFMqyms8pwBa7WvUyr4ohjQeaS",
  "key4": "X5mVjK1CqfjXjWSFcNvdw5w2JLgd6xuYqTZeDumNYavbMLVVMiABnjzSiEJLYU1oBW6CuCmPVSXNTy4XoNxzmmb",
  "key5": "4G19zxkykxc3TomVU3LtbWGKFyXP2Q3B979FSpY7MZi9GNRJmnEvrYvxcXHPKGNFCpsoihDeTYcwAhXeNzEqrQPe",
  "key6": "UwwNKhaNsnQUN5A47gLFLHXffuw8nCWhWw7APWAZH3ZkvhtgYtmLDMR3TU4fB7Bh5PAyMP82F5Dik6S22BajDWW",
  "key7": "4fKJH3e4tG552DF2eJVWTAdf5f9TPsMutb4j2pA8zmHa3bTE55bcxsUykxUpnQ2XEVSiErWM4cNrzks6sTgXvaEA",
  "key8": "3NtUvnhNi8UiC2bY4VK1CCZqzArCHDvykbLh1nUsjh4898AtuTpWrrUqAPXNaNjhGJuFfiqzeD6dW733Q7h6uWx5",
  "key9": "62nZn9pRYSc137Ejhp4H24RRVSBhn1tMtc7NFpwocnSZTnJUcFJzUTim3Xsfy4YsJNMFTP2LE9xg7Gan3YzTCV7d",
  "key10": "5BGNWHuJcrEwcRsLXbmwiqciJgj7pkaJSww8eiWSJ9cNbhXu6ygARnCjEs8Znv8nm5nh538MRrBWGksRRjjsHRZ3",
  "key11": "Nn2eG7Ra7Rqd7ryrmkzvMSnYxtCNSQio2oKhEGq9ks6NksP2wNodKB2RSVZVB6jgXrob84s59F9qtnVz4nyeuyu",
  "key12": "3np68WM9Cajwrz8X6VxN4Z9ajTdCvRQ89a854HhDiRKLgW6DZBhDEPewWQ21es8fEVHu4HoyEwgSfQZhhcKe3a9D",
  "key13": "3AshT86fU6fkBRnzzij36BVGR9zd9QratWvrp1Kn4yeDgkVnvkpkWpEmbvVALjrreCPgk5iyCLPGrTtpb2T7oRov",
  "key14": "3vqc5JnUjB4SPc2oStLvxNA5cJzCCD3bRi4KgFDcGBaB1dtiL8UaJ8v36eSbPKZ1Yvjicw7BcC2ZhELMSW8phyye",
  "key15": "4xmtLeuNfaL6GEZeC8pZgbwn8p3X117WGDdLA2spwjX9h1EdwYs7MuPhm33jgvapWcU5Xujos5Cqvf7eTBxAukTd",
  "key16": "e1VhN5CJMfQnreCCF2MgtkqnVsftxpG4qLJsA13cx8JwhHVdjCHtVyfhn4VpcDQmuv98RMS98rD5P866vUYbVT6",
  "key17": "5TVEjLCf3HGdW9nm7PvTcunvbVSrjda5P3Th7u3P1YK5YBwt1cwn1adXXzXos7VQrYEPkwQCUvaw6uFcn74eNpUJ",
  "key18": "riHvSLTWtxEYzCpS4ZDQv1ZFw97hcK4mCHFa3xHiWFqY8r8dpLnVf1wPUtn5XF68u1FVpNAc2FdT3HedXHWgVJN",
  "key19": "5aQHfTos3wwcKTbLj45DWBMF5CGvdQMwP4Cjg7tmtsojMDdu3Ncx23U1s3rPVkFpzah5oVxX91G4RFeAVi4Ucdyj",
  "key20": "3ZJMN1qv1Gy93xVYmrjWEeNjppDF97hTjHwEqsRySJWoJxdrSkGRT7dHxDQ97KynQgTRJYGJ8k8dLcWjsAm1x88K",
  "key21": "2EhqeSTGhQFsdw7xvWzDoYbTZPZjFNtQkJkRUbzzRhoC3czBBbjwD5jfHoTqegPzZVPSyMzNiYQhogPKopMwFT2k",
  "key22": "uSVpnWr64q5b4vkseqhCPgttHKayLMT6SvsBRmc7h898i3Nxybwdab8BtsweBSLHnp2deqpesLag4e5B9aNB5hx",
  "key23": "26hqRkfECqBdMWUckso787hfApKgqWsGz3QHQCr5YdBKP9wy84dh3HuFCwUxvquxQ38nAzwsSyMfgKyEg18qDGei",
  "key24": "5B4BpWsHoPg6Hmp16UVeXJESExoqNvS5puZ7iyqbB9sjufyf1pB2u4FrcmUxRtv2cREozuLJd5dkoL2g3viWcuhn",
  "key25": "qPMwcL45fMivFUm4cWATGGxn66FWs2sumcHF4sFrd4qRWfLyL5LCA2Zedg7WbwRDaEfXBXeUgGW36KZetfMC13C",
  "key26": "3duTdnHLvutWsGJ4HvhUrJx9K59QxK9FmdZMf5e4tRAGUoEzMncqeZeR1NjFe3JbJHJBLDV4x3QNY7XHs56Soj5q",
  "key27": "56bQX8yKS6YfcaR4RyFbHuzpYLXAdc9TXV6AxLjjtE5miw3QgjE5zAHNJcR7WpgACtWkFZtTygxXwicfP2iyM8Fk",
  "key28": "3taPjp99ZVcG8GqQKCmLdqGXPBi2ZyHa8izkCZGR8VkFzeVjzC3cCiXsMpu5MexTgipeV144hBU7rdnrdpSVdyK6",
  "key29": "2aDKaFxue13u4cSgpSengYYKzy3fG9SAnwRXyVLXXwCE8fXqc9v1eda968Wh1edCeN3fZru2fyK4Hop3QMHf9TKM",
  "key30": "V2MGFZ91XPBFkuEJ97gSSdC1Wjwy4Hqi3YR7984Erd7bSCRyMJ5KE9tPErZg8TYMqGdsGEFCcW7vmdCLNWfTh9r"
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
