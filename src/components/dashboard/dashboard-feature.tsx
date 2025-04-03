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
    "5fNvGAKFr8snYmXGpuUMDdFdLwcb3cGzhuYxdMVFP5hhUJUQhSWk9zykdJZP9BUQzZ6i2Q7WdYRQdGhbCo5E1bLd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WSTZH6K7MnnevaTHyMfh6wb8HY9GMWgbkY8GszE9qV4ENx84j42PjW16YmaRYLiYQgwpkZEKEgZ7xcLrJeAfUge",
  "key1": "2iVzq3fht4pVCuFfNy29zK2XL1wGUFvzkWdBsSQFMZVQBMR5MkR4uY3WqMX8RXwYVWcRQ4AQLm3otasXpQ8M32aB",
  "key2": "23mVe3PCVwcS3N4zB5UjTNyuSZEeDYc7c9WkfQwcQ6tKYy6Rqth7MZYgBK7N2uzhHyfb3HDzz93stehQLd73sHdh",
  "key3": "2MeJWrJeqm2LjeK2oAuwxPHHwSVpmj89SWuZfZ8YbDS5dPdGSRrskbwGNUVR8azjXkAVbLrbghcdg3nNiY7gT5UP",
  "key4": "4ZAM2CNid4Crca3beP2ry9uP8RmRBRci448etgJB3PnpT8VE2hfRy5mhQcEcaBRpdyi9GB6fi9e6kGdm6maD1G7J",
  "key5": "z2oV3J7WR94rzZyy3auwq72Eso8T2dzK3d3WAM2VbU3hc396HbfiDUcVbATaiwrrKAADeDWLWpgCvVQKupAxdSG",
  "key6": "2wpYSznmkeEfm8zhr1juV1juQLmcJSTNh4QF7xn6ZgskZnEvcKG6wr9aQvRxSkKs9QPgLApq72eXkHkc5XWgUw5N",
  "key7": "2y68pZU9xgDNwnJHaTmbkyJ2r1Q6AhZAAscaeZGLGzL8YS7NDfYxZUK686Fv68TtwhGVWGm1BiiZ4y1xCDC5mmX7",
  "key8": "ETvyJbc2QZdTejKdcjs15oGoLRFXidRWrhQK4bKEUKHaQqREEU8417YyXbtmCqqM2Au6sACKW6GbZHPkJ9Xtm13",
  "key9": "2vbJj69G3mWynYguX5RSdh5kuk4kRVUUuXJXmffbtr8YnjvNRiqke6zaMha7D5b9B7priYoc8KKMzRJ9Wj8bdCgn",
  "key10": "3Xqd3oQpX8jNsEW3R4Z1FfAT4sUTaz82fahjiqKEUGYkSR1WMsvxikfwSq7HPqnpbrpteduzD26n6iudDBrhRkjq",
  "key11": "2aSv1J2xtdtDcS3Q8YNrieeWgteT7wGFpCKERGfnAyWEVGervZjESfhr9gGZq442vNFdzE3x8jBujZL9kangAeYs",
  "key12": "2t2ujedoHe2cRh8CfhafXHEr89kCHge7FzP1ZZPsMMqzm76VmBMoejgHg7EiRpf7Yogc8Ju46E2ts6L2gbhFLsGv",
  "key13": "3t1f7KV7DkcyH412MXsdkaRbDXxPcEShu7nmzQmhny7y6LvWkf7yYK5yD3bug95H7iGDbrvrnqKfR5HeepQ1ywrA",
  "key14": "2jWfjjWt77yYkV5TzZVr8DYVtPkoAVTD4cz7LkDFahiWFtpEto9guuhbK9td3fS91Y4zcTr4vZ9Jnw1iTVmdyrV4",
  "key15": "2kdnFcDM9sW9RqN5rHJN9SqpKiWFeHGrcJ636A7ykGnC1h6H8zaWcSsCVKxpeY8nUZ34ub4MofrSGtCFVHu5rrTP",
  "key16": "2TdUBiBRnLcESLertofdGGqeTDZu1NXw14BBSFM2gbfZLD1B5yEZtSXigVKzyLunLfv7ansAsxEroi9fsnrTEbqL",
  "key17": "5GGDGtos5P4gUZmpy3n6i8dxsjrUbisJPehC2UpPGidFvjiEoVE4oqpqKUV5N2UnGffgEKnCcuj5z1eDZawKhbPt",
  "key18": "LosVnHF53DLUy35wNmUAGcVU2B2CnZWZfztXStnnNj6j21rXfrXLkpB6k8vXc41saC2fdGS7YZpEjwBaxUZ1jVv",
  "key19": "41TEf4B1yuyqx7BRD5xLto4FAuxdK2gtiJtHhu7Rm6dEwAiVkypLZ1LviTGysiY7eHoUBCqh9Dr72LidwVu9Ei8Q",
  "key20": "rvdMwQNpjhPsfXZnqvfG2WkZduGqEjPCY5iA5hAGBCei6tX4dgQ1ZjuM48n83rFgaGPMJCPcqFpbjMf61FtjQv1",
  "key21": "36aW5zrzMR7E7GSegDx32odV5VcBoq5cpJvCr3cWYJzpu8szLKdA6s8R7Ffuh8fhwyiJpkRRvrpfTrbMPFWA72Aj",
  "key22": "5KSa85743FUWYtJ4krKo7ZFjVW9bf2LDMR1oaZNVcZVwFccWigdSPx5pYEY8sAwQXtKcK2NwEiCssRrGQdS6NBo6",
  "key23": "2hDwpxSoTxEACyfSoVzaDktG1jxGdvd6BfAKdKFfqS681Zr9JD931Jatbt5i5aGhWMFT9oHD51bEJLyz8YgT4KNW",
  "key24": "64W8niHsag1xWdHc7g5NKParjaJZREkb4xVR6TjQdA7eT62CDNWLZUzroHXGo8adJqb3yw13CfvRzF8uJkLtMXk8",
  "key25": "xwfLV8mrwp8txAqujCzJz2RfG132fjxrKgW6nzKZwkQPCUMJwqGEVrn6PAK7V6TUbTDTnrHyNTCd2tkFaUEs5nu",
  "key26": "5N5z9tV9MKd5iU5W6BxYJqftDqPBosh4dh5H4g9pYwxgCWHPKhXAZu8k65FFHb7UGymy9x83QF95EGd9Ti8CPciq",
  "key27": "5oCSzRaMM7qPrgyCaHq8DW6xrDCk1LtE2onjj3QqAuLiB17L8XK8QqKCdQeZjfAsrc93dRz8UJ6HU29BRgAgC8GQ"
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
