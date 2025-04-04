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
    "23icX4FACPFbBaWpPRk6Bc111b9JXmpkNxB6QkfeEJt9y4xXL2hfienphGQUq3cZX8uDNwGFZNZj5jykASsioecz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VghisNSjTaWqCeyePUCaprkt6pckiiXbFUm3gKtgWH4bUFkDmo4wh1XSsVLTtThsHfMZpNVvTw8sxc4AUKsnmPi",
  "key1": "3iGEAYx8kJ5fxJbkq2r6LBBbKmv8fShoiPNUZ11ztg6bJZn3DQMGMmKvdVxxthmfpTBzJhWoezrHKGQn87ZpJz9H",
  "key2": "5M9QfBpJbf1yqqgFqksHtiYSLJckg2U14LDx1Cr7JycsnM22R5X9CxvVWuuKcAdmdkEeGREB9wyfsXWxYvrEhqB1",
  "key3": "5XZARQdE5nspycMLsgvg9AbCeVS6XYLm9LKLMkJmQ4bQGRRkEjbRqfC2xCz46e29rQ7qMdwkSQpkYtMmYsdVgEcP",
  "key4": "51FjjwJQ7rg8G7xoB6qMzwbDjBJkoeqDhyVNU43PXqKxG9v3Rhx8yaiGYSzv3fmJUAd8bRapse2zP3YsHEA2z3ch",
  "key5": "WBNq7QN9Pz7aDPsK9CS6rM3mYwoE3wKuYwkLGTBj2uBCLfbEMZaao5wf8qXwTRFbFX6BqCx3B5XmE6814LZ48iV",
  "key6": "23myMzSQCqya3NQxLhiEB7Jyf9noAiRg4fuCJwqpUgSZ895JgJtbZxX6RLeF5pHZiANfUvEFnaERQhgPQGsQcAcs",
  "key7": "4JFb2r1cvvhGYz5GzRTvF4rk5fuGAXexaThekG6kZD2Njs1RC1tmWGFjiaAe9q3aVGKq2gBTTqonUSYCstn4eW8G",
  "key8": "2hNCh64qu3AG9fqTfwkjpdancESfQZB4ZrKZGZkDyHCYiLP6nuSa2zxBTYPLewWcX737LAzAE27gCHsCfjk2Uq66",
  "key9": "3usq5zRfWqZfypRBiuoFQ58fLv4rc2RvSU6haUdGev25dqRUprFY828dKSuQGwyKGSMcKLQpDMzm5FEgRWN83yhy",
  "key10": "9psChVBzV4yhtWdRJUnDfNm5cQxjhPsPdEBa12h3hqwFFqbBeqxrk6ZT4yVCZBUEzXwbrM2ksa8SL9QPBYnuqXu",
  "key11": "3LyJAu7AgtmZ7X9u1Kpn4bxfA5p6vvNq9kSPyN7S3pu7uqhAeUmQSWygFmyAJtZPLHqi7Rqj2b8iCnLApARqWLre",
  "key12": "6214LfcvCe3zAVRcuZthcSqkxAb7ZRB7GtwjxeUGpyAaYVwzgiCmw3eNfwTw21kF7N3XXf9b19XB28j49ciRkvD2",
  "key13": "5vXDHHRwauswe5HwuV7eiLvrXB4b22uF4ZpHJczZ6zPzoWbLP4ajLgiKkUsKkttWzRiK2LUyEnm56MdWmAZpHP6s",
  "key14": "4q7ULCJc1XChaJ84VC16BejSejPubV9kfB6PXzSNtGwbGrwvrRigHE1hoKEc8RNnPbsdxKS9ZruPX4aU5nQYQbrA",
  "key15": "16oD8MuyVhttmCEu6f4Hgbp9GhyAPDW569C3CdbXyaHt1zSW1K2E9zwpUYtokGSn4XVojQArYUtgDukDoXCurSy",
  "key16": "xMkYWGLWctmicFFXY4NF9tACLxCHCQD2D3SChkDMy3j44YKQoKd9jRkp9jtKGgr9v68Rw6pjnchgCZYQrjUKz1R",
  "key17": "3KAoSTr8mo69H1e5TrzCRGTpvjSkQpd1J4wA8aoSicW8wV5pixsNLiBS3fWPEeXhiEgrjPsB2uCuoHBheYq62MU9",
  "key18": "4eJ9B6yw6WE7azHSqYHVHwnJHQ3BfLfSaXiSsxYrcaY7nSrNPKcjpLnnHNpZyXRSXZjuCp2teZKfmgQ7GpzMyhyV",
  "key19": "boHUrtU4Vqcs4Yr7i7tWqhp8oJYikUEFMhGZvyF7W7u4BnGUh1ASU36GmLiqCAVXC6oxtfp9d7m6tEEN9Ji6zH2",
  "key20": "28Dhr2fKL2BSHgUpWFUkEWVuFEo7nwrPGNVkQbazLz9hwfyC7PeayZhpvTAjuAR6yzzircMtPWNceefLDeESeHXf",
  "key21": "5iPGCH5cLVxTPAfxwCwTtvAaywvDfnenqFa29AH3btARVZZq2wguw7MH5nsXG8vs5ZmvXT7u2S5SdsbHfruNTEm6",
  "key22": "UJgWfVSDn2KjcbZ28wR7TXMz7rpqzMKtD51qJNHth6zWNZvVnAJ2PWfFpHX16afBN4miruAMJYQMRfWFWUkPMGv",
  "key23": "52tzUKaJQLo7M7pv7TnH8mSRhRZAYGo7oKiRaxThbNn3onUah4PgWhZiLJuqAZ6YHiMA7bjnmUXUsG1zC27qwMyJ",
  "key24": "4XTXiM5oDRD2DsxfZj84ZVv1tYY6fE5RjMfSyVeRHqE3qzPrjiZdmXSjdxkKEagJymMjSbVUQsjiYKVQVEn4VD6j",
  "key25": "48fMkasmYZeYxhQZ8gLPJ92qbhtjGojJytLgyPwqbyhTKxHGcQGQoLfQj4LccQUfRQEvwEXAVrutY5PwmT8dV6W4",
  "key26": "5B3tGD4vymuag3Vj7HV1CRudYgrTL6DTACstKqcf3k6KvgxBWx4wCrtskVR9LmgNddjbpAxnDmAQAsdG2Zed2zmc",
  "key27": "rgYzjQqNqQfrcUNA4ggNjFpaQwiPDdLtMSHid3Yck22q1LqqV66Qo5pYef76uLyyenyvuU92A527N2tw357TSeZ",
  "key28": "2NJhwYFe7BQrJ66vabyzig3RHuZDB2oHam4h4X56YcXpqBEasW1dzAB3akDYZZn7TTb4tgrNzsLCe5BP7qn3YmnE",
  "key29": "38h1iKGMkp6cvrM84NH9A3UfWSJP7LwjzWSu125GUeGBnN22LAshM5EJL1wYwvX7fvC9MnEsKz3oJzKXFWyE8WFM",
  "key30": "3wiV2wJd1biB8BSYjTobJfPUwgc39ECDttBfV228VSni9abBAjraRPCZ63N5T4a6s122deMGyvxQRkhuJArRmz24",
  "key31": "4RHhof8C3kpdGfg3ouKsrp9nNGJQCdnRopBigwSYBuo2a4guro3Pz8zNAMdEgK6VqjMeW2ScxaiXzjmhAKCPFw93",
  "key32": "4hTjKa8u2qhtytevzDsdX7YEdjQcvzJqCHspM6omZK6KywPAFfVUhG941Mi7NiKSgGfrBL5zbphywSX6hzYPBDGm",
  "key33": "F5Vs7ojjHzPDAjLpK2BJWTHeaE5DEWBj4wsL7DGjdArpkzub4yhs5bXmgUR2HwGde8hFhm3c2GWTDdjwrUnQho4",
  "key34": "3ZhfyJgk7urSd9NXt2uTwMizRX86TRUb4n2d3ratY99CqyC6KHmTFSvS1osxy1nqo3hqgPSV9TrufmWLBNmhmSo5",
  "key35": "2bR37mWHmcgFFpUfkqgYpPhpvtDajHDiExR6vegUEkw5FAfLjorwEMvioUCy8GgGgsL43Z6KVCcHcf62fhyhnq4W",
  "key36": "rGYRzb7wXdhgJFG96zLd7F6qsmGx9ATUw4HsKTi7pFsnpMAgkRRYCsUPnRFMLsF7hFpoMDBTHeA3PCpeGrPwgEb",
  "key37": "5ARmf41eXmA2HMcQp1knA3YEdiq1ysJJ7HVfk5yaSdy2XUg9Lo9VvSc5zQfjPpraQyXme3ah9HVYvBn9bCa7RLYa",
  "key38": "4Rabx4g751tkLStDkwbzEthnZHgZ79oBDSqxfuKhZceSTZ8NkGofXDRcoMpfiMfHqHuDBwvbqtAw23m3snmjEAQp"
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
