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
    "49aEQA7zcVinBR4FFz7GaMJ3qjb3ymbXjqhCrYDWrd2J1Cz6VrzPUKa5bedSKCn3DV6uzyLvogXVt8K9ALvGxZvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zYDgHbwDmfc71gWtmrqxaA2uwobfiMTmukTVQYph5wKneCD8xhrsiNgjJdUU1BUH5wKzMDRD7AKH52to53K2btx",
  "key1": "7rUZsXHhUZzMtxUDAZwnCjg6voDHJyFnZG13gUjLb3D46vjhaGQS5qAp5ry3aqhEv2UxNFpby5LmMJ8wDmZNQZH",
  "key2": "ojs5Wyf5thCk2nDioP8S5M8GTx4R8VGXkVFWqUNRaN12XMLGhpHSSHZAEjGC5toS6Am88EJRUVM3kj6gbDzGWbn",
  "key3": "2DmYLPMfXeePtGzUarPG7k5hY1anLjqj2a4EBnbLZw1uF582DnxESqgUKGmaX4vJa3Wtnx7MEQdiarKTbr9k5CRh",
  "key4": "2XFjM86Qv75FoX3BfSRijT7du24XPfjHq7SQR5nVQ15xkS9Xgr1MyyhMEm3mDwyt37MikvnVZhQArD9UoL9Gj64B",
  "key5": "38hHdyEW7do2LJixvCHFXcULKdJFqRfdwAzjQirhcdYMoaoamxhRcob4c8eYN4Yx321N6CBizpzmta9rEFNQMNex",
  "key6": "3bKVkUv8Pm3GN9UTTpHgrsF3VJrvkcvVfSWhSC9g5sMZ3YvL9z5WRWBW18gpmyajB1fswzWwMvZVRtpVGZye445Y",
  "key7": "VGdEqaCe5Ty8KEJDs21QhB46upGC8VaAWC3dfFCysp5yYugPxSVXQY1HHx1kvgadQsT1wauUNryTF7UvzzVH8Fq",
  "key8": "52BiMf3UcSe2QLnUg271YkHQNQKtUwqCwjyEErA62zKw6YkbFDYz3oCXoeYEWSjPPyuvfnPnEuKxgh2rtituJBz2",
  "key9": "sDdoWrM11jwBrS9p5RSocxk3U5iDCKQeVDgTpG4n7tiYi6BjBHJa3JUkXvKDU28YvtKXQnXGgKXq9sS3AEvrADp",
  "key10": "57rkqDRodeyq5SpGf7sgtgwyPtnJ3oDfcVmgufJPVnahFZ48S1m2wUAa6XpT9JKd9k94cwvud3x7QRqowGsQ5L2o",
  "key11": "5yTQD9qYMy9pUa9zh2GAsTVyQzLe6JBaGtxosQvs6vsHPMwPuuYGxcVEfhF3Lm8v6h4VVqHz5bRyj1kVp435QVcY",
  "key12": "22mobBw5wtwK6tFCfyLM4s8vxidTzRivaUH9PztewCsDwT5vCg1V98AsVTJ3QXg7z9s5T7XPcyKx6Ue7V61ETkUB",
  "key13": "5iytXDs99qG5yVCHTJs1jvu3pgUMEL9FXoxozLiMpcvB9bSBq3VushQ3CW4bVXhjE9s1Q5dGJak4KTo3DBZc2xRF",
  "key14": "4qFy9rbEx9z52fqkvNXQdoX5ZgfiYrorTuwFEWKdYL2UwDjKQii7xpz9drRB6enpaLiZsznoc5AxdR1cJfr8jujA",
  "key15": "3eekfoAnr1Eg6481nwXyXjddiZgjSHCpohKmNouje7ko5DAQ9gd26v4zSs8eaoG6Rr8zZ2SLJ9SWcUpHiuieRkLe",
  "key16": "32dgkSdW9XSnRPACs5qSZVw5XBkpAhkgrYiqT2h9WwQ4HdVSWc31tL6VGPLYbpTerSaakifizxW9GGcHWzZwT6DH",
  "key17": "nnwzjXizLYRmUxJHnnqCDzPptq75SJzGsizVMSe4P3kdVi3TJ4HtJMZhgN6YZuKnjeupyfqWiZBvPgzAjdG8Uyg",
  "key18": "5qhi75D3XsN1FyJoyyNwvDwu4UNcEEkfugPxtusLDcgiFXwrdBzRjB1ukioWU1mrKqBB6enZsQERuawBZoBxdh4F",
  "key19": "4daMjUzNueh9CuxpVxoF432UYGvg4xDcEddjPSWN2iN2wbArixWQStnUQqZBC2n3GQZk8fMcGiyEBfgpnjtsewaA",
  "key20": "4C1YnLgYqhnujnsPt14c9Xd1BNTUzQHPUMptV7N7kSGcpLBTEvhLScfvRp7PdRWtGBMw9EcLLAsKXj4h8FyvMHbF",
  "key21": "3TPZ71xUFkyjBkHSV4cwBnwUMBvtPZLWpkMCxYAyFaqj7cinbBiurqELk82dUQrSp79H4FRALsoV1L1z2dqJviGE",
  "key22": "29p4Ttnm66bmKGnzCy5PNd5jZC8DKHiNAVzWeyB3MinvQkeXGBN3wdyxYDTkuin8ZCpZ6bX6GG8SwhxpTgnZvfNa",
  "key23": "MWu92DTgUSgsL8v3dHj7Kn7DjNJ24vQz7QHevqFQEzwMFBd99ojkr4A8b7WFWqrQoa7fryrYBFpyifkJJTPfSRD",
  "key24": "3oaXRoUSUcehe9XNBsEQGbPXMvLUKTzATHyGS1wNKkAZXUjGVEdoWmon94kJDHJatBQdBjHzjG2qJrzBRrppyVMX",
  "key25": "4fNEZv9eRwoPkjFwjFhT4exwqVs6jczsnjSMW9SLQSDi31BpJkRMMFXMCtYdi219Hv9e5aQycU92awSifJbPgKGK",
  "key26": "44QksM5jFpvcTnLDvsPQ6grJfL6qocFfCfdVbzwJD5SdQVK7YDE7EK9U64qwEUBKbyxVv29MjfV6Umx5fsU93j8Y"
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
