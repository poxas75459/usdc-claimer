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
    "2BkXJ7bse1pKhKo7UUTYxFRoESmGpBw4dCeD8uEJT1msAVomwwxJyi5xu3GTi2LAjcKVTDaZQsfdN1tAdsWmcJ78"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FrJ8NQRa2G3jbFoBq8frL7cvLVWM8rG4Ec9Ab96ZqxzHnSsyExrwD2Di7T1JTgZD6AmyEDh6J7SJEoV8QS8qUVt",
  "key1": "45x2nf2WknPdbMJ3nkERcwKtc4yAbrEoCXTf39AuJL2VMsd1XmBhdUqBiuk885M2hfLqTVK4nf1YJJ5qphsbBday",
  "key2": "3yf7P355DQLCuhTA7mg16617JwiHNjChE2PiSS7nV2ceor2ZgSYrS4uXf8SV1iZK8Dm9fLDiJwAX7mRAiXWXngmw",
  "key3": "33385ZmQ4UoyzViih8JKaowksAixrLYXV8pb6tYw1jMN3uP6i3WdA4LP9Y4KQC552sZ98uMd3EfQQp1BXfgxhfWJ",
  "key4": "AkY1aRB9BGv4iWdeSoozW6rqvUXEpjmqWtBfBv1eVd1dzn2X9Nw1u3oWitzEtxmuTtsdNqX7FeAXThSTQ1Wrg81",
  "key5": "5HzS6hgLMhBnk3X4jo3GT3rXFurq4VgmrS5DCVx5ygbWQsQLTjwKvYp5LGaNkiVy1bJN4kR8RXroumST18TuWKkw",
  "key6": "5Q1wvT2s1iHQiAxpXJMy6xcA5rRDsDfomWjEV1WBfD4h7QAydQPnUv2Zpme61nZ3Ddutf16iFwEKewWe7C1Uwq6X",
  "key7": "2qqwPyLVhoCPNyWs7ZRiRFe2fFWy51E9qHesJrCm2im6YdTDbxcCNsR3bCjeKiSAb1DBJjnkqWzTe6RiNqpZHdNN",
  "key8": "3ovCf25px35TDpMzWMo2UTxqEzxZAnvbMXDU9GDCmXuDBq2XKNDhLSyswm2frJwCKKDD7x3huBeumaebwtjcsRDP",
  "key9": "2wQeVGtRxzys275sUrx4L49vtvoDRzHopSBNu16ZeHvDZoT8USUGRRT5RsLR4fjGqxZNrU2x8AfgVutvRdDJLsAu",
  "key10": "RsUbzNZxqBFoUYZhPrVQtcoNqdigj6jqTb1Yst6EBbq6cd7Atjz74bmH5Ys5pGQXtJg2vVtgQverokhVNg1CMnM",
  "key11": "4ptWE2GKEvKyNxxkv6JYyMoDFazohR2pWwcum2VqcjB98XtFc7xAyv8mdpDbfguHSf8L4oJgdvHdPkJnU1uyy1r5",
  "key12": "3QZcY7p3TwdgnRmorhNRBpwWDjTMk9uhbeEAHn7WaBALn6WXWtXK7ibxqWoyMXsMhhv2p37hpMv9nDmzspV1mXkD",
  "key13": "5u4StEvNbMFxnLgzyvEpBcTMa7Sp4bizuSJHVqpa9rhnPAjxAshxkzNZvyQXQkx5AcPDnegqfh2wgHH4ad81o7L6",
  "key14": "38qVLRp2GjF3oVpZCeC2EsFXPPnSYcGArqSMpNhj5noY9edfoRNpHrZmJtEzLvytUgcFS1U8qkVGziU5PiLkLK5b",
  "key15": "46mJNmNEnguNRd7s2sqD1SM4trR44brt52KCYkMd6gLtZbF8w9kuirt6m1mp2skLrp4EHxccahsoiyBK7CYGKPQZ",
  "key16": "4ndcVS2cuHZFiLRhnqLV837qyM4sDr9XXps7xRd5F4eernBnjUBsca76tBNy7Lou9rViQM6DkmdBwhZhHvEv1SEk",
  "key17": "2P8yLdWCdEqiaLDzsyHvSkQnLiQiQ4gEVRHNYHj59i3BFZK7spAJbMs48b9QyKAXwzpsSFBZiQvc6PrJUDnEoZPS",
  "key18": "yRhC8GqvLXLnh3J8WfdMaZfvy4AV7DqmjiUseQSTPpAJywy6oYFKgcxn6SYExYrHKKiMKuoJQ8NdhMjjNiFyFDJ",
  "key19": "4sJbjqk8insuwJ1unkHmxRw9MMFRUebMVEbw6gZgfuqyXQP4wY1PH3d9vhiRpgyTQkErmYpPatPBEzmDHBQ36vKr",
  "key20": "5zAga8pRu5X2TuuPj8Zk7DC1rpMTcQxJ5gNqwqQ3u3uUcBNAVdgC8dSmNFNxv8vGTkMML1pDiiCjFThq9dQfT6P4",
  "key21": "3GbDb2BS5deU5Be34um26LCefZfK5yAaJmZqcWK4tkL268Zxutb3VU123AFLaHo84Ak86q2J2ecvxVR7TwLYKjXG",
  "key22": "5CJKfSQnLNEv3cutsj24hckmQSWndf2JFzACQkMfBJ6SLrjZ7zvbLPoukH9qkyuFQgm3qdhYyyegebetv9mU49uU",
  "key23": "27vBxFc9Dxb5XWu4tccDzrWGKyAjZpRyBSZ4wEJTKeJWtA9rAckVMkoP8PejEKdgy1x87WZ9WZcvZf9mKBPsq53t",
  "key24": "3jx4WjyeGkBTiGvXxQ2xKiSJ3PUhVTths15zrAbReFaZpJWNtZzcwJcwLEwaf2HAjSdUC8jZwEr3mqxWkGRuyRto",
  "key25": "2bCXeGFXnaZThPDxK5XY4Gv1zChPXpJQULP6aT28FndBEox11BueizpRnSk2ckESLx75zWnD8YQLaxK89dNDJr5B"
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
