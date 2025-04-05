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
    "k3PH23RsoxS9tpy1Kvz9Pc2k8gdwsd7nsZB6xHCzCWooWx8KRbNBFfA4ZsNsWGfEqFS9XvFmLwLtL8B9RR5WStH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eJpssKVGLgXp5AYsDCH3bTN4rbEeuv6w4qehY5k7bbsKbAqKUzACvpjYeKikzsBtcQbcsZukByfb4pn1jmfUKVc",
  "key1": "5EfJECtRKpUxYgbznaNSUQdYXRunyqDp97awwLTEMLqpgErECHJEqdma7vgjpQH5UHDrBQGAjVFBSYN2wmJDPzTC",
  "key2": "4C2oA73Y7nGTkQyBvQTFsLRCZ4ZGDWcb1feuDavHf1hjeCdosbmWZjYwtknKdpvddfqUVwcH6SLju35GM4sA4o8f",
  "key3": "5uN4XPR7udV1gohXdJssqmwLFgxT3YfPeeV58CGjipkrj2vT74Nwd7oCubpji1f9JPqhaTRqZrHoBoCRcnKxGivr",
  "key4": "2jayMKCS3ZQUXR7cQMc8fZ3mL3UQd6aomGoozC3u94P9D5MWKUY59ZrQ8TRi4pCJXYq6cRp8gr3HxgwarbeKyLHb",
  "key5": "2G5k31dTwg6TkyoKjHq4MtZDdWWDcEpXDx2SywnUmC6tcAdRPDYoCAjCzQTh5YFYMWWU7Rae2P3wDz6kMcA3Lrf1",
  "key6": "5Zb5gsR7venKPskfkGCudjoLMVgGrWijete3ffHa2bukURwcBBrttM5PbQdVXEVXMVwtfUSkQkjrNgsJ72fwrtq6",
  "key7": "4BqfmPer8fXcffUf33ezugguuzyPSFJ4tf3n7uhXS15ZMoXtTFNWVJfbF3KaVLGCDeM9DV33FXZVhzJWxnTkKmN8",
  "key8": "4njT97eoaKa7HaVmjS5qhUnqSKjdFdNCsfCx3fUEm5jLyybnWaAxjrvG8xX9uezsU4QvyGka4RujJW231bxcTtn1",
  "key9": "2xQDyy9GK8HhaMHPkEcz5MbVZQfQbc3vcJ2HWyk6vkH3wNwm7JhBPvbqmYF7URD3eXTYSRB7bEaBUJSjB77XAbvt",
  "key10": "5zSdzJ8fmScA4rujzUFN8Siwu2oY3hMwK19CGpCWni1DScmYP2bNn1CLrQDBQVzfrkcimNFfRdpTwDQDd3eMdR6t",
  "key11": "4mBRhMFh5VHFjEZR1xrjjRV1Ka48oKK74PdEoE33Eiq8Lsg9aineRRA6rDoz3w19Qo4Soc9xGG2AkniQadcUaqPC",
  "key12": "5jBfSxFkTVH9HXX5xNuChaJXACPA7caJf5BrbGdiuygU1AzpPF4UTLTBLKV5XicobauXaaQb1ddjaTPvEMGN8s9C",
  "key13": "3vYWio1TTKdqFcRXyYti1GPkrBLjgsrcrBzeUpzrcr46Ri96rnCS9soGz95Jndb93AgviqLMvw5pZfMXRxYvs4oZ",
  "key14": "H7HgT2kmBDe8Aeq5rNabUR3qo9Nr8qk8apYgseFuXMo1azA62NH9N4sG6QZnJFTSdPhoXLDC2cfy6eHi3s27bxk",
  "key15": "31q2dpBTREKwT4HnsuV8vCPSLuWFVDMwhj2j5VqtyH27CjyAKKu4CbkcBqHtDwdFm8yYMqUtcS3sQ2izqFgKh9fR",
  "key16": "5qWpjUmMJiXM94As1GxGduzRpWPKTwdt1ADkhWBdTXxQ1xxALCd8CPH7r6sVEpEZbE7jETKLEwv2LkV38YE7VUcK",
  "key17": "4nUiZ9j5mupNYLNNYhDsheDeJHD9KW2VksPsPDrCXiWjLJgHbx2aGicEWExrLLWD9bfJnGCM6tGTuySoEvFoFJoW",
  "key18": "5zW74WAwpoQ4YWRZnTadm3fvizziNBgZtm3K9aGuf6L4ksvYFoZQF18fdSrfkVKrW9xSDtoWLCpLtPXKSRjAWMoy",
  "key19": "mqBwp96isUrwf3gRPnrpq5z5ApxeLTNVAvkVEZ2DSzPkcQ5FARqRLCGM2AhThoXxz7c2pATqwU6Rp2ncNV1ngSL",
  "key20": "gCpN4mXiYpXCzZQx3ec1ZgJQoxToLhGZbN3Pxn2hSNEdinFY43qNByrb7MUTUQ5RxKyiwxfhR6ivnKD4Pi8B2tB",
  "key21": "2at9T6XhCVR1mxqo23DqgHYXBQh1gBbmRKWnSkHV72gzwhUj8yNYySVCyPh9fPfdF2w1Gc3dwMhYXtyVfXswxVU1",
  "key22": "3BRRbszVJmBMbL6XThYmfoqURWRrkyzshTeLsW9e2wuSbWLYiY9T5jTCQYNnq4nQRNwgCbo2LmruUM3cVFu893nC",
  "key23": "5jRTqJnW1y5D18kE7cXW6Kgbb9VaNmQJeEwLcY2joA2JHeZ4XV8TaAjTogZmNDJnkcWzTDRHrFHunkxKJJnFswCq",
  "key24": "4YG1t3tbwX4hZhKagEsbsFvwevn1kxWKpHXiuhyasKgJwNfM8D1CHUsvnzwariiCAfDrz3QcruEC3VGGhSGYR2fR",
  "key25": "xwpJJ7sgc1dBmSBnBpzcvUv25F91FAoYQ5VUXPn85ekfGNQZaF3sjw3zxwvnnyn6eDuwR1D4dEjnR3EnZUwtEa9",
  "key26": "y7Vb5rJtkXmdEd4M4Y5gU2BLmPoh8m9vEybrdgo3gdmLqUTn7kQESDLBcXsAGDPvLph5NVWJcHD1MzJ6LV3v2ts",
  "key27": "5N5CsFY1xwC9ipjXEKJ9ABP21c5YPrDrjjxZWDc7PygzYmEudE7LQYXWFLEmcPnonadN54q1DYcHFiq3dfMr8z5B",
  "key28": "34moWnbNmQyNv66oWWnz4xEdco23Z15cp5TXsUcmCzHfwhs3XZqWvGojzcHYG1iejPTFNBz6Lo7sTvse832V8tCn",
  "key29": "21z1wxVGJVYbvTgKdXXKS9dxWqEFcCuk92EoEJMyP65BqvPGkJXYtxUJimP4p1tAXKwn8q3CPyERBHzZaAb1nX42",
  "key30": "3c6znd7xbfwWaVB7buR1JJbxxA4AUF1FiFsnwD544QPoyJTuhMokJyernmGaMD13reEWEeShDBd2kDbUZ8YY1pbr",
  "key31": "hVyACJtG6sj92FB6qLSAPnnSjhNbPvjVvt6ajDB7AKRjCX4HULC4nmYFywkN7xKtShe3mQhwHLMsWa4dPZWKY6B",
  "key32": "291c8ZiD1HjKLJrAoiuKWGXZUpaEJwcnUiuGhBhUqjVxFif6T3KLERPh8RsJkW5oFB4cM9xqjQh39w5QN9weCFpx",
  "key33": "24M41dbxNqnH8PyMzQ3UjdsooTNn5cj7hMkMdHYWC5aVC1TQSD6qoEmTLLLuo6vJQVCEVWjU2LUYawr3qPm1wkFv",
  "key34": "3f2unkSnmBC4E5hns5pof3qew5wjtne8fMZtqVarStRzNCNiWNmDdKvN7dHDf3PrfjBbcTi3Xk1eXS7A2cbni4Px"
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
