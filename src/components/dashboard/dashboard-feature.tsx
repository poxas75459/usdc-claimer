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
    "iqf2LpyWLJbZH3txLTKL1Et7kNNWR2YZhSzmxKQJC1aqXnp38aBvVqUwqqtVg71kEP5h2BqHSkJM68J4jEZFx7i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56ZfNtB3YTEYMyZebbWNyJaZJ1hwKwM3bahEne7UhyhEGxmZaXE1oECCLj9w4heMwtrzftRujV3EKEorKRvCpXhx",
  "key1": "5aiJX9SxZoCmaScdmFVtb3DLPzHRYBRx9j9fepuizpWbdPWJgfY5JTAiwUnHs1Bk8eSRnb3G98sF6Hus1wyc3GLT",
  "key2": "4uTrxWy2PnfHW8AU3UgFGfUjKwKZCKzEpccJ2Gfnoso8rf8uRSw2hZm4vjaRJMHqYGX4VT9kBkbrhjauYM1A3zJj",
  "key3": "4ZYgFSh7PamEPDzDhQa44mhLFhossmpN5AX5LGLpBVnPYt7k3aeNA3wnzqbkdvB2bSwWmrv7dscPx2ZCcssNP7Jx",
  "key4": "4dTxgSv7T81AqVFFyasG3WqJTZ65Xn9kXScHKnbfzfgKD5KWrtwKynb8VJ7byaP4Hjt2RY3BB8i4vrJLXs2w9GM8",
  "key5": "od9Se7TLnsmdQdjKhBFqtVsVJzHwjW6rGFWhuGa7TqF5KBBQYqNHWRviX3JJhtXfSrPFAuMVyaLXwnsSSKM63Vy",
  "key6": "65mEhdfgCQ2dSZHX1yZ949zsrGoG1RcgXAgKik3SrtNCr1yGQDrK3Eh8NRAqxBS4VwWKxyn5BU2RTQo1ktQXUZWA",
  "key7": "2Dt1vkUAH37xiWZxFScooQXEhJn6V1VGKNHRuLAYQ2zLBzEQC1qGbtRHbYSzdSxSmG5pgaWrFJ2CxDBrxakQgBK",
  "key8": "2JG6vSRXzaNK3TDNaW29g1p8c5iF3C3hijsNs2eQ6yDkeEmz7L7qgsoBxcfPnT6mXEnY5TMrVhMJki3PR2TUDvfM",
  "key9": "5QN6JRQpBT8kLvanAtnRisVrW6nbNZxED6DA9exggyLddjiXPjHBdGEewwyaJww2ABwyQnfkzGiNjHQgoJHD8oSS",
  "key10": "4iUjLpq8KngYD9Fh11Q5MdX1ngtaDmEgQKCvYUn9m8bbzkVMC4VQgQhkwXWJts31d6KzrCptj8Y9QtbzZdABoSrb",
  "key11": "2axeAxZYQLKwhYanz4WBescJh6EA2cb2o3m6JGm9vB9j6NQqUg9sBJcCA3VhovVYyC2JwDkfbLDBiAnSHV4yBbNN",
  "key12": "4BZYEp83h6Cs6XzR5pGfpVkZjcFxJ3Lo6RdTuuuPc9tgkqJSRP5gvXDkxCaQa7QEKNABR9Y5f5yfxnPhURUi764E",
  "key13": "3rUkZQzts4ESDS8SCdFyomK9j2PBn7s4VvfTRV6jm4uv13BeMwuNM6Qcb2WVM76pxNXYEaot4GUt56FjyhACaUNF",
  "key14": "43gqg2vjaUmNp2ni5C7qX6ratF4CRPgG5EZ6cjYqefWiow9m3tevyT89hXf37gLkwhySMg8heAVqzgGc8u97Jiky",
  "key15": "64ya88RoNMqeAd7uaPXFrFoNTTvjFu5KSXF2FDVECZoJzNcomBekWjKk2smiNYQ45ddZ474vptDvMC9rxYnJfmxP",
  "key16": "4BAnQCMWuSuX5yV3xRFPNKs8tcXTYdYL7uvYFXCrm4wwGMYuoaTZ9XWZEqNXyES8sUtpNyqQhzow66W84BmUNHTZ",
  "key17": "4tkfgSDyVUn6Sapg1k81AgUYVrSqZ1BfBboLCXkhph4i74CJXLEp1UTfTkPTP1EWFQ1pepBxqLs3KNFqwGtP8TvW",
  "key18": "4PfYy9qKk6cKNU8KKugg3LvLPUGMEEu9r2owtJJn1ifwpWVJWi2xWTLmycaEV7XxfegEr9BVt23yMfntz1Wphpth",
  "key19": "4KsKXwBEED4VkpwU3QAGEFHuSCcpDFtuGE3f5Yyrwhq44yefem5BVaoCbVKn512dXAcAXsNBzU6vNki12SiekRxZ",
  "key20": "uFo8Jz1FKxnUnWieiWc8xi8bXEGwLUz3vhJaGstqRLSxJM2EwP67UmuntTt9KAVMMtK2orp3nm83BGDxppTGkWg",
  "key21": "2QikbX6dojme8K4N4k9ByxRsntiks8uWpyDuNUbQbKWj7t172kuhXLEPFVQcA9TfBM1UPvqFf9gkLXqWC4iH7BMR",
  "key22": "5wECVwGWJ5nSiQhFj9HK2mXCudvpr8irGmEYTXq2ryNsRa17bu1ALxf2Av1Nt5LpWmiKAyM3cWauzkaxRfuvzjHx",
  "key23": "3PAtUtDLEhS6dBhS2wmbUoiwQcHJHgdLd5Hz4sLFt1mvAmmTaqPx1WBcjbnZBXiwSy7vxTudAVAxsp4BbtYHGqkg",
  "key24": "4bduoUArKrMboAxbwFETvtLaCtzmkwEf8x66oEa4nZTU8LXREhjeRuCCSonmhuRo71uNFNNRM1NW53zNFknf3URd",
  "key25": "4S6tVDiCBtmu4tXcrFDhmU7Wfxhub7vb2ee74ZtGZNQQnybRzJHYwmEjLNKhaQRPP6V5n3wLSFVx1Vhwi1Yxj13i",
  "key26": "61F8VBdDw5Bm4gnUJDahsTahkYPf7Ty6fK4wAY4pquxHTL4DHjLgxR4GMpn7mTSZ1xzu1MSvkfmQDagB4uvknobx",
  "key27": "25hR8Xk932Y1ew22eFmynHdNRVV3wGCMRiK5osWyjg6sQsLNgqLqmLXxDGNXXJgfsWqofZXWtbF1TvqZf6PxDabS",
  "key28": "5LJ66YhpauvyZZ2rpM6GUEEbHvcF4Mt9vyaFWc7MWuT8Y9nAXNu3TQik3wTX14uJYcDttU8CD34vmC816DmbAPvr",
  "key29": "4fkzDYGQKLxZVGtKALaVMq4cWe52kZY95gUQk9Fe3tpRgfjowobBD9xH85CZW1NHRXSSVVCdK8qtwYeigEccNT1K",
  "key30": "65zmQijUiVt9YufJDAoFsviuwNXNSVXE2A4qDENJD5ZkXJ2jZbixvfoNMcXzgGbsuhqdP1od2xCvSbHsritx2gAe",
  "key31": "53eySjhD9Jbf1MVGftgaQCTtRG8M8E5HnJKEpLnFg1TVgtf4Gft6CH6XqZqx9LssNYE6cigDJaAAJvD9jf7MZ3yZ",
  "key32": "2bjbXe5o9zEkPWnvmu7i6r4q1uAFYio44oNPa9JjN714VH1PaLfQK439Uef5vBkLXVHhjrMjjJnjrTvV5ug95XEz",
  "key33": "4sDPewLjg4kUQcw1XxTaqCi4TA4RZdUKKJzB82LaT6wE8CDXwMfBzttFwhPcZqjqqCBTyD2eEW7EZUqXuaAqWNNX",
  "key34": "aeck6KxjChMWHtzMQVthmwkn5muFuEoiLS3kzi7nvJoAfSSpPhZApdiuPsVFkfAWjmdAr4ebx4tMbdr35gAjX8m",
  "key35": "3JCKumnPzLwNyKtcxVD9GDypKvfAWYWxjpHB9zmQZoL7Gv5kRGhkZ1A1XuKah9nLV9RaCLccVPc5qn3cCLKnSCav",
  "key36": "3MjnrAfyHjrwKXTGh3cXY4MJk9y8Y9nPqqbyrkGcJSjwpG9nLmAsqxmD3iBrowvGQuWGYk7MrjeP3QB86fxwjQNQ",
  "key37": "3KqTx1GeiNsi2CHMEEZ9BWJXN82yGEUxC4enjz3LsDwJGZ53bwpy1zZpF2Y2cqb2qWtqkjRxzsyVdEpGYxQGgEwH"
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
