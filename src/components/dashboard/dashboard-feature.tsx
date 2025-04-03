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
    "4FVvXoNeZzGzqUso6KcvEpR8AWhY67RBPdkQvdsKh7QSo1ZJVpXFmHxCvzJyNin4U1hEeKdiEwMF8J6PrYKhiExL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QX2bDpvtxowY9fdZSDWrPcXe4YSbdANBhL5cjFLetwNC2Qw1gmtmnakYNznvKeiqbMS3pmvZiQQqH6y7CqsLCSC",
  "key1": "64FYNdzDGJ6o8hdviRACi4rKaJuty4MtrSaHnicpGXqC8bgodp3dULqhbQFB37aVkomtJdwEfvkHMA6DNi9PB8fJ",
  "key2": "3SWwHgmAvKj7yR92ALuT1mUK6vdCNuu6v2EzwHzngWks8EEB3aBNq7Tp89dGh8BwjRtRAyKk5rim4ZKxYjGbhBgA",
  "key3": "3KoTecRfqXfx4A1pcye1hwGEY92AbTzCJfUF3DfJGCSYuMoMjJvQZXbgE3XNdiDUPMF4dT31XVZ7EXcunpqiSSvC",
  "key4": "AQqLKsuZuCqPmsicCQvAqArUYbvsCY9UbMxDmjkeJUYVZf55UeKDh9bRqezJtDSZE4fLHXodRBgofCTrNSQtHjf",
  "key5": "2dQDFJNpZ6NXKnpzLPUXZXczpxW5tA3fj1kJioKihxsJyjFXZfDw7rz8rqNQCL3EksG1XR5yvrfjagnCLfjPrhoX",
  "key6": "5qvyrEhiT3xiu47RoGvFYZ4k7KWedA1RTRb2v9KgZuaKMaK5Zx5UMuHzuJCeq73onB12T1YVfCNPUbxr8s9aT3SY",
  "key7": "53Ht9jQDG4r25Zf8U148Bmd2UgQMgeDPVbjE9VptiSUpeS5YZcKEQ59QJbZ7SQaN7N32vob4Sze6TRxmSMQhJ1cC",
  "key8": "C9HvbG7czMuxGDW61bzfswe74pUQb6R51XQSXYfaeNVxtKjsAQF9QUzoXzEaaf62uwSCym5noeQunyWk4p9uffw",
  "key9": "2ugEzxjzC8vCVQqugQx1rMtdQwrADWq6XpFAe26QNDdnSQUHwhXCyfVrQyLA3gLdzq2NaYMXemieuwuVNRtHB4Z",
  "key10": "Wpr5Gedaq1x24rJH2wxUsDi1Vp5uMRLi4yoeJf3fjBTnRiAQdMginpuabzk8GJ7j2AnWwAhTsZTgjkmpn6L6iE6",
  "key11": "5wtnAvsazJxMnmtpdwyEVLmTPyGbzQ2ewJUsTu8CkkZ6mNnLFcCMJnB7ADdEQuH5amuZW87pjeKgUAhANTCZ9cSD",
  "key12": "2t21FSrF6ArH7S2JoVkWM9kNPQ8zC4yfqbTrSD1azTn1NeSaNm7tpPTNPvGxW9ih1US9yMzh5r8eVeSLg74EYB5N",
  "key13": "GGUVB598R6aGqXfKs9TT2nhk6jSaEkjuVKnQX5tT8imSPtMtFmXE9nS4auBkWUwyh5n7CZB6jetcta2AJMEm4Yc",
  "key14": "5RMiFyr2uiyzqZ4VVQtundB1jcEewj97LaQC4XbiBEeL5cnybpg8mwj6fKTvLokz1djegLNC9Cwn37KSQshQv2jy",
  "key15": "3Z6VnYkcYzkZ2ENAKyLoGkDtGJEv2nqKYLecCyf2Ktxqdc51jaGZ736EC3XL8ngVWBJHuL49yHib4md8tv25qPPX",
  "key16": "2jL5PTx1yj1n3X9jWAWtMcDo7r5ax62WDqJSRnJB3FDwWw2CaAtyocypEyqTfvTV2SnQPHHvVtD4bdUKsGpgtbZy",
  "key17": "22PWp81SC4SwsbWfRntos2cmNpRdLu9pqCxiS4JsCv1Hv98VEmuw4srjQwHRkx9EM3DGGAokkESMBHdksh5WGbc7",
  "key18": "3rSbtK9VEfQydWM1MdsUC2ayeSWNQttL2TPuKEQHG7hNxoP1SnafBBLjSm3mJiTqjkFSM7FyeqGHmyAdouUK1qpo",
  "key19": "2ufY2sRSBZjhezSN1HbFujnUL1yfAxjzcXHrX2Nrp166r9FNiPNfYAFet96onSsFgxAvCp63xf91MsLA2zBiNVW",
  "key20": "2RJqZUUaMFYuB4wuaSux4x5vj9t5BYmrbSw9VgGs7D3FVzAEaC6FDR8G5J6SFe28TAmk8goURJHqdxYRWWDw7M99",
  "key21": "48EeZHgXmepjVWhEHWwLAJSqkD3cC9qDmvjTkgS1QZZ3BFEX3TdKh8vJNyW1wbnQwnjukCcybg2aKEva2xF1ZWqS",
  "key22": "4pZcEKcwMNV3dx2DAcJLiVCKvDUdQGywCuhftmQsgipBz275QdarkstLEwTZFFQtqmgFQTjf9YoC4uwanmhV9kEo",
  "key23": "sAGtg6DChUg9QHS9B2xPAnXNd4WLHgCrkEritJJTUuzV1FYEZcBSHn1MDrbAoM1BnXqG1EHm84PrHhaFQvRU3jH",
  "key24": "29WaJYrwGfdaRdRskcDfxAzmruC7DsioJhCwzxfWwKuvk1prspPQDVPA1j1behRFnfJCe76owf2fqVFrxCNTFUjw",
  "key25": "4M256dj7e9J9YxbPyyE7wzNQK8RnmQuQTEZw8wzfjbBw9q3YkUccvqAb4UDLUyyNzgmp8ivSftU35j7an5v2eBWX",
  "key26": "38gc2vdfFYfigWX4a66GtGFzWhNpnpajitVa94HmgwJQe754VbhvjYJppsWPVw7npxD5zxF71Zx1mzM4FthDMFVq",
  "key27": "2j8wFyWN6iwUpmLbUkcVFXmyQ9AU9nrx6ssnS3jv6iviK8fypbjGXTKTiEritbVhuSfMtxKEP1p3U7cVrmRgbWfP",
  "key28": "65gnvY5L8Uh3wFZMrT1DmYdwLyC2X65RGe8S3HtVjhEZhtqRSUiqBoYWeohjVkHx5RmCjuqprVwqLiHB3M4tXvbx",
  "key29": "4xLYuhMmydGwqiVcFm8xKZ5jG9CUZVHdFxyNTG6pr2d3AMgwzJk1ABLL6HNLcJYhmE9RwUpE7DGmBe7p2XJ3QYyu",
  "key30": "2g7ZMeHXumidgNMzAi3KMuUqDVfNRLUwh39zAojdZWjU4EfzRMgW7y4joiarSmpkYAYagWnVLiaoqd5VYH4CMSxM",
  "key31": "ZKQ77V4CDyuUFdyX8x4QvgywDLw5ToeAJnC3m5Buo6KZGmuAE4GPwaZuGMnAi9Lit5NPM3WuiSWHrq6PnoaqHTt",
  "key32": "4UsuV7Mf2pfzjdA1AS4239fzBPy4gNAWCD514RCPESUtHDCFJ3UxTzqTsa9RLcEzM1JH4WLoJgAJCnVNndA5PEoB",
  "key33": "3quKZabnr9Hy4i2FRa4vvhpVaniqxDK3mVzGAasAgkSxWpDhbiQNsraDRERfY2teWQANWcHNC93pMpwA4WekwWNq",
  "key34": "63rGVL6BP6rBnWXe2xa6s8BeSQAXSMGAtKZC1wf7iTpsW9cHMtQ1psHSwH8QX2VqejWyssmSzZk6s59CmwdEudaz",
  "key35": "ooeYxUYEoBpxg1va4pTzwpsDqBrCrYvYbctgy4kZxwxKh1ZQ4rKzQAkXngRJrH2eR6nHW1DeU7GEtNHByB5aQaz",
  "key36": "4QaaBSeRzN9Zy5VFoFVkYpKtJ7pUMykX76LAq1ULDxXVLALtBsjP7SV8ympSpG5KZCr68A97zqsKZvhvYyQixAgZ",
  "key37": "58V9gCghBKQpHMygPK9GmeXzdpMmgGswJP9aJaXiFp7WfAyxweX9MCLiS2WhhMN6Y8RUsoUrCCbpKXkaZcUbEKTw",
  "key38": "34PkoAmRS5KE3Fot6RA8YYS2tytNBwKibotZc19WmFVKY5wVTDw9oQFct8qPf6LDBAgT2Fm4DveEnuvNAed5Y2Uo",
  "key39": "29t5UYDhWNWu87YQjeUhJiU6fPUDRCMDuyeMLQ4yoUU6mWri6rqiJ3xQdqPUfW5DSK9eptSGDxGQobk6LqVhLw8U"
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
