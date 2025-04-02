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
    "5J8waWrU9VwfzGv6kqQoRuSpzgrAAWL1VWn5wx7t5EF6f8ESKZ6JCKiAbxX9nke6HjcJnhP2fmk4ms52VxocHZJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "627hSXtDcRDkGBoLtKLQ6T7DTFxhuHtW7DQC4mbujLQWuw7Dk5Q7vrdC3YxoTjK1JoeMsEoC8gzbtsqQvH24L1ym",
  "key1": "6XXCV571YH7QoPnWtMMeZq1XGHpf5MLYEg1SPHapW7jds3T9UHkv4FPMbiuX5AFYGzcxcUqAY6Kh16pDqVWpcQb",
  "key2": "Mn3eSgCjJQaCYBPqbzxsFCHJmeFtWr3eUdVWvdCw86ds7uTevMoP1xJxDCZ7GGUp9y45Yf8zKcJn9HvrPosa7De",
  "key3": "DgYJyxLfDyLv7RYEssxXZrLzwP4vWT1MLicZkznjSMaVQt3JPPhJ7M7rfxahLoeNZwVYfwoEnsfhAYGsrvx8gqu",
  "key4": "2zy7HQL2xsnxDr5pd8oJErnqmwUfkK1XArycusrneuXoQ8yEeXeSAAVyGZGfyv77wFZXTLE4VHyCJngXVs2Pu8w7",
  "key5": "2KaANkEJoHP5CD4rZfnEsm7aobo5sugYyGqs7YSjuUdqTK3i6mGhhMCo7vojzX4aMYDzxNGDDosL2dKgnrJiyXrD",
  "key6": "caq5kn5rcC4gQuQJCZP8UGhXjYy4b4ibRs6bg8jdajLEHk5v9K8z31ngkopeQ1Uua7piZEbSu9n11nRhYFDyt8A",
  "key7": "3opB8ccLRE66CbNSe8fUAdfsrHxAzRKcBWeUbZLwfmWE2y13wrb6zwxPDMQttxp1yKnnzFAgptFAqGq82PD8txJA",
  "key8": "2i38SALFnAXUyHBTV1Zt1p12duZgeg4XxpmR2SAYgSSVagXbz6REWwdTDah5pbqbzhf663csgvabJddmZyjKvS9x",
  "key9": "3rzpfewpxo9Et6zvHLt5UTuWsrvnMTTHFanExybrMqDS2ZSHbZjPq3GDeBQ4g49BF5AuDZ4TrJCNpUnpR8VjwmSb",
  "key10": "2HYQzxck1uJJMjmvmLFtFVL9FNbJNQbNnmXPZmrDNQ5S9AoZj1Pi7xyhzWNKofkYXdRgMPSWBAoX2ynx8h7uCJmF",
  "key11": "jE2a35EmV7g9dm6DAVa3KZvX42pzRyQGdFaBj6DTMHYW2cGaLCcg4aRnCB9dyDgquSbgqvY1cJfegj8SwHz1rxN",
  "key12": "fJUEWBQg2re4yo1iia1ABx33kRH6VZQZXctcDt5foLjY3CuUQj7JjMDUq6SZTkDqMeWnGaLZowvhBLot5uxQMzR",
  "key13": "24Vefj6Cb8muTC8tZFkhLi7unqYd6nJ8LtytDtaXHLua6zJ6ycXqN5xj8NufFNVSE1qJ7sUAH7HrrLY6u549MYm4",
  "key14": "2g3JWF5QXoDa4dp3SibprBDKMt6Vw1Z37NQ43od53ihhvoseLLAPEqkdg1pSyT8z1jRcFzek4QMxSnp4qkWr6qzH",
  "key15": "SfEzbFG85KinxaxtgcBaKRHbZaYp2Le1mRngvisNUzVaW6xfUfxoqs6A1zZCs11q9kvQaGiAw3aL3jkTWZSamHD",
  "key16": "5mtdAa67MR6c1xM9Tpapak7venscRVhTZca25aKfcjvyBujyQZSbLj8GRYgdCd8FQMXopTo38b3X2S1FNM6z7kHh",
  "key17": "3hTh9LQcVTnQs6y3qtSvSHKqcmka7yZs5GyuHHYjk9VPeDA1wiXJcs4sicDT7asVA3foeUy4kKjko18Gd6RA5Avw",
  "key18": "5GSneZFLcrPLeoVmVYEkCLp21vpkU3QcBcH2oibzpTxQrqiWKuPYBjYoVVw3ayA9RkdcT7AEd8uqUDU9bUx9Sa6F",
  "key19": "63cs2BpuRkqXRWMDdzA7gg6E7tH92YNnECF13K2YArbKKKmDWTB7VyxspkodEfjukc8mDp2iCcprznhVHuVo1173",
  "key20": "4uK48pJdMv81vGqWZjwFTZP93QDH6MzHBBsD49upNLfbwTeNnH8FPW5Yyfxmy7b2errSgLMrJAD5UNHc7KYb6L3V",
  "key21": "mALAfTWupLn1vUctHhDad6GedJmXtqTjVEnfrccd6nu782Pkg3BjzSLciV2uhdvBpN32d1GT7Qz17WoaETKi8cJ",
  "key22": "2zoGhvdB3acFAUV4wfzgLLAxjuUF4GsVbdN8dxhfQ2zdmy37uUrAGh6o9MFm5fVqzSkXwksndXn7oXBoFZ6toAyS",
  "key23": "3mrJ2PEbuFHZVuqohDVvEtnoeCx1JPkjCSxAgQqNTN8464UcdQuez7cmhc3BfDzCtHhD1uus1Gycjeug92FrbBou",
  "key24": "59bQV8trin4sQhVsZzn1A5ppq6ikSk48q3J1RfAgXoHzCYP9TZstKQ5VGZKnsTZ1257L5DbHJo5usHSGx7TaeWgX",
  "key25": "4YW9CS9aHs4cTLcxYE51L7YvZ8P8FEwaEaZNFuKK32mK79FKUBEHx1mnZVMvm5vwg4zQkifAcfMzNhUusQ1LoL6o",
  "key26": "HPGaz25WBrUVPcXgzgR53U3Tj62v1ST3ufELHXonpMq5MxRuspgJPd84K9VTYxZ5XJKU8GXgiq8zbDtJTgytcBy",
  "key27": "5PLGTtTHLmArAXHwpbm6L3MRJm3Vwf8wFSJ1DecJUWEGFsVED89xtrfRj8V4CyxWBN6VAnns4twFrbpeby6UGZMh",
  "key28": "5pS4jYevCVSmRRD9sw5Amjv8yhBnzoLB2ajjrefeV7yDoYeo474GKgef3TCBUZLcJY3o2UC1Eg2k9jv1anYaCnCm",
  "key29": "4aMCtmLBvJRKx637m3FPwEF4ZRWpw8oypHhw3oPwq88UDGQ4D3CEPMp7xBZodqYjeWYqPgA28BqEjxUnNjtQ3dNC"
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
