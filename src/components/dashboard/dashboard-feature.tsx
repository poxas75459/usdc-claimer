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
    "5aqXpg158tFHGvgzxLaDFBkynMsuPv5gCQVEobUmC2nNHTgBfw7U6gjHpeQkzhUQHCxyXaSVYNryxvT4kmefz5eN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kvXiAcd3hD7oDNkRXAHGvw6dYHRaWnCYfBvpuCFoKWcAFmdhgm8vHohNQ4k7iGsygQzQxjKLunCaoAwbbPuiRzN",
  "key1": "2Qy2ekikQFLAubZ8xMMyfSUCCxioEKFQnBoRBPQ54fgN1DjZRa7SzZHfq2vkJDex5FKadGUdEtmPszy6WDgjs7Tm",
  "key2": "3pc3Eoa329wrzBFPwKGuLqqFCW9fsgmMANuo1hitxemp3wjqXeAuonkNq2myFG3QLqw24RtheEnMZAJa9sHDZPKf",
  "key3": "2Zi8sBYBsfcPLTQVHyLfKuodi1MA2PSZ9sv2TY7RcQC3n37EDBgYBPe8KBgJG8Vs3MkBjQMPBny29k7R4rfsPp58",
  "key4": "5n4ejvBweyph54vbMbq3N9ss1QtHEKsG69rDxj2gzW8LqY1FACQnUDY1dSpiewsaFDyFywxCztrK41KjGDabH1B6",
  "key5": "FVptakhZZRBBmgPwrKCdHK9EKMvLSMWqrnKXLKyG2Mfz2Pc97kjxaGUexdGDSwF7GEJDfXnM15UHNw3xV3uw3bp",
  "key6": "62WaLmY3m3yR6zJMKrRrZJ1FDSeL9acXweK22D2LLrjpTm3Qdnna8WigmZy9Xnsr9gFhnPE23sEGSScxH2Q38pEF",
  "key7": "2PMGjnuyaqTxcQ8PenAf9tYLTYKiYVfhqJeCymNKajYQFtnqzEZ8mpwiBYeQrpQS7aFpda87AxEBfGjBwb1p7jF2",
  "key8": "2BhcxJRVJnZTaENRaRZyckNbaKqRHaPHtH4CajHHf5KUrbwhCrjqm8C3J8Lsn3v7GLi4ihGrrb9QSsVvmEZwo23J",
  "key9": "2zh4w9uT8znEwZpyQvMKyh3awqubAK133qK7mRQkFvt3CsAH2nKtAuSY6c5Hro27T1KG5tGQKG1W4q6Kym9DgV3s",
  "key10": "4rQHAoLeCVXmxKJN1vo9StcshfQHMznfWyBz32nAHYdHa1x6a1nrSypeaPPsY5TEvyJy75uYnDr5mTAtspwAXyUb",
  "key11": "4UmQtBTUgSqnUibKh2gvj5QkeW34u96EoSS7NHTQaho2vyW6HS63KwiW9JodETmjAEvWh5cgnTuGk3t3xB2XeELq",
  "key12": "3yNxHwCAAd4t2vb5evQYUYAKaw3n9Ky4SP1xJAjWDZK1aFUS2oEH8WBQsXaEXUrqP8s2VYPmziVhnVowaVrsjypz",
  "key13": "265zRRWvubAEK3BfY7j33BPE7YB4CdB4dBZUFWdsR3T8zX7nGWbJ5TJbD4Ndw6gVBZBk5gK68epx5XPSojH89Dmr",
  "key14": "2ngk7fMQazfHM9EY6kzL3mJnMCr7A7UL1ubTAuuvCqw998hLgjeTQPL32sX7vk1NCjxJT1kpQJMsxh66EyvHEnuf",
  "key15": "5djxsK6E7EDW5u47ZLAsQTwr1F3VPXgV6zwyxD97y6E1AFAFdTQ64PrM9JeUwAuKdEAUcSne8YbPocXvyJexQ8eR",
  "key16": "4Dfsa6Juem6ju5GaLEkcYErU3ZtRuAJeRgooon6XeN31nmgzK39YeYmBiivQTLGNwjFocv9cen11CaajnpmHx7fL",
  "key17": "2y3S9bAjQ9SkC1sezjs4qCquodfwzfoa2Gsa4kyKmZC7eH4QGDCXjspizEvSD3cWfkegtwG8Q1jQKwydhSaRGhsR",
  "key18": "yaqCRcUt7pysyTdV3j7wTVJrHmahyZck1YA6SUaBSwn4odN2MrV5gAKp4oMUNa7uEh6zs65uP5cZLQkFSYFxkRq",
  "key19": "5ZTuJBznzXNSWYzadjy61bq4tupjcoP5gR3iE9krdxVSkUhvUQCUhSxwEG9ohagHW3VADSbxkXkgV1am6PA1U98j",
  "key20": "4c8EPZcAh5aDieMzFeRyfPrBLgyMTAA7dZXdubLHX9Tagb6eKTkURKfb1vkPkuCszQR86qgg5ULXXYA6Vg6zLrws",
  "key21": "2VRdipqQwChxx3FcbQ7gFkmHNsvZPNq5JmCTRQRP6U9RSX4adhnXFhFt6GoR6TnJiCcWdfUEzETTUFdU1RoV4H5Q",
  "key22": "4GdirKDwsL27SeV2BwXMuXLCiqFhyA31ZDDMdB7pKZpdqumsNPZ7VunW38GGu9B36DnK8ndYxEMrmHdFtLWhh5v4",
  "key23": "56cUxroVDcZkEoHQsdjuU5187evVTYcEE1XgUezADJjg4X8PMiyLqLebHshL1wSq6AQ6t2PSaUoM25ABovx7R5qc",
  "key24": "4ibWvifLVyUjndJGWzK7rtZhZe628pasgmckF8QvGaLds7ygMLVG81K6ex2pE5GmWqSrDQXsSzeq99siV2CW3XHT",
  "key25": "4Kj9BQf5Ka9mfMFR4p6uuTpfZbLmgicE3gDQrwfBpn7yGNDqSSj9NejBA5aWWX4qFPRFFaSsPTyrL2s6mKUzGYbr",
  "key26": "4kxZ6MXyfR9AHzqtJEJk3QRNztb5nGX2FGQwnFShAw2sBymz1Vgokix3stsrAb1QNb26H8vAZwBr2J6YSPRqqMEL",
  "key27": "5Hp759Lpm93PHT3RwsAvm2zFm4WNreuiwcjTEoZcJQBpUYeg87S1Jdc4NaBU1yt1nnbEahHjFp2CpVkeUzE1J5AY",
  "key28": "665hVRi6e3G7aCWabDanzr1Eg8phFNCfMWyBdLZFZXGXX3DVQScEYs1fmLT8J9KGizNd2tnhWGkXvQVyJMzPZzLW",
  "key29": "3nF5nWMmdwVawo7gNFyjYdRCGBBxPkY55bqB9ARdwa888ZP8NWei8ocD6bXjVAeT18TzcHY276cViHv3eYHR6KLS",
  "key30": "3RCre6CDSDjjTkacpae8umXwmec5JRsJioVcNef9Z4DogKDZM2ccdWaP4c9cZ2VJk19Nx91yEcWRyfmAmtUNn7HL",
  "key31": "4y7VokXco2hgsRYUmFiXGXKxEeFZ9TxmVdcpWQv2g4oZSVxQ8FTxnHSDRUCzuanNPtHz8FJfSJLfzSweLDmi6x4v",
  "key32": "4bmExV7FjjAnotfcPWsUAWoNvqVK1xZCevzryHxjDhGwV5h3fQ651AvG1Qt6KzDPso7fQYBF1Fdr2bBNvaULG6LX",
  "key33": "3izpPMcsLP8F9FF9en4WG2AUU8vav251cPcMvh8C7rLGBz8kTujBmtsc9cGEcNX14LK4jaKZToR6j4UWEZkWUX2S",
  "key34": "4Nkd5VYUm7y46V3h1yDRsr8T8VYtuASHcW3deS4uTRt4SceE7GBpDD4qwLkUWVfv9kiEtXkE23Spzg1ANEuDQwaX",
  "key35": "4TuTrF63kCk6JizDinfvESavmcusKnLWi3oRF4UCPsCYoQaC2Yp2Uuvmv5WV3aZBfBiMT4brFa4rBbxdN76rKC3z",
  "key36": "5SPmqsRTs8dJRVGhv7z9LN2hbEU1nBG4ikCGAQaEPqYe92aURFtSpckXPVjtvmAhnnCLav1ESxjrSpB2U1oxA2ep",
  "key37": "46EfeycL6E4WwcxZ4hMe92kaxE27vj7gVhhLDVPmvHKVHrhB5kxw1Yb5peQn7u6YrYz3HRCHqfVCKVnVw7hTtS7K"
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
