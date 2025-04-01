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
    "4rvx8iA2h8NkomEaXj2GMqPx6ZiWJmMkhMx2sAPaFix6epy3PLDVLiqu3RMAxNRQ4vJ3H18RtFofhevbmYPuGsc5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kDcoHuWwXsYamJ38YXDWiSb4bnRTkwTD8BDoj1KtjBvjjT21YxcHs4ofmE9k1fcrST5DZhrBKoaxLBUHEFuNouw",
  "key1": "2KhahZKAf9tJeywstHDa6nXvAyW57VbtebFYKaRDK3MhVSyjvgifyJKT9vgZJbnUBfncgKY7KMh5VLFohFH2Tich",
  "key2": "5DqWLFRPwUuAZmiWMUSnGS85Jw9ayK1M7WTEYNfc8akeVCmpwbDkHWPe3xkMUGeXggGpn2UexjgmnpVocQENDo3M",
  "key3": "3wZ3zCZx6BpZJvD9MLXaW4gxBXBZ8NS8Vk6PEvRrBsj2DqWLB7kfW9YRhsRhnrbzWahGm9LzmqbP8QjhmcJgZ171",
  "key4": "4EAEX565dwBZJvAm7YnNHk5X1HATU22Ec3FsPwpMC98CPUnarrdFdHXaoNsq7tHhFGAauLxrS5Za5dyZWYH7VUXP",
  "key5": "KbNj1qafbGDDGEQ7N1yoZ6phwn33VacWC6fDteNJjcFQiaPcfW24id9X13HcvE4Qa1dX8AHMg5kfQDVig5v5hJm",
  "key6": "SvnSgEtKutjbehRegnbq8LdRcyYjLyrY9oUkthUGq1BmccEW4gUCa7gCfQihe5w369MR2F1it4Smas4DmvZnLFL",
  "key7": "4GgB9n3Hcx93V2E1S4EFxkL7dgM74h4WwHqSYUfTyiqpBHCcTsE1QsBQtWN2tqQGkisQZdhtVxsTMybXS2QHiWQY",
  "key8": "5aixNg9uSQV5bL329np9g6YG5rN9ySqR8582pJKQ5PyzzgQdG8KPCkrdHt64gbrKANrPGVKE2wA417hQDZAyQYK8",
  "key9": "535fJDdW6LF2XyHPMZ5tKh7W2mSvw6FAXvTWiX1QH58BotzrBrRDDsi2QspcKm8AR7gvUZunvWk7Haw9QNoTy8DA",
  "key10": "2KM6F7zAScUAjGpXjEyuaCWLTRAbXtce455bZp1wvNuamqpD2qWZ1XkZZH8wgEu2C1qsXrcGrrAcR37nrxh4cnJM",
  "key11": "PDzYhusEEBWow1TnGh6KXLbTMTSaWunia9sFncMFcH9wjNHLsNkoH9TqSrVzR4m7JRpSMtJH5Aa7MLx39aeARVd",
  "key12": "5TWRiKwoRqnk4aqmukEateiaxcdRnquBhVm8oQxjZ21qkrUJmCiRQuJBehkoC3yTS477Z7CBTj52v41EZFWqPYNt",
  "key13": "XHLRnvb4mdQPxM9kMSm5xG91SpdF3zottYNKqTXSmrpzbYHHYXTGHwvjGDNwQCjLuWuJtEoVhnvyzWtJ6idxzSr",
  "key14": "VJbmeNA8CGaFDHyZgcWQwxisK7SdQBFJD8Nyhy51FZhpXkpTBsgCLRGo51sdQauowJ49Ubj1T1fAU58mBzBqEZn",
  "key15": "5XxVeQHwmMwqDBptfX2bwGMTbRRT4YaEdiN8BVin3wNmMfRBrNi2j7FYUZDJqx7uA5Ci9JZFjS8x1FkBNcLGQ9mA",
  "key16": "5Mcr9Ci8RBkj5R2cfu6xaAc3DgodriaW9NoPcLsjatzU3A3FfVSEm49pLdW1iWyS81cHC9kgcMvCoQrprsJgELw7",
  "key17": "4j3EDYaXJRzfmUmcL6Veg9m4GsydxszRCJ6Jv9xhjBf2LfehqNMZfcNCQqdbZs4m8FUHuFRKBasbs7fhs9aatvGz",
  "key18": "2PTsFay99h3yPGJAbMbdPiQsgBefikDtnpY4jiVuTmhpR2cc2D1z75yCr3YhkvhnuXfnC8fWyAXGLvSGjvswHgX",
  "key19": "Kx1ruQWzWUqcn4SkswrTQK2yetbbKnzxMuRH9xwGwYrJsvZPyECJn5hbF3gLZ72SQjwwfiy5jh3SwaNiJHH3z34",
  "key20": "2J62fVPG7QHjsXx5Zb39quVz754uKthYZGpSVVPtVZunrS4tbAfZ7VfQ7NQcFzhWqgZfzSKEZBVwAWrrkP3thDPu",
  "key21": "49KmSDKiWLScr8ZDFEaRVdXHqmHCLhCaAkEgbFYFKd1tFaCKotkEhXJx9TnT2KHgn6So7Fx63SmFC6eucQiq3RvL",
  "key22": "57vjj2DcKARFiPQK8mNMZZdHuNwbKDdULbYt8aWMeD7rABHGyTCw1hqEX47apgM5Hjri4cN9sFqirCDEJyfkKXdw",
  "key23": "c7r3YeczVi6KBMVR96wWarzHhEYu4DgX5hNqYW28B6fRURsBrWN1DaPXbX2cQ9sQgNZvDVyLKsYCx1tm6qPfG8j",
  "key24": "8grcHZXWXXjy8qZDVB2aHcE3J1jMcuqzbEDYVdBpLFxrTkMMfki3YqtsQAXqMr7hgAcsJ2111cAvx4VaMPhXGgr",
  "key25": "HbtBExFqLEN8vzV5j62ypnNRSipzqEX8FGxoJCCapSyaNNWYzdBnkkhZkZFYMftUGs7b5UCQTcf5keM9TpkRymw",
  "key26": "U6eC1hj4EjPgLCh8xprpEnTP2S1WKrKPnWSPPyjEByEgwBf28tnV5ugNyHvoJh8gs1Hfy9SAbdcf9XZxD9xvb89",
  "key27": "AGHeDCYRSfTeSsNVx7bwj8SDPfShhA9UPWZHDniSdh1qEEuGdNjatYmuQBKYP2zFoi2w1C1QbWVPGY2wScuHtZS",
  "key28": "2rXaQUqfEWKneh1FdS8w158KwW3j2fqtnJXfbxvZCHWcUn57Wg6UoucEbYMdjNYjmevUjkXVpag995uujkiWgbMN",
  "key29": "2yHHWZ8wZryEh4wgDA1BBMsdRgnsJ1HMEiwN3mjMuLYXf9Du73uQkiQXpNpjqk54FbpuAaTS7MLJYM7iagLViE7L",
  "key30": "4tWkwFNGatXj78vKEdY8dApm5D3bMkteLCMFA3mTELoJGvEoM16M2qVDzHJacnmh3AbJQCbxAcAMnmVQ8enXGg7w",
  "key31": "4GvEYReGY7uTiFD3kNmNeoSKMxQiSfc741JfFFKeYW3VS4j3HReXyb6N84LrvPYRboiZWmyHD4c6dxC9jkRQsC7V",
  "key32": "2TT8E7rW8v7BZLXycHkd1P1yuT68KgR1Yi6Tx4ncFbWnBVFSD1v6LYxJRx2BDtowrVpRnP7N6dZMerJVwwCqwkiH",
  "key33": "53dhp8HmfrJvTpfsYzZrxgKyf4K4Yd2s7thdqmTRohdTWUdENWsdadZLiQEFY2ew6iqTsjdUeHbdfAF7oHENpoJV",
  "key34": "3UKFpW8pFbZEnoAb2smPA4GxMeTGngkrfjpKNeFwknb8ZLmmEKn3xQmBxodZRyJBi4se2zDWAf1Y7fi8DSsiJt3t",
  "key35": "3JDZ4AezckGGVXcAbz2qM9AnkHch8Dqw4pnuppCKzreLWeUH2pAiV1g2ZiVvJN7Gpu3kW5pcKVRBgqBuJQWHsvp2",
  "key36": "SFoAzaFhYKnJpe11ZXeXsUK49jY9qH1vSK3nXrQhkDiLn68MrNS9mLHh1VcAYQk5rEp4dtkFfJCJffVpFB1FMQ7",
  "key37": "2gjg6EoggfV9R6X6wdMKzNr6CXfBPSj9McSRud6Kh8Z7c7aoT3cXDJJTXgmqhTqX4ezQufv8vW4YadkjJfCUB9Ws",
  "key38": "4Nppw42HBL93A2jVuZaYoR485kbDonfKLnPC2AZNndZfKq6e2L1SpQB6tmp3j1noSSdP1oTMuJUohrBWUXP9kQ1j",
  "key39": "3x7V3rkunbmFzCr6v5oc7jqARwzgfLRf4v3ciKPgfe67zNVeXWkNhm4cYC7FiQ6rT3QnJtFGJRYtyYiinPERuc5h",
  "key40": "2q9WcTY3QbxRmhpSDuKYad6MTeRZDU6GN9gzKo3KgnWVqa6aiHVU9Jxxzew62K8oV5RyKVXn9sSrt5W43Pd7L7b5",
  "key41": "2pSPSu14ft4u34emmuAQsEtVHP2MyZbbGQoBJh4qoao3FjZcFUJdbJhm4SpjmEEiPinHRVXa1Rr3SmwRoo3zdPRf",
  "key42": "ow6VJ4QK4buv6n3HnVw5FJ6okwvWC2vzkUo3N4qYQ6kAYm7spKwmbDbbZxRTaya7AMsmxpBDe7MuUbdKxPu3jgT",
  "key43": "25TRYsDb8iMKNuioEpbWGjzmvua5otkLuNUqSa1DHAu3a9x2CQpxv1V88J9TS4W3SvUZnXRDVASm26Zz5S97f98T",
  "key44": "4qx3rrQbW5Vc1QKXR28PCcWEQSM5NaYf3ydBV3nLvQXsqPmUg6EmAq2JQeUsMKL2MaGdG6tpBJ9Z1ZqWboVnnHDg",
  "key45": "52c3A19XsNd5SNT6qMEUZuT7PDqFJYTUcseFdHmpaSCeA4jKCbFbH2kaLAWrFvRkCRaLnf3afx7ytNti96iHobH"
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
