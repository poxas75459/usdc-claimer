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
    "2vjHdzRfYb7crcA98ecmEx6fbkTJcNDHU4NAfWEPH8YDrkqPSraiywQqobLzmLJpA3aG9ANrHtWArjs6Tm1jXEsx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63t3d7ZP4rqyaCD4HN7EXkiCJZdE9RQ2bMdDZT1hY5xXySXq4fu7zyvqPrkadT7i9LwxwcFFrBQV8dLAg5v3x2vv",
  "key1": "23bx2233e6yTQHaDGUKG9pVWyZ3FFbvLPg2QJoPEv9tgJDouw9PPHC5Y7d2PwzxeyjnshbHuGdXaUSHezZ4DuAE7",
  "key2": "44Zse2qeBepYK9R4tzjrZMehLwAQLGEFFheAjAFG4y3hqXHmhmTCycofftk4G6HzYUBhwXd3xnzu5rnqStH7zdBt",
  "key3": "2tV22T78y7cmG7U6hx3Cb6crZ11AYF57F9nemRK262WLx7Ken8De9Wxxd9xP7BKeeVaZuunggFqgs34wUFvfENE6",
  "key4": "XHXjBH5Gb628oazcoc2TFhx9DNS3PKUjhoKCyRJyvSygcS7QfpFSsM8P1B45w3MKXobnpCsTDg6iULs7oiyDzUR",
  "key5": "3M1DS73Jf7KMDpdjZJghUXBRGC4WwymgwKhx361jGLArULBwchjoRFjB1TKGUqhSgfj3q9bufUherTJig6WV8ooj",
  "key6": "5KLYBKMLXx7Qi3gJEteMyDuEq54TrMKC79miTP5rJzvjyvXjBY8tAxj6tvjqyMzp5fEysyTAXeu1oFRkw44XJGvo",
  "key7": "5d6RcPK76h2KxoAnq7vx18ReiWqHMf9CAbkzL8WPiSWvNiDrRQhE3upMC4FUfm5GqnHG5iRc4dKA4YdQ4DzJYuQE",
  "key8": "2rTYymbbn8TrwGoFUZ8krCjpEtqn8s6CcgT4mcH6qhV5Bf54PJRHtr2c9x5H5ogTTVDZCQPHyi7MZvuDS24SaGzr",
  "key9": "437M4nBmRQKk4GhdrV3gti4Nr14zhqtKa7FrcrFzWNFLBSLb13aK9HAP43iMXxaqWzATYG3E4WQ16BLnvNoE7hvt",
  "key10": "6Q44CFfG3eUZW5cQW1Jv7G8bVECwCAT5Hjgemd8wDi7rmSpVEaCrnVRbcGRg4CuxuMTRq34Tys3cjKvjFff8s4G",
  "key11": "YdNmmXP37fo2DGBgGVYy4bCFTvWdurcxdKta3FeVPupUTnXYXshzofhjRWnEVKJG8hyY7Qa5o4EMNdDELSNhfe5",
  "key12": "57WajXzUJHaAzHxjeZEEfvm27dY4HjJvkmLKBN3zSexyoNcLxgaixjwFsULu4svDDERFzkVJjuLspFHdiDJbcWwW",
  "key13": "2LPZoqHaVmoiY5zy1i3gX48K6rKGPea2WJp6ZtNL75d9bHWSsenMNYjNQRtm8Nv4kQ61SLnimq6FXUKUGjtZy9L2",
  "key14": "dHsRkuMmVV16dtRfuuyqWUrcW3GhnmRXK4XpTmcUWBx2S5cc4iiKWGpqvvHFaETSVwMSr8fQzpLt7SMSDkpsssV",
  "key15": "F1pN1nh95XxPAMN4Vxi5Yr3fQk7Uvu2XFFf1rxBwiENh9Hpny3TTYGkhTse6NbfibVENmiP9vPZxmAj7C2UgqSL",
  "key16": "4NJTFJ9WUx91L62YdvmufH2Tq5wmTjV3wkQt4BkrJYd8oH4Xb4VjsVL6wBtFFB1fPCwahaDGeTY5CdMnkNH9TUSu",
  "key17": "3woScCzpWr94JLsTuwmpD6Zc2C1CtYiiMk8gaT71muEUzaFg7ymZWQx4T4R3xWwzrLtKVDvFQoartEJM1o9VjohC",
  "key18": "2sgLeW4nfNXnusoyXAsHCfsvs14bygye8N8EuAHr5MR4ypo9crXDLi7LPF6NXdB6P5FfKccd42iUt3BLKYtM8fFt",
  "key19": "4DBQBLUG6iXMmukLVVoDo9ymHs9TUqLcBtmNRA5F8cARe4yL3EvtYk8V4tqL9PnjGKASPRed3aCSgnA39EAdjnXb",
  "key20": "4rzkCx19SXMfA8aqXcG4VpfY1AEaTXEJyqEqnME3DVFarrhAowHEpLwSzcEcmptYGdKf2kxkQFaGT6NkWR1zh9bS",
  "key21": "5P18PvVsh72r9MFADjDacy1EGLt4okQyoqkMgtGa1ueY1SGEFP6Yx2L6MubsAGLndNsS9sk2LaRHuSzKVoFBpAJ1",
  "key22": "2MUw7krL8my2KVaXNEX6aM29ZmgW4tRpNLXGpJYrNB4oC8u3rDTYB5cuhm3B2c5Qx9KECC4eS7LrGq8qq2V6Xqx8",
  "key23": "5vSgRr9JmxQWJL8KH8QEwKQszs7oN9KHFs8V8kmGgzmkPuhAiRiMqmMUPdFTTr5LwQ9dwqxvmNeiSX54epeQZKTq",
  "key24": "D1xWbtMzGmaXv8jdUPx98Dz4P5Yth4RjcAmt3U99wFPviAhoTk3GAZEuB2iBwWWBGyK4M6P91H1XhYMGUtYVUSz",
  "key25": "22fb4z4z3cn5HZ1jDaaa99HniMLtqviG4PT1MmvkLzmaUbwid4g1vuVwME3uuGKAuJEjBynkhEsdu35LTPfKAuzQ",
  "key26": "5gjEyS4Pgo9P72svCvio9LNvydS4PyVSHpBKyFgN62YK5hQvkEF8x3NDBrgwspDuAXUq33aKnc81bChg7s1azmn"
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
