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
    "62d5oQedDTANYffq1MtRp4FG3asoth4EyekqVMcaxGxp9aCPBoFmtYisNMrAJQuVqvyxm7R3PhruiF27wvJrjAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZpJqKBMw3hd2fwkPTwfx2ziCtk3GL3GRMAVzg7zUMNmZdAvzSAME8Lq9gBsTEj47Ww2dBn7sY99mW9V6sD4nHUc",
  "key1": "3CNwDiRtPp39VdrER6Jf9fEiA2SmCLLGcFk58VsNzVYgX6BjFKhCLcQfHZenjgtm9TdGJASVgVoAsJ6bnhkr2eja",
  "key2": "5QyPSPQzv5ZjMbYTHcZUdoTk6uEGEEjQhgye2D1T7JJGFre555SC5FbKGi5n9YGUh8s6D9fCPc7dNra8iia17uZs",
  "key3": "2DJpR7vrVmrn3Qqyer5bzL6aNvFu9Ptrd1fMgtsSX8g239Wk9LLgWBDp7C8apNUSpcntd6vVrpKZWzBSSEREwj1X",
  "key4": "5izgtZyDrHw9PQaPgHFNu5iCGVvjGV1ZSPTEgcYVKrkSviafhVS2e9TBDG8RkxZgshAFSw7Z3J9XyBtkGAPZwGub",
  "key5": "3kpZ9kMXMM2RL7JMvs4uEGHyA32uTUY2iDXxjeJy5tG5b9L2JoRzuCtRqCPJFV5JvZupVgmvHpnv1Q7yxLDgyaZX",
  "key6": "xCDpVWvAeeSEKtTCqzwMa2QVx56L4GEwvBbgxscyJJTLkB69dumKibcNtowgeGQaDBh4GG1eStQndfKNbYgzeVb",
  "key7": "3EYcKZB4Rj81LocT3g6odBqPPGf7dSG2xpvA3c3tjNaHnFNd2xJy9tQHTLVFsUjVqUbEjSoXBZX4UX6YhSQUBEUG",
  "key8": "me8ZVuQRSkPFLBH65N2HTUTPjy3L62mZ4XX8Esu7MWrvEDbt5HGqYv5pSWmvV5vQsRRyEaMdUVkkDnBWiHMQCjn",
  "key9": "4ywbwUvqCM6CQqRtrwGeVoJfgXyAgAN2KoTk2mSVV4BFiU1C4qXU51dAKguLSxTpqWaRHJMH1gDgq5xCvMu3o1TK",
  "key10": "3NqdR2D6wD81kpaiG99iCCW9ouTzRHxWhLwy2X3ZLgWroJpNWzA5LFLPsakbqPP4Lb7X1DMnhVWgauGPwYsx68BZ",
  "key11": "55KSe6Pv7pXuAMkyfbyRYZgSSMXJPwuWUdfqDjVgwg2fbVV3siS29t67tNBEWttdcho91tuaPMcXySKw5R3QrAn5",
  "key12": "3kAwDhnfFFxANTF2k4q1ATWYmQcQfsnfx4g7WrY4p8dXURLjWxQ18ymzAm3ExWXetNvQjGFNeLAwwdvKDDhYbu2R",
  "key13": "2Djn9vUkPk3BVm1mGZCTpV67boec8edLfLFF5Sg2SiX5u6N3vyPokaHxGjQRSXYZiyeHkkKq31q8xYHVDBurDsFv",
  "key14": "23Qst1y72M5PvYfjcGfDbcTwzV2p3C4gjfBK8phXizVYp1mAxaUMyH3ctNUXPjvDz9ep7ekcup21oBHzdr9G78FB",
  "key15": "2cSLLJtxk8Gk1JiTdB4aodWkGaNmRjbfz2SajB1HHiYfkRBYm7HaFjywxYZBETxNoXEoBCwjwrTtXXF6tLPVMFTc",
  "key16": "4mVrvDd2B3bgZSTKxw9JNLZiypQtwuupDZJULaiPAEzyCTrMSRJww4DgojTph51u3GvoZvtEyoFn8KpPCgkJkdLQ",
  "key17": "2ASev3cGeMpCuckp9on4anxSNH9XdqUEQMqRCKPjrL95Th38B3Bi6BDfAeGMGgo9fgQ5tkRqT3owU8zGYi631oCG",
  "key18": "3xv23hWiDcCcrCeLEAkPTWP5fviEaXhtYeUR51Nq2vaS1pcoPo8RV1y5KxVsC5eTEQRV7kh6KasyqBBEj6uW7WK8",
  "key19": "3xWMn6eH9zv8G9B9opH8NPDV5EZck6SYqK81XbxzCJkEzPNEbFLxcjV4WB72WJmSRDSMgQteuAysCKeDGvcTBkC4",
  "key20": "4tvKUGhSbR82ryWw7zUivhqHwF91aXaj41he3TvSzVz16MHAHSUJLgh2Nm3Mts88PMvKagfmMUN4zZ6DXeuvuPmA",
  "key21": "5W4kd7WFkW8F6ejxgbuyWxV7skiPkregLxBeHbNHEFxmMLRpP7Zmwxa4GeusJWG5qasvA5kAQGk9w3KpG6vYqqhr",
  "key22": "4sVvRwfvB39sbS3cWVvrwDJHhXRD8Ve94KJr2AHmMDQ49TneAkendY7zW4fyCzZEC5AmnuvrDHUjDzhmwyDa9Njj",
  "key23": "5XwPx8jdZLEhxyNXUYUaSZ3nvd3BhfYijETJNgTPPhVHNQEfwwQnbPTEnyAJi9YBEYx8SyTkXnL2dGd9MpeGBwxH",
  "key24": "5GqoWosgVP9EcwAtLsEjB87iQ9kWrHcpezPT2V99CsNH1ru3ktpSwUZnpP1bzHVhqmWVP7HZNoD4PafTKJvw8Y8E",
  "key25": "a5eSR9dej3jw7VwsHCmKTfny1S8htfqW9eogNprC4fK7kKxWfJu6WcxLU835PTCxYSwmiQP91KxGG28LpQ5C7sU",
  "key26": "ftYKovc4ksK2BMFHPMQycr2rWQiQ9bqNPKY7JFH62b4QXEFaEtYD5cEQ39QPvQcSwfkxHJwhFN1gGx1r5r1uBHg",
  "key27": "5mLQdg1kvBoBpUhFiLnvxGW6CZva6yabR8psJz5n9iL1JpBzsXU47ke8gHBjg1wnGagos7xgMAeT5xmmyb9NsUvL",
  "key28": "3SEREswkLAaHDscYcKoEGH6S2kTgXsbifxr8dhzo5XkUhvs3LKfKhoJHXKT23CeznuhZUWk8R2U44Y2ntzifoWmc",
  "key29": "34BA8ZMTbbPnm2wAdzHUJ2nEw5ps3dDdX7hatZ8pmauAxi9J5AueoX65eFvXdhdLChw9heNh9ZF7e9kmHKSVmvZ5",
  "key30": "4yJKhSRyVVuR4ybW9dsqtv7nZGiNneAKxpLwjQCgqowiQWrjsbRnpWCWzUCp5tgY4Nk9j82v8XLhP8fnuvGcY9iS",
  "key31": "37RAsEQYBKoRUmZ3PxN4Px4ckDv824Q1DjEwLFLxN5UNLDq61PD31fNRv9oz3du6wr4ftrrZ4sxH4VD9r2tgtvns",
  "key32": "4frQcnB83Huauw7XXuzhvi6DTPQ7HjMcTMCymHj3uZqt58K8suctDVGJ8PgQX5nJSMokq9KTNJHn7fk6CpuBvGcX",
  "key33": "2hqRSgae2cJEXYos13HHLnmHw2Gv1XJYdRuSESNWWs4N3tZxmqxp1Yf4j6VgRejKZCnXnEhm1DcxiPhDkyNZAd4x",
  "key34": "4S74BqRfwh1GiXW8Nt1U2pjKbtukhiTzhBfsJVsqGab7JvG51onzMN7mQr7EJcDYYCp2kPbfB9LZW2GYmcdJdyxL",
  "key35": "41hQRpsigRdsktmTNp8Xs6a56sDhdG4ScKJpDZQdnzpoQDLESF87DRh6qUpxZGjWBMkqzdhAoFF1YYfmiJE6otz2",
  "key36": "2eriJd46tgUQwyk1A7csDcG2HRK9ZrR1hLwWtq874REv7XF3Kya8q2gVnrd4SzhjdFrigg6tst1RSGbMwSEmBJem",
  "key37": "zhodWTHu2H3hwi3prdrTDSfWuZyJfCgmx4yZFwFj92PUB7EQ4cqhcWK2NxFbnvWswdRgep5KCyZU3FMD6BxwuyA",
  "key38": "5pRh4nnRrWjTT3C1wZyjXQrY5jbsunnFKhdwAXqhtiCSvUcv5DY7owngw4fYqwHqYv4tmSgbaQ2imNTjK5yzkkjF",
  "key39": "51NUWdU6XCJpgHiZZU4R8PMPKLQXtVrvB5Z9AKPXAVmPyUyFd7nzwb3AJZJ5kzUPU7oVvTf58fGuvnfX5iC1ZuTs",
  "key40": "64D3vqRCwH5PDVJ52PtZefXrKStnviK7kMGACvfmJTJ8Ete78cvHKEN3WM28P9pyCYE88YN9rwuFE4az5YBPwc97",
  "key41": "fxAavXy29mfX6634yRptbsBVm5MzgbyjRZtuc1NwRymzg3DHeP6zNrs1KvyCFXQFKMzi7dwMkQkzz4UVrT1EQs6",
  "key42": "3qAFjxUXBaCchNfcKet2gx3sKHx4Gacu4DeHwQQ7PyzPCwUDDkUfjuT4Pe4MWMkNXSwgfY4tPNPoPsRcGfyR5LVu",
  "key43": "5226gHtKK5NbFMLwWGrfXmZqpu9oaix4CeP3dCBdbXBdgnq9A99SsDh9fhEBtNwAEueAXZDEH4gBLgqkQCFHT9af",
  "key44": "5bXmYoj1NwhZZtxHhwqGHqRzGHCMsipmzKgKGG5c5PU5pCXRbRzdFsKPJdfFqjRkgwSUF5E6sGDu4YfpmSxbFxe5",
  "key45": "aj9jrwFPVWA1nYtZFEVB5u3ctvT5gVQsVxn9Uxw9rvXEamb9435E6RkyUB298fEgmMzEcifbZMpPYHVUhT1yhbE",
  "key46": "phrr7Wmgf1XsZtLLnNn8EXZood3VoqfzH9hPXcogE5WXcbYGqBsM4fHsipJShp8QEHFZR4WLaXQDthYPoG52wRt",
  "key47": "58kKF8sV8MucNujrthLpSf9kKKRUKg6r6vAofSqmatn9o5BPpcL5ukqykBen5CBY2xSpqCNhPG3A2JCLwJeMp6bJ",
  "key48": "4S5ugQ7LPAoEHqLijvzyCaNHeRLxjs47uHaYuDwnvneLgn8x4fpATfcrq3DGfqHkaYBMT9241kCZy1ee2bJC8jog"
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
