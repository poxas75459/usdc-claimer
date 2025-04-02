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
    "323uEVR6nqTBQw1kAHB8vaw266cf3x62iHuG8ccXFhxSgRaRMTESFSfTQ34eAsu9vWjDsW4HX5vQPCrFWN4D4Q7y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mB4LmhDA1qMecGyYAAbS3X4tiYBtYZiQRVSfxZJg5xk4MrsrNa2vUTsyqQKoknwrGZypymM7eWEYWs319nF63ha",
  "key1": "5W24u8PNT7CEEepLbxm8udm6UB6Vvu7RJcJ6LejwUe4UNEpoa3YStp37sivSK3qcBRPDDCoyJQrEd6kpRqyWLTyq",
  "key2": "uwpB1C9jCiLFxkj5sj7XdDdNXCUfrZHhreuczDS7xefNTxEpiKbqbMnFcwdEnj9aUH5Xvj1W8jP6LDJAxkQquk7",
  "key3": "F6cg1dFKQcZnXHGjzybyEkdGkRN1GND7PHdpxwA4vhGdQaxTaWedR3uPuwE3SpXpjQtiwymRn6vhAYB2zhM6sPQ",
  "key4": "45dnNx8YnX6LWSt1GbuS9vEAL9AUwh6YkA1JA1id8hd2BWzw9SL2Enpdi2oP51kgkzrnGENox36UWT2avp2NkVM8",
  "key5": "CJHmP1EbBcwqfVXd8aBPdVZ2QR7yaJDZyaKPkH5wgWxahX3VHhqRNiKQMnvgR93Ba8G2oWPDZnFAq1npQbrEJrm",
  "key6": "DbYYWGoNYUbtGDpxtabJLkXu43ei8sMA3jtZmLVbimqD13m6uUoSNGHUcihMBkMS3bVgbyz33kLh7nFiwP3fy3d",
  "key7": "4Fie72wBGjsLiefAKWX8Vx23RvH9n2fEqRV1iT8BTTTFs39tT62acEV1UN24TRu7ekN7rVsZUnsDHkDGTosA3x6V",
  "key8": "5aqG1UG5BQ4ZF1aKShtzAxgMxsfXNAuUiHXx4Zfwj1GX1nN91pY4PdBJvAFDzmNjoh5TqyXjGvW3gdb1DxfqKkeB",
  "key9": "5J8KT4LhNEC2UPaYA4erBq9dK1Jh3vtm5g6JNL5yFBLoqC4AgUM2fXo88Q8K6EHEgu1o3kgUk6adr42j5zYoLwmU",
  "key10": "42RNBqc7gwPEpqabq5P14c1FwbpFeDD7tJgFM437Q897qEYdzcaGWKjrsh5zCUztPRNPUipYBNRS5isxe1Gcdyts",
  "key11": "4mGyM8z3amKESnis9aBtYZPzUc5qRZRDjDywvqjdDKPdPsXHb2RuNcjLSdLM1TdffUNSQFEzvDuvG4oeiCwReQGC",
  "key12": "313X8CBnkx19Su3YxC3zvSCGvKRyYXi42sWA34s4LLN4pL7WNurKNwcPtXcjMBZJqtaDD21nUepL7hXC8w9tcH6H",
  "key13": "hJ2VbSV8iGBjhcX2G8n5AyZ3mTWjmjNvp7sFg88rVdc3cWEAGLTUpJztzv6vYqd3Kz7V6Usvtgra3wdt66ZhwD5",
  "key14": "2ixpkaNnHJKNnxc6S9SHpcYGMoqWbz4Xoew6fQsz96XsnhrkmaYcV271ui4y9p71ztbUoXun3NLEGqXS2BzR6B44",
  "key15": "5rNDbgsrjH8b5Y7ReWWneuphchdwuSbVYAcqYQUX4MYzEVC9C9QrwWUCCYYRMq3XChbJJTx9tmY5Si184joDmkmq",
  "key16": "DSpyoDdHrWVeMhDSVH1g8yyCjwrN57xJcwg1CqTZZ6x8zaQ66BgjTbEQVA2B5MAVGhYyo6CFyCKNL1LPzU7bMQ7",
  "key17": "3MxNbSYaD3kKpNyBHtPsBsFwmbey6iMQ7avyyTMhvLpGZNh7rJMS5rkpFRSabnFwv66aoF2JA2ADDPAET4TMiu4w",
  "key18": "43KNUoBGL7m6c6rFYoFrTH7HPB6ea5LhDb15aVXPXdmLtoxXhbRwLSFzoadxyrw43HNojDKsv8wbzwVStQ8b8g65",
  "key19": "yW72A1gycH9NoFWt9tRSxK6wh36JDBbFXBdgmxdRVTXZk5w9P5WaTqjZzhVaUKb2recCPAQkcfXYLofRkAfwUL3",
  "key20": "168gguFb2U9kqrSz1h6Rn98Z7pZMPZ2JikHTJe9XAM3M4q7ZpprEtrt1CereAo2foji4pL4GR1UhEWKbTkY3S4E",
  "key21": "5CQ1NPDj6QGGRrp9rvcSFeW5NuSVaPxnrCWWdThT9vcUb3XSi6Y2AFoUv5RqAJwsAN3TouFLCz7ENK1h7kw9HhgY",
  "key22": "4kktasKSu21NWzAiKNyj6r3nN5AUzMZTuh6ZHtfJDFy3LRNsv74yoF9mHUSXAoyaeXPYVvooZ968Qod8oSmo3GC5",
  "key23": "5TqJEe6FeFU8Pnebr9RS4MLbkShZ7SwqNZXSXwoUfXTvB2wHpLmvAw2bitQa3f9GZmtj7DWPgGdoWCPquUoXRCpL",
  "key24": "2Kuf8zbVCMkhm3nR8xtztA3ALXv2PY7MJBCZo8vZs41kw1A36RdyFw95Abr31x2Rn2ofsV1128p4ohJ3mChLJ6tQ",
  "key25": "59Gdaz2kbsQE5oTGNUt93jtg9zkKBVA3vN9mdJJfoLeFgbAAVoYaSXKop5wANw814KCY4CmGRxR7D2Uf9y2PQsup",
  "key26": "3Nr8yc3vrESgU8KKAXoGExNgf7j9TaQ3uSYmBuyqTwoT9wxsM7p2CCkiqWzZiWGMVrQryut8oFoDjabNswdXHdSt",
  "key27": "5aoYBBXauwthLaWv1hZ2MPD6d2CAASBiGfiJewgrwM7tgULHtNZcnQqMpKw1AS6h8E9WyXBQLJcb8sVe1rAYCXTH",
  "key28": "srV79wU3Aph1coUoiCDesbo7dEqTZw3rgPwHHLVFWCt1uiiCFBNFbLoKSYwz4D7Km9FuAffsGDBpbH65ezJpd2g"
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
