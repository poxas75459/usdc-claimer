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
    "4wKMkEgd6foycUfb2DEgB8TxzpcYNzv4o6PrRE3MGwjcMRctmj83NSJSeieuxn1YUg6sNsxWuL6bezWTADY556dZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kVCb5ZpLJpEgoW9o5us4mmqQPgZ1gg67YL9pxvzCbVArodZCX4ts4fC4wQcJvBSmBf7BPfReRWY4PytmNNNWSyo",
  "key1": "aQnz2JuaBZzr5CBPVVMx9kAQoinFfzBzNKWeeygXftt7qCWT94moLakQhhdMnnS1fbP6LwZqsk52nTUNshjNn1h",
  "key2": "4t46CrLCnXTG2wuMa47Pe5nb4ewszJPuMrvmnmwyYkJX1dVdG29sdhYFg6R5NRDQsZ2Um5hUbJyj2Ez1cksXr8nL",
  "key3": "WhTSYLHLYimCEg3GhhtYuioF9jqpupAwH4iuVLfPVMYEMcCBjKYqkBTbuLjG4ej1FxFWuiD4cnMPEXvHFVjUupx",
  "key4": "62yw5rjAXqoTi5Rzs9WciqGrd92Tm3ABtjg54SYgdBK4YnYQ5S2bBCx21d13F6aBwLkn8BUmTCrePS9JL998dWzc",
  "key5": "3TPBody25wg6BknNvYyJ6x4zdkde7NZs8nL3Dt7CoDpqtviAmcBKNVwpuzZpE1L8AzeigTvjPKCZuuHcduQWTPcU",
  "key6": "4p7T4mywCiLUPj1sCNQSQUTsxxhq7dRRB2vAXAJyp6tq17ykJF7EyWnZUhnu8oMBiFt2QvfGN76KbbMntXTcUf8G",
  "key7": "3rMwfDgtxg8b3tuD6tTckfTiwkJnVZg9QLvXidL3ZUmpitZSZZhqG9NYBdLF6rfLo4pHqWEaE52ew2tiUHXdggLp",
  "key8": "4hSDEB3Fu8iSbtgm3S8A662SqWwkSrzK5L213fW5bjUxJSvzgGXcXezMJStKVRqiL2cW6R4C47USL1V7R354P1dm",
  "key9": "9HcD91Ce8c3KbSaAvQzR2pDQnUELpEcxhpDtBVEW8yVm6c3b6cDu6u3bLgzkZCopmQw2DurNLHeoFNPV3CkMGGk",
  "key10": "5YaPpTHH9WeF47C2XhG3VPwC2J1EBYFVAgEYrX8BJ6xCRfj5jMWKdTULwT8CCY77d3hzTVJECT2KrJ4XqGtF3YxK",
  "key11": "5cVpfeFNJ9VDswGc4zmqRnNxgmCQp1nYdv64xciMYsmbjnQ961354wSUawJ9wnVy5DvmGUKdhrYHgDwVjs1aqP4Z",
  "key12": "5hGA72QaZxqtou5qc9TQz6BZuH148BFitgNic6GwoebSLN3cSiVLrWB89JFkMz6uHAzeJZqnEvMsYTSPxV1WGjew",
  "key13": "5AzfXMuYGXdMgrs6gLV2bMP4qh3iU6cEs8WrLZGRF8qMot3PC3kyaGLDACEQRuM5VxsZ5a8s8ruzgych2oG4XrRS",
  "key14": "NBN4jycfYA522KkPVzB67xLsPJuvbarYbxKTm7dKBRgayvWYXR4iFQNreSSMiwqUcMUYQ36mbRg2qPvGXaykBgj",
  "key15": "r6bDP33F6ng15n8oTj864KmJwUb9sZRgNtjkdY3rNSQSiAK5JB8WL4eUqB4L4NBxr7Jo1ptCn1Fm3WMVYz9tcDM",
  "key16": "4D8krGBo4tWiAyfe2jEEzWQwHon7S5yAKgpAYAAzAyJNH5SZgjRGF4rTVueeJYiHiS2KHPm9TbRuPvWf36N32X9w",
  "key17": "XWXSGwYZcBbVnnrTBdZdVy4fuhTsamrNQSgc9uyiAWdKYYAtXFSFokKevFkRrZt91aNnzQeFKE4V91mDtAAwFCo",
  "key18": "3MHMKxQ6DgNc5mD7ddDvqAEnrtqpJCJgyBbURY5KsUpCta6LCmg9KtpbBHjxnfXAfVBWrjXjzHDHCPLdRwvQSDN",
  "key19": "52R9zksyYWvNGG6SNNqDWiTZbD8s61eiKnPiVyCkE8CaMMmKgAS4SgjCKB9o3C1iKynXbX9qMn6wVgtqRSBkeNvS",
  "key20": "2dcggoqAB6M95qc68355rcnyoHRYcqbRsVCDnRKvdwuex9bjeE9TjadrQvoiwv3N9MSUNrNSAkz3368VUyJhJed4",
  "key21": "3MRDFwfKZ2DK5Qtw9WNpXpK2EA27pefT2mtdSvU65psPT6KKkEDXdgUW436fyX4C141Wmt31Z9fhrKi25ec5BpUC",
  "key22": "4x6f94FMu4HH7K4zCoeG3gWH36NW4XZfuQz4LVTKqJZpCQpYy9emsJDgy8K8W1sHikjNB5o4AqdeWyk8D2hVipA9",
  "key23": "4TmRnmpPTYnADtrhENZcmXZffWLfu1ym3tnNf96uvfqDtPcbTMZPbzYiKEx6ffMVWPStdrhnaVgbpBWRvBaSNVcM",
  "key24": "2gRbJmCJKGGuziDFGNif1vVVCNLnEc5rVW6opK9yKZsGdvtJoZN1KSB684Qh6WmpMRuyHBfCoEdTW6LE57Wnm1gY",
  "key25": "P4djAhoFtSyhBtBoKEB3gUtm5819VR6fe4MNdz2T24s1UnMCLBgLzh11VtWTtvj1rjAwn6Hrw5Fu6HcSWbWrSLY",
  "key26": "2Vshszjr12UNqkUtSq9SSqZx62R69Ug5E3eAFMiTuYXf8ruwwuHMJzX15PUmLYbUeTtbWjp3AhLgTXrre3V3s3p2",
  "key27": "4o7bPZvMSGq4zLhse6pVXAy97pbZPg2fs8LkZuR6SxzWRGaEAtL6p7UrvgX75rQHDmPwviut1kWk23bwPqSFM9Zq",
  "key28": "57CgF6aJ62DDyiAuqHn4kygU4S714tq2dEcLjTMtiz2zGitveV5NYcYQ9TfWyVUWRe9azroyV1NF6c5GzXRGUaC",
  "key29": "2Zgy7Ep3UUdbb3WyXAxdYStSg1hMLFezSFohZGWexYs9it2EW1y5dSfhMEbA1c99CpiVyrHdWEZRg8PHFUe8rosc",
  "key30": "5zVBMPuMq4bxGZZHg4RUau4p7LFyvrkjzheX8ocxzEdAsJEDHe3NUmXirh7ptZjE26P1eGP7DrPvJJwdkjFL2oc",
  "key31": "48UebGt9Sv6fKtAwXqjfDE6vEgY4THFRsAPTL3H1DpzuUJmqAQ1qXrpnghPxFzEDKMK2CeMDYjf83qDjciQ8E5De",
  "key32": "5qT7SmGSTtxEjEEz2fT1UFUz5JN4ZoxG1rpHk8MXkx4ZQT8pMPXRPB8FyaJjWYFgLpAkwvjc94cJtS9xSFoZmhQZ",
  "key33": "4JAuep8bPF1DAYVm1qenrjbs6BxkdyUpGRtjmXGz7yRxHL1JWAfu2gXhFAnp9gKSwWRmTYyTNiBPstho5gsyyBWu"
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
