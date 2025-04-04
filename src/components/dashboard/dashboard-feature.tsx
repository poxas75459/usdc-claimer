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
    "4oRRumUcSoWBnPdswdNsZjoWH6JiKvyFKN7YHbZJK18bUHyaNACZuSZJorJ7XJ5y6eV8skqbwNPs6QA3kHsRYga4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41qJY3uzb1es73z7jAjpGPKndzhV3K8u8ngeHXPi58VJhU7BVEcStJQATtYe6n24NbrnWugwhB3nHVfZs53SFxQp",
  "key1": "4koFPo1YH12CWEeMBGmDw2ucGrF1ziiPLoHF3b9NxrfvVmTaHM4DaHpU3dXJmCvrWVQzqNaCqQnRzUhc51xVc7zf",
  "key2": "puCzAAcveuetb9y4EPW3DrqTxkMAtYXqwaiq7GGEzmH7ZpqFSTk3yws17bzhVZi89qiYNcqa1xRrzdK6nzxHQgR",
  "key3": "5tHYd7WXLBJk8ibzGjaauNBH7bMABuoNocYCo3mFPX3frqNf5f7xw6bedQohx5npqv5yMHsRtoW8cDSbF5nfA2tc",
  "key4": "54wVJgDLt1nmoJ5RHqEJouk7RN811ZMedL9Zw5AJRtKHPL9Shav3NUjuHsga7cpFwvyBYzyUMLS9SyeEpWYwQmP",
  "key5": "3LGvn1pztk8d61Anrn8PLfpJporeGQ7sRkX5gtUAKxuyYfwLfiewimZcJi4MqyHYzmJqeKPPhy8X2xcnP7a55W9M",
  "key6": "5LeAJA8MnjnCXazG9PnF2NtP2h8TZexc9iYcJCKGTHUGpDX7eJjR6m86ZQud1L2YGckUxp6gdDuK9P8Z9y9WTfhu",
  "key7": "RBhVqMn9u3n8Vno3itETVoH7Zom3U5v7LXVKp5YjVEoHLHR3htGXoMfFtAHhUsH5LA749exuvnoSrKXkhWWk8H6",
  "key8": "5kAboQPHFg6fCgUddsL5GPmzgJoyitNsyqQMR9HTDXQqdNt5yYxYP52tjDhGUQPcHRqMghDxjxgZT2RJNqEJst7a",
  "key9": "3gAYMTRNkq8rJHFHAGAB6P5P5eyqVxp1NBPYRKJXfAkW5E8oMuft1mor6YtEnh57e2ktiHmDDUUuv5HBvPQTb4m2",
  "key10": "3RJsWW3v6boXKY4RR7RxamWoKVc5phYoqPZiGjroJeZXkoaWVYG8CACQP5sdG7QZBj7ofiV9e3HBzb6gs6Gr5cn3",
  "key11": "4zhtBePGEkG5repvYXPQGyWQjeoFwKPbvx3Pi79d26z2Fc9yA3gYj682MZvN26hgdPimDUK2RTzPenmo3MuLPh5P",
  "key12": "5VjrrbvQFMb8PV3czeB4rqkqbNTQ7oVQPtvj12Nfj5fbj8nZJ5ZVEGWUoUKHAKgvv3GquS6cDj7NcUUUik8rLnzN",
  "key13": "3SUqrwhG82Nd6d5tCuzQgnf4rRi4gtvk64Ui5kdYRcRYhxjmSiNMspSS4wcDntutTp9cZJ6qZTKQYMWkBioV1SNC",
  "key14": "2oVurDTR1kjtMfzS2EhrkE4qxZu2RWQEoyznhafLFYtVjyXaokZiX1gk3Ns9UCSf8jHjMiwBmHrn6TCmYsHQXKnw",
  "key15": "2mdHgm1jAaHBRxGWCkjbARRK56N74bKbXJDEecd7Jpu5MKKqTqNSMu3fbsnYHV2WQuiu867WrFWb22onUsQvoLG8",
  "key16": "2D572GxE1kCJdpmj8WRcoUTRbo4ChUwHHLeK8quNLSwD9mf7GxQJd29gc6S8ZfDq3Z2MHQ9uhrUE6FYyrx3ijXrM",
  "key17": "FetL8onQv1yuViV8j8DALEzgbwjhvusT4MmYh95pRdsLFE4zaJBhdX8f6WFFfu9qwurpC3SSr42HhAmkQ5EXGcs",
  "key18": "weXsuQDdTFFHGhYNUxyqTWgT51dm2odhExeJuuDHWGjgXnMFwbPC19AHm2j2rdttEPbDmFPgB7FZGjGxMuwc3uE",
  "key19": "3XjtDq2pCZsy1oQfbRrTVJyTRNiwQUEmUDmJPg5nx6gwWnScurTVoNX6xxM1fCXuMmwpFEtWbj267RrogPHTBWHA",
  "key20": "47oh2KzE6U4mPL32JjXqfZiJbXP53hYdmX1FS8t3cE8LDdfjs3a5AiLYezVVwnpnkmqGvscHJHjEAuEgUhYbnCq",
  "key21": "65JMcPzPwCvVvfrKPLmC1mv82qYFfiwV1Nd6bci7dMN3GG46y8ATxcRF6az4AwsHBZn1zZUK2YrwrtgJgcboGKQB",
  "key22": "Xw4y7wd7PMLL9wjYHC9UTAHVSx4GRXEKQykhuMsJcG6sBoS4C4Sr1rotzkZ8kXW4wDHinLrtCwJcSZHr2EUmzT3",
  "key23": "2hEfpGx6BFowG2CtWWrw8iiDHaWVvdiYkngmUGkgR8aFje4WSNcWgR4Dm14Q4nmZeipK1w1mtuwCjEXe4yJSix5s",
  "key24": "3rsaLefqycv1Z7ivHY9L7Ra7PPvhuxo6uFX2s1rk3TZGUCmfA3Zn9P2RX9CHjLt6rztNoa7WpRKw3oZ6Ky5A2oj5",
  "key25": "55BN5PJvQ3C5UWfVpmbztoh4PZ5HeRiUDC4P61i1RySWbiXxqBRvm52Rgvk3RdHccVksGoG8tVdqNJtfLyqTzfqH",
  "key26": "32e7Wd12Mu7vnHtLaQPAw1Mt6LApGBLkJAddxU4KVzU2MZhPMuKbwF7oiXvnhxRFk2uFx3RDC7gzVUn8rmhoQ1to",
  "key27": "gUED4zXnBA47oBk4ifcuAaKpgt4gKEwd1B5yPXHXSx7ttuuwMMRnAzy5BeTjo7ZdLjMLrMFeBKCGdDtCwFsdmHU",
  "key28": "51QgveXNHhtZDrf49DAgeC9CeCkTFhfHZqg7yFn2JefHtgjs177D9qv61HU3ZhLpBdrexaR98djWA6WFGS3seprG",
  "key29": "3U2UhR1SVSrmk6CvwoDxvKtxbWd9nRFZAjsuQy28cmLENGD47Cf6WeDrwgjwfx4Mb1rTJ2ehyJQ6EsRZuuJ1bYuQ",
  "key30": "3mnhM6nAftN7t7w2e6gKMSRyceGparncUogYqwzmiyjF1moB87EtXp92vP2yUFy6WvhGev6jYUjEuamDwrDdA4Mg",
  "key31": "3sgQjMSu9CRRMzFaKZ7uqerRQ9EYaWnnKjqNEy3eg3ciRAEzwAR8QforTutzwGpwtGihHsNixpmDd3LNvkHZL58a",
  "key32": "3oR9QfVr3CChCtGfz9N3QDjxXfidBtjwG1Gd15eFsiCAqoJ4aR5ti6GGE2MYbEVu9PG7UeVbH7C9D4ioVb3YSTjG",
  "key33": "5fPjCqK8KXyiozWEueLWXxV2LJgYUoNyWLLbc3xFRJ729kaCAcUWPunYuRPmz8zVHDTwv7BpJQC42QVAq7GvxfLM",
  "key34": "3XAYZqhHNErhoesFtdsMpXBsNbLRk8ysjmsAZy6hzvw4qYv2CjSzYenXG57NpxNCnfU3kKTc1N2boFZyayJVdmLc",
  "key35": "4M8nbDDdRJu1C3ij7rtguu8Ezr47VyzBDoV2xcjzfNtDunR6KxBa76FsEdb42izNtHUhUtgfBSY618nGEiKAMLLN",
  "key36": "3wXzYpMuy6i7jmJ4yHSdgdVUJiDRAMm4dmYQnQaGtbCQzAJpQ51vvNf2MnaGx3PihpABkqyiiq7U3EmQjwte5jKh",
  "key37": "2j3pYxQQR5DpqBNZGqYrzn1SWfpByymutNXSbC6rcdYwpx2C5Rpw5z8yZc3NAyyD6imYc74HdfuGTZ46XiEswQ3B",
  "key38": "bMKmSuNHwq263eqHgmQiE6Vy4HhKKbUvpnk7QWiszfzStX8UvEUVaZdxacctSbWvETJjcRxUXQpvHiUi3GeYaTf",
  "key39": "4BdktjJz1d3jShXhqyRLZDtAx44xdJTvB8UQYsrymS12p4cCjvys1W7JjRvn1PsxkYg3kk6wxdH4kSFceLzxmGwT",
  "key40": "4NWAh6qxETYYHcp9FrPTABR2HGF8QCGwFPnn2RpbXK4WrzJxch9njmHMmbGqhiwazM2wMbNhUHsAZGAPx8HVstHj",
  "key41": "4bXnbS12RraHFKhUTmZyDEHaERdvz3M7nR5GnLRPrrkduQmn7roJaw4JxfVRBSKqS9X1Tv6sah93Lkyxvvng6mPh",
  "key42": "4BFNxmj8oSETDzjLiNkeyWMHxdNd3tyWtJCZycdogd2eiPQrQwmSmo7EkGFNJQREDvatjiUFxttoBX5EXJVkKb29",
  "key43": "2TQfmL3SuonuvYmspJGeFaw8fb4qdiCMQkutniJGZD79jnhAvNoqmBnLEuiDP1p2yGa44CZ5A4tvTHqAATKnUUBM"
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
