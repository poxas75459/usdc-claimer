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
    "5Cd5Dmp8prsTi9HceEoA2ZhByS3kgmpRPBg4qa9RGh7VXQnpb5kQPH2VVdtFPmTxJ5fRVj2xx98eM2ueP2UdwhfX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bQB7c2yaybrR5Gb8KGxA9q7QxXp6ab5ybFeMxC1qE2eHCjcytg2cWurhg7uRjtGeL9bLnWCkLCxbSZU5QNKQouK",
  "key1": "5dG72D6ANtvEtGEhmWs13tYoBM8mAY64ERB2wPkPGexLtuWox7Yn6MGXDA1oRUjfKXHWYT5PsZYVdiNvuYGzUe5Z",
  "key2": "HwG3p8Dga2HRKEwFx6QM2JSxotmZziTdjpipipzQMxnk5zf6XD8zj5SZYhjBUNprEFnhWD1PxbifVMYT9QKH2Wk",
  "key3": "5tXownkcfACNABtccdvifqYZSui38dAFGXH2GpB5D3GQZSymViuTFtfmeQDgmVPt8X9UcFn3mdtctrCQkQ8Asbfx",
  "key4": "44Y8TZasGcqsDpnLgibnJF3BQswRx9Aj3i36nWPYVFbm2g9FbkipYcSUYN6dpzLV2mo9UrdCNUvSXjLV46HyKHPt",
  "key5": "2tazYUipeP6Yofk4ZtfFrzJkUj3ZDuVxnJuAdVWJ81hmecrp9Dh6AChZx5z8L4BnjdsC3TDH2aqsWHbFT2CuNG7V",
  "key6": "3sDWdYb2s41emtcFB2Sou4iNfEWDPe8nDyMqFwQE8NFtvF1BSc2WTFTbjZzLbJgA8w3ty1NZ6ceDQYFU7nMbNV13",
  "key7": "2LkjptKh6TjEgpFX3agQ5yYNSL9NrWpr4VrmFpJbvWBKhGs2NSVjVmTucEJmcYPnfPCCQdHimGPJ3fKL2zjR5LFG",
  "key8": "4r86ooyxUUoYco8QHJdzUtgMXYzu2dvuANm9hcGadQ9SVaDuZvv56gwUQ5MHfLejcscwCXo2Kd17F89KdLZNcVta",
  "key9": "5Ax9n5CuWsauiZhgULBWGvuFaLFcAgKBmRQ8iWm1Qk4dKLf9hGkziadMSGaFJsLYzTb4dAYKpAGyBNj5Ye2AyqdE",
  "key10": "4xAvHhg1RpLe79ZmhS59vK7xFrpcoNhD8vxRqxH4wAUMuxFJC39RvNA4aC824UB1g83pBEgzEfyVutwbk2CpEm1V",
  "key11": "3v6jXF8y9A5x5hN3LofnhNKraJzQSwJYXcwD2dL6P2zKfNMKff3gbaFEXJiN4wy8oMQVGbLH3gT6XdWgaWXjCaFi",
  "key12": "53r1JLBm7maEjhDKCjbAK1eGEGbevDPz3xzQEB965kNj47F1zkAGQ4FTY6vmdnzsBCmWNyzMQzD6FFSVFf9CUy6r",
  "key13": "4vRApSdZN1E52rYz3WQtcdxKLXVRueyrKwPDM6CVj1RBjxvfb2XRPKaL6rRGoFzeTkcBHynro2cadLGMe14WTZuG",
  "key14": "5y82xiSig4pVerWsua5UA9xwAjKNNUYxPYjDstTFikmbJgtJnzdcyDM4h36eFxTRj4zTH5EU6YQxt8eaSzmL93VK",
  "key15": "2dXUReyK3BrTWbHQH75VSK3M62VWiiwNkMiz3UX75fqNZzwAYSFLrCiBWgAHbCBc4nLNi2RcWaMYGJu9ACfkKLao",
  "key16": "3cgkRVtnE1iWsweCXcNXv9HpmmgAC7bkeQvA5R5sVXcdTWJ82phy4owPBBohrnFDJFCoE3kw8cPrYrT8UAZcL8Xb",
  "key17": "4sBpdLzEwBdcycM5CGhyQTuYPUkP1PH5NPsFHD3i8wCt4SwUjSFMKWcn7jnisgkfpyFeVVFM4T5L3VdhEATqiCcF",
  "key18": "2Vdk89V7A6u8zQnmmfwJHPnaHQnLA5TSMW1hopSWsJREW439CNHvAY22baVkE1WsZwkkpWMaLtexmWrsbh2WhvMW",
  "key19": "28SsGtM8XMBZ34S8trqUaynJVSkzwsV4GfuKhKwyBqEjcaRqBN2kBWxn26CbssxTTe8FVxRfhiCMPDwTBAa6BZPD",
  "key20": "3DF8pX4T2r1pS4USiF1XGCyPnRRR52rrPmjwCsnCZ5DLStN86FnbKnK6masjcFrNNPU2VxAe2KWAhbNcEc42Verg",
  "key21": "5nCsksWg1T9UJJN47LpDGzVSxrU9Lrem1xxram9yZVK5KDaZot5maBsYtEZi7e1jDwmmpXFFVdHoTo91gMYwjftR",
  "key22": "2SWV17wViL5JseFydmHPfK2HFb7ecGRiDEomJbX8pujzbWfm4dnXm5v5bpHi9T54RH6F88dxvZooFemd4vr9rLD5",
  "key23": "2zNHXJ9bkJfbzDjWaWMQSsmCNBPJaJEHhHiWbRUZNCYU721JRkJpGsASkKhu1HKjJ4YJn2wJwbyJUGxrYqfnKWyy",
  "key24": "3Dxg9P7WUdNGMsZe7PXX13x2t9uiiJYkX5PbCW7RKJdi2pGx7PFJsm8dHrA9pgno75hhQwSCjj4XfGXJerCSuezv",
  "key25": "5z7t4x1g4dJQdrT228GLvFUmKHpPTYGrS4omWR1QfuFZyHotgwDRNCNM4fmRK1k1dC2ZWB9RjzgTUvwPe8XFbx4J",
  "key26": "SYbbiL5UhkPnwGoHj6Kmdw9oRb7mSpXtmYNGtRpSs8XiPSzbPQmej4roxD9KsLGkW9JjG8ZudD9ByEkXayaq79a",
  "key27": "4sbdmD8w7roib9ydniLMq4oHjHPzbQxVtFbFfc8v3SRaEHierhsc5HjS77LV1EhVh3hcBziWhrUgH6Wac7Y8gn3f",
  "key28": "55Af39vtmuWEYyit8pm4Pu1YimT2oJYJqcHm1EGrChKuk7EBJeyJyReDDpA7MR9GR9ofgx9WRpsxCGGpLtQkFMYT",
  "key29": "4mzBNQDoUj7WmogG9jXGR6nqkqqnDg473xPKPJRnkxkZnqktGcTixp4x68ovBSNgsQyEAFrgMhr8bA4dMMnZiap",
  "key30": "5QKRQLb44qaqoLaPskKSN5kNRJbebKSqFz7NpqJyedYjJLmELaVhN9kuSqKq5eNe98xeiMwvgcZU6iksx1Tdtieb",
  "key31": "3csPuBJnaoEuWSCZeA99WBaUoBfPkSuhaozx47a8ruKmFt9Le5fo7fL84kVM2ZZsMf6ToWxjnUhh3hy2Xr3Q8zDz",
  "key32": "2nzBQiJUba4SVd413UbEVxdzH4UbKzCA8qoVEEDqUPhEnPhBrpM4UTXhEf4SWMUgRuz922A3vcFxYWmmZQKGRyqX",
  "key33": "5f19QZMVjQ8xBSR9x78BBAyAdZ4bkFc42fqYCdWiyVv7LVigSCTF796QfRc4cKvPBW9UWA6j79fhXYsjJPq6Cvip",
  "key34": "4mnM9GoFN1FrKLB8VciqXR4zSxLmArA6XEJucdS4xN4e9dPeVqGa3i3GFTC3g9vpTAjksNUvNb4Fju7Z8ogqeQqP",
  "key35": "TwzUAy32ifawbjPxaSRhLuCGgjKBAbnz89GWiQbtq3hwLSqwdL2iCr7b6SdJcc2Ls6kbXuXoPFMNPwxa7jTQcAA",
  "key36": "55Kck9eamgm2zMnqx23eJEuSeZ4LKkvswzTEJ51oJVcbLedJJ8Bz5Krs6BdC5uic43cvKNYZU4JYCkBgXVTB4aZK",
  "key37": "47f8a51Coka6t513pdXD1CruhTdTD5rZytXUoejdTmhf4RapiWNfEFU6mX7Gyk2vSUvQVuihpZVymWas55peX1ss",
  "key38": "45ULhzVLgPZ21cjJWjf6yvxVxWNQcVsLdM5u6Vh2wcqgbuBp6f6oJLyLU82HweKKSuFcqHCpPLkDnmQ88oF4Bi9D",
  "key39": "66U9FGd3Lncc5Ap9avj9e2GaScZTSLFBjhsrQna1Yda4Aer3KzfFANRdrMX1J1DX3fMAFVu52mZV1B5xor1jLjdQ",
  "key40": "4Xqn6UePS9hAC2aUbsu5zj8cdbSUCH5zdjLQSFFyWGTzFPMLupYYydoHeivAtPfeEpv1JzrTmKaqkVhE4CEiwpfG",
  "key41": "5rK32341GsAWCmoVpruwkkNSXPPxih7M5VyebhL3ZdnXBTEgb66UAfMaNLtExgbXNgLBWZ6nQT2QdYP2W4taJFgw",
  "key42": "3CFuKQxNys3Pk1FESJkVftuPomEK85GjqFsPxQPJNq4ju99wxciiFs3SHATYR7wykfUnAtaE5bxsViu8kqwtv58D",
  "key43": "cWK2j9xzMAJrgc98jHCB2Ktz4FYGmdR1kjtLw7x7DzKz93czKv5CPYTohcG9aEup4tARmamV1WipLqSBqjCtcNw",
  "key44": "hSEkR35R6LMTjSQ6ekJZezifvQrbdq49YPiyPYmUgu4CzqAji81LJsbn215UDFH2oVcVirXo3s8czUzqaUiZ7s3",
  "key45": "5wt2xwzcEEqzznkZPxK9GN5HvpGv7KmTnjyqhKFfQtXGHd4v7hCzE27V6D5ZmNhgBxCM2FBWAoXsScTq9VekN63J"
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
