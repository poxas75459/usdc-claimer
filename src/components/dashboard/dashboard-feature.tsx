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
    "5ji1Y8YvHdemstKEtSoLJ4BLshaZgiUu4aJfXmu78ARBGkvhT3s2gKLjR6LFYnpMXMNG8RHo66eWimZmABhni98J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GCES74o1AF7wCPRz1v7aFx2BdjkFLTCcFCUhYRkpQWf9TH79g7UZBxCKnQZurHR8D6w3sz7BhksrcB43z4RcTDu",
  "key1": "387B6otdX5QG319aBZjvNcnhZrqj9WKcXUigNB6KxTPS2aeNjcumfSJCydwjvLJoohsRWmFsHwcrxMVNRt9EqXks",
  "key2": "3Gi4P2dVATfs74rgque4Manjas8mXxNrNHHKVEWz8tQpSn473d7PdM9iFuBuTLqj7j5Cp1WjNGuCdrTzSEHGamRN",
  "key3": "2YCsDQDpgB7QtMVHGheMVW8JapapWDywSypXo7b3T7j6ZUTurZztjP58ZNqDdV4o6zSrQQqvwmbiKeZFwVTfypre",
  "key4": "2fZ6rdFudATJcvvQ31XZHAjvtWpbiVrf4KT2F1phAEGad4TePyKySK4t3Y292n2YQHShnBYbTfgr4oBEJzcjsfD5",
  "key5": "4mLJd6zh1cLbr7mX2oKJd42U84HiM33G7SD2BoJExPXPbG2YVAELXLMdtyQK9Wq39v9VY4kczoLWdoDvmHKNvLbt",
  "key6": "WYAYPbXwy4ndWjouqUM3NfDQX93EETeFRUEh46UDHbrki5na5f3Pfn5FC3dKUuutxoZYsi2YYjnuHc1Bvj1wKg6",
  "key7": "27XnBeN3jgy3uMbCvMPMzy24VQRcQh7vf2YxCRpJWEQ85JUZKzab6unZgiQ6eHems8WK8vjq7D7N5kMKNFDr3Pdz",
  "key8": "4qzwMUL6qF5388DZpBoYJDvhk4bPUQ6UJMhWsRppHHmGmbb1dz6o35HL6Awk9SYm26pBkYoBqBNgap6D24KShgUs",
  "key9": "2zvkYX4pjFzH8AGYmkcLiMTK5qK5wYyFoKminZ213REZrY4w99yEiiifbsAzsRjr1Af3vH9rFKJBcKgMZczWeWhb",
  "key10": "61iTfQ7nDzbL9doJCtGwSMiUZ2f1qPDGmJMF8TZQ9MbCPsyo1Gk4Akm4kyaBzVzCc9vjaWSr5qHsZfqYKpFWwSnZ",
  "key11": "2j6zoLdwEGxiNdhno77SfcsgzdB73LSZPQqvAkUHMw2XpZ4MoE1gyksaoZJum7y4wrtsFMnVz76N2U9U4DKRWfQ3",
  "key12": "2B5qUoGcoWy8ZfUA36JZVmZDYNcYMU85vFPyvWuRJx99d18WyDYCdMm6p5LxwRD3Ppx9rawnkf3YEFTTGNBdD7rw",
  "key13": "22jNSFestBf7xCtmix7jLayEUjWNkWfV4ZV9JKbjoYXpe4ZdPntjYASPpEreXgxH2eodZ9n9tVnZ7vUYzp7smJgY",
  "key14": "3QDRDbAs5RznP9siQNcnHU2RxU9sUHi5RySVD8MtyueTbaXUaKNhXWPA7E2dB6iaiZFNN3tHJLaY595PUSCQqjgt",
  "key15": "5M6RDkY1tQpYwUCPkFVgGepeF8Ssmttw2ZdfsBEESRaicC14v33F5W9MbAz7SyiL9kqqj1MxEczELUt9MMNk9ECC",
  "key16": "5Mtfef7KdqVM8qoTVEr12ZJDtmJESeZPv7ho4cM6LL7YZ8g55cTYqWDzbHusWxk5DQdsjdJLVNeq4hgM3nQfcQww",
  "key17": "4uYJPMdX83c6w9r3XAE834q3p7HrPnCb2jkBRA7gSeH37Wx2idSRphZaM7CGXJSWWYDkQf4BPLbRhgoiuR3PWhaU",
  "key18": "3ejdMgektX63E1TyLsiCXjoH4u3ekVFYYqCeoeG7FkanscpYN4CZxPsHjxFyNu1hQrtX677dKEgHeiPpYFiZkbYu",
  "key19": "3XK3LKNQ6XFWSmV38BmTwjQQ7fE4WeXcWyWnNQKYKbkpMv3gNLsqNvQwt9TShmjgZVtSMkzxaVtXsF5mJuxcFsCm",
  "key20": "4Tj7HoWZdXbmapwZEgcmrQHBk3zw5cU4dLditAEKsjkCU2GyuWoLgpP2EWfkTnAdegy9rzwZo2aDcXdUqNHWMTah",
  "key21": "5NDQ1gqPE8n8gzC5uaDFCJAohEVDe43Hx5Vs8TQfHEJQMRanUtiNGxaqdyZbTrXEz4wmYqbz8ccDuizaJpy7yPp6",
  "key22": "26MikKYWMA2cKb9RujL4LgkopqW2woYRJNYMtP9613dvtiJzcQC5UHx7XESqk1aD4bjCxW2KWMtQxiFDCmzArXuW",
  "key23": "4MF3WH1r4cPeWrmnxTgXXEZGAQYucV2Muxgi67nQoQ24emUh4sex9MKBDgu4P9EvLiMWcz2PJqBiZcbaNErtDgXh",
  "key24": "3JN5xhQ1HGXBiPHLz4usW8MXUWb7JjmnMc9FbMiX4j1KVDYebcjj9s3eZamp9k73pWNmh3b1KBCbaS1GhaSpXTnV",
  "key25": "3bdn6Ri8KUeb42pp5YLoLUzDRTTokPMAZNCgVqFizijSHEZ3c8vYDt99kF34jWudKgDYKPfRKbc1ijLp7HAaTiZA",
  "key26": "2LxxKYJq2EAjpRucSYMLeyQpkKEsaEBkcGie1KC7yyWYdX5an41W1TWdhx5ce8kr4d9tcn3qkbjwFZhy3TuoCGvm",
  "key27": "SGEZTRoEEbHcNaRj3QaxG8o5GdCzAaMmtSWvJxFKCaJhyy6E5C5BK3HXRUVGYk7Y21QrqR1dhtmfcTpdSPt2o87",
  "key28": "3YaLxWJwewCArSa4rxqtdJvHk8xLxed5faW3XCjpCYYtEU5y2DzigFtqJRtsfGvHYhb93g6w2zcq8pGDyBe7VvyS",
  "key29": "2tuihiu9VRAaszg5skp98hUThLbuerh4TTMaTaBomMnhng46ghmnTQ25wTXP6q6ya62zuUQbpAoLp3EhGUzTC2QE",
  "key30": "4vB8dQRSrGAPK4A4fzHJD7WavEEvGkqRx5a1TmP57VfcWCfgYuvG1QEMUKSmboA3keTtAdoNDT92T1VwqZjxbDfr",
  "key31": "pRvzrXiL6M7dRwp6BNDcjTduFGVmcEguaDks1wDPxfQfK8dEJFTX2EbQaGQJ1KoSi6koJPtrZFjJxyUWpL4VGX8",
  "key32": "32ygeT5T5Jjxe3FBbDfjhUHS4e6QKkHZXV42vhTuY5HxzwXMdrXHXHKKrdrZijPrYrryjeVaLrtbRJeYBumgWivv",
  "key33": "3g2CHnJGt4vwpwu1ETpxm69E86CATuGf7K4phuzeYhnava9JY1etATGfaj9qhrdcTUsY396nnCqRY9ydetq7xmvw",
  "key34": "j34uH9GociyDh6Tnq3gAArA2h8cz6KjxLm5dcbD9g3zkZ1468GYxEVsukLw9o5GXnH2MtYf1V4yMTLQ8Fd9v7Yk",
  "key35": "5RkSgjrfuGVFqr2cAoZpjfaWMP4NU1P8uPCqVeLRF49qa1EnsvMCQUW3zw8Yh7MAUputW3K3ep6s4vDzCkMXx8rk",
  "key36": "2sTxxVcrseJXqqcQvMVFr8my6AoZMtKgsrgBE81XEzPGHtLTiP4F6skAkwAoU264ZfTzzYzGjUKPiwiug5F1QGnn",
  "key37": "5jiuQ4Y8drCPSkdWWB56n8JSugqUWWyZbjhN52B8hSUxxEfjDbP4qyAjmmeGeGYsySsavXY4JhTCDL2DMv7KzEdx",
  "key38": "259FbcU6y3gKJZBDg8QNxFfGRSdK7yRh7BVirXpFNUgDUF441MB4NCtoAnhVyUKCG1G3nTPL5JV2oF6cJMVLY4Jv"
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
