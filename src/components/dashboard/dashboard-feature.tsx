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
    "4uPxtHAV8yCRuj1zavzoGdFmvNXPZqLeib12oRAFKAkDkXLj5jaqZV9Dkh1HBgb1XNvzAtFYUn39zoHg2wsAkcxp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gQcFUV6FC9NZqwSq8zhsU6mJ45D67hpN1ajCuv2cqhnCRcGQ2cwaA46cSaT28QrEQVPQMJGHPboZJPMQN7SeDXe",
  "key1": "43qYmieUcZ2Ghqg6AU4NjnNC1Jn5RB9HVFQq6MNLf2uYkVJupW7y9m8FSfmjQrK6CzCAcmKQZC14UdrH2M1omQj3",
  "key2": "4rKqijtDLCAnLQBauMmi76jUcHPMhkX6A8ShSUZVkrpfzWQP4duuL6WREJP8gSi3R9nUnfMT5fik7rckZh42jLmT",
  "key3": "5DDBWsb7dsJJgUvCagu4yfCjGoFn7RvqCHUq8vYPPYU96dDRAwiL2bQJ9aR6s5Ud9LtzSsAKHfeZrRc6sQTGxrzR",
  "key4": "5oEeVLvurz3RE4ETVoVEWcyDTo8wJEaH7Gg9yghu7xzn1tCrbCyTVnLZJTCMjUK6yPJF8KXmmwN968pfyeH7iHA4",
  "key5": "83oTnPvfQHMMakroFR9iVuAZQddwppE1GMdLQAPhgJUEu4wd9jDWriLqyJYjinfkKPYrwCj11QdMiGQrnVdyytn",
  "key6": "62EPiEnQmuQ7kmcXQY8bMedq2rSHNnePyTSVqH2jMWqiZ5jcEAiYkQYPGaSo5zQWVsSbVDrNiVsWbAo8qBMQRqcX",
  "key7": "3ufVcCw3V11bPrZQz2EhB5VBYTiwRkvbr8dktqgcB4C9FSVpbZiTUQZJ6czC3hV2EDqajRbeu6kWqxeGNdkf4oD4",
  "key8": "2PccgPLCmxVsMuM6AhXzTzGWaK1NfPFeY6c4QYSkWs1pUFNdgeJgbFpCDNEBBfLvMgMVDNpPc7w3XzXpXs46xaTg",
  "key9": "Fz4cnsN7RrTUVnobM8vrDXpwVFfbhsY6681YV3YTfWKkyMnY2jjx3pu7gUDWQu9q1pgkGtzcyCGewm5yjGba4EM",
  "key10": "4gCQrq6RSzMpfqRP3h21zucEspqsTcL4TtmA56dssLJWGBQXUAuon6gi4NHDtfVqb19BFg1Bod1ZRYpnbhRbReMc",
  "key11": "4a1ta6nT4hDPt6zdyZHEU1duaaBjhc3t9mx1uT2NcyYWJCJHjmdHXQu8n5PwgyoEFxSUyksZvL9XwzaKYQbtmkpN",
  "key12": "uUtAUkYj4veFqoPnQ3wVtDUo23Rt9RBoKcY9e4PgpJrzCvxGbx6DJbAkVPN9pMKUfTJ8R5dVa8yGAfHt3tHS3ED",
  "key13": "58JMCdYmgD8yoPsre9H14fhuRtaXATaPaJXy4m94ztAcDSFtD4pMmSJG6wKLozgo1CDBz5WDTr3FsDeW5EBwU27f",
  "key14": "5kpSDsXmzzJBX4uayXSbvrixGm9Ksuna3BKS9fM4yAQ2vwfgounzYxYN3war1JEGdRTKgQyGEqr4abnhu1aEarTT",
  "key15": "5kSPC3UXZnXaUwyLwAu1Rp7ssEk9TmEPCdE58R4krFNxqVNrQj84Q7KZR8soy83XKJJLx7pKBGY7xKDwHANYt6VJ",
  "key16": "62eqj9FZysymjGkJXLU7om9oPUTkapj9o7Vg5sVAfX4k1RHk8ZfdiPtRLcW569EJUtDFAaAGGR6ZgJ61vmuhN1kc",
  "key17": "5ar9pY5nmhm7VSZiHEYAqng19HsK9khruvd9S2eCNBHYCi7BWhBkqsBzZjqDoXN7MzY99KbcVa2Y13URcTRActRv",
  "key18": "pQQizvjf7Vxn6kaiSpUXYD8JQyfJjgTCpweGUQiezTCXHGZWtKUNQxpHGtfYGGYHi8gTBuhSHCqvUmXQUixUc2z",
  "key19": "2CYWR8HUc7uaH4Eu1yFnCvffpAHjMdvQD9Cq9ZYdzggVyvXZJnFC4mBf6a7pjccGLQFSELLFJs5jmFsg8oS3pvvr",
  "key20": "2WDZDAHuGFfHrZNsqeRtuJEKqZPGYbi9ssGhQ1c7XfrpuBwwsakNRVsmXN2Ys4DBn9swHxGpyk98f8Nh4QS3P2hb",
  "key21": "4DWUqEyNhHuyb3knsUcY7iZHCgqc5PXGuYKDoY8xR4gXz9kFYNDzo1xWgJ8HLEmqzjgSyh8UcPrGoUFpE92vUFUx",
  "key22": "5mm1j5igVJkUaadzV8bbKTiEoLXWPRLAZUyjP5PLbn7pAS7G2qTTpLEUQS7haREn4W1dFWnGf2PCbHVYtWQz7zMQ",
  "key23": "3KzqKFM3vDoLuxrRnH6yziiypmYpJYULy6hEbgsRiDNUnzVcZcMorbyYeJoJw6r7uJwmofeurcSMhJueTLTgxBuv",
  "key24": "sFb4mbbmw5Kwt9DiyQ7ooPdveUsUMZWKcxiLrfNmyFBvwRbv6hPSxQC4xxCZemCCAkQSz1i2BTWDn5vGDWzCmLJ",
  "key25": "4EvUhqLtZwe4yuTdZNf4it3abfU8wcLofwGGxpQKQP5vF8Nfwd4cG9mknFbNzQVbEFjC62rkx8r4Y1EQSyB5ykWu",
  "key26": "2uAtGdorBwFV2bCu7ovV6Ks5F3UMNmv7Qxt2neHQT2yPfF125LBZuJggoKHSRx5Ss4c9ik1P5MdpiYZ4QMcEciwS",
  "key27": "22w4qAFVBfCfbJ4wgmGKZSLJBnpwKDKN5Q2efxb3vHdhmfFNvJwBu1A1fKPkxWkyz8GtqEvAFU9TRtXHW54KBwou",
  "key28": "596sd8WVv5LdmbUXVNU4TDDZH4vsxFHsecPEajxqn5UTb7x4BzRCLUHJXPQZSpBaNUxfv1ZaxXbKZasxNrZh3aRC",
  "key29": "3napaGeW7pj6LWSyxVYvYtsThc55FBLznB1wpZVxm7WKKJFbMw8CZRX4fA4K4tf2vaxkMsdk1NdgGpvFQzRzJcrz",
  "key30": "33khKDgf28JSU3DhjT5kty2kiUVgKENj3g2AaDjrBZ2nuvYJUaCayhKEtt3ETb9GFnyUJ72hyE1QAY5dkCekPbab",
  "key31": "32jwryTZSnUupjKpjTapCY3C7ESipGYJuqM882kxt1VF9nZ6p1xyvfwfgNzsLpSPB6rgB3pGR2e2zs9cthohjDZk",
  "key32": "3HuY5PxyncBRgELxWbxS3XFCFfMezuW1vXc2fuP5fxwZfgrhUsjwdJLkXZAm45UMNURPw26sxGgmNswxS7qecuqG",
  "key33": "383u8PFN1boR4BQyw2xxk4DbbVZ8ax43BeWPKJAK5x7PYErXTNv277qQigGPecif4wKYTbM3g7s27hH9hsaNUWDe",
  "key34": "5YE4xL8umBuQ52XnGsinxmKGU73sBJM7Lm1ziENdAaeW4DKFPYmGZZdqpSZPxHBwc3FvdnYJJdSxu6bMfKiQyuA7",
  "key35": "5rBJufhHchnJLV7n42ugKV7KVFBxXraDB2g6iT6XuxaRrtK5owpmMGeb3uX6s8FpCKr3GyYfQAxqKzSZJehMDXNN"
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
