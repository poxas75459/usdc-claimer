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
    "5aEJxk8FU2Tp8NUY8FYMy9WiKq9ZKdktXxnAZhmnt5WeQy1hBirShxxW3SStLA4C4cFt8FyV3vWyduKuufMHshFT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b6jy67JthVrP2PPhAq4S7X8kiqnBofSPTKy5C2LpeVk2KgE5ApkA7b3jU9w6qG2mAtwpEgmgpHnnjN5nMDtQ352",
  "key1": "35QqQmhBicmrXQV3XNqAFicZEFwEP2CBD2uPUAMa85fD5dvUKCZ5WSDsLhx9Pc7xYKbtqLYpx6Umwf9sEwp79irU",
  "key2": "2H3pFMPCoaRdYzKACdKS1QvVybW6Lor5JvNdHSnR5N4shm4Xppwiv77UksAuKkfPZUxLz1pHhESbHdeHjzYoPYkS",
  "key3": "3rZMBgDBjzWgbYGzfrRoSwdfSapWqVTSXz95ivFp8BMbqj68bUboeDvaCPhYBC2gZgt3tzoKocLbJgZDQiG5HUsa",
  "key4": "5YQhfx493cyPFKbzfhwgetyE6myqMQYZPWnD4tc7ymmK6gXYvesVavU5i6zmN7fnbp9QuWeB3d3GeWe7a699gSBL",
  "key5": "2rbEaQEUNLhDDiMH6Sz6hVTEgTccyP7oErJeiXAbktjw6p6SNorivS6u62KSYqsA4ekRFQpYiw5V9et1dRLuwa6y",
  "key6": "3EaKhZiUqr2KxE1W1ewPuxH3hPHeDnFeh9qpE2cVezMwcbAWyCSXVzgVVCdGk43K8YKzp9tQ225bWbfe6VB5bj32",
  "key7": "3DxqjxTHY1bSZWKKkLsjPjtMC7FK5u5obwfUreLuJn9am67oPySCvgoRFzi2qipA4gHzWKSKcvMTg3WwJ3Spk9u6",
  "key8": "4kPPUFiVnGahD2zz8mP1iTcrrvXT4mhHXKpxUYcsu87kgiMM485PtkzcZymaExQJYRHF8KgHCE2SVU58xuHbp9K5",
  "key9": "2djjvWbiKwXnLVWjCB7Q7mBo19iHhJDTUKsXVK688bB9s2MFJr16fqcPKkYKP2aWheNSR6Gj4HFqQqocvwWx2cWv",
  "key10": "3sqoRh5cJCry9iQW7Mv4cR4Nwfr1S3cvMETcazwvADm7onmTy36ry4PnQreuHfmDWu7zyTrtHhkPAqjrTujmFX6i",
  "key11": "5vvvTZhA2jH1yYWfQPPbrs6FuQeqhaHmxtCH9YfGdyvPgpeH87bjJBzgvv9FnP18GCEZ9zS9ghzSmFBxVD2vCJPT",
  "key12": "5BR5RqiFGiuws14eyqHxcXxGRKDX7ZLeos9sNU7TLPdQQCq8DG735rh8mDWoETZxPVsrcVaGY69F4zjU8jmnB6yC",
  "key13": "3Mo5pcJcXzfLGabZp9qmqYF6LuGzwYFh1bYqDeNTDPqkCDxjcxMVobmZThBv4QeozSShcjrXYvxKP32TbBKAXCXS",
  "key14": "613ttRtHBHzec2yMmpzWyXMbBCoCUtW2T5ShNzwrXm291eiLe1rRiC3TKAta8zkf9HKvWPxN9umaGHCVUCR7Y3NK",
  "key15": "Lp914avH4id6UNYXPNU9anwf3sedRByrFL8k5nigxwRHdWZ87V3LMw37UFu9EkRaaiRBQeZhJJSipi2nDJeQCtA",
  "key16": "4VCf53hvtdsKoNTr4kTUnk97Vmnq27gJLwyF9p7SqmcNz99NK5S6w6eoZRMMC6BnV3WuwKfQ6WDV5unrURXHGEJB",
  "key17": "3iJe7Yyc42rbJZPzCWc8Y9MxLu6C5ZMJsHiEkeUFHLgZWp8vMRfNhzHcmFAd3snmKzsizvbGsxodScz3gzn58KaZ",
  "key18": "4dAmBJKih61HUR88Qk7yxYUUPQkTaui4ru1RW9GxNsWskdm9f2d6Kd7AEF4ZiAUQrT5FYEEBELzwD4bDzXNNYZ4L",
  "key19": "3sUCNt2pFTZQu8aUxR1HrfACpVw74yotztn6r4uv5px9ia8rQn8qdafxLHBMKw4biyyrZBnUypBgqvFfo7FmxA9C",
  "key20": "21BGTSgFXjth3mcNF1TKy8S6x1F9jquCGmuF9Zr5Aap5mWsDYsfyyjArxXfNGZSyJ8rkck78PQtNq9r8nZ9QnWmd",
  "key21": "3uvXn9VKXWChSCtDbDsue5KUJ537wriufCpe4ufuqJVVjo8jW2rs5ajDejZkME2QRcQNS2HX8Q3KnTVW7cx8JZf",
  "key22": "5arNjS1uf3yv2et7943EEjWFewv9GganwmMxuaQQSzpsLEKoaRyb11rTGDRN2LhoJV9xRTqzzchDxXPG1LDg1JKU",
  "key23": "4NZCZVChntAAgmiBUDfHsL53KZL24dJVKcE1e4B461rahaxUgyTa5bXLeJ4CLPKfntXQyhg4J55n6qcmFqosHXjJ",
  "key24": "4gpYPJWCk5f6fz9hZWUPdDGkpZRDSgREHJRAbRdTUQzFJBQsobSFNDncHKxERYU6taVuFS22cZ7S3DnGJuDTbjNR",
  "key25": "4z3B1LHJdK3M6vMaDm7xTJVxV4gEP85KeWKjy2EfgSLu6r76HMHCjg6SkHoKpz2bnGhkLwEfCDfxcRgaxEjTBwDm",
  "key26": "eG7NxywCndax7oGPdY42fFKw3v3QoFYp9HtzJHr3LQZMZPbMzAvmpzS4WphWr7zP4U2rxoS8phbFT6vJryfh2Ka",
  "key27": "4FGmVoLnHj6iME6xULCSUBaexD8qSwFymrwup15tLYSDvLpGJv2zgRfb65KKEpZUpi4XeLVW63SyVd1fJc2btUjT",
  "key28": "3gEWtBYHDKojGboGwvkg9dV7vZZ93rLP89X97hpqzoMakSyZgnoZGaZD9vi5h5p3TUb3s78RAPfAYdtgtfAnyZQb",
  "key29": "38sj4jmzCDSpR6MdNtXYtdzxPpYkhGTa2cyL51Z5vu4CZ4F5VvoWK24aHG463jmM1bNEAtXDhX9FLuKR3MoQt7pt",
  "key30": "52yyDoE2UsihLin5rWGqHEoH2UeDozwNkEYgMbfqq3iraT3wm8Mnbeg8fM8d4TgHqQi8GLbi4j8VVtLxHmL966JW",
  "key31": "5cakYGGU5XNun16ipDk1SjV2LjHgD1LGSE9qXb5RzpEg6Jz7EzHVTUEmyugNTFXCxAG6STCPb1JUkDWkmsT1SwWV",
  "key32": "2N4cGNaQ5NNE3gf2gsSnovMHUtd4SiPE5cvRuu6zdTJ9AZ5kAD7JfuSiidDhdCH4f3iLCLekj4ZgjkMyikgEVBzV",
  "key33": "47N6766FdPktYDxR8n6shepS4SJ5YQ8wbUxnX8EB6a6SnTkxY5dQz99T1rgBwB3uCMVsqbmpCm32DADfAj8vMuDj",
  "key34": "ydCHTmPt2mKggb2dSAp9LSH1DyADTR5uX8QjPzA42A1LBir2Xoeuz5mHaSLJHNCqbYpHvA1gbEUMXSbX7FFR7k9",
  "key35": "5vJDMFB3dmuzUvqE2m67thWmAf84iXz6ZNSr1jdsNgSBf9JCgjnxi9KT8tcD52kMGSup4HQaktJ2xYBzd6J3svPo",
  "key36": "4JVapwV9LzuJWYn9tCHSSifMaGjHVMTD6dyigkTPnfiiJaYbwbFKKeCiwT9Upf3ux8wV9NptCLoKkhiWuXV5WTRE",
  "key37": "4uyCvoCBab5RJwdHNAcEPbtY9MPNx3d566nqVtqMvuybhuU3dgdrUQ4MXn5g7Kh6Njb4ZYeNojnWgTXfAB5PTUSW",
  "key38": "5XMgin1Mo6rN2Rm4NLYDVAyP9wDSTm678GdMFkAKzsp9m8Wcr8AW997MHLiSRmWGUwzCSppiYnxep2NDkggZMytQ",
  "key39": "XoSEAKkpyV1Z5EivDNrZFV1h5rj9DJqdFqzVUvEsMgxzXnHjxYL3JVcDX2NEenZkC6Vz6fdSYsffk9CshmhdkGh",
  "key40": "4oyu8Wxawt31AYj4uLR2kdDApG2K5FkYFvxyxqvipTib9iNtHB1338cbf89GgP4TPVPEgm1eSFXkNq53L4MJS3Fi",
  "key41": "1nUpF3aViFm2VRxBG3mBPNBZ5XP2k8NbPwZmyj183nFU9Nt1Pt5bptqSpvkEoeziQqcvRNqP4vvqtLoy3u3iZBE",
  "key42": "2j8Uj95DFnAUaW1mtzCxSDwdbWGerAVioNH6x3DJxSRcFY9woMAcANMXBzygdvCxDPXEG4xKKwDCS1Y1h3jZgHda",
  "key43": "vsK7TrdqFxyXisWScfRUsjcVwzFivJHh1YWcrvZ5bpzyo7T9LCxN7pYjk7mBr76KRocKrVLVMsvpgpj7tbYhhz1",
  "key44": "5vWkZtYNciVSvifXZ66VH9y9naEBYn8XdGxTVDSGD59ksqKhr8LFotG4KQr4pjDmSjc2awyZSZAvd47qtFVrDteR",
  "key45": "3ALeTkTSsiJ3cmqrziBuyD69VTFeMKRj2k4FeDD1Ev5QMQvr3gcxH61EtQ2e9YygcQCtjEnkQCmwDEf34Ns3cfxn",
  "key46": "5qvbwq3Tc3nnf7wG9N3pW461Fwm5m7fvNFfXx6E2paiHzz1iXMW46aZmKuua4enwcHRXn3EQo4UYJKQFyUwXXTeH",
  "key47": "28XnAaFcVqVt2KzqnNTCryYWboDapZAH8CPiQn7f7fFSmK9iTxAz3b52iZqQNLdNgZ39PJmHHTLxRdtZ5Mvy8xLh",
  "key48": "ZZnXBRbQ7nRWdkMqQWJHWx2DktAbA6EHkuvevLLnUdd7nFx863kzTHcTPkWZeZ7jiH6mxm3Yv3zy6KcBaZYGgNa"
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
