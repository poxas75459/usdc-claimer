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
    "jauV65BLgFZY3siA4z4g5ZE6ddcwSuNF1rQFRrPsH4fkvmHErX1TezpxGDdnnRMU2TAnmCEhByjeQ4dgeGJdRxo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dDw7Axsbo3tMUMqdb9rYXW1bmLnbwnJqSDDNF1Ph26XWbrusHSEph6YMdqzaFZt36YxNsL6P5DkSGCDtDUqyryG",
  "key1": "yRAejD4qQaoYzfwwZDFkDoR35PuckSV11eaj5DxfAi7XSjFzii2PdV3wBXtgFji4LisB1XNt26FqtZkLhiVbvFo",
  "key2": "3PYp4S5VRZByuycjDdgxQGAyNCvFzYr1E1nfNgUij8owH8gLgmsQsvU8gHMbvyosQZYksdcKA9h4sKg3cyDVA2NX",
  "key3": "5khfnrzE7jLjmgMNWh7gNBSKgvGuR5HagQqU7V7wYuxixrxHwA7YQ2RyNkWGy6TeHQH1BrbjwUSChfUf6dwec1Wf",
  "key4": "gype8SJ54T9TyukvB2eYjY7bXn2m1UFV3dh6JC7y5vcU5R3NxxMqkpdM972sK1iH9XJxj9orf52Rutt6xQ98S2Y",
  "key5": "Ttz6YwDGrfky9QqtxMdFtXjRRyiJtuhCWWaq8MrWGqThg6Q83bwXatNWwfWFcbBWe63FCwiZfDfBBgRDuVsn5W6",
  "key6": "4KHUxq2cXJYytAxAYpaiv29dCG99NygU1PQxMKijsaY2qCWU33SSH6wsXxENRPacoJhj8WH7Kkeczco3oKPD5E4A",
  "key7": "oDct8nyiccwXXs7FiYQg8jrAcYJvbLqTnvpXpB1HmHc8KzxKAdu2ZU3DzknWXLBnd9wUHz3Cf2ZJG8BA8mEcdd6",
  "key8": "5azUiD35LJ8k4wKDx5trbP3TsQix2VMMurqFvitBUKA5V92BeHXfT746sQVsfeBmac3G6rokjyXVVLWviM9zgdTk",
  "key9": "2scGJW9p3RPu1zz35GpEAKWdmxp6iMVQ6mWRmeb63UN4sZp9WZnUMmJ4XZ4ccEVqRhMJSHPXjprjiDWHTXdyM3q6",
  "key10": "f3nnRgM8Bg1j8bmpv6RSoxecBmmM9b57T1hwK2n4srzU3t4v7wYaK5hatpg2W6RgrttJWcmhws7PRoDiUsNvXjB",
  "key11": "2BM6wayByjfzUuooNqiWKSDYwdFjPHMHgvZgeea2sKhisKHFq2PKPExTr7ZHtSe6QdrD8fRSf5GK4BHDHb8KAkoZ",
  "key12": "3GimyetmegAs3rhvE3JoVSCsgVDzFxY8LtnmVhJXcM7YeGq44LE48AWJC66j1jgLwfXt2gheUsag17MBHaFBhLNn",
  "key13": "4iWpHUTPHBvbfZxUMzELKbtkGTPSnXmbP1WRvhvK4ESxY9x5veSaYh8N2ZS9jyK2rk7nJtvxJkd1HjMGDSasZKJF",
  "key14": "3QGbQLmR1awmTzYyypxAcgn2LMfn16Asw3iLbp6eWSpPw4USLAdTUmRVtZ1jHRKunqC55KNnvgnBWNs8nd1QzZ3N",
  "key15": "8hJqhsKXrBM49Mdrd2CTdqnNAqwfhhLfKjYhv6DS1CrNsJbW4Mpyc9rpFgAsdxe8kfdXHWNcFfECKwJSwQx5uoK",
  "key16": "8bY9rHEy8eMujUcu3ZQoRNiPrXLpWP5dMHUDVgHHKP5Spvf9umXwfP6EY2ryuLHvqRaHd3FWBsGfNPXfEEHsqYU",
  "key17": "5ByQfGgLSsTVj8pmamBSrNefLmc1SUAPKsaQ5eiRruvzdYdQYizSfTmYuPWCHtBmtUiVEpkm4mjEGcp62DNnRbtH",
  "key18": "4hjyEWBZXmEmU3GJq23VToo1x26Ac2ZNbEr32eEM5wexoMWfmQnLHtYCFgC4UH2wUQFtxihU8eEeiyf13r6tXPsR",
  "key19": "2fgi6HwKE7PM6tjfJgsV7qVrqvXrbD7VagvQ6hUJMuSpsPhBaEy4dgsYaHBCDDoTUYVNyrGfni9J3DgB6TCLNwMD",
  "key20": "ozA8DSy1xHFth5fwAsTcCoLyEc6211vENroBvYbLaoHthXcdNZ61QWyQaMg3kNrBbEDpTvjBVcQSMdKebwLCeSv",
  "key21": "2tuwovanFpbcUt54kKxUCM2oih2HqfVxarLKUrqZs1vSRPwQKEXrn2mVHiGZfq42e5xFwrnSerHwm3q1TuprrFQa",
  "key22": "4TwTzKpB94NZEjRxwK8vaW6QxwcGPgg43MqYN1dEcpn69MzTT9sRU6hmgPub2M2HdPRKciC7W5pofFFFdZbpGbit",
  "key23": "GoEYb6KS5akxcq29UtdmSYAAucD2cFYTgcnMtfBfKWMQsS8wuZgfaupfbrkZFFJCWeaqzJT4GBQrZjtAyjCFnTN",
  "key24": "pNsEVS2htnJJHxrtimBZhz5vdRxNFWXwrcLzpnYt4mZQrqwaPSjZmwAdZNx6pyfJnV7arSYeaHXw78nKY4qDAZN",
  "key25": "5j824xUzW3FXzxJTzAxDY5EfQWzoWqKkrEQeh1itF6EdoCHR1nts21ihpZBjdafvwc7q4xe9htZUEd1iFnWUhgQp",
  "key26": "2tTnimEiGYVd8uc3jWk5rBtYGavAJ9Vvk76v7GibPfKEqmZkhAKNe5KUbJQLySaxUJDGe1do2w635nCV6yzjLGjc",
  "key27": "4BLEbi9tCFaAL6Tx49t4EomcKm6xHMMKnvxWX32fd6AVbP2cawrpZv3Jy1Lj9g7ytbzQvoiQeksHREbZjppfHgvN",
  "key28": "q96MQckh9vzbZveqCXGrpbjGBgXWSf2Ay3vvbaHNK9axdJrt7y6oHEiBCRykYEfxkNnp3rr7GvCQTprnqy3MJgW",
  "key29": "4EHTS1jqEbq5gqJAQAvZsFhJeXrBuPNFLnPsy9BKA5tRqSU6PGaGpoBpBoLKstXG7mnEuNU8SNBnVy4hwqngXWaA",
  "key30": "2UP7JjKApp6d9js1SScY5LYMBVksJeTt6Ff8eGkhHMWTgh1Ha4wJax7xRqYwsqbaWVHBZ4G5MdEve8L548WyShzp",
  "key31": "5hbLZ69n6JYgd6JJqTAfkNM83ZJMnga5BhW3YaD9WsHvxsLEueRsFRDUNfR3uw2713CvBHtc8WZC9NodCaxgZ4oN",
  "key32": "3DSbNyPDsR85wounzp14BCdkghSxTLU8SRHYrMjhDtQXhYwMecto9q6s8e3CpqqNxTmWWw7SDQpjDvTKsM5NT3jb",
  "key33": "5R7p4NWuUDZEG8s9R14gxRW7v5MTvABrCthbFAgJJjZfug5TmjN8dmTVv971h6uLvJoPu5MxwHK2yYzeTEjToS4W",
  "key34": "5wXPDJVx2fpRy7hBcdjbtbB2r1pMqvJLmwXfqQYvhCMXKL4jNWJue7UjASJrFLR7KXwABXV2XEAQzpVU2cFzYw3p",
  "key35": "2RYD4PYsoX2FBGTcLgzT2mLp2QG3KeGgQ3eADiRZrcLYVpGianv96tv871ka6ZF9tg2USH4hGF2xyVkcZxT2q5LB",
  "key36": "48k5hMJ5XJB6GdiUr6nE2Gim6PQhXHtiTE1E8xAK25gKqRg7rHsRYoTvHdZJtXjdKxYTgBHHdoCk3tS9i7KUu5X4",
  "key37": "5j66z4qF2a6mSWfS7u98hya3gGSejNz9H3FR5y5cY2TRfyP8CTSVXJgPipgGd87yXL7EB8KieNMurunUUFreBVBf"
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
