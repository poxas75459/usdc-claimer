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
    "4mLHgTR8LC3N6qFTRGZpSJquEUf3QG2iCmwb3DUPkhaFCDoAfp1rhpKf5vEe4eTowb5gyEPsLrqfKzYNC92LdWjH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "313VxR9F9zXb2CbHZ7L2vTMytDn4BohNfARVC3r4o4DbDGwBbgeuhgQ3A9ttdbQyLDi5shfNMMCijSB9qavUvifT",
  "key1": "3byr3vSjsvm9i2Z7wer6ntG3xEEPcKZA9aMKKrCmi8ka6V7eJ93ETDm48edAfxJ9Sk5vBKEcdZgAH5PtvJCmCqPD",
  "key2": "3aFb3AGvUMCozjVEVBnNGpquDDND3Dt3U3Y513BAqUjDa3izCfGmvBAv6fBmkgc7rpXFqxwKLWFzv5FEEQbEtoqs",
  "key3": "24cV6DDLSpne8LHb8ronHabWYXVrye9Piioj7zhXHbokmGbDPtutuPNA3d3yEWTqoYHek1hw6XAVQarK5Rv52FZW",
  "key4": "3AhTcaN6MWEvEqed8hsEFiroshazx3vAMRqK9gdseXg8iXKaHGRczxnUAw7iSHPgjpMdAQeXj8Xwkxqs3T7byNwU",
  "key5": "4ZLdDufEs5AUD8RuJ6r3LXmfm9AmQLxsjoeCtj3pjyRZ7DtLGQpgTVq3dAF1DbpadjBKrTeJ5JvoW6h1FAFQxHP8",
  "key6": "3SkkhPH53BdUNh6FDM9hSSGy36ubXAhQdQSSrULRkU6t2Dfcw6wY2TjXZ2CL3YJfifLdKZkzoC8dxe4SVtocZ6oF",
  "key7": "5u2nqd55y7YRfzUJfMvkZCtzc1Ts9N1k4xH9ideWsFHY1jS42EgTtAX1DqcR1PvxPpXj4piAsVe8Rh6g8LAvLjTk",
  "key8": "2eBAo2PTTJspWFYZw6AzeCnHJj3TPAyTU22DEKnKC2csbzFHMV9QYgPWqFqcnDyD66QARFDxL4DzMv9URrW2wY8t",
  "key9": "3d9coxHvQa2hNt9FV1YRGZG3hFxKdCRN1Gk4ZjpXmCGiyaW8mWMQdLaZ5zy1s9PV32xfDbvEwTSgc5mxQmWzWbPC",
  "key10": "5pvCoQzjrVigU8iPb97LimT5QwPa3iRca19j9ne4bj5RMS1h9L2vAGutNz8RRpbuxevXzVzVnzTD2c36PdLRQc2u",
  "key11": "2rwmao7mdY6nTw4NdHNhYLcc7BV3nTswpPMnN3Yvd7RM5MWsPYuRCRB1XZx8HyE6asRg6mun3w8XQ4mPv8o9afs9",
  "key12": "53zfuaTsyHUGt78aBYh7m2Fg55h7Uo4cGp3eJxNWeab2GoJXHxP2nuK5CfbcS8YBLJL9rKpRncjExDXXLPA56WiM",
  "key13": "1JDSXRpVXdx3GsgsygTReVB8JsuKRReWQZh64Pb6HKASfycX2ZhM6cC9V57jA3xXBh7yparmZ8u1gsBMvpu4hDY",
  "key14": "3e7hB7NHtyXijfuEY1Q2ad8qmW1XKwtih69m4fG76D5LcofNXPEKYFm2hzSjQL3akvSyh2CWRa26aNRWvfU43eYs",
  "key15": "H6jKwJUpBdHJmdQT9yqM6NHTr5Jf2QDQ8vphBHNzMNaun9mWZn54FRCzjX4Q2F5wvxsHt73UmBTyjXCzfPmaMZv",
  "key16": "5enjNcK1NaFKh8dzh7mLxaSaiN3ZqiSPoP8USQJjqHB3MfH8FmvaUym3QdGD7c4CEzwhYEmxBdRnXZQH7Muex34d",
  "key17": "2JUuuJ8iTR19MrqCzgUmSfRub5BJUgKN1eYTfqMm3JrUp493Kp42Sroryx8PT73pLqY8HMxCTTm2GE1Dyrf8vTD8",
  "key18": "59v2yN8muecYf9AvEfPPy3GbAeRSgVWWcuYSVBZxZFPYsDDGDUcnPjwKmr8e8qvVYvJUqBJLyfw3AiC9JWChGoYU",
  "key19": "Gsc8JhaTCHCS88WgcjHXfUvczhL3PAmhqpZdyTkH9r5i83wUdtTo5tNNi18LANTiL1UQNgrUJWYFamWNQiyAd26",
  "key20": "5dTtSseD2VdQ3nBMMDCpHrCEfgqX6w4SX4dan3RkUV7owsAheS9CQZMUgQTBCf7yY7exQprzrMKKEGFt12DwcFvU",
  "key21": "4iBQbkFgNbTgBChTJqGjqSmMEwUPFm5iondgHygdSFjcocyFBMPjvF6dJokAiepNitUPr8zbqVumdKwzExg7uNoG",
  "key22": "512bZ1uLeFgtbGi1nFxL89bCb2aWjWoiRabSK4JruodnKp7dgrYy8imJMZATGbigau2TXDgCENfUupZoxo3tUGQq",
  "key23": "2nTR9qUXeiwUfFPgm4CvEys2DYfn4EsEDcMyPE1iq6KSeCnLVmkoeMWdhN1MctBWCwYGWTrTTTPgpC4WsZB71bir",
  "key24": "2mhKmJvLeZPHCnf3PbNmotLHh8VJwQwvE88XAaRX6syetcWhyF2kb7Rh4rCwov4DoNKhk6HXFMmQVxa35RVSrjJZ",
  "key25": "24tsA2K5Kh2qFCHo3hqPFuN4rm5DLoQqAa9UCkmArcR8SUCRuDfnuxnc4MnSpzQWQWGyDkqJQ2KPHc8zmYqnSjWH",
  "key26": "2mP9qJmyVkz7KVq25bAHYsDpK9rkuo6MtTgKoKq92Ly4s7tFzyMF2kARDc8vWP9cbG3XRG9wCpF2ci6LKKg2hVxn",
  "key27": "2dqQUoErPUmWa6qahFxtuJJXXQf7po1CHDPAEwB4KF45XrDJVXCHgHRNHLZkGGUNTC3ebDVhdNQsSuo9uy3AUW1J",
  "key28": "4sFaY2QB4vRRLUsSNPdw14G5eU5gE12VkWc1nKQTQdLqo2UDHYkYiwMXdgnVk5uV4t1GL8A83c1eMfMAw1S7YwPr"
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
