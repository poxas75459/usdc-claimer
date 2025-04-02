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
    "3zLLDFfVBtmww33iVaRPk3PjF12puBH1oeFWCeXhFrr2Uxq2uvf9EWEPY9M5KypKsuZCUWig3FrhYk8uSPabVcLs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q42EghcdqgAEH7zwZf5tiCdLAm4P7ZF3MAYTU4MvmBbwPvSVZETtGangaUFhK9qS5Fz9qyd6BB34XpvKBcg41Bz",
  "key1": "3AtcVK8iE5zLovgCD1Q2YWm1NwjKsH3KFQoqCGfj94peYZ9BCXkjBQbaE8nvcbKq1wkneN9PQBtbgFoVBZRPMRbS",
  "key2": "2D2WyfeM4vobEUcJENJEdkXVBwYGTGBsfxKwjCszSt2hhDnFsvhu1JFrpp8bw3zaXD985FyKfExGKSssiZ8Eu2J",
  "key3": "ded3nauX1yRXtUJidfep3Lrv8djQx7d3XbZ56BSR8KdbnaiM98p3qu6ZrELVoUiKzbj6J8JoRWeyMcTcWMA3yE6",
  "key4": "JGtkD9ghH9By8VcNXsgHyun7AsSCJic65vUBLMbccUjujoXBfFYxZFF3HsgipqbMcKUGgyd3wTgFzz7GwmZE9Av",
  "key5": "2Ss5qx878RhH1KSMvNEJxcLC4VGTU84HP1Nprg7z6uVdxWn33hJVMkvnVjV9uJwsBPq5tqCWfAPn1nzRQoZKRVRU",
  "key6": "5PtsEfjn8ck3Tw2zwGaqSstJViVWEdzhaRfb1UFrJAmt6eSgi6bNMsYfxYWhnEJPZnyLmDejRS2ntWdPHmwpXvZq",
  "key7": "5KQgQZcfiSdae675qrTKghR5ePA3hCJuCfDmuu7A7LAKLo7rRZAm43aJnhMCZ7c5j5eFDenqEgWgtNpJ3B7GoHnu",
  "key8": "39NfyDgvSFJ6Vwo7Gdd1HDUw12tghgdqYfEsozNrgixtkaz6CZSbkgW1vDKXzMwconHdS2MBt9zG68eqMiCyyq8K",
  "key9": "4bxYBkdpeq3ENTuzraQwduKPDLa1qtJCP9C1dQD2Nt6qpEBdwVWq2mswphdZieXz3shvr7vXTqidYcX57cdeGpDS",
  "key10": "5k7zj7nrrsDNh3bYFVW4bwfs4cP879MpXFtCd4vgDeYpTaJndA52hmvtc1oarKjoPAAcd8mj7YX6cTdZrbhCsLkv",
  "key11": "2ZnrYe5G8vV9TjLMnii1Y3i858WwwbUeY3Hb5yvuSYJfPVA3wL67SeBoCqiXkL9rZcvDc9M6Je1xvmiBTLL7k4hs",
  "key12": "5PMXnh8kVbKefj9wAQnsp4uP5UM7E7g5qr4X1TB1Jjhtm4k7ANWuKHDidtbC7MCtfm3y1nuKnJt1yKoGSnVTrYEy",
  "key13": "2tcpoAZkqkREhhbpcBrnPfPdYrTbD8rdRtkQ5hZc82yWtJdzcitD3TcTCyHnjDKyoBBx2Zk2oJMQs22AWeM94qem",
  "key14": "64oWsNF4McNXg2if65tMY2A2ZYkoavDKdTW3bQi6gWafHcDDrXXzCTjGRfMproqmN8Vn8HvHzHamm7hwxwHU3Zvg",
  "key15": "4RPQZvMj9CkSZUas9fzpHeG8CqLoRtSRsYoKexZ1UnC2CqN6zB2GVMQWNi5GZeGBfQ1JALsP6961B2oVGicBBveh",
  "key16": "599z9BjYC1cGC9E1uYvX2jkb8HsECod4o49vY3rLMzV3bc5bNfk6CibQFBEvfPXVpoygbjyqVzNPT3vXJNVzAC1V",
  "key17": "4Gx7nGR4T9mxthWjYc5dk4djay8gmSwFhEhV7xwYfats3gFZgAhrDZ65mAyeoDkLaVrFQxYxRbvWhH9bRACPTRXg",
  "key18": "2NRETXjjgmWNs1RKVQa5wTFCgVE6qdjwGB8eKi3pQ3ZFTnq6yWCFEi8RTKQWjfkoDcL6hnCSbStXoBrHporoq3De",
  "key19": "5dJxmakSSgJR5Gy5vXXzKPxK31BzEFJ5itGzjQcKU4PfvTBqN1uQjJDYVqmHdxFQMgUeV3eqxJBqzTthKEYk9frF",
  "key20": "4RUD6CixTyapx3YeRrjVyFemUEXjpcbujfZt21ZJV3GD1an83ZBh7i5VWRfxgSSdpuEJJMWaXsYVEqJ4XsTpNQHG",
  "key21": "3z2QVYFugLDpoEmLULqH2oKkMBLaEiUbxEkvBj6CUpDqfVZhtPe9iqeBLWz11igyRJaWofWQMWA8GwZxbPwxGPoe",
  "key22": "dYfKJ2znCRFEDRK9n526D5N1M2JUNCwiGTsLPhShn63xhjCRPnb2NwiLXrERSCzwB4zRQh3kLk9pp1YpWHxkfmm",
  "key23": "23BvxpaRiCSSdPFk5gPYivpsjr65KgwtQpu5WCT4bezpqtVJ4G3RAiriCwBGwHXVqbgiPP52Zq5nyduRxun7uvcA",
  "key24": "4EaLewTUHoaY3MpM22va3jCmbmrnYd1kY4iZHCCkcwAV46Coz3CCTERRe1jWASbZEDZDnrSnU1SEYwPM7rjLvxwH",
  "key25": "5oiXSb3KCr9c9t1ybneb4j8R8czGFJzB29Ek9xRxwuFx4pcysysTE5Z8GyMUqDdy9xdaEPjGdioJKMNjamB8mUsf",
  "key26": "4U6UQbvJu2wY28aF3hAijgrc8VFdsvWQCH6DKURcftwv1KTEZABTfZfigPdRBWY6ohPMLDedJJigSUk1gqWsXWGa",
  "key27": "4aq5Sm63uychMNj3UQveMqJHVTkw6wgv3QC3skrpK3E5Scjfe7NtKnrcNdvrivGwnxRBvGjeTMXYJqo5kYYm1cGe"
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
