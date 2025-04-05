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
    "3xp38Uv5rV18tjBbqizJbRT626BuZVd3GrVQinjnoUUyKmg5BjnskivVtCUqGnp3n9bR612QfLrx5s3YdPGfY2zt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FMgDn63u9EL5Q382bBqMKdjESV2UuKQ2TSFuiAvE63WNxbJkdvgWzaYVxqBpnuDZgNXCLJagnGrQrGZwYDfd8Bj",
  "key1": "4kno6fA6NZLfLNzrmmDQNLt6Chn18Z3UTx72XcAzYznbKZqyCriGMbffPzS1HaTM1pXTaVpLWQNDJ9BQsJT5CPyk",
  "key2": "2iDN9MfUpxFvGXF1yX2jct9ztB3gK7JRniSZtBH3MEa7ecVumvfjEgS6kqSeo4VTJcpHATL4UGdxp1CRjKqPGhUF",
  "key3": "ggfnFwMWxThJUELky6URNTwq8ueG6Z5meub3sGpF5wY1tLu8qUVrqyuRoZnnaVCkhpfvHe2cy4Z1uNcbmXfUQTZ",
  "key4": "4bcLtthFS7SFve7511Pwj97bH49YcXsd7Bo7tdn7w3eTG9Jk4QFJjoD5bFWAwpy68UTrYkwsgmRTMnV8e71nk1Ge",
  "key5": "25MgJuNKrrK3KiJNiYCgo7Vy8kcSZfNUDrdXYYj3Kqi2kg11vErLZJciJbfFCToyv3N5rQBbxorNsmbpbhKHe2xM",
  "key6": "39s2v5RtbPDpWxGYpnyzBTqvaCht6eq6mMNmWkfpmVkGeG7PJGkm673hs1UQ1hZJeXPU8JJ6F2RYczUvYRF8FRSZ",
  "key7": "4Xf3rMT46kRLDC2mfi6CQjqi1XA7eEb7pppNSfFiHwZNnTRHW3u5TZsjx4BGHhUfGKotRmYmAiQePrLUuQEopNYD",
  "key8": "pYkzv8N3zZgkji5iUNAvFpPTgcJBSNS8iEeZTgtGr7dmjc5xsEhCvftfsFrTW2o9qnxkToa9eL8kVVZM7XCj7dp",
  "key9": "3BDi4AEJ3d2kiLm5R85QkA6Gua3bTrGziHmQeSUnrpVUo9gnk3L5oNMtDHoU8wVPmaTkjnor2JYN9oNTr4BhxTRo",
  "key10": "38D4mojTqJBczomQtJBBYeRWYUGCP4EAfBFrZfPWKe7ysGRman2bek6BTCvQg1JZBxZauirdTDWAwz3zAC4x6Hpw",
  "key11": "2rv6KJRNrxAPoLZzLUTuAGR6HvxVUFgSsTY45fbakZdTzWuzSMAAwZhTkyy86EQ4dnu21F59S9tEixzhAHLkjwjp",
  "key12": "h6BkPxJoRKLh66bnZWDC1bsacvwKNKvwyhT3wt3qADLDxfbJcWDJMyQgTUy2cGnVPdnXEwdTkBXUqkjSAdCVgSz",
  "key13": "sX4LnLh8rJJhpY4Ug8XcENPdMf4HbSh7TtmcxFFpZ9M3omSvCagPZqq4BQShgFgM7BEps7sQktCq7yrH8rzoN4t",
  "key14": "3YRhtuZmKsmn88SHQa3wjJcRdkqm4Co6pVNC3tpPMGT4W455Ei8Zeo2NkgqQ5nacdHjrHdXLLWD2Lss7oF2vHQyp",
  "key15": "4emeHXYDGpMD5pxW7cxvFJT4JZ9qCoDKgjyirstYTRB9kXAZ7nAdctp3AauBEneFC9ep9Ax67D922qZ7nbdKufXg",
  "key16": "YYX6boTuZB1yoTrMPThndnY6bD3HELV6XLR2ANjPNsT12i6X6QnKhRMFd2qMpEGTGFu5HqXCXmKNyVnhuHTbGih",
  "key17": "36fXtRZZwDkUf5Dz3KTy3rUviRVB7tYTMJ69DbtdK3skZadndZidhh19ZX7udWp1NCBbQb1ThXczDwsNxQ4mE3yz",
  "key18": "5fB81qfSMjsC5MSWgiXZDgfvAfveNpYiyYzE7wcsCbewMLcJ9WdgoapRhybY8canTeSsTUdpbsaHVFFwVTSJgjkX",
  "key19": "3PBJTAyXZrpu5VuWzXmX5KBTpuUQjrXK47Y5zSxKxRsx6AEm7KzdCFmmRVMWpbrYHFc1pvGHE2sV7iQdjTXcs5rQ",
  "key20": "3sUbU8CbpUCwX2UrgmCsSTUA6oLStKz82mRadtq96A65G6kMCBTGNZbXwJnFqGjWAGTHW1reokD5yNGbzVLQFd5E",
  "key21": "3o2FC89oHZyodPWBwkbivy8K5F9dt1MqeWQfDoXJZT5byaD1D8pLDPcFnmxmMGkznXjkv6VDsBE4LAmJmjPwM1Gi",
  "key22": "4m8LCj4PwoHKoMdTrmdWMt14dSTmb4TbjevcKchWDiJJxe1znUFjxjoeyWXHGznxvXtkQmZBfBtGkswytfKakVaD",
  "key23": "3xim9TkyChJa1CZEp6GAgnErYTxzr7fL8bzXsSrpWfFZ3kCsM5VN1Zif4tYvgECa8QwcE1EiYWsziPwMVwmM2v4Y",
  "key24": "4KNTPDs8BwCiQNhVBJ1AsuwY1VWVtWaAdtqmUSQmxpD7eWdEE8W7Ad7jMMdRE7twzHjyLPr2TBjjCY6i4mKoyP4U",
  "key25": "LmXqaU7wfTUskhZDg74mJLmCmuA8H1ZkpWZc4sewnfNywCS7RTzfRRNAz9XytjtihKZcse28vAPzRGxjdKa1Kpn",
  "key26": "4dEGaXU552z6qi5ebojCayG6NRqT7KXkz77oVTUGQbdKmrAosjm55sPBbos55YDLMZRsBcF54u8ksdjq3yjxJiFm",
  "key27": "3vg2rSQpnDeqKcUp8eSSJGEaC8vDsc8iQmPgNpN9st9Bi533Kpp6tCwSmhKnnGHoWPfN9QXZASbpZ7qR2gRAnjuP",
  "key28": "2WKu6PgL7YUH3X642fnCZwkPvfwQV9Yggk2rhLz2tmJjSVQnDN3NHdjJG8mz5jr2A1jonKj272ecfTqmndAexbZA",
  "key29": "4YVzgmvmKCrSDSQFJ11D91eV39PxnQSGeVncTfdUBca67adeMnMLuskDXsjRqaEmZw2xtybMrZdmg5eakzyMYGZi",
  "key30": "58n8gPrhY9w7MdZLxwewe85agm48Ekax5EvVWhCeNXuwNi6NpCMoRxodAnnAoDC7yTfpzxgFTd29awGgchinPkbB",
  "key31": "2Dhc3MqrMdDcGghA9JQB4ENWjmgCyNEvW6LAmDW7YHR7EFiTHyu4Aq5EwrQj32NH8CnUXC3Y1qmdPjMY2LtwRD2D",
  "key32": "4kjJhtAb3kKFkUEK85Y5iHA3oxkYsx2SogLv4RibDsLChp6yfp3am7TLHDv2BmDANJiBwL4AZ751hXXfWtcAooKe",
  "key33": "49AjGzw356Bku85JFXQbf1QrqpX73Ux5Tv5FrXuPYQ4hwaK98i48PzKeh6MkN8dn1acuqcjXCtVeYioinATmDKXA",
  "key34": "43j5o4ezwDpyyP1Vx8NSNHUF6RhqdAJiB4nUUzF17jfLncJ3oxKLDCwApXUpWXskBaSduW88sQJ3xUqN8vY36Yjd",
  "key35": "5x93xGwTndK2DtWyHRmG7NGXi8qqZMvSPF8prpTQeVz9KPohPXB8wXX2YmPfhDd57MqWr4aUBGDQtCug7FJVn63t",
  "key36": "5jDfEXKXeomY618Fzh3u9zeenBAHTnLaug2MszKs92VPKYmn2119zyESe3yChMZu8dXweabjJ7S28ANe3kizyF91",
  "key37": "56MjySjdUji7bioV6WxGmLzJoxSiK3EhwkJnyfd2BoXpRcwdhyZuwvJAc6d3pLqzXpKEqdZD17x914Sp3S348yiE",
  "key38": "22vrqdx7Q2hT5wUrcLfw57KhWFSsPQFiTBJF41TLWUdMW3GC5iaW7YeZKB834CdEB14V9SSXpXoyye8cb4gtQZHZ",
  "key39": "67rh83zCu7sKAHSo6j3fe37nGPKozdXUL41jvbfWM9BUX3yu8N6XAZLXW6aoNqaeuE17tLw6Zm8stVCXeUthLv3o",
  "key40": "4jvTzhFE4yHWSMycbbmzkMfDoz9vSBfisWyNfgiwuKX7kRdauHJ3f6guRS99ztUeVh5oCzDizEfDby7z8ZQAexSe",
  "key41": "3QHiQLwCtER5WsKEDn68zeN4Uru8kXuzPPuckakKfHjgBxTXWSmZSq4UXBgap5gT34Bp57MhgHSxiYfqnYLB3nuC",
  "key42": "62mFWTZEue66FK1csn6vScLh3tPPRfhDwqtEXJyimZov5GMf49mhEJNv72Qwabox1CBuvBMFrj2kinscXBM5coUw",
  "key43": "ZFJTpKEhiNfgC8jYLa76EUVyYBtKFTV28EuB5SYnGvw9buFR4BLkfGqNKn6S1ZHKYZtt5AkhX6Rrp5TVwErjcfR",
  "key44": "2QUsfoUBGExXFc1uRVeBr1UhhN94zzRkDtCa4B519cxbmN8JJuzqTt6yrxNURViosSaqYnMaYWC9BiMrn9nfywHv",
  "key45": "4DuyieXdx1Xa2swEpnZERsMPxpLSgSDxrWXnFZfGMaiivcvacig4BWGgZ7NWeg2aFRE7NaCmkfDz3pCtuQ1FHCh3",
  "key46": "2R2qFqKXzB2adsPFYCTForygtKgZTEj9LLosDQuRftybMRYM65d83zGLPSShuYzqyD1KKScQf3aK6aLSNayimT8U",
  "key47": "5j9H5YpU5nAnTLhDiw5pFap1xYwqxDjxFXTtLo4Q2hnptuM2ZCvhXjcWQVaz5ZJaB6gnoo13b2j9LYnwz7N8ZMWa",
  "key48": "2gRX2TBQb1aMZ7ErU2iqsdkTwJ4d1STs43VMWA4pXGQWySX4FwEx35XeyCprwtdYnEVz5J9qkFufDAnKLZYbmxu6",
  "key49": "3Gufe5S8BRduEEnfJfghDg5h4V8FJrerUbL5YD8b6NcfhaK3wDSaDiZXwyxRBFunADijX19TouQvtpfYAH9ZRy6B"
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
