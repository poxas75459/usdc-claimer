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
    "63EseRtegpMdBHNNLWSR2w66mLqUQ4YGLVZLcGS5riyRNoGnJpBKtpSSRPq7kikbgsfonAwQYiZxn5j5azmDHknP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BiJq8xExK2HcyHSdhS7gs5MMr2JTYxJ22Surov353fgraVVb6PDjLyGFr1Tx7N99h2HrZ6qZNWL5jVro4bmnbpD",
  "key1": "5cnRLjkAw4Y6pVyC1nxeMAYkufLGbRJMqHXR6rnfvcRcyPMiPLJEyJYFZE3dVvLZMNw1UhXv4gxt4ynnb4XKY1Zo",
  "key2": "2AHBbyjB92tBtezr5Zf7RFvbsozZFyGexbQDE3hpnjVWJP2XuHvCWMnzuQyRie4ifqqwHhNDD8coEw5X74F5JDgt",
  "key3": "2LqL6yVZkL3ArugGjuCbLKLafxgXt1WnG8FnvrUPNX1vk5za8DoSUHY39mTQTHezbQRTMq4sBrvdYgmeQACJH3wa",
  "key4": "WjsaGxYw8Hugk1Nhtw63WsSrnq6kiD3quHREB44XEFG5EDAp3bS9sVu3Bme7W1CA48LrL3C6urtQESVRxEtCmnS",
  "key5": "bQadxsJe3C9gPJsCvHGbGRL1tTkferSe7EMkWsb9AzCCWcjveV5bY5BcM8bwNUPuowXK9SuxaG6cp6jGC4f32Ac",
  "key6": "3LULaaxaT4D4UCWvLCXLwtgrcm31AoF8Vij2bXQQU3NCaV2cvLYKPNfVub1K4Fgy4XdvEZRX9zFFhurrPd1JwwpZ",
  "key7": "5WLtRYJFBvHau5biF2hmC8jx8wMee5iiXhJFycA4KC4EpCnkoSKQosyB7c4iFaV9BdYGF23rHJpJMaviD5PVnQ6S",
  "key8": "2PTL6VcqnX38dQAYEsV7nYCpvjjd2UhwF2MNLbfFZAXKf6aydxckQmgUcQ1Pupgh2pSujpkZGmiFG374Wtbd9oe7",
  "key9": "4QmpTfSsE5GSvBMWmqmu3zQ4fSayiZbNvUVnrNyiQK8AF8zmWJYxPuUXtzfEmojVumXL3t5P7dGzSWSGT7cRMUF9",
  "key10": "5bKXTfvUeCiQsEdvGoCqE3bNB5ubS54EkpJtfxdVASGzA385hGfciWXn3jTdE3Nmn5PYAtRP3PoLPQbb4ETNRu8M",
  "key11": "3N96BvGfQE7HM8BxCBgNJr5DHFRxLeieGEoXEftnhwGpr1fke4y9PxwVnTJXUyJTEUB6NrhyUb3tn1qSJvtd5Cyc",
  "key12": "3pRZN4VskSHnNsrNNxarRYPrz3nGjBtkZLAWL5fHFbPtLpuHhdgk6aURBKFNTTdGCy6KArGYy8BjhJGd5rZxQkGz",
  "key13": "wgwpptxgWnQJwXJP2eprDWkAH5ybDzouWzLqmq7XSiLwBKdri16NynDA46LZ1JqNgBwJhrFNnVQuGFtPoEkbwA5",
  "key14": "tvmmt9YdaCZDqfP4RwXbjmbHGyUacszTJgYaSeSAR6YYKWzgJ8KSTCrWGKkFPK6UwJUt257xBM6pt4MC8Ptq73Z",
  "key15": "2RwcV9ncmZfRyak53PdsQKa75Go6VXZdX972vYygNgCAwwGcpYuyPsNFp6MXTKpbYJbpG7sJ47ijwxCD2BJ62Tsx",
  "key16": "2fpB44RSbNgpkRT5KH1adFtu8ATKHDzdMjsJUehFC2sQfsd9mBZCwZoPMZ7kRq24wh5DC7MaHLxgQYwnccnU32vh",
  "key17": "cfsqDK8ZioUyfbiHSjdjJeXpFiD8AhwZCxrqAK2My48DdtZ5sxaTMod2Zj1tywvpDucxeKjQTEoHtq9QMuW4XHq",
  "key18": "ApNmMgJw7D3WDTJMYG6w9dCdLfKgiLjnzErtfmpBw7fgmPhNgdgJaVoQGEH4DjawhqBEHPpVbePMCVqZN8SXpAF",
  "key19": "3fijFe3AThTJhXiqgyVFGgNVo9RSWqeUni1TxifV9zggdyvVcwz3w4hyj968YrpfTdXPd58MtfzRfBPzjBPBFGHw",
  "key20": "5P3qRYa7jKBwTvq8iUuCE2BgNUbBxkALiQN2Mu5atpvwSPyS7TM2kDkvn9Lq96FRXDxnP61kmFJszSZij4Nxza7g",
  "key21": "3v9tCb1W2YuVecGMydjP52Jd7ksFBKoSEjqtATAoRgUS58aRcUAVwsH1b99CPCMALxyfyxkH4roiYwpYzaZE75vV",
  "key22": "FtxVjgh2QC39sBi4oUPLzeo6ehkUm6evV7ummbwYibHycFTBYPjYy1ch24oKUs9ZufHG2kYUuHKivdH3mbdKPaZ",
  "key23": "4WmzakSWuZ1frdKJFzk7JVgJpkQgoBoaqgVwgoKpv2uaoaXWyLfCtfV2QSTdZhXu2fD2DRUBaLgRqofXAcnTT4DH",
  "key24": "kqHL5wzChBYF88XuA2ThKPZ33cQQAK7NAm8f1WUQoqzH7pXWL14o8mEtE5x4uQSbrH2QAj59J1MwxPyqkTVvXFa",
  "key25": "65vS8dNS3x3Ttotsr8usvzjXNbFUsvSD41NEfSCLtiHAQc3hgqHGF2d3o5DsF5Rp3P2jLkfrnmLWB8aKnZkgsU3S",
  "key26": "2uzV5NLGr3yK5chMLw9NpazcbopHXM1Q2MRNoHQU8nWgjxBVNFVPV536DYV4Zr4oHhqExTY3Badt2WpEM9nPPxLB"
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
