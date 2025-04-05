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
    "5EcC62aGaE1kXA1jMPeJaf56tJcPnuLUDp3VXixUq5XAHvX9wYFFkBgWD6QwdGBt4Qxby3jsXmMTVVCWH6PnuuzZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21WiS4vFtbySmggVt4vfeJmxWrnLrf4LSg4UTjErGqCUfsbRRYLdzDTcigw4QhsbHHFAkmUJ3Ri1dpiYUuVStrb8",
  "key1": "LuKnCDJ2ffxwZzZSKTAYQV5sjPUHgeXiwqRzvEZnans65zswv5opGVHwTWyfKrweLx5Djf5zPh47QnkQ37ZnBSK",
  "key2": "3ktM3VrXKHgdXozL6KFMymQ4BUpxaPfK54WyF2ntTwTXKwVaTuSLbi9Ckxwd3Ec6v4bQ5ksvZxjU6WHyTN4GVhBu",
  "key3": "652TCdqWsnPdDGds2dRfW2d9vjwYVMpp48tqn2SJ5YzR5gJq47KmaE9RKYopAzSe8Xc9gEMeB3ipPia4AcPQfcnH",
  "key4": "3wXc6CmE1mTZeCamx4GroRJV6juTBXuy2T6zYcF564Rar39Vuga4DMWyJaar8mXESfgZUz96ZRbWuvErNQZVnCjN",
  "key5": "yr7na9gEAeHXHt6mMVR1jm1jkvkJLMMTj9Yeo4K1csABQb2HLZgokCk51A56EszBhqt5GpHmrNtMcoP4uW7Q8Xd",
  "key6": "2qBQdjMinAt6DzzBthoTvzkWehGJ7FomC2CbWKzTfSgwEzNGjBPerSQkjBUpcA9YoJ5j2uEK9KrebBsvuXwkPsav",
  "key7": "4ttQ5UjPMVxENrFvbmfbuqQtJ4T6K9hZgt2s9QnPCTtVhSLSWSKr4eDi76uh2aUdJTHwShzqEC4GnHP5fqCCfFbQ",
  "key8": "xDu6mMZG4QKd1b2QLE3ygxWkxVNbQRAyo6VFPJCzjdo7DpsSoiV53BqM5YKVE7cqCqyfcenDZHJanw6bk8nCpvL",
  "key9": "5B1WkLutYYmRonoon27XLsscrf8ig3YisoUafvnh3h567fYdzNkPW43eQKASbX8w79pnsixR3r7t3C4jTEdD86eo",
  "key10": "3vhwnDHb4yFFsM3vL6psqnCoZM7SNH3gY2XkzCtaomFPSKkpKME5zQXEPkXk9P1QXCHsCmCgBTGxSKH9uR8CvJhL",
  "key11": "vQdEq9ryZfvqaaZ25pfe2aUBuHrBofZxzNb7G69df3UfYMFMBJsYSYpyJPKHSno61xKw1nrpErwBpegyTtSFs8h",
  "key12": "3hT6bDKXzmpkHbtT94Rmco1fEsBSVqYncD6i8pFzRFDXnG5RZveQUCsyVb9gyzCyNtcJMEQ3Z5n6EwyzqMdHczrG",
  "key13": "3KeHgTqba76QrT6WZTk4C3ngrsmqM3yePNxANNUsTMd3i3FQpWpWbri8pdYWUvkioU8KHRovAVpHmc7NLxwT2sGQ",
  "key14": "56m9cmjWKwaiXS644WeH9vvvkbMPMFGNDvYcxkyhHUJxqUVCE4u5T82mcQfF11MfsDLLmY15ppRmR93qKaERqANB",
  "key15": "5CjZPF1Cn25rbxtxruyAXDBjmKu7jHwgZ4dBUUXb9sUfTjgLGowG2y8evTQ2F7iu46YtufEZ3uUXXiPoCA7dBa97",
  "key16": "2kfhcr1vaPVCUwC9ev115VwvdZ4Mm5a1ZtQ339dXN311vyZE5GmGwHdkgYYDpNyh9B9mEchHpxquffrKahPNAWg",
  "key17": "3r23RcMmAAX9iqQDHBRtcx1v9BUPT1zPGTzh5YJndSmTi4zbnuCYKmMwEbARHgKnJmuwJa9LdWTBzCrZLBmUVVEg",
  "key18": "2rTKtLjocuxEhBBfBbqQMhhJJCbEwpgpdNk7ofntsw1A2LanaPaLL5gT4JiTMyGWs3LJDbU7TfAMZLLV1XZfoygn",
  "key19": "DXCsa7Pfwewe9iL8rVKhnbKC6sRyvXwNKdkhgpozKkrwBJAG72uuhRNfw7i3RuJFw6k9iN5yfxNPM5n2cEjDwsV",
  "key20": "5gJmA9sUpW2M2UUBt4417AumV5NpYgtCMu4CowdQcsoDBwqfMHEJ7Hm2gE7XyaCosqH3DXQ7tK8C3gb79MrVt2nm",
  "key21": "25v5SbJMMEd8RBrZanR7AWsAGJ7Y1Jb3tfNdvpxrpDC3CR9BsLLQcipoSrc1WMa14SMmkVFUhp6hhraTQ3V4AM5q",
  "key22": "3K6MwycstaZm6QDEXvcbECTp7dYqcMQQr72eM1fg75xFXr4gCwu6AuP86Y7ajozvBVqU3Hpd1jXGgqcQGvUm1epE",
  "key23": "65MpjQsyMT3U8FYea3TapTZew7GUNkHn4cqzQ6ryvxvpd7LrKUSsuME8aosE74NW1DYb4tZTSmfJigPT7ugDLiZg",
  "key24": "2PeK8TsxV698dDxPXDqoAcM12ESxRDhJVXPHCok7ZnUF4VauqXj8caShk3fE1rHyjiCLW1LpmwHL6dNvDDiw2qbA",
  "key25": "KRZef6dsgvaNcjg1CJ5X1PX7qqkKAGqmHdhXqB3wMpuWQG8PFs2SNJiC4orCmHeVVXojm54KG4t8R1RWHALpHan",
  "key26": "2uKen6ogvjWc7jnzoZCW6AtUTfNEPHGtvh88NAUQA2W1UpKqC8gQSubdKvwcFoQVnyLjPsofp3nCjV4szdU82MnL",
  "key27": "4e9c1nJ2yUhxe113Grwa1VWAD1g2A1crpBBsNHXn9u5A2iwFNyPZyUzBK4UayewGjCSWTsLton9v8e1ZgVxkZ5nr",
  "key28": "4vSYsxYbzhCg75sZdUdJjNPvGEzrXsChLpBBCKx1crQHJFgTmW84mW8Wjcqaw5FgVdmFDzRSoTUKzHHdkh9tPZ2j",
  "key29": "2rAvZ8xhrS6PLDYBxMHtjg1RAX3H68PiXS3YNSTBnkZPDAdv7sa4dCkTejL7t6yk6o2KFTA5wVftcUS3p3xJZ8sm"
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
