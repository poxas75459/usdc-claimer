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
    "5mbMRxyj4JkH4jWAVx3ZZMqt7T3PjLJoSriwTm21EUp7f2zxk6T8VW3LnySyZkUkdbtyBGiuxbRo1PSsQcuJPA81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j2iyLmzifWgdd7xND1tH3SsuFck4Vay6P3xX9Z2G6YuyhDqzcL6VEsM34xXanibYgEPP5Pf5GqhCX1BoXwNyDim",
  "key1": "2cjkAACqHBnJactLrkSFo9rrER3aZAagr9w9eSFUFf9GG3qEQ95mM6PRzf3tsQscFNrKcUSue1MsSbhpHf1JQYt5",
  "key2": "4TPqcvDaZbytzW9pKr6iauUuKVr5BhcvK9KsrtUAEU55ecijds6JYnUuuGjTmpqFFwji4D1BhF4516vZta3XZrj6",
  "key3": "3r8JsZ4P9Bkup7gxA2Si39vkuUAkP6dBUD8s9xnYRA1ehxNZFJ1tVUhb4FzhrgKW99mqqhAo5EiAfWN9pPEpktdu",
  "key4": "3331DDCrSGW91V5LyEhUDmZcBtUqTKmcJgFWd3pkZJJj8r9d2T8jYQgZNfcE1JX4RNDmJmcDm2gZeDnKwvV2ekqs",
  "key5": "LjScTk1GpnsePHYh8XGzWXTXACmK5EVh9YbD2i2ChYTMYg6hrWjBbBCkf6jiegHUpBKjjv6pNWZQ84rfSfzCqkZ",
  "key6": "5BKAg7P1YiAAfWKLDQN5Ev4nwWyM82SCHmErw9aaR2ZyDAHGE6hGafvYPNNSNPyQKz9URMZV3M5V3pATcn4Uif72",
  "key7": "4meDbWza2mjkLfGPKQe1e4SnL3Z5t4rieP5vbp1JXYiWMcUZ3HtqUXAkH2yccbtjfqanWRrvANKYMrdQotpGWNRr",
  "key8": "65zKnkdLfbNYyKZUt6qbZ1FX3YAjGJt52wLpQQc1smmbdEPgjpYSvYsG6vvoutuyKGdEzzsnHpJ2YBLe1PxLzFG1",
  "key9": "49pXDWY3j1LPGyaaw8Q1a4CaXgQXAY9x2gvsd4HVJokrGiRUnDbPWYq2vYojpQUmQh6d9386dryuX6RfszQidAw6",
  "key10": "2tgkzPdZ8qm8Pda2vZerNWn1jfRqXMChGRSBXpXmR1gYSE4CECPujgjFjXEiRRWAsFVynVXnApEaxcUAjx1ZHuWV",
  "key11": "2v5B6YXv4XYBz6HjN8J3vxkR2TS46Fgnok4tsqXYMAUto3KicLWWSe9VT2vEWhSfy5Ciqi6PfKqxSr3G7r4FtAj9",
  "key12": "56dW15K353NKY7AJGNNdfwkJx3cqMm9DWRQn1LB5Ddbdi7gXdYXvDsThnQZasHni6VSa9kYdUJAtq8e9hQQp2xiw",
  "key13": "4CKEVKyBbFfqn5GARdzQdwHtfhuAwYiMyuCyZXdQx4ffzYxRaQADhe4WguhLb1b1RHG81SS8Be7G5CEKCwUFEwo6",
  "key14": "4EoyRjhUNL6U7uiEzAZG99iFJpPnMwZUyeiuqyrTsjszFvccPwHG9xw3yD14JyWcPgBuBgSc9yAJXGGWr5GrGSDM",
  "key15": "4sWqn5z2f586DG9mhUpNWwQj1kmaHRtnFDghJpqmpceQH3Sc3xYA8w3hkvhAKVtfVYkQ1GbqoK67tgjqoyydGRd4",
  "key16": "5ZJVd7Hei2GXmhfSeDtDsM7Fe8yDYPsTUDF5jnxT5C5yxq7oE7afKMd79HhoCjsW5xmSCeXEHsh4TNTP8yphBq5e",
  "key17": "cgi4x6Vn4GoYvkMmgvwqaTZzU6oBF2ZZfyjuG7VCLn386EV295wcDsNwXznai4ZUZ8yX3UbfFgd5swZq5iJGyK8",
  "key18": "58Ywgw2uerQSG1MoNLmyBTakzWDuB3xndM2rGJCjKv4DviKN2QaxJDhqbG6fQfKMpbVKWNV8q6HJ9YsTHrhH1umG",
  "key19": "2oN9RHjmx65E88xruvN4YKdP6hcmi8tM8fjva58KG43pyW7rEqa95N1Q5NbFTVaWHUuZzJP9CpUhzoMr3ZNRQYHD",
  "key20": "2d5rZPiBuUbWgmKsJRcjsb2rbiUGP2JQqQyJLAjwtCw7GvhKEGjqouvkVUsULESCJpy38Gd65uPryabH91eZjo2w",
  "key21": "azmyRmLExSUgkZuTgAsvUgXG2EM92XHgAjsvjMeNECgaWnd7zx1rKYpvgSr769X4GTKSNFcF8ZhCrkAaRyjze5r",
  "key22": "25FGYt6RYafmeFXL6LszsGVLL7i9Yocv6wrRsHxrdJXLKRkKrNzhfV35aYmiYYjw65JChDRfXJQw66NcjyrXRbqD",
  "key23": "4R2WREoJtzVRPZ7QeW1xe6jkJQmnmUMexRzRCgtQ5ErGQVaKdEtDMwRQfPV4rYuoknGnCdLpDGtqkMdV2mSFjYoi",
  "key24": "4WrbfrT9x2AdNtZ5uPC2TL7QQrTKvoXg3freg6rjCbpF1w2qRKcJmJ7AjKqDf6NNurXnN38cyBQ8YJ7LyxrjNPRJ",
  "key25": "5vcqosu3AaCGZYsxX6ELCjLwvrk3jy27py23WNSFuS5J5kp7N1nv4NPNaGvdwPHtePwYj8cFHFFh5LiACLrVaT3D",
  "key26": "3AKSAe2Xgqmi4Ypn9KV7HZ9UW1DsycRRJUmKQ76NfQ246n7GHjeUi9JR6xwvQcRzySnK5N4kGX8UXPsEe3L1wjrk",
  "key27": "V7SjtxPrnnUYxN749Wxx9YCaU4enq21KZL9E1WW4z153VZh6u9gTWqhncD5RgvMpgMEqVCzWGub6iU2ku8Wcpjg",
  "key28": "tRNX83PtLXK6qeiJWrZCw7tctQwg7rKtvQ7FWyPNwbymzXNYTzrdfSS1oFLajrFWkvyyma1XtrYqZQgy6SmPXnc",
  "key29": "5F766a6FUeJuEGaPreN4CXgUieaLAhmkkWKKV6GySkbebW91nGSC4j7czYqTETc6QT9tcjmyYudjJKeNXCtpfoRq",
  "key30": "63NwhZgZer72jp2kbXnUMFB6Xn4StcGG4WVkVa4QXyVLxA33oJ8k2XNtAYmetvPdZMxXEXaph3iQJ96o6EMasECh",
  "key31": "2oHFcfgaaGTaFW7nDxd7V1kcbTbMR2T47paum77eYttjFa7pkKpLUdEoXmbDnv6NCApvNEmHZwxRyjDVZ3bq53Mm",
  "key32": "2teXuD2XUL8R8eE5gBv1Udd5L6FheBF81BP28gDAb61DFY1yCAnUh6tJVJT4gzpkpWjDK8TgZL5d9FvAhu1itM55",
  "key33": "2rVNfZBP2ch3pgDEJGzHqgqNkg4T86QBDc7JFMEWYxrEniavPeASZcoRBdcdaPsBJT4VnBEG2zkDrFnnBHfFXKWY",
  "key34": "63nsRvemRnZragtz325bJDGmasTqzbBHEkoEhtvFSHfSiUAeLUEMgQmeEDo8z3e9QH2sYQE2ZPErN4n6x8zgZVni",
  "key35": "5zWdXzimwXFh5guyJqASSPLbGJboBicCJ9vwWrfadMq5vGX7ABuRqwJw763mD9rKbTKrX47PJjao3EtLoDeF85vn",
  "key36": "aE14AQ4nAaE13Ga5bWdTFyUrCdc7u5ZPgi2iDXdEFHYSVuAs9vmJZLMX3Q9kes5XbW4mng5obpym6QTLZrdL8td",
  "key37": "4q9vZ78u6faTnqYeAmE5RymaycpE3YaTQGRqKcoaTE3UHWJhMvRLrVSnLw43YMtNvs7X66DLyZBjE6C8qEj36QBd",
  "key38": "PHEVTgWqPvHhQTkBghNq9cekamhSWCc61oCHvr8BkNNYrraFRx8KCT6DpoTH4n3UyoXyC727h9pBZraSv95vAmh",
  "key39": "3epPM8sZVBoq92i7L1hJ6veHWGEkzN2wEM4bm8DHNah9WXKvB7nC5Ud3aaGrApFeZKJKCkqwEN2JNevPNa5569S1",
  "key40": "54Y3tAQWc63WjdoKxXfDmBamvUc8ZbvphZwhzp6fUbhjWcD46JJjCZ3Xc2HsczvVLw7GqNy3ambGApeL3MtCixkE",
  "key41": "3bCK8yBjV8vbLzXj6x3LSzUPRwUmspQv1Y6cMTb7BKUp2fKwKpjxaoSSZiM2SaD6XGsaYUYshjoCr9u2X33S5sGV",
  "key42": "mT7SAjcBK9ZSuAV5Pb3opVXMwvDJJs7c6LzLaXdwF1pmtSMSGyMsWKXV6b8ceApNrz3MRRRPmeV9egEe5t3SVnJ",
  "key43": "38WUGLQctmWvCeSJHAUFC45U86aiuYrDsixzLdrazZxaX2yrUTDacYmhbNmNtxw6uMJXJF926GXFRzbcMKXMHdac",
  "key44": "4mVqLA9ZCpLorWeAHBRzHuSJYvpCGy1zBEwBiWqhJihHseVeX81Q5JFHB81Rjegqp9gERx62Cv5BPtDFsYbMrwNa",
  "key45": "4TrhZFofLQ3zVJgrcxcLPNCPFXLJYf7KSbpD9avp583jXT2Vz6VF7xYZozoCrQqUbwe23Q1YEDK5fXSaNr8Qtt4L",
  "key46": "3nGdD52MFUdYRGgDo6wucSEyFP2fQBpTBzc3GQWcrPCJ6Nyb1XAio2aqG7ymBsnzBE7Whn63G7igCZaaXJkBVzTo",
  "key47": "5A9Et3ibW75osGUGe5Y9MFrrZP1QhGXjCvGEPC9RBXRXqHVfGLWPVRYtmaMf8LMHKiKEdhZ3oHXc2PLwdp416Q34",
  "key48": "65Mo4tNKU8DmssF3gr4XjTpYiP9egqHzhY13Q8b5H6PdsbwsDbuZM4msXkoTK8cHxsxtjQBN4SjeCEPhFBFBt1yq"
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
