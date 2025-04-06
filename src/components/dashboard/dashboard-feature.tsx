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
    "5tJ8FtKtSCunZtn9VQPVXZssYLAdGn13Zzm5rdKSk4V5JnWH41nwtCok827zqbNWoTVu6gTKPHgiAqi74R6N1nLo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uz3Cbf8StLGEsnMqUuryTZWA1L57MZYEzTRMuAmsiKE4Z7U52gLUcieX2mSv3LBfcdm7KxNEz6rAnokVay7SidE",
  "key1": "5ckBLYv46nnoPBC3UmNoTZh13art7zF41U17KepSqVLXx2r9k9HLmkG3wWHBzoQawymXoSWRnxj3BdmzzFWBMcEu",
  "key2": "5rvB6NeK7RQBU3aMqkTRvXyqNDjFZKue9BR7UH9a7z2qqa1Z6gWhsX5azk3gLc5679HrBC4AWiqiz7CP8KEi9mbW",
  "key3": "2cA2UkiAEnkiMjkQVBtVQscJvRSNxsGXecPAAdinAqrhBvCALZc6hKgiY5sQgu7KeRMGfeKGuxv2ksvGwvCf7br2",
  "key4": "5MXiDnHvRyRYP4QKuRkovmkC4udiMw6uPvyQnALsPjPeY8icGcXZdgwkR6WVgZ5hbrVnK7KNhHykXGm2yxnvVGdb",
  "key5": "58LUWftE8T8QMc2d44w2kMvWkphQs7ryAMf75yhv2vYGz141MRasiViaWRM2EHm4wAJiheN1M5UZQ2t1zkdJdYHv",
  "key6": "5V8d2GJMoYZtrcxhP3q1s4TsiUd2Krp18f3RqzLYzHrMbGHEyperF3cCfFyvg5vYMKAr74NmBNLcfxK8Lwy4yH1P",
  "key7": "5zFDQnUC7NdLL3Df4A6ZzUYf96qTFyXyprpHNzZNqka6JoEop1hFNNMR6dMc7jht8eFKwTuEoWQiSDLCLGxcDAVZ",
  "key8": "5reh9g6Dxtgxte866t78WaKFYXw5aY1dLHSPztZ87CqYrQcudd9HutnAc8z3dGj7cZCRjVr81nheifnJ4XZxu3EP",
  "key9": "3CqwrQXyz2ciwv4iYa8vSBY3tkMxhVj6NCN64Q2HQrdFUqpYktGJSQuWy8MNDnb3DTKtLVq726omh8Q1yDd13BkZ",
  "key10": "4fZmUNo8DSCTDpjK3vRs5tnCPQAQM8goS4UbfEjkwwywgCBYA847pRvJvgtGXFoUWwKB1xtMaY2uExKea8kbSXxr",
  "key11": "5d7ArgFudB2Wcg9TCterS9KZD1cmbfJbajDxXsNjDUZ69FQXRPjGjEzgDDDADpctKjchddybLGJYorv2zpcs1Rm6",
  "key12": "3hpxV4XSD3a5gJddmq4pPLRVwjnbcUxBSrqHGC3Vpv9TyHuybYy8uq9fW5LMdQ49TY7p1Mpdx3Bd1RxS2haGnzJF",
  "key13": "4DFRXo7n4LwsRZTTv7G59rtqV2j4e2NtSLMQSvbnAo311F4pnsLrN3t2wQ9uMaDCKLt4dEbNC7gB8XCY9ebix9zN",
  "key14": "4yL3uvkWDNDiVdqEhvug2uauyfS2oVmehRexn6xCzYfMaM3tVCVK53SueswgbQ2iTRZq77B4RyBP7z2LEKsAgBzf",
  "key15": "2pnjCvv3iXov35r4pZQEHPr2aoxWf89VSkQpBFB8ve6wD4nzM1M3qdhTsQxt6Sp22ihQkENYfYc4uP9eatejrDYZ",
  "key16": "5fWKKZGDVvKb6uK9WB9BHcUUnsAPcXGZZPXkj3u7YjnYKfPuNEk2ESC27PaJq81k95kbLmSWrb11Bqe2epf4aTMD",
  "key17": "Bt1KzoBayiWg3wbYZNDVVXb86gHc6so1yRKH3eL1GCtWqme2fCXx1rwf4wkVZ56DsSuF3AiTjUdwS7muXqTGtGD",
  "key18": "4NS1yxibzyemnyi8rDomSxAY4WMQQWV1FQYBZer6sYgsHDPJyvKgjQDCSqWB99xya4Y2onUn55poVkzNM1Qzaq33",
  "key19": "4nKyEuJ3mf2cSTzGTo2oaBTd88XVqFLjBLg9g9vzqiVoyFWUokS5UF7XCBKsipWVj2ys3XRdro5Vqmk8DccQ8z4P",
  "key20": "FM1qWs8yeKijS6nAGjcNXN5eExzqAxxJRzP7t3NyPT51UH2nK5NKZrsAyv8rfCrhejjQrkuKbZJq9Fq1Bf355n6",
  "key21": "5JFqDmxehW9STsBR15wJaxiaWnh8Qm3TUX2h2h1TpVVWMgu1MDhFEWZDiwckeM5w88rE2Za7iwqFji9ZUJHBZccd",
  "key22": "2twsotfYoY7Xz8X49tYGkZg7YRCHajJcV2LXCkfG3J8jH1mMxVK2oCczUY3uwWV9ioo8G41mTPTHWgW2quchDkJ3",
  "key23": "44DPH1ZE37HYuLwq831CTLz2PxC6ytWm62q8V8qscTeVaFF6UHdHZr4q4yZzBaugHe3kvVgiV6mcrwbwoituAr5b",
  "key24": "49eNXXchJBRdz8ikJisUe9GLurBhDCr6VKYvMEJrXHEjp3dGgAwVNRE6Em6jPRtRzYZPaP2Bg2Pwg9tv7cUpLde2",
  "key25": "39oRT7FbxxjpaMQA8TiB1fdrKyYixVvho3DMQU2dXgArV5butYFR3YzyX8pB7htAqHTAG8xrSUhFw3CAHDQskPKJ",
  "key26": "3HdfGCPTb9W8ZeFKDRzC5WZ9DBB2RFMzq39hGfxuJwtEns5fVK5JwYpbycUBotFK5Na32wBGpxbSiQwapYeAUcGo",
  "key27": "4TpZR47zft6fN2eXck4996oD6fwRZ2YrymUrutYs8hqNaX2y8ucLv3MWzYLQBX9yiCyicnsQEpDPNaqRLEp6kRdS",
  "key28": "2skekWYvm8Yuxp3M1GnGR1GoUsHHU8bBFrpciDZJNseLA7csCmmBincrxSZiUdPe2kDH8sFsqaEsjV7GgLZ8ZXgc",
  "key29": "2TH7vfP12Np15ucAp4TfBxnAvhbgpRmPRwYGFX4skMBhzu1cirD8AXXbVMq5xnTnuHvkjN3ZU15N7NiKJagfNtsj",
  "key30": "4VdmFXHFx1MibQwL7qusvYSEdAE86VjM4bZhWnTm44KDGATqjQ77JBjDbm53AVQf1Wk8fN4fwJBGPMtsAca66mKt",
  "key31": "4nVbKEJegzJKEADXXiWFphMMGhQVHApsqTiZcm2UbBPMKHQHftheicjd8qCoWTYSAiTGVrsjUsCNb3PQ6bnwxxZc",
  "key32": "5UvvT6iR2rNVTSt934rVcqDgA1NR3F68CiCVy3M6vBwMwKoP9GA5Y2Kd4pyvwf6nWWHjtW9mr8hoJfAotYWF672Y",
  "key33": "5KnR2zSUHgvpi3Hz11NG5L6o7Ybfkau8uriUMe7UgbjRgNqpDfVZS2oZnrjRtZG7Vg5LuRqECbtw9G1iQMUZPoam",
  "key34": "42R1iCrMp24SXrv7QsnBxMMGxBd5gZWhYHxGMnWY6gCGGEb7eSCxLceo8TXmbsRTvVhEptVCTkgnyGgigQ8ey1W2",
  "key35": "2EHmNvd31dY28WSTDpjcwgNCCPhEBqXo6gSMi8PXAR4Z6y6NWXTbzj6jS6aos4GWU6J4MgawMi1AQZc2fGfgbkuQ",
  "key36": "4f4uwkqrCjWpEFHLsuGCesthVZLuF7WCsCDojrrot8uPcWqUPT6AyMBSyNpp1VsF7qs6iPAXoo4ZTeNDauwL4Xih",
  "key37": "G2MqFzXYg1VGjCoXimY95G4GiGuzhATUxoo8Z5YNEAexJSvJLd7VBEfmKedUDgEJp3N8qpNf5ZdiZVE9ZxDK9Py",
  "key38": "J5jBqk6psqKB3yZMFHE6AhbMhZdh3e3g8SShXxa16cRnLPdKLeGWZGEfwsAKNXaksBFLM9w7qCBZdxKXcuJhQaZ"
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
