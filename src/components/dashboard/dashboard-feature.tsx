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
    "EAhFLfVZ95zYsgdv7TssZyzV1fgqx3q54HpqkhMm66BYUBZCVTJZMjZ29FXAizJyNECsBxPsEwS4c1Dnaa2ZGB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iKk5nukDtKGenC1iwdNdDP4SWFAMmmBmGY7dHpPiSmpCw7DRWWAHDLp467zUw64DaUT7DqFrqpvUiB3yUzFpPM7",
  "key1": "3DPPYwaBKLEFbYhtf5jZ5d4vfzsWopMtHLm3BposLJKeEfZM1hxN8PpcYkH3Ua6bJyyAaYgk3tzsx8XX6YyDe2N7",
  "key2": "263tEZM1PYNmTaq18qHJKG4recqvjdJPU9zS77b1ht3kJSvZZeteCz3EsGuX1Z62WVGtP2rFZmF6CcqFtLHDM2q3",
  "key3": "5ubkjuWV7s2rWGWjkLHE9FcGESrSepvcJTyKd4MZhwrKebbSPmYJbSDWDuAW3WQx6RfdUhG45Nojoibxt51e2TYF",
  "key4": "5QQU8Bj7qNwSAPeF5xj4ZgWfkcZPEVscdn5xpkN8YzFko8BzFG6CR4eYaGzCoPxVfefESJ8z2BUUVWPCrHLNkuWb",
  "key5": "2YiXcGiB1iGnr7d786hLSAFBe56RCftCBtkS8uXUkpvEdZVZtm586AEkV8x1wRK2GcF1NLVYgFr1uoC9fQm5Q4Vg",
  "key6": "5ogppBiz2qC4QHdfEY5Y1kUFL73Ne6DNWc7eyUng5pfMmScCgs51yu4B7kJA7Kdrzoe1ZxSgpUzX3AXbhCiNihNn",
  "key7": "3azcqRwCF6P6q4gUZfTRkKbXcgiYQ2VWRRbkpeDkAxfAVKRFSW6MMU72x1sYZ5SZktddZnhce1iQ5VtED8x1uA5X",
  "key8": "4cbCpPf95HjkYf6rTEAo2yyNyHnJpQJDW64DqTo7bhr6hTMSqDw7BoDfKCo3zJjBxb6vVydyEhY8JmLnrg69kNia",
  "key9": "5n51YEu4v1HRMurqaKLLjGUwyxbEkvoWaNFMjyQwPS12gJWyzzxsZ9kz8WdMKkpaE9fiQDoxwxThvc5bsRQFNJgV",
  "key10": "5h6U4RfvijYTFJQWZedSQfDUZn7wmipTwNbxCHQCrs3tMUnnCApWSq39Mpk28iaWushDm6Ez35WAd9aMqVrQABcB",
  "key11": "3NqcH6wFACY1kpZwH3NpQmCEk3ZmyGPQpQnEBAphsKVNik1Yj9BgNUZ1iS8AS3YzgmwZQaAjkd8Q4bfbyCaZScxh",
  "key12": "35iht3GRduL5uJcUbt3ddfNhLMqy7tJFrKkMsTbrqp4fcrQz2nNcJAcp56C46inqxsJFJqY4hpPkMvdo7X4ReuCE",
  "key13": "tPuRXvy5JfLh5ByVJCX4i6GpnSwTZY7xQHS2CA5VxCsXpG3TFjnaJyqdG9UZpytgosWWoVHHKA3CYn3dcoPHCXq",
  "key14": "2wE1jcXVpbeRzjd92Fie7Ba2DQoA1VxNvoGFWZvXNa7jnRXCE6zvqMriG2Cs4BXbfZ46vAA2nGn7KweZ3PUUJVB3",
  "key15": "679ToRnkz86ETZ5N8BidsB55hkdUMJ53vFXpFRGsrWNNGuPSAnmCwuj1g2BwKhJCUs4hntQL3sULXhxuio3vHPLQ",
  "key16": "4H7ZYvKYPjurvMfknCsroYq7sSvoasPxwV42huTa5RdXBtwDeD3xtoCRmjT3UV8LCWYKNVX7Hs9HXeVf4So1MXnX",
  "key17": "4PCeAXhpny9wepdFkyioEppr9qGGC281xj2ktWUu1SBauqSt975Ah5vPU537XbBk7bFSn5HP81vdUpW3bg4BPXEK",
  "key18": "3q8U5VqG36EyB6dNVdEjLxka7AshvPmD2V36WD3tZANYoiSigBitb9HXzcJarFZFA7HEG6ig7FMy6CRtufVVXFPA",
  "key19": "42ADfBEBD9dRMuJ58jYaFQ1hSu1kYkEJoB6DXPeNonuetTvX9fyPa8UiegAFjc8GkSuvsxzX9PodCEsBXWVqFY3c",
  "key20": "2vVYBEr8CBXqXGwgTqXEe6FN1Y4dsk7iBjQVp7uWiCzse9z8e6BzYneTpzQ3TSkKUYfo9QQ1r8DqvQHsKu6GGDqu",
  "key21": "4MfRyqmA3PqfNsdtekdgB7oEKx4TwukJK4sjc2mYRHveAzwCVZQvTDz6zoJ9HYUv8nqSNoWiYUksUSzJ1Y3Gqyyi",
  "key22": "4PWxXVKTGdxwkaBkkzSQYfPAWPYB4fC6hCJpH9ekWcKF8so67aoTWce5RNk3Gwwxeo5CYiYT6gsoa6Y4wp8xREeE",
  "key23": "23932qMoD8yFzNonMD7EMGUcsZBoxRGTe7zKNHEdU2VrbDmz3tNDvVPyXCUWYoaA57aJ9jCtreKiH3dhjCvNV4Wk",
  "key24": "2ZRYuQoezeTAVZcA5CpHwEpVCdGuYcuJXAsfFgxVgwPqfB3RToA96Fybj5SxQ7ndmr7jdErszvRwiUvjiSiZNRXb",
  "key25": "5WcmeXHakouXMmp1Rxj8q4eWk1vD3mNUq2zaVZxSxwZiSyK4RS1GGsJj2D1ZyfnePcx4isYnr797DkQ5NrspfuW4",
  "key26": "2HFzsDLP93bVQTPiyU47QvRyHwpZfqyadJyUPx9a8hjc8wmJodGZpNJLdERAhwu2UCenSFABLafAAt9uX8EZYBq1",
  "key27": "6a5XW1RnVpUUtDn4zKo4H9m5zKuiES21iHnKUnkgfQU5LSQbV2XxiJiYmmSgqtQco2NtWar7RV3boZWqcaJB9hZ",
  "key28": "3GHHnudfSaRyp88WPD38ppzXzM7cmXB4CqYE9TEDf3dVxBVB41doqh2PZjXQWgYof5UmmHnLjwTQFXYUo1xnv3dv",
  "key29": "44wmgWefNF6aNxJEmSQfdFjhnyZhvbguF1gknjLDfvUVoqFm6cH8PgJDj9JJVCCr1t94xK8fy9PPGMrFXMGo1ZoG",
  "key30": "swu18VtpMqRDicT51jjJvmveQ4ieqeyiuEaDCFJTcVDCRHsspvHtURAyF3y5t99oE1WJfDQ7mQsLjML9Sh44TpG",
  "key31": "mfUAGC7tdqDokMsMotbWMRiyXgVEZcyYUe1yrRnhd98cciMPLEGRf6r1MzGC3TJnvUtJKRj7oSysbgPv8CXbCXb",
  "key32": "53ErKgQAfzujASKLBxbxjTLeTzW37bbiRBiEp14YDXij8oKU6xz845RqW89uU1A83dFZ8DGa63Dy92z51aoXVj2w",
  "key33": "3sP8mPVeK88NtkgQgj5itG91PoYZDpZEcaz8FAZP58KKninRJKMvHWo79BVJvTWFAdFN922Ntu7dwEwYDgfhrw6Z"
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
