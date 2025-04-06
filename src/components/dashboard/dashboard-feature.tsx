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
    "4WjZgytnB6pBJCwWzPK9uiNNREt6dguEKzi53ob1m265Z1mksWM6e7cMGV12RxpfPjXrKUoffnk7rWYNAahWAZB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZYqyFdSt5L1q2MhaDKka9jF6coJKRnUVZN7wwmb41wLfyaS9VS993DhwcrWPXWQDF7JMSsjmGY3n6JXk3PPqtBp",
  "key1": "5WVS7pEc1vYRzXtwdtqUuhvkCjuWt82HAdPPb52eGG8e6Mearc3zFzAZyb6jDK3UjruyDV6VDv3zPu3vG2LCzqbD",
  "key2": "5itXTpgtmh33PE5Cc41f5pVetkrnadGd9ub4iyZzs2veadBk9Re18ifwKrE1myxtQTe8spSgNgPS6aWYGMGKokGu",
  "key3": "MgZBsYLA4nwP5Xur1LFUzAUAjyzxMXkW7bLQszhqDntL4hJaPYwZZaqRhy4tNpbvEiFmAjxNvddBkKUYnkpGvrQ",
  "key4": "bNURYud5gKvGzsdnYQPi6Qu8ZngisTJ5g2U5uf7nHUaZzzPjX2DABQ3Trn9zPwkvA3a8sVXsqbS9JpEgqhHt3MT",
  "key5": "2iUFquCYu7KiDjX2u6u79GX2jxtoDtQB9trrLYPukx8xseNT61ZkX3yLYN99V2wVaAnint3nZPNWNNtR1gonTMqd",
  "key6": "3YzeHKAkv2kwEaSqLYhgEcZmoy67sJpbwKeods6JYP6ra7jKZ3ra61sZtuF6H7F8xoRuwpASuBjyXPiD2iN4YmZG",
  "key7": "2Wt6vKkf6SHGwFY9YVATPi9mrzXniyZ5ADtg5zqqzZm8k2kaeVLAZYEgeDhmcCsKqAtVnkaovgn22n9fSHRN1k5T",
  "key8": "RK2a8q8wRZtq5LwCgwLRykVzQ7TZUqobcggzJ9AqfjwpPkCvaqA4H9kGixPqUXGtzqrQA4UWR5XetFQ2feVVU8F",
  "key9": "QmoCzbXqP3At8FSu9Wp8yq9WQC19JmjWGXoYhpxStMy4ekVrMyB5AcPNQYawaJarGDdzG8NebYirhPUsMvuAE3v",
  "key10": "5J7mh98B2S4oCaf1oqGAq7bzZ2LsAgUfrV8Rr1SFJCZcSS6D9gwAEWDZaBsuiMQt8hQQz8wapDsH35qXHv6hV5zr",
  "key11": "TWAzLgr6xaYCuP2gVswTLWQVNDMy1ToDhbDP9hYj7hFeAxxAKcVB52MUUcVozEVjNaX1fnpf9B43HiNiTCUhQFu",
  "key12": "3SMB2y5gEyMbfarANdoWVzJhyQXxoiCXgmWFYNCrxZpMs7nsnv1PGs5YmDYBeMBPpawmaurW4UTL6JpwqDT8D9nJ",
  "key13": "3E8dCb8jfYAychFTQmGGJ1Wuy7TwYrXXxpT8EPNUB9baF1nkxZZiK1fmuhhfY9NjaUGmHwZ2jtnsJKEz4Fwx3LTF",
  "key14": "2CXfXt9t5qofhyEoiGm22d5hZ7fWuqaj3Y36HYuYyTVKg9mzHDDTQZzTwu63DqN1FYEDFshwsuxDkRJaL9RT51bA",
  "key15": "2vnRL7VGZHfKpf8hf87cGQ6G5KSyshvLmemnUsN1BczKxpCGMvarm1ktMUk31PfqUvPEQ6XsznTHfXceeuYnytfn",
  "key16": "1WgjEo3rfoMowunxvZPuaqhtxit3yZJidvA48qG5LgS9ZnrcPaixYkGF4Wyy43mzPPM8yDc79gW9WNnkcZ11cvE",
  "key17": "5owJ1R6XnZ4Yv6ffrr9225to1jhRzwZyHnd51f85Tp5PFyQx8uqWv57Qdf9GZmixqdscaQa8VKbbq1HkmgnRpDBv",
  "key18": "5SS6MonPRyTkiCbUKrggFSry2pZHdqFv2JHGSeJsQfKRKVRp5JZcp8yvoCexvhQVoQeQdvD5BoSRkC93bLstfMxp",
  "key19": "41dMBZ5rad9KMWjeRgUT7YB9sL2BsHLq8RMrUSmRvmwzWzhJBcEm4FAkHUv5NUUyShCjkg7U8G4TExxU6hxhaFzh",
  "key20": "3ZfQpCHnj45vdBywFv98pd8tM6A1RH8jHVaaeuPFZ8GCQgqm5GLwQbHV5qJ9MgpzENJyS4m3ZWrfEbRshpCe9bhx",
  "key21": "4tW8c5PYqhLYRZ1ZV1Dobs6m1SPbf9Qvr3SxtuKq8c9pz45tTxxGVEB4FE4TqasoxCNdCMJWhxzUAtdXtGQouL4j",
  "key22": "onD3mULit6p9oEqYSjpkGgU6FW7ZUEFrwXR27tVE1uQ3tTinJ4Ptvc34zci9n8A1mz9jLsVcqtA5H2HsB1sniTX",
  "key23": "PFhdk8P8XhUv1ihuhhdAYAchaLMN86hqm3KJJysxqTHWPQXKQsyRbmNgkB2ogREKGXv29YXDhCZS4tLfjZpjM1g",
  "key24": "YbRymQRpdeh1hwxPPoXVBo5G66SgrCb1wyFcJoE65UfbEV3YePJ6i1k1whMoD49FZ7QWNPzAMfyhsCxWJmcF6Bu",
  "key25": "27hxuhpJoDPt8fViwWsj5gRRLJ9Y65xpJhx1UF5jqYs9mMVo3swSruTbGnV1wounKf7gtbaruGCn2AvkoW9berP7",
  "key26": "5GUUP47gvDo4arEzhgmuG8g9h5WqqM4QrPVyFATuZk7NaFgqKsv8TQTatTpKnq7aMyKhpnrnPK4A2k2pbk3puGao",
  "key27": "4MF2SfysyWQVNdv22TKooFj3kZqR8biZoAu1hoyHPWe4xT5YNwxMKjKr8Eohku7kG4UTFP5u3DkTf2SFKigNaaKe",
  "key28": "2TPoKyAPV6PrXeXVnSiduicafW93RGbbtMxkzUm6Nkzm27dTcywXVYSdK69qnAcxpTPuyrNRXaiRg8xnztXpdwMH",
  "key29": "5DrCjb7YgcwN1by1T5hJPtDBoa6h97uSvVPzb7uqR5cRA4xMdGERegcgmpm5MF4qUpt4SHsraR6CawDfX4X57pjh",
  "key30": "5zdP5EKmrnDrJ5wbQN4z4J6QaUyJVCbXLBN9M3NB9KZnNoD6L2T7gTxw52SXg5ERDh93zFRfxTFt81EYU7wWZSM4",
  "key31": "3vFcq3YNNFzs3nYJHTBexdqwvG7Ww4F9tYVTgNqzyA2VSRMSLheS7zP3qoUNjwkmQJw3Gsy9YP3E5tnSEmGGwRpq",
  "key32": "42FaDowcVuRZUkabR2fLS7vpyMPNYKxrGWEFFPQkNPwwYB6omQLTi9LJDBW8njYTaSnveamVQmouACTcyqZLxd67",
  "key33": "2Jfu97woseSEoNddovFmZC9iuWmX4PU8hz25U3qJFjKgUZwgGuuegpoBjFmWyFossbGhHVEPUdaXaM9McNjz6Py3",
  "key34": "27tmwfDc9UWsHHBhCD1UF4MvyoMZMKYHyjysABaKSiUsKx3EatzECUXCo6c5JrocmPyfB6XPpeLfCkWumKsEorPh",
  "key35": "3RXi5LnSsstHZSSZtbaZKqJvpSZWsMFv3eK7wW7UES5edVZKrg6yBHYzudecFdgjCzzwvosHr87P9c9R934SdKu5",
  "key36": "a6LVdEvLhdfAgnLCezyGUZutTSW5gRi7wjyxxaJ3BGNWFoJaNt9nAVbdumFvrvcs5Z6oRNRPzHRq1JKWEuz3Xua"
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
