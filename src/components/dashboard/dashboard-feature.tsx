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
    "3mCaHk1dw9k3FGbgRb2PGspShz63MJFU5Xh1REVbbUMXSoYFQEVQgQ4RDdv7PfB5c6ADGw146KEEBdvVkr3DsrgX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DaztvXK7jZ8YYQ7e9BN4QGmu1VPYcgfisqSHMF1fnmXBFFnBycW1G9rht6J8hTsehiwvBgkbuTA38BKckXRpKxV",
  "key1": "27eqxwAZe9nA9HZqEN3TGTa9RoYESXZGGAgp4Cr4jwhs5t6GzBs4DMAd6ciqFUkknhQKUPe6inFQKVQvLGJ6xnL1",
  "key2": "2fi26bsw3wTSsNJLzY7gzSNxU6xTp78jXK15Ewr3dpRBmJ2L4fWvxREh9fQ7BaNdjHexW3rSDJtU78e9KqaosdMT",
  "key3": "3hurbA9Pqd9R6gzeZLiBx1cghKmuZYpf1fwh1eUUdY1kQbxRMJhRTc8Vv2AsPKnpkWfx2hv8D2qxb3EcZ5kz3Xoa",
  "key4": "2sYAdCdRikZgR27xQ9ssvWo4ovA99caB3i8pC489ZxUQujQ3b1LyhAKoL5ye9omwyLrhcTnv45w63s3ijJEUkT8t",
  "key5": "4X5nFo1e1Ak1EST3V7uQxWJU7ptHYWfz7L8nsp99xmSFf9QQMNDnQbbKMRK15DSjjkq9tTLUoyK3N6GopWuVqWwb",
  "key6": "K3m2HtqvGmVmkjdmHp3bzficumWhsjSyNSmEPWNBLbuAecpDcYAacpDoNCuHo77NFBphwpECSD6RsiHv8g5R4HV",
  "key7": "33mjiiak1YeupXkNNCwamvuoAdyeWwxSaGYiWCVg4aVcGZc7qrR3iyCYAsxrry1ec2WaLhk6MEm3JbAVM5dQLsRW",
  "key8": "3DdXSxou9HRaeHxrTgt8TPwqqJEf6J7CEyMQhfbk4imeMTkRiPgZUEZtumGPYqdP33csJcFUMHek1tMmsbmGgAaT",
  "key9": "f8TufPWtuNDN9oyiiPCnRtt5nAhVmr8EyPG3HxHEc1xUVH4k4r3Z9bGFhLb2ba8hKhRS81hHJznqWbzpoaEdxFZ",
  "key10": "nZtQBw1vTr2sG4M5EP275faqJAFFu99JSgFofgK5b2Hk2Twv86VhCW5jZh6VPLb7SiNwS1zGRGqzAdLHb6AJ2hc",
  "key11": "38nfc7NZmKsWEa5qBpTMhSkr6pgoA24n7qsy33pMb9cTaLLKF3cuNgTAh2WET2HHw8BxrKrPd6Nz5gpS2gDjxnU6",
  "key12": "3fjKARP7hGiMdmmRgwt5DKpnuxC7dPSxq6VqsJnSen9qKtad59GwonxKo6sKaVeQSjGYEtFYpnf9BreL5EJTK9gC",
  "key13": "5kwJ7gDehFEZpeCsDhdyvGH74MuFdpdFkgh2esFqu4AtGGvhEupYaZyFLpEkokyYxr6gFKA7NbWbvaW4uZwCiL15",
  "key14": "5hDUBpyA19Zh61RNAeBMMh4umpX4TArwhKxu5p3wvaCJgAdrAKLPZ522iQEKT3oKc9uNLT6pX4SzdR74MVgtS1bM",
  "key15": "U5Zht9MoP2nz4mVwQeyRdwz3DHJXGu5ebbQZExrf61UXE4xjqokTJFXwZuWy6JAQXvwUYD8y2ADw2YNiKXuU7N9",
  "key16": "kV3P3j2BtGw2MscyB6AiwFUeEuTBhEAUTSoSoJseJY7zkF45m4ZPy9HzvoPacQ1EJqrpEVPXHccrJbWncMkk8Cc",
  "key17": "3CXV5Y8Qy6FGGtU2SMYVriezBM8rMMNWSACx7uyHxdaro2G7qBzYRemae1YME5De3YWbAMK6byR87WMYCJ2N6KzR",
  "key18": "54iMC7xf8Jpwa3tgx9rCXMjeTUBquRipJgxq6EsYaDNjvYi3h5J6Ej3TugXFtaGbaJsVkcDCZnA48Ker8HtDyuBo",
  "key19": "8AGF8uw8TUkaQwXiLo4F7hE8rCd7R12vFPBuwbedtoC4p48kGCsfSM2FVz7KDCf8XaxZNiBaD5zGX3vLGfW2BES",
  "key20": "4yNfk5kKfrG83jmMzj6XKUCVX6qoBNceQUeMYunTL2ZejesF28P3vexVj3sMQdnV44MFZ5cL3wvuUA22cWLsEVrs",
  "key21": "5qz7CQw5Ci771B73wpSHD3eWUDJjEUYpNzfkZPe2L4nSX5D5WBiJnJEMLy4rzfRApqm5R7pgSmrrc7hRUx5qXz5F",
  "key22": "33yVrPfTfvN8GJTtPqyUcycL9GBuXhF7h5632i6HgZnuH5BjKsh8PEYKmrKaENZWqBA2FW5h1jgDyhzu4KGjHLrc",
  "key23": "3A9LrHNJYmwi4uFGZVgh9qQz5JEqEyXTQzu3cxgujDQFMXs6PHPA6M9HXbvPUKnpzpvRumRzkysAN12V2cb4dtaL",
  "key24": "48mh4AiZF5zPf7rqb6uemKme8Ebb6Ubs3wxTjDWqneYe2DtDCR1LbbeAJ7Q6bP5Siu2nYuM3ssW3jKVBLhcBfnVh",
  "key25": "5WjHVKFF96btMKbknLvFmeMKfVjVdK5UGYXr2mSSCRnHuDBAbTKNXjnryMe1THeJMFhcHUGcrxKkaF8SyXz1QrC9",
  "key26": "m7psuBVZSon1fTMQsgbEbFmL8uzDx23qWEKyzBSq5ZCxhEqDfNnVyqsKn4hM2uEKSLGXYSS1njozkQJNd4YtJhL",
  "key27": "5NturBxH1Zcqk7RcuBcJ9FFmJZFP1rtXDmjQNLX8HnrKj38pSqrrLaX444CSDUVPhqyunX19e5fQKbbaa4rwwtfp"
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
