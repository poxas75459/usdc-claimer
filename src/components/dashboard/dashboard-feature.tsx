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
    "4SJoHa2tdK5t2kyNwuzfjKXnc8TjwVTYUFsW8BEfgFm5ttDjYEiUajS4te5DpvPv3HzeAom3MEw7HnEgVJntZsb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LNZCv437xsCbY6b6anJTwBy4KNpV2FzxALVHBKEsAHeSr5uCpjQESv5jqCF4TRB6Tur7DyDDJk8Yx7cHaWQ3RXc",
  "key1": "52CH2RJqm2W2z9v4bSigE1g96VP2JKopscjG8aco8Ljc6fRMNwixPKF2Sz65SbWzW1p9RJUp3T1LQTaYr3Qo3hV9",
  "key2": "3FvzWRWtkS7Rw3qauxvBHoPuUeQE4bhPWEhutwjSEJx5dXCvX4WH6dn8eu4DZy8mESYg4qFKdFDjpr2ZCTjyYz4u",
  "key3": "4T9VNCFZ7ec6i3DYvnwDV7fAWdbPpK5pJRQF2KQgccKErCoo1vK5h3pvuwbiYhWk5pGiUQkcL3tR57jC7r35CgYc",
  "key4": "gj9arxuKcoet5LaDX66HwLw8amfzu3mXspk49xsJknMMFVm9Fi2EsX59xybEt4N7F8Vuo8jJ4mSsGMuksJ8tPm3",
  "key5": "5y4Qhf4e4HV4eQ5KLryomxUhMR1ZJfCmKKyksuAHF9rnZQ64ernPYjWXVVbWjNPfb5Q1cWyer9i6qoVmGjbrXAZN",
  "key6": "2JxUaX8BGPV7dM77GKb51qUDbXr49c8L6GpGErZqUz9r3VpQ2xAuJHbgyx4uJWr3ekTtpNHoPMYhf1GRbtt5dvaA",
  "key7": "jZ6oCcvHQayJc29qn1LgdExn46TJz83dEHTfh3Hog4FfZP2ADhCRUg2iJK76Hm6merq1kECxk1CdST3wt3b58d9",
  "key8": "5axYwdDRUSYqZU9SaGVXEGGx8vCjvKXy4pQ9u8TEvc2jEzb3dsKwN6mmJnQ7hk4Pu5mCJA4DSAtuGcdSJzhGwny4",
  "key9": "2kTdmfPZj7ETZN3MBGTnBhW1U1DY4ymM9f3XZiPTMK2BjQqvrVr5c3LEcEQsJuSqGrQL9zsGLVTUrigtCTwt4Jdm",
  "key10": "4Hx2K1nrnRKFeo4ecmikNKkG6EMBuAx2tHW8sViwhbJEauLquFmYPFqhTMzioQNrkAtRFTccAvReBpykpn4ZDvaP",
  "key11": "2iuBF9t5zyU5A1pwA2gzGUh2D8BU8nKCmQUpTE77RJSMjs9Fwc8YWgjbYdRryEh9PAKgBw8n69r5WQh4WQtuwvku",
  "key12": "3r2LLEHcLLcRVX6TyP4MuRgr1LKtQg8wJEs9h3Fv23uUTTDtKHmPEU6ZoLw5SG9oa7TyLtLfeG9CxYc7UhawDfnB",
  "key13": "29oQ6UQRHUSSiohmZp9wqcyPLRwsLcVxLPegoDQTuSp8Wd2feWrQ2cvfebcvpahJVqw2wmJWk1KcFYSCE9XUqDrP",
  "key14": "2PyxKz7RByjuJgNHWCYCKzddNXzCeNUeqE8sBpW7rrMdaTDnbETCVQJ7eAkbnN8NzMX1jQC7bBAdJvip1WdzbN8H",
  "key15": "2oeS7K5qQpKpGGivuvbLGYtQE1XCnbtXfg2rkwQTiKCPPpUYgYyJ2z9HBtSjFPFyFMPoxfYs2P4Voc2miVCJhLDT",
  "key16": "3RfdmKayquNtzRSpjHjwX15tMw9KMjdCsucvg2kCDHoPi8xKziEQoPfBNbo9WW9WHZ5Yqpfg13o5ckjdC4E4HdV5",
  "key17": "GGjtcwo4hecdSJB1TrLEJMG6R9G1EaKhQzNi8t6Cu4tgDfMfT9tpNqrUdMswDsevsqYj6g8ryKqCuqVyrgn8ium",
  "key18": "5epJcdZPpUiqqTzNd7mxeQmCs3TGk9autsuMr4F3W6AP263A3E6ukjhcxPS1WuWxQq4sre2j3QsSPRdGh6o8Dd3H",
  "key19": "5EwhkrwRF4q3vrHo47BHtkNncZL9yxEnzkngbikMDJcULPsHrzPbwdzqHvzUNMamXYYttgVFm4CHWrMFc8634F8",
  "key20": "4SJgqZi14f22AbZXrhW3WN8ii8sCVz8Z4bZdJbz97Y113j1tbjjyEnyy85xn5Gyr3b3SHKruvQkmScp5aWRyUg2F",
  "key21": "2yXhfTW3U1s88Yx1zajcxnw6rqvdPqrXdYPoJ7oeRrroFqKHxt3ejiTcK7mxuP5JPNquqVo1h7S2Hqkke14JTsoC",
  "key22": "Sw1HaXienfWqdK5oudRNdtTzC7pWzSqGg7SoCtmcfCo4Uv2A2Sh1bmGXgcNuhjBBFiHKCmVT4aZDTGQQ3KtZT6q",
  "key23": "4xzQoi4uqMJ4oj5sWQdrsmPn9eJyz22UHvFfdZVqV1KsvxWxDF4P6Laf68sB17gDkbMz8ovaX1n88geJQWAnaEdD",
  "key24": "FX1CxEh3gqjatPAsMUEgL9Z4DhqxkCR4NhUW8cn1sZ83yeW5r9AbURruog7dW3Uz18MCkpNtSV8Ndh4jVRM9HDb",
  "key25": "7321bpY3D3fDmV9rxz1jUZAMLTiKneTyhfRV9oco66YddRX53MQMV7T9fCPBn1RKyHrHAmaoCwobtDxipZ8w9jk",
  "key26": "2ZbE8E3BS79iSftEByd2XqtaMAy3LoFkmKtg6gMkv75B8nQygGjpU7jPjopDUgd1229SQ21Q5KAMmp5Bn398VnML"
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
