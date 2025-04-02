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
    "3hsdszKfeEyzFivGTsariwNo8xnZjvsPSogGHt1maHoYKAVX2PdrYRkpugqkbUJzHB9CuFEafFT9qqR2FjdCkMyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GUTh4EuR6BfqYww8yHQu3MuQgwFYHBgiEEV5oX1zsXm3JFW7qqvrRXonpkeQDd1Q85FKK1qQL8g5oDFKdFVwS9e",
  "key1": "5Zrd3sac74DxekK2y4LPA7X98rJ3bcFTxWzGuvbDKr5VoXdgTkwdAaLnne5Fm226PzkW2xpufXX68cfhEFM94H37",
  "key2": "yxT5iL5uERfZ8WNZ2rDYZdhtr4FYRRwAq62xvvTYkRwBDhEGn2mSgkQFAaD81fEo1A97NfRGffC1n9THn3rwqpm",
  "key3": "2V3bNBuNUHztFQGiVh3QE7Lu9G49ptqbPm4B51Ayd1iJXizisoH6Wcy9jM9gYJddK11SfEbkckWW64SfRhaKxSSZ",
  "key4": "3dooc7Fztor4KCdNDSH2xJQTkh21Sz4LkgJawspE6fpunbDWYb4owWejqN3hXuCpFsdRqWGthW9eAJDSsP9brNSZ",
  "key5": "2o536yxXAsautnMCyhuSPgcAKdHqSrQ1cxoCzRJSqHoY1YpYRwTV9BbfcAJWZezXbUoZVuMSo6e5Qat32LiKjJCm",
  "key6": "LbkyDyZ8EEwNGanFTN55168CQTWEsh77noT7zdAUawm4UMcXipqBtcVxcJhMcXtR2GK5ApF32sQdM2QT3Ttz7vP",
  "key7": "5iYYN2yzbDhZySWEsG2khVfrLEatnkQVANmvyAheTNTjardARTTunNGofYF9JxJZudjuABYMrMMzdtg8GHfyTVL3",
  "key8": "5fdtbUqtoCT2DH5XrXGLjnyk8iiMsiEoGtkW3TqD3ze9JTMqm81raJvV3EMWdYB8hRWeaP5c5zKQG9KKv566hc6a",
  "key9": "51BTdii7xqUR5SZW8infjcFHUR2E82AsuiG6xywxh9ryzHvFAhoErahJVSzMXs8pVshmtVTpUDfDKoYRbzQmQ1sg",
  "key10": "3dy6EAg8rPVDgCZnXdcPyUzj9g1PP1o3JcDq6YhT4gWxaM8dp32SyNiuFBFPqJ3jRZYMjQi4SvWWZNUX5UYU9xFZ",
  "key11": "4vEycLUk659mu4doDcvD4kntrFmpBEeTYMRQUujRMiSWjmaErV2P8tw1s6hCQVQYBsChUm9FFdUMcmjteJKedWPv",
  "key12": "7YwHf9N9t8GaaJwHSNPxYUsFEdrbhyWWT6CfUBFwGBqMt2LTdmYL3XN5NFminhBDexPdv5jY8s1rTWwCZBsFeAc",
  "key13": "2htDYYWPXZ9LXSsRxqanhPwRUpswtdE5xxKkoxb6TUqQDYoaY2qfLSgVhLd9FyD6KLRYUhvthb8fjmsfZVVwZ9Kk",
  "key14": "59Fm23MviKhbkM1DWy8c14w11rYF7T3RURU38rx2SfTDkvifaS8SeVChDkMSk9QjQbS6dAZmzeDgMcBAi3dbcCW2",
  "key15": "38tKjhhkP76Yn8GkX4qb4VozC6yimjgkigWCGKMXUVffvWh4VsioVL32peiBYECX4d3J9N7JiAzbf9rqXZfktbsm",
  "key16": "5NrMoUAHPuuJwVogvEP7U1v1yRnGQqVn2SiMUBxrUWAQjLN6J6aaPcq8TVHJoPFukNTgjNtqBNKkghKBuvStmwwh",
  "key17": "5gETb5r31rUrwF4TTNFwtKmpPmgMqHRpMCf7zsGXGMtWw1dTJMV7d9zkfHnsjcqQNko9aupQwkS7gWKHqT5zUwf",
  "key18": "5zoRAAM2BrrA3H7GxH5JcgZugBQXx1e2tAvmfDWrgkfXBg4VL6DsvQX3wCdejHtLGNrphWpg6K9H5nTkK1ANhdwG",
  "key19": "4syUXgcA15JsApAZku6w4TRmAnHaDg568obvHQZtX7ySFeyitmNJc7Q8kQn1Gc2H7oHNCMAsSfZ4HfrkUh9WpHfn",
  "key20": "GPGdq2JJWdoaBKLwYPpGx35KserSArLNzE8rhex5FJMWDFpC8zA9fHyAxgGRceau1UBw2Sue3tus63JDiUsoD3Z",
  "key21": "3Ytdo9oqAQv8HYymnQJcJmM8Vd1caT9kAxt6SS6jcMaZHGD7nFD1xH6Yw6eM5VaMZBWtAmBM9eoM5XggwGmmaPaC",
  "key22": "3Eh8d6E24kVzcKzRWkdG3JkEdYH3aVFCJrkyEjNivX16P3YPULxJHR9RpG9Ugrk2UhQK2AGFMhoJr13eLZ1pWEwU",
  "key23": "QEfGj92An9deFCW4Kb55PF9mPiySYAfjLeNRHrESESk7fTTwVxbNH5G6UoqMqJkJ5JBYACLLPqSFQQQK4g64NAF",
  "key24": "jnkCCMcaap1jEvwEisnP5cr7TYrsxMSiNSpn2nUrqivrtckGeGCLPHkXXgvxADUNq9tgsVeLns9oPEnATA6UbEV",
  "key25": "4M9wsiizk5WX9HLZbrxH7Ry95VEhFh2r2HjopSbEhEJiV8FHRWzUv8VjrhkgKjAqSN4BcLbnqmw8FNhC1a5fqmms",
  "key26": "2U7Yx1hwas1vZxQpSCJUiKEV5hUxfvwWUgeY6pNk4YVTyjaaA8k4XU1LVXydb4TXDjQuLtsjYSdMFhaQRysgL5mU",
  "key27": "r7QjDuN6SCoZ72BLmEHChii68SAVgq53ExRNHTcirYeeenDyJNPb3gS8Tzv3uoaXuyUVZi8p26a3JgUsiEV2MCd",
  "key28": "34kpudxG6oqyMeagdHUeY42Jf1mdCe5BPeo3rGf5GsasM7diV1vXDBna14U7NEUdF1vaJbwT9P2csvUZjMLZYduY",
  "key29": "2DU3jupYS4tniMVWxRprcbHyzNxtz1XCLLDNTXqnCaTcZ71yuUNZwueQW4iT15rJ4zmbBAH1hUpsjKdEehsHrpsq",
  "key30": "6f3ZexySEjQtBxGMdEaBK4zAiP5px2VCPCTkmHfnNnSWAFwZrHiyPvvtA4YmfKJtu7F6HyyR6cQK2da1Qp5drKo",
  "key31": "653CUSYNxL2L5QCFhhrzgaQ9HDNtthLKVrfNJMW2jiasacovZmSjSEa5as3dCGLf6zX2UpL732DVaxPiZzfDLy23",
  "key32": "33V5bhB5gDhdkRKFV6LUPMXW1QY8pqifc5Es9gaqb5cawrBXNZoKqnKPpjbXjZCEM3qN6J53pKzWLxKWDNDftmE3",
  "key33": "5D28sFbwXuAiq1pVjTWv4YguPQ2UHkjmgYHUMWta33rcHMPs3myWi4DK45V7zYWrD942mDLHLo5TfNvQuU9HeT5D",
  "key34": "35xb1RdRqgPLxjX7rWbqQ8oE7nmP2oKjVTuDWbjKYsdeh5PJVWuhLhbcPk4MQwDi2UoberuSwsfRQXCfJGwN6Mho",
  "key35": "5UzfcbDsdYCBg1feCtH3zxiLs3WiuAqJiKKyA2UfGpeXzHKP14iBkvPtaFezAWUe36EJh2SABsZaR1N4FXwutYzD",
  "key36": "28MBtpzSBWc5BT1QLG2dYgBeoEp9dFfyYxRSQfdo2fGaSKBLT1daHUaJGWuUZm3g5gCdjPwVffcDbkZUBDvuxPoy",
  "key37": "5EtaC3x88CXQ663oLnogoRxsXd91rEG35xfkCNfUAwAk8wo9aJPZTvfm38rFUSMLzXAvL7oLCayXN4foWUxjRo76",
  "key38": "4v4TsgazTvMLERkrSEe3cQ7fsF1Qxd2tbGfTMEqDiGNBSF7hRf9UXyJPq2hQQkHNMwr2nuqWzYJtw3Whx3goT3k2",
  "key39": "3SaGtWn3Lv3Y8Pee9fwGfutJLN7eVQKLaSC5r5yxhPHCreiGzSCJkezXC9Yox9VPZdjhrQLpHdzxm39LQZqppiEK",
  "key40": "KiPQbkNvGH6GFXH66npsvdafd7aJS5xvMYKVKtH3UCX8sECt6PgEShx1CegWZhkZRHzYx8rGFwbNGZA4QTZDtZJ",
  "key41": "27ZApUjr7aRRYcrNoTuhnRGX62mMmAouW24qF3GAHKCD7nQL4NqYLUCcepHjCpBLMgZcK8hXiqKHAjR2TtAw1Ei6",
  "key42": "2hkpa7Jwzp5r8MvswRE37GvuhGfyyxX8LGDghpFx7eVv98F41rcg29DdxdxPCsxMWV3E2oD5gtEYsYueVpm4EEZU",
  "key43": "2YkJkHq7XVmKGmRDke1nfKstTc12Fjr1dqVDjEu3R4p8MzzXUkJuV8zVW8Vt9v27J9BgE7Jdm3oTHTR1oY9DpTXU",
  "key44": "3sXmTiM9nA6MjfAPnu1fmjiVCyEHYxEnZxGVw2SxP4Gbid5JBs8thzJpKVaX8Sufh2wDYBg4QowHerLwzKgQfJYs"
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
