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
    "3iw5BrjThaHDFEMqgf5zc5JTDpfdKM4YxP5oy1gnDRSSyDfGFLg1eBW8tZnrDaGVFV9krzfwKMatfVzqbpNpE3U5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iG1JHH8EXaCUcAERb7Kn44MsmGW2Z8SUZnxXGPeSybgRNuzYP7LKq2ppLpLB7LX28qs2AHTTqt4AEvYMk3x8WaH",
  "key1": "5oPwGPeRTFCWQ4hCgq8kA2cLsnFTFRkLXXvJhMzL9K7HatLZyiciJ65uweSEUQZ8Bt28CkHpWWjW4uqgPVre8MXA",
  "key2": "2Q8bBo2u6Txa18hreF8AHALrcFSD7mzhgqJzTfR897ipuUGWaXKS9PXCtfQjToTAssRbVumhPcPMQRv8p8CDtB2Z",
  "key3": "67pfbKLUzCseLm9yGTWpBK8RMQiGs1EecB8QNMKAUHsP7GPQJSoaHkK4gFxJ6TEQA75Gq4HjRV6GkSjeeS8wdxgg",
  "key4": "4s9VTts17gNWCa9RAnie36g7FLKboqy2KWx16AMQ5r8uw9jhpmD2hW1jHNt8ctDMQLVgxUNgEPHVhYqxRvKWDhtL",
  "key5": "wpnMuiCPSWSGnv4an2wbkeKxzQWXZjnU6Rm1PTeotf9YwW1Se1kvh1eNpV4Y4B9fja7xbhgwJDvJbn1DJ6PuQjM",
  "key6": "653M9YpPVjvswrs9vYz816mg8vMqPeJ4NR3vXcKz3qg4Gp1RZWdi6nZ7hJLBkfXLrMNnDBYBYTDR4wcEPWHnakQc",
  "key7": "2MDPH6GJ443eFkiaS2VgJTFDFNkySVX5ZZhdzVDxBbgmYYGwyT6ARZBDGwTzz45FZaapQJA6wtk8JnKQeLrtjcef",
  "key8": "46eY3zLwyT9nb6346brGzx5ezVqinT8i6ik1fBkMam9Efk3BqP6TwaXWNqXxnbDUg4aWfgXdqA3xoCu9dS4b2o8E",
  "key9": "4cD9xaKxe5QfoviGhgZs4caE5PViwUK1om8G3tDFsnmeoaUL32bygDr792gqFc69R9WJHfViepTykGg4jYy3JgjZ",
  "key10": "jpLQwFtU23T43RwFtyxxEhkbxnLqnBLox82t4o7bsx4eczFxY86TVySVRoCzzTian8pvxy6CNRmmqezjgkN32S4",
  "key11": "5s1GSd1AMBGuvRysBLBa1hHBd7Q1e1Mpjz2drqxnFYfza2bRFhKsDveEMeyeFbBBiRmXHUYpLFxRLp3hkFLkerWz",
  "key12": "4TPWsiZuoezuAXWQGZP2qQGfprD8pSMSU3wYZeaHHx8TBm1NeDiTB2NBqBofnNaxQUzyJRg3qqFED7KBTMoAT4mB",
  "key13": "4n932Cfjwx3ZpGPdAU3SmzxC9bdvKoBLgCHYpLnAzwYTBa8YQiKH5nbuS9fhwBq28LNCna3MC8uXmXMUXRv5umbj",
  "key14": "5MKKE7puKD5hRPfUqGu2NerZ93JPCdQgBgXgXyLx4oNGqDsybuLxrc2C8f7hzACYAQMjqjxbxrBa6KN3Dh9Kr8wm",
  "key15": "3gvxqTqsFacGusKCtFjXR5iPFhvzjMqWXYXhrNqPKMGsfHNbJM5BgZ2rU4NyKH3tFVSZLaNmR1ZaRjm9yfXdH3ph",
  "key16": "HAb5QLKHMosHSRBwYNT5Ve836b7B6Xe5WkBCHgpAynaudJJ9DzWwzkpFyMx1QGVPni9Kj2dwWX5kdkmNhD1v9Ev",
  "key17": "5PgiN4EFaT9E5Ke1QaCC7RnVwNKg9sy4tfB7dYFR4kjSGxerosrBsPkQ9nKZwK1GadrD5X4fa8ahA3x1S8ar1dUy",
  "key18": "21n26r4nWuCSQLrPgPA63D2RW3emJbC3pqyonEDKPrHuaK1hz3e4D2QWJErTE1ZeP4pcNkqKfw5Ryem67LQvyV7w",
  "key19": "3joNnhuRjnZdEPuBWTzXntYQCTeRJuLBXcaH9LZfbUoErc5LKH1gvGdDxCosD1zyiWVEEa8XgkNCYsHdbsw2PDoL",
  "key20": "5JJcJQT76Hwo5td8bH2UZYwTTGUdTMCeF5ggHCnqa1aLY5u9FY3kmWEJc4uEwz1GNeSXvz7PEU8Prs61DNdHyYvw",
  "key21": "2F5HW6RBDW3K29FwnsF8zaDZSxKSNaM9k5UNfG5AMoqNHBthD9oLJyJFk2uVjDJ2dqvu7xdprdqsfaBHvjh12p9R",
  "key22": "5HgSULkZxHTG9TF9Vo92zFiwaYXc5gB6rCAhZUTo974EAJicZeBTKvg6zC5KwLqMqE1hY8umHjshJFHFW3ZN9Ved",
  "key23": "5XDnftqqai4oHaeY1ussD5xCertCd1HV6iWc75vQsxuCjpxUzuTnSviMBqYurAw8YVFoEM45GtHYmtciavJdduzB",
  "key24": "3voQLXPEvYAdfNGTUXzfY42T2ES3DkbmpaFowXrTGEHiV6C3Cz5WqxK4Y9xA3xyAJ21KDdw3MfBbJNvJ6T6eb8Kr",
  "key25": "2jsaBTZ3vse1Z3CGkz6x6dShMWmSnkDfvVZjQ8v7aauh71SzAxunB6Aim2gkdhUqb8e3mktyGQy743pXC6irvR6y",
  "key26": "34Lcb4pmULonEDZNr3drQp5Wqi8U2z5tFAEhA7XsNe7ZtcBX9ZbBavH2kM5KjsCQvnwjD7M5QntLVXyZppVpqHTK",
  "key27": "4Fwe5YjPs6NiSxwWrAruW5yVmXh6XevToFqRBUfkLuyF117GSoJNN71ifUx4tzN1L4GqbzxCiK8LrSnXxmwX5aqW",
  "key28": "5EZGeATxmYyvZyF4mBZkoWEUvzVaoCLMWNkjLQTbMX5fGJ4G5EcQMTnTdzbZE376KoJNTfSCXtLLe8kLuCQVdrH6",
  "key29": "5xG5JYwh5VKk4Wc3uCHQN5QAAg973eJ3BRSzLCdrpXm98TJuR4EL9J1RZAaKZw8HhRbAiKWqbMspHagBAoXEfLn7",
  "key30": "44Vp51aEZD9FXMMp2Mqa6LDHbdqhNeHFKBH9XTyCJ1cV7TBPoRocEJCCCpH3jyuQ15iwqosF4GjLTE7QrP2Cjxk4"
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
