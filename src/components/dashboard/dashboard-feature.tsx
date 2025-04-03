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
    "5U32zf3WpHoBtjxK347rLR4oeGuAfHSei2b3W144QXcQZ1UTawpd8Q2HAPawon1fT4R4YuaRBF4ekdG8kPxULZeB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sSKaDud7PLkvocDQCymyhAybwwipNs8orLAi1F2QVGAYEca2jiZUPiHri1UJMcFikzkewGaBSF1r2ZVUuFXg8Qx",
  "key1": "44y7EnUtZQCAUfVfhUK5DfJWRT9Xm4VGCW3mhgwrY42ughHtgH1twKSksbj1PXR8nioMsHNMhWPT3Nc4CKaDAGhN",
  "key2": "5ixY6HPCt6YCDjJMxnAsfAB2qN3p9Da7gz7gcsqMDjj5bxqjsE7F2HMmhG73PpYkxKw1Gnku5rtePUmXN7fgFQzy",
  "key3": "4LXetwrzgjsdyiRQ8gcTqBtCHEgaFg2HyAQDprrbMJRmzUVQnACXzug9WnrTe42xmeQEP1wyFKk2o6m1Ypdcwegs",
  "key4": "5BSLYqp8Xf81fkPoofV2Z6Kj8E6t9DZWcFsECRppnDGGTC1xqknc6imnjwdv9k1ynbqxDZAFySV36QdxcdaMPr3U",
  "key5": "3xeck1J1hg17fUkaRFEuHhzevA4uzfaVuDiaX7XQdqJ4pKKWYBPNzQnxaaxg8MEHz83fSqibYhT7w4QhMfTgumJi",
  "key6": "32vbCQsevUWckMUtPEe7J2NvhK9y7eRh9rLfki4geR2sPwbnM4mj4DF1NLBNuTChBHip2ySEtxce5MySErSAbLf2",
  "key7": "NxnxnqTmVdhEhKL1Z8AAFizetfuR9APfqJvuygp9B66DdBz7JJqRYixMGWVYBJjkG1MFfBZJveLgmQDoVNf1YGQ",
  "key8": "2cNatAEFp6zEcK733E5LZUTUgJj34MWXEpVuG5doQLt5qn6LWALXsaUez9ePEZAXpnewsHKBgihn8AJqf15DbJuC",
  "key9": "25qWqwRCR3hvy7SHUUaALrG3zyD7QqK56qLKpLKoiPaCfCKpeJ4UtoWdoQSXp1r9wCtMZvBxuiY9smMY2eMsQnPr",
  "key10": "3sCsj2tEXLi8Lw2SC9maZkpAYRPQ7CB9XZawv4o6aT72LwMCeqPRwnz1t9sXrWaq4QHonR7SMFEz2btWxwJLyVGJ",
  "key11": "uSebj8RTJ22UEUe2tgcXSEjwiZdNH2woLH41VWy9FXyuRjxCmgjxVKtyNgcruj8qiTNdK7tZpTdnYSnRLf3HaJw",
  "key12": "3kDZjZTukFResbCVuucMumoPsojgTksZ4X8MvHFnNPRaxRFkTwzV1WMV9z1TpEA1cAfbe7JzwkfhWRemUcDpPNV8",
  "key13": "24WMd2YJSosamzqshNfk263uPexpPfgc5sYhjHKRC1MY1VPPvWLnMSrBFUa6GCR6YMbrz5VGY95Vy98N4ZMa2iPB",
  "key14": "2oMXL1rBAj1dyktSJx986u7xDfyZJ2rm7BJhB5KpZAFGgRZKcxkHZ8DBuBEdRvX9gTBRrgGVF4V2g84yPbfJ1Ucf",
  "key15": "2JfRmdytmsGsV8sQkdrVmAxx3j8ey23n8oGNmDX17ykG8sSmWBiPG9TQmJZCHMKnUN4sRAQzSTfeXjAMnLCXAgGC",
  "key16": "xSs3YTf74m8Q2nwH4NLmHB2vv2MKAwfcH4Np5v7SQ4Tb147zMi6rtUdrMoz3eS5ztJ9wiTeBwbFqaMULh9HAbnA",
  "key17": "4Z1H2RWdEzXGeY9JcWa17GzAbzB2vLJA8pSYSMxVPXpZNsx1r87GVNgwXZohSiXpHQmNLMcYoni9BJqBtyeheaB",
  "key18": "2ZXcQ2F7TW2NN3QQG18MRFqC12BTLUHL8NoUkE9CnMVjGFVr2qnd1e17k6WjW6eLEogxhSM5mRREPv3igMJCGrAR",
  "key19": "YxkBWTgEnbpuP7ReXhRLbj8YLyEGuFMdG5qjoyjUWpYaQYQm6fUoyb9nGgdtpuZY3p9JzauHsHe9izfEdPmBWTq",
  "key20": "EtWQcpEVxNZ3oA6Lp4UahwKjpwXNN8X4mstvBfXyEvZVTgkoqx9cnTLoqZYaAm1za7a4hAcLc3yFCGZ3XdYLeCk",
  "key21": "3HXe4jUchdA1EzBgJu9UrMkfunavoSTuNunag1TWKcLF6Xvagm3LC7SPCBiMdjBRiFu3hdMNeTrLfgsM2tbtxFrP",
  "key22": "AQwusNxgLYown2BjkC6rJg743LkgeRTnAwJZsosSvgprPyUS5HBvL2RFuNoCt5F5jNP4NPov3XxVWBso6ZE3Huk",
  "key23": "vVm5rnAFhG3m51VDb1FUyf8DVdd48cWeH9QHeXJWrHSExazwqv1rhMwX4XgW2yvuaE45oK1gVQmmTuh8ZX3eBpN",
  "key24": "PgL4DApttSWzPnnts44zJZLk63Rjini5LEkrFyJdfCJkuoqQ93ygWfUVcmcduH2rPLR1iXdnAs9DDyPHUjfauiE",
  "key25": "eZU5QjUU23UMXbE7e2ydox3BB5E4vy923AZE1GSGMbcrJQvPR8gRiAGeYVwJmm6jiKjni1CGddySgS7Kufs4t87",
  "key26": "4HCk1SDon8gvQxjF6i3FtnLXCWkDXD8odTPtaMvikRpmQZB8Y7Ua4i6FPM9n5FchsdwQn64drjQYkZ43wcRwEQSS",
  "key27": "2snhuAHwKkMhvMYPYpoFPxtD5PfAgPfr4uSYZjY4jVt2qzZ2Aq1X8cL27MBeh7YX6L5iy3b8WvLFgcQNEN6CHHgt",
  "key28": "5v9uc4BZfZTPEay4ezkFtZ5WwDJHJU4MQ4Lkq31oEyv7DifuQiJMdME2CywiLZBfEgVjYYdMprbFak5pso2u2btw",
  "key29": "3ewztK2h5EkFBoRGc5DcKw3rsBx683ezh9epkd7suM1KKnAyYitvqwTbR2xbcBK8ozGKR6ub5hEWoknXjiAy9g43",
  "key30": "2j71Pq31CbvuCVFJBU2HhTP7AEN5ZpjDPRPxWGfmMfVS1SLn7znQYAcAcVe98j5Bx9saH5Q1D8hT67ZmrPezoTsJ",
  "key31": "3bJmUzggbxFrk3LEB7rvzxGcd6QBaDQSZ6YJAq95annTtHwqGTqFFJzdwCSurFZBArY3oAbrzkFFL4B2KtzQ6sWB",
  "key32": "3hcfSXwYroQLcW2rNS9eyzXApskLh39hi4R13hWTSqxZ5wMhQfq9uCM4GLDSGPKppxLxa9HtT3AdS4QzoBSSNYuS",
  "key33": "57BtSzeVgoSH61PdCM4mZSo8UeG6GJJaTMD6WFRgndZ6PgqPU6yYYffRcedQmDimmS5vC5zZ5MxEMCJpXDG7mQFe",
  "key34": "MoNSW7PyfPW6oFbmvgeMYfdKqk1PeykyU8qDjQGvNgFXYWMQuf8HkMyE8xbCxmMXW8nkdUGmjGtUMxLHQJHmsxZ",
  "key35": "2ETXRPX1r2eYVPtXBgmCzydC49Pvbwp8oq318bWB76iUPZKvCpbXkhTB6uDaybGG6TyWwsFvaoWm7DUgxJvkjRV6",
  "key36": "4w3s3gJQ2xGtXyQFfwr2JzJVu9SQa5G1mkU5R8Moudf1rVCJU9zy3daaQv4cHdJNXXvfCW6SfgsFX94p9XsEr6ik",
  "key37": "5QZJ4czEtVjeM2s4jhSLCEsZbdJbKxVy1gRq3YHWgyabihmX91XhGTo2grehcUZeyPxfnyaUyFFAYCmi39WJQNik",
  "key38": "5gqXS6gstkQnTJDRrvf3uhVrBh1STiRpAkbb9q2KzmSKJAZ7EntJ83oJAHdjPgNkRJFpUpKkBiJt7i9eZVADb3rQ",
  "key39": "4BiCee4ivzbJKkJeurWGGU241CumhWBKzJ1TrK5T6jGQ3RYYGtTpy66jKPU2YraxZ2BPMY16wTLypJcTgwsuefNX",
  "key40": "27HnPv2mz1vECptEGsdd8LcNGayhDDJrf4ajwwBfm8DYjPAgvioipbZNboZGjL6m5XxuCHqFrHbBF8UqhcvCvw6c",
  "key41": "47US34nJ3PMFubDTynwjXX3zToJ1J3KLEv4P7ckDnMWjzSukBch9MVJYFVtHwfMid6zrqLUFJoLf5coYjDxARzcN",
  "key42": "2Rw2adzNMms5mGkWjPg1SHpUuctuRKq1eRbcq5gX2DHqkvimB8XiS947Txhn6E243NJi5XExxn8WKCRH62okGdGm",
  "key43": "4g9yFFkceWwKMc9G3r5NGQokYWVafhxjPARUGRa4S7wgpi1qqLH8LmdsnHfjyZpBGjth7wUNmyEAkrPEyAxYXw4u",
  "key44": "4Nprcb9YABnjM8AJNd61iQ54K35SWdx74xGqLGruWTsw5vnmV6seLh3Z4GxiLmQp29KYcrKFdd37yRqLJbYuJ9E1",
  "key45": "4fWi6Xy71WteMHSoG2T3VJxgzr4HkYnzDM8eiALGN64hcDJBgSLZEvLbSmvUDJnxp5nkFbbvjoyrBXrJp2nN8WHe",
  "key46": "3SKHaWsGaLzMQE2X6T31NieYNu4b2cdfkG9gCcSMEAeDfyrkB7NCNLA1pdiAytj2gvBDvtajWzQviyvsHBjQruct",
  "key47": "fBCQWzrk64bDXkgX5JR9F7EsX4uMT2QB1wcVZqLSn6Jow3Rb6cmfageZ187n3puxvVAEP6gEZYbya4sDirnjhBY",
  "key48": "NnNBEVr3uPLvKMtU27Y6UXdQrduCYLHEhsGeqzsmJhPkWUDfnXjnRtHF3pxf5wo1HdfzC2hBjFiFNEkzrcrhDjV"
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
