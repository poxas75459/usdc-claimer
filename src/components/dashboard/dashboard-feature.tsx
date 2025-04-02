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
    "5jF8nuBPyJz4FJRxTX1PZVwTX6dEQFtaC27jz13JoVAJ94BzkmEsTSVCNVPVJx5HFAEpAgfDEwNrUJ2mnGpAJCff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gBpzSiGyHVfGNZTaNZYJhmVgig8ygH6W3reqgBPmHct58egqHwowwHUwrJRY5rxHKqSmqneME175u7UzW43Kg2R",
  "key1": "2YpVbau2D4QLcsNa55MxHmP2XwV6QTccxLLYBsjLa5BaQbGAA8CApfLeXGCskuVt2ef91wzzf6yJQN5vc4jtvC6E",
  "key2": "64qXKQbtoaKA84YTPWyc43QndEkhC47k5xCuHDZkQP8YBnagFvSzCR6UB7T1LE164wJbJqmUVTJZCJZjXTQyvs82",
  "key3": "3UZJgDWZxM15ELxYyMdhFCotZUVNkhHSosK85NTFn5UPVpzrzXMbm67ZWawhPpDX1bsXxpBZRPj7PqQqGPc5fg9w",
  "key4": "5KyxGiUfRhGzDZQxNQHaoe423FHo3gg2HJ5HPn9nryqEUaH3K2vX2WCp8aTvHggUX1vq5VsaDL25xJyZcQLF8aSr",
  "key5": "4UYmPrFesfG4gqtcrircyZB5hqzm5Yu4H9VWuYd8LHQT5daGstfaJkzSBZV9v8ZuVHTwGvta5wGTT9pZntzrmjct",
  "key6": "36KsLjcjoBqjV9CHbojG5GCKAM3adofAKSU74cg982Fqn2bVewVT5HgMSPqdR24yJk5ZSWhMSqfUbTQ3i4eE4ZtU",
  "key7": "5oDiyNt9NeXSTpTukf9HWFixXQ4iYrZRfinrpKsfkrh2jPBa63N8JT3ZR1VKSuqqybu6hfWETQnZLoKpQyN3bJ3T",
  "key8": "39trUqDjNhiXQ8xYrR1uv4NThQD8Hx7nVEBRATacriQGyDuCDXN4TsveKJ9VqXc4xGz1XFHwQVPj8eZJ5cNXofwH",
  "key9": "22mC1cCPMgZpYi56oMw5GHUA8djw9gK2G2TxV14MBhbC61N58gDRADntaPeTKDTwbQbiDnnZFkQDYSZ2jZ2We8ZM",
  "key10": "4tc3xsvxfeEPXzsVuG3frMkmChNPqLeaJt8DjrZzFT7pybhBeakjJzerJzpmBypSkmn8cBHoThzsGSs13k63USar",
  "key11": "3NgYULojoTpmGBo42dHRFAtfvpCg66S8dsUAaq1DiAXtMY1hfPC2zigwajP8fiTbC6hCWhPdTUg6MwpM67e8dQqN",
  "key12": "2EgCTJPxa3F4wcvpgq6udD6sKyAuYAV3zpQ464csm8LnNzUVrkwUsQzwqWfpRqxy4Z9mGn67tK3X9BpJAkhY5V4m",
  "key13": "3KD9j9TepSoxgpBUT6sEUJPzjSmnx49bt4QR5dXMWZmKfi6T2Amq2Qe2NGJcUXLCA7CCiHLrUmQjJqAZu7s6TLvb",
  "key14": "4geZvWhX1JHuAMWjLNW87SRX4nNiZC1zqWVCuDAbyrdtWAroBpA8kUKoTWC714MomnLw5GriPu5nrSoWV4e9cJ1N",
  "key15": "5ZGoUgUoxC673hZoGCDavVVzNvcwkyQZXsmbwVWfs8UjkWZB1oHPpc7Yu8npPRdTY3YmPK5nDGtbjwp9VkUp1gpX",
  "key16": "2BCgfFkZVoTmRKzttg7qMSVRunLUpWNJkrix29nWkQ3Fzfx9dSYrPBEANca6eKHQJHc1rWCFLsC7kn3SXX7hSN8C",
  "key17": "32CBzZP3bkF2HN754CUEWU53315hfjshG7TQ2ddLyycaef22gNf57rhB2oTYFfpFH25JLYrfFK6QKHbf5AFZ1S7k",
  "key18": "VmNHLRkEDwV9UzDvnHzk3NmjuPwSHxERLozSB3N2Vd3tZgTx34Y47jYktCP88gfaQGysGLjKCQQF4F45G7GJR2w",
  "key19": "3sPZpQy32A3jcAxCTt2GNPQXb62kHWgBYAknEsKwg1odtvSNexdqqQ9ANUmf9NExJnuqWHvLxoRpXFQR1iZhguzq",
  "key20": "669Brapvudxn8Pcdb1bYDfm8jbHBViBQ3o8i2qHEse1v6mzxkxpFt7gaekKvUFzjKVvnM5Xvs6Nx58UjZvVn27Ke",
  "key21": "5kZsoipWRgBiJYNJhGPnjpNBd51hGhf9yA1HUg71UM9Zt4ro9vLGuMrseHAt5fiVQwd57ySzYeBAxw5owrrguLXu",
  "key22": "4rijy4sgoGrrWy49wtDbDUHMhCp6bo2YCoEGSmpep51pu9atvihCZQGP7RduCsiKUNsougXT3sEw6bpg5hx69Ahm",
  "key23": "3LysDKcypDq1VpGxrceNbEpzbvZmoeRXP5p7NrfqNw2h3fjFNL3VomLCYiCVgwoV6LyoYKdtw7spm65axCM4HtcM",
  "key24": "4g1KCHqnTVkwmti5m95HxpsYpUjPvr5ioYHQyuoboQyCMGyrXYq7NZHkHvCD3eQUC2oDw5N7RYEtK5HzkWZgKGzF",
  "key25": "3wom8E66VF1C3qfYxhh4F6u2cVas2fWwkLPYw6SdwDXdCpTuGWv1r2pwm1SSpSw8GH8sPRD4gsxHF1dRxa7B5EoQ",
  "key26": "5Ksagf3V3fQa2HJv9PXBp2Zm8qrf4yaoqMtTv3kttypHW47UJFEnL31zcAgr9XJ96pomyktehgVd1iffjqWuj9aT",
  "key27": "4ZRQnwtULj1P7RkaDqyUZK6Eju7Y593DDhR8GP8izFrUDM8jDRsULVZPBvHWMcNHn6LLdR6FJavHKzb7zsNESCL9",
  "key28": "5VZ8G6WgwCp52H22a9kTey66QRMDoFPVVaZyvCa1kZb8mKVsr32BtcYj9TVHMEMF3qGJwwv5uq3Z8sQeLd1y6y1",
  "key29": "2Bihi9wQRgQo2ezpoEUTa1efKsfr5WBcuuPr2aMZzy9ZWgB9wPrMJumxq4NYgd4NBLaEiJFJfui1LfGhWBXNJHUM",
  "key30": "4BE2sD21aYfy8nrqGhBEbyBNWdrqCAxNA4ftSicd1EFaYqqK1Xsh1G1qaPbUZyPXD7afJ1v28HZQ395y4VRjVxLB",
  "key31": "49TQRV2AGoacBEqBZcshEct4qJcbF85DmZeZ3Hhk2C8U94wi1Sb5hxs1bNTH3K1C9WkTAAacBGjuipCyU8XPvNhF",
  "key32": "2vcewLwxPKYSRaDFJwFZ6n5eYaXj7n5i1k9uRJv5379Rgf9W3n4sCCjMKuvBo1AKFFkNyZw1tBtDeuuLghgot5Pa",
  "key33": "2xU5bKi3ik6DHXd9duwG4pHDiXcQh6uvird1xegN8YXtLidP4chWeGFcBMRUYgqqJ7mPiDBA5Tz3qzJ7j5mKX347"
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
