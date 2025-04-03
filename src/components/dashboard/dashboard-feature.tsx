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
    "4nacdna4JpzGn9rhNiLSqqBhGW81dt4X7gd6YrSkXqosz4Hj7pZaBJw4hb4AcCUqk1NWe7RYuuBEqyd2Xqct8xW8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eYjwByr8p4R3qMtyPf3kYoiAGTz7tmtMhFnBoj9nvtp5MF7Sg2kMffZ1vYF2ocNcoTJFT4g1gEit7wueEt75P2Z",
  "key1": "29ABJs34rcwmHg5wu6qrHvbipsRjJ8BjS7tcEcWBsrnne6g5dMgUqM8phMewJtVGnHWQmreB8Z3NiQjtVjd8Qkjk",
  "key2": "2NCfSA6LX1avzfjdMtmgGmehHMTCg4RK6VXhZJftNhyaRF4SKPw1msmTsU7MaiEsqHeLz9zrsTSbZP92ikp8zn2E",
  "key3": "5hdTjcupxkPgJtcZ4rRkanocbas13mhEQZ2oXAKNwHVQACXvrBG1x9D9ja8y7dtuurHTC6vqCvpiJDc3eJvetiCL",
  "key4": "neqBeBb36MusddvfjA9bqxtJ4SsoUoMYerTJpPveQwtuSrhS3gKLQ33WXkBppEA5ksxNPimSv2v6r3S4QRK3k1F",
  "key5": "5BHbcHonvovJyg9YLNXt7q88Qb9hWdptDw5ce1SU63ENS7vWwpkch3o1o8Hw8JycVSBSnUu54KU6Q9kNSxgKRz73",
  "key6": "4W7zS4ac9MsbRN1KvHSFQic2YFEfnCCFQi953dWH4AwiBBGnKf58APBbx31Lwi6jtGYHkU7E63UHMPkuX28gKzHv",
  "key7": "djFssP3xu6Mut6uX8FuegvEzgXoca9HUvATvkwHa6SN88yqUz18dZuqsGgakbthW8wGCpzRTDGn2C5pxAW4Q1oE",
  "key8": "eMLzKMRjUfFnNP21rNnuxWX4oo97pgzhFxRCHMhKDmh1nLGiZXz972s6UqEjtQpnXgpcsYAZRWM6AqwKam98Pfz",
  "key9": "55bJXgYu9f8Ybzxsg7fdQm4syiNJzLJHCxSH4JVAXavjZ9wZvMSVNDcyApDXfQNifC7jNyxW1hr2udaB2xQh95TP",
  "key10": "5gGqoXttJPCveuPqRNoZnfhPxSUojyT4LA7RE2iSi4ZmHp7aUkPVxihUtW7Q1yydkW6GazEm6xUmUUuhY3HDaCG",
  "key11": "3H8Ss6wCw9R6HeDpDdaxrucS6HEmnqshTSJ1hQXfbuQTiK3Hu5sLi2eLgHsaFKu93kAbxTbU8GXBkefJEVVwAkpL",
  "key12": "aiY441xYpn1xqD5aN56a11vg5v1ChtiKEQJFdJ1icdfFLtfaRnyKjaPNmjDohqWYqqBQuj2fz5rVha9uWPPYtXc",
  "key13": "5XnF4epVFqQqdRK6PgPg2XKxBG8iH3cBAc4N9hzgCYtgRgvPEviERN4tkdhBatQttCy2hQ37VBuq7mvgiSdNYsba",
  "key14": "4V7FRxQ7eAu6RXYAcFjsjckdx1rNRBzTwFpxpDKEqUm5nnnLksEPeBkFwMPAYqb8nJuYVTPM4NU8sME17oM6DQFY",
  "key15": "3XE1CPbw6MxaCk3ypXj7iaKh8NbXpTgv1QyhAipo5ueW5RLCRvz7FDfxoJRu8NnQWw1HyCpdDoiUJUr9oFUPk3i8",
  "key16": "4WFfyM8pNLwMpUwNsdgtJJVKdhRsBebGaFzN1axGf6siinrTifCaxa9Sg5hFfjxwLP7KsGFu9tfzD3M18MXT3Gs4",
  "key17": "Tj3BxJZTaow8FwEfW6U2HspLCeg1NneoUZMiU2LZy6zyoVu94BfaeLfnztNCbSpDXoEdKMWw8tUf7PbnRSmiFix",
  "key18": "2Z7DBnyaHSFnPEhMxz9FN3gwUJ9ua8mwK3kHDkydFTmksPoRfEsLevvBaBzs6Q42AtP4duj5X3bWSCaZ9irJ2QSt",
  "key19": "3eYdrGCfcURYzLdyFQ5phvNCtf8QkMfubzqY4FC7kod1iQ36cCvJGruceJvT5at3fNhVirpy7VT8tPhrXXJF4YFG",
  "key20": "5HEQcVrvuoCCoifn5BZX83zrrRuBxtiYcL3MNgo6vPyQdZsDZr6svy4h9wGpNArBcSBRn4nobJ181QB2373qE5ZL",
  "key21": "4mrcNsURVWWGhW8vJ7Ng2RCnG7GP7PD2fELNqRDUn33BqKoy3Lj7zxp65a8rh8zm36ggzsRrQMv6Ab4iLDSrtudL",
  "key22": "3raPBkCNV24eNxP5rTv5FcFtDfDoAtv7vsGAefcggjXtrGkmh3WKN2tZRpZKth548KncJQPjprmyj5t1XZojtRBi",
  "key23": "52Msqqyu3mNFuwmycC8yrHe2YCPqDLam6gMKww8FxcD4WAt5kYQ5h8Rhp8KFYWaxGmbU64ubaT9WMdhHv2VAWK7F",
  "key24": "5Nj5VUL3b7yDAvqwZBcDM8ipdzbeo6UYDjfTWHKQ4GkgYhR6FhVyFz5ExHyAWNg9hDL8xY5fciQDXKWr9YtAa4DQ",
  "key25": "5dKRQbnUwYKzmL3AG23cFm9Nqehfa5835b78kKF6qP6mLitNgQxcAyH967kjgXZPjpgRbgDLtmFTvPrrsSAsY7xm",
  "key26": "3YG6rrDpcwTHLhjLVrxScT6EGEEnP3xHiGgMbXRyJJnk9ubDpnfQ5qUmRsFH6CAh9EodZRw1yhnm9AiTwj3cqt4g",
  "key27": "2QCRoCxWvCcw3Y4k4KdGo6zvW35dJjR8D5gsjFECawJxEeUN2cb1mYsrZhjUCHLThqd2HRGLbdxVft5MZsjaVLLi",
  "key28": "4jKySBcZRyi31Kno1QfKDoJt4BX2uCD5SotqxNbBJRHwK5EqgkxStcog6pn64cJM3jSnszwk35nqvfSLLZPk3QC9",
  "key29": "J5n5SAGgKBDU8vuh6BrATFkVzNDG9jWRcE4ELgrzC5n1T1tsRMALP3Cj85q1dvQiZvzNhXDCBuo1QgQLyPk98ff"
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
