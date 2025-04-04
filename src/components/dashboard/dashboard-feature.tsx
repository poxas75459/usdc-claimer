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
    "5WBZvRdu6TDRtYgLGuannY2XqdHzYAMuB25GpFufoGbXtLamFL1mxieQihNWLkP2dApihUFUUzjGgPHyT8uGiGfm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wZDJAdVxsjNu4PoqnFPqm7EyGvKnQsB3mXohPeUxkzcUo32GLtYaGdzBQ7ZpwkigdLzgKFdeHTJfzzEr16NvpQZ",
  "key1": "3D22pagEwTR64o9fXkm1Yx973ChQZKiVP55C8nf8rMR3EdPrrMGDtvwiab4PYAjZS3zqdnwzfpjjh5wMxeAbCnmk",
  "key2": "372vJiiTswRCKuiwbR8fHAezPG5KpzwsXwe13wXVFw2uj9WNQky33dCvzV6YJ3wt9DEgdtNJN6N8HfMa72SjA4zd",
  "key3": "2ruXuS5PVzx33uW5eET9ZJKPnuG6Hh6ua435PL21XtxR9mJRbFEQi71LSQoPkF2gYeUpQK7CtCTkp6ivf3cheXoJ",
  "key4": "44GaQ1nE6nkEgqYLobTN3dXUZtMCkJvv9GKvUj1egygeL9qEnaD1aa38k1rMmg41rs3fVnX2DvPrgjpaCjM5jX8c",
  "key5": "2uSm8XkbN3cC1X1Xzh19Qars7VN4PVyg8hLARPy1haHGeLtuiZ2dR1MEac9mkyo4HZvEsxj7gdmPAAbeTaL1Lz2w",
  "key6": "A8KJHqSEqnrnVuRSgHccxtQr15Jj4XBwKHpGAan8obminfTb4GNEcjttEraELmoRKt41MzaJ6y4Vfvfa7abPR4w",
  "key7": "3ZEM6fBGXrujz6fgEW3roqXJxRuJPyRMVPZXd15ViFLpZoxREvNpqnT5TzUjmnRxA7A6UPDtJZVrDdfsyeC86puj",
  "key8": "3uDyWgUNY9CqW2VirHdfNZABRWPbkczon1xAA6yijnbcob1bbEJqTgXAu5oSQVnZgHZxF1gWy5P6b5vi6oi1aS5N",
  "key9": "4XjnqmC1ZL2fpRzZVbCjYZVGmqVN6vNRjpofAFXMi6W2f8VwVy8E7FnHYQDP4osEtiqicX7QshyHwtU6sXBHKahC",
  "key10": "3zXXDJqozTjGasHk2D4gM4y113A4TNTDpRBd4Lwv7ZFYfv1WaWb7WemcQwdPzpzti5AUCeH7CFf6tdZvYTcejLST",
  "key11": "67FFKafa9Hie7hFzwoJt5pzMHzSyhh5wsCbdJbBKvfiUnYAdvxHDmA8uYWuiag7y9AsCjKzTb1fK7AnsvMVZBrGr",
  "key12": "3jMqHwhaiKBQRyRUz6DCfu46F8srGhbt9S6PdsCfr8X7wCDtEbWJWHGocUYpZm9cyJVWVXeXKZcXQPZyMMw7w7Uq",
  "key13": "45oKe8tGcCJ6BFX4E8HZjCip2AYzgyjB3phfN3Co5KbPSY596CkagrPud6iHcf7zVMfMSNYuVamiPYoa8A3eQywA",
  "key14": "4EjAK3xBySUmMD6R4jzNVcfQcBBR5W5LmU6v9Cxmu8QGh7NnLyMDjiEZz9aQe35gjKqbhE789e3xMTRTDAc6ddAw",
  "key15": "4XmcPmsXt1LgdBq6hVb6ZfrjRgaeoaHFnh6yNSCd2kpo6P14hBL5fXVGiP5S9JX6emgmoDAgCpoLL13go2t4pGX9",
  "key16": "5qSQVuvB3XJLbKpryKP3eKRCxVBRwQzu7LDSYNS9oCkVXxUKr7dPznHRAjYsyR3pdMod6khYPZsbBWuTPXyryHT",
  "key17": "3vqE4VymexQw2eWer8yfpZXDxRYnRipBg1NSx2hCKWvuCvEjcvK2SWGZNovRzdznAzwiw2pruq8695ZZZNDexFvu",
  "key18": "AyNeneB8cLcP9f97ag46M4pSjWeK1ydzTj5647GwAXiYBdmZcb3PqiDEqVaZTqMmsQmPnDFNSLasyp7FtafTMcX",
  "key19": "5bRX5qzCBWEr2gs1o3frZPPyhzmRVMy7SkzvC8BhkTPfsz6cJ35Pr7hfzXPCvXyCaE9DTdgTGihuCMiMnxaC1Af9",
  "key20": "9ieF2NKyjq3TLLZ4oY6k1anxiGrEHh6itAQ2ujXzTuXpZfJTf1Nzoz7tswK9UB83r4SZ34UnGHDG5ddrNG6cpc4",
  "key21": "2U5cXNcX3dNkcD2rQqKm4AMDntbGfP7ef2ALZrYWDcMcHVgS8gGttoskS8ANywRCKCgkhzBphdiM1jHqUEhKF7qC",
  "key22": "2pUPcHjxhF2wCsbxxPv6b9pPE65hFDtEC3H2SxzFny616HodbjinrCKjCa7izNrunmYD2hDyRsSAGR8Y192pmMjL",
  "key23": "2f8NoVHFeLTnbgCXRfU8VAH6iihbDgznCLVS9tosLHgtCxjAPpr3p6gnecZs7LY4ew31tue2Car6Dij2M28YegGC",
  "key24": "4Nn2xTRc4GBJiewkCwqDBjwUWmGzMv6xpkPsBMiD2NCyUdrXDNEsq6Hc71EEKGdQhYtt9Xb64CsGnDbCABkmouK9",
  "key25": "36KB7nE52FsWw7uJyT1QwYWKqv9gAHU38qY5vMQs9sxouuJnDgiCTgtNSdXhJiw7rKuk4JzDkuzzsWv8xhVtuyix",
  "key26": "5Jq4FdowxjbaSYrQxgA53Az44Qf5TuRMvTkDCeRbU2TuSw2xWckrRvpwrPPD4eb8YNLCekEAGpBsbY92wJmE1QTE",
  "key27": "4XQebmUQq2K6sKU9PiKNnF2RoaRj4qouhfnoaXWVMPihdVQoJoZzyJydS1917eqwYsjXxczdCt8jx2yMD6RDrbeu",
  "key28": "2G5nfsgNfgP71yYVtHKCbPvVXZyPZCenAP2tNz7RmDDM8kdrksrugFqBTVm1oxmWfXGPWjJUsbTE9PUtctHhSDrB",
  "key29": "YfqUqu42mUNhgwpqU47NhNsQFrj2d7i56SPHaKdf18ZsnvQ2MDtieUmrCGaWaQ37zECMdwGtdCnwACSQQPAq9dB",
  "key30": "4GouPjqZkzFZ651oM1JwhTHAJSfNkTbRJGmmLMXfxYSMuLh4KstZFrJBogC5qeJ49mMUtLmmezATYFjSCoU3EN6x",
  "key31": "386XcD2ttPHwpbikCiR1qFsWmi6PHMNT8VkKyyCsJ2eCiEzUZfDNCbrA5MVhQ1JfK9QncUoMdHigpCRZFasWfqdc",
  "key32": "4cAf8nwX18pnBeLuC4sBjswTNgstaQRtENC61mHx4ZyT8s2aCFP9YWHZNxmbUwUtMKjcnYQtyXpboKH7hGj73HR8",
  "key33": "24rxfwi6mCdFk85b3yb3aPY63vZ6mNPgLoe1CA3QXcSGoQChj3pkzWD3jhpZNKYsLtmKpWJaPiDLtuMEB55X99Qz",
  "key34": "hgxSQo1C2evwEC8zPQaYWNB2jvbHrM4sZSy7yUM1Pq8CfGYgE8RwXf64WN4po6fh3pGDZLJQquh9vuvzXpQsgLb",
  "key35": "4NFTWunrLt2nPvGNsS4VCzjwkSiyANgq1Bdkvfucpismw1vyAtanYduo85Y4thApPjxzarVf5phSngFwcFwjrcS7",
  "key36": "5RHTkKCK54KVmdhDSs1vcoCmcKHcLNrG8MhQLPMyNBkoeG8KE1QdQXk4TmzL4yiCKXmcJCiEYSBiRabdDSGqgya7"
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
