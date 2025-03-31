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
    "5xjaS8AbCLEWTJX1H5hx8LLZhakMByf23ap3tbKmuyGfxNGeU1LxbGNch49DxrmxhRmigmNtnK5rurLyBF6xpxjm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FcuauizzkWmQHinKHCVvDiNz97QDCmfypoTAktpsVifPVUShCy1zE2gDUb8nphFJ1usiuaj8WzLvH5za48YFANz",
  "key1": "3g5vw9mSt3tQaanUzjCnbZnE5mw6rbBuaY2dTjNBo72DX5fiU4B1vk2ZJbbrzQBAHxPK1shwcthFbF558ZT6fSEp",
  "key2": "21SFW6aBaKugPgYrcdCwr2b66PeusjugyeEkKgaCPUPdu8ZvNqy3s1VwToK71KVUrBV6VJvBQrZ4frU4oJ1wL2UG",
  "key3": "4faeAaUyqjsozrQoYeLSWcLs52eU66bN3Uh8LusuN658Ha12XepqGw5KYJYiF9wQ7poUvxsw1ZeNJ9HUxMxHduRD",
  "key4": "5EZ13Z2G22Sq6vsVSFv3BPcdKUxofEBaKbpMV76BoJJrkAkRkRV3cxDCrm5dDXpVT1jyqVDBtoJcqgj39fKsVBjL",
  "key5": "kjaf2WocG2nxsmkyj9U8uMta31H8QZ6vXBPz26hE5ey8ULUwkAkPLX92Zu3WQdZu4MCGB3uGTjeHtV41r5y1fQ7",
  "key6": "2rfhmAEyb3ctsYEvCPfHPUoSQqeAr44Hx2mNvio7DFzRFsvQqyfE35bzzvTHTKrNUHmVJmzJVHXJo5V3Fy7ve3NH",
  "key7": "3sc5ttHhEwmF2urR25MBuzgzLWpGizMbtd7EEqojXCXDx4TdKJ9chiPDwxYquyDmzS2B2Mv8D4wk2h2NGqS172Wx",
  "key8": "4RPqmtLR1FQc4zLLuPXYfZXY2WMAiZH1WosmBL4JPx7ypTzRNm1ZGrgdTCQ4gpgmwVX9jsMVsk1Y3yQMbkpYaqGv",
  "key9": "284379N4gNob1wfjBCVCN5MNkcCwt3J6PfwQ42qMc5nwRHbXpKvtFgg6hLQYpqQqhs87y5St759TKH9HQ3SPfk4f",
  "key10": "XRuXg2WDE14bcnha9q8Vmx5pZvdUGVXQsqUL3CkuSdFRAx5w4fAp2dvzE4RfMfeGFiGFvk4FfMFM3CkJCwjkbvi",
  "key11": "52SuUM3GfNwPztUrtEToC88QHeRfsZwSmcbuRy9wfggwE39v8GnHidudZBv9STgfE6CvMX7mqqyycWWavKPadh4B",
  "key12": "2VWoiRVzzW4nRogm5rWqvCvEpVNHLV87KAUxJH8JJoizNkUs8FNZjRoxJhjNH3ecwsHcmPf6U8cfENkTeqpcVRuE",
  "key13": "5Y8n2uNwzkr3JcJr2a1QSdUuCsJGkjmpa8oLwAsHQeVrxP8BiCUCbUitMHF8kdvfCbj36MooaRERsJfN4BHeX11J",
  "key14": "4qQiKYZjB5WkNJkd5i9LjSFES5Uhf5LkSxDu84wK34ndW6sGtAXvCdPU11k6p3wtgYD4T3ghb6LppkC8zrdRtnu1",
  "key15": "44qEtLJqvTonaMnipqJBQE28jQtULR1rpbucuRdBW7JX4KfeMLRaQW4dE8shRJJ3GBwqvizdMXxVyAWgDtLKn3ZV",
  "key16": "nSDoF96q1BuDURiRz1PnEKLTU8GG5ckbZ6rxFxev2HgDyN5R6bGDDokZFJCeAMfoQR8ADg7naWMunKNE6bVop4x",
  "key17": "2f2USsL2mrnwhgLhDsoge4ypYbfmqaMxGaWZyDTvZ9WmyaCFDSvQisH2mCvpaFeJFPrQUy9ngmM5K9JZAoKasuaD",
  "key18": "2i1XfpP9pyLXQySZzt1QaMcjsBBgUkVjZuW8n6gftxybBdfAMmzg6dpEUYjEkfwmfq6wyCxKY468scx7VkuzwdCp",
  "key19": "3VaCtdGyN3UDj3jZyQsYQ9R8dyZ2xSTbb1RviD3Zo4p5TqoLnbjJ1p4yEmqgfa5oTGXa5qp3kEUrfWgUdh9PAyKJ",
  "key20": "dpnxaRKbHFPF4Xjg1nVyzan87hBuGXEn7f8nKQmYUNPzdALzwQjhgv2zVNzAdQHxumYqfjU1GUiN56PPzz4XCMj",
  "key21": "4QHw4GkvotKJvEnuo7nTE9AmQDENGhFDsu7KjvTCeEnXifBqzeLmiCN5Dfa3EV745ALPWM9cd3eQxNeycJ8KpnDx",
  "key22": "2Qv7s57cXF74SGWwNFX7UMtFWT4KjNaFTYYQ8wFK59xe9qSdQohXmgLMDnpXUy8xWe24cdJNd9aN8cVQsjAd7WBC",
  "key23": "2ny8vsa2FKYpUnLHMKqtLzRXqXD8T1HnUbyGQdLKCXQ5unWro65UGKszWUxd7hAkfw8GTMiKaRY9F2BLXXwbta9n",
  "key24": "4nP89dV9xGsuqMDTiqtJxBnRjgPMRJuP95zvvVXYc1ibTL39jjuJC3QoEQ7hYA3shSDua76sZfUcU6ojFpgPQe2r",
  "key25": "3nfo1Un87AnYhwnSTGkht7KqZDeTNRnccenX2G6zt4a9povqyMMp39D26uCjtf7DRU2RsZ1Nn9Zm6TdXxmoimwhA",
  "key26": "5iH4TgXyXdt8fzoKkoETPukNE7BnVod6gY158my1GQ3sktRK3YLPeNgyJDoiM541WMZRKa5VuokcEVtgVRZzxTDR",
  "key27": "sVjFktcN56BAeFCCA7TrEuwUiau8oeR4SMSoqa29LZpTLwsHepv5QxTQvyQzbzgsDR3XQ6zeGVwbyYYTzWKmMzJ",
  "key28": "1uMnbGBmzVNgFdg4wp6hSocxgURM6RDXx9rLomLTGqcTp4WaXkmoSw2c52nDc9LUEYAfp8JR5xxBzPAF4DTCarU",
  "key29": "3FWm3ddaW8UoAtV6pRs91RzdJpWuuHGYWNjRwTCVLprLsDe6NqBjknKg5kEGCsyaw5kLWAtwrGvQBatJF3XLAN4s",
  "key30": "2wyAjX553Y9dLqjiEmeDVmJQHCqbF7cZNfteZVFENbkxWTQxm5zAWaAy6puFDqqw9kxQEesSxtqozt9S6ozZyJG3",
  "key31": "2d3NKhRQsAMdH6fCzd9qZpYw4rBcfprEEU5VwTbuU6LNFcGgLuBWti2rzBp8cXWvy9GVmk1QdqpbNzRNzMYiG2wx",
  "key32": "2aRiaYLbEqyWeqBtdV9Vy3fGdzBY5SkJbcvxWwE5j7ewiP1yhovXvaomMiJsCgSqVYedLgphze8WxqNwRk9A5VPZ",
  "key33": "5cUmpBmsrGVnasjLpDh89UYkxZG6jCkfATCkTrkVZf4pdji5tRX668zWqE333f1j6jX4K2jgfV3X1FTRLy4rv7fh"
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
