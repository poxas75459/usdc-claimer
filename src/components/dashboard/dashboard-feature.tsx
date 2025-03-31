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
    "jNQHHBQshUuCSVRTiNjqqbWZprr8VHKC4BDjtwEev4z34vzPQuXCtd2WyA1JBcqrQe8JXHojeaGhwxHfj2axhi5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "odrmRN57ZnZFdH2tYawaxqAKkfb348EuMMwbt3GA9TEFjRhYK6CarZ8HjyR9TSPSDQGj9JJFUr4gaaHPdMKXV5k",
  "key1": "e7HTzcqKkqojfW15FGPD8F3XdEyQoCmGhEuKVWnA8ofVCbGwGTeKTwemT4cQYvcAN2yCnXjB7zC6EYVSzzVJD6z",
  "key2": "3VcGWVn89cbtWonjuCVY8npTKr8enzuP927o9u8v3UbMrd8uk2dxTMDJXHY36XixssSEMhjf1LQzZtaeymvJShEP",
  "key3": "5KvV5aw3fMKjHQBttChFNn9Bc1cvf6jENsu8j6pD4FdAAHgSyN1nNwttugNA3PwuH9w6ajZs8hMvGLJEQFPG97rK",
  "key4": "4W9R7arN3qsLRuMeWgikZvqKhDtHpygBGV6m7fgbFZeUWF4GD7WyUE6dQZXozmxEtiXsWfxsEHqKvDgKzMxaK1DV",
  "key5": "5fA4hzgvQftotEoGK8rHhZ89Ct5jmUZepufdcuGfzi2AmUeuNYgUV2zAvTqbjCc9E2i6hNVdLvB3FnvfJju34urv",
  "key6": "4dvstV6PCZemHyxSrJor2NfNHfXHYYc6sAFZL55wXopeZfxehT3NwevNYFAN2bjcwyLnWVYPL2pJk9t6JHSrQcbi",
  "key7": "4Pt9i2L9L2Gj4jyKCdNtrQbb6aYJMTnmZYWofBEaekoqQpSehbhirTon6xEkaStzekGA5cCFj8rizofrD5xjiHPm",
  "key8": "2kJyWvd8rSft3tUcTF9bodfo3pTi2tXkkqTQwzJtv6EcPx5qtwU4ao5C24hUQwqDj6Exr9VRbbyGdEPmTa85ar6r",
  "key9": "4HcwnUwUcqoYvdivVNtQUBBp2kZnGhKURZJroF7Bg8SkKxCZrTrSoZWB21t6wHCrpgGnmGfUG3H18Qhv86VUJTnn",
  "key10": "3JEdsL2tAkdvMnh7wK1qZcXM1jEjMygwR6ELtpBazFcUrr8p6LeWM3fUSB6i6b82KWP3air9jrPKfY8BXLzettuF",
  "key11": "58TSk59qF6pLbnB6UGVbKhDLHy2ZJ22FSJueqL7HV1CSxvDTDNhPXs5a2S4JUReYMt9pYLDy2Q6qoTmrRtThyUEh",
  "key12": "4R2uahyvwu3BMdY18BUcRXiaXffVCsGgx2fapefmWmMBu5f1VfWEekKnRu1GNQFbt8JkNHVvedpSLsy8Pn3o7uxY",
  "key13": "5ju8wqm4fP3A2kPYYWssBDq9wXbHWJwCU28e8FWRw34ZoSbhHu7QrbmTE5K3MfZcbN9U7qbVfAgNfxyYh3W2EEZL",
  "key14": "2kKMQ6RiLGRSAatGiaYgc4FcvyS6ctLsphT7WF44WMcYSmXDBTZXDU75diKUcXGC9snrwKR94LnGkwyweCEhtmUY",
  "key15": "VYhu7CoZCQmU2TK1jDzzXSaKcpxkqok5F8DFvSyPfXXRKjfskPk52nqhUJKLbHHmht5YjYJNfHo92Fx6MRo1BUj",
  "key16": "3zsvY5TLTkkhMS8ki7eGu8sXjz38zoBKVR5nhtkr7MA1NdePsdDWPuSYtrScHqqL8xfHbimu72hKevKiaj1RMWTA",
  "key17": "5iejHb3ukUEKWao3Jo2mK7WVQPTq3ofvQ9qTdXEWfzmWTCoyAXkUCH68gXcNbdoEfLDjNoUpAL9LFMR1uwc3JSRP",
  "key18": "5GgnxqgtBZ8Bb2ocCMpitLsAJ3rVgyfBbdmBUcaYuEdkQRofAbufJpiDK86Mipwz9KCByuJCr81dqQb3Hq5qsqSQ",
  "key19": "2FZYsEaBVyP53RByV2EUb16LihdUw4tRxzJYXBZbmAMXEWjSuTUB2snpzqsGCNNDJP4udmh2rfWYLoyViedkw8FF",
  "key20": "49xarNnyUWfK51Du1DESCjcKH8LfVsL6vm6goX7Xuvu3BeDVPXYuxEYKHVrXfHQpdC3vCBiJit5Hebd72aKAVEGS",
  "key21": "36EmAAHhGXPN9JDeHtwTZKj6uTQKqnMXbtybUi8RZj97UawwVPAX2kQWhFqR99SD2taEL3TVqPu5V4KfN7VENj7M",
  "key22": "63X4FAZFQLW39u3au1D2VnRxofqF13i8LvRyBn8AL6JbjHhXKFXy8q9iio7JyyhApCBSTAiJiDNg9FZ8zyTDS9Sf",
  "key23": "2sVtpaac2KHDgTbDvkidj136eMAZ4zpdZE8GS9jLNSz7HHYVa8Bym7i9MUAXgCKmXCwFKYYhfx9diqYjfdMJKrpq",
  "key24": "5i3BMj5KgaEgpeMioLoDotUz8Y2A1BCh7QovN3tZtbDfLxRHoHge54hNqx8SkiQrVviJDuiUE4yRvHFMUWhWq2e7",
  "key25": "3ZxFyzYyLSUssAjMEhJsNvkZLWUj6q5uadmieLMa25GGPviTAvX9oThn48BeaR2QcLo5Ew2YowT99xQikDigmEkn",
  "key26": "3ryxuArQNNaZTUBhUG3eo7bKThAARrK9Bip7TTYXnWhtEHdVrVmkhmZaZXhr3CVA1aNYGmjfnhhWuFv7VnKYH62a",
  "key27": "5XkPBLZCWvuYGktr6Wo2YdmpCZ1aReyZRknWymaUmMLVNyiS8afsAHViPxKLiyjRm8ouQKG37pgS7cARxc9Pa8pd",
  "key28": "2NgNdCzhCTVG12tzGeCmoDPA4Ztn3Xyw5jNpzHHdMpF8eqecmh1FJm6fT6aCCw1rNF5L2BkCk3tWMCfnQJZsHgUg",
  "key29": "2mPDLy3ZCkDVv54Y9zTX4yR7GHPhzSRpqna2HnCREWTtKt9npttzRbZwbBiC1xg69rTzF6LyzDexf6d3dSMrJcn2",
  "key30": "4C2bydywCRLjCA5mbDJK58Q2LEok4HrSSJq9yoVdBc6KeqAM4hd3YxzC7yys1hMPG7DU9rEsq5GF8wZwNrZfEVZW",
  "key31": "4boU1eBXQjWpmNwhP9mN4KVHHnuZsdW7t8pu4PqiKF5Rh3gvfzNZUMEDrJaVF588svYHQ6GLQc5QrzNMimEtqog",
  "key32": "64WaBgACWicvvbXmG5hvUrUZuyJJrjcPogjYRiN6G8XfgsuVogWQRsmNBE5VHBpYrDBRkWPNvdJDgj6Cqxmf2Z34"
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
