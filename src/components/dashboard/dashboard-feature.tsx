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
    "2GU5sERqzdBYp3HyvUaZC5y1iitio2C1o9xA6wAZkyJ9g63oAvhxUqyequEqxUbfCJuSFuQujy1qNbTF2FtA1mob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wjeQRHzXLKaSdEwg7eFxCpWVHWDJrofqpa9dbrH2B1dy1vscaTdpLukKzBFdvq9VJwgrQ3JvvWys7uoQiL3zhRv",
  "key1": "65CGVumaT5Z3UjBx2eNLFGVNotHGEFq2jJjhs9PpiAX4Jpe4ABaj6sbeLAd6dg5xxtsDtEKCAsysiLDYgm75JjmZ",
  "key2": "3vNxNoGDRcddeh7MxhJzwXzM3M8yAb4hTBN49ghcZYH7RjE5EiPZXJer4y6Cbjv1ZpKJLiUFdJcqNB9XsK8wajEc",
  "key3": "5NGa2urEEXosj4YgD2Q5RxNEkA9PwuUsk6zggo45ST3AwKxKkt5Aavvbf14D1PmzTWAnVzikHJN86vAhxJbeVHUv",
  "key4": "4azvmofpyjap8uksFn8PF9KzxqsVfgDoEjGj9D3AZxigMZGd7JnfQYXfiPAXCuUhfRutwBYULhTpg3GmoaCJzEkK",
  "key5": "3uNvtfzf2Hjpwip2WqCDhX4eZunfd52qevyzDfyKiQZjRxu3SzK2BoKCTUKN4kmsUZvE8TPkjhnyTVBSmq5j83S",
  "key6": "5fiVqF9YVoWybgkaXvPCAsjmsVu84P4dFhpMNg8Y56RAYCVqieYvbSjz4EXkTzx6JYkMVW4CzCXgAr1WyYYutmvB",
  "key7": "58AiFao76MqNnGkjUBFUVK3bSNstbsAm4bZtdQrPJHbEVErxgZRsV5HLvty3V1Dguz8DcSBstdcwBW78VFKfo6Lm",
  "key8": "3BE6Nxe512LvUqtnEux2yuYKzxiHT2tER5goZHARDJSDuupim6guQGPZX5ziKMcvcAULxaEzUMvyPKfPwyrVaxm5",
  "key9": "4wxrgicDFd6sXVHH5h8aVRHskMBtSDUco1C1rfif6xzdL2LFKVCeMTiqMDaeEQgeMtktdfbkbXE1izF49DGWFTpa",
  "key10": "3bUbUMviNXZK4cA3FwDstoNsfWWimopLKMKUBTwkxYrmo5vQfS9Wu3PyD8KMaZ1BycPeB59QRKXoekSfNQk9zcya",
  "key11": "318FXLQHg1bEXruKgWcSQNZxMnqBH5WWEWKd51BwfyjWDvvrtPKyyhVrxdjrP8F8hodxr21P8f9SGig1Gud5m1h1",
  "key12": "EX73guz94GhWP7bd9oqaAz8Pdpt19gRUTj11tZmkqHJK7hSjesmD21yKC5dukiKsAwSGN6igw14HXGLBxDKMuyF",
  "key13": "Te975QzsPikqTnp6xHr6JRn2yD8wGNNq18bost5s7xdJj5BYLefDB7Q4xiLitaFnAxzbSxw7iWvYV4erGqFcpWg",
  "key14": "HuwDZCkzpTBg56imixYBQBQFGksL1xuKSgve98fPx5F73ez7ggyDi16wZJCVAEc4Ms7NHDkCdVzgQMPQE61HueW",
  "key15": "4fhaAq8dVbAVvgr2ix4wsvZXcs44VmgggaK72TD9vNtUGwfjHji34krwFnbSt4CZdWu2ggstqtWCEJiQtaNc7pFd",
  "key16": "nfrg5Fben6hfnugxwgxpTXXBhFnVyZTHmHwBzSRZ4qp1FFV4ynSYK2bfvghq5a9CMMQBp7Nwmqb4KxmccD3Yb89",
  "key17": "5ePw6aA16dkAsdVP228LMx7vj9JwWKGzdC5BZ9G7Hm24snDCJ6BrfPt9ZYrnuPsXEqmpPDiUUP6BUhd9aTDPRDhL",
  "key18": "5uCNZ5s2ngeRRsY7e4LUn4rL5d4XueFRL5Lzd1TVsdDKYvUEAAfnzFqPqoMTZtXCxiQpphAtN7sNLadbzUkmcKPd",
  "key19": "9Ztj43aPPWWCMjVaPte1ueM8az2M67rGfLWPpU7jkMJgybZnEDEtnHeSLS7LRTzzq3YamiufJSR8tqWDMcyP9o3",
  "key20": "3Lw2pvos9gMUiKt2RxD2pB5uhyMzPh9rwk1ZENof2oFPCxPr7QpixDUvuFG2RVsKm6EAapTE2tsAssfwJYDs92xV",
  "key21": "3KkB747NtJsiskzk5K3hq6EAcqMKaawFJGkjS9wPbdbX8gqAi5nnqLgfrqiktfsznptuaAgvMr6FYEPTM8WVY3mL",
  "key22": "4j2sDonFsmwfZPYaq9dQ6VEX6WKHPWPf5xYok7DPr8uqwsa9quu5GnCGhAmbgtUUykbrgrTepQDpm2BRDuk41zVi",
  "key23": "m47gKJ1n9kv93AZotrn9GcxPHvWQbrH8JfWfjVyjUUFZUdJSmLxupN9iD9EJMaBJiyUEMZjb8V1B4nfc1nVxKiD",
  "key24": "c7fkonTBnLpDXPSosApKasc5r246KXXaRdmSSirPphKY1APDKNhxcYoNJhfzdGEob2H33AJVwd6HpZHV6uZpHvd",
  "key25": "49MYb3CX8czcU6Qs1Z8m9bG573fEpqSapZVhf2F79Ck4DLiUQnr6VuzfEB7tx1CdJrGy5H892HDDF4HwoLVfg4ew",
  "key26": "2jma6Ykv6z9cYLBgLNauU1NWBZPsFGdy2z5NjjF5VVNJGdNSMv9qxYnjwfaSXWbNT31xHxNoZVNKxGxLE3YvQQ8r",
  "key27": "3RLBxqGWRmMCe3u5yCgXNzEtdj88rNKhetju8gbYnvdp7iRHsVJaSpyZxnCWK9NwxxztavawC4P8h5mwAS5PqfWJ",
  "key28": "3R4SjbAZ1JeKYQsbdgQpe5r3DbZJnWZJHXQXNTkEAWpxoaeNtCCPCxWQ5eFb64kUYewRtjL5dL4zZ7XZqDqQyUcP",
  "key29": "2BRgZxFwLg18uzRuD8KAnJCtgjbaYzwHVdUUMhYhwQeoEC3CjaTtTjdbTF28e3ra9Kgurqqcu26S4bMiBSXs8sVt",
  "key30": "3R7oDP1Smk5bhF94zkBn1UdUyfd14FfYqxqf6UihVPFhq5u1ivrEAuzGCmgS8a9bnXZ5j1XfagYJr7QH4LD2hZBW",
  "key31": "2pXmNvQ9e9qxxaZ7gerKGffvqJQVgs7vuSFirKEPBdkVdUkFmNFomevcvcBphWjPGVCmaYWtGkRGk8hsAEs9oXqd",
  "key32": "2tivRgw3PKj731X4qWB1GMV7SYwqTsRmWgxPxndDabzh1F4rChu1KNNYHPtidibUp96hbbphnZUpBPaq3wmx2Z3s",
  "key33": "3iJELz95tVqpRbNXe16Vd83eT5Gk4h6mP5HkpqDyFaL7Q2RHCPc9AHCpcHzyg5JMEDXaf8osspvZDTnWvzC4FP8v",
  "key34": "4wWQJ8isCAWppH1wWFqg5xTryxzqF9iXFsVYbdyP5LTuYvcS74U3vXVkSSw8aJj3ns8bJ8C3a1miJXJmrdntS6Nd",
  "key35": "4Y7DmE1FWTP4vUstc7vctFgGubxDrrimGasK8h5kzhKWmYxAD8q6jBEpL4Fj5kXSwrr2xs6HVBDaD3JHP7CzHmA2",
  "key36": "5HKzKvKvd3edRiwgkhgXncgYxpRJayx4hF2DgfF98YLUTJ3yAdLTsJjSwCepSVEwziKRnikkym8ffEDQwBy7M5tT"
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
