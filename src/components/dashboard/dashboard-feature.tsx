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
    "Mfx1HtE5P9gskPJKa3yhXqoehms8kNdJa9g8zUJNy1HTY6ZCfiZPTE2jX1PuPDjxa3apRP6hu9PA5D5meAtvcrQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55cgXL3dnVyNFyW3wvyb5R1jpwem5kmr2fF8drioVtLkp4TNm55sbAH3YiVUmTYEqeyAZZUFdUfFeRRjrCsVYe5E",
  "key1": "59xaCowwtD55eDCx4M5Hvirg3rk7aPD9XJrNsqxhCLX1BxG2ffwxhKh8oPVfWb2vnn2anoYzA8Nh5Aw9X2pWyXVQ",
  "key2": "4pFADeRaxVLfKG8bXaPFu2wo2RVuvnbMQAzs3ShvBUF6tBpJ3G2aWHtMJJfFaskZiU4dG9CLx8q8ZzKFrvieSZS1",
  "key3": "3Kv6mUnB8GNHh8AAXF7L7Fd1xeNPdxgDGYZLXTUrPUmWJmvp3oSRj3bopW8Rie6ZQXdRoqYPFrRh11y94F5Sjpb9",
  "key4": "35zurPrzRP4Vu26enyeHeUS8g73NH7VNM6VNf5LGM6eVHegCXkougPRQfLRagaMcedXHRE3KMEh74TszwSTzrRqo",
  "key5": "5EJNDK789DY3YuCJJp4XatQLApLyo9R4zkaaHDsfQ9w4XJmcdAvDbCwdfdfDjw7e2uC2CjKXxnBDrYu3YpYK4q62",
  "key6": "2gJ9gyMgqZX5xrbQEik35PvrvbgdBPvqnvAwhy7JtXBHLwX2svLPHQX8coKfrX1Fc3os9o3dE4WWGn9LJ1cAoaEv",
  "key7": "4NnAUh4UtVVCEA1aVZWzXGaFtzAtPHxFPoHC4yLyrznYbvib1GR1RHS1tnFJjBGAhzwFmAHX9e6Lq1FudzEs6ixF",
  "key8": "2Y3jsQ1Sdtpi66fu6wfTK55V2KSbfTmeCb6K6hC1aTuU6Rvo3FwXMM4Bw3q8xacvvJHS8KDQc8bkC8VEiUiFFo7K",
  "key9": "3wjLqgJbPFgbWwE2b4S3TT94En4GiAXJPPKabGUaXDUkagWG4HHzmCoeK1tjUfZ22wjyhvbR3LV26Lh8AGoM53fL",
  "key10": "2CW9bEb8KX7du5ThnwrtYwZMSEdS7S939k5uj3B2GGaNsVK49TKTSCZM99m1spPFEt9FVNHAoZDWibcyPQz9iPSe",
  "key11": "3jWd8mnRApaGy6NfCFLJ4TutfeX6im2EBn9cDejivwg3CiTQXPUifQEjWCaCi28CN8qjorytsJ7xzZL6ffSwujKa",
  "key12": "3VzwLGdH2qnyKMxVKahSAJaVoUwa45yx38cbK6kQSs57hpYPBynwEvU4239TdjiMgo2YeRbSNLf8fmutk594sGAj",
  "key13": "2YVsv6kiaUxTch4i7SrqfRsczAkzHqqSMuvfMLCMQ44W4JsfBNbv4Ui3mJ21Sm8a5zCd9cjBEtkUPon6KcazD1ju",
  "key14": "5uTHfDWED5ok7MmrNCg7a22PHfAc5sga41iD7QxP8ZdQnszJAzCKTFX14fnfTowreLhcmrvNucMiYXYdDmT1tbJE",
  "key15": "2FMKhEJ4yiDjESa4vodSBGZvBGv9Et3oYhHJf4nBKkvGmpHmbEd8iE6Zz7ce341P2W2vEKeWJvjXxQbQgvbaopk9",
  "key16": "5mFfgZuV6VNbHBrCHQyJFbug5GSv7cvTUritBhYtebPQpzHmYMJqzKq3iZsMMGDkcQoPBfEcSjfRkVwwvcQxP2zh",
  "key17": "3VMd2SDtptJx5pfNiKpfRsW54FswSXj8aPtoxbobWBSxMGVdML6TYiBU9M2a1wGXqWWQBH4BW6boG449M7sG8xU9",
  "key18": "4CdnCxMYz3iDUTQB5foKTCwuKhWMAozdUmY3bE2Ayok4yVpRTtWQxCuxmGnfNZPPhmPtKKCrDVPvJsWVDSq6jJ4v",
  "key19": "4yo2EVE4Ro9b22s6g5AtRnyf5ZJcULCTTitZmHEDF44Exau66p7vp81Q3oYZ2Xh3aNUgqAsRBm1zqoWb5RFjDGoJ",
  "key20": "3HrtZjvSq8bcGAKz1MpoQcrAxGbrePAWNf3WCoFrzFpfWgJ5WJPr3LNgUir3n4pyGDrydxbCWTwGYmNj6LM5DsnF",
  "key21": "2aptYpRSwCjXNmyy1vssiawpWck1CsBrhn4tTiQCGLRoh6RzokdB9c6qJrXn9v4dVQvsppW7CxRnUoMywe9HmC1U",
  "key22": "3txRTrhkvK2itt3FA2tgH9KCVqz4grXkaXNCfaMMYCxaQXz4e9mmr5PESB3Av7wzJR3BYXZzi9KGxjYRYikLUwmr",
  "key23": "3GCRuz1zz6PdZAyxURjMJiV6AWJ3ocrKBHvpRbpTTzmcn4Gf1xJLu6dQ8MpBUVdKcV8fyyWZR3vDMSzr8Gyh4NpM",
  "key24": "ndvWgP38g5zRbaEKDpYysEtBxF6eLW9DHaAeg42kVPSJa1MHSQ8h9xHNkXXCwnbc3jyRBToRoNsfjc5qCeLX4KX",
  "key25": "4Z5BiVxoLR8SkQs6mP4HfzXszJsRaayTkq6ydCfNEffSyrrSSwiAWNqsSsgLj6XniMNzuAmbQ7rh7238GkDhoqBT",
  "key26": "5qAX33STzu2YRKi5iCcbHQskNU452nZtGsJsnW3hNF1CDeBWJDm1hdrpDfFtSDggpxYbGZhDnXN3EA131sVMCARU",
  "key27": "iBGeo8rN8jpxGWKGaJGzgfz14ryKQiUFVWPrSU4kpS1PYRaxoFvn6gP1o9b7mWxnjryMVifdF5xm6vKncCq67iz",
  "key28": "3kWAqDxTy3YpeiEB4bFeRoNwtYeGaxmFAcsWG1iQYHkk8Bdymt4C43tNnB89PWWULC1G5ogG72SHFDV4iTuHyQgh",
  "key29": "4WrGULKushETHf3CUBehsMBLAnZtjxW4TNbD8qbseJNYCoWLtYQ3YVEsGoT9ZZZnhVBZEY4YdGjNf7m2qier3RgZ",
  "key30": "41GDXevVcuJNs5H1AphD6XAt3Usim2J6TsEbW9X5hk4gCSEBBaApnG5jFkMK75eZFpQpNoyMsHQohzaDfk15BhXU",
  "key31": "45hyotTrVgP4YoHxgY26Tpwb5wVoBNew6ex8gao4Ffoc2WUsZmKpsFW5C4Fv9k62DNKC7YgN2HuiV4jUNCoyaza7",
  "key32": "4S5rSPnUA4m8a7heaqXLDCD4dcm1o3DDv3uK1PoyzdRe7HZL12cbPYGc5QFweBEUcwuqFmjspGM39KrERdo5Yr4S",
  "key33": "4Hw5xC8YPGkFD1XE4cndmzi6EaBx3bhzhUMNu47DwQvTPZFDmEYWGFkDnKUn9WpdaaNgpdV3864rC7yhKpzekxMh",
  "key34": "4Nt1b73vzRoLmzY9GmUpkHm4WiVZZqRdPLpXCPSgLA3nrWsTj774bnWH7bX2mD5ZqeB7gEKfx2EDUEQmj873jsL8",
  "key35": "22sac6cmUd5GTYDA7hvbzZ17u2GrLw1Rk1i7ABFU1o23DQt5z161Vrh7wLQMgAoKHcrijZE4QQANmrtZrueojmzZ",
  "key36": "3G5JaPUPkFBcqyp1j8d2BVwMSPPUZ9fSY1LVmc7EW14xrLVcsGnJCLtVX2EvhMfThh1zg9XSFB1naWEmFt7cXqTD",
  "key37": "4PZ6Bn8ttpdAUEX1nFvEWtQUeD17DiDQZdTrXC53ckUz78sPRVDmk4wFAHTtwJFWpWB9JCFYLXnC8BnENkvxPmLX",
  "key38": "2VXToQKFfk9ga6nCqLkqVgsW5qAPrhiTrwk3pRiojFoyi6QC4DgH9sks2eLfUW22AS8Si8FiCsui7ni5snbMYaS9",
  "key39": "ABy3QsoiTKmo6CUTySZu5gH5iFuHDJ76L1M31qKc8e5K2SpfjDivnT2PpJkBQNDMp1vqd2cPTktLWeVXDMpvQCB",
  "key40": "5DEbiJAjBDx1aEgkHKL2S81MPcrWubXccRfvDG8mBYJTEZfBSFy25JBmDweWm1qoYzquvXEPgZt6y9z6dUZbkzee",
  "key41": "2tkrsWAcrqizb425Dog3BXLithriHhDafAkRkjteypSMSFZ3cwHR42HbCBPYhLgdnKyYeQW9cSCFXbWKaPzX6mRe",
  "key42": "2FXWRL3CJnJ1arAHnLAVu1uM2MKRiBbYcDDxTX6YPunMGkb91UM5oJZ1615UF3mfZorG8X3RSQbEfBUfFdEnx2gT",
  "key43": "NDxiGB5CDpkYaY3dxU1k1szYkCJATYv5ER4c4HkYQj5hCzECSwvUm1EsWg1YNjyybRLHbaQZSz7c1UCFFTB15hP",
  "key44": "5duY6ZmqDJEWkzK1xjUVzCzskQzn6UCkkaJ3TUw4xZ7FjVZWDf4AxXNX8vtT3LoJRHZLq7ShsNvJy2tZYrzmc513",
  "key45": "4M3k3f1y1UnLYVNXHaF9ZtfW382FvWoYp3qLEZeADuUnu5XTRmoHWLuoL88Yd759byq635bQSseWGdQHmUdxsR4o"
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
