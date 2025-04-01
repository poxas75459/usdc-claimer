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
    "5RFfSy6o1e1iV3ZmrfPSPf72KY3P4twkJ7GXhgYUBCpZ12Q2isR3EdaZvAaRpQBZz4TPejbYuAGZEqdK8QbknAmj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ohjj4QRibGHn3F4RB2rvXYMYg2BxqhnprE7FNWa6yvgcKVZSH6bxvuKCH8SwJX6KprmSkEXvpi7LrVvLZXsskgX",
  "key1": "5Swwn42FAmpbZJhc6VoetLsZbskEB56Htik5vszmyNhizJnspn6QaaH3kvd9iRacEjeVjSQcGyLv57qJGrxdBueM",
  "key2": "4nG2NYqKtTrxc1tqEH8y56rFVBZw1ZRkf7KLeUn1yi5zooZ5RDAY24ijRiku8dymorDCswkU4sL7wDrXXEaHnjgx",
  "key3": "24mtsZHR7UafZEG4A6AEoiECtJneojmxfsktVLPQiYwJKZpwY6SDcLwHCtXJNWRkzM73vimQsHhZnfc3qY9PWKxv",
  "key4": "4i2UHxJXgXsMi38R1vjyY7Wewv91hQsX2XCZozg2PPjWL5qSQekyeyyDNNAQJDzgg6NHdCz2KXQ9H2tFGemfPt7x",
  "key5": "3iH54ejhSu9oSphZZwFD78vmLXrJEU7ph5VmvcsXNrA9BFVose3nkzmcS4DV9Ken4e2PBv2QVrsBvivj7pDGoc46",
  "key6": "5MZtmgc11dtuZGBUrEzu5cGfQZnMqXyHfzYDAcxRrkZ6JdPiTrxj4K6VAdXj4WryyyWKp8mJL82ascLNDMiVge2e",
  "key7": "5Jnpq7KyZ4AbLATgAfdWo88fa7ZzgbhrgAGmtYzYgLGhXzvYrq3uoHwTJqADAyCFyXVp5HnmZCUXJAk5WvJsHGv1",
  "key8": "3dxowk3jvcPFmUSmxmar6PL72c5Y2k9mWE92DxCcKRPxenkrGuzNanHNu3LcMyKjz4dHAULkb41efT5jHoSHh8Pq",
  "key9": "4qs2s2PGuv8SbbuhXk9q4Fg8RpaAD9HrGcdA9zuGKskxhZebhrYmHbNBxdrbDvKmThTVuJHMt9p1NiD6hPSU9QxN",
  "key10": "4wA42e73b3Qbew3k5QtiHo8h9B7153LZs4E1ycBLYhBC3SuEDvvuedyVSWwsir1YmvuSsthaVLmj45n3U4wtpqpo",
  "key11": "2xG9b6e4yq1mhF1UtYh4S2mXSNWGgv9y7kXQSvjDRkPRvqVGB8YtwwBHVpjKbWSzDGnW4obRvLTAbxVE5AmNpK7J",
  "key12": "4Tr9MkNGqyiuXkQ4X7SLWY3u7KqhDczQS5YkzFh4YudmQg5AnZJiF7BEjxVC6KUz922Rdizi1CEMsERH4rAzJGfB",
  "key13": "5iFahChSHkXNgfQLA3jdg5i2PtFuhLKPJ6Af482QiHyhY97Po26xbekbJpbBEBsiGkXzz1FA2zmS8Ej8csgtQDPZ",
  "key14": "3Q9v2Mgj57k523qa39A5WPemJeTCVmN2A2baB1m62eHTZ2B8oeADMcrYjnF5XbWhjLorvQzEkvkgFzyEov6gX9AS",
  "key15": "45DoTF8RFwin5joVAkTDaAay6baafBsx9c9gy6QjfEfva1iT2htCN1jPZ7Bukezq1yaMy1bq3GifSkcaD9er1WAy",
  "key16": "7JaYaE1tXf6Mi7fe5edafvYEoWKcYHMMmjzVXbm9BxsVrBZ6rYJgDTt5XQPXe8pSTiTVAx1tf9afPpJDVfAGUUo",
  "key17": "29NnEKugpeaUvn9DPjZMXWKY9YGw8NT4ZzYkeLNxq77K91GpsEhG28XGmF6Swp6qUTAvdUFwhCjqpGzTTbUhbhLR",
  "key18": "5pZNwTU77iVRBRf9pcKrQ5wPPc7NWDJ2k5ERJpCvQifPjjiYa6rqwKD9Jm8nq2ky6iDRUzWsgbpX7dZtqZEvYRjD",
  "key19": "2qsNbNqNMEStEz3gxAF1Fi5f5ZxhP2pxdzFHq2aCkuxi9zQpcmsh1SAHMJSU7Dcm5vwEAbuLL3XofVYALkMfVpCt",
  "key20": "4QzR41PXusxVj7LdwHmoEu1V2NiXAhStrWgBEDrc4X4B4g5LNyuTPSzCGXmP4K1fu2K18Z1dtHHkSPuv2mmy7uVN",
  "key21": "5M7qDG4WUQa7pmXN3EF5wJp3JHsPR8jENvjfnHhVawvcnEuA1pGbuS5WVUH6Ko4Rq2QeGVE7AqWg5xqbqMcWRwCE",
  "key22": "UwfJ7XvbFMG9Kz2fRPhNNxyiW5RPzPEcJvcMhbtPV4DhpPGyCSXU6NFa67RxfXAGawgZuDUsCTiiqz53zGqHZRs",
  "key23": "njdqFmMXNbLQcSF19W8JndCWsMS1VN8bpHYRkFTbNyzi1AhhzXmWREwEiF7PqzD5UNEmGNR7xDJ1JM6mwQSbnKw",
  "key24": "JvZoajTzTQqLBK1p6Um8JEj5GVKnCu64qc2pMKaFuc9UhNYpmezmpfMDW1WwexfyQk8BqNCxaM4V5P5rbC1sU9N",
  "key25": "2F6kASqe1kXfZUtSYDS3mdKcF1WcbNsCsuziWvCyeF6SfNa4SALsmbhboAqsK7768iENeq27m1eJV4aTuDr72LGp",
  "key26": "5ZCnVwJXLtfavcAhRrFxDQZp1uK9j5p89VmrjBP2m26Xsm5zWJti8EJmEeYLsjaR57rH17BfVnYpjdcujFJwEuPD",
  "key27": "7XSzMgrFCRof2eASAXKEMwPBhKypf6i5evvYNmK9EqCBP1HeWRjT7fvfNegR8TdLFbwTV14fpsZu2pVDuw6vYFX",
  "key28": "5UzimcFRVwJd1jsG5TSXPGUCcUhj7NjLtJgZsj6gvGE3rwh4VvbLgAzEG7psBictYTB1kvDKd6qoz75cFo3d8jyW",
  "key29": "5izLFeYeRtA7M53kF2qucBeLor3H9X9W4BovyuoGgiHxECERWiFbcAUJFuJdqNv1a6ksbKAUEDLWicbBin7BFH6g",
  "key30": "qsxp5XMf4dLEmp4KbpKFHYeCnComrngjc7KqKJjN8kVZTjzW8oyhSFaRCVykztDvo8WE7S6fmKxZzyxQj7LsuaX"
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
