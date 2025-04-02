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
    "aNRYCA796ZFdVc894TKwmeTafRArCPyfKLkAvFTR1vm7SwBNjU8uV8GTBJmf6Hzu2ymtvv1cTgTsVGBa7kpNS4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hXoGRMgP4M7y74em2B8UHs5zCT2urunzdKDmvNMFC2kivmBdi1v72gKLQ7c2HLrXejma2hzAHnpLDwDgUYbfdp7",
  "key1": "Qt9ptG3bMaRdhvvpmo6nzd7WB6P8tuv2Wx56mKsxNpgwh8VvQyQGX2pGq4fGQHY71oD52qxiPrLWqfmWC2ELfS9",
  "key2": "2hC45h7oFUPmQ1DZpNR8YrTRJUDfy2p4CrGdE7TmoiPSvWKdsaRSzMNd2vBHPn6pCYs7756h9eYws7wcgrWthzq9",
  "key3": "5TN5EcX1TRrL6QWNCRXmG8psVeWaewzkSPUwfKERVUyui3BdpHSC9jc9L9FzU7ipe9ZUYGvkrzhMe1y1DLTvnhjy",
  "key4": "tdYZfhGkozXLs6ZgtRhhrqfYmEZD3wPNuDMGd9NcxuEcGpZibjSLBi7BacL5JTZuPmoSheA2XR5fijBmad6CuBb",
  "key5": "5PPfDy9e4eGP48gnrbUKDgzyNAoaqVhNrKziU3368Ko1NzT365LUihUCLzFqks4u79zmdP2RVnLNrGxBMFUpjvo",
  "key6": "3Wse1oXsc71wqtKStAzhfaLC4DCpT82VxcuiDSiYBDCsKSdSfpu6Xe8AngLao2nZTDcCjrx7h3fKdxPHxnwhzHho",
  "key7": "5G5HSTQEjZWrDbFU7DEq5hQpVKQ17jZnKDRmkoQGKPeBpsH4Doa4djEsa3oVfzbC1Dog5mjTmXihk4PUXGE4tcE8",
  "key8": "37hiEKeypSZCsVWyeJK3hxtf7mFm2mh35e5SyejnaGKuFHD4VUhCAWxiYpYfG4h9rugQPVc2LavKVrdJ6vD1a4YW",
  "key9": "4BXc8sf9ksMXm1ywaBd8BjyxZST7KA3KBaevUpgW42VHH9S3apkxRwwzNJDxZcGSf9WTxqBjtvvsizZbpBeaeyYx",
  "key10": "3kTh5FJnowLH5sHhiW1u9TqPWRAy2XGLEN6mWrvoJrZ7yXofMU5oQtCQSZ64pJvz7a8ULBWaauHaLnJdoHsrK3zs",
  "key11": "4JeXQQyXPrgvsAwvyM8ArerextSdEfbmCgUL6ec6WtPA9oV9uTDptFCeGzcdYzDb4T6JPdeC5zw5vq5uQDVii7cp",
  "key12": "3W2jWx3p9ys2aFKVuoxqJxU7xCbC892d1WwcbfqX34VrwxUJzhmRn7NpM2Sn5azSiMahmXJq8KXFUg2Jc3ptRPTS",
  "key13": "8EP4dZH56Nu3TqbBASJfSewpEabvEJTvANZyhmQHkKp9MhywAZVucCtxktR88CgMYfkaBPnEEg3NgaCuFvfxXSY",
  "key14": "bvYtqUj6pznawdHPV46a7JtuVjfSA8t8ApmrvsC3D7xM9j4VqZkgwHMRmzyxt8rBLZf8D2ggqUstiFcuWGy6z3G",
  "key15": "2SuKWNbuJFsHq6PmL3sW5oJVQF3qySCzj6o9mskeGKeneZx83ogRSbj8CdGaq9ta1d1u4oXN3xZhHUqPZFrytMhg",
  "key16": "53q54QqFkAWBjofktraoEj6xPkXyejGbtbk4Z2Zb3LzUvqbwv658rWyBy5oNUxgWPcTNjPJ35CXGqXYiofV3mFPK",
  "key17": "3KkQukbk9cniSBajDmXXxkvnyRNZLaEpYcf2mbzGEyyvjJHUcfvad7NhpmwR7BRduHYRUdimNLSRF861PnHV7nF4",
  "key18": "3FWMw1aZiuCyvFDKJjiuDPPAfJ2ULFLKpiNTdprpymphr1rxdJXtS1JEwfpHzUNgSfzVdWArr5XDMLf7Xkca8ktD",
  "key19": "4RCoodPPvWSwaAEHKwZ38oinFjbqcaANmw6X6JF1pdC3duD9k1oY87rDV2kpGdRZYg6zmUSUmMPNVdU9VJpQLPdN",
  "key20": "64nQQpStZ8dTgeUcEfX8HuoAEHxYw8oHSqRz2rfedUkSnPsbBHY6eM3e8j3T96grqLWTdrBTJrzdQJdok3GBvoxX",
  "key21": "46rkD2dJnWizFUVpKiWf3XnsatdKpUWGKVzUSNBgCcKdg6kdt4CJg2mNQE5UFdzfBGcYbgbxYgut3THtxAgNmpah",
  "key22": "5cPRn5Mr5XLmdLA5drDUk8QsM5DCEnyZnfCBRssHc8noKxpfTmf2Bm7wkT9Dyxb4pGEgwtghZUgoSsT3L9ifdZQ",
  "key23": "etoG2kt36jH74zXsg5e67cFPtSQcDv2vjmShSRZRA9YoUEzSw57NhNPh8DbLREC7xMvBQha2Z9HUh2xdUW4wCei",
  "key24": "4N5vhTJgHpyWUDSVcCX78ykM9uEacEja3tjxEW2hMF8cRtBTKRmAgU7i6v8rJ44QwddjgiFdz17ZhqrX5Ne91h9s",
  "key25": "5VBFK6MdnRSAQL3DxWQZ1A8gKVmcvKu74BJVpv9G6xLCMZ1WyVJZvL1Vbimg59VTjGg718H4t4JNzRNaaee24jZQ",
  "key26": "5qodXBLvCPE6M6WDji7JSBRWZjcFfmtpYiLV3rmrdZZ64rXMURoWfNXw5Va27ZMNZ3NXHyi1aGi9fK7Eic7SQBay",
  "key27": "55FqACQ3DBk3dQSfJXYQpTb9VwNu8eHcb3LbKXYSN3ZvQ1QGKH9g1oUgRgXDw7qSg72ZBry4uGf8Cv2zipYWbHSL",
  "key28": "4UtPjtF1qmHUTFiUSoFiUXw8kykzSvbzjvVi3QoopeMAtDwELoJfjV1TKWxEipStrzCZ1RtEacyVB9YXFsVQGZuG",
  "key29": "edv8uXUmfRp4S3484z1fuJCaZijqJqdGuJYi3Hazzwodfd4XNU21XguBm6pfDqR27ZJKd74Bk5VeRBLtBWMXA2a",
  "key30": "5SmYyg1GSsd53aGrJiqzfg8ofjsqitEnYg5aKG7nuLY7LQeeauUTFzNJk27wPev2TrZzXwLQRXPFz6aNjELhuKhS",
  "key31": "3s6THd5fg5Rpi4wZZriWzngNP7AQNaYjV45K3hBFv7iLVr53KQeC3kNvN3K96tmH9puo72H7Si6CfgdWKQuoyZkh",
  "key32": "3fQzcg8eUiPWtPZei5XB3Gk2Qq8uBJTsNLj7agKWevh5YfjqHFewwtph1bV469cZgotVJEp2Ypw3G57bxs8DAioP",
  "key33": "5XWVqeubEVT1ks1Rj5cHrgK5XmJjBfLQAQ23xLAJqRFicfyuJiYbzkzBgk9dfybP9PrvMcdRcJGahkzVQn3X8fFu",
  "key34": "4qx5VLvx8vkyciCcGMvWNZYUB9n2AduNx8jhdW32QXzTHsMBAiAMz2FrvxnSBAVETHpdHnbQCYyJT287mWrjjgwT",
  "key35": "2ryhrsFKt3BZrkRXvNY5MgBDRDMUayDhgWAKfSRdq8x3i1vePcRegMS1mBcVdr1XHf39TJQD9xCaTTBowSCVKMNi",
  "key36": "4biwRncZha9iaLMf1bHhK3yZHJM3JukyJfFSnRx4fiNHj9mxQcc9uv2ycnqirituHcLY5nX2Zam95hYBb32ovFgk"
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
