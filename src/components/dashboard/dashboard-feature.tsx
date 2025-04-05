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
    "44nQcjeNaAMYM8aU7z86VXibo7Z9qchTRu8TufrhRYAEk3mxhmp194AiJR1CBbYVGMcDqeBFFmwa4AoJecSwEKUE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yDkgaZYcZr95BfCqWdpbnK2Z4zWzHVdVyTNoHySAqCVR5ZfpTBdQAoU76H4czD14xvm9kguULgUgzLfipUARNSx",
  "key1": "4GmDboWR57vfEvQtkpyR5Qiq3jex2rjTwa5125CX39XriNoHYdM59KYA4wtzPogcHw5Hak5oKUQrXJEezYeBNj3D",
  "key2": "2V8pK4VnnXeHhzE5bkmpmLaJ92XMTZkYLMbdXShvq3Hvih2UAVxAYWnqH93ECBHkkQiuG2sQ9d3vCtQZ4MMSuLqo",
  "key3": "P24sc5EJsf2mksqnAuHyGJQ2HjAoThBccUL7iJHo3g84ZWawAce6HSnetrZty4Zi4f137e7joy84WBqEYvLrYV8",
  "key4": "2DKrn3D61tUjb9uBXFSywaneXwkvuJeodr9gYKvfQszfb2jJDD9hyYCCXUXF5idoYT4dZG1RhcD3WCjaM21kWV8R",
  "key5": "5Qy1S8zQ2QuzcGhigCWmM6XPZNUVgkoqR85in6VbpTroDVUWPquASAD6NBnQ4MxT98GuQmcpewJRnVLmyuoTQpA7",
  "key6": "5gyyzzHVeooiKMxH7XGnWSm4mzmMupETGa7kwqE5eZ4Vag5T6Ds5UGDzWe1BjBtBGPogt5i4Ebki8mE5Dn1cHR4V",
  "key7": "5A7VunZti7f1VYRqPTw1iT5Yfup8hw6p46P3xGeP8x4bSKD1LvsbomE1RBVnn4asnoW9sv2zrmuxcNGaaAfFHc4Y",
  "key8": "Wu3pYs2BCzRzJ1nNS4mo79DaaGF8jxb6P84RzUfsocMq4jQv4nUTbq6hYK75fd78dFBrRmWkqzEtzL6jabXQo3E",
  "key9": "3uMGohMmkia8QmC5Rt6ohX3PDFgcyteKmEQxuERzm8mrx58dqYepg47WyEotdvKzFAQuh9Mgf9TPugum8MSvrvu2",
  "key10": "4oqP2snpPMKqtBNR7MiwsbZn4YuTDbR25933tjJpqzMrALB9pz3bbUZXs6vMLGyESUY3cMAY4iV2XYSdZSCqbYAN",
  "key11": "55jfmmJGf86dAPkcVp2r3XSABMauuRjhJsgji5BawHxuB3WDYMBnFZDBt1kux2CmTVZh4iPJPWW83PXQLrsmaHbQ",
  "key12": "7BYhbG85mH1NGgALkiUAmpg6K1QYp3zvH9tzAm6MmVjabTBA2k6BpwZKnNmU9B2X9NCdyMY3Kwgy5W4TgcY5qh3",
  "key13": "63XYrcJxcQvZcq3MCcdoLzLjeCxdzc8rkdhTsxtSnp4CuWRXaHodDH4vNuRmfXuJwyd9H6dxZXMrggRo3eCGUmug",
  "key14": "2i7x8regobPkR5bFePUaHu4NVQ8hwVEocf2xCkNtdbfipQfUsqZndBFEPiPyjPtn6N6nNMXwZ7h8mmJnhpczBUzj",
  "key15": "Ae9Rs67rCAy5y2WbEDxYYakyw84MASFyD8F2AXB45aD7MP2G3JsTorAgnVreoZApAvSQVy58BfbZbH1EZMgWe6F",
  "key16": "3R8HrsmRCAtBu2izWrG63X82yBfyNEw3uMxQx6Tbv5jop92x1puffWH4dK7MAemEwtAYCDursMuEx9DVtb29f5Qo",
  "key17": "oF9Srws4M7feyxYXEM6sYw2twbovKhnjzp34pKmWzQ63MKUNoEuPxDsks8A6YbUBrQ6XMKi1M6Ye2pAeuDJfD9M",
  "key18": "1HcnTJUz3D56FE1pvqDUQiLfQpkeqot2j8HhirZWxXcxADL5qqiAB6d76gMijmHhgKxxe2dhzYcLdV3nBmB6BFg",
  "key19": "v3FFFp84bunqyTHmt1rFctmSKa7cmkRgwequkvW6NYr3KhhBdEJsS4A5QRrDep2PzRrg2sidJS6g5mPmnebSgaC",
  "key20": "57QCznmdnCFgYSFdGd8QjzE9fGMi3wg9BkvFbDfhfD9Vu1kguZ2yRAJyikQ3J2JjS9f3C4tFZt9jaAxvtPnzWe4p",
  "key21": "4eEy5x2xagCvbok8MAArByffRQphsEdpt6gYJa41k39Hzr3UeogCEhhqQWYzcYkYzngnXMxXC7Uchjdw13FiMHgZ",
  "key22": "53KKbwrJKN9bM2wD2SKY63pd4WXBch6WJqhereK3ecd96hYADxb8uoZNXCDmWr4XTAjAZZDLTJmp1N5v9FFPnrG9",
  "key23": "5Z33rb8Ty8i3pDEq8jpjgtniBSqJd5RSTcMjQSwzVh39MhF9FeNDFWvmGmcxvFvNDDiTVaSZKJwJe9xJqwVUEWVg",
  "key24": "5MdztY9DPadWTyZp3xGftST9t64fkC5ua8BnJXSmdDJNWJSuBjZr23p4zVE9XJDojCcD2bEKRBLPLRWaJ1ERsDRY",
  "key25": "376oz6ScR15E5Qt7b3bJ4gP2JspqRC8ZqWwjRAzaWnWDFWYCx1CPbuVhEwmahAggP35xXp6oatcFnpDe4LseeQXy",
  "key26": "2S674C9G7QexLjLLvvLfxzz85eAr1gMrTRHkqm97PKnYJxuGV5rT7n6eNM9PasuKH2C3DPJsedVy6vR7YTrdnp9b",
  "key27": "4uuix54an5C2TQGPHgvih7s9HpgCiCrFCgcUofwvEotETEXhfn8XYvP9JBRZn5zBogkjidBGcSa1utJCNbBJ6WPe",
  "key28": "4STKBsFCUamWYh5FqscqFbfy2JS8GMRWXpgw4vZY6fEMA4fYJcivGoJro3WTon6dPZazv6rg78QPMtVTJhgA8U1J",
  "key29": "4x5wLccHdQJZcv96y6NT6QjN6m5FnXaJr4QBcowAKeCK1Hk9C6RGVTXKkCjRQBLhX1bEESui1k4itxHRV4gNMjDT",
  "key30": "2pAanVoM7xaiYcCVpQQMX99sAc2RnzsXr51jXVFcEzDn1DC1bgHNHeD9XyYuF2JN7HsuNMeJifHv9uFPVE4a9E7K",
  "key31": "X4FZHboLvpbUxNSjxyyt21MT1brksvHmEuEZvPQDXR7Mmj5nW3M7ry7Sx4FsxQnYM5pBho3nVpga7CRtKPsSyqq",
  "key32": "JoU7NaCKx8VEPCYHBV8dLC8zvcVV5CnzyJ2dj1j8qKZSz9td4yvkoxSsfWNHb5KaQKSx1DKoFy8FvaST7vL41Mt",
  "key33": "4YkRGhBsFwZUzCUxfSMHnFMfwPYRJC8zqve2KPf5KkeMtGxLsshkS4kwhAJ3cbbTdKpvyan9NBuHzoZSjxQ55Ltt",
  "key34": "QpYeB9Mn2eRyvRLVBDMb1w4mSiynEQ9X8RSftAoK6vJkxSzSVSeBMxWdLAnD5AAZvB452Rdp9BkE4uXho7aBJ9t"
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
