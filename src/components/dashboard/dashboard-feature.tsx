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
    "2aENSWC4fREwzPCjpMcx5CaMUv6EUPAqDmijtMfL5hkoEhnyWCQj6bXuuf27mXpZwtXkNtRLoru6Kz5F8ERmsmhz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WQkLPhNtxLdLWA64G8BwSmF2MQV1LHqur8gdKn9udefpQgYpmSpQu5Ac5GyMAHEqaNDy4o7c31vuZSWPsEiAgv3",
  "key1": "3vqkt7DzXyBk45Gmay1gNKXoG3Pi3nvdVBBZUsU3quwiqFAi2E94qtMEqnbWzW5GK4TCY42DHA3DbWioswrYbDzN",
  "key2": "3K6RmLWmWxDbpW9pWw6UeruPnYhPXi7PyWFoEsPMKwiDYsvWVaPkNFcFCvjJaCzLJ5bZYRL5iP6YEz6vT8QB87js",
  "key3": "4B2gojCiVcUzrE9NcwTySKEkHhxcyunwVbDeBjF1FD9LoXaXFgCpzEcKXoJtmR9PBDQ6wZMhP9a9su9jFZatadob",
  "key4": "NqNzSYGXVwNUDiigKfN3TxaoZCeZdbxLQNtHp8abjBiFTdc2CFH4znA82fAYUStfjUXHqvzrNhbvQ9uqHvZtxyC",
  "key5": "3tyqCp5z7FExyVDpiraPwVY6uNo675gbasovZDtrGHMZE2rHHzD9of1ycWpkbb9XyksneTRPgapUYMSt288XzTM5",
  "key6": "3xCgWDxqBkRjejoKUaRkL75o2pReFDR93Q4JbAs4RgoD2PR64vWKDVHfPqUuZsxBQyzS5xBgyJKpw924M3YA2fWg",
  "key7": "4eRbL7bhQRUqmifcB8xzoLnwJ6FnusRxM55kgDbeGYzQGZJ2LvrDmwyfU5pdZXLfUd6XjGdYH87kFsZbXtP2mLXX",
  "key8": "4yMniEgP2VKKr69YghetYbUNYWEYVhP4AA2THPDwjM42Wj6kbfPQTDKKHeFTFevHp2VRWYgEBsZvueBy8kxPCSou",
  "key9": "4zrbUz2p4jeE6tvvScLkaU8JCSFDBTbMerGVEChtakYv4DB9Qe5fudw6jV6u3CbKF15qyTnxaQUPtRsxswo2VvDv",
  "key10": "33zUe53LU4UAT87c3ftXCVd3Wwotp1PGQUVqJgZB6461J5nSMkayNVeHia9Eov1caFtYKRh81gyy3sL4hQVPxW4Y",
  "key11": "2RtSSX9rzNXbckcERw3u4aQUxKxKr72EsP8ybt8vpP835k2thTWgsGqej8LfzdwL7vNebxGcF72dL11vGx83G6Tm",
  "key12": "383yPEHHSyJHhXWBNkriSRYWrY8RhKcRmMWiaAcbFpfNUTbA9EwSWEQh2NgAy2YLsFRUojMmdhBMtgmrRZkRyD76",
  "key13": "4t9stGdGWhwTzReUQ8RLu2YGswwqYQoJfhM46BHVjjLAT3NDGEm9keNEa3Gchr2zNjhzrbUR36p5J6msL4TeDd2C",
  "key14": "27snYAdzbeXsat2eEjcSCwP3D6QRK7UvoCiXx6Wks6Xzk77LTBdF7FSrG4jpvkkCjNPLDR8EfUtwbkqW8igmfvBe",
  "key15": "4HZvrsWERyoV8rKbTAJU1BCGPQ7eeCpzm8e833RMvLAPWwquyqoarPS4o26pBNLVcEPuQea1qkY3hrrn4L6kKVe2",
  "key16": "maVrcVwjgTUNAGxmb2YEBrubr2dvBjeL9jVcsxUE9qmN278AyUbkjHDRqyqMtYxB5WU39i8urZPtKLLhoAvArLu",
  "key17": "5pgoHD1RLUTmbEmu3Vh3TFfskYdQKAoGd1iAocwEBkoS6aTHuZKYps1whUbs1LsiwTNvpdcPsMttLAPCbgXuAB1U",
  "key18": "386VC8R3pacjijuwCtVPeSLMHpZ6wXNEfjrTPgetof6Xrd4TGxFX2NeZYbtzeiYL4rguMuFzaQ4qKFuK17LWfmVu",
  "key19": "5HS2C4m4iUKnb2fEKniLbYw44YqjJhwRfvhFxSexZ2tGP5vXP7LBJMtvvhezmei3edt7Ybnp33a27eDqKJayzULo",
  "key20": "2rWbHrd84kKkJtg38LHp1XJxAXjYEmNi9KLwK46F864iTSHumQbb43H3QqGEQqmR8ouT7VDjhVNRif5fakCcVEK9",
  "key21": "4nYJjSrCWkw9qSvRKnXqFJvZSTpqDLxtdFpPUZump3Hu3JmpTAgtqYs6LjW2wjAfyRhXFsPKmPjcfAgSPQSsVqGk",
  "key22": "2pJrWGoyARTkGfcqoY7g7uwNdwyxdh4ZkRuqSRMCAYstKbx5ebGYN33JEDN8r1vizfLXi5CpAfcVXRuVo3tLrnr1",
  "key23": "2WNzWPyk1KFAkXQJrmnqCawu4T5WYJa4GMmwMLnVietnpie222piSAkwNLYfNQ4z39Ti7rehxCjJuYypvBf5tz3Y",
  "key24": "59CZAULof9i2CLAx7LVyfqczA85Mpbt4s2jLpdom7Ddo5grpEvMVddGB6dtPAuqJPWEVmccNDvT9CNMTriQyFYeR",
  "key25": "3Vqzi48tch9dCDZEWiUBuLAFe5b7NXKH3Zx7xhFy5FxYUcfHW5xjTCajUqGytmEQgZDczJeRKHWgVzosyXcFkFdj",
  "key26": "2hE1FvU9MBq7TgWSEEF8ZZUpMLVtR5Jy2KKSKTqA39MeYGK9vMrj3WJfr1w3Lg9GD6KZk9853yVJG4FFk8iYPu4t",
  "key27": "R2KjgzhLGT339qTygN6NLrbafEv5wSzJ6AjV8ZVBFixAWup45gNCqjCMqcLndwSnjJzxN8YdEELtY6NLrNvqNch",
  "key28": "7WRs1bfjoySs4FBbu4RdmSFAP43ZgaRTzKeoipFcbXskwkDCdqSWjm5adikjathUAY3La4MiNPPBzGRn3t5hTTo",
  "key29": "47TFoHLFqUpjVCjfqzCYnC8BriPuZr3fnvSBKCkEyjiz3VAviVT6d7jLFEiHLqB5AuJ6BMbLG9URDb5Nwi6d4s3k",
  "key30": "5Ynpjvsu1uWDQsgvjzhjLwqm6XVaN6L1VqsT8rtBUqZwooBtfK1pqdQpCHsSVc1VQq3E3Sq87fTfssbQAf9GAKyR",
  "key31": "4WJC5ana9qoDXt8KsSZA9rWdNWJLXqhRvVmakYE84iFQNjzzMxeRcuh4VM3urfco31FvTAST8TBX9iRJWvfsJj7C",
  "key32": "2vookNaWXm9Y9JMANuQhR8rEHHrgb6UiJf7y9rX1DtyaV2jUa6N25JQJVyk5idcakrKDRM5T1CzQE5KbFRmTuAvb",
  "key33": "5EcowKDfjEG5vzUqvUwh2KrgDd8LevyjU1Hs7qo9KYiZEyDsnKwiVPHEg7S72xo4posQMEuvqvGVURsSzPTno13V",
  "key34": "2uRv3HnV9uSKiLdqZXvUvKWMbVz9xSPRTaj2FeiGPHKHBKTiX2c4qRvvYab7rtmismVCT7Z225pZuo1hP86VkkDB",
  "key35": "U4bkUyJ16NYXN6M85iWir3LSkRLHgtY4ZtEeQ2V6Adfd8uHfmVuvbLn5tyWVTYtnNJ7n9qNzvig3JqcBt8WanwR",
  "key36": "svKyGEq8tXKnLF2DrgZibwA2nrGxtoQJyXKyEte2aHEpbu4HJWmjQWs2sUhdDQdeCcdTbS3u65Axrhz6Nkvep82",
  "key37": "5FEFx4HheNMM4Ziaya6E6MmcxSkSLdgvEPtWX4Lx4WLAV5o1iStwWLb9tphTwirxpD9co4LZtMZj1QS5uHJ7mM9a",
  "key38": "5YtnAAtd39aE4D2pvoxLeZrPmB1vw9oSu8tcsHWMkjDkw8JauZCVDmjR66PbHnvMrEN7CFFT9AuU7hje27Jm3bYg",
  "key39": "3hrAb4Zbn5tnHnR3gyN7JSCXGGexmi3ZiAJNzquM8u1NbutQNXyEYv7KC7FH85S3M1WBV16S1rD6uGhVYGKinyZd",
  "key40": "4T9AeLdWPxXs3QVjuKvmcSfxpjC52ndQo3Yw3KKKhxt8Admc1GMEwBW4MTWNkK1wrZz7u1QURZm2aACdWnfANk8L",
  "key41": "4xH2S6z2KFffDtzKxSbrFbBHKXS93mf4jhey77gzgC7YNAndxhmET22WpcgQUdxpeoo98Wx6azrVSGLx3BGLnPSw"
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
