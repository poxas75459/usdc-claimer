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
    "5esZTQUD7QNXwothDw1qBh3e1kEpM1pcTeUksoGVmcMuULZWDn2GYCgooLa8JqpPpkFSWw8t63SGzFa2kF8HBdFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yxgNdhVXYNBszkyKSptByRBiLNxA71Y11ieHoLEqYUEbHysBBxqcXj4iecmX1hm9nhhuLrpHfUsGzSb41NXuBVe",
  "key1": "cHCvXUYPTfhHZkQxyrQEXLxCK6ZGDm84vnsM3DzuLud9cJ1pN3A7LEZ8dfvBfZFe2HgWM4R8Df8tsFAEDHjoeJx",
  "key2": "3xWz1eemDikoLHYz2oCmFQa35ccZjyzY3xtMpJeMoSRqFEnwSuDXe3qg2m2DDj6VzAaCDii7ywFxnwboGkx4yVRN",
  "key3": "3EhL7STCPT169j7ygNbt1toKu6BFynoUy325qk2xDX73EVV8Wn8QJu3eawb8nFobsxRGv2v4oTaJbe1kUHqTHHw3",
  "key4": "5PgMsxdLKToW8GAD7SUDuDKB3Wbdb1sn6TZHzMbWM8JhqnEcT6GCNZE7CNnf5ACQihhkDdvZi9nAWxWR7uBJtZ6p",
  "key5": "59ED6zjS18z4CVpyKgFENGQfRYpXuyyC5WCTgpXRvXf7hVdoyXPUn13aQq6LsfhJw21n5q5ds8z3rwdtsoyFGboh",
  "key6": "2iiPoMC3Q5bwyc6UKspKq5yViLutGLJQJGUBDpdtax7axuasYHrMNw5839wRhnqC4Lvx5Avd6wZ4JVVELfBBedBu",
  "key7": "5evP7KWishMyPZU8DpNpiecF8cjFGkqPqAiPM4wvUz3ppmRa8zLDigJsUtJmtrwXP3tT33Briba8TRkCKngTQPXY",
  "key8": "oLHd4LB5t7nQkLjFCArgA9cBnj2M6tQD13nukC9H4TUVvQbCBwRUt8CZ7fN3d2Sk3LH6WaXz2r3jARSqu3xVevr",
  "key9": "3788BLbDpRKky8zfBv9NP8SvzgoyPMCEVXiHzLwgUKqYxFaHdBAAvxkogoGf8prL37qJfxpqUosHGZcfGis4vT1v",
  "key10": "4pJSserAqiifx7LMe9whzLgYRyZE8pAazSpZ1LkdtCjxVzCZgvo9bt6yi7hJdeaw6CuoRocMbM2YoMijhDkC9Fby",
  "key11": "Z4pFCfksN712bVfrrRtZSgXUx5me6eTYZCZn8WuD2icckMYXXvUPDNdY5K2JYgdh2vrxaCMESJ6Z3HDP1hKpQMA",
  "key12": "55nSyuf7GPSzfGtdwSvMe5W21beTyLc3NuYKLH6B1hqvKHMWzQLUiYBR6nJcfWnawuZaN8wEZ2bR91HA36rRMmo1",
  "key13": "44cgYpTtUNZn4v1TXJieZ4L2S4jK58E4zv8e7Gzzbwx9cE3viSgfyL9CCgzMvR5DNAo1AAMJxq3eT67Tfv3HVQzk",
  "key14": "2wFevFiJjBDZtxCSg6gi8if1m32x1V2SM3Dt81RddMYA7hpgNFm3uQ9PUMQ5eez1urBvT8ZwqhFdWvTJHE3gtpgn",
  "key15": "5dbhh9XCr4KeV6TgmAmjjZ3NXvmYdrv5WUnJh86imbuZV75s7rSEaV9dKDmQfSNBGcXKAzniEGqdpRJ49X5cHsbK",
  "key16": "2C4Ssrkq1LPG9maibJa3L54SAJ8Rr9DvFpfM2XKfippDFdgYg6tbpKqgmeF2vra4mW3EedoucuWpzbNPsF5L3k3d",
  "key17": "2S6ZUxYDsm7ZUqpu1EpncAzFWhhcmVSAgU3GWSDXxLNPojrcsjeAUcvChV6LcJGaTWwVnwTQZqdmkvqKJAAZvbQV",
  "key18": "2cSXBHqpeQWGEmD8gELGZ41EUky1A5n95916qLFeck9LF84F2qoDt8bEQHpYu3h7E2bv6QM1mtfwubAh1xej7CHb",
  "key19": "5vfVfoUKBHfWR7gBS5bku97EC6kNhbwUeS65gyXsqxJNoNWyU6FirgX5ERGm2PqxJcU91WBV4S8Fuv2FusenNQKx",
  "key20": "2HoddoqyTgWdGuA8SkGd3QWa63Frf1qSiUfQ2EMWYN9Chkok2p4a95TPV9qexAKnR2CUtVTNzadVbTQNHxgatZ5H",
  "key21": "4P1fUFpraREaQkTT3f45gJmR7JycJ2MXFAb38vXdZ8iHQUWMqwKc82LVxFR6n5iHqT2CEYW2Q61qQ6nd5MDszQLi",
  "key22": "3aAaWtgU4Wxi74w5aqw4HYW6kEX9edejiVJdbS8tXpuHBKMyhRgsgYRNbkuiCDLzzEEvuoF4kHTGEn5NiboSs9qU",
  "key23": "2psetCQyk9YJJVBuPDq4XrQ9X1pMrX8wVmn3hyEc2wThcgbK5VGVZAq2UzRzvSAv3rFvKTG3oQiLJCBtTpxURKJv",
  "key24": "27MSWToNYeaH2VjhX1TAF69QMHLhLagDRZ97stmdKDSyDyk1JbrYKJwYZXanV7MCQmENhEGSBNMyEaXu7GwTbawD",
  "key25": "3E7BBq7ZXTkzpG9nEH1hx4NNNuJHNU67KBSkUgZ4JLbjbFzrLMLoV35RAZpaZJf7xT2WLk2qUHXWXqVfmuyScrSh",
  "key26": "59nv5dFsWYv3t4zzaLmgMFz56WSEhsDK3WxakLc1b73mpiuuEayvPHbjdTikiQG1j2BVDnMZo1BwxiwMrdS9xVeS",
  "key27": "5Stz7pvMzh5o7SKPxquQXYjWwWsfDyA5ukdzXBzmMNNpmJ4kVRZGh3RPPveh9shzDKNUmoNkJcMMWTtWAUE187bf",
  "key28": "CAu1cSwCJe6yudk1JKJv6EjX3TQsogjq5qobgCaq8jJPvKnijeqBdXdKT9pVWNjttZfN4UqzKuEQU3UrbkqBvag",
  "key29": "4vSj6cZt3U9xV41jCwgjUmd96S7beG2QawNUVrNB8MSrgTMkSqP6hz8vCvLxgXPqTErW75VfZPy3AxWJNXSJF3Pi",
  "key30": "4yPkHJ7kg32m9R7RzhHMDgvjjfG51AW3v3YZrd7xD1QX5eg8MNfUnfWyBDT4YEXBMZrFZhhSydVjgZeU1hXZDcKD",
  "key31": "5XhJp96BWHuKzGAE4N7RWGLwWyD7Xxo4WRrDwXhuaDQxdWaxtoWqFCPc4VtY2e782tVDdmkShoTVxTeTEGTnEvnv",
  "key32": "3bF5VRD7zkF3fWqXCbCMfNpHNdqS8S6zeuroA72TLkApyKN5VtTPmsgwBAYdp49tfxdDm6v6MvBByngMEAFrGApb",
  "key33": "4WMCjdcbEBeVhJEnpMecJJxzRQ4MxW3TR8qMP1LTHvxv3E1e5HdorGj62gzKZch5SgAoGSUuS94Zn8AxBNH7G7zo",
  "key34": "5r1GVa4pqc7BtPcXUS8h53Qhp1aEjUEGbRK4V2Qb8LXgzY4BXxH4n9bfyBULgN7jGjyKtd7ud3L84SsXWgqbd8qr",
  "key35": "4N4XjPD5QXUYSSJZW38dDPTEKWhnR31HdTFiVNR2aRsLfhqXqpjPMmpTgvifoPHnUvJFad7fk4gHpjPW8hWSVP2U",
  "key36": "2hhqUrVAJTx3V1NQhaa1JCgSToAVSZQFnGBoAHuVP1go6brM6ZGFpXD2Nf9FTaEDvQZbRLYwTuQXMba6j3kYLfTQ",
  "key37": "5G1R1KYjZWxE3bqJ6mhr6WMV9Fs5wK655soTva8TxDtvCn7MHg2Ubj3qQoXU2LssPeQFjnckuo1bmmNEn68FJXQq",
  "key38": "VuXmXunccrZfmLBYaqoZ6iHJjSTrNcoTR16FZuEgK8ohjzZHetbzRDgaEA2v5L6viVBp6FEcRfjBMD2VBN9KDdT",
  "key39": "3wfWR22upcAsGTxAUMUYRQ8ZY6YUkYi8wfLXGPeUxKqUBZKad6Ecp9NgaTQZ8XEXRy6MYu6Cbb87JH8FYH1J4rda",
  "key40": "2c8aNKZZuUaXJrDqWmQQPKHnhyGoTAghjXKWBKYVnUWKe9Bbovvx5ME7LVPwJYcsgqciwQVip6YGqs8tes3jayTy",
  "key41": "452L6wuMN4Wz8QA6W8X5zarmqaL5thxzgqtUoRTW9nAE2ysH84r1JkfrLxiFQuivA5aJVmYRj5tagHEC8UDa9jTs",
  "key42": "4ZNN5zVVQExw93cri21VfMZeS2Gtoo48Lh7maUN6CuW3UwTVktNxCMXPcGbrV8aGv5p1wqejd9XPEFuYckEtLX5d",
  "key43": "2xqZKaZXhBe3bceXhrLarudprf6tj4THzvZik18aRBNFq9gZgwiN2PKDjv71Ydz44LhrGeJvwr9pYT4kqWLQo4T2",
  "key44": "62dNg2HudpoQjNePmacnwFKDYuk2KCTKsmZFTa5GX7wD3WuY3hFD1x4wwZHm4AmnbybAGHQjKKdd2qfUni8oGzEY",
  "key45": "2DW1eBB1dNxtbAvQ48PeyEcSWTYUZiv4PeuqXbR33LDfcUwS8Yp3s7DusZPDFbDc8vjNeynQYNFbbkuLZgGVjnhj",
  "key46": "4RiHpAU5BemHzMm1tMdFG6jjQ1Ar9CDAB1kY7yCzmyLsnhD2o2nXU9Kzg8MmPD6mpqxtvWuV2Di8tbVLkLbBhP2t"
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
