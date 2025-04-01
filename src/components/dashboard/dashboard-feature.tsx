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
    "478xUyCWfY7h7vzpY8EkbiPYdPYvWbshYds38ZyprQB97d6jt5NRqU6jjcJ2movgETSdVGAJEVjKxnezktFVNYc1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9Am51Dh8ds1ua3skhZ7QqZGATFE3RHfobSE3HypW5WLRYrTuAp9LcCR1bip9ap31b66WwNcvqEzi2MUnFfMWDuR",
  "key1": "49XyQvDZ1F6YPWtnDWU6qrboJ8dDxxM9Tpic2o4AVsakQzApFfVfzVw55tH8hAjWevMnXLTc7heWDWVZfPrYmqG3",
  "key2": "3RVLvefVHWcdTvq5gdnTyxg2NpRTb86WmMztrEmEhw1gs7fdN378KFuF2HJSZxv9vVhRn3BGEXMuWLHQ96KNuVqP",
  "key3": "3LvBwo5C7EGm4tZxsgQH8KD5EsFHjhhAoKZVE7qv8TiWabb4pVrAY6c2zpgDc4F7k6f24BV9RjVEGJBreLZLqv7x",
  "key4": "3qgDGpadvnD2DPYwsLbWTAVEbbD12zWecEWvFMQxUy2S55qkzhkXksy1yLV5yBmr3YSnBTnwqyECH8u54UcGk1qv",
  "key5": "5MNzJnMmrqz7aGde5NT1fXc58Gza2C2qxMv1cTqJcKoxeAfsuFBcWigunpZkdKGmqHTVVMg453W4ePzT8iXhiukr",
  "key6": "2gTWouJezWXZiXgJBZ8SWUi8LnnQLw1vS7zV3yiD1q3bNYgessvHcXFe8c6ChBZ7PB8oEnrzVQnCxv4RLxWrKTKx",
  "key7": "4Cd5F3ScM7qJfVPmWAxfcAANRDSLfENo5ErNfiRLmzx7S7ajDvq53ThXkmhQLiXMk4XvhaDRxoLQoX7pDrGGYHMG",
  "key8": "3GfsBnTugoJjr5NerYekNSUoAa4W4heYXPzEGmUMBwzu6xmofv4K6T3JWZyzM64S2RJSnDQkEuQ3qVJhxBdsM2Qy",
  "key9": "4TkLZHSsAyLPCndixif9dT4mqzNCGymtFFerazLFqJKZeJTxzLNBB3RF4cho96MHL1PMdfQ78LyUM5Wc7wjTYY1d",
  "key10": "Th3FvHVUFVnP2evad8rsjARXEWDnoLAooNdariav6RXo8nrjLzJqmxh5yjQqVvV1ER33hbbakqjyAeYMN2y7WMV",
  "key11": "3is3qHWG18w24535KCNPKQWfBMDqJvGfrmGv1uTpMEq8UbMq2c2TDaSUkUmaC3WG68PuDdGu95HE5wkrX4skcYA5",
  "key12": "3Gm4eUbrY6bP47WzmXNbobcZ5uB3YgRwTFWr7aJgMkcM4ZWkVfBdAEH1sdbh62T4KAYtjZ6bS5xAQaxqvq9tov5E",
  "key13": "4puCpUDJ8CG3KoZjhxaMmJJBVDGurWPT2yMHGQVEUxg1SLTvmiLQPn8MUy8sUWpEqDTFTgb6nMwLQ5ssrg1kCLrS",
  "key14": "4LWCMLv9pCcmGMbty2tfUREwGSqk4q4XyHx2pbwwwQkEq3tYKiYWfhpfeyVTFoiWegp6H8FLSJAKUUFKrYzercH9",
  "key15": "4tcG9JGYJoHPrykLxaHd6AwneXRbiiV5KkPeKVHen12QCt3VHbTNr4NUep1MzjFfoVrFUHLukJ5tXGgjwXpn33Xf",
  "key16": "3Bu2H28gFPg97cckESFFwcrJLVpuiKefvQUxCwpWTrJWsSPRf2f3EkVhgmPmdjy6F8m7fMSah8Pyy1P1Wj6WAGuV",
  "key17": "46MT7CPxCPmCutUW9JZo1EB3XifrENtzKkUBaaFR1EGq5xMW56oxkcUnmv4DbiLwTBXci4JgdpQuoV1Ye1oUbvBX",
  "key18": "4a1GUPfviPEqapBwR5QM272JtXVP1MmZ1D5ixoyeswPMXEXcRZDFkywcw2aWiKbVbe8BBtwTruVHseXz3kCtcquW",
  "key19": "2Q4EVEKtETMYzadFK6FxqdSFgMW2BkNoUScWvynT1usQVRHVXdjArzCEb4SDbg4mHptxx19xdNAPbbBAmeNeUsGH",
  "key20": "zpkBpmG1bDXzZB36FzR4kAbYvLHrZ786zShNcHK3u86rsiab4Ss4AfCdbMCc4Gn4ay3SXj69CdtxWfUQr3wSyXi",
  "key21": "2B8v6CyWCj7j7MahM3XRL9hE8YurH3JyR7vPzGrqJSNxbb7wxcoC4eShtKE8EKV7V5BXEtEQfqNydB2XCy1GxrYk",
  "key22": "4U3po2NBynaWqifUbSKEPmANXUGRWULAznYumjq3CVZbmZtyz2jpWxBDsqFjSmxkaQUiPb9G74rzMbCEqxrSFYVf",
  "key23": "3B2ngEC3mkJAqdtsMF8fFYSUNBHCceYjGwTC75DqFai3mLMisEV935kKt6C4SuWwb2SnpL1qEu4BXZvyipmMNrop",
  "key24": "fthBaTGvmi96FxkU5iEASTyK2PkLUMnH4SLfftdKyocfqa1S1Y9NV7Ajsia6EmkZkw2bPCcMVCYps1FmnNjLRCP",
  "key25": "yiz6DieYFH6VMbMMha53yJH7GwgKn7DCPc5sPCei5SqGdns6KeZ5kJxvgBTZTBgfrkUSN8HktUA36F8pHQ3qCwX",
  "key26": "2fgTCUHvYR4s8gu66wuAviHBsAGbtZRtUvVFanDGwXkpFpuCa9YangharXLfNAu9pKXPeNfmz9jc2o8maJP8BqJN",
  "key27": "3jmtU5SoR77e8L5AEyjJgrcujr5j3HygaA53czZTVBEZwBzzkentMFoZrcUsj4sH9XG17nMy4VazTGBv4HhuMntP",
  "key28": "65grjSwhA8zDEkMFLA4tM5tt9qnMxSN3HuNZtGZ8m4YFBUzaMXw41ZXshGhytr8f6TYmQqGF8iH2BBbAoCTLmTHP",
  "key29": "4mQbSQJg3iw2NoXVpm78WV4nVSwEacRho7ce3b4cESFqLYD1PqG7pQgNvVvGuN9koZoFKaNqNGFbSfHadsn1b1u1",
  "key30": "5Skz5A3v9DnkwgFuAXcsJkPixX6YhLM6xhef8DuMBWK1pqokvdrRFboRU6t1fRVdGYwRtF54DnpaCKWAUVeS8qYH",
  "key31": "2RJsgyMtqNHy4B63KsfswtwrTJWfN2D6iXMGGZzDQVbu8N1hEbTQ7i9jQsF3a5PxPY2tVfiNArtC92Z3sjA8pdMe",
  "key32": "36mj2cMXCoQMfkfgG6vfWpXGqfHpbLGNduwzeY4NrYhq3gwHMuGWLhN5oxuj5hXNuhj2UPMcM8wAdnEbxGwYj9Zq",
  "key33": "46seU2Fngo9DLxNXV6pnGUdsgLa1CC8zA6ftvrNyUyPDEurbVbLXRL6GWaH4juwMbiwYexF2h6qtirukeZtCcyS6",
  "key34": "2i5u7W6cNY8LDLjaG11HQbu9z8KNuZ8dG8VVdg4fPpHhQVygbKH1atCbYkZ5GZB5Yy4nDkAqFuY14ozarC7mjJTG",
  "key35": "4rt4e5XnZa6fwRKr1B55wkGkBqsDWV3qocUaVEx2JCR9HhNzvpcYHAsTMWcekKm1rRjs6k4J8kJ4H82y452WRdfY",
  "key36": "4PjNHimKTZaNVSAEmJYkfjLgtMRQsu5m3Hdw7n5jZSpJ9TZwY8BmEABd7FDRmDUT4LTQqVh1wQqUCy5VzgJ6AeRG"
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
