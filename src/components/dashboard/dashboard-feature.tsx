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
    "4EMupFVwBQvieB6xD3uvH2o8BxWDgW4z3fnyDCb6DQjXGZ8L23roeiqa2P4dmbBm1kYg8cxCV8vLNtEJh3XAXzAA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yHuCio6YjtUJuykoasMHg4YFyypYoLDdWdTa9rzvyqaPk4XWbf2sMGeXd4P5rByGJBiz7BBEXAcmcBn3DHZr2Wy",
  "key1": "LddeLo2doHF6j7xdPxA5TGs1QVTPZUYdYMnsNS1XVDb5MgB366JawNDAP38zq515bVMDvE6aDTRmTiAx3wyP7qs",
  "key2": "35r7vgchogvEmViJ9HcRPrsdXnR52XTvL9VMqBgs3p55Fk8RyuGmrXMSmBv61Mhfk8P9ybxy1wYZNpGcpXdGHoc5",
  "key3": "55nyKJRCGps3JPCgu2bjdTnbQg84nJwi9QrDrdTPCpXkGjAHibECXwSRvZP15QeUF7uisFHVUDatHngocKGzEogX",
  "key4": "2VZTjaCDxWcAEPqLtQtZS99vuJs2kvRfi8nAvND4JoG1f2GLqfU4LoUWhohaFM2QbwEkqbdmzMvxr4T4Ae3Sjwxr",
  "key5": "3wo5fF2du9U32kmJRdfaQr3w6gBKirp3qBMdjacuUCaiCtMkUiBVaK1SKr9xZ5p8mQhRmDeTu1bdA8Vf9Vd7moXH",
  "key6": "41m3eTVRPWADsChNEnv3EcZiHg2yKu1RLGfVKXqkP4Rq4Q7QkrUpY3Jx7QGHar5tT1FKMhp9Kga6WMGcgLQPzNdJ",
  "key7": "2ptytB3x7j5S7n6ZGWCsUNGDkWys7Lt1cYY71Pp7oaVyKQEo4xVyk5M6UJ59QcLj5TXtgCS2zGqutDFpLbxdqniN",
  "key8": "43jELGGAVAvqefAyg4TinsQ5kBugeVFxGKbpkpN2t83VAAzmXMoA2kiFX9bGi6uYCGhyZihVzaLZRjWqzGwzGuSN",
  "key9": "UX7RDT5PNymcAuCs5DebntwgYYrEYmSgTL8GaiQxBMNLbELmnVuWGa2cvDBpttAQ7ytK2UDjqDzhKR6vwuEgGEr",
  "key10": "gER9C8HBymCSEKF5RnzhBvAgKhPwGL4nkLe7TikknmoJ7vpvYuXkw2vWFvRNNMzQFfZhWW2FLtcHbVE3obWMHSu",
  "key11": "jSGWF8vCbhtGLKQdhvfNFXRChpMM7reEW7d1DaXveUpie1RrdSZQC6yhiD87JamLSS5hoU4HsfkQsH9zvafuCwL",
  "key12": "2Ja7rTBUB3rPCnLBhTTWkVzDnmeCBRAAjWDYMH2dU3vbb2ArmECzqK74MFDNEWeemYaFyypBgZx1ju6vVUQJ3UGL",
  "key13": "5NMVcxencay1y61kweyNsZvYyH16Ur7e1XoHvEgeXabnoTzvjXCskDXcY4F6aEewEKnxyp6ho6EGrwC8snWw74iJ",
  "key14": "XmZiN14spy8nsdZu5B1rYGGx8xMPxuCkYQp1RUFXDBBxeScjUc9a6veFphegjgHUUj6SZGhrQh5ATQvMhVwgiYd",
  "key15": "66jEDUz6rEm4Vczjqna7iuSFJ6TUxM4WZiAbzRyH71tfkpC8vR6Tckd3scUvK3YLgcDNvzP2irwHUQ15bsVhHFH4",
  "key16": "21UUWNFTBNe3RNnxYwWRWqueRyc9EVVB78mPW76YnynoNNrjwVCEiK8TDABGYXcnkaE3b1n3K5CmhDX1wU5CWAJ9",
  "key17": "3Qp8kLcA94Qsxg3rigjH5kQr797FoKGU4C8DFDPYAVg78bT21Pg3FfNvDDvqJJvjqpRqAeSJWMJ9gheSUQWNNk9F",
  "key18": "5fisTJEhkywxBm8S3EE9mJa7Nfj9t7VobmyVUDUwLe1ZRxUbjRGVyDSwFp5w8HrWNYUg8cLRiFhJcQTiVW73i9aT",
  "key19": "5ZCjpgEeoJhWKgxujoVVNbNzmpktatQhmbPLCzjdJkDeX49xrtfs2jG3wUfe9axuTCxgr9eyDh5Tqi2HbADwsRoM",
  "key20": "67qJ1vUxXtSqiRhCtpgHq5WnntnY3FsMyDLoi7BVJ7xXMnFWWetGss7bikQcvCHrgVC2fYwAK7mEUgA8ZmtYMN9H",
  "key21": "39HcjepG4Es47Ra6thUjEKPQV6Scz9LthqM6PoehPAgY7GbHhQY4cSTBoeHiD3S18eyV8ysoUB8Ko5QTxZH8Kmw8",
  "key22": "4KaCCRkmXgxhumYVhRwNW6WPCkNfgVMcmog3629rYWzMGzE8KjewmrkQNeMQ2auzUWSJhrQ8Vq1tswtaqRvBpScp",
  "key23": "3vvE7L27GXvyxei8RTuHiv7QKGRBVAY59CUgaCZLpECySg9Tkqap3qBeTKhsC2QqkYpk6B8DESLA35MbQiFS9Sxp",
  "key24": "5dEUkqWQNF1YPKCyXQcA1gJjgVvyNXjoZDFsEAPDzvzhEuJmhWxPdZYdjU97kzBjyAKSygDNbzqzepMhzc9RG3kR",
  "key25": "2Y7h5p1PkSbbnfaW4hM75X1EUPPLaEGgKRiHwAwTeRfk5ABZshN7G4aYSrhdnCuQYtsp4CGWkobdR67aCxSCkCxB",
  "key26": "4imbRzfNjNST5q5LMjukEk39rs8JZVG1Ju48wQqnKrHUzZ1HKD1Vas9ANUUhJ4sZBUL53ZJnDkxXMgQZywPAcpev",
  "key27": "2GUG1dPtY4cpzgn8dEAaGpxpnfeyoZUnfMT4XLLV5sPfh8mAqqxGSbZBXWr1niesUX3bhWV6ybkMCKABd8JaiEet",
  "key28": "42aiRnz8o2T2oHHa82tkuHRpU9348TyCUyYYYvbDoWwDB196jQm53hhZwFyU37AWua7ijSP9wUD3es91XUGs4oNJ",
  "key29": "5CNDeNPpbQx3dAwKErKdSMnbFBVFUVrMdd512jcsU2ztzz2acCUEhB9z2wxNQN4Uz2WFDsHJr43bY3E5ZKBBUf9G",
  "key30": "3gdK5Yq9qG8cFXrKTfP5LtLBVgbUxdrXhqMXeNpGKofSGqjhHdEVZuqhHeEdbxvFr7YxBQCPai1ELvGf4e8E7AfK",
  "key31": "38NVBTPHsmtG7UJGLo1dJ2ojzCsnXSsGKNBNq4MA6NKxqUSMTCYzx2fc4sLJwxK2gzb61rzwvrtmJ31SaRLc1SRL"
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
