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
    "3Qn1DBhqnhPjYmuKtvLUdnDkh9xai2c6CNU7jSjXhsZHkiEMHxnWuAvA4FRpWHsx5KVoGdYXkNtP6e4CGaitvGar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dnu11BSXwDW2VNUL9td58t39XCXSZNR8M1bMovtRpRf77gmNCVAC9V38Fqx1MQcnViX9UAVixdkJHjEz14pXdAc",
  "key1": "5wSM5Bj9BQ98cTQbFbEujLEpVG4ZmBSAVojuMB7uWQXFnHBhCEQFT8DWSG1CTvgNK5mD7mwZPe7kfxzTiSoFeyPY",
  "key2": "5LspXxG32AZN3MBY2mZ93VuYdvTie6W2VQA5KCHSZzuhQWpbfxRjK7a7pKYwhrYJEm5ifi87UG1QL9tiwGqf7zBT",
  "key3": "3gBcSFTrXaq4sK4xXt35owpSDCCWzZaRdFra88qAK17WK1cfUS7mMFDyYrn8BMY4gZktJKLs5qV6wqbZFgvTSefd",
  "key4": "3A5MqsCBrSx7w8BgXuU4RDg3oDrhdFhqWCtnxujkRnC47xKsadqsfhLYitoYaEttSjCouBdA9LztbnGAtRDYb1ho",
  "key5": "5P4PLYBeih9dv1g4gyW6WxPWyE6iu28iCduhsgRFQXcZcCxqB759RubMCPmEnARUrgBEo6zM7qyVcyDKqHNJJ5Ry",
  "key6": "5QkjwCfKfX1G68sscfrsuroNweDAFoJpWrLdrLWoUc6g42AcFfV3o5dexVMir69cNyFjMpffUWayo7iJ6B4xArKj",
  "key7": "2coQU2RmeyeXPokiUnZq5jz6bZH7e4qkKqNzir36EWqLnsSC9RNo2PRoyhPpZc3EjUh9khQ4iE1ftPJrY5ALpMwc",
  "key8": "24SPf6tnkzNZZzeUCDoetwW3mVeHdtLZvxxEDEPG3pvNUUb6VrXFQBW4x5NPALpHg7D55bfWkdTgysaqtpGUFX6c",
  "key9": "4Qd8i9wRUVbR5L2ZLETieB5WSxEectoHHeZoUBaHc1MUMuVsfb8sNUWdJed4k3kfXgEdjKcdMNNEjsxYkJJbPwGo",
  "key10": "5S8Grz2R546mRET9Y68uu2bkyxzMrnT71DtbfKYeQn3a4EY4istmrhMxW6HZHh7W5uHoZviN4NQ3YaSiBPdw3S2Q",
  "key11": "2ncpiHXFVjbihZqWvjPXLLS4DWtuFYotwtA2D9asZgMafcSXXCnj9pZiwjxJ97jXsFjhE3U6FvVxzxbVaTEhrBRj",
  "key12": "5B9oNAa5hAui694VfktWbhNyjkgscMHHfkDvtV2a9ZPsdY97P4Gk7gQSxWtEA4hz3Jwz2phno6AzboTexZhDQsCo",
  "key13": "GyGsi3tKdAa1D1sxaGrKC8mYxuDgmCz5QzELW1Q77fpWCbLW93rSRcimjp3nvHygwE6nLDwxq7yAwkCUQ1hxG52",
  "key14": "4uLFXaj7UZaD2HSWkYbLBHouuAykQcjrwcNAXnWBraLBCMQ2xvUyyFiqsiANcZih8k3PFxqWzv4uf3hfLjgijwRg",
  "key15": "64KFuXcDsEL8EDtEU17QBHzCiGUf6gHJGthEvFSjpe322SEbScuSrDNjxCQfW21c1EgJEgCv4RPqq8AvREADQ3gL",
  "key16": "5qwACAaT4N2SFsisn74AAJ6EY3DkRfyUoBBzJEM1YcyFBQ1AWznr4euxatZUuCsk5XZysViKxHyGYCQChVPbkiEg",
  "key17": "2jbHojnHsZ3Ji5YqQ4geGd5sFm96oe489W5grFcRpFasvHzhpFJ2m1BMTLDEsctA26Gjo3V4kUSxqYCj3W3JiQbk",
  "key18": "3nvyzNmv4fQjNNi6p9sLzxV7B2VGxC5NyiEbMEHkxrXpiTnR8hEsJyV5APESU1JJJ1STCLJfEHcXcBJCVMZHmX7x",
  "key19": "56c3tvaAikhcD9HaogzANkB7YKg5vK2FrjPLGWECN7arAouCJzxbS7RhxZy5PJbwfAKrakn1WXzkCBMMYkdAGR9S",
  "key20": "21w7isR27JkQhoW5SuoDBKZm9UG3SiPm6EYN5mYbdNq8bPCfBFw81K2cftk7oBEnmSEYxYJAW9DUtBxbSP4guSpM",
  "key21": "3zFmhPjaKTdVPS6Fb32xQse7VMWME466gbqAwbXb2JfhHAUdqDQKZrPsbbpfkPuboz4fxmVcfMjud7FFQmV9Y7xz",
  "key22": "45iB9kSuWByuNoSBoUgL3KwyRwMtk5dDiFyhwRG9LcuFkvFtJiYgxENRuSpsMMeBA6nqjAyfwVDr3Bq82ygoC9JB",
  "key23": "576EQzCED2wjviusnfKf5WhStmjQFCYDBQ7Yo6Fwu8SfqiwCBLnneahg8jSwsnrcCrG9Hnd4VMvZfV5tgGHDcRY5",
  "key24": "MDKB6PZ6Eai7K89dPjEs1rqrDRETEu9g6bTA4zo5ZSHc4FepuUXLqmhgfTuTUEFnBd3U6drze1sxVAzp1VsFZCQ",
  "key25": "4dWtTxFSxcB667gRreK2ed74g7Ar5n7ZDwtcAec2EBMSoEScfs891amamuZZSys9fyw3hdj1eeUYm67RMKpRCSnS",
  "key26": "2Edmc5sd1FPuQn3urJozLu2Srabk5R7V3nGFYz6f9Fqsgwo6tXprgWQ5TQo5TCcyDhZpSKUeggmYv1YfNL2mqyzr",
  "key27": "66Pz2By5oVQe9wpwQSucqG6FytBmKoK9gAxSjxxBUayDGPgFqn9wYGaqEC9dFbWJ5KJxAERpMWLzR6GnBfeGqKDQ",
  "key28": "4FdAAoPSvMmWU36GSrkipWatTqCAN12e8bBbTo5zx4AGBcYGiKjCGZwLQJUgveKYCVCTxTTbXAwPgrQrNNTep4xd",
  "key29": "5Vw89mR2m8fQKTZWvgM5vbCJ8L9fNnuJeE23DdTz6V5yyjBBi2fiF3qjCk2RSvKxV6bAfGnshUdeL5xiCU4eQvxL",
  "key30": "3ZnDxoWz9oTjNcqLm3F5DkUz2ERVvktFoHLx5L2zRVD4bWXkmPZmak8FKr31SjRrhsfjqHGSvF4is6rzrStKGCjw",
  "key31": "47M1Bt2QeBEusuh72rTdGywkhUMFUD6FpM9R7PwFQD5shUqfK6RC8JYEZjaxmor5CSjmXbLXQ7Ap51VZU7YbGCWq",
  "key32": "2wJss87bnsNDSmDjfKnjVcQRzUouPmMsqeU7dVNJ9YwAJBjd1uTsxtuXDj3HhTHQLyr4zhkfHXZJWumvFvYfqMLo",
  "key33": "4y4qfpad3CAL6qG7Q1fb2brJiWKfooi5Ag8CWYnXBXE6YyVxZiqZrvWTW7CntLXtjJJczkiV94iPnSx69zP5dXYo",
  "key34": "2pbFGJb2T39iqKJAmsvJFpzR86f7N32H3e53qBsA7tkhX9XhpTjnpWDV5fNKq6Ruxwr1CfnHuBhrupaBhMV137CV",
  "key35": "64KcJmK2HbnNfJVd8zoRhM3yhWPxP7FVWARzGegcBkBDAQ2a6vkbsaVvU8zxMy9FKWrpXFNMVCF3HJJ2Q4zKqveb",
  "key36": "4wUn6Mm5GqfoLXymtRn9pyXQTEwgUxSWQBW2s3eo225c6cHGe9UvQEybxAagMGE8mnQENLEPmiitx3t6U38Fp8jJ",
  "key37": "2AjSDS3VrQYufTMEApTHF1LKAtZVRFt2gDL4yjNXVeRJa8TMfZ2sGDvKVTR1FCARzfNbaheVQgibyxYpv9m29pVM",
  "key38": "3GezcVUYg28SVEMXFXMygE5wzyivv7WtufG8p77sSQYvqbDp3KUrMp6QvsyxnCGC32hWAsJtZi8TggqrrxK2UBJb",
  "key39": "3iG1hsaxsqCNme4yPdBD43aUFUskigpQjNH4UMBQCJB5BZd2qSzK8K6yyBgqvY97ZrNmkTehPfwKbGj75wCEDBoW",
  "key40": "4tv5vxAExmJrowfp2SBwCnU5x7cH2Ni39fV2cizFvw5jnozaWjoafsZnfJ6jikDCWWTm7FaMjoBB2fk3Caf1mvJQ"
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
