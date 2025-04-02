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
    "5aohAXt12YdXZFiviJ4eE18aT2JwpDv1asyvEvuhHNx2KDjuKyVQxfsCMCBXD7i3gwiAAiVUbRik2Ek45idMvhCY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53zRSLzgVC4B9dLQvoMNcYGsGBqRs5rnXYx4uFa9tmRrjQTLfSC944K82RRRoBsG4rsmEFqjvGg6W6TGs95xdEsy",
  "key1": "3pC612PqGGkHwnVebMBkKo8N7pZ7eSm3gAXL2coWsvtPpfnGUxcJnoV13umgLjTJg3gDnRyjX2cq9Zr7KZ9dJgkU",
  "key2": "29ESepXRKpNubHNQUANGVyNcQ4ysUYL8Yga6jpLyxpiENhawCfPQW9iANToQ4iju4TY91WSjAsuVYXJSuGTbeLdo",
  "key3": "4JshWA5UfqFqPvgQZpe9dHgSmDHFVXe4cBK9hg4AUN6YkVQLrTicTYKYFPfR8KGTKA1QS4py8UeEDtRP5KVLYd8a",
  "key4": "392axhkUuh6JJ7xZX1V7RdkhwFEVgzKuTfzAXxq8sbkdZg9gPNRsUByTN3hzbf14g8wW5oMFfpb7yjPE6PFvXqv2",
  "key5": "5V28Y79TLx652H82iG9ARVmp4ufRNKRFVVPcgFFRyW4V8o13VUmeu7jtrK5toFDEkQF8HmSkiaatgt5ZXas3oqV1",
  "key6": "4oPT4gc8WymjL5EatYAV2ZWUR7Ahm8SRdp4KRQ4vTLudPwVY7R5VXiSLUowSDUN4F2WQMLVSBGCfE187EDEBfssr",
  "key7": "4zgpg59ShEjdx1v3wYj6Wz2QRfDitkzi9wpimyfnLDkUcYWM9snFUvoSxsRuRmMgdU2mab96cQm3ze9291BLDqWs",
  "key8": "3zVhFW6wExNCZc1BBBNTvyViwW4KMuzcV84NyRSFfZkZuifMokSdVgYZHWWSYJg2FGqoxMDUVyrYJ4KxCML4wNKp",
  "key9": "SR7mVa5WtxPAQnHytYNRWncThjq5BmV7jYFqAvvJH3X2gCAddwvijsoyoMvQoGmzJ8dSvyWyhDqNqiwiQ3BFkm2",
  "key10": "4ujaUjZXGbJKnShWQeyRWRXKppNWNfQ6H5fuGBLC1wmdeJyWSRKdBrLeZT7eVDzvbPmpN4VNo9wj4UjmaC3joEUw",
  "key11": "eH12LgovASi8MEFqZ2CFtGzcmbe7zWb99qtHTWJAtqBhPke5UhH8p1J2Axb36kcqKCA6kM6P9AKeSaCCedwJvnJ",
  "key12": "2VtETpuWF8EwWr312qFeGNVTAgpiAEc9WicEWsLRAPEDKmd3Ee96pLiuFmByYzUy5kGBSXGaaazuy3TCduGUphRk",
  "key13": "VQPDpdJ9hxwqdLbrJ9sSnhKV9FaNan5CJfKMKDphFPTzVKFvBfPKaG4kipcB1EwcLXLth9bPKuYi3PcXuBoaouP",
  "key14": "3k9dzLP4W2kvn6W6XDfUWDTcRMZtWK4T9C6EZT3MM7KixshHQrXbqkYbibR295K45kAJvGpsSEDEmZ6ovYnwFoeu",
  "key15": "HiP6Ln21iJZMknsPJA9ofLvxSGTQKxbfqCNXmt48oJ5jbPNCEbo6esNeJahExxsA3byiKsz3wRD6FTnSJB4VGnb",
  "key16": "3BcaMqrzWY3C5PJ4vfw1mf5vY6q7S8sSxyPKbRukyQiwBLstpXphgGUmdUsfphRbufpNBf5UvgEqmCHSPRMt3gdA",
  "key17": "4obEbDgAPQMkLMy6aNt9gerzNL7E4yJuetHWUZ2zBdYVyTo1KcRvFUgK22m1Rcf2obwREnL1RDrWviWb9qAN8cX",
  "key18": "49dbwzxrcjnG7mBDwLV1xSKs8RppQpxeyJfPzG5YHz9HTa4NGPfjRSfoQopufPJcGpKRHPbycr2bf81pjoXF4mtv",
  "key19": "4SFc71gYYSiVbAgRPQczeC2dTEaeZXSCBETZ4ygUEfPcXETu4spaJQg2ZryA1vpMqUXHfbg3K7FY732dMj8sjSkB",
  "key20": "ysicvJTPrE4q78VkyUmNBYxPzG3sg44McLHg8LF2xXexSCNFpSKCoz3nemYF2dPgHiF9BJFUqvZANUv29nRAAQY",
  "key21": "4ZP3bKLo91bkumMu6PBHMJZTSZfNuAY2Qpy9yBfbmLgM2swcbsrSgGm7HpHj8uVPjBJGKzBzP9oqShUs7T5ym64f",
  "key22": "63RcHnXHSWHKv4EEt2gVmMAymDN3MqQqRcux4kRRZpRKDFstCneDKHkJNjzZdqiZ4WPqUZEB5mRz146SLoES1tzK",
  "key23": "4xu9X9R8JeKTTa2rysrYFkvwEjGPQGhpJJU5bQdAiudo277zorY57a52cfWGApr2PG6Tdz6apGHXMqju1J8FYQaA",
  "key24": "2FBrAexvS1pjXbXRkRV527ajqQNpshzVLsAmow3Wt7Js5ecJQMntU2Zhzvs12yK2Xsj8otFNd9k3B1HynQn4tvoP",
  "key25": "4dXEiVBxF7PxVjdBx6Qh9mWpJdHHca8M8fMcEqqatYyaPFQRQJf1fF6ya3ztKcYQKvfRS8aHuopvNRit26Ry1hML",
  "key26": "4Rq5a3rxpc2nM5vtPu2u6wRX3PN21VHJESsMyuhCiLin3CQzKB4YVTqGD5NpddrRpftXCUgH5rseqJsvNZY3zw7t",
  "key27": "63CjD8SAu8EEYWb62BLZv8dCqEyqdM7PiQepoYMLY1xBSUXPyunZL9Qu3Mzpgeh3Q31Ht4E2Z3PEKsPucLhXC5H8",
  "key28": "rDy7BXBtDgmTQBfSYKoDhSBPJgzWQRQkfiV9MW7c64HPfvdtfCpgNsaYbAGCuuRE57Qz274o4fYhC8rVuftN2KR",
  "key29": "48KSSrFC4kuzCGhzaCCw77EMJj5etxXJqAV7MEvtgBcN3fr5dfBQc8DBBqaUMSRaoyeDYAGYzuvYTtsT5q1RycJa",
  "key30": "4BAzQ4jqQSvioUMoaS9uPxCuQk7r8yQ4wN92ExdEVuuAvtf8dF7HNYcecoH3cbg9SiURR2araJG19bafkTtUZmBk",
  "key31": "2UF8XUoNfsBhr4yfHrjjaUCLXv1tLW5cCN8x7LtoKzkrtHEUhdfkreFYzhQHw3nrcPVxhGcb7aqRJtmn6wcEuJ1K",
  "key32": "4ewnfxFQJG3Vb3L7NEwEP7dR3bxhf3gUfEDLwbU1QzQKwhVsgNbm4cApucTaGB34w9XHUjWwaKLLFFngvpNh4zgm",
  "key33": "4wN6CkCG61tDf2x12mYBJJP4asxZoZ694jLwwd7AFY6Yxsr457At78Pam61mMNDdbk5knr2cLyKzowQPhUtDsBvD",
  "key34": "4TXjpoBadvE8v76sdyYi61sUvF6aMSX12XYFnD1kxF9fcPjKo13BNTaNDvr5PN5sRWv5TEQAFEnojNBqxGezMiLb",
  "key35": "5G2vuqRvrffAJB58yrbmjmxoEyKXM3L3cZwnyPtz7grgyuHeV8nbNZkd9gkg12ZFxxUPFZjL3LND42eB7uEAFy2s",
  "key36": "3aVDWAvAFM8eQ5c2y8MmQTjKRE1khbcd4peTKRyrD6hCy4aUEonfrf7kmxkJcBGNMqP5f3E1X9ZVmU9pyGMACG8B",
  "key37": "3xfLy74FtH1Uz3hYgt35t8VYPxaycF6P5umZmjqNMAY7CXuuVMd3pe8jQXBWuNxHfY1yWSSHip1sDqnLzXXAmKDZ",
  "key38": "Mi1W4stApvfhjq8wRttxRdhAzKdzBcMLnLUcxqe4sQiY4qHMqhjb5t63qf9XVNYMpjZob6MRRiyx1HWr33PEnsw",
  "key39": "3ifSNx51vez2hzGyWmapnwr2R3r7MqAgg1BR8ziGrr4LefsdRMoagn3KU3ZFn9F4pp2t5wbr7q9Rmc9gi2GboX4T",
  "key40": "3j8ib4NVCfkeyyBgiyzBCHy9oXEaUiwZmm6dTJxEfgZeqeBjnVJo34rMNscWvFdgBYe2MHdKMMG7RSzcyJ5HUMgm",
  "key41": "5yqnLTrKrp4GoMeikgeHLjWkcwzTJE7DnyjykStXwtQb5pJkjWjoMppyzgsxFFnoEhGrXP8oExqBgVn2o98bry1K",
  "key42": "3zE4JPPDdZZC5pvwdVrrKcb3jPQZ156no9HY4WkvyVSnQDaLoNf5LEdQ7DyYjh4SxMDmCGEEgDEuTBdkwMJfaRBE",
  "key43": "4m8Dgej9vTXoAoGHZQSBZujyP82ic2dBnHcr1F76kwN1epG2bGve241KA28M6fmJn18rRdS6B2KWwq3QT4xZd3yA",
  "key44": "3zTNMd5eNPsNEUNc5xkTJkku3oxUc7RZDhZwEcX3Kfc9Ej84LGCYsEh2ZTMcvbr9EWd3kHh3ymgTsRVk6q33JuFh"
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
