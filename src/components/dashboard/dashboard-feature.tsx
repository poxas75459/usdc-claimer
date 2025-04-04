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
    "3qJR3wFLxKuJLgDAZeAJiHjnjzxjDWG5qnNvLdEwndqBTa8hB2PiQqZaCEvJHjgv8PfT6BNxDhLxBTEet5zxgt2i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NRFCmuUGEj7J1uvWJTbrVrK7TxtyNUndTTnNFRZNJBv1zGo8RixoMNnFSGDqLpQrZwnnQASPRANMMgcMqL4CBdA",
  "key1": "DMeTKaZEoM11ZpUaJ7tMAqGayXiwmvGEgth2ReWhZZtLvKhBcHEd6L9TqPHtkRim5oBo8U9VEywJEvC4wJx4qz8",
  "key2": "5g3kctcvieTFhx9YjD5PHhiYJxCNg31xHmsadiKt8qk3kKKUY39297o5QcCW8YbYMcFeuRuQWaCTHjXLrPZp7z89",
  "key3": "624wr114bvSZ4BkGhPbKw8acEYv6m4TpyVjaZ7sRxv8Y5PTcNjmK4rzoiBY9REMUas5KT9od7RKu94pTNNyZHvQw",
  "key4": "3EhTZMaGKf1AhqFzyDsE6orw3ztBeQkgJtPxig9jsjX2orRxE8girMqQucgZrpquFF93MXFeVxf7kEbjPxASzw4V",
  "key5": "rXFYJtozDSRicV4EXiAoJaPM7PMZ2vYT2JENzKt9eYbyetLJE7P4ea46upqZMEPcmyZEtqotoYcpmjR5oaCWZtD",
  "key6": "4rP1mENojncB1NZ52zALcPr57wL3cwokUfFzxUV3Tg2urzj4b7Cf1UxG3XUPczKG171ZHxHvMDGTfdZySZiRTbv8",
  "key7": "3tUafZaJ3ejFwLVecsP7zzwPFz81XHt4xgii3rWvCboytTU2YJiDH5mrYrcABDLb9hV4KAgwmoQsPqBozZAtKYHC",
  "key8": "3zRu1EFN86mSBzcU6vFxntsuPR6YrMgjr7oLqTzw34uARfu8GpEpcBwNx6CJvnJuYW4ds6bp7JzTjqqHZHf1oTtn",
  "key9": "4Yrn882EbbkToyRYC9Fpoxm2wNnqLEDFDaHuyMAC8xxtV4TkrsDWnAwANv55VdDqM7Z1cgLELAoh1MJKiobsxnyq",
  "key10": "5nj5pPVPqC65dT81Vr7gb8aCxFANFbonUV8jd8hJk4tLL1hCn3kKjCURe9nwTcbyhqw4Xj3tZdgFyaVB782st69B",
  "key11": "28TPi6MFea1eg68Y2ty22pbw5pJuhPYu8f6tFY6t2W67EEJRBhTR6T4HQv5UC9GTMN3hQwxJBGP611B8ZU6aQcYU",
  "key12": "XyHx1HHLJT5QyYANQdFiB8KdBBTCgsFtUaWYpVBze2j3cxdGALFXwh1M2QxU3URF5zhYQcnDRmNJxvNSs3ytv2U",
  "key13": "S9Sy6XRqw21QRQ7a2dtauXmFtodm7Tuankuc3D9FV3M5kjiAumL5PcbCH55Psk64774VK1mwf3R9L5V4zpfRx42",
  "key14": "xR279SqLnxrwXvwJrALNW9WC5buKkybkzsRMfvtTcNtK9en8a4BEeUjQE9djJaxYb5muxzS35zJ5YbWGNNa88qQ",
  "key15": "3wxKxNYvo2AmnnpKPp5UHjmpYbqNfMBUsB8r3GGMx2u2MrUprnyMaH8c1tXYt5BZ3fpMawQLG4DRo7ab9KqhAaw9",
  "key16": "57EWu5aZuNKrBDN6mET31YRUbrjjdbimaJKp9QDJMS7Z1KJufj8amvVkYtcWdn3gEFqA1doLxi35uMpws6eBqbRb",
  "key17": "3knogbLRPSpJMUzxG7rZNcRHSgVaTt2n6rEXnGM9UpNKwwypiPTFYTpPuWdnQnwa2hyw9FyKocDivzxV4qN3vSzq",
  "key18": "5X4y6gWCr7iUBw1okA398CFkNcMVNMuh6en9uJHo2RQNVSSxe64QUW147LAgR3V1o8TprGcqyVTMcFmTk6QjoL7H",
  "key19": "2mdRqDhnHcD9Jm3WTsW3nPpBThB4yqGhmRQzJxQt5LyME8PUzHCqQb7XMGfNDfYVBsQtmuB3vv3Xt4T2d7tt9Bnw",
  "key20": "2dtJG7kU4D9ZtLcdifBgs7PqgJnjjy2bK1Hmni7qzFv37bnpRHgohwvDqYz3XaRqSpx9BocfUowExvqhqVFfeoUk",
  "key21": "2DvBj6NHG5MfCZPx5G9w5cd3NsBg715PKYPjsXNnPq4xDBp5UJVGEBauP4D2fzMHwTEFmaZbxuCSpKcxURiB7dLE",
  "key22": "kfPL7oLyWaCevVeHffeomPZxSHwhbcTxamSsrA9bbLmS3KQGXmYSVyysBNXumyorEQVcfCwMJAiwG7BxHGi7Kzs",
  "key23": "5vV323mMy58Lx4edCRso4sVgxjTVmvoqGznRBD6y6VEt1cVoN5myEpGRFWjJtRKiv5yHN9hLr6c4kNZSpEfyoWQ4",
  "key24": "3MNWez3BYf7TZ9ju67mbUPYaAQxZ9vEPqD5tRJ3bTVLZXXaE2ULG62ZEuePU5N1uCV7iaseZ21PRyAnTA5VfMr9F",
  "key25": "4KGgSwCjudfkCNwMqHWiMTwra1kD6zckXbkDmYCKm519mYJBS8g9zM5pxzbuDj5dwAJgVUGEGp6ELNnJyDowfMob",
  "key26": "STfGNuLHs14LAg2uuJ99gKCzPzndZnaHUWLXP9fcJp8WFe6aXWHeS62bK1wQWdKXqDXKfHNh8gkwRTbgvSRGSrg"
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
