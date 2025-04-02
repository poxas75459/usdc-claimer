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
    "5AXvfgx3xVz91c9JtDpU6tQy7kYPzQ7E1irekanNrgdvwdKJnwskG9N7FwRh5xx7HN9TAMc2nib3jELcLiXCi7Mw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6X4fxTfwiQxhRV8LzsaGoPbW7sXRQcX5y4jwnjrEV344kjfoSWGhLoKSxLWcnhMvqSkGuekuKoiac9SAZfrsmi6",
  "key1": "2ureJjjFZYRosx8EnFPZ9YUWBNnJbfkhxwvJXUCPgxPxvpRdnbry3tfhKBnUU23onAmAkzRmDUYG4NMN4zch8GPf",
  "key2": "239hSNKftnXGdekHQKj5WCSgjdwSue9Ej3PypEzUun5G7a653aC5smdfXz5u5eyowQfhMdiPdDDEoXxfzPTrvEuY",
  "key3": "3CBM8Jt1v4xccJGfRLGrd9Eu9phhMvP9SvyKJrditxeq2eEnGHg7ydsJ4vHYN63ReWdAbabU8BU5tuvgBo4kfEna",
  "key4": "5HPeZR4RM8TS2rjvJwLWfSw6UFx3kQVJizG7ak9naEToMutn8P2SnBFSvhuKKo4jTffQ6Xbo6fqPn6czeZxiApfg",
  "key5": "5TQKKCM31nGzWJSMovBjHjywv1JSgykCiGWhkAhCJwsGRJAcnuZgWSzfMH8QjebkhL7KRegM7xXki69YPzM5ejUS",
  "key6": "26uktXVMArPqg5u2U914F2WbNsiZMzc4Lg2r5FafiQaN5LP16d3d4xbQrj7Ycr63a3qB7Q8XAboFUtf5qKsD6rSw",
  "key7": "EU3JGqm9WkqNziiLUSSG2ZaUPr2mvHDSt1ryB54U9SDHvHdGmzWYLHCnGwnSdmxVL917V7oLccNXnbjeFndo5mz",
  "key8": "53tRR2sJJBmrm3VdbZQKR6ihaNeuATQj5MLLVSqBukoatcrsBLq72p6S9i157ncHiRH7B7nAb72ZtfY4hAnbz5Z1",
  "key9": "2g1aN1B7dVuVo4vTLRWra6Uy9CjRnemAA2BRWKbS5e1rQiK1yiX6ApNkgWPS8TSEBNoXMBVdXQf59fhsSV6df7FN",
  "key10": "2ZEUAZoJkoTPRgZt5yueJAU9m66RbzTMAQveWwebsuKbANKAqwzmVs8UW94ULn6hZAuzEBPWMtTqYzDfQCQh2AW5",
  "key11": "5tcst4tJeWD8c7bG2C5EQRM4GNDYf9mGwBhyFomJXvvdFQMPxrjHcLV2AQrpcwiLwzw2uXQvfKR5Mc2RL7u3vTZS",
  "key12": "3UEj9N6v5nkHYSSNAVDHUcRrGMuie5kG96VGm7hhZ4zVReqQrM4RXAprmiMR8Ed8XPw2DZN1biTZQw7aUAhmyaZe",
  "key13": "5nocwxHW8j377mZyQ5CAz5knFKKERcQ3VLCVpsryCdSVcQRAMsRnu1f8qRyw8cyL7V23vfbjxJ88GXyTTqgJbxqa",
  "key14": "5kczSg9YmjpgbGseYFbmXGk8bRbWEAk4LKWqA3B5nPMVFRv1fzf9DsFRM4UUUfEo7wwt7bq4JKAozK9hcRNnhYXf",
  "key15": "4x1LSagKpJaRmjb3a64VruiwFebz4X6urH6RsSqAo7r1SEUsn3JXmQD8U6nKNGXq9rdf4Lfu456pNFUD3UfynFSd",
  "key16": "2kWvL9t7SWGUMRaVKFS3rEtSbnftXeHx1pU3ZhCM6FmoETgw7vpPsKbfcwK1oAoF94aEFHHeK8XTQou5HNTJ9MBc",
  "key17": "h5cVKYopssiq2brhzTDhs56xsN8yHerJB3Q7bT8XLBGnQ2XSEGxzyD4M9QPfp4ejMSrDAEPs9rxn5rkvjG2YLRH",
  "key18": "4ZFXNqwcLz6w9am5JBrgDyaXqefaWgqHX7BRiWZyCgcvMdQ45FvNXGfnjTSL2ovoTtPbcLEEKbm1ybv8H9rwFSki",
  "key19": "5VbdZ5AvmCdgg4kATRQzuTr5uci6SkbZdxznwVzeFcfCiXCaXxd3bL4BRuEMeMjM985oMGjVEmgz3cLBsMb6JjUN",
  "key20": "3vTH54QucAf6er8WVzxBS5M97SYU4vsCdmAmSJsiWSANderecAxRn4QApy9B8Ropx2M7rE7k8C19onBe8hr59H1c",
  "key21": "5zcemsV36J1GaVsrkt2Aqwp8yyekcpWdMSXsALrCagCAYC4xdKe5UA1RzDeavN2RbMnLwggrFz4YsfWTXFU5p3WZ",
  "key22": "2QB6zkV3A7z9ZtBcMFkAteK69diu1vpveovw2uQ9QBLg4kUn7K81JnQJhciG9ozpFLcntNzvnRo2EB1879XKmY26",
  "key23": "3vXKq11aQ3yU9NJsu8EEXXm4gXY9gpLw32D9gPj7BUNJADhe3EnkSAiW2uXYkcmXZCem9vehyUXYx6KBainjXhhE",
  "key24": "4EpuYAjxLzk1LBrffm4g2NzSfuiZspAejPzYHGrY5DRVg4h43HSEsKXcgpRd6ihzLiCEWoLDVCMcGehjPCaezvU3",
  "key25": "2KEgUMKnW6U9kR8nG8gKguHEp9ThjvMm51XNCYdouZAYqyeWxvRpAadZHjbzYLJHKk3QnRfMrXMuRcC3DPCGS55c",
  "key26": "55yMenJKGYq1QyGbfMwFdhrgHZzK7SUprhoTXLQYUGFXnzdjMKFsivzXsAB41oA9d64QAbj3RE7zwEjrBHfjcwKR",
  "key27": "4SbtVHWQZ7kwWDipACGFcy4x7C6PxALSo3r3UmFnvwmMQfSFvVhp3cX7zzNgtQKfC2n8TBY9tyncR1NXx7bTQRem",
  "key28": "24ALViUsA3cicryv1Ckn5cxCw9uo54gkdbswNo2FAYX76pncDPQsqsttTMD9phWc873TRVE9RAQk2JbihiYJ6yfH",
  "key29": "5knggUshkBLZyctK3u2taca2sLCUHjVXRecPSk2jFY2g8mTB9RngREVAVDUGFGSuKB6ZPuxdvWTV8mVGUYV1tZbD",
  "key30": "42zHf3DCadrihjCymWF4Ezyw47QXUsFYfhwS2tf8AATHCkD5kn2u1ZPTf742vZ6c3BzCzeJZAQiAZAspHgxN9PG5",
  "key31": "615braoFRpNphNs95bxJiVA8aTYwaymsZSEoPqJw2TAQCq7XktXLZv2V1v92MfFcpYpXuTLtKhbBbf1x3RG3NGxb",
  "key32": "2Uu1RD9HzpBYEJfnGsoroXAhALHVEDaeomGiiBXH3WEtGo31jxf1JNju4eCm333CGWKkVFE9ch58epVjZS5Dii2K",
  "key33": "cw7xf9NzMHx128UgiqzfdYnoUaKtHS5uVCajGDvUc58amQYzofitoQYpkT4zgpkcqZkKPXiRaCKEUqQWLRngGUz",
  "key34": "2tPugviFcKXXSwSjMrXLbr3aJAKw8FkEQCaVz1QtF1KiLrrU5QN4zTa1v2AyiT7GuQMtnQ7FoPa4ygUwPpZXeYYM",
  "key35": "2c7yXoR5RZAihr7dUNhQMbkDHCHdjzpFcHGHwtKTBM7EdgKtF1X277Gx6CWjUh1Rmv4QnSWNq4iL7SynYSdR8z57",
  "key36": "2tqjSzRNg1st6Acf95zuALfmd2psWZEgDeGWe7gRvNYHoTz8aWXoeCDMa2FNdKrsTv9GtCw958NzR765ExsAddiC",
  "key37": "3h4HTPYAiiDKqKegwYxpxz6QT2gqsgv8ChzyKXxBchwg2aXXAdNAQjuZiytD18vPaWCD9fPLLmoJVT8YZPTUHbdM",
  "key38": "5S7suZsZaRvpBNzuXayY8UKLhZ2xVJdPFp4H8T71gKvBfe6Zp2ii5g4naVPjsRsEpBLofTdoiUwecV1XmjPGGdyo"
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
