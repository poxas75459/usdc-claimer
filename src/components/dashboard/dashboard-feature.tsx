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
    "3qoYC8X8MHB6ZGuqcaEx3ETzaHbTFAGGrenQ6wktwJohLZD8fgYeSNhbpenXKHztQXPbgzXchkztcoksauB9khv1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cKGFjbpSbNeoN5DPBSSf25xXZrHzfPQmzxqE165kjF6bzoTydttDwrbHFaWxbNWhHfga3DDXPgrryhgvZSbqtTb",
  "key1": "4Yzs1Gon3cvdhwdDA78YjdYY3gMNik5LrSNnZ1BpMRBH2FrPAqnTf3EZMW29EcU7Eii2ECVo5iCC59wDwAN3y82v",
  "key2": "3SJDA18SNykgz8ZPQe9cAAuqiboLcTtF7ssh1PY56n6YQ2WfWh5KWmgBrUVx16yRVULAms6SAoDgMHfcXP7egcH8",
  "key3": "4FqNNRtYLyaSor1dGzkUaWyCBA1Xsh4deD57hsSwTkqHNVqUmpyFcLbVM9HiqPp1PuwaDXJFLs2brmH6RXdX9ev",
  "key4": "5SnD6PfthptecxyGMrq113fHAdMtvn137W7iMr8udovGF22iLURWiKaw2RFB3Zn8XvphC722ZW21MhVKgtEdzm3W",
  "key5": "3d1fDW7z6Y13f12Yh2zusmt4uCEBtrGqCLCf4P6QUkvk3U8fPpJZJc9xmWoNcjzeNAP8gn6dRXLahvMDVU58eYq8",
  "key6": "5FgXdvA6d64Mios1QvdWNaTxQJonh7PHdpTccSbAvoxeiqLi8H3gB4URSbha4k2ic7jWCXjEFTfU8fZh4nUYPN3A",
  "key7": "3GgKu9DctpVgawGdaa7zKiGRgc3pMqWtrbsHRMJSy6WmgCbdvYHbad1TLhVVY46TBjrMX2m27zqo8WGnmWTyYRnx",
  "key8": "3Xaq26MKWWvpgxLo4DJy7w5q8E6w7R4vXrCanR3xDCqDTbsx9DyTGPSXNajbm8fjFP4E6LjqQbifxMVnYdGtWRmt",
  "key9": "YubAa8Mj2BAxxYRm5Kc5eDcRQsEDbUyohaZ4GcL2vgCHU48VtL4Ya7L5fs42ugxe7VaHeVpnApMc6aFxtwJL2Kj",
  "key10": "37P19qC4L7JFjsGyn4JaWixEzmUWZ3KgCSqya7TvAQGCg7jXDaoGTYx2R9hXv6bmFF7eoAqQD9UVfsdn9qSzhjPT",
  "key11": "hxhbJcY6xLnN4KoPP1ZtUPGRThpCJyvYhRv1SChqHWmfhbZ8yXWhbf7WBF1p1qvi1D8sdU5AYpXUWbLSAkWZ2EQ",
  "key12": "2vZVXpeysokomDWaahwizUJtquQUqDUoDcA1TSXfMuudvkWQg5yfsRgqxKUnh9wnqUdcDhi5RXoqErF2G1Dpzzje",
  "key13": "5m8VvHHepUz2ifkgUkMm4nVs8BrjAfLyXoi2D4pfDKugzuKLH4t1cotHU4pya1kqcoQ9GBttVq2NwFPSvRVdBCQG",
  "key14": "49eBVVzUPXmU3ymP26qDbvT7UjFDVqBx54drwvH2M2iLdUqQLJ6Spywx3KKJrbtxctcmK1v1BU4c6SsLinhbC6mk",
  "key15": "BCSQgi6NHUU4EHDy8pfBDhayNYMf7ufo3Z5QoYRqyCdcT2g24bzc6r1VNEd5uNoivekBRX4PHLyAoaBRHTLQ6kc",
  "key16": "8XiijxGdLR4vbL85ySbQKJNBXNAqNY9y8DCxgoVVDcuy5bnQmG3Q51b8Dk5ZtDaCQUqanT3Vt9EUt1NnGiA4Nhg",
  "key17": "2Y6GGybGdzAf496zDjqGZDAtt28wuekHFT6wepUwwu6ZaqaAqehC8B3dm7KTyKfmkUQjw3AGWnuEzPGWRB2oZLhk",
  "key18": "5wdkJXruxp7so4uJAjQrdq5tWgUFbpMT2jT3errxFjtmDztec2aMfDLTDsmL6wj8jvTdHgCcPCMfYPcNS4Tzo2nE",
  "key19": "4ukHikg8Q8GTtSvQ4cFYUESqHTo67jvYPFLFgAfWa17xte1SLcNFWsGtEgQxaZzyotndXh9qfcoP3jFjQqHmF8xu",
  "key20": "sEwUcZBvcj2M1Hjuj3JyMokJBKi87aC84avJd4D4iyXtavC5P79nr48Wzs32EqbwMCsbjm1iUxZrfV3gNr7pZSt",
  "key21": "5pQ3DKCChyWNTVZMk38LA6RXXFzpatwocYUbqivbDZypc7GVR6bJTxLApmqSSiGB9EKpYiMjyj64GqEZBNTdintw",
  "key22": "i8jenEVfhVnzVQjngLQtqenF7Ep3Jd5BVJ69YirfhDoyynnTLLUqjeDSot2DUjTtTCGvAPj7WFzqEGY4vVBmExX",
  "key23": "3eFRd5YkGuKGKVTGBXGLtXzdrqoHkZxBVqWWkgRRdTPHjnGnRv8aUzwH22Eq9emsiQJd5Fkw92UgYyMhYHNXUFyS",
  "key24": "49LgiBsopiV8eKz4TQxyqawnjmXfMeeuMq4CUvRezRN9YQfHW6cFrWqePw8857PpFVnXdiCf7EqM1pAskyLzJk9b",
  "key25": "5WDaDTsyawXDpmjC8Mpr9AE4WAFhNNGP9nwnckxr8DMdQL4yM1zQKnjmYwL3YCrZnWtGuCsfMw3Ybaz5uhmJGGFD",
  "key26": "4W333Bpykgkt5gbpYhKpqRwgSJizL8S5cghhyzDgLZmKh19a5afnakUcsmvPbVMjAvhzfZrEiFbwi6umQj4Y1Sa1",
  "key27": "LzRPwj2BivesUDEGQbmgrpDb7o5SYQWqLMMPzznLpiSRbb2AAhXUurTpPNiUQZTvJpwMKVSNoJMGTJWsP2AbRnZ",
  "key28": "2FUiYFFXSoerE85QwgYqmcRHmyki4XZmb9tixaH1enb1RA7ezzDWJ6r1dKBTRsAEsgG7pgxMAtngktCpNuEYxU2z",
  "key29": "5nxtkn5HJ8McfwbQwsLK4bmuyCzVcJwXX4EtgSccSKsRhKqQ6LURBY4XfBKd2CLamcnwQqwR3fkFHwfCCAi2LpSo",
  "key30": "4n7Q1b9bz1ZbRYrS6bDivYBLhoZxsr9R5SgFBY7gN557FUDNt96SaCdfMygRb7PkG5cpwgs5BaBF84TxKb2DgqQ6",
  "key31": "4exMPAzW6ovKpkxVy9g5VTgZMrtGFA6K2kuBYXFf3eABeoNkUYL6FzzNGD3dTJ3wztVocDwJnCeGvue3qw5JqtgH",
  "key32": "5WfZYGGamvkMuqTW8tNNw5oydgpKMJXwJL3G9xAc7XBSdCh7gciApi4sK7zzXdqKUs6oDNkpDMrH5CXPnPgp3E2o",
  "key33": "poYf25kWj3Es3cQedphqzy3scTbGgBgWwq7tzydu8nWJPhezbPaxddHFcyJJnEGmTprgmTiQaYmLr6NQNT4ifFE",
  "key34": "3wo2nNbFuNwjjJ73Z8pW793286qQr1ZQafknMgMcn9D2Gu5N2jR7eXb8nRG6emRrUQfxXeA8gJNDRYKNK53enLfq"
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
