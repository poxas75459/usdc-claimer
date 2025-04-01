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
    "2uxYRfK8eHBp7huuTf9VKxGiJLy1hC37ModJr7tk4HMUH79DRMkvUMPyG7SKJT67cciBfbLTJXskBmghSmAscG2R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JPyXtLdiv5re5154v7Qtx6zJACeyqJTBCw61PWQmHoYJG1UJK3YotvXSmC3KotFMSHBzqTTPdvcZtRVCuZrv6ZV",
  "key1": "3pkxm3WAvUJE5Z3MWN7s27pWqcjA2XQ82EWQXMZCrKd9S1NLWuKBiJWTUdYpZPNV6HgceY3gxGzmqMVqtHq8t5h3",
  "key2": "5siuFNtWh4gcGZYNSzDBY43CdjfJz96Xtz29c2cBgArXxscJNZz1HrvDFX4crMttmbDvfm92Xm6cwb4mgQXFzZmg",
  "key3": "4qZpnDr7HTUGNxmJDQPtFswqe2AoVZz1CLZoYgAiQis4BESUq1yb4yJuzXh2szHhfNgU1NbhanQFGoxN1tVYfSDW",
  "key4": "3iZCAxiiFPvgLGWRRQF6Ai2vaMYvY3ukvK7rF56ZsC3Njt9EJqzjpcqT8f4LBcwXFpUkFXDZKCQabgbQyBkgdQZo",
  "key5": "3ewpSwJFmuA4e9vc2QsejRJV2TDYgKk81bnQC7asmXeeQ1XvsTD8AFrbb5Uw7pPBmna8XigywzXvXAuGbSFSP3mj",
  "key6": "3PDw62H3o4ifCsNAjx4hxt1p3tuspjqpwoqiYuGdJVtkzxiXFKtnda4DovNKdA5MxosMGrn9CsuTNAFxnhtujXQ7",
  "key7": "5WnuyBQNBT3heruQQS5T4GwuwePzgUgnHWHPxJ4wiRQpdRejEFKPxjRULn2AFiNgqdQNDn4LX7F8fbZzqNMTn7KZ",
  "key8": "4C1YbMuDof2qP17JFJBHXuhFjZFZyYy99rHzzT31HCKWA98i6BYXQy2XTn48z3cKB2wrL8bhyYRUhzaVwYRcCw75",
  "key9": "24o12oHHcZYVoUBCZjKchBmmuSGP3T5EoAs4VJCCpo1gkEQAvR2YEwsvCUxj1aKuwryCSxE7HFezGDXyvyP93CJu",
  "key10": "3pTmncNr9U9N9QgVPnPntRR882uChcdFRNF6kWAkGoYnRBzNqCJWadx5BfkUoiKB4zZm34wwxgZffXAMa9GVThHD",
  "key11": "4iEG3oPfNVSE2BYY6A4Nfo7w1YjM66ngjMS7McYWgnWiqDNciNAA9Pvv7BSgm2Vmv7hDXdHqVQi8KDAEENCT6cLf",
  "key12": "3XcN1HUSoaiRU7a2LfdfoUMaPpeK31H7QnJQ4GqRaBA4a1TyVZEjxHqyo2jxxkL3Se5Kt9FyV7o5MVKz57qEBbiJ",
  "key13": "3WPvfdvNmnKMM6uwQe1CD2tc8PxQ8pS71prMYKFKJ95YP9ng85K7dpd17ybfyk8amFfjvBTDvkTrK1MRv2BAdARv",
  "key14": "5a7kAxY4sHTD12kREqiNA4tk6f5CysCVLwsj35Gq2HaVc1sWZrQ1phkbN1tAMUyf9LDBQGtPBPRcNpD4aw79buYL",
  "key15": "5pn21eeLJkXHosjweuyc2ov5M7SEqEg7qCvNsKmEm2HStBba8SeYSSK7e2xDDkaqXs4Mgxmg8PJTJRPgeTgLA62K",
  "key16": "4YvswaDbuysuSWX1dPSGFy1zuTtqkqVWEtKmSu1Ensq8X3nzfz6CFhjJQNVmXfvm8NCEDz2fofoL8WJUM5tfcPXh",
  "key17": "2PhhohCGJD8MmDeb9muvaEDD54GZX1myoEaL4JdpVCJkvwkWYtfnC4TZn75J1Tng6T3Ma887G1NKsRJjPvSQKPWt",
  "key18": "4jRumjjP3pyt9SVupGzJbDb1izSpPLbofyjNpbYQYNf6Fq1brLHZn8rmRpKGotnhCdBcYM75QGgEhzP4um5Ufs3d",
  "key19": "5JozUGvhSE1RaWf1Vm4xNhtC9ZDoqtg9t9SJgmnn7fxEFTG2rgTUyZGVgDwvoKbaTz5KFw2AEyvQLtpVF2BRFo7t",
  "key20": "4zUvsAPJAfs8zZu6YsNUeyRNDxny3Vxe6b2VKVEtpSEMi5r151SGhzMtTCuZxdF2GuSsjmqowf3TNHVLSAJyiunH",
  "key21": "2VZ3eVfXR7JoqUhwYMdh2kUsdC5vnu6c8KrzCLdw9ZX5yD18vjQ19HnyfcjAbXbbiZ6YXLj86vLZjcQXFdtyZk2g",
  "key22": "k1xFyqf4Gi3CnSnUPvbQ1aV1o4rNvThxY2tgAk8TeYTUYnJ4ibe8ggkNh6MyKZPbDZV1ba9E82xspJcbAcrsBs8",
  "key23": "2pK31w1eE2g1uDVhz8fZsqNJkJv4jpWMXGfEgLWbc8vBkKGKpBLCvJkdQdRQaDRWL96mqoiWuER6qkZ3YU8jYDuF",
  "key24": "4mS48RevDSSR9VmhNhQQp1vZQXkN86MNkrEi71ceP9R94NWpDYjaUDaKx1qfUd7Fx5ickAc11Es3ep5b9jZyVnE3",
  "key25": "5SAbQadjxSdYSSF5Rg8PKScwB1GLpgrSp29WQ2keRcT6HDxEzkbsEgoLeFpZzNVFPkwvJqgJbXg7CDDJMQWrkWPA",
  "key26": "3dquUkpH4CFJ7YzN2ZkbVYiYmGayUCHHFC5jhWDur5R2CToYrEuqTR4qu6ULCuzdUqd86taqnkBfiN85k3CqiSvi",
  "key27": "2hB1x815T7Mae7M6r7QWeUbGXp1cdAEcvYTvTqcGJ9N9CGq6XTQujypADrmW9uwnKbF8pCr3XSGJc4Z2JyACAmr3",
  "key28": "3Q3XMKSiPCehqb19rJdBpdh6dFp3zjihHAZKFnX2rrb9QzBEFaPbh1KGmEXjG6znuAzKNg9dwWxiyvcVAK4sCrcV",
  "key29": "qZF5FBM9hZgPNLaPVGU5b5Lsk7g9Qy7eVZ6WtyPtUfqD8rAQYLwfkSa1FYWTj3euL4jpnsZEiVTA3w4Uo4FZPsw",
  "key30": "51wBpnTvvNZt7bugZ6RZibSBR4hwRgyuRWckTiY5M1UJtkSiUbAR6WqW2ir9MU43dQVZdJE1MQMyFpgFpuFGspqw",
  "key31": "3GpGR892uZDmJr3oSucGowyEt2WHywRdTJTHjUhcKionhoju6mezsszJi88yMCQr8czNXy7LticJYo6iVKsWD2Py",
  "key32": "5QHAWXFjpYvD6dVtN4Cb3NMJUXXXUehKyZbsJR2mcK3Ty4rPTML1rcG4jjTHA9EVx7W95JzRX1PuQZvgSCnhbUdp",
  "key33": "E3zcR7VzKVNDuc2ikfuGU4HdT9fRgq7DkTS9gK1q28MBqKYrUaPiMAQHhTxZfNFuE5C32p3zi9ViLCsMhoLWgEG",
  "key34": "2HYknGiJQwqmfCyYnDU5apdeNMxUhG3tfoj1DAkJGGKVU8ybyMY8B48ke4jRAWPr8Tty8o3qvQCjVMC1fBzu3ZWR",
  "key35": "5p2vHsWBD3E5NYamBbLDhoZ3p2Fd5xsTmdggX72LyPwe8Jp8ejPWbLpCnZCqpyfQgNCpq5nTkKAGL76NWeAbduS5"
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
