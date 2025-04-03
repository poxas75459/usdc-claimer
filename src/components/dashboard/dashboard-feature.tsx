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
    "3v6TExniffB75EfU9QCwyzCV8Au6MTEPLJ697xHdmwM8LHukBocS9F5dTVvcVYNxre2TYuPqy1SoNQMoM2D69LKP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dyYnAbzaP97Hbjc8kwN558jw6MCXpYHznWHW1ZevkfXx9YBvgcjJwB7rgAVaKtVR4okhqJ9J7HT61M2FqBX5KoE",
  "key1": "5ADoE6uzU8xS9tcB5eFzVHYkYoYP5CBRrXnze6dhkLGNzk4YUmq7jmk2JDCNdHdpeLwxsxLmqFNsfpTu6gK6yAHH",
  "key2": "4rqi3WMzD7xY4GKFB7sbxqN6jwYBZfTeUHUWYitrucpfi8pyjimRWDPsGC6gxApq4GrSsqSJpqj8AdvMUm5buqQd",
  "key3": "3FB34FDTWu1to3sTPFZxrJZxYppotKqUbgey5NcrTA5YEwNYpNQ2x2z4yMbasSb162WXUzcCQd9Si1huFMYWcssd",
  "key4": "34k1kLmjNfeDMVjfpyPf8BjimsL7yQEvYoC5fYSgd8huxRxt1Ynr5bQYVe2vS5MpjsBS487ebxcxvcbHWnUjdXb",
  "key5": "2cvp4a8LBqcWbGqbSQUHmB24ZopZ8DyvwrYonTELoVbfNwcuSJhdkbJmgaidSTdaBLmyVmFimS34Y8zjvkjvnB81",
  "key6": "3QAe2Ywhajngjthn6rEdbw2aa4Ksjseo1d518wHR557ZM548g755hE7f9r1ihvMYFYjo3KMggX7mHAUajHTV2Ziv",
  "key7": "56THsKnEDYqZ795qe5wUwoMJa5Hon4H11jWvarqUTN7bRc2udAJoZQTtk6ytZw4iMj5icJSHNJC8tFC5yRcZ6oNz",
  "key8": "3mqeRB9fPv1qUrXfXNdeGq6C77jAPi3zuE9j1FmV1PqU35pkW39jBYyHrBrT8jpicMhgUbrefTxfMLxXb1wrRwRq",
  "key9": "54fptDTeAndeNZ3EKozYixqPjc3N5wFKvZBvHGpKYZdBeaCr5989e96HEjsL8kuYqB4qngotEcrzy46q6v2qqbvN",
  "key10": "4pdpj9pcyZx7m6Bwp6NWnL3jD3mCPZzGxg8A34ZgXPZKPsRpuuaHXgdvjGd3TASbRHnmVa6NAJAqHsdoRmAbFxeP",
  "key11": "5uzebikLK8rNUYoNGorZqsYZtdj8dTmvQx9Nnf3e9UbM42Y1P7jyFhKLrUUTf8HFSqEPcK5t3Tw5Gx8yF3X5acnn",
  "key12": "3SiXDGQnLC6PbvzcYU8JzKgQeSYB8xYbjQfKWUrWLRnoMhJBHaKUZyotQ8CKzzpR4sp3Vfb3NeccEgEp7s9BXUDZ",
  "key13": "2Um3VZjhe8qZpSdNox22UCQGziF7Sn259vNF1UEKpNBR68o47Frr9Ukfje2xCCZ96UdbDAREq6fd9mUBBW1CDab2",
  "key14": "5iQQfSnbKBPn74tZrJehinzsD1yJA2gRpiEAK8ttGugBfm1DnKTpehxycehuatHqgq7gMCwrV91tXkLjYRSmcUda",
  "key15": "3DdaGLoutEtYn1qDf1YVGacwLDaDPj3Q3sAVrW4EviMvCmxziAKoKmd48uL85T12Aj2rBsd4eFiua8VycZAgTQCa",
  "key16": "xaM5UhK4Dj1n35aDeR3gE2NK8Aqnz89e7PkQUjBdW9gguvvV2KcDSgLL9m5Kotcp9UJ6rDvRgUSAxDL6sNFeERi",
  "key17": "2HbJAQqNwVMatkA4rsU1ZPAxvVo7SnEyJJDa1jvtUjooXb7ajhSBLL2UW91NA62ZDUKAFypNLyLLZxeYzPEGXxA8",
  "key18": "5SsjWfgXy39gVH2gKe8jUfffb5J9XST4zyn47jbxSsd3rnDxGiHaDhTg3vuC1PCfncrDcWKWgrx6HjL5cAYhoPKV",
  "key19": "48zuAtUNBDSntPe5ddGbKAy6Q4yji1FKGyLACPvd6n4e36rF9tVtLBByB1yUjFo4VbehagyV1juxgBWuy7WexKzb",
  "key20": "gVCL5VshLsvad4RMQ1C3Ev6xn9Djm1YNvejt15YNgRwWB7jJ3iM1LWtWWbU8LiZs1ZjkS3h6BZ3ZVnkQXQ9zP3D",
  "key21": "5yjHQquVUkWwNxnzcngXyzN4uC8EoMYGcWMGXPGY3MFDAYFUVsQ6NYeNC6nZxBojftLLXL41A9wSZA63PpM9MJBt",
  "key22": "2U1fbhbvEKZFZBbnYX4k1GgajayVbFfUbSmUVeCjjtcDZ49wDxEHgkAZ5peeuoRzkNCdzhjEpEEvBHjGw9CApokQ",
  "key23": "3YHiA5dgK3Tebi9Su4mV96EzucoMLTe1pshfwNTDZUpXPPSZQX4PrS7yoKtKUnAaHjkzox9dMsLVT6EKcNndgHnN",
  "key24": "3T5Paid5jv6nD94gR61k2LygNo9cPnbdLhKzCjTFdvetgksAkC8N6M91zUeRrvd2FmkougQmJJwfGUE4kbiTMrjh",
  "key25": "3afQDNeWDNrhisPxhGZkFJYdwv7iAEaEDDADbPp4FNYipSh9YKpusGmwxjrir8LvtQB5dvUe82G8MMKTkE2FbZRa",
  "key26": "MPDpw1kNxXBa3tjQA6SKvS6mkARdJvN6c9rqS3oZ4NkJAooEtaqZTQwHZNfZCoqzQxZzqSrmGXKWRd7eyyJJmVC",
  "key27": "421xCG6j9ye1J3gxT7Wo23Ez5Y4mrQ9oYm8p6CZNSP3xDRpGwMh36UVDwPor3MhMoM4piP8fb6w96xfBww9kaaLt",
  "key28": "3TZkidrHAAM6iyKCDhBEdKHBi6n4x6bkW1pW3Xz1cJWqF5VyqsLYzGoYHV6rAcZ9DLEXiePYpCtcyewC4RKJK8fr",
  "key29": "5NyZ9MdHPiHWR28ajCkrDk7oJgZp3mS9wQYrdwsqFbBkoMkD1vTTUorU8LCT9rJqFJGfFD7bzdW4yzEf9FMrJSAE",
  "key30": "5MuoNRtv2LUm37GoypNEYuYjpSyDxgXT43ms9cxseu6ppsh5a3HFaXiTQbcDqxiFbKZJzhwRQ3KRZaL3gCU6WNUP",
  "key31": "2L8vkG6sDwDUUZK8JczfRmUqnJkYZzM2WdMuZvq6PrW8yqxy3bDAKYpVeVbWRZsBSRehacZTwfHd7PVaQpkoc5Yo",
  "key32": "2QUxxdv3LkWMeuvxYiyED5p4yDeuC88aw4gLrNL8kyypo3jSGaZAr1t39xUZ9WEzozwxmxJ5PWo343WXSEMANgzZ",
  "key33": "JFmLvUEY2go525QUqbQRrg8w63RYGWHg1TehrP9q1Scb8N8qKs6tnoMvqUekp8zvwe5bGRenkqLnvQUVaSeePAs",
  "key34": "5oLbnKRevgkQit3JrYQezb5KsR1ZG8Wi3K6YPYj18PY7zys3o6kiBeBCnimkHgPE6bG8HcaBCzjPJSMuKKXsF8U6",
  "key35": "4fDuaFMpUa1duR8B2vq4HJTyidAcfSxwWPD6tsCKxWQ5hrC3M6XUc2hpoRTpyaGmNe8xdiosLgSb1SEeoH6RuED2",
  "key36": "5wY6rCPvauH8gMKJtJkXo8XwDUweg4WRNwgJVzsfXJBjgGscW228kFtGgqg4HtWiLmpzGnq2Yqo8BeVFRtFmLPgU",
  "key37": "5jUerahqF2ddDQberWzEtnccWYPinUiR7SRRQLoGQnx7DqSD2se1Q9jpy87vuAo4xCPqhHUmkueP8rnTuwJzxUsE",
  "key38": "4CqE77PaCBrzn1vNpPa9rUSDs3SyRuYvXDH4GWetuoPikG1DicYKkv9MX5gREW2t4FMfEhweHBaB9gmDmK1ue69G",
  "key39": "2Rru6wYTiXXHyRSSx48Nh6QJSVnBoyRbMsPWB2nK2anpAbun7AqSoQMjJzFYHfoiMiBmMESNDgbzX534gxKrKa3w",
  "key40": "5AdHLdjjusDwSrnuwkvaZoz93zjA3pywnwLkuTtHXYQNx5KvPP7h11HUT5kaE5FogcVC7YeeKG7aNhHq5WyiaVk",
  "key41": "5sMfFdXWWmekAZm8LYXqmRtRo1WnbPdXdWx1EyMRmRczJiksz42Wk5Ui8vKtnkYtpi4F6DbeS9HPB4MA1nZWAHEZ",
  "key42": "2FN7iaLB7kak4cUJcdWWpKkQXrW9TjPcaCe6Q74x3BAG6HsmhW54h6mZkqveuyj5kZSRdt1EBZCaL4T4fDexXcmQ",
  "key43": "2ZCGM9dnLTZzzL6MXMML9VYqJTyzq7Vs9VEbNgfgWmbjD4iZQKVsm12nn3YpnyBkYq6bCkPJTzcMwQH2d55b97E6",
  "key44": "5dLAPshvn5nC5GuagCj7CM8AGXjKtebnaVYommg2Jc2WyJ6Um57nrBatRvHU4jPEB8GDr4hdB8b3sPgYR8Ur37ep",
  "key45": "5hWUE92vbhueK22hc5t2ftGNJEGvczf1iv2yVheTYD5BWxKJvWm3B6MV1wnES3aYGdQ5Ra2M1aLox5deGVZ2YGr8"
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
