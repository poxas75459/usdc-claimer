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
    "5ocrajA7EuSepmA6bRaUtxLDVQWiM3KzcQk9zJVYydVf1w96UMAkCLEAZuTF4dLwYo98LcyWXhtko8FeVWBDMkJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vz8Ec5wdqEz5BfH2goCjMLLJmz3KapbJjTR1WDxXT4oKXDMqZixwSjRYyaPJ79rV4JNbBZWYp78ygFBgwqirESV",
  "key1": "4uHyKbsqGBPMvQwp1QCE2f8RnAVMw8T4VRBe6Gj7dBnEZgx6EZqZMsixw64SXAix8yNjwvgSLRdEgBVJPg4JQvkj",
  "key2": "TPrqM9S96jK9Ae6SNWxEfh6gfJd7KhdjLsmV8nGGT24VgGhBEuuHM5yzKE8ijQgM1zn83VwhLcF6t1ebe56UZs3",
  "key3": "4rxUWMLvXDw5QETCXcGgQw6QCV2stjQesNyfgAbfsTTjW47cheRquiCyAHThoSd6zQBE1jMgDTqHdvYFNe93ueuf",
  "key4": "3rq6bWXcsemq5rcxhwLkp2SCmAj2q9k8SWsCHZa4fbeMUNo79ZJmEUvuweDWrVEQqJozYvdavvEiVwo8RE1Xbe67",
  "key5": "5N2zTTbTwdR29H28qB57vNxZb2metSyLpe9jaWGT1fQYjChME624wG21ZPQKJDEVfQNu3YhZ9P8hHkRJ6rjM6cX3",
  "key6": "5eHcPdZ4Yd7BcKThjpLitSsJahb8TwhWgz1tAr6qoPbrr3hYKfLpiTBHpWo7HZYN81wQWDo3fUdtn5w5AdaCT3sQ",
  "key7": "4XZKaBwcWGaebDoTjcLXCbmKJBN86rnTjE3Sq8sxZuB8VevYHLykZcDSHSgCU8Mr283BM8ARjLjtL4oyENZebent",
  "key8": "g2WbjfvTGKZoihh5YDKLC9UAuvAR7uKLjxM4jNWcXS9hvuHAQwMj2o7hShKpq7vdkQcJJkdDgZFqa78aB87rU7p",
  "key9": "5Ka15U4YRau5mEkdk1AqShtR1e6UZZJgaeurXTkYkpfXoFk99vpjqPmUGHY4r14XUNpv9Z3kUgkZrTzsR5bcQRff",
  "key10": "4VeAX2xLJfFXPM8MfMhHxutf7kCqP499GsD3ua5XTfm9iLj5TD1ENDYvxwQCEYb8ziUkRe6pPL9YZidSZbLVYGjK",
  "key11": "LSW4D4fr7XXbUrXq2QRX2923SjxuidPKApzbjux3hZrG68xHAHZ91VWVV5GXSxPdzb2DyustZSZ2L3Fceh1kWep",
  "key12": "SwAurdLcRxNYRP1YrgavXkn1HKWqxS8Vqu62kDsed39vJr3SEuZ6xsVd2Ks6fgiKSeYUAVHU3Xnud5akzPjq3B8",
  "key13": "3oyZUukLxbeXhRFTxDbZudrM1nAg7dcLmFFynfSh4CZQ8X4a3mwcK5hHW7BMaFKNFk3Ed796ffX92bjb3hqUszWT",
  "key14": "3UEVo71r6goXk3BoNWe6QNWq1fwKCXSAs1JExJzrg5PtvxZNhm4L6CCGWe8t56ZYYCMSqoZEaJzu1rpGiDNLdX1r",
  "key15": "5fPV9tSqtpdREuTQ9JxSbzhR7jqpXCUAM6DKaMTtZ2jQ5EvNw99Fki1o8qXnxDhFZtRTBmjFyhiguNC9fewTQd7F",
  "key16": "4uDxXeUPLJYneNtJdrRiSjgpFo6NhkShbT2jzxSryWpfmcRDngJGp3jh6S5DUqj2GYigg9E6qvDBoEYrDyjKE7Ka",
  "key17": "PceFuHB6NBTbLS88FGABTkxtQmxhJc1EzJwHdkKHC85Ryx1KpXwDmjGgDrcotKZY5anNd8nLV4v6fKKWeCf2251",
  "key18": "4vZy6BdpZ7xMMsNrBMj9CCNYXc6QZJhnUaLcTTAGJyRfW9FZQpTE3wjUZktq21ZEWwWX8TQS8skYFUSNcrtW79xx",
  "key19": "2iEJCXonk1DKmtYWF1AHQWVa1iq7SninF4e13LqE2oNEJPMXvpDJ1BJAf7GM6XGchjxZshfxj6n7rJTLQiJaoRYL",
  "key20": "4MmoXbhNQWkZdPXPN4dvwgYhfBdLemEWWBFoJwuhN7HKnN8paTSSvaBf9v4q5VVQV71ESTNnqYr6Ugbx6ZrBPbCG",
  "key21": "XTeQP7Q5tgMpkh7seRVetxRCjuus26wYZvBnbQneifa27iXtZ4ka4hXJAhQL2NPPhDQGBqN33jPd3fT8H1S1645",
  "key22": "3PVH8KVfW4eFZYhf3p5JTpkhcFrycmDkspA6udd67wMHswuXVUoB6DrnJErfjU2mTgji18PgJrgexgTvGfAAN51m",
  "key23": "kTRupAwc2ecB2b5PBiWWB5T8edS5FePEB6Muw9PG8fGRuc9CATFxovaJJGRSvtqnppJUeRkxfMw2f52kd1RmZt9",
  "key24": "4MgAyRUgstewQ3syvHn6wyUrYXTFXjcJduGBWK31fDATic1nLj2KxeSLfz4zFNHrdDTArq8QHFpFbc9penzCWtzE",
  "key25": "5BjoeRMP1a4t6ejv6kpjo7U2er2CDVgBTg1kyZXduaWuqUqC8gBx8TsQevoLiNGHAtyZf3TKHPfCCiJXzo87zbnD",
  "key26": "2bzHfHVNjyz2B6BZhzzCeYhZzrESoH7nwM2prt7idsuidcwcShyNZ2aWU4Pqyq5VNQx7KBHX886zFkGGapv4iobt",
  "key27": "V9NzyUbr7sWZfsyVWC7ShVkmYMHc4K11DTJ7gaQe3SGn2pwRccV19z5hepDFQ6EDoYh74SuYpAEhQRyqeLsenjr",
  "key28": "62BxxCSDLFmJ4Trr1gGASqp2WFaitbA8M52L79wtqZ5fYT9wbofXXN9wD6ZwW6tCEDpD81hsnUyhfuEVXe6UyycC",
  "key29": "3pZQWanHUhUcMWNyi4t6UBoiHWJCeeGPCVJq6uwVt4ULEhr7eCiSEQ4FqCWz3MHwnCUsxYDacHuYrtrNRXAH72sV",
  "key30": "2bTdMiHqA4UyKRMz7pAGxtKfRowsgQTbStfTZJSCk1Y8iZuMaJKrQy1TbxPD4Ea8UhqoMwUjfcZTbvouBV8uTn8y",
  "key31": "4B7SuHJRs9ZzczRsJNqqNRrQX8YNJxB4iwXnAzxBV39m7WjzwcoLoJuTBa261UquUAaBxXKigiGyn1ALcofBtbx2"
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
