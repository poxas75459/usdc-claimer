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
    "5R3BZSzmB2izAa1JwkvUQGY6p8u4Ri6bkH2rRpvsPcc5nbzLUGcQGKZjccJ2oL8SQ3Fj5trK9KNqxQHVBaAAtRsv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bQ61dRUG5e74WZFQZ34WREyoi5TPi6AnW1SXzCxQpQPb69GE2VZyY2T8PGrt1Sa6hap1kYCNUiSgPmaLRW4ostu",
  "key1": "5iC1CsbGus3FYorytLLdCzBU1wNEmLLRy9SbPE49wpM9fHB6qkwNJrRJevodFR4Cdqu459w8XV1jiuuLXKLKtFcj",
  "key2": "5CFgpLuPWRvsciXaL4QCx4KtBsjKdQoQMLqgKhxCzt1Q7tbwhiHcD3ydisqnzV6ex2PfrzUUiraAKJCtsNy6DFPf",
  "key3": "3goCmEj5w4K1DGEW6cB3ujKRsg1fpockkFKeB34qsR8pCTjN9ouiX2mbxmmEFNEi87NfC1GA2YrtgoZjiXhmyUCS",
  "key4": "53MtX6Utmvh8rUX5igNK1t2bNAbDbSxvpP8VJQf4HxGoP5H2XGS7kCujcPCDtVs9xEJchJQ1SKXszuGtRjFf5eKW",
  "key5": "5NU8WEzpoFQqCwLMLKQKmHqeHaQH3paK7rAz1g3AvEo2cLFGfx5py9EtwvVhdMyAobiKEGi6Qmmzx1w1mEHq54zo",
  "key6": "5asQyZU3Fv6JXsTuQiwzCUodPDznVVuCfGpCJcUyVBn5BA9CBGeN1vosUSRkQMTCqrS86V9gRni49VRnXa3du3yr",
  "key7": "5NHkm4Zv45VrcdrVo2SSsxBzEb6PSYXqB6LbkoVW7TiCQ528H9LPjdefcyu6xMt9kEWxttAa9a6n5A9gaB1GFLKu",
  "key8": "2xMd9JBPg7urnu88kg1phQP5ey52Pm6BmALobTRZFMEzcwRwSRsjcytTfMgFpudWFDbcSpRUJ5WsLXg2TT4gaCWv",
  "key9": "5JRnzVBFCy8fLnUAxzTt3jcfsRtcVA2z67pPQV8G7JWjZPAGKBhdb7i8d733SZbiGbnatzRXFZSKJMkBsUBT5CoZ",
  "key10": "4WMEUKTEXJx3uVGd3DCiwBEchnBSBqTbjfYHq6JvFaPRmBevxVgCHbrQUrgCNBvgbQt7zvGZ8zRfkNbZVL7nk19C",
  "key11": "5cxUELbkr162dBDLkf9J6KPzeTgqS4VdYDL19733La1WYBc6wsRjj6YH4MJWGLaZVT567jC2cwWRj51hWR6XkTYD",
  "key12": "55dF5LMxMz52STSexxMCZtD3e5hMyYkwwR76UAyi3beCpi41GKCvUB9rt6yuCuecTPB6hM8RZ1KyXRos5hh8Sq6V",
  "key13": "3A2RjiiaeEsWcxBBZA9W4kyN5A3o8XvxStHgoMhMQxvmQitg2AUfTgkxsc9tzE18M5RfuzpLoKah7VVAyC1pc1sy",
  "key14": "2gXeVdRCmTX3WeUqNBTdCpfeUWJHvPGUkbgFGmEDj2968BWiGJVfG4Udr25AfMeTCzxxxPFY322q3JEz7RpJze2v",
  "key15": "5qv5nsMJw3rxAsrJUpsvABDbcs53VnPFbFD9Ta7wt8Mzy2UCKeFT9tRJYBp8rTn8kcSq9uTNDteTz7eXXDUxsLWn",
  "key16": "a9Y2oturGks2ACd5S1ETpjRXNoWPBWza4MfEyavb4StmUSbBkTqJ1xKD5EgeyWaZ1AAemub4MrjAw2HiCgDVrHt",
  "key17": "4Hupxos7aWhg6UWM6yet7kqMbGZWs6BsfEXm7QaM32kLkSQ8cQHvNkMb55DY7feYmRh5NasoL2aXQ6XeXn3W9AEo",
  "key18": "ccuzBz5N9rqHvSj1Zqy2p3o1ebGuCoENL7mXAmyfSgkHHRJVy7dDyoMjJzCNAMqhCNCpQUT9GmdHZ4p67bXBNTf",
  "key19": "3Ue4Jy4ijvdTGnaL4yPWNdEesj6Xg9YjMrEP2LH7EeHLEcbDKDuHKXXfVxPz1Ka8MwGcPHRVMGWckPhgcexPNuzG",
  "key20": "5UYKbjUwC71cAcFVWfQrLaY25PfmRhbT3UQJvEFakWesSRGDETj2Nm2y6hVnGGkEwkJLYnQoE4icpjGdUWxgHVfA",
  "key21": "5LNbeKUKAHyabvqkoDmFVVWxBdEaTuQ8uNxLh3JEzmoo1XKPgYSGLurTUEGTWefmn9J529V6rzekN3XCSMxKYVte",
  "key22": "3XpXjSzKyeYAnjuBL8Ehwk2HbTtCMo1joR35W4ZopcDbW9pgjSJMqQrvtz4JwYcZ9rELYHBM9mV4eRC7UmiM9r14",
  "key23": "64WqMK51HSXYQQkCkUghDGyHcZtPFRqVg9JXgJeiFiRBMRuZsev1AyhAndkLRtJaN58P6wLPWs1K1tBtvWPeMBKq",
  "key24": "56PrpinrmHTcGjXGEX3KmtNNQP9oBN6pnz1wymZEQ6oM1MN2h4ozt7UZJTXkcCQsjg2jRk2jVCMCTSChv4LHjFqo",
  "key25": "4oJngoHLWMxyGzhw2QkCUUTaXBGqgd2qo6nCViZEJTzZGr2Hvsufx197KmimAKvyuxcdbfZZv6YV1S4tBP73XQAc",
  "key26": "2MEnJizHqKC8Q4aJoTpnam151DV8zx5ZB98UXZqemZwFrLQv8ytXrHfmeTUXHLmLtuvkajJzZaJikSoqPdWuArc2",
  "key27": "2MWZsRjhBVGveMnfzifBXqGdMVCL7kxDBgifUEzbvk5tmcbN1C1GPPxdLQBJVjKpguYKJbrEw7qdFco45FGRnoPn",
  "key28": "yS1QKSzu3B6ugHYXRDbfVcgpimMZxkNhQn9NonLsMD14FjRgEWkSKkZymkCSpju9p6KF8yLF5gAp3TXNUWEAhE9",
  "key29": "27T8XWLKQkGsEPubRbey6ZrHpcYEPdDD7J3tu2Kkt7dWVcnX93PMvUhZgWdwEJan873ACX4vFHMFh2ZpmNKBPDRH",
  "key30": "32CLc9khE3q4F9MWXy6tuLeuzi4awfy6neSEEBMoJfiyykbc6mbYCnQLnoBYHhJzfAN5mC4o2zDv6ybbQs4jcakb",
  "key31": "2E27fqHG3xBD6PdpJ1JFtq1mbU21PnZ5LcHkxmeJX6F16dgA6p4TYb2LKEQAEeFfMiKY7wCT7vfTn1JMunVYV1TH",
  "key32": "2Bj9K6HYX1Whgr3ptbftf1DFpdCQKwMyKFGgDyEPZQg33PN23WdGiM4vUTWfxgrSbyEixSu85J5Nogjuu3jPFHZh",
  "key33": "2WFJpaoWEdy8EJ8yLFcDBtVynhuUT1LpXex2XLDHHp9AtD29trMGwVYWm9TtVkC8BxPFFdQAPNR8EegGrh9rogsC",
  "key34": "43qruSgJoyCAAyBCGy5zTTTdpA3JfFxr2xRhSZeo2cAWpaRwWXURtbxxqLfCLAJbrxAB9mdV9avHThHnqcZW2JVH",
  "key35": "2oVq1skHK8mEXY4DGcUqYuSJodvk6yWw36ALvxjNc6vvbuhNGMMxLa62vFUMESnDYMMteq2s6ZiV9nfBzrGN4MxV",
  "key36": "3W1VsaaJYabiNWa3inZjzrBGTXzsLjQRLDfrZvYuF6FDcRVFyUmFpzsmenb6XynawahwxtA2KZrucTp2nBxwawrg",
  "key37": "63eVttjdQm7HKJCZjxPjc3tyNMjT3BVbzJzA1QnFRHARBFbJTAjCyVMoMfNDJnqFXKhRfw12QxprKsffqqJ6P6ne",
  "key38": "ivA5si5RDmYT5HRrz1sMsCzg6LpFavLwSQW8PHze67MRCt21narzi73fuRiCCKKAban9WBn3P4buyFeBKx3xaqm",
  "key39": "4EfYbv8tyj1w97Q3UMRC95jxZ5HVos1o9TU8otkS87JGCxdShM4oaVuZHmbD6hnRN3ERaS783xpk6G6Vkqu1CG8N",
  "key40": "64oqfPfCEqhYn91X93F3mQG1FGc2Hkv96eRKyjBcoT6X4Kocy5WcvCSVNJYnA8VadGjbrgxrDanYiPoUnktHUism",
  "key41": "2vHdJ6FibQi5csTtxit3vLvQjjwixCbVCyN5WN2FfWqY39pqpVXMJPsRJjwnXX3VXgKRJauJNS6VzBjnxQsXfuxx",
  "key42": "4cR6kzHfRCaipHE2ED6QCFpTdU43EBwXfXycuVuF6wSgGxmqumU5AS8vZe6S9S3GgX7YFZpogANk4ZrCuJZ3i3F8",
  "key43": "kjcRRF4f7dPgZmFnfNEMjF7pRE6o9EqMU7FEKDTj1SKrzyMktJ3iTytFxMmeXTuCb6r81RgLhwfveTM78amYYkn",
  "key44": "XUsB7e4hKje7xc44JvLde7RM2NuQiKmt6biCGV27rCL84Macf64nEayVzXJqjxfa1q2JKAbuZEDjRob45btfC56"
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
