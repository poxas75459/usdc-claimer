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
    "4JXDtwxcPRpXkViBs35jvPoM8o4XrRNoJeWroiBjzbNEArNYFLzbTdSmrLhKS83QaHPYTaHKJ8VGst2Hmj8HyCNL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bxqGjbv8azh1Xf3peLiCg7htdxq5H4rtF4HBVciQ9gcDHSfvGmBXF3KTgU7qkKR66J9Gzk3G1KLTS6Gb6vpSWxS",
  "key1": "3CxYWXx5E6BQFuR1zK9WrNC1zWnSHBDRhe3Jw4cFzkXMEAw5mDy3fZwpxVYW9auQpnfskkAzioHfT3irTYEGhaAw",
  "key2": "3RF4cCRetZimSBhRHag5VxNqfMcK65dcws9dxfGPggzern5z54Db2itcKjfoAzD7X55sABfgsknJz5BafELNVGEZ",
  "key3": "3G8aHUYUAsw5YjA8JCHPFuPXkbSWahXDUq7f7YCL6TDGeSEdx688BX47aNHt98RnaV4A13pP3Xwspnm3UDVaaSdX",
  "key4": "3SgaaaEPJBHPG7MsrxNjfE8Wqnuchy9YtGubKTJKzMQiyP97Nixo6WpRgE3ayBdmYrXeNCCx5ENhSHpNneh7eDxq",
  "key5": "1Q4uig4X2WJ11JZ15UMamCBSz4VUtehGeaMkTkzBpNUbKjPJDSWmY3rPJzC8XTcdiL4kwmJLFpox4Eca7Ta8SQL",
  "key6": "3kYFCxMV6dYsJ71QPg6N9rkf3JEgPKX6wzJvnHcbFCd5PK7NLZLGvUs857FVhFDpp4RwVdV9GrbfQrjr1YBRZXRL",
  "key7": "2DQoVWvTUZQWf3KatmCbZ3ofZ4PeLupZymHcKU2cZsSNX6vsPshJSPSurbRTZCzWjxqUrQGapGhKh8HKb5yfQ81r",
  "key8": "ezLGmpmU58ANY3yp1qXfS38Vmc61ez429CfFLTJGfZaRgjHZFdigtzbiNtaFnGJdp2wTqwNJ7QHGQpevZ41HKFR",
  "key9": "yvUqonT8sw1YvymMReCF5vWKCbUk5onf8gSJhn6z9Jn2G6UzjsaFMavd131KsqpvDDxgWVqPGzZLCUwhm5BxY1m",
  "key10": "HBBuTCLgAHSSAFvgeX3vLeArXm64fyn2Hu7moLd4AyQZaNcwHgCJkGxM2CgGt5a74Yrv3vwGCWSw7BxTmL9mt7V",
  "key11": "3Cmr7Hpvx5LAB56EM9ZU7WB5qs9pB3yyUrPqsQ5179pSEoMdWCHKn5MKyYi3fPEQMKqG6ezx4FiHoTdJRTVB9qwr",
  "key12": "3PLGgioosup8LaYbeoB3sab9LzFm1t9PYNqQD98Fwusg7Z3aLkw81uczkkZawL3teTa9CdhUyMfbZEw9hq8XCCpY",
  "key13": "2Xqg3r3uGGyqTtwibjgwUAQXKCAr9WbE5nv23sdjEq3sLaaXgGd3sYq4EpjqzTmWDwaEMpfawpf8soNpBZ3dEVsw",
  "key14": "2QJkZFze6pXbqF4T8D5FbobGN8D1p3kdVHtz4n2zRcS3CYwVWiyifaBk3W9QUkms5Fh97piq5ZjxCtuHXnsh7Syc",
  "key15": "3mjUeRKMoAFDZAyFDMNGr14evdt7JjYN62HUyFVyxJ96Nj2cxTHmnyWt3WpJQQidJS1ULBmymKhEhiu3cYz9Wd2",
  "key16": "TBpKwcsowtCjQH8KxK8pW5kTnp6b9cyhiSbgghmJwZYjM8D1aELLBzzYYnHPhe51Atz6cXixPkoASA1Uv39CmwT",
  "key17": "379FwfLQEgwrMRo9a9rM7sfXY5sJWgsgqZs29QoPZBQH2hUUNR3jZBRG6ryKXBr4D89VpHtBG12spuYMkJUWX9cf",
  "key18": "3KhCCFCWyvkWvjkZrRpqqWtT3MDxUYbFANjF2RuiYMjEXUnJRwpJx3jN8VBferYCjdzmoaedEjAoM8uwdgRNJjnr",
  "key19": "ZAB7NnhndD4cRCdbXMFE55DhJhJM7ZLGNegzQWs2wtgw4qLdhfwts9ZiJ6WxMo2Bso8GNg5pUikcPiTAo1dE9CU",
  "key20": "3J9YCbdCygky9V24fJK8gC9XRx24y2EBm8iM6SGh991xhd3YPf94aMFQLPXBhK5xrhfZj55jvh14tvuCrMThNPUX",
  "key21": "5XVgqRes9g2RKwY6jGDY3GZemcDN9fxJtXbxqsFvvMj8ni42viKNe4Kp4hV2BmhjTTRAK3S3Puo6DtFw9VbdU3nC",
  "key22": "2oaAQ33t17oAWrer9Q6HjWnwcEH26UJMpxwWbcKa165QqYqNbnaeCXrBE9rAGwYmWzyC1pkCt66C5z3SeYmox2j8",
  "key23": "Vtdux1PAmcX8dNsM9xXWAa5rZLW2UMbQdkoWtYaC2441y5kZkSnYt4H2kXAhLn9BL5Jq2MTMKCv47ixYkjjZV9M",
  "key24": "2DphaKEgBcwNtNJQGQ7AxXNeZBULmkZt3bS4gZ9XnPtkcKBBvTCdWTJYCFxU2DgVcPuUFdfPS2M57JKsPf83o7Ha",
  "key25": "4awZUuh8E8p9THnEQqz7at7DTqAretCSULfsdXfxzhooF2HzbX4MbeV7X958oLeWMeX73RqNHb72aQ93jcyLQCtM",
  "key26": "2USGRtbi2Babr7A9nrcWnJEca2aCvShFENGpPcEB292UL98i2w3q3p68CSzrPo6Xf8R1PHuTYeZNZWiNZRsr21mT",
  "key27": "31Mem9UjyuVxLgu6EQTStnMjSni2ZuQn8jiACzCGAM2MofCe87xRux6itQwxVzV2kDY4S7s9WYw1Akpfis6KLqWH",
  "key28": "44sVNoT42j1Eo6vR5p1YQa84sDY7n7yzDrDUKPUPJZFgTpFRfoEmEhU3wiKD7fmfJEo7CuhpaBc5Y9kxgqpLyzwL",
  "key29": "5mVQQ6jtEJEXKQk6zU17GuXYKn3pcUZ9PjkMXWZ8GHaf4ZVrQWVTZzV24uBE5xLj8Y8qHweZPTyDsa2HxHT2nV85",
  "key30": "5Fio5fgrtnM9YBXT9syC6gFHU4SQKjbqGiZTxcbfig4CAXi6ez3V8CLXtpUae59Fw7nGT2wxDAruXHWAuDdMscom",
  "key31": "5yRQLLH7jnFA2akpZ6v65xqWuewP3wbCojVDrN4yjvwSSsF4hFc8FNuDcUmf3Zgo9rV1oHG1Yhsm5w8quVgJ9S2j",
  "key32": "2QSMTzM82iBdvj3vxQJbPHBpVtjWyroy2D4gbFEdmjyvCZtNKTkK3ZLpr4JtAo8H6xe5ssNfo3hRir4HsyqgB4qv",
  "key33": "MUwetVek7e23w5JSzxub8Ns2yadRuFN8kJx3h3no83Wnu1SmhHdkV4aYvmuNGYagsEmamJBCzHuMimkejkFohxy",
  "key34": "U2bQXDHSya5ajGBq6qnWnLYkb2VmnZyDFiAMLT5NEcEcF7RFBXQSwGpRHueZP2DQgApVPmqjawpq78mAKesU7U2",
  "key35": "5fo7pdB6PYhzsmUunnBhsk2qCFyZjRWsbZ1RZLuvxpTYo7ikMvSunVnTLuAPYu9ZDHcG5RBidGmDU3gAMAkUsbjg",
  "key36": "3BSTFQmJbF7Cd5Ai1zyUbnooEARYTimJ5X5uQWhFxq5dxbk7bpYkTzYgjFikKyfYuhpDCjEdB3ZXuQC8KCatanbN",
  "key37": "4SnGEUuNDqVehrZEP9DqwSoDRVa4T6now3uGo2cJGQpJnA4vWkJU9mZo6DZ5YpJwmQEEEfoJT6bswwf5BCEaomiw",
  "key38": "53jJaGyVdXBNWFRJfePGsEVdoSftoeyi8R2fwJyLVmLwy3ZhSTXVpBjbD6Jz4nkG7t9UcDXXCJrJGnMkoXfMVrtX",
  "key39": "38E1LJksmmE25AwiZU4erjWfKVAjRGKUJYYyrfkGa5fnccJfp8yQJL9nhQ8K3PaKgVro1MMiw67fD1RVHvvbAQcY",
  "key40": "5mZTMbRRuKjqpWQ4DKfMkQqGngMPeWVWMKM9ZDn9P41LbayN4XHEomw9K7mghN6iL4C6niDB26eXVezUWQHhqS3s"
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
