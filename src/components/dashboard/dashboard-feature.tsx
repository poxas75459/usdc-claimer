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
    "5ZEswAau6dtLVZNw8wjSEc4zdxbcSVJRSQXmtARi1aECpkmPcc2qZJcJvkK9ZQC3QG3PrVpnELZE4i3fvbS3zkVA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NpLqYcEQob2F9yT5cQGGCeeh2bBMSb4zN1B5mBiQ1DF8ZEo35ZccthfiQquC9Tc7SgYPM4zJN2dV7suYyDrFmU1",
  "key1": "5qHqi93o5qbHyiBsHNcfUsMEYcDutFaUPfJZPftLyqhzmDgRQiiTbJAGWhUqFeJgDD6TZa7JiBzEJzDbveKPQiaJ",
  "key2": "4ZYqhbbWMgMQTk6dSa12AAQJYZgKEHzSMDPrUPDwXVpWTNqRKqcdKHPaEDGfwg1ctsZwwgyNvAop3vJjPpUEJ6Q2",
  "key3": "4nBwY4TagTW1fYCZTr2dYm9ooM7UZTuriiSKyqwb9ksg3kc9DHEdrYPYTr2iSg49yDV51W3Z9f8DWftmxcJoCecT",
  "key4": "2z3qACspyYwiFHaaTNSp3ztPjKFWvZgg4gJ4e4iKZRu1Jb6dv5mBvmfmCK71wsMYCLQkSYmrHxyopxwESwBotEsk",
  "key5": "32ZHsMDTV91sC4dtqSemKTgtcu6VEvnQVkQ7y8frzn1H3eqBebvs6B8cayps7UGEoXhqNSLfCCCYuSnb3GHLBtdn",
  "key6": "7gFSjg9nd5xjC6zyTiEwh47ChbTiQ6osDqx1ozBA3Q2S8Rud1781o8sXCYwhR9yeStpuaMiSM9DLZhU8aRqvwAH",
  "key7": "2e6RservMZaLrXrtAXL28koaYMeQGfqzeAKMhq1bwMkQKRXtVNfVBBdyBtVohMdYsSWHqsx1KA61ey3SFr3bR6VT",
  "key8": "3FJpGadc1BvQnJrqtK8A1UbBfjKd4o9kiXo5TeaB1WawNA9vteRi7muaiyRwAHBpYpL8J4uVX34JgtkU7W8gRvTn",
  "key9": "5VrsTCGRGde39FbsWvc77cjztcet2B9PRHPb8sAMGzmFvCoArKD5XoYp9NiPCLwduypeP9Zi6JQvCNq1tQveJ9TR",
  "key10": "1Vv11fTTe334d1fNj7pa2fKdShZsgu11MGBtG77KHd7cYoVwWt86qR2f5auQV7aUsfPriojLNb8Z1JDE7XmnfTt",
  "key11": "5JQGjHLEnSM5fEAHkgudaMpT9WwnX7vJhx3u5Wz5w2uD8fppVUvGDuq8j7oNFECmXLkzzvkR67MjDQJA2vAc9s9y",
  "key12": "5Rz8hJLY8iRgGimdwPLQezmhrBuzXuBXbbXnRkiVAA7HUvpKaMXrSUzschXdqekbh8CaEHoYDzi1auVBmBcvQ78d",
  "key13": "5j96eQ8H4RKf9HQn3UcCpMrLkXd5xJsPygbzqfCUYVyGkXz3TdD6uuPWux9j2X8QvgdtsxVuoE2ahSFJdA55AX9m",
  "key14": "63hvdCSSDmB9wP52QHSJQVPU48SFYmgEm9HXaiWobvyRNeHewMd4kCkjoN8xzu5iz6smeKQkpyvixCiv3Gn29eLP",
  "key15": "5sdiJaDS3eZSCfPA4SFqsEX1GbuWjMvs2naED2zVEfSEwGfvnTMhMb59iMFY3caayByGhcgVQqqHz8KtWE66PcUj",
  "key16": "35ZQ2EH9dpW2okyF4NiMDWDoPUGXMZZ7ysuS2twxL3Fshnq9MtvRVCBLEfwFAMuE1SjWfzrpz3nm2Yqci4MSRyY5",
  "key17": "4nE9H6ukv4nybhrZpsj97ym37E4bbTtQCfpzCMMC7CeAh2vCjutUM2ZJhihm43tRYY8B5SgJkUqi5bhrPvWgLvjY",
  "key18": "2LCvtNSgAHAfUdBG7TRMBNjY2g3BuDRipXG48tTCH67APL3MZmxWAKQxJkt2yjJ3aLMePPwDn3k4hJwnu1MoFFsG",
  "key19": "4asJwDaj7k22BvsTeMUt69U3KUy9d8uA6eT7b6iarhy8ozVZ5GvSk75uFdJY6NkwHW8MLwKSr1bBiZ8redjugksd",
  "key20": "2majdfhucuH3awCKgZU8Mx5J98otWx1WFWwFYmYEphMn7anLxvUaahRZiFymAZEuJzXXjjDpKBGHogsZva7t3CWo",
  "key21": "i2duEAUPtVpSfRPi9hiYh8P1JCJkxVSHQwPJp2PVTKhK1mzNAfRLUeg4feWpdzdM4fbZWNtuhfAAhiKAhUNGPdh",
  "key22": "21RrK5X8jStZ14RvuagVZuGsCY2nFZGnARp2ELVDJTUhQobxL3z31BApdp3n55cf6CmMxMDTNEVcRnwE1VMaXfL2",
  "key23": "5CwnYXBJMcawZR1gAuQmNG8XVzntKgWC1QePwydueziCeZRe7oM5TXtdT4uxkQqLnRZZPMFhYc2a7kP8UbF5ESKk",
  "key24": "5fihLHK6rDrZS5hAKue5dVyNyyH2NU3bXdRuqV8ZHrynuFgijDMBZqDNyMHNJvXnCwDWZ5DT8W3DugQQocXrACLx",
  "key25": "5HRvx7kT81NCM2sf4mZHGMb6NEWP1GRUpfveZ27d7e3XYgcvncmVz2oF4WSyeRu531ztbtTaNNnt3Po4pZbDCDFA",
  "key26": "B3wdjPrzKFRwoXUN5PpctzhMjWjETncKghGJF9dUecys4i29718cRHyBW2wCWtrjAYhdqKnEZNhxFajbBNBi1U3",
  "key27": "5RPKiejGcVasf9gPmUfSRu87hARmsRQEyEbbbi295oyqwVLH2MrKd9HQ2n7ATLEK63N6qoPiRQRZccuC4PPZjbJo",
  "key28": "uWXKrdYKTL3DzaLDijB7Eha6nzAyqz119DHNcuTuU5x8PNqchQ4bjFZXYgH2JSkm3gk53QBiHAm3GqvRVxcyFHd",
  "key29": "57y2ySG1UFvWtt3cSY6vu38DdEGPULPUQSD4hCKgfSsCPJFkodjn53ZsceUXTpgEtcw6jripn5bA26FUqKb2aetb",
  "key30": "kADhmxKHSAavvUMQNiFmAfVMquGK1Fj2Tg8X4snf9ygDqB61KXkB1cD69YvMEKpCm89QPTW6M79rnshDno31986",
  "key31": "3Fz1eEg3vDVAsobg7n6ax3RRJzZrQb8xG7V4rgvMHt5Ycuc5X516wUarGJjbXziSmwpkgFAprrhDPrWmEFBJjY9L",
  "key32": "VQbDxB98KeaxzzhChT8n7wmPZqx9zp75GKw6U4jtaoxxnAPwMEhtAQhAomHcaXuaBGDvb6wdGw34FvVzQNSpjwu",
  "key33": "jYrBEjMpRuueZDLV2inwY7g6yCLz9w2bR4WGd5b5raXuBFPhTCroJohaR1sk1HG65aQSGnYe3pM6zxJBtLshSgS",
  "key34": "3vGgsWmLGTUHqxt95xiZFRjf2K1Pqudunh4CDMkHLremu6EyHLCRiFBmM8rXCNzusmLGnmcZaZ3LicQUbo34vUS8",
  "key35": "4X4AUwhUhR8udJCxE9o7n9wwhDSDBo58pekQi99pkrBHop9LCSzDabjBUkj6i6caX7A26pG8f67KU8877cGdLt6r",
  "key36": "28mRbfSaYBV73tVnrUsdRUreyKmmZ4Z6ZyTw88mS1boR8XB8jfmRVz7WGR5KMiEH6PNm4g7dkUdhfdnNt22hnWQJ"
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
