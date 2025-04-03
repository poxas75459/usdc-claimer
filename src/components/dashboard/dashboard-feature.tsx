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
    "HfKEWvcMkMer4gBSXT8WidFGQgsQ22KPvnnXVkubnYVuYeH1wpwNvq6FxBRLjiWxDDgpo8g1JyMTK3XYf9mHRMY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HQcB8xdngySXFpsQZYEqewoDwfrupm8ts3ezJm6yUKSdPpqZ64BnaDSW9Np2Jn9shQMpRmQeUmusUH6SaBdQM95",
  "key1": "J3E4aEbxu19stY9pLsJ2y86YiCk33ZseYemok9ALYtqLRBez54PeXoyCxSYyP3XA2iBoEtwgKWx4EkqsjDt4g9a",
  "key2": "WiwoS5R24pJS3G55L9vJS2PCjFvwMNB21XC4inzAFDUSj3qAKcWZc4gUfFktyfL38omWMxRaEXQTgBKFMbS2hRt",
  "key3": "44Er63iUcefpcLpjbkcZZ2JNWJqqevFsucRewugJDYCJNw5uPNX5qoJdmeLGS8Tjof3XGrQJChND3w7eo4FMn82Q",
  "key4": "2iKRWArje7r6MdxdLYF4Vc2qJmrKR2Y9AMDn2o5mVhiLDjbDKTt3HHTfTtTDswd3K9bXNDXDk8uJFc3WhjpLdAQa",
  "key5": "3F8XDbX3X1sXZGz2XusvJFv1ngoMiAo5KQ52HQL2vmLazRFUQHMR3hMA1Z1mzy3QLWAALJ4yXoPhb22mtYRN9S7P",
  "key6": "4F2oFLL7kQcY4FEGFHM9E7Fr7wBDpMzKvy83PEKq2wy8foSYJ5132oKJwzvELpRigUTesxTLF42tpPXuuTZMAprn",
  "key7": "FC9Bf4FGhSND8jkP5FzkFT4yKeKTVxs3D8ZDFjqf7mYn8XvEPxme7nXv7QmW6fwCe99mrQWz35BGyHZUupF5QHH",
  "key8": "3PZyRhAwtsRCJSSGKqjWZyP4MwuRkn5asJddjzWKbcqX9U7ZBuyrmYv7z8KgZgYT4abkfciVnjoUzFCnYKiffTwc",
  "key9": "Tp1EEpdjHxnXN3SbL3YatbKiAE4NpndXDaZS4oW5WTuCF35hCgPYPqRo5x9NYSGH1UZpeycw5W3xTTXHKUTqLjE",
  "key10": "5JCwbTd9SToyeSfKFoZckLiXmU6dTcrQZaSvLncZcsggfTaNCqph1Et8UTPQFYx8oD5xcBXE7rKipJLHi9ZFy9WT",
  "key11": "5jyWEYht2Fvmxi5CvxTNPisNQQ3UCuWK4oAvVjvZP2gXLmqKkJLc6KnNyYFHrHNQmcpp8DBo9ACduUHX9ZGNompr",
  "key12": "5fNzunCumUxRYYaLfqFistBCExhiyyRTAd7JipEQLjH7VmCTsMKc5p451CESSCg5tNnK6TyU7dtUC5MxszWhu9Z6",
  "key13": "4ZwUy5r1pRRNi9FqToPZ4tPeYqVVKSwepka69d9tbuqTUVhAYJGhcE2vUiyNWap9EJL9DDkXMEAR3QBjvzyCcRJQ",
  "key14": "3MTwhgc7aqimDJCPGdaDkdiSfXr33dMBF9vTuFjuFQYdBipsuoFvUNSW5MVtKU99FuhLAQVrk4nKwCkgHvjJGLb4",
  "key15": "YGFJzDFDNsjn7rtWrCbsECyNr35sSsRuyXuyfriu9uWdYCWThFACAXq3p8oAqdXawUVeaWJzhXZqH8cUDEPjeGL",
  "key16": "5EAUyiumd3F3FM2VpoWA2r3xVayiuZx9x1d3LJ6PeqFufHeHv3BvxdhVeNApUeQG6sau3EFDYFJ4Pnum7bfnBUDK",
  "key17": "Ks7YJSEjchuZ1AuhEHM6NuQx5woLvQFV3R3NYFnFq7hd63MhZzf4nXPBioBMtCFYvpMrrX3NCp1cAXbzBxJrrFL",
  "key18": "mB4t16hF7hjt8SoErcjwwC6NYySKgPGDgoPGzo9ytmi9U14qBv9nXB3Ar6eMDUjgaSbbtKAXKH1VvC4tDczRiGh",
  "key19": "4tBGfV6YgxRuEp8aQuyjmhGoqFc3iyc3GLQX7wrHTR1ao1T7LYNLFSxidYw73C4ohXeupYKKDKhsg1iMco5wCykh",
  "key20": "5pWzPSiAdaZtKGZMG67s18bMULRXLcCcnzh9adtSb1gMdFam2N89tgmZyqZbc7t9ZYDP7NPsAHG7Qpj9p9h7frFE",
  "key21": "3ey1cSpupPR4UfwTeFgat3Lz4LMduPHx5v2TLBFMFcsVA6e1i12qGb3vecaSiSaWbPeE8gEZfP3Uu16mbitTVvvK",
  "key22": "2sq2Qx8DhDMLE1aKsEwzyLJfyhEg8HWUXgBjBSCDkAb8TGbjg47eT59FiEoqVTU33VqUTEF8QVFNbFPHq87HC7sZ",
  "key23": "2LS3hen9yeQJaTME7YJrkpBTgFMrhFodbyCqa69XCwg2MpRTbKYEFxTGUSLsYoekmMhyRkLC2BTXoevHCntQDmB5",
  "key24": "3RPqCh9jNvU29eirNmedFj1ha5KKQasZCVBYjT1fCsw3YEVo8iVUwVtKCtTB1ejRLD43u2ExNBW6cF1hxL3qj87s",
  "key25": "5QV5KHmjM13jeHurZSjUPKzTgqAsQAVmHj9SWFqhSh2QdRpvqL457PRL3NVUVhjYzBnAQejZ6YZcaxG9YmC6vJ3F",
  "key26": "38ds8UhwwLc8n2wfoN7ikMf56B3uA8snzoxPSrjmJnGWDZUw3tWbkYYsWNyymdy6J7GxNEeP5iJQy3UciApVRW3x",
  "key27": "2D9P8eYjqVy82BfDrir65r8hcgahLpsNrp3NfqTVXqGgtFcWVsnvZv5kc3tKCywdbpSeBfq5eJQxzJWM8fQGfbw",
  "key28": "3ovb2brRZAEwJuddcZn2NiTUmRAJe1Y8SHnjr1hndLDTRS7PeqZNiHkNsGbQosUG199QdY4AJ1BbHW7aLUNYZXMV",
  "key29": "5U9kxoRr2rcFtNrgcVGuyYVfBGnVg6LkFYv3MDxKRLBVttrVZ4B8avuA1Vuc13toUN9DBu9Zso7p6vFsFquFRPRt",
  "key30": "Rmp1F8CSmuw6dUYryYHN6bMZ4D1SkW3uCXwk5xENT96ZP3SMa4KcUgUQjoF2nm3tkcrxxDy5AaW4b7uFgmDWpwH",
  "key31": "2MEj5g7VxBeu5nv5ye68QjGfRuS24fZoLy4yzzBkjb19Fj1M93wNwVgR89QxjYei2JYEz19sGkLGbfJSxyK7GysE",
  "key32": "5bDGJY6ukgmKRaFNftZpnDfCJwpvC7fDBKHEJsPdxTmRuRKuE7qDVL5mYvUusSeAvnxGJN4sbm88TnqgbHKgaq2j",
  "key33": "ywcaLNvgbiVPSxfEHtverm2B6rLXatfkWA8hVo3M34KcKViyzZCfYyfQftnj1cm8AiuZ52kjYYyu1rhS5jdjBWx",
  "key34": "5xZZdY1BeWmz6KHvt8A8qc4oUXsWeDHK6H1CgAwm5AsnTX85z7S9FNE5n3sv1HcCSexQJKzZ8obAPp9qEnUqrUQ8",
  "key35": "5Jfjw3AT4sdwVbFBrYTU8ucUpkFfdCQX7bUYuTya8bPG9yzGJRacWDAmx9SYUdbMFF5e3fdJbmgsfA7KwYExzJ6g",
  "key36": "3jJoE5Sj8iwbGGu68ZavybQ9iuJu2XqERxHEH4aaAm67e6vPVNrjwv7pNkVhjaQdmyMRUfW5zwump7zxbLn2qQxL",
  "key37": "4QotA3k4PCxZUeRUBy3yxmmAQbWqVhhg9JzPw8hpaY96gSiRoWctHZ1MAp4JXiZgBwiahk1wT2tJkwwfHQB5eAsv",
  "key38": "i376BBMm7C9GeYBfKiVpyjGpYQzUPnzpvUFDDK2VZ6w5hwR43sxvD7U4sHceFd1X8tUTCLbMhooK53oKR62tE9b",
  "key39": "5snJTPTP6CbmjxnEbV4ojkw4NUxFE49zzmPG3A8MG8SGdjrw4fZKqehkrEZfRErsDvZA57YqGtJKKYXnwywiVzLs",
  "key40": "65tUPvSu7VXPSywL2rLq1a8Ys5auw6a28DGpspPs2ZYaacHkes3VqNB7i5qzguxWkN4AcJ3gZp4Sp5FcHnDtUnsP",
  "key41": "5xqD4d4aVoAEMJ1r2Vq1Ym47ypNN51j9VaRJ8jVpJeDXh4nmD7uAYnaAWfMGENgiyLEsccLcas6G8jfjCstUtWDR",
  "key42": "3waYJVpAifJZKJbzsUSNBfWjC65sfxBTH9aPJymiPTmXaqWuKwSzXBVzsZBpxmnhKKLqv8wdCpkgBpbnkPGzvNMZ",
  "key43": "595VdVPzC1MHyRweWJwHXbjPwyVApXvsVmHCAoqFKN8C36T5XgMYYP9hrxuLaXMzxo7V4LAVGsoUQrrdoXzQJ4yk",
  "key44": "3Ej9nRia2AzQEXEKhXgrEdgDd2nMUSgsvnJwLaoQozqu8kpnWRpvVEJV6Hu8jHKEGm1mxxxjZ4qEFtoLKtey7kKE",
  "key45": "51F9SzjTeFMrAqj4Nd4FPqGDvjwYKxwsMu3jMoQ8uV4mqk2TcE6xXh8LA31uKpGBn9TP7MQfn4M62uZ1LLZCt8hM"
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
