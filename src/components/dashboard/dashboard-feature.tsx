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
    "fsJmFz87A6XFF43R154XwNZAxQnGiaGRNCnrhDNoaZNZYzhs2A1nPaow1665z3RatSot8BhFghJiwWHjTGZmNZ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LsmSFCWJUBK6Bvqd7wxSG4Xv2uGZtWGadm8SKrDDKYUk7KfgMzyLVo28NGZMKtKj8FsGUFig5jgVkHqkTPXvd6q",
  "key1": "4FiYSb27AtbY5L5vbss99oPABkjmP1CojUd9188N3yu7bjxkCZSrhmoTAPPGi7VvCt5Fexb6WB7KvzgW6AMHQua8",
  "key2": "2KQ1eWZQtV9DKBH1bvLvaYa4QSNkbgdQ5txXRUmR8BtJNiNy8HbBguxRdr9dR4uRSXstJwH4eMicZPsYsS6kBWRZ",
  "key3": "4E6oB128LvQ4M2KAZnC1ShmBYn1V3fKRGSkzavLzDgaSHFbpiXL4jp4Zrjy5ZDF99RAbigdyZufDRvNFuifKL3yX",
  "key4": "5AMq4dtpaFazskhRHwzzhcbbXQ6iRNBKFWpmfmAnRX5ffqY9YBT4kYhEGhnLxJKmiCgEBwe8SasbaYta29PVoLN",
  "key5": "24dvpQyUwTGQjJcrEfffzpJ54VpGVpPd1bAFCamH4oLjm73LkEtuSBXyAJJhyoJJi9VXpAcx6aVarTzdDkJmR9PB",
  "key6": "rmsz4VTfuDsRXmkg4AM1QKDDbfn6x29vVHDF77AzvKudpKhpztZvTkMpb5SqED6iUVQXxnN4kmGpf7L8rw82mPd",
  "key7": "21zEu9kMoMsDvEZZJDT71QHad59tFxwUbvQbKwGcFVSaNo7uP7DzP7NxC1xDmXh4LiZTSvioiFRH5woxQtXAdJNC",
  "key8": "2iz7oBNgGv56JrZh6ysUxruhVPyxGw5wwipg83xm6YwRQxHS5HuSngkAesymTzLbKPs9JJZRTS4YM9GLc3wZ8kcx",
  "key9": "64PajPjDJFqBT8iHkW2edfnuHqBg1Y9H2foETzAkEM6PhAnKYN1W1BS873NWZdNvtYhVnxNpeTXdUKnWPZ3VXiHL",
  "key10": "3fWXGZWWerK4vMicaPtB2dH8TmNrdzezf7z599ybwompsTV1iYAPS9gjckRVv28QeSvM9q9wWz6g7JH2mvNLbWj",
  "key11": "jfUFKPmVhogFBBbUfzwBkzK1dKRvGntFpbuZ8GiKo53tmCPUCA61N45PiKD5TvmvXTS3XCxp1LmFGbzus1H1T45",
  "key12": "3h37yZsS5Tv7VEoNV7SrZBBBMJMw8bnu4iv3wCfhsFkthtBfQLSqwr64BCGs3wUgCjYiRabeqAZfDxwhJaC1r1v2",
  "key13": "D9EuGTSxnaKXX88Qtn1z8GKUCiMdQC91kianpP9g5SjY8zCRE9hxUykwfDbDj5afTQmFeAuXPPiaQKnvqfxB3tZ",
  "key14": "42R1JfNnaH5zMy24UwPvFZRU8d8dh7tY58erUyga17mRbB4bAYt5Z11c7WbCSXjD1LhJu7hkj4nP9Fc4aphrpfTZ",
  "key15": "4YzLxuzXxUWK4Jy3zpb2MVPs6he8CyeK2dHYaUcATRrhbWfdf1T2JAxwtXojhGnvJ8h16xyVcZQmqcTknmSnSFUE",
  "key16": "5LyY2oYrjnc4vEw1dHvvrbmFgezusK2aDYvjGFa8qwvKxCGPK7kUBHk9cCrGdRJSYvmrHKWnpTL3YKZnhRyDiYf",
  "key17": "3qNfKC3t4riLmiLkDpLUrrFhAtYCiKZHiEoFcGjNr17irH8Mfwkso64mNxyd8aiqCYtLbciJZB5Y9UFTgPCmAb6f",
  "key18": "62RMmtjGcStmCXcg4VmewYmmqMSMEdaSFtLYmywrYoSR7hNBz8y8FfGtDBxuuZJ6QrFXRyt5G4FbzJLjn5USo5pU",
  "key19": "3wBR4mducjEPxpean42nUijoVdDwi79CsCHQrY7vJ87Y4WcsJLBW4SPyDDeWMkRuU7Xvhdj9YpYd6LUQXTEdXR2Y",
  "key20": "fDis6uMZnTcrs6qbcLoL6hnivYmigej6TwTs6Bktz6yKbiddWfiwdmW3R7aZiYN994zGABcSb8PDCv7mMhwk4cd",
  "key21": "5MEUhecu8YYB8A8S7yYSoCsrUUBry7ioBeeXZwzP8zfkWyuhZ6rhTCVRngWvLGs9iSQtZd3F8XK3PRLeZoNW7LSk",
  "key22": "32M8kEZQ68tDc4Y3v1NtAesPohfhau9uA4CZUit5fnu8X5Jd6zC2hVyijBgKhofPZ1GKYbM2SbwMuvtrDWX2bTaf",
  "key23": "4gfMRNRGuYBKwE9c1pgP4oaFjjKtLzJAc8w9eqccBZefrDKHm3xgqvcjGbigh1muD5AM3sUNHmNeWA8q8mFi8U21",
  "key24": "4kVeeBf4t6L667yepoR1hztKyJPQW42quKvZTwZ76BVd35zaNjfpiMJqrSgMjSULxDLAGYL8eoqb2SprtDRLSh4v",
  "key25": "4yaMnUMfH6aYxV4X3kTimDxptfj9oVFYJ1PzCGk5niMPMT6DqRU1pgFqEojxG3J1cdbro8hupQwCEyvwN2mLRQyN",
  "key26": "3w2aJrn5N7XCeKcuXvNGkM6ihAzBacMip14vGyvhEUZCzQ1xVrcy3BeaRp8nC8FF55TVzyirKBf9KNyz4sbf97uB",
  "key27": "QbCm6XiZtJ1kVcaxwHMrF5RwW5Ta5t51jQHMayhra53wAuFG6zNbrfFqEbaJ6yFjxkib6ppUvhgmTARmXMLCLgr"
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
