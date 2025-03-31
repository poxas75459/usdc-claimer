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
    "4cGX1tcMG42kUUCxGwJMKq5ndhketU8pRuS8bstizwFw8p7D6bEZg224VWLsUbis9PTqdGnAzN71fF87DVQThRTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yBaigRcGB5VmKid9k9X6JBKbnsHc8fi5WxYhgQEwYbt8M2cPqZ1weiiWArvU2uCx6fp3jnhB567QpCh1Af61MR4",
  "key1": "4QTXSyy7qPDPPLASkJ17C98HCFTN6LCVxX3EKqBsqse6Lxie4UKFZXxj2RLpDyjfaMFJadTzsADQ8mfv84Mhzaxn",
  "key2": "5U32mnPZGE2XCMtgtYrvSgMHzAEYn7wfyz8EArXeFC35sCCKThpKom4ageANyQ2irsgQFNQv893k7ZhRfeA77Rc2",
  "key3": "24AWaUNNaVGfkkrYe5nssBEjRf9Nmi9hUiFY8QYnSo6i8zAdKDpzoNcx2qRZ11xvg5edhbzyBHTvCaSZ6kJviUDE",
  "key4": "2gv9KcTJsaZqzXP5B2HYZSSpkk6EJ9cVs2LsZWGBk2uGzBrDeKuJq4U58cSEfk8dSRfj35ejv4tnrdSPqg5WQnPH",
  "key5": "437V37JoZQryfGPyjvY2knv4361mJyRQ4hRu9s1jALC93YrZ2Djx7r5fujSVCpgrZoY43eViCrfjBf3h9YZT6m2C",
  "key6": "5Ru9qeBhaU64xdQFuCtpHDBn43X8iSuYdktzdgCssyYR8fzmYSEx4zZAhfEALBmvp4QxBD8WHvt3ni5w5WrpyuMM",
  "key7": "3Y36tg4dHSczXPfRjfRJqt6xJu5VssaqpG6meaXheagDoxQz8bB4wJjJpGay2RhvMEZKwkuwjWMrYsiB7M44buXf",
  "key8": "5BQ6rVQTgDPGrFWb7zAeaVneyHcYrTPnP9kWhhSXVYbKqNew3vSpTin213DqhSdTgMm7FBqnkANZEcCzERFh99fb",
  "key9": "5oQRz3494VBMtgmKdNQW4Zz3bv56ctj3FTRXjeKtMPQhTx1V6mWHxEo9SLYTZVgFkF3nJkt98WWrGS89FssnLvmg",
  "key10": "5y7ApMouDsoQUdQgBKiq55WCSBmYuW2i94EM1rxi1kTTvhcLXCBp4k5jKLhFSmirEjQLqeVTDhTbQX1rnS6PRvMC",
  "key11": "2i6fMGigP5zkYV9xqS7xk8UEJ8TVkt3cy9XmU1rAuahjncrfLM8WpHo3RhsMp9TENQyWLEnefarVzfs6NJWBu6Mq",
  "key12": "CHsdcjHnKw4gzWXL6Sj1i36QHUnV8oCVynZLG7HV1H1LR3gwoX1v2CTZV6kdcAksxvBhNh9WgmDgQo4ZxG2TE5C",
  "key13": "4jnwNE85nnBSs4BwFASpHSmtTTZT3T344die6zF4U1k1jgVG9BBnK77TfC82GiL5HeMYsq2xQn3nMdvaNXtqZax2",
  "key14": "YCDtKcU9zmfwRSMqY7Vjr4bWqHaxHKBFi2HLh95GGYPDmoYo8zL7kgavAKz4uSbB2djEkyaPLdpNhdBEAAgy72x",
  "key15": "4MRZ9gQ4p5uWDqaVHHuHzCZcFFLELenFa9yGk42tUSJUBeYDbt5tqcq7bCFNakd4BvaTuktAYRv41ewbDDCix8BS",
  "key16": "3MswGicxjiKyWKrgeb3s2M8KCwVrN9rSMoWjb4b5oSp9Hrq38925LWZrc3JKEZvkGyeQMQyDcSJJdC3DRxU5bTVh",
  "key17": "31N2zKad3rJCc4ntzxQwQWuiVrnehq7orMCbdRkmWvQBXQHLtrumVLEQGBSGZTg1VESdR6uhdGEuapyTYyfph4Bd",
  "key18": "5mmNC5XUGLTAz4NxLo7WpGJAzMEuGFNYHTpjEHtMMiT1LoogaLEVGMWVAEtADCYbwp1xvmKXWM9SJdd697eonJkW",
  "key19": "3XLkpXvc2N8XMQvX68vKePKXsPQmSzjVwjgW5KFM6Y7sZs5egzhsGNHrp2wRHXpdTmGnntURepM4ugdWhaMj3kEH",
  "key20": "4bAYTA4fCMCmZs66mHjpSUA3RVaDMiy33kkfeS8WS7uxwvhedChtzPyr3Hcn3VJfvUy1KM6u93ykvgqv6Go11Y15",
  "key21": "MbRcFGihxQQQ3gWRPeHEyjTdzDGZKQD4SjGpT61o27M9PNpd3PjmGAARGEi8MkYJ6e3WHdwp9gyfTedoNws7RJN",
  "key22": "5nNmxfDaR4WK7oFnfQ8jzVbhtVD5BgzRonbn9A2ApYQAwZ5ECsaqzcQvZLW7DzZNKt5mFQqM8gj3CYTnrvfj1S7S",
  "key23": "5b5voeoRJ6uc6VdfYquiLmbck3fiRgeEViEn6NDMZFZBqfR6oRn822Cm7xu4rhA3y2Sxu4ufLU9SWZ8BJKduoZLJ",
  "key24": "CjvXrSPmJrJ2kz2LkEP6DXoaxfeCo8nWN93oVAhr7psjNaTuCwbPp3vN26MGaEESha3CfE8cp8wnMy612RHuuvh",
  "key25": "4BnbzCUDWxx5oyQNyLoAmCMqT1uANRhaqfLvww2xQsVH3yKeEsfcgNevjoEAufpm4FAxjFVL1s4wYE9fXcw94hBy",
  "key26": "5NQKnG7zmYyA79rBsFyRcRGpgaYVm6Uw5PLZM4Nr5BDm32ygwZK1ifg7P1QQjLFhv3XF83hCdbH5n3vJgHV9Hi9c",
  "key27": "2PA4aMzhqfMBsByBki4rFKunE4WufpmvCkrLXeBfDZHtdDZh1hS8CrxUE9gZxFoMMyQhxBTbV4vVYcrCAQeqfWyi",
  "key28": "3Hf6yEfSb5tPRfdLNcPByZ7WY1GkciYjsnAUBG3ScmGngXSLj275QQtHrpeNGwtPxGpUaQF3GqLarM7kMfR3nqqr",
  "key29": "4GLkbi95DmYnrbELEXP2v373S1Kr3RuJeTqn63MAeVsEEU4VjMN4ut8CHxPHvW2r5dKrFRMVsFFyiDkVYVuPHG18",
  "key30": "4ZAvYdui7gztmT7uwfRqxMeFYwfLo9BkVwwVzcUFCJGCdLBsP9x7NEBFgn3qmHmZDd2Ud3hCdSEtea4mUGjS3vWV",
  "key31": "5ntWUaMcZquTSLddQzyKrEYKjGWZAjhMcNaxLjZh3pZWYikH3a3iHeFAA1MDgeco16Zoa5WEBrkgoacVqDfCCBdx",
  "key32": "4gjPeYCHemYVTtSqV9PrvSXdKbwjCVAWF9rusob2AJ7o7ZgBvqrYSFpfAZtw1TiwrDTJBjXyFiMYkdKzF8NrUMcJ",
  "key33": "4RdLubF59Kh3m1TLYcKDvFjVUvenKf11SktZ967j9U9cbJeG1Z6DhsB7epN4B8qrPyYxtutQqVCxpdkixXpLyUnM",
  "key34": "2Q8ygSSHKikzbXFhFRLHno9hjTCaLZ3yE6LoPW916M1zgxWPjA7KTiQvYopdV2YtRLvh8UyqZYL1Pygzuw6ApJX5",
  "key35": "5xTtstgXKfTR1NUPEtwoFdtETAzYiFGKp44R7yyq3MxbtJwaMSiyJFqKXqZSryDTnHRSeFPF3QGZLUzwC3Ng3zRA",
  "key36": "2THmByUNYtb93ScyZm2BtXm6zmzfgRZcY49VQGacAQZ248j7u2rtgHyCCNHzeojK1UyhZy5zw8qKSdohXvUNJ5Fc",
  "key37": "b3HBULqSq44xuRB7dcEbZd6wzqGY5btiZao5zsCUH8H5KXmQkAWnSC6mHqqZJ9coqBRF3u4dZmbB4jgFdPMiE1E",
  "key38": "LYaU4G1nWm15pUvKm6a3jbUfXy8oN99LGhg44wDKPqrwbDSrU9frsg44eKyEBsx7qVEX9BHNNJ1qRKxKswEqbv8",
  "key39": "3X6TJMdKgt3dXQSLBvrJSAWrCvcaVDPFC5AqueXK5QQSwvPZ2JK589491T6YmRt4hVjD7Rm9EeiLT69WHbrYuctz"
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
