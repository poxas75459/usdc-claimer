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
    "2NcMQa5x9GNaJiszd1Xjn8JebV5cVrbYL5UFqKsd6R5hmxgmFFgcD8do5NEJoDnaYVPpsTnbUhNGx1MHhgxNV2PS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P8MXr81LfrxS1Aw1ifX6YUkM4NJZgVsRck9UTKge4z3EVahmdEW5PaiiMBozzMM3U4JRBXCuqDVFdhUEx18HFB",
  "key1": "3bBzuUCqU9BWqzR7TE9M5M9xaZRa9PppcFF3ZEaHUXQxGPTbS7vH9uT8iqixbq9jfzoSa8fWpTAugnMk9RDqmhxF",
  "key2": "5EBDGcM7pyEiGMeksqRJrWJXx1gP6uN9Me7wDv8unRtuivuiLAbSeijQNbF9CB4fMWYJBERyxk4DxLdFWwiSpsPp",
  "key3": "3dN85hwbwS5L17cRdb67aibzyW9PdbFykq6Zf5FuggviS3cQk34HqQcgETqiJpNqgLgRf3vbtAqPFxDE6VhMoip4",
  "key4": "DvAYFtJb8YbtGZYsAk4wx9ZrWTAeQZzFh1EdjqtPnBwXp2UmsKkMpRJZXPB9e8DsLAh8xjMaUJGkmMsTy8uCt55",
  "key5": "hsPSzfmdXiZCxkd5BmXrv9YHfr9zF4dFEMQ3AX4nb4Yiysuy1W1haL8i2ohi7aVzjp6D1y4HhxbWR3DPoVBmUF6",
  "key6": "3dpU3wfHiebhgZVAuVGC65n1PoTX8sCawMnYtg4GNy6GKekjLHQovJLhtBp4NjUEQ2bfJpaDJRv1fUrCCSea9xE9",
  "key7": "5kR4XzEC9sBbM6ZrWTEM6hhCVBPsXhpBhkPXvVc7MLeusZrdn9y2Aq6vhfCsTop5Qp4wSZRt8nGbn2XNo9emtPvm",
  "key8": "4vWogZuV6nNsUC17wm56bEGReQbmcmpEgEfsCddZvdR9zVHeehG1bQ7HiiZppHDnjDafHAeFYeJGzMe4t2a1xGcM",
  "key9": "5RswDu7cy1tWgEBKqNNoabijJHXmR1A5cbnc6wsPcf9r3k6EvJWhHXrz2McYMdYHrZQVS881gJYmtN4gxW4kY2hQ",
  "key10": "2tfY41FnZFpz3tCkvddgeperh7PAHLmsaJsnd7VBBBgePBupZZxiUZoCytTdkpaQ3sh2qsknEH4Xnddtrfk4rBqE",
  "key11": "4oAsCjm89AwavkPkj4BufrVKhw1BFN6ahd8dXSqRFcoFT1YNpzfj89oY2aFNiB9cGhq81xYbuDSVvJsBWvogB1UU",
  "key12": "2LngAsdKmSNDUzcd5xHy5NEZBqmxGfJLV8Q5jJPDAW4e9YokR4N42tmoEroef1ZbGrgTKiadB1XBdPJD5zfPAyiU",
  "key13": "2k6DWtrA6tWsHcnJVazzRLaqdqvhBRhdRZoQiBC3wFvWiVFRX6qsdorEd2QY3uq2xZ8h4Ta2ZwEpKaEG2rji7zzQ",
  "key14": "3LESN3qWAnMP24boM2FYsHo7G9FdvDFD15yDXXFcA8shTUrBGPeRmKhc2kDu9V3FqwSENBA1Z1G8qhB7Lq35uh96",
  "key15": "4AS3tuNJ4AM3hVUSZ9KjwSFMiT6orHFimRFGV84XMyW6vcDmaQ4f6DAwce9hmHjve9Dcz8PT5g6DHLXYJogJ1fGD",
  "key16": "3xaK7uvvNkkD23rmmUarHTkDGwdmyDmRuNv3VyV1UDJcJTnDhSXHir81HD8F83BjTnm9dotE1bXrQz9LTg1dMZgm",
  "key17": "2Z4zaTZmb2vCUPGUujgsMaiCE1XjGfFDiXugvAtZ1EaAQeCWseYyoYie8wAmKXYnB3zqncEH3yAasVLuqvZEV8ew",
  "key18": "4RqLqvMR1QiyMMgN3BW4X699cKNnPad2Y3mDNHoagqCZQEvoDmiNGE4UBu2PkNZCDAmiuXdGuXeq33EviVMBHKZ7",
  "key19": "49ZBEeyWey17zaE9r1fb3ZhLTCTmHabaGoKKuVTCQkso8HTrRT7pZhLbY2g8nC5UtCEYLMXnVL6PUfySNHEVMbDG",
  "key20": "4ek6PUu8C4tJB1u6VjJM5rHAovMTqhLP4en2qwqytohCrr1waB3mdecdgavRGPHviFKQZV8F5qWyaotovibkrJxg",
  "key21": "2rSFoAV3GNPtdyiQJfXiAHzCm7aCzyLbwDNL3dnqGe87kmvyqmMm9qhZVnBMCT5BDxhi6ZuhofG2eg1sGiaDU2gL",
  "key22": "26S5gooYwjHuRFrKdnLg1mmb8V2fSRojWCqeQnn84jngPfstZBiFxRJuwHgzYZRUVHzjABKyrzLvDDm1SYm3zbG3",
  "key23": "2uxs7JRDCegUT5pAXrpgKFQ3CHCBPJxBjjA6vX8bbhDm6YknuYKRCDb3Hmy8EgDqak5VWnoidd2T7TixpP8RmLFW",
  "key24": "3acF9T3KXSkGQrCkd6cZRD3dXajg58ehd9yrP4yPhTnUUUD1TT8kAVWdCPoYVeKAfKcfnpsKkA5bmeix3Z8nTezU",
  "key25": "CwaP9PdcBvwQcjVqZXkAP83b8xCVwzSvDLs9FVzFMs77zgeuYzxu22bWnroPMexpocYuPKUxV1RQQVr7DAyoBhm",
  "key26": "h5FfCrsMoyNKdDiux19UqQAB4M2kfjzykjwbsaPvSddiBLVJDf8txzVXqMUSQTRcGbbW6fKT7AUYazNEU4UpRNs",
  "key27": "cBrdHNyKW1hL614XHxrku9nsAfLjaKFYgpwK4tbn2BRPRg3Tv21nKk75iqAhe4DDirN6jttKdwq15oA6WxYvXcH",
  "key28": "2pHDHERDfBP52zUZ8SwErAYdMz949Gvtf5cufA9L9qJzzUZ5v2ePKDMP9MTHFRVz7T4BcDPL7EnoSuvxT9fNPWwA",
  "key29": "3yKUbDeUxs2vsUXAkxNrE5XABT8vVX2P8d5yq3tXDLkwvwAga8VU4f28iKiPsUpp1y2Asx8Mm5reLYvKrGiJAa8a",
  "key30": "2mUtKQoikBjdAehmrshtJqJEa6XTAaRGZGpctJX7tUYFwXg35sR2bQmF4DkGnPoGQg7uYsaLrcycecigZPgoB3C4",
  "key31": "2WTa3cUACLW6os4KbpQyTp3PzuQkHv9BosSLrdnnU2ZjjYCyUZnS5LiF3byxRMogAfSCN5XJtZhGY62DiuRqSv8Q",
  "key32": "4aXiBntJ1G4FxDHW1bd1U57KhiApz5ny4DZ7tZU9sfX9wRPGFCdPDHUsYMZDiaHtjD9TVEnah5sWWyrQDGPMgyQy",
  "key33": "31kR5uSNj9jqtDmXJDLp2umh9QdMo8PqvKE7hCd3QeqL2j5FoVp7GThV5EpoEwPCa7MZhd8XnvSvthE4tNnXyK2u",
  "key34": "4KVaGu8gjWtPwZP9KBmY3hnd3X5sYPnaJ76kvPrFmsJRrzJdxxRV7KRktEXLA3PoHXdqUddQDPS28zU8zitj3Jrp",
  "key35": "2w4JmUkoJgiUB8qQD5ff5b1U4tbNx4sFDspmakcUxXsw9E7qaWypwQNCK3RAm36iPxYzezDaQxkzhLUgwqrVdXF1",
  "key36": "AAbSMUjxqMeFg9fPWUqxgprYqBufGG5cGa1z9r4n5SW76dnWn9THsbAZi9nN2BiUGuv5t2wwhNgKKgouJWFQfog",
  "key37": "3vds6hhFjbrnXi5q4canWtnTJwBfQU597xAbKwaZ1wfedhhE7TpZSZVUQdEycDSgmFKyU84B3rjSX25LpFy1Qksy",
  "key38": "3rKYJRMHA7PtjrsZ7JHKHMxmjYQeog2K4okWBqvhB5T7uxMNGpCRMbSSrx6SHoruZdBwrJ6RKevDCYoEmPRNtHhk",
  "key39": "4TxmKimiLYSydYS5pdYEbMtfjDaMAwfXaGJxXhtgC8j3ZEdeoWNAH9pZzGAmZzkFE1MFXuCHJpp2CQ1HPEcVBjsS"
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
