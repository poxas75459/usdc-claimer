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
    "367q7LhKZ8MqTp9h2EALvWRftqKge2y2ywNdpA2fxyqNXuHWuvXos6iyGuJjFpEVJ297epauBnPF3qJxHY8UFgH2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gD8sMvwf22bwJ4BqseHKyowHxcVZZgNQYDapnYYWVTYNgcevHTyYYf3hbTq9Rv3ViQdVjGFvebqaw4yffHYDefw",
  "key1": "s5oMJoz2rp8mrN4F4DUsvky7VjHWtHAdjUfWqQV2RBgcc9oaxj1wRwL8qQYVRFiy4AA8G3dR8V7NxpuFtiRpmYt",
  "key2": "3mi3ruPnJDynzeKXcBoU7d3rpboL1zscDEkXxGZ3aqRwPrE5GJJfQUvyFuMwicvZHwtPMFUZj2RWmh5V4ZM4aeea",
  "key3": "Kx12QTR5whyaLNcZJzy5PNnJKpyCa3xL7j7FCBeWooQiSj6T7UycjUczQEuuT1rAZazt2qqrT92xrUadH8ok8Ek",
  "key4": "647x2f99qfx32yjbgHB2A9xbKmM8BQAwoFxWGJmznNsvZqSkuJnAddRDneGnGmnJWsvApYNhRERg2SG72VtooDoH",
  "key5": "3MGpCCwkYXVr8Qp5okv7y4knPV7JikRFrcDdyhxs1DzSCgLCZ3EPJ73XZJMWwmRMrgtZqTPM2J1R6yFrx3aP5eM3",
  "key6": "CqE9D1E9QQSuRqpJBW6zZqhb4BbxUk5RgdecYK9BANQ2gSYvtvM8qujeQNcnn3E2FNwQqp5y4UtExFTWLteHbgX",
  "key7": "4rKri43wpPBT9YbJ6sQ5Qf26LmuRSes3Aq1Gw1MHHoBoBCPRQpPkk2Kn45yu3HqrqUKQM4E5A4Epm4QKZ8XfNfom",
  "key8": "2h3i5x1HFsgDCNzNNnhWMirDnUnnvKVXzKqtct44ZtjvWiZmLQGBtGRegbufZs6oyZRKwCsrHXJCtxNAAtT57YPj",
  "key9": "5i7pid7PqVsSJbNEtXnmgi26YnCY1EuSdXWqr7gTLPGJ1bnRnfBCqWxoAq4M2wpX65fGJQD1D3PjM1L1CL2tEMyr",
  "key10": "3qW9UsN9EZCMYdjaV4E2MtCN6uBeTk9mtmbemz1MoYksv9JkaWxtnGN8ZaznLb1pvAyH8PCudLJeA8sZTurFkGAz",
  "key11": "56YtqXfUgmDNZjyWupgtLUJmJhnRsSNC2RiiwRQ6tVigLku7VPwt2wxDoWWZucXrq8cLX4kwyipV5M1uQ2vfHZ5R",
  "key12": "3dTWV8Wam7KQajonkuNtDsaS2e3SikNqkxhkEAXHNzvHNNDVksHzuHeV8aMspfJjguPryC63B764U5cf4ori3Jb8",
  "key13": "hbEAw6rpvcXA3WBwEDJoiRyUDUE2BrA4EeSKifeCvYUUKwBeMFoHY4kAgLYmNdgfeKrxoUpFkovMPkhUukm92YF",
  "key14": "2oS2xLnZiMsjmj32YGCesnXQwcSrBRQ5jb2qNRresBcjLXgcP1nKsQMguncJ7SyqqaDx2CXqQE8y1jB2wYU7SW1P",
  "key15": "4BmqexRMz9ydaePwQeknD9JcNCuKjJJWNCifVt5hEUgxYA32GavbA94hpi2vYcnbeuZNEKfEZHJAvJ8WFHo9ingU",
  "key16": "t5iABKCbAE8xHx37BooEVKXhKui3DnTSM5pYdscTpayjYrBbf1v2v1YfRVU2fj7EZMxWzpBNDepjudHXv7zw8Cc",
  "key17": "5V5JBDStXEmmekP8jzb2Zo7rUy5GJ7LpDb9xTe3nZkgCduL4ri5b5JKt7Y9gYsUikxdcxffnhNrmJ7pSxRTH9XXU",
  "key18": "2KASVdGx3NEbGmoGHw3YpbXyAfVpmHCDJHFHPYpPY8AMrLkDL2qZWEFK3gWG7CgsPo9Yb98XiEShVj28etbX1zMV",
  "key19": "nExNs34dnzKrTxFH96kZQaZRhPBUeAUJVYBfEJLzzDPenLecyzP9dMPGeuafXiNXVCBkNwJDkzPGgNnZxypETBo",
  "key20": "34NKorh1PFVSYDQwSQasSgC7kiyYzXrY3et8fWdpZ6xfEG4N68JSxzEcExXsR1GPtB7NLy4WfT8cCzjwhZXjocyp",
  "key21": "rcBsyMqZK4qcRP4itVVDSqyVeoHMQt8bdHKHFML5qmKhg2u76AWGytoNG4znuPbgtDrCg5Wdi3jAYtSoiDP8f5x",
  "key22": "4LfpSV2prN79nW4wFZY8mTvjcNxHrxK5gQKo1BupYWc5oehSsmGJTQ6UqhcFUEGKDR4pgo3bZ4iCUxjroyaJk1bt",
  "key23": "3DDjt4zJXGRwTEZaWwhdoXjQpi92RJCMUubDYA5nh7mBCHa9nCyTVrm4xEbpvKdJgLoJ8DG9ThpbEPiYemu7skhY",
  "key24": "2BF4HEJR52X8wVm9sDctapYQ5ZsVFRmjYmLtY2kHjrmqfnTcyQ6tm8iBBEhn5Y7zdhun9qRmBEF7hdFX3e5oJDgy",
  "key25": "3GRziV6vAwkMiuYBwyLa8oLhgDJhHesVE8J37yrFP7J8aUJT5cjhQ8wTVB9HkRjdcGVhTe42C63Q6sPjqsie569e",
  "key26": "4ZAmeyWSTefKE7BsZ7PfG2T3Y5x2au35kArHPRFRHDQrEhfbDtUgZrCyL4eeZU9ruGbhBGFZyJD7xf9Tka1PfVZf",
  "key27": "6uzpbDRyF4DmEAU33GSg48HsW1XDVwp2kmGKCrCD7zQMKVymY4rEPJ26uwZKVqjk111v39ixihbbYP7hxJkUbzJ",
  "key28": "3rpV7Xg9BV3P8oosxZYsG6RdPV8jfubQUmdsD2z2yBZ2uJsAWFcozN3xCVqx8yu6z1hMKCkzHKhnZAr5Zk1HT7SU",
  "key29": "3DSiFDmKBN7HubJQMp5Uo6d2W78gC3g3fAsUt7pEXhyUAC4o16i8DhwMGny3ZYzkq87ztb9QbLmKE76mTpraZkSx",
  "key30": "RBWgYRLFLkZ3Pfc6QXRkxjxwWLAXqrxUYkjhUUohnc6xyccnvunXMQ8dbre8XKaxW3ZKYng3m5U9AjT7UqnhAAF",
  "key31": "3Z7prq7AbTC4KFauLVxZ2RUi1EAUyo75HRbZTSHmcuK2DZexek1CVZhs2VbFB36HxLXeQL4fcTZEmZj9x793hGR1",
  "key32": "9CMnQg22k5jGos3msox6hiJYsCnWrWYuGsoVfm85gqCYN8xrL16cZRWfBCEyCHur8tmzgmdN6RJmWVMFj4V1BUk",
  "key33": "5FUCzHYvKib6id6sSmwZUTnxpyXr1sDBsexRvSZxk6jdLPXxqDy5vwNUnUR6BZ7FDdeesDzJHEDBYqPoMwaXci3n",
  "key34": "5jr8YF9HMjj8BbBcdsU4HF6uVR4jvjwWdZMaEARgDv6SqrN3J8b6QZB7q1akZbkXBp7QbgxgV4FanPjqEvdzDuJn",
  "key35": "3G6VpoYBk4eAoaX3fG32y5LJSLjz6Vk6hvpBpHJB1uDiXxNCXeg51VYkGJ8nEP5a3EPUR7jT6iWSfYDFVkyoFwdy",
  "key36": "64dJfLbGmsE6mrra5rXJDvfyiwky6a6ifaww18crZL8QqZ9jQktrN8tWrd7Ras6BgtYp4mthv3Lbq1VDcwfB1WBv",
  "key37": "4ivBtkyVuqSwiTp7wEU3vWLToMrykk3knicdvVEspY9RSAs7JFDZhjp4PaQZYzxLdWPVzCBiLUur2Zn2u8VHD1WK",
  "key38": "5j2nXaQTPS7GZXkZEDe5DjXJUNnPg9dk4JRtP2o6jLCNy6ZmY93bafQMtQg9fAHJe2jdYTbeqcPafK5yRJDE9zkL",
  "key39": "4HnPQqDT2Tmw32kkN8yJoEv7o6mGdrP9Ltfk6iJmjejo5xzk4xZL4yzihH6ukLJrw4m95kamX8uJkjgeFegktg2G",
  "key40": "3zwfSeoP9fzkvZy9ZTtvHWSfA4TvA3xxCoDDZT8AcHCFm3dto5fHQzoSpyP4hGaWzJbmyd13FdWV7wvgsPV6jV7m",
  "key41": "56VjieG8k7M56rNLZJzrkwbhM2DYzjR49DGYA6WNUUhTeP3i2pMJLRWz4irBpiQpf8Q9gqno2i2s4BcWrHc4M2VN",
  "key42": "2HXGCE3d85BRHjjBW3QLbTZGDfxLr3VfxQMSDqfEzoBbmaaarqCXMwnvVfS8qjxiwSfGjET8mSsYGcLgay9uzzHW",
  "key43": "5hpq6mTiskanpNTnqZbwWMMf34Z6BRS9RP4DtuRjjv3y2zZYXB2DuCeDWFvRmAxMAr2nzhwGmNPsPSkgVwDEFpfv",
  "key44": "3wDsDgYuTcXDc9N7XzSfJo2KGTku7cfkezwSzpTUs3gXvtfRPUaB863q9RbjDNhwYNeFjjzR1UXWLqCEuxpWnrpJ",
  "key45": "3mrFvBHJsejFGQsK5T7HnakG8iGJFBateuEu92Yme7sLmPQ3RxsLQBQEbs7wQNGkx8YWQeqZRuBhdaHanYuimM5K",
  "key46": "5Bm42o5doaM3Msh3GUtNmUoLwnmVtzMRUNfooCA6WRziCujgfM47UstFoxFPL7kWBwcrMnXQxUcDJ7z8jJVWAuXV",
  "key47": "3zbH3pMEkaCbTesX1PrmMLwbHykRtVXUYDsuWUV1sJN6HpsxM525XB6kEHov4BPFZc3xFVZJefUWZFUYvEY6WANt",
  "key48": "3uCScJxhu8Zs1jGAb48A1zUsfex31JTUSnznaCuwQWdbgrREHBcLRYXX5KDrQbcviHMW8cwBRyJqSC5NsZp1Q12H",
  "key49": "5BAmdCS69hkZkbAtdW7rhFG6mgZkR3ynWKvjhLqeiub7teHUnp1CtVGJwDQuFWzbjhmjbKBjsiFg5ZfZ2vj5CVjV"
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
