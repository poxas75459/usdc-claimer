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
    "37kQrZTrUAZpFLe4vyxbf9r9RU7a4R5hFQ6LXiqBsdmo1JrKnvGMkyMhc24WX5ZJ6Fsav3ux8RSmRdNNw2iBz3BW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iNSZoeoK62iu1xZbV8tm1t1ERwM5QspnDC52tXiVUEWBPdBkr4Tt9V1JVHKPT2HYqLv7sYFAAVmEeU81WSHJEw8",
  "key1": "66TkYFAHjx723qrVkz3aFC5E7qeThY2yKut58up8knW25So1DwqzDfYZrTFRqu5eao8qExRRB5hc2vxx919q75CH",
  "key2": "58gPQAdAof3o48jcfUTQRzL5RKABpME2Lo35dTVcD3B6TKwNdushw83TDN6UYrf3wKZQxTWVgDx6Hu7CXCUekjei",
  "key3": "396Eik1Pc1wvCySeRptiMbe4kMNeypR2y9Y657FuFVEnuWekQCSJEzb1BGyUNdB3bGtdBic7tSeKkY5XqxzYtiba",
  "key4": "35L8VT5aEbmnVWZapeXvMHqLmh868Wtx75ZZG6HzQn19MKDJJ4Jb7nexWz2uJd53pwXr3GsJEWobbLF9hkAn2s1G",
  "key5": "wf3bP5y4wBbzbY4UFCJvTB4j39VKgYvumD4ZLM4PtLJ112K2xW16XfenEB5DfZo2XticfbUUR22o9r55jDJNUbQ",
  "key6": "ZLWYZ4KvdYrt8zVBtv8DaLoM794V4vo7suxw2JtVN3xQoAj4ya4U37mMUt7SCq7umpZfh9K8Cko6Ss4icLU1t2g",
  "key7": "4BtmbV4DKoebmUWCzD68hBsAgZ7udQVp2y8cpz8ebijf9BoTzGZQVyBub9bcmG3ovT5ZrKNgheKsEdbAzjVJdzMc",
  "key8": "4FyR1hLCdR7W8yMFRsyckUvyyfxapn8Ldrmd48wBMG8XPktog9sGQeR6q8tFZy6anXaHYi474hgGseojt7uGuzHK",
  "key9": "3EkBVZ6wGLhFxgzBm1TDuNgNrW6KiPjLRkKBv9NbWaBwiVFpPkM2KHppUq9cqJ8PDAL9yiVLYLeGTmHsTuornzGt",
  "key10": "3rBw7s44czHo6awaXxPhC35oSKSewEbLJyCwDQFqunsJaZU4zVJERtTmqK4vraEo2ZEVUMFoxaanC4cpsTFBoLZs",
  "key11": "2pk8bBFp2uxQvvbvaioYrB7EpPKicQexLbV6reV1Y6yG4afjSc1pSxeudL6uTPAmQWgYjqnQ1SsSTUFvRpDeGLnh",
  "key12": "3WfXML9BUaeiwYe2LwnNE38Zza5jqHdjwpFCMnLfA5RjJf97F1LCQfXoopBNfDC3J6nCF3N9p6sFfnyw3VKq6cxm",
  "key13": "5QqpypJoP15dX4HBTzCwKqS3zTLGuuGyAP44JoTLFzbkCgYDCdJvqaEwawuT33g6a47YSURpsH1D1apWozuZj4Eq",
  "key14": "2SR2jWr28Zt4XSezjraQm3vQm3do3zwrGf1dBamuFdqPb1HivmFhfb3GPZM9ZtNHnXmaY7Fb5kYxknJpuoD4fPd",
  "key15": "39BqLh4pFBEaLaws7tNoYboSDKGNAjH8xq965b2DRrEeZyiYS57fnyYDXPUkuuLbysTDmudme2adxg1vzkdgrvWp",
  "key16": "4wjHGhZHZ91DCnF4Fu4WvLC4XMENF5LKFJW5zZgGLC4KNMXuMD4rQRA7iLX9THmLSZ9TJUvgRxX7JorG1mkYTXoH",
  "key17": "PC69wUrhZ8pjraWi9ZEgw7pNapzvDSWabKxLWtyoi9wqZe7y8m4vzbkMYsRgFqy7ooTkXFGLoFzGnyBpabSzw6M",
  "key18": "4of2cqkh58ZpSsfPFvCpjFnsf4Puc2uQeuD54FB12Hdqh9GZUdvQmDdcj9RaQY9kEfscMapTjdGa637kiHniQeKS",
  "key19": "5ZBB5GbtAb5KZktSqxTp7jKtBYrAiKYXk9nLALjLepXmf9EjdhNtUkMAKgrE4gAJRD6N9gfNXV6cZ1XhZgRTJZ9j",
  "key20": "5QozEDatgBvGcE3Y7r2f5UmQsxFva6QzVaNjUomdRqH3rG1WYFBHUyUJoomiPF7xa1Y8jaorwZjDTcTCLRYEtAPR",
  "key21": "3ZxHL59KyGGdbKU1XLUkhbRrHCVR1omtPiT5i82vNbTECsANRd5rveTcJDYQT4G34idCXKKmNfb5zx4TwtGCby5w",
  "key22": "2EzU1Tq86nNEyE3yExYL2yuQhpgdXNiWzaS8yQwsjqYWyxTYr4cw9o6DMi4XMNdTWY7SxBtUBg6XSFa3yYC9x36v",
  "key23": "5StkggPV9wLoHWxsoNZbNMjPgqcYYCct5ewqH4cEbREWRxZkmuCVevzw6f7cvCYth5tYEzypDom6KWJ2j37zADkY",
  "key24": "3VMaD35bFLQ8qNadS4hSdCYThLD27Mr86fenZyUMBLYhztp3wytn4bBRiKxLJuocEvJnEjFfc7LXPfvTmf4conbp",
  "key25": "58uCnbcLW6LS6tYSRWjYQvj4vuekPmzVPwZiJKFPkk3FB8ceqynHRqR2CjSyqihovhgpzpRCiB9DvE2agui5G7wV",
  "key26": "2SpiAZ4qK5Vt7Aym7X3zhRqQCiUJ74bekL2H7NPn4tuhSdkgZU3brAVapz7AK3gUvk5zUUkgGxL7UxADR9aJBhs5",
  "key27": "2YEk3qgCj5kvmn72VhbQhw8Pgd4sFSrSVfceumhfaBZpgLphcNzosZ12M5GdZYunKVij59KjKuLDExinDPDvx8bn",
  "key28": "2Ktew6xuasMnTwADgMc5C6sJ1HjtSqXHWQn6rVPMHeBt1wM4k87BWQfQTLHiF44FEeThMDZviKCXXbQsyCKmggyD",
  "key29": "4V5eebx8yK3X1fPtCmvG5RAbKr73zA7fB56WvP5gGeV14DomCYPftnYFpoE1Y5uSXnZCetCozvHXVLWKCVwgyjka",
  "key30": "45mXYXG16iEhpnvAyiB3EMck6jsopxy33QgiqpZQMaU52wCkNocX1Ydhn2Va2xjyMznbLAH6c4kcCp1J6D1UoNGX",
  "key31": "5tmX4rwHE7vx35YgayQRKn1CsYS2avEa9tfxJ4oGUL34FA7qhS8ktduJp61opRuPV65oLRiGWB64YPQ631vS21d6",
  "key32": "3Ub7VXzHokoRcY9bEtZDfDh8r8TNRz5Tq8jsWvteHmHFWxxnUiPxibteu48gyAXBUKdYZRsHWboeRywR5KFtfC37",
  "key33": "54AaDuhoySxgH1ghsWYjgZFiJwx5ktVrn3qpSB41LZQ7xXvbSADPafuwP9KQsGtwM9wVwDFkejtaEbh7kRsKcPbh",
  "key34": "3EgxKzsH6U2uNHUHThb8n3uuUXY5tp81HTmTrpQTPHmMCcFynvTDtvqLDSJN2VRJCphbUh3W2xztxD98W1554ZxX",
  "key35": "3vCZJbCtAANxoqYpdW5U94yHy3ZgFuSRfpYLKQddQrosfUh1ySXc5yTCrAtLNYb4iZ1Z2ZcqhGf1KjALdkmkbXpD",
  "key36": "54j4xmRSnztdxrzfNjyRkNusMDSxp5SD3BH7MY8KQQwa8LmNW6e7qKmbeP6DCrSx193GsHPgLhuNV63jneo9BeKh",
  "key37": "3wdameHQpjY2xSvj6bKG3JPf94VPZNCF8BbNGtxmWctuVJCMA524tFRgvKWcvq32zavwviJwYP8tCRtfDyXGS3S5",
  "key38": "huDLYSk5Nis2XhUek1SCAWprrvqgsM3b9Ctk8HrWaSUpyn6esAmrPa1KAJ3G21ryWmpazZS3eD8cw82cMD1EYEJ",
  "key39": "5BSagT1HRXNoUhdxCAk2sL7jVReimN59AhmtEgah2vrzxaoBPww9jGXHHp2ENjiPRcGiWiB4izXdrLPx3usSXKtN",
  "key40": "2qADfGZQonN567PMyeVBU9x9ybSpqVtyjxfiAPdzw7vQpGpDc69XpHNW7PM36j1ngbLGXZHfBXHrjP9qtaBxZFg5",
  "key41": "4e2vzKcvxJC1Cep4UyeoW62oFU1grE3t6aQ6zoJq5KTXn2VSAuujAcAXGr1dmVJ9wxfsVAGe9cuWmfkMaQAhQkeJ",
  "key42": "4ii6KpHiEeXPgftAxSDWA8obmXQ6nJvrSe85wkr2KA7hCGbCv93ECNomPqCDCGBdRWHFodfQ5dsPXHKtSpLN3qcm",
  "key43": "5HYSDBrwytZisGQQvn4iWWNwtjaVatJNmD8Y2B1ABgvuhxFWWRLu3m57nfTGGetraTpV5n4EaRXM8ixyYndCnvVm",
  "key44": "3g5gC4sHf1un3KrkHE12aDGhDdbrkAuKJwYoYkgnz7vjz1HeA3aRMCubmHxVb4vEMDR6MLSZd9jezNJaWpE3HTvP",
  "key45": "ADQ6ArvnHTTSQyF2kGyBJzGvuTDthZJEDA3C8TNA465mSRr1KbS37gCcT8fLgSGwZ6jxNbu56vRw8kLGR2RE9qc",
  "key46": "3KgeCb7AT4C2PU2MudPFrMyN2sUihKgPHHQzDL7QPyewjj75SH4JS6F9MaG4PmaJeUyMFx9sDwdtHQqC1FS7LP1q",
  "key47": "vHgE3CobpTR3yK2CoLE8UUtmKWUa7UHkQd53WiRXQnSZBScuEagmmJdFuEh2VDisFFJQX5DAmn1w4RsPn9T56tP",
  "key48": "5rgSm2vgvUt2PSUU25ngCLsGCSA473rzS4ecVpJ97kztsbfEEFZiGv46wvHXxqg3m5eKE4kD1MA4BA5Tr84N8vvA"
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
