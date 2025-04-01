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
    "5sYBWxoqoEHFE99ERJdym1zmP62T6vvLixxkZyWv62cQ7AWPoy83t4nuw1pw5yDbeJQ1M8PQSLPBqLCZJf1U1h6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h68m2QrZGKoaBL2EtDqoFVY2UR6anAUwbWDqSyZRgjR3UVAmFXMw4dnFzbgbDBkGGMktfNUgXJTAPYoXBSS8u8X",
  "key1": "dyHHqH3nPQU3ZWYvKQYKvx7Ki6QwE5ziGHskToBVYME7Fg6Ew8DvHkWNJ7TuF93m3bHW5Re9G9npXCpLt4sAQdM",
  "key2": "3eqGyCSNtE4XosX2c32jWhuSuKcCmMunMY6oVM23Tnvw5PE9C927JF9S1K9z3hGWecHv2gkSL7nHApyhBzgpfpUd",
  "key3": "52iBNsbKESAJevwZyzY8Agn1rrpp2SZyTjwozoHN2fvocoQDY3CjSXaQwUbJz59NqGWSQkxzjrXuy9uB1hUoB48B",
  "key4": "5DWnAXsMceGUii8pj8a5LULHgLHpVZmnzN9rG1qL1HELqxz4Ut5mBdVs3CK9CaHxc1bxJCT9iKwfiGVFoT43aYnr",
  "key5": "44z4nTSCVHpBvzvg4auTfJBRimr5M3x5Eq1ySQqCRqNjHVE3F2h1HZcPEJmuFN9Md6QWzZjFp3A9kcmNf6FjDh3H",
  "key6": "4bfn9VAATi9fEgyiMyV9J2Q71SRJNUErtApQ6ncpEdtcGSeoj1xGwUp16KrvhmJq48Qxa3eqykhtnazQibni2SGK",
  "key7": "6442WemSscz5zjw56LccAruqs7ALT954dWit2spe8CsNwcw6DeU5SN5iS5f8c7HDhRjU32uZZPxCQNLTAxskaoM8",
  "key8": "5WZ5qkxariiawFhUfHX35xzoM1KN9TVkW1hyTjAMq35DmHU4swXcQcW61ka9Te3Vo7dqSS4k3JYyjTp6q68orHhM",
  "key9": "5TkptnmSQFVvqZEFUGyvfjHn75M96jv54GbqmTsk5a9bJKSB1hwsk9xryo9qvDCmhW1chaTUg6tovfJHbsZTi69C",
  "key10": "2bt2vMu1Ps2mwzQj1e1KVimbL9d23NQLozijEgt4y8ir8WFp9TsSXqxU2uss9ZZcdX8ADeXSRBafwZdCE8aKzQsP",
  "key11": "45wVY5of3yQgoqDgvHgFUYBZNJkvFtHVN4mMfCVcpZefc2KN7hiaKq8HHAFJW4djjN7m6yevG3jVBRCvdpYrcHvf",
  "key12": "4DJw37g1H8tFMfbpWTnY7MPniZjBiCbnNdLzne7rHm3EJHFQWavUEUUh8FvhK2ixdLduBVv6bZ4amiXsN6fpUV28",
  "key13": "9PbGHrexWQ96Bpsre7f9q88ZnrnQ7draw8EhPQrq4vcBxZ5qbAmAB1VMhXMH8ywSLh1xwR3i7xG4fd3CHyKTuUJ",
  "key14": "61h3kPkFWzPki35TYxTBLobczPeCK3L9QZVgFAEvcABxRubHbGTeYXgAP62zTuy3qrcSNEfBTDSxAU6rMxRaNA9x",
  "key15": "4UnkFPGod99AsSbm1HBVWFzSbbozYWi1zNKtf1jTHEfpQ5nfFYPQ2GrW7iaaDUu3KraeVkpJmpDJNGgSQFkJq4y",
  "key16": "RwQ7JauWnC77QEoQpXun2SoTwLLb9We6FA1iVdW1SCg8XS8S3tcPSd48rmAvLBDRHgeiRVkiLXaebtG2NYkFMH6",
  "key17": "5QUbxyxWgsDBiWeBgqdRY3F9Ji1q9Dcx3T7bnZaaveNeeqTgCyLx2ZvZodmUiZwujFvUp4XJb45hBpcUPVxzyqg2",
  "key18": "M4ntKcXwiibvBknriKHoiWBLP32sZ4MzWqu13drfAmSFGLP9C3tkVADLZZ9iZ3rfvoEUP65dWonDFSiW5BYCSnS",
  "key19": "aP88dXs48x1JrCnoEYQBQ3SC3osc8LQbDHXkjiShG47zVm9qdHzBBsVCij465ZKpEe9DaEcYrBxv9deCdwMzdom",
  "key20": "28DYrFWN24UCU7QyKVuRqpGjXt9sFt1bHipY8Hq3bYfTYhyoDNhvRZ3ByNDB9QPe6kop2fiRQh9dA5JK9JWEMykc",
  "key21": "2jjNyJSwtWWxy7mvucD91xZudSkN6x465kTM5i4ygjiiTn9Sm4XQk6JQbDm6Bj8kTYEBJFKm9pgphEgp9Eisb4tg",
  "key22": "478HYBkjZRzZYhWc3RZkHDpNCnfj2VekPSixGgoRaZvFK1qP2PDx6iTkzLnDPkm8nuq9wvUSjp3Jq2pLPsvEjDQ6",
  "key23": "5n3ukS55spDZkTX8ng3oaG1k5YK1aFDbcG6D8BA48qpLkBQCHL9KZSksRJaMDVwN9LUUVjuRTKPpgAkosrRP7pgk",
  "key24": "3dVr2cubKAa5bS6L9thwa6At2715pn6QUdjaPdYXDW6oFCXoT7XetshpGfrCCdHgiNMHA35XbpsZBxHtHdycdFBc",
  "key25": "4smErJP3uwEsRefVFifsgxYhUTThYpS69QbsY95C6UJ44ZXpTs6c7ib9GRpWK86tVUaefyoWyJ1fi3M63ymxb8Pk",
  "key26": "2bCzwHYaVMYULfyFVQQh29967jgDb163t2FSYVDvssJsLLxM9vRv2jqve7GLMtVTNDjUWknmZMfxyLziNFQZ8JHc",
  "key27": "5pkk5FZLZrd2ma4QPyiCFDu3WWkwjnQq6aAi1NUmkSwKmah34VXKGHX58qmaMGGZ35SaG9jWWQ99X8ott6bgqS8x",
  "key28": "3A5PmoZgDP24g3EYrMW2PBAdovtN6M1iVa6DM75zC61EH9DtF9NtrBp2mxzbU1sW9iB48FqDuF87wXWi2YGjCTwc",
  "key29": "36aR4Th9hcpTg3cUqeD8gAXjHYyVnc45SCiyNTBK5uJ5Z3eYThW1Z1nKAgL5zxiJ5mYSAm7uFcN17YXQEid6Xrvi",
  "key30": "5rpRPhNr61UWgVeGHvjYBz1LYPsZ7P1oAxcispoWGLWHFdqmNEzHepmr4f4Vjfv1cF5epJ2g9Xm1RU2JQZ4CmtU8",
  "key31": "2jg2tGZgvZT7DCGjgVbagCUdYRpom25cwt5XKi81r5iKmSVaJQ8WASozEGgzFukf2AAxiGsdG1TTPKj7iCES9sDR",
  "key32": "XFuX6P8VGg2zzwGfkHPMemkUojeg8kdHNwSw1YeMHsXetHWJFC45ogJD6xM2Q4YNMbebybPCPKdh6Ppb9sgeNB6",
  "key33": "2TJMcLPFYyu8k9rxcaU4M9sXZeDtrwwjAdhm22tiv7nHcYUu8iGpuN917Mfd9fFUkfVAQTRToncK12W9bggdg5qi",
  "key34": "5NH4d6PanwbQ5nZVpkVVQd1mnSXMsh1ugsXzUnzmxWPQomhZn4pozeJMdaxFU2gUNVjpd5YFC5EoEjg9hRzMyVBR",
  "key35": "5T78fKS6iKrTX5adbKEYg34XPcDPpTyPFSTGFXEoS3L1gF3oRDodvEe7qsuZWRRPw1HULLMiDFviFJpE3w6pErbY",
  "key36": "5hPff6VbVrYLcBkDSwtfREdrm1FX7cJRGPMkmTVqocV83RhKPLZB7j9GTV36Hmdbq3nEnuzZcn7evjGxvZMT5pqW",
  "key37": "5rKSB8byH8cxaA5LXaMnrdu3K9VhzzTXU1gskC7ZqjEcVnEWShjdmkASeSGt7MCcSHco8Zau1ZQFa6U7wdpA4EkN",
  "key38": "2Emfp4zXVw5VseZxcmjnVutnb1hrEZoAEFxiVQR46LcTEcEsxihAJgkvDDq2iqiccpmRYHmorSMMMW26nCgayHrp",
  "key39": "5qLgjdKdSn8XZ8Hm92biAe8bAXrRQM5spo99jiVZeUWLdYdzNFuV1w9nrFgWVCSRWePCHs91ao3dPQKSgATPmdmH",
  "key40": "3H6cokaZSzQAZ3wEzpXuy5SWBEfyUWaVaDozw7nEN7Woj1yYcmTVUDWW88wVuTh5tKcEhhUGj5gL5gVVnDCa3Ljv",
  "key41": "2APC8hwwPmyjj34NUw4kRmbMbvn6pYSVYuYhcv1GHYnsP3Q6ZHNpvBaZnyGopvKG2bZDYB82a8XzKKV7CCHDeZWF",
  "key42": "4sCpCKwV6rvimdUtzkFjnowrCAYtqPPcwrmci9dPd7eiQNMZQdKBUndYM8rEMYMNXgETm4fBnkFZvsPcaoCoCYpV",
  "key43": "bMSXPeeqTNQ6M6CTLuJAaqGTLW4vQ6GsEbKAquuEpMGwbfwBH6JcJhVCuduk65Xv2ysw9Ym7ywWJkBzbA2h2Pbh"
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
