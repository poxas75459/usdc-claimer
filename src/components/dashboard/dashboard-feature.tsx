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
    "31wzfupS8LzPiRMcesZJVa8njfNxXkewiNDUGLo7NUSsBtQ5hYi7PAbmuMWosNNGnYvBN7UBNifG5aXmeaQC9czC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55JnV4EDm8EmCoEkraJTjQHfh6x9ehBB42sbDeNhSDppm19puanTt1EajPDvAVe24FJuzaM9UAgq8JXbsv7msHHe",
  "key1": "89QdfkxFC75MYAzx6SycYiVqoKB6wpb6QiMVYo2V315tGR3apqWMFUxpTgRoqH1ByQ79uAbMcpiyCANxvdxFrVm",
  "key2": "cAfJYgQCDgx4Mw819nDXKN1VTizZ4bqX3RecuW1N2mkt9dcWsAziuZS8U6TLZzy2uaJM8tTK69peQaC8hiw43oy",
  "key3": "4pKYuRsERiKiPQwrCG6vm25h8wgisS9jDn38dsvT3KxreDe35HsF4RcCB3SUypcQwi5RSJakqvTa1EbYogU96jEV",
  "key4": "jC7TF7n2PPFxfCLJRnhSFsf3vgXANnHZvjDMHN6vvKJXFdhawCiRNoa1iSqcjQLrS4mrULwuqycduq82nimeN3E",
  "key5": "2rSErpNvDQcWrhEP5xMgGzXqmg65b7ESd13jEiAeA1ZdMpas3fuHoKdZGwG6jfwr2J6UiCJgcSeHaKRrfUpvrHwc",
  "key6": "3M66GCHwo8BKpdjrc8Mjr7W4p8pS1cp6J9JzHWxCmQtAi91ppL7chwbahYymSTvgtpaRhm7hqbfUyFoEE6qJxPnv",
  "key7": "3Vn29YSiMvpvJoyAChRLvcD1TgidzFJPVPSLoHLyxSqw6hwcmaqHcsT4NJjYHaz56iSy1BDS7G1GVpxGGjQMcyKd",
  "key8": "iUYUPWmvHWnxfxSmbBRwDxjpXUjVPmM3ypyHCpmzLyBzoM71nSaCofzmNWi5wB7kfJxoqbN5ckMGxh5ZYRkwMrS",
  "key9": "2ryzRT83ULyNF21awMhbmL1XjwM8rFeb7y3dQGjmmWh41ZNEuFZEDVAdUAzhDpmAgary9jpECkz624QxNHav4hxf",
  "key10": "J2KngKEjKZ9q8rH2yiT7imiwUeqqEY2s2q7DTBxgyLCj7zM2BakjAeCATXFNaUPUVMTGsRcra5PiBsXukbaNxNu",
  "key11": "2fcMfuo28jE74c4di6qEbdTiydFuyBeUodiN8FNuYYGuXScKNSQK9rqA9HiN4an5NtV3aMwSu6RiU5r4TZsY8d1M",
  "key12": "2MqgLD6QyJvA8DHxg4aC9gfU96E413uGVhhTXxrknbzVQGPuSYxNEuYSusdcntQCzWoasvQvwHvxJWmafhr1TB2n",
  "key13": "48X7KVUiF3LtXjakc4No2D277XEL2xfYCwHfJriA2T7nGQM9KcEMVFrVMBXFJpSmmyQLq74cWEELF23jbjRsJtpZ",
  "key14": "45CiYESqaBLBXcNVmRoeYFsHE8GxwWVrWdxii25uqynjgb5seh3XJqsRAK8RZAzpYGzsL1eQxHK2wzNPrxmgUzNc",
  "key15": "4GNQqVc1GQESRUuApjSQC2ET2aqbvGPJVVM3V62PYYBvqfbJRSV7qyDuDft9LfPsyWHQznJ47vvWw8HvGnuf4ajt",
  "key16": "2C4MiAaRYnTxLs3MjJoYAu9gqDYw6pJGAk7mVDreXMzDHpCzgCwESSKvbCj8VWFwf5mUT8N4qv7f1kBW2EpPb6XK",
  "key17": "2ozhM5uHMDL4i7xVj8488fD1keB8CLm5Gj4fSxkzPTEq2Gvf3HMTapkV8zU6tNpvHXhDXiEGeNqUifpS5o5Avo2o",
  "key18": "3gyM7ogpVethKsYFLASx2jAMbMPryYcTP41gKmdyB9sh1p1d9M2ZyXgBGLP25N4PLZ3aGS8CGt5xRNzQtPfxt9Wt",
  "key19": "4Y1ACuQqVdcej99gDgiLaby7Gaer6qi4PuP1FXCDhUbpPbKq7B8vMV3wFi9BoH1xjTConB8pH9VZFTSxzeSWtTjz",
  "key20": "67SxyMCXEMT7TqeA55wjiPaMfeJyE3s3aPN7FR9drYbnrsDbvPCaAszJnmAGER6tg99MTbK2vHgMk14KmLUqQcKL",
  "key21": "2wMbpFNY32iJwyZjZRM6zNX4zfFctsMxRYHnndP14ckejB5dksdHPNxBjWbVvD8aRg5shgky4j5rRZX626BeADRw",
  "key22": "3QuZd2UnxRdj1338AkcDrCoUxmGhBWkZRqvGp9ZEYFREygR23aaHKj1QH7VQy9pvBsJmWSBNeRxHGnNhSmWZpFe8",
  "key23": "4oFSNAKJsTfzW7mvX2atBapyYZv8enhS9CgvEDwzRAUq895GxXHcsUDCP5U86kyw6M4rGJxRmShuceRtU4s8RASo",
  "key24": "sjyPaCc4U2LZk5zxBQn2dgPekQmEgTN8GYvKgJpLxoH1B5ZWVoJMLLBCbqddb2UrxnF519ejAEquxtgZ8FMM7gK",
  "key25": "4SrfZ5YvJ6pUyanwkSM3XVS46gTHz6sNP7PJskCpBjXuVEhYByyRpjaYmJ9NRZ6xKnEcSuPYRnEJdta7AgPVJuab",
  "key26": "5mdCYUqaAnv6k5p5rBuc276hs7dLqcwsE6cKpZR2U2VP6TksrBxDSbrYsekXXxStZYnB2VyuiXidHVZuQ2rNFLCL",
  "key27": "t2vm2vjEbXg4P2ksTa7ZYA4fgTe3TvEzmYoePQZ8cjComiida7YfqnSpRbDsES4UL77c92cMhFB2M2oc75mTbLB",
  "key28": "CcTFz5bxKsfWxQAesbvxvjreK8YR51upVe1u9smty6BVXBex65iAvKujr9o4cGsHmRoPvujUUjwdTvwzvU2wgj6",
  "key29": "4ZohYCwDQVHRAs1NSb2P6vpM7KKX7VtDCMQMB6ZKYxbNQrHqRjuUeg3zE5bhNBXyMJmiTSDmsL5jJGD6sXrQ62bf",
  "key30": "5dguBx2529dQ9K5PQdMPgo3Lz3HyNAH8WipRyo9xviRax1h2DZLtgTNMcxqHRX8jcTZbGvMowBp4YJcBBBQ2bEin"
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
