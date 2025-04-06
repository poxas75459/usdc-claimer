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
    "5mXuiWdsuyoJZ1LZN4xkKLJZZaFREkJ8tx7aDdiHceSfqAdLsiaYhULGeE6pzXruydeoB3UjXxhhTBaJz4MqK7Wx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48Q5ydkEaABruv9W7qsfuLk1ZvtdxKUxeEFnWWTHuJVyyDXW7p9C6Anf74GeEFhKMq2eY6ymFFdFRgHT1WRmAQAR",
  "key1": "E2GNHN5KwgS3XobkgM1KFDrN5KNPbeS1WWc1Rgmu2hhtgW4G36kc186eTj1ZQwVG1FzgKRHrcXCN52bhUXZgXaR",
  "key2": "4rHHffLBQPjpfCkFFR4VxprKHrNq1GPg8by8xRp37G1BqVgkDYX1rPDurUehooNY3g1dFhyTsC818pLyTKHDAer4",
  "key3": "5fFnjGQ5xxgrkAyf6gqcqTLqNTNp3T4E9WpPRDeThhVL65XCVADjsqERnfFEAefU9HXfYnD7cqctCq8nBfj1fcqD",
  "key4": "4rN9yqJ7Dt3ZqBYy61XEznZ3CAnuUfHjMgvdz2eMRR2WQmH4zG98YjnaeUJA7C814WMnrZHSWqH79HsLNrZexw5b",
  "key5": "43RXRotg5uj8zSHcv1NuKEnxio8NLCppJjRD7F7k9wnVy3DJuVH4m7L1grM7rx8aC1cjoLaKRXw2h6QZsu5XVnSB",
  "key6": "jRBxYouPkCWurUWyX9zoroyH3S9bwgbySkZDiZNTLNYmck1rPL25rKHRS7jQ6cRHa891nWaXupMwpuHro6t55YC",
  "key7": "DLRfHkDPZuy7PHxRvCCcBzV4fUbXZ9VwbSA6pSZLdGAbZMji8WMTBwbJTu1B2pDwmxhzWaB7iN9pkJYpg6wxYbr",
  "key8": "2rFpex6uy4pAWX2L5j8rvQ8JEW7teQXNrinM1T7XLaEbjwxzsFgPXGiCd7FRKqWWmk3a9wseUcSqdxyoRiuhFFr5",
  "key9": "4fbpym4HkqzPjqfmfM5pagKScmQ2dLCGKwrtBVq2XbyLWNkSYUbsgc3yNeQU15yte5uZWruPoFMg3JaLB2oC22Y5",
  "key10": "tFxmffbVQvqSLeUK9vpvkZi3noC34LBYCdmtiK475WPp4gJDigzmtK1ES2Y92doL7K2LoaiWoedb9D9duUe16V1",
  "key11": "beXtPApKDAe2cNUND9yC6anXwnRQy23BsBqTxESY6m3njhbk6dykH3ShNcuDK2QnbYZCndFt5jkKW4FtBr3xgQF",
  "key12": "3TTjQLtHEBXR9ykDvtcXFsHy3fWAGKUtvdrJKcMH54YuiZPjucmmxG4VMt3mKNT7MDteoUL8cnBQtyueXAQ9fSkU",
  "key13": "4MtGaYtyEVjXs5WK19pv96YNrP4wz4sYfdrU82H3QcSG3JxM7YGRmYDCdUrmg7jcBmBDXibR7e2fE6wDtTbSm8Da",
  "key14": "9knXViDYut2Qpw3trBs9uXPsMBakSxZq5NJSrhm9kW6SsSUMaGcN8E1LCRnpozdLZ7yi7EN7NfeLRjV36xGwpbX",
  "key15": "4fyQWGQ3jB3rpkA2HNFmboERvqeqaaXxEwzmiXwCPeLypEtT1Ee8FxAHjd7f25CtAS2cps5QeQ2FHiex7F7Uta9A",
  "key16": "41hBn986kQnSiscUSNe879Z5RyRvecbBnxqb9ZnoH1yFUnypPoEPrFsZmoNEcXcoaFx651eJ1yCU25DQjRtS6FzH",
  "key17": "3RN69wCBVRGpPAhmCwbqNDyN7XVmQstf4EC5Uo9tN1Es7gSAvaRUVvnuqvo9XwoJiMahjXX6p6HtV6bxmoL5uejv",
  "key18": "63WFGgPM8VFVBMj7ZhKEYAwaJiF514CsiQmDMcXSmAvCFU4NhPHDGK12uqijvAMpzN91naRFZNpETiK3pWaUirv1",
  "key19": "2pYoxmc7wdyZ9CEZzRojRxQ318oj2egCko5qMkkCGxbjNCU6xFHFD4UVQdLpLLsG5wjE7cgcdiHwGeXAP5Joepbq",
  "key20": "5GKM6CQR1UYoNUptE7jSoH2bTAXRHCufwCqwZAAtcomKM8dxFx6KcuE4yAXgYaX6jEx4TqfxfQkb7WxoCfxaPxBc",
  "key21": "3mivQ5eNS7WcwHvTDXuSwZedF3EjssRi3z9UwUGr48aY4XzJEjLpCdP9fSH247iu1XiRG7SnjqWCjtLfQKXCBLDn",
  "key22": "56v4hF9fJeN6aVGLS3ZJKQnJTLn18NzJ6Vka6csBJgvAWCh7fHsRS14mby3td3WzY4UJ2j9jKHtUnaZj5n4pEpHX",
  "key23": "45uY8C2y1HZk1qDZRTmbP2K3BuD2RBXX13TXpva8ChxBj4LvZ7adCAc54hV6JZWgMiJK5GYDcUQGkmBSAQLyqCDo",
  "key24": "4ZPRNYsonKMo3oepkWDgjVGFUFkbPZixWt6kwTgw289SUSh7H1EXAGSScYRVxPFJ943ZMoKox9jZWbDvDogekUaw",
  "key25": "5aZYhzRfcY9iweNQaEexuUAbKV8iqZiTRt4yUuDiq39Z6Tae9Ei9aepfV3fLYbKGxUYKgNyGGnzoegPhnrxu4UfK",
  "key26": "4rquYyKS59W3aG5EvnY7XqbELd7rXTFY3EUSq1W1ADAwGDbMuc1AN7RmD6xHVKspdAPghQiqAg8tBmZt71omxSj6",
  "key27": "4cxeWYf6TyQbLtFG1hX7wtaAcsR8kkGfbXALgwE5jJg1Hdyc8kPto6jXBgLFqDpwyovYCCWCuRy7kLQ4Tc4K4X4c",
  "key28": "3d5aPFG4sCNGxutyDnfpu2tZpxfvhDALUZJdBBHv3JnrhPgtV6SjY5W28pH5iHPUSQh8cefrMK8HAx4U5AZqcbdN",
  "key29": "2PtbyrNVGiGxKAzjWovB3Caw8YSnsDSZHo2fMAY4tTQhGAVKLyArNkzgjMBsr6SEqSLywwhXHhEmyQ4eavYQMUy6",
  "key30": "5AgugPdngD6fVpmk2PcsSftdzUqvgVGTwRZW9XT838xSpofNGSmcZrav45AEf1ibuT417zxrFBrthxzU35acnbX1",
  "key31": "pB7REQVik85r2dy2YhSQr8hTQwHnDMLimzZGSpDKXnSBY9iCikhEp6uryfMeMXjRMsEPXLWdW6m7EEzErgxRVVk",
  "key32": "2WWorNtnkz7wE3frvdGMpsA5v5VT25FbRb4Bk9EsunuHUZef3Mivy1LFfmL1zxbuW8Ac9EF1cxjXMWPuubu5ixkf",
  "key33": "3MZqyUYUhE3Zp3oJ2cS2QwNQfJ4Gv91p2svVxFJaAHWpyG5oDaY3u616aH9mMsrQTBvhy6oHASms4V85qH1hWWeF",
  "key34": "3FWf2EY69DdKSSEedHka6XAkhvSGvYZPYmDLzYzgJi91z5J6bAospidxCExtiwpQFeepWwB9kfvzouNupTeHGvmL",
  "key35": "2fQcZbTu5vkR2tMA8SqHf9ppL9Sw36ockiwfEf18TXrxYaimYC9XBM1gnvrnda9XVPNBYFJLRPqbdahFvreLrmk9",
  "key36": "5Zd9iS7DcbCa17SQfEvuRE9KWYPQH5SVDU2vifZYBMGhswMbZ7rc6kcQNTFPDACijGF2zqa8w5we8tLf389BjBmK",
  "key37": "3iFB15jbDEaM2DsWLa8fSR5asVKj3sB2vr7kLsagnswFwbFVaiFSak8UssGQd9oG2W3Dw54H2kRsPjAzQPZ8ai2e",
  "key38": "22NHGHm9eTTGqSo8jJ6CCp549ozDgpcDSTXKGfSr1U93SnLqQsLVCBhWmwUHxwjcZsGHEqksF6WzYw3TAiZxCso2",
  "key39": "33gBKnbYURBenWXMPbRMpckcj5Z6aTr5ePVrWhdreYPiSR6sSitkzBNG2Spq7VaEXPGRjTjJXvhccs5DU2AQbi7w",
  "key40": "uJ5iiCDczJE5ytZaUe2hPw5eqZdDpncgTz5rr1EqeqZH59iP2T7HKwPT4gEaAB13inXadFU22XeEBmczP9JGQb6"
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
