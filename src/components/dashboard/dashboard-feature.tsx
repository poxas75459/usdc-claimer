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
    "4y6JuT8LZBaZaso5y8MZM1HHz6VYdkZypRoKmDKWdNejZVr7LFxfFy8JnHAd8h2VqVQVBNnQ1YEC6cZnazVWB33Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uEitiBZbwLWYArvgTqyBctQjxAWdP7AV1TAJx7y18zoHqDmPQDZftzyaSkDHup2tBzmZEyJJMWnwxGX5jQ9jDSX",
  "key1": "4hYFDaud3BrpyePJJCCtdWQiRuhVwkHeUfKo832YYFrQVQj5UCgzZkTk5fAoXwmdhHKxzikUeJbG1NJLZMNLiyMy",
  "key2": "42mNscj2ZQt6PV4p6XPXjg3wbAKUqm7hazrpz2JmYekd2SMnrjE63ifwtDPqh3Xmg78gE93sABouRV3NvBZNRdmw",
  "key3": "5NwJjGSfZ96RgBZg8Kwbj4i9m2eNcyCAgms6TtVGUU9eiHZ87gACqNsipkdDdWerQ5w2fhS9fqhCTM6Q12DYD2WG",
  "key4": "63k2iexUKXLx6pAHE2nbZDWVez293G7yUpjNScpEXr6AqwJM3gnkCXE4KN2Es3vafgrqR2iByi6Wq2stWdptDuRK",
  "key5": "5T643RMY1YAnMxKr3GVrfZTCTZy3cUX1MExVfuGoacfz1FsJMoL5hyLmprSBhFx6SbDhhv6hGXHRtXpjwrWK9Zpg",
  "key6": "5sSmX9NQt9ASv9aEotJJcJqGK3nY8Le9Kpgf53TiphqRhKerSrQY9SDnJrz3LDNFz7eS7Z7sJhPpoTh9cqyZEFmy",
  "key7": "343w3c3W8yiV9nx46QLYVkaPND3nba11yT2VrCnnW1NkT7ZXenfQc365GHFqBoq25e1SxyrABAPPbu5zYfnyc9WB",
  "key8": "3qatGjxh7JTmcddcHR8RxSNeAmA31HdvaZDCZarpUgSSasJHQRA15jrybwRkucuL37bYGbyUfASseHnNNW52fiAQ",
  "key9": "5XQUGmM2HjZWNUxgsfM8YwzvytNv3WJNYuEPwnsYcMEqR68a6YsoNv7LBzbQ47LouiUvTBptGmvg3bMhHjSFfkYP",
  "key10": "2tBCpsCp5k2RUdAoAjV9tX8ZisGZhknPHEmngeSCy6fGnjtW5ZZxFhZz4PwaMpVPLJpSUtMxwfotceSt4xySeGy3",
  "key11": "scTpWCookR8R3Br4GSFyJ5ER3Gimh78VBhb5W2yKTJo8Ruu7XVQpsp2VGCaQsGRmgSRkT3bXRJUDuhpCQSQep2j",
  "key12": "RDCyv6HhvD26FqJWkJpBVUDqnpNEjsZqc2Rd71CoWoRTnwr5p5HRtcbtLbD2ZK87TWHXeuFXjDGBypn7hkd1G7D",
  "key13": "59bJZgmNufattfCu7tACtiZbeTsj5rSws6AicDJrwnDKmHTtiVNX4SCVfSR2hfKLCJteKdwkr4idY5baU7VCQezD",
  "key14": "3yT9DBG9NNfKvQRrK57n1apzJeq7eSr7Rm4aWdF61C1B4pCTUGraebViYXTFHy5tJShwt1ZM8SWM1mFzW5eW6fwL",
  "key15": "41wkTsYa4kuaRmARku2ViEeTtcUM62nxoFznJsW4wsdpew165tK6s5VaZxWngpQCmZUwzeH1wyQQg1DVfWQk1eny",
  "key16": "ZyLuNjhDNVGuK1co8oQBVtHAMFFcdkbTcUCQVcGmUFm9j1oCVdrhDcMwiPKhaCysrkhMdDTun5mv1FNz8rAH7EW",
  "key17": "XnyA2mbyqygWZXScmwXwWL2b1nVeutV3aFtULb8iXH82jpBnvWv4tyE7PEneVBH5L7pg5uHti7txTbuTb4tSwTD",
  "key18": "5byHU2iuQd3d7LFrEak2rewyMU3uoUdKDLDricvK6DoW4AKU7i9iRTGUj44c63TmGG5kG7KCQ1ofgyY9kaauDR1N",
  "key19": "4HEXdvE4mtJZxFfe8vkGoLRPn96E2LCD41a6aTCY75crggAigjnxoBa699Qur9SdU48LHDtTdCMfpejHUSKjBmRZ",
  "key20": "3z76iU9CTCMSYYA6TFycV988m4AFLnhCEpoNCkrGRc8yxKWw1k4dmUQ4ifsr21zKAuS9DQoDTiSy7HTHQAQYqFhj",
  "key21": "2edBSwUgaD7jp77R1NvRvP54JumLB4BEypJx1n9khdgKPWUMu7jsDrEL2txXrUAFrySYSUDaDXH3xqaeJ8f8uD3i",
  "key22": "5gSuwQAW8KNwhKAe238PKpJ2AjEtnej2akUK3x4WpLBuAbJUNQoS3cHLUFNHbQT5sjTxQQ6un268sZhLLcd8N3Ka",
  "key23": "57Tj5MZ1GNiPGHQmikHUSheGNBNde4sr9zME9GKCDGfxV5FojuBYKpEeji5ZsFfZw6nn73Jg7aiY5hGkcBYBxo4E",
  "key24": "45uZYE9m8LFuFXC6NTNki8eTCYP6mvLCLXU13Dh9eMN4G5w1FWLfmngGwNitsVawJjx3TYzM8YciuEuQHfhm6wGx",
  "key25": "3TmkcU3ZQzNb1UApPLzG1BuqP8SbewqYbtsxSWGp4hbR6L6Ms6ABwLN4HbKd3GNBz28FGz9gaTX5RZQ7Hh4QSbsB",
  "key26": "3TY4BPgogiu9zBQDQvP8feXRUDjjifeAc9o44WmNZyHnZYdLi38JUJY1jRmu5VT71ZBp42qgyLd51Nwadky2QRvG",
  "key27": "5zeZxjAXpq8iE7CmiZEEgoicCvr1ciiiAC54BhSYgtV8ZqMwEBjD5i9oW1Y74esrgrVU5331PXzK7XmBrT7DCH8H",
  "key28": "5G9JwbdLRZi44hwGLu14AuF7SDscQt7xkonzMKJPKGzVBSPFLvNKnQGmgPsa9f1M36HZ48nCNhKyEMttBPLKoDj8",
  "key29": "2Ea9fKHaJoyzyFnAnhdrtnY3LsVvzwvTAqJ6PTpUugu5e5r93Dmjaoo6gUbfbcPnJVEC41JgAJ6R7vGTgb1Syk8G",
  "key30": "6YP1XAYrJmTstXhjiU6a78FZrvyr2NoKiJdWmxtVzaZvxYDcER1yeGNAyiFfwdW8XBKEYequ5FWsHR9aeZJLFDD",
  "key31": "4a9rmbkvY76QC158hSmM17aS3erkeC36hes3vwaWWn4An5CESRERtmgYeBHcZ2Pfi9aHg1BDi3yfVpFy8EvpMxMX",
  "key32": "5JZnDgdADUiZbCKNqU3EuX8GQkdEA9ALGPGjeMYSaHaao5wHV5bhnvHydD6oaA4edDM385KGx2rNAmnYBxbWr7JC",
  "key33": "5TJNqS646QYVP2AVCM7y9sbgiVjzCm95CoBdXvqGECXZrJ3Wo37CeJ4UhY8iPe82zUcVcFXpVVmfcZTsjqcXCMT6",
  "key34": "4ES2pzjziuUNX3WRquAvfMTA4iC7fCmQGoz1Py3NckCTohBbBJVp8TfqrahzyUDBHNDCXq7mCdW7tLdZvQ7diDE3",
  "key35": "QXjxyg4shvCfXWpiV4im2USeevQsHfj8hrsW52LUkBagwboESVGTn1Eje7MVcCn39USVL35pbwvoHMEQQD2UQfP",
  "key36": "5vZkqXxrhw3YBuGjGnpnkxnAX7iqhJWTzFoKdjHPtVyBbhfmYQeKeQU1qJL736aNbtFLj74RtLB7RgMeCqgDnf6t",
  "key37": "5P4DudMiG1WmR2B5758eXBT9b7JvwttatRbL7YiGmHS8KQSckc4V5GndG7JxveRJFF8md5DoaLjQgGgXRxBGgxPB",
  "key38": "2FM8CGXLLFMAPhxLE4Yq77Q82McuivhaGq4sRHHaKL4xY3gToLNmwABu3nyFC56kshwhXVa4oENhFsVdbpVyoF47",
  "key39": "5KhJi3a6Jx6BWmiaGAAsJtKbmTJ2Zwudy9zqaCBYX93E8kVg6HHEdyGFBXtSFn2muDN2A9XBCriWbCRHcNu2rokQ",
  "key40": "CrNNSvbEkQCNrj4gLYdwpEpoVkhEtSBjtZ96Wv8BHDR95oeASaaLQvYNGC1gDQyvqFnEY2kYpCutDg8B7i1iqeY",
  "key41": "Qg53eVThsFDM2Qjz6tGZdjR8MUKwVFbDgUyxJumW8dSyRN4k33JjH9hieTDrL6JBHzkC3YhXuYz1ayx4BxtGEMp",
  "key42": "5gHvBaQtpApprwsBBaLzMUEi7iRSYpiTRmmgTCbqetUXGJZCpB7AkZ7Dy53aJr42Fe4QMvNf5QEBTrR2ak3GQXt",
  "key43": "56biecucrWNFLiZnbnU4htyKGTjfxNE2ozm25ftL4ayuVoj49PJRvtZTHXBTCH8XwNyiWaXder8dqGeP9aDYuZAQ",
  "key44": "37Qn6kzCPuvxxJFC9qsd3GKJchoM3AtN6xHewMTCGGrLAaHsi1xZa5cDrXgBKaj21zbntFV2asjUnojgXJCVTXgN",
  "key45": "257pGauFkHCveGDxAj1Eca2bEUbaEKc3ghVnEBRmBHeUnSUFWC1rDG3hbp8FV8ANpULEDUscV8xLH2xPJaVXF3JE",
  "key46": "3dPZiYpAbuAAemctV3yMd1sUGCmJzKGqgSpv6ySuBdwcRuTXuziZDsqGEZhFB1Z8DynJeVajXzkvYFB7Lu42nKdM",
  "key47": "2kteXZdRo7oYKPpuViJGakz4YMUzrAhSDsRSBDRnqNkSumaqoA3VTKUdYAqkTpdp25UJ4G7vdBfJCGMChPXYeDiB",
  "key48": "2ei2j5Y9gb1BmH9X8wHxnNBqRfu88quSmmhn5QU8cqavVNLEVzEzYrKUjKyJnxhsyRATckDMJUc9VZjcxJJVDMpE"
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
