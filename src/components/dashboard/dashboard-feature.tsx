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
    "3MQEHcSRYwyK4otWW5mV1yqoJNh7XHmznhbTLwWw5Ao1wSZiJk1TQyWQRMd8oxHrG5y5dtFy4AeGAk6PVY7BjUJQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n9Tey4a3Truuvjy3TChAXYB5L9iTstXYonb54SXgwCQ36p2iDkPBrvGCnVmnSnJD4Ft5gdDiPcXP57etkdkC9rX",
  "key1": "2mmjCpYXeBwiNVJz3a3zgBSWtzHhrhp3WAVBiSpjtDbNrpgbRgckJb3rqjbd21g7ArbZsfhdVYv8ZcVcCmKGpHVq",
  "key2": "L2kn4VwSVvyhYbBZQ1pmXT9xj624ZW1o5KzNBrLKKbk6B3Aze5DGRExfQ2ChXNwqkbaWywf49zZBA1jDg6HMsM4",
  "key3": "JJhRhXVErvjeZxJ6c4yNCiL3csj2UTYAS6sf26MUcdYHT3aw7mzG9HXVAGxTYm2SNKmmfQnAfwFHpmXadQF4hoy",
  "key4": "2ZTTaowaCsjHQHDtiEQ3uh9ZPxzbXLz6sKajYpgnBsfjrwTpv6dRko1g1qyQ3p8AgvdFe21UgmxiYgaS4UJpj4Fm",
  "key5": "24SrrkjWgLn2KK1p4FSEkDzWstDiRDN5mPNbsG3vdjnFq1A9bqM1g2CorQcrLViajgyobB7HiXAHymmwcFge1WCP",
  "key6": "63T9atesWoxAMw6ozoMJcznhA5k3Np2kKa9nPx85ArbHiuqvnUv8e4CWEuLEnR7XSe3ef1m5qUijWenJJ6eAv6kL",
  "key7": "4DRXnDiqHx2PzCS9h8JpbBu5cMifua1HHKhpxedwrx3dFK32X8q4A3xKrMCvXWbKCVfC2msSJEjbHWfdVxsiPTcY",
  "key8": "3oyhNVsdV2BjkHHiKitfWQnd3zYvKDPTHCsYm32DqDjv832azHBH5GkoTeMtGfyu9bA5zwu4u6TsftWJS73qSyn9",
  "key9": "36X3fHFhjHRCUhcUobncSBN8gwoGWAQgTFGBHqTatRQASmxAhXnoPUpxRZ2fx9TWa3Q9y1MqnJL2UitK4nikj42a",
  "key10": "3Pv55KKWegpFu9VzbiSV48pVj8zKZp2fMi73bjtGs5ry2p7N8ro2LG96esGkwTGZ3zSqFXJAskVdTEPWESpD3pLf",
  "key11": "vq1sidW7eSyKd2zsdAgJkTKvB2bfCNXM3e6X2t9Xx8RhLXYj8sVhyrGNK9SFFgdcU5dzQFNrrEhePdR1uZN7yrA",
  "key12": "4xuMUo77YMHS9W12WFts9FJN5jthd4cQmwUVT8sRpzPws9oPrmcUMRjhHBpU1S8ev16JMp6MXSJnV2nmvyGrow6E",
  "key13": "3stsoEJGbWJaYa81k8VzkVzwm5xKCMrTeBQF1ijrSf62JJjsTEVnmQteqku71AV3yZZVXa7Vu6okL7FDRHVvs5gp",
  "key14": "2fF48uWffzwSVbT3WYf4RMYMpwhbYuzQJz58CcSzKprXx1e7pJH2J8r9zUFB1NjfuwUVD5PtQniUb3chCGuTj24W",
  "key15": "savCmsKBJUhi6hV4wrjLrtwWofwwUXKpEBdyY8C8TZf3vf8MLdpAY2Lc9FyWDHADRffvromMXi6HFWT5MEUuo6v",
  "key16": "5Ss1AgUbQ31115FYF78tdaG7u2SnnBshq6oyBdZzRhnZ5yRrt8Sxtm8pdE68PFQj69TQ3oUJeC2ZU9XyKeaAoZ3b",
  "key17": "5BgWh1f9HA5odba31GThYQ7HJedarCBWBFtCRBx3X55Va3kPdgwZd152yd7UKFaC86EfoEjod6vGYw67ungmkuki",
  "key18": "3YEtkeyw3A8bSu9AqXtris4qRjnDGXXtzgpyYWVFHpLkQn8cKRF6fvq5NHyncuSEkgSGqACwvondAtqQMRkhNrGy",
  "key19": "syxZjQBBkZpG8zJhTnbBksG6h8PJ5YPtjoTSaGJiX4W5u39YT1XwKZFgNZdxFqx9KKdQg4L5sgKwtyP9mFUbAjQ",
  "key20": "3K9HLt8h2bXNMJydny3wbwRoG4JZqznfPLPnk4cv7Y9kpVG8STfmTHtokbZmC2PjZGptHzi2er6rbM5JaAruD9HQ",
  "key21": "4NBRpahrbQWh47KbMjVG8NL7p3ExkCLXXmrZUmYuzghtDa5aKecYNdZnxytqvceovSJQPwjVTMFk9aj33LPEG26T",
  "key22": "2mreEzNBaDo5Hf9yS2tBjU5xnANMx7uSq87oRDLSuWxaM5WjWw1mRurnSvkAbjMrLjeVbDU6nxHaqcBBKJkdpCyd",
  "key23": "2PNBxXJuGU27pohm9iAF4iq98roPk8cBqqUcxDRR1ey7kp8tbvicrSyWzuSa9LwZi9SbJFtAZMQE2nv9Aj1KSpeC",
  "key24": "D22xCBDq3gxPNARa41vDSExA4DP7Sup28RK1iuvVoXoh7bR9q7RW3w6YKJynyEqktYnBWCMz84J9ABHvPLjgaxs",
  "key25": "319yYhaHe9E4WksbKgkWSbbBcnNeYFswMPRXXWEU27UXofH4Dpz23bk85W1bNRPJSq2abVRLhGW3K3vCjctkzHZb",
  "key26": "4irJM46Sn5qQVNZ81sTCjF6CbSffCrHRtnAxeoaSJ2nJ1RLDyY2UNtZaSJbDjBPkaXbZm3ghNY2KRJvQMzRbFRrY",
  "key27": "4Aa2C4xs7wViMyj2NFmyhwTm8oKwia5idt8uwKszvvuDg6n7oSYRSfHSESiSiFLPTQH72hHHmVMZ9LoJrW6PsAmK",
  "key28": "kgk3XZ82Fvv1NPzVzyaJVqnjTyYjzP95q7qVX5xwZTJvwezkGpMzsdnYPxEusxqAj8kcRzoiALaGvnaECYndTiS",
  "key29": "2gcbhLuXQQdmFTG6GBUcvEAwDKdFiPN1k9foxtdpCQDSbmuJ98vPcvEw4yVgCwq8ujEWJKQiy2gYFgLkknjtDPij",
  "key30": "4oXqHUWu2914aUjAGACZ1L25jEcCdqYotvhSwCZUCKaFMXrHZ8udh1Hj634U94nxfzihBgQ14thuQSMMaC7peJTz",
  "key31": "sEov9s2q8PwtzRAGtoPbRk8PmTM2CosrLsY2j3wsRkPY1zQnouAc1kLSdkaeR1qweu9v3TC4FtiC7B8BHL9aMWE",
  "key32": "3yvmvWX9kzq9Zusi77FjahfjHRgCq7Ko8beCzrTjyA2FN5WGpJaHiyByA9nv8GRvnnod4k2xaYfYucKrpdSxrGac",
  "key33": "43H3LWC1Gk1QpkfUnKWaa7umF3vQdyvMv1LXBvJ8ucme5XfKB2v7vx53Q6jgaCsFkhK7XXPPyn6C2GJR4wVm4irf",
  "key34": "2C9xEGnqtD7nBeCdHDyyJsCbHhV7BHKVrYrzoNxXewg9D9scE9S6Y9iTtnAWYH3wQBwHbj5tHqosKqQdiL1XUhwJ",
  "key35": "xdydJNmgXCgJAY8P3LDNntqk8S5BjnTxdNzzSL1qWKWHUhsFxkLCEBjHyv3uFTm6q9tnBm7djWZSP5UpGECRBmf",
  "key36": "5XBApj6PZUNGtneyZj53PnsTMR3aDPrCrTP9wEhWZxuC9wZXGPfUQudX4WbBWwR9xuNvEFcGHcNtiFmCtWFHGssZ",
  "key37": "2KETYtBNUH74qJDJwtvHU2urkG1Ma2wcTv3UEmeWhhXnYUYiejqE3ttnThpR6zV2W3MzYNTMjhFyYpqev7gPE4r6",
  "key38": "5rnKUGTL93T8EPcwtTGQQfKqn6tWWBB8mALqJozyzabVMPEE3qkBvhgFACVVBj3MieDyLZdgNsxzgTCM2ei1VATL",
  "key39": "4iSnPZhBRNnUiwbX2LKS7GBy4pHWof1r8qnQTCYUUYAhXjFwsPhS9hFPbaop6DRNA8KHEro2XCeezCvkLBp6cHxE"
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
