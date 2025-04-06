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
    "42ke6S7SY7HjkmD56kcaeqFN3Wrycyb1w6YvvzpKsTFfzagsFWQbKan5dNppoj99pHXzKky4fSr587XisUDikpfU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cLLhsTvbCP24VWbHXDwGth3p6hKpxiGbfmLxh7eC4JqBLHgY6XkektpzUfyR9hsV6wAGRmVKUD9T4KMi6nUZirS",
  "key1": "49EnwY7rSFJi2J2eQRyEYABPMMMuZiJSKatXuHQSufMmJd5NyjxZjV6e9ZUoXFGzTwguydvTMoS55GfkYGQkdHRC",
  "key2": "4xjqXg2AxrHup6XyTqF9UMCqWciNw46Y46L4WWig3xPk8oA7Yw6JdM4VAKiLFWYTSNu7EY5LTWuz29wy6qKFTtMQ",
  "key3": "3gXaER4Mu486K5n21sRqCUc6D8xk6Bvqry1bh6w5jTVeVRPLBVmoUK25GruLNxzYyxWTnhevfchF2Mea25yHvhcY",
  "key4": "2KiJBjJAzhKR67gLRtyq6Fpfrv4ERzEs6XiF28vpjdK5fuoGt7VAYe4WG7j3TxXGXXsbsCXzEnWvodcT5CZYd6zD",
  "key5": "3BLEsNuHSDkTzWadcLJLzhFxM5ShGPYH6Ja8yBStbWFz4jVHvWJkCW56SwrYoeUFYuQBynaDFw2MZgiLa2HnJ4Li",
  "key6": "62Vt3z3awL1Pf5AkrDJWjHToD31ELy9Rm2dVD2dX4MNgvAsLxCvrYVKxS54MchfeKFGJiMguvdFg5YV4fqzCeExm",
  "key7": "3dk2vs5uoXtN7qSuuuo4eVt3SR2k6TdABKJJMRx89Yy9tta25mwXxUKMZnYcbZRjRkeCxZYUVS3WQS6txP3BEuW8",
  "key8": "5ssf7PoNb8hCP478JM9vWd2p8u9ykQWsWGqpHABoj6ehxiyZg5hUngNB6aSBB2rtu3vtLTX6jGBu7PKF3LYdQd3m",
  "key9": "3ZLUKbRBxAhTAWQMX41NAkEXgnwpEHXyjMZNqn8DD7pNscffBBTgFAcd43bNUTmxqL2MkyXvhoGqEqtUmhJ58UbA",
  "key10": "4eFmf18u1DYmqRHm9Re9jJ3e38BELEu6pEBrp8D6sFSYPUWHoXEY3qQ8QevyPsS62zGpi96q6m5z6BoamQ27k2t2",
  "key11": "KWKtCFNgzjd5v945pA48R27KvH32MxGcdGFvb94u2YNjs4XLvNoDB8oP3MQvPLb49v7YruT1wwZuNZPeXqm4d47",
  "key12": "5wnPY1mJmJdiPFf8bPnbkSza2RUx4ZBD4txuR4E2xxjWRbxQMyeFj1uy8m972E7n7S981ZGvxxEKQgqp156JC816",
  "key13": "3tsYBePgoQPc2pbCTwEHY782rXd89q5qxg5fKAyiUagC8ro3pH6y4vHjc81bNzq5oLaZq8jyr1t3cXwwiesxzY5M",
  "key14": "2CkRvaLPh1iQjH4Z4snfauni5LQdiVgThAGmz4a8GHRAzadzFCZ3MEPP99VBF8BsFTjGugkFMXZiVQx56teC2QJk",
  "key15": "Vpro2BbeLZZpitPKHed1VpXCSAEXZSeKUoPwvxeG9xHsJZq2jGk2S5GSguqpGSZdCJ9v8A9TWFau52kGCSuSuoY",
  "key16": "e7L7bS3fxKfhVdXX3AHAeSuNPuXHJTn6MUA16Tu3X33zgR8JtrN1p3VKischUF3tq6ZADSYMFVdvMxtBDveUPfj",
  "key17": "24wR9cYYXizD14UufkYNm9uw8GNvWNUUdCRpU3oxh229hpFUwXV2V4RfG7y8zJRzenBVK3SbFH9Z7RZi6jx6eac3",
  "key18": "2xxcxsjnwVsn56nrrJ6WTPEEPE38WCUQ6KhJXSqkEvbQpqPhD2U1kFd5Rs8f3WmJ46RZNJ1Q6KEK7XvuVWERDyFF",
  "key19": "4yZZ9wNYajt5ne7KBDqkkMgxyWaLYJucMktwzJB952w3dnkAHrdjXxwLwTHx3JK4tf9yrvHKALf7itHrUTurGwaU",
  "key20": "ga5zZDYA38kP8xgCr3rHv8Ufqm7ryYd72m3XK4oywqfHvM12jek5YjCUALHCKWaQNkEmnJE7ZRGCU4TQ5McGpt8",
  "key21": "63S4jRx3ui1TNwkBWd3A1ANdtYCeMdMcTFKE4Rgh7goHThkDNynkCyn7aiVHgX5Xc1zkRmkC6Sx5vuENcefoqZXB",
  "key22": "3mZjbfQUE7FsCdiXaempf5cELaJ3brguC9LfeY44i7itgbchYb3be8Eqyo3aC6MMznTfSYizbeVazTUofFBj6wNi",
  "key23": "4iHGdLK3gEUaJxRpTqrMfhuJUgw9sTTHe31RhGFXaWpPxjwUC4rfoPsQmuQAPagUz4eMLHhZHFSFm9GSCureuJ2d",
  "key24": "THbktqWxmGcMmcs4oBU5Ci2vQT8RG5SZmdU3jpm8qWVPzStBMBrttV846Drj9iB1Y2nD7VedebcMSQrVgksrDkM",
  "key25": "3qX6vNFoqKkcpFQLChkVbU2bfBB3tCX96oAWu6J3NcMzz9WypeUT7KaKvL3PfxrQ4PUGhUj3zDuupWgAvtcTNsTA",
  "key26": "26LHAeP3nCGHzYxssZAVzbDgfF8qvXCsMWsFk9xv6YsE1PQifBtQoXGhvMcq9WFKkdUH335d7aBsggxzL87kw3dQ",
  "key27": "2FQvULtMynqDnvXEwQXK82S7gDckaca6BVJx2RqREp9iw1Y2R1VUPvGETU5G2BxQuBuKFfPeiJW8uQZjqojY7wgb",
  "key28": "5YnxdjV1PW6ztv5uk7CpxT9mcLmBD6YkjvEBZcGSPrrxcSBMFtkW3eqrDZ6AkYb2NsLM4Sm53BVtRLNUhJF7SAjD",
  "key29": "4YYxK3824iEoBXwoSoCzv6CLJ79Mg8iqMdNkcxynhgZ85MqUMmVSaokMuaAjpT3JT9N2cBfQ3t5sAgcohJscotgk",
  "key30": "5aD6KokgnYSSjRKKWLLmgFcB5hCvkA5AjpfqhvB7MP6y7XZixDf47WCKirBPMeAVubkGVde35FwqNRYwYh3g3xxj",
  "key31": "4488yVcADqiZKKdPzw56Aj6jqdekgD7kwXRs2tZ9X53SoZrb1ynNciVVhgwD2bLXkDPzr45q4go8HzxSawPvKjwg",
  "key32": "3o9EjK3N1HSL53dgZpTZB5o3GRW3D4nF216VTrfjZdgZFB2F6Wxts6jGRQV6AQy2QkUPCUovyBYHaZepMwWb25MH",
  "key33": "2M8rmBPPagRzBrwnjcZiakQBfRtbgpvyK9yVtVEErgR1Yxy12vBuSy9iicUatUVSwo1fmvTT9eme2BH5T6XqB62d",
  "key34": "2ya43y8N6qrjvYPvE4Lb7L1bsfcrSp7NWhSUrrupe6BhkBviFXkk7NFR7GeFuSfL8U29sf4NTutBdimt7xSy9ULj",
  "key35": "4NLcw9BGo3V7ea6CjemzW4ypicveipGXsBYnaU7JubJQWNq62hLtBvdCF6X5YwnvZP6TpDWmeMgtpG7LADcvkQLC"
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
