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
    "5kkw36XAqDHYiWKBZ653oA4BwGLrhoUi3eRKcAwur5ckH677qstRd5Q4T4TxHDkDQrwmMBQKu7zDKHqhuWooX6Zg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65NHVh9PcWBDcJjf4SbDVMUK8XcmiTjasRu8WSyTmbduNUR4Yxmy5uwbL8ThyYFJR4kubyn9VzPBNWbrqX3rPLBG",
  "key1": "3rwZiHprmyEqVjxbr4xtQMttaG1RA8u285btdU6o3fwgrL1ZRikhBwS8svxuoA7PZTXC8TZAHcpZ8T9fvfcjGvrJ",
  "key2": "4hhegK46s5CDJYWFxpAbJet37oSAQ9RYYEgaSr5vsjV1kBCtsyr6ppKSN18sQfbHeSe3MhbA3nPAonVYBGkJwgvp",
  "key3": "3UUSke4c5fuD7Jk72obS4xHTfmenHK1nwiEfqmzDpyAfA3mpTGutBVKu6bwZMiJW8P1KWVX6Dm8miL3sVqa6xfM3",
  "key4": "51uRDEw8n5jdtFVK4p7CF954hFVW8knV7s3KtYdJhr8qfHqkMf378xBW2izTdQkQuhTdXTv2Gt31Xfwz5cV3xJEy",
  "key5": "33tpjABei2XWQBVjYCE3nZPrL6PbDLEJVkqv7kQ2Nmo4ChRWu4Q5CjySwmvCiuXj31wXduuqVPMt5S5zeKgLwAJ3",
  "key6": "2c5sRuGYPH12zNCSVKv2y4TrX1J3kM2DiXj37D2Zo9cdn8cX9j1Fg7kZA5JWUc2zj2AP2cSfX4oAHadKhgzjVd3J",
  "key7": "4Jhaoitui2TqCNSiasciGYjSpZJdEBuf2KeJr2wXK47oVUXypKjbNmYuxL31qaMCK8vHh6kiSRr8rVxEZKpEmASr",
  "key8": "4n17yYGYYLk5noikX59QYSpkCJpbLPj7kF6TSmmRs4RZEZ2nZipwqH7xystGNzewGUEY2c8n1srojEEJNsgE1wpM",
  "key9": "65MZY5LjFkAY9GnbEP3cfG3hqRup2Loh1F14DM5TDPccofmsgD6TSVdqCB2KskygJkXStpYEEo3hAoM1PRGwxXD5",
  "key10": "2LU3Tf8GN6FVxWMwctiN2BMGCnxYGP19HHNf96wvG9tz8HsxZ8YokCgw7jvKT4XpqPnuo2MHbH831SNTjV7ERr8q",
  "key11": "zZzM3eZCMUE9YXwVdeWF9nwc62LpA9d6s78iMrWYq9sQKuPW9mmMXZbY7mdxxYaDyx6LXZMbsya1fEnbyKXxLho",
  "key12": "5mQVNhkswQWJbc1ryNdWzpgmtCMgmqrKPKFerbbkd6fjb1iqieitJqrzji3WcQVL7wK31BVjv42yF4gYqTs3dV4P",
  "key13": "5FSSg5btiXkt196cmfmqN6QNvMCdALG63KAwRRY1p4HtE99WciWQWQ9Yw6b56RxD86AjdKu3bRXYKd4r34v7pV4n",
  "key14": "2gQfoCHZRSTnvj7B5WusegGUti9KbNcUdPpFAfycVGuAjCEC13WpGsssnKVrw45A6BmiHe18mXkj9myRuvgMDSaM",
  "key15": "24Wa2QtqQUzrEQqsmLy2wVEZ4gQkpTszPFtCF7RzwW5bo4fkrqQfj1Wht9zpSfayV1nktUmbhyv6NFWF2PUAKMRE",
  "key16": "3rvWtjPFbNNwuozLcKrvmXhzSgiYx6jVFAuZ6FW1HywT9iQBNsSQZudfURpTQDSKXKxmXurjfvKcCRzUfS7qLJU8",
  "key17": "vKwsHgvVYk7noDBxgvtw5SwYP9trhiU1ZwLRsSu4Rb34bAW97hGVcQnV6UhDhfJyHA6c1owLao4rw6bA6brXzLo",
  "key18": "2nT7XYmQyWmRMkUssrGNu64thCyQUHXhvQquKZPe8VWJY6UXSATjmqcTmd68CBMV78qDWWYy58khRM6AMSrepMK",
  "key19": "2YDfk7zWXj9Yh1gcNTThnYNQBGNmU9Tb9bzVFDjCBcnX124bVPQLNS6fa21BHLhRG4XbFdWGpFPcZ17CC2VMdLVn",
  "key20": "2DFwQV9Qq8858v6t7cqxiRsRH71gamir5ak2Je9jjPMTScxZ3KwC8JmHyHswugbS3gFQqyx4NVuPn4H7ACo2i3mW",
  "key21": "LBdfzAceWmsWexunx6HxeQhyxCJTXDnHGfeh5fMY44bw8wpRW594oQXsUWp4i72DM44CxDHcQt572zZgiJsdNmV",
  "key22": "21ttriTFrtTy9QWZMSTrppsCpwvvuJEvAzgyS3KHCkyg5ov7ixCkqJCYh9D3WCetnwnXmQqKxoVPSTw3fUWCrG3u",
  "key23": "VHDQXkDhSE7oHgYqFvkLHj8dbwhxtyDbW93CKfyVQR9Yp7XQP4cYJqueWbYFrMmLrckhMMrvRXHqdn8awsudi6F",
  "key24": "4WpmJ9KSSnUdHXn5E1a7USCRnPhhkBBwfVHb8ZZbdr2cJtAxthdt1HRKPsKPAJ7W9DgZ1prQER1zRRSVFnaaWCj3",
  "key25": "4CuJTBJWwNGCswpiQFHY3K7qqFWPXsfB9K2HTtjByo1mYuSCkfN1CD9tJXf7Z11uQtMhzKznqLoCrXX6Ud4CUHN1",
  "key26": "24Xe8VBqetGE3vXRy929vZfaET9m9mFEDVoow2eJE29Nipr3xccrB5Ps5c9tvtSgAXB5CPSZaxYMx13WYRNeBQAt",
  "key27": "4BH5rjFxKmEi8MVoNNd4vohBkbPuQeW8pQxUiAy1JtypF6r1ccgZrE7wiW29VRpfpcw1ovg63siPHHRhyYvPMNyM",
  "key28": "sK19SHcLBB74CXZ7rGPitvyzR6N92BMhACVh1uGRD2TmX995VUQvnr63fvWzgy6oSBt4zxZj6DpS3hNqb7FifAQ"
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
