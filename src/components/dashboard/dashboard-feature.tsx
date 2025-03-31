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
    "2DUe9fuZZybpFHhpZL3prhW7XKYcT6CD1gRhcm9t1PGeTCCaLD9QjuPKfKLE97xn8pA2VMdnQRYiRjHAb1gwQNY8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48cXCPsKn4GFzixjFJXoUDLG19N7FMQQ2VZZHf9vPs7ovYhftsH4KyQ3qw4rfqvuarMVCMyC6DRtjrR4NNgS3fBD",
  "key1": "65JoVjTEEJvSaPAT7Q6PeKEEpZVucatECdbQ7Hm17vzqos8TUeJeXwcBYLeuH8N28GQwTBpZrKhthEzFD3EcwFzZ",
  "key2": "Zu51RgXm3Q9bjkm76J8wrrXDW2iCkr9mTYha6tAmTxceD6F9uhUKDmSKEs4mpTWzZtsrnvu6kCL7W2qDVVcHQJb",
  "key3": "wUQRE5gc2pAQahdQgCSqWoGgmpxAiYLNjbTjCr5hwAdvHDTPUeFgbfFX2cKR27UUq6QbWrMXKWiSwiddiACrh5Y",
  "key4": "3p7UoeRBRRrP2CjpKcmvGBfzBNPcmbYq2VxE7UHJvUHp5f6MoDDiULk9U5R5L9ssc1hzSLpfQd9LKrWivRFGhZso",
  "key5": "24vRHKtGtPjBeXNR8wZZfuwuGf5xNsLg5SRDHe21AoYsZpG38cAVw8rpKKqzTHQUyMNGtP5k3ntYDxFnGvBczPZL",
  "key6": "4joLTrvEPR5c92EyxCiB6paa8qf97EiKE37rE8oVGyM3L7qSRomFb7NK7e1kk484QHSoycVCZS6nn7s5ueXVUT72",
  "key7": "4cLpgGqcs2mL6XCHNdAfW9zFBcskYGwF2f2MGWnwtX2hPsLGZfzH5V6ZXosRX9GrUsbZh9NCHihwTN7A6f3BxiLH",
  "key8": "5Ev9XmcCTkzDShDKmc8viJfw496ay2TrctTLrkARJpadNFXGYT52kF2LS47xffHtNSbSzFbiWjB1iRByd8uDmsHE",
  "key9": "33FZJNSutN2zGa63Vv4jZJazRjeK9LMH2fjAYaovvZPY2TkW3pJxvTxjyFqB6SS1ZcfhMn9SH2PSGBTgV6WigAgY",
  "key10": "ZNLh6TfQK92XYMc9BGNfNYp6U5mes4wBcwR9C1BQyLfqzBjoXEpibCTLMbYyNEB1sz1mFzvoiBCh9isDbaN1ZfL",
  "key11": "2P5UYEL5QL5PYfTbStL62smph82NgXvqNi1BQvG76xCDttE8QrpXh8aRio1j8RqmL3hku23CLdeEwTxAVpPx9Zwg",
  "key12": "xoDMkfv4XKZw3cANCcCBip28GYCTauxzaeDNAKXbN65HGpWDyS8t8Soi3DpppJe85ZcUU5UMmvGHoZS7xuSKxYe",
  "key13": "5X8Q3yCkgm4xYXGAQoDLMmeTyDjVL1x5sgZ3Z33dnBpWAiS467Eb4R86reogdvv5ZQCQuo9BAft7pSDhkFf6LZaL",
  "key14": "h7A32iRt4EPifxZhyP4nRB3r5hKXTow3xwrsbJqYfaXEVMhYhhTFHmPfThCZnQiQV1sW5iKFKqWC8eQGbKEmedC",
  "key15": "45H6Ev5YYXw8GfvYkMgkdKvjBJQ55G58QCzNyR4TUEkyPsb8pfXiJcwYgqV8xSy42rbSnKcnAYqdGA7BgBSCMAUx",
  "key16": "sQL4x98yteDSmFseXpncYtX1LSEPubPZENumCqwJuNrKpppxo9CQ1sA1CD5ZvZkKGB9nrhS2yZ6aTzeaSivQF9b",
  "key17": "2rhPwMLyJmNDRzXzeEHgaV5hDsy2kYr7dqDrsDifwCztLD2TSxhzLWKkVWUYRGQ9PPT7XhuZ9Uge7N2AWVkaXmnX",
  "key18": "3VzK4AFuvyKPCZ6Y5YxVLhg6CqC2L8YebdtKo7QcBtdTGGpRUTJYzQgihiFjXdEeHgEhkJny3Ej9KvkFkRP2aBKB",
  "key19": "2X1G36vytktHcBHQopsj69TbRe2eHxpY96dxMoNyzoBR8Cmn7woxYCTKmFXLhdki8eTkQm2am5GgXow9ByuSUDz4",
  "key20": "2bdSHf4sjbnokKHJ7kpGKbz4eRWg2NrUdfNSqtfoMz6deqbut4fs7k97ubhWYLE1jCtVLjgShLGfmkCqRurKz5BN",
  "key21": "59TA3Bnt1E7sfLkqiqdjyNrChxQDmvsoNLpCZPVoV14kQUddxNox13LKpYW5EbB15RZxsDJEzEARyA1qhLTbCZoh",
  "key22": "2Tek8k63vR6fSTQNRUebpbVo7Bgx5CLtdhbS55KkZmCaJ1cET5HDm2AZ29JWqQ2W4NXdLhnenKmyw28sF4LhCx3v",
  "key23": "3oNWtp6ghHqfHAEj1frUQQ5hTzwuxjq6Dsmwr9akEYTdXt1vxyqgoPwPJZYXZsnwc2GGz8rXTF9eJgY6gxocwNHV",
  "key24": "22uXcLPdjhVVDhep8XNnPk6iQGwn92RQiMvdToJgVCQ15QykaUrJRGpnrEqHvyz4ESMrtdy3AuWmA8BZhgfQ2pmG",
  "key25": "5hQbeoHyHWs1ekqQ4vUK8dt58Qwfnj9Wq8ZyBk81SFGfUMkZTVuUYWkujT8nw8LJPASKUtw8d3zt39kVhGVidKTj",
  "key26": "2GMHY4iusg1EEnzAug83SKEZ2b1ynsPgztLPR79v4ikMTFzJLM6pA7s48uvcFxAkSR6BT6sUiqXQtDxutXsvuKXq",
  "key27": "3MUR3EBPaBdgLA5B9hdSoGTXRYc1Dk3zVyj1kTxUXeDgWg3jjH7hvWzBEYvkJuHiBH7D7hPfXSCxci5FmR3WEEU3",
  "key28": "5DNHCrwEyGSJfrtsTt3U7uZGpLZTvFkgg7wQDjkHJGKG1w1hew79tcpXB5HT29DjixAeRyz1g4sG1rw6iWg5oLJm",
  "key29": "5GDKpUd9ZvmkMVPcdpFjmkvEz9Gw6eNE2JKnACmfbZ7dYP6wrjztKMuMqDXhQij4dQPEZeSvsQrKTAd72XFsK5Ak",
  "key30": "5hNT15gn2n6vCW9nG5nykNX9LREtTTvR3T1DsqXjqLAZuUut9dF9sdu6q75CEFWKJAY4MMZoesfy38d4yk1wpsbq",
  "key31": "UHW2P3nbPVjQnD4fHQJGdmjp4PQJ48CSTajq3qzKnwgCih1NXCxrpTgp57JEyeK5rt9ZXHwDaBxqvKULcsMc6hU",
  "key32": "29KaPgoARM1f1ig6TDE8Y7VQcx5pn1e816MscNcodKMdyuMzXv5W84vXTCero2oftitKwgKpUACQPrxFKD1Su1k6",
  "key33": "3RGttEfbLQhfPzYWSTktKcgP5CtSMXuPmBHQYn5PsFWsQcXTibNJaJvUbqwfFcrKfEWSFyGd4NDTpwxJ1UvmsKqq",
  "key34": "3RSz8AidxmzRDCMcnWsgM5caw6ui7vjusEfX7QErKvVJ6yvgYNTmy4iUB613jLbvfhSUTK2Jt5WrSf1onFhq9HwY",
  "key35": "4s8jkE3qNboZ2hxsvvmZHeqkxhiZPZSqaBCtwuhMaj4Ep66kkW928pK2Jdqq95QnFWfMDC4wBxhhDEDVMAgymfK"
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
