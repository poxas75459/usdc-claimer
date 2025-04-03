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
    "5g1cn4xhBYfoF7jKktrf25kpFFd6XnYGWi9ygQP76E2uNAg6twahEqHyfXshekvb9gMozd4SQogETJCVr6qMUgbo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SXEHueEgtRXkBkt7QSfmMiAUQhb4wkzsXEadC9ztEKHuMq4cN2rGqhPMngvGcESPuBLPp4kmjNKysW97HjrEnam",
  "key1": "22qZk5H4Qiv7BrC86UbfX5DmKU27HkP6b1qbUxmZxTq2Fa4cXSonC4KcWuhZWY3VuX8KwUgWrsx9CJreUho79wZN",
  "key2": "2KUFFqqmghHaJD23RF8wDwaXKfhT57abLCxnhYKDTcTZDfr9yBvECLDD3Pk2UT72ZU2akjA6ow5RaSFqWxmpe7yH",
  "key3": "2EW1ZJhNf2dq6qPBYq3JxqSwH8JtHHAfLFf3VZs7BK3Cf14Hz7xwU7GAYPe7wQh6AkUQi1wLRe2AhbenPkuXQHXu",
  "key4": "4bGLLMPosMxgivTb5HDDS3Pa43wLvUi5AdKJMyJGKna6FL53kiA5ZV1Wpn5jTcxPW3Ydy6unHuXDjtVE4FvZoHQ2",
  "key5": "5qXdKbEzgzw6A6YFSNy2s9jjUDPnwbVkXV36yR3exacarucYBU6MCqYkp5aNqvrRZ6wFNwgJAXe7a8C5UKzR2dwR",
  "key6": "5EWVHH1M7t4xvhDcsxzko9cJP2M51Rt7bEVZoqmYxfkMvHrsc3q2NPfs2CSgNG5WAeKovMMAik3MLfrGDhnCSTaz",
  "key7": "5ghNDALeDgasXPRQ7s1hDD2FgyqdBoqKHbWLWjX3d252g95PhKVsUuqyEvbyXu9j116N4Rr99BzJEcasw41p4Shz",
  "key8": "3KtTy4sak93J2FmNf6zaLxdphgs1FdHa6cXzJ578UbFYRrBg9yAsKn3WgDurNjKbjnJhKuLegE3xEjfHzDekCxX6",
  "key9": "Jwd1RY7MZfi6VLv6S2U22c6dNs2L3xrG5atLT2PKeAuw3sBTcDXThzpSTNNGfUesaDyjCQMZY8jzMsgeac7BgbE",
  "key10": "382N9NnegS6utkiSXqfNZPGadewuRQJS37apSA2HaXVUWpw4icU8hbWGHUSRAs93hLtqr7pXAdSdoZyAp1c1rBMt",
  "key11": "384Jo533Zv9BYvpqdsnceMQL4AERoEvCHUZDrDZ75kFRs2uQ7mouyJFU5n6kfMj3g3Jdcd9AJPFVSLQ8wEmhWGvn",
  "key12": "5s6FjuAKVM9avdZ1UeU4bLha1B5N51UEpsmi9YU1AtgAb4auAPBTDAwqw7M1bkBJXmRFx6hSYDkA87uDnHteJPsF",
  "key13": "2SGrsf5BbxviFSqt6SAu73DUkKiswiq3Stdq5kitbtbJqENdbjgNoh3ZUf4mELpHfyBokuNsCdux36q1ucTBEkCK",
  "key14": "4Wyjr1fLo1MZGp5WopHqCg3nc25Z5jkAtMKriy8H2pLcmevA2XgnaEus5sUMrH4xyfuuprD1vRdcfM4QHH6hZRGh",
  "key15": "xogkLbjusWZB5fVGEuwwKcbMnLXWvKX6Rhg592amGh213eyMHwBE3KcxV9YfFh9VKJRRYayMQA4pqYsBiL2b3Jn",
  "key16": "2UDNWc14SA8aA5E4m3PDMRihtvfafkctoG8747FyJhjtvqLgkXBJuTbuZdmrbgvNkcXRGEFWYyBRjGF5G9PVmYRf",
  "key17": "hSkcHQweuw7eJe7mrSF6yqyMqQJTSxrAzeXqzQvEfKhW33cZhAcokeEXeveZnEpQ3vwzyyxef2wN6A9rnsZttnV",
  "key18": "2bDZDCjvJ7uEMo8PjbvXiJn1vVwDKs5TTskkt1LYgJbDPu9SBhoUuhmtriyB34gpLz5fCWhzQBp5pTMiqozaoQpZ",
  "key19": "5MkdxYjwdWChwR8jqMonsku7avkhmYsnbXXwMTzL5i1AqE1ZwQ6rPyLCAh42Kp8Je1Ub4obY4hmZvDezhgZsc5vB",
  "key20": "34TR3c3dekWL954Zhy5wgB2UGaSrZPtK4PZZLJdfjwamu9XVJvougevonq9uppByCiXgbaaUtjNBxZhgevFt6ean",
  "key21": "671LFarhncwXJaM3bX1jsg8Fv5AEt9rCLNeJBWzXVrK9GDdENebsv72R5tA6JrdH8rcd4rCzYB247XceEgfbkby6",
  "key22": "vB7G95LFfSvDs59XWJFKAjgYkocoGHjACkHK4mo1mf4GnMjMgzQVwdtQWh1bg9KpnBqwFAubyGpwLLFE7vfBrAL",
  "key23": "34Vnhw2o4iuy6M9XstnDmn16CVU2VVzatS7VZdB1pmfKh9d6uub2Avpd58mdYqHgiun18N1YGSzdmBrRWzZmQD7B",
  "key24": "2Vhe89f5gikVfDxgeoD8BKzrqkvr1SNVMYyCBbvTtPTmtzt7eCD6bxwE1RqgmmnRaRvAcR3KX5t5j8LDheEhUtgP",
  "key25": "4gcno21csXZLKJctp583y7KwJMEo1Ux9yXZvmBGQsweZsLfZ1Leiyx7qGJc2v69i2psqsR2kFv5sdubQGbKmmKyf",
  "key26": "GZeYzfASKgv1TyyuzPTDnrvtzePtH2xarKQhY1MtBcrqRfRgaAb51wLcV1Rr6K5jbWHj5rjBnP8BHcF8NyKeFJx",
  "key27": "2rvCxghgrLvJ6jEL9E96myz5ftB37w2cGwGYbBgGmNHnB5fCNwM3svb35VLXLmi45WcebWW4nFX2etha3mfg1JJH",
  "key28": "TX1Yg913StkSd9X1v4FAGZc3V44WwG4R1jy6Y4BxP5DXdYMQkYfU9gnQDKe6vfCZ9waBTGQ6pPAH1Ln5o17ve8k",
  "key29": "5nxhkUkGUmWuFYy1x6DC2t3XftyaL4wdCt4ZKkJeToGo2beL2m9GUawQt1Y68HEFjrNjG53E4h66nJB5nTpuDWDq",
  "key30": "2xmazXUY29Uz5kdpFNbfXwSy89zcUdYPqb59S4EzxSYovhHaprs9Ui4RvnvZoiEPWAu4vfReVPqinKGZuptiUDoK",
  "key31": "31P2Y2LLAHWtkzKjnXNgUv4Gz52xy78qKQQCxxrE8j7EyVMzfTyUzNUHji6bEfWqCTTNLY2mQ3dBBBpjgsbmeW8W",
  "key32": "3KrSxUnjdbWTSyqWiTrzrpNXRizJiWxAzqLoLuPynvJgw55aHSJ3RVTQocc8fZ69H46SjAQEnz2x4dd8PubDthgz",
  "key33": "5vV9UEFuRpYLGq5ungT9geCd2V7wNctwmuMBUyX494976KLnBWRdJSQJvbLy6Kg9b2uQZfQPnPJZSGDFwJQCB4Ko",
  "key34": "eNUGYADiRPrLPKUgLhSwytQmvo6XGjSJPdRZdwfX5TVFFVFaBuFgTk5yRE8RR24GUkZJTkwd9RKB6HUdS63oVTw",
  "key35": "3BUsZjXW2wWtMC9B9dAMsGmXAMmsFrug4Tw7GYwy5QEb1pmC9qWZupE7D8pJ16mqSt4KhFfpaNpjy1moZ9m8B12b",
  "key36": "PP8dUBrmB819xwJmEvw7HZD4iUHJdFpRsBKCyhEEtyyCKZPkqJ3A9r4Aaevs1m8mfB9uKc2bJWPW54W7xuiWeAg",
  "key37": "kXDLHiticjv8zVuisKQHRvtvTaJEKVfiZZvPHKpqUF5uF8SYyaczWgBx4YNCNjPQ7xFfCL7qwU77CqaM7Q4ipGL",
  "key38": "4s7xAyeqro9FayjZoJJzqEBei7Gjz7AVH6g3BEUu9pu5Huqcy1KJNhS4XHco3p2GjKyf4idiamku2HxeuFMHZWhC",
  "key39": "25fR6LVDmWPnXK6rQisNJM4Z4Ln5TiiDVrmfFEBkvMDQkWdBQfyZWjddTi5nG4xx9gk8pZEeAp4BGCPLeVUNVVzX",
  "key40": "55yr5soxQvr93r2iGyhxDUdHk2B86kCGRR3zmd1K4nzzeS2vE2eZY4ysUCAnMPr7GJ9KfejizJcZ5DUnCeFhjMpM",
  "key41": "21y8LgsGDQ7PBth82mrBco2m9SduAeExE74ZmM7mhveJdECEYahjTzgR5AVYam4tfeU4H8Xoao4Sq3NugYzq2qXD",
  "key42": "5UYQfSPunpiTGPuL8NZYZGfdwcNdBvHroJEmuGfUXMvhBwMgMgR53jFTobt1m1FzKr28wmaZSqVXZodE5wrk4nsh",
  "key43": "35ibx4Wuxnd6BCJaMSudi4GvxYFMGq9oDTYkEGg7LbnNVwoEEezQN3vuHWAAGev9ovxkQud2HiDQRwtUrPuWTFhu",
  "key44": "3AbcaP5AoVyP7nMDLevzyy3kd6UF5bMAgnS5DKGoQeQR7hspPo3t6YkNqNJ4BYc2dDfrrnm7wEd999dXqm7D1Qfc",
  "key45": "2AzVkAke4AnAQWyRR9ce6uZnKZhDy9KddRmJSkxdkFUCZKG3bURGN3jauqDt39cN1aKd2sMkd7tcpA3Ktx9E388d",
  "key46": "3zAKfogE5pjMnBq4FYJXYDb7ncJnhugGy3TYwoWLhaPc9qpCzsCuwqtZ9Y9ApSAsPTGs74o4zBqaZkqnAoj3BotY",
  "key47": "49oRXfEkX8UzSPdec2rz2TbULVtnd7rSDE7m9Aft9D6MMHxiZ5X9fQLGyFSxPCchYFvmgh8v99zCXRWumHj2HFFi",
  "key48": "5jHfVdpG12yHkMAKPznNUS1ffysDizQYHMkemqVdYVQZQ77Vv7NyJSFVihbC4CTjxfsovWWsmrnVRByUCEpkfKTT"
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
