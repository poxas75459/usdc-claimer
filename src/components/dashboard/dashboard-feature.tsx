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
    "4DQRcgXoHsDtrvQtRYQGXGYaS5hDD4qccJLhKFbB4KRM8ysTWrJ5SMdkNgVpxQws2wakZnG3iK94kJkvU5JoJ5mg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27MWr4Wb89JbF1hBbRjuXe3juxbLhKjwojcLyn4FBEu1ymBpjWmj77K2mCGaZ3hyN4TtAxtZUacjPjPdPxQMs3qU",
  "key1": "48YiDSDjBvCwExBoUsAFBETFGP6RPfgbHEH5HpMiQXREX1VysFcvn9j5FsMvU4TKGFtytpAisr31xPYumsJaDj7Y",
  "key2": "4szP93PbKdF2uLKzRrW3cktRAyn7W7AcQwBcSixfsKFPvhXGCTy2X5xQN2t38o3CrXCsGbSETzdVitcCYCUdunae",
  "key3": "5tRzVyuoL8RrmRBvFXBfZRoAXamWPeor3oHv5KBzVVUM9FzUKRcqHvmW8LwPSJdxaVJN5Qybup5t47zNbR76zqZd",
  "key4": "2WHCwhx5Yzyu7YgxEY8yr72RCSLNCrMsKkmb1Lk72dvWtUAHpaTkR5TWTwGRERUoozY4MU75UkAs9CX6bf9wfvBh",
  "key5": "3AmRVTPqk9yEgK1hurFAyNpgTtJRnoNRFWkLPP15RUfa5ZaNrm1JSoz4jmv3RmwUV9zqSqDaV3g2macL1dHZsdAe",
  "key6": "5J6hfAEGxC2QghzkT4yEdjn7GkAwWErn4gjGzBaHgvGNnW431GmmEVAEvpQaXfLJsoyfiGKbRS3hA9shyF87saaq",
  "key7": "2TEeJrdRApGtyasfFLdNBQuQogumStyqeXXiF8uJEEAZgcyEJSWCtGVeSdPRvQJHFS7z17p2UAGQeU7qryNone4r",
  "key8": "4kibaV91trRGqFCRhxvc76GJvTWA28SRjJp9MK4PVMbw1iMvjNvap2PUL23XZurn1CT46yXQVq3piQSWbmAMixfF",
  "key9": "4pQMxeF2DcBb98J26JjJApEfPY1P4zXaWPWdssrQgKBeGBA3nx2nmiNP5ZyYbU9LUom5V6cimHUoWTGvUKTWaEav",
  "key10": "5bDwNucCd7V7Uo65W57r6v2L6vDF2WEth7gwX19N3kiaEvCWBC6qqv5qjg7mpfVenhvuB1z6fbJwPDf15dq3v5Z9",
  "key11": "5cZGyuFfvkxcNhwcUtGvdzsF1fsDTy8AEWtPYDZ7CaiYgyyxpoVw5s9h9fxuEDBCF652M9fVp3bEgwenxc6tsZeA",
  "key12": "4dwZVc2gPqXL8kfGDuiSaja3YETMrLFUsEpgfjrhyJK2FnvpbBcEDy28SEU2DAAKtTfRVSdoJKqpxkUUPvwVAkm9",
  "key13": "AZMpoHkSJKxj1G8ZaDdNyBgw4ci6rSTfDNCoCoNSFLYq1tbfGx5mk1TxkTVjysiw6Jo9bn45QRVxMbp34p6bSEM",
  "key14": "2oiSKQFNgohqgA4GVqhsKvQjFEpPZ5zkJFe3RqXHRN1YTecpUTGPKNsuNszrL99mJed7JpBnpkgFM6MT445rKhtq",
  "key15": "5SHGxW9ZZk1n4ksEoCAc1WXn6MJrEHJeNBqLKxKXtJmkQyWeWJCgCnBEWqZhPMYgjHemEbFBgEniQRNsRyBAkRyr",
  "key16": "62xWwenGSbpakDrwUEHgM6W9U8eSdgvj5nc7n8VwLtHJs8n6dCpbrgyE8bganCBg8TiB1x1m24HEdtyNvokvD8Ng",
  "key17": "47cjPmU87CuEy2aE6Jmb2QkMh1pduNZYadv9byTuFrUXBm5N3T5R7u795TU7KpUmTmwZKV4GGxFg8nPfiBMuQYeW",
  "key18": "RqrZukLdQ6WKUmmLFmjuLZx8wXXbSYRaoRNENTXKzs6xpz6bErp2JUrLLL24gEtZuvig54hYpbXCyVjDgb3WqY2",
  "key19": "2SguJFzPMjAVS7nMt3MMoaNk5qxEd2ybGQZVZdmExyMXMUWhA8wtQGhbt7KhFCoizTYysqjQFTDbearFNkaZX8s1",
  "key20": "4wtTD6T7qbZTRtrDeedimnRSP2DeS63Lap9wL9FVLMbDSQtNNcurnJFFXWL6gSNcBSmHJYiXuuZdMa7NwM5wD51X",
  "key21": "2R9ciKKwcSDnzN135crkw5aqUFWPYNwaiieYWUokZHMUiU6MoDAu7JJAWEmaiNzfnufwVY4dDh4PmzkHFKXe9QFU",
  "key22": "5wZi2eAcMApfpkPHbhEZSKHm22bDVxXQFFBemWjWoZhsB9qkyRZ3RfmayemVhvxFVvPSkrNFCnuZG5jebk4cocNq",
  "key23": "38xeLc9Ex3VckJbxGuwZgNjdFzdQxvv3twiHfsWee8qwGNk4cB5JKZp8eSnPduSHrjR6k7daKfB66UeQ8kGdwNYm",
  "key24": "5tRVQYFYa9zXQgGx4nqmjoqfzitLKhXkNeEnYKAz2x9PSiQDXPbKf3DwsaTrQXXeFUPVRftgDbg9Tjiee4NdVje8",
  "key25": "2c7cNkHwoWHHY3KUAPYS8PJrc9baRgijmh3oR1mWDr1jzi7XtKPapenw9DCKHDgwzfQiZgbXtG7fkqCkvVuDscGF",
  "key26": "5oC7eR2QdtkfHV5yVX8f8iAGbMAhPBiwpFCZf3TrZDm6t9KWty75dr83jvjUrGddBLVPEfghwSDfcYEHgiuW2fgf",
  "key27": "24aaitpvoUTkGjVCFGk4ZMzG3t8pgmLFYfeY9GojgWCBmGbi8HicVCS18XcCHsdFzveBzZDH5Cy2mhH1zo7fg6ZL",
  "key28": "2cV3ViJuLfsSWN1Xgm2a5mZ2EuwpkQTQSxttYc8fQBQDhVraCWdbEqDVLdyppHzQ5GFuc74cKBidKCsusrBW2Dok",
  "key29": "213kWnWp3jh7enVWSEeRivSkz6qTG3eqXm1x83AEa6CQ51npRCtdJs5bBhAZK1torxqjcoc8z8iBp43JhLpU9tZv",
  "key30": "dwoMnvXy65iwfmD2FHLga5VA25DrCrMPcr9xpyv1FKSZC57uXBtRpbCZye4trifjKUCYr1ieEk47mu7neEnvmKH",
  "key31": "2yTgH6VPJezvmEmqvLVYsRBYmtUk78AxuCTaGnpNDvGvbsjhJWoaNg3UWfUsbN9yk7qUCeyAtwyVZumBRHCiF55J",
  "key32": "2FL6DpV4XprsLL7pYvV6VXH7U4Ft1jFnJmUCwuUop3aeKJFbuvWDr7StZ3nAC86j1oKXbqCvnaYrDcKqBun75xV2",
  "key33": "QmQxEtaBUMRdtx7ZMVRXmd3EpznZtdAmFkpa89pmpXFswkpCdmP8zW5xCUkPxj9QN6rudx2W8wgYEoYeHDB3UU2",
  "key34": "2r2SxhBmrw3iRRTiuLM3tDWaWRucdwycLPXY31iLJaS8CrSgiCpv9gKUeBWgeNvKYFBCEHgq7EyvUamqzNpwJcNq",
  "key35": "513mDSRdNfwHabdCrSZrM2j6uXjavHUijD32Xn6z6sKpkmnf9Dzvvtq9mLT657LUFFdZZF3dmZXECvLrrERZ47Mm",
  "key36": "4AkDXVXP5hwJXNh6kffXHW7B9nBPxmiZaTWMhnPkfyDXBfHxB6grSvBpoCCEKawcLo4rddbFRxVs4gUwuXWcTAMG",
  "key37": "5YZfTrd9LWin2qxNz8YBcXJMCZc9DFSoRM8pkhKWCQ6azbZi7myKQaegLuvp6PyjK5Bwf48pizjK3evMQKXrzFif",
  "key38": "qvqT5NUBxVeajPzzsjXYgNubUmiRAnMovEmNV4s3zhjWDxegzT6eAQhNwbesgXjYreb7PCULP6hXuRdqrtQuFnN",
  "key39": "23bY5qfVt1jzvUGgtBW16A8fc47CEcCcQXKk7ZQZriqFJvbPPPugYwJMP93eUHnLPBESbn59PeqZmWC8AeuedSCy"
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
