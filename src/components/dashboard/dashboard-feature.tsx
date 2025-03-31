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
    "5pvvvzcAu5rbUN5KKpHZ9Ao7QGJYDu17NXfjztuC29kb8nGiaQXkAsdZsnBdb8cDnuNhAFoVczPfSTr65U4gVM7N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nXjmbx17duBimdSRekygJc1vQruX8CYhLj2jx23N9fTrZXEghGAArXTNVj735zKYKoMRvjH7M3ZiG5DrTZWuPgS",
  "key1": "4SLeCGxSYvgaXDQufW95zzERbjMuDeEM4Gsf6oTkgQaw42PjWBH3JbPwywv8DBETbmMDrGx5BFMDW1oSmUgxiWjJ",
  "key2": "2ww2qRfwFxXxPJBjb9rSpxHggdXUAtzHobdBC5uJoNNMLsAjAAHkJ33taXfhVCgLUy957KDA5oeEs3QGvhvbtrXf",
  "key3": "2MAZ4gPyDKZH9XT9goYd5cvMBum5uRaYfcYM3ctgkP337uG63QMv4daTrDNhD4R1S5hmXDijyZ3NFmrCQnZcuSR3",
  "key4": "58ViitSeH2AQjeKbxE4B3GHd4CcTuQZP1jVkyCNKBbVHaJJcxpDfixAgPm6FP92WLkW5wgk23uduempveAv5pYmN",
  "key5": "E5UbveYehWNDytvWZxFYdTwWBFiGtgMQzVzh3Yo4uc5Lebxu9SH2UKYa7fk6gZVpKLsMJssG93W6qJ8tvVhSbS1",
  "key6": "21v2Fw2yPJP8QBHjF5FXVpvriaVsN4b9EmpxKcfs9hNLWNRjgkvb62FkGVnasY3Exijzig8P5kjp4e9EAeQCBsp2",
  "key7": "24fT2iJfaLo7176cujjFtzc2Kks2WzDwinGmtKUh8oPBqhjQaZCxaT1uZK89KzW1H6Wis8GXoGbkiHHGdxjyLV2w",
  "key8": "647BXuaXtNFTqYvTKW66Zi6HbS48tvPdqD3xmC6z8e6Q6upEYAmAtpVTY1B2UpHDxREQHEiamC9G5337xTNjJoSg",
  "key9": "2KsXAAcceh2hwDkCWwLAJSgU4GqykwzrzwLfKgseLGpAuijhjWLg57bCoXrETuW2JrbV8fcmiNgSPnCZDiBCL118",
  "key10": "5rWVHRYKiVW9LNLYZxu9A4sjrYSqkDTc5aZRPZKdGojaqxzea5TsccoFdm7QNAvjMUdEQyPsCp5CDBqvw3pnzivU",
  "key11": "3JXEAXfdXVVbL4XQCCNArdC7VJEdXqDQi9FoGJjY8iRUALg7Hvb8V5tjbgs8Lar6qNRawXZube4EFT1FiXup8bUR",
  "key12": "3DpSw2GLBPurUfbA2VB5tP46cjnvBSQSj2SBoxnS6ZKwMX3dvY2tJ1UauzTKhHi8xnDerfETCEj6ixJeadpwUAE4",
  "key13": "5Emjjvy433uAxuKGU9bnLizCWUiDsmYGXNVcxtQW9b4AoNZ2kksJP63dPp8tQ4NwLMrSuJAxKRWpHZ9uFCSxcfWh",
  "key14": "48RhN6NW8dugf5K3kunWcqq4qP5mRzyqNFzqWx6mEEC9Sqxc1WkWvQMvzYRNLo3kQuDqdwTV8kefKvBFMZX6za9M",
  "key15": "2fkoaGVD5DskgHnyx88p7bnwvnu7EWM84Y9u69RM7k3K5zdpkz9VrYiTXv7WnMZbaNs74PWvkQKMJLNMqWXqzaJz",
  "key16": "2qqH3GbncKAVUsr7zhHXbMXf5ESyLEVd2P4wBAYpo9LSLs2EZ8zQr56DEGe36mnztZkApbX7oSmtHhvPyW2QRC2J",
  "key17": "3hHCVa9gTRzodkc1VP2eUTSA9Hw7itgNbe2p3VRDXrKca2BuwBSLwhoHr5JYVaQtEeN5SSdUFdC8x7ySocB9Bbb9",
  "key18": "2YMjVHsey8RAfJ53VRteWbtjLzmRj7TNYHvWXp51odBxaVYiDfojcrVgTmegYuDUayP3WR9atF9PDiTGLB138pCi",
  "key19": "3xnzh3D6Xs12VFzSq1XH87HFSDkxK1cYGHf8ARWJ75QXkQ8mEoVedFQynPMTvtjsdMg4ydHdsTYC3msYvjzeKetW",
  "key20": "2pkqqo7Jg41fwYMJxNU46e3o7DfXVQJWXwzETWh3cp7eb5kv6T41d3fATjpAUywu1R1Vs4vEn6jfwWxRLRhYBVth",
  "key21": "3WYx5rpHqRBSf3mTUUoyHeTnPtwKtrHz4u12FQevJADD6WZSqTrvwGV7D8Bhqd2ZytjKR1KRm43vepufcoCQSKcL",
  "key22": "2p7tkdywnc1MdfHH88C7iBdMTuNq4TVqLv5LgBB3wnPbmEJr2BN2nuoNbxistUAwJEngiY3GMkSU6uSrZwPtFizo",
  "key23": "2LKRFNekqcf4uxsZiPaXdYTQGvi88xJN6uXmt6vFr65SraYMHALVoTZZyoV29w9RUFmXPKZPnGmfZbreNGaaN5gi",
  "key24": "i5vxfjxRsfvtVgxu4obs9es8qKpbWCVW8MfkDkPMaEvuFdL6G6o99gcGft6SLYTA8j55V15TnJ9HRx5ZVG542xt",
  "key25": "3wrw3NjnZQvw9Pm6AHc1CUrrNXv8Kc82rPxtNDhAZvePUJSQVGUXEZ1Ky1qcmRri15NX1eMAiXYZWPWKA6zqj6Mk",
  "key26": "2qwtcq8mbeWNzfnTeDPWVRjgrqKaRkSnqV4icpSWXycP12A2VPPd67R8q4BBznU1CHEsS1yf7kKPZvgh9As7J83v"
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
