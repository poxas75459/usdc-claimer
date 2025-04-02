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
    "aAf9NA84JXDByYpxFjDoh61kRRzY7SQv2ib8cNexK6BSsTphPXEMEBEckKDnAX6ypmfC9MVw1E39QERzxPLXnFA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a9P6nB6SGUTKhHy71Pe3sf5V4pVNT69czYqrXTbz7iMx5rEA1DC9JuLgRywzWK2da8ouPpV4X4eFJHFbzcPrzJE",
  "key1": "f41E7vZMrsBtZYUwxNT75uUo49oAT9xkmrKEapcwfFqg625Yu9j5gx41172FsHuSQ9npuAcXRapTwF62bCbwi8s",
  "key2": "vJaGqpgWgx94epsSLk5xnmJYqeeau2GMRStjnNTkE3Jcm9y6k4DMWW4QHC7SvDQBoq5mcjBGiK6rNbG8LPDKNCb",
  "key3": "2guLo8XBe8ZBJAwpfzE5Dzk873gKuqceFaiPZfa7wpgv9eVUHGQTFMLKceUeAnWHanRJFp14LNRA3ei9ojNHuGDJ",
  "key4": "3sLmnGueTNq2SsHJzDvN8a45CzSRiR4HdCqSHrexgxEU9eUYJiCNV961y2GeyjzxoscfRv4nUctBGznVAbiYQM8u",
  "key5": "61kfwaJGo2F5ytqiqatVC2etfjK6tEr1ADBoB7UwaK6ojgEnNuzjKMXQXGzKBm7fbrQRC3G493YFza5FM45p2PF3",
  "key6": "4eiEXD2LL67Bu3UHQCTVfRASt29gpf21xwBFSeHpLH76G9BqjKcUX56dR5wdXzcvpLoCKJApTC6ahh3HRUFunq3e",
  "key7": "3u3Q2mM9CZgJWaSHknjx81kBiaSEzaLVxs957ZpqxVw1oYFqV7MXe9zumDdviebsYJYKr32G1hrmjLUQX9eycwSw",
  "key8": "3UMnxLroJDi3wZbyr3PzCfzJgtW1qkTgjh1z5VofpJWZPWsHq37zutzKPa83gRPamEVLoKpwAp2hnwRM2CcgGmCX",
  "key9": "241Y9t5bvHQYe8gSAQPfJXJQxe8tqA4ZpJNYkc1yP3eoNxxdSVvgKZzoPA5qV1dgUVSjYBpUPNUFSPxQmGmfUMHV",
  "key10": "H7zbMoVGwTVKw5cebj4Y2eBvGqjw7EiCPyLx2YNpTwiyHnYbzhUEdF69CKdDuZXE61inQL41q1xb9gki9foVWUE",
  "key11": "4VnBTrYy61pHeoDyAbUT6yK4p3zD6PVLvSdGY8otmrEiTnUNEojbFGHna7PBd5XCMHq4UjjG2JTTcfw6pqDHDzp4",
  "key12": "3cBHGgmcsgxmxpsKEDToeW8pbrS16sMGhf7dx1jADun6zKr6zP7R15idjR3tHe67fuspRzgXxtkt9VyMpyZ84gLt",
  "key13": "7uaaBNwRMEsEobxjgE1MxQKyGPkXvTveHUFw5nZ49L7tC988efSGJAu3ETq8FnKC9BDyShirZKPnxfHFryVpeka",
  "key14": "2ACHPQNPV1n8c1U4Q8xxZbmqxn3NQh38JgZUs59WhR5EWUwGw9Pz4i4DSp1ZRtmkRHY3q9EMnDrK8zKnSMarTP8L",
  "key15": "4oTWAVrWZrWNP93LbyBz7pZPFoaJEEmwEMTtLBMHPEdDqePoTZTjGbjWXS7YbhBhSGXmAE7NtBqLuBLnvLVgdhaZ",
  "key16": "31pbhqS9QGFB4H8SVzDZJtoWqT2DjQyxXbWEY4R7FPzRftZaEiYgmuMpNvS4b1e7nh3iNKpZJW7BTbm1MQ63JnGK",
  "key17": "V9wu1WfimtqzJRwMGWxPZ6sDuohrf4y5FasukRn6SspFrg5c4Vww8gtTqHqBwx7pndRLGfXbB2FJPjJNYzNPCuL",
  "key18": "5An5cF6CKDx4yrmgahxDKqpqWJGKmHfVm2JRoeXdFxjx9tuyGZJgjmrHomHc7fjQhoiR273MdWmYHHzh189Csb93",
  "key19": "qcscSSPeZhTLzw9VYyzhrWj8p5BB2WR2fzdde7u61qF6h14wcuSXvGhTfs6fUmEz3pMz7yXTrxzLGiyyhH4EaHh",
  "key20": "2TXTVnfFtu7YivYsmMSgEt8hPAHjA7UcQmysuuyiJA1jVkQ9DfJb8NH7MbRAQ6jYZ2ckBUc3TQyRYHQkW975cWAn",
  "key21": "3viTG6Bmbvx5kn8B7h4tc5QQXV9LV1im91WqvV5UuQ1Bc66j4KM9see1S6d4dRnqwPwgWfuUrkRQ4iqH6xdSwF9d",
  "key22": "rmtmNfcjLhggd2mA2XBhpevvKD84tPwrbFaqFMJ3Mx44ayidZJQpyJHqC3E7SnDJm8K6WdyZKcxu1iV6LhnSy4J",
  "key23": "5kgCZpEV66Sg6wMTjCmUzhbmsXB9XzX9tqFdNgfZWBdmLRDU53MXULjskRoWrT4TgrwWTboHGt3ixXZvnsmyPSDF",
  "key24": "j1vepYFQGtCiPS9X7HakipvttsZRzExSKq2js5h7AEFo5TxYhpAgrxLsYT82TWSdihSzDCLpfz2MPhTLepzcEd2",
  "key25": "43ikyvDM2RC8CdAHZvXSSBKErjyhkFRAwbAxvp9b4NxRyi2SnJCPDCtL5iWWRVwbH6duUt5nudRejiV1qpBMuf7Z"
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
