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
    "2rgeoocBa84MqRFjQobgM2paBCJVtbEqhV3UVa6iCuBwjicei4mVDNsy4xBQsZubiJhNzPQGQMi3u3QKCfmjYEzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WrYZdd7t6jXLTb8FBwaX1CuopPxjLrcMYztVYtycu3JiDi1mT6bxtjk3fZkbCBpAWHC681QgtNyda3DXVFmiWPS",
  "key1": "G6qJ8eMpv1K2YoVXut1Vdh4XT6TRwCaKDFk22bcAdqJwNWUkeh67Yjdj7DnUxBfZXWxkLVE7GyPjT66psjBpgC3",
  "key2": "2XBZGfXeRRoGQfawmoqeLr63qYt7HMg3Q5d8681J28Bn46bfqPvWsu94f4kjK1PfU4RqT4BVPrhWNnx589YCuNpo",
  "key3": "5VxT5pqRrvFBS5cs51BxbRhmyr2cBNC8jXBSjhnZF795DBN8MKCSow5payWxgp2agP2ja9DBxLBPFP5dEmmUT5yH",
  "key4": "2g9zQ8LY7hHFkBcokEU98x8J5YpEH48FVYnctEVqCeoNnXp9teyZJQkQGG2P7FF9oPxVgv9GgpZqzx6LrBHAwArY",
  "key5": "2i9SdssgNfdaHvo1LXW4w51wBqFzb2HxY29Vjbtii8e9daKAJYgmZhETtPRxciMoEb2iUbuADJ6TMzwRrj2L9zNi",
  "key6": "4mFGdfarEKuWeMiHbt8ebRyuk9wajFr2FdVBzmbgiUbb4HspUXAVJK9FCrVuWUy5ukA5MeaCvqAwDktZs19metjt",
  "key7": "2heekBb8GK5cC4S8YumfjUS7mfyUf5MDBMcWx4h3RAXemXZqjMKXNXWGQZdL4B4heDvwjTk5uvYoqNpk1vCQNDXV",
  "key8": "2auEiCzkDyc7TzfYysgrq1U5wLzD1uMcqfkeHJrBNep9yAkQ67KyT4EDCibpA4U4Aw8iA6Bi8zZAf332CwfgCFEa",
  "key9": "3wPqLguFLo41phK9FV7bUds7PRDKNaedEAZkekvHFBWJ5aqmiQpiKW6ZYUmeQgiQwDz1DnbzMBo46EqFFFr6oaoE",
  "key10": "5aBpXEi7eezU792pEuhnCjAgqToSC2MYckinmYhWicfcw3ChLuBrMDJXjPgiz6g85ZCwwLuMnXqmpn4TuA9Mujgy",
  "key11": "3fC3GfhHFz5ccMxvWLuNjy8LU7LTJfQzw3WZ7MuHC69UppJ63qiNgiw3xNd5pAEeZJdTVazHVsugXwnyx9koCbVc",
  "key12": "3TKFTVFKi6o8heyx6qE365GMzM5B7mmZdrsMQwombZ5EqBjbLUK9kN3iHngQWqbSHnEscgmsAEvPzWPiCsrB6Vri",
  "key13": "5mRB7CfQuu9bw6JF3uf1iD6ms6ZBw9VwD48U2ME5R2VCwRA7zk2wLwpX13a7xShUJG8HNYyDuCzVCPFJHLgR4zAp",
  "key14": "5ttpvJKzZt1tXeCTZiJJ5d5PHzsSZY9gHx42bN38mNKuxuLEFpTtkz36x7D88Awyst9XovSy8GPnJZUJ6uRpmEbs",
  "key15": "W5CAmBuPbHa5sKZVnGfsX3spqUzyBvDpnvW8xe2HyoQvrHKSaCHTqnD5UhxfeC2wTtksbr2jKX2aKt1919TXAkk",
  "key16": "5cXXts9eYerUUy58vAMyqFFewAK1wBuFFZgeEvnyxUrbQCiSh1u9vSesywnimt1bGdZQZRNQwf6DvkLacLvxdBca",
  "key17": "3GH6wv29EgFujNBTqriUCsFGDTStKZ8qSJ2HfwomHRa2V76m4sjZBZ9XuVsFrW8dPTKn9K5NFPueR4dXUdRNHwz3",
  "key18": "5QjeQKx4Lxe1FCKBcdswZP4o4KaL9mvfB7iJKSGL8fudginLKnYK88CspsSxjRvrYprWbj3beVm4ecmiiSJXuQK2",
  "key19": "2nv1xBvGGbyHqMZroeKaoiBpvx93f3aRx2QHMzRokMNst2xnfSykvHWSpHxszxUFeQC2Gee2rTjgPbka8JP4jxf9",
  "key20": "62dMaWtm876xWnjSy2JKiQ1GUhcFbBTUtXcwFCw43pCXr7k4VcaQLbv6cDcLMfevgFagV9YvDWJVdoeGgXbfu6Tj",
  "key21": "4YyYFvwWff3ZpwmY66asAhaNQpAvs9pvMbNBTcSxN5fsvFmy5MSbx1Z9kLjeNi6Co9sDEqGpufaFeHQbuGE9X5wT",
  "key22": "3xgE8iYL1D9XcAyGASfyqW1GpahqQ5NG5cPRvgtFTHLsDWM2TFcEShUaqvYBXG8dKkVEzKKeMbPoegG8qGGARBNQ",
  "key23": "29Ucnku7SFr4zWciAMWmpVCGz5d6oJ7AXkHDc161wWGEZt6GyNR9HydH5nGyxHvSakeDi4sLYWBxoqvBF8uFyjmm",
  "key24": "V61YdtUMJ7esjUNwxWLsDwcMtwSMXmHYMdwyDWG7z7V1Yy8jyCxqzNMd8PJm4FPF3E1aL2Yie35CxmZHtNzRzYi",
  "key25": "2B3hNncTwCakYx8ttFb9GD7BmUW4rQP1sEvegbkQPmjaV7Ct3Gti1HUGv4zgH4KeDQx25MiMrohEJdyzyGc2feGm",
  "key26": "3DieLEDjgyg6MAFmF4TUrydAxDUiyZWjEpQ8jVWKio4ivPnBbqFogMHqHMLGFvL5dJn22n6BcXzoDX5QoxBMWVjB",
  "key27": "5rwyioHRFpu4rG3netk3vkYzyr45kuQKUMEQVGmUueovfFwVeoackgQzfmVLzYuQvET88UUYKscDRGV8JLrkR2e",
  "key28": "4hH2dAWiKdyW5ChYdXTSrKLsD8H3e3iRkAHnrrueFqG6WA6KkZ4UERFwrjJTZJgHHhUyVnnBh9TycdQWt4yyywAM",
  "key29": "4qKnCJWxVhqYC9bM5SKDFA3PPFKBfnGpi1NQBvBGDjr26ZBy1wQjPsp7QPQ1WciTYWFwdgdUW1CuWSpCdskG1Uzy",
  "key30": "4rswPiL57VwyKYWfs3nmWD1EhdACrpiSu96TpcEtt75CcNYRMfXoRJYQSz5vBNusY2Bh6Xhdcx2ym2GR47tfgoCu",
  "key31": "5h9UkHcR1WS8gYmbvFX7V6WYCfVTPkocPJbR21mU9JeUzSxzRcEir9dByfQWL4msXEAquwsf95dqSgD4cDqkPCz5",
  "key32": "4EsQtAi1CZjR7TrRDrzg9fCQidfEmKLawYsb3QDqjGNS1zeo7NqErzE33DFWvfTWbYmvRw5HrnnjMqUc1n6RAbKx",
  "key33": "36PN6WfFSUNB1SqfCRHNJsTc9rEfEAPgsfawMTutvZxjiUm1P9FvJDHbW7vSsbQvtD8imojZD5u9LayVZEGteLRm",
  "key34": "LKJgSNVAmQcTk6Ag78WGAHRo4cNqbDV1B2E1R1DygFMyhENpZz1jFufBBZS7ZfkmwW4g49YYbjDEz9UHMrT2Tke",
  "key35": "3CwuZajPrbB32hf35mh3pjBj3pBtVniGYjU5NXM3z4D7Lbaj6duA5vqduUpsiLh4owVE18fsmEJ1xLsWENcj6Xde",
  "key36": "5WX43b8r5UVUXYNUWs85B7tHNC1cEBrFEoNmaMQJYCAPURWU8JSnXQRKPtxPRhzwwie8Xp4ctyYkT9Kwji4UQr2C",
  "key37": "36FLc9JndB32QtmkgbsTmLHTRkhiXsD1EtccvSJtFsk6ASUdizZjzNrEwHL3GAhCxgo8w1kctAh7r1zmdXEbgSPv",
  "key38": "35owsxQ3snm249uxo5tzBqXx4g1E7soEPhpdjFgUdBykuapuNhvtTohiNd83UQ2oCFgJMF9aizAv6L6KzToTzSxB",
  "key39": "3SJGS1SNxu2qUBZQaFWcN9xJLsrodry8CMR7MXzJp45X6AFRTVNXZN6aH2eH4VV43w95ABR65ZSkoeSrt9cKz28K",
  "key40": "5GHS3MvoKyGf4rYSGGyvR6EHULiScHDTzx3YC5sUbFbxhe2g8enRg4gugxLhxiFQGgLqjXfogDZXPVuw5NJe975b",
  "key41": "sHcRY5JKiPViRpiDGjd7c2CR7kVMP2sVJR7GGZxvuF5D6NYr3Lt4uHERDGZBvHXcgiWTrHpf8pVMEy9Mugbbo66",
  "key42": "2Jo5W1iAYqMijbRSAQvrLMnFCj5eNsjKDKYc1KcgcSWVbWNM4N4hjXbS5AmKXz335gaDPj2rFUDcdHs2wJoEHFgu",
  "key43": "3Hc3b293yvoP9TCdEBUHySSud6s82YJBf41K6ZujU5tHAAy2Sag2D2QMwFn3L1yDbmAQxbniZEQmu6S9siKji9Vs",
  "key44": "5jzCWtfMdWxBu6TspCJHLxUDdSSutpCEz7e7XvwTvsnwqyS8TCwvu7qozZC5RVUwGknJvdwKfJUTDzmkoYbfZdQ5",
  "key45": "5qZtbLcqZ5LC5v6skBupoRMY3FNjspnoqCqf3ioAa7PoKSK9iyRxNE73BYSGvgQBL5Fae74c4rw6Jchse89Ga9ui"
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
