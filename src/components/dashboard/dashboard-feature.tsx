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
    "3X2SBhpGEE4imejNnrFxMk6V61be2cuWW9zoN6RP6qqff7GgnxWeeVUJas295aCMQaxWXUk8KYDe5UiJNo2rpHHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o3iYvBxJPpXYvyZY1o9NFtVSRcTS7aM7Net34zLMo8uHXxVwp71HTcLsEHkGXGQDTwyTpxPttE4Sqo1NpfVssdv",
  "key1": "2AfCbuMQ8kXCxkucVf8enJRNAGg5LwZYQqytQKx3WgvK3gwnWB1zvaVCeXMXstdRGhYmd2gs86UUKxudJktBntuT",
  "key2": "2oQcKGhofQ6HrpdwznSn5zBgfNCURZyZjmKwAnDYJPHcdN4dtncV1wa3F7SZf2dDwYLuLtYyNQwSVKHmJ5FN3BN",
  "key3": "5Ls5wSaui4XRQUbHAJsjMsV49vP2SjkwFuNxw3y4jgwVAHrPJSn5jzuyqG882HHGTNm61uhVgsQrMjX5KKQQkc58",
  "key4": "4uUp7BX7EVHbNaywVjnEHTM2m31QTL7KyrfMgu1H7BaEEDB4SLz1cjA7MWMEtL8GHsaYaVpSTvM2YpvzUGJFvHrG",
  "key5": "5YSjkLg2EZpusF45LG4jNUeqjKNCdhqiz3JW56bTdKLhJkip7CMkTheFSWxAmA9gT64tjfWQRpdpvbgWktwVx84E",
  "key6": "Gktt8LUfbTK8eV8LJXewzQhHSyArSAqkEuTqqrwCYZC2vwMvhnehqSCbrYxtYYvjSAnC4zVdAkqp7mB75k8iqiK",
  "key7": "q7Gf5ySDSReRY9quGyzy6x3SjvxbUXbaoaDZe6TDhs8Bz6qcBjanZqHgPqZ1ZZpoxZYAvk3k5WD5LYucgjDcwkE",
  "key8": "2bXP6iVPaGgncriZCpC1wgdbhBf5xUs9jGLsZHLQ72K1eiapezW1uVr6JoPLWYC8vBbw7jHmT6n9qbrorNZUTGCH",
  "key9": "2zgjqbE7GNccNu1eC5i89MoshFGc1uDtxjLWKQAXvmgw7qaJjTfHe27o2JDWcJFKUJtXk24C4zLyewp67KKeJczn",
  "key10": "4dhC2mieHakzeYiUQGhUq8M7r8S7EDeV5RRnjf83DfyLCXh58dKJa68CTo9R9McPsbuGR5Dp1MP2mgQaSUVsdHBB",
  "key11": "3YTvB3RDhXkCGoR1R6NRf1xVaZt2sWcLh4Kgt64sVdVdTcKJSToTNi4jsK3C43ZCM4SRWCmCqTGA8YfQxM918XDF",
  "key12": "4i7ncLBCG33Yvmmudyr1RmSpKgBsAcivaxaYSwryZF31z1tfDmzmz16qZut7dHKum61S4UMPW9tpZ5ubJm6fa6VV",
  "key13": "5T1m1E7XrnqVbsS9qv9yKJtRFk9xFqo9gfLdb7uaF1WeBQhvLuvynXTUPxTHhEy86oWfmuBQNnSoxiHs9oeodPmB",
  "key14": "5v5xi3U7eJ33R6kDSdf4EyGdye8tJyEnJfEBHNLYV1ojKG2NhKo6ZWZ8UdHRDLH7HVsMA34av57JMjxw2a5hmuCt",
  "key15": "5DfUtSWjDAq9T7tzzGZXoMeQxXZraqgRhdfRShoSKDyZef44pFPyNXRVGdvJeDW4UEQtWYmmRciQCjZHFqxekAY9",
  "key16": "5tLfD9DXosaL89aVp3HZZYKsYvBi261suquGYQgTqUcSdAjE519QeYZNhvuVExuiYfpJiFrRftWSxBK5sWYYgyBh",
  "key17": "4tszgHWKvmqvFVQpifSu7L8rADGgaWqpGCYZHsU4wfnQC7unHvGzv9x3WX8239ctZQPBWzitP8vFndVqDbjFqKcm",
  "key18": "3g3oHgyLCvD8SKp8LzDzRchTX5CdkkfKDrSmW6PnK8EPMSfd6tnVrALJRdyYHj5zi321gU3u6VQjoAbpTd9WqrFK",
  "key19": "5kXAcg2saEySamx2rYdiiFeKCBgi3XVhHx9rRHjHemqoCuc234f7rDSxbQqcs9122bXMKBmjHZNygVd1Je45vw8i",
  "key20": "3t795yxPa6K68YnAiKuvLTbCknZf3Au75ATGTyU1yvfLm2BhFnNH6JKgsstv95wf9zE8ACA767kmGEsY9cFkhxeb",
  "key21": "3AmJ4tEHbCJYiUoBpemLtHCBDmmEriaU8rqakw1dnyvBioNkaxFH7BmK8yHgerkpGZ5LLz1N7dDCxnGMPT4G4YVr",
  "key22": "3B5kwBE1FCaZfbaEURdcpFbhcqDKiH1PsRHd4dFp9Tu8Yhog4PvaZpp7c8aEyuUfe5KTDGHtGNUkNB1Aq6SfukV7",
  "key23": "3EJgktE7raDhEyH1Tg49J3LnDncK4Sfj2Gurz5bLV8GftLLsz573dJbndotjxzNihfFiCKcLHJwqjdRbALFpSGf8",
  "key24": "2z1BmwWBeCdimHGVY1owqwjqwPc3Zs2UtVL7msZfSZoi5okRcNv4M3oujLfMJAN7gzYHp7i4gzBJSRfxiWbpVKiu",
  "key25": "5r8YAWgKzCENyGWnRGq4wroF8HEfXeK7jMbttwQsYYD2yozBGuVHzYajrhgc8aWAwmCjn3vHJitA4J7fiQaNUCyE",
  "key26": "5ir3Px1izcZKLd8N8GXqXdq2sHUrug29cRCjto83Hs5ccDzD3N92jXzJ1yJNas6A2kLA3B6SmGmUbyPoujnSeV7p",
  "key27": "2muS3QCWPv9Y7KBX5zsfubQNmTpRcPhaFiPFKzrDXXnXSSBP4EKqmmHKUaZJt6cBgf5pwMGevnhJw87xfgKBsN6c",
  "key28": "2A1vSAECegSNHXGqsrCxNmGJVfvfPCcjjkGMwowxCW117fQ1or5NQChnN66v9jrCEiu9V2xfpLiB6gnJfSUJNKVg",
  "key29": "67LdKqnMqFTqKwaBFWgjWiVKJSpKPuUgM5GpGjjXtfW9aS87C1kT8yZF7podKHTyyRsFmodeNGXunJPCST9yQvor",
  "key30": "2txHfvxbZQt4WWfuhiXAKggBmGomm8JkEBfrkKYZAE8dnVRVYx8GWbVEsoCG9wKBx5Lq3brHz4EAQBXstrgYAF6x",
  "key31": "2veCujCrKHt5vih85AF3nNfBUwhLPf9K5YfNWLoBFyUEQ6ZYwzsRWgiVKaCKbHNY8b6bvfiZkhkukss1sAZHdH4C",
  "key32": "2UpJXFsH2BTvTXnGLMcfHMVtXGd4ewGSBZ4KmzuexetcSrgBBsrq3yeo81Gr451hjMC2JsjkYcuvXV5QuprFMKNw",
  "key33": "473p7uoRJGgTMjWFwbyRj8XXgvvMHGLZMoWAVEM4b2TAEUKCKUSENPrcEd6Qx8u6eLE659RMcMMtV5jiDbakCr4u",
  "key34": "2Pc6u8U1hbbEFsTHAeNbMPJHdE9v5sCZdAxzfWMxv6qTNqwwvZnbZzB9NEagBuP8ufBbEjdQ1zxWZdnSoU7f5wNC",
  "key35": "3pBAEwtfmc85z7ch1CJnjQiDqMmfde9YDk4ZeCHBxaEC9e4XbQUNZqXqNSYkRiBLHpNAgCtZ95PUiwF2YtoNzHCM",
  "key36": "5RU4DYv2WeHbePtRvCeiraQNG9ZvFCzf9bJcDKdWzqT8YWeURkCcgsTFEEMdNK5zyRt6pFWzi4YV4esb4gVGxfyQ",
  "key37": "2D5TkJCTSi8u6JeCY2Gh1ATGLMW2Bc1YwRvGvhFSWFMwMgnVUhgBNS8zCPXmvZwwtvUvTysHiT95vvReWij5MPHj"
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
