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
    "QeuZgoPF4URV6Hoj1j3pGK6Z7GaUk8dFVVerWpQBq2kjjYYo5A82BunkHC86PAEA4hrfycVDydLic2kgJD4VVRd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f41Jhtj55bUfWD1SyEkSsbyQsWpC3kHYMwqXP5HuhSpJth1yj1KthdFJmap2Z25zRaG3RvU1utJm2m2XoZqmtJv",
  "key1": "4G11zKacsq9dH9UAVC7Jb15ckQofMJBVNPxu2CecBkwpni96hHveRBCjkXs6GYMpU9ZJVnAA8FGHMsCWN1Rimtw4",
  "key2": "3mP5LJ9ENQg2vk8wXaaH7qhJbSUvmY55eEMicD7grNEeKrxkdE7Ajhkpy7dpqvxGEiNU6nW3k9RdkouxCbtFNxqn",
  "key3": "XFAS3UBJw3FQAk3xEbtXrTpdesp9SfSXNn7TfSCUZygpNA7xxPW3feYnqEPnbY1R6ChDRpN8MRGDoe2sS8rz5jr",
  "key4": "2AQap5NgdKct11pcgQ374kmd1yEZjSEetkyNKTAy1jaN3kuC9ZTv7vZNe9UFibwpmA3VzyQZ2uo8VAapETtEvcSV",
  "key5": "3gqJ1bz92uh3h7XRyc1JXSFQJM5KY1N7whXFc93mbTxxERy3HDYwhqv3VRfYUA8cw8Lu6yCv1rhs77cNiHFgdgkG",
  "key6": "SGHuV4wiDrLFaoP1exqsj7wr1YvBkBduxgKS53JzHGZs2FKUmkQ4K5nonSmQmBZpLqcF6zQSm16tkAJSLNZ1Az7",
  "key7": "4xHPnyxhhbfsRL7BA7HPTXTGtkE5Nss1D8aYwr8kA7QefmQNtCamrW6JX6zKf7nEtJtjRkPuzuJZQbk9z3MQcdMf",
  "key8": "5vucGZUjxNnshrN4GsFSmsJhkNc98oTEnGP2xPS36rG2bbKTfrdEys2hr4JPJuh4ZY6UYX7MJ5autdj5KpQ9gEUK",
  "key9": "4NpPbuNYt17awZZN3jKVoPq3Lc23eQsZtMCGHgYhtmPqmXzoAsFYCrUXuGfBWSffRqCQrN1HHZyjKWAqAHH35Xw5",
  "key10": "4L3zZhbYcozvWXe7mBRSMtcfg3h3FwE1tFbCfhRyPbYrKCb5HEaKQjCii6W8zcmgb2K4DnDF26JQ1Lh4DXuZUBCm",
  "key11": "5YMeJAcNsLE5xKuiDYCbJ3VMYPEeE3kjdrhipgCxAHLCNfkfY4zbPsrCNZhFExdZirJXvc7aPTBRwd8DpaZRjA7K",
  "key12": "4tEo9HEAaPikYMn9VGnmbA8MWSMEsYZyFgwgwcayYLViEafY594TuWZHkSzuDWiq3aV7R33xsrdHJnrZsYJp4ULd",
  "key13": "2H43HBDA16XQSxEhsFVDGhrGq3eGYGUJYBrFAjh8R6D9QSstqE3WScVXRynpjsgfUXJrrrzBcitf93ayuCfNUfJy",
  "key14": "aLmf2qXtHRVoWS1MogS8F5SsWLGLUTbvEvAgPeEjtAHajZmmNxnirhmz22RftPE6a8CiGD3qo4Ft1GZTcXJNbRg",
  "key15": "2YvSKhiQCYNwm1bfY1oYU4v7RLQ25NQit3mmAoFJmfLkSAFNM7oBUqZLKmyhp4GB45RxsGYSGd7pP1WjVhv8D5mz",
  "key16": "5S8chKSWLVwNjV37QEpp43JHHv41fsLVnWstaaYXjizSE33QZGvEYdaohULBCQT2kW9zCnmQjSnx8Bk3aEN765R6",
  "key17": "4QReFmf4ViEvANduoQkyDStckHgbD9n6T7SDxXKfEPvyjtfFJu9E29ojJrD5mtbncrL59NVU8rfdGJ2uB8KcYbrT",
  "key18": "5PsrgFTkWeh6pwrXeZ4DKMNNKxLsQtAbGFV9vmipLjnN2kT1v371fzy1tC85DxY7B1moe6GsmQvo8yzJZ2t8wJix",
  "key19": "3LVobB4kqhbRH2ytHTAMmejZAx2C3kttW4wkn8TT69AUyxKR2zTT4GgAq4bJhcjn5SpYqukkGcZ9kZR31onLMPTx",
  "key20": "45CV4JMnyyAjmX4456wwZzkGWYfAzShKf5DEKKqaiu43TPs3ddSnwqt1GMD1unVRb6VkfT7C3FsXJUYdtP7sDWgv",
  "key21": "5S3YsZNcesk1LfzKcbcimngRPqwBjhM845iVsR1K3gpMbyPaZQtDCjtDomc6wg8QevRMBk6an6QjsXbomeuNCWSb",
  "key22": "3Zda46i3tEBNjKVmSH9ucx99vqLT37mn94cQeM7Z5mfAtbbhM2oRo4sv7Po83YbDxbxkNATj1wBAtN78JyMexBiV",
  "key23": "3uDpCdFRM6FeD2cA547sTaTrseo9sEsye7fLULuZFMepsuGMXvm7UedxXQFuJboBgbHxp75uJyMaHnN1jaj5GAWu",
  "key24": "5JYAfS8XcPYMsZHZ38npe8u6dVzoxqprVL993zrDXnMzXGxc2ZodK2BgfcXzzYtEJTw1NSbBSAN32pkra8K1RBTc",
  "key25": "5BC864aRYM2uYi4zE16e8DNd5nrjYubWV59xYPwtUWJrp2J5wot64UmXXi2ipCn85nENaEpuFPvJRQoXMsBoisgk",
  "key26": "T3PntKhzkq4nQFSzNEMshhGSjSPjthTw9HRN9igHckEwXKsScGbCmgqFJGfQjjAP3vTAxVgC86GrsxQJ2eiw8zU",
  "key27": "3QwsMa2PwYJ3PRAKLBzTMGhVWNiBjgPwrswkTDsgKEkruTTG7BZteP8gCyyr96Km6udAApK9mG5ZR2AWji6iuAC",
  "key28": "4ebGeZaGXMhnLczf5jkgpZ7K4HC4uNpWDt5WLF4J9DsvA5T4sUhdyd8qWn6kK5QBeSjwcGyXvbaNPu1fwPDBVRG6",
  "key29": "zBEEMVbhY1ks5KMnBU16ZbyYeVzd31F5Yy1F6DGnLHZTrmuXz3HLBESBdMT6wVubZ8v5k4bArYktZXMKaMA9AJV"
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
