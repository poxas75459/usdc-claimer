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
    "55Geg9N9ieWr12SYxUhheD7hjvWQxRPjZuTSMyViuY6gozdJMG2tX7ZjrVFqWBiiWvUeCzvpBaD5LnBh2a5Zx4xF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d2Mh6BGA56Vj9ShtPZD3hFjBHVpPh5hLTLErDkFxQD1DNFmN7yMe7nXHC7Fs5k33QGR5Vp3ryeMCDC84Mzy8QkL",
  "key1": "47ULKLFpZyC9LEp2hDsrzp7JEujjrhoGhHU2sEUMNhncga2XtxJsvBUtU45UPS1qpW8AJtkP3SJjLBdiCue224Lr",
  "key2": "46vbexXBmc3yorNWZTqP23L3me2UqrAsYXddMr3tbyFKorBupMzEeEdQnbEhU55boebpjiCPxYp4bdY7eQQLt1qF",
  "key3": "5W25L38rrfUFJHG6cAkvtY9LCLjxULgSdpznBMP44h8RVENZycqJKubpMmKEAPRFVhjYCJ3pTJbb3hUbjfpcro4w",
  "key4": "22pszYE7sDgG6Kt5wAuoiYwJgRdd2ZFNMc5evC6VzuBEeaQtjHFyU9sJ6VVxt38tbtSWaw7ddktYBU3wroqwQumT",
  "key5": "5pfrPnnBDfHJqNrnAMWELbpF9jFmfG714vJYm9riLCpFGvSNfaMtx51tywt8t8E2jaTnJcJjtrbU1hgwCb9hvx17",
  "key6": "2SWix6DxMfj2viiumL6ZnrviNGjQ1WLvuJTRBKzq3hMYsmLeq6Gmd8rXdNmvzzuEG9dJ3jWr874nfzPNe6v2viPf",
  "key7": "4ecfmNRGF3uqaK1pQeLeJwkvwjHM1XW6kzNH6WQYud5vEnbBZLD84Typ6tT1ynzqPkhd4jG5JSbbwxkQdbZPJVQi",
  "key8": "5hXH9bEeaGvs4rGJgnStkFe1h5dCKsvUyS8c1A1D6BxkeqrKuz1t5eqzxU7tjbRvZDzFSbJYXaiWhG6Ux8qkjF8r",
  "key9": "66hWyysvtopEu3fCmXGnFGHMHrRAhEuwmSW3o4v3nuJig7meT5uLb1XDcDkYbfYuXNEMDHkTk6uee9z3RGQgEKdm",
  "key10": "25Sqi1Edgk4ty6khGJeH7SHPt75yYxeyoVNPLH2FFZtz14CZnKxDzFJmBrPx1XoFRtX4R3EGL37EHeH7R1jv5MC5",
  "key11": "ZJuZkvF9V4x8cSXjwvsHf56L9MDi2mpUVoK2LR7tQN3rmA1mrc5xTBhCs7BUm4YGLFoYNwLZMha6DSeyAexu6vf",
  "key12": "45zgGKLLWt6pg3wKCVAfQcZXFRmr9bzZ8b85MeDEqtdP3367tWBFapTDAWEbgG6kYh7zmxNVjnku5SoXJK4QgdDm",
  "key13": "VCJgUgvT7TrMpJLmH5YpE8p1BpUEQksswFzWHF6nyx4NqVPJvXXHaX2H7YMaZGM4si51KgPa99rH8fJgbRwbByo",
  "key14": "3Y4y1m1xhuL7ugvPHmgXtSFmgmjTwwBppDrpSSFnyiLjgm5kQURC4bweHkvVWiVtH5zBTRRUJc1Mj6WySGvs2GPC",
  "key15": "jkd5zbhUDkkbvHFEc3ospQTH1u8P2kbseKZBNTdoPFPrFwgJ88Lm6FErBHRwySkh69hTwFGtfUMMXyKgYaC7gcP",
  "key16": "5WecVMTDK539ipSQDpA1iccL6KdQDehNBS4jN2MNf5uwgh1fXvq5ssLTS3U8kh3wp53mRsG3B1ijzfHxSRUnnCCK",
  "key17": "2wTv1BXaJNQaKKegL58kbL6azkZAZ3Do2Tz1YS7E8YJkQQcFYucuxA78g3pTNb7BxUXnuLMJrzgrvM71HsatHUsD",
  "key18": "Jf5VUfEi9qmemyNoaER3ox3p9n4oi98pCCswa2CvM3jQaviBWtFp9zr57Cmg5hd8ymMHfvbYKoLPLmFUs8gvSs2",
  "key19": "3JbLCvpqvfatLCiEzRLGR58uuRRQiihVAksRrusvr7qzrxrkdVCRnWjLuW1ndcHnD8qCM6k48eAsVFtAmXppT9M4",
  "key20": "3gBtV1VvybiJhstZQhDUf5aABfgZrizbzQM7vvWCUbGqhfmfwXJvkWYNe7HPZGEPhMBTLXMuXmgVQYzjNvE1CPch",
  "key21": "25zoEYnryQSZhTpCKtjnp6rK9X2MjDdtfvmeQH9taTryE1i7GVQFrCmsKToDJTXdkpRTeyAzVX4WErZnWYUz1yY3",
  "key22": "8dzetUTHHkoYEHQMMbWCF2JMn7Q19hv2UGhwCZUoRWpUc73j2Chc1C7sk6P51s81ZDt5RvMUvTUZ6TaiFNUX43B",
  "key23": "43qxQJsT2zrpDTMMRFCLLzmMjgCWRsGhhnqdB3Ft3ZWSrSR3gkN8baycriHVGBYduMPCrn4Wvjmcz7Jj3QuVgnXY",
  "key24": "26u85WKpDyKEU4URgWPco1eBVXMQMWB84sRseqpj5UXqyepTSaVRdSyvkY8nkVTeoA1m7GAkAZNTVPei8CkHx971",
  "key25": "4dExhX6jTfRqD9nAJGmijpWvfUxZBfyFQ3VZKhvbHhfFkTKyQjGY4YZmmWY7KgfYVtgrRiE3g41eJxyWZLvFspar",
  "key26": "2iABmyaF5E1NmrAgdLL4E26NaiCUctWnmWZ4ZrHy7cb5urZh5akSLdp7qF9b15XAKL2sCoCcSrE6LaEw3YLn42FP",
  "key27": "5krFp1MPq9LiLvbvwDLbCao4XhtdeGmjJvfy5FZiY7h9RszLFUpVdSFUVSznVmhiWW2xfojibbTtnmth6tQsR5oS",
  "key28": "3GJgHkbr1gHW5UShqwVNDttGQgEaVkFihNTopnKKsvTc4cg4YBar6hx8MT4JBKEfgtgZyiMJhVPgNgyqkCW3f8xe",
  "key29": "8KsBne9RDLF2vx5t46fr57qMEvU664f9MiyCvE1hvr871qYso1AgKoVjD6oYVE7V8FVm3Rhr4WUyjSAhYGKUVuy",
  "key30": "4eHcbUpxeHvp9SRB2cDh6HJDd1fLrVyqxT8n1Jf1w2QPU6HsYvjyJWFJZZkY6w5sYuaHcKUaozmzREowAo6biY2a",
  "key31": "5ypeXo3NqMdfytna3fHpxYN4T4JhXWZN3Gh4eeGoCzwxm2CgHGwWFL62cRfSvyjBiGM9EWQd65e7TQbS2Ky3pxat",
  "key32": "3tzUah9p1sfrFyqnfjfqy8MQr8MdRfD3eowiMXuo9XMJiE4NrWwg9RTkNdJY5NMdDi5TEQWScdpqDUuY4om4PJCq",
  "key33": "2pQfSPa9cYE9qGeFLv8pBKgCrRDHoYcMTpaAfwp9dthH79kxmHs35njNsfUktgZCVXjbtP4oMsjsZGGBrk54vXzJ",
  "key34": "3bmnXv3iZHhyKB1rjtSnpoiJ5iKxHFKSoVv3HLkvEchuAXg6L6vFYB8aKhbxVfA4tPsj7Dn6QNxsJsVbsnMoFNjR",
  "key35": "2nDtHMzmdzfRiH7cBXPb2Yuwv8qeRwdAUzT8m1QRXWZFds3bVAHfrAS1t6YJ6AMfb6BAquANHvfhAY7FAgaYtqSq",
  "key36": "4tqVdHBJB5HanGVcuh5kiVdcVu8C3DcyuKgZ94iNCh6fk29DSbecf1gFmupuko35D8xvjYUJ2JvHWWZ3knL3JwrW",
  "key37": "cn9RF933RP3nr1UBiZbzYJAkmcYwqcixN3oJmHzZvNh44bZ3PmUDqLfjBMQhVQv5nFV3WdbySoNVD4c4aJgbACZ",
  "key38": "31GwhWVbjNthdPSPmXTYdyCL84FJPsT6LEehG1XSgDPgCXRh2fcp1csScKowAQpNcNw46V1TWukz9AJGgwwZ4fta",
  "key39": "5JfRsGNrMJNjgHwTfEGv4jze4ZcWGeXnUdbEsTQzAg5DsdXciny2JpkRvedJ7tazVQacZNCSLWJiahgUFApTWSCR",
  "key40": "5i1JbsV1XwUNPaTUkNQXSkCrAfQX78g7V7ZR7c7kyjYv9YhUt39vjkPd5Nzvw9PXuRs7e4oAyMy5GNqmdxmWeH71",
  "key41": "2jai3jV4qsHQE78RdTUHLG4svh7WRqKS8AFLQhb2TDhtpaT2TAst4srjNu4c2YABjDuMeJA5b5rXRfdDJWVHQ17V",
  "key42": "2rLY2Qr5jJpSgRHZSCaopLGRzDhAtDcgW4R33xf1tkhC4Ym9SffdaqdhZJE3g8vfRkXJnMAJaYf8gieNmjB4AJ2c",
  "key43": "5AiPFEXujYmnUdTC79mD57yAnPUegR7KTefs6Z1rsvAWBBixi9xgoVmSZzLxZYRgHwyfN3nLPuFQgex6CN4ZVoHA",
  "key44": "3j122Mu5e9Z9JAXeQpAoty7ekfZhrHXHUzQX9WnPhBkHeaxQNLZ159rWT53esPNrmmx3XHNBBunFzehPsdPLtNpr",
  "key45": "ZbpgsprRUc37gQrnj2SH4u6vZGAmEipkjCYTJpKf5A4KhUtYRBcLWgAtkpP2p5bqbm7uEyCGoPPQ95FSWm8Y8f8",
  "key46": "XDGJWJjTsjipieUgLcvLt23EXfgN4afxmzh4LoKSR1cG6HxPTbhsgGd2f4JsxRuezvYbjdUtwUcLvS18eWEZQwP"
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
