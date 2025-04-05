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
    "JRJjF9amFc5UZWRrkpiLWVBmn58c4soybJy5Xwq1V3uAbgsbKDMrovEEWtDmycL8dxDpCACAPFby6ZvgMy1GtQT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i4Q5FikAAJRP5Q6zZi1h9Jom8pBUu8XuPFrsfibsKMW2DxtS4vEKtHRqVkgTeazzPLyrgU3mCFQXZRm3gFmA2XU",
  "key1": "4wiEn42NQcrqwjRpF3ChcssoM7CFok8ZVYVL1VP8nCHQWYvyDuE98NyVmKe5zFKgecu1mTXPNcFLWz4EhQW1t1dk",
  "key2": "3oBQANUjpLYLc4YEfgt2Eq9yVwL3e2FJ21ARtAZUGUtmT4agxu4mwXoACBw9VyvxGjVFvDBVqPJB1iyTKdSFkuPt",
  "key3": "4t2f7yegzTxHqWo3WoVuGT1zBTbppZtmbgWe6iE76FaJRWDbjxE9Ms9rYjVeRaGtUZDb2kb2xARMrS2qLX7Pfc28",
  "key4": "2GK461MtQqYZ1oKfjHF7yLbJ8DqYgX3hSZLKf5pDuU68DjwNhQF4wSDagHY2fCdhdEi9fprjnKqYZ7ZzN27R92be",
  "key5": "44Xptw327FM2fhd9RyjsyXhj6Rr8YbDF5CtnseqdZEeaUWAot2VEQLm6ruYjD4ZsYKqvU49p3QYpdd54KDquhNUU",
  "key6": "PqGXiiAwMuU4VE3F7GgdWS7E7Uq2QqLz8TPTamtSTqsKYAxuG3xoPzD5aXRNBPUTWsq3CQgQh8UrN53SCr7za5J",
  "key7": "4Gd931sf4UfwswTRwLfWdZqYSNh8voiz7Sc2VtSPwVqXjprJ9hfKfiTXt7ScvEQJ7oBhiP3ZUmvhy8xyNuh3XMUW",
  "key8": "3WwNERLzZerPqdofK1fnj7SGmv2usn37kJrRCvgMeFjuQKYd1ZsPxEfQHdRhRPUnDCCFhWMs8dc9N3E5ALLwrbeW",
  "key9": "2n5qZqYWacQKSrPfByhbRN5uyGjYcyHCehQUERMs5hUZytn2BKCwQKPJSUKMbjK1asE7rii6K1EsZ4Nc9Nx1LLif",
  "key10": "49WfBTHUo3y56v28gVztgyrJoYvtJDwPG9sapKZzAQvUFZq1HZRQ9mta4haJ9bpYo3sBJPTfwGesNELQE6PmnZTm",
  "key11": "4Ly7DkQBq5H3pt6rvE6b2cUcoh8CeDaffks2dMthvWBkVfNA7mDhJVV3Ddzw4DSEVpwSgmbmh7jktC4MhjSDe173",
  "key12": "2mKjZuHndtXUCZhVQyfN2QGMunEJKtmEr1unCJDTrx9q4LEZYzCF8mTWCRxMsvezFBPQauniwCJrdinHJEufjtRa",
  "key13": "5Be1ad8wEzUtjRJqDR8mHvKnq8vcn52k5XG143qbPCkYUd1nKSL2Sj7FJUdGZBo2wWC9R9JdnayTKMnsb8RibSm6",
  "key14": "44iReEyoX4d6oGPoiYqFfxKsYBNwLagNRf7DS3sZe32EL3SFgmT2QKiAbp7Z2ptPoUWQnpELvDvppwZPUAaDAMTG",
  "key15": "5B216Tjkc3eRk5LbQFb45hSAoZASe8qqoQkxTQaDtiAAP2KbsmT1qEyHPvrCEhVbwEe2skznHYLPokEYrcoFPwfD",
  "key16": "5nXHPwc2Kiq1kVmmiUQAmBBEXXvTDfxyPu5YbZQB4Vd69nzmfffMt527oF2htsSzpNSNdCeU1cZkyvQmwMetJaUA",
  "key17": "63UDWA4oZynZHrTV5Povb9GpZy6UtouiHkUykoaMb8vST8gnCjVdw3yvzZ62egYdTwpNtoq1Je16QKS6whA2QNY3",
  "key18": "3x7Dxb6fMJcrQdXzsaWs88iecgjzMcuXSpZSqv373bXRqpLYYgMfhFACK5F7unCHjFEMmJ5voCHzaxtMofPiHj9d",
  "key19": "afBfAoDgvcZ7wActWYiwFZRDeDCs2f7AZd7fFRRRGzdbcDFLrZptghxfBK485wWGRZfbPkbZcM1Sw3q5gBBJrKF",
  "key20": "25ayMKsSSdNnnAt9PBdRRjP7wchyMW6yNgtZ8ESc52ocVXYuYoCL8Rt3RfnmBsNQyYhESxMqcGsNBhPVLnDpcAAX",
  "key21": "3DeznKhHCGnKuksY8mmLNz8m6G46ZUDd8mxXGBCKDH9xN7GSDVazG7qroRMXTnfjTRBgHaSstxmkrzTZkypQBUBs",
  "key22": "6mxggRuSX7PYPVYgBKv7KMRiS3yTQaBtS5g4wvBGWWePrP32NmAQ9gT8wPVdF2qaLUt4LDmPStEZHQX4JdVWn4b",
  "key23": "4JpYAf1kSd9iN21RMJcpgWDnUGZiGtoigtADqGhNEdin1uANik9fZ1tsGqDpHXiHr2jFCGYRqGx2bn9wVdvT1dcF",
  "key24": "5f5dTsxkgz2vDmVPzJ6ThGGDjREMQv9MhfY9TCwHH61qCth2sKJBdb56Aw8v6LSKKQ5CLz13BHrogwCPABFPjyDs",
  "key25": "5eyUTRbY1vyCjj3XrSJ5iGqvRLsLcd336nZ5GER38h3NX9JTjhocfoRBUDMZAWc5f8cahTQePS1BkXhhix7iD4p4",
  "key26": "2rodmS5rP98vjeDYXVp6XxNqqr6j62qJrhrYs6BLHf1FwwKChM9ajhyzoyk441S2Dv8s6m7Z13HARpZ33orCrCFh",
  "key27": "CPvBgag9FbUvpLiHTVyzrF9XVRptiWBrnG8ZvT9e19v5b1ErFbSArB41kGBPLjKEDwFatiLBGZLmk2dUiQsTCdx",
  "key28": "2gena5kPfuoF2ZpEsdrTRdyh3aAc6iRWrfdixBmfrMRNPJwYJ2YpCekhB2WsmzBQCzCirEi63vmcyMeNi9LoJ2QP",
  "key29": "4gpj1JZyJu6RYtCArjYUUoq1jTtg1z49bRRwFa5ADxcff19TVGaxtidy5nf6YDxYS4CD1Pwr3vthbaU4zq1uKZrq",
  "key30": "4EyeCq9d1X2CpGhyQe1fMRTUL6QmBGGgPhXCXDdUXhVcFGoRchnRCKgYY14rjvTSDJJbix6z2pVGyudybwNuYRSQ",
  "key31": "3s1xES8cYgb7mFTG43qQgkxe3o4fNuRDLunGfmnTJhsgpok3nvp6mRLFf6fmqWLrA3PCHdShgKjnj2jF3dH4Wtpg",
  "key32": "YY5ZTtn8CwcxPfgNVYZTiJBBL7fdm33tgYYi9FXUmos4m7y9wWL9qfyC1TpnKQMxzCszhD7eVc4DjN1hCxon919"
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
