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
    "gKiZF4feDmMo1oFfLgAWiSqcwhosFUKqszsH68kYDpjnWAeUyt8RLzZSAmxkyb6FJ6YShAbnbttS5ixuPe44ouG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vi7bpTr3f4d21v2ZGZninJC1pdzDprRTBGgxoUXesdP4wGWqskHsTUpb8khX8m4eoHtXv3ahrzGrY6uJyRANoGx",
  "key1": "5qFuTrGP5HiV1QaUgajZf7bpn99ySmw7ip7WhvjCPm7eFK3WJXsdEn4LAP4nRX11pZMf7cH5VQjoPVVrdU7pBx27",
  "key2": "5qUJdMkNn7R2uYDxmMTKwuTnQVSBnbnbr6hhcSwCM5N8NJB3YvAnvrqLV8V336X8T4qkiLEt53gWG8TTayDwXRz8",
  "key3": "d2i4YCwJNU3YSQsZ4wD1LEcaAr6qCVKaj63xZ6bUVC9Quz8eyFXJB5g5gUsURdiJQxueDkrtVjxCz9u3ZWU72Ka",
  "key4": "WqLi2p8Ru1ioDg5wC3yzpoHDMG2DJHUX1qUjcwvyYo8vtDib7fX9WrqdwdG2MPeqWVF1hBeukJrn9tH7rMZJoZA",
  "key5": "3VQJzqqL9pX6m4LnQbr7ix82vGub2qLADToqqiDgkoHTEydDdifHRMCfHMTNj5vQdui4HiKLkEZ7MapeY6g1stRr",
  "key6": "4wDFu98QwP1YgmNMuiHBt2bmxvDDdLaq3XqGGfRFms57xTc7Pxfy1spjycHAc9xVmVkWiVP1RkgkhMvAau4xQr8A",
  "key7": "bfEbLzT7NxUdtXQrHfedbbXe7UxQmrBKrsEbLCmQjyiUa7TzMgUrjYSzhGjCwYMBFYGEDTBuFmj7hhvMvKTJoNE",
  "key8": "3JjhevDoE3a94JeK8q3g3kwd7cj4jrY6uzcfuC2ggfy7QryuYYPmhFrouEvEXpw5cwUKfdjFUzGcV7KzQ8fazjuv",
  "key9": "G7kcvrTNkoLsybN6rn2dwdp36wTq9adJNrnPSucYmoTDEKFWdS4HAH7vELevYC6Xx72WfMbyYiKXNqTmw2qhYgU",
  "key10": "3UsdS4JrGFv84BwuZo2dEoXcuDvj1qGan83rWnfUC822HZVpeN6Mz6g129V9MuMjqqrVHHj8MqZNTFBivYCqWmyb",
  "key11": "5QXhJgS32faRz4tE3iuDTJY6w11VqaYRtTZkSnPnii6xHymxTkVbhekdajPMPvFPtU94Zox7e1vEmAUYnd5CNc97",
  "key12": "gDVJo1Vb7rFff4BnuFnUbaMTYtnJ9KCo3WjQPkAsvcB7o3beifDxaLHKejnUUnTY71P3sKaQ5nhvg7Z4Q9k7EzZ",
  "key13": "4KV8UdxQ9Vo5thcATurcAZqp1AY7jPwiq8jGYVwwwQSUUgopDa9qCZmvqt7qWDeSwfCePSvFjTyidW4kTbbTcVAn",
  "key14": "4NowiRZuSYP7Chad7dcCKuWggXnp72SSQ8zmzaa29ztwk7RcyzF7XqUFUzFUFSS1x6GZRwXWty7rjYjH1n4AFybL",
  "key15": "2P4gc9HrRn5k9fks6K7y7AKZbmkRRcAyiyNn5MhfQmu6b47tWcMkFyEerJknuZYh7TUuE9sNChgekmXoBpEXRDB3",
  "key16": "ozHEKEAQo2zYBq7KAY8u2YcSS5RDpPWpuFuYS8hRbRLJ4MW8gEfqavx3DR3XDjgWEqZzk7ooaVBBfpXYwPJ9ynS",
  "key17": "59geUHabSV8CmemsmKYhuvANABAyDVYJJ7RBQSNEUv7vk13E8gbfFDuD2zRV3YXH28PmCmKzaZyTh6Tdc4Q8Q7iK",
  "key18": "5yUmdAS6iqr23Qgg6iZgaUSKV7sQTTp2DKeUjLg4JebC6RDRPennmuoQav5tjpa5VAebn7Wxp7JiENkZVy62LbPW",
  "key19": "dQKnbeaGifUywQy2DNYZKhfEmF3zNeA9MdbM18vaakfayvEPZfJYaxdyKJEAkHG74RjhJMvyqTwPD9zbF33rzUF",
  "key20": "38AstBR5JhjkYEJHWF61DJcDgH5fuZH4v9GmAthSj3JSvWQs124mKkWoHCfgQJEzTWfqg3KwgGTTZ7JAkbBcATK3",
  "key21": "3hywb4drLbEUDrqsH6ZZsrmPJeWhBikK2626BpVK6nWWyPypAZG8YbFuAQN6Cdcs26dFGoMEKSvSnw73HW5MWEz7",
  "key22": "534FGYkquqnGRu3AWxyfF9eVZiHFUmjJUg56yDXqheaRrsmhcvp6oVk9Tkb1vTmv199jQKKiy7jUYUutsJuiRent",
  "key23": "2coGDovTXF6cTQdYWbijW9Tv8AT1b3n4d6Ytx9yym457mvqfFwrT1mSPMy45mvvc3wQiVAviUiF7fZV4R4MaJZjs",
  "key24": "5erMjnWQ1GJtsyvdTnnNG74Hm184TEkGvhMvjCsVa4WgmuMDFMCDSsfhgEdV4FLcntz7eQ4q14owpTKD5ghX8tVp",
  "key25": "3JFfUUp6TF1qAkpwqEd2ZukGQxX7MJicDv86PddKzhGB7ZFxGgauJRbKkTfzasW5YhdfDygfc1NFhrQn11BjJ1VS",
  "key26": "5HF9NWd2WhMYdBWrfWDLWpeG88AsDUt2P9ZjRSrPhnfdmMqcYDHWtbYvTZRvsXPuhXHnFpZGp7ht41QCewtbtoq4",
  "key27": "53HZzR2ZbSKapfZKk9xVoSiT37S1UQimJohQGRF4GGW3jJtu8eDSHARypjLFQ4hDt8PoruBQ7XmuWpovFs173wrB",
  "key28": "3s7CZ9noQWTbeBXtGG6N5d7TC7wGxD35qXjeXSgKf2XxzB4NeyKLAa9uy1VDaqWmqk337wgKe1qCr6Kyq9JFR6Dn",
  "key29": "6NodjjCNWqm1LuBSS5Wq4cx9jobE4CvdbKfAKy16yno6ni9KTK6MPGD2BUBEmdeF9G6iXJ43VYCBi6jFCdcRLVg",
  "key30": "4UsSt93LpKPR94PN5xfyeZhmtJtz28BQvbGLWA2G7yPzNBdkv9LJ1vbFLwANnrdQN4eVcrHant8M7rT9Rrb8NUQK",
  "key31": "2G1GoougDke1bbDPaStNxT2Vk7ksMjy4cV2aFAgRwZSXbe3YKza8RqJMd26ePTjipywwyrRX66di5CMieSNpATM6",
  "key32": "5FLz25R2hwCgf6y9drzpU6neYJWRLr9yMRFWGVBnEBscnZeSeP7R3JGLJX4P1jVT1juTFR598U4afmyZargr7XW4",
  "key33": "A3GmHNnCvY7skAPd1EUFaDRcojjEvWNEefWxqDSsumB4WZNjv3PMSdq2jPPc4cmrQeVskaD4cdC3Zj8yVqzoZeV",
  "key34": "5XVcNF8b1tqaR8Qoyt8wdRXNHVPUQruj6xBqkk6dGTLKniSYXuZ7YWKE76BxxToTvMCo4RT31t3E1B8rD2DoT6L9",
  "key35": "yNgzUDRvMjyErix4ZKzrAz2p9yGJ2istwDUfZVJXj1MntoPXe4K9aYcXYsZLqqMBaJhjg9QjWdenGuQFri2WgA8",
  "key36": "2RGEV7TLbXUBgY2EXLDCx9NFCX2ZMxXs8Zfd8Xd6h8NHfEv2cP7fc9cReSqpC6cTb4NyFnPJk83MB5d24fK4qw4a",
  "key37": "3gpCR3PTNjZArMDq96LXcqTEA4xxp71YFni1vD93KTpogMVDdNaWzkhKjaxeshG5tbXNyRqD3RuEUqPHUoPzJd6t",
  "key38": "3L5BHrD6a2uPqjzs5WVdst3Tawm9Lh5xtUg17MDZMJcoFfzMVBc7KYExpbouJSMacHVJ1Fk6dvoE3U2PY33RXLwa",
  "key39": "MZj8xhbBp9bNJv7az4u35Mo21UNqZEtLuw4cnqSaiPsy6Re3sQZN2WMgy1jnM3hD8WsKc6y9TsgXKTPTaQWRGcC",
  "key40": "3xTEz5uPJ7ap8WYoDkB3Ls1WLHhTztyK34DS5XB7VY9uR4U3e9EJL2EhoxWa4EdPCqycJEKdm1yrnrjTnugroCVC",
  "key41": "5t3Co2BX3TuzitZv7rs7sXH6qhnsniVTtQwvvXt1MvXKFKWjWe8PZAEpHbgVjcU3uj4H4qEsycWjWvQkxJ2LAtEE",
  "key42": "qjTpFJP1N7RKXzofsZVmKiUmd6dtcRRXFY4JnM9gbHRMP9uZcqPLqDNbKMCbjTXEc63XPXiZFWrAaaf9og8JsqP",
  "key43": "1CGVSQZVWDD6Km6xEtJy13wXL36JHXAfNXrMHrbwURTiTTKScKxosRLxTcp8fj4Q3HxgLnBFodyxrz9m8zxA65k",
  "key44": "64eWcRF9bcTkksGvdQRpceH3uCDHPEER2xgEk7dLkMaoQ5DnprahFNg11W6UBJrXGVEAwH7ksWWDQdVhsFvak57w",
  "key45": "7QQ8pB88eZ3s4RBsJRRHxtpJwHdY4qvsspjbiMtZqKYt3WDM6yxZgv5yCox6uZMimHFPjHKrZ8TVWFxsnJM6gnH",
  "key46": "2MgcwiBBoYADvvE9s6R4BkKC92AnA79rGGkjGVaMBjVxcR51YbSq581huf2iranfLUz14Xc2DcDEdmYSNPhdiEs4",
  "key47": "nHLigcb69ka24P1oGKk6QBLh1MDtmqzSaeyW3jNtVknM5DJUsuch4cpGRJMJmHMW9w6XtdnJH7c9kNB4govAQz3",
  "key48": "3sL397XXyqRenzLMUduAcHRA7fuPTUJi1no6PAsRfkxoPXV1yBzEdEn96CasKVcaysA8jkdBdBnK4iv2AhbJJWSr"
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
