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
    "43XrXtz4hgMcZaBBpvHn9nG2vtBiKFne3W2tBgNEP8JFyYVFZDtVisc9qgqdJM5uGvKB2dKbd6HC6VtCcYcJdzGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T89gLXCuWq7sC1xY4brPNy3aUihcFZwgG6VasjD7dqKvmxmNMHU1PdDfxwnBhrnX6JNEZ9jcKVpcwDsSLRNR64u",
  "key1": "3zw1cCBWpE9npnSXCRy5a8SBufaD1UrLc6HquHHtswy9YMueSDQpHKKfvHjVYfJJcgHbfxLhnS1xy12WJVhBPchu",
  "key2": "5DmuouMhyC45EjgnGTX57NdLKGArowmxg9rN1DiNnxXLHV1GUBmPBXoCSrMANR7e5tUJBN12Hd12AyXCDXF69MF",
  "key3": "2efciSpKzZop84fCjreiV2jJB2pws6cp7LbGiuQQ8gJ6u3hqYz1jnw4AWugi1duRfb89TMaAQyWMmCM5gbPqobX3",
  "key4": "47HjoYXgvi1JAnHfkERNM7SHPxPukKyD7D4iCxRyXdf43rtgTWsfBdwyRC1op2TEH5SD6Zr3M1gKfWvYNWcav4h9",
  "key5": "67RG8ChE7NsFtHKv2PpGG1V8FZeVX8AYXvmC9fp4A1SBzbrQ5XUXSiRkrHFXDuALUrKwubPReRXFCKK2f2YKZabd",
  "key6": "3nHsd2rsYV9sjHVaX8tyn1M4MTGwDWvLbeFYBE9uwLS69Q4BMt2KC9Xf5VCeHGVGbsiZ4ZfjH7BRzn9tjYAeidCX",
  "key7": "5acArTtHwu7Mbccj76Kt8QwfUqqWFuRkXgTsPPyQqHKPFy2ckzkD6bUNGXMrkG3mmooEvr96gjB4sdC4XavHcK9J",
  "key8": "CWtrsp4XZrYTA1XfnJEZ6g7zC3CAdNZKzz5mMq3kTtjdLHuowtrGDzWmwDjmzSwytjBnf4KRTe9MG2h4opTCYEh",
  "key9": "5XQa1W4TktQUiaUNTKhG6GfAB5mMgeDBH5rufjfYEVVX6FZ3dKkqxy22m4H9FG9xodH2QanA3kMJ1uoF8EFhdcYo",
  "key10": "2STkos59VLV6T1as4vUqvuDX1quXcUJeiT2oWPsuZdqquNPCVqHRnbiHuvcpdAi2qMhBb9biM6yGbsvfA6qBzngd",
  "key11": "2u8WtXGZMuyDDF47Az8A4bveUzaV7ZuoSKxDjrNSRScSoEJwbWntvFRQZsBrWQniEEqiLX4Bgyn8Xyhk8Kbpwrq1",
  "key12": "4kKFmL9BpZrNK9gW3FwDZYmu1SXLdRmhyGUGnYyYQxSbtBhkfS3bzC9eaXuDgyHUaPkimyq2qUwcjhoyWExDYmSL",
  "key13": "4MHqRTReiNEqa8Wwu2VK6aNt2Tc7Tk5FRpmvhFimYY3kYEVFs7zE27sQT33EQaK4KFQhK32TTRJirrco4BVQMjFg",
  "key14": "4x7P8VmBayaQ14eziRkQS8A9Q9JXJL7bEbaTYyZfozu3HFiV7z1mfwoaqK8ficHUHWHo4kzLMHtNjmCDtvDUK3Se",
  "key15": "4dgtUmErAQX7se8RAXSmaaZiWe4fvieUGnThcLgcDGYL8a6deyLmrRuvKKBi343T6cBs93Hodcgymvzni1a12RgV",
  "key16": "5DsrzE5nNa7yS3iHFDdyb7SuW2FK9nfHWDA7jz6isUgFUm8RBPBMGH5gPtw5yeV7ARuNc17VP8zfqSvHx21ubgdA",
  "key17": "5khbgP4peXNSDp41nratvHXFKyeHxekAUtmQLg7gBJy9H5Fo2mN9mAFCZvFeH4pTRV4WX9EspcRc7xTaEZLV2yAf",
  "key18": "3NGEub7u2vKkLxVNqEJR6mJEmsZ2cPq98zaRxfrqgwK6Zp8B363Be8WrS3zrjKtJnQnegSYGSryb2uEKtDrLjM57",
  "key19": "VkvAeqMSw1pYT5gB7F87TenM97UDGhtDq3Xbv6yVvG8V3mq8q4TJ9EjP7d2tnmKFBaM5dS2Md4A5oRANkP1hwzr",
  "key20": "5Xi8rovHbWJzJc7JN9AypKVYCD3GxEuRHb24mznnJZMfob8raRDwQaawciSkMVQVFyvTbdnVMsZhDvKQcjD5imwG",
  "key21": "5pTBZ23VknsQEpgEHK4J8MnjcAaZZtXkSeb2vR2aEMqii9TufzqYrjM8iuFo2kfgXuEWd3WNB8Ca6ZaMwAtkEyNT",
  "key22": "2mjoRTnBfK7CF8EU7ABzSS4yBWDV35v9o5v6noPVhbBWF6uMj9BEonWEeYyztjJmqYqxaRNQX9zzBSgoBNUkDmDu",
  "key23": "C6UwJL9xazb9kGL9LvCuYn4ZePZ1a2JSMok9THk1yMHZLz3qmAVkXspnDjhmJNs77sLDuvmdv4yVMhfxqgTL3hk",
  "key24": "57UbQdAmH4Ro8jz6DsfexFuPqJhe5SQBmmrB9FfLFbLcsxFDcHxEJXyASqqiHjQGfa9fPRRGfXJRDNQVo826xMRQ",
  "key25": "5AbLMCLUS2XWKccLfYS45gZvqZuEUYbYxiVrMDfa2SdCpS1f14gvhaSGfcayD6nFzrDXHmZs8eh5sYAM3D3Y3sfu",
  "key26": "4UHpkeStiMvCmhXUT1G3AYFQ9dY5t2ANskN2hD4rXvGdgPLttUevnkjbaDqUWJcav6qWCUdQV35pRz2n8cSdEfb9",
  "key27": "3DtxbU8m3e2T7YyP8t8SEaEihyc8xWevxW3hgW4CiK5BN4yFEu7nto7RqfaYT4xQYgh3SdEfRY53g3bsoTGLUCsN",
  "key28": "4xJtpjNbBNo5StbpbQUbGW7vUg2rPHUMVXmcczvkQEykUrSzUzDJhumRb1dVyJjoapn9sfJbjMHEhVLwk16poKsE",
  "key29": "Ks4gCXbUfRyyz4r3vbmUyBLvbNDFHkSY69kwuuPLQeKqxZSa3mGQDH1nnvnpgbukQceWoSJpoDwPkbAeTW36o3D",
  "key30": "2jmBZzVvmyYuPCo4KYrXBdm13pMJ3HuKo2w7FYUz4tkuJdAk4TkYU8Sg8HuForXGGkLTFrqsXSebJbg1y61CrZ4L",
  "key31": "2egZtthGe2BSYBqCq2kedJ2MTcBxZZcWuoMdhM6ztn7GDj1N2js1dFmTuTcSzx8VgxXq18AC8UcwqPpDRwkfUniE",
  "key32": "3MUccnQ7qp6iSy3mHJ9zyybqLcHQr4uurYrcTAdRxJrKVkMkmZ5yEMsTSSap6nX1LrcSTABuj76exzXXwTZb5qxg",
  "key33": "imaeDficVYgkZfJQhDKbptja943ZYQh6wkr55GJVAMgVmsGr6DUX7L946oX2A18kz9gMjztgRb7HGvPYZugbkVa",
  "key34": "m71yC15B18CRWA24FrLAeMNeu1tdqZy7Zz9mNWrZAdNSbJVEb7f2T775hi3GWv6kh7aeXK6zfsMR95rMMPFLaZD",
  "key35": "5rpWW9Kwwmgwj3eqKFtaMGXHP12QSkWSCykvQ5SxqEg9nWJnpoWp9he9i539dqm8ous5mtvMwizANnAz4ETCvWSQ",
  "key36": "2vjbxVqfqsWXQDopAjmY97eAeNr3SbdZWDPZ4C2qsRccki497CW1Vw8XWU4E7vUiFo8xcePVkmpz6FXDccHj7SAe",
  "key37": "k7qytYvE8Zk8z1stP4W6VqFsacRUxH7b3eS8WkyRDbsAnKvLK8T25tBmxFR9QKShLD7EPC133237T6cVZxe4DZo",
  "key38": "3VF4MMSMdES8jm8jiZYRRXpE6SkJNnu3Kb1nrvTKhVQ7fddqGQmrLMpK72fSHHofRSi2SeU8Z5JD1dHkBVuyr7hy",
  "key39": "3FoVZm8gramefuZs4Mvfwk2VK2VqiK4gWq66FHopbNyG6XiL6ywTPJco6z1BSq49tmdUmema6PaWqbQMb4ciQbhW",
  "key40": "T3gpCRgdYM6gZTppa6CDJMTV54X71wYAz9GvfUnAjhpBLmTLPHNgSxYRwMBDqnHqDeK8dU9a5ut2ZZiMk6z5J1X"
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
