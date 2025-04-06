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
    "4kdciBMBiVtQ8uULe7UazzwWpCZuNtH5sJSv5SnGnqmXVuXnUHuNP2srAk11CZVY9nubTdBPUcWoqArhZNQdqwDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cSWKpeMVWKvED1k5W5s4CzerNRwH7osch2pZAwjS4YMuU8Mjh5N4oeS1H1zauyyBMzMRtsCuD9qGNBtrinsYGE8",
  "key1": "5geJP7BajKFvEzL5LGgE3mvvUGT2ZQxPAcwcqnEMEqyc4AoKHeKgcnq9b3DGL3kNB5oXh3PSGz1Pdr8Vr9DpYhYR",
  "key2": "rMvkHBigsnED93RmiyrsFUn8idHJDAAK86u61EnYZ2y88Ya52wXcDC3pNsywCXKLcg4rg6ZfUNqZNniSefw2VCS",
  "key3": "5A2Qpc1kysLZbxZbdphBFKTkkV3XZReEz5zxbgKw5rfWmt4kqgZuZV9z89ZkD3PMndtnPmsWoL8YLLZm3UgCJ2Ny",
  "key4": "4Wkx4hfUe8oM7uKGQUqSQKoTNpsSL5NM2VR39hYJsjAXhou83efhhNQa8tCfibnFwzuMq4HWh1cuAcMmJm8qmAsB",
  "key5": "2v4MeHuhES4UdzUZNXRuYswrK22ChV429kbruF97XQGQBYGzp6KxwnZ5ED8NCibfBjYp6dJ8PgGgg7XJ47TGbVpw",
  "key6": "589haPG5KsRThBjveKWnYFzHpQr6eHU9VxdkYAbVZD1FPdwMQcDZmafAZrc7po84seL7wJNAEwSMptEgw77YKqpw",
  "key7": "JfTu4fpjnRfLdX1v36WcoNQtScT8EQACiUzWRwgKGpDfwTWPA8tRKZ3PtpaqobHeyA8LtMRpM64xouedz1FdTiv",
  "key8": "62QXM4fZvKALqwdz1ZHZUSdr4Kc8GpKdBRXK2wVndXXomymBK1BzLC9MREooyHwx1EppAnDK2jLFRZePyPhFrhXA",
  "key9": "5err8YBSNTFKzofB9uvmuETucxVPecAX5y7hhPCCPbUfwXNFHRi1ynXHRRJtgTGb64APaBMM1CaiXZD6DDEiWQeX",
  "key10": "2bteAJw377Q8yNgDb1oCqSktHcz3Qxn2ymrke8PTo5gcCbiqtVeVwKLg9cgALszgCkRwZQosbDGseqV3sNd3BEns",
  "key11": "5tLzMfEA5Hv9Ma4sRBGtRNu6e4roMeXzDyPw2d41cGdAufbJt8H3HcsBBPfTn5TER51EsS6aymmjHGcvFmiR1Nfz",
  "key12": "5SyPH1CWN8pNCUby7tRLs7vNC52VToS9vpWEpZDsxq36JtMQpCuAiQuRV6uSMsz1ybQPetDsYZyAtMBzxnmT7ji4",
  "key13": "3oQg4wPzs4kMLdJAGWKRYSS274SoXJuad6L62UQpyR8EfMy4BZ282GgPbwJ3VYQMKupqiNHJB8jTcrtAfXyBrdrf",
  "key14": "3ECVsiR3QfAd8Nnq5meVnxoHMQkoD1EXDW8WAj6nmTYXnr7cnBytY4rB5CGqDURBzFLuF2sfRAsPbsVuFVgZnmnj",
  "key15": "2XpEdvGVq99dxRQ32NZXvqru6MCMofRsSZF2tYP8LTK2NKrGeLxCGv5DNvYtRCAbdoia4vhLHgnYnnmYRyGMhMcr",
  "key16": "mCRVh2nYPobMmjg15pE8NDW2tLgvvgKDU5aDFkuLQbCosKPLXGuA8rQXxFcmM1x1SSGP46TJsZXFKAsXL5GEh2e",
  "key17": "2LsXZo4GS77yVE7uGxPhYo1Sw7LLqLHdEJ8Qswm997uU3wkk9XqhyT8bQoNUzvqRe5nz3dhqjT8evjmePXsm4sLJ",
  "key18": "486eVysJJ41kUREkK3Qemgcc1cC7DM8CbnYvaRrqRZksgQwNUUTCvNNyKsTMoopKf22VFSYyAFL1ekfr454KktF6",
  "key19": "ohcviGgVojNQstQDkDVyFuPgigtghxybyLdGaxAAbfrmsezQLFpmZDhPDE8bfmUyvBZva7pjFGqTLqexngisrcH",
  "key20": "3oag1YVc7o936Ap4VWRBoW4CRNN2ChbpRCsBtoYU2FWsgnEKUmSwu2yghsjLGQVtoy6RE1U54axrkVz52JWbRJST",
  "key21": "DZ8vwxvmEn7EL3enboJJMigN3zbkLEusstYq2gFaeUKbFpUongNhH7ojAY1JZmcfzYjdT1j3yNMzeSWBDhBK8HR",
  "key22": "2nrtferrquQuUT5zfgT9BNjVRBXsUtNncgs1BBgEihJrBdcaUwMk2LREc5can1QG4RJNXRaXe4PUKY3iVRuBWYSj",
  "key23": "4DeR9hxm4HHPcAiQ8jT7fbDryY7BY3c2MnuiQCAy3LPqDHciVfhKQGhx5Yd2LXqd56LPhbm2SRkDNm1sLRDuPEgg",
  "key24": "3e6bM86fanYWmuix5r9UgRoR1omsHaRrEsYxkYMZayL6Gs3msii85ywfH2g3RwE1D9nHbXZUkCm4v4byHdFH2GMP",
  "key25": "3hx9wJwuBPdU5GsxheHQcfRzuvUw6nutijgnrnuJaTmZvTCMncav3ndTmoG6k8cUzHEhsjQYgsx9bPTPWnytY5Jn",
  "key26": "4XTuwg3w2Lq5hNxRyN59CrGxZ6pvcPFqkdmsWY823rFkiyfY9BWzGji2J1a1y2z283FSbNh8e3aCFJaqzbKGfU3L",
  "key27": "5y94wwUXGueshbH3DUAhXUopKHWm7Q1t4fX7RUVyUyCGPFy4DCCvUhjwao6oMCZZXbMKqL5JHtj6ESk24beKMc19",
  "key28": "615F3LWU3WC9K5n5yNrWAwGQN54Lxxrb92tKBJm8mmFp66NEHut4d3gFYgYENBj1cT1YEcPPhWumu4dBrb25oaQP",
  "key29": "D4DHtrbSBNzM4iRk6LNe1PFvMNVWdT76S3fw9vLsVCPaV6GS5E89PomGdce8hz89fhxFzA3hEUSn2wZk1qMXNc6",
  "key30": "5fQK2DhKNarWut4MkjBJhrzYHEQyht1McmFQfCKGpkhAGqUpqduajByshi14KKrWPYwQ3it8yxJF17AyFGWA98We",
  "key31": "4Hqihirf6pNWLx9zwrXpyn3JKXUheuBR8edkYMRjZPrYd4XsZUJbyQFBCrjZaeshG8HFSrd6GEBRn3pFXcNwBW1R",
  "key32": "5TsZpqDnSzbVE5ouscRecg18wzRQGaNxYxZnpM5hFGqNdqaGiZMrCcYizD6Y84F9WQfW61fNYfmae1aYQeJDnLXT",
  "key33": "2sBuBRvsj3DQAzZAZbvySx8DXGmitiiJzubh9zc57Nn4XGSm6kGRqgWnmYFqxgHxDpJ6bBsuJtuGjAhcfKsAhGnr",
  "key34": "xEDW2hHzkJjLCRox5cu7jdnbgGrG6mN76qSYNGV9SJiKDto39yKmiV3eqEg7U18G5AF1g1fxctLxRhAhrCycqRs",
  "key35": "3p93GXXUkokbpZJfvxxNBnVcnHffriBDo4Wv5BSZ4L4FQWKkXSurL2qoG2bErTA1y11fUMyLwHFeipsKU4ReYeP5",
  "key36": "5u7LYR4dKoHWz6o6XCWRcQaMeEWLnxgih7fk2syTJRTgFnTSuqtMTnqjdnGMogFhoAohYPtotWX9kPnZ4vMZ9yUB",
  "key37": "66UyAvf95ippi2TFfgo7QfdNDGfqSFE8XqrMQPVEAx7nCVjdwQVzZ8Z71ys4m3HSN7aa8SuqL7DpKM5uLxyWHgz9",
  "key38": "5Ei65gfy5zjCVoqvnfkn2WDq7PDJ2MaHwyu6Ui8JzyzAdG9urZmqyuLdhY36xjjp2hDyNmtzdGw6vUo3JXRr56gC",
  "key39": "23g8a3hupxHp7a1CqcS3zWFdPLoYbZhZNLK2W387rjkmiMWcAabTaMTDGGpEJENvCPivw6nMW4DMnx8T9cKQNZsk",
  "key40": "51YE71uY4hhMMAiZ3QP15tg2UYdtg8aMUkMT6Ld9UHsxNRftmcfTYj8C8YB2qvrHUJaMzy8aoDib1C9yvhM7WNbE",
  "key41": "2c4LJiM6Z7QXH5m9HyuQhhQ7EwJjiGTuyvi5rL5ZYd7hbfeN9F5fCkLr25Bj2TqAyS8bLnowCqtp4KqRvk7AgWWy",
  "key42": "66Kc6HJdewQVcWd5WGdJyV8NdNZPanGV67aBdNJrD5oZ8ZxfP8ioFYBKQheaWT2ReGhN1Rpxoj1h59NuiT3RWvgF",
  "key43": "3x85QYpb59kuT2Lj9w1uL1DnoBSB1iUvgzhHUrJDXoCSynjJS58WH7maNuFPvLkwN61kGunwvJzYZ1oGhuJ5cuXY",
  "key44": "2iQixnLKGHohsddjDWQ2KeRkgeKio4PnkcbGQdmUu5EcS2rGD4QQKrHrPosAwkL4NoyyUviMABL4icZMqy2qcWFq",
  "key45": "3Sw1DtPH3hYKcoUSdZcD3U2zn4GzitBMyg2MGtSRxnsEP5SVnydsGqNAVpuMXSQpH1nRy9KL1bQYZQGVsZP1jCRH",
  "key46": "2JSw5k3Mj98fJh5p1CL7MP3c1FSPVBCJK1tT36TfGZDfDQRoeEPm2gapPzgKKbcD7btKYv1MvvazWtMyLeC1HRaw"
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
