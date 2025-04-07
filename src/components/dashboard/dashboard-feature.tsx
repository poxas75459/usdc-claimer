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
    "4fpzzyteHfN7wQpKekP3A2HhBRKXBdmrmYdaBPKg7JG6fJdLhbf3qmNv5LBmuqsXLcFizVEdFQJL1vVeq6F1RYqo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JH8JojEFq26wExorofGrgavQtqCuxB4gSg6NaE4vrMHx76a7YZy4LTWbvcyPnsLM2jBjVmWJ5yC2SMjrBr5EjV2",
  "key1": "3uTqEvHZ1ZES4YYtnkvmp3PjoeAoNWmUS37zhq3peXoyKC15epaJk6GwDpUp3FzyMHdRpQhwgRa8S9FFCAj7SvcD",
  "key2": "2UFojpZi135RN1oBzwhwHDNL9W6d56C6sBsLakkN3TZXTxk8SkmNuwuGLzVHGELqUBxF4ThA25XwSnKg5tmwovWX",
  "key3": "Z4TeBpAdozGpAvVKeHkSF9MQU5Su2XTjSmm8S8UzPv7TgdvuG8BAA6j4oMN1SHPvrKUf3KEMkTioyqpvRA8A9m3",
  "key4": "5Sr3TuhLb2SWzEER8QnpEZH4vCarPH2L7ckmc3a9f1a8vjNnmNXt2HCDyWsDvaK13NZZgqfMQXDnKrTJUZ8K9ShC",
  "key5": "28SCDjUuQgtT7YEqXA9BZv6NsPfB5zrdNmPHEUyzQJXm6Kv7ZYHzYXTa9ZeA4xrZ4CZNtEa7H545w4cSsZmiNs5j",
  "key6": "5g8z6a3rLxqUiZ6PapjEwwyi1LyaedNz1dbqzwiJv5ozdtRUyy3oiqQAAEYRymq8bD4EUT2xEnpwqut8wT5xRY93",
  "key7": "5sZNv2PadfUHTaYyMUFr98qD5qtLXiqQByZ1BZMDzzpiXJ8vSJcTL5nCJexw1TqmTaUn1TMJAVxsGuYF2wHSvF29",
  "key8": "2EU4eMWtZBY9uvLpHgYzMWCqru8q4PV1qL6ogdikR9qmTgS55aYCigMH4sEEUbd3gDSRHNKwqosjd4V1K1F8D9kW",
  "key9": "2wREn7re3Rw2Lwa3AmBGLpdwYX9J3U42Q2CX9nobqECVeWA24sqtWnaYhJq2maYs4F82LeaZsKf6w3YwyWXWMYoC",
  "key10": "61nUGY24FcvnANr5at7BGCqopXWrNcUzr7Ubk2SgaCNiYHunteCgDXTVnvm2meaBR79j4UVjKiYEfRcm5kvquJpp",
  "key11": "4JdrLSpAj5mZ1Yxy9LHcVF3Qo5KjvSGPxr1Tbint3UroWRnNWN925kdTf9CeNtp8Zv3DN5XTkEhdeELqbM6Twfvt",
  "key12": "4jXpt3DkyCXDVsmHXeZHTh3cVgTTDLmiCk9eJ3cMQmCBCieB5Nkrvpf7DivqPfXYfvYGsBbHypMM2DFy8aWeGwie",
  "key13": "3w2b3MWvpM9PTCFzqDueKQLRFYat1h7ahm2VsYXK1sUhfMHx9Me6jLot4LdbSZjoZmF33FXqyJiAHUJ6SPRUHkTp",
  "key14": "5wJDsjXGWpt2zdfyqRcHTpxbWbMnVRAPQzasmfH51E715T42Zcc51RvX3UH9r2yzp5JbD39mQ1mCnExSqgtq8kQj",
  "key15": "568JioRNdCZFmRntLsdJZNrPRuLxU997Lcwe9WVwcA4xPgzpdhoG11W7qrK3V4JR9ofGxSE3TgcCANzJJAbPEdK8",
  "key16": "4354NvVCkLN5cnY7x1TttEVHFEDsrVR1CoSPjLBbrVoJNi9CVybPDNxeLqCkUY64TfVZ6z46PijjNt2k78dLAvLB",
  "key17": "4ycAtAPpZBEfCcc7ugawgP3WEkzMWPseohSbXZHFtFTyjxmpabzAKnYo4Udnav52CT9BzhG4c27VtiLLNd1KPwb7",
  "key18": "3mBFpv44SUurf6oSGjGaaMjzFMhjMgwJgAF21JSc8U8eVd7qWD85J8ZFwaSAFQ6D9fFTrXSwNNDsF4YHG5YZwySy",
  "key19": "5ZYY4Ye1tfxBKfWpVckUAXACAdL1qmEavCskkQPiehCJGi7msceJfNSdp1Z1CE9vc4FHsKBbjCLHtqHsCkmZ2m3e",
  "key20": "36fPPxDw9p1bPW7yaC6YiWVvWNoHmiBFXjagC6E1p2yTGwZJjEzq99JvzWqNZ2QCoV1iqe6PCW4u46hbWjzAXLus",
  "key21": "5kNNq34dDJDbbx6K9Me4tpFYL5KKQdY6BafeUpWxXxFKzmh6RSG7GVxCDHNa5wu38azpKqyNtPtN2QTqGauo4UsB",
  "key22": "5CqsAZ1jCgbbinGoBGYKA7TUHUhyn5jwqYUyn2AzhSmxeiinMfEBGBdyUpVMN27hLA26fp6y9j6JRC9smtw41yfu",
  "key23": "3hUtArngAqf1SacKHb5rjEES15zZ8WV54e3wAEigPNZvPXM9Dtzh4RzQ9SjZ8oFLT3X1mAfbrBC7g5mGNR7q6WmB",
  "key24": "3LFKQM3ZEgQoWL4J5yVsY2qceMke9kuJxKejnETFRwsCbhZtCaeEDaWxzsEf8AahEo3mVXoUJw2VC7etj8hfUMee",
  "key25": "5zMQrTJZ5CSkCiWNfoZNDewBAmvE5PZUAfViDT8UhjKo3CFBsNkKFnqVm8kX72USfExzmvmUGX27aNXi3yJuAVZu",
  "key26": "5ehJXtVjYUBmBStgaqALVCxGtMWSAtdGeWFxSeFRby33yBYo5WNnwYTm2xyGJk7va2gpQRbuLf11Zsaxs6iEL2u2",
  "key27": "2BzpCv1C7K3nT1biPkfjPvNMPBvqcxaxAy6PqW7THqWWzBDjgQi2PdcKLnu9QYU762cZLvoeNSRZVTgJG8PgrYUk",
  "key28": "wTemzxGhZZat5gPEkoSWBSk99zj8dSjRz3UgKtAgSwKrowpW9koCRXTPhwVFswahF2bP1rwZ2UzNK5Gj1KYN19C",
  "key29": "3d8RydhDQUbkwwsD6F1D1McadfVgyc7Dt1ak34K6z7psPfycCnntLFT9vP4N4vbCL29pTtEzfXAwh8DBvRydsG4V",
  "key30": "WzYt78m3tJcoD9c7pkMG2aYMgt26eqvtYVQkj7cuf66P1otRfveiUbQayT4A7PNp2LAkJAVc5HZYuzF4tH6nPrb",
  "key31": "24iiyFvixoEfnvKZuhoHhjZCo2DEdmrTxFvP4XrVpNDLjopBxaCVnQq8oStWjDu74Ah15Pbto8EG9vJ9238aiiLx",
  "key32": "4mm5WHNuQc8mcfEV1JtGAMdhvdJE1ivL7sMQNR8wTRJ8oUCXfejhr42PLoxsQfskBamsct3dXTZPeYJ6Q4c9Hu6y",
  "key33": "21espZQSfMouaaWR5jAEpWUcbiSnBqQoC7XUttGX5CLeiZqDk7XL5hPoeiComLybCgb3EjvNdr14KXaj4QRycAph",
  "key34": "4i8ZUSXfTkcXWsZE8zKY5jDRAQ6oo59xJeHTP46v9EhDRKZivRX4PHPfpSoGcdny68Ucq8DNxCYgyPbhCcy2F13e",
  "key35": "2u7yYWxefRGywof2kWhWFAM85aGKjidDnxV8NFygMNuNy4Gr7Ua4j4pDrFEoP8TLRbjKPbZb9hWhd1gmhpskyR6h",
  "key36": "4hf9j8W2KncueJHWqaT8qd8m5WeRxabnxZspDxjzFLfPnFKfbfAVZmJfa2t4hKjpMLr1w12FL3iiVtDgWXZD4HiF",
  "key37": "5dHaiHUYcSjFqsCtHgqyZXzGawyVPkhsrSNX37wBkmz5ea7zhz9qUpkBD7RANWr9xfHsvhk67TeCB2rXtNv2WfFE",
  "key38": "uQFhgUFusZ5bKJYYypSmpgWb9U8zA5WaRLYHza3oAaeENarbb5Hsy2KHXfpVriUw6S4rkbmPcwRoEAFn9wiKKoL",
  "key39": "3dor8gZn6jkMiF1HvgdwFcwiBFj5KUDi1SDqffAfjXUAVACiTK1sUNsfFd21wgfBrsJ2ioewQUEsejhiATLBzTi1",
  "key40": "3PyaJ18vdgqoCX1Wmm4Ud86ez8fvktKVm3xARFyXvW64kAq2LVt8ZM4c7pKgUHB3HjAJzzq4VNetU7e5JPvpPWkT",
  "key41": "x3mrsgRRWpL5TA9V45SLjXSNuGcRKVnfob8NHjP47vwCXgboRMFYNQo695xGMmYLDiCz25Zjjop1KZBTHA1Lakb",
  "key42": "AjLWvueocRRzkHNR1rE8373GCMYNLrgDMKBdRxnTUpFxjGveN7UJkpVgYL9HubE95XZyhDR5VcdAsTSRNpfcWtU",
  "key43": "4i4XpNSB88kF9QVyQ41Qj4RC9fPiadrs6brECEuyXEvBYkgYe6eZM4mmmA485kquzrae8MAeBA552sgdbqnrJi7T",
  "key44": "4jQvhwzcexha6of7SjpBsVabpNVaESVVMWKVMDcJqmSZX5n3ubef2LVjuEsssqae51suri2wya97NW3eUPUh9S51",
  "key45": "4YDwyUikjjbaSF7YfviyDWEdwB3ej4pAQv6k9zh9DCpX31dZit1HgcruhQo5w2ZjaagCKQRJE1jvz7Vtez4BfzHh"
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
