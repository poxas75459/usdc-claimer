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
    "Kg1VUW3PFBvzZSzvUCnveJoaPj5jR6VU1Bs4j2AW8aTwfBcPHcsbwNb2tUvUTHwYYSC9MDADQUDM3vQYaTJsPXj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51ggeNWxzBh6hua7YHQ73RCbKz5sTTRvMQNUQNLjGBPsStDwtEwFdZNkTMCyhKF7mN9EQZEXod8pLi8fszy63ajQ",
  "key1": "37QMCDDrZAD4cyBiiMcdrs7ip3e1P7nnXcaZsCpsotcHL7ababLMpkdWnqE9zcMNW3ou29DEsnswjGZr7L6tAff4",
  "key2": "2MSpEovwkaTgG94rQnyJFMxob7sH1UUNMAmMYSxQZSTygZdu24a4oo8aVUwDWP1UJyRSdK2Em6a9LfiAf6pmsS95",
  "key3": "4HCtaHMaugf8pLhyrAkNAKtX2vR9RtewRcbjLZMbmyKsN8VNxc8krqW7JKwxDXf1YxJMk8bX2XFqxzYh1Yr7QfGc",
  "key4": "5Cv7EMjGgtKXYY5rf1NPQZPkapc6ogF8k83muQyQyiXgh4a9QNBAXT1un6weawn9JjpJZBV446CpVSFcQt8HPK31",
  "key5": "5qEH3RSi8igaLB3t5HQXVkQMPA9PYXbB9mZiVvewThKixc35FjFB9cpoFfo5BSo7w7HYyvCA5rQHRLSfxihKJeQ3",
  "key6": "5F2iY1cFrg47Y9BeFqwxUWW4H4uLMxMoq7k7uor12URXgeyhjAitob3Cu23iVZiCaiisvw92xAKy8JiJ2VAaTVJk",
  "key7": "2xaPZEcoMJ6XbNyu86bJRnDv9zTJCVC4mbmBGV8rDceZK5HbpRi6q1ibyRzCZzckmGpFJZRLGeDE5sMVxUEYofq9",
  "key8": "fv2YrUhnJVTP9AvUg4iXDNDeQVYzksCKcagcfXVCBLghgjQPBMpfmpbARpz7jAGkiHaku9iTo3YWy8ZqfAevSTm",
  "key9": "4yRAgezcCPiwiHEEGE4H7gb9DeeNT6xgCQuDyzSjB4FWdsgGSQLyd7YY9JBvVxYv9K2TUbCRqbyEPVXK54td2Rxu",
  "key10": "5akPnr7iseW6jr5iCTHVdCuFQLKY955QL5PpnUhFzQR26BCvtMMuTRb9qvfTuwUsQLCS5zg62BoQ7HcYU5L3a3vV",
  "key11": "27y8kCorbbb7hnvRkRjtM1hHo47cnzo2pGWfoQjJSUQ22Pc8oYytWfV3vEEwRRw4PuRbC2p7Vgvt3xrfeKDqA2hu",
  "key12": "3T2k6waJQJeS5o33F4ZDuftmtcAf6h1fTjw7Uok4rpSfRw4WVDf7sKEqS5Li1uEn2LKkVnLvqXCHNTs2xKDtdjdA",
  "key13": "5NYpmWiSGnja3zSp8uLbkaxjPAVcQfmAfDrk1NESe4YfeXxnSBdjddmuHR1vGyaZPdqupx13nYerj3NYCXKQmBf2",
  "key14": "4hnBqMvk6bAteHu5zwbBwJckY4NAUbXiW5Uc8xFVxxXqJgGTh32iC1jiHgipnvbqraAcjb5gg9UGtiu1N3rWo6UG",
  "key15": "56p1Mvp4avoTCqo3pyzdqAZBNYHo6b74ZhpnsHAvczSecG5efGuqdQE2fMizCZtF8mBuzBw3XwUSgbJhJvRxrvnx",
  "key16": "5pNyBrPQEhxY1jo8NBpRxG412hZv6QBud4G5tkhsnWLQ4tH3kH9L8kcgE6ZsBLzg3FP1VRuShgtPBgaSc6n44qLo",
  "key17": "4y4QhqzPVbNzq6Eu5e2L3NrJn6pU3RQdoENdvaXpU77ZC31TRB8WpWELtKS62Rcv5Ar2pRBduLE9V55aa6bbsD55",
  "key18": "5ZJ54BeMsP16X4dXzFbLBf3uSg6mZg5mbGi7YrqmZL8UMCx1LjDw9tkBFg5R733qsVCfUGm4CDWMQ9AeLkZn9czt",
  "key19": "27cMugQDiNxj6WF1dSPNf6Rb7Dv7qWAy6Y7vTVVvKqH7b9sBQsaYgep8S6FJ87Xk7xmHPzPevhbAMLq3YuQ2Bobd",
  "key20": "AGiU7dTts2pgcjHSHj3S8GGLQG9V7Jdcq1rfrUBXJ7W1C49FZXeYyw6mWtfCjqudewFahWG8uutCDvNtyRVxQjk",
  "key21": "2AY5E5cwzfXnRGGpcuTVPXBNYf33NBEV9ixbAicqE2poBTX4VzjSxWrTnJXDqNb7FXEBHGTJ7KPjeukAVmGdKLoH",
  "key22": "5MupfTLYC3p6GPaRX9taMwBnZETJKfdgxJxuHJbQcVH63V92HgNY2Ymj6UFWvF1rFEya7vdQJppLs231hvsRjjh6",
  "key23": "3qvvLHLE2Sbj3hssfDDPr6UXUGGh2d9jEWUq1oVpbBN3yD6cWVuBxqVgdp72c779W9AAiJpJtyMtyZekKxftnK7q",
  "key24": "f5fJ77WrSyF18HseTaYUXuLsnAyv6NzT4xoVgC5KemLH764RUdEhiKPHE2QWuUUXhA4zv6TX25MH9qtZju73NXa",
  "key25": "qdA9QNi8eECvHZncpHryVHfqdtfespLE2Eu3FrDiGQuYuMNp4igEqurYdQD2RxqFxcz8xvkZSqoQbYmTEeuVcCS",
  "key26": "3z44LtvM5DvUN2rA2FY6R786deZryZSiMFGTpygmUBCByun8QQJ29cBLPEbBSu6DJyWVU2SiYCek5MVQC86Vwk7P",
  "key27": "2AuNiqZ52jHxfbKbJ12cRYfhPV7oN8k2uDMps4BTw5XjXhhzsTkiNGvNFF7aAzg7qaZWeFaaJp6m2FNJJNSaqjid",
  "key28": "2buX6WtY9x4gqRgJUFJPFuNuQ5MdTJ6isPn6c1SsY67FmpEyNhfbBE69Gss1tkpQFtB2w2hJXfgbF7dB59vop4Tf",
  "key29": "5VpcXtuiD9sfFrpmSJxPY5SueRFiXMi4ddB8pbAJP7QSdJq5XZEEuLALfQjL67PXQwJJSHdEWSMxEVHyHRCqtyS4",
  "key30": "4rD49S5SbrYpRCDRwcgkqzmws2z43dAjU3kbX7tPkArqqMMmmCQbGCSzgbPZNLWHv53RoYLxPYPuCWftQsqx3y5U",
  "key31": "3mBbDLiRXGzCzuNN3JYCTf1jgr3pkfQ2HQ6FmkhUdjGekxQ3h7ryZoCKekZWLfD2xkGujFkEdQphb5BsbJKmvJfF",
  "key32": "2fBrEcmbohCLD8KWq1nr217FKsNTGxMnpmySfyQJYtrcBA2LK3B65NQJYT3HoqMa2YE2s6yr2dxT2LorvwyL2kjN",
  "key33": "294FgZhcPhPWoNA2FWCNobhV82LPJnE6KVG348JyrYbpe9bicjqVQbth2Cqcom1RGxPbvJMNPrXH1zn4QUadmt11",
  "key34": "2S3WQS1PGHFg5y8AgNSZCPR5LNoL5YRnh6xkK2c5ZmwzBLsSBjdRtnwKEm8knJxjSi1JwCShERyvHRArJi3qD5BX",
  "key35": "3YkyiCVfAePm2BWrHwiBDJQp3SXh1QakUMEz1rZt6KuLvgx1kkoV6hZv6CQvuxx7BSRFpykofgGcQSfn5xEyt8dN",
  "key36": "2yNMNzpBaysgA55jyjd2tEr6zHmpqxHZMYBXzC5dkXjXT2J5JMw483miDZGcrLBtGLB32t2R3nF7dipJY7XfepcA"
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
