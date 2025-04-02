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
    "4trQLieKBZFWdHnJTAqa2QRZSJyG9V4zL2EFxe8h7Bzb5dn3pWATrRFXByoLm9EZBJeTvHny5A9hWCTZdwJQ88M5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mgkYiTbsuAcfwmDHkja8MqkSHGBD1hE8AzhNM2EKfAEV2CZMQTfh7jGZjgQgSNpzNFDahcsNrjxubPwAKiBYurz",
  "key1": "ircLD9V5uEFaL2bAT9NcpK2WQvVBmXsfkL6rG7t2qJKGjdoZEJhRbDh3ioP48pmGoWKS47EWoLand3H72EPiJi1",
  "key2": "2CxVrv39u7ucxiYA7MpE8Xo3G986hbm1JitbLeKGgQsQ5A5FHcKtjJ24SaEDKhujPhouHRaccyxQ5vukD7h7aAjQ",
  "key3": "5U8YFoxdkBJJ8GbLoWAkhRfESgki4o5K1vWSaqbwErNeANjvxpVFmwVhkWkpa6Gk3QkSZqmoeGggbo28JCaxgzht",
  "key4": "66iUdrbwHjbaYM4hsLaFmTgr5h2wpGTh2TEopu9VWj86JmXQFEprdcErVY72MEX12bzY5sFUCo7thK7V5oVx1C5U",
  "key5": "3vHoJgUbZZ3wrLgSeT9qJnri3n4yBoq1fAHiGUcDZTrWyADbDguojAxdEPYmcADtp8xN4KWaLWkYmtBePCBGaQ9D",
  "key6": "4tJUUaKiZKUfPEPFi211UNgTAiLGi8wk5Rr795UTPSnzmguNn92DCAXbLz1EkKRHkNXH6f5KGb3gkH7vFa5SdzeK",
  "key7": "UgWFwf3rPRbxX6CPD6DEY6U3nydf8A9t1tAXqyJaRfJTk2SvdxLDtRYLJAiCijko5sGLHWMJy6rEvWe5miDA79q",
  "key8": "2tfQCNtaHkkkHMPNqwoi3pNM4emmHXKyFiyU3Tbe8bKmDTjjjWVvm2HzZDioe5eTRUxvQsNL1DhUtj9VuVGDkNCX",
  "key9": "Y2GB5jcZg8m5xkgC1jQwoi8druYMYJrHdyR5xkgMmMSPTcvdRywRdTE5ranGJk23xmaiRa75B4NjpmMcwGC18Qq",
  "key10": "4b8hkFsxSNB34h2NfsbV9NWk2RnQozm7qANvXc7tVPVyDpq2aR7W1wDMkT37ZvBUfzU86Ag6AyUkqUCSwSr6m1Pj",
  "key11": "5q5oxzwSrJvC586mEx7mFLZpsruE8nd9CX7kaAXyHYDMpUGw3TGrYt32p4xc5C3mnQwSVsAeMdEt9NnArQiFhRaA",
  "key12": "u1ekcyfZhhahrgRyrBcZyby9sN5Qp95nbQNjH6N4jkt2thUs13niU9Mzsnd8W9h7uRmbNzfDRXpyZdGsJSqPoNb",
  "key13": "3tLiLk6i5q2QoNS9x9Utihqfm1rN4o5QnNijBQrp1avddQR5yQrKR3U7J3QxDhrh9GkmTCTQoBduVTR26MSCTRBg",
  "key14": "szMsDiu8HYvEPqvnrS8A6FgDD8nxPergQn967wWToSDYMer9jDBjcGyCyQT4bWK1d3JJ7Rb28bLTMQYYPKaDiSQ",
  "key15": "ZynBJ1GXFSYRTzkzmMCkhpJRmcCVBKPzeBrcRAdqKPWP8i2gYFVhzsMhP6ent2ypWCVohP5CBnw1jS9NS7FrWnL",
  "key16": "h5ayqazyH5bc5NioCWJYDWzby8n1MrCQ2M8P2yaTAundj7ayitFo33juAwV3XQPvji7nk5rMy2mp2EhpKmoc829",
  "key17": "4tvhbgJsNmosvqH4Nweoim1avKAg67TpUXNfmKDKr3pWaybHL1E9YbvWPLw6qXfdsWSiEYFjjCY7rUvznFuQqisp",
  "key18": "5Er2qtSgKiHQK2GibawHypgaixbn6RWvBSekucTMNgjWoyTheT8A4Fz6vPttTHbVQQX8AGVNeP1WoiVVqvWmw7Qx",
  "key19": "nWKumzDWmtG2g1c1tVy6jbfLB7w84hDgZB4dmG88TPKUVLu7C1xg3jqUu4viZS4fqkgk3BaRx2BRGZS2Mke4piv",
  "key20": "3fmwAXHQtKX8QmcCD6fro5roH85X3MMWVwXje8s7BTTTXyX4xQAasQobH5XohoSY6EUFrUSHGZZk83rqh4z8hzDB",
  "key21": "2JTVdMesSZ7rErWHn9XBjgaEqNmTq7Ph9TXU68xy74wuTdno4Dq4NAeL2cNBCytBBuNTy2MDrPcGWwGqgVKXFYd4",
  "key22": "46iswGhyE1brHMbzjtC42oQmhjnuVfon8X73KLzNUpX3gzxFUqRH4kq74hhAnWnaTkb6wdjESCnqNMadBVLWBN6D",
  "key23": "bisRBWxDL7ucTxpak2TAuZugqwnRyYHXx8Xh3BqJV1ysnts5zLSijwmSY6ee2mtLXimNkSe8agiHhajYu4SVgo7",
  "key24": "5FNXWLk333Cx6brGYJMtonYJKpvV4SBQWBgoNPtFaVj9zFbmh2cGhjtWC58PFCmY1KjuLimcSGXUBoBQrr9S53nf",
  "key25": "56YiQzZ3gMmGAxMm4dPLvnos6Ki5qVh4QL4au3k2LdAYtVCYPEu8RbTVjbscpda4LRyPn1jKWTE8sTRmcu8rsDeM",
  "key26": "2Z4gqhfbV9nAEyTyfZxcfLitAqry4Vg8QM2RPoskZKsGV7vkceFHVVGfbsHncRwKcDGE7vDLAtXf8yVaY4CMRR7U",
  "key27": "4fabnMTgjuHXbSdvyZ2nKY2s2zuuzBsXa73QTdR62VH5WVi2jbzid3iXnHWsCP7QtttF5FtKXQhNKe8hXdEWgxw",
  "key28": "2E4no4vMQ4V63de6SmGsC6CAEv9VLsoBpZYyAHZLxVrtd2aLQz8Pjr5tNCeNZsuwCiFP7Cyqw6MKjkwW5DjhKegJ"
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
