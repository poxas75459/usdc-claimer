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
    "2FGnpRzA3L5EEr9RuTJ9V5DPtQ54zUvcpQFLuDVXDV8WxhkxW8JURJSMSNCyZc5VioBKxCaKbow3obEErYKqamhn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46tFg6Y3xEKmLvTYaXN4uxmp5JdMsBsx9RVHDZhnersWvZDthS3HD3giTek8TTYyAVGHQSL9NjmBfYKCgFQ2uEsx",
  "key1": "4bRndqxgFGg1VNt6NEN6epGaDNuaS85t9yhfw2gBwqWaNx3L9y3t6hVorqp5Xj22xxBhLoqss1krTVifnfAZ582h",
  "key2": "az2aSFBeHbkj3wTraGoHtWimxAUgBmBcHy9v3nNEGBjW9W12pUSnWt9HQWZ96kMvuKaaCpCLX9M7HBU6ZdePZLa",
  "key3": "3GszSdHqwDNCVGd7sjYdM9vCQ1ttHaFytf2tRyuP4fqngtsUGt2UqCzzCLMcPLKh9AVem58TRCPEa93eXtYQ2QMq",
  "key4": "3ccQDSLKo4YCDFeWD6GxnwWMGecsZ3WvWP7yeWBEXwAxY4tMsNsidjgub7XfMZ3j9113gTm5vXYZiAEFgQKow46u",
  "key5": "4cMyRPbK3GPH8eXipBUwUwphr3mAVFUzUA4JPLSLmQZSJMZdo5vjC3NiKCViiDxiMH9YzVnB4iTwkV9deWk5hQfo",
  "key6": "2zkmMp4xKmFruubpaV3o4xYRUCCtLtYN9E3cx1qakoNKf1RaAEEBvRQ9dtjWcA7WNJfYivKkHiyGLgQDeM1CqtsC",
  "key7": "zECrbJmcwgzCfzNUQu5Ayd4hF4S4dc4Xh2pz3x6rho52LPqbihxHnfqyoxFeBAjmmbBDU9ptikCVrhFHfFbrWWY",
  "key8": "5UDmCsJ8rmS8op82jm5EZb8oWH1x2w5eLkhAwPwEg6jzCaCbRTHYqavEWkrqteS1yjkVSRHfLXHZwupWJnrRceD6",
  "key9": "bWBK1TM25mh4rsAYQrHhZSyY2WDrGEU261jq6Ud3at79fngcUWUGvMHKbf3SCpp4UqT1y2TPywHhHezFc5bMhTo",
  "key10": "4igE1UdvURMP5Y1n4cKmiBi8d8TYUcEhvPqWKfSGRzaa4fwZzefUqc3Xy4vTgdQHzSqwKRDRkBhoGp72cq6FnqJG",
  "key11": "3RffZJHKfJRMUsps4CMeE4YSqUCYVdN9XghubMdAhHwmWrZyzDNMuhRzuMzKNzqKsiPyAKGRzEMRr3TtgMayftNx",
  "key12": "4VB5Q2TUWkYJqGnodyS6NeJjMYk5H1Jj9jr5Rn4pGqKhtGG4avH3FmhkWhMA6RgypCUAxDmTxiGJKEwNSo5PcEoY",
  "key13": "4KT24UBEqCsXRUsp3M9hQqvMxqdBYhdgwHQ9KHubs3xshDpBoCNTabetsMhdCCzvPRsvpF4emnAjQvm5KUqdBRMq",
  "key14": "2v6BeLYiiMeiBur3NTxRR7GScGAGfbXNrxWPYryTJLstzkuQaLy5bpRuWyg8zz8jydSJXyA65KLewvPK7QVXDm8W",
  "key15": "22MeuePkzuF5PCX7kLTNsVrDUZj92YRCSygRUoU34pR6T8GAgDcvU1CLg1EEZfBcyseaag2b2AZEX7AiKXKafWQF",
  "key16": "67SdG3ufZ5Bo5HTeTzcyishgHMAehcG9KZJrkmpfvzEHiD2bbVBWTJKNRvupYnpbPW1MgMhQGejhnuRhsLdkgeJw",
  "key17": "66P8XPtEANhG4SD61eCGKKGBH2Ankw5wXCaDQ8kphDBn6koAZxUzJeU4V65f5rUcw1hdLiTXdHrtTm53WYskEJ8R",
  "key18": "pgvLmRw9UGGpKAhKbbFQzJJBXEVwb4v7vQZAWdneT9FcNqnJd5kNZ11o3QPZHSb2jBmZUDNWwb2R1CYk8qNGYKc",
  "key19": "b2sRtFG8bxDsNhYDwxC4VmwCUfqDdCsD5PBSzMTHGAZq9vyCEUtPMhZyT2QoaLj9x8NPP6X2wY4AuXEbRnKuXc4",
  "key20": "NQoc78exDkmZwL2mWVnmx5Hf6yUDGHNuYYRyzRMxHo3nEm2XbZDp9ndZgkDUbqb9Jir3LWYiLuSH9f5Kz4QCKNr",
  "key21": "2xh4TWDHMMwZZoTpUExW87rdRvpS2ghQK7kbfxHX8HJ7W2nt5RFLL4MCtkYZrke71VPzdXLHZAE257sQSeSJsZmR",
  "key22": "3EfkfzEkq33FyZaxSwLWbYMzbxS9RxWCM8R2eYsEnJkKegB17opQCdh9qjGKzvUBLcBHAgK7FYwojwRLR8VXmLY3",
  "key23": "2cqQJoMnC1zV74FomdsKev9s8HYnVpr6MacFp6XkW6MrMhwDtms2qwFenqnTWMGUfGBxARNgaSpon4ftqrpw1TBQ",
  "key24": "4hbrQLkyiZuXGxGXDBKUgWUFJ4xuXfQLAXSM6pg2244WDGftqSo1BthpLuPtfBkNcpVzv1poG7LGuirEbKyVTif6",
  "key25": "a8oUTu5ZQSGHAMRYmieDm5kuTCGg6Gq6BojXMcC9qk4hpd8L1j1oAx873L4QoHQK21cBdCxgBaMvYzTaZweGKXP",
  "key26": "3MkrZbMqe2NiNdFP1XGNR1tdUDELTaijgpbCeZKRkX6he15D6Jo5mWxGrh1szYeuZX2XzbGzdsxWZtrzXd8bqE93",
  "key27": "37QU61RakCBNkGBYPTJc99cM9cnRgjmiv8MKUpHruNo4xnUBH5BuvgqMHraJEQGAi2Wmq9XNA99RSUUCDVWuD2Np",
  "key28": "4bbop3mVK6tab1d3PiDVzvF7HUVKiBdGTxFCpq3eKCMrwejtuDK6zuxDrTDThCsxc4RzH5WVWqsvveyMT8vPzp43",
  "key29": "4hVWqtxzYSpTdPytpLYQtqAbwUSsdijGFJP2uxkTEfKKQzvSgEAitF316bVfBdUveQqECoR98qcXUxhc7PCPx7jV",
  "key30": "2dUDon4EaZzmXBS3RPuk6g3rmtYYoxw8bD2TiHWFFDPs31R9Lux4U3BgNcF8aKmguVdRwcjAZBQYq5viuA74v3DK",
  "key31": "4MnUdA37AEuHftZk8d8Yk8HZwYEqVv3bpVSucbaa6FDheHBHhRHg4fSgu5EmZnGQ8uwgAW7XwWv7qsmGBzh7avpL",
  "key32": "3WFRnxoXoHkta4o3qqYw1Xxak2SUjEyJHtM4wZP2jzVKrdUbV1zvAYMpRc2ajdWHyBoAACwV8ZuBfANE8au43UPB",
  "key33": "vMBZQG8hHJ8FKLubXek9JZE8jaHTnaN7aaMyecZaNva7BxEdGf8Z9n2g2ru1iALPShjT9epbpkPH8wkHtCuzYuT",
  "key34": "5KqhYQdDLDG6zcFLszZSW7bNLWD4NtRtaMGQrKTbkr17ggTvzVvYiG7VFRzfaPLrEZmivPzeVMwqXTVe7q6ocRAV",
  "key35": "4erjdCpecfhwKk2Nytc2NFLBJ5oZ7HDoc95DJxa1cCzW1LUjNLuK9U91snHHwW1KWFnUfCtucadLqAw4WV9Wjwvn",
  "key36": "3ntpJaBC8m3o1osPC6P5xcLpJdVTb8MnpyFL3r8Q2s9KPaFtCbxgpJh9Az6UUSmktEN7XgLnbaDC8NFyVHkdW74V"
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
