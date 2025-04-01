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
    "3492mNKfv6sbASeL219D6en9JTFqjv7wJ3XRVtP8HYmc3PxGPA456QGUU518qbAxwomMmbKWyfxwTo7X1TFyGTF8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xmfibGmVMAmnJwaeLG8o43KsiscMBCUSCd3peX1uJ7DVnqNjW4HUu2ddRKTRUjwU4cn7HFxfCDFXC3WS1SLrpSR",
  "key1": "2rDXx26MdWZHHi4xN5EgL1SmoLmY5Q31hovKQozgLwAQYDsiHKiParoodCxQNytWXzBttWNRhWUAxAPMhFZPhAx1",
  "key2": "5F37CN72AUAcFT4JxDBuN9SftxCg94kL63KHNPJ8kgVJnBrz9k5vV3SNuxAev58mbTQ5N7Tc1DiD2v4UrW1PeBfP",
  "key3": "52gvgrF7GbfkkmNLgb3fLMsb6Dm3wQ6yDSmqiZZCFPwYDsbYfuD8rCk4cmBmu4PLxvsNcEsfRfcBqK6xp9mnxAaP",
  "key4": "k49CjEm3DFGrc3fXZ84dn8WU4gHeypX3P7CCwNrnPN35udTHUy1osWTmtmsyndd4msvShBNUiWTDi3CDnW3ZzoQ",
  "key5": "5XKeqKDHf2b92xSSG4eQgxLVM5KDUfCGKeLRFCLjkVXxG6Ti3ZwUqF9iTuyK2NtU5Cr4kkTabmE6q6zXC3fArtUL",
  "key6": "LnMGYh5NojhTT4iHBmmggaXddhmcgyWYLFw3ZSBkem7tGmYxxbzcagKaHi7FKtqYSQEtSxUEat4LvVRfLxwLjBU",
  "key7": "5btXm4pZwpgsckzGDRq4aYQLbMpBPpMNQe2bMtNqPzcHfoNyLmd27nXJTntGx6V8uentXHvK8yUcZiZdr7JidwTh",
  "key8": "3nbdDw4c2rXofRbM8uw7C9jCJCUvXAfnS2E8gBFT4kjGQ4PY3zQRqiLhRrCTTojvzszALS5CEzjJjMykdeF6bSsi",
  "key9": "4dFWp6NB9KV5EaVt9Ptfp7vj3mHcKvtWsxbLGZgCwDFf6aDhfL2Hw3CNc72DEvp3Eq2fNYRerFFwnpwaHUQsexwS",
  "key10": "4vFipxLWpiTwEFnk12ggmvE2xCyWJ2SVh5fXmYdQUMRrTHmbeAEpt7h2tnZfKVz9miPxAkxT1Ndr8houuwd5Bwde",
  "key11": "3ssibXjG2mf8PnJwWmzhznnUnVzACTKdmZXm6nvvDLgGqvsZsRjHNVk1yCtVTomj9zn4UD8hWePAAXFeJShVaHDd",
  "key12": "vMTer5KZ2pf9Hx9zM9eL6do8Jed7f5hK23LQtYo22jBv88tEBonFrA6PoPE8s6bp6zXEJuX8q3MwyBFwUrH9Pk7",
  "key13": "UrArCjm7wTGtRrf6bSNd1DUZawSPk4TEL8x7fZgXjp63BYW62ncnZQGH5Hr7sKG8ogpC9xTBUCHVNy84LXcDcdu",
  "key14": "3Kcp7fUytvcLEXreacF3FfrrzGiXJsZWVsx8WjW2zLKjiPtC3ZdNAXgBJgodazyZYkXPzTLDwfoQEHan1jed7g5m",
  "key15": "5SjkV5jdxqHTfFgwst3YfLd8hxUKgqz8mes1Ct5JRmgC78CcGJs3WJukuP5wEYVSrnQqzj8f2DVVymmJ1xxyTQyQ",
  "key16": "4VTPVd11526ZccfcXFfCS6sFG6yY4GcmHFKWT2RTBuwiskrm9eSAUH1AkkohzVLWcKfYEqp7RmhDv6x5zFoWgwT3",
  "key17": "25pXWSnWfjEELBvaZzjtumq8u8zqEwGQp3GFKxaw3pvv26EwDAkj7y5MVtNENHhLSAnBDeKvtFLcWvsLQeBVAUqz",
  "key18": "49EFf8N7o7nwH45B8nU67VsCGMSpkfe2tQfBQMjpeoBoporxc8ikT9PbZY3GzhEZDDeYaUMmTx8Dq9bjK9RiS1ok",
  "key19": "51ZuqDREMppZwjMH4kyE45rwrKuXSDKbpVddUNYY5BuA513H3vhRxAfjjmewjW5o2aonvBATZWSa3GAkGX2A6TaK",
  "key20": "3mFA2engTrs6iyaom2d1fdJfi5onXNb1rBzo2H8VdxwkRPyvpKt4jAJGLVuviw5fA2bR3pCT4prfzPJikiDDEgDz",
  "key21": "2n9FR1TMLz7bTL7VqPe9W7kXfo6ULNM3AxUrbu1cJwTRKsS95G46byScrP4bTHuqqMr2CzZhVHyt1YtQrnDy2MY2",
  "key22": "5oNvzVNQN9iEABojFKSeCab8KfLLsBLRAiJ2tvPTqovGpU8au2akkcjH1CB2V7L67VaX73DaMHhdExbghaQCNfuz",
  "key23": "2wjZp8JT4oSHgmv7qzEyTaWxMLN81cGprFj5vArp8YhPU17jvj5vkxmJ9iWR3qohzPsNnGC81nG72287K47MATDr",
  "key24": "64HJz2K3suVSoz8W9Sgnj1apTTMxTAfDRL52qPBWXHEP1k3Enfojf1ngjEaFagVLisDXS3cbX1qFzd3Xy7x5MSjw",
  "key25": "oWbnDZAzREdvVWhRbmczni6L6TytptuLW7qmcgdAUHbZUQxf3XiNWjVgSCgbdKgAec8X3Bok7tPamyxqhThYkJ7",
  "key26": "31aGSriemSydbMRRoP3UNXvYCscFktxERa8TESkj1i6mApkyMgEgPLbd2oo2NhgSVC8uSAE2QmcsbyhCcGQdWVAU",
  "key27": "yz9MtMPgaRQnd7PrW4NRc6s539FiQTtWiKP3SCBeAMbwhiKAX1aZBHqXoRWqr1VEvsNm4pBrUN6r8s2gV3jtDCi"
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
