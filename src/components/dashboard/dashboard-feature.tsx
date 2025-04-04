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
    "2sRMKgMVDVeimZR7NUKcDpVFF1PNBGGaKSCVnpE8epDbvQaqK4ruuKi55u6kRnWyuemV66xiMgew9xGe1QJpaDUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FQDEVnz1sNjaydh9HEY8YeVJYen9ncD1zUGvYtW6b2wSKQ53RfmxAGvmQuhwxsxVmz1rnXrwJrj5JTLBrLeqJQd",
  "key1": "2A7Fzus6a8fjRJ8LdMkZnSBDM9CwcBRSbaLAyCLv2u4dyanHr1LvBFwrQPLTTSVB9yWNTQRFb6AjHfpWDLXxDfJk",
  "key2": "DVvd7zc3vs1GzDR7oheSs9YhqhcGd9UijWG4e5huiCVnAxCL9hiJRwqtWGx4cYdmPUBCafEPZi9Y5T2PVgDvtGf",
  "key3": "3cGVgWuwdry2Sm4XAoAe1bfL6T6NxCrb5p4dWJEH1gKv47Srq3VCKGxKdL6fFWwJaLrYcuciXpZGyoPtwJueZ8S2",
  "key4": "5NQ8vzvAQRtWBrMa1gGNG5EHZ3TgFScbLFNLkayh9pr64WLPuxszdjnFnS2Qz3sXz2EN1iQsRuDvmkDk9NjkxTZ2",
  "key5": "3qRCXFQWj24DJGcLGYt4QJ114VDWX6tmkYdUtLTmASRFDYYeWX19MLRW5uBFgYXZw52vXZfWiZkEf8zLs64nRZvn",
  "key6": "4Uv9ANpy8PzPv1seid62xjrfLq48Vyq7niReZBdyBVMJLni17jZsFxyAy1x3q2QiJwFk8yHjhy5zARPNtzBw7oQm",
  "key7": "3Xd8Kh529AiFwgAz2pktEmCenTdduxsSzsfUaaeSH2eWnddtVCJEpcnEgh1a7nutq91855pRFTjkNwgzWXWufEoU",
  "key8": "KPUtF4eEwJTCy8R2boE1wXAuznJQsxzZFQFJN4BxrmKsE94ridKqWN9gTYZnASzCM66NR7odnJz52Bn1fewwZhC",
  "key9": "25FEbjPuHAwKoUEkuHUydGRf2VgDYHtpXAhuzFnWccvyDTvkGD6rDu94XxoXjQ5KSwP2eCnSE3WzzxaFgmZCLFEk",
  "key10": "38vH94oprAZyj8cBW9LE8s4MLQ2hsPqqW4iajUZxhN9abg2QsotxJNmMEivgAHMR22ixYjswQtTUpxr24KfQcSLg",
  "key11": "5N8EA8LVZMH6e1PxPvcH4L4mub1iy2FbKwDMN74YK8238gmjVWLWyhSmXiaoRfNJdEbUzccRGhe6q1m9T3TnhwxV",
  "key12": "GXbtS9snrTjwhmELVUgnm9rRSw8aK1Kc6T92tmYVbVFhcZYriWQWNxQh9TNerKKfiZ1hmE7pEe4S1SLqTZ9x85g",
  "key13": "4UfMEwMAfHDZMjUYy4cHtGcqbewuPVXMm6WP5j7Na26zxwq2ApDPw9FE73J7X5ZLXLe7yFaBFAePdRYjVRPMuD6",
  "key14": "ZDKrCcf3yLLcuM13Pd2p2FuPrut5gjuYpLtYwRaLqxQEcxeuhBYTUTVv8bSkD1fLGme316MDAdXi7FYgvC18ZUF",
  "key15": "5bj7MYSDUxggY2GTtqJAFDe2PKY6DRraRLhUzem9pCByExgvqwXi9pP7XZ1xoxMCD3iFjWVHdVm6hde9MmVJuV8s",
  "key16": "4BwKRMon5YuNfEkuY3vwiHqQjkjZu3SYJBtJVw5We2zLfxkc6Mn5hmK3KNHQAaCDHzemw2PcoeVBc8ychffssavU",
  "key17": "2VxtLqSpyjBY9K7Q2UaEL2DxoH91ncfXgXjz8cDDAp1ioytDUzaobZ96iNsKUgHGPCCZX527x4VDLobFk2oSJguF",
  "key18": "27AqYmF9WE7YNjvCdWN3HMEWAEW4ZppAQQdvP4epKUycBrafFCLVbbvn3RzWCGybJDpWGYYrYaRQKuPXeHCc2jsE",
  "key19": "mEoooDvFRVj25tAfcgnC9jRKxf96jwGbSa2ogYg7faBePqWVA4zJb18wHcC2p624Gci8j16MiwdmwbNvPfvaWke",
  "key20": "3g7pUs6FhHzSHYFvPfcqPJZeoHc7cBg2M62DgA5i7qvcty7JkDebvKrEtpLDGWJSfsTrPT7pAXqNmmNGNCA34xvN",
  "key21": "3ptnjN7bhiTdRNH1tCdxLfQd2xxBqQRiSPXZNWepAS1cJkEHFVHxzk7TS4KHbPiKHMG2iVDLVcSkVdcf6ndhBzRi",
  "key22": "2iGwsdUCiiqCSBGA4zHb6hfyDUSHUBGQ51rUVpS7qS3UnHsztPCnAv5U9GHKWLEbUQKz7WMBS2oWCRMtraUzkNZT",
  "key23": "4TCtFPSfG5Q1x7g7z7DtnLYJeHe2a5sERfUph2Grd91utDpanvHiMw7hhHgaRr6zfMEWJfwkqMQfox3LTqzKUf4L",
  "key24": "32Si5FRkDquzQ4NyPdV9xiBdWn6DTB1fEtJQkMcBpJP5i3Fy4gaZpPATHVHSDifFTMsrk3gxgYt7KC1vZQG7sP6p",
  "key25": "5gNc6rP89ShwGNTs5QaQM4sojQ6iS7Lym14W6fJiVjcsAViWdRMxzZtZBDEHfmKAawjZpm1gPhs7pyg7sn5x8qzd",
  "key26": "5NfDaQySaQ4yqH49kgm3gorDduqF1SGyuzsSAHrFWjRLn8w9JB2dsqRupqyjaHQ148f4Lykcg2pi1SsjrV93iU2k",
  "key27": "4FLN4skUbnr8h52H8DCKD9zS9UaQVYrmjPpbuxZ5fPMJGeraFAdcPytogLsiiwfpe91YQhK8uajcV5BGaHTn29bX",
  "key28": "t7EqniVWRisq3XjQfMdbTi8yVaJGgNyjCG5CJn2ygpQa8ZwPRPww84wPotbAgNfXfk4BtGVc7f2aR1i12mD9bch",
  "key29": "3NQiTUjs8fS6qQC4yvCSUuidiY12QnbyNeTNobUyWtLgQtHuMe6uasw4UiFPt4zqN8ap1gXwppyd2bawiPzs6L7z",
  "key30": "47rnWD7SHuznYatpqgjFexo4LFCZTwufsrBJrGeiEZHvXkjvvTJcdNce5QGNSrm99XgewccSjbqxwARtwdCrkuPa"
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
