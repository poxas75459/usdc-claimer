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
    "4jrTCwEfAziKwWCgMW77Y3JuTxjkUd1JQqkFAbWMwdew5KDyGvM2kJVEbWMeyvRuEaPAMjSaEhbHS29qKJ8v2Vau"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gg3Mo4kWLmyseqzJVyiUEKFtyPzSTBRkcrMFhgrRQRCauJg4pMeNbGRxs51J1axL4M6TwY4nuuAaWMnErMKUgCu",
  "key1": "3gTPDiJAaTDPw12A9Vwsto3wZnfVa5eGn3S2BcL25nuXCicR2NGJig5ZR5rE29sFgbpCJ4WDGo13YcYyJ8TdhadJ",
  "key2": "5WQbPR9yGjRMGq67oY5UZtUy8QaEgnYkLoM2ANAexnqgW6Woz8SXAQUgRVENFcdgprTVG631L7XussJRe5dXsboc",
  "key3": "2PZfaoygCk1WMjy2PoDYcBFNWmd2veNqaWB623uqhH93MQSKmSAbT29NAxgAJ2jr7SKA5sYqwgY6HQRQ35AYpfrx",
  "key4": "5k1f3ymH974fY3aTtD85MigtBeG81ExstBVJw3Gw48hTdP26XcU831roprDJgesrUYtzdCnGKDctNgQjhJpo5Tf",
  "key5": "2ysjUAHSJjQ9EFJSxW4jVwBfyBSWsBxjXCujE2JaSeqMDCrwADUC4fFuG8Arqi5ieyiEgfpxkBXaC8CqbKFsZ1an",
  "key6": "26HohBV1teDaM8sNECz9EbEeysT2qKT6ijxAvLUHBucE9eqTTYmR15rhe7qDmdGHeYDiHBJuyH43HCehk16YdX5S",
  "key7": "2fvAYGztgXYcjRjjk4PbL5mCXTVqc42qYFweLnyQYRPsaTaPvTSCKSNRf2ktA728ztFRxorbafM2epxNqsGmBBPz",
  "key8": "4YLAX5iadihrL5Tbmq4oZVjTvQ1WyQxrp1QVjzWSE9cap6vxMGfoszx2BTQ1CKt351dLMazA2XGUXK5Va8qJow2H",
  "key9": "TAicDUzYYbs61EM72fv4C73gmkQXQ1ybqRBpD6k3QUf1UnXjcj4Grq3u8oRg7SeJH6hKoBn524BE7UsuW6PmnZM",
  "key10": "3Y9xFjTSutuWuV9RhgMX1apcvpQQ7xTsLUPvv17ETXMBchL7Rqskysrv9PeQp9HKJ7zoZDvAvskv1keuiKBeBRfK",
  "key11": "3q3b8nhZj4oNPaxtML7ADMhfTWhfbjZBriMkCRoTCCt57dnsie67eJbWR1kaWSd3tXFmGVAefXFm8UCd9h6yQZWD",
  "key12": "5YGxM1YP1r3mvw6gABUmeJ5Bk9nWrgQeu7t2mKBzZqJtkKxwXEnazs49uJSYmxMwssHyANTF7LfbpqB2WcyUwyMk",
  "key13": "4PdndPkXUQgApk2NQtUQyaZ9dzmyzEbgKNLzcQqPzkXmgWbm1XDyF5WEKVn9m8vG6UMBhGAy3x2nQZ6LkL7pkYEe",
  "key14": "3Z1vFuMCR7LDCZjPge2Wns7Y7Y2ArrguVcVtgb97BUC19kVhuCbZ5ZFa7rvYmPf8My4uHKafSJmA6e1q2VKoj6o9",
  "key15": "SDkSVEbHECrmeLFs7LVbXkbarMGZrF2fZccRyxcfFdHiQpT3WDDDKB1M78Hp6YpDTH7StgvD5SBRFbnRN69WcF3",
  "key16": "29ipBi2EFiPXiBWLmnuhtD4RYpeTZptTq1KvLZkGcQM7rJuHpKatTfR8zqSVfMFVfTBbfk5rzSDWMc7jUxM6GeYr",
  "key17": "3W297YqDT3eH4xkusnNRSApJoXWkzYGJAfhXHv1pCgaf6HfENRkxv1bvPVENhfP4TGVbQwtE6rs4wb1TK5qVvawU",
  "key18": "NSR26frEqWAzvq3U2hzjehp9Y3axk3NmdYRhqnBF9KvGWYasLcZWshiVvZovQu1v9bAiy367sdjXeox71mSoscG",
  "key19": "5RbJnaq4vk9oxaiBAS82q9xCPEYhjRA3wjYfEEY4eQXTRXfYBDht6fRbyMAWwamLSZvBGSLExg7AriPKKPRW2LGD",
  "key20": "66NrmwjiVnwcEinnYZzb3YXdkmp9XE4pFtNYn4T2AVHoRW56kKninuhRb4TP835BC1cDRpq8x2zRh8UUkKRL1FwV",
  "key21": "5oW9fb7t6JCL2ana6GuAMCVYp5Zi87hkjEwfPDaKSB6jicJni2qP3dGhyFwiCB6TUcA5guRiHSWoBFn8cdXgo2CG",
  "key22": "5mVWg8GuKh3tnwNwGU7c3iXb1duje5tvakuB2PP7DkXYG4KZJLgPeJEfqARLs7Ed5WZMEPXHJADSZiYDNGkKehnL",
  "key23": "KHxFBn5DYRZALKHZvVoBF1at2Ki2QHsaiLM6ENCDuMv1Xq8PQyDfeutEgrQVF3UrgKr4KokN1Cfn5AbNBRVgHkC",
  "key24": "rzm9VwkQw1wuK4XTjSpBySXLCNDZMsBdmnPUKnz3Rzz7JekVawSpAd2hxEgEoniFoEib9VS6pZpUE8RHntD9P6J",
  "key25": "3VqJpNtAg86eab9WzcAyr9Q1xrh7rjUcU93hTebC4EAb3PgrZcrTQD883TGRSogVwZywEZV4kBVNfasZ2yzaLizF",
  "key26": "2MrJ1UD3oH7Lm3PYUyLByxnijBV1VCtFyXLtQ7ZPsUULTJu22bHee185karz6bFRLQCjtu39kEvGKGkJU2TxSNFg",
  "key27": "5NQePgp6fDpHSUj8Jxb7rKjMEMnaMsheG3vtb6FLutyFSCcD7K5UL1NV27Bhq59TWPJG9pJRKU97m2rixYxSujgu"
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
