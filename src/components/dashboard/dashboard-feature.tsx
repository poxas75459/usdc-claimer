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
    "hXsPUnHM2nc61xM3FKYVn61o6D4mppVCpCFpcugHT7Ku7kCavEBpHdTsiwt1ieP72QJCWFVRL4Koaz1K3oEhyKu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kY9WFTACJjPpQZ7TaiU83hsefxCuhrsATyBFqSsraxSe1zcjMo5BMZUf1AV6sTUjVsMJmdbqbvM8xtnmjmvPT9M",
  "key1": "2d6HSnu6DoDv5qRf6oKKb1fK1GHBcc4z2g6GK4zSzuaM2PdfZGPSkj5MhJ5euiWPsRHrnZVmyy5efXyZCBpEjPAk",
  "key2": "4wu9k6yKVpueN8cHi8QCKvwdNdgBG5gULQU2pgKvySeRebLMNmhf25ywo2fQ9Pw1HbkKnG4kSwBxC8c7ALLB4so4",
  "key3": "2crVHK9TcEmxQhp9ieABjJTwXRyzEbmuPkViEsHciMfEPHEacwfMQ67Wx8KtHvg9chCzk9WVYPwyP1UgZqenV5TE",
  "key4": "GbPjvtwJ2Ct6o29cn1sMv7nqC1aLZ3K6FmXuLtVsCaWARoY4A5HTkUuzKA5W47xLfCJEYTQ4rHW9NNmkYQkBm9W",
  "key5": "5oKCP5ETqBLqpvRPrdVFtXXZXpjQbLxEbpi1G9Ju2DWKnACakx19nn9waoCYZuHno2hE9zwKRTBghL3bNM9v89Ud",
  "key6": "28NY4ve6NgNXjWaXhSVEhMqEaFq2zvojHLrJsfp7wvM8VPxJYvHJXrDuRkiL2dH3f6EcxxfWeMKKgFyK5Fvjxsp7",
  "key7": "5UUkJMDENpNUm2prVazXDsw8jQQ3Eoz7evLVF7eTPgtKyCggNu7DJgjnULpZPCJTPzNDJzeY2e1GfXsNunrhbU5S",
  "key8": "64M8Fg21R9iAXfQoruPhPzRsUfV8f841fAVwr88jxfHv2qA1SZxVRvg6t2HQcHCtcEqsuWe4WWYz9rMrm6DNiHiU",
  "key9": "5C5ijcKvE1NPMTDR9bcpUkmtEy5YQEArg6y4iimQv4avRsXHTxTPL3FV9JgzjxzKHCfwK9P5P57ihvAysZeXYZ8e",
  "key10": "4yhBwub7uq4NURWHnMWjHKmx7mLtPNgEiJfPjZEy1izNiJ6YXsn9SDEbS7P9dVz2Q6pNT5Ejaa6FaJvFf2rLvo5B",
  "key11": "3HF9CVdbyEUu4neqeyVu1D7QYcoXbe3JeEg6sNscXWjGk5Twm3svVpvh2vbXQuxAdz2YZqisayQikQpwiEQZoNfS",
  "key12": "86vNcDi6EzPmGXg64DURUPVDc39BrbLyZnFPhbevMNr8gWtqwg2FzsrsE479ecYEEcb42nV1e5dDws72xLHxjWB",
  "key13": "891jgwhe7iPoZSNUohXiYA9MXjWowYAngmW9ErcvyHcH4nm8XnWtjfjZm46xPZxicfHucUxAW4RgYrk3RW2PSue",
  "key14": "3b2JDT2Fcwcz6ptv3uGdaWhdZeDnsTxSVBG4yEMd6XJcPR68VPc6XYvHM2d5LKQ6H6SCcnUSKp5coUj2jN1jNVwK",
  "key15": "dqAQL88ufeW93zHNUAZj7KpRsRsLYvucVQCSqE7cH4rPnr6xzdBC54NbM8h5x9Ya1kiTHn8weW5K3SBhwdZejJd",
  "key16": "2DbAeX9hExehezWXhfQ4N1B4w4XYu8kbFZKaMZhDUEdqPKcgP2V3b9Y4LwqPoXC69Me8NCLUKpmSn8xto7mLgqoM",
  "key17": "3YM1aTqnikyehjGVw9xagF7HFr2LdKGxcwcCXj7gTS87AMo1gm2C1vsJRDKde7jwcLVE7i2sqe2tKB3g8kq23nqC",
  "key18": "24wQbANuwGXNE5FaomgwnfauM78wt34LqxWjBQHPBtyVF4LCjxYtcz3uzFdrtzFSos4S71MjDxSyctn9NTiXKAqE",
  "key19": "4V6duYKxFtxiqDmgeDwB3Qrr6HrndQzwkpZfNbKiiU74AGg7j4HShXjM7aHXHP1u6v9WwgkzJYkLaq1EdCa7QXLh",
  "key20": "5r4gRd35azdE4ccNSjs1WDL4CKKAsRRqfUzLqxUc2gK98YUkMHMZcCw4kVijNuvWGNPNCKtesA3u8QpW9aWHPZWG",
  "key21": "4a4vRuzoKuaXHU6BsSucLJbLpN5MrRaPPCY1DujTNHP5gdasdrsPV5zBcQND1TRMGWUqqoc8EhP5fFpkoeMjXVEb",
  "key22": "4WyiVQz486hJ1xUhYhH8ppwYEd42d312WZVUYX3scGkpSmvsZKZ5vLiE4rBPjdBPMaaHXkU4dEud5MHMWH1rhKf4",
  "key23": "55PNSLVTpxnTWYJi7pxf56VPWyFQPMqq7Hfwb9uwZGvimbQ1XqDasXjqhtwMApETn9PfkN1Gxdk37KQfK8s4WGtH",
  "key24": "2ghGRRTseZFuTTa85LWq2G19zpMgfPWx5vH4rdu2N6py1r7MyvXgjskJ3SEN8fXMeciyaaiymZTC94nZmLgVG5bq",
  "key25": "2FtjyNxAz6vVxkLn4ymF4Cum5VQzg68gzWmY3z9pfL7i4HEvzEKuMvV1MhVRuQGZrhFDsNBBLQKDBYdjiyxbPLuS",
  "key26": "3rtpKg4NBUZZMs5EmFVX7Wv7xRncHDncPSvjbEBp5TiTLaaG5vs2Y3Wf9dTg6bY1gMf2ksU7RqsmZd9rFZPLv8nY",
  "key27": "4msaw8erSbhhpedxFTzWFiX4ZxKh6yjRCCW9ro5na5NpjKP91HS8WfvTW5CifP4Ehfrv39DQL7Y8iZzJ7ii8E4u6",
  "key28": "5rh4nuP7rmf8hB2eAs5vHDoGdkLaeSnmZzroc7kYoRqWmQxjdPSXJWjDabHbLbVHpd5XZ36S5y1uwk1nRFbve8o6",
  "key29": "8PCz76MbHd6ed9yfCMUerAkZQ54BPM7rtX5CZrfJ8K7HSPWwoJ6YzrbJ6Aw8i52qRfzixuDJZsGFn6WzCyRgzXQ",
  "key30": "3a6Pq5W89MPEdrWqoxmfizsadgAfofcgTJJULfAK6xbmDNJWi4pUHRxCUVPgfJtwLFQMDeqDDZomh2ZiCbHi2JWM",
  "key31": "4RkBLzNgxosfQnqy6nUHPiRYmbQ7mAUAsAiy4tFFkKEGUkW1kPNZkPK3zqSJjUDmbSc9f4KaDGx7ijADoXfdggTc",
  "key32": "3qTnSse16kw9cd5ikeauELdDmuJ7RGh4Hv7A81hHJnZoAvP4exbeucnFyvgYQRBsBax4pke3nwAfwfPZEPnEUzEN",
  "key33": "5u46fQ2MnDGWGwu4FWWvTaFzdwjzUMt33EKTbqQvjXwkKqSJDK21PQ4ecY42FiFipzpSmNdJLw9c36bKnNqnkhz1",
  "key34": "2J7UixfmeseDHpBDwz8VbYGDyYqCVXPjkbishvD6vn89R86Ctkr2tCLidKJ351Lr5stBghwiFCnUQEDEqmNJZ4kL",
  "key35": "4rh4V95pU541UFqyCiwcjupTjFszednNceA55JAcX5UF3k1TQNRCXbFbcamjSuHyUyMaeuQmV9CZ5TpZtLdb4BMs",
  "key36": "46fA94FGpiTm5zxihtUvff4TLVtBL6hPPDaDSsMN91eWGVmguKiBLNMwPPnfqpHe4tUtBAr3FdepbxbQDsxJnexY",
  "key37": "5VjF5jnowF1L5Qzk3soearUkHZQRgt9K5ZwSEqCQqkPidZREFyMErD6DJeiYB4XqCWS2i1Txgqs8hVSJiiNDZQhz",
  "key38": "3B5kyD2C1ZJEThYspo6WMtiSGHuwbFDWHa57Ve8B81SmyzuMxga9zJyX6Lscv1wUBjRK2idQB5UGnzfqdMbCbrom",
  "key39": "4oEupFuQWgjfV8mqL9UYSghJJ91gQbPrZnFfWUHmitvfT6KtwkF74sXKhT8qeRgpVZLerTfdei8h5ZWe5gCz2XDD",
  "key40": "PMudSgqwTTHf9qrb9GQAr4bK2XuqW7LxG4n5NfpE731fQjAFUUMDTVZNmJ8yBPApRmi5gmdAG5HZccP1e2EuHDW",
  "key41": "5sfYCjvoeRBsmc4RqHke2GCjDSyApVTi9LDaBNhhW7QupUWyy1nAUhtujiK41msKLWSxEHWtgUE1QoPX2u1bX2DS",
  "key42": "51e8HjKrgytTHtw2TkM85kfc6EUVUjm2CSrnrgumBQqD9Bhno8nHSiSbtebF3iZ2vKeR24z3atSi9qDESD1XJBPV",
  "key43": "kF3qVNbQ7YyhZ5hMee4tSHCaeATJjFwBp7rJ5hZV3ZRULEnNFQxA4mRV8ZmFyDDpEwdFFo4xZineWxLi6eyjoQy",
  "key44": "5vuDYBx4gZVzPXuvhmkXVy8aTB6hnsvBmbtgQibtTuhSAoXZCmYbEzpZvPGU4w6WxPFPYzwrc2zqGPfhQDE6YE35",
  "key45": "3neT4uyNjM2HuptHmEGmLj1rEnhpCiUYNFS4ZXzir2y2Z8LbEw5ArZQJStvcMDtALi96sdUJ5jwBEfY5bKpXRwVC",
  "key46": "2jeX3hsCvwpN2XpWuFuL6NBkTRj7aevk6AwZGgCcY4E2CsAT4kB7KDV7kDVo57BMSU2sYKZEqe9gvMhiQLmvrPim"
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
