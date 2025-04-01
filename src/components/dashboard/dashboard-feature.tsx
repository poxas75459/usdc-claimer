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
    "i4duwHjo7vPjpq2DFYC88pf2ybW5osoLH3asV3TUUFigKMmrRmqkXGX6ubTcUsjDCCYfjqaE4ZomLAE9nKEoNdf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8Mbwqvtg8TU2iCrih3DYfWBZfXXJjSCVHefmm11N2wENqpT1DHGoHnTaGLomfCRrxoEA747ytPk4TgJoEDWDHdm",
  "key1": "5p4avpJaTASmpK5gHvyKgY4mJCb1LHNX8VNDjgFxG9rFFohGn5noTgaRtHKv1ki5E9msPiih5v5PT2rbyPB78m8v",
  "key2": "osbJy2pZFsGdSsDAFvzeapM3Himwv7WjvkcSxAAAwdKzxKPTxXpMGgHj6p25WANAhhRccfzx8KMoSMxDyCjbUkZ",
  "key3": "5y5HBXC2ZzMu8kCj74aizQifepKVDxpqcvUjYUsKm4eG4jawJMBwBkbFLkp2vn8BGERSvoSaZY6e9Ea7iPhoPHWW",
  "key4": "67KFWMt71j24geUjoPxT3HsaJxzZdNeJ8wtXCUgop7CejJY6144suHHy9pwAVZ2YKYvova9msnx5raebnrrNtqtD",
  "key5": "5djBCU5GfLd8aaH4iJp1RQcdh4P1krvWZ2kxWiXqjidtJRxie5osw6W8HvJVmWjw9Q6iMASutgxe4fdwF6rnQcfS",
  "key6": "44f4G5iX648NwtEqPT1VLtHmKwoKmxzeB92VLX7CPaxjqMzsrPn73V9ppMVr8BQHrkAdpkXpqSN5REJPx7ouxXkV",
  "key7": "2JSQY7GxRkV4TA1G9S1LNQwEqXre9sjY4K44n48NyfJMBaxEvkfY1uVVTYuYX4dWrwzU956C98mQZcZPbmAfUxR9",
  "key8": "55hHBQd3QAvYks9WzQ34nTRaN5GRYQB3WY1msAu5AJGuQZ8fTRMaL7yua3kPxDaD6dRpdusahv3ae35t2CvFRmar",
  "key9": "3xeNecVuZjGhMGCDf2WsCsFVk82tTEFt991NVQzSSoj2sWNW93eEVi4T3S7qqSjPRgYg1nKv1fdLSgx6fNemWnKn",
  "key10": "4whmurHqEWkpEmLSuZDxGHG1HZ49eJwffBcAWGhuAHYgDiJjUyChWRWu91pC6cmR7BLZyP8SxLiqkTqMro4wwTng",
  "key11": "4Ev6FzyotR1AysZvwi9pfBFFoXPMcrqpV3Per15etmbZ1Xr1FMQxJFVrC1oRSJi2mFtF2skhffMMnsmBeArejuaH",
  "key12": "2aCdj54GeYDKkbdaAarecpzPiRuoBLk6rhin8tAJxcnEMPMKD9SFcoLJQ4akDNzLhYozN9TMVdh1ZVi4gmESks6P",
  "key13": "33h5cWgNMg52p8Fwz2vv1rR98CVtWk1k2DCGwQqFasVQkEQSQihtQPkb4b2xWntxLiMY55ShBrKMeTxWKd4Bcpn4",
  "key14": "2H3vyzfCKayha8ppt7mYEkBsGdtp5CvgTvjKhLjnp7Liw7uYgeubM7CZ2j5c6x11oKGNQ47wHhnN6Q3YsHjDoPMG",
  "key15": "48YeabxCXWZ8i1KGV5a3mwc6GXhCSsujqCZuKBfcKYsRnLJkfZiniiejMZKVjapyZqZuJ7i5wg9TvRN3i1dQG5U4",
  "key16": "qnZx55w4QZGnHNTuJZMTh92Fh3GkJBnCwvEcipExdiitoHRH2emZzEXuQCPZYfH1B3LtyH9aA6mN1DXZpS2BP6e",
  "key17": "5KD4kjricLFQzggsWyiciC1FvEQLTb38782TgNQMKLznRPYHu28LPCYtmuWpKKbwt9WZbp9UB7LzYjkhU6QvBdfm",
  "key18": "xUytdanYU95Up36Rw8jzKXnWPNRU7Wykai39iZyGnKFjYTQ2RuMNNBsSheaWJ7oyNpKw8BLxEeiaBm7ZUCaUbHy",
  "key19": "4f7K1EuiAP2PsaPqvEkw9rL27A7iapSPtQU32SbZr5WDxuygYCVT6KeNGivzW8QaXLM1ewRXyf4WumgwTbUzfcha",
  "key20": "5rFdHKL6WE5N6hMui3yg88o4h43Bznv7S7HHiVCRKUrMcTSR49pY11X7sHzUPVRN5oNWw2XpF8ibLnwXRKzPXULh",
  "key21": "5hDHdPs1QWci6yc5vEcZCyWLrVRM2E7RSEaJrMThDL4qLC2qBHobyQdBPoKMYkTYtiZF9bt3STnn1LKcZXutXRnX",
  "key22": "51LRtoCUig15YPiodpGYhuq4sr7fGT8eK88xbynqGTE61riMUvfs9QicKx4YtMUzDw3ntuLAnA3QCKMC3gLRXmvB",
  "key23": "52HLoTJcKGip168SQ75sM1y51f474PayEBv8CbWecnafpfHdpBQMGagvDhZPjvx5YqM9eDKz2jDP3xUTJPv6zkJH",
  "key24": "3E8RzhQ2xJfLtTrq53rBPBgSdqQJdE1nARHsCb6wMLrm64ftwfJ7qbbLzwysoy1D2dpNQoi968S35yEt4Ua36YYt",
  "key25": "5yCQq9PFW1dBG3Gituo6CK2L2BDtnMKVtM6tezbeUDRStQKkQ9dzYoxTqDYwfrKsFtVNgbUsYEbSxV9UVFt7Kz1R",
  "key26": "45NycStVrsc2zMUNGTqqBKS6G9kLfKZmwqydgzTgF7Y2oakd2ZJRJZfxybeLFfCF5J83JouquJFQGVZzeiTP2vgk",
  "key27": "3uAqv3LfyXtLVRBCL1DU8bg5f1yqcdC8J6K2MPXLdkof9CrVqfEoNggtoFQRQ6HBPZQMihVenmHnrErwz5Acwk6u",
  "key28": "4qqUPi3TafhAnTomFeth6ErYx74Z7icqJzHJswLouaL7eZsrJJUQUyPYQDGwQe2JZT8mtoLgkFVAzSa44B4QevfZ",
  "key29": "4f4e7ZW14cUyEKgA5ZHrfFnA5mEqXM2qWmo9gymkrwsA2axHU7aRaY6C4yNKaa8q3yHxEq357KiapzQ497ht1Ji6",
  "key30": "2wkbqHKsv49uRjgtsDovhBPYdfCrj8tMq7osSJS6eq7Rq86GvJt3dqe1ZhB3fAjhMTfspLjrbfU7xACUGJ23rcoT",
  "key31": "4QP1vFBtLmjgRjP2ueGS11DE25effTDubEE2emNXEyHxypZB575n7PXvtsYkAoGe8J4jGH9HdhTprH4FQwRktpBd",
  "key32": "2sXAG6qmwDEbpuRyT4pxz5uVsFAwE4yZLbGTSS8czJCfnQthN7UxaSZ4GrXETwgjhJw8Awnss7dqbBp56oiB1VmF",
  "key33": "YEgWRJq7mpfKE6Fw3EtssrYjMZaZTp9FvMK83GYMCsDzimS2QUXMcwz2pEGmy243jQz2TvmXkm8XnedwK587Rmf",
  "key34": "2pZ5WEke63gtf9uX5189XEzqYP9mEA4GGCgqgz7xHywGWNZcZ4u1GsHPCLHn51hasa7CwQxD9Qyv8irKgfZ9gjNZ"
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
