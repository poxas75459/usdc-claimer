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
    "4WyxNUWsp497GxAFRkjgzPUDpaBmQmwdWbCktLcoSEh4jmC556TkzkgjCYokg37yzL2P7BkLkHzcHJ7VXXWncjPG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NczjX4hUSow8PyeGgBcY8yaLe2NHwMvuFMsu4cuBipUiqYxVSFDNMrZ2euNFf3YUAZn1s3n7jzExQLLo7huUg6Y",
  "key1": "46YeGnR8PuuTg7giPmoe4ZKg46zVoCzPxRyiVRKXeXXmk28YEGk8BZVTEptqzmVvyTBaiAQNkcS1szJXj9eJLeUV",
  "key2": "3tpnQE7dz66j2L6vwr67mD9qzYgtgQ94jjDerUvMMRpR6K84T8uWbVwwzYpCeVHxbrcidGRspWe3Xxgu9yeEZreb",
  "key3": "3BKNs8qveoHm9mqtKEPCdVAj5MihU7PiKYK9iARtEVszVRh2LDAXdciRgWizztGJhvgnjQPLdGrVVWxiez2zbfXn",
  "key4": "4q4KnUpJZqK7eSDeBvoDtUoy7CF2xT66f4nXmNn3BPCVpoYvZd2eTLB1HxLsTyw16VB2KvrxgipxXy168EkhyDXG",
  "key5": "CqmaJsv6T9uHBwDVecTbCEsVUetxcPD7Lz4qtqBU8vaSUuiRUCDVTC8iu8AL1ANQyb8L9iLirBfobiquHk7xVcg",
  "key6": "2FwpEdyu1RSpVJ6raQ1B9H8dvxKiV3EruodALimXYryKpGkVy2J47cAjwL1uYwpF3CxmTPsiC1qQGcAbUagJSiEC",
  "key7": "5E85dR7WmmPKSy3LbvoqULF6yxxst2NHzhKXHDj4FTT7kAsBRrR3mimwjUKbWvqAKVSazJxRQBfuY8J4rpsrw5WW",
  "key8": "2efPCqkQS7ZzhQVXTZ1tm6o9Vwcv4xjrQfq3mbSML7EYEpgB1Stx4dtxyTxJc34k2MRkxwTbedEjZALPe5Wef1Zq",
  "key9": "gYrprN8tfHg5Wq9x7FRG78ei5kRRbwt79wJcehiT8NveqAH2QsoKjYtPwuD1FsPdWEqMX4Zpf6D9QHAKsJRh1z1",
  "key10": "vNZVCu5ZmweeZzpXQMTvtrPB6Hs8i5zHvg8Xbn7n7oi5uGxK6Vu2n4bubG7Xe6SUV7Eg7g7cipLLfGZCaMmv4fA",
  "key11": "3gHQZBR5FvsBGUgzcZiusDJpGvKeReYjC25kgDz981GFfew1oa8kgrXvopEdb8GioL4LATTHysHJdcWDpuATbqBG",
  "key12": "5di1A42uPNLx2kD2LuWDyQxNrnTN3kaAy3LMLcjij5LirdVvv3yTrNugooaByu1TsFUwFJcHETDms7SndAtqhDYL",
  "key13": "4pYoY9inAabTJ1wug9RPTLgtejNCy7ygYGakwxgdtsvATCyF8Atm5Qps5DKqgLCo34bUnbcGiG2PFpYKrFqXmCz6",
  "key14": "4CVEnpUuw6aXJSpfYj72xsy95zmW2UXP8QTQS1fwM1SaDe5ywLFWxrKjwDa6JRJXiAJmYgc5Q7NaJAdNLKbmTicV",
  "key15": "439Rypj2mtb4WJQfPV7Pz7gvkPzFC3gffDRu2pbdYagygQraveq8j1Hj91yXnQdcFusWbRQaTQ7qVBUGkTJY6TMJ",
  "key16": "YcBvZCdi5XR9b3wu5dbjCC7UZdCZmqjkrSyZYS5H6nhkpDdi5n4PLzCF3HkvsSiFWSFBYyGwY6WRRvVCoqe5gKP",
  "key17": "5qrZCuL8rsUKyg2wtPnutgTvvQ5K2TofiECMEBSmN529J1EFSQyqAjtW97HqNyo8V4bjTxh9DQUMRFoyiEcYr1DP",
  "key18": "34uDRCLemiu388fV6WMGewNi3nRiZbrDEbdV1D4UZuW277zjTCP3oXKVuFdHetjyR1xaHQAcdkgqD7jv578AQ6Wg",
  "key19": "3KYtvTBc1wQFpSsAgVu7RxKFHMgYkWijFNVPVDNMKhYac9as5p8vF86cEhBCuMNF86ozaH2VeUZQh3iL5HrDdti3",
  "key20": "2RdQLtQUG8rH9qXLpRqDr4Sbnfr7Vu5isyschiLNAyU6wDSSQD6jvPzsAbciGNNd6SwYuzqJaE3JwJmP78TX5Joj",
  "key21": "3dv8v3p6dQKCJLnDnT3jUQEtGU6o4oYyhXPhc1fGouKeh4VjB5X6S29LRGNh8shYC8CjSNWjNJ1Vn7ntBmca5H5u",
  "key22": "3gxAMgGyk3N88MVkMnq67bz1h4QChRjC3azP4TFtFhygVjoorozvsfE3jnBngo33xj7HutQUjxgDTMZoCSuhyDu3",
  "key23": "32xcmqXLjX8Z7nKD7w6LdN1jypNV9urxHDTK7jA6YSg7n3gaFp38CJpXR6Y5SwoxPvpaLGZjECjTb8w3fDqTojgZ",
  "key24": "6535MduYn6tbeQgPd1NMVKkKsxeLQHW3pXC3YYDKotnoxLBKFuao46dn92HEyAm8ZyWCD6djdRjpsLxRuHqNVWbr",
  "key25": "3KgRwxiuK2F5cpnBG12orfCg2PHufdmgHncs3ax4HqxKheJTmfe21CLevqp9a5swTTZyd7wdGC8g9DWpCqCM8PzY",
  "key26": "4CzEvHEuMLQqoVeoCdRLKEPF6CTn8dStv5UNV3Nt7Xg2xbC6pYWRT2T47emvhHi96wDD14cBdveEXiHAvh9KkFdt",
  "key27": "2kPe7rmaJnFF3gPT2C1wZ97t8Ma5fYzMHz3M3PNQys9JSNsNdB5sFUwaTudASPN5P9hZbECDHCsraaL4gPiD2FF8",
  "key28": "GgXQnaBg4wvGmm432HYzB6LnRebbTBzEpQeQfe1vJXUJ4JL7M9eHrJaGBUkjpnPu9NGPhMNEwYFMvYpFhbs8jUo"
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
