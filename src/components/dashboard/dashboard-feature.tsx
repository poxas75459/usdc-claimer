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
    "3yCAUUTXMUAWyb4mXXZPpb5UWAHq4o5v3pRurDccW5iVzXAsZt2mkwqCrUVzr8fhhPHc4u3ALUwgmHwEoGHpV4YB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FfQKqXLFEVe423EFqdNLF1Q6aFq2VFQhKTnGFPbAs9HCbZXLW2Vc3MYftmax57NGF29TMVnSY7hRNHQW1woHy22",
  "key1": "5ziN4cnUoGo4z24pDPBTMXZqAQuGjfbQXDzkFHhZ4WDqHFCjJwA3gjiDLjVh3cKTkdGjjNtqPD9FwXPbS2QMBGvE",
  "key2": "2BV4FvuBnEsH1Js5sLwJ5FTNFcr72QNBAaPADD4aAy2NFbrLRvuSrHSjVLcZBARuZvS5JUE9opgUMpc6sLLf35Qj",
  "key3": "3rV8wcghEVncfX8B7DU2A46HU8qBTaYxJcpws5uJonduzcfogjDkHPqqtVdyQrgGNTgEUJv7WnmsevasQmtVdvpj",
  "key4": "3vmyeBiT1hGW3nAQuh8wx7E4W6JqDs59qEGKqEoX8cMW5YYQmaJofUHQnmmCo1i9hvDEUxe8dvX16UHSvKN4QRke",
  "key5": "2ia4xw5Tk6epoAzJJ7nZEcthbDoCHiynVSBrB2TUHkpfmCxDba1ycQWw7uU3t8f9zKM3oBLyQaK2a5NR3mSVjxaZ",
  "key6": "PNVHMGpgtfVfW8e2nHc8rRYW1vJFykeGLjA2t97fq9Cr9x69iBFcRm4k8QMwziRWzzob38qVQaoeuCCfJxWUBLG",
  "key7": "5tJBpfhSThqPmQXFV9VJ32V4bNnnS8F7d4GxJhph67QU4J41mCgKvDWdTVc1JTzQUB6xE4ytQ9Agby3RaPRoAVmo",
  "key8": "3hyCEtWYFdZyPkMVzLkWnLJmv9dbC7Gw5ZwBMGVZ1b2btk8BUADhn4hBBjw3YFdHfcxA2DJiRYx2ikLbnMABXB3N",
  "key9": "5dw9LMrGRtR4tSoeSnb5rPFm9FVvBACW8ipddCFmvD33wNsLfrwaubo215XDGNVoDWMAcTR5aoATjuxyfX6K3WR6",
  "key10": "5ZQ1kdL7zoQrgK8vrQTwVGAwjsh2R63vXd6mwvmLZW5GRYPVfaP86PmoYRqE52rfbR1g7bGgjXudF5BibmTcaBjf",
  "key11": "2fjxZjbWYf5wRyJkDiqLGUcDdmsm9wB2qsKrwniVihB9E7NbgWhjFh6bQZ4cje5NNAUNH2zdqqJR6VZuFrQMykpT",
  "key12": "2LUYjFe7PPhXFqrBiJxGCnWwXBh1sdM5gZy85XzGLCPAeJptxufBcKP8c6EDXPW8DAD8swtG8TPVd5AznJMZWYWM",
  "key13": "G9RbKQ9MGRXSAh21Vd1k4uorQrMc4wSCCSN3cQKmED6cfkkbvewKzLQqbZN8DGFSKko98Fxo5E3hg1Cg67cDJ4S",
  "key14": "n3yAB9PHv1tnFRNmbXcmfS8UjBe8MQ6vhhjAmYfwmWwrdanmcYf5DGM7b1apQgnUo2EQqLjh7JwJhSaTS1en1ho",
  "key15": "4iAVDtywnGf979kJEgfNfzR4DUFxYNthH7YtDyN8h6t36sd4J3vpENmXQYFmJ739TomWShYDX3LdVizMVmYzvNAx",
  "key16": "5dNGuzvHekyCTZm6rJRe7vhojurSxKFhL956ZEr2AkuRUgQbEyq8vJBjLQ4TAVRyp6rAej77nFKFCp7dykduRjHN",
  "key17": "2AopRZZFvS7vYVufkqv4G1GTvfaPhhCGZBjNXpxigfAySGmMQjRJuUfjQbgiLfTEzQbEo2rkruuqpVg7dPqqfVC3",
  "key18": "7JB88xyMrebWk2MThWiwFRkZn1KnpWtwYRKLpdCzs7PfLoZFngg7V3BrV2janxfRxMBSS7s3N3hwwgVb7iqtLqi",
  "key19": "3kTmXpPnxs9RcjweAhE9KPFroMPmjWNHFngZcwyT5yXbvEbwyzA5w9tSnskAGbukzqLiEPoUigRh3cyMX3XsUjWg",
  "key20": "678zLFGt8Z3gA8ZQSJkxLM4pBbxjQMThEnEtejbSvrkvhkGY8Tn4faKC2Zupw5M8hEohB2D5m1SARnTgjWpijd2h",
  "key21": "4hUu8fQck42naf8uHuaq6CEE8BobqMVX9QVRL66aFhLTjhY7ufYGbVuuTcDrHFrsMtUcj5xmcrw5uKExJLTVNx1i",
  "key22": "3yjwyzw5oU4uHMArt4BgjcBFZWvL91e5LrDqWeSnmZPeTix8SmapJfZgskPuEExxrdoF43DceDFtQJpjBUUPstz",
  "key23": "4eAZBi5vwVxMN6kqgGetkZzq4NBDoQj3RwsgV4vyKUDsXJwcRbtPS3kPZSXK3pVLFvZA9oQTXp6Ak41yEpMhZBHY",
  "key24": "3ZHBTficbp1so7ZWfZdMGdaiML6Uu3erN5zjccd6A5SWFYdndoKAyYAE4Licvu8UWMraBZUGJNQzgHJ6imMtuRb",
  "key25": "2PJpaKQ4tivU7PeQL3jijToeiUVyc47jLkBCZpVTY5JennDLR9Kf4iuNrT4q3sQV2KuyPWwGVMbJmB4juuGaix1o",
  "key26": "3NgKkRsoTDPrrA5J8z99yMWjFGFztdDZDVN53y5ynuMNDUjMgUpSnGMEhESMb88rNs3BbgDYvCNPzAdpHfP4117R",
  "key27": "usrF9UobvkQYsdM88LwYefjuv59HUPybARRek5yRi2zch7NTkLKL9i2sqywhFgLE5P6ndMYiqnjrySQWmGBYi1b",
  "key28": "5vvzYZ1HQN1dpaJ6kqDnYYa8P2obwYTAzEJkYL8xQvsPsqtJYrertQFtNHPhab8MLxTLMxsdh2271cntJYjwwizu",
  "key29": "XfVBvwACrfshgBH3prfpK7KT8hKDBCfuCjqJHMgbSsqvBvp6Qoa2BmDQj5YmquLgAwfkx9pMUe6cZVo5TBxAtGU",
  "key30": "4NEbwGFHDQo22sjisSHPnD9VERcRXHY41rmJ2J3bmdLRQsJFhwt9QgSeJpHuGn7Lv5526vAkFQKSEMrdsrD9Uy6V",
  "key31": "5HsE2tKCgnqPS6KTgU7eYFa27RZsGeFqukcEsCiQa6vwPqUkcByVpC78LQ1jpLKXvwCFxihrGs5r9QzMNjNHnarG",
  "key32": "5AJBxqf17o1iNNRCJM2cwekkzGhs8jd2FdpMXJSHyMhWizcrBGmvE5awDYRM84EoWoZFoVvZhURUouFvqwGwtRmY",
  "key33": "31yprpFHPpRxRjfpwGghEm5nrnZCcijDBPw5euLvinEeqagWfPx4abcXSWhJwWuDZVmS64tH5tKZ2nPnHwf6znin",
  "key34": "2mHg1qtKPuGe4EraHk66tTtyF1t3FrTZgBkBiQSNRLVvWk13xPEEK71TdZsZ4AXTmD2PB75DRxgveGsmtnhvcrEH",
  "key35": "3Wy7pLYgS8ctHaj4LnUEePAAGvj2YwJQ4SjG6qoiV7kr9TqqxytWjv2DuNGYu5KWsDnXYjBReujMENLPaNey3Ap1",
  "key36": "51hAe98kCdHKpipPL1MfKXeb7hPfBGiUCupYYim8uEnHwkC1turhBbKqFUGMt3yyFbZirAEwfbzKZNj9qDWWckGH",
  "key37": "32MeCez15qNJNEhe8yUmvPSawrEnDqeT4abBkm1MACVejoBvgg5V1bTiZvh9yzPhnjKPWLNQUMfYLc7U8x4LjPsG",
  "key38": "4nZrVMZRjRHJqt7wLXvkFaRcoqsWAmPHQjGLHUAGQnvrNjBikGYgwJ14edqkb6spZAhL8t6p8rwwSHNyZQR79tFf",
  "key39": "2s5cnzk5VfWNzoFq3kNKkpQ7Fy8EvJoDLRtBvaCDqmgjr6dXb1apUWHPWTDPxb6Htb5ceS87fkrWwYPVWipWpQ9h",
  "key40": "5RUV9zezHZYNGTo3YWqss7DxvHdHJGUZN4UZYww7evUg5Fyqas7Q7oariwNNLbq5wBARKwPFXBfuSC1VB6BhKZHn",
  "key41": "4gZ2JSPhWK94PMEXrgdFjd35jto4uC1JoEqMgxobtvGCkHjaL1cLgH1A5F2fX8mu9PykeYB3tnL2fiHs6ztyK6yq",
  "key42": "2qzZ3iC6yiD9k4xhXxvk36zbuaZf3WUrYBbMJWwsR4BaJMvwXrix4MCDMyjKnKgdACWzYpdp5n8wcyASRXCh9bB5",
  "key43": "4MqxsxPDQLrdjCK8JJyPHh7Tmud6Ke6dFUU2JCQ9LCUxbFrFXMZiAdMa11V3UkKPHQHqxdnE3hoZo34hbAhs6NPb",
  "key44": "2bfftYNPvYmPk9qC2puigEdv24XAR4aS37vA1pRThAogVy5noh6A6QpGGkY7i99zif9HA3ntNyRU9nB65t1YVKCK",
  "key45": "25hKV3zQVUiFd5YKoyr8ZLrpJH4vDfuuPHigkxwwUr3EhXWzDrKNnGV1VQPPLCPYU1oUcVYcDtYsRpyDFh3L69ar",
  "key46": "pM1yau3MW8zBHwXXqZfQDwfuyG438gZEtzvLWSDXZp9m164NpUN6ogUeaWs6vVaTLFwqkvCah4o2pmnLEEZL1GW",
  "key47": "pqywbgFy9fmZUN227MiHEmSTaHk4sS9HF9noMr5yk6P8F8QB227vHySAaAY8VLN2SFGnJyhSuRDuBiwJHsKkT8C",
  "key48": "35hXUvqENqutjBaH6cqEXH2Jvn9aJ5HaYQ6HotmdPKK7N9XrAKsH8RbQc2DWZGh2D4fLeBLxb8wf4yFA4dj1EQhb"
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
