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
    "4rGxSsBeHQU6ukvrPybBF1incfNd8A4xzQ9PnzUBJrJp1kPPK56aNaCUv4XzRx71AFFVqjja1CM3e9tKFcfN62JE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j2VqYyqUzeZr2YmrKXhQhEW8JWTRCAtww8EfmpchK8Z5xkkqN7n7nq57WGcq9QCoWiqCWsnB3ri44pnLTWaw1Gr",
  "key1": "3ihdmHVSZDYGREKZoxhou4QV6K93nw8eEqyzHakKEdmQ5ww7zfk9WWLtFz3Y4HKiz2TyfUPAxNQzGLyTHnaRiU76",
  "key2": "2szNLH5EpLYizMvDAz46Wgt7hjkm7shdvPE74Cu6iKz3kceju2RsnghGnsS3tc6XF8TwiNj115JQShAgN67QYYpw",
  "key3": "56wA3jfbtwxhnuLfjESV4HTpy3pud6aanyEdcgJ1PDJYYTLcs8smeHnNqHsRAuEDLiiJ2JBzLrrYRca7vRdnmEtQ",
  "key4": "4w3GaHm3WX59mpcDMMUw7VcrFehLuJDdhgAZYttzBq8DwnNg4mD4JeoTQe6wwsAdqxz2rkHouAnUGL8HsLpEEXDR",
  "key5": "3CrFfZbjvY135V8mLvEEq3Df7Wqm8qxHcMgUSHWNieVmyWtmbLDbWe6L7g2Kkop2YcvncrYJXXbr6aMJFkGn5FCr",
  "key6": "tkhy75ehFAFu17arMzdZ6SU5Jg9N8RFNuedVcZeqNpwabpoM7SWCxYqTXnW6UNL8Qvb3aibzpmwW7uBzgVVJogt",
  "key7": "123teVWNZ8CiSdNL1Z7rTCLWf6vevPDLoDnJbfiaR83yCaYxRGhjpRA8WB4bf5fVEXYj1FTwiwZ7fQ26HLN5Gv9z",
  "key8": "4p4ew5cU5D2Gi3EARbzTXJZZzTiEMTuFp7gXfWWQGHFANx3GE5VaJxfhsFvGyxajncPfNR7v3U7Rguhd17vp6iPk",
  "key9": "2iiJ7nNmpNibHMoMBzXJ8cxxG8dM2jPtKXLDBGKZhsCmrTcZjBmYXo6rqrco8Y5K1My1QEijeKVuxsg6TzUUkdHL",
  "key10": "3uNTryw1Z1ybfsg3HVgdQisjoSM1UG9zq7Vo3oAuqZrvQ3JmTo3VQiKQxwkPXPtFP1FiSEknBou8gNUnhws6773V",
  "key11": "2pqkkjaBTEKQB2gKzy355Frijgj7pGdCePU2LK5FURD7ttJ95A6xycYbGRHeHeoPiD5xQM7Kj3UqkSq39QCnrmdP",
  "key12": "5cDXUMTVN61fMcJQrCEs3t7JhomU6eGzmuW2bGWPk57FHd7q3m7u8daL9bhCVzSGNPCqEmbZEkwhT8WGKSfYxx5V",
  "key13": "4K5URH4PfLynBnrj9K4JLpsmaj66YMuBycWYxQmoaGSf3hGtv7WBRiG35VyCzcoQpXCiMXuGXmJ2B1RsfZJBCTFG",
  "key14": "5p5YcbNgvyyXtrqfSGjkmzuXZ9z1MnhMyBBmUP1XfS3pfERhiRFFDNXw8yrK7Qzufn6opKLa3L1qTBvZB1QtLdky",
  "key15": "4LHFGsioShPETKxsBT6tZasR4ETYcNqKdGgHAjUFHjLbzmE2GgCVpLrGNSpaRe3u1rz3Y9jWftVkfcnvdyp2seCa",
  "key16": "R7czBYKxMyBQR5bauXgp3Nu6wZpo5voKRh4qDVocgYPtRYhkJnBizWGsagQEuM4bQu5EnANwEeGeSH9HUWE7zMS",
  "key17": "22yVnaFRHAvrXQGzw5gk5nCx8iFDPaD7ULYqzdGJrcdHbbLGhbbXTpgMXBXuE2ELSEeEddF7BtzxNtCUuPYWiWYk",
  "key18": "Kuk5yoCbwB4BLvooaj5eho6vofiVdJmkS1N6sDB1VBiJDUShSbKBDJudN5mbfi9BXMURzFHyFVSu824sLRUKNs6",
  "key19": "2rGXMaApPT94wpv3ZatstRJpeJswpgMQW59Yhc3JL4jXXVQyrj8MWwAjxy29BZjV9FnZmdMjoUvuCjH94jVjFLGC",
  "key20": "RvguoH5m9ZaEySeWL5K89G6FmpTu9NcWUYpDkZMykDoUmQnZCNGfyrS4hDdkimfZRqKFZLhwoBxTruNZJgohRtU",
  "key21": "B4eVU1UceqLtA4ywwrxwVFL3i1Z4LvCMhHkUSCEvjuBPDUdSypTkSHZKywaGPP2ZaTZMxcw8V9GmbLEwT7gJhMn",
  "key22": "65jTb9uLoS4ne4eeZEtVm97NXRxQuLWFLb6jqGPKYXUgc6BwgxWLWwfGwUsadpWQaCAo4jFmPMbNB98CCvrWoDxx",
  "key23": "CGAqpj7NffQT65atiAbQoZzEp7tN9sDDTkmBPfRQkvWU5ZLbNxG7ZUu7G9rrrNRWYzqLXXWi4MeTV8Yy8wBm7q7",
  "key24": "5bEpmxkj26oJfUTJMYRhXvuQb1DCaW7ckufGVPpHMHppghPN2sAmXKEcdWgbGmYcYpmYpHyFs3uKK92KUB2XakS8",
  "key25": "5GEcEC3RRRmRzGLLk8Wj4C6Ev1Am3rvzXVK7eTmuQwBqgr4eJrunWFDNRgpD5mpTvz8AMFeNA8kFHEUbkSDhc8na",
  "key26": "3VkYrWk4e1hy6NjjnpkRcWcy1t5dcJpTLeEB76CtRUKSJBv4xSsu6h7jZtL6Qoh7ECbfeUbJJmct8j3YXj75AKDs",
  "key27": "3oRfb4dbaADGiGs26f3wBpkJSheDAEUngm3aXrNAwsZ2Kf3YzAdDo2fH6PyyL9Zy4J2hEYr8dAAHTavXnFqCZqAT",
  "key28": "5SbydgV5gpDbf2NSpkR4LbYxf9WAtKc4RuqatDVHvWyJmVXNYeCUQzt3PKwSun6z1PoNjAZVdqb56Q4q8AcBbwoX",
  "key29": "4Pf91WwdBpLDon4Xspx6oXaMn8qN3zNBVnje9ig2F4jH6EJC9ki6fKVMRixWNxqkfyYLFEvPm2qYTGQKKQnD5V7f",
  "key30": "3vAMaD5XYLexbajwGEoodS33Zzrc9hRGC7CuDEQA2yqLqUiv6eFfmBvkwdw7ezGXw3wVDN8J5iaWy1EExsjJnhPD",
  "key31": "M4GYMKaG2cxEEM1ivijm9xBHV3rJzSmzGsLiiGnFQNktF9WK97WAKdfKEHJPzBAEK2pTHVJT8bypGEoT24AGfjC",
  "key32": "22aatGwFMhSxTApntdiqvuTmJBwYTpo3Jx9a1pM4bi1XDSckshXMgkiLwfgsUXWjSJc8qURo3wQzvr39yXa299Dm",
  "key33": "5xprdoRmfzbitsxyRpBpE3FF5CfUr3XkwuHpT9u71CES3zVf8CFHstcazMXuR5EHR7mLZfyiJ8YDK7uXiX54nPxc",
  "key34": "2nByKE92hG8wTBVLjS7shjJRWKK7eqbnAbYWSpSaTYReVnFBR6QCAiYAU1Ax5VY9kP86i6byjyoPZWX9KNq2nmaN",
  "key35": "5AeYynR2eYaWUo1rGPUqeeCvknU7evxC4UmVNVoqkgoF2kidk6uNbqnd4NpeXXmf3dRnsqQ8aD2L4ErcNsCya3ts"
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
