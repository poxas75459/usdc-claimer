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
    "ha4DD2gq1A57Et89gT7vQ3hnr3ZizJPu8En75SLd59Qwzi73tE9uFMA9YZVsZC9DHkb69aVoJFvAcVS4qJS6Ly3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L2tJyzBiVVEMPR2ZmeEUEcX9fFZvx7mc2HDTKsSNFtmS9srG4QtdMN83K8iAwvoqrxwLxCLfNeW8r4Jh5tqhJPY",
  "key1": "3Vwyc5nFHqgW91aV6z64Gy6H9sincdwYRjP9EgBxcAvUQ3pm2Wr1xJhFw2yCP9cXqwi4iv1jopFrDuZokeszSYgd",
  "key2": "93WmvQEm7XSFjrD3vvjnqSjxLr4Z6Hjg6Te9pNXvJs3tzvbgYRJzArmLGCv7sqqn2RHjVA4W74bqA1pqBxbbTsH",
  "key3": "Y72QJEDkNYa5Kdouh1fncYEUXGRQvpBdPx2XzT57ToZv2HXeaerbpY6J6tLmoPohUJhD3nrbXt3SHA4Ra3zMM1n",
  "key4": "33urdeLiGnzzftfMwvJqUMRQzEd81EQ71Mu1MXT31UuDPD9pR21ohJquAgBB3q9eipvykcJGVhDSMRHV9mpP8fYy",
  "key5": "4UHav73CM9CMNwrreHz2cppPKD3Auwn1fF1jQootBLG2ShzQva3Pc8k6hkNnPd4TPYdfLFAZd2vQq8VVQEyHWwS7",
  "key6": "4F4U1M6UmTE7xzemW5Pvuu3SLUo8iEbopwVD83eKDsRy9Q4jKNYapMvmFaADvGfUfcttYgrGMKHxbDfY88HcrsZg",
  "key7": "3SbME1Xz5RN9XSWmrpKt3MS2Fg7uJHYVC7mq6GCyQoXVX13bdsN1onAdEsz2iGj32TrZcfqjSaLKSLNaP6LEbvat",
  "key8": "4SySAdrzEjTQuAJF9Xrcqh4QKThBXp93b2GTuxtBA3gyeR1b6DZ6i1nc45xf14dwnc7DRCkdvaV4kTiWsHyB4oaP",
  "key9": "4C1Q3Q6G3HnViLcWbyhxHfGSBx3fX5ZNm8xSem1cFJRRtcJZCTyQeRzyTM1ybEoTXiy1ZSoSLfFNraczhT22HMHw",
  "key10": "2WvZRyAuxjrmNXYE2PoCNESnUDJGFsJDuRHBRSVkbSsi6kuEonEkb5CGfc5mocnTdAL4y1gRFGzJpvanZQin8KTD",
  "key11": "3xmsxDeYEzWKNqm7vUfzXrXeegbbP7Gdbejqh4nCGMazyX4bxL3NpP2miXYnUP84qw3QCYZoQZM2j848thbLVK9B",
  "key12": "2KgMffqqPFgPrXjfxBkdAq9fKHbcWgEiJrZNRR3udgrNYPbvFugNtFevYV8KLJEzk3zARMj27EaUg4NH6ECoEDdd",
  "key13": "3HfcVBroKUrrZitakbErC1TTEuRDRro7rdepFPAuViGTJe3fQcesfAwhTyDANEPsC7PXww99YjQPbBnq1UvK8PRz",
  "key14": "4bpdZLiSUCedgcmSkT1yZ4ngWTWfuPStWbM9MqtM2K8FhkmWnVvbRY826gEdPATpB3q1wRokac7T1m3y1YjSajz",
  "key15": "27i4Z44Y9QR1jPtbXGecJ7qafvpbDMScNxbAJM5dezP4iMJejKhqeEq6Mos3e5Ybe8XmS7vjJPdwkmCKRbjzzRhY",
  "key16": "4Q6q47GEhrFvPjD2G5A7oyvkTvmsxCEfaFenSxiN3K31D1nzKD5H7Zd9axP1GyWNXdYadvEVXSA9spb5rQ1rm2df",
  "key17": "jj8oEWoQK2EFLhgCNuBfFVR6sSnVsCjtiZEPvbzjaYpo6Ni6RafbJ1oAEMdyJ8HzTG6hjmk1hcrKJEtjVftJGjB",
  "key18": "5XQ9pXZJkg9b3ARki9QzQMumTysryAzmrDKp7MGgEkpaE36njUf9TR6sqtJ4Y94YT5adk2qmjE48YeAtBguaRLAn",
  "key19": "jpkpS7rp8R8ov9nwY2FMdkH9RpqFuViipzht8wdHmQGcatcT3Czr6UXvRM4E6gb1avBhF6nycLcjb1jradzKWPi",
  "key20": "3HnrduUzhtNUZP21sHYcmq6CeMmCbqgTU6JYnYqDDqCgSJpXGGxsWpYwUyU64zyXCH3oX31VrrkU4obC49Dc5jnT",
  "key21": "FtGimwVmsnycvbDJbtjntGaVsrpwLC4DJrCNyuLAPzamL4iuviFuXCvW41XtYXSjxicswoKQqG3AeRTgBno4VP8",
  "key22": "5jfXeczNe2AW5k2akWUBmbxnFHMGAkRJLTmoQbJQXUFUtGorQgjhDQMLab3uVVzbryWJ5stZnQSRL88fVin3ooGa",
  "key23": "4HTMycpu82aaZKFdckymkQnBytb7RLRP8XdEL1cC9fPsWgspL9ozVmHKjYGawN61ebGLUNQvuLL92eeU4AE5mnZV",
  "key24": "3neAgYi3zE9WXoJekCHTyFbjtkPSxg8LHEr8na8GnhwkKFJDDQCkZ34hok6YMhj8xQPy2fNvLSK3v66ZXR4ExmJW",
  "key25": "41UCxb4bwvXzS24iu37Z6qDeH9rys9jFgvrTUaRQxmm4MHX8aR6DhvcbHzEFoWK24LCHgwpg5bDrYdk5eyA1gtyF",
  "key26": "5RpNiBYyKkhtezctFQQsLxZEXVroZPnix3w1xqQPGNHkTnTxsDBsacGi3bbWz8RomrwyekjA59h9fyjJ5rZzev2A",
  "key27": "TeGu7bp47UQJgKcoLkYjJBzk9ew5BrGj1CgnFmKS8FYq22HWcEqB9mPAPzhxqF2diP78BYn3ff88Qo9JysqwPGt",
  "key28": "48cYeBEsF9EV1yKFxhk5FGS18vbKdyQZCY9GRk4XMcwNVsGbLt7xNPAUM8DssCQLL2zuQKK3ih9AZTXm6tpWUj9U",
  "key29": "3RTbknwZdmHEmScCc4bGuNrwfqqPkcaHptnxw9xcR4Ep6so1T37edVNd2ghKkpQY9MRxfDLD6U5tXUH61Aegwntj",
  "key30": "2XUvvCW1fP3n2DGBb9jzWoNz9TLvECR6GytEX7oTosTdrfXiXLxCBS1Eo27FgC4CPcgbhtwdvYu2jhTWDZ77wdDq",
  "key31": "4yF65edZGevBAULw4iZLMJkymAkfNDpKw5eDscTw2URzCJMKHWC27ZvndaBbyjKy2PJMhLCPt2wUNjuprXc3tRH5",
  "key32": "5ZgzYS7gCKL2TbGu13EuDM44M9fDoGhLSeHEC4g41ow9nhqDYh8vhTpKnmd9G94TwgYKPivC7sunBaANpoiEAcHm",
  "key33": "48t96owT8iRGibtCDantuUaVRrRjC48UAsg9Pf9Pmoy7SEUWXFHyAiLEBg3AdDPvNwjZiKdgPbeAAWgY5B597XCT",
  "key34": "4X6QwUCnMQJHqRcN8XXRi7qU1ZYAapMRVysjKbgKtANbdNm8WoKXW5bCxCYS27hED5C4qgvB8pKb1xQtAA7BtxQh",
  "key35": "4MybkvAbPETXtC74wkBgPnR8eFpHCVoNSPASw2CJEQVk7BBXBEM2DFhPGZCcy2w5BsKwuAKsHPTb6w2uDUEmF81r",
  "key36": "5zymjmiX5axcRFmoV4yusCBomrV8zA4HQnCccuHXGg8aND5pue6zBr6qSUxZGExYc48QCoRU2vKmCUgN9PuBvQcJ",
  "key37": "2fJkHUMf3GQzYf9kpRsZEKemNjHxzgKuzEHAauLjeuJP3qHEzy6MQRmMTZ3rodPyrQWPh4Cyg7f3wNrU5pfC7qxq",
  "key38": "4L6r7EiCM2nxwZAQZjfnBi52yZtvK1tgbC4637gutrc5eYTo67AYpu5BUZYp3MriXismavvTveVABFeNtGamJqKN"
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
