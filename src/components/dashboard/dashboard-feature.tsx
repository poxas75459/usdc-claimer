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
    "3nsLieNhLzYxt2SvM9pARR536mqo161nnC7Wp9jJepA5YtWVDmtDwkMYVm9UJngSTGNGGmYn8Xv2mUM1cNDtsjg6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gHn36PwQQy439V5JdKoCxoaBCEeMQkAh1qa5KzncA7Lz4vt8251Exi7ycce5wRFZbaocCR6cBkPiYyfUW95hZP3",
  "key1": "49cgr2WEpi5DfbXjQck6XzRPq6pEgeSe7P6g86ELEh3B1WBn1mshJkzgzN27vh8EbXsXR6UPJhbySynb5GUH9ibq",
  "key2": "4iSFyesVGUT1oi8vir3qnoATSn4PJQumx952ujECRPpdLs4FEktCmV3AaWY62MuFnQ4KiHB63QXK5NSotpBkwFdx",
  "key3": "3zSS5W17eEisgGSosuF7GexqKefULnJrPoAD1ESCsye3L4JpEGd25DgBXD5Q9rbCVdxHTADuENy4phq25zhfTUg1",
  "key4": "3U2KAWeww88osRXGy3NrpDsSPGq4P153pH43jV2rCBX2rdfHLCqJHZmdKBJkLYfff6xmqaodW4xoNhhxQ7T74hgL",
  "key5": "3TNeGZRFRAdN3XhKsv99Y8sLGEkG5d1Az4tThRWc1SudwhwJthvGgCReGP9ihQXaXmnGSEk31FNDz3CwhRyeQbwS",
  "key6": "j44SkFMohmzqrD6xeeUFtvFix8VN8XExNc1qiSmamjMVuqimXQvCThrzsDirT9tbox3VjDm9pQ2oy4RdYCPTor7",
  "key7": "2HxhSLr8YnTQxqXDzhLqmRT8tuFTksTjG37VjCLhgFV71s1xGGsxUKcSVMg1ubn7KtaJ4HAHSaXg4i1aJHCXYyem",
  "key8": "3yy9cmHDRp5n2djLt2HJrotJ8UX8FjQqvhPkH3HoGM3dzLfX5PHgsVAgR9t2jev8qhsm2TbTvVZmx5pCAFitXBUG",
  "key9": "3hJcKrHe6Xed4eJP3671yUu6NFG52uZX5rR53VHxMRkbXGPVxVF7a2LmeP8KiinYuQfGdNfy9ErdYEYZMTRktwZW",
  "key10": "5urdKL1Az3zx6CxgGeRRvt8HEvEZqz91qoLLxxek7dCa7FqR9iuUJhTzW5S7q42tvnnACyyeqmiw1LFN1axXDi5F",
  "key11": "iYHuoteEipwzF1yX1CqkG8osVVHfffkhJEQj6k9hTDF9isodQgd52Chj5cSEg2QKV5nfFHm47DU22LrLEhuDPcs",
  "key12": "3jgpGdCwkvijzzDEToHG5xV9D7BsHQq2HjsbMVJMQPv9vYBZzj9euC9miqJtwZxGtATYnHZU2oV3wq8mhCCwMMiE",
  "key13": "4QptnJ2uZw61PDL76Yr2JqiwqnvtbK54fZ6vkDfjqMf4t1WbrtzNKXnrLy6fkvhhkMeWBQP7qiCys51PV2AA2hDr",
  "key14": "5zqUhwQ7dfQAymHSC522QE2gHfXxqG9v2WEmb6ck77FxHuKKr7oaP1nofMrTWdfNoiQMpzBLGpJb799cw5ye53GD",
  "key15": "2RaEZ6rFc9NqeaAip9BhwTZEcEuXsvfqrTpUfPdPdgxKivZccUezgiKdwHkWSb7FmCRJRK4gsAvudXW7uDnDWYER",
  "key16": "2QDQzrDuYQWJpxutbEFA4uJe3K3f44xFF6e6HumyJTwkcgXCdsqzxicGF8da3diQDTZLWMKpwDKr1ieH5ATYXqDD",
  "key17": "2BKjgd71opB7Wp2owoRAnFkoPHBYpwhTskuJou4XrLwc9CYCgtxdto7SuMS1uiAHjA3oeUPoHwwNq1qhNrbj3Dmt",
  "key18": "3NHjGGgRUFk1SqrfdKFEACcKovcEshHgeZUEsVb1gkD9BMSGMtMbaVz7d5XmnWLWTzCQUyfkh4XP16nESCpEasmh",
  "key19": "2iMyLeLDUwDuF8bGguMePjqWe1kWtAyk41oPmNXA4F8HNyKtoY7rUBMY2bQTCuhFibcjBFDdWC4TzLaY7aAzRvuK",
  "key20": "vsKyFFabYW9LQyT4LcMKq9Gb6zy5kC4qmcrageWuGjiFNahV68CjdCVYFbgz8QuzneVpXGHTHNrbNugAy85MHKr",
  "key21": "5HT6ZtyuUTgFVtNBgzEEsoamXvtSo6w6i7kcGYLSLPep3SFd9LP9zPTfx15vs9TxFLADYjpknhSYtHgnFWVkperM",
  "key22": "2DyfGcndxQa6gBwfoJHc9KMsjaL1fUKRhBHTpD1VHaXbGaah7W3wmmNmFkLPy1PCCVCuTgnkKC63KpaMhjfY7aHj",
  "key23": "MjynHxoGmXit33GBxjHmS2UXH1Y4ys9wiBpTivtnwDZ2x7tnS9JnUtDdfVtGpqkzeDJ9fw1zHKP7akXzDRjp2Mo",
  "key24": "3bTRpTVZRvaVWfCLDk5ANmxLA4ubK49knsLYS7yHCTpVvWbkZdepJ49qSxkFQao4dWbVuqFbRdapRDmwjVWQXzVM",
  "key25": "5KFJFgUPaqJ3FkooFBR3nn2ktPpTJ6wB4Rsa7uTnossaHQWwqYVckpAsxhTUpJjo6MJetoKbG6TyXLka2CiTiDZJ",
  "key26": "3Y5QH8Hw5u39gDcqsJXxQj3kyUsKh2LgbMMXtnZ5jSL3ABw9kmVAyw88SVuJDFgDvNBKf2ufSJLmCswEGqwBfj45",
  "key27": "5PBWUo3ZFHBZnp2JsuhgkBc2NCYrWNd9s4CJfXyAWAgbqWWKK1DuhfQhBKKGumEQ1FtNnnUYr66Ss8RWzB1dsJPa",
  "key28": "iXyyNUyuRG5WCFtWT8Mc5M1ii2eAN3Nu18D176Ren5PKNeBjSJfwddMBJozLaBJtz4NqyLx94VAeYVsWmW9dtd6",
  "key29": "5ZdJ67gM6dDn2YLbv7RijHZSWW4K66uFw47Kgmvsx7D3nJET7Hy749rFn4u8L2oYQjmsX3vqLLjVjwuRKUJet9Ko",
  "key30": "2QLcDMQ2EG6Lj9dHUDTLsgXmbRqiCp8xJcC4CHHci4e2mVP9xL3kkzNAWpRWG47aTptb1QkKTB7uiZt5d9zYdzMs",
  "key31": "3YwYrfdVPYqsGHWVHYRuJ43BKwBFQgAuSREEVoCVTgjWVVnDjc5s1A9Gt7D1p9JdE3PHeHVyhc5wUWeyqctfXcAP",
  "key32": "2A3VSDyrNQd7SRq84cHCe2u4mUq2H9jkcjvmNqPD46HCXTvLYhE9sxeop1sCwXxK9YmV9kQHbo7A3k3sCmUB1B5N",
  "key33": "4D1VgpPb63ztzvRbfu2A5CcNNfcSLf953c1THmjrNNUDJ1QZ1B7gsMXLa4sHXqxa17Gp52K4bWHH9K7jNH4mt8sf",
  "key34": "6EA1t9k6zJpfwvQQtDtfy7HJwTjpFc2TwDycKGRkX93p6PCmeL1v7PiycxAFbMX66thtHpcSpSLa3LKZrsJCsJX",
  "key35": "2NepBLNzzhcDBCGhbMo8yTYA1o3NtbUd5UqxHhqisXKUMTVNYNJnEgofPDRxCGj6W1eDaBnni64svVhuoYRH5Vnc",
  "key36": "oAzjHB5xLtQtqchtZ3yorkvJyeDwjSjeNAFxhmSGc7bvoapdScgtjHB54Xpw9zN1jxLZC33mqVUPQmDem2iBQPn",
  "key37": "raDSKK2yWgGLML3qgguD7ECxsNfRk2FL2ZRwCcDHfHfgosnd5t261exzZ54GG8rKR3x84EnmLFqeGzPXNfq5hmR",
  "key38": "2XtcbveYopQSKL3T3C3jkdGwJXQeD7ExDKfwrEruGgfRKt8mwziSVsmw5cFFN7yjTeSXgZEp1tqJJnFquePSEgr",
  "key39": "4n4JJRjn5TZ3vaA4XA79cqiodTmH743L6aGoUWFti67JnmFmSKcgn28vyQ8ohc3HXLs88SKFsqG3vBBuBEBXdr35"
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
