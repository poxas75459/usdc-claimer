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
    "abPZTZE15CShu9T5ZciER4WFT8Yjyr8BPcwHMJuViBCNaPwiFBV6wjcJ9rmnxAEn9jixDu4a5XwfsZ5i8XsxKa2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gpdoK4uBBgrBnm9iD2dScc4nxcGgY3PvwPADcmhdXQkjAHqY1U4sJ2x5K12b5SW6dRJxoaeEsMDJPc4zkBrYJbS",
  "key1": "2EzJ5i6z6cJh2YUvJr4LnqwRoAZaLhfHppbvWYd8vjQY1BDTzyrLKWvvXQQtTNmUqUEJADdWjn3jvqkEY6PPRDra",
  "key2": "49z46FamVpe1CzG8f7HpxN6PRfhekDk35QxGkPPQTK49gbrHnpRUsn3eRYfTtgmBPKXySYSTF3kRJstwEPT9Afh3",
  "key3": "5q7xwRvf9FKNirHvj3FYpF7MzXTfUDTKs69AmdpvK6YJ4r99wJ9bcaKG1K1pSxnMLDVavoUUypWiZ6TTjGj2siAK",
  "key4": "rsMDhnGQ5bEEbdfAPkMcM7UDPLVzyRyS3qVzDwLpJ6FTQn96jjT3XSntcNdprHx7abc3n92UQJD9N5oL8hz5bPR",
  "key5": "5t77PpcTway9wBiouFeiCJJPs5iW8VC9GwwBZtn2FpiQh6L8iJrc7Vd56QBhZQkunKBZLY1u7cYSYXUx4Nz4en1h",
  "key6": "2uqeRZNd5Uh8GQzY3byrxmEGg9WNFYwGSr1Ht9urDTLHSVLdDqoLv2NjAHeCaR4MNADA5M92yxWZwnqTf26oWfb5",
  "key7": "gjhwAYcRbTiSyR7ZN69LezZ1ewVwRwsVZRPoBFjSh171gmWGSWNPKfcB8ZqQ2pdr7ay1wiJhaKcaCZ5xt11zbMX",
  "key8": "48SUNhLfXryfnM7hCUNw35N5iZfva8tLJSkW1WEpUfkSGtqDeuKcgwDCA1UzQHDBccRDoDfvXbJboTudYt1iUUwt",
  "key9": "2RBp27mjdAgd24fVrjNDhDeFMdenKD9833iTCAdL3q2Hh44QbzaYo5wWPLpjHsiEURVECubwAFFm1ATXj4KCaau3",
  "key10": "4VUnm2EURoCJUFkn39Lt6pnu1autSH3phm1btxXBMzqu6pcTsdypujNqzFy2D78zKvCKT7PBLaHsELdmJ6KSrNTc",
  "key11": "4989EzL5yy3vSsngQdVE1NrZb86oBMZiPXVXNaRR6FJz2uwJ1aePeH6H4EGunAJj3PgQPHxwmbCa1FqJYGD2rate",
  "key12": "3ohDLRvCbxch2KaGwvfAhgB7HgQ5yUocYUDqgRqTvs6yWvUX7qgFc3jH65TqM4Uhy4ZUzjP1pN3kPekZUrhNMt8s",
  "key13": "5JYND8W43bczoeRqEuUsTwYiGfiLcm3AAeGeeegtS7Xv2TBitmjmZhxjY1aRt7ZphN8z4kVAUwxBizYpQoiDoaL5",
  "key14": "4TX5sDb8c7MiJFL4xyZf5EMkgAZa4YQuXBWFRgRQQ5PpsxusVHqT4hq3A1vCi4nmpqN7y6bPBsbzm7DK11WnssCZ",
  "key15": "43kQjcHq7DSQ8CkPXXgaSvcEwhDE5y6jNKjzijQwaEyBFehV7G4nG3jwPmimJWDstD2RymnxmF2Mr3pCFUeWiZkn",
  "key16": "4iLdGBoU1fkdMF5d64X36PxESBJeZw6nQh5jPyMUpA5H9GnsUfBYrAgCdenGnBesnX5Z1GZupJ6SjRsBFoXhHNLd",
  "key17": "2Vnu5F8FYvB7y8rUh1mCX5cyBVLV28wgnMmoAGgmGbkANvLdQM7qxp4vEtPqSa1ExmgAA6JV32qT6rg5npa1AWCZ",
  "key18": "4jyL76VtRFkM5SaaTrLhWnWoxFnz3w1NNbzKM55h6HD7xZTebaV6rQ7VxrCddN3xvQKsm7395eqPNhXrdBLvSdFb",
  "key19": "5c6dyB81YosvH8dfPFs247SPUWnLGKmanbti9kqSua8BPmxFWhRNgJrdbaBd1dA8LuKh5gQCkFeMGTAtJrfFMQu8",
  "key20": "5qCB6XvZ7mxAh7r7G1s25J7LBbnTaxNsuTznG1EbiUFaynQE1Ccghfp1r9EfKtuuve53K6DgBDhB1Jx9QBuQVnyG",
  "key21": "JwJYk4NQrcnH1fqpbMJYkzw6Z12iJrrFSfhixUx2KeHTb5SwpVVf72SX2a5i142p8B6Y9k8CWHdtA9pXvk1ribT",
  "key22": "5geoTiPWZWmcEUinkd5HDs6VkyePHnv5peUzRgrkB6X6WELVemtZB9EW4Rwevm6e4fAsH2TKVMYZ8fAKCMH72gca",
  "key23": "2wNda5UCzpwrbWHa8DrFDf4TpMhnfrduiLjT31UnTJHPHC9ZXwtxZv9vkV5fnYbhuts4iAfuj9rLH9Ss3YLwFAEz",
  "key24": "3r1p1RDNHxytbN4ZHEgcx9QiegtufFeQ4r9d11xb6JuceNaH4Y8NrkzGVqYw2qt1mb3SxagVWNSMn2rdzz4oqcki",
  "key25": "58fPe8nYzsBpCVFLy4GrPR4e9jtpXk28KCn9HgJhMGfmxE64Zdxgy8p4WVrVoVrwBT4nGs682FZTodVzj1GbP5LP",
  "key26": "3HmmdSRNogaP6GWWyNSBfqC1A3cwBRJjUgEcZckwvT4vMeRb5C4Z2WdDvauiDErhZFDuVbQegQ3oFNZLLRABurbw",
  "key27": "q2wwNGnGE6SfSxfJRSoa8gyfMxiZRaXbFzwviNnRfGViqvp6D4h6oDVtiPCPoHWWPJRAvjPqKRxfTLHje1c5cu4",
  "key28": "47xP9KufWBdveWBqvPGD98WX3K2ttxeZSHdqBr39GxVSAUNDfRqBQLGCBpcLNFCtVG4pAZTfYtrezAnYZF1iFXHE",
  "key29": "5swZ9xKhojVfUrU9R8YzTJFEFGVytVztFi3a14mXMC9RGFh31bqjxUrRqM4t45mmNGsRqdqB3BWh29g6ovJrUUuY",
  "key30": "Vt64wUtETLNL1H18G7PdaZjCTQtDYPK2ThXpRDrWtCM4gKyuY5i313GEJSvmci9BnvAXnDcrLFBiK48MJCHBbwg",
  "key31": "5sLifk6aDvEfWoTYP7gC3KVMKZFU1bG4jxjMsBUFUcpVANR1vZV8iDjv92mzaAQgUgEbvZWKULDG86axPXUiZ1DG",
  "key32": "4A69uReFvP5ju5jbCy2BfVH3XMoh5wgTasPkYzphwJhm27iQeuYpzc7Wb3VX8xiTdJ3whCZPHE8qMRE8cQtrkpyq",
  "key33": "32Ht2UxwPjFvjXWdXfxCYxNmjuwAoTszDkYEyhmBkUFhEFJXpF5riu16og8vtTSwcEVCai1TMmvKQf2V49ms1Ws7"
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
