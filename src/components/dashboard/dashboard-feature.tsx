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
    "23FNEzLCzLJaTWwg83XLCnx5aiYpn9eLxMhUxPfMQTmpJK2pz7hUW1J7iW2pDCo7ZpJswKYVjB1QoT2hphqTKCio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PupXB1mKyipDDvmrHwJ7V5eDBypZedwsTNVGxNekdQdqM8ThSLLWaAkqiZ3pmPfYXEKUet4bVEP6Q2KwoeRmJmr",
  "key1": "49GQsmXK9chEFSjC9sqvC7zEbUAC9TGtMck2XiTPE7cX6HEaqqqD27wjdb91itWEGXvh2GVT6k5AdFB86iC1akaG",
  "key2": "mNp1SqqnyBYRWLHLxiEoCaYLR8BXe33Q5U86XLb7ekD1V8ba2v3djUuBDAwvNH4G8jRfLCtt3YkMLuYyJdjvJAU",
  "key3": "5N2CsfQ1iMzHvPPPEnhRYUfzF9LvTDfYc3vd9LdtCTfMsR3ebozpTcuzvRTcmPEdeK6wMTUVL5ZDYuhoq2eqBgZh",
  "key4": "TY9TrYEuej3HSzUJxZqM1L21Bc2Bdo57SfcDH8sNSEoQnJrbffMmZWVJMatW9C4b7vU71bAMj4715vMoxB4fQcP",
  "key5": "2jB6Mfc7VssAW7CXBAa1NkyM7mC5rN6G5jwDcfQaRbCwveA3M6WsXskUbfz6dW62jK6cmtqbNtci4RApAFxSiWoW",
  "key6": "4AfaxYxUrz1WLaGsAHSNaGNoauUiB5btoHhoFGitBfRDSPFhNGGpWkTe31dUzpmYoxghqZxDAc64aUYeKNfQMWWW",
  "key7": "5zjRRvMMdjzKT6TTBUHJAwg6DYHbZ9u86jm584cJ9iCE5WqTHKf1GxYHsT5Yymgji6bTSqP5L1GHPCWE2wbVe6XN",
  "key8": "2gmz1yGCQDYsbdPDis6ZTaCueHbKpsf4m8HWQLstjzyBxJ9Prj9VEPARHAsFd94Ex6MiPgg3FF8KpxcCaJqyCgGZ",
  "key9": "3vfXBuoBhUtVKxGQe5gGPVKXuU3xUfRhHjeVpFZDUBc4U7ese6quDUXhaNKxNaiV6PKq2XK8uvxbiTTpRatf1fSE",
  "key10": "5DnGUjxcbekfpsVtBamUQ4A37fSWkHc6NhCgi47i3R5EFZfPVMyuTJZLxxoqRFMiuhauAJF5pBntJukcPhnDHtED",
  "key11": "8wEtEQwQAkdb5xce5MWYaArGMq5j8TMFNTAXfD3xnPuamJHxDaSntVNzAhW7CL843ax1AiFWite3Bcp5rqfhWcZ",
  "key12": "44qEHJVjiQXjUfmMBgryqG7MXKFbrh3JzUuHp9ohqeyps7j13vMNovuP8AcPHGR7VqeLZvWkMMpeDAV9gi77HsAF",
  "key13": "vatSsRf6bMAUqb4JuTccdCgGH51mjkRgAfrMB5CC66sGZyHt9Pi1Kqwvcy4CVD8iW7GxQfoKdnWpJ5EAAcDSNFe",
  "key14": "4LpEFDDAvuiizQn7bwGiMhZY7qQJvqKYtoVLvsB3o34jHsgHxKq3shJtduLbn6gGJcFRAW3t9U88MTeTsRhVQSR4",
  "key15": "4Y4rvDkNQ5wKTgcvrNYFgdNfje5GAZmQrzwF83CXNhsJFt5yVsMBb3QBPUTJkRaJmZ5YN29sZF2b1StGeGWsETna",
  "key16": "3DJZXgZmf7ff6oBBfhsYeo7BijXMpvQeq4TA6rzAYNCXhh7bgrN7ThsPW57Z8fXLUiU38fMyNWKZGCD8wdRcRUcs",
  "key17": "3yYZZcyL8fQuArMzuDUSRjh45sEqtAryFEFiDShQ7Rrryh8mn6y81Ye4VTetHNQj2K93goX8rM8L1kvc5MMLUNrj",
  "key18": "2pfiZ4LxQ2VtJc8vbEZCwLySjXjs3YpftVfDQNXsHuRxqzMxtidAvMHRtudydjcG9Hkwr2RdEmW9At9YhgXJzdFi",
  "key19": "QcYZSzTBA6Eok23YXzPHn4AhqjA1xvYoMcWwJ5cwNxGH5TujjyzkggcTs3DGjURMxwDUV2eCEfKKc1teKehsRgR",
  "key20": "2WQbEKwfVCRoBZ9iFpi9tRtHtcTMMd6cfVmzNywAhCvRLSKzgo6mju7ktXBxVvSPXfDUXAamEknP6K4JCnX3MGVA",
  "key21": "4CSbMSTP8384zF5gh45e5GgKycGHgjfXSKVDPowQ4XPvw8TyK6txTHSCQkRfuvihpzPVdwSgvbQZ5vFTNaq8vU48",
  "key22": "xrgL9EC8gmVd4388HgVXsy21NmK67x2AkkMrYnxDs9SCbuubAddhiSWwfZzGqYQ5CjdWr8axwBRhZq57u1eK8vh",
  "key23": "451bRC4NhBwsUFidGJ6WXyqi33rBPUP2GnVNJcUwn2za3sXQhoTkPpwJJ1D3QPpFY2fY3JXcV4GnDw5eLy33ztiV",
  "key24": "ZMQGPtgqrKUtf9QthLFgjbYK1WEcvJexzb6B8gWBpQKZMHDR35z9JSEzxmNShdcXqDgPRXiUK1Qci7RpB9wsqkL",
  "key25": "KZeZtezHnAzujdzjdauMpwD1RqeAZ5QJiApC7jCCCZWgo2Q6Vh2QXnPZgfCfWy8Qt9mhkXNzrSrZso9u9K8wBcU",
  "key26": "31une3HxBQpw99JiKWLZQ8WK5FhTSyJVpb4YHc8GxvXHaMM81DBRkSEmiohoxvSjpe67mWRxiTgGnxr7L22bVGq2",
  "key27": "4N53hx6aYx1tdiKqnAdMkWbpHRhfRUWCPio46ZEzrAAWezFmttmfui2fExGc2mwoZT6umhr8b1vFTW3WeHJ2uHHX"
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
