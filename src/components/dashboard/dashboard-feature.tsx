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
    "4CTPNXvTjxZSCyt4sFbDpTG6Mf4yitg4QNqTtYcm58dkJoSRaPedgWmJfVxwqyzL2WHTVXuqevj4ifGiHpvBDizz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AT2GBJZhBrLpaf5swYKdQpa99q1GFrTz3YTHnAEZunz9BYkTsFD6x6tkYRJARiFeLptRoYS7aoHyPUMVo8yNhnZ",
  "key1": "5pM1x2cGTAyhyNWc5w7afG9nJCpi3tzP8JrZNCYoSopuhPDzUJvLNcVKVzPKFNDRVBFFBsXfGXUXeMjn5Uytm3Y2",
  "key2": "3JfNccxrT8yXFkoGqdfcEUGDgf5CCVu6NUJTK7KcLXr4een8CfcbLsjercUS1fWcmzkChkxK4kGwZBzwobNbHrti",
  "key3": "3B4mkdwjqadAveVUvWYkqaQeQ9pQKhYZkQeuJuCqWSdZCGHH5axxK9PUjgfVxnj8D8VTeaNFcU5kE2vcmEBARKDY",
  "key4": "uqDrQNPKa7Fy8WvDw8VTT482W6s4A7RYVDXPfkvW65QRULi2v9bBhX3zMurfMjWtRvqc1rsyv8eXRrirb5NBW5A",
  "key5": "5wHkaXpPiLEWBB1q5uZJepzDameSUyHZzXwXpLHhAmVgRCb9AP7Wt9wyXK8mymF3ZCxaSVaqee4Mnzo4VFYwtf8Z",
  "key6": "5bmexGGL8e7dw41MycFhNvxvAR9msS2ME3V9g3kExZf9RJAYbYPBUJfwxnRZzoug9DDEiKHSMFA5nK2PAQYv2S5L",
  "key7": "tTcRp2LZqMVfntJ8aBYcMX1ecBU6VAbTCMfKmRDC1U5dwSKeLAHF6AzSRZZrAyTWN7EX7LhC7wFZFMJ8vDwbKDQ",
  "key8": "3aPvp1fkfkMuzZeZPFsbA8W1hd1xm6zkNJJTpoZi715du6XZQm21PviiC8mWd4sKRSdwRM2MaN46Gct46hfN9DH1",
  "key9": "hRtUrFPw8Zdvv6dwVoDMFwsnRMFE2bZofaXud1QmUx6dHXzyT432qQugAkAHcU9VihJJYg9p7NZpwpvGZ5LFg6z",
  "key10": "2WVdoVhcogoZdKwVxsz8bZXhTN2HUMtmfAbRJEv6gLSRr6KKvQRFEssn4qNAhVwdHycostQdSDnXVcz2oFfCmYm",
  "key11": "5NrKVbNMQA53hj4DtzB7xazf5NKgNMwdrFa5cXULXEZ3jwe3vvjPH8xfPwzfju749AAcfxCabeYVxFTaf6xsuB9r",
  "key12": "4rQ1USehmEu8hyBB29kfW6XyxRgBAhH4UVF6jNTAndLXBYvVroKtRKYiVrcnFG7oyyBbzpckYbu2kpsBdE27Z1wZ",
  "key13": "t5z9r3gaZWo7Nbc5tLkExmiYB4dXoSgeLAhbYCuGow4U4LSRDi781trcJwL645LNLJ5g1xBQU5mdycCK22TbZVa",
  "key14": "4wNUutLnGMjJusjKLqwXMFs5DtCML3RLA1429cRQMnhmzewszDNGWck7RJSzjLZqJFd4PrcuiZnakqMi11NTNBGu",
  "key15": "65WZZx3eGJVTSk9kMbRpRvwKwqZYq2LtFkoyTrP5m79qa2BwVwMCRe9FvzF8m4p4zNCgSqskuHRVmAtqHtxrwaZD",
  "key16": "5Y2wqiFXuTuKiYHy3E18LQsyKbxXjaFYqzBQGPedmYCWVKVDZjBPMaDyjmR6ZU52YtkhTCBtwNRVvLxyyt49zhY9",
  "key17": "411aPQjnjZck5uc6WXCdKXreCBtaEY77yy4DWnWzmyTYGgDfDZab35oCc1rnAPxsi3veHQiiAuCJowyPDNRb9CZZ",
  "key18": "5jGdCNdW2S2U3nKWoEu2jwhAx8Ch98bmP8ix1sfqPQwJXBwz69usjBLbhDQPx9NYD2ShSoYwXwetREEb8Czo5fi7",
  "key19": "4FWCQTQz8qEFa1KCUs2T8JEzdoHKQHxBDJwhsV3uqegdSU7Cbmy4bY2xZC2uAdhnJm2PFeiamQqc4Qx3BwBXZ2oh",
  "key20": "4TQbXyFDs2tT3hqumD13EYfUM3FxK9NoN9y85NjTbR1HdEkiVdQefagTTTw1QZG5thtcyjiZEWLYdkAoLTDJCWtf",
  "key21": "4euXp2jNW9fmB8ai2nheSEbZH6DrGAzxtC3ZUFi9bCoTUahU2mJvUvzfk5xUVMS11RG6KMP4CLyCCfQFYLiSfHr5",
  "key22": "2y1ZUWL8bPamKMmZwB8Chv1aSM3MbvDc9zP5aUFmuYpNXTai6pakitiRFqKDkM5oWpaEzfFjGX6BqJggj3ENK3yA",
  "key23": "58N5QQD5EC3WjfPuVi5hJx6kNfCA9xEQqZRfTSvYQ2wfRPPVxeTZF1JSCaWkSUbhZPKpSGJyNBTZ1KJ3BzuKep4K",
  "key24": "5Rg9KiVGHD66FRPzDJX78cCnrWZnaQcDmhqJL5jery8BxAkx8ZakrTYTjGZp1bUShv4k7gFmVozpUc51fdWrWxKk",
  "key25": "2d1J3c7V5E5eGCN26z762bTSnvScJaiEutT1s1ty8AkkvSMW13g4fQYG3NeNhR1sADVsgoxgZmRUxPVnicXP3iij"
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
