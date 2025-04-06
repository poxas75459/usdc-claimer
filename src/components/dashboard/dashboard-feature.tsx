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
    "5nErqoLaJBk4e6kF5bsBJbupje1Wx3pw5VM6rq6z8BoXMvihUPG1PW7KYukgPEeQH2X6nVA9Pv7Y3v9AEsepFGwU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59299J19XP1nYPdJtQ6Tz7anq73pEZEkGXCDS86iY5MA1n416AFqJaUofQXY28VVsbrFvuJAkYoWtZvfoKWNiCEn",
  "key1": "2XuhgW9QCSL2J8AwMnzHsjt67AYYvH6ydTgHgNUx1zvAYNdKxcxtRCb5q8KE455RAsynLfEcSweniYPTGfmTipcA",
  "key2": "3DhbJW4dba8vpvjpqHVcKVafsYDQb9vGLDSBJVrKEkUJf7xn8ixDRT3Z4mF3WhmYx1Y2VhzPHi1bHn8dzJhAe4rH",
  "key3": "2oWVJR5fAw6DMnvrBUBVeFKeyB9eawjDBrb1xH7oWpcHL98xmdybFCp9KHQeUThVf1bGtmjqu4dmUW1hGauW5V9G",
  "key4": "3kvXQiW6F3rPCVLQB1tomJrsnv262cJR8xSMVCibmrJLe4A92opFfRa7CzT6Yizbb1jjttf42NeyGXsTGmyF5scA",
  "key5": "JJaNbQSSH9BRUJ1FtKnT2Nh1HvAsZb9s7RhRH9Erji9oTMhWBE8hwYvYx5my75wGEpS6kqMy5kfkiMbXJvqy8bW",
  "key6": "3YMrv3E7arakhkAoXwzVb1XErm2WthLjEYN6eNgCpH1iir1BuvoYXzUpKPecvJwsRGSQiisTeFeGVZYY44HbPPQj",
  "key7": "fB8ZyUxbDgfGwjCMyEgEEvn3g2unyLiLLyDmCv7PLWwBSCKF2AzwBFP2HKy2RyWPNucWYUXG7UeoZu7bVbxUAcf",
  "key8": "4YVfNhc3s7Z15UpgSZD5KqrUYdeapbrMiM8QWFqmZLzc8kZ6yniDLyyA5cqKasrBRXLiF4jL5PsafPu8y95CEWbh",
  "key9": "k1WUGttWDMYWpP2Pk5Ks5v2WCsFeEuTgBMCBDuoRCxzMxgNgRGd7pbsMSVkLzRi8iKZ2MrCExDTdFiSDB1Hws9b",
  "key10": "4LqZiM9jX1n6nfA63n39tELQfG3bpJm2eC9Tn1djR1ENCqQoSUTZb3FEoPKzfqwK255C52WBTHspusxtds6KugKF",
  "key11": "2ZZ3HQGYCdYPu4pCycahcY4DLXSoUFHNPKpTZXVwQo43am4pRWx23anEgtaUn6s7wGpph32pDCoj2Ap3MLYxa7uP",
  "key12": "4Vt2zSix3qfarryLbxoQh7n4kjzPvd3kSPosk8cVPBa5nv5C34S9NEQHoyyU5ZndpoQHa4MSdPTAJTy5r55LjWRu",
  "key13": "4sfTvCeXsed7oXCdCoaYkUtm1s3WRXxubidk5GGUL3yxybMpedaNr9gqzRxr6b1S355hAN7HDwVuuCq6yTMZKXbc",
  "key14": "stxEhMppadBdhUzyEbAebjWfFt29e4cJkcXGjQ5DCetbowbVwjUk4iV1vPrR7mywFwpFPZCSQ5ihDuBCMX88ij3",
  "key15": "2ENeut4sb3VRA7Q62X3LQS5s7p7mBEYD8dTJynk96HQExXYssoPLaZUs9NoCq7F3V5ajRCGfgY2xKir8aRv8LW9Q",
  "key16": "4HMPwyvapyAuGez8QP1NNhwiuUabino1V1R7Pnc39QPmCHd8HY2BxopEsJt8wVs5SCo889mke8gvyhKUaYHSciHZ",
  "key17": "4K1LcittJCZjTeiaTHFiZfCZ2PK9GsBRmXzkz2LSoZJYAx2UXUNWciQXdFeekcbiGnfM4sV6grSdn8G7WB3n333Q",
  "key18": "2VjEFgHpQt66RXgSpqVxEjwNRHBbQ4R5JCPK6izpsjpiwDZVdT97UHvtFjKujTS3hNzQLXKmRjmZGkGtyWAJ3vUA",
  "key19": "3oMjhtGxtwGQ2U4HbrzPQ8aAdaSqfartqA8wigCDVdKubkkPNr27aAZtrnJdQhsFFfcZqwvJN8hhXidEC81YihFF",
  "key20": "TZ7TQdVTFdy6jfzRvXgWvb6Y5K4sLD6jSNVhF2UDuQVvE17TB9hs5djwMmz7AsiyevGFEzN783JFcCfAifeuYFe",
  "key21": "3uvbbcGBtPpBw2zy23pnvdAi39KDbJkMeXAYN1TGubrP59k1qGyqCazUuTY3WzEgofB89xSkE5cyREpwdXtycYeX",
  "key22": "eKiUhhvD6fMwgyLonKiLn3Kw7nVV6pGaMf2b6roNdYjMrBWTW9hA4jjoBBUvL2xjDEai7iWpGGoyYCRjNednZJ7",
  "key23": "3MLxvs45RbApwHEWLpBh2w3pTp8hwyPrF7eRd1R2T6hGNQmwhtimC6zmNHW5Jd54QudD3W16Zaohg7m21cKShTZh",
  "key24": "3o8nRdeB6GTFoRgiZ7tndkz7iitVC6QDk4RJCbFvRgtEZJXbYjv5ANsz4r1NrKYuusUkjSBE7sT9nqrzmUiYReBL",
  "key25": "4LDc7UJ64cHy7pcVWdRM4QJvWZpUovozdf271thDDMKavFJbTCDsszu4eQ6oDNddb4GhTmLNRK1L6HVNexukw8Cq",
  "key26": "3QTLBpsecABrZCcpmzHd7mmYJT2VrZVSgCfw26TTjCoroWG1go9zpWpgMTG1qQ8a34dE1XF1pkFykfRKRMxxab7v",
  "key27": "tTnmBcPuYFuB7jzSnuMyCG63dhpZEQWgF7VqHKGwUT2NjFCDhumh8PeQfPwXqF4ruj2Pj9x7yoNHq9zM8FyAXTb",
  "key28": "51nDwm3Uv9cTirSFMteMMAcL3aBVw9AbAi9tCVTtbP9jSixXRyPQcXVXNu4dY7NRbPTffJ23GRsC69qL3ARQTGXw",
  "key29": "4eexqSnKco27bXp5dxeSmjXY5kMiqaSzAVWPtDtCDqy8B7QhFejxmy776enNxRwHr7BiYmtqFWvbrccryPfZxoub",
  "key30": "3h6rWq5JKc7xQhf8YyN88zWZFUH5ACiRhpWdD56t6NoM7i9Gzc3Jayi9KG9fCqsGiJirmZej6cmahBYeWxeXjuLH",
  "key31": "5WF5ya3HyfPci45xCiPPcNLNfSJAbnXxb2dt9BqcCAekbDnNB2d2GwAMGH1P8PkoytUV6D2bDcexsR282NZayMoH",
  "key32": "5iMpc7QQq5zN5TKhShrEHJQJEnkL1wKcLEyJKzk4Ms6o96wZE3AY6Cyp6jVv7WXgPzU6j5nshC45e93yQxUSUKN3",
  "key33": "3KMLdCweBTP6H16opERpEZmzNjLtdkk31PBJPKVVDKpovHnwK7VfnQj9CM3MBBE2Y7Sz4gaX4WRQZyXine7ms7K",
  "key34": "2nGkkuDmANocTH2Jmorr5gjCe6de9gAP27TkX9wGgaskCwdgw5ngvE9n3diDuAXo3F8keiGPn5q2eAqkX3hqMfAX",
  "key35": "eiYJcWVXzXSBHvemHEjtn23wza3449UTXcq4HqWAqrhiR9HqWuSbW7C64UNH2r9oWFSBGbenTPJw6ik8aHDMNbJ",
  "key36": "47GcE16ieDjCYgtBhEvJFaimjqPbGRywYNSPbkQdx14Hfw1RyG9i6uyyiLmmkLU2pNgho48C1aMka6TVS2C8TEpK"
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
