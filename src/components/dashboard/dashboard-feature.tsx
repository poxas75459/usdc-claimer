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
    "4SnpJ6X7tz8p8rki17zh6sCtUyL4Boq9YKV8CNWnCG4zamb1DVgyVkAsnhnTJFDGqs9Cv7LB8vjADcgSgFFpZBRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sMfk8BBZmi6eSZGFV75hNr1NgAucXE9bXN2CVLo2AxcQd77ww1LLgvc9HngbY3kBMJAeUNrKWigd6rFZdkzcCmD",
  "key1": "4HvtCg7Y3BTxS9xwc8bnaAiKUDHjpXejsg5DXRk6K72PUczMLGr7khPKDAiV9St2PvtojCmgWgeA2uerroMQaUhP",
  "key2": "qTcgyyGKArwpkDi2Ran8g7PApky6GCyzDTz9f3xGn1o3AFvdsYaHf7KthY6wSTb9nMQS4TBg4gz5wdWpacGPu11",
  "key3": "3MhrN1T5MwCDiFSrjwF6DmBtCiV4agydHokYAy6RXabCtmEjiauTf7pn9Amk2ZkdbNC8vt2arDQG2PRpTBLBhtPF",
  "key4": "4TqDgBy24tbV981uLvQamzjFqkKvds2ggGufU6hxBA2Y74AfpKUZ1XyHX6XEfE8NhheaueDJmQNm7Mkuj5CLLkbH",
  "key5": "5CBgRhxYPBfCKSnBmQVvKP315uPPaVwSkUjC6ik8AZUd2mSnyWr3NWbsT4ZXcnmUUZUSiusAncC6BwX3bJrUtbRx",
  "key6": "mcfxoHa6RWivqy37WPHtbcCFJkkBGLYLwyUACLCyJdeyTAGijwS13KjdTGHeTs17nLNqKCWP6SAYncQxAETMVx5",
  "key7": "5heuTTLhFb3JTVkvwtVbdqTT6rkvP17sDdqnzbdTRaE48aSfiXsVk179viJqYMs1BFg3vEpUaeCR3wLPqLAeMnEh",
  "key8": "3vrExtJYQqcTkjnampQNsHM4HFgBCkNCNDXJ3QaWHAZwuFj4itg5H1PzZZ63DWKAkBumPF6RL1J8oqBsuPYchKkJ",
  "key9": "2U5mWAbJPn7ur11XmHDm7GN1g33wTpwrfmC5UzB9eH7jtSdC8Liu5q7GsRGsgQCb9gHCKhsNWtd9Xxe4ct7KjAFS",
  "key10": "3LEjuLhSSYWDnxGkC3GD3NrgcRKywkA618qootFQRFkiMMr78sCmNpGvpibXk3tK4hbk8CdwhBSFhkmA5tm7Y7AF",
  "key11": "28z16jPV9V2oi3jY9nfpGAbHU3WT9E5uWm8S1jXYD2D9Ymej7ihDUWoyR9rkNLiTBGPnaF5r2gKzno2A1r2i98mg",
  "key12": "4H2w4yHvKkCo74c2g9WpvCeKZrNcRse9dHuVL4LwCnenVJ1ebAr6XHWh2dhAjChWzRwufbKhgasYpe9EN4d95Ukq",
  "key13": "3nshRdFUk94Z3a5oxMuKK176qisrordH6XuBzWJzW8NeX6y97Vgno26gB1pGuWAaAiwnZdFMyb24GDbTETab7ctL",
  "key14": "4RTZWZptbuWhJKg52w5momKrCQPv3VAmc2iMWb6oaA9DQD3E98CFejtAzT4tquJvPaJVeDquPBzNKnGXsYAr6z4H",
  "key15": "4wqSKC8vtB3JLUQbn2Hp8pMaEU9rhhCpoVH8zGoNrWosuxRtJfw6BhkixNNtCSccawciEaW1X99MJZPXofM1m9rN",
  "key16": "4dbAXWYkQSSveYXeJHC2JLKjMuB5MicweC9axpFqwYEW4Cwzkqd1uKgzrj77mzuj5JHh57XMNRqbU4UhQkpX6iub",
  "key17": "5tJ62TxeN2fPTKdQtSWmBhM76Scuv5bcBpQ8aWg4QvcKARE3ixxV6pLmTGDm2coy83ZRtgPh4tEjbg9RsyHgmnwv",
  "key18": "5q4p5PsQ5FNjDzgPFHHBwYigFN6VZx5guw1XVz3bZ9yKUAnBB9UNWAkCERVAFMHPdYsqhLb5dkD7aEqnyy6GAwFo",
  "key19": "eKZ8NBTAD9D7uzGWEB5NJAnZJneKMJZcccvggyi6AoVQhaj16FBjy1GPpmkUcKBdpMfWBnesVLb3DdKnMQVJ6cr",
  "key20": "3Yd85o2nUJCwnH3JLajohVfZwgwe66enQT8vMASpVjAJoeRYf5UTCFqLigvcU1tdVdeeq6MXCPirqcaEKdBp69kS",
  "key21": "2AQwN3v8YQePFqaV3gyXEPAu6zCnJ51ND9WtsbvX9vKyrtY626LYAzSVW5vvvPhni5dJZ79Y7SoEWhVoy7TecWsC",
  "key22": "gfbp9c7Cx5MwRkXjiHSDFJtAZy7ANkKwuCUDDVuyrq8ki1uVt9n4uTSWksd6Z38wbHXaxUx4QGa1tBYtEgp3YS6",
  "key23": "RT9yixpFAksZeLYzCcFR32x7Ve1zsTBEFFa7QmXVTAjNmdDh7pUP9DVKkvZiQYA57YxEVUCTihe6u3TrC6Whhnn",
  "key24": "4RV1jnMGTC9tznK2JqbUformNnjvZwfNiX6Q8UTrfMcW1iYgjJggbDcZscVFi4EsCfdkVk13G9Qo7CwYET865kmd"
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
