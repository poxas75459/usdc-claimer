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
    "2ME3tpjLTFtLxegD2g8mshoduRXW6BnZR9Fa2tfEyEB42pTggKKoueD4e8rrmV6JkqsEyJC1KhN458d3VfYVcFMA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aN5nhKQyJ6FJQvkwECH2qN8HbMNkq5vfjov6gugfCbXQeShDPanUWdZN3yjihRyNoRxtUS6BQ7DsFJ6zFHFxcAG",
  "key1": "55JzdJNq7Uq5p1bdMoC8uJSWCbAoAYYGNgG6Cov6hMDRZKEP1ckusxEnNDEz26bpa1g1CT3esHeDQXvbdESxmNz3",
  "key2": "3QjW2sZu2VhVGUzrCCGfYWdLrU2kc1dgCcfGN4nnsquagKCwiQsDjJHk4rr9eCXsCEVhZ7mRigZnEruUT6pmo9EP",
  "key3": "u4PNFXJ39FP9tE1NsCCBag6Z2R9L8hEZTkxNn5xgPXNeggWGPd2s8zGLxVX2pE4vn1ps2PHKn1axAmQDtaMZyiS",
  "key4": "2Tcp8kQpNVaXjDtef7ACCahd8jWDcSogTeerX5oNoko2Ly3brV3koaw6ybzvHpf5rVPNcLbnEwBDdVKftupgqZtQ",
  "key5": "364n4SoZB7ZprS1YMk3KBfsNPXusG5SywnkWMa8kpu1LMEF26n3GFEsbJiRzvMUb2LZV3Wanj3FbbBm95qaed5C5",
  "key6": "4GGM8yB3U1wTEhsFHXrsKxVu3u11JUAR46gsposMBiV7k16c5utEzYCge728fw7Ks47e6bfUbthpdqsvz2FfEmtH",
  "key7": "5EozhtPAUKWzn8k5jdq89rSbbCz27TzqGBggfXoqroJjzkuyj4kXis9cbH6i28SDdRjTps75MXxYbktqB7yuaQ1o",
  "key8": "3guBD5SUUvozXM1hm4MzUkiPaANnYHAGzjRSfJNtwX3dy7s1bT9CTnrrpniFWFXxaNqSALM6WTzqfeAxpb9wLSBQ",
  "key9": "5aSNpJNJnS8qYNFwKbjKWbh8ovVaH5YexwWo6Tw99v8AdLUsc5aA7YacJdh3cMN9pob7LtxocEP4CFQvBhac95U2",
  "key10": "41qqCHmdVF6Mc5CSTCQ4c4TT15VRBZFfW3C5GggVECfixTyyzXLf1xaAvjCvxuv4cZqmvmRkfW8t63aasveVY5qT",
  "key11": "NHAbCvsB6CzZjCKR7jHbgHPa8TM5qQTnugXfPxCmtajnpt55VR9TftafYPomNih1xGzK5JT5WveVpxE788ZPRHb",
  "key12": "fUtCBQMGrnwhCXWxy9ZuwgFuqw5xVwyJTz8ZuffVCJxePSVa1qVNijER4tzedL6bBRuXT43czZiRK1dMSvtxSLP",
  "key13": "FJhtf9eP4LKPed23TCjQTKbbVSYmEGydBynaHCKFCLZgFTKnucLHNyS7V2fTqFSv1DNYZBCWezgniBRdFmL8mzX",
  "key14": "3uQz35ULixfQfyTpruhLrnB72uMa3dcJuDLTYhJrhGd2m1YwVpy2j4siqENGT2DD7hoHeXWx4HVUfqC2Umwx2yXp",
  "key15": "5m2nN3KbSDCxjnxSSftFKitBZXkA9GnSzukeyBhB3HjFoPpAEZzGaMJsgGkKRjyEHd91EzDkNkkBQ8ofyw6MVXq9",
  "key16": "55NWEvB7jfG1Cimz6DYDCVNhAZUwWcCuLCkaypn6pQYFPXYxK4AuptzQJk56LwdjreCUcvbDQvcHJeDPDmfCzvNV",
  "key17": "xapBkmAmBzw3DMeLaEtHuthyds6S3DXGJ1L9FJD1wWNRQEtzRL8WtyLabMAZV4dPhJNCz9QUYuoKf27d2KAPaMk",
  "key18": "3A77U6mjf8zTDaRkTJBooC6PvGy6S5zDBVxqxHS8qeXe9CpNtDpPkgSN5QowqKWiV4Kt1mg8YSRZSad43tz1vpkX",
  "key19": "3ME7HGm3RW39H6czhEY8nmeFJmZnnYpRbAHLDzgxyAhsiZvu4K7ky1XYLVFRA3jq1mHk1ikvECPQEyYbp2fw3QBh",
  "key20": "5UCqMG5FDguTNAXRCERkH3RxfZ6WHYxBvtm3DSSdQL2QqzMeZruRp1dYzYdr63F4EexSjqAiVc34kHDkm6MvVqr6",
  "key21": "2vhLt1jCKLLY6G9484hFSewEEELpf6jj9SP46FJs4G7pnNq6EFsSit9Vh7VnHEBfiJMUkAuaii5APq7d96WniBgQ",
  "key22": "3NE5nHv2D4c5LYzyBkVw7KSd3e1bmDR1Tg4Em6XHjQQwqwTFQVHcEb8oC2DcPyLdwUPVeT5xSCj9JPasj1U415ZL",
  "key23": "4Cbh7SfvqDXgtfx7RSQCg3Q1GSXrq3RYTKttuNF9S72xMQpFvFnssBFvtHBA1aY8rsznA23qMBm4Deu22dAcoWhU",
  "key24": "nzfVkDeUJraqUfn8NX35vbzg7axY1ZsJNumTK4sSfkdHXYjGAJhQcHbHxkRzb8WTqoVHyeLMTujY5T9hfGhgtr9",
  "key25": "2QeCSQBHf5JE3DBmc2YRdvetnBAmFHC4VZnXvBi33dMTLCXYuDgVRFptjjggtxPU73MJekJ5Uy6bv223iUFZFdPz",
  "key26": "2mXfXrvCXrxeUANhUVQg5gXQmEuqaRWvqTPLDaSFtoC1VMywJjqUt9Fx6YuiDz4ZjNKR8mucGCT2EhdHU98eoxKt",
  "key27": "4Uttamm5VshN5wx2ethYZZwdYJsDjgpiyVf8n6a7tvg1ZpbrSgRPoMNR1oin1tik1EYN4uqEfTJouDykmLduF3Q1",
  "key28": "os15Gdh8naUF8aCcB8meCc5uMSJadVzAgxrFKsDKiVZvbUPHeVVksou5Mw1aY9TcwdyHzVxtFk6b9XdeKt5UtTo",
  "key29": "54f7wDYS1ndyBDSjBGqHPxQftEyzmfP2vqa7GMPzUh4RQNomXrJAVTreDMfgP3aPz7nhvJd9i7z8uU91ADzSyzB9",
  "key30": "3RoB76iTAoXEsVymoacrR2K9EHn4ZfByV6EjL27wEiVtvB2YMiyjaLH4kWzpvvpWCvmKDCFK5JtKoYmQ8jm25ajb",
  "key31": "4UNvQCUzFziarrqwXjMKJvmA11n6zkBPkXR9mQpyuZfQEpAN13rfHRN4JUpr3DRKx2DEu2qSoCP2WqbmD4n43pvZ",
  "key32": "xnpwykfA7K7E9cYBSANvnCMZ4X4AuR8rnEgNoTD3RjktJJ8YVnYuBVCPkwhpZ1sGvFn12f7W7GnmQVGEDYxGvbt",
  "key33": "4Njnmif4xJLpESAZUULua2JSUzR81uxhYUyvBYEB2njczdzueuLnZ5NYi112PpF5MMBke81YDepaEuUmpMjDeEfR",
  "key34": "xKZnSWdgxzP6xsXBjpfRnbM3gAqgeidGgZWCVisppfGHF3KpWp9epnpz8nKQsXnZfaVry7DrVq2xvpWcnqAEK8d",
  "key35": "5WHVdUGB5J5GtKc1gku92CddoxH9q4dH3Y4CkEW6XTv7TYE3oSwJWU9u3guBF9zdpD3Y6zkUwHkyp3FbCPNYJnXb",
  "key36": "3mzvG8N31WCWsxxiExUHME1X8du35w4V3s66RbvVfwNriderUAyDpEP9ESZWnV4qqow1o5UwYxspb615z11XyXZt"
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
