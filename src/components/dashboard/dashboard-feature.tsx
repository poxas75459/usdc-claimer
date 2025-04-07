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
    "5bA1pkn5rroRbnL32kGQS8cXC6nvuwdLzdqyc34k1GFY8zu7WXPY2CCAaFT9cCb2xeyXofrR7MKc5dJYVxbCY7fK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q5ZndqDWFK1ttW7CKrnNMfoukDkFHqYbzvRsHvtTiPqjbB1DMeV4GNKkhKEBUFCeYGqH7dMx8zeZp7c78kgFZeD",
  "key1": "5E8AAsGqimv61og65mJnpsDYykHFYNWiKtLxDG53dp5NfbF1Jxb1cu5jwxjzx1dyeyU2NoYJLPkemRDBfQVrBbfW",
  "key2": "5k9Wv4UV4XhQ5hauB8JEizzXxwSXe5TgdUsVpXB46ND1mcDDsX6mxpVteoR6Fk5WQvrACC5TeXFN5sS7qx8d9uHX",
  "key3": "LRCrHbQEQh9KpPn6tPAJCK1XgzYVNumB7r8A3qcoKAogktWp9veY6m9msE83h4TUL1npjMQRmDsmLz5d3esHkeY",
  "key4": "22vHs2Xk6qmwuTLKDQqtKQrmCfHeTL9B1cU3JuaEfdRefrq292mfn7MpUnT6Ahw2AJeCcJbBcotqcdPesmNyvNUF",
  "key5": "3uZ6d547ruTF2ERP2VEf8evZenLW4zRnnMGBQJB7SuX9pXgJ7xRCprF1VPXYBgR12nqawPvphAh8CT5qiJtEj9rk",
  "key6": "fGTSxqctDfWrpZK4vYWnZ2hx2B5AvkM1B7MaAXBUHJjhGvZAXTU4BAYMtMJDK3ePNsjJQUuZJwsE5KdJgzPxGDS",
  "key7": "3XWEYiZ8DGUi3JTZqURrot2XhmRnJcpyzLYs35SC1317QNFTJXFvexDSFot55FEXFrtuPc4siBs7hEGYmKKz6c91",
  "key8": "3krcWGpXtZ6SWZwh8WJ33vdPCpmvTg1q3HzPUta986VpxqhNxVui1GjZLFYpVjKqBVmZL8f8DgAXoqmLCidgFAwo",
  "key9": "DjZFPE5MjzvCQh1XxmE7KZPqmSmu14sdbRsM7H1fk8rLhVwBqVVcf4HdnVaujEsyjcajEoSL2Pn5WB9RD3VdWQh",
  "key10": "5xshW8EHGQmV9tMU6FvmiyamJF48pa5js8Y6BSahmWKm8cEquXtfmBU19LDsVmrzKJoZh3kUj7QmgShMVgE4xqoc",
  "key11": "5zTpK6u6c8uU4iYDyLkpxoK4W8xMzCWFR1qR9nkqx1Bh1atd16HNbUL1KoGAeTfmv8dB3W2mdKGkCsH3S27Kb6ox",
  "key12": "4uGYZW9JprTjDKK5z422px3satPww32sL7c8aE7XVS74XZLdnR6nuptHjAc5cyU6pk3yZHSK66b7NBVZuVAQsJJV",
  "key13": "2Ub9Zn7EGyEkWrZaPTZYY6z3G4DjLaWbwSdWs4QGBXwXFFsq9eCuy3eaLF9e2hgvfn2HHCkYJMk69YdDidm8Ga1A",
  "key14": "2dRJHr43ZMyfsL6ABiqAUKxBUx7qJUn4zvxMXEXBUorTbgaeiy7pLZUdrPoAxf9yo9SFeGPVDFJjmHxEZsZh9rSN",
  "key15": "34iik5z5X2rSbWXy7sYzvrHxuVamADraawPPANZZEmYkgm12zgrxJTrdPJBFyU3ASL1p5NSkqbmo64keXFpbGSUf",
  "key16": "3okptum626pJfJHXirpn1vUqqDK92rSNsJuBaPojwAcvuB1JuRSPyTLiCKucAwCvKMuQRKLYhzEnNEcBVCMtsgyt",
  "key17": "5zWuMSNNmXu7LvKDSMaeGKEFcCjrDZcBUhNynexnpLStPmkoYUEi7Ggcfr3D6PmGY5eGQEeAgpA3VExR7ygcmqF8",
  "key18": "5D9gB5akZs24ETMT3tGZSNzvK3Fkat3n6LsT3cFPCYoB7hFy6b8sVE5HqnTQBwFLBDE5tfQzgjADzv1mgw9Cx3Hs",
  "key19": "5dqHmUuAo7Q4pJK9BQDwBEypcjAgFGjrsW8SDZrMqdncxEAkzMAVLuMaSwMcnVemewVSF8ZHW75JcGrVBkht9iJz",
  "key20": "4Bj8pvG2M18woS6PwiTw7RB11pVN1UTDqudZ2ifnS29XgqXbvuagSUSf9uFqg8sNA1SvKPvFUiHunTGcmzkJdJYe",
  "key21": "YnyvdHfmR67xJ8bqGbjUVsQiwzinT72GLtcMaPoaZQcLEdphmWZsMq7TKCy59n5T7T4RLsYdT9FKvbEdUdK6sE4",
  "key22": "5E3ZAi5Zc3xw5HWyoeVfDg9nW6oGiNf28ZTVELsEqcVKDK4ouPrSsQJ61KcHj5EpqbAFWEuW7Zxeet2i26LmsCUB",
  "key23": "5Jgy1sZNJ7KUHpes8cHi4tpdNVGbiBPXFLkF12A17MQkvJLTudNjsDpYJnHRZZ6hFytUK3sf1GPFT48797x5hMaq",
  "key24": "4tJSyuwtz7Mb3mmfEnXcBH9QAZD3Y8dmpX5tbKN6LHaRx4TJhddpn665MopeZRxw33fuymsXUbwMLvjYqYKFrDoH",
  "key25": "58S4Cp9SfbF7KuC9HozCPjV78sCUTCnz4aEnXaVpAGbvLP2DJF8onWebhnHCHFVDZkWNUjewN5jkmD1JdUkmHeaS",
  "key26": "JiQqoaNF56bmtZgy5eZsQZ5bU5DpAWj2vhfmq9U81GmuLQ3cwrSwKYsHY3XMCoSBuZVEmmzjNUkBxNXf49ZbvMu",
  "key27": "FKjs3i9dKrD4eghWeP6SxJQbL8Nu1jdodomHVKFu8VuQ5SVBJJEPRCLaXeRtE8UrzDBR54mBpqb4r6tXbAJkwsM",
  "key28": "3voxedtmT712cAbyxc2uLbF1BFcSDQwiPHDcVRqHSo1H7nAtVaq65BrpnuqSZiSfp9MxJvuqKrHEs9p5v7YYmFAq",
  "key29": "2NhXiQkc6HPj9bPof3EDrSyHuPbszGmeGgTs9NmrJXY3q2rB7B6wAhgA6nRa56aTG6WVzWu93o1bo2p31oqtqM3T",
  "key30": "5oe3WjRQRBJn6V2oDUC6MDZbh8TGPisiE1UibsFF6q8zYwSkm6cigAKoPzKcsGd8X6zupgtt71nV9gR3mwnPHsEs",
  "key31": "3x2prQLx8VucL9BXv52M5SXFQ1RZnz6dD6t39yqj1KuEMBd3GZVJ5qCLsqs7d9ZHyb9GLFo7BHBRegbuZMXRiRa",
  "key32": "yWd7suKnwSd8ZuSftfYQ51vkCcNdm7QAaBVnv6NqezUpxRATHw5hHSGqBWPZd6Pe9saog7SvHa3PRYe4UM3AnK6",
  "key33": "59jn5SH7Jn1foXZNTsfJJa8Ft4JB2wW3JnX3P5KvyY8LA8njSyH5bMFxGoD3mmQMAUuGMPeJz4N4VngEMXq2eEt5",
  "key34": "4VTPyJSyukhdD6d8z6xF7VSqVJt9niXx4R6SG2NepuvmgW4HDU1tuQCKTLozGNyEruEJmJUXcnZy4c3e6FbCUn4N",
  "key35": "4UuUETGbuYjtp78wgtHAyJp9sJ6jX4jmoMkSahQhPmps59mbyQSDNUvmBbVUz2UTng1cZuftfAhRtimm8gBbFSKM",
  "key36": "pFwTzxYi5LzXiPvi217SJKnxBs9sQ9uGwL6d3E9i21pf2Rt28ns5C1qP6VMsYBNiq5rP5sQm8JRKhohBBZ1K76J"
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
