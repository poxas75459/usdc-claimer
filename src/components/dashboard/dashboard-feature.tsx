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
    "5Ceft6NZf9EecPa9kxFrwgmB7bjP7p6YhqGJxm8ccrcWeReHAWQGNt3XvbQjuC1TUU6LDLUHfsJu7iMuM83xfkDh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q6zqiL32w8QVicZBj6oNWrSReqde7viKx5M6eauxTcX8gMCmjzfc5twkKcCSztd4QBePR2niatuq6DA5LHjFCUU",
  "key1": "GJh4zGqMeEbQQ1gpfXyMR5h3ujERfsmwWmikvHnXQjjuGXYgo5tzgUjFBeFh8792vPWzgKnQnkhcPDdZqEVxUE8",
  "key2": "5BevWtVRAyeAjrHx4mYMALqN8LpwHrWpddSmGpAHAFAXMrR9eSpDwuWDcadEQXuWDiPYRayYuUDEN2SA3eZTdgNF",
  "key3": "5gaUfwRhMYRVQ6EP2aFuvk3sFNrZZGaYQHVH7vH1mbdbe8nYd5EKT97Wuy6fWYwiskDQzJtQd1j3YUZ83gCvPwdd",
  "key4": "4RJR6yXsGpMcDwnwXAMickFob53a9mvW2BNEmaWbN5rkkugBDTFeThubP8Mgb258dRLK2VvGJq8r1sFa2DupBtd3",
  "key5": "39Nsg2bGLMjU68Ki88MdjSWF2k3GRLgBaaYhHP632PzgnN2HKt3DmrDdvw3Kz2ydydsuNDgWh2ToeguqyQV9iYdL",
  "key6": "4Yvk3uQxB315yThv6HDZKZtfsPPMKTypbUb9e4PmWRXgU7naijjVF3t9LcgPDLPPyqEw5fM2C1bza7dgpZ8HDmdF",
  "key7": "3Af7Qz2HrqcpgCFUEstuK7vQ4aFfBZG8r8aEiwSHX7YERZkmnJsB88gtbavdHBq95XNUNwMAe2sNcJh6CH5rBcVd",
  "key8": "2YvrZEg7rnffaxvg8eBty8fzwEFSVm1DHGZPuDEPxUhoM1LuKNFygZvJ11FSupeWvEnyAoVp2gx44BCsFNyb8Mwy",
  "key9": "wMM1YwDByzYRpP34ZcNXa5DWMsdxgyqmst4mEwX4qnFhzw7spWuAnZQTNJExW2RxzjcRAriFHp2ezGV4aFNTZiW",
  "key10": "5hXEdPevKPL1WGWv1NeKPTbfa8nmkag5W8iN2RyCEbneuoC5vbGJNVTmJidcB6xN7nVHgrZ1WDZGyFQQ6wTA1F4b",
  "key11": "4vYNXFhEC1TZkWwxAemkNHkF2pBVSPzZsnJ5azf5DHu2ZaUd6DUt6vxrkJpEoeBTYoYmWgZLem2p8eBzryVFxHBc",
  "key12": "32rbvAx3miEKBMQXManrrXYu914owsQrQHp4tm9x4Co8PyiPSrnE941NYtAiKDcwmhEi9ZfnExqHJWqo371UySxc",
  "key13": "57VNE2kXj4t8qXjjBedC2m26kovhsGjzbFGkxCbSnhMm6FhgNUbCoi8whs1pdGnQn1zTE3gzC1syiWPxqrwobmtj",
  "key14": "4886GrzgxpYeKgrPAxHsau9eR6NpbzYFKcqdo6VJ63qBtm2hQmmvqVeEc4Y9stYYbL5J26xY8RhyfEAp3mLGrBec",
  "key15": "4P4TF5gqwQSPxtzDPJviEaYaUnjUSZ6q7FhRNgrDiLv49bKMfKkLVNFoMzhQr3f1ZnQvC4Z2Ag3w5ZQjhnM3rAHC",
  "key16": "5a8Niiaqxi2EimGHEgndyBcVwjcm9k1BjQFfq1X5aaU3zh36g6U4YEgYp4NVAmS5yodKpqTXCXJ8YJtadmKrbHw8",
  "key17": "6GzXBk2oLL5X2gCYA17VNB3LshQFtdmRbisD6D7sqH4uyHq2oZmc8mbqKCneQmh68VY3PAqu1bTbR9iB5WgYNwY",
  "key18": "41jZo4b8GoVxn1Xdf7MtHbH148o8z5FGikvbJij46t8vfNmbV6okU5xQ68sTCLPYnkbFTmHF2gYv5gVfHDXodQhg",
  "key19": "48BZKbXfDAzRcMsVkBbmqpVQ6XUkgnz4mtXt7qYVGkzNiovWxk6EgEsDaPNF1wtQguG4XY6w3KrzU8k2QXzajFZ6",
  "key20": "4xbzPrfxL7PkDacrRuZWN8Cs2N5ZVpMx8d5QoEa8oCUwHfJYPuSh3NbfSjHaVD8WFvnLBM9D8VyHjvzaLHYjrZaB",
  "key21": "3siBL6yY3TtQGnGXwskuJwQuBv7PDeX9ZARm6g8nuDS1cVVM7cxAyZzzTtQuW8xNNgrt3999otzg1HyAbTM5mEtW",
  "key22": "4uHBF7ADAtZdEB5LAAGdsk4DPeSf5d7P4SF3bjB9x4Aq2BByYWkoe1p5d9nmDiBA7N8j7bYtwE1K7PU7cmGWBzpC",
  "key23": "qJWXJjK5makngZ2rBoYE15CJnE1RPYD2detPLg8ToSZmkMhTewmjXshwCBG2Q6AHHH67vi2pumV3Ni56jDbcKyU",
  "key24": "28u4aRHmZH1SzYDkpvZyc1PXy7Byh5JTZUMZ1BYubHQ87Wtf8qeCY5GAAb7pWJ4fpF1RjaGBBsmZ679NYnCbQY9E",
  "key25": "5RqGgGN5ftT6mrpUjDPS6JKSvkgezjnnZaeDEt4xEFVmmyy4MnSz5GPdCSZjqGSmrQYgvqPifZwGXW4LaJwTPDs3",
  "key26": "XH54t6QudziePeTg9ckWd9sRbaiMva6R4kwyHFJ3NUop9bUupCnDyXroaqKfdCdHpmhbZZNT1V6p7G6U4ic62Rt",
  "key27": "2sETPQ1AhEAhZFRHmZfdHnfz2MgFSL9Vbc7UG1dESmWyG7z114uaaQ6rwYKYTCbA1Qn1QMjUXLBtMH76z4Rt5HZ4",
  "key28": "3ExsCpkUXUbRNKeq5mzWVNqe3z9U4xnv3x6Wb5c35QL33RkVZySn9DKxf4C1fyq5M3yUo1s8Vz2wynAEMPU1QoK8",
  "key29": "3Usd5R54NwXfBB6sAMNVV4gSzRvEQL772H7yzBhV6VhifEb1Bo22KBHYdRwRL1A8yWmTtKu34vvXusw8WXpcz7x6",
  "key30": "5QtUuBbpm1gS8fzasP3BKWfpMAE46HQaTjt4WwksKnqViuejysbH8JXA1pQK1GjPRs4ot27gB6LtY4qFjkZwmx3p",
  "key31": "2CgDmDrJ8CcfEPfr3GzPYFo3F2DuRbxfBeiE5sft5wobaZQffk7x8VtvcnZVYCzdJNxLXJwDtDj6Sv6rKwYffz1v",
  "key32": "5iHU3zLR85yoj23iboibHUEFKAm1MZM1bzrmBbbVR3WryKfmp3DNVY6fcxNHqUtC2uyf1a6fGCynUVHAQgKW7MZx",
  "key33": "4eT3bYzswmWWAhvawFr2khqDxA2hx13W5gss9wbX1U1hEgbNFD3qXwHQ3YawWT9ePqD3LuQB7Y4vKcSxmqzBFc8N",
  "key34": "3urPo5dM7k6pmJ2eE15wdVc9YMiRqpe8fWFQVryQGHQCiXzg3jYAK3ADh7TTiCDtwF49dm9TxJaLDLakk5RPxMWx",
  "key35": "2W3E9wmt5tXjUZWjaSs3YuxaZBBZAp4VehLm1UB5pVoFHrNhWMaEzxagEfstnAFRF2hqGGMhud4a1x9SMLU1xDMW",
  "key36": "3gpfwtWzUDkice3gw8K9m4QywzhasC5DTsY3HfP3tnaoen7yAnLbRJe6qqc4f5Ejzf7EHTQUXYVrhtbWTxHsT7hd",
  "key37": "5WPFHwwtSArXLyJvwFwv47oinQnBYomFu6ub8AGPwFEE8Ev6c8z4j5DveunWQ7MwefaUr2RfpSv4vGhJe7NuncJp",
  "key38": "2kzeTqJvxoLgktp19cugjsoBJWn7ip3w419DBxNgtDQxL9KM1eyQexFcuzXF8Y55gjCVWZueekCX1J8DZVrND9ZR",
  "key39": "SYv7wdTecMn38mgpX2g9R9SF5SDYb8vk1ASLMUvrwzC71MMijP91dkuKrPX9fM2A6iD6ELu8K7P2Vf3xXgma2Ta"
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
