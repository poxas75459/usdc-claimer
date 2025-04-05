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
    "SBYqqFEmpNR8sjo5NMVh8CZoYhwtj2b6WpzCqRs4KHSY9eWQr4YsbddMtybJshjumijCJ5gxe3srYhM7ckVgPvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u32aUk4656ibcbGxNGfXWgEBbE9gtZ5QrokpSCRL5hA5g4txFEiE3GQQB4vhLsQQwygh8AsdcXYpsdUfjrtXBFj",
  "key1": "4C3AhR7UkAtBgHu8CFtUQk4KRsgmGDVmxbXfcYKJgHj96orQK3U2SDH6WbeNs59qPH3m1UJqNU5aMeXAFSiQh55N",
  "key2": "2tC36M4U3Vc5FTFjd7vcuak27qLGApJpqwYHZp65m8e9LFxZXG51uA12Q4qmqqWSAj1B3BQf3MRKBnKP2ZZV1nGM",
  "key3": "267xyZdP1VS4hmDqsbxwpvPwRuF4yRkS5kryntkQTXezs3pYvNvz18KAF7TZtCSZLBEiub1AJ1k1ywjKG3kENeVt",
  "key4": "2MwiwcHGvGnrEP5XGmJqCMeUUveic67FRadxWiHfwVCV9SoeaEhPE171NhHAJFYAHZHLhinFs5GXVMvkh9MxuJXs",
  "key5": "3bMAGJmvf5z3cKwWg2Fp6L3Ccb7YJdrGFNhU2qnQ3MuzhTXwvjhcmXBNmXKU8kDJzLyv9sVMVCRvhd6GJ5akxcp1",
  "key6": "2EEQzG7mPRtZTAvKXMYoxNhVt24MJv74r9WqzJHH9ikSeQuStRXvugwrxx8xQYhjXGxGbmxuym5ewiyYhz2hBt1w",
  "key7": "5WFufRXfBFwPYptGhKuQbnuWuLXSgnf5ndvcbjp6sL2ySzrGPvwDcVVQFnjLAqBeVRP8q96MzWknuRqRt5Vn58do",
  "key8": "5cyxFDH3PcgBCuYEMP9WvCM3mDBjzRsTccN1oQ2x8ySxiGjxqrcGNbefcM8wxradgvmPp78BMCbZJv2JU2WZMkaZ",
  "key9": "3fbUQLEqX1W8CfNG3k4vnX4tFQ48JGXJWfGSMidCDLUvL6bVmyXQ9s8CtGYmDMaDYjDBd6Rg4bdoWfsLAkdADRq",
  "key10": "3HsfzWjSAjbaXaUASbYiT1VGbwtWTvb7hp49LJ9pT9JMj217iWgbkGoeX9QTAf2Ms1DZp3WuSV84LKDqzMeqALw4",
  "key11": "3223kqV7u2RN6tmnj57T1F5UekHo58BBF37zLUo58Y49CNhfJK9A1CoJ7oC1oUAnPKQ89KmcASLyHQAvcEbVtzNr",
  "key12": "2QS3QAX1ZuqFZ2njbBWxW57F6VXCkShCajvmddYvPCq73YvSWGSuoaSXMYx4VzUauorfbCQWsRFAL58GjiCSLvoL",
  "key13": "59ksaT9i7jhT2PCtv8rAgbvrzRxDEThSVtHXdqFnLPLKAi3rRF6GiaRZF5T2Bgvp7jEE8GeToXjtaZfnKL3d8yPR",
  "key14": "4ZpNihCwYjHctK7B3pd7DRRojnPZYFXFdMBXHsRW3BUWnU9jgMHbFfLfiYm9iA7vvZZ6wdTJxVJXJt9DHiQnGcCG",
  "key15": "3SZ7eQ9yBUJ1cQWPmSyDx6WJuBqnAGWiAw9xKE4xyvPywTfCm4UaHyKfvncpAQzni8aozG9ciXN957hSqF2waWfd",
  "key16": "4gNnvFKFkKNcgAj5js5xsjy5TXsFYdpFxFypQDpghpNia2osXhH6F4G4nisTN2tpQT53hZyCrAG5NScc77vnriHH",
  "key17": "2ikLFs9wYyLWfA5PtCn7Dt5sisFfUUmFc8moYG336oiPFk1kFaMabW1hFf5esZa31mKNN9sCnFyvStkFdZZRVYNA",
  "key18": "4uwx1eyVGPsUnRQN89eM1vyxXazyDBMagvmfjzSbYSfoWJ2HA6uxvPfg1P3SfUUJqhrJbdcV6aCYJAmAu3eZ2TRt",
  "key19": "3NWPu97JJtyroPeBo5pBWFNH93cAHJBUdcMxjWStbfLYaATxcgVdCXv6F4yVc61faBE7JJnRowv837oVkFTdwUEo",
  "key20": "5xcEFBKcDzkoAJ7FC91Qa7Aq2SBcQfdQdmQ96RhGdms9TQGJxycVZykvppZQZjo8pt2zHGYt6s4T6dPhhPrsc58F",
  "key21": "3Fkg3rHcpS946as2QN4iK1By7DwzH46NWWxZvyzfNQVweHS16oj6kXYi6obpLWk7HS3wNGcnDPZubu6JPbe1jCkp",
  "key22": "62yVZNw2sYKEBd7KFvSYz3r14A534WgEvLKgF5L8XKJUj3qx748Rq93o3X2WR1zYmTdGztMkknPfQ3p5cjTZk1rr",
  "key23": "2DfuUWxYRKgTviQnNrzWDG2pQDgAtbHLX7maS3NsJmprbbAmpvY2R4Piy1dGyEG5ggTUKkFXDPhEq1mwF4Dq8Wvh",
  "key24": "59wACF1LM5GxCUkbNVoCzniTDy9iT5Yh7nzjtCMbaFo29nxfPxsDp7SyYzBmEbiWLkY2ApVinmHNbaKCYCvGEVdw",
  "key25": "t5UhaXZyMHemLWJz7aHVWJZS71LY8ncEhDPoR78LjgW5s3WaudrSFJqeg8HYYi5SnLZ5kKrQumuGkPdm5g5pG7X",
  "key26": "KEwMGBYH7Ys65AbMdo81i6wqtfvvedPsu3GbuDAPCkYoKGn8nQ5YVfLNpSbkt4PwnBS7mj7YMAq97K7wMFv1o33",
  "key27": "4WB59Aqasdk8VF81svnzCxJRbQ2itGoSw55f7DeyBqYckW5vvZxEPvvf8CzxYWU2CrdV4EZL5xENd3HNeiAK1qDZ",
  "key28": "4MpLcT8SFq7EHoUDHCEnp8UQKDQ8PNmYT83iqR2piqsP6Sr57yne6oSRBpVdTiBnsqfexoqfabMseLt18bSQUWC7",
  "key29": "E77Lp9ZfSXGMrFDTCCzea838WggvVxfKZEJemm9Cb23SKp6JUaU6ZpeBr2sHemg46r3YAzix1AsmJXBX3stzbvD",
  "key30": "3QdVG8e3GG6ch736SgajnUfpNiTmDf3MiKSVbjf4gjBBcckcxoX6SYF1Z1usoNSVDQnBfEHQsfZ5ZaomTtHqRpQZ",
  "key31": "3UtGjbVgS9oLiQTk4JPHMrNYGRQufK6o66gfqqBjbxxSZtcwheo8YSuaupsbddLietWJavyTq1UofwBZ2G8rxJDH",
  "key32": "2B3EdGYUGFWzZpaJWuZNfc6ckKabVMoJptBPTJLpZrBeoM34S3Txxk5vB598ZNfGmjC3mvQsLKMdc5u2tboSdBxA",
  "key33": "r7M6si93Agvy4wuoXkQvZsXaMNPnKbDzM5ZLtAmELkVTE2xtF11eLgrLi6p3cBtNmKNyxjEZPsXDd3LhbaJrhhY",
  "key34": "4LCzY4cPAFMkbTNKNdzGA4yGwxJYHJuXiHAQLPAf2265zxGPdhnyqZq8SQMAwJCLBTiJw8B9RwLmwamox2vSCyi1",
  "key35": "3jq9ozs3mW2dUKMZxHs1ugqi2ZK4zJsamAnsPL1ifnvMUj1BujAGoVdG3EY8QHxWMNcWJXhb9avXyY3UhMuGEi9H",
  "key36": "5zpYuvUjgY1vYgnaRw5Wu1Kpfy2FH6EtxbAfFuK3ugf5y86URANB5ey1CdPXTSdBdjV2dQnuvizZep8813i8rd91",
  "key37": "5V34PjQZSua7oeHbmwDFgrzzSEX8DBE3MzSMrNvdmUewXENKNGa1zxLcdMrMqLab8hoDzXykZmPFKQhPwtMbgisK",
  "key38": "61MDYLLKBhDuHY23iH39n8tzjfaiRC5phLAtPcVAL16XSQoTLZDs4aE6AR9kLVUaKgW8dKn9YFhckNhmMjGUfkC",
  "key39": "49HiiDwPKPTw9GUZ6Gg3YkZ5rasiMKyEbU2j986D8H7zTq5EQxMWLdj61EkTPEusLaU4yKxA6N3WkZktodnuCeKU",
  "key40": "5XZYjNG3V9fRysHrXr6MeSe9QzDYLYGYpvAB7KdKpPNjNYjFw3smuJ7tREtcoSWhqmkSByfFWtvmfb772rV42HY5",
  "key41": "33xdiqsVPskN9SFqmaRfttiZeCjFuYGJpASK9rC6rELsATEPNysRYcYoxy16oFombm2m5CVyo9ZfPj6hvjgTmP9s",
  "key42": "58y5J6ipREQeBzrEgU35LXwN1Mg6otAQvwhACoPUCVb65QgDSD5eT8rN5KzwRrATJfTLCje1AKaPEo63ooHzWmh6",
  "key43": "4EZ5xePrm7jRN1RWW4oAePenMEWebfrdCWWWN45wW1MunLfdpMLuds1VDrcBVY5f5AHJBAKRCD6B59AyKHY14bX6",
  "key44": "3aT42hSGvwpykCxaZcJDFppreTEFGjX8wYjiwiJ2yLSnzN49Sjcaoy2F739QfY4BKCzWztVRT1NcK7A5UB77a5ws",
  "key45": "4MBu4EoZmu8z5AGx1EfPj7v7pghZzZXXrawffAzNvWjvpyJJsZBRAFA5HjMpr2eFxVoQEoP4Pw9HtDBuMb43nqbV",
  "key46": "5wc2a7QPNwDcHn9kLvGzncFwQk6qQZkxANXbU6ubexQ9Pv8ShwcYuB5eXCi7P3midKxH3kZe1JHG85Qinu8cUnGL",
  "key47": "5Yj9iifH4Zf2tqKDrxx22CtdmsxyqEzGjKM6k9amGTPKHGTGaQhAzgKXK97VuHZrHTPfRyou55Giy5TPpbWbaFgP",
  "key48": "2qirhsDch83V6AaLTpSNReCK2gFQijfuiN57NSCKtWk4R2qgjSyEpL6kEVJw4YJRJhsHyCog7zqoA6QgkuTf1FXc"
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
