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
    "58bdRFbv1hKBY3UfDKYXJsabWkQCXUXzZPbWNcVeT6pnzTjqBnK3GkPVs4YqN6E5RfGbAzSg1hyNz4waXMyWAKb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gqp9Swh25GHjDLAXDw4ijsTPqewnhvVz86A88Shv1d4RZrrokVgsr1e4kdPRVPPxNy3bJo9bDxjd9w1fQUUDtqW",
  "key1": "47xvt31zouV8AhPhU9JMSg8gEEfP3dohcR1dA5UPHz1K8wHjECXGtrTmup2Q9vH4tpcBe7su47NsXwi9D319Miuc",
  "key2": "3R3Ds3ovcy6CfoDEUMCdkMQ4GvMekcsgqRuLR4miCx2ftiX1fFNA5R3TpChyoojVH3AwgZcz88PLFTQvNkWtdkGS",
  "key3": "sPzWkME2nVj3XwVnE7eowiNcjx2rLkW5CYuSU6kGih1voxnvPyxmrUbcsymUWUtmaTykCrrK33YRMczK3PB7UTS",
  "key4": "2zNQJfWciRcTLUD4J1sKYZC4No6rA42LUndz6PFtjoqfVyC1rvWZnepWWsuqAYSf6nXfwGjjf3RuW1eGrRDee5nr",
  "key5": "4otMKJRVNaYrE4Uda8ejc9aFMFVdSsxL11LBjVnQJ5mpQzzzj1D9AM8sB55JYhiP19UpeGoQX4LHXpzeAugTzKmV",
  "key6": "3XwMiAwDhVmhHXb7FaCKKCHzGWLjeiCAoUc7WMbdn9K2eeWfoJo6BpHYLzXxS92JSTdHejkgeraeFuhsXkDGhZ29",
  "key7": "5BbAKZYdJYP72X9b5dLU1S42hNBVdpmAfht9LPgqi3ahkqejmCU4yHXxQeJvQP3cXGD1ajbnvHs7hCfLd9FRjkJU",
  "key8": "Zqa831bDpV4goHNCkZLRcdTHiJftJ8MXyPLiaKWbyUa2qjycW5jMeLDiYowsAUiT2uoZmBBraWvaquqvNybGXyE",
  "key9": "4zxJ5XoFitcmgaZqpxyVYeeebrHgFXMwDMGcVkpDYj3KnmEBtMEPb1mxARPpWsLNe2mA5k15kQuwXjhHytFyFH78",
  "key10": "37q96sHFRBDuL37L6cUn4FBWq9wcBh3q7dE3YxV2rb8WejuKc1EB2tNA4J5WfGvCk7fHqk5TKsRPgXr2CcFFiY6B",
  "key11": "5wyCrN3UnpV1RLs1U8k747GkA1GvRT9XeunvL1n6XKtpPrXW516DSZiR27KCrw6X3AJin8aSEsRWdgUoysaJfcmh",
  "key12": "3kHsa2BmduagoEWMEgVTjjsUa8AWQCRgvpL1F5fWdLCZ27TXJUhoWckAhqLBs7WwbMiDnPDf4z9LZTB882Q8t7oK",
  "key13": "tonLPmH6GDH4Mk5LCcPEf63obbFsDBv67WQ73V3ACcAQRAUqS57EhN3PFyvuVxJUpwaa1unjF3gQ1g4hr51J97g",
  "key14": "3wxptm2H8J1P3vumhUmUTd31jPwVpfxvHKXHtHmDmzCYzSpqMp1tHTjbhvuEKZkuARRz4tuaShV9UoxFz2cYgMRC",
  "key15": "4X5nkhAjem8GMT91cMgK37QcSUYL1fNR8gr5y4o7ECZJy1q9fSnp4sU9cEyZs6HYATit9meeQAh57MDa6EUGsR2V",
  "key16": "3vsGuUgX4FWW76hn75MEVMwc1cYLfeXR7gezAdmwHDQvwU8RbZETLg79cVRWEMfcWrAujFC9RrackvXLsufxwfS6",
  "key17": "3huTAkk3vFcKDeq6Awsg4h5nnEEJfGWscSp4rSmDdRieH2ftzLBQUEiEES9oyduHhgQmeWrRnjGDtwEyoqeiUm36",
  "key18": "fNfP7kfb84qpd6VVjtYZzXQLPvvudfmrSYJwU4d54eXdmqNGcrXT8cRtX5599Kx3b4nXnc12KYFW3wiaecbMRc9",
  "key19": "pd2vnVd4ADUFLNNxxVoJfrD2ELJsGFUZ61rjrMvbuEj8kjsBHTdPeJ37xKnqLhWcPR29vGHC8jiLG9XrCScRnb9",
  "key20": "4zHvreihiAUdqyJnW31rKLZeFD1ymSxB8t9B48HHoFP51rf1U22HhAgbiwVr37jbyZDJQnV4FRw3194TBGvYfdje",
  "key21": "4DGye41EyTfHUzvFDJJ9m6naU1HVwWHndW2idK23n55huf8Dy4fCiUiQiGLUTKKxEJyVnWr2UmMnReXHpMCc8495",
  "key22": "NaZW6ZbHtmbzwV6o8dsWMd632UhhCQSpwV4ZobxnaNap5CFrskuCJ4jpHxADL2aBbQLQwqCjrhaRrGfbp7RyU8V",
  "key23": "53jGF69KaBYxxH6Fd9aiuXnuaREdpSfSvZ2kzAonjZdc9KeoAJNrcfLgnUW7vj7DvNaDSEzdgdzBGLwJoWB5XM4b",
  "key24": "2szud7Pm3x9YTmWngxKiJAm5331S4mPs9GB2kfMTyGMDayQcC6oacv2bFcKeSRDud3YzuyqXWKw3jC24tcgcxLTv",
  "key25": "5nYDTigCuhSV16ifUc5uCzNxGCN8Gnt5vzydSjDLHf9cwAH4LURzAq3rzqZfV3WoLxN5ieQdE55BfXiTQsc3XtcG",
  "key26": "5V9RVecNZoZzr8JZ2PRhBEbzpQKc9L4iqXdMHuW51AGbhud3AcXEo9ziPNcW5rGwEN4wDAQ9xPmk9jzAP7fSYghM",
  "key27": "5KTcySAoiGz1R4FXWRSpHRwUQi54BNAs6WsbcLVkzMQjEg5wXDQioMojBH2DrdHNdzntiu3NofBWjK2esf22zsi3",
  "key28": "3wDfkmbFudNYymLDTT6T1smkMYvryYwMJ9Dm2yrY3vkutBUULhoXoTJkV4GDvz5JKQkSXHFXWwkvewPaPqGjTiTu",
  "key29": "21fc1QTCEt5Zf26wDxdDRwU15i3tQZw5CrmNeDL4dEw7rEi2x7tidsPicfcegJaqeBnwPwKnwfZgU69wxdReKGY8",
  "key30": "3BtFC6Go6Ya6JrMtkWECkJL371Xk3zi3UVvxkL2cjUxDscLNk2JYeHer8tC4wNwA9gY6cvSLyKkrPmcQ72cPNdmz",
  "key31": "5ZQzwSQaHUp1toZQVymVThuEPo5kTvabJEzS45nDW2tK1mjNioAer111pUuRLRB7vhk1kzXvkzp4vqSPSUVKL57W",
  "key32": "641CwnQ8EZfeZpoZWNHNGNvT73r9WmEBjkWMhgS9x8sAqUYpmGTYVBaJKhNv4DkYUMeA1LCaYPjngyu1HRdfaCru"
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
