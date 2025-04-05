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
    "4FcoLB7RywCyNjSrkjpeH3mZ695hdPpgbqr5DPixCGz4k3u4LMuo4xtkEsnHTFYdaLFZAgogCwi3eY5GfVSPMSMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TDGcrpXSfhq2xSZMsWpbp7g9uWvtHyp2znp4oBqdfcBp7zHCwEwaxSEWL9bugoQkiEbShNhUTznkbpecG2PkpNf",
  "key1": "2fCHLXt8r3hDR3d8fRmuiCwuNxGPSWmXhKxpHHXzJB3XqgMzX8bAAKJs9BZwtx7Hpbwps9kBjxdNxCBC8cCTon1q",
  "key2": "5SP4etwgr7tgxCFWGxQivU4rry19QZHxugWwczhp1YLPohTDhacqyf2LFR8ytrNYrkJfX9Ujkma16hqsXt9A2bPj",
  "key3": "X6C8q1x6m59YdwTK3SSjhVs4KyXQh6VJsGF3dNVYEpKFsUKN5ozRJRogfBFcU7nrwwUREeYLQ4trLSyszJm6q6G",
  "key4": "2JD5YT1WndvZ3UgVuUeEfW35GvStC2csamErcE2LWo2XythZa8ZduSMGuP963AGFtLBqSKy8LSNYEmxhorp2mkNp",
  "key5": "3K2vXH1YQc7VysUVHYqp8krWAoPMB8KGEKZLJDJzG2cguTRueUPB3CFgezHXZVWNMhQnfyDAiTEutPcVQ2CdSz6n",
  "key6": "4UBVAUgdeYEQvbEsvY9AA7rj6DLj9vK7T37ah4ZSd97TwUWDjq7bm62K7z3hk94AjPoe9Z1LB5ofR6qVuxEJygr7",
  "key7": "38EdoJDP48QqWnEo9YfJecrNCH5NU84DpfD3eYMJfenDo1fSZWCxGPfBzBqG9XjBcgkSvc9sGXuvfZvPtUVNLjvU",
  "key8": "37fz7RqfMoZidYWzYUapyXRMhfV5DUjhhK62cUC7wKV4XG7y4kGmHGudv1YP1E82drgMxgbpgDdiqcTCCEjXjLgH",
  "key9": "2kbSCXk2tk6dRT4njJbCEiFonivoM6PCE7VSnkC4HLZCDE6qpeQkmcpbJMdWEKjfSw5Lt8SnEtz22w1udt3AxN1Q",
  "key10": "2XeZbL9x6shZTkx2Dt9DpuZffa9r9aymehPAJYUTw9NwwhWYc8oEs8js84DRm9hsxpcbTLveQHqVdN4E34dhGBCk",
  "key11": "5yVD8MGDBw77xon16YBu4VnttiH9TCFGQtvtSYknB3tw3dtp49ACSbP3FUSKxRj1SRNtxuqtwS33ux2g5QYfeihw",
  "key12": "TJdN2zT1heZNk7L63bTTF4sSUwvHVgn3VLDQ9GUVGfN9VdGmCZDmUZq8jXZaA94AtfZFccpgEcWaCkg7eNPZrRY",
  "key13": "4trdipLgk7z5Ffk2kCjbbJdn2JrfWUsncPtf8eixd6svu8uQGZ626HuCxbb6PtWxPC8qwwjJAzMWBEgN4kSbpkm1",
  "key14": "zmjRLtRm5Yj61Ap1g5hV71QJjmcd3Sfpvg1DxUgqoKUxCvxpQGvw3SnzJ1xVVB1EuTiD26XvyVGtytcfaKxSing",
  "key15": "3HqEPUwu2L3d3Uc3KwayQ5sP8Rv6eJ7iQMDRkWZNX1AnCG4sFGxzcozaABHtcChvF2jWfZYRYgSN8tTiS6dKvwJi",
  "key16": "vqoRUKUjiuYiuV71yBLaQkgjbvQiyuRLZCKPg45BwqAd4k9KXyd9rPAjQho31DWSNiK4Ei2UGvRsseLzEGggD64",
  "key17": "5YqVHG5C9GnHSiXqJZfwuzHKZ9ZHLMaoXj2rVRmzfpUuJvZDMe6rKg6u2zfbNjWUmBUBHTcaKtWQqeDSXfD3uvEw",
  "key18": "5VFZcEkijEKaKxTpnErmZzPRDyxXJk8kMvVmnnuorJ37BGzVS22LsNnGUAXyAhpd2Yzo3T3Y9RDmwSuSZXT8csWk",
  "key19": "31sMJPVyoTzU7VFgdrNKpvRxwiuJDC67WaeGAokJdoRneH2pYcoHuzP6oM3BDaWayciWw99nkbrPWD1ogDuVqney",
  "key20": "4ShtPDfWaEMiDYLYzQzmpLNvro1jVPjDLKbTvoPdZKWs6W5UAnbWti7nYdURvq2JMZpZdrcNoxtW2YsWu6aMHfN2",
  "key21": "4gtCbTKcF8jtKMk4g7sPXQ7Ri5DyhJbhkmyRCCAswLkuU4hxUBgJdRLFcGA1inanQiwipXpxxUUyWrGyGgPEUwqG",
  "key22": "48nBg2z1rTAzVbV1Rm3f3Jm6efg6vEDYiAAgXok5gHfP2RJRWaxTwP9mXH5sjEsYCiCc3pxZKDo6zGeD5gRkNrCQ",
  "key23": "ZAsZNBUFWAS9nu4Jj13zrKbAP3uN89zH76E7HhcUiKmpLU79nKGhBKE4kB6izxwNLjrPVmosvQAXRENDQkn4QVe",
  "key24": "3CLaEFt7MNo2EL7Tw3kJkoRfeB7W8DdbrC4nQcsunhaMtvxFHva24Sjo9hiJuBEUx48Dsg97fArKaQBCJGBZx2Cg",
  "key25": "YZKXP5ZoEWNcYhoxRV2R346zwYhz8yatNTpNd1ZH5ejks7wqnmykV9z9aeYYTTdSF7bLZjEnu68xncNdnfKMErB",
  "key26": "2AokHZ3Jz546qTBg1uLj4GrFneWmz128HVACnRzoKPPse7UwdJETYykBTYR28nT31WHPwgimpY5yg75y9ZMQhKxG",
  "key27": "2UHtJY18fEbCjGVQsVnRgzHw3WKttuYSDMH5Nb4ET5vjyCMt4n7b15iTHRur4axdtXk91TE4RAKiWfJDKdQBsUQv",
  "key28": "34tSXTHvHfU4xqT98eVNEU6KH5UkM9q21JpfNjMqpUCxDANvkhiBtXqSZbKabTUR82d5VXcMKL7WDRMSASzBR16G",
  "key29": "4LuKC2qBVvtMvA1AXzYKFVvKJg6GQhaa8wr12jvRNUZJ1dbgzEctASvMcNV3y5UjJvGr5Ec2X1XV8wQf3o6HBELe",
  "key30": "5gxugVK3dUPNAcQBuCHfR5dq143UHF9xKourYUZGrRMAMo8ZviAT8aocALgmb2KuKHsT6vNQ4kL7kfRvjyMJ312J",
  "key31": "FRAdqf7tuaeYbzwvPzJVx5SnQP47TdtWWSh99XGL3ea871Lj45icXQfXtajDWWEX3NBLHFhgmS7ckqYtAGNbgzR",
  "key32": "62Rj58aCBsDu1BeYizP6S4horACrkS7uCNpDwXhYxQjxLwK8SQzwoh4WmBobsqtiZfCMi4MSoziKmH6Kp6knSu1j",
  "key33": "3ifUhZo1u1EsndvR3byoAVPCTuYA6E6QEfrqZ6CZN1r2P6JJ5swrUMHNjRrd2agTmD9ZwVF24fDiyiSUwoAKse5S",
  "key34": "5JgUpEkcQNu1Ubcb8bthcSvsBQCXiNceu5arYuKu3KM4rjDypivPKHyfwi9ULe16M9ahfokaPYrE7wwKTJNkQ3Jf",
  "key35": "57v9WpRithqssFyXEu2WaV3eyxbagjCra9LLnstBM9ED7b16goUkpyNiizjMgFTuwA5n2PnxuptPHW3WrxT6wmmV",
  "key36": "aboq52QXrmSGiTjToqxuV6vsDRa6iEuge3ujcgLojdgF6dHvYVUT6i9BPwwJevEQPFETZX3PLYRKt3JiMHyu2qd",
  "key37": "2rA2rXEG5XEzZtjQ9jPL35EMFdsbHc1PiQG5nTes8sTLzcuPJtyEBdzLaa2jfgkSGasPgKM4qeDoEmybDrsWyrZ1",
  "key38": "3uugz9CrkSPaLXeCeNZEKgzyi6pQt9C1dpgbZPbayYsVDG2aAQSVLzMAtE2JMDF9Du2PV29ye54PfCYoRUBECtuW",
  "key39": "47b9ihrYU7yUvSAT1PcKzSATy26kAtdHw79bF6VPBayVptxSxnTuke794SKCGmim55Xh89mzAx3tQ5C5E9k75VHV",
  "key40": "2psUgCUFVbTtJHcuCZFPKfzsNMfcKxhtHV8R6Pf4RM61X2V5RYZwiZkdds58nbQCc6HQkjWT7h5SGQNR2uejowHm",
  "key41": "3jvn4FtdK2TxnES9RTp3NX9ZzFAwTsttjkn3vyS49vWc9qfFtJyUxctGAYKtHMN64gNbLSHrZR2s5ZUcu9KjqFbs",
  "key42": "5phAKcv9ET9pzTFkPJfw63SfgQz1LJU6BV4FGqTNwzg4CpCRKxSWcBxU2eVuFjvbPXcj2k7jtwa83aKFDNWWAQBq",
  "key43": "5s14TmfCmka6qMfoFTGcGL9tGCZwve5faFAEtuhqc6gmn7irac78HP8enZUiK3oaDP9NrzCyo232yj9sDf3zRe5Q",
  "key44": "4PefPjGAq3ssjgPkGNVMRrWPHm9UEipVXJ1ngSbF6MNFUP6c3Z6B4zxvoX5YdXhuNYZNN6VSPp3CQbZThTk2Uzvc",
  "key45": "43CuCX2Q6mkukFdYMoQgranjhQgNimTaRqTmjGd9S9CrDDzon4qNVK5MA1Qnq8QNwfhtANoeCb8HMep6iogrhudd",
  "key46": "427etTWXUCXikwLYQUTyHapzFM2GR2ZTkJ5CCf5VUwuhxPwAt69w98UZKM532PAxW82Hcig9EYLjqYYvFbMHPa5i",
  "key47": "SNTCRYJBe2XtdhN3eH6ouG38zJ53QR3QGDHgJmtoiMERdxyfYmtrpTxdcTWAponbzr6G7nP8ZiWZPgPKYFRyAzz"
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
