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
    "4vC5zjJ1dwfKKNTgefiNeE73vs7hc2oAooNDuF8Jx3XFJcmWZVSNjkaCqYZExSgd6eJc4iv6GFQUeB74ShtHUVps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jP4u92GYqS4AgcgBkBu89eiZf6U7RtVVFVZgdUBBxFNpcMbCjAb7yTPHTqj5SM1DoXnvCNQigvgpdWmWW1cXKzd",
  "key1": "4QyYxSVw4Rq3daKB6G2kDRS6qkBmDe7iCmE9SZatUhGwFEnuDggB8UAEi1eibf2eHkAtDDnRiLt8XuPEXkYKamn2",
  "key2": "eaZ7hpEcDS1tnLmcspmzzczLU6CPkCryZArENWRhcDS54UaeSqANcXur63P1KDV2M3SVkL9vq4wuvkyXV1R8ZcH",
  "key3": "47yi1jAfpbd7JF8JdGnJj9ChpaRe6GbvvSNzHhucJZEPPQ7Hgpac9BShs2y2y67nwQEYoyfdo77Y5wbkHCvbQp8n",
  "key4": "61rJc72omZor6Qe58uLQXZP9RYfizB3FUqReaD3gXJvqoX2r5Dv5c1kjuT6dLsLXfP3JNuxBeFgAC7Js5UeQtVfE",
  "key5": "2VVCr2rFcnGjzR6PmABzaR8qJRQEgdxXeq4rEnkCpxg2UXraU5FrDW4MosLWVnLZCDN11ssh68j6aA2LckWX7zjK",
  "key6": "4SUc4NAEQ4SF4wLMc9YSC6tf3iJuDpdGhAtTuBYEUKeg6naRBPZRiaagS68YJrS89Wc5NCgNwTJ23R8rUF68rpfN",
  "key7": "4fqj2QjGUy7oorHZgCgzGobECXKVQHrMYcRvvADFALSCbfUQoetKbRGK6mmjrCGfdi4id8K7DPkWSZurMmgM46ME",
  "key8": "4iv1j7eHiijJ6qk1MF2D6mRKuT4nQEXmrsxuF3DwBouudJnfNECDX8Zvch7zX7vJhy6Zxiw7N27ibL8RUEchLpsY",
  "key9": "2wnH7R3BMRHnZ5ZQC2WSE5bpw2jQt8BVYGy3koh7AVZJTfKTQxKBdb3UPgmSskpzDTqwu1x7xYeUB4cP8YPQFHnv",
  "key10": "5XvL19eC9rF5f77pbrYn5ceraTWMod6RKULGTeg9jMqDLuinZpz5hXffJNuNnQ9hGQUZASddYmxvshYhzESCWGvb",
  "key11": "2GLV9CRwaYRG4aBVEvzeU4qCFZ1A22gKRCfBq1yqMZVKYDREU5Fw4mNYAA5kZ35NzASPLBYs1VrmjZZp2PKDGKNJ",
  "key12": "3JoY5Sneqv2BjDQnDSTEw7dP2fkxJUCZQ9KN9TQ48HpcxGfqALQxgWB7mCRGLAAPXMzw7oTTVQ5PfzRtew27Ax9U",
  "key13": "2jDoBF71eCXjpEuqQ9sQQCEEz5sQnj2MAQMAhYW8pnfury3PfEE6BWgqQTGagjyeERKo2BgZuHenci79kjbc3Lxn",
  "key14": "5775eKyJhfCbRnTmpSqRMeM631uhk6DpAhRoK3hPwgLsC3wbHhctANF2W8xk985juqJytziXU9uFnH1749AuqjeG",
  "key15": "2yecWyrfqmwyDDJLL5ZfYqb9KWBFFvnb7VK9xC86M6dP75jyvZeSVY6GYStbKQ9y3gNYryw1jiUnuBX7FToRqxoN",
  "key16": "SjioY8VWm9QoV1qwaFk4eGgYzRNViKa5YKohk5mq7VTzs9yWNTZWFh4RoV5vBMAks9hCk71SVUrDufRfgTmhiuX",
  "key17": "2HLGET4M8sLCMtyz5Qg8Sc7d1qJT63SGN6XvaYuZEdHsbeJrbB5j28aibHKuXjRakQxk93ixN4Eu4FRUum69D2Wc",
  "key18": "29daH2Zgb4VhBjDsvtomuActavuiXvscaSxMAERUKHFYrwfnte2yH67vonMUiQS6DT7hgmuARJMkAeK1XSYD51vF",
  "key19": "XjcGvL34zeYuXi5FZsQRrjM8Pp321Y2zKwn9g4PwHvabw4BbLYNMyCrC9fg9S6n2rUmMfGNbsponJDGJhmAAQVw",
  "key20": "2mMorr24bANf88jU3PPmD7JhZdbgwg5jVrMnabpo9gimDErrRWMNhNQ7LmQzW6W95GE8ShkKzVsnGJ51GREjFPcL",
  "key21": "3zAvz5qKQdVBpmBkXGU25xvDXzrwNSQC7wMLSfxvRwsenMsGMhsN9BxJGXxu4VmqFbSkLKPYanEi5apNQv5F3V7w",
  "key22": "3ehyd1zWJwDKPCSRbbnRJMWQJKBiYbnxPLwUA8uPooFV7iMTH5xJtzxU17P1QXV7BivPRUbZ6R5QMCYASJpLyLzv",
  "key23": "4ZrVAiiZxop5ovktc37pmFcFH8MdUGrDwWWyUmJV6L14htG42ybbwHgwqu9ssYPgzphhAMc9cMQrCFB3d7JWoSY6",
  "key24": "58w1X7Px2NRJKzRmmdDT4tQiLjYgWEoG6uWsWE9Gtie4zPhWBoCMttddf3VqpdZxB6iCUkHN5Zjk38htqWD1CCJA",
  "key25": "3xojd8cQkfyZhwvnBTq8FDqUAq24hRB16i3axRcHpxx5iTTvnb9JYE64VpmZw8975rer7a3pfzY2faVJLRyovhRB",
  "key26": "256LDWmn2bhNz7MApmw4HMXHFCMvHccz2TXgfT2foPofZrFDMeJH2qfZULyXE29gXHhctt43SSpbz9um2R7Zy8KU",
  "key27": "4G1KXrcuKSHevFqdeYVGnKseEqv9xR97kWL8mY8EjLutBJyyeaVYJ9Tth9UFD5tnKnUdNXLDYWKMqG21mGR6JfgQ",
  "key28": "5KqVHJd4XWEUgxSJSpqTTtmp3Xj2jDy5nNBujxtk8ua4wSJsEdQYpkZMzG7xGLL8HqCrGrB57eqNaPZRVeVsZL6D",
  "key29": "2NTJQq9wey4Bhfu4R99eZDHEZTMqWziXmTX5EyG1au3uDomDgiHfQWqcHFpJVCfE4HbXoDeQRQKts3wogWw7Edoi",
  "key30": "2AMhVsbenq6e81yPzkCsniPjrJDkBNY6qrPjJxWL58tw6F2hMCgKxcAaphjYUfnHv2QQGVRALzgWQEDxVAbHoEEk",
  "key31": "5igdHT27oqk199eeMiPbUQ3gKNxDiHmJXQ5sfxWyxNgCzMaAbC5XT45mYq6heoWeCkCcdDftnwSCeAfdTY2wDFfr",
  "key32": "3Dc3Gz59AYfycaVVeSW3UJcTvJGY7kbt33GARFcEkXbp1oXArwzPHZB3bbjysfLVa5hMe6hgV7PufhDVeihTHemj",
  "key33": "cLDABo6QceV3SFdTVaRzU5U595dyHTT8UpoTezDrRQn6dbudvjJ88Lz6AnVi2yhYT1pv8sz17wSKytWw2aqwz36"
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
