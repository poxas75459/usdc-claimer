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
    "44JbwHBN1U11vwGvUak5Fthr1xKv9nNiM1BCGKLky6GSVEtSgSZC3gnb6ZWYDSGTYppAqr3xNHJ8V2kbpN643MZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kDFZigpSjWwP83B7vptyZ7939ubybS76WiRdR6H3PeRpZWdGe7izYhZHQhkgNFLCAzLNwsmXUsXrnvhKKS1T71X",
  "key1": "2ZG1zXtAskgHc5ho3JPjEC7cpXnRuKTp32n8KbNAAarX4QmpuKNZ72Nz737CK5Nk436mcXpbSXVUB5PBQCb8HRFz",
  "key2": "57CujGX9X1zqQaxDUdrh93m2VMz8nzwLuBsyDVfFEhA2BZpbTBcoSqkCkN8R3cs9JtevFbx12Xta2LbEPqweTRo4",
  "key3": "4fmML1MCvsUGM3mG7Dov8TqDEmMgbmd7mBQGaVGiUWCc1LAQTAhHAK9AaxSrdKDiRYZCd3zspAJNTXXifYT9aCad",
  "key4": "3R8yoQUrYra7K4gz662nX8rwxFcP68JzQzd7m4cD53LANd7HgMk2MaVx6wP3NP8qPu3Y7q9L65troBY85rzmbu6K",
  "key5": "61uYmMLB2UbHkGX3mpnZkcYX1tDYtuM1vovw7nqqKCXHLmbUnywd2hS5Us1S9cNxbhwc1X1MgZh9n34Ea1dBhpqd",
  "key6": "5UJiRCsDYcWeJF5yaMiNAiMs9nXcEtTK4XFcR7YL4NkMyTXBod35ysDTjqRL6jNFL8W3EvgJ37zGUwfiHgRgb82u",
  "key7": "sBJTUkeMwjUcw95NtngjFBqqQD4RsiYDrCL5HJSUFBYBVaRJX7A9b8CrZ4vTW6vDjPu7ypKGLfwYvJHgP2pvgfh",
  "key8": "1zN18KTjxSSKGriQkwtCMpZEWT9UKom6CNYJJKtbiQ9cQD5S5LYJPSZUwUG4Bf5jH52Gdk4X98eQmXtNndvNsNA",
  "key9": "3Qv796E7z1z3BtF18hfsLBEq39uE8egZQxSbeyp3Dq1xw6cSKtQsySqdHeFkVR1N58EXQSjMBuxiDdUPiMPVXVRW",
  "key10": "hYXGebnD3pTudDkpXfp1UqkUSbxRX8NiB8Qg4pg2TkQ4Qjf6LtPT8LykktDjuMKAWhsTeBz7UkCFjYj3sBRzirL",
  "key11": "57BnpB1rrpRSV6eXXQeSzJDuTFmakH65K86gqaSG1fJ66rbaobbPmBDBoWAD3y3PmBNKUESC7B9nz9jARbP2JzzE",
  "key12": "2LSDUyrR5xvP8UFBUxVRSq2cFgYFV36Um6j2bKzzx6M5hfkRMLMXQ68Wmr4EZENtRVGjupBP3UNMyHpAjt8GxAEo",
  "key13": "5Zxam4s4KF2PX4p7zgueQ64QVytTtWyFzZSL6KJK8jeFYWxcBmrbuijNjVdSmv4eVz8BuCRfi5WxhGND6dVbUVsF",
  "key14": "2n47QqVTKCq26xzhSYkZ5jwoC2DqoJ2mfyFq9TKMEpbgNpsyTdSQm7p4MJtjShRZBPn84joDL4voC44BBBkD4feG",
  "key15": "4andSUK5Cf9zRa9TymwKCzvLQPQPMBx7hmonXksLSf81H6aJVLCfC1rMbF75tTx9pp6vhrPkeu9MZJmQPinuscya",
  "key16": "3LJHjAEUpBo6ek53o6PZ31B4Z67YpSe4UB4JAu93x7c2bT3jChiRdGHoUPkwHtmeeCTBAwiXjJ6fh4ACV7jEP4bG",
  "key17": "5L25DFpEEisgwrH2uTGRnnzRyJoTAZ6SqR4qTWcGkozEt2QRytStL3K3MzZ69yGQNUWvJP24v5EsQ7bySVdWkbmd",
  "key18": "4bJmc16KUrdeKo2MYM1fqgfSbPrpgLMCBemd8rUkFLmkS5HyxRCMxrC8yuZSzHu1KMXDBbbVToe6LWMFcpBpyuvN",
  "key19": "3oUSgDUeVY8Txu5tqsxnRmqAPNRYSktvB1wCu6aEpF8e2cpGJpEf7MnFS9jDNWwkgYW9xC4Dat5LeUbP6uzHoAxX",
  "key20": "3HRmKu2Ncf7QhcSG8bQbtP5N85eS1MFwAEGXgrnJhyC6vwSnMa3wpZcVLRtRefoCTwWvjUXSpuF7PuzrArxysoMi",
  "key21": "nr9cir4ADfdZUC78DN6ioBUe47ZoKYwwujREQ4fCNzyUo8Ms7nPto8TzBP4DmWD3VA2CPFPdRJ4hEGyD5FYBdk8",
  "key22": "3TxwkeGwzvPvKw8i61HjXwXousDXrMtZ9Hu8bUHbEb2r6KzhpKU5MuYBc122mEYTxPXF8vboHh3nDEvuqL4R7pqm",
  "key23": "4S3w1sLuvmnAs1Aur8UqVtR6uwT9sRMExTCHjNSaN4VLGYz36Z72MaPMAnzCutPkQJqwbeuKrnYEBa9ytARsoHAT",
  "key24": "54eZ6wKf7d9NFSEozf1xt8F54tYedMWHAy94kS6LkdKgE688szXojXAako9KGvx8RW3NgT9G3aK6435psEevVj3V",
  "key25": "26EjXcB8K92h5RjJbNrQ1CERpBukhdfjP67tUYoxJx7pdcy34iaEDeTqSpNJhUpcHapnQUZuCVg1qKTFJcD7L4ug",
  "key26": "3knhVdGbEBxuYypWd1wDnLEMUhPdMge3Eojss3QvupA7YbHTuDCsnWa9vSMpoYBrroinFYYw2Q1SZ9Exu9PvHQja",
  "key27": "2ytQUABZgdN3ScuTrvkQvubDvKgFuigGWY1Ee5sqpoYED6eXMiH9Sucb1pCLrQjJVZSvffULHNz6x4s8tcRuuS2G",
  "key28": "4XcpxXZ6Qjy17TUV9ShJnfTHWLMcPBLARJCTVT9DkcgoDE3Y36QYWZh5N7L5GDCktRoJ8j3gCtUTBH7kLbYBJYtG",
  "key29": "4RxAh8sqnDp5rbr27Mb1dUdCa1BiKRF5VkyngHQFNuZPfHGjP6Kxor8MLgQFhA8QdMenE5wcWdC6nRhujvd5FeRR",
  "key30": "3ykmAFfTkmAhUH9B2fgzUzyGfSNEeEN3RnKe5SbQEKfxDXo7rR5hcr61wjQmtGgAjfELVevEqiiwfb2L2oKj1BXu",
  "key31": "3oziCDzxCuCfhVwXngDyYcVU7stpuPg9ej99FimLCYMbPowtyVv4vfS9abLVd8d5BJgvFbJqcSLCNgpvU8vxT4Ny",
  "key32": "2bq6P93YwDufY54J6LQudRmht4JpjW2d63FsK9piYYRwXzqDYC8LtzEzHT18UdTZgU9YL5J6pwbeY2Q3mQTcUAiv",
  "key33": "4AC2iK1tekGBwziZuZrCa4hXFMJTf2PUXnz98bMhzMCGvHJTu8tHHrTe2HaF7CZiciozyWZaCd5sQotpfxS1B2vF",
  "key34": "3rujRi1H2YENLVhJmrev244Uj4Q7KGyMH69YPqWwaRMqDQrf2xS86rYuw3XR9mC94u6D2MQvygNEGhWQ6vwqVrJA",
  "key35": "33Wr4eCVNxX72P2gmiUXEhrGWMBh4PiNxUdsHChPv2MfJsD5LhNQaQQU9XGVSj84DzaeZ2eHWH6GuwfgWHRxRPfy",
  "key36": "5H6xmzq3tKeSu7ry7xV1P76PVX7LL7cPSwwgbkqURFBeRU5K7YsA5EqwnbuWwzpaJbKNWEsPhhN8L6PzETCsG4id",
  "key37": "4S68fyct2J2ojaumMQZbANGACA6t7vynSguEs4nto6AzvhkosmensU9Dmh24FZ1wkdcYyPxibfMNW4cXqCUp4vwA",
  "key38": "TrvSpcShtXo4Pu2B7HQ8rN84apPJdvSagKSMgd1aeZb9QmGt7UZ3XPyX5nMDGGcCMP8sxhXVZaYqGXw2sKFfShQ",
  "key39": "2X1s9cv5vnG4gU6MaYbPQQAgULcM9A4wCPYXqhrXtUuKdF6gsxX6ifxqMiDj2Kfn2xZcNdf2vTUwfx57ZY5Lm5QU",
  "key40": "4gjGavXCcCtxSiRHtzzHiUEPKMBsH1yKtUdaRvTNMZjC82WR4LtYuSxHJahtK7UqNubemvTu3aFE72DkGFw3D15N",
  "key41": "3VokERWf71CZZRzkodaK68kG8zFm225Pn8UqoYK27HXvNFd4V6ysxqzzXvCj7fegHJV7zrhWbzNTo4VSsKK3rgDf",
  "key42": "4aVyntq5jZ6TFgnCP1ZoRCkbN6jESczFBfN1tJmegNszVeYzuFhAb4asUug1F9J2Vx66ZtCJL6jgTQJUrR3Jz12A",
  "key43": "3sRyduvjbesLTAVeRbmrjbHy2vQs9R4MPFb5FUG2Jr2FRTg7khvfrJZuHZUcekt4wY4fBmNu2d55x7eMeQBFQyMs",
  "key44": "4hAH5Dyi88QTsHK5mr7kaC3VaKCcUWYi5UtPUDHSCY15snojKKcPDWaimkYJrWhr6YKoADdsGNZoEMRn2L7bp2a3",
  "key45": "4DocRPSdDPVrgmoK5inLzSU8dnKjQqAxWRRHB5362SR1A3bXMqucEecNJajr17FrGWd2S44ce2Y7xsZ6QXQCJfGt",
  "key46": "3w9QRPrm9PEy6g6wocCF9Z5gQX9bXxDFeLY8kSym8RhzcCqptZg2AtUrdby2XyZvraxKJrHA6tnGmbFcZBStLrjz",
  "key47": "3JihxKdv1JWr6459qBW5VpSUss7G4RMbrS4rk8tSShnPsFVjmpYtWieKErexj5ZxmE8SdtdEe17gcuMbwxfDjSAN"
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
