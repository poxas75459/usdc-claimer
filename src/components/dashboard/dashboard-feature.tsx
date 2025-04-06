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
    "eMPC9QCWBdiDeWJUyJPNM1U2Z2DLqPVNWo6RjSgDQxJrcfwBUktV12SPUVCzziVdU77NdUunpCfRPSBZcmbZo3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GcbXVA5bfyXuht1naUY9hDLHwFZ4EdK2TafsUj1JvS6GAgKVfFoh7AGVLh88FngGCosh8LHueastQBYRovfxfeB",
  "key1": "5s2ZMJgMqFBD9h2dTguuvMFscCKG4dGKCRAV8vzXT481PqhTjJw6GXRQd5uDT55FAwxiMWzH5ZW5Asr6qpZgtQAN",
  "key2": "3AL1NPG33yDfm37owfi8sA2KCAWTYJjmjjzat4iKPfwRXxDWX9pbgFimCMa6b7Npr1VJTNB8tvMStyFzjd4XrWoi",
  "key3": "64EhPXAPUFSF6UwGHH2q7nyHb8jXpXRQh9srJLyS6FYD6tUCRtH8zxJTcsWUyfM9c34zenTzAHCV6j2fStH1q69G",
  "key4": "4k8D6oRmeSmFYpGiKVUSmKcv4whSMEosBgNFtuvrtG6eUbHFk8rRVvREsKre2ekfCnUqpZECd3syM9L36gPknbu4",
  "key5": "3jHBGHBPdVw24qx9Dom1YyyAvV2S2n3Y18WgHDiUm1ufjDCckC8Lin5KjK5PvNwLJnCxDhEimntzZmkrL9LyLLRJ",
  "key6": "23RV5NbCQTVGAfUkW4M7sJvbG28sSsmvSa9HEdPL13YSBcv4N9JfD44Fa4CDYkQGyPEWCrkmkvHwfqYu4HQ5JRX7",
  "key7": "4Q4sG6i68dse3AzWs1w51kTPayRhyho72yMeicbvxQ1AJmpe9WsQ1o9frHFLuB9v5VH7HNSxzycCWV1b4i4treKi",
  "key8": "1aDKhbphAXMabYT95ur7CEvHWsgWnUxgZzTDkXgWJzp2cmsHttCj5MEfrPtH3WAxCmqSSBkWeadngm1uJz9rume",
  "key9": "36XhSoxih8eWWnex23HEhaxBEjWzVYxVYT9PeVYhmPgJqU3sBjzCXocwC6JpodSPxhLJ1qV5nvNqYusTGatBQay6",
  "key10": "4ai9sXriN8T8R3ZHF7AnLZytQ5hiTHK7vTothyiumHdFmdNGkWKyAn2yH6iDiKaFQ54dXgvvWKd2HR9ZkqhgTGgt",
  "key11": "ynRVRBWbvyD8L1D4ht1tC663rZnDvMLRotXxjgBm7CbukbkcnmWEyBRneeWipGvwG4bWo2niqtp5TtLbzpJgnaD",
  "key12": "4ZzWnE9DFuwWCNTt98n7tkTzijqLzcPCnpeqM3g5UTeyQeJLwZnWgFYCmU3tqk1kPs7o9MFmSn3VcWa8Hz8o84ab",
  "key13": "2H5PYuaFH4eerFmkoMsnWtQViBkdgKMwWH5hnpFatRqh1KmLvVCbm1MjdWWnLTy3XCeAWHXgtDETfgzYQrFAADh6",
  "key14": "4WC8bw6gnTXx9cP3fuRDvmhyxCpw4xU98A2rwQsefKCKPTVeFh8T9TNHBtmBC4EadqmRcFpL1Ls1UYKFZoyLdMej",
  "key15": "4qzKj13hjMsnfkNegxd3Z1hQi4MnygLACLnjNoAShhQvYwn4icvJhc3tTPFGqqwUMhNmLpqmN31Gjdjd74zxHybR",
  "key16": "3h2QYEiToSNoStAQKmiuDSRaTURWfrZtaTFz6nbZaJWTx4TrabiBVALrib3WFYHv8C7Ks9LZAwGEKcXtrDbLojDL",
  "key17": "2RLNpthnj237TUj8neePaRWpRYdcLAuuYnbz3otsux2AnN8pUNJ5XUgEKVg2UwuGQpTPSzY1J9ASp4wRwNiWFK98",
  "key18": "3ETUraAEywkVo2fix895hgVrwNE6MWB2K5k5FyQq8DcKvGT9nSRsQZRpryh1DPAiodX6SiiPQb96nL2kw3QzgyNR",
  "key19": "XxCqnnFXxMUb6LnnwjkmC4EkXNRHYWDBwkBcHemaohinZdGWYJbcKCwaUwBiJabcUfF4rE9sFY6WmVcR3jB12z5",
  "key20": "37FW7zvKa6ft86h3w4YXDxorEaNQdCwjoSVMS7kzLpBtNa2t1X4L9MGjo3qqPh6dUXvN5XjR4Efp8zRSPz63bXjj",
  "key21": "5EC8zBUMwYDAvzpWgznqspWPvoes34ZJwZEwyxnCtw6iCxcnj1sL5EssS1Y5ynkW9qTsqMbj7fZYUDZzyYMqatVy",
  "key22": "3L7b7cTvDMF6XWJz54L8vwLom8uk6v1pmqWQnm6GWk8UegvHajBGTPnWmRxyzY1CUfvaAMfCzPWFQ4wko2SEWXpd",
  "key23": "48acWAxfPzZYNxkyV1NCM3xiFgoWEREx5Q5aYNL4F7rFfHPr4eMVHpCYTbfQcZCD1mNmkDB2CWnptqLJgf7FKBqo",
  "key24": "32LjsNxF8KYM2rk7TrZ93i6LS7UXSKGbnBGPiftCmhZQ2e3KZxJZjP3vvjTmJTtzjVcV5th6VZ2ULho2tXYiQEha",
  "key25": "JJiPX5sDVF7JsFqgW9ETbunCmpiRnZNyuYZrkePiT3MHeWANTPM2EziCvKFFiJA7PK6WfjsAKZfxx6zSVatzC4d",
  "key26": "4BnmQY1r2oscMbWtYevbNkUX7ce8y2jMJ5DThz7jTixRBtdQHohkhjwuPEKhEFaE6h6K7p4QpxSBiYnnmPPyhMzy",
  "key27": "5miZQNEdFzcGjHsebw8mph5pmeUZi4w9fhmNZoRpazDx3X6X4t2HDzKpS3WAGqe6BbSAmcqF2XqeC2j6hEVHy4dC"
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
