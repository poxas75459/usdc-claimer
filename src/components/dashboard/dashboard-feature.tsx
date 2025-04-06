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
    "uFVV7vdGNq7NeqtUpekGssvP4CHML31pZQJDxx3WsgEvC4K6CDgfbRxLzym1GgB9QkZuSxC1bdSTDR9UL6DhFE9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gWfiWR7RrZXEPQovsiFfi6Weumm3KsXxZCwp5ot8NqGb7XWGvV6LMj9tWqmo2y9mPo2SrDHLeoxErYcCmC74jqj",
  "key1": "2XNKHjTfehywpuTy58NASqBrVzLwJ5Hk8VrFp7y8GkbE7FCGh3Rf5ctowXpJuQax3kd7xbZboseNGFJMc7cuD5wz",
  "key2": "2rhhriXNavVTCq5dmocPHZF4SRk86W7objSRvQJbUsqg9tMfZAfuEsKL6iccvN8PRjw9GdnyyCB8wFBRuB3vMpTY",
  "key3": "5Vz7qfMsrxBDu48akm5nke2Nj5SUrkGyUtvVGg7Pu5gCMVmCefaqNJWqxLWeiwvTHmHyy9vxLKiYNjS3xCAbNkqu",
  "key4": "3GJCy117puguiaSEV9ZLaNCpv1tTqMhbnY1xmp84T6BMpghdMw6YftxKVJ6W5QTeGS9TcQ1pZxuLmgwKRC1u6yj6",
  "key5": "4WHPudYi6V44bzkR1x1xh8rB81c6sgBK1AFNybg5rn3fingyYbtrxdP9StyfUxJMQoDUvpwyGjsiB94ur8XHo4e9",
  "key6": "KXYhoM6ieeZd4t7ofzm89WGcz23SREgYAwLjWmzNDjq7CnFW1VTzZZktdY7RayeopWWA6MNU1wejDnk5xUZQ1yx",
  "key7": "4eRMvDGRUv4y1TkX4Nz8VcmzJtuWHrj4SxquJo14dQn7nn5ASZpPRMkcJ4EoNjsT6EY39GVdcPtkA8fkQv3NAbC1",
  "key8": "LQbnLzWufuMfxCLDpoX13rgChBBLo46A9BoWSa46g3GUUG9qTbQGeC56Rsn6A8zGsmLhiZ2bGq94yeAEv4h92iG",
  "key9": "3Nzg4GdhXfbjV11LHmdKz7JckCZ42r3cfAMpZ2hRLE7aL2LcEVZNhSkQxZsN1P8MM1K2B3TBo8LYvEvp8Av2NYHC",
  "key10": "mVXYfCoUqX6rRZfXVrdZEMGGzMzETbcL9NLaZHT4aWEaC6zufHgDUTmjdu68K4N86u2wTvh2LFm77Q6bPXc2pka",
  "key11": "3LFjuxkNsrM8syXi3J6VktJC4QRzpmnJwHKKJdHeEbsFm25W2Umb6Fxzd6f18cSa7KCtoBWuAT1bsgTWamJ8Zz3o",
  "key12": "3ozPS4w2aX7eZRfjkCSHDsWQeWH5pfVSCMEHNn1PSSmsbPMNxWnKXgjM8D1iCqV2LCp4cZKH5PaaRoxCeam18FaR",
  "key13": "23fSfBzZv7bDNwwoo2JPKGEZ9Wd7FvXUyhAE7RHtErFGUsRbQ2avQSYDanqHtcB1Hu9dMMWRDYCTVxaLTkyxACnu",
  "key14": "4HbivPmuoAP8iQosWQGWsPmW8Da6A1AzVdgYVLKTnj24mMviuB2TT5QGSoJrqL5grt49h6jqFqbbbdXbicqP1DDA",
  "key15": "FsG4E7UnSqGahQftbrdRsscvYYPXTcuqQAsdauBEV2TAz4h4kbr8eFHULYdsfZ1sJ6tFBn3c59qXCy7YUrS3ML6",
  "key16": "28Mm9oFLs3sWQQVxwWV6yNYVBgxxksrgd2kNdXPUaDJiqPTdLKCFNXkt5vSxQdCtNdy9t8Hzs7HPmMJUkyonrmDe",
  "key17": "58QocihdyDSDEDrBrpQhF9gTf4R4DjFryV3CTuBNKEGNUkPTCdv3kceenHnM7T72J1xoja5cgwoYydCUzejs54eJ",
  "key18": "4ZuvTkVEYVvfvAMiNKRW4UWGRLPu4tqSpTVBx27EiiF9aojpo7ApJbexoHczaP5zbLbweUNWyWbaShGzoaFUkkhP",
  "key19": "49jxXbs4KyCvSuktiJGL84jaVWLBfyRZBR7s6D9jk3z65RMxdRSzS8c7c5rx4fkmB3p9kcmZbB7HPMwmWsJGe9VK",
  "key20": "5Z2SodjTkn7piQGBp2XgSkUFgFHHgMJEPsVW15mhkmpPwztEX76Yhi1J3Ybpx7KMEuyDbPyRo6Qc3VnBtVRJVF3A",
  "key21": "639qG7U2orZ9AujumVaz4TLN5rxv3pZpQeCi4vdvxXX2vmNGs2hcPYyLJ95RAo5c62FXxBGHek6jNybhwUbiT17n",
  "key22": "3FHTRCJdvbhLz5uTZdxiCSBkB64KLVTGtrrqJeZay8N8Xntg2JDB55X7u9RrjBbAQq2AjSFctmehZNwJe34TnTMm",
  "key23": "2tSRqcJLuVFvZab9YP8WMtb3qADoQjQFk7g1VJqhyb3ZWCND2oY8ZtXnTjDJKCxBat4s4pdTKG1pVTwYGe93keXM",
  "key24": "5YLVdUcgq1g49zRSToUrsb5vDMHbVB6LHdyLzrnoFV1k1Fh2bcJ8V1zMiGigVMjjNTHbWYRFFpknBPktFC61zFbN",
  "key25": "3eWyrXtcprTzd8mayGPbPQ4JhcB3YvRENRxHJLqFoGpVoAowgNTUDjDiUVtQEqNPVgxVRKvhmM8Bb7qH5B8kTt9y",
  "key26": "2XqNePgGXTrtQo7iaaV1YXatKQip6gaW2diw9BtxpBsD7z6U3hDQJVc6nR1iwhyZph6j9ZLLreUgqvtAvKcisPuG",
  "key27": "N8x5z49typsvCJsxvD1kJHXmkNvXpoF91KX9bAq2AKX44ZXvuxnWqWjcEAXcpB8eMLNthCmjE5uGNSXcD8Fm9bR",
  "key28": "39bBeXGevLyFeTnZq1Jgc2e8WBw9ypyLquuxo3Ru5qagFB7EiRcryv1MJk9JnafG8cBb8yM8cv6BGD2PoRwECvsM",
  "key29": "2seXo5q7xMrESXUtDtwuHjGeTJ2uGAnsU8PxuURSkrpgTSgnYtniXXK3rSUHPJdV1SZvQfDEaVeQ5EzTeZNderDV",
  "key30": "3T1eCygHDHSFKPK2F8a46agZXc7sMCzcbieJ2aAMgCxnXjR18GKT6RrUcuGgpTLgonKqaxX5Zd1hwd4ZZE6r2N4N",
  "key31": "4JuWfwB91LV6sAqwtbcsR99VwsL4ZZpZ8LLWGXQJ5YW9Pfem1mxXb4LvENpMS3fUGvLC5fCUEbMG5pkLWBkERa8v",
  "key32": "3sbd4kUwggV7rWWG8siZeLPLWdCceKK45L7URosmgDUj94pessPP8XYwhz1uHAvmEbFhQik7671jGfjo9rowUj4D",
  "key33": "3yxw48JZCMj85mvyTZi8j7KefqysUMrn1g8NvZtaVgZfHkowXkjmKMwgWMKBVqR42HhnezRQHgCMYtGgmjrGmAEk",
  "key34": "gBYbbHhNmxEZ9NzQhkouTVDEtsu22FkfrnmPqvEZB6UADK9Voy7vCgrvQK7EYj64zB7W6ivm1dkPQPQPy2y4mxj",
  "key35": "2sze3xZUeATSceAvpQbQjm3h7UBpQMGA3EYJrT3snf3FTM9YT5yp7fCXXCFv8qw1qtfsRKoZwLLAAUa8nGx77DMo",
  "key36": "564JkuCcRpb5LQiCTcZEcwQkRUCYo94Kb9k9WMYquNpQhqVz6Ls3mtDxswgGzV4aFnMDa8yPbvYGTZqY47MDnKWX",
  "key37": "5K6szT8YDPGAM2MrmiN9kgeWf9YqNRazCAAVvuWqzFWcGottQzwn7bsURXomMqC74gEU5Y529xwmtiuMwgqiGogR"
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
