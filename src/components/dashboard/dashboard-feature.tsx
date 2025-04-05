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
    "66CkTHUVjr6p1BHJXrLvFKwkzPu5JTGSpFNQUbjGRbqbqAACwNombABktYJBY8icAxzPGyAb5ke2sqpXYtZcKhMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FMjVMds12iZXbQeL2wbDWNSAhCHXh2buAgo1dYRvSMRCCExqMZWcUi5n8wJ3PVxNkFtffWWjzUFwvLzeUerpwkq",
  "key1": "5Kqc39e1VyTkpPGV1iaR56W9yjTuEz8eyRWrJWeHhHUq5UdsVqoonweNXrymdkyzdVB6NiquFy8Gg5RCJuLBte15",
  "key2": "2ttiXHaYHdNq1FAdhSZ5CK3ybNJfZ1JeNURjZ5PF7yimXfD6XwARy4N2gtWYLQ7a7BuFyTu2F355i2DAmo5pRR9A",
  "key3": "5p2H5oX5swWcFDWCgKEK1yW4Zk48tP6dfszuYT1dewzhKyVbfqPPxXT1R8wfUzcWy4sgPYQwvY1sn7Kt4ZPm4Uns",
  "key4": "Aj48g2uzK9VWYGV8pxm8jXB7R4zNgD8Aee8u2whcojNYKpMSVVXTJfHcuuEBfboPjbpef82zPjHqneTMFjrc837",
  "key5": "XvTaC6xX9q6mmCL3jihFVgKpFKYEvhz6bVqq86xtPo7e8YtdgEg8HXgJd2BuN1iNXU9zpbhHViK36pAn5bvz5CD",
  "key6": "3YT4DhNFzX2xUCrYHobF7dBTyQr4DfnySCPoxhJEW9W2szoRxQCTzcvCs2xZmJV2ppanupvbzAQfjkvGgHk1ozWj",
  "key7": "5pXfpM935e9bKPXCzjW48rrcA1Xs3LHS5NzrNYZdVC1hsF55PtSjha1JE1baDXNtpAKV3gGCjTX3oPoGosV6iN6V",
  "key8": "27D6SxBPXafwiNuD8QzGHTPgmv3Q142sSd5gm553sVbxPhA7uEofkt7EsnCHpKSXgvoCby84mGoBZzXUn27ZacwA",
  "key9": "3AoNuh5EmVA9c1iffuw8eYVd8HzMnkjAadzeiBrX4D95FnxZrNgo7my237sN16o2vosZG3Sg45wFki4zP4JMASw1",
  "key10": "eRNN2h1r234omFzTXzW5usN31gYSouuHvwnjy9yZqECSRu779Mh9znmBX6LAjQAMBoqZrJwCunqRhVVQDyWbFNp",
  "key11": "48k3MdE6dTsiKNieAKbL26KbJhg5PMpSPiJN7yr5jxSr3f9YbUo4bzbZUgDUdT9KHMMDYBdL3V8aEWP2ekj1b9iP",
  "key12": "3LHv6vhYxhkESahwWjSDhry2Dv75BB4bXut9iSEwPGyezwsm7u2KPxNjVbv7zzqQTv1L1tcYU2cxpHfnoCpnbkSE",
  "key13": "4nxmxrkvwegnDfcNu7MLF2b7Uxx5ZxT7gzG34Y9HWXsydoiJ1pc3x6Fz2WH7biSoXFPCRT4YiYsohpPBdvfoDBUp",
  "key14": "uaswhnTmazU1UhveFdCmPZ7DCfPY1AFVEcQBqvWKP57d9nGWsN9wkQK9mHvE1b5VqWu3VsrKZfcWZ4MjV8nWauZ",
  "key15": "2FENYYEsAfHjbSZ7QSRQ4jSzVr4darHtWK5JWtLKoDi62BReCQcH1zaKiPGZxtTs5T57Go5RtrCUeotsVrhB6gko",
  "key16": "4zhBfKcmrEJCj7mvQG4TaEmCX9pY2WdABxJP5fgUB2uwh3o976fzdzupiEUwYV1cFPiHW5AcpVvPZtfhwxa4nod6",
  "key17": "fFxXcf4mnsQUcc4axh8ZbUftvG944wXF6gg8nX4NH5hyLWFXotZ96gbj6athd93dfDnEsVkTGvshjWrN4KDzc9w",
  "key18": "23bJz8oZn1YWmrSZWwpwchCmRD1CW5QGRZHg6XUUt1HMX5GxqhNU1MrpK3hZ5dR96BXymm7xefiAzRK3xBifoQfg",
  "key19": "49374szmCH1drGHDDbfUiYKrResaPDv3a2LwSm4Gzqmqbi6XAUC2GpC52zGTbcnkKXBKsGAaV861UFwqQiXN3DkC",
  "key20": "hmDKzW2H5aK2rjEWdcmKhxy1bT8yBkscaJWUK8PLEn5A8LcrM4JnFDPeMFokshG4snq5WWGy6mcnnsEcMvxk9z9",
  "key21": "aWPv1ZA1qGe7hSRajf2shLLq1amoA2ZPJuoVANdCBvpyR3PRmQ5zaziyc6y2BKb14jBfgrdnTKdP52UPTnnzYL9",
  "key22": "2yXTCfPLxrUQnEbj2oYAtbdvRRaN9XSvEq987nA856H5JjQb4eFQTRVcGMCAkUWNDuSqVVdtZpWYPZbKxtDH6Jgm",
  "key23": "3ghzoLthKMJJBTwSy8RdR2cpnMqNKFAMfUFhLy6iQTCTF5uaR9JdRhALSHLyAtvSUA8XgaeaQWwwPHVCNPsWJECx",
  "key24": "62Av57hBgTUanXoGnkgMUkwWfLGSFdTCARPoda77BjfVhWZEo8WFUvN8GFH32Gpqp2oN9nJGPRPiGkSEKdxSPpHA",
  "key25": "3uKCXVyfZV1vpTniT46o9WKFfBR89wQsY9Ebc3oZ9sWfoMbMkX6bLrp6m18frCGqkgV9Qpj4z4jXDzi37fWUh4iS",
  "key26": "3AiNidQBJTXhCegiAzYhf5cZMzEWvaGr5Ft6cLDsY2wNz4aY81WQbef14ZuUAPTNtKtR3YWm8wSx7EZrokZhKUjd",
  "key27": "4WXZsrkfAv5gMqRZdVfz9JdYrA7BTLUqSYzttbxZYKrETPYEYTH8d4GAnNmBG3xX8244ZdByFgpnyp2kfWSS9XjU",
  "key28": "28NT9QHxSTzmpoEKpVCHdeZRikcTK9gJKX3tuKxGQWzfBmZd3gGSan8QbkZ5PuCmooQuo4v3fNKLpYC1xp2ijgcZ",
  "key29": "43a9byWPyaduKcBpqZSxy6eGj5HCkSbbWtBqjaHbff6CWoZGnusaQkkJieSkEPPCw9bmRHpod2buCWFPfzDUdFtf",
  "key30": "2doUxrcPsqaH7wmiaoEZhVvB5CcP2sM5DZG64BDpyCmLSEiQgryL8ErNsNZoJhmqDdcKDxCW4Lnsx4TP9ohXS5TV",
  "key31": "4KTz1icgwt4KkFuGqacrwoJKUXbg36EPTSTVym4yjYyNxjTQRSXoZCnLAsyBSVoTB5EPVkCuyuk7A4Umquki6icj",
  "key32": "5kPfvq4KRxsBnNjBUzkXkqnHAJm7yKAAYxJFsa2wwBdCY3Nqqhv1uMcBmAauvtsdAVciLMLcmrBGWdf5ZSdTC4TZ",
  "key33": "Kw3G7SaGCEWWw5WsKwt75JGbB4NMo3cGxx7XjjKYicdThjJikbRH2aLNG99WSEUsYUrhgMsL4a3AjByUjFtgTuQ",
  "key34": "4U3EcVVG5fyv6YR6GfvdpBQnB6ejKovbn4cBHsTzvhpLfQbcRH7FKfm6DKukKpG9Hka3SLTFUGKsWHtChKwDyyRH",
  "key35": "3xhVE2BoSy6Se3GEJtL7DYrLzBBMv9SFXSU78U7Hu9hSknzCz87dviUF1pPg1LUDe8NkQGhWkPLGEj862WDokB81",
  "key36": "3Gnd3924zH5rsSQ2uT5oPeQa7GZTBFcGGWadR6MskFo3U2BeqdL9Yj2yuErEsp54w4LmjoBeoLZApg9rH2Jet15J",
  "key37": "93cjotHhaYo86ZJncfDCdNub9aQhQWu936y1QNN9HEZGP19mYTqmgUfMgd2n9i95mk7gFo9CW64p6ukjt63eN17",
  "key38": "4CeaAkpibGcnKzzN7C5dxM8XLMAcJehic4G122T6HDwqk1nFSk6Y5oN9u7nXGhM2iKScMyTm1zRYtXdWruWRNLzv",
  "key39": "5jrKYxSc6HUUqEUREsUuRASB8SjvX3CcyrzZirNoSio3qBVgUMUi93mEQZR54Z7EV1AdpXrDay6zS7Xz2nZdUH2w",
  "key40": "5KwAyxmjW7Puxueh31s5doKRXG9YrpKTGhaBhWuB6YmQqhEfKWYPeJ3QjUZ9wj34aXL3RWAQ5CtNBxTwedghYyKS",
  "key41": "zokpwB4RW247AB92UAhpPS4qFmWz1XUVoVu7fcBcUgYjnHR8DhdnA7Kv9wkpskiy4TyFMHJNHF9rjGkhNjFuECv",
  "key42": "3Wh5jUF1MGskCp3t4tAPcm6JieNYKmeBnygayR9N1Tfq3BdF5f495DPoyvjrDgyfoE5KPfsvFjPZy9w6VcqBoz6A",
  "key43": "wwSsvC6p1f1dHaBUXzpfK4VZArBMLMXQJmRRYLdXC17x7admQHbw22RRogzZduPmyBRG4faftPqjExM7ZYXgNCy",
  "key44": "3fiZ7ELgwqJU72nqghHb297oyGXkG2tQS7bJvkGcSUSRJWKm4zmw4PvXr5Gc5UP76WR9bY54miDsNm7MSVsHJQs8"
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
