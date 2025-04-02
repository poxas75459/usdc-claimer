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
    "5QSayf5Ru825VNZnRLRN41R3KuWdeuRsaitQCj1VoHcJECJpcWBRogymP8WpsraVr9NJW6cAu5tAoGPUasv9Ar8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bgQbBwo3Nes2ehiksRZPS7E9jX1wGEkQYb2TTr3QSSZDRM5jsCf29GrvYjV668SZ2ELu1ywQmGSFcy8SwGPnjaB",
  "key1": "3MT8h5VGrE3DuroMx8Mz567xDfPjtHHMJdccTqBL5mbHBNfHfZk7JjHg21FGCp85GXiTowuKaUPRcXX7sGcYc48P",
  "key2": "6uWg3Cmvk5B4qUouDx56SMTwtjCNh8sgJXk2uj3H4MRf9fuTRvFMVfR45Ka73SQL27Q3pL6CEH7qMwnPrnHCyvt",
  "key3": "2JXxUEqHcqQNEYhaqzTXuqXU4i2sTAQfiaKAANX6T3JHp2J1UEurgsuTtsGGVXMLfRoS5ysCi94pnUCi1zxWY4F9",
  "key4": "5N59Wt5FNarKzevdd6nHdQuXCN69NeFLAoRrESAHMFepTVCGbVKiTrNv8qCytX2M5cCVra5XoMBoJrWFDwYEAVFr",
  "key5": "3eTtcnKQDWuCTKFyZbQdNYKUUzwFt2rknigAqHHo9zcLnAW1p8rPJBRMJbRPG2ZTiQB2SUox1HtBNxhBL3BnACiw",
  "key6": "TrK9LuzhBaLPjJCu972bMcJzkFfHYpLuQ7YHtg8WqwyZNs6BTLAA81Y4aibjWQRisLkUGcH1QrUqCZdM2gvKwdc",
  "key7": "5HxPLiEr2mga9fWEat5D9HbKLGAUZyohAHYKvvRAohGewnZQJVfP91BbnSg87qgSt8mzs5hV8zDEWuKTFL2VhPDc",
  "key8": "3jzhTinS2G6mzX3gVe13VUViJW29bHHBu5Zb2H3dDwP369mktqmyE1vWUji3K8EgYA68KSiWGT1GeCHLLmdySrW",
  "key9": "3fZ4ww97roysV5fKQR3gNoswUfjXcNSjbXtWL97bJM5eT14MRgfqZHqmmPL8F31CJSwXjx9UC1S5Ho1axkDaB1F8",
  "key10": "4Sjonxr6BbxNEj1HUF8f7KtZeMCDsCwhaTQASABYqfs6WwxVKbLXPtQ1VGMkafLHCX1whZjJXT6UbHnfSfzgGXsm",
  "key11": "3AXPWrgNpMkmZS4pun1AVP9nXn32q4Dy7hDgngUPJBJW5EdEfgSrf8JRXeknzFfyWgJBepu3JLLQ82FAtnpCxYbu",
  "key12": "65c5diy751m8Bbs2jbAcRAzgdnqaDmFEaho4VYLLpybmeTnq4eqggEpepQEdc1PoDycYxYfphWnJ7CLzspFrodk2",
  "key13": "4D2DyqJ6reaNebwnJXZeR3sP3fPcw58E1zCmWq8Y3dMNnpctPnG9SkPh2qatdbJCauVuxrNiv6N5wdU2p7GoHkik",
  "key14": "3vpuyCDVjg4wuckS2Ps5yxKYfNsCJ7owbfBinEmWMUtrfgxQ9Nyydt2QzCWbkp3AN2wNjLSMxUdFuQYR3GEA8dkC",
  "key15": "61ncd4h7S4ZKqGXaEEydVTbPc3wLX8a75jesSEXQ6CwN2jhS6JPzoVk2AWDCvV1QSPwYUTBNavJ2yGp518zvdjVH",
  "key16": "3KLawEURinFu3ixKVoNYBpfj4TMoV4mfKiKFx3Dz5QgdGqcnfZTHBkoTLoM6dc3gaFSKmn4fbGqj5wDbHrf9Nxbd",
  "key17": "5qwbpLwYwBqRFMAGtLdYvVXhJRzPhPMqNkd4cyC1QBv5GtWK2bHXHCpvk4GUaFqiJ4M3xfXAPoKUndd38HFBoaKc",
  "key18": "487CfgM5XGQgpNtRnjR3R3BbbJZ5NuXLPQZSsXLqFbBJvQY6ahKtJyraRYv4CGgsjr47HAe8UWfiUhu6ACAhweVP",
  "key19": "7MNeomYqiPWLjsgYxp3YBDgqsYCcMHYLtS8ZTdxhdwcNBHFm5vxgDw5gPN8XzkzVQeoUfTyLjPvgiuLLjhpUQ8s",
  "key20": "3WrXqBxV762TwcY2jEaYVetR6ZyVynxfkiEKGpLRGHf1qVRGsM56N9NFGCiEztjgyZzMs75b1i6Z6qJMxw5rjKBM",
  "key21": "3EbHb1DBKhvtPHR5irSgSGN2v8tXdschgioQsQ8Jae3Lgj7qL1eaDncgaXFGugAbm1y4yt62FAesUkRN3yvpDSaK",
  "key22": "3FtyU9GaNqq3E8653sSpu28Ni2EZVX52aD65kTSMLXSKoffK2tEmi6iv4ttTnpqQqB3omGcZnw44GANkcQjE8go4",
  "key23": "TYQY6k4jC7aJntWWaDq7AEb4bEezAbFgkiqPSs8RbkZe8cr5XweZJVZv5A7MHXVnTb5BUm2S4BvuK22NEh1kQNT",
  "key24": "5jkTr1kDMZ9La3yWRXoBBSxMA96DwVs469DU9TZjEJ62Kr2LX1YrXu1yJYEAnGyYUCbXMfrJrqUpMcn2DLQ2sEnG",
  "key25": "57jHfktCLiqH7pSoTLAiSpsYSGFcm8sMVRyaY8PZgmrAghS1Mz1MowrigoasqXP9wj87tAtgdRtzktj5m2iPcBVS",
  "key26": "2YtFvhSL93Wd21XYdRTs3z1nzc4XHmmN1pJVm9mu9LKLF2RoAYE51shvyPhyMJURDXCmDnXxSpHWtkSermjajjSC",
  "key27": "5ivXJpzVwGxN5giVqhzo2uQiQV7o4mYQdDHzCrKycxx72jF1oCrKxu7TfhXwowq1nsnpv1yjMGdwCT1Sp9ATYVMG",
  "key28": "2PmUYY1MZTEtEDFbUnsHiDfWTfVGkrq1Nqkfu4zRs9v4ypm7GVdP2pk6oVChLnrcgeGXuUWpftbXMzPXbvBYHp3a",
  "key29": "4nDebF7W5cGh8bhdQrNjECZHe6Z5NW8te4JtGPfZezqe78N1TdeMwRrkvyHGiiPCtW8yhinGS7nDegbevKbgvPGt",
  "key30": "2FXrxVUuUMdi4pyY7ydeC62iKVG35QjtkrTofNcyoATJ1QLUk4zcgcQTHt7bh6eW6ATqNdk2vyQG297cwjTYN52X",
  "key31": "5AP8TieLUm1oV2d18GGeVs7zLntJfu2vtVAbMmFwybRMDBdL5rLzsX5u8yLHVD1h92K5tRMFMWb9FaPorFuooBE",
  "key32": "25zdNmkU5qKM2EvbiZzasJbj49zEHSYBZC2yEuTemdVctwUzAJoasPPQoDKGG1TVSWQXt2ub18NMAAZW8xKeYYe7",
  "key33": "5eky9UcArEY3CL3fHXWfNVbJ58w7CDjZBsKbuJpTDk6o9qh88JQkWBKPD5EP9VcHbecwunEA3A8oLK5vxH9Nmbqm",
  "key34": "5mWkEPnQt2dBZUM5nmV6m3YiwjRzwyj46jozMLmCA8oUbDxYJakxCJkiPVNaR8fmPk8PSA1YyWfyaURrqwtXx7U6",
  "key35": "n8ecGkFe34rfqbM9tB1yVrYcA8HEByQgxyqv33RSmeAnpMNSxRTkEsfZ2EySCMB7HNvVKVPn6DwhJ58Urcfdo8P",
  "key36": "3AcygeDRHrkusy23HcQ4qYMvUrZ5vs1bLztE7HbBfgZrrqTugz9TxXVqnYu4wmX3saN7QNaMWS73Dzr4CNPeg88q",
  "key37": "DPWSQrfLq9zBDmEjUrEy5pnxVbDqamv2S2bFh3DToX9L4pJ7uUd2Kwm1XDw7N4paqYzwuSStsKgUnigtkY61rcx",
  "key38": "4TCRfxEiRzecRcHR18zHdffJTYPspLzJavaz4dJMwSV9BBQAoHHuJdtEET2CaXHTRAZb5VH9kqVSBbvSEdUEJUPR",
  "key39": "4WsPQUvfukZyFCjSiABncJW6hQTiecYshJSbWfvtH89xNP7Q6Q7BM7FW2E6kbZdQ6hyz5riWRgPZyh92Lc4Zo5U3",
  "key40": "4QAz7RvG5QxUAGsdsqRkwNic6caj3AxeoPnojuE7hyf5AfjRxminfdqC9DdnXXRe6xikowZGwcgaccVW1jDVgmcJ",
  "key41": "63RhGYrEEfw1MzNkR2dKpoXepp45DdEHZF1Z4MAdQ7C41aeTZ6idaMy8cvAdF1BPDSHEu5x1PQAmD7tiT1rjT5aa",
  "key42": "5gevXqfPEHQXoSPcSJY9XB2pUQqRZargTxSykPpED83aVdBwKYbaFxSVArmix9M7uGQKjKiDkJrGXLuUjM8U4HgK",
  "key43": "4h5w6KU4KDVThxCqZBUp2MdxSprHXZTCTeBJUFhNtUM2zZ2MuHrwZCV1tGNF1yKZBiQo2rSPH43okKRgy5jLFWF8"
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
