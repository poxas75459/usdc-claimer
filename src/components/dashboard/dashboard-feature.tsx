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
    "3kM593ipoN8syJErxeTnoHAmfEG5VGKp8mniFk5pJCZzBMScHqib6p6ztQkauT4W4Ah95qgGqcuJ9sYKYmsQ7cdQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DwEfyytWELCHQeWopsqd2ArhuE78AsWgwpWgMvxDwu3UoQzLLajUHVbkpgsQvVu12HZB7coXpzkwfjScLHL1K36",
  "key1": "4YmxrTu26TSFDRj6qhnTLvWpxYngNARx6wSUq4dDhHGGnzYuwukey2z5xnhmp4vnaNBsPC7BzgiybFV3TFdYf7xA",
  "key2": "25ARKQXERv2Ah762uCiXy4Lh9162yQj6Z7KrTv1XbbLZQQ5v1SJmN6s2MVSTe8Na6Amu2vys6iNbHdTvBwVXscNA",
  "key3": "2zPrGuvzfERx6Uyd4PEYXa7WoWnn99vWwrqhf5W37Zio8ztUxuVvBBVkZXNeizVBR2sQubHJn2yXngK8xx5GFhCb",
  "key4": "3gEyrGLtn2K4XDW4vc6nNGKBs5AZTN5uujj2hbgKztJezoSGQHHrUtMX1RyVANuu7TZcYovyuqKJULaDHVpgBRUR",
  "key5": "5mzaALWu11pNwbmZzFLmSjVAQkSvpwYUNiFYWUS8YDrtKPUMDchy3tKj9b2ojb8p1TiNSweZYQtgLBH7vaKrUdPb",
  "key6": "4dbhck4pbrUtJ83x89dJmSXk6arwNuumiZ2XfJVWZTXZBQqKWUZEGZroArE15wbE7Ci99ktfnC61DQ57AmpUrXUt",
  "key7": "Hm6czthKgWa9gri4n8jDDPdju5ib9cvdxM49kgFVKWBPaCrXV36zCAwYR782uLcDVXi72QPjZmpGHapzbX96Ypr",
  "key8": "4VHC4kbDarCCYENBvnywkmRRtGSgUb6886HYcnFHd7d7SJiL58hymVGYyR7u4tSQvjobqr4maoTmb3mGn3YvHCsS",
  "key9": "47bLSNJmh4eRBwmge1y4Z74hUVmDZcKDC9PYYF2MzxTmHKz2nA9m1xVBotE7QCb54qCJc8juMvGYnu5G39tRJc9",
  "key10": "2T36eAymYwJysdFTYUEkkFEqRrBgf6dvHN9yc5x79Lts6PwivX8MbvVkuyn4wGuFjqEQS3K1hc8ztjZPhuYXV61i",
  "key11": "4BYXyhpGqsELnRLE2JbfZSPWoPMDUTyjniZK8KBXyJnDvoaqCDNR4opiZQB4PzRQ8WLotj6YcJbUPqXNvYjx9eYk",
  "key12": "byEvwpzcPXf2wTk9gcKp4w76tPsCV4Q5Jfp4Mj8nixL8w12gojVG3impmPSGN3kxsLABWjnnKmJY4rang4N7nBD",
  "key13": "3dTiewHRSrgh83viXBnwbam9kJ4PkjoLmZG4fF2vYeh9FsmQRPDX3tYEDdNqYcL9zgAi9N6RbKqvGevjcToFegVh",
  "key14": "S8N6K1rNQeHPs5ETQwjLnMPN9PWoNS5qnxYPfpQtaTQG3TTNZEMH2dPqGnqNjoqKDxzzKC2Ra5Ey34f7pLbvQa8",
  "key15": "2s6DXr8cgtB3m4Akt7on1kuurQmDiShqhzJ8JdRwKH1CCrhxUS6q5TANgxh6wwg8Euuq8z6EZeY13Kp61TvCJoBE",
  "key16": "5nhkHM4Hkr7worVcVPzwd3SuHFAQosCEqsNw28WmyTm7ffH9j396G7u8GetxR3pvAvDxZeZEnvjE2LrYzKaw7L8i",
  "key17": "5h76ca7w2asZjweDRNXVYpEmNsE2F7SoCPVSREbmVKDz1CVKnUh7zASbW8GetSnzm8toBJ6k8oQv8qcYvq8MwaA4",
  "key18": "2GS3STE276a4j55LTsaEYpw9uhm7PHjJVPvUfrLQijTEfmK53e4xBJkCV1ekW6VJ8nbirW9RaSUMgFgnqiiyHDVq",
  "key19": "5H5XbPKVKkdMsdfYtqbbaGQoPp2BUZbN1WwgLsb9Dq8kqTaQfb8wu9b6DKQmPTuhDCW9QmPDcciQFoPDEEsxPCbn",
  "key20": "2cFbGGrCdWPkcjwQPuyF9pACxtAEKdjSTkEwuzRbqPsSHUNXPc7Y1pQpYfPdk4jMbrGyAe5qPRB5Kxmty63hrwfo",
  "key21": "6kmVu3gKTSEwbsmXsTyLo7fvP5jTzgE1vJi6bVm2L3zu8LsdMCMHRyquTsUM4cBzzyskNLA9socFCu5KZY4MUy7",
  "key22": "4y8QgWuQkXfEbCRgECNC3NznTkS3A6utVYSumQAqfYycVrznBJ1qNc9Sa2vJMRTa4UG1pQbeFFkgb9vaHo72woew",
  "key23": "5KWofgedjmFhvuM6BUH9GvHztYWUqj31v7z2zXDs3yZLUvJkgFjups99xAjzZEs95CDWawB3nY83rZ4jUEs9VP3H",
  "key24": "4zpgvvFSXHjLMvMCSTenD2XXvqixo8PyVv5waiBFFdxA2EVg9HNmLez6QuCNXrTFKHj1BEhDpsYB2HDBc46MVTnM",
  "key25": "39zCCRW1tDRzrt25vr2PgEcPd8kp9sbWi5rUxnBWUKy8a7cWTzybNGbeXA9xEgSfhyg4B753mfP6uqm5gMR7NWzT",
  "key26": "2zCeufYECfs9dHS6ASYTh1vH5WAQmEaXE78h78JarFuq12qgHLDZpNmMar3s7zvbv3qqyGuzgwwVHavndPzKf8ci"
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
