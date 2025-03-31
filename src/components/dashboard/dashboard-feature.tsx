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
    "5a2wEpmrZ7PvxyKvBuVY7tydN2sJqdrMSectZYsWEuXpyBaSgb6occXeCzi8APEuymx53FrxxLSFvVW7UYrkWZJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PRuorQz9DvwbS3SqhySDFXfwJTiGRiSnj2xUM7HYh95oDxUYT6USuQbDPdGXFBFLfXfm7zogCoGkxtYAYK5SXao",
  "key1": "2YrLt5uirw4Xmdwj77XBYUpUYWf43uHkv6mvDgDEGmKwgZxyFht3cHbmfLdX1zNc6ZNE6jnw1Tu1iqWQCi2DXSnr",
  "key2": "2CYAoBDr3WEWLknkPpboZSsuhcAf1uMyi5pP6QuBUJr5DSfyZ4DGZ3mHsEeojHsWbQAXvKhu5aCyDFX42HCYhh53",
  "key3": "5dScBFmHEFpTzwYQtZgzMyCP9jNJrUin6pTueUcYRHtstURP7KdgLHBP1b57U6CaHdX2UqkuJuwzuqYRHHENM4NG",
  "key4": "4h52wx6ExJ7NQ1Q9sF7og7h8nRQ2pu5mEf3xovQP85DGbe6ysobW5LidUJvByXHy2QTM6FANaLfbzsxctPWEVzFQ",
  "key5": "3YfBHrYnvUBogb6ardK1r2DUx2epouzTMytj8GpCCJn3fWDUsDH9F57tTEEriUTeG6GiZGAV595Jw2QnpdXNe5oC",
  "key6": "5CX2WnRNgbHxnNDyzB163QPsd5hmCM2aCMBnznjzf3h3xLEeQ3qgWfWdpg8nDJUUZi32LXw8mJTxYxGJhjkKfCAm",
  "key7": "2MDtiYnZNwVtdX5Z4nfbp9HDoDoPM4K7H3ZBKZuMm47SY1z3SFUmHgYSpmdrdYVG9F7XTpjSeZ2FbTzf8Uzw1BuX",
  "key8": "4CsEF3m8AKFkgXCfQnZD3yQTjv7f6819mVccjKRTg47MBtA6miroYwH84TKcVnMs94HMXg5ZgqhDBkEEs5mCUk8w",
  "key9": "2CZR1uCkgh1K8GqmcQTYAyHrT3BuwbPQsnuYXSz4NmS8xWqB8bH8zDgvyfeeNSCAx4gtq1934FbM4GW4fntJ7BiL",
  "key10": "25nhsPDe3Bhp4nFHYzVQsnhSiPikQfdz5yaCJYKvCTwjDooqLUEHhhx8NayinHxkGCcTCvY3zQEs7zMCyP4ujmAS",
  "key11": "3bsXMQjLnrQ8XKY9yqDeD31usGQozVUNbQhKPg2tkYW7Sv6F4fZjZkU7JhM1PXJvtzR6fGdizrPWqup7MbHGA9B8",
  "key12": "4LtgefwkfHrUyppqchL9ekEuxv43THL7Gpkae3pzQHfNF6iSFfQmC44W5SiCFNo3uQWQfNaTCbtq25PNi6sHrWk6",
  "key13": "5DZDNoCAhYv5ds7P37NHtTF9bKZW53SiA1qsW69p47LvLB8vB9jqr1s65vUcx3sniSxowUcqr3Js3AEArw9cax63",
  "key14": "4MMuarYEV17REJCJhdDjRrR39T43Yi3Z5Ps6h4broKxgq6vmxKx4MRPwUVF2KcnvUNsaswd93UsFDNeWjAv3aWAg",
  "key15": "2ptXhjys783rchi2PQrvdx6iM1tCXoVULg49fdNHgQWcFbouXwYzMmbN7F7ZGDmA2MYurJabLdHCgKjat1NeWxtp",
  "key16": "2EiNmWAS7riKp6WMgUkJB3bczVsKBGqvTF929fGpzsDEPt8ySJqejAda9sdcdziCUTnZPYMN8n4unBLLgwL4PNyd",
  "key17": "3gD12x4uwVoptwaUVuEJHNjyupsZjoUPSdQcQSmeWJh8bmnAW7qYSa4TGwrQkKkRXA7Vm9Hyvr9HXsckTLoWhRnv",
  "key18": "nHU4qkFKVULAfCASEh1UC1wgkAnekWL3BVawqZAMTusP5KGbJtiiikKYrB638DnHTL3NTDRL94VsNjEfuonvohZ",
  "key19": "2jH3fKwUfau6Tbujf3nbfkE5cCVKiCNvH75WExUvc6r2Mgs535Zz4RSUMNVh7svBXtVrxCNfjivCzM8jzGxsHtVa",
  "key20": "2SbVUWKzVN29AEQvjJLyuPrnqTjBNU1bWrCL2mTBK9Ff9cZXPMN4AYi7HifGxAH3Wt94M9jCqz9YNGx5APXm2ZXw",
  "key21": "61us425EeDDzMdjpSwTChDm2FRGTmMUWupENk7XBNR6xS22G3UYyc1LUzsSMxJvViVFCam9kEnViEu7xF5hjakUQ",
  "key22": "g6r65fJ2hhJTs2QLBFC43JrEGcnpCCqqqWtS7PouTXY3xxpd6Ui98SZV7STfb6NmbERaQnK47Zui6Bt7bUag7cb",
  "key23": "5yP6zazMgyp66pRQfY9uEpJhkuYDPvNqqWwqAZZdb8Ez3tDUoZiP3gs27iBnPkteAwpyTy4YufFnaQ9rQC5EaHRa",
  "key24": "4GPjcnFrj7pF8zCvCYPcM1kVLXteJbWg1oH2YLLsycQN2mPuan6srFS8YNoGXsETZXHue88VBzK853DgBuU5y9c8",
  "key25": "41mveAdz2YxMEYPLE2NbzDba7K5uyXTqtZkjtGhyfcw94SkW9txUM3ujbxBcX8eMdQZ1dTxDKP9tSeNcCaVacZYn",
  "key26": "4GnnRnSh3KdsChd5QtcUD5ZT1M8TXZ3Dv9CyS9fLziXYve7qwmChBZBRDpDK689SUTLkUt2wxvbPHwnzmKp3r6RT",
  "key27": "4Nu78MVUpzJ12XmULviTmPjUue7CVVVoQmXMoywMuf9N5Cyia7DZGqGcnUAiuPjXeGKst1imhmpuHynbuyV5C4h1",
  "key28": "375f2HLEMK8tr2soHFc1bZdVEyNuPTZ9QdMt7qzm8xatVPvPYdarLwebovAECqhJFr917hc9tib6erkERGTD3JRh",
  "key29": "2Wh4AXxsAABfN9CCHza3AmVijdBcZgeqEHGvnaWsNk277ZcULHqsoCMD3kgy5Gxx22LtomM81SqMehehuQ9yu8EQ",
  "key30": "5dou8iby5XfzVq4Dvd3m4V6TtW5a6sx3zfgKziQvHYqiGigU2fgM9H3uEMYX8XNj1k9zUzntSz4hnw9JTGLBrHBW",
  "key31": "46SRRj6kmbg7CkauSuwPuJDCod53ByuHMZXTLSmuoA4pXao8wAKHwhzPLAaCAYEPwgcMWhsYA9AUzjWTpk967Z8E",
  "key32": "cuTQUsHwqZZksxPYScj45r3H4ZvgE6C7UzwZ6aNhxA2Nnv8JYo4kUXM8kZWHq5gAbSDswcXVFANjEFGGc4SFdqM",
  "key33": "2KLyoWzkgoZnqEovFkW4drScM6re1S15DvHhN4MYXd5dnko8W95hpjV8vXMJXUJCdpm66sJFuMYQkFimFuCrtRGG",
  "key34": "2XUuByHWKoLjLsjBTRJTrHRvvrvLySEbgtNWuwCf7rMYmEg2d7NSHMnZHUvNtjevL1bG9d8YUKnoL1jkJmstiND2",
  "key35": "5XcMzj53JWxSZsiZaWXDG4YJXpowLncLX17fqADE1y9N29Hp91s9cVby3ctt4EELAoSYPR1syWeiiov3RG4A4X6p",
  "key36": "2SSJk1pCEhSV5FbtYqsnHn3569JkWA2DZypRwuLDrDsJqVgMhKYWW38MibyEs21FJEp9RxK72bA5UAESNcNLYbUk",
  "key37": "2BKmWRYRyPFHVEGYTE2NLhDZZ24s3c5cswdmBwUVyjcw9ifrCGx1gRWuZTQu8EvboDeYrdWt7tzsjM1K6faaS9rq",
  "key38": "4LN9nWk5KWU12m7FPMjnze1u5Hjs8ERzTQuywQ3CnubdCuwYiunnwFcheiGZ6wPMFRtU7KUhtUgMrwvuyEqZ6cEh",
  "key39": "3mmnC7z5MvFC6TS8AhxWjuSyBeX1UMgZvSgFwqk8ththzsF8UsaKdfGjLTBK9bC2CcC8FgUHSaN3aZUQsc8Bvsry",
  "key40": "5MYPEm9P2wL2pBXcsYVwdsHwNNYjv4rxnCqSdtszqZdxMjzLGbEKu1jEVfGSTw6z9SgP5aityoKz4UjzDQFV4MSt"
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
