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
    "4Rr85AZfL6azbQX8jdc7vcQNNoy4xG7HGiqCokZUn7S8Ph11NeBeAjce9g9v9moYSWiJxbgZYoDpuginsgo7wUZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8MBLi8yitSCX5J6z5v3iJYh8G3X34zoUvPT4FCjKA9ktqkUF1QDXuPYadM2NeCVFdkYVUQ8qxFRmuYkuXy937r4",
  "key1": "KNc6XcZz2QkuywNj3nWXBaJVPfbnw9Y6Y96Rnpi8wtqQEz2JfYWcZXJmBm2i3dtGC4EXu3BiJR8d52PtF8jKb6d",
  "key2": "55Mu9xAaZ9QZdv3R3ZKMSUE7D3VpTUPSvA6qQRk6tz8aZEATs9c2AGyyC3RdzWHuzHdqiB9AwxGz9NDGpWv3f5vY",
  "key3": "34mSZXwKncsvUuHLvdCRYoSFk9n47e99Br6SfXPBhMTc27T4mfbeaLReiRqERJZ2bLAe8wRBqAvzcXvs4sFx7d7P",
  "key4": "YX5Sv7CcovFGa6u6PAruuivwPVCE4bKD74RCfjJH8fNoxe1jCSu4KQLfpQUsVKwRjgSypSVmx7tjXCmD6V5wUXd",
  "key5": "4wXgyScPzCbP5FfFq2pDpU7f7h6bBHHxzoWYW78VUUW2K6dz6stvZYg2qo1NPg6AZ4zDYXE1CsH3n7pPpU6pfS8u",
  "key6": "2rKgqCV8ouSVmWGyLw5qEk9hiZCR5QiYL1kJs7pXF8nTMCG99Rg1ts7GmhUi6FaoDVqRSC2RNWFSFGfR6pTRHiKH",
  "key7": "RqrYCZSkqzx5mWjEQVNu6v4udexTLwwAanWDy9z3yKWGxL2J4WC1z59srobZrFUMvpANNLZWmTPhEnivtfELY99",
  "key8": "3JHXmdbXELsrbrtTBMV82KJVG4DXaZQ4qkMyaYUefqMCsnr8rJ3ASqHfrMsgKw3Z2H3A6UKrkCqFoeUS4GD9pe4j",
  "key9": "5nEmSjB27vjKWEHTDZA6yHsATryGgcodyKwda7AfUUisvQfD7yqkxKNyxMqtq1zjfWK7mTuprgVajk3L4kfAobqW",
  "key10": "3bnUSeiJD6g9vPBigoN5oP9aNfFbhpVSSZ5iwaX8KuvoWDBE3xCd6Kp3PeqPdZpTvkTieP96Xrzm9inA7pSYmqQb",
  "key11": "2y8EvERNYexibk627drRoqthByz3gYT6ktM5VhrdAoRsVxyqpDfCfeCYhAb3eVHi4ApMJBe9vTRfePGQmKPU6tL2",
  "key12": "3P9FfgGYZziK4H7w9qEHqANbtZkBFFENYEMVPwmKaSCBfaeVvsaD7BFvcAWAriC2cubhu3CgdP9iDKvUD5Ewkmeo",
  "key13": "4wTjEP8Bb8Rjr6iSLgxAsv2BmhUkBsRFEas6TZaffCg6mxMNVUbekfwT14usqJTc3ZxSebSbSEH68uxKxyLYVGgh",
  "key14": "2EbyqszijEgGjCaJYn5zyRhnX9Kp73UupaqfYCX7Yzh6p7LGAWdSi7jRQ54Btw7Ganx9GoYMenoMgC2g7tmMkYDV",
  "key15": "5RU5Y8AKfZG1egcqLueFgoKu6DkTLbHgtgoejskwUtGNT1yXfj4S32vYUdb7rb4TXDTLMPuCuhMcRUFVY3aDcy2h",
  "key16": "2Ujm3aMYmVvyQimNRNH17GGuCLmPWEkhHcozae4BGj6RpH8eyhZoWi1wq2PJAN5CCqscoXmNpusCgo9XUSB3hRer",
  "key17": "54PBkQskqETQZTCKUMkvSpXJr7GCC4dm387faLVnEAderTxzNTsXdjvW5e5bv5B8aSr4jL19wshAkL5czibDpQD5",
  "key18": "yUVwm9EiHxoMF5hFWLtf9h2nej3yjYQVStbNYpB1k78ExmkK3T16vzQc6GM4JHu5xb8QaMnQH697zdHVWG3hJSM",
  "key19": "5gXygetCL6cwEDb1mptGEFiKLAoDHFWF5ucVnREgsYpa3c8rWCNW4V8Jjswc1ZfhVdPacP2zQDbhB34Fv5rbhP6U",
  "key20": "2TT8FWHasMarhXgbhkYVeApR9HXSbwDVRo1UZmm96FQQas2KMdXwzowJi15UB98f2FgVq9j8auYkx39jKrVENjJC",
  "key21": "4bCfpQjR9xTFCRE7Q25pt8E4bJSc6Ay32LLTSHoQrJGFyny23esWwGB6zrV4uSNsk5uqv44iSpwJ6w3qwJJtVAXP",
  "key22": "4rgcYYoPp9hMFVAEDW6zQzeWM8k1YrWQhZfjuYaUc4cQpVvcg7vcapvZZ2gnwQTUki1J68SW9JX4fHFA4QQK8KeK",
  "key23": "2njcdBJstSi9qoFU4bSDQwZUiD4KuQLDhQqDgiBhXHd4ErxvY9D3AdENxiTp8NqZ9ry9HoSFhxhqexZh4iUxd15h",
  "key24": "3zyBTaCYUy8xV8tjDPdQbw2eEfvMJ5ATN7Q2WHxTgvhm1vnh1KdnSw7r2ZBxTxm1QbSS4mecLmCrGLd8ZCusEQKh",
  "key25": "MgNhYDuiRs9kfoPae6dcFoiVUuaGdiMjCEPUvP9NcbdUFUm6wY8FtsSFtztXj2YBJkh2MDRPUFTGu6iHgfz75ak",
  "key26": "4ebj55KcSTuJarbmoKE7myy1dZajEnyKGMeCcWhHhFNqXh3ZpWhboALs1v7hV6qDZ8s6BHKZJfCWaVG8dFM2huRH",
  "key27": "hGu1foWx7yKSC4qeJBkBgdPQBuWZztTMQUYmigAwaDx4P8BMGBisH5iCMAdztyG5FJkLG6cydhvMXLzerReuP3S",
  "key28": "2DbU45Xypc4CFpYRoBsJVNiZdMoneYqxQQnvPKjcFjUm71yELeMXXuANMyPAFrucLH1kEi4fLLaFgGvXTrpCBASv",
  "key29": "5hmyPBuEDTZHnjXQkqTNr8VvyD9HGZELWdwj42LzALmUPW16UGeWmqHnTYrv3VA3T4PbjP5wWwxagNtkrr8pxb3K"
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
