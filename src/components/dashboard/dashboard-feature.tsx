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
    "2Te61BfyWTP3RXvCov9B1hiajThbuAafTQM5hgsSNQwRXuJ319o9G5FnxDV4ybXBN9zUrDnL21J1qPQ58xitdtfx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M8kE8hVQXmqJhFkSk8JixSed8uPJXfQ8Y185N97BRdTUjtqbB6hufA6uTTb79e94jBtAXgi5QAhQw2Mn265iBWf",
  "key1": "4PLZC6RkEbLu3r1pbqmuik5mYg3ivgBS2grNWGrNC2N68qmNz84ndALN494xHNEJC7ymzSr6PHgLwDwzLHjwjaey",
  "key2": "YgYRbMoZ23djXmKJQRX36RDnqL6D8yi1nSwgaZfJaioNzJLQqTw1DHKiYH84r6YHcZkVHx93HMZfx9UfirJ3azd",
  "key3": "2T8pyhhKA2ExxKGWc3hNfSe9T1JV5P3STFHNSyxSL47r7nCwXd2ZY76HrQMh1xLjgKsypvPzrUxC3MZARDdgj8T8",
  "key4": "zY7XodYQvb9Mrq3sP6SojBAQLc9Cwm6c22LUymFghaQEvGEUytJxNCjKL2aCptfqDS5jqoCxAAALozzFPEeN25R",
  "key5": "5vh7qRrStRL5RqDb7qiwSU26iuALwe9uLGnfNnLgtHqUksgyaMess2KL3Cy8TbGNpSdY4rN1noJsaj11pc7WCQNQ",
  "key6": "4FNCaV5xh9Fn4VjKdHzxT7o4HdHAisxAEK96TQuyXwSZbUYYXJGMGMieyX9eFU4c51nShauVDLzYihMpbrzt98gZ",
  "key7": "3khwWYNYo3fVzop8i4ovdGbNAJBA4FM45rXfSaRUECesLCkX9yYqtDyPQGmYVUMRQ34aXGawNhChrncEsHSzCS4K",
  "key8": "2bA5sFqiRhYHCebfjM6WmbctyvCkMMf9RPCepZaU6ypiQwcmLdW5pqH4zqFVvPgtc54kkYWmdSTwsfKKbkHVLYbF",
  "key9": "3z98a1roEo56jU4JaTbSwumqV2k432SkPKAnLYNADgbKG4mEZjjHzr3LcUTsQutBXcuZ5PYkvzd3AMbCeu12WgHg",
  "key10": "2ChFnM7Vdi3AvEXWKq5WJ7JraDWZPK29cnjDHC67jfexaP82MgW2nNtuHDief4WNksTnexD5aeNRxXJ6J6eLFrPZ",
  "key11": "4JhFwhQTt32Ft2dw9yXUdX1ERXoMBkUdgGpQ8SsZT5P1t642W82gB6eK3KpNWvU7ZFriPZFeqZ4eXhvS5hPXWcCP",
  "key12": "4E7fJykiiGhD7iiQxStANJLJZyqm1YDDKWYbuo3zHw7n2WWhypeVZey1xVW6szpjV2TSH9hJzuqHaZFowaA54sef",
  "key13": "4YiyqTVjRXhQ2GTkipQqGdASWW69p59yjP9dpUoAPFE4ZzwVKKwpjNQwettBbeLd8JmYBaHP9Lmwpopgp23Q5j9",
  "key14": "Po6yNNLfvQkNQocWq7KkUHoea6fVGF7H6g8tybkHZUH6nFjaX5GyL3igVXhQcLTcter3BGfC6Xhz5kyLetBUcou",
  "key15": "3QAMUeUwWK9PtXS9o7R6rjHue167RJx1Ze9vb2GTwXueiwf9qTWwKTdhyEDfTvskmKpo7ZqFgC44ZEdV597GcDRk",
  "key16": "3fbBDm6bcmhH83tZhYvk16Vsb9orpqM1TsL6pNjzKQr1KhzjQz4gvNAQg1zWgKCPgPnrPPK4ecx4oYHF68BdNTEY",
  "key17": "4Kc8f4RGU98kcuDnj882iAKXAjnvbqBwqFrsukqrEWPjeJ2BpK2WZPWoSeeyBADc9durvnTCY7ttwGVESrs7JQpx",
  "key18": "1Ky5N4ToU1PCna87sciLdy4iBftuNAikgpfm5JwX16MHk3ankqrhtxgPW8Ve2mcWJribTDai6jk71DUiQ5FKguU",
  "key19": "417bBMU1QTxz7bYpdVxKw7mx2EfDZ1eHnxKW1MJkY5AYxs9jeCzYWEy9Jo22WQfq22HhJShu3YycyjL8uz4GGiJY",
  "key20": "fgNYc4XECvp2nop7GoUsjfVeym7rTkJW8be27ciTBjuXQzwPvaFi1vTPSA3AiVikUYEJdutkBA4VuhdxMM4ypNK",
  "key21": "3cjJRHM9d35RdKFqzLyPz8y7tphyLaUcwu1WrX8QUojMhCZLv9Jd3KAS4paFCzWWoXP6L1PLW4EGAkcHiywpbnJg",
  "key22": "3bNZJhSaSMWqK2DFa1XdhY5epZDttXGr37m8dbSvRni2ha1x6FGcjfBFJ3488Qsq5tSXRrDvqtuXLK2ak7qUYZdf",
  "key23": "por3z6Uq1jsKrwsDdhzmu43qumCnuXarZnUFbm2BEp91CcCcVQA4GEB1WgBxYEb6cmvvEi97gPoRmtepdC7JPqr",
  "key24": "mogv15BjH1sFTTmRFZziWRERM2bUcVJtsbydGSsyPSypFMSVC7oBUkVhPUdRTihr8ynZ1BTPE9dsRhijo7pZBNG",
  "key25": "NySKmtzemujMhw3tuxkQabbnQgJZ7Q9obnHDFFwG6WDsoQGmFa6ayfHiqq8gfU7pKnw8h59eKGtbxUbXT7umdzt",
  "key26": "2PCTp3k5JiqYvDc57oiKxK19mtrSRok9QnNBNVrudahfSyGfX7vbrrKYrre3yvhBjRcrCWGfXBKjd4PR6mKe9QSK",
  "key27": "3NVdxDUwLC83uq4BivGmyyjJ7pZXQ6B8mLTNZmYM6MKFposJW9uiohh58g5gr1UyrzWoZsKk3duK2WWdCSY8hvp3"
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
