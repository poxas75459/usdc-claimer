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
    "4MwxBfBuTJNFJboEPAeffTUYoDpwsgN6Zm7h45Lsf8s42VgDzNpTJCbvidLKkd5NgwWbmduNcaR6dtUtCY51tXx5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5asL9AmkYvmud5kPPXfrHBWph5MJq3QwcxzPy1izcK1GJeHHev8RccsuqUaEGpr6hSPiYT3pwM7duTp9Yxzsq4aX",
  "key1": "5BRxh6C3YGhGKuJkt6Ushew5eJiV9BugtqbCWF7gE8sTGbkPL5xAmvBY8dqnJcLdJcWHYvMPg9KWgBVy4kACqSbQ",
  "key2": "5iAVcoKnXKDq4Njrmd5z2yuwqwJWSvD6xx1uBPzJZQKWsgMfN3fkGsu9oYRYneiCxyJMZkGP1aCGDXbwq62rS6jx",
  "key3": "4LENR8Bz9NQUtayTFNo7QzD4iXzZDLCvenYpWEC8p4z7JmPXvLUBvdxZ6ms7DyfncS9nkSoxgR5VcvdiX3CCTKv4",
  "key4": "45rYMiVvyhsL9JkbUYd1p8oJRZNjqpJs4betfcgPSP7wEivHaNTQcXpq28QVByvKKz1uKtt6PjsSqXoP6pdi9HCJ",
  "key5": "2zjnkKua61Vvq2yDzYhms3VfQEHfFRmJpWs4cJLS22oVmhWMGPF6hmh8z4ue7tap4YLRowMRQqhN3HmqruEtRsfN",
  "key6": "VA9TKZufmzHVutRRWhCxBqqQPX5g4Qk5qCs3Hb8u3dZunwHGuJszjPyn61vTXgBd3Phh8CW4gatJM6RF9fDpCX9",
  "key7": "kQXZQYtwh6Fo8RSKVYAR3cALSVCTYtg1eXZzMYNfkSbPw6hBYbcCcqfgK2SNtdEcpn9G3PVsGRaR7H1oUgfvWki",
  "key8": "4LhcMekwVggJgE9KHHp8ya9Kv2GySXG5h8jaK2pMj5vQL4YpGEnfwjGt4J3V9mZhM8JdBEVv1JzwSjitp1wdB8kx",
  "key9": "2hoJRdq8XZCznVjKJWZDJJsisPT4Aty4JEEoDY1n6UxudyWVUr3w3N8gYzhiUtCrgYfhhFv1cwnV6LcjYNDXKynQ",
  "key10": "3udFjwW4oWfUK7KovVAUAgfZrLQCcvV9H1KvpVigPN47jEzV2tCxuqGJCwdXDy6CY83TyaQjUR2i9SLfJQ2aE88r",
  "key11": "3616KxTrbwvPfpxoR4rBztvD5XcfuYUmaR2EbkQLUYBcAYBJ9XpSLAag87twyHnYmK29j66rdVoTNWAUckDnxRYW",
  "key12": "P5LrfvLmSQCtJ8SF9BCy7t7jmEmyu4YQDXHnEZeKLoaGNLPXuJYNMs3EcwWzxGb8mya1vv2Lq2ufd5Qc1NeGv1Y",
  "key13": "5PEDxPtmrXwK6QPqoSjfdJrMBEciWoTmQ1GC8Lt4CFv8E6sbv3kAyBiQ9boVPZzSMCPZwfzmUFwUwPr9Xc3ypGDv",
  "key14": "2HkeCbpMeRKFVyiLCy4PLEyMYvjchq7gAUKu91U9nJWRu16NV3jiAa4MB8qPmXkbWv6bmP6dom6ii9Mum7gDkDfe",
  "key15": "2TUu6YAQaHJmDW7csFNhS7XbUzay9177pQs5tnnq29VKAPL9a12wxsfAMsA7EquBmURMPHVerfoLrKWgavUb1eRU",
  "key16": "5ji9f9PKaxdwZFHQm7jPvdzbx9QoivDRb1V2zZb8f9ebdzcvnLjStTxhKSb8TZJD6dFzt1jRdWahTJ2ikFNcziXx",
  "key17": "5bxLnj9qfLkMmLi6TEab4ANbX858aY2k6k3RJ5ocWM1tCBRn5ftZRXUfMof1NqTtDAc5wzpdhVFL2v7RTunWSap3",
  "key18": "36t56ktt6rCuLnokQV4Sky1YNtmmdB5BqS7zcQ1ayNjGwfeoUf4ukhV7UxzeQCMWamMwaC3BRkdATJU3RiVMVLFS",
  "key19": "3ShtQmwqaroqtQPC63ndQR1PNuQd3Z5xUdjzrJosBvBMVaFFoSFD9agCkSgbR8VkPrbQvBsyqL6E3Sx1iBwhA8F7",
  "key20": "2KTqeTc2NM5Qdq4TdCS7AeAXm9h5SQKkFJWCM8612XFuYUTUM1UQEGdXy7FBadLstz2F14TpGKjRwt1H6hSzZfP7",
  "key21": "3ymyFmFnZE98d17uD7X2gzyuyFdGmmvcScgR3244jCe3zB2oDeEFQZL6GmFapWphu6woC2zPtoemSznjCMWtfZcc",
  "key22": "2i4NtShopozruUBADqFeeyikM9a9UmzfuCYkta86z1hNWwr8jWYxSsMWoUSEFYhokRFSaE9tFwxqwPGmPjZ3u5Z1",
  "key23": "4ZiQa2XmZAUnV1UkLPsHC1LVNtwfW9kF23o9vrgiJG8pvY6nbzeRn7T7nCm8Jpikr4f5dBboSPSMHakirGYp1PCV",
  "key24": "4jHUvEcguRsthWJG6GkxCmuQce6xMcro76fUfpU6Mru1gZjiKP9rXGz4YV19FQYXGVQXEFk7yZtf936E68Y4Tkt3",
  "key25": "38mHYnDeSWaerQXnSHCnFs8zBmwWjkQkZZupMuAHqhVxJWwscNpJsLBEQkQ7KDZoqEQcwzLid3qKeEmViWQW2m9J",
  "key26": "yhkJeka7A1h1P8ZCr4Nr4a8xDrvzd6c1P1DWV5K8fmHwHUMis8vVn9M4TJezB39L4BwqGjBpiwN7tusLkfhLr5n",
  "key27": "9j4qFHLyzSyD8igXBPA2u5rV4taCqwyKB1YKEPTKRh5JdyKbWFbvoJk26uEH2Cff52ad4MviCdxqKJVxSspTotf",
  "key28": "Wz7mtxb4HxASMHrf3uUbT9KMaYmeP4gv3XSmDpNqbYZN7NNQgpjUPS8yozKhvNKomSeF4GFzcQ6QvPrX3dYRNPW",
  "key29": "YBVVqJeUAJZFiVgDvakaNRjxpuPRATqBRMJFh1xW3VtRkeacN4c7rNrbACfqkPDwcT8TPqBESsmWkPKT1txsbN6",
  "key30": "3KrHNHS6Eu27Zu6zs94D3vbLrVjfBwnmdMak6a47VrrFtuNKtaRtEzoPv5MNnKufLh7B5zFioLtYFRbqRYNGTFYu",
  "key31": "QxS2W6Fok8UdzqpJXHqnBx62a7SvgnbVa21XjnTRdfmJcpgqtYkaKXVXVViLkocuTfJ2PyYEE2u51QRoHmYBWwV",
  "key32": "5KjcsFDeCrDSkfmu7FuBsVfcP97yy49njJG3TWeQhRQYSL911xCJRz48p6XNjztBtzN2FXrzA5QsQaM9wg3F7qin",
  "key33": "2wuZ9hiS2nhJZw1hZuDx1zPrFap5JZ4Dj3QZDFYsRKLkDiEYxdszKQy3skV5vJ3jkWSGg4QttDUw43XwkDVbknpt",
  "key34": "ndnohmMDUHrNqDV1R5ua6Yb7Dt2aRgdy9RUoENEgsn4zDZQJCqxkB5XbS9w5WD53R43K3NSErQnztiY6wUpb1Ng",
  "key35": "YYGL16cN7KXQpnBPzJ1g9fCH3QY5uRx8JYeLHPF2gkWZMjSa1HHBawxt6jhLa6158bj5TK2vMBEcMPg6eFiAfuD",
  "key36": "2XTmWwqtyCjasbJ5qEUYpf8S2X836E93dN6sdLTG1Yi2jgR35xx9EVAp7wzWeuDsU6y6Z1yZ3Eg5ZxEtaKVxYmSX",
  "key37": "4HwmVxKQEgZaq3JXQEt8QyQxM36yKznvC6MK4yj9nEKMK1qjoKi7nZ4ZDYY7KDdKrPnJDAAMhLtM8ZjMe57GrkHK",
  "key38": "2SmjLsJCGmZS8Tnfxm7itiY82Fjdg8YNbNAnGFYxeicNhxcUwcK32HZEQSDczuN2gzSBvzohpqFi8wzep8SdRUHj",
  "key39": "oqmtegUoULuA9efFvxW8v65Fv8gaFz7fVxbNQyf1UcTVTGD4hKXn5q4L2pALeqNof9v6KfyXPy4gJ1ECXyBMSu3",
  "key40": "4XHw3EsgLF2ZUBkE6cGpvj2WABD55cR1TvseaqhKRagK5PRxFwJRqyyEWqLhY5pKcedMVJGRhKH4JLXKQRybcK5b",
  "key41": "2QcdXi498W2hqZambgewwPUEo2ctv2eeYxvcxfq2nkGQDUXsRKqFQ9uYRFoiJEiSAr9cSscVwpZxNhQ1NAVn7rSg",
  "key42": "2wY1GAvmazyQQp59sDyrvQvrgZWiRDpehPzTVyNdS9aeckzf2VGXSKTFpEqcYN17ZExGRn4JTohJXC7TbGD1zDzF",
  "key43": "2YiJq3SxYvmTnsE6EsnKniPLu9UUPAoyhm5pCXV7xCtTrLRyQBtiYHfaWuHepWyud2YFzA2zqgupm7qchuy8eBfH",
  "key44": "3Lnnid8QFkiGijKPLLxK3o4bduGTFgt5MPV4NnJH1sEh646Mr2mA9ftPi8Lkx4MkvNpHXHC4h4Lzi41truX8xzMB",
  "key45": "2PPfgfR4rf36Ac8YW3pzfEKc6K4uFDhq2epZiKbj7sfeQhcEqvR3GWLeErgHwjxqMZizWtFGsHKbAHZWwyV12wKu",
  "key46": "4YXTLpyKUbseknHQLL5w37S2VbAnJTh4AbhYjeSbD8T5FDQkbnqG1gBgeEzDrsHgAxhd2dfT2T1oVQes2CRjHnQ1",
  "key47": "3MezGkGTSfGrSdyQRGTMkDyngKwTuSuAkchZNhSM5KV3paAi9mD53xTnaioFAWcv8svFcMZx8NwV6ffMJX1tpqKf",
  "key48": "4jb2MYvuzQomjm6evaYbEdqxjSiGmyv8b3epCFs2CaaxCPWYtRsiVppNu3ZvRWP4xcwzma92wcmnVPThh14KzZPL",
  "key49": "26grZewWPhsxRbV3PJcKCN2J9rhe6tZZ9iQieDAkBbPNHbnf8uYEKCW5mfPNyzua6roSjS5FKayM7vNVRQgG2pKb"
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
