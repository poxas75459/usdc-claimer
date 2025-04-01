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
    "5yDQaPyMbdHaK9XjvkBscaJxj9w5bSH1SroutHo6cHoZThUsWcFMZcjdSvybMQuwgMu33zER9p6GgRU9ebsCLCeJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C5R5Vbt7E1qBPYFGGD38DXMdv71sQaqUn5TazBSof1jcJBddgE898U8tDYmPV7nR9W4U4as7hN8j6fG9ncubryv",
  "key1": "2iYCksQMSA2c7PidmxbKPDoKYZX3nz8XY8CokjiYD6WM2CDU7cEa4ZVdtHbJUsyois5qR1qTuAkZM2e6z2eVswmU",
  "key2": "55ygyzXjoWGyNoNPBcov4NL9BzzUHuRWZD6Qpyew15bepGLcDDJMWCQSgivYhGKFQhJmFpruA49xfeyyXRiQw1yZ",
  "key3": "4x6vHUqunninKVwQsnmANz9dSL2dc8aSrZuM7HiBdKN2Lpi9arAkB5bU7qKrtDYHS4Xvwg8ndvQgJNzeRwWdE21Z",
  "key4": "5bCyzg2Q2XHhdYKH8MVgcqB4C1o7owf7YsCfyMj5GsgVPAz31cJizrkuj4MEakxiduxb5Yr41gZ87EQHJKGgpc8T",
  "key5": "3vcVFbFVdQDrtet2YnK3adoQtYS7z9xQHLxXcN6o2wmY55ywddZYMXPvfGaeNsB4bpcoShkE9nE27hvNtSV3ubRq",
  "key6": "2ajZKKkFgbjGpXZe4grkXqT49wAdmZVBMYV3HPpfx2aTwJ61WZG4hCFAKq1eLzutoRNwfdex4oN1cbLreiWSZzDd",
  "key7": "eJoJfKtfGfWRYeXgPjusytDFvCxY6RRtoTtxCSPRUuSy9o1XYBjdVYFacK2tkEB7b5w7LZUCtNVJ7AMxGm4p42S",
  "key8": "4hDREf1LWrYg2NE6FqyhTL9Zc4UG4AjJCGvgM7gX8ZvWMP79KQWYSwLgbxdsrbTHW8YjYtj7NZV198dRNELx5fnN",
  "key9": "LgiAVWmJHqwVG3uDE2Hq8ibBWRuAoC6mQxtPeLqREfzHSS8vUcBJpHFtjtgTC2w51EYK9XPNHhvqmeGA6bSiRSn",
  "key10": "rhRVu71WGytj79t4JmdzVjN5as42cAnnpoEKykxXaE9MzStpU3D3owuKJqSZ8xytTKWhdQMdLA1vfxxXFRav2Qk",
  "key11": "4sviWpb1DVhTrGBR33js7kERiLz3wa1czRtG8d38SaoHMFSaH3XXmFi32jWKaiGKrz9NJMZrDDiD1kFT8r1C73Fu",
  "key12": "4ZGV9iVp6oWSjK14hLvUgV8F9TXGu4w9zf8EKuyaFjBaCMgqscrUTBfcoxEAt92oy2prqQyy1wgGACAq8ZUYgSUv",
  "key13": "5Zd8rQAcFRtrrdqS2igz7auRo3qxDFxJ1SXzQNB3CzGqMV39zsoNGXiVSRahnfPKLENgM3Q559Z6Vt1Bk1k2Z6a1",
  "key14": "5SYmcpxM124a1ip8F2kiapfTPiqfPrei7bb4q9yJbr1kWotgnz2Qxt96Zz5oycUwq3nfLHUxb6Secw6uVL9vFRfz",
  "key15": "F1iPrd7EBDGBeVMHLWbQqG5rkha32gqG4mDftDR7eWNaUrZC6Ka8aJXraRRPhETkFTjpLfcE8cyjZTcQExY6Puc",
  "key16": "VxpTEYPrZckohg7cXYQL6cMFyTo6FvJz8WZNPq7c4AMpgoqEB8rJ4E8yekQRD1nsD9gLSCXB8y6isQnfM9mHosi",
  "key17": "vuNYsXa2YaucXwfHQoayPRSy5gaeWs7SbSvp9aKmwFjEiqbKp3M33NsAPRnXUzpdBDtTnhwCpcusXsQqPQqgiG5",
  "key18": "3eFQRoCVN4a2LQxXKEDwUpfnnh6FAUVVnZJxHk8dBusHEV34oSxAnE7SCv8bMbFWNgra3NayLvKnoT9eNMhcXP8",
  "key19": "3rnTip5N143sgUbdyaBFVMiKNsgvDUgQPb7Ko2i8u3jeyxk6fP5mWdhXZ5BrG8rTd7r3D86zvVCByY8ENe3eiF18",
  "key20": "3o7VM7bX9xjCwJJaDcnkCA7aPs8kDvR1yeM6h3kzeqwPnqffpGEvio2B8MNnnY8iJHbqdDjLHRGvL5usbx5Ayfnp",
  "key21": "469mPdKho5evbAS7zkLsjsViCmTEcyx3JwztVSHm4bcabE6rx9AR73Cv883EJ2DrSJmHd7ETV9QncXWBZrqc27Po",
  "key22": "3ZSB2sMMYK5TNJgYnZivtNuRmRJV1r9rZB9Xe65yCKDL4wyHY4Hb9yqBcM9GHdTXgbyn4gJBke7FzH5U8Ax6Vivv",
  "key23": "5cr5p991QyqBeDmnsa4DRc3QSvavo8QGbQ9L9nNXmbkP57ppKaHUgkbDQnXbo1RE1FjmVicbCDiBhX1JpawNSdSg",
  "key24": "TjqCWU1bqHniDjfAAcLqoEzv2Eu3R3bs6HZnztUa7C4E3QdfJ23Rrf9t6cHBqNxQMpXAnvAsWrs4aVYjS38vKBJ",
  "key25": "2A8v7EVvcsuxC5sESgcyvUCfmhpF539zqbn3oP2qAmtjcvYYkbH8MrFio14EjukTuFuuzv1L4FsDJS7LV23hMMxW",
  "key26": "S1pXzAnh2d8nbztnNQcA9GppC7PsnSZhFi8xhQmNHzxaxB4DwBB5xNiDpRSDXJ3i41bNmh5DB342SGXsSXMS8hd",
  "key27": "27BnfWHypaAFGsKxhLv3MM4voVDT1v8uE5WCjLmXke5TPNjcpoFPzVdgHaXAbLPg4WpfcpaCs8dPqkx7rLhBSdaP",
  "key28": "2hPbNNbzrS9PUzPV3UKTJJNfNdgfDWXdLjgJkLHJHaYrGkWoRC99oVfL2JHaga8NB3pjQqnnNmiikTDzkZwxHS8Q",
  "key29": "3gk6iT8rFRf4BLW9McVB4zJ67poVYyN1KX4ccCgacrxVMTPqjmJS4E23iHdBN39KzQeG76z6u25pA6QUtQWYAPBJ",
  "key30": "2QELc21oKoqoCpPJEDFjop1nhLFQRHDoWAYCp6HpBDBzeXAY7y6dmUA5T1rXVFEuZK18yKGaNYRuqFPgKCL4w1kv",
  "key31": "BXdtXXab1gPzFunkCZhfXNHecxuJmezBALL1SBaniJyUSRXM2CiWdpDoQe2o9Gbzt1JQnn7pQAc4hSr3smZBpHo",
  "key32": "3LHkY514BQA8QahfLnuakqtFUVBviRS2GUs2KAMpPY4Ye2LHyN1eyEvmvV2DUe8uyRufw2apXGAsy7fG9PViyGNT",
  "key33": "5SY7Xgj4iUjw5cNtHBthH9TawnzoG3Bpfhw1XJWf4yK33FKs52eVHKmXCthzMXzdt2hccbcLeh23V2gDwu7hnyAq",
  "key34": "5w5jT7d8rgqtnrHL76hAnSaXunhWZXFy84AHLdevsWhZBsV8ZsAy6dAx2vAwUeZ9vVsNaWfBC2oJVdy2fHQxA8F3",
  "key35": "Rs2h9tcYEgDuQ1mkbK2FjX1cRDQTsKjAX2k13HtyjFqXLVpWmvPuMGJv3TAKTHYcsAsu5uXriTjGtmf93HvBnGM",
  "key36": "4VaChiSSBW7XxBs686jLam8wX4RuiRsfiv9idm6bE5xVm9Mvddsg893oPeBHzJqkEMAojBmZqVsbg5XMxbCkz8cy",
  "key37": "5MDcdgCo7TsEG8FfEx4vgmqJT4smQR7Yp4HJ2ZQVBoov8EWVhBWYaqAgJGkYoVQtGKpvL19rckZoUkAa4M4Lytzu",
  "key38": "413kh8oAM3YCVPsMA9k736PA3DbAwURp2ZboKV3fEWz6JkhmnyuehHRmZ5snqP4tJCJjM7cpNd39rEPnEV8y7ZWr",
  "key39": "3VMWzHBsWoW2RMFEmBi2ciRG79oKJLJ3t2Hhs6yY3N4wuq2HueKTHmpr6FcZGALbGxgnd258aud4kTE6Hf4YiDxC",
  "key40": "8RxmvxRL6Q3Nu1krDiwBLDT6VbcDCX52wo8dUS59taHpMtTtjkJ2gJzTJbFj3h5xaAnj3wFtk6jxNkjwrXoDyN7",
  "key41": "2rPedwLye1URtwfJYVhoksAA8EoGnmYEXRA7iqR8eDuyb2xtFBFamefo6K87oDBcXp2ssnFhK3Mjmm7zDn9z8nvG",
  "key42": "uo3UMANxY5r2kS32DMWGF7pvnTStVViMfyXFnazGw7yfenMKHQTrMeLojHjkgiZkLrH7U89jysUg8k7zBMscScj"
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
