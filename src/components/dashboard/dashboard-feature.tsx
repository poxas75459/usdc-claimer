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
    "3e8NY5EgyWcyf6BhvhGTwWKX6d3XD8UGWknC2JNmhjdCXs9DxKLA2WWsKK2BhLC9kF84VnQVFheaSTfyPhDMkH2A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KHc9W9gsfGLqDXZDR7ANket1ftduPd6qhjfCf14nvLAuWfTZciwRMKLY12CG9ziHbLujmqEaiSY16DZfFXBWNPq",
  "key1": "4LaES92SfaTr3EFScBBbeod4D6r2HDoaTYF7zcSiEB3DTo12dLWUsAKe8yskCg46focxd3ti3csSqGgQRYhPYMHU",
  "key2": "5otqgNps1riqD1MxSJLo76SkcH39tRteDrLKrsL2PCHvhYkhudAvjmSoBYvoWaJXBkWQk46gF5K5duN3rGkVYqd",
  "key3": "2dCXsD3KG2yPnH4TEAg13Q3zrjK1YzNc8nXXwnuG4kjzawWYf2F8fdyqmtxXTkwvyd3LkQU7cSKRgXCujUv9bcrb",
  "key4": "5Zv8o93UAoGGsoGXEogX9YpHQmzdJ8xYRcLxGtnumYczDBn9j6qT4AthMBALNRRDPWrXDB2hKpyDDBJBE9AYanws",
  "key5": "5ahTr4hPDzDTDGgTJjY1YXdZsoQg7kERV9jTyrzZDyzwEN5h3gtpAAzz17isaFKE5s63GbBPXQ8ixyMRUtvUmymq",
  "key6": "3bKEp4VxsDnadHG8GScDx8sr9EKp9C14JGEHuHgtYfDDDhZrHgWASnhEf2sDTWqFhdMKfJKCVjVHKzgWxbkDkuf8",
  "key7": "6SeykrEMkuUGKKz7xNktC6PTE343MjvfBBHfTgJNcBTfT4tK7uaiPeEU3VQHaymoC9SxULTHZiSCWqF62XxmYXw",
  "key8": "2b3hZqQY75iYdo7bSRerPTxuNb4xcoLv4LS2USN2gStLYgEuVXo2xdbd5yGM1EJSuWg4qpf3uKFz9QPWRbp4JMCx",
  "key9": "2qoGJmb5YkTBtJcEz1126dFSt7CevfmvQibp4NDqcTwstZc2eLq9ugUY5SP28md9ghTdJk9VtYc4yvbS15f8L8P1",
  "key10": "RAnXuepd8LBYjn7xwunyX2Fvyf4d3y6CGTBhftYZrFZJQBwueTuKRYXbCwizCufk5dwc7QFBrMVQqjp462FxfDs",
  "key11": "3JbVTBN1szoNcqPgHwFZA6E5aU8j1TYDGbhfvXmNACfbhdGFx1DTFZLoh9Cz5BGgVYpGAoHV6zXapngbuJb3pnK4",
  "key12": "5pw5RA86zYVAsK9DRoHbT5QPbX673dPyHSN7V7wd7194YCaVugV9ZXuUqpkWdNY2PuCz5EtNSVzohQ2jF9HKjqGh",
  "key13": "ne18JGka6r1JsoENfkoDSJBvTjBZW88YFx4Rtqe25XjRmUD54HRjugnvP1Yhed1cvqsyMbT8XZk9uysKmPDZbC8",
  "key14": "5j87sXH5gBG1mR5u1kGDePXPYysTGAbDnJ9HV4fj28VApix48DMTgAtAwjf7w2eXQ8z2CA4KL4GovcT47umZ883p",
  "key15": "NDW6bNJ2rKCpvajGXnCpzw6cobUgUePU5V7tMVjftjyprqj46jrHbcBANLiH2bxFME1RoEKLuJ7ppiESoBHQ5Sd",
  "key16": "JYEM5efGRPFhYPYyN1ifU2ARisE6isG5qCWDXEp3A5NQ6mp3qxQng2ccKZ6dgPDLXqPfhEgexu8aTqTwU3J9CUv",
  "key17": "5VmBb63iU2Yw9nEfAgt8LUv1oYEJJ2LdH16389Be8rroMYjYXhZaQKtb2syvRwFxrmmAqUE4zJcDTXsm9o4sBLXu",
  "key18": "5pGHbCWS9U3RVRb4uN7Av5EYxyeJyLyuKLubXT8y7aFQEYgf3pMsm3oAsSdmkeXAsXKbv27UTS9WeC7qashi7bty",
  "key19": "JBDJSHSAhTDiuUfDzjHNS7ZYKLfLpYn67ARBgFmArruLofJmd2LdCZ5fSUJFajoxHtLLyqT4mD82z96AGmndu4C",
  "key20": "4FaFcWmR4g5D82pchBxf5y4teHrXsEdD9m8RpyDRn4PdU4gmR3fhrh2RL5vHHp8RgK91Vk7S5J2Z9ehCSVEKF9yX",
  "key21": "2y8NcpmLxnFF8nXG9KXmE1goTQCLxipay9TVFLFrxqA2W7KKoPMjGN6SYEdPAdzjd9LZEcTTP6KJ7U4Ja1KtzeNW",
  "key22": "5PQxVeuuFcvNTugMVkYGpUKmtHdZR7pYvTKU4BxLNn9bBFn11KAuZPavzpid2bUnSu7NSBhumGzsh8pqRHk5gSRa",
  "key23": "jnb1tZ14BsNtj6KDY8tEhH1xby5E1jWYqprvvSPo6NNzEAwiodFYGUPatotoS9zeKi3V8zrLP7eceJt6XJrfW2j",
  "key24": "6JAJG3dUdkRcEAftDEF752T9xd1FByuRx5QdkjdyNScxbPkJgqR7enzHJHzxx4pK3hXcXvbsuN6dHJMH7UhdoRc",
  "key25": "2Tf3EhPAufpngGgyj8ebNXH2zqMoES5RAr45hqaybrt7tbpDCTThctrxFFNBMhhXnSXz5vbtBWYqFU8UiC6YrhpE"
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
