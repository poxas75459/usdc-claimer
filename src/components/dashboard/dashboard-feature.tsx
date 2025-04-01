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
    "2sKhLTLQWJfpxNJWEiB91wgCeBuDk8hF2jQ6rUTNCVDDvugdph3nDANqeotYYxTe8xAD6cUBnN83p7C2fuL6VGw7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MDng4ho13EXGECfesRLiEKpUtYQR7koBN7Z1zBpWnzqZedTZxGjNfnNWEBSyNG8xLLumeYJ472JS2LtXK3ZQZa3",
  "key1": "cNxsdQd9H2dmV4mFjRSEyUrU1JBncoc4egEy6hjNNPvUNmN43xUKDaqpLh9NM4DLzjAoMpAtEMTCUYKxj6uvi5c",
  "key2": "uj1swDr3DouHgSzfKAgiQXH6NqhWftUBG4xfCziZx16G6syReQs5A357rxBRJBomSvN8GVLbSjvcsbRnY5VM7RD",
  "key3": "3EaMnyd4GhmntKmn5WUGqQzRaC8M8xNNtcqUyrU5aVShnNo9XgCKFxbfwRgtrgx2x2zrg8SBycjLWnxFS794jFpB",
  "key4": "4rqGGHkjYfBJa1mQQPa1ozCycU48Tyjrr3ogKEfNghXW2rrDPSyohenFJ6ZHa7yQKkk5hdBWEXjH3gDWCh1md8Tb",
  "key5": "49NT7j5bBaWXr5hzGxzBWMrBGm376bnpZSVF3M1Ur5RKHYBAUn2XWVaoMwEcagYWtnJVD9xScPTAiUPF4SR9o6Tt",
  "key6": "3NbAh1bonaWHFu9iGtMwEeMBmDW12i7J39Mfnp5jZrgT5ztSdvZvYj93EeN2wJzrdrQJZVsUgxwnaiGZuvFSppud",
  "key7": "3S8njRzrQkUPCSyQ1MEjhtexYFieqPgZXVcCNtN6YT3GnExtz72LAq3XpipmAJsdSfS1PTfvbZRCUY7C8FmRJmVe",
  "key8": "4vRwEYRemCMNr2a6M3jyAk1oPMHM64iegUmPLRskt2bzQEZn9YHWr4bAbuGUbTNf6Gz628ouFFVKARyf65ULQKEu",
  "key9": "vzSAUebYsJt9tWhLBpeEDvx94UuKakwP5MjJ2GyeGbCuCz4tUDNvYxHiyi49bCWEVkV5X84JxKoNiL7Rwjj3wT6",
  "key10": "LvJBSW34rwrms56mq6zWNkDgPHvuRao3P7xL2DjEodkMrHcQBna7itgZ5DXtrSAKuNXix74Ked9JP7n8BgQEWcr",
  "key11": "3yaFVyhssAie7cmYYvvcmWyPw8g9XuvBdmBCK4oiCXno8iSWDrZ9nAP6DepBgTeLnprWjDk9i2h1H7QudoCHMQUF",
  "key12": "64mrxfSkUkCudwG5jVNY8o2ACB9ehBuzzVk8Zer3wzkyUcqgDgf3rKrWD1Ru6Qo3mfDDjTRLh8t7yTSkU38APEfd",
  "key13": "4s57gQNYtAkcydxH46vYtr4df6mUtsbSi3HXhdERg2c2n7grrxC5iufBjpf4cR7fM1pzhav7eedeD1XVSy8idywP",
  "key14": "2GMNVz7N1z3puYC8K8WB7ejvGgYj7SoNKr7CWG9ykSCadmrUzeBYA1j3iDTcPzd9qDhdM3FA1jVSSW9wegQFtLZn",
  "key15": "3n5YPddW7fypL8jNLQyhhdxDArGKjsmvCWFQuG5ok3etX9rZoc1shsr4FiFuXiAsxdPKuiExkzAzjyAWvmvRiRej",
  "key16": "HyFKdHmPHKAQvNohxYPZZRRdz7rtM8wapTgLvqgBNHTyE9W8WeWdnEdDB6Uvwm2gWhMfqN6MfWi1UwsztuDtCKq",
  "key17": "37Pr1e9L8yUKvZCAgW6cTmrybhvGmDdaNS18ZZUVv3fSn13y8mr5YzucVtXVQqkGaSxNxP36eN7zspDeDVFXPyrN",
  "key18": "3nxaWtaSa1bBdDncJCyhJdzj4Ka2eXWPdJgrbEW1zhh7Fi4mXbkfchgXGnp2MdXy2a4G4e9ueamikHgbJjnxQAwu",
  "key19": "3rRWBrAkQZ8aXp2Ty68HqawLNLdTQkmkiDyZbZePjvCo8Whu5emgpwonQRf34YT5jWgsuZGwX4ksut4A3EET531x",
  "key20": "2Utxn3gVg3UsuWgtzvUtRhTMkM1nMgzvnvxQb9hsMAC6AxyE18VCbJX2U84SuPhuSJH6JHYN1VZg2GH45e2FqKC5",
  "key21": "3YBjMUd4MWnHgTkCRe5EhMLLx1eDiDc4jGFTLn5yiX2MTBCsFtE66VDTLZqNcURSUWgBmsema1FLv3J7Z3PvGjCR",
  "key22": "2sg88Q5jBE2KXawzM7iPgxkrCtbEjqk17BYzSuCj4cDeCji5gB8NiKRpL8BWwL5TLZ2itvMEYL5t91EDo6Z1LYkk",
  "key23": "5rqbaUrqmUPK45RPiagEcEPkDaCF8Usw2LhS6JwCFYVyiCwKria8afVsBkQatJM1i3VBSXPSTxnPG4g8nDLzuB8q",
  "key24": "48moaiwFvNvUmE7CVb24AWzVuPyRwow82WkREAaQ53uQAMJN2uuNgf6sGo5YeE8oVQSAk3PUMUTbhMbgRU8Z7M6m",
  "key25": "5W8qysN2FhY2n3skVkJ6T1VPGBjfLoRzqQh1dsbFVaWfqLmFGkgmyuCYM2Md5UiN1azd82qXFVJbsESeLFEu1GZu",
  "key26": "3aycorA7vfTrkqfPRVn64j2oEkMcWxSoD6oxvhWpA6cEERbWjt3ZPV7MsyH6AoqbaYx9fraojJ8B9kSD9x1cmjhK",
  "key27": "53KSAdZiePiqcqMC2VAUHc2dmXLTgxpJw7fWs2mJXMPufa4oUyyHa6Z159ewAeitLZgA8XCK9kMwki7Grna7WxSb",
  "key28": "2hq25JxaJh7KN8dB5obHxd9mHRjjB92Gj16H37Bt3MHGZJRTG2S7Qer45eUAPZDfTK6uPUdc5nZW3gQvG6SYYViy",
  "key29": "65VW2XhmGPeoAN2iJKWURLNcrwSXpjKxHUMLeN5oVw5XrY6cyVjLC9RvjdcaHENZdiyLtcXa2hakEWYnb9tsSdoc",
  "key30": "5TYDNNtYbZdNiG2UTzgAG9Za6XPsdeZ4GcCWXqryKvMhX1XKFuTf7ShuvaeBjF7aUW8gdEfGYPEi3CZQQDkNsNfn",
  "key31": "nzTQ1ENCFCNvrGEHJsucNe8EkRWji5qniq8PXDcTKk4z7Uwpc85aqWkcSXjoR6hhc4uANK1tSohQpw4cY6RhaJY",
  "key32": "2CP4DPPVZk1fYoBVLMDuvdD7EBPBqVCugfVQK1s66fPbegZhSaDSAzEucJi4Dh5QoMrWXB3kpchNASqzVz574sAy",
  "key33": "2tx48ThWyVPaiposkqzArJWcoGU5vtBvW1xFn9rJFAzHYHyQBH1xXAiB7gFEXayx99jh34Ymdai9VGFYmNdb2gPs",
  "key34": "2nppTu4c3BuCgjWhEK2cA41Y2XipBL2H1DfU1xrS47TwYVuWGJwoBDNUzBCMEDuUToCeaNUR6tbQ6kyVcTDod5Xf",
  "key35": "3cFfiC4Sab4suhGUiNRkD8XUwGfXfg7yPCQjufyhJpyGbywXkkJ1z2r9kqKAs6wyo4FqqwgPhY4hrwGBwm5tZ1Sv",
  "key36": "3zvJgu2P79xGfVVtZ2uAzBURzEohhXSoxp5tcVJEssRBbaPyXxNw1aqmaCXCr1wBMSe93pHdTKpPHLqHfo8DfPNF",
  "key37": "5ks1fdTXoeGPKrqjvAEi6q5p2EYnqQAuoJPUTYpXuRp1Mu8RbAZop5pspi5cQpCr9Hqn2pxWTo2fZTNdJRaiFSSE",
  "key38": "4mC2XJZ4k1BYQZF3LXUnfn2mgbBAnp5kChPAn85pJDki9mTwzzg9jxLUyMXhP5AfDCSrPfX42DAqPTJcb5q2ZuNo"
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
