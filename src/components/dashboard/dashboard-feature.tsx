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
    "628jCC59kjgGBM1MyobzBynB92f8LQbShUdEKh5t9omUKQmP2KqE5NvCCxgcVqzoEz8KFWGHhro7Js2iTfvRyFL3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sfQSdqV7GDcCnpQ3T5vtN6YbP4oZ5xdpSuUMEjfqtRTW9VDNytXMeFGww3XmsqF2YKif2sCJhfhxwvoQfzQsg4k",
  "key1": "4EGAAgtX7ZF1Sha4wf8pf4kG5tP5rUeq1nFugLRq9PjogEX1LFfzNKWzGiHaegtRJ9ZiHXuk1iHnNbmwQehqtGRM",
  "key2": "5u3MYWvhSu6rDh5eq2SRtvjE5xrnR9nf81MRwhAygK9VwuF9JDxJ4wcsgA4WoDwsEYgLQ2qdEB4hsCQRqu6xQq6j",
  "key3": "zgTZia5frE51XuxZGqUmnf3mPQV8D144i3PmaN3UraiKumcPwqDPub5thGySeHQQDxHYkkBszP5mWtAMNzvFqV3",
  "key4": "33SKaAAZzZx6Yd24DutV1TzPPmMdxghckbm676PLy3xXBPWd8uNE8r92mYNhTqPZVNmzu1R4wFcMtRSuxZAiZ1FT",
  "key5": "3Fmy9GWNRHmdzExGTKQ3F1iUA3k2T5mmAZ1ZmpA3UEMW83f1S6JQaSfzGPRYk4Gppz6F6pg6Y74bVon8TuVf1RkK",
  "key6": "4oXFuGp6DveziShwjf9CRZ3EwcTnKSq5W9xjVenf4STF9ZZb1BzhkHM5rYUdh6mv6DGXq3j6SfWrYUJPjcP9iczC",
  "key7": "3QP3dbKyQLeaasfrRyZTkE65evZWssQFMH23iG7sTcES8iquz12Xcur1AmezsLWYtesFJdvC6RorEL9xQrZwd8Wg",
  "key8": "2NuZH3u6BJmhVtBSVEpWyuMHVnTQNpZtuaTfrUMQ6TQ4n6kYUUpgTMP4TLNvBHzwbV8cxx3iC37bjo5mH33FcCtR",
  "key9": "4CsveJNjnch7UZzuNiTZt3E95Jr9eoLZPX8o41bqGHpz2hqHM9eQJ8KyuN3XirNqjkuGQv694WW1GsfPwgfBv2Mn",
  "key10": "4qLakSQTvZyAgytesRrTfCppQ5vN79XdJHuj2ZLvozc56t94vvDjEW6YTAgixVbLypHyuGyCpGfE6GiuyVLx1pz",
  "key11": "4B9u4RdzwKiUdV4u1YyiXeTkiJAfoMjGgjr74AYVJ6TTZZnCeqNr8iP6LHYjVR5RaUwBWLHuwqhGhMinRKn2BEMY",
  "key12": "ztbVAnBCa8aXybmaRVCQuPCWYdbWwZPv1Fo1CzfLnEaNXp34L2CwtYn9ebWjzfCPnLaKsFSEbuWnYoEBBcoUQJ8",
  "key13": "3XkGgyWKWpARz4GQGpb3Q727UqDsG9mMoHRRKC6ie5sQPr2TRhLFKVM4KfXueQGG7zY7vxtkBvAHFxihwUdWa6bY",
  "key14": "4zCD5fKQLw7REprm2Kkjji54wjeLXASP8cmdQNyjXxpLNAWp3AwjjqtjFnCpCHGfkfB2y2HWKf2g1QcomfrMg3tx",
  "key15": "4gKeph4dnZ3Gq9nMTTppgHqG9WZeRbM3ZRnCVB3W8rYk3vXtf14s4KGfY1KG2rShbEVU3zac5ajene8YVMjbDjoH",
  "key16": "NfrqQwYRVtpNfBbrn7HYmsqafJBbtTxUjXeFagd5UxJeF73cF4A2eqk1VQAip2BYVvQRhBrU7MCBsnwjYpuEKUP",
  "key17": "5XLiMuDU1XqLFpuTFvFohvLFFiidNrsZPSbx2MAG2J1Q2JH2gHTf9ZJeyYmHxKgv2Db8QN7Ai8jtbrMUzZxrn2ws",
  "key18": "4vvmrCweFP8u1iMgxxN9BQMV2NNUE8SojdS7DiMTN4vX1MmKMHL7po7o3HLC111dskDFYyoBtxw8faXjfianeYje",
  "key19": "3y9sb884qPGzdeRJMnAx1VWA4yiqfjF16zsGwSAe73KsnqCJMp5qmQgN54eNxZUw3AHNbRw3mJa3ebPGUzQEiNmJ",
  "key20": "53JRhCG2x1KP649FetF5XpFyGUUiQ77fhkd97xUTEzpg1pK39yhq4hxxPEeG9p9kaoK5UBiQGPVfdbdqHcUy7ePo",
  "key21": "36iyuMHjgDAw1U7x9ZHJExcpbCakUBMjUxpPCj1gNsbwpCcACU8itkjuFNEwq8L41v1AzPtv5snX9p5eQG2XU7hS",
  "key22": "EaTvP9nEHZhEkbJip8LnSWLTb4BWsNkkkRBxwVK1bYoEoKGY5WUJfnjJx6hva4uv5sHcx1nrTwe541Nu3tKKhDW",
  "key23": "5aeQCRhkfG84VUpdBxELYCFh6Bz97MwijrTRBqh6YK2P12DWCe22j4VMoEJ1yqzwMN6ney8zoNfsoyj7KUAM9gyX",
  "key24": "4pUZxQNbArRdY6WERQFCMNRcQDAzUU6NR2rAKjzDbVQog9pZU2Jnx4NyvZKqkGLYLN1NdRQYeWSmgc7LZxHxa2kh",
  "key25": "3SSdikKZCWn8jzsE8RbRHEZtvAzGdhGe131Y4jBEAP5vEtnoTLNPDXLJMS1BfUX8QodnWDi35iwVFyUyvhVbBkjM"
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
