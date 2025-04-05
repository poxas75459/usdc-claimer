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
    "4otTtJASmooBB6m5teXQU3m2KBTp5PqM4XQXpHereq2kjaLBSQCoFMpn8TCuGTDqVLLxDrmHgDWKbDwePEt4RGqZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wwPQKYtYQfmg39eUy3MTqUqGVvwhezv9o8wr4ogf83ahHWZmariyRY4aDhJnaszqbhiydP6QqxnbQBdud5qnw7C",
  "key1": "2J71vXwYY66qM8mwm52m6NH6qH1q7kV5ZGGqK4kJLhB9pp1NiWN99NxW2UUGfV8GZLQJBCfP1DM2ikCToAWGR9k6",
  "key2": "a13KkCFLNmSyEbT4S3nnzNnVt8TnFRsvX9zVFeuQyZAJjwuUQoGPigwBAUWusMbCENGxk8dT9uEmTUWxTPfMpjJ",
  "key3": "FKoPMXfMiGdptKhJ4Sn9ww9hKi84MBHdPPUBEhcVMLJ7K9sJsBzNcdGMiZmrcXgQWfEgyKoqEgxPyBhTzjNPicB",
  "key4": "4vNHhcXCgDSKwG5SURiayAwVLBki7qhrfJ8obsEaCQq9qT3yVmzg9HHWnXYHTA614o7b9CPuKFLwqPn84oWWGNoR",
  "key5": "4MPcJra7H8A9WuR26jy4yi3ScjnDpCCRxt4ZEUe7BBqJwCBDU4Yt5w1Mmi695FSyYX9z3uhZwPBQUHDtayRKRqr9",
  "key6": "3BSTTReGBtzBnWVqWfGZZPkqwLCy5pM8BLFMXiHqe1tYyzKR2oo2quz82oqNXGBNyjzSBgoPbDxA5KvR85CpUZKU",
  "key7": "65E7jjvDRXxx6G4sD18Jt3iPUXizHU8vrAyDfk6aRbs7uK7VjyHVb8Luha4c9RDmDWaTCJsVZVY1Qi26poLkHgiB",
  "key8": "4umcQNLyjqbD5syyyVXVmQUSh2rbvDdFbmx7KJPRSkdnTar64DP4AE9iHL26N5nDDhai2MDATPpL3BnK2MrRiFET",
  "key9": "4nDao3w4n7gfP35pMLQE3h8y8TsujjwLSdaqbQP11chtSfCUwpwPiGwGRxw2YMiSSMAb52LprPRT7b3S39KxakPH",
  "key10": "WmVb36q2j7DXohFzuwuczavCQ8qTF6UWHs7XHAVuWejYGmsXz4UuKGtn7ZWcaSdma6mUB9Lr3suhFYCVo4HFiF9",
  "key11": "62pyUqjoT4hGnD9orRRPhGc49LPmbvsG7ECPVn781diYyqAfuRTtxZJA7hdYsDiVHxjujFq68MfkD9L95MJXcSw8",
  "key12": "cJjuQytCDBVz4yW76PW8NJ99btvSUkhCvULDv2tygouY7gDMuepEYBLWuMhpsTGL212JhWdcPbQjgtTTmXZ2Xs6",
  "key13": "3aEjp3wSNmyhBdshYm2PhdEWnxtYY4UVCsmvKHbYrDbe2VuehGPuBt9hmntsD3BvhXAbhATseAN1GVoBy1GbWNwb",
  "key14": "HcjXBWdDVsiNLYu99w3hoJ2XSqbQphA9vpNdGoP6YDWwZ1bpFJLFJWCB1EQaEztXEb8E6Zfjz463QhuvAGdE9To",
  "key15": "3fx2qDgqyXq9Phen611gEWt1mmyPtN5LwYkdje7Q4pVE46UMvcj4crxqkDqJjrGJ1fX5sueKPVkaPbzVvY5wu3Tz",
  "key16": "BTpGP4pyF8U98d2N7md9KAjg5cLNsHZ2JbnFgBXphRBFF6X8uNc25sqfgPRr8gkJdsMKoBvoYXxyNAo8gRvYt9j",
  "key17": "39gtUb673BGhR5ssGQ9XYzPUWgPXaXbx19gkPp6vcegR8SVPj52g6vrvkH9G4EASAw3QsgBDhUbNw1zYv9nj7UuZ",
  "key18": "32mZKuhyhvQKXhiRzpqcYTyCNqzBwg7fXjF4HGExTPoiBJv4u742HYGFG3Y9WipUa89MnZLK1arLs8mZR3ebxVP4",
  "key19": "1mjdN1WUJLpKbT8h5hF9JNstrBR3pyDNEDJNei21y4gXTMYXvu3FSvK9hRrvYJaahwT5bzfGJYYC5giXSdYvsEu",
  "key20": "3aiNvoZQ7opkEJDkXt3zsftKZMC3W7LdNpMAwBps5brFfi7jsvitvJ2pee9iWpWxpZsNoPb1343E3j1PJuGY268p",
  "key21": "hPTC9TsyXEtfpe18kwVEPrHUUPAuudDSBQETyqvCF1gTMxQG7bLZRP87inbmmBgCTW58ssCD3S9XGy1xGeG9MXB",
  "key22": "mGgMFCMymojMfKEjb9YrMNEQ1UNrurs6XfqTW3KPKb4mXEEh2d2zz9DkVYNy18Zkx5Jwm3oKcSyDjrixfrudx5z",
  "key23": "2bQBgeC698gsFwGoDAHNZcxfj2NcR7jxwvQdFJM3TsphRrePno4NzzFbjP3RUeWDNe3MvtsGWPp2kCzTu7Bqfooj",
  "key24": "3NQxUqsEb7EKey92f5Z5mJ8Qherx4ugBM9UpN2zicL1jkHYrkot1N6PEDnbYvzchE8wZagiacoyeY8yu2UaUYbWG",
  "key25": "3btV9RbUSimwfbNBXJLUeyfrJ1GAMFGZiQidwoED9SSEAa396Ta8Fnur3qDZS5yo7y1f7LtDy4huHETntkVDfnFh",
  "key26": "Gw2TuvHjEnrjNBzhToweHqouPvYjWHUeGAFtdQWUtQMB3vzUvjs2tLxCj1EpLLzeDxS9SGhMfb1LdYMiVZptW5Q",
  "key27": "4hLrcazrX1haYopgcfVAozwNfuabE8BAxpKXn4zAedNJ9JmyycyPde8SWikbMQc26FUM23AhQUCViQqt17Q9c9wa",
  "key28": "26EXPEWjjBa6emFFCpv9eXgCaX3Qb98VpSjyHpSsN8RZysEpXaj6KiHY1H6RV3ebekG86acMtuSi2Sqo1BwbMxXc",
  "key29": "2b4u5ctWYPUidLrTFByu8KFj4oBwuxhekVVJtPvRJhJGBDFREJUwkUqQeWo1y3s1GGMjzj5tbEEbWtaWqB68YSGg",
  "key30": "2n3MaTXCotyadfYuQJsSLtqvktTuK3QL8f2S7qVjbukeWcyb7iW5QtRzZFoodSXgws82pSw2jSDHiWjsgW3dWmQv",
  "key31": "39GQJe9wH4gKaxfrr1Jb4sCnuhWWyuQz1jdwxas8h3ELdbfjaa57sdnoE9Yn2crHF5NoQtzXoX5fTa7rD62SxYix",
  "key32": "4hiyNadPCGxxjY68G3rxv3rZuJR4pwYNwNgvgDdZvmjXxPAmSVNkKyDZWG6N6DSYUwXeb7pTov78dA38nJC4c4WP",
  "key33": "2K7pXXkHZxPyJtaKWpbEESVE4oYjWFc3qUfZEyBzPQkfNv9hvVD4ZibqrLf5nNnowaXTrNJqtAMi9JeyqNeRthVB",
  "key34": "4nQShD8fXmYoGFj55chkQYMaPsfvafUppjb6L52m4ieZiDyWTPdJfGHPxQQevNjGRzPX22Wo78oYF3f574JhKgaZ",
  "key35": "2jGh5j7RGys3YqxrUmuTQpfz53DtLQHSdnJVfUBruRA6cVektv36HsQaYEm5q7fs9nkW9vYV8Q8LsC4ygXjQf3qm",
  "key36": "q68BnyBjc79d46CPA5oD2F2zPoC2ae6RYNwBZZ9mYJ6oNnLC7a3JKmtjbvW2y5ZDewBkuXBs3sUGXZu1e8EpWtk",
  "key37": "2VXq5UpuVHTxirf6hVbDPf12mrPUkW4cHmgU46ZTF4YV27pJwi3KH8de1LWeKzttCvXRvfVmtc64GTnSrUwXUaRf",
  "key38": "2xerE9XarjsJqm8Kz3cdLsJF1CFPY5Vk3s5CFWpYViCjGFwUmAUjUszAyMgQuGsd4qLtM8NTrJhi1ao9Wb5MystE",
  "key39": "jZLsNzNUFqvtCeK4mSsQcU7erhpQuVtvUXazmbkKpusFKjcvUHPBLN3rcufRzw2e3bRVCrt8QABoQmpJCCDSQoM",
  "key40": "4CMjRYuc33T4tcumsDkM8JqbFZoYMP2UuxD8ot8b2D38Urayj65bSJgQwrFhVoZBCMe5MVZLgKfwhmEXxUacG9jw",
  "key41": "5ujAU7Gr4vi3XtqSC4WLiW9QejEFKAm61HBAS6ukAW4tERbvBEKNimQnQpXVwLqY6gjssAPPhR2yL5aqxcnzuJWS",
  "key42": "Q2d1MEWoBa2sjMgnJnSBVSbDzo37dRDDf9dtQc7BJ7nGFe4iKtZzKCUrXYfMsjKcMzh2DDNGH6aW5RtVMVL4Ukk",
  "key43": "4qtjbC76QDA3hF5HUKx84M2zc3T15S4VRsNLSzMPXWnefMa6pDwYoinqCA8g5tThw46rvEfKwLvWgrt7L2teh6n3",
  "key44": "pmViVTB6FLjhPgciaA72B2QoTDGKCKb7hHwL7mvRZsJJ2iFhGp9FTEfsQ993vVwGVfd1sjjXyTEU7NSyeXDxB8F",
  "key45": "2oy45M8Gcv9FGuSyRAxHmkgtyeJEMnHBPFXLpxRjxUsvNNXoAF2QqpyqBjbG5iTk1XxijsXinWi19K9MN655Y8FL",
  "key46": "q6ggdQaaCCwGkfUtQQy2H6Rk9FwvLHWkTnfy6tiUFo3zwGTvT8yEA2n3r1tqzsA8gK1x8U5bogsPTVbEPkLCpTv",
  "key47": "2e3ZDKL8cxPSf5c6Wiv8CfUaQV3PU3JEzY56oRcGK9PZqwjqUisGNpvMLhKaLksUXTz8HvsftAqFZVgLpUpQQ8WZ",
  "key48": "3tjXT82DA8imfoHwK48gFpWQC7FhpFcUiFXfw1jRWcVJJrYAQhPNMcc4JoePbXd7Gmn5Qw6nqH3QHEAVGoHnwk9F",
  "key49": "5LTwajAPambCt1WEoQNss7zRQeQ5B2GkAV7ZyUvEaACPhpeP6mGaCwnfawURypLVmPdfoNA2vyo68pbEuv8Fg2mP"
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
