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
    "2X1bSnSUcYZJ4tVsAjKhJfcPcEJVyqQQabMqQwdeDVRgq8JsaQNXGEoW4WAtXMcuyn8YgVUeFh4hGjQpLbPTqsXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rKB765sQtZjVtkiuracUeZbUkNZnhRcA6BNtVzwkNJ8RxMNXNA4nc28G23JDrpBqRdSUKemW6uhFmVF6DwihSmE",
  "key1": "2vmVTGQQdpyyrmZmqqNSDTDeYjwYVNhXyku2iJA4q9ehg3vbRNScZ2jbfc315cgf1bpFhdtqhHsaacgStugFzrhb",
  "key2": "gDcx9tp7D5cXuNTYtiGb4HC8tujvrvRQLWGTNnefmtrVpnjNR3MP1VrguYCcqwo47LPxJMfQw36weMQ2vkSzmLe",
  "key3": "5CPWt6FrX48RZmBavTQpEJoj9MmbWG9Ps8X6NcqnjLkYZKEDmqJpEKxe4pmmianE7eodVfRhuGCCQnE7rsWJpZXF",
  "key4": "5Xj4CHu3MWesunRBx44hnKybseSSvRytAEg6i5dSux6xg1esUGnPiVfT5ZTxQBtaSsN67fnP4ZbJtKU2PWMLkwNi",
  "key5": "5MptdCzQxmgJwzDV5DdxyyjzeMKf7kpYhoit3kFvqJW6kxHAXEHWeUrkFhrKNj12dnSUpanJnfU1XCTWdqSpjA2N",
  "key6": "49hQarZz19NWZkELkSAwSBn2r9v3V7vKirRe59sCbcHMNNcgxfX3dnFHYvsdjbyERwRB9TCgNJqUei19dwzHcC22",
  "key7": "3cdefSKB2JwYomhdEmQu6oLfkzhEjn5vYTMD2NAZUAjKHeJiU6rusKrMCBe9ZTgfN3VoJcpCbzzmtmdH2eSPyccM",
  "key8": "5QMrM9otsnd3UfsMLcJkfqbLXBvdWiMx8oy7rZvW1pECBAotKvkJxo6usDcvqvbjdz6EqR3FeapP7bN6gczArFLg",
  "key9": "41vW3JTvq6RdzYd3W1v9nQ5c77KiBRDSRSYGWfXT6FsGVoGQr2amZnKSrbG95sY46ktqC9RJU5LMf6ZzsnCYDQS",
  "key10": "3eX2T2RDKESLq5dPcJvAoJvP9go9TdVUSSssxBzpPjhg8bhZdf54KwY2jUMEGfjwCXzDM6TEfisLgWT83MTUY4Wv",
  "key11": "4UAML6fr7R2CVjrtoeQy88T46cnE3GDfPnpAnJCaR7Vmw5qp1eubzsWZ25Sdw3MFez2Mq4JG7KzRUi6yMPw6Sncr",
  "key12": "4wyqSRRmetKBKCfCPLF7UKxZx4LKtQjpnR4wPhbz2ZTZhCkyFjjEgT5v7EZXhVx11Dd7SomLg56CxvEW8bucutbw",
  "key13": "5rfC1eAAj6rZpoPGEuDz4qmLqfB8F9nso65vXmX5EpHKDh9Lp3V1RQqEA4XxfT8RfGNXxBJ7erPJ5eqKheg3fwpy",
  "key14": "kRSCVVrori8b7Uxo81SktkgL9611qNq53TjcE6ska836QV8WpWFsoRtyqBFBAbatUEJs2Lt4out5ffBu3VPz62d",
  "key15": "4r2AFcvBZ9TNaffKBLu71ajUJh2UA9o573TuYauaxPRdTknDc3j34kUzEF9QoHYHteXrNqLW5hrFvSZpUeKLY64V",
  "key16": "4eghMHXujGqpxXA9DuVDg47ed9XQJ46wp28tzio7BdrJkXiYxumkM1QnVuA1XrEBs3XYUW6YSD8SMMXixn84rmVV",
  "key17": "4vnDo5SMjSrqYq3L3sQ6mx4qePYKwE2RNGPhgdoqojXtxPucqg2RLouympuUC41LTiVy69wVq8Gqazoyd6G4cjqc",
  "key18": "26y9riu7JncSYoecQ6mok8m1p6kpu4SQ8YNt13K3PYLfp86KYfax63L6VnfxnzxgQoeF5A2jVkBbxUJyS4wXkaZg",
  "key19": "3FENAmJ3utJsnwrPW3humyC3WMzqHX597gD39Pm5EpMMVr2bX1b8GSXxpNcqSg4zvsAqhiVmVvaSfDyaC4eDKrzr",
  "key20": "3o5bRe1eSqb5x59ubPbDX4QSXtwYDyqm7hKv4bzN3Wm5QEph5u1J8P75v6wcXqgrNN3XuY94kmgKzUSLjgatbBsc",
  "key21": "66ZRegYcaWxEZLTRycaBENo7cdSR5GjJB7Kc6UjhZ1X3dbMiQa77XeCHEhC4JkMmYFVGAypcJcpv3T39eiC5f5TQ",
  "key22": "UJrYNmY9RMDs6fcjHxoievWbKFjrMDJPu7MvGwxHxTzZnMayCVyUB46YiLvN8oHqyi6gbEK4Zcq9qfKXHettbdz",
  "key23": "2er4SDKWqJ3BjSkPXJUP4fSv6hPwa8uzmcWEf7BJMJ7zGMx1Yn7CBYk7VxMVZWe1pboTcj9eJHvTTZFisxeyshfb",
  "key24": "WCtSscbiy4ABRZr3YbCam8enEyMP5nW4Pfs7AqbRdFBkNrnpUWYPGubmsH351jNx9mmxXAmvr2BzfnAZYPVM2bK",
  "key25": "5TvfXZqtCpRjCPXmcB2N2DKGwQrgRkYH1XboCVkKAvoU58vC7FuknfUpwfUnoTmLAQoRZzkECLTsYYvqVAepm2ah",
  "key26": "5evTAN3Lm3funxfhY1qFnmLKWXrFYtT6Ri21th837qHASVL3QjTFEHhdzCbctCBcwXMKhYy6TbSrAHuXkvTsgLoy",
  "key27": "4Z9yE9MhTyyiWy7821JRpYQh1GbxaC1djoCHxxvGeudaNzkCq5HwhKio1yfeTR2ZkHARpdKMmXCqXNokabEpvyMo",
  "key28": "39EmvXx6yHVERhotFSsDZs232fwV86V2Rm7L9QXjiDi52sexy3wkB7HvtXBn3BCXYPsTQVdVKNHqFLgi7dJguh3s",
  "key29": "3m92GPkTcW1iC9MXZea3o6mPvnq4PCWrb7JAK6CxEXrCWr4vMqsnxXdFK7ziKgPhXNoDGxtwguStEhE9RiziB9A5",
  "key30": "3ufE1PShkpiBvvFDpmsmvdeVgGigRCsZtrsW37zweaMug74saY6jKyVdhZp6tGhCdRrMb34YNHCwgR5ffJvjhZiz",
  "key31": "2a56ZEtcooM91uKYi8iomCeZYuC9Mt5ZoBNhNBNLNEmuySP4pw8jj6WYdvVZyyLHxXyaprLXAg1db69jGhK8NtgG",
  "key32": "5SgQUKdk2Xc1B8bMWfoBZ6HGG3nF17G9FUHyuYrDeS5HkjtmM27vE6abA5CPX7NM6QziwwSRoaxc8f7Zx8z6ySiC",
  "key33": "EhepUH4Q36XAyjSHudq9aPyyqEuPHsY33TiprHj8VebeSPNwFCsZ5MvEWTcoetRCttPKXRcsJRH51ZukvgECFLX",
  "key34": "2u9ZrmSYr2aT5LzzxPMBwJNTwbCcouGHf7k48zQUrsJhB2VFqS8cRQHdAMivnRvcbTMEB84tpDn7iRwTZp9fsj3A",
  "key35": "Mc9wHz77KQbfz9QMc1x2Fz349GPmV1uQakhEMjDzxPCkhUvxrGUThJzVo6WFBR5YamoCoAbmHUc1w8W2j5kRmTU"
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
