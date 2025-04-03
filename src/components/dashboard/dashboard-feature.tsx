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
    "2W8DQTLrkr2hZdV1nuyTNBLNMJsqsigG9fHWm86Lyc4QJcUsKdVtfDtsjd5Lkt33jiUCaLnAGH9edpfJx5r2o2Y8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V8wvKjNYQmsytniyer1mUsb4q8awNd7HWyXdeKa6tkntZbrqRLtwZZGeu8XQAYJc4TzLmdus6kdxTpUTrXEUSVD",
  "key1": "2dyPDRJsQXw62BaAeEqyQVrQcaZTFQY2G7xyB4muMye6Rojg1ucNH1RYdUyGJeSmDnoEUhsJS6CLhKZ8g2ciQ9Zt",
  "key2": "4HbtX67L7WNHJ6uKj4jopMeWP78HNKUv6oRT2zdC4P81ptyqfc9ZZ6He6d4Wf8MsiR11f1ndUVfgu7P4JPmaVwgW",
  "key3": "54eJP8SERVELYJ1GBiZ4RMYD4s833tSaM436kJyJaBnM7qWRvxtqvthK2ERg1dNYxkWxmDWKcvAL3jJRcxjQWvze",
  "key4": "3ZT3QdZaAw3CQ9HFgYJBAJP49zq5m24pB4Asus2WD6XHYVpGEYhvdWUdT3SVWapqDjN43SDKbuBRpPSqbR3FJogz",
  "key5": "3Ke5brCVe8TeUYygpSLj3EkNbNWwgWaR1gVhJegzt21qr38f1JiuArhmuAUhrdTfQ2ecxHPpXsUHwKdefZhRdLhy",
  "key6": "3kKjXSMZcmpLs2pKQb7Ywy2zbrqkgQHZhhiugg1yWfRU59mbsXLdbP7QtEm76paBuZFGjLn3TM3kxTXkiQf8maDX",
  "key7": "2SnR31Becx4bLBN7iTVv6JUDN9mg1L4GcYQn8Cu7hp1HTu2wSG3rcFK5qEZYkKc26gKU3BXtseP2t8DgN7fMRNyQ",
  "key8": "2GrhJdfFgg7PVcdWJfXZtWqaBNBRhhueJ2oREBk1w3tJ6LGQXijJAuavA5dTk5cmPhSuYzttYFvBVpqpU9qCgCNL",
  "key9": "41RrsE5SiZi42H8kPpXFZDjfRJ1a479rJV2LT24gGXdKsicXQ1snYp8AfckRmNxRLsCLezxCEsAEMsvwZYP7Zjqn",
  "key10": "5MfGqrcZfoSE8BzrQcEGYL5DJPkTqo7Hz1rRNipUu2N1HH5wHo6a3eARjbuCf5DcwDQZgkMPuPq4VMZ9RLfkpWn7",
  "key11": "2pDyTv42SxnCuaah9KCuo8caJ8mGfM7mnQ7herATswbCGxzBERPbPuLMtNAV2wJthHJShNXZx8UDouiLNZg2Jgd6",
  "key12": "vq6BK736Go4P2tzfb3zZzN3pSboTzViwd3y8hNYw54d4xRiTog9CRBBPAd8x6Udgg5pBWmKn8EAcSay4o6tpECv",
  "key13": "3MCrKfaDUP6Z2ULtrQguEDsBih1AGPWEYccsrTEcZdxLHjq62StVQALhCNuySTrdtoZNXEAHmSYDcqwiTjaydTnj",
  "key14": "2gkxnFTgq1SKa6hkg3LWXGmhqgYzM1fySoSqkvpkXoafYq8RW6mVUUVWG6Chmqa8nd85fAWxjBXx7qX8vVHrMNmi",
  "key15": "43WfeKquRiMxEcBFKXyYD6Wfv9BqcgAMJpvw599WWTdRjvfa3znjLaBKo2inovyrZ9eJYvoaoTso3aq7z5yqjCTB",
  "key16": "5CNB7MR7p8fU5jgNnat6HsuRFpdejwima1GS7b44d4E9gWoFsDR1Zxi2wrtAda8dq9mNiD5L64jSmHyaCAJLPZqA",
  "key17": "3zXnQBS7d9mVfQLeTcpR3MHUesReUWq5tLzBBxV3AhFFsvC2E2Xy16jzufYbF4Vxj8ALeEZ95UW63Y1W9bvw8Vzy",
  "key18": "vBM9TNp2hWtnsjm4hFXWtdddoEk6XbPKoMwAswUPAQqA28fceCxxbxmHceKFePSuqvB5ATTjYh2mWsV7noCHhoy",
  "key19": "2UuRD9APzeaPKMsrDscTEfB3yCdujGcpUtCKioWVAcyfagFwjUK8yEgmLo7JhuVJojqhi5RxJtqRyNHhg9fU6rSt",
  "key20": "2Hyn9uxojLMgc27ZnR25uYKJ6xdSvGeCovYF336s8yxgUVgRR65G7m88r8yRJ7Q9FNvx8eGpzXVYfe5PUrL9DAGX",
  "key21": "37zEMEYFTYUadCHfTurudCVu8De2vP16Rupi6eFXe22Cn2kZd75qBnqX6oqSG3WycDB6aFUTi54hjR9ra8SfPuad",
  "key22": "4F94fDHaGkxE6jC3RggDw5vVKbYhBYkmvdVQTdKDLxeds3v9FBNiUXrWVqaa8ag42sux2hUFVo38BmfSXhbQNixC",
  "key23": "3jTYPZNWnd2BqWwWbiVQwHjme7Jc1AfktwmUaCGSmWhMBqbUCWssUpmYsjD8BxBqYSnb6g5LDJns4NW2yUd1PcaN",
  "key24": "4CEw6DfWiaTs7bigBVcpVsF8KEmpTmZhcKVP93DAHXhn2pZk4xAUogSCdSg3wQLhCrdbq9rdDc3x4KeRjCofPBXS",
  "key25": "3EYxwdZEGYTYzGrWo66RHM5218qqDv4yFtaXxTPmy6aa1PLFbj5EcHfrrtRLMfSmxgTGzUiWYeyCJr7w1o2NpuVB",
  "key26": "dqhnHGuEHALvNDpGmcmvs55t4PqtnuRRrEb1TbTR1NgZsZsS1vePtiD4eLAAUL6YGqe2bgkP6cMUgrkQLktPjPK",
  "key27": "24C3deaxuKuBg6GQ95FHVeHzjmch4XAfGhf5Qb3VFVGipEiZqeLVPkjZULmgoSorTorCDh9fTEUDA8mdQqpC1Yjj",
  "key28": "3BV1Pyu834gh1f97DNBnRMDA4RbYzV3NsK3sRn5TJAgngvMVaSGZMPYvBC7abc6jtjEedYaSdnzPnyCzvyLdFdcb",
  "key29": "4MY7aYK1TjHF6TfFo2yWEExsteyVLgz1BrJs7UcPUHwXzZeN3Pzficd7aXovKyYAUrc2vTm4n2JfEomqE5icvqA3",
  "key30": "4VPE5Vq4wEBx6MFkLpFMHR9Ej64FF6FdkCjbyKZJU6VYAkYxyuk1UPpNgSBxUb1nzXor3NMReTyq8NUYpuA6yj88",
  "key31": "3vKvcrpNjx4iGfSqYCGtfNb9AhcRXXjgZTa9yPJpuY8rwqv9NxL62nc5QTkBUhvYmXA9rvi5xFzBsTAxfzvXXwES",
  "key32": "2VARAK3DFGwhpnVdcevUP8gFnziiKjyUj1urgXNzCDSo9gqtcVBJ7n8WjrkJahWeLiT9oBu9NhM7eCDDh5HpmiMo",
  "key33": "2spQn78R5LDSN2CozQ8nVtSCkVcPkW3ZBW1VbsD7tuLsJY9Lbw1UQZbJPfZLUL6jZLrMdKwzdy4mG649GhRmxNJU",
  "key34": "5oTqmpa89QtFqaEAax5hijy3TdT5kWBKLYBfQNKnKn7K6ibkA33x9R6Q9Ckx68UeyS3b571gmcT4wJ9xJydQWb8r",
  "key35": "56B8XCmyBaVzdXXHZyPKeSesZv8taPyGtoyc4rRFg1few29wUhSC3iFQt2eG6ypzvXj2o6tPyXCthsA3rxXKp7rB",
  "key36": "263derihex7Bp8QagiZhHMJV8WtVAGHdd8MHgbeNkhgb4SEdvQtcc3Zd68kXRg19CoQWn3YjdHurLCHscEqVCHZp",
  "key37": "4fQhwEuY9mbRo7SZKtW5tww8i8NWYanqiN22WCCye6qNMwBGHZkCL769sfMZ8NE74tr8t6jKQdYNGtGB7h4kdJ7",
  "key38": "NLg7KuvVsiZjL2KSksG7eazYypTfQ5wzTbGdZtvtiFQy9G2KQudV7XRKjGLXvgjhLWVyLnhZZuSo3mJucgiZMyC",
  "key39": "5TuGQbBJK3sdD1Rx1GS37req2bk9PA7GcWcsBQ62gxUHrgmyy4GB6J3v1kVqg1NYS5za7A4jX176QP2t2TtwCHvZ",
  "key40": "3jLM7BwGHZVvU6YrznTrbsVRiL7NwZjVpYUjUyoQdYYpccjKzSjPXDv9gLAqz6CNfUZ6drRVs4ZC9i8HqvnJBBnv",
  "key41": "43hbYLN5w3yJxKveDeRA3RHJw3QxZt1JWHE4CZT5dGtMm5TpQwcbWvbCrznxjBfpk7knkbWjHAmWLaDWdHSji3dg",
  "key42": "3FUKroqX7MhHmaWbwkbaQDkgc7ReATGMhALrMLeLZFyEpURvSsWumXJTUJVfMYRs8FBqSeECEVFaSEKFPtdwpFUd"
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
