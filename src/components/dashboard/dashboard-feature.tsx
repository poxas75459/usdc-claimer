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
    "39zRrPPXAF7XbqN1tV2UUZSiC3udp3L5ABb5DW4HVHw6r1xWqqb8kpnmH9tK7a8dSTguWcCvLqtBVabfQJPFrCdt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CxgNXf6j2trqwUzQaLrD9bDM3VkZdG4VPzXvv5aDiQ36Wx5MRj6KhBdstYAWz9a997KAL1R3FYRpGMk7VpVZksx",
  "key1": "5iKf73hEdntN1YAmJ71rCkm3XMcVtTKezyvFogsMcgZHVNCTh7KutYpB7cxxK9YiSnXSLBVpkFL29XnT6Y1K5J2w",
  "key2": "4dDM3tc1E5Jp7oSC95WTESw474B4VYMcoDmVDuJuAUoDpsUBSP5HjraT4LdpPAZpLvYdF3LZ7PSCQSH9S7DMizyx",
  "key3": "4NiLVmfEKtBEjNR7BvCoWC7fmyhiRzQtrg8Ys95WNRABkWVpopsTGWw2LJyWNsNKnnqbtwUDsUZnPabDjcZjHwvf",
  "key4": "5ShmDS4GNLukwkCtCfqfQ7zeeHywNhCMS3iCoUj4VJeiEBDfckvMBwUJqRffUuHXHajePR11trJnvqjeRhgrfkmL",
  "key5": "4H13a4otikE589s1vnvsSxMJWpWWLdcNp9FqJaewCAFbnz3bKapahAiJRaxVnFiTkRAQV9v5gPuuq185gJDNEgyA",
  "key6": "3S7Ar5tz5Boa4ttxJUDVPTN4DfSavtRwm2ykvU5sPwSZKs2rXnUeUM5gyZN86ZfbnxhijHfWjRFJ8KXjqtGFvsQF",
  "key7": "42NdMPZEpq3XnHzexWzGTr2RyZQFAqXzu3dJr8LPWKYDe8T1JAwSxHwcrorSAjRTVziSfSoGADfDhZK6qKTDucrr",
  "key8": "3DAPeJvBiLvtQhb4zE7RASc18VejXZUCEs1gruPdBGKkfqJjzJJV9CWHRkG4nNsg6aaY1J9fvFycCStWga57ENxF",
  "key9": "3L8WjyPEAqX8XC61vMcKxNxrTHP5zSWF2mCW89AwNVYmfxr67FBsmp8GxudTLAZS2SsfdydBcx61qst4zJ43DqVm",
  "key10": "qHNkaBaKVD4aLqUZAnAiwcL1FugU16Mn5uVuAdkDLuy8AF26uq6GbyLA9ngEBUfw7jsAvx4a1onJk1JbGmmDdvv",
  "key11": "2J6juXv8X1wC3GJS76YqMiQaB9T84vj1w2ABBYnYC3LKu9YWrUwpYb35ebC11jhQMxaeKovpUNjsqo6NRjkFrh3n",
  "key12": "j7dsp8jkbB9FoX3uBZjFFcsR3NkAgUiRxqYqzWkwQWyeRuvaoFgvtVnWypoGwigaCdqpgPiQ5Yu8fxsdgsKMcqZ",
  "key13": "4asN8ZpLLWgajFEC76QbQYq8gDiM9CZTrKT2KgzH69MpzBxeh454oinvZWamXuaagc2Hfor6GJ6kFrqunUqWKRy5",
  "key14": "acUhU1odJjPUgjrn47Ltv6iM1i7wDDwJXCMKvEabmcrnic4tbrmLJ2xfrZaMyitVnjXNB6RdmGYVJQAH7ExWRgL",
  "key15": "4YYQcsbhrsDSnQaPGyUTFJySRiL1j6xSGkdiNMcJM8Wh5zA24aBeA3WmuG7Ehi44vruaxB4HKj9Sf2Jnqp7B5seJ",
  "key16": "5NNV4oGPkkUVVxncTuoREMQstqdVeMEhMzuH8Q9fWW5AJsebpeyja71vfxt8PJGGSErrZpodTGNQVazCTzLvbupT",
  "key17": "xrGCTYz98JYAYVi3ribuKxoEvzYTFoZ43xJ72TsHg5oXi1Aax23fR44uVeJTC2im4YnahmZKFw1sQjd1WxJ2bWC",
  "key18": "5e652T1qwMZDwmRCgwYTMJC3bJ6T4JuukYb3HMNzRGuRLyVyRFx3c2e2NnE1HqLPPPjCBj6uUPgCo6JD12Yx4QjF",
  "key19": "5XUsJjxfgz5aAd9U4cBLu3Tm7FoDdwT7w3azKoZvznwkEmHNjmUgGGSqZrkEaXHtkrzeF9b25YpQH5N8rHWtR2SU",
  "key20": "361qj883wSp6tQiY9B1rZHCgUTu12GLmRKMZQpnNpRd2hqjH41j1DUa9TDTT9rxa3ZuvupNMnrXt5ieyqsJPYbxR",
  "key21": "4jbd6RwQQcM6D24UqSrVeKoXXhwF9wdsM7imtX9KR6ZCmuwAWC86MPL9Ae9unJT4fecg69fjL8tGmfrpvRe8gCL8",
  "key22": "DhenqVSqA6L72gu3nsEWZG6k41UmvKXUF2V44q6eLf7sn8wATR3DDZhk1HqnaLz4nDKdApSSL5FK7pJTK6tkq2p",
  "key23": "5gUV4dtdHrRfpzjwWecgojZe5UtkVsDxpxecDrqwvBJM5mskTGLW8qtsRSesrx7yhFz7x2RxMQRh9Qk9gYkvwUoB",
  "key24": "3ch91mR9KP7McHDhW2meNwujDofbbE3xtc711D3E4oZthtSEKxEB8ygzjxCepmgS15hsVt4yGTEaVMyWTK8FsvJ3",
  "key25": "5Tq9NcfwvCQftiKhL5zmLKBtHGnYRx8y8ED1wje6XyipTBCoDzQjmVNY9TNXPdT48xveVc2HgnoFb3dJvGoET4dV",
  "key26": "4d7aHNWp3hwFGxvtdJW3nFCVJRTz9WyCTXmmLYkxjMUneXQofeSxDySc68DMzxqPycWCJ2AAAeBeA7oRc2tRvzuR",
  "key27": "sivPwZ11hC4WeidR12dgaABKgBsY1UYWkko8wp3B9iSf8TosT6RjeFxnEskmyUb341exmZCo2nf1W6qVLEgyeFi",
  "key28": "5G3Uw9qRyxmnEBVWBfMrGrMWhwkRDhyVThUn2xhW5sxVonAb2CgLCDBYhPKgkttewodGn9wparXzytmwrMvnVpL4",
  "key29": "2y5q9UsN25Wk2Xhksf3HWVMMYLUMLxMAks6r9tCDNTkLe4tVwp35LcZn4c25iZqjRMFLfyV4pNtC44HzDq6qdKux",
  "key30": "2CNJdsfw89hpEqFTfprkL3yJR2JkZbHAvngno6ChvjAQRMq3TLnwhMee3Jn9hmMvRjizXgMXxufDZDAtNv1mLNpK",
  "key31": "326AizKVbzMk6KGWna2aKYVmCaZKgrxnmdHSGfXBAMdGWbRKMRa3fQDxDQXaJa2iJ4dLyUaxFNqV8syTpYN9zz29",
  "key32": "Zmz4MznARRxXTHB2bpt83DKxHwnAGMEx6PVYJBW76L8ugRn5QdJkMMzAwG7h73VWgJwh6uiGKTNYCU9GGd2VbHn",
  "key33": "2Ti8tT6PqJyKjTYpV5ApsT2nMCfMCWWckTGDKT3tSd1uZz6B2e6zkhWSvCc47MHD9iStJgSowN5hkQidoAVCZPzZ",
  "key34": "66NiGmseN9BovG88CXHhRnSXAwMV53Q289HnVgnMbs2Dctbkrkv23cpatWE7r3hL2yyrE9UQcsgoWyEmsz6kqGhj",
  "key35": "39ZKz9jEZcGBvwAKSxG7kyhZGQdb7gRE7oQ8PmqJfuDPdKqKmYgVUATioizMVKoe3AwK4NFTz8xECmfYxk4hFXvf",
  "key36": "4iBvwffsUnePs1vTyoLY95Xgm5WBYcbrwJe13wwDYUfb7ftqYLtFqo8WpmATojG3USsu3b69MejPoyWHhibfbBN2",
  "key37": "38oGd5ikHKaihfiEKvpkC859CkxpTtXHRYsgJAGyCdiAjmY3yEBt3GdtgALppHZLuV83JCHq1LStA8Hm8N5D588P"
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
