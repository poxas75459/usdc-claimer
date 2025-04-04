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
    "66ZW2v7G2Sfxwfb4pnEed4wHCPhxfdsQLtEhpZdQfvDDHY9BXXQNTii4f5RU3BQsjp3h2xDfD6weuPmCe8tQ9ybv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T1kr3ZJgi5hrZEKKLX8HTvt5sgw5P2yDAKx7eMuy6ptZhUtb17aDmyvPTXedJBAMx3nPbb7K5o9qVTDUnN6qsG1",
  "key1": "44nPdqbRoPm2mEjvduRzCPNyY9sEsvgLfUVb7kvMwZGwHMvHEasbSc7phhRf3Nn2GhLy9ctNGUSpX4XXGA4UBphT",
  "key2": "3VNgVgiJpgwsxh2QfXYwWT5zuDVMMM4qV9toW3cPnqkJ98jbMacJf28voGpvfAndg3qb3nMPfxLWXx6BJqCw5LpX",
  "key3": "5Pbu8XcFZMDsgdgEKzNeJeuBfdmcTg2d621ppPbNpXX7JT1V1m8UeA5N747AMEe8BXpyHngtVcq4Gou4qdRSeZ1x",
  "key4": "3SJB69Xj6Dem7djPzPJCYTZfb1LtQZEwFhmiCZ1QSNkmUnnFSaFkcQUCMuGRyGFYvNeXLg4Aw8N2FDXsWy3yaGvj",
  "key5": "5C1tzaSdvxBHKxwJbn7TPtJni2s1Nqpfzo9bqj18fkMh9dqDLWL2wH99RDFY7GubGtRcmYYu9jFCbMwahPwJKPhE",
  "key6": "4ts2WLG7jD2TMvkLp6dY1Szfzb217LT4C9DJ37GBjCP8wGxaZC3V4Pnn1nTR5xiufD7VdEg9P96cpBvWYPao1JBF",
  "key7": "5rHjrrrNZDXs2EsmR67474ENKo9LrjS33UEUJwmuxyx5zpoFSkFeMZ9knDbssBcX9ST9VgKiLPyDZLyj7jonKnGq",
  "key8": "3gy4UDCjHKTBMbSo2wBrhBGBfHJjceiMcopF82M7St5p9JJk9DygQMrZDcz8R7kEDREoQCbEcUVJsjKRA3KRDDMD",
  "key9": "4iqnR2vtWffqgwLJ3hhFtXyyykeLxE7zVHJJUR7NmuhupEWzRvAPbPHPiUSBx984YLSEsHD11bbMCAoanAeXKw8Y",
  "key10": "35ojAtbbBdA5pTGEbWXSrP224La7UzUugrc8k2L5rQ3JKtZN1ZgpS2mGJ9JsXzfxNVKChFoKEF5PJfMjeStsuy7c",
  "key11": "3c9ZwPEdpHZnT2BbgZroKUfTMECUjdNqUdp8hAG7pje7QGULiBfCWR5zAXdyf1pofddk9tfQjRKbwCwC3hbrspTp",
  "key12": "3ARw92ADbZnqeHfeVi7FLjiHQGdsZP7oQuYg1jhGVRZs63pB9XsokYFULUV4bvP9F9LkX1mTMs9XaBk3YJ6bM8o",
  "key13": "55PzF5S47waCzVuBjahXmwfGgwN9fqtm6Py4yaN9iJtUyjudNPVHb2sKY1VZs5BTW5JfJJ7KnkhEbuekUsEjNx24",
  "key14": "4YAQFxVt5ooxtwZXedzxY2TER8h7UpC8W6qKxBRbk7HnbSUHT9EpHC7eDznU8NTLvJ2aQLxDTv6NwQAjDdwdGSiz",
  "key15": "VaVm4aWoG9Y4KWBxY1nn6PpgERrnkVae35EhLs6erVkJpuFAM7JGGgiZgVA8sRqj5uN9dg1ufX7R549L1Ayg9Kp",
  "key16": "311tbfYmHnuaVrCdiVySb7RDG1qbChpRm7adN6oq3JeC9wH32W12soJ838PxWxrcsH3YAXDAhfHdeHwtL6mTEWXe",
  "key17": "5aiSvEv5CpjNSykEq6Y89ksXEtCvY6WLrEv9wC4oBZwCaHsaNRHvpbiUpBoUjEpq1sQ5MnL8BHsBsbqWgRooYBdV",
  "key18": "3kf62cb7hFbpMgebDY6Q6UAo32X65XzUDqo4mBEHLYKm2vW2gpP4mHuwwuuT3LSzAakD5W8AjA9ecCrZhCT36nz8",
  "key19": "4qSoSSK2298rDMxvQRnHDJXsdGwzMNeutVVw3ybd2c1aiHdgx1tR9VPHr6st7jKEa2xuiJj47gXfgodLGMG8tkNA",
  "key20": "4WzXYGqQwGczc3gNXT8xGPPnpFG2tGm8mZ8ENHGjMNS8XoQgMP8wLfqsHQi8KVzFoGatiSyAxt3XRCCQucrhDnv4",
  "key21": "5y9KWDDUrvMHvpscrCyCzQC9Ek55uCSa3N12LokZF9wVoiJ2mBzx82TdeogDg17qQRYEnFsxSDVU1dRGC6VyUaZq",
  "key22": "41dK1hAxCqBPJsrBac9dLNP5YxeLpn8TAXreNtfmrq1exqE2D88ep8qWmcJXvszqkMeq6LGoSQufrwcBGyttxv7w",
  "key23": "2zA6F5MCr4cnN7E6rs5xGSsJCKYJWfiaocoxj5NyEuYozeyMjnewWVAhPFtxkvkqmsNZktZ63UXJLQ85dC8zEeLZ",
  "key24": "2YNMT6eJxM3MwNKUaDBNBeAMWuSRhppK3QF7Ufaze7wH4n9mKeADFtdXpHk8Xrax1K6dbT2AHn5Z8LZTnCUN4SJX",
  "key25": "293xa1ywE6tMfh7srKqjCkjEZU9CHv2YkHKD4SvZs91Xh8rP5HKsSKu9aadzkhjTSeqbB3GfP6d2Fof9uRcmAxW3",
  "key26": "49k77saDzjSYktxmgCoAJLaQ148EfnsgzNMjwcxLZrzXfTuNuu76JkyRexgJPLrVqNmphavR3DxU8Q8ttcQQ2u2D",
  "key27": "4dUoiof4wNhW6Q8eD6B8epjAZGDPz5FwXXSfoAdMBcjyZf55gaFKqHQJu9wf2R3VxY6uZneXfJXfa5eBUs8setrL",
  "key28": "2uxwYcHJQ3fzeKq1TWZqVdVimg4Wpi8SMp4HmK4nG35iUibDi7VWtDLUPxVWdLzqma3kAM3sHEE3jDjxJVhvsoSV",
  "key29": "3veEBNfimqWBZ358zd2DG37nZnVG2gSdjDB3fJZwQXwKe6az7foGH8JaAosFb3o61uWRxDoTj7PDDdnnMxhr1Rnv",
  "key30": "25fGnay6sJ4fd7RsEFS6Xw4qfD73Ei1Ea8qEa47EdzHH3QY9cwZWBABPRphH99RrXJ8LKTo2JZvxiNvLBYvuxgGn",
  "key31": "3ptk38cP4xuHF6Lg2yjvdmx4oenZWFbCvdxQdJw57WGMmA4A2qd8HV7JdQFBeytYrNgcWM2DaFx3sGvd4yNoiuXQ",
  "key32": "2rGoWVeEqLQ8Bg5NGWQbVsHrXeonQsrAQKUXdhBFxEe7PEFGM8LmosrfBAjfsXwK9FW9Xw7HzgXKb5mzy7J2fcsU",
  "key33": "3io5QSH7hiWdYNgGAEuL6jmFtkasby4jfiDneqR2Z5jtBCxRdecit64p3d6tFwjUam2dyEk42TYBm4E3gwuuoSBX",
  "key34": "9E5PSoxUfGPZhhDBx4h1Bu9QaMCW1GgUF1T28HJVuGJa4pRmiMAELhMspyfxsZsHjweLvbQp2BEMjvRmem88kDv",
  "key35": "5bVS7WAztTSnrKfkX42QW1ysZKSsHzBcawxsHtAh4xZqJh4isXPbzAS3CBob1EsLSpRGgjnocX8eJVVdJxQrBxNc",
  "key36": "5Q3uibkgnbigHFwFhnnrGUBMsQDSSRYjUawadEniB8N5ShG4f3ZHvDNXV5wV3k37sbkWaZQv63qB79biEiJyNcQV",
  "key37": "2wJti2nEvg4gKwEm4Zjz5QRXxBdAze6mr62sjuZP4H88JXWMiFJzg5f6VdGwDcNCLpnA9TPbY5wbSRYR9KP85GC8",
  "key38": "5eHxEEcinFZXnsWMkETpBGyTi49D7y4MzrxuTQys1adxbASSAZ48taCX1LHH7oD4smgRaDo4uAXvHg8uK1bjP8r5",
  "key39": "4Hmiqyj9hrNGYNAdi9LteUiTjLfWFKtQ86mMpi8drP9BLUyPmANdqa73DyPH3XxpCNeV4eS53mHBLUAgwM569iyN",
  "key40": "FtWPo5zJZnyPyuHykEV86nrShoxmaRK9rZVDAMQiCEdSougVKVaYvX5stFqo8NzsDGV8mh41aWUirAECESJEPCd",
  "key41": "5i2Lxuis9SVySgxiQ3Q8g972CAs1P8bj6biMGfPqH5iKjQvVmWvfMs9Bit4RtU8y916h2jpEScSGHF9upJL2mKG7",
  "key42": "3uGZ5onnFnLQRUegnao5pyxK59vz3SVs7aC9dmYr7cBZsWCNJLQ9GKSzNHEXpnswCj5zxJjbj4qjXXSP11TaGjwH",
  "key43": "5hhBmvmMxQe9DTXfsvhoyZiMu9KBDERcxfucfxEVqNuDCAJ6GTySdTDt9PhRgdyTmZybKLvAvhVDzqGjXPPoJn1x",
  "key44": "HwRFY8Lzp1Yt1pBcyddvJLsFTrqHCCABkzSe5HwS72RtXrq5iLFi7bMg4jT41ifgM17h252SjATnimYBvtUhSF2",
  "key45": "QcJjEmH7J5bRCAXq45StyRhZGKjSBogCmC1kFKKmm5TK1JpsJsMWuafTBW438Bv2SsXz2TRPhvRqa3WWu9izDCz",
  "key46": "5FjxGxyoGNDtBxeDfivsrG4m4XbGujJAd7u6NP13fcEDWAAgZd6LARewHAekZY4PFu4nJPtU8a53xqyDozH1DzzF",
  "key47": "2tFYCz1myh3uJbaQqgfL4MkvUy97t9F5Z15KQsjQbEkC6Br2MfgGR1cRknjdAnGoaX5LgNnLq52X3PkndQmbHeS8",
  "key48": "5eii6DEoR2HVsEx5hRHAf1VTCAXbiyUfDtzrXeyxsfi77PP6mZUSAHzkyXzAcvzFHP5RUFMgbqYRiyFyQmHsJFEs",
  "key49": "65JrNTYDEWsXpvnVAP6Bm1ECTMeFtgFnuDqEC4J8mtc5f1yCT9fSVz3FUcReNBmvyd1rDofLF5UnJeVhRbqHK1dE"
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
