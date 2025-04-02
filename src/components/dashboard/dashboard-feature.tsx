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
    "5fJV2vwoG342HoFTZCaLrAGaT3hNy5fcT8kxBV9ncLtucCSqYzKvmna2Mqxyin99cmnfeHuwhasPJbbMrCBg1BCo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44Bo3AtQFMovwDkHgzhuwz7tE1aerhSehrZSEF1WMBEXAx3daxwftzVMznzbhV1ZqBXqnEsXZjGnTUYeAEzgvhXk",
  "key1": "mR2TZPUV9QfBHF4ouqNQJEegGb8ABowuqZr57giBhPRkCrWyvCsoKR8qzeSVCfuDsqbW6PhEsLpY7s19enw9Fbf",
  "key2": "26DhdWQVRU249s5U9iXV2Gb8SRNWfWf4tnvGvr5sUwyGXncHcVkDzMhfcQgb5A64YC6m2AmEtA8TitzWTuDgMzuC",
  "key3": "5R2QdHujFShKCJnBamXhLpbooTnNDM6kbYJYkxBaW5yYzEbdunuBeLkcbFBHEk8R463cPytZGtKa16498sToE2zR",
  "key4": "2iHnSSRatp27ZJozDfCsuJpxXS7VyzCk5f92AQd49q5WgnGWaoeAHiZpggnJAWN3smb9h74poyao3a7j1RHhidSW",
  "key5": "5ndQi8eNTMM12NpAUxqDasMiB2oQkbezU3Ki7A5fSRJPn3gVXi6bLWe6h3dZwNRkaT5ABn5LqzerD9ek1u6homcs",
  "key6": "XfA4yZaPLNwkD5pSpxJx7eYxmRNgswAgrXAWVAEwJJ2KY1fvBcbmzDcLrNKmX14vCMCoUQ5c3bm3gMge27SXkeR",
  "key7": "42UQ2ffyJuqLafV8txY2pzY2aiMoxyjZRZRinL3sYy13ieh8HZmNCgDXXENs9AGopzBGVgWFJeQApdnauE8uByNa",
  "key8": "5wroumh3MoBAgXLdYphrVdzoH8FHmU6SmWWsdWkC6pesRddb1unYaEuMJNKSaAQx3ssmNHELRmeo7aR27bR62LYm",
  "key9": "4Gn4PxKzpMuj1DFRP86CdrJdKTYWYiaK9z9TX8H5bvwZP7pMC6fQP5YRCSY5Hy2qmurKDfdgJpwvfi6vgufjXU9X",
  "key10": "4FR5Y1CqymRLzCFc4eWsdZAMreCRext1CnxJRRn5qszfQgz6nRnDkJhs16Sj4PyiAUZmEWreeoF8RFnLLNie6cPg",
  "key11": "gh6XK7JYwdH3NSxoz42KdxJSCbJ2K9VyUg8paSpf27q3ki8KCdKSK8HiGccZqe13WcN5XSFvS6TZmSmHqsVUrvV",
  "key12": "2az56ybkieidQB2Y5w1gVUjp9DReAUDP1b5pJ66GSgK6hPf8ciN6dmnQThGLKh7rZ5S2Gj9g5FG2sTbfVg9NG41C",
  "key13": "3wTjoAJUWdgrBbKJUsWi3DLEvfwN6G86t9Taa2e6qixNgdV1oNipSjjYVX1wWtnnUAQYk5fYQLVNSCrYoGiydBDG",
  "key14": "2reWsAYjAnh8oUgZZViRh2ZqHvKLghWzEXYyVxh8QKgSD4KWSDtD9nRcWXk2tUVzGZYo4tc6ZnFDXHGYZNmW4Ksz",
  "key15": "4ggWxZDzgdpobVh3DdBv2qhAE7YzrckVtqur85Tj4uqfmk7dpoMR8nzBUfy1pKdneuFf5X259sYHsk7athSomjF1",
  "key16": "37Zturpbdk4PUhPcqwNPE9hz7wGoSFXjL9y1e9DK269xXMsozbTDJbuYHGswHbJoKvp4Pw8MujavESpwAA4YgrNJ",
  "key17": "4nnzgdEcn7AC7fuH21MGcnyrfgU32aMKXnEvyZeog6NxHyTnXWQV341d97WW76eXFaptzj6Mb5g26kU39wxEhD4C",
  "key18": "5cSA2VTNYPTbjXxGkLwunbJPy9V7BRbTcgTkY4G75i7g5wPsn7zFaBgkLpwqT6ao9YPPv2khp1eiTXksQ1NfAN7Z",
  "key19": "3R5kQdaj4VH2XL1vTaHKmpE9XSqCERM2Nysz6kZbx69aGfrWnH9rdufYLpwdxwUQBN11tUoJqgmhNUD1M9tcsRr8",
  "key20": "oZmWdVy9pSGUpYvDfujUeBCH7hQnvairjxJuN8yponditoGMhwnVGDXuLxa88fjRHhxVXBAECvBENvy2TosPYrN",
  "key21": "2sDz92bPZDFB35YeWZq9VoDann1bn1Wh1hX2dZvDpxXifASUGDzg7aMMyxbQmAV1jLhHUtEkdWBW5zGTR5hkTroN",
  "key22": "4B5JL5m2ov4bYG5miVewqofHmoaoMsr2ejEYFoox179KRwiwG55hMm4v2VzHZN8BXsH2Egd26PEj5DRWmDu1HVka",
  "key23": "5NwKwAhX8k2tUr3hpDSHbDo3puBwuxNS1fhWdxumXXvFyhBV73JZ1A321crMzDDXbj5yJ11DdpMoQJ2Ab242gfVT",
  "key24": "5ZFN24jFRgpLTTqZhC7vBumUey9NZJLjzoLbbSKTPRKAKfsTLG3s991uRN1mcpLrYGg8PbP9GFHFuhykRUz7BeXz",
  "key25": "4QeSvTLPzBBa6XxfSpfQF1Kyw8ovcwSoWZFmEPxQHCr6LNkytwWrgMTzowtte1FZHbY9jbL8TwBenfns9jKWmZac",
  "key26": "333vReu1dhnifMFqRCh2RQsifo4PPTuHnB6XVYvHmPoqwV5tojMqeZRN3S4fHvQJgGiLD2a4ZsgYeCq4RZRwSYZN",
  "key27": "5sRn2NgcFLp9TUEB8y1LyifRr3pUGwBCLdLoxADsgbntGkNNoPsNDfs84BLkQtykRaJGkmUHaSUFNa1RHprnyWH1",
  "key28": "3mtowPfyJw8EXDUKT2t1dz9BJQnz4GraLmhHH5ZWt2LsjYhakuX4SjoRHEL2HUiHHDHSq7wBdAiu6G6F9xV3F1pj",
  "key29": "53PEjbbk9bGsqEUVSsjPXHvMxhmw396hTrfz38f83qWzGMBJqviYGRYRoHdkGrjgBT6M4SrpJt5Mt5ABCGxoqfou",
  "key30": "5FcxCkFqRCoo77sASyaX71FTGgkcC5ZpR4FMSNMe591wqriAEzJvTeG5zFZYofnM4VCvarPuZzoktmK2ywG4XxqA",
  "key31": "3NhSofKMxbNLKW5AYZEQmTtdUPhCh4YFqkfFdH8vnrH32Sz79SK7xCDWPYzaqf83xtYmTn3b3mmHNycq7y2ZiRSi",
  "key32": "4roJSJ4A46GcRmNefwT3QkEYqzSvoonKwrsXxHixpiwNne5is4vHkgg1K7ezBnPpr726JEFvABXXKTqtEvuXy446",
  "key33": "3M9yZZ5eYUxzsLLwsPeZmrRqHw6sGzXCjVH31ydq2NJQgnqnzKB82NwwakmLu9uo2N6r8vZSaQyUi51ZvTLBRkQr",
  "key34": "4DejeCVpe7V73AvEQu4vRgHKcCr8xKv5PEVwe6qZr5UnvYigZzHkb29PvU4K4aarzyeR9sfSebfYFHUvNVPsjUBv",
  "key35": "4rxt4bDZ6qUoFiangFB8XVhKn2Vfha22AQu6FE2T2C5ZXotuXPpanZZgXsAFzxo2hk2pBXvbZAqwsYRKDKspvHXt",
  "key36": "3ZjznAsxvwDZKjnwhffihbokz9yzGQmVbFUf6Q4pVdscnEKGyWTr2oCoiGCFD5sUCS1gcWVt35Kht3rcAwrhLju5",
  "key37": "4rS1cbiT46ao43PBkLq5M9DCBvpXhjsaZeBcF5gU4AJw1RnidRV6nDqa8SnTszq9a42yPrPd8hgkG9aQRyYA84HU",
  "key38": "4M8CcAvpPF7GxupvEcnykKqqxh7BMF39ppBh4pbJz9BoqDeesvccLu4dEzcgkjwSnejAzxrAyZjyn3AnJrH64oPy",
  "key39": "384hDJ9wAeCg8fHzWbab9pRcovFM5M89ioR9CThRknRt2yzAUgNzbx39Evo1H21NxqRkRfVoyxWoV4BHRAi97k5x",
  "key40": "KU5qUN5YZ83ubWmnDkSr5uZmCKPm7sfYLxnYdfa9NHod8g3rddKbunKasT3kreefcBPGx8MVx7My6CctY48KgTM",
  "key41": "2Sczjxy2JDaahFdzF4WVPQBqqhFkeQYR9X8bQrgXv5ManS5MfCU8BoR1mqS24ZR216mUkJ5fRyd6QoA7aAgB6UC7",
  "key42": "2gyNpk98cVfpruLpZUR7WEzGsphMhq8Ys345RvjzTvm1iJEfAauEQJzuSkPtZE4Wsr1sLrm8sXMhrPUVzXq2QnXu",
  "key43": "BKCrXNTUBU1FoSehzjLSJDoAosk6zqiJoTZoCfEodgUGriKh65EZEJqk4jP4QLAef3JZupt6EU2XXBxmHJHYwst",
  "key44": "42Nx3xLqBT616UngSMiL3fxqj8Q7BY6kGkFvonVJhnxRDzHuNBxBvBG6yKsaFhNXJQu35GjeMw214PWR1F9gHBS7",
  "key45": "2kExn7B5YYyakbxTnAUb7LRKPF6tX7mJda7GDfdW6p6VkNGgjrSKjFknc9Dj4YpVmeoGP6vKcJqvvyjSCy24smg7"
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
