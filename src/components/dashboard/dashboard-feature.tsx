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
    "1PNNSLWum6c32EJXPNqn2raUXKnmKVgNMPEuA6qbzdEmDHH3z2Je9vZnaV7oAr1h2hNv4bbYoDUgPkcs8AKGu52"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BXYmdgbVZK4TUGHLdp8bsMZtJaHiSaLo1wtU8eiGpMYYtMcu471GduuFwrU6MoW6XKQ8MD3K6fnapXbJ7UgZzzf",
  "key1": "4i8JMnzQ9TEVG2MLhSLqao44oorxFYbGjFX5H9RmgwfS7F9EiVs4xrxkW5L2CS27gvqbHdixYnuSayRweoRDybqi",
  "key2": "3t1GuCsKb3KUjzVbi8WpzUwy79opJpxp6vMuUSMEpBkcknL8jVqpmLQ7EHDbtkeEktEXiYsifmDr9ZncaAT6Hk5Z",
  "key3": "3zANTGUaEoBnqmsKKx1tNyQF4VmZ6dsJcyjcdX2rNVALdeMFjZnHeXYteeGLL6myEgBujvTgWr3Sbnwhpu8gTaJ",
  "key4": "4R22qEWZSezdPViwHdwaGLJn6QtiUgvFk9NxzDDB4F5xXiGc2g9BP62V677UJM2PUPVJ67X9kQSJE5w17sbyRpkG",
  "key5": "3GPLHVTgY1evkfZMaXinz2soTcjpf4E9q6f6e4WDGGF4wDXPxgP8oAFd2MbsWufEyhkB3vj8XqLS5JUngZ7XKWYb",
  "key6": "31t4VKhUjdKoQweennBSAZQfgaBUmuejJdRsEGdKSZ2bnHLwasJvsYmmJTJ85Tvbk3ALDVixFegcKFWzMu43eXFL",
  "key7": "21F9MybHhyL11UqBRoacSVwHkAc5ctgTBKsBBPpkDZR7BueAUAYxKpgFA5nUwFe8tz8ivw2hWbwCWhAe78xNmuqe",
  "key8": "4ypJjEK8HVkmz11bHBQppDaRfNGsZf72gVE58YcgQjQVozqKWwRVijh3haKNjT1Vwkf5sngCBUDrgRx7yyeUn3Zo",
  "key9": "5oNfr2rrzkn8KQog4vig26RPm22eWTmuWkWsiUS1iunBA2UZMX2NZ7fppgjgyP9WCD6pJL5DCKEA7AzzkqsDcHw",
  "key10": "45CtK9Pt44fnkGFP6huY5j8wT7wYPBRMxnzcW8L8567MpuzTCRch8DdL8BFRALnrkC5irptrBH323jQkFatNegDr",
  "key11": "519eH2mfiH2xjw7JipJjZnzGAmkhYenx35Ju1htangXF5PK73S2NUdNtVjGJP6mYnwvsTbSfes1drLqtfWcnrEXB",
  "key12": "3jYqU7qi3MLcnc5SqpmMiZHfbmF7NrYom1zbKS1ZeCc8K7uQ7Li8HyZeTtsMU8Y3VV2Bs4q8Hms8DtSoDBDacSBa",
  "key13": "4UHQtcTZJ8fZuqXwyhvn2dVeEd3mH6DtNsbkXA1nYuajNcRtdm8FJArdbzYG6j4dReQt5oNaiPY7GQmoJrqTiaQD",
  "key14": "AT1DMjX473SYzM7VLywntqwfcsmaGEWsAt9p8CvNoyYXhBQHkTuFEgvrM6mY1MxSvuuHgQo76wmhuKCwpK7WzMc",
  "key15": "3YFgy3kg618oSUGsWZ1ujJ1WL9XCVWGwfBh64guTWXxwo3zjUJXuYtUhbfRBy4HyM1YK7jF4xM4YK2PtYbjud7Mx",
  "key16": "5JnDYUeBSRNh1xL9R3bn2rnECu1SBdWxsQbHVpmkCfWZH8gQioZFvHvW9Rg3d54Kp92wisJCK13iXYhdGvAYV1KN",
  "key17": "3z1F2EHWRXVfHTSZEo5DdUJxoCVooSXXdpBL83cf3NyFRL3zMZBsgdR7RjW9xS6C2NqAfV4ptUZ9nL11wm89uT4T",
  "key18": "3rATyMqifzXGkyrsYEAuUjHtPDA7wknKZ3JJZddQ8HzSSVAYwCxc1TjwE4yJ3y1nM6JLNeEoMjoD71gL4wjDiHqe",
  "key19": "1BMTMWVBAcTBfy3BofYVWKA2N8MkhPtgcn7pPZbSeJNAiFruYJTPC8kJLATtkJMoNrqHiHXZTfcPF6aUHsnmb7P",
  "key20": "4m2s4WkyFgC6dhpS9oSHQfE6QMDApwKKE8N7zmYMZ1iqXChFKbWrm4jg44v2BrdxAmSMoWh7LMqFDqtWiN9zySJg",
  "key21": "uao4WWaTaimZq6tjfHkPdHpQVAEEsyay2YvbvPsY69UTzMHJiYx3vPQgMWxyHyqc8qtPFPZXSVPFtvqZDkdBZ2k",
  "key22": "5VNNmgQFUxYcEHoPJXfFnybXyytqHx4FE5uhjJoJGrftXaQi7AskToRpwcpLhJwpH9mAhNDfbU2iDwSxbm6A3Hpb",
  "key23": "32vjUKhMHGUA14h9ibm1FEsz9pC6igCTQUo7y2dR7FE9vptJPoQZL3wbvqpaNnohDn7ZR1L7VY2zVrkgt9Gm7SkS",
  "key24": "664VWZcfqCs2QTEWxbcz3tA85prn4ygXykD2rtEizafy1fFKDpdvnTGgm1a97azmvKeYeYeY2RodLjkKV5FVZNwt",
  "key25": "3HxCWMbmL8s3fXmmGXsZmYnVprsZBpXksRVmvbkyQkqaZhwjYHKLH5QBkZjnoNeoM5FKkgmBJH8ZCyLxPauVq8bR",
  "key26": "31Sswm713oHgG5gPZSRdaEKcvUNy7GWn3xwo8tiUZKqWMRa8nFaHtBeHXwnA3pxJeBnZv6uWf7hRkARcHtQPEBwj",
  "key27": "3NR5YDkPYqsVpa6VpQt1Rs5PMER6YW3NeHhKTvBQSoYRP6gaaL1CmYXX42r5b3r4gadbrKGGQc8RS7NrdyQqNLSi",
  "key28": "2bgGGq9gRtpmvKCJAPRZcyfdmTVJ5qNf5xHHscFJ7Zz5QDQPGjkk9DPM9hVnb9wLhcr1atmwU6qt743aypw96i4C",
  "key29": "2saroTHgXXrEdsNkRrJP9E9kLK3Pz6EtqJW99FYZtdUqcJ1UgZk2bEfBZV9XifpPxkNj62KoeLPCaX3PyVk7UB3f",
  "key30": "45nTLVnaKhcmuwTWbTPHQCgvGP4DvHQWczCS7HuG1QV7rAzTDiNwYVNaBNTyzHqkpfJN1c6yZ529favzLjhCnxXG",
  "key31": "wWWX3oUavPg7csQEorLShNidB79fA7kBioxCQj8ATvFCB51odci3ruGtyV14UWt99SKiSEkp5AH6Jv7UEP9dL62",
  "key32": "5Ezmf2Pjf8auYdB8YQdPStnVNyE4VZbj8jF6n7refTHijQiyyDjEjudivzu4RFz6hCRYpJUokxXmbdGibn9toPYk",
  "key33": "63FHM8Dtf6EXv2X2e7XeZ7zpGT3V4f6fswqSfGLsbPEWT2HayRmx1Htjx2uE7bFD77xj9sDq5hZpekP6NH3jRYY5",
  "key34": "5gsvfgmP4w6JS8qVhFRM9xwfemfYpWk3H6tywPRcfCPYjuNRjXGxxV7ZH2QAE8ixYNYF4y1QM8MgzPYLC9u1Byhe",
  "key35": "vjeuMhmeXcAy8JDrxiQcx2ev66KAjjgPbuWwqC77N1JL4aN1MuD9tuzE12Xx2mk6YVeJnnib3QWQKGUCBctGQny",
  "key36": "54zawxj4cs5j9ys8C7pNwmD8RRVUL9CaRw6cm8EZeAz6C2mryiSYhHNwkBFdNECYhKcF3nnpz1sjniVFHixmVsNn"
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
