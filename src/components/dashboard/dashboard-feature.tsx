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
    "5CPs2sStWrrSebkYK1QENfAixN5THoVgQdgZnrAWsriUeaAFMZGCRMw2WwcTeyzTfgWu35eUutJ9LsdigZZs71tL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mMxgbvDoNWP12zU8arAjPo6SrznNMQwsGtoQNHmSEuvA8Hh1VMnF1Y59BhXumLpQ6ehMdHrfdDXUESZqxuMfrg3",
  "key1": "2PFig7q3m5hVciiyfKExZhAZUAUXjtoWVQYztLrWugKN3ii71GWYag1W6SF4JQ4r5qw7sjQebPqiLYwQKcwFvb4W",
  "key2": "4pNEq7FEyDzgCSnusSBEEqKHNjoSgVN8e6uNw25nbxhYp5QzprUzRy34PRUwcMBGfmNAyVexyrkzvSACGQRgri6f",
  "key3": "4sLMBDATwbiu8z43axWVXRvPLqC3oRwrcsEYLn1RuEXfoCtBikWhcNMMrYFHtwanJtiwovGZ1xHzJZMQ2zGLARUj",
  "key4": "35xeyt4XTZyMJDt1zBaYqnxd1YGjCh4vJrooBTC55LoRUNojbxod8WzMe4GMZg4NTxEt7XySGQ8RvnYkPNvvt1Sm",
  "key5": "mJ4d7ic3SKWFA3j15yY8bXHSUWWdhmENQVLTct8ZeegChoCMhXnWfz64sJgoXzhrvXGsUy6jGf9egHBCV1RHsT4",
  "key6": "34GK9fD6CRLLj5beSiiJGtrTnz98SSJseSga4cgddS4QcjCJh7eWaaUNeW1ZXB13pEPbEKbDzef9CebhKLsghcSV",
  "key7": "4nEXv3GYEVQAkqYXAM8QiZP6wVoWKDGw9najxmGMsMtYSXLB6dDhknCeejCGW1s73iej1h6MjE4bTTe196gSyGUv",
  "key8": "4i3a3SLbm45pbs7Afxq3AoUH6hwLwgsQJWDWMbdCXthQ4tjVeHeMLFwsAnkYKMRsHGRgXCfpaY9Xx9qvTP8VXP9S",
  "key9": "bU4s3DfUaxjymtbJiJhAAtsBZiXwEKvxAWMQQHhYHPSQLi1RZ9CWStj7brNJ9vBCYS7d8WBiFogHfKdLxN69YZW",
  "key10": "5WSF45PW3Rvx4R1MX57sPdF5QSMExG1Uf1EctSfkTLsVmigPdLpbNUPVwkTgsC9puJ1wqRKHhSpq99MTRjXBr8jY",
  "key11": "3tM1PjJwd5MBmYNfzzKLNpyUL3fVyTHCpZtXaKJdBfzSRdr1fsotWJo959mkBMyQ9ywfkfMADSrV1BZpzTuedGvY",
  "key12": "cbvuFTWnD8AkDxTMdq3NWtq88Tv7TQMAVNc8vv3hoREUzT9eNbehRmHGzXrkGr6bdt2rdKhi3p8h7GLgWegEtsL",
  "key13": "5Tg66XJoURdJGAaxB4w9SGHZW45jqvFJT2d7GfMtTsyX4WBdoaWvM1bhFU1ige1mSBnjvZ5pT3ZDXUcFkuGq5Wby",
  "key14": "488qh4JDVkRAEFDfE7yracKwVFWQY2Aek11dU5UykCM23RbJEiBKx1nnDMWzkdqk7hMZir5hc8Pz2ZVAKMtUuTKx",
  "key15": "2KjvqzWtUoJX9DD9Ym9qXgsBS5GgZowR3mZ3fqrAUPRz63muF683wCVB8qgNiZ53uFbGsAsS8T86XeCfSX2f7d8Y",
  "key16": "yFGUQPYU8owKj3vna8f4TsrPMVgr7WYfhr6Aw5F84NHewYpwLZXeTu3dJoWsnGxtnE1ShuojYQtYPdigFP7omss",
  "key17": "3yXhcRswSbH9HX4juRiB8gUKnyBxHS1mowABfCfH6Bda9mh5xp6kWzcQFYsEMfYS3zfUS7drN8hKLMYxEGKP2tXP",
  "key18": "3hC7gorq2bQbaexuoHVnCwJvZggCCQ16gH8VVFEvBSUofzPWXnYVTjccTSDuRtHXpNyzwZEeUFvmVwQSi2ABuz1Q",
  "key19": "3qU2q1QBnNXTrXcgPeGcjzWPu2hcpVmEXDP3LVo6dF1ovVY3squz81pHHovehPz3C6JYpLqhUeizPucsWnqks2xo",
  "key20": "63iP2VqDZ6Dqdh9u3hgi7AvXUcbNrYdDWkmDDdHhHbcdp5DLNaY2yULjoZV9pMynWWwcB9aUpEJaE8us7i5K4GLN",
  "key21": "z6MtvVAdZ3maY8Tao4YkzmYXvWVTEPbP2GqZHL3tg7SFktU1o9W86mfFtdXNcB4spQMfei4ihTEAYVzuy3HUcFy",
  "key22": "35VDmpTLxiEnxTHnxoGG8xiNMzB8JmM8kDoTn4LPDLBRyS1sSX5XeA5C4NrGMZLksVpNJT8uhpcG1AmoHHqvDBZQ",
  "key23": "5RET5VXRZZNmYjpU4cvD9w75DdDw5AJubV7ncNbemXG5c7rGnVzNZx4n7FrxxjLYKCP27u2fbRsnqDyESSyTjnsK",
  "key24": "3GXsEbyrg6NcFLUGMsG1Y7YVGbjsjnK7WhE2VYLnU5T6WUxoixZm63icSExdQNVcwAQR1JdbrqwgpgY5srjdvbeo",
  "key25": "2D4o5BretuSv7nVj2LnSdgsJEbSNBoB66VmcYqLsZKQJcmf6FEGMS5j2RpTtpqSewuMNk7fYwTVP8SYCj8vHHVrb",
  "key26": "jUWjFivo9JApvfkZPHrXdDuoqhmDVxVejPJZ1MGvy1WvKpZQrjCPCgz3pGeLhVz6JsbES2wnwcVf6C5fbNuz6Ca",
  "key27": "33JeqCwwpbGztdPasVE3fh54UVWYLgQdagAxoVJcCzXMrgGJ4LYhvmQhVBFHKtbMNzizk5tsbZVfSgHafzVnKC7H",
  "key28": "38dkrxhajbRy7ZhCuxFdyewG9uWwQuy3NvgF5yvGyMfuUDpRrhzi4uAbFLgMMM3MC9DPsof72BqfHEYfvdkZXQ49",
  "key29": "4GszbMoPiMG2ZZnJFPyh9nAU5r89Mgfxy8thEDZBsUaRpzwDGtdYMa4Ede8X2uZc3E3Dw9vbnPWAutmhu64ahzTp",
  "key30": "3N276XfBpx4wTKiNcWQ7qNKHC4Wn72NaxFx1HbLhj66698a9WXxUate2TvFE8RpcMuwo8zuKvMwKjpfjpLkdstu2",
  "key31": "2exiqh1EeKpAiUiDwgAiL8zUKVMZ2rvwxbNXHcvco8JPVwC4VqD4YC53bXvG545jfHvEP8uvDWExzu4mRQXRfB7J",
  "key32": "hNVUQGnA5SyAq6CgY2GtCGgd5XwhGTV5E7peongF3kJarbDhNbZiYYtbyVVwu3oKETFuhD3qxztqRYa9TE3Gv7j",
  "key33": "5VjEw2g1gQo9Td49K3CW7SkhvA4R2rbr73gTfLXnANGTCHarhd5KbKHtg8TPoDksTsFvH63ixu2YBj64ijU1DkYc",
  "key34": "3b231qT6eqDzvVrdoqHGta3Pf7tAvZd6aZxYhB4G2zdBvNBDnQTfsBboPLVLGyukvABWhDVWC64B4No4d8cZn9B9",
  "key35": "2SKw7wcrtKymHvyerkjPpzSzFJpxLmryFdacnFk5iuvbCxs9it9huZxcZrr1Wdgaz8uzrKRN6Vk8zmjsF212xg7w",
  "key36": "2wrFv21FHjviJXXEDPqyNJbtVnKXSA4HpaWxX9EZHiHQedQNWjgkGSeMn6jHYFg94vqv6pxYduaZCjRQxsuwXd4Z",
  "key37": "2t9AnVKyNBDopLFnssC3aUzLLxf1ik8QQNBnCp32dkuk4cymbLdSJtsHZhjUpcoKm4JMnjBXdMwZJPqwkwR75bzG"
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
