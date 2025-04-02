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
    "2DXWzQAi2wm1B6E56Sy8BrcT5nfhvTNShS6m5fWVRVZ9nBMoSKsXayW8yuHanF9V6Pn62o7B21rJry1FA2EyTBKe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LQFnzmXTNjnpDXAifi1cHL4xoxgoyC975CNSrtmVv6LkrXXrck7vCz4cN6JW1z1Qwz5YPcVeTkaKcQJYbj61NWU",
  "key1": "4rnd4PSMQh6eqDrWmema18mxScyHqgM9Z9KQBJTiM1ZspMLPq5s3s3VBgjiMFmnVfiUU86SKViBj4SgLsHssvVts",
  "key2": "2jg6b3ZJ6hcTHitHyV7zP13RcfCcaFKLAUYxG2szS1QkMtTQQT3DpNE6g1GqDthQYFn8jrvvQWMH5u4Km3P4b6GB",
  "key3": "4sBXJnHpyoYPNAq88n8Dtcqb7khuTSLv4QXbt1A3FZqqxA8CGjdGQXNqF3uzzuGXQJ4EP1HcifpwZFayhkpzevaA",
  "key4": "3vhmuKL5NGQkzY8Z6AjsNdqdAAGxy533oMavoXNiv7bbUSm7qZM7VcVnFqWBsSgWz9YJ2uyAUXZgjHpou7L4ywpU",
  "key5": "2NM9KZBdJnUFTcakctFVCzMZygbWwWQLD88wzv88Htd9TdjzRFctYT5hyafSWVePXkgjPuR1P1tAnhFnhPtTBc3y",
  "key6": "qDLdoohjPAxku3XLfJWggUhhgYiTGB1REfVeA73HD2VcMFrVsLMCCDGLc75zhqyf4LrHMoKrMcGsjqWF43ntwNu",
  "key7": "3uGVz3JCry8jQneBjiSjD5QU1EX4Y57TgreLUAxLmVfD4hdDUr6Mz3bz9pQ9bWLuMBSuxiEEWMCRj9gF4iGVwfY5",
  "key8": "44raSDgs1WnZcepx2Jv7bE49eDZKJ68KgePaQPt1TdebMYpuzcouPkoQCt1czR8skBZ13jeMPnrg1XurjemgT94d",
  "key9": "3rb1QZWCmPBcK5aJFLBR2LUMStRgexHwHy1S7srspEmNiBg3Wph6aApuY5iFWUQ8FWBJv7vrvhyF75KX13NJsecs",
  "key10": "3QMhokaHAq6SRsGyRQANuDbYQ7t6aXFiMJmRYVCbVEfxkpsGvQesVAQCDpfnbk11he8x65jiQ84nhCFnVrehxBC5",
  "key11": "2LAgbgTxt2JQfZyFXE5MhQ7ZAzDwLWEiY1XEiUsfpg5d9P7WPcSeQeBhCu1HAuQAcn1JPT6N9sYoejrQBv44zcjp",
  "key12": "26VdxQvTxy2QBqz2RuimYkzh6sZ8LB64oD9M5kdrmpU5jP4dLEMy4H2qX4RVcmDCQ3idEKJKpoHANA2fm3on42iu",
  "key13": "5ya4Dsc3STv5BFL213t4JQtRUGgzxbHU7LTzV7iwWxD9WYGuvbbXmLeUuhPUWeF7EkkcHZ2XQWrwGjVCAj3HMsaZ",
  "key14": "5trcEEKS2gi35hEC1miC6bPCgHc5t1QLNELEeNwzGP48CNEF6EiwuZoCUDL3sCDKHfYFYKNhN7TCUjwXSTxWJNjS",
  "key15": "5NHfYGHvJUsEfFNYwxW51HyHci4Z4Sb6e35kYhYCKtU2UjsyXa4ojQZ3jjBmQShNTLeb1GC29qoZh4uUKGPVUnKv",
  "key16": "Hmk3RvNWsz69T6c8AczS529u8feJNfdmzQNCrBeS3q3Ew87nU3F6hTerZwnP77smjCT95gY8FXvGDgsVRGJmD8i",
  "key17": "3cPVW64e8vLMenmCb6EJFL12dcHJE5SQ8Gy3hFjHJiGwwiWXyoLSTCRdtWSLt1bVExiCdvxqXyLuYbX3CPDkPuoP",
  "key18": "N1U1tPNMVwDQEM72UxSJoNwt4XWXjTKAVp4qKAjKRMEmrwHmgsAYshSb8DuzPRu4ELmVYD33Jhzka7JFfrVyBs3",
  "key19": "4tQbGMum63V3qJj6KMqdAL4AYJ6MqUnG4q7dfxEZ3eLnEVMfM7tFxxnEZgwkYeRP62bsdsVnKi889e8FuvYt9wmx",
  "key20": "4T8sGNjYXJPdSeuRC4YJAB3GVbrA3dpq7GgSYv54UN9TeYsrJhDQRLzDwdvX6bKEenVmEuXXSG3NjKh1WMQMXVNx",
  "key21": "34FPEAkv9PZY1QPT6b1VNqqPLsvyCJVTGaNji51F68jJE82J5HgM5zBWAfAS9QyrU4oFHHyxAUFuk9TwMnQXfGkW",
  "key22": "4ZvEY8suD38Y7eJcDudguEPXE8fx6AJc4mCWu3zQmxUSwncNFVEpdeDzxbyzeY8BmrzReYeaZB9dP7ztATmAR5SV",
  "key23": "4iZhShyXZunAai9y73iVyvwu7ezdzkktevBHo5P7X7ejgCDuMWp8tuArJ2dDfuGniFiHATzPT4QJvsafECs8zeDK",
  "key24": "DYXpBMV8UNUmCD6rmL1AXNqxHdLGq1N3zpGwx1mEcRPuH7K1xXXkJ6TbYcBBKD9fYM8rz8Hu21AbkE9Az5DHskn",
  "key25": "5XUKUgCmkjouP6doqYDUs6YjAm4nzyEkBqgLu6CnhPp7qr3igJuyq2mmYtnEJDs8BN1Nh9Lvd629coHPx9BUk67V",
  "key26": "355rJEBNBYreeexo1LvA8R8vBpK8fAsvyj5bpf3Qu6VcFCH9XszhWL4Zaatnh6uURMUyzH61wMujcj98jtDfNXok",
  "key27": "39bV9UFtZoy5hJbgoHvJqxjUvUQhLG7urd3MYy4LzUdfshVL5Ff4GrQXBiWEdQKhkq9d1gUtFHnYMWfWoWNmA5n6",
  "key28": "5CXtQ1ebQAtRtMLTeBeW4xMBE4rDQLz3JEPD1qpmRgGm3V576cBE76ZzNdUyH3MHRkzXWrFVMBLQP1qCiTMaHEXX",
  "key29": "srqvZkDWWiYdT3dKs1BHAQVBiHscvY83DqJUJYTGG9kyEMsEnpwgXp2rbR3YDLPGZVHyUGX8H5XnL9nNvCwMNpC",
  "key30": "5TwfwYgiW7711MCras7x4ra71vL4NYoTwUZGDsRuN6mnw5EyrueUskDSvPY6gf1MhC5xHdj1qXyb87oMR21dAse2",
  "key31": "4bxPywa23ezCkQQ6phruNFWgeQnkswHy8g9k8r3rEzhBWqLxo2xhpQnkjqCcMmb9ED5PRsfofKwPre4HpzvgT6Tx",
  "key32": "32JGuaECAbULcuzEH5QaTJuSckYMA8VD3N1Y4VpAEpZdHj1a1goNh4hPSHQr2EEKCKcyoRhNgNfWBhrWtJp57WRX"
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
