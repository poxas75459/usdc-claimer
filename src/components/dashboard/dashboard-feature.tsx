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
    "nNKJ3jFNtaAH5AJb2qrgVLtEzAAXVaFVT6ombJUoUrwqXWk1DnkuRYjrdZ5oS6dYWPaHV1vRCW9VpG1U44znC7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EiKDkukX67C717BfbmozHm1tpGUtUuW91bgFJVV76nHVv6EcRC6HLxW5Zuti73W5XZ7Co7xsHRqiE8ZV9y53Tm3",
  "key1": "W4dpHY61q1sAGFqPC4YqVQ8DWZuakJEZBFFFMtcbYJCuVB3foAXQLVYdYsNVNGjE3ia9xieC919LSXR3qzQqokq",
  "key2": "a85gmCHy3eFGXsj7ZHma1hXHhrWB4zsg8LSXvo1MXH84tj7UPSUod19Rew3RtQMDe1YfC2mVXc9yyBhm3Li2Rmg",
  "key3": "gfSoPp7QNcMUUP59cG4uuKHzyfJYxDU7BVysFbeyiKe7i5KXM2RRi5DTczcndKVVkxBFfjYvKRgZuPCDnqYp28V",
  "key4": "2PahgmtAXXf12ZcbTeqjJPGxS1GuEfvQ6SdtrjiA3TXPapoZQb8GYmguYmepjJ3uRxUkt4GJPrTZF2Sya2u2RJHh",
  "key5": "g381yvKt5MpuR3E7ggCVPUP8Kd1fNTCK12BsrVC9v7QkprL9C89SPs8UKML48Su3EK9tTyqiuYMSZvMXyiKdoLu",
  "key6": "2Zh7EpMdLkr58gu3ubnDKm5xb5i6fFy9EnoGwnpe1WmLfWhvUe9pS48KePSHgxPB5YwWE6s9JDEoFERQ3FEq3CDr",
  "key7": "4qQf1d3He6KxDR9dvXSrXVUBfaFoiLdbpe4Tqio8hK9u6WkUzNvdn6TQHrBNjpvgLDbK7WVrNxEGd4T6FaXGumxK",
  "key8": "4UTGJkJY2zEZrbJT5zQTf2LuYMYUxAPHTY2G5dwfxEpP3Kw1WTEa4Vytf1qB3Rx6aCVSGNWaaj3gFDsKYGEMvjsj",
  "key9": "3unYMpnU4cgsz6wDScUwiZS5vAzwVLgDZcGXv314VfCWeb9k7hpQJuTVkQCDG8vi9P5FpVpVeBaE8hyNXLzm5Xjq",
  "key10": "5AYuswdFzDMgRkxckCfhnXW47kGcYviSxefVxKimyuGPokfeU3fkvvCNW12bvD5pTo9Yip7n6CQZFNvqELHY637Q",
  "key11": "3bJyPcuc2heUnVcKbqJGTH6zVGSKsyXqoKs4Lyj6A2Ur3LsBHhuaV8j2iwQBYvALU1y7Ln2tD4RVP2WNcKLX7GHV",
  "key12": "5RoiTnvTW9q5GNwvJewfDwrk5fuwitVFWmRPA7BMCdxjYVPtqFGdNZRJAZMj2DYRLqdAXEvm9U4fbLSwAMcuzSpN",
  "key13": "aPbrbyzxcrQDt9zTxeVsEsZkDCJP7kr2kbs7hLPyCVpUUKcNPWHbDD82DZRSqXZftdCS2XDwP7jwjkJoNYLkRAw",
  "key14": "5RRCozdgS5bTstD1mjjQRmC7RdtdjCUf15oQS6hxvVMm88tpa6SHgTT68hh35QjDe8hoh71ajrZ46m1uRa2Frurw",
  "key15": "2S4sAPn6GuLR8S1FJCcCGgL9onZEciStghPWi1HjdaXMdmWwJM43H2Bk5p9SCZ6cozB3xEkAWojnrTxCMySaMMzP",
  "key16": "3xvhkXjj69vDEF9EuY3WF9sMWYSrrNREvKHFEZp5ruoUa46kUhxggFHyyLtih3A8T6GXRAcMM55vwxqzgasX8FzZ",
  "key17": "5K8mXFjpkeuq3qAYfHRQHu99nrY9eGLGCgDssLBmwwNf3CjEHDzK2KTJxEEkKUWaZJVvyb6hVkYQFkGSzkyMqnF6",
  "key18": "eZBaeLEt6mqzBHAuWDnswgo1aN2XUUHF8XcBRNeERWnKkQkynQuUC1mcwcDKZiD2gkJ1crJgzxoeXzWkjTd5hFL",
  "key19": "5szJ7DkWWVwHAWm2cyTc9fTntb3ZgpVBGvPQEEKsHAETEr2mhco4Eqfd93aEJJJFgSPx5jxJi1aBa8qr2bAD8XC3",
  "key20": "3FTvmwqxPcWPX1bTxuyw6qzCHo4uxd5Cqr49hQkP77QTdBnjyzSdjVvB8m6L2KC835Nf8dNvxwAekMwaXZwXHft2",
  "key21": "3sJdPvuU7aNte4aX4f7zo8WE7bakGAW15sMhhLQ6eUqZ98Nmc16ybNh6yyatZsLp2bjC9CoMAa7dhuBXBpt3Jgyo",
  "key22": "5q7mmpZQ3hZNpiAnmTVwDigPsQAzaad7yFg2idfMwHBdM4MX3DbxESTrm26eTekPWK39qd3LfSDkBLGtCnnVYRko",
  "key23": "4gVCzd5qfRH7e7pw1xSA22uKzRfWaDNr6S7WhW5Lj9wCVazRQJvanqka6suFSBjRABJG6pabm9aFmgvDgtY3yFtZ",
  "key24": "3GhQSFyfUCzNt9EJ4P2bwsYNhgTc7J3UnvPY13rTADQ3dCLDqvppcq9FbvzrzyvJViksidXP1DyQcvZJq9Vo26KB",
  "key25": "4tiVdbJLPNFBRcD8o8LF9XCvs2nfrXRfGg6q4WDw7649SsGVAN5J8mWvX1SiodzzRrp9hMUircyNvtab63x69n7X",
  "key26": "4bHJ82KsjQJfFxMXXYdreQcRYg9ZUGVKNW5E3gPn5v6e2zf2ZmxefgfrPAKP7QV4e57puSGGNQXfbtXoWAtyTi35",
  "key27": "2g2ajFCbSMkU77n8qNwfENhc2ue7gtAbasaEPoKpQFkUYPuXYnL9W29zyDyhfDy1LkfBszde1QnsY1TLMX6ncZeZ",
  "key28": "3X1NhkLXxFzEr1So8CRuxtBtaTS2tuAoAM9F75TJ2Rn5dHW7d393xRWqBBiZq3Pgx86GUAeo6YtDbCbmr3korqjr",
  "key29": "29ii3p42hzvPr1HtUtnqwXYCWGA8fstPbb9HwcSqXMNQZULpqeSGXdWN3AagbgoTU6b1LAJXyPQLTQbVrTaDKcno"
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
