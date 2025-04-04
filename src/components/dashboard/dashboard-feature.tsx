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
    "3ZjxizvPBHpEy5AYfCpAWQWDFFv2URdo9mjscAJPrDZ8m59vNgGiYyHL2wFPDmJyerWYBuDhQsozAYv4H27UZPrS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DyYnM3nGRjymtdp5Rv5Y6Mce5rJVLP5fYKpD9fMJFEBrQV426TjWzteSnq2ugVagTeed5oEs6iQUErppwprx1ck",
  "key1": "3PxBz7Capjjr8tzTQs8yvLyv362xBrVonRqtyaF9bkeVtTuJwbSzu9ovuJgUZnywXN3LZBrRaLuvhthHQFMb6YfJ",
  "key2": "585e2qWB4ayHQuL3SpaKDQm6371F1rBvmKZYQZr6gMx5PwZUhCh6UoZuSXb77EWuYPPc3TMhfbgMJCPCMLYyiR6t",
  "key3": "28eRDym76kB2dBoX7ZZcnaTgdJagmRm7tcpbiPTy5f2xawcLHQY815BfcAxi1FpSB8NSGzbgXKoLhv9Pmy7gydjS",
  "key4": "2mVN1kGd6CByJQAxT2ZQLpSUTXC4mtkXfhvnuC9AcRE3zfZGbvEz8pKv4FhknkBeZCcEoZPdDSd4LywBfmJTzKA8",
  "key5": "3UaBDydpfuafTy5PAyEFrLqMdaM3NZPpUXSR9Sy46xCuzXiJNub3dvL6iFThHUhaWBh4BPUWdYTzWC1xsDftwGbN",
  "key6": "3zrZ9rRjcJJ9K5hxk25v6WUgBrfBySpW1ExRVMR6Rmz9MbwWXifU5mNmWD2A6miuanrvWZ1yCUZ3DwCKsa9EJK2y",
  "key7": "gxBr2FFQG8JNPKuZBYMeiJrCbYjXECYQBZqmJTvkwMJ1me5bYau74nVoJ53Xb3d6uSDqggcddRDp62wKRD2kq28",
  "key8": "49beLhi93bC9FgG8ZiD7NhjzFHsrp3xCye9ptVSvAyxw5FPrj67YTrFWXHU12vrPWDbp66F6mTirRm2bmWxsvFX5",
  "key9": "2SHUPgHHp2oYFkmR9n8W2CQy8tweQXqsLEXNa3CBB1aUD3EQFhSGsGJ5LFDUentRMDmVbJynQHpMoSrXcf8G7oQM",
  "key10": "kjTjej43H2ZgRw9KsY7Zz5wgaatVWJswbmJCPukYYi6ME3TB3DPDPMgnBdFq42F3ZSSdr11Suo6XL68GbRVrhqa",
  "key11": "3H12AMQGP44J193PKqwUT1j4QWPDoB9Mhbu3RQaRUyoMwVZWYEHsE8Zvm8a1QyCFtvtep58TuHBkPV4rU83owHAS",
  "key12": "3Tx2Lo5Zh8iVeXGbsp8tjhtjfiuQemckmaqiyEa3U7hVcQ8urnfveJa6AcsCvdxJPwQpG7ayz8bbY7YKrx8GVHH8",
  "key13": "gJxgvGQiKtQo3REZf1WA8x5LFXMRidKfVrUQ4tUZBQEB8rvhvdqdsCPhpi1iR5Qna7HaUCkhgbuRKD4bEcXMee1",
  "key14": "mkFJvGMAgPAAb4uMBTEdAvnu9nq6km5W9uxm87sGGgKhtJzVdoMVgiBq8QEgRCp8XHe4zKLr7PQgeaMeT4ymhjk",
  "key15": "4qLdAEhFJySRhMo7P9h7P69S91284HdWcpRD8gPqg9RehJP8YajxyJ8z79hnoXtb8FH1fGwmH6vfidGERAvuRhhV",
  "key16": "66jiHq9uc12yyhgqXATrJis5MxwJTPV2X27nn5pgpfisjjtbwnuwrJiy5QvaN67rGWSVJFfwdMtnJ2MdXZXa8QQT",
  "key17": "2ZuJd7jJ7rpvtwnvYFzT5LZgDvcRkaQXvR7kf8BmfuAko6qCJUKSQy3ACwNqh6KkeXwoV18qa3CGon63eQMFh9yo",
  "key18": "4apXqj61LBgJW9mR9VFdyiAj2F2oYjHgVv34mP2NH5DicHyAx9ApMFMYzq5uktWgR4MjXqij8Rjv89NEMAm7N26c",
  "key19": "45dkqZgaMf5x58hfB4vpjU3yuTTw4QCCdtsFoiwJru5jGH8EQxYyfuDSyWFxLN1B7azRU8RFdbaZPGrziHGr6AaW",
  "key20": "3S4XXGPabd77UVuTGRoRXPQQmGgdEkSToWdiCDqoRYFEq8EDSvbDjhkzotyvtT1Hd3YueK36KUYXatjYDj3ctP8c",
  "key21": "d6YAJTRvGCip4fSGFLBZX6wvuS8pqycdUJuTa48GwmaiUWxYkMwsngLsgjinNY6dsZJTkJvFXmKAox4qh1tNFS1",
  "key22": "28hhgHH7WBZEXBwrCq6sduya4rarLd3qU6dKcoRRZ9tL1GwbEiyeqAAJoToBwGrbSF7vceFnhU2RD6cuyk8c6C3H",
  "key23": "5ScyDo5SqbnLy9gjYN9ARShHNWPNckVxBVMtgHmAAEFoYBxthR8c54Yp2i5xzRZqSs6rQB8Xf8wwctveRQjyc9vE",
  "key24": "85nM8rUU26UxEEuCub8cFkwDnd49KoeGdSVJ9m74Wr8vQVkerc1i4QcS4x33ocZDCKHpeoh8nw2cwnkC6MrtaFe",
  "key25": "47Az1egp5o2S1MD5R6A1DmBDWdmpYPES3u968hWu4VGi3cwMypM359zvV2mQPeojNXz1K4Mzk2DzgYeknp5hiD7",
  "key26": "vTb5gcRjNWKsNK1hsSJhPFryDv7Cekh8oEn9ZkuK4s3ZoVHrs9Q9WAgb2ji93mATrcybg8ugnUGitfbKhS2qzNr",
  "key27": "2Z3NsjD213b9ErEAUqZzChVjUcBLowyqfMZUv2QEGsj9PECEJdz4KmCjCdF7nL42VYpPQMLSK3Cw4FWgEZmj3LvN",
  "key28": "3hVYVymDL7Lm24ja4g8cDPcpARQPHZYBzW5ZFxuhZLzKQYJc6y5EpNxDaiyTAYLxT8Xpp1Pun1VrPJ8huxAWzrHN",
  "key29": "3HdUvn5XBsUbDn3vuxgbAJTfsScHToFP7fv57WNuaEdpTtzHm4aZqFtgjZAThhuymmmv1j3WCGw3Vxh9vbuCBqGV",
  "key30": "4CSLhad2oqz4sAj7BBDGcjL1pE9du1NH3AEa83vtUW2h9TC4qWskQ342QjgUurHWEzQuCbdLJYtwpngqoTFBsDdz",
  "key31": "3NWarUHi9fBrTKvDTJQaK2AYsyQLiUAnsKsDSxgfFhKrXsAabWP3P8PNGB4LewcycRkEo1Jn1nfM9syh8fy31At9",
  "key32": "3mWf5gLXwKLu8SU9ubitiM3gAFcrFRm2Tsp4p6dkAsjZSP5izhNh6uAbhCU1XmaJVF2GyGv5XTZaPtfgdXi1dnkR",
  "key33": "48hnYTKYUXpiamc3T5QkkRhwvXygaSZAD8dH4MF3My7F1DPw2h6SCTp9WTXDnp8nwCZvjBwZdKavbAW4375DyRbW",
  "key34": "2gGoNK6Tto4TptefAhCBNwRqB7MyDhaLMDD6NFX456cUgnvZ8q4CyVCWndpGXQNBcfQVeQoZWj1N2diNcoJoHJKA",
  "key35": "v77EnzcJLNFwAhhMeLLtL1N5Jqo9TuKWAkci6A781vRgr2MUqMUrVgVGRBodscvcsB67xn3xGu9PZ3DCYg15bU9",
  "key36": "52G95dkybcGvju8noS3us2yu4phMXav1FwMJzjiHGqrfEPu19dVga94Khzo3AeHasfjrE9x6ChjDfpPHFivoL6cW",
  "key37": "JVjXuQz1KV4hWiYuWGyYVF4CX9MtYAkMncc4pJUPeJsT4zr6Cog4ScC3P76g9RcDQusjjYnSP7vvHhitEJJfXot",
  "key38": "muTDvZiVSck1UdHGPk9SzgunGqwSMsMUw7MhszEBU9dxeFgUjSsdWxPLKPggDTmcxGiVwaADb33rjc6KGtnfudD",
  "key39": "47MHKZjTahviKDdaL5yqL5KwH3syuuWMbNuYJzic6ErwyErJJpptBgjYvKa4gK5NjXZdF2nrXQQis29eaHEx6KsM",
  "key40": "tK74iH4NeHG3U4tHPjPSYT9pQaHdK4xy9hq891HjBgbQXBvE5UCrFd3HD9iCFKiH6afJGSe5RdQ4WUcY5iAwEfW",
  "key41": "j9qoHYKjgnUYzCx89XpwL2KMja6gRPXbW3Xy8KBLbRhu5t3yNDHDtk8xjqxK1yABpjHFu6eQQ11Bw8HQ4voxmA3",
  "key42": "2VJVpbpLr8qrqYRkyfygt5q6vtX1AZFGH1WSwAhXFEo17QABUPTosQuwhQ6QckXpxeN6rSQTz1K45BUDiVPoCwWM",
  "key43": "5emEJCXo562x3yh2wxwKenU7JakS1WW8dgb4oDZEnEmE9UuQhaG69CYFWQZ6M9Py6ZjQXiD8hzro8rWwNip3QpAx",
  "key44": "4NBwDT5fEbWyBCFCyDvPvg2kqjSdjtDHSPh7KAFJAYEoyubXhHJGQHpnxVyTFidzHTKjWMG5FSkh4UrzKPEMwvY5",
  "key45": "5B2p1qHKdUmU68t9a1RvLfaCswv44XQH2oYR6ma5GgN9R3xEaSL6EUcnBTgC3UnJ4wpNb6SPn6Fk9GvHFHM5LXYA",
  "key46": "5eMFNwEZ2Ns6aUD1ZrA5MQuX7D7PsfrGjUwFRMw6NhFL2cY6wHrCAS7PCWNzNAP6V1VyMhW86ohvwt8iV1RZ4TrU",
  "key47": "LWFYJqEcT1ohGmuczqkYVL8c53NBzjkDu9VWzPg96vgQz6RA443DNkFhaSztyP63sSc5TEpQnVxaFq7ME7cAfT7",
  "key48": "2KhFRfE6jybCa1mRGCnjn5zDHW8tuQUjTbyf8jVfV96fRZfeTYw31mVE7Q9LPsNUZpeV87pxiSiQ3PPaAhrWm5La",
  "key49": "5xzntqEEouuJsX5kw1Q452S7fqPE183iKeRRgPrm8Zkn8RP6ngG7nUgPjnmoV9fSjBKrftv5pksa9o8HcPXBidRE"
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
