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
    "3H8s1UKCdZScGw4JcGL3dvTGfEENYMHQRuVT1du3vQ6HrWN67LJ6YGhdgALweFMr7RvnXzmsr52RTy4RmP2bnovT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TRF1RjyrviLG6yxYhLmhauEKDDvkzV8WJB5qSHY3wvrmSqbsZypTZXgSTpvVqeLWc9GWdiV37y8Ad7WjU15x18",
  "key1": "4HiGxhKAQPW8qPe6bkWMdrimsouuPDbgNPwYmy8MST7W5bWyAT9av8K6dw8xbxaH7VveuoFCDdef4RT5ssrJPFXo",
  "key2": "2ZdW78VKscMmzvE56D5ytHSt1pvDoUvXFpguGZxHWsCDwNeenmnXbR9qdmFojYFDz36NWsGJ6KyndjgxrtSFMBYS",
  "key3": "4xvWb9R1m75VMGj2oaW4C6iXGt1R3orWyP1C885KF1DNgz8w6Z1PMGiF7vo5oMRohJz5tQ4NDjUHiFpNHLvUCyWk",
  "key4": "xAuJ9dZ5S3sdRTxXGT5n5JNV6Kray31r75sggdj3i37Mw4UqFM9fD7V2RnKYHb2jRN1JsbTfwqdHSpznLU7z5R2",
  "key5": "H3L5qJu7kti4z7S19SN3Q15aWtL8BLqyjWjviNYR8kABuf3gLbVvanfr3ov9bFo15NDU81Qz28QWDFR5vwNDGEg",
  "key6": "52of71B7Tp1AmedePgJ7hSy7UyvTSKg59A844RPUFTioMF8DwkjjRkxkTGBbKmUSbn64k3sGHThAYsitMDA9phU4",
  "key7": "2iby8zoEBWk6VBmJXZvBgtfSp1Doabxwdds12sxCojbwnsjamNkciGeFUfWrbZeUYhRVLT4YUsTC5EXvTNmEmM3W",
  "key8": "4oYaEhtWiH5hGukubBpNqmmARCdNuvKEBxawm3bcti4Sctx1tw1BPQHr1VGb1Ygf1mKBT9NEGUggpir5ayvEH1K3",
  "key9": "39EqecRrpQkBkJYGPQJDXgxQqXa19nXGQiXM2vvkoAoxht2t2LypWCQ1UvqnK9qLCF6zM2wDFQCPPYbHJJwxeQnm",
  "key10": "3RCnz45f1qvAuKLMFa99PkVR6bvkcTAmw1qAjScoY9as5X2aZqrNLbHojFddhC6DCSRD3Ey3xnWQtwWVqaXYETht",
  "key11": "4GY19kfKQHBwJxXrxMmkYufNPMWHCZ1ZUjnMabmyusEv1zSWr3YPxFAjdpeqR2F96ayJvM112nV2W2Ru6Vs8GnRt",
  "key12": "49uoNz3bdoV4YBLNXT2mP29khp9VybnCy7BJPJj2855keaXaUWYPKJ4yt2xZ6uP4FQE5qTpGwiBqAx7DBVK8AG1M",
  "key13": "5VvnNASXChJRshapqsHFVHhCL1tmJzcSsv1ex92RAf1KHvPAiptjkRJdbJizGZ9chAxmW4W69hH42HA9p1KmdHwL",
  "key14": "4FTfeAViRiMtS9stqZoZTAKiuJ5R4qyPFrWapizkHFPasHMvnQzDY1EBctwzxg8MMJy2BeNVcZFjR99Ae67vtqxP",
  "key15": "nZr9SbR1DZfovpNEY11EN5AUcg9mM3nfBKg4NGH5oVutyfUrdCshz6EV59W1FxLG4z4t6KwprSSD5aPaecdaV7j",
  "key16": "429AjhcuoykupaGF23MjypJQDikEWPiquiXZqvwmW1EHnQePhUPRMBtvMdUGdYUyYn4DM13T6jKdZiU13ZyVAiAC",
  "key17": "3boDZseRKPJnHx3ekYfMNPaGmC7kVty4eVc5harb5soZiQFYchtJ58Ps1xsxiiLkRFErnBfPVUNP6xzZzAet1dBK",
  "key18": "3A6coWA7Sk9agDwksYAYEq6NG3cVREKwaw82iQAm5bVhsusc3qxVykhUCPwVXsEFCwPUeSVmFibKL3hvuTW21rt4",
  "key19": "3zUCkxWh3jcRqRHbREFa8ntdN6xUGMrny4TzVgwi75K3rx3xF268wwzjFQTweXHFxhdNfhdTGxNiwFo4EiCx42Wn",
  "key20": "2kF4vNaiXvuShvtiTSFCeNQc6gn5UnNvGzed3UL2msK7hbF9G6qFLwJ2JzBNcmPRj8e9qitnPf395MVtbFUaHKAV",
  "key21": "r6BzRrLXevHtMf4u49fqWEzUMdbA1ZDsmPLnRxnXZiaXdMenH2kY63eBcRMDN8SJAy9nsoshCD1kFiykDzXb5PV",
  "key22": "gN8DpKEmR8QVGnThBV6VU5F2Amiom5vvtDyXKwyzXL353UuXWzmk86fk5nW3qEkTM8xeW5yMs42jqegZfmMJTPD",
  "key23": "C7wRzGKRvfKiPGgz4ydUSCYtZdWvco3xT8U2uLGhyrHAcKd2QYiq4UpMHHC4B4s4HkJtCffaXn2bkp5TkroPYkP",
  "key24": "4NQ5rjHgV1tEaRaAZWJ5p8HE5dCspsqgLBc7A6kXy4MwHSAyRcv8VKq148hoXuLFX8zhgmrBBkSUQRKQL6t4577j",
  "key25": "4koizrFKp8dtZEWDqCueYXbyrDt4H4pgCyUV5NJUCSfy8fcr9UgqycCWQNzfrdiRLhBmPTvbExcABCoZKYL2RQsX",
  "key26": "3FZMMd1LPpjaeijdFLcDgASpJaGGcTcobUEgNBPdXAPvzygVM3W9tTvX2hrpiNHMFAYfDpn8kzgyVm7YmYa4DQcL",
  "key27": "2ZKBchkDbATZKoTVCLAWxUYxJ4jyibEknYNhhCFmHAAwLxV1awgo15K6nCgsaSFLQomKtD4KVtyAzWGJars9BaHK",
  "key28": "4bbPC7Hj8RaaC3eSvQU8MG7qNaR3f6C4zhKNA8ZRZJbVq9JMRTmR8KG19cgNsPUwFFCLKLw623RAfQCqDKqqnaai",
  "key29": "2oFrCYUz7XCGx8YELjGckxhZcwK4m9c4XDarT1L1X2m92fKuzz4tHVpsqb3MAfSXgQmyAALuzoENHypYsYo8vQRV",
  "key30": "2pYGJot7hPjaVybbcGMhvyjPfM7W5VEb3TnXiEX6Baf4E1BLChJosSzBzUQDnJCfbtzSdQWG7ezoUX6EumkgAUGr",
  "key31": "58gMfko4dbnnF6zRj1w1L3pGr4bMeaXBR6tzf1urqBdTQt9rFoF2sa1cBP1xmCx3aZprwfV29Z7wHYuRU1Br7pPP",
  "key32": "2GSsRZ3ypFMew8iounkmsyLzk3BT8WPDiQkG7KhRNACDCDTRwWsDFRn94b5x9MwMNtbirDrWzthnXKwwfqENCP7G",
  "key33": "GNd15Tc58R44Ggy7SRUHVQDDJeffHaGtosbmrRej3mBv2t6JpiufpnqkK4czCtupGNpANqae5X2xYoN99cWmHqn",
  "key34": "4x9vtjULF8w8QjKdUEreiyzUZEnPmq8VxyL4zLwn7hom9t2XVW3RMnDutkoWBkEqSPZNKyiVv3SbZBt5a6rBy6qP",
  "key35": "2TiNLdgmDEXAaTswBtAvnAbFK3q8uwGh6PW2zTR79UAVPC5EyQpe8hWZ7p27f9TprdicGVjoFqQ4PogZv1TQqxZT",
  "key36": "2HqT19mJx27eNRTzP7GJbEcc2iPsbBe2u7tJw3SREkQMzF49zRcsVaNRujxX74ZJZMTuVyfHhoyvt4nK1Nu88RJd",
  "key37": "4oqg31HPDQRduujaW2qVSo1twt8ovntGe9aM56Yyhme7XFuXn1hpYzDfdwQp7AmYvCHmUR5XfoqzZmpo2EQDGeAt",
  "key38": "x7mw4982oirkpcSLhTvy6pnMYAS8zAehkeG6mgNCtppvjUhEB4N9iBek1ZT2fzBbWbYww7tbUcczGACW2uxabVo",
  "key39": "5ieTDS7u4Z3NMQHNotHcs4abE4P3uVGe9Ko4gMfLk7bxM4oqH5dK2yw65B4zLWGRrbHjosuMsjvsxgXCFB3WMWe4",
  "key40": "4Fu6dhDU6v5fhgV6Bu44p8q8xobHqgt8dKdcvdbUYVjNuAX1C8nSqojP4mGGbNt5gY1hHF6WPqwd73NcY2rDD4Qo",
  "key41": "3VRVqXKHMgPKhA7HowoUTXL6EQVbgwtvKDGLY3WZfhePGEru2WaeqwhX3s9FY1g7KBWuQ6uWg8kSPd6mVqaNUSR5"
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
