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
    "3X5KnNSmZ1bJkCzBPMzgKtpegNvYsyYskD1AuxQoSpcYo61b19sgoGVV9eFPxtzn1tD4xXHKq6pFLYuNn6CyUJyp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mz7jGPzVd1qPFiDCkMuVTg9YwEH8b9Q5jAMCmSi9KnATKp7XLk7MASQJ4z9HbYX6b2E6uLDiAxLWcC8kEWtZqgx",
  "key1": "R8korJjMbabbBzfSkRsRCuESmgkkKV2FWkTKrZFhcWJ8q4z7ShcrxG5MppaduuUjQn1rUEr5bPFNWQ6PeqiBNee",
  "key2": "yea9cz9qArTtkxKF5bKfHwA93GZQL5ifb9CmaKZ6fcb1M2243bsjSYFWUDV8i18UX6XKnCG7YK83KJ9tUAd6B9G",
  "key3": "4P269H4Ms2zcaPWeUDPmCqZXQfYzzhFYSnC8pXBoKBFJFMquchuv9nfqgboS32gqJwfuoEg72RXGa9LWJY3pZVKE",
  "key4": "3MuJoMiWBdMNBXPVcFQxcZgPGtGqY5ueZR5dC5fF9v8dcGyhGADB461e7N94sGNm1uwsyN1NHeEGQk7xEE95o1Sr",
  "key5": "4BUdqn2JFRBJKbiwmd4JHdWVUfwkd4S4yTXDmyNmjFLXtKJjpYnHfy2aymF5iTcfRMiwjxueN2FDrJA4AiX9VqGH",
  "key6": "4H9PC1nY7sMWCympNp811wLgRVA2XxQDPAcw6DQxgPPLB83SiavCEWt2NRyG6N6rYdEBSysMCnPN4nkKY2Aazmdx",
  "key7": "2oiEiiTYs2TN2WZG2cuns9VJRsP1apuivRgv2ApgTj1oSuoKxszY53kNQ2igLYMfk2gkaC412ywWGWKxXR2a12yX",
  "key8": "bmRSNZEaDbSEnnY3CopevErwCoQrfYRsDkiobLs1aATUomCYRChVheqgPTg6G8qjRb8wCkCGiUZLF3Lcb1TPciz",
  "key9": "MiitQ9dM39XYqcBDEhnMZjUHCTbHjS1sBJhM1QcD9eSZ2URMLeHHCdGhzC13UN6Z1vCMgnDERoUHvQhMvDHxrao",
  "key10": "2wGKwk4EqLWhTEVDGbTS7HrqfLgUaCJdCLwXbkL6rpCHCM29u8oKxyPLJM48uratKTTZxCn1djkv3r14gahvz3bP",
  "key11": "4kWmjnM7Gqty6Syta7Q3Dbna1w4LR1rQkNXKjRz27cS1RoNWXNyWb137ehia6YxgFo3DbQYPxY2TRYZi4kJuEiiN",
  "key12": "23nFsrakn7k8ayeRAJam7PUBGcKN4xP2rwTTAWJUaG3uTNxi8bSrQvWsbVaai2Cj2qXrJrCXEmK4fYvUCAr838Q5",
  "key13": "27AFESA9qwuXr5tRAXeAasYFJZS9FHTusQTsrcE4RJKhnb5DuxVCt82bsxvTTFE3da85PzVKgdJ1mVM3Fk2Lqa89",
  "key14": "8QbTXpmiaJrBuYrqf7QCmHULAQydevJDxMgdKBWo75gZ2ZRmwRmvcMFBFjLST8x3sxmzZinfVws3r8rHq8ZHJG3",
  "key15": "39eiC3hWQynBfQQVueoGFRUGXqADQg5PNETmuLDFEiXisEQnxUXfpbNTbF8E9gMFEdJj3UgLgvEdxAYW1RtnwZcs",
  "key16": "5uX6Sm8aiWx5rgzAXnF6KHaK65SweL768ytrsXZZoqWuxcU1DZbX6S5gKj5Zbc6LCEBWufNhm6LZPRPvmc2M46KG",
  "key17": "3er1b3vfaKzs3mK3Fh5FRCZoUpdRia2NBEZcCULLBTbBHhjt77X4YQHqhRubQfxWwCrdcusR9DrQUpgSjzoye8NR",
  "key18": "4DEhpk6nUrz2TXfjqXCTALemPPippAoaDpqDhqsdkQMSTUsZVXh6dW4jH78i2CdAqSLeb2eQaUtND7vgTpyZzQY4",
  "key19": "3kMLuc1MZCDmdPDVjAx2u3dMH39ekWAPytJGWLg9D3ZSMmzVEe5BBiHzyow9kpPc7CumJcineMk7ZESfpah4wzhb",
  "key20": "a3ivB31n99MTR5aNxzKafhqWo7YXXguLQk8gnNwE1vrRNGvFDZpfBEQYgLgePyq3GqGRdaeYwc8vfAgV6ihuSEC",
  "key21": "fPB6Zd2sPUVTjwUVdvxRHQCGctzG1n7JnrCjUSt9HWjpya9tNyJHFanFA7J2XWvWof4igyi4r4SRjYXwvRc4QRa",
  "key22": "2k9U31LchBbVbtS5onngPcg9aeG4nrkek4EEHihD12SfFWsJ2GS6b8Q9e1TxbudL8TqbXM4b9JT19UboUomk6z3e",
  "key23": "67TD1HMCgLraVkjDySpfoa7cBk2VfLWszYXJDyzp8KJiUZqGs2ADiBXQJWvpUdN9cerSXvCw9gfGtWcLwSJuZvjE",
  "key24": "2BbyLD47tNsmab6MMYdXQtVrKLfKyCjM3S4ZRk99ShSabDwMqB6RUS3eH5QTci2qHSgtJxsvuRjkjPi9nTopqCA4",
  "key25": "4bg2DJ7jLYnCGeJ8FUwi5KjySKvMi1LhrmoUd8DfgQ8eQpG2AzKthrZgbPfCsHzAr47BVPZ9WvBLoDxemrLCBcA7",
  "key26": "7LU5PooNCQq4TuPAiv4EtS3WU9ANssHBAi4JaSpWekadMp3Aczv5GQbYuVhR2oebQdXvbdTHcN5Vzyxt1WW54fu",
  "key27": "KJVfTxceaihiAKTqokzQweSMgtDqFBykyEVWF4iXmfXaT1sscTMDzZb22ywJsC6Uc4YYR3Wy6yZ32j2Wh22wfDn",
  "key28": "2GhzecYb4rofPg4j6o8oL5Bq3qB6CZ8KnWGEkYugpWoUPHxJrdTXHSk3CfycdAGGA9HjEewMZhSx2wmEpC9YyQNJ",
  "key29": "QDVZP7Y2on1yXgrHUJiKwZ7GvT6hy8osrRF5mFtU15r3MRSv1LFZYhNUSRVhYfxG2Poh2MsEJndX6firZcexHvD",
  "key30": "54mUXjA5QXna9aBtTZ5aK5h72CsVPoppZNStvfJv9BQ9ACp4SeNdpWWbZDMxrUQByraEz47qurU1CjJ1FXpkvd9g",
  "key31": "eNWE7sEzwTps2AKJe7MHRxfHU6ihsUFEnEvrmpEchFRemYaZrdtq9VQQrpAXAK8fVygdAu8HbEMbuq9xXoSHwaP",
  "key32": "4g3JQZrJK1hnFEhAqr9eDEPwhTQjC1dd4psCti58tsBoJ7pM9s1KT87NgJfgA3WJ5DfDhT79qiCJQHg3Etc42Eu5",
  "key33": "4sfhCTxsTNKYARjR2k2QQtD84RfJBc5uXekz3EhQa1wb1hqfWM78fehUqkUpSASZq7uircnQyMVwsoGqj23M5rJd",
  "key34": "2bUoyGFexgJBgomV3htVVdJvYkPEqwkoZHnACZCKKcDM8DUQMbwT2tYMSMUhnsgiwsXWD13oVdiCWEo2kKUGoxpJ",
  "key35": "xHVU2QYzNNtmY59UuCkKica7oeFJyExqtKAFzckvQkUZtgh6pREgSdPwebB42YDXKSGuV3DbFhcnR6NQfzbkPAd",
  "key36": "21CVDe4e4pyFqZAvSuRN3YTUtez87YomggjMh6MR9zV6VP37g8XyGipfuEvssrDvDo8EibHzZngXesyau7edDXZ5",
  "key37": "3cc5UqHA3wTrpjkzeLZWEACDCwTdktbHo34oX8Dr31SVbQXrJEWh4g6kb2KVyRsA9FtCT7CUuJkBa2rxRNMJzbh4",
  "key38": "4Qr1CBKwBTVJU8pHpV3crZhdiJVuXLukrqLDK3rpiVrABDajxT8bvGti9Yfmo4n2uRJJSwW9UuC975HCchd1sgNQ",
  "key39": "2B7Qb5kxiBCqxh2naKkkSsJAgssF3281hPNs66HNje76TrKi47uDvSwyw4ndc72ntjdhE8us9CPy5KtiW2fBWcRF",
  "key40": "5VLYwHHdnLpArXF2GP1tgmSeS2BEzCiDe6ZmoEVdneEmKL1zZA9dkCYwR3hGA5eUD4ZU69nePreuTD1hYnq2mN2H",
  "key41": "tE3NYki7cdvY3r4AybVEZvRipasx2A936bvqbW4xFwzzodaxfSHEDnZ2XcBAN4o2htRo34oetGyw2rWqxCu9ozc",
  "key42": "4CbV4DjanoGg3tE4MQFyPNuoi7oPx3aHjCNV5SXQRyL4agVNwUyRXL7pf1wNVQQi9DVw7eGwiqjNhJejWG5AnazR",
  "key43": "4EKcDGUFN26FuudDw2x3QH6CizwWgZx36J1adbntpg3vVrU4uXFMvboZjWcD2Q7PaaRnrVAdjdHbr18fXYG21Frp",
  "key44": "2AQ3onVnGWuERCdm8ZrN2dK1CdkgP6twCyrasLDEsZL1cvdVdDNXrF3HYto4He1qeonCgXfrzgDCfenqDKmsWsAv"
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
