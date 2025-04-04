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
    "3nvPH8XSKWFfm5iQRWd5iXoxd5eHdoAEeDJVyMkHdDnsXCSutuaSXmk6aFBsgHhgfb4suDSZwWqDWUm6mMuSgXn2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u95zd2ktwezv78mnRcYbBkY58MYcYmALzq7GnQ9BBaUbwpWip3dnZsWgzchRWyDcZcbX4tvQ7yuKa1h3nTm8vwd",
  "key1": "NcBB1Qkc3RREDAwpq7opXEh1w7QMpPejEfbUs7Ej1S2JvSofsXMNybhwXBc6yoG2sokA7pVTuG7yvZnaoGJdpR2",
  "key2": "51QmMg8H8WhBzRqMLdr4amFpR2oXgYuwEi863bxQSaGx7revkEu9eJc3TmzNb2kovQUUtXsqJSZCH7MkH4SmNKWU",
  "key3": "4R7mTRJrmmmRVBFZb8tectBZV1o8WCo1rA4uPCNgymUprMcGQa6zVH2cWd1ACnATRszEMHt4cjce8MFjK798f6mQ",
  "key4": "3SBQNtrKSy5Hzv9uUoavHGeMPGUFEJnNqWARhnWC7WY1AaXZwEG486d9Z1zJng89T9e9nYvarSgA6qRiKREDc3H6",
  "key5": "2i5AeQDpJxYJ82HWWvJyKLT1LW7RsTtNhc6sWNDR31hmkbFj2vXWt9Qh1rZAmFB4pX9bJJ6MWx8VMACuuhkZZLi",
  "key6": "LV9Wbgba1PFweXwCWRy7PzHVBpaAwAdP8yJrEYXA6J2GRHuXgNNCXmTqeXUX45BBGfJePnZsAbcSU67xKYQavVF",
  "key7": "2nfunHT2rJxy42fy9vJ6Szp4gmS1GhZLDeNTp4rnEK3n3WrAjixLtZgJoMLmRG1kiELkNU6hWLGsSFYi8Zyipdb3",
  "key8": "5kw9frCP1GcQ9pd7PCb4QE9Q9jUti9r7cffxDh6oCkrigJW1zwsEhtmd2fAL2Tkg9ZSMYohSiKVDyQYHFM6mrGwu",
  "key9": "3h8RXp9CLSiCKAN2vjH2mjxJfwrQuUjRTSrweMP6dhkCH8N54PhgH4T2CxZVb1rbh5GDmTHHrM3LGrN9pBbCZT6T",
  "key10": "5Pzg6TKf4PZfrTXPn8scLbtVbmJDfDMF3NJGb4hsiSR8Ur5iCdaNPFCgUamYCdSzGaKdfsvLKpYwnmnN6f3kjf5X",
  "key11": "3Ta5WHKXsviokmmGpcjXxiN3URR15age8VbTPrhGsFoTpPaAJaK18uszkjXTF91JHWmivFxcoYCbEviy9HSFaKBG",
  "key12": "65fKp88rp1sSRE2wpegAMDcfuW47Y982C23zHBsSS3gm7StUt6DFhP31BByLPeaySvrzmX7BD2RTygwy4sqZuGFB",
  "key13": "3v61HvSz3Dx4vLiM3unoKfoLJ51vLkHmomvAcH2CShoE7Disi1CNQn7R1bCqQyeCUuXPYtUgSeXbpurx3Gu1G9zV",
  "key14": "4wK8N1kTo4tscoaQnH2kiT29PVGMWBkzCvCrbZ2y1fK9gzykWN6R48eCkGCgZbg9b29s6Vkx72hZts3cuZNqePge",
  "key15": "4UrbvtJpDo8WXSwXUojuDkqVuo4mdCZioEFds7McjckbPMnpAdFzYrZfNTRLzLyXuJVWdfQdq65WCuxCStG6T2v6",
  "key16": "5ixpLoWGXorCbyETxDby2jz3TTxXY6iCVyGLN6ZPwqa4ZVoXJsXJxCk5gpfsEYVvUjcgVWm4UYCKEGgauKftByvz",
  "key17": "5LbgTkK2FbQGd7QYKUqQ23bHidxy4nEnQXxD8RVbZd3siFM67if13zgQqJuceXt6YBwGi8dqw7GNnuGDDWdxiUTJ",
  "key18": "45hh55Ugedg8pVREHnKNhBH2k1Nk7Lfsy7N5TAM4cxZAMe4pNZUNAh2oZT1WUjDEjQiBeXaM5nF74Lc1NbEiJnfs",
  "key19": "4rKNzEB3NHfm4DXcJAdV9ZW1WhhZa9fU6hsM2C7sL6s9QksA9kLWS17xNZedjcocahh1r7CvURAmshZQsnfzcveU",
  "key20": "3TWuNw7ABbwFPuJb7vQywc5oHiCtku3x1g1hr9ZhWgHMaHURKVu3jYxyzZxAog2ccczV5Hdjhx65BE1K8qj2m3bf",
  "key21": "5oFtc79z4jKnAxvwsGQ1JuTh1mLX5m5ZHjdS479qcSG27h87BGwDL8WBKSGx5zJNXds7LZW9uDmMD99HEAx9MMC6",
  "key22": "5T1wwdmouEzicyokTBZRoVxTjSPJYHqvVx2A15SFcszsZ2AVrGYD9cyp7TGxgQdzEYXpkhT9DGQdmVW9wnu1oEwt",
  "key23": "3gXYidEbUhZoSo6bjY47DHCbtwqf6M7KRvq6Hq6oxbBbnq9KMVMM5dCZgxJd5RSd3Gszv4esW8y1enRxSL2vEpoz",
  "key24": "3LqBpathixWJQSCKJtg3HvzS9pPRUMJEe1Sf6p7XzQ3zET2gV9CPRQuNZfoXXm9KNEMYNR5wqw4p5BXm6jsGR36",
  "key25": "5itpKnoHTRqYpG2CTcJVaDSBv1uHKiphYi3re3HKwUyAPHYJD8RziKkPu1of5fFhqoGQ4QndmJ3TV1Va5acQxs11",
  "key26": "34CVLMbwbpiWU9RxvPD9oqXjkCswEVnxVqxvZzCE8nDwegdiMGEVRXzpUvF7eKZXwF8YBQiNhrF9CqHq11t2xjqi",
  "key27": "5mon33nuPjYLswxMzgKXaHWVXoC5UTatEz78UcbHdtbjByfQp7H9gTJDgH3B5w8YMjPf7eZT4iUm6wRLBdfVqJpc",
  "key28": "4uUgLhcK8RtboZDUwJgLYtDJyZ9Ws6KNrqb3s1gpe1Baqc8pmpe8ivEprAUhjeAagjnvq7BUUDNSzoMnpbMgKFnQ",
  "key29": "3hsf3aEpLV8pLt1qvtGe6Bsj9q5Cxw69VYKm25JkbHHEJZDYCFb2kYUNdgSk1mgrLczG7TAqT4baS3nvRQKYwBGx",
  "key30": "2wZXFNE994SdMnrnY6ZeLex4kCQoMTYJFTMwji7RJvGq7Pbx5nFZrwZusuZu1eW7JpYgmQDfN3Qj1fnnk6K9mDip",
  "key31": "5rpetE1QB6pv2v54RQS6uiVKGzUtWXzykDbAVWWLste7VAbswm1TFs3c8u4JRkpU2hi2WSwDJvsEx2xg7vEJKEbK",
  "key32": "2idUqouw5fqwEJLoKA15Mz5h6jVz26oqHzga2aqbqW1LcrAWVEP7MwxRGCq7i4DW1pP7bzfjDRafcV2hXGh1xYEV",
  "key33": "3agpnDsLEfh1CXbXZrVxPNdN1JJFE5vyEBe83uLdeDzVy7KkitEQH8J5Hk8iSC4nTiUk7FXLZwS5UUHdknr3fbKB",
  "key34": "m4eTpJHxkCKU94dG7mP6AaXywb6BNzZFnJRzFanoxPPrbAFSxhP3GhqTXzgiDpT283DRfPJPvU2apj73ToeY6WT",
  "key35": "36BBEKBApRCVFKCf3caEvyUXAQNnRxjS85j97N6mfDFkTorWseFnwGxSFgkj3B9GV5GeFX9LHDiLHzZdEHe8ifeG",
  "key36": "4T4pNV6ji9izJMBEqW8wTdHWVSnzK9GZ4F1gPwFzPM2GJNJgxfGbcnSnvHuPMPrPRuyuBXKgrfSGDPt1HGZ4hQoE",
  "key37": "84RfYjKJVvjJnZDUZSJCeXsyGkDAH4YfVNNFQxztF9bTe48JYAnVjV5LE53a7Hsv1THtVnRMCcJtCg5pSbwkhAJ",
  "key38": "5Cxz5HYQ9mv3fRwnzQy2QiQRyaKQozsb6dhrDAjLuRAke7EZKKmQ84seGV65jLaURQd3sHQaPTS3JUd31tv7mivo",
  "key39": "5RaHMoWUCbdX47ftbWD9o1xnJcHKzuUt5wiHAbNY79tSh8FXYezDvE59GaNX3AMjcwxYFDokDSzrjW9SrzbCBbP8",
  "key40": "4MXK5Pjzx5tVcKYDQZbKfMjiopXkgVXAnEXNWqLMGdpGaxNGRnPUmsB771nhvrRzCCsUyn1tJCmeCxxK2JktvbBt",
  "key41": "7hRD8FWpYKSTpBE93m2zHpRxem63FhjvV59vutydEQtHUstJnXDAMtJzAVCqYCB2atkN6tySJUvvBDXe4MzNcfX",
  "key42": "36BXWyAEaevtTX96W3GUyrfV1hGS2dV8U2h33HEB3gEYG7R8TMdr8MBWspKzp3U6dR5n5jTcS7oHNA5k8bp4ixJ2",
  "key43": "4ZYeUGdcMg1Y2D9V9o12w8qdaxUN1zBVR61bGwccQQiwCmMTcHfwVq1xi5N5kW7EKwBCfPDSsPuEAic1GXZVEycr",
  "key44": "5hJsq4njSgUbXfkHzv2SuAPdPyQxN1NrMWAsbopTjwkeMEM8DzYgbLSXuZ5pPg8481pNYBnXYUMiYKiYQya8cWzX",
  "key45": "4iEeyAbizpgbqHEwdEWhf8tAwNRvUfyLYYTpWBsAfaLD9dREbyrARpUoZJNBzet4Mi2FjeUHsskZW4EjzBect5Rp",
  "key46": "3iJMoHTRvwcdhXYyYCAK8nbg3jSYWDn47inPydKnRAxLLPH1pByHg5weYWvQbPxiZaEtZbtEtKHjwB2CuEVV7Mos",
  "key47": "5R7wz4v287TkB1SJbrcTsSmSyrLtAn1BGvneeTGYkJ9RboZWATa6ssex15fKthzgBqpY7cyu5JJdKDXCg1jmm2Ak"
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
