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
    "5FgGAh4c2tpoz9UeVbdezBcUcorn9XJW9xDdwihv7kUzuosqYmoxXrES8yLJPevVZziwe48cM6buvYBv5WhfvtvD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59A4efsrizu95UxX9fmEbsX9Nbz23nKZZLcG8XbyAVP8qwyU7KJyT5rSoEipFwVH89aQWetWfHcpBxsWVgA9r9FA",
  "key1": "5fVDbef3QjCQ1waAYhBmoPHdKR9gZEZTZSYcXbMmRun5Frnz8RwuQ95inYQ1aCNWJ3fwfBb7PkXUxbPRznvmexa8",
  "key2": "3T74QVPd1mARmLWw6qDq6LvbMGmj3AjuENGzhq6NMurs7AyL5Y8tpxsu1QAu3E3W117GKLSJHGPSiKoDZ6ht1Zkc",
  "key3": "mH58pRgELubbWrTa2PfPbAs9PB9fijEyQjKj8Jj2LodEYfBXHPXTpX2GtXym25rYBH276PJB5EjjRgu7A9o59cr",
  "key4": "2hrTxkKMqt14yWdanoG9etfdLN4XyGtrL7dkjyGqz45io69hh4yTY3rjXDt9bvgmFGj7U1VptpmZNgJpLote53tC",
  "key5": "2fs6HWKhoLgLNEwow1hzK3YxFpJq2CvBU3M7BUEqahez1yHBr6TXooVQKtPNtE1gqWQXDuTTY4Qd4YKsEUqbtKJF",
  "key6": "oV4LseP7NJ7mDLvrm9CXGp5m3uszU9puwwQD19JVRNac1FA8BHKwp5XcyZaxwRV1i51U4ievzANHws7nJ7Tqxuh",
  "key7": "3iJcm8aqq1czuEjBJJpr5yLbpv299YRx3hdfbVigFf8UhnEEo5LoKA4zR4RgqY4SrYyZnJ4Azv7qWEhb6EVGKdzP",
  "key8": "2vWpfTxVjRpvQ6YG9RdTW4Qb2rB7yECJffs4BMKZcrT9kCCYQk8jV6jzvBnEduMmXbS8tXT7XFH4JrtgopmL21AU",
  "key9": "4Ksk2hUTxj3sx9szCiFAGViPMvR91J1zu4h7gEsxBQff3Duvjgofv8qyN2KGKFzcZo8haT9CjJjZHUVt3ahcjvYB",
  "key10": "2MopLRFp9BrqBFRKMUZ5JDWnRmjSapVmm7WPdveivWdj7CN4sMzcKwVfiDmonrhN9gcvx5Kpgwo3pAjhaj1EgBAj",
  "key11": "37hRNFXD3HgCme5P4rYY5ZbdfwtWfTw3k1Jhc5jC6czTFbickTGpQMup4o3eU3E4GMih8nDXiq7MXQn7x8oCcxQp",
  "key12": "66VRTjZTjs9To6CNhi3xjiVkyL9dEvbDyfGUXLVNq5Pg4wmHJL7cd1pShiDd1CKSvLNKJg5Vm3xw23rG1b9H1E4J",
  "key13": "2KxUGd7LNX89LjmR6AFDANat9Dc1s8oJJ4xeS5LGzUSksttnS7H7x8Mw6nKq6y35h68DtobhDAgsyXEzRkcjyBso",
  "key14": "m99M33JBpxvPRAHkvrh8XBBeFWx9x5Q9dXpEAGhGEdbbAZzwxjMR8cK4Qcwu8GdnEgaKkcxagD93tvinoCSixL6",
  "key15": "2CxdWH9oLURq8agMBrBuzg4wyXAo12wsdKcn4fQRaxg8gb8HSt6drN4CUkuwr13tzoQ7Na2r1JSW3oHDi2jfBnXs",
  "key16": "2XPHUkwbbzQBV5EjXLBmkprvK9WJ9URi8hoZbAHVhxxghF5PCkbmMk6XBDYGmCU6Lcj3rdW5Ln29PqZXEpkeJCTZ",
  "key17": "5F3MwMGtoFzvgW24eFmftpCE7voPdmdK7LPSss35HXGfR1F2YjFU9KNNi5ceGG9Ly8u6UUiHeiVQh5a92o9CoGaD",
  "key18": "4FH7S2UrYA4JoFCJiJPpF525hPeVsepjomDk98qKW7KQnQ7hmDmaJ8wfk7s6RSw3xr6azpTZwy7tp9heAaEeTWnG",
  "key19": "5kV6xbVu96S1tayS5Mhrprd8ySkr6aMd2pGr6cGwmE6y7W2us3Tv8XDsQBNmSXnUqmtHdQ7ToeaZ2G494Psqcx2v",
  "key20": "WuGxhzfAAABPLwj8XJuB5N74zt81mpxsKWqA6fZUiBjNJqCG7r7Snujtk3qhAYujsxQGEM8QS2PoosxH13tX6Ey",
  "key21": "5T6MFbm5JJrZsVXtYro2ohsQWdYjkakkXvXd5JSUoaRYTAT8Ra4f3x1XF4xE9aKcGFAMSKR7VihH2ZrEW9ARdgA9",
  "key22": "2YSLCs3MNoVwGXPB6hhKNJGcfQyEjmJmGzMbXjXnGuhruqZJfjwmhgPJhEUggL9aMn5a6iqQFDMnuihJ5biKz1wq",
  "key23": "5xa16bUzioatemu7mJz5sREeQcv49y2CaDEZFy9CC15rjqz4binhUCXjsvXwtGgTepAu1NsFbyEGXia5XM7Q4v2r",
  "key24": "GfgNuv9MxvzfHaJ3GTMq9JEHJQJrdMBrKTsN84hjVmHduL28FjL9X2WyyquCwzVTgoTTDNcgvJFQvBC8GG7x1nu",
  "key25": "5Wmw7kzNibj5c3khUQ9xd8q5m4LHvYDBG9MmosaFN8rG8b5RAT9XWMgy1oMVn2CuMzY7K7p4UE2s2qXPAqDQdrAk",
  "key26": "3MLi29NNHoBawMcx3HGic8Go7bnv7qFGqR8UxCLRV9EucVZ4ho1EmGnyQTtKpvNM6QEzf1YohubvGmVYR1N97v2p",
  "key27": "5R2jtfHRW664qGSDAUiWAujdVrwtxYmwneqJyVYHCd8iTYEqUszFeMgFPfZsGCQMNTTxdf8KAgLDFdtoJwjvv785",
  "key28": "65k5tRYG47YnE2hQ5YJw7UJmL5Dmvj3sc7WaAkjcAiTLrWTSpP6hN8JVbx5314SkFbb3KQ6NN2YjrUhSCmqxWufg",
  "key29": "4N6jdo71S5sHzcGwp8j5znVsWxSGPJ7BcDm2ge2SpLvkCLc6uJvXokM4HevbAMfCnJ6xMaFkec2CiLtwNLm9VbUE",
  "key30": "3XeFQk2BiuwnkMHAJMayUhRWNXxKTiq1MC5wu8YX1thvwdMMX1UPv4anv8wXRxjW14KbMUxQuoSGvaGJZHdnnUvU",
  "key31": "4RYQaasafMDNfftZrrng8USssc1FSWVZsnpqEiPZTUK9PKK4x5rnAQ1gdydVLhwYeqUA1Wb1qFqMZCVTNMYppzgS",
  "key32": "4V1CJTAK7W8Z5aS3MJ6bh4MQS7Wukd1DsExMHX7PzdgCnLSK3GxtN25XKbt25XkpAaqYzHDsGW14z1T6DxmofqN8",
  "key33": "58pdWnYHvjxDPWJoLbH5BAHCuA2v5CQJvayWuc4DYKe672M6PyU6mZZGrhqvxoarsmKnpTpJDFBbbhbgsS4qpmGS",
  "key34": "4ZocPwMEwkj2uShbAJ7xQYUgueUUEZSw6e7BQsJtkeXKqZV2MpxPgBd3o91Eo2GeVHg9TX5qqyCmiMrNVYGTivX",
  "key35": "67cF35D7UtwmnTd4uvgxCUFBKbVp4NVSbWtCgnk11bHhRzMvGdjDPQoNsDtjLfJBXKyN9brNGyxTVSDQ31xFctAy",
  "key36": "5V5d3TEAZr8AMMDt1d6t9AaByR5LQnFWe4SGEKts2rqfi76nJGqbiZUiedZHDbxUpXbHmUNyX9wBzJV1cHXgA94",
  "key37": "RqUjMNdDBeBJbeUPHnaEbcYejKFVURFtqaKPMGnp7kJLVWSUeLAZwGEyTtCoXi487ismKU8h6VvXgfTwD2SbBDi",
  "key38": "51KxQR7CAzUokq49o9Bb3cL4aUAi9wstoNS7bqbAve8AyCY4dX9iQybN7eHfhJTsjDS67RsAxmNXf2GkSh6nobrB",
  "key39": "4YB2EGJ5J8CXxvz5HS7K1KMKiFkvSXMgFLgTAV3qD6Ca2UsyDytGCdygYXvyHZCc8UWqfyyKykUUyAJZy79Wa1NP",
  "key40": "2eownub7zRDnZWJvb6pAebLNWMvZZFoELq4GxwP5vrhcPdFYZnekg4maxnquQsaDiaxtXfEJz3vD4xGPggqFDBNo",
  "key41": "3P8U7ZXcr3wmVZxvarpRRheRQ9mic5fik8LmPLmDRaZDyPhSUUCU6pU14cXVJ4k5Py88WA5hA1q1XrHEkKXATn35",
  "key42": "3nCx3RiYqqgmj2ziDigT1cvaFNhg8SagC5V1mjRU1h1UE5iAe7Gwk3XRTPQTzv6DadDCxVgqXPHGS5aXx1h3PPBa",
  "key43": "3wpNScUaMF21fS1BLv3et2KLm8LtXKwZXSd43sEs3iNqtUMm7GZQ4eXUSCVjDhAAshrmFUjnfUJU3E5TirHFLXgu"
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
