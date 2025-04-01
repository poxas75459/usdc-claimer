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
    "42ijS7mAJykcEhtkiBusBvrPNnNdprnLAf1u2us3Ykvm78gx659uh2dJbNAoTXT8qobzGb9Gu3jrPWDzBjdSKXrQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vJnQ6VYVUKxvtbz7NZgo6VZHSX9eBFVtj6LFq6RhtpAbFqE935GiCfawrcXTvKNj6DGbpEL99wGDnPJKqYgvP95",
  "key1": "3nXJXgh3d6qwWntAQZRErbj52A7sodwbBxX4oEoXrJhdUYuuQK3Apw4VddzGmjExcxpPjZbJcF7FzDNeorgh6KGD",
  "key2": "5hiMEX4G3rSjBoEZxDx91fh2yCimZMY1cP1KxL255vcc3osU6AbGtxwwgPDLQ8RuhvDZR8MyonLSpMaYDEaUdkxw",
  "key3": "5De75NYoNdgUP3FAbJ1SFFsYCK9TLzpdBhdJJ77TG3Cbat44tE8va8LJFHkZurRyWgeQKw8C5jXaHWKdHuSYcn6i",
  "key4": "3o7joaT7pioPaLAN8tX4qMyPWGxP6B5TJhRudHfuabyFR9dwpE5au5KqXterqKpDuxdgtZxQUYDJMybAKmRHyr9P",
  "key5": "s1z6McDcyLu4J32EoYH5QkpaCemyeTegdxc7hJ2vv6DfFbDYVSizU8T2DCfZrFoSZsHxL5up8khnKg1dRRg6QSt",
  "key6": "Kitfjsn1h1rEWHuo9EK1cLuLZ4q4J3Y4NoZjrBmuu5TCp79uKaaQcvpwKjogh1J68hHEZ8AJKWJBAFZ74YRwmnD",
  "key7": "24X2bSmJBhkeHMFn6Zx3he2P2YoFT5faLVxbH3eDKYvYrUKkbypiiFvPKWewVAnxzD5S3UxPy8Daks5z5NukXoMY",
  "key8": "2cLvix7QyZBbipw45xtsAZ4hrW39gcL7bzZBQVuKuzxWAez9KNLMSG9TST4VMfnguGmbmMRdNsg8H7tuBGHRWtag",
  "key9": "3tcNoGcNqneVzCDMBCK7eZBpTcCsDvDEKoVrwvEDyXPTVHJRcmDpkEapFBGnxWoaLYSrwneX6MfV12cBq9uoP93A",
  "key10": "4NPTtG5wXcfHDCyQvYXsVNt5SZSGKyj2wFf3qfHjx2ve2t7JWoS7Gf5ESjGsD2L5r9bd38JsCmkihFeq5TUFEzdT",
  "key11": "4MADSCSJEsU1jxoANpyEdFabR6jmBhLHXXPUwCGTzCcCnTHr6jC7yhBQ4AZHNBefK5YoPgmsdo9kQiuCwHvMi1oT",
  "key12": "4jdvb28wYwSGEcwXWrsoGzmJqGJdsK7jGsrpgyeqksHTMoF3VumYwqJztpy2WaJQK6nDhT35ccCNU1xyUDTNiZui",
  "key13": "4WscVQ3qXioDGNiAPXk7yo2JkmXWPPj7ERheGM6NJKeDJEyCAzQd4DcuHR1xkAzGPvaazThVn5gCtj3qLC2DsYsM",
  "key14": "5V3iGguVhy89yPNXK38PFVrk1ikYfwLpXLzDFB4Y9W3Y8VByLNukqHd7xhuhP8RUg1rLXZP3WCw8nWTq7HTDWSH4",
  "key15": "2atETJ43Z86xeoAB7AJtbmM7x4VPGNrKUfUKXBiN5JoQrgNSVcbdnoyeqCiobSDKvWcTgnYCentf856PaRRkqrSo",
  "key16": "4UMSnYS8ZkYhhnm6Hzee9QTaYVNtZxTHcr7k9MrMDmJVGnw6wZGGxNJHYFtHwqnbVfRFukkaM8hbC4vabvVrrRjt",
  "key17": "5S2Dfuh4ouGsodhpUE6JG4fmWMbMKhVbrHX5Afc74q8LhqXtX3S3DwvvRixmMTvrCrmERZpVd3PUmr6mRB6f6msQ",
  "key18": "45on9pb3LDoLREKMmKsqcXKYCFfeKM7WLYRTjtxUSVro6jYRaR2SrxjTc7B4h7hA3KswZZKn9iB21U2kNMuuKNw9",
  "key19": "5E7FnptQp44j68xM1ZAcExWRZK2grbbyq3LP7su4S6rpws5vF6tCx8MRYXCkGbb7SoioEAJFLv5wHXZQnxjdwNSt",
  "key20": "3BzfiiUhc8K7sYLRx7CKT3PkrTeRnWb32RwpTGLTnsnA6ad11aiCbWFsP3GujxiZ3wxXHEvkzWP6RZqEVW4uhKDw",
  "key21": "3YBrmaJz6kikvAKwUsKFQ1sztqPZAAawTdSpEz97frJwRvQKhsinyEryAEAp6vAtDVECbchzT4hty6onN9LTXY7v",
  "key22": "28RoLRyrmVTCeW1TnR5rvbPqaT5me4pJrTNykSqLg4ygXFByiU9Vhf8UJiw4FKxfoR7j3A3SWMWG668VDCfoAxCF",
  "key23": "3Vsc6BzXLL7syAtx63qPWnVVLWRvev768Puc1hfY24cPWnT79yTUghc4naV5yy8WNA4ernDW4DapfoBcbrHDBhpB",
  "key24": "5BnWdWbGLQqrDAeNEbG5J1trqpCuv1JiFqiz1jDhYXZWXAchCSGLDthWojTtiCqGC2q4jdCGwKMTe2ED4WuPgn2H",
  "key25": "3a6DGiZacWxU9kWUPHZz3zudQECwSwDJ7dGiCSH9zT5YXBrdaYNybi6FwoTz3WeVVutEWgHA49zqH4rZgCXmV758",
  "key26": "46wejjnkQr9XGkj1geRgpCQhsrFC2m1A2YDnpJTpepDj2qGXZupcxHn2ynVNaj6WwLEAkt4Gqh1hP7BSV9HCygUG",
  "key27": "JswgzrHnmF2cziarf2aL6S8bmem6Cf3iU53TCdLZfXNCWPmBv89YkLUjujsypN4uCJuDTToVzKbCNkVJxa9Bwba",
  "key28": "4wTpx6V9RdeE2cWDxQrzTsDiVrXg958kPgLCMCHx2Gh61E7Q75gjhApuHZajfPW4FpLJcYDdYMacKiRSZZZ8Dgw7",
  "key29": "4vVtKAXBR1L5NT48suPvnF66RpfffpNr531VBrGJnYD2WXzyH7g5Uqc2DBvZC3sqSvW1M2a15u5hTQstrPCiAbDK",
  "key30": "3EsHSeb2oaZFYxeYZrmayhTqXme1tvHCmS915pV5scQbMdN6HfU6y6RG9BTbWyReLWVEGpgjvJrbr4wuRyLA3hwu"
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
