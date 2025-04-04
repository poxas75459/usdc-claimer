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
    "5nKTLbfvbHwyG1NLtnKKShjfvtSCs7v6PfHmkqadEGmHfDEi2NjfLnKwGAZGbmwJN9PQtaA6FMqJtcKuzQrAswB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xAb7FmWX84opQuXvmrRiPkfxyGMzMXCHETsr6sj4BxoxFTVpJjbP7AY1eBSTkjrJcrSMd855PsKw92gjmSkBLFn",
  "key1": "3dnpDfdDUaF918p9hdSQAFazpRwQaywZjcsXwWWY13Rdp25W5TfvUiDRTCp3TCm8Zg7etASKmyJVCjTExUoKXWBe",
  "key2": "5GVW29Aa4QmmENHnZAGZfKQN1k6fARwZkrwc6txse51t9KL9hoZ3DRqVYgHoJxYuwKRCKuMyqF1TgmvKKs5RofNi",
  "key3": "2b9fHo2E4NPPkPSYfYqZjQq1XZL6CbWUFqVXJqsJU2GXxzh7ZnSDmByHCBKusiY1Spw6iuNv75n568bQPyVKD6Dq",
  "key4": "2HdHU87JVpPkNBA8VM998UXq7VUXyBktMeREf8sHpZmTKD5EXxgxsBGbC8J21D8w6AQbxiR5jwefrKVYz8FaMcVH",
  "key5": "4C9Y2YSRCnaWWnGa8ZmFVngMGEJwqnk8FrPMoqNSuYSrNZ7nUkhwxZ1Ytw75uhz1DEoagRn3Zf6wLUBhkDjBrXTr",
  "key6": "2qrw6NHEYVmf9kghS52TmUpeYWD94HhmzBELGiJEBQj9XV2mYwujYhiYs11axkEG24zbzYbmzfomPjv7DxNrSeJm",
  "key7": "gs5pgpumdt6cRYwn4VV8EXDmDRoYVHb6zjtXsism43Ve6m7go7sqoSH8CiWEygmaXEtvzfxeQJSzkBLxBBzcQbC",
  "key8": "4sTvWYZpKWm3SrMRX6G7aQYANsxoboXYYaB2iVx96QVT5KgSRMzbt7shJJkmL1g7eC4L88kWYGDRXvdPnsvpukB9",
  "key9": "3TPCXjinDXWYyMeW9gJL1jRHZGRJmWVf2tPaNLdSZYSoLqPBz4A4uNfDQysiz2fvhMJwpiphfwucWYzxggU3s9De",
  "key10": "2QDUQfRLk1chcQjdNbcRJwndDdF65CJgKbLhVTwLer3pdh2v4t2ZVgkkgya58zBN2DnwYvy3nVNX6Ln7wRtW2SEu",
  "key11": "SKYkNxPWeXPtG33h1WkikQ95kUwrsayaaRatZEX9ZfixXWF9evz2TPPmkMGnpeahCt8hKYXTrzPsu8AZxdbiqx2",
  "key12": "5TCFbswTXhaAGvJ9SmjTZGfmhy4dVYEVMJTWxf6UVH8gU4RhK85ory9qnBTBS2sVhWXMvopvaQeg3RdFsHKjf4HF",
  "key13": "4mCDtVVs8Pe9dp72G3i3AuK3zGzQ4qczoeCdziWTanWbsu71bCMoX2xZh2uWsGMyv9uAscUZiNxTL6anFvTJSmkJ",
  "key14": "v9jhWCBunZAD1AjcPKvJ6r3FypYUwuMHAvwoxQuSthMU6SAtSLp2KYtH2CoTkz6T1Xqwz8Z2MhRvn6XSJ7KETTS",
  "key15": "8jwuNG6j9ZdjGsFV9CP2iqFaTwP7CMY7NmfGDqp6L2EFohhSXkMPNhJVkodvgbH2bxFASkd44FzmePfibYbL5tT",
  "key16": "5FTH6iDmWdEbmYrCZqsVujhdjCaQZMeukuvcfsV8LqYcp5w9BYE7cjDTkGGyHK5Xb6XXTxDjBxtgdscm1DeaSQk1",
  "key17": "3YbNdv8UYjV4gevV6PquQ96VNR7UEQkAbzoUCZarVCtAKQatWdbvqhbM71Vo6kYMwsaLP8KzYDVS2mQUprWFSBKA",
  "key18": "5dG4gWTTjS6YkdFKnVAofcvSGeRbUgf5N3EB2VAgEPw65HeJFbtr22bMZzLrPiBe29mqNd4N4847eAteBebiZWB",
  "key19": "PUacwQQ9waMEyGvF4kuN9zsM1FfJkjC1K7g67VmcBXQzeio81ZeVEVZRmAtyVkHPVxF5JhjAZPeFMjQdcUsyPHc",
  "key20": "4vs2joBehJwoPPb9Ztrso9WVf9YpQ3xUw6291Xaz9V3tJLUVCjobx5KBAMaufoW5dWuFgzPfiwDwchdDeQaYvhDw",
  "key21": "3tByENracmekWjXbcURUEwZJMy9CSBHFGNN2mCK58nBESSkjzzDjEVZhdxHgPx7xusikW5g8MCxWaDx92pbikEYC",
  "key22": "thpL9jnZ2uxsgD3o1ZPNcVsymwd6PUToYQrduginqDaLTDwErbTBuvBjikpzmaobXfiz4hXHnQHVADyR4ttg3Pr",
  "key23": "xkXY9i5wYnWecqLuZUNbmzZ5FqJKnaoNoE1UJi82NGzaqWTAKeHgo9EKyUff45Z5DH6rCjfDoxZonUEuDzGrBoT",
  "key24": "4YGU1Mojbq8VbZ6AXQR6gEAYxLqCDPCccxuFD9bVXsPeaB59ZRBHgPdkKk7dV5yCYdPLJd5MdnznuBmaj2DTriJX",
  "key25": "41KNX4ZKZ9ikF1QqYp9wbe2tUMmmBpKWRqLntSbntFWWCLbAHMhnnN5eghvhFchHA41QmSXaYic8XoYHvxF796gx",
  "key26": "3DRiqgiU5qZFSnmcP8nbiz4iba5m43tEKxxy47BRHtiUt9JNQpLNn9JmeB1p19kR3xsyLAjQSvaMF165KjdvQvLb",
  "key27": "5ckq9NJ8Hi8CR8y6ZHYtn9CgZwrhKrcHmZ75A88zksTBeTHt17H96G1h8gPeHipVik6qmtxPZPbr4juypJh8RfP8",
  "key28": "45HUAjDxfWHwr9APzwkY78wKgziuihoLedT1WKNRj2ADGsYYizXbMhVLkG4xSs6WUnMTX2fzgTXmWtk9qheLNRmL",
  "key29": "m3usQEFbGEGBjQVXPxfzLxJmnfvguh2B9HHrMXR2z8HZVJL799BtgdRQEK8Urbv7PdLRGHHfGiHfcZt5bSJrYNt",
  "key30": "dXraeHq1b2gS7pT4xwerRRKcjGLDxiTbSeXF81Qmp7Gkr6QcGBa53TbypLhxAB7DWZkvSuvwfZ24ytha4iT7xy4",
  "key31": "2HaBidUxrNGGU5e9w3dSXUvv7ygD9Jrjw8Kg3QXXRYNwPuhi6MXTEu1V1PXCevbpLQdSAgV5weoKL4LPw1x6Rh4J",
  "key32": "3Qyc6tS3hk9iey3pPSrdFbDCL4c7qDkyEGuoxB6tnS6vi4ZdDRxDVUYg7LixR4SWCNUcD3uB2CL2Pcb39pj7AD6U",
  "key33": "2GZ1vmW9avgZv5WECfqSfYAf3G9hFyx22EJfkRkmS8PybkyTo4Bjf8Li3LuQyrywrdAFtRUdZxr6fCDWLWRKunPG",
  "key34": "6eXxumiU5brcDkZLqswig3ojmGsJvLGZJbQdG3p2WCheLP1fXePHGEkV2atYDuShmFLMGDT3mT8KACHagWkTyMU",
  "key35": "5sNbfVumfkL5X2U1e5qRgdTihgHR6JVS5pTRdEviNLQqmtzeR4k7bfvikE4ZyWaGhvA9ue72PXsBs2JxXe9FECL3",
  "key36": "gPUxQpBXMxHk9u6HcrVzwtWPyEp9AZL4ParCf7db66Sm7fpXnTCjWRv2CqDGV76SofVQSb7zNFEpT4BcUf9Jz2A",
  "key37": "2tVTcscj7ZTDAZuGm2kPK1oRb9wjjM4z1Ma7RqLiHzwxM3nb1ZRL3mbd8fKNFVkENYXrjBiq9Ypc1Zay1JUFxYqS",
  "key38": "4cX5md7Z5QbvujNETn3PZohB9cifRQMjUui5GAiaLtCJvEJTZgrf2Wazz7zw3PR9n5QEVpyNp1tZLfmv5ZFzij37",
  "key39": "3u4LzUMJVDJETEZWncv1uvx5j6nrw5Mwjo34oMt64JoyQu43PiN7VExvqcaqtptt67uvWw2BrYiiLrb5rtSot7bR",
  "key40": "5AaMb6rQxq8cTbt7esKsbv8wKs2f22HP7K4HgWxVgjQ3ktoAwoZ6EMT6mtWNjiy1uKmpyq61UWkeNHknKjPvwTNo",
  "key41": "2uoXgfbjhCFwQpQxYhQJVkCgMpfmzmTXUhzybqDXRzZjREV8YQCX9emTc2DY5YcNrndWMZ8cX8tt2DyBuiRQWXNC",
  "key42": "3QbtWF8f4HxMsWosZzbi7WXj2DVcLnM2ySd1ARreLpw7PrVeqWZPpcSqyGBpbhpejZ72gtHUd2WrSDjEZ1qDkXGr",
  "key43": "4Uabtdt7rE5j9pwLF7AjqFGaroESZcbjzitSMzhDX1fKLE1CXBJW2xnAhFVUu5ZFtowZmCPK7PrzeavdCAz1Ys6J",
  "key44": "4XHaQtXRTxafDP5G1xZzbJijic4s7ZKdguA7Ug7E7TQnYefSrSJjaV48XjbWPsvzniaeCcJCuoFanaweN9T1dbmA",
  "key45": "5GrxX55ukez4cxc42cvPuJUUW8CW9zTATbnVZRBCvCtQJ5pn2GCwzE9HxmPWXyFm9HjFhHb2iSxVkEia5cKgYbjT",
  "key46": "4Yj8joee3HAhL3afbNtog4uBVKw3nrCRoxkUbXjtZCe3nRTeuNLstzQWUZ8BxYyeSJ27q7bWoZyVqwGBmy8tsb7T"
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
