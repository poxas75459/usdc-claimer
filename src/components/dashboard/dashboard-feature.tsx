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
    "2zXsyBpyjNPvXYgFHv978W3PQc65hL3ZnWNxBtjrpE392G8tCjG7BDgdpxrfmven2TvXt6wJWfYTmZ1fWtEEUpeH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "367NSmvj3Sy5ApgmU7sfTLyXWqbiczfwC35Bffw6JLSWcozCjUVNVFZst5ZkuAs8DAjvspg57PsBiUzixp2buSJN",
  "key1": "3pqJNbBPg2oN5iNXQJBXjqjLVejv4fpgkBFtH6cUCNpfSB3qAS86ZuibCbsQPmMiTzGG1ZXGHu1CgNnMDBcUyYAJ",
  "key2": "3YSug4sXKZnHsjZsmVJas4TwN8YUmYnZNZNjyDNrp9MDdRBeQK3mYcJtuwu5pDL1Pw1bsd9NUVWvtuVALeLZsnZj",
  "key3": "2VvedrsqNuCBdZjYWLtYKSKNXeUSvcThV21DKepj222KimGPnZ729xaquAaxqTYxXZXpa8bN4rGqHDMQbnKRzMgX",
  "key4": "4yjZ3x7i552mGHzWYudiGBQHubRqPWpMEooTrz3YCfQL29pd3M4a8g2uas921c9W3e5nHAaaEvmjPNZeCadxsYQS",
  "key5": "5VaQ9wPEojL1pQPgewzF12c9otUn35683L22rpQy3RZjB16U23A8jhSJH5PtYefLThUvmAa4jWhwJ94DhbLHa2WQ",
  "key6": "3nrDae1zApWx9AYed7S5cTfVmqqRzki1Ubt3DpqYWAe879XmJ7ffWV1EvyMJbwYYZHTbbavk8JfS5D1wAd1S1PdH",
  "key7": "9Rh6mMJA8ChMzwD3FujuD7VK98yMM6CiuJwf7m7SFreWrT8GHKgrh6BczYb45nt3CSu2fnqvqjfqaManUwydknX",
  "key8": "3Dj7vHDS8HdWTpsUXdCkYhjU96Zv7Q6RUVYqwcP2NfHXFo1MxV7krRYLrtX7kqu4xd8BLsbkmihtywtiFKYboRPU",
  "key9": "2B2cFsY6TRG35TcqAwbKQHqwSMbKiUyJaNUNnZXcJZaFDSGLTtQZCqLmSD9K8wKqTmvQDkKXUoVk8avGypQzJ7LM",
  "key10": "2LP6DhVb8HG1RMju5qa7GLDMcyGDnEqLZkrXmFSU4rJ1saA37Rno4kjJ6ni9QqKmcXEZ6fm7uPUW9srV5mVidtym",
  "key11": "DvPGUDPnxHA5fc8BmCqth2NBN4dK6XVAkzbgJoFjP3w1uFJEfXMqd1TjVGGNhVDfBqTb7wsREEsCrZ39vPmh4tp",
  "key12": "5zf6SCbsf2VuooqdNSCQcVgHdnDet1yRQ4vmTBB4vRgN2coYS3Q48AwfYmEWERDP5UwChHqmTtvT4Lk3GoXpMcTN",
  "key13": "5PSbwtPDEvcDWGdUiH7KCAswqm8gNZAp3kq9jFXW9Y8U4SPdh5LeJJjjJDVGEVPTu5ck5dt4dMFnDzvzUY4AABXm",
  "key14": "32yqJ7Vr8rrEaZeknSkxzYJXFcCL8Y6fSgaW3XyBMH22jG89ZgS5HLKLrXYkdvddc5meiiLe1G1oNmJ67WxyTAhi",
  "key15": "5M6Hwe8TVzw617cc9WEqVgnJZK6Zm4oBfhT8gUABTsv2RpJ36MisFRN1W5EWq4wSwpztUzRQnFo1SQyYgydnkA94",
  "key16": "mzywa6REAZ32FkpTXNYTovnuWm15jN7QT8zZ3wC1HyU98Qd7ZMjXZpfkykX3G3enao2ZRpCXrBTsLAjHvzxM5cK",
  "key17": "4L5uM8jvAsqPA9uKGYAAqp99njpV55qVhXndy9ekzoSfZ9d34dkRzQT3VXkiXkjJHfGkEFV4casbNPzcuU3DmiiV",
  "key18": "4giwGxNs2fJFksqGZ52qGYTPcm7dn5Ej86AgHaVpGEuhPXvKtJNEeYz2gtSszdvnSjhf39P82sgSNUKCQaZAcHEN",
  "key19": "59NVfRzDKFGmsPFy3NrbCG3hwzEkAczgsHLJ5WSXstquu4XZ5zdMwBwwncXZe7MeJQs6NbQN1hu3A8B3FaPeNuCn",
  "key20": "5ZnDy1jG2s7EYix28mwxHPXL5dH1nuvyaR8ryoA5nrWD5hAxqbBnC5HEsW5MUsNTVzkfoZF29xrk6hCpyXdx5dYb",
  "key21": "22Waqhpau88d83ffQFZoBEeQQ8wJHPoffnC86Mep3KhPXc11tiHUVFWpBKRDNcVZJCL5itoi3bVfHnCV5bRmSGGg",
  "key22": "2xmoX7trYtNtNuP35mXd9h6MVWzxyLP88MrNFJWh2WBqgKchFED4jAtXdpy5WgrHkvvwUVcF666Zc8VD9mkjg5Ai",
  "key23": "Vp7RCDbVZ2u1B5LKqrqfd1v8mG788kVX2WPRH8MsRLL7pfaJkc8jbFh6z2wKbDvcFB11vm6JRm7o3nYatVCZApP",
  "key24": "5RrKg8GTofuKquQjQadEpa2mMCn4EAGd7kxR8FfCQUXMj6AxSWooRTbMbT2boGsHS6T4J1fpW2jjVttn1FbEdoLh",
  "key25": "3WqFVyirkGJbE6wcQihPMnrxtwAzUV2f9QVw4b6UwXLG8vbRg7AX8FKxdsyx9TTgRnUiJ3epr8aBMboFrQLv2vfo",
  "key26": "2gZcyhb1rKCm5kHPzzgbn48QwzvUfoEH4EtabtbUhcwiaSyxv754CN5N7ykaQ7Ww9nnXY3hiCxrXBKy7n3YC3jdW",
  "key27": "5BuAEtwQU6w8r3QY1oZ18ATTCRGGcU4aV8f23CWFmw67QVdU3JwZZtpZg6L1eip8hXRC89qu6AwxMCDgCzN8oiBH",
  "key28": "3zXFeJS2CMLFwDxm9NRQz3VwJYsrMe6FKF6YxuwSDLEpvT4A1J3Ekw33f44hkdEQ1Pudg1VcetWBgd9Qu2Nxcnn6",
  "key29": "55V966oX9AnRp5EngzJ8mLvYvMPYQmS7JGj8o9Sd175GfMfHtWrKYBK2LsEsot1vwWq6XuS1XaJ5ZkLV7AkXpjRk",
  "key30": "4epnbRsbHrHrh7fLRH7PLSkesuGw329VS5ko4VAeNjFHYJoB6WxCSamHubg4hEXqyeLWrFwZf2bWx3fvxK3FruUC",
  "key31": "45qiU6NkKYWFJMdBfQR8pwNYLMCFLJ4ygHWexjUdWkXXXJGXGcEzsofB5qqHk5zxmnsMMV27Fv122sPZaQaMWf9F",
  "key32": "JKPmm1qjgkTeSWf4W2t5Etppv6pqzZHFaxEgJu2ML7T8jepmos9GhiobtAhZmWnuELxVaStg3sW9ecokY7GhA3L",
  "key33": "4CUzEY7bn3SyGPsGVcDMN6q2XZkSAbdLdda7XT1ijExmnpceT9gJXdww8tcv2u57YWUkm8DX654CU6YsGGjHtDFg"
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
