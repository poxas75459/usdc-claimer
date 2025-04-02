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
    "2whBajMrnJ92ivahXFkA95MhkWBP6DdJ1JQq6BHQJdFVrexWHScFdydfaRhHyaEmWX2H59PmRL6XDGwh8s9L4CLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kZmpb5PaWH6fnQcqSe4NsJh8xHiEXPLMdbPWTCJMMoEL9v1aCAfT5M2nKM6HTP5oceF5uwcQVKQMMB6kNYhjZAj",
  "key1": "3HpcNm4EPeRdVgXfhxEDEtVwaPegTMHgSH2vPF3sCvSP25fyyiXVnjWxSUM1frfqsHsoaAWJrbCcY8ndNGQLsFLW",
  "key2": "67AwFpG9mzFs5Pf7Ck964S1Rj8k94rci34gba9StAGW3amCEtzzfQxPfKYpg6PrKyQU5VPqZw31g1nuf2eX6Lo3g",
  "key3": "2aEnyk2VygcHzpCicnTYQAPySMCK6chVMUfMSp9FSmRS8jYf7v1e185DnWPE68y11XAP9zcVCVVhNp6mmDSP8KQc",
  "key4": "3FP1wWhkHk2X73WQ2bbJv8aysSVMG3BBL9RJC9NHzjvVEDmgDJ32W2F37SmqzBqhd8psgUUnRWpooo9HkDaYd9rE",
  "key5": "cgxWrXg16j76Dz92LfDn9urUjHrSsQMcBuS8n51VHfwytiPxTFjKVrkZ8TybukFh6aT1Q87AkU2RMLzDNgkJfW1",
  "key6": "3ZnsiNHgeiubdQApL7e1ECgDQifHDWs5cjt4BX8FzZuDqL679DCgTyW4dFVR31vWT3Tku7R3NpDDC644h5eQkbvr",
  "key7": "41Zekvs61MXdFREvHyLsrwhpzrWyqVgMEEhrcbu47sto5hDwXoUVHUqjiYjRe6wPVJz6UBQcZHWC2TkybZGhVt5z",
  "key8": "3x5VVXyGV3VbuVUVn5z8rPgsMKt8PSAhJA9YaWGgnEMiWN1tYygBH8etsEkeCJswkFpwwP88s4Eiw5GfP1utL5kN",
  "key9": "4JTpCyvSKddJF3neVp7qkTTNUkmDP3Z1A78hNJaxHXtVh5zzbXqnKzSsbBUBLW2TempJsSSQN53kLCAVg3YXuVeR",
  "key10": "4dmGTGE9xpX9W4jCWgAX59xy5ruZ4KEjpVTjJQ8sVWiMwEPwNGLu3FMX24btzPFbdC2vjhWnq5zjtxyC13HMYP6Y",
  "key11": "4J4vUwNemGtvCR52X1bPAqahZzwiUJYS6gJxigmkad7HV3zW7XpfcSnaoigbXZPsYDfmvQxmzKsqP8439vV8tDHs",
  "key12": "CKSfZvqCT2UkgknvLY1qPGw6PrRwsEDpVDhE7CdhdbHUSgnNhNrDFYbLizQav3SNXqjxA2UMu4TRoZAunNtfHfW",
  "key13": "2uFhd4GRZK5MtSiSUyyqdra4wp13BUhHaUvkHFMM2fnQ6UtMmxjJKkPrp6fvFMacAtT73tSeSa82zLv5b6Nn2u7Q",
  "key14": "5WFEeh7QPpUJZmA46iCL54e1dogEZrjFCvGuEXKzM1JxaHMJH25qUoxmKN3ocXeWTcKob5rYQUJwAZc9rNpsgB1a",
  "key15": "3JDPRzVAAVknn3ucf83zJ7EU3rLXTodECTuBvQ3VFfmJVfe5opmeWYjJcb9UpsNu6Msw4bhvjfkHX9vBvPjU7evK",
  "key16": "5hya57Ezr7g1YVcJBJ3qR8FmpdXhmLJburavRegLWx9rJPSQTDMfHPyqd3FpGQMrC6aKoedNendGnGjVnJk5XwDn",
  "key17": "4D9cxA3BvjbeiyuedvcbJbwzHyxUMUy1VA2fqbXVj2f4mPodaBwbRgc2XbSfuqtKVUg2rwBSi6kxeAqtpMZQgp7K",
  "key18": "4dV3bUvEZTVjgtRYjB6K4qph2DD66KLJMVGG6uRjmefDBB13sbCrTnnMTxJ6krApg2n5SULXxaazoWCHVBDdEJbU",
  "key19": "5S2UDP33ndqAj2zdWDFzwLc4a8Lfv6xXRnzkhfmMy8HivTXmj3cYN4nxBbFVYu6aSKrtVbFSmNdHedKFtBEhDxcw",
  "key20": "2vKuebQAiXwgYkFnQtwM2VNHRss3sMEQusHfJ4UkGALNHyeFbAh4k85K4sRjxFomg21wFNaUFunsyespPcG7jCgX",
  "key21": "5R2NbekEaN8r822hmUShSbFFsVRrT2MgTtKRRnS22CsW5BkDENgqKuFMEaEB7MHkTnurtxw168iMp89WugHuYiMY",
  "key22": "2ub6qN5T74jiZfXBUZojvkxNMbE5M7qGfDu7XxNnJycgb3QVwhgvWTtYQ6vUdTiffbpremSbbeABihZPVgxw7kwi",
  "key23": "dYU4A2pUBSKJa6MbiPc4KS7ZVLQK77NX9d6VfazzPmBKt7xGrz1TB3nKBj8PPkhaocyP51ioqDB6jU9DNSKWLKH",
  "key24": "4Gpi42hgXy1v1WdEzjVMe3uqusEjtsmNiQ49zqUXyYgBXZmTPKiDYKw4LGHYkfUipNU9VMDdXNat7vDVy7n8P6Tc",
  "key25": "5DkJEYSUwUFKyaCydpXmd42PuuWxXKj5AT1nEQvgwe8ASmJVuu74seHkTVKe86YgEnuHuki3XAywMUTRjsKhj2bY",
  "key26": "2NvSD3fLCCVxu842iC6fPq11n7CsqT5NYPufBPL6VTrfahfQndt21FBXeTuGiph5wmYzi8SaFTFAShzXnbLTxKWV",
  "key27": "3nK8Rp6DffCncU255SeuFFiAmvJpLr42qipuUKt5DSaF9HRwCnXy9gbf9A8Hq8iqNqfAv2TfJMoFinkwc3ft5xaj",
  "key28": "4SXQxCm9zCtTRQmJczN82qKaqG4R3DxybB17mpoSzwnXw7ivsRue28EMs4tNKrZwxrsjeESANrmSjFvuBxG5t849",
  "key29": "4qw7K8Y3CPADT7UCBcUGoWK3J9DNFhMucUqnz4xURwjwyvMDE7hUzrmL88NhFRsizKSQQcmjEeeNWZpA6rPJ2Ezh",
  "key30": "4RjJVNNrV6sHpG83vbJmNtxqnDkCWL2jctdoE137PPhjxRnwKH2HjEBrovnoM8TSVZFdfQ3WfFjaqeJ59LzUcxe4",
  "key31": "CrpVv9v3UeqWTfsM1qNDwE1Zojb5fL44s6aRna3zCYZdpmgbsDGHp86pzwhibEbKYEMqQornyWiki15gFVoXcXu",
  "key32": "64v25vsX18o3o1BE6NXVkyQycDmyJvGnHQUispR9uwbq9NMTsRHvWZZKkhSsYYG41kHBUaFS19jXFrjQ643s7Amh",
  "key33": "63SKAti9ekHFM7ncwhTbcgsJpxNkXmRxMubLLSa8LEEor6LGHZX76i4ESKHspZP5PeLHbbtC3t45ppQcnEWVKnc9",
  "key34": "2tJDPXw6qCEaqxyuKof8g4oRCEhiRDBsnstPhZPfdSyxHDPevcmFgcaw6eftkiKaa9nnjVJY7xKuv2Kvd84bkfhF",
  "key35": "4EEfTVtYoV5N1gu5FfF8ofMSVdFcHPFNeBXrdmTy2PxZ442bAcSwLkbKqN5f7SbhDwLVBBPUcAAbmo3P1H3YtKJ",
  "key36": "rss1e2rbL6Dhh59ga1U3y51cbCaqw272ChfjJPJfkki6qW29hhr4mt8Thv1EvaUvmQ4CE7827RUKFPpPwyxfVC8",
  "key37": "3sfpUx3VQaW7rPyQTWJ2MDpYKfxWqda56uxH1HXQ274Wtc7usGLyiovdKWX6jDHFK8nUDAoTJPZuhDWu7YhRxgSp",
  "key38": "2RxLtBrb4BJMrHjPtWkgEydbQKH2YWJNzjcd9HvpCD7r8hEopS5jczH2v6pxUZqqaiaDDYXbXKYxFTKQJ4VhrzcU",
  "key39": "2hiPK1GFAaLVr17UjPwnxYBTfHdvsxW8u8xHiHNArBTdUHwrsLK38Xs6UTZF9YaaeMjY8Ea7VFRRzJUhnvcDMaui",
  "key40": "gtMbbD4zQNdcfTJ8rn9WCnGpve7XsZigRE1mJTPZL3hWLR8io6qFy3Jhq1nRBe8F2eLAp2NqL1P1aHj8mRmNiro",
  "key41": "QsqEoGJqcKcCLDDaoRWpkkSLm3oYFTp35dFJ1p6nQQn7S92FD1tUhBWmmKuPomryA1pjgcmhpsfKcC33hXQdF7c",
  "key42": "458pHSPykAsGBo4dmk9XFq7LXxXATPDo85QjeNAcN7Run37satGxubmZCjF1nxpn9v6gaU2NtGgZucyBDYupwsxF",
  "key43": "3L5KaWPM1tNLMcJC8jjKxneh5M9cXkkZmMnUhV5hmsRKFwkG9jSBEPoa48JjWtY3AfNmPNJmvwxgJyKDreVaVBDU",
  "key44": "5F3Fx1b8ZvLAXUGXDBWzeMR7pGFrYELHXASiuBDNHHPWviHoCc3DrZzsbzRNJcEwAiPg1auayWESRZrd4tx2A7J"
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
