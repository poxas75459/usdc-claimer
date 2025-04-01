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
    "3EunewwjdzHPYzRSCELYCs2v2iVFTuPwSQ2aRT7Aq2CLytxT5JVWn5JZHPYsPXhrXFJECBDqJVXY9qcA4JibajGU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fKTg8bTbmTy3LpKGe8CmPmMSKMnFDshYwDVytkc5sPiK8AZW6WSf14kdNhJxRBrM4cLWJBJEojDjh2TXQ5nCutz",
  "key1": "36Uu2BF9JG8phBSGwWRhAeVxqVusXjWqC36YbDGeQaVWLnGUrMx4gLFLRax9g72WsoMSB6imQWoq6f7AmvRCBGhP",
  "key2": "2AFTcaq4mbAHQYN5oDaXN3CdsFAvBEhFQ748JndrETnNkxcZXSNWs3RYFnRuu645uRqxoWxZzEsAmnhdH9HCyGo3",
  "key3": "WMUKYKuo2DjSjXkcFfm4rfSaB6A9Rymc54wixSrVLaiDr4C7T8odsuiEXmH4rssf1nHrdCLVT2y7wZh6SmzAgeQ",
  "key4": "5nY3zBLj98n6eMSzMhwnnntEW4XzNhseNqFEoRGkvB7d3PCD1g81Se8XxdsEGM2WpbLAw6LtevJpLmQ7AAEpS3jz",
  "key5": "a6L34TmuqHeTsa6smuWZw2rRP21J1dk8WLnEYxHBEg2pAz7hbj9XkE7yaJbqpkFmwfJgZHkpgbH5QTH6JnHst48",
  "key6": "3RM34f6RVRPXQnnYSmgsRvKEebZAmtkckw1FyyfPuKuW6rzpRCTAHLHbAJZBMoeVqzNqC3bcjTDPMXbhxSJpLfpT",
  "key7": "4ZkRY2sxgTwVP81jpcZJ5GUWWirZMgAtKjoiaLn5XwytFwSrdyHMtUQkaEcd9BAbXVbEnXVjaz24WSdyHKauPHMP",
  "key8": "3H8cVuiokyRBZk23kBRNQGCXQn43sXFXUk5rLA5CyibPqAXpFj4zKETRTkswB6yc9S9uihP5EX79GSu5HTXxVcQF",
  "key9": "5NSeZQPwTzhq7eFawk3zEEWk96k2wpstMfit8EnNH6PoNZAhY1umFwAdAo853vDQ8AUYFnA4MHcbHGnfoFUdw19r",
  "key10": "3JocYzeCzfvWep7CpYGBKnRwRg5ebRRZYCH8HBvsTyGu6wphkBcvsSR55F4Da4pKZQ8Ud2wBpJrKgxTK6QkxTcHT",
  "key11": "4jrdoZmRRJP3G3vaf1AKwSg32wb9Ft49pFdUQoz8TWJKMjsgoydBUk8QejDGmnwMf3Z6ZixenHpbFqjRxhpsk1GN",
  "key12": "5E1nfuZNwF7nEyAN7TaWf3QFA2E6gprXow9rntfkG3kWtiYFRimqvUqHuPSHkQNjSYCmaDfNvGXFwAybiRkd3pT5",
  "key13": "4T2XRCbdeVFY6m21ts2BqLSKaPusqLcAPZB8xghRLac8ZUzGKhUUKdk5GRg2oH2KXLVDhCrQBtXosfDMockST9o1",
  "key14": "3L44GXr5YAcGT7hdLNm6amHvZNZiAeh1z8XASbUmAgF8ob9VFX5BzdSGT2knKnBZPT1BsUjKHMYkAfExy7L87fuo",
  "key15": "5Cn4wzp2TWYegaGE18iG4XR9r78N5ESPapfVKGxjEB6Ezr6Gz8u8SG3RZvCgK3ACSvFw5aLjepHnwG8K7Q1zkoi",
  "key16": "2KjSTVWQVzM7nF6RLigPhwqJiJPmw1WzBe7FdSM9EMZa5ya5zeagJtNU8vPPTkz1oN2k4XL61wtLRPhTTwzgnqK4",
  "key17": "4SniGz4YUsdw75HoRcQPh9kAAdBhHLhfY9yNqT4egAsdMzYZH2Mm3audLbEL2xdF7GNZZrFLSmug76cyALFCdvxr",
  "key18": "2bKRXZD5mLsU7a7m8Jzz8P6tyG2EawjCfFqQYn5nTe8dnkVvaaJBZTPH95dPNJ1tJGRdELu3dkCpZ9JN1X6u5zba",
  "key19": "3jv6Jo5T87KrrPy4SVzXowPdbp6cDxNit2Jfvt3YB13QfJ7ZZAybL8YGk44KXTDDKn5zVxJsFMKv7Zp3kuuqKJXi",
  "key20": "5fb57spHccLsrrbuynFqvHhjLpEiszJgUgd24NcLDr8wFT8VVHkMWynPxzwDvDm5y69Gmu6KSENk4HqsqfUR9MZK",
  "key21": "qJ4EyhuoTx8bhtWVGG8dzXjNM9kwYgPuLvRHvbX6DtuRzunCMnczdS9T4z6ya2QnLzzPRjTYC7Nh1sQk6WwUggt",
  "key22": "5R95nEZFXNYh4fsooBeb2uQrfq47iKzxBseXjQFeQTMDZHUw9emk62u5gb9rEDe4gk8DwT4R7834ahf9gcTkfDY7",
  "key23": "4TGiD43c3u9nBDrrb3taKnCazn7rTGQzwERhHNPiixKCBVscn9k96tQmKHdciKY4KncZvmtR7LkGk39hNVjtXyYn",
  "key24": "4rSKM7AcjJMiaqkTwGSepwGJYrKr95iKwXX13sWqmxstGe5bq6Y8ZZYbkbJwY17jfF3pniDRPd1boaCrfsHmTvyL",
  "key25": "r3ohqDEA74FnCwDsq2CsM2WrBktN9z3HE3nEhq94rrAyU21ZcLfdBWwLMcsZ1JSULiFKqoH2XTXGry2Kw9TcYBV",
  "key26": "4z9QumyEVfougJfLpKaC9TZTwxpma4X8JkfBPkSuK1giH69twGSwAXhp2TcYwAn3DeWpFSfu1ZXkLLPWfyiheTuK",
  "key27": "5UVYuQ43JqvKW4rDxFwn92SCG8EbQBWH1fYpdY1FCXJ2ddLvRhV75Yf8J7CenwmRiTexTdARG7UWxwLeoPLRaFvm",
  "key28": "bgs1KfqEoSF4sJ4zCQ4HXW31rQpSRA2Fwkvf52JKA82DAWqEYZRifr94w7wCWvr3zv2wWemfXCG7VmP2fcP99Hv",
  "key29": "671bz7uy7MsUiPfGs7dywx65QRBx7f22fQQZ7b5js1pdAn2LN1dXyn4FCF879pUJX9ZnFTCsuktFEXu8c4MssFsk",
  "key30": "3VR3QozVTxdE3T4by4sQJ1MEaVPfhd3QNhW2ovFWWYGxD6Bi9CAfiMw5SGjacLT9DjoEvAGqXiR6qk3WrTS3eUrt",
  "key31": "4VPEA69pNcjXrXPsfxn9oF4pb2pcNAPHFGuewZp81d94qxcYxhMDpYP8cH1SxT7jU4nMdXmWjdAGuj8c16Fn6VnJ",
  "key32": "4w8BZRqkPf9Bibh1UcRuSEswNQ942c4pKBdYybahm4JFZBJNySrKHhUYLdgn9Juu3Rsiqy2xSEqUAWuVju3FZ3CW",
  "key33": "SkejgGwU1w93RiHwSSUpyeYYy813tJFmNUJgLJEYPHCZbuWM8aCpv765iJVy4oKDunKD8wvk9DbFYqVFnFAowTw",
  "key34": "2RVTBmuaFpweFrDPKGayqHxHE5j2PNjCzeLCsmg3hk8JYH9PpRitkR7dTXyLksqTib3Uy5f2WzzAAqS6hMHRyFEm",
  "key35": "29E9Ax2UhoURDj8pFCPVJ8Dm8pyMKSXY6krZgZ6Ya91jUZRj23nocWkJC2xyhk54axc79gyYabJ952WEDoaX7uSZ",
  "key36": "2oD756w5H5B1TFBxf5KVoWCmX5B5EvhKCzg83qtMfvxv9hAbkzG5LgoVtEfQPfUXo9GYMJKZv5vbJ71VPUNdYa5Y",
  "key37": "465JWybJ3mh9XSgtDHijJUuyFXuWTkc3SDmb3QWmZjCFJKbpAYqp1uBfurYiYahb9eoU7pf64QciHryRLjmSNn34",
  "key38": "5VhnBL3sYDT7zVba4XvmyDYdtqX8HPD9t5V7K9bj7fFYf5c3wAMYxGQsfr9Z8ZnfbxhxqFaVy99rGQvdDH13eLGE",
  "key39": "3VCzj4DoUptdPQKfE6iCxniaSpAgDLRA67b8HZ8uqqxT9zgiTpeYCZErW3mtNKuWDxXiHfgZaLimx9ERD49Ku7oS",
  "key40": "2PDniGkrWDaA1TBGSfgHSUg2BEWaEJjPqmZEfmCbMQEd65NNPFRVcUw6NAAceQ9HdDcemrKyaVF52zJZVTUieKHj",
  "key41": "24z9n43PJT48ZXNtqW41EF7bBCPAjqq3uj2oRgFeDj1fGhmEUoanDYgiSxp9JxRdSALMgKVuMb6ShaQbQRtFmDbV",
  "key42": "2uZscKHfLxwmgxNQYSs3fE8XHy23nxKZWfEMcR1BopHLUYZ8k9z85V1XyLd4hew3hTd9NAvyNqBok6GVdxL12j7h"
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
