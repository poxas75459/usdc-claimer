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
    "2WYhy8xWatoFWWmKS1XfPrirwGniWRUm1TCVuDXZkviGAutQvsVtrDbNuToamxRUyreC17WYnDDx6wDc2zYReiSd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BzWMA15g3UmQJ8i81ZwRa5Cq8paFEamXcRr1mX4pZRk1jjjGcqtQz9XGRnCNsVettni7qqTwPvCMSyYDwff7F55",
  "key1": "57m3WigLE7AArxjoB3gm74jPUNMu4VXqYTt67hwrPQ6BFFvzEbiekE72ATfniFtew4cT2U51Fe79veihQLo5nSnq",
  "key2": "2DaebY6c4HciGbFfWJGnbs1aBCBw8F5mga6ef427N2ZZR1mvkKn3HgaJHew6bMAxzdYFxunqccL6wButWqmx9huS",
  "key3": "5dVLdhhMgoqoi7WHj32ZVtEto4vY8No6Mi71Meh34UeQghNVzUFBqQd1fBPnTyfcspo1N6p9BnKfmhTSK9PbdRdo",
  "key4": "5fTo3sUFVCZG7ZPhAVjSLj3RGaAaG54yncWHSxKh1Kjn2Ai81GyoQs3ciuZph7DDZkRcSNhqgoahBaUPcYJeaRAG",
  "key5": "5C28GGB8kNf6RZVxzahtxMQNLzMFc3UBbHvTw5rQw2jwXHo9mCM2HQWmLZ8F3HC12z9rgecM2P3T5B5zWfPkR6a7",
  "key6": "3bHU63Udks7qFN29KEYQBR6B7ZS6mMbfeiwz1tNhmgAoDYptszi9B4Eman7nmDPZyrRxbpMzMETV7EDbGvtG6VJ4",
  "key7": "4F7Kap4RUkP1VbuHSxN79BX8JABn8bKdgkEmfhpQAcdGXUq2R95zUWGZe93uhkzQZzHSYrUT1u62Lrayuyi7xE7y",
  "key8": "5BdNQYHdrKEq3x4JrLi2BgdVZhrJkdMHPTy8uHyUsdGV6KoMBMsvv7ed7DXB2N1t6xe7zRxZqsPXkFzB4kHn6aaC",
  "key9": "uFcSrY9LhCjUbByZC1AkfCKx2ify11DcuygCfbJs67hGqb8GqbfPsFonXaXS7FcwVHU7bzF1y1zdooupsbGtmCF",
  "key10": "5KHzVwLJfSgBzWzStS1AAd621kf3moSRmFP66mPFyjG8FCngkbYK8sQbG83pTpgv9kPwbUKXYjWhsoxiQrizf4fU",
  "key11": "2hH5bdhCY3nGgczzuHtixvVYH17vR37wgwoX87p9C3hmyk3MYrMqscgDLhZnnJaHAs28rqFaxLRZXG1KMnN4wUVM",
  "key12": "wFnpEq8tH6LAKWbsFEw6GYUEpx9VEb6Wp3uK3yncwBQu3nX5fmRNEFhnxtA6xQbuSxtLmypyHLjF8PkBWzvH2js",
  "key13": "4YTjLVgR8wDRfhZuFDD7VqXAUM5MSpJKHN6RrqKDAtb5vzDcnWa5EBH85r34FphTyjoZoCzRptfQtLrtxW2zgjqy",
  "key14": "2DCCQKfq4wuvh5GoTD9jJPAXkWBc2sHFaLqhkGevqwk6r6o8aWCKGSS1hi8HWU5KWB69WjmEenYqwF2F8zt6rnzG",
  "key15": "2ABU6zjXVz38z5gZ13C7TqqVNretrB4QYaQgAe4SiqEnvXcmEmnyPjpWgD8TwyGbHmL6hZx3Fng7J9CjZAjY6278",
  "key16": "2Bfe9797kahUKXqJyQ4v7EExZMkvAVrmt9W3tJsfm5YNBrUCzuxXTWt6Y7GFTt1jdZw2xZzXSY1rpJg2gLARHa9n",
  "key17": "2UUbUvaipaC4F5fAPn57FpXpwzUF2qeFQ47XBnh21s7eovPNGc7NrqBEotAmFuUzF3d6JCFZKMEhBZ1jeAyAcuA1",
  "key18": "88ronsCTheHLEM2EjYA67nW9K7wuhWeHPhNeE6baAHTRDuF7kTXHq52D3DppSWxMPLirkTcJpFuQGvpGZZZCt9p",
  "key19": "5bEm3qKGHkM76uFKTEW4yFX2VHnrLVUvWsN6GyNQHca5RMXGez7x9TJqkrrkhVJ35fxWQjwKeeRQti5vMVdjCG1j",
  "key20": "4c7quQRKJQ9DKTsrHVa5gW95qGWy2aY87hpiYcwU8CxfzADkXC1fvCLHwNeC7i3XmqF339x5iADfRkwiPaAhuKY",
  "key21": "4Y9fLQ1a9mZtktuZVkkk2KUpz6XAnpZuBZ88P1gDS6XcBGB6YJUtAipY5sLdtGheCsECGQGt1rCbUof6bphV2G9y",
  "key22": "23Jb9L8jxLHK4fJMTz8D7pJ6fN9XX7exXNVmFZR1mWyZT74xNWY8ccNwbTkJqzE1hjQhdNNehr87PjcBN3BK8Tqj",
  "key23": "2vsqY8nmVNx1d46evNpX3YELpSxXdfSRgVHqMhvUHSoUzK3h1S2Zh4zjumuqwh66pjmUphvoG9hesQhaCSimWH72",
  "key24": "QvUSg3EaK6ugFFLeCREYmvACntHVFmkfkUNjCGv7xiUBLnvMkoVwg9obH1JcDNGq9KRGywyz2rzUPcqKV3v4qWp",
  "key25": "2Dt2fmoNj7NVrYVvUspivr5gep4zyMeePj1AHgQTGbjtJ6SFiRLyBEKSgxdqnMkSQUJDWnqsXEryzyXynivux2rW",
  "key26": "43gH5EbmETRbGQ3yYadGwkYnMoB9qxkDHcvwB1yLtqduJVradcPb73iWAxL5eBfCePiLwcJ8z6S3FjC8BGieUJ2b",
  "key27": "2Z9cGoKnRyx2v5AubCXKpBH2VoKNHDkBUyZ6THyFsHqLGrwnNsCGzvRmYhe37xncfoazxbdTDnFCm14RbWhTXEh",
  "key28": "7S1e16PWWCZWu3saNgH4W72HNZXas68XxSTCkLDAJw9SwPyuwsZ1YFqvsjPMKKonBXLcoMiJdsd5N7ZQfbGTZ4E",
  "key29": "4vRW4yBuwByq5y1nLCrzCjEHtC64ig62ytU4epugvZ1vrQ6UDcvQrrg3ZpTPcpXWevAtZ7b4RnzPj2oUJBvXdJXi",
  "key30": "4SAH1ypVbwnsv8D6hxZE84qR7r3DRyFz84v2S4s3GuwQAZRc55CYN7v9qyUn4LWaGpE4VgFyHooVX3qhwXpZp5FG",
  "key31": "38aW4fPRLcnBpavt8xWjjF3dAL7td9Lbzxr95CL8HehiooyFMDWTBevDJ78fvorPsKYb9vxiipWekeVcH3MUobFg"
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
