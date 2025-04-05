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
    "4vHDiTZzYL2DcMTQrqDUR2kP8FxZVa9sGfD9NHmBsT5EyGv83n5xRFffAx9NgcrPikfddtdT5J6KtXpKU4yN1XLp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2heLxMQvvPUV4EdyVCXE8s9b5T3jFZtkUEYLunK5e87gJEvf6nUKGpLd22nYC2cmJZs8AjmTWDu22ifXvwX7yqCB",
  "key1": "3bqqhdSHkQhE5giQTsyfEjrRn4UkRB89aBg7YH6E8ocAE1dmy9NYEgM4WDGVTzifKb6FaUMYBA4c7ftAGgQELw52",
  "key2": "4UWEdjiicGGinvGD1YTNdmPzL6iyiYqGNxivj8xtVhBEKM2EUPLa5gFpmCLzDx27K9VNn3pYAUJNFMjYhGeo7out",
  "key3": "4X9GP26WNLik3zYosGnw531Vgp6UzbtgEeHNSRMzaaSQzXQCwETMuiTMVsDgzkTu2cvamzh3ayT2hVGFNicBzw83",
  "key4": "4612jKxGor92J5XszMej5FXWJPPhHNguZQ2sbDPamuQa8Twp8VRC2YA163wsVvgn4rB6pXVJC2VL2sEPmzk3qj2v",
  "key5": "3RvTDH31aSfU9fHMKq6CAwmeDvhftAAgykFkoK2E5FCas5mmtUeg4Fjg14YWxL6NXzGZ6vmwszH21Tox64nXJVsv",
  "key6": "2XyAxpYyczhTtNuqnvne9C9t3K9ySCf7Nb2SfmadxrqhPMmFaAf2rTWbvsqL4TN4V3DZyigx5vUXxM2aUFnYr1zX",
  "key7": "G9cY2JqHtYnmKf4cpjVCTKjusUK1Wk8hg92s3wgmHiVp5qq8YgWZveZim6u6wB7dqYvbwzuinB7AAm8KMQbALt4",
  "key8": "2N5s37mmobXDJUt8q7sX7h5cW3edj5Y19erbmEBV68tnEXJdT6Hac3rWyf8JigVP69KsbwhopFmPtm7FNSAQZruo",
  "key9": "2pfjd9Q15uwnqLrNgyRtxwRCJA5hRmSaSFdrvL6d9ZVXxPZaWW6WiwMivoWyJDyxm2Az3ebpTEDYG16wtYRx6Muw",
  "key10": "3kMwxcvMZgPMxKbwbG53BWRD1ZPBrYKkupYbpZbdaoBLCf3ENUbMApaCDq9bgqhdnEATjGuWPKCvGNqYWgvpx66V",
  "key11": "FcUMkgNVN3jiXYt9gMEJn4m7m5hKgyv5sFfdPBfdnCqc1P84s1kiCxnC7DWmoW43CRRFukDUDQVAHfXSqdvszs8",
  "key12": "4zWkqHR9pAgJtrqhH4XLqg1QVMAw8mrj99k95mPUQRMw4gkKtmpTX56j2MzRyBpvtVsuXwhpr5mc7pTzK1reVzVZ",
  "key13": "5zEzC34aQzEXcAtWet2UrsZsmTTiHSeufGdEPGaycwn7rzCBZjE3B7MAn4zib2n1bAPVUkRtpCShFKeiEDJU6eP8",
  "key14": "3iRxKBMBfX9PKFMBq4YFyVHXYsFDjacRa38KpUKpYffnqtDFfWDSvWsuzJdzeBPuBYGGTb33h1LRmtKWas6C5nJo",
  "key15": "2p9ngSBk521TFbRnCbvFnmVQwbX4bEQW9KsEvdft8cts4ZCEjCQ36dTXTbgCJAG83HHSeNUPhZvVpfoUJS7E9E6D",
  "key16": "5GnAz66TCpW5u5SWGwQqTbazbXBTfiUTnab2RQMSTPozTaxeCZozuBfk5Ucbv3iphN8xJ92bD6MzwEXAja2v55Dc",
  "key17": "3W1dfd4eurmAo7FS6UCNkV29pQ368AWmzduTLTEjazYJGCRKZ6P2gQGj2d7W4GFdfqYsq5Y3W6iSrFfwWUMBwm72",
  "key18": "4T7caGtxQvWFgVjqRbCeZRw7XmB8BCTjGAAA5wp5vBi4RhJtF7LLgM1jj5iUrCHuBTZTZzQeWgbsDye1kzPBEhey",
  "key19": "5Q537eEtF6Se8F3rFdZjZo8WzRRQJjn9PmTFfRkseiNUMGmgeVAzwqdFqhGaJ8pwjzPJzqSKBVm4S7XM7cLs2koY",
  "key20": "4zVhM4iSkocCaHCEbdhbHQcc3ViuRqLG6Pz8eZFq3BtosQmZijEQKdsQw6oENoB4SgiqXqsDAZ1s3F2bhxQeKoeu",
  "key21": "2jM4VNAa1gpQfzfEPqwdzrV5chCrWY5wEnDNnxshaWtZfb7hrXg6o4pPfaVXuKEbyjmnWHMCdPgECoqiHhDfk7da",
  "key22": "2s89qfhoKXs3CkY6WAJHfvDc2nLuDEA7R5mtMpcqMVB8Fmv1n9aAH8SXavNfqaKwKnv9bgJ8qtXapJc8sTzqoUA5",
  "key23": "WvW6DTF8repWjCdUjsY1z5dUikXCF8F2op8dbFWPcnA9VsJWD1A4Cz2HWLKAkpiEHyAxqTwqZ8qkYzBM3VaFFTG",
  "key24": "2xoLHsP1Rm2q6BmT2PRSbyNgCQeEX9fPeHhndD5F5wjFJuV6e9tgLhctR1v5Tzg7KRLwEqMoD99je7Hff8ZiKGyB",
  "key25": "oJY1y4pj5UbTRS8isv9gmnVQTyMpPxyzvX3udMtp1sfyENLC3zaMwA1tQHxfj61kSpq7JH91wMLhPYFY1fBHV77",
  "key26": "28EDkF8P9vvjuHahTbhTrH3WYHZwTNTdkuRD3dxqJ2B9oSRk8wf8cj1EZm9BsnyqKQAQQixYReNaYqXDRHxWHwih",
  "key27": "4wNsaTKST5316DKbhYXcLn2oXxGAqB1qagXQHb2F1wxzu3UKV5YDe3puWvaQ1qpKZtHQv99Pcie6H7H2QjFk4Use",
  "key28": "5cDiTrfXvGpxZCXus7zKC5cKZGpqQ11PWd7n3fEqyzgzK4gkxc4jfZJQTyZzKcwWy1RXbzukj7DizeMKeZp3wgHs",
  "key29": "65DHHbQE8sLsFqa3QSWpnhBRBQSHXnRGPv6fvdwtAgHAgsZAe4p2E9mMqMEi6GMJmdpaCNKXosuRQ14vSmEei2Qi",
  "key30": "koc7SduttXxjPQM4iVy1nzQcWnCgXhK4MFDm4utSD17AedryopECZZNRdR1C9XcyGLvTuq6CrM29xraVPAdxKKo",
  "key31": "5u4DfWp3VRx3M4Rrzp1Gan7kuw1mHF7PfXyKN1K3dygsr7TR6QUAo225cyAWFocg9XENMnQQZD1D7KQHJbmSyc99",
  "key32": "jgsCstDxfLsbgKbg3QYtMp17LUPJgkTX9vRMVwP4DmzpKLCEeNhP1diE5ve2PfFaiNEXspywNbSLuwSy2shXoc5",
  "key33": "4hxSDK9yAbYZjC36EmavzJVB6cbn3oQZk988cqCobKGAga8FJH9o7X35nmG8F2DeJ2jKtiob4cpxcEhZE5yTqfdD",
  "key34": "2YjWXBrmM99F11c4jmH7Kk3QrJGYfPem81WusW2MrEZc9MyfggmEMbv43MbVdEETVtCjgtDuxj1xefCERNLc5oGk",
  "key35": "4EG8g5MXfmX7WWBmdjUvUfZmnXkdMRvFLD4WrWhHbF49KW3G84EQHGn1RB5BGLph3UA6tUgRgZRGYTDM4yXWxTW9",
  "key36": "4HSyZvCNMyjxcebxGiNUTR6ZdmLxrmxC6tmFHHJgxDiRaPuKXvmE1iPeBJPCmERR88cangKYWhQetVv1XxdzbQBK",
  "key37": "UqAqdVTtaa66rxPzRkXpEoPkLvChXvW4vMMo71RVaFZUCmmGA3j6CsHa2ibZh7GTxitN1yn8EFsj1QY3c821MxX"
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
