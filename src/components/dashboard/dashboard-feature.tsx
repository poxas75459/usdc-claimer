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
    "5YBj7GNU6SRX456ousJgLWudjv8rZ7LGXBGhACmwD43C6hNUosLH92FoBmBmZEUyq23qMWMBv6h6pUk2inj4ENMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AqiEdjSyxjkmWsF877SaTgVn4FB2FV7qyZLMYgdwYjSj47qyNKStwoQGUN8RjUC9Em1Nr9WbA9kH5PTRyphiMGN",
  "key1": "5e7gf5gQnWJjmSpFNT5Vdp9Mcych356GpB5nrAYVDnMTXQNdiddkZA6tydANqyq7rUFkRX7T2vzqRXxLnDKHXShR",
  "key2": "2jaA7ubhCR27AYm3sPnsRrUmwAjiWGbeiFXnJm8mTs3GJpPmnRWSNYW8jRim8f58xJFUYejxVyYCBzKubyxw54nS",
  "key3": "9mVQ1kGMSqP6VgFjAxsHfSPLme8aX7nmHwAkumqEMNYg1qQcaqu1Ko2gcQqx8suhHKUkXpp65u1u7n3H1mXPiC4",
  "key4": "2H9KAdJmHGLgS1ZjgTfKcyHBBSF3PMbngEtYmNctFVb8sDVdefBGha231z7AHNYsDrDua9Q6Rymo2Vrr9ATmWczj",
  "key5": "4kybKecmuAtyudPPdA1mzK2oDA4fUuarKskGMnH4n8SuZsz59Am5YKQ8TAwdF3qkUg6YvrmdKvuDTuezdQZLzd57",
  "key6": "3RuLt5L6AEHcQHD5b6AGJMRChHS3FZKLRjHErt3ptFpijUmRSsKr7pQzkBRsM5MCHVt6LxJ128pSbrzwwpvfrsa1",
  "key7": "4x3aMy8K9HVHe8QoLbFHyargJsXLdaepcgK36DLHn5cA8X6FKSoyAq9Rx51hWQ6CAmHNSq3xPd3aqbXhsHAENdoE",
  "key8": "5sV3c246VPMzGA5ZhBBTNt5YXnWYLVdS6AfEESmxBmDZez2tTHgFiXhDGGyfMWN5XRybiDKU4kfyBiVfCqZWbcBs",
  "key9": "Gbhz1JAncL86v1royoEs9JFPFYXtBccSC1P8TmfvKKjNbi1wHv9isyzoQ2uauWzwZmDuUhK1rAjMzL334umXJxX",
  "key10": "2BvB4ogmiUbEXDLHA5GHNmf1EmrutzicKjribJPCaFwcKEbUojPDNiWQZCmNv1xjeJ3QXkxsenXCrWdWB2AzhPKj",
  "key11": "4N29ptVPDC9KJAHrvK6Bp9gZGpNGGYesrXeeQQaAaHbTEJ98NoHNC879KmBxb5TDYsTmQxsFRVDJSK9Yy98wnCjk",
  "key12": "4nVKGuZzHRZvT7npP8zPFKG5qtkgD2Zi2hGGugimnejCb3NwNmHkHKAiVVe138BrcG1QWGNaE3m8gXRXy2ZwhKDJ",
  "key13": "5FQQSWFNZ4HfUdbHiemboM2nLRr5TQFVtuiq8L82YuXMt6czAAKhnz1x9bmsR62jFc13pRqUVKrshu5zc8JQvm7h",
  "key14": "32T9txPKWR2qvR6UhGsBSbcMAkLwYGi9T3bS6CDX2LP9E9eTczQpkjdwxJnfSfrRfvDYC6pxurtE1FmxbRAQHKWz",
  "key15": "iDFVugLtTB8PD25smVTyzMBEbqM4bgxd4Pje863zoTgwiELKR8KFB8D19ftdMxxuuLLtLi6t8Ad33DRS1VdoHEG",
  "key16": "4puDC3bRRptM8Gq25ceNyohK53p3oGcPJbqbsaVN8ZV3aphRwyGrJDQY6zQcVw4p64iD6EgBG5KuVrwB2zZaboSW",
  "key17": "3BaxDKzJHHZw5XDMXgo8asfaQkwkndwvYENQfpQdKdcCHhMbuaNf6SSiht1FVhd16MfZXj7VxrVHedRs8YACHnJw",
  "key18": "zHpvobtuksdZdhfaFfhK86ZErJPyUK71zy2FFNQKRcb1mQb6YvRhLQxHvvaMpqD6fYLm5C1RkCk5SXD8bejHosv",
  "key19": "4E6CvoBFWKCgHrvvcGzSkoERkPvH4aDoiANRcN6USUje1hKfWBTVwnKB8cZJggCbErStMSSFPYcjeCni66ua45N9",
  "key20": "5MLuWeBngegjpKovAdXi8HJnuDv2CX9pD9krDEANdev8CcjFzYomeT2CJaHiqsVkZ2e46G3zYYPGbK1jSrCoNoGP",
  "key21": "3YE1c6M9eu74QB3X4v4w1kuovP2ZMC9VoDGCEngnxNFV6AgRdyyHKvhZsoVUcTbHxsqX7arsDJyev5wZ1kjEohNg",
  "key22": "Lo8UPHRwEThZAGMvmpG2CtJkZcgPN5Li9FHxPrPvgnfjwKn5mmw6vcguZZAxDWMNURFLrP2LwPEHedznZLHqsax",
  "key23": "5LqWQUAYrvHMUmUYn1Ek7jLq8Xu6LLKJfEqjbRVWbuiqfrkuzTSWycaa1korNRhMKVMF9jWheMG5pNM5Arvsi9kU",
  "key24": "3moZvLDSwaT9MvrvR9QrQVC5GHTC6MgevV25rZtqgMhdowNAYeoGS7aVpDYaBy5anzKy5yvmmqUaaX6o3e3r1U7r",
  "key25": "36jhJw1wNeYwyhg34bDX8AFkaQ7kJpWrfTgeGB3j8hNfQRAKBibwTkN63CorgDzvm44k2qM92P5JLM1XAko6NsfL",
  "key26": "51BQzavuS3vhZxJjbXudyhnm9mJGyR97HWtAvGyCVSwUzFfppa1tQAAcrQWnnpg6kpkMf8D8cxBWjEw6gvR52qZf",
  "key27": "GrS3NnMX8g5A27imVcpJFsNrnvPqeSdTP3ywAb6xpUHhzSkvbrT92iwWtpTYkuscrdybVGWLxQD33w7z4zC4oVQ",
  "key28": "3HjoFaG6MFdGTU2esqfFmVLoEXZs2z6dov5NB8EE5aGswPgeXQVeUaQxz9s2Junz5gWkDDmr1JbvPyP9eFFbpgg7",
  "key29": "3YMWqwq2vZ8dyF2cd5362QiJUpGNGGrsros7CTLfY3hmb4UPyWfW5UVh8bqoNn52Qy23MpShx1EHpqj77d4FefSk",
  "key30": "4jfk7oDXF5iW4NmTYwtrHmihcE1j5dF1xEDRWUxLHjWMPJNTRrcZDurwFiavZbHCirg7SfoMoTLyxLBEVcUWP6QR",
  "key31": "64mTnNUYSkvjE5dwRE56HFD2VfjQULxTt9oKfeUhgqKtiQopDVS5oJoeC2EuMYtZyXmVnFiKJMfebfS3eziLydeM",
  "key32": "EZBAjnWwCrriFev6EuFnoqmq9XhcMQ2ptFnzebeuKc4FFtDFuvNziJgdgtTHPyc2Z745QU3DW2iTUyLLTGkS49N",
  "key33": "2Fjt2nn65EHpXPQgtiy4LJfMyzQu1qrXbGF8zxbgjAT2FJx4D6BxDqLYJNxpXFLX7YsaN8HFKGLQUFqCMfrfyEFF",
  "key34": "3qhDqAyHzdw88gka3bPcsjxeBASesz4Kjfb7PkXxxfpYTDFxyuEu8ugWdWrGWJcF2p3bMpogu2ybthAPS6dtRrPi",
  "key35": "4FZJ9jWkBhhJiiR8b7G1nGuCnsurh1cSeAbJbXDwYdb3SnPdfcWFue3d12wNBMfW3H7NyDjaBgZZduXQU3chwmco",
  "key36": "FqzqcqQDmxq1GdtjC8hyGva33Gp3wAhhgx2bThG43B3qbiqiwnE9CEfjWHSiGebDzEHeHt99sWHXXEn7sqvs8G1",
  "key37": "4Wo3aJx3AKU5T4tznqsb5GvsaehCuFwZRm4NVziXvFviMg7iK5ZSJq2oeMjBtjrQjW5ABAog2NfVqq7JthrKirRG",
  "key38": "hAY33DELw3WJE9wpULYYUNmWqwmB9v2QGLhy5HDABVTdf2wZeUU8VBR6mucWuCPjBU7XzkJFa9bzMt9PUGsJ9yi",
  "key39": "66MGaFoq7x2Kd5NCuRe1AA921bYhANDYdu93VFsgpKSyxWzS3Xg9oPSyS4RttqHRkPc7TaqoZ8az4ntSfxjWiNbi",
  "key40": "3mok2wSZ3Nt5WBRJ9kgMfBKaX59A2iWHicLrYbarBvgEDBFttACJv2f4JseDEXiavhCH3jEJjv6MCEqTGzqN5sMe"
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
