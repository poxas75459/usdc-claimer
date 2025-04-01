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
    "325TnUAoDcwfPav6UY1hiNMV5RE1Yc4kuFezc3Mi1h7XUsQVe3uXcK3qkBLqYmaBoQegs3nmJwLh9zfkxbWqbhr6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "124c9TUQeDH5cnF2Qifx3ycSLEDxBV5DtXdpz5ekUbFoAWgCRPmSH3zyDaabqcqgud6faJ8sYTEQcsyefWiJFWqk",
  "key1": "2Y7v7aFk1wMDceC7A4aphZeLi6H7t9WfLujGCZkZvqrF1W3HfKDaxvsCYn1FG8X63tRsDdka1R3vFEubEptF9sRt",
  "key2": "3HFkk7CYY5cJxiPTmcWFfPVRm4KeM5ECf4pF7FKcqSNMY4LY62XfbvpBNNFCrPvqHNrF5ydLEyUMtD3xPdWZhPZc",
  "key3": "5nifuH7eNe21qHWFteEyG5Q2GeMLBjPrifE9Zsj2tyhNoJ8FUBggg2NrhKDXDmdxXwUbCBspxx4Bfa5LJQ8GB5JM",
  "key4": "23ZbdB68Jk8AiudRMhpwgRQXiKnX7jtkisqB3b3m3MyqAHy3yuhoBAxWEFqyFmCP4bDYVaCRXsNtzedktNB5MXUP",
  "key5": "gKvS2LHdmHS9FmhL68NxJE5AdMEGgkWsP91hBocKXDmAURusf1eP6JuBkT71z1KmNsboQ9peGNjPwkY2UwNjdqE",
  "key6": "g3PoUSw52j4KJ6Mt1ie6HWyQbHv4vCmUXPc4Dh4bYUyWd9wyX4dfTmF2c4EPnFVrtuYngSQFgAPgTuEXohenRrx",
  "key7": "4QufzMYPR7rz1vhNvya6xRwsthLGKq72ZzWwBzRS4ozKAzZwDPV5pbb2VKgMDp1GEGk5qNaUguDpKT56cP6dfRdZ",
  "key8": "3NhcWwZuWcEMTYc6PSovmk6xdX7tjSkHJ3pv4uSa8Zw2aqBzFemLjApPvX5rmtUF4NJxqhgnpB4CfD6SJyUWfKDQ",
  "key9": "2zfKat8VdDg4fJBapcoeSuscCUVuH7kwp3rYRhZ2FRDRZWZ2TVdxAT3novHavVq6xzJX8ze9HXoBJCM9iaqKLHVT",
  "key10": "4H3qe4vSEQLE1aDNoSrxLX9VGeVpyXqDY2w1FaccimCW2h4BiBaCek5pY47KG1mXuQa1Xh5SuSyV25G9DyveJ8qU",
  "key11": "3i9Q9sjcoaqcLGVcrMwVsNNGNkzXvqom1J6ndy4cYGLiEXuBeXoCwq8bcMc5GUgWUVN3u49y7hexNksoPaY8ufr",
  "key12": "3vzFXL3w1VRSGSYCfnjimZuEPwsc5VP4BpU7EQa24wtjeedxujc6T4iFW9aRdhgr2fK8pYfnvwRwfzgLFtVCE4hC",
  "key13": "A7u1w3dLdg1BYtAk43mBt6PJquMPxCTPuvFsbkmjmD37PjdhwbgWMLyobVPs4kA5WkANCqRpFk52Xg6Uq57spmU",
  "key14": "2FajNwuDKRJtxAs9mp8pEmKMj8MiZQLMUvVWf15ohqUKZLjAFfYsnd1gtxQBy1Go7QddkFbXsB8i7uY2j4yEGHt7",
  "key15": "4H3pXDMVPJugy58KXaeQ6Ag8RwrM39SuQKnqHLpBhovVxy5TAgGQ5M2yV28RfNq3E1qhU3hpnmCcyWCntWZHbmHU",
  "key16": "2N8T4k3NaDhSCHeKvkWpY6Xniv7ztwLdYpYY2g1196zUTNjtU9oMZU71wEGJLWgPRNaLLjE8VVSdy1Vs1sq5nnJS",
  "key17": "5GNk2iFE4Fy14wCVXdQWqrNEvceeWBjPQPXammorYMk58CnKTomu83ELRPrTrRRb82ec3WvMctyXRgatyf9PP5dJ",
  "key18": "2EYMMd25r1Hat8z2fydAbzPF7LabS5rra1FD2YcD3aFJSiVLFQSNLQghB3PMJdHAgmNgEiqGehPYXgkUCsdeBtkH",
  "key19": "43cSXkxSDNU6ffsJ9AHxBECxpFctDcZJYgK36WGpwdhQuNQm5qegQSeGTfcATPaD7BDex23vxqRLoWNsqqpjKHDr",
  "key20": "ZdgCaQtQGwh5zF5xxHjEuw28Z4owkJZmbBNAmKidzdeE5VJq5EaV4wDLGWTE4PjkHyYFtpKCyD6mj1tsy4F1VWL",
  "key21": "4ai5QKWhkai5XTTXPin9KL9rv2ihR4cBnrSktCPSorja8gGY683J2C26ohTC4PFCzX5Wn4zZsd7v1kLSEyaTCppJ",
  "key22": "FBtGu4RD4P7PXnHVtTAYhzxcYeiprA7cwTVPWvqMttMLxn6cBadHKG7QBLDmGs5bwoL1WX2zc2AEfw5XJK9oGm9",
  "key23": "2zBaiV1B9HfC9MrxyhRfqB6VERY7XFSMSNsviPAQzbW9SRNYffaJq64FL9t5Ygmfm5BiqbDkqcHvfc4RmrJA8dPf",
  "key24": "4CtcVMgYj6sjYAmPrTbMfucJmpnMuzVQ2gqqW3ZFwS8zNeeAnuFCwm5M9oHeYgm5gFguSWmij561enPqLc4v5w79",
  "key25": "2NJagn55F1qP4CnNf6jsCwRxskxn9GWA9wsp6bmFu9PUaaVYu9vNprPYkNQ8C1CHPGUeEtdQsW3MNed1Vv7oSaM4",
  "key26": "4tDdFNmcgX96Sf1nramQzwKUcbur8G9JS6LMazv1mQhWFGV8bxtzFY8GG7M3vdA4efxxU8cJLhgEubnUWPH9DmGp",
  "key27": "5mkLKcA57NGbvHy4heeZaQg9GjK7gd6io52ZniYmxscnTFTjh8GQjZvd15Hktjj2yU2aqwRJgt7sfuJAyq6ojY5z",
  "key28": "3VoxKm6tGcFXA5zy8xn8A12pwVN9qyJxiQTjkkYDNok7JAGcGdXsy1dPFxbvMDHSMg2XVh3RqtQMnahjFhxqukpJ",
  "key29": "2kiWKJ3qWjHjEYwAypEYQay6RQSMCMKQwdrFZz2HH9mpU29w9BJk71syvxFDmYFZpSrf8Nwd4K9gQbB6pQidbV2N",
  "key30": "5dZCBZ7MbU7NU4d3u9b1yvYYmHzQtWkgaNEkqYWpkwMKJ172YWwu43Q251HDhT9EBLfjfqw3CxoAA2dQCAgE5uyh",
  "key31": "QJJTcYT1guM2CE6Dheuizdith71Dm2CP6eQbci9MmZWtHTSoTRUTBWeVfGTDCdWbgJyUsKb5rVfF4vDWncULM4N",
  "key32": "51LxZcxqQv8GdWwdiTnajF9E1ZEY4QifJdgYJXn5jNajVqTHdu9nCRcBLp1sonvY4DgB2fF7GspoLnidRBMLfFcj",
  "key33": "RDbw7TqUg7vvzJFKN2DUSQWXpw4pzeeqEq2jUPvKcPjZo1YJsrWzrGVKmg1EAycPUgFHJS3Cahf5xodzQHWMj3n",
  "key34": "3thcjq3PFN9yLDy3h3PxJYCfoNrCxds3KV73y8dSaSMuGcGA8ooydj444LfPjRNxg8ZUwDF4YGXZL8MSmE9xputZ",
  "key35": "3pjEWvgaLvQiGessBep2GZYCQQrtWt92xxeQQmKwTqLoi2uwbxTYPe8CK5rv456yHaJ7KG35ptuufL33T5jmRaYE",
  "key36": "3Pq317LqDmTcceHopCBZu7byYaMtJr58fEXzDC8kq5JgUWaRA7SarfgefFd3nbZ86zijemRZP5kWcZNvaBJ8HJZD",
  "key37": "PhsZLwQSJnMMphQWuNx6RcfcHbNWa9bdt3wEzDM2AgZEM7gwB2XZpRa1GPnhRHBhu73rkevYw19s4vxBC1pPfZY",
  "key38": "yNUSsP6dR4Zi8CDFRFEzaLfPMHLvznikGfsHAZFKnERsK2KnDLuwtjRkAPGmkhW4TzMf8t44VH1hEN5uhwxwwVZ",
  "key39": "5GWQoiQB5q2QZFGQ4YDMKboBiKZu4GfAEXJuZTiJ5Qm1gp9U1cuywQv3nb2Hyq9tMdy9N6eNgSGHLjSB6jmspLa6",
  "key40": "2kQYHZ7tjMT2PmgchWZUNazLjNtL4JUFUyTnc2NVMf8n7d9h7ADZgTm8g34Ro2qUo81pSSZghAuqWML56EnZeANm",
  "key41": "3StoYkaJP8EqGVcz2mAtwAKQA1emUU7LD5ub5cjbBxVJLwTWv9DsNUY7RXCPrvHzd1DN51SkFcEqPx7X8qx5DRBU",
  "key42": "2Sf6Lo7gibR8g3oVnu8RjJgkw9yKL4C9AXt9qLQu3gMfa7kKSwmz3ywXvi5Ebuiop8YXErCS9DhRV6ZEBPAHULV8"
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
