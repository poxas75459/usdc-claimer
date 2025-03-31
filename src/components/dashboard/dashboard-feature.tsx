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
    "4AkBS4RFRkQ2Mtafbxvb7tDwsyZgPvpXeQVNN1Li7UA9Yga3ef1oqE6hWAgzrqg5BHm6Q1Q5zFDQ6PLKTeUhkNxS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZrzvTdX5sXC1uAQkocoJxqMMWQ69QvmWn4p12w1Hink4e8HPRKH2jwDPcw9rERgqWdYj3a4WGzpfcoJcgZjE2Ym",
  "key1": "3njccv4ij6RJjRHqbubFvtv6KZTeuiKkpFjMjMHwnUvJryqXGArLg8FATiqRrFKomFZ9Lph4CwKmRTkPwXK2W7A3",
  "key2": "JuN1j5v3dNd68wMc7a6FkV3VU5Tcd1rLjNusSUWzgCohVJZwC9YGLXjjmoxC6CXDWXcx2EE38zrdRCKgYbUVxXJ",
  "key3": "3vSeh8UFWtMDBoR7Hdu38SyE2odR1Vd9dytZqfkQGkwKBq6yXPP2UHeisvYQNyNgRZwdPA6nPNwuuSTrkBjWoic7",
  "key4": "BqFjDSR82qaDak4xzQ3dUqFqBH2gdc6iMHELP2oocmAggKYCYLaKh7p384PzjwcKxxBJKuxpMsxec1Ji1oN2gUw",
  "key5": "45j2naEtiMSmuNbDYRey2KkqeAQEGXc5Y9dPiVspAqbMBbhii3cB46yC6BzEP719Z2gmq6cvKh1F5NFPgJSgxRp2",
  "key6": "piAFTXetdGBqvaia7njKXS6Kzx9uKWiJrhXkTWqGKCzp79wE8zBTcaLrPwQ4vn8oG6kzRYV9npeod4Vfji656b6",
  "key7": "2s3gcWJyeRUCg8tP8VQLUeAg7AkoaGQ9GBVJS95J5D36ecFRdcby4Ra6xixY6ZWAe9d2t8fn13X7CJiFTmDSkEaM",
  "key8": "63CQWK3uxLXZPhQaAqGeuh5J5A58Fs5WnYrxEQmA4eqDzLkpW8g6gKb7CddC4Ke341YnZnKoNMredsCrXwNgev6B",
  "key9": "2vvgUQwtL1LwdhN3vnsrSPHiEcCzN3iQSXJyU5Q1uTpS4WR6Mum4knReTjv1eDBan9we3mX7uJUF5XjeL5Qhjueo",
  "key10": "KCSxgEsUJe9GH5hvytjUWX7jUEhHxnY3WLTVaM4ftW1U9xXR6cYey575Y4tMNhu3WtwatEDUkEyRgQoT5HKfXPi",
  "key11": "4MtMz7T8ebQsztZdjR4huhaNXqY76BxYmNBehtH6DJSu7wF2XthQusDF2Vj9LgMNMnacCwCWr1smoGzZsw4YL83t",
  "key12": "56acAQSdxCQrdQWR548VY1xWfPfdJffwpG3PZ2kSu7v1HPA8zDwEUzxkC33TKHAftcyFnUzJ45DvdSHe53FVkqwi",
  "key13": "2pqu6UeunGe575oNb4R5foKYcEDraSn1NXVJnoY3mFGxPHTimccmS7cRVfv6RejWgRR82nKFL56R2RH7BFRU6irq",
  "key14": "zAJKyCQfHS1B9bAGvjyMPuRXGcAM9X5vUm9CGuHuSRDhokzSn9SoFMeKcZ2W6F3iP4WEdBJUYpWhbpLSeV1MSta",
  "key15": "33SRVNJsU1MbdZm7jYfmf7i24D89Wn2TcuMM7eJ8z5cermCxEQxmLy9j7oTfpLpw1vSRn7G3rfdcZTjusQENjd4V",
  "key16": "v2QXd9gZWJoRCUbexVuvarHRaRXk7BGhQiPeKUTTaq82X7qYXsS4M8mh9Xz7umVwDAsap27yh9Tnt6syEQ7kX9d",
  "key17": "3h7h3beuBDzKhoUzT5JQbHToa6vDWrvc5dXEpRL8jjuteiQzmudRPn1bHuixzYPmrtsmCZJK6qzk1iaPsmkCojhW",
  "key18": "By9Po83GCNCC363pLchaMkBgQUCtXbrdsAi1RQmRkFt7eL4fS6CR4KvNk7Afxcd4FWFAdz3rYqFLKLeVMvMRCN8",
  "key19": "2cVgRFbhWANL78EeeS2xjTXwpX8HSNnHoBKcDBsUe4KR7pWkvtZ6rToPuwVs7BxaUgobWj8K7iLirnUa8wPPkbfk",
  "key20": "5BaxXoiRb8xiQPdsVF3h6D4eipufeyujpoyRDn4CgYR4cMEWHrcRovfqTSqiGj1GMPTjyoX1rEi2gz7JNxDFgpkx",
  "key21": "68AaC28ezzXhV7E8Zp32vZu5ksjdnJDciMUvbjo1z2upojwsPNpgHsM2WzNB83pG1t8TgJiBfGnyWeKbVbrzSoH",
  "key22": "5juoKeYqExz3XcYg15zBTo7VTuR6VCmDS7HSivv7fJ8Jt6CSzMqhU6ccbPac7u4M425RXwTn55F7usFBp6M8Kw7b",
  "key23": "5DHvvsj9UmvPZXWdqtXbsdyJwcfVmm3oJxVoGs4hXgJGgnsmaxnvHtqwjBraHPJMDFXK6CC6bxeydFRWe3kXTBPE",
  "key24": "3bm3t6cbSNP4hyEc8i1m1YicmCRC6CDj4WEvMx86VypMkBzz6B6fkLYrZ951N4NYWXsW8PjvUEcFS5kpjsJtJwJx",
  "key25": "21aFqEi4KY49xRopJXuWfBe8Pfman1dyFYkHghQzAV3mJ12ypSnB6A34d9wGY9VnCAhFsnvnzaMPEA75ChHnhvYJ",
  "key26": "5ocexpXAaVMq4HFBVnqUuiLqo2vHShQDtgjcUus8MT2Pg25W9LN3cBnX8SFoBuUvT1aHkjk15uAkQYK6SP9x2pw",
  "key27": "2x9LtKfW1nL1MBqQeg6rQamujoHDP8pD29h3tWPJR5tVTH5NrbjVp6KQ6iiZhc2RSVhxcjqQSKwiTV9AQqvettDW",
  "key28": "25E2QrRHaWpHf72DyYN2RumyqvHvSHrdiy1f9rxCtWNj9pR1NNyBUkrBSi2EyHhK9NwdE7KwRM7tiRTbZYvVxKoa",
  "key29": "4noe3nqFF8xtNHhxPfjoHpZLLwVQby3LN6QVtFgaZaXJB19zXxqqirtSpwBwvYoDVxCZSLPMQ3oMi2Wsrdz3GWbW",
  "key30": "5WQMr8uMp2QDzawciT6vrs61ctzrzqKkhTkxjzvWZL2TUWJ2oo5G5NrJikgWijqBrJGgo3koyYJuegsUR3spQZJd",
  "key31": "36id6gL9iYZZx89NggakedmNfgk5PV96SQbMMFgXcTCVtba6iJuxYctAexLKkTnDEJe38WDvxTwA9e2T7LZwe248",
  "key32": "2UruAYomDH4epp84eHjbCiM2mPh6h9PLmeGhiVYURcAVMaN48cuh3cEiju8NL3AMf4Q8tQBS8yNdXmFg4JCHHgHj",
  "key33": "9a8qfiKJQHPPmcZ9NN2pT7dKfNrQeGE4VCGdJZuUnZrsEtotSc9vF7cjF3rowkaTij64kVHCdCa5jv246zdgyMf",
  "key34": "4CRmhpKWKWBLJLL5W22sr4HybExhGjCHEqDXmZTst2qgrHbhS33KSeXu2ZRZcgMWs7xeEm28mrQN3awo9Dtbeit",
  "key35": "5RzGCofiuJp6LdKMk5bU6retwkCi2p5otKdjhgyHPXrWTzko3SmP2eG3QRpbtGkHrccNUR98DE25PdafhwQYWrWs",
  "key36": "4fvXPgFfFhg635rifXehGh7keDtXgfXJDJpaSkLbzKw9aYN3WmUQgzjp4FMjiSPEt6i5Qg6yFaTm6GxkBA59KruW",
  "key37": "4zNTvBVTH3qPMA4rm28wmoZKap1wrCsLuBmdmYn5hRzXvdd9uYHecfapTE7AFeUVoMfRdg2BhMaJg7PuYMSFN71k",
  "key38": "4BGoppsLPxHtkG6DTCGccu9v1fuogwoxvaYGa3EPYqcG8BpWsiyUw6vv6XrrRAQUkQUsP3JUfzH9VdHk7cp7tKti",
  "key39": "678sofyYFLKGBMqkn43N1ZPhUCEJcfNX5kX9eckjXaAmgxhrsBcptSEBmvguo2HwwPLKS6EfFjrhLJBcSWbyTNYf",
  "key40": "5ZB7hD24sck35LLQssFzxVRzkC4KkoNBBr49UM1rZQwaRFMkYTWR2jvPuRorxR4SM1oH8y3KwunGPCcYrzZhz7j",
  "key41": "u5Pg7JKg3jB77soxTZJH6RXhNTnq3ChBevn7JUTuQiUkhSAmY6gCKDvMF3vbZkZkuiFvQ1FapisbbvSG5UtW8cQ",
  "key42": "4smsvXhJfDKxDLyRe4BHQsre4xt1nKHBZsaABXx3T72AiESUAaJoHyuYUiDq9bofq92fK551EkMAbkmaApsjLaVp",
  "key43": "2qEwBy8aXdKDpzcVT7hXsKXfoqMkQeaaAKYtsc56RYREnTQpdfHUNFQMVv5eAHiJXkc7bXvV2kA6FczxtSUTG4mG"
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
