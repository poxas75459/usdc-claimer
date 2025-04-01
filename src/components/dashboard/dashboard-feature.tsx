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
    "3wTJ1tdDqn13VEJH4RD58SoZnjLjBZQi298PgdhGBVAzMEhXKkV7t3w9d6UTiNfYHsjQsCuSHCJtJJevZg32MTtM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KSz7Ye9xLfqTnykD4PQ8AFL8Gnh8BX8F3SnbHxUjvWLaXRGCWBSQJKYew9RMLKDbSXUZdT31MuxXG4o9JHJMENP",
  "key1": "2G1FQuapzrCjfws9hpjjarqnCJPcPpU7wJrBe4SwLkJgMomDhJhbv9Ktkg1JVrv7muf1pM98EVTD5HoTeY5FJxDa",
  "key2": "3PspRNxweWU8bSq9QaHgmLYiqZy5kParw3SwQFG7sTdXMw1pD72VVE7uGx8S8pwnM1er9h6udveo9znzTyGtFix4",
  "key3": "52FJF4HzxcS2dLoPq1ff56WQhrtt78ofPFKR5owsvM6kJbobLFXKRG8ZjKZ1xW97toVWTvdtZHaPrcwoECJV8QjP",
  "key4": "jFA3ushePPUMgJECKjmfZrXkGWkyJbT2W9GTECSLGhmHQDP1m3gw8QmfYXjG7SxxficrYRR1zfNcavTEic7wctG",
  "key5": "4u1gmiyM8FqSB9QXW8wfdEM4htiRWQ22Mkgbc3BBcd4p12Ypm3eiJJNv1P7Ms8jj8QXP4yE6AKSY2UVuDzUy2EJ8",
  "key6": "4EirXaC67VnooYw9yBSFqZBZiDgoyHuvYZeWrB5efMabxTYDEEuGMgPuiPkQaiETovRp2Y2fzs7jrthG8MdLCTuM",
  "key7": "2uaPvyfb8e5Rmmeb3vga5ittrYRLJzYgM8KdcoqGxXLp3RD56gWRzzCzZH26Gm9JtcFbH9yykKxhRwQ1eh3uVJ9n",
  "key8": "22PtQL3mHzasExcfNmQGSy9WdcMxc2EscS5xvg2R9jy4MQnSgEJGL9nPqNErp1HNWHiWjdk3GT13HyJ1Q9rYtYxC",
  "key9": "5E4hWqEBd5qS9Q44JC91eELGGoixU58eafyoh7UFzMvm6hKAm7UkxqCWH5Cy7HVtyEcTffbQuQoKy9GyNacdEnJs",
  "key10": "62JgPGAptKwMdjvjY9NDKj5utPgjpgJfybcA2LxLD6GhrPDRyxAsMurLfALRqHyWJfea3ADhejqZf23D1P13Agy2",
  "key11": "2FKpHh3nR4RSSAaTL7fhurGLGU2Zmj629x3PLyExksMVAwPwuin6Qn1Jo9AqvkxmEjdQebDobzMVig3jZreR3xRs",
  "key12": "5eNTs4cAF8vqFGfT2o14KBWZzBD2aZPhgymmJeM8BXtsr2RxGTEUYetzRdsEx1HBJ3ggxswAYU6urrSCzzVEMPBJ",
  "key13": "5NwXrDx8wkRAFgaFbCeyAv2pssjSfd6yXBKQs1LE7FdfrijuFjpomJtV35KbfKe6Usjct8qwbXupUsdMFkZPCjK5",
  "key14": "5pHzp9REu7DxwFqkhvLCJdZmMakR3KeanFhmEdUJ5Tx9oHSMyUXpL8UyyQcYdLvUxotdQfJuLKy4sD4JhaTAAg7w",
  "key15": "3QLP8qJuQ17iK37Rr42QMQF4bXPLZiSA7d7rFcpW9E7M47s6HeqJGqnDabrDBWycb1pta9Se7cZes6SYHzDaWU2m",
  "key16": "226EYBgSHBadrTYnCddGKeBsKP7E7oqEaspsG2tiw6myV9CKqYyzeUZt61jLAFG4BQcNpAmD62zYqNq5xq64MR6N",
  "key17": "4eu4JapyywL33gFxSfiLBc3Gby5nTPLm9qxg7ZTaoz24hWfe23WwLWuCcPbqNs96AhwGZdsemjg42167BQ5LZHQB",
  "key18": "24nQYmMUXkCSNLSbTtdXBsW8KGPQAGV4naeVqicYCKjQPCjn1hhdqMaqvH6qdHMGqYxJ2ogZpqtebgr7qmxQ6dFZ",
  "key19": "2LU5nF99AMzuUz5mmwSDxvrd4aX7CNWAMvdGB2LRJ7WPSH74w3yE96XtXCoJ1UBusX2tBvhwp5rVLLQfexDQeEzV",
  "key20": "57swjLqqpDVx6h2cJ9CZp643M3vAevvMSM7LdWXGThVUtQgNh1dpuo1gQysMRZcXanQXGJf22rrCXgthDYcameYf",
  "key21": "oBrCaVsJ9d4kSyn75kE9JhPLJ1594eXi3bqRmNBm9eoRi9bk3FjqTcScsd71HtLc49mD74ArnfD2xDw2mnTV2V3",
  "key22": "2uT4ecwfnnX6Y113xA16suAKgcJa8KGhuSqEEAUMqoETRioasH6LeASNfiY7EmqCJsRJHqjiGvypPsUDvURCPLaz",
  "key23": "4VEPnJWuvynmHAaFwHG3GJhbHvoAXcTSBnFUj45dG82vBwMpT8rJfYxASSqg78hBCCLjovYkZW1NFG6pz4YqWGR5",
  "key24": "5iAkmxtz1idQzcpwStzdFDrkkK8HYxTt4KHsxiL9EQK3HEYW6VVUnbsBRkQu9LjQ4DPx5rPCYtnepkyBwqmWbzUn",
  "key25": "3rcs1Tcm5AMx2AwULX6kgAsZYvKgxJ4qXug75jKFSvzWawgyMnLNdy47Y3ZG8VxXPxJUVbrnTngJkuGAsnnAFWU7",
  "key26": "UJV7P3o2sgtPojzq81UnQgnPwS3DHnJp3wmNKBNPemawwi5td2ixPcqyWVrojvaf857EMNqAecd7FhqyjqrmQps",
  "key27": "4fbx4ZjtcrWhVCHGf5Rj1vhmiQWL8eSwvwEoup9EgEQEBZdi3kmhEacYKmn8i1H1B7vDFrHBZoQDbKkVuxMUnFh",
  "key28": "7QpHw3DHDUgkC9ou4NcFK4nfUNBj9vZzpZdy6KophASKX64YnG9qAe46JX8SdcY6zJmYJGXTRb62h5MGhWsroxt",
  "key29": "XYs3aMdCTrQ2aMEmrkMjCesjTeH1KCixfynS64fREtdSh431ecTaxz7pMSpnWrC2M4HSUaAr6pwzK7fsjmX5qsE",
  "key30": "BEfmQaPxcFT78HvddE8vDeTMX9DTVULy8NcK6nScZW6BBMEaZ2Ue4xJir4CQpfa5woW8YKatVzZtD4DPpaLoTxh",
  "key31": "3WEcwePVBLAydDDL7e1RLZ3EtofcSpUp4n3eGcwZ6y6eKXSBXzCcBZTRUnddJieAyEet3cUz1yVJJPdoHH6JoVpK",
  "key32": "2bwTGmT5unfZzw6nptYHn5reEdYHw7aD1SecJQBxwoatvHsz2fZzWjRsKjS9CRKkERJtCY8UtWv9D1pJU7nT2kZR",
  "key33": "36grUvFfBJ8sZKToEqejCZ3oQHEY6KcR7UeCHScogKaLZ7S8Xz8Grym5srkLXc7iTc2UixVQymVHrrdnAG1xPkk8",
  "key34": "3ZiCaJW2nvFFpBuf1gffXQRw2QF7jvrmAtDavrfkpMYcCjptUyYU6R41CHeUEmF92yStkLPsvaB8fL8r4MpeMzu2",
  "key35": "3Q6Hh7dUCyvR7DoxUbybEVbaChao6QMsKcr4k1xcyGhqrtkEiHmyztFXg324EE9u2ce8BrgdtXADYKUzse1emYL2",
  "key36": "5nqQKnSpB5a6m1nrthTPWM6kDL83EV5Xn9CnAfmCfCS6gBBcHfuQdBL6XXSL6eG5KZFYRPCSfiEeTAmKjaL2ctXk",
  "key37": "4SsuiroFaGaR68Ln1Px22XcZir9TfpVs9pc4bScgXzviyPgemwrUF8g2XiWKDk4pHg3mf45U2uAP8xaJGU87Ue9n",
  "key38": "2GtDhg1BCDbaL84VUeDbMWkkdgULte2Ww6dvcidotaycUnPHi8jnXhLaY98owg9ir9eGjdr1q7uDcyqdXqtF2Q7b",
  "key39": "322e85Ej4Aza6nyYZ1k9TUbpfmdGP5Zg3yS6JxWoCtqquTdksZz5Rv8FADM4CeqFg8LhxTb5A8hRVjkhuZXgTPGx",
  "key40": "3rjC85RagydrHhkN8B6CZAn95FAoo28fJXbQ7Dtwv4koC2uLxv3F4nYU2T4UMsg8Z4ZntykcYq3Mu2yjTaVUkWDn",
  "key41": "2gkUs5ddJTHjRbQcvEHrWU8ttMU8oTUBxVXsQBzbLha2sTu22hb11y1Hbi4gnHFn2tBKvqS1sSMKYbz1kTZFPvvi",
  "key42": "4aEuzGRPNn7sNvP1iL2o1TtkzfSoGqwaPwdaTnvyBDStRMijJgwFAcWNDRiQpqdb53xoj82JffuPW2zfjT3ogYau",
  "key43": "3ybKm28J6d6mVwBPWDy355kYHZimULAoVXC2ikCahSgW4TM5P8VLFdFatM1i7qd5kQiyV7uDcAdPW8XvYtki95Et",
  "key44": "2DTnbM1pA3hU4JATJoSVWje52BZiKAXs49JWSWnWSLHPkMTkSufqjQUMNV9NKBmRNQujgxJPnsRzFr4Y6UxK7ECh",
  "key45": "2ABpTUbuJj2Frmi9kxjdRfU2rowPS1KmbJnqmjGWaMsTt2i4xe9fKeDg49AGYfsGWGgt3HTEjRv2JZXAEDptsxX4",
  "key46": "2XaNhdWTF4Xj3F3sbysFQxYs3Zt5AxP1cG19PV8vvbdnYkCTUGBjjCWiyiJHnFrCMRXhJTgYTcu8M2dFzWCRHk49"
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
