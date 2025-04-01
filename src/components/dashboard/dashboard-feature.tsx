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
    "5TuKcnRsUDE1gdPoyDBBR3Zsb3hERtT7EnJoFtaPF8VsVpP3La4br9z6qxvYbrsQczv59TgRcdLdqk6u3zn9f6ND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zZ24Rh5zxnme9UsktXeB7GnyiafMQafg94uR5bAYxSyNP3xyLuV35tsr75L2GtMkeQZ6UaZfuVtKhDMbAQcfi2E",
  "key1": "4weR2tshtPkQaconf3XEKaq6QNxa5a77UQugM25L5r7PSZ822gRcFbV9RyhUdVKFopPgeATVFPDKzNQJospxzqvx",
  "key2": "389SSwSTfNNK6tvUF9BZAq7TjsnKiRiZd2fh4HgYnJGhNh7Q9LVb9kBxT6QuDpyPdsVWxt4yVp2xGXNicjaEys6q",
  "key3": "5TgCnggPHindKzcMp177C3ZuZpAChWkbh6TMyMC8y1FNmDQf6m6qCJTK2mQpujME38va2bLpKb51hoJJxd19755P",
  "key4": "4Ta2C9M4wQBTiFn7bwpC1B7ir8mGApqSdQaNFqVbrpNdF9fEr1P65Ak5BEewmpYkSo9mg7m4p1twcspkT6hkYh8C",
  "key5": "4eLp7gWQYc1ZvozqAr9p1QUhxSrjYPMFdCJaLemFWwJZwkTyxA6sLxj45dWyg5Hfv3A8ctWnCLxk8cjrpaGJCHFQ",
  "key6": "42nN2hB54Bd3bJdChbb6Dmgkke2ezL5nQGb74ypKbPcPrZSQxghSdryJXNLaL2eNCMnTCfZi6j3Ao1xHcmeX54cx",
  "key7": "5p8S9ZuQZk7HhmP7a9ABieT9cj7FyuYTNmK4Zu547SUPzH9u2z3t7sYMbFHs5TwfzaXCaU89ETzVa4XX9xHMcQS2",
  "key8": "5Gsdzffdb8wUMGK6DRMf5LBTSwCZBWtGEcutDFYrk7DxsinGVD1ff2toqseq1Jraspsby8R88hNec4VpvzgVJc4X",
  "key9": "44uRYq5DcFvLzLJTNPmxMKWticcY9CtrEMTF74fj1iDri5Xf5WpMqHgAp2aT772xn3BJjbdcyzU7oedkBYvCAtHs",
  "key10": "5TAS6CJEHe6U4ehL3iVQuUZD5e1kgcpUBjbaukDCi4GC4eBPddgqS4jowiQ4T2HazXieYwn9SCLdtyoRwCzNG7at",
  "key11": "3tPiso2Bekot5w8i2qwHye2PNtpmbBCEdSQPoZe9y1ZWkReH31jtByETLFwF3MZSCmCeVyXL7Urcg2vXzWHpdfix",
  "key12": "4gFgDWn1LEso9eLBeXcy8KHFGDD8vpchX165YSAMuDxLyyZg3eFbHez17SNYf65QPn8V7C6JFxidU1m93rxddAcv",
  "key13": "3MV3V5GqVR7pVWLepkYiPJmFrTwVK1cNdgoKbqkvQ3ooEW7ydCasawmAa3HS2ZnjBqe8wumJYv3x55sRgfsehypT",
  "key14": "qvbXNeRcc2XmeDicrGHt23nPjFCT3JLdUgHZiSbLcAMcUtt1jjGzHMp6cU9NYNinq2QLBRBJAJ6r7s2eqAZKPZo",
  "key15": "29VXSZ3G2kzGe5tuUsoFbeJadQGNND3thQtBboQ2TcZ7yLzB1WKvPnBhwkLMDv2AJnXR226q83QzGum5raoTR3Jp",
  "key16": "4mT4Qm32WjreMfNgj7B9gDUqcg977MTA29DjUipPFMnUy7PFZFYWUtcK1iBekTi8baCWUNXKSBGPkg2Hu3WGaqv1",
  "key17": "4tWFcDQwLymiMVtufmBG1juP4ya2Ai6hDfiobKahSSUqVxDHUcteGdavABgdbHkF9puyh1hbmJAzpWdvgMt2Ha3y",
  "key18": "3VERgaeu6FaoKhD9VdgWr3pWQoM4mgdcW6XhCNmwy2CYJuT6hrmfXqJPvUY7MEkdqvpeKD9qp9zyawH67tvsn31R",
  "key19": "2kJwsWnRYh5xNekZ2b2xxQGii1ZkhYY7iS25RWVoedkLGt6NEwgZqkUCCNJW86j6xj8bxreu2CfcAx3dgW9GmSjW",
  "key20": "4MWaSsfT96W7g6K3aaR5Jo7hehZE5oddvRnyLxKsLZdS9M1PVFsc1iFB3m2SRi5biKY9zsUnJftxALQQMQANNzHz",
  "key21": "3dBwtMCfgDp7TN2vi2Nkdo1L1TyE2juoiCJ9Tm3ELkdVygiAuQs7J4r3HxZ2S4xEZ14R5MjGux9T2fGWCr36kzec",
  "key22": "3gpMvcpGLZeM4GyPv6TqBXvsEgjVNqsWQZ9S21XwNHikwwg4WbK4aoMgGqXx67H2rFQcythnU4V1GiGQDH3rkWEY",
  "key23": "4yincEaBTF4xf4sENkaEUa9w5Sfp5kz5AG4tqRGhkniCZmhn6aiq7oPUkgzpQHG529eTYdkLbVkyUPTAtV6HYp4o",
  "key24": "2dnbs9x5dysjRUEaQMLVJemnBi1qUTsYSFhAgvsefzdDDWas4yqqrhyVr7wdCghnRNuSMsBuFRNU8mGws3J2Rnke",
  "key25": "22uB5xbzQu2NRHh7YPJgXDRzT3jvT4WfEc1UhDHJEaWX13N27gqyeqJGiLsjsvD7bjp6JGg4tL9mrKdxwx6bTUVg",
  "key26": "4EqNusJTdKofZL63GjJFcnYvh9KmtgmMhuuAAbwSxCTCWmrxbneXY3GEER9dhm6MHJ7R3UxvCSsPF2BtWQ4CZx1E",
  "key27": "3eJPskvVNTcGcfeyQhFVsMUSyABg2tmYY2uQaHJh98QuHshn729GTj6uaFiZL2E6G9HiXCfYTH2ViaSnchDzMhNi",
  "key28": "4M2qP2qrvukBe4fV43ZahE4SPgF2sz2yzHogfBUm2wVdmg4JxWtjzCSXER5jFAtgekgwq8fdEkcVdHB1rJk8JhEf"
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
