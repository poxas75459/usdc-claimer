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
    "CjXg4CTkSzm1scAEtYX6VPPg2tVHFWy4kuGqu5sjpqru2MFdRM2nYc1T6eqbN4TedX4CtFkMfxWfRYYLYazWYMU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pDLUv8Rf7smnU7fWLj2ZiVemRAqJ8c5k5VLqCkdYtdKpj9t3efggdpz36hCLF6nDV4TuTdjRAchmw4EiB3VTffd",
  "key1": "uQdyRti5GWh9wMfbs24iEVtA6gi3pWgw5GBAJvhUqQifYW9r51tuYxgoveNfTNVfZWhUrqBGuguDsG7imJwAB53",
  "key2": "3ZDpZWrxYzomHsB57TEsp3GCMxJCdBDJZzJDQYHf9Bj1Y5bY779VFoF3wXhC9FYFPTHbSxQh4fn8JTE4AfmvtnC4",
  "key3": "64t2sgtf5FaXJu9xMXQKug56pkAVCwkJJyFE2oQKdH27GNgL6bcsDb9iXNNxg9MGBVwD7WJuHLYrWrpaQf1c157g",
  "key4": "2bicpEDsC7VfD1gPS6sVeuWLeKcWfNWth32aRAjEDbBRcvRVBNFmMGX2R1GAhGYAH7gyJdjtMpfiKnEc3EBU2QKf",
  "key5": "5wbo2ixxXWnNJ8G2gx7viGCoQUmBNwkssFZj1Gf3DfpxgBwRuZ2hN4xUe8P6u6PwguTPXzfrwMmp2WdXZ2PiSA2r",
  "key6": "21hdY7X27TsYRVG8FieLJi8HXbNRisHyLDgW83WLZaGUqG6wxgWik2Rsg9Vv22AUM3NWUqECgdhwPhPfsbGDpq7p",
  "key7": "5nrNyRrRkacKfpAxMMJbrdhMm4qxCWeHWpRrvTnLg7cMHYrkVo7EqmHZs9SGweANWkJrc8Lgmdi4uNtTBh2wLLDv",
  "key8": "uoRLgtonqMFCUdTUXiwannE3Ed4yrbLpKEWiRB2RjboN5xcUudaYCuFskrDtyAV3BcneiJnjMGkQyFqudaQA3H3",
  "key9": "5e9rgXatcWYyC3SdtM4RwUyFusCtzpzf8bGEHuoVXZ9XUX4vv1rSfAh9Aeo8qbRF23NtshQBE2hVzpExkeqdsYXp",
  "key10": "5FWk7qkuTEjQ2b8Fo4xtkD6TJbDt9T6iwpqEWzRN5DEb8EDqvPhxkZrgK6dthGwm5NJp8Wwn9yinK9DC7nhuptFG",
  "key11": "4guMUdnX3945vsymmSucvVLSHCNmWQiSs9hgz8K9zR29UtjWG4bJe4jDQYzoeu8oWv3KYvPZGiQUmyqgpFsvucsM",
  "key12": "UdEgNyY1GHoKinkLMvpqbXPjP5vgDepRhvnayHvqoXfGrdXzLmBMDykkXA3jfGyyvbQVA546HtNK69qpqNG5ovM",
  "key13": "5Tgm25RtbLYR9pEyh4aLxQ8yV8ERSctwkEjh61EgT82VUts5FSmpt8Pv6aruTKFhJFRws5XEhjknHPZLEvm4xGM2",
  "key14": "A1Wb8N9okmq3EcSbJZkjWLf5nMXLhGPtL1SkejjeUg4dBGUnpftgx9VPXgTPerZLmatSueW9tezMDFD2G5s1Gay",
  "key15": "3tK1P1ymRVvtV191LTdxvsU2ZbktWm1i8NtaodWjfJdg7ckeK1KVg5cyrC8iciM6J3Rbi7XUfHRgaLkddsSQwsZh",
  "key16": "5vcdEQZMu3YzGQgpJdZEPvJuzCeyc5C1LzfoxwkeMFAYYAUCtFixpbYLa99ZQvx5sJmVaifZj3QaU9kehDwxpHcL",
  "key17": "5kNZvuvdRzYje9v5uG9KTXZbywk6R4WQw2LpZF6NZyoJKPBAbQSk7dMRnwQqVFaCna4Nr7BmXP6awVvEsaoFcZzy",
  "key18": "4mmsEoWjLQJAKhiuqLNqTLHf5YyRwFhGYpcSK6DE8KHCgnCv616SH71TaQf5oWHamiLmN2Uom1um89hiaoJs8Uoo",
  "key19": "3ohdV17EuVBmNg2cUSjPAQbpwCqLM7BaFEE4xxuQeYuN78wFzXXNxS5tC7iWDTrSbHi47xiwr5ikL8Mn6GPet6LB",
  "key20": "4qSi751cRUsJENdjMxMKrGCfhNHyjQktDyknDV2e76tozb71wKfDekMiJGGAKNqh1xrPhxJNrd51nHZah3hbMtrZ",
  "key21": "5nu94C3BUbna1AWfHbewqvDzs7C1Bicg19dMdGk6En8GtXVrp4c5bEZvSXHMVPS7DfC4hqdpAcUPBNihDxGZyMfY",
  "key22": "5THcxHx7WEeLua3z7m8ik5M3sWdHDERUYZ7nTSTTTjo6VqdduzoQPdxaaueN6fzoGGjtqVbVtheVtScDSPxQsPu8",
  "key23": "3GcSjeYoKyJuouGiRxJ1CXRDSRBArinPboEwiNTQVJguSukPeyEysH5Pp5wPKo7nVAiEyt6NdeKmKkDGedczrhPz",
  "key24": "5AzfRQXyNBrxypEWUWsm3k4ZMcoxkjFeky7M4zYhi423UuqG6SQJvwq3QnRf1rmiBRLQXLtSAV7fs3tdf8tz8xP3",
  "key25": "58HznjFmi2iaow4FevciFCNeWRNp8WUxB4tkhNafakejaHLwsLUw3QJKnFZrkoywebRewwLCR4L5Git949L5grfJ",
  "key26": "54zAPbSgtsPw9qJ98Shm5DnGszXm2wBG1Skm3hksznnHu6fmTJMoq44kTmjpGmogNQ3SjgUER2xwuQ9DwjnmvvBm",
  "key27": "4huqTK4BPPWJN5G8XURqo6FFGP2aEjLEYSh9t9rQQy6bEpPQrQ4jykfQbiEXr98ax9MP7pUEqMAmwtxASK5P7kH9",
  "key28": "4PmJphJYZoHcNepgKfcjyxoM2t6yb7TAepVWLbK1wSPWtNDtn8abjACkfCiBch3rR2JtuhNQcQZsKxEstHUPLQyD",
  "key29": "9sMxesrWzwcyuYNYBzpq9gY5Yhp7ZfPcC5dAgfqNFM2Et13bdxrTDjudVSjfv564NrPxtioFcvBmtwHRvJ4YPy2",
  "key30": "r6j7sTrbdPQHmHFMexV93NcFTXajWc8LpGrcbEoCo3YiP1tQpkhgoeFBrtyMex7qkLLWXVs9dpMWmY4C8dv4jKH",
  "key31": "eq6rkqjjQZUXXWnpcvBBDdz2qBZBtsnyfDhUGycyJSYSjxHrX6wcEVxu8BMDTg5SrQ3Ay3ish1VhNt6sJN6hsxn",
  "key32": "5AcbKiT3CGVpwwmt1JYYTuf64pQvHtDkhMinSdQbgyHczroL7RLkb9kNofnHLeP68E8bi38kJSaNJsG8Fwtf5KTW",
  "key33": "3G14ziUwZrDGLvnuZhzwridbLEYNxboMzRPxyo67w9Gw3GkC5WYd3Aa3cBGEiovHY7Sg6GhkDiBzdMDCCHrsYait",
  "key34": "5q9ybVndJnfogKhad9wJbPo93veyz8j1QWGbLpoyzk9AGrpw2PMrExCPe1fS7Z7Td2oXWWRVaB3NGb1vTxUQsNZK",
  "key35": "3ay3iKnbUvA3NnXGNGCkxijMeLgh4zJmMeM2ANYg9dAQ2NTcSVqxox32tTp2ZfpLw1fjoYCNfV9Z5m5mNRaLfq8d",
  "key36": "5nfc76Wz3UfUGMEiqrmG88x1XfomR9aCSRYvgwr9uCWz2bVP4wANSzUv9hWzsTtKYWJojsbRwo7hYTr21rVF6Kiv",
  "key37": "2yKhhcjq9LDY9rLxRnuLRHv7otSGBMgYZ1oNJMp92oo1TfWMrSCAtKmD9DPh51qfwZPchcUHxaggxSyFFtYBTEVa",
  "key38": "3Zi8Dfs5ByyiUrw57wvyzPBtAAAfUfTYAx3nWX4cne68BxeUcyzz86T4Yp9KJL6eiErvP6Vqju6a1FiFkKYRab1R",
  "key39": "5ECH2Ryae9jf2czmnrxzJwTG2Aya7A3CSjeaVv43XjBSizSGU3XhhGDXFysxQQBDFjU23Kt49utwsSLPcg2hXoti",
  "key40": "3zpd5BgvWJDLovkZE3gngvdhfVeGEQ3BXwNFxgjacMnTiHMXu9MWzhTdCx4RwdPKZJpirC87SNHezjVpGXQcjTtx",
  "key41": "ZAKKMLqoba8XWAzMdBVX2ZS7WcsyEGJqRuk6LGtQkm6oypQ8xKtVB51NX37hsVFo8VDCGEDaD7XteeSywcQuz7q",
  "key42": "p7hxzy4Gngd71akdrbE7TWNxjZZ699t23uzwAAVkCbEN9a33s1d3Np1Niby6ckEDYMx3Z1uP6ZWa7XjVETZVWz1",
  "key43": "2PEv5ZnFo3nBsddVQL75YtKj1P3E69wdEpei3VchQ3LWkon6f6ADEj9ARXssU2UZvSr44tto2r7PTnhQVbT2cMdG",
  "key44": "41mdUHgfjdvUFM248TRmXEGtwChDYoXxJ4qwPo4SuFhULyRmgN26eUQPnypL56P3X3SE8hvJ1b3ZaHWwBcQQNJ7x",
  "key45": "5hmwqrLmG4J9qBXqJbf4F6cHWArzworM691en4hW8mHgpxCARXcvwKaQbGs8J9TdPu5iajKU7BGNpTM3iobySGrY",
  "key46": "29EXeEJkGp6szQiLXwCqxrNKgjnNmDKWUNUeyr1146AWNTPsKDQ89mUh1bfja1dhPLENmJgq1PwyK3GvHjkNCRGt",
  "key47": "23fK89b1nhU88GLVxUtA54my19VXHYYi1d1Uy1zLMej473RmkodBkLCgjazgGNHTk6cfm5p1iRynSLxB8s5DrC3d"
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
