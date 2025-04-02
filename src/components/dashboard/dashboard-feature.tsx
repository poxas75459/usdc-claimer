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
    "zTftZPDjaVYhDTPCKWFBfVcr6nhs3Ek1m6N5B5J3VRoD37dzH4iwr1LGtT9xCZhGJdJaJMfTYYvxaVqJQYdtgjb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BbDZjrvGkqNoRRyLeioJJnag9PRNDBMbb4Z9RcMJQfADFeGKbA9vgSF25aNPAzym4ZtH6cB6VvoGPuJmh5DtGjN",
  "key1": "ubZYAdALvoyTRYU3NTdX3rZQGDoM6Mbj15PRUcqLP2vc6yBTi7q3DdrjWx45hjmsvbFPTnZpdYVMvUEJp3vVvKo",
  "key2": "2uAk5RbaTrtfxDMzx27LutTU7TeUGAhU9kdx5SG2wLVvBwXoMamsDgubtN6pJ5CwZiHaMf5sX6JsL5BXzLxF5uiH",
  "key3": "57ATLmbpSvmdcMHi8DGaosdxoT3bTTrhbrwuSDTSeAh54diaV2BTBT6FPSZbJgFWs7ycYVkayoFJLUfGHQbajcYr",
  "key4": "3mP2wVZUQFi4SjVXn91Jz1NL7oLeKUDScvZPfAn6Jc4xxhfDShQTc9NdZNN46JLZQjJ7vrL8L8A28cMcZRPqa7oP",
  "key5": "2CR2wwzPK9ahGvnCXXm3pna6tApJXyHHVXzfNL5t2aHBBH5ghPi6ckzY745JVaarWZSoMzbtHgXEh8uciS7sHzau",
  "key6": "3k7KX9bhY4FuS4bZ2R8yTVmhru9VnH5S9g7wCYsyJiSv4e1b8ZyYxJWRRHQQTbzA1tPyvH3s1m7arGfu3z7s5bRZ",
  "key7": "4vDz5LKj6ZFuJg8FkjCRxqNUs8RdDVJWoqHu96t21Hf1tfXucQQNm5Hwaj9C6vynjn43JFEpbrh3pBLXVPeLozmL",
  "key8": "4UEYHwJ4WV7XYif12o35uDHfXZV8ZJVeAaLN3beJ2qn2dJbS5pMVdkGBjy5qnEMNVaB2opHhqQHty6i8AvEWsU5n",
  "key9": "5HscYYg2h1zsk6AR5x1Pop6uEuYkGNYDz9H5HY8fJHc4qg7qFe8LWNk37YaPA91fQUNc4rsg5xtaTuYtjS3UmFhM",
  "key10": "38VQPg7wPNzVREJ5gTHg3st3LeHVqbLMo3apJWAfs2SjLTxoxpN8vSG9tVo5LTU8gBiynSXiR88LJFkd8MAnL7bo",
  "key11": "5CxrR27nxg8WAc9jZT1L1iU9xMMQ43nDYFHP1cWcd2HPN6FhcekwWMFtcosnrYJiSkVi5aGFG5bzSFPaz89GiiwH",
  "key12": "58HFVacz24dg1t69TWNg1tjda8NCnNApqD346TFAUSzYGTCTfcm8XqNyPD1oTQFYZaBeoGWQQ4wPToyxHNfp6ZqQ",
  "key13": "3ebua1oyugWWs9c1vovh7mUqgCu7g6LmsxKWB9D8qgaVVekwCHqUTR4y4zB5tsNxghDqcJAbvit3iTkjSZN74GqK",
  "key14": "2VqK21DauwNjevRya9tasR6gvHC6b1BtKQu1Co3iVi3n8dqghFq54yRqzGpsAM9ZPY4Vvszi3X5fUd7vEX9wWb81",
  "key15": "2ZupGuKzY7UosP18CQty4nz9QrL46BhfoizQDzt8Xgoy7EukJbWqmGYw9RXQ24RCB4tyqoN8MZUtbqGHLdUMeF3q",
  "key16": "55ST74aL6iiQTjkyT6AudC5jgBtFhBufZ5RCagnKyJjrMt9QVycva4kBFL3KifrFfTbZL5oBjzXzscqKoVJswTUt",
  "key17": "32Yrk9sHSkEiatt2mnNUaqoiYHcN6wFajLWEWGxHcQGovmyKfTPvRnXL7nNKcKxRNMS8ZLEGuz8ixcne1vXj6Ce",
  "key18": "25BZUsLes73jtsvta9yjbduo9cgUPeEyU9wPu7X4yJfaCVNSkyrXUPmppDUX7pYAySvTATTBBmebng4WjRZGxysp",
  "key19": "4iSY2DQKQ4RWTQvTCPPep4cLD6ttUvZ1DWH4F6kcUEjAYgNDdh8npSEsuajiyzcQVF69hBZFK2U1YaA8tJPNgbo8",
  "key20": "3HpeJYd2SDUA162kYgafNzXTQFeroiFSqdgsQ8CRRFqyKrEusNrjbi6Y9QgoLrBYBbGqTrbtQSCd9Z8ooRuUmpun",
  "key21": "5AhaHg8bKiv2WoWDegK8Ten7NL2mxKgA2m9qRzW3nKwmrd21xgMhjLkdyyNf2eXJnxGtcEBkXzW9zEnqR8rFE7oM",
  "key22": "472tdBHddMP9WTRp7u2HXJEJVCyH1YMk7MsTRoSEcxWz3EWhKamZmZnAWm4YjD69GaAZWYgi8fdyjwUsDpUaRHkP",
  "key23": "29qiYwDVYTZN8eGYetj9vDtYg5DWMLRGP1xkEKUkV2KABKxLxYAQhC3oo7pEpKseQqszafq7HBsthWPNbDz4SkCE",
  "key24": "5bXGDP9kb35CtbFHY3ALz8U4egjoRig8jjoChz94xHf18YkY7QLXbnxF6kQ3UNkZWk7g4z2wEmodG3VsmRoLdW7P",
  "key25": "4yYxvJqpTK91Cxtv24WWbTvbux4akQRkXfg4S3CNfoo4zAz8T84oQsuRvcqxJMum7cJYWiJ3hqQjeQuhAnbGoaTR",
  "key26": "u7dpm8dDAJ4sEzFNmQEo9tAwYBsrvnXpdf9c2QEWLWeYDD9kddM1fZWjDnHfZWZeE7ERiQxDMBcfMRaaaibtT4N",
  "key27": "25qSvCjr7yD95GJJ21VvAUmWhyUf1bmrrKqXiiQpyRc4wANKa1nYFu88Pd6eM5B7PekACjjB5HpFcPUP875uXXzf",
  "key28": "2t1CokbMSywMB7knGZxJw7yqEZW47vU2y3H7rPWJWw1zZTs1BcyJ6AACUVNdib6EnreCEApNtmVXH2fdXqcxxPmE",
  "key29": "2dNDrrx1uFX5Q2aXkB8c6NK4rbW5hsAqB2AjdXi7C2fSb1BSueHaSju3WzDAYZjuWD7EBQZTNyNEGbBzrV96j5tf",
  "key30": "49W62CxEPY9LXQHoGXnoLRnKkw1VrWdnKRbVzmGr4FcwczWMC6bwtrfuLinhLQhseLeuiv3Z5o9jt6pmjgyijSrT"
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
