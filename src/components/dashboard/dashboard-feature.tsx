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
    "2oF5uCMr8RWiatmcfWo82ciyQxF4MconXiV1cy9gAc6B7BkU6XAyGeKuiEh8fhhvAbMuExYZqHTnPoYBtEbcAXLe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Too6FBK8af4zLakyWBWQ6Lm9XCBqgkYfjGRMCTZKjsfNjAeJNcorWLhtu9yTdWA7Dgnb2zdUzUgeGQag4YaeuM3",
  "key1": "53TyGFqMA6R2buLgbCUmUhzYaWEGf9pAEE7EE7UfdoF5e4RRzxPDBYB5vmrJAfCP9oAj4imAuhoY5QXArD24BzeT",
  "key2": "66ihfX3zcuJNZL77XUK81PerKDr54KTYNWPMVhkc4MEr95nWuebJGyoJWZBxgM8kUAaZopsaHRnUeAZ46HoaSVfM",
  "key3": "32MbysW5dNScJmjHPUkepbYencDPCjguFJPoWXiESGT2jRkRuUjezeEKkAYwiz3A2VM5etgj3EqGnJXERKrnUi7z",
  "key4": "4pLLxrM5jkiVxgVDbobfyLc2JEg7c8cw9LBKqKqW9hhmvkfPbtMpzZZwcyvKqEzPbLeyDos5WeZ3djrQKVXQidUE",
  "key5": "koWai7yByyxZyy7Ln22ocDZmGdFDSncHUbpb5q7nVncthoqJoEGtLngtLvHhq1LmSTgcx2fHAWVgDTSY7SzNS3n",
  "key6": "45fw6haWvRjV75dEpaxwvAGCrqjG9M4toaxSCNo9mDPoc1oMdwbmvEiiY2uh97c34fbZ9DJ4ZcLTZULxo9Ut16cj",
  "key7": "2r8QEokVDh4eqQHrhStEVusXeZDS9RCzmqq7yzUAdLiMCYda6EwkFWPkruVYQZ8445PZn8fmwAEkUD7bX66vPDXx",
  "key8": "2NMmc5PCPq6irVdWA43nCnd7kGanhdXJbtJrS9DSmWjRjPneG4GQmiQATfBQVF8wNru5iW5noAj216PUEayFJG6F",
  "key9": "5WHuHkMBYGoNHV5bBh5yu3SvKy7eUgUZq8iytnjsxU6yq38f2KU1VKWgXXA48Qj6wiVgE1gQV6Xu33CnUcyPK275",
  "key10": "5VCjaUbjEuEWVMenqHyodXx2u3hS4XwJvy2LyFkaD6HRyhcPL5Cr2U1jQS46w1nMrqo4b846J2C1yARSEp24mRnK",
  "key11": "5CvKRc2gRPxTvYTbMWNK4Hw1FqUDDFcKucoih5VFYbgh9cbNqdUfQRfcsdSNjbeRFPqHeU5qQWTojCreA9EgW5Jf",
  "key12": "maWbYGXdVbU4SdtFSJbUGcC28i4ZkWfBzPxZ9WC9sgRN2ffncpi4uf2BmsyzUSRWJ6eRQWBkBeqjJaTpaguwKs5",
  "key13": "2cnCC3Ur3M882cNkTWr8TXg3oSQB45HBe1niD1XSnCxbZRFZNFLXLnznEkN2TgAv5sAy5Tc1KGbRq66u817GkmvZ",
  "key14": "2o86oQYhS5nKT2C8eWoqE6zjYPY7DxUcT8gtc5eZUSuoWQFjAHHEXFXxk8FZMkNzA2qW2QXEf2iBoNy51vHoTreY",
  "key15": "5SjciaSd7eykxWFQ29R2PTrE2c1mKJu2s8RCbUcfeLgfdFWXt2b22nBNfFnBW391GjVEKtSK1bUpTPSi8JwvUh5c",
  "key16": "5Pf3pd6fwrLBi75wnRUDzHUkHoHxe73ctu4avtER2WQwYoW61GWKAByH8GccYbwF9ufwcuY5pPedzudzvrMqxJ3S",
  "key17": "1edZcWK4H73pULna5CYiLnwbdBfDSo8kEqAq5KQo3Wb7yiyP6MAXU88RsBeK3cNa5k8unfYWJ3XctKub678gzaC",
  "key18": "4hMat4tEnVuScqcCnVzPqS5RaLFiHbv7nPAFQS5M1hkrdx8TsdZeLsNXV3ewSFrjCDMYMYiKFiMz8z2Yj2hLMM4X",
  "key19": "2ftJknrazrcBAcFRTUBNro4cWUDnjzVpF1eqJfM4JZmaiuN3cLhKAGUc9vBQRM7bZEHsSmawuqQKyNNz8rctSTCR",
  "key20": "4Ec9RTpne3k4C92etNx6Ym5kt7HwVrcZNksBtWqif9m4yoVJWZYXL8cTjqi4dtAqoNwHqsxybpTmd6Ezn6XbWoGs",
  "key21": "TxsFM91DLZRjgGWa7oPfn4yfVGYkAoeSAFAGeaRtxH5JBRAHLewGmYFdWATCGyftsYWVJqh3Rf9rK3wbvVsj9H5",
  "key22": "43VFmEMMWedAs7c4TVBFD8KMiYc8L8EHYg75QCq8F7EAjxBA5NKdKVzMTEeMD5k9JAhdruKr4AJkb2xA5Giqw3kc",
  "key23": "3kdqJ3P7krCn5jcMa8wQUHopzsmNHt3yX79khqF4hdRDSFVwVEnnPNdZ1u6UXxAYzbA4J46v1VP8gz58ktc4ftjm",
  "key24": "3bLc7sHjxTwxkHEvM9WmAjKUdEtvog6TuryPX2k8LDFcXVwxRiVAjHaPA2iqg1cmfUWBAJxn5qQuqYDmDFAsUkGQ",
  "key25": "5nD7LSUkzURbHm7DbqECMMD7cjjxw9AyvhsFexDux2mxpZN76VRdNfA9oDZ67FFkgAjBmvtnSway1w3sqxqPqgu7",
  "key26": "3Tyq1Xd5hBbqBU2ikoBP34ZZ8FFhv8h7MCqyx73hv2H1o9sdinq7WaqmJ1mxprLsMbVLjwbHTi2jLVxkrnf12hWV",
  "key27": "5UMTBeeYQpyT7t62v8Jt3aGfdH3diUdumcZ3ACij1QZkG4b41b6WDgZwcehPvpTuaBRVZXmVzPfnKoswZmt23FiP",
  "key28": "3a4mBYDvJJERwSTarJGNapzj4YqAVfgnJgn9dNScEgHk557X5SMAHSAnPkLyHYDqrD3Y6CMEbMo5H6q82ThGbMyj",
  "key29": "fchZ9p43fY5tASSCgWjAhFopjM2F99ecKVKpvFiGgDdR8vyNKrN3zKx5tShakmnLtzWGExnjEpUGpyDfFjGNP1P",
  "key30": "cnKb2UaKGiX8VvtCgjRCPChSh2XRkSQcxf7EtxjFQjYzQe2u7Wn6qzgDZ6JXiP78FdpCiC13avqcujKd9GKMgpc",
  "key31": "4R4Bs9AUkGJyuzR5Q6gAtyxFutV1TGjCpqaG8y9AT59PHCdDaaum22KsJ6NNwkyCni3RtoMhU5xuaR2hFzysUd2S",
  "key32": "5awSXyMN1vrDw7A5PdbAQgPRQChy9oTEVTrzkYyc95YBw4Pv3xSTkddr5U719uYcbaGMudYxyV3udQ1nAPD8A6EF",
  "key33": "5fgK2Qxin5wvyYZAWUSjedcQpAucdFaxXCMB52eCz6QVZqYRDvnc3ts1BmDxVNRoesZ5XUKmBKi52NsMfTBnGiRE",
  "key34": "29FSah1VDScrDexX5MmqkMR52EiQe9shY5ZE9bpZyUZrBnacUhJVq1wRguuRUzVVmwmm1aQdfMwQFSNkt4emd6Hm"
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
