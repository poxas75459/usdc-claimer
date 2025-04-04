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
    "2HDiCtScQUmFMy8EJzTjMSqGyYYWE4a4CBCXdydbcuy1rJczy81JQ3btYztBPu95ZeGvnnAuYJTcnKVPPvK2P99d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hf8h7YM9PfRjjey4ieEEdFsv4mw93w1uJtcbR7b2F2jswf69KinoS4gLh9EZor9FVgdChvz8FQ1RYDZKg8DzCoT",
  "key1": "2qFiDP8U2kNUrvSmB3y9ALAcLAAD1qiMa3V3qxuh8XoidnPGisswYWnSoaKQNeAF5rVXPsGqyxr7QcsPKszQxosH",
  "key2": "31DBF1TRDqXh9JaxAV3UurFMk1o8o6YEz8d4VXPx9H5NmkacQwzb2MECqcD3pzxvJVRo7YgPuneJxQopGnn9N3tE",
  "key3": "ZYQjtyxx4NnZJBTLpT249P1jRqJC4Zm183exAFSw7bpYrVWfD4uqs4nZAxAZs3bcKXABUhAsRV8r2WqXZoBajMw",
  "key4": "4miYwBQHsFpG8bAAEELbMbdxW7c7GjRBx9p19BWYJDPHMkdDHWP3Xi3d5yuP8kjPy9cpDvMawUd2p9fZxDech8h9",
  "key5": "5iFeSKfKLndAAGP4PGssZqjpYvfcQpsgkh3YHrrwJqSUGTosj5FS7aYp8YjyHTzS7U9izvciozhzNAujJC7y4jMH",
  "key6": "4cKPZzGPGmXowsuc3yq26mq3AUwgiLxmoFVc7FNikSAUVDUsQgzzcT9BysxHCUfL52eeoM827GLQroBgVoPyv9gK",
  "key7": "3qCp2D1erDYR1RWCWL17ifuCBkaNmTW5mPUTLYi2M5kUxt9hyTKD6PBwdQfmNrAwPvLfiFieYLZwwK1MoeJgtndj",
  "key8": "4mq11W8HK81pgFbPoLGqf2KmEGBshQjdsCENL3G1idWf1FZp9LjBsAmD1tk4KQzRGf6UuaX9Z1iFRN8DCC3M7qvU",
  "key9": "3NFPD358nv4wRMnKCjoicLCoQ4fWfgxJ97tjWuV9LKf4mgjSbv3LNiVroGoxqz2yTTALTxD21S7wvvW7eKxmD86s",
  "key10": "2ziVDiUzybnN9Uyft7EzSTqNyMeN94eSLHjURMHd4uYfXLf7p6D5MwWninAwja57Eqxn6axq4UGwwRTgzWcR6MfU",
  "key11": "3s23RsqoA6mMwK73K3Cs3CDtMNaRdPrcwxfDuMU235A6njFSyXGx9euWWWhwZRApMPpRjzxdayQ4esCAAT1xswSx",
  "key12": "2Kze2RckjV3SvCsh8xKPqhocD82rzgJUwApRojnpaFaVnPWikmHZSjGVcB8rCi7ttmWBoyGp16SpgNUHWK92ckNQ",
  "key13": "2cq1nFS6C8Kwjp1KX83WeLpjtwY145Q1MjQFNWHX9RuJpvkUx1mPHWerRMR9oG5Mc79ZbkeJo1mEAssk1WpaG5f5",
  "key14": "3RKEaTBoF3cVGv3TtxAz1Yz77w3wJUegGdEr98LtcGDacTmCgF7ADatwbgDu1vtFjvVjErRt57mcyzineTrD6QfK",
  "key15": "3xfDRZ97kYUycQgUP4bdfYUog5ridhd2GnDCQufxx9eXqCAv8drFtwvuJqNQyyJi9d7CZh1ieDK4KR6mwPDkmDXg",
  "key16": "3o8CAsJ5fXseTr2CoXvNWTTAv8rftJoUhFv9HNFCzeSBuQHxdLm1YADsH4fEwguh8w8WNwutozGkgwy3PA9Avzbw",
  "key17": "5AwZbAQwT5TMrFfHm5NYPeNhhqp5mr9gR5iUk3rrbE4LeYbhT7Ej4vJUPMKUmQogwvPR3HYa6Qh67Ae2HRq6tE6h",
  "key18": "4qVktkJxbr4kJQRXiD6eKGpvG2KU51tUa9DJU3fUGy7RvW3Fsr8DJSapR6VYq4hZ4PwB5XnkgL79sgZLoJVXxgNP",
  "key19": "3om3kzDPAuNkActt62Q1ax8m8oyt3CyFJrzcg1HpoSeF6j9tFYeiHWyZ7A1sM67uaaXjtwgmXaNa7Yjrh7Hs1FZU",
  "key20": "478UPa7MrciVyVnurkhBvqHM1dfpYUtkY8nGaW99ex4VvwJ9E8zQJZqHbR7JMAversfsoEUN7n6naRqwkWMXfaut",
  "key21": "36e5foh37QQFjLKmMEBygMizEuJdekpjT3vjF5v6WhkB8qzqaZzDYSzbvPjanXP6DZpXaykMcSWjZjQ9NpNpYfhz",
  "key22": "vvg7GkxsukozXXXpnFJ2iGxYdfbGFZ2juqV8Au7eafYkaToRvhr637w5vFKWT9dS7L99ygAVVqAUq4xDV3LdHQr",
  "key23": "2FX85TpAYtRUCojAmy66mr3BpbRCQKo85dbFncmpgD948ucieY4XwrS3rr2kqSJ829juHy6RNwB1PHFJ8dyqp1rP",
  "key24": "49xWpTPCLDJvxT63nNUhocShAEvJqksYfChzuBDMf1AdR7JDYBbsPCS3B4Pr163ydcb4EYEc7NpGBELCLu1eFfc8",
  "key25": "3GtUwL97Wmy48X8UmDwxNxRTqd2gYV1HT6yqmiZRuJqAQ7bR8CSqrvTJT9BaJDfAigigjpKEwQvgqzGABpu43b9X",
  "key26": "4SQS3yZHvLXvbHCGmTTXJ5oPe5JKYubAkmBgy5N3EuK3p7TiT4kQURVqvKzLKWV9cD2eCBgx8LM8Z493HrLqfWjT",
  "key27": "4F96YN3mf5zpUw2fqLJ4HzoE3H2hkpECfJcen58hUt8Rz5ycY2wnTWaeUM1MCFfcLGLjU9WvzXdWFKMH54v895dT",
  "key28": "3ovfsANqNbayWjS9LMcHnN8RCZQWdm9wc6CNzpaTyodUCknzJaVHcBkh3UtCTLEZzstVYSS2kcbyG46diarQxteC",
  "key29": "2XVdjgqziG38kj4bkDsTdnR6jeCnut5FDLB2y87vBmm7NaDV7yvkn8kArzybQE9PHpEvWKUneWjdCgwaFa6ntjmJ",
  "key30": "4JHE7LccXp4P1S3kuf4g3gTSFhTH8TJ893BbV3iNGjBxBLorU6RHcxGyAL1D71YcimQoLRtwKYPePu4jep1CEHst",
  "key31": "3TdvZYTvF5HkGKoB6zqkNx8xrr21XpKAQ2hWqQZqzYMBSUCW9ho1gpXEDKGKmXNCHLhwEp6UByJsoCkF4nk1g17n",
  "key32": "4B1qyinfjvgQk43vFzgaCCCudKVbtrL1Tca56882MzK5Am2qbKPfH48oeKkShUvTErAh4ebhZf4oUjWJVxJCtwPB",
  "key33": "3qUyUsKwW5Rs5u5o8pVJQZrxprwSuZAQyLKCEAQnktFoQAzckEcs1KSLmcz9gjc1Y7HKeucaREeZRi7EBJYKpzvh",
  "key34": "2skevmnfFg6nKWqXWuSWBBQSfaLpf3ERtkLcvHjbZH9uePHvDd53J7fZhqnjUVggbdvjK1vca6aW9vNZkWg1WKLH",
  "key35": "L9EEwAFXzRpusQDdLwKauNmsBEZsXchc5Wccn9VtJzZRjcH6gqgp6Jc5HoSXMend8ic1fHjTRZkALZRifhKUF6W",
  "key36": "5wCc2pbFgZ42eRNnEg9bLwWv3YmfzrDrJFKaAWT8qxiXtLNR2mziGpKfMjDq8do1ccjxuDLKYC7yPAAMo5wY4nE",
  "key37": "5YAV34PmKveNZffC81PTbHirNVe2ungqGgtnAPQGVqWSZfxbrCLqMHcBcSnDf9WUGVsyBWTxaNSnx4hqAKvP9Le5",
  "key38": "58eUeXMpUctDyS4iacMDedzhSWWjdUPuqHeadwudJbwdWgy21re7DQMyqduG3kqTjpiS86LRBnXkuJCGmHWWcFmu",
  "key39": "z1N2qCgXvySfgeAzb9Ur9momhNkaAoGyvDJBF24799HV1sKmXqPYrcrPzMXyiTE36CUeiTcwwgGZeyyTQ7FtmPW",
  "key40": "2pQygtZY5JsCFt8L9mBihMXHBbu6odr4aK9WN1dTKFhu7uEQfjqn8LAfUnsLdDVDPAWFdwwJJUzFgiyZaQz3EmKr",
  "key41": "2ZJ6VEr4N9GCUxGWTK2sA9pP1FePvpoxpovzKcuoXiShX8rkMhrDxHqX4wfLP3xLdBFfr9nhJ5t3Fksd9LzFFk6J",
  "key42": "ns9o3KpRpKS7dPy54q2Ur2tHCZpkAAu8Lc4ouQ2kAJx3H3cjirfh4PH6C3byHJDnFKsTpzuGrBDxFcPQwhSNQ5N",
  "key43": "4xu1irTLGh3dCptGSZcH9rJbAqPTpp1KTkhta1jYHzsZ5EZfbpQwRAXqYSCkNfRN7FptJLjkMASSENiYoxPcEgnC",
  "key44": "2RPpveQdfgqxMUVeeJ2w1gF6TsLwbCgdsvc9XyjU98VF2tWQLJBoZXozLUj1sZwkbKFRyKU9EjvwcJsfzsPmDnU7",
  "key45": "5DRLqrsLmb1onSYykGKLTsZh9u2qCCxtvjG7u89X77BEPB4iyXLenDYzWbNgS2r3pUr97zpf6HGgMg1ydEC9HaEg",
  "key46": "F8eK6rVy8h6czj9maLzp8tzsNndwtkEZStmeSTpYcvDJ3FWwduZoCLnr3phbvsgXYqgN4wanNGtvkkzUpWJKkfF"
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
