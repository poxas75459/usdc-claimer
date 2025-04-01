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
    "3bAPsBZNaStZAEDiiPLJD4UdSMNHRizfDzNR34X62VNwUBUqRHdnMofJdfqHFgBDErWH7RAGXAjXbikhfhQLGa6J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KYX8t4ATioXcZZYgXD2oxoK5YJbbLnd4tEMR9uxWTmA9xN2HP3LR9eoB21GLRiVaYBvH2vEb2ix6CjU4iTy6wNK",
  "key1": "5LWKLytwjWs8ydRaUrpGArCzhoJyCtja6LuzkW6yaZRoTbDd1fL77PYLPbuficmgM4r8ZpiuU9fTZzNbWfaW7mXH",
  "key2": "3yfpHFTQWitjsUW8Y7G5pndRtL8Du5ZaMe1d3riqYgdS4eDhuE9LJ7L2drUaMe6sftjyov2jnFstuURpX82sjAnw",
  "key3": "4g5f7vJKgDMDDVuWxcgiQ7m9ixiczXoTegZt3aEwSfA2DvSdTzd5cr2RV73ojjZoqfbB6FvojTgQKASg9W8QjvuZ",
  "key4": "5igAvo4WKH4qZkmDMwrG9WiFESwGmcYCs94LArNNenk5bhGvMJV7emuFqSh3vfaAY1dmxmyhrREYAS6Xkdx33sNd",
  "key5": "4VYNecwryw7EkmpmiGFeXJA5VwbH3SwEUeMYozP2W9uzGpDLPg8Sr3LSq4uEddiHQwsdpcHSoeifNXEXQ6ZeZtu4",
  "key6": "33dkcWC1catoDzxKRjhHSwbKokcJpGzd9CCe8rwdh8Fgy1GYWqxqWHZmd1mUULryuEL7FvH4ZLqKJYgc4R1WCioB",
  "key7": "jxRwhYaEkkuywmnXX6XYyVURCo8AV85pnDyJgQcetkuNVApHWJUYZAZQ19rBBS1vAdkGxYrGdYD7PLyYRxM3EZG",
  "key8": "3BrBScBsFhST9LHaVinEx94NM6ArPt1UFQbs4FWZYA2wA7hDVeBQt1j2UbniEF8dgFPzMCWFpvX4kKXRfAPa2ztt",
  "key9": "56EbbAC5Z2ek74Yi4cu1hhaYR8wRVdE8wraZFfXCgC6T8B9Wo3xj5VAqZ6GZA5g35EkRar1GpZcHpxXTb7pMS4nF",
  "key10": "45KAAUy6KQKq9ia2ZzSZfofbHanEtnmQRzUeUhBdA8LQvvM16dwYhDr4dRgeKGiTVECUKPgKy86iVWWSbfsWNw9",
  "key11": "4DPF7QHNUDbvxPjJpiUdMeNtG6qAb4kbKQcuCscVaCGGpKpZXGaqRANtFdDyYL5AJodjBijM54wDG8Pue1qEYbSw",
  "key12": "vU9hft7TsXGenMvPhuCixeGHrmCkNVp5p62Z7kxZU6Z1C9kGuWdgdqzEb8xSm8n5nbKuTWpKuxqgLNUfHzNrNGQ",
  "key13": "kKbE9FMNt5EUBVQ78PgLaYPscAqcE6wQdegdBhG3mUxSJd3nFYhTjkTt7pAM7wWJNz8fVkkhaNqpuAKtxEAv4nf",
  "key14": "3PSMyLmsf5nMMUX5tqUDg5H6MJHQGo2jbQGeUbYYFGGjfeRNTPDq8eABpc1RP9uAM9NJVTdRgGuYthpznJn91Qz3",
  "key15": "4V549Ty5Q1xsS36nC6TNvm8pPn9FiQu62eDtwTZuk4pdkxyFHVoQV34tH9ZussTQQPJu621VnSap96LQVSJPR8mE",
  "key16": "5VgKMrPBPn2rgnKzWYySveqrvkasoNN5V6irUBNTdVwym9GMpXTWAJ724LNFFsjNRB7s2ypiSduR3sbtCTERyk14",
  "key17": "2nfv7txeP5uvxyx3qkQ1SuaLMB4vn9eJSpUMafNSpzacy88MhX17KChPcX6WjJRHsLQMxLr1jx83Gwv4UV962QxX",
  "key18": "4MUam8UBL9vvNGXDYbnZkN26PqvUAKHJVWJUAaS8SpogwLamdtqv6HjNA1sUVJEuzBkti8ay2hFyGt2MDGSVtsrB",
  "key19": "5nVjqKUvKkTj55WcegCwFFs1TQa5Xr41XKV1Ydf4avFpJJs8YebE8AnzUmVLYYFyD1UDSzTGWx9DjM9F8AJtRQrJ",
  "key20": "38LLxgZ1AKimVUuNmD8aPiR4C7h3GbrTV5jeuYkYTLHN25wtUwgU3THtFp5P2XCP38XYfD89nRzsGnRKrDimRibP",
  "key21": "3JeG3ksoExANTN2mCyASdDR4DBzGwC9NJYZVtDrVUUxxvZzkTg1LZrreD8ns4QLALGPGRUdAN49v7aw3E3BEFh1Q",
  "key22": "zDm1xqiNtTcAizUwB7aAkKsBgKnn6YJJLwxMMofjJzbaM3Qh6X7AMDQcUunH6CcyiRjd5ZtCrnFP3YQoFuWP1Nh",
  "key23": "5z6f1svYY3zp2baETWxyTWbyvVJaamf1yCEx5qXDyJEdUazz8XMy3YXL8qPrq17LFPd1BJ7sk4vk3dk5KE3DLvkX",
  "key24": "fAsSfpMk6ZnPeL9NGGdimZfwx1A6nmwxhdo3DTfRUSuLpaTY9XUdRecP15AjroBE3wjuqzr4EAxqvSvy4UF2zVZ"
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
