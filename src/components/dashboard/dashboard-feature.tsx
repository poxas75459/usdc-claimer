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
    "5bMPYDwbGtaKTAxBFzAZdFejoxdaQaRcLCv9iLxvzkA4UZX9LMR7R1mxEQ231RG5VTCYVZt9CE17A2bK1x2BLc7L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NFjvPoyfYwCcH8oYBuygjnY6XiTdwu3wpJEwppHzyBHGa7tVasShf2QNQR9cMdKtYaVHMoEVu5NMqjSQENYsdSp",
  "key1": "389T1oy3UNF27uGkBJptJnB1qpkPyhFFV61g62T3fEC3V5Uo94zWrHHgPsf9DwWjP9tjEiqw7imDoQY6pkifPyYb",
  "key2": "2ZFH5A2T8r4dN1ChARpc5Eu5sNZd9cD8zarf5gPWhvZuKS98QaoLXdDquoukrm7hxnKqhEoYyLpL2aeQV5hifdEP",
  "key3": "5ijPLpywUkkGTenKvQ76QxUCYMj1FUpPjPZXSm1pWE4DGhd8Ss2Eo9QaGg56AmrkVob4UFkkXf4GoAUC2K7hk4qp",
  "key4": "NXFZGnaLXmEWSBW5a2xfhLgDRnhSFbcRct9JUHtjMGF7m5YXWHEVQP7FGBYc5o9CsrmiHKwUFabv3FvoHPPJfxc",
  "key5": "3xhyugjQam7WXE3DZDtQFs4jqVw1WYKyv3YRZrQVyXhvBneedzVkjhJ5syQZvcLoGjRS86sWVXDTPNYLPH6gA7kA",
  "key6": "Yo9qXExb9MVk8CucqjZVjYKkAFM2AXrNb4QqLKTTunLmXYyb1fpPkDtA8LNC8oL6awKZdkerE1AMrDjExUuVJTo",
  "key7": "276fKTB9kLyuBXR3g1D4yKLCH9S465YmSkovGvVazeCa2gMGhj2WGdC8naGMuqoLCWcARgdncFUHvhAhbaayz39T",
  "key8": "KHXydrpvf4RPYgwWckTGMKradKNhir1incq32iiF6zzfEWjYDCGRPbfeyaadc5uFfGpgMhbLbah88KooDowvv4P",
  "key9": "5Pm54g5zP2iQTscW9PDtwjzQVyv2GENTfHUv4jVCB1BSsSLbSGFGqiFVKp6GWUqAtgHyZXUVcKYDs32kQUAQ9bAD",
  "key10": "5oJb5xoBwAWTWGQw4jdmLHrxCMoAqss6WuXn91p6gMPGbHpVqosNPVg8JiojPQPwyzQpraM9S7TWQFwRcAQVPHNw",
  "key11": "KpUnxhc6et1uvDE2mXmeuh11cKW7wSjn7SFAD5KCPKATfxP3NFHhcMCyPdg1ie4znUQu5MwfTpueehDkmx9g78n",
  "key12": "2dBKAk26E8wvnV3RfC4weLVPccTEjEvYssV5DXaQEoqUdKGo4HG8DyqcZeM9s6Kyj2nx1cpymXBXm6puDzNfHzBR",
  "key13": "3zsqriVrqBXYVUmQaM9ki15h3tnpUt7rMEDhffXfSTPuwUUcp6U412jCMbXBJrdf5gTU4WaFumtiSbSxs8cu5svE",
  "key14": "sB7wYhqaVTSU5f5QvNMwmyLPx4z6pqbDU3EXEg8mn9CAeZexxdWH1wDcu7Va7AWKs5RThbbCYpCoEnQuTpADDVt",
  "key15": "5tahPW9cYwsvTcgKXc1CTLRRNZ1S3kmwKuvsmmWgbjiwSmpsKRHDsC5VZrrHbDD4C3TUNykBM2anwJiQMkWwE9Yx",
  "key16": "17qtjSYm3m1Ez7QUjzidVPHYQDmGd6A4CxtzSd3FPhTsY6HesYn4rUXfoXYjdXAdEhUWDTskG6UuPC23sVUkbSV",
  "key17": "VF5My6RT6ktWaa3sn1n4RFYfTv2kGn67CRXGBAdo6GdTJUaoy8cYQV6X46vANxMqcEn3DZzZzwnvnSk86GiqNaz",
  "key18": "5khYycUVTphTRqxVLZLe2xVssj27Bzejzx7w4t3Cmg8Dq4AUZmcsBHrGwdF9BzFQot4Su95aLnQ1WzLBbEAXEyYp",
  "key19": "2RZENewh66nCQNA5f1CPGDPqJ4KHybjhbTNAuisCmyVQ4y4aGeY73ZCjuAJWKY1FHeopnLyG7Wk9earBrt95rM2y",
  "key20": "3kDrT5kCz4Qwi8Chg2jKFyqArqq4R1HTSfDuNA3yGiQBWY4TstrDzwSLoKRnuEWsPD2PB3iS91FcwA4TU5R9KSHQ",
  "key21": "2GMEeAJGYCgamASnHr8rBWZ1qgBFGAVdSrDzGkLoK3CXMGfo8LPR8GWXZTWfWJ1552Ny5cyP3vC83RhrzYJ86esR",
  "key22": "5GQwS4FhxYksSjRboZV9xpKjD8HhHWYbq8Po4CuWX1UfTRQU57ePudYVigaqHetoYKkK4qVPvcMxSt3zvey5Z5dQ",
  "key23": "3FdwNWpknPEaTRrGBGiXpQpDrct6kqwUc3ZDXupUbaZeQ2iAtc8sR2PhGegaZ9LfdtpD3a7cCpXonRYNSphJ74QZ",
  "key24": "5PrrNZQ8qYdARcKheVoJSgcrgscTduxycFNynXZAfPwDrm11d13rvQedNUtr6HKg4Sw6HLUevpqYSZZDv2rPP6mx",
  "key25": "5tqCq4X2HqySNMqE7rEi2WQwDNGBZkXnDfSbB8BTDpFaQLa5V1hrw7eY42f5rdA1rbkQEL7e9EFhZaFphSzHQCRa",
  "key26": "3Ho7zPu1gx9ZLHNeabFhYxW6qp3EMYZfuSfoAtEUwhUYPtrbRd55QX2LRVQRjwAUcmqcrYW6x8RfjFb1h9puJxiB",
  "key27": "3duanobxLLPZeWZcEwpxURMJSSYuMipErVqcxBofVCQvWCUdQYwsBGu6RkDjULfAPvPVXdqdEKMGmBN8EpZP89ee",
  "key28": "epK5uijxXGPM2u4rKp7biHsjVFt8XkoBVM6BfQciWhJ9wzriMS7y5kBdDCa7qpXXETk8sgtmwgc9t8mp7vhR2ki",
  "key29": "574xHhc6jzfoGfNDMgh2HsL3KeJMbddeAcvu6oMoU3YC4G2qUJcnz1vvKrGRddaSiSbWQSheFmR7bZGtvUfqy1xe",
  "key30": "hBFbJSD6M3KhFyWE6G7YP5zoCRYLq3Fu7UoJfwBhnWYNZaLHNPhnK6FqeBrWJvd7x8xHmrkEEqWjbVuvVtSaLKi",
  "key31": "5vts2oFmAhL285EoK4DLNk2niuJy9Vo5XDLd16URuh31PXXnsmgUE6zU7owHoUhGnWFtyXmRWcNHYUBSECgMQZwS",
  "key32": "4CpMqnufezeVrZMNWJ1ddRgJX24YysoggeTsxvZszFqxbH15JWLQPx1RXUgBb3ZVjoZUvCZH9QJV4uGWTM6Scpou",
  "key33": "HLRY2ZfkwbUrobwJJ6JHTRYyRGiabKA5kPdLzAbKyqr9XaK2ysuadU8CtdRbvyXGm9RfvMFCyp7TQg998aLKuFM",
  "key34": "285kRJYrgWcQQg3TU7CrS7XbQRz8T6LdsXmU7UyRN5JzwNepVWjJ38Yi3g4k8JfwH4fcyWxTd4NN1Uf2H2RSWbR3",
  "key35": "4LzzyEdnRuuvL19qBaqybAxcTobSrsV33E7Fm34FJRRWs1eiDPQRykAJB6vxYoypiLtMNkKiJ2Fcnhnp5wderTva",
  "key36": "qam1W5MXgCfEicX8rRoHG1oPfgCSUHpiVLokQmQvmMY8F34ePRgAs4WmedTUhcHvFzJwxQpMAW2iwz6x8wM13hK",
  "key37": "4wXNNAGhwrYvUiDCEJXHdTPmtd6ten8fLjD6chpXGc4GwvN7R4TNEVVV969numSoxaWTvtxnLKEEJqJuqNNHjpTm",
  "key38": "5H7Qsu9x5dhq1YUxJgauZHjqQD3WDvMPNpCjzZs69c59t9N6UC3YNvtdfPb6o1ivwaEBDgpKHoftuK3J7wbgLYcQ",
  "key39": "dgTFNcPVdJ8fwCceiQcaxkWaXTnyWoizTzAYeuBXQZ4u9eafX9wM1iiCJSsUudSeffwkUzFejkvNqVBQmQvRLfm",
  "key40": "4AzDp7sQYeajsBxL1hEHNNhGamEzUxx6W77UATYVZZP1AgSZSf4vSTCC4FnsAQbGytvKiW15kZDAjaHgFjmxPsSa",
  "key41": "dBugDsfM82Kkx1uj8782s2KsDFSNqRRN9M4AB4BRF9NhFVGE1dCRrBtAGZrcYe3NbTTNm38Y5K2GwMGdgvDNcmX",
  "key42": "2fbAxHJrnmbi6BkmFoABPkPosi1w93CrHxWRiD6xWKx6hetqZokLVJCPvxMpYXPtVsaEGxDedjFoU8VSu9F1EwCY",
  "key43": "4E8h87XWh6RKNcjPeAUNj8wDZJJBqa7J1yN52a7WtSWN9SaBYFCY99BsSX73ieYU883nHj4aB7WmC562McC6jcSi"
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
