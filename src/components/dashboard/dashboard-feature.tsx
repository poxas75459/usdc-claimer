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
    "2sz6BmFjFb6UUunmErQb9AUtG2GDZytfpf7L4SzsU1qVKLewHJHJtqVk3rB2wwknSukRceriDQprJRhddcqK6iGM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NGi37zWtNh2MVp3ioQWZHETMJdonEQXLZ1YA55zyEDege5NXX4tZrYZYhP4yziigy1ViLPHff4L1efvJZhrnSGk",
  "key1": "2GbHNL2wU7DHc5XwQLoXiSADPc1CiurnpZY9Mc87JojPZ8AjpJhWkXhtP3hvFxMUFr6C5XPri3uTNm8xDGgPW1n5",
  "key2": "55wCGCDqYj1GxsLuV8a3JopGzjLuai4KYfyKrCY2UgqQSaDoWKVXMjgL9L2CyKmRj7arMbYm1V4Ht1jHrKnKTH8c",
  "key3": "4GkH5grTHM4BEH561B8mhDm82c6v3RNpk5LYvb8d2GTS1LFaz85r2rajtCgGR6ZqphqppHGPqzxxMvUwSU5D831D",
  "key4": "27KfdCPo5qZYbicZY9QDnZhJkTihoUbb5y9tTaKMd8pLitXhu3SdcZt6A95GDgy8NcanS5QVcg8nRVNw5yt2P8ik",
  "key5": "N8zH5gLcVnjzTd5MR8CzZfMqem1wpVoMWUAEysRiQCagiXAxFYoJfQtAXgBS2QHJmB2EQHxpEQBQyqa5MuzRKpo",
  "key6": "byHkD7qYTnu3TZgiLc3BfdPW5qm87VKVL5oiRbGo9QgmbLj3iwLBc8aLUvkeSn1Z76BK63EbY24ezam3qaCjxji",
  "key7": "3RXXx75bLRNZnSSnBwSCn2nRzcB83AvBJZHzejXazxb8wQjNjTLkSinDVWgzHRNxfu9j9UubXLaW3oy9YLZ8UoiB",
  "key8": "5p7XGQ2FsA8qxPzbWXQA9FWLZoNNWqvj14LPbjES43SnnXA2R18Lq1pcjjHJGzxJoYw9DMNuK8g3yAZZ3UhASi9y",
  "key9": "36yGCo1JHJ6zUxcAdM2EiCntKTDigy2NqWfG9HJYqcKasZcJmnk53peFFy4Pt2uCQyBQkNDoLco76NwBoSW4ZbcJ",
  "key10": "37q2cSyAiMRXN2L7DVp4daUdvqJGJPrkYdLhxwkGRGFXY9P2sRgDnJUMq3hrLfiCD5YQDiHcTXCwU5NyQoytxApF",
  "key11": "3crCbbDRCk27FZK4UMrYkgxeysR7Y8A5QME4TR2Qnk3w9R8L2uBuGhQctnmM5a2YfK2aVNyRMzGCLFeecSTpfDLj",
  "key12": "33oL6f5zwUz95xLJzvtycQoKY84nFhAZ74qCy7Ka1pMPRPaQDJqTsLAuTZEPWAQArfQn4KnQSg2gYD9MNP7ocXFA",
  "key13": "44fe6GodvKJhvkJGMYewKVgVF33WFDEWumbsVbdU3yz1q1xDVbfar6kuemFpRecUSjGWLe9cUCLWGwLYbXW66Zxc",
  "key14": "2rdEY33iYcMck3k2KfcgUhq1Ww6Raf3wTdyw3hyhZuvwW41sYJFFwG8k7cUwhxi42is8bA35hFFryNYxYWXcwEtX",
  "key15": "27aRrtpHdQFfrpRQzzhSFwEz3mB8E13ZGGErrrXQ4wXAMridhikMBstezy5dBYz62AzNa9YtxHo5LpBQpW9gXM3V",
  "key16": "2yUxs8Y75SgRN35RbF7m9hdeQz3cfW3vxF9TmPVL533REjEumepHoHNoP6KnrdHqVJKmKG3HEDUU1na3CdKwoX2h",
  "key17": "tLnkmfBKiF3H7TETk6j5QsdNwkjnTDP5xjsnGb4688M7itxSbdJ7KkyvuBxm2hZ5ZQYaomPZagGqP37w9yWZL2s",
  "key18": "475hdxBg4oc6dor29hHKQbL7smAXF6rVJRWqceCdky1oavTVy6wuE9ECzLQGHVNzCbS379UNE2RZGRUfgRMffjM9",
  "key19": "34p9EEBb1gwUrS9f1ETNTpEgz3VrYauMfhgERrpf9WKoYo2V8CyLwHzaghLxFkQ4c99MgttULDpwtSkyupFiUsJt",
  "key20": "3RKm1qkQHM5dAecDkm2H5mKbsFBK3JYLRJRdgoXoRujnDNui3yDADwfBc5x59iaXWDKbF3DaLx3iXtcp8w3VGMgG",
  "key21": "1aRdRyhRMwrGLeZBrcGoJtRHsVJ1LswKtzN37HxnMkkHY8Nqd7CeL3jyr5PTGrnpzjeeLSSHDzW7DuYfjhUnJ3F",
  "key22": "3D7qFaVkgHn1AUsuSV6KkbrU1juTrknyFoE46UPkq5ZNPF3huJwoR13ibMpvqZVtVu9BeZLzb9yRgaHLeiRDoGSW",
  "key23": "5rHikrsC4oWEUqFzG8ggeA8wkGsZB9qE6vcqegjEekDtztv4RCxrCa9cuYhofwvSfJe4rCmJYbnf5HfA7pWvmiJi",
  "key24": "2TBHPY5vLaS1rLuDNpiTNB1hCVRLa2rQ5tTyNx9pJsc9ELacLchdJJT2TaoMRegLDBqsZJjzphCK4oskikytp3pq",
  "key25": "4knS2puTbnEJp9bZWf6hAcQidYK6ViezR8Rkntbk63J2yX5QZj4z4XgrLuxV93PsSa7AddkFGtbkPg4PzFVTqc8m",
  "key26": "3TVc8Dsdm4yRkCXk4J87dvfnjd66c1YCKnC4u64qww7W9j8KQsGpy24oNBUNCqfozt6dh65YWJUDNDUJSF616XLv",
  "key27": "45vtgFcyLgryfg5RKL2624gbdpxYyAPyGXEmoNA43srHYmTqZSjQ7dK3kqDyGaLKbvzzWvRPRfBNqv6pQepx2pH6",
  "key28": "2W3K7psWBveJ9YpkNfoytFqbAnNX1rLhnNBQTdq8yDRfQ8ppya6nUpDieiCewpjZd7MYQubQ6rW164du1GhaSY3t",
  "key29": "3raNByt7Aq9KyketzTjT4Gze3oJPdNb5k72t9QLq2txcL4qt51ossE4oQ3kNRTrfJMK7kAv7mtExGMqFWWBM1F5t",
  "key30": "46sX1EECA1r2pzfzS8j1r2gxbEFb3PdzRkn5C2o4zDNSv3iG3gPBfDQbyYjEqDioqgWM8dw4dvm9EY51kb5jtBDH",
  "key31": "5duzV8MLDjEnQwSvWA5BJy4HWixa7hMdCfj8StoCCaPowz1xY85a4gVxcT5wJnJkLYAFkMGmoarsVJFjkbv4bESn",
  "key32": "5aubeynayEMRhxkSmKoh2H9UTZ1DtJiKuiVZm4EqhP1MfEnuMmTiqdeLPk4GKsRHGtsZWRY1fo2NVn1RRBeNfVgu",
  "key33": "Qsus46yijs8zEDB5ygDa6TguF8HpQ3gjfgn6nJnqcwFaLQQbLdzUQdAwY9N4MCQFbSUTR5rqyEWiMU6tKFmJvZc",
  "key34": "56ecuK24gjgsurfHS2adAV2ATaKcc1uv5ErD1b2YiyydLLm3JadKWszQULEym9wnY8JyPnWMqMaLUQ7VDxeaFd1L",
  "key35": "5MzxBBSssVjYeNCDok5kSHmxVtrsSvXHGhSkiD163miWrtwU7FMbFP7mgZWHPTkt8ZEVtjZydUgG4qjoPap9vtZx"
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
