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
    "45anKnykFvU4DsuQgHcBxRTb446MHJvUovrZRdCVHTLxJrVcFNsSaBZdsvr2QEA1SraEBtz8aGQXMMJi3D5j6fWe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ebmn3TrMvKnL4Nydpomhab9vB5LWZCT5KZYSqRy5U6oXC479V7NUNDZP3pY44qWPRxnDBFPhC59Gfg7nZP68JBD",
  "key1": "3vKbVVWt7wewhFD6QoDyxjVXr5R6X4PLXZks86d2wFTRthkxRMT2h3keKKkxTzpZQFfyHwNTydC49HR9EgbdcMY3",
  "key2": "5Q9Cw2vcmHANtjZBUyDdHNo33Srnt91nusqMknWopvYxEesVqY4CU42Nx7XGnaKK1pvn3Nanw9xTgb3K23uwGw5N",
  "key3": "3b4EJJfeE6Ja2JAhYzQjXK7KDSmkMiSMM4LwpkLgFoutnP3GUCzE3QNejytMDNj4RJAC2UgC5e9wPKjCwgzUgaGp",
  "key4": "LvPq1wMVWcFLJKs1rkwkxcteDzvD3HiD6cCL7bAv3BnQh1aPuApys9VkqCAVdVLx9NstMGGgAcqWqR1CkUU7f5z",
  "key5": "4nshZuRKEkGHuUuxgNKu8hDjUpgkHAhmws6nPkLb7b2PnM1xRuRXYPK93dXssCyih1BS4ZqZFEniPjKtEDWfFWob",
  "key6": "3haLrUi1WsLBMCfeG8HHXqA1fJcxYF1KGP37CspQYxn3TdasTdkMffXX1sPP1XsRqxMBNdNVZXPcTothyfP7ZLzC",
  "key7": "3LPBhRrJGMnX8MNAGcRCe41s2uRsjtZ9i8JGjxaK7C5KfC4xAw1ukc9MpbqXuh3T4WfJQTETbky3zzxgCYev6bzs",
  "key8": "61c7YeyL5BRTbi9gK5MkjVk4ETicoaDEvoT6HwceucoxPrtnnhSt9PxdhNDbYPH6o5x3Y6BocCQ6u6fHXM6q6fn",
  "key9": "2x8xnF1XWLV2aHTUA1bRRky6W6WzjLiqbNs2XiuMxmfaPVdRy6K4Y3PjDZvLMDaRbBxfJhm1MNWYZid5EpdDQGhB",
  "key10": "3WHX2133JWAtfwFPAq6D8A6ExhwEkhoLcb2hHyQsNH3aug4e2p5FE3y8rWhKi79YQKvfgyJJyUadz6utvFKiYHgM",
  "key11": "26EUjDH9fGwuLpC4QSsn5juwxq26qn7ScW9y84dBHF2z3nxyNnEPvRnToD4a9UVBJt1ecsMKcJjkFNiYPDtgBphs",
  "key12": "26Qdr2xrEkHuiwV3QjC9N22N9aHEqtYaWTSd4aBW6aUaUwwbHSgW2bVYUDd8cmQAG2wqiEbXYgcgPmq46VEeQRaZ",
  "key13": "5FewiwLXVTDcQYYMBdfvFwpFA8pFKHgVsyFcxt56jesA4NjeECrBxyjaBWE2BLw6HjARC2c3oCp5WhL8h9igz7mq",
  "key14": "4iHqWUxbQniYq5hWJyN9kwBtpnkZCNBYFxthHyrLJeKPzS1J1MEjbcW2Fcv2tsPhw7zTSPj6amwUJ665JDJPHacG",
  "key15": "2r2HqLqPu7PBWzZJeAFP1DG19DM8QnEC2jE8jc21ShakLJpMPKFykzTqRKWgBg2VthVBAbrV9u2nEuTF9FrtPkCR",
  "key16": "wCgm1jQgfhNgPKWSrphQmzrLAsJnCPtjJq7xFaNUQNe4Lra6z1Fr3LgPZzyGX57P76m9hNg6JmEbATLjuRZjF51",
  "key17": "hTfxmT3bsnLbQF8tToZyfy9LPKyxnqv9gV1cdrWsnfBJ5yMkztaRhC6U1gcd9Hv1VE6xCXkNQR38PStq4zissjw",
  "key18": "4WckW1KoS68RcEnmV2XTRBCH1UzuqKim5j1asAoKBySfgsRwCrobeqNb17Z5RNNKVYjnFa6W7pBRdT8xSfPE1mFf",
  "key19": "4JMReVZRWFQt62B3CAhhWNwXdnhtgzDpyptvr2hqeheujdrFgAaxtugdupXsJT4fJWXUuxmyKr2rqwZ8AnWzD34H",
  "key20": "4ZbicRULPtjPe8eSZ76qtwXTremG19x1Lp9eueo1LN8uCFxPXDuBwnmovPjTsZhYQJHptYYWpsP2MmhSwjec3UrS",
  "key21": "5ghZrg8tySTALrmvVYZdiXNKx6WYqGBF8F6zPnpxjmrVbBDk1cPzyqeAGugFSTYxC1vMLbdgpNVxzLncNfAzoHpy",
  "key22": "2cnuZWk2ZcoZzix8bHDEj4PHuBCAeMFodxMvEA9iECvNUcE88t4zqPQUCHt6f3aeNAQKzof57RfNWnjhM2N8YJeq",
  "key23": "5ES51D8b9ScKa1qjvPu5otP8Ms6ApyvrM4dro9pDBSFcQRw86AB2vovESRjUqonGz4u3Z5V4Z6QAFQFdmypc122L",
  "key24": "4xDn1FRfNU1ctNHNmaRHNHh4i35Kv2qfdyzoKThU8xFE7wo4HMG75m9epXHSSXdvg6EqDTDXYNVdwLuvE7g7H1WG",
  "key25": "4rkoe9J4GK93vgBXWxv7EHZjThAAR2QCjfv6KF7o5efEz4ZhVbtgh5KZ9RhibGxiCPH3yqg1oX32P8kwPpwdtwTY",
  "key26": "9CA7fDbF6gyA7fRSW1VPr8YVbuCd2t8qvTgNxVb1qAKBJTf2pA6YK8r7oZWZwxWU5uqmVg9FvLs5rsMC1M4bjLq",
  "key27": "37XugHerNViojX4k411h2oVDEzpgPHUe6ppVe6imWN6uN21qzQ8pSmFfs2pRUGTnhpJFA33uXzagGd2aQB31GTe9",
  "key28": "3PBPch8odLh6kVkF7Tij7zzqX2DpECtpad4Nre36Lsi1V1bHbV4tM69eioZzBn6mBqVgJFWA4mrmXJnTKUcdXG3e",
  "key29": "U5zFLTgbCiBwzBePJxHR7eHHNfFrA5k3vkujvC16WrR9B4Eb6ZmnedP4NoUPRGJab5fhXTxuANFPo91UV2f8dX5",
  "key30": "4MJHK1XjSZiisuXE8kDbz8Rp8Qm3shtmgkZd1LsdNM9dzvD7BtwKZmydWRuwik3fBzEpEYq7Par91vSwazFUhypy",
  "key31": "BmXXE8qs8yYfJD8qGeRoWQQDFPkVPC9qqbXsuaTW1Wyos2W4nMYia7QeAKVaG1dXnt2pd17s1HonTQVz23Qdawn",
  "key32": "5NN7xEVgFobfthSGxQY8XyHxAFq5pYMpiQYMuyjBTMivRkihNQmd31WK18gsRuqTnbXVvWksa5Q1HhdnzTrqFfbB",
  "key33": "3XkJkuUgKnSdfLBokKBqBeVEDokkPEf4FGQTpyc6TXpWQHFgC7e8ivQPB5YLs2iFPm9iEhguQSgWd7KQVEDi8V6x",
  "key34": "4nL1HgS6DzrXdhtVyxMDFnzmvBE5PFjTkAwZzFfEvsb1rFSrddSJEGQNBMC6SxHX63dco34HZr3CBwQDztb2ZLtS",
  "key35": "4dJnz9XmfN5SPZrMm2ajqmnDZ9sSqNZ5Ursnn7JPEfmXZz6ZGQBKS9p7UVFSvbELRiSceZyuiSvvkUPV8TKhEaxy",
  "key36": "5L4Q4ZiTNwAz38vuUgydJT7CkpAuhQQfoNSridK155jJTxsTZ2ipd93KDyRqasfvEKyvB69rAjbYsQMKw1KNENTR",
  "key37": "535VFnjkHk34cix8dLuSZ2WMfz4d7bUcbybcABhdaDoZJvBw3A5dUNqYux1yrQKC73YGsqeqURSCp5i8xEij5E8W",
  "key38": "67diBs1RPyS3crS6y2frem1J8SdyF4xE7QVReVWYY3uJaiAfvzu4twHSmRCBFvW3FrTbVQueeGNnuEjXVk2aHvZP",
  "key39": "3rRGkJdiNjJ8bfy1defcdSdpGiT6afLfmcKHm33K9LSDmKHowsmBNRtfe3p3mm6wu3yeFsnwJpjKxJ5zF7JeVnm4",
  "key40": "3iK1vT96FcipYtda5K5VeBUtcMHtAKRNxnVcf9cH64uvsPu8Uk67W6qTVmR9sworDCeoYFe41Y2wzidFGCwJ25m6",
  "key41": "5n8uF1TyepN3nuhmLGDPGdNP3jG5i8bUTvmbrxLT3qM1P1Jt8ZvEmccxdJLLDLHc8GohHysjn5aJFve3v1uWz9tM",
  "key42": "57cjp7EfCDKcFfhtdjXZjeN3Vq1V2WtUyrFEG8bpWdZqQSxdBWyHAp41AtFejJ6mkXjDrZHuX6EcXFHrQQWVPW9o",
  "key43": "EQ6gpswMaWCBzMCvtwKopv1dDpCMJhBuJdhBqZLGmLaNGzupSg4CSkgWW6VBzbdx83TL5pY9AR4qRqeFhPpgH59"
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
