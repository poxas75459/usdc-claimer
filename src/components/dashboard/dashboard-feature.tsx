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
    "48om41wCahPebk1jG5na7RcXD9mwn2LZfwvDFTx4PmPNPCnuzYGwmQmvf2nDfNd5cJQFNdH5QjhqCvdMAzrVC5FK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1ftf8Jq95bthgirwr4jGxETgvNts52syjjHLvj6EmKeMxHS9mraVYNRsrJxREqMFTfLxPx44ZhX35HdJcejASb9",
  "key1": "5zF4isvVzhARqvM5G7C3GsFfnKB6E3tcvXgGwJnN4P3sMoM98XULgjqno3E8ZBThZE5tZPbzF8EaN2e8s7ffjiqG",
  "key2": "51eBnu67L7P3LYnQZHFWGyBTaGppUgpUepNXSjwBDeY2GkkRCGrtA992QkkSBdscxjCsHhYtRLKaXY5SJ3tsNAd1",
  "key3": "5pCQEQr6bX3CtdzqfFHrmgxWnUu17c6uFcpjTXt93Tpmn8cFhPhUmQoifJDbLqVHECUu61eQvfcZZAotiwKc16uG",
  "key4": "4eaXXqKombBe1zJsTn6SGuC2jS1ZpZvYpmCr3srbPEKaCGd5g6rfPJtgvvxTzg8qxDTQSPZFPNkk1npFyce9YbTT",
  "key5": "5qBbhk6Xy4Xdght9VznmwNvXy7akpw5Wqfn47kPD7BhNHWJLw14EWfRCUeKrLKZv4GUA8SkqHvWV9sXQibyw5mEE",
  "key6": "3cDV2e8Cx5d9eTEdpawvHEEsrNHybXWbN8QndrdBLDpkNXYgkCgCP4rrgL7DQi7yeBQHM8vroijzxaaNwreXyArA",
  "key7": "5jLxyqq3bpnrV89PNfgAwcBLj9HUjtXN5KzXAHjJxTrq4ACecPu5H5yr7YrizNTztjuDKQBLwMdRKVXN6tXUDhgy",
  "key8": "4XzgppUtPfKSQrHW621NbjeExAAoWkR5GcNdVJbDQaFNNSZXK9Ay9KK8aQqobpZUTf6k1JYpowZH6g1tySQut3zC",
  "key9": "rYkv7166MGZDpwzH7vG6AHGFt7RDtayJ42NUJjcAMGRptnyqpfqfEiw5HaPYrk8axxjmyWXyDpt6F2RnoFUUJ11",
  "key10": "sArDZP3vxYZ4ukmwHrrEP3Y8ym8gL2WaiF6JnkkqQtvfh7nJs4q9dwnMk2ZjqdqkQnXL45FFQ1x7Rjwb9uJxzVC",
  "key11": "xv6JCXSWf4EKd7teoH5dYwbQicMaVWU3ZGQVfxwnvTqkV3qcdCf4bNhRDj45g9akTngra8WFa5Pu7gtaki2k2mp",
  "key12": "4zk8UJB793sRLU7n21opBqKXvNsuTEoSFjSjAXD1WPH63x5bcbxQ9ex4B7pt5mpy2W2LwsGkZgU2qnChzioVa99p",
  "key13": "LchQXzgZLDYDZXi4C84c8NJStoyshAgGmvcen7mRvXHyYXuz4465U4mUaAafDUjSNfohuPhk2FbepGytiWcNGMo",
  "key14": "4w9NZUthvPcoZRLXBdbwZ8s52FcfTiVJJZp1p269G8nCF5JrDbuXJoTrWNGpbxc2x9FbKVNpBRNHJA74r641C9nj",
  "key15": "2AFA26BbvQSWREt2739E6TRNMVmhzT59uTVrBH4yXAbVDbQsN1KztXsCMsqCdi6rwH3vrxuY1kq7VQFTwxeVKWaj",
  "key16": "4QkK3Vf38QvHJLPg71FfWBxSGjsW65Z1bS9hBFim1mWxjJCQMZ23S9Uq9qVQQCAuCcyufCUnQpbBHzu298jFm5E9",
  "key17": "UpRp6FRdwSfDRW58J48oresAahYXX77aAVTd7WYChD8kJq7H983DRxYPEDX1wY2TRez3ZCg3jBAVArFAVSmYg5S",
  "key18": "5tg1TGdUQKR3CeZn8JPUshZBTeLneKJnXdTQ77aUMWD2aecLpYcx6yLBsNn1rDibCmwdmaYbKWzbmxrByDqia4VC",
  "key19": "4zNtunSKmAFpr6p1Ni9K3BEWvxQW2JAfbkmHSGFA5vYZqD2ADy5ogWWrQSJQKdwendSkLSXyq1umiZ3sNitDaYjC",
  "key20": "5ahhe1cnfTmnJfP1bVeVdLSQDYBCdZdqBZXcmZBzykZMggWnaFLz4gnoDfUEtAzenMxHSD2uvfYmoN87FsQjmXKn",
  "key21": "5YFZN8x5sssGeuBrrtSfJmhq8pyvNmH9tKFzq24SpiW9nE4FWwqtvFW99nRg2uA4NBym9GBu4bFxmLuywTwxPvsM",
  "key22": "2J7WZs7dZVfSZ7eVsxkhsHZs2EzpH7t6tW9143kGstnApnzi8WRFDM73VDNMnEFqLQxAaBGjcy2vCH7MvYDGkQcH",
  "key23": "5hvMMxs2xJHe41xX9xjFEDxsbMsfHAfutPpwrg3DRW9EEvirRJr9nAao5qJjhCryNoFtHE5cJohXztWktx48TZaY",
  "key24": "3uCJ92JzX2MQyKKDvWksoU9piMz1PAAJ4wcpEvNRDQZxryFJMnYstjVwiAbEv4f1M5AW3QEfRq2MEPFS7h2FBzkp",
  "key25": "5HpyL8fqDH1TM8nfyjTyta93YbzVkfxiqsytXeCYz5SfV1LkAndNZdmyaQjGCiiwgpJHSQt5KHRyZu82oVjCvTh4",
  "key26": "4a7EGQdhb6WMNmu71MovbJvr3btHee97bMWtu84Y7F5sFbL3irFu67wuX9YGqcUbob7G449xgHu3dfVd753kCWQu",
  "key27": "4Ht8EnZuF157co9o4QQYvjNTN4YJbprUvuhDArm9U5VhApm9WdanCHaWKsGBLvunDUQMyxQ2pkHrpxordBYjkwen",
  "key28": "2Kjqs1NPEuNBuFNFSyYvSqApMX6XCfhw3u9tXFnsGevicfTn13k2ehE3EQDscDSkCyFvWgBm79TZLtShzaAJ5GET",
  "key29": "3p7pu4orVBUUFtdniG3sBqvzmBTxxj8jb6yGS6tvr6iZDEHPy73QjAzLk1gbZ8cdBGnrBhjmMw3dgD3zNBNNGogU",
  "key30": "5EAkoDrVtoboz8MZx4mnq2Y1Z4Gw2CEvaCFoxPKAWSFf2p7bEYBr5oKbFU1y1HAm7eZmndTgJqAZybiysLQMR3RV",
  "key31": "4wsND3mxWobk4p5D28imbfUhihcVVdEShAUrmAu9Td9Y5sdcDD1vxux2yZJ3iCbcbFfshwDdsJW7znqrcvmq8WPw",
  "key32": "3Qrq6LbtagV8a6n4HHSHQ7rH8AWL4dVJUPkye1M81SaRaQt5KNCpYVkASa3Dm9GguT1D4v68579BBSbQgitM6NDD",
  "key33": "2Qhheq48MaezAiRWfRky35uuJyZdshjDYufgc9KNBaT8RDNn9uWJGZVpb1xQevyrdaRxJeWTR1NB1MZdVBuyppFL",
  "key34": "3gDDi6b2ADV6hXbnw1Dz15XiAYXuxMWd8ePffPmpv74WVn6RHdF8y2FojVtcLs8mHaz9AKV4wRon6dQeuofRfQLM",
  "key35": "3uJadQUj7tn11svFFj4nJ3CYDwQAK8W3LKq766qTYn17HDQ27NaKtp4JxQyHJxTogJZeywTnNswMKLKtGzQuz6ra",
  "key36": "Kp1YwcmQ185UfQJgqcAAApUfa5vrWXpPLVXm7aLNqqLcA8wayo95q72b7xX6Ccqc3Fp1aoJdWhon7cwAbAGXHnf",
  "key37": "42PzgFvuwX8sVbV7894gNYdoFUQyrcxfW1ueFsKLhn6voFE1GqhRib8Ff7Py6rjotRbsTU1YiQstLcv9JjDeTvAK"
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
