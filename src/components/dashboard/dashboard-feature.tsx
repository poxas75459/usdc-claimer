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
    "yG9ZrYqJ7NfRuvPGF45mvciyBm8ZN5nmh3xeS8N75QTVX2ZBuTYHYdCaMDMz2zFSp6oRqHSQ9rXXNSNepambyDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48meLebjCskpBsj5GWzUPT6Z4w9FMqhpSzR6rXEfFqd23g5hLvpaJRvdH68RVQ1YmwmkQARCxsDNPwRkirMu1wze",
  "key1": "4SQyVtdeTpAryN9TcxuJ2Ch3JgewJSrwBrDeSMicUJKN9EPrEgKHvtQrMRYFe94fKN9xVuEJpzDbFSLFVzhRuyDT",
  "key2": "42ExRwXZumSxRa1uWph6TiTCEC9vxJub4vNLbJkQgeM2dRqcJQn2ipVTHg7uHy5fVUisLg1yz9wcGJmQrQFsfvbQ",
  "key3": "6ocTLVHrsCE1K2fdApJjKhYibeHc7Wxacu153ADopYg6avx2vwkeftdN9mrr6pFUNNPACoBQtv6GnEtn7MfMtw5",
  "key4": "MwTvWkBxy8JadoczFDjx6BhiETHhu9HXYx5mwmGhPYxmr4bHrL4ogAv8GA94VJFwqDMPB7KrtMYGWvtSVoQmb4P",
  "key5": "3mk1GjyexEtWhcA3BnSRTuy2mktNmcwcfSqXZKuVqwQubZrGn1259rHE9DEwhUGKQbZZ16NF9aSNa4UFWbyU1CfH",
  "key6": "3t3Adin6YyEZtfrbcuATjoBEX6dR6vsqibwb6kUYP91NHPGJ7qyWUXUZXj1cx9y8i2UpPuCowgH3cBWWafWDbZaS",
  "key7": "nchFQoQDTX6YuffQm5dFKVNJDFZG2MgHroadxFKJanHKk57j1zuMzoq3jF18QVqhBhoAMXkQBQf8FpK8kwpe6B9",
  "key8": "4AyeN2ycCJGriVF3XLtUi1nPymqHFuRZgn6n6vyrB7d6mXwPyaXGUdM1oEPLgggBJDVyj2vQ5m7pEneBMGPw71k7",
  "key9": "3GwcTgbY7pFwAGjWZ9oHW1x4DQsP8rHShQewvxkQApgCpKpQNGGdc7L2biHGkJyuCwbTTB31ug3spbXrmRXAYocP",
  "key10": "2DjmP1fPzoJyxePJpSD2GbVxjE9g7Joq7ayeGLsEAM6ZaFE7VwakjB7CgmVqFCAu6DKcT3YcrjTtCkNDrU4rJdd7",
  "key11": "2Xu97xce6ytRKroX9Fb23CU7CgT7E8adaCmQvqC7ihwE4adG1BF5vfyrcbDRi8EJHDYrae4oxuST3mu8HPGw3Gjm",
  "key12": "KAvHnD2WvQnDSZKNuDnK2P7XhKy3aQgAfX6WjDnWj75hapQcZB8LtMs6JkWH8888JEaYVDFXF62eLmDL1eLK64d",
  "key13": "voud6Cwaad4NN5s9F7J2k7sQ2KuceaR33AYTymN5NGPcpU4XPnVhbTM26BULehcGcqR2jeHiTAT2AaKF2GYd4NS",
  "key14": "23k19VtDZttCCf2vQW8haFod5c7mN154dUiaLDjDifpc85kuEGTQPBJaP6LCmsYbBvxasfQgwRmqqr17q3jmQ24x",
  "key15": "BDaaRrRnwGSDpSHvCBfbCqNRDgUHiwurXgPpARvPoh7VY4fwA5RZenYrMeoCj3HZwKnr8aZShyuyvcrhxpDtGtC",
  "key16": "kKjivS3G4PGmP5wfiUH2cm2ba2Lmngu5BXuWooNWfs31bhHMHhF9649FJn5bUyRU299JBsHaxDbqMeGqbp9LKNx",
  "key17": "3ShzmKdtuWEdx2Re8RVDxpjhBt4RsZyzczFXb7N9uZFjgN9A1jARYmkERmKAHkXzj8PfoYkYhu5WJymJ6Ep5wvfJ",
  "key18": "2VF84EyKVZsGrFR89grtnTLg1YPPp2nLfbNio67ZnxrPpmoSfshBXhY94mVAyb1fd9hAbBecSSqfZmSasYpruWa8",
  "key19": "4kV3bTRcjFGaxsDSdbYrdX5t6PhYBNEfbxB5zRVRJ1u6BaR7jzR8xFJYsk2kgKVrnN3PBSPuzK5paYr2yU6qFhg6",
  "key20": "4DJ4QGzsddpnPQ8kXEkFRKebbww8KPHAzCKt1VmPPyqWPGhYAVGgcwBomWeVZeyLNGgVK2iMdztaJgDw5xb1pBkm",
  "key21": "5JcvjH3VzY5b5yE2i8S4ApcTD4dwtNFzxMivsobB2VHVjaigXVz1sqU5nFfdWKx5V8k5iJp1YfhiqiqH9dD97Koj",
  "key22": "iHmWjwo7wpFbisNN15Byxk3in1vy7mqNmmTiLJieithFqxr41fpF7kTPFo4HSVx2Ge2QmHeeNLtpVmQZvhcRf2B",
  "key23": "4crY4WiTiMk1MhsAy7vMWKNDtZy5sdCCbxo3vDe6Awecefwae9DbSUo9AT2BSnRzMEeRSddEpDVCtit7MprVXhQH",
  "key24": "3xL72cSjspfGepy6ZTxGTMEt1wFmdsejUvNKfQCASdLamWJNuYmo4s9Fwce4GUhYDegbx2tW3CALLENBEbRpyyU4",
  "key25": "3XruM31u9SZwUhoXTJyPZVDpazzu1GpiAnm2ZmDEHzWEuh4EdEGeVYXQJbQSjpeHS2e53S7ZoycfMZmTvW5HFoNS",
  "key26": "37xubqn8wJcK4MFFfYrcF8Gu13oVN1R4JH7C54GRr1yJGBRgxSLeRtTwkwKSs127HmZrskVHBDGbUk3uQDZjhq2c",
  "key27": "53zcNKkkcgmz2NEFTqQRgvF6Y4dQyz9YdMKQAUJhangjsvPgpuuXgf57Zs8n2iYmKiR51Hcui3V7w7zzFKwzf3cm",
  "key28": "27LVG6tQhcLfxYodzFSgYMbAp9dL2Hf3e5Z4HZMkt6Gj9ZY9rEkVZkUh5W8zupeX5L3PxvypMt79Hd9bois5Xyzh"
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
