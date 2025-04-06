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
    "2mVdT741aVsGAVE8i4DFqEYCbWHXL1LD2EfAgBsck1E1wtVyjXG9a4q1NAc7AAR1LAeSoXxCP3gwY5oxUdJUSaPu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sjKxkUy8CREYs56USXwKbCiNDR69RoyQRGVZyNNgbxeCyjKsASMCUf75MCmqb6RULHcuWAwisFCAhYZArvMhWCD",
  "key1": "4DcnX2G35wJdBocaKqdJTChH6MryS16DDiJhunkBxMm6m2WctGyY8sXRHJynD5Afs7QJYbdJgrYtu76BGLVThYF7",
  "key2": "Yn9kxHmUgRJXmsG6Po7yt9WCe14qUFqS8D3XGgMkt3YmBSpEbLyVENq745xEX5aU66RbGJQUXXwuNcKrirZQT2V",
  "key3": "5VTGCXZpNeLxPZeEgz3zesQGYxMfwS38Fsyj14EAeS7DWXuHPBnffsgxDWHiBLy4oTLKKiRFdrfXyjmWWq95bsws",
  "key4": "4o2UE5n6Ma4FmuqpZkxRQzcd5zSDQQrG6RUJ1nNS58pVZdSkhBdKXoEBveQ1qusVqh27ejkKigKR4ktTmKMVj5md",
  "key5": "5eun7f1bvyRbrqqs26Qite45U9aAFUBRKFRVeadhqpnSHot97EWpVperjZSyTFVBnHoF7oh7FY8cYSoFvZ4ogLf7",
  "key6": "4828fA5CHpddWfiutU3HuHvPfABtFhKxW9uvVs3aXEqNBeH3znxVLk8VBDt7XAXWPy5rbhyx7UEpm9DsktQuxzsH",
  "key7": "RQg73QjQeyq519mnG7px3p6jTWeELmh5arZkkznodNSrYxKyLWNPdkeyMy4H5Yef6QNrZrqHjxZz4QHtL8qhX3s",
  "key8": "ALCzo3VsBWh6PRogwCVmfN1hrNpe7dsE2uUbEvufi8KyvedKx4Nuqd741Eb8jm3CyBTPvYbwg9VAgRWWN9Q8JaH",
  "key9": "4y35oNHbdPzFQLPth7KTKxqoSv9bKFHPoTW9Ccn5RQwhaAtVanrYUF43utBFGs6QJbS948PZsNz8NoXFUFoTne7w",
  "key10": "5XFfxCmV4HFws6sZzzXA1bvX8SEd6ap7jfcPbWmChbp4jnreZVKNjUWiYUijarx4B3ZmFFy3XBdQc8pU9gqRYrvb",
  "key11": "4pdDPuzxdoyDNYKBYEFAj7B5WmoSoCd5e3HBkAz5TtM76C69aMjoUcAvybNE3aGW3ZyvhZ5XutEoBZ5WbrZXFxKU",
  "key12": "52njSvafLcz981c4Mwon99LLoLtMzZ9hHBAZhs4kPpFHA6vQ2N3ybWf8YfPonSWnr5AwFaMHmRaRKnoBtdkjZzYi",
  "key13": "5KreTGTeenYX65E5J3jDFM8BgfwaLneJfKzGYQ8BxRoHxPZTLyHdpzUX2i5cenm7ocf6JgfApKt658sWBmGpQBuR",
  "key14": "3dGCPuoE8ngVRPYcsA2j72DmNxy4wgoRt2YjxtYq3mgtAaJRkvqRHV2YMahS8qeUcUL7W2SG4KpjXZeJt2GLj5oU",
  "key15": "2g3DfNvPgJpbL5AXJekCMm5xLV5f3wv1WKai63aFryjTxWGL2BWqHz1FN61RyxQBK2BdpRf6kjACxoyuYWeXnSZa",
  "key16": "4nk1BWKq9KVi5q9ippPf2w6qwQ1Pt2MnaXFRgZhkRECaKKECWN1ix2KjKZdxpiYhq57jiRBnEe6c3wTX65bLbLKn",
  "key17": "4t5EjP2usMRVwPCqQU63YFQsLp58pdPvwBtY2LSecLz1ty9mxCg6Uu9StM5sje2MEV5huPc5aA2DJ9Uv7Eg3DMgn",
  "key18": "4sJFVtFDufJTkmfCyP3orNkeNzj3v2hdwnbtrPbqeDozSqfESuVxmeyc1c4qCMdWQ827Aiowp7URVFt7pHPuaHFT",
  "key19": "2W2uBviZNPn74CRAqAJ731n3R4xjkZx9T84KkoBa5SK9drQFz4BQCETu7VfuUXVyxu7k1hmQAyBpi1Bm4YKejxFa",
  "key20": "4ELtUVmSqEM6athpuQBBHTCtrGmfu3vuWt2kmJPQkDbSNqAtKURJZc86XseYbCBuhaXvz9EAptBV4RUX4TyGQnYY",
  "key21": "3gLUmwpnicxLysZHynZFmrpFdpppZrFqtRbTZQc7wd4ZRqUA179aSSAp8TPhRSUY51pU2Hhf1StG3SrNhh3BweQJ",
  "key22": "46nzwbZVp5osiKnucu1SNm3yDk3uaeEEkHGALWyy1pSmGidjVoc2uLP1n2KWHrRKUrbhYemTC9qyeLBu5PD5EufE",
  "key23": "4XAXP4py5XgdVpzkCQDpPWbcmMEwsSTWvnPtH96HCQkocad3GjiWSw9yawAKbidarUBZucdJKLVDc6EG86mFPQ7H",
  "key24": "3Zct2u1RTuGWBNrZcjWi3nu8489S9sFqgC127MaokDhFMTz1nK5Gsc9jruyDqQGZjPjouWd7WbfEX5HLF6xuvW2m",
  "key25": "4V9NjgDaw2G2rieA4LCgLu1ahmQ9BU2JnjKjZoSCsFTywtkTXjxVoyqLeFcCBNLmwdV3DNfTMfuP5jKVFauqRFRt",
  "key26": "4ma5asmpUpQaJQemX61gqoez6ukxfDjSVfeYzhzWZh62JZQvSdjBzcqUd1r3iebTaAUCiY2n6PbvxsYU6Lah1Sva",
  "key27": "3b7XqmMvMYfE6bswyUHNFHyEMA8YR17FcYuik84p2gS4X7AiKSSLRB4zQh5edLRtZxwjPBmzouzLQmQpmjKdSwwM",
  "key28": "4eKCuTDLm9jytttpWfy4rK9dpNzNavs2cPArmLEyXw6sweAckqUf8BtjpfpV37yraMnuQFjzAsegAjisXiuANWkE",
  "key29": "h8cvgE7mjEu6SBZ68sefnrqevUL5pUAvRjkB6FqVHipT8MpqTrqvbyRhTj1eWK5ngcph8ZfZFmxioX8F2JfsivA"
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
