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
    "25ttB7XUCtn4Ki4rzzJ6baCcRJJQY8ppjwz6enM6faiKMjYYrhuzZRpPoVdzAr3x7P5WZUg4XupBaSjPGAnFg3BJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PZ57ZrBVeqBK4SV7gw4rX3PMvkrETgPmkzRCLGReRt9spwY1tY6AJ6RnsSjhtQnkNFCF1Ziux9jrGK4abfSvQvf",
  "key1": "3b2P2pFwt4QJvfaib4zFkk9jW7qhxLG5AHL9D5FdNBCFjDwfmY7QkhxZ9PctvudTpJPkXBpG4JoAAG3TtCGgZoxt",
  "key2": "2k25fVZRJDyMm7cb2f8GP9NbWDJZrrwBNoXy6eyNjCihUprUF2FAMVDZ9C9W9uyXVMkA9pYtnAdPstLjvhruHNQh",
  "key3": "Jmu23a9kHAqH3Q1dLoNJLafb3zLZTCuqKof5icoN7amZqLWrDkzvNfQ2CzpDBS4Zz84nfFdJDakQTvYu6BFQTad",
  "key4": "4ZcSYgQrgQe6o2hdeDFPKvveRQabiaBeoaBQFxmCUN28Y7CPknoUBTJfpDG4wi9jzbtP5ve7Qu5KX7ZV6pNXUGX9",
  "key5": "61V18EbNxEUDDBpxA4ENSGdNfxHKybgRMv6WerN9FPBY27Mirq59mBMmG8BJkMwxYi6zDc9HRJbEoCCTFta9BPS1",
  "key6": "5YfaFPmv8tXPwT3JN3fAkQGLew7TUiP15biCHvtK5Lc5UEcKF9RfTySmWD7xW6yPtbnTokbyKNLpq6q2S1rNg85t",
  "key7": "3ighfhnuTzgZpWMmBD9goQh6fSSRQjfKWMDA79h76dDdeoWdvqBJiboZCLjYwjBT6MrhkZbfr4jmCnx2t8JYjYJ2",
  "key8": "5pKoVLzNpuHaNr1AQzyTF6SeVegmffQSqvESaa6441KiZAjzDPyG9nFZeybi4SAjtzbJGbMmc6rc5KdNJS3iZnZW",
  "key9": "SaTKPoahUE2d6sjnxB57Yj3SciFxZp8UgHQoRdhduCzcuo6YttJwGd6M21TLHv7SiXZ1sYoJzkw1S7wrTuD9rxF",
  "key10": "44YyubHeLGdru3nMtqGXECvwvVuaDFtHP8BCTNWTjYVLG2fpgrWBmri6QTRN4rs68GQRdn2qP9RZkm4uuCkdsDAC",
  "key11": "2wu5NowPWgr3JGV3Td6wmHMWNG3MXVnoMbXFnvAUpmxyRwRAg941DeMwYR6hpCHUpBeW2d9hv4pShXW1dpagtQg4",
  "key12": "2utXs1V4ZkndWUK4sn63rjTiFKKoJedtCDZNjMg7eunSNLjxp5E2FPH1vhXg8fynxMiAoaYgNybdbcDEnkok7s2K",
  "key13": "5gmMHhGE17hhC7q3LHXi4bPiDnMbCGXVnrmCh3dewg8nsKaiJkBDqPxbp5CkrcBiFWcxTYYGDnGFvAk449wUphko",
  "key14": "4grezJWKDuxA4gqvAss1zP9Z8miNRo3xdFXtth8cr328HWp656VoLQV68hoVjDg2EfAMY3m8ztfqnoeceDJBPRSA",
  "key15": "2Xs2EmLMJmkPJafUJ7MVqcYFJPPLoE38wdDPKLYeLUAJRCazBff3PnfLjRPxB7LAxUUaTxXtVXxexiB4Wvo97aSV",
  "key16": "3F37ArY8wvGVPFAXsR9TkqvSmxNTLDapX38NkzPTFxQGkDHc1ZRV2Kjcq9PPETMiDGto3D52S7yAzQecPdbjhwLS",
  "key17": "5jNk2REwj2srTwumQDwoYAVixKhuQf8WayD4r6ynW5jgSeJug59h2DPedZBjzEZQUpL7WkUWwC81SpwX7sPTLfdT",
  "key18": "59s1sU9Sinc5k8XcTrKwFcjYqte8iJ3L7k5UjFnQvbexb4M6R3DwyC6fXcSP7Hgi881UdsfNEcTcKBRCYgNDGfvk",
  "key19": "8r8dMbuXSaKboSzqodgvJRbPUZ8HBNwmrM8eV2insE8jWksETr4Auuwab4qZucgdVHhmQNXZaDQ63SRAjbMUg2A",
  "key20": "2nsTBEbqgV6bJSYCXLqDGmkHmymAdTHuo8HSmGohhv8QBqEpa8wVcp7QHKjncNH6wv7BLB9F6ZSCJHjbwennhh3a",
  "key21": "FcSELGrwhPUCd5RiYP87dcRm2VqUvSzhBTe8JMeM8Cn7sNBPE7L9w4DE73sjUcPF2ZsN4ycNv5d3PyMUsfg3j9z",
  "key22": "S1U6nEa8o8Fudj5n5MFiDFr9LzCb5vFG6HRdzS6q1yiw4VyyVVcoDanEkMqt6AZevfQ5PiETg4ecp9YYex9qpk5",
  "key23": "2nJ5a6Mftj8hU4LEePKX4SHCjSFmMMzZjbsFFiWXMGqboHffrC9Uem5jXo6WqmfYLbvfF6m1jMTp2N9wLVCYmDTi",
  "key24": "pXpRBY4f5kgHQSvhdDBDhF6kKSKks6CKrzVA4c4cLHtsaWMyiH88FgDA6PVscjoTbXpwe1MWMEkuABJ69Sgq1dg",
  "key25": "2knwSmNphNjS3NJgnUuCbtPbxDfY2EVe9ecPjKHXTFNSMXoYuGbvJPnpU3ccgecFnGk7JyCb8ZaHcDYgm1pv92xg",
  "key26": "4e4aQKDwxH8ZuGSzWG6Gr4ZP8XCgu45GnFHL8hSrENQnBYN7MNWaB11UEbFhpifiviZuiLvswCfZ3LWiU7UxD3aH",
  "key27": "5Qvr4rgqBVWs8bPypVWmwGMcKJMV6nrwKSLNJDu6dtYAKgLKGqhmJbH2b1RPzCm7G5VFEVhxP4qSHAERMBMYVCj5",
  "key28": "2dt9Q6sMJrrv9aMhLK2q5Ra7pkGrpE8XijK9YPtKSe3nN61xpyCPqPUCQ5sAB24fpU4Ke6wse7fECGXVuMSbNUxP"
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
