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
    "4iGjiqe1atxz3XvdkReATs6S8BuuUZQDA74kyuRrtewLLKSnMgXQRquhhgvWNcBpQLSPBGox1BJVGPGCNJz2gmgH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5USqptrKUCbJxuRw6Fde1SKu1sGVUFWGtYck7brJ6Hgu6Z2W7iX1kMDi1gXFssXZSJnKmcJuZo5pZndXXByLKqBw",
  "key1": "3tiT4EfZ6gh2dz3jhjQXwCVimguKc794UYB7LVjQp9bPprVxycRqmu9zzybsMYmBbGa3jgdRWbk2fwLhCaRMDGqq",
  "key2": "5du7ooA32p6fhWzy4UkGdss8oixVBgsFQSgno6utYpcEupGjNyyQH3sV6mPSQgrrAcLz9ANPZTf5i677wmaWqJ8A",
  "key3": "2jTffahGTKPcvuZVfzMC1p7MVVfeB8ANG7guRP142tXvQptBGmrTJLE3f8jKWBkWby8ayNk1TEWnHgn31pnpz2fa",
  "key4": "2QC7EFJMEWGTh4tM9X56FUHU8RX5nzyBTnF8GjLHJjsZo1R9sKcVgKaoDqJiP1f4t7TG7QY8sQZif1rpH8x2yBkC",
  "key5": "yTDwu6N5WWzFa6yHFPHxigvNy28D838TgQ7mVmJtoFERaPCzxzW1Y81J9wxFmGnz3CRYww1TgCqkpZ1BKoG1bc9",
  "key6": "4wArnKMWDYDyTMLkJe3hqSr5uqsUdTJVTomcZMGNaz7uWxPHWnCA62GYzZPUcaFDs8uFb7xY6oXxCBbbsxrDP4Fb",
  "key7": "4Wrs9yXMPYGPHGx3ZdVMFEAUxszmdgVkKXCCSzvSMymuBZevmg3Nw9WGW9iFQyJLPUyZV9ecNf4bkTQ25N6M3P26",
  "key8": "66ZQtcJHDxe39JecBALgUeoa6FK2HFGohmVmQNHNQaU4a5Dmfm3idA6RAsiSDduevuk1ySCpJenwo1PLMe53UnKc",
  "key9": "D7G2ERM1WaozM8ReuUtgMoQHfemkdpy1M3omGuTf8JErC8XxAvkN37GYXrwr9LqmjhnL99tHuMB4f1DdjMTAwFK",
  "key10": "3XVFeHuAfbhZSF4rsNybUvnGYKY3yFhzXfC849ZR4kwjBgo4Za7tUGHruNZWuQ89sGCkp9cKENN6Z74yWNVzbSvq",
  "key11": "5CGkwkHwyYw4TSwuJ2iEUZPh4b8hjs9pixA63xDemFCP9SkPJpi9gDhU6ohvEYCVLK8FWjbdE7f9dfC2zhXitc6b",
  "key12": "3EE4MKP5ftZnhV89vpz31hAv2T5WPBrPYaio4uTA3kDacqnJmWy4RYEHTGpXVLn2h3CNFeGvprMKMYAEiTNp8sgf",
  "key13": "3hULe2XannHbh4FeB8sN2MjQ1qZ4noPG5hDjMyHXNLcogeENZ9ieUBVJrp4ZfykeeQQm5VBKxpJFpgoNCVprq33R",
  "key14": "ci3YLYVrCdehSsgENGtMfBCJiKjPbi5zvERzbFR1rvKrvey6VfqthmS9ZUhci2TAecuDVWMVV4yaarwAsmgtEmh",
  "key15": "5oQL96eZMCT9vJjEe1MWEjG52Nxa7nJUmEjddMjXBJe66xuwYtoztMzTC2g2aPQigQx7HyakdmUjnYj6BjCKcZk4",
  "key16": "2zzVyABn4upQ7psyEC3nYSkxTY7siXm8JPmkT8Xf48BxZMRwPgeyn46KDFbn2D3XxKgtqTRTrnuMr7vGf9g2ckdm",
  "key17": "U41tk8UWspLa2SDzCZedo3TA5iYu18EnkRowyfJDP5bA9gJoiQzb7so7XHkWMgksiHWEB1LkQa8djvScXKFADTn",
  "key18": "5JqU5sX7LyAY2B1EdqynqkbnWbm5fB1scBkwd55WuWe2xW4Tm9ja1iT4C1MMtRtkioWBFxjPqmDXnd4KePZrubAD",
  "key19": "5oeFqxp1eXKrB7Dm2G23sZ5EvJVxoroNGNSCEdpojifhznvc9eJBpBs9UuLDzRv6qsLnQVgLExSdtDb7NuoC4rsb",
  "key20": "b3fCbFQaeFw6pCfpKEtGVmmWVTGRk4G4Cf4Ug7oWhvXpNgjW9DxZ2Z94n9k75LtwR7HmyLF5iN3mU4tjbQUgFiu",
  "key21": "3yKUVCGDqmFXrKNosFgVgiRvjuACFaPaxbEAXBrRvaDy8AZLKci28YtDDYV6UWvotBrHfGaBmQsHSRG7sTKbRpuJ",
  "key22": "5VUM8kvBPYKZtkKNaWVKwmVkTJrRe9ChjDAFz43udd5DMgbRsXa8D41hbBwXVYkYnsYeC5GhZuESkHDDgqiBWn5N",
  "key23": "4TPjcev5KitxXiThNQ9DqHJWRX4eZfPTz6WcUDT8AcNQc2zoeDJ4EXmEpocUVKwRXp2zHCq3yzsodXAaKFvQiTDC",
  "key24": "3eBHNjBrhspcutSuR1wdsSCaRvxi82PF84EGoAWXdcxdL615xoPWoQx5MA4yjGYaXQhvG3hiehg348F83fuqe2zy",
  "key25": "3ywyKAuLnNiYsiJLMCCsCigXfA79Di7moo4667HMkGdAFN2WvnijYELeYCFGEP4uzU73BGzgB6opEVXEqbDzEjGo",
  "key26": "27eXeNHqiFQTpAQv7gzZmcoQZ8M7VwyteTBNTw1S119fMVfyCCtQGXymr76Gge3KQCGCidyhiamsYn2KQFSAYXJ7",
  "key27": "5YZokcU96EKjMfDLh5DGBrxLCag74MyURbQQ9nnxC3deL2b9rYjzWQn2DndkaLhrWY5pq21Ack6iGphf92Xm2XxU",
  "key28": "4nWhCxDAbAyAHGskvQcewQEmHmY78Mq352jRncoqq5qwJ3VM6ZvK3tN8rrn7pHc2s7jqzL8JyArsfieTefxs5j1f",
  "key29": "3KtdJZvkUopnqJztYgTXnx5DJHqicpkjqyE4EdMYWJGU4AYvLN4E1mhUbBgHrRUG6cm8VTTV8mrpVkerhZD6bjXq",
  "key30": "31M2GkYNxrojf5giMqzk9W2j5QxaJjKECdRSguYfaNjFbRJRQi4DF1NykPHWN6pG85Fku1jovWNqDnWfPRQ5LxXt",
  "key31": "5hC2Jm1c7Bp9tA6FFHdYz83k8rnkFeaCFD4qKmNCkKdXV9tzih93x19oXpjkQ3C9upGbWGJywyLwgWDSsNDBpaMY",
  "key32": "3r7f1NnuFhMaGk5ZMTceFYTrLm8Erc9JRTsA61BbpL499QpMCESZD17UYsCefcsTLbL9Cckd8CzCetwM6czwaKzX",
  "key33": "2L4xY9KqvfEZ29GtAucHSBs2M7ZxFD9NPLkB9H3ETV6W15n32MWZYE7MtavG2CTPhEggaHeN4ydvFH9a3wrZWin5",
  "key34": "5L38rTxsEFFVU6PaobtvoYpoTYaNiZac6mNmGFKgLydyMi63WRQBUdwn7JQBHctJHMGL8Cfairco1h3p6MDno52",
  "key35": "5pNifukP2fcbuFbXrFwyUxMkBbRoX4wHUoJn7mBT6k5iMuc9qoN4zgHYwzu4pPZyxDwRwVuhyLNZW1u6MLU5zdLQ",
  "key36": "57ED8T6fSsQzvTZmJXFu5We1b78Z9JcJgqEHzBiV7ijugnYWZjn4FeRNkXLrv8x8KpKy7yhfYkTJxCa9MvRMfM66",
  "key37": "57m3YcksiAY3kbvDkof4qhuSBrWjaiRtzeAeXbauZcFbj5jsrSMXrGbhMPXrxVm1JVGtkJBB3CTjfDi6rEVZaT55",
  "key38": "3a53EP59Qi27r3W4pXJ9k5rGpjivMDUySFYV1GebSusAMgcMpBeefyoWimsSm99YYTTUUJrkdirSS6zFYie8j8de",
  "key39": "5Bdz59zvxRp9CZfwXZGNG3sBgWn6CUAVya9GCHpPN7NfyYbeZGuWMcuBouQofnt2zCmwxuqwXsWwBrfvo9Tufdrt",
  "key40": "3jJfM8SKZf7cRL6ji9S2kQuoZyUoZt4gnZwxAT2cNnVu5sG85Zy2kE2BanCyTX6ChmBFHS1RYSvsy77ehEWNrvtA",
  "key41": "4HoU9tEZ22RhyMyerssra1cBoc9ECn4GLDGh1TUNzWqNJTZLBo8HETcF2m7gqiEky1UQ3mCVATZKdC3E6h2VYgCV",
  "key42": "5aRgdLH6yD9xzysdAYquAe6Es5xPbUXSyh44zGU5eonWSFoyfCoFNXAJ4Vnc43wbhYefb8wMTbc1Wy9s4bTmiJ1Y",
  "key43": "4FDA4axX4V2tiAP1o4tYRbKUeNMjc8pLcM1mUYP96uQGhCRnf2mpDZ3Kh1NuH1NEV45faqGCQHEmTXbXgDyzzQs7",
  "key44": "3auCMGj64Gdpd3tsv3poSkyVqCNq3C1v9bytqUx3jrmpsoK2vWudXcZhuRux2qDiCzfywnNK7rPESzsZJTzEx8cr",
  "key45": "4BwqsiLh8jYwTfx9PsvnJJX8rVGA79BhU4nNU5wfLj1PsPS9g8jdiUTBYEDMHxSubFEecnFiz6UJCwPWJWHrJjNF",
  "key46": "3RmNf24hR8m1F8wKwavQEWpcvhCXTegmDVNubvRyXdQU6w6seMvwtJ8uiuNvbCXXkk2MbP728V2yrKz1SxwTgnkq",
  "key47": "5v2bzsMnyqAStFvyezb8CMdmNWsbeAKV6ymTXRYxpsp8sVhz6rCGBRrLAi3XvWbFAGDrJimgrGqqfifbup9UcMw5"
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
