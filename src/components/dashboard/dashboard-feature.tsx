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
    "2UESKipJXzKe7QuJa9iTYSBtFRFmSUAtkGqU5SoDxxjZV5fDzKGGv4yEuznwTd8fur3z5NkbgSeRyT4DiiGHjMvj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vuP9fhbGKizpTRZYzH4ksFsAXAp1WPTmtj8EzdkVzkcQPaWbR21oWwC7jHqwUTmEcrvJt6kVV1gvXiDUUvnAJoQ",
  "key1": "2nhisCxPLoNeBoWQxsdnns8YiRGDLXP5FqyA1BSySQAULPbWMADykTN2DapN6uRbfzTFHqWnmyHMa4RcdqudHrZo",
  "key2": "4QNiwMerj9YB4ThakFkqDzdWhRZGXYktsQmogWEqRsJCmFzevrnuckoGGWNuscnwWa3U1dQHp442Yrd77WNp6U7",
  "key3": "362NJW25FFnH8wB3szWCdPv3jbEzcupB3C9kgghyCtUPPKo39jzE136kwLMNyWpLQp2FnQ96hn6W8eFqJSTaiQCX",
  "key4": "2Cj5EvqjcH86R6H7BPtc21VR1bto27GQb6FxTHDYH76XY2SLVXRLV4NDFCfnPsPPivo6hw1kspHkK26NjURyYw7b",
  "key5": "668VEMeRPt6Kw7s2ztoCYA4y5672f1ZXWDmU323wYyFnhLf5xtLReojZcsLS2Q4XeyrpSQ1XjC59mCH6GZnYW1w",
  "key6": "fEmZ5syqCTdaQyepBmUBt2BWRCPjHkaCcZPPcTWvs6E5bACeWyym4Vp8UnWrPzk88yRZNQuLfUeXNKbeiZcrZv2",
  "key7": "5L52HvuFZrsnze21GzuRjJ2tDHkqPE3P5GxodajgyEihvKdg7EBAha6yKivyo2XC4rhAcw5JF4JW1eqpksHCb6Vm",
  "key8": "5PzE4QF4nqr4bzysqmFeZe4XvEZ8nPT6hidDkfpEAH6sGDcpDpF2onS9XJo9GkGR6UYjo84svFsDESE62wLA6N7R",
  "key9": "1Kfeh8BaT9PZki34s6q9j17pFUn4iHH6KCv6p5qdFCXGmcgE4AXSDu2HV6zu3aNnXPfVbCWgsRHC7TjikrN49zs",
  "key10": "35qtitrr9RVpj8WzFJAFL8gB9Vzqc8jw8P7ZnjiHQLhesyy9yNHicT9cnEoPLG93N1Ck2KTdBRFbca2m5i5rUZ82",
  "key11": "22iRqrkbUdA1UzTCowey5ZL3chS8ksgzn2XgnoAAdUwhGWgFyT5f8u96pokg9v7MdqBnxAFrwPVrBQfRHswq5GxS",
  "key12": "3gnjg5J95KzZDTmNGgsESMzPqQeHYnbgRsyBThxQCKa55nY8hR2GqmrzA3wNLm5Cs1gewfAWSzfvBVzzgAvPXzyL",
  "key13": "2EjEmEbeCEuxuqo1dXNzpU8FLRPvJowTYBAaNCoQWMcVumxovcdtwcun8coqBcRgubSVTSMqcCjkWcR7fUJLfnRB",
  "key14": "5Y4ef3knkteXG7Uoxuz4gkMx1yt3chGNCdT53q7pzZVtchD9NPQGipH7CLnCMKv3LVfwZK9pfNARPPTEqHZzrot7",
  "key15": "4zi4RV8PtTvnJ4GtodKpDZvxVQxNHqBUfS59WatmswWLHepty2SrPQRRNx2hCuzuxk44pHRDHEci7GZvSYUWHXfY",
  "key16": "61w7m7RV66n1nA4S8Z9vrEZqT73MGeBkA3aCjqG5PJZrqTayD7khdh2HoEGFYrkFxx37etPDVwVxqbQZm7CRnAW9",
  "key17": "299T3B4ow16pumzVrNaZWBAdWEJXGD3Mnse5j9WHvEUp9hybNWAeS9ehCtCMCAm6Hs7JBwy3TgBZtmYdrxQTdTVP",
  "key18": "4TrF2Z5iozEHxVhRdNd1PpsgLnGgpW6ES6e1asduiqXnmzuofPWDNGUkbvwT3xajHeb9QSydLWtFjhXfTPBWTMxH",
  "key19": "5eoRgShxGT2n6JKrzBUbVEEKZ1aaKt24AUdnNnEQUH7PD3h15zwqAh8PTj75XKNGYAo8VKf4xqfSsre4599x9NMJ",
  "key20": "3RUAedoTHULqiegwucwBE3RenpsgiyqC9EPrMQ2zhUazKdehWHtfmFPB9J8YR5y2FEth8j7g4g4sj6gfxTZz7CAt",
  "key21": "5vo54Ai7E87eiZ23E1ogn6gM1u5i51a2ukzrkF6onH9txjyGEzuvyKWCWNeqrTvhnWyJa6oePkTjc5n62ad34UKD",
  "key22": "2mZzCLzDLkVGLkQqgVisPwiBsD757vaxWRZck7dUzRmcZVkUdrrvqfPEu5XVUNSYuLfCcmiw9rakhybSbeYrhb5h",
  "key23": "2kxwTDkrjypDJGne2kGrLDKNGX4UPxySKc7muAqtcc3sxCs1iXChHNsf9gdgtpzqJtDGXEGjYF7LKnZmfcCtwTgw",
  "key24": "3kQ9WtV8BuH89vSHZn4bf7xYyqWugYenFBSn6tCSajQwfvLDLz5pgN2uAsongKcwZboV2niHjC1Fk85G9e9D1Xot",
  "key25": "327nRAKPDt79gJinGgd2PRQiCtzkTGXGxh9nUxBHiWwB49BZdmZzAVz5HiR94SERB85mkkXGMXuSAdv7Qc2zxS3p",
  "key26": "4mK6zHMojUYvTLhe84WF3s1i2jtepQVxBCWJtWNGZvhBrHiRYNZhTzUtsCFGvyHrrCgu6NsKMZ942ZCaWA7h6aDT",
  "key27": "4kA1jCv8KpmbX5yf629eBBgJ4c3LYzXsKh1YLZCQ6DRCwQyJBmNgoQBHr2djJREnHJP6TtTkeseLA4LGC6CSZQmM",
  "key28": "wunD4KyPoLdefet6heTk6qDD9HtVauDCyZEFiocseWFMAR9ufZ4izCYo4HutjN2jCcnZ3w6rrRdNFgw5iDUQSt5",
  "key29": "4miTfsYWdsLtnEzaYapu9pmsULkgaFaa2aHyNpSb2VdUNinULXttedvZKXXtN38VRpJSyDsgwtACHWYUTpxtdM5v",
  "key30": "oFdtMg9UcH5MVk7uuZ4Sphir84XfafeyWivbSzT5YmYdokFapU91Q76XXXcksAGqs6tAnR3gZcpkHh4a7VLTQrV",
  "key31": "2o2Xus6ouU7cSMqfjS3iLPAAgtScuVFT6xwiMeNmYM7qM9CxSfZBqMS6SgapUuSgWpf6oqh4C1RGS8ZmER2RdAGx",
  "key32": "3WyZe2a5cat9Z9jw1E4Cjjg1VeqnEeL5cfjojoq6ZYPCSRSPALMYzEE7TQzqKaHbcokkQf8Rq8GWgCnmYGMgNGu4",
  "key33": "4uhxhqyTiZayZhKzvas3XRvyhiiVEnVuRYqXceZK2sFo1jgH5CiAmTfmy8YoZxp9FMLahXhfkCxthUu384cTZKxB",
  "key34": "49F4fzPSUAT1xYPDD5Wt85f5VVj192K6CxcMSr3TDSUW8uskJeLbq5FpR7UcMtNxvMi65K6vzxqqvp56e4WHHbRK",
  "key35": "4RnD35J1y3ntYe571C7TKVdA4Fj6vrttE4gXU5cX7gNozVtY6TsRch2eEthVVDFDYcv1xS9QUrMtqa9Y9zD7HevX",
  "key36": "F9bmyKM16dYHaMxo7m4eKAfQDjQT4yviZVcrw4BXfKz1vcLiTyvMHmF4pM2BzBicXNzocgYtkY87MZKJ7n1FD9o",
  "key37": "2mF1uKj2DMYjkKwYS4UCFewq9xyNP7RaAU8uUY9MG1LkX7s31z1voJYGfaSiBt2ESLHidEckKGvwEsjeNvSvUnb1",
  "key38": "32yk8G2dGbX3JSFznovQaLftptmuRwJu2L776T2gkyfeghwocZcoRzdGY8EtRoALAL1xbmE2UojSaYSikrYwrkPm",
  "key39": "2TEzRCiy8FqSjeQHLZBPqPSxDspGf96sxEijW8LfKW4WHzhbTzw8556V8binrXnjEeiW725CoCky6nE2fNq5aXgi",
  "key40": "3S4NJG6NiS2gvfKWWzhKvsxNB9dQphpLsN59N1M1q59r9r6zhTyCqmyaArsHQqWN4H2wRD64TqNGcazCY92UAsiQ"
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
