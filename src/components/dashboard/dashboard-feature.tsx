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
    "4VFuLq7ik5Ab49CfptkugeaWSXYsbRJQEZToiCVvtmrhTBCJMNxUFE48DiLWve3JhnP1mh7C7cr3hXGz4AE3hs7j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BJ1CaRhHevaHLH1AYMgjaL3ticbpPegHx9GnqqgapFam3ioPSjqDsTStiGUso1SN6Tszoj58ZzJVQUyVc9kcHKo",
  "key1": "2gKVaufVmUormrnScKRFjB7UY4XhRANKVbm4TuA8AXgqSpxeEBXeXQZqUAHKd2iHdiEiLVuvE1iXQEv5SdNc3pGn",
  "key2": "2tTpZYihktooZMYvLf7pdqj2WZBh8sTjU52SMUpSjsfyEjmi5ZcvLjMYCJgTcURYANhZXMxKL44PUBFoTujcJvFr",
  "key3": "v7jNWrphEsbVjr4isMDUKMdoytE2fy8QPrRA7KBc2QzMvMZh7jrR493JXmpJrgsoqUSDcUEdZGQqFXz31nj1CY8",
  "key4": "5Hjj2JvqxDGFbussSKrHbzL31u5ygsgpgGphKi1SgeY1PYmQuF7RGLLW8tjmC6ce99fx44rfSNWiB2KEji5enFt4",
  "key5": "3wecWwNA88LXQL4J1qJS1tR2an6F8J28afX5vS6r6UMVSa89P9m6DdDqdRbMKuC78Wd6w2szFwNE6GEhW6DvELA6",
  "key6": "3ZQ6Z3Q7mRfd124Eheqx2SDp89PzDj9Wj2BozC7uSwcZsWErxt6DMZekaKUqfUzFWmpRdJBFdE3rabog3t14o4MS",
  "key7": "4xdgHo4YnZCkKvs59bkDogkm4YMy5YJuMJ36rBYfjrWFH1yoEdhxjsGG1BpT1tC9PGfkSD4XXkpdBctfUsRMipFd",
  "key8": "5jUbuPFg53XmJYqXQ7axUmgF1icSrfro4rH9E9FsZA7rmFxi5FzWfAhPjkt2uxVKcKqCEenkuMkJQ4pYZB4AFMFi",
  "key9": "552kJmUM1W6uePK6J6ohLV9DNqfBtp5gbXiL5hUGqTbhazw61GMkm3KBq66vFqeeFPyhW7LBnkuj7eQpgMKqcpcN",
  "key10": "tizQiuxcLRjcWWsc2Na7mW8SBL2ibLvbqwsisvWudHag6AKaLaF92bLbh2zyvPKoHvLZ6x7SztdRbWC7VSVmbh7",
  "key11": "27e6HVkLfrNCc5kbmqK9apSbkHPo9NvbCGdq3YRtoJ6rT3HAhpKp2VARvvdW5fCktMQwKRoyJBPb3t4pd8MwgKXJ",
  "key12": "4FhZU5Gb6rBWURJXY5Z6A1UBXpnALExLiU3aw5Sticg7ZxfZgbWbWtCKveeLhf3gwRZaKy9eBE4d5S1y3uJYNQqu",
  "key13": "43VRrjyZcCYdFqRSjzHHPKpTXuFRi7jt9Lpa8NE778mFbyrXoKhXvWzNUvuVP1qRWxg9WCobqSLYfCMFSU4ZURBH",
  "key14": "4qqbe1GT65EXX6nX4yqW1dow9YimUd8dEktWeC5Q9SmcT8SCv6pxgadngGb5jZa86BiaZSBMB83oCSV4tDqErmHh",
  "key15": "4EfRyBrJ2AWhsUcFU4DLd4VqRSQLkasNEXBoYHJrTmgQKtS1XxGJRwgW1ucjEVZxRdpmTEBDs53Dz4ocrq38cZ4d",
  "key16": "4jYyLfhto5k1Cb4Y3pztBpgmQRqn6rBsYwBKQ59NFvPnNmpSjpfkg4W4ooqwnjLXBtobNrgg42CueQuMifgUJqQX",
  "key17": "58zBRX1nxuDtwo8q7BMuyYmLK8zcqnMJHqFbv4eRedChNnGNJTaP1vTBnacFBVwX3ZhAmYuaTTSzQXgRsjsa15g5",
  "key18": "22J2wDJyF5rkry7aqdVfCdAhPVZRRnfMBgNwQzjh4Qu53cpwaxbv5XNPdCMVZGg4iBYHeQKHjmac4pHj1UESMW2Y",
  "key19": "22C9uGvcgcpVZRESsUTV54PoZAW4ijmTZo89F6J23bYBapKarnzta511fRDnK5qLpUVRYWh4FeJab5EzzXPz9NbP",
  "key20": "3abhqZWgDeP6AUSnEsEVfPyEFff8KUpdhpsmFPVsUS7fBNdtcFyCBvCoZnU9weJVgKzL8iPs8kAQXhBBfFGqbcXa",
  "key21": "4AYi2KTnn6sAvFfkgAWfJAkyZ5JN8kzX5u14snxvxRTJeC3ATqDzA6dPa3dX1psgBKS19kn2DBxDAi6XhY6SgGfq",
  "key22": "3NdjtFYfebn38bWCP5zjgVSZhb1uN5J2A3V9Tpu5ppCvmxDxjHTBHYnLTTaUSjbVSnb1iJu5QhfzKDvy8DAXtrL2",
  "key23": "3y3KYPUNpkFFNARsUJmk6RsnfwX8DtaXimbowGHvLsZuUv3r5YB72WfHKYxDZqhLpUQ3E7PzX6xpXukxjB6xPP3n",
  "key24": "3JEwa1StFaMX5f7zUSQ887Ly2yaLuAXRw4mihC6q2vwCufMtPjvhSc2DFMyvgG7gXd5QDLMpEbpWxMbC3nziC7dX",
  "key25": "27VcyHdHEPGBYmT8KPu3LoL5uhqBJRn83xqDUAx4X7mxApS7MJ1LzEAAVGDaqGT4dtUnJq8urT3uB5bN6yXxbb2X",
  "key26": "4d9hiP9YgnbDuJtR8FwQGgB6LnaLUfpDcof9HVoMzfjyBnJAGcWMP5V2tGXD8X9uBDpJxYpQhjKiadQNar9fm1CH",
  "key27": "G3xKtqjTyVqGUh6A2e9cGLsFUahmbojkuFHcqK44VK8VtpzfsjpSRu6SSxdoyv4iDUeENeqr8mHpHJTb5acyEQu",
  "key28": "497rcYus9DXLZoaLZ49NyD4RtkmdZfkzoVJhAfePXD3uJmWVVR2Wvv7oWKVSzsxTiaSpBg5TnjUnbaZU2cnVancK",
  "key29": "5LbpF4Z5Hbrk96pzH9CNuiqAY1CvGCi9V4Ly4FFjX7KqvTgEURiYBiqcS8sCiMeL7iCsVw3XNtcQk697u49yQ6Bk",
  "key30": "64HSMQZA3gRCwj7JquFETkbKoCyDHjJ7gfcA6A8W8ra4mysErDtZN7dzNrXBLY55CxbyWbuHcL649vgDVHU3XsE8",
  "key31": "21RxVzQ1Q1Sc9HxNdV1ZDNLTsG2E68174fwV46Qc1E8MCZsCxuB9HF7gag7GFAaEiu1FjHzia6TySvEVC8zXZGEe",
  "key32": "CMMXSHFxpLY83UFEpksFN98utA4LLWawsxvE4ARzpm8E5RBEAHyVHULDQWLPWaHNHUMLZoBZ5PfUQzF2Lm9vMj3",
  "key33": "56hhsG5swroFD7HSzjjsPi6BXikGo6XbWSPHdWNPvrfN3xASUBrMgdZHoPEvgUF4PqNUZWLJBHPEQjyWBUcyTTzg",
  "key34": "4xisEWayHeMmcpjpDRP1c8D2A4yC2F493Qp1AZSYLqVGA5tfwgUAbMNsGUH512BypmKHBgZDo9fNNtCVappiU8Ez",
  "key35": "bQtdZAH7hUYqVkxfdG3e8ja325JKx5EmbgBHTVJzcWinYVdgJ5FCeEUsCAFF8fnK2wZv8wcFiMuoykTdVVuzmcN",
  "key36": "3Xd5LUCD9h6t1inyXUTaLJwp5mXNkpMQqHtSgNAgfhpvLsh7uLgxzZHBbYncdwMkXmgyNBLMSAmnJsbH14zsa9KC",
  "key37": "4AfrXFkz68cHZuFJJhdFh39ckZ8MT11Q4WSXEsX8xMxmL3pZMJygb8rm4zrPNCi3BByZV7C7hRwbZtv4go1VGSjz",
  "key38": "2bEoBHFAjo4HhbRX58ZK22ESqaKCc3KnsWUkhxthRnbijmET1nkTwzfrqn4YaSNMSjLF2Ly5gDQ2uyFdpW6VUtrD",
  "key39": "3vLYZxKnFEv2sq9a9cgP3fzXhKGQi5JmVUR279Y4vQZEHEeQ9JMPmdFBRDuGjK6bo3Sd3F27KrDof6D4nuYjcYuL"
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
