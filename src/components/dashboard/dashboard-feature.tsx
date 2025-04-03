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
    "9QidjvThRxu8zuGDz1UQAuE1oCeenFcYA9YgL4niC8CDu2TdYhdXykgVDYeF8fQbDzGYbTnxFNAvQFveyQJEFMe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uzNjWXZhemzjq5BiA1Q1GEx5YJPCuYvQMkvwWd3GqibeCCT8YK5jt4s467xaL5TpVLKwwoPqWgv8ZijsNdA7vFQ",
  "key1": "39Ac1iHYauQr2sfbCfi54Zf7fH4cqD8d4qU5vmbF6nayzZvEBpdjykphZneT2dR3D1fEenSnmtvLqcKCMYnoZRKy",
  "key2": "39w8tyN9MNmxjFCLovZLazgtTcxUA7xtHupcHeuVoPeHdKGaeJD4KErJV7QhVKXDbiV3NHWR5stFVfp5dK9SjwSb",
  "key3": "TWTNDEhGoDfbtX66m9ZzVU1Yyg9yEwSKEaUccRK487b6L9b6h4YXcEogm7ZWAiJRkBmkyq3FYDNSNe4iVKHktqL",
  "key4": "2QbUqfC2CjezHDf3NqseRe9WKCKKfMraJEe2dQjTLRfDLua5AYQJ2VXLwahzxyrjMeQYpfz2EoPq23NaEABCbihs",
  "key5": "2mYHzgjjJkaQdA5nNb4RSRTfmxgfrLhx8bL2oWZGePV56gtNtszoeLygMBttAvabvaQos9LYozxAPmPNNcEYnnTW",
  "key6": "2QwJTj52xYS18DRuSu6JRc9AQQqF5ENWyWtYcU9hX5poRGF8rrWzz6ag6ef2PexbbhwYtb5GhmFLcxCZsiwTveds",
  "key7": "5H61YtYd9wUiHHGgWFgNJm6hKvH7p4hn18Ys3ARaUCbdCu6LF1XPiHXj7KJXzdbKZQb8BPAB645T9FN17dnyKRcV",
  "key8": "4TxaCYAXeLEgspaEVZBBH9jTY8QcqY3wfbD3JWuipYnEgV2E6WYZBgF6x69xMN9umnK5E1fahFkqCSDjhFB5eDGD",
  "key9": "5BGGNVfw1Kg8Y3CC1G6buAU5JGf21anGzrvTcdbyzZeZJ9feRE8knmgwe2frN54NA8DzdC3zFJPLPxLV1KhWn2PB",
  "key10": "65X9NGQHaQaXWL8pJn72Jvotj4sjBfQV51JAMox9jX8VN4VRuNpTxNcwLpbTPPCW9zKLQ21ZyydamrNT1LjPcr6Z",
  "key11": "3we8s1eBQAz7eFEv7ip9Yes7DengghV6wM4XAGhzUH6b2pEay4BN7RNfXgx2QvBtXBtbidH3VFkj9CDkYS3E2kx3",
  "key12": "cXDZf3yUmmj8DLMr2rsx98L2eD3VmxV1UMPyZNXDumWyp5FRd5qJ6K25NV2Mhv8hPE9uEkHe6BoohNuutF2DubY",
  "key13": "28kyhY2p2hY5kFj5EvgqritFwzJStc8sAG46vKcWBePaddLmqNZcrSZN8ohLAQjAbQQ2z5tRPmbUqpbon92qgsVk",
  "key14": "48ajgmj8MoJeQZ8anxW1tgM5gCEjfkeshhazix474ifnGf2jTNqqjhMP9BZGwQebszeVTn686BxKypA2A6A5FGdA",
  "key15": "31rmt683R8AZ6eUtdoatqMrTycg5XCfQQ7g1aC17PHaNbuDhCMtRmePhfxp8J2diin8hNyJ48ZophTSCZFjhSNju",
  "key16": "2w5PGfKnAdh2HrTG9Ux4Pnwkhf9rzqUVEscG54su9HLMjYioyAHU6WFVkJtYcSrcNQnG7CsSUrD6XNt9QtM3tpfc",
  "key17": "4Mq1EAh6EB9C8oLD3fN7cMpkxMkrHjBerG1NcSRsPCMtCzCEuPSxASiLwafZXnrpF37yihBmbq9FqmaZWd8nyvR3",
  "key18": "53QAjoXsTgxDckTjSUmze2S6J2HTNuTxSwB2dH8LPSAFkp99VkFSq5ERaQVG9svUvhYvqgw9H7Qqti3b5qgnTXfL",
  "key19": "2YuNPC9anpgmncCG3pJbRsYPGqNv8mv7U5woaX53Zj4XpVgz716vzpvCyyVGHbUXNxWgwQCcBbDHjLysGqmCpRos",
  "key20": "45J2ELjctZNEcm3JjMYpJvJzsqcfAv1RwtmydGuEZvVpLShVYsE1FP2VfAeMdquuhLtiiWWeif9U8uUKe2UJ8sv8",
  "key21": "91uFx3woPwdATqQnevBVMn38BaP7LdydTnAw4AgWoWPzN7dpauan7EAYVpvY4pZEsMFz7GeYH5QefMUy7hhbUny",
  "key22": "2sLQXsPnHnCrodVcR1DYUVAC7ihnneqBtBCaA1WEfCc2xWCCS9W6fK4wwWRYEDP3kdji2EqAXtBcXkytJDdJgkNX",
  "key23": "5PFoBsMe1dG98SCeY4CUL9K7XXDaw2BvcFYKE8p8xowCV8ykGBhtaj251Mmtv58h5xsGuQBfQmygmfW7s2i2PbHR",
  "key24": "5RtxUchmFvC85gWJz9XHhLcTKD7PcMsCwz25s6kxSHTFEXyfv6C9bwAadPJpafwhfoNasRxqQUet9gJ7MSC8MxYc",
  "key25": "4mcK1XHkbWGfxs9SXZAYo8VZBAsGtoQY5j7PFZvo4jofHK3nYscnUQfhgzcDxCLZ6sCaM2mffRNaMrk6CXAP8bct",
  "key26": "3C1cZeJg9vtWaDz36Gza9xBnf53NGrH1V4nMU9nGLg5zAKLuHqeMqbeyHd8dymGBRnnVALKBo6zRu1H8Rs7FicRm",
  "key27": "3gXoxH7ErgK6jfaJF5pg3dqhYCCX93R9oi6HPbnRioPeQfoxYwEJWmYFdvRwxKJU2Yz4ppwkfsE4xHVU9v72CJXU",
  "key28": "3BijZUpRGFAPTn7BJVR4t5gD7fbRPRCeU8QaMKg1VZCanKYExzyuEMUEeMH4ceVAM43uRaaxoNUXrQ8CwM7V2asv",
  "key29": "48KTLU8CFgQ9w2njveEeG5mNvLeju6uaCwtUrnQW7U45KfK1V8gyZxkFWF9sJ7Na6N7S25uRUWySMLLJFeX8aCUt",
  "key30": "3ALU9yNp98eHGg5Z5xS1yXx9V4JVWxzY2QFS28Es3zTydVuCykzZYDivFvwyhjSXt43XZLBokGQLrM25sSFA9wMi",
  "key31": "3HAgAyzwbdQb25KR19VwzwAzGyAXJZbJhX7qsPuoe6jc9bpG48kHkWswHo73qn6tufuyRubD4JSfxiecWZ3UHbGq",
  "key32": "21rZhXJkwhqJ1HAgTQSwtwdoPkZMVsb23URUgwPJKEXxNbjCiQYbaWTvwr7hr1yea948mU9Eu5sUdXFoYCrz18FY",
  "key33": "ouNEWbiM4dyqk1WCzXRE9LAVq6CYU2fho8UPNDPtrpXzphq51WcaD7Z5y3mWfiZRXGtoFnSNoJLWLpEUw3F9AjM",
  "key34": "45qPhmPUFNGCfhj9LP1jtjtQ25G9b2xJGMw8A4DW2nac8Yo1PRdChvDxYVYTwxZdCuwA5KMmjTVnRQUj5RUcGXMt",
  "key35": "4UF7bJyLr3jCBCrsAyGksnH2KBRYKL9HjuTVesqd8FLFh5WVmtpDxAemRmJw8HBMtPcQBHsaPU6Ab3nFRBR2NEEU",
  "key36": "3c5ns6rxFsKuehzKW9cjqbWRmPGvwxFJpYDtc7AJxM5LxVzKUnUrcqGzNgrRHRrHJ3BAnwVqi8dkB9hjSnFKeSoz",
  "key37": "3nMXhxbHma8eiuqmNCgfgpSksrotHXZxoCr4J7UUxEnUktoWngssfto6YjZMD3bBT2TXEfyEWVLbfjMAHLzvrcJ6",
  "key38": "dUWfULmxVa2cSeyvg1a1KMfANXHRr3t65hBA5sgAiEuZyR5z6rq296effYLcC6RTTwXYkLvVzrwsgFyNWEcNVzv",
  "key39": "yrEj5oWWkoqQ5uRLHCP9p9sAiqsdGdXa76K9xBePtQZF4fmvP5Qa2gytuaysh6JSQEDHJtmxz2sAnpaWkz2VTtq",
  "key40": "5t9rzCWeVn9w4JCeZtkdGtqMiyC5bYsjjLuU5HENuxPAto56RYTf6VMKaqD1S4ZGKf6TSqDzK2sXVp96HvNcaRfn",
  "key41": "65r1yhVSBDhCj3TPVfEkdGLMi1CPmWwD27pET8WEQLbeMzmy2bsYAmbrr9gSJQ2vW92PtVrkdLcaFLoxkkiv17e9",
  "key42": "63iYqXP1HQeN5VYiNbSe2GcS1mJayi3xTQhRzLUNvs7pEGaC1Re1ZDvsG59jHgJNoGBc7u9WXqch3xEoRFs1sBDy",
  "key43": "3FuNe6wLbYj6ZtdHEAiX7BTTbZsbWSHYXJKuoyEYMtvAk7uAnP1wyqGNZrPA5Gc9CDBcGZgiXRkrgkg4ySyTKUdc"
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
