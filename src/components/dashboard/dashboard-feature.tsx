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
    "u7iScAZm6SfCrKjarDKuUtShTrja7ccSMNQW8j7Wr4h1kDH19tf2aEcNUQXzeZ8xBpJJAZwwhny5JyU2ALs8irC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DiqyE3tGyYCYTsjmo8KTuW2r7RrsfPAhZZ3qmfGiNgbFqSH9cbWvct9g5qxnPpcp94mbgkmh5UUM1pRz4hqmrqp",
  "key1": "sPbLQyQxATsUNWrEoxPegUmYuZHoRgMcHXideGJUNkrhs8MhLppN9WSEfngBfixYCcR3ktULGFkihi4vbcNUpd7",
  "key2": "5xNKKh2Nj25CLjtK31LnG5LofWWNkvy1eq3aN1PBePNZcWCGuSjtpiBwPUfCwz5KxYUw28zBJ97b2FqAANTmrSfx",
  "key3": "aB7TjyxUxTwzVgehGyzhfr3ZYEovhZEpA5Kh9Z7mS5vKo2W3VkoUWwxPoUjcFL5yLEVLKkSqSQGqq7qaB5H3dGr",
  "key4": "T3EEssxgdRWZNMGBz1scfYcZr3nwuMpwtaZbWTFpnWnukPHRkecLByqdMQZu3HWro3uYuVSSguxqWP1YHpntnT6",
  "key5": "3DPUjxMpYmZjHh8S5jP9SPTa4zVkRjGN9yU7eLyW54ECJiUBxyBt14BS2rodofZyEPvPHPDjpVsUKMDtTSDZHpqL",
  "key6": "5QaZsJAK7nUYCFqUp9kjSaSNXAXbGLz9G2XVXNpas2vJMREUVNDeAzGyHPthenteZZ5ahnnWK345JpyJ9jYGJPEu",
  "key7": "d7rSpujVeqmVTCc1ZUZcY8GxxPXNJqvbVDb4GXpTXJosX7L6RMencFkzC4FcmhF3KVMAa7zb94mPUnTJKC3jLAZ",
  "key8": "551KShDaA23edjWuSEcNs79JjNbmJrxXNDgBfd4oTb4SqHJZ3uhkjDwPEb83m28dqWjNwGc9KjttqSs1gfLvwLvp",
  "key9": "2XohV3eCTP9HvLb22n5oLc1ZWySXJEu1eHisH5MFnycdwDNNis4yF8eD2BTuNurE8RHwX5zzmMdZrErMBEo2BH6C",
  "key10": "bXW2EtNFf13qotcx9EYyfjSrH2yAfhukQAZrcbFoKcX684aqoydz8yH2P39xr3NaB2jfPbxfKwcBLgeRRmhXmFP",
  "key11": "Epz5tRTcL5G6eYHVGiKqefCXJAfXrTYxMwNktownFMdbvyNpB4EKq9cxWmQSC8aWpHN1jo9L6dJw9bxiz7orsKv",
  "key12": "54zqzGpQ55Ea651P6g8jNiL1ANZkQP9NnErREJvXDyigZSknMdoF7uGC9k3Xosyh4aA5onEtz4zsuPcMzdZMxR1i",
  "key13": "4EiM8E1sN16ot4762u8icoux4zUXqN3L8XZ42589TtWYhCtFtkGTUuZcxpnpJPEgVCfJS7VrjcHjByduDZexGRQj",
  "key14": "5riSCCbjfRQw6brsqURtHWrrkvYQapDLoNtDRnL7Aadpqx7VCCfuYzKopENg82rER62U7EXkevzNtdEKT59C5V5w",
  "key15": "4nZc7Z2cNbZmtxvDhSetNqSyT6MXVFfiMV9GPTTJ7vXUaNhtc8hVdWgsY61t5Zn3zRLo4MwzXfPa5z2MxDKQFT4s",
  "key16": "3cV76pbjeEutgELAZcp6B1UMvBLBZMtEpurp9mmBd62jQh65qgndaAGn9pdexbJLa482QhC1AFmXypCmm1c7PMz",
  "key17": "59HCXcrocF6Cyedmu4JKQTkU8b9YS6zp9QJEeQmF5FxBRZvSrUge8E79xfrsXQNDHzGV1mYZmDV9R46yg66ZYrEJ",
  "key18": "a96c3no2nWiqBPLRvHPVkTBiexfxdY1RNnrUvm5WkXDYNANngL3kScBzsfwShhrcDQ4ttEwdoJYVwsPiXVR2Mit",
  "key19": "29KoALmZWCbmmRU1D7au21ADwHzN3bgCZnrvU6ZQNeyr4nGZow4LNid9ff2e1iqDbphh7iiWxtBeHXvECnGvQ6k2",
  "key20": "5ESh8eSVKfsTNsu8pkVnWPJJafTegs9KwapJNm1ipfCftHjoH8PMaXM7gtXtzvn4oZsV4j2buUvkXg3Cnyi4VmJp",
  "key21": "4STWyEbxHiz3mdnWrayQpeBBPoUH6ERzdAtA57YEo2UptrgENHZvZ4gpreCa7G6MCo8qBjuFJHaiDChfXCCSjGV4",
  "key22": "3PqxJQnwo9HfGv4wNi2Zi5gF9tvUh26jgQ22sCc8DNBe5fsqZS5ob4FXzLEaYRvY4wDStWscSwxCRbYQUeJFKfUD",
  "key23": "3SoSQP81EFTSAY7iF7NddzwMaC6WMHVcPmExxYBgcSQ7YvNLzor6eQrVB7dAhkUdWXoaZbRazYGVXJeusAhpPgAz",
  "key24": "5FyrSg64CfUXQZH2qfgusPm8vEnLminfVzFsKo8znYxQLFPTrQC2SNuH8B1VazvGbbTNe5J2P1ywdmAJ8aK7dfDG",
  "key25": "2HzLBfhG7tgGduRsga8JHVtNFn8MirrZDUhAU9YQ72NSyPEbknriVk57eMDV2s2S8wMMCy6qdiCMHsRWQQ426J4f",
  "key26": "5qWniRaiRc8t2vvbarhx4uWtJQ9eJLRRZkzCNghTdtJCbKSZx8Fe82j1TYoggDa61Ahy1z4vqex5ZKyyMvetuAkG",
  "key27": "42uzgq9ek9DaZMZ12bLUFiWjoC7eAxgkRD1K3Zc7A4t6aq3BJmpPoJ5Xpti131ARhiTW7sE1dqxBgETQjZsvhzJv",
  "key28": "5b7BtrDDrWzfByj616uSJ2zhgZcGj3ogYaGbUVznHcqAtCHSgThopBidDuUygePpmqdDVpLW24QMS6WYL8b9KW1C",
  "key29": "3bsxaP7W5QjKhtj1qpvfY7gUQBcXyDm2tTjccHeRASM59B365nSUqwRjsDnC723PUiwfjbjvrMVDm2iMv2z6NHr3",
  "key30": "2tJmWcTpDgSXhMdXFYVRYDX8Ni9KcY5MrubstFx5HiCacFHQSttyCnvyuuPEr28sfLmrigUPDzWGranY2icSgH8E",
  "key31": "4NcmXDBEu4mbYaJAc6rqkNV6DvFD2mENN4FASSvqSNN3zJPiXU2F6YeQDxUMGz3dRMJnJvLkMJo14XbxC8mcmbvm",
  "key32": "4nGNGxzjjJxN2FYyjubbTRD5YHMdNVepzHL7PtbmTjz1St5tTEe4Nn3HDJY7oM2adviFx7ZEZxvgUm3X598WTH11",
  "key33": "4Mmd6VwvJQgD8Hgqki8pATj7Wi64WBNoVqPabQ66z7JDJ7F9VPygiEXh2E4omwFBr9WrS8EnxiK83i1ZQvZeNMQU",
  "key34": "4hFubaty5Doss1BUixVAMjofiM6zsUqcZmGwecVVMJNj3ZaV9PcyQGqHVGspA4cwadCJTKk6GTNyRULYWy8cpQSp",
  "key35": "3DcfgKCp6QEMrDFhcMcyor3DVzdrCXjMrZS4XKemvufs6QB78fWHLAWkmZhogS1sMtBi9RXkCAbfxHUrvyqJf7Bt",
  "key36": "4my68ouo9GEfrkYV3nVRuwpVzSQYU87HZK3JtVN6yfBZimXqYbnqFnctZVSDTzKi4QXg79RAuMbZoGNzJ7d4ui4Q",
  "key37": "5LrdwnCoKYMob5y7iMTMUqFhSMLVZeeqnA3ReqZXC9RJ2a1J2REwYf3oM8h2Bc3DRkF6UdyZQsojb66q3Tsa6Bpd",
  "key38": "5vV6mM9spEbuTVPq6h5Zky2KG64cn2eJJyNudVyoVCFFETcWMCjX1uRxjPeoT4h6xzbConxheTyZ1Y2BFaNi73Ma",
  "key39": "2MWZuGKYRgZhswTUZVgZUJubqUYtJZm55ZdfSdap7uR2AXn1RAHJoZ1Fziv7vxqj7fTDi32d1vHiWbqfPxGX2Sx",
  "key40": "5ADg4Cc5hUDUWDNmWHmLCDm5eZqxmJZ7Ktj8qBjjTuMMoi4weNJzffnfnjjZwYZiyAXY5oDnC8yHchk6DFmJS8Cf",
  "key41": "5d8CtLXxggzcFFn7nctts2HpxvPGHpsPvti2McyNjdt6196FK31qyo4KMmBgM4Qwn26vLAUJrN9aov8UhBhifNQb",
  "key42": "yQARtZRPr22SepMm7TAmUrfh95J8QaATMAniHg2qQxbqrPx89VM9D6VmtpaeTpNExcoL2WC8cqn3E8B4n5C5u6P",
  "key43": "5tJrNbHGEksmNJKoR7ZhTPJpBsH6Qppa9ME9PbLNqwmqxejQ3AF3XmxiRkUomJthToNEYAwUuFBttxiikdDtptX6",
  "key44": "65XUVn1rVQ23dqoLqtFoNVA9HjwCEz2WgdQbTJkcAUgzyguZafhUNBHKUTFKDmT6hh2GTLkv2yrDXS3X7e8GXi4z",
  "key45": "2Vvzg2B15ejdsLmgc63psmhdFvkaDmWfLfvtFzxxbUQhYCGvs2Ac3ZsJax6Je9jWtMkHFB6qWV8uyZ6SMdkRKWVq",
  "key46": "4hGX2oYAXamz81Uwp6MJsAAoVp3UtVKKYw8cn6gqFMwQsxaGq9x57jVaQv5vUnNTHXz16XU4Lkv7tYLrNDgqZQqk",
  "key47": "3vrHQJNa8oQPEFjnsxSoF6hW6s79qgwBP36M6tK81jgjmaFeQiibr7oi5UXqtXtPNW55jU4SSkHyCyHRUWFbkNTn",
  "key48": "w1MYC3p9Rajfnpd99GQgzYTUFhQvLnLwbaRnEvgz4Z8swaC56iP6biCxBAFwXYx6fpqphM4TvLWSqDXSk4xishW"
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
