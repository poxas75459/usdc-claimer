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
    "5dm8dyxofihjnEVadaGApduneZiMBxmZ4Lq9sY6qHFqCFVy27aeKKsNMxGaW2jrD7sCSKUjDmc6r9J8uUCkyS333"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QycC7RB4KiTG82wWiBxjtMfgb9z9gqzbK4wGAWynoNLFBxoUgdEJyN1krZyH43hycbyqNqWcAexnwDpzsH2TvN5",
  "key1": "5MwDWD5zMRBXAc5v2BNZugpSZNt2yizAaLVAHtf6qq4MFjPuCnhsT7kbVMa9GwhmgASqfWsJ8pRsoJ4jEw2BQxeC",
  "key2": "4CsCk3X9tZVYcxbhQyLu1hHDKuMMFzRbC5nnvcypQRiLHZtSifepdFY8Kunf2aPnD5vce1FZSKWJjCaF6SPXZ8Jm",
  "key3": "3uXtT4dsVaPAYrE98FWt8k6La9hTaMWEA3pnohnswNqvkTSGVDeCDRea8M7quyRfFetEYXoKjYHrQxsPYvdoKUwF",
  "key4": "5tCPQkjsVBimtXTS3p9Wj1rZUuJZNETzsfS9X45MJ62ypGatFihfMcPsMQw5hh8PPfNmKdFmPR66RVCXnmDpDrEd",
  "key5": "tzdE35YhpBxj9EKtS7uWMHHiekUDJekEXLjyEpSZJckgQp3pacHqayPdZ24ExE7BH6D4G8gLGHrbp5QsJ2cztAD",
  "key6": "MuPGszq3ny9aUuvfGrzq93CYom1jB3w8RX72sEFLAUJLKr9xKuVGjDB5qn9fya836C3HTm8dHWg3ULG4xoDouBQ",
  "key7": "2JTfy9diKbMFckgsCzwNWPCpVWuGEZchRrgKxdxrqHXNnzSqfM8WUEMTrXvrkY8pCZwB5vcbzao8Rs28TJyFYae2",
  "key8": "38ignRsDXXCL9tGr8ioAVE9ShCdnj7AHwCinbSnQ3R4Ef4dUC5TPSXDpUCRf3LqkiqbjJ2SZznEFtJnKuvU5aA2S",
  "key9": "2sAGFHTpsueGymbMZhBtExwAuuiyDuRAcoYahx3hBDVRn6D4qqJ3dJY2g2yp1zMjhQBncMCTbqkEEGgwJEUWFaTk",
  "key10": "2gJ8NtzC2YZ1QJ8YaoMVrfNz829BFjBN7SApBFREcZpfyE8bE9ZFNQdfQ3m2yPtxawFUQe1uRJAHdasPNhjXHYyn",
  "key11": "3UCZLjhiRGi9mKYzM5TsAwkWCSBnFpW5RQzcWn5p4iUNpa5TY9dXC1dd6uP6pZiXqbcR2fRkxxtMXB35B2wZswYE",
  "key12": "2h8c3vQsGN9TxgnmwvCTTm8BKvxw9E9P7979rY7gpVmCTofXBQL3JKfQxTh3JXYygwa9oLsmgCje63p77mRf9MqZ",
  "key13": "56QUr6swPWhwXUaKsBjLhaycngcudHySEkTNxhuRKQV5nqJG2xQTyKMT3Ffz9Tu1hVrBuzNZiPirsUQEnQdkhUC1",
  "key14": "3cbGkd8FZrFTomQXSK4B8y7FkygajRRbu8bodW3XWQmU3JQjJDinn4tEL96S8Lfbn7ia39Mjm9xZBkKXoxNSxyYo",
  "key15": "44eDiskfFCaqxzUsXA2Cp2Sa9PzHGeD73UB9GtV1m8ND7giiUmcNhnpQ5fhczuskYBNKQj3vTeEEp7mrgaaNFyoR",
  "key16": "3dQ4FbFQVAyLY2Baq8v4fZkPnjpHErzq3uYJXHaE4xKujVEiC7B3TKW4fan4csgjAnYzxPU4artCLuYpSBSLBnPe",
  "key17": "4tuEr6921uHxwDEWTnhfVeLppSGUzuSYsaeiD6n9ny4ezBvF2R8pffGni19Rxm5HBuRGtiwJXenvTpc7ipXv3kAD",
  "key18": "422wPGcRHSN5wTEdPa8ezXwhxAcQUPuHSzebVyYMzoyNhafFp72r7aGXSKH3BsUdhRREpdQw7m7oKDttCy9NQvhw",
  "key19": "3GxdowNaw2ef6qN8z9yV66ANHaFENPV5ENpkWyeE9xYh4yLQGp5oaxVZ5Ei1qwaanz7VM4ym5YpT3F314BVX23ib",
  "key20": "3jhLnxamhA7cSymnhASEa6sBQ26SRxzYUydcT2omVXRSSNKAttAcAdauhHtiF4mPamHrX5RNVJ4Km2igK56LPGrh",
  "key21": "2SixfcPZsYrFR3cFeJsnfxKd1KMnCLczZATSmmjin5eTz3Qph4DM86ovwguL6mQbR5JHPoAB9GcKXPoKwDTQ1oAi",
  "key22": "3FspksqL16WggrH3QS2LAcsZ2kxzLDBBP8fJRmv79HXwPhruAnNKXonJWVzDxxQ5VKafv7tB6Pzijr77HPvQUsih",
  "key23": "2h2i1PPwZ3eBxvp17Rc2ZDZvbPjNrVgT9bwECRuGBWFGFSo25BwHEdneTvo2CLPh88zvUohed5pq7TAjN7UDHqDS",
  "key24": "55jzh9vRUXLqgsAg5rgPJVKSssm6imxKPYGbZfCmUrivF3KgS1i5zm2KBdQgg5hdpsat4F2P5CQjZpv7HiRXHfoY",
  "key25": "3iV4xpHvQXXdr3GRAvSEC5XYgkYxBrzh9ArkN7v75auehusDEBsPv87LeAxfEg78bDBk1WmAZr6gVStkEY7xFUKa",
  "key26": "9ov9faKtKNFTefDV2KiWWaMG8zffzf7CVGmBpW9864pKJc43u1yNgNmDxACrNPjUiEbNYgJzjDTAmFyPpDdcsUL",
  "key27": "3Awf77uJpGp6UgDj6dtPePZqKdNxfrNsjy6p9oKMwj2BbXGMfxCRq5MZwPuQbBrad238JjrdeJXx5CRxCQyopZyv",
  "key28": "4pLWZRzQuxgvBD3A2YyXfagkggcj9NnWbNDSXeVGLBqqcqRQyEWsJgvcN8whEbzpgXM1oxps8BcVKAkuSNSVAxKA",
  "key29": "D2XAjhKTUjxxnrbmW9KcUVDPDR9LVJaTcdbwwBqvWTAvDf3vTJtZ5eF863wCAkDTD27AWeSKTf7qhyyF2AoDswv",
  "key30": "2w8xvU8AYNJP3cYUCZtw2ScJ534EN4ppYm8Wuj38s3EoeN7ybF8N58NzkJHe9uwRAzWWsWQa4bUDti1Ht8Qcr3k3",
  "key31": "61QzTKGSgzKewUorN6Tz81TE6m5wrRZZP5L7w4PGcwSmpAREBtui34ZkAReLtEzzteiXSjf8yzSZZX9cB1k4ddsa",
  "key32": "2B8FGaeaY8ZwYyQCqyaadmJs1aWm7DHgcpaybp1vsJ9pMtESZWwtpvA9CxQ3Rycp9ZGEbQq6u96RJLRHJjLM823L",
  "key33": "4YNxnszmw4faTa6MWMtkSTEcFeZ7C83c4Q2ckX4zDuACbqfnkSkdanovXk93ZYm8tvY5oH5w9GW78p34mpRHFVBL",
  "key34": "3Z4w8HwGWrqW9Dx6HgQehaNW7CNMCAcKPhCA6SgHVV4EmPmv3EKVMmNPtouQpnh8srxeUDdwJZxwJWAZxA41KRdu",
  "key35": "5JxXfaKCBjVN2PNzMC16DWsMLyJyL9u5X448Em3WQmiTGaHjJPyEM5NdHog9ZqgU6j8Ab8J7qM8ziYFT3z58nTc7",
  "key36": "217sWrec8BNyQCCZRCFazqeJnB6iYiNGL2xjKPysH9CuwbHDncxhkKDozUhpuGTrb4oq5rdjcwZhp9BrHkLGfAsk",
  "key37": "2SMJkfUpRocJBTrSJWyvdjqyE3iRmkVemkXxLKEKiaHBP1iYZR6PwpsxeMCdkQeTnZeXpSeqBRoGb6K92CvPBzYK",
  "key38": "5gf4Tgu6MmEskyfCSBPS6xdajM16twF36o4PuGweZdfgpMSppkQFamyQZYw6NybMTRsXBZJNFDajaBEqD9mGxvZo",
  "key39": "npHCfwFZPKHinXkC1y9Xx7aAx6nB61oX95vkbebjPmXMd9tAgSszdtZwAaj4Y791hTeHgGVZqs4tqaqc3GaYzWa",
  "key40": "54HGWe7UgsPPoE6EPw9jH2EksJEryc8FLaPvJYeBStT6wiSkmjb25iNZpvrBHmBNg2jZPCBT5Lq1KhSzHzsHH6iv",
  "key41": "7ALktxxRYSVXKtxc2zqbtY9xh5QXdGqrhPZLwiAVHubQUsGHSxeXeoTT3R6t9d2JMJmhd2aoCFXbNQ38YU368e3"
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
