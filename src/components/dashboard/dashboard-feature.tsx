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
    "GoeSj9d4WEaGSUcpQM8f73Npzz4qEgsEwM3hnPmg9x1YJvmxJTCF8gJ897fS1S8pK94wgFXWWX1GpDiZ3aVRqGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tV2yjMiX7FqQnokPSBb8XqMXKBGhMQfZRGcyEBjiaG2YSWXHYS3N6SzqWExsbPExmF6mt7QQrPhaAd1smNBjPEW",
  "key1": "4ZLKKunyAVdzKZutvsDW6rFVFc799ZkVMiEXgiftTcxPDLimqnVf8vfv5x3ns6KKQLwuqEVSRjAtt81LouzW9wRE",
  "key2": "52VAdetJtvsocw2WDaTtaNtAnCz31dN1us8p4c2VZNppmUxSAfDfahRTCbtmhWQDWjYJgNSX4bCuSKDVz7ZgsgRF",
  "key3": "26sJPQS4o56wYwVEg2jQMEihWYM4SKpdoJk6jwRxVKFSsPDyFM7nJtCsDbDPVxMLTzwwEMWdn78sskUa1rm3Fej3",
  "key4": "ui9ZNv2ZFkW3pwQGT32oR94jsHTbcvSguf41BkvaCEKqaoX6xrp44sgrJWjUNvQeW1oiUNJD3uHkCCPKkSyTKct",
  "key5": "5MEdKHjcPYskneLDD7pGT9dvAGME5ZrHTYbxoBejpkBShueBgZDc95veW9xMgq9s8zYvokCg87AxGLBxmTLvFBLd",
  "key6": "3cSr1eKYVVDU1LtgDZ9DMuNkDASnYxt2uV7Y8szW7mqkbTiJKJigvWk5bxJ46xV5JRrBmtL3PjByYE7mzFtsLB7f",
  "key7": "3eHmc1AQCNnwKrWri2EMtrndtn2ALFVzJHjrhcGySLWg5nVrVmcveWiaBNBPHMLUCzxaPSMg3DRsxFcjfwDswPkF",
  "key8": "5zCv5gbNgCC6igoehRuxEy5PYWWvi68JqUWJCxxnVD7oDm4bNF6UjRyK4MBPGfUqTnN82AhLQveApzgjtqpphvht",
  "key9": "3yMvQqhYAFLMFCkjvKkuJrtzQpHfhp4UsuMavTMZ2ogssbwk83Jy2q7mJ4khH1ewpygMFEa9NiqMeRjncwPYZvKA",
  "key10": "2HMJ5tj3h2q7EDCk4TENLKaN6wsEJUBPpWjfb7d5YUT6kqanfqCMR9JFSxVGcVTJ5hKYrUyx6dzWYCZyu2V3RoqW",
  "key11": "Wg8veMwyruqKtEV8tzpXjJfKgueszxUxyhjBdBVmCZqT73otC66SAqaz57AoEH3M3o1jpPQypuJb54Miwokmh5x",
  "key12": "4NqbjoVzpF2KB75CxFEJYZcV7yxpXetpneMziMuw6V5iS2n8Ho8DfzwVLs6W2PDeCrx1s8fLzsgtf6EoLjApH8rk",
  "key13": "4eTrYdLQt2fqT1HTxsRiwBNbByg216FUP4avsAmuRdkjW7YmBQ15XhXEDRYerbyuxC7ADbMxdpVFGXKJGpUsVPYo",
  "key14": "2UZaPqr9RhVYczS5rRTuZ8CsYKtp6nDDxKzJTAENvpnLbbVVTT2VFEfuRpYGT9fyDkeU4RJnMvCUD4iXEgz7XZ1s",
  "key15": "5LcUtMpnb9YHkt19ZbGfpjAFG8RPWRsb8q79pEUSg2bHHhC5NTGjJoPDTwKxbLEV3WqHm7wFtb2VHqMtdBpR2FFF",
  "key16": "Xr6juMjMwSeVXJx7xXUY47e2gkzFAqQPvBW1tVJ7jCUF6jfyPCsxXKeQiZxQ3hFsJ3YzqUsBZ3tqeh6MmhX4ipe",
  "key17": "4jdcVkYYTmLKuRqQor3Bs37uxgT8enmL83WJqiyE6MajHUkcTnMbn54wTudkVMABLSqRHqWZxg41WLSgAvm85V7M",
  "key18": "3cGh63ErdpW3qUPGEsWXPWGceqHTuUzNVcn1cwgYirutWWFbvVYfRb8hStWPSc5tCB2yHdL9e3x89EwkGWsJu5fm",
  "key19": "4RtZ6Kxjj9cVSYxXL9LFKwHaPPDwdw9f6M9c6cjQ3fPiyGGKBbPjESLABAdNGwitnBw3KwUHKoQ9y96jKaSn32dK",
  "key20": "4FkUgKih3HMseNHZfDf2zbG6j2sJnCYqL67sE6fBNj2CPYDLQiEvuyx5e5sf5QnqfLfkag7uBtVZpRPcnR1DMxNe",
  "key21": "6773Wv4aYd8kNA85EakwoW27UzcYivsWehdK1nWfttzNpzEBS7spBXdSrp2Qid7xcKWayRh8QsAMcKky1K8TT9NM",
  "key22": "3Dc5Vf2R81sbkATJp18s52jb6CQV1sHoSzvAHnAoCbmyKh7y5JJxDJjoRacVqH5T3P9TRUnw2HMAjADNyhzoin2p",
  "key23": "4UpBxDJmrXPq6u3gwPcBNAgJ58SkXx62iBbpm7tZqMJXB8fG1zk5qiSrhxwXtPBD7vq5KaVNctmd79VotyWxNsoB",
  "key24": "df69MjvKg1jomGRCEadqsaThE5Snw85wmfLFhYVXZfTCHQcZ7hqpJUT1vJrMXLJzhfZgFYrWrnuceZfdp7BBkGy",
  "key25": "3GUFRadUxjBNtdxGKUXkSTnbivF27UZVQZMth778qD7xUBrPN7AHXohsZXFNFTB1HCaX9n2FviDDtjqZ8AMK9rHB",
  "key26": "2WdJDaXVgGmkQ3wrVT2PJnKjWXEGBhZrGuZhKkvt558XqyLYUq2AKZBP2KFx6So4pRzBUAz7qvuCfzcGXiBPW3cP",
  "key27": "ey5oJWoPEsLKxAMs3w2pEYYvJfXycqjYTbXrfGnsD9PZ27EY7XtQMokcPxbwEPaL8MWr9wKn4SnKwjdaZ6wkMJA",
  "key28": "uVS69xftxjHmqLiffTD9k9KRnQ6uJoCb96px3DkkySGgEeYjAv1iEH6Zuj4eDq9Xm3NhitzCdRZhpwiNYNbZj1f",
  "key29": "2eU3ABteUnnC5dPa9r8X4FGtDui3y3NTG2tjuZfcDZ5JKdzoq87WJyAzMhPdQkYVxgrmGR7ejeUviMLscafiiNik",
  "key30": "5CQtEH599uoP3wHoG6vRv24yqR7saf7KoZ6aSUFGhP6awA31pLXgEaNEfWByEkSHbb1Pc9h12fkSGAWwNP5dFNSB",
  "key31": "34KG7mBYaiCy9GasdVyyLyiJBdppe9W6AFjiBgxiPHzUgjw81XJZ7RHaBCFWzqVoDyEWxcASqJCVrfUsS2QKshLL",
  "key32": "5cFE418Ma2cYMJp1X7UxMprsFWNbKhm8mfAfTUhVRnCA4fJzwAWUJJvL1QfE1gVBGQQEH7wsSUTeC83SUTEx1MP6",
  "key33": "5HzrEkv7TQtSrddrRXqVEKEcJ1BLhjmbxqRAgzuhzRar3SR1ZY1LeR1om911iDFf6CWX3bLCx14d3x7gy3531vNM",
  "key34": "5gGB7c3gJWEzAPfb8aNLbWBFd3bPwLQFHjFsh16DcXfNWgnoZ4CLRUmjW6cNWeYz5PntLvVHmb2wBUpccfYn1zm8",
  "key35": "3YC1AL1FKBnmRxzXWUmZebj7WVdpHcFNyYJg5dxfq5GqERD3EoE4UTg4rhwx1RMRx1Z2uR9D3VvyXcKgUxnu9r3Q",
  "key36": "ceaFvx6kS7pN9g7duVVtX6dAkpr6L7peCcHxxeoLyPh7BsUDN99DDSs6PFfmXDoV5UaRJySAdAV2JMEi2nmyDWu",
  "key37": "4eHUFjpFuxssAr5sFLRyVJebHUBQxm6uQk29m3h1ZNGr1t5NvyDi49H3yAMvJ7kAzKr1y5G9VtvwYBdohW8aBDah",
  "key38": "2amiUQUMTfcPChLmf3twKq6Qh2djcjpg5SqoYucHphUNiFWGzHtLmL6gVFSpq6rUbm8a8RNx1Z41oT9FgqxiEVkM",
  "key39": "2Fc8LKTyBNKB5jeoFiiDsdezwnocZCjPapxPADvo69XKNC3Lo1xu6YFM9GordptwfAshytM5rbwHvVG24NEZ2p51",
  "key40": "3XLXeuCx7dcGFVpU8LbhwvRLQX8g7PEiHPzdZzfQeBHv85W48RV7fJAv2ET2jJWusdgyY5UPbX6J43dJHe4YBo6v",
  "key41": "P3ZuugDHmwW4iQkMZrx4XXYa5xrNYaZKuJBpTCRwPmhof6zeEWYCdMmneQtB4gtMJ1mi1pPWu1QLqJvfjWRby3D",
  "key42": "bJKEVmgeBV9WxzcZzZRYeBXACZiXo3cZ5gripFUrPk69M7aahu97MvdzgACX93dp3F7wDzz6r1uq3UMHHxN3QLz",
  "key43": "387R5EkHzuWuxSdtBWyqACRHZs4LjhpDRB4izgvysq44CbhbmvsUSsU8m9kFkzDgBYVdruzH4YUYXwxZyHZS7s9G",
  "key44": "4hDWcJxzKtL4j9CVoCh7k84yqGRzZekL69n2xxMaKczTuJ7J24p2aNf3u1AfntH7M6RdA9TUt1GvRicx1MG7vksU",
  "key45": "5S1ykSW4RKWxEPcJAjLFTRA6hGj8PdD54rwYUDkXTcZ6VUqkxduNLPYbj4myN88kUNyx4aYc75t3QAZrGQQoVoRU",
  "key46": "5sjCrGESK7JPPyYybq9QeTnfVbExEpzZjDRYThgG7HN6L3YN92VTt5wSrUqnHtrtmiQDfmXdAuwmi1yz8yM2udy3",
  "key47": "2VpUoD69iBL2WhkRCNFLtgYHkPu3YpaqP8NDZ6bXCcnMWChpfsfmCom5JiJWyFnzW7eFBqbe4qJ2sHDXfNaHKy7P",
  "key48": "2dXiTemSMeyoFX2Ka51nAYJXeW5P4BrJsprSWsn1hFTUTF9iz4e3Y9WsV5y6v8ZyQQWv4XFEo6euW74sVpqst1MR",
  "key49": "5vQEAmkXrtxTnZBamAgitPPrYWu4Xz88taTNR3SMfCjJrjhboUf94p5c3mtEEUMPQj3gzVSZSFDoKVFddkkNLPKH"
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
