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
    "5nT7uVprtHvNtCYsSrHwGThJdTam8yUhEjfbxqdCcZ9Qgeb44owhdmTGeSXEQLsGfwuvpr6pXoQuAyPmphHWfNMT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YpeuqN3S3Q6TFcfxjpXZbYrPNpPtGnw6MRs3hUyzoNKDHdh4Pncrum86pegomZyTnQsUbRAQCeB41FqjrCjArCx",
  "key1": "43gPvT99Xmsb73cWvcKQM4kXE7EjwVjrVmQMQFnDeCqxQqBqJmjNiRmAsx1awu323TDZ8HZLQXFYygz8HoM87Q4Y",
  "key2": "4nVasb2716EyDtnrQJe1fbNjQtnhwfmDxUEZRGm4BuBovXBWQUHSMtNqQf8YjXGz6hxg1nEbkaA4Lqcsw9Hm5LAa",
  "key3": "57jhskKdfN2xtqohteT4n24JCL1g9xgDoUc6LCu3XjNuNrmGwfKnR1vpkCM5zmzzj45wDMZbFhuyw2S4GEKQv9CP",
  "key4": "5eCGv535XSvYLFu4vZBTSwi3TaAqJq8Vet4orEUKUMprS1qiQbYBn1utFW2U4QCcAUGVQbe42ENx3SsBUoMJYcNg",
  "key5": "osmL4i7z62fK3J5bHztTV8SqAkyyUvmnKgdK4rjCeojZ6AszH2afduFDE6PAQ8J9GwEb4fzvDnsbtwYL9KheLks",
  "key6": "npQ5JFrZU2LJnoT8iSmcrZBsBUKThFsJDYSXgfp4cB88rk8g5wTMrtYd5z5vU7mJuj41YifAGxPR3yaUsw9Eoyh",
  "key7": "2iS3AdYs6yysb4WrdCjek8rFSG3dr1bdzFA3ty9c5kcvaCZ4tcrUjQ37t5ykxZtRG9jU45gK23RnYdyLvXhvXven",
  "key8": "4hd1ZJaWCti6oX3nDTa4rBKU4MPGo3BS5RXDzrZeB5dBQGZUuMt9a9pvNXRkMnS2uVjhdaipmxxfetR9v1ixYzRF",
  "key9": "pLSoDLwu8uSVmGRijs8jyvBHPgAvJQE1TMau3SyYUaigiqtR99o1aZMsdpcdVuzQn1xp5HF5abEVHYzPrBWGfBY",
  "key10": "rTY7eBJBP4U41afF5cJFPVGg8wfGUSiXRec2H85wFzRLTVf899wFMsNw9dBc4ZiA5bKhq5DaVYcii6SzjKPRYiw",
  "key11": "3HrRuVdWP1QMsGggnP1CSDY5RhmgLXjjuM3dzSX5DvxgGr7PEmTHDv6oJ4BWa6r6PQ7sYNpjguc239rEpJby7e1j",
  "key12": "4SrV1qjk2k4QuckhZa2xn81vcic8ndB66Jai4Ttw1zkDEYqEjwEvCnebGHgdpFh2zBjyYLThKECmrEWgc44Hvsd4",
  "key13": "3PoPATXRB55nXn1itwndyLHAiWUWXswbDqViYorPtkcSPUoXRve7hBPfq2ABaJcP9Gz3JbNjMd8iF4jBMRNXFrgU",
  "key14": "2u85EFqYUEXAnxELzu1QHJQowUF9Pg2EBccmbfbkfpwT4ywjTWJP7N8Mw21ubLJNU3sP5coZsv8G72xutShuqy4y",
  "key15": "39LeJY1WPaEi1KuvutaGGbuHabqTTcX88VLW7PqvocMAoQEyHoHdpn1KLCtASCT8xi5ST6snpCYVjFAERQuZPmZj",
  "key16": "3KG3QLo7JzmjdynaT9igPxK1LyBzkdttfQiQKkW66gTBYTuVKkPagYAocSF5AoN6LPrYubSkFJ9rZ3PgZiEH1QRA",
  "key17": "2tbT1gtPmUimXxj63qbcTSqo8Da7Jw34MYqwPFxmbpwRtoYerEVTpd2LhPTrHv5qGZLubA12kQxMxHqSjrhUHphs",
  "key18": "5X3WszYv5i2W8S8sEVusu3wxLpWzY3HWAozhMn3V1dffUBmzjwz6VVaNwTVB6ba1Bg23Pd2LYZWQXQuQvpzh7ffS",
  "key19": "3reAgw9BMErincAkw6WNg6HEfvaiDjt8huBgn4nMKCDMPN6nBECfKNCaKR3vFeMC477wYPoJ4oujiRRzfayqwNyw",
  "key20": "5dwMmKEqw8LiUqzJUsPnuGW7mdWK6tqYXQeX7eRogUGB9RnuP7i5L4SJ9P4Dk85DwRvwZ64DcwhXeBHyNNNncKvx",
  "key21": "3dc2fQojBYx8gSVyCMGqbT1JiLbJ6oinsuPALVWLTcwmsjZ7CFBLxK5VQyT2PsUcxFHNA5xwq1M489N7nC3pFFEZ",
  "key22": "MfuSeZTK6snUggzWYg5LzBc3epS5bsFmUPNevYVBktM8xa21yn2v6gv2gCuSQyK15N37ZXHUt6yCdJGjzLJqrkc",
  "key23": "3zySAQVJQUUoSCbhJnEYzNi3Y5CXTS6r9AVvaHTd77PKKvrvFJnZKnLFtzJ37NjYRNK3n4UhHsSEku7h9oR67UNL",
  "key24": "2CsLQiLn5bUFaUzJ8KBMD3xvmdsNLFBRUBo81UNXKmCJUQxhE8DSNJYXXFdFrZnKpSUTUiYDySEqTKnf2X3sCYf2",
  "key25": "5M4mM9Ctb1TSmqJShYtLmetiJjvKvcKiNVx9pFxJf1ggowp3tT3dpF31p3kweuG53ZSUHE4CxMyW52dpzZDNAf6w",
  "key26": "5Yvmw96bE9WWcvuUz28Zqd1Ew5H1Tb3CCrSb2FrArc6Gpj3hfdc3V78nLtMbeH7c8D5K7WhpCmqFDEbzw1EvYkGY",
  "key27": "5tZcdbsYVZYAiAeeQsm4h46pZziZu9fC9CbSzd3U7LdzgjUpt8Z26vrNiyjNAyyJLWXM8zjmKgiwffjzVCJkc3Qp",
  "key28": "3p9RSDKo3KvKmi4y4Dx75PHqb7JuJmHFLM7to4FvPVa28qChYpx1Ac65ATf1ZXd9qnpcgeUkLeaRNCAFyWkmJo8k",
  "key29": "5EoLUc3USkfEowxXsZx6sCtg8r5hi6D6R8tkdMrZqWAoQLCHgn1yTuUercDiDhJkXvCZg8ioGJYmC2NRSvitDn5H",
  "key30": "2VVHrbHdPeJ95gwATy1jFvyDd9bqhrGqEwjokPbyxLJFo1zWQKkmWnHvS3AtmZkJQuzfYkq9mtHeK1GvVHQxa4Nw",
  "key31": "41j2kKzvRtwh3pW7D5Vtadqevhi9ZT21Vyq2T8NwYH7ca6qqv5KQDTtSg9SX26zCAJmiKkHtS5EQ8R4e2AETWEWG",
  "key32": "5yBj9cmLZ3TU9iAz64ZQ92EXLkyLxSFDWg5uPrBfrGQ5kMbPXBySosZLHxwapd3TQbCymsLDEf6e1XhTon8946oF",
  "key33": "38CnBheYkQzhHBEk1XdQ6wMNnEizUeihos8QyYuHExTFBBdCSHXc6GjKD2sL8unVtN2kPbuGQz82mot4Keub5jBb",
  "key34": "4cTVTMu3QxxZhFjdjqYrM8sUs7dZjS7KA5ZaPZuz5wbEeFz5TFSgGcsuLg4wX11mygx46gaxpVEPn5rxtrY8iVK1",
  "key35": "3C5wvhbWsYmS15Jm4JCbRyJG2JAhGikGQcGpo25M9ap4AWdzJ2QmrK73Nw5Xx6m3MrZVRPX3E533VmWU9TQJr3Fp"
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
