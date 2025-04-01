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
    "4KxQrpD1btBYLG7e8EqWCEhqfdYpdPQNGLmk2n3sCZtnT7r3mAAPkF3UfvA2ES1Hf8Lmuyz13jBLLMBuGFXQwex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fmS458PyMUimtuRqQR4jhQYntVGEREbcNh4yhGCwi3SEvukMkpPyWFsjzCm4o44JVQfjVwvXrH4cWqzbT3aWcmp",
  "key1": "2Ma5gNNZWwU5ufRmjLhk1yqhjVoX1Jvr3CM7S4tMyHbhLXfH2YVU5U6rC5jsvw1a2wMbg8GRAkkLNPNt4Ky4yS8w",
  "key2": "5vUE1fvaCKeX2f4pQ9kfQxUHKRne7yu8cLhSF8v6jJCQj9ESjvyTv9teBmKEY9E1v7XjQTuCYLPvD6FLWCYx66rF",
  "key3": "5zsWW5EwXoMYL3gsRR4bmrUEiou5vLuA1RA3WzTFL7DVk5PzQoUDw83KSiM2SV7XNKrPN5z3M6oo9mKXGydwU5LZ",
  "key4": "XHWmZGGfCLXtxTuJWueFdcRtBydGaL2qgvA7mFmf1wDiBcKhR3RDXE5wghwWFJYuttyEJPZ2Ay36m8xhqibYm4q",
  "key5": "CeyhW8caXQnHxUjedn3edKBt9xDbsrywNy1DVuhFU3zeWB6zXG4FhX8gsaPCeHeZxk1V9psFa4nzuwFgYrREjSo",
  "key6": "7BCH9srpB8MPoaDxvojdfDjWf2vifT3P1W45RQbWGgoCHsUXEz813sxRrzDrCXg9BumwUf5N2ALimRPABnWVqAR",
  "key7": "JD2F44NYW5Nf7wUGcvmPhUkS14QSjVWTU81LjWoWeK6BgukuEf88HVC23MBMkTZKhHWRdh9yjpgTngn9iaSE2RX",
  "key8": "4eJY4JVxfKMzDM1MS6SrY9oxvQu1BcbpSRPzfT9VeK2gtRQXXUXnkPQ1mdyQuvcLZimobxSikzVaVTDQVsgjwYS6",
  "key9": "QrxqRmC8wroykZ1VoWbYk9iRu1voBuFc8sXXPVq1miToCZuunYJf7GoLgcAgRe696gUF3xoQAAe7dT8qpnFEUDt",
  "key10": "5PJk6Xw23MXpQQ27YmKDpxdiPxKEZSkL5AvuEXHnc5Q3fU2FkUuepyYWoU273E8dYaM44MpY4Sbu6XbGfgrtu84B",
  "key11": "PRRs2d5bGjs4KNy4nDHvowicNU47SbNYLmUd8e94PE6E7tqh49cPwfPSvKzE1scPW6b9STMjVN7KbGvVxQT2LMo",
  "key12": "4im9PkoBc8xC7fxm2dpJBoFYsKPQg5B1be3XFUHsSZHWjaLF3ZYNybxzkeqViQG5WDwSB3NU1dsCKsvxJ29rQByD",
  "key13": "3EDzP9ujRDDwE338mTNx71XVAVXSTLfR21LsGkHFbbKKhmMQ61QizD2ae1YkofdV56Ut4xdFM6j5k7CFGNuqvbFE",
  "key14": "5hpjmAW1xgZe1QUi6xUUbwSaWGMtQHbgy6bT6CW7NnL4s7Q32TQWKxXNhjJR6QRejRztwAsbvMNviE8L9ZgoWLLe",
  "key15": "2nofF5EwRN4wjsftCe2UAkXF18w8xhnjxv4ajycQk3jWuKdA9t46X2Dhz6zXLRC3tRUCyoXycpJXF6SMK2nTg2WX",
  "key16": "3SiCBrtTVooUiyYh1GDYPWXVq5sgS4stEuiTqhmD1gJiooTxTBhv2Jak6Ed4N4qtGYCoKXZb1Z5ewQUzSHSwafrc",
  "key17": "m8Y5uPbXYHMNXmJiUnModVduCvjqVz7ZHqkatfqrChzrndYiEaexyqSbsWdQeepeB4KzLCYKrx4TTFAyTFp5Pyz",
  "key18": "QfzqV88Xr5UHZh7DCnNu7VNayPFGZFh48MnjKWTjMQri3X9HtTHgkv2a7hiPGzLbEVP7K23JmSAMWLWngw7G286",
  "key19": "3h2U422ueY2KCyXeH7UnC9uPqeh7YhJJJZvZVn6UTATNCn9su3Kg2EuRdT6YQnLmLssKF5LDuE1uH7tQefmT6S34",
  "key20": "435UwEzmNJqyAamWL4b5qZxjRyeb6fkc91hig15LTsMs46DnXFhJXziThnn1wygfX2Y341i1SFtibxq2A3JRUMqk",
  "key21": "5QUSjLdJnHLjzfhVqeGhcYGbX8JAFY1noFusYmp67CH7f7syfkDNqfGQLVD691f72bJLtAJb4zUgnExdvKtdsnnD",
  "key22": "2SVUjEV9W2bNDccWpAL388UtjtLhWHnX4DayQZMg1fDb911piGbUs8TjHKgWa2M9L9rxMVKPuj3RpmufKWcZsjTM",
  "key23": "5CjBUr9Dmq4hWktzUAfFEzZ9j1ceWQigenJhVpaZS279BLpAyVnh8MgVv1UDcF7dMBK9awFuvzMyVHKiSwYoRyDe",
  "key24": "5Ko8fMhc17uDzq4hLQXncfHqhJkqnJNWvRsXrt244nitD4emqHqsxXRnHXf1WTKfGkwUtRuUVnDa2EbSHbEBeaci",
  "key25": "4bu4vdAU5B5bWo7FAkmwiMuuDk1WhifQbNo8LGQtstLX54PW7fVP7Q7yuxtKcDuBEEvjXrzJrE7GP3EqiiLrXad2",
  "key26": "3RZcLkqv43XBu2wQ322SAdkLtLRTKYNQXhZF3TM45maQudA192G7amGNn2xtmxRuBSMUmcwDYhnxbatPFft57Yxu",
  "key27": "5zdHPivCzYbD8hW5mqviPrffQBUiqcrM4sifSevc6tjKuwMftjrYKMTBhgLrSVSm2a6yYN16mncdJJSg1Uf5r8Cz",
  "key28": "2MpuDvModHJeASoKwhFqBqndCmLW35hebyaT8vqH2JwexuYJQiYww1KwHeJtt2RTP92GwD5VTszKyiKpyHboKjxH",
  "key29": "5XHTnHJ7s4GPcbNUXQLULV4b2c1NjrgbwnyJSQWBSYzR7cmovRUccSAuSbwZaaU2wMgkXTqvK4NXd9i6Pgx28gG4",
  "key30": "5f7me31mdKQoNY23NqQjVNzjvBPw2DofYWX9W1MP1DA8DjUzAJxBbuexFHp2MDo7FRFMNt6rRS8e3YC4fWUGndwy",
  "key31": "2n37EBHvbKeEWAiquk4c72j1DM65tMjDRPVsXE2an6vzF19XwqQD2YSYx4RYpR2SkioNjigmvDbwmdTwxt91wx9p",
  "key32": "5h8pbTwiaoHqaMY1EchsKoizkrczvRQWbakKjrFpg4LGr4Cr8n35HGDeZme98mU8LBYja9DMCMQg4FXd5r2E1raj",
  "key33": "4gPE5ii8Xdd4cbDbF8C998DHnjwRS2Pg3rXEx1zduWoE931wa8di6Dfc6mL7iUipTMibHvSmZsJnJfcFaqPZ3Rrh",
  "key34": "26YbpR68RANEr8wcBUbe5ZePrfo1yW37EWNmGzif7XjRgPvYu4WSpudiPrj9i8PXqWf7hshpU96a9QYZa4CK7z9k",
  "key35": "f68VSvG67ASoTa5nf66XkZpeDPMkzQQ7Nphb8AP4H7RZwFqAZ82JD3WAQCaMASiJoz6kiAyKjsh9YPcSNvKrmC1",
  "key36": "2DwDNRQu5DFWKdUhKfU8xR8kC5mjsBDQ27mhPVUR2qh5Kto2wpfbL1gsAbNPsi24DjWhWeW6ffQrUpNGHw4sRbNr",
  "key37": "4Co1iNALKDX4w8C1uhLnpvmTXA3BXatfDGatpcfUps9ud7U8FjZJsgdVBrt8kSn6S4mWercshhSEbJZLCzpWJkfH",
  "key38": "oPFeYxrKqRJE7dAYQ8CJVSef5LX3EFTyQNcT6bhhgWQqjUL5UN31959WiZ5Z8GkeasRgvmgFFFGYtTefrXc8B1F",
  "key39": "vxaMFHm9LppE1DYu1ewqxWPHVYERTUq1SE6ZGhrLGCpgrgzZVjQBFCfP9zbQinryvoKv2m1Bx8WoBLnD1mqFjQj",
  "key40": "3RJbrrDD5QF8MZcfgRzfvK252iSC3AFJhMb6ckk26GWGLUQFVoS7tjJbudkNtCWRT6nrmw8htMBMckhRQDMFyjep"
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
