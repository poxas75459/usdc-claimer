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
    "2nTuYDLny6t6vFG6x31xxXhCKDctmgbi1kTToFv5XUEKMGT8QN2KkfivspDxby2DxVHXAxBd4Y2RdLCFYdfuPny1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RTZrZkXptz5ww259D8sj9UuvVsLMxouSqufyZc5r5YAEsAfs5DUBNpzgDzi6pgVUaouQQrsuYsvLUZiBVnBbsuL",
  "key1": "4tCARs27ucGCupZqQrg89RtQuJaqparetiE4qrfQ23QMsPRZVEtS6JhusJ1GYYvKyJULMw7hmBx3RmhRMkvVAzCv",
  "key2": "yYfNSMD1ibPZtzYuneYDeJBs2FVy4hve3XwdC2njevLVaJQKh9pAxM6ciZjyrGy7pCjbpE5GA7ihq9qkkLM51e1",
  "key3": "NduUsWxfJtX3FCiHcjsz7p3SKBLG3dGqvrokstUE8Uy36FtATHGVFnzCDS3YTdUQGzFZ1dnm86wPK4RhaHFE6nB",
  "key4": "4WM6zyBzCskfmwugNQf6TyBCoZzaPqT9jXgc7TG88ngdbqD7HS6AanNzwCNdLF3GooRwwotfZrByp9Djk7mSSTA5",
  "key5": "3UrrjWzA7VUnJwQv7ZqUwvqEtDtZV8eNYerB2uajmdbdnxCn8h5q9nrQ3fv7be8QE7K8fqHoxv5GQVmJdU5kUipz",
  "key6": "Zi4mwuYyUqexBMTZDz7ZhTTWSRRBn79fdbf6JTDtAHfocUMhy6o7HVeWUrxXMB41ywh5VqxCueLR4TSVKPTXN3z",
  "key7": "45GUnrHkVZFgEzdneHQ9L49grVvQJ1H67JngYMMr4SsPVxRy22CoAGtHvmebhQpMV8chuukt5ZHmZHX5ujYBk5xL",
  "key8": "41g6jyo8LG9H6D9VQ1iAFgAHWobKGHKTQWX1x8etsSPiRd72JkN23HYkjt5MVsrZSGogHqKjSFDYfNHPYoZtFGwR",
  "key9": "55L3EWnKNPnXHrirXAPkdisoJ4vp3vHSMHzkKSSHFKz8tdVZF2D7WDAqRd5h4UWG6FXK4UTUPWKWVcEipGUz9JLn",
  "key10": "47pmZpGuR1Y84MdDMtpyFU726GGxDnywL788TJMKs2xKkTPVekDRwWqCJg3BmqRxof9FHwowapKYkxDsX6GCC5WJ",
  "key11": "2jsGCNryTY5CA7svtDC64kupqAbZLQCSySrkQ23wXijm4bTirS4T9VRyapPPVNdkq7forvb3yJYxyNYA5ppjTQkf",
  "key12": "2PftX7KNTZA1gbptYGAV49GaQ7c4dz3a3m84BL6zTk6wjvq1W4PdRSkSQmZfU8ju97cDyrKDoQG9QxeQ2TXhnuZM",
  "key13": "2iCeB8YXE8VHAd5dMrXH2YRkVSFQooGF58dpSKsgqNw5cxk6cfno3XLQd8K3PBwz9P8UJxv89m7pw9G3En6RNCZ6",
  "key14": "37XTQTCRa6Eqztentj9wC3sSqAaciVMuvbn7q2mzBhSXPa4aH2CVxpEbbF1tK7fhdcyR4LKD1f55HY2fK4knhko7",
  "key15": "2bhWoX7StJM4XyPjBigBuCP3akdAWz55XKph7kbb7p7CdvLtoyozrU4zyH5Qfib6Aec9RTJjuQr6WT912fhAJio9",
  "key16": "2V9arDFrrwqK5wKZc4U7iryApjKRPyP8o3Lq1RU4X7L9nDd2UH5bFu6hmy1gXvgjvzctyjFwwnSsLnS91HdJ1EN9",
  "key17": "2Q8L5qy5tnDSLjFFuVnZ8n1JwV1QFXSJEyd9jbNti4Tb66CJBW8MX9UiBbmQdnXdG64eUhA8ZYN95x1fxmdkJKhS",
  "key18": "3FaQRUu9qwD9mbk476vwCqNpCJu9DfC2jAsKr3hn2sjSkQGaJ1nCUrZebngqFoR6T1qaWbA8KygsHVseyw35bajB",
  "key19": "48TufGSy4KFXhLJJuH4jN7MK7uXQD1hnEdMsrhuDyqADs6FkB3AKmMdCtAWndFdUn2nQj5KPzJkE2z7Ech45T2sk",
  "key20": "53ba6aSLDvwxsb66eTwFmqPQbYcRx1k2VEqFQmojApfqh1WRFEKqqmucWrippvpyYxwqJ62ByF3ZGrLFGTKdf7xV",
  "key21": "5sXGWB52WxuLQxrNubLpcSBNhvUhCnv1chpbLFvsjEztS8vUCHkbyqDJ7ANPzdzQSSMmpCn41MCbUfTUBdH7y5Wq",
  "key22": "66oYtBFpajPHMdgvrBuVw2t6pjKf91g9jtWVRPqE5evii9i9CLEKVqFEWKjozk5P8FR9fDZjM77ypcisCqrPKnqN",
  "key23": "23qWBSf3cWGzgh2oiArp8GFhqhP9N8bKFF5z5JyjzePedHD6DRg5mxm9Vdu5VeTL89vDxJ6of9gQHnPgZ7VGAD28",
  "key24": "4hR8qcZwTctsGtneihvLBGoFuSJoX2DjnHVzPi5VyWc1669GaomVk6gQ2DXwLNWcuKUfrBLoNZM6nh4rT1bruoFw",
  "key25": "515hRRHQUfmCRCDXztma5iR6izkG58fgDQ9VNPV9ccDM6yifiYMw2E1LbS2WfcsPx6TUXL9AYm59fppsDsxWkp1K",
  "key26": "36mFaSxncUio4iWmgKQKHX35StVhsG6PNxtPHr7s6Y7z6bNZ4Jpojr4g5XwpcBbysRixJCmmSkSt1rFTVyFXgf6y",
  "key27": "mFtU5G4abe2W2kozEkGyByLBs2NNrTWphJnWBK4yLdxCgqTVZTA6vBzRV6XuSkcqphmd6enYR3rXcJF8vP99b3C",
  "key28": "2Ty9KG58E5BZpjm3jeVCMon7rHctfPE6kUqg5k4P9wj1jDeFEjL3ZyCnFAbad1htFegEhWgULKtcGH25CkUZ9HAK",
  "key29": "nzpckQammPspKiRhUtVKS9DRYn41YM9W8r4zropjjeWg2ZjhYrGbQsVC3SX42nGQ2Q6XaCfB8xiabjcL4wgY8an",
  "key30": "5mcTnhAzmotBf9sS6PeGrFKe7vvZP7xxuLCHefuK1AmkvcJsyHykZD9MdAuMeDTQBqouQPmoeadVkTBcipALyvwv",
  "key31": "53iDqcUJ9tPcCPuucCbKD2H2JeUh8Vj7AYUrAep2royrd4MxCKwsEbsCkRsuJrVvZM9pT1HexxSXT67gsSPc6ycR",
  "key32": "XgeRK3DLLJE8Dsem5NUXiSrJ2fEmYnNCce9Bgsj292drGsa4TPBzYmWqBWZP18ghdcCwsHr1zTpqYSguVNBfbZ3",
  "key33": "2nMPS882Hf114ZXWaVXLYn9dHGsL22tgd34W7caAebYLPHxi8X2jFf1sZG5x2MtGWCZ1PsvDz4dJe6i8hqyBbe8A",
  "key34": "2MUqHdvGxCm2nGmHGhsVpKgC9JKsKEXTYGYKAkQNWzV16HhawFeWXMgnDuEoLSdJu5qQNTKz3ibnuaWEuFQF5HtY",
  "key35": "2Rr7JB9aGTEyu9mEX7gwXPK3GH7HJbDR79bfyh4rFQPGGqCb9z77vRE4Gb7vgbWAU1xL9tsQCQtb8Tcs3cdsFa8E"
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
