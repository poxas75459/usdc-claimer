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
    "5k49vmA7XDfbjTUBc5rMTMYzn4EzkyHHm55iQ5rsvXSmRtAaBbkVrKoMfGekZKpJAh7xGiDGmWvom9xFNPjbx2gn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jMsDxsVBVzmdiZLXtoTPnqSj3zSkz8q7hYNkrBAnxBEieXbmqPaGgeSDfXVRRMdDPGqz8AF2F7wbFaLVEo33Uo8",
  "key1": "3DthgaDCxUQhd3vg1K1L9ERyRNWdPrd3KruteWRNfUeiWnnx2zkg3mvfBnPF71pfZTcDmKN5aZ6cDFAwBe1u9afS",
  "key2": "3LzscHhEU6Jfkjqov57uwSpGj2oCaaTyijGuWFj6AkNUgPqMJYkvbj9va9p73x3GpH2Gdfir9yBxNaqo4eAxnTE3",
  "key3": "ShKtf4hGfsR7e9pfLLnhSie3ZxiHofkXm1dCoZ5Y3oaSgWJbxMo5skZRxhNuK7sNbQ9XVbfrgrBoysPoM5KaCYd",
  "key4": "53KMy5dSaqpj3uv6wngMbFzHNgBJU1sBTyv14KNPEXvvjc5DH3rRoEh527yk4JXGq4pCjHvYgkiht2iGXEdQxjGZ",
  "key5": "5yUeYDz1BqUXuUNUF9ngpVoLuJBUfjYf1wKQYgK7Lwsd9h1WugJDX1U2LTe2qWASxApY9cy1iUNrPp2hfrkW99fw",
  "key6": "3V9ivDTgYQmXStVa6v5XdQYiy8MWPWN1ZaPCbSt8ebdjwsNsdWRwu3kHttFMkgQwWNfhuKaG1z77H3ridXXrgc7y",
  "key7": "XMGatQ1QtEtJCq62hhNSiMSZMY1reWGF7u8SYx5qtumm2EbT529eUcfBFeeUJN5LBaToQniy7voYj5RoHnVnY8v",
  "key8": "42GMnRcmdt6Ed5d4d3JN5ib9HWokj5V8uFpchLVC8Xwdhk6vgm87H1tkBng7o3JSYndEggyvTj8Mn22FmcCogRV6",
  "key9": "5Hzp7MHYnr48Xf8XMke2dPDzZC3djkiB8TKyGbYWCMYGAnnQf8UDi8qyuygP3uUageSpFv36wCGMuZS42nH9318Y",
  "key10": "tXtxHdvNxTisApTVtwNGAwvaDacDEw4kYmbFgFLbYYijyuTNqNUMNM5tgqosykhTgJQRQqhgb61BqVxEUyE7rqA",
  "key11": "2mkpTB5evBtjFLpKwwqXLBwj8CLjFj8tHY5SCrWMUJUDHniDt73qGMb4D9ZtEisotRLEKmSJuh6jTT8xuFsPudLA",
  "key12": "34Sspvvhb5PGNBuAto7MPfbYeuvGJL27QPnpq5ktkznhPBfAzzE3iQnwK6g1RmS3ctV8oR6yst7r6VLifkQ2oURr",
  "key13": "4yixe7gTopZuPTcnpcDAP5KZoRJ6mMSbYa4d9jNMxaps5mxJXwgsF8TdiaZbGqCQnxWa2wfWKvskQU1puW7bj8ux",
  "key14": "3S4TGzZdPR23cuSRULJNCWcsxnF9ihK9oA3C6Ce7h8br226NyU1Rmqvcq9z6vV96GvAsFNTfPtA4TAjub6JR7dkL",
  "key15": "3xXBpSwuZ6Sf4CEQyeSgzqTyCCTSWsEbdTBXZMaTxoxKHXoAoXkz99tp1UHUkMcF1Mp1xy5jBRhAYqqZ5fEHRKND",
  "key16": "51V25UfzHGBAtdK5GfWEkAvadfrimb2GDZE5eeYYSivYyBaQN3FQ5R3moowcibtPBxtC2fteDXYUsqmKRPqZqtBk",
  "key17": "4oRtSEphVptF5SZTTMv67ZCDrNSgQwJWhvpTP2qhQpRezGfr3UT3653oUvm29fsmRbqbtsqgs4Z7iyBdHYLri4DT",
  "key18": "4trfW8tuXhNKUDa6VMYawS4US1xZe1eyMdEX45zWr3qjwot3t7kWtAHmZNno41C3ZrLhgjazvPZxDrx5u9NS7GrA",
  "key19": "2eVR3cqDdpQ8y1iobEWXp24VVJityBakkDzY7UhUdVFStcohAhHra1CKKYkU3YQyxQcxs4DbCscusQGFmismEKdo",
  "key20": "3gaCetb2Qwp3hVrcdFKChS1YupYP3fUXm4QEMe1qpdt8J8vAnNQdHPBEG4rjnYnrSo6q9KNoECPqm78tLK5omQD7",
  "key21": "Qj5jKaQVYBGXZXiN7XHDqinDEA6XPPdHW5o9iwp7xTTRbN7rqBZ2gVXRGRvH9J6mYsz57TGLQGUp31iMKJc7C3y",
  "key22": "3GfjPPSSeZ8Va21dDmR3wvxESHtgA5Sx76BRDp7JjwdvQRmmCSbG7Taq19GmpQN39BA2yihcZ1f11kreokSnraKD",
  "key23": "4nEBBQo6oF14ZNMYU24kZpAEZ4hMKzFYhxKdWtfv4KTLt56bgWtUfnU4EX6YgDcQNzS31hTqVnym9aBLWC2j2BDz",
  "key24": "3Mqj29JUfB6rQn7rSR5TxcgNwBwCzNR5awSpFuGUGuR9hoSMcng3qgsWS5NZyM6KbuVocwbZZVz9w5gop2BEGYif",
  "key25": "4Wsk9vZTaACCgNXY1V5dWsPSgL9oMEei3rvotQWFNceV962CQWVF7GfxH8u4pJrR6XvGN5ACPtGWhz2V6iWiface",
  "key26": "2Az5f9LvcVSGh8Ya4jBpvJgN4m9nk5yTfA4YyztN8EmEjuR8oumUM7ptT7Gg7qQv3WppaNygGaoh7erKeAyTRZ3L",
  "key27": "Te9aQzd5upLpQDPTZUakBNkrKuFWdkQpcRoPuBmNgnufC4PPxc8Jh2dvzrvzusMHRyTogfKBUg6JbbzQQer5ZVS",
  "key28": "Bwz6rrurJjxPZBTXmn7dsudpKMR6jXDWfYmnJ6inEc18nGtDx4ccQvYN2mozDjA6XUQ41rRn4VV16ho57mHWgAb",
  "key29": "3DtTC6fjcBZbmbtvEHytYErBUWo3VxyZg7g3Agx3wUgT5VUiZHCDFSckmBDhNYvHRWmucRePr3wJ81gaA2koymzr",
  "key30": "2Y4QtyYRVfp5GMGwuJbDbbLLRdbWYQfQoE7vDQjoEbEKW6HA6iSffL3YYa4XrR8drMm88LtNc1vPYqif8TgqsL5T",
  "key31": "5CXsfsuMQ5bwAV2J4NiWLJxBcWFNsDYPegy5qtrDo2dXd83xeVXY1Mh2sUGQqDnEQcdAtKaFNMBFQYko7Bh3Mun6",
  "key32": "5qCBZjLjE7ZFGZNkvuBHwApqUP6DanJepTo2Te9RjumvU8U5w3sRjGqd9zkG1erWZwLiSqqPRkqQCw7FYCuB6Xv2"
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
