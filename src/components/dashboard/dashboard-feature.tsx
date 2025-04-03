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
    "4VbRZRJDpyyUG3waAMhqqn68fvHXq9wHoX646swmDfHE7wM88j7c7ki3ASh8n9koXvDqvdPV2vWieehGpJS16yuZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ED7pmSHbuoqq21da3QAk4fqapEfoeTnCsMZQWZSbmLffkaDy3yhcpzoj1Rr2Uk8xhngMRvmXPr3288HJKfxLDF4",
  "key1": "5d7FD3Lc1E6T5aUo9DaHGBCs6Ei5hFeNkJj8X1nzm7c4JyPYD8zvPPNpfD7SwYXs72guGax1gcBVpfncUuxGvrun",
  "key2": "2JZ3SAyr45sCgZWFen1fVPG7wjSsyBc9khwAi8U4jGaE554pRtKtiMERXuxanMsiLEVgytchhuWgsmta6VrDyZxw",
  "key3": "5pLo3FDK5gEZjMfii65zznW63bkEX3GYq6Y3B51mMZ6tkUmxWUAXUe1kc92tJieD66tQYUiBVTeSKMPcaDEurDWk",
  "key4": "2Uu4RhWD9XBdahXAusaGZjhezCGyhjuH2vRavxfzASuQZL6dSaJDH5PTBNJdwo7HHPsR8Jz2Z5VkCKZC1yrk2qmS",
  "key5": "2t69JqBRa2KYmKy1QQ352pHDHbQNZjSyPQjTnMwr3tNVuAk6Ftsb2VcGxmu8qRgxZtd7G2FNZGR2B4XiKongH3jV",
  "key6": "JdY4Dk2PypjqdydTjUnmFT41H52AGucXkBSVvihMVud95j4H89bwzeokDpLHgYx5Gro2i3YqjejY3qEdbXg3wao",
  "key7": "1mt1HXfDmHf2pPfjveUxYinN7K3Z3z4uskyY1jBPeHrgcEFaMYDJFpbJdUrzJB6r2pZkS1MFWntQb579GX33eMa",
  "key8": "2QnMH1f2psarwoTwYCYAk1PrThB5mCSLkCnuvG97HuaZF8pdFPf3dKuys5JBJE2nj2hxVJYgFjYyppn4E6NtNPc3",
  "key9": "5v9PQuNxkKYN7EikKi1m1ssdEJLHwqK9oeZhqDoR1YXSWZstGTJvFCDVzyYnDU1XjvWkCFJ4yp1Xas6jWQjvumST",
  "key10": "4n5qyvpHo5dZkgaQr19GXRoe4B4jaRUjX52c8Td1CNMUqx7pidqWtpDYGVyBg6QJvULqkJ7eqUrxBYyNoJT2Ap3d",
  "key11": "4kV6nRkXQfizWiJTaGXpB2vbo9XqEUefxtZSKV2e3A1zrHUA9acUB4Ksc8bnBKiY6p9jVLahpuzEktJRGSe5sAox",
  "key12": "2ryHgguAnFhQdmXFGQ9KZc4HDGmZQiGgJ8oXayu1M9N3DbY927Az6eJ9jzeWxEQBFwrJYwwWmcLyCYzT94tGm3Wo",
  "key13": "2g5eiJfQ5ZZwqBntkxUhGGbYzxv8PMopMzRtmQN1z2A5ikcvSmDFfMSgXbREtRBGHKMdktPS6WPK2D58Q1SKkuUC",
  "key14": "2vziUnzJCV9aDWgNMHrwvfn18yASh98hM54inP5VNraUGNKsZRg291pMfurdoJDKdCTT6rpefB36cD7AYLMvZ1Tv",
  "key15": "3nkyCHQpo6iTAPusRT7zTF11qzzcGVNHGcLcVPomRaLMLDENVjQTz53rsB4avTjfETP9FQesNnBEF93BumuVXzWJ",
  "key16": "2oGQRc8hNEPQ4fPLAuirAC7NYGqRNKhUqfBFdCA2MHbWqTNPTNnjyx6xDXmWrDAdZYn3zxKDJqBb5bsLmzGeTWJ5",
  "key17": "4pKG1axUP8AScSpKoSwXv5xAae4o1LdUAFcteibFkL3GdWpJwxEaMsQAgACdbsNXMFiHgw8eeTh7WzNm1JcdMV79",
  "key18": "4efYjbTto8MeNyioMS8eiVKgorWJoa8n8cCGWu7KGTgeZnuw7VX9Qm8Y28avgxpW9hLjcAuPURgvgrjRyMfWgnwd",
  "key19": "4hVgxS6c6GZKKhiSq7ncwjXYfu8Pzqqu1AEnZsG5Gd1cbEeydUzr8HMXxn42oeJDwWQompAFGP72jkuLBja8pUdR",
  "key20": "32ao1oWVe6u3KUiqat2jFXLCrv5XvH6BHWEPp7hevffpNCSzn3amv7a9rA5fEqLkfTAWzJEioqMmuPTK6J9f4mJj",
  "key21": "3VJyCpaUyW7JYpf61MNKv94WWW4QVwWN5uz7EvLfxAYejPzrEYji9dniNqYyarcyxJ4orbLuFDrHpjcCshG11N6u",
  "key22": "5JBdP4joHv6e8qcDBuRgdmMJkv995Mt2h8kqVzh33Db6Bow3ZEHMty6SGAZpWKUmE4XutwBresbCQsGyTJtEUp1",
  "key23": "41e5PS4jNYbxhCE6AbKgeCNADqhX66qZ4g5EozZfQMRwCEgwNBneUyf3bDSCQGJh7rBscERsRz1oJHZ8ELes6u7T",
  "key24": "4MG1bgyqkHMn6cEU6JammMo914XEEzJC54VqoW7YBefxVF6DgasAMD9GwX8AndpJj6mMpch1vTsBzeF5pbA4S5oZ",
  "key25": "3RagPXkER5w9PzEf6VgeRPB8rKat46rPLxYvkP3Y5hbWaz3X8wc495AdvxymzXcrxxErgsvBvZaLWNAMVezcNbxr",
  "key26": "4DmsPCws6TpFyeMvL8VPQhhYyLfUEDExLXB3hUKYuPTK224gM5yWewhEa2aFtUBjP7ZJHaD8sHPGSE4eHLk3V6sg",
  "key27": "2BkMbnnXqkWVMdnr3gMHRFRiEDzeYnDWTQvyv9T6bR6iDRLm6eaBD9UkYiJ7j9rtGRHXj26qkBUwLNsB1KcA7kSE",
  "key28": "mydchi3bnDtj7MuDiVouTMG5ZyMs5t33br2v9C1BR3LuBNptWpLjHRyVoyMAKPJ36WGUCsnpZfPLtGxJR1XjAgW",
  "key29": "5i3Q2ddeAGF5XJLFwjft82yLGZL3GZ3JCYcGYJGLRQpnAb5wSgnq1L2L1LNnf8zxD8HFeF46kyuL9Mi62wTdXJCQ",
  "key30": "4ALkzrQawDeKSHUrFXB3818wCarzeVop4XneHDprmBTFKvfYLJwVDZ3Kcy2bxMhFqbfcFaE4iB3d3HDNR7qAcCoU",
  "key31": "65pCBmTUJL1gxh8hrBVinEVB1CJo2bsStfr2fxhTUn62L5rM5N8JZLYBjTNBR7wMBdL4dSkG9goYJBgasyMdbUf4",
  "key32": "AM614su6L3zqFX7nPHGL9SCpUfT2RsELhzvfuHpuK155po1k285DsDnNYCshtm4K5EnhFvhkrfTfKePobejn7WW",
  "key33": "3ZNxwk9F9PmVUkXmR7dnQrGFWiWuGvTqX965bAvKW3QfYFzGUscyUWo2vVExqX17uSymbJHQ5g6YupHeJzAC4jCk",
  "key34": "5Nt2K9sqBfgiFFkzCGmD3no1ZrWPDLhjprP1HNuw5G6m2fK7vyjLQVrupWjQNRwmzS93G3LBxiihawp8EENXRGsN",
  "key35": "4w6CGcuKg3PcsfKFbyWsESDsjBEsssCN4Q3sEBXp6T9b3AyTScG9qj1eZojaGYRPtE1DJMaZDT3cFbCXP4XqVP5p",
  "key36": "4Y1Xk5u6gGJ1xzgw3Up2apbBMfMCsGG2mTj1Qbjmq55tJcRfhScixVP4btXKQnChEk1qVT63t5oL9VH9nRe1rcVY",
  "key37": "4XwUtfgYd3fh2AfbiFmMWQxApqnGNTit3gx2eUsXBvGMPXA9oHeuo3X7W1nT1upo1MzRxVuDq3GUjxpcVbtoz6ch",
  "key38": "2k55sA5JcZdvUNrihfHEcX6khQ2J58tMeqSrhLtsq1UFN3E3rkvk9qsnN29v1uZiWFxx4J7DLGnLAWsKPjEy4t92",
  "key39": "2V4Aiy9U7CNuSn2QQjxRGrsMMNe7Ao3Ls2upt8631PRw6rNwxB73bdPY68J8TxcsuT5365qsn4mQohmtpbWpkhMc",
  "key40": "SsiW9VKJsYwgeq5hJCjNbJR5ECzR1EPVjLvE64kQFWJ4DsCU3GEsesS5FVRVdaroQywVsRqTTVAZTbJGPvtit5F",
  "key41": "5sM1PJx48HAe1dt7Fk4qU6UdoDTDTBndfhBnFQsnowQkhuQrxEULyDC96MTj72dhh7srcEJ56LSj5yLUrL6K3AnB",
  "key42": "4ccMDhhZM739krbtXgguxpNDEtyWEoRftpTojZZw9Q76UoS3WzpV2owtbLxcm22RAihBn4TVpDtKiD91uTxuWUYU",
  "key43": "2Vh8y5bPPSrcQu3srC5tdGAyRyVqKiJXXMRDUwFLFe194PwnQ9bvt1wLQU9ZBjNUUacqkx1AkdrFDhgcjNStTgm",
  "key44": "5kjn3U5zA8mFPoXVuvUQaqtNgPmgd8Tph9Cfo96osxAYPrHDnBsybSMSLZbYTXHAQcHijfh4hUpBuCKYvXmiqtKR",
  "key45": "4tAvkoyBxjd2odpvWG8tJ4KufVQxHdjCbxgEK7NvvXNWEpXxrjMh4dX93yHVRACje4B7Fh9U8o9tgExkvQ3yhJWd",
  "key46": "21XJ5qXe4xFi6vTrUynmG2J8bA6QodsgbiVMKykyojnfkgYB8G5gN5aZK5oDpCLJ9uumBNiUCefuxzzN7FAMUVsR",
  "key47": "5pfbEEdxVvXCecczNRCdue3tTBvmMFMsJgMBC5dSgAk84A9wPPcrCx4zzL5EkuvM665McRSQfR5KZ6fGZJKhW4Ky",
  "key48": "63MmiC48us2zX5JCxKdyUdoNZTFsEYWbSV96PijxhjXGwzMuZNwDMKdErQfTUES7B52u2Mrw778PYNhwiXBj9WXg"
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
