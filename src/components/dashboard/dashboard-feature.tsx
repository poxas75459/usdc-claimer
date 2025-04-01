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
    "371REfRtEySnqir2SwwfPzoPXrHuw4E1wME6p1PuAFFW7rAi5KsziXpBqb4cPqnZrb7CWPLz8VzvZCmQZq8EBBRh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BVyE1u8J25fJ1rMXGb7jKT5B8y1ZnoLTmyNZtYXYBTiJeirjcTAn7FJagSLRbyMmR9nUvAAMKbLVMVrCrWMC5Wh",
  "key1": "2eb7s8441L2H4RxXEuQEzoyf5PgaE4REwDMuHpPGJeB3JsUhV7ySEsaZdUsVcDAQRKhZByCGuyF6VauYX8JyCxN7",
  "key2": "5MPLJMXGL6ND33tThJwz7HEJPXkGFfZmAdpKnBwdkjP8EuxNZosr5LVbrWw46d657LknjGMABridxMPizNN47j5B",
  "key3": "4uEQaY1uTBcyCnJv4c2SPSNdWPwxLqbYsTHScs9FFiy9QwUnsL7qBiH9iiP49tqcaSWm6rGAjrjCSQ7FXHNGy7zi",
  "key4": "3fBHYr3X9grvrF2afwJGZyGqm1H3PEXQ5jjnceP7dYPQJUW4fYEcbTYuemyjzf7mEsc7DQv15zaBJULxAu3KEqtS",
  "key5": "5Aw4mgg87MyJuW4bjhijUAkaFzTN3w8Hm4hvwhBiyWkUN9baueTjVdy1C9BfWPSCMCf3HSTBDrhd9UtnjrrC2KhW",
  "key6": "4H6D77cx1Q64nCKXwmdH7Zb3LnpiXn5FvSaFxPMgqF5MggTwb4prpGvDfbUCz5ezyELLpYYzZTR715g4XYDAn7ca",
  "key7": "4Jo7RY6JRjMznhfB4mWguBB9B9zLpgTpjnZy6HNUfDRKUbnWN6kaTDkSUpsiLN2migztX6WT89HgkjWWzSJxFbxk",
  "key8": "28CJKxKcWq113Zp9Me55gn7aELuAH5dSkWg5Us45X54gxdVJZxqTXEKzuEdRknG6DLf4Vse8CV9h46rNgqRnJRSP",
  "key9": "4A4cJYjtz7mhPbmLBjb7kth8o27LhyUZnA1oGui5wWbmC8MVvafqpd7TjMZec3k7yUcgdvC5TJmmCqt134ZVACXw",
  "key10": "4GTNF9YMxdxLmQ8dTkF6ZGjigXHim3Cpg6cPsZXPnjNDbedNAywAza6JyHEKuBqqHXpQaG4BNAmYHC4V8irCYnSw",
  "key11": "52MsEHAVcSx1F8GUhzz8b1ho2dnup2Kf4StB5o2cQLDi4ssi7xAoDfEJZLfn3MKDAy44WWisop1MCczZYa9MLY1z",
  "key12": "SBZW4AdUpW9FBszdkm1LL72MT9EwM2FCWtEWQgmMGHtjUTwQdqmYGiQSABsgHzvSDG9LGGuqZBiqxv1w8T9C3Wn",
  "key13": "5gXCjX4XHTuGUirTS69kvXjrXEYa3duEDkNVKgKnYGknyLeP9qyFhetyotEorCVsYiJiJLZZjf2cb9EAsCbpbpfV",
  "key14": "2nXhgtuysuYV6o96PnjrLYSVukdEBZASqdW9XM1MSwM2GHDNMzrNpYKLHDKNwwwbvmUo5dtPYyB1esvRsYMRE6C5",
  "key15": "5BpxFz4R8dM2ZcAKmiu3F6ZGge46xpow1RyMcH6ibkUTSmZjZ7zfG26Jpa5x24hLA9zQKR3BayFaEumbbeDb6KHd",
  "key16": "2UHyBE6Ky4pfKXg8r2pQLBAnqZkjrhks9LQgSdUWqjuyRATTjQ4k11Qxhe76wuHCTfn4o8pybf6otGu6cpDEKpNx",
  "key17": "bkMw6L64Fj9J6SU8ZPLhHABKFxnnnZzCjCBLQYtrg2kMvcn3bdXJRfehzXisnuhfPjKQ4E8m9fCpRsyuk6mmnhm",
  "key18": "5foqdYYgB66YQ7iPBqkriUsaE5tzJ3cEexcY3eC1Th2f6HJkkgNX3DsEij8dpEwckNUXhMm3TnawNpLFs62zYKbR",
  "key19": "48aF8U4HiVDxhDg6DLeguCX9XEkUgc9pLFCmB79bgBK39ZjWz3W3Mdum2tv3SvjHLydsHG9sSZ4G3jK8z2fMu61E",
  "key20": "5f2fYPwCqWnE8s8SR4hQMVd3DdDnTu6SRbu73FPQo29eAxD4hpYenPTkuuXVMdWUBxvGhBnsC341M64TPAU1jdog",
  "key21": "5NBg2NKG9pV4Zyq45am6K4JT64y98bSBkLaVLT13yxs6uM7vpVBzbzqa9VSCGDHpHFGurNxErip5eyPGA6F8wtKG",
  "key22": "WYWfYwZ7C8KrJUJMqcdz9dVGWZDveKPXYnNacRJwS83ux1pYRMxfomckdCPKqKHG8Rpk9UjWUHfXNyiY8ke7Vhi",
  "key23": "3DpaRKSkTxbUegLFXeATDK33rdyoJz1LaPUpdJod59K33XEd3Vs7Yp8XM99eYgN26MG4ZGavPqX7Hx64XJnHa2gJ",
  "key24": "wxkk5rY5uSbJ24PHZpehuPe9BE96JS2QAm443ra3wp4FHq8BHzb4iinoZhHqLm2SWEAZKkNCHXbkxtGv8hLcaen",
  "key25": "2ZBW7UMCX6RFgiFtoRsmne7JfycK4FTsadfDjgCExeZn4Htrt7BNySZDNkxx3BtAaFDsMtk8HEYiXcE2yaki7i7D",
  "key26": "3TL8emyTnfDbDBsL7tRfPUmxBVxe41azaXpBLfKhXk5H7CxTCGp3axPM3zqX2NiuxHCMsgTcLLgPdzet3tf3DVZX",
  "key27": "gz9TG48iCmh2AF5H51pMGTpyAbmaaQefyZohxQQSF69dmAgCoHNcgnzyjCb6PddLfavRViGTjB2cMBMBBsZs8Nn",
  "key28": "4dGLQ5Vd5ELPp5QBcLncQ6q83WQgkNno3RHnLybfcfzDgqxY6tLmywfQtHfUX65FQkovZtPpup4fJFBAH6b92AbQ"
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
