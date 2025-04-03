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
    "3HD11nCRfwg2nMwHfspBpZVWYfX3d7yzNF8DcGEEc2jbEb1jBph6R8eKsXdXLuaFUpRJtLPCPJJV7JWdPS3csu4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dUbHm8LXwCaSd9WN8ZtxphuvTd9Mk89CKASFzKueX5MUU292nq9UPW9wHDMc7SiRR1xxuLFhktr1FSnxtZ7feeN",
  "key1": "2h86BPWhnAM81ZYNPaSkAYKLSx8MrB9q3q4Fi3Yrnd5Cw8ovHmANRKaZTp4KUDPoG2DnQNmr8TJvbEgsgrqq2B6L",
  "key2": "44wVoXjcFXjanriv7z9wsW2nGsQaiwwHP326h5E1SNhHQ1p9oV1Dv5KRfgdTAXsMYLgk1WhmLZLtRYMZwaQ8Ev35",
  "key3": "3PaLCpLo2txWcz8BNqQwgpSro3Af5paektzUXPwn4DVmgcWHEdQkumpwU5686Txz3ASDKsqbLxURMg8wzAAh8bW7",
  "key4": "2LMiufSSkW3SfQEaKUKmsGNw7Wp8W29sCwWTVvk3gAKwqVJnogmFvk3m2WcUozjD4nwCzLEKjyZ6kUttsojJkdxi",
  "key5": "5GQgtWM8xsHmKB8v9CEHKNSyFjq6gS1SXGRCUcdp2zgx3zfzySzMR7UBdV5v2yfVfLzB8TzA7Pag1A5o4gfBVwyH",
  "key6": "4fE5EfCvoRyyQJLtQM526hsDWPYF6v5wjmxYZCe3scdSowwfUPihStGE7aju3Hv5onearPuqCn4qjJjy7ikfA4hT",
  "key7": "4gJ7vm4fJsMmqn38YiUM3pPonAd5hciCRSKxhk5WgurGZeJZhc8xDzcUhJPugiepeSNqi9yM28WvtJA1PzAMcm7L",
  "key8": "4gwkfqsYz1djZ8yw286KbsL8hi3tvGkfT4qCDmv3KCBz4KBSe6atYvUdHJzfmeeXL5pMRnS3gV5KYaazeVdzkqzy",
  "key9": "2Q1iM7KBGHHcwsUYuvBAMNq1EfaJB1c7yLsYVEMNcHZDTqDiutLDv8NKDR7aNC6dGXLHHU94jbQyKzDC2vDFJSjK",
  "key10": "2TpsV3KPYmtUF6EV6aeLpvMevUBVLTGfygVGNuZLtmVX5QGbbuzAvUyNuZZmfX167hYj1X2GRJWaBBfv5W4nWGua",
  "key11": "33yJtqWikhDL5V5Mv8QEbcZhR7nkctZt2oQvZL8TWpDZ9V99iQhFjvPQDnavimdki7fdmcaPvnsiuHYSejPziJxn",
  "key12": "4v2ssHhTPrLXJWpxxrwYc1WDpzhDsZAQwExaMHsJCromSQTxMXxUmjm7eFiHb7uD4mzigR81CmAgD1swgXK9RQE3",
  "key13": "2MPFHWwhJWKr5Wr3PYtVQfcnKuqsRqmjXzb68hKeK6mMHUpNbkTr6o459FKwpwpyMTMwnf4Pqc6vdfSUFFP8JRr7",
  "key14": "iuTc5fCmzWvqqTdiiZ7Rya33PGj7Wt6cfW2UbJEo3zZbQV6b939mCCwpq8aEmznGZnL8o7JECXCbJ3TdAqQmCAr",
  "key15": "63uBE1WKN43dBeSqZpaB2d9BYmddHVwEqwYJtci2SBVKoRZ9X5LNyYYYZCNwZ1EpND6GVWw7Jcoi7wCayusQQNVs",
  "key16": "2q8EdfcqNfqnp63kYq1avdUGVtaLJ86Kpko4oWRrLi84NZHqhtaqHrmBLdM2gNuB4wkzLkWEaYXkdF72RLjM7ZfL",
  "key17": "5TUKjv8wn94RgcPx6VfYKcYxNt9sD8uVB7qz5SHhftfaqvHEPc9ZJghSzdQf9UXtwDftd5pjDWEzju6scZFhENJb",
  "key18": "2QMRU7Hkwu65iYy8iXjw28gbvtSo7WGQHvk5wFLmRs8RTJ3FwHeovL6iEaQoBYdGpR6i6v9LycA7oW7rU97eAWcK",
  "key19": "x5JmYLSKZBDFkAWK44B7wBKjtiDcPyBZXYGz6JNi83AWoweBW2VXCYAVt445E7obAA7P3cUuiTwM4KiKPdMCa2a",
  "key20": "4xJ8nPk1w53jUmu5CsYFyaACRpfAzZ9zrhtAhPR5Zo7o8Gy9qffpmfJr2LoQN67RgHtDLpVyQn5rNjNp4CSG6oWw",
  "key21": "4wRtwXJytunvmsfXGmWo6tRuArqEVr8pmogsWgxzgbq9jjejmVGxpkCXMQKfESAYBuGueV4PXV871ekk3kcb9Cyi",
  "key22": "Dbv6EDUawaiyRo7MizinYFEJfk7U6mBk243oeMgze9kqF1fLH8SQJqdB3DwjcKSisg6zGN3JUgHzknG77SLuWwR",
  "key23": "2vEJDr67QMS3qFuixcocn1tpfyYeXuDXjKVoL569QpPftrbmwEyr6fTA3JDpnJEJBrWGwfDBX2omekDfQKRjme5M",
  "key24": "ok4WvxaUGfX94LHNHmUU6GSZbq4JwSXa6mBKm1BgsJGRTVvHH3ubEWsgGpR5Hs5Qz5vp6dpmaWUN1M68HQsJMiS",
  "key25": "5ckMUUnr4WVQWtxojobgaULWpC46RzpUSsLykhz749CqWV5axRTyYfKSJQaZ5NwCDJ8owo5MX22TpLnULrbJorN5",
  "key26": "23JWGai5ZMTwb9PyWpydPz19gDxiRC2Fa1DDBbZakewSB3rh2CmBET1XHRV2a6GiobmEwkv3coUReKD7mvaz2krU",
  "key27": "88fMbZWfb1PCMsXEtFyYZkkDKzh7YbkGijsAkuRWi6eKHtuj2AcNyWCusKYcjvvzLagn3hTci3ZnGFZoyH6HxU7",
  "key28": "4YzMjv2rN7rm2UWQAy7vBDUU7yRwnJhzxVgpVmgioyWqNAtuPScGXJcU9qpUBTWfzizCe8EAAX5KtehQQpsJG2tT",
  "key29": "2dCRKkkCuqLRhNK6rPRRLv4Zoade8VJC5ki7h4u2XrFV9RiJE7S3DeujA8DKGSSXoP5vZUh7EFEBkD2TtGWdTNeQ",
  "key30": "2uB9XwhA6KqnikV8svB2iriJxuhujbS6s5ZhNrMaw3CfCquX1cCSZjrZrxwfKWY6gUFGvn3UPTMcUPQfL2PPQjnz",
  "key31": "3wpGVeURLR7Nd88VPLnB1oBas48wGYgA9LmjLEPpWwp4d1bSGxXtZcdiRDTo82mWpEnvYt365QgT1uMKfVxk4368",
  "key32": "vdxuKUKWHagAUh25t1xBCuQFizcvwMBWBx5Jak6B86Q7ig9Detj7DebC6ryCwqCeNofWFhT6gT6ZVeNDR3LuKfq",
  "key33": "42tvRoexxBAeU5RNQahMBbfqmDkKryRtDM76bzoWevqphFwcxfB4jjuiDsxde5reAM2kzFBACQCsupHo1m7YhXtk",
  "key34": "3VBmLPS7QNjPMHfrB6faxkjux63GFQzDBZ1Z6tqrMr4seSSWGGyAqHjELfsWuwAyrQm9wG3FEmzAJJyr1JLPhbx7",
  "key35": "5ndpJWtwmTRHxmwXU5ZgPe1h6UsALc4kkd93PEHznZmbdS5djJA9Q9UMfKwkURZfo7vaWPTM1mKNxt3vRcg2acEc",
  "key36": "sHNxx2wPsvRmRgmZuUMFop9Z2vCHu6B1qHDQAtDiiDUa8ykDUDqsRmBD8MHxG2jyNkNUFDEN4XZXdEFEMrEhpCm",
  "key37": "5N9184xZC9qaHTp2W1RTxnLcdmopQDCTV5hJZDsUEjoVS83F1sXzYrq46PHEzCoMYLsH1hYbLwwJ52EpQhWeNQST",
  "key38": "2GvBKKBVmPtS1ENNeLefFyPToYHgbMGXSuxZ7VgLcMT9eeUcz8c1fsuVu6UQ5hkgWsgWkbpcHMWSxi8PTtWqzYNq",
  "key39": "2TbjXqF2Kw8eZ8Sa43zcbhMsWWd2A1NdRjh49THd5sFaSj341aEedFo8wEtgJujGSQZw92dz8wmoxwipp5RVTAar",
  "key40": "2Pg3opBjjrH5Nnwq3W6mQqzf3upLQ1i7714unr4QgmuDJ753BpXtpR8RhJnRwark329DGtKRFBEpMfHppdKyyif3",
  "key41": "5HvAjzwLJ8Uh33xX9dn46E2NBdBWVxTWnE3cgAnNe2TeXWsgXZ2SaQA86ncRyyn3kSgxJgDjpccnPWUh8nMihkHJ",
  "key42": "2kzzvhuZj9KjkvLh5W6aDtVnMeyvyZmwt127qqTz7i4LWfLQLhmhos3gxXENUVhUopdTG9UQC3wB3QvXo38fpg4",
  "key43": "5xi1AFKB6kwA4DB5MWZ1rtsWG7iNXZcHKrXYvVBbJmGXqK5HBinVP7tjQznbyQqaaTV26PEFp3a57nTJJSqiAr3b",
  "key44": "PnXoRw7FYTSRDU5suS83s7RxC8h42RU9GV4pbr7YgBtUGebGKmvDTEHhSuf1kt2eaqoRVYQmJ4jBYxjKHqMcAWi",
  "key45": "35iAxdK16uaH3Fv1EjHR7vFgot9Ai7DRuQrGkCdHeaLn7eTLgDkQX3FQm3JeNQ1ZP2yT1uzjxy4bcNmbJUKTSxRT"
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
