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
    "3sy55biGVrbCfBCVWz3e5Pb8twqztKyQ8SRa8ji5gkQtCmxri6YosVeMNK4K8uBJ5fMySou41a3opgeY4SV51RhN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eBQAiGfK2UJTn9WKxviXEiDuxicqoeKXkmRZWPfxfXxjXoUmDJWXuRgU6zADCyQJT2LXdiBT9Bj6jSuAx4hhcKj",
  "key1": "4UoxktnxiBC9UZpnXK7QSQCmAQ1qzAsDDRkz15sUCtr1DAHaqKPASk1ejfNUcnjKyqG5Yf5ynEhCx4nQSHXnzSuJ",
  "key2": "2WqeS332p2imA9mcrgmEA6wU889CwPET1JFBgv3tu9yWczqScz3jtFHfncQ8qaWwFjKhsE6kBzjuZ7zZ5r7Xk6wH",
  "key3": "2aB9ExdFHf561hsRQaDDraZA8hUSojFLRKfTdpC58D8fv7nV8bDqwo8TfcsSttnnaeLddDBQWYpxyWFhVxEnTNL1",
  "key4": "2SN5cWZLXA8Q6Gg4LPkxSPVNvxcgdPH88AvPEECDyoKnmnyVe4fcwSDUzAxkgu6ZnKtzJquvkQH4a7bWApw2q9Nq",
  "key5": "5cRzac42R3EAJuRtJRu7eqfKU2jWfG49wN8ByVsqNREWyvBRmSddWohDEVmzWqdNX3tjExMjiL2RStdoE7UohTtu",
  "key6": "2N5zi4bBcH9YroZDDPnj9RnHYM7nrbYRgPtEiCPZy1Adw78C2jp1kRVySQZRg9Hmm4sbQ7YqxtktApZPe6ni4DLq",
  "key7": "5ezGn9J6gdkNDqA6vKBRfMnDT44CFvk8wWs7uHRyZPArzEyXDqE7S7BsUcg2F55CvUuvg9ui575KdNa4a2SkeBXz",
  "key8": "8c6ErwP6xSYJot998eWU7jj1pJec3NDWBBhT3WyFxz1zoJCuq8M28Ck2g5oBy3DC6NZG6GpX1jMhUjuP3PpAmFA",
  "key9": "5pveBi47JG6zZGdJeUcfVJQ69SApuTbhyA4fqn7jFHbnuovRNheVJeXuJoVyw88FJpkwfpeiyAvJAatzZHBizkWE",
  "key10": "2177BTAzobQMMuzaWRFyQjtN4EcETf9qo8JhbrbCWsu2cowqYnZtRdF6SZsZfNgrXdbc1EDAqPNwQtuGNjxewA3A",
  "key11": "AdKdsU4DVSke57wL6PAdFfs4MGHpVHWggQN7RAsgjmsEqYCxiFY4J6dDdWpaUJfkoMjzr7kvHVLBjD4UErsJkuH",
  "key12": "pWjm2a6Cvj8JKaqT5CiyXW78R2m7hV4YFrA3fc79FDYRaUKCYoQGchxeJHAMSmEa4HEquq3GhAENtRg6Bye5aqs",
  "key13": "4LioTvt9FV3FM27DxvCQpZxYyzz1hSTvugvqgTPFt1rS3XRae2Jd7ooJgBMkLHzLiNJid4m8zrUyhLrT1xDKw23V",
  "key14": "qgHmwGpS5aecQrgZgq3UwVdvDMttynXeVpLBrF2o8WdTusEqsNic9tQxufPFd5vV59FwRZgbfuvBi6gtGU2Wxxg",
  "key15": "4BTzoLby4XFpgmc2QMsZ1CLnfc2QnaKdRr8eLnJRzvdWonogUm7vtRJubouK4Sz8rZAhXhbkuV2pTQXZpiEBg3xK",
  "key16": "4dz9U4bFPARwdT3FKUY7tmBM41qCYEc3qK7gpKz34diqghHXaUwVN1qpc1BNWhyVe7w4stys1zHD8ijMTkytxEhy",
  "key17": "JxtLtJs2CqMx1wrb8mwoFR26rSVVDsKPRii8AwfN3mvmsb42gC82GZXXramQaPbmgbmoRhCiqXFx3XddfrWmuPY",
  "key18": "2qAMetQkNbsRwQbnZcZ73adCXAkpkGG8FJWk6cZoqY2WePyEXcYPdr26QbnzwAWP1E8qNdiBq11MoNCGE9j3e7vY",
  "key19": "FG8Rkdvfnweb4pUKVyLEydHM11DmGB9DK4WAGkASZSSRohcLPNiDmbAqRnzRY1fzDVxFZZ4uGA433YGYskabPE1",
  "key20": "24boQS6BGksJYgm5GYEx1tRUC5dytMEEHRxdiBD1UA8UxAcfj4GNDh5VyLe3NMdn5Yk6QSYpVjbcay2iEJMNax9N",
  "key21": "4EgGU8JaXVRyKHzwNzUxJFeKGGz2SW8YgrFpRgDANWke8WswxvfNqz879FQ4iUrMVaqYvUUCBzjjrpsbg521SgtC",
  "key22": "rotZPt6FFHgQ8oTCWheD9Bzsk9WbWzATQfdJZ8vM3W94ryS75SC4bcDNToE9uUD8vyzuC9SkB14dcZ4P1KZNRbb",
  "key23": "5Q5Es4chWXT7u5cjJyxAXYBcZ7EPe956htU4jwnMsSF8F8HGdtzaq9kRJoLyYZafDzfjEBq8P422sErqn1LFjAfz",
  "key24": "4Zd1jMvvv4FhSbS3FomfctMig9KpmBKvLnZZ4fJZuZeQWJYyaxdyzqEjkzeSXivycfKmhA8a6Tbcjj7FF4xgLbui",
  "key25": "XeY9Qwn6gC1uoTHndUhD39CRWXUdSC4KZCdzW1ers14BUG8CCK1nzfd2wkSYYHL9t22s222JoWrP1qSrxm7EjRN",
  "key26": "5Qs8QN31QhjQMjVPQ1ea2iMo9oETY9oSN7LuLWeDrg7UiSGczozzADaVsjYhaEEsApZ45gjLoTMVa3ZbcmQynEib",
  "key27": "4Wg6fDSLurGvGiKLCZxtTDhk2XLPvosNnEVq82V8i7etdUeHVB4QnVSLdpsz5PtCP8DGd9aQ37cidQRimCMgJu3Z",
  "key28": "2KeYgV2EZGhXjAgnVugr25JtqjRkYxRiahcbBj4DQNYt1ZpPaZs2XM5VTPLn5kmCWqcw6Wa5CThoWeZoJezZMM14",
  "key29": "28ZfDDB9ML1ZKphYExPS1Y91FWDGij7Qb4DryWuBcJzV6pkfy3JczctPFcTxFdA1A3AiN4xTrGodKWQWsxbRzuNS",
  "key30": "4fuBW9WeetreKDYUQfiCoUEFnWZax1YCg6gWBARHfJ7SHp9EH5rrxeYzNJYJkXZHyCdzhVx8VGgx9YH1kDNY2uzg",
  "key31": "3SpmgG2qjHYSGXYGBGXyxvUN6fLX2S994GiVJzCHZubGXr5KVEoFy8oR54jEKM2zuDcCdJ9QedYMCdrH2o7AwEAG",
  "key32": "4Cd3ckHzcmQgxwystvTMswmGBqBfg3zThZLdcJ2vYCSaTuBcVSU674w6aRiSxtPyQNJAqmLzNnY9ZBNHs9W9T7TE",
  "key33": "2CAfYTqLwL2Yh25ctbZ9XJNKoZJAQdKJuJ53pvgrG228i9VpE49Qa2XjwRr3SeJUDoev4LSbRVnFAS8E9ZQaQnz3",
  "key34": "3ba7e1RyFta2Lnh2RT3BJywHfGbAwyyJ61FJqj7CEDLjSChc3Zcs6DfjfzrUPqXJ1rv4JfKw9aLaNXNF4sRs1HWq",
  "key35": "4mv512Y5HkC37SZbWkC8U3myjXKwDt9bGaQKku4cBTjXV9w4d7fdQ8uRY4XvhnawnCPvbgfJLMGxf4ypBV7RVFjf"
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
