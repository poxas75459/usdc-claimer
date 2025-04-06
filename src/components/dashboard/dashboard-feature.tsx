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
    "nKxpBE9EtjsD58FBiyMETJpw46MdtYcVSx8Zqba9iA8S4mQPCB8hsP5gnWtRFj368X5Ay1nwwDMCm2WGL9Yrbjd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EFhdrCqZg1PFQr956mFB22tuoYsXSPgCmYsEMLrvsf6oQ9ivSkEfjNjEv7BjSZHr36yCHqVue3RNyPVkZQxuhyM",
  "key1": "5KrLfaMY82V4e8Ayr57wCXLdRVuRa3PdAMjVo4RavEYCUmFeX5PbLN7i2UdxHYNuAZkgvMdBVjUuayPtRiTWPHyW",
  "key2": "5PssWidxqeziquoEYE47QB72dSwiG7JSXj9WQvcc5SW5cY8mU1NWFM8coXgRrvoaAcYd96ELNL282Ad77uWdUhcD",
  "key3": "5Rt8JDTpFDAxpppdSeCfAfbuZALTDhL394udMfGTGbLYZ4XdRTNff142AMNNmfaCU6PoJjkd4EVtUE8trozk7C8e",
  "key4": "2K1wp6upojLRNwu5yCBLkaPF6x6U2BmTr7BNqD1teTJU4pCHHxSpKE4EXbSaRHAmbaZREpdaqh2xyRMp3pjSrxZY",
  "key5": "5qsZUwrCgDERGU9sYHnVB45jHDjfbqhCh17xaYvifg4HbYgbSSBzwnBZfvpZbqWZ2xEYeTXgDgNQJQsb8W23LzPY",
  "key6": "4vM1PTPMiHLQTbP6pTj8BZ3UEbFAsVJnFsGsSkfXER9snQMTWXS2tmkrXcBefcmMQ71p6G1pxRJS5inbVMz53Qu2",
  "key7": "3TNcJTurmYwrSUg2pjG8tMuGYCntnA282x69siK3fHkBY9z1sMfmZqe4ufuqMhZCBCSPBvLkrKttsZ15ACrBFcCX",
  "key8": "4zuW8pWV7GSVz6AgttYxiPgL3KW8j7vaUnFYvvePxZmdSkMDaruovf3UKsSvKvWySuxtyFHG2EiRzVfVnrDwLwap",
  "key9": "5yi98wD1q4FmfhPyxBzs5UFNpDRUGto5a3CQ9K2EJf9V8UTB6ikXuFDq7oJVD8DApUmYCHsXNmoG3FN7P3G4tpCz",
  "key10": "4aa8Y8dbKm2SLAqqWQ5XCBe1eqffpzQD1vCGqdn86X4zcjJoqnZoLeUdKqY6s8cznBX2z7azBGpYwum7ddqL5eDg",
  "key11": "3TMU1VcrtwkJYTox6jCAnJMwSm7LYpNCXnAipcTFAwM5wY98HzTTgHLtgftTvLwomTQJqjSYpGRQ7QCjfVnX9UJN",
  "key12": "5hWorTPxrkFTwBBqS2M2CMa22AbrMvzZYwfBSiFGU9MyTq8b8f87zgLGB9ky8PLBWYiGmpA15A5aJzbNkqbm4tEA",
  "key13": "PkcWZT5GiQr4sZTau1DWbbbnB6ZoUUgvAkA5HVVyt6VVH3vBdAtndfvXB4duPUK2BwZUb8oSVS6oXHEy4f3fvaH",
  "key14": "39vLg5cCkfYSuyGWwY5n4YvyDHDUuDVeTuLrHbTmfzaDvmdNDARJB3DmggXDygW3mRqvJqiLFkvsFqqks74zC6R5",
  "key15": "t989ZR1nr6LhvdjjGXKyaq1EzPdPJ4QWLaX6daT2waYFBszpLutXDes1jPBv7fnWxc7UQfDADSSKJtzLMRe59B7",
  "key16": "4E2t4FvvrvAbRymJA5YUzNA2neCz5nTjczL92cGR9dPkbjp5ZgUA8VCNNVyt1s8N6qajTNRYmEkYefakkrctUBJk",
  "key17": "2NppAEUAFuwxHnTEq1e9hDqLwfBYqy8dj5k65es6WettUVCDBR6YuVxQ52bDkfwZSCb93gPFdRNyK2aYrgSsShZw",
  "key18": "2m8iKBiwKT69i5Md5nZy631feDCxmx2buxSAPhTdVxsCW8CMBNunxKnGZBmX1kRCP5Dkcaty52SFkueq2ktPffzX",
  "key19": "3AoMoWgNggirPNpxHLUmDyWyMF4MripuodLN5guKfLtFfaMGqTtgcxSZZ4iYkkB1jBNLadxKoK8vNUeGCks9fHkh",
  "key20": "uQEmkSjzPbk8cxMZ1YxUov58RXUJSuU3vd3TrsEJVxeG6sLKZfVyg1HpvtDtH83UgiBV4AsDALYNGR55qKJLxg8",
  "key21": "3FwoZjaUY5qurRsBN6kWS8V4goH4xZMHnG2fnJ8j7dWACP9wtsFpFEZLYxpwcQyxXUr3FZL2tiYJygb2KAJR75Yk",
  "key22": "4aRw6XL5b12qBfNDdWszfGxzQi6r4vm6oDFxUHZ8tSUR4MCNUNiwh4VZjr1rdrqfRJZtsrcmu4V65AzuYZsrdFr5",
  "key23": "3cJ4J3H3dVxoPMErd52Z9vtca7V5cfpFxQ3c6Bcgy55sih9FnzUq82irbcLRbdfRK5zLeerLb6RiA9as4xr2NLXm",
  "key24": "Mp4sLUKwqVACfyXpGGVk5e7w2gxLb76N44EMkXNULgwc6b1yrSxWSxzaBE4oCzdxXE71fF4yWsEBtvYDBi2zJcC",
  "key25": "56RcmBcmy4U3FAJJJggeZQHoUv4DDqejc8gHYLuBN3h2ayYWXoGqnc6y6nz2UMBxKzTzn42yDZhARLM1T2vp78eR",
  "key26": "5vriMvfDf8Mzg94CZUSnNRJw1vxAh3NWCamVVWWDwYwN8SYs9zgJtLbuVG7nyvP5z3mZYt9XycSK2uM5zv21qG6z",
  "key27": "GbytnJqUMg8DnFfgn23jkvZ15jrKoekmmjMMpPUonk2H5rf6LTEKNMy9jPWgNHRJcoY18GfrLwZLgmZT3Ykrq92",
  "key28": "EFayjPY5Y7h1L9wRXSzUQ8uNfsBXJGvHeJsMjaJbeznNsTQuU7CAthbiD4edUTTzzfWduE6uYhr5kcae3ngPZ7X",
  "key29": "532UD2dwvShmryme8XhyyeWyQtvxxxVai9sYvB3y2wceUXTksX4z8LvLMW63YmH5Bkr4btLvZ77XwK8RnLkL8175",
  "key30": "2z6UAEoQ5hENFeCTvJUZCgtRGJjURuT2Anbnk97oLiFM6nwQ92M9nxjLyJL3fy2iDZ1heZejtDJiLshWDBbdxaA",
  "key31": "34Yv8fpDeRMAHe3cdKXFzrQqSk3ZXE7rCWZU372iBUuV4xBZKCY9moyXShvR1xJiBUHK8quSwSB2B8LzDuJqgZb8",
  "key32": "2bqL3xPivqommVenhzzwDwFBybJA8Y7ozrUpLYUFAStVhdyLffiVeFosjo6VxYJroVnFmjLtj7F6QhbXfW9wYfLt",
  "key33": "2NXLTmG4PgCyaZ3QECowWq77J481xQe3SN7BL3EJbfp2GHemycoXGB3Q7iqvzkT69n5qQH9hzapBjXbxWpdaTmwA",
  "key34": "mGWigbhaN3N8awD7CtpxNNfumGbviwxDsmdoZGyHuUPaHL6WNsJ5HRLa3FT8CfTqB5Difvm22RgaQ4mVPoaxHVC",
  "key35": "3JWY4V4f2NvECGVtppDxCqz82KisB3YayGfZ7cjCnoeQSXdZEw7AMzW2ds7TnJ4mxJrD2kv52Te7ZbvhaVpZigbB",
  "key36": "ny8mRmn6mwsvDHTvzYq3XKUt5sJieWCQ3NuzKfvjrQw7R6rurMBr6JfPXY8kVS85u8qwUU3NcS2JHFDt6iQotF7"
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
