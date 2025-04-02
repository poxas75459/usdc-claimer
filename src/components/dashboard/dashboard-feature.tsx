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
    "55fQH8zw9iRyxUfsmi7UupRseo9XAbhxcjCAtBWGrHd5XpBEHPAkKf65ZheARNdSpaLXVs7PP3vcWv64BVCNo8Lv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pEBnsuvdZFeKE8neAhNhs3hiX25Ga8th4BXCbqpWebxqpDf7d4vdzesYGjmykoFkKM2MHQLAzSsNEDvf4xSfrSH",
  "key1": "48xcXuVF1Lsr5ay6UkCqdsitvvJADL3c24JH9EoCuxCTFRPiLVwhTKCQxZ3Q6dc6EtuFi9g1kSduRi7i8Gnh9PN",
  "key2": "2nZPmKgQo4v3Ps3qQNEjLsnzvHSgjVWrohs2iMA4iQE2XRA6mG8mFuLWMovTKC9saidHEgu9NVLruMLx5n77oZKP",
  "key3": "U5VqitNH3NQyezykLwzS5BixszunerumShYJGmpzBWgKYyF5STSobUFgzTyG3Txvxg35TooXDrZRtd7J6cDyFJ4",
  "key4": "4cDFFGr4GBJmgvpRc6sY3nj7zc5cy7jr1cnEQdnkUXnHxp77Q6Cj71bSv8jbzZjo7XH9Zf4L93KANaSeMPZgz8i3",
  "key5": "4EJsNCZoV3Tiuo3bE898PVmJaNRsoD25APgvJUSzt2PJjqCbowjybpLfYJNHwdbWeStmTTEyLoddcmhdHYD7r7qY",
  "key6": "3aabxTWaaNghdWopyWxDUjEnqwomcKaZ6xzttQwpgr4DKaoVTWgCnso5qGphbnUMqAuwprdeQv9Zf2rTwRzc4tcA",
  "key7": "2AEiK6D85gq3E6RhNQ5dGjA5Nzn3iUKkbqJ15afTVZTU6nPtW85ZHKntEmcww9Q4xK1SFTZEDiKcXWrD1Dd5eYmY",
  "key8": "2AgYD9pCet8n5kFD9L615dFPiEdAiXCzbn88kh2ygv332PLqtGeyFSupCz9arS2dnvsSCkmqTr9uu4aFndzaZPKi",
  "key9": "4fPxVgVphsMqxfgYt1ztGRGqB66JumPTFgjv47AWupwXaquWwuUKAuVztDwwXwTr5GT3QGcJB7swqr4LXRJ9cwZc",
  "key10": "4jspzz65JBy9PPwAZS9nfLCDqxpW5XN7VRKNknTPZBZ2SzGUF4sPgmKyTxwGoKTF16qpJ1dChpm9a7j7pz4JQ4mV",
  "key11": "2b5WkqjzQwuFR9JMCMkJ7Wi1SVcCGa94qTKD4FoWmtEQa8L8vY9EtgiGhdj6YJv5cJgdH1qLoL5dHU3foVcSa7ai",
  "key12": "5BQa5BNgB6pCAkdNMenGYmCYtaLhm7G4u2ShWF3UVuqmSQk5aXkGKUBCTXWmj35nU2NUkExm4QRoABR7ZG9CPjNe",
  "key13": "3J9UgF7KF2yaUNUcJKxnBWXosknPhv4hnwxUZv3e27GRz5q7AyBFSQBQVB7AyDn9QobnL9m2VraPsAQXYQTz7S45",
  "key14": "3nNFDmKgvLkM11bV5knxAothm4goaALEvyevVibBVERDyB6u9QQWbTetSgrzRLxNs3gKuBLyLKtj7Q8tqy6y2fmJ",
  "key15": "2EtMakXPxNEEHsPiqB5qKS9XdCQdystRZgN7MzKHUmnSMx7BeQPpxUUX9KFjnjxkCFdWQmqRgMEs4VP77dqQyqSq",
  "key16": "5dCkCRuH7yeryugVFQv36Te9hpdiHffbkd1QGDcgiAFBTWYsPgKQhrWzZQEmUbbsrbW2uMKSnJqCWDZAqnY1QC5B",
  "key17": "23igVmzTuERsFkVSRuxJS6ctstpYkQcE23iydQCbEqy7d8cRgzvG5fmxYA34GaPhqtNXmW2fg7yCemsMxipEPyuT",
  "key18": "5pYoUtMnsvoPyiZYWoTsUyz8RHG25z7U73rNPEBDBL8CneExxy6F4QKh7KgZjQ7wuXo427cFfHGVopm49p8s3n2z",
  "key19": "5yLNKJBfLjUV41odRG3QAUZYu5GX3zQVGLVG1aCwD2ufX7NCqLozNGM7zeVEBaWpfPqF7eLndWraFv4cPKqxs8rJ",
  "key20": "3En597BWasKr7TgNSbTdvhqcL3NhiCnk1EMwxK8Z9LoHawN6drhz4nRb5tAW9YEKj8owtXrdHzYoJdtD11VnWcLm",
  "key21": "2jbVzK5q8SpL68ko4rH8NeYcwcUqxb7FdfEU4PgLyqJAiwMeL1aySmEEdgEXT5R1WDbUwuSqFgr3BwNz11UrnC6A",
  "key22": "3Rr3nKPG2ZbqJqfXVzYh8SDaZhi8L7esAX9SJvPj5Z4cw9FEsEeCtGHVY6YYRgyVyjay74t98hKdVFVGzGKqhQRS",
  "key23": "oqV7iY5pghxkp2nnmtQ4FfdaEpLc72Tk3QFjZL5yR362xvixSQuETzjtiPU43hF4cPKCxHVkpNZxWGFZkYoJ6dY",
  "key24": "D1MMjAuur3kQeXJRCD9t4yt4WTEajanjVKYEFxfXP4qQ6FDzeXN4HuDuDqRurWCTRmcvwvPVEkGQ2WRZSV2TmKP",
  "key25": "2xyuALZs1rtZ3Me3rfkFZ9GCid3jL54yaB6RZWPwkHHKZp2uYcf8L6tUaLFDtr9S4uXe2NUX3QDYnNxdTAkeHq3Q",
  "key26": "Gxe19dMJDpSHEXCz5XLT7PHyETm4VAxVWmQZbn12nTKpc4SZd4SLbMUZbSJATA6Ssz7YySoeTRgZmDXopgsMmBQ",
  "key27": "3rVwhSummmy9CdUZrGFXoGZV5dhExNp55N9xbj5SMmF6hMBNu9U7okdLQvGy371ifdX2Aqs5q2SsmwKd52TztqDr",
  "key28": "49r7kccinq68oK1naaVubdTF7cceM2iHrdgk2Ggczg2hBRzKVjtdS9BRGwG3BuKXSiM7sPap9VjbbuSVBUTwRRbG",
  "key29": "2ABcqtqX6jqDmXsj8NVEh6A3pgeThNs1Xk3VpHE31hNo62FBqsN68SjQq7FWoVQPQnD3bxtrGX4cgUPRkPBtbWGf",
  "key30": "kizwDqMJuJHQhaRhExnN3RAALL8Qw5EbFLFq4vFZDJXnsGV6EPKhumfhCZaq6oezBrVwuidCEDDw5mzJSq6a7pE",
  "key31": "4BPSfJ8UEU8TiVR852VJ1wMunneVcz79ptzg4tkBguGM1xqz4Rkjam297hi7qZuJRjcDDiSXK6fPiDQz4S7HXefg"
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
