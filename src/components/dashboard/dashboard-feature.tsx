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
    "55XNrseb7QjtDjYF3sFAkd27UsVfgHYYboZ5hE53AbBZf5WXZSWX4TeY8M1QRgc8G7LXC39H9kTtLFrSMoprQRUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23FQ7vJC33SuSEd5H5196nnGBvi2QJdZy4Zi4skNLz33WAAYPksnPEsNdwWDWFCdnKUk384SHEPgHzCc4TyyLhBK",
  "key1": "SAskyY7TA2MSo68VARj1XHQVgZhnPcwg1Lri2qRvx3TumXgQHpFT7eFdV5jKMBX2kqdz9p2xsjDvwtguhTvKwqA",
  "key2": "3HyZob2FjLczfr7dr3XvophrzyMgwJDuGQP4re3aK1Uh9sGV7cqFVArSTBjP2eqiX6uwcRBqPhQi9oW91KzJ76bv",
  "key3": "5XREqngbnimqqNLcq569GyDdvPQv9S1y7K5zNxANkzfotq2L3mTBhqFGezi1tbQSe5XKgh2aSHLseACJJorw1hwr",
  "key4": "3YbUtgbsnzXyaMHcFY2hxUnxJaoQzVVqFJWRRdPX3uPea5oR4oKdHhWrbgwdEi9TZongaE78od8V3MLuLA2xT6Ue",
  "key5": "3GBjAz2DxtvyL7UPnzwp4cyBLp3uN5YAqTKZoi2b6K7AFPJA18JEjKvDNXsVzBtjVX81o9b93qxngjnPFWsrFhBa",
  "key6": "5ta7J4o2YcA76LjkrKDCQoZvT5Yue3S6rh5MjowhyMFQCbsWUR5EChX9Qq3fUGzjQfQeNseCpQdxp7Ejd354f2kt",
  "key7": "fUtSZy184Dw3PmXd6UTKax9tuBvE1f72zjVXZkznNRF73SfdYUmjiwF7GGUoPvoxsxGovriEqumHig49Su6tQcW",
  "key8": "JVuTeZeNeEBj1ejpjG4Vsg3BenLTAy9Hw5R81M2382fudyVfSAYxJLRRiNpPfD1i95mXyoX3xht9oCgGFeJTgvU",
  "key9": "5WcMbmsju3yhcqUhi6hwWw8FYCJMHMhTdXe1L2yiobixcDTpoBEebWuxTknaTLU7w9nPxYQzwb7BkcQ8sughYL2v",
  "key10": "4Mof675bQQ5NLFRtPBoJvi9QJProzsM64ckmcsrpwEZ43nDbPpzmLosd3C5Z1ts2qUTM6VoNU5xd6kBgHBeM3SDk",
  "key11": "4BWhRhBA2pyUxZdaT5hTsdh4E83Swq7kbR7WgHDaXSCVX9rW5kM5DgoQXq7Qpm5bwWaGTdGxziU1MkdanB3yxzDM",
  "key12": "2wuG5MNoseXnQkeyvFDyAssk9S7fwA51DYmAfHo8C1jPxrjFuS2iUBhmxv2szmN6ZhNJUqfTCfS1dksyFyRdWMFr",
  "key13": "39YaNK4eQEkjyQjZAKVonqcraqh6N5C2AuENtBKmhkXZFLe7YjQ1sAZ9b9f5nh4ymjQKZT6Vi4dgk2oyBugdepyd",
  "key14": "5QwDoSkEnaTWtj99kybWNggyqEdYrBum3w3kWS2ziGyd1gWPkf9M3vdjd5Z8UiEeSaehMb8LwXUAAWvDDN5TgkKR",
  "key15": "3QYdy2aehwisUM27JhGSwDAfnpk2gaQhFaDkzFB7ZzmiVSgSruSNws3AgyTKP4SiRHTECLDKRtr2FoSzzSXk5zjy",
  "key16": "5MKeUYERUXF9JLkn5ev2wBgV5ZCaPETBqWYJ2gHHAgU9vyZFunaznnpKu6Lw9NdJgphj2Y5RnYPJyNLtyN9nhqj8",
  "key17": "3N6huJFc2JuFjexPeEgYr1xD3y7dBAUQ8UU3SmgQz1fe7kCX3VeBVrrsuXDcZLHyNhm8BEz26kkwJ3aisq25bsN9",
  "key18": "4FwZobpgmxfwuyHoeCJ6s3NE7U5sAaHE2LxRMgq3EyRY1im2gh1YyS7qRZECLFXWXpr65AiLbrLCByf5CPrUxX4Q",
  "key19": "3LvrXagvCFCac5wzt1P32yFdWc8cJqZ9FviaFUJTp8MAcMgdWuZkJLYLRcVSckwMYLT7SVQ28txXcCXTKcM8Ptb5",
  "key20": "4mCTm1gsB8spAGMb7neAcj8TngLvvzSNTRMpvJ3yNWpzYsu88Db5ZakU1Rj3nqR3xfrQxYmGsQoFjwcSUe79H5fD",
  "key21": "2rmQrMGk83ih6xF6wd3bnWFDx1Frq9WfJVurvEyDDYG1WnLzhZaLLDkLcEQMGhJUgWDEVF8633DnWaYNQVPS6S7b",
  "key22": "4LNYxu4pxMS7ahdGU4SsqyRjJhTpTkRwxbkzJu4wXcTEJ44gusEDYdStcofZz1bx9gTMH1KX4BhTiFnV4NAkU1Mf",
  "key23": "GQsG8aLiqSTp4VzMoPDvVjhCWJRgaTUXbrk7E6J7TyKQpUTsYGxMgMsj3UFYyLZRCLBVprqjpCUNeiEqyTsmiVz",
  "key24": "XTuwFay91ZnTa3mC5ZnyU2Ugdx675EEvTxsyHnaykLvsMy1BMgjxUvFfkWYowRWTpoS2uih7HcCv4cBXArB2g1o",
  "key25": "2WqEhHGkc2USDsDy9csS3QrQoPeJJusWmq53rqAeZP6jhkim3ASvS2GT6Vs6ZbyUcx9stUPjjxA9svy8vPni4K43",
  "key26": "4B8FskqfQakABCdxbjxGGLjZWWGeYHDXeEJWqLw9wVxJL1KK2bFBjRmbMWGhExEPKaVzHeKrmhAK2BTWukmco1ag"
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
