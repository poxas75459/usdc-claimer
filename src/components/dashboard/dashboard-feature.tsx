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
    "3yqFcuhbW5f4GdaUt3scnXuBU5urBgTp9d3ggpDy5PzNxUkJ5LHobiiMD7A2yoWER2PXWVfAUqmzo4AnBGVM9kFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kC2Jja6MV7BZxGKiUu4YDDTpT1JrRqAzW1695MBDrDg1S7vse31VCFzcnJEfGzHGuS2M5czXwAQe1Sgk65nQxhZ",
  "key1": "47b4UuG5jgGDyGpCKaSVj76QMGC1ySg2Z8hDaigC26VXDh2Jw4xEpxL4gnq5YJYbTULmUnwcajnLCGsvNvVYA3Hu",
  "key2": "561vQRC8aWGgUTDkkszq7qqH8V9VtHxUH7byNchvjhHTpDHp64QoTXDv5RqQrjhaK2jeFvdaaJ7UWxXf9r59bvBU",
  "key3": "3qvid4chYPJ7PWReqFyKUH2dRrjPyuWrndFzFoHmpAYgtkaUxFVwoiiS6NkErunfopoNPmCbVDWr27Kb5sCLY3Zo",
  "key4": "5DwpthD6Mh8fnYCg778o5uHvqJnjigSV3fSYWxbxNz7U1cVRqKsZBYDW3uoazFuZCP87T8UTBgm8b7ijVActxKLT",
  "key5": "4QbQbNCTZ1YQa193XKAfxCDimK1hjmGxJNJFQ3gzc2upnhkcwTJkw5LvFDh1P3oUg8x38Tvjqs12y9CE4CuF495Z",
  "key6": "3b9aoLLqmtj64YeHz7jfXRC6wDzkQhPo1LEi9jmp3WZYzEajs3D3dx1rAizqMocMjKhcdc5gvkZDnVHeHpUufeX3",
  "key7": "Q4vGouzy97DHNSYLwN7MWceeZfisfpnr7eLVi67Cd93qGCHWqD3sjWL2s1hBypJ1SSUFWv642WozgfGPts8vvxE",
  "key8": "2bQEF115hUWRApRsFTiySSrm4w44jykpUJuXpAxSotSyD9Pv3M2gmTwGPPnEfev9GvDAe5boD3ihebm7gDGbdZhq",
  "key9": "sTRNnNMebqP7YYiSydsCf924cSTodav1QB1FhNu8W7ANsPdCKx4er2PMAXuD1Aa6F3iZngzmfJUB9BL9C3m6U3X",
  "key10": "enm3H6CKtegqD5ehbd5uSj39MBkrCopn9nqi1izSy6ZaGrY43gqFcqYzPVwKEYvnSVg24FK2hD7JHqpC92JGjmG",
  "key11": "5T8Spz9XJbUkAHBU7P8CZcayFjtS89EioUWSdwoiEiyTiXJXmcqMn8oV67NjDMDernMEQKj128m98qhBHGj5cAY4",
  "key12": "4GK5hhSVGU3w3ykkDWE9kious1R1Y1bxyjAYhEMj7hTAP1sxdy5QHSoiptYPYDZxyo6Z9JgrZGkiGAhfouJHSPqh",
  "key13": "3NYohDBXpgc888XdJH6SonrmahiHLLguSyvm49nuKPf2fzyfqQvwJJYRZNCMRUSGb1EdBkxYZn8VD8png6tNfuee",
  "key14": "3WdDbp7PSUg3PzfpJCTGFrQbfMvhT6Xe58TFmo6WM6cfeehBhKnLG7oLJydi1JJrKNc6eGHnDwfZoSUsRSrcnmHH",
  "key15": "3iqYrHSyhp99jgXpucWTFASsFssNCMmof7D4ne4DfXiWCyZxEJSz5m98Y2uzkKGH6DutHBhhsPH2sUs8u5ErhvRr",
  "key16": "5aqjwEagSComsBdxWxh3PotjdTumfW7paP9ajBvCTfE36HPBLnN4Th9pGkKcABda5tTBWVshH1h1t9rhuckcsb4N",
  "key17": "t4gJqPn8fyhk4hAGBCCrcPQeqdx2z9WbPL8gsnW1DW85DcJXhCQHh2JjmqFeZCCUGAodnjVPKfuSCq3cMnPxsYd",
  "key18": "36LPhsxU3QmUQMj4cFUy7rYfAEufvtd23tBLxwrgeWuaDawFVwmpYXna32AzU1ExaKVAej25A3aYpTfUbAJYmYsi",
  "key19": "4ANQrFeBWbrFtMsBE7ZWbNze5ZWaDzugfteFQhMb4apBPSgFusz39yAMGB3y4zu9acZRC2fNDxupL8ZdpSWMaw2A",
  "key20": "4tVcbTobU1idxx956rcCjc8gSdvYocmu6Ljx4UKDsTrBV7RR2T37UaeKrfT1utmLUgRBrsDpHDoHHXLp3exJPHCa",
  "key21": "3S3C9vH3PBEoYQjCV6Hk6ZXXgLwBonBwbQfFFs1fn2wu8HA8Th7kpwoS7rKXqZbDELAo6ZcxrPnS9iv4KcQZgcj7",
  "key22": "2upJnqcaiDkBqef44YAuuu5WXM8up94s1KDyjgdsRNQRUKD9zjHGMQdUeV8xBgNdStsRNo8DtocCaSRZhiUq3DCw",
  "key23": "2kqWpXGt5CiH2y5VPhyvPxAJtY53TzNR2sjkRz3TTQHK2xPbZpdWGJ1gtSghUwRfJsrSXubMmGyqnd4BcERsruA2",
  "key24": "3LafZxDYTgXErp5bMtYWHaRLMAxipBmXKLv5SUB32GrPx2NfTDdaZwyAVmWs3K7ffRPBE5zgj5YAApX2u34WrRQS",
  "key25": "3e94byZaGd6wVbYyJ8eq1uF2DATR4ydSVHKczQkLC2LaCyDNa13YAhrDizoZngJyzMmNXTX3LsvAgTrHPmEf3gAW",
  "key26": "5SnQASpfkr3mrhSScSCoohUaG43KoHN7g1MeCfub29jL5rGiMmgvQbekzHGaePJt9J1aDHjZCGiNvfg761s25xn2",
  "key27": "5vWqfuZQe8Lfjichwy8Kg3s9nPtqNhPbR3SuzNDyXm8bgmb4njMLP8FZ6GZZMgX9kAJrZKBuhxy3ubSvWZnhSH8E",
  "key28": "5r1WRgfhAcHLCdiwLcQSwgiExsvd1fWKxhde3EiBwKacV7a2AfKHVp7ixzivf4V3jUsYUsxmKGNmREj5oN5L4EbF",
  "key29": "5d8RdvPoRnNh85LWd8646o1zfhJrN8BAWEb2RD3Hd5EaansRypvfZeQV6HxZxbLnfy6G7xDW4qR5Hg7ebfFJUKEx",
  "key30": "91aUEz1wtx7CCPe1A2XGYEgNhePLhvhnuM9DB5L3QxZBGkxF9R1kmJfQKonUTjT7o2Lqya1pUexwMUFFymT545K",
  "key31": "4bCTszPryffC8TC7uVbQsqLYfJfd6yWSMzQUs94MhuvHJJ8UzTVDJ1gpTnJ3pXESvNEJB4Xe5sRYN4k167WRwaD9",
  "key32": "4p1CteLseC87GwoudTrP5XPDsk5QHgsKudnieTxwrUjqQFiDbuKuyZ2j81satvXJKgCA7B5bnYZR4TRAqmWXVFbV",
  "key33": "5LBFddXcsZt2MZcnwV77XPt6cXABAXEuA41RNQSAzNpPf6ejMvM25Su7VDh6q7oZkabxqgppY1UWEUStDLNDZyiC",
  "key34": "58cNCx4KYyqDpcsFDyFUCxuhnYqyj9uetfcPcZYZDQr7kaAJsToYiEfwejhDywrffSPJT8RLLuX62c2uXMTe2Cum",
  "key35": "4p9uRhV87YUbybskW5TCpNR5F8Nz9bnS3GvJXfudHNqk1wnRZxmJndrsiXnJkrYvc4nn1A6QhbcU2ZbUuh8YYVt5",
  "key36": "bz5twcJj9rJu25LwdxcugDpsrEFA83HcqkG3Roi9TzaUWhB5J3YwFkgwojjVuvafiWH9Q1Ux3Z7QbG8MVz2kyuF",
  "key37": "3jEeVFyT6hVjnTMDRtTy6bd1SmqxXTGFAfNnsT4GT6WwDDLRLFnNrsc8CG4yhxp7jPXLPybjJiUw2VegPsVWTh7G"
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
