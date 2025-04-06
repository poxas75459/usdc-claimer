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
    "2acRYRqUBjJXHUWJKJcRcyCRqeC3AiTntPmA1ysL7Ba2TpA7rL5Avfv4ttCA4WQouoDzThXazTHZV9SYreQpRxDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JwRNG3kxx78ZBnnEZaeBnABkCq22UbunHtMsRpsgMvfari17ju8mzSUH2K2F1CS3tRhaHMorAND5o21GoXnZJu5",
  "key1": "3KFvYm8miP9UDFUVX9qDm99sCAUeC3PdvaEomaNaaqMqLXyBg8WnEVhSERjG9Wyz44U4jqeFGp2UxKTu6hVhZbdw",
  "key2": "5KXbnyrji2p7vhZf65qhiaHbNaJMTKTydUW1Cjcahm8wwdEPUekobGPcYLMGmsEThCrxTBiyo6vphfRVaYynwzmt",
  "key3": "22cjDQkUF9zcDKwh5HDRgq2ESvy4ra1DyXb7EJADF5pL8bEK77SpdQNEZfyenx981L7bfCQ7E1dCxHaiz3DtQPFg",
  "key4": "rN6zdx8R4QX6ceHwifBgxYP6CwyouXbJmHX4x5vnnDfuPRwA2UhCMeFosSseNUSP6mBKMAG1MpUMXnpYi4p982x",
  "key5": "JKKU42hRLeFR2ZKSGm3TN7FBT2StKpyeQ6f1bRVspBGKUnje4FVKXrYTmRgMbGqQvzuxMdgG6aZP4F6c64ZoeZ3",
  "key6": "2exUmd17LsqZsaPvddjZ6ubkNYf3Fuquk2tZu1Qu86BWp28HoYDqbPyTq2V5XYFEZ6nVtmSro5g3TzfDFgcjjU7j",
  "key7": "4f5HBzu96fNJf4tjcHyzbkgTNM3nKKDL1772PeMHemnqRPD9tq1HtTTuJYPfbqvpkEaWuc3rXpzD8dfTXxnXiao1",
  "key8": "5tDQLDxkrH73SXJnmoxm4arQcBrGiqipVuL93kSw5jW73EbgtJidBdLydojfhZnvUmz6zYsrtDTB3vExwLSr1fT",
  "key9": "3Kx3KRtT64YMu8n1K1VLfzKFzvKkkuTy16BJz2N2EMzNpgm3mnJsacz6VFowHcg576gCdLYbcyS1azw1i2DDX6Pr",
  "key10": "2KePydTvMA7yEgLtJSNn8Tab8cADiA4T8LUxNyC7gDVe5pm1TXbVrLTez3QuRpszKY5RTA3DXMk78egawi7wtaHH",
  "key11": "2YvFarXmg5JL1setDmk3JZ32wWhasvEYdjU5eTDwCALQWaiL6aiZAiZ5p1F7Cw3XoQq6RKHmkm14N2wJVCpJfbe6",
  "key12": "3dCqzPJukGTSfDYKB1L9ARQSeAskV3Pju7fKzeVygikCvrX8nV7VkKeUfEUJKn7mo8nkdmkhnoJ5q3gCcsZq4t2j",
  "key13": "oJEabJcJTK7Piyy1Q9ioe2W8AKnWDnTUVZS1kZh3JVUVnA3pDfyjzkQc1NfVZcWSuB6MGfMYHdDPnLstGkMF3qD",
  "key14": "2z1QcqxaPz1dZnXk6z3L3ZBY6AAqkMkfUAm4hbAk9g2iBfz6DkX5YP72Ai8oUeHrE91B5UK1nSUvqwCbqYUFG6oR",
  "key15": "5PbWwVrDyDX4unCuuRwDaJBxdVn2pGNYarGXQX2dYbS9571UA2ighjkfBeDpch1JsrTpUK4DZtNnYAqCVUJyN2E8",
  "key16": "3GHYQHiEir4wgrYZJgXHL2i6Vh66pufDtMAXtLP67Eu1ydoDieMBvCGHtdh7Khx76A6qW7BqjAvnGCJa6cYJ3LKh",
  "key17": "5RVJuzdX2XWm5zY4LiVNA2WQWyTp4PChSHwugtxsYDWJxS7MxAsrwSKffZQ744Vk75DnxQEwTsZJEonxrdDANJbW",
  "key18": "xr6JwfQnFDA88XKt6ZDLroguWLd1dZNP11GGqbKYmREDuQcYng2HARTYsjtqYhVftDjXigFyUS3NjNSJA14XKjp",
  "key19": "xqkYGGeMiEWUfb4nG7qZ81aUo8hSDWgkpvucDJy4etUcwnqJWgN1d4mYZxfzkT5y1zMbaE9WU6tVymNJmMW8Jna",
  "key20": "EqmhDfVhzMDy84yS2Xy5cLZn4Rzqxh9VyuuCAqthPtY1227VK3dZaopLhvi484xDmPQyRnTmnaVSykBvg2GQt6j",
  "key21": "48dW7NWeeXJoFyeuJV6mMv9xeLFBYwKr9Wgx1jyuueNQ5ooF8FByudQLQdVLaEbdc6kdbf2LjcLGvkfcJCVYgfNs",
  "key22": "MQiG59vFwDVpUvBZbxhNMbk815LR88otPyoTCH43mmirkk4GRSmy2G11fsoYsV3juMkAJCQVeZKmS6x9yh4un1G",
  "key23": "54trgMau7ebe5c76vsKJL7YGdiT96v3FScMcS7bNbpPNyQgoWC8mc6CEoNVvKG2dMu4cdVPnkB13bFuERaRjRqcM",
  "key24": "4XE1iaPqh5jU6koJz25Dtc61kD5c4XkVShYB8x2Yjn4Dcfi5a4nZrLYLkicrgHRP2Z9KBsvuCgQEMdTPNhpMMoX8",
  "key25": "2zVHiMjKuZqCk3oBhyk97dKZwC81JV7Yvy1csiRarx7tMtXTbw6dNNeGrJxnMG4zjSeuw1WpjXeHmVRej86uLeSr",
  "key26": "7QHfHgfN8qv83Fji7V1kprZH8AqvyQLz7fPZ7KcTQqoWSKE1yGbRmGbZrntNBgaopjavujw1CWfrcebvTMZy99W"
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
