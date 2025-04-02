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
    "5uMzMLyyukCE1wGRGXn2xw4biv81ynhnVtFLEHwggs1NiJSS3UX3kQ3N4wVoTrBCjubpb7Rd4a71SFMNfNZVvPvm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iTfPiTqgSww6RB3aYHEHy4Ls8hr9Z8RUgdsBbaHTKPUvZNjUh7hons9g4V4FujNvuVBtTRf21zRxocBBrHL7wdw",
  "key1": "5rMhWhYtTFCq6WcFzKAgFc9dZv4DxkHWaUqyyN6ovW49mxvFBGka5ZdgAZUeFq414ihQkdiYJvfQWc17SgRiQtcS",
  "key2": "5ULMfseA2vUiFAfMLQgJFUJ7w45SbxqfFGQX7EmVs9L5XzwrGEeb7JBzgcDjvmAr5jWtNsH396ST21pLU4UUSEEG",
  "key3": "2GENgZ1dgJ9FQZdW3aBMZ3SDC8CxDojiqMRFN9K2sQLQzpm472Rsp1VmvMa6r1uFrZtpc6CNi7BZX36G95DRU1XL",
  "key4": "2RQkZRUD5WEiocrdh7aK48FCjf9mLEKq19R8tvWNs5wjH2DubHyAH28jdkhhFiw2nFCC5fiUwYikXRQETwGC9Qtc",
  "key5": "3xxW2fRziWz1obZiqn6kQp5W89Cx7F7x4Cao6JsAyVoDeTgNTsFaxDyE7wH9KDFzgqjdwvHbeeymCjw58iKKjMkK",
  "key6": "4NXbDQH2VSVd8iu2HazDbdJFH9GoQcCcSxctCjkoXEQRr2CQzRAb3U8ssCeQVcszPRLiRGA4AimbuaFDsAupkhrV",
  "key7": "4FBdAZn4FMwUvWyG9pctUnB3axtMLpN1812djzx7FjYhic2Tanm4xRzCF9sVamm84ThoVJaH6v3wmfuf2iTz6gFQ",
  "key8": "54ThYC569oLobbPcLASr3P7az6SUuQeRA5bduvKxnfCyA1AwmuxtLKzMTetnwiQdbeUjt2YMg9eN7xC6ZUiTEk5J",
  "key9": "5pLXtr7bfPjmK82CArH5Hb1Cw4Gh7wq5TbbidFwWwQnCWA4ad719eddtJA83y3f4z3dkMBgxQF1HcKKejSxQpgZC",
  "key10": "wa7dNpfSdwU1fYrmevN8S2Tz3nVHmosXEMUbrToDbstwDhE5h5kJhhj4hnc2EuP3RSMQM2AQ21EbGHi8pxx1pPx",
  "key11": "2g6aQGhfX6QKJXg4rATDA4EeQum3Rvgb7UWq7VZPkzX6eC93Fg1vZndfV1geMfuryXBSNo9SWKgYKrBmH57itg5S",
  "key12": "5zjFf6xNW7QCDBaBVAHTyZ1iWYMAG1Ew7kSrX3ZUvTGCbXgRHrzX7f4u2FVfwzr2H2sn2vZVwTMnyBecdtfNkvjF",
  "key13": "aLoLVbsUnDQa6Y6MVcuvikvfTTpHByTWHtkJuqqZdBR1VbydJNuoaMt5gQB2uaVrkcu8RfiWTpm7E9K9NnC8cKp",
  "key14": "ooS6okiZdpbvFxwMDVnVDGpH6zdHSSMK4UAiHjELtHzRoN6yZ3hsFj8buuTV9Mvm61vwURCNEVuFhHod673A96J",
  "key15": "3oBXrkj4P5VN6p3ixp8Yh8rpR62roA9BuxbDmmmqVfhimodPodD3rZifJxWxnv33z3vasv5SZkxgWxZfF1fF9Hvb",
  "key16": "3KUCX2YzXmWWaWZevyHXCgWUWnLJpg495WY8LQiZ6mUqNSZSxnR2rmGiCADjTVhWktBhdwfHoLfdab54BgBpVkvb",
  "key17": "56Pm6hLfePvqbPBtiRSzSyJuqrNETHax3bjETD3L8i58yD2UiphFgbPXy72QgaB7rx9eEohusZMysjrch76vc95r",
  "key18": "3gp5qKcNVM7xpEHcNSrArzytniQ4WzVJgV29UD8Wy9kSHftTybjjP5NvNbFwDX5dTCMPomh9ZyUyNopi8MNn57xi",
  "key19": "48hbowdKn394wwHWTCSZmDLPtXtspejh7KknagCpRRTEEtgDEUrmrAevLrNXjBJF6pf5pxwaqEuUYbqrb1rKPHzJ",
  "key20": "bQnCRVWmMgAzPq9jjotENByPLrMDEjkqa8bSWCnVs4ov7eEtBcNc6GJ4t1qNB8A6cjnsWwsECYYovDE6D3gzubK",
  "key21": "DAvLDiYYeSHE2R1kiC8nEmvDxLirLVgkEBQp9JhWqLtck5yevFaw2isn68J8yVoS2fQUHD4R8DuGKGaB38kFu23",
  "key22": "3qMTLibmomB5T4ewLkciSJbWceNAyZQN9fgu9pRyQgTcZ3YyxnGibnHn14X7R6VUbtmcrfjsUwziN4yUcLT7GJJQ",
  "key23": "4rJcpm7FaFKTHn3xb1aTXoA9biVu9xKjEyqt3oXdykcEvCcFbZ9KqP2oyKKWzyEwW55PRX8ehFJWiZ22xqXFB1W9",
  "key24": "4xWgxewzzSiXUhhPyQfvbkQwQcpZBpXaTRWsUH5pfBnPp3G8Nz3vwycWhaLZk4HxeG3h9vZMfb4rfCgZCYNKPgNz",
  "key25": "3CWWkpRbJ5xmqFfiA6Djcfv41Ztie9hyr9sYQDJ6vkFA5fRQ5p2QSpkUszjW4PxXgpKuZS12wKdRP3uRkQGYmr2T",
  "key26": "4BaWanRgTgZGreDneMk3dWXDgUz3kvQjLfrVFDgiDPpaxkqXi1CHkSbjYcZ7Q6N48Ei2j1f2jNhQfXcT4W6v97Nm",
  "key27": "25XaXzJ95cKXvHm3VUaLs1EtaaLAiBsYnsuCvXzHxfJt8ZgwwaJPNGDYf7vybQ3Kv33ixCvoFVGL9bex9gHGUJNv",
  "key28": "2rerVxCfbi1he1KREgQGrvKjym3x9u1Kd1hC2i9QEert64cAYSmQ5E4o8DKhqvdKRfzc3qXH5gGvvii6aKjGyW1T",
  "key29": "4gsUcthaq5eT365ZmQ1nxfYGJqZmwL8SZjDHKfDUWUCMtLvsa6fzqwXHfwX4dqZAwj7MVV87p12TSYebp7FKQ43f",
  "key30": "FZyyg7V58BEVESQ2eoHc9449SvZqWdvFdi6sgfbrcACB16UJxTgwmAXXDSnCjjEmEZnG9vrWcBRuqc7whttagJt",
  "key31": "5n3ir4CxGUP5fybNN5v5w4USs5aDsFShsmBhSuNQSFxoWmesyvpNZBWGB237XntFz4pQsBmonMNYmWXhLgD6BLLQ",
  "key32": "3ck4mShPKN1EtXz1jvP1inBA1RKf4V65tDkHgeUBPRVT8BBcGNPU3GY42S1hU3WneiFMbka7YfqmgSeyPz1nKz4R",
  "key33": "3copRWT2N99XfqJ5M4ALfp5bTRpvx3fDZXUxbpUgNmeBPBTkcUuzNeoimALzbpf9Wr7aSLeLaLLDfJamMZW44kVT",
  "key34": "2Wpr4HHrDvBYKF69bHtb3zi6sexU2i9gxAHFwNmLVrSsJWYsMcdutdujSp7k5dDt46NvSD5dRZaNGqfCEfnWShNw",
  "key35": "3pRR4jNY7XDMsLY49daFuesmDP4chbNLbx7Sfms2AmsVm6YUGhDUBgTTG9Xe9TFiLY7S3uV5fGpDiLAwiid2i3p9"
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
