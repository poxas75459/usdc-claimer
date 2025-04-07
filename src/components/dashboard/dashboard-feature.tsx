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
    "5r7MrfQm2ujPW6sFq25CAk32LSL3GDAYGzRqAz56LYVRwHXP29G7sAem8sg8eUpGCwtHa1VeipBCbekkVsrWBywD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eGeadQEMnK45fzZHnyZMUEYsKSLbUkPAB8Gnk24tmFAWKQEC1iuzm1NgojydmDULTvPG2WozSs61b9Fqbsg39EU",
  "key1": "5h4iTM9GUviw7CNkWKTZy9Pj7P7AuSsej23XGDP5qSYCB9iMk4yJtNMHHhvVZFTLZBwMve69LEdaryG7GX1CpWHm",
  "key2": "pE1GrsXVwwk6pBCmvtJxke8wBXfy2PgCXsEok3xSsdm8Yqo36wwZRrFDAu4drRVTKJKLzMVtmXPCiPVnX1Uv1HQ",
  "key3": "TubwkZAik4Xy4APsRgsDsrtvrK5JP3goVCbkN3VSVYybW5GjonXacdiZk9K4jg4N3o4wf7xdkPox4GrQ7WjwpZ1",
  "key4": "2CHtBD4obMtWTqhUQmWshWNbiuTcsYQ3hkjHmj8WdSXQgEtVcRHNaYq8EQtZrnbabMChJBB9FSeEE6gSYGnREhNd",
  "key5": "3Ejadqv3HMBPZ9kCfTmxbhVN84VxJzXjGtft2jxM2NE4YD4sPf1eVGLLjEQYdA1J1pBuRgz56Y1UbYCwpyRWt6Nr",
  "key6": "2mLjqM7nY78Cd7sMin4ihUzUT3bU7GmTBBpiwa2AwBbv5KUkH3n265S6aU5BPSTobdHhx9xuN8sEi4awYoKpJxw8",
  "key7": "LDi66n7Q7jCWHEmgc44GeofxmrQj4q4vtKSYT153N9Ger3BirJwZxCWmAtTv4SYnxUJxYLqLn3VvGNGCCUE7h6G",
  "key8": "5dy9ti9CLp5V1XUefurfgy4JS6ReJpzZSBnrK6Vf1FijzfjQZ9r1xZKrA9q2vGhKYShg6EnvpWmaNXVnrPjYCawi",
  "key9": "h63WrWCS2X7pf4ju2Uk1LUk7U1tAVWmkarZsNJoSnaVhQvYuQ9zJ9TRueTFYiSHcJrZQS3zERHqSyFhzHpo9raZ",
  "key10": "2uAxC7oXpxFZ86zTXL23RSeLBdumLdqJ3KZcZxLQHUhaeJJKCqWqzfSoyBYE77PFEYPEAN2hSJtz9raYD7R4fYH",
  "key11": "2pR4E1NScb8FqGCnzb7HkKH6rLMby1oKxRNyyvteSRjQsHAbLMDTQzS2Z9qenwvQoLija16MH5n8kgv5Ph3unjvK",
  "key12": "4SyZq6hthCKNM366brdWv9kNQxJQeGmTAvvNtHmYW3rnpWZqPbBxprXPZzdZ9k5zbYXi6GYRuDgUympBotuRvRp9",
  "key13": "ScrncGpEoTiJ2V99F7aF2DqanrC4ezosKRyyaWRvc3osqSHuwyhWN4feMqXqr3tGS5FGyzTWwnkgot3p8BEQ3oh",
  "key14": "22e8W1n5NxkAwuc6ae3vAM6KwQz9jT9qcXHBYP8Vit446apu5kbJw72AX2NjaZGNc5gLAZaXXqE1z7C8tD8B1AW6",
  "key15": "5trKJqLk4N2iFE9b6AueUsPUyzPn4uQb2hNhr7Wr6CSu371GiGt3JHgCNavHMZPcbXjog9JXqeDZQfafpb6nLaN7",
  "key16": "5m9pEkLmDnji66PRBLXHYyvkEFBkkewdp45RCkY2MNyCYE1jrQ4vUVAoWqTtj1m5Nfg5FX21ovWpRo47jP23Si9J",
  "key17": "33Mt3PwUm2j1gJFDgqs8SVsxmydj2G3Ez8px6i4D1eoNTuYbQ3MNwCcoVePSEDzXjrRD7azU7QjJvVPECVj9PAQa",
  "key18": "5zV7xoPu6F7n8aUSuiuiDiKy18y6rfigkNcFTWEdmcTsGchzPVthpyDsuVnzjsKwoYQNE5xTso9HMSFp2zbUcG6j",
  "key19": "2xLNnyoydeo7rJFJ7Me3v9V7iotCUkGYmKN84jmo4i2En26M2kEf2gbYSBYPMDYduSKgTitZX1eUxNd6LQWhLLaS",
  "key20": "5VNxTLVFD49rn1u3UYbcyQMxKhYiuG2qimuPevSkNrybPwXWNG3oW9RsP136Ls11eR9azLh9VJmqJg7qCqzZtK5i",
  "key21": "BQyRngR8urG1Si31SQJtdHgW3zp84YnMzndaU2dUbfDzPXb31sTrs2jaGQ2v4oe9c6u4DaCu8nGB6hknL1NhaV4",
  "key22": "4SsmGmSQY2GX8SCEGq2EyNb3G4zbbnWUaC2CJc9D4sL3QBp5zvCiV6P1Ysa8g9nq9W1n1QnTT7X1xaqwBSV5byqs",
  "key23": "yeQbVHVMTnQUJFZeMB14wLUqkPCVVpdrvaimccWafnEUVCJt4qPjFLypRLwbBPHBG3NQ4AjaWXDyCTy7FKwdkqG",
  "key24": "4cSeadd7rXps2Zf21cmVhA16LRGQvkeA9wyrpLFk2QFz1fSd3zUdM6urwwTugsRgvxSk3geozZFEjex9ZkLsfXXe",
  "key25": "6xV4TDSzdDLyFmkUvJz4qw5CsUscBXqLVZFZELnG41X4qTKFsjQLJxqXSD4H5QtctSQvYfq6B2ALV5FbfFKXgKC",
  "key26": "2rFheQp1m9hnrNbKTVr99nJwToGSqN7VN2WTz6gKpz5TPb2vdE17LDACfMGgzbcxoaxzVFd67v33n6K7HDZSjVJu",
  "key27": "5HGjvXGKuHxC41uX1N27DtAeUjbD1LcARyDcEJx2hwsrWCGTjhMyVAFwEhy1Cp6DnnnPYUz7Xy97JK8DsonTfs8X",
  "key28": "5upqiQYCSjF4hDgFx8UAamcZzhXT9NmJgBhxTsz81rWfahzLUMBVoW1iYU6qXvSNjmwcfKys9GEsRrSaC9X5GB79",
  "key29": "3H2Xg1gaULjm5M4aShBitfkcn1LBiDEd5XuPLHc3L2MDRbu9Y9VD66Y6vz8BvcZed6JhfeSPkvYqAADKGX6G3imS",
  "key30": "ZamUG4GKuvvEzDqoz5C9dHoigs1nTsM987a53HcfdkZ6nzMbEcGRaBjFH8BpCWqLVLmCMmzogRToQKFQAcf8oYs",
  "key31": "DRXMJVrGmBo9fw6fHyEwjVKz1yKVQLdE5kA1z5H9eWFcg7LVSKE1KvScTfPLwcUcyeT1rHFijWWSiDZdHm83k8i",
  "key32": "2NErdGjNKMY4Z25wNVVrQst8cZdvGpcSgoHS6QadjmeQQKLf5XxgXn8ibY6dfmJCdjFNezjU6APwRXr3rDgAcgGQ",
  "key33": "5T6wnqvd4g7PnVKmMHMSHmhubuUA5VvE7t8yyjHhnTxz46DZ3Ecb1f9fHyryBQm3oCzka1WVtTw2dJYnJ8MU7WjY",
  "key34": "TsRcKp1GqVT7fWiQDJ6cmqdP7rc6pFKhk7g5JTnJ2oqvrWUp3CYsG6jRUQYZX4e2tk8ZVAY5bjJ7Wkj2hhzPwhg",
  "key35": "9E5Wdkj814kgau5EzSLnYwy96tkuyRH9byb2pKbEt3kWVmmbykdY9VPRZu3diuiZQuDmXrMNszu6ftanwvicwP5",
  "key36": "2uwVXGM84kX64V7bnPmdHyhN9yYPp9YPBvd3BMYLdtmkhdbXQKXP7TgLEkg1NtxEhNN1XE2vPFvvE2wLW4Yp2PRb"
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
