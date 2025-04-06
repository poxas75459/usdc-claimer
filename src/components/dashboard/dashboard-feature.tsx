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
    "28jk2t2iBwKKwocwPszTFKUyRiKNRtR2Suita3STnsJSPKrXqhhALxrzLx4Azho5F2BNTct1brZ5kerWSvzk2iLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EUB57g95B93seMy6f97AyT1M28kvhZ5qETX22mDTqsfusPxDrE4Ni4tGpeGiD9YMsuC2UngT7MXR5TACs9jLXsv",
  "key1": "3ozKWvLGoesLC3QRpB9xFQH7CaV7B7y5hw5FXyrKGHdiaLPcp9KZsbf33EeAQqnawQpUuC27uLQGt7U1rPswkypG",
  "key2": "2BNWxo9LytZmKpiub1h8qwDcxaVV2D85cSahXTFugXTA6x3hhcBVuhQo7nKDtmqbxKvZjoQBegwf9JCtAW3m18a6",
  "key3": "5ouW9L9F1iq9qi8dD5Phru7gR977ni7t8gAtjyC9Y1mXPrPgwZULmMQFBhyFVFDW1Wxjby7jg8xysCHfwBj4va3u",
  "key4": "3G7bR59ujwDqe39UNY3GZKKwFQ1LX8xWmazmueAsGXFuFtQtzusk4rHaGxRBA6jsVHNemp84QyHiWKGK4NSbifG6",
  "key5": "2MkbB9fmcNW5tHLe257PhvsEUdaPYXRNkzQexvHczsp4TxpsReFVdfcRG8d88v3SfKBdHniMHopdxG4T56fw2qa7",
  "key6": "4gEHz1McuwDhi5iyRiypXWNkiJydPyriKN6CM7sAb2vFnTpRnSuH6yxzuc6CSapCXFgH5KKhx8c17EnkjRHgtkhv",
  "key7": "46ukCdgL4AcovnSoVpJnNtqGjF6oeVEXSwta9FFpAEM6RucjMbdF4UfhB1LUTKRcSwuaXR85cks85hjCqQFeDE18",
  "key8": "4gYujMj1RLPGZcBnBxzt5TU3RY8MwZ1zE6CZ4qtFW5PhaHFSKj2kW5JQrYTnhuTKERSYUuRWTiH8gUzKhSDGRiKX",
  "key9": "3Swa24HiDJdmF4TQ9pYoQPwepRveWRRJDp9Gf3rQm985ihA6eDTWK4wCAmJSuy25TNpkLB5znUz2HxGFr4fLwVDK",
  "key10": "2u4usBfwteNqWVqUjpkKbvfnDLh4PcvJ7JwziBqQxJ32urHhuTT4gwLVYTmcEFtSUx65csXUCfr19kYkEoSqbf4t",
  "key11": "5SjuguLDUwjyGwM66KAgnea4nDoGg4KZGq5qg29bwyg8W5fJT33oRmw8u9Mjk6438mfe7T6VkkxhpTerAgN3AmvN",
  "key12": "3iskaDf5tewjk352rNAiYLhByD7mAP8gfkif27vXXMTVEQZ6yfpaFbprdHnWe9BYJfAdmbRFKPzU6KrWXGetL3HD",
  "key13": "446Gv2swpn4n84ZMQaL3uFCo12shCo5n4KzG4d6Xuh6Zf6wahyi7h27FQzm2cT9xCqeaVV8fweUQW4jkcDNwSgUY",
  "key14": "27XUUPpf34vtz2NqXSnEqAtKAxdzoc8LHPt4oDCqjU5i6c2Dtvgsm6HyboXg31JVmGgEVwiNKKLoU1LhWtVtsa42",
  "key15": "29fPLeTjXQuYPxHBV8oprKnxj8iMTyqYkD59EkyTDJzKByy9kExiEKJpXdAL2yVHan1fRUsE3vALupxnoKxCPmb8",
  "key16": "2dMpYNMZ9dAVwdGntn1j7J58z5wMF2VyLP3hkJ1EnQevrt4fxn7HtoFpEBKb8SFuPXm8UnxEH3g7spFVToj3ZTtk",
  "key17": "4pqF28zr7TE23TKSEwkqLiot7e4cYBxgcFfora7i5tZsWwFwiukbJTYF6jCozAHmfEt1WBVzHkdHXgsT7gYpj2Rs",
  "key18": "2zTxVVokmCwBJC7RLTrypKUGDzcxTECvn6PhJo3b2MkdnDdMgzPaM54AhZduYR4AgY3zRuHJF458oJAG2FBzj6jU",
  "key19": "4Xw5qkALdnCK3n426paRexiQzcBRp2qZqM5ns9PZBfmfWz6H2wJnGeZ3TuJQ92Xqajm3kS1bNVVJaD7ebXxyfsNU",
  "key20": "3emcPdv8XmJUbcGiosTdzmkwrfAmsrXL1nttrNsPnE2gVFBFyAgDzr5Gmg2gXa8rCY6Rgw61pNY4LtCcYWLEetMM",
  "key21": "2xyaL2yiWw6AG6YTBZkRczm9oVpPshmCyFdd46zCKpYHVLp2ShwKvJfDRz4jGE9cHX7dU7SrioA5r6cex2DMcsge",
  "key22": "4MjYohWEuKRr9iNLyihgHfdYDQvReTc8kNeGpCgCBNoGvAeAgWwyFbJSAjXrnUfMQ8YvtxfhJ4BdkwH7GGEREMFz",
  "key23": "4cYzNgnPR82GCrWLRYGV5uB2x9BQc8KPktANorp7QL7M19q2hYxJTWja2eFBCWvacqNVXaUw2uVawxmjjcSymjyW",
  "key24": "52EBjp81HcaXtaCnNobXMLUczXWW2gGWRjcH4Yzb3rJSoAih1zQVMY37NJPWortmympcTEMWVbU6t5oY3EdnFTB",
  "key25": "5yT615Kz6saosW1SnhL3rvpW7yi9eWq54iTuzzTNvXLjNuuUNW2qQwa8w4k55CUDuF7bdJBr7kAS2LUacEF1ZqNr",
  "key26": "4gouNgKrfVDRkgoT9djgRxmpuPGjb3tivtfaTRpWLhwkmp23x9Tk1deeEjKruwrpzTWPGyQN8QDx8NdK7XJcqE3g",
  "key27": "FsvpX7p5YAZM6UNT627TMBokRgVAFHsTkBmbGvri6mGErmDwqMJFubhxCBiNysnEAzC1iD3RsoXxoHuuWDXzgdU",
  "key28": "4sSgdxSLeBNcMhYZt9gNxZpZznj8KEXLDfkhep7jxVTVtJ3PXvKqjKDxGa5SdSCCq8eZdMMfcwFtoMyJt3CLsrEH"
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
