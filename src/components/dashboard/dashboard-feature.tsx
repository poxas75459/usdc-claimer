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
    "2PBVnP6CMTqJZ54B2EzwrDBm8qsmqUX7338JuHhLZiDtsumuGHTkMgLFaHsgcEe82i8zXpERh1voE27EHUh4STmd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46ctiJ76fzYimTuWwrDFNMzVH6qkPE9dwHenzCHJ8viFxF7AnAZTuFVe81DceYyHCDh9sNNskwD53AxBgq3nuFmB",
  "key1": "2tobhL17PpLJD2oQQDcQGA1eEYxPoyD3yQmg9euHzFy15ynjsibkkeXC4Ns6u2c2cuAi8jXDt34U6UdVqe7RELk1",
  "key2": "65QBtuwhKXdi3tsifxjRZVA3iRp5YkpCrYxSe6226wSkQjv3mQTToyYDcqQMrqwrYA2X7ia91zXYRAF9SDGrPAuc",
  "key3": "34tzgQU83NQb7ryqpEpeoTAE6TWD4sjzpPRe1XCHDCGX9dGPEHxBe5hP7GG8iq7Lhx2rPm1XxyMW3bSpBgJqbbTh",
  "key4": "c2f1aCefxD87oNKhMvjQ8vpuHeQMGmteco5me2Y1rq3Qtg7RuqkidpRjTDnAtGhRnfLNqPKUZ8kaid8YvVxzFDm",
  "key5": "2gmEo13SJLubds7sAMZ2fDRqNDK1Ysu9v1zK7HwJwQXNtnvTUNEowPBi7eWRndGB9tabPZs9oVh9H3vdqwP8iYBM",
  "key6": "mBguzW3upQSMW7fotbH5H7L3FWPAatx7tHmqDnciegdfGDB7z1Qkr9z4iCPgt3pcoaLF3kwsv3eGXLh2r3tRgyQ",
  "key7": "52Big7ctVDgA8W1ThBLgSQk6BqEZPnTk3koSkxyFECDhAGBgpBtrKVuBwabRADAx2CMfQavztbQrW1e6tcguAki8",
  "key8": "2Vjv4pvsssnc3Uj4Ns5zwEPa6oEsXr8Q35wKhFVSAUZjhbufu5s4qPS4gi3rqvRBWDaRJu8pfVZ8yCFX4YzsfPTo",
  "key9": "3hZYXdtycDp6D6xe3G6XVEhdvHh41rNQFBRJj5TEv5zj7tUvKuMj8ZmAMC8wRg4UdzBt1CJ7ZfmtEHbQrnoDbczQ",
  "key10": "3FozR9RcAgjY2dkA1hh1hmSHD72HUGmgR64ZhuGnweFeuB7eZEug6x5fygN4E5yDo53hV7dVkJNopZa1VC3cu7fc",
  "key11": "yY2Ujj1dCg6tPtsUpsVytxrXcggdMGvsuXtxY8AjmcEseuJvBjj3aXaUFMF1C5xwAweeZozsbj7S29j8JJPQmfv",
  "key12": "2gaQcdKhJUeSjxtREGG51rBbciQJjAELkUxy3jfVXTEVDUhgqQtb5KSb9HVue6Eid4LZmdrGtrEs5UZQoCMrK5VH",
  "key13": "5GbMKmQxvogVAF5tUd69E8TnLe8dsfzm33ktCYPAPyakTP5DTyYpauGYhC6pFjqP8eHSAydGDjPxqTUyLTH9tFRR",
  "key14": "5YQXvkxyZuPNPaV6A4sJTVUTUE9uLp8FBHXUqL58EkgXJWNk8tpid8YobYTzEJ3chw8oD2SF3qGqVh5BCH1t93Gx",
  "key15": "4JVSxPutWoLU5zPTDgApGsH51yiyyTET8yGLxzmZiKxaUiwcthcEZXUFYrDWeW4ZH9CxF9gAivb8hDb4gwWVyQuN",
  "key16": "5HhuuKuaZaokTsirThWzfTtkXSY5nA3fd2v8yUGNUUrp5YR4EqMMEoVkYAF1LmKjXjjH8QJmorkwCMBwkRowWwcq",
  "key17": "KQYN7JR5HPQjMoyfzAbQiBaFWBjKNYUSqnuadHcgmCkoHkUiNiNDNYaC94aGcWjZuE7SizLysxRijvQBTKPWH4W",
  "key18": "466HuuUMF4vcRNvnDgw2de1QTSQe53gE1NrHua7KJbuJfQKodghBCG3yscXDvnScf7A2Po9uZkPk1ywpgcQtcoo3",
  "key19": "1yBf2zzAPVcm7eWxZ3it1fkDet3rbAmaeVKP3Vc7YcaoBoXv4fMLHVG2pwFZ86hSRHTFvCJ9aDE1oGo16VbjDez",
  "key20": "37UbV6snSyoesiwwrRP4uoqKTJc8weH2DqVDEWRg7RSQJNMPuuvdJBEcNv6bziC2H8eFKfyKh9bB5QyzAukF7451",
  "key21": "3i1zi4wLCxVafK8qLsdR3b8t5GYqyHg7wR3kHWsR5WZJQGRH6ACugqgrMNoJQWuQecDQZbcJXd1jtwmb8wDLV8Z3",
  "key22": "3gcxiB1F4bV2uK4JiZNc2jCzPe1bdNNTMx2pyRsiiqcyztYFqkk2KsgSQaXQth5WCkL9VK4juN8GFskW63SU5pQg",
  "key23": "645sjby7FAjAwTqaXFa4Q8y2ii7w25hALHiosDhCioKyZrNcv1iysdKn7SzGEzJectitYzgD5cjX4GWqH1pd9Lph",
  "key24": "5mm3RhVWpfszR1jVrBxRNKwTkmHPENAiW1caYRQ9xP731wgbpQj7YtBoUNqWycucxBMzyNYeLvGomsezpMGYH6v2",
  "key25": "pem2o8qX8W33NrMxfWKgHfqZSiHyvp6epvtP3Eq7syhaSQaDbXx4Xh3MMHdw68HYzqMMmUYrYaAVy7FwPaaJDEu",
  "key26": "2WM6cZJzUfj8VETv8ZVFPK5nqa3Vnc34pPcNLGSogenGx4dMTtraJ43JVL3ro9taupp5uooGDBfbFdgM2XtjBmU1"
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
