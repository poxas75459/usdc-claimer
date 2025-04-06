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
    "3ray7mP3ycvK6sxzuqu2hTYaYKE7uzKGvkRnDTYABrKasGEd7bjhD5EQAarMksZ4Z4KY3Ltt7VzbSX6XwbgDxiqF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aGxKVCV6wWDVcVJFXvJ3Ce5Y4i9tb1XTE33B6oBnh7K57QAEkcKYYyZ2NBHnTmtgdjbo7ssSEEV232LWgdAXGXq",
  "key1": "5Ye4tg93TD9VRs1migHWgcbky4W6NDin9iioKfFGLE1m7TUP3NMyLt7hf4nfnyE3qxNvDG5kWvGG57ksazLZ9PiG",
  "key2": "39YRQoTyNumyAvp3zsZUc1MDK2QaKu9DV4tkHyWUnDastCtQK5XzQ9oyBYZctLyWeVhQYxfhPWmGTm7GrFbHLFJv",
  "key3": "H6Wb1CdfvgMhH6s27tGmv5Cq1Qr9LMdkvUNKtjrjK3c4wLrD7XMVLgvH23k6gzvxvs9x83CtJ4xMsm4SuV6Y7JP",
  "key4": "4CpAeZZkkHAXXVA7wyWaSUD6VVo3YnUSDBRsV95LQNaCxnh2RG2FG1sxZTehzVDZQH8EPNv8eGssC7Y3in3qHK1y",
  "key5": "4K7SfMz8rrtgkpAqM7ftyuKzsPvuR43YYgtNCuPhJAnecb7aUPf9BbeZ4So1xp1aXK1VRdmxUnSMPAyVBT73nX74",
  "key6": "5rq9skGn8oPzSDAt6MgZMNwPZrtXJfgXBf17Jj1rybLQExvLV1xHkbn4MgAj5Tp7pfu5uC44HWHLQDaGtoA1cTVy",
  "key7": "36Nts78KQcP3qxSJGsopPe8J34iXPHE8LB1q8RBKmwT66DtWF7Qsmro8LvQKdyNLuxk24nTQ7ZExQ3AWGyB5WNM3",
  "key8": "2mh1qRxppehQ67twB69bMQ2HHxEWkng6uCiwxBVE82fzmtmUdx5yVVgasaBAA4VknbviEuEftoKyoiccerpWUdMn",
  "key9": "2nCh1PWMwb9bUf6ChoushUEPthqMC3hqrtwMCknL7cndGvhV2U9deMUomJLFwHoH5kr7Rg2pyU24sZJPzcJ7abaM",
  "key10": "4H44nCYjQb8D9Svpe52Mvf5Fx136jXNx6zxdffK8fXsVd5ispCZCQF5V9z3eahJg3cyppSLnZn18eMUSYWVnEPjn",
  "key11": "3NmwqvANtbAyVhVbtB8DsyCnsRpC77p7kBXaTfnM4PMrGapTZjRhgSVnwEzDSwLYkc7wby9HTKiZY3NaPfzhsTVo",
  "key12": "2TD7kMFiDJ3haVQ8FzT5etUysC194a7FqV5EymujFnLXSdFSdexJr5X6RfqJesVeigW2hvtFTzUW7wmNpGvuyWWN",
  "key13": "4HqgEP7qUaFPeAWhBot7rsYxM4QvfGfrhiA4rMmM2b52qbzNWN6G9WG4MrCodPsfJ6EAJk23iYon8ihaQFpymCrC",
  "key14": "4CLahn9hQRZj1nq3o8U5gzhXGxKDrn7WsmW6sxM7bdmFUtCyUi5gf4D7Ap44jN7r1azHwchDCUkaBJPAXzE77XBG",
  "key15": "45JGfV9kJECknWQoWZufQfJRm9u83WFuqALDQmDLZwbZrKCGetUHLH4sXSrBWyBgCTP8VDBbKWZKz1uRn3j3ifh",
  "key16": "sj6iumXd6NFkz5XGaBB1yodJg8jNeuNt3ZCJWuyiBetX92MBu5uNR8iXiyGF5PfAP7GBDxsQYgeud8r6CF7Hgnu",
  "key17": "4nweZiaP1nCxzMJwAntiogsmMP8aBAgQ1utk2mWmgnhxvo5q6dv6x2od12JQYafA8fiVq6VR6c198LvZWyLmnPeo",
  "key18": "2QTyk3ZXcnbkDf6kWayoATCJJGzErXiuf1mz8U4nJnMGGiCK6u42gtngCNWCoeb24mAtWdXSMapDtSDSGjAkxMan",
  "key19": "vfpvj8JizjkKM79MsVL1WjHNYsMjSzHtuLTNsefcj7YA6NGNnFfuYAXkbr7eXQfYfqRZfPf84L8ZzTE1UDmFne2",
  "key20": "2dhqtNBvtGNGCRM5F9ct1vpVQWZeiwVJdTcuP7vGerGrtQRAiaeLtJFqy4smrTcezC9LtKGU2i59n3no6oeksspb",
  "key21": "5gjmmeFv6pLpvJbqVDqcLBUUJoJTLd6N7mwhw7EojKA26S12RJQZHNxn4ioxa8q6R823FmBxQnkbWX7ZqJ7nBsss",
  "key22": "5Tzi63P8WCYNCGZJZX7ZYm5AmLGhGyzKEBkqXnkPRgbEVEfmpHVQ4TucmtUHRSirBisK5PBZepaMAWkgXyh48oG4",
  "key23": "2Qw6MVGRtck44UdopPgP7iUtq2mFMuUQMcVTefRBhtc3NA2HndBxueBXHg2eszD2idaXtS1YJ2PkMofVjqFq4fPS",
  "key24": "5oxrLdsdFjm7ev35kZQmLJBb95aeeVAZnQfGuGe5VZeGJYCraj6CcskmJA7CEqAtAyNPoDma6AXwLXWDDTwhExCi",
  "key25": "4whmuZWXVNp3eYKpjPZnLdTeVcTXwC4EmSYvTKPbgy5uEKUA6y3tBVxo5Q56GvySHJnihFi6TVw9EV9cvZ3J2v5C",
  "key26": "48TSRMvUt8HJXmWuyTY8tmeX15SpN1ps8vpvLjkkjMbJ2MydfVJEVmSYZCWfGQG2CkYd7egbZm6iZ8jGkoG46Wrn",
  "key27": "3XFW86jLYWTVo3rZ81eCB2tQMoR7v8azKtp1dKe79BEPX5qm8p73JDRoCPp7Dzs1KEt5DbWppX5kKUdaeSLqttRc",
  "key28": "38X1XUmSMB6PPG87WrqPPHgC1bsjmFPnMyUSEEEhdfTh8Rd96CAvEmR6ti3FuiyedHJ2ATv2LVpSYFWZvo9WToak",
  "key29": "ryxK96XUfpQR5zKpcyZaY1p1mdoKihL2s3GsFp3U91s1bB5bzDz7ZNSzmbD4HQkzpD1hUt55dXWZjeuPNZN6omy",
  "key30": "4hgJekUPxNJFn1CFBc3iv8UMShG6RNBjAJGc8BW2YPErTukwYEG87urXhaQDQfvHrRuF4zQULDEfGAXGVaibqfKs",
  "key31": "2wfSWvLvngXApobY5dwZ6u76pfNK9TqehEAcK49RUbdRQDADDWFk9MN2JEGme2KJQfsvZDZGynF1p98teyaX1HDH",
  "key32": "5dee8o6mXcGQtGWAJhGVcNuZMt4bsAHwBJ7DXizFPyLouHhaTewu5rtdCmSqoxcTkzmcdN4HmNsHjePp8UwxSt6A",
  "key33": "4UfrA4EfwSehoa34B3CVCk5rxQ92qnidMqrHapThBgwers4QwnSKaNX3itbN1ggL8hFh5YQdxM1WFzJJZyzf6gsa",
  "key34": "4EyuBA4u1HKMc1rAQugAZqRMS7dDetizeYQZTceAVGCgk3p8yH7sEd1Hd2dwMSB9y3uSfWRKaZ4e9JQDXkGHGdB9"
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
