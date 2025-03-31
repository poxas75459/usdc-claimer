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
    "EEQcAuWkuBAECpvLpiy83y2mS9wc5puv2MjhUKMTGNXJFLakAxwSbgeN7ZoQnAJFhxsLfbGXCBhNpjQ9GX7atqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sEFRhFs4sTf3L8a6fFzzbRtaTBSoHbtJR8u6zt5BNvYG1ogRH6B2SvZHGZT8C3pWbfrEBkvd7T9NXwUbdSsDdLA",
  "key1": "QmvCdY6pYGpk6y1rADHgmxzGmw5jkQJqV8Cz7D2kRioBBjzT8qhUJMSzTmFRgjGQVEpooB9fGeSY4u6fUW8i7bA",
  "key2": "4XFjcV4VzkeAgHe8Ue737MgiQJAha43RremmSJvuNkZHWzV7wDtDnmW7H3v5P3cmcZmEejdhUNDDSJ1N7SZ1Tu48",
  "key3": "Knaj3LcV37y44jSTsLBPg3f2o6jmk8R6UdkyCP6XxmTEjQNAe4jsbfJz9LGk9BoeaVSKkbiih3y7XayHpK9k4oq",
  "key4": "5jxGz24T8FQUtXqn5FHtjU1JWoAm9kuekGC76t5rgKbNrSbZuRGvkHySBLem8jXGekXXVnWbCbKRCSThuRQSv2A2",
  "key5": "ibVsctqDdbTzHxvnfGTfMzEUHBu6WpZTeetCcqqi9XkR6BdnBY45YFHBqFUaDjpuytCfxnKepx8x7rDiGe9VG5n",
  "key6": "2BZvcDCFArG2iueUjU74svUq8BcGZaHCa75Pni9mw4ZEjTnUdD5g7M4rQVCCQf93oLWTeNxcYkmzyAZCBDXZMoUY",
  "key7": "52Qg5caUrq9GZn5uRzX7qt7rccUSC6Je3frgkPr5SF9LtkZi6uGQ3Dr1j9rdnw9jdsKynLp3dcP4kRjXua9qo89J",
  "key8": "4YfS65BwVnHGvjq1hU95ALsJxsbUmeNEjr7hhavVpdGbVQrCiEHPNRgAhK6tJCagDVzpmCFWkNRxm1E5dy8RLL3E",
  "key9": "AZuvczLheQnpi8r7vzbZSxwqq61TfVoV93ridiJ6fwyx9zCyi7LctnScDjGagq8rbewZMbb5K14g6gs8ttSL1C7",
  "key10": "xNhdXS9Mip8Xn62VU3fHNwdaRVtMSm9bWYbi6GMF5AviSA9p6yMcxpuwLV5JMi93tdyzUXEfwuqF8DAsU1fapq9",
  "key11": "41p66eeskmgiFeZKfGsZtCTVgN78DjFNFehrh5thVP7t4ejptTCgemgg3nhDMC3mnHydKC21YwESa2khnVrqrbRp",
  "key12": "J6fqoHPJXpoi5ybiQyEiitnnqUMunwohHzZu7eiqEEEPuX2KwRpFdiDPLyoGehFq7E9kiYk5zPUbdD9X2Z3anjE",
  "key13": "NSqMRSQjavQ87hH2S91yHoTFKFaoBFjc2w5LNrVfAC6Ei2dzRYbgviMDpD2hZy7ENr56pa5qYMY8Lmqb15Rf5ia",
  "key14": "59xyXjFPMMKgSGvrKXXqguxxE7U9Ve7aGJv2k7W5WcQ4YeB6LyVdKUSJaidKxxgASgzKq6JwRXC7ucgXCTuAKBfe",
  "key15": "43k9zkZRqaVjCvdHgxqjqVjG6D6Zk5XG3XpRvhd9aVY3n28hQRPSxADKyHb3C5KYJmN4UQDL6rfasr8Sqx9Uqhh",
  "key16": "4vxTxboBSt58fTXZPkK436genp8NFCNA5JiRY4zXuBRDt2zHFwFBc2aMkYmgtohwkFkVEi7w99aHPCTTmWGswNmv",
  "key17": "5MaX7eqyPw2bwX3K1g24i6hjmnxypTVK9XDpcxDfTpRbrbaHa2YW9muKMXKUcjcaoQkJwS9zkrCt3WcZifDE5xXy",
  "key18": "5CLV6S5MA3paGKqkeSYmeU8bMChaodu9EqMgJAwj99HMT8cmL9sooqoBLtxuVrh9XSsDnTFF5bDQvemtU3JFvJUX",
  "key19": "3RmCiNtUQEkr6t4kgqvV3LfNWBcALdu41YMpGYJ855DRnSXhVxbQFAVR9e4X62WdaKdKDJNcdygFnSuHb4ozJQcT",
  "key20": "62pjDauVj4JfJ6im5Ru6GLhWToHrYLuN2tDx7Z9hntu9W9WwQw874E54xeYUboCubjF5VLiDpENWJLQGd2VJnkoA",
  "key21": "poec4Zx5sDc3RAgnGaHvTJAPQWjfcPTvoiFw2ov8dTkWa5MToEyuqCqV23PWnZXsC86XHQmYa7LSKLuivuaLZZC",
  "key22": "3HErT3GsQhVqCT5Si3Yjt13kz5zuHdE4kPwneWkXwPg7pqubdHsaR7dYZMEguGurMwijahfcuyKtk9GRVYdpn3xm",
  "key23": "erHrWZPsVwdjzSUninwDpCTuGquJKnEbgwrYL6Fk2Udth1rqxCejpHVLXJ6m2SuCgVbiSaVJp4iWG5QQxMDW6pT",
  "key24": "Nco3D61sYkoE7EHZdhCNbsFmwVksixQ4Tm5VrkTeWsU3db1zjJLcvefNp7BafCDmuQ9ShyEF9cjqbTCRNXbmhgK",
  "key25": "3X64mLTruLgzAbr8GAoR7UAt243c2tzkvcEZQdsTeaniGxq1JDpQ7q8pWMXtmuZivkBSyRtfUPe51ZTq1LkhGT95",
  "key26": "gHZBbBYNSftoV2AzDaXjUDaLhVHfyJcMHP2hwKb652REgj2iBmRbvopzsWfyNowsPL725gimY6tDt2MHEdtHues",
  "key27": "557zNd5gB8CnMbC4rqPYcibkKWWCqUn6NK32SRmTVk154rMkb5MNVYkVYFpNabni63rjoEMSoF1vyMWC6Zwru9sC",
  "key28": "4GkJeZy7Jo43NuJ7iqHXCFMSNDEAhqNTZ3EdzT2PqD5nJ2vLQoD5iB81jKKHC2eAXsMpvmEu9PkLdR4K9synVy19",
  "key29": "2KSht5mBUGdo5XBBm3hV7whrzgnRYZGwFF8gEjH8xDZ6PB654ioA5HopWmguwsMgUP6H1J4P9PXpJ8RwHGxKwnL8",
  "key30": "2FEvdQftRb9FiLVmShASYyAK6tAq5KjLHoGqtiKYxS3qMWeiw4CjaENjzZWYhLwV6YGzV3K9Gt9foBT5RBxjfK3R",
  "key31": "tE4FGVLmVT3Kx7RVgJK5hH5iLJZ7zqNeVaokfvXPG8TmZtQ3Z6yMU7YSopgL4UsSVJ6UayK3FGwyYECVdcUTNsK",
  "key32": "5s5X5BqtsehLBuqbXzyqLSSU7dKwg1dbe8fyWjYvPkNUhDWjkh8aT38yKUjzf3yTRGGgKH18E9e7gkF82Cudeq8C",
  "key33": "5rM646eDgPfrNYN148epzUWHe5bCkHp3egp1rSFu3SnQAYJFwBsjAXgq5iVxf1wj37jBQikELCU5gNkzRrsXf7Uf",
  "key34": "oQAQHKBSY75h2LLhKW2XEPiePP3wQfBSKXCaT3u1inJhQYZkDBQ7C5GK4ETdiozRsC3NMFemWDrPYE1zdAgVHU5"
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
