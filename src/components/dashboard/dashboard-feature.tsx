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
    "HwGAr4D3BcdEDvxuGbSLqkJrRPEQYnGXwNyz2icZspog9raFVESUm3Qj7KC3rBUfDUoo5xcqciXNQqicifVoJcz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kzWrmmzHrjEPj2Q8UbMb4kb8JzFB6r1QixLQ2GSPNd85o6uohSXdzXFgjNmFCNSTNoUMTTFtKXoU5zbcyU2pVQm",
  "key1": "4w1miasQJtUUgqNrQzQBWNrCf15o55BNfZPkFjqiyaDhnWQLf1a4V1dpqj9e99fyAUzDrA11McUMt7SvKaF4MYUZ",
  "key2": "534TZcq8r4PUe12V8RaZkEhM1VptWRF4stRCdcBixZTpbvacXrctQqNFZWPUUxsAhTPWuPRXneDV6Une543FpXiu",
  "key3": "5LZ6tN7o4FmUmrVogZvqXQh58HT5CN2B9CFfQSqzAESn3vko4HozkGQVvpqRVs9eFn3wjbWo1oaVGRKXYV14uwJN",
  "key4": "3tgXmY7EhLWzwYa5ZquRq56ujUA5wmJNiW1sQjoJxBnMpBvigWzfxvmFkds6em7J2KGBhSL4L86wqjY5t63coLGY",
  "key5": "4Zc55S3geqGTHwaAPVodtt3BVirHAuXtCk6nYeiNbwAXCjtWt1cESNBhNB2SfHQzeVhyADuAMPnbrzF4iRJQB2br",
  "key6": "RxptijWcZkJ2GapcjZAzkLt5MGd73azgGUZHsH8y2Vz1HKHgoSSw9tRFfUyevEmcLKEj8oipfjurmVqtEyjFTjr",
  "key7": "5JgCU29hirdjESudYFFPTKD5w9sBfpmfUFgN341RzgmiTHKPcux4on61srrurJUSBCpr4xRzPTj2XejcKHFzVdpg",
  "key8": "5jwbcpqsfxzmiWF5h6GHxhGaoT5yyAA1DRUFrzW1KCNnCMWj6uco5DQLh6MrbRQznfSWyxVRP7yUj8sL37itPRdB",
  "key9": "4h6bEpkeTUwJDyH4Tfg9GKwDAhAwYSVhvT2bSGdo2nHjGfLc1oqBpH44nP7tE2yLp3mAF8FNsFwFuahMxykDN1kt",
  "key10": "5RFHumt85oxDvZU1cHU5mMaCy3c28DgsUk4dNq45zFp5r8JCnqHbmJXRunX129yGX3fUuvPSK9D9Tw7BGCJGjnPU",
  "key11": "4mog1yDLH5rTKgd3uuzUAcCytidpahH98AGnfEfDnNR2ecxdnyGZVT1UERaNa8yMDqrWnzMT5JcMDvdA5jeQrw7m",
  "key12": "21viX2sMVoZ1rstwm3tCerAEPS28CheJLgzTZ4vm2K64pun4wbtbdX1aawYwAzQrowXFBZXzbDtW5qrr77iYG9bV",
  "key13": "3o9EBN6LyRjXQgXusk363VnQ3gqZkUojykDiEsA4oWwpBtGLHJu2fb2HYs8wNSPVpPPuqFhcSYRJsw4jfuUM87oc",
  "key14": "5eZcDt6MG4R4A88fjrGsVZQWM6f6LHF5XzhmewxUoJiFBjdYX6iaAxqEFLcmDw4C1e3eS8NMwzErtnt6Z9bpbBvv",
  "key15": "4BW9XaaB74tCJN8boy3n19wjHbLoC2hsYLf2SXaKWdQrGwJBHzDsABMLpNRHMb4DYoVcPzqdVqP91kFWWUxjTHwz",
  "key16": "pdt2yn1bRYLrrj6so2RARyGdzzdMMRx1bhikYqtfhPaeyxnfG4SDaQMKuez4xzWqe1eXMFRPQEPBpdrnLPVf1P5",
  "key17": "5gUaDwB78b61bGokf9YTYGxftxLYHR4BJt3Nad2DKMm17vJacU8Bse3whRVHodV7Wuvo5gZkFjAnSNFF62MhM5hy",
  "key18": "33bJCTf9zEf5ttWxjZX2dMbaWqPaZatkpcH2acWSdab9vysmxJEhXnAYA5QZ5wSHnenWNEZA7Quan5yrmD2KrXbF",
  "key19": "2QKvu9gTN7dRjUbdQmdBLyzQBnnkng6C73kMHxYvSKLrDKUtugkNDY9LB8WWCq3wdXFxfduwt5XqNM8YZEbPVqnn",
  "key20": "NJNnA8x8SUkEPkP5PFCAgYxaVSWipVi34qfhfJa1fLrJeqEtYsVSZqf9JWEUuBWfkvK8d9KEo9txBQSW1pJHdgN",
  "key21": "2vZ1GnEc3ckB6Z7sysbN5Y4mqjGGgfZa5qKQSF5FBh6272Lt8haEaLQhjK5NWhvy36qNaSkvnPTxCj3kAH11KBRk",
  "key22": "VvwXVRCRREnecMsXU1VyjfHZL25hiKKByR733wNnuLUEFWjZocq8LN185VuvdF2s5C8AkeAnx9PevETxK8dkFRv",
  "key23": "vh8g1ZjzMZy8mXYiTf7CDuy3yr6NHNj2FXxG31SFZUZMuMoYLnyRcyouLiK4WpfJRiKHMgL4dJGEm2nTPJ7snko",
  "key24": "3ffsd9YSvPyHLpDufJVd7rUKXskV6jv9yqMz1M7Z8JzYy4uXRLf13CuzLFLoEnSi1rcXbqP9JtQMrBAWbUmwC5LM",
  "key25": "2SaGEcEFdN9QY7g4YEA6ernqMRa3wmguphkw3mQG8B1QSEzHmS2hUGH5R31t18vD32e5aGdnASjsybbpwbBNJXiG",
  "key26": "mZofcFc9ixpwP9QHBYGMTZ49dgGthiuEBnoRqLLq9JizQiFwrnfdPf684foDiG1FzqMUcWp1LVREapQFqec8tQ4",
  "key27": "4Gc6GBGFYecCrab1Cpbsm6ZctZYZNyF31XActzCNAJG3juvpFMYmW8o63mTwwPMHYreHmtbDDZbFDaFLjeBXsdxX",
  "key28": "4X2DK4eaEYeUiUEkoPGxixVk4up9hPeu77DYt1vmhUqmDHVd7TY8qEdfJkDUC78oLkEMMYtXsmd3j1xMHYT5Ymkh",
  "key29": "4w73qSooM8EP4yJuKDmWA7suFyzZye3yuNqgNPNa3DVH5eXF2vg8RkfbVF1mZcDPgzkwwBg6C1Y56VtVzXerCpa1",
  "key30": "3wpVtJGGvswHoKqScCCBu54nEDf6WtBJkBQod1HjrGacspdwRMymkNGKvEqosXw517aaemGdjyAoKfbXXQZ6xRSF",
  "key31": "568YpN3ssaxb2pRZF8EffMeVcbWjseY4JvcARuzUWGL3JswhSsz8DYUctu4TohGc7R6v243TBAaR7b58Z9o5sYKm",
  "key32": "5ojm4bk8b4Mr12G4FSkV3AZU5nq7Ac1LTprwtMqNpUeik8ej92HU2q8ftizkvzWZgxnYhCcMbVGTgw8hh8N3iQsF",
  "key33": "42etLcccWQsHK6brc6Tvoz79QijEEV1XE1CiobyF54s12cWKd3Mkt4MZYAYC2qS1qEqTpPXxrChmUZCkcxqA1PZP",
  "key34": "5Yq7w3HEsbKK2XBFHP9SUUgVyE1nCDw8hzxNiCRAoxCcWWfGwTZwBt4hsRbZeYWy9vg62KVgYwMEbEMBnbMYFBz7",
  "key35": "5DXTG9ttz14xmVy2CHBGe7dTwBYDtnA12YfAJuvqMM1KeADhD2dpwYELaZ9ZJYnL6w2Vdwt6BNVLZ8gMyEx9PAfH",
  "key36": "4bvnBRGNzZ6pFwAvvmqihMroJ75Y2hmoJFsmSzLibnQFDjW6ttvRarAovSZNVH88cw15hQbPQFYiJpcpEdS5KPEc",
  "key37": "2cTzhk8EoaE9PBZJ9jgkGtb8wmuEs7Gn3NimoMDKLp3dLKBc5eAjdqKG2beqKQ3QCjUqJuAWECMJ8uaWGzYezFsT",
  "key38": "3oZXMibVr7E8dRv957AP89CUPUQXoN1BSdBykn6nTJijEdXgTKdXVh2nBfu8mbPp5c244H9dLnxLy7TtvA6XNEaj",
  "key39": "4VbzpH2jQnom8hwgCA6UNKYAFptZBnxG9krXqeFqDtSHWCjLb6J3ZDcdYXftUzHwmC4qnreeGyvWVXjdwoUp5CzA",
  "key40": "4ibp48oCnjRXjhmuRRs7SnzkPDqDeRz9LaVFhuzNWN6DuNxi2sA26AVZSZ5X4TPXLJVvnscFRTHycWQbB2Z1D4S3",
  "key41": "5LLyexnk9Jc6AkqtRZyxGmj6J5Pkt5q24mjqozhVEJuJWXzRP41rGvQed5uMh36xFGx2E4m3RTaX9KXGJsGTYgqz"
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
