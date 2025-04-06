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
    "2Ug3QtnxbMQvMEAUA31QURykiPcbQy5pF9tHj3CteMECDFBCgF56s6GJnoVp4vR2oU1EcTDqKEhaUxLnNsUmCGx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ALisgip5ttLTuBr93SFiTBFhfvXj67DLTmYLGJNMu3dUykDtg6QX3TVpP6hjJZZrnnejThx4QCHYmt4k13mwtVh",
  "key1": "5pqVufwpGisNSgSFG6LvST9tR45ftVf1xCUacDL2mgHRv5xZuGgkcEEQAJzX7xLsMegFnj8CACK5EuiBEWVkJMz6",
  "key2": "3W5nvfp6ZLMbF9d5GYw8ZMZv2XHaF62zm3QTZF3ucW922bpE88dUtL9pqBW7BszHgi2AP1J7CGwn7rF9QiJbts6n",
  "key3": "2TSmvnAUtGDanmfk81cxx8BrTLxGfxFj6SYS54K2AbXvUq3kPYFWKzxM7TfeBcz3bW5kQ5d47B9976iGczEz81f7",
  "key4": "5GbfDSkE6pbBtxdKCUe9WTwdLesLeu26UQrQL1ojJayuh2W1vwtiwRUzDSSW5V31mspwjcDYhm2fH3H961KDHf9F",
  "key5": "38aFBVUpQkjiVtRoaT9UHoLpc2vU8m2pJSzKoLc2ragFqY7etGf9Jv5kyAQetY2CYdtfgFpxvMswijfYGyyahmNd",
  "key6": "3PyxYUXHSiHjo9YXsvaN1HnPf7315pPjssmiuZD5k51R1589h4uvNUkPMR3wf2MAAFKDuKG9ctm3i8PxxFJKxopm",
  "key7": "pkL4QZxowfkvigkShtQoTL1tCeUpQ6hoHpXXWJvzYpd7i5TiUfqscXdSLHaeov5JJ3ZnZdnHw13m1Ve73PgwyQv",
  "key8": "4adEzmTjJQL9CwWMvMhNd3e5aW95kL7sWFC7uJ7d3oMSHkUQTD9AXN8GP1Kyjcx38dWmL1gXTYzXXaUZsnd8EJNn",
  "key9": "jYaSFvoJYRPeaaLX4zJs4vtXKtuhrPP63Y2VJ1RAodjQzBYdA1DMRZ86fhVrBZTR6oQDoSd1tCcTxVNpLkErwMj",
  "key10": "26iHXcg9EoZ1GzLLVyCUZRjJcNrTpTyBV82Upi5NQgDhdGgSi2jNMnoagaLTj65efm2FeYFSPovkL4vVxY7hsdgc",
  "key11": "5ZAbfPpZ58k9SgRLQhePk2jAYaBmGRgCWXKmhaT8hA4zzdqFZJyHbfs65K74zFvaMq7cqZGz8DWhhCFBco2gNhHQ",
  "key12": "4RdDL3MxjjUiGLdUnQbUEb4sQLg85LitBbjpKEoUoQLKVCNv8Me1WzXBRrcTRp8WjYu8xG2hE1JzN8Gz6ytjwJjz",
  "key13": "5a5y62kukpipkQ58DtStRWWiVyE9QAjtjmq2F9wX8d7ieBRicRpounjq4E4hYB8nthFSGq29Ud4Ash7z4Fk2KU9R",
  "key14": "3rX6YXyc57x68b2us6uMkR18m9CUuCVEGYNGqzEsxAoLKy6SToe174r9YduB8dmsDGCTiu7wsq1r3Q14gU1FSnWB",
  "key15": "4TpTPXDoBejiudUARnZ8nXJC91ecYn6gT5hoRunYEegyxBVeUX2DnrBawvyDbWw31fZsmZp3dB8zbkdY6vrVzxJ9",
  "key16": "5HGoyftWyBhK5NDr6nnyGFLeZCR53jFTw9zHZwGbXeZSaEivW4qJUShT7jNMfEc3ydMEKVd78MJ3jsw3xCK3Uv6q",
  "key17": "5sPojc4QZKmnH5coVeGiSCLCbtAAaXcDF8gjs89XKTC6aPSH4Mv5twweRSe9rasfiYjoTEcTE9FLpGetAmPB3pTF",
  "key18": "5EbvHBXSAkPrP1m7fkqTEeMvxxzf2FUFwmP7sMx4DQ7CAj7CP54tnTDgU6U2vvyyoob9bhPK2LMEbgDCKMNLuVYC",
  "key19": "4tGCVW63UHSRGbg66SGaGpAkfXFPuNaVV3CQuUpw5sVKyXHyKm5aaUGYFHo4iQnvDCMxxAiitpUx1jrqNBLeaL6u",
  "key20": "uVcHPCeaawYcUV8qbg2ugU2jYh8NMPySRs9HaFhR9ovdwhvrM1buMtPnagEYhmyE7Gbm7ArETYBrvJyJ9ArNoWa",
  "key21": "2AY9HYbGJE9RejD8FVZFDXSLcm52hRABZmqNAHdACgPfVJD3A8VuR63CAwL4znSDTJ9ivLBtJn8ZwtFXwJtdVYRf",
  "key22": "VRx99M7JJrS3LNyFeFLcUyL8p8R1PES8CGePE8i3oFrT2gXcZb8nBhk7T4KR1SWjh9Wj9DkgdBVp9WPP6xz3GzJ",
  "key23": "3xEreMX8sAn4vmGCGmVPrFMY4UiybzsHaX6G3N56qXsPcwLeHfJrsBujpsKGJsxDKCXCgSZUgMX57X4VxJ3AjfHM",
  "key24": "5FoQdB7XHNfU5i3nt6Q6w8TkJMEmC9JATtNvNBqGnfBpP5mrkdUuqvhPsMXLuwvcVopaEurby4xMh5qL47vQiQrZ",
  "key25": "2pLUnGoqpdEJfnJQ5Futj4SJWhn1EnfHbMFUcjkpNCRR5jR9unBhtffscHFKfMrQNa7obrVic3hN5BoUBC1igmhR",
  "key26": "3h52Ab3wa3yqTx8FHyXhDYyT3LeVpx48dQSiGzE2KrscrQCSNsCm3xYvjeSta8zU2DyqjZU6117N6kuoeqhfxEuP",
  "key27": "5tzZmXupDk9CRPrpsVjybCV812wWvHCfgDwV8tSNGELbHDjMAdzKRmq74bUWKJAQYTnwCLqWW4ovawRnRSXw9Vve",
  "key28": "3U2ZTJ7gfbSnTYoBFCdkyc8WP8HVP7ZSPPDeGThKkW5gDYqMxXqgR5fmBeD5urkenUNoyoUaom7iWzjGHKbtcQpK",
  "key29": "jg2kRXYjhBgQpea1sBS2GKAfJSwS9cfJoxfZ1zaiehPh9eYQ2JGLAC9KCN4VHFS5eKcDqZNXf3geZwUewZ2GRXV",
  "key30": "2JgkJy1LQBb9ir74vHMpUvdPrrSfVZNT9VUa8eN8uKKvS7ifVL6WkaYv1z7rZ7AxZM2ncq3mAD4VnMnvMZjZyCyB",
  "key31": "4ooHp82YWP35kG8unvHBrRLfRhMbV7EsgcinG9xUFpgRuGLvKnmPUR9mZWcmnfV5CRezoMqZxSWiavAdKw5RVKcr",
  "key32": "48a3KZzmakykmKLhsswcN9wfFH9hvqJtHMPQFgTj49KjcVeZ5V7EaccLbE4BKbsATG3beKj8vmomB1KaQNmNEqau",
  "key33": "5M2WboKTr3HbAPPckNHH8SALf3KNX8iHPgsoBzkevf2J6pxS48aiEuRoNbTCBmCZUtsmM7viokwjGACwPTPp3KHu",
  "key34": "4QtGbKAMsMdzCHHSTu4Zbcv6YCSsMrLAEqzXBUjohUwSJL2SdEfFdFaKFHhH6pLxyX5VsDUFuyHY4fZQH2q4Mo8Y",
  "key35": "2MUxFzgq3w5WJqfgoAoVdeqFbd92wxCCWCMdDYx1eTbFh32RQW5iYgia9BDoa6rLKKDngotQYRh2Nanvxcido2Jp",
  "key36": "3Ze7q7qUJcHavzwJ9vP71m4RqfCKPCGHEStmYUBEfvS4CvyzAdkXrPiDTqTNAeAcQ9pMetgbEwLoAy8TyeXNWa4r",
  "key37": "2nCDrUqR3FvS6pegMqDxfT245s8LCUBnPCGcq1wHxUkY2SbR6gihVmokUjzkzQHgBfpfPH27ke4JxWhTLuQQsFAo",
  "key38": "2VtYqekAJLrQxAcLa4eAKJGtKQyZhPaVcR6v5rVKaDeEsVZUjcGVU82wfbeupNGswrgTFFJvjz9r3SNaxBCayMM8",
  "key39": "sDbcsH31zGpgpLkUEAgfrr5TiuDGZhqqf1D6bFk6myGxz34tznaXzpFRsRmVFdWY8xVB3BJbtZFPqeeBMffXZKS",
  "key40": "3Lu7NqG5J3ZkiejcC4e2zjYTRWhZyDN3nDyY2VjjNEP4FpaTLh2jegWoiLMozRUi3XHAK9UYJv1BiVwtXxSfrRVs",
  "key41": "2pgNaQJYLaqyGKYPVZxfT9HTxXGrhUuACBT58jLKVCujbWpYJsSzcbK645DGvqtkWWECCobf12YEcndKVfKkauAu",
  "key42": "3Jhz3nMZPWtctvNY7xMKnoLhtpHW5RGfiPAvg6dBez1WX5J1hJseBLkD7b4395SgVZZX6gwqa5DvQLRZpviM6Z5y",
  "key43": "5quJ39xnDQX6k5h27jZTG64BYyFZ93tLtz4GjH7ecnu67MxtaW3AYJU6r723NgpK7GJL7kzfyP4HCqLA4d7shS2E",
  "key44": "V89Kiw4izwZwJm8sDqsFHdv7EZHTGHRFrq9nu7rJh3NAzguUnkPgwU7QUg8XqBay4wmvLBsLWP3VQE7sFkgG17o",
  "key45": "5oSX5mLNZb2rDnPejjqLrVZhRybkJouBrRyAYPxi8ikA5cntgaWqHNhPUhXFJsd6tAREUy7rfksYLc38K68u4nPi",
  "key46": "5wXixRDYTNJfrjKLRKZNdNrcuHbZaeoCbb61WZw93E9GhZruBWqvZxokYsTpDjnpwMZ1SrssGzfYydG7fNQKmhQp",
  "key47": "GRFySuGUb7VyfnSuom9E4HhncKy55wbGmbj4KkdyDoWWtpSMTtRpLZPaUchTzh1hhS831EtpR39ZPcSoDqN3sGi",
  "key48": "3XV72HENDr3AkFWVwapHnedR9pLdskieEvfSwd3uzytxQDQNoAGpGCqoWd2VMxyRnGZS1xo1FYRmsBrDxZTaaJg3"
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
