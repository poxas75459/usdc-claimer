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
    "4mFrKquoLGwQ1LhoZWoVcwwi97udFcy1C8BSm9S1T22qveBSRjirrRgxxDoxBPDcoAR9FY3Fe77mBNXKjYJ541FJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "geccpaFp2hJ7tEreZ6fy1HcKnqKA38jaHk78nNUZGs9WJGDCFPRLbXke2tMrtM2zPxBqpt6BCdgSazaJ6i68dFU",
  "key1": "JCL3aXZjSvEJQGTUGwN6VUxFzs2T8BEzqqa5tN74wYvDTL4uKDzRHe2vMJjSbTb918j76NqCiazBKR1MorJWH2a",
  "key2": "QfGsK8N1vsFA92EKL6nBd2bQojW1LK1YGxLTx8zdVDQnNaMaBLw5UJaYMpgeZKj4zPj8eESwXjYDpHJCrqfh7wL",
  "key3": "6Hm8amXCmzGtzbDQf7Kf3yu1tfv1dXS8JRhpV4egvhszf6sgy4zs9kQZjav7w5pBqvEBeC5pQDzzeUCJ6TrECCi",
  "key4": "NdyxQ6NJyhBeNU4zRxAFysvih7FQBL21p6cTt5DU1LXoKUSqv665PUgfvUPsEsghcjy6aihcBLmaPdEL9QQiRUk",
  "key5": "37svpjGs8ciQ37sUbYAHD3mEtv5ZmAwWbpuHznxzYRFeQeTTtmgReKbGzgcVV2aLajX5dMzXCzZ9jS3Ao2H2sV2B",
  "key6": "1sn2SfvnYLJW2N2gSBVk1wtKwkTGbDahDjAxpxNKoSiTmbKaL2UJa55uKSTKTSbz9qheUjg6MLu5JNYWRsFX69c",
  "key7": "2QCn7GkQGEkjo5UreCrVHPJrzBhvkHekogZDUgLRcJzeetQ35cMT3QpUj8hSfBMgu383VYTUwbjLfJx9ZT19f1JT",
  "key8": "5WwRg8jELxN74CvENcje5yHxAnVHcGukjdjzGZe95nfEQuQvQMLkpcpuXDs4V2eR5o8QTJkqCGqepeKCVBwAzvtz",
  "key9": "4p5jfRCwRm3qThKiBXLt7F55iqHEdPWREZRqD4tDkFiWo9KrNYr95onYSRe5T4CER6bcNtgxYQov8Qi8Kmh7sTHX",
  "key10": "4ooZwDyzECg8UQrSZLyk2F7uWfHVscANzA84h4TxgxMVz2uaiD1qKskcLVrmQ4fDYWdXzEyQsigZXpaNjzRarVao",
  "key11": "5ykq3YszHmXh8RF6pcgzsEFM5LAeHtNvQCPpENJMPwCJgipuX5dW1f3VfHmuJo38BgUYcxhpYz5mSS9wNbWdLcZT",
  "key12": "2uyF3vxGCch6g1Hmjxhg3eRRD2e2AXB5o36qwMpJJoDVtTnj1Yciit3D5GgvNfRh44CSL6hMpNN9HDJgMEegEtdW",
  "key13": "5aLPvFqfJZUB8FEHKTVQqnFhzur1nW2yiwf1dU7WKK1nK42TF4kGJoixd6PqEXmyuUva4cjCHPNNER5J8PKyDrTx",
  "key14": "4zmxMCrzFq6uqgpgdj9TioypbdzhqacH2RtXJKynAvPq9KZm5VLRsZXPx4bBSwdT7v7EuhG9WoXpx6FfGmc7TBAy",
  "key15": "KGm4Ek6ZanAraWyKSFHwbSYW8im6ZAS17b8me3yC83Wj6RWupxmbuixr3L8e1yS4p3hKJuudwKAkJTPynbLCbiU",
  "key16": "2gweR9hH1WLQs4dZsZ2o42vTAG6FhBjXqHWW2vEibPAjRH28M9ZZC9c78DhNLL1oFBtoEH6tmVZPbqPxBhVrupZz",
  "key17": "EVAvNt3YiSwjK4pnrMmp96J21PdXWZjE98xGie8GrqWNwd21hxd4FUkvpjLAqTALwsJxbshGosAibJTSxN8AGE6",
  "key18": "44mx8nndzgR49HV7waUno9FdKoGdtwmnXJgA776heonYuRbLDbx5UDnbv7VVV4xmZdwAmvYAigt2uTLfpDcRHnUu",
  "key19": "3ys2MovmGvCnuVSFRrLsH3tSsXD9rojL8mSTxbtkHVG1gkGHoZNHfCyFdW4JcAXHfnhu8ziKtRhnXwyVLSshQ43b",
  "key20": "4cAxux1ujprh4ywpE9CYEJu3aLoSRuafsFk1Yxh8BL8ZzB9rzeYtnSucSVJzfRSDejN9TQ3y9XoFyTFjkiEAdsCx",
  "key21": "i8PDfSX2RFT5U5EQE416Cz7DFFSmBdHpk4158VsJFJX4U5VL8Tufez83V2UvwXV4vz2n2jA9KLvZqkmtUpPt751",
  "key22": "3xAQ4U5iyKq58UUCnKs9Pj8zvVW6uMki4vrAaYELRjSCHZtpgrpWf1snhLDc9JsDLJrLE6fVHNFzhYGsfCpXwkRm",
  "key23": "5tUEiVzxPvy7DpJ8Yb37eMbJ4LB5GpdgPzuj1MKVsjZhzCZqtdLa3n8MfYHS39AfSrhNSfF7A4LqkF3ex6NRMTLY",
  "key24": "3n2kLH4mq34msMVcgoEWzNtqg3RQicV5qtbR3mm4GBy6qKiZQcqQVgiqSWY6LfDiwwNwvQZad5jzTVKZt2e8rdQa",
  "key25": "3J1jTW5JbwBbXvkTEyxLL486YsPQi2WLZYWXm3HdAighn2owpGDKT2GRUcwZiiRPk5kyfwCqyXUbx4YdEhVZUgVW",
  "key26": "4vUkM8AHAMLq9y39NWKLLRnQUoTXVrsxxnmjfphFe9PERRVwDgvLAuVQuqfUogtBDiFPZLNpcUcWqjBCvqwYPoCz"
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
