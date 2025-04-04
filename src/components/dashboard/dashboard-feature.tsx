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
    "TeJnwciQbXgWtPUbdgehM9AuzQzBEbnn48NJxArbGak4iJoiFfToj3CUqD5KQv6xppA4vuqYtoQDfALGfxb13y9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31cErtvzDUroYNmpyeLQQbwDbFKPc76VEc6uoBcJf4nTA5xEzRzei5iX9NiZSpC6adtTa1knEKbavKWZ6DJKxk5z",
  "key1": "4uBGs7JwrfKtPi9T6btjshfS8PDBqD3iwwetruUHvqvXFgyZHPpE26XqRCh4qUEBV1hP8LWuNDuXiHWYrchHidRK",
  "key2": "2EKesP3er7Lo15wsJdMntLaZWDpKudVfedHVa4NdDbBehdGGeLjKdxcu9sYKgxADqE3Ztf8duEaKQihyeVCeDWdP",
  "key3": "4UssBiXQ1RwwiUTiEAmmfCC5z6yEzSEhRgmsWmaXcoLGeBqEf3T1JYHByQZ9j3JqYxiA2pZSDdKnM4AUZRpNr3da",
  "key4": "3AYov69tUQWMCHM6RSv6MvwTAH6o8TA5EybVsCFCjfC8vzdTc3RnsLr7oz9zRAHwkYbF2UuSKzS5AGYz7FrdfSF6",
  "key5": "5hKNT9KuLxRPBeqUv7yTxKC4kAvbb6z2dUFd4x1VxpUGJNNYrXY7TsVwqbiAnrbki9Sr3mtAwzZ1bnHqMDWyffoN",
  "key6": "3gLMB4QqYvjfzrbpEBXKQNfRbc4CnAbDRWzoF8NTT7ySQ2sZ5q4mmWK5NEJarTarGYgJLMhTVGyrBwqBJv2wmfQU",
  "key7": "5BafVBVKhAhjoHaDxVGtfZMqnsTM3uNwMcD5XawBEx1QPVNP4YYtPkufSfSCTWXtLP55rHLjfqBKozABcuZfXciV",
  "key8": "2X9umECHzYCKsgxoEuHAKHCuxQnRJbnWSuBwCYUuNVQrmP258vnUaGjnKTSorWV8Tdjpje9Ep79ojMhoQBzxW6WQ",
  "key9": "sPo1pj9xeLk3WVooTGkALi7DitUyFnPrZnG11NQ4tVPjLwS6oLoxEgvJrk2oNh97BYqeZBt1tmWwFKBViMjfJtJ",
  "key10": "4cbvNrMGGXaxN47oJTAF26e4qXPB5K86Tf5hPcy1YtFrzpDU1AX1J4PWjMvj6xjsieCPMmjgj43Yz6oibJ9ygebX",
  "key11": "3rUyHfsjVJd9qjzZPbamTwWux2qQTqmo5hNhfL9wdtyhxnFXk6mrkYcbG4YJYJ5wcsw21Atg4qb2mxM3fCzgWv8h",
  "key12": "3FfijALDuGcZSWcVEbyjvidezswuRBDUBHoYTB3dZSWmD5FPnTQfaftJkdJppNFa5awo6xWRH5o5YfoTe7zH77ag",
  "key13": "2eizVwXTs1fzP6ojBHsbqYwvDjdifixR8mvrrLMJdShM9S2BzPQpdtVAUVXbtvMqQD5zdYoMrBJdMabmfob2gygj",
  "key14": "MvfbrUnx9DwzfB7QV6wp1fpXNBr2qu8UWr6x2L59xX5vuUDGA1j7FJYZvMPFQ2KvpBkgPXBLat9koLoPfDzpnhp",
  "key15": "J6vrMRH8vnCAoEyWSGh5sQn467GJqfhHbM4MRcynXNWPmT6wPaejGNqPP6krJvXMbfWQ32kPevYa861oBvLn37Z",
  "key16": "37AvztXd2jT1AqnDPqiu6jq1g5EpMsc4CKw47BLDfiFssXHXLFj1QzJzfDJm2k7btKwhnZzrraqP6Gw1ppKjzykb",
  "key17": "MZ36LiEdXuWeWUHk8M7EfAE4HMWWkmzSnZ2Q1kG6oHJ5JFjgaVAQkXGiZZExxLJDoTZNbQzPTLaY214zDQfEfDJ",
  "key18": "2pRatvQJyqfr45njtZCafn5TDp3Y1XXq7Vs27SS3QYah5L96pFRqRqmf9NGQwSW7rWv59sQALLMJAkD2XaEpcGfN",
  "key19": "2k6dad2cQTVNAiQNxyjgFusg8H6SgtyvDuRBpYFp1MC454FztDrcCjpPNkLa8sbhMZZiX7S8uvKzeh9EQQvws471",
  "key20": "4rv6ZoLkju49msgSPbhBBagdDDWEFUyW63yJG5imG3bQdk2jD8e4dm5CP7qFwjgvU2UucruYGzsRmqpt2cviiCoJ",
  "key21": "5tP89dQAWRXJLhChZrXHYYJrJGQj45wV9rsev3pWjqPa5duRoQzJbBCkVMd6RqAnjKNtqkHFexsVuaHf5hCopiSA",
  "key22": "kJv7fJMDv3ZAJN6MwG67sukpafz9RYcEd4v5nmNztt7TM1rbuLBye2QCktXEU1qa93gvoTBMqmpfaR5QAwLxoxG",
  "key23": "4dwiX3XBBkVhbn3vJHiGA4b9n7xXH4RU9XitULUMzxdcAw7nYnTs4jGa4zpYy6zcnQso2h23Bmqy8kosJCft89gV",
  "key24": "X52UGdJ6x1PFMgHk254A57s2ZxR7MGHmKYMNejESF8cgLEWVvZCN63oFFzmDD8u6KXqVRdd5Tv9tJwUQVavNZsz",
  "key25": "4GH6yFZFyUJyEKpNWQpTRcnJoibwefFwzaLPhhCiHzp5SM2cPpcxwpcth7PTLsYEuSBKRX21wRbTJ6o9akheXPvS",
  "key26": "5mLwV6aHESr5MP9gPFyXArEsCSGWKfhwRbpneqjzrtAFTPhnQAs7DxzMRF2eufK5rh1tnchNNeS1yDZ5Sh61aFyT",
  "key27": "bLSLV1PuRWVnoiJt1bxNYWTsbau4UpUq6au9GgwBGoM1db7g6aeY1TzN675gbEpLwPcoVrYUbxMjTwqvWMGmVvm",
  "key28": "23jX8bXffCEoZCC1rYXepqmNahMjYeDYS1teYCmVHzcs2fUebY5jTtFwirEdrV8yAtsewEpw712NJjpUEKct5DNf",
  "key29": "3H3grFfZfv1esJ3WLythjPe44fheYnGwMUxsD65erGcXvQXx3Et1ojzXSQAsCXCw8R6SVRtBKXDgG6DEfQh9udmd",
  "key30": "1HPvfJsNHs8vZZiGykiW2Hu18tHYjENR13DYEN9gDaYjSQM4cEQwEvxxhM9jPHQXqkGP5Eo79yAqaL2u7Hydkpm",
  "key31": "4izQNXKGyocqmJgyf3fZ9Q54aRfJNct8BRPi5LgQ2Nf2th7XEPezwpdRZPEQimK6DDxbhnwX4ppe79ZQJXQNU3v5",
  "key32": "PF6QzWMfMJ5CLCQPw6UUk9uQtcitT2V9MUckzSP62siqFQwBa1gbF8pSDcqwFuqrLZBQGELmcxgdd8hu2nfznKp"
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
