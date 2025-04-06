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
    "4E9LhMpXhaCJny4LrPPe9UspcR4fCGXbmECqptpHT2BkW7w4XhrJDrDKtkD4MiN54Mqv1SmyXTrWzAFaVCkMwxRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WcJ9JU93UmUNcE8vkkkY5UcyggvkS6ypwNxXRCWPrvheKT52i2jcK1pe9iT2vGRdAAYW1oDqG5Qe1dAqoknDNkf",
  "key1": "5d9a5N8tdJ87T2BHdYatg89yJqFHevH2TwBnmRjrdsNbeG589PmVbAYPtRkrGadqCCgQ5h4cpNERVWK9KomKXB7a",
  "key2": "3wFpC4HxbdyG4yXJDq2mN4wXJ58fpfAAEX8o4PFt9RLVgnhQsau4ND7CqdnWo7BhDfqr8SYjqb8NcKHTtBiEQT6g",
  "key3": "WpURUZpg1Z19h6duYqSuRvGDVcCiyN8aDdaSAy8YvqtDTwTKNjKUgeG2Gi5jHVijvwnYo5GEmjXXnKqbmwdsPcF",
  "key4": "2QGXkNhW3o36Tk3vWMwcekdonnQsJXDbC93YVXg2gEAygjxdBmsqyhdE1cNXHv1heLGJMqLzVySPEfrejKD9Pzd2",
  "key5": "44w2SgFgpfsvbE2uLcKJrSXZxzdNJjJ4LhY2hZVdRyCbJF8MCiEFCFUErD1sDxtzAfh2xUehTp7UvnWZQHpnT9Cz",
  "key6": "58nmmLHSq7LaNBjzB3fLYyBm9V2haxM5kGG8KoBiV8LFyTWWkWLPrE7HcukxFZax5tgsbd2gMunFQyFUQTy3G9eX",
  "key7": "rQ5o7wi3sPYjwPBsHf8azmbZ5FLUy9xuyM5vSRvSo7pyR1F3JHRxQFaseBnSyXFWYKEpXriaGjDLcvevu7afVrQ",
  "key8": "56jXoQYhTJbesScri7fKsT71nz9TBarUKj6qRCPzdckQYdf1wznUuwyuZ6NZ4C6QbDWfSMto4MVV8GWbrp8U1t9t",
  "key9": "3aBWX5u1WFA1yzGDsWPQNXD7mDnAE6B31PTyPj5ycY65UnKoj1ih84pv448m1vx1AMff7UALyMni7THtufUmiZ19",
  "key10": "4Vp1b86ir5pAzqr8JEUwuTmLE6Tymkkf8DFU4sdoZE6LdFRUcn2AaC8uMQgsRx6BeE3gU7bbMAgoXth7hp4dojCW",
  "key11": "21HC46DzpL5JTWpLQMC6VFbnnnkxGjU6eLsn6tnCSQ2gsnF5F1soxRTcfUETvUgscnj3BdhiyacWEJ1hEY3mWc9B",
  "key12": "21FPNRHXJohodHFL5jdpCbp41CeWgoLjY9UgsScxcvqoFRBd9Zyv2ZGBFMV37sTWwJgYq1Px2DmoqcmRngAdv3n9",
  "key13": "5WU61mZj45jBi2cm7BZF4nzsRasrZhkm4rxA3G9gLgFnStkU9R6eN39YqMePV7hkNqTuZi4E1sqaeBwpaV5HnUsJ",
  "key14": "4MMdv3fTHstP78cN2A6ok1WZcdx6nSAbyvrTJSNhg2yUh64s1hFGDhP5oSZ5KpfETnioTSiG1k4L7ZRtcfWfBAfn",
  "key15": "4PBx4vRmLykwuXLm7nepYSGHoULSnTwzN1finhQPGxnQQgzeHn9jN8M34rNmpEPAbogxERL7vPFsB4gcbiv86TJH",
  "key16": "2LWSmxrJFfFbfBxku3AEXnNgvqpsALbH9aHetSNPX6YGdZpWk9BgkeDb1jT3Wg4MFYpiNuHSVzyZcfwPz1dXattY",
  "key17": "5Vok2X6imqXJvUyuJu7G9kvThzTnnpEGsey6oDhXUFCDr8kG1uDhA6pNvbuHKwDMPt516gC62KEWm5BYs4bp5kT7",
  "key18": "2XN5MVKZy1DbDQ3rMSWnyfTcVdRMq5jgLXMEXJ3Dx3yrEsSS7CckKDfzVnP7CanJraveAn5Q7cxALNJohfUVYjAN",
  "key19": "4cKhCBLWtfX5SLHezmHf37PA7KcNivoJrqtZvRGxfHQE8hdsqccDfgbRX7yHqBTHUSiRnm2SifdpdyHHCN6mhkfe",
  "key20": "4U6QoEt7kaiub8aAp9atLLbRkLu4cHzE6zmjKEimjMEAQWqeaNb6V544rufdMPVncpKKRHdj1aegFM691oNxJtfE",
  "key21": "5AGkeJ39Hrby1c3QcFuCbNLddCMpLCzQFw7CK9BovBicABQcwwWupZ9XUTa2DhHm6La43Gwm2jGdgDrrbDU6gAKm",
  "key22": "4SBmAibhZH7joKCWGRdEgEPnLmyT6d4QE9zGoEvFi53544SnqAAw893ELfUs49ja42xJTuEYybQ8kbGLE9gnPu51",
  "key23": "3mYaBKYkBTXy4RfvgGVKyqD3iR3WmrXw5JA7sEYQa4ouo1DkCGwSQL8bYokjvm6oHpBZxJV7tA1b6ZKbCUXJMSfa",
  "key24": "3UsgpuFBrWWZ9K4UKbA1c1j22YJX9a4nn9q23y6m3jUFsTwfd9Dwdn6dvFsKu26EQaytHmQRzybhu7MZaLt4wd9K",
  "key25": "2YiWwPEy9dweRfYdweTyHa8gz1Up57cBM7L69C7SCsPBiBULz3x92wrg4npbW673Tpn6uX2DVUPyXFu15FmDsR61",
  "key26": "wHgUzmKT1Sk5ySDF62WRx7GkWh6Z5DMgMMtu3oQiB5edK1p5uZbVqaTyayitv7wi1gYyzvTYdDwYD4FRZW71kUB",
  "key27": "5hcHSv3yT1nqSUZ63aBAjYYsfhdAywN3WXBhMcGx59E6USUbKq8B3qyC2fygA5zGpogkscs7w9Ueg4AQbsAiL9vS",
  "key28": "5DxsXzjz5cy8S8cYCK52L4jA6f197xKbWc3LnAoTKd2PL2bkawLV3bYGtQNo5z47dMJ6teY3wRBsJQC2QRSswnue",
  "key29": "4Uh3wnBcWbbSu4Ma39V8jJJ4xs8xxJJTnwxtUKat43YY9prqsGLL1qPtsjchEQzxsB7MhR2kuTihvRrCAxTNq7fc",
  "key30": "4ttXJJ5YdT4x5k7LaJZe6w7XR3jqpsHV38kgqg1g96koCJcAbd585UMScrt82UK2btpZCnG2a5mxkBN5SW8G54ys",
  "key31": "4HPsaZNLVP2dZwBS4SfWEUXugz9SLbm5bBYoo6x2A1jc1YKZUxU75ym3c32fUfzrnFHgrz9xEMKFKREhfpPRKEwx",
  "key32": "5cUkav9p9fHgDoWekEtL9oGZMxWJH1pFbPYZhMcpu1mxMmDJZqk4SZSS1rLRfGmrJJMC7iCrvBBzkoorWavgY7rK",
  "key33": "2BQVWaQp3Xa1izZp3vWKSgH15tKMJorGvPedJZnDCrLL6p1ePetrvR5urmhDTGY9z33WmXEKLTPFxBd48Upg7Ziw",
  "key34": "4E8LkuJsFpWv9aX5YY46f8gFFVZC3wDBNHk2orkToLRvzBptUqAGRkT6r9SjrRVRonjMX7ZQaTJS4uQC5WQer7jJ",
  "key35": "4mmzpHu6WYE8iQcf7N9i8oTtbMwVkmHDKHNyE4xckVxv1JETYCNLzugQMVPYnXkL6e2VyZssjBRrQAxrY7joGoNk",
  "key36": "24Cdodrx3a1zwno8MB35qN26itKGFxnr7RFeaGRGX637gHBScmmL3AK1brfGqS6ahtDSmp2CSgyr9PsHuHoamykq",
  "key37": "5fHFjorxucG7nmVeuPvk4hekGKyQXv8oi1f2VSCvdwtK1E9EXheNo27H5vaG1GGLVBNNv9HyPS4dMxFPdifygRYm",
  "key38": "5xYvUJq2xCMcdQYm19tfEji8eyrqcY8fvatnSar1hGbeS7yCBvpuEEPSQN6inYVTQjzDo4rm4VmyNQy4VJABceb8",
  "key39": "4MEVbv45HJuf3HJti7y9M1dPDivUHpyhUA3NARD7D1fGFgE9PHBFifJdLYjiG53AKGqFFoNc9FJZW9JzopkgUSWo",
  "key40": "fQFRNQhxfXRkvcYVmviKP4WdieS1As1otGyUMb7YvXWkfuZxsH75MKCWjSxPD4X7JEY6D4Cttqakr3BimU7er7h"
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
