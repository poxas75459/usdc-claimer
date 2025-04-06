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
    "3d4ckqKjmRtMmcQz6y4qAYCdKboUNqnYRTsJBrtZtT5mUK45cGYMGhgbz1vdqg8RLQ7z8R66NSxPNSuW88u3XPkw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39XoMxGbtqaxNKNjkaKunWuCwjZYrat5gGms2v59Kp5ziMrxVmSTdDNAGKppc8xMvFVeYybiNwprYrLJpxPyY4kp",
  "key1": "451LmgCsPQkKgrvqvJLBkowghGrSphYf25SwPjp9CVV1BpiJ75dGhhnz7Fujr6fpEtj7WQJ6TRGTugycdfairEd3",
  "key2": "3kPmSbHXjfAvRucu7CdbmvgLEEBNTgdyhbM4P1GhPsvdyWAoFCobb1Vs5xLC66Ah7EwcH1ikz4gBWgDeW6gFDWhD",
  "key3": "54sjmqv2ov15K7hETVDxWptpkyMtMtbPyhjdgWuzyGACtKc3m9AmNxtfQcuRQvNUHqQEfVqFraiFWhKtA36EcUA8",
  "key4": "2aGKdztvPUEMdU29UEC4ZhNvAE6w3zCvVo6San8fowMkiAsn3kxfBrc4ZVEwTBnYqcJ8R6f4DVsgugg9Dx2GbjAz",
  "key5": "4jjsBb3H7JLc9N2xV2gAkMcxzL9UAu1S8fpvBXfH3DZfUeeC8NVem3Yau7UyhfbVUCu9ZSH5qQXaX6k8WHVH3atG",
  "key6": "4mWN2FyanpxKMdE7MoPBtGxKjvASdQET6UURqUD5L2FdqryHrd5aALeEq52Zkb6QZVmXREc5U57jbNBxSLQaYD4L",
  "key7": "2FqQ1fgAymcvmPQhzYez9XxxHFoMVJ7BmR83WDcKt7UNN2vYRDcYpd7L4yzgJPXwc4WF8C47rUr4bQFJg6KBgGcu",
  "key8": "5t2p2jsjudRFFuyvMnLMzJnrBSise8F9Kaenzy5ezgV29N3DGfY5zacmGbf3frLn4YwRVingHA7NFm7yEZmWq4pM",
  "key9": "5B7mNFn9iVeSwERT6eFXzBAAKNAd2UdtQCcvnXjTiaAv7LabjFeQWeMWA1hpV8jEdVHaVm8VR7M6T7fML8pGBeqj",
  "key10": "5yD5U5bwZ6FXqdrzaJprTJtjusyag5csdyb2Fk1u6dA7sQBHPBtBRTAK4sFttezDLodNphEd3S2uiPUyA7QcTRfU",
  "key11": "5zaCHh8Ph7sHus8Ggyt85W8Ji32CDdvS7H4bYtYLa8auhfo68dmT2e8ZsbtSS83svDX4enELohBiZxyDBaFNebgi",
  "key12": "3iNx958U1teUcmfeWSfm8Vv9Vm9hEHYTGa8UGjPc43AL2ui3AzxfP4ZKraZ9xejuZjX693ahEernXeJKt6eXPMsG",
  "key13": "4v9EX2tEzHpUP9bsX9bxm5XRDLkt65V8Z3PK1iHiNFYCXxhgyRQ9LarxUbX438EA7tN7KYpCiaSDbN7sQs5HmFwc",
  "key14": "2SuT28iyW9C3WKUpjZHUeukTeJ7E5oGrHjxd86C9FcenG8nZFLvvZMh9HUNSCVE6ySR2eGNrRuufcyYhZpbeYiYv",
  "key15": "59tkYBmz1brcZJry2Bx9mGjnpnmbZrQWdtojEoZUbE6kQtcVNR2BPmBVfY6Bjn5h6GTuzviFZqLmUn1ayArxYPRz",
  "key16": "F7iUtwxmb9ZZ5LguZ5FaYSVaj2Y5BQCsKDMMJZaHLHawUFEHmZakyGGnQq6FHGbAW2Q5pnEYPzs753J31zkm8Vx",
  "key17": "4oCMKtScYJZPRjCkHQ58J4aDyGAoApz6iaCHn23R24NyPNZuhb5SmLSYURfnWsEvfMmfbuS27gwQ4GUajGR8JT5Z",
  "key18": "33VM1agYe95nBrjBjdXU66HP7eDRgZh7oPTNc5uwEGZMcUyncKsTnQFZ5QFgQNN3YdiZpAMX9W5KhBxcZ46oW2ix",
  "key19": "2yqAZ17ekBQcUVd2WLaFrsAaPzA24gto31AP5ou8aWF57NWy46K8gHG1PXRENkQ7jgwGhL5MEhhawVT4pYGhrTuQ",
  "key20": "26D5EWQ6v29TheWHQQg2tghKbLpgwwWaCo8hL1kRLcC6QTuPVqj7CCB9mJUzz2S41iQb4QRcxQ89hSmFdQznm8X3",
  "key21": "5g68k6FkqKcHLBicajfp6e2Vr9TQFkdCWd97QKPSZFLhrR64ZQBQXVNy4LphVtYL2j5yZ8NUYbpyTzAsMVgz4Txb",
  "key22": "5ubmYAdU25dqaWCpGo8d6jzULQFHXwkKmaMS3MYGqpqvYGCk5gcx4FeAH5ZFfNGAsQn1XbAJGHYqffE9EY1DvUXn",
  "key23": "4KxLLGjhZwgjXMAnjxX8xz3mdLL5wqM8S9aH6SrqSWpvfhkKhP5iBbre3soun7mKHcfGT4fKqEzbhJ174PHtA7UX",
  "key24": "5jjGVe8KRjQaN9cFmuTSsKkY7wrrunsT6EkaZnKVj9MDGA2XKTePoFJwkrxAEJb1otbAGJrGqCLsEVqnxjFuhUyn"
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
