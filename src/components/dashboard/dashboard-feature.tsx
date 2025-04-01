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
    "9kjn5tUdymPpdYFVH7a7HhM5BfB8fBCcqW4XWFxF6cv3sei1avhVyJbvN7fjFiBdLt6EVqZFiE2hLZQZ61LcNva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4akczmApqZ5DqAU71hHegN23Jmnx1MK8axuJwtaA861oKBjc8BTNyHsf3vVHm3hzGt3w2FtxkNGxvWxQDV7nUxt8",
  "key1": "5KAJowkQDVbHBibW7BSNZeMBhKC3LdBp7LbUnJT9VBKXK4odw2CvipFHCP47gEBNAoi2dUJHNh2p46WPkkmjtTjt",
  "key2": "4AW9cGQUpXzbNeDJYxP6JiYdxAUGk9myZkB3bsf5cHQXj5KpMUo1Zidhf92atrF83P9P2HfmSTE1F7ih1HjwC67w",
  "key3": "4yL55AUyTZurGT4BN87VERyc6gA1Jypte2GNzmC2XjYTa6XDUKyVFsvoNEKQWRxDZSyFK31Zu6WEyMUjoiJk8afF",
  "key4": "3XKo8YyrnPd6Z39T2Z44KFg3C828xdE4szAQRq73V8V53WATgdU1PN2cCLhdSXTqdF6KJ8BAhgWMwSvXYDRCnjiZ",
  "key5": "5nf9rChVBcMFs7Rx5Bdt39MpnHGLsH58HZe1X8PYRaZfvpGQab8iBpaCasQF97TDysycB68vn9HMrySK1EijzAcx",
  "key6": "L4hqjKEAj7r1DceLgr3HJ5rcnHP1oUBa7huTAVJ4A4qmhBE5SF67s9LfpUez73AQa9jWucWb9tcBvbYSHpFTTQX",
  "key7": "3WiFwqunifAVUtJ1qN98e1t7bUZFncCEuLUVkCMpkJuXDgPb2pXahsavbHM2oUJFDfBjQnANBPjAHeHyXbzVq5WY",
  "key8": "WUX1Rzo1YQ4s3J8TMjbVW1UQCNQeHjtKj6JWzmKQqhMJKF3kySoA7zdo6A7hKWFxfHEuYwgJXwk1NFDGVgsqBzZ",
  "key9": "3dJVW8THtDQe1BvZDPMyVcdCuUaWBoUsWsWL9fzKCk52Rqwetks3baTSbgrHpwLkrkMJx8Zr7u8PDB974sHCjQNQ",
  "key10": "4xPxq8jsHHURqV6uzL357MyKu9qdTWJmf38zsmtPscne1aZXCNe6xZjMfCLwmir7wvERL4YCnaGZFifxK3ZZm2Ao",
  "key11": "37F4ipTV2GdpxHkpyCcySmGr2QRRjWzP9JTrsJX6srMmEdQgiikLaymJ3h9kJ64AL3VZ8WPDGPCmRdy46fXejAzz",
  "key12": "4e9V2XUJyc5Q762K7rmMTWWvKFEC3VVaUNNoq4wtMA85jZfK5sdPYsx1j1EhaHetzeuegTbkuspveboT3jZ7S6wo",
  "key13": "4zt1JYixAHeB1NQ9EXFCBmFzZ2kd385UhuEmRBdTYTfAKosMuw1omscooChuYr3uui8fSBVXE34r8y2eoDYJW9LQ",
  "key14": "2DPSsop3nQNW6yobykeMKp88MbWuUJ6YwufQNzW84WzjFReWGnR4cUrejg5SoD5Fkd85pPi6D8EbU5Mx8h9J4AeA",
  "key15": "3q3XYjrf1hhTfvvojC5Jmcmmma2vgUmeTUV9ZwzBej8nER7pP9vDRmnugTnXYn2MkgeHRkVs3Nuf5gmb8nsETM8y",
  "key16": "5W15bvkng2dtroV3gNwtJhvaeLm9Z7jZpCRrWJfHaYXPbNtLrfRCLw6WKN6CSyH4nBeN7ts1Bpp7ouiJtnFgYYeG",
  "key17": "Lhkm6R6kvP7o5jAxfVK4hg82PCL7b7syziVwCrvRYWKVT3Sg8TWCahNUVoh8QkvYhQm2JxhqgwmtX5QzSTzTyc2",
  "key18": "2m9zZ36YbWbJk33rBaf82Vm71AQB2EkYbexnNnydqS9rEgXe2B5bv5ziqvPv1v4YE2KavrGxQPgCDqkbX5oVV6pS",
  "key19": "5frMJ8JS3yjAFpx8gCd6sQMSzhaZovBxRhWo1H8TYQ8AMtnkctuYH4wK8ej2skyPYvnNgdxteLvwpck3janFpw31",
  "key20": "pWfDYPRMGzbaW6VjbwxkUCEMQcYRiR6YbK1YAdBt1Qtz5kwWgV63WGKc13aYHGV22f4RKf8efFy8KTuF9qYGM54",
  "key21": "5B3oMaRz1bJsWEdVggxYskZQW3eWe6Um767BNBECZmF1dkxWFbXw18QbkctEJhp5GF67v1aRfEdCeZvixVrQGEgT",
  "key22": "36dguUp9veR1o5hKe1zkjxHGMSxMiruciGMRAmu23PFnEtkuw7MhS2HAZzJ5QwmQpeHtJbYp34Cby1rLCUPEBqUo",
  "key23": "2WGUsMKfatbChUAsfAJujNgB3sJZiXF9yZaPwtjoymwdUFHyySwjaAQ2f5vcZ5WYW8Z9MJtka3HqeijZA4fuVjmf",
  "key24": "4LeUUrM1rm9jmuK1PPmJNX3qA46zMYjRpRV4XK7KksVbxotPc1n2LRKHaz37VLfLfpUdCPKigE1yRdffkUneEg3L",
  "key25": "8EfaPhyAJMpEUrpPgbwfxr8VR3hFAZc1vmrUC3jDVaDPG9HQaJRYQaY8p1iDnu8ikamDRb8ifnGun4NjcL2zHW6",
  "key26": "5z2rCRGgSMP2ugz6gyuuWGrnCEhtWTt3VRezqSdVPmGJXGDkaYSz4HWUVDFEvB6xEZeg3tSH77LwpF65VZnxa68F",
  "key27": "3P3qrTpH9JWPr9iE9HDbyQk9AFLeQUn1y1uZdZhMDy4kiu29P9mqpATsd7C9jEenQH4T9uA9AX921gEcRC4qBm21",
  "key28": "4gQjPQEDLGgpPncTZ54eb8wcJCRrwbbRN4aPC7i5p423kA94ZsosMvuSZeFrRQR3wj7E8aGfczUESNvW3dm2is8c",
  "key29": "oBXB2SqUbnkpvABjhdJsdJ3e6jLyMn6MfMQy996Yzeits6n22Ry3MMzXDNMCsRX5nodQcTS7wLfFkebGREYK1zh",
  "key30": "5GwkhcGk1AyecpruBBzbYadq4st3cPFuYQj1k4bFnAMWPoRUQk542MasJVSRAkB2PVug6SBvuadobyhQ31hfF5Rs",
  "key31": "27bwDbXsExAqjqW3eCSHziKBcprdunJrEbNapns3495X2A5H1qLfJhGpumJHffV2nsM2QFsJitTL1kqmLc1R7EJe",
  "key32": "44AMihm1wHpixfqFYhXyHp6ouuYpkH5WpD7nTRzbcarVnwQJ5ijS7WeBRt7Tgh3SKkTHCFG2Tvnz7bsrykoUBfi8",
  "key33": "JjE8sc7N7pGmd7YGcpez7DVQvvqJD1ZF4qyBasv785BwtMi2sRgmVWjVRG5r9zPqc71fV6PyHYyKM43MPFiEHz3",
  "key34": "4bDZon3H3rrhYtMyXk4zjKAj2oCQhh7rsKpsYxUvQiHgSFGdFHRAi9LpBNmLgd8HYE89JEXfYAewHBwy4BA3vtX7",
  "key35": "3Yt5QVPmdD56fRyRsf7LJczBk4SuD5gKAuFWVJKGbozWtwd547aYhisqZW75P5FRUpWtZpLhvuVYdnHsskAb7Kjn",
  "key36": "4UQ6hbsBGDrAeDEUmvJM6KQEgyoRtUTCKjBshqLgkqyAiJ6FCz8mtbcswEx2ZsNeZwHh39GMYKWtGmivk6Mp7sQH",
  "key37": "4fB2x5wKLUPJZA7Urn4irPKpKVtJRA6RiZsfpk7s4movYfcJEkXL8JiJ4vVYBaBjvS47Qenta7ZKXyX78KRAJZE2",
  "key38": "znTFTr1CuTtb39ePbirECHFTdYqg8LwvDF6UMx5rruB42RL69zqv2VkFTdy7hHYyVFAs9F6Z9p2d8nHsMZCyA79",
  "key39": "4KEhSCGZRwKyqCyD8T4iTHo7DrovF6Yh3z9zoGDnKsCjzZ1CPcXwkDZx5hwjoT2jF6e8G48Xz9Ae637D19qJT8Sm"
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
