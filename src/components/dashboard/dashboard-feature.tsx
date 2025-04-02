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
    "Pm4K5GRJfxUMFSCCRDfutumw3s5vhC6kUFQiLRnbosoeEKHTSBycLQSqQ8iDztkVmJAXEh4HPgkhHRFxqx73MG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XdFh1sBVLyfGdexmDrKe3FCKZxcUuqfdGgpLg4kuNQE1aTeFsbULxmX1HntKRaKUMHHATcoRZK9SE7gvw9reZuF",
  "key1": "5L99XZzk7EsMHU2PuZBKJ1z4pejDhYjUGSJoQm1NtHH4i2XMqD9t9dLZNvaYqb9zCHZAXFgwK3guuJLXbGCNH4N4",
  "key2": "5NDEN137dku9ntmuTk5W6KUS34BDRcLck67vca4wnQ7pQM9ZjxrdJpu6EFNn1H7TVSYN5h8yvrHhcsYAP1pPcYvP",
  "key3": "23bJ7UxMBzSpgnwU2EyCmWKoPuPVhQwcnC8oHV9kWvd4tSZAQmtZX8eevJxi83NG9cWkvdbTpJoZwG9AXPANx3cw",
  "key4": "5fHvDD3nbSs7EMhEauCyUT8cDHtJkRBk9xyAjbNwt6h2B3GsKq2k5HzWWrbppTtu5DRye1nJsiEaH1xAFB2XyPZb",
  "key5": "4b5q6YSaCLpv3WSkQwLj5WYM3bif1BPKZ9rzScqCf9yaSKsyHEGdy1G4ekqKyystd5g47CvhJJsGi2bYUFZrjGB4",
  "key6": "5nwnG3HK7C7MgU7qyz5MzEQ6ASAvdWCedfQuwfAcmK9Xo9exc68ek7BXRxeJ7A6X6gDoS9f3EL7ntWgZ3MNbEjSQ",
  "key7": "5fm6Vy5QdkfqxLZEjz8Yu672KCGcecjrrFbje7TVY98J6eTxaSXXthsKpPRBR4daGE2tEE3qNEHwZFy3YzkKfWrk",
  "key8": "3UFoWukYYxiqfU1g4hEYcu1JFeDLWYKSPgHzMRZLwrVKFvb62c8fYVZigGUUPZ3nq6oduQR3eDzeZunHyBGJLvxV",
  "key9": "4d7BExgRQZ6pMzRdpRa9U1wXnbJ3hefprL9FAQGTrc58WqW8RUUuDiUAXDD9rHnFKgBd7UH3rUqWEN4SoCMBSDS9",
  "key10": "2kGoVW8Q9eH2PkfEy9G2tJBahoGACCZfhnpedNa62RJYVcadbRH64tWXSEpC6EiMemANsEYojqx1gWpNSWntTJEh",
  "key11": "21WJAA54iZSMVwZSXEt3J26VrypG8MUsjn6rREykYaNdGeNvBeqddJ92qDFotKXJLm554zbmw17tQ5egmSX5bnrY",
  "key12": "vDttnaz2mGtSz4QWgWhAWS2BrEERA6eUteDiidoS4FybxPadUVCnTZVyuFbE4ekRYiDNShXgyUWcKi6xxc3kx6o",
  "key13": "4L9gQmmhUL154JYhUfTyypH6arnHd6u88pTs4YPuaqnRHCj6JL7NmQX2GdMQ19Tw3Bmao9A4u8Gbmkxh4vx21v9U",
  "key14": "4i7siRLzTmRhr3iCPuu2nGK96EsdiG1D2Y7bBaj8c1gDahojhrckXSEzX8sFhNZ7eSPrHjqsF9P3WyKcd3LjoETB",
  "key15": "5DqsNGYyUPgmgy9KimAecsrJNbvPBTeARG6Pu15Vxnhk5nHnVvH9EizLFF2gWoxgiXnqerBZ2rpWYpf14MXSjHac",
  "key16": "3UKYtVAUiAPbhefBAiiyr24tAbvXiBmWR7Xdt1vCr4MP239XJEWxaVZUAwM5MYyqmLkRpE68kL7y81M8yaypKosz",
  "key17": "2DPpjFP8GMLtKg1WEjVvrh4iyPCEKkunn4bzdAYnff2rpmgYBVjaFqVPzucSSpCQ7m9mq2e9yZqEbz7fxgEvSpfc",
  "key18": "kEbog75xHdXPsbLsjHLcva9zHM9BWo9HXfhoDPyNAyB6FsonHdtGCVJtgaRsCwg69euTrPW4AyoQQDvy36gjzsq",
  "key19": "4reCXBwKMKioseNBPkX3GFLGSaAv3LCMTCfoi2JSMFEc2TdQUHVFuGfJUaZ7kbt2AkijYpf5saALWFtRZVCeJ4si",
  "key20": "4CZHo33khPhxuLKdX3ygnW4PPQt9hP2JUq2EjWcCd4QaXDUVZi4HuVwdFj3qQM2aN87E3N7g1jyoEtMdAgw5vHxy",
  "key21": "ZFNX9CYN6MCzV5E2xR3MRYAcRNtvWT7TUj9vcSBCtEbpyLwdfRYbdkYkwvoDpTydGa1jW9qa4WdkgmHz8XiQGwQ",
  "key22": "uAe3LucwnhNEkYovaHzPpn8cZcPoGmuvBoKPH9HD7B1SA1dK2gSL4z9yJgkfxaukAjPuzzYmvePT3wP78iXiSSa",
  "key23": "5AT3DVdPxZRvxrLo5btamFtbxUBYUjzLPtVz9TdwEv212dJBqpeX48CEyJJdSPTtcen6pMdv6B7MR8Zwc438ozQZ",
  "key24": "fVKKP16qdaBScVjkuG6MuxxKg1p1CxjTjCt1EBUVZphhRGcocRBxXCgWS1bkMRbQS1qzr67PwN3hLHTjsWULftP",
  "key25": "4FWRSrYT61usXDPM4QJv23WbbMtagbB8EjnNzqCmzVwEj7ocRTd2KjL3vbqnEcCFrb41crV179nGRMSWQwHzKhSp",
  "key26": "4dnPmU4TRYGH7bzJMPHN1gkNCyndTonT3navTjfLdTAr6E8bLcgbZrP2J6o8R3u51w3QgZQViRcohWbPjPA1hCXD",
  "key27": "3UgzQgrFJQYUHXBd3uqQhRt1y39mqPU4WjtWcx6kkV65X6eNPZkbV6FfRSRvkcXH73beMPPHwQKPvdMx1jucVLGm",
  "key28": "vRZYTmuH2c2BTjMyw8M4i6ZYC51iVhkL6yBG9xZK86oFB1p5oSFbKuzSWNiPRYqETyofSQefH2b2VnwPRfcMPyt"
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
