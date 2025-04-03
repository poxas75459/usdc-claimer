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
    "4YE4T7x589ZWKQGdwSiWiWyshkCAdCRPkZAo7fRX78FDgTioYSRYN2J1eC7aiGX74qfAf2wiGge9myPUA1oBgEwi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p8Fg7Ve2cszX3kQzrX7L5XuKY12jCCxQuhaoD1owT2F6nMnhHFL3eGi2hXyssUxkipK3V2eYEUq2AK5cvaqgpV6",
  "key1": "ENV1rLfM9vdHax4bKUUDfCk2a1bSStYHjtJShUViNsrKEaLFCJBrTWK2hcn8UXGaG8NV5vokRMEjxfaQRW79cRg",
  "key2": "2fgC6HtNBoW6JFy825Nj5YKcQqNjujdBbqCCcTmuHvzpu1FNBWvLjFzEYs1ioqRoEEvTH5Ydjk6C4RngWr8ipmxq",
  "key3": "2d73ZScFrqPgEZ7pd6cDQmx8xZfSbjBSnAfPPy9qfRRC6u8L6QCWooRRJHkYpwJWsKot2hXX6BZopXYqrojL534",
  "key4": "NfCTgRZiTNRcgnwzvLFjsC73mMsU95wVjf5yx4PoNcFZoKwHQ96uRtvtaGYY5qQeRXMk61RfE4Y51qXEJemSS9K",
  "key5": "3SnZsYNdEnf2GF6ua4XFU3TfGH1pCHyeoRjwPYCgx7cf5EL6SHEpCJ7aSEfRFvV5MckfiHVHtmYZijXNdUgLQ1zD",
  "key6": "4anR18zv1LdvVqLRCovMP76qw9TkVtmX2URW4sK8rxdxsLfeghT8L9d7UWKryP514UiVmmF74kaTeKqb1Jc6juKV",
  "key7": "29yjQPUc6SrjhS4YiHKkLZQA1eGgJWVSLED4opscGnnW8tPgbe5RUZua5NHJ4B7ogLPRgb96ajxrj92VP3vKBw9P",
  "key8": "33PSzvznNtYrs6vH6xFPrZgukWCSQhxd3zt2iTwRNU5UkHskqo1Kjs14QjBKHwkUe2hRBSYq1Dihb2SUA8NYCwCL",
  "key9": "aU7EDs3rPgAMV3kuvKw6J6iAZWzsx8oBSWXhzjxjz2aKWFLuhECuJzA8QpHjArCyQ5jWmAFZtZL1EaVamqmdVYf",
  "key10": "4qGevGVR3QPBdaw58GgzVgt9QtqPWAgdRqhoDsnnTeXE6nsEX2Gkdq94fbnPSVGuqBLQNGKFuo6E5wn8t6yanj4j",
  "key11": "3BRKj62SD8geeK2K7eLNrn3WGTD6qBmYg9RhNDPHHyZyZjmVuEDzLaz8YtruGJ9xHGzePjgXS2KZN2Syrvmcshzp",
  "key12": "45sDJsD5XntySSsGHkxM2U9eP6xjX4pMhpaE818mi8iErpR48L8V69SdqD7PQkj9SVizmUC5uN5QVtjvRjspNn4Z",
  "key13": "Xg8oKi8Amsc2Z39ZJNdBfkTN5w6FDPjiKPsJiaMBCycwpaXdLTf75s3hAJhQiKV7g9ihxAiHoWiWXKmNLejiSBA",
  "key14": "4Ps6YET119dP2pV8eCYSanAiy9odm7WjF512DzWQbyxQnSJq3QVymHb6eUjXZAATe5Jp4A5cPdPzN22N15bUopXr",
  "key15": "3ZVTabZeeXXf8p1GbQryronqfAwWrenknJRvXfxSTLYBSzzxD6UtT1p5XYBCTrAXAWfVKLMaoqqUmsu9LuPh6KuJ",
  "key16": "vKU3dN1WBhWGMvbN21xdLPnwvrGcoskCXU1e5KCFSymNorN4fpMfEK1T6SnzMuL7W31c7JZ3E3tzJvC6vtt1t1a",
  "key17": "N55Ji2Ln8fRQpH4mu976vwL4qCvk7CtXLh7zvQ2JeohU3sjDb49anyttuwRfKPafgxtoe8vMAfSWca1enHBjFSz",
  "key18": "3xPnrdXB111PS3kdEj5uoQRBZPdriQeDafftjzyMhbXLNfbxSGCXNha12P473eQ8nCyEaMsrsnvEwA9RLfbvE5d5",
  "key19": "4gYM4H4aVYaGTtRoedvAWYfCDda2pY3haGvRmMcBgwDWp4Tij7rEyoUbeVAbZ9ERkH6wiyKCQ7Bszs64XKtDTkVg",
  "key20": "3M4heZN48KUGFyT95zpMmp12SwPvfnCWCG6NFVA8Rwku1tapEAvZXCfw1PbWZfTrpcmW1cCgz925ayGN4sawRPPV",
  "key21": "2fV9ymD1QpQeRwMXXT6BHbmAowshn5aq8LMp46ooptcvnxuLqCndcXe3isVbjGBAKWNcz9WgdRMZpvDAmRjSAGzF",
  "key22": "3jRSexqZ1NfqZEfN9w94fyjUWCQWvDcTSYT4hU1M4mHGiB4A5fADyP6Xu22fn9ZcN7MLuNUJqv4TSLc9w51UDR6T",
  "key23": "5PdMdb2szBXSnoC6tnyM5Jatfjk8WzTNAjuobhwCcQSQBPcyTheSfgGbahtyKVNDeFjK7nifCgCrXmkJUtHwNUrZ",
  "key24": "4PP4RLahNYk7YL4NE9qspgN5yA2kn68NwBD19amcidkD4jK7ovLkCmW5yBUnX2Zkdyb7z1ifUePswjrheuPcs2eH",
  "key25": "4dQhPGoCJ7JmMgjShafgWmS4JG1qFbBEf4PYyo1AeQihuTuH3xxFzVLtytzHpH59QedXwZWaKf7KNEpknDAr25UD",
  "key26": "HDizp2krX4d2yZVxWZm675LbTiL4X4ratFWYNYdQ3WXMVtUbZ8uHDggWwUEfNWSG9cQ2jeE8UmWuaWv9FKDw5NG",
  "key27": "67kWjdzkTivVutqj6XqZUiUo8MKJD4y4KKPu5T8b4RBZKVW5Yq6p1WZgoHaJvrXKhqUVrKTB4zEDwq8tphTmrbgQ",
  "key28": "4UW831o9ae7AbD4r8dkafof2qS2o4Ei3hNd1k87JT5zG8wdaxUJe3S7sgWZiSgSTt3d21YkTLquxnWpvKW77hT5G",
  "key29": "3VVf9cxBimoFv3gR6zP6Chrhvivp5upwUJ5Rah8TSjc6HqHK1gBBQ6nnedJXKtJLPKYDxtnPxAFKJpmMBqftVRCy",
  "key30": "5QNBGnaEcDteFD1WqpJA7PQyVsEnxZyd498mKfQTsLpwuXL5X2QUYoDn2mEvPUEuPmNHLyZEvanMdEj1WLtKNzPt"
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
