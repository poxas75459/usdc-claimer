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
    "VexUH6NVct8L8BmEXGy4V3WJd91Vxo4vYSnLEACj79KSsY4krjLZX3bYi4yzRh7h8HpU5sHcf8zHMq1NoP9ds8S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LmTSa9pBtA682quCCu4nMiWdfSKjocgzR7BgAzgogXhENJWrC6S2hkYFt58DUx3A17x1a7DQw8QCdfC1PYE8Pei",
  "key1": "4Y7g4rkxfFpLwivUft3kL4tAEw7BZJrfekmkfNFQo8U3erjnj6MtvtBnDi1KfsDTwfynsiw9px4zVf2uEYeUdu7G",
  "key2": "4Cg8vqpn6Dme8QLzp8pKppeZiJtF7Gz5YomKWdhjhnKjb2BAvpCEK2qdnCPsUnJk4eRwPLHAp3Ah4TMZuxWgZJa7",
  "key3": "4PCDMD8QnyN9tVMeSEVpwYchamwBYQNiqNitdQKVa6eFLWNuGymRb6mhj9XWzPBsXYSGQsxLiLuTHU1Em6wym1jR",
  "key4": "2YYJBLZupkdHcLwcgSdwt9dbVpTMP1jiUSQdniwoofJZuCrXxyFFMADNvNYdHkVLNEe8RcnEi4kVffTE6SdD2nN4",
  "key5": "2dy4wdK2KdFbKJ8evPt26h8d6NP2QMyqCi4j3FNinhnkoxtw4cmesLZ1sEQ37fMf4qRaJ6uypFo3V7mmpwNUydhv",
  "key6": "2BCGkCsH3DSpjcP9ww9MGvAvSjj7CzERZnLaaukN7DvDGCby9acHPN154dwhsoUqdaag3qDiVYRXjYvzhyTzG7GN",
  "key7": "f7dLHYbCik22RaFmVV9DXeMH81jAo5QkBKGBKZjnonEZG5PBY1QG5u49o9V3GxM4AsANht77fjgij66KfUtPJoq",
  "key8": "2MKFyuB53THPJp9k1DRQRY4nNDg8vtjRSwmj1tTo6JVgvVKmzJQtjUd2MCS8YXT4Q7Yy8MsQ8T935DozyUsfYBv2",
  "key9": "22JYkiHPZN28WeUN2o4Nsmgff2JdB29hMB4dq7zyUHp1iF5NzKw3QrybL7yc8wxw2hZepG4wWZwbFHHr6rU2ca51",
  "key10": "4QwAr8QWwKcMaNZp8qmU648KmkvoiuPLoriRWA1pGjC7r8cwNVPqCfTeVW3WcrA8YBLK9eFzvsiLnptyXZ8UwQwq",
  "key11": "znRkcdiszkDZYWqUmNNVp8jNzqPaH77R4CvAHBa655dwAZmoMAMdnbJrPDmwEcK1GcZJhzfjtyfEyS3HcEoKAfP",
  "key12": "3TTiyH6wRcJhNT2fJCQjhZrToV7LkouFzxa2vdxyXxchX3VnSWAG2ShmVtbjaiZfac5rNeELSm6wzH5KMDxA94Hi",
  "key13": "4kJY1Z5mP1LGKLBX7vaVkR3kCPNJkp7jHC9wT2Fsb1XNAqkDpJysyZwHwafokZYoZwfHFKDopySvyucGifgcrGNh",
  "key14": "53hA1vLtUscA7RVbDNipZBGF1yJDo26XoynBxHndThkPSRPqictFrrcSxcDSX1KrBvUu5xMLqh7HepUzj1oaiJiH",
  "key15": "62fGn6x5BWieiPQL1M4MrJfWvL8hLYmbzU4xbMdXbDznndFAxBmHaoSjnoG63WCHBWE2RFrS2FbAGMHH9TBLyg7S",
  "key16": "45bVvZ2RwwX2pTBtatBcjZnMML5yZUcio9pYHB6kmoMBviomfauxEyezWbLQ5srmkwEbgwnXRcBTgb2mj3J1H7d2",
  "key17": "xogQX3zGq5yE61ZLAS4KmuQcxdmF9pZkXYfgxk6dW6k1EMqmu2ed6h9SGvK9vfTjKxkLgUEjeJiBUkk9mcjMs8d",
  "key18": "48U749UywiCjC3CpHb1BJdjyANgbcxJdRoNdfF6ngAuMBoQzUcauCgGsQuc7neqnjX9TYN2uCaucZuD5Hq9UW5Tf",
  "key19": "49sav3XedkjUUWReP56sTU5FhQEWQBhRDhpzwSXtHQhTUq9gAQhfwuqXHb211DYjguftXrreT2PqRTAWJB5v9Mtp",
  "key20": "3siq4G6NR9PvEcovqTbBL1vReuQz1ghYX4VVRdpKusdDsUD7q5cyYNv9NBRbGQAbsVjdZjG4YxZHqB5AdGUQpjEb",
  "key21": "25hh71GZWgo8fjtEKLBvcpDrFTWrw9wJh1hkXSP9Dxn5dvcVkCZs7JToxTRVykzx1RvHEaU6LtRSA6iAFk8yoz1T",
  "key22": "3GzWVgWsT21ANXxAL7rBPg5CyKiqfKrJbN152k8A178oKmDFa8hwwy1YH7gUriwr4bAKrUveEuBw6kXNXf89cmw2",
  "key23": "2kP78DNGNNtA2AFFLvSmTAFbd7m4cjd2qyTu6Csuqqo6QUAQzAo911VUmxvyAqnDJKAuLsxXC8LHvGAq1Uooq6P3",
  "key24": "3QmJT6BpwfRqhgfppt8Rv6xGAFj5UB8gSsfjFYpRXzQ241zKk3YdWCpUVTpPjUgMKipdGyHCb9HHiKe1oaKHwSct",
  "key25": "3uzWzTVRUHurLxX258EsPpA4U8g16baffGYm9Ft1jDR9BS71zJFucit53pMXbg5GFuHeXC5FS8ty9VN1ASLoAH9t",
  "key26": "2mYSDmPmnxHNQ7uZYbmbx3pF2aX4juJjX76CmKz4TiPXZy15FTG16yJpjfQLn5LTCqb1321tnkACHt5MXGoytGG8",
  "key27": "Cue9Ry3Jeif6STHhr4eWMJCP7eAAYQAhYZ8k8F2J5B4JQ5fCQbNp3NbmRsc7Efi3Kop3ahT5VsDMjWhPq9yhrT7",
  "key28": "67aTdTPSvT3G4eM24Yvb5M3TmiGMYiuFooWDQqUd4dtyaVZWFXMuQd634WmtjhwEGe2LaByD1QTfEDN9GyY4jUYM",
  "key29": "31cKiTQan2WBYysxDJNYNk74BRgqgF4aT7LtVxHubteECFdfPHDzQmWK9U3mJnZmV9qpp9BhoMe6ExmASknA24H",
  "key30": "37CTyLKD9a5sNW39MQ9JNugsFbpCMwnepJ7Pyja31a12gP8hATJCpax517UsoZN581QRDX5y2R6w18Mff6upGmgG",
  "key31": "3NUEAsaez2mUMmz9o6yryt2CprK6QMhqpsUSPTjjGfeZhKkdEeFuC1VgNY7CjGKqRwb7kZd3mzP58rAE8XdJrK3",
  "key32": "2CWvbqdMYaeGL4nNDPjuDw1CkPAfVwCfNTHpuoX7jPB96cGQEYAsNZA93MrZLgCd1SRuRFjiuUt9BCvV4LaBum1B",
  "key33": "GVjeVviDPF5y4RhM9bDT5QcfHzxfHXPbnrazzgP4QkZgz3sYdcd7pt7Dx2EV8zNHcdgGkEY44LMeCScHZBn4TzF",
  "key34": "5Hmi6pHPDdtmEDDKcfe6y7W8u1tRUWvBuiVVzCduAdFZYocnjVWoyjxXKn5Ek8d56aQKDUQCCyVjgw2QZK6ixvwW",
  "key35": "4AGzJ1gW5mYQkfb47CJzin2TQZ2iNjoL4zFeJy4urFMeYvdVUA7H5tCWRYWrPAMEPq1zm29qEsrXMPGLSMERSzfp",
  "key36": "48aWMY3PibRk7KgKyuEK2kVFNF3XD7oKaFsiiYXEqH8fc7bPEE6dfW7FYK7RWU4rkyVRagkzfAtLfzsvCjRYmrp7",
  "key37": "KnxV49JhJ9kXEaTCYHAZTxiJbgnP5Hg6zxPvq7risWeGqPrz8Rstp6Fs3HnZTHXCmA2ADeJF5aqLSf7nxYPt5nq",
  "key38": "59RWLrjrVjr6KZxLQBZYKrwWNazru7RkEXncK44zFME8pnNZWcPRxq2u7zugaWoYhJNxhP9fdsYx2b2GdrZSu7Pw",
  "key39": "5SbjQDUEsQgHu3zDx2HeCU3b2peM1dGzFYc2GtQZeLN8Vy1wzoabpF7qjmoGBCvXBk9AkLgQrZ3WTB5kDcAEr1d",
  "key40": "5MyvLoVkjBNVEgnD6LWNTMHg951Freh46nKKdsdrUKtGMy48GN9cwQokpz2MX9W8nzktoM5A1rXVrDgHP5fukTYY",
  "key41": "4hrKyYNJW2H4iawwcKvTdwSy4Fvo1jFR59yza318JUduJWD8xCfTuqK4WyoKSgxbEQKf8HUm3WSmcnqHwAyA2rNZ",
  "key42": "kdqsdMTDk9jzedVsbWqPUnAF3BKx2icgCMeoWMh8CfqHA73YuzcjG8v1Egyureirt3Dr9LbxoXK2PdEHnS8MH1M"
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
