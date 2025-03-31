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
    "2JxWTVYZoH5TBxZcHRX6kjUMYzprrLpzxr8iqd91FCtfBFn3QsQDcWAanc3rpzFbXdg2JfXoNNQTrnu8LsdDBzge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n9YybkwWz8xpLVkfEBE7WHXRLitceEhk3NQNWKHPBuock8dAxQfeDwWUaURx6qGTByLaQq82Fnum786qbwdR4SE",
  "key1": "d93mNPjesGySPbK6FW1asFqHQrtzjkLLfRv15pwmBunH5ZrnGLn9p6Y57ht6eQAhZNxrW4z31fSbMWAYDqZbjk6",
  "key2": "AeaMBQ1BqyXDr5KBbkdzXfXofx27mzchWYymVyjiknnG3MPjHb3puB6w3RiC1vC82h4FB1kksGXv83ff4PoYXud",
  "key3": "4oEQMaVsozDkXRZFytFppSjtnGw9mLyvvXtX6TbJn5UHvPBH82nBySdT7EgzmFL7kWszvRugiA7CwXsXYhcziyTr",
  "key4": "5QVKLaAzeCFibsDGiS7cMTyCcvpU7fZAu7rGgbCVZSjrX983wSbwUAohz2jDCCPRmzdreuqebrXYgipZUb3NEsEf",
  "key5": "5u3GXbmQ9utH4d5YicaFTog9RcN5GeCo5ASu6VAQ95XX6uxm3y93TP7ftyZZjkVguAfsag1EGEs4AgLDSVy6HpzF",
  "key6": "3cpfJjnfYvWkHmKHeSCSk89pU3xkJuvac6EvQAhXdXhvMqoyGuThqBu2EfECcs1nWM1zR28EKHtdQFPszDpySJox",
  "key7": "3ps4pEtFBntAjF83EgU3UBx5ceLto3dVB3ZShEzvogsz6GxMtRHdef5PwqZknXLt4a4A7foXXEEDs6dbraU8VaVg",
  "key8": "2WRfyNZNLouV4SnKYpFWFSnKbqzqFaTj3NteoKJqjEJShaSChpPQaiFjs8sviJkMH4hKNDiEvkT2R9yYgRPpCrmL",
  "key9": "37XaRMevZ3gm2z4fQJ6E6Ac9Utvh7bz9GkC778BDr5AV6834oXZfvHvYmKu4rz7Rq9wdhE8HCde2fVWRMypvFdx1",
  "key10": "yHwSx7B5pJGsyar5scDbksQz7bS1xGPcxFv8xyhrhps2ThNjAdYPoxzy1TdzR8Uxv4p6wcE6AUhhBr1FZ8NQLjS",
  "key11": "3Ft4zcmCvVwvjRz413eXFjCmne91NbTrzSwMfhr9uAE298D59wKzd39oVsPrapGi6wB9YVDWJD42inzrZ8R9X9hx",
  "key12": "52uwyoAkgQFLFZPVAHQtEEXLh4maqdFDbasGGhstthJj5uXHPpWCTqQZzRKNH1xEhWQRGTYZR8M3D2Fsgu12AnD3",
  "key13": "4i1TKwrtEdX3NHUG4YruuAGH8QC3SxM3sumga1WmZLxMCbY9fp9kfnXg5BgYySkJ1SKiYJaCCKXoF49PK6VYy6ie",
  "key14": "5vV8cxCMdtFGYQeG4N9MFaXuQP5Ea9hBtZFdMwRFGuYWkuVb2jW26jB2c5vrrVYLCD1ocNfzPzGXRrjrTVumHSQ7",
  "key15": "2hvpbVAvjK8L2XzBFqBksnzSfetBRDbxt1L8JkTGNXWYZfXAVxEaU6Lu5pNeAnFjqtFxb81iQXPBfSBKTNSi12yg",
  "key16": "mp2GG7t1T7U2YhWBssLQ2EjfhnMUCwM2h5wxnAtGfRUchmEF2cYcdGCdnJ7jHHEKdcE2r6StiPbu973dWdJy4X5",
  "key17": "axEWJV6YftPqRfYZ8h9L5JkZwvF6nfJdtcyvoRQR82D9HbgEYLwbGnq5oqe1WEFqGuiJz5cYPMcnjAkP34P8u3Z",
  "key18": "3jsV5GhC2GgQqGHViKadiCpVSuDgHQ5H827cG3EguuF9RUgFFyT58UCDTh6Wb6AdSEt9CunFyr9743tNdnSsvy7m",
  "key19": "5NCgSLvm1Au8KvoNzzLCqvyMpmR2WVGEAybxKsFB7P8cG3pzaDS5HGAxVjoPMEYj37RauADe827fm4USYjH2r7SE",
  "key20": "4kNpesVEutaacqDVLrWpdC9SG9ghJZvkbgJwrfqnV9qCTPtRD4miEAhZsyYCAqeVKXYLUB7psw66YhwUZT1iQCQd",
  "key21": "26ReUuhZ6CGJyxAG8BGqSsoWoV2SWcCn4A9zJS7NiW9mAkzpf8NPh5zNWwXRxPfZvsj8P7wL3QPwUjWqZNmrpV6w",
  "key22": "3H6it8frfEmcoA74RVJi33qzvKiwbsU5u6Q1qEFS7DK27bDaETFiHw9EQEcuoJZEAQFMbpBQQTQD8Gx46ktcRdmT",
  "key23": "4VtNxQc5X8zfKcpqXS3wywcXSivR2MAsDKXhh1BX2tbSZwBSWK3VHf3LaM2cLK3quCEtWmRMymjYpwbaR9wVPzVQ",
  "key24": "3MZ79Kiqnx13C3EzCCEHaCVvKLvJnkhDJJ6KwcKfR98Y2t8VcgQRpPHarUeqzHYwUXYDBGyaZ6d4VtSPNYWVqHGb"
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
