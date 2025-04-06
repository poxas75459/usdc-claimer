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
    "46QmcnMzzypgDs1r7ncjvxdSjgAJEFfBaAk9wyDT8mcaQ19sKCUMbKYDb3F9vhtPBTMmzePnENvAgEtcDAH8UT7b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qyafEqKbA3woF6LefhGcLNwj1QMDdyKjxm4XV1wLueSGxNgVfShhq48yRLYE6eEetaJUQVZDQ23tp156qGmFWqu",
  "key1": "XE44NG9gLEvBrMBui4zhEmKo7ZponFUjb8adyHZTaKkW3gYEcuNS9ECXpCXoag4e1xZJimmYh64LSTKs15i6KTA",
  "key2": "Cy8s6mpL5Q9En77EuJY9N16w4UGkFBjZAzSExXLom7Jp4cXM8XcdSewX9AxrnWoQCqxpmTNGwU27H29Tdc3GsVW",
  "key3": "3eikavvtCnpx1hzyrT4i7PQkqd3L1KEVXeWD7cDQvnhqUkhfj7K28rxLQ2qYEvH1tU6kp4gLDfQpBjMc9ekNrTkD",
  "key4": "41RpjMBVA29uicAFsdvURqRchgsrVtT49a38SS8mGH515miykV1d7cXsx1B6CpzRbsXrLcZEzy5s7gcq9bcEYa5r",
  "key5": "2mAhZMHZRYdMZ69vP1LadKUjbNu82cHyp4uc9NWDCrpaoGTPrwuqACQDATeVLR4N2XpNiG2oHv34TxhB6vEEwEns",
  "key6": "5stKp7SYVQod15JM1mmDnakvVj7ST4Nv6fUjr55Gbh5bEWfq6XMUFE8zg4i6rMAeCBypq4ut21cT1XanHvZUg5zb",
  "key7": "3DNxTb6giutWA5UaWfh3Wdo7yPaC6yAWfdNzy4Vf3PGxenMrW6C8ntVBWBCBcziszkH6M3XWY9RLgTctaf9iYAeB",
  "key8": "3xWTRA1CLZDpKM4Zm1Z7MpVkF1QLtoWEjhkegiCjzBzeszU7ecpr6Ct8AM2vVtQE22MzBiLhut9DnRvEMfMPVszK",
  "key9": "5Rq3XLVo29PqWsex6o6PWZjijQmg2s7hyqK1gV1QUF9CfQvoX2Nx8kVcKHxSzxRNcpw3jnHKjaUDDwb3Sf2tPErX",
  "key10": "2C5ApaMkRxXb8SG6h1GPKJtUW9A7rNHAAAu6LkXqXMF2pH6pxoPJ6sEtDS2xGrdy26p65HepDWRPnxnUvzA6Vqaa",
  "key11": "5JFaZBqX8RNQ4dLvfZLPgBdcaEBfCnXPfnbQz4xzGFP9KwtUMMLpnzyRENVQQhrti7rQjMqmSMBNKQxsF3e2pjZa",
  "key12": "4ya6M4v5qdYFc79DYLWjnq74WDVkV2P2QwVSWp8jrfWCSN92EdZUDUz4c2vfwuwEaJWKw5hZEhQoXTV99BsLirr3",
  "key13": "51qTo1i2vHNZVC6bg8JZjPMob7qhcn9UCoe3Nsz4ENovdyKtMD2XukTWvxzi7skFdNyezP1xwm3pY3ZDfSoursDp",
  "key14": "KHKuK21DaZwFwtJEC3HyMeYNJWo1G4X9UpksDD5DhnJU8EyNhqxbr9mpKtpMmJcwudro4sW8doz9sn1gmH8FrVf",
  "key15": "5ze6DAJ5kUtT85Vc8AAArWphz3twDE1zqJ2p14f6SRzZVm8Y9NS2L5PgheJsoKknRAVK67eKFHdkbhe36Yf6Upvc",
  "key16": "cB82XXU7UbB2iJifCCs7yncxroVgRFMMKoEHMptoKhSV9aNJ57RCGMZKdKQaKSFTr3VULwZQwkKk6CCCYctRoFL",
  "key17": "2vcHP1TSyS4idsCGqWX9RXRMkKuLqQiLRbSGxe3fdxtRk9yCLQzju9GSMFuxz2a77vgZXJMjfU1bZb2iqdXygVGY",
  "key18": "avjqXPxw9nhBBPi1FjxaaRTA5txWmprvb8PiLr97WFejTjaPRSpdyZCTjUNjbcJasbd6q6Dd36v4t5epfv9iNDe",
  "key19": "3gVY7Ti49VfwiKgm3Jw6bhfHLvwvNmStiW2cNXoMrNKZe8sNhsQwByMB8h9EVQRkUyYVDx6Ds23UM9Z7rsnNHTiG",
  "key20": "46EYaej6hc85FzyAEZGmobfVPg4T8oDGCiyGhgnLhuCyYBQNUUC24f8dhyfnYsxkMDXnTuYL1MB5qe3xC71BJsb",
  "key21": "4Qi9stRjzJu42AfJHzdg9DXba1dK6vLqWR74cbERhz1yi9JMnJTzgaEoMWhrvPqVeH25ao6cdyTSxCs1CMofUckx",
  "key22": "5jDm5Hcx6fdTvMMsjNMtK5DWS9oqDnP457bAEbukAbdaFfVDpMAFaMDV9mvsCZSri5e9S2qYALDXX91NAPgNMXDy",
  "key23": "2XheE3ADUGMYorNf7LXcyfd47CGbKeKL2jQkrGCEPpWu4iiWa9bAU2y6CPCUT379rBbi5sa8u4qETJzzGYKQ2jQL",
  "key24": "3cRK2hdvQzEEuJ5nhmCfq1F7NTP6ZbAqKx2hws2cn9fnGCeZC1cCiQAVvmuu2gebgGgjJKNp5ziCDrewTGP4PRV7",
  "key25": "5WeuFYpXj2hk1TVi6AVZb7ajfUo67LXoSwEd2V8F9g5bcNjHdjwwn5q36x5e9ZU5eP4L8ixHCjhkEyoh6MhGYMav",
  "key26": "4i7i8zU691rMJJVx8fqfQFjLnYYVGSY7Db9LhbuCP88JbbvPURhtkDbpQJbDYJCznENZEQtW4DBU7M32MiUqVneQ",
  "key27": "3n6AVnXWpmak9t6Wx6UqvbwsAqc2o2bRjPm29Ncf9CJ8meS8HTaqJkTkHFzZrRfUWmmmGMWzj7Q43YyX6HmpH8dM",
  "key28": "3bWF4MiPznhdJa9hXFo5rKbcpMYLMZdHmmbA7C32tCHdjx5KpJSzo5XQ3FW2nro9dwhTfzDSmjVefkpcbfbQCt7f",
  "key29": "PRvr12KCiHdY1kn1JaU5h3HHWwpUz6CTc8DB2H8oW3GdQru1N72FoYT6m8rAEZkU5VNFhwuAkzDK2pX68nNfYEa",
  "key30": "3YNvm7esqWJiuUfSxjg5Z8qeErR2W7tQcMHxLEUhEL7JNZzsLps5pKnQAjpmxjgtcU4Z3Jdq94QquDuaZPEBEL8p",
  "key31": "2yqddhVbguPzZPpDJHpnRSnQA1W9cXYE65ds4QYrSZB6AYroWYP9URgymV5cRcHiExxrsnZe9jhbqfKhjtZ2Pgju"
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
