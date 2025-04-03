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
    "2fh71jKmrPsjHwGxkiwy3n4en5L2cfzwmXooSgNQeorFN54LcGUKod2nHwdK7dbvVvmfPqvsKc5cReeDqwASw9De"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rHtoZYDYuTbFJng2D6iZ3a5wf4vLXW6eU9ktSJMeDudFbi2HDwgrppLj8TYCV4VbyApo2k7SQRdKbpytp6bnK1t",
  "key1": "31Xcg2QXPyzYgFMo6Y2KVxH8HDRaweeLnKUzP77uaToDE18gHLgPJrjXWQH7G9oAesDuJNkQZicJfyTJZALd4M6V",
  "key2": "2EN9iW311TCBymrQCwdd7rXZXPTWrENSsNsVaABQv5ZiZ9kGueMwMdyhoCn8b9ZJe2REd8sEL7pPxCNWK7vWuoDD",
  "key3": "vKui3Y1tyDC6tKD6tDn7dbYRj6bmYnPHbRaqFtVRreQuvR64Jx55vXudG7KVJs9P1aa8Zua1DSfdTCD9k84XwJJ",
  "key4": "2W86gyqTnQPuGubRUs9CXqM3JYCh93aXCiu8ZAheKa7pPJ3j6HBDdwLCthF9yAeJtfakKZBn14sPasC2BdcvJgrU",
  "key5": "2yteo8E8wiB1jkNepQBcnAaGZwptV1K7Mx4PYHXDhbaSqMqunYABZmyB1fDT8bQnqn3k7utC9t7Pb5RJDSmfzFk6",
  "key6": "56b99K2bwuAuv3ziYhPxsi2uPtoVJXM7wPUnQF5huEifUtBz42LZxNuU4gxZWsfFSkEbnWhbHkM5SzxnLVhcstZN",
  "key7": "2UnJBxoPdTTVJrPL4xbziY8bwqaCBkYhVu48ULZ9ejY1Hvv2bJogcg8UFjGGRgbKMrhLH7uu3XKcxBF9DzWH9qQD",
  "key8": "5YDqqU1VRvEmRxvemkhjqbba5555ShHDrxPyMRzeZBrqk9a9dGUto15pStN5h8mobYcLLUB41MWdgsH8sGrajEaw",
  "key9": "4qkK9qNFQ8dsSrGZMHPXx4B6wptsDqj3RhnFJTUW3uhYQysKeyFDyXwzXuCMAh2egekHLc6vS3zCeMrDMh6n9oXq",
  "key10": "Mmaoa2qbG2koETarCMpHYXws94iKsXndY1UPZFPzxBm5jJc52EceZ7bDBsorjmEudMi9CGTKYfb1NCdyQiwFg2R",
  "key11": "3KbmXtXakNU8JJxRTMM8Qvt1n1EQZfnHc5ZnCPLJbTkxLaUcwpo5Nk4pgDa8E6K7U5UinFMLTKiZ43fhvKf2wftM",
  "key12": "2iMn9oexNN1QDM6Uz47Qeh4WNoZHDKKihg1gzSiQw5XBkZNoKxANxjmgYDt4x6yh6yF9ytoywArjozLvAoaHcE1P",
  "key13": "3Xgh592CwM4Rd6e9YSzkTDGMAgmWL4HhecFnrVXb1XTY5b5gTAMKxEYkWM6CXs2FLjurQpJZtU5cRGWszewjn5Dr",
  "key14": "34ZBViJYypY9SnBxzrTPnUJZmSqvfvG9grDCqaDv9XoqTm8T8dfGjvgbsZtiMovtyb74FJei2My3Ri6V44zTAyfr",
  "key15": "2AShi4WAbqS3NRz9zcCsH6bECvvJs1jatEDbU7QSomWrJd3m3gkJihcXJTq7MyWqC5bnbxJTAELx18wbS3QSp7oN",
  "key16": "47yABJYmvXfeQJcYUzJMzmQN3TDwTj4rmPY68GAytoHzeSh8xF4PJCrwZCXMwoa1RhmYamqJgacU8qwuYvoT2b3a",
  "key17": "5XvsPsqzFsguMGBS3sCnMM4MuNoszuKh5UickJRZtrA9qkFUwVeqwGZPqnDSmEshQF3HTobUj3iW1abHW9qstA6H",
  "key18": "FJXY8cqCAGgUhEqfcsTvuVL42pDEBneXvDbise9pXHdagEgjBpmWUhqDci2TVEvu47q9dZPKBVvUVzaoNrcjkJy",
  "key19": "35rZS7WpsjsH6vGceJn5ZLhQYmwayCWTTTfH8VZvB8K3RBap8YhHWogPj83ihZnbNbjkuS3s25bKYo1dNW8Rjup3",
  "key20": "4kxzsrk4jZV62BAchNKKZQtCedhkHYuQ6ePcFdNsmubdWwfP7pawjrWf87AoS15hvLkVbwxZhqBQv4XXRg15SYgw",
  "key21": "3vzkTPhCvtkiPXyNQCinW3S2YTpe6worzcrgkp5GSg8ToEpxwrCyV2wuAe4yZ13CaTHyZcwRnd3PpyzMtX4qXGNw",
  "key22": "4HBY1aK32iJKA79ySAGFkJi7e1TzKspKMqCsx75RSgxUTicUWjySYUMUbZYQL9sKMdqizKxhHKpXfiVihXuEV11h",
  "key23": "wgCRjeWWRwacvgkzgfWaAJCVZyiUcpsxwvqxeTM5cbLc3YtKNF9wky696LvtXbrWXEYg9kFqgxy48wsYfPwxttj",
  "key24": "41QWXi2MQ5jtq8CtKVPPMAczZzLVh5KFh9JtdQXca7euzxVsPFKnTPQLg8KqPWp7huAoPaJrjtK1vfLvwUvX7igh",
  "key25": "3nVB2mxmp9moEKkzZaPTp9cT7fQsz5qvxaG88fdnVz14Bgt1iKCMYVRyRFzoaxHmETorpnTFQnhK9mpUxpr39AEf"
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
