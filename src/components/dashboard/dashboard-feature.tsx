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
    "56UpCTh4aScEAdNepkn52Ud4S1cYStHfRBcPh5c7Fvu1jDrDSMuemnNAXxrJhNnDKUhAU5wkq9SHQEYytSTCv458"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CLDSdDd69HpaHsfds1RFeZFbjmqpgZ5L2Jo4ko6MbGFzDtKKEZNxDTjSckmjrPZ7n7a99CNE9S31b9qABMXcY6",
  "key1": "4vzCL1wxtYg4YBTCwrD8VRsj7U8bQr3D5ovyNqSej4MkDXu6vweJp8XSqVFWKWRaUHopoAmUf7R6WyEW73Ea1XXM",
  "key2": "4mjKUG746XBaDqmpDzGVCy5hyMaU5oiufhLX68zEXsaDXr8LVEU2A4SxhB3VYAc23JMaMRkXRtveRzPyCXiTcs34",
  "key3": "5LkA1vhh8a26WbqFbd4cFV4Ue1ArXgygCABV3KAYd89xv1dyrcCBHcxsrDRFj4jU9S5dz1mi1LXChizut4wAL9ZX",
  "key4": "oqps9Wpv2JXaC8vKwpRbNqeFMQMKCNrkXPjki7Vzrr3hMFa1Fsn6W2KkkWPGYur9DxHkkyF4hkTav6gdU8vkG6E",
  "key5": "5hAcZhwV8RW9KBsnawVBe5JoTGfKdt8LeVZHg8h5StdihYMFm6ncnsK6BwoLA95jdUaShTm9QUqrTLX1Ka8e6W34",
  "key6": "2XwHfDuTrw2e4zsCxYBjF9LvbhxUfSmmobjhyw8AFAnG8z9tp7tLTATCxm7cnCnGZi55UmYuF5LS8jkrjwXw5XZi",
  "key7": "21jBCRcBbSvEpjeJ86LGrQaEjrzZBZ3yWt5BcPTpymzykwLNPcqYx9bYBDQUtKLFvJhzjjky1tbkWBmp9gc1RHqo",
  "key8": "59avf4WjGwdqGBfro2XV9EYfDiMheoN9p91BsSmjvaCqcdapqS9E7nQjJDdcSmaxrkHQmDBnTsbrqN3VCXpxJnf2",
  "key9": "4EHnWCndpjE1nMouyshNQjNDDM6TuUZ7kr7MrbhmzUwB5iTdD7ro2tstJNPgmxZ1u2ebvNKTJLbDoqJV6Q1489xU",
  "key10": "B2zNJY2odPUFmQt9AuKGwv2SmAbEz57Zp3jQ5H2zuAD374q2eCfZcDE82rvLfPVVTezHtqRc7E5FxyVdRnKPBNS",
  "key11": "4zxtdCSzyk5QNJsvmgUvo5W8vRQkBU28CtFkQtbhfBj1Lqq5fc6hFAwk4vAbdHR1ey5GVEH1kSoCSQnctzCU3dFj",
  "key12": "3PX9yC33NHe43xkAHBgw9Y1ogCc5YQSecvHLGu9eQJ35HruHn3KoEJVn2Db3S9ghVBagN7bVXnyKwDX5UoTagABr",
  "key13": "4SzfezzsLzFzv4hXvx4RGUKrqt421YobMaG7BY5KHk5coRv93TGErqiNqQH2mpX65TAPb4WUabrMRwJN2wjKdXod",
  "key14": "45DqSKnweyDVfg26jGqLdsj2z4EdLzjqqmzzLWZWW7BbM5DZ6KiEHBhDvFU1iXk5bUUxo5q1qUk61j5szMFcAXSe",
  "key15": "9JxdpUN4cXnxZCeKBqqK1onEj5jWLf868HdUFqdY4whoKH3EDAGkdzcAEAMUnYX8LyJCbDKfe5kapsrhnNMJAyp",
  "key16": "XdFmWspjAAranfVb8DBPhMA3KQRSzSFU7kxYrGuD7F47Z8pSVi9f53vB5oEZF9K5dzfYRAeUwm5Fkv5nE3DuRTB",
  "key17": "4xeQE9bkhY7kxkZHvWX1H21LN7vP3RUEbtvZgKabUnmazZUZVaaTVyo8D8hMMzGKU25Nmzkiwy33yrCGKftCgRkP",
  "key18": "5xWvN9n6335LGwBQbGt9rjFGfi5FC53m7QUEa3ux4BSCdTicEdv8xtq41XLm98PogtuJFvUkbMmf8DvswR1UryeS",
  "key19": "4Xf6e6Qv2dHScK7w5CafcgoppQmBmx7XeWRdgqYyqfge4c75VB9usVzZu9zLmq5MXFnDjHsVKBtZW6vdH6KAqpwt",
  "key20": "2vzmfr3TBD5U2owHXGUkoPZ9U1Ajm7XndPFDSnVGNDE7BdL4mBbd42hTddZPF1dpwBfktaCpJz4YX7UhzywFASMr",
  "key21": "4VPsgMUSBbEmz5a9rNJDUK7T7VRy6BfcuodbzgWZEzuR1ovdQso5jSSRMnWZi3xW9XQRifn5g7jfpVJFRPR3eq5c",
  "key22": "4ZXEQrizQhB7Fyz7sdVmGWBkUvYeGt31J1DESDyNU3tHrK8mYYSDKd5vyXFAwj52KReeofiThorQdVtWSXRE2gxj",
  "key23": "yVKiatziKrfzx5Bxstmc4axdVAywEoo5zUCQUEQZLBfYgWqLdZzrkjHKAeBJwVpcuHrtCNcyBkfXhea1eDgESc6",
  "key24": "4M5yaceB6weijXov1TEPhuWwfCRAYcNkDeZDBiAKUwmWVV1P8tHCgGJXqZY2cHFezbksf9ui4Y7taQZGNz6KSNUo",
  "key25": "5qhvPbnVtmjWAUGUVBwdmdbk4R6uDFdLqghe9uonk6V5DE8AhHUW9LU84bZJ7TNjLtqnfg6wS2qffTwTWR5L9QVW",
  "key26": "2v4xK73sMqai1zNSYr34DfYuh3D8cfE9eiUaJwJfad3XdF65Zj3rkdQc4aJZfeA3o8i6cHS8iFJFD1AQJ8pArVh3",
  "key27": "64NqGvJnxvbeU21bzqCMUXD13B7GENxWTxLdZCkVETJUq8372yfLjMsauLJLaqtcTyyNj85GPemmnDYZg2JfddpT",
  "key28": "4Cgx828VzjQWrjnzx1Gg6GfUMDck4eNbUnNLJM3fCzrCcp7VnkRdcBUtsVg9PVZVQuQbfCQ4DJdXy2Qhb9uug8jK",
  "key29": "4kvA1uGhGrBEW6dpbtMwnXM2hci3eD2ri8bz5UvH2zFsbUUh6f6Js8tVKdbBGGL2toBckjhav2kkewv6576epuri",
  "key30": "3a8mYxhR52tBcPS5WSh92rK8iXtGK5EmjFZrtsaP8wb67eyh619dtaVy1YEqaikcP6tSYyuTYiEBerjs4sNrR2D2",
  "key31": "4ZNcGjSQsSgk7nhZKkY2LBhupfs6DTJ6uz9MmznahEccbxLq5gwgG8Mhkpto4AMXLNbFR7NPnpDMeq1QVBm8XL3R",
  "key32": "24wKV5d8Z86ndzTmBjxuoPGGZyR3tLVDMVS14GbxWJDtagHz2ZgwXzRB6TAYP3pVr4nKgR83f5Zg2cwN2iE3V1Qm",
  "key33": "3HynFJWTznCY96AtbaPcHWv6Nvt9kfJYksyDk518naxbdHxoUqt71B283D4QyhFZmKqNSesL88DUKGVFEnTsm5pk",
  "key34": "5hWUXDfj8YboTvynSyV1bRNedBk83ofHud6C6mnn657sJY8PkicLXKaNYWrABcvy9aqL9kzK12dR5TyEfqxoPda3",
  "key35": "3n4LpA8TVHCMzutooqM8mib5UvWViuxiHKUHWEm8i4nYae1oNbfubV22XHALFqNJGPyH9NJ8sDW91FFj2F492HJv",
  "key36": "4D8ZH5jjnLnFrjJ953taNXXoDhJTee63fGDoAtVFKJGFAnsjZGfrVzYwBcg9xABp8jwuF6Li6qaeEd6x2wqwWuFJ",
  "key37": "4x5Ggfyt62WR7tDUE4VzBP9e21M5WU3gyidaXzGyJZ8akB4mcC8YJM6QrpZADKK4jXYgmNfKtauaCCv5QZtftPke",
  "key38": "47HVRE8sPJznaCqWAkSn4sMtcayJdj8my8MdHNgSyWM9Nfx9C3VSLUtpdLHpMgTDRhuhneuJ2gYkpcYFq8mZYLiq",
  "key39": "2xZwkxGtyb8aeHqsUopvtC1QhtPEG59j4AHvApHkYLSnx6QmgyamfBu3jG2ASeQf2tUYRXWEL9LMRnB2JrvHTbh",
  "key40": "2byd5CZiLm2Fdh8fVYA4ZuAwKxWPkwKQxgdqdGNektdcqi2iuKS3t5qXupEuu6XUbHwovHDJC3dvSwUUwxyB5bne",
  "key41": "34v17beEKgzqiGEqbHdYXcL2X28uESRDpffxvWykiLucRT3bNJmfZCz9dMH4zNYaQR8ZuLUvoZMfiTQ6pqP6MgWM",
  "key42": "5VQFJpfNQpgEfa4E7tZwgjS3RXnBJWfES9Y2XnDfqu4NkiC5sqhwH3h2S9xFzKunSSRyGsRHujdePemujbsfDCqz",
  "key43": "2ZhFqSNPCbPvbbp7neynpHUCtdZhzVtqXLaf5DhPGocx7mqPu1EVJkSJbMK6BnTEAWDcmymeXuuv9qkjGxZ58xXF",
  "key44": "sYs2x9iYAcUeLg2L9pp4ucjt7KFfkoCj5piP9dPHJDAqKPo3ua9QF2gBN6LRFxFGBPRjJeFpuyhrkqQW9fgugxx",
  "key45": "zhtM9QLN4zT1SFhyoaq5hJwTtdTbUDzsJJgejzRU25tBVyLpi6D7YAocPpe3CAFjsMgTAcuQo9MJTDYAc5nGdwb",
  "key46": "4y48DmkkgKfgUHRYULaXFwSfQihunL1q7Hpg4QiMkXiUzfvuRrR9YNpLx1jEy5zkuTNKmJ23XBRc6bdoGPHntgqb",
  "key47": "4EucrFYUu8XASrj9gGVwe7iSxRgV4WA7iyqeCxFBaNFRxCvBr25UHQWi8JoaKYPmuZX9ULRaGFBw3NzVTmMkx9Qn"
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
