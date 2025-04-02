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
    "4UGmnBjUK2RBLFpuDMSuEKfRJBuNkbYiqe2VbPJ1hLTV8fAzmmvZwVxW4sgqtiojsnRKr8AaeFyTSToWwzzH4yYU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z3Cef4gy9TU3awmXQpzVE5oDv25qGCspvMsMvNF9SLSwtKbWMxnEU9Pi2HAmEKoUy11zqq15aRV4m6BwaRAMsMH",
  "key1": "3a2khV2K1DwKEPgACt6BfYqDJWzSAHMTT5rityqqNjKLNyMw3nGMa6mpAR1oKohp4Mhb4z9bo2GpdkesXj6tyg69",
  "key2": "2ZDPSMGDP98YyfNfvQdjHW55kkiZe1Zv7pduXUoYdXvF6xTij7NJAeMAFFJFVd2QkRzJ3ebMvoEL2gUHdS3eTL11",
  "key3": "2Eowoo9RMv913L7xfaWHBs8KcZw8iS75RKpgDkRzoj3KaEHBtHZneHdAaGEFPKBPjpryGYBi75wQcmhFw2xy9oWu",
  "key4": "5GZWgU97TUPSf93nA2wAaLQYWBk6596Qybn4ZFvXTQ7sAZmHSu8J3TB1wXh4yRfZZUy4Jz5GzmtvSaVyC7moR9EY",
  "key5": "GNib6Qaj4gmerAgkt6rt84uYGmc1RLjMvoDE2jnsNVtxLp1zf9BjzDWRxqNbkwT9knyNe94ZziAKRxgBVZaTj5t",
  "key6": "1Q4TLRhvVv9FrA572mh1kEX5q3VMhtb3rbP1m3Akhatt9fv8sBLmpTe3QxibmW5KmjjgPGV7H3SBmrb7si2cqs1",
  "key7": "55Fov7yUgniACFDY8vM2c4V8d98dLXKrWc3B4AA2vqKgVZncoWP8tDLWs64zXog27THMv23cNyfZj2w8YKxniWQr",
  "key8": "5fefVWqNxJACM7fKXmGjk2yuJ3BUmjaum3SpLBEHpY5kbCBFsCeiXJyjgFPKGE4czCJU2GEYyWvzJKTGuLiGtDxs",
  "key9": "4naSN25TK16vuWXDckirYiqWG1fjm1LqT3mQhA3PZB71QT1nB9SsG7b2N8FdxCKhg7UvbfV8GnKzn8yN19h7qsja",
  "key10": "3JZRyFBbkZsrrGT21ZyVUxvihBSURCmpkpsDiQcot7LgebTSKK8cxLu1mcYSRgFa1Vao3jgauuyzXQHJ9pbEySEc",
  "key11": "3onyuuzjSegx2csqesLr3BBhScrfyitFQ5UwTzzskmssCbrJehiEFYB12p3Q8sSP2RktQJX8vG6UvLiwwk7dpq2k",
  "key12": "5yAWf56RjMSBiV6Xtx9nPDtUq5oG2QwNkev6fSBW27zvd48gcfWsRHGKyW5xQYVeMCUsVvRGevxNYDvie8KGYouC",
  "key13": "3vh1dyvENLBZivVuTZin8bSk7BTZomAReM46rQrd39MmpCTvSFs2V9XfoSYRgY9itDDsMc1Hqogm1hweKxWEqogG",
  "key14": "5sxFRqnWjmpuRLrSfkDXqAs97Xj2n5Lk1BdGo4E1cnc8CR37k9Sa9T8otoFkp5YJcufHdcuWsVtRrUbgnJiGeWEY",
  "key15": "33PFi1EMQANQRZYBxbmXEmWAEqUZnbPKAayEXGJt6dFijb9DQfQy57hbaXqGLzMXZzgJwnE9dM8M9xvuk7cnBnR8",
  "key16": "45ARGKh4CMJmQYPnQbmb3qDbdKrYL33Mc1H1i1MgZcN5u5owrP2XcmMZJPDpbRDVdjE12kk1mQzY5GhSTcXGNNZc",
  "key17": "5cSHnBKeBBvKTYVL5HuBV6tCYhsBMhBKHVxiXABfiTobhH3GkfNEFMDid93gasEKMa8ta1dyg9CpCQdvyUnoe7Pe",
  "key18": "5q3SYiSQYVwVnSFhnq6wpSaPiSWYq8coCpUZvpohdvrfcXvDtiPeweMU3i5n2PNxx2zJa3osuQ6VmB6KTLT7HdXw",
  "key19": "3W7x2M3fssr23KUUm16U3dhMeGfjnr4CkptK5BKP64bRmPF9MgMTmDSNnQWC3Ej5yEkAU2zgugppcbc6hucXUtUc",
  "key20": "4jrd28K939yRNg1V1ZLxovN8yuY2XKKRP2UvGLm36v9k5ZGa735xCH4VZGXtzaS2XWGTJq8rFyaqhzGYHpPek2bn",
  "key21": "5dLHJcJ1DqxyQZjeN26x81dwo2gxvPdL7KFokKCM4vZDhsmaBfhjRj8RqLLQ1v6d4kpsbUhPHw7TwHtEFYSx7xrv",
  "key22": "XVoKgfYQW9fDyEEmFerHpCetRGZUzytj7VpkSfE648RWUdGq9WSusrkN5pTVdqAzJUuSmSVFW5xB2nYToPokc6K",
  "key23": "3JxZxdgG7xbJJgzt7gWBiFRu5Jwc5joudVLtAYd5NSAjvGxgMnEkusgewLAAfaKy5PEfWtDJjjRAanCuUh2JgXkV",
  "key24": "35vGZc3NgrogDEF73sMrVkBsfG41AnUJL8RJXYWGS5xquqW3HCv6Bnqr16fR9uLAdFMNvtgJu7zaEhRFkTBnU3zt",
  "key25": "4nDVFHFo2vTJtteMdjB52GQ44BNHSG77bfc3uMt2KssUz5PeeNfd9RZrTnv32kmrCDeJdfSHds464WQrv39RzGJo",
  "key26": "5hCDU7KLbxwp5eTLyFuTZgx9ozpNLexpUvPzgBgKqNcJiN2iTqL1CJPnF3hZbKW4emuc8DD2dcUQoyKgrpy3fgpX",
  "key27": "3qv123WztvWULM6tRy6AnxANcwxRLnHpgPJumKnY6SBtLaKn4MyzWDfx1cmKipJUgGLgVVZ6GbZBgefoXCvkzgBx",
  "key28": "28YyZgSjdS2QhpVCnnzG8tTrSPkxzS1UFJWDE3FFfEhU3vE1j7irAMM995vSggFvF1irGYbZsneobkgZD5mJ3h8G",
  "key29": "61W1ViaUyWXQr2JKQN8HCkLiWos8vRZHWdky5QjAWCqMQ1JLAFxu4VZRMKncjCB9sAJfB3pvQ3oxA4UD9NajDaLH",
  "key30": "5yGfGY58VE3Yh91CzMJGwnJ2iYEJeH1cCu6raVTYTUQWunfj3BWtWeZX9RKczSRku8on1pnbdzktJi3VhNfGkP1A",
  "key31": "3r5kk5UcPvTZdyVyPTLqogVXqpguFUwuHzhrFpRAuEiUXe4cCooUfYDi6JcN5XZpMfMTUqFdQgg7j9wW1xiD3NPe",
  "key32": "3gQJQWLidhbyRZA7HH1yXKJQ4opzwcUCMd8rYN5Fxe6hxZKANnuoZj6kvFj5syApW8Bkr44V3qZbFVjirfFPapj4",
  "key33": "2r7n72HATFd37XNo8uDkfUCqdDGe2CKMWVpgxJYLGEsf4NTSSM6QuG9UG8GMAcTbJF19u7Aao4DgQ9MWGf8mu4Rj",
  "key34": "63sSKKzPWFLnqyTaveqzpjjubVAVVXfQjcqvZhgJLTGZ7M6eBtgUJ28qEoN3gPfmQRtSqUNDUKEEu3QBPV3Ab7DX",
  "key35": "3iefJPQxsZH1Uq1393Xn8pv8S2ph4Xx7rGqUPu8KhVD55jfxWZaf9Sn9LyVQtwEABdscwWsHCj8MPu2wDaDKT4Lv",
  "key36": "4BTcCoL2wrCip5hRpDtjoPBMmigAbXEtnQAehhgziuzJJvVWmn1pb6CUAFuy5K8bNCX8XmubUKykMqKrcmWZ7upm",
  "key37": "3auNZL1bZ8spzdxZ958ey3ZyARZxsWZmjVGCks6yk6WYwvqmo6eYLebtyapqvm8oa9hWVrxoLiu9Y5djuwR71hxz"
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
