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
    "3NnRNCqfqD4QehkxhSPq8ERrj9hatLaZqfJA7mGkLoRTqDSsTzx1yorjdmVc8m54bfPtC3jtAntY4kQDbYecxdRs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ar6uMRSyvApfD5nrBq8GTbnkcVJavtEnG7AwjDHSKXJQfdYapw4SvGTu6HP7ygqFXryQuoTee38JhuA63qh7WVj",
  "key1": "iFpvvx5sfxSgMVGZJiCNgHCYW14GMNY7SVteCYDhk4qx1ZskwkGWezLkigLnKoDeVADYkJf88qvMjc4nTk15X8t",
  "key2": "5rZdwdHaHaXrmhAXqCtYmSTa4pMvKNkLkDuSYne4VeXiTPXQUPqBdnRVpT934kLvVmvrApw6m3Q4VrmZahtzZaao",
  "key3": "5qJEe12fWdUPBbgsM6fnfjAjHDZtzfTA1xk3sNeBwrFzgXHuYfniza2psViaMcU2RugQVoEJVc7d4KVte3HBWUbb",
  "key4": "5uuohvYmbN4Nv2BF74ivji7i6a2e3DcVpFrPrwD4DNRZ2Wgi4jvezASVpxZWrF66f3dHjfGJFABgW5QLgTvtrx4t",
  "key5": "4dza7NchMBMtBug6C9NLn1XuH5T3zeAYtScMgGg7JSTKUmoVeYQyDAJdem3p3XRLQtUSZr7kkRjZL1Uh6txZuumd",
  "key6": "upwRpS7G7HoAHd9ibP9Yh2MJSdE3iBkCojCPzBE6HMhHzE5HmZUf5x1ri2ikzq1aMH1ZkSGx6TRuxrHQM91qMJZ",
  "key7": "VD11AvERP71x4feMjB5KtcdztTs9XV45aSmGi6yVp9cetAsymTKEiGUn5uQNuXcfguY5kpJoEN85pSuz7ZqBsSV",
  "key8": "5csJ2Eh5eDbfnQaTFF3jLutt5ayvz17Dbf7urEutTxSmEtx3MJd5pMnKPFzdwP8PKmzePJ6YtB9M691FXer1R5xT",
  "key9": "3QubopmH4VZGePMCe4MBfTWugF5DsZS7GScBAYrwkLBr5RLSGDCvTdTaa8xkCtzx1SyDmaJQvzQBMWNGVpDLuLFr",
  "key10": "2hj5wjTR2U4qAH2fB8cLARurF9czAo3weKSnLkaeoGqMhgqY6jc1eEG8sXxBggkSYDP94eVKCCVMuTo8s1LUoyaL",
  "key11": "ZnjCReSbNNEgBYXYrHyUfYE5AZL6EWrUiaaDu2Ygi1A9NvVSybxxPzXsUi2JnTknQzpEcCkAJXKxRdEEErng6VR",
  "key12": "5hSAJZZB5PkSdaLuksU3CWUHWsKXTsvwu4xxwngJtxdHReRzhR6WcYmusMKAn63tneYjEXAAsKAgeEuPqZPCKzQ5",
  "key13": "2uuELUB2iQ7275ZvEiAfRznzushuW5Vo1CriqVFp7wu15JC5Cwezkn5sVgjVtq69FMjtMMHD65XiMkk9CDwiqKiH",
  "key14": "pT1WeQHnwyZdkm3NxSzj4JuMRJWwwVJqN7oZyV6jus8awycBeB6yQixVqP51oMjndPWkpmqg9Jxs7BHTvg3askt",
  "key15": "4TvWJ1vEJkJv9AndDN76BWVt9gRd14SGtkpcj8K3C94M2EG9eVQt8y5wPr1dfk42BdTQGzVDtWeKHxH4akXypM6i",
  "key16": "4QWPLcwb9dUKYBo9aHwBX4154W6cHz1AMu8mB1LURB6uCcz2YtbN2X5zLJSiT4NUiCT84PVRyvaYwuKhwvnopus8",
  "key17": "21PfFoM76YAeaycHbDET5ToUJHqD1QnnPMP4zc1gU3MoQcDQFpqMfoE2aGut4JsaF6NcevXUMSADn1kA1jAsemw8",
  "key18": "4PwZuy7u4zXmyJXkxJ8Zui7EJdLXzGQkkGTjcKx6C7w4HAgFbzzf57MwmTrsj7Cq21aS226w2aDHiwhpQt1TM4cz",
  "key19": "265bKysZfDRyeZQnTibBWxRpCcoS35MMDzfw81gDc6E3Kwz87WVDq2cjU34xjroAC9NtakRDMqtfqKEqwRggkUaA",
  "key20": "5HXQqPPEjw9z7kYQv4a1JZ9q2CJB6YLCd368Bfk5arKXRFauDw6tpU9cn4D8cNv3gMZkWGZkMciSUbbi9SE1tuEp",
  "key21": "3ekgAb3guMExtxKNXvr23SradpzbB74a9uzKrUjvmRLvJzVRPaAwSDoUPZAghLsLtGHTWvfYf4EVVoYW61rTopue",
  "key22": "4FR46rWhmfHSEtmtU57dcK84aVuQ7kaArnJDuptay9g5ykdbmDviE234j4i3VtMVCVrJjCBxDaVZN28kdm4Q55MP",
  "key23": "Q4fH9fsxpfvGQh8yUQYcwQ3uSpfERvyrDk9ULB3uGqQJLuCtTFLBbMf4rMo4DePiKiY2qnzYuuKCGLFADsbEBc4",
  "key24": "39VVVX8EoaRJgUjvBYr7mudTWP5Hb1cv7rBXpK1o3rPSPitm1ugr83tGN4zeGmgrEakKQsLNqnhTP14UMoXXyzZu",
  "key25": "51X4bMBHb4A1411zwUSme3FHc34bMG69wW3bWCHTQ2yXyUkS3BXY4uPbJVSugs4LMxeCTYCtG3bmGAJuJGyDffDV",
  "key26": "37nQGNCv34ZUnzyS27upmzLT3uoeywfumEkDSi2ixVJQgzMQ5xDCeLihCeZ6fDGZpCsu2sNPr99XgSS2UafMBNxh",
  "key27": "3txhfKg7uRuB6KwRonsnhwzocECAhCj6CouengeVoUVKYmBfXeSTKYjDtjEWtAHXw2dx6cmGytakpvzLtsGBzk3B",
  "key28": "3YcbDBynFuqjbcnDyw4ALk5avNLE6ke8KLXP1pZoxTsyScMnu7iTD35nSHfbEUzVn5bnb3R9w3Zxgi5HZai7aKqn",
  "key29": "22tAD8DVkTL3Bopv6vmWnuNERkzofzSZZxToHoH2ddCrgksh36Cm1WYSf4nWZzjdBAXPzYFwgmkKBM79pLyQ22WU",
  "key30": "4RymAxt8s6U1TcWEkhFRaJfmwufLHNwGjNb34Y3TyD1zo8dX1UFgPmi4kbEJuW9S3USBMv1nepFbJLvnVxgXVjeo",
  "key31": "ANknW1Qm5mXhqhsbjT4i7kM5GXZHLoiYJJ4RhZi3FaAFthvrWwzxj73RwYWB4AspL9ocRy3rf8gGyEnmrytdPmt",
  "key32": "5GURmTdyUFyzYBbTPJoKoSMQrsyuCacdYGNt6p6hDfN1mp9r5D9M5CYVhuz6gc1iKsJK9VyhKuWhkHwh6oEd6a5x",
  "key33": "2EEQ6aQGk2AkfA9AFqRigCaXM9hJe7Es9QZejSjLh6YiPVQzQP4WYPQzJMprHBaqPpMaWNtuc8YLCmmttXnF7JfJ",
  "key34": "2usuw7wiCeG3STbXLJvdm9ixEKJTBrtPDNm9wxr17zCQtZbbaXjCy67Wii7v8QRTJxrxGGUqshvWGixewSb3ZXV9",
  "key35": "5d6JjTYXbMt1vEbhZ5wYw8gWWw8NZTBSwrwyfXpdSGozdxvWxR9CkrxuNXx8AmyxzdbsVf5XwqhFLDwUUqjgcxT2"
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
