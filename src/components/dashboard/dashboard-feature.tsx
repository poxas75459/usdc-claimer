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
    "2AibANjBncwjBCnQ5DZD3xcGb5pdaSuBHToM3LHCWEVvdFsRbezPymFGoCCjey3Ur1iyNKwo7eSVNoPfb51i8HrF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63bmVdh5XLRJVTUZXkqdgTUk1NJ5FALP5VS3DvFHCqBsMFD8PNm6EuoHS5ZAkCcfoDB5h1hHmyhf8UnUDpMr2fcX",
  "key1": "2kZF6eGwKvuDto2Lbc1SpZ1cDEP6HFCwrz8TPKnvXrBZQXn9ZXy1XmgArh6xPGhST4n4MRFG2QpSQfPhAhTXas5R",
  "key2": "MMdhHa1jHYm6MvhMyjMp5ZSpVEv1G9bYSjhSwUz5kmFYQwJ1FUmSTSUJPn4ESke8SRBgFpFPy8ZysCStfi2omSe",
  "key3": "4GhL4CzsyPKB2Gq8i45CXu9YtrHie1iufesJ1hxopri72ZRW2BB8MoQQMDdMeyQMN4QuNBR22pVgvDZ4ojRYjLvA",
  "key4": "46XWKJwsYuWR643NEZ52cbQdnzTfQ31YsYjRM4ng9zghGVPDDBHyvs2GCtHVcMqspfQ6QtnBLsMeoYrnbLebqEGN",
  "key5": "3FGAynEfWmi85DMGhoJJw52wdFS2vSdspsKbKCPn8Z8eMye1hC6BaBKjkLQjHQ5wDm8A77LzdmwE3ywspFsyASkh",
  "key6": "wd5iBkLgoTeurn5ospbvnUtybb28GF9Jytsy3hY6cgdRnEg1ZABLTNHKZ5Emex3PVyiEW4pyDpFHZn8Af4BnnHR",
  "key7": "UvfoKVtUVUg3S8HWrQjBM3wZXeUreqDNHzvEgYozq1TVBC28tDDrGwT7LYkN3sSMKPPVSk8cq5C1bGafkGyHmaN",
  "key8": "29NtZq1Ta34aHoxdvNC9jC4bq9deHtiqBwxzNqE4DCBf7KHJXeYrrYSQsaFM1EpAR3a9zgysUNihjWptKHJpE8Dg",
  "key9": "2owzwoa2g4Aw9BLhCCQCxyPojAEfijyxAqUFFG321CEXFVXUZSCUWp4E4iAwZukqY1TqMk9NKnLpT6cya8nBeLC1",
  "key10": "3uEcFwFba3xKsp5ihH2DzVdfRyjuGstmYTtc9J3fR2t7zmJ3rG8ES7xmLh5rrurzH1asTuZFkph4KbXqcQGCoTme",
  "key11": "3UpJySKKDNPqL6Yr4UQZx6TwS5pPqWJkYw4aaefZUkLuuk7vdf2FmWkVGbfayhQcgEYpxhLJGMqN9Xyi4bud3SJ2",
  "key12": "4KHTyHGw659HUx3CcepJPKSCKYKMGpvuLkYwT2mX5EyhrjnNWj1kbE5TrMTS5UVaeCZAzMsVqpvKrqfydzF9QK6d",
  "key13": "4wjqYmvuhmeU8Jm45CHkeiU4jgg84aT8HBCBwaRjhmFeetkxVNx8qEX6rQDp9ADTLE13WZTrPDY7XxTyR8HdbBv2",
  "key14": "5qCVxQidrDQGxs3LZEu5QGdyNAiNUBnkjJYDiGewuqtQx3ass8GYoetHLLwgrQZAYhMfCjUcDkX4pVUXx48DJA3C",
  "key15": "5PoDqsm6PD5p9WAwJ1RBQjvstvP8eZGQPs1bcq9ephG4H316CYiUEwjfBhKNWNyctCENSJxQ57Jmus87ojqVBEFD",
  "key16": "4sksSAo9tZELgAWdiu4jJMwtgDQgv278Bns6p2DKqR4tHwDSqa7xc6wf4SpzSrGvkeJE5yrG6aQB2fVckAajYhUv",
  "key17": "hbtXYjMk8KQV1YRoRkRhjGW3XaRJ1jBC3VceEcmzmfAGN2KiGQLRwwxKre6NZPedWNfZDZCtyhaqQmvFRdJt8aA",
  "key18": "2Rjkrn8NdrACpkXb9wK9hNPYQPXFQgozaJaNGQDEDKha4GroPZWYQQsNfJPnmdaTXXHgq1LoGbzJ1SWFCdxzA6sN",
  "key19": "4uyUsH9Cxp2M1eTkpTmw7UbeGzmDS8P6kb2qgR69CLcdrBKXCbLqHKmU5oCNHEVgT8ba2Ju48kpsnzkmdwsKEPJ5",
  "key20": "42WHKK9zvGEaxUbsjF14VVqtK7smQkspMmCnstUYVy2kzhE6vvQUstBr5VwTDUxCwuxT89wSEeGZk91GQWZRRet8",
  "key21": "2ZVxuYvac7yZcVs8e4XWYgwg6cUx4caX4Y7p1m88FqTGCFeKmDAXsirxuTvdLrz41s3LgF7MFTrvjKLq4kdktqEG",
  "key22": "2DjgC9Ta7qiY4hqJqo9TWhq6ib9iTMGT36pX1EZbuUbGBcTrWPuFUgeXhwdiCU3MU9LHAHZBwxdM3XHALcm8Eice",
  "key23": "51Phd4QSJNmJy96aEShB6TvqVhaHTdJ9StRp2RH1wVbMJdwj8uGnxYtwBWdxXEfLbMpCgXpurVZDorZPwBH837cC",
  "key24": "2qgyUuU5k4Paqu4vLfJ3nRThREVgpbTNnHVgSd9bCFRhmZFwQYjosfmjPLgra6MKn3YMzt5AwLhtmbJehvsxMnGZ",
  "key25": "4zvmSafeiWhhWyVFDUdXX1oS5xZwVDujoafpTvv8ADWncjnNCewHxHwGNCQwXTu9r8w4MGENS41f7tUo1UPxB4za",
  "key26": "4FzyMKRkeT8PuuEzN2P7TemnS54omny9dzuv5e1rqicvpDHoc4kzRMwJqjBGM5PPqbk3Wv9Ewsiqhct5cxJ2u8Kr",
  "key27": "5LaVYfghZe63FvZHD1qPS2WEK9KeD7oKbXgpNDZczEVgQhGjiFjQGbBTTo18wAHsQdG9PwxV5heWwFzVNUiEnimq",
  "key28": "51UTxLagA4cuBDpBo3a9wwnp6WXhQ5NiDy57fqcskV21hHVD8kSSB7fRF8WUUjH41DMrLWoL7UmCcrFpfng3ZBjV",
  "key29": "4xc9JcL1NYuM2DWrgG2Yd3bHfrWExgptmEG41AHuDY3xR5MyYkUZxb87TQSkd48f8DLbSRbLdPVFQV8WuWif1dve",
  "key30": "3HzegwLMBJx23sVVF7D9Rp1vF18McqB1KTwYashVDKUs2wogkH3BFiYaRPfhLPL6dL2oHNu6EZ147QsmyVFskJaA",
  "key31": "2Mq1zgTT21vjQj6UJtpAEGR8DoaMsFYFKVuzimw2A5gKpbd4eYeRdodVQFJY8BG3NKafMS7qw38enT9zCcMXN97n",
  "key32": "1vzx6GmZpHWL6xTBYUVENoWC5dJzyPwnsfZ1PDS8TWvrJ8BC43bjEs5A2mdjUrqrHSZUxN8gURGWayZB2jpXf1u",
  "key33": "3Pp2tSNaj41oQjqSZmPumg6nEeY8Px6MBovdLsQma7UDfCEk78vLpq2ipZJLWe8cuXyN29SPeKWF3LPidXbyq4PV",
  "key34": "2amRqCjC4KnztoCyuFdwCa41knj5jGL7WeCsHw379ugn2qYmSpFcNEvuHFBQa85uNok2iMTMRct4sCv5vCibYPd",
  "key35": "3zs8p4DGKTTbBVe75DGaXaG4hnKEM1ZqM8KU7uH5WA94MQWkGf4pa2erpD1ZkphzowtSXkgy4V93RvQLUfr33Fxi",
  "key36": "2shWVRjFyD7gnKboedh9NjAM11T14cdjM3CKqy4nVNERAE2ZTL6CBqBeYVGav3yoqUD7jXYcyH9Ndw1X3znWLXTN",
  "key37": "7kNasQHBEuXBwLw7wbyZsLeBLqQ8fUBbwbyTRhL2LC6efaxeWiExvLhpPFqtZdUF8ZnfQUUY52qtV2G6Fyo8iRE",
  "key38": "ZnWKewygWa74YVonxr8ewzkcYyb7ULxFduS9GazXJzaFLu9ogxkJHoAkx3XJuAMgmx3VH951gX35Une7jZdTQLz",
  "key39": "3Qo81f2Snoy5wSwANaPad58XKn9Pe3TKHg5JqwB4HtonB7jAUJFomZYeVa78NW9fEfVZTXBaDokyqQZce2xYjadb"
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
