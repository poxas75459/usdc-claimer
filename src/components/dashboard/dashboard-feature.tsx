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
    "SWSVRYGG1JVLQTT8E8EcSF6Jyie6jPBrimVWQqANdixgYxmYCyTkCyuwnrjQHLrx5DfM9AMVvD5s4C8Fkv72JTj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kaY1ekyDPLYLLAXbSGQnRehGCunMFVq82eEqK1ptugDvpsewHnqKWVEiQT6psZU3ZKtU3ZyZBkmt4X8baxLcqX4",
  "key1": "665NSuYJ3UDM4MDkaF37RH69oSAkQkYjV3J18vARh6vvVd2ZcnZg78KPqMBAqQs86Muzs2shDhqDDnBGEqxY3K5U",
  "key2": "29sHUKBYEXSqcStH7FmWJgrQ4mitX5khWLKepEBzFVR1sNfnNmNkLiy6R2rPgc4wsgkTg2NZCKosFUp7ySWZ9Y6D",
  "key3": "fXdLqHJGeGNHHbaqkEC69UTa2ZK1SzBsexxvHC11tLNuXjAjtFUZuvhYgMHQwCPENULiingEN4HJPG7JdEhUap6",
  "key4": "2vKZa3Z23M9YnzEvNfJ9RW3o8EVocvejFRg8AKK4hka8rQfqbpwBdfeJe8TGGajWHQLqQyp1WZFhr2jyZvZxP6uf",
  "key5": "fMqxpTRCafXbK5icTkue83yJUZHCSuY71y6VLrtKdWRhF4kqUSv8ZaFYfyPxfgb2AV6ayb81djcXzLzZAKHCfyU",
  "key6": "2iniTc9MxeXsjd1KJAJz3FKpYxvts9hMm59DyGP9At6Q1LvfubJTymdWdDnDhA8DCfnoiRa2s1CzJhBLRscKCrfU",
  "key7": "3Ai9x6kvTbqzEQsU92gvZmVkJh67QH8P48AUZ88j5pDA9F1qKyJWrGm3Pg5pxD7EaNcFHA1GmLhxiCrAYhggvPiU",
  "key8": "AhhMwhQNWd8LpjeJ1Rz7UBdyhDfE4TGf3ykYPtzZyyaxBMAxCG2pNFmaR37Ag9LqJCGLbL3dq9oNDFyngVeS2ST",
  "key9": "5iAHVK3b3pMWypHM9NbD63EKFcff5Yf8TZZMocGuN4zXy45Y3DeP8B9VZa46HsVwRr6YnZkzsrfvGypxeXSCFkiM",
  "key10": "3woCkmcBBVcsS8i38TXzw4FJPtSXJBW4mdUSpBLULLpkMW4mUDopAmhMzxHWVwqFuHDWeb54u8ZB719rvMiKGpHT",
  "key11": "CXGfMTAHUbkwY3RtWWgAshF5pd1eeZGhd87WcaLitNUnr8mZ8vZruK439ex3JrXe7rtViqicD3qdZB9nuxVAcDS",
  "key12": "3qYqW1WZAVNKpHy7VyKy83smWqHjutUSuB69B15uZkjAmtNe74RtcC9HNCxj6aLmPus4Ytbfqiv3cKfBUMwuBhBo",
  "key13": "h5vqEogXYTUg52a3RT7qTw2bvEigwMtRjk2eeJPo96YUnF4agJPLH1WvtgVcKCuUaFcbA2pdhEdx5TEkaPc3aCY",
  "key14": "39VH5RUGKLw2okWTEiWfCWeNGGb1R4b5UqFCCwggesE5Jzyqee8q1fAcnshkwzxFt48vEfGG2gJ1JogU25JuVbu2",
  "key15": "QnU2dNGDke8eGoDUtzCepuavf5rJCyyNf5aLHMmXL2ibgoYLumfnERJ6HhjSuBtX3G39NmDA2hXQJAHgWDsT3WC",
  "key16": "4SuyBvcy39KNNRMmFKBSH4FASyefTzWsPJsrUS5tUhdjyvjxbp4qgG3SZDzztXuaS8aTCU5sPsJbq1HqpMZqGGVA",
  "key17": "odcNp2DhxjyyVWjzipeKGGNjpoLoADTMxmm239yTyRGmy2rEs6ZmJYpCZHTbj92RbmvvyXJqrbx1dsRtczhWWM3",
  "key18": "3B8N9YfM57r63SyWKGcFTfZ8nQ9iapbPkvt2cneH1NPhtkEjrhfPejtF9pL44rB9bz2mG8fP6D4kuN37DK7K7pBX",
  "key19": "3SHfXcdB7PSGrcHx5bQyAZYYDtZLmZnL4KfCw71BXMFnEoB1gP49JptRVSVLbkNdjYHz7y1HxwHnXhtn53YBBjmW",
  "key20": "2Ft647FhJSBrqRKU7U8avrRuUi7RUWh2nWFhSsu1jd2FrzjgK5prdmyhnPkTifppVPVe2GHrsRhhgdiFN3T7PiFa",
  "key21": "3upPaCor8rxyzBt2wuWg5XVKNshmuwKmnghegxLQqTsnXRcNUoax4CnMGS4Apdgn7KX3y14RrWhW6kTyCkCPNiPt",
  "key22": "4RnBxark23UTEVaVxAAGDuKnTj9PZMihWUSVXJfZU58QEYhukTBtWuHoYUi4cxs9fRyrbzrfG1ayQfPLr9CtC32w",
  "key23": "3MYuX41ArjHtrEELE3CexfJur4ukgiq4EcZ2EJBaMh5bTScyesvdiKShh8VBxsHdQ9x2iYExoDDv8oVvPfLxzYTw",
  "key24": "21SRa1WMWwsDJW2Rj1t31c9r4xEqsbVCmz4eH4DMkdcbmkGVbhHM973BDir8orN6iV24kvxH6MNvwAZA5smQkMF6",
  "key25": "4P4sBZikKyFST8DYWMEA6aUDLaYdRFWR4WeQU3W3hR7836HanT9qsmuFuPj4aeDpT5MiVmg3eyuvMTxDxiehAska",
  "key26": "5wkhpfy78ST2t8mjaLhuYYNojHwep5VmgfpVBmXUQS9KxqaNir9WoBgfCu7NMpSZ1ig8neMum8xo5Vhfb1TCpodX",
  "key27": "5sdNMTwAeCEzeMt15XSEfTBHrK6H7eknsSicTRM8rU6tq1NhqZcVhTfmy7XM4y4bodKqNBHB1R3Yp8PSP4Zn1aD6",
  "key28": "3FxixXF1rxa9oqyhuTnVxLSdUyAjYEk8U11jPXm7LNaRkWvz4DduVB59LYJd5uANaaLqNBQc4HiGMNXKMu2Pi3rp",
  "key29": "4HtCPCBydjsPkVgCr5U7YzT2vYxBwsPNrWzPfG8hoQriqrrYnuDG2J57dLp7UECktiXBihK31iCRtgEM7xzjCC5G",
  "key30": "mgNsxzvGZCJ6JR9pdCm7xPWTuyZq9mczJzdo7YvCZttb87ts9KeySdabMBbt4zRtdn47WWqgZwxQaZSFJDzJLZB",
  "key31": "2wHqKfx3ZYPQKQvQ9DAPykHB4fugvRRPsH427KDNHhA47HMoPi4cv7mxTULek81jYQJL3wumQU4rmANi8u4ur4As",
  "key32": "4oNrDibXHywjtNuq487S1GeufRbqoRtKTnVU9jge4PHT9nLxS1iifYMTsy7izYqdGW3J8ofXS939ev8zidbF3XcZ",
  "key33": "2BJbkdwBeZkEW4v6kkxZ37yooBKzuQTkgQPNWJ2p2VQLun3anX8eouWBhMf4xrVDKs1LP3qtUxTyraqWDEjm4SRA",
  "key34": "nuaXGvF65o1VN6t5pYbxYS1xeDLHSemke4DjtWKjZCFJK5eVLhVC9QjeQshmsNzxmJc7JFGiHDm5Dg7gCUkvdUM",
  "key35": "5eyEkoGHjdusXDG69KYhFwKvy9bwRbWtPJS8FY5yeVLACZzakg79SKaSwtns5ZmhXXbCnPFD8syAztf5rDxpwvjM",
  "key36": "4edNLQqwhgVZCEpKmLLYBqejuPpVHW6gBAfpZvM21n2R35DWJrdGyDT866JygndfKLktPTsB8SPJ1qiN11X3VHcD",
  "key37": "4ws9P9ZCutBRvEyqdLGyeqZdsc6FeKZcPuFmVVwbUF4aqZoYzuQ9vq4FnqZyrfLhWsmsnqUVCgsyfYMdTgw9KKyU",
  "key38": "5jSZAq87Kfb17vebWJJxaCYvYZUZT1NX4Jt3Dsf1H1BXRnL5CMUajBGq9QQ41mnkVbx29Bea9TH61e4jih2S2aFZ",
  "key39": "2KLoCfBQPHekMSKx8Eo327cwgmcJa1pFfoBCQdYRXXni1S6vzfnDG8MEZSgvFynKq6nCREeSjAjeZ2LBzKRp8fir",
  "key40": "2i8Ro8CUjQavBDu1dL4XHjQt2vqu4km3BXkEkSc6Tn9QhurHi9YuMHx1H6pju8tkp6yqSamW8hNXf8uXT2H5CQgf",
  "key41": "4Gt8LPeJyXPomJnNgwQe4KRiYSzyr7STCMrmp8TFb8DCAZ4jKKNPf7YFMmTvfhwCZPkNsbJ3iAKjnu1CGpin2VMv",
  "key42": "36p6ia2XpUpfLHdJFKWoKmEGdeUC936ze91sMfTeo3ZapqeP9LY1haYFehUkhQdc1CxrrUQqz56kDHi4UVFdt4ST",
  "key43": "5aT2t9X5nWXXTNyz3XER4g7tZCguDR7CUs9bdfFeVoWmg5at8fc3PME8tutNbjrhMVcHieBdbGNVpdA5VhvUTVLb",
  "key44": "YeboNycsjQEmYVXKeyfavk6Mo62J4pwm8Bb1c56wjagLqvKDgTHpEtKDiuMCPUy3PauwJ6UuPZ9gJuNUK6zPboY",
  "key45": "5nyNh8ypjHvePZSXvThqPDXub2pAJQHU8ZnUPnAeqpNzKRYFsozP8dMLNvgKGjLQUDkACk7wp3KSAETAYKMkN8sE",
  "key46": "JRVDswjxsEWtXQ9NxHxpdahnNKrypYXY42HiUqof2S5iuAPGHMYahqW5DJWsSsTvCBFo5kDkXY7p2ErqW1dNF3z",
  "key47": "3WQ7W1owmW7GaFQRFTwMd5rAmZADMHhC1R7YgtZTyEXDSPzGLCK363ewQhEukV7q4fQHgKztFgfeoZtY9xHSiLSs",
  "key48": "JcykjNT7q9Ko2QZGQz4re3hts4AHMTr6AARQUvac3ied9cyh2NFRkK5MJjNanDVnnfux5Htf8MHCoALtqpTYSWN"
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
