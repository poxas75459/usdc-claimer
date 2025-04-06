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
    "4zLfX1ea7UPDyq1djHFgrUJUgKy3v4yD3JegekDU5N6wjoHBHVauvvBsRtZs7WFY3tzdbeuagSpBcSnF24MWR2rp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ekCb8qM8TJhkrZTomgc2ZyzmRVJEFBeAsVQHMJwgoBxGddBfvDgkRwaGGkiFNA5qsSPxiwCzYiDBqZ57zf7jYkt",
  "key1": "2oAMtvah4kvaqPq3iP3mNBb29PRYQA74VjE1MnfGjiszTRyCaUCPWwcZyorCJN391kmoGjtxw2Noc3PfKX1pJgL9",
  "key2": "5AnpQVxVJcMZV9JdgucBiphCqKyBD3shMXeZWhp62Y3dpAhdQHQLSLpUinY6NoJb3hMnF5TRNPYikQJSd3AMfjRa",
  "key3": "437MmS8hzTJV85biKSK76AJSRLkWpFTey4Jm6bJYZG7m2Gc3zYWeGGAa5Qy5DTtKYmRnjyLiTW86cBDUcp7iWsdK",
  "key4": "67beFcpLwoqfkv2RocbfPBPg3E3NcMohBmyDfXRDwPGR9cgLEuQjjrwKN2Z87gamscda5VYQyMq7dcEvxJHdDvRT",
  "key5": "4diwfoJufzXGtJzPMJRVtWpFyvZJZy5izAVNQFNCrY7N7ByLTGhZ8V3Qg6AXhw5BYfMo1wxY7nxMaid8ZmHD6uEx",
  "key6": "kQfLqZPp3YANRXa3W9cVkmrkEi4dV6YggZY4z9xUowqeYSV6UavkHu9CpGz78hMam7tmwZBMNZ9AEqZMxjEUDeC",
  "key7": "4YSvcjizYH577y8gePEp2XLVzuwrYZMTTWar6RVH4HUF3c5CY8jaJ96PQq9dYqcbyxsY31DuWDU32JoTdoCeWFKF",
  "key8": "4zj1jHUGxFBy21Ezb7RUsD5zbepWrFzpFMMt14VyDcT5kB9JreUskMNRtdumNKRF36wUgJt42cA3PsE1HT819HfE",
  "key9": "3qeADGeu5FBRmM7tS5Nf4hYjDwm9TvRzMFHTrbhL6zWKf2iSUkQVySejp6xWmGTr2Gj7q4SeFBjKrSYk6his2DVX",
  "key10": "2kubK6TBPg9EUEgqWTsJnV4AvQzTNBVB1NxZF8JZfsT3MArsNXkvWBebAnyY7RhWb6gMkC7BRsS3yzY87M3dLTP9",
  "key11": "2ATVBbKShJLFqQAUPEGMMUsBzWq4ZwVJtf1f5sbrqkVj5pPmm2HcFynpif5zYGGUyvkfmho5Mvo9C6Fvdb42F4hA",
  "key12": "XW5rtFi1SEhF8faYsk9d3a8wvjZxDA56qH7yB7cxnk6qXJNSTSaB6yq75LQxQv4mfCv9DL1UxEQKsJHDTqfwnMb",
  "key13": "22Pjf5D2hvKkHYyZG3ZMN6ArDmfZ5fgEdubEjBbeEYdYBc6KvYJGFk5NHDcyDaWeZpSwb63JaCQ4s2LNZRxEZkZo",
  "key14": "3bPMnwsM9cXjqk7YphvaQJrkejqvwWuE1nSrNELC1kS1AnEaJodJVGWzn4U36N1QvxPJ3x5io96LdgSG7NDVuHWs",
  "key15": "43yUrohqzQxZ5BPz1JvqXR8Nsp6yU5XbQgxnviaoSQptLCRiMwKkXgZEwhMgp7ZQXBt5a5Ri7RmsFVsZ157xPK24",
  "key16": "ZqktXXrHUXMZ1EDZ6ozjVQEe87Vw3i9Z9hC87M396E2uRzAyhdnnCig7rHbSne5eM4iHd9EBcKJPpfawr36NL3d",
  "key17": "2AYwKKNtowKaLqLkPpPvVbnuCZNH6d67jj7PZby59oQ2VvPvdsXPA6rz1uUhTJxemY3tGQPzkpaUj9Ftd2aV3uEC",
  "key18": "5mHTLUfu8JEpR2rsM7STRZS7yUxRJg4Fi6RfLwEB4vKb7xEtqSu8jA44UkWSZFwTKvsUJbobtWaHqqVqJvsiEuBM",
  "key19": "2prLWAQdEDeuNPeaqoVtGf3djqM61VMnge3quWx5UwD5zLE3NmA72b3iz3fvHE6S3q2E1LsK5oCEBEhuBnCUr6om",
  "key20": "31nkGkGB2aANrZkypkJqHmo9ax9wJNZYkR46YpdXF52SnwfeMxL1AuMFdDurLZCN9BbJ9ZJcsynXVFT2ugh8E7CN",
  "key21": "5X8BUGMTzr9ntRnFrWTe4UV5qDHSNH3am1RGY2NTh6e6M1T42EZSFRhfb32wjoeALP3GEkvqTWf43myenkjE8qHA",
  "key22": "2RYKkZHz3srrGty8gSpGFeqMAG7jjvjy3Sur4xXpgKWBPYpgvNBqkPwQ7wM1D9Yt5FgE85okGsCzFX8ruJnteyR9",
  "key23": "5oo4YAVoAmao4vHVU4j6Nbn2spRv4BhwjVQNmDU1w8wUZxhDHcvTKKWh9d56eMGe9jEK4FLxTgdJSjrk5bsNUAXf",
  "key24": "2Cbe2nhRwoj76BmjeUDTNywhHcqNzRoMs8hdTeVrUdAPfUecg1VhLSYkZAS7yK7ahgucfDdPB6CPcZaaejJt5n1N",
  "key25": "2MTV4nvNFEaQUg4xjuqDxQ9hMVaSQHFG8ARfE8VXFQss2BQLm1zZSR4ejyoDuG46ZuS2Z7Lt8sisAxJXzFZh7hM2"
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
