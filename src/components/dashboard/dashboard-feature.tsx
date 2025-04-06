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
    "oJmpbSkqzpbWe7sDHHZgy3zPFZjffrMxgGM1X7VjiJikcq6yCjMJNRkGU9u4Ygt1vLGgTPSBcD6LEYt7yB6x2hf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vLNZbWigvW7U5aUx6ksPMd83KCYqXwFsVMyZKE475gEynBek42RMk7gQBatVPmMKtiPkCXUcjn6VHd7JddFmJq",
  "key1": "o4pu88wFbdEG167PNz6n8gaAsoAGzawizPsMeB1VvMLi4ujg1VBKRSCzvbDiLwkgw5unR7dH1oczBGqsTZAFuJV",
  "key2": "4F7vshNb1Vd7uHQq7u16f6J1qh7kXug3QPJbFq73R8yzKcenSaaHduHvqrVuLZQNM6BDZivsGFmB6yk8e58ffGSq",
  "key3": "G4qhAs6Fq2dgnMEZ8DBc8EfztN5dBGZjBEqLypepA1YtCTcavBesVo9hUmmSuwC4xgrmpG1gf6hbUJorYUzX3kP",
  "key4": "2EdWuLZUa96vC56gnccHySeSuexWJF3NT6GeCWg1Fr8YWw25Yb1ng7p7XhFhThHi2WLWihXWzgruuCcJKHoo9ng8",
  "key5": "4FdKJkfk2S4DSjPptcoQcGiRvFyQpprSbYv6BWvfZpXyoVtmfGmNK85vP425yEToqHiU6HG1MABjycSk4ZS3Cti6",
  "key6": "5NtJY1NfXTnKy5gqpBk9Fe7Y1uPWqcmd7EDuVJASBbCsXykYNtehCE1mFmFs2s8RF2oAr3EBirnMw1fWRYJFLAgK",
  "key7": "33QSyXHDo1mxYUPXoRKUW6ajhazDzFeDi4422oy5fEHm4tkGRafRR2yx5ZXEYcRBK82srYrn9XQ2DsAVtvXstdp",
  "key8": "4fQGSa1GeLwmo1UVmEN7S65tYyUTTi9755U2Cg5V7qiDvWzcnGmy55fBTqwHwsBUcR954pUGQKVdB4a8wd4hHHoM",
  "key9": "QVqpRSp6RaDyYWDtQG5mjvz6E3jXHTH7TtnbnqFYjfMXneTiiX94y6C7J3FRW2BdDwWtAXH6mEv5w3qV1fnRn1h",
  "key10": "4PegeEn9dpxRRYCHUggv5JWeYVUNHBUdxKcFk5jzwAW23hUvaXKRfFz67fD7Q3TE6GsfwzHYULJPRYE55LiiSaEd",
  "key11": "6dN3ip8SkHt7nJsvVEthUcMEhoTrt8zwr8RtbTB66jiFvpy2nhDt4kw5JSLxQjFFGpV8HvLg44VvC3CcwZZTcHQ",
  "key12": "2ArtP1wL5GoHJrJDjxjTfcXvnZqs5Fyv2SewpcWwimdFJ8kjVphaJzUHGAdQUXVzDFQChzr92TRhVnUsZ8YuzVU5",
  "key13": "591K3hNkKpF7UQZsgXCY33jDsz1dGhJxKRhDL9cJjJ7wCgJxYoJtZjNi36Bot8JZXsKKJxpqHZZZZcPP94NMRszN",
  "key14": "5ZCiaaggfkG1uXpgFXyW5BjQG5CwaQVTHgQWK5Cazp8kbjQVnyUdUDghQAYHDC3qtpZvxx1UX9SjPXYQRS3uRmTG",
  "key15": "dBmThxAtvtSF27iLNwzYxrHpRAgBmq6izaj3tVZpzzrjA3FBDQcxAsURckmUrx1e9REQzR4H5oAYSwY4rhuHQe6",
  "key16": "yDubT2AtN9QY5zAJhoe4qLix48tp4dyJJ5KF94UWAiD1vxSGrfBNY5qvGTWwEyiKA4oPsSJvFV2JNYU7bUY6aEU",
  "key17": "31vnmN9D7o1zDD8ikJR7caSPxoz8utyjjymeNpjAWNCQeTDL5t52pvajiGD1cb9tLX5qKoEnKCPUcuU1dG42HHSm",
  "key18": "4Fm1ZdkzuswTb43LwJVHfeyDSJNm1fMDrChm3PaG4iNfiAQLfoCgMkrUxsyj3cmQAGFRfBQzACfjGu5n1bYhWebU",
  "key19": "3vfXgfYN6iUB24dpZBuGMS1iLBXKqGUB2Ss6BcbE2essJjTZtqraXzi25aUb97e69BUEkJKLfyfejJV8whR63311",
  "key20": "4RpJCJH6cYaf4N9ZBUv7xesxseWHkxwQDVCCjJVELgEtcEeGocY8hboUZZ2UNXh7UvrDBpJYKd8476sw1SnYpeiS",
  "key21": "ng5dPAb9Q7xFsgdnPPsNea96aAfFkHGXUJytWwUiUQXgdgpLdeG16NCk3MyDoqVJJP5GpyDki5a1ZubaUodtL5Z",
  "key22": "4X3Doywi7zyjz612rUw2RjrQMz9WBHdSa3TJcyeL9GFe23gv1deLy7Kyv2BaXar818MXKego1ABYM11cQDCyEt4N",
  "key23": "5QX8aeGAM8hgjGPmEoULcmZJtjZzTGn2n7Mde5LWTikZBcEFwREoWtz49jCi4igxEezaekWKiuLdsLCGBtz8j1ST",
  "key24": "2WAwdEu8VHdpKphtyEwwNRaTrtWuptw8c2t19toHc8tA6SWroXG1Bodk2ixSBXRJjVvqNjWBEVNALSdVgF2e1bNC",
  "key25": "62NSuTxQKyFxbonXPf5Kcxe4uUgoH9hhSow8Uhz9nmb1wrTpFTiXWhvzyrLQfAYv4rGaNKrXGNMXUf6yTi9orD6x",
  "key26": "4p295otxD3WBpr1nUnCwuhbcSx4mjkCLwm2cZdZc6Um9e4eZjMM5bFZznLvG6wiU1sbuhHsXa8kZgDN3jWs4jy9",
  "key27": "2hCaZME1oGKJwaNvgz26YWHVCqq3o4GMYxMVak1tyHj9JM7fE9Y8xQwYEV4GbwgRGqFxCxfthZamek4Vbm3WMpjZ",
  "key28": "4Rj9iDYzvgGnxKExVFaXZwUodbsmgNnoEHMELN5Q5zC4oDAqMFo5UJPphFn1UpoNqJ2vjfRBkgNvnRktKvSE7edp",
  "key29": "32K6yTS6C2oZiMinoBBEBCwemTyvYuU5Yvywo2XuxJpSgm2FZB6i7e9C5FbSENCFTfXjgTbmXkhYH2X8eq45mTXY",
  "key30": "29WndKNotPzfbeBELsVBAmB7fiJjJhf2MTzcpYJbRPVDoxnupDXZmeJzUysAwqsJHZdmBajNrKopkY17aUA5SsKz",
  "key31": "2Ff4jk5xjWbRiFRha82KvxvY4pCCmU7Th5VzJmu8NufQtceB75zZokVb1TkPWg6aLeKdEvM7cfF7nwRCikTu4gGS",
  "key32": "4o1xrWKiVBvpPYfGwfbB2AM7BXZF98s1rXs2PYHPKkA188bfvZqexReAy2g1n3PPohMuBXxYnjWCiCU67j38dXEE",
  "key33": "4rdfGomniQSmGfzyDuEe5neoMtiNhkyGDWAhT3oP7VNowbsLus8HSfWe1cWiyvyffJPdJz2SHMA3qDNYNyaf85Vd",
  "key34": "3F74FNXAQLmdkzM4uBQVe617wkmEezdGYSsdVWykWCmT7X3Zj24zubvhRgTCkFmZ7GZMq6i147ToooA2ydxfEV74",
  "key35": "2sAMGY2wkMLQoVFbGu3YSJbnGrnFJqfPyYmztKuLgNyNqM69oszWXy8SYx57JGqAv4mLgRYpP1RYqqKxbLQLAFmY",
  "key36": "3bPYnK5za9xpaVzq1fEKGVr3mjK96UENafMqJvEEcqFeB277BGpKYyiHxYcyTG7ndF4s43kqJekcM9FkRYbaPQaW",
  "key37": "4i84GeZqK1iwsuzK5D2dPUDnuP73oU92GrhG3zoV2DTzwatCL4cQzLeqovyrLc4qnJYyQ9WnTbejPm4oRUjEQTL9",
  "key38": "5pU63PyCEpnZBNc5jsKj1iFAgJFUW8b6bmHhSGgdRep95iVRDEnyHRTKNNicj9AU9p7fAb6SZTxmAa3VZDv2AxyQ",
  "key39": "2tgArRszNHHg1ir1UWHiq1owDAYF1SB1NXkWjQQWysF43fx6hHPb3b9WfBd8HamH3LjmkdQ5h1BV3JiyEXfEHCnA",
  "key40": "26WnAZWuS4Xtm8bRVANqxButt3goRi2e1fN9QnS6zAJ2qhzZD1DxLmSbge1Zzff8ooQ73zE7XXt2yjoedz7JGaxj",
  "key41": "23K5x7Pp2W2SqUyHzvPmQzmH1BcxTKfdnUKkg2MExtyXcPTehLey2A86g3y5yVXdFGAquVyid1QabGnGxjmCdKhn",
  "key42": "27mSVEQWj6s2kfMob9dLPT7hcHjTCRxxoxkadzyC2PQxp6BfrQK2RvZFiuh3YwyPjag4PvGA8FwkBaB1AbbicT6q",
  "key43": "5WJZS7wmG1TVpoo4um7XNyTJHe2aHe7j67YqBDrfx6iLEJnEv1qThJZFyryVVJGm6ySyiJpJ3VULZR6Wzwsip34N",
  "key44": "3swW1ZDgfGo2F2HDUdNTWJMerRTtpNPBndFqKSxNwpyDqEYGhoghgEs6oZHSucs5nairPtbcXFiy8NVmdEFcr7oL",
  "key45": "2ct8xcEf2wGYYRmfRJw9DaPFoxEz1AEQDiHezdmxo1t3PMVYyM744VRmJ6M8wYRRTaKbpPJNDRy7oKkU3ZPkpjo8"
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
