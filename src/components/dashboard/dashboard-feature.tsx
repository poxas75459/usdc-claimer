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
    "5nJSyVRTd3b1fh4YXU5gvRbHLm9GH6a5ihFWmk2k9muqP84jnEqU7ShR8f41fFfR2Ux6Xiq4zryxjHay8vCDaJ4c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Eh734d1XybzyCWHqbBvbJVcLLWyDskp6vEcAgUnYcbLTchZSyq2yZM6vPFk6n3XtudF7GfAQXkajxNqW43yZV6w",
  "key1": "5xnq5sa7waSz5xLKeWKW2Ejw9BTRuGmepQCt1dwxTpicGCeML7EQ9qQEcYAuUFZdrxvBxmeEdie3iVjpovhmo8z5",
  "key2": "5euwaCKoBETi7tuoL8ACqiqfaLwCkFVcpwbhpvvpJeCTXonCvDzFjTtxvby2MNuMSjeFwR9BA8uzvYyfeq7ypJfQ",
  "key3": "21bztddhPFFHP2QzwahoUcuTUvb6tyHmDwGMSUhNY9qvfeCnpZNPHZbUbZNpkTfmKiTTrs2CC7P1ajG1jZQC7eWr",
  "key4": "2tHvcLDe9Q6LjgiS5tNz2fEuvpAszxMNRTFZXFJfZujHmyCAsX5VfXu5MveBty8enjcHQata4oXKLdkznR3oSKRz",
  "key5": "2bjUafjaVzfUwowJhVBgc9APXfPM1CecBZ6QqRq6YvvowacMipAqc5jDp3cSLD8eZzgbpjL47NEtDPYPg2ofLLbt",
  "key6": "2Qnf4TVS8an58ov3C3vCoq8XW2GESKenUL7QtNL21A7b2yb29tzzNqx5w3u6uL8B3VhQN5VaB2TBtrbR2qpgFmH2",
  "key7": "35CqSFNy8f8zcFaY1gp3xXp8dyuwq1zVpSt9rXGuChEcmVPYoqAQquKaYiBUqaykiRA6ecfkpn4mr74usffsbKTi",
  "key8": "5YUeNtGAQjxhW3H7CqSMRxdhjXd5rPknZj179bcBbGhHPRnVBg34kEMwDat13cRh3NarGv3CbfWkJUUux1Xzuy4c",
  "key9": "5pTfL25yfLRJHFS1nfYwq4McwujeAXju4duAg2AC9eDELJwyaCsrqqvBJhcsAtzVj1XEmLL6ukLWPQvPwwHdNoCN",
  "key10": "38ufi3nTSQCxxsXfJwmYPPeRVdQu17smT7HqhZkXY2QnsaK7HYgxhwsUYp9XYFdPtk43nAxUtvXUMA5b4GjwQxLv",
  "key11": "3HiVs5vUZyLZ6LxJzqzPdkQCcjLF2fPfQFt99W7pqvAHyEAqRrR1sReyiZjQ3DkdP2GUJgxgZvvu4zmr6hsKh1ww",
  "key12": "4Tkjkuw6nRw1Kbwwe7ZgpGkby42spy7FPoJShZ8N6ZU4TuDQiQdJHAT1rkfXzB6CzTqCbWerAtDobvq49btRfmdu",
  "key13": "64eWnm7k9ycKztDWVv3W96QZpfTge4nEQmvoFs6ThUgUAcRLFuxs4FD1M3MAJyiZ7hqnofJxpAYnp3q6GcU3kMNS",
  "key14": "3mBfiNvKTLZHzZYDFo8rSctWDqdJDyCBLbxn2iFQBUnLYReAfrWrwxfxmRazogq83iRm8HCcSFMnZeNvQ9ijqhGj",
  "key15": "4R4KN2he8myNPNi3nexPfxvvyadS18FCsgMeWRcTBQp4TxVEnuSvUyAHo9TUeXYkQVevRspnecckBsSA5XfsUKvk",
  "key16": "3PfhEii6R7ZmToED97Uo22jRoJ4pv3Dagtny7iqZLrZ81jBKQKqZYTSuot7PMhFKuYAQREoyNa9JxrWHT5dijvGf",
  "key17": "3odKRe3m5LEG9omNaq5mMTTBd9v3J2bs7jhh9YHuy2nGb7VejL5ZPCwSx4WKxfVCkTo4upes3SG1sUeADDuqpYZk",
  "key18": "614cz6TjkNyQu7MvFXcqHNwpUpP7rKkEt5sedU7qr9z7Mt8pBybLdvAFi1Y5Ey9TPpNL8iRK1ShEYpKQeCBnsJgh",
  "key19": "3NUBNpWUr16YpkppfEgvr8bizKyYNeinecvmmUFJfNfjmw6UnLfZEWKDWHmsQt5gWht2KhLbBecq1apRf2gZtJXt",
  "key20": "5vv6MgVWtLYYjh3viccrGVA8UhyJD4tfUDwLD6eELseCHdJiwVE86bGaSio3gGtaBLBLAhCkgdGStCRSjRqZ7td2",
  "key21": "67NwjQ8LZrgHa1FGsT76gwV6uxfd7Kq6JHkK8h373tsYfAdWrPbhkbbTyYQRQ4UQsYqQMg8dWFBTysPjWMPRmtnE",
  "key22": "2aqFLyKxHYcDjyEKSGtkCGy3YqbFPqDfr1chHysrmniaFjUKv5vXM8ZPug1bPSjHkEpBstYszNPZXjDJKL8L5XzP",
  "key23": "gxxkPfyyyJ3yvBmctKTrpjVhsH3vBGxuedAy93vnds7QXhuvxhCwhNEqxTLsHD1tLFhav7zgLBddnaG3eXuY4NL",
  "key24": "3Kta8uxZyzDaCCnZ4Qcx9v1g1hAtnbdTkCsWnmvNvrcZ29uZEwoxEUXWE7QjqnKobs6a6HCxUerhJBcbFc57ARA7",
  "key25": "218a7y9W8PUxitsFBaPzBF1zGBSgdGVnx6vRTzSbJxGR7KLrJ7pzPeahbrC6fak1ymvH6ZCSoCiWWB3d5oz6R32t",
  "key26": "56uZv1oXoVhRmsTX9TAHjyYYsaZdUZt9Uw1VeZpXtM5hKhu8E2uYCaivpUjJWWePFM2rfp3issoNVjHzrufsyXKL",
  "key27": "H29VDwas3gPwBrNTx2ougovggrxgdcXcB4xgPsbiKkFgG8thxYPZXutTYL7YJNWt7MDFrKmu2na4JMNnWucE1PF",
  "key28": "5yaEL1o6yCod1ufGMUhVct8DrRDDzYk3HJWYLNnVMCrU96HiR4Wq2KeJZEmg1jVCnTSUadpP9L2J2BLirDu1RNge",
  "key29": "2STUF4W13xzNaKe1t6ndUg75HVcrkvNqQDZTPG73q8y7kws4f6UuvfA9n81i2aum29d2tRprtE6RL5Z4tRuqM7GR",
  "key30": "2CMux5PXsdkwUALxCMpQfXxC3Kxttu3qU55Vebe7ZLAkihKu7Luq8KaeChM2t55YcBysGX3AMFHfrSnK5NvdEDcQ",
  "key31": "A1UsWtBEEgs6NPAJ5EAZzs9gz3ZBY5duS44SNxzTqD1NUsPxswX4BZY4TwaMdi5SwXz9HHMCvUUXFWYcXPph5Qw",
  "key32": "3j2aWECektdrK4Vy4GKHPpcs35jfzAWDdqr6ry4pGScyaXuqLzj82BeH4mJK3gsPR5MVE2dz9qod5QxjaV9vxEVU",
  "key33": "46scUwopGMJAEuYpqboqpKXHYwu17nQjMHD7NQWzjWmuh7i7Qy566AWv2vDWgh9mu4wRSvEWPKzwMngpgf7HV3sa",
  "key34": "47yrG9KHq8AKgaupTQYvdi1aZg4hAncrpb54LenggGxcYAMrhD56rFWLFRcY9QGucdiD5EJ7fhTNkiqR1VauyQzb",
  "key35": "4utqdbVstBCgeUBRvRYrDK2GkXR8Ktt8NVE4Ux1zVVRprYAih65bKv8MNGGHT9vXFUH1YWBme8vbgm6mxGAGBfCS",
  "key36": "2nmw5zLjML7wnfypBbYoNm5nMyXkVS4eXXNPuXBVTXuzQzkKJt8HMaDbjjYVAsGyZrKFEmsMQNcLaonHncPAsYfw",
  "key37": "33VYcz4JpkEsvKBuTi5Nkw3Cs6Txcug9ALeJPEmrEzaFDKzFNoeXfEbf2sTRuWSmr15BFhifowFAsw2BCTcUAcSq",
  "key38": "2QXyj1BWNPihyDA6TNnQxNviW65JpyCJB4PSbnjpfXvo3b2ABbvmyHgzkpyXLTRPuTsCfTaWBr5jfoHf7zuL9AuX",
  "key39": "3PKeT8siYGPKoaXKFD3tpqedLaYXfB9v1svSAoqyRvVjNHjZBoPi3tMcpHfrmt8kvCPXAK7825eo4HLuF94wPt6j",
  "key40": "4Tkky9mu7D7Di2u14dZziyaY8TzyYCMU6Rp2cyfMxrAsyc3hM8fUZcBPBJo7KZYz3oo9NTJhrGj4WvEBN9mXmm9S",
  "key41": "2NeKkpE9oJt4CmnR99frhexCeb14pkoMZRnHkxa722CzGKQn5FTk5vLUJ7geM13RBprSZS7uv8nwjfjZC3MRXr5",
  "key42": "3NsVm1rmfmVTrm7AKWFE6Yo9GFDiUb21to5k8JiMQhmArvkW9ofLEeSG7ebqyRfty2CRHzaKuVZ2FTo9RE5o7kAj",
  "key43": "5vJyu3kYGJtUZz8apwxxdchtjQFxCfwd1QBxd4CoE1tnbJgR1EmFj37qd3UbL7vT2kFuDUidjj8pt3YhHUFF1Rkd",
  "key44": "iWR83v6J9np3f1p6prVcJWEcVsQodXpPpAgwX8uDUxnVXQx24pc8kiETxEa7hD5XB2KsTV9t89kXbNhFokyKATj",
  "key45": "5Xs7ERkVSMsJcuVYmm72LTAeCfV8p7dyAtsE5wYt7P3dqaFiE1QJoSUGiNNYMnoowJrYg3SNvDyp8PbfZ4GBpdaj",
  "key46": "4cfDddhhRz5grdpLgGMp4wRdgjSEK5n3wJpQnxE1qLVWdoGNDU6R3pWyWgW1L7zkw4Am8ydnvFT6uiFHiSAqmp3L",
  "key47": "2ghzJDt87XiMtRmsy578jfpF6LBP7fzdozLeVHerEksmcZLQYr6uC6zKtdCZya8Kk9o6xSjRFyu9UpMB9AccMXHs",
  "key48": "4m33WPpWSpa9CtwXqL49qRekH1V2vY5wbb4KihtxzGyRgyQk6QvNVHPtzpqEo3rBk6Ut7NmFCUPkmskAXo5qChAb",
  "key49": "3ynJVZKqBq9CGZseZx3N8dW76gJiF19qZKUU4h7K4TnXEgdTVLPDchws2AW5434wxKYVYsZPpedsyTSTRB39jSCX"
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
