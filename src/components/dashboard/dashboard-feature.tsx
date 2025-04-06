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
    "4cQ6tRQNbYdU29WV8D9GSshFqTs1qzY9wtYVk1MgVmPrGHtUtgW9p3Kk92YgvnYgTzmYPvexwHiF7Kjxni5NazyL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zMWiJuZUfhzhRjKcc14w9cJZoZtWnuSqEkFRUeJJRkQjQ3tB4K2dQmuBAx1Q3mieVKVEsVm3M2NPrVy2xjskvRj",
  "key1": "5FbisQWX388GnZUkMfDNdH2dEj1THULYxLocpxqER4BCdaXGY7YZtRdiPtQUT5NTU1K2Gt4RtRTtsdXHfvrKqwbS",
  "key2": "4HkEv6BTz76KZa56tjvV8ahwma8aRjtgWNWBKr4wVrNXmsfNKXzNQCE3WZ4PZ4QodZoarpd1dpFSnMpgNh5v9iom",
  "key3": "3oYJpfYMNdApVPEcheEN3mra1dGXQjQpr6KXJgZWL2D2Ad5qzz1NJUNheyTsMuMQ5T3ecpRPZGbYA6wW4SoXG8ye",
  "key4": "4pnfEXbSQrudmFmBvPRCUi8X7DTgkQrDWLT8pbRwaUoACik61Jjc6VxpPLPjTmDH9LcWTtnAo2PzympcdK62W1N7",
  "key5": "2s8UaL8aaQqHgraWxoE861AvuRTH9U1MkLcqa113h9ScgL8Tmd5TL5bPtbAxeYqFcejbTZAd1pfnwD8Kae2kd6wy",
  "key6": "2v8rKyadGFidS6m4V7LoGFPT4hDvcAQSDSkq5iJoj9FxNZksVcJpy21eVyJMzwHBdbBJZUFynmg34A2SKine1WeS",
  "key7": "31RGAuqgSh7CG3qASfY4qybZ6anmjKe8TB85CuDGiaYh5bA32kdYg1ezoSa5vSY2GbQw1YrGsW2XJqAiSiyiTSXD",
  "key8": "3bGWmHWAfB47W74vPZVr2uzoFVU16Lt6t2vp63xQdoBvqVR375xLCEyUJH5mAueahu8tyr8Dq7zuRAoBLq8x8trc",
  "key9": "3MPFLFWKATPZhNLK44p9bRph6L8tdpnUb1E5F2AiA315VxiCrp1GT3mfnzmpYuZtJ26Ui5SfmEkuwFzAahUzqBP5",
  "key10": "3zXzLTJJJdNmnEQ3j7w9ZZUwP94su58jrwoD7zZJKBF7xPGSGe9oJa2MpmbM2c5mQSxSjK62Pew7A3RmJGjVTeQN",
  "key11": "rWEzhgrxabi4FLmq33gzd8r8NZEcSifxRAGCMwWkP7TVUSoVizTVZGqd6DJpyc2VVXBvEPQuDaRyQYVPsVG9kmw",
  "key12": "4ZFFFjWWdS3SvE5SoKkH8JrVxLxJUqe53fJDuKSamyJva5TaWqpLbJNvhq6AB9yKx9roeqDrrJSEGKL8NTJ7Grbe",
  "key13": "aWhrKzkAucr6Bx1ZfwQUrNRkrpbDscmrJDhjU3qipYBP2QUwvJujisGp6MXTh5E4XDRQoYp3UwCk7W1s8BaLj6q",
  "key14": "3n6b2HJb9jNgprs4LKwCYLzm21eUG9tUABTTu8we8HWDi6iEHbuj8hvPJwbNDuBkcKYLKyY3qJU1hvqgkMsuP7vy",
  "key15": "4U5JwZNUJ2vNL6gYGxYiXDuX4RjijkWYq97ezyepupS6JS1F1HZxY75R5oahGLAJvW1s57gSep26YiZE9JcGfMYq",
  "key16": "5c23oQLQnyMqSwifda8PdYeNZC6r3Zc1UTsSxGWFPuxavMyKxbxHdNa55TPxbRQChhH8JwYYLAdScTNicSpDfk41",
  "key17": "48B9Ef2UT8AnxBmEX1HHi2PLZQDBC8BJJLkNVbQs2tmZqxCr5WeAfvz1BsJCKwfASgjfYtKMyM4QLTdUekdWNiaN",
  "key18": "vzE9v9NwuVDAdnUw1UEftDTajmkWBjta6kc6UGqTSYHz6DSYmCsV4PKSP6AweaDnfGVobN95ajdUSAy5igk9hTb",
  "key19": "5KVEunsxWzmcGo3YbD2c8smWyiChwiBy9M4q1ShNH2nWFMXhoFMsEJfx5rhfxF34K594kYuWBBht2kb6zExLAHHn",
  "key20": "5b33WGkLVM2wNy9tJbpnBu3eu6JupneYiamdrGKMscx9PyspMfoNJkVFadxwUS3F8ApsWzHUg7ffhtDggBwJinum",
  "key21": "23Q5G8k8qfzShXJ3GKwz8TutCypEUBDofvZJoNHtTPPPoNpMFTnNVNWtiqyQGxWXegbWdTCuCK2t6bWcZWvpCsut",
  "key22": "4YjAHpwt2U3EEPV1cxoZpgeatLQRqaw7V7Aj5yABrPwLfWkysS5yKqsen5U3p9EE5h1dXsSKaeGfzFu4FcZTSGha",
  "key23": "37aHhp7Tw7BbopiMAysSPXyAyvGkzkEuQfS1rYwxWz4gqjsMdjhMsPGTPgftmFZfA5Mkkncu3CAEhZPQWko5cwzE",
  "key24": "2Aq8NS3totoAc1TfvW1YMdddv5govdFYqM4b2RFrwhP4yWrTDmoSi4bXLLFRJdJGujNEMFCZHWqWxLL7zqTV8rfL",
  "key25": "4LdTf8uA6DJvHHWgsK3HLkZzfegaYXbPtUcqn9Ed8XqMMcR57z8Rf9GotndF6P5eHFeqN62rr4uLjxv7n2cWqU1",
  "key26": "Z5RvAeTNoeZxnX4YLLZ4Xr9JvkuKK8M1xvJ5ZqGyGTZz1Br1rExNAXhpCoh22iqDiHfWnZsUiuucjKtpUUV4EF1",
  "key27": "3PNxucP91DHGBxkCBsTrbk9cdiHwJV3crpQXFETvKtbdJuJmn2LwBXmDGR95FzKpr7G5f4D1cTcfzuHdRL2ydtCm",
  "key28": "4bS7Nr1vXavhLqcJ89tnPUiTCeR1baZXsJECQjmfP1MmVknTriwruyskqvBYTWT8vZCRP1cBWzyD6x7eAjJZFSEZ",
  "key29": "4bSBXeXZZn2V7hrHnt2PAsj4GBjF9bb9p22zDAWrmgZuwy2eQgn32KTSgYFcsPAxjbEz2dAva5LZmuYASbHHnP9K",
  "key30": "4JTLucBt66MJRG18UuqutuWRg22nAwLU3hu5rTHJVs6Sobf3fDXtCDbsHLosVeiDXUUgBci81HPRBYiqjwP1r12n",
  "key31": "2EtkVBR9K7oxduATNpKoTRkayC9fAkU52PdJWDrgAqbKQkksbQZCd7zjGc5SfP1r7AMDcMHoDiZSe2aSxFNDDYot",
  "key32": "57qwRGG9Xgq22EBgXYdc1W8fQ7kaZ3j1Q8nCnD5JWHboLVMKBdy23TERCXX82QbW7nK9236nyqpDv8yANg5MSoHR"
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
