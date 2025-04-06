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
    "5sMZaNmYNp4Nmr4WnB5CUSfVDmLgJLeJUoEvhhKx5YThx9kCcSwKVioMYW8hPYqhEcDYj3kXvrTQ9Wvz2kz7YH4r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dMdL8D73Mc7y5mFH2HxLxBKtKx1zMNV3ET3Ggf4vdxsa37uBVQP8Q3AgnAEx96T8WhXa4BopEPMV1jS2Uyga4ci",
  "key1": "4uHykdFisgJmkSnktLXLBLH5sz9LYEqViHPUkQDuJRzCmuMmQMzrcNJxUzBfBCRJogRFgAqkuJ263s8HpoihsnAK",
  "key2": "9DAxYhzCtRTJeNEqCJHnQZYZRts7jgfWjU29kMz3sYRMn2iH3dJwqvXt4Wg7ZvR3eaqLYLcror4cesFPFsViA6W",
  "key3": "4YzJQaCS1Jwr7rsyRGYR8UHbGsvBRxkGyTtMCFTtNomVsQAudKmGsERnbCTdJCjz9nE8EXykLgNCujAzT54zePL8",
  "key4": "3242B8dMc4JAvW2Z2HFGuN8DqaDBKtqeVnTCcxxvP3FGXnsF31xec1H8tyC1fuP4jQ17prHNiRUABaVt92d8YpxM",
  "key5": "4M5kzmuE4BWF5vzCkemsDa1s7ajGQ6MLYmaXwprU59aMqzX5vcAGeYH7DS9cYGU4vHHqM53njt2LJhnN6eoHW32r",
  "key6": "23cFhjKe5VJn5Koimg26n3LfLfVSRC4PssBDjMVTG28ivxen415pVcURpvf2mxuEj6zrTmAd955NEY9hxAtAoS3b",
  "key7": "5FMk9StZHnpVBxqr3oLmDk3RrP771Aj1ptWdEMcc636XBWe31NjQerdCvS2sJyK8TnrxpbubJ5uu3KMRjypwdsvF",
  "key8": "4PYuNWatsFRwf2eFBmZhiY9ubvMBbRrzqCd7ugkoSSifF63YcDFz6c32btjSxWnU386fs7cFiKobsuExutbpjvaF",
  "key9": "2Cq5t9KtcnyWRrskJd41HijooG9spQymivk55KnejLdRzQvNRJzKveFKhDpN1qAYZKnoeEMmCxTFP7ErGYTHhz3A",
  "key10": "4nsGt3wJPAqkiAFVCtap24LKY6H6sxKS6gVLprCKA4GSr7KLsuP3twf8s5LhUKyG8bpt5nxp65TmUU6KfYbzAFjZ",
  "key11": "cHodKHe7ykeTMGQVXL3FL7VcWorSZiqPSqAGv371AU2CPSMGqZb2RekEB9qLZwzWb1KDvr632XAPGaPN2AwLJJ4",
  "key12": "3XS6K1UAavu1kAiiJG4RTVTsoyHuQPb8d7jScZv2LD6Mh4pH5eZWZfJkCzsaBVNw9ndLztfnwJ9AA6ETuPX1eu8B",
  "key13": "iLQCkR1xw6R8NaPeVLPigBdypL3amTApP3GzcMZpRF1h7K5dd8BaG5BmXbAT7J4MF6L9d84joUK3pMhdmkgGang",
  "key14": "5yUKmcWTLuauxjNE4xqyGUaj9L8s93TSucUKRRZaXboTEcTWRHwM3EGj7JfMKYRbRkre9QjiNYn67CM7GaD7GZPZ",
  "key15": "3maGyZFUb1svGkhkQaAF4ZFTwHJEqYb8eBBh4RLyzcUCT6fxLzNddymvgz2YTG48Sey9B4KngTtqiHL5C5mXMiqQ",
  "key16": "4q47DxE8dDbWrX2uDoEEA22XtRcMs7nP3DFh7T91QDjYJor1y31V6tpwVxnQogwQZ8aWsGkxGZCt27CqCQWNBXeQ",
  "key17": "59E4kQ1BtcnzJUgHAxyac9Z18rCjXCuhiDdu7nvSR7hDDY9rPm7X4VM39BR2NbYkA6jMRX1TY8DXte4BtSkyeujE",
  "key18": "iMK9hDoeC6oEfQtTPKgomadnYRR4XXXYh3e8bSniG23y73wYYKG736uF7byY5w8feuhiY3ktfy7umxdegkHzzFV",
  "key19": "hYm1rzATJx6dQzeuWkboUvzKRtZy1KA9bfXjpAwQvXBQDj9hvdjQcuWfXEu7P8emP3oDmwby9aWfC4US8QcMMUf",
  "key20": "45HbuHLLNXzw981oSgnDpXRwm6tC8N7L8irJSs9XimtGC2xVPfLeQunjt8DcSCFrfDaE6EHcLYwnPA8vkvaRkdyN",
  "key21": "Ep5eTj8PbsPXdnmS5gTb5EfZdocBJS1WDpZ7t1bjfLqPL5JKbSpAY9U18DppFAULkprqSMtgLqp1VZNAhywcVm3",
  "key22": "2KaJAdGWoPDAkveCmLC9EMX6MNgJ79wh3Da1ZEtHcAsZd9LqgVA5X4KhyyAEjrZ9xfpveeewZWqFrnJ1vtcvZbUx",
  "key23": "2bhBCFyGfQYg5uikfPxYr3tsvvjwQeFy4eBWZW1EvAkf2BwadejesfdX8ERXDLFpbeMQALrKGTifaUnWzGmMvoek",
  "key24": "55T3Ca5Kjvy9CzkdUGhiyytrMm6fb8Fzbbm8YhSzv5VkRG6p82aQsQ2kxn96ENq4SZCvQAHdgQ5iZHDLeR2BJLiw",
  "key25": "5NhsX19TsCFQF93ZUaDASd84XJr3U1eVnJrkBNQurrT3tCo4ZoyZFWeeAqzH2XVJCnGzR8rigcwkcpJdimDyqz6V",
  "key26": "3Ctfq6iAvYwswam9KvKHNK2YKGkBjkdNHZqC8pN2Cr6gs43mztMXbfiABBjtvFBs23j6gLezzu9HsKErBSQ17xZC",
  "key27": "QgxhR8nQTfuBsuM8p8iz6YpvQBkm3PuFrX5zHavtreBj1V9VBzjBrzcpBJqUmssveCtxJSWm8b6VbfWPEn9r5hK",
  "key28": "5bqjcBEXXvFr6n1WiHv4mqM1bAiEDXbyhKKYx6kJ3xZwTtumNzCAUsZvdc5zbZL3iqh9znxkBdba3dvevpa6QKKk",
  "key29": "4iFtHShqjczP3GRWrUF8d2eSx1ypzBY3QGuo2cLdRQYeB8ZmxeT1X3xCHx3RoxQAu4J15w86mvcdWSpw7C4xptfq",
  "key30": "65PnKAGBKWVrzjcvtZu6nwR5tKMB4WGfpFwoujEAxdnTanM2xCY91pn4hW4FmRkUb5nyFtrqVrqunSkBPvQs1ztL",
  "key31": "2AJkKc6vVgnvr1SwfEV7VT17k1KbtMeTkzSoBdGEaAXxHeNyATMbHXeGR3Q8pwoFrgwexNNqrEX8UhH6EAQxskvK",
  "key32": "5U5yZ6KdAZwEfrB4UgCmNx5VCDq1HbhwfDTGhShCPRCd2fHoB5wQMQePcFYfdfR6TDCCPTES3Huk4NaTzP4HDm3Z",
  "key33": "56rusdA7Ef9dru9w4PoEmdhqPZ2a2UuTt61BKi8xsmVMsFoEwAkt86ybeAmdwoHT4rReBrEm74zhW1j5XngwdPqi",
  "key34": "2oWMqTgJqzBFZqhubnuXDUHbs94ehvfjVY9iPj3k9Se33iLHVw7JfjSCHEu85W27PBFZzpj9fiSJa9yPTdUJdqrC",
  "key35": "PCqEirfwsYhES2pvrGHzUNwgc5Php7HEsWRGuSmUMDXsRinP8wAQSKCStvuDy7XPVjidujWh8oVDxeXNgu3nswK"
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
