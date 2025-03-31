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
    "5i3uKwsevRhCUccmS81KMo7StGJ6gqhBUsqRUdSJ7HTTBP6EWJ6tYdyhwBVpQQHybHA2SKaW1kVPcJHEXW8Gm3jW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZZ1b6S5nrx691h2qtfsE9kTq1miff1r2xfa8BRQRYucpFRT4t6tdcjNojNqTvGrEgo8NVHtzxFXCGzpLUMUgPzd",
  "key1": "2vhvrgbTVLRvoz93VLPnGFvZDRtBwmXNQ2vsEnQ12ZArJB2ZwPyBJYbR58yeLgguz9WVVp7FDoNfGy9TFybH2aTF",
  "key2": "2PfMw53PkGkMue9YwJqntBcPhP84ZRbUHos4Zwv1T38tfmT1xXSWeVyh8k97xQYDqGRDKvbqAXiChgKa2RZiNHf6",
  "key3": "5NGrrtQY7sXoguhmSJiCCqTrDXpbDFRir8zKuqxeZXuy91UDDD58Km6KQFpGGyzcGRUYDFrKdzAN8tWuQRYgxzoS",
  "key4": "2HobbruZPqkVPcAoc4EhdnXc5Dkam9JoaVoxz6eAuWxHzoFRMsifEXp2GccLqUmN5KWJif8mr6NbAqQCri2vp4D8",
  "key5": "5kMWaxxzUGvZH6f2NaUvToxdGsjCCnGEvU4X4RbTiPXVZdehy99u2De3dWfrdTx9PGY4sJFCpoHn2ZrU9sho8xYs",
  "key6": "5Af71GP6TatAmW58CjKmsMK4TTsPTvucKhTHyNEYxKXMm4WGypfpYwwgmhgua6ZQCYg2vHVc9PD4ufDsHjMrq1he",
  "key7": "3KkAC3S24uigEvcatvmKLonBdic2oZvHfxBcyFajpf4uTjbfecFLfAZXzyhaNZyE8QCZB88QjBpJwBeGqh5vzinK",
  "key8": "42pJotSbRq38f1JxBQrY1R1ZLxBv142PPWFHQ2dzrSBLLvgirVQDpmGytVzbhcrtSdurNUVakP7i2hn4xihiywma",
  "key9": "33J329azkj4mZWoAeiFbFBn4aRz5MjNvPX724F2JsqDT4RLynENZbp2uuigfAXWvEkcWHCgkqcJ7yBHgRcnNpGXE",
  "key10": "39WkZTHALLfd7r2K9d5geq9MaTd2SiA7F2hTabUQyRWUE7tRYTR9j9h7k6DpuWpvN28mifdccUqF9jyFH4Zgi7Lv",
  "key11": "3a1DAgDYJAc7NCDkWcC9RLDpy6bNR8xFv1ccMJSfyYLADFMyqJnXZBwNJSqoXGfARdzzMaJ7MsU251VRJX4HeyYe",
  "key12": "6xWLH5n9rLDY4f1VuWFmR9ge6huV59U3a5dUe2eMYv1K8NpKS3zXjU8wZLRrRzMw1TPwSjhin7DZiSamA62QgLp",
  "key13": "35CL6rSMfJjeP7zp65UAEKoLdg6R7n9j3uPC3T8cSTD5WGB8JTwUDsrYLvR599iw8dr7sneFknT7W6o1wLqHcHxM",
  "key14": "223UCBy6SUt5jtGnLyFKY4eNc8FKTTPWmRogeW97yN81otCq4uYrUj3vtW2cQ2wqdXaLM5vMtZFCaM3FceYgynS5",
  "key15": "2UNGH6qfAX4f6h8eQ5BW9Tirnof3g56NdpMw7tYhutkofnqm6nAGPycD1rvcZN5kz414hzoW5uAErwze9YWGgnEn",
  "key16": "4wfW1kAzYzjoWNJdjsRxorvnpcyf1WM5xrTbnvC5vaBe8eQd8KBinM7ndu58cK5Bg2KMQ3F9gr2pzxYuRvFTWfCT",
  "key17": "3jVh7kFKJVuARNtdoG3tEGnmZNxvPxrCJJVvFTtah1MmxCyx3MMnQ9HSh88TXGzcyAV7C4kftHNLyx9vnf51DKLK",
  "key18": "2KMrcJfSzzpBL8W98NF5irMGXY8ndZotGbrL1g8AELTc7xeEZAK6AC7ZhDco7tpTCvvtBGPxCMC7wpE93Cto5HmK",
  "key19": "2tR2eavZEuuKEqkWvCbXmh5XoET9G7PWD7BNCmnqhaNtUNwbGqP2immEfkubsrpjGmivCc4WZdrz2hUqQR15dtQ4",
  "key20": "38MH2GvnHrUmPUvP7fBCPqsmDVDFbaDHFSuapTYGz9hvyjUUVN1Ypn6ysihrcEHw2S2debeS77VQ2ByVtzGXZTew",
  "key21": "5FsadWByEm24Aji1Ju6nFHefMtdBKPiU7sz2HbTKhwgPGz9128Jj1eRGmxGhxejyowxCSViQHvJZfGvwyMjjb3A",
  "key22": "4vJDbtsB78uFT4uzLDNfGnVjK4WQsPMdK7LtL47T9vetqCETicMGoTyv8uZr5eXqTr85nmvRLybMfceJA7stFWgv",
  "key23": "3uPTrRmVsKnWW3WRjQSgNL8ENb5zoNbx8NntoVsjkB7ChNAAkh26TBtVTBAfhLvfFEEKjeNeFWM1gJiGD3T3WkJp",
  "key24": "4qVELgh5Y3FJ6Xfo1uLQqY7hmaoQsn2uQogs7GzgNmFpuTxd1tpTJGKBQihqVNcMvwazf8UCrH8KGUPyViwMuRFC",
  "key25": "5NyfBv4J7hWb9VtpM87RLJKyS3KYb1Cmnm1q78srbgbSKeDBMxmgc8kLwuBEjhj4ijwfeGDJeUVBHbNDUHjd4kCs",
  "key26": "2RHQFTSPdtgLGS6xxR7zdMYdodjV5qjKS1tYJQWWSRojH8TDScjmWQyvPe23KiHsRCcWWHr5KD6bfCzjzA2cDoEU",
  "key27": "43XKtZ4BUmT3ig4ANUfverLAnt9TzfcAV1wGAyPzeER4hsUkFB5GVzatsMDX6fFPU54rTr8g8LoS7zKWPFCz83sL",
  "key28": "5TkdtLMJhwXjHLKuwcm7zq7Ftq3pBGM5jDVUJdBVrWMCAsjCzwV4C8ESir5mBL31ZcTU8AJ1rcNXCZbBQPKiqyFf",
  "key29": "Ueo1YyFgN3CdmBMaXzJj3qCSGZBTUbNQ6EVPSRwDvYxEsYy7eBKzJ62dsYcWV7wa2hcsVwthfZsuZxKsqeGVQda",
  "key30": "4PjpJUs41KemeDrJnJ85MvxiB4aUpkXEDDKEF7LPKDGjMukHbCQqrqZ6V45NmE3uvgSnqbH7LdDTj76zLBQhBFQZ",
  "key31": "21yNGa4hrnyMbMpg4QTKkCzht36Jfjm5gbsfZ4p4EwqE842ShGEEWmsVonTaLmGD5QTFFTnKdDEPJZdGcXhThq5o",
  "key32": "5fcn18JSx7yYmtb1d8V4y2a6RVmyGoj2Pqx6c8xn8LwNx9XunzPxBYcWehkcJiaUHNqMNVdyN28pRyPu8qG6k9w1",
  "key33": "47AuVUQGzgYtDgp7bhvQwJ1YEBNthuJGfc8AN5VWizUnf7PbFctHaAwqJX78dFtocn7GWppyF6p6VcjsZ3dZoHFa",
  "key34": "3K4YZ4oifmQhogiAioQZB5Thne6QXqJTNpVn1eUdPJ5ZrVHeqKV9Nbx1vpae6rHUNVNwbmkAVj74FGgjqHiBAaKM",
  "key35": "V2n3Hm5q3ktg8upFzzykh1kZ1GGhSLuuF1vetEZ28Y5SpfYCEscirKvySRLNqoPmrtS9oY2ofAbYKG8DvB8P3dC",
  "key36": "2riYytcuXJZfvvGpxS5k3jGjQSdvhCSgcXknxtTpns5jRn9ddyVh7Mn6Ym2s8pEX5yP1sUmP3QRtq2UwT5Au4bQY",
  "key37": "QnWLF2czuvCtScvtcJ3RyDnSSAKzFW1cGAArYJnogkL7qW8k3xDR9y7mBvruFiRoUxF2EinhETfd2v1fV6Yuj8U",
  "key38": "BNHCjGmu2ueQAmMCyXv6PamRgYsnE5oJCSpf5LLxKa8R6J3v53iD2DBGVDLbDtaX5tKto5kQk3vqZx9Qz7pV6Jk",
  "key39": "3tuLWqdWP94FN9DQwRdPAFWrvZodMBiWaQXyQWMKAR9cdTJeJVgtNHtfrbJc2R4Xcvfsb7PvGfjzuZpsdfkKvWCF"
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
