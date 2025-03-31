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
    "nJHkhgYJhmCDk9bipQ3JqLGbSeQKPyHJmDKj5MeWJM8pFrBkfVnMQKkMw269vr3f2T8Vfi5fUzQKGFx68pa2RoQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mxeyUGTdYFUfceNrbtgVWSJe821KkxYXdHWnJbYBJoim35jzej9Hob4ntpCZ8ukak9zpg7iY8LiiNEHjFepmkvT",
  "key1": "45DbjEDgptRq8SZ5cKUGDqvbxu3yjdRQgpZKNpUYkqveLyDx6eKpm68cwbb4jvtcqab6eotij97ckZD4F6yAUwRM",
  "key2": "24GU7Lsp9miFbMYMvc6TBd2QsoP3q38k5zffBkKz8KYTb3qX6yWPShsE1N2GSrDUoA9e1s8jMnBntaJQzamRQhXT",
  "key3": "51Azr1YK6EfLN1buyFaHwd6D36JS1j4gaqwe6m9qVCSRQ3Gd9B2mVtjeCnsUb22mHmPutJ9EpuTk5hMUwjntaQhh",
  "key4": "35Z5sjgkJ1SnhAwxtRh1gxkX1RgLvicTLJPJW7dCwn1dGGLA8XHDefT9MdwXTrxWrYdSLmnVQXBUuwLDFv3en5cg",
  "key5": "2JB7NQoMhRFepSJnMvryaitEMJf4CPqkGj6EGk2p9xzbfxepT8sEFrwhFTrhyvf7H12NmnreryLjKideszZdmpYM",
  "key6": "5CbWJMaKwmW8zjcGP4kuzTTGjjN9LmKNAgDT9fBQinT2NCx3hKrrhZFwQEofERLFhZ2ocGTdpeBFefGe1GY3tyn8",
  "key7": "2pXjfQfhKoc6eFqZTy6roDodfr8GqHeYHPriFSxxdefmJFinHfTnLpZe5uDBdKnKJRGe4eoCw2zshqWPvBLwWhvF",
  "key8": "5eQprMDXhnXom1qJaitYCpFtZXaZpruHnetCzYccFdjYE48oPmTjTfNvVnNMLnFRZMhwkRwdi61bVJ5iUJEvpzVR",
  "key9": "4EWkzMvRdGrHVHsoxgEaxvdkwexKsPgRBN9iVsQ9D413w4FRoVEjGADqFeGFm4mXLNLwR19Pw96mNQJKCJMvVv5R",
  "key10": "32sNqWdW38Px7kTWHxcYZGKzrYXHqcmKwsNJnP4C4gc836J6HuCnKSvDegjQEK9mFQo2ccGgNbMWmBcMhkaWyBwP",
  "key11": "5Cdb3QtVfwiHNdK25GdVkjoZcbfhnWtpNd4g2KQ1rX5MLmeakSZEEK8x9DXRLXjNegwgU6itZWz2JsyBdX5hBdu2",
  "key12": "2semEAbhhoKMyS22H9UFP5JKe4FKM2uwdXDq39DULWZmmfyXs6hLjv5356PQrcyze4TERrH8D4ucdaVgpr2PFXte",
  "key13": "gMMpepPdG591WXvu673zk7h7TjtABLodTYwhrBXZyqqitoj7qYsJj7egjDTE1RJwv5Svdh1NsgW8GdG4KoVMsiX",
  "key14": "251MHet6VqC2qocKtNSwKAdYKHqgd9aEy6B5k6BxMHtDfrsX4snJbn1LsTP2QwPrLKZXfmTjvh9jxJTVddW9MSAG",
  "key15": "28DFRthxEpJs9rhuu9yNjzFjVeEgpcYZc77ZwiUaw3aL97tEFcY716Jepzo217wGFZFpCQvFSMuBxyXEQkBZzbbJ",
  "key16": "4cJ19dQG5n51gjPUHUTt6eANBWxCEcYk8iM7vVfJVbsp9AQHSSftgQgUfgfyEnjvp4jQjLjBLCJHkEXkMiyNRmbG",
  "key17": "2Rt1LNBUTELy8Z1G8fruwU5QZgLr3r4kMKhVJJTanzAE3gbxAHLAFKCMh6kdHfkS7uFJQug8tTanHep86kREffiR",
  "key18": "2xBMjG3nMQKJNRGYHEkwbkTgjdtdwgC8w7inn1AxdHUMk9s3DtffMu4YeCgH7HZtgyfE6oNRZ6VuQhuuS44cEMFk",
  "key19": "2E8Uege8ZjbSeURopw4ikD9i9svQXsHrgucdhaFmaDcpYZ6YNnjtt9jbriMFTKqUVu7zNP6icfHuLaY7Phu23SFT",
  "key20": "2JvJ5zSaHBYDmsZnRMRs79NjVdr7RhgEayBfzN4rts66eH5BHnGUgBAhGwgjNEhqZFSJcQRyDsoXxqCMrnreJgEP",
  "key21": "2hNwZmLZkXbc6pmQ1Hg6YMaeWh9NQNu3SvbVj2VJXUFxvVfJUeAWL6PGzfhYqcJAwakLRGRQ5k2272HREzMtuaHM",
  "key22": "5HRUkjuKiMoWmpMZTmUFAUZpebjhfChgMpCz4cGbdSurk84XDiqmnUa51E2BThWRddeUMUfkcrymDYqcTJX5RaNd",
  "key23": "5xTyTp2jHtoXQAguLTn9VDiSgvmFDtYfz86DQqyL1uhixMUtubRg7sxyDhVhM65xrN45LyJUY1rWgsWqgwXiB3wE",
  "key24": "DYv1GEPThW8EtJEHe4fUtRoRCVkzZc3KTLfWoQqe39mBbxx3sC5yeaCa2HgHtNG3SPmWcdBPdp1cYLDzFARwiig",
  "key25": "3Yf5H4G6fP99bHW2EmZNfzLv4EVD1Y9yaQX8jJapK7sqEgQLiTLdhkFysnGQfYgqb3QzEfBLeeh2c7aoBx94LFpy",
  "key26": "2oKsCY8nGWPWPsA8Sr89EQKCs2sfKk4wDJq8X7nhBTsyBhYu7X8j36wCyG32K1kgvfRWVNYzFNRpYTNs8wup3yX6",
  "key27": "4SQpWx8z1wwXCPacQAhHKgC7Cyc1mzuNhW96BxPmVcsSKRxz1ZPPPFBMv5SBkd8jsSDvafwDwcFYUTHQA4pCvWz5",
  "key28": "4YjEBrygV3aTRJWK4qfsmajB8FnQNFLxDCnRxqYggeaVCj2gnWXagFmeku1wgWSfQKraj9JZ5ZWGBYcHTof2VH9d",
  "key29": "3gJQXpWbbUkNxEVNAykMjjcBR3cT6Mjtw9hAx4GjqnK169G6ZEgs92ZxmH95uvE334DyTfZtHAmCs59ukLV2rrwK",
  "key30": "bDjLTogwbEyzm5UBNeVQGSUiWvznBj7z7bnJrwCgB8N6VpAZH2hPM7Z1fdJUtSSuDapp5rwp7vhSR7jJpDJHCFh",
  "key31": "3trpTjXUoSrm4nrvNfeChs2JvnBBnSWQGg2MZqFeKfXM8sQ5LrGboBCYnBeVJ8Xwuub3wGYgz94jZH9VBawzouiW",
  "key32": "4wSmN2cEbK5vYeVW4G34ju89PeoevTfgSLKojufobPWoEuCwaCbVfs7wtp7rfazeFHzMcfFHkFM3VpkkK7EvGg1M",
  "key33": "3KBo9V2DzX22LHuMuk2r9Vjq8PQX2L3e5N3FRLHrENyuR9aECD1NmyF9nAf1nquHMPCzkdWzjMaJVx7E9kaMGLfY",
  "key34": "29M8yipajfTyNovUNNArQdX7xFc92FdVsLpvjqo1UE4TCs8mAzJVPgcJopEcmUqWKnXYYusu64wMr2Vnmd4t9XuJ",
  "key35": "43aks4jVnL8LQq3MKF345oN2fUENn8zGUVLt5kWafdBmQRhSSFgNRrnJYkPtrv98MX8JZFuPiKuYfvKRaHgxCioN",
  "key36": "2mm5Vba87KY9yHXirJJNUoobVrehkrwBVARBYxa8kNuPR5MCFKtZRjsL8eKKoNvD1eVTdeFjTCEuNGZHdekteztZ",
  "key37": "5RfxzfFvabTXrpVz6iEVkyJ2bbQumjFK69f6zpNRSXBmLvcBPfFrRL3xnUKVToMAxVtN4tPWA2L15w72LxZ95p2J",
  "key38": "3HxewcqDNN78KaD3o8FA2xSiqEY3AN4S1JVwYFMYBP8m4H7Lgcg3xz7HdzpJPGMCP4gzxdDegBt3NeRgriv3ydtb",
  "key39": "4A1Wo3AMEUMUBriFHBBuNtmM1D94chg14EEdiDA5i3uaPbXwRUFvJU3Zb8uFV38jQ1yTAzD1uWxKZos8NtUMMpCo",
  "key40": "2u19sWpdfRspMUsJtoYb5vehUnDGUiXhPqcdmKKGvjW1n9Hu1FkhA3unAV45GjrbHajfaz6or5qS1anqqQ4V1r4X",
  "key41": "cTq3YdSGYGrv2FzsLjYxTcrLC4oMtM1o84ujLrnjAFMqpdABBfnygGW4C4uGtg7gv54HBab868m7F2eRyu6pWpC",
  "key42": "2sqBzQEQxDDAqP6pXYtVfv7DUcP6gLkEABTS2DQiXNrjABmtagnpjkderdpCs1RunKfEtr8XSYuFwnJCkcCPR1iP",
  "key43": "Qfmf9qgrfDrpYGp46vjzUDiA8gVjfj5ZjYnPePhdW2PVcPyNnaJEFtJWff3ekBqFP8GdDwxCmneLaVuS9bzWjYh",
  "key44": "39huD4ynvJ1KSTRY9P1Nfk65W634gCig2teADHD2u4Z5qRmKM2tmXKpGZ7Wcz8KGB9nQyvwXkjbwHgqbJfRQmQob",
  "key45": "3GuhBRbJ7RzZ2kot8bP5Tztau1j1mHoFN4t9pAhLvTrkP6B8gcVJx6gAzDH6bq1oL5Vd5WKpBphrUdA7He7pk1tv"
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
