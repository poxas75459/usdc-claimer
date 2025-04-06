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
    "1MUZWmtRcvudpkjrPmoQMrqqWD1GzhL4efFEQVnsmBTNqjTMu6eAY27PzXzWVfrx5Jto3oD28dnUVg8PLqPWuZj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uua8LviiKn6ucMH2LKnAozmnLqk7bHgEJTLvduu3qfDBXbiTMHV8fx4RHaucJifA4QQKmiRyVu834CQmTWjJVGZ",
  "key1": "5KYhpFMso353Ck8v8S94tjnWJRiEschwCkBMRy4KDixroW2Qxbkza926Wi4U71kq9JkgX16jqzQP54MYZVm8fk7E",
  "key2": "W3DCPLPksbnMdAb9MRA6bfEQ2Zv7EZv4wgb7VzGQUaaX2N2LR2mzvTZbGr3wxcwyMUiBQrmHbs7R9xkudMZYmAW",
  "key3": "2c6gxphcvtVBb3cFDoXVBuPPy8njExnw8LwSn3PgoCaXKe2dddKz7S27MJoDSbNNnsxV6DWei21pdNmSzv8jhJQk",
  "key4": "2dZAf1ANuowqDNhkdaGj4ohz6WiQUed7whgKgkWRiiDpX3d8B8t8XxUeTrsM8cNQjVdEbdUd4Wj6giNJGFzeqcPC",
  "key5": "KZabd8eTyZDPDcRxjs1qDnYWUUcf4rtndSbXD1V7KP2jMZ3nSJU3gqRXLNdRFqntxidNrFUQoAMFfSJ2Hz6Vom5",
  "key6": "3sZqMXR6zEcRooDiEc2c7bQdXeQSu4cuoqF56u3bP6gpn5m4Luvnk73E3Z7hfij3EkLcHCeamUxxM3sERyme75pw",
  "key7": "2DfoAe7nEQkXYaCd3FrGjXQvX2316BHiu6Mmbqh56oQWeGdHMNTWb7WkW7HtgMMPmbVBpJdNHAQv95Le1Nqj7Vnz",
  "key8": "2wYHbinCeezFNvn5oCExmpNqW62ZFobfoyP9hnucn9HVih77hyN2faVzedTpLDcKbWmBGSDmusCtgE9yEEMXs1Sy",
  "key9": "2U48xiq3pv7ooBn1KeJYykXkVxqMzHMpdmtBMnrMTcmUGms6yb5yjdu8WYNHc2tRNo9hKswcKmYMptFjZtQhTQ1N",
  "key10": "3K4nsPFXmvWPBZPVTWgtV3g3qmzyouWKgDRY2muaV5rc6jmvRXNGbEQERLALzF7AnSZ7M5Gcx4jRiwXK9VivSF26",
  "key11": "BvY8SQC1VYFhNSySkC4psuUdB4qTr35xZDUEUWJTAn6iLaTZfwxfDDKGQmv1cHGjbSG9BwFah4MSzLxAF8cUeyt",
  "key12": "58kh1XrZoZyPkkKV1RCgWRzkVbsdMDUhx4r2uqW9XGfiPZ3vuEGfs5bbMnJwK2Du5f9iEtzcGytDzdGURjwQYCTH",
  "key13": "camZjeEPqDxF7SYZ5vWGVYsiYeW9X4KfT56LbQakYn2devCVhS4SteMwTPPXFBaBbTzjMe93qfjprVjyfmw84UW",
  "key14": "yyZaWfmLMGV4wJD3E9Zqr7nKYBJgp5WYi5QHxbyApeyqEe8T34z4nLPKsH5YNR3udHQRr93zFZfjEYBT3qaaovJ",
  "key15": "3SqoLj1mS8FU91k6KUPAhTtwYvqtz3Q9Svd3GWcyP3kqPiD8wY5ZoMav4xdv9Uj6LASytpFkFhXLowgrehfM9vqv",
  "key16": "52dXwAT9kEhiZCCaKg1EE3kAM8oBehLBdHWacBM27A4o6FGpwFzqvStfGNipsS9AWvkcxhJw1csZ18mBLvUziGpn",
  "key17": "4qcskyqXEVJyvrox4yXiH8hBpkAqBTWMVsKkv5V3KwJetxNFFHGWBGQaYkdByDvK7LoUwBdhR5veQ3Smv4VzSAgL",
  "key18": "5L9pAx8EVLieJrE87168vky4rHJEcjyoc9tZjfDRs5NdtbBWke9o3sUMhNKckjwajHWTzcWqFXbePjLWC9eau5oD",
  "key19": "XJQLHdq6zDuQUaqPXq1ucJN8B71yqRFQuBHGjdJZZNJf9hYjBP7aXfxhike8Zv5RMuctSeMRLZYhCwjpChHiig2",
  "key20": "3fswNYVdGrSiVq4Ak6gnHaVCJCRM6z3wZjuUFUKjsFh49u89AQRzvsyXcQQznh5ZbLszNJKaNKybZGvpRz2tCarR",
  "key21": "QKsr6NuMVAAdhov9ANiWCKL73kRXsqFjep6ErYwMUvyga22EkpdokunQ6maYSB2qLM1spVgFT3VVjt3byrvDFBT",
  "key22": "2hefvvBCyzGzqiA5GsTtZ35mAZ6Cg5BkS7zaX3tZTt76noDAvXQZVZHVm3WerbhC8BFBmXiwQ6WCf1bTyYx6SZZ4",
  "key23": "31CegQpAUwEE7z4iriJepUUzPYoZqu2s2DZWGScbSz5xg8FBS1K2cqFBPdKqWWWXhLQVeYuBFoxyvPX84zcsug3S",
  "key24": "5SHnpkAaYqrsAVxe8GqSY8ouZiAfgcQ6QNBs854Cu91GuCk7uz81NVmy589TcgmYWcDZ4SRWXmJE2p2sYjKnez8q",
  "key25": "2cMaMDYFvRFasFY9bBgEj9iLcK2XMQKDpkjqrzk2rzZ3T58P9KsMAz2LrnJ4RUFNgWmng5hfjKvDnwPub66LWDi1",
  "key26": "5A7dFfiLhfvqmxZtq9CZDGNdA7SmtN2z6RdBjQNDo6Tf1n1ZgXvfJXnh7KpHfqoF9941vps59y76RJFjzFRKfgYS",
  "key27": "Z5mTHgBu5YUXaU8ZiUpSzguBtsWWDteGNWRGHX8uhjbeX3PCAaU1ceQ7b5ZdCtuZymJjn7CmAh8xF5cKd5s43kD",
  "key28": "27hTe5qgQsQ1LNJJyusda4ukWv6nnVVZF7KaKdGHPijCQvnyGNf1Utxpagd7wgfuPhXrQ51QYWLM1pD1ToawpCLR",
  "key29": "3EpSkcoQF9PQUTX1Msa17Qiv1H9HLm26b3Z2uh4e7UDjYQKBAPYSTNkKppKHTfmzTKr6zrCXZqF7swkGFdXQMoze",
  "key30": "2jEhbXjeepKhr1k8hsSXpnSYgHM1eCs3FFY5wNcnYtR2GANRFEhdnEoScMNPP9XXriZwqPmD7rUST1p61kSQTCyH",
  "key31": "fCzr3CbixnZ5wfVf4MXcM3BmV5T6KnKVMyp4Z8kSYVkuQuysAbGUNbas9CDN1JULU71K3kCFEaZeftLYcmrCAVm"
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
