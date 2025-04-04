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
    "2KBUE44e6ySNyVAv5Em3pkZ5B3hQKEfesmTxTUEiHhaFawPJedZku4xARfAuWDTuw13x3HUdn4WvNdN5ZGBefwVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n83dWyxDYzXWqe9GaSpwWXCBHy51D9cZYiurkQnD69BtvVgXK4fU42rnM9erPj3o47rJXZYNEcHgsy8LojcRFzz",
  "key1": "4e61u9ABH6Ho31MxDt644p2WiJVkfHa3F53kkiH36niTbhqciypgpbeVFu6icFdYnet6YqhzJ3wRzxD89kEYzmr5",
  "key2": "461nLa9SvmUEo1bJ9n5R4gno5DoPhRrfpMM9NM1zDgrmmH2Mup5PuWYvWMf3wQtVnQ9v1tQuZ7ugfMcBdaiMCE8G",
  "key3": "52jbh3Us3LjBViEne5m2jgNFwv8BfKpcfZ7YWWbLToWMZegmmgqH5eCNiMNj1EFmKFpZYXNfkVXczZAr29KiUTjd",
  "key4": "4VWirkPh1inEQZXp3amb8ySoqrik1ESi22LtWUndabTLknf84vaudQNb45osEuXHpCbJjpeMEQQG2fQUXSWpR5aH",
  "key5": "38BZ24HeDBqvNQQuAQZCLJ8uso6vjYRNXuBHpF18vcXkinFYEvUXv7VcpfXZfcgCF1rrag8MoiT6Lr8WYnsMMTkt",
  "key6": "4WddFvpKRQQXxHBxrdgG2w7GC8sWgE9h7Ti6mQpiyFwN8jqzAwCfggkHYPHwQgXQ2iq8Y8YdoZ2iFdMdUXKznv1y",
  "key7": "BxLBmQVqppjitTuewxh8C9tPppRp8LYK8CKnaE6GcLk5S1b3UxcDWr9HT2gvzRL2kRfXTACGzyu77A6429PaKrX",
  "key8": "4k9cyWA2afgt9mqUm3QxR8mTB4kcMPJohsP8vga3H6HuFEQsna7tyBzLkKjCx7bGwyPoDX5LxDv9YfhG8U93a6Gx",
  "key9": "x8PuhhhDCqiJvhUkY5bFy9hdpSkF8APrheXRm3HaTzY8dyYTPHQoYikmM4pA49TEq5r61KMkxnk9fFyWSSi4geh",
  "key10": "4gtFQEZFN3CkbEYTNgmzUP1HZnUR1snR9K7MZJJyfMtxCwSDKXPbviKHsBViECfDoALdBvo4zBm55921rkToxSGP",
  "key11": "22bBEN8qSUnYwSsk6Ba1YHW3JL3JgoaLdAPj9SPgBh48ybxi7SUic3iwLjp9JRi9Mrtnfqw4EZAhrKMiXCvq26wR",
  "key12": "2s1gnA2fhwAnpUcXUyACH5x22o2RDvXPGeowuDMCtnAznVVabPtXj1cH4nrtZFxWp6RHsrEz6dnjpMRPVNUYehP9",
  "key13": "4bvAgsPAyA5Yk2LqrdeYHEBLh9Gydywf1aq1p36vm5gqWUZZpWZr9s9sHfTegqZwGMyjTe7sCngqVdf6JX9wmjWq",
  "key14": "3W3hYb7REcKqZWWLJ65E1YqspHMi52C1jfLFC6Dc3CZ443MDdgjwdof6nZkwLCQ9Q6RRXJWEyM7EUM52BaPgqWUB",
  "key15": "4i4hJ1qqtTMLHLwfw5GzQWT3hLsm8XuhdEKuLMogeTsThDKBpinXxXKNiugEUAqtoVWwBtGNt5McQZbjCLvWH6ws",
  "key16": "5NvxAGQECMs5u4g5J9k8Nducz5Kzw1UPG4Xc8UG1ZcYm2HHwk65hubTTwYNE1bNFzWkKr2EGd16qiVGr7V1UdP7q",
  "key17": "5RfNZe3nyhC49PkmH2nQKteCuWfx7Vfjc4YkkKVXuQWqK2GaV8xfkVUEvxqii2bNuWhVWK7YB6rnMYGWjrxAviMh",
  "key18": "5fTpoGmkH9cT29ddGgdCes1NbwSQfFzFwS73GTdxxtG5BNPQaR3g3gFJvT8N4ZzgGD4FbS4Xzycizxw1JybjKZ1f",
  "key19": "4iYn4tiYsE5KMWAAd7etGbYikKDPNrAWTzEX6YZMnugkjX9MZNEGrjQA5MdmaUqARJHxtE3mGr86NhV57t3Dse8e",
  "key20": "3cXkcszheS1soCXpzuB4mRQ7xhtzt4tcK9jPw8StCa7nqkQ7sS1mW2VjxTypFcM2KNqv2LjoGs1iLvpLx5dacs8o",
  "key21": "4Hi8ioACfeit7BndvPwq7CCV5VEu3cbeCtfYw4qzerZLpGGCaNQRxx9gcH4inZ1oxfvExLkQogEdM7jL1VPfdbw9",
  "key22": "299FwcSehvreqjZmRsts3X5QbxCmbWki8XG1cdDZpmDL1D327iApBaj5Ab5YqRg3sRuHsXeAR5RwguSasYDENKPn",
  "key23": "289ux6gvXLXXWNPWiHUq2rjDjWDtDoiLHxg8GGdbtvXgfg8qECK7ahDaK1VJYDRvBehXeP7sLkHoZM4GFYkAVHac",
  "key24": "2DxxtZp5Tjh9VoP1MqoLk7ig1ppJNDG2NFP7SDP5qz3Su43SnLNfAWD3XiyTWe6cL5EZqdbbzn6wmijZov2L1Wsk",
  "key25": "5tdPdYTzc7uKAaXDc6o32bMeHoxi8H72GBXfmpvAx15Pmt7ewS6RvLSYKPhvDTE28esxMmzeS1QPzgZpQ5RW5Hsb",
  "key26": "38nJiy9JdvF55b3BoNLcSmxSVvmqwaWdtHXLAXGkhviUhfDWgub4Ys6TmSFuMED6GkxLYLqbW3LvpzsWinz5dqMm",
  "key27": "2Vzutq4xmm4JVD2U1cTqJbtx5a1skKFzGAtUbS86mkzcfBArVDjkrqxPtYGsEyF7jx9Q7Fx9fe4r3PSFJiVGCx4z",
  "key28": "4671vLLCPRvNZX6XuLMaDmiFUFVbTf2eLo9eUqW6swjm7odwc437grwfBcUBHb8oYRPseu8Ee4upjvnoV7eWb5jN"
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
