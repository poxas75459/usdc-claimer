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
    "526skCiobi9LEyXGZM8zv4DW6Ncrmjsp4xkhW57baiCLkUAWoxxxUHRxhRdqfooJsXs1qBLUVb5vnthnTUYMsuzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xriuc3bXJiEjo12DFuCarDRGQxv9JryckJp72XAXuHiR3GD2LAoECXCummqU4uibHgLWLLPFC12hupyxGPRAMRZ",
  "key1": "5g2J3wodpB6DZjJLyCQHDxUbiZdADo2E2VYQYD9rmrG5G2Pm8YZUhHrsPew4Aosaq9jH4eMiK4EAboQ2MLV9eosu",
  "key2": "379v6W6NpXbR11qZTHEbGC1vvgEP1NbDB6WQz4CtUo7vETJVwULqWX2ZxmgdEvEn6KsopKew75TRnw149iiRBiXR",
  "key3": "2Pt15xEgzWgdyhnkj9EEEKB9HYWs2sAaYnDKFryy1wApVtnJPaTmsiSTdAGdu559NXspbKwRVHvH53SSB4F6w3uL",
  "key4": "1vRDjzHpY3ydTy9z56m2Eic5tS99ePQq1vAx9Zf6Uh2BuydgBN46xN2574ViErcTZRFeXNJr2J9JTTXPfjoWTAn",
  "key5": "Tycqsp2e2qyS7KNKoxyy9PGz7j9ujs1iTddBXd2gLGnBt3KUXGhjki3T6iUproMcFcsRwEP8YxnU32jKwKCYXGc",
  "key6": "3osVaVrm1fD9P4RC4S6XKtgixtFYiQjNMu4QyseCzAkG7saPQvwFG3neK8TfG4DZpt7S9zRGv7MtAX9WfrKo8SVw",
  "key7": "56hPsoj75XsoWNx1wSMu2EFfKxyyGFu6BmXB2thaNobDrsL9L68SyRQiQvgAMo172FnhDrFsyf9UAvhjiXLuNCmw",
  "key8": "Eaf15BETZA2h4McXnurcSLr5fZakfVNwRdG9WR3gZ7nXuHGkpf3FYJFd4ivBMwaWhdepywuLftzinyAcJs6yaxg",
  "key9": "KrWAg7u4LG3FLP4G5MZZgj9BwiczKhx5LyPpozcaAmrjhAbf1cqpGSbST6NR1CUUhYfGP2mjhagMUmK9MgRVe42",
  "key10": "tcWQMsT57zmTMbbEJQu1MuQN7wHkUpxgYERS7i3u7BzxDyRAMkJAxPGuogY3i8xW64WTzKp3C7umQ35SC2UJFDM",
  "key11": "faywfHrGp78SKi1KcY1S22awvEkFi9M7BWT8FtWUB1RuviynU3DkSKtxEuK63SkE5SmesEDV13guhwqMyq1L6FY",
  "key12": "3w7KKPqWVT29i5EqZHqaizdDAkL4Gw6VXnjHi5yRaRxJDiEd3VBZizdJr1QcsA1D2UwUhwpimBjTmgm5EA9RfAWS",
  "key13": "49oFbyRLAnCstikDNHm8WJEyTAwb8j9AncT2CCJfgnhdqZ7x8bfz3vk5PNYKQFrsPezm2aQXpRzq9ghU7Zpxx2zd",
  "key14": "oGY27czpoDrmVwG6o6jb31V455X1RCtMbkmhGN1ymkePxNZGY7svAk5VnP4ZeUobKTthTJbq19B2FCaxt5ohsoz",
  "key15": "3N5nHdALrmwfY6ExKce8SP75Hq4Qtp4xryBM5oZzQJbuACJQjSJShMjkdHXW5DwAcYKWjdytdmPATdKLd7u4LjFQ",
  "key16": "7t3BE1qtyjcXUGTRuJaA2T3A4tdTjychs2k7PqSuw4eH3eBWA4QjvrHyNVxFKA4bMQBdBDDQWnUnWmNnuSyWwAn",
  "key17": "2qtqXWot3U78jC3R4Dh7nEQsCgZN9Qp8MiUQW1LevmDZcwEYXmL8k3JNGn4AyGGhZsHeurZE1F9pLnQUCQFSEdAP",
  "key18": "2UfjdbcqSVptkmA748K8s1q1wr2K6BSKZD9CYZJUKMkPzxhbpekAezYEwdksc8LTb2JQdV8Rc7QTHoADTuqSirtn",
  "key19": "224xazzZN7MV5Xcx6jS95iL6QzMonWcYH3qJTeJZbkWQZcBKCA7XZb6VgGHdjh2hHuHBEPmsaVcyjsV6556HVZxv",
  "key20": "UnyZTS3VXGkQ37x3TjfdjdVgkdXME28dFAvnTY6wgzDCiX9zazBD7fSYskFm5YL5dSFV2J4mbFuHQ1kDNRbpQS1",
  "key21": "5ptHA62zkzansxhQRHhWoMEXkjemyJqDvWNTThJhGfrMHGWxbVT2T77iZHy7BQ6MZbUd6e58ZQRC7ZMzoXd9bkvS",
  "key22": "55Anjy2yhVbo9hNAxypTQtUvEyVZ2FmjYn8tFaksewrmsgggsSzJescMfr1jSFZvSma8e9fJxfy8KH6kSeM8Bcgq",
  "key23": "4Qo4J5dVuiPuwjpevit1FgaoBSnTXEK7H8qCptd3WDq4GiogmYFQr6XvpqwuSS2x6Z2sNumu9v54HZdTgPCPGAZD",
  "key24": "4e5irHjaQyFFjejuN5WDJ1EnefVvH2Hq97Mnxiq4fsMu7RGcbwZQPRdsqtBNPvj1kPj69UoK8AcyrcjWuYXQWY59",
  "key25": "3R8f5kyS6feCKDsk199CiFeEqz6d6pm6etYxaCN2qiyVGWdxdbXPX9uFCjNEAyXgsZ9F5fKEm3ivrZL6EWQmFfEe",
  "key26": "L7mMH1KUXTrwyq9oyGywaP4VH8bHWrNZT1sfwMtkxLfuGgHLit6khSGrELWeLGN76aGyNhF7rBgW3StZvELizna",
  "key27": "2dquxCTzNCp5ve2R7kCC4CJsuv49dh9juPHREE8Js9o7DKJcEfg5zXFF8rcDDtDNMYKs3Sg7TWFxYBx5mPEsKmv3",
  "key28": "BYCDcWeu6XKaKyNoa5MubNADcVVHso4phDdG4tZScT8BHo8Z8YLQgo9Qa3Xv4qa7wTcFiPxihfXe2cuwGvjo7nL",
  "key29": "3nQDosXrnzbz8pGRdPnRUqTCXQPRXVSvMDHgWwXPzW7XFY12AixrWswffhZvTCsQc4K9iv9f3BUerED8TeKHtvz7",
  "key30": "YZveKCzcK3nWFMMoPXmWHE17GYQ7M9N1DdJp4gGdnwYjxEP2qmN3ZxoaktCGmgpgKQLqQxtBzNhTnbAeXkq86Nc",
  "key31": "3tFkiHdyYuAz7YRhU5B8De3C2Ry6VFwFL5MhNpPQ8x9FuVQGf6YTs3Tujgfb3SkKbqy8GB3REvd1w6RFPDr1Kqh7",
  "key32": "5tWX3BDaFAsFtLnvRbejGFymttEoT9ZoCsu9xjX9oWmt4y2otHMjspCuWDxzaZzQYwFDpFMY8UngjbXiCtqWN7DG",
  "key33": "2woiGEKyyVnio48PUUHC8QXQZqcBDEiF2bAguN7eNGCSFe4DiVL247dJuyH8x8Su6YCSTP5obS2xe3nKYX2LEbVM",
  "key34": "4JhaJprx8efFWkHs9cNS9K2UNfVPdTpF89RNhjxm5DqydBHwcSSCRTADrXxdQoLRBfRU5bvFvs9xWsQneVTEbV1R",
  "key35": "3kPDJ7FVXTMHSmu7533rNoYxgoosMjiYivtVQJxgTGYwZ4qs4NEv2ex2X9tQf8WGG7LydJNCtcGkcXq5CeU13Zww"
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
