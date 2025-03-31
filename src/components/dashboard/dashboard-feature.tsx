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
    "3wMoetakwKvtZXEVQt1rER2BAEhRHufQUwmeLA8PACpKtRCADeAB6RaVk8EuJWsDkBDHpL7EWPHw2hx6rSnGriTw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sb2v6ftk1qveYNn4yqPWgQNLEYhEZcVKzpj3kMYQPxXEbqiKRL3DGKpkXmMZ3Eb6YorjTEhCMRkQcpFcFqW4Cw1",
  "key1": "D4CuHtBVC8HbaFH2DAD2hR8kStiFJ1Zj1t6yLUwKALRtbpPXLCtPakxPQ6nHLo1nYwDb2xd2jxPL7ntUKg5vdZc",
  "key2": "3vYJzvbd1NEPejLbJE3S9uT5MuVxAdphsoaQHRS4RF35FVC1nhgHV9XXNka5thrwqP7FXv5bTzTzcV7vH8KoicG3",
  "key3": "26CHku74RexqJwqpwF3Tspeqg2owLoet5aCQQjUqdExD9HEwVfDBBUGjhmZYY8VnvcqLhCFXNV4dVKjwQ3EdGfpd",
  "key4": "2p58mEhXsf1BFG4DkZsP8p4XAWZVAWHtABhNc6KCH78rRRi77Yn4hL5eGJf3JQdFhNU7aLSn8zPv445dLq7aCEUW",
  "key5": "2JHuKDxmc6oVsyqTq2uSPVXJqpEmu14kLddZBsyDUMk4omVEHSmufu4xHte6WzQvoRALe4HtduRonx8u7V9SPSBL",
  "key6": "2TLYSr86rPiRvqnrrBeFGxLuSnmz71pNXguo8sY6vjfVoMgcFwMSFXxSsZrfQQ8EsY6enHbyLZmzzMhGUmr5ptXY",
  "key7": "3dKR9vZcYXVbbcqaqeVb6fkW2QGdQNEVqfdd9QvqxLhFJb1JkZtn1bgAKLG1bAr9L4PhWP6RANtvWTKna79WneoG",
  "key8": "4gpERhhvHqzveYHgcAc1oStYzN5tsjvKrPoYxCRN4YQXxrnHkcqrLaoUfckV18fCtCSACyJF7K5tjUWiimoJckZ",
  "key9": "oQRAWiYUXXUUdF5bVPMiR1AdPqJKau3JtxomrcvyVSVHVyAgA5pCmHREEGJ2nopviMtgx43x7wAKvXVKGrFi2Yg",
  "key10": "5KHmJRUg3qgYXNyu7wbgeV2saYx1as7tpzWLywiuuahxoowvaH4qfA8HxDtNS97e8NUqThMomV5tCfv4y3EMRj4v",
  "key11": "3VhcNG9xV2sgLw3pftoDPwNSrrseLSurr7s9K1pNc7XaeZHdixoBkpMv5qpePgtLApaE6qJ9j8Saawoqt5CpQf4m",
  "key12": "Nw6NxQxXuJAjPyE2bQEkYA6rzJQPnTmLqQqeyWzPYn7aAouBiP4a8hs6prW2XW7UAwadAA1cTUYK8Bxu3ZWVa45",
  "key13": "2Poqy6CzWZDxkMxH9ZpE2Rniq26xfaPfhZvFB5dTVRwiov7fekJdSgazZp69yTSVFz3QuD3D56vyd5vGa31gprVb",
  "key14": "468C3p1n2LMAzVWCaEjV7SzTCpAjvgCdryRf4cVmpdCsuBPVkGJYAeBrBVaYNYvEm4HUpXf3LBKzsmR5qToyfsyr",
  "key15": "5k3vssQ6T5V1dk4svArYjcz9x6D2D97T6nR26dNE2XT9vjGYHRG4rQUvWZjmyqmpegJcs7iNXXVx1sQsk2aHnhGN",
  "key16": "5fe93SawgYvnz82B1waZpQZVgAnzr3CUk6YpDwhX9iPW9EodHpJk4UHKLdzfBXphJyxrzpjLBPC6tXKJA4szvrAw",
  "key17": "5LhtifYoDD8CPge8krUwqnsPa87dBje7iTpje39rHxYAe1hwiJWfjSyZMFBg12BUVQpgAUqb93y6r4YmccS7nKY9",
  "key18": "6CNQniQRDviS7wp2XSbhr8nZXW5NSFBJvE7apg3ciroKJ1aNS7GHqdyVCxUkG2LwqjqhpVTugCYiAGuTYtF7qQC",
  "key19": "2U7d9HyTaY1cAgQipWnzoDTidNr2Kq36TH9jKJowKNdaiRWXD28QP6qvMJF6pjBRKhbXWEPWKHDJM8WvoQfh7jUH",
  "key20": "WbGNiXGZgy6UZzZ6fkES8yLAT2LSjWVuuox2rDuaz4k335iKeSM7npm2efzZy7FvpdMYngFeHrFqFbfvA2zJz39",
  "key21": "2ELJScP4cxUnyBuzK7TZCQFWSkq3ZBM3ZGBaXPY6ussaGJDAi1GQzFfMNLHgtAZ5dKHndmamYQjrgC4TbYykW4zB",
  "key22": "aT98yB3pPC1zeYSMbT8cxWLK2ybk44pux5LK225aFogT9byDXtY9xS6VSFNNnYJD4M1dHKDhYsRhzUoZT4zuxNr",
  "key23": "5yZtmUfXxqhPAaakNHCsx5kLnHMPz7QYcVdZGweMf7U9teJKZRHkNo4XoTxQxjbjMPEMiZPKJ4nYND9dNmVEtkdZ",
  "key24": "2FNAr3wU4DANXhTxbFqu5UXgYYSy4cXsRMEVShFAFsVou76Ygqt1TjKZwSKnBwpZTkoYyySH92vuWapyjGGQ1Wgu",
  "key25": "sZVvoFVguzjEUpF7NBY9RwKk4HCitwEMdUzLnmC3LPn5KoxzBXVjwaMDGfXwSZ1daEcNirue2Dvv5DFMxHx1FKL",
  "key26": "258SpHwymD14Xa1ZbeJAnSVtvpdnLcgTuQC8UCBoaMjYnFQtY86WCWxiLUC7q4GAfqemzVv99Nn6Egx7D7S1GBz2",
  "key27": "538oRrB3dmNFqjfigdvdiq4u2chFmPCpt3Eoe5cXJSXctmmZPBmyvhiHfMPFon1yD8xMtDJJKhETk2J2z6zfvmQ8",
  "key28": "3vyaGBdJyQvUXoMX2WjHoe2UVyMKxSkjLvW5THiCrQLnvFrLsuGXuidm7t1MNHqPTJ5wSjyxhpSYwXAfMW2PZsMN",
  "key29": "aXJY64dM839Z8LcfbJKKWAnoT1UTSNhnVy6bAKjFHPpAJK5FTfUZZndWUTC78fA6o4H7oSoq4DyRPibWwuHyoDZ",
  "key30": "63XGzNjdLxy5N7ABGSeWVHSmrgq9UYHYzYuJAr9zwgSHK8GqDR5bEJsTTURPB173drFre4eG15T1pEBtQrd4h2k8",
  "key31": "3szg1qzQ2GnhzRCMbBKLhgye42UNs813opzhn1bqFLHMbYKuqP6JX7cLgprftEec8KzPubJBZxCxQ2piH35AtmEm",
  "key32": "31BqvnwZvY3fFoNVUumihkK3Pmrn3caiiEfKNbmpC4Lz4cMEaNVagTJnTW1mtRs45dAiqY4qf9ZjJo3o3rTqaTZk",
  "key33": "2EK2Su8Y1czf5oZJY86ML3Zzis1M7fzp7CwNJat5h1mdTwCxcnDnQWCzj8xKadRYi8au9YkZCGcUL4NdSGtHPNSn",
  "key34": "5YvR7htskkP1Cfd4ubbpXUsinAPB31fqCxmKD8Wmzp2QrdcSgauMu4j8GTNUdpEmUd2XAJh8eVzuF3eqXDwLoyQv",
  "key35": "3Gi195o1jt6pie8XD8sHhr2TVXQhFJm7aR8Wgh4oTeomzS9juZrjS4tvnmQSuvsE2ivsZbdFyajsuxfKMeCKqj3b",
  "key36": "64AU9NYCAZoZWLX6u48NEPf1s1hupyGcxKVbFUMJ9DKwBJScamL77kC7j5CBQDsKkU7pQim6A9P2KmWywhZSTrsm",
  "key37": "5Xx8e8pRRrbRgmMTFiimNBZQxkqQsSDxz2N1YGUGVcrLD73V3pcJ3fB3877woUbaM7BMPpd6dnjFhYEumYAmSnVy",
  "key38": "3dBDMytyoPxjHPYrRDvTnu6L5QLn6AcScJdfgePfzU5RqdJf3w6Sh9jyKfiEpX5u6kcvqW2XkgYDmipwpLQ83raS",
  "key39": "gggs3Taw1Gi34fNpwiZx3WKs2ZkdBWGAWXm7hQoGwPZPC2LtMaDPRSSbjxvZVPxuHS1idNDUYZTj3gHhXzyWZea",
  "key40": "qgXRDsecEeXt7NT7tPGk1cp6F4YmAhXNCRHwADm5HaNnEQDGqaxjVveM3z29Jg31kzwQF5dCwNPKGNyx2bQ1sje",
  "key41": "5HbrmYXcdrrYJiCcixXSHaaq9upoLXG7DeaotAABZPgXYK5FhwDdeRYw5PvFVutykTNDebVXNZwhSVxSuGNE5UaN",
  "key42": "chuHSEsWHH1xDHLcFah44x3CYaHP3UxmiresNTKrJTqeMscon4FTXXphhgBaswdXLtwThW6Y1pmRYEdDPcSDeUi",
  "key43": "4zbYWeqiJHH7AbAanLNiJd763SRCPi4ZHgN3EKXF1tCsfs2CPdh9N9rE3Vn3LrZ4XfwU4zyTfGxzw11DpAjSrNLu",
  "key44": "54ySYcFLB5GDEGeGcWdXYsguPBLrLpgbTvm5pqdab2DDdCmoJF8VKPXXWT1ycENHSbUx8XSgJyGmhBgNopCeVhkk",
  "key45": "4tTSaiW4jXPHxR7b38Zgqo1pTBDSHzgW7J3gnziFEe9ZcKmQJvWxjaAZpkXQUeshjy6AN5WMPpeb5rq5X8PXFTeZ",
  "key46": "3LgdbtKhfgAKymWnLA12DJBinVggjaiNEfe1Y2cp5HXcoM7EPfhgwHM7BDQ4XNREpyJQDu47zpZsp5VTMcykjjUi",
  "key47": "3NhdkKHkzeChhdEg3WVrDpfQfRN5WWHMsKofJ3BU6Lwo4VfNbaDT4jpNpa8tbVXwUh7GWhaMkhn66otoYs9ZM7sv"
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
