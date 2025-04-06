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
    "5n9jysxrxpzgxvwobc4bYzQuYrLSMpWbcwqJipxgNNXG7bPf8d7c8GPofPaqY9xXgeThPoqYWT8Bsaem6pZhn9hB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZwwDSVbY8J4ueiZ3JtxQ66m1R1YgWV5NBg13zg7uRMAFoh299M49W1MrtQ1EeB3RzKLXRc26NoFewjVfHcmLfjE",
  "key1": "5PVFBbRrGaWVdzs1Nv4H7cguLEYjqCJ31fVd76YAVuDtaKXwxRGFSTDktzhFNgpyz2qaj4QtFhdzQRaT6q2u8i6J",
  "key2": "CE7Z53wpDCAasLRc7UGsj6fk4bpx11Lcg8HWQbfsVGMFRQyD1D4HBWeAm36QwShf3bmXefP1R3hLpypcp1QDWsT",
  "key3": "2FiaTZrAYbqmE4uJSxsizyiD8jkNTb4jhxiu4iH3ggedrH4umS8P2g4cszoFwPWoMZeXaskv355akxBtaUXTqKAg",
  "key4": "3m3puhANXG6o9taoHgfwZoox1TZqVbxeofWKGgzVSogoVJPmkpDjP8XJ6btg2S8AoQZvTDm6qhMJ6GY4ZTFi1o7h",
  "key5": "2ZQ8Hrt25na3aGsp1zJk6fPLKAY5dkmRb8VxJz5GNjyVqkRgjWCf28FUrVG9uMX1anKeZ7kAy2rEhVXZha7frH2W",
  "key6": "2wB8UFZ6HW1nTJSNzjGbrpA7p2wADt56Gx81arha3M2tP5WCzJtSBMwo9XaAQNNkFjGH85Uopcz1Fgx7YYdNXGxH",
  "key7": "4doHGzuBbpPAW7LcnpRnDs9h9KuL997geGZpLn3pcj1QoC5wDa6PpYz1HuHeF648oiptZnCoe9HFHEYYt6nXDeYC",
  "key8": "2DB3omdVXUq2ANGRrPNTi3ZUAaT3vbNRZJwwxoz2d7jwxp1VDcgvTTv6AnVcnNyjdevaxgfzZ2mtxLoCTrDRip5Q",
  "key9": "4x2jZRVJ4NbooN1tmTYn84YMRnzHLBPU3udnDgWewhGMesEK8WwHni6WPx4s1n9BmXPqokdegm4ug4girUe6nJGb",
  "key10": "3oZk3qKuyK68AgjHietW2DprtRYJYCSaRbvB2a79hPwrrzh9w8CFDfB4BTz4jXfgL2EHPxbG7VVu3HVJo823jHCZ",
  "key11": "2HhPJQM6TEsVrcNH9gjdEN9FYh5Fkvoc2MScJzFroxFi4UgaUHnrmtmrQezgr9XHfMBgz8kXpgkAcLK9WvHdGGqR",
  "key12": "FdaHinye5EsjkCLLrkw3TfN4YbvYs5EWgVoDHZCYSvdeRhntGur9zM4S6A6kst9DPPoNMGKZe6xTHHdTbgBTxsR",
  "key13": "4eTPDMT6tWcVaGMz3RPfpsBPxtYjjuL6mwCwRBouVSBDprewViLx6A2FK8tSsmrC3YR126S3GEpRe1fExvxSNrsD",
  "key14": "4myNZtb1GFWyRwbGx1pqWQwjWd9zrcz4Sfx4eSzjgAcVnBXYCSz3tz4odUMos1xG8V4S7ue3eBreUL2YWmPyM1DE",
  "key15": "emPTLsaTPxujvUQ48ZiityWrL6SiCg2ErFADz9WMPhgduZVDoaeBXg3FpWzeSxJ7VZxxTDyu4aVkaPsUzk6Zq2w",
  "key16": "AtrjtvMg3juZU8SZCTTDeqs15JYRscdUtY5kQAsue7r5SpeqHwhJDAYsswxsvV2puMnapkQqMEfHnFe3Zh6mpkU",
  "key17": "5uU3Bbex9YWdJMNBEvKnEF8a57WsVUbq5ZDhq9kCLACvVoVuzUxWV6cCyfztst2h1AytEvQvJGoc6ecQeNzWtvZa",
  "key18": "4sffy5mntyBdL7WFKAm9MABWYr3jyschzbviW2MvN34VeVDpkKHMqKTZLyBYjKH3bC5tn2rm95DgxPqkQbe7UVxY",
  "key19": "23F274vaE5knDYPnmbnPXJLRi9KmDwDPzcqbH2eDwQZdcTWrWKQZxxQy6r8A4cE9Kmzg8vFvVDcUo3WQXYpzZ5K2",
  "key20": "5KTTkEa5zv4Dgv8tCxLapvedi3cAVxQQzfgPrZCSwiMjiXKf7cuWyeGMoAeE9u8rMDnCmvmroex7NZ6XUvJL6z29",
  "key21": "3Zy1rji4biJ1qDbfxVuUrhskboXaVx1S1P8azPn7aHBrwtBrXSYZPyj7qhZcmyzcr6ow3erqpnEA6PRHwKFzTnmc",
  "key22": "2PEDqgQ2qNHGukVvHRThzG13seEA5NpW5rn2JN8MzYvgFoCFFa8weAK8ktvrHSEzutGTn5AwQe36Dk9hHKFuCy8S",
  "key23": "NoVLCD3FALXs8iMwvmWnf3DdF6DxsVbnRGbc3mhhCpk9xTKktqFg2qRenBLGyLebgHVEop5ZoGMz5VAQFp2XYhj",
  "key24": "39SrMM9ECZpv12gsQjNuUBDavRVHw9dAsCe71GGvNRur2huwQxeQzw674Ma1rwMyd6Mh4xRuWkQkSdzQrGHCUkA8",
  "key25": "5Kh4zs3p8RMbZtSfQvWY72fEBRh3uZocHjFfAB5dBwcXteedf6mxKELK1ZfpVHs8hs2CZR1TR6HniQagFfJzZfYE",
  "key26": "3d9NAgKjPhLefg6R6GMvDe7cDoay9qk5UHwF6ykugpSsKZUg7cGE6LLq8s3fNb6jz416RrV6DSMQ9xDwgDoWLtYR",
  "key27": "2rVievm165cHuYKosBRz2LQ9A96nMzPWLSTR9gBWUshcMwb5GXTXV1UJ56EVZHKtt9UUzkg1agCCMYKa5fqFz2d8",
  "key28": "38XpUCX2NBqHYDScJdCaK9bG6KVWN5d8GuGSdLaDSjbZzaPZDQfTJxsoxUuZbtVvRGJcJspXD5qbPj6YK9kbfWpb",
  "key29": "5V9GfJkpoLyH74gN8yUfi5nYYKegv8zpBccdV1iQCqduqq1MYdAUou9NfeaYXkyh7XE733eHLka26vUWfGdj9u5Z",
  "key30": "4nbWiadmVMcNBQAFFX8TgHdx7RHbbnguV8JGwWs8wNDKFFhEwFUsPfkjdiPAwKdUytBx6C5TAezCLFWueAzgLsGA",
  "key31": "5xUwyK9AhHgYbQeD2sMHL6cjor4mqUtzAt5quFLxNdMq5SFU5AiwD9dL5dfkQd6royUSoeYeELb4dLrNJATVMsSM",
  "key32": "38nYfYGH3xPfNkR3uickydGgoNsVEso5wZ6DuRJzXcJL4UGTY5KzM1aZ2nDQbvRftjk4ycCsA3AZBsLNkD4sR4gs",
  "key33": "uRr1Mw2mNEX1RJ24bcZ2eAtZvRg6A5okP4M77jCuASeKZak6e8MiKbNN3Be56gSwX6TGeERW61fXbhSezK9Dbdy",
  "key34": "nBTXeasgWE8KL6ddTL3MzcszRzNZvffcfyQ9cg2aWjT2jPi22KeK7XbpG8CA9pkCKa2q8x311TMw9hCLoCFYFxZ",
  "key35": "4NMCxNttnCnKmBjJ8Xo7hPtoDbMMv9zv3WSYGa8Sc5Dkw3K3WYsUd1TRzFKo1HaaNDrHnzsSA1fqUmpLNudKE4G7"
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
