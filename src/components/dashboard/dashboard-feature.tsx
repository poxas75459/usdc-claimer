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
    "3U2cySSaqYzZTLr2wGXbipmXwgoYEkeJZs3nH4eedxAtTXR2DHDkm1nMmrnXUHEfGY4HpooWMKQAAmM9qtvtgs2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BLnfCeWZZshgSBQuiJqCzpmpoTNJSk4iG7qpYAx9VPBAd33KqNyi1ti5qYECDBJNL9Ec7Nszzx8uMguX75Nca11",
  "key1": "Pmkdc59M92cxMffiiHE2EKKfH9jGaGYX8vY3qqTqu3ZKjXXZD11CLm5wV1KJGuvBMvcWt9yjSBFvPyh44ZASCV8",
  "key2": "4QkTkxkUcMCj5xBRjUiJveVZUzi4Mf7ZXz9sTrWTi6QagE78CGkSYnF6k8m1xJYdjsVXkoZMPcAUJhPfWikNJwte",
  "key3": "51MXTidhfhrtp1v2vhENjNtd5a3hErKD9y6HKcpiobr6dNtMPvRoJ1pCEwuCfoq2LadcPavwQc9DYX7QfC9RBxGH",
  "key4": "GmvDW9LCMjw9zt3hu4CGovp9eWhgz9KwVrTQQLv7eyxASqTTSTxnFy1LZaqzN7NtCgnQMEswWnBo3TkpFBmk78h",
  "key5": "5ra6zwao6ErXvdGkKbS3dmYDRzNyEtodgkpeyrX3vmhscJeyZR4Hjs51omFALm5BbfzyKdNbzPVd5CP75fFkwEiQ",
  "key6": "yFZ9pZFL2Ddh3CCS323ejuSm631eANyMZqypUQWYuRKVcxXNeJYqMToyNH3sdyxFLyMwf57zwhrT4oUtcvWfkvp",
  "key7": "2MrtrBinnGAciYWnAbxuRy7TMm3JFgMNxB1atbd91FnoR3TEhUmjfSLRCYtWTtDiZgd62gcnWLc6euLAHR3yKrmm",
  "key8": "3DSp1Lx1pgLWuFadJCFinUsfRSPm4QsZ4mgB6DVtjQRRfvjUY83cz5FCXNQUfxLE2Pyd5sMo88wijjhBDM187Jq3",
  "key9": "3NvbnTVTBSnFDeGnJCCthEqFDExWun7RRtKs15rE5KtHrsXhMSNXJAhqHj5p7Vgz58i9kNtCZHGSCwSSHooqUBf9",
  "key10": "4F5ad42RT369rZ4TLrbFPgNt3BRytiRKjPLpXNAs1Uz9F2wnzGyztE6YhqB37xuqw68yqjrgoMW2HrZ6CAmkwWr9",
  "key11": "34hvwtHJahkSPrrpm35HWLAWaoVoNwSgkxa8uhAoEXfcUz96MjQ2y7fAkk84kRpCCRNPS38xMqeBXbJXFf6i1hK3",
  "key12": "47UoennFZ6dugELzxababgB7fcuWG15uZhqi72V8qpiJy3AcNKrP67EB1dEbmxGVmy8rLinNZSzbDBKtVHujx2ir",
  "key13": "2urhz4zizGJfvrQTfut4tgfMam1JWJEGjHaxCQdcCkX6of5oz5zCVDyCaYxA1dUPWo4JqBcDPuw7Uvar4gWiDDLv",
  "key14": "2TZicTTQQxczwsRj1fDFxvq8G8LQETDazGoXedmKeAfTe11LwvYpWwvhNhAPFAtER6nR77LT3sgtmQ2z7xgzmKGy",
  "key15": "65cdEDiBNWXus5N4rLVpiaRdA8M17wmc1vaVYfpkpowLFZjSdNNHSeGsfyBr9tMULa41JGphjoN5YPSPZRhusXg2",
  "key16": "45ZUqYAGGMTEeZkjoW6GGjSh3nemgDZ6Xk4V6TfUDBUHfWcpUajgt5VxeTN9FesRKYeyaxbf9uB67JaSATGA8uwq",
  "key17": "3jpGNZxGYtu6HhiKxZkCoP8gTjNLWugwKoSJWViN8cHsz69M4hpyUDwupTYtiNsJchdvnBxXtzPTVTTzhedMvZfv",
  "key18": "GW4kVA2TX1vXm3VLonkidnrMoKa2dfgDYuzj68m82oKP723XbgpgLf8WdkfiTeQgiWQuDCaJtkSvRhMPv6Aqu51",
  "key19": "RtGJcJ4uTHzgk7EKR1cNWLrQjB6uqzDzeUQUfPBDBh7FZTWgCoD3gSNAFRYahRGBQJLKEGevnd9Brwz4Ypm9KFP",
  "key20": "5e8Yf4Pjyv4f6VzjUqKad6r2UbG2iRzy7A8BB5FJg8Cq3K8uyyEfEhzvcs6sGE18SRjboeeyePb38iNm8CC762Pe",
  "key21": "3WALRM1dZmGhGa3SiqVMxpKAaUWGc7NEiYz6wzPDEBCbrNR9k12rhvZmNnsLsQrhicXhPNtBgY8VZQwAxYiLx2jm",
  "key22": "gqeRZkcW27QrcfuehDzeEWk1tqi3xQQtTGjzW15ZosPhVc4ZmzcPX7VujiZcPCCnX6ALfNzkM15fXFgXF2iydDP",
  "key23": "uEUTvp1cciEfsL5xbn9WJoyPYhDciAR8teTY85sJFaNmQKHuyiJ5FUtbZXqzv2C9RR74XPFKqeurRCpyPAbfygd",
  "key24": "59Ca8m5CATAwWLHx5x6xF9fKdYK7KwRkMMGjWc83trKrq8NGqSprA4xGv8YFQpWEV8mDPJgq4oqGTgEYeznoz3kF",
  "key25": "4Sjeb76xjQ4q9EhtZbiFifu31Au5DvyPSVUCK2eVLpa8F2Qs4LU9szj3gnsJ5XKAQNCDceN9ZX2Ds1n5Yp4s8XUx"
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
