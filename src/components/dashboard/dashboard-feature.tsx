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
    "39b8okg1j7hWAzzCCKM1Qd39ciqpdCvCYgiXeeuKyTLLVpXbPvJ1xp9AyFqKpKCsc4wCycuRvUCeL3j2ex2d6giW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ThQjUKq4WLXsJe41vRurTCC3D1s2ef6bv8dQmoTiT6UfQmWYdQA3ffuAN5vxmamvHrt4GWa5jQk4opsyxD6HDGB",
  "key1": "Fet1YGYkhjeAq9eKfb5w3gL47esAVpZ9Rwc3FNbjzEcfDUX72wPXZcZjHeC2UxuVs6mm9gUCZVmCdPQ8fRPUaR5",
  "key2": "5HaMcEFgocqY52Qn1zXMgTtGFDvXm5qPFfwa5LC4WduoEwothqycChfFb7nV4ekuAwjvEFvCUKphARfQvPsUmKap",
  "key3": "535q9peR9ATg8C95WAV7UdX7C2gRYbLd2gxwTdS2Eaf5jF1nVMLEiKHqoCTdS98qBnihQfcMaAgLqj6Sa97kT9nW",
  "key4": "5NHFxpq1VSxukFJTVud5PCbDHKndogsdUZJo6BqdsvpjYAd43YZuboTwSzFAy593bmREQ5WkCkoiUP2znLJLa2jZ",
  "key5": "3KYWycUHi6Q6uQ5BxQx7kYotwZBNytLxputVqvJGEgBRX2hVBh3QEnjqF8Gwk3atu3rvb3m1fYk3aSzhnwd4P5Yo",
  "key6": "3gzx2A6KtnFH2GqQsCVH2VkgtSwqqqqBPt21GC7BBuaFQF5oCfyTyKQjUYFkXexgf4EF31TG1kc4WLVhGiU8k9Tt",
  "key7": "3Rka2uUfkJSYNeDQC8mXfmY3MizqKhKJzyrEpK1CaWGQQtYSY318R1GouiVES2zR13NZUNH356Vw328HuZwqbbUD",
  "key8": "3XVDiiicp27rpVuceZfbeSqVcPXo5VjQqJbKE3YyLtXSp8P9f8qddGKEmxiVZVKrDYxqrnBdVBDx8PkYWNDNtW5Q",
  "key9": "4hNFkYXWBRU68wzcvLAEDqhXqGbVyDwTqbWJ5objFwyiSEZA7YG3BnDD7n9zZykHrTqE2hY32RmABcCSXEJyPxWw",
  "key10": "3DVzfP4nn4peSL3Nx6RE37xYAbbMFcNi5N3u2kAYfDrhv6UkMohGhHDXxuKPVsCsBCpjNFp49inXWGPTYriDseEH",
  "key11": "2wQTKLdi8J3TSjhLevL1YQkdPQVocdKqGyb2tqfEujMqoWb4t5btjt97LD5dHNRa2z8971By2iEYTKEbdTawNYdJ",
  "key12": "2VzeZEoaYrUDTR2dAUkUAvhCPwwKB5Zq1VnJqJj28Bf53iMpDc5GKR2XzH4UpC1rPisbohXVrPR5u9FdbMNxEHq4",
  "key13": "2o9XBCRxc1wnMtB7QcpUCyKuxdMcrgwMAzQSaX9bFUtsmu3Nrq4DQeV2jQLEjWv6HbbujETDLhe8q6RQfnUiFCfE",
  "key14": "5EBRktgxv6x32sKZni5DA1vW9MofezhmoPRVQfQYvGDfn8oqYUTzSHbjHq31mes95RSAuzLRXoG5nZwPrmFap2jx",
  "key15": "3QL8iioPD9P2ZWFspg9LgZPVQvhnCiGK5axpjBaofbHqzAZAUN883yyTFL4zkbAfYBUGMdheJf2eqxsAJg5XZfTS",
  "key16": "5GrvZFSANNbrqFqvzDKJF5JW9rGeVNqw4oNAHE2FQVtjLhHqgUvkADjVgSQjRHWtXrqjxGSPoHmjcaEZ5zzJT7sD",
  "key17": "2vbPS8kmzeEreukaYeApXzBEtd6mtdPJd2Nj3orWRXt3FsuXtuGTJHaYCNtXujewYPG8UuCxnu6JtJxTQ9TWQJYG",
  "key18": "5xQqQ4MuKpLF3bpDzWnZovzPiuxwJffdkQtRtrEXAYPUGgxN5QNduogqepmLTKWYRaHTPsBv7Ze8PozwjozHJMCR",
  "key19": "3Vz1D63BZYz1Q5cXxSW3CAoXZoVkHNDQKHAoT18Xcya9okpjD1A2PVPV1giTjF8jUDniMRK5q4bhJdWE8NV7Y8aN",
  "key20": "38YXi4H6Q4P9LryskQJ5gEET6bTrB2DEwv9MLrRtnNySrX3n6woH99xXeZ8iKQu2NtBccaDv2aE3592xxfSKNvRS",
  "key21": "5j9abZQcVUeusG7XpKUcho5NNi57AN85q6tUcBerPe1DVJC9vnGMDFm38sswMCwAb39DAXVv7cLcUuPe3A7y82vD",
  "key22": "4EdrquQxbZJhQs9J9yVvYLdk68L2YWNhAoLxmwFoYbwdnoZVboWxA93Af6Vpm3pV1vz4ckohuXWoXrP1HDEZwFqN",
  "key23": "KNisR9yDqyRUpB5Z5m3qqvbjtnSTA6BNMWAz7afAvrWHuJbTrnuYswfGw9kTdTSzvABNnqD45dGfPTv5Qphr6BW",
  "key24": "325aLkMAMQWBMriUc7kBmxDyqrG8V3xaBD4kebbXuMJv6R4mpYTpcbAkgAaF6ZCqhQsPwm6hHAQYNLfnAhBw7mKu",
  "key25": "2mpWbhte4R9kzXpPfW8AYymGzdvH3LoKjX3SMenHCRh5HjQBVoTtQkqYh7pqjLvUTqFQ9FSXqroxhWvqQ1V29AqF",
  "key26": "5vhZCzAUTczCHyiFh18FcX99nw9PuXL4pwC1fDt6jgZvU9FZAADtNXYm2rP2L7dc1pMqfN8LdkqLWYjPYb4Ta95z",
  "key27": "5p743Ch5xRKXMCrtBhSHDCKZNtdDVwQWXLPZzrnbmmQ8dCZRC41sYcQCPMuvCYtEj5hqHMmKYJAQVfbTUJFxQXtH",
  "key28": "3f11tHbwjSZkg7j7e6yXq54omVT8iEUxXRG5d8NoMjwckU7QAGZJhw9qpViha3ix89cWCz444n3n7xLXVk2VL1ii",
  "key29": "4dRgWnKaupUgiZp8ThBGjrSfykTxc9tJMAncuJZsd88hn52QcX9bfZaJVVRDexbkf2mhYuGB25FGC9mMQ1Wcask7",
  "key30": "2YiztcPd7qtpuyeMKFQpgZyq9UGwBkhWmQhhszmgnDKeARgrxcdGwWnEDJYVvNbJeFGqNKGFWTaZ3Zs6ePQtqwSn",
  "key31": "H852Px14PgGghZhYpr7UDMCRxn7s7ytgpi7x2KbLAC19rJ7YH9DcMkHvdpJ1VcK4gYoQAtQQoSBhDHAao4VAgGB",
  "key32": "2VvKWtq7CrkYnTGwkdoEzUpxtXv3SrM87DCkg1GJSSb1VeKKXmjeoPqLaukxF1pbpxwD1UHhqSZ7PRZisiySyaiH",
  "key33": "JGYfmtnhXVXSEwv8bxC31x9AE1dCMm6JSLjS1punCpKpKeSJZbzPBx73Suk5SgqMGE93rMp7vxjjK7KLbah7a8L",
  "key34": "RzyTz9YXGZbaUrYptzmuoVD8FBDT8wRHtH6yFEJPUuTPudPePBUuCK2DDgTi28YA1gQkGYkTVDuemhupshUkSAp",
  "key35": "S5NDgtn1YofRzudL4YgYC2y193KNNNk5y2R2tF2omycNpRWazE79iPvL3j5xJS1XdbRSzvnUqj54Eea2vdsKBiy",
  "key36": "gZEUWngi7KWUpPpLbFe9Rip2VrJPrDq27VMdkEnRcejDZ53m24GXDFQrN9E2dW4GrKktb94CmqRiXiTJXcePCaP",
  "key37": "hMBFZbtf3GT1SEHNPiQ2M4PnG5dAt5FYsnasvJCKGqe3uu4qX4N9svW5MvHGruNEKF5Ukp2yww49s62rzih3ag6",
  "key38": "5wjN9LRLhvWBEP4KVwUUGV5tE5RExMbDdcEtmrP9cYi5ETwb68wxRDyrZF3Z7nszSgjVfFcdQPmvbp39RAdnRQsJ"
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
