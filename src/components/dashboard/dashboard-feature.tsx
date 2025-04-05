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
    "5NoYSCvSPoAHxuPtNaVj5iACRodKEAE1zBLEeL6P1xt8zqPB7byPWVc88TLHL6mpC37ZfnaWUBSRXyWWtuT4PZaG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sKpTN1CuzM2TeL6w9jabCrMrLB5e769HYQ6EAzta5xouBTX7JybyAn6e9T14tixUSZe6agfJMEABbDNYj5aGkEz",
  "key1": "1J9LFi3XnLdvKmc2ykKbTd5EJGK8skq7eYES7LehkpKRBZQwbkFdq27jbt2atpMt7d7jjM5Thq1vUd1x6Z6V2Au",
  "key2": "2YgH6dJAsjPvJEX1GHju7fRrCe8bqZaqVMnbL8QJaSwCYpu71SyYNqPRvDxK6axKJxcsRsUjYyd4qtACAQpjsRJY",
  "key3": "aoREmNtZasx9YRdsbwQdDto6FX3n4aBVyi5kXJKZLHJTAvxEvP8UN6hTgkXt1NoDUnNPaLwzUJv5W56DXyt4Pgw",
  "key4": "2KomSGT84ktTT2ieaAzAZdow7BskrfvV71wQGf4ipBT5o38s9JeyukGRMJTFe7MDVdNmRh3LVqPzG8LKiPQTsJt3",
  "key5": "4rFtLhM6eXPFqhds5U1ejcDxDwJD56y4ADLW8ShpuSGRwW5FbRW5NpjewVZDUZKawECawnChocXpHB4gRsuLkzUL",
  "key6": "2Qb8VMLgfh3hJa7mB2PtwgYG1mWvQwnDJhg7YkJiavMNZ7Jtfer39qczAUoBYiLhBvchKBirwiBNFmxrJGJB4fAC",
  "key7": "43HzwA1QtkXHgjTdxvkxvf7sNtxbKEAfaieQe9LUtSuw5XzH7kLLVeVT34ZSZ7YabcdbhkjugXyYeeEE7xbxJWRQ",
  "key8": "4kRLtuVqnTvG5XCt1m5d2x3diWPmCUanBAV42C3tVxqx71Sx8nm17MzkNf5CARufc7azjiL8rRqdmqvtSGYDVZTE",
  "key9": "2UocQYtRmVFbzkNg5Tmqfi6YkdHQLDSZYtaB77KddQHvUWkFnAdpVB48inuwiQCA3h6R4NYUGe8trvSp8Kn2rp3C",
  "key10": "3qU4eRUtAgSpuFgrpPnfrRygAx7QhnXjRbieiRkGJf9UCqdqk1Mwcf2PfHpEJaVwWYfQ7zcR1UN5dFSUikVz3ZKY",
  "key11": "5u8ApXPCbbgDwGZx2SFSnZaPoS3HrdSZPPFPKHMBuqyyuQdDzm5qrgkVBCBUDv5MxYEuDXzo2mpo11fs3tJ3DC6K",
  "key12": "4BBX55XgNxXVyeMuSr3sb8CVM3NPgvfEVL5uKq1RfW2JnhGuuZ8dBTMk5Crs3gRDwgSfqfAeMF5EwN9ikBqWVaRy",
  "key13": "4YNPf4bxJn3QXN1dSq3qdoQiNSq2TcWG5RwA9HqRmvGqcxVzohDymkZYyGMdnGW6of3rvuvAJM97BntTdyjfw2zV",
  "key14": "4wYcCjMK8yZpF8sy6f5YqDJBc6TvrJ2RMoCWXFBESDHHsuZ3gDCLeEFLF75S9U7r95anL6QhB5qoobzHZ73pvHzh",
  "key15": "3LezQF2BafRm3z4f9i44dtWNK5mSf7w8Py3DyVp51y77cp3kCWeFjqFQQ1RGYvTHdwqTWfMnsS4tD7eKTPfyzYjF",
  "key16": "4YQWPKVjy2P2NEfswA1x6YmN2i57a534RoQ9T4Mtas6knBxTbj6kFR2JPxdrvUSXGdDyYhyxemuBGRDQpG1Tvdqy",
  "key17": "5GQFYZgdZXDtc7PWN6G7RKxkBDY4xspWfoEX7wrxYrzM86t8SjWU5tAdFacysgYqf5vopjNosvP3FaFS4GpXppxz",
  "key18": "51JCmV4Y5GVoWFVYfxJdS817F1ymcNERSsSLoJEB4DfVsBNVgXGzgYmhr81tx9EKAtMisRBNQhgAeCDED2KJ3Gur",
  "key19": "3JWqo4wPPpGmbnwJckRAqzySeb4zoGn8814extvTQMQi2Y1jR8jGoCGfHD5TUtEhTHfDa3Qtij5XZveaUE9mAw8N",
  "key20": "4YEbmzQYrwh5AKSfCQD1HsFAjgYfNJt8mo5DyQEqVUpdPdbDkLEznzXg5Xni25SHj89K7abezXnYKhwPVDHQeYb7",
  "key21": "61YEef462Z2GMTeuq2NJhMdnUruFMZbz9LZoUUzDKphhd7jkjmqYmkufe9g2kRWPQA1rYWEyxEqgduhZJAWra6v9",
  "key22": "2c37Lty7ABDmqFVMpn2vQPJaea5H7pXQXYvCEju5myeJAYnnZRjwCqNQHj5xUddKM8rYnxqjg7WmaTQScU3PznkW",
  "key23": "37TRRQjtFBbtiXs3Cwu76FfA9Je8Yq1ZC5eXWZACb69jp6EHz6fX5Bu6RLGJvbH1TBHBRsoSNQCtCJKHb8LBbrNW",
  "key24": "3iXZMNbtiA4AiDyjAmuiMfDKDWodheuny8x3Ce4vASq4rRoc1qTbGy5RHJSTD7c1rjXv5z4mM8KqCepKjmZDX9QV",
  "key25": "5cLeTWg9NFQJsRYDNHchqkSeBp8WHTmk65dBfWHsBJCP3oEG5BmzMCKcG3HR7PPApq95LxbNsaKnvHiNxYKLn9vx",
  "key26": "hhqZfiZhC6YVHC33yUJcg93FCTPdUUTa7D1i7vJdSoHuPEpQXx1rtSs44SKqcKTtiyJq71MPFVAgub8RKQj2kVz",
  "key27": "3JCiwNRn84qrUWsZ4zHyNt4MoKrYqpxLzxnWZijJXwQD5ep5gaRh4RTYwP1BGhCLaehYU3k2K5Moop8QmFkaoRq5",
  "key28": "4NBXDVS629WHSvXRhzGhpSNv8t8kSAN9aASsdcM9LxyFZC4CKUibpekcaQ9R5vy3CHh68MWJGtMVPx9tPqoyQtw7",
  "key29": "5voaW4rc8wub7HnHzUCFNpkRvHjopbNgUaoYq2yHCnyBETsHNLvtYWjnDKoynKoN4hCcV67Lhz7eu6CzJFbGhRCS",
  "key30": "KF3MLd2jc5oEgj3tH3SEsccSYaTMZigy9idNLnZ2mcYJFhyNSXbh7LQhZ5kjcnHixW5qgfKLZcKB8DsRoFgSL6P",
  "key31": "Bw8hFHw8bcrnAxawHY33YEzy5MtLH3riutTcLMwUPHeqtEjR8v2zgahbuEzKroSqBT5iwiUscaeJ4qUuSMQsMLQ",
  "key32": "5eYy1CBn1vxuak1Tc6iASGWfFbG8uXET42Cd8AnAPN2uqKmGyT9BMx7XCjVAQgwFMuSvfDsV3sJGQ8NxSFBviv9a",
  "key33": "CYZKtEkEAMZr7jGnJ9HuhDcw8HZEMgF7ARPASmeQe6ZxeWmbexgksh5iRK3qzfXjQgFHaw2HNVHBFnLZW1D8wiF",
  "key34": "3SSe5jMAzJ46sqV7R7yxp6ZAAa1mdP54nCAhqHsWHCGocBtEcw54TFyTTARRSVNySJXkFPpvcXANFe8BJBcxGsMD",
  "key35": "jXUeRNiNqMsGVhpz2HKsLkJhyDnKp2RqqMooESx6ZreizaE1ohGSkPBCAZtXQ8nURzegvmCdN7Xgek3L4cFuyWV",
  "key36": "4ASLSezLYXr23WF9Jk8MwsAvtnLSBN3zN2bdqFEHA37puKwaxE4yz7zKKxujGXbkXVKwCYMNuAtJ5MUEah2YppgF",
  "key37": "wdVg9PYq3MEgTm9pnNCS22xnc7qk8bhstnx76vY39nY9epXQc5PU1VfwGhrEgnCXnYNGsPDobsrimRuxneupFgr",
  "key38": "4xqqBnnHt9wt1jeyucYxbfxN3gpVYHq9UvxcunNeQcPNwgNyDrYvoiDCMrR7xqsFzW6m7auPDdn3jg5pXnC4ePke",
  "key39": "3ih8nbh99EMhvXQjyEPwgnbmcD4e6NRWmBZh5CrFK8qSoZhsTurBg3uAG7fT6bcEpnxR28oMJv8Jb99EkzvmrA1q"
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
