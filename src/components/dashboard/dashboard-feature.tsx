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
    "BdRbK4jb8M3mfvUuRMUXkQ4qiKcFzW1Mbu5WT1JSdexBxmGTXVvEudqLJADHBqk1bo9zneQoaJHGF3usmnD3DRd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xJ7BRmWR5RSVRAQg3M2RbgcGkjr88py3BRhiXrib6cCbjLpUHCMJvsMZNJZSmxsZzEJ1Az5DwgWEDtpa4DmKPFd",
  "key1": "byvjrJVxPFjKNhLKpzEYPnA3Z7Nh6fHAK3wxmScUsdnnHVK5wE3JYko4ww6GKFsGSJ48SawyURoqywtGNoYAUGT",
  "key2": "4x1CaNjNg8SDRaMQZETbNWrqH1W1Smo7gSKYD1qE61NhNmXEumhj783Z1EHF38FM9KWXueygVcMjQy1UDMTNXcWp",
  "key3": "3jqe7cczUpWrSuWRGwfrUnMKdePbJR7oMzYvSLDWtZJVdNHFnQ3x1ogXz8hi2YxZq3EBxSFg3A8sV8ga2vhPJZk",
  "key4": "4UCrywsnfuvKKngNZ2wmWyf8Q5QtcwHPjd9g6h7i2XD5HJC4mJBNS4v7kXL3xRQcFNo5zSwrcQ41BUjaNqSsS6FS",
  "key5": "3UzQCSP3cxA16XVGoKzQESXhuaL9kh2MzbUpkQoYNqeFPL3yKzZuRM4Mfcy58Yg2GPfpiZp5k74D6i5kToVtjfzS",
  "key6": "5LKeBjNkDyUuyPEkWuUkeTXrY9o9dsTDKEvS2txaHNesLeeQGbNhvLBqiq5pa4m8svKiki2WGnp7zA7YQssHDij8",
  "key7": "5wbZPuDiXJgwftMXAwmyX4oPwqKB2U4iaaNdU3aU9pWco3QwH8TXAbQ8Fps7o591oGzZJP8DiYLfvYa3Xsa4pcHb",
  "key8": "2DWupSoYDU2SJBBpr63jUY1R5D8VZJ7LHqJUdZ8AdnivFc4wLuQ5fq6ArEapXMX2ndR7A2Bk7QVzrZ53KWmYFvWv",
  "key9": "2Mvkf3FyRQkGWCN6gWGKToM9Zjj9sq5mGVNuXYu5RxtRzEzhaAzYXCNer9KFC4D4wngqXwouz8c6TEfyCq6Ncu5n",
  "key10": "3DXMq495Zcw1MyEnYWqnXWmTxzyicPitouHjtYLQuGAdvNfWGquxtkxjUSjR2YznPG9tgZq3MaP1tCUHhzqQ6yfV",
  "key11": "2nY7mJFzt65GYywYfu9HfYivqrfJNMGBbzLKcX6LnwbcpiE1PEtTbzcYS5GU89xDvXL5bFhwSwJhR9pbFmQUwa8t",
  "key12": "41udRsLhwPXWbDTUGjs4jyMsBqo2d4NxzwHvXbWBY3MeQj86jaV96q47vxbu1p41pYAt9pp91HuZN4weB24jJsjS",
  "key13": "4f6nTgWqE6r1HBdBdTFhQLvJRYoaDxV3uMfNSPtFTCJ8P2oLj3E2rTQ8Wd9KztwYGr3TCSUzoCY2FHhvEBhA3zLt",
  "key14": "5bb7XXE6CEMiwv7T5Tu3JXHokW7hy7ZZtePrM9R5Tsimy2Byq6iTzBgFfennR8RqSUS6nNGm6oo5nsbtBjGDLERv",
  "key15": "HVNteLPNWhUqxSckQrKWSVi7BsEokgRcZRfVc9fv6FVpsHdpa3EgokEEUV67zgXjRdSQa6toZJGAwWnB1aYmBcs",
  "key16": "4TmqkxM1Aa9ZdESTjNQX8HfivW4uuzxvj4MBwLK3jHKAg948CYx2kpbMQDDph2i29hzwdYqzr5tH72L3oGrfaW5v",
  "key17": "26xsYu7kKy4SkvX3uPyK9G41RNq5rt1Pg2zStzEXwwBHthM3YaZYQHd38ZbE26cK79CJeDTaG4m7tMnN3UNU7GVb",
  "key18": "NBbCKL7vxuGEnAyRcSvAScQz3htCprFRhN6zvjHYC165KMYKNHcxE1AuhYrFaxRLP7Q5EQaBQjbP3QqiBDtdkSe",
  "key19": "3ds5dKcpnhZK9bifp2xQieTXSFjTBWMEM93puFQRdcqbLHof3jrTv2MdZiwm92WsD6u6ezS6Sq7zQ8ufzBW4AzQM",
  "key20": "41RbLCTT9NEdUz5SFEzpvz1oupb2sxjYzsKkKausWabS5Jeymvs2fQQiwfGKAsDWLyqPU4vB1imRh8N8mUCTUqwc",
  "key21": "28Yn4LER9pqiy8TY9fqdzajPpoHfc55HSudxE1nBX29AtHA7uvsHmkmgpo178E5LQtGiBohyFDY2zXFKJFm86fAk",
  "key22": "3rep8mBYruoVoZM68Yjj66TXj9CdAoKZszmdgj7ZffWesWZQdP6A3RcgJRkjAUYxB3RX3jFwsLKLq47q4Hhk2yc4",
  "key23": "fpSByLPqNs5Y122BMXcgoumZ8ZRt1d9BkTyqLpNeH8FZDVgBaGodcnPRKtmR1gvPDVw4KqewEVShLweqGa3iYY4",
  "key24": "KBfAnnK4NNJyCZWpBXuy9oa6MWYkpTS1BAso5V7za1XyCXdX36N1mgDjf72r1zfv7k5sbedT9Qb2Ns767guUxAs",
  "key25": "52rRALJEmXfEghYZY2iHT2qdBeDUj9EaTvGku93fxBX38uuitQ5Upfhpxmi9qcTAyeQ3gi9TrpMngPqJCTYCjaDd",
  "key26": "39DXkNYx4bugiWkCAciHDP4Tx7aBnjSsVVtc1U5CD3nCBZ7fTTh7QKUku7bcqGEr2pKY3e3JgoRWA53MtcqNbJAL",
  "key27": "hDNtsYu5FChXAqpsxDcrt5AWUWfHKmRt7dJNrNm93AsQPt6C97LEDPs8ZHyG6mFf4tLK6WARqiCAuvAf7JaHJ3h",
  "key28": "5YjPn22tYNMDXxXyicxjriunB9d32DeLQgEMcCe2qpuyBXRyCVuy4SwCGDduHPnMQs1p7qCLuVNmEWBNk4VkGukK",
  "key29": "2rRo9tJfPauKLxDHrTNrhHw7rqrnHajmVbS4qaT5omyy7cfiQPd7ch8opXRiGcWjq4ZCiTwUPWY7fz8W1HgazPce",
  "key30": "5wdjM4f1AaovRw4F28FnCwz3bXPy76kQner3EkE82y43WKuTjQ1ttY8u89XL3E8pgxFfaM55sBuTGWr59Jz4Rjb4",
  "key31": "36UVeQTwCxTwPTojjsTrXWH4ZENgwMAtA17C6uJDNpsqUh1MDQBvqjrNMh5kp1hvc1vM9NkC2EfccZcVMinnfEyb",
  "key32": "g1h76wumN1x7TmZS7rgSQJM51z11e4DN2kD53ATX5fNbXyuK96w9VekwDmaD58LycDzgjM7F6FjsaFxrCwAgs3b",
  "key33": "66nCmGt8pUDxr37juDWFzKNotHdtis1ikhUiT6XPhxFwFCzgP7auL4yemtDoTqqF4ikNdkFZnVcJKh5YqB7ZDjcB",
  "key34": "2cAREReu8xeCk7Fd9J2XyNrBsBgCdJZ67hULhxFkf1QKFK6UmxZq1G7diBY5XcoiFstBuHPJ7s5h5JNmdM87bjj3",
  "key35": "59iN7tnsdnj4jUu5oAm9EGhhXSeTcQYwp4g6C8f5ZgReyZt9wYCPeJV31Uhjpc5UfgQQTuLgcfFyzVhod96dtXju",
  "key36": "vm4vReE7beR7sTjTVWKyeh7Sn5SXrHCvZ7U2kJBMNemm1A3NwdcBbh5nhgChqGHLBphqM5jVz5grWRSRntfQhNp",
  "key37": "4fUrKdFoQoj3KEKnMtQp9E2JZEMGSA2QYx2Vaky1wTyb17y6bhspKQ1Gxo6kkGHQA31AgZm2qDmx9fi9spPKbUSD"
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
