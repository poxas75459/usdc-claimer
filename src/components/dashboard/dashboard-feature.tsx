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
    "Fj9jZxE4jSS1s6tYQ2Sos9TpXj716MtfHTA27JHjECW4BnfhQgFUr4USkYFRKprJsgi1UtyAZHMpCceK5UtmeSg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BxkjKzrwX6Z5ndfEo1f1vbt9QrpJXNq2B5pHyRZH9kBW72ZeDnivRk3CqcHGG9GXekhsszFYjCdBj42wu3Qq92r",
  "key1": "4By3DDPHpAyB1omh7EQF8BFSsmziHQUNVBc8Hq5rLr2RYHoixG7KQDhpRzRi6S4jjmgtoBmG84PdbJHLu5dRTbKX",
  "key2": "4iKuFhQmP2fBP6KZNwvppFuDS8ZECKYT88ubJeHicJ4VrKpZ1or4UswS94eBAnzdSpysrfrLWsAxVD9hWrVJ7cM",
  "key3": "3WqxxBTYbqA431bKwqyswY1KdSDSj5essRCA1f5tUysvgGyCKeQ61HcVmiBHngRXE5Bwf8usbfotCX4mxcerXQSd",
  "key4": "mG84RUZtVdzC9Y8rJDhdLSu4sVykd38cwy6giFh4cCei7PxxrDFX66M8SWtUQA7RQCwTs3cva2yk7R3LYaxMB2z",
  "key5": "45LTv2TLzkBoBgpyCBdxgUiaF2nCfQqFphY9cpZmZGcZ76LfmZpXt9covjrdXZxyyH4wGm6N5aFVRy7jSLRhxFX5",
  "key6": "7CMs97fJn9kpfrrxmJPwcGTFg1BRbanncAfPAaQGSmSNY4yqUxZYtzuhVHmXQJk2dUnGYyNsedNANXRpuwo2Mnc",
  "key7": "3Az3c1mSnXBvKC4JVd1KiGq18ciiRfNV4v1vhESYRZuEkxvP9DaKNEZAP5wHaXP1yD8xp1gB7f9c48XKwVuFjiJk",
  "key8": "5yfrh6zN5wSkPkxSEMY6yjgpfnSXE5S2wAhG7E3CUBUZx9mhfD3VMq4MDwDkiob4FkJ3uZgnKRhy75r8NX4ZuZRC",
  "key9": "4EKg7axSRTmWT2GetLDjee4BBgePKE1DMVuLKZhdv9Pnou92gcYBNerpSayf77JwccbrnrsZoniWVvRFJN9uMwD2",
  "key10": "3ZDAiAvEg2kvi7WXizuB8NyaaUGdF9ixN8rzb2BbARoGTPEUQ3MQQMYhMmLLUpxHwoqgpUum3T4dKLC5euQtW4Vm",
  "key11": "Byv4MnMY3kSzdQHqLE7JUu12g4Sx35A6f5p5ui1Xqw6xQyXPDsGd47vNieJ2zceJq65j6HZwi5NP7eKA9aUMBt9",
  "key12": "33tgcUYHiVt3ZGCmdCz32SNkfLWmuBJRYJ1wndMFYPFrqRtcZ1ofUQztDDmnUcvRDg5jYeh12XAFxiVkHpYE9EtH",
  "key13": "3Gb7E2geGzTxYLxhTWTTTMTCR7DhYWxHtdjijRUHnRzCBZi4ai1Bfqk5GLBXft5CipwWMVtjSDSPwZ7GZWjua3NF",
  "key14": "5kxAwwWzW9PBPeLW5cbQmzAxZD8E9YAsWmJmycbsjnrcDLCUyRAvbHRr2wKGj65tJ7iTCLaXpwZQxfu2CjndtrFi",
  "key15": "3rZqKPvReBtuoGLvGP42UACx7wcKeQnRrVWTks6vqH8UCbi6JzpWCTfGxP3Cpsp1P5jXg4TVHYfbfo4M8FRJrTLc",
  "key16": "cWwEcarQZ9t6rrRJPa8TQpRHeaZLADReREs1mmwBuXHrNsiH45TZf2BrzkmyKxothgWCpyabqomtfN9sMGj7a6n",
  "key17": "2dD9z7AALpcKAote8E6efVibQecoSTqBKAMszKxzWAPp3rr8xnJebCRNYPZ4NxiNJqTr8EAfv54o56TzuJWfEBjn",
  "key18": "2AJ9XiAH4N3g54jmwbXUpAfGHEP7Nu24AAW9J8AzvGvxFyK4fHwwViLwGezHLHck6NfaNYyj136WT9FULYcwnMng",
  "key19": "2q9cmCwsViaVweecknXztH9SpKeVitHHtZ7jo1Efc1zju8LoT5xo95yJVrTRSRHDqRVPm6ADdbB16S8r2F6nRYi1",
  "key20": "549qskHeBuZrpbmLU9Pdjft41noKj5Mh1AC9HfNLFuPyBmmsKkuoBAR6jnv6cW4HmqGPstCkgMUSxysqmCFo7HNo",
  "key21": "5Myu8Sc4c6uW7Rq8kvxFUGxgXjNYH43UVQPxD4m1AQQuG76iebn9FHmYd5tHZfJcvUxHSxdnh5GqVJzUt2GsGMq4",
  "key22": "4Dvc966VeYWPk6tfnjJZZGvqrmj886uht8A8EtsN9wBxs78DQzPcSboGHS3AzFTL4d4Y3n7gSa6gJUqQtDaZrbhN",
  "key23": "4sYfLk5wDUdpknXpaWgf4kGgL8e6k2rrs7sqDpfuz4hwFQVaZY1GZxHv1WKpQTpXD9STPep9VVbzaBiLzWAKtzZs",
  "key24": "5MvV2Yz1LKSh2B7FciVcGd5PZ4QhiLnTgB2RWAZE1vXjVCvnr5Y3ik8e2dsuyJK1n8nbr9DWmnTzunJHmrxEF5vp",
  "key25": "2Am8FLx1EiLemrJ3UE6kDFU2cjMnLeNeqQH9d6fSDguzpYmBhDd3Ax6L9UeFqyt7KhcTjP5nVJKnUFCX1J9RXz6u",
  "key26": "2krSQnu8PfAaP9eTJEAUu8DbmYLh7Za6i5AKZCvXfeP3UK3CGhZ2TBRcib8oGtFQQ4S2FU8buRDP5CADigZ6TFSc"
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
