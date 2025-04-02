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
    "3EPFFtBMPsvwSvR9x7GzLkUe8wtQbBEpAQpZxTTQAHDnTHMmWSSwfKVDG2VP2uWEvkB2eMWAbB9yX9kgEHpFi6ce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NDXXTnQmDNDXBBff3AMSw3VxneH6hcKC5WCLs7uyQffETrYAwj7K4mptNPpx9cGpyUMucmeFE9Vd1cHm6RVhcoE",
  "key1": "5vMZTEJnFeLvVFiUdFummu3tq68qNhQEqSqHCK3ZPkdP2Aa3fvYHJpr9tUFfQ2nwXjytxvLv22ACxAfvz81dHAA",
  "key2": "49NTGqgoftaerkToHQrfnRExDLsrMuFgXNbcMyQiXqAnoMQ5a2nkvsTuyaY2zKMXiKgXG8hS6xXjwGrQMftXzp63",
  "key3": "5XgpooBbT5xvk4FnEogSzys2dw2dQpowm8p67qaky641oEPfv2yaS8DC2t8Vdcxy4AFRwpqogB2J2xzVJSKdajEa",
  "key4": "3D61thZgS4Jyu7tzT4rF5kgRoXcZnyELbgvdeVxUd6m4n6JhfC8YQBLv6Bf3Zip4BsTex1BFUJXZeLUBxx42r8XN",
  "key5": "2vKw1ZAJtfNBng4Jp3LQgzE7yGCMHBX5an8QWHLmYPMg3dvo2dL9Z13J8bBV3MwBLHRGT73dQwYVzmPxboppSrji",
  "key6": "wEKKoF1aQWgh2ArT2x5WaNTz8xJbxoXo88AdnCBiYJpSSFy4sSps1CGbVpcqjGqv2Xn6cokFA7ZHYXso6He7JCw",
  "key7": "3nsdK3vVL7rAHtCfvd4WPNdvs3ZJoEtTpFuZ3kNnigwNvWrSscMzzpXoKJvWdwwDgFAkd7SYWRZdUWBXB6pagMF8",
  "key8": "218bSdzPdZMBmQsPxKXBiSewsvgZmKu9XomGQ5fAdktDgmnbUFWPuweEEnbmpaHN47ZQEYAtnk1D9yxBo2MyPj5M",
  "key9": "LLwPedF8gzhB2bZGNsrUrmks18URrobPG8boVLeABjZcUcM88cRgZkVSAgG3HxwCuHeo5BL48RcLhALriEDiD6W",
  "key10": "3HnHSuSGZrX4foezYXJuG5P9jJfmzTtSYmVFiRhe5mw2kuoPZTVeWTbuiLSzVYeVzPnBY4VoTLQWyT7mJifA7qT4",
  "key11": "3ZfNaUopuKbd16YddgDzwDdeEei7GQsc4VgUHHQ1C7NCivNaf7NntoBu6Q9kBv6bRtEfBE5ZKuNJFxtfKKrf4LJq",
  "key12": "42nVzauyMddMSd5dACEY5VkP5rjWskJ6Mn1RVkE7sN5UrTGS7DZZqwMqofubt6TSky7SzjCcAgmgh7XXX6ftPxwv",
  "key13": "3KcvAqQkUik8QT9SUiZeushAewUHcA32ibgwpQ6rXRUzDnvZeWo1vpN3cUPiqo7zzNDmVz1khmv2G5VzKuCBthe8",
  "key14": "3eNZaP3qJS45e4DzyPcJWgeG63Bw6iHiyXB5G2L5rDt1qjhCwbbuktMs62GsBsKnpHKM2NPtfVop4yVYCVB5tEj8",
  "key15": "4d8rVRU6aVfuEnhLysWrZNrMzMrPANRBa7htpp4aBjJBUvmH28QpPgKXHV2j7KNZiMnBUn9LkJXHbzrghN3eQsMf",
  "key16": "8CgZ4RZoVDBeJBFuPFkDLqM4k9w2G5coeaAHsxrNbK4yFsDrczDzxEjY4qAQS2v9q8yBeF6SYDmX73nhviyf8BS",
  "key17": "5todCd95qteDtoQHwdtUj5FmcDtJfimvrjBgLxpxjQPczUvcTdSwpn3YwCiZZhKtxEisY1J6dhwJCeyzWY6EDXXR",
  "key18": "xASBGypzMXhB9puyhaEnRzi6uXxi6G2e1MX1JEvAFbcpUMLkPTDm9PUuvUfLu9v6VdtLsJtbZhFeB2C7xGrVuke",
  "key19": "4pXeeoV3Wm9pjMhN2nv3LSX61vwcJyEyz1gqDVeSsdCPRrZQPsjXLn7dka29t7EE3bdkem6k5UEijNhgDMjPgbvr",
  "key20": "21pY6VpB89xM54MuctDrb4otT4wVGVgnYvWYipDcLYQt3PTf81cYDCa6E1U4JSkGzvQWZzuGczGkvEns3LttbJap",
  "key21": "4m2VhVfk6cLDNDXZRmRq5mFmgk2iZYFtYNGoo6nidZFPXphQRwwmpKuE2JzgpyuH48qrTT5uxJFZs752kFVrL7ek",
  "key22": "4VP4RDabtnuLeb428dzTu4jbDCQFieU4k4VnK7KMKyo2AoTtaE196wcRj3j1EQzcVFYRxtRLkD5FNNq3fHK2myg2",
  "key23": "54z8HxWv54qfkDVsD5nB1Ntm4HZabTpZwqmt3fd9DkZ87T3QrXjN6aUMsPVSYYy8cB9Vtys25RapnfxCf7Bh673Q",
  "key24": "46hhLSBx6eaoDgNKGwW8BkWgQ3hGwzYuZYBZYaKXoEDyXtTXki2KVcBKWENMNbxVD68DQNvW1Lc2UomVX8RyKAXV"
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
