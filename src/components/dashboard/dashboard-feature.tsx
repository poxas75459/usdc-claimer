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
    "3Kkqpx23wYRbrpSyQe2qh2dC872Z3MT78ocz5w4iX2UAaarUWZzvjts7teK7iNzrjBdmpeBWDZqgRDgYKanddud8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mhd2CG75zxx7rxH4cRYBAJcFecJDEbhRAvb9smkAvpNj4uiYP7Puh6CV1DiJXx3W2TpxPwfnNZCsUskD2ZAx6Ys",
  "key1": "2mBtWfyNCu86gLLHUG7AxifMiMqVjDAd8rr1QfusGoLDDGtHA8uuognF6dryn5SwAvKXvmC2uVF1RXbGEuGuCeZs",
  "key2": "4nUkJd71P8K1HCvJbSv6kDyyx7j8Zsv3XfefRoLpezqmeLin4FioUjakk38zr1dbygiRHx1WQGGwbUAEH9qBhvof",
  "key3": "641nNCmWjj6igTrArMkbyhSgyZUVnkAtXoMxgEiCnXuQJyrEkKuSBhd2kJSyZk6hvyaHpctxoV2DVLnyzkPV3kBu",
  "key4": "YC6Yr91aXYtypiJzbfCAHZm7YwRGmYMynYiWE5iv5vnBBtptsfzV7bALebwbu7JukErZFPLHAVFoM6EnRidy79P",
  "key5": "3z9xe9RZpy5vg8f5BmD1YPeS4fK9eSymXN9gR7kEW1YR1us24hBAhzf5YVt7SUvM6JyFRwzawTUGSP7GEF5ogQ5p",
  "key6": "5VEK8xgzxND9CSM3ZbpBYDg2abV4T3ph7Q5dkQ5KzFxSedAd71gKmKykyJKuiALDMwfU8xJRPEQkFt5aUPDJdqpC",
  "key7": "5YpkZk1Ekcw3pvgouACpq7vZvi1CxrmqtaBYUkmNxrDgUQTQGDudeWL6iNrRCQiywPvtkJjmeJYH9zmSf2TZdGT1",
  "key8": "5eik35cRxxwV2tyh3bt5dBxHVuDFJiPdrPsohGo35NKkDTsFJG4qaLQBFuqcPHUbVgQppRzebrGDtfZaD3aREGLD",
  "key9": "bMPVWRFRaDn8p9AT6BRiNGakhMrowEgZt5PcHGqF2Lj1jFSeFeQUjwopRJ9YJVfWQJM4VTDEPxfJgLFZBgH5jYT",
  "key10": "skGay1tiNrvy79Tg1HC4nYdGYaps1WJ196anNMH2FNgyXDikGEUFSnF8jAofkNmr5pCj64txVAf9hfDZSqQP4Gj",
  "key11": "2BJqDenSgFTzKNK2ewbSHprrToBRZ3b1ZEw6i2aGWT6V2HFL2ayWNTqSZ3vkpuZax5SzShiyT2i9vWPXPb5CmzNo",
  "key12": "4UQTeeipMVbwkdf6rExZFR7g8sAwSdnksBZYBK2CKduHkKJZV4Mid42ST64MPkttZfhfTD7J9ezEN7WC1DBex2LS",
  "key13": "fQHg18kNX8Wtb1rshQZRWA2vJdAQ28isqn76gcpFGNzJcHZA6iyCXm6CufjSPCcQ5ZxL4zDg1MgcAnHpXyJzcp2",
  "key14": "61J2E5WRAyi8RHJ1Qnkr568uWCr9v7kvHoyQC4syG89hFrM1NCHek3s2eabgDXSv9m8GiUwRzmZp1kRXkc9ME2zN",
  "key15": "5X9Xan6ahrK55notDNzoEMCrnqaKv5y31fkZY4oUCZaigtaMmbggsvhmR4iepdcBfVu42KoMtNLcwyo92j5sFyjU",
  "key16": "5h3DSA6eCojib7L9FmT8RrpaPSgd68Ja9M6xv6zED8sGADBKYoLndtiZtjiBu6W86qm1EG1PLyMLznUzLoux4Vws",
  "key17": "Yv9tbHEGKJ87QFFqAoQprys9mbBFby4iSUqUJvG2h6KtcgMokuZgKXWUvCJv5yaFcvmyv9Xxy8GPXBs73EcSU9b",
  "key18": "3AD4uhTQbicHEZ4XkXFU7xFZBq77XBuUAxHtnVikiaSZgWFDfEzVm1JDtyf7ADERJ4iH3PxRQfabPDojHVWzEy4j",
  "key19": "34Uvx7gzvbfRS7mi2Rc9MLPgg35HPhSry7d5iKyBRQkPG6tPn4LzPhiubPL1NTxcjKsfA82iXA96JYhguuYKyH79",
  "key20": "3fAH497MDDt2AtLgzAm384CFQCMNsDx347d2KFVQZq8uxJfXGnwBXhokctnJ7jXiuvHTCJw4gkNP3D2f5VSdBR1i",
  "key21": "3YqTriniUHiESQM3tpe3Qak3ddyGyUphPRJvm3k3JpBef8zvHBeEPBFreTr453emS8haHnaKp4AVrc6VnsH4U8sj",
  "key22": "4t6XRrr8B54HbqBhojDAqvXLHB4rKJTrGzgmjLMRb9qoQgo2HaKV2ZvD6GWh3hDsroyNiAk2DTqmBScTW6eeneoF",
  "key23": "2XfZTD23UkV2ygCNsLNQ3bm1UN3vFYiDyei3UYTYNYUDVdW6ZWTwwLfWskRMKTaoGcFbhX8bqgKFiq63kBRmxg8S",
  "key24": "3EHe4F641soDYbD5fBdSUS2fF5TYZgVoT5ppNGdwarpcdZSCAUb2QRF2bBqoZk1nBQn8TkKndyzFGDwFciXPGDo4",
  "key25": "2agF1KFS22SizgKGG6ymH3mQ21FhiCmNvQv38wKufErfH7u8u9RTYSQRR6YiXjEwEE33bMiBYHvKGSarGqq6gFmd",
  "key26": "5uRfWC4sfu2XTeiKio8me6QC2XYQfj1Ui1xvbeCoyAAfkW6tEvxtZqWebbnKh7HGgMyJmHnLVn9AJNyUhoRMsj4f",
  "key27": "49MCu5ovzk9MsxrxRVoHk3d16vhaDNFNJtSAjbqbQHdH72WPwMRmRjahecEZteos49ZeQGW4HQ3k1MFukLXMQBzz"
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
