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
    "4FsW1MsqAHuCBZgTdMfUi55unZgkYfAFzPALUiUgwLLHBmd1v69cyYDopGRoHrBQkP7nTvPCdLUoCMGMbcYdF7L2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5npT3yhe3vSTix1R3FHXqQYHsnArrMwkUEjwok7Yrm6zYHji9RnEoGmkQHgRipJiBH6Z8M7wCPx9X5fmG4DeuYoS",
  "key1": "2XrUqTcusYS8MdZSVptydnjktbKVr4n9AjyM4SkwXaDJJnDaabhUKTg8utfwqhsj2J1epv1TCBeAQYn6RG8kwwXW",
  "key2": "2iRTsv6VvS5vYyeLK7vM1oZTWJEs9EowXc5TybkSB1h3mkpAybWfGzCjr3XkS5JSEJecoPmUFDwjjbqyyB8fv9Li",
  "key3": "28TmLmeWBS1Wx4PNziZbWUzVczbFp9oT6KWQT2C9UjVwWWAn7LvHLnXYEooY4Br6pdABrRsh68ZZnH2yUtHZAxnH",
  "key4": "65CCJEKwLmCBQBg2xjxUEGU9jDdVCR21mtfaJGJqBUabzjj6kDJ3733Rekhs2CM4FHFn3KGQcJQ9egWpS8996hs9",
  "key5": "2e8HExUejwTdCDDFyTjhHoRMqX7ghiEhrmyWmV4qmbjaXsLmF2NtMCcLMhYGx9C6aHDoBRDEDPom74mhTUuJinfn",
  "key6": "2JmE4SboaDuJzg7yM9HJfqdxNr1K8nnkzASYT76q8djMzruesjwx5D8h3BqLzU5Uy25AVVgynLLSeN3VNC2xr48r",
  "key7": "3qMPDdPfEFb34UJBBZip7LiHJ34XvBSM4E8bfuHCZWigpJX37ipYBwwHvxdoCzR8Nais4AGL93sdRjjE7HtnLWwQ",
  "key8": "3nMxG5EhZqUh9bGweWXnC3cDVJUw27CzJRTvLnQqLB86BYS3xp6Q18TFU1Y2inHLshn3ggjCHhKsjbxPEBX7n1cW",
  "key9": "yQurcSys2fPJWRDkdHoMU85VeManU2SMKb15UTxxFUSTUc4VSuZAa3R9Tc4uQd9UxMTpepFEN3CpStgR7wELUov",
  "key10": "3ogHAjWutujev6Ck9TVFvqCViEiGdw7SdCHyCfpJxRCyB5vMbaeAW3SRoqCdAjicuW8JBqQjsakZvABLweS82xuF",
  "key11": "54BeA4fn2LTLbQX2eEKd5VjyDNpn4pLL9rcngWQYo3UMU1nkG7gv39QZFv32XP6KyvTZLToTpcx6M4LtVkKhKne",
  "key12": "2Si1T4HmhsMELJKkDnnoDhBoa1pSLjbJKyWWb1RS1LArcAkTmVfyZMR4r46LLHBaJkK6YMjdgQVqMZezq8th4ynb",
  "key13": "4m1vFPtnzfdJVT4ZCQqfTEWa2NXkfVQrRWZ8YPSgQyYEQn9Z1yUyZWraaofniqhhWLjCgqfzZFDLzDLRkdxismYC",
  "key14": "4hFcKuagVu2xHbw6ynLqVkbYJvx5DBYC2BEqmWr6dkVc3WSrLiGkZUx5PPLNVSHEEjiQPVnbRL2rBKZcUuvCvYL7",
  "key15": "4LUnWRRw1oRgJdydkzB8iP9usWjKs5eFMx2wqkSeLY738xQNJhqPR7YDa7hf8E1zaVE94NyniS3reS6g5DCCxsni",
  "key16": "4pk5si2DYaKvMgwRgGfrSWwMz91UbPF833z6UDi7AvvYH22DYT1vNRnV5JGfSCzUyJCk3gnzXFoqWhqcd6a5TaND",
  "key17": "3StbWeztkkUQoV4husYqZdr3CdaufTa7KmjtMwXUsjBin8aEeP7F1nEKZLnyxhYi5vpKR2KMGZyQ7m9i3azvXh8p",
  "key18": "2LaaCgxesgqhifC8Cj3Zfa95733GFeicFLauDYm4L4GtgZ2KSMW79SBy6JBStUe9WkiPVFckdNKw46cNaTnZohLS",
  "key19": "3NmcSAMGprfZ3swjmC7JJat5Fy92Kv2n5arXgEVVcmL6MVixXFiP3UYXSHV5t3NUFRvKkjYfMYWz57LVGRXs9Ajs",
  "key20": "2UL2ETrhDcWcFqrf1t4Hbh2AEqhM8z4TKQfPwsVkCzVjXm57MboYjSCQJ1T35oLobEgt9MK22729zTLBUoewcUKy",
  "key21": "4tXNBp3BNrtNkDdRaL7XDZFZE4u8xZkS6aEBoSAtmGjNRPaiZy7uvAQbuKuiqdgQHnqpcxGV2QWc2t8EVjUZ8GAY",
  "key22": "5VQGjNPQpXLQUndmGSj9qcGrG8kMe5ht5ZRBQRPHFADzqX2jrPDwM2mtgu5GojGJbLgkBQgX9xFuUWp2svphQmhY",
  "key23": "4QZ64AgxhDsomQpDJBGoRMT8Vr9u6eAH33FvchfgY5GGXpLGUMyuburMMo6NGQeHVso2z9aNaK7xuTw6gRLujV34",
  "key24": "2CMJF7ku1ZEy7YSYBm5Sm1EqrkaKBQT4CnuEQ2VcG4Le5LSJepLGmnpp6ET9CmRfFxYcuFuiChUXGW4WtCB5fCDD",
  "key25": "5GwDHAGBucr5XmLoFFeE5Yqwq1gVBwcASrRtt6mWo5CK1QVwxme6TomtHpqALzgjmDgZaRpE9myse9AqbvtY7XeF",
  "key26": "4fctQX9EESoz5nQbNNU4YxLbz6MDdQfyjuc5MkJyktBmdFAyhNeehUdT8UJo9RZsF75jJxvVEgcA8oUeDbGHkp9e",
  "key27": "4JPqPNbfyhfpZ1nQJFWiSJgigtF7gcZiqSyVhthFELFGUgqhHcKodS58c9S3BToKnfT5W8Nn5u6JDfpiAny3HUrg",
  "key28": "2FsPiFFkWB9bYjw75oMfQeMEbTa8qnp1xvXqQmdiuwfeuDE7EPE8hFU6Mcger8iQnS2tvaa6KDyx6nzpPLRMwjob"
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
