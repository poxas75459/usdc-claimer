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
    "4usCMbAyZBKsHXbh59CRbB1LTMhrpftf3Sw7iDhPaKokqXvHVKtpsTk6YipcxYVXPqfGaBLSUY2AkzyjhbBVCKXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "514oEMJb4WEF913oowHvdRCSj4ZbrXjf7FcYzNtZQaG4F2H5zcwvy3Fgvu9JSEWhX1XFGAcCRbNDB5uJS7E7a1S5",
  "key1": "5uoAtUJyfY4TiCkvGXzzW4D8n3xRe4xR9jKKJhr9XTN2NbhiVi7kCrq6SGuyFhccEbxPbeEeTpDuLA1MdC99WTPZ",
  "key2": "2i3swbRvQ7a9xMYqKnyeHUUArwcuC2WTrHQfzxXQ2SZZhGzikoEZr5HMVD6Ke22sMZTLH7hYshDANphr4AbVPyPZ",
  "key3": "HmgA7nPJkmgLix6gBQjZZb9yWjaFkTnv4dQNuT79DdDB94hSXSepqLvxsZZxcSwT1HPG6EHaVBzpPHrKnRk1StT",
  "key4": "5LN6xKa1YdDayWgG9JDMeeCcJwp5DSvfA6KwsjLjQSJJpvZVzECXavGcyavcs4nhw55LgjE4BjxFSZw5gocSmQiP",
  "key5": "2fh4WEQxoYjSQTEQvuK6UAqYUt4BkUKfsWGS39z1uT9SAtBha6FSUyig5QX6R9HLVjyL1ZhzS18Y8NCDU9SQKqg6",
  "key6": "5vyjfH6GgLdhomcRB6KBGkhmfdLrd5gWrYYMaJserWuRC4dJJKfW2v8geZ5zsmDTSLLz2vZ3atTXAnJPq4a7oCYA",
  "key7": "3yDG6VCahbFY14V273nVmGWWcr4LXQdbJFKNFFg1Dxwc1YUs26GQdZ6y3s8QKpdPBTHWKsHDQQXz5mCyiNpJxouw",
  "key8": "2gK1nvZfmW7DtjgqDcKNUsG7FjxQuFcRiZ6ipqTMGW8MrbdJScZVuYV5YFcwXo6shh8scQ3X2EHHcfEnGQKZXBFy",
  "key9": "34mnZW1d7Qd9chFRmRNxYCvXJSpCBxoxHfGRZFJXo7mcF23SJrAmX397rLkPz8nYpSjWode3AZvvQRABiEwfQYhz",
  "key10": "4g4VrPLdxnxZtWwPAce4ZPoS3t3A3xyv4XKdEsgQjZSjwgaabigffgpkWd4QgbnVvdqaKMxWU9T8j1Px6szUSPDa",
  "key11": "5XVufujszcs9Xo43dMfbtL9HZqQYhwaTffHgu3CRRdyzEw7CfYEGbFbmHamhF2JTH8KDmqmCL5W4RE2UM2WweVff",
  "key12": "2M2miqXGPffjSp3Fuzp1YY5JhKMD9XKM3acF8NSEVm6duZVUcebAnHEQXLSDG3WQuLcLu48Qs9ZZhDEMJwza7nLH",
  "key13": "4WB5GoC5BELg6FBLUnPXDuhiNaFs9ec9oYB98ZgRSWXqfGSzirqNny3PhptY4bafMfCCNiy78PAaVxkDp3Ahe52Z",
  "key14": "66xUjDBR9smF2CpjkQJfYMjFB1SivDebfX7BMqyGTVM6AnQExVRVCjr58tvdKy7tpCEuYeJZdaGdPTNJjxsGWRht",
  "key15": "4EjWJfFzuwjKecxWzLyYkqe6tY79BT7Xv1s1u1kmCaXUpsjh462eRbqUEEtbdogSoinnNXuFQPSgkx8MbLPVGDBB",
  "key16": "5c9pKoH2v96ZSZfnajH266WeYnndcNLM7TiQiTsYpkqfjyFYrWp2NHREty5izhXh556vckWJaigsxJwvCLUMCsy5",
  "key17": "exiW84W5FRoWotzoLtaWtL6xdT3YHu5LpSe1MZy35L7q3UWkAQQgPzYufRoqKfZZs24pZ9iQMpe8ibuSjuWbNce",
  "key18": "3vtiMxAosRXzDFwSvPRo89biYFgUqXt3hLgeyYLd9dWUbS9crZT5VhzyUHzxFwLR2Vj6g4BHi6w8eB2QjyDH7Csp",
  "key19": "2MybGRKbmDCpJ436rdcEruYeg8zppyErPDUHDrG1pHmoN2F3sWVfNPt6g2AjfqCtVRQrdT2T3qB1kKqEi3MzmTjS",
  "key20": "5JBnA1bUMRjjutgwXDXe3S3ZVTYCrjemjMvLENEnoMXJgMkKB4PyNAtF46832tQKvgFr7BP3g9jkb61Z5r5Qjw6G",
  "key21": "2W5V5J2u66iyKLV24ax2ypbnEE23DpzTWozS7kyjbdZXZLwBcgvxth9yLm1YuUvhnb3D1yNddgaGqL2pTmttmaPw",
  "key22": "5prQdds5XgYCNwQwtMWrmxr4PFk1kNf4K76FnE4bzXuoeb2SgGewQAXBKgVcfYopztZoAdgZ9KHiZFKSicYNBm6z",
  "key23": "cw5BSbXnQsHRsCz8PX4dCVe8JzoZMA43gQWnuXWP8Ki65WDNdM3ApKnUhXeF6UPuGjLrKcwed8da2LDjsQeJm6a",
  "key24": "5SE6fWq1AkzQ79UUmmZP2vFDX2P1oS3Vf5BNq4PhvzXkWY2sHuwiavbDE7mvPSUnX5uuWQ3CBjaWq3mn4saScc3d",
  "key25": "29zx5ejHcv7s5zT79N598ftchpTaXky3v4o9H4ju92jNyqmFjYJGpDhiPdv174EDwn5nAhywqqvPVS7R6dQgpvue",
  "key26": "4NtihXM4n82HzQr629EGnJ1ezFY4JjLkJtacezF8qtKqjbpRRUEy6cNJ3XGuNpimGC3KNwHeYzF4Ua98LHb3gUmS",
  "key27": "4hUYWNPKcKzQEf3GeCvDAcWHaqX9MZf4SHk8iX2uVBYB88oeECQZunVNtkbmJwTbxqCAE8Kwph6totjt2mGwFG4Q",
  "key28": "4H8ybWtLZAEJs2MGBKgGxUKDgWy93qNGonK6H29ygSWmZbRBc85b6Yf9uTcQm9FKwP3jWHJfotFErfGUspQZPvZS",
  "key29": "DYdbhZ14awj1kaBCGNkPDFWbZmqbVDgDvzJxuzxY59kguSZbhBB4Aae9Amtq9tMYmkGcvNZT6EytRhGKkpgsSmW",
  "key30": "2aLHoJr28VpUguuuD9rjhtHXcWU5shKZE1iaUqfMaRiSTCeJMMtpxdaAh6rG8jXy9jCsvA76hgVFevojFXH36Rc8",
  "key31": "oKn53FWY45iFaoXwoR6dxD3U37ULV7CAWWXWYo6QL9gXu4LZC9hGLn7AYFaUVnmXoKgUHcMu4SQVxo5Mz5UX8Po"
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
