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
    "sdokmP12ZTAGUvaaoYMnWEKN8HQ3g3aPt6aMDE6nqqRwhyGAR7Aap8Rtyy91FCAXNoMFMafpHYYUBfxdwCssn68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63JKrcjiyggRVKgvWjNv8EJtpKGXzr5sWJaTUPS9hbdkBmenQti7NqsNodH9eNTj4aEfCkkd9nFSVMbLLohAq59R",
  "key1": "67rJZHcmJN4JiHgTiSvRzuLkdCLfBtCGenzqgQADqYxrEW4W9tFdkW5XEBZ1Xs2boXTHNjr7h32w8LthKe3kvM6S",
  "key2": "4KvDDhu78x83jSFsJhbnJVihqoYsLcsQmNSfKL14x57wCyVr4ruJG3LuN89irz9DPoguHQUtXhqszp4vVnbk7uJN",
  "key3": "2xLaFp2dPViMw2UVJqzWyDG8QQkQSirJBLrezmYahz1VVHi2jcprHyYuAwWZz5AGixFLJ6pdFUytf1a7FYd1HgWq",
  "key4": "4CSH9wMDHsao5wY88hsv1dsusgDzXrxGXb8ULSMq18eCQGp6vzjPxEBZFNH1zAQrn5qppFqbg75s5qXNetNoC8PS",
  "key5": "3tkTnw6SaQUPvFt5yKy7cCxHfxVL22vvz17hXzwmFkwWGU8RSMWb1i5QSmwStmmLAxLLKBsgH824dWPGPg84C7r8",
  "key6": "5PHgToj7AtGt1Y3hdaMNK3KeqRJzXXDGy7yyxHtPX5kT5RRN598Jvk1sLNpmDL1dLn3ecA2PBjyMXbm7LoDihoX4",
  "key7": "3p8yYLwdbuxHqVDHCmWV4CzK6jS3ZGumvSDaEKztgX6ESR1efc2CUWz3RLb8ryuoXVB9XLZDYMUNoj1VhmK6cZda",
  "key8": "4JgBt3d4VA9GHiN2MRPPU7AeCv3znzVHYEZkPLhT14rnKJLxTHTUsN4zcY872kwQE4ftZnGtjAsTac6YuXsVGJVY",
  "key9": "4fPXurdHfcUfwwTi8XJK824VaNfbxHAv1u2VEAdoweUv6QuGEo4mS27LArHNCjLMLBV5hRszEU7WGGqKWph7ig3x",
  "key10": "3jaGiJtYpXweCmHDCMJFddx18cR2PyoyTC2WYDyV7c3tfJaMSeykvkPhh1Cr2hFWmB52Cr41zF4e4cT7MHxaRMm5",
  "key11": "3fiqKM6dtpvPgrtGNv2A9ZkUHQb9vwincJPtsc2t4fbVVYAFnEGwMHSeLkKHDrW1cVr78HVXx24ckrDPAt3FmPxw",
  "key12": "5nTAxvwPdjTvMrxxCKC1q6xKQ11YywZUs97opV4hxtCuyatL6KYUheqkhp6r6mUAzU3pT762G99zY28m2e1byMba",
  "key13": "N12z2kgQd2dhfw4VPTDK7qXHATwKF22hEwos8wJenquAbqdYzSspdGsTDG6h6FrwUqkrsqa9uxpu3rvgXZ7TZUD",
  "key14": "4RL8xALtJPeyyby8iXPafcXHRoxmmpF1kyodDHKr8FxYozcW34CJuQzby4mefXuNQfnrsoDMm3AnQvwQ3TGFfXSL",
  "key15": "5eEbdvTb9rdWxhkHAcvduymUDDmjxYRDjkTtni1WZxKrmFMG6nRjuHVVLyAx7rHjoLmR1QD9UXW7wcWda8XUUuR9",
  "key16": "YgpVKT2dphMtsjFkks2Bom1YKtns1nVNp7umitj3NDeugvjorycRGG3vBxXKgjnp4LJtB9KhvsfMRoLSKzGnKaE",
  "key17": "2735szVrs2G9SxxuBWfH2J5kLBhuxgeUKASzuFv271LwBDGWLSok37pBDC8bjgGEqa4t4pvQWPd1qgsjz1dhwohq",
  "key18": "64q1CVRTHxCrkyAAjNytQDbv8ENYwGTGKTGhmE7AR1p4WX44e8Bw5XRzxLxrFufvid8cLKgM6zn2hWGrpKPJ175s",
  "key19": "3E7tg7yVGyeDzczCGhEFQMhMLyyu24ssgSQGDqeE1FB9AT2XQ6g4Zt5dCFjYEf3UaqoT9P4kHixQKEfbngyqyAdZ",
  "key20": "3SVeMh6qo2r855A6qULd1V6LaH5MWGKkU3pznbgmpN4Sz5fjqgirFwu6Fuhc3aBbrcnnvtRM2YtdE8UcAK3q17qa",
  "key21": "4CWX22NzPJ9QHEdg8SDtTtvgEzxs2f7KTSXPLi8rV5qAhCDXqX9zkfCxH4bKfD1neyogHtouKDFXYGLYhmjvFFgj",
  "key22": "34LQRagrRCV4sBNYRTV17RmuJP1PHSFTsVCjGSqPZYb3R51Rmx1LG9YPiXHgY2iHFM7cMC3QJcToRwUdxKmMwUuh",
  "key23": "2PaVMEaAQZm5j93HDXYhFarciNbefmgeEgq8JQgcsv7dmGtCBFhdF29PBndTvSVRpX3wAZ36wsQvQaaAGrr9JX4J",
  "key24": "3u8BYFngAdPgeeUPZjAkRbKkbyaUCoWAsSqsiC8DaiuEkMYtcfQCfeedegmrP7KnUfDXpCFExLM9YDnTCshBLXkJ",
  "key25": "2WZWD3FLFcdndgPB75MdjG6HAdwTDVdp4sUURXToG6U1DYUHToMrUAEhSX1n29KpjYk6cu1AUp6VgzREoEJ7dLZe",
  "key26": "2wZeK5PqU7FQHJpeSBzZtHA57zXQXHopgDvBuLc5nDHELpEqyumy2GGFY6HKhXzhhoer8PiPCWzwyawgCRvgpYAZ",
  "key27": "4yF1vRnjswQ3duPpGFcAvDASpNfXCp2XbgtqDyAi6UeL64okDxRcJAEmBaNBbEumY9kq6WxEzSi71sTNmMSyh79y",
  "key28": "558BFvcWCrrszwSUhKPBmHPdRY2KUJL2LcTGkTp5v1C7QsBqcLQzr8ah8dFM3zorxAHT527tQcxEDFiUH4vUrfXa",
  "key29": "3F4Mymk575q1jYUqebJakSmYX4h7BnN8CnjQkBGDjxSMxDXKjTrPkPBf9MRKLKRJUZcFMgRvHAmfmZHMYpDa7zM2",
  "key30": "5jCBdM1wQVYB7H3AY2tkQRHb8bpnBVaoULsBGPFMESfsHgo1roGtJ49wioi1wCfDwQGzgooB9BciwX6ssdniCM6p",
  "key31": "5tJz7rES6BHLTgYxgJzuGrR9KcXZqg1AgJpWS52yKywCnAzB2CSiSc65b7XAfruLWdZztUk66b9SF9kF1ddvqUMV",
  "key32": "5YkxRA8RjrPYpaBhkesnKfZfayy88T8U9txRPo43s4G9A2NixwaYk91LSLaXMG8ruYw6K2yKJXbsMqUTnxfjbZwe",
  "key33": "36xR1iBx431C5KWAAVFxGPV5iHLfJpr2iMFSJDfUbAzqAy5xsy6VYQuxfcMXk5teCPb8JPSYsS1d76NhGjPtSYUV",
  "key34": "4E6mwRb4kaUptwTGusGMRJ7F244Gi1SAbTrxrW98kek25iUiaa1UTGDnNKr6MeVUDDcKBBaKLWW918fG6Ht7goZB",
  "key35": "PW5qTMSoXoRLsCYdKjMaoLhaCmHtwgy56uq5CW5QoxyneEgERKhNrrysBUGV22hppcSMhhcMaEzsWSUrKyLmNZx",
  "key36": "4TBM1kjiCedXtntLi8dzJ8seerHgFHdvnUCC97MN1j9YUK8FxHicXycesxGe1ARBb8xddNmcm2gyXVeBkTWFpeH",
  "key37": "3PXtxcv5YYtnCpAi1XDMw5zfdMXwpD8vbTFQZ6eXR5JhBHxSxMrymMHi38PbKi5mPRrYEj1NXXeTc5XFsXCEZ5Fk",
  "key38": "2gnKQMgQ4ksbfbvcwbxWQ4o4mq6avHsxKGYzYKcCKzqLAS34PDP5Sy5HPnsyXk22nuRqHRv2952xbBvb7HcZwrb2",
  "key39": "4QgePxMaeGoifjt1bcU34yRNiGAFw45JW8AF5RYaY62n2u2WhFWqW81gJoUbpiX8N2FHHLLXH2eg9bkfuRP4ZfoK"
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
