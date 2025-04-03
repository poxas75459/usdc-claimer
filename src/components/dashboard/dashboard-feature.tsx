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
    "2qtMWZSg83eauBuuPkUdyaibZ12TdfP2XHivGUVRkNsqvcowpCRbJnHjpBdCH3mMofr52xSETfMmSgpHvvPW8LqN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ngs5yjq78FTs2iWFp9cBFwxHmJZTpsedw4kWc2RR8EewC6LzKCHoSLRXPZ3nPorQmp1NERZHKZp8w2CY1UTRkra",
  "key1": "3bwd9NcEPaG376acVK61ciiekjQfB1KH7fK9kfTD68Ut7doTs5TcTTSEpec1W55tjdqSXXGroD5n2NvRU2xWVpz8",
  "key2": "64GUamxe4owXD79aJ6xwC5LiXMURHkAAeLzW5C6QSygj1yBwKqzTHgJTjpaqvwXjhYRtwZ9XTXJKR5UnngL641yX",
  "key3": "Nz7SqUmsXcPXzj7aeghYbPY6rgQ3BbiXGNb3Qg2GjigLCV1CnYVPd5LiN42XqZM3nWffBU1n9giyt3X9rAHHnFv",
  "key4": "5i5oWotPZy8hdWTqeYtb28CpSPeoJfUSMj9MJyeNMHA5gkpN58TYkUzeSP3rP9Qh1DG2KJ3STtWJS1591uARcbPe",
  "key5": "2xKkkXKrMj4EeL8mMxUJbxQ9XQcdqjJLpRGtZtRrXdc15nP4QZF6oNgQbgtRrVQXbBRsQmfBVZSuwARUnYK5jKpj",
  "key6": "4JLSSCbHDmuT5S8ucGUqyXipjud6NNGdoJXsEpt7RBMc3ycRnjtNXR7cYtReVcpCtwoLeL3Nqyhbi352ZfAMauQD",
  "key7": "n8VSPCzYySuLY7XqtAqsrT4HB7ncgaGtG6Xw9GzAZZKNpgTAnfGCDrqNie1nGKeaXjVVEDEA3MBF2m69AsXNXFJ",
  "key8": "5h9JQc9cKysPyZFLs28jvQdvjugYpqzKbvBNiyGxRGw1RQuUr6fEWKNZC9qEvgtBNecB6c85dhasjNvXVLAv9kDX",
  "key9": "3VdTx5cobXu2iKfUT2FvX1NyWe5sLk5JQW8cnawn4pMjVni4ujG56qNU9G6qPPZZmYcdNgZ8YyCzBaGc2acELdin",
  "key10": "2Jp4hN19Y7XULKaYMJau1o5G9r6NXrv7JQ5XnepFGK5wzCutmnn84iKLfgLagHVKxQzWaxNecauZyN6f2Qipbed2",
  "key11": "58Xd4TYJtymyXpEJyBXhhXyntwUU5cFk2rQ1SFQBskg21Rvd5VCh6fMNc8NXcNn9XVgdWncxsF8YWtyFQhiZA277",
  "key12": "5rccPy9Chok1jB3m4UR1WtBEcBSUHyVYBTje7JVzLZTAz9Z5YC7r6FDoYzjdsFGwNBfhCeioFECekTMfUADvqU83",
  "key13": "4po1pXM4pkQTnkaAS9HuzG7GvPL1b4emoLwMDvVjqDCDsMjTM8VnTSfoGxjcupMvhnrh8xrQ94ywjHDX9UTVEbow",
  "key14": "4kYbkYJMossSHEBWq5BSzHNxsLsPuKLbQCCTACdjRfp8rBAMtugFex5bAttYegwcpb1aF3Gv4b3jYz8w6h5UCLN",
  "key15": "5CCQVF6AyhwYRd4CWErLhfUq6MDnBrpFbYYx9v6XP7E8nBmynAt8srPL9W1Vq4LdMubPBibwTB5Bpi1xjRgzpTRq",
  "key16": "3KUmDYQYQj127UVPGi469wQm4pEWoewr925fKxBJytXvsdyF3E2SFjAstXhUQ5yi7Ka89BoSfYnYqMrkNWcDbKRG",
  "key17": "4gsVRWTxbdLk2Q51TxQCLJqvK8bgWo26TXceT7kuqTuTucmfz46LcjRNuVgM4nop2QPdGHDhizLJd7QJHaHHPoaW",
  "key18": "3NknX5MtigyZAX95UXy9pZRAoWSCFGYWakXPwNxxVh35DzRBPtSLCLDdftTWCNw6SkDhxvTz76trERQczRtnu4Wx",
  "key19": "vqABhsaPEBWHcCQBVQkK68dbVEs4uFBzN5YKk4MvVRo9ebsfarDUxSB71M8btrddNvv7ewRDEwrfZBMg5s58x9W",
  "key20": "4YuA5YMBQuAM7DPFzMQs22pKm9ZzvJMuNozdBJNjyW7cTMbVD46zghe5z1kUbwRjzJfe6aWW1vf2eZRNHCCjHFWh",
  "key21": "5LxiJvBJfeqNmjHSTikHXTN5pAJkzhNwv7BFsgFvZAqcFAzPFyxx1c2mNESoTL1TLsoipT8qM9x5GFmSLfQV7WGc",
  "key22": "kzN3wrXDULK2KTSboZMbWkwN4wzD26ZEgDiuE8potVSAgVah2khyvAYKhKi3Qz1HwQjWZg12YkRHp3g9QKneXxa",
  "key23": "2N7dNtgvYtca4JRaEZmFxgxw2MvMqscfXPWoqiiUL7RjfiMR5LqKBBEce9ZSqu2raY7NL6E9TNb6DyGE6DNn6JCp",
  "key24": "2LiMD9obLTe1Qc5Siwcyx83SKCfcsaNngUxzZjwVykgNqxtc4sytNYWm7wEYyybxavefjwMi7E7XzLs3QmWMoMmn",
  "key25": "5LgmLfiAp4Sx8iMCPzjb1XWtpf51U1VWxF9QEF9EThfQBR9hqFA8XrpL95MXoVkx9THVrDiThhhCjNSEXupXWfzf",
  "key26": "3R4GSXosiUUUmxZzjXLQCFJ1FxA3exsXK28Bzqyy4aprH6xG8eWX6wkPLpzAatD9JHcDdFsZQsDoGQjFZSRrdAro",
  "key27": "jwR2fRXy367vic9TdE8p4McLoPy9pm9UeHNuZfzR7fN5xMXidAxgLbYpKxiVJumJgoerGrQF2jGhrqrzZMpFESL",
  "key28": "WE4hQzoAfopXdS3YEjDyJTnh1hwuaMojGSq9NJzGu4Buq8ts4E4gbN6oz7L1hWWNCgDqFQzxuB9tNNimu3jF5SE",
  "key29": "4yPfL6N9M5EoySGLQBFFpF3wNWDmAmUVF9PMFgkGX81ej2aQnf5j7x7XTpp7ZRh1w4tnw6ET9npVMbqhoeXkPnLk",
  "key30": "5YJpBFHWVsUmonyDeXrfBZNdaWFGCn3QYRxnRzXXjuDityXWykHJkYkVBTgQixsw1sYNimb6AcSkHKTxGiEokuXE",
  "key31": "cC5wGCWHNVnM3wFvKCnTzjs7MwkSE25hf1GA6o1sUxZo8cp5HBPHJCLupiEAroPFtHxYNbgcgARVb2dTP6J8EEX",
  "key32": "5LgmesiJ6EUUd6sTmcJUiM1jqs2B89r8RLnnL2nE8dBrLNME8xgMZ2ubU4jGMQYf4bmwajxJYTwcZriKVrg9AUvo",
  "key33": "q3qKaH5znhtzVPgst47JGPG2jJZvgAHrMAYTHfGs1HA4nJ3U1hf5xrwLfEchmsvataonzNsnE4iE89gDNhDaXJK",
  "key34": "3vPyMiDeLcJqidWUX38C242BHbcLXto15eFFR3hw4sXd4cZBvjSM4xru5p1UNmMU6riu2nrYk9cB6svYKE97Psbo",
  "key35": "2LuXfY52vC7vmAGmWGpFQrsQ73X8h2Bq47Av3dYCkYUgPQuZCqjcky4XeaHx1iLoBL1YnkfJiiWky5DDyXJqchC1",
  "key36": "4Hpb2qPMra13SZj4A7HtE5QTAVR6e4sxZSzmSY82r8sJcdwS54CH2EXC25USpsKbhoC3QoQtAw2P2QG3BJup2cY4",
  "key37": "3AdXreqNaTC5zEQv9KLN1pB8koHDFdvaGwBCU5TuExk7jWL6FTSBVQcD5ExLiSTo2moeYiUY8pnCmZ2qwgKu9E8i",
  "key38": "5w2PJxKuUfqije7Ub8vY54WzBP4rYYa6kaH3HA96HyPXezMhinaANJAFhLrpeiZqK3GeH4edWNp9ZGgDKTEEDKJP",
  "key39": "31vLNKtso5U3cU5VnwAccfJdK6TQdSjeR6i7ZH2rJU1oHrS25CqxjBuCbLDFKFZX3H3oqKgVVkFWEPTHLS6y5qsf",
  "key40": "3Rr9UEDeuWpTKbiKaJBBuRXsjDgXbcT8g9WvpW8zkCUEJLHx9ijcKGqrawxDYcVxAYPvt8ooK9jJX98dJgmRfnCv"
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
