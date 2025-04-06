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
    "5LHUkG9WpoXZEL688j2H641JpYYvw3iG8FnpDuAv2PPHZCMNo7qtGX8533WyEFYKrax6Ky9SWmN1mt8UQANvGawG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sBzVCdQqN85uSwQU83zpJZCidZ6oZAQa9REowuDZVCVHmxm6ekGdc7KfG7LzphcSohUhatZhErWHMNhNjbBqbEu",
  "key1": "iUr152LneAcfTaSNo4BGtjTjRGwx27raQbehmaHjTCrygnNRppYDbLnA6wVvRcNNbuoFNvrKQp1tBFi1H31UfTG",
  "key2": "5rGtJvifezSARrfCxiWdQ3KrpQVQafJfh5Rn7Lw1WMivBwM8ranDWcXan73n12RYbnBivSnbAo9YsE5PtnduZoxi",
  "key3": "WcjjCovtt8WCP39PG8kbXDUQozbsoHkebgzZ4cGxuZ4WChi755HStLxG9jigUbHCxvUkxLqkcRqJGUUzcB6EwwL",
  "key4": "5jjtmx77TbHqyCrP4L4sncVqSwvKynZJ6wmtys4hDuyuxef1rk1pGEvAhyf3xhgcsbZ9iYntZUQZvd62pPYsyaJf",
  "key5": "XgTqw9Mm8FnU9W5Jq1LWQgA4hi1diciPnUbRkvGyZsTSMs2qfLg49kK3ShmryfyftufyWtX5f5SLsV3Ma5seW5t",
  "key6": "3m6ETqxGB4G7QSmjVGjQ2T25UTvPHnxcMH5RFMrhzauQUZxxCQWwNw7vPsQUetSiNDwrvTijDjbth1xGDjWARn3D",
  "key7": "34XonDDgPBa4ua5Zyob3cstXcaNWcjhZ1T1xTtvGetbV8Uk7LcHLLZY6z2zNZ2NJnEfSnyYeuuWA9QsHzoRUhizQ",
  "key8": "44jCSqyTevQ6M4GDWBtoF7ccbzF1MJLrcgvHPLL8fzPB7MKdAXJb3Hy7LGQiRY4YuEMPGhoPjLMP28y6kiXDWXwF",
  "key9": "39WD74tJpXdBhX2FmiujiwtL93a6GL65pw7B3bsnDCNWD9pj1uP46M5Z3kvcTCK7PqPEfFyrmUY4KRoMj6E5PBqD",
  "key10": "ss8GV78obC9XDuC9guM1cqJ2YQhBJbPEvVNq162jD4poKpPKhYqDxZXQFmSLLtfrunnLANWUWi8zvXkgXTZMCvB",
  "key11": "37oApry1c1V2hqeqVPPYsnsUx6TC58ZgE5aoYuEeYzQyELB6SDEiQmXdbDpegQ4qvYTcURpxfxMRAo5j56V7P6gi",
  "key12": "ZiAvK6gWoJ3SrTmokYEPrMeMatm2KdGAuqmhxVXUuDbFsHGNmBsQ48JovL8GhyEUDJJo3nnuEPR3he1mgVTpjGK",
  "key13": "5KwQQYRQ71wJu6AkrpYxmmr6xzVSeMTChvxuKa29QFkvHA2K7UPWhRDuiTn2xpx7yuzSpgcwkyzz8xM9BdjYgcC4",
  "key14": "3YuLaMBYXQqa7fSqEgeuphCi8XMbUppBCLd4TLfTQt48eAxZdrwHeGinet7dxVzmGdavKN3UGuASfCQfa59Hmc3M",
  "key15": "4ntB4UERFZBuCfnRDfuQxUiKcrunfS4bYeppAtsxqwLCs4d5LXMrzowvP2pJfJymy7DqpU6QWEQSwXbTJ81Bi72o",
  "key16": "5RV1LGaTNdpLB4fgMkJH1x8YQ6bV8uDygY2si8XGR7qJvLcs6YJ9ZK8u15UuRZtCvmP6Hksc78vLXLYnNV5bzxYx",
  "key17": "37PaNywR3jWcoWpPCGTPiGMY8U8HCAgmenf9wKL9Y5VyftAQ5XXjQdv6YB9ZvDqpUWpPGwgJTtNmse1fsyWpzncG",
  "key18": "5EqjnBUFAiHRnT58ADSzPMkRfMXgFRwRQBUAnYajNptVMDEq2C1JgJjVANGn19iXEjJhmLmWDsd5qR9sWqc9CT1K",
  "key19": "5WdBeEh5WZhcdkr5y9V4shQVct66fUqPmVqiqWFckmSKc1FQFNG1WwjyoHkvgWpkDFT7WFyndE52faigbWKkQbke",
  "key20": "2t7mudxTz6sAtnGnL2veKDdwRvYLxQWwSyvJ8aVgyJ8EmfVEiM3MoGJcD4RPekt1bBjzdx8voYHkvS46GRUmBi3F",
  "key21": "3Y6bQtnhRUMbLkZjsiBtBnugc2XJnKjME3de52H43G6DbpJJ19JAvwXSrbVLcS5E8UzoYMgb3sXd3Krf8vBp6HUh",
  "key22": "2JJxssaY8i2psv37htzR5oqJZ5NYtaCvVBmPSSbdUTUojxKGSFVGDsAgubxtSTwXzBdZijfXm6gZhVWrpQ1SPgb",
  "key23": "4Xw4aNJ4gc7zxiDS88vH3FESfif34bq2jAH72ExjGBetHok9Cgcxwu7E6Kmjcra2jK2RmZFALeJZzkyyKmMJMGeF",
  "key24": "wFufezoGuJUprVBt7NfeMpvW4WhsFEzZJVwosvEHqjTNPfzMTwp4L7r6uxSMwdar3Lsecgp5GXrTZwb7p5zL19Q",
  "key25": "475jRhj92hnFeyqwUnF2Rw7pCtigYZHbwzH64tmeRggWahK2F1fTQ2xX88d7JFT94y55AeexvXtYLg2QJnQvzb7c",
  "key26": "4bg3fAx41uCBnoTHtLkKhHJMVPjYvgAJJ4MVf8RuFgLRfBvhb4aLESWJ2n5HovSGDwEKj3xEGvHQLNTVmGXDxtji",
  "key27": "4RzXsdN2eFNHmiGB6sjSVqw7pT4HX1HGDeNS3mJtDzx5NgBz3HW2tRX6xwNuLDYT6X2UsUekkwTvSQcLgt3Yp9tu",
  "key28": "3EHRyPPHkoiiA3mm4kARnu5DkR68EGp2N5dkbPFZ8CcV39U3jMBRKCetxQDEwJn3CYjoHnXivViQig9oqDa3qX2z"
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
