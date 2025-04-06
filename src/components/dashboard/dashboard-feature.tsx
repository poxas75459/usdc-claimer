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
    "5c3rJe5UAmqY6ZGU6VQYd4D8XuMCnSQoGExFN21p7psDqbSaXH65ZMSbGbMATQnGwRXyK3DgXkU3XSmDiMW2yRNJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b6Hq3rsDL5PoUFpreZHBwHGqtKMbcfQCUxdC8SvRERse3qyyJAmKBpVUH8WHbZDgRRryck7XSDLu4AxAtiT3ZrV",
  "key1": "5Mfqw7duH8pu5u4VCCyprb1eRWA6f1B4mmdARt5NxHAyRkfBF7YfFhJHjxnwdSGRQ64NDf389VQPHXEP398iSaWt",
  "key2": "5hXECRyxDvyRABbFKjp4Pu2KrzuDg2CQFe3KdVuhSBXJ6xfv6m7v2sWF8ixhaakrMNxCxsFC634mhCjLWhf6ACAH",
  "key3": "2EQRZ212TbANKywKwnSHHMWyUShuoV1hEoWuT5648xWtiyd6XpEVXvDcwK4oUCRKg6qR9fHc8BKKbCeHbY9DNjkR",
  "key4": "2cF8pS2iLh22hpc72ghL2d44xZo9a1BbYx2U3kT5YumELNkbxGVWxERMKp1sG3EuwCp1M5K4kfk2XynBmfqEdAfZ",
  "key5": "2WR1EgPt1Ci4eja5hihALgwgCwxVmF2GhYJh1AhZaHe8eSVusBXNnWxTGReRsbmuAq9vKMQvsYjzjUrc9r7RvD5Z",
  "key6": "61K48C3jp6S8Lymo8KcpJvVkXkh34EVpUhauKwvUrPZbrg1oWysuBFi3irzz2bbMy1KtvUMEVZ8QbPVM1qYoajmL",
  "key7": "51DWom3h2JPUMuudpZs8XjCFVRiBabcRf8uNfcu1mdVyYJSdsv3QVyxJ1tY92H4fxQGRYmy8JtTcmnBGSpXZ1ABL",
  "key8": "5nQvJSQ59wEmK3fR1VUuN8QHPAKX8year2xxcKAohZvjBtvG2qoa1W7hK9mYqcuEM5cFmCY6AGEgp8FjLkFF8cSV",
  "key9": "4P5mGsJa4nGpDPBTUGfZQ4B18HN1p4TEFHY6hVdgnNZG43kcMnr8N3Dh1nAPDbDZJtgvy9PC7vtyKuT1pNuBHDHC",
  "key10": "2MhrLhu4APK5i5LntnWFTRqQtfBMGMwbWAzK3gETvkZnBdDATHFmiDYTSibsLQEbWuSoPcyTUn3WWZawpoe4PBgY",
  "key11": "4fFcRjYxHYsUU1qs7tNCZodzR1oE6Qa19255ZYfUfkKWHMXTs3jNzbBefpvyVxCYxk9cEHYdX6kixxqWdaoKVCPV",
  "key12": "42rxwY9ueqzGBC7qn8WKGUt84F6MpTyXBwyrZMg7ArypQa3rxA8sV4Vnabj4eSa7qzAdzVuV4juhpgaNfcVRxyy9",
  "key13": "32CqbToeATbMtVecbwachcoE2iPQgVcEbUdbfuXBxiyTaEvKeotaPtqBZ8yRwQpv4dDDmKhEturr8orn9iKWYWQG",
  "key14": "49pDXBwJ6HGjRv4NWUfugGeVhHDHa9kKBnFScydxYk2ZhzQRzC6DPgYqo96BTgqSm12rT3BZMcWfrwYoptRLCWHQ",
  "key15": "472aZQtfGQZihXKnjNiKnXBT9GcbCZs9YKpY49aBPqRA9csYSx4EU6dKgkC94fMBEFvjZRS3cge9zVgAMDYCmJSH",
  "key16": "3TyVj5vA5Sr7BiMxsSvcJW9hadeRf8v4P3h54ffFgf5sGiRLNxCg1RwPcmhSR1S11oK6Re5eGNSKFUuuTz9UiY6X",
  "key17": "4uKHZEDGyVLkf8VkXKWoQ8UzSGePoJFR8HTz2C4mFTiB1s9L1PDbMdyqQqngrU6HS6gHa4UEzSUqDREGMrSPyppU",
  "key18": "2hGASHBAC5wVvkE7GmZH2DRVAKLiZUFfvAHwTYzU7Jq1aLtgGXzJa62urui25giyoLFAucnBABRBWzBy7UG6w7sF",
  "key19": "3iS2ZpEUYmX6VqJ7VF3kk8nXpPHkh48pSjzh6FARV9aLtUk2xsUZR7C5Hp3QrmUVPMpVvoNegmq8zzha8M3EYg6v",
  "key20": "27j34atYvi76VJiCAkjysbrity1RtRdzyopQsvC2QGN19z1CERT3kMjGWx2Q1Cw7fhbJ1sMXLvXtAMoWWBsta9oj",
  "key21": "5cExcjUytGUwUVmACSVrk737L4oNtCciq5VWqAQqDNriKuwhFkuLC5Z62NamwhiQ7VZJK3w7Zs1gQXg1W4dT1cQp",
  "key22": "5aU8QxK65ExtVQ9Wfy2Q9AhnDhriUEai1zuRFDNskxr2Jp4q67WLeFxRfG1h1385FZLCpmSTQd7r4SW6LFuLqJtN",
  "key23": "bUYjQkSDFqox6vXhd2ZUGZ4RLL9T1Nz3HwZKzcVtw3YrWsiMEYU4hm76CEdbb5zpL9jMEEg2Y7aatQMSUdR26sd",
  "key24": "3u7yrSAokVyEgVKt5E5rvzEz3M6XDTwGDUMCMsiXjoh17mYzvA9HpzkK8Fwv21MtDGQcvb8uzcdynsYm5y1Q6NQd",
  "key25": "VhM8zT5zgvQR3YNEyZgJU6E77Ab1nLWYFGvyUpbnsfHzzHiy3bJTXmTLp3s479JG8YuSRjLHTVUMn7SJyp8JQKA",
  "key26": "2gjarDGrMweNnHrSXrR5cvQxnXupwUArheCndqTNU17FD242qNrsYJWNZh4SRwyjhFWTcHVC27VLaBWncwi63mrk",
  "key27": "2gQMBu82Da6QHAdZtq7ktiThp8dfRuNHcEKZDdiqNopFCrTTwiAXyUE6VNE4MoAL7EsyN7Vs34MEWmHCbsSSsCfN",
  "key28": "2q2h7RmyhRv5f7td2Bf5JG4sL6M3mjtyZ6RFVLAcbSNCMMSEsZLcP1trZGUrShCFWCeZ2prp3yRcizUbAXA6maZM",
  "key29": "4QJeqhd4LpDhQbveUxyrGY32EWc4S4aeyDNLEwivbiWN3Wq1KT2cHExCoG4dNCP6jWC15DE92i6Y7DNkaXz4riKd",
  "key30": "3g5eeMJZi7JbTjrPqsUMetFn3jgdW8v6v9fLjAY1ByFRjftWj64k7S7Y2zcGrk95wZ17CBPjj46gwvAZi89kHFJF",
  "key31": "2JbSyfNA9yZe6fkvS7DXUENw4MxcT6jNQRY7uKdC94UDLTzsjbJkiiDfrAgnmjV15CLnGBACx534GuBRkB5Gjosw",
  "key32": "ruGXLTKS6TksXEH6waJmGxS8L3QBzhF8gyWfi6aG3HnotLq4v1UNrDcWD6QXK8KvySTsZ4tJu62rnCy21b7M5xV",
  "key33": "3nRrUMT5QPRKS3zrdt8Eo9C5zYwjuHcD2WRX3zPqt7u4W4yV52o9wUbqgWhHHxjVwhEyzjeRVh9HL5c4yycfmopR",
  "key34": "4ESvTpPK7uSwVj6n4fbBHHCKbQPsFfpo55yr2sBohDJNRaLXtT5xL2WfAtxswqbWBL6Nzu1Qd5s9RMgPJP8gZRDr"
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
