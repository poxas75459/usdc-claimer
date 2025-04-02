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
    "3hxQieaWjscrq8rByC7jM3TgBL2HfE3U6tNT95KycKJh2dWnv8jTbkUokR2RxaQjpiNLWUz4rebFwLCN8kWEvRDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zwQbDAFVViZRucEz21X9wfDLMgFEZGVZ6oFyZbERXYdUM11yBE7dLCQjsraetqkbFtQnjKk6LMLDRp6QGfu5HnD",
  "key1": "fviHwtfQpfmnMFa4tbBA2A5FeamWgSDcgc1CvqoZxDzXunPoxTHCVgAy79JD54UUpJ3CtYQnaELFG1rXWjV1isa",
  "key2": "aFMx7RW4Gc5B1xkfuKf1TtEiWXSRSJ7hGf43uCwBv9vVrSnqS2qvCjZjSQ7CWok9K6jWXxfKRj8oPDDnCQBr7Z7",
  "key3": "4M8r25CWjJK47HsZbFm5hf6VFmgeA1QYTBTuyDGPY4brAEALiWkrsfCTCuHQ4pWEVZ4d9a6w3RRAnpQ6tjokX3mL",
  "key4": "51jt1aFCXrXuJ559mR5LTyvS7d56E8cjn8JCiKJNHNgPhC936ijREQTjpVa37jMvkgHzvVdkJdFEW6ZMLXMtDnBo",
  "key5": "5SDgSzYEmhgXcUfVF5rmp4gQ53D4CdDGMkbjNDptZdakww3fjxYF2EFnXQJAb3UwaZnRHpJxLyQtkkM5dWyDo3iM",
  "key6": "XRzqiRycWJufYq6ShtWwUH4K9osH7QqELjvBugqN49MwmP6osU6j3TpXMKsEXQyWuBLKpMTdoUZ8yPjqZy15YBz",
  "key7": "4tApGe8LsSiW4oqno5ToV4hhRuNRGCmcjUxHARiTacmLM1v11XodsMS8FwEkEk8Hc1wv6pkBmuD1FBiAvaaXQPtZ",
  "key8": "5n7pWo5U9rCo1oR31wuGDu7YrxakE5hFx2xUYGR5PfUZDCeiTLzT3684HUJ7P7rpB4QRCCW7HMaRZhDuubK698wb",
  "key9": "3oA6FghjZoZCH7ZnASLXpNDJckc61X5fr5pZzKvXyrRpVqX5C8hUa4FPFreDQfpaKzdx7iELgsJz3nWFKjwJpvru",
  "key10": "2Tskure745Sng8pJLct61yLPPuY9HJU3Nsad1gTTZcbb6nN3gCJpD9vaRtXdvYv3eSeHZH4WE67SbPi7ZKFfk5RA",
  "key11": "3Lmwyu4xZFuuDeShdxM9jtYmjCmbGoT3TEeyZZBe3vp7sduHEzbZ2aFmMhJMNQkPsThwXRXwoqSkiGDLfgm6Sfpy",
  "key12": "4U6XpYkMMfnKexhXrKsZzkJsgmGgS4HGZ38H4aNneGHjcsJqbRrHT6w4SjYH2cxwDi6SjAbs9D7ETgJsAjvgiWPo",
  "key13": "R458VMd6GhVqsrPZKEFngTEhFNvsorCfxQngFpFBygsSHKpXtyiNdj8qGKCsPSGjY78A4WEuxQuSCfprUJXyZHk",
  "key14": "5kD1EH22XEEUqjJkAw4R4mK11WN4XVkvAposqgdziJfHcJFd4fQ2T8R7d52wU4bXbb8MSTDqP4JFL2FgDTr393h3",
  "key15": "4voDZVHTnsysgC8dGDgC4x6NpnJrjn7AYW1544mBfybeMnfEj1UuxjNRDTNFgFVhnE7CYcaa3yfHRbCTYLd6cdH9",
  "key16": "3KqoH2ZsoJuybwmA2TQXDgUTezY911EVBxFC74mFUA6w3DaJRUK4ciuQuLdcRGNT3HKZuLx6qf89QigJ76VgfSLk",
  "key17": "4Xtj2K4jsQKFwfUTiRjUCYnFKFGmUDRnWC3ELi1EnzD5dQ66kCUYQ7iZjfpw9QC1ouzPqBFcFXpy1vjzwWQ3LVLB",
  "key18": "5qC6oWSgpGpsh5WCXMA2pi1tNzN4f4nEq59u6fvzCM5htd7EBxE5DK6fq54rYkW7zfMnzEQHc43WyykZ3APk2JMv",
  "key19": "376h3vFq35Sh9RjZq3ZaATYmgDcLeYLuxiHfE2XgCHQaSiTRdSM3jNoxcqchyquLi3S4w9J5QTdgCzXSz2ZGCzKQ",
  "key20": "2cjZivvNLo8rAM1kCBRvEvVdPRe94FfZag9JqzxdypT3YhWUryD8x8JtjNFu3vV9rwnQ2818npYKvtS1V2KksibT",
  "key21": "owoU51CiUXBuTXrRzGJKCosy3oGqLb7RdM7h4jBZZBGJtaFfwahaojyvKWYpqUBadPYhxvHi1kUSKYTTSQUBgpV",
  "key22": "4hMsmWxb8zTLJEDaaNua7M7AbRYNVZeDmZqAZTCcjgnMTq4D46eexWi1pHUMMqrfg5jvpAQLXkrt76mU3X5j2d8g",
  "key23": "31EjMJkPnjYL3Chj8v319WXvLNkmGiUVxvipW86MEFM1LSm8jtDEP8N7GdfFBKSjvzPoH8hJmzN7Xqw1p4f6UM29",
  "key24": "2y1BvZJtfHr1aa6ezYE3xGNfG7T7kpBXTKBG7UYNjeY9BtHZnxbm83Aw62XMovEoAHfBndAtsFQe2HphBqG4mVci",
  "key25": "PYeC1zGxdsKGGBeQSrEsgbqYA3mFTCnttdep9a6wJn5iT2FnpqmnTkYahxSiMURwWH5mtMMcizmC1pUimYJJXkP",
  "key26": "4VxMZ1HYNFmSeRa4fDKUMg8SpJxLxAc3nbNjvMisQ28FmiYsRV7HZR6uWinz9hkfh1yHsBUjYFPuXodR1FSaGyLG"
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
