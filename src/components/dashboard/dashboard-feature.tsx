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
    "57v8NByofx8oKKaByLB4voMqYEhFRfsYBs6ZYqgUiZcmaVaUcmsyAAuf8JjQj19gicRMXAYrzdFSdWiHHEA8J2u6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ksi7d7CwdhoxbzdyyxeDRWBC5Nxpicr2Una2HDMUmyi727zvV9uhX6trbEsHFuRHzGHydqitQbomNWWXUnVtjUF",
  "key1": "ZXJpf5dVZimwDqcBFkgqgbUKgmHuC1nH3TzJjs5GTwK5YN47vc9givP47hyFQNKynNcpaYZR56tgwmn4eCJkiJw",
  "key2": "3mXPNCnJ9NmCCDBxjsZFTUXkZEymawPvCqFoHU84orwUj6THKRb2jGEz5HnAWP6f8L6HA4pikdcnxCY3GZSjgJy",
  "key3": "33HvcAQHJU8BbBb2KjLgUMDPg9cseWD3UYAnEvaDpbEEYeDHZo5u9xgNs7FuDQTYn9wxBVi9vW2TgMeKzrTSNKta",
  "key4": "3duAswpKYAySMUrVQHkjVdqF5mdMg8XBuZ29bsFoDkjEGd3UzDMYnMqcLswEkpvB5STmYZWmxwkbEkVz17hu681T",
  "key5": "4w5q4RJXEcf4K9PSp48dWfLtLHtXXbsiWnC7yXN4GzGDjkA6rba1u8ZAKeoUiV3E5DVLQwkVDyQAhvh4k6bwte2F",
  "key6": "41tQ5rNb8qMjedNKgj2C18ByRnEJvkPasZMwPmLGJtb3omNSDk2esWCvSrErEQfazxPAMGeb1pUrunN5dC6wq767",
  "key7": "2xK6foadPBDwstXqrCRJYvHepBvJJgZfnWT2cJdP1xm5tkaoCJW2ARCxQ1Dn4EPRx5yxPriWA7LaKM5sqJTWAZnf",
  "key8": "5C2qnwBReR1br2h2bfvPQnYdm7z4UaiGcBcGyAK2fKPhUzHMDzv72jtvYcjyaecpXhNAorFy829PiAQJXTPzUmm5",
  "key9": "3zsLnEEzf8Ea62oYNTF7QSWhghUFcJZwmApZkBmnosGrW8qd65dTcETAbPc6RQyMnJ5LMPLBWZTg8bEoqdgm3Piw",
  "key10": "4ame5nni1hMCuW15fZH68EvgrmxvbkSQJjeK8NtcbSsSfGPASugeixomh5u3GwAveGRzGwFXAjakn7K1fMNevNzr",
  "key11": "2cjzQxRnBTZkghoG7TkZt6uC4RxvTsC1zAa7ntrnuuUsDoJwWnHSgT47ZvZ129Up8S3iKKpf1LdqXvysPD3j61zb",
  "key12": "3TALTdpBhFB3egknYHm99hLuyv5irET4M2ULd5ktoP349M6tjXiXiyzRGWVvhhY7WpEdW65x1K7DtQMyyRu1bSbV",
  "key13": "3Y2WEtseGgyvVL6X9yBxbbEJuSXCMTsMKQ6TPcdJP2HedJv5YDxZ5od5oYD57NLR7p6sq9UG77Yrt6jE7Z5C3Uiq",
  "key14": "HjBWnUfSDvUkS9HQK2t6g7VtpX7VjYVS9Akd76hrUeZKRXxYuc1V7vuXbSFYBgW4rpeJNQppw5gTJV3mC5K4rcy",
  "key15": "4zmL5fkPSqM659UpZ31ao8PUWbqoMXZWuYWw3kDxwNMqYPAmMwj6mFefuZjhceLju72JAdwAyp2KiKXCPNbNudqg",
  "key16": "44P4pUdsvUFmb4dNDiduXE1WN5Mm7joANmZbxdETYaprQSk2ETHErpwJ1rRtmGFE9F8Qzsiv3vL43zaEPSrqh991",
  "key17": "2BdJtQgmkoG4m8X4pRiZ3GE9tUUMcnvMz5X6q58J1siXDrNQ7W8sny5Xoz9oFtiDiNMv534UTjCCViPSJmyggUc6",
  "key18": "2YbAwBAsK6viCw4G3KwybnZDTu3L44YUU8ZYQSyRdjAjPvN6s2wLTMPK2dSUFW1MjUMMRk5sh7hE3GthoSQnNCh7",
  "key19": "4jGaxE9q9SYi2UaaNqpjUoTAZNN2kDvL2ZyYUcL4P6GkTmRQnbJ5ZttUy5r6Jv1hKHZ8ypkbnRxVzZU21bPenP1F",
  "key20": "5cFkCzuN2SJnmeVDxBUUhNWUEHStGyAwXwsMWx5LnviuKcU3mnLR3ggWt62awqGzb3q2js2dWt6mna5YY2uJWDpV",
  "key21": "4QDSYjizWqUGiGCzRYMmNSgfFTwcZxMpxFuo9rjXeJuKdDygkgDNPQDskRmLSH1eobJhW1RBB959m2gK3k9Q7eoj",
  "key22": "2xxRnKxMWCpXKsXuGda7qeqrFh5Naz27XUPfNSH2BkrTXsVb5BGRA8NqC8nNof2sQWaLgyWLzavHGtGdb4gMoRoj",
  "key23": "2ZTV9Ag3yZj5KDDGipkcaA6LqkX8uPQb7wEs4rkVC2qBfjhsbBEANcdN5k9S8Vg1fEpy7ywkacV94QxUopGpCVyz",
  "key24": "5TUbVjmuVcU2T9LC3Jnfme9bFmwoyWDzBsWgWZ53TxNAnLAdxZqeNjwS7Ks6wyMBd8TWYGgTCk28bpVjYpjPojHv",
  "key25": "5163pu4PPKepK9bbkRKp3iGcC7feC2zGbGH3cQoftJSRDw5C9hnuChzZx4cvqQF1MfywiNMieVBqS9BkQjUroeXi",
  "key26": "3qcLzNWJcBmR74LvzfyMAtaZoUjBk3etprdzd4ZU3SMRrMHKSh1vi5dqjm1g3bQDTGBhibPw63P8QhtDVwjjghXo",
  "key27": "3BesnuryHreSNMpUTfWRYqKLAvBvu6a67m3EgcbNWfTPz95Erj6XAGkmDJQWidFpEztHXWyxJrt9FvXE6DqPhhNE",
  "key28": "3vjYamukJf7y7AR6ccsvDwCX8TuiswvgLwBMZutiRj5x75q3pD2sbQVABmdwXNdH21SgcMerthxx8rbx4nNSDPX2",
  "key29": "3EDWEmvYUEmiNqjPggirNo2BVwxtt435XqsWJu6AjGwLCPU41zdezSmNm1u5XoQBcTfiCDhMH1FZNpPaXw3bRuGC",
  "key30": "3LS5vyzYvWLy8KSoQNw8FUmHDLRD1bYyagsLAvoVeMxGfmPPksmX1p9fmvVhLVdpeeePxJYpRnrqJWht5RXFcQBx",
  "key31": "2NFpymDkPzFuEgTpkgmNj4SFcUJwDUZnxnFfp8r4sccrAwo1AgAShfV2ahiiQEaeac5JLXiG9tZdsa89A4a1Ymdp",
  "key32": "3bBqKuk95hNWZc1hRwtTWunqbR1eWqcycMw3UPLzpjnusHH812VZb2D4buZ5VLW2NVe1zK2eJ5JBYb95aVCesH1",
  "key33": "36Fzk6h6oAoW8B7hraXGQ2riZi2YE1YkMvBzxqGvKdFbJ5BSKhxbXkZPdZ4hKxm9SP6tFakRQDcnhzHuEUXY5dr6",
  "key34": "tutmdiBakLNAne5Hu39yrYHm16hFnTsjF6ARKBYTWtD5VCiWfzsLUxgpW4mPESKchgdBywCfqTnmVmsXFStNjRC",
  "key35": "5nQKAvbuPkEGiaZrHJBp4y264hB5QAfwUVqTNBarTw5H3k3h7DN769w6ufdNeYMtELJfb83qVB56cBxX6kuC8pqD",
  "key36": "2vMk2VGf12B9Purj6PavMe1SQkenC1t6KwwfbMqQxv3af8muLJfJqQvh56roUtZ8oYKY5zDaorzzaLNcxkDEKmoo",
  "key37": "5AA3M4W4uXwX4WVf7152b5Jk2KCgChhTKa4fidD1Y98xjf2EVs75FmjN3DsHDwU5sPfgs5AqUAWXmDEe5vJidEdn",
  "key38": "2y38cea8BDNoEkNTnHpot4GF5v8MjoghxtUKoT9NfZd2ktJabuqDcT6Vb9VCmreEUW9VTfNqTF8zdKeS7dJWMsBz",
  "key39": "4TxGWzeLZDoN9fiQ9J5xUftYBM7Nc3oLj5KnybctDKEY1vYXFT6bJr3mH3EzpsS8sz2taNUz2zG6nZs5ecaUerFv",
  "key40": "3X1RCKGzXYCndBq74cHTL6LcQ3EsC8jERLYwrhaoMGh35GvjLSPf33dYDbaKyHwnnFv5Nbhxr1TKRVsJztx7tFsA",
  "key41": "5X3BYxH6s8d6VEVEX7kQNvhdAh4zN19LwbQ5nAwK3G47P6oAkqpKzEcApXjRi5vrspUx6jWj5fNb8E3RUdQS97yV",
  "key42": "23X7mbjrfvpnpDV2DP6FmRB5ktkpnGP1T79fVn7HcMXUowpqo5VvpnYFwUWyo9ae9ZXexsyQXscrgz4ptMr5PSod",
  "key43": "44SvVBkKVziznUG9QiznjNWuBzGQcPeQkBemr3xcfQa4BEe4xqFhT8KhbBqXvgBiscAtdQWgGiWxkB57Ty9ZyGy",
  "key44": "5rx7ekXh6TJ3HSeBeRAGMoWyHNKf7qeoNbxGpQbgccuk67kJRrbEqu3wYs8sLXbd8YLqYBvgunG21TcHbiMD9ZoU",
  "key45": "3Cv1Xo8aZBi9KdNJ2Pv2bm6MXPYUcv5xJqyYu2vtVvZ2KxdExzupFVi94HECFXSvGXVi6RTLtNynL84JUaV1ikMS"
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
