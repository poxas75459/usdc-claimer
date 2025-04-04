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
    "5jPyW8JGRebfn61tD5ukBzdvicMShhkg1GPd3qaY6kgfMqyeToUQsLiYkfnQQcUfJSPjSForfJH8WYb6u2xHPjko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eZxd1LwthZhCwuDnq4GtVcDvj1u7v9zTGTwpyhGuhCJLuiWdXntZvJSRtNiuKNygSb9VSgdks7EDtA9ZT5f5dEE",
  "key1": "5oqNTxMBb3HpjAnvXu65BJ94qPNrrWU9minLMkjRQSJwBo8YAw9TKyxfrC195gZhHdEccLky43VBBbdRxN61wjU4",
  "key2": "4VJqidJ4SihWF9msPsT3CCwUTVMgsHwGZsZNKwq1pRk6dtHwaft9o9z1TGNfxwCZzWbyeuTujHf4HQ2v1eo4467Z",
  "key3": "43PdgXkxYg9UpWvwFkntapBtTjLNFoUjknngiPemgDo8mSfHoDGwP1B5Yuw2XJB6MeN815uhpV2Xk9NDVxxK6xJM",
  "key4": "2j1gCTMiyWPKkEpCqCef9wyAUU4R5aZDiRCXtVD2jUPWtNbN2yvmht4QCfP8k6Wpj8c3RQw3sgeQcMDcrNXix5cD",
  "key5": "3EGcL1avSkfLPaLta1TSH11VTtrZL7i8xdGdc1W8Y2Tf8WGC3LKfxitY2HpvBgHHrQcKd6oAndvuCG5e1btdj1Pn",
  "key6": "2APGvj61AHvy7Mij7JqPZbGkPWgr5Vs8ZCep4qXPYz94gGpeBq4teBUur2rZYfDLTSM4o2mU7p2VpdjDaPrHu6nR",
  "key7": "3hxJfjnAAhFPv84BgqXPAkJJVHyYnzvJZUG5wRX64symMbttJdyKYdBRTw2uNHA8YDYgvgHoqfAbz2373sGvziRC",
  "key8": "5ikAzLX7tbZsbQxP697ih6ydQiYSQwAkr83uNtRVHorJkLGfcUgXYGRBhboeyTR5u415X1XCc5BatLA3HQaKXyms",
  "key9": "VSZ2N3rjgdDSvNuzDBeRS6KWEb2MazwyiQJCytfKm5ax8AgWA5JXFiXXL5pzZJUzDYNRvMQDyVhVuTivzKCHhfk",
  "key10": "5ZecRywkv7GoLudfSgn7EGjG3RF8y7QHZahJdZNT9SAcLtPMa1gpYibc8bv1cnfQxgHFEvE94QfsU2se14FbP6tJ",
  "key11": "3aji5KHomrmm9nC6EGSQeDrmKgQFRrap7cHJjVn1DWnkBBpyWwdKLTVhVb26iBSXAMAoVrL9VaeY1hzhQ8tAC7u2",
  "key12": "2Jj3PG7AXPxwBU8UKw89Fdzk2WDQKWmc7RBYHopy2sn1A8EU9LHaMeyX913MynWvjECTK9RjfmaGzkFr4fQ34eVY",
  "key13": "4U4GMFzDAppcfggYRHTxFaozc4yeMNnBjzBjkCbbTty25Yw16kE2KUDq8pd3Gf2UxTdBbqDtP5kGR2s9BY2f4XBW",
  "key14": "5CBtuff9HBcQbrERVxgr5zvrVYTzb4YaUPPCQLMqhdRFXz4nAKfQFKvEV9GaRHWdKc13Gc5bjpNYESXkauQZieAt",
  "key15": "4kx4trxZfHbf1Q8KULhX1NH6rTgZcBLcXFMCZJG6gJLQVGAGvDZ1zuAJAJKwmjKCCvAhmHTGq5rB9TtdhiofVmDy",
  "key16": "5mzq9agmu9itZbc5rSQJo8TuVfY6B1uF7j96M1M67kt82St9ph8oRVJ7JniJexNa3xjqm34WS1L6kCjtdwxuh8Xs",
  "key17": "2eVXv796AQTCut1TauzeKeKkX1vCYEhX7w92u85WiDQJEZ9FoEUokeLc6nwpsPiBuwZZ5e6gYxt5jNr4J4dUtVrC",
  "key18": "2gQwiWXF2baKkzZmejSZACY55oEsdq1Cv1yJz6EyjEdokFNkjzEdQRF6mcRHiuXziJgHese2DZsitmX9rfQLbS6c",
  "key19": "3k9RvWeU5J9r6geHobMnjYPRVKypMi2p8BRwHeNYuNQiyjSqSTTDEzig4jsm2k1ML5QqmSS8w8j5UPyxg2a7NUUz",
  "key20": "3SguwnWtPm8J9VLDPxfba3Jw4WMn4jtec7ZaEU7fcDUhJ8T8LwxTfiE4fKMLeddgRiAP3X5Zbhs3t3JF5cHQAhDz",
  "key21": "64euaYzTWva5ea2epWnY7GeCWd7kUuQi1WQZYu7nENjLTJqBSoPLhQ2S5uFmE6HDJygxfHr9qKQNsUu17HnRkba3",
  "key22": "3ECLC3BYPnyVqPWfwygzbtkcKTLDgoqLTRvfsDBa5HhuNhdaidptq9XrXAcUBaRR5bKJJNPku7vPmSGMwiEfM8Wi",
  "key23": "4RWFWq5xEvR9RDefBBdHJT7VSxQ4qArtFjncKVFwdXHac2UqXUgnXHu3P6xfcqGhvQeTLZ4wimq8k1cG9LzdayRL",
  "key24": "3SywHBbveGtvCHMP49TC22PiJm15Rom8Qkkh5CPgZbcSQwLNgZZwfFoUCLqwYkjZ6fez95aNAAW1pfpuNHZf7b7H",
  "key25": "3uekHH7K5HA4KN1byxFfmFi1DRNofHXNVHrRu3MAFLWc4US4zXBss2U9PcYgcDemZyGwSLpcfzu7KinZBueSU2po",
  "key26": "3tHmUFvJaRF7qtcURM31M4NbG4qagEUCqMJqP1UPGyQvoYaga5FdS9BwyJ4xJUjXqoJrreAnU9yNoRdC7aMvHakd",
  "key27": "4tGFsW8jgnokE8Ku959sat98xjiJ2g1xHe7YK6f6U2VLxu6Q75VFSVGoUguTgntUimYcqmHzMJA2BLQJxQStT3jm",
  "key28": "4bq9V3L72WkyLCXXXbiPA4pEdKxoN34KFTLVdptsnhVcuwXMVoVVEL8dDDEGecCGry5FDTPHHWnDNZSzKmZgDh94",
  "key29": "fQeC53LHbeZHm2sZmajV8unecrGa5DaHAmn69vVewyRtUeGhB8tKWsNJU1VXWbn2wv2xmbbjpcurVYzhqiKAULn",
  "key30": "635vDrHhTL27NyjeQt4TovBFckYUjMftq212tWvMEStqGGwjeaR1NNorruUAFYKnHvA37TPJjQQxKscFuRfWTbbw",
  "key31": "3KvdoGLoS9Ua5FV5SgXjo2rXenRfUSMmW5LThTqRvEgW1CVE9QLfZwnAffkiaseiwHYFMcGMwXoQCXscoMnaiRP",
  "key32": "4MkDkTMnqdizy6DmbScTMECxz346fv8ggxS1YzMdkZpgnFTyY1oDBiQCW2N2Gn2vy9Br9d2yU1tazKbLmP4y2tMz",
  "key33": "46xZR62tjjya9gypKxbKCvZBywZjEmkzXq91FY17rWdXjeny1VSzBCBM7gcF7Qqy1TtgyqJi6LeVGT1N8aTxig9w",
  "key34": "5ouRt12mmLYtecMUrmeTGAosy5E4qVHUtteoeD1jRFseYshZrbG5J4QntdGRt1G7SmCzfhjuKEPnv8bemiY97MLM",
  "key35": "54FGKuCJvFSozjrqY3GcjwxEGcB7z8buY4qhWLwPXSYUHpJAysvZVGgAtJJqGTrLKbwbSat1rbcFZLiSSqNe4A64"
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
