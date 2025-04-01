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
    "2xQdfXYaGZ1FjEHyGPNnrLU6LqFhDVMAmm8pbaS5oyet2xU7NTNvHVLciF1gifoGwrsny76cgv2fCQzdtym5iQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vSRgXsQQJrqk961s4JA2wiHHqErvMifLVRfLfeUAmJ1iiVpPapUpCEWmRPGzPkQ3Px9kcx7EfJTY3dF7mkMEqH3",
  "key1": "DPNqAyYhmnnXgAkY5LneXEhT1wWRBZjHfTDABWhT7Yb2S5QwGC9iQktUPR2nYy2twZ46KJvVh2v57dgA5T9vmnz",
  "key2": "mN1gYNP6CQM7xwErckznDRrwMJsMJ83BMHxMKuxX4XTfer148sfR1XBXKADwJzGZyBytmVDVXU3E34airyThvKK",
  "key3": "2VUAoJ4yUx4NHLqKynmW5M1uPM4TKszVFqTFEBga1NZPjUJT63TtYh8fCscrZzXY6gUng1Y8QikS86Ut82HCFibT",
  "key4": "3d4C2qjti3oP6nqNHshKpfNeqhtELAJi7jxj7vaHsDt5wtSHQRwf7qhx4Y3WXqvR92Wy736Hw1zogSStS2vcHSGu",
  "key5": "55AGmnHjLgzjFjnvp8MjvT4rQwAdqLmPEhgQQ43qp2P2HJX14wPYCwkbAPRcHAe2SHRSuKWp3pTjkzdpjbVBdPjQ",
  "key6": "2cy5H338bWPxGb8JEjsTRnj1tKgfjNKYgC3U44ndZw9meB6mvb8NsAWUYLReV14Sts5SNoXoRdfbXNBUn5r63G6S",
  "key7": "4a3QDvadK7c7cacnMDq17cf8g9x7kKJgCmaeKVNYSWmq8G94KB4mmDdT5P2zskbfAPyYfbP3skLpTD43HTbS3hqJ",
  "key8": "2pjJjcP9RsBkf4HZhku46NqGJpmChmN24699v2JiaQXt8ro8P6xjb67qDibrxeq26P8MkZnkpw78MZPieeNGzgaB",
  "key9": "5SZoNzW9EdYQyqpkuj18q2TAua2qCCFPmbAvE6pqPsvCUpuWejWbQo2yLeF3VnCu77mW9QUnMZmdhmLCmYSbfawW",
  "key10": "5AApiBC5KRkVpWs5mcYDorDjRSiJJDEoRNYgM8iHG4wLXHMyPzHNekkdPMAiUiaDXgXEhB7n2HyJDbc9sAdRV9Uh",
  "key11": "5zkXJ4KapsgqkWiba6YscngTiuf4ceShRrGpzhMmFZEntJcR8nZdzZCL2gxjwMK1RQUJVVUy7fSHN6n5GsVgnkv1",
  "key12": "57GtuEsdkj9UupQCeYRWC4LqbjwY8UHU6ofSAP77KhYtkrddCBCizbVrWNNTZw4Qoskmw3WafESL1inLAHm4pB2A",
  "key13": "3VjdCR9GMQ2A3d1sgXrUinJcve3GvmGkj89ZTukwcQvW8aUhpmK2dJLus7SXeJmm1H7px6gbgWyw6kjE1a6EAfXp",
  "key14": "2dJAiskxYVDhuggGAcP1npDwFj1ytBGXCZDaXADXYXxb2bVs2bvre34dhT1RKXDoMCWr8f4o3H7HTNEgRnNvxzaT",
  "key15": "3L7mKHL8CgYDyBRumSUnBGsX9AwSSQaTbUiUFwzgLMtM5bcx7YSirzbpYeDY2BP8xrtYeYiootRtdfEqkHgH2tbH",
  "key16": "5jsdzPBGnRKgNjyw3BXUPnTsVorGui7yK9iUNHxMvFbY3cm68HJXnSVdwnb8omu19oU2or95VguSpw9L5UCCnz4Y",
  "key17": "4VKYHNNCMD1XYcu8sjzXgvzCfSjjfRDm6gqjyh5Es2gWXDuiFMnWB5j6x7Ed8e9Vjkg6corj5BQR3B8AAbyYwQWy",
  "key18": "3KVPost2MAZAS17b9VNsPiCWB9VkNBuzjpo89AdPD2DByEMTnaneCr38LJQ4m7oz29VP1aeQP1ABPFZqR5Sy3Qsq",
  "key19": "2UVDgiuJWRFuyHccuGMNAz1s9ejHkxzY74nj5qTHBEjVYJB77oxjgEx38kvM2UWBMspBTKVRwQmTy5yFGMBiZVx5",
  "key20": "3gnXpFTvKvnPrGqit28pUY3tcmDFjsTTvAuAU2hE3QiyCpHaby4AqZPuw2hrocHdmwJTQQ11XtSdg2H2nGDjRFpQ",
  "key21": "2fC1k2PGpvXJgpg1XYieBjAzHwhS92zn5XHfei4fe3iCee4n1RhebYmF6iRtFjfPQsjnMyACGJpo5wYwjLetrb59",
  "key22": "66G5DTiC15rrUnqnZgGBEpJfEaat4Zsn4Lm9Wum9kxUr4Dao5qJFnAYcVWuTS1bx1rsqGiHMtLmcRnxmJ15eqN5T",
  "key23": "5qfyuzCjJxSyvC3Wc4pbqKR91TRKV695h2oRomXe9L3RyRuLbG9dkwNb8tMkZM5K5dPdYSDv5RHZYD3ASp9rmFzz",
  "key24": "5LiVQtuW8rHAxRJKq8Qup2n9yUiLccEt9SBN8ondANipmuvfHR8jJQVWtFowY1Guavhz9twM4VHdnuaBN19MKj6A",
  "key25": "5A4mGiPw72qQGYe7Mu3K4Jhae6mDEBa2QLeJkrqfnwJGyR4BV5y7csdzC5Nenu2NNc53hwPHwW2p5Fv1DqEaFdMu",
  "key26": "2TJZgkzNGF8ztDmvESkhw9ayh5kVAX7JMUFwUGESKvT9RfqJq2ogMzox344hXAuEGFcxtTDBxkF8WDwUicwRs1X7",
  "key27": "5dtqef765jmFw9pPJNdtQGLoLyV6L2fi2CHmRAicigMZYWGGQN4JwitTuyRdoQCBZs2iHz5jXU1JLsN4Qbt64pis",
  "key28": "AtbyP9Xab9ojEG4d3qe4se8KYkJE9kCfnipX7guQskFHXsf23FSGVxx18ZtLtnZkUvbDbVAqxowsnKsxeSa5hnQ",
  "key29": "5eErA9VBWAS4kQNVLgjKj3VwxdMfT4HvJyHWpUBepNvdXCFfpWT4gKnnU8x2DZjD3UoFo7Fmvs3kyBeStEcqK8Q9",
  "key30": "4B59ZPKZ9jAUGeqeCwQXMn7Kc67GQ7QRTbXG7ACTi4vu6kB9jUXAzztuQ5RSRdoxkyjhxyQjDg7U2eyKXqzuALq8",
  "key31": "5PDHHmbuPGm7BwC8YuSi8bGKDnQa1pTRWikAowBoHkqqwL88cx9e8XXbhNyd3zUaeSg2Eq8p73WZambHJXTWaoMg",
  "key32": "Em2ykEb7EMtLiaiVDbABQ1kHAtPBFmPzZ3YyD43T51JdqEKgHbfwEArCzoJf75mzwsiUgGBcTpDw2bkizKFktT4",
  "key33": "2dCdEe93gr555fRo73kWrpB5mWa5mEggnQp1LRNP812uXeMgqkbe3ZBhPe41u2DxNf9yHYCEKqYy9MrbCJJAVMWb",
  "key34": "2Hp7kzeC8UdbSchTNNV8i5Dz5CmCdWFJTqLSfjXdsUcHYL8CZkaXkEHc9Fs3GuAoYKqcfNT6wgoUcKRd2tK7Txek",
  "key35": "2ojxXwpKjoeHpe1GZ3AG4a6ygQPGZsfoH47X2bAU2dh2iCLx4H3BtHmGECFayvBTfT5h6LAwzMqHuNBDFp5c5aWM",
  "key36": "4Pqbk4cCm8fXweetdEk8VGBF136GcyteYMAX5jDyp5hkbSYneueoRUY6x8MxCxq8kiVmjKmEnw1CFBmM1qbW3441",
  "key37": "3ns7vkGVj8CpLFVXP6SacGKQ433ZRd7HFbE17AEE1EfX13giv7BcCtk3PWhwNmqH3cK9C6bVbE66ZbnYodHoU7z9",
  "key38": "37Nqjxe7WVQ84CvE5nXqwwacajYi55rBBAgZ7CbE8xnWS4ycSScwFEkXvhBmzUwQmizRTpng9xy5tn6Wf48EGS77",
  "key39": "5rG1iYYNauVPKmsWH8zYdjGN6Lh6CMpr6g9eJGD8NB97n9Fv43pZyF7un5nHPy9o8u94aTfcorLShVwZToFpheBp",
  "key40": "5DpPUrDmj17Ag1iaB1NpUJTnh2yDyfcsAY2MpXBo6XfiwTB7WezGuPUNFZZHnunP5nW3vxJK4waLja83CpNZvgUc",
  "key41": "4UndZhzEh3P5zeVgNAhYT1R8MjX5t5EGqug5gCm86KMqbbnRx1jq97P2wWrf17rMnVqQmdFDiTKT2upsBsKKGxTM",
  "key42": "4BFCPTjxApmHyxz1xEf3rDHZzrjTL15VbrXktr9PBnUT2QcGrzQZvUmqf3t4oVKhXYUsWb7EjTAyRucMord5DSsQ",
  "key43": "31YqWHt5dvdgYHyjCH8FLFP5p4ZSzzStLVrNTvyPtQ32TwZx1VfCc2DXxXJrGf8KBMEREnag9GRz73NUmQPZuq2Z",
  "key44": "4GfDdwMdHf6wwHGEgWApG8y6Dr16i6UXNRbSMjDs9ReCW6ZyarSk9YYimbvuVXsGvrC1QmcypRduq3HSvmL3UWyJ"
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
