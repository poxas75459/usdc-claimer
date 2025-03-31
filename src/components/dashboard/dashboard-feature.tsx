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
    "6LxDEnuzZcrBDS13vypxw85K1Suk9btNDo2tUa3Q2TEmFyyhCnphJD1oc8CezApARNrDEWXYew15RyZyPx8VVKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zSw23C7gSyrPFqtjdaRF6uHF5C5kp7NzK2ZzXmiUDg7cV4NkCxcMyfNUEZaePztqbDo5UiRTUfygnKQj4rDetU3",
  "key1": "5yub9cRQNnhyq6Mv4EgHbyVmPBXkTVKY826RpDU3RiiepeucjCqYU2MZuqr4ZNz69TfCHksAZBVqbEBfFK7bYf5S",
  "key2": "2hTHrB2F64GLGS99CvusnqzUpYBefQavcpMjtQ8FDfJ5HrCDfV688yqSP4Tun5orYpiFd8raZRd2uq65XYq7DpvM",
  "key3": "3RuPbPVXgCrriW3zm8qidD7Hg7xcef4evgvKgguQUnwpchXJiXkTUkRp7UemQrj3gtqZ5P1aULzxdxczPB42TSyS",
  "key4": "5pmgf1BbmM1dnXeedzdKqqTnNUKfRsMBehDbL7E2aMBywkojfU9PKL7QFmvqFEAqyBXYKSDAGiMB3Wd6rCG4hs39",
  "key5": "4Fj6htSvUHAXQKMSCAfzWF731VfZCBbxSyutva7MjNamVQdevHpTYTXckzSwfLWgQTmicukZ3fjXk5ZApqVKbUmR",
  "key6": "3Bek3W172H3txADjjkFV1y82bHHpZqSBWiLKwFEfNefMxNckC1mzJDJyMCmeVt96dPUrozgdr6bD7eiepK1dyFmU",
  "key7": "4L2LRMVc1Yf4rgSggFt2XR9TyHsugqAgrD7sToXNAf5WUKUU3BsMmbUq4S8tVjtV2mqazmsAer27rqEBsn6DUdKt",
  "key8": "2wj5bXvUYbwAL4HK9ssbcs6zgRvp2DaQvq97ia8HARmRriMGwSh2L8xEzGu8dqCAm3rAchU4enzyqz3gnBiDmkzh",
  "key9": "2goFcHZUicjuhijBcBgKAwig9htVZbCapm8Exi2qMcgM6uAmLCSLWEtqF9NPcJB34QNMwFjAvZiTHKNU1JU56qdh",
  "key10": "2ZWkdXhPZBXubB2seYhA6ePw6qMP6FCtGZnS2VCbMusJyzaxH7kAdkANHxYhhvKS5snvPeZhKG8JdntLWXLJRtc2",
  "key11": "rjjVX8aPYmbtsU19nVTAuRSEHAKMpighGm99sxctjPyTKktGp4wYaJRXewc54nyobEffH9W4aMgNAZznoVcLczi",
  "key12": "2H9HEkXStVsN5oG9z1dK4s7wNPbAFNrTmF3DduFRegRVpqBNWTTaAo23haJam569MkH4YRLccz2MVVcBckrkjqYQ",
  "key13": "doh6igg7TJ6SN3GQYYHUuDPvgiLTa3YXd8jvsmkeito4YA8SYDSMRHh9UsAD3rQYjjBVbW4HhDdEpV9MuqTRzL9",
  "key14": "2AWA6hmAS5aidXMtDmNrTu4LUgmaJXZALXbx5vZCBeZxUrF8wZfD3XBeTj8ehsGeAtvppTpYa3VcaVrRG6kDm1vQ",
  "key15": "JH7eCBegiaD4NDH9uWrkUjFG54bviNp7PMaz9b3aXCtFW1YeX6izb4UuGfsrAEJ71BJ7G6y8Tdcz1fZbBPqrJ1H",
  "key16": "2m674eE7n1AZ2AmQXvoRLoDEYojkUqkN646BDK9wHkin4niHprHkM8dHf4Gtfj3a4no3ULHnYqFSzAKzNYth9uDr",
  "key17": "3KM7osK2q7KvTmJpHkYp6Hrsu92rZKpwKyF4EYNJv4S9MKd9tvnLxPXat3j5vMKM9pMvrYLoDZjA4o8kqhUaQfqY",
  "key18": "2baMzdVa1zVa2JRRRTh88ssMvUiCizheBmYVpYT5sGiFetQSL92wtcBoGD8ZMqFY1wrBvCFTc7EvbpjGcfcQB5jp",
  "key19": "3wV5LRwEcc1cwfeeDuhFnECeX84y1KWq9b3eTyTYiffAk7xDnBpsA2rXDAbf7m4nn3mb8TFYVQjprRsBD8GmRgT3",
  "key20": "32rKGxRwzv6e2QgFWtXM1FAeWf11Ki8fWBh2RJPubZkGG32v6hQSJXNPNzoLYnJqqL6Uaq8qJUrS2wxWAwBtT7Sr",
  "key21": "3YuU5JJnKKAs9syTLAUAogycULvwPMsL6LMz2qN1nVXfjN95J18oAeP5WBdopXdrLNubVpmW2R57PYaFSLLb8CgK",
  "key22": "Gnm8Sio4aPVWvVHBiYp2XJhF2DyredvUs7pmiJDxTUPpLsiYAxeY4LnaE1pKHX5WUZdoiw733e5dzZMoneWpQc9",
  "key23": "4wG61D8skRehs1JTZMGa2Thkuq9ps4SttxGgGRE5jirVSokcSZUqq7ydKsDTpYuMbSvUK65dEUM5UHDLFy45cvH5",
  "key24": "3hWMTqDEvNRQeiDYPZxzHgb5qXM4dAzGzDr6GwjByup5WEsPoC4Qrp5EAXRdtPkSyuzBrSfnw3NJch8NBu6PU5U8",
  "key25": "FHvReyxt6h8oqVZAQnAiy1UcPnWggKKJVceoerK47wp1Rb1LB2zeerLsBBRtattnwTrkAgVjJ9u1pJ1CYVPYRW3",
  "key26": "22ma4u2Tb88ywPUmzh3aWNwD3xXSQDETnhnKQo5mdizAVriBSz6xBFRtmZZg54iq3ukichDdpYEcMsgBH6rbq7yq",
  "key27": "t8XNVciXHBbL5S7D1sV63nAP7fmALuXQUDgutkrRzPAbpTg8kGeTU1zB6bUaJFWzE4NV3htan3bbvJibdAcDBPg",
  "key28": "467Uz8QzKqywJwH595C9a3puxhbJMXLjgmN8jD2URgaWBDzvykeJxWuxSb4ueXGq9fTakwSzY6TqDMGrscGJhcze",
  "key29": "4jL3AFi7ixVwfzdMmhTYDkierTTDsPpRvs2dLnwR2wYUSjH8tFppBUn79FjQLZR5QHaEvGhWR5x6H1pR18zkSb5M",
  "key30": "613PCdsDtepenUvvYSoiBUyaAyJNpfWCZkBsLf2PJbNaX37oZwDU44KDd3YPffzKYtvDgPD5fUWg7U9erTWoJwWF",
  "key31": "2eTuCRC8jzYKiFRknGXvec18hmBSezX7tS6c5fkwSDEB9yKJxfPCY1Nx8dpmxsg7pjFyfMhKeAQXGhikxipn3Eh2",
  "key32": "5vgdWwArtBknxwkcBfvWVb2oFuHDsKym5fRRCjKzH484SyQTC7CYsYtRUZQptpzhiASESUcJbrFwUcR7FoSf1Jfa",
  "key33": "XHxoAtjR7xiT6ZDsHTQm5b3JyPgtf26wWCKswMccsHHSCcynpQ15B1h2igCQpCcCk64XdDwGoYJhaVPM5NT5YoN",
  "key34": "3VYWGxsgfy2Y9BC9pGgkh3hcYZKTVRqNtyQA5Xa5VbknonTdkb5UPmVkDT5AM9gcsm97YtbYMWUdJTYuGmutwgxZ",
  "key35": "2xdzmjm5qiJ93PjHgwiAKggs8PtdGCaQN2pZ3Q97ZjnC1MXB8Ln8kmd3rd3JsEkch3NVt2CsYxHv3zoa3AZPzpvb",
  "key36": "4NcdhdAB3mGV1d98VM8te3Jd3tH2Z3TRuCeuyH1unrzQaAeVKoYuMhBPkvjMbKH17346KhRxNyMoppzY4Uu7MDs2",
  "key37": "4zj9j8pWvuUsnTrZkZ7n4NWmpgdd7ShgbZk7SYgo6QUNj2v8F4wNot765RhzEKfgEmvdM1UFSt1txVofQfHGzGs3",
  "key38": "4Eqvznv6v8MMA5QmpqmkJZciu2DLuSWu1CPrdZRwLBDC4xuDW43f9AFs83E3yV7JC1fHXrNpVNS7kQiiDiVg5fYy",
  "key39": "5DgBip6BDsTbdnAhb6pWUYQgj6h2LesAbiJdnLYiDSHk1DYRREC4mUfvAG92gT7QhyttQ8xZmMyxpwXKvdJ7kSyL",
  "key40": "4nf1RzNiugojDcuo6G4meSREPeCmSNtLb9ZM3rFSDk5EYdDsqu4eAxuz1QfzXqTmFoqJv6subRnY3qScd6uX5NV9",
  "key41": "54VJFbcUKJSCiU6RsfeVRbyefHc5w5tbP7J95RmhnDXQWzwzyQTMF8ae4CoSC8Udb5R6Dcmv3KgiGwum8cKH6vCm",
  "key42": "3gzrMhUTpDKP8Lb4qapVvK86vhX4dYgDsx2wRywATHRcGxLco5poUHQswWQg2dZSn7iAZgZ1oGruA3BBmzU6QaQf",
  "key43": "3CmWXjcE6dGCDPAtK32Lh19u91fS8bwMemaiytxr5ktj4J9FJ3cDAR27H1d5ApnvjPuNF18puxYZtcKw1v714PCM",
  "key44": "66AdQuZTwfaWbanqH7ytceyMU7LbDsCjTU83cpwx9BZKKBzt8M36wjdj2iYe7Xx3NL32WgfTHttLc9PiZzBPUyPT",
  "key45": "61RMcyRpuXnz2AJNcaYaazy3TKU4ZnFDinsm33Wnnvt7cczFgfQDoLZTnL9TMu4eDybjqm2ZgG45ZmSqHcuubsny",
  "key46": "3opATV6o5o1HF93E1SPVyPXhgHHmoQN9wJJVfkKVEXnN5UuYMcTriMGxoTXHFjCX9BEdAuCsVKLMaxKNRkeujMBP",
  "key47": "5c3aNMqTUPwDDee11cJWXpd7k934FEjdrZPaH8Nj5F88MU7kLGgEXkz5akwnmK1DYBScYmaPUkL7m58ewaroD2Ku",
  "key48": "2hneKaUhsycPp9HntbBGsDdbHSmnQCYDaWAmZJQXqGqQ1xUsnR2cpm6QVKtp7sQSZfHJNmgzaEUFRoWJZ39MpWkg"
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
