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
    "46khJXW8jgsGeWQv5gKMk11TsAyJPT5mTmdFPKi9bKwpNDFUYtN2xzLUwyEXSYTKHxTgPoZFLSE9vkGh5VNBCr8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XJgmjm6LqddTRs6YFwzJZpw762uC8Rt2Ucaoq2ckT62eY6dKtTErmQzdrEgF4ciHnruzzcB9BVxHHELXbqLfiWY",
  "key1": "2BDA3TPjT5uqCY5w8yhMSgMrd2Goww1Yq4F55eYDRCGcgp2VAtsZq5WmH2uo4oxcffdQPhKPmMVSURCurjd3rpH9",
  "key2": "3zjoVYpFE5qbhqcSErw1NbrUiaAsJWSvXzuS3qjEfCiU7KjgX5v9uWisUwjZRSRGMwS1oAPSCJERVMXimvQ3DvjT",
  "key3": "3Lv14d1dhz56maWYEnSrGNoz6PGsdK5fYk3u1wGSe4fGq2wQSvjhn9jYFPoLSud2Su94o8ABSgtYpywDqYS9eFek",
  "key4": "2uH7PWN8v75vpgtDJ8n64oMywbt9bynbArCqFPPTDh777ktQg2VBUjBLZCvC9kCvxDBeP1uhDDqtm84LbmPRpGtu",
  "key5": "3CimLox4DqjbkiiveoDaM5kiNeT5jUesVZzd7oTYGdU1fTMJjdJLMisXoUvHPNevNPecQfGNYhr8gV2uvhZjsD26",
  "key6": "5wQhiuVebtiRZmbb1oBb8y9xtWGikdfHgxgh3Qz7sgoo7ifva114FAerqgWrJ2QpsyPdffXZe3DThDy52xuzCfbD",
  "key7": "3GYM1m4vMWXK9kchiztfxrrkdKgyrs1z5a5gMPbGJrFMpbWK6XLhLSo5NnofGz9ddyD4kr2fGMfmy6yEby37JKFS",
  "key8": "4pcNdXAcao4qU5d7yS8szo3rvyhm4SesfgBeadxxUXpeYza8ADtwhohEPUWrBJSDSWFsn5Rt5hMqVfCXuGmLauW9",
  "key9": "51D4Xi2XQE5f875noXGATUZEdGKJoptJg6UXu17mkC58GoYVzbuDy9yNR5BFVJVp89udCFN5srQT7A4c823U8Bhi",
  "key10": "3y3tobp2jmBJ2wGpFFLPX9DsP76pdyC9DMPYkWxVVvdTXAFsXzEfxEwLgzASqT3aJk4omAPn22iEpHi4mpFpy55p",
  "key11": "4S3jdQMiMmCmTq3HYZ93LAJeLj1kTAgdEuheVBU469w3u4wXBWdjThDEeHmsmu7MYPxWYko5pVbF96EW9YbCatvE",
  "key12": "2RoU4RiN3X5sxUQTD2ijKY6A8JA7LHqRLic9hPvU2edSw1k86vhJHieeXKUFBhRPXJn7RTJtiMLVUDfBeQcShHK2",
  "key13": "nh48jkymY2Hag8Mx5KANnRbDw76CiPToL9E1fbMuSMYWmkkgJGwdBpDFwQdbsuhQFjYBCd2rEP1rhNYDXCb7iev",
  "key14": "61XMGoMVpXadpK91ocpS3pJymDGDAq1nsALTUkPAUApQdGeb46zEM9qqMNguJwkDzNy9fvKPNjpYWLNHWzNWXspa",
  "key15": "2zW4wkJRdPEKyJxmauZhveZDTdyVc3koMzdVGDXVoYvphGhMfPgKCjVZPNWwogSHiqCC1GcjDR4yD4NqgE6Fj2AN",
  "key16": "2Htei3jyF1GLaoo2XXdquDabismNwDLHduXbG72ngow8Kh6iisqU2pUVLBbm4njZbSbRVZGokcHtHbgNR4R5rZgN",
  "key17": "5gCSTrB61GZdmntWAEQPDuuwHaNGEqzBH8SDphsfnTBjcvdQq6tPaJfAZ7WuN6WebMSXPoxRSr87tQ7t3bckEcwF",
  "key18": "3MgresHeFt8BqFjN9GmMAkDnBPUkXUbGn9qCyZphdjCt3pzv57FAaLkP5DGdLPJMe5QteGjGzGP6Z3zqVsEky3X6",
  "key19": "65G2ePD94TG4rdf93rJeG6AW83ZCB4GGauBwm2ZdzJgv5f6J9ED7jMhq75ciwWTRx9V1cJiU481fCGmEoRaUJ254",
  "key20": "2NLLYFcWTuT2wHXcBNX48DAvZNPQqbY944n8Wno7znQX52dcwMehxnWirbqD2KGAbTUp1u3sARQV6ABkJUvun7Zq",
  "key21": "2oLQUx8QajrY8cQYPj8Pcd2TfXJN1MnVWam2qzMoAjAYj2yzg6uwHnwC1aWfDCsvvdLoeRTJcKcWd1vr4jg29bve",
  "key22": "5E4jTQz9cpUs1TfXrNWPBjmvdivPJxmh9wjqj2sdq7bfNv4jiNTxLF8njzyXAHpcfkRgC4AG5H5NyvCre3WCY7L5",
  "key23": "355MdtyT8A5sJtaY9U7QMhpLGavohDmZQN7sS8rQVmtnDKZJu6sAJ1DWCgKsyvjDyrDd6PZjCxffo719FuBNjdca",
  "key24": "2aKCyTYxbjgBEoAodnBEKBXzrDnke4DttukpL5trbctpF5ozUQVCQ9AN7bvNHRniUjUUztgZNkGjXScxbCEq9TkM",
  "key25": "TUEso2cPwPDdgbHzmWUyFebG5R5bLoscV35Mk5R8PWFCQZPxJnGfC5bhnA8Y8hXWnCFTXH4xo19mXKa6vdmTeaC",
  "key26": "i2eu5y3JHmDVbrkTCQGNNNrzq1pJptk5eC2q8c3fPS5v3hy15Lr4HkVgAxBBxwQ7CgGFbrDeLqAQw7ayH5k5Liq",
  "key27": "3UVubB8nbqDDugcuuTUxXFZW98a4wzmUu4WRYyb79q4FPGRWEhjwymDYPgrYU89ZrXzQaFTLutH5GxpWaR1m9qYK",
  "key28": "zG2jU2N2AgEY4VUaGWXkwzAU3MmDnoKa4o2f67dVGXow5jhHaBNcNH43HfG5hY43ctR8VtqTJT7tZeBiHDnE4di",
  "key29": "7eibLEyr6nzx1is3JAkV4dVvow7dnbWxMrMXQMPsj5nhnLYhrrx5DMcH1WsiFE6oLrio8cH4SzHkHWCWsoRzRBY",
  "key30": "3KGN5aPgx5ZZB4g7eNjKBJJBPBxCYsouc6Y6FPyVaupNEx5bEFYbx4LhQSRGUy5ZUZAHwue8Jy7661S6SgNze1XZ",
  "key31": "5A3oNGqYEmNENnZp1GV7V7Sd3kE9wy5sKqG3hMmYdokfvStZnaZ5wWwReEV3ZKCpZgAxJTc9ET3mbJAnVwpLmu2C"
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
