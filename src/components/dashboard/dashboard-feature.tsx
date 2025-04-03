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
    "4E3ceGW1nNUsQozjTiSbVfzvhhYAEGK692EW5xJP5K9Lc5mrEGSzvE9n16o4KmcqMrssKxzQvN1mqM8WtPvohdGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ek9qXxnVwd3X4CGFdYLmspzkfUV2KoWzf35AUoxuU3o9nswbRwPqsgEpAbT7kJsuqcMfozQdj3eZphAmN7kJdwZ",
  "key1": "57LnjwuuY39vKR9WtKFuaXbEbJTrQ5geScPNgbkGndaTZ8rXAsZqxfcohTxyiCo2SwZYD2BgrapiY4EiBCoVJThz",
  "key2": "3jeLcy1XMAz7HhrnXedpQLGMTxtNsgQ2jidgKz23Vga2maxiK18rRcvoHRyS9mshem6jeQhX3R6H7qh8gN5EwQ1X",
  "key3": "dSEyEoAkXrBJTihX9P2Rvp7ZAxpzWU1LiZXu9FzgsHGTUthStxjhhnCdgFSAz5UGrzDju1f9UisTzAtGWC76jDc",
  "key4": "2UqyDEv1UWfXeCz638TXPcuh1SNqQ38NM9MEmm4S63dpPTkV35K5EfguCoPdgMz16itNvQftRStau7J1EW5jkKie",
  "key5": "41GaHMTFSaUYskX4UvJqqRgmcf5dHxHtaiu7sCa9KnkEGmWpv7WyTkZ6gnNAvhbQhXfNiK1eDSDNH9yape6jXFbG",
  "key6": "3PMs4J2h1qJoQif44sxFjyZRSp7GhJZbV5sNnPrBo6VSPnF8BSMrvemFET6ZBvKx9Y7oWGio4nGU95NPcLm1tEJL",
  "key7": "jUkw6nGaJr3Au9khj1nXaRWkwwTCqEEjWtFv9zN76idZEGHMsKCw14B3rwfTUwMRJ9Dkys6NukRVP2wC4XcfWWV",
  "key8": "HqJXSeUXLQpcv9mXJZTZBWJ8FcuBVvmqudA3dffFP3vmL6u6HBHu5CUfPUoTNeBTxjb5iXeGuGaSfd6XWNuM4F3",
  "key9": "UQS8yTQs1dhobAx1ctKj66A4uNoYq3Urdhbym4hCVrckKY3NSQb82DeLKJXxBLqqEy3TueMf3xjcRWp2QrpvE8q",
  "key10": "4N4wUhWisV1VDk3mqpHYBMsiRETXc8UQRQ6TRQcEDBT137ZP51Ln84pnZtqQmqfVKtqB8FWsSwPZwfBkqmWsY3Wp",
  "key11": "5JRJtkh2PcPSnP1cw7JVbSJ8ndywEwqRXVesh1gkwQ2rGmf5NRHr5RuL1sbQmDvbRm6kbTfjDqRAbJrqBcV1ReAo",
  "key12": "4r6twUmwJnSkvZ9eSdMhRHUmLdSeQSZoc4eUJBw589JKAcnHaSYkWebg6gCAZJ396BEqNk7PxLyw63u66ZwsTAHU",
  "key13": "52PnpVMXLF85uCutuN4EXBtTirGwW5Vfoz6K1iyKHhdokDKWeCWjhAd8ew2mHwXHhfHUDLJPJx3zbjRaodKbskGG",
  "key14": "3bH44ixpiU4CkoFUhhcvStjrRugTvLedECZ2f4fZkMFXAwJjfAn5vfPbCNyU2kS4zTYmcsfw91WuYiPoxDqABhNe",
  "key15": "2jYAKSWctatTBxmmuSt8dBCUnuJNwMd3gAGLQ91rioWXa8H5cpsuceVAVZBCURfYRgqjZdvKACSnnfcYiGCFYZVB",
  "key16": "2Fy2FpD1jUHcLKb3PQzdLWQPHHMeFyAoihsgu756qWzUsJaBRZFrR6A6JLkZWoFDyqMc7DgLsg98E1aq2BSWQKRm",
  "key17": "4hmiaoxGu5qAe4FGXazYBUfUj9NYdJdWkmhZdR6MYdory7VHjajXPKoFB7HNRpSD8rUEYoehYbbGhj9Y6mKa8JKb",
  "key18": "NPTZ8xFxY3SZ7UYTKoe9ZfZMtdPgCGXSN1YRaVuw8QA7dx9JnwzfV2HQujUD5QvZKNam7HyZKvkVAaKyV45a7gS",
  "key19": "3Zckg1ZuFBhD7ud2kE1xs81cy8ojBvSE6zQbiS9nYzt5DmDB8X9rmLQjURstpr6bgKfgHMWWhemjAC4WnS125qjZ",
  "key20": "2uut662FUWK9NZwaeqxdoexYJ5nUMqMYTfciVFcceLgy8GmkVTAVPM1KzuXPHC7hdwUhVfQCkeMroVqeMSfn9B82",
  "key21": "5xDL4H8ryYkytpzzNiTJPG1vV24S27NQNsuK7gC83axbQGSDAicR1pV4nCo5PrZ76gdcGMYLADfEiWCdVQkS9CVG",
  "key22": "2Novc3iGsqcZ7Mty8T2iomDcUuMMzhC5AhPkBW4SoLBgf5CVYzDpVZ8ypiw6SH69UGJUCsKt9utaC5sa5n51f1uo",
  "key23": "3amcQxduYPjzjGk9BdqzVzQujSikwozmZvsAfhiGUnBEMs8bCk4EPRtsTU86JypQRQw89u4xZrnX1YvVLviip6dA",
  "key24": "2QaQW26mw58LUu6M5EQnpk3Y1YoSqptvNvLYFieSgrzsH33ZK7fXx4d2JGmjosnDqxn2Grnbih7HBEGpg5EFSwRz",
  "key25": "5BPKzdHvXp5prwKcnenSZURrBmSudLkcKmZkspkPf4QguSx6fYF4hPbDkzoY8W5SY5yBV3Ft3KY8MaTckAK5yc92",
  "key26": "2SZfC5ynZWCQm8KQqYuXb2TsNVy9A7THnd63iyjPx7tAj5NZsDmHybA2P1janmEAe7a5Se73gbbATMiAjzr3Djit",
  "key27": "3VkAFyJkj1cZG5QwV3bapwBV3MC5f65y5ZJs9T8dPPK7DbEcvtPkgJWQSkvPcAKmpezdtkJWMS5kq3pSnoi3GpsQ",
  "key28": "5PjTkiMRmxXcJQEPJU1MhrdScDPQcWxWyFHmpNmX9FTr9ewV4qc2MWg8gYbGotFB3v2zxeq2hdSqNgxGcCikTnfS",
  "key29": "4yDDo9upnxqswRpCqEZWRBRqhTgSjrog9H8gq35vwW1k3RfMTKrFQ5p2QgypX6pTQGyzzMH4Pwg1GKFnZE1dZutY",
  "key30": "aTmedNb1K6yWdwY28fVh3AmkMhsPBP1Mbc63BezXAmNQXeKmRQS9rWqBXeamS4SF9F7tHMWzLJJprB2P7uKm5cg",
  "key31": "5mowLxsJSU9kn1rrVest7vMgZwm39ffDt2nqB6q3RQJ8UaYkm3znRW4KUddZTjaTYmLFnywkyECnAhaXWa8EjnNY",
  "key32": "33q15u5d2XggFcTnyBEQ5rK78GMZXEeF5ApHa9z8RVdodFDPGkTsFCy7KYbaXeWuoGVLZ1DRBFKCnFa2BiuT7KQw",
  "key33": "3B3iFwcospkpWy5ZJdARNj8155kEbWcTYhLK7GS8Cws8BFBraJM46ndARNHULJ3ovRjADsR5idr7k9C7DZYHaZ7J",
  "key34": "TKkNScuAhQ4HxpdzmtWPbwShaZcFDQpCvwD4vLMkwCXVFhXQVoBFiN3GXf9mc3T8vd3bCeydmUGkxWeHkRNafgE",
  "key35": "2Vy64G89nK8T8iUXuYWJxkjRG5YSdGhuKdMeCofXxNkpCbvuChtfVnhB8acShGT9S23Asdr4LAizXSUDFxGFDQP",
  "key36": "DDJvpTXX2qpHS6yQpANqyhHYZtyr4LGFrqA25bAHhtFMmQCA2bgUTGPwX7LZ9fNs6UoojR79GBeyyy5GF9Mw8Rt",
  "key37": "21roGdJTvMjfabQoSAL9M33TwR3qqKDiTAkWNLPFGQZfxaeLuRKf2Ss7wwtpuMJjJQJKsxY4DwALdky9A6dfGzRx",
  "key38": "hNh32QG9WJAMQjyKEzvVfAKK1k2S1AWJwBkyTpbeWGPpCuore3kTLgnasoGKT7U7npYome31FjbkTPXcyxKXaTT",
  "key39": "3FYFdGvd7tLWrvSVrpy5aRgLTNHH5RDoCCCKYzbzqggoLfpSf84gFFYS2yXAcENTHA2YeRFhSEZZnMbJP7dvEj3C",
  "key40": "jJ1LDFNTyWs7gHTXR1oTR9rF9HzNtyQxYXXdJELKYUdw38195a7o4me8Y31cVuHT9VzPcEeH3aVwPupwaWW7Tji",
  "key41": "258BYF4h4hSmGNEY2JFg2jnFmLt4rDiUYah6zMgQT3fbV5iXrMup5xix9X5cZsn7h2hNhCLtQ4sncTGb175PmTf6",
  "key42": "4iy76d1G9CukUDGwz4qXkaCpPVSebUEqdreifVU57XpkQN9vrkYnwMg3JyMcM9FfsTbTZi8Nj79C3b1GP1mnJ4z6",
  "key43": "2WvBbYjs3Eg5R291CGs7s9iTasRDfhWwrGUoHTE2HZniFrDTghk2qJLNVWhUaUUftRhb6EkTZ9EW1Ao6EFhrhtq6",
  "key44": "3GMBPjEBpHkvPFyrECVNsTBQdsbTMD3T2AxXMnW2kEJUGQWnnosp3jLtU82CAxyKmX7N4sepDvhcBZEBjyW4AxdL",
  "key45": "W1pNhruSCkt1ZfmeSYwT7y7AZonk63hirSXpkXaskBtDHAWacbgdrcqLgPBfampDZJCPBEBE5NSi4cZynr6PVmx",
  "key46": "64BFxQwGZwT2beKqeJqJo2ndAg94fJRo6gmyvaKX1ikYR4TjB68fG7FfVFro2jYKaa5wbfetM9gucX2JRhor3Q7W",
  "key47": "44DGvLHtKV1yeYP2BifruBWD6mJTPMceZiRUnmg4QCZd72CNLbmv5zDLzGmTWFQojAeiZJeQ2ttgGAqrA172QHcK"
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
