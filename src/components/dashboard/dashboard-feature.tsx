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
    "ibvt6FVHBHZknSovUBC1C8X7zSNjwnVP5HvmKbBfB1RRoehtycUnJpAW5xfTCKcY8BpNYYdDtXSDiVeUDzGRumX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MoVb644JaEAKyHQXTwmG67pi1MJbpDThsSQR9yDw5mhsPrYEAacxiZbuYBLBis4Pu7K6HCBn5nLVkXU47Z4nkt2",
  "key1": "5czNUm7n5qBdMs9DMsZsPtXPTpYgheC2ahNUWyRA7BVGYwDVPyPBHR684cfp1X5mhv4nNDZPkFYCjc6iMUm4uJDF",
  "key2": "4joKe2VHWYKs4TqzPWzg9XpJNzA44yZUh9DZk5SdrCP7zaws62pE7NpWKoCFMK3BSzJBfuobkaNrUNk4wBDFSfkc",
  "key3": "3cBhsYdeRv7iSAwnkHWxd47F8TyUL26bLJFXwesyQ2Z446ijpeUsqef54avP1oqFBEH28JnMWq2Gn92AqNCekumk",
  "key4": "vQugAyDaq52qo1deWLu11ERM1oRRrHKKNf2WjZJqaso5tAFeLdnHAUABWKByy1nD5ZZDmZKL666vBpRnzhAqZ67",
  "key5": "5s3yuxPj5DCB5ySBLFvcWV9hcJQcWn5Xm4H2mSxoFb2YnmcfBgtzDH6t1fzXKY24GWzTXamyV77h5zZb6wSt3bkJ",
  "key6": "3mYxqm75FD8LUhQJYRdhgRKMkWeUavrJ1YZ948k1W9BHhLA7uWZgqSwfwiCGiKoEW7z98Ro7hsMESmiTkHfehFFM",
  "key7": "3eJQLxUCDAWfR5vWAXPoPUVzdJCZdXWNbQthLMQctHnz1gBAVqwU7dq5v5iRXCz8prGay89UZRb62RGpTKMn5D8P",
  "key8": "3c26GTC4getWh5GyEMUbDuSyvHRAtWe2mFopueBmnxSAaqB5LEe4bHcosH42LzcSco7pUtDawpKpKBvnxsgh8ydv",
  "key9": "3bBQCG2rZQ8MWDQeo7SdP2R5Utban2tGe8zF5c1Kk8ydqsbbEWHb9u5Qvi4KJhq4HqT6Z74Avrd5EhzTt4Psnur",
  "key10": "31dGT1m1zQAoZnkgj1LqVvX9pkqu1hi9yho1aRveQCTM2oEo4XemECPEH2vg235ybi9fWfTz47RruBNaLBFs89EU",
  "key11": "2U5pLP4uf4AaScW8VfxDx7rXCMWNQNXSU1eNa8s3fwXitg6kirzGrDZDnAZJ2BfbZXbATjQPcoMwRparwAQsGRJa",
  "key12": "PaDgJGWEzYn47BZdQ32ifLinAZhZt94fxoJMwBV5RhRpncYoRe6HWMksWVjNU7p7MPmvztcGbLkAHgcXC7Y74WC",
  "key13": "2P2HQFhFVASx9KShyEop1F1XtXR6Am9KPktxuee17aomdK3vtm7rpTd7bVTwJa8YMVTTmNEn75ppeGY21QRRjwGm",
  "key14": "37c5McnTT6NALH6EDT2hXkfKfTXifv54bq6SAB6snNg3kHko7vaof1fo3CswMGnQq8cZGKvyocPjuJ9ULFmws8ob",
  "key15": "2sQ5PRUGh6tMh5SLhmRbQnuSQPLP99CvWRgXz5E1eZpcxLt1McZYJJjQGfSzn5Ykh9zfuB8oPjNmJdrGsyR2DjB7",
  "key16": "5fbVk7G4KbRX59UhEXTCPQp5qJh7CXBjYMzjwZutmr8MCM2xnFRCAjPZ9kae29pr8ddrYXj9EGq9f8dpfs12Qmmw",
  "key17": "4dUEvtievMbmV8ZMVHKRSGUAWQHa2tR6WXDP84ijMhUtENTnfF57Vm9w9AKaJfnFLQuMjhLi2oEbYQffB7E9bZJF",
  "key18": "2NMZF6hTLtsnSZChQH98UgKs1Ga5Vyb9Jt9tvfmC4TFe7GW6tzZp2UxrbJ7VmNzUvWAe7sunDBNzJghexwBXXhBG",
  "key19": "414egd6YorUjxKekszdf3SYksVQzF6URTx2VMLe5bbnSx3qJ9w5HPf2vDFTJ8xefTz6SK4H8hkMNqMVxBHFYDqgz",
  "key20": "5MuEzytMnssQnEYSxRcSQCkzAfvopaTsrmkURES1LpPcn1PTuPcehbuSj5UQMfwQwRtbBbWVwbbNYCgww2QRGMVH",
  "key21": "7hU7q5PmzCMcMrYBmsXnromrAeMgNKrf763segkNBEQMkMuMMvV6hQpRkabRxTRWb4fRq3ahwvUkQ7FL6Jg19yD",
  "key22": "62wQ2smRbvYGdGDMbEgFEFUoHavPmS9hnufkQCU7QV4LGkajRNQBQ3ZRB7oRLB7mzrqtUzyoXKfWo8XaHkYeaRWR",
  "key23": "5Qggzk5SeWhHk5doU21Wpbnwp6neUhbxMUZ534zRREatZaxLqiktZX3eH1kjXLrvA3N4SiToRkvENVECMsn3fme8",
  "key24": "51Qz7C6ErWMwRP9DhVxwjbj7GjcJJq84XcWBMoY6Prz5NmAfZcLF8YL9dHmb42R18pP6WNhWMtk5cBWKx9hjSoZA",
  "key25": "2j5RZKKxqjqjriqTE2ZrQYo722qPpf69NQhhGCy3MCR9oe3bmgLKTn9KYnggV2pZkuDnPggp9TfJcUZoicPcXCRD",
  "key26": "5oXzFPq2ENEZnmcsvrJbyzmenzNopZEUU8ieummeStWXUZpVFY1crMgJr7fkP83eMLV7afW13qzSWXTw5fRqbdJ1",
  "key27": "28vGk7kXjunhsBnszmKFtbuJEaQXcSHjrHsuWw1TkVPCEh3iFPjHTDqdHfABjTS9HNfCoPMRZMWuyWbkfhXsAmn8",
  "key28": "2mjCS3LPKnmF1nBKJqDbwj4pJcZYEnvxJNyaMmn8AbzCAZF1ADep6vffti2BBmSDwzrAqmgiZp8xRuqTAg5ApZSp",
  "key29": "2xXVn8BTKDNhsQNhjLycmYvKNjoDSx1VHfzKKfWXZYNjTPdB4PYhKQnkJc49iCSDxeub1PwXu8pD6tt1tMHat8b5",
  "key30": "35fEa9uVf49vGjCqe7UxhefRGy6chWvyJG8BwXhLWXbkbtqZPWdzupbpcxqWmFPrxcQzYpXW9BDCPs1K7BpVAEZZ",
  "key31": "DB6wQS7X4XVeRWCUAc3CTVHqX9BrMn4FpxMoC7mdCQZt39VsZiWGigyCkDQ1svrW4Ec5KPSo4bkZZAfoikDXT6V",
  "key32": "2B1yK8tyX9jXaa4xy6UjLyPNVC3EG9TbWoXFiuQmgTUM3TZoEXpo4poHGsn4y7cpP7vMsmiDq8yPsdh6sy15DmRy",
  "key33": "38G7ktT7A3EuufZGvAHAZzmYQiseSCxypBs6nXDMU6NRq9tHFjtnG987ZNra6SpxGzAJhePf4oBrM5WXV8VLMxqD",
  "key34": "3TnKcyUGyPi56kiUk2SorUjzjrdyoDPPZxSVqNzJcyoJTgym1PGzBMAp8Chb5ymyTaBE5Df9M7ZGya8sxbwvyuVo",
  "key35": "2PjY5SmeBrBjCt97QixifJyr4oUMvrdWVEKFaCUZUM9bvxX5mHGAsajuYYJMsY82cfbwrhTfv7s9BXnkBzgwd7ie",
  "key36": "45sVo4bsVfhqTp1rfd5j2zRMpQnpw2inzmShwx9Gbzo9nvYC33LLF9rxg9KoAfJyWXiY3MKUNktHgbbYTEjHhfQ7"
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
