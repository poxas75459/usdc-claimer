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
    "4pDYENn3rNjYF1EZ3tshyVcj6VXb9y8f1rpGeTiFwQbX7sZFwsZtG7DGKHgugCsd1PneVz3B4Xx2gFfnz7J79dRu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WrmRnumEwNLBWyHZEBWPugnKza3YttRNSATPM9izwauJ6fCEbSccWBKdtpF1tX4PiQuv44M8U1QvczbxX7Nmw6g",
  "key1": "eJEc4fam3PpXKUDFmY8rJ3rtD5KE2uG48uH5SeXtM4P5pCfWsSmrRAbmSHmdwJ224xYmvyHEpus79aTnz9dCApQ",
  "key2": "2CwQ2GFDNVvo5TA3ST1BEGBSWNL4GQacTGi6ujoyQZYADpxnzWCa6r7vu91NxCraxCP3v9y3LvpXcnu2Kagib4zK",
  "key3": "5fbgaJKfrZ3pNn86vGLLj53gQDwfP3uXvdfTakzQ4Cfz3Zaqnkx5D54AM9GvijBMJBtDeUAZJn957uaKdJLNBvBx",
  "key4": "3RJwgURq6r4SXoV84EfQzf4b5Bu3npaDejpLFdX2foGSjD8VHG531oXcq7C6u3GGnA8zKdHt9KZxf6xoZ15zSV6h",
  "key5": "2GwESXAZyXtzMJNvzHCBe8btNWNRgfbvQ5Q3RrNtGwSAPmAbgvj77jxiPRws446tX7qhCRAwVo7NoZfLT3aqh4R1",
  "key6": "bmU4uwwu7EUDL3uPya9VJYtDC4tU4eRgCibPk1eB4yuvfSZineNDtbHsTZt6V4ytY55HHTaE3fAg4EFQQaQzMqm",
  "key7": "5conHWefee8yLSq8daNdMnJrKgewxaGemugp4VFHgvaUWqSwtgSktkr1gbLJcLiVDt19cWKeKyenndEU5F71X4wt",
  "key8": "49nTKffKjj7emMaNhK7F8YAQ2D3DehboVLs7MKpddbvjWJFdnT2NQJEmXgjVvWF7Fab9s8h8U33iDvom6QpJ7xVP",
  "key9": "8VGYJE68ovydYFXNNotc9YHqALD6tqD3WkA5zGnRNxvr2m2Gtx6kLvMAgs2sMs4wfGtDsgcmQUfhpkNZgRNHUaP",
  "key10": "3nquWdXiD94YuRJHbbwxS5RaHmvLwted2h1BxQu3WPqPkRyD9hD4nP1Rd1y6ukvdqfgYQxu9SaJHYFFRTFuaNHia",
  "key11": "5LLGQEdytmQRj6CiEsA9PE7oi5S7BEQh2endVH6AiGGq4rrz1Ru8Co6HuCWDZ7qqYPdVcwXddFRgMuB7L37egoTj",
  "key12": "HXHdmY6hbb9nzGyQMh5iDRnwh6FqfqJX3hmVwkLfp1JY64aCp5dkbZpCqEfXkqfryqkPNFn4DR4MY82VKwe3VGF",
  "key13": "5Jx9M8BztfJrWnQVJ4wfam3Zuyb6tqsrgsSpPUDhz87x3ufLY7Xic78afPP8JPXkQP7QHH8UWKv2sSTEXfoszCoi",
  "key14": "orYBNKydjiX574ogTeckWhstJa6WGCbNQrYFaeh4w7kwgYSBDELaDdMKZfe3jx2NMgTT9hYfgovS5jZBtR8UJ81",
  "key15": "jNtLX3KwhPmQEVqxVsDgLdt41nmVZ63F4hKeoUUJEipfQZDLqGovfccHJDJZAoECTqu8UX4Lhd9S5jkxPn5y3Sw",
  "key16": "oYzSwBpf942pJGg6ZWYnGPLFABxtRkXg6vbN8d3kJJb5fT8NiEzQmFtjFHAfq6p8qqynr3Sg6nEwaYwgf2TjCNB",
  "key17": "33xpBAd7upnyg65rpqKLjkgTbmB2zzfi4582DKHF23szpLbrwS13e8dXy9k6pdMPr8MmVPRBeki38xCGNga5hFaH",
  "key18": "4meB7EEPFZgjw2dYCsEqjVYtwzcavRd4ZCBLj1eKoPfFNcMXdcsGGniwn43KY4emQwtq1Rd4Ccyg2VDqqWQNsx5L",
  "key19": "2u6wZuHpuQvHX4gm8N4B5o9Z9dw3J64pRinWqgaG5FXEBj72ecGrXf4sFRWnMFXWuTZxFrpCYqm19AcsNRP9GmPX",
  "key20": "2ViUzFi1qguWUBoGS7DDDVW4n5Bg7CGQGh884JstGwWJ8qfswpaT2Sa2T45Su8QX2CEy1R9PKAAZSj5LsG9ChFbV",
  "key21": "2CgmPgVrGGJfA6M9WvKM898v2Hus3Qo3rakEEwPgxEeV9grSdyNvAZu2S9Zd1XXyqTZtw6S3rKPn2bLU2R7DLGE3",
  "key22": "44JdbXeAjHwvrtJyw9CUdFQgkS7MRCVFXqYQtZUQYafD4kbmBRBH92qRQdWiMjkXVtuKBZvmPzSzVPAFN1WFbAVd",
  "key23": "4g6jzLj913gRCNJfA8eYSpZFcS6F2X7TG9cZGb8aVsDTAmGpTFWg45n1ZC6U2xLAKDu3HzjmSZ7o4JAn3siePwny",
  "key24": "41dm9Dz4uEqirRRhbFDvLTvR2AZ6DGoNpFT7SpB4vrJKTDoNZS2tswRQGyGy4YjhtxQ9RA6tjsRThQYh6Xauy2rD",
  "key25": "2xnMjpwUnj3QVZwVUUQDr6566VT4TAe9DRSxGckAR5rBYfutXT7BTCGibVCKbXeL2cuZrckHwWSafn2pmDY8gQfd",
  "key26": "2LWCktTMr2iFZKnbTJtna4PMNRmj1PEMYmznXpzUDSGa7TDugPd1y4cUkE4ZG2j8Mm3ZJ22LT62uwFp44P6st4H2",
  "key27": "4ugT4ZSuvFZLiDFkh8zQgVbMxcr4jqqQtEffbBj6qZX6XpAw3XPssyZQ44vxMdFRqVmLkhGtSqbZS7vGcWhbHSxH",
  "key28": "23GxXFPL7vjufeQk4BubW5kumRZQz6R1HjwHykEQeyXQ8xDfzMSbbrGAoKr4H4MeixjcbEUHKxWhSMBY38SnyusA"
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
