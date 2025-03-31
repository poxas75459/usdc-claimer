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
    "4PZrwpXcScBdcQUeZY8PPs7y34771UDJYSEXYiFCaaAnQoWRvs3i9p1zTsYQpFMyrBNMRujafL2iffTUUeYqsa9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pPjfG2JU67iBzoiWUywMEpSsfP9JQ6jWkiHJ1wJ5Lu5BBxGi3WyKKj4nYLM2xS7E9pqxMNfXmPa1RNZH3KysTwf",
  "key1": "CH7f8xd4ZKMfeWoDzXaWcGiuPsCBsthbu7gXyUXKf4G5md455LVfsbNjzHdKK4SvyN6Lmb9pEULhCABqwF3izM8",
  "key2": "3eTFWsYehxfW3cWPaHPk3tEFDerK64ageNpzKnxURH6VHf6G6zAL6HMnCJYkRG1cZ5zKMuagAMsy43wpmtyhUn97",
  "key3": "aueeHEysR9Q5sKoJFAZnvpa6HE7nDLkVxXSVyt2v6pVqZcrb5zuEhtHipnvtx9bkntqk7f2WPAxXZowx66nRM6L",
  "key4": "2D3rDHzocaeAhSdhGPHd5bFaMfd7WUnHC21AwoiSYyYqqhCf6XNGJZuJmTdZeQLYnwTNb3wuvqhKXPVYEYoC4yxp",
  "key5": "3tRg79uTEAvtsfNQpMAf8iadVP3ZUVnGhLCzH2QGsG5taFvGqD4Nd52dusecBnNMjBpaLUk7wiJqGsGSDUn9hV5t",
  "key6": "2Q2CngcafzbRx5PrQV2APeu696xweuPXeR3bsDod6po1neSTWjqfJpHgdeT6wfB3FauzvENN3CYoRfSFuX4Wnwn4",
  "key7": "65NWmMcBtwTkHRL4Q9shq4s3MDJ7NQXgawUQkzo6fFcp7ztMhvyagofVNCsgAcaPGSpmrsdeC853BZyq8zAkFUAB",
  "key8": "2B1bTSkpRxEgBnM6UTctsNcMmrda1HDRkyYAz3CgNSXdVmsG86xsHVYezHy5hcEQw755q39r8md5SwEXdyz3BzLR",
  "key9": "3rVC36fg3cxpUyBpc9TysFghMSFxBQCZ3evpS8DtT7wbm2YwbfW9GEsufr1XiwdEzxwppcjFWUPTnJBuYE9cXvm5",
  "key10": "3NMc4kCJErkbrGmDGdTiY2KDEweTkaJaKFELHX9zFhTBwSp7jBHtZQuNFpvmcF7kXi77vjY8KANLsaDHrGuDmXB8",
  "key11": "5VsaeAn8a8uahDfC276yKHBHEtrcjTVU1MqE1y67VGXeQxDL7VJTXmvtB4PBwUvDNrY2EjNUSqBRNboyGXPEzrNa",
  "key12": "3ryCU8mPi7uqTt6CxD9Mw9JtEWvZHMFh5BZdHunPuzsordbQ4MhbNaG1Z3bocLrMgBoiK7jFjSqxr2FM8TdyrgRQ",
  "key13": "sro7EDDQUEj9KzA7gVePLH9nc39dq6AwsL9Def8TTk7zHTVtRqoVWe5yXgDm3mmqNvQBpSUAZDkq4mdHttiuYqt",
  "key14": "3P9EPA2tyNMwdqj5jSgcEexb98MiegT49dyzpNWrBNwu9nUo2692aePwjRRH4a5EuewBtzcTZcTsvb41t3dQkv5a",
  "key15": "R2vSHTQpjQxf6bLKQrPJjTckw5ieorCtNRbsWnCHjgib2NL2WGJX3bAkJDZJRVMFKg6P3oQJF6ujyqhRwZkFErN",
  "key16": "2SYXGZwRUX2cBqUsd79uRcXh1vCe8GbLwUHNxDj4np3a1J1RZuPRCPEn4CqATKgN2cRTXMsCtqAx8gvRixxCxzyc",
  "key17": "2yCFtjQJawgbeQGhjptXF7ZQa4NkJHGXox2vtifVmgWPgR8NDd6vYPdf2JhkT64KZkRodmFK6kE2eXRrLHDxENtK",
  "key18": "Y23U5xAH5ioSMXMU5As93tryNuu2Rx9BRUGbmp4p9MfQQk4Um4ubUEdES79ZFJEh6WK7w4RTT75dzTeFpeoFvhv",
  "key19": "5DQnPfhHZrQUfgxU3CEfurKUNPDSU5ekD45jcPf95QyQvFVNm68sjHYWYv1UKxYfpiaVFnhqWDWLKn9Fp9y162kb",
  "key20": "5QEycMSs4E9kmL71StnGYF4vvohCSqV97Ttx5Xri5p8E5BvegJRKURi16uLtoXCfSth8PFvBmTpCcY6QunHHMyBH",
  "key21": "3JaBFy7i7yWyHRus25S4srMMC1D1BGEruk5EmFnjz5PTeD37HGwD82YSfsb5omfY1UFegaAvVeHCtAfjbUxUYVTR",
  "key22": "umqPL6JhzWno2p2ungYEHHuefZoGXaGS3TAQhUBavFLKrWUNT3ivLP5KKvgveDy744SeSpWQT5K2h3cwz6Likf8",
  "key23": "23LZiDKE9z2bz5qyXbrn4Y6JsnaZxrWJZpSX6bVHFvEVXm7z577tNLoEgtnPhPzvHTaVbuaP7CM8Gyi5vf1oLPWy",
  "key24": "5sTuAHCkSFAQb9v13EFd8yyb83zazJSqfbdbRvbkBgUGvBdJ8fPfYvhSWTVUVzq8Ey6iT1dGKVL1ecFXYpTxVeXy",
  "key25": "42e7xExZLoou6DNfkkvQVH2PTD7w5ZRywfDL42o5dur3DVhAVMsAEHfQfb5TeEHTmFo7yZc3YoegvVRMuJCBz2GV",
  "key26": "CduTpB1VbGtUo8E3rPA1x6vykT73uR5oVJYKJkU3QarXb1rEKjn3CrtSPEtUf5Qgg5VQgTC5cLxAkzfdL1PTFQN",
  "key27": "2AqRk7BzJZ2JDujfWznDAj7qXmDo6qazoi7K1NiHYG3L8q2cNMzx8BNaP3meUkVmQT7Cs4zYH2u5ZLje7TCDrjfz",
  "key28": "2pcZSQB4cRA8j2yRSfPbVjwYKymUEdJqpYsWmrDyhW3QBw37GisPKXxVJLLhthTFKo7RoPMrqUsDLsFX2xJgqNbF",
  "key29": "4V9H1xwkQureMAht6LNncnPd8Kaxvk7zCYhBxtbjjp7aHQ4P7SsGVLGEbbKwGWbe7t635r84EzHiXAwiZkFm96cU",
  "key30": "4v5gn22H5nW5RF4SgNMtczdCBZnArmWkFLPEmnTXA6vyDM1U36KUQk93E2Viuc4KGbYkwwUfL9zum3uPwBiKyxyL",
  "key31": "2gAhaHew6DVsFi1PCpBtynfnVj9AoQKHVTmwyT4NLY56rDHwrn9rKQABYYJDLAUxY9qqRzPeH4Xw2TsaihDhTBqN",
  "key32": "5Qksbg1N4uiqFuBXg8fwmjfMcRdg4XqAHLAZLuiK9tBz7tWu51o2Nim7DPgt5at8HpNhLUw3VAYpGnKJ1aUS4Qz8",
  "key33": "2UoVxXE5Fcy2cZB9rs5AQFxj5mxCc1NaL96VKhVzxoJ8UXihXjoAN1QaiN5WwKCkvDeqkGAE8exKkEmJLwcKPrEV",
  "key34": "3CezZmz7BFNAjUpKsGELxUANEDhHamYDJ8Pw7b1HVbC8yPkNfxboJnqKUUNwAjR7SzthWg7EbGdnG1LLfuPP9fSa",
  "key35": "4MNHoEqEqXupotz6cFfG3fLbZQRGbxLi49aGdnank8f13K6XGtTNVoFA8kegzPAntPAMZGpxp1hQ8KZxHFYUtzgZ",
  "key36": "53GQF3p21CbacdDS2gHJY41qXBNjP8RHRD3qzmSPBpKBedypd6Pkk9vYUJUDoqJiys8ouc2eH5KVrqTYp2anvzfX",
  "key37": "4A6dmqXjmeN3xgRN4gTGL4LBFf7iHfgc3TVcJ4TUox2mCb8maxdbFuGniZkXTMv7m45uDxoTneDs6CWwNtZaba3o",
  "key38": "5GLYd3XYism88WzHYBmNA7QsKBmD8dbp9cbqoTh7cnANv8wAEymYch94ecpRFz2jRkPb7g5TjezoUrb1Eddx22oW",
  "key39": "5JXtVrsThxnqjgXMRvF3JDEwXJo3gUkyjsYzS8wbTV5KmMFsh2ef1zeYph3MRBa14HM6m9ECMtvreJHuYkbyQsF5",
  "key40": "3wy45irZiiZV6cNRvYRwdjbJa1aAYxSx4Y7PXLS76JZJoeroaEvZrCz8JKm6ho37uf53Hg4EoybsGWDHshDspWxN",
  "key41": "4WBLrPqjvH1Z9vqWZiH6pjmHWJexxQkfAkHhNJhEwLBhJp3xjrWsCBT5yfA1skL5xS5ukPxDu3NQ2NnNz4fgzfeL"
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
