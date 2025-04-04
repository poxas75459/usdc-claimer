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
    "4c2ZVgBj8ftRqthzcAtPNFBMyYgabHT1jXzCZzyaRC2Aepc9T2PSH3Vf3xMD9HE8U6DkWHx3JhpPH1U1nq4nj9th"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "396TRk4VrGMNnERWy6Fgxpi7fPdWwyyC52aqVuMXgRH6Zs5pcxprrqHJ1W1xZybft3u9FxVWmpG8ophZ7QRFTgAR",
  "key1": "bEqBeAgNQUjRshvNTz8oY8he4z4Hs69EgwwjLX7mct5C5QpWK5ZHAfQU4CirWfFHVD8kraGKhxXiK1hY2YdJuqK",
  "key2": "4jint4cQ67Vm58JG82ppivhhaA6eHMWtiaLXrRonyEdCNTF2HnJk1DMoGzG1Ydj4Z1RPPqY6uKF3D2LK31w2eJ6K",
  "key3": "3KqXnLPXDumYgzb1nqvRrT9BjBcEY9vxw5b3Lv3NShb3Y5nPspM6UPPFgUoJo7UqfZr1ewzn7ndGqK3rQrMgiJTD",
  "key4": "56AYSr7NyjinSUJ2sUgcMcthCn3GhjU1FJm4uaLEDfB2cfWE7UE1SvDjVZ7qJYTzbq91nLFYiv82YTsCWeRsv3jG",
  "key5": "EbcjvMN41t2jUJsc2v3KeZd9CRC8YtJq2ZZGUeqPazV2vgyBoQKuy2ksi7arb2hiMCHUW6FK3K6cdi5xAsqrUYh",
  "key6": "4Z7YmGgU64LUehfUvDn4xLCXwSUoYxq7uBdqiAXpbBwfpKddnRpYv9tTuk7uN7SL3N9fRVntg2xyvm2dqvx8pypH",
  "key7": "3XJyp1aztmD8bYSfYCpzGGrHS5WR5DhxJgSjnvxSBS9G7buRBTLHLpmrpaLQd9vbJM73EPAw66QfdmnvrLJSgbGF",
  "key8": "2VTkjHWp6umrJngBwH6gSZtLH4qJu4a6xDSVduTt4YnBp6gyjZ1irEpY2gg1NiJXeJmVcAi7UYq3Dz6rJNA5AVXD",
  "key9": "3MLrR6Cy1xyHvBAQFb74AgW15aiLYvtremrTqZFrAVm4hVp8RDdiFubL9o79qtcootGjDCgKKJ1tMRa8uEk77iqe",
  "key10": "fUtVATJNgyttGwnTLmJ8qkfuCeKoSz6A1fGsQKVnTiTo85FL8xzHx5r7wgG5LjwxX8yhqW4xUCQVebWpJqEQwFs",
  "key11": "5nW9YLB1jKnbkmb1xfaEt86via3ghaN6tjDEMwBJEU2cPcdsHfNcvWJ2t14KHUR7pKDxWSAH7end82rEcBPoMJLV",
  "key12": "35QvTNTbPr5QFWDaihzAk23RMfAJs1Q4zrHtfkg5XM8NcBDkQ4WFyHpGFjnaZqi66vkhg3LG6wNga6KsowGF4yKA",
  "key13": "5zBBxY3RynNgV2bqbnYb2EYnsiPw6brBcF91kKbs14N3Dp8GYzpAe1xM2cyy7zY498pFeQCwCebnV58rA3YXf2V3",
  "key14": "YZAvuXPAChUwfiT4K8UuoSzEYzHqGFkvqfTsLxM7HHCSAd6H5QcDzDGUm8MsnztA3b9i4tus73vEKL7UpfRjVd5",
  "key15": "4mv1ffkf5mxt2jwhDUNrBQ12d14pGntd4SiZFafXkXdJ52URowJZoXjKBdpshsq3Jd5pKrUrbMZ1PCh7VB8XEsTP",
  "key16": "4Ea6AbtU2uK6NWeseezsy4ow1zhBuF9DPYXeGbo9WNxtPxuxiai4EERoisbwxSBUHz9G89YHF15fgtQxKiMqmQ7H",
  "key17": "3HDsjAeCJGj6gjfovADR6JVrkSKeYhojr6mYa5VFEkt1PwuRpQfYfjpf2Na7qkyBMP2A78AgB2Cb7SVV2YNJ7Wg6",
  "key18": "3g93XQGx7sne3KdeTTZHNTCwg2t5e5QEbpdneHS8hAFpzCMrssQG7CwTfD1TUBJiCcAawDQrnm67uPt4oQhkzxUg",
  "key19": "2tjfxMZuxL35wv72zP2Ar7NNUtsWLSUEq78kgQJAwuoXhX63yRGeXpjyPPU11orcFTntrxvNi6xjdnkLsuTiKGs1",
  "key20": "3PBHD13TjNdMZtLah7PHLTazLMbdmKPUSKYxyJt2SGw5dWaFKDEAcQxPM7SrE9nGxMVrjmbDRGqpnH3c2Kue7vmu",
  "key21": "2K2hBecAcpagt3VxhGMYkuUsCzWJLrJck7CanPCjfeSyDqFRY5N5beiEknxUMofB6TD3yHkLb3vceeQmWbnxZ7uf",
  "key22": "RMym1Lz5ZQmopyoyxy32Md1yR9izrPLjcVwPVAAMDsHz4FbcUoc589CmwEXNNUnv6Azbqr6QkhRVNDdZ41EBd6m",
  "key23": "4gDB3ctq1ELZtXxDFF12PgkLELwDFEKy99NujukH4nHExuJdZkxd6t1LvfLr1v7U9sfAJvUhcBxjc9wvxxYnXJyh",
  "key24": "4fuJRiT1VhFhcWEf5d9wuoqFC4sJGhFy6VPen1mKkY1nuAtT2iAif6LPSZb8Lu9oqZup9SKYrYqdDiUi5XDE6ums",
  "key25": "36fmGnkGpWqgtEfovPMpbzB5NzbkEe8z5WM2MmxvxfipncdgpDEXhU4nqoEP9J93BBbz5y3mCxCsM16GUS8KtTiH",
  "key26": "4CcxxAgVFxfCn2Vb3dX1tRYAHhS3mUSFpjVfi2Xk9vcovcdfZSWC6Cr5ryt3CNUyAUEUgbjJ1P2iADUxL6Vi11fP",
  "key27": "3Dkiy3EyUdYnwrmR3WXySu9iNggQ6M6cbNmtgcPMGnEcGuKcWBmusxGt3CZmbjgy84c24gt8HxHTGDgFzAdwkq1H",
  "key28": "3ia2ws41itsK9uJZBfxVraJ5vogNokSJAiq4m8y7LyvxqCH1zSMc4GeMM3rmYNGY51AMTvnhA2ybRDppDnSwmBFi",
  "key29": "2T1tQxvxWckJS9k5hF4PaNmKugLAbuTFwHBhrnqDcxD4Xe2SmCEXtnFgkDWkYsE1uvLnpiYE342brrysK9Bf282X",
  "key30": "5x5xCCSbB3yb6UXrkc3EA2cpa8xDQZ33cax8nBLuT8NoCLt8FEgJ3ekKWWnUpENWHToWdGNedCBULifCauK5s9PU",
  "key31": "37JLU394z5Fbjxh68svU9ZA924RofCVcUey35JyQkWQ3xynuv8WzGLNBAxYFm1ZkJnpztLrVWBh4uAzRNmH45L9N",
  "key32": "4645UChK9koaFjK4Znkf8QuYGWw77MgN2Vnbz1iMS4Jn4J8fARfcRe2w9QF7V3XapA5sBEwQNWz4qt7GWm44XrCv",
  "key33": "YLYjFf4TSzoJEpsQA7Sdt45CBRDQu6BS91y8Xyoh8M8FFgip8ymUZYM2AXs8hR1xg2rbKDjiMoKp82EWh6uoHPN",
  "key34": "ksdZq2tnzPYNDCZ4f7YvEpXWsepsLshTVZjDQeFXDFjF1CUP67gEAWstYYJB2RtyppHehXADy7Hvn7CVSCyCPtX",
  "key35": "5Zpd6xzFG2dtvT1nMVKonmtqNGe1oqk8cJMJTfVLnsWiVfaa3fjMo6L8PwyPZAqGwFUDBSpfgb6ZF7haRCvfMxhj",
  "key36": "4B2EyqQdrBgm71BTGjFaK41JKiw3sXVAHzg1m4aMnLNGhXuxUB44c2Y6sFWzst9GTnh7KMDVM5ky7TacgqcYM8CT",
  "key37": "4F7Z9Tt2EovSVzMj6UhXZEWeuXiARGQ75BFTnjFP3XyBxXSxwGRCx8KjmfxKTrjZWXRCgk9mE4oC3d4U7KqQqfFr",
  "key38": "4jhXskGrsvUFsTx5j8JQkLqQq59iAyQMEx1q8v9YuTKt4eGoN4hR6euokUGi62c5JTTZA8BpiFJrvA22RtfpnZh4",
  "key39": "36eWp7LzHqHZw7ofU2t3K86BkKbqp6BFmWhoqCETLegZqiQSfDmJJykMrgnbNqFS89NAVmHL6LLPEZKLWmEYTLq7",
  "key40": "45gGRVBwcrQtDZhybkdYNbcVbVzUcTeHD3EWnFxFKdPe3Yb5GoPcxb2agKe9cTY9MHAeXnuJHYGQojvH7iuLZsP3",
  "key41": "5sgAWm9jiqN2EW1ZrNEGArgrtucmRKUyZzVpu8VcuZEDBrR5HycApZjfSiBSNf27jGa1Rry6MQob7CtRyNCDy2Hp",
  "key42": "4QhT2NSCujPpVsLFVzpAUVJ2VTJ1LxbR2iDaUCoqsczT1bjcojVwtRJyKLr3XBkoMp5JoVYEs9Hy2dZbgNCd19Br",
  "key43": "2fpWMZof2UrxqvhGmvr3bh1agC1byT2sAMPTA1ymn6X85cMDPon54pv4e9uohActBbD78KR8eUcSiKWqATt92P9w",
  "key44": "9gwiWFXbpRx4B8CGySWfmAAH8Eisap4k7MEsyLRmtRzQRwwqFuojC4GzhrmwqrNsBcRbS3BuxAJaxuC11yYHcLC",
  "key45": "47YhC9StU39kSXhXHUXqv2d5t3e93VtxheZJLj2NPvjDWS8GgjfCR3EcohT59sdLC5cMijttYcC3pFqrb78muiEy",
  "key46": "5icL6QDef2VqMh1VRYdPxeT5JNkzv93pFuQ45RKPGQVi8cAXY88oGMqm3WLxkWQAVu97fSyHYPYnvneDYqtwHpo1",
  "key47": "WC1W5veq87DN1EEzXHv4bqzgJSsWLgEx4ipVCa6nz6NeVWd34sE2rd4kdgtMC7Fh8WMEW6NJni6Yo74xYsgMP9B"
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
