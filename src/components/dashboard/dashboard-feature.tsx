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
    "59hZXcsJSuH391DEQYZAkw6NUbXJ7byUwx1raBc7hhGffNYU2PfG7iZ9WEJy827Jt7xwaTyy5K41pVVR5BGNggow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C3UXho6CFTHWHPX3WHSxGeFPESh3p1mwodgG8ZLBtWQWXRSmXcJJMJFmraYmP8nY4LQ6PGMh1AvXtLYH7Srm2uK",
  "key1": "2Qzf2VTByf9hQ5SSBdXsLsjLwNJe2q9THdMRcqJRdw2ezzKTRvL7hmEDKYsqRqmcsXndSLiKhmPA1iAHUvPD8fyZ",
  "key2": "LBgQMNGskGsfm9RRQtvRHk5CAiGjtUZrwuNmyxNPXJSNaaEMEBkBsDWoDo2krQNRCLsAFBgmBfmH1k9GW74Rqaw",
  "key3": "5cXeaYZEh2B4p7eSvQRJV9EFRjyPuUDYWDbwmWo1BVo3wAPdfu7f3BYkdRDiiVvdmzvGtuVCEdBV3oT853gkZysV",
  "key4": "66wpEAE6s89ZbwzXzkrdxN2Kn46htSwsTZ5TLg46L5qLKfHnJrtVMZoaMJfJkAnTQUwbmShSuQkvQmAM31RR2aVq",
  "key5": "66Ci7rR7C3v7TdQ6z4Wtkn2buLcGm3uCteZHKuF76gKMdX8mLr6EtoMjHzA36e8SEqpPDvzq31YwvE6oezwwKHD8",
  "key6": "3PkUsAMJ2NKQrdpybpHD6unDUmxzHYynuYyCtmfUZx3ieDKvv3vGSfxGBtmAwJ8ixLYihqxaRuwRRcGn99gWnJWX",
  "key7": "2Qo7RLU2igdmBiLcb1rePfH612msLU5fZVKDim5HofFff7keMgxjUZRmxJs66NppGZxtszLvjFWhVt4njEDEZ8ww",
  "key8": "reV1HZwpaA7mpV6VzhwJffvLsxZs6Qp9vZ69caY8HyreHvSbsD5ES5hQSwjXn5PTs66Z2n7KiSciW1fD2ocYw5n",
  "key9": "289KHjD4bEbH13JZfZXSX4czUuSL3NuGxDVq2WUKsTgPJKgVMLGYV1pmbudGq73dzLjb5aLmX6kPecMgfRRTAm4L",
  "key10": "5VvJPGatq1RNYiBtxoDWWC4Rc6GZ8CJGKoeoZe1heYvbuasndZbxo16hbU8JDUzoWSGeU3w8H6igXPBPPL1CmAeG",
  "key11": "u87bYJJu5ptAKfN3GPC2WJnncFxXpQ9Q6MmemrofKwRWbss6q9Zkf3mS9FYuthJQRG9UEAkph9AmVcgM5TwEuTe",
  "key12": "4D9xpag8UdJUub69k5NoDRxDuPPoTHCJcLLVZzd9tG91iyq6ETWPBbSxmFrGyYAqNGpi2gjQFQSxFrBTPxtmJhLu",
  "key13": "xaCCC9MtT7uDWg5nMf2NCrF3e7Js4pc8ZD2Ahb6XKqPRpK3MyTFxnpYYNEYAXmjE8TvfkA45MT3jq3SqG6oCtTb",
  "key14": "4sbXNjMTakrhJ1jwUEdYH42SdwsTwsd21XnQBExzJ6L1koaaubCqWUk8nbtbXYEXrqg4YJcGf7RsAnDXJKxpUUTX",
  "key15": "5m339Vkhp8cFQVFe8CFardEZ8CZpwhm9VG9kY6vdE1f6pQgWvsgVuyomYJHVeQm5Gs1UcG3AqGqJqD92mL87Kxs7",
  "key16": "3dXY4xgeLW3owsdMXQ7DCrRWdQpYnYtsoH4i5w5vPQMEKoffzqMTRoqwoFe99irztAz5PogUYwiENzpsLtury7BQ",
  "key17": "39ib5z7qeTeF2sRtiN6fEdroRNphfpzK4HmF9d8ptcuCxKQ94MfUmSDpvQZakJmU3FRJ3qkjCRWYGE4atKC3iQ4c",
  "key18": "3iVWWM6Ao29jaG6cypX633uLtmyq3xaKFMwCc5kxYbjeEux2xNZoNQ5NzXyXqWXk8kseYZyXaGDQy4eukZcUa97p",
  "key19": "2Burc33NHDg3aZsHqajZXjiyDfokD5uDfqJr3hm1fJC3QR8wS3gPT2Ya4sAwxwem9hsTq3wchFvtMGDN31RMoHym",
  "key20": "5EtRo1F8W57dh5hoyMreYBYAR1uX1s7rxHC4GU2kqbEqbdfsHbvFxZ6HsTTjiFe5GGPVKb3MvbZYpriyBEbjFrpC",
  "key21": "2SqcFPZnsMQ2eUcT2v4hkGB9yrHcTXyZJJjLWhCeLtCiotHrG4kRcE4DKnjWeoJ5qwwf9qySuifXMVzBBaYpc3Qh",
  "key22": "5JcAPVRdvbSajok2qj3HNue1sRidFH73BrjvikzPQhDCJewFj9xXPBczpttLDbPRDS4d5k63cZVPer6Yu9KVgfia",
  "key23": "4gQctQr57QrxQQvLu8AWpkf43qJ2Pj6M7U5CTvgv3NtP7DuX7NgoL5jnLMFC3nxEYrt7huUZ8qyiiRYcGvQhUYA3",
  "key24": "rbEtCu5EL25URtNduSD6SKV9a8jLLGvUHPrd2HjW7ZgouXWU386smfpjXXZ9QyqJPQDAP9hshw7VfzAPeZCsH4k",
  "key25": "39rLMcV43SQQQ6kGyQvQgWGxfXx93d9aN6S1VuogY4aNGGmjnS9Toy6i7feUj19XuVatzBFnUXNqZFYpzEiaq85H",
  "key26": "2CokqU2PKMWbe45APu7ekpAThUdrftnwTpS79PuPPPebuTWCvHBAPaDPo8oTSSVRFvYhrRd7eVCwE3ZsNDsFs7Lk",
  "key27": "37V2VTFkWt6mqPNG87EhmXzBtDDLRdcoD9nkr5s1G3GW5U18bvq1cxYzUQiY2Ukoh7a963aLK4vwPTkRma8VqbmY",
  "key28": "4b4QHsc9fyDEA5cUQiXwDWVPKF3AdKrnQ4pjaD3mqzuHSTNLZdq3ERdVs1t7rwpHKdbGvPo9GPp8CnwiDMN1iKuk",
  "key29": "4AFGJmKPn9riPa5QsZE6HqLP2jPsovHKnYBqaqmGbJfZKKsaLrv6g5U7Bg8Tt33n5WqVCddS9jeVdKsVBQTHBDWt",
  "key30": "48U7HPV3JgHwfiq6Zv1aXM4e44Y1mvWcTuek5NMD84utxNGbR7p767ZKf3H98knRGiWUFXEfGFSa9NY3EogNDjpy",
  "key31": "5gd9rMRwMvBXCdACbd2FYecGTFn2EzeKGPsKH31RPTbDuT9By6R9LVZm3djFJMiNTvyyF8Ev7YvkWPDa9Tq6iLYs",
  "key32": "4gtEvEm9HbGc8Auv8tmQXY6tpQQLqWhKaFaimJbPvj3M1AHwrKJ5QXC5omGYuvg3RbEFfawGoNos3JcKckCU6Krz",
  "key33": "i8fYTMNJwRnXZrxNgwJBCE1rTiAuPgmfRBqLtwm9xLSB7xsa5mAzxtLhm5YUod4X5Tfm9SksYvLvEci9kzTQVFz",
  "key34": "4YmR9JbYtDqJmQCnd2fbG4Nabj357GkWViyCu2n5v1waH9Xz9N7cDYcMgKbQuKVcoiiebhJjJVYUowBnY1CmyYNj",
  "key35": "4DqKNutb8pQmpAgyM6j7RCXJy3yAyys9FXLzPPWWBHe7kxKamf5LtQC2JHj6BH77DyNNQCvsWqvgnPkHdkTuhvPQ",
  "key36": "4UZLmcpnnaavGYpWtAypoBBun53FsbNicFCEqSE9FjukM27pwrQjEKk4gC6KiRAqfcf6txg6f5v5UEyrWrtX2Xju",
  "key37": "4kmSdyr3JeGEmKsx8NAQfcMtMShbdtdD78rZYzvfWAoidczmZvegwB1oLJUi8k2uZ8zCrAn7x1L8PWkpmo45krH",
  "key38": "4Wsx4FUdn94NhQEc9hX4zpmsvneMLjwpPRCf8T5sRXkxVJKub4rSmrJXeaM4TFh6etjmqHKTQMb8Fegdc8XsMGbS",
  "key39": "WeWXD9qNY86gwxFf7WBSq4ibf2fbcTLfuNCLfYoGyHqYmofh59FP18q7yDZtsVcq37CzLg4VBwVWG7YnjTuYCcF",
  "key40": "5Z5C5PqVMWiSwg2y9bi3D1Qw7Rxr6kouS72Bo281NX2ZJpMR9VwshtBo9qppLq4CXHe1AYpZP853oR9agNp194Cz",
  "key41": "4t2ngdPhA7UKKtT2LrZsGZfRYrodUk5Ujctjg9jNxENHT36YaHsSEw2pT5qatizEpujo55BL2wmTrEkigy6RgCq8",
  "key42": "3gmRkVay1XJx5pqmXrix72s3oziZJ97FBauMJwLV9fxyq6E1QqpvW6enT4ovXvErXsigWiG2TeTDqwjUrev7WFff",
  "key43": "3wL9fscbu877cyG8cjVdk2hpREBVAKAu7YNEiUwPoKgx9pNf5a6t8dDUoUHSATfUs7xMa7GPKsCw4df7eqqm1exG"
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
