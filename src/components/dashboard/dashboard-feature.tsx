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
    "3cQMKfGrBUtgv27LUWSiU6b5FKsQjXzmDwLSAVbLXdYTw9C989CvjmpnWUfV7axYUU3zgXKFQY6FkbyU9CZtAeQB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34Xrg2VnCEkySgVkLZLRxY59WikJZGY9b9fFbpSMAwn37AnwR9vC7TwfVCWgh6zZUdKHpRsLQAd8H9eXbBDKD2CZ",
  "key1": "5JvUz76nyx5bp9skiCKW37bnnbWbs6FqZhZPwAwRiNuUbeGW9NUE4Ar31iavTSj5CNfQir7dDQhdsagT8crvnSsk",
  "key2": "4xpMajbFpzc4T242ayXBLCPg28gRzMUskH3S8PdNpG4eX8HvdXx1eGQ5qSXiP8TkT4pAuZJVrarW7T84B6WQVTAm",
  "key3": "8q5AB6BdW8G4acAvSAbS34TTxofhRkws9nYAcvV2AxEmbemh1Mj6i7pMd8Wbxo4BRtbDhjXfHy76vrfpZk8mwoB",
  "key4": "5AN6huimw2qwaG76ELSugHWKqDHWmFa8Hn1SWmvSyWs2oQWtetoTAikCdqiAaq6VaAo59EuvDvuuk4E2azzA6FHE",
  "key5": "5cdXkbQWcgSFBu1GfufLoj1NVX6gYG6DL5UQ4MQ5tQq6bwjMa7pqqtNteNK6uJCVuTdQbkVSFsye6eGXBpmofYnz",
  "key6": "49FnoZSdpfpFnPa3gEnzZ6iuZ5CTDXPv3GDHF635qqoZ6mPSGC2SYio6rgiV133VeiRxwQjnqMY8ey9Zfd6Z3mSF",
  "key7": "5ikqcUCQ9dLtS6zE5G4wNdsLfuVk7VHtxAXaDvYY4CTjypdqUTwX7kRtMtXB4v91HHLCwfrViJeZfjpWqdSTbCEL",
  "key8": "31oD8Bpp6GW7VhG2dep3nDtVzer6ALLMDP4G9FxCCPPfsyacvTeLc4vBzS8cTtdL63Vmh5fK5AoyYGRc2uvid4vj",
  "key9": "4kYYsv2K6WZxYogmWDU5qvLJ26aZ22LqHtivZ4LdfaZp21uKSsQ2t7128BhcvaRVUJ2Qgcwf86QcoSkEa6Q38LXK",
  "key10": "5RiAzr6HxVsLGqm6SqpwTQne9B5qNn2Bqos5A4y2hSui9Tw6SmJU3PPjvuE2LMwhGjQmazAVrE2QGQBoDjGvim4z",
  "key11": "3MPXFo8qrHizcYzKn2PdYkYSNtsQ6u7rpUPMon4zdbTtsknL9QLqXb2Gge6xbHppj7jNK6vkvM5K8AWc69kAtdZH",
  "key12": "kNJJQvCdmXT3jsm75PT1UEPUWM6XorfCdx8B4cjgcAJHxnEgg4Ehte1upHa2bSLbgQdkZjaB9G5xEngNMD33BU8",
  "key13": "3RuB6YNTVM8KyQynPYE25bYDyEnnoRaQXtUjH2qYjzX2b5Pu2ZwEAvyHXpjSiozgj8svzDjeMsDf78sndNDaYAjC",
  "key14": "3NkR9Y7Nxt7rPYZVsqQXt2KtB6cxdNpQWRExqyb5B8zxPQxRPYAc9EsiespcMbJufuVMVDKM73CTQLZUHjiLKeMq",
  "key15": "3zCJSiqkztQ242a8iyEx4Y7Ygvqb3SzqPZ29ywRGxxdoiqXVf8oddfenHJqioaVNyGnpi6R5QcMuRbbiW6Qw3kmM",
  "key16": "5wRUKMsbyms3g13JRaZSdjGWo37br7jrFQqrnMwYWCpUVw7gentur3LdsL7hQGHdGCKrS2WP15m5VDbUq4fUmoMh",
  "key17": "3X3kRYejtK9DAJKRrG22Rg6sMb2yK9FsDYiFbuxppAJiXWkTbB95PuJNaVkPLM1ZjgePDcuLypvrXjMYWs9JxiAL",
  "key18": "4BYah1iDQZ2T3QUBhw7jRv9wcJvKhffsp8GxYZgKwUrMSxyLmJPypbWxqKqjR8DBZeGQBQnxALDMzo4KEFgav2jY",
  "key19": "3CYGQxtdsfAH5bx4BuNCK2znHKhmT6MaWJgJK6R9Z7J8MXXiLqCrcttZVQtXUi9EtQAk98BL4yk36rDdbYZ3hB9H",
  "key20": "38JkgDyz814v4C1PysDr4dvUmVjBZoXj8vfFMnnyPA4mQHCAwapBGj468uC8oY4VBtm3yfFSLj4fi3jutBFDRn2D",
  "key21": "5Ls81hTPGbdDrQUWx2qw661rQgLk4vqC7gHLVwdMiECAUidmiJXZXZwKdyopiLvg4YZVqTDfAgQyYJtUZhh8FgDc",
  "key22": "4HyjrnKYNfB5FYTodtDoqWY5mzkJ6YmHih3AQyLKDVcaXwPX3aZ4AxvVvD4cquUsJbNACm3v3gVs17C1FRcCEKVU",
  "key23": "2Zenjqn5CN6mPdtFLVN5TCBF3kPQAmCFnzcikN3aFSRGBbMiWY7KBLbVCVpaXyXp2GYekdD4emjMwcmC1dquRGh5",
  "key24": "2he12FiunTvm6CvTiTMRaHXNAXD49bgKSYgtgw3pWMCBRwPSVaxtU2MX9QUBRXnTQBH8FFFS8Xe7V6dKyewCBr9V",
  "key25": "3sfY8mqGvasRiffxVAz2ZtunTKvMXwEkGyuGBgEoTythxiSLNjZrHvELrHA72vYN73TZoc57cW5EWgKr7AzZBoKv",
  "key26": "4TWkU6nbCtUzMXmkgKa5Zy8u2key9jpg4NoDWHzPv27vQsY542s52uRqvgrknB6ocopHG48aFp23ETiuajvEcnRD",
  "key27": "4tAP79ZXfFh99oN1G3iXLvqKn8pAPPt4Zpbf4oEsSHqLkpC1qto9VXa7i4GY5k79LFa55YLsu6YFx9yPL9BdrAL1",
  "key28": "5FK237yNp2aPj6uG2y17Yn41BCXmKFLJwYjMSH69t9U7NU4HXaQaU4ytAAtBQqQUinZ2P3tiFZ6sy8CpFCmNKdL",
  "key29": "k4kB4KpPZNsiCB2zrSdX1YnADgCzKY41rAoLQSHWw2znCrRgZZX62E2ua1vQnbGHpiFJXXnAYP2z72p7ERab5T9",
  "key30": "5Hmp8tdRkYU345HYcgRc6st81XvRMZVEXcF7sqah5H4kVMFgkU1oUJChsACScRN21PihjyvpwvnnSkPQuv3RpvM",
  "key31": "5GUXqh2C2HP12Sd7LRP4yUBcWLMBCv6E1t4HysaJ4sXd7ZmEuD1qSjAr47jSfUfS5PDVtUowMA4R7UifxRur4R75"
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
