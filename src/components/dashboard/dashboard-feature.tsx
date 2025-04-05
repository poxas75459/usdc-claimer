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
    "4FKNyVjGF7KombsY93ktkErzcXv8qb73p84rhuBdtbmd4d6Knipsg5LCP2VT7F7nqdYpd4cYZ3QiVLYqtyiwGdkF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38oPcbQcSRVBhQaVChCzKrqXScAkAJxgZYqtcqrdrmgnGVTxmbNZsr97FQyS5Eqruy6mv6qtsgDT1qZYQmb6aJ48",
  "key1": "5w7a8eVJXeUkC7SgVjbrirM7jz2GN73BG96suqceuWR3qHfyebxc4fCBF2y1kB1EjwZifyFm7Kn5PQ8YAXrojLPG",
  "key2": "3MaUGmra8MWHUCQzZM26CSpfcNLGtcFKEAadXsVp8DYu9ga83SNkBN6v6TLfEUaTFwT23jysZZLsFLenzs4UzkHp",
  "key3": "54kaDTRzRkP9evVwoJGqBiYDsNrv5qVc6FmZjmQf4aY9TFvicSrzVXnM5kU2cgKZSheZp7SHhDLze9NF2JpDTMFQ",
  "key4": "2h6kSNeFXuEHTWi2pHqzzXa3Z3ukRqh7QZ5wFqTENWjtUiBciZb17wBBDMCY7UY47vnjn3M7s6LBwN3nz2xsART7",
  "key5": "XW9DZCYoMV1QZSC162RkkM2p7rtZWbQC9pavmXvurfpt6k69ushqPNsWRtHTrMaWMXxokTJqfxKrcxELsX3HZBE",
  "key6": "492yXunw5nHHKvoimrh9ChS1NoksrDJcjRRgkUQ2XuG1ksTKiFSttrYkup8iv7zR9Fe1ucTzvxXJ4juASsFkwLJr",
  "key7": "3138c17mwPC8rU8z8YykFzptna67WBfbPzTaxWqc2zW4GM9e1Ko3jBeD5uUMGeCS5Pgcwue9UFATHBpJHobrSZ58",
  "key8": "2Jfi1jp7sjivhvWPFtsr3sBjxviY9k3EU7akNQ8gUPak6hjDqwbieeh6dUCqt1vzhcCmT2e2a7ZGB9nsjiyPBcqB",
  "key9": "618Yn79WoYYtZyJ83PxXKx7LWRQe8QCyYk3z34D5YSbG4LNjeF8Fj3FSPXtyknfAYsBzmdbqfZ45bd15kbL9LeyT",
  "key10": "4wq1HJnsUV8tSPmE7hiVb34QEzvPqVzbt9z5puTQgcMLgnWVXqWiGM27FFMERUq9Qo6WQoEQA7MrFLjrJuKnaUTv",
  "key11": "2cDo3TtCjujBb98fCVnXGsrx8BhFwD9pKfz2W8kt8Rd9EbvfR9Cs4cAC2mvGttrAcPnV52nFix9xhfm7Gc5SUHa4",
  "key12": "TcZ7peVAfS4u2AQTaupZrkpaZejgr18B2oEArTDBthAPa4N7BhP4WKDGBeWqB2SBLYuhV456na77gYWMZMGUMZn",
  "key13": "5avPBN54xB5XDuK3QGDKTCzsxxPsmbUr72GALFECK51T1VawpM6MXFPoiaKvF28uLX4HR6pqVBSHo8cGYnUBjGzm",
  "key14": "3oU1LHrmTmDUpcq4U1BJenUbr6MmFauzi8dpPqxVwCTYpDor4uXcR3GSBCSjzgXq1KxFZUvA2zjK9o8VXKB1nGNB",
  "key15": "3iTxSk8GmZsHQCX7pRjYyfcwcycFBeXd77gozgK8KqDnCyribxWxWDQwzxNKJP5jHmV4qh34UZg2rnwWPhSYr8xP",
  "key16": "Btyy4MsZv4CurQSTB2WUyTptq62BiB2x33yBKdfDnAQWwfgbtiJdKqkT6dQAiLSjLXw2cfSuKv4EmaSYVonDLwZ",
  "key17": "3F4dxv7n9vReyDaWDTLf1t2VbRc4izCaHFFqjhUSzFbV7nBHMveNi72xkxoC2tQk5Uvv48sydmZ8k6efQYh1vxKP",
  "key18": "5JY9c6TpB4PipE8Dh3KDmF21C6DcZdGMjHqpQBfmubYsWPLx2P4xtPBXrzWN4APponbzR56J2ZSDKDmebHhTMvtq",
  "key19": "4x8iy7LZC5nei9BHqfnwqwiPHvrbNp8nkMZCCkzhm2niLvKsZxenqVNYmML8Hir34DxVP6d6v8BFeF9mz6QqkWN2",
  "key20": "hMJBao2h4MMLzi39a7G2TCZMshmjjPWeyGR4KM9rUpEm5LiWQZ5g5D4tJwMXKACfBJwfKFDFTM7AV5zXpbPJcUg",
  "key21": "5TaA91mfuqS3K99XfJ3Snc6yH5rjCGf14SetWRSevPB23iTkrCRpmSTrLcsjtZifgwmxufLzvjA8uwcjaYkGrPnT",
  "key22": "2JRvhzLKyFZxmPNaxPiPoqSMB43PUdXhAoVTJy2EWrRwKJrKiqqaGTWQ5pP2kU1fY5cAqgvHVf8bgccA8dcyahg2",
  "key23": "2LvrisoMPALBMRn6A8v9P9q8Dpg3Y9ZmUCAVg6wPw7ncdaRisw4uNpf8umjz7xNYXu6n59g6zTCPaKHX9Tba8uMt",
  "key24": "HyGX4L47TEJJFoYDKrP6X2DrVgraP1xTkvCbg3t1QbL2hsCw44VJiV3yoqpEqhMQDQtCuATSo272oToZQmhQKWx",
  "key25": "53XspMjbULVTDr6pS3PNobJwV8ezLPYKBQ43odfmTxkXkGf2LkPFwHYC2jaKvnMGrSuZ3NoFwotDiJ5g7tC9JEBK",
  "key26": "3294eHCHfYDi1YXP5eJoBFYWsAuqY5u53TcaRbbtNDdGzMdA5oMK4NHmKzHHpnzC64hzRTp5jRaiNQWLhGAMKyKn",
  "key27": "2EW4nQp3ksDabYArCSLzwN3ZuCZvvFNFjePSiBYAjVYJZzqSuDU7NraXsJ9ViVVWYde8DbwRevbCgwVTBjEABNrp",
  "key28": "5QjNKWKQVdzRxbNebAaRU2P56T8EnecQVoxmWbV5Jw78fM1xVD7Xx7Uco3WmFa3d6htEoXqA9TjroYcmKZgWY3L6",
  "key29": "Fx23og2td7RnoEMgd7GC1Rb9rvuDPbQMHQqeeaDvBYFPF7m5hHWPA1YiLBMK9mGHLiPUtJpR8659EVBKzoehGa6",
  "key30": "2ttmbQK8939E9xLYoPmQ2zZ1KouGV8s27oxT2TwGjsShJqDShT4So4ziyfaD335xVVL8XEUtyR974TFFGRv8g8Aq",
  "key31": "3QHeX2odM4m8Lxf9fXVEWKEceM2dRkvaWfsYDhY3g6r2wYfD8g8tCU7tMAzTQNUGuB9vHAcuik6RJej94osrEo9E",
  "key32": "7zPTtFBm8MfQegkpN5MqvEjXPkYVeNF18LSGj9QCvoikkip3QVMQjwdeZqKoAED7aE3R2cy2BundcvEVcV6ZHXq",
  "key33": "65Giasji1hbS8PdBB3PG3aW2aE5nMuUSd2NRMvYWrY6fe1XYohtF8Ahv2yKTzFc2sVmRr3xQ8P678u21iKcQStkz",
  "key34": "3gk76HyaWpTUfAFJQpWTZiz7SWF9mgMUAShQMaTRgp6beYjC8H491P3cWtGQnvPau5WMo8dcj38ZPtSDg8xoWKDS",
  "key35": "hAQjZshKTEvwhgE2pc6aebBpFzZgLLAujZ3D2rE5tpo5JbDxkChDkkPR3HsJ7SHZdidyMzmZCi2creTEoq5TuRp",
  "key36": "5nUMmhGriYYDwCy8hUWr6piK8jnM4VkSRoE2F1CH3AW9SWniqiFuZdiMphBwhvqyNqMwqrpLBAPHWjgCmrQKRdiU",
  "key37": "4XWA3wcDjNMVRpeo4Y3h7WyZ63ikPwWHTSHGU6QrWdoZy7DCAM6YQtjVjeQ6N9uRCjyUGZmZBXBv5JB7bUiTPmCn"
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
