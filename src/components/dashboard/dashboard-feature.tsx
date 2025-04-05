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
    "QZA6KPBkvSodff8phw8h6W4kCRwjrU7tgzEoTpKzvpxT2dT3VrW6Bfb2ppLiuSVMAoJYr1P3wGQAbAkMPtNAhwN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rrp8Lws7mVRGvfvYu5gmFTnt9DtPcfjgXWEfyX4cnnuXf5er52knaxSepwxJBixu6KwwHx2JHCVczHoTqNkmJUE",
  "key1": "2FBipUH15STKZA9UPhvoMe2MScjUckmsujQmKWZJJBq8yWkg2JCDdAhmhaUVkNLQYM5CHPonXCJkjksPd8X4BSLm",
  "key2": "54xP3Wonv9jeSVvT3ULwxzqtoau1UFkNqayHEvJ61T1pVzeRWviUwcn63jXWZ56u78T1deXNWNeGVEp241sbZFF1",
  "key3": "5dezWU63zA3vDbFngw6ocvnhJuz15mZQ5FNRu7SXZJVAzLE9GShv3UAiKUFY1ZcDhBMfbaK8NmxBRwoBabDQz2Va",
  "key4": "3hffgN7LUegNrUw21HGVmMyiNDMMJPUZHfXfwxmkPQEPAzCcSiZyt3vAZtu5nsQjS935xyLcUfkS25vzcKW52f2g",
  "key5": "5wLEshTrxvJT3BCAnZvD1dzVBoSF9jEjUwGuJg1kjwrs8r1EToeqc7RQxxRH9os9qZJPNQszzyMcdWjeoq2GmL5S",
  "key6": "2Cp5nhe5rNWERZaz1HKEdY5D3H8vGDhRxTU8GN7exW662qJxaCCN7yo1a1cbtqQdmZ9D11FRLXDVdo6U8JJyaYo9",
  "key7": "2BD8Ldf8hUQnp9jkZBFVpaRfbsyKtVXzxwhZ3T8cf6XSH9VM28MyAKsa58vX8eLACgaax5vgvkeJkKPRmaxKrrqY",
  "key8": "3kmrJWhJcLvjZMnoWthS2aLEz6AJUKZhEauBwSF3kivKaP2T3rXmCtdyU91RNsCxz8PAtmvn9nb8ib2GadjyE4nG",
  "key9": "679W78R4KRWz5s5YDPpHtRA9pXmDq6vbC67WkJ8o36gRnQDfUmKHjYu6mmv7uuwBLbUn3ugLMgeELaD23g7FLFhd",
  "key10": "fVKMBBzbMoc4MYWeG78VTvEfVDnPGz5JgFx7ydVXGz9s6ERMhGSKKSdh5oJSVSCbCmvsLR3pQpxEU9yYNpAYQkv",
  "key11": "5x9QDH7q7HPsHnFtNM7Di3xayhGABdrvfRxzaxvMwdSQJaxCp5UYYutB9XF3u6GPv3riaGrEKmkKVPVA2k3yCPbj",
  "key12": "2FStaW6BBem1gN3LvsgpMjp82U8mq9r6pGJ1HYpzZWnnfefQbx3GEspxQ1JrcwdH3jBC2V5NWjY1Z8qA2oyU7J17",
  "key13": "hdr162T4VSNvGQorHJcpz59LeQq2mxutKay2RJgKkGU8BqaVcy6YJAVDGHVxKGZe8xzqx6uLrjbr9cXQWt9dGZc",
  "key14": "wraYPYGJ8JYchfYfS7okx55pf5PbLb4Wf7RX3Kgxc3cPGH9P3zLPvArU57gMM62SNmoYrVC1BAsncsuUUkkNN2p",
  "key15": "51kp1KZ5iHPkMfq8sWTfz5fpo76ALpnqqBJGTRPGrqQhrWgJ14U7ojy2MHU5xUr3b79CGQKE5RyR3SdMRqAMUJjy",
  "key16": "3i7DxnHVPKdFULasQSW4hQ8JiRD2C49XDigxNpnSR1yxqTcPnQ6QLTccyh96WBkuWVKj9vrmhPiX31yjLLhteAzS",
  "key17": "4UwcGiJXpP7Euaam7pRpCCWzyoJ2xD8KF6UfBS5fNGVMK1Pej53hBEuimuxwUtkFUP5EbZuR693zkCrna6EV6bUk",
  "key18": "tZFr6rTCpvVwnk2YvZrTu3zmANrMXM2tfmzrZqbBMnNw8b3zvXZ6LJcp9qnpXQSjeX69epZjbBUrn1UfF7PshCZ",
  "key19": "5TrAmRpChPMRnnS8fMcqCvpVzGPr8hd1MHMHb3yRHk5YkaqH88Q7heVzjdJS3WhvCv6i7yCcgUrujQwB65E64mJ5",
  "key20": "59UAJBGUHRGHpExySWDTTb5KZDtKmCQqkDcTdLtkMHkbpCyMoPYDtiQTsocuHSvcRn1LBrN83wTf6BwMYJgVWZKe",
  "key21": "4ceHQuVsmkC8XgDCu8jUef9UTtcibZJWoUnHDnscNQyDpF1ru7BLNeEPB8U8ABSWLEMhAFWdL2T53pVv2od9fBbN",
  "key22": "5TQT6PzfcPYUWqq4M9QPYQBHQf8XA9be3LcHh9FEAZkEYK8L5gQH146xhRgeZSNQq7ohZ1k22rJv7kzpE9iWMDTS",
  "key23": "3F2na18ZurzRm2GSfxkQmTsYpqcjPjm43VK6HMPUpw17bsAGce6Gc4razmM3wgBAfZeMS3ZSn72VLh46JjXrsRPh",
  "key24": "4pZQ6bgYckj9Qsmw6N3JSCBawJE6NGefM3Uk7cXryox5VJokUmdEFVQMKugYy8pMEg87y63dEH1e3fxz3z4XmPGe",
  "key25": "2puWB7hg74JNEQTTfTrGetFU4SXtwS9P7D9xw1p9m9FXsyBPzTUD6fxjcndva4Moe7UigFZ2SA3oZHr9sXgCKGvN",
  "key26": "22c32qJVLKqbCeAC74DnvCgz5xtdbGtQhunnQTmrgmnnsxCnX6WuxEXTxiKLFZZp1eYLDV4KFhqtXziop3rkAFhq",
  "key27": "2vk2zW8ZuX4CuebmLNAhsMy98eTfkEWt6dJtRkBC4NzAuWfXafKmotu5WMekTZWk3pksS6cs1F9nnUqWWsdKUjw1",
  "key28": "3VSmG114yQQgAVHcgoCexSQZQ2Yj3ivFjFBktvNXd9i5x1ZHJyZDAr7jU3AWdzE17y6QSJ5d2t1iSSXy4zi1FA56",
  "key29": "vRNpoEq3SWYo8WSsSnaQEbRnmRveEiTXWnedgSfE4LWEXhffoyG8kEV541EhJ2AvRZVBo1M2oEzg9MqbwkFfgBY",
  "key30": "syD4HTccdLVGsZzHvqvb6PWnSVEuLGXXxNwM57XmxSVwyfcfrbfnLJGb6vx7UBZCFwpHiStsoMV1MDTmRvjMZS8",
  "key31": "4Kc8CeqA7SnPN5Fk7NF91NbiYq2UKiMTbyo4KuAdnV9J8AfCuhmBC3KcxxQRM1DckYoNKFgN2hp91atHQaDm6Hwr",
  "key32": "3nZZqHDUyc9Nk23enDuRLmLAYA3u5vWc5H9ZBj7Y2n6Xw6Pch4JZKus8SLUL2ZNqiDhBUNYDjG95mu8kfSEvEyCf",
  "key33": "1hRYXb4VMxaU2ULWNAjY8o1hNi8DAPmcAqzLfJctT8G2VnbeH2j5Mq8ZHwSqEBytUb6gRfJYibt63sCaRZ59eYs",
  "key34": "51fFrgYBpyGpetjRg3A1t3ww91rSJohcb3VskHgaX2FSBch8gVtzX6XdPyYG7X49unKNfumpmPxhXALvLmW7zeSV",
  "key35": "UW8zQM6TDt8eUseSbZMDaQ2QibyvdG2AYuACqpmV5Bp66QhdiRi8YSdZut2prD1JYJpJaagDiNSHWPa2LqtajiB",
  "key36": "5wRg27jcTfo6ChBBHKBMNtrftWL2B8xNZ7sAjXnKWuYky7FrGQHJ5mymWcj9Fap95FBsa5yp7qaiphztW75QFdta",
  "key37": "612z92gHXDosvBnLHodBKsnPmWch1SqJEcMrepHKNYpCYfoSgkM6FqZzSNg5QruXhGzJ2pvn47GWPgVQazRVzMRa",
  "key38": "2qMb3MuMY4y2xkXGhUTQfKBkapgrXiawpNDkd135erLNkd2GMtiNDYfxaSfARFoN27HAHa9S8xZECmhxWdysLJjR"
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
