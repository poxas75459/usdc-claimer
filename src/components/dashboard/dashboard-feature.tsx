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
    "3ckRGFH7TTUfuTQWqeD5Hj8S83CnbptG1rTvoUxvUS936RqnwRLza9mJUyVHbyHfh6PzxWHEQqCofW6xRFoE3nkY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BDHGFKY6Cx9MThdv5T6xKubNLrRco4ifFpSpzFeycnSvNq3TwUnUnPrbcJpTRBJ9mLnhHkAs9zeed9SRTEjYRmD",
  "key1": "4J59QUKDU7xecko8KHXCZ53UKhS6WqmGJigjSaSijZHcy57woatWbxqNLQVQV9uzaY69kbkTaN9HGNytAiVyKbvN",
  "key2": "4TppzSPZxRdehQPHssjewpa7ifjGFy8T1R6k7y8gZNt5Mf58BHeyEvQoXBrQie1LLkfHZbhU7R75mBGMbE39kZLn",
  "key3": "89FBW1r8ZXyRaxWMW2ZikPGqMdtrH47GXDoHwg9na5yMzrqqVrziwFWCDCV7MKxvnrb8VPQ8T1apdtF9N3Qy4cz",
  "key4": "5CKp3KqTgdRecX8jtWRJVgATb7Ga7MEXAZv8WtpQEs8ZNrGXRPadQNiHPR57wW9yk2ixHxtgCzz1V7GwoCtTxKmX",
  "key5": "5V2aTzi8meWLbZqgqPyNHSAaJu9rjVwm1bPR5KbdbvznB5LQLrt1f32XcunGRaF9yXdbpFnQmrBZ1GMeWramgyEk",
  "key6": "5GbwxKB1aDLHAm1Yj7PWC1AWG97xATXYjwDbYkyfiAEKu4HkFntdLHZw948GNmdfaK3iLgwa3Eu5anCmhk5PNRPG",
  "key7": "2XNLiB9jGn9dDYT2NQfYGG5fjMjfmviMkcHqAVaBvSBsLZ7jNdAGF9RP1HGDFsNsp6v6N52KEQdN7jFKT4RdtPUw",
  "key8": "5fJSx9u6twT65ziKM1tz4ipZCQAFWTSyEfViSwuM1ahnW6imDfzHb9qm5752Cv8PazF217VJEvYzjB7M9KyBEbZb",
  "key9": "5CezufuRE6hXu6KWJBRz968iAzyoadPstU957Bp4DN2MknVdsNHVVrRbmj1y6NhQYdGNGXEPkWxh8vSNZxkptpQb",
  "key10": "4avqdhZ1t8ELH2JV2ffBQUBbVcxEMZeCNv6MKN49ynV74GThm2923iiHTpcGNfZVPUtxXjA1PyptSEzzdrPoRePT",
  "key11": "32gJcoMJYahJ7V77e8csCaddFiGocn6GCBGiDxUYdTHmZQyU88Yz6rXUg9EKDMESVWrGRHmhJoeev3qxBWLLpQ7u",
  "key12": "5wnZuVQjUPNCVvCxgg8ushzu9CpnDk1DSkeyZc4oWbpDNaBaFWWTX7Wh5N4B4EhvS6pDTEzjBc5JToyvdy1nePTq",
  "key13": "4N4gytgmxPW7pfrbhocZHoaFqVwUB8dPnYRtuXcEvdL3XLMSj68XVvCJbDiJySCqW4BKkSXsw5eux3bGiA3AyUX5",
  "key14": "4Vyn6RKvDGj9ta57J9cZx3BjV4DJ6qQ4wYWPhCHgch7QHDLuXEPyVsDcJvf4sXSwASMgo7sLbtFPQuWCtAHgnFbh",
  "key15": "rR9QbUvw7FuDg7K4Um3xpg1Sb1fezxdy9BoDTgPs7tqAgTeQwb9xj4ZGUdrrT7x6SY4fcnAFK3aVUqnWbrzNyGf",
  "key16": "2JgZeJGSkp2fEDFCXr3DX5NWUqQn1FxiTNKx9FH8aii6PwiSKSeCMysF8tL3mYt9Z9WDnKsypsj7wBqJkoFJVsH1",
  "key17": "2D7xLAr6M8BDoEbfZKh8rptvRgyaXA2mQkxxH4ELroe1xhkwN4DSaXYJw6zE4cWueDmwNVVRoy27rDbWj3rAhthJ",
  "key18": "38P3yY5ZwPXmTUH6ifscqpwAFZTqyEyUtqZ477LHiTz9Uy2TYgo8kBcvCjrJ5XQorrZi4Lu8PMx9yQaWxcY6KbTB",
  "key19": "2LgASaU56q9vqXGDMc5A5AWrXvn2MveyUUwd1sD1tB74K37syW85tW6fy7FXE5vtfLuKMwsrJhBTWURhmi48DbSR",
  "key20": "6JqbUbXD3Uy9vwzseka58kiNPFJMTTZoNBC8fd1iGgFXbsyUMggjicwmz9DLiVRG5khUGduZGtAn4B8Yc1pBacx",
  "key21": "65Pz3fgfGws84My6sPX1TD51cDfsCnscF2nquQthhGPMf8wnZ5pkkX1nC9yon38AUL2uqPomZRcNiTKguW7HBBLf",
  "key22": "2UucnybTokZjB7NviZU5ESyiDANwt55Ro5uNveMFSyeSsHjyKXPYHxu5pFJbtm7eZoUcnVJBqL2uuzaMRZPrWLLd",
  "key23": "45VKNc1BiQb9eEAg4CsKF44ZQ5HfCRXUV3N11sa8GnkD7xVcm8kPmCYGzXPfKEcpoe25fs71HNP67h9K2L7TbUCt",
  "key24": "2Z1nJExkGriuxw6ijDwYdfr7gDYpkJ8bGgsFE78mdHH7fQzWXjvR7QNrhGKEByuSDdGokWt9TtW7NBERDULWEAry",
  "key25": "a6bjuQLdsXKbv6TmWFkMDUpL6xwQozTjFidEp9M8x187TsEZ3W4YYe9yYETdzS6mwSFaTvdv1nP5sKCKysdwiHF",
  "key26": "5unPrMSCaRsidhLacr8FvujpTvaxBCN853UX9AnM6nSYxqFjpryrJLBAuUjDQXbdNkQD2qK7JH6GQgLBBAbY9EUN",
  "key27": "irjv8BnYhv5pTFqFmuMdxQc1CRXB7QD5kTU5hag7zoRmozbgaKSnVmJmiZjVHGJuXGovMCSc99okgBRZ6bvPcCe"
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
