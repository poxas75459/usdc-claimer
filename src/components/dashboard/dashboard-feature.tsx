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
    "4JFzwzdPs2qhmM2fiA12bT3QKPTHoDPjcqsR7VnkVpz5iTNpxd9hDBfuoTjUxsjAbiZyUnRAk9P19MTKHEefFNN3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TcstW3Rz1FXeFinmhrNALgVvctmyLFQrM5nQ5ZfTCWjo45mAiQRVBRpQrc3UP2cJx4cEjFSNdwbKuxH5RdbseY7",
  "key1": "32YzeDnFevcMj1oVdfAyz2x5qHQoe83x7by1btWx7hn5zFoCrzynRkZEpGvWfAxmBRZynCfFkjSKXnKuFwVAoysp",
  "key2": "5cW3dGnHxHc3deiXBWxKDNK9eD98yS2YiZaMQPjJeMZsG4rWZmGjtkYmLTBBik4qRiYCWmcENPtWWvvFBxkELcLa",
  "key3": "3PsxjS3n7AU7AHXvbKZ7k6Xqz8R7rYwd5PKAjrks9mEFsfvKxLYa8wRvVyBScKzAMU87psk33aVFAWamBdUoV1fB",
  "key4": "3rpUwEgtgwkgrTTbi4XAdFtFpwArUSfHe9KokDJLwd2QyGSfFMYeEARZD68BroiPm6EB6B18KPgugqCeBZJpMq6z",
  "key5": "5nf36zGhKzynydqFV4ZGGDwv2hLkyCPESy43Y7xHWH9cJ4HsVtETTbehaFHofkVvpSKnM7wPLGmwdrr6Bnh14ZCU",
  "key6": "2VfFPRBEpeJvbL7ucVQ6uAz9nMnc7ZabCs4Kvqf2iqxki6BJDxYK168A5xMveGAe2DSsch5AN2CFgaBRy7hpaVPa",
  "key7": "2LTzWk2e3v1DzpdhGYwT1V5EMkLj8BQ6JfK65ynTQqzzj2CcviYC3AQdHmor7kfhmuZehgXMfKnvNZtc8CU1DVYK",
  "key8": "5a6QZhcxvdVUXRjmDR8MDGbK5RaJcUNuwxMeRCLsPJE5zj8V2s7pwp9WQFbT9fNda6YKWfaDr2L9UHGP3Z2jftvJ",
  "key9": "5DL2SGBc4kyu1A8YtmotNzzSnxgzYozX6iADhXvZGbDmjbZt21GBpgouSV1VGWvoddtrNRsybtgiERQfFBDTGDnc",
  "key10": "4SzcCYBA6ycUBfns9KbY7abqXz2hpRwoHdyY3LBcxJVuyedvaincJs1xQJPLCDkV7Ggjr8TZa8eVoZRGzPmYb7ci",
  "key11": "4cLfHQiZovkwc3dZW7prNWBe84cgjGKoqZMhg3DrtCPeSX1uZizHHpYkJcB6UcFnRm5SE75zifJYx6hwUGAVAZLj",
  "key12": "3f2gHyVTWFCALp1MbH22uzL4jdQ2MBYctoV9Xsrprx8y5BJ1nJHfJVW1ocaEDxKQt2Kut3Qnc7jw3fcbwjgqDHom",
  "key13": "2ozvWuvmA2uGgcr25YYKxZEMMvqXGT81xFJVDdqd5aJ4BPeMQQHUdyn1CsApfMbNy2vWqFE7m1teKKTFqk6mtY4r",
  "key14": "2JTkJgRVRrFfvsViAjH3P5hCpSanAXroyGZjqNnEWgsewGWdsoi7Jak7PvDvwXW8zs3Z3kbyQjmtkb2M5YNcVVTt",
  "key15": "3kf3LNqyDqJxiEaGcU8rcevRUXQbgDzEEseFVzJ42JGDhEd66zRhQdj9GQBSce6oxHxs4vDca4EzVfwgXNbZMo3P",
  "key16": "4vtZM3TCdZSNPvynyfrePKLGbrFCdu9htE7UxJq2Kn5ygXcDt7AT1iGHYffoLNroPXaBW2sxd7Yz7Ug9jPBd24Dz",
  "key17": "pfLMXBywypf7qzckX5RYUtn2ZVCFSE2HDVMefFoAr4KD4aUhve1nLnsmxxo1Szr8t61if6zQW2ELAMo7GaS6eUy",
  "key18": "32s7kXNi31mwmxCripYGXU3g63pwNd2B2Lxv1guCpjmMj59KcLwkcFt6dPicD8xkb8r67kEUsGuvuuJTzTbfXXUH",
  "key19": "4z2kvSNdirhocTfQw1a3VgKTiDqe7kABBwcjwZ7axYp624cB4kmCGqSJK8QerL2fZiLdax45SGgKNwz3e8iLJCs",
  "key20": "cKnY2ZUsosugx7vea3wzUw4mhVUByECLAEynZq54SguDMobeNXxDS9pmJt9DhWrrsWTr3MvgZmDPbF5a9HGQSBg",
  "key21": "5RVG4UbgPMBeyJgYL41REdCHUWzhwfsiZ5E5YyeATu3pitWf5ZqxinafswaqT5dhUSr4G7Lws7WuFTSuRSn7W5C7",
  "key22": "3DT7ZCi7eXWTWUJjcRXnipbrWNtWCTFAyJMAuk93dJYvs7o7SMRUbYcmNj7cWiSjxQmCYQv2S1zotodhmmLLLMbd",
  "key23": "2ANHqwwMG6ysnFh7fd4QdjCAhQDXLYPYz82nuweqHYU41oKfgCtUTpCCURbAnqJVZYmNNEDWzNTqELCbp4ivqEip",
  "key24": "3mnvE3AvwPjRKxJqcm2yqnfhoVBhvkTnzowiTArinimbJiYGYJC6iWe6xvdgPGkwnLbsvTGcoFhL1RoAGEdPfj1i"
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
