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
    "58WobVk497UhrBL8TK4RvyhUYMDs6JkeEUG8YmoEa5AAWp7sUhHiMCvQMqSBDixDk3vXYNBvuBHXpgBrmpjUf2F9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y2R5SBMkiXHhtgUVpUVpqRDKG5NN3zJcXMvJW9PgK6F5uU1GM2iT4McARu3GbbJvXHWHaSfdt4YMn9ERoRnUWtF",
  "key1": "bnZGnRULpEFYdHAFyVWvtGgLXdwBDqopDCXMHu7dddDkZ167nFrw65qsYqh1pwCNuK13ZDomDsEWpEE3KmUTWDY",
  "key2": "2PcxsQMsuM4XA3E8PfSXGwvp7TsDe4dffz1eb55w6azyZ2CoQ4nD8zPY543Y24FwGDxLyUMQAD2kMNvHTxGf2nTM",
  "key3": "FqJtcEAPvuzpakV5uTkSDSzEunVkEd15EUoetfusjuQiaXFWZQCSPksviCdVPzCmEJsfUHBniv61NBYmuhQ8fXZ",
  "key4": "634ixmFtxtJZc5sBKxpWn8zYcNbpzHPu4YiYFGoe4tEV6DVbRKyKijcVZj2FBiDaJWxmKhxCYEYMK1y9nTahMs8c",
  "key5": "2PsgJdKZdgzBjCJ5YnWFpHa6zDumYFqvDBi2uexSopJXfxd8ZRzqYyhFDMaKcnQzXMCD9os7FQjjXhcVN9svaXc1",
  "key6": "Qtufu6oR5ZfRrvDxHHigwhCuzHu3Bj7okV7sRjYX5Pfq189615q9cbxpvcmKCr67AMWRMupZ2NQjC1v9iALDSi2",
  "key7": "47dUpsV2sqmSsLT2ZvyzHcwkMUujruEnALwdzEn5WqTMa2aMzk77HAHCeTk4xsFZSB3HSEQ3hA8mXmAngSWT6UBT",
  "key8": "3WzJKKccq5sDvnQwuhLFWdwaTyRtnfPFQAzVy6oULexo4SZKFW5f3yuve3MdHY5m1fLmrr4vG7WjXCvX2jVmGPFL",
  "key9": "ic4ti6M1sixa3R44C2PARn43oxFLkhzGAU7mpDKcbCKTWTTJUuyyJRAqvZJzCmymP9NABHx8ZWFBomRstGyDWVb",
  "key10": "5y56ihouVAoZxiVxsk9h9Gpt42LdQebKmaPpRWnzq4YmfZwT5P1nUwYwWwuh1sYGbeUjGMst8oetyrhJd64KvFiW",
  "key11": "48qerFxL5hm3NiQ9a2qAt2z6rgdVmxrtwNrVa5yZy5R84HdCJEAhvoZSh7FzxGod57Tifif6JYq97zguCiBaLaHt",
  "key12": "35LZFqtiZEvBnmZSSu4MDRoFMKXGpZMzTGZTRdETETsU4ffMYqbSkY8sSSspYZ7sR6pWMRuqMSdmYy6qUJLoVyPy",
  "key13": "DaGeM1QDDdwnMsAJiAqTbPgUwvwMARUE9Tj9qBCfT1prU9pr2qBKUjXKXNo7DAYiH9wvkPxR4pbB6T3zqM7CnEj",
  "key14": "2EnnCbXMbBTKvc4az7yBiw3NEsxcuTDeGT95eQDpP2LsAm1t2UBPPjCZKaREtspg5tXo6rDFA4TUUjhM9fDGoFc",
  "key15": "5g5qhGoAh9PBupqfkeQBttCRwnfMSAk6Rt9WNBLafhp6NQFr89Ts2J1kG24iQ1e3rheCEaYc9rMhfR77wCyuhpoa",
  "key16": "3ygupeTf29UQoB4Qx9KjYuMwzZeBeC9tEozqtTpxcXDTmxaEhMi8gCXQUWbQeKWVW7XXk9kdMczaMWnH4np8eXtU",
  "key17": "R7KZDgSHeqRKAKUGkdAFqLjw9k2zvJ4ozMTLSSx7poHwyJAYmkAj6YbUr3nkeug7Td2JeMmJsnj7bBwDubraHnh",
  "key18": "2crp1HQVTSezxiZqXZnJhyPzttHUFtqRiDsT2abhcnacGwxRzjsKWFjLQi6eXcaiApvgXn2CyjKy8QfYAvXik2wA",
  "key19": "2QNAbL3W1URu3zfPEaJgzt9hAHrbNMcBgfmqAa7LXEUAgqmWX49jrj6uhkTrd2aJUgj8TANphucRMrJsJfVq1WcA",
  "key20": "TRvrAjoSqjrgxnW86ZvKy1V6Ec1s5tHpPkD2kadQ7aqK1p6S3KQkVgxrkau2kp8K6iNBgrJcp5i5pvFvxKaNWUq",
  "key21": "54HeH7vY4qmhF4LwyctQortsUUopDamwWsH667wWgffHpGdgmVTwZG15zetgWBJEwSkGHXEUDS3zTBF2q4gVfhjX",
  "key22": "2yLJQwhqVeytotmVAuRHvcKtEsTYJqeEFaBLBfnf81CsN1ciRDq7gJaa6XCaS4wk2knsPvkqgFxHaLTh2gDSU3dB",
  "key23": "4TxskycRZ7nuHbFhZTcJCju18aAG3AaDjG5EXn74CscMZKbNgewKLH97dzdWYdyBP5UuY4Xj2LPSd1NPv3WQr6Ai",
  "key24": "2vE9Kwg9fZXGjAxWZvhFwHRARYicWtaUJwMpZBanSsgHXYFw3bQ5dYmuiEJvhd2MB2DxSZ67vBiXhDFjS9rBtnmF",
  "key25": "C2UWx4SiWkjyBAcVPbhwcdpQkKmVHf3Gd59B2KCosfMv2gJ9nTGWCegCSTQkxdjpbCtuwK8DEGbFFXYDhq9KpMM",
  "key26": "4Er8kkQCrVg4egSzB4hd6MQVH6G2vaRruYegD6DBMooJEVvYLwu3DxHf3ddvnQZM32KdFFm4RFDr3uca3xBESs6t",
  "key27": "66HFAxLTP1Sk3C7t8ci5uBYxJbqsAgaAMt2h6cnkGyDgyEZWTwezw2xCuzyvXLsi2hLXDkhbskdhBKhvMhBh7ogd",
  "key28": "5kSg5YZKmgcVRST5KorddDPPAyrWRzQNrPJxLwc1BX6pK3W5BpLHu6HHu6LHdEk6YUdRdxuRnWxCRar3XGjvWTX4",
  "key29": "3HRtWdSyhSppgWykbedPEwDC2R8hRgTvc3WfGbcNmSDALrKY5of7A8hBcpsocaFjsSqzH19PpWGZFxUXxBJRftgM",
  "key30": "3ptetWPeCSucKbUTALj2MRdauQYySLXXho2zVPoWa3YFVz89Wn2jgbfZtVZpKG6KavALZq5tW6zkCM5zCLquuus4",
  "key31": "4RVUAm3MMYhgcmbDeRQwW1D3jttzJun5hzHQxdqj2WzRBam5ZKGi42RFozFGkcJxV4DnyqwYKFDdTeVAREYFbQG8",
  "key32": "uFPLv4CA9bF8Mb421jBQHBh13Y5jwy6RY6w4u36XY8g8fgGXimWHxg4U4pRxcQfYWTAkxjosZKf74jy4EHdmiM6",
  "key33": "4UWsMWK65U8PxaxojBQHX4UebNuP2yQ5koRXmcb8pvFwyafjJZ6A4fDyjhoUHFNw5sTnjaQycjzQSYbxdSAaJ1pe",
  "key34": "2FVf8c1LrN1uibKNAbZswaMV9x4RNATuMvfF92sYaNqVKmoKgYCVqhoW9HhQAhfUZdW1WWFg2g1T266PrRAPQzvi",
  "key35": "3vhPZPgruKaY5e9mkqATxLtfMp3mito66FYPTsiCbCZLuWdeGZru7RrofCweiWLwA6ABsmHCsVe59LMb8kr47AZV",
  "key36": "4TDG7CiU9iy5YJzbTSMB5oLCg7zrwYuKaTfnTN6dt2eAi6t98hxQXFr8zz8mmhLTQde8qWWQ8K5mRZLUtD6wrcvK",
  "key37": "5fTueoHGM9xmgQguqZfYxctTD58Q8FTPQ4vn1H1wraqpWsjAL79gL47FnBmCHYBZZ11j43HMmsKZA5W3pKvFRUU4",
  "key38": "5wCReexH53AZmTFvjS2YCW7tq9pXQqWvhuRfTuKpfUeWTq9UxJMNbs6rqEa8jGFx1cgVYRGk5tFT5KHRZwxenKFY",
  "key39": "s9wn1T6Q6etLwKkCYSeHZXrJwnzdQno43wBd5TnAiSgTThXAnh2W29hhLw5tdUpbFARLJiz6o51VHGDgaH1rBJf",
  "key40": "4L7Gt445BSMESbkrsNoUu18AfPnwtx5M6rUNKStLV35wT3odeMM7JQqchyppfdEKNTZ1hpDVNjUjChQjqDKcRm2i",
  "key41": "3t5FwWpLSmMAmzAkdSZTa9nZoajaf6DRGMZRqnYEhBjNQ7T7uLXLm5mJqZ4YjbD3GoN7svbaFLY1JMtADVxYpURJ"
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
