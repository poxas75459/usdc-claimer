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
    "2RWgkzwv6Fp2LrwhkLaXvR5f2e5NZSSUKxH8NrwVh1rQU3qARnDZxsHtB5xsCBYZuj6meAJYtTL9bqUygTrChKHa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34R6GmwWxmMYXA5ZtJKHFLA6mgmMRsFAsB675AgitNBMUE8R4PSWRn9m4QSoUGMb3xaHJAXGkTgrNq927bAcMY59",
  "key1": "57T9EhMEJ37Rx38rP5igyFTyULUWHj5vFzDxtS5T1gjCJ5tJ9YGbAawdwoDNuFHJ52wuEAWihdxGyvutgvgW5jJ1",
  "key2": "57qJ5JcWQRbnLmLkp9C6oaroEVZdDReHwWs81C7GzyWMNHypnsiJqGZaprs4mbtt73jVS9BwSkMxfydTboazs5AG",
  "key3": "hWbXB8gTLQss17MYFrLqE51xpc5gxy6rg8FzPXPbL9G6V9s3NpJnccJJewztEmLTZjkJsqmu5iAHTMQhVQkGAE7",
  "key4": "2bYxhbw3SkE1dmYMHXXoKHEfy1Q8KefRHymB5CHN8tdHqwnbD3p2W4GSwdvpbkGReqnDd9zpJ8jEG5YLLtb8C6aB",
  "key5": "2Uv8Mgkq9KExmNPmYYKFaxL5TH3AK1nGzTj7ZSAHAxsPKDLtwSprgXHqGfXF6HWJSNwJs353RbyFrbNToyKRNTZ7",
  "key6": "2BQMRciMxZ8QmXgf9Eimn6BdJTxvik9x2wpGWX1smRZGz8seF8jXsbZ4MQTRhFyJ3PP511KsP6dwvHPwpdcy9Jp",
  "key7": "5gCMqxP5kGt6qqD5NwchvB1XoZ44h8nH1j6vckjkceb2JwcfSS6h8kvjWGDaCiTBCN9iRtJUyyDvu4oPJHehDboS",
  "key8": "2bFjXqt2Jno6u1TWPmP1m2ATgGb5i4MAeaoeg9mEPDgeFXfQ6CTRKCYa3FLuhFCSjwAWQVBczaTENpFGazinJSnL",
  "key9": "L8ZyhFLaMAcaKrQzMxnne7DXMtZ18VuY7FjvyGkxKtDfLMhJ7yceXU2k6PrNnWkq7zxnAequRHTVYYmHH6ZPHoo",
  "key10": "4oJ1PMsuBv256HdKkDCvf2RxcZ64pjYBJscpyYrkUWLdcV7hvwyWeWWDN8QENL7T1tSuUaRmi6o4xcqBjRxgHTw7",
  "key11": "33Af17AUqQQofi1XnTAcNBfptYAZRKgP5VjrfLzjF9T19NiXyFNipdPJSb93VTpnA7RsjkiDc2WaqRTcsx9UNYoc",
  "key12": "L1cvkL3j2rVkYRWGTYXAD2c379nRWDGi8ZoW8TQ3zomD9DjCxcLEo29jYyzGTcoCNPLpXbm8h8uef5Qu6NFN5LS",
  "key13": "A1s8eYN3twCqigkKzyHM2nh9ZFgLDwBXvkw8JEWkHvL9gjm657zTjrF6BMu4WXeFK9gqhG18m1rkNpF8o1M4zJU",
  "key14": "5KMeHck3BxpAVWVBXEDd7jrrHw4mBuhd6W6iaTn7NfQDti7p8toMo2yyZzW8YE4LVWVawDJ9eTQokMvJDT9Nh94a",
  "key15": "4X3GH2wuNjUzF7DLturwgQwbVfwigNyt3N3kCZmFVnAoyt2uqfTSHuLSkhJNCnFokDEh9PCnBMqdeiG8Vs2wLY2y",
  "key16": "3Fx2nKx6jZHn2JgisCPous1maRjRH2MF5NRsorNBqYVkqnY2AEB5b6RHbRxN1PojLoi9nA83rtRgQ7kHwg7jFEgp",
  "key17": "3JD97h7qfKpkrpWytegKbo72MWFs6nKqHamC2BgnsKbSWZzR7YutP9TKSgXzHdT8WXqNcaZuNmymgfy6fusL5bpm",
  "key18": "zneV7h69ZfTg97FxfbTraxXxVAAitfZwgV9EDgRASAikJh9k4qK7xER6WU9HnnWka1nEjZXwKdTicAmGW9xcobH",
  "key19": "46RtLpMTEELQpYK6mNUEW3AjxeRF2M8KduVP3brq5P2XS2GEjfuKFqLuA9BUPqUU1ncE3XKmfmE4yTLGGKJz1sef",
  "key20": "4bBBR88nBsgLsaBY2JYBJCPxpZ8NEy5uSGbqYABbKdCxVbpcRwEM5urMKYPRL7K5ftVeq4XfAmHLpLjTH3mTM3Nc",
  "key21": "a93uYktPsppDNF8vG1okTRyMNwRXm5gqnHD4UMzGu3Mr33NwRvLLCWdmkHgoHivwYcDWNVZovEgCQJDa3dwioSa",
  "key22": "Ywo3NX8AewWsD7XZeKRkVS3SY8KCJmELFs4hK9ddNNXSzHj8rM3mUhtLqFmrA1cAmdQofwjxYrURLbtkbHGMaXq",
  "key23": "2rUX97Fh8zmVkPca4q6xHzwYzRiRC1uKW6sgqQsPDa8DVoBVY5QUsmXCWDMcBxDuKJvmbVJ25kKDgaqrE2ZbWiHs",
  "key24": "68of1iNheBo7xDnVAs1K2P3zc9SwY8hVqciXXBJnPArrynE2GMo5ovFTuDrEaLndKmc9d4sfAUq8P1vHHogARFe",
  "key25": "58qrCuAgmt1wpC6ch9NkUYdyBQawVa5nYycLs4aR1SfQG5UBAiCCbZXwZxE4UFMT3tiV29So83XW9vJ4TWScQ81a",
  "key26": "4g83hy7Jvzzzfi1Dr2UCvrEaZHthPXcH1wrXqt9rNqXnZy9m8tVK5Md9ovdydVm3TcjHYL3uV98cHnvTT88GJ7td",
  "key27": "3Ci9GUrAd47cVVjqxNJhHgraVKxWXJbxmL4cjhTT6RALRxV1zWo2wmxMo2xb7eD9iGDtbP5j4QebkiQBvNWDXb5y",
  "key28": "4YQYsVTRR6dh8Nhqbp2fyLYSYXnYMUauohEYwyVXRNRCLvPfGJ4T3t14X7ytiNgKriQTHpYvVo8Tm9f6GbNoxXoB",
  "key29": "4tJpypYCwTebkNSNcZJTggrQkHW7tnbocxFApVwmFhLM5LsXx63x8QKGg34hHnr6YhMmh5Ua5oDoLVEYoPjx5w6c",
  "key30": "5Mk78h9VY8eT9DaQUrkvSBLpPzrGN6SGDpYfjVA195egSyQP9LAqZGd1ndCkMEc1VEtHHLoxdTxKF2yTWVzoFm5o",
  "key31": "6Tc7siCZGzkJf4xshGRm4mHRk8SvWBZKYYYTYq1rUsB7yHkzLoPd3AtHvtfP47p1wHDSPdQUSEFtxAU4oEuPPtB",
  "key32": "4sgfv9zMQq5iXKanZpiL4VtWLJpvo85D1d3Xi912n3VujWUCtgKu9WmxxtFSk6Mp2XCrQDp3qAcBHt9prvsmBvKq",
  "key33": "VnmebJcZiR4qhdR3zqbSVVmbZUHk5rSsjYtPrghHd1VfomWCaXBjTBhmwhzLsEvk1fC9mqH9uZXeYRRRVkAKydZ",
  "key34": "46HGeEX1v1DAKcXGQHKW5Xp6xZeh96wsPFNPMEc3nZTeYP2pT4ojB667t43SQLqoRSipAqZYtwW8vskF1CA1m8fa",
  "key35": "3NaiJXmPwb1bGcyVxayijeSartSHa8e3WaRuesEaj5c6XAxgyK2qHSAkHy2RdJco9SvKPHYauW3FYaqUvk7q5yr7",
  "key36": "39r3AhGfrCW9saJCtxRjwHtgD6WDsSb8QAkzqCnpKL5MpF3aShSCvBAYM8Uqyq53NTXFd7jASPrpLE8LCqNdSKbT",
  "key37": "395JrKvxEd2en2NS1asyqT7TGLPZ3VboCQF2ScGyS8NjMepkAq5g2EWJ9WYmkRxzXiSwL6wKpM5aWocV56DqjSTd",
  "key38": "4k5qQVHxqLwF1dPEjC5qnn9tUzgsgoaU4xYfccxPX2X9jiRvAno3FgbQzVWWtbCsrMeZewaSVT39w7fdGsWDfaZu",
  "key39": "Z4VgNGFEi7J3gLDujkucjcDBwNxJq9SRD4KHRdywAFFUx6TQwbyrRexH3g6AS31JyHfmXCeuy2J19JyANfCFJEV"
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
