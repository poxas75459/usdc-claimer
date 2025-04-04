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
    "2DsDkSENTetaSfJxvBVrJfTNHHrkKXswDRGV7ZXubyu4wF2cTtxF2ph9ZicG5AfHmocnHDPDPPVv6zkteNen1zpF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KNbLqKJL8jVmSrAdUfnqunQpT22ti3Q7MduvCjkQu2MhSLPMDubodrLJvcdDdTvBv5W6rFT4MsCbYvkuMfnFoaX",
  "key1": "kHTbb9syVrMdLqUyc4J683S3mctVcaXuW3BtfVe6nMRFsVieihyUwVnBSXU3CxqrmBqjUyAjpK2Rcor7bkUcTHf",
  "key2": "2Spq2PWE5QEdZU8KhBk6yWmPbhn7CaYzsUZmq7C6KXY3pXKJLWgqMPbmuJj2Y2B1to1FvLfASWDRU3Bs8k14Z7m7",
  "key3": "2J3LDJKpMEpHEtm5DNx1b4WvKcLbTAdTad79N7DiwZyAovxVu865nAeq15fQ7MH5tCksF8C5maeti5UniqGr9oqB",
  "key4": "3nnR5QwKmtKGJVUQHsnm3LytS2qyJNX3xh7LmB28EdFEMt4ehb7G4Gco6KjtU2VSYf94K55aBHdCgfBnQfv3Sm2C",
  "key5": "2aaTMx2ifzZ438DCUMPHoL6FyNMiwEPDdRJMaK8Gf6LcbDbxwG1DZdp99XwV3zc7FhmBYc9gBTGWBBZ8X9esSRkY",
  "key6": "51Wa5VrqxV72Hz1GmLRxMnkBEPdfbRq2QCEXLHGMzSD4FJb6t9RCveqHBeT8T5QsbL1Gx1yZ4g4YyFtcLg5U2GAd",
  "key7": "2FCxVjm9tmu3LeXNXiJmdPyDuHRyH5DuLKcsF9x6WrQZaaKmvMw1k2mGfjRNziLRdtCSLBbnJKGdDJoDmD3AWFmR",
  "key8": "3s3BvdAmhd1PXTkfdvkxZh8LVcPeJXpwr8At3vuewYQBmejczEd5MBdSjerfdhQjw4doBhWxQkf5eWTnqk8JkU8c",
  "key9": "3paDz5HJPgqxkYbxHpzaBgdo8iY4MRXdwgSutWjbeMbSzG1UstfUH3pQhjgP38R6mEjUdWrdxTEF2dz2P4zoHJEF",
  "key10": "54zwfaMFDfovjc8yaRZF5ppBu9Lt75K57Ng8DpUgRTr2Mc4bWUpMezvNZrXn81Wh1zxZGvgsCiJPARvi1z6PwDUG",
  "key11": "3Pc125WgknsRpdZvdtu1u2529bkQptgfZjHdy4YJMYVyXFvFw6pSeQeGAGF8sGuX3btPBoZuBxaHRNyoJHnpxHL4",
  "key12": "5sfxyF25XHmN6b6tqFPHxxJoTXKiJB2YCK349AnxqEEYzPDZW1epQgLc7LN92QUqmrhG83RUabnsykvFT72pRDQE",
  "key13": "5ChUcGw4kMvXRyxRJBv8BJbxoCNmnqd3zpB8s2i6Z9NeGzLTLJ6o9wc3EXgZT5K9AZjRGknHqR9xGufUFQwjVysv",
  "key14": "27KLxsFwWGJSHZdNZHSkzs2ct6oYFxXhLCXqneVH2dSoZhhR4ijCvWW7qTPyGeioWNq17Q3hUqSp8dAkgYpNmZVX",
  "key15": "25Yu1ZdJu7LC3f7ArTyRKaM45yP8MAbYVxtuzjMwhaNJceCopVRhraLAbvmEMN1CbQaeCNo7yHRbrBzwa3XyAwKx",
  "key16": "18GziNpSqyCHNAB7RiHcoyKxoWg3KeuzNkRgpdy2tyvR6BTber5NQgspJdjdzptUmJb8ZJNKySo23Er5CSXs7X3",
  "key17": "4Q72iNaH6MPHDTeLxtQcc4BGktntvjDmE5o8KKW2pg3ZRXn7XShN9afic4cnCvP7yRW7HsxZAdRxrp2eEJwmjqEd",
  "key18": "361wqQ7e7sW5Ywe7HAs3FWNz49jQweQpefHNKMu9enMHRAbbff5xfrKNcD1ByJ2wRFfmnuf6XYmcimKiavKosdWD",
  "key19": "5MHSe3GBs9NFQfNs4qGDmhJkRPkMgSWrNMR8MtwYy6uw5k3y8jUhxyt9ToorVhQrnQVKn2Kpbvk3UfGybq4e3dcw",
  "key20": "4VfYzg3SHqbMBWNp7Ja1eC5oWQ3vVThXTkHKHd8KivCeUFrTom5Nb3aovDU5TsTVGAi6T6BL3SfZLMsjA7WjyTGs",
  "key21": "3Nkkn7WYiPCfPL9aREYYt1A1uv92q9Twj16JaQchMRsNEnKkmzdJvyZscunKv3Rqp893QMtznnKxSPGNqJj6cHAA",
  "key22": "5uGpeQkzv1Vmnz4u7T71mVoiFEbmghRJbHXt36LTd9vLSVED1mgwtKw7rWTCUJnRWz7QoKhkP9jXt3KQdVq4BJmk",
  "key23": "2SURyyQ4yQUU3xLVSVcW6v5drqD8DWLDkETPjXTkKohoaCH78PEYZmuTArQ7znDUHHUENccd9KWkShpGzLJCrtAk",
  "key24": "2PUaTNTcuvHyQmyHgydDDDNevS8SpZGJS15iiUfzn1HDpUnvSGK2jgUjuzVSzzUxZt7XGdSux35cEL46wrsF9aCm",
  "key25": "4UX52TwPiSHWvX3bcYN4qETB21q3NedeTj6A8pv8A7d4dPvTMvi1R5gQPpaP3EKMcuuGN2Uza4ombCMLctoK9xz2",
  "key26": "5fHqopUmSiFUnj54Q35bmZhn7gBP45KQqbNzV68bmj1G1WM3jKy2Kcbj8njyyQUxpPnkJVW8Wpn9rkhpUtkdhVp9",
  "key27": "4eeZMXYALkrgr1WgcUMUQY3AnaY2gmk3gC6fb8apDyawxsviuZATYQzAzUN9rZdGcUDZynJJZQoqTN6tjGZWmM1y",
  "key28": "4qK2g2fW8AtX6NJsgwmDGbcEgjzCHhciqhxuXDfv6YtdVmWTSBMamsNMZ41Nmmu7hkiK22sosFxKud6JQczYVWLh",
  "key29": "3C9QSpY45FfJU4cxxunv1QfTB5KCBFZDsRZ1MzvaDmDANpDoxgZbCjyDqEzqmAxvdpD9AEf2FaFdad6qxLu5CWgh",
  "key30": "34HYD8L6VUoWWM8GVukozDZ8723QPSvVbxQUV4XFLK58BQZKgA5K1LjjhQgVECn2dpTpXLQh8LA7FqmSkDt3cTrQ",
  "key31": "SLMGCBVka27m1G6jxvWNj4znYqJAA2wzb2s6S6bJRzijQUDbCn7W8fjeujhmrNnjkrV3xDE9FZ9chhoGy36RXZA",
  "key32": "2v3gStuKXs9ZniV4ghuLB8tdsXemF6xrpRt7dcL6uuKFRBDzCgWZc7TYc1KKofLBU2LagdUXasosHiGi5TFM1x98",
  "key33": "3Ho7MZtfrV5QN8QSq1aRdtmvWPgVTm2uQYDZ5E3ZjNqeckpxCCFHqhdLKERG7VgheXzvaFe3dLin8yC7R95fDQDs",
  "key34": "3Km6MCUffu3NM2PjHJNVS82FUFebFfoViBWjxWsLL7avGJ8GYiNy17m98978hgHaZD68PcgCP2KvkinQdKdpR3B6",
  "key35": "5rkPmXe1oJgJazYZJ5P1qwAFHwA4QXdRVq7dETdyZNxGX5njaZ35VdfSGZQLNvsKwtXSnuT4zcYiz1wA3XwYbwfN",
  "key36": "4KP8hr6Dvh8SXPtSXYtDXckyDVMncgw3vbNVxRTsByCPebgVA977zpd4voAZn5PQJAqvDmt53vBwHdoak6Tc5xPX",
  "key37": "4NTngJCcWA1aMqTr1QPk3qeyEnop7PoDMfhUU38MhCd81uE8p99pLtXFUean5XepcYRPSmGYJJVZCwJAXCRg6Buw",
  "key38": "2vYXi7sn6L5nc3hXEw1Ti1cCc48wkVLAakeCj991LvhJSgdWER1xbUZBWwsFwn29UxMSzRtTAR74H6zB2RQYA29d",
  "key39": "zhWvpRrem5QamntEjwvRAEFqehGtMED4RGxi855SXBasCqVL2hBz1GgqtHgEUbA9Ab7dChw91YDP9wCfFNtFDyN",
  "key40": "2DCnEK3HvzRTfx34yL8LWkxW86wuzYtK1bgXKSFVhvW1CrUmNCSu7nZq6sWdFZJdjHKJdJWPWZeRjSJLMqxfW9Ex",
  "key41": "63gWZcp2qKzuZWHdimeruCd2a7JdNh4q8uY9RZSdfK9Fo146xkVqWmC748aexsjrEK3n5ehwZcVMYaTGHQkcRRD5",
  "key42": "noeazHRkLi1ueMP1xQSQgwnVfRtXcCkpdMtbENFfD2CWvrvPsXS1eMpsx8kjWREb8mgqiipznDRYq9msTMvg2Vz"
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
