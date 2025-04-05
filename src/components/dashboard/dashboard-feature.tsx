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
    "3yzVKL9dT6BnUHNg7CcFQTFPMc5wLKoRxbiNWux42HjDoZLJi9hgEsZC9XBebJwnGYJqRLL8TN8CTYd9mi3uCU83"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22obfQCoEABNqJwME9Wo4DfWGbYTRKfpZi1wSDHg8WutfwNbejZQUdreh8HRw7zhcLS6tPqdwV1HiYqif6NXkQLw",
  "key1": "n4wAQdXtFJdfA3aivGMBrNvQCKXgMHLW4WQJnPTB77SUdaFVy7RQ1qVYFEV8kzcbFNxD4XWYNFanUnRcM4ea2AK",
  "key2": "2M6fHYiUW2VNxt39afxWmqaEkHgub27c2HYJXH3HJaypX67JmzBn8ZAprcdMTNBkFB9GSnzaQnzf2kmqesTbfR3M",
  "key3": "4ZmFNfzwMX3owa5zZRH2uGXk6HcvkGhfnVyqKLMZs8rLWwdpNfmDSGuj2J8mRhnXyYbuLXenLMC8wBA8gbrEVYcp",
  "key4": "4BbMxVybfgqx1wpJRFnAU163XZUUWnkUHuHaxFqtjdjAq8PHVLXo7LycPFNNYpXbqwE4NDhDnfukrtbbrANaDYXF",
  "key5": "zQjzNPtw7ViawTovoRKzawMLnpK4mprsaDW6TpdjmcZcXHkUQYsPuBU2nCshm34B9z2LQPPWt4Wj8W8CoUBn1m7",
  "key6": "3DDmLxZ6YFz5v3vjGeH67rPzgEcwiUWJJ1V4tAkx2RCT4Bs9gmJHVkDkwQZ4YxaYBxU82m8oXKchaE146YtJ6hf4",
  "key7": "4ADXD5gFFR9ToxPjKCCVEL9fMERqr6sg27k2MorXzg9EyaurfNRni4G1s79vjEKwzRMsKpugFB3V71tpZYmMsBZq",
  "key8": "4DMQbXLbwL7NTmYescS3XoB1asv6FBN5UebqDwhpy1EXgotFEUjREfNx1ESTjH2AFtpw1xNrhZDSuCs9HN9euk6h",
  "key9": "39FkG9JGGvsVJg3h8qn7q18d4yS1cPhSfxhvgpznxxEjNebkrrgipJKnEbXWJ41VSfADoKv6i3JoJAwqzgUAAdMJ",
  "key10": "5qSYsRnoEFpKbAGVUmmxQXtp5gwGPWwLJuWNd4maFYGjfmUDCpxvzLjgEwWWrFpZMcJoYB7ijNnVRjdURkgGC8YN",
  "key11": "4xEnDycwLyxjiCTPbLtKEaksG74PXMDLLbSvN57Acjg5vP4DbMByVjP8SBJKVFbGQxaGTNhK4bCn9FwjCJKiBCLb",
  "key12": "4nsQNd8HBUpXk2SHZEvGNNyKHZtQ6SNj1GQeo1bV66SWfrKPhCYak4FsApVgUAPDiTMeS1A73iWRkh5iJSSDB9Do",
  "key13": "61Ae3rmDhCHoCFQC7gHP4wTC1Cqom77a6hkdvtqxrnVhA6RzVaDSMnk23bdSCsNRPb7pdPjRcevdpbWCoiXhhHFd",
  "key14": "fx3iVj4LYhtE2SRiytG2KLvhxLL5vHg24nyPj17jjTDN2WbV8pXHryEYECDHPtWvXfoJmHdHqoFx2TpRYT4RHjD",
  "key15": "LjhkwveUcEnv766AKqFZHRdoz8HRBs24ZwbSLuXeGefna9pE1VNzbaGtzi1xtC81LLu94zRNFfXWjqsPXuRZgPD",
  "key16": "5XwLobpkNwzFfi3dLcxc3MJsU5BcNFWBF3m3W4okeqRGFf1ABqJfrzAAENHvejWS7gtSXPwKSF6zfaY6QBnJTYT2",
  "key17": "4RYwo8MbZmLWiD8XUcC1PRpmZcUXZBuUStNenX4KdA7WziUoReQNaQvRAVH11fLp1jzyLsS1aBeg3rf7KNTUaHuc",
  "key18": "2T5DwpcbsNNQ7btjvHfaRGuSvPdj5pTZMkBJjshy98AD1qd87nCHV6VMvT43rddcc9V56cc8fj6Py6oG8utByddU",
  "key19": "38hDqSqoknK1JLsvc4eWpLY31phU4ACqR4KALbkRWVbwUBNp93p61Yq5Mcx2WzKxWwQveMsTTRZhAw8KChqNbAgA",
  "key20": "4fXXMYy3Pv4SxoMSEDSug5ui3XPWYquyYgErpBUdhxYNrg4WEJ7nTunW6f7DFHp7NWus6BXdMzqyvikmAq6fnYDg",
  "key21": "2197nUPoBkWd3B1tNRNR33vZByGn1c4SDxDSDd1aXXfK2aMi726B8gv1gfhhPrWBgmtHUWiXjne7cxLoCPCPxxD9",
  "key22": "66eJkpSMWyJdUWMsmEUaiwriq4LvLwucPMV2hmd3CHnHR7nLXhpxkxxQcGobxuBbMbZs53JpYj2gPGsKMvmaMXsm",
  "key23": "2XtDkxM9MgeuBWHCF9FKWGKdBN6gJXqUg6C64sDghgYRfyEkF6xaXcHruVA3hkLviC6wpSWzaLmEY655TLJrnpsE",
  "key24": "eF3HRA3sh8nCse31DpBx948tpfVV8vAX75MusMMaAFGcqSKMcSBK9zcyHUqRJkcgKwKq31CZS6ZKZQ3kw6RBtUZ",
  "key25": "2senfrNqZpHQMbXD5DEkuvs8FUTwCs5VniViVdRBc4hrzZgC169AJjFkk8SdJPXUDCzWWt6CC7UDTGr2o5v3dTEk",
  "key26": "2V6GjgNQwo6sQyDx56A7b2yvNNrNv6VJU3QRbHsi5jFwVeDynfAZr3cLdA6fjWV9B21AjZa8taMqCRNXbuqkDWSW",
  "key27": "j8MR97BSomGFaFgqujiV5VkXYHryTdS5dSkf3VrqjP7wexcWT3Q3Z6H1V4hRQpwbp3down4DnXuxfPu67S6Qh5U"
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
