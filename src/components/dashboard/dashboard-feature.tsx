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
    "3BbPDbqYifKEnJ2ZRZUvBNz95J2KLZpZTnmPzzf9fuAbf43QBxxsUULhY3rRPXwFM4A39JieKRGG5QZbzEshfFz8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zPXujetThyGtRdhAwibSG5eCmMDAVhPsySKnyrHRtJuxjbM4GcKTyNeu4F3xF65cXPfx1gBCyakP5RUuNHR9i5D",
  "key1": "5zoBTKjGx1v2om6kNRwwUYPsXyfxpBQqknXwWvXacJsdDyvbyFaMNumHJxBqgs5QpnWhk9EeVzXjegrLcd4zDVVa",
  "key2": "4rBtRxtXvz5EuDd3jGPgMy5pnTed6i4pJaCzcr4DMb8NHTU6oTDEpcbNYtZjkUhGCyX2eMMg1BB2jxNog1VeFBBQ",
  "key3": "61PrHvkWCdFpmL6RjGLndzgTaDkuZY9yq39BmY3U1S7yMcu4c2KtTLBixvpkd9HYex3XVyuT1ksNjvMd1cY37ADx",
  "key4": "3dpPFstiMmvqVAy7ivMoHYSjVLSb2pp1UuDH5GbNnbX3aqA2sz43JcWQ7Hg6nBK5o7WTjkEU84gAFU7V9dSyMQvC",
  "key5": "2bwan7tTtaHhep3nDRjbKQYaUEsFnEYK6p64HXWpBjfp4FJ4pPg299F3YxiNjvNsvVeCYjdLE1iNcn4vsCrE6JHJ",
  "key6": "5vRe9iNeiShzXVjN7QNjmrL5U1u9T7uAVE8JYViU2K9NY79J2FLadqCFoLSYQ4EoZRJis5YWRcrxkhajQJdwk2y5",
  "key7": "52yB5XFQreFbVwz67ZUttexaxRBMkAMWz41CzKjCHw8rjGpMNXwesESc8uDUM1wLBopUXuBiFKT5QWoYx3WT26sJ",
  "key8": "4V9PBBXtJUmpLprYpMXUPjXRJEqYHPpAPZiEYwN3tX8nfGSxQCsP2HZPWfXjZKYMHmaZXJDCtCFe9kbVjpK2vEVo",
  "key9": "5Uh24idWuPRRow3H7w3broaSnLNk3bEbf6tWvHYZoCCiJRq6TwdxZJ2jBXfEsJhs8bau19jQThM36KXJ9uLfvnXK",
  "key10": "25sazfioEZ8X3VPp5tb9B4kuPt97AXwuqE6AFh2C3TLRiULbmBrskTBAfdAB45R2KTZN6nBnofD5VD12Wo2yTdvN",
  "key11": "3LEhGUPeMKuxLWhsorm1uvT5RniL2K4XWuH5EZhrsmDkyEirx1eSydEhd95whxTUNk5SbTJxe1tvpu1q7Sw84EMq",
  "key12": "5AiBBdYEuB7tCedDyzAjyYxVgBeWXcxYe98DdNtpfwRpDznp6D6r1EMJdVKQqvpFyjHKFCHQsFSQA55LyiPAWw9t",
  "key13": "3XcYAX6gP3s4pCzj3PBPGvrzafQDCbDYnp5BtuiMwh6pX6yx1H5W8H6cBLLkuzPHiGiupdvnHM7ZQhs7B3jfdyNy",
  "key14": "44Gy5ia1kqv7D9xXmyYYMTfyxA438b5qUUCMTeHNK4AvTv6MJ6kMJQJ6nBf9VnVW1QdXVHRgxpG3jx2wTdeFzcLj",
  "key15": "4HzQiWbuSabzyvGQG2fsJ2UU4VQKq1w5oCvPVeZwFSGmFrXAneXN16n1fymQofEsPjPF8w4pTxhpwZCLDtqCdQuX",
  "key16": "313WozY6Yi3uiYT2rugKqfP7FVHXoSJvezJBpZQZwDZxahDs9aahtBNnFW1jBar5N71fiu8sSnDxMw1BcDDWjtm1",
  "key17": "5rMuzVQ4KBgW7vFXxBEdSvdCPB2MeW2UwihaSAgtRUUPr5JHBnoTWnD8QozXbMx4cRWsPwwNkWxQs3HPEYAYek15",
  "key18": "2wfWoJLyeUHXTkziJ3iCDbbcuyQwzbw9xrwFhCwgaCYbPHc4V4ksbuAUy833hrKG79w413pgecCEqSaBennhRC95",
  "key19": "4EXKx3A4YYwNkJET5SDsiMTe9ti1j79QuyS1B3NNGHCK1WCFr3oDVrzaMdJUYRUc2texR1NeshwvqswN7XXcUfBR",
  "key20": "4Cd1DgohU9UvgDDcJdYFfLXjyDLoJgH4YVn7KhiFMgguqCzktKE9ox2HsxCzUi4gkasfy9nzqzsDBGGPwA6nAZh6",
  "key21": "5P5RptesEAMvcBzA4pTxHVXx1Nyyf3dBg4Sc7yJGdjZSpGgWRceCcSd5T8dUdrYhYwV4sytKdQgP6BHpLZySDigd",
  "key22": "5gXiqiPybYp2udvnoGdC5DMNetoASb2E8BeGMnTMHfSeVdkPoTMo6Fe8GYCD9DEyop6TZZTRx66dadjeoRPLNsRV",
  "key23": "5cJTau5tQLvuGCNWoD4NH4ub2dx297caNGQomeqxiwkSuWZ14TQwPUjHHptHaj1xSDq12o2efpB9V4t9wRW13xzf",
  "key24": "4HuoAEgCzgNip1hDSY1NkyRwJuAoPgfTp8k72Zf1g3MrmsJDvctTcnGUJgJkxBnDfD9JHAEFgaDqUx2ZLihWujCx",
  "key25": "RUTh4CqUDRcQ3a6q7a5c3EXCaCJVsx2XRurXBfM9WNGdcrYSeMYGiy4Gi1xgHmcwakjTEjKh3izJ3tvR9sU4WYr",
  "key26": "48sGByrjB3HcTrP3mDkYaAYsmG3MmrZM1Xqq3GsAQMGh5LkhUEvD84SDeb969ozSefNhXxqttkU68Nmn8UMAfsKn",
  "key27": "5SCPHTjZgW7MwzfNGv6J27MEZK3GCcD2EEgWht2xT2tVU4XM6LkE9VacgWmTPs8Tx5zA66nV5Vr1xWsC2xidQJTX",
  "key28": "55xaWL4k39pN1Bhxfe75YbCqVSs25K7NYu2bsvwescY41G1qMvtUu3VJmnmZDYXR33DY8QQrB3avMEqbSVDUdofs",
  "key29": "efDN5Pc2RAVJFgQJJ8e6wmfyXw95NPKtADjdXx5C1Uwok34zazmCGJZySd8vAHvG1uer4xxtFaf99iYV7XHYyY1",
  "key30": "32xEdkDxqbB91FvCnc6FQCHW8b4XuhKB1DvAr6udDufVqZfs9RRiAFNaZEfa6qRVfEjW9JDpSGk5Gv8Sm6UwX5Ho",
  "key31": "2w2UWJeR2r66T4QYStoSFdoz2GEZY8goCfTcsDDL5QocTo5X2iRbwAEJ76qpHrw678YsXwPmWfGRRuz2Hv5bNAH9",
  "key32": "2o2p1TiRBbrSSmVeKQAWDRASkuE28yG6HFS8FW7Twvreernq18rYrnwAFfL5yp55Pv6Z8eJEqDhYMUS7NiTHUctV",
  "key33": "3XeorgrSgrukZvxW5SMQMW9VjmNyrH4UNaNx1aN8jUNnNpKZVQXBiqVbSGJpCGXEqnb7thyDNg4MZaRaBPxmuxn",
  "key34": "4YRU6fpob3MQivMa6g9C9rXS76D1qAXVAxkfDZBsX8yn5SAGPoxbBJ2XDAewjREwu1RkH7RA9EpJa78bCWxdpdz",
  "key35": "2LEfYWyoZsyt1zR5wj1eYyTdNWSJ8GpXSnF8nUjcyxzGwKbU7rqXk43WvYotxJ4gh9vjuGCyu5hDLEYKqPBYvT43",
  "key36": "32PmXBqtNNb6CvJnG5jSvBFCwBnf4PudFHjJbuueQDFcBLG2ouvjAsD9z98rfuMyAB4UL7NxLptMXwRuTg5pbg3M",
  "key37": "4ESx7H3hhDCFHYwWw1UVfsFDXZwLo6od3htfzC4pLSqysb7aMENxp5YdrFzFXeLAX77KVzCbqkK2WBUUmMTq8KCW",
  "key38": "W3cPPh21aXzz4VfFZQXLV1g7oPZgJ3FTemJBLFt3rku2KdG5KoVNUMq6vrqMJJ2RFoFihfWrhSkSxLc4rhgTUoV",
  "key39": "4ZtJsrfSWS4j9VodqV3xJ4niSEH969r7sSv3cJRzaHABiY7629KJaLM15FGhRTdisoCmMU7dDPKFAYWrtKjd6oaY",
  "key40": "2qDkCKtnnmHWA3rDPdky9moDQUmc6yTiu81CRAPnFydKJvrECV6DenAc6KBwy1VA6ehpih2nyMcrncj6iz3at4QV",
  "key41": "4UCX7kecLHTgc4RhgNFteWE168E2RnM9nJipTc2zJQGT4t3yQpNpJCg9RXDH9kErvKuortEWHHF9Vzd4XepKVKAz",
  "key42": "3iUDENg9zVDmTbxMawh7M8yeoQNWs6GMQyD4oniTB6C4F8hkPbBqifsBFWBBKC1oHjgpnuYsFWmX9umkaFSDBhzB",
  "key43": "Ebz8a8B6Cf7VV43MTd2qjUABTPjS4QrgRwH4DQnskQU72tfsMfvy1psCe1hKPNYPYZL5KnnHoQS6WJHbznBGboX",
  "key44": "WgbqR2NsBxyJx3FyHbyKRJW9JjUQnHjpkJy5FhhktdZEtExSVZtidSbzAtLc9VffEqtKVCVGXn9AszvjW1V9iVf",
  "key45": "4b6pt54XW7gbFYtTvyQnKKCBGpESfS4YMhMABYYJsAhrfCzFpzs9b1gjJq8HLPexZD5M12KL8ZmavpaaqQ7w8tn",
  "key46": "2NX5RkRk57hpZgiaa2B3dRze2DjgJT1gFHJD3gcJGi9viKaT4JaFJzaos1xRMZgvqB5SvhhLp6JA75Ztw8MCC78M"
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
