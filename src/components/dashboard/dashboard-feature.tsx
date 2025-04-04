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
    "GB2btUXdh3vLb7gGqDva4UUc8TXy6ANFdjdaCYAiY523niCFDmrHCEnZ2ajBCeyTXQ9Fa2fBKyeo56vANPfKd55"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DxFNGht3tLTinbuiJz2SqrLvmEjYTeqkdBAC4Lfqtpapmkg3tDZfiFh4wx4Qr9K9scfPEyRuWJR71VGf8JvtqWZ",
  "key1": "2v9baDYUvaYKXX4srLs46z1egUbpNBa6JTbJcE51er5hXQjuEqhYpaK6s77pVf745QhoLBF1aP8gCektCY7hxV1",
  "key2": "2sryREBN5brYF8WV4rBKiUjk1spQGdRBgKyeZfu4rGGxaWSc1sju2KM1EBZnD7uny2F1GKQkbYBWpGCTQnQWbi3S",
  "key3": "2hWVNY5SdzgXi9RvpQMhTxuxZaYTqZW4kKqFGoSnPbtB19sHPLE8quHhKMoBW6kKRvztRVtRxzE4vEFSnjZNFZnC",
  "key4": "4demSNQ4hNqzA95RAkFvygz9ijfbeWdXLUHSVFNZ1jQGpLR6hEesPrkfwj8XrqMKh2MUzvY4xxh5jNsYgCzMS7B9",
  "key5": "CBaAkJBKk4WqXaMVSjAuTpV4ccLLK9abmpsLgczwfsuNNZDgP2VCRr8b5tBMfiqwPf2aGPBYzZ49qxMW9uLcPDv",
  "key6": "4MwBjeRruAVbQK1eN7fKTiL1yLp7AsEQvmKCpqvFFrd3XdVf6nd44Bhk8APu7UASLb41trWUWGDGfNPGoULVZBXy",
  "key7": "5VCJq6xCW2bWytn5CBimYQyD6HFpqr1UHsFMXNPR7ECYKw598ET3Vva41oU4vKEuEjDg4kWtpYGm4Nh8u6BP2Lxi",
  "key8": "CZJPPMgnskQinFQZ7YunFbURsakU5kdWY5fzFMpj81SRf9Sosh8e8JLX32QHgbuy8yWqXmJSxGFxCGf2LP4WDZy",
  "key9": "MsPs2hbP6HtXd9qRARefZLEEx6NS5JobBUUAnSRgYUv1nCuSAwMWcWsUZDYHoVCGwWq32URVL3okakSNE5fJugJ",
  "key10": "47KRbDunKD8b9ERBhw5LYv7NDuvnBNptke4EL4TWFDnqJoHmGLpynj5U3vij6gdQqqyTH8amc173VQvo94Q7KHVV",
  "key11": "tSfv9bKheWb5QYnfUjHxtyLT4jZx8HkPKuxTGMkHiQYcs4RqTNTjLiZ32m9kcfrP63JCaUmh3ktKwPGyfKj6x4h",
  "key12": "uHwLKm9G4uxA5RxGv7GucPwN36GGqghLCVeXmejLxS2fjRcpWBPMtkb9ofvf9ciYf9Z276oN2xJnfqekAhGi1MN",
  "key13": "3DaEKCEkJWhCtYHudN3CdXxSpUKuSsrMjiCkR8tAheioQ8RVV3rZpMsmJDQGnYetmBUTwpjjAKCKm6MsmxvV8WLj",
  "key14": "4xmKuqjaQiJN1r6pPapJvNrjVLxFVKShnPKkAeau11Wu32w8v8mtHTFqsEaVd4itZSs4BsdUgYfshUjMJuCQyeQn",
  "key15": "5AiKK9PrSyHGhqhHryEB5G2gQvDSeiyo33C2gJ5C5BmJbhf8PBBPqKtfD4mD8mBf3x8YbXU9MHCfWWwwzrRbEySS",
  "key16": "2tRodw7r8MaVqyLMmBXFzTCaSMJVRNzxD7YA98s9dSKWHhtYHmGLC8f9v3hzyjSzWD8CQEYcoSB3EpivMC227Z48",
  "key17": "4dtpMx7Mei2BvECsHzf6mtS7iUtsfoGMrx6vN6vsefL8SVSYFfR3HioctsABs5iqnbbkUhqZhQ3bH8ziJkTFS3Ub",
  "key18": "hXqnJHPPFHXzQDQqofPqxxHWM2TaBa7iVGtWbZxQbrgVZeHYWoAxFXt95JueEa9qyR4Y9qaseF5pbTz13h7ST75",
  "key19": "4aX8AJG94Jnk15g7JGNz9jGeD2bcFLGaQQSuw3CPjN4qWBfLrNasRX4mPAvZGQ2TQYWpQLeAGw4FRYUWcVnt8MDX",
  "key20": "3w6zV7X8pnk2rwrm7oCdgHdHY1Zc8GtSRnGhYh47pWKZKsT6H3j96vdkzV1Srv85njkPQwKn1CP34HGUMzYegeoP",
  "key21": "32zuKR7aExCpYa4zX1jxaP9sYdMiW7Unk1kJjKuTyyvaL3FRZdrTi2hNQJxfc5JMTdLPMbL8Atktkc5hskoEKxVm",
  "key22": "5p3vpSrfatNeX5TcESAbR5iEmWQqiLQRjJHkeTBjhfAkd9NvaNSjpik6csoP7T2J2SH4kSetXPTmFjy4WPGXq5U2",
  "key23": "3kJaTUaks3qnBAmZ5AYdnP5dEP8BXoR8zuxVsL9qp3RPrAtN2K7PP2pdKfX8npC5ZZMDPe3NbP79ccSCYbfyosnn",
  "key24": "2QDLyAkBRLQPEx6s29jSdNGmTbteNjkVzbGhNtSvBV6xdt7W27hKLthZdA97CpyrmSNjbB3gvEBn3k4PnzgiYTJH",
  "key25": "2P9szSuGtK9ncDgKupQmcEDy2qdXuAN4SuRmFn5dD2paFnQHoe9e3vfouQxPXQPvPPHfvvLvo6NZSv2BjmFij1gR",
  "key26": "47qkrsHDrcNFNWHsZgx92gt7K8z1kfKbUtsooy2DfhWtbCTf3z6bHWWp89pzNRoBQVDTB6hgtqQVG63ZHn4txpjS",
  "key27": "5Sep5DMY9V41iTMjHUg8PSGep96jCXvPk3tnFrRnJd92yVW9yvSPu2jRW1bQhZAWAhrRMmbr1h5JQ3EG4d3HiwFq",
  "key28": "593yE38JsCcGNw7iWrdG6x3KSpvh1QXLREsEqnes4M4imVdW13RUDYv8XSHB1VAKWDh4WWr24YZPwpowc7Xr7q8",
  "key29": "3rZsEwvWqbPZBwgGsRABdijkUqx5aeTJnPewGpx5r9cD1qGJJhREfNU4qYw3njnNw7w56Q6EazNG5i7rckPGMC1N",
  "key30": "4GvDAzykXGFPD817yvFY2c4Ud9D7RaxYUkk3Z7RmRyknMex2uoPgeiyyZWnQbp1DToEZSSGYANezKtxfLv6w5DFK",
  "key31": "24Wi1epog8P3B9XqtG1qjzdfkCEmrqWFGABZXr1zqCXp7swi38Zw2PYRtDUcSQ5VFds3fowr3waXPGHJTxAejdKo",
  "key32": "Qv6UHBRbagvbf5ecDsxkBu35hFUb3VxXT7RRTBi71FRqXrTTsvjUUmoKi3PVSyBWJsWz2kxmars8vhkqQXvLXJm",
  "key33": "38g2sXyDjJHWTiQuDzaD9Ez3uJhZRVAHYbGZ9ffuEupL1aqbVwS8ULHW7TLYZ6gDw1HENqqCqwc2FMdLtC1asomg",
  "key34": "26X7zoyGzstkiZDMyD7G9ziTEHNGinBAJXC7Dm4mbNU1aVA9E88Fuz7W9caZvsBhSByN6rYbXDFhTP4ETrbvzEQS",
  "key35": "2v293KHPsdMCxSFjjgPBvzr7ZF4HU8NEGCjNFAXBdTtX1zfnJaULeGjJRYLxJ5TTsKWVVVchngnTq7QDuahYqMqs",
  "key36": "43VNqX3SuAN3qRuNzBfgsCLcjHaMR8vMhmE4EBK6SWsf7re61XkCmJWwxaqDiDtYWSCRMDbt6nzu4QDcw15Ph2eq",
  "key37": "2tpkr39SB3LamAtbEDXx53Vqup1S12osUSNQPAgJ6o2dHLirUk5EmToAP7TF8cWybpUhNXB943KoT8Pxew2p2u2Y",
  "key38": "5ABF32WZ5TK6GGo8CvxjaTduGi8XiFA2soEnrxVrGrQHagKYXWFnvpShvn6aJuAgwoEMSzdWTw3zwpecwKf5yPiP"
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
