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
    "56Zz9NUWrZoAj5yaJDFHAkuniaHkberFQKy8aDKqfMnjYbBX1Q8foERFmCCcfouozLjXGEA8Dne58uPN9C29tNFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RQ8B1S1crAms31EmeHrDmv5mn32mV3rmdhJrjTCrYovrUoCTQVVHjRynRtA9Fw4iXiXvkDCg6Rvtif9hG7Ht2S3",
  "key1": "5KvHgHL8416tHkJx9yfLu4njxE3JyWwGZQBAgqdKMifB6rWfYTR9Ps4nitfpuMZVEGAESTowkoqCq99Hdw5TumeF",
  "key2": "5JkqvKjmyAtEuYL6zFPzLE8mZ5KkZ7sB6vkkX3Y2PvhdxN7bdqV9Exjz31FwY1RG8NYvcdYMds3EXYnsJSfv7SDJ",
  "key3": "bJu3Z47BrrkXBA62Q8yZZkaUk5gh83gQ9m2A4a4rKYBiX64TJKurdtsYG7iVE45nmfTxmpfGEVaU62NkzXuxwgb",
  "key4": "4FovpJ23M5o9GWf8AKjmC212JJHM6TK2qsLe7LZUKPxJBc3zgChyk7XTXLAh9wER8sEcieVfcPnMYfCo59G8E8UQ",
  "key5": "3JnFzyW3fRVHVXyU9j25vK8WPe6bTpxQvnSzs5jghyUTEa3mcmUJ7T9QrGm1uN1iCPkEQKwxh5gE6sNJERfRuGXs",
  "key6": "5QFafM7SJ4GQyXHhTNH7ksN23kgQdikNvQxntNs6WJMvMcqoUBZCVPs27wJwsEnEvPxrwQLRXhDo6ikDzqiJqfqE",
  "key7": "WbUgCD2sZrBCib3iLjXv5KuYfXBXjR7DnApetKAZfsobwn1qXZwtBu8CrDGc3tuLwHyGJxBNg1F1eQh7KArXyaq",
  "key8": "4EHkVo3e7RNdLtouS7mLGBXBn9MeoPdUqUiSeAV2hv3yeFTP8PNGpVJP2gZqHi1UqGFBoEDibwUkd9yE3vfrtAgK",
  "key9": "qhHPUwBUwLezSbHWJkxmFmPgNNFtbxpBWRhv1H9FDJs9dmMZvuXJkqs3dDjqSrdBYqg61tf8eFTNW75DSQCcVRJ",
  "key10": "ogJinttSufJ5VKKYw6Zc8wHHYabDQqGU6sC4oaq7GyxGXZnWkPD5qWg1DLvHAZNHpqkpbvWpYMsec9X23FTXVZu",
  "key11": "K5aUE3XkefnKFghRdyfud8W2jh4VWNZgd3waF12pjpkFogZDBjvXjXHtWQWBmAVNs8YzoACouYz34SQTaFnXhAr",
  "key12": "3y7WqDAEKajgzh4Ccp6Ss6PCVnso1YzcJih5rf1hz988MJrCrmEsBwxozHFuHupGtwdRVEPec7DG46PwW4vhZ6T9",
  "key13": "3tduhpRa1e9jw49NW6LaWAgGrqStYEJW9nD9dpcCWhxLKf45F6NZSWzUfgkcj8JnmPJxJoAVZroU5sKCT5fs36JR",
  "key14": "4feKfEvVfUPGa6W3L4RuQvNBeLiFAzM11TGwfCeGJqE74S2neCwwkSgbXs1wW7ErToQgv51Pd8sudYzUK3xobwbY",
  "key15": "5WARojTViPV42G7gn1V1gQj17rvVrj283Wpy7VkvaZMKbDWrw2pJTuSF4MNermPiuyMXskXEHmLcXHvZxsVq7eWR",
  "key16": "4fuwYFu6Z2GPG4TZa9XrbS16suX4eWRdhy1cou3XP3vMP1gGjfK71jWYxbEkdgrhRkgnvyLUoPtCqTp1reoWfZ5N",
  "key17": "64TG7RGAYh2iQN2eKS28ZAdyPNugWFMRPLMcwB7qWNFGF6GnnxPkDohydJey4t6bKWN7X4DaUAQUd6ZLju3cwMdJ",
  "key18": "5CBStstFXKKKPg6XxmWruZX4JUUxzVPAhLR9BDKrJsHEwnuhp57DbvV9PGdwTUKFDzN9UvSw91vfMb27VL6ZmDxB",
  "key19": "5hCpnNN1E6X5JRZ1Rn92MqEwMCvFZEKmhhsvuHaaQy2V8DDU8xmacXVgZ6aHwjcmcGQvXsHXCR6XVRyVd2NGqgjr",
  "key20": "67fKmpEbEzum6AnQv9t9xsqYXgEEiKd5TFzEzjCtMZmt86tSnDgaw5zs181hygkdkXahTvr4HfHS9vjCYShvRstn",
  "key21": "d1vvuQzFquzTDWx8DLbij1cyTyyDNhCCmCPrbKvzCbwPp1tzwjnHAe2AgEeoEKkCZKjNa6HURakR7HWR45pHPtn",
  "key22": "3X2gjZKhoBEBReSiopGMWuJFqihhjtC1A1YNXfZfCjEgdXZqsXutNCgcsm3PfwvxMerheGZmBhdifLMDRK46NXPC",
  "key23": "3PxFrVpbBSDmExqRoW2fgWoDVHAYp5GEeQKBhsEMGfyw9L2BuGPsTgAjptPSkpACQ2aEEBx4ayst5rEgaNqcncgE",
  "key24": "2xNdzxiypiYM8FJMKcStkyBiczoUaUnkaftst5HDZz8VwEk2cJpZRYoeiQDxbFa348QuDwohsLuZrbthCvejVZmd",
  "key25": "39ET7w6obDotMyzBXx8qvBQyrAaxt4PgZDCNq8dUJhh747MJ9brQygjvggXjyg9rqDr8MQ66JBuzLARweuBFcjnC",
  "key26": "5KLU9x6YymGxoJox2BAssGhkRQzwSs6jFrTtQyuyYetJsHNB6zJSd5kSHbcEcndiA9vP7HoCza7EoikETfdgk5qg",
  "key27": "2irukRGcr7TNvtRVvAAHFKXjxn6xnzXeRrSCWzxH24FF6s2wrKp9KDDfjA3BRWVW2z5SePvYqXPqgXoa5HCxYF5",
  "key28": "jG8XA1JKe59jXeX8NyaMTmaQMAf7L3SoAQ52BxGn9QfKB2KnSDKBQ7eePXGAjMTgYWVMvM26wtfYMrRBECmRiAr",
  "key29": "EjDez2R7Kf7KUa7DNszgQJGDtyQToeBMiPvTGUUTtNgLDj9QTFP437sJKrE3moY7xH3We5h8sk7zawQnF6DmNs2",
  "key30": "meC6wtzqAdvATPtydbJsyJ7J1AMULWBn8E8d7Q1Cdu5UBQWvadGn2XfNZqXZwAdKE1FCof3ZBUJPerdsSN6h8NC",
  "key31": "3JsPZfQcV5SGHMMqUTo4HymZhszcoJHxa4PwBx8YQkWd9uQ62W6mwNDiygpfjyBjFjuvRZXX3YvXuNZyFN2435kq",
  "key32": "2LHpnKrq6uLUh9fHYn3cuupsxLNbPfrwjTMxQxq41PXwdK52iGeYae3kvZd2YaS27n4Qguds8kPzEkLQKievySXY",
  "key33": "4vVdjuNVXtivaxAm9k1Z5B2oV9cdiymogpR6ECt19373C4EaickdRuaZWm89bdnaXKQm6oaf9UrkTHv8Ly3fpJab",
  "key34": "4ATZgbTkMgStjvHoNjgBY3TSDQG3vMG7xYp5dhXHnZq6QHpeCxfs8Mpodj6iCYoUdNKq1E8Vc2AuiMfsf7MS5yVK",
  "key35": "2rcSxbJzVWitvLyMEdv4BEZPSgNwGHbE1jBR8c2B12bH2fRh8ZmQYvFfgbMGW3tDJGtJKcHgwkWwHwWvbExqAfEL"
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
