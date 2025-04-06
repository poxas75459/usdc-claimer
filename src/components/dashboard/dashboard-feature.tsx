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
    "5BPj7tMysR6pa5ANxWxomsEdUvEw18CgxwiueDFdMVSVDDtpT9H9qL7zJquFyguGyBmPhCRWV7GLJm2QXt5E965g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GVtmuMoxauLAoiNKP3wbnngDsX4evYJCGJLyw3abFqc8jH1ai3R78hjKKbfMGfpACzF84vNDXzVvs9ZpuJZWK2F",
  "key1": "5iJTMVjm1bCbShmSTBPwMWLUu4YmWJDVSuttru7iRNJMvshQPMQmoHyC2ecfmigezyxvJigmHZsj83NjwxrEdSuu",
  "key2": "5Ym8dpZRUHMz5irCXieQ2tUuK6QCm9UDh6RS9k9zwNXZnnhERT94sCJRtPAf6t2B1VTkr8Psu1PFWiMRTWu33unx",
  "key3": "2iiEZs4r6vpZXXUgkAUKtszJ4v3VpBcd6XFq23Z4EHKr2yzyprnYwjTXimR13AvqLRh87oybsT7j56M84CETjwR1",
  "key4": "4KHKKJvDr431s9TVP8jZSKwpooaLUpWfzuXN4WJpjkmrPQUEWamsvwYaf3pkXD5jZuLdwt73iDoVNHv63hz4moQs",
  "key5": "5ydpQq9siaWz8DQSfXCsFVrAPPCfXMsYnhz2H8cTyEqKWmPBV66ugq1YUph89vims2FaFZn9BP93qniR82KtdoiH",
  "key6": "2Mbby1nCvuR256dr8DdU59p41bh2fNJqyf498TqL9wSftGyQi6WTQb4zcy4stKVJUFJMTZSsNzG6FLb6yQLu5eXq",
  "key7": "4GTQktGJjhEn1dPe1QgvaF6738SQuMn6ZoWs4Y456JokFEbVs7m9785bdcAKTqRjasTanJmphBTUoSAtRcsJjJY6",
  "key8": "mrhj6zJmgoQZkME9ubnSiNjQ2nVMJk1NUj3bq9rXDKN15DCr8TkQUUu7Z2wu3JSJxmtJXudgk8oLt14xBQpu8AU",
  "key9": "4r7ffE1HGyiW1eEXQvAHMF3SJjynhjr4rY1jb9nAYAN1BrmZrsoeNHj72foNfhKxGUjcwKZP3y8BmacocxQD9x1G",
  "key10": "dqMxVYzQrkA9MXi5k9xxNA7sXNhzae5cW7CC1XeKAtWsT3agUGfvLvHZgMCWJ4xkwXXwXEgKG1MAuC9NzNENRp7",
  "key11": "24Y6S6iX24vnSgbWEyWgsFya7cvyDDBQATjWHP3HtBhfHXp2K7bQ9JPiC6QMVb1vBMhY3ThuSF2EDt3fCbhaLEPK",
  "key12": "5onh9x7r2eLkWhHsrotCoVNcvNS9asMEa4PG7zLq6MuKU9HgLKfBzC2d7QRWn8mRt4yCus7gMAasQWP15V4Y3PJY",
  "key13": "34Ydm5yJPTZkkM6eVK1fiNpBqZPHWiweC5RZSKbRzTwtjXjoVR1wmjrYysuM7RQPH3Az2et5vhW92zA3g2AfNqh",
  "key14": "4koDM3fnpPTQzdehFCoSQDQeeM2DqZQoBPk83ccSDwiRcvqLbD4YyJEdzxpMs4z1rJpdLWR98GNhEEhSb8HeXvFE",
  "key15": "5fS3YEGK9t6xqX8mSrNdV9pMjTruDpSsG7nyEZGiuPS71XWRp5rqZsj2tGt6EAa7sgRtHDzRRzpgfhrkTt6DLddJ",
  "key16": "13vWFzNCZfhDS71tErYLkz43u1BRHkUKZjed2uHKrefuhrJDdFpZnLUTBGbB4EgfL8s7PwyxRzLcP2fNy3nJWna",
  "key17": "2AoNPc8jE6tMgtRigaciQRJ2uLHmidZq8DCC7HMxTUuXSkt6whd1KLjxTppFL6VXigt5YpmrYr2ywBiRdVNpkPKy",
  "key18": "22WkfZYFXX61AdKiW3vCBBPkBHzUoKBzRzx76Y5orBTYFarK64mWYYhyQ7jhc6Z3hPk4LBUzHrDKB5FxG1rjg88m",
  "key19": "49uGeFRF25qNSg7C49y6939vFmYkaDksVEpgvwUPUTkTHbewZY3CCeH2XhRy7aLA5QoZt7C28Mct3aUTRjHEddfT",
  "key20": "5z6E8Ly9cbjSDuyuHhvEJWUA6aq9vCKJ7PqyqAuJDpHBYop31YjqHSunZtH3xecKYM4TPM9m5LrseP8Zyu8Q8XJQ",
  "key21": "3FVps94yb3jkgMe5xNsk8wc4G3jfAJbLqRGEbPGe2tKDUTbhdE78ukMr4GVi1aGULkHmN6tPfGURML6x3d4iPaKT",
  "key22": "3B9MXmnwrmZhEtgggWScVCLnr4d8c6SizJYG4w47VLF4XTi5CNbLNmC9n3qZUgUChcML1Z1i74X5idKBPRGos2rj",
  "key23": "3SZq84Vvfw76VHzhZDJ3HJfJuAudYWXvYzatDCifVHACvEtYrV4VXuo5FLzoNvDKs2VJJ27Kgmq6Dsf4mSnHM3mt",
  "key24": "5sELZXF3MKzz6TmAaDqv89xY1kaJvgvGhSEAh61LomYTMhpzreYC1wmWSSo3byYA9vbNCdHtxKUqLLRPEAk7mzGi",
  "key25": "5nDiPcvCbFNDnhnZqtuP9pT7b52LvS2U6i3R5c46xStpJ3UwB9J8ad9etMDg8pzJqz9rf7F9a4PYFC8V2cEZkyDY",
  "key26": "65Eeb5RXMP8DiCTPptoCzHMqPJtWtiucQwyAZQ5JteACrYYAHp9PVavatPdnfBBWnf7SuUjH5ndAuqYNgyUmKJW9",
  "key27": "2astsa4Y9rKssko3X9DV4mxzMAgi3hq2rE2pE7MCYmgfwxTxFkY5KbdyyXMm3vH7zgofsX3iz72whv2YXkPtc3nw",
  "key28": "4baNccvyNfbGKbVRK1Ac66tjD6FsE5sWmFaQX1Vgbs55kDjuwN8af4Lgb3Zsf81uyQ8hmFATiveyiwGV3eMrjaZ9",
  "key29": "4yDaBph63BFzUDjzDTYgrtDALAUM1yRASxNe5ZqmMY9gu6eP9yyczqkkNQT6Tydd31SdkS1EPNMhzkF2fdVbSciU",
  "key30": "3pqjaxDhjPbYYzvqy144it9msDqMNBzxz25hYpqhJzEhznApTBtHrCBAdZPEVnBL1Z8H6z9NDm5qWDZsaMzyL3ES",
  "key31": "4gdDY7YrM3Zyhk71nxC6auLca24xnLTHEWXekU3Gssfahz2Y4Xh2MadHkbTwkthrVqwmYZrkvE7ckLmaEdKAgPo5",
  "key32": "5Lg2WwfGDQ6s9REbDmQGXZAMaKKBBMgzbfMq9TRcXgn1WFqx7hEpWhx5AW9eMNg75bTJgE6VUqFhpDgoQVMJFLE8",
  "key33": "2CSojhG9fwXc1rYoUZuSqw6SjqcSJJ6n6d4oCQKYL77U4Ueaks1TAGun24L9X3vmJawVgK36catzQiBMearTXqts",
  "key34": "2LqfRxqQDyfVxzDdtCvvGp2ZW528p6NiKbyU3uPi8wTwtemE493p5nC7sb6bAwgY4hkCNr1Jm3wkwR6eG8Am8jbs",
  "key35": "63eQmJEynxAA6UjRqMg6JnJxdZw2XgZjzs4QVsppaHiFUiwHrCtXz6vR8XpcuxAKkc61LTZA8tiY4773gxWsGVpC",
  "key36": "2dU3NPHAnYdMv4UKp2NRWJNyEH8hUC7gFCAX6rvWGfXtVbyvRDX9S935tn1QoAyWZLDTUEYUfY83RPLMwjEV19ZW",
  "key37": "3gzGbERSzgffdEa1MNuRsZHuvjwkZZcs2D6ERRRPXvTcFgKi2NKSYQTDFAZYpLhAcV8SEXMaj7eyf7p2FLL7G8bm",
  "key38": "k7M1GoS9KbW8YJFU6VdgHMN5iMq8nztXb7PYPdVkCs7f12S2FPzZmibaQvK8CEjaxDhYEdJKACcxDt6WUxZnH1b",
  "key39": "2oiEm3cfRwiTh6rL1ER5Zv5zmRaA4Q8MhdiBtsx32xhsSiEDGVxS3Gw3o1Xfs5NanvrdFpmtsWbXgtNG81otT34x",
  "key40": "5ZpfS4AKkAJn6Ck6qLYMwT8q7W8PjN3weNMfAAhAeW9Z5PfTEbiX8X2GeQN1eMDDibqwJW7rj363NJjNQ9Jkbnm",
  "key41": "4SiCnfnHLufewvCNamja25Mqt62tT3WwmArk6qemocLetX2QtGY3mBiQJduTuHAaaNfRgQctE1YVWGA8HDyaqwVx"
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
