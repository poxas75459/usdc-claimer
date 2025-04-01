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
    "4znZZBH51TWgzpwN4ZVBcEmSpErGNCgGMan5AQumJeCoHy9ZNaXpwVpgfcxBc3GnVoAH66Tx52yCEMcTDsFkZNir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "duWGgjCswoMenXnzyie1cwHn31sUejGzebY4ZcXgKpmbvVDyubqpd7uo9tNVfgqURyWQDhD9Crxf2Qm4tyBvBvY",
  "key1": "3vGDkfFDTGjzjh8aVYKzCibhVsEYvKm5V15L5T5yvZ3ckZ4Q8fzmzPy4XYP8gZsipuB4AdbLyjpFC5ftQwVPFaJi",
  "key2": "4bxLZVooVDKQ5boBjiw3qmzJQE47EBiD5tmbwMVFvy8Ko2KwDDiGeZUg3EjNyjnGssa5rUBwRUsfgj5DLsF8PKBU",
  "key3": "p45UiSmkKb3RSHXuDY1EJZwoFSot7q257Q2J8mXbAaB77WNGzgS9R7CnJMF7jDy51Me3w4MnsX7EDJez4YVJqEW",
  "key4": "5WRHorB9MUrBEfYyTSu1B89AZvUXBG4f9v1cqLSDxRDUMKR5F497DeKbPicFEDLHnGtti6dz3gcnhdurDpH3q6mm",
  "key5": "4B7HiBsHQRYmnj7G8Si6TVoKGsv7DSWDFjC6NLras9hv2VSBV7fae9SnRZdBNkamu2u5AZMEtkaLkt7fw99oEZ2H",
  "key6": "3JTyWCPrTG4htsjju42GUJZGQ5t2acw3QnXkGav1ECnhkG8jaChg9z3syAWGemoU4n1wAwiayN4oSQDkH2V6n4HR",
  "key7": "WTZ6sWH1KDEHUcz7DFkCrxouM6Kh5GFvj6EyA4bZt9wJNPrt7LqSfSo71s6Axeue5GTHkbk8m788Ki9dBJ6SGh3",
  "key8": "5ciEC9RhKYfc9KFG3Qmh9mGkTcdtAfwPhNRvoVxunbiVSV24sMXCHA1kUrvtDNkpzTNGcFPT6Euz3UfFvRXgfPKd",
  "key9": "5qo8KRQvFSTRZAGd2i54T3bj7XBuYn18C4RDM5RbRju5h6gLgUajFpvqghcsf7RMhiFnf6o4v4cFkfk8nT1KsoFv",
  "key10": "2CheyvTBgsAWAW6HZePzwBPxAbdSB6NJMNfmBhwKeh5AATG14NQXFjyXRgSJGruWAsTN8g8awpYK1PM6BntJQsbh",
  "key11": "BBdf9uhyJjNWs4dNiPzwhMec4QUDKD5mE4PzudMUeDSCGyJkNQUqtNMCCohow29BbAE9LkJfNnNncUcDDzJUEpR",
  "key12": "QLHDc6baX84hKez4wF8QBBjBCKG8uKjV132mS87woaiHmEoG3rbpRCbpSwGixVzjgMoHMuUo39tkLatnE2AkcvX",
  "key13": "37WEFoegr4HauDehVBXwH4EVCTNrSwqFq6oRfuZiHvxiwaPzsXFKPEy2HLQCNT3mq2UdUWSMSvCcwgrUNTGxy571",
  "key14": "59D9aR7diCua8xh89fsBDARDtE6RYXXu8aUjHqMPL8yDZkJW93KxwoNKY6T986hxan1MLPLuBR5AwWuPwfvggZED",
  "key15": "4xw8pmp7GTvW8soMvmgZ8m8JyVfE6QT4n9So6fY6SFxwHjrEAYqQbkAFbbHKBo4TpYhR9b2oXhMuHSMdfcbdQwX7",
  "key16": "4G5XsUY7wsFApk6nsShxHxmER6XNRSFYbT6RzrEEZAWJyf134qmKZw9QJp9j3kkuzP62kt3ZnAyW5VqUPrzmHDM8",
  "key17": "2vce7q4LohC2SMB8pt2LjGnv2FC6effn3Ucrd5j5b1jwvRbhkhY8rdSwXiZwfEgtTituLS4w1jz5XqFgbaekj1Wy",
  "key18": "YjW5TBXk3Z5nAvMPXY8Cd3dW7m6x68MmprZzU8adSzLe9LoBCvXycj88eJJHDkbxgAoDevRFv9gxgNCV31Ahhdz",
  "key19": "2BzFdEaSpdYdMZBKPJhfQHo5CZb38dzkvdXobSd1mykDYEXnvnqGCsqkBXH3t3BJezgDenHUR8rWYGVzT85sn5vN",
  "key20": "5CafPxXAo6ZF7brrVwA4Ue44Zy4Hc7y9GAw1f8Qfg7dx2udom6WxdyZuTEfSk2FS59a6Vm1bydMt9kAEnhKpye3x",
  "key21": "2koaLGomaJQPJMt7GbF58QvaYeakLGX5MoZxAd9CPcq4cFfyeZkuRM73xKjQ2vLKYhy1ayLZY4gJ7Qr2Xv6ehQJ5",
  "key22": "oUVkGxcYpzd7kiLp9MeNoPKSw3SHL8uo6o7bCy8Qu16ULU3zha5C3LoTWU2iRR2L3SfoB3t7LQVzreLawAL547b",
  "key23": "2C42MeybnnRYqZ9p4DC2orGk1UTTuV1Xa3oDpaPYx3U73g7iJpeibDnHwhY7VCBc3TqDdGCbpCdxdqKFKBEEQczt",
  "key24": "64kVez5Yf8vFMee4SBwiM5G9Jb6k3YGgxwtp4DauxnYM2pEg3BXdcjy1vwVXKT6bLzKJHquCvEvLnGP4CkAbJrbU",
  "key25": "52xzMCujxTXs3SqKGEwLf3kZZymscNnLeGDp3Lr9CrTkCLAQAB6znvLFaYEwJ4BbNmLtQ3Zkaw2k993rWkCtWZ21",
  "key26": "5Lq1sg4B7mn3jo2GFh5vXrhsFZYL5CZAvC6a7LXWARmpy26tFHa1jZws63KjxvGnkWYzCgTjV7FNgrD1tPB4XCMU",
  "key27": "4pUrKx1iS2pUyxu5LA2eHonwVapQstTea8RWsBNUA9UWcRgnNrKfVGKs9nJGzTQNrd7z2xXr2nPZ9CfU1CbvLdD7",
  "key28": "YeMvPGwf6oP7K3akr5cjjsyVLnFHJpLT9BZQkXnoQw1nUMGeHUCemepqHBYJZtchXD75kN4B5dquvpgwcm2NcRC",
  "key29": "3J7E445ju3Tr3eVPsCnTmF9JTWghnNNcLcZV8XFW9hgPhUyHnGh2HJq5XcBfsZM7DKrPrSYDLi7TA6pQMpBoPjWm",
  "key30": "3ZMSV7EPawodfztpzkp5eFQNhtsE9igZKvpY95F6nr9F8TjJt7k3yp4ux5gP6Req9QcL2B1euS9wtiwAadyf2H2A",
  "key31": "4vFqXkAj5Gy1fPub8RLUERLzkQjeJmDqVLxax3ZdCr79zEsJLMjEddWK5ZVkqaikFRDLjqbHXQjzKk3HPdpuXz2f",
  "key32": "3xDsLGb51d2EsP2nbQ4BmMuRgskLkouRb1jDxLqdZ6Pci1uuHBFFMcGUExNJJ53TAU5hV9Jnbzs9vF4MDdcvwBUP",
  "key33": "4uKJiPTyx3GmCrp8j1mmcqrBdN6WowENhrL2BQVgED1wzGAb8Ui7iK9j4VcoUhW2qwfnyhDVpabceEjRjcngfDUd",
  "key34": "4C8KX1JLmYYVaDZCE7w4DRWuv8k4bJjgSFWikjjv5WHiSKAypju666AUQgUNGw996wfUDqKzkBMLcE8ff4PKNmEf",
  "key35": "4YGVVDfxzZfD4v6XXPVc2SZXFugKdY8PBsxFt5eoZKMTnBsYAaYAXD18VVvrxoLYitBiPfmwLYV1NrkqKramJYJn",
  "key36": "2KjJPAews1VTHbeDiAAxsLkuNbzVTwVsaLK1TW35fZJbVt7fw9HQSD9N5UVjDXeYnUuXyag7hXTN55JjJyXqC6p9",
  "key37": "2TEZLAbQqw4SyrRhDaoLashk6P3oHNxhkEnMX5HKLtFxypw8TdxmxyhAB9gLR1pkXStN849UjWfURhmUzEFihk3n",
  "key38": "3GS2gurP6pacSUnsFUU4e79nK2HDyrccZb1rjcjtBkSgdyswtAemHuWNBWRQCWEHAp5bxGNdXEJRjyGevpdrCahD"
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
