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
    "63pGKCxyxoWBtCvkTp39wFY7DHVcTjZUPfeY8DEroGYJVx4y6KLkjjoHyZWirb6ke69c8Yxuz8EEZNobz3xj7zTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wBEndfN7ggFxGQivg66K6P4AHmxCWGLDNZrUHzrVso8RXpGcrH1gxskbaT2ekUn93JEBZHasxfSWSZgmM7WGT6W",
  "key1": "gKnVMfP1DX8qx3a6beXM4QZM7Bqk27DL8ZZGaF98YFLLf7gJbMHj7JAVtbgYrA7AFApDYnnRLwE93GsVWfsYxE1",
  "key2": "4hNGSgd94kp6iFZANAL3XKXgYVXJddfEzekztFcAL9hP2fNgtRNxuLPsSH3DLnvDonyksXrenWSsscf8rFPLJTa2",
  "key3": "26onSUFFvQCZYNLK5fA25TvEv8p2kHYMTtQfeHLVdCUYD7BNUmtFnFhUhRffLohiugGycGLMLkiTxCpCbjkyD5nF",
  "key4": "3gVtBepTiTM9UuPaeDpMzQaVJgGiyZ1y1wtDxZwarWuqjaHoYHzrvdguKipMdvpPRnGbqxTxES14XD5h52tggAmy",
  "key5": "4sagP1mNJmWBbcF95zjQ8p2BkuVhat9eGHZ7MdDMejUBG6vqwm6NqLGT4Vdjwn5K6tfr3rsfnqqq68baC8YiBQ9",
  "key6": "3kb3NPRAEezbcMFyV9caDrtaDiwUjBZrzAv9j214iGvpkbBSH4TKi8W9hNFCRqPWxJfcGLxbk6m2wpHNtGWsefJg",
  "key7": "491K9QLTemLY6QufTcfTKrNZCnm559iHiErQz3WCsdrUAF4KY2yyfXuA8w5qrv2TPxpX3cR6JPfoTnz6RMGJ744s",
  "key8": "4wkTHx2Ko9NbtQwgr25xFpBR5D9BXpvK8goUPS6aEpjP6ZiYXPAyoKD7VxsFa5tyRWCwDGHScMwS6VRsuccCAwsq",
  "key9": "4MVpch9fwxJhbcMxSCekdZbGTvCtF9dDQBJQpF3rSQdSZ6mpwLLUWZtTWfXmamyygsTkZWeYkkEG3xubG98owZPA",
  "key10": "3Xr7aZn5L1Rte6Tck7ou2ymjdXiK9hcBLivJLuzjLtUKJHJs1vTkY97tSb5YcXfQzu4VxSoqnSE8WZDFukH7xpnN",
  "key11": "62JtMgETwGd8Y3uDUPSrNrF4c7B4AQceBuyjJSL3uyxWBGoiLMxfhr2WvF6rtUjhmcMmpcYGjU1GKV4V8t8RVF7M",
  "key12": "2stgNe85ENFh2xs6S3sxG1LncR8p8mtTe62mkn7ah2gRJRx1jrqSPu3c3xbVxpN37sRdvST1A7jEKcFLvERNriWx",
  "key13": "386C3K68WwhUDWMoLB2DK41Kzm33SFw3d9vNHeETPyiZDgBSh44EfBndBex54etwbJP5HMvSPPAMY8fkHi4iDrRX",
  "key14": "gLvL9uDwZY5CZ7NZqn1PAydgYmgZuGgh69bT29U4sG1765VNvgrjTa8X1mzya5EkVAS1gBH8nkKzCESb4goCiTD",
  "key15": "2xQjNnRQysoq4Je55PimuWR4yxpZVWnjb2YCCFKGDWfzAUdoa96GgqXZFedVLDkUcsAbiqmQvHbPjPgSt5L2H1bb",
  "key16": "3ALTmB5uZnPvJJe9METZ8ixEmydX2K1vwRaxoosgaKA7ZkPcHtGu7mQQ7EyuUJLJQYXPhdRsThNomVVvedbaR4TM",
  "key17": "2VKufMeugngv7oNn67Tr9W7CQuntvv3j7xDBWb4BEHxZcagixsxDAbAGMdzzT1ZTDXuoPkKa6PH5ayDnFACuQKhL",
  "key18": "5xsLcDxSe47VK7f412sFWX1PTAoTi5vV88eL7G43jySMiG5U6B8WocDZE4WrQ44cAMdoMaqc89y1oXcwV6yzCoXQ",
  "key19": "3dqx5N5jS85gDfGTE8pc9qGTxrwq57KLhN3LrqQ9EZfSXfjWRSsnuHg5YvwqGaEFYxSBbR3Rqr6sdKgeoMRzAEyg",
  "key20": "4K1u9TQr1jDBsQxT9v7qPPa4M4p6udgRaverCj1GPZjjQp87idyHn3vwExVMJvFViWpQbCPSqG7N2kArubShs1Fk",
  "key21": "5zGdLe5r29Yk86GDUftyKtkTw9BSq1WhyzoZfS6QmdCjyMqTuXURk2C49djMCYJyCsJEvkAQwzVJFKJz4ekou5Lb",
  "key22": "3nKRGu1HpUwbFo8HAXUUCNEVX1whgzToBNLYJnUqP5w9TtFkA52AREUk7BkqbNFaucUyn3YrZayyArADwWFJYczK",
  "key23": "3VrviE2QixSHed7ofVDsY5u2jYhupkUEj5dmcvqkhL1mr8oDwX9ug1BF7r1J2wEaakDof6TESm98iJboGxYTJi8T",
  "key24": "EKkZJeq7Upxg8LSNmNGUhHW15JLvwbhY2UYKfvREEKAFJUfne4UP2wruGDkHdp7uPJyPSGHwAVVNvajj19wC6VZ",
  "key25": "3sAuSiQsCSShHSnVDi6FTwUqnT7iccwE4vNpmrEZqLAb14wyM89qip3jbyGdBnHTg6dUvTx7itWys1J4oDkbha1L",
  "key26": "3Hamm4wnvy9bjWZcAopL1junU2nffFSaqibBAABMNJJenksstNVuzTNdmNstf5BvLyDRf6RVdkw44C5B1qp7yWgY",
  "key27": "44h7dDfpVnhu6GPmfZ9cBPvcnJSNnK6BXd3T83facfQ5j5sK6KQcfDxkGhqCA9vyFBiw6BxqQBUiB511yk7PCQRP",
  "key28": "43ghpfv2CFqQV5GdoYkjQveR1YjXoC13wUJFH3dGzHzKr7WzqeNbKRG5GwXy2TdBykEsLvazayKiNCwj8Tg3x3WM",
  "key29": "2vKYwUT2NTLS2J7YDzw7tnfHUHt9Mtg77c4ow6FJtBM5GJPBrsCWHjpqJSERbUqHgve6AFgiCJe2yJWq4DoAG4Aq",
  "key30": "5174eoCh7zsA7jQGi3WnEBeiVVhCVppdboDqeL9QWiiLmLrMPHRU4Rte4RdhrzJLPzJgrDnYYPqWwiYuo8J49L8g"
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
