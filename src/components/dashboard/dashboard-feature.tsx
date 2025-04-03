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
    "3hj2dmWDda2s7tgYWXJFbBPZJieksZ5iFgGL7qCwCjZ6MdcvYQtspT1UFEW4M498QxkxLXL1M6yrZXd6VVtmxk6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tAWcNFFgYGhhPTKzj9wk4zDx3b2Dx8FLr7uYfKyg48PZvhwbw6f5byUZabzz3efzdubA41jus36oq2Msvsc4ez8",
  "key1": "5TUaDnd8xUvRK8EePoJkguCok9ycjEZUU3shyAxyjAfX51eQr13QfvBJJwxgZoo5y9wk857hRtCiwLJtCUnWrLcf",
  "key2": "2haaqHemwqCPWCigVBN2XtJei9ebxDRZJED6kTNJBCM52GtAkg2wzGai7Ty2Wty7Vatog97t6ixNq5DzRcSx51Fy",
  "key3": "2BBWcKsmjPxTGYHW92cPkeXo7fYhTBvvt9SDu11Xv7VpduxmCVTozwtYjTbTVxnJLWf5b6DBcEnahWQWrXneQE5C",
  "key4": "6zPgm9sHsb3d5bKwv9B8mH4G3LM3chbarK3n6rpbjzehbbMck4LLGrsndiEr3CPDnt7L846sCuNu9zVpAb8LHuq",
  "key5": "2y5cmEQzbpGbPpV1c35oxzCATtzTeVCtvbcaPX5EaJ6jkQpLAS8Wf91oBvEWo7iTCLAUHkXs9e99sSg21SDEZBdV",
  "key6": "42YJgHTPhnEzW9EjHyVvJD6pKEtyymy62NjpoUq2iZCxLKG6nMfw1rEAQcZUcCNf1MUPgDF6JCJ7ojC9GJapZDi4",
  "key7": "3iYRkf2ddveUyrAyi99aoCxc5zJezZ4NcHRTuYxBUkhWhU6DnjRCAwfFb8dd1WdCQQpQApazbpAwXKwa9L7JiSSy",
  "key8": "2ST3TCgTeojkNyUz8T1S4tNBvTT1bwzyxp3pHSaZLTDg9iHvTDfs7NQJRBunZdt6tAyrMN9kd4wYzpMLTZZnYPky",
  "key9": "4cP3yjvWR8nCaTLHWJnHaZ3ZsBmKjBFZnds3cAjsMKMZQ3WVgi44J5PBy8tVj2ogY8pU8Yjz4RHTrU5UnynuEgfd",
  "key10": "62HuVZk6HoJ7wCuH5T1g1NQVWd6Tmu2PyAD12KgTao9vkSv3cLnjbkUuGfEsyvL91ySi2ovnJdhkbEowPDbBGHFb",
  "key11": "4g8WvJ4QoW6JP4PSwakTu6Nn25EJyz6FnkFavzHVJkJ2qrwQoWG8sYvoMM7PyJSo7MQ9c1fL3m6UF5UR51BBpyz1",
  "key12": "3H3ETH8obsLyLARFkyxkDQtVjwNt8YisbuWgBjv7PcWo3VM43KGBKvi5ibFXrnTbTdneVfaohjEWzWu3TwEwaVEv",
  "key13": "PtNYfuAxu5WEe92sK3dHZv7PRrF57JJ86UGQMCBqvAXEw6typh6rEZamG1jfNVbmQ1CUXb3JesoBpsPRHvxyML6",
  "key14": "5VKjza22m8QuS6SfwAfgSAvrUsg4LePJA2k3EmaaKHQqhVpXXAXVqouE9Tm6Cd57mafn1VVMTc5HUf3Z7mNiNsQ3",
  "key15": "5FieyBe16joPqppoeUFyF77jwYdwoLvb6iTm9NxtgjPo2nNFzxqp5KVYeftQyuvMwQsfzDux9rHXSbpBE187KV8B",
  "key16": "2soJVpjb7WciZkZWxT8ExgXz9UQdntWTtEeCJo7HqnXJ2vquuSGkmfEEUHrhFUCWscE66Da7XZvHdhkrwZf5vCpC",
  "key17": "4YfMXTsScnsLXtxc4GvTFeV9MwVLzHp1wnAJAPxKR8qUNbhjMdDPgi17GA7ubzKTegmt8cVvyRaTMB9rdBheQExz",
  "key18": "4VKzdw5G4CAoyHyLaidD2jivqX4mW9HjZMSN71BBWfQdGvLVwEKKtFyZJJDt9UG3WSpZcVdHqfvMbueW9KxS594k",
  "key19": "5N7xyXbBrfo7WuHa6AdLBWjVYSmJVJNqPnqRhVKREAW8rxFVwAGNpSAnhT4gGPL4Cqdk95LxZpFMPxW5PVsMWeTH",
  "key20": "4D8n8bp9MncwTKfUw4sreHhMnY4gyngzdNj1QdTcB4AANvufKFCWZCnqye78nKSXFdUgGYTL4kERJ2eEU31VZyuj",
  "key21": "2cvyJ91x8evCKrzyUABV7LwVGkK1QDoYTQEusXQrvgSSpmMkp9zeCFZc29aPvfebLN88sHsyhMfbBKvsiXJ1ePGG",
  "key22": "3xyLf7xNSB7PC199vhvUmCkhJaYX4KeDKuTQz9f7T8zvhHFj833kD4cBZwkD6c6fnFtv2qwH4A5B1QeyVakAE9if",
  "key23": "5HuFLveAHAsTXzZYn7H9Hj8xmc7Pu3f9LzrZ6oT3bxJNb5y63DYQsZUNTcAqKTfemikkDCKVx18U6dheZauyRyEX",
  "key24": "5wfP4bMBPP7J95dhuhRhTPtmsAgHuQZk9wx461vS2nZYSBFUjtnzWMwuTdZzQAJLwc2BRcbH5sepWXcNRbw7tUEC",
  "key25": "52jbiLBq3EgPDVaZcZZQq2CmN1Yq6Sw8vmBDQaYvw8fZX9WsEckApSG6wVxHE5juGATNXsnsGEf9W6WHQf2ULHSD",
  "key26": "2zEvPxHVyVTmMY8irCPuHLYrjET9EebjoWT86w9sUNuQB2ruF7WTCzEJhgAo3R5NpNxzN12i617EcSk47C2RY3yR",
  "key27": "5Wsq3tkXHDJpJv8kwusMkmVrKFHiEGRiMLnLBcbHocVsgLeHc4cjMqfcNg86tBZ3yCktwyQT3gLksYFfRyjnyeDA",
  "key28": "5jsLQrfVEBjtdHXR1RqQBYZh7auhJBtKa2KETZfuJiMXJBpVM1bvNoQZfhQ4BULnF9kWYX5yk8kyovyoKKZSe28h",
  "key29": "6FoCho2a4Naf2pDpdkVgGTtQcF6dD7Bfenc1yH2VPkcousrQQnmhPgX81srh6oTSCvUwuLJrtFZwLH67FCCoCzM",
  "key30": "43y9gUfssZG5A37y7MvuZtB8St7eRMnHCZNoz4yARbDDtvEqrrGQUHsVLeJhtdvYndSrcUeJoEh5cuPhivNjoroV",
  "key31": "37GVcLrPKQMARasUev7tdhrpSfuK7CoRGMDx2muwSqDJvAnGYTdqmTxPCFzWUNX8eoQ3oSPNRkfb2YubKWGkQiEV",
  "key32": "22QfeFe79WGQu4kWKyZ5yJfmDVwBXW5dz2NnNKuvwCvRCKzMH29g5QYVLAbtY7ziiLn9aFEhpzJSLakGGuC5fLUi",
  "key33": "4JFrn6rXZ5BUr2meKfuBhBRq2xEPujXgwhjCbQQpZby8s6vqQWfniW6BwReB3Bi14WsQjGZiMf9SgRdNAZHviP5w",
  "key34": "3FXGtrB6hto16aLtfWDt8jm7hj5UHLLEQCTbRDeVPUN1MReinWomY25wQSrqfYYeA2iFfUQwmSrhAoHRRromWg5x",
  "key35": "2wABtLhjH2Ney6BWLErHtshatoRcZCZprUhzvHVs2NfFrq8ZmbESZKc9UtjKX5xHFSgNb7QzPScqxJaJac8dJENn",
  "key36": "3Cq5sd1wYGEtac3tEc4DmtwxCyVf6UfLVdKapcDLGdJqzDJH4ikcM7YcPDL37baV9GWDyvwudBmpG4ewSNEEKR1Q",
  "key37": "3pjrs6VmNmXQZddPG1YVDPmdu4Z5Qw2BrnuHcg1EWDwQqkttX4WA4zmEhCWrzWp8WBDak74oQ2p8MK8xZCEwMuCT",
  "key38": "2Sr6dDVBiBkDU9zEDPkEYfyKS7gMaK3AduhcoZt1z9hzTPVg8UuVPgnaD8jkoXWD3j3DNActQHun1U1uTRKrsTe4"
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
