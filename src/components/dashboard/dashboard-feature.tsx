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
    "5qg37cdweqLd2sAzE7X7oQhfeUvo355YFNQ7AZmN7V9AbN553JKyEaUQxKQkCoAL7RXHzgmbfSDxhCH76qzXyPEA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yxN4syN3VFhoEHJ2fXkEPQBkeVz6ctZFP2xLgoSpGpZqiqD5eQsBsfj9eC15g6Rr1bqApBPsCi8x7v1pJSNfF3r",
  "key1": "2nLfCTg3Am9pMxXq3Zsy3UVztMjda2WraAEYt9GaaU6kAcSPvYWihN4BSU3FAsvJHLKpA9VgWGEgAhp66s5kgeEx",
  "key2": "VGPTnfXvMxrU275K8wXq2PmBa3zQsMaWAwCztWBsBAvzxNBE5g36qcMSAcCo5Dsv27NhQRv1fgPi2AvDtuEv3Gg",
  "key3": "292NiMzxbWUXdqAdhyKRLsyiHVeJuVisXKRH8b9b2bRNVFPhQAziV9Wq8i1tKF5YbkZDJWjvfz51UrZVVVhJL6ap",
  "key4": "GzyT2s2iHdtiVQzTYSkxYT5QR8b7QiuGk9J2eq88nvXaEi5y6oHzhvCTrcvf4L1dGcosneTFZPPccuW8dyqs8No",
  "key5": "3LbHiNSkGenwMdjkBP1saVonq6p68FcG7NdmVSkKVgkk5jxaTYJNn7JVaXbsZidQibyWG1mNDAkH8jhbKBHctE7s",
  "key6": "2MoaYdk4veg8TiQUpEBZaN2dXDge79k9p5fhLVMDUuT9pwqkanCBj3p52dHpZYfNnmU1oBRuutLchwRALgxMgxYv",
  "key7": "yVgBhsduWT23N57pMHCnsSiATjCqhMfWVSVz4X3GUAu6WxWus3tBBuaWFrnfDwqZCyE3DxMJJK4tWMjXQR2aDv5",
  "key8": "4Pw8qW7U8vaBSvuuramL2o3eVxD9WwZ418bp9X6vZCs4KWd4x6oFmARnLCjYBxofRGLdfPHq6VJvQFWrCmefid61",
  "key9": "Kxa7gda1kdx2krib3TFMv9xpr7Cbp4y5DyDdLVJYTxypmonzxA1ottExKE83qtWHRe9cKC1uUrK8vP4ofejrxyo",
  "key10": "jiNvy73EneRCbmtVAKc8sFyYgN9w78HouEcnGNWriZMjSAM3WjA94vtTMgix97VuTQEX3mNFtQq3njhwnmheCxE",
  "key11": "5S17SnvkimWLQXjHhbT34Whg2iLnbm8hgycnJSkcDn8WvDTtpPVD6hxY8sS1PR9wWtYAnT8KVeKjmoFWsgP3zDdr",
  "key12": "LEiW5KJ6KaKfsyxPpWdFweQPkYXoR9zqMG6goPavs3MBNoRkou3t8UafFzfdHpRgVY8UDNtHQCpZt7985rmdkty",
  "key13": "2Zvf7M18Uz1h3YvvxN2MjHNAiCLyQ32YC99UxqoUfeg4qDaoijNTeytAmGoGB1RgshTRLhbffffm1PcpCiwFBEdN",
  "key14": "4XdRyrgjfowjgnaQ7261C4ZvDXucahLvjWEPf6mfvbbC2oXPPwgLMGpWjUv5QwEqGpjK3Q9Y3RMtSM97Fs3LwrdJ",
  "key15": "2tvbLobSks95uiyAqkj6jMsTUiJ2BRdtKfX2Fi7jCoWQj9ytYwPG1ZNbJfPhetwnNpFdZNdjCQMekKuyoYKvyP4X",
  "key16": "2wTFzqErTycDBE6QqyJxnb4qqe6fAsqMczhMjfCJJAWyX1EsCcmisKKfpNHWYnuDRTet2wuTQUhoAXhuykzzf3LA",
  "key17": "2QYqqJfjTC1DDseXNSYhzRF8irGphtR4omtrSKqobCLCQHsVkQaPgUdzwe8fb97GFVUB5bK7XUMPzNEtMeR7EQ1",
  "key18": "4QfszDmfwWst3WRiBUSwrnyeZcw2cQALnzXAwkYSML2t9hTw964U5iTb7Xi6FmNbEYN52KBs9wAQrsCrpzhir9AH",
  "key19": "2LxK7KP29amcmyZ9FSNk8WTbbDMpQRNW4k8E4NG6V1TpNB3Eyih5KnYGNcKS9nufN2ixDBg7XoUfH2uNraJy3DpY",
  "key20": "41SoyctBUx9APERxE2uaHb3ERdgo698H8a5kZzxyjPJ69MSRys16f13Rwbtjk1crZyRHywzdmvKWiThiZRUPKCPv",
  "key21": "2PnNmR3Jk6N7dKk1tBqHNzXuMWLvqZ5rAYDCGCsXSriMrQ3A8YFghDFVjt9Cs6hnG8kFBX8eYrrYESxDQhuJyMNW",
  "key22": "2B6x1qCFtMmxDKUc4sJAxs5FkoRW1Z6fDApsBcSEaEpbpDrmSuk1De6SLuakcXqeMrE4QXXXhDvBCwvuLc515Y9t",
  "key23": "4icPnqdNTWDiGGDBE5iJDx35V1CR5qj9zPCo1tjYk3Rv5FGUSjZdquoT9b8MsD3cANU5Aw1aLm149Fw6aeCPXv2n",
  "key24": "5AnyGWAa6jXN1siV2TrnECeoXsvqtrUmo4gtg5sWLcc9Uj1yvE1xgLtmoKTnaZmHgxQbCpXkjb1SvffLjWFD4yhb",
  "key25": "4z5xkNnUa3jvWAu222buAoJiYLXbfRYdDhB1R1NwuSskPEqvm46fcfeyERKomgWokqMjrCX5PAXPAx7XGaStMHur",
  "key26": "56WwpMEPzhHJdhqZ5L5aM58ve7Ng3Wcd6RuthcCYZj81au6QEiqttxzumQ7j2aS46y8TRWvVxKvTRHVkgj6Z9YqE",
  "key27": "jjVN5F1Km2hwHFvgqt5TGWxzGMrxtoqq8Dx49bnTzacseFpTjkrY5KfjkCMF7RBmbh42KroS7Zx1CPDy51imhsz",
  "key28": "5xPmPbVg9LbA7DxVhdVc2nLAdwdGFZmsnaa8U6s1adx32tjbGeKcbXGqdrw1GbBHNmpPntyDK2D2bZPfwisSTnse",
  "key29": "5RNYtMsLJ3N1A91kYMHYQ7kVofKPwDobn7hxzXa8UMGgGnpF7CL5F8A7nRg2C4pjbpwpL1JcrPvmH1a7476JCNWB",
  "key30": "4veuKVLgkFGvo5Wzqp9SXk38n7P9H1spPowWRHyJBkQuaZUP5f9VcYMd9rWJUCpHRzXtdLDnAYJVK621fiZUJU32",
  "key31": "4WeRSWa5FC3VEZxxqAaEKxtB1WRdWfXurBwmBcXcatzPc21oHUtL8Q63HKqTCB3gQksuUp8DNxuUyLKZ7prmxQMa",
  "key32": "5483rwYVco2xJzLBPEj8mi5zsUUJKyuiHpGDqfzTsqHLh6pVfLvP9LcZw4vYWgMARaVLDPZuv6cRhVCYeXc8Qp7a",
  "key33": "BTLSaPSxzz3QW3PZ5D8yggr9qXWo1uq9EqjnVV1DoNkEHZWjDGwQi7dqy1nVDLLus59SGaoT7zQ3HXK7v1L1xeH",
  "key34": "3M4dZcx6BNeTr4fCBGgag3EwTqqnA9zZtbU7sn8C1SQh51LV4SALZtF8QqGGPLNxB85n7zpF9Lxf5GfDVmKpGTon",
  "key35": "5Kwet1eFVB3mtR7TeGvjAAHm73fuUsF3fVNsxMwft2gkGUosGESgtkRQGheywNgWniM4LC7HkpUGFgTieGMudTqu",
  "key36": "3sbCgmxuyFxkbomhavmb6urPCqdAr63KA8C8JA2Fpgj3VRZhZM7TSPNGX2TZAo5XnpxrmSAt1Jy15dbb3CSssJtC",
  "key37": "4sKZTVTXxh6V5Fzt2gofromWvU9vYdwqt5f4v1KNfHthA5AfXgzsrRpo8KR6MH7Mmt16o7ypukpJ4zbLG2iW1gUt",
  "key38": "4YpjetzsNj8QAtWEx4qtTLSk7Kgf9q1cCheYvqiiRikjUrzDZd2tC4wpsrrMGCWV13fAZVrWRu1cPR7RE52CFtiL",
  "key39": "5t7rX5VHrTgSYshxeUkfSuMZJnUvTeYPw6JMVQRp4F4AUVvgEU1g9firMdBqJa3caTGAxdMafkdNKC6X2GdgtNdP"
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
