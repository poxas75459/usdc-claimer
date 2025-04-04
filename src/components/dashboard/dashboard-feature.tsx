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
    "3eMeZwmpj6GE8r2V9dEjZnawUkaGSxn1NyteGAEhGPhZvTmxQ5k4fZbXZhcsFdUSUgaPvDpUWDaWXdQCQduSvs6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bw8ZeG4F8TPdv32fayy7ZtiwrXUP97mSuTFkx4cnrcgDNDSbfp2K2hyqZ7yKaCD8fxxANUfnBtpRGE9ALgQQ1ey",
  "key1": "3SkYco7JM3uH97y2TRaM8XPjqL7dXdTGZUkJBWFVFZKdbKC9A1w2PGCs7mQEayYfrNsBgv2NAzqmix4ZLMaET3zu",
  "key2": "53f6NKm9Mpmk1Ty1NZLPFQ4HZTVuGiLzySACHgkzV6c2FYXzYAPHVAMtKLNEJrcdq21Uhq4qtdEYs2wVDsWRTcTk",
  "key3": "51fbsExKHNpwyaKA6MSpCE9kG6yM891dSz5WY6a2wEMh3jVsmrT9CpAZ3wuHqckwYMdFWWS8Xd8MjTTYyHFmJG2y",
  "key4": "2gybLQ4hGFXCTduk3JYjmhTnqAFLLTDXfbPiAUYT7pXB2XupDmAd4iibC7ubR1ysscSGGY2M8xG79tehEYBMf23C",
  "key5": "3VQ8r5RhcjLkToFJMbQNLXzUyVxLU1JaZeaEonE1uUCoj9f2Rh8SqFdJh3SSvvxp1oQpXmc6GLncCgeSEhJAfQoN",
  "key6": "31nQ9uVSWhs8QQj6D7TXnKkifLfZYK5vdGejDsQcudAAJh92HTB2J4nvdA68oFz7pQ25oupJe8Y93nvxwc63fMCJ",
  "key7": "HPS28E4viFd9iNRC7VERofPMC7T61Ey6rzxozy9VVvxTvHbWuQnKuX5142zjnajHyMLaN7WpgtffsFP7cQtwrEt",
  "key8": "2nSSLXZHbhLG32WdMuBWwBpo86ipMhsw6G9cJgY1VKGtU81XmgvHxrKPengjWLZpHbWndyK5pnEhqh7KYsep5cYn",
  "key9": "3faYTS7d2AFHW1yt366jehbgqqsp3vkpPPgkKRUrmxtyJ69gkBBKxRExQKa27qJ5aqYgFggstZRpiprgCSXyb56n",
  "key10": "66P7E2B3rFRQS3L8NMJTwzChnidrjCwTv5JoCou7eToctkoJxvzUFC4jzrJr7Ejbwc8N5rrViy9sGU1HtJiQt3Qk",
  "key11": "3fxcg1273txxYMX4w3odePw8duLGEZRe6YDfSPjwi62hx1tQcCU1n6ngryufQN3BSQ4NEBQyPhYVNJfz2LMJFKJk",
  "key12": "5B4cHphE9EoTmXsyiSJxmWGUCfCghWwR8nuq1crQRNAnwZtvRxwCGwcSy4jVuYWZBUpgzXujscHHuTGYhmAPzCjP",
  "key13": "7YgCpT9A8rA8zeDyjrt1mLsR8toMKRs7gjuWj5y6KbJLGyQBAAsmN1qwNy69fNoQSKdF4DCWBFrqNeuYRDqz9cS",
  "key14": "5Jy3sAaBYY5W1knANU7BhDFqbCcD27XrVamW8GS4JjTw2yKcmxxgqyKfRjraBrwYRq6ugDivXPxR9Lhi81cef8h7",
  "key15": "cDGULrRrp7W3fFLw9tHLPT8d1pSyTSpAukYiiYZFxP7PFtY3tvwGdUjxmVkCBd1gpKk23HETP2siH5gJtWzzSkx",
  "key16": "2k7VnGttDXoxaCySFxT1kARytTvMUzzQewbvHpUunWgDqWPyTgkgyBAYzkADQdsL8nRXWRQmZyzpMUhrLb3ABaQy",
  "key17": "51YA5fEG4kCrBMvimYEkpMxmfH3M5rP1MDU383zbCkhHnXmXcFy4uLrYNBiuYAk9b7KT7Ehx655uUCAwYV3uxdN9",
  "key18": "2oyNg6b4ACJADnVZkDgLDGVpm3v1Z6Vgs6stR3JcKD3g3Sd4bQ1AFhpcL4q3aSbSejoPabBg2r2zErGMfs9NqHQQ",
  "key19": "4L2ULMvxxgQeVzZAqUkWKcjEQxPSgDDKVMwgjRsHTjcMxFChRiM5ZEArEUR8YcQCMNAjuazMMcWVzamHkxB52Fq4",
  "key20": "2JM3mAjKYBe83UDnX3JkEHZdc8LVc6BriJX21KADZmYnN7uKo9XXQYxzPJoHojrkGpWvkX9UPzpT9JbRea7gmq6M",
  "key21": "5R2wiP98hANrBkPGcajoDpMeXkvvBFwqjEA9mzPtpgBWWUdzx4rGtPFX6Wir3BjcGg1XJpZJwv2feGqJRDeLPpfg",
  "key22": "4efeGiwWF3qeaEPnzSDt7LUif8oX9yKNcdamVQH9HRJfR6mVDAbThR3xWEMifPWB9QjrijuRZ79gmoESEYPEbAXZ",
  "key23": "5yE6Hn86pbAzFq5zR2HdPrewSpnT74oyeAhqrRSs3h6jiPoCQ3FuNWXtDJZN7ae5bzxT15HXaSiNLtpzZ4PnmsCb",
  "key24": "5JCmxino5BXYsXHMQje29hs3jscprYD2F9oES7KGqwKJEjEywBP7niYLbbkcMniAEM7DnFYeck84dasz7UwGgdrk",
  "key25": "kMmeGDt7RM2CAeWXk31pVDY2gChSVjtvoyJfXuJXgoMUdr5RqqLxjty3FwvGpeDcd7uNDEGnkLqegJGbk9NLhhw",
  "key26": "5WhwSe9EJAtX8bHpFMmHQFzdjqQuY9KHnng6dhUNPkNqfn1GdM7T92Tt2ZDP8pXzyt7cCtcer9NMhMqMtnmmDqSN",
  "key27": "5aNCcEnUB48m4eiUiLWYHqdAdUoL9KTiQZUMXWza9Hj16W574DMrD9mE1pv7nnAw6YAApEd2h5r4xuqhea5sRK1o",
  "key28": "4iWFPyVx1pucY44wPyuP5rgKB5tv9tFPzsirEyjQg4v9EL1tx2eqVJXKdnrtRMt5ayX89Zn64v6sgKQk6J6GuvBM",
  "key29": "3MqkFwn2RnCe9rgUECh2udxs2K3zC4Dz9GahmQPTsj3fUneigpp9iAAYz7oprQrAvosf28k7CDuxnBngcREbpnYi",
  "key30": "2CY5VSPdi8WAeXudPNhcmuq7eBsGeDbZCUdjSPwLGRp7svEdPierbPE9TqU44vrTrbbhJfxH7skVrKoseHiSLuD1",
  "key31": "4NKjwWoPHaiVopF2w7kk4U63yqkTMyWSRDXsxrzK9vRavxubsZG1qnQmhKDgsvQkReiTwDtamgmEikhAW8CJvhVs",
  "key32": "446NGcUukDZmGoPrpXWbYRMszspQRar6UnHFZw6aJWPDYMjB8HDxsjRaM1tugrwUoK6v8yDe2dA5KwQwjUEiVfcS",
  "key33": "4dd8UsKVCUqrqUgTCnBZXyAaxUVqRsK5nLVhVDJWSN52FakzXDDP8KCKSmTapDZAgB13VSzXiu9bjADhRvd3PsDk",
  "key34": "vwnjgEZ3ELDNXWeFR4JGXJqTj3gDu5vBqgYrHsx7FSfgSogxSpVQqobzieDzJUfznsVADgZCfjYqUaraXumaX6H",
  "key35": "3qpKHsJyRdyatrn5GDBtZmmUF8femTJGGW74msPGuZAuV1qg4YvpdRFA2oT7VRf9ppRDa6mcsea4V9CywApvLa7r",
  "key36": "iVw1a52NhB4oU6u7eBzBstycWmCEdwywwkRxerazgZH6zA4mw6FPwwVdAafyCWFZYsf2wibus5pnuPMu6TSb1zQ",
  "key37": "Gi2HfKdKDDgTCFSGoXhGUF4G69RrKjfvqzdgmX65QEkeGGjMkSXjRHQaj2YyD8F17LjxEe5daY67ETJAJG9TRTM",
  "key38": "4MPpRoPrhnDpdWP8ezbFDhcbdRLrjsHig23GoQMLnRoS4gq9ouz8Pb3isTXqMa9bWrmU3tvmqPLyHdXNTf2dtnnr",
  "key39": "5xXhEwDMsu7sB6mk2h4gxG15QUQN97HAJg6zpwbBnkbXTAmtDZFdbpYoBffZsTaHaNXEKq35sPLQkpvmiM3vRxBv",
  "key40": "61QCyqKo4E1H3mGCDgGSeNgfLN4e5wVdV8DbUnUCceqx6pDYMCXQFCg55kH3RZtYDpU73KxbndvHshqc32ewgTwV",
  "key41": "2S5LL2Nsmbbb9b8cijdY5J8zPFMc4cv8sfYMDogMRnYLLLFPqwtuF82MS2Uu5JivePnsqj3HURaDFirSdHsa41jV",
  "key42": "2Y4tNdp5fxBnXKJ6jUXnzLAo57uVdSeeaF4X3KnpU8VvsnyqPGVeXHyukbe1P7uriPc5Uxn9MhbRwWEAb29AJDHn",
  "key43": "2fCYiTuvFYgxRVfnahA6oHdCBg6ZipWVktt8p7W8r9FZYqLeGx88et5RY9W9qKRUmhEfCmfuosBjHTQsiJQKmExB",
  "key44": "4TWzUbtCjJPVkunUf8tGzvj8f5QL64xDPHqiPZMAq2mNrEk5YiCw14FVwfcVggQNrsFf2fEEkyDotTaUEvdpEzh5",
  "key45": "5H2Zaesu71n1awEciBVUxebEL83RsCm3GmpkMxNQFYYLxq9i46VNgzY2Adv28KNsX3v7ZY9AXNPwTGyL6gvu27aB",
  "key46": "2EWNubBF2E3XzjST9nxPVswXmqimqt4Rc61L4Gi3nui7XgR5qJpQ7vkMSyeYYgjYSu2B9RPtJKDym8HERXkVNa7z",
  "key47": "E9QknadQhTTKmafqLBTt2NJyG1Ba372i9JM4KpGoYhMqyLPjDi2QgGcbVs25qfauY5RX6KjzjCg6EcMSSykXTtw"
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
