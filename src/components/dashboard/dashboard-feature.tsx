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
    "2fuxYbaCpyNTcxuBHqATW2cpjaVhiGzLeMTamsW88e9KRpq13z8vsYD5sfcyMKCUB3tnuyXkxWQsRb1yyJu3NpdC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39ysVbGw711Rf5UsoZ6s1Z4rP6yZx74d3u4XshBNFC1osRT2PSLkRb6ui3858hL6EuyNZTV7f5kjytfXhR3CfkMz",
  "key1": "38eSCmVALZFMjYHQ1r6Zy9198tkk6pjfHMpVefggX1yoFjWqZT4TxHMxaRXtpCP88XzQ68zouej6i124xZv66yDG",
  "key2": "4LtTDwCK5w8TosGDjJsehfcCBsZLpYKUGiY3fZhkJvPuzbbvsxkAhc8APrw9SKoaHZypwHwKDPdWvPMLYMmSrLEt",
  "key3": "34UMbFVuusrndk3KM3fa3CMvAM6Ltii2CtwQCgJ9Ya9o4gHCt5UQ5kTUoMwtriFrSqEL4Trx2qEusWFV322ygxgk",
  "key4": "5ByisUeUHgdwbCh73k4mFF8jVVzK1tCFpgpCZeNppW6dJoub64aLeeFyhfozjHXsjjX2x3ADo69yBCko5w9CMzFa",
  "key5": "2ssLycGVCYUwbiCKiP5mM2Yfii5ZJS1E7w8P645fkg8u4PoRZ14f5W4nU16xVhWbK4QKpagZ9ChktCsEkoMKF4iy",
  "key6": "527B3mZjTGufrDs9mC6YMcdYWiVWiEQ4RGkVa42u8gKzXkzjMhCrviUnjDtRH5eqK9NkHT8g9izuSywBrbW6s3xq",
  "key7": "2sFF4owjPryj4qev2fnasiw3yXBZGqhdN3WnAPLGwUJZ4ndpAXZ6jraweP7ZsL1ikHQM4SH7dmpSB7nq6EwFBGWY",
  "key8": "5HBCQSsgyAsRBKZqZbqqYPkDjgJUmzaviWprifvmMZHEK1HciaGFr2PoMi5fjjJTBQ2tTpVhStm7jRqiDK2FXw2R",
  "key9": "QEf7MASkTfNaaEY1xwk1JNpjCVCD8cCfha4grDUVcdXSsbGELCE7rrefjqPE1pQk9Sz1bxHwfnqFuBhJTVoqq7E",
  "key10": "2L2B5WVuw7nzFmm8wPvR7EMcuLh7J2Fc6hmxe8tM1mf1P6Wx7dbKPSxsAaFDXmiMtdvWYjuSV9FueUWZWoqZWUrT",
  "key11": "5EKohSaG7YqELHwdHyYCHjhSbE77v7vfBk7M8oZD1JMiHsHXWby5BzHH4nWpfvJogwqLvcsgSRh99k81zwjuaY37",
  "key12": "H7s1yibjxHZxgLeovfKpf4NxQAm5aZxWhNAYevDUikguKNvkBy5mTzWLcaEwdhcj3u7LkgLJmk3rhj6M3CpV4pc",
  "key13": "5A3gQKth77Z4rhyX2bK4D5Lm53zugDQjwPDBx9quc6CbUFnq2PywyQuET7gs3qCh4quBqoEZmhDPMV6D4xrETqFh",
  "key14": "2c22zVT5Nnf1dHmLfmoATvdT2KdLenMN2vLRYFrusN9wB57mN9XEhK2QmUb4wtX7SznqnnpEuTKNkb7T4bhrD6tE",
  "key15": "3gk7wjji6uMNN3Y3QP3ytWsxrKau5m6wMAV43yhvUZ5juf2JBFeCykY7aDKrQpX8rYxKqrbqBo7QZscjQzmPjd1R",
  "key16": "3zspSmFHsSo6ifeDGb1qaMYcrQCngSs8hhSEHjx2RcoHJB6nmssmvPooN2w1TVRw6vueM5BjFCrYfvSE9zFgqubY",
  "key17": "5fRD8JWid4x6335sUbN8QLafTvzUacXyTeVVTzesmJJZYLk3d86Hiw7YW4rQVyemnU23wML836KAZfd3M13uJy5y",
  "key18": "3Y1o7ZvRhj1mHLfYVpfRWZ4mELtazoUXmqkFPAFzvBXhNjaCMFNBQvugEWpbXYJCr6JBwKJGx53HpDgywiocKq9S",
  "key19": "5o6CEBYt9oVNAbTRQE7rtAYwX4ziGW2ighCd4n2vRJbETiSGFfELrtTmpJcu56WsYok9SsnhhRpswYxA5D5dLWU9",
  "key20": "3axHiwqtCm6NqPpSw8MZFyiGgTkFcpSWMqZYSpmnnkiHKqk7yyyuRfPMwnBh94euHhMX1EqDF5DAk8R2268pzNuM",
  "key21": "2H3GwR1PzPchcSGRsYqm5vorTd4XuiUkADo6kVFjKakAJtRVtQnsqLtFzdvGBox1mLZ7kUv9hjJtQxYQJLSoS7sH",
  "key22": "Yw5cQHrsdqZeegBJqZ4HF7dwmrQ2xc3CpqQqXw2R6sSBPNjc6VBnRb8Uj4hmys97mmyBnbtEEQY1sNvntfE4CfH",
  "key23": "kovx19zcvfynsaJMph2k4bLaAdwkWF7yBzKketKpAZrkvcwkqGPsFY9A19vrdepPFix3B5pPXCwmmYx4bhvU1S4",
  "key24": "VSk63EgaBuMmLy26HaSE5uXVwDE8B36Mv1cUR9LKJe5eQYfKEgcZ2DU9pS6ikVyMQsS4MiUvvgwhfbyjxYfVHob",
  "key25": "3s28ukXQ7bJx1juT9Q6UCThRACMJ3jBCWQDWbaka7pExc7njUkwdi95HkvS9a3oqmWj7BHdGLcxrr3C4NpurLpFT",
  "key26": "3npGkZkGqqPmr91CTCbh5n9jWoRfyVqNegThR66BKdETHVCPK8MhHsMiRED89hUdjEoV5ADGXSzpJU8YqYTrMy6V",
  "key27": "5dtyDc7a7fGMLCu6WPcs2P7LC4zFPDppbtbkBDYoUTZuJXYHm534nRyDoqrCzqL1fKhsTRCtPxxW2UtFAPSoxYFj",
  "key28": "p3YKbxVDwEd6Rm2PA6MgBFRTBChbuHH3zR6zaaVaq2hsHooYuL9UsVCbAwR5oqoytFiGdCGNrivgZHaTf9rw8qW"
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
