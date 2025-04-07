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
    "3s7E6XNP8KhWy6EymagNN8vHkCkN4A8VYzut29NtH9pA4BEcswq2bXKE4jU9AZNXfqeJrkBoV5ExNYmKkPqpFagK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vAN5RTFmGhibXDhX92qABCMbR2dZamKHsimMDSTWpKnxBgMjzpjYU7HReaitdybTV8aoa23o6ho1S3gqU7ZCB6N",
  "key1": "37rkntHzsWxmsuMfLrCRiPPXGvaHTANPDnipvG5Eg8YXbhz5Fjn9KxRQ7dWiT1qKdbpQqPn85HaraayCUyX59evi",
  "key2": "2j8B46x75Fmh9xqydwzk8bLQRLkZsn7D7QzEp2zk2MGvXzu6igb7Ko4pP364pZQMrn5vPKVPpAEQU8k4DHbD23ix",
  "key3": "4jNykXnVWMQGe8pDF3hB6NSwiPn3wcg3xkLJ3DXEMZjjFgdsavagE8ug73oa5ZzasWAhKMmHm9Qd7d6VNJdYEP9c",
  "key4": "2bKMtL3hwPKHF28U6oXPbQ67aBf4UFZsbUJGBPRgbXy6nJPGtFD5sTDRFpyrNge3mYeY4VU7RW9gEhfQ2agWXuQ6",
  "key5": "3GapJGxq3qzba7aUvGDN7w3e2muEqngFVqYBvWBGoWR3pcudoLqQnMaPkYFVCXed24HKQr3GfnUTHAq63P5m7K3K",
  "key6": "bkvn7M5tJ2GjsTDQBMX2SUNiToNZnEyfHmyaoJR4nkKVRiJjCRjFDtML98ukkXFh4CWQ8v1Moq51XbQY4W72THv",
  "key7": "45Hico6XC8GBTMkgFsAxqdN94FUXbLaZaQqMbUXrgfoGfZgcB6KGtDm7zzNcac7q7hzuQy6aFkUUFS2hFPumYGfQ",
  "key8": "5aZzu1LmnEkvEVxrZHPLKXsTpqYA9RjZdqQdZrFX4f1aiEPfUUGtTenqYxtxyKeU2ryQ5AqFbHQzTMGU7jxR1WGi",
  "key9": "hzbufew5Y1iRv5Bje5LrxhqjhpJSjLUBUUu9E86CCUHStf8r7qYg5t3pv1G7wM1pVm6LBDBWLFbyazu4Ydk7aU5",
  "key10": "SFixrMZKrG1QerZWra8fsTGjvFthvv6x6BbT9qM9Zh1wcmzJTrX97QgQTrHsVBdibL7Xeas2eRQkNjNj3T8kTMk",
  "key11": "3fos5SRsQF7iwvu4m86vGKv6W65warzCwP3y2eEuV3oKiHmMTYGdM3ccho2Ccfx9Y3GHxicxNLyafh5qWeNvS9Xn",
  "key12": "4pTNevXarYXW7wqiUcByVmJhEomC4MgmWG5V8hYMAzP9ndNKeB9qHayyo85cEmUmhcwzhSPUitRttWXdAA8YXPHs",
  "key13": "Sqm5efX4d8PZaDq4ZiXDQHCVz8mvKNkuWk14M7qMtetBu9Y9giSuYa2XravXsaaEuwNCZFAJsmSNhHU8h3gFowp",
  "key14": "5Xj9erdsNcnTiDScTwVTHXkMLGete32gaLtYEZndE3FmgfQiJ2mwT2VTaDHYRFGTHZCMvnQsTBW8Vn2ghjdnvkqT",
  "key15": "4wJSXNq6Qmt5fLRHvFF71ABm3cEs1zg3gDJFnLSsMsdTDMVnUHysaeG8ngWF3ZHf1Ub2cgs6yPPHszgw6HRsvspm",
  "key16": "3214tDHxK1nQ9CtKjznFrRkAurRiHrV57VyFnJAnZFvK4QHfYxFSKPe5xMb6Lqzjvdxxv5S81cEHnJxsDoBo3SiQ",
  "key17": "3KUsFvYvW95tfw59DgFYhz2wFCfyUZPkAb8T5x9yvueK8rbhzGy4PzaDVqpCGCMnZ7tiAgFphZYwmfTGRZhK85RY",
  "key18": "5PHhzrxTayaVM9EAdDrcoRiHzxeu22sY9aGEhs4gcCk2XLaSzPd9avPb9vU27uYsMg4SxPYth1D99BAo4sja5qzV",
  "key19": "2nhzuyVbfbefQw431q9mSMeTxgcc2rtVwtTxKYSG46XhrH62Pc9zscr4TXAjMs887rYGABeK5f4KAL8SqRcZaLKc",
  "key20": "3PBX1P7e8ZK5n6sg31mmvMdJpsjGkKGtb6PtyzwXnhfkwdsrFPNXoNZNXQ3isV5CapFzFfqcDQnGTrpbTSsiULRP",
  "key21": "5C8NUsmX1BuFPf96hxjiWDc4PgBKxFgq2beLvojtAGB6JzCqHXiJ5RCyRdWqneJ22jb951FWRV3oNweuzu2GkMWn",
  "key22": "5U4C9wWtuyKGxdzf1NGdEJUaY1tWz2jGHuXr34bV6KyWjwW2iNpyWNT9NZg1nQgcaDroiWNQNrKDmop6b8icGwD2",
  "key23": "5R3512DhZGRCDVGiKyrrjNAMTTfFsHHZaGYKNnmRRbZjYub53kuDV44wHuEyAu1eA2cr9RSUhyjv2qNnPUTz3ZhN",
  "key24": "4WKovy5FCrD5uxpLMK5TovTNzM6UKXoZNSmZVX5VWz7v1JX5fMTxWeNV4A1Cz8QoGEBavC8qSo82VaPnoGrQAvoV",
  "key25": "3876h2hqN3E1FqnpPA7iRdw2jyfanT5Mdg3JTfYnrcrY4pw4rz8hJbpTTJyK6MD4cMEL7LjtoCnaCrDcE6c6GL9W",
  "key26": "2qHJVUvExNXjbDFCF9zVSParuiFzHCqf3iWCJznAiyivruJba9Whok6MZCDP7c65a7gkE8T7gtLYC1rDVq5zih22",
  "key27": "5MqXhA1BCNYWdsjoBDhkeRC92o5sErXLEvGmJt3C4woFGZQgjzAmaQ9U76TB4f4yJrUNFN4rBtX68gvM5YKiaW3Z",
  "key28": "4pom7Jm4NmhtmFrmafWjQCK4KZHYNtQoD7FogUQSLFc97ChSTPPeJCAndSGmz35ZZaGhFM8nEAdEEpayYx3rkfV8",
  "key29": "4qinfmu8iqbGumKXdjhs5E3jihVxgjcY1zgXwoQUYdUayTgkjbXRCKnjaKq5AtRp2j9B3y7rmQZwtitEvKetpuK6",
  "key30": "5z8P5eKVU5wwa2AidAsjPBijRRf7frZkXMPpdA76UnHzDA65zN8PPTyzH94XH4FABMsqbo78kP1YjNWWcJ79MSDc",
  "key31": "46DvoaKLsd7F3DX1DBq8fovL1dwBSGDabPmG9DiGosj2bSyuzTjbnyW9PNUcGeoEDqkqkABJWP1SKHHSaryHi7ye",
  "key32": "46sME7Rhi3hNhbUHVVPjruZMRVQ17gycMfKFPPnxbyqNzwD4V63CzGAVUcbpXXvFGNcdwRY3fGJpGScmjBGBWES2",
  "key33": "4ShKpAzmjEU79DzJztHvQfMf6STyZ869P3YZsQ3C3AhUM9Ct5mdpzEoibSbiTUVNA3jQ59speC32WZ8cjQrRFsQq",
  "key34": "4mhLXGcHXLThCJhQBWo3aazGdP8d35eBv3oGQUT8HwpduDcyYsCGA4KvHNMz9ovRWMRhtUVe12bR3cxkrLjsgFd1",
  "key35": "5RctmJV4aHCmo4TmcXdV8yDbvL5uBmRZsD4YsQSGWm2cninfAzF1xoiE2tYXYWYqVLAddzr8uM3VFRRv8tXHPU12",
  "key36": "53YY5wpWJwXWXwe9XDGCwAsP1uMCFUM5MwzsfneNr1Ze4n85Y1FCnKhzxwCrKetvGtZaXVirTwFgZpPoxuqGrYTG",
  "key37": "45gNumvAhHFhkPM3H9jGUhGPiqfek1XB8V7SmHY8o5LdKmu9WVm5at7jFUFhtfTedecwSxbdhAS9Do9QgFN1uWnU",
  "key38": "YVmaG4vwip2NoMRUXXf7QbAUdsaLgYEFk4spdrpTREGawrZouGimXf5Z3tiAUTh7dn4J3PNT2ia3tnXBZRpvsKK",
  "key39": "LdSTMbbBB3S51Ui4W6w2TXGaEkxMeeiYPowJy6q8UmtxqEUtoVciswQDXRdQ3VFEwzigeArWSwBsZafFTv7yFC7",
  "key40": "2KskLAbr7f15L29gbg4iTaF93h2C5VF9vwLYvYaEcVLYm82FKs2P9m2nGhWxwawv6p26vcdoNrkQigwWdAaTe9gy",
  "key41": "tTCYCoHQEVcbsM3FbBWDjXWonQUjN4Y2wZB4WhTSpQ3hLsDhoREhoJfX7KY8aJ1ixtZ6cdMqf5pfiyPyyawiKo4",
  "key42": "4hopH4uBonUtVW3uPpJEN5fYjise7fEQu4s1kdffLfRBz8LNhBwLmgQeuP511FckmqHjWyD2NGxcYHkhr1un7FkV",
  "key43": "7cABQ1SaFVX2zCNjbTRrmk9gJYesxFSpQ5QBdbFwWzmNKupuVxm3f65t1ZWqQfvqXRzcmD2ptSDG2pSjdqjtCcJ",
  "key44": "3i1i8rHreFuUCb5YoAn9EX4T8t8KReto8jEsP8C5HAgQp2RyWDedpvEQGSx8Q4vbJ48JwqYFz7TMSKjGFp3hPvcr",
  "key45": "4YVy28Tti8dmbKUdpdkqsTHRhzm4VQ1rbADAofw4VJ9FLBKQp7QwEGQPjYt4UgRERPAygJsdgUGfRyzKNNUYrWGX",
  "key46": "4xH4MUoUsBaGFrrog14UUShUE8XwU9enNVGe4Gt5uvKNjHvg6VcsRyPquuyACUDJFpQCvfrPJzsN48RUFcPWRXLb",
  "key47": "63FvtG1K7Fg8C3CawSeDcnMNe9qQ4gMfnU789t8VNgiaPjiMLjj6y6JEtZuPN184ZnRo7fWiAMgW1coKELKFiD7g",
  "key48": "3eeaxXvktGa22mwoLonEG9tMQeBjVg3V7Eqf75C4a4qwy57npKBcHJ8Sv1SG3GjUTJ7hHjcrF8Dy4KaxTk5uur5a"
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
