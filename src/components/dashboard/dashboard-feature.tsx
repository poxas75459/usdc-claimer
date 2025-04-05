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
    "487RQqfeTACC6StnVgj6NUA5gfGdwYf5qrYpwxe5zYXuwxZrn1UHUAz6jF3JCC88fWSwpGB3BUTLpDUgwz6VTtSQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q3hbJbvs9aVAuYV6w4cFDdALbAmei5aGVzoLbKik2bnwQhn1MXgSNJKq9xT94cRsgpPxMDBC8dW3iYTixjjuKPP",
  "key1": "2SpDVsCMarZYcpZEWjJKvitoDNv3Q1qoo8JgM3Ct9CY4s1XaD3yYgVc9JycB3XztPzaMwwtq8YBzGHQKdMo88CrS",
  "key2": "47o17BDsUqbZs4KM5pzeqM1v5wncc8J4TkBBqATWvGn8VCebRhHtka4spwiyGgBbPP8TkDMg9gLzMjyRmX3hxp2G",
  "key3": "4F7vGDgVQFC1p7k3kzaJPg8bh6KctstHekMNbR5c5RHBhpPchVb68rG6SQPQLxVnVrnbuGCvRXvFuYD4UDBaiBHk",
  "key4": "2jKTaLAxB1CNUqrNeiXo2GuDRvKCKnUZZQbt14rpPCVUHQP4S7NoEjGqJWeShLMKouVasfqkB485MWNmxqaipzAZ",
  "key5": "wkMw6esCzMZ46hXELSyQdm6WwVAXHFhuHV4EYsR7At19Q3aU2xFSfHED82rRi4BLGo2dzdHR1hHBAQoYjJNxSdb",
  "key6": "VC8zQAKHD1ThRtTpjjBXKizM2QkEmmX9Fqh2v8YZfp9hvtgS3SZZbuTu6fdx6bbBthMKBCLkfSR5RBaKRoEYAsP",
  "key7": "34zxJr4XQphkmGo7NFwXBSL2r74dQwUjJsrrWmi7FvCUtvNUP4crUUZvaKtY2CDqz4Y2Pi9E9HG54YgnUJDqANa",
  "key8": "oCTj9by1VB85oF5txzXX6Psv77zWWAixY3Jia4zd2gLoU1XBzxsPP8oDubbMADgXU5RSTGDzKt43Dh9XvkeJn4s",
  "key9": "35wgkENxTuwS3jwTVehNz5uL7DLFj1HCo5x8cwYboipJy4WWFSyEmsxFKFdhXzAP3iA22V5WKvfQs4QAd7jSfimt",
  "key10": "2PEnoK5HF2pq39RFz3p8egNYUY5YrAAbQkkY8XThrSL6uFACB8nditWEEUkxr1Cg1Hhhj9wy64uGeFH1yc7sZx5k",
  "key11": "4Vv38DkCLGM6iY3R8wg2QTSnPoChwJVEm4SW21LFd2z2PaPALxgvptpRjYJpf9FcLUUtLVwEH2UE1w2nM1XDichu",
  "key12": "5oXpgGK6V2moS6eWPBHT9gxPY3x1B1Q9RrT6uX5W3njvtCZfCVHfifRT1uZz5CCJ9EGBonW6SFcBVoRFUpBJrw27",
  "key13": "2nBP28uRm5x7g9SuFe2QvMZu92pG7uyHxsoy3RbQVNxCuNkrTaGjBmz4z6NAm4f9EctY71EKbb9831Cc4niV2w6V",
  "key14": "a4HCC7dRiiXwbQUEiVkLBzDxtCYb9Dn8pNBa3wkSw1ynFG7BSocjAweqDWCEFbc19fGbsebbqaV7fBBTYdPMFpM",
  "key15": "3CcsA1cNdWP4UmuJE8tGkfk3F1hatzX175MhsNSQziGP5q7HbLiDXbwF5NfZ56J8HUbq33WeGaFUK4gNJKfNc5MV",
  "key16": "61hwiYJxWzbTM6WSzDbiw75wZRzuhDiVLC5eBcZoL6schW6DhMqc6SMnjfWa7FmqzvvfQg3PntKw4zxyjfC6wqfk",
  "key17": "KrhmNLSuNuBiDywpzEUmcfuGy1G4L2tdz812AxDHkHzRv4RCDnnbiKprcPV3vkvp8inszS3CxG2MkUAq8hHuQ3c",
  "key18": "2fjbZcH6J1sDtLKj3SXDZhspBNPNjrp9NvmRpZiPWKKGyLdAv9uxh61FbUAGSpPshYFdRwSMtzSis9cDgQwiE1qg",
  "key19": "rbwTznqQzGJoJyHzwqfrq4LtowqK9pvtRbnymECgu6NCYQwoJj9CJ8RK1E5CP52DpEcYJGmcrEgMyNb863aPJKp",
  "key20": "4ouFN1nHXaG9Ck7bR8sgtmHYzFdkcmroYxtBk5TW9zRBWjAxnKiVBZJs8UyfszFtMCsme8Sztys3YzqgeNXhKZbq",
  "key21": "2kwsQ54k1dQHQunMW1fCZZXvSzqksVdVUwCa5UG9rduc3HmDdrQBpWxquTN4WrPmZMetqVwfXiDBum7AS8AdWg1k",
  "key22": "3nFgiCyQSWN5SD7nLz4ksTWussy3goem4dG33y3QCvmrvQJdLr3joVShHdZ5XWW3rFiBK7ZmVL2s89bMWxkuQvdm",
  "key23": "3dSAWvfbeWF5Res3RvQ7TS7a2NsHaZqy9gdJwpGt6CbTqxGaK7R2MNed1ofLv6MCGt4DmENHqN5AcBqR52w149rb",
  "key24": "5Q1qGcsNfRXBHp8wWncr2MaWPWekJnS9HQYd8Z1QKXHMcz67ZSjwXpzCg82GRJo3PeyYXoo9ek9objn9VP97iB7u",
  "key25": "2JpzSB8puCcX32pswJdhBpnM5pb6w9G1wPQYVmpXHzcbG4efKWrUWMprT1pPoopSJfXwVKX5RQFsoRH5Tcb95vux",
  "key26": "4YXrnRpHKHAARcBzy48KAgzjhH48VXoEjaCo31gW9eCZkWoCo667te5RKfz6a9CJkbQ4q216s52VWn7mcTdKsAc5",
  "key27": "5eYuzAV3Sn2fJDE17yesZhPASY9uPtrG9PZmAboNrhAr4bmFfnVZ7ojpMcgJcGYDxdw2xu4Ce79S1LpNDUFAk34X",
  "key28": "28fnGNr8ZGRbjsXGdWKTH9u1k45QiMayVapKedvQi3HSHJDRk3uDpCDsYeTNk7SJGMi9ZumFQTk53Pj2HoWGxdQf",
  "key29": "5GngHAFbv8oLZwdkKVSgDMzE9dXJJoprMF1A9bwQDCRxYXoeGPo6tZg9ZrFDh29MePV3P5YVhpD6GRHbdNcGmqYo",
  "key30": "2ySD54kkvjDq9snNQV2vnBTDaUcj6rnvWw8zjf6vP62nFL8PBJdFEaiXeLRoidwyJynPd3zGYoy1ehoFEqmPiW9E",
  "key31": "dvSPa2wmTpqNi65D4fq2zwqeenDUhHT4EWeBiZv9FnShVDJmcbsNpRHveToHBgYRCM23sQ5XrjJEqvUYHeTuQyG",
  "key32": "2G6yrJAumtkjfimZ2Zkti7jt367JjKzSZLmMpv6vRWb4Fewfc17P681YtVahytKimtvNNyivni4aTYm5gtvUff4q",
  "key33": "5XS7r24kk1QwRSB5BejjMLekEWH1tyNTz5x15dFkPFp5rFLARmp6ZkSqKfLxm2yYgbPQEZgarA38HEcNqJiEhz9",
  "key34": "cuVXS4kywhKZq7f67SNV51KRfWai1ZXsPhJ7eARGSuUriPPTtEMiktwHwGacDUU3nAXS578G9jrMCdFAjmSKi8w",
  "key35": "4SWpqESQ4gP9tnYhSR6xNPFPjGNmqp3sW7uFuQNM8BnH8btFoT2vpLpkCafNXQZoK9tWVgKL8MBaY1o1naG5wEzq",
  "key36": "ZQhyNwvZLYYoddVxSNV8BXiQVdvVhy7YkgGoh1RLs2yWeh6rJpjZC7mv4LzCPMTpgGamhGgUwHVygkHTEnh6frW",
  "key37": "K4XMrWLSPTg7qDojfS3dF6bUZS4s9hmFivHkBQmkpKFo61tGgi8RNTGSLFoDLi8AbEWV3QfPqomvHQocAZhw2FE",
  "key38": "amLV7vsQ9aDNgMKd8hyyPxjgcXyYrauzZA5q7KTY9zT6963FPR7SQFoZAdLSE2vXG8rYGY4ujz5gqACo5YELRi1",
  "key39": "2hqHynTaMT1q59fqE3ZrhmvDkQrHoq3KLvLbSuNyJ7ESrDR2HTQYgtQjKQFKb9Y2HfaMQw9i7VDe85dR6FKXxk3v",
  "key40": "2s6NNHmtZL8KkabzWnfjYGUu2HvvrZctVL2rkjyAUovQsQ4ar3fQQ4hdibNAsGXCT8vDe717w4sJBHKFwX4aQJwh"
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
