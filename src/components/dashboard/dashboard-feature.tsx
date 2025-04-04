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
    "41QQjhB2HRPfyaySXEgPkbbjEXDXNe2QVxqZqhvBwjpBqefQ4WGwjJC4tzw1LLpJaJtRXggnk7c7JnyfcKHJLmBR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LPqGsUpVZiC4jnqJDWApR4V17qnhw8RyK89sGkUb4xeppFBWuowj4PvD3bKLpjPVbY6jFTHGBJvjAdxmatE5XrV",
  "key1": "2CYUGwHbouUbhcUNRTwYUEGotzxG52gmpKXaWFHJmbtau9Qq34JM9Lsc1pTJyHsmpt8jjQpT2EhLpgHk4cxi6mCh",
  "key2": "3HpVQrNhfGDfs69pSupQMorCxqjYf6c7MAuxxT8utjtKQFRi9qvZiSbuhGAX34QpVBqG3whF3f6udChk14Nq1RGL",
  "key3": "5JqsZAUuLN4jmRZCGjK7EpagHn8MFvwEn4M6sW1q28Gdu31JkPc6BUHu3fvnbNFrukZ6xcs6HBidfMPFnaAFv8K3",
  "key4": "56zQKpQQ2SNTXXn1gWMEogVpondXY9FPXxY5WdNxxq2vfMr8uNMjWX25qSQ8Vc1GDyKpAGb4UhG9ty8ujM3hWZbq",
  "key5": "2emFUP6e2FMVZtj7j37USsRfxvjFbyVQxhuC5gk68ViXziTP9E1Eg834FDVks8qvwGPZwDjfbMnbNxdaZ2KwqmjB",
  "key6": "kY91fpQkTWnRS1drnQMyktHBBRs4weQdNp4rNK3a8sRxwBBBCFmpbzhfofKpHq4UT6SnMWusK746JNfiooCeTCA",
  "key7": "484yB1UC6PH7gqTp1JDXt8UZcYocTqqVAYiADD8rFpZk9rgeayhS8dRLeaYzkhnW9oUnk2k6RJqsm3LYRogXZqFa",
  "key8": "4bgA5WfEu8penRtouURPgSeLSZWb8N8RRsuGW5p6kpcoQkvmicEfTPd5DfriGoHVyHrYZxHmsRMuFtxNDoZr6MJk",
  "key9": "55CxpNsznVWHYgPUbsDfdSmNmWLomPw4TVeUhudSWy49xDpNUdGfbQt92SR2cMuLuudjJ5FMo9PBRSUjmS7b5Xxd",
  "key10": "5PzkFUoG8iMD5tteBzM8ne7coiZriXR8xy4x96BhoMvdRvjfz9xm5Rwy8jJUMWwQgergeYwE5RAAWX65pDQsmjpv",
  "key11": "3sZYXBWaXk6dS1DL5kXg2i1nvJHxTCFino5QMELqskTQx7zJxAaBQQDqCdpRgna4JbGHUVH8AmkFjGr7HuL9GBxn",
  "key12": "j8ub2ArfbDT6mYiUxiPcpxBsVbWTkdR7Cjx1arKvkeCpTo1NyX3ry5sJrurQkXPQK9uBzAtSS1J5pbxov84GDE7",
  "key13": "3PhmFr9KWkKmUvi42nvpw81sga2oxjYUWM5A6tcWbq4mPusp2yqUSRNiHCedWqyGiMDR3mqcWVwqZSnPwXqXtzuD",
  "key14": "3o78XpJNwPUxwGxkgxKRdqSFngepdFP8HXix2b2rWuLTHSGjCokaZ2rNcy3Gt5QG5x9PUkSuK3nmeqGcKrdNpLbA",
  "key15": "5yv6vwVWk5GQcj5BszWu5TskdARvxhuThUp5aFWAnFdCxEJs11yfYjbQR4FK8f37rTYmYYXL1S7B8xsMpeEibxjD",
  "key16": "3ZoB6yQB1yoXcXoVNKgmnMA1b1YGAQzSza6SRw8m3fN13Co1bkY2fiZZMFiLxyZGiRESrFfBs6X3MoSWfoDAVeh2",
  "key17": "3wcPddcy5uvy2ESafwAHxgrKThoaX3tJfLdMxiZcQjNjgMjiYU5aLrGqdAsAsFtQWKVP2G38jvh5VFYq73oENDiP",
  "key18": "3KpgosUom4HdLNEpuPZNQZvBeupRgk5nrmV7uNRMnuoEPr1vCQ2iDiG68vMXpnpDozeXZfZirbuxnJ9qJkLi8fCM",
  "key19": "4x8u9jN3HUvYQre7K9VRJgyCG1jdLzovJ3q94VxgHj3T4t4L433NYSHNcyR6wQmS6pCNMGZM5W7mBgPmQG8NVCsE",
  "key20": "4E44sjcLnDJ9KaDsdGUFkFpbNXfag4e2FeNThfn6995zFLrAfyEUA8WUAifE4UYR7QyvofGbSEAeWgM5zoWdrmzJ",
  "key21": "3yVodV9EkU1hWL2NLvaYYeAFkLCCJZCxQAGK1iXnHFqe5CXLXitYXeXEd3WbbW1XHyHTx5QFPzGgpFppAhRzS3AN",
  "key22": "4heXU8C7L9bDRQpBmsiifmDzoSXBDwUgKhzyJPgKyMbCsq9FkBTCnmmS3EXHgP64ZhXdcFqVBuZMRCJ3ptcK7x3e",
  "key23": "62PVQMTSgU8japxJ8B5e9uqB9TX6Yq6Ho4ygJLN6iqFCiQ9sBP9P4oPyrU48AxLEjjQHLww35Lyn2JxzcbFb4wZC",
  "key24": "4aUgF6n4UjxQhM1eNKRY3CVjFmouymwfozUet2GSwmwCDVPAiamMmfGY2tPHkLj97JNjhXhvT1SJDP9VgQk1W1Sq",
  "key25": "2toUSnoLwoFsbUT2AJpFkZ7h6Se9opjYHWpFLfvccrVdFrTEbXHr64TVPKVQ6FWQgKeurD4xWKjA91CarWuxuTMG",
  "key26": "3rauPcfhXjFji2W4GA2YhdtKsKafaMeZXMb6EWvXXZiQLGyxjJhQxZW4Q1vaVsL1dBXGwmUm1BXaNy7gPeirfWVu",
  "key27": "3HUGzTx3AjzgPRWJneXbshSnrkbc9ebeNTnCoEhxCRffnkrpwai1VnAq8abyN4ogeMg1HraVbTueAM8o5ZwjkB81",
  "key28": "2kSHF6aKNPcHuMHr1GSR8MiKdGvwwP9GQ7bDskdw6mDQcyhjrrrM5hyFNLDvQzmN7AymGqgpFgGjuRphM6imycDU",
  "key29": "3fduMr6TjTtm3FgTUFTCm1wMALRTkryXsfK8sCxWGcZdxcV9njpTWaCKqzc5dUmc37kUtxVFLxsVKESeuSJTbdcF",
  "key30": "5nRpJ5QGeoBtmg1TtjCPnwFpY6QfwVcmWHs7cTtmGcLWGsNiNjBE8u3ZCF9F9w2J5AZBitz1Egd4CEb7K5Fcu8mh"
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
