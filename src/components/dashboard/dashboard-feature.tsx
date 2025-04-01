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
    "3b743r8HPEBbSgnMf7xM4zRR2LGnGWSLPv5ZXoxbHmuMZHSrxgPe32EVdcNHRpbR7RfRcS1SLJNyN1K2NdFBkANp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JWuo796QDBeBJLgfwqtLMsfmHcQnrNx9vcepAGCNoFnwa7exBNXTuF9mFdCWjzSioEtQEZL6KuQKPQTpBoaURdH",
  "key1": "3Ha4FNP4pmdp6iAphQBxgT6s5exX2XrRMt6ieN5mv7fJX9DTZr8PLq2iT68PYwifkxiHiNvjkigrTLU7eBiDSWp9",
  "key2": "3uNqSQrtqsWtuP9gMUL9bxJJcw8XAcp6WeQGjrbNY8a3JNYt8pauM86GzsLUuJhRdtExfcExYeVSk4TsAQbeZi8e",
  "key3": "2xqaDqu9fPSjk91BrSwcMtW1HJ7URhuZYsHF7jZuJsZtZUvHz9b3wv8oGpEWHX8Xpt68DTe2LtCAXea3a2TEdUDr",
  "key4": "5w8j4Q74fug1dMQPcvtqmwaSKUdkKwywsT9wWRawi574hWzhu2MXDJwLSSu31xbobJ7rEkiNRpQFofzJms22JanQ",
  "key5": "5SN5dbo1Ts9DsEdEJ2khqs8UtJ59vBAQcMFZ2ncd4mi3vwSMnfpZ1FYRizLwVE4DSs48vTZUswStvSj7cb19nQ7u",
  "key6": "4q64RY9RTVH6RE1gTFea4XAoTa3PB99HR6RmnK5HtspbrXBRFxxtkKVarruxgwLr2pv1ygsXcQ1aT3q6RdFmmj2M",
  "key7": "4di9xkoKpqnwzfZmesb3Govi7NtE8eGTqfZx3ShUrGcSBM1FHQbrZEJaSqB9iKDP61Er7TdaMYD5RDqPjgHC8BbE",
  "key8": "5ihXjz9uj3HfSarqaDV5dqFs6MyXUPyEHDGkUHV2QU6xjouFSkdX5w1NdjPS4dGe1REDecWETr6dxDrMUeor5vg2",
  "key9": "3PR8gxoMoPU8KwRar7bjtiYX79ASukK2Gt7B6h7tBLJypmK64FxegeRGE2XurycBxJYsd5HsGVHmv1vNUpSqgckj",
  "key10": "5tohEY1Ez7UymodwMoAKfbCRYBMXQzTYiTAyZNnZsWQSKtfuiTMAqzGc2PUwxQZEiqDJFNvGoi6TB9XeWZzZUELs",
  "key11": "5dg5GynxcN3iizGYhBjyfMA1U9gEnwpUVFbNghyh3XfRo15NnkfE1uvCRRjHhs5jGATyyTCevEeS4wg9WfebDKNL",
  "key12": "5fiTnzcic6751Bn9pYPZsZHcs14NPA1pEXT2YVZ8RwXoF91muN2ZBdVBmfQ5SZPSRVaRgLTK9hi8p4aYvVa3MRMb",
  "key13": "2QqsugGhLpva3rV3JxD23uES9Xih184tZMiFgUhH8WxvmWEBc6oSgoZAYGSqq2WYqAXzRLEmALaMuBEEeDpBUQF3",
  "key14": "62zeh67m6pye1KNmKRC41fdPUjgDeJ1NkL48n79KWaKyJ7sWSB945pCy5u14JeQBzk7AEQHt42ZEjYGJow1z26c",
  "key15": "5SL2UeFum38zPqdpPZRwhTSD649QNM1RaRvM2S2XnYg24etdyM5GGXD9NQuD9XqqLbYJCzxKdKeKiKqDZjCriPHz",
  "key16": "4CvVLGfsHJJitZm2gtNaVHntKdNQbPet9q38eHoqLGxRVxVLmLg3Dh5mnULmz55fQAWNHsbRA7GwmVqmpqbdWLzW",
  "key17": "56GtNSJSk4T7uGT5rrSjMKsxcRUc9Vk7oMUw54siiktzBRJCQUpF8qgku7ipQa7M83zafcZW5x2dMDr31LQkkCkq",
  "key18": "26thHmHbTgpUNcgecKhU2ey9XS4ajNY1EMJdarVn514hR9KPMKXT1VoTRdntbxe5XzNqjV8zqczVokHpsWNiGMD5",
  "key19": "4bvF7xcQqESgjx3LthWz2BSvqD8mdzZUWkgZapQaFUcQ4uSuMMPPJv2Lu1hEMMkzfLK5AG8Rgar4i5abQ8XwzznZ",
  "key20": "9BLHjPHLFPyujN6EghujQrqJoJkx52hay1iyuBEHFhBunstbWK6w9y1TF5zhnpHLL77QRN53yPttKQ3qAA9Nyx9",
  "key21": "5eZRzwpZj58fRn6UyPBYScrq5vmAsFtLP2waskHP9w4LHtksvMD66BRfyV9PmhuAMY5vvuP8fSijjDTxjLFJEfkn",
  "key22": "5JCZr3SA89yer7Rnw2CMhBNXGot5rNNaMMXL4ZHVTVG57nS8fKWw2ymSYMWZaRZzqDzqEmMraAiXN4ncsKCDDNgx",
  "key23": "BTTVMzg7Jcj1nJd3YV35BGzjdq3WtW6tJ5gPCHYayXmRKAJWWA1CLm4YmoZUqRhgvNQrDkEGq2Nnn5Y44w1J5LD",
  "key24": "8SHJDeLEesxG1pFCrDUJNkniMrADq2CMySiZv7jdQewCYSVxEHeMSXBU1bjJ1NgSg9Uup7tBJNuAZGwuAsKFdu7",
  "key25": "574Pu3E497VBoFrETC4GtcYWnXTfx75h3psm7PTteeY73exvdpAMrwYCL5dwbz8CBKkD9MkgwahuHdj5rfuhFTk3",
  "key26": "jfbXY75F4Y41UqLdh9vMg27MECZMddHa8db2vQztgJMvqPcy6MufzFhLLbAK2uc63LW1gzNDLeynZcDc2Yp5Kky",
  "key27": "24ckkQS9ynufvPMYCh3tPmFKMcbY5oAUqSTcH9RiX6sy1QHtKRWFPLDgtCta2MYATkfwD3cEudGebgfXXe7ZnGfm",
  "key28": "yjjGQxcMFT9ikEpKEwEymJ6558FSr7mEBJcvsRkoafVcPpm1fa7Y9f3KHHTs12tdevh7F9BYSPZjvAq1WyDDjLF",
  "key29": "3Hn8LRgFHeKDxvcNWy8rBoE55x3VYb4L5espqMEyczXM3rragEhZLsiwWbbgwB6SGXGH1RJLAtcRevLQsXLXqqoy",
  "key30": "vfit6BL3akzN5KaiqdibhwXhMvMDjdzLabgSvviwNvVEkqD6xJsijBBJrSc3UAWsBvbLsSim9cpziVbMmC8AybA",
  "key31": "i6Yca1SLqToHpUSVMepe3JWGGM77bUwkvaZg7VJRSRjdNdkVt9YUYdE5kHv19a5AajUBV4HKTukQvcNe5fbZV78",
  "key32": "517Lo2jFeqn7rfsMHnUaryusuMLpsPcVHY9Nn8WCexDZsWcRdxTVEtGf1yesjgoJhyX8ASRRqyAzmtVFiMCX8mRY",
  "key33": "RHZ6kNU1GWnGU6B1NKZp7FpEwQAyQWJPTCwUGQzKW7LNmJtcXhUcVuX73pAPPmZQL54EmcAxcwDcxtNe5pE2a3g",
  "key34": "4DsdBnXmTLQpkzaVvB3gKQnpXCd3fVJrmxZMrEGDAQpQMdFCeiPX8DUPdd6N3urpyjbXdb6BDLQ1fDyv9jaot1Ys",
  "key35": "4yhkTHNA93sieptZueXD1gytjBVGRCGbMDHCVZwQJai3fsLPAkt7G3tzpxjh68w1Uyfqz1VK5mcAKfU1ySvAK1F",
  "key36": "4NqKmQxpMTfAnTjheGpwfAYP1e3cGj2uKjFhwQGyWFKNSCEu5qu2E7KpCa5szUHb1MSE5PxfE9xtiSVAgw7qTLHY",
  "key37": "21HjKbVpq7bwHcKC1hUZhYDsYh2ssKD2jfVM9nkA6Sr85ZcaKrthVC9sPBvew6vAjndhxjQJxwWNPZ1f3NzHV8CG",
  "key38": "5URpEzwdFSDbSC41MEMwdYVrqDABsr25bAT5YTF4HCQbELBG5vSXK6ZyduoMv2sJxUTmDFN7GUXfidqvrxMGXdZ3",
  "key39": "HAjPiuxPbERS4xnvnaUuioAnXbe9BHq1mg4kTHd5MhZe7ND6R68zq8UqSjo7gv2zoJhqTtn2Ff52fUnyyiyWK12",
  "key40": "NQAKSbogJDgj2eqtamYb6tVEMQFK9JdazKLknd1inB61gzkGBCcNrMgXmwx3XLKZKWX78VSboZpZRYey3Bztb2Q",
  "key41": "4PsN9xnXAUSmFXdpt6XfkYYGoYR1SNkqXJZVNJvGDqPZyY3bnYoxnNjLMrpxniTAt6EBJBab5RmHQZXiPwNCHuQN",
  "key42": "3joAmxb4dJdpAgP6Cp5DUDiTguwy2eysZkNiajnSzz1n9sqjCFtCdNDixTosRFQb16sziLfbxwYgttnfEMBBPzcs",
  "key43": "2vB7Diw62QTY5QMHgcFDKNgq5hp9tQJnVtyBwFvEk9b5VdbuXPnE1PHhdUNCm7ZxSg5qb99Yfw8eAhrtWKA86WnP",
  "key44": "hK3uK5YR4WJ65yY3bK6vA4GFrvtWGiagnvrGoURdb5F6y8UbWnfAtezfpuojCUSwskGQyg2oJs79mPNvo9J3aqq",
  "key45": "5JHLQmypX1GfVZt47rEtaB9a5bAjGCpMvVYRo52Ms1DfwvYxS7kr8ePhBZcXBTz5tZPqEPKR4wJSFVtbkN2eNB7q",
  "key46": "45ZCTfvq2dcPWRzrkd3hZrfYhWfgyYrNG7aLAb8U8j3VvTT2mVsrXVx5UmRigxvtqkvX7JQEZNdnFRbZMGESU1xE",
  "key47": "3Tqbsg1NrB1hSQonDkQzARLnEELi31MJGcJ1HjCkyekrE7b2S8vU3p266qJdKpAGj9PKp6mhPWhh6YrEAM9vLKgn",
  "key48": "2gaG2KLkHsxUT68X7MickmYcufmRhzAFRLvsCVTkNB8fwNHAZx1z1FCyTg24CtvCucyrRbhG7KeBdTbVjjRC2fAY",
  "key49": "44b3ChHfvJLou4AZGEWmq6veBMHPvpVZVXP7juTbkWafqa2DiEPARxM3TZw44FvXcEXwNMkz4CadPtA6EdCKdCk8"
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
