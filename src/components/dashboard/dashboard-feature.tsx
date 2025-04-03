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
    "2pzQzS6k2dYtChnLrFDwYPeGjhstZdPB6WHUTN5A24TwYN48iDxZaPytQwf3jJn1cgm378S4ZEU9L63p72j33XBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UgoMeZ9VXrahXvJAWcz4z1FErvM5887dNXx2hZPWEc2jEmyQjnX1pevdCeijm6ZMKaG7TMNdWoUBr6HRJ1zr7gy",
  "key1": "5sCBZqqCWn5Kj6753gDL9o2LioeWLPkm9ojPfesrU5tMNQ7yZC8Rsf6ioysyf8q5Un6kQeH1g1kBk2ktYBVndMsc",
  "key2": "2wdSJdnNih2UhDDUEMzQTSKtVuEg4QkGiUMJMyqqNgrHu5ZF9e4YrrpfGwfdseqExFhWPYzEQZqcRZetDzBYTrSS",
  "key3": "UGUpSQDWStuvJdE7jiDaE17XayXxrbhHTgWZ8rKqVsKBn4w9xaMJBEKHqUzocQHJPUMJuJvJYA8UaapatAczzKZ",
  "key4": "2BCJWXsnCaSoYQwKpTzGXcD3sR3VvivnGuWRfanUuEhYVL7HMdquGuN3ixxxhgUVWa6Qaa3SogvUdVHisUdMfs7N",
  "key5": "2QEo9rDwLRqhcJ8rSwn99emoJpbTT4YtiCw6uDrpwRgggH64wNzLH38pnufTnwQ7bEUvGV3MyEeJcYJgzKUBTmPc",
  "key6": "5ZLuxaeUzcJCLsdEa83LTEkicbPeWhFL2GWm7PUwH8SYnJQuFbGh5NPZ3mKjdH8UDTk7gQSgfZ8Wfr6G9ajP7Z3n",
  "key7": "2gjtibGosbhSSpPAEaHALzpeSMxw9pKNMaF4Y4bA3gqwAKkGtake1tsDVFDiCang49Z1XGuHMmoc9VQcen1NUVfA",
  "key8": "utTRhPJGtPEtb5syLntmDugGMwrzTJayAnKdQpXRtaK2jmZGSJxx1XFeFxDGKjek9xtE5v11kCpcjcXCHyjPeWT",
  "key9": "sZfHcgPReptUCrTAQWZJNrEcXQDPb58EFdaqwUEqiRueqSXtWmAmZo9BFLXfaqavUSRuJ4aEoKPx3u6zsHB17wo",
  "key10": "3UMdSccobMrZbiDxV1FvSbQXZNUGLVg9FYKfqoqyVigUw4qVQSCtMPX245oVH7cgFP4YyJs4CCta3Phn2gMkb5WU",
  "key11": "3Quv1wqhqo5mcBGwnxE7NTEWpRMi8QfL5P9MxFDGBQY4sjFVf7j6xQBsLwJCzzFfGn2X373g5ZUZxNZaYd25Bk4k",
  "key12": "3r4v8gqHnHgC2xPxS2MFj513MpiDQjLjAxqnW9TQA6N58Cz7LeYJS1VyRLmkHgLxDRpcuYCLdDbkiqxDFoj5HNMb",
  "key13": "2RqLZcsBWTvHboGHSd9DmyyKZiHEbcEjRCcBwAvaB9b7yT6avdx9CUDbf9zjsx9QEsyJ8r3KQumqGxNxb9LdfDeW",
  "key14": "5naN47cRq1CobVjjRbExTekqUB3n1upiJR3UCqnwUTdRrfWkCjwoiro2hkduHNXQ5Vp1yYSGVgEi3h9CAGaMfhHU",
  "key15": "FgmTa6ZcWdBkgDTn7ADGx21WGjbxfPPqVCaQhW9SmYunyeFLE9kJe9PKmyX9ftrvRozWdA86HupTYGCcQDxG9fQ",
  "key16": "2VvKM6e2b8WYnHR12x49D4njwf5YQnbpG4sz2Jrv1Qvg1Wm8Qzv9Y1FhYGVrn111W1mMeE5UwwbH1zefJ82uKGBp",
  "key17": "3dNtnJHeynYf5xujTLeAXsNSpvMpYvbDBDbz1gebDwJDJhsQ5QSj6QwqF98kNBBrDEqKBcg2k1VdNBBog8AwQMab",
  "key18": "3hx7A6kEhod8Go6uxuBBewfmR6c4KfzuzZmcNZ9dpdSBDzBWueaF5vkWTdqouH1oMncjZHAMiJdv5XhVy9LeNtA",
  "key19": "4PkuqRZJdVz8bHFVtiX39A2hW4fXLwB2oALi79duYKG94ZctV2xKKwsgVQA1rDXm4Q1nrRRMBgfywNsG6Xedjroh",
  "key20": "3zDzjE9FLppayPmLTywzA5WPnzFmLeeHb1JsUELKSVZTVHuE2ojggorLDSjsf9AXhmF17dscPxgmCRngg4AmJmio",
  "key21": "2X1LbzpWfZp3YEStcHdbcRNXZDMo3RE1RmPP65H2NBMuxMKZEYHLDic9WmEEiWggndf9wgcaFuo3ZvDKRDigSajc",
  "key22": "2ASzbx7np5vF7Zb2i6u2zmTfLDpgqEMpNSbTC2twfE6gXkR1nrTZ3jUiYGwUb3YiZtWTqegJaaaUnd9v6U5mb72W",
  "key23": "Jt1dm5P8PvjgCyJae98qXNXfk6LWfKvYj25u8QmeHYwFYNQgGBdoiDbYan9aXuV89Uj5iatZ4g7mXL5nQErhXdf",
  "key24": "4j2MLsNWqNRhgR8oVpATdBbkyPa4jjHnaVa3tUmeZuW3Q3EQvTbDPPCJLExjBBPsn9MRR4gxXZBiA24BcPMWmo38",
  "key25": "46zeNYHFA2H2oBFdZkoYpjSV3XMWP41bHkJaaU3cA6vo3km6fB9AUYCq1E1QqCycQ6CZiWNJxGvCYPpWuRGoeUwP",
  "key26": "5UBTznh9u7q4MPsgxZGFxYE9Yg4WijnRUrGqvabnHqE2VPkPCwTrw2hznKCnShSKSNQxWVNZvrjvtT3H1dHcuNXH",
  "key27": "3z59paiix1m2LWd6KnDqpTLJNZzP6uTDQH1fQWu6HHcrDDchLnNf8NvmTAwVPjS7JJUgbhEW7w325MfWYyoDFmGs"
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
