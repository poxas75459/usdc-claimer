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
    "2EDFFEnRrxJaYyTPoKzXL2Sh6DTd38mgKjTkBMYFLCuPmZCShfP6Tzz1XbNGrHA7CXeaZAc8yazh9iiaaSANjQWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cdvQQw56UFccpfQUBas9qdkHr9ipb12y4J8d6tvNeWp567NiGPMFY5WbkNY28CgMorunU2rBwLxWSQVEMEWv2ZQ",
  "key1": "2A3GiwDbDkyrCBUYH7dFjFV3aj7axSwHsyfAun3Vcfpo43Wz1q7en7RGQLJ6S9QEyJoPqEPPwxXgWW2GCSzAQZxA",
  "key2": "DbLZSNNCjXbozYyAfLoc2ALG96ZVsai344UcMHjrBNdthcDkfaBrguix3mAnBTrY381yr6aGx3jkmxuahKumxbU",
  "key3": "sn5XzebYGrUe5Vp54CnDi23NbyAt8eZNzSuzQwRc7LKnGptCsi61o3S9VRVwtoFm4hQQYVemF7E7arTz6ZFyPhw",
  "key4": "5vKuQv3qr2Aw5YBKYtDdjbVSrzxXY5JecJJvDXWDLwrxAyu7bASLVFkjTY3TNKPA96bRGpTY9upfnjDiBCqdGyBr",
  "key5": "64bgU8GF8DHAEVTbuWPP7ntX7hnfEgcYkQ1AsSCzQ4WfgL9VWDNj9ckLDh4pDWSTzpLvSQVGyiUgiHMiTdMW6XLU",
  "key6": "28ySA3heJYveQRyd4TVF3SFtV5MFaKoY7CZVzJ1X3zjCwkrbYrqFCi4AjRgExzdKjoJL1n37dvvXeV5gE2YK2Y1L",
  "key7": "3pxCw36GZonk1mjfq25kRgonZLSsAzQ48ayJSzejMSU6WjUhqAp9JbsZmLm4UBXeTw1d6VRp8FmeXFcLjH117Qad",
  "key8": "53ENYzcP1EwYFKEdVZtVSKQPBtLqRfWegUX3A2rkE9M9f8cPW47h4L7VpyxH2XYm6yHYwHjdfz8twQMWy59WKhrv",
  "key9": "XjqKNZw5s7GHpRnhygjZAqyPLe6kA6gv782PmnQ5BPdYNMMyCZkAT6Yfph76CPYD8nr1F83ifAGYHaXDfYSYq4m",
  "key10": "4H76yKXAKjyWm1Eog347kKSj8xPsHHX4FaaqazoAP83s6n3dzd1kjYXMyF2iDTcGRMJRRx4BPc8B5isuYyW6BXa2",
  "key11": "4rkcaWqfgE4pQrihdViGw6Y8D9hC7wny2EasiwoA7mtxKipZ4xVwZf1xBnxqHqa4ykL7DrvKttbv2s5KNau7R4W4",
  "key12": "A3s4cYkqNzMa4cT5McrzXiiqfQsAxd56ojVeJ87mbr4nWZgz48Ex7w5p9wGV8n9UonHni7xbWv4Kn2UiRfa7fTP",
  "key13": "5BM5sZBYikXfx4b9meWR1nAAEyuqoQtAAWY71ghVD5NRL5r2ggFrdD8xSfDqjrYcsWGNRLFB188Gp2emrux1xAmt",
  "key14": "5Re1msLQ9wNUyZaJ1wz3kCfwqmxBYJTBCJEpbJbpCvTxE9wMwNc4Z17UxsffuNTMEhvc7XLe4LK7h5QeYm6zfXyk",
  "key15": "37yvmgUmeBXMVd993gj8ExYjbvDSDXVncRCEiAcaxtYHcSeyS6ayHURmQNzEikoBpQXr4UHoayqtLkxE81Ys6N14",
  "key16": "3G8WFSYg7gMjdkYALSErFoXxy3EV2UVfwnqnW6XxGMaLmWudB9ZLVQa3tDZ1aLWpT8ZQj6RzapZnryHeJnFSkWkZ",
  "key17": "5h32sUSdAQbfYprLjPueM6vgdNt51EJjSkNLYSzJLymkjE9Yj5if3HwZQMV7VcDhybNaqJRLXEjyr2k3tR7rRYxE",
  "key18": "3m1G18rECNcFe2M9QzW23y8fc7AndC1uTcTb83T6UP7JZEo4dyPFM1Zt6rCYdb7KRKTt93Y3tevFFC18c72aG5Fu",
  "key19": "2DV65cL2t42WhdsdPPesT2YAUWr7g3gVEtR9M7eBJN9ZzPJdy3njQ2ux8etyWCd2dJnNzAXr7JLAGTCgTnvcEoG2",
  "key20": "Mh379EFtBcwroHQGV6mPDpxR28rtsocga58NbJcMn9LUqW6Ts1QfKn5Y4fzyvHCHyHGsUzkwKVYGqCeunzKsEfV",
  "key21": "4zRvPJYx1ZXa68EwjHJNb2PACL5N8YwY1abDYiumq2wA9ohdbm4JbkoLsTqt8a2eAnwRHFDNga7QLNokZz11PQGm",
  "key22": "5qhSg9gcMzY1vss8K6fAG7j3DLHbzmKgPRXXCQuyBayVeZtu47ibiHTCxDALjMXrFcFuQrdjZgAqiLzRucpZg7tB",
  "key23": "4PNQwdXfiXwKFbEvx5z3LPViXAqtsD11BUztbx61NR4a2SmzpxkkjcMwEQsUy7nwWsx8XycFrc1ByS99ZepS1Wfg",
  "key24": "2F7XYDjAQJjjLgkApSxBsEd1C8jwk1X4x3UdkqsqvQmKi7G3H4YTCovjsXb1P54BLoyJFMhCQ4J33tMX9eZtawpP",
  "key25": "swk7coyokHmBT2BXQYdnnNkQuQNvbFJfgTq2KgBxtL1ih86N1xi9zmgJA9i3p3uT5a1QGvaQe6LpcTT3univcc5",
  "key26": "3o63dTXLJyzQ8Ajug28Yvk7bXF9Cg4zWLxhSP8sp1DxPZXjUcz6LHSxCARnzos2PmPf1HxQyEqV5UmJRdqrJB2Rk",
  "key27": "5w1WW4PGaNNbHJm3iqcEpL5VTKvNHeteJbeD2x2skqsxsS8Exac7KbL43Ry236zoJtu6wQuRPaZSjRftNEPexQoN",
  "key28": "48Gc46z88AMBeWqkrkovUNJdjJkYoMY4qKqP4FEhoxnijPHfpEAp5UYRc48dnZtMNxH8MSV9YP7iYNuFsBMtXyRV",
  "key29": "4sKMry339pxJ7p9BBaLZLkxSmbPXcehsy6R7LxR2AcGPkCWCzDo4iskY6CKB3JWxAXXbBMdPtbgvMRzvVepXcEuT",
  "key30": "LkVWyphpJsZ5vDFXeobMHzoLq7dczsW9Fcsyy3bqnLQPeANDVvGRq2Dj2uyWT6tN7SRiePduGabGZvuLb1nj3Nr",
  "key31": "3GLTg45xXHNz42CUWAaZ1Po8zbSLUYdnNrUM5vKQYrXnAyxkDTcdDCWhqXD7Dh1QD3HvPmxYwoaKDbfhiKBLMMHC",
  "key32": "3jiNnKvFeYpXTS29f9bpPZaZLm5SsBZKi7zGwAWpLDuf4XWyBWGwdQ8Dc5sgENG8vhFQ6d3ho6mLRUz887FKaVEX",
  "key33": "5pHnf36ygXLvsUAEYFWknfpPvsYoJqsHrx5JDsgPuYR2kwKBRwPQRwMZ3tSHJVdUCTXmCKA7cNSWfQaDhEyx7Eua",
  "key34": "5frPwyDAYb4si7dzFCWw1W2nrbQTJZ1QTeKQwHfXWyKS5nChHz3DKMBFhs9yvJJfuNdeyYHdrfp4VhewBNLa9wHv",
  "key35": "54DF34ieakZNuLwRwphefZPiEvf7MnB67FGPpEBR7zEL2ZGPU1sTquTYzznruhpLPvonzQKHuFxYwHhpnsWzwDwL",
  "key36": "4JbEu6KzKMxkczh1XbQknLjmaduxwhTAdKPJPpwnJ38g7Ad5MBwV98ty1cZQ4dAvDjy4k5DW79zFHQ2CY1tSC2om",
  "key37": "3KzMAJAxoTCd8kT4ywgL1bezYVNmoFraLKk2Ay4g8agBuDFAAAQxprqFz9hQjwkU2VhpFnmLdWDC6YP7cz8Spnfg",
  "key38": "5rvWsAAS9sPh4nyqQ4ofCC6abaokTwJPZcpv9PLNxPYVrj9ke3usNpFGh4eED2GtX4ZBR3p8NHfkWvK6Nwt82uov",
  "key39": "iS1w82vRaNVHZ36suMdx1DUij9cfYCueimSYqLUj4f3UZppZhevHCxwRcGNw81hgX1SGrNYrcgi8u2PzK6B4Y8D",
  "key40": "2BtJFfP1XnJCqtj9BdyHGJaSWXzAfJfY6qCuVo5FBgde52G3i4wbo19WTKQZzEyTQq7smTMcPGxEHRqp4JCHYwNQ",
  "key41": "2njPdg3dn1E1k9NLpLvGM4bkhHWTXNijWJpM6GAsehGg14tyBcgjHs9HJtK8iPbKy8ETdyaaDeQPBe2vRER447AQ",
  "key42": "3XGkW1pVoaEPeSzSnBwL5bwgM5MJXjfhVpUUyb15JUBitD3A3oH7KfZpQ78msvs8y2fVcKJbjMb1fG1bay8Qg7vQ",
  "key43": "pKWKnJCQVqJ2Xi2ZJ9fGyrMqNZR3tk2dAGk2CkmsmUixickxUMK6GsnQpBSvj8AFbizvE93vd9FAwPS6AtMSaHR"
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
