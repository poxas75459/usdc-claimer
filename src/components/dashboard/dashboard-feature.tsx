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
    "4JopFb71tJJxx8pMFB37ZxwRPJgsgoBgTg49TQ7D5vqhkQRQ1k9fd19g3tz2qdZtDHeFbafcE6f4GZEANvyP4gNT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S2y86TJa5NQ92RTUvXENcciAk8cSUCode4nqrUkmdrkRbPgrsLbeDEvUg11zkhwrsQiegBrW2xuRJmqdL4Mb2uj",
  "key1": "5HG94Lx8dxuUmR4tqsjoVNFFNtjruEazr2z77ASVG5Mqa6RRBsQvtiSFChRqd2MgqEqxD9HSfMJVWJgAHvXaDuc9",
  "key2": "5wxBKgHFfSbCcAn6eMWUAofnwNh5cqM5upaN98hbEH8vgfGKKwK2Y4tc7kwzuceyhDpzrFsuExNkYmcntJZYoMX",
  "key3": "2ddjPXuhCfM7sgoS7NKxTApsxXvKx3jTjbWKjQrUfz6y5VBt8wsdxA3hN6KcS4WBTDVnyG7j3WEgX6U97J1roM1t",
  "key4": "8WTauSP1Ld8vF1DST7eD5u5168zc3UGSozkUYZkxrx8LBR5sQG8mXTDoH41f4di9m1A9V3gbSGX9aFnyKnmGTa8",
  "key5": "4Qiosz4JRVhqVfgwgnNT3GY69wgcgRzY2Fu1bqpRovK94UNCzKE3iGdp8gM3xWZ4iLvFHn46BExh5vVTfiz7UxVc",
  "key6": "2grqR4FtcWLkCbMKcYjuaTBukYneCUsp2TYm8XsNPirK7ss2uW9GkXG4BCXeHB4eN1ELYZdYEPXTASLTa8UiavpG",
  "key7": "3miJFFo929Eqk25ASPJj4bApnMn6bqPfLbWLhcLZY2F257aU5LJ7qSf8X5zLSWJEwDLWFa3ucTem9U6ct5nAfhgf",
  "key8": "9cMX9V1S33d653c8BqQrvUXUYNZHrsWQxYH9xyMpVHPkYQK79nFFT85fDEcFk8YBk2QZZajQzsrNUrKkzdza9rr",
  "key9": "4pPV3Fbsv85LyKUabRdzddCpz2FVBTBKtHVYPb7muB8haBPvt48Es7dUnweGsnBqyiGRsnDHW6xTkZZTQrBGpZzD",
  "key10": "5JgPBx6MXKQyaKCqqroUywShuiNV7Hmj9mhKwFixZXUXm4btMxwGLo1Q2N3pSNoErDAdN5ApzCou9T5QuYXF5tVg",
  "key11": "4dmDyjRyuNb9s3gTAixEptqyXcQUhXGK7UqafsessaDAmrD5sRLSJhJGYaTR8J3mCP2ouzYLokKDgpsq2AFpBgnf",
  "key12": "2HUpys7sZ7vYoBJG2sy5A7psKJaQq1uvYBbcb8iqm4zFF6oCRMQvKT9NUdnR65mVKr5c3hT6KonXJbxQEJ7pr8pK",
  "key13": "54QqSch6bg17KQs1EKsQTvwrTFBMQR1bTnvVkZhUiv95EjurMzF5767hpBNeZRj5oHzvG18o4un4srtrVJ6LX2T8",
  "key14": "2ERWUG59238XvVHrW1vqqCH4Z1NDHXrVBiqF8yNRCu95AiF4A1FyoDDpdBLHqfKBJQrtZa85werPeowCkChZuYAs",
  "key15": "3gqLWNfXXuupkHz5pwaosAe6X5vMMJH82HjAfUbUdfP8biVX9jr4PBNNzwmwcurDAuFcbXK9kC5Mhv1xLxZwezo7",
  "key16": "4ZWbUgBpS6keEqHnp3REC89LQCuQN8pufRYk4kK2vhSxgyBZHCMRaTBLfBbGyMc9fPs3mQR1UAvFxnEVQkJx57uk",
  "key17": "2BgKXH8DEjfGj7zqDrbNT5K3xDEcqYsiwnc2RKVKQHF8yXHCHeaaYaWD5je34zRgtESEczqGFsPdSKTpyPAdgQzu",
  "key18": "5aZ4yDmjNYmRADrFidvyxiWi4XK3iRTRVGTx9r9Ywjemq76F9rsoJVHHy8Cbux5p43KKbRM35bjHxATGBYgjCnUu",
  "key19": "QpHRx4TeD2rsngtFMqcwRK3jHu3ZJFyNF5ziCtXkZCYNMibqW6x8tzASbppSjs9SgYv2nLvvAC9RMrs28Cfwwt6",
  "key20": "3Jumkb3Fi2mgLCYKqHMeir38jZ2sQ2KkqBSgNWGiNx1gKiog75Vo3ADX4icHiprDnhqgBgecxKKweoJCFc4yre4p",
  "key21": "2joSJktYuRVEYr3fSCLVbZvPbZFSjdEHEsAyfhAFLzGqot6nRmza7Jw2Ka8Z5ZQgGaLQ2CmqE1GCcyoQgqQmbKVt",
  "key22": "3A9KGRnRZLqeM47stmUQptpHBA7pbPXG99figMjQSQnnzhDfM6KF63pMUNCZom8fjrspGr36wE7LRtpL3Wq3ozyZ",
  "key23": "3MBUTQuaezmJAepHnnazgr4kWtpK9Rj6cVoNUL7uJqpDhfzWR7tgQNGVCFwef4c64cuBPzC2tNKE7qh6ukCzDxnu",
  "key24": "4gzNxJCh7CF2X9gbPJi5RDajqWyEbU27eDCZtX53BFuz219uKVcr2H2DVk5mG9ErxFo73XZeZ9oSk2VGd5XRe4nA",
  "key25": "5We1Hc3JmJ5GzvjU4A4gb7aVTr91cip8CmGG1QoNM22D6Gnp8f2wSEWqdfGcEYTPvpWssaQpPxECqt9M1yPDzaCn",
  "key26": "3EcQ2T4uEVLXkjjgyvdvsh7qdUwpap47aAXHzcFvgxZeJ33V7ZQxxA3DbQ5ehQ2P8XcQELdKpVcAff1avmktkjHw",
  "key27": "3ri7eApxEo9vuQw8RVu6tfCwhHccFeA1qUzyWATVvG81dgwC84magGHhkaLNdECoKtYmqdzSRo94SxJNfboHcr4p",
  "key28": "21xm6hc5fbUZrSfmC6pnTivxARnDQHHvY11y7b1HoHbjXtEipnHmv7GqyG7RHhViwGnwjkekqFw7VKSpx9yERLar",
  "key29": "3fdQppLZjPkgdG95M72A8hbRY2hGapLRXAiPoj6B7pEDvnhJ68gdc31Tm54PAZQEs1xaBWPRsJCqYrwt1R9AJVCY",
  "key30": "7LFntmogEvtTsR8dvTSULppHCHWePoQnZrzAr6Qu8thcHXu6qCkshBGMnBYPsVdCoo42R1EJCSgyd7svHjocHDc",
  "key31": "4XqF4czzcu8Xd3rLh9ThxyV4D2SfA4ZTGCEgDAc5S4FBsF5NbxkL9tqPC2qFqnjnef3P7T8DcYknRmxe4F9kiS5R",
  "key32": "5dAPVjEWsuWNBL78SKW5zRd8tAoTzitAECNjRT15qwMQuLqdkWXZbp3DfoTdNeKu5cVrYVJbuVtbxaApwCynKu3Z",
  "key33": "cBz6ya2ysWxkq8Ngnv9ScMW7jbDqNotK91DYtffzns4dg4jdNW4kpEquvcgEwyAujpoi4oodeshmh8RWddcHWNj",
  "key34": "36iu1CpRSFb7qoX6xXoZAyXy7nGDX68mxjBehhLDDiYMUFCAkQEwSDErmLx4DsKxy6NiqXgg2zNaAFiPC5y9zN81",
  "key35": "2nXTqrEbwQLAwnhY94gFNFLNe8ePfK8vo6gDm8QMkyDw1p4k77PoJpdYoQm491BwDYom7J8qmnSDyW3V5XFvTjGi",
  "key36": "3czgpaN3nbRTxYX3M84kbJA3Pu8ttTf4MtdoBn77BWMizfrJjSmGncfxyKEovKvbnwDRifNCy2HJdtmYXX6mFeN",
  "key37": "5pxTrEnxa4h6Mn1ovns5uf6hnRwag2B8bi6C97MByevGASDzZ1x6JC87XhvCjtHbYwGnGGvDk8u9Zpa35pSgdReg",
  "key38": "26unHfT5sDuMG8bpTUcJVSNYtSZgjHTVdCbyewrTWK7tdujYrtnoC67C687MhEi4fC3a5hqu1SXfU7hiPVsMWqAG",
  "key39": "4cff6rLKNonSEA4fowySfpho5SSsmfaw91ff55tVSuYUJXe2QMHHD1C1NH4vBDPxU5f9Kf2gT7eJFFZQFub3sCMh",
  "key40": "4bjiJrQBcjZTVnSbSQUM6UJeRt6ZBgmCpLsYdJDACx3NSTPB18oY2jiGmnLVTYFQhFtzvTwAiKawPrpf2w8axw8u",
  "key41": "5HGHyn1DinERd9kb4mge7QzrahyXquCAQir3UggW2mUGyBVjMcwdAEsRVuvunB97kcjVEu3w9L9hBUVHJTXKPu9Q",
  "key42": "2f3p719aKth9dv5So6Pt1384a4jzofAUFEiPaaV6KsKptJpQ6jt9mL8cnv7Y365CUdJtVDGT7d3BVN4TJiEaE7pg",
  "key43": "4dtaMTGL7Mw2sNNhcgm8C2GyyjhKLWYHbo6w2mt9pQ2vpZ9NtR5bAwUby5Bu1kNx7k58N9Q6TBkmxUaeeTu7L25t",
  "key44": "2BgTx7t5asvdeFz5ihbMaWm1NJaKM3Vg91ttLrCFghQ49Nux6AeytmaDrkd5JA8feq5KH2sQBk2tDwvJG5j9z9Yg",
  "key45": "Dwrjcpj8S2F3LN25aBz8NG1NFk464qYt7YfP7GC5Bs7Vg7oo5cB22yBZxufnfrv8PdVdJXcUjCtBfbFocpHiFAh",
  "key46": "4xaR9HcqgGdqJvtcBCu56PXkR6KUZ7rtKxtYJ9pdwW95wcQRZLLPoARwcrVWadwRMha9zEmALV2mczV2Nfsbq3bg",
  "key47": "5CqxeEm1eHE9HSYph4Uj2eyyJwvmEi5BJyUuPeGYRAjfGo2sMrMkghJFH7vdwCoaiKw8SNLVYnXTCbtHHn2dpJZM",
  "key48": "G3hevd2sMd8VauuPSPVU9Ju9Wz6hfLqdvBc8Y6QnVZV7b7XsUTJ5YJBaR6P8r2iQMXwDDa1aJ9pfMy21fCktG2X"
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
