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
    "35TGNPASSbqVzA7HoePgb6kUEdfBFnQh9ZKVEr9GdFbwQCdPWPp6KCxPA7dyRCRv5VqDgL6UFnwSijnVvUtLR3nU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uhLjvBjhJgYhn1WG9Eo5cQowDB8R6UxDEH9WnSTdApvCmzviG4xYYrLfqRv2HHukaGrQojtAuDSMyoXZGjymKa7",
  "key1": "4pPvcK1x8r3TJZfdjgVQAfpJcTSF2uqv9o7viVY3dYKswJt11EFDqhdXKvujcquvwd6UDGj41GxEhZXbLxE5XLUT",
  "key2": "5ios6mjQy99bd3toJaSN32ci25nccQFyyy3C7yZ1Zog4urr2CZa3jPWqMfyQZFt26E6x1hWZrfRPJyaMKcLmcML9",
  "key3": "5DUuE972UWC3Up4x89DaHcxHuavh73J5TdmYg38AKtBgrABqDEmGcbekTAitAGTWRkp4JWytTmRkFvjpuPrbGqvd",
  "key4": "4NmjS7rQTxDAkeE75MpRdrkuXmUXKUoTxHBATLwfdmsDunQbGGxxsLTcHXdEMPoCBPdbN5VVA4QCnajceK5cveUK",
  "key5": "4BeuGHXevwehsNB46zcDrJrkgPk1fs7SPkGiKtpU1QY9oZzhbfcPK34xMvsWSD29BH2nzAqW75AZezb55MfPqccy",
  "key6": "3wtTx7eBSaJvJeEYv1RGFaQLvZobjKDbVhbcDfeFQhufnnhD9y7jwMKntX4UgmK34aRKGY1EQNhMgkGZHZqe8acb",
  "key7": "5bz2Hf155SCnLdztjKHnSWf61AhydT9oU9CZr2hchvZN9iCUWu2g1jwi5zER817uKygsyqk9CrsMwrcDJcisTnyN",
  "key8": "32HnFgh1yyT6Kb7unCZpKX9Rt8wXc1cRR3JHFeDWuohG1qtgKcRFSkMdc141iFJL8fYqj8pW8CJS5aa1gHbr3aU9",
  "key9": "3tTRJteyaaDYb2zQFyrSMm9qUHajQAGVbX8GF1jAuihNxpDpT7Xkw7Lo8xMgbSq4vFhAvJXk22E2Rrf2cvm2rHzZ",
  "key10": "2Ha2gceHvmA5nAsyJCJdJFoNceH9CLr91EpPmmMFkp7KHDZ6YxWV81CzGokmnfPvtknyGGrmQ62wcnQqVQUecHso",
  "key11": "243dGC8uCqM5rLVMufDCmWbxmkDuL1zUqkAby8yvFcsGtuMXgJf55ruBwz79FStswJcsqdBgnA9D6RHQ8YkhWMZT",
  "key12": "5A8y5bzoxHzFsPfbaEccNokNonyJ66L9rECXp7zdDQCrrp9oLEZiNNp4etjsyxfSNEQtuD66MTarEF82AAxnuHVA",
  "key13": "26YmwcUMcEYoLQgVAbCXaJ1hUFF6hNMWzozyftjPyT3VtTz6UYHiwHix8BsU9fe8iJufLGBx8tyciVr8dKr16FtL",
  "key14": "27nXvNS8tpiSkEMQNBFKVe32uMEU3LLGbWMhPEdfoY8RxVNafGxGS58yENgeTZpSTPjyrL3ErCMSN1fsqMpnsokn",
  "key15": "43LjLzT48HupoY2HrgVyxSHrPXXvqmgd5dwAnykCFypysfRwbKbi9uUi4wQWiiGvbAuKEdrWxL3MvBijyeutRaEe",
  "key16": "2P3oic7LgXEvCggddvBfW3jx7fhbJnkPM88CYHJgh2GGNqoBjStKHcMj65K1yJDqFHLuLqsJHMfwo1AKmgPLN7q4",
  "key17": "5ptSmHoB1wHJEZYnrdoVgLm4F7UNB4ZcxiXfpyBd93qxSbKLswDP24tts8HP4JVz6jaFRCLgxKLGJkQ9mpzPyvqb",
  "key18": "48XL7VtsusH3noQuxhCESDh3hH3H22oQzDEPxCUomnWB3Sc933fwWuqFCcqgewr2cFjgN7aSaMj8fcabAMy9Kmoc",
  "key19": "37iWydPmxn4XyVxE5NusQyrtcVSX418epHK6fhY6AQXfhzAqxSsmd4UUyXAPcgattR8mUyeu3nKqghsvBFdWU5tg",
  "key20": "hKpUWrDdJ8DwkLFCMwcW37MXJca8d21rBU37iSXDa9KZxqpAFwbbgM7nca6W8H534aF3uZJfymcosbXg2nV2588",
  "key21": "49CnjyUFRhLeDavJQKD5KB2bjTgp3UjkZjU2kKEBC5HAbv3jBFZxu3KsZj8EdfPtYX8UFMsfaNjhhrMXaG5NDAyZ",
  "key22": "g34HoSo2EquDbj5rMRpnQXNVWf9m1iADq4TpBMczznVJryCHGkaF1q7xNzAVP76nwathMHho3kLpfjM6a8N6NQ6",
  "key23": "YkDsJ36Ef3tsDDGSRsY1R7y9MtNb3jtnh1UTmvdmL1PQdqNYUhX7UWyB1brwm5Yq586wUPbrLm3TRFEdtNC96AP",
  "key24": "nce3BRYffsevstSu6DdTkDDbu3MZiMfXDnM5MSAfmDQhJ3UUAsQQxkpE9wAjnzbmfaR14Ht6daiehpHjohc5wVP",
  "key25": "2j3SxQZxqdLUsxH1vfQs2c4ubwBTa6Nacyk4p7reXXRjhUqiCAapPse5RvT8s4Y57DSXCZS5THAKKobe9a7Kaz7X",
  "key26": "3EHNpJZ3GLk9xxq8U8x3ajcLR7Z4GYLFxdqMX6mFjcZDGV4xQBJrVioGQSZER4mmy5dzn2GjsTKMJTzKtDBmNMmv",
  "key27": "b4JnnsfbZRFatqxK4D11oU49agVr9baTR8xU4WzWZF1yHhEXmfhkpfBADgriWkUM48QEjsGttbgVMHeNW9YSG5a",
  "key28": "2gdspnNkHsAJpW7DEAwroWqiChH8yWnW7adaEhf9xp74nMUeBfjjpRJGWYLwH48yNHuWLrQvVUgYLPsSjvWTKxUV",
  "key29": "5pgRmfWof9VMD3xoDVNzq7agZbcUGrGizVJ8U4QU9uR9stXS2UQdpfFAUXVoiT5cJDpjTLVobZjfGUAuEbM4muFP",
  "key30": "ShzyJbkjHrbmrLnHEVP5x4b3ExRTVy65xQmDbPMEZZ3rSwpvuBejcYc2YcmBVHcb3WwHqWtBFJR9eSrDYkfYGah",
  "key31": "2KFyhi6AftydPXjS2KiZFruVkkXkJt7gS2uLqz2WAjnfqhudJToRCPhCu5H1XpxRu9TF7vobWZSC1nWLfQuJXLGc",
  "key32": "5nwVTbKTNcbQ8rDpbGEcTV7doNhwMkzt8c4qT3Me8nbBAa8PdHweV9BFaq5vZGQ2NhW9dR1cLknHokjGwZB392vm",
  "key33": "r6oApWoASdG2EsDDGFtytWMJAVXkJx1SsSFFhUNkfpETU2NWShh5wvLCDKL1CimupJxKFmPRzPmrudeoZWfMv36"
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
