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
    "4NuX4ecJRVMtZKKcMyEqfSLtE1zEny9ie47fMBtVm17XMAtpkvQtnFsZ524Mu1ZcFUfNHbL82zd5VhffFGiz2Wth"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ybaeAxWhHDYEb1SHvNJ5MUapSVnwQS973mSZA9pRs3WQ5K4T23MAG9JDv7FS4EWrLrVwrNovALNXpNnHHcsJGi8",
  "key1": "4yeiYwT8K32nhWFfQaDTnBzDf7eBi1HugdAZhFFuzC9JPfYRBiPJcp8JccQeFRMSna6YRu6s14xrF4creTXBvpco",
  "key2": "4gAHSAT2uknWCzNtJrpt7sYnGGixsfuWL5aVoh9mVbwji35wD3M33WW5kq1rU9XtLM6NSARjRpE3wFkkPfZGZtTC",
  "key3": "39dosHDQUsuX9Lg9toQujUy9xu3aW5bDxnJ9joQ8wuGEGR8MSJmkssmRmscHrwCfL6fLedUKoNcgRF41vkua6sDU",
  "key4": "4Fspxsv5o3Bev1CFjiq9ZaBZexn2DKeGLigx89EaRhtRHa1PbLU4WiRk6EXmgeDiaENZZB35kXX2sVwu9XC4Vdhc",
  "key5": "2A4zUUs3zWWzBbCmuTQi14nPss6vivKgjqC7cEyGkX5GwDdaT4TQYJ9vG5Jhk8CCZU1YedxfrBVYg4Vxfviyu9Hm",
  "key6": "4SuZXye3AVHN14KcTYQLGWz4gMw7LQV312Rv8bpBYDyxeJ195b7Lir8F2kmz3QitBmp7Jb5boJJ3z9NLDibXm9RP",
  "key7": "5Yqi9EGoKDTyM9LJDbp2PKdgPrXQ8FmQPZjM6J1RUJTFuyZhdheV65NhdyhT8HiuetKbmFhSGeXSqBTBkrxAgGT2",
  "key8": "67Hk58GJ5EtwxmTjocPh2nuAswcdDsCc4FCkyY4tCt5ZQVoiKZ8Zu8WDBCe4vE7VuCevCLjzyEgqzXbrBzRekQgm",
  "key9": "2KDELzjwzAAXHHHQGQQytbbwK3vNnbg6kRS3nDkN2LzWSVHq361XpyhNA4AMYAC5VueFyic1vndXhqrpmassvkBw",
  "key10": "2K7Y4FQZTG4dyyitoU8wGLaevXV7JQYmMeAYgTHAhP51LTg7yF5LhGnjCTpH3GKxWfGrF5XPQ59DdXHPoEVrHn25",
  "key11": "4CwbSrKtYau6cwat9sXQoiSPBQyMet11FDkCXSvFsHhsUrfpqMeU6cXN7KRCbBQsQ4YQipTEYkCFCoKYeFDrA254",
  "key12": "5YntimykNvy6EYi2XSAV2sX1mLUYEJwk2j7D9LLFFaBiTcrhneCZJf1HinRrakB8ycLq1kyjBbbavWj7JhvweYHU",
  "key13": "4qwGccVVaSQPht2Mh2oiSfMdy9uKDcp6sQgkAGhogmP9Q6hkMLAnLhyziHrhSc914pHjdQwfroXXMTAmDyHS9Sg1",
  "key14": "5ExUY47mNMzAD68JS3yg3ZLhPnTNDnCwrx2SnCyMN4r7MNMWxjrtRrjLEjFkbYcCqU2Uddb1LZCs2HBnxn3rhMGU",
  "key15": "2G2MsxMmtQp7gqsykez4n8VEPWMeo3Zi928pKy9GPEsyDv9eMf2wUxbXATd3MswH3ZNfn6A6nHBHotegnMALtGTY",
  "key16": "5y6gQQKg7xybrarVRgb9rnx5GoTHTEWYVxXfkuDXcF6MkNoVtofudy2mjSKywNQfeUF8kDwesUymcoKNi62LnoaC",
  "key17": "32oGLx3D9xMoNZfsK8kAJ6LsCdRz9N59vQWqJHLtuxBvuKbbgkaR5YiJ6cBTsi7d66kc3cQH7XYzZyEZqcjn2J8A",
  "key18": "5oCXAZCy58Ht6jPBhy6uEXX5WnDwW2UrtN6RgGzixbS5LH7eQ4a4z1VPpNyhjCufHYGdZ4PwkbcgmrEHtPe49MDY",
  "key19": "448XV3b7GoGgnvqhB1qzpb85WZPiD12cFpXpnkDpphYpbpdvEbNUeqFabqeB6jiN4BXCb2WAVdHDuMKRjWxVS6o6",
  "key20": "NueNveCv8idVYYW94MjtwfuLq1j6aNUH3ep77Hi3ne5Gj6UwfoEXugdDBQjKWGA3DWwz2ojUpEMCVQXoMM73K8G",
  "key21": "4zZKJbR63in8PGchWCiJATzP6fPaSrmu9f1XbhiwpNzZv2sWh9G2Fkk7hY5Tpaiz9C1MYmy3ki1G6HXRCGKFodGz",
  "key22": "4S5LFZxpzoWm8MNNreubkYzsqL6az48wgVmqbyjRdarP1fbKoVYesNeGo3txeucZEX5RKU1gneHhmGpsYKTEMjH3",
  "key23": "4XQJ5jfKmL5QJMP8k6TPpbsByTA4E9dBfYupEaRy63siVaHPeq114cLPdVc2242fRD3x23B5RBjrYzhQ6J3mREjx",
  "key24": "3KaWP9b58wx4x5kg79o1DLnsKK5eUzcR219fQ6uxRq3SPXvEJCmnsdNszhaigyT51DYVVZNdT5BFjfwCEyUTiF8S",
  "key25": "4rjJJsMVQpixMcCxFRi7xyRy3NSw4KAUs6BEL6iQ54hmiwVdWDkrmuaNkbTKy5hzzk8tdDCLrVe7H4Gh7yEAyL49",
  "key26": "4eUNqh5cikqyPFowMQUk2aMPRMuWBRBrng6Y2nCGTGq9UP4q2vqMT9HUXnrsseH7ikxzmnBcFJzAa2v3azF8uA5C",
  "key27": "4JU4DVQn21V5KVHYvMfTZU8hV7UNUmsvubU6mVZ8JrPkibPDqrMVksBwcFUbC2ZbXc9NkXr79y1FqCDsFFqoLiZn",
  "key28": "F1Tyd98jy7csx4uQAzpJLdUnQbZHYCm3jvTqnjLfZ6vcXUJNGPqbub4SnaVksNfmSPKsf3qKei3HsZuHYtcuHPD",
  "key29": "2y3fkHzKb6hV28WAVe5XXnBuyMWpRgz1xjagCqFeY5udWbgHVdGYuoPmJkAXRdmtB3WMGEUEpsUXUTLDv9HPbgP4",
  "key30": "64fvqgf5CyRUQ5hohEki9BZH5s49eiFkKpb4mFhirHfJtJgFV7VN18tv6k5bTgo2XnqyycJ84cwWXjDUANCZzigh",
  "key31": "3ia2gi9KrncJ45Smm3Mhd1NAqzFbuWFnKLL7HSdsqoBZ6MH5HmCRP4tSmBbBd7kKWWyVuvT7V5ZH4zHPkUTB8ZVT",
  "key32": "34JcKJSVEZEHykW3V7tyLmVSsbxzFShE5iwzLP4if6J2KtQ8oJwJBGxcEcTXSZCVoiETVn1XVDtNUPHufsSGSRHv",
  "key33": "66ngyutsybohWAUipuoNyeo6Y6KfLsstTZBPEzdAdasR2UUiToBS1apkE1szdmf4t1MNSD4YLeZzZrW6CAmGDpTK",
  "key34": "67KpED5xHNLkmMRSSLPaeMybKyxsnTjhNoUpRtS7crr1bg3X7Q3C4TmNLeGqELuS1RMpboeNXnhKecsWXjSPCkLf",
  "key35": "5dbww5XqLDDCqn8xCNuqwoSsGEUzBDurdZa6eAHuveL92BXjWeYM8Jt2kmzGjdKoDX8K9rEC5qTxTkkrksRAmPZc",
  "key36": "2j4UAosuxzYcbjVUNEMd41Arsg1SEz2EZwuz3c6ZQ2D3hSqF8uF4xkgriVz89tjdt8mosMwTxjRZT3q2ujyRHGYP",
  "key37": "2UPPifadZk4ywwwFmV5iBMCeh4tzTHKth769U1PXfjTnzBZMZaXD2TJDfDnkbFZD8Nm8xwkwdxBEiHA2XJ7QMwKN",
  "key38": "5UphA3FotWZaTLts2EyJ3Gtbf77RZdpavmeyaDJYKdGqxZVdYKL7omB28MVaMmkRBkHtupB4Y7RYTLosYUfEiMXL",
  "key39": "2XxHPvmAw6AfuPbepNBZdJm2aCpgtfNHuZrcrLhVGY87hT12b4bWh4Nc8k48neZDirNa8Cb3m3EsBotf2qBBwuMQ",
  "key40": "2rFMnxMXoUAXF7GkhJ7LVtrC1JXQoduRvnwGQPihjX8RMWirPhQRM2gV7CehDLEs1PYxsX27dYnats56AWVKDDJj",
  "key41": "HgxReUfZiS1G4sY6frK9SriJMRyUbrspUeyfuPQmJiyxuvyZEqAFRsmX7mkgj7Ljx3tnHqqCstpJBLK2mGf3Jbd",
  "key42": "bDvJ4BDpvDV28zWcotjJELtzNdh5VyCRihPJtRkrxLpZWF31dQKWec6ZV4VNr6XMn8f4o124p2n6xf1e8ivweTZ",
  "key43": "2wv4nr8KVJ6yWDvubfTGL1UqyV7X9Wx9GPsjHzgRNHdVFE1vTokfwJyNUohX4ckb76PLrqv69TdA7kdVCiWyZGk1"
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
