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
    "3d2iiY4SYD6hL2Gv7rDPbrvmbLBDniarFMM9wYMQhK75aLJBuaxbHbH52tBrLzkPNh8PTEfJiHbDRvfRNi1tcoAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24XgZCAtwRygLWS8qx5sZPjoYbrxSzMy3fxt3xAUeH9m1YoFWiw6EXCSeDHrm4eByuqHxJAKVppg8Nb1wDKdMLMq",
  "key1": "fNeL6knfsP4N3qgCjyUzeh3DJpmir7DWkBGR1nwdN5zw4W1oNDc1xaEKLJqkUa1M7gj2vjUQguk6USueaCNsc1R",
  "key2": "pnV8HCgzTregN8P1YiKd7XF1wLjTmZrSowVskQHQsZqZWmofU4twqhPRnAxCsyp7pq2fNBLBiUU9R86mRqFPT8Q",
  "key3": "2RDDAuoPDAvkMNtCvV6kP4AQxW7XNRd3TgnG4BfMcuZ82wsLL6yCEiEEt7aJS5Va614NYBVPBY2xMto74ybD9Q6e",
  "key4": "pjYZL2egUgt6ENCmB3s5gbCLtUEEdpj3QXWAtLPj3aEBVtpgEKLdqMaBHUqjY55vLwH8T5fServqVDtoZ37YBeL",
  "key5": "56fSRVG3pyuKugXsaravgn1Ycw1FX1tbwphMEKYsmsjAXoGDoPsvQugPRPZs6CnXr9JaP3mmRLSPDURZPiReJnHY",
  "key6": "3f9wVexkvRQK9Mq3DphjQRe8vs3kxW6bdJFgNr2nmiL2mFWJ3e2cmHmiLJJApbjozH5DKknbhndxmEVoTwBGsEuX",
  "key7": "2wuZ5awexoYaTd82EJgPjeCvY5V2ceh4FjiHkSD6WT91oZHA2NgPo5TXMSwjhr5KZ9jrkLUG8qoMB7TQv36EhMKe",
  "key8": "56pp6Uw96gMyKuKBn4AUAxkd8PfQbi3yTwh3dgGAFZxUanvnqrxZqYnYCx68X21rQxwjLrMVkr8AsMeTeVsgFpWu",
  "key9": "wkjR95G8rYvXKTi64zJuQVmNTbiz6osNcihoDvXANUSpFwLBrSxUGLFQoVFJdLEQAGgjz5VTo5Yh2gH4j6WMQQv",
  "key10": "5oKusNNTt1d1yWnYnnrdL4cQdHcHaYKDPjdXBPtUPJ1A9Z5DPVqLArbuYzQQF6bv6FCMfAxv9ZyPD4Au6JYAJjx4",
  "key11": "B83MwXJEG8fPYha6FJSVkNfgRe5M4ny7wMXD93q3iGfzLLUiqbeV2mDhWX4kuR8G2L4seAmcumSY3hNAeqBs4hS",
  "key12": "rFDPcmQJjk6pwVY14JgNNBDUbYorHekDtCzRaewi9znhag2jyLajHAZyWw5nmECMr3bTBaAgZrzAaxaWLedD2Jn",
  "key13": "2ssAAV8CV8Mk5itKzu5phT2Bpycegv9dVoAACtUmgrAV4a47mGXzfUQK6iDNr6GETPpny1xEdxnmf2HRhtrMmpjh",
  "key14": "2nsWF6gvr3A4b4nYtQGFfKVaEetYTwjkzyLPS5Pqbp7fTKdYfF2BkdCAR1s6tsej4nfKbbDq29VHvKjSafFcxmh2",
  "key15": "5YMQ8NKFJLcFvU9Rnz3y1G2BAHPWbN52x7U74DZwirba8TZPnXEEBMDYY47Bh2do64UZTZyXpGNvBQsfbGARFrLb",
  "key16": "4Vb111gXoNPcvmUNTTRuLWWxFLkoc54nQVXyAJjmGR5fkvaTxFfTWxFoWnnPPmABFNa7rQNV1re198kLskdm4JLD",
  "key17": "4RVL5gsBPdDPSTXL7neWVFWLbpgq7EQ6d7qb67XDDoq4sSMPf4MWbc5xZk1UnXQVXHdNtVEZLev4p955ht1rqGX5",
  "key18": "4JybgCGV8ZhxuF28XNXrYVYBnEmc1EJvH2GaQtYqkxAoTUiAFbTFenh5t3UmZuhi3VJY2KXK8E1Uf5Z9jass5oHM",
  "key19": "3pKiXb9LzN3cHovhfBS4r7hmjR7Wz65Pmyi3puVKUNvVAWiKPskAeEvZnsWJqo6nR6itMwgUkbtJL16mikZD6Ynv",
  "key20": "T2v1MY7WzjSfWBYj4P3SE1tqFAvrDQJLaCrrJoeqAvizrwv9Bgpf6m3sS3XTE6Jxv1h4hA3Zs7tnbxqqiFUg4pT",
  "key21": "5HKaUCpVvKc3Kp5pcH5B94EckBms1rafSWpDyi7fnNKuWbVVc9BcXw2GFb8nguQiHmSDCPpc3Vt1Cx4wW9Ax7YhF",
  "key22": "5Gqntb5RXLhY4T1XQewSuhVXM1o1kUCXEESSDqp19fKKeDCKDxGySz76CKhLSmhvnyWP2jieW5TeZokKfBAZmzEo",
  "key23": "4DtGzN3A3xiPr22vxkvknHbcKDpVckH3ywJ7Jk8CJ383vtgzqPzSWMLWZvmaCnNMDEfv43psw9qPJLhqgsnAegvb",
  "key24": "26e7AmDyT1FLPBdUxeiHBt8PizK1dSHW1kiWMLPwAtAZEzR1udxGUupLQhHr3uyxqSMW2FpmL3HA9xrw7Ygvzz1y",
  "key25": "84RviyHfyipTy3yEr34ikc7XzgzB79usQSvLL8MHXgsxgVecKLd3KPekgpSCYu2nPHtofqVx2EK3jFugqyGzWGN",
  "key26": "TJSEahopdMcnU4koeCEXy7fmZyHgPQFjyxNHJvx8XkaNGvKQXocyDkpJMqy2YTsM2xa2E6ui3VUWq38L3LjNRqt",
  "key27": "YXervCL3FjbzcNvQVLjucy9XmrX1iJGxGi2D3MgXmZqKb4FvhAUZwoNWZBN3pRTC4seHWxXTY886mLiWqDNXnaM",
  "key28": "4ZCaAMsxbAtjAeXqryoP3By8bczRHi9iw2h6xpsWzKzRVxZgFfdj5HCfSGW1SV1ixUAcXJQ5ZeDU35nvXULdi4Dy",
  "key29": "4v4bWpio2XSyEw4NZjqCiHAytLhLXjez61CqyivtaYJD4DL7BcxGkE8kRbpde9NTYxDKDsTqerD8gSJyPGVR1ABY",
  "key30": "9JM6QdEfdVtAuARVv1Vm5BjEYq1kwzeXB4m1vNvnv5NMrMFfymFHxHTqXPiJFQNGzsN7kcg2ftCeubUy5WnrfHc",
  "key31": "2sgKs4nBvNofu2w1YqZtMGSNrCbzPFaMDN3nQP8m6PzW64rZ8PxykCx3gQFXYRMKHZ4JAT82SApzYHvM2XMFYNnn",
  "key32": "4TKwzzzDffr79VGpPbj4QrNnxia9VbELhyMCMXgXxw6BwJnyhp8RXGhqoXJiyU6XF6DsJi14x2pMoD9b29h1yjQd",
  "key33": "oNDmAaj4AUhL2vnSN7RSjmWctgS6d5njgvpKD4VendNvBANyKxgBhUTU6onsFgS5jnRrk876CgJKUyLML19Kv7R",
  "key34": "HpAuzZFhFsHGPtQoxP3bStnCDaM9PFWr5mYioddTPkS7q9DnGmpQQrxMc4ZPFMui64b5GuhL3NcFzpBSJg6kHpj",
  "key35": "ceQHKCuCfR82e8BYh2RZBmrekDWtKdajD25JFsCojz1DpqSugFY8J7Jdbm15LCivZ3ok5Arv6v1TAX1uRbjUNrv",
  "key36": "4QReaUTE9RMct63ossgx6VPgp6w5a4bHcZSgEr94oeAmvZF3RixaWsZPUdCo162uVx78GsALynANSsvNnZg1mjH",
  "key37": "5TbqhaJp2bFh4emZwMNyJYTe3WsDdUHwEYGFFuXq51FxZB1j6b3kepcEu71qNoHKv3FiFce9FaUkGKSB5sYTMYmx",
  "key38": "4Nz4wBTDSNP8wWWFsf2w8BRzvA1scAtxaJGZh6ToBsE61F12LFub9zW8UuvFLEHdMyaqXxKx15UGbW9177ijcSQN",
  "key39": "jucrhX8UGCeeKUTHEjrBHCEVaD15ykjeeeG46L5REUrSESpbMhWQw4zKPKwx8qvLiGvk7VNs5kTEWfkx1TWfb4V",
  "key40": "3fncPXLqQMFKEGvn6CSWz8tNptbKbjkxLVdfTjhy91EKDDCa39YW1BZMmmLLxYzB29yfoTQJyFo3FWVfPdPbwszv",
  "key41": "3zZ79Ndb2ZH98PTNDD5RYHEWeHqyP3Gs3GVCKkzunC1S4AZ8MWdTvVMT1mWQkRqaG3eT6ERjLkwzQf9a6LPu3Y5G",
  "key42": "3W64c2jNRed7ZRsZjPqtJJo1pJfzBvSE4Rs1eiKVfb2Wd3mX2SH4K5VyUYzdjczEUwk82wN6s3dXMpJR8ZJgVUTB"
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
