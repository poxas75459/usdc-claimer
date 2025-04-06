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
    "28Hk1YcNyKv5XJPxsHnVUU723eickMkfgp7hXjNk7Zcv7nohrZzAqrqXvN8WjJjkFAT7dQopB2GFZSsutw3UUgAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f9vQggKqgiNcuqJN5pgn4dY6Jmb4VhuUKc6Q8tQ8HoZ6eCTypx4CEhkhg67CuGTT2PxPjf2mL9yUW2eEjAmsoc6",
  "key1": "4BtWWjCM2m6L5JysqzHQNaSoBUH7zbjiQ3bUnSXcJEDzEnoS4dS6SXcshTLLBR88Fh1KHABaUsFVU3EqznHRVrpW",
  "key2": "KzdDBqSkuG3S521xNX13KhQPq7Wv74rewYgUEH63uXcaNAfMpZLk8ef5BULEung6ipqWcXh2ejC2Dz7E9PAhWcb",
  "key3": "3NRm4gQZSHpsjKVcso8LA9HGBBe3yPhViV6ZFNftJyCmnNoncLuE95PKNDZXvY2RAbSvrVMCrWW3n1YoJyPNrY9w",
  "key4": "659NagEGTu2BytUteWKUr9UgvwVoFRCaSTLVuRFjGCRvhQdF33H9t9wsR7DQFcN7QSVkowZDkQwxxR5rkQ3xfY7T",
  "key5": "rFdE1WXaAs9r8GfmRBhiZoPwckSSJSvewX929xpLw9i47LAjxchPQyADYk1X7M8DumN6kwzGsWMAVicL3RSmCSD",
  "key6": "4c8PP5QxjzbeJLr1YJrGxLD3eJhn26ywZSYVWRhSXM94zZ7MXe8z9YYN52ruB1qjPft7uC1HbPgpJdmLQTkUbZMK",
  "key7": "3KXhKaDeDT6JJJNVocu1gktySZCZRC3wVenYCjJJZ7MVPzk8oTDJXbTSdDxfagrqtVg7krNuwkV4VmZKSwdzbT47",
  "key8": "4azvdN6ssb8cc7vxFa6aLQWBNfJLeBn8Y7RjaM16vxahWTbiUguX1Mf7dZP4qWGW9Af9iWUM9RNbQGaA7JrTj9Dt",
  "key9": "5PeiFRWxpMmPMaRdaU7ZUVPYRhyaY2DL7kJVFpZ3WcmELqSuZpjZNdU1zMPy4szpqNGitNcC8TC9oVjQ6qT5pCML",
  "key10": "5D1287jKDbFcmqXwpprFL9bB96HUE3WLk5FCbyouyJDJBtZfitdDWU5bCHqrzDCsSsgZDZeTUgdjnocPb7iGG9Kd",
  "key11": "QWxzTUrM6uSHgaoNFc3SARRH2DpWQjycSZaG4Us5JpNKW3ZfyMPrhZ5WTMx9dk3bMFbEkppUPi7r3DUw1a5abZf",
  "key12": "4t3W69KkULjJaKDRgdsMkjtDr4nNZELVd74KyUVJ9f9hW7ozpyT92XYsLujHP3hTyNJY4Rybb9NahZ9WvKamATRs",
  "key13": "3yoaxqYwt2TN2YzwwbhLJ8azmrgppfZgexUwRjtfCKTw5XTiGoo7ddU3Pn4bBfYoFRqTt4cC1GK61t8RXiM5m6xW",
  "key14": "3n182wexJj4pmGpsyMPMgvXLXA39o2oXZUcU6prQHssSqnQQWQjjaPhhjRKGmoHDJnVDqKuoB5NhMMfTqLi7dg38",
  "key15": "5tbJpBPXd8JqgyhV2NCWvj6VS6wVdNuTfMPYw8K5ZsKp9KRfsJdm1Ngie6rAji5bpgaxjKLRGDGTubkAZM4kyPa4",
  "key16": "7dn8zs1G7NQjCT6hiMdnqPGEMJAfABUcXyxDmAy9Q4xPpnZhoXY6Vnxpoo69KWRmbFsrfes2XTTzoxNG3tt3z9S",
  "key17": "5oCwukUex6t6HB2FxmX6U4HyffJ8cC9PGKrzH1z3rW9NzKqPhX61xKGkGzGc5o3s9WGG6fhZL7kZodLT4fiZa48U",
  "key18": "4QXCZFDyZLjFcd6uphWj2orhHVf1c29H1jFE8LrTu1M4cPCagbpsEbeTL5sMutue1WwF44q87zMJzWVSAikz8v5Z",
  "key19": "5QfMT9XMghjxsRSdbH3NYefpCv9QfpSZnqc6kEmLcG6CSit4FQmfV4PrGg5PD9Wp5bTvquWXZtp5K6JXouH6NsYd",
  "key20": "hzVDaLzSTeTv6KLzbTAT9f3Z31VPbVraxyXMycAstrMXS32TCePnDTabuspNtDyY6Na8APUXTjTw4ECth4E7zz6",
  "key21": "9nGeP59d4NgVQc7mKxyT69X8zUpC5nUnRGzmSrbMWc7cYzDdpBJD6S7nU9RMPNCTorN3qaGwEmFUeUck2NfAxad",
  "key22": "4L9s6QSEBWwfmny5SWoCrwBPgRQkdV3N5WP1fBpB8TFMAJLZVLoHXPmmSv1qLcDWaxSnXLhUdG4kRnctSPwLwP93",
  "key23": "4T4hkeQff3RxpzqpuWWbG65JnWAmyw4ahj7m7SDmdaxXUcfSmzBy3qkUq6vqzTjVDSsiwTtXShjiQA6yUERq5TbT",
  "key24": "3ZkUYkiGZ7f8MiaT2pySYhDbTG3FeNssxUXQ8uoBum1C2AfZCZi45ZwP2veA37TfmrAUyXQxic1eeYXBjiNR9Gcd",
  "key25": "575smXFZ8SywJn2oRDbxq9UbNqWvYHyEjXWiaAHFUqwLq9uZMBSe6Ae8CwtmfJ2rZTweEDA8aZwbjRxFUrqtC4ri",
  "key26": "4TXi84MkhpMzn8h8HZN6H51qyGYHcYRakJR2KzvJPruoa9b7BK51bGHHiS1JrdGPvwxRcU5H9nemTxegzaUqXXZG",
  "key27": "3uCf7GQn3AdtSkLYsBFp1FQGKckgspGBM5GtbPBS5rQVLKKdN51s5fqsNXJz5S3TiHPvLh3Kqbx17bHZRsjXFKBo",
  "key28": "3G5Lj365cne1aDVML5Tm27x3sZBEyMnMC17iLr4eCu43cLcQHixSbgEQgDtJVxbUyXNpT9sCarRa5DQuXxP2u7Yz",
  "key29": "KxEzJszd97gRZrGnKC158pCiZLvYduBdTPHpXAk5FGEXpBqPJkBMWBx6ghq3n5vqbWRuhv78FzrRgxWp38QhQFx",
  "key30": "3BwWAxRwdjrp1vxKkfv1uZff8AEtSvbKqM4iatzc8qziRUA8CinKBSu8uuoPBHLY3AAfZpihWYxDEGHyTBHqB8jw",
  "key31": "XAHGo33nzhG9XQcDTdF8GVwN57puxYrdWXVmx6GypTBFhFa7rfK4tkNTfeTQ5x4b3aFh4dCy8tCMyzSQccxE6WC",
  "key32": "4V2vnN9oYNP5vVUENAJ3KLE7fTRq8pk7vcSKt4SeR7jA6htRAVJZzUq6fcnZXTxgaUCjNPTvuqJAbngsfYS8fPr2",
  "key33": "33uxmcUQYuSsZ3WBN1B8TuAuinSssa3s6kFPMXLvVZUeYEm6WNQDYdZT9wjXx6GEYfyDbpGShNRkLHYTsPzFVPLp",
  "key34": "dtvDinSUU6adqscHvyBt2ES5BPB5KyGgjcmas9tMkBnVMVXsKJieJmipYG3QAtBVxC9quZpzFiqUq4jjpoNoWQX",
  "key35": "4e1trQtc3hn1AesQ2CE2kdch8pNbM5eZCdriwyHPnnjUi8HHUHQ2uaFYRorqwGiuoRvRc1T4VLJFfWpcAothKrpF",
  "key36": "4XX4ESJMH1Hwe4NDNwkkoHZYdQM29pX6sxJqUMbtdm4aKzR1hfHoKutRvVXa6PApvABoTh4xonYcCzkAEx9S5kuC",
  "key37": "8vWpnSRde48Xn2Fae1D22LfFUmmbSAwj8BozpcebwRVNjDhXxCJfiAx9VNdbBzSNuYphEWUaPuz4ijMP6GCRWeN",
  "key38": "2YXyCDke4gA1zDu4Pgmapcv6UA2JLFcfr2rqro4YYppCsKfH8mYyeYSzwBnd2HCU732ThaeMtk4uddKZbHxZEnuV",
  "key39": "4sano8HLRGyHntKf58SJFoW1ZyrDv11ULu5Z1b1ZdeEV1YdRZrXbTMsz6ytxYNTEtTEkjFWSEQfdDhLkG8ziTKy9",
  "key40": "2pNPMHYUecHUJSuKYyDVBs8YXf8Kj17Xf8XSTs2JJt9RzascYNaiGEGxSFCfMYtH57rKZRx9iQnRxY2etRJLABfS",
  "key41": "65FstcC4kz7JptQi14Qt6K2xBh9mpKpE1HUah3GM5rshb8jK3LNipQPBP5wQetse3hi8dBkVW4HHoTgXknunAc3m",
  "key42": "5gTo6u7tLNNzxsxydV8RoeysWQu8XY5rB6yyrerssfwHd6dqwSMWb25rD9mf9pYANnTKWuoKiKjZYdR9fmVYKLgc",
  "key43": "2kFj3S2dPFKhPpHBGFifcWNdg9D5xdxQcgS9RDfTNM4kMeQBxeipsS948izBebBsmkhRQzffZusepM6FsS3DY3Af",
  "key44": "2kiuuTCBmPbXWhVLDjV4vAzgSh7nswV4f4vja844jS6XH1WowL12yYLi9nZsRXNhnpigWe5tngVLU1rxAd4ZZWdQ",
  "key45": "4G6CbzU9AHJB99brzZaZwChRDMgRpFXi7L5oySjxAmTDfyQT6GzKZ139UtM4YAZv662sZ3CNKiwor7kFxqSkrS2i",
  "key46": "2UrjP3pVeiCPPkb3HzyiiF49QDRMUYnQicQrFXTox1NcMzi23RnUv2VDMVVDd6g71krNtYrJV3dWjc6aXTkKhqAX",
  "key47": "3hFEVgkkkae3ks9dA4ik5ctNrA7nUwHZgC91pxXkR7SHNgnTyV71NoKTcSqShzGsBhJunqgVGNiaX52mLovkv2tC",
  "key48": "5KteLHwsXQtRTKgEzqbd5mWMSyWP9JErKqBJGy89VoHizy5SWMjPkwkRTpgU2Eq5xCoupc2UYZqATUYfL5PQQX8h",
  "key49": "5bZZwUdL672zZ2kP6MpfXPSB9bGn3p8cBi9qP1N4SJeCYfaFFkk9dXWszQB32jf7vgJC9AhoYSLFNj8TcQj5cDop"
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
