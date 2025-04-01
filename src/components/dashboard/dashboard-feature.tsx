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
    "2rCW1yQJdKmKyJXjGqmzmmJXs6N9SATopqhLde2hrAAdLU2iVeaLmswNcxzDo5MCGtfzMvpofUMdSQDr42t4b1TQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GqQpUnZxsHrhWnA4ZmLvBbAfbHZsAjpBDCuN1NQxED19NskYGiz5QHeyTxvHmYzwKL7LwqaeG7BZNbxnmnmQaWc",
  "key1": "uS7HZUXXhk1LXfWSAdRDdycsBVGsht2sCng6i5DkWm4guejKKmVDAmhZVWW3huuaTmaodFBqZ92J2jxzFWfyL4y",
  "key2": "65AqRrkQu5otUHoCgPmxcS6kkHy5CxHXGgbb3HVYYy6rtHkqPkDZ17c3oe5oUx4b89sLnnCHnHrTxJJU1tKVVT8a",
  "key3": "CUzQn4Y29dtcRvXq3n5Ln7CYqy4Sk4RxbjwNyBJBt8KnWhQPYgn4u1swMfRhhVBFT3XrCozdTCtWmFdXRdm8tEA",
  "key4": "3XWuip1egyqh6gJcQbbyir5y8axtbNqi1p6Uu1eJtZCyaeyDLnt51pZj7uKJJjCvCDgVwDJHcNFYHh9G4hmLGnjW",
  "key5": "3Ec9qjW3czZDaWhGDtTRtXNfQUG6iaimyJt8YQBHjuGT1SdBbDTQNdtG26KQ1a68LanoyhLzNjfE5seQsAqTPvTB",
  "key6": "4pUEofJoAEoq2siV4TtgRAr2WmuYHB1UqdudW3MzofQZ5Tgq32rqvZNrcY92bt7xXCsUrX2GK8gnt2qT77RdRKkc",
  "key7": "4MkgV657ZbHrfjgmjxKCxQqbDecu8agX8fkWvUT12PoTgiYV1p4cxNeiNQ62t5Ezkzk3VxcDmWbvKb487v2oEuSc",
  "key8": "3cixbyHJEhd9VQyi5DEt8xbXXyEfb2yVjZhDyintR2jvgdYXctVfzqvdhKfB1at3aALCPN4vBJnoV86C9Tr4e9tK",
  "key9": "4MF6PbxpyhiZ9MzMyZyrjKmvU1ztgk2NVrQJdM7uG1tJ2hraUZBKeY49nur4hxts4stDSsVHAJfTTPZPEXCmyYwk",
  "key10": "46SGcpzLVhGFfi7t2rQmYugEViUpnRgXeTjVg7yDtnYD3Qbo2EuqYR7xJf3e5zsBvvthkZC7UHTu3RLqRNT7b8GP",
  "key11": "31G2fTM4DzcZZug4SVMRDx7w2iyrbM8hjJ55TFSP8uxnhvfFiLN6imiPDcWTiJqKNKZbei4J4AXHZZEFBChGXB8P",
  "key12": "3aCit26348iMRLHhzfhf29hQjksCvGrZCkyt8YomDc3NG5p2i36v2GrC3y48Po4oKLtZ5iAmVs2fbZ1UWRJicv4t",
  "key13": "2BKEo9qWAJV4BuXyjb2cNHdpCiCkqUsau8orvX5YzWGDrgqbCkuKctamtX7FnNj4FYyiLcTcqavJCSttTPndKKY8",
  "key14": "3zDp6fjRS6VRpUnkA8NtDSd8soPpTfrgAB7Y3z8tfbUFo9d2Sbufqkphim94cmF934J8vtXShV5Xga8hUpGJNk8u",
  "key15": "2zRrnmHQ2aK7FD7JSmx6ehHxJ6bixX6v3dHsDs5KmALCJEKFrHhsAaMbCwUZfSXHwME7TXCd6nEfm8Ad6V8KYJJB",
  "key16": "3JTVAoGwFMFg6ZNTVjHrJZtZsZ7JpUJ2gsWJyGkn1BWPk4gYnN51Hie51vhqTNYSxWVVKYDSBVKoXMFUpzYepQco",
  "key17": "3etkZBcrW24YsECn6M2FoMSVzWJKFVSCEdv53w1y7AURzrtQpwNPwVfp1LTtyNzpgxVj8LSHfEP1kqhEgjptAhB6",
  "key18": "4htgunyJuD5BqHPNPv59BPDEUmj4fWxhVrtYt7bkXmaamQiv5RVfg2NcoprBiJqJaLWqzQwt6HFzxoFsJCz23qYc",
  "key19": "3H9E5pg3iQib5mjxKqyJkAqvkW4H2MAvFmFNSUayM7KEPULsCKfmxvSQoM4f8ec2TGHLCQ3eskyjo4QDSdCL9VGK",
  "key20": "2MxGNBdiaKfD5deg7vJ37YL1aXusKET5oeni3D8BH7UNFXiQDCMPhbxpXRSH2u5zBzkCzrYpjP9hf3GL91XTPDQQ",
  "key21": "1Bbrd1Hx9SQpArk6VJu2y3CHqRW2ZYoMJ9rZPaFkkMbj5QMdPyQQEV6PCFEZhvSFLecnJne1afEgi8LEJdV7A8f",
  "key22": "4DWYdARFFrLAcZWPVDjvBZG2YxuxQyjaf6QLuXEA6mK9AtLL73ub8mb8cpdmS3nTcjgodcADPr2xVEWQbZwsZLaj",
  "key23": "2R4ZuMK4389PM4wt11Rz7c5BabYQXGPsBQttTqgbLmTPNhQGepEKMX99MiGrahfc5rHE2citWgJXeFZBbehH34W2",
  "key24": "2UxNsKrDjNayfi4pY4NgaVpkt9HG5D4GYEzSYLVTsacV4xLE2zLSvj6gxKUrpztEijpHZhLWHDNxZHeBeCK55wca",
  "key25": "4C4URnwyHJ2jcVdZ6Ce7P6s2mbzKfD43R76kTFW55mibZFyabufGVufYtS8GiSjTfVdq74wrCRPDAKBcqwQuZ2Y3",
  "key26": "5a3SZytyW3VpXViYvyKbBh2WhQe5B4F1pniXrzYtUXY9rp6hJQP3bvFdRpPSoRhmXpLNJeLyEoCcSdKSCMUDi6bk",
  "key27": "uozbKShiymvNQPqseUYPuBaRz69MjioViv2xZMB7FZtcTAxK8ti42cnk7dytQMeLDAVq2ho8v6dwivF4WzrnD5e",
  "key28": "9iGvHyf5vfw6JzPjkujYRDYNjVvs9P6wxwUroogE9Yavw9UPn24LkGmKiw8Sj1G4PzNXpnGSKzCqdA54htYUA8Y",
  "key29": "uJ6KZHxtNbLRkvzrvCbSFJdFGBcWHJPzczaPf74uib42Vr7WJS37WkzsWdBAhHWeZSG4jTHKAma2i1pQAUsPhFn",
  "key30": "4q7EwpfXqSCngHr98Kc9cR13iJud31cX357ToQmvCnjcEXJs4BQEwka76SEuhCfPP4erm3xJfCma3ByucLFrVG1p",
  "key31": "4jLvQMoC3DGJHy4JgUUFQ35qE2n6xDFoxHsPwhjuGQnMh5sDS9F6apj1vPhjMZRSEAfok6dwG67P2UijippiYDtx"
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
