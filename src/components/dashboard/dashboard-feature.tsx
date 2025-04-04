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
    "4RohsFMZC7GqTSvfz6T7o4nHG1S9JcYvu4RBDQqhaobqvErkhZVHMxUSr2irwsMmbtmenEAXipu6QiUCBEZ38kbR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P2nrxECyM8ydV8um4smvF1KSRGxDNJtVwD9QqN6r8C8sPbhRzMCgK85SoqbGPfLW5kTKKoVkjABm8mJZMHrsYhx",
  "key1": "24uRknWQLfQmh9UKSuw2XoR3gybwcanxJyFqAXBSNvjdhzwN5MdMFCXMfiXgcrTDD3jmzUzpQmLw9TKEUu41658R",
  "key2": "2BL6LV19wY17w6DKGCcZaSXdLmLBXpBie77ziQLASWDwMzuGq5p9iemtszhQYm7ceJqovnpWGqDfDHkvjCXqK9pJ",
  "key3": "9bHAxmC5Kt5A7ZrbubqbtZJJMVVdQeobhXvxybDhnygChPGm74zRV1gpx1UkhrzxPZhgs1nZb7ak2tTVZSyEvfs",
  "key4": "WX9Ttym3bf1iuugmW4gxigYSLLLbUBaZpgJG2YK5NfoPkpSUSZTkM3XKQczDqUhcb7Nhf7gFkZNE7JdmgutcGY2",
  "key5": "4deGVaSSPEVjX8eZeRP4muETNNTbySdsBmEYYT15hXhXmchMENm4uxahb1cFyANFQ91awuQLiByKwj4hKWQhw8Zp",
  "key6": "5LWVviVNvE7xaZdJnDWMk9KVbLxEurQuPcFpg5HzHM1GECnBwhTz8KC87GMCC1HRKW7KT7Msq7JefoVA5bRZosqZ",
  "key7": "dF1r55cYnHpNeGevRrkoGMmwgvxCzpKqs7fWS6bTatnvvoVgwH8UaVB1txgyRiiqesscit9y3pF61znxBgKWJB7",
  "key8": "4ocMRrq9vKgR5GJkPpAiku86c5TpWtzoyw9L1X2Gp98CdVABM75Dxcp7xrqQvPCnpdhdmM1V9iiBANTZpQY5bjXU",
  "key9": "3ZN6CrMzVz2Sxq15Ysqq3DswoASSfwGhBtC9Hwc1qi7MTHq4CeQNP45SknKSdknVRFGfCBFZtCuB7Kd3CFajvDQ5",
  "key10": "4LUwvVo5122mYrsM3uFXRiEuqgffRv6WVWJoyMpsyQbdwCDTqFwW92PATPDiGEXKnD5aEFnTrViamLUg7wVxoSS3",
  "key11": "2eQsnYofqFAWARcMzTewm7ZJoreshTgkqUuZJU5yqEYm93JE5RGexUHuom8Us2AF54tENUVTXaAfCNywnNkQSqrg",
  "key12": "4JqBfTyUwPpxth9EsJuEx8JtfVrsN6EGgC2BeBpUctQhuyPmTk8GVQXuLu9pF2DHrZNPGPKYSatdHuFeHSfSWzxu",
  "key13": "5rjJXd9hqPu1E7H9d3jsUrbdeq21uDZsxQuJPmnUQaGGs6GDhwMAQkQzcqTxPg6rua6JjaHxGbf14QiE6Am3TFTy",
  "key14": "61j4n3N9fLhb8muJt5MRSJj7wwpQGNkriFTWRwxuWW2C9f5hbErGNAmQsHLroct1pVRbLwo5QjTL7K4QhMYH6hXK",
  "key15": "3yYMatpyCzgz6TPG2Kru5yexqGws8tppA7C5JQ14fCd1ckGn1LtbDdBZSc1cwiai3o5hgxTVDCcfLsMJL1kq9oc8",
  "key16": "21YxuBxoA3n45tw2jgUnQhyoJY5VYP1AGMromNcKFgEwymBKAnhAnmqmunaBoAddoscZnqTX5tbLjXRnDhFtWcMt",
  "key17": "pSYhEVHH3vmMBjoH28LPCV8SCpjaYn5WCBer8xyEB2ZhFz5hezAk9tiJxwRrnB3ssum6F5N4F2V2EnLT3YEc59u",
  "key18": "5j6vAbHcnn9VFq8ExZkw3fhxXLkHZRE7L1c8ghf3WTPhMUEkpVbtWdd6jjPcMes7ZPfCiEqRdxZBj8X85jVkrEAH",
  "key19": "5axjo2nJx9q6CoJwgxEKBj9aF919MY6TZUM7EGBAeot1iuR77sPySPsy47o4sqMEFGtp6cP7iznH7sUH1W4rvgr3",
  "key20": "4YtxQqjsaLQcHngJeLLvS7VgFrQgaNMP98jWNHbPdzv7pYHccGYtm7PZ6e41W3TsK9akkM5kAaXKBzXHGVW6WdmL",
  "key21": "57daDFZHvM3bYah2LpFBj36zAH95GTDBVGq3ExL9WmHEE5UNDRi27A5XRfn6jkBqF5M2nRFGxrJsmiDCmcGmzEXM",
  "key22": "fjFS3q9trVBVCDvssRHb9HTicsp43EoxEuJNgvje3ZDgJogvGiQK2k32LXoWXGFsJEfAouK255ikQCwrpQ5zbYJ",
  "key23": "31RxqCSofTJMhw446oHNMNjae6TCVeDBC7gtQWaga8xMAKnVsSnnShoZDQRMh6uBXmbJB5CJTHi5A2AX9Sw76fJb",
  "key24": "UGZCPxUf1Nmvfjgh6maN7Roq8QLM26Su5z6zXr3JoPppheFwcqcCNZTcDMWzrzzYvC7K9C3m3u6j5bfKrQgGvMn",
  "key25": "5AtNSG2po15rgW9qyGW16UGQqxYMwUJGescSgg7TjJAiU6tFfp69mGifZGJniYEFFPzcjqqvNQYoxBacga9yXH81"
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
