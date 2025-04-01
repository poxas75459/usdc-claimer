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
    "5GwwqkAZhSSo4wWosV6nU3BWwNU8gcSboabAhWWCoafPxDqtSPRWJ5M4eGuKsUERe6sbGmMNDbEnep2ksy7bkCA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QwcSnHTdstjy2up1hx2bb3c9qGXavf6zLseBqVxmq67VeuiCLNrjW3fsVGsPqP6x5u9EgSNnFx3JpLUUFsWEtPD",
  "key1": "ZxT9MkwxFy8qEYX5VoF7igPSFZmY4YmCp8XHSLdupZkaQG3JBjWobHsLpcNs3ZKiPq7THZxBPqF7CpfyeQ8f2kB",
  "key2": "23yZN2NiR4Dy5cJPbUuidfkoa4CQGLwPJVVpE66pqspUyvRSem6Pki8p1dU4UvMPgTVaH4bmHm3kEu6WiXUHeRnX",
  "key3": "EhGryG86mpHmSw3ebF9xmTZVSJ7ua8FvozWfCYzA61ZDGVba7P786xLRZjvVujRVpcvP56KCRtZBAasvRZjPAbH",
  "key4": "TcA21RzK5Kyn61cuVk2hYdHsfpGpMdeHbzB9ZP1zwtu8YnGKPerBqJ7ZEPoYxq3iUM32uDkEMKWBtE5ahfdaMT8",
  "key5": "2Yp5UybCZjjjhJQ2BfgKzUgR6XeLUdvVNZ4KNGktfPastKKGpgX6sy8KDQKEq1V8z1zGUam9y4LwBAEZexfKzfqc",
  "key6": "qM9b4GXBTi9q2wYPYA5jNgNeRMXJbwNoE6w42SSdQYBCpCmDJ8Tk7XhZdHx3pJeuEhjTjzC4uCH2nrHqrKgUVtD",
  "key7": "3bYTiZzHjg5u8A7P3TLGnWKtLdwXRzk7wWfhYiZuGDq2cYmS825WxWEDRPxYkPydsmV7bJUyPuZLPj75vvd93mXz",
  "key8": "4AEt8dcgj4UViGA7ArgQcb6cbapPHPPBxDHuaQ7pVuKmcLk2uxLvLLnm9P8m1DCEsTfHDP3g5SWWYUyMAHgJBBn6",
  "key9": "2sRUjbE5t7nhHquDKynes1Td5mXQwNykK7jLnqaA1bMorDKtHMmy8TRDDw6GK5PPNocUMsfbdQF9Uumq97Cq6QXJ",
  "key10": "3SUGcUw5Ea4w4qtJg2bkGvJqfR1VgAd961VYCjUu4LgMGmPiQ3ZpsgpfBUE1drfSnN6E7NYm1rMTDLkT6eHQ8T2C",
  "key11": "3aYSEvTRR9CLBTvSiA4ZYXoJyJxqXaFXQtHdgvedkgRkZcJVvpgPSCVw1RxDAgmpK8y7BEMSdDNFrpeyPGf8J37f",
  "key12": "5UDavxLurBKnsnbQBZDXvuuEvfeyho81Ktq1q7oyKYcrGqafejGousdYDxwk8v6te1sRhBZWp5CQxW1Bqofp5beT",
  "key13": "5Dhp4Jb7jjeupf7W2FK25WKteLX2HnBQh9TK5u7A8A2ojh2EBEYZgKUQGhKYNj1RMMqntcC9WYMCWmG3LDdXMtZg",
  "key14": "4jDEXTy2Yt6NDwgaaC1TNsyc8FnEPmUVatoopRsYGjcZA6wnLXn57VdtsBPigGjyzk4qan8s7awPD7H7QVgRXneq",
  "key15": "METbtb8LRK3X9Woj775paKrJzX5Ri6Y4AwuvvZ55Th9bJ7fGv2uUeumzzQY6FGhie6fUiaQr5ZvtDZKV3gWPsBP",
  "key16": "65LpeXhGQG4v99vEhCq26EucxigankxU7RWQbSxJaM1fSBtb2Ss76dpXNSkSKAZvWDkAY2ujsSY6ETAWH8A7sR5Q",
  "key17": "L2UPJDdkjbnv5hRz4E9R3ka4n893HeGwGToQTZaWncrqdNuMVjmpBR9eeqvxLABwWjpU7jYdxJHkYaW1seWfQuU",
  "key18": "3QYFF6fnrxt1PKXfKZuEVh5byX8kT5Jr3A1vNvWD7zn1rRUA5szG5xGXgSavUNwsNnU8AkhJkWPMz3VstDD7N2J7",
  "key19": "GZzhSiTAQMu2eaGCL8ixoYQE81MJuMHrMdRmpVY698MoSFiXdxCugQP6Esum79cZmFWSZ2c1jXLxZgJi8zo5mzK",
  "key20": "5FMu1MewcdRjLgACcwTqC4eSnGzvaCemLbkQ2a2H1ZrcagRSEpp4xo4VZDMA6mzaTWN2F2WnzgRjy3P1UdFSXBEP",
  "key21": "S7hDrbvRtPom3JmABfUvcJReqqUKzRxbEXRQb2hy2J346ZryEdftsN2TcXzxQnQ5DwtQXwueMomvtNu3EQC1JEp",
  "key22": "2d6u8a27Ad56Vnwau5aYNhJh7SjEMimxH7GVnRm34MCMrgmAGaaCdgmV1DYisTHGvwW4e9bNeu2JCH6ok27zvCVT",
  "key23": "JCCtkUNuXdwdbuDAmDXLSyRWSgAFTjCRPuqE8V7y21LRJmoUGK9JpKfHUQhqzrqTzhkoyWygyB6devn7dJQuwi6",
  "key24": "WrQYvD6HK2ttNVkJ5vrVntXawMizAhE7vW8YSzEDZuj2EU9qFryiZ3TMNdQC17Na2g9hQUyq9eEvfPd1u5LGzU3",
  "key25": "2FyeMZcUoXM2zKnbi4N7aTGkm4Dbo6WLEC3onxzfVMCHo3BdW7qFTDKLo5pNioUaUUiJQL63GqQKnm7JTDdt55Mi",
  "key26": "5WdotEC57GiRAS1FHuGoU63zCq3gMSCtpPPq9nCnn8p1NRAZo8sAvzA6qhbQDxWSUQNbLXgvtbqdLWU62APAwwwZ",
  "key27": "2rKV6H1GbFtNcGXZLBroKgr4tAHrNSRWvTEKPJwBeGEntFLWQdhENi8oTKAN6amzFBuzYwFmjgSWaMSyjP9hbbpc",
  "key28": "4AaMSdQbWywxM2KSXdkjSweVxH1sZsC3J96GwkyrADeoYALgeTFAGvuEJYivbNaGJy8SZqTWQwPxQ8A8mAcaGRnp",
  "key29": "2M11ecukbtntexYfbRH8Rk7ZkB2pbJNRbMASZtf2wgUv1HiUXaHKEcFQpW5ybunz6t11jKUhPdSGJvHqdEEJF2dF",
  "key30": "2gYXCnPq6gFNv1nZ7kafPJufgtZD42g2tpEFYC4YKv5gwaq2giTTjB36XqfNGXSoDK8TpYCSw9Sf3PcNYhUCuW56",
  "key31": "CzrahgHGFjnrmxdpEbTHhjJJbamUtzbctbkATwwpcfiK8tNbcHfevPSfXCskU7oakivaL1eSzzNhr5qqbjZ3m2k",
  "key32": "5ohruBVQ6t7Fkqu4W6JEEJtwj8uvm9NurDDv3dRYURKwfrMG66vV7BcSR5kW6nhjSLp24EWcS5hj8KeJFcxRZ3wF",
  "key33": "2fr4CYtXsF8zYwN4yssY4mRoEyAxsG8DoKwNhbUiyngP7M4PUD6YmMHk9oqWPidux7u3Jm5tkRaK2vhx3zSXSwPa",
  "key34": "ev4xqiSW4DkwcUFegUKS66V8QDYHcLMboNL9mpzvdxTbsZVPquq9RxNh8nrq7RkMogbwr9FEVHhoT5Xf7r3wLzB",
  "key35": "32rsKxGFFqVKXeiFJZknMEwTovcebb3qneaqio43QSpTEbN7yswSxR7rbW8WATMmGmjtLe672rqnM4adLnPjZCiy",
  "key36": "65FsKnygQ3jkBfamFo2jd6fUSC2jGNAdiRygB3dKdcjJ2goELw5hvsNxPBjm3nRusNKBpb2P2bP98QyaAu4zFtYH",
  "key37": "3rftwdiKPHJ1bPkfuWvsWFsPKHyzagErHr4K45DssJHf83Z6SGHnxKLta68WwFdzBW6EQRpG5b5EGAqcoLoFb1Qq",
  "key38": "4ZKSN8jzSgm7c2icdEHpvePbzvdvEB57Rj8xyTsJxMrN2PNXBGPrxiENBkyBRWfahT4JX5WVdmg3PDNDN32b1Dbo"
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
