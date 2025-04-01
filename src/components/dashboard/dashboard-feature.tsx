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
    "13yfrhHJkxNXRLdyevVvewPUKjaqWw2zyi8fKwCCT7vdjDYSRMGyCEj2qUJjDqdqYhAkXaWygtjuX6aXVSSKQ2T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YevREWpR4vFDoHnBpD8DAGCzGZwWaekpBoCuxkvfnusGDCCokwXKjqBNoN9PFNjjU5wTX1gtneJHbAtu1WgjvRq",
  "key1": "5zg4SWwgoQeWkykiLaqowcxKKZj9pkMFezEvBx96tntjCyi6Q6rTpZgwjVvfAqqq4R4X5hFcmPfuZLiq4EV81u7m",
  "key2": "5N3ZYJLh6sZf78H6HStC1xKrpj31ZpX6v1H19cQgGezVhrcRFdxRQ3XhHS4fQ3GjgSLMByXFKykj7okpFcamkjNT",
  "key3": "2uQFTwKq4Xtjr6FQcB5a1z96heC1t1ZiYMdAEqnWhdJmKyJYsgPcyLGnYArL9eXthkic2t5oyhZfciEGp6TApHCR",
  "key4": "5KrAUkfuMD5dEgSJmadiP5KuM81hpicM5fAVWo28V65sSy6A611qnRmS6XyEq8LMYnwy6Y5MmxSSUqoPu31wrXVn",
  "key5": "3D5e4HpfZikR8V5cUXtdeWjR4zwfGGouccaocsA6RAFdqGD4XHcAimTDgTN15neiFQLBVsEXsUvNHuYQ8hb9WhC3",
  "key6": "4AUzU8xtAxVJuH2SYYU4ugUfGUxwxbXBb7Zqw91sPvLCFooTf1kQFd2585HwDfNZ66RfDjXdPjNYUCwWQ9QnxGFn",
  "key7": "43LTg2wUFhgWkejqdNvAjXxb3SBLXRni56XvsNwkvoanYzvTAT8h7rSEXqcoqhAmFvR2b7PEshAfRETRcovNQDYK",
  "key8": "3mjjJNdKWQjT3tbhQiLB4FGNRkE5ebbRQthKyHBtR6QymnyCPZdNCfc1kDj6wwcLNPGANShd4Twpy9M1C9EvRFCJ",
  "key9": "4jWMfZ5tswGWZsTKfyYMqGth9JKmHUgadKE3BgqxiTDPaC1bWdUYLVn729xH6bXPJsotFX5LLRkwZffxCQWcUmES",
  "key10": "124uESTRsihcgvjZXsNyEzMpZ9wapQQYK6AKb4Njk7fd9jv1A3jEhTPdy2RrkvJuboAusUnA5U6UT8GDcTVfSrp8",
  "key11": "2RupiitsjJWb6fLJZL74P9nLRQdAFwNbjSVBp2FHw8nJ4PiwpxP6AeJVJ945U2nfQWJrpfQP95n2Z64PkXipwAFF",
  "key12": "5USMHw7V8NMtMocTDVKLwnHCiyR2qCN6Q1fXJ1dZMR48NAHCdTFzgJSCmJb41HQYDtzj2ve82QBRoRT4K3gmfUNn",
  "key13": "kUJQ8fZyxDSPtJfgNtpuCjUaYyN9dbDqZiTjhqKs9EkAaChovJZDdXoyUcEQ2eR1qRW8KzWiHac2Qo3HVkKDyJW",
  "key14": "4z42aMxzir8MhaxYnVqVh8Vq8LRhKL6YKxdc43AvJYbAp2RckBQMzVSHVbhyV1zSdrvEr1cLo1RGj7U2gh8pr5J8",
  "key15": "2gSyHMMsopJ4f9FHarf5qVY7K8WdtDesXsPjFSMkyG9TF1s5w2D3Qf8cKVgoNTp6gXXvGidixDsQYQMgJ3HqceY6",
  "key16": "5dLZxNPWYW9KDkd9FrQepfmWiAi2164a9YpFD4EcQKVAU2bFyEgU7i7kaV7EcTaJTMa8ZJCLUXVMUXaoAJVnuBgn",
  "key17": "5gaYS1SMhAvQ22UUXUEecHFp7kYiZxxksm3Rhf7WXkpDWC9v2SDzqGWBm9kvBQsgZcFbZujjk1RnyjsS4LrSxQTA",
  "key18": "4be44CoSTSGMBb82eWU7iUr2rWaz4udk3fQu1jfDbWVqQVyVWdRpsPSyw1y1krifpHALvHVYhH7nwxANS5BY5Cdu",
  "key19": "3zmsNsdDZpxNVGQzdycMjs3CgWNL1FYmVDU1W47TRn13S2YorUy87rLqkdV9fqncQatP2atZQ8gj9ZK5eLA285Mi",
  "key20": "4daSfeK7RYRAcBEF3jRCoYn9PRHqyDtxcieaGQ1wupis6XeH7zrDDNLbpArtz45KEEoaW8cBUYMCtFTB4UAA7wnc",
  "key21": "2cCypTU9Fan5nwLZQ6THztTGzQwyKCzfYHFyT42MMfmS62ejfVLjkLJkR1XirHEk56AqsTdZoSLuFURpjFCJZvVB",
  "key22": "3AyA6YYmUZAik3vxPTqSpM78SYN3GsHYs5F6g8of3qdBDw6BsZKENmtL9SPpNn97XqMmiryK9wa4LSxvCcoc5ad5",
  "key23": "2i1ymfBNoYiUEdzQTWNsY66seB8m6fH5u7EPbVfr4eZ2HXu7V4Z8y49JraeMVw1bVSa7emmZ1AK8YLf1Q6PiUR6N",
  "key24": "oKLToFjcAJ87dwcSREFAX8oXtcMyHPve9UYvRrc45jmrrjRFTfZaAHd4kkfMuSu9JXS2isZDLH6Mot9Kec3HdkK",
  "key25": "4FcgDb6GXf444mdJmB7sbCSHaRV9W8w3KhT27tmxxPkYobzRWEQDe7jPNCx6MJAL37Q3kXXgX5wh187FAEi7prTh",
  "key26": "Kb4UztZyiABDRfcQDomifzd9B3VB1xeEdxSfRkeucdJoVc2ea7bHDEJUh9jsqcBsAoet9zTG6ZWQ5vmxmcHFGUv",
  "key27": "2vgdZfWRahJHAGF4hcMdfxNaTPPphmfcZrMY1dSKFpwGFgWmyjs8cEe8m56qiy1V2PrB6WWnBxfBMSAnyxXnrvhA",
  "key28": "4FiPtDga1EqtpKTijcT6bCYRHne3e9fNmyMN5PMeBuw9HRSaiCHxnDHeZyv8VTTuhDgntLjK4WzWkBR3qZh7SeEi",
  "key29": "254wgjM3T6oGaAQHG6NrJoEZo75FPGodhu3KymiRy3FUwTVeAANfwXCcjvwzky14VnGku7oDd4cxT1qWDc4mLtZ3",
  "key30": "5bmX1cUNFu91x2AmdHGPnx5SLVW8NoGnEWdMi2JBgbuUdciafoHx5rm3PnRjwHhL4nzRsap2U1VyzTQrwu8ZCEm3",
  "key31": "3Ea4aWcT9zJqF4UnRDVv3BgRAFz6jkx8zRpqJSh2aQ2APKr6P6cFmfdCmoFbNpZ6fHSyVznQsnoLRKrwrfeBKhvn",
  "key32": "4sbQ85fVNa8eBZNRyb1MF7KLosNUfk2zMzrufTPZkhonuV28vxyiz4Xfh91k2ePJy5Lxk4kxUYwESS9YdoP4p64H",
  "key33": "4sg7nbzCCvEsCfBzLfnLvf4jPJApZeDEiWjW9WLYJ76nfGJ3wLJ1DCVfpNmPnnWQysyG6Sy4DbTp5gfAKedvBxYQ",
  "key34": "5j4opoFCqhjTvsmPREuotq7xDsv47MATQ5gGRoakFJ7dfmb4Sf1mJDxYcBC5rYJruNFQ8stp7KBhKzVQ4L6h8DXD",
  "key35": "3Bk6tT2xwvb6CV8pU678WFYw128QZfC1QAinAgojCumEwexyyHMFnwyX9qUaWkUJ7e87eRXWyTuqRRZJcJQxZghx"
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
