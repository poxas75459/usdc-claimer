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
    "3RJzR3zzz7JiyqpCJNB7UXckFkfZTcfuGPG8QC4VArUpvmGqqCbacw1esn3DkndvSDkYzLcNqA3cAVf8VDhDRfx1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SywmKsbvu4tF3BVWWmFeZ1e7STkJwYj6FCvaP9Ax9Cqkgbeafo2gmCSNZmb4C5J7fXdAX8eqD74J4eJYKSk59Ej",
  "key1": "5g61XStoRxWTwhCTs9mSgGFhR1BYpfLmqSMeEgrze6WaBk56DDumGppaYRPTFVqps3qzCwhFBmqeoNdNQHUeuHAK",
  "key2": "W4SahC3no9YADZTU5x83b9Di1QcDSTgPLxu95jAPsxCaFBhq7MaU4djX9waXX7Ad39kKtKZhiAAKnpKAC1ZkSDY",
  "key3": "eKSTDT68Dda5yYBaN9SQ5gkhBLXpypznX5hZfURp3AEJqBgp8eFEExYuT5yjmgSyw1pfMdetQ7Pjx9Lb1PmeYGK",
  "key4": "388i5uJXweRCFjiyU3zUCGk3mFqCM4qete2aTVyMkJAniqv2n12Ffw19DJn5NYevKUn87WebwdLztH1FKkYt3oPL",
  "key5": "2m9vfyXPD3P8JefXwH4Sxp6dpBgDxPaia26dZVX61KNeGLjCzGpHfYrfvmf9wEApDEFm7kkeVvqFWre2yb9gFUpt",
  "key6": "677nxEzxhNExvdkMNG9VTqJ4gh3rHJBSGbNHxwotuU9tZjMqjZrHZNsnk9pHLqeWhwWxEomxRFJYoiYxS4KJ3Acc",
  "key7": "YZ6uHqzv3yLWQpQuQX2ZMZf1zCzDAS9vccD28VbkFtasY9YzCGK1J5ST7xPnQboCt5i5ga7KpEiQU3Fm1UE7h7r",
  "key8": "hpxDijp71SHw53ghkJ5ic3P9D8QhVVAwVqgJXfsKUCeBLKSas5fkShL9Kg28LiJzf61rSbAsdRtKiuBhE5u3k73",
  "key9": "3xa33w4aEncwL9V9g7LReSjSEh9eP8j1L66TQnDpqBfFerDVPXAyaRXyrvreco3jdDABYCrGmD9ZrV9GbPoZWuXH",
  "key10": "qLYxFQDacjZRKQMSPtCfSTLzbSqgMgjT78gqBhew6Mqm6UrLvMDA3f12dbiMUEnkV5Ru6Ttmy5jw2ovfq1irpS6",
  "key11": "65P7fRHYv8riqMdcR2Jn4msGx7wHVw8mKgYrjRJBx8pWJtr5dzXLaoHxvYRmSH2fYncZuz3oFgPbY9eicw7Y98Va",
  "key12": "2dkbaXfrEThe7tGN3r1oJANxhHvLv8kscELfMX8fBkKAGjqdP5dZdoKMRe9nfo8fh8vQvrr4kMWooua5vFA1U7Vo",
  "key13": "5REhU46oKAazWC1fM3uXHWq2Nd48CzNDuBhzKvPhJAMRfVgDY7GaFFe3pjFBHfXvo3RgA5Z4krBDNbo5w6q3SAbv",
  "key14": "2bbndkjLdgB421Fx6U1Kdh1mPKPpayiTesDKKyCtWgGddXrceEEjiozu6p4d1CcrvNesnro5uVUdA9sje5n2ZHMj",
  "key15": "4F3dS22dPpfuCkKKe4CGYgeh4nDx9pu3gpKgjsZi9jnX15gJjBZ1k1sDdJFteVqXkzuFNLLKf8uERz2g4aJ2kDLe",
  "key16": "2rVWLib9dbBzg871QF5wHdzSHDMDqNetZjAwQfY4vKhLqJpyQKT137wSu2xP4eSRKCRGNXjgcrxPZ4H3wqm4Naqi",
  "key17": "2BVg9ZCMz253fAtfckY6xaVm8ZUtrFmqFevYH29CHMjcw43Kf2oyzyiXLq7E4YBaNvBynFkFeJRwxmH7AEQbzkQV",
  "key18": "3wqHPYY4SryPtFhYzt1sjXzshPhw9THRDGX81piSZKuxE7wMFE3KUu1m5Uvckb4p8DNLrgfm173WYQ7f1db4WxZs",
  "key19": "49QgWSN9CfMX2zGcrFCodFrysSyqZTgLcTv8u4DCVVMzj1s1bDZHpov71LZrB9Zihq5tsGpybnpnow48Pe1oRDTw",
  "key20": "4DBsMTsGt88LkvoGKTcyQyEkdp3TZDXdSHEr2cyp1MWwxw5kE2p4w1b1C9kfJQLGB1NoYBLoPttRbGfkWQjGMUSa",
  "key21": "tziRdADYtCX4WnRsZNHupAQ9ajFYUKrcLHnRr6w6DRox3zPL5Fo7h5SscL8G3a3E1z1MQneJEvMbnPPQ6HnCmtH",
  "key22": "4YBwBU1C69zLJZdZ8TrmcijjTDw6bgPYYJbRrvcnsvqdyM8eWtMbCDZkG6XmfS8BPRiSJs9KiHN8KEgkCSPZenfs",
  "key23": "22yanaZdc7M5KTb5vChxG3e3tWkC7zMwV8D9q2Q83s66bPv1QBSQFtNDZ75npTDCap7wiLveWp4gLtAD2PRckoky",
  "key24": "49fLNvn1HUVfdYWtE5df19dSEpCAFvqDP5JMZrsNQzbAEZaxwLrKFPYASbWyA5zo1EnBxhEF3BDFsZhHvvxTDEzQ",
  "key25": "2UwvrCGCQRGUu3Js6oJhdM1WX666HhLuLM6PpPtn67fb66AHnKXLUpHe5WXoZGn4vbcwaKJVcndYunKrgqQ3p5C6",
  "key26": "5EvLQMLjxHoQwNWKJPkQGkyxLUoQ6qkX7NZkPxfW37eDxPoeBwdwhK5rzHAJmguyGQ7ov6LNofVPvZjvtTfz2inS",
  "key27": "3ecPZJGdKkpx7YEyviKUY9NZ7XSHWypoWSyYoxk9j6AMHXZ5Pduk4EDwRp6Vwiest3m7kGNqE5Gn4ByHddK99Typ",
  "key28": "61JZKWjptY3C7iqYqqYgxCMfrabU9kyQHFT3Hha9KQN4ogfFHTdkEVBpcuJupRvUxMM1tjpEoyJysu7DNtZW8Bwj",
  "key29": "hzpDiRHwAaRo6qf44PECXNqwFi6Z9H4Tc1wkxm9DGr87asnQC3YGAye9QBWUERyx1GcU77vn6UrQ3qhi3Jx6kSC",
  "key30": "4ty1moPq9BWivLBsmwLqYQqtsQHXrCp9i8kGzLDfPcpXRaFZzHCQXnrdJWLgGnhJkuvruTDJLV4FRZaVvrKiSTmr",
  "key31": "2x2uRhsG56PccMq6UmvwNL7sCf1hqHWGFzM8ivWmniz1MRkG7nojygUkggwRoNJpDeUDLUpSutxwoK6F8Uyt7SRa",
  "key32": "3NwbabrrupfNUSYyTbbjbBYEK1vquk6EnnUQM8zNXjYEhc6zxyT54Xh9ETJDptQnvGpZa2gxBBbSPg7ziibcF4mD",
  "key33": "4U6RBRQaHoRcEQ5uHJCyimsZtNSxyvwKbrVj9qJqMs1iYzRKL8m4MqLbNJciH4uTv85wwA1wr9zeBBkJXTMvQvgB",
  "key34": "BVgxubTGgj4RgKZjk7h7J4m2RQkQueFMWBzLeUGaekx5XZTfLLPrSC4MwyKkNDLXpffKRCXsDoTqdPhcp18ToA8",
  "key35": "2iKJLkbpjv1u8yQUFGXtvAtHjTS4t2hD8jm3DekW31Xp7mctpNKfVnMwNwuwp5pF2RJGL9mzYkgFKuagf2me1kx2",
  "key36": "5SABAT7ro3UVe56S44F7XnX3mU5QG5id5854avCdkLcp8jSw7kjdzqopyqrWPnG2u4LMe5jJsCHzMHdXBDu5ASyX",
  "key37": "QeRqg878UdnniHV8WWQR8qzcNbfChQp6zyffn8zjwSAbKXDajzwb4JNYA5yGCnVnZpLUWJWh2BqHHutAD2GxUBm",
  "key38": "5husxVfymD9PsMX2oPHGxaa9t5NWBxT3m4iTDtkwGY3yFHMvf4EuDgnzAe7eYy8kzaRdwx7YyAfKUrW8rCKvpyUx",
  "key39": "2RoPobhNL3ArwHpRSBfVawJJiuN7BJ96t7W61TzejrQdXxsQ1Qc9kA5d1Gx6xUUH5ZnxWWyAUWPfgHpkCLr71FmF",
  "key40": "z2qgi6YDgAtxrxKgXrSPBCtMuAdCbcNM6SjT12v1BGB28c92smLctfXChJGmdFSzryYuTFMhZazUycT4teBvckD",
  "key41": "3CajtT2tjFHZt7HdGaButZkhvHUDm99BVbXwAoNj4ju2eo1bjPbEPcc4A8McKwjHM5Kiv5Tt2t7mREUukeigDNfe",
  "key42": "RitMkpGpea1VoSFqBTQGq9LEcNC69WnGBj1nACvyM4Yo6wdcjsZouXHp8cJy9jbB8VYgpqz4cGM2Uf9dzSncUAr",
  "key43": "Wb9Q7AP6qeLWs9yMBeFYFjPE2qGTqcdSDTQth4KAEMG2zsF5EAK39bpoxPpUvxhqaJXyxEo4RWK2ZCK78ZxR9bd",
  "key44": "4xA1L1y5rDGCm3Xpbgfs5gfJ6QvaKbDQRot5oHHEaATrjZ4VruWmGkHXQ2bGyMpGL3sxXP4hmkszXJHspEMb4xbR"
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
