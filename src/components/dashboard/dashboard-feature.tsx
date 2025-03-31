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
    "3CmAjNwhAetAx7gDbihm5d9ngSBLgt62WZszFA9iSJUUiR4dLZJznmZo7UWPJWmgYuBzqhiYNCkFVVC6ZPY1JjGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41CjNvNk2aueUX4YcVPbavRz8KkAFnfq8xL8NCKCYHTAHZ3LdLvEZMU1By62jkSgQu29tnWmFhuTdSLaPJ59jR5S",
  "key1": "rEwvQxib9TSjg45Jmyj7DDJLANynvfyYW4bfrCcgz5FQY7V82ekifrgGPqFVfytRB76DmanFY6LBpsXt3fLiBqe",
  "key2": "2tqybhHA97oWNCpSEmFmhwBWLpTTzeRNJceHSEpX4sWtV5Yowh8xo8VLUTXEHEWsQnAz6wWAFSMFsEAjiDikgNrc",
  "key3": "2rxiqN51bTZCusc5EjeUTu1y6Ec2nzpB1hjzixcpz8jtLFvXqrrhNsLFnrA3sSNneW2qzx4gCFq7c7JNrdRPfBNq",
  "key4": "29WaRyMgsEdADJ1XDMR7Pv2v3KJgkrKESjPtGZAmpQyHcj6eZc3yTZbN7mMrGUNhQwig33xiG7vvBHwHruoAp5Ct",
  "key5": "3MuH8iTTLVxWC1JZXiYPNixmEiEoXuXoJpbHwQ8FvG8CbUkejMD33YZQeiGG1yu4Kvqf7TJCctEsgpwGDNCi6usS",
  "key6": "2Qcfy1nuCxDx6wchoR3JrwBqZdHLE5ronxszx8EcFJaQ2FxK36F9GbmjgZWkerqDUsCP7QGHw4bzs1A344N5bLVr",
  "key7": "eJrGncDriMjkvJH1iGPShgXyfNfoWjp3tPfUu2akJ9kTB321cGa8zNoyq5Kk6wuSFJL9Vt5aAGYMNGF9dWnFwkx",
  "key8": "4bcGewJm8TtG92CXqT4aHU8tucWLaJfTr8UWLLh7nMcTK9Yw1qBSokHNpQ6WDeJ4xNegdvoRPT6FVbPFWDK3zLQu",
  "key9": "52xPJ4dkER8NQr6DY217XDhrBgHntQjWaCyp8ncLFFDBR59hrx1V3JSbH6PA8Q4RM1ez89CNdSVxJCqz5KQARJqV",
  "key10": "5gkk1NVJdcH86CBfb1GwqXdu9RWtP3hswHeQW9ovzwTa3rTxpLWZSF2AMC7r51vePL4z43AigufAyVc9rGu2pqWF",
  "key11": "4oAb7kyCrAhbjX9YjMHevzgaTErUfuguPS1iosBbQrYD8utBcAXBgTvYENbDDWZJDnsvpLfB2F2E9u37r3jvMNjV",
  "key12": "3nVqdnWUCfH9PkR5vMixS4U5FyWDCyGcjhqNPet3MwqDZAcXZVA36fLRAW7Levy1348GPjaMYxGUpysgZAH28TUT",
  "key13": "3PWrRYRMv31tCCWBDtx7Ba7JoTugaLX8wXWL2B3KXZB5L5t8qB5ijs4SVH6drFa6TWLXgjamX74rkh1Ydc7v768v",
  "key14": "4FY3iBgMYK1oTX545PN3sc3kEBBhzaCBY6KeUr23tfvNsZDbyMPw8UkCSR952rwydMTXQUT5q8kas5eP5Nngtk2p",
  "key15": "2FjyiucnaWuyqTyKPG9hrH6Xzptc3pvg38Px4eseSyJ9AzKhQuA9VUwMqrDwLFx7v5bKq27qo6pdUzZYF2tBAFe9",
  "key16": "5YVyC5VhFbuCn3SsgMRwJ1Xu8vh7EyGVwptsJbu6DjDAY5i2BWdx19jQRUvrU7URAjvD85sKxoWerxXvrJfnjJui",
  "key17": "2JVcdHscyf8YpaohetFZ4Z1SHgPK738yjsiG6hr7Gsng699BRapd9wfBZavLP94dgSAh4hhQbAQPCbF69tFrbtkr",
  "key18": "n5PZ5K65GuLEuJnorL3fh5j29SeZa3AZMrQhhnb82PvJgdDnsbjjUWvYDRZirmR3T7ZDhoMRTLcpgnxERETn16x",
  "key19": "2Tod1kiBkqEmNATtzoYsqJr97utNKfRFwWMwdVPuWNeHHk52fNYk35HwoifgHnYBzYY3cZcht95rHwZd4VQP877p",
  "key20": "3tCcSUeF9PL4TX96A2J7p2HyS8p4BRgJFfYHhAeMrKH3fHb3yZzzwsnhEAf7jPFyPZaU8TvSULyYe1zHbdG8941v",
  "key21": "HJ2RnCey6t7v7kUmP85hQdS8jYsN1gWLj68W2Mct9rMS2ryPeMSRinx9gYu8WzPxckFGuv3JmKpbiMxJGyiontZ",
  "key22": "4iqfUdesjZpjE6ers7C4taAY5mm1VSzYthZL9PVU3c1oLp6iedtMbFFCKgKVNud4cPpciFxPut48ML3QdAVR1Dys",
  "key23": "2AD39dQquWeP9nSX6DYUggPGJVhdXm2iG2yyPt2RpaChczx5d26fkUpuhkYRyizDVq3a7SrhNcKYg86NhzZMKVkF",
  "key24": "5stvdEAUjr7c7c2GHoaU58iRXAzXZLqFEkYdP3YZQMqN9zZ5kCLpPUxirD1xDtjSfH24xLhbSequhGtX95afyEHX",
  "key25": "YEJtdLNpVEn17CXoXStJSSHkKQMyWw15t642XrayhWKPkNk1G2jEyRUq21SvEpHR9efXjwojQSxM5fP8og1serQ",
  "key26": "iecehdUBmXSAsdXCYrXkhaqLMpBFmycY9xHdVULY9eVCLRPjUMy1gej3xrRNEvBpYPjFxFu2RGbGdYLUezyUb9f"
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
