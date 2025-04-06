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
    "4DgQirPoKMm1b2amZc2QdzhVd7zd9BwcRoRK2ANDtL66M2nXSbJBfSf9LoePRq4CuJCGZeG5SthZjs9y1WsRmQRK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vzeuB3nhTzpAbH5GGJhG4aqL4nWHsVX4eNQ6L3Re9YvZYobEqn4W4Ltdqq8gMDuq2jWx4xqgKUjBzKvvzSVMq4v",
  "key1": "3j2yu8K96N5dqwnkD1u54W2HQUdGgLKXPBL6r9UzA4nghk7P6EDqgh6nN8ANjfLimCrbCWVACbBSdhAZXMVGHxiS",
  "key2": "4GW28oKPGGBNnoxV26rj9XBv7rD92qnow8ZuXGoAnsLYBn9tocVshi3CPnAem6CqhTrKR4Ya3vWUjAFfPsZaW6eX",
  "key3": "5Wqq3LfU2K35DHGUmi55P2YWBdNhoj4N6Bkj8ACCe51JS6FwtQTGhmcyLF1d7fTitxBCFBrGRh9iVrmcsrLDxU4j",
  "key4": "4HyeMe79tzakYtFajjBuGzAq8bdz4MZdPGmASfsMBgfANLzAvbeAPKaW5537WCKhinwbiN6ATY69CZAHG2Wz3Uf",
  "key5": "ExUQ88ydTJKybdvBWQRZ6HbxrkTj18fwifum4HnBEKEwSVZdEEoeGCfhoYn5ZJ9TJvXkaLUy9zyKx2ChkDSx21w",
  "key6": "67UCUqfzqDVsjCSNgdots8ZkieVPsCfR1bqPQbrQtp5EszpDbq6GCVAJy32wT9SGn7viNCHBdToNqv2ATY9rD3Zx",
  "key7": "24wzxwggqt8MoAx1HzPKRaQ1M6GWvDkD6iQkecDMUqRjdDmYR1VDRYCN512zdLtMNmVizckGUbMbtaHMKqkc1Gns",
  "key8": "Yqah2iso6LXUCitbnygr9WzuFaHHtZBowDRfMhqer1x5v1BDCkdgVaE9apszmUZmexXAJXKYMrhtyfCdnr41vdD",
  "key9": "27UPgQbzYo96YNg4viWwJ8SPA5jQmdJQwT639g7RRMwiwa1cSbR6ZKZ7CJP1k7F98yk7ttx9fSpwuZBXNLHan9b6",
  "key10": "4QtuD7Kh39hqTrFY3XufVLyCY57g4W3VZHyUAG3QYnxnphCStbVUDRhUvssJ7Z8uAAyh8Cc9HTHKCoiWofJS9Nu7",
  "key11": "27yK2uEmh6wrudtYJ1zFxvzbZNuaLFFLAysfUWeYdTeoH9UMM9TmfHNn12Hc8ZxHowdDCC7kP6AqiXUvTF48sACn",
  "key12": "3HSvUzKhFmmSXv82bhd1FAq8pLPFFqgFzVzYWnsAayiYhLf1KkvnYa2CU9L3RpZKV32H8ZsNJ9fcebGHA6Fox8He",
  "key13": "To1utdPVqrPsJCPxDR4VdEPdeYWaGy2bP3zztJbkKfPejNGqsAfm5fhZWeKmzj5jwjt1FKkDkSMgpD7ktsPnYjF",
  "key14": "3ssoTyT9G1MQRfoSNcWYPYdmEMQ7da77Dwsj6byL4Ngr7riVXCdHFzM3QHAKqjPt396s1J4e9YJjHGXqKqqM3enX",
  "key15": "4D34ArEfurjFvhcMjztQeDSD7wuRwYG92LMFaSejdWrLmhjAhWTHB69cKobe4GTiPTyNdoeuNnSjT7YFhAva81Yj",
  "key16": "45A4PaSbkcHrsUt5n92iKjCTZPFhP1LpqAQQ67gaJPMqocmFhSUYL3fBsxQQZZkfYTnSdHr8Cej7g4BR6bvkoXty",
  "key17": "gX2W39DcsJZCRXdwwaZWmxtW46YBdXeFxfDnaZmtkT9WyoSp7BjUnHkEGg325ZYjegVcGAwi57QacLY7eeFYdAt",
  "key18": "4KfUzivLDjEJmSWu1bWNXdqJzP4iLqmZF3s5w3mD2Ux2XAGBphxX7hzGXSMJtVUM3meXCaPfkK4hoHiVzAFGcM6C",
  "key19": "3GaKkuzN32RyazgizEBUvp7ubqb3R9Dp1rhCuivBR4VNajKtwK14ontphXYtoLkv12AjeYNV1fmZp97AubHoUMqr",
  "key20": "ZxswVKspYw1hd8hYsLXSKnYUTTpb4oLBS5G2Gg7R3fTxHbEsy6YfNqnBEfVY7Q32dRyuCHnn6DphBTqcHqP9zcg",
  "key21": "4G8JEtCE1PmNBQNZx9M8wAE6mT5jf2d8N2Rjt51Zd8yfFERnKnj2cG3ZKNm3vqWRXen8HLk28SGNj2xzZgauP3sB",
  "key22": "2LnrtqUxSaqfZqwVdZ2foEWFcGBoPkdtps17LaBJhF1WeKtVJNvsWDz4f93w6TkFAEUaAxMBxGojLjjmEqwv16y1",
  "key23": "3b5RoPwNZNqHgJpoKpzVebRgH5YzQ9BAHxnqqcapCgDWW3wQfhya4EkiFDih87wdvTDjmxDS5PNJyN3uSxjQoGk8",
  "key24": "2XHMrgoEvyKVRn2qWyUxn6CPo9jmyLwv4i8ATPt3HuH6Bnu6L8d8xs8wx4CY3qUUszw9SUv6Ef2vftzJPWizg2A2",
  "key25": "4qociVWdRvGL9VKhKnCMu7X2GDN5xYbPdF17qLBP3RTKfKFzJo6YVCxPrUyVXtM2qTSkrVbCfuqYBStm9WUMpKLs",
  "key26": "3GZ3yLmtQqhdWCENQgJoGu7gtAEVTGUstk5tqWav2A9CkbPRMeGb7ZQjtTHQbjv9meVTfpdo1qCnyA55vneh8pAu",
  "key27": "53PUEARdVc6UDX7buwF949fkZjdWXgrbKeeKyLfVDqDKJXD9rxSvzLqHEZizQVKVFQkGdW7qzZztyd4ysz3CKrFR",
  "key28": "3THn4z3NFcBA4rTs5ujbVHnNKt8L5t8KbQC9CJmEKcXqJTy5HgsvDCajDb6JQvb3FbfPP8mowKqsCm223XCquiJj",
  "key29": "2Ra2sEaxBVdJjc3bFTsX2tsJBPHZeWzr5oCM24mCzQRmgpfPb5ziQiWgdDx87yjBb5LQe2jif1vRfKmtqWDZ46gg",
  "key30": "4fozoejStkGMmGqoDn2wayGHK5foAfz4bF16yGhFta7i1nqmuep3ap52Z9NxeNiWdfEbo5MgrNJdmVjK3rrSvrSR",
  "key31": "4sKjS2hmiDvS4fpPf6f78gam4MbCqSvffZKNFL2rJHutd1gBSV1j6ysoTQM5Tfrstwbi9wgzctP28iC1Rt32gkn2",
  "key32": "2vmmWXwChyDB5aWF3MGvY7ZguyEtJLFpfAeRGv2jYWdkX1BsUDHiQE6wJGsYh6Jm7StBQJiHz2BF3TMK9oyXcUoT",
  "key33": "beDXmZyLNcx3pX8NQM4dsbJRLKjna8yoc7NA3EEvVPgXPFdLKBk4iqFSjW7zqns15hjUnLedq8uPwaJoTnjZvfV",
  "key34": "2gyswa9QKHanFNnv8L5RvQrUqdXYc2163azGb9BzvwEnjzPNumS6FiDyL2EvMiRLx7BcQW4cBCbVK6kCqkRM2BkA",
  "key35": "58VcvLWVoT8JqdWjQUxVHhweLZqnteNLoFhpaPjY7tSXuC8YDzQLEV3suudFKuZRfaLavwGLeRFvnodmX8y1frY6",
  "key36": "2nigKXpd31edgpcRB1KZTKJwDiVoTm3Wws4hacW59dMyygiBuUQzZQvtQfr24ihmxQty5xUxq6EDnMdk44HiYKaq",
  "key37": "4MEbXmMYztaJpuknyZGoMQGrNNSt5zsgqCM4Sv2h5PKXyC3WcURo6meSjKVkSE1G2PfNrb1vrMrfysEc4iBdQ5Ld",
  "key38": "2WeJ6QewgJhm3Y6FxKttAb3eTQRtM5WGomHPBXKJHM3xxb2PAwkhUBaxN4hWuLTzHTpm9ycyAKNYAeVddY6kNNyR",
  "key39": "4dZV45P7kY5KZgkoZSWPhBccanSSffUDDmzVVJqKZJhuRxLnbA3MbkJ5MFLrv6MaejPryZ6dSRo1mX5sNb8mK3E3",
  "key40": "4LZpFQaAYiVSKifncMjNwh9zjbNxS8wAYDdD9atgQqAYyhVskNkjwfJWTh4NkGmMMgiuWifm8ZV54fv6Gr1qQccT",
  "key41": "2raPMwQrePpgcdV38yaRQqJVU3Fesk8DvdxJeWiRqLg7v4jkZ2emtZs5ZuFpLcihTc84yZUZhVzjxzeCFvFRvLw1"
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
