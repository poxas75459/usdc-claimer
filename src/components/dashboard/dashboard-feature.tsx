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
    "5GMVyxMa47CTzo2GCtLFmbNbtvBurEb9j76bziGTwJUfgTgFj8i83iJ6pexfN8LRHG7uZ5gufaNY3SQMBFho2ueH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58mQWUQ7JwuVDrWpRxPuDq4s6Cu1ngJc8vJM8HvPposoTiBVwyjp3gtVRAranZmQcqNShSKhQuB8AtwtEkKZrH4i",
  "key1": "4ZqheRrogmSfGuMD7L32HfTi2WF1DXpHdqP1FbN8zwLiJDwtqCeTtDFywx8NVC9UQT86uYNnSLScxs2EBgybaeDZ",
  "key2": "2q7jy5pFv8ACga8F8amww1ph998JHnexFHmv41EN3fRF6GFMqBYq9cLA9afxrLiLrK1Z4Xs2DKRoFeEDY25NnBgq",
  "key3": "2Kz5WBp3Q58mN2TK6XS4scoogecdumQkQJMQr4DJabtn9J7D3B8YJjfspW6yjteXfybHHMvo8Gq8KpVWrJ8g85Vc",
  "key4": "3DH5S94Gg22WLaGxrqNz7ATLHKNdaXTK6D3hQcXHEs5JP94nRyAvfFW4VKLwUP3HEQCs8A4fNptoSDKg8pX6yRzc",
  "key5": "47DXZ3Urq2T7McTK4Nt5cbSWioT1Jd2MNSpT2m53KLBKEXMyCQ9adkKwuq6Jkue2xFWWdnoK3r2nQzPNdNP4cSRN",
  "key6": "XnSFbbH9zfdyYse8vsyeVnhprbVhpBJe8G6DPtGMxNkNrQqxdnCewvRyTmtsn7hAGsj4bMadUCkfLpEfHENeUkn",
  "key7": "3BU72rhKqof6m4uWJPg48aGheCruRovsHruGtnvhp769CF1pf6Ufm5BhGcymFqWxsAmdbSqXSuaJ1AYDA14NB2RQ",
  "key8": "nRXsEaviAarbrDkxZ5ZFrU5HXznxJK3RoTnjwPwWk32xzVrecEjbVANsE9HfAANfpPE6bGnAwydEBjDh4U43DHR",
  "key9": "4C65BebEoiLHcRtJnRWx8RGZATfdo8SRAMLCgM6kAArrMEnqwV77Nd8Tgv4n16favKDZpDzMS81UUHPJ6VXArdNf",
  "key10": "3T3Uooi4Gk8ZY2pYxzCeBRyjLnsoKDorLqKscwCmTg6x1rXRrQpBoK77ETEAFdr59MYR2yg5tyVNYXfB4w7M4AYB",
  "key11": "5AfKLuqbERxp1bzPgJHVSqJKjW4FeaUGSnNtqA7vdJEYKbLLsHWj85QUvwyao8DayuJ4vmWtXYMGF7G6sMMCVgDn",
  "key12": "2zYyUiRxDdpg2aNcSYt6Le4LCx3nEuq3PgE4YTjEXEJ89kyaAStgCKWwg2UZC8R6Td47NAPWQXHcVyCg51cfscKu",
  "key13": "3VaThioWMoFKVzVFcRQLHntftoFXzBTpqAjAnc6aYtCyyf4zoPQnYPbGBVMPcQuvaJcUDkpNEkiDhBJCaxNiZvYT",
  "key14": "2AxKDCvEpJTsrCbc26vzZLtunhbeqcd1Vg399aN2JoSLApEDZzf4eUUGc78pj8Ff7WspQ9d6TAdnESkm8wuUFG8D",
  "key15": "jFnxaJSmhuHNbVrFzWZ3twi4U7zQ9aMxnEHFRFDWK1nVdDYUAo9XkGdm299FPTP6GJVNwAdtzTqqZp8Hb6skQBK",
  "key16": "5zAxer624sijtpizP5gcZbanSPVSGu1MDHNVdkXrAi7NHGygtjddqCuywCpbvcvmXxQZbNkoc579GoGVbkaJBeCg",
  "key17": "3DhGaQs9md27SfY3ej5PGgDVDJYvB5wWxHWH9WksbABdnBwyQZvWmQDmyoQVLZEpJUUrBHkPrzMatTgpzyS7NS6G",
  "key18": "K1XpRJuVA9uhhqqhQmZ8r1RGJJpbYYgLtakzorJmHvWntVf68vRNsRGse3iehHV5rJqPTfnjejRhSoxc4tdo3hA",
  "key19": "5CfnEVzQuiqwk7c8JvqascocfwweigtGJM9MK74hYNYNkQxDydN6Sbdity6vEXYt6QLiLhycgc9NnjzAsTNwb1Q8",
  "key20": "PDPiTt5kmeAcxoV1r7HnnbcVcc5d7Z63xYaPkv9KxXuyS5V39g2CxMHAHRhxyS4Hv59fC5cFfpDDhrWktfRthK4",
  "key21": "3JSvEEFHzyQvVwU7TSKkYAcKY85N3s3666N86MhrAqWHvRamDAXHgyLi2VhL8ZnfrbzYqio3WcW8tDP9MXc9Dg9c",
  "key22": "NdgaNu7srDnEpVCZY6n13HygNs1XcomrRMkSMLPHJygVDnaY9eANR7JUybj4Z4TvFt52AjRgd5FFejHUtVQzFnR",
  "key23": "5vHsLanGRMoNFduRKGMjjhgCosdAS5gJ1yK5u4h1PFgwioLGW6viziVtDkAn1Lv9wgQULaLcJoGqTmD7iZTEgFrC",
  "key24": "4p4CVfaT3o5CpN3siu2U3aFbFRVUcpNXXiW8Lw5eQb1qgutHkMQaZEsMqr7JxuzdvdmRdTGff2X4xXKY9ecFP1yG",
  "key25": "2B3W3GzpSSuDZCfvN3xzt27eESY7fqimtV8ibvUVmkcr8pXNv3F47JfhzRqp6u2QAh3Vo7awYKgmpg1A2AKQjFVt",
  "key26": "4JztsL7Nd8m7FwBbtsiNmxniaNpYKEToHV2SLGTYR9xwMMftHEGdc8vmuDddM6TabGuSnaD2WvSrjS2sdgm7Hxpq",
  "key27": "5aHMJQUK4tLgGAUry8X3it8D4k6sxkXNPjDYtmw7RTARuxbUYd4YALQneBEejpYaEfuQNk2CW1xrk6S6agzDYuvC",
  "key28": "3fnQ2udCM8zxmN3XaLMqwv3SwA7ELrvTfc6PXqC6ckw4LsHBETpdR6MUvaDytejYWmSzSdrigipX3xX11kytHwdV",
  "key29": "62aKGQUJrRoAhHRjUMeWmbCi7Gnsk11eq9DiJ6rnRo76Kg6guR6AaxxeNLui5y5RxU6J26JYgUqsTSYVLzRzTSF5",
  "key30": "5JL9oMpksnTkHemP4boagD5jMhHk3dUHk9VX1EPP5H1AWtdxjBiff9k9QSJrEGVjDidb8tmWBYCThTJ2HWgUBmGt",
  "key31": "5SpSL8YB14FY9yGkLk5fejpWiwAEC4P3gdgke7VHNZvoDmuKq2Fret4WMXgT9SeNpVBbKw3huDuWvn3aiMuaV8UV",
  "key32": "43UGn3v9XrXZudaTBZ52rkyAcwxsaftuWgtukkM2NxGNH4tvVhe2u78sRHBF3MpVTJSuKZZCRFJ6Gd86hy88qJsj",
  "key33": "j4ibbDwkY1p12SHpRtMGgb2tahb9A1boGdoFt9mvcCjLUvd85KdK9pkT7SjBJ93cCXCZneSQMivZXTr7iSgGEvp",
  "key34": "59VarVLtfVptkQudkVhAjvAeoDVG3wheiTegeGf6EBVzo5DAEHAM71EfTFF6UNFXdxRVGP3yFa85ufJ4pgXh4Unr",
  "key35": "3HCpuTia3XAdmaJyBn3RBWHHUcdWx6vfD5YgZ2aBkpxBe8jEdbsY2SP6Ls28BRxEt62SBabKndQpkZJBceNtXRG4",
  "key36": "2EEbid7JwkBaN8m5pQubbBJQvH1SScZ3ff5rciyt8VB2Fjrn7a14Hv8DqJuRwiny4u9JZ1dgsTnthjW2AMHKpYxT",
  "key37": "EuKcEBYFxG6TCCgXCagbyjS3XYYZJadBkyWADTwRsrX8fWoyr1esVC4gCxAwgMLsbQPNFCU8MUSCWdS4st4tHbp",
  "key38": "Ms19KC9HmD7bWjp8By7b1rwg5iMUht1VCLHNG2Au7oCYh96TiUqZy8Zmm7dkQRfBU8jaexAhzXbJKw6zuVWeHdb",
  "key39": "4YbREQG3WmceFxn7QqnPGDKQcz9JnFtMjoDhvk688phVmjBuUGrzYmsigQZeRnyfr3UvCHSoYoZm2dJuY1TRdmPG",
  "key40": "57ZNK4BNhwXaW6RYDRw3gnaRgtU3p4RYgz2KkEqRJQ1kmDwAQwj2ATJFhUT5X5PQhxFcDMEJNzv3dgShKjFq1HRx",
  "key41": "4CGqn1Zq5TtY8toGtpZhojMForLwQdjrfM9fpLDXnEyPxBhYqz84Wedde5wkRYRv7uMgCy11oqL4zwHbWicb1R7b"
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
