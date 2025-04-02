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
    "49rASfgup7Vo6G55hU9aenV2DdSpCn6To1CrfPb4gSJLp5smcFB2fg7iQR7zNu55DLafB2arfQXhSWLRq3Uc7EG2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AhPDeketgMmmgCKceRmASEszv5g7XkiY5xYcZfesDT8Hmjs389dkGHuTksCkj4Zdx5zzGLt2NpUj7FvsqNAqoct",
  "key1": "2LWzLReFehu7Csh1fmWj9QiXXxMjMQ1FbZT1wPAL16XeXF3HdQQLYJ83P1yUoACso6zsaPaAtm3CyKeL3iuDRNcw",
  "key2": "gkD3s4uRY9L5rfuzacFFxB5399QASbE6QLKVadtJmpHaCPsGxPWBTf7wSBcmryXogpVFN8tBWrHgZPLLfQ8DFga",
  "key3": "3e7ZfPpFMBWBTGeKMmE23ExTj21jaMkSvd6m4rAWxF42HJQtsLCBDHTFGBoaVT262QsYmrWTCEMHUKTwC9UxyBmf",
  "key4": "5TaPVVGULHebEiZ5cqxqvwGFDFhyaNSgnAeeBdyWbWVMJqbuuZv3ZVtdR6u6BX7jE1CeLAGmVzFAE5nWqLToA4G5",
  "key5": "3JrFboyrAkPQAdmtX1mNCpyuWdoxooPVcHCD4nJusXtCncxNRpmRpJ1vJBpcnC7EFtE7oK17pBife4MuhSj53pC9",
  "key6": "4fWQrhrvPurwiKBmz5DcNF3N5LtZQ7J1gDDzbvh5ictTip9VNrgALHHzGGuGHitE27JzrShuGUWVUCeN9ssD3HTK",
  "key7": "FnB5pMUYCSGkkpZeduNhLwqSF4Dyyx7w1JegBV2BBRbK8DzccENkuPruMkb7wNpGeHBqGXS4DRvxnCpQua72coR",
  "key8": "Cn2YVCr6Q9tNURMYK28nw5x3aVMB4ksgPSSHuWVLHv3rTQ1vD2k76bpM9WAQa9NHRQCho2fD68rrAcQ14jss4FR",
  "key9": "5bPQM2CBwEWaHASZVNvj9P81z6E4K64U1NAbrhwEVD4QLpL5rZGXG8K58oa8uce7vbEZVZ6MhHD9YMxoRpSABvyX",
  "key10": "5vnoT7t2MhGEL48g8zuUAWRUwSGez4u2MhKFKiU5JoqsEJQRir3c1JwT2NLzCmcg5s8A7Rc4zywuWe62d28KFyc5",
  "key11": "TaeLPyaYw8vkRx16mf5K4ewVeCa8gcC3BvuujanN6xJMBdxbABeMkPYzaJgvqpt9JyngH7msoknLhERxrgvY3Dh",
  "key12": "5NeQSZ9r6GHCDf12X64837ggjLNj2BFs6aP9YywDtixtr495wcaFQwie7hzPSYVyPJYRQgAEbCGznJSYrQ3M52Am",
  "key13": "5G2HF1ipyYpi1N6KDZVrusotJPFKLRv3He8AGVWUAbAKaePb4CkP5g9m1jCZZVwy7cdQ3sitayS3DcDZz4pQq56e",
  "key14": "3KWnN2PC87dhzbFbu9Ys8ReX7cMQoysYuDT4yXADbWnEJABbEZ29TAQcsHRT4EReGQs3Sgtfd9EjqNjwpVDg6Qo2",
  "key15": "4XVxLDSf9w8oRNYtsFYMXwV5fUpVDGFP4fRKPRsXSJeBZzUjM4UX4R3M3NqcxFNP8AZ5fGfTR5mNXKsyJREUEr1Y",
  "key16": "4yebRNUWa2gdCngNw1Uqwi7yDqju7fHxmNZ9TwjjSNKBcnLCWxJs3qqdUDVyDEfRQN6DAkEHWdmNCaApFLGG2vtv",
  "key17": "5EesStnrkpqhigEkedf9TP2szDWnj7PdsM7YG6CXeuF4WV9JZMnAJ5x5sf5i1Vpcr9F6g65QGNUevSkuZrceHQaw",
  "key18": "5mHLnsXLEkF6a2h8FVY4TNZUsdqRNKXwFa39bCpgJWdv7bDBseGvaKFnFR22duMziTLh3AS6Z91F8iopz6yMavaE",
  "key19": "5eWifJcVNd4D3Ht9xJoBBt5bamWrEGWQuKwAZiJEbyEo9mzSQBqFJNvCwRx6axZWW8H4AWqWjKcmFjeW44SfSYZy",
  "key20": "4vyjNbC6AnqYJNABXrM6bsV1yZ7PPC3gobvhvCKZJT4edMCvwubrjpAp6fdrofRJNb4wFq9boKgGTRpE1fT6Nxvw",
  "key21": "4ZszAyp8MyT9nBrp38TxA9SNE8sSgbSBNykqG6EQ2jugr3NDgMvG51zfcpeJQn4x5AUFeoM4PVYUUucqZGyzEN9x",
  "key22": "4dBLTaaLyT9NeEEhZ7E8eoS4S4cTFS7VSGMSwFeqTabhFsoSBSTKNXQyxmbhEPsoGm5ypj5U7aeZd96kdNMeFZqu",
  "key23": "5JwZZADkiuTQ76sS49cFE5qQTeCVe4mHVk65AfBRRFdfxMXBosiqay1N9TPMZCot5kRRq6gDdJgdzo4EJjetDYS8",
  "key24": "2YCfwZqJbgnhfCNW5EA1CJZzddRBKDHi4KhE7Zjjj84LA5ep6KaUk9PioXaEMhEWvMeEP7SHNSnhbsDcbc86AL8m",
  "key25": "7qnrBY3z1wtyED8vghcMGc8m1L6fCAPtQ8rm5KbQaEspQb2fyDpLab9rVM1Vaja11JJ3nPZ3WEF3En78eqGtJmx",
  "key26": "3sh4j2UutHAA27bRDsXHtH4hUVeVypVSDngTdGZ6KPrAMGP8YVtYDyvJ4oryGJxTSsnyzxd7NQtYMzccg78hE6GQ",
  "key27": "a2sRKZLTLi8Qn2Jgr6hTBzaMwnzb6hTfquXJNSAo8vw2H1EBehomFVXWPbcxqYTdyyt6623enMwF5wKUfiUauS8",
  "key28": "gvCA1WZ67w6mzUbcqdAFV7GqvRspSpMPiAm3LTmEXGoSNUkWZXhd9h87kGtSeEjnW23ru6mhLTUe3xyoHuWTzt1",
  "key29": "2vfDjJx13z56QbAeuR6kTKFEi3YcSuoaBzsbExMabtcrvLe1ixZJk4EHW6PjfkyGiANPhdEjKW58SSuDxpFqXsRJ",
  "key30": "2JqQDwtpw9hNXka14Gq1ZmvHgLTKGHSxCrKPhziUnKZiBRQFEFGYKhoMSDnWXsToCqeLvWqHUfXVhZVu5CHfCAc6",
  "key31": "4TLKXheGNaE9JD9HVauurgLwXVSRiDdreQhJULqbBZvg4NBRcVAn2Wrddi9Km96o8chX5XzR18ohDPUjaRbQLVBp",
  "key32": "5Nw2Yd5jyABK8C6nUUk2sgZzkgbN1i7JSoSRg88zbRvK5hbqrPC9KN6UGrt6Y9v7mKTiaWNFfLgpy8wkxHG2NBuN",
  "key33": "5H6Ugje9VdaWwNQJCeKHzTrQwnF6aPfbUUhe2fcUQAsEEaVyKRTX9BW9FabaTHJUDsrmo96RFJx3RVTj37krk3cb",
  "key34": "61McN1VykbT7LNon5kwD4zmrmY8h3Qh8JtnNmV9jub7ZGTM5PqAYqgqZ5bV16CZfxujraKxFUQwMyabYXVDAE61J",
  "key35": "2WMutfD1sXGy11oiNoDbk4BgWScM1Wbc43zbfttn5DCJ1g5JQMuPjSt5RHTnvsoimDR98pKPxr9sV8EN9rcZoQQz",
  "key36": "3nSQdK8dsftBYD9FT8tfhADi8pvzTDxjnncXMUhXprDBrSu9N5bGVAkWYnKnzj5ric1C4MUgbv3WLULJVT6QTour",
  "key37": "4WMatuVnEqYQ66to3QJyTi3Fw13QU6pqGcCVdQUFL9Ciqk9S8v7Y5Fd9nZmvd7ShwBoN8oVjXjvUL6z7edvbM7AW",
  "key38": "FKQQka2mCngsZL6BtCBr1xhsHcPU5vF9SNsC8ybpruWyyNS2eZYEAuFPSLHgqBgHxHgmTAXUbnj7UoLxrsEehkJ",
  "key39": "2RtCZVjWZd9bxzyjGFq5sYqkVRD5u74aytNJm3wCypFnUgdXnkNyWoepLv6nAzbxvA4arTEkmQxJxexqwG5GjSxN",
  "key40": "5mWeGoNP1fa6YDb4vbSLuEMAkpCvHLxtKf1BaJMbuN68yFxZGEEjuJxMbSSfK96WV2E6hgkvcXt13LqZMam6rm8o",
  "key41": "3GUuUC3S3Esb7en1A657GPoCwUWgFYzVMSUgag3qEF8Ro1ZMi74xKn84At7KDboMBB9gjbgYrXNSX8vZ3F75C6hq",
  "key42": "2MJHbEkmQufsyUFw89GrpZg2sPcqBzKz9poBB1VxtJn9arW6DcfUwwgfdJxeCUGpheEM2odpLF5bnkMy3xdhq8nN",
  "key43": "2N5R4HCMk7sJsZkyEojhNpYkSPfMhGfC2R5ZFeSg7wfiGuRqoc2BuM1Wmyyr7XWP1EcNtdGeyauU2h5osF932xox"
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
