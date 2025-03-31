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
    "3rphZKtPe7NQQ3X1dyAVmKqsTyg2gduVj9CSjEi8FnE5ppo8fyiPGG3bL8bPPMZhAFxYTyWmT5fDNB8nhkvAnkeZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24SXVFFM2aYwGUUf1uLSifZfaxoh77owiiwPZCPxyCUoBwgSqTDwE9Q2WoYExpnioW78bR4vmwF2dBsxndNNwMFi",
  "key1": "AXL8w4reF3t1ZusPupaFCxmPyaoBqGtJjUKTib8eyTRASLCY3kBtAUz4bJP7VoX7j7f2tW5JovWqL2gSunGzDK8",
  "key2": "Edj4XWAbVF2g6SKA3BaCyQ2ssAm2ionw77mKUqe6wbyCPQXdCq4coQkE8ZaFVXatvU7VxUozLss3MBZmnNvRhtC",
  "key3": "5f2vUrR9fbqr1JCKUmDGp78vzuQM64SuRZEgkuacfkqTfUY6N8joC2VwV3JSH7nWnWGbyEMFsdAAZEzFtygYDecf",
  "key4": "2knuDqmuUwBXmzVePd5END4sSUJLhBfGUi716zJCDKJF3nVfwZ59Bpj3G7tKGmX9vf8yDGrrWnkGHRBANY8NpEe5",
  "key5": "4SCwFf5UH54fdkVTPBcPK4faqRaLrN8fycMCQMReihJxxrUYfmA5sLJ3QfuKcE51DoonyHSDYZoSiLTXXY2x7C59",
  "key6": "2449BUG6e8ZKDuwrjjcty9kijakrVuU2ShHQuWodQainm5foKdHUq3WA1x6i4yNC4q9SLZ9J35KvrNeNeKoga6j8",
  "key7": "2vBGpRF7DQRLUPmLKLt6W7ehbZopvSNhkp3CaecfjHzVXDuPnN5Yf4PdvutRGarVWuyoPByteiftj7fdh2tt3E7e",
  "key8": "33tMDyyF6zJKHbzjaaW9aCRjZi8ysLrKteTeJan1oVo7GEGi7AooGvTCY1z2GfTbx6f3BWbkS7C4o3H6iVGyX2k8",
  "key9": "3jm55t7ZUrYPCnwXFV38CbX5i5NUmywXNRTvTpwPseFA7YKvpwUgMj3wihCDfJx78MSpvGiCyPdRxfUW8Tejmqy7",
  "key10": "4HtLUuuXD4uhQvX8bHqCqVqVLDc9ZDRj4jirgKQ8DcHvWZstAFiZ5Scj6MXYj5FG5uUVoH8QP3jPtnuutboVwNaP",
  "key11": "5T5GfRL6qPjraAMfvALGKE1bRN1hBsYgFBw6huYKdWLkx7X2WQnNbyGgnKV1mQEW9ACLTHw1UBhL6vsGea5Mj61f",
  "key12": "4EwxfFgEyBz8b9rwzDtKnExDApwcxtME7SUDtq6JfgFzdb4ZWBW7Ti9whSu9YGQtqU4bHodzjDXSCzFzMcT3CMa3",
  "key13": "5tKG8uBnEmmpppBfWHGrPMGg9ofd6hpg4eqeqNCd7LnLQMi6jNTXFFMwv9x1v143YQPq4SEJoeV4moi1kRHfcVCr",
  "key14": "4T5YJuwvHRESUWoCSMewNH6N4Q3ChThAWqBUH5VHm3xcM8iie7qXT7Eni1ZghxLi5PZyMTLcD9er7Xh69n5MiW9z",
  "key15": "58oPhiWX3hVgPTKqozRiKwYaAQrnoxVuTjA6hkeQrJM3x26knfd49JGwPwj65Y3gB26Euw8Efb1Gz1Xt8LaEUMXB",
  "key16": "5R3PD54vNggKfx1t1ZH6PSVBU48ZdvsEJEhdfaCGknjhuHkrt1TPA153jeANKY3KcNhopk98L8kh3AGNAeuEKfYA",
  "key17": "W8nYSP3xpzByT5yBPoHSYJvVyvtqZb9CFQTMgc2heTG3fVtRG7h4NWaCuS8L85AjZgkvXptLYjBd19mQ5qgStg4",
  "key18": "3HHsuCLZjceT3tgnBxWYXaUoMMtQpQ8WjKAVdgW4c9WojipAdfyZjwRjZAwtFEwAvW7HqU7atyreq83PFg6b1o7A",
  "key19": "2qWvUQnS2irbJgoqZvku1zwzdg16YjwsAjyTjL4ekr1yNKfCzoZ9DH6aQzdBtLTMfbwAucGiuCmgwYo4kSr3WtFi",
  "key20": "5xiuWV7hKSj299QmNB7DV6nzdbMGZpkcxijP9fE2sVGUprQKqH1GCv2AjR11WTwe2Auw4kzab7yiKGMcEmeRMSj1",
  "key21": "oV2Zfz2TLcbWzB2bNJJVQGAU2ebKcjKBG1QjK9o3DAXFz3paza9hBxyfg1F3PJRDXDoYD1X3uuYwBMiRQhp9KcM",
  "key22": "32FuG8UtfubACNHEVVDxQfCHr7EErhp2itQhL9CnTwPXsjkoZ5F9R4XxDhNzLSdDkgB8VBA4pRzc6imhrs3iaQ5d",
  "key23": "5EaKF2sfYzNSrMFVJJEGZeouYfRW2Dc1vjzffkUKtPee8LkMxMMbPbitpeqrrMJaoSZuPNwbVtGbEtDBM19BWUH6",
  "key24": "2oBwT5SCtt2EeDqMfm4n1yw9phBcePsBMdvr2Ds7v2FeqaoND6FgLEJMvjp76GGCvBvu9Sy4YUuH53ChVYzDVnFE",
  "key25": "JJM7Qc4EgNAmRQ9QtWy2Kn9kPgLt4WEQQ7FBcAzwaLDxgduKxLzXKzNrRe5S2D3CKGHj62wg54DQ2iTLnWKFQpE",
  "key26": "6UApPAC1Rcgg6NHCyvt3diE5huXALpH7rhEtETmBcp8LKDJ66Puhy5jW2RYNvDLRgVMm6XTat38hX2TivRtiHzC",
  "key27": "3MHZE8pox1xT2Nw2vds9CqMXJaqkwjcdTGYt81WFLEYXynmCpb2avLr9RjG8cXF4ueSYrBG477kjaWQBHpivoDa1",
  "key28": "2nLN7iUZZhBXsJUJyNAio8fJHayuvWmdXZ3kpUS2bZaeyt2NmUK5bmMTvxtNUspZ9D7bteiuzgjtoAzrc9vQUEuP",
  "key29": "4ZU69e3hdriqS1NkPUMHKTTceMbsNGbGsfTjT7pwFLebbUT9JWwNQEsZfFLkVAWLL29CvbRFq1YwnfddAU3HzrPM"
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
