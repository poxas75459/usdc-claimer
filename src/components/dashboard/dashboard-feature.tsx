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
    "2mJLmF7XHD54kYHJfBzeR7abaBoWJdJH1FqX7dsYrCGMAxD3Gm28A4HXzm8JN7zG2qXKNMPK7sJZmrFtkt7yi6cR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vYyLWi4HkfgLvh9LfgnFm1J1wRumqogmXasdhiWh8S1LGTLq9SGHw71VoKu5Disp8ZeZ1fr4Rh4T6Txb2cRD6GP",
  "key1": "2dKaDJg878BM6N19Xh9QsNZ8kLAreKpK9akVXE4opsf8rkZs3z1K9fpwthdMjRfRTgWdDyYa1NtjKZAtFjreaqpP",
  "key2": "MSifTvzs1eBuBHcNEcNTAAFhWAWuWMt1ZZvHwDYwrJeCPPVfVYh4y1WUu9XXyMSxkxZhqyUu1voUPkyA37RAKmU",
  "key3": "15H4vt6gQWc9cC7TGz64u313sUkj6i1jRE3dGSmiuCeWA8Fq9B3jtzTK4cq2Jjzs8feJbTZEKisvnNKLzzFJeKX",
  "key4": "34KgFHtwA82txireDpVps2n9WVvhHEjuooRL58x1wZn1mfx95PTpkyx3xTH1dykhQXG683KwhiphkFh44i5WUyXo",
  "key5": "3sY6WghscGpiQzu34ZiUSaP9krmA1qCtokMpa2mCUTNSmqjmqgLPEFYa15ZnEcGfwVgHX58SitdcY915xTaz3zkv",
  "key6": "3VSjTKGVfJTQ1R5YGgeGWQVjW3r72WKyLZeoMXrXR9R6CvazCMKqQ7dg4YW94nQorivn4bQKoiWYTnNCbmuDJAqB",
  "key7": "2GDsD9QRs66qVXgssfESYEqNWHqZcPuU2WkjRwwQtP9qLQEsTYDK8QQjbeATNFaSHftySTBY5NpgnozgQhBMHx3c",
  "key8": "5fRL6aKniM9ZqwpxyU6LHS8P9fNK3fFyLf3kZBzEzzRbVfajmnuDZuSoJMHnnFHUGr2bDspSWxTY6PYELXcRTdEJ",
  "key9": "rLywCQk4QY8St2FnVbjGCnCmP8DYvZ5jhEedPh3KpjHr9z85aY3q2W2h524HQTYBJ67uDTyhK7JbjcGk46Vrj4S",
  "key10": "2LwxG95rvRLk5r3AGgVMnewmT7QaC5ZaT3vvNWTxUoL3UdTKGKvrqssz88gpXsoJiG76sy5vM2LfA9cvadA74EAZ",
  "key11": "5ZtVxY1jxrVwcmFhz9131YvsYH8Mh8kwxzAEs4jZJmHuVmtyjrT6nz6xUprLBq61iPi4E9qPFZ7ZoDJrRjVnboPT",
  "key12": "pChUFbYq9ucmJaKtb3t5KbyoBsKYvCpCRJv1KDMeYp1pU3Ct4cX9bBy4uEcNoy7ScV5srRTZHzKVkVpzuDDf59B",
  "key13": "2my6RniWf6Ko2jAHaYrUxssa1S2ACNokfvABydbsmXAJtqiBDnby5vxNyamNXqiC3Kstjx9vARvLkfde4VbZ7kbY",
  "key14": "3G4mCiMmoM7A5YzDav2d2VaA6e7MspmQagFS2kzDR5y7gqrjm4FUgqMKowVmUQ4KRroMC81mzvJTdcWQ4hdgUTJP",
  "key15": "i1dnAtKpZi66J9WA71VTjyiLzr4GEypuFUTHNzxT66y3xvtrXfQmvFdCbqfvv5n1T3wodKTdjPmrp1oJxqdyL6L",
  "key16": "2KZ9sXLS5UvftaafiwCJGrniGP6qJ6kPajvitVQ2TWrJA2rWUGgtvGG2YaYy1E8hba2iFS1N8EVmTNRf9cxYvLyh",
  "key17": "47dnuuCGEMf92JUyzuk6LfbmW7ocBV1tkXxLMEmQgd56CkDErdd2ph6Va7LaqBUGqyAyAWEvZMz77B2NDLxrCSxk",
  "key18": "2Rr9Ex3m6YPdTdQd5esquj3kXVKs7JWFtLrHCBWTHNZD3Tx3eajciUoivWpxkr2DjY4PthfMCwr588AdGRpjHRbQ",
  "key19": "4rtk5BTnmSqc1NAZKwNVrMKeWcP5HvYj5S78bWsvimJT5KF17ZcrxGnBbafA6KgRihAddhY4YvfreVFbKbmboxCX",
  "key20": "2Z3AZh5cuwYn1EXWgaUbPqQevd5aeEstdvMtB6L7DW6VDunHiWNVBRMmTLNoUYvwpd7Mj7bWTyCZXMcpigH7sorg",
  "key21": "34DGZz3jivjaeL2TiwrVjWmra6R7X7hJKCkLWL8xSpxnVXazDiMabNKhbSezaX6RLULUfmiHg8EZuio99ciJbdFt",
  "key22": "5LMTjDRSBE4dNAQgi3g2oZV28Zi6X93b1r7Z3rgtvQTQa9yuaQt1qsLnGVcixAsVecpPFvxTWrg8nh7eua24kCoN",
  "key23": "F42HtgWvewmbATNjVK1vFugo2QXhbj4BkVtobT66VmTqF4Nw4bQv9iusbvWmdb7H5EyFfUifSuwXDmAT4zaYy2t",
  "key24": "HCC8dwRpjVn3KvYnWUoTbsS6FvxBxaAiVGyonVxUxSEajGtCPsQSUW6ceQUwVaPJtD1Aibnb8y7U6rpXTSuyjei",
  "key25": "37Pr2bPWtLro18cvL8xiWonzSn8MVctGPkXj2W7DgjCoNc6sjMFnoyvBRpqHzGfKtPww2roJaUuvxqCAN4uLzwtz",
  "key26": "3vduUp3YeXbUx3XS5o6bYBny1X6Yn5GWXc825inT3R7i9yPdqBanpd8xnLueFzJRTqCRbJozDAJdZ3ebiVuQsDAf",
  "key27": "3XpWy6cS7s5nz7JuTo6SjsL4SMPTrL6bg2gVssbVuUCa9PggVpmEht9CDyoiJZekBZXywcFvBbRbN75GGJaBziSB",
  "key28": "nt4t3meJnRmbtMYUzPCd7YVL3gjN5PyzptLPcamd85opMMKZkN4bcwVuQcYRvPLxnuTZa7HiwjeSRFrNbeMTbSi",
  "key29": "2cpwUwwe5hwE4GWAtrJHSoYP5aN7ipsjNFqXUJUvRehJm8dUXShde7LvGeDLZLBujiEePRLgUeutjMq4GZLXmM32",
  "key30": "5VatSqbBU3KCZgn2ChDyLYQQ9xtqRaCYcwfL9eLpWDx6wTXagNcxYJrt9DojLze2dtJTfPMpBnWuomN1fc2FLhDv",
  "key31": "67Ut3kxwTNNd7RHvX41CyeghMK56GoLGSDAeXkCTamYSq2dqWDWaD5bcfXmbadNQVX95WGz1ytnVtxkiGd8zRhZT",
  "key32": "3gMfet42mBmR3hkAiFBkYVpWsGX3cQs9PuWs92JctRYfPTikg3ibgtksfdmrnU3c3gqt8a7g4zB5s86Qo6aQux2S",
  "key33": "1F1ggN8kts4uocEvCBZabGTaYtNYcb1XjRsxxakE4n4qaGoTc6j2AytKQRw6DYz8FPQSswmyFwWrAh3qEYXkXtg",
  "key34": "3yM7DhHpumtmd5Md9J3pdGthz1Jj9z9ioFkxvFbP21PNii7n9gGHRGnnVXrcYhkAADgW56NtS8k6XVvvkaAokjRH",
  "key35": "5eA6PFo5pErhSSSE3QVAcbxH9ehfzbSDnPWnPNZJ9oJXpMwmo6zEfTN19c8R5bD7YAfV7F5QTJmg7fmGac6PkbWt",
  "key36": "2AwrLMyYmheMzRJVdky1ysHPke6YHzHF69b8Z7GV3rejheQox2LqEyhVAMukCnZM6bPXhZqH5mxFJhM8FwiMXMZk",
  "key37": "5vjKoAHTCQbkBgXCSj22Qeq1zGbTRZKiN6LZdPR5Z87zbFPc8Hu9ssT7CWtbJ39vroF6mFQE9zYHy22NWs8auiG8"
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
