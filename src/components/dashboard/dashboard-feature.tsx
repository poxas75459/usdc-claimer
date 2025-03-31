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
    "4JBnUP9rsc9QXkiT34H5ghMGBVyFXbQ4UPeUWPCTrAU12QPtmgAdJ3FmTWsaXqKFht8pV8UoLG7DT7V1L7gxvGrt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CwsiE3m2FXh9Rro34WD8FjgZGKRU54RgcgpUVEDz6njAPMfUtAUxCcXERB1ZXqsJXwy5AZvaHdPmHd6isj3Kyvn",
  "key1": "5ppN4q55ZCD3G13VX4MJ23PgaGZBKKSyrXvpmsyoRJnNQNnPps2FTxYnCeSmb4xfAhRUoaTquk8F5tV5DUSyxxeZ",
  "key2": "ZDSQNVjsV78z2qyT3rpEqGvVDMEcztjHkZJKRMgCvWb9zWazLzoSA5me84rjpNaaTn7XnoSZoyXvXEVT9hBtatd",
  "key3": "34yN1LMK1fwaFpjQ3agwW9M2Ur9aMJLnwdYQUU3F4snXhgeHAjSjcG3JJmyKWLHJMypoDiHSFG3GAuJ8RLQqshSn",
  "key4": "T65hFkJKgLYL6zMSjPf9zCAFet9i7Q4f652kG7HHs6dRr4dc7jejN5YoCayA3HPdEPRjXX9qDAzTmSMeSvfZZGe",
  "key5": "5raEiHHJ5zSwCou9v1YwZSJWkEZC3xo4WnRLFWmoGJyA3FhZnjiP6ReF3X2MMwviHNjU4qWXkhSEdemW1eCz75qq",
  "key6": "5i3tiTcimzqWwsTtwi5hqpbedEwQb6fFHw7APUfXm8AyqyiNRDMP1nU6sezQiU5bnuMi5fsD7x7CCDRHj6FYaiMg",
  "key7": "4HoMeMczmRUuJqVh8ptGDayDMRaTb1G9b9XPXiMAv93VBcCyLGHXbMm82z6LqxskUZuoeRtx79kgxpFAqa6UZr2g",
  "key8": "x8548ndj8LHdxFXXJmYpWGZPWVY4bvoZJCHUYAuWKEJePcPdEZRvdY3KHEhkKBosA862RRqkjrWVuiwBLJSTLud",
  "key9": "S9fVPjUqrc8zyH9816926JzUx6zirou87X2qq7cQx3svaEPVGMGwFnETAHyctqU5iUmtxHfTqxESmRmNr6sKrMS",
  "key10": "5azc3oLw4KnaJigTBACV4ge8RPke8q1tqFisHQSmijqCQoYqwc5cypVsaqbXpaQsNJYWcEuibJsTsCoiDnnbNkvS",
  "key11": "2gYNxJrpHMQSzJUaLZrWTcVaaapzhU9q5MWh163YGfFMYfpXTWaE8aFksNV98TZW7vSCRpfkHSP6PyVZaz4n3Ws9",
  "key12": "4YaSpeuf5as8rtT3NH3fYxvqQvtXMVFauyuq7DVpVcefV1pEsvMb2253KK9excqy6gy8RJFFK8Y7GKwRw1E9syNG",
  "key13": "GARVeyuk72fR5g1ozKdCHUbDcRP2QzD87T42Y6TZsmrwv1gDDCGCbHAhVXBiUmCXUhPeTeVbPk676QYTr7ZuZZq",
  "key14": "3cu2T9YE7Wh4H8L4o284qqvrMTo4L64LhgNpGXZ7M6bovFZVuZFHjqXtqcVvskMM4kDtnBhhwaNCnpjjYSAey4m7",
  "key15": "4LbnozV9jAGfngn9aZHBrAvQd5u6tBh8bsRtA3VGikJV9b1ajz9JKMw3YWdmA9qeToj8MUFxnPGmiYjwv512L9Jx",
  "key16": "667yXZjbQp7jzd7Rj1x7pERCHRKybdwBocNfDSaW9ku2J85UYJcxXvkoK11Wx5i4PQTQThcBVEb3mvQ8CQE5Krxo",
  "key17": "37dywAX28CUMu7wk7ey99PFv9GYSQzCiPhQZ8mtNDGBccRehu9eTirekWDGktW4T3Ewuy1Dm22ajp7CxJBpqYxSv",
  "key18": "ztFUjjtRem3ubdeBkHjpsgmidwayCZuuNSg8Ujjdph6r4YRE84wv6NzViNGPgYS1jhp5AHpcWG4Pg6nRtkx2joZ",
  "key19": "3ejoy6kNBuAvUhijG7vFjHQCnBUDFVJMmUiZV9UpWbiALmbCE9uP8CYqj8dHFAYW3vMu646p8rHRGNMdGBaoVytR",
  "key20": "r8hF1ynvZ8HnhpoPp34Ei8BJiQT7ruGUpwqbKWYkjT1ZVpCTXc4D4VkNBiKAe7HUASYVWvsGHcxP3dPisVyMge1",
  "key21": "3wzLJx48yVifJ2rhZs21EB7MqPUvLSPQGXNXibn27V1d9XkjLNaYeDvkQ5MJ8KKKhM97of3sxLt3m2RBNkaUAD9B",
  "key22": "3dkoSuLBxGt8eKXvYXMpDF1e45oS8GtALPoK2JnsdbbutsruFDtJbQmLgZEba7P4taK6n21eykCFfWBrfncWdJBT",
  "key23": "4BAuZ3nwJdtfc4DQDd74YZf2UwJbYFF9DGQgvvcKdfJwqD7uddvHfHq2Nbh4xjPoYmM7aE12pVPH75Sfnve3abB6",
  "key24": "3JYUY8t5MLPtSDJmqCYmkyEiWVo6takQQ7AnH8qj7WxHAvfBR9qEzrWXJmuHuc2BpuhyY8dbNszgx2L2gDAv9JoM",
  "key25": "3aex8ZQC56Q7eRRYXhUzJGEQ6UwS6NXzzLsRraS8WcZogzo2LGLKMbKr3qn5MYRbrVKL2WHhqBDiPnrihx49Xr9b",
  "key26": "2jF4odRr8hkbpzCtFqqpSmVpJEbpMJRpYBaBGWyYdNCKM7YAZhnQ7LY3XsuBbLvNYGSfakC6ffjAJ3YxhqgwmGGg",
  "key27": "4bD6unP1W8eEV1gPQEHX3sorHF4yKpuP7419L5jV56xLstMFKyaWjm88RMLnnfPkvq8Erp4acmganmmcot65vXS3",
  "key28": "5k7G7H6Ud3VVoqbgg9jqd2xrFSqgFiPk3FRqGd2pd4x146iodTJeSKrdrZQx1KCgHwEMJj3Lcj6EvuHwEvcht36m",
  "key29": "348GHEBzVrdavfxYorjVVnw97xD3AnycqvD78r9gSJj66bTEDzTnKJJJpaFvtfgRHVgVYTPLidr6M1amyAcu97bw",
  "key30": "2gRfn4oLR2iwNq5ud4kMof9ow9xWzscia9ie3LCzjrHZhSJr8Ys4MXMEWxEwoVZcSzFuuDRY3YJ6vKEdTABoYX8p",
  "key31": "2dYcnXdYZqWn8anCUxv6hbHiU2XYfFSnnft66FDMDGXH6jMPQiqf9GPHshAjQhxHk7gfA7Sev4qNkXLTpN9UXfY7"
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
