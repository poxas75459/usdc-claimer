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
    "2vxPEBZzPYtC2TGBF3pMjqTRbU6AoEMadTCuv2YBZuvXEhLw5bewo3ECtXLMbdiY1tJ8EsWFUEeP3NSLpc9FUNqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M1U8D82nCFg7iksihnhD467QPLgwrx91WPwtXeYWVrVBotL4GtjRVGxXptm9AyZBGoL8jkyVwNYovi3DJPi4uRe",
  "key1": "QFkdfvw4PPAEtV6sHiwNZ6ZVXFUyYXXKuPNVr5brxvkRNvkPzBHbMeYnSoqtECYkwvgLect2jnicEiTHqDJBBwp",
  "key2": "5L5zsgVqH44BxGBLdKHMTL3yg2Eb6pd68aCoR3RwP7RpYuia4X55FTGN3BUB1nGMnwSNYRTJgvkd1rU4Z9ahrieQ",
  "key3": "3NsUiNakAeFUWefAwRYVK7DMBLdP8K9sxzqKDAi5qsU7FybnbYuMZdRgttE6D19DXj6qKD8KDc2JpAqT1oBCR9o3",
  "key4": "55gfQVSqUJDHQrs7bq2idLLQHoHQdfDCU7KiYwBd1igPUCXm8BtADgfPeHZUYsHggo9t3VE6N3fuaJGh2q4TWWEq",
  "key5": "hpnL3wpnZHF5XTadB9DxaGTGqEMmhKzehi8vRrsqXmF1v7i3iigaYVDqvK8tT5VH2WdQqKcXUMRUTw4uqaznqnV",
  "key6": "5aBk86M4WwJxxsrwy7jLyj5snHEdEFxxuvUm38rkBx3LGHfVkRpEB7Vkyu1XVMagWAKCgeerKkW3DrX2945MVHfW",
  "key7": "449yykTq8JavRVQVRS8REjP1oGB6nt5jNcaUVK1H7nHkSVQnQjNUGxUUF1mQE4UyKE4wvmxADcadgxzhFQmBNcjY",
  "key8": "38oQJhn7cK9hjjS4mPn9L6o68EDkyp6tWqzURBLLXsQkMKt8PE5594J4msU56M3Jze6cnEJ49kGS87spZyipQKbf",
  "key9": "42Kp52RDmvKZN9fkmKsRQye2fki31CRCrVi5vyB7MdZBtU2Vp3njqnrwAVZC7yyKrJRX37iMhyeH4cfR2k13vUqk",
  "key10": "A6oUzutNUYiMeRCcxLQbopGBsiaqtxJyczct4yjUPTTZuR8xmhdkeoj77tZqZUgmABprnXF6HU9MVKK3sSVsV3g",
  "key11": "4814dNMxCnzQW6gbR64d9sQHdhkHG8eRxb8x3cwSXNvCz9bvZNaJMjvE9qp3SgLEJX2DuNNJC2QphLZqA5LVoRFu",
  "key12": "3XoFdoLpt7eotHA5VzvJ8aemDWzSF2ShApk6rUiurDG6NVsRFQ42oe2yCpJg5Mv9F1j1fojDQywvmHo85qt9NHF6",
  "key13": "65mh4sbihUjDrFKHgpmDb6pKyHRPgEJj2FGfzU1gdoRRU8Vcb73t3KBF6uj51yew5iWAcFxrgTkH8R85tvsosmHX",
  "key14": "KsKYPNwASw3yQJUJ32AXgHeDN72XankUg1tWg9Jq2rMKmiJTXSZmgts9FfyEMicH5AcLSiKcsiJFHipzn6gvUqo",
  "key15": "2wruteH49KU8diYFHiRkuSTDYPigYeLTz5tis5V23AH29R46Qn8UgzLgMi3hwEeGPymzkN9WMrC5bcRw9W8LVZ1P",
  "key16": "4KovTs3qH1cdkm4oBXUywaVfHaZsQbrxaf9hfW2gKdXQ2DDBAm85GXPhnubg9JyyLVq3jrZg68zUejJa4UUxCbnM",
  "key17": "2WbDjBdFaGpSbsRQDDfq6f6a1fcQC63n8bkKbcythZwrjdrjFsoFmNY5kt3oDPnTmwnK6grHweBB21ZuCpkjUdiU",
  "key18": "3rGePLq4apL7cTLMgfp4gNoLXyhM54E7qSgnpFSsqQgpdTLfyhLseGD4iv2HicLdx1mxW6vkBC1f6TPUCQ1xAj5y",
  "key19": "4u1SWCsh1PF9BKbuvnsTJAoF7N8axCtCXfNU5GCJ6Ve9WFXywehqx1Js3sL2kv5Ns8eeoVaBUCy7CpDHy8XCUkDq",
  "key20": "4dtEQJirHbFiUo2WbSzkhBe3rFXZ4crrkP6maxTCPNaQDA7FFTFxiSgLLsPSV7FXbiwYEaKDCZP9GRHDrfREKE7m",
  "key21": "HDRKMQx9bMwSSJpwyUHj3hn33D55QHVf6DjzvgGZC7krQ1pMm55KMbwhYEm6KdLkqNaJPmMH5wprJYVwnN3rEGY",
  "key22": "MQnm6tzF67TZM8YhFgzgfptNHtswm57JNbmb8uNteEiWivH1eWQz9nqmY14N8zsounMeJPEopyG7JoGp4HkGARF",
  "key23": "3Qw4o7FCQLRbiPyLaU82xehFoZuHGmzKTWwC9xv8h9Hb72Q7kLt4UUhabghQh8wvJexrohVuDbhdgr88swUnpKjE",
  "key24": "3pozKYSdpnvND53YKxdsxJrvLeRT4BrpQvEyEwAuNvsJAFeeGN8EKEhN7X2HRURe2rAqkQp2phzA6sJCnJm3LGxF"
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
