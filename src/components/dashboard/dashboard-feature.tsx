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
    "44zddXPMVpKqcjtLEnNAeQjwhudeePVM5bN84QHLQjPhDS1Myd2dFcZvQU6ib8d7FYgAutJzhGuHhnkLR32hVfAZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27cUJSy2cTNoKyV6D3qz6xFASDu3PsYPdK6GZBiNHEGv1zuWzqYvGW7qAXTrodvqJrNKF7SuLe2SbdT7Z2qqWEbQ",
  "key1": "3cUAZ1mfhM6x7jrDXgxrwkspq9qEAjRPBhuNybdXqr3c8ojz24GhHWFhVq3PqY4goy6LGJTMMeMnf4vm9NH72W8Y",
  "key2": "287MzmueSsmMPmbsZUY7hidGWQ2YtnJr8NUkVyLTtQTJsw5fSC3hgF157RZuPVumLRDGCYvjN1VQ5cQqpLixSowh",
  "key3": "4sAJuXJr4vJiEC7WJ7ynQZ2p3EvAeVuWdyeQRjcUzsKZr6UDwWmtKfCJKb7FvFZ9LLwndTsuFGwrJHYqCzh7FR4e",
  "key4": "3U6pPHik3SgWhokaGWmGkSkPVeZhM8tSHX146SPhoh6VK6ZGHHpB6uhu1TL9LQWjwc8Cqdes2uDNCP37V1669vKQ",
  "key5": "2XnWkSFTjj9ekRHNVTefLaTdp84sDApB8M3QvVXMcq188hxRobcVorE9YVBtfJ3n83NykeLWreFXkjCxNx5kaXkP",
  "key6": "2u7wTSHiBGfKecjvMEQ9XWw8JNwvoaJFJ8nTDQViDsKyuF6N4WY6mmaj2Q45DGe1u1xQj1gD84eDgLaaP6AuPACg",
  "key7": "4ZZXDKgCyFkYtSZ3wpgYbvZfdLDdaxKZT4fPLfWwR4dR3QEVh7zqXfNwPTudqCLHCqi5pqAVpRfWyvXHPoifWCL1",
  "key8": "2DCm5LbLfmdWJsXTzBkRxVaRVQsZD9gCGPYmvbWrZzn6HoG3FRag3qAJpjFfRdSWtHfYrTBFQdbGbca9VMJb1y9F",
  "key9": "5dNsUNmLxcaBR3RwiTmxAEy1u4n5dB6K3mCwnC78Xso6vRyv5Lick5CFMigZWgH3WukCAfusmjmsjmqJLRbBt8a3",
  "key10": "4cETQ345fiBSP7TJFUabAJS8BWrizjRLmDqH23LSQ1vj8UMbrF3AmPKJ6Eq8aY45VEhLwZaaPJDM295sy2uuqbAd",
  "key11": "4ZUWdk1Vucfw7dH8Pecq8PxfFKuv6RdZaDXCXSVRxBR1c16mKJokhM5XWmSNdfH6qsP9fT3LE9oF1jzeM3z7eGxC",
  "key12": "5oN6cHMFwmyPeLtgQNjgQHSECUTEHGzq2yocN6AAkQuDMEbsRJBEwWgSQkX9ztrgSkfhXPyZ2AG8psB7swB1cV8R",
  "key13": "5pHAnZEjhqEcU1YEr1fNSKL5Px6c5ga7PMCfxj1ZhHorKeSDPivCfzWZ1NWgdawuc4W7U4RnsXnxy3Pgrxaoh3y",
  "key14": "35y4RAjC14pVVoaisNZ11seJMRnPTVcuSu5hs65VFuqXFdx4TwNWy3YNPS6VgmLC9AkSR9KX1jVhWfm4PH9mdNEq",
  "key15": "uJ2bX7uSZcuPTXZ1PtVgpFBTxPQN1hwJMzSDo4i8uJZx7fjBgBpWiWkrVhwdMNcjpxoTUp2TDWzf98F19ZVee9F",
  "key16": "444NFprdYhHggVASBhWqk9ssjp4XzqCBiHpu6mbD2qPHJcXLgBjcXgXbAMtD6bKfoJNRiDreLF4NcuvF4PqSDNyV",
  "key17": "mEVCQBxgaMyjrQMPVAo6kD4Mg7s2K5A15MYf9gtukjmbYfCieeD66oYtpnwJJc3FvYARCPbRgBkCweUFjte3e8c",
  "key18": "3mbKdyhuL3Gprmz761aN28jYHbcvxf6n3FrKHSx2HdXYHtmXegFMH5nzBPY5LYGW3cSS511cffe5k8RoFxppJfrG",
  "key19": "3HT5JUL7HpaRhjrRms6V9zSWJuM5z9VEpckDMBtcrwyRDifBehghwJ4b9WW2AqLsQjQL3faKZ3fxV2Kk7tfPnAWn",
  "key20": "4h7kszp8g2jPLXoKgSccg4M2qmiCo7QgKfzyYZq9tm5LAURSBp951QzjD7hgmXLpXhsh9jqXqpSTDZ7E6dkEPMvx",
  "key21": "3XYSiKbgzPo1UXob9Aj3q1oyomefTagBrL2UHbm48rpt3w9WnuRtGEi9MT5m2iwgZFcfJL3CWdTognBucSNcoV1t",
  "key22": "65C2MEvU8nVqVfnw8fdv6tEhBeZAUEXEKemxWJNjmT6iPhEMWeXN9RicwbLaDqvUuikeUYPe5nqQtx1vrsMxYQFn",
  "key23": "5K86C9nV4ETQpcSkGfA4sAPcfdNmcnEAFSoXFbbunSC5LUJoJmhuiZPn4fJi5MouVsk1Xt9HzGCfmB1iwEpaoGMz",
  "key24": "4bxpHnFstrPE13nWR5fRUgS58bey5Jcdhe2YzMVKZrJLhy4tEsX1EFGQmNPQ4rmE4XdYt2nfPmBF6NQMc5g6hW8D",
  "key25": "4oPZ5or16f3uqYfzSsLrHSuK9xtwBsHYxSteYa4j9guuM5oYi2eE7qi3M2QJebrNXjSPb5ufYWLTST14bRErzpDe",
  "key26": "2p4Z49xSeoeqrebYNRqBnK2yjgHbJ2KUGyseQd6wcnJbHaH2jyhyjo5EHX1wAUPDs23tVD4B9P8eEzk5cqzjPv31",
  "key27": "gdsK9rTB7ddfyfN8Pqv8Nc8sCFvYHSMrhS7fyRifT4UbqkKmfTWkQkeWHx7Xf2nxSTog6iAguqsFGiY98dchk39",
  "key28": "3q9N5zZzTcDtqFf33ponMmw3pnke179UTjbvHXVtJeLreMJXbPaqDBoUmKk98fVg5iiaaLoeNJsWXp7qN8Lq7k2Y",
  "key29": "naAc7NQBxPRGQebFMmhDPRtkamga15tLwjARpd3sUq5o8Z6RSoRdyL36Gz2jjomK5Dpsjr7F3Bv7mHr581uLCuN",
  "key30": "57jSNLN4H61Tvo8hjHRdh9ot9ffEjPmuqx9RnBewSukkLNaYoM4nJiZLto6aeZopvBzV7QPhCJo2pL7qrnHak4ek",
  "key31": "53amoB3PVqNPSAuPQrNNVX8h8spnBZgxroQnXqBrXX2Mtibpe3YntAb5F9Q1EtJ9XhGBrub8kjYQhZaehk59EdUM",
  "key32": "5qMLiW26ZUBCgTVVHyd2N8Eg7ZzctEhG14oahuHEqPHPMfA67FwcXuKsnhjf1BVdDoYu1XiZXgbhHDN1HcG6e7A8",
  "key33": "S3sNWQ1oudKhm1vfwKXXTtY4R4g5NPyiDL1fz5uikT6RhJCDedGT341uVfi24nHznMRtXvWtWLqyXPKXsfzNdW4"
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
