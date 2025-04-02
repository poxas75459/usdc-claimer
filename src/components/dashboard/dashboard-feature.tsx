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
    "kzvLdQMhxs9foycG4fap2RnwvPFTYNWZdXMJh1arr4pQfgP4arKUohiHCojK9LqnNy1R5TNDpw1cnGiDKBqmSs6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hHiq9QTap8rBHvdeXmFPDPmKZXSbG1ksZyEWER2UTyRiTpzQQo5iS91bgGgX7TcYv4dTQ5zw1xGdJRN9NK9Gz9G",
  "key1": "tsnG69wLJ86rn9Aask8CkPs9uQNFXWgEhxwALETNBf8QbjeK3SbEwSJ7uRKgDpghh1Nm1tBSoaRMiP1viRRtejd",
  "key2": "A6ASjry7AbMHt3SncabtDKBviumHkoUPeLDwQoxwgn7AKEiayK35HrEVEaCXrjUPX1zMx1epCqUgigQBdTxqD7P",
  "key3": "ovufRR8z9VqvoT7a63rp8Y4BmS722ySsAEbJqRzCoLbttopawRJkZBCaFkx4ZYQLRrE51HHubZdpFinJcvnvea6",
  "key4": "5bLzhfeDBCBL1rCaWJDpFosg8S94PBg5DkCyiLRgRKMe2P6g8dvG4UwSCFw941TPYvyWhtRaGbhfmdkQ685DaWXz",
  "key5": "4NA8ZzeAXAnF4e5wzAVgjjb8dxixTK96moEUywAeCtGAhYbY4ynJQeAtsKUSrAkzfDULR7t1r9aTJUkq6zoTvc6Q",
  "key6": "3ujmdiyFqyZsEXEhQmiA5yVTATkZKYDGAaZXmZz4nvcDwxrosVm9JWCsbdZ7WKURwbnnKUaq1jDZeGmJym6ns6AT",
  "key7": "2DAmDQMxSTUpEQ7yT3o193chY2x7p6hEr3gpF8XvujikYequutGVasby3v7HHUsdksbkmFp9QNst25txBNr8cR9U",
  "key8": "4LsjniCFDpijSoXfrwMHSMvHU7Fq8pNF1Gu9ZTvrRofN2x8rNCv3rGDqzkWhigWqcAEPVFc7pPHjpLSsDSTWKry5",
  "key9": "5dyubHvodnYoRQr9mx7daa6HsoJyyRH234hVh6FaeCrS37cBCa2FsQLJUxhNvBHgTLvai2CKENGJKSbrKDQ23kFa",
  "key10": "LGMZwccqrYoDB6dYv5vhWa4HkLFuiPKx3m6kwfqcCeHgMc34R6sgNozYDMRv5c7tR2p6c8x9hnBS8kL85boGScB",
  "key11": "4aDFR1Gg6bwTVx9nYU29ySRWY9aZWNxSN4TmGiiHp3vSpySDrBZUDS2JDfFsp2DTUReLoxxyX6KH85XEiT9wj7z5",
  "key12": "4uKnGpyz1pYmLww6o4yiW8mSt6ucUrHNCg4edTwt4RLirK1nVfScGopXSwsMVL5ThfGZmJJdPBRDxeEk3jvjWxbC",
  "key13": "62rSHJnffvmANsPUqZ2i5ikPFyrkQ9LEDhH38rG2seMcNfpPR5y7rJt6RFdnSxm9TWzWhhAPNqosjpLYZPfqXGG7",
  "key14": "2vEXvLW2hwufG2QJfMa8nTRzhF266EXMVzXx7uPZERsXCGmR1xZVeWyNEYZoZXzpcEoidiYkSzvahWEyYtnw5psm",
  "key15": "WaytNtoT4fKd81atc5MMT2L4u3bVu2qnHji9AkqSHf5eLuR9pPPhig6Nj9xPSUVh88yHVPTiC8Jn5uEietmrSFt",
  "key16": "2wej1Rpt32mEEMJXWBDYaJveNooB7jjhb1odvbfminuCLxAPAW57PRL4jMtRsPKAiSdkVvGpBzFArmw4aqeWL3xo",
  "key17": "59qnZescAFPa9TFXYAVXTRHjzfJ1hYT2CFeweTmP2ouK9YHiY3hRxZ5s5dc6ty4mrZYzQFcRDMCFvvdCPb4hwcnb",
  "key18": "4ob71k67zfa3LJGoeT1JsQKH6zXN7esFPwuM7g9sNaCW888B9RqhZY44xPcgzaZTMorqFd2MPtGNNND9UV7XQLiW",
  "key19": "dHTz2vSndSfw6C8pJ4jTxSLPVb3nzN7Sur1taafRmUeQMFhzZsPk5zEwQxyBD1jkqyzE2C4mcecbabvs6P3YMby",
  "key20": "4ojAX3XXR3AdPBVjuN5vnrxd8j12hTdrfwzqQySJkMiZwroHJ3KiS5W8uwLthwnW1zxC2BdBssQuPMuXkVyCHU8N",
  "key21": "WHAcXyNaWqTsJSRThE593nUHjPM3WSyGeRTXGZsvHdp7Wy6Ag68H2TVMjMqf2KHvvyQEBV72fmvNpdPhHh3E1fe",
  "key22": "5c8yDLcb9dypZdNu9NTsjihh3uDDp5UymSx8hFFZA9TzM9Tk2QSzmvftyEQLbX7CgckBC763dfWozVaNiEbMmXXY",
  "key23": "4qWdCJNhCRMLAmByH3ypgt7D779gwBVMTaqrXVMizgKaCwvtbiPB8vJkdxuFrjPEc7nw9PBomoa3FdzTQia7eRmK",
  "key24": "Jdy1h5jLziRnDcFG8Ea5HYGUPMtRc6XGQuBJz7fkBkuX5cDAhCWMcHqMW2FSZyGw8M4DCpqBiBda2sR11yQPNhv",
  "key25": "Xg9fJ5NX92afwhWckTGZ6HxfiWkjBhs4u5aVYQpB6feerLYkLYsNuX1F9Uyuh4Shbhmw6wJKE2fiYfSvyAuT9AM"
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
