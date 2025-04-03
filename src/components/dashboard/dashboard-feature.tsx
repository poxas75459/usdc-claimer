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
    "TgtpHN6uEkTJEAVFEFzMY9an2q1p7mj17Afbb1zLLEEm6JizhF9XF51JHGxhKkznHky8dAE4wmVGzcuYucuHuKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42Ljem6rpJ4kKsgeowtkYUDvFnee9dkASqZaxhbaVpmicvRU5QRfxSH9psrnKyBUTUnfvJvRMqL4ofZjhyFykiYN",
  "key1": "22dBCGV1qjAWzb9Dc6c15wVA7AbDDWHDM6aVcBixbwQE94KntmZHFsymm6wkHLZNbH23vWybQxdEaMPahYLty8hu",
  "key2": "53CrjM1a1HtfaWcBKtnA9zoEu86zug3LqXyPiHrndeuEDkdXFf2JQ9mEhx4Bbnv3fndR6iEWu7sNQomCmp4uSAoP",
  "key3": "2ftLhd7cPizYMPqctkAk4mt5jHgpx1DuBbt29QsNBuMdmezEssbVtm3tx3QEtZCFdYicoCN4JfBrcexVAPrhqjyw",
  "key4": "4kzgKTAVrJWo1P8bgkdaEp5nbnMw1xzR3fMa2NowGWBVQJuymnVxwGGKSLKpyES91GmQTfSKoqjmof3yZp13BXCM",
  "key5": "hD4Gzy4vdLJsuFJybQgZqWZC4b13dFyGhEbkUuSJjN2gXuUgPZuwZPybR7QjTviPbUxMGw4zD6FL8PmurfdCijj",
  "key6": "5kgqL2ZTzAcYjTpFfGRjJkV5K1YZ7C6rvxqqQ46zGA5wzDJRetoVWo4Y6eYAprcRuR97LvF3cSNi89UD7y2N81s2",
  "key7": "3VRX2YcEWaCdxQCC7uEB3yiMqZtziCgWWEKVPQYpedacRTHKWdcPtyCNw7BhGogFfYufw5SmjxKncmaT6UcDqGmQ",
  "key8": "3eFFtc65cAkwutem6om5Exin4jDCTJY8phNgn31g91T2GjyUFUeeesT68KzUGm2EQhPqCQfBr4C7ooy7Bm9iJd34",
  "key9": "myRDWvQqnjcEVdYfKPkorZNaHZ62jThz15fApqt6Ejph5UbHfFnquQXQ4svHk9HWtTQgxmG46Q1Lo1jSy2dtUGW",
  "key10": "4oNxiWbzwVomisjoPceRtP8UVnvpz1T13fAPyiQbnFAs1uGBaxprEHPZ7Zb6F3RH5QPGwuCbZgruQWC17h6km7Yt",
  "key11": "4yfF8X65Pi34eK8jyRFZHBcMbh8FoRuQRnYwY8MmxMAnK1FSyn5rNZF3FiscoHBvMxjNayqGSXqbXvG6UHsetg7q",
  "key12": "3WtR9gTvGffTdd1t3Gg9KEUt3sGVmwjYxwmC8srwiX4MH3cUAkFXgCsXnaMizRv5TLXfw8mvutYjmqnygYDDrSGG",
  "key13": "2yBRZK6GzbwpEdEhdKx6CwsuSrcHZYY3UWMBqhWoXAxsAoH4rTZaU97prLPdFwc3RHLmuzKZVb6Z6mzKTJ8pv3qV",
  "key14": "uWnLsxnRm7CKybxNET7c5iAWbnPNoxLTqrwgpSMsTx5W8MD1TZ8nQKEjFJWR1cVastzoaLa7tVjLFhNqR6MCQnj",
  "key15": "PGAFx8VxRHkQYECE8RsvxqVzhtaSLCj7xcAoQHG2WQUXuZELvfQYpzsm52kLTpKVnqmjXiHJ6BrBdfiAm9jWQWa",
  "key16": "2pj2W48tKpBtPKTYXnDQgfMQCDYfb1U1b3JdrMWwRAD9fRkm1ywCKCLR7YNPtvGgirJ29giLotmugi9Cyo7Txdrb",
  "key17": "4LYLKrmvHtFzwurSYdkyjRoJkihgmfKFwTJgtoRGS4RrMnm3gPFrMnN7kEj3V1YFps2LaZfKJ8V24x7kexdAA9Mw",
  "key18": "ownbbUToBkYsdt7EScDXMkLwipV4PRcvvAMXe6fLkr7atMH21R2skTJnc9VQzLx1GwfkEsgeRyFaDxkR19ywcXG",
  "key19": "2x2G14w2oy8oQyYArKrZrqyRHsrgXquzfUAkUjJ5SCYQL4FTtDi9FWo1aSLKnh7Bo8RxjBsGqnVABpFczhb6ji9X",
  "key20": "cmj1WHDyAYRBn4qqtjHxuWF3bnrLN5Rqhns4xDB1mR4KUdVhW4hP9XB3u7T1zRkuQ1bCZoGhsTyFRUarFZseLmR",
  "key21": "2Kq71DNADj1h1wNGxK6Fapd1mUoTb8nWXVomJoM7p9Yf5unVdkYLmeSJDp2ieN3ZjqU6xXwhjJFPRiKFLDq9A3bK",
  "key22": "618MQ34M8oYJStpYpBGCLYKVY3rZcSvxyx34HM3vbZRdaXSGcBjL9hF2uFMQoCh6nsBQQqYXq4XpD1HAdVm3awWQ",
  "key23": "34KUsUEEWvjd4omYp5BTfpw8u3Yosw1xccJNBaqaJ1fqthUN4J1yhieJBon2qoq4e7uyA8ckF24mz2wZwA2NqGhh",
  "key24": "3W7frM8L5LAf3USEgQURunBWqcUmjvy2BdHsi4S7gHfDP2xwfyy5fL1tyfE3J1q955FgFAZ1kNmoT7T3pHAd6qDj",
  "key25": "4MS2THaBw29LeiW6b4Je5DiSa5JY7r5RXGfeevH8qqACym6s9Po8vMZnDuFqGf8KVeiaJZBYmnGb4dvBtj5UKyQZ",
  "key26": "2NbC9g7cvBnN4XAZEwVy4NDh79Cmj6ebGcPUXXPAaXpspyYL4vpCzTQgfyzzA8ntrLBwd4mdgg9TaTeJZgGQmYPL",
  "key27": "5nGMsdrmVLWfjvARHArxwp7H3daDsUc5TLyJYW27HGF7oRGTh6bVpcTXpzBMSx6rCPxGEoW61Ce88EFK4XfJAfbq",
  "key28": "5oGEEKtzkdVft2tcX3h8iqNqS9XD1cQgi6B5GVvxQ8RtdkW2bhHZ2nf44U7r4qHGYEdCKVvYPZxm28SMG1S26rYn",
  "key29": "5PP49keX9ePMT7Ybpt1Y9KSUL9RzD3pRkMcgaB7Z7HCSncrueDvqxbqW7kGmcUKrTaa4DkXXAYcpAP7GMPovum62",
  "key30": "5PgAx2JSLhaoWyrg9N2TeVVNXyKUiEx2ebqp5iGX6GC6Dj7QaRezCzXhJXCHcg3CTdeegVMM2gXw8VyPJR3vU6GX",
  "key31": "5W3YBL2bhctjMGwjNxuYzWjR1q2YTqeSmR31MN45BPSKPXU4jh1C3ooUDc99weh2bEAxnV6G1m9nwVYjbebvHWHV",
  "key32": "2tz9EF24QHR2fVq6D1LT43sVye3J2keeEdBhUehNmubdBknCNadzGzAtEGhK5xRbLJn1rEDXKem27iJEi2t4QGGE",
  "key33": "3PKtpEvgTGKhsmQmKEzTVdddqw8DyHMhkr9QSWVZkMNZR8PddCMoahVaajpYoPgDsPxA1ZTgzbneMBigbtp1rntx",
  "key34": "2GkGRc5ETSjb7XPRdruQfuErcqnymfc3SBWPCciGzRQoYz8gD1Kcm3tcASb21ArRUEdB3AToS1G8YnAVtte9YDZB",
  "key35": "2kKFHwp3LKWzY1vnuGcK3uRFRWQ6CjErMRF7dA6rcXTfbzM35SLHjjrhJBshvJGdX4qMdnpHGayuttF1BehY6JSw",
  "key36": "iPqrYJJQ9C94ms1gT3QPjXfscujmTVQgQL4cpVSkSyEPGAMkzfrHna6WeudHmBMCY6WjvpunMbVZa9f8acZNbm1",
  "key37": "3ZsaNfmfrPQxHAp3x5vD4QRfKcHnLE8EWNKabmeE4rkMwJtp3UiJrcrgxo7qiQWa3ih1QeRpBnyRWXyDaJRcHvpo"
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
