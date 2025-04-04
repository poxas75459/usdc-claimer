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
    "3WJqbSaHdYjiB7P7dosvhwq5JzNBkU3FvvCesGovndn5w5zUoCXpciAgoJMHasdSFdgA1o3AeA7E2DN12pkYVi36"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "suyPVJVUWKv1FUeX5TxNxNJEYZnQ5GvhTNkZay7TMwxSTMKzoHCBZVrCTDcPdzsYQG5xppTCGxaJA1udgcmZruM",
  "key1": "2uUtL2D3J31qqUYyyxR12WtWAd7svYXrsL2hKJiz5erYQF9viiPgXdNYjmYEGstD82jQAK2Fa9XxTsjwpuDomGX5",
  "key2": "64o7qBq74BL3fukNDekrmQSMx6RqsUWitpNxPfdQRduKCnQ85hqwb7PkhSTiQVkAqEPYq8fSAuGqEnboJgX5B9bg",
  "key3": "256ztbfVWn9N8KEEJejcXMn542nhkndBDYGaQUif49bz1PDSEVPC8ggAbhgnFTxg2swZ9oncHdgEnvKfooJiGPLh",
  "key4": "2GsJv1J3tqRDwympNu74tisT9uYuefhiB6QtgTzT65FhEMJfMMjv1LSp6AqzsMDnnmbf7fSeVenFhNuGrSvXHxNA",
  "key5": "2kksKXRSASpVX48QrrK3nCL1BvyQPHA2SLAR7LHkvrbnpQCgfJXnpmEzoFYPx66RiPUBvo6AaSvL5X1P8P62C4mh",
  "key6": "4M2L42FwH4h2sjq9xdTgFvBxnG9bQqwsQpPHmEF2R2QWMgJwWwG7jzTotp49tyiBsukKUjY9XqiQTCqgM2CeGCTn",
  "key7": "EvbLNq8HCNKpZEUBae54ypA289Qk55tqXtVvtRrAdYJNsAwVpLfUeA9kBCtAWnqmr1xEMYoZj4dFfBSJJEB4oVm",
  "key8": "3gNYsTg95vbg378Lxv29KAdZM2Wm4sARkSNCpB3kQds7a9GXHqk9xShDabr1fkFKGP2eRnxNJkbbXQQcyQP37Tfe",
  "key9": "rAQVoeo3DDuUHt4fgGa3F7L5x14Eb6kvev5r1yfXwi7u4kNFVSymZyJa9iVErAq1GAANyW8zSqDQu2kvQ5Ho5BE",
  "key10": "5E5VxRVkNk7Gy1XNf1fpnJxwWkx7gFUVNNAzFSESB1CtTSTmMLSukj37neTeT5FgKDEngQa1cqY8cGt36SZdaQdM",
  "key11": "2UjPD95d38hQACjS5f5aKbHQe2STURnmg1MTUsoZQekubrpzWZzmo4bP3aWqGAYDSoCvy93QoKG9AtofA2LjAZuy",
  "key12": "39GUh9UToyHg8dXKHf3rWe6sFaBMyPmnhzAmtR3xKEAUjMsy5nPaVTWx7YuYQ4SZ2mdPy8SP8UY8LudXPsxxWh3v",
  "key13": "4PshKvSTmQD1s2cuJfhCBm47Xr3ZpXkWLeGqeiVkizuQnL5L2Q41TPG5ZA722UPZy1d3pL7XiAvomBpd4zJUcudc",
  "key14": "2GtMw9kdQseFq989PpSioKZenBMiCR9jUohdFmqESnG9Td7mYBrc16YubcaSwzxjwgJfuhEUspx7rizaCuBJz6ab",
  "key15": "3y5DuQbhTcj6jjZ6bwXkQQ7ZrUuKLzWnMRHGvh4eQLMF5Wqks9QJUaZgMnTXFjRXnP9xuAo686oUpiMpPXkh5dqL",
  "key16": "6YYYPGak2qDyFfYkLz1DZnNTtmsusKxo5ikpMuWoz5vcri36dqJCgvQ8Wj61JoWHywzQKdeZNt87FzVUNcfoR1R",
  "key17": "WC24Zro6UvYndyJg1BCg9bXRLDYhzxeAkSVYTSyFyZEKapWKp4Xc8oLVsd8xYw3zmz8Y1wGDbeMsHHBk4KfSze2",
  "key18": "3q8c3SeYSyQctN7htX4RFhFyLM5MKd8gam2yMLeVCLSxq3GgEs11KFjbYaNnpjrw7nG6KLAdoMe6HhbMi2VLSvRe",
  "key19": "4Bfyste7SpSpeF7qd8ESWgHtXthRGrtcJ7Dgfm5mj7q8fEnTR7gPhXUoacKEVJSXXUpPoZPjJVPtboUHWhLbsqHU",
  "key20": "4qktRqcMefUH42jZuECbJ1MwJcc99Wk71y9Mg5LebSmwyi7ej1F1E4de1krJ2roEyp5nia95jp8gtvXWH8BkzMSU",
  "key21": "59JdjokBxoqtBT779g1qMR4C3Dhk9W8JFNFkG7Mj3L9StJMGcTEMEZtmPGnm6YSLDr8woyZLJy2vBYPg2VSmyTes",
  "key22": "5LSfUMDKJFxKmaC7qLoU1tLCrZ1MjoyA36PKzfHiTCHWvHKaT9CtnEN2coD4GEuuGKZfNwE1bvEBH7ifh6ovifhH",
  "key23": "4ERF38F2EdKfG8eGVgQxt3evzh5i4LbmDRiWeSpR6JeTojH8sPzt8YUJbrkDkjeCFoDzFcJ63L8AHKBAgzB5uqnj",
  "key24": "2LWZM43mjERpdVx6MX4ATyiu5Wxb5GuE2BD9Pr4dqLRHfMKYw8KRYZ4BCJ57v1snyu4XGmPUspEawYvZwxumpAhF",
  "key25": "5ABk6rz9rUho6okCvio4mGrs9KytytU8VacsKckbxoMy6zixZ7fuAaD9n7YVVDRjGWNvZR2YqUzAvfUb8cmGRiNn",
  "key26": "3XViqvVNuz5dC739HNfEVethAbXVm3bPCW3xzRMqfWDoFCszX7zkE6rGV1voqzjKDZAeHzotiJuVwDXrxxF1ZSQ3",
  "key27": "4NDSCVutVQ98ZPKYCSNhk8zfkv3VCZQ1eXyBgNupCPc1bksZXsgFXMTi32K37Ty1WbWKK6h761A7aDxkBC5AsL8J",
  "key28": "4mNeiHBYHbFFGZueN8asN26g7TqwGZrodki6acSgSQq2HoZTv7hikfagDb1yd73Ciu2neVJ2kr3XJZ2r854vepgu",
  "key29": "2SW1LmG8DbRi2QQToq5N2whMqynVmSNhPLBqq6PJ1V6v6GCFyuH3TUQmrKS1bj9eqMNE2AbC5SJe2fZYcSdK3wG2",
  "key30": "5AsSHnmJQ9VNvduPBMj8Z3r6wEMzZMEBmFjU7d7N4kgbYJAKby8C2EqqJYKuje4tkRwMCrmMExEoMxZi9cNk9vNp",
  "key31": "4xnbFuZR9gUdcif3J9kKkc1URirK3FmVCsLg1X681ymQzUMbSNmbShnXpsj6vgehaMWtBrAPhUDM6Y961AuyqXCo",
  "key32": "5Fgyj4bDKzzfySLxQYQxrkwgyoNrKSZemNM7apVrwieYVPoFLDGtXiSjFrQzAfasDrq3CrTATGjSiFFEAhHB9S7p",
  "key33": "4SX9b6TJznhKNjnLJw5nCFRsTpg9dQroNRDgmVA3PvPAtktZG4YyyTVj2Etaaa8xa6Ak6mvohLPJnzChzGtaXxU4",
  "key34": "3LdnHb3ebJSE1e1K4r9fRjDCzE6JEFE7J8BNM1b9wn8U9iDiV9v4V9QZabHg3XLEC2NRi7dxsBo2WWj7o2144id",
  "key35": "3mikFZA4gmHp1JggpF7ccRNvgg2pUUGsTsDXv9r1LxuBxZiDy5g3G6Bb6j1ExyLLPR3nEzh8eCEZ1pHX95EsBNpV",
  "key36": "3h45Tzq7R6hMAXWEQW5SdXE57AiiBZcjSEnNTjSMPh9fWAiZzGRsdk8HSxghEs5h48aU4CFBsKJEBSdXVte1d86W",
  "key37": "sr7n1dva5q3Z9wj4SxbT3hwTnDtbC5oHrKrjmNV8TNP2qsAdb1ops3YssLkKihBdNd48chSr2cTDTAVXZ7F4zAn",
  "key38": "2r7AzSqrNPfM9tDr5qebmZyWNTU2L74qYidwFUWbsEKF9MHWMs3F4KzpbqjJ6MEnmLEiVGgexkZGzFNPbHy5HTKv",
  "key39": "3TQJGSjMeBuhKM27An9UDvg95X1Zhkbcj4iRrNeb8WBNSueYB1BadmjCyEeY3rUc3eqTwERQms7mrguexj8U5Vvp",
  "key40": "mGiBrYhuy2eiK5xjpptSe5eLmzftKGf1Jf11PtbN5zgxTZHvXuAkWQGfRngatwpwE2oAUqEqkd7j4GqJGWSjXHu",
  "key41": "5keJZZ4cEjwwysuywRfGJ6bBc51ZuNDV7mg511gxcUPqc6ABAVoNNCj4gDCxdr6k6rgapScCJScgnN4MeTnwQ54t",
  "key42": "4QEExEgBPvfz3ySuHM4buSMp3i9C32iNSJ9FtNE32XNxBc3WJdnrD6KMQ382rjqr1HfPzvUpzfCR5vGimJSrUrLz",
  "key43": "38UxmoBCKCKEgSsMgXo2KFLqi2SnUWGW5R6xH8ZQB8ocpXXNa3rH71J9Jtg7CmgW89sek4JnoyizhM26n9sy7vqP",
  "key44": "5UAq1YFLEJpEFpeZSTgzZpYbMpiXNDS1SoRazxBgzJhYWgULHcbrYX4P7SkBoBgB5BGXKaVV3kyNVD215H5sB1rx",
  "key45": "LSkyLVUASdy2eJRkA6SaRP78sdpbFtjzXPYK36gdkW1g4YWWJeanYzBB1cWd9NZeuMkE8BbCS7WqrYiCEB2qgin",
  "key46": "CYPGrmjT8qH7aVYjPeSM11eVTZJyrZzKNSAYQuraNvN33c9sA1spdD4xeT7tacb7jFwk5VCe4r3MrANKTGWSht6",
  "key47": "3gt2sKv7G5syU8su3JPyoWScU3tiSTQowUEQhUfsyUcyjwKRcwEdTGKfTasy8Ny29a13T9ukCw2EeobPbii6uLpV",
  "key48": "2VKfsGrWFH7VYhEQZaRN7cwgAKNpLgZMGi71GUdwzWkMaLXEsSprhev6kvvP45nAi9mQpGwerp94kfCWN3zUkiH7",
  "key49": "p7XWm4QgeWrBqtxgKoHm8B22R6xvbkPE7auPt4ystEPjZowEKG6vvV73qFgeAKg1swQkfNTkQhK7GxhuXqZXYuz"
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
