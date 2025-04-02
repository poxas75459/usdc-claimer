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
    "4NeHAvsM2oZmmMHtRLw4WFYj7VCFJKm9KmSqTUkriZJFWwJAw1ke54YFQF8CSaiXjXtjkH5Fdq5A1gAGB8fqLQCu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UvjtXmcL1c4Yk3BuQJahjRFeeVCX8mDWZsXyF75FBKPkqfi1Q4WNKwpEFCry4wYwQhPvkeztTEP2RhaLmPLpmui",
  "key1": "3rXXgabzFMXspUQakseWGdSympXD9ZiN3UkjtEUVG99fB6ErjZ78E5cLnurZmS7rNgPbjY9tMk8x9JiamEjLzRu9",
  "key2": "3NfrVZ7ioYUrt1yTwVANimsbFMLLLSapctXpo1LNhCiZMD4uPaNLcWqkdpPF5n8NhKcbj6MtJiyvXGz4gwiXgbJ5",
  "key3": "5uAStoUxxXFiR1QmyqWNJEbxqhFRMPhq4TVYCfmouiD2hBf38pUjFU2BMLZyUrkzMaWo7PCZdJnB8MYiFh2tpbs4",
  "key4": "22cVuPa91XHw1JYNEUAmvLgr4HbjY54y8s7BgPV3Csz9J8w6DHujPf8MxUW6t8PZQTmpVwkDDGSUM22aSJManQRR",
  "key5": "1D1qy6LeFoj9Y7ZAtxvXzpuxNDZHiJK2pMxYoZRsk4PdYJPeAraf4Uw8aCt2XFmYyo3ZvcpfULrgmveZjPps3GU",
  "key6": "5U3tQZZ6yUpUTVQDmkzcbK1cGdkqVgmgaCEAXWv6fTBvV9en6JWp6TBXAZ2JsW7M2JK7yfRhfevp34ehr7iBbLH6",
  "key7": "dUcP9FQjK4jQmt935E44kLtrqtRDP3M3vQfoyhmLJScg81FTMrLULhP2A2eKAVqDxaRBGvmetAe8yHRgsu3D1mz",
  "key8": "2dF6JwSqdGjtZ94SCNLbVtzfK8EmxRvmyFNnryP7EdBKnP3Mr7WMq3znQnhebX8qmDRpVumpHe913Z9kmxC48AT2",
  "key9": "2D2eaKdFsN3FfF6F2JFCWFzKVowtszwRWqkjdHnbzL3Ue1pMQVuVGzzoFcEGmdDyHQy7ErWQa2WWGSYPM5YVi5Xz",
  "key10": "4aQN19y1keYBvRmoiEQEhuKtthdjJkefwH87bHNkJLzeoAYMU6vH3AuqS9VNwcL32dtFKKMt5Asi8CQY8yqJCAQN",
  "key11": "36qRL4XrLHExoFDjet9hQRscgCoBfm7XRw4SJRN7pUXWJhQEUn3DR7UCTUdpqMbGgdy8UvUvoZJc7BTmBm1bFnqm",
  "key12": "9ZY4WmC3FhAMyqR3guFfUfaLArUwh6o9J3MZJTrEZp6vZXWdTBLCsDEEDQB8MQaixgRGs9dLKnRc7eBsoRs9pqD",
  "key13": "S6YWU57SQBRxYwrEYZkef4duzydQDxv1Qv2XPg5m5pcx4pemARrAtNdq4vrWm7ynKrPyVDhtXaiyhxx8bxWBdf4",
  "key14": "aP941JWXzNbeGqaEDaMzFLtpTMQ1ySvX9SR9a5oKEr3AkwPrgKe2Xk8GkybAz9mdus1F2ygTPngyg6qgKDBQBWR",
  "key15": "tqG4wwD2AnBDBVTB5VanGGMFkzgdx3yjhZ7iEdRDG1yYoi8nvcLXjriPmxDdB3YeJnvitHUhfbLpkZiGC2rr1Ao",
  "key16": "5pjtPeXv7GV6WdSfpjBNtboza6JpXacEunohRDGhLzP3RfA45qKXPdDDJpHEjwkumG4sLeQD2zhrVdv6SbFtEPhK",
  "key17": "5wcyK5uKDjEVPgpkQuFpKFSjwytRCJk5p7DA2vAgKAWoUJDoCaK4uJ8oj3aW4WDqyFdQypyaGY3BEdaUisHWeLNr",
  "key18": "3YDLJN8UKE9i8sKAzqqo2Gbn7SmCHd7zLDVkYEcuddurZ3Wsb2EVZoQ5SAUkvAFZPKqcqjFyazzFehQkvRtoiLFo",
  "key19": "2jfF9TsQPhJYuQzbqRqsAcQhkZz7axjnwisGsGW3n794VgLC4wM5WjH7WiwAciuCWpig54BQZjJDkos2wg3y75Pc",
  "key20": "5ncW6mewPB37X5tdHkn95Xtcq2QFr1HTNyQFtKKrGUzFbod7WwSWc2dMqqXuvJevQy1XoUWpU5Q5x3FZNJUPX68x",
  "key21": "2pZmjonnXSwpf6hM9c84Z6fkZQuZNsKXcNyXbqM97zbRrUnp89KVErkJGyGisKtn8uB5ozDdvaCSzJ8X7QC1dcnB",
  "key22": "5Ls7eFhuvNfLrfr3fhjBBrLZdpugQHHCnGmoqNcZJauWULdhpC41WL2W8SQjK7bVTGEdbyVocLc7cWLGcRMRr4rE",
  "key23": "4it2TATAGQGBp4mRZkn8zLVx3JqY5pu3PcMss7ubP4Rx2CDTzK1CttWL9fiahzMVA9jDey9dG5LFWUBdHoZUW3qP",
  "key24": "5Hvy9uP1Vu3DwVSEGxkBp3N111d6Gx8orP4zrwNzfwfTcvkWscNqjMvKthgUuYH2Aum7wvEeatfeCeDqVdfEc8d1",
  "key25": "4WjK7hVrAZ9XhLpk4oamkoWaVPaVzwTNUfN2UrqUduMMkD5s9XKJmNGZGQQo4DvZVgyQ8UWZ16eRwL9GZeXE6BHy",
  "key26": "4YxX7riGGC4WXbgdm2ucuFCq8PTJLTZN322iiqGgiAD9VPFZ4RU7AHvspRrPM6fcP12hToe1AWchAFskwKWvZB87",
  "key27": "5mNRm4q9mHacAHXo7dV3ywz2r1yj9c4xQZATmu6dz4afRyhwB5LSFqeUbnhM34aBJp2s2Tp9DCKpMtVUiHodxhPN",
  "key28": "54d6zVXr3VkQJVAF75d4T4Z4YAXTE3jkwEaUuDeq8Yx4w9DoibcHq3xj1koBtkuMGtrLZrrHuCWJEoTF8CdjCicZ",
  "key29": "5qQM59pWkRchUT4srkYPnDwxwGrbBQXUtasjNcuGzFKnZCYdM9DaFLiyh2WgJdKr7hGfCGqwFMUYcUu5ZSMX3EoT",
  "key30": "3DbawhBh5RNcDBRc2776y5a78Y3gCJHXiELdN7oD9F1nAx6Sxoz9du1c8R8tHi51vwynYdio3qAuRkp7GJCFmbMh",
  "key31": "3hT9NZPXsHorKXbZ6V2VhR7ye1neyYznZdA1bq8HwVWY5MhNb7Xpa7cUCDZ8Res6tJJpP7x82JY3ZhocJ3Kearrk",
  "key32": "MhknYW6wZVk7txcjjXrYbosCz1ygKP2Uu4148UBVBDQ6dCPhb8W1tpsHBLv87fvmLCGho4bMdG5tNvm9NeKTARX",
  "key33": "5ZAVkh78FFRQVcj6RBmXuWqESGj77KoMfkfDPN8R619Km95GXEzz59zRLsy1xWbu4o8M74kHSeKjXneeX4hohij7",
  "key34": "3ncwLYstDXqk9oTN1j76ANY9zUzpNvYjHQV6uqNoVSsjLoYZamJkXKDsdRdUmMvrd1s5XJSjqHjTxoRq8yGey3GS",
  "key35": "4YMLFzVsmGD7PDCCzy9nrLJMhtTn3vYHHrXhkD6nf2ZJZvdg23PDSA1rQtH1YLf2PibkM8uM3tqasN5NcV6jCnsF"
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
