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
    "3B4ssMSvQeVqjk1LyC6CJuokAgQdcaLwoFHLJPAWEZMmQiqfUjRsesHGm2iirBRvaD42pR7Q9UZavgyWp3Wx3jUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tMNxVquSM5Fx4WeXmSgbAKSQX165k1E1m9EgfQ13RuYb7ZxcB2VHFv1tQ1F1G5RndL5sAeTZbQf6mxNx3VPEoZS",
  "key1": "T4JBYppjAJJmwCpotoXxStcabNhqDmKvgizuFCEW37HkoCVCWtkgR5QB3pqxTQt5SnP4CQq4XedhAdD5anMkRz6",
  "key2": "2vVFuYPCkhU3cnjKj8hVSJNEwq2LL79aNyKsb3KFVJLheRVWtzRGRqaqzXNkARTuA4JHkRhVbTVzN6argnKAqUAF",
  "key3": "3P3LeYtA8eUZFauu2reBKRZpHGGY6ggifkdyswuShDCbhLfH18UfrM2ZP4pecUDYNCYPNQsgaEtBu2r6neowztwi",
  "key4": "56bj82rAnz6LD2J48qtUKtYLimGBzd9wjGr8Go5yPy9QRvrDNVzDYeKxBREqK17tRH29XV3tLN11Sfiaeyva9T3D",
  "key5": "3b3zLEXjmg5iAhdxat8FQb31RNWEBGNAuXNFEA83y7EbcaqGjqCZ7tYydB2KgoZGf8wQhDwQdR5qBRACFqCx92eM",
  "key6": "QNoWdNAh5fv7Y2BmUY8PtYxGaJMShzpziCmyZx4TD5Z5jfTQ4FngEHHiTjbHaT889kzx5Z3QUxCa926ACcQ88H5",
  "key7": "2Pkz6wr71KH2av9ocughhUvTQDhddeNqUTQNJDkzn4G3PMkin5J7V4VYW9ViyRhXMtc8sgoer1oE4fpKx2cSKPeq",
  "key8": "bdEhLVjmduDMF5NEPGyvciTNkNDbVthYrFLGbN1prMzSeAisFnWCuTkewBViM3MS9V2B1wEbEfyr8f2B2M9fpkj",
  "key9": "3Si6mSPhRz8tGxLKopKQBJvzQ2kBRPhScMyL5J3CU87x4X5gpAQwF5gWVpeunTcmvzTB4umwfdaue4kidvdzhUnF",
  "key10": "3od6WgruhREnRxMYUtUBTM56G2EKHEaKYu8SLtRtJPZpLUocArTCcZtqhsnC5oUcA8VuVWLV5v6f76x5y5jX6ChG",
  "key11": "2wmpETW55JJCsn7k6YXbVR7QeLm7smitDPsr8DUJzVKzrFUeq4ppHNEuG4W1Sxr2xuHZ9iDfxWAkFBtPqtNgRcRP",
  "key12": "2RaNKoAyPDJ9R8eTG6ppTWUn74deS3FvZyHnV9jEPQLPaCHm149wKsxrZc9uBxzo2gUuoZGK57Zf5fwcvaCpm7YC",
  "key13": "rV3M2Xfso7beJScr2F7iFDRXjgxNNqWzB92GDUpKQzH6BFdZfBGbnbF7En78EvdoqYRp7GjphjA7Czg8o3pdiJm",
  "key14": "2KCmWXhqrBK1yMyts16USAe4ntfPEEJHbTojJS5zh3xM9GJk4ZKFdTgR81nHrF2mn58Psx86qwsER5KdF7EEMAJ1",
  "key15": "2AWHUEjGrwRhd53Gv6J2im1EKBxBSc3Udohbo9tPEnomhEMozk2SS6WSo6MZtaLhs7fjL1jhqQzQGr6AVznGD3nM",
  "key16": "26QVStCvC9kUUxf6r5Akv3vNqkRzzSbGoUWDWSft7HHZAS2pHvJYwiaTCQx7gRK3Ge53Lb55r8QexKfZBEQNSKc2",
  "key17": "3LUWr8DLdCty5WMQ12jURoMB9AztQGKRwhJjoDs5WGnhNbhQ7LHqgqqK4eYJufTwdUCTtb3RkppVo34NWUpbCQHu",
  "key18": "5iTEYDp1n2YpV22VQMVFazeABBGeNaAtkrqwztrJ2Khcibuyhyr1xdTynkgbwjxBCufMuau2FaajGjPRgAuDZafW",
  "key19": "2u6oqVhBw42buhcYcovuosaHNpbMN9jHUTfSVzEjEPzCKQLMiKsZvsvGSh9BMMfZJLFv8AtMk6X1aYuQQw54u4iu",
  "key20": "5qZh9GCUVCkxMe5jrHRYuMwxvb4nn7xh7TigxmJYBy4PxA6fzbxPJhAoKBxhvDEhLboLcTwRK5mG9wzF8BRs9i4Q",
  "key21": "491rqqNu9Xuyx4AuWmii7HC6yp49PYfbTenoBFWjVVThkACmyqw4ppQCbsGqRKjScpASm7roQN3jt8MSuryF99mR",
  "key22": "3KWzZCEYVy1eNF9REcyeJMfwbZ6xxJYbtsFSnWQXVCyYuzMnZJY2ggAtRKoPoMdURQTMaTPB7ndXfyawbVRwgg99",
  "key23": "5TS427XW5gnRzHRSryGhjXeMspuR21TzBGFQD8WaGPoDyV67hzYAKqfJgESVCNkxDRB5KoQ5XWrBv8hRT2kVdwCc",
  "key24": "4Fm7vCxC7XXKpQjsMoDBMrWmS18LM2NQV724zKxDrBan3oEsczVSktF1ytHchv34vAeNLYBPYfpeYZDyR6FH2szn",
  "key25": "3isUPoKhNsag6NHQivq4ZBQRPpxd8hn7aRsXsHrFJ4NrVSKYqWJbZdmVd7nKqbFhsRKWh8XRqcLdBEHioqj9TBpm",
  "key26": "5VcqGt6GdVUoyXitjKTg2di7sSMuXQ9qB38q9JTVGDs6esbgSjLRZXnokRYWxxARiu6o1HPenB5PPwppUg1T6y2N",
  "key27": "5YochseZrSWct7pVE1JE74khgehpDZVueDJRRhrmCnz27wx19chpSovtysTEKeCAUVRb8GAuvhf3Jmqid2yYYrLY",
  "key28": "4jbs2TgikZqanFvRtS5BymMr9LxAbfgcxoiAZLQAnvjywxkuTyCQVeXaUzPw1Hn5T99YToxprFEr9SkmE5jBHcVA",
  "key29": "6ru23gw9ruCWcP4P9os5NyyrQkWf2hUgsBAPuLM9h6AYBSXEwLvM97onXN9kZP7phbfGQKaLCaMBF4tLBkKga5r",
  "key30": "5PUNy22quFFxzuLTXnQeuG6Cn9MMh9MaUa35JASMyP9dqGauGvtMDkuqi2xcTLPjzqf37H9x4W7g2y4wfiZ46jDy",
  "key31": "4QiTuUSY9W8ARmr1dnQtR1YB241sM9EVAD7eEya9HuvVsvLqqAtGPqeWgpCEvegQGGWAeri3PnUo6CwBgAoLfnLx",
  "key32": "2g1fsLb3p9GwEduoVFwjfGd5yCV6nZZ5UjpMgkXsfjheWk4LUJjgQfQKT7kYBAmiTgadX5bG6tQY4FcEJzPwpVK1"
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
