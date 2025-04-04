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
    "2uj3ggbkgnCbZkrtnDRi1WiZQC8gxz1m7CV19WJTg11NtwWAd4wurtho4ffQqjDE75xy59ER9oHMHbLYhiaFjqDD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NewgWnBrK4fzpaUQ1B1kntsUgLzc7R7DTrcpQdoHRWJxkjEZsEiJ239Wchibf3GJa1ikBuUNjZobVawBVPMdSjJ",
  "key1": "t8VJ8H9ZbV4eB5KECYNFcJJN2Wt2pTjNXRi1mjEEXMU52dTuStU4RRfhZtCFgWmcbxPFn17oHJyiuCGcgndVStd",
  "key2": "HP8Z976wneoWNaeG2UYidUcfMxSTcMjPTXTVkqGybwEqctabLGKepkYmw5AFzebAftgrR5w4DvmLCJL8xEbN8FU",
  "key3": "5N7QoagVk7oEUheZLv7UbFsh8U7RzsYaAeGbYkTbs8ngiCtKQ19kBpnhRydWE1v6WwGLijZ9MmzjJdGDWHrcXsPK",
  "key4": "4whHHkQF8pJC8PZaAA9v3gskmRJCrU4PBKJRfzz9eiu8VAaZM5wUmErPCnY2auJ583oBxEGBwtKovcejBei7arcg",
  "key5": "2g8CUerj5eiWxwQpLfWmvSHE9cBf98SjdkTVFrA9i3Q8Sg9rmZ5gyhC4Y69hm6W48V1vSNwYbfWaKhtRC1L7GtjG",
  "key6": "2BypmxQ1owqgB3VwHzVB3urcM5p6s3RmYgRcNu6ZRs1qyiD3CXGk1mTULzrbbsCTsqQ7MSVWgASpfA189putRXXn",
  "key7": "2nVXLvCteMAWypz2AvxmmLzSWobDjcaCfjNmcb5ytJe11JM7fsqCorBf5mTzLDf5UCr7WKUwTjTw7vXdsYhudD9c",
  "key8": "5REbghdaVRFbojKKhdm7wozdvkitjjmP3kWGb9E7Vpu2WYPG53dF1SMF53ovcQrW4JaHZyCxbSYRpoHXMncFGnpZ",
  "key9": "3FLAXJMYE43HFR9hfPP39Nneg4Xy6zDMW59mGUiYwzHfyR6uVK6gXp8nBUP4wy3pTR7xsjrDwKtKdy1UwH7EmScz",
  "key10": "Pvd2cD9ae2LCBLdxQ8bAFHEqyjKg7x7wZCeGqg97Gv1r3V3PitAMMJtyTueDamCUAtRz4TL2Q9K6XsHz2DhFn3h",
  "key11": "5gEtFxacmZiSz3FEW2bnFcCPbRRaYbWv5QbeTVn1o5fY4UJuFfvVhzepDpfUEuF8xWsJ9zwV98xqvTcqMcP7HgNa",
  "key12": "5VJYzRDfjM4aDN8ViGUNrBrB5inBYZVKv1weZxrsjhe5Z9SzX5rz3qnYiEhp3FdWVKTxwR4WPGYWDo8ERcewRXWH",
  "key13": "62CKdEexnzAHNmzmU7wWCgooGFQrzSwKCoUs19SmKET2DajK29kSoSXpobjw4R4gsUm2hWqGbN4xauwpj86WFUaQ",
  "key14": "4sVtNZaxVMw3LjRjJt4BRRbwphDWyBid7jPPtHk9Wpy5JGC7PMMzMpJnNRqQ5RN74ssAbekDNVstqGZtiVCVDKH7",
  "key15": "EjkCF1KLq9WFpvhQFTDZeaDaudV2YDETXSahTY92QQ24iUYoLZoBYXduxJbbYq5RYWFYsgn5Stw8fWoo6akLGMq",
  "key16": "cemaz1QaKcx4UjcS12pYGDXyL9MtLJ5HAnDQjkSFc3sKEDZioZkpb4VTGgK9Bu8DUJFEHfXf6CPK233A8cKswbx",
  "key17": "4TcvsMK5y3jeUH9JNeNCwpVQrHwisgphSNftBvT1zwQK5opdF6vkY4os52F4dfh9JFyitM55HGSEW7xDEaxnzkRS",
  "key18": "3GPJrE7B5TBjCqmoBqEJMXven4XvDnnbmixYMFbQ6obLc6bMGSFswD7dpqv8Y7d7BUafhxkdm8zd7Mnnw3YbVc24",
  "key19": "3J98MLvgx5vcLPf9qjEr7CaSFJzrJo6uX2osdMM9KCUupbTHLATJHY1HpUWKMgPexUMkRKvnkqWnnuihQeYmYRSY",
  "key20": "4cpkQWN7KyEkivDD8oQr9sKft9aJbj61ZmNs6DViZkhGwtEHz8k3UGVf1AFE5Uj6iJFzMg7Ho1U23qsqXMkRPNER",
  "key21": "2nf7CyvQAf1wFVLhtsrGS3ofZzGrhRM2aw7ZWgjFcsTuNd2ZZkD6d7h3EdqR3YourF4fyPrjagP7Yotbv41mzH9W",
  "key22": "5KkBWM3KBvnukqPpaqMYSUZ3sdn6FFfp4sVxEUiu5ERKzrSwdUFZX3qTrXXdRGPr4YXyfg4jAATRQ5yoJMVesvXm",
  "key23": "5UrPZg7Eo8xvPsgTE7WzHXqy8XWb1XznKc1hVPyd3xNnBibY1rfqGdd8dcGB1PEMFkd99AZYGFGFQ1UbksppLLQ4",
  "key24": "FZSxXFthSpRNU6tnPRUkYPCDUMtDvnB3kHz2R1m46ZSvVH7iSKTp94wPeVeFDMBVFP9Ff3q2Bras8EkPHDKazBX",
  "key25": "3DBcCXmfFMo4DYHXax6ZDLkJzUHkpkz6i2DmwunTTWnjUau8Px89VzxLAvBELB5eJS5zddCR7bEgAjppmikUQj4Y"
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
