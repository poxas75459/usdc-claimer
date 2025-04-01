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
    "474DX7MFymASFoW51Dz6xMoHCLE28V5Pw378w8vtpfEFnv6PkqbsNmUSQZz6YUjMReBTjVya3YwnvBpgFVTeZ1vf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62SpZBNiUPKTQDot3HvShWxFVogJBvavkRoPuREwwXjjDqd865Ayc4PTdkq4xTQeFJpxv8yR6kxkvnMSHSFnXi7U",
  "key1": "64mpaEvPYVuFdPHJFBDvqdXrVk7VvrxftVNuYbLYxvnq93g9Pa82d3C7sRaQ4HPyqrSk28Zm8cdeoikM5uTSmMEQ",
  "key2": "5FMGoDKVczyriKH74RLdwZjrb65MC3GhQzZY9Pg9pmunQSfFMai9pG2Wex8kazmtu9S3sL24j8ApAFAnCsXc6GpH",
  "key3": "2EH5iS1SH3mQ425Rz7ATgWuK36NRxC8s6Az2Dv7tghf2wCdEvndaGk7h5HgrKuH7YkcGTuRKNTQbhAUWrsEGYUdt",
  "key4": "3nLJWRyYh3yUh6F3DkLK6jKgMbUwXZDPj3iaePnKTjiS3LQDHCB9wVgvmJNwdHaxFog9MZZ7C5ZQ7ue3dhQ2Qeye",
  "key5": "2AhamsnndjLhgvc5t3LqSAKoPfCZs4rThes9JNpgrmyUyawWy82jgSGZoYqHjEVKYtXvcCLLg88cCWQmpoM8zLJY",
  "key6": "4TF1ywsUwz7hJRTmWc674dDn9FfSU6kRV935hQv8s7Vbi65j68gncfaTNkiCsQFwGgretfBcViy6Z6jADu4dQkrL",
  "key7": "EYK14DbDdeMDzqtUt31H9nQ6vCwJiegheBu186FtQVK9FWgvqUhCEKh2shdCGE2nM61XutXQZmVmXoGrWjGVdSv",
  "key8": "h3RX7guxxh18bp58VywdHNnbK5pCe6yrWhev1GrRqMLHLc1hEstKnUKsSCpyWaGV9rSotfK58d3fWFnvq8g3KPb",
  "key9": "5MJVeRHCfTHiDGXC8rC7pr4UCZ63PFeGSGdM5ZhNAXPct4YiBsmkitSfwcbyzLkX4eVpDfg6pLk4dKCtfDuadUS2",
  "key10": "5ebkZ6DuS24c3CtvYbk97aZ17KahpNxhDTDXX2oAzdWL4y7i9DmWVZou1Pud2ui8FmsPQqJQiaP1HoJYgV5VMREg",
  "key11": "3hnZ9CuR329EQMfAXU829zqLRvxnkWFZz6Z614ecXqoe9WyEf4mJnm3wZyepkRMiV2YQ9WXuygVxjZhk1UjAZCZJ",
  "key12": "5u2ac4LCgVrfy1hZFWeJ1CWybn9XLwWWZsrvD4BQkqS95opYJEeSXtFKUnA54zNJienSvCVTennru1C8TwDYMfwz",
  "key13": "3k1qr3xBzLE45qEg6nx8869xpebDwtDdvJFqxFG5XaP7bV161NRbZQ852dBM38w5wpcrq1njF5dZ7zsp86nXECTp",
  "key14": "4D7xg8c1wxVqk2KD9bbrt8oZhXR3FhSWHL8XzU56ubBUQmjvBMSadsXiJev1PKSs959qSL8C1QEUwkAMiLDcpmsR",
  "key15": "97yC3n8b8FK9GR1Gcz3DSvwtrr4XDQkTZxf9c2yBSkw5V1MejNuBLMbBxJPzpaFnLFiL8xrsdqqjEURAfxasvmy",
  "key16": "5oB8Rf1oipX594L4CBF7GCwyknSxGGofhMVRTd85AWvoVQi3AjShswMBUnHtYmD8UobUAr3R3HwfEvMRXxknJvYv",
  "key17": "3gjaqXLBThXjvKi4VuJG9XtZ13fqXboSRzJNGScACfsXdGsFLUq4Te4nQMsnsCJbu29GmwYVqQHUZorfp7aPz5cB",
  "key18": "4TroXvZeim8tYYsZ4dHXZw4jDwdPRLyhs6hpqZo6ktMh1itPcfVYMRCurgAWAWzdr9Ry9pgiPStiV5V6uv5YiqKq",
  "key19": "373gWBd5jHRowmoxxiX4n3BxhMJTiq7JxNUCTMXbF8XEo62VYPDvjTg542JmMprgQJqVbfmMofVhG5QpVmvAmx9K",
  "key20": "4tbbJGGw6KoUhMvVyZfyrt8Wu4VUL3qZWmsLmnSQc7SyKFxEyWVE96i5gZcU1F4yWg6UoRcHdrHgPsbBxv3Yf8Pe",
  "key21": "doUEuXmRgvuzyJ3neMAB7MV2CQ3bEfTSWUnaEe6NPgQ2Y2ypUWZk7uqt4CFPy9RA17qHJYGbq3xSsiHgzogLiVk",
  "key22": "5L2xrpJmoZsB5Bgy1syT7qALN8iM3qutVfCuiCkKvyZUxHB3rq5Ku58Vizro7qtToBgfUYQnPSkVT3bszT1BKdUT",
  "key23": "2QYXXahZQivRNB7vKbtJCUKFALiV3vZU5HrCsS2kQdGvmRmkKGnk4uf9wzxHaGqTucEb2fWJoVhAxDtiS9U68HrH",
  "key24": "4qo9aXid7SSK9eHtMPmfjqPesxZR7KPEP2JoVAm414rYys3a8JSonbWG9LYXRiUNe4Yt73WW1ZqWouUjDSQ3yeAG",
  "key25": "4HqZ56TkjKsHGK2SeVnspX4TcNL376jMbGeX2dm6VCbLDC4G1XCQpa2391oxM69ypwhjNzCSXtqrvNRJyrng6dQm",
  "key26": "dBKrgdRV4u22JwPxuDo451AbwyHKPGsdP8UkfCfSJbJoPvsxa2wAKUgbsFiz1bgEBAbyyhXjEUWEbVmoUypuwMs",
  "key27": "2Dsp8oPTbGr4uAmEfjq7xAJ1uju5bD7ukVthAXatu1bcHCjJx3a1mnLwJtpfmsVvrSWtJRgHAjUrr1MnCmVysQ2E",
  "key28": "3ovkSfzwitDXh5Avb5Cj8kgSGpn4ESTnxqpQw4vr8nEZYR4qPDn6betYJcQoeG3g7EbEPnvtYFdfUvDtiy1Vj4Gc",
  "key29": "62idkQfHiAqJeoqEfHXcYTJBgJ8AmKf2c1PRroWJuA3va6fDhzmiZGuYy8GDCMYkrsmA6RN8J3uqHrYaBUY6BMLL",
  "key30": "2TaoDAtnpuTw3KV5ML2AuhuijYci9jBqKRvYAsnSVahtKtTpDuvsthiyB9jN5zKojuwFUUwiChxJAQSfubjywQSp",
  "key31": "5zc8a4k9hk4zSRtfwobJ2U9UFajnTzAzr8TnpHHBRp7TbTs3jxuZbQLi9o7XHLbjtnddNfuYw6UmFQVoDLvfwJuN",
  "key32": "4DB1bQdWZzHuVajWZTAa3HC5UVtJFnCTKZiKxXPshUwotiPALmHuJ6NkPVEVY4DhSmQszP6qsNfLPnmfpM88Pk1t",
  "key33": "4rQJ8b4sBFtzhUWHcQ8JbfgH3n2AsVEGYKSm31oQj5DHTGNSmfgVm12ukqF8fxWTBswtVRBtFcHyAPFFQkAm1Ji7",
  "key34": "3NQ4djeP3dniDWBwrY6dsa39M2HpATP7ihamZG83LXjCfhnR7vR5kvyz3hLSUShNREij9qzFv3dT7TV3KigXHKTf",
  "key35": "3d3TNqRxhAhDgqi9MSbauAdUSkP6GRRCRH3yiFoFzYMERgLkkbfFQQLycbYNTLxrUBhB4LuxxPxVXWxQFum5vnM6",
  "key36": "WFCNhRUjSnfnFtBvZMVPjLrnAZQ1PAJepj9rBCUHPsm1iFwS4DqJhSNCymnmyhjyfbMQEdrtgLzujJtwkPKoYKL",
  "key37": "39wu3c2f4bEcmKjZTA4bvpjBDJwMVQnfBApYQ6EsESDrt4rQTWctz8xwoPsmnQJut4QrcQXf7K8Z7KV8nTzoe6nY",
  "key38": "QRYp1Dyu5TFPQyfYkm3JDT3fppurb3j9d4t6S7HS8mUFMjiCL4gyg1AwSG6QFad1CpboBJcxmEP2HKnMxek9jYC",
  "key39": "3rzY1mzqjirNU5PEAeQw9LQ9Hofg6TC4iePZJPSoKjBi9wQBm94yPczVQB35BmsgoPZtJ9UJ2aV9jzT59UzigfjA"
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
