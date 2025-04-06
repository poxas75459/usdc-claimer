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
    "3ZVzL2RkraNtCJswECM1n5K1bN9nwYamLEETue45uUkVr61NbduhhxQCP7XeozVz8Dwcw8GXf3KQi8fnYPAPwY9r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DKU2px6WmX5G7niWahtp6eCvSHSiiwAx2xfkdiuF3c2yRsq6LjMoyziU4JHepTzXxWs8kDBDfdUyqihxheCrnKU",
  "key1": "TRTCbHpw2tGbUQ1Cg4EBPdjF55sH6Dog9ZWM2beuLdvDhiAYPfKDC6UXAkXdhyh7a2fLSL8coCYD5g6rSk8wUqP",
  "key2": "5qGpKKLfqVU5BLYUgGFPvVZnp1SebvXXC8XfFYSrNQyyYbH9sbqMVeRCqPdm6xhJFhRRT8SRiQtDDaz1SA5UdeBX",
  "key3": "4g729X2b9Sprk8r1USifLM4UmbnHCQJ3p88GEZg53c3KqMqTH4HrtwTV22C3msqtoAoxjzdZr8eAKXvRSAkAJWAr",
  "key4": "4SGoSeqh1QnkQo4A37QUHMRhBaBfZJtq9XL6Tc3vp9H3ZvdSwDuYiDeaZBXso4XRtHAg2ZGX5QFmXhA5U8wPBBXg",
  "key5": "3FM7DAJAsGnFSR8waz4PHYx5Nmq2NKjJfLkgvXtXZck6KVU6P8Try5ZUyr3MVzsReGGexvrgyamc1B922TYMLMFr",
  "key6": "hmaFjnDTXnMCx6rcEuHFGQfNc6nydnef1chVmG8EVXcBb82B7HaqjhBw83EgERPHoPRxj36tMr7XSGHRznpjGDA",
  "key7": "3XnAzNjuv6xiSAH8nExJADrcSZTAKn9FgUX42uKjEdtWMyXyRnNmxmV7et3axcMfHDgGVGeAFTLKBFQ33Wj4EvBc",
  "key8": "3fxDQWKBhcqabYuk4v2CScztYKGfa95j1tBb4tyQe7VcVkR9yLRVQQrpPs8W5wj5g4GCCjp3q84b1ef9SULwJKmd",
  "key9": "BmpUyart44vFFd6q1wJLzFriYij8JU8JZFpgfMoMeGi5XQZDdoVpTZoTpvFbW3jArq7p26RtJc7aCegPV6b89pF",
  "key10": "2UsQMvPxnBbecrN9PwwRpQgpnoYi6abKzeN5dqjA9Uhc8RrKPMkfgZJc6xpwSyq1uJyZ6mxPf24CX81c4SrB4YxW",
  "key11": "4HCm3V87t4ytNmCgzSA6fiNoSuunqknvTCBCi1BXhoea9jgkByzeAWgKJ59Aza4Wj6BybG2crGbUAnXcJ22GzcNR",
  "key12": "65MTpKxNQiRm6dMPsZsHbJuRWYRZyUDYf49YhH7iBzC1uZj6T9jGuhTKENoiRAtn5FAez2GstBNUFevSKre2hjyX",
  "key13": "2BgxbanELA2xeZPjU12ZHUx6CyzUiYj1JiSF2bei6VaS9ppDNeWb1HEqzFcn8GCQPVYWGDeVqVuBkwcUF9a6tWcb",
  "key14": "MKvD577gXjoretrREgzv9dnggYSpNavXeMTVUQ3FE84hhNXmsN5XTYp7s9cbZxDQM2NtVbom19jQp62XUhSym8P",
  "key15": "5smHn3CUE2fGJij11ZgnYpytbjU16KsWLsGnwgUC624Rs5ysH7ga2BGrrxSC15MBpnz6Mhng3Jw4yV6z14iUMzRs",
  "key16": "hyBtzhhGk2JeL5kmHGujKr67Ra6wADP244bCnZWAqco4RDPaZkS72o5q7euGzZqDs558ZvLaBcGFZjvm5JZdmTe",
  "key17": "3up3V6NRK5qNQhVdx4bwBiD61M6HPaD4YaVJHZ9e1PCBf4sbVjTMFyfvRGngPTNSR2LrPnytTUhJEBzGTHkKrzmp",
  "key18": "38u7FNxsTaRL26XwyZ2LgdfdjtM3FKVgymCjG6B4as8EExNTUXs1EaUN2DpL56X9SVnmKqyFfr4jyD7jiwaKjLse",
  "key19": "5ATX65qzaqGWsX38XFTx7iMVovPokLEKFBspnCQhqXf1YuymZ8DsdBMKwGYuipgoutNyMu3pKLsRJEcYhjgNvc8u",
  "key20": "5pvmBubCkj9EAdLcXNko4E5tEhjW7mvmQjGtMjs2hXRMkjtauvLGE5kXudBJuZKdEoF5pUkCZBfSr8r2fvt2wiZb",
  "key21": "2VXcMW1ycmptnn7FWmJNU4rb5gq6DyEt96VkxaNzZZ9ehZqeztnrCSpnNAyFLvWXKMrG8NCCs8igQ9JZ3GdrEr9H",
  "key22": "CEGUvzNB4bB8Dr6XaPXkZarpbQ6oZTpcgwVjMgU2CApkWdq8H2DB1qFUT5yUJnQ319FPgsJPqRFQjtv7tFV7GNC",
  "key23": "3qm5QJF8UFfF9iVSsEzksPdEL2jNkfFosxWQjL1DcyPaogAffhsGtfGx5HkHSnU2NnMdZ5NG4PUaXYMDgxTTdzFz",
  "key24": "63NSesEcSr8eCR5paXBuV9iHXdnitkiFeKDwD1Q7cN5HLXtaq2ax1xWEmtdhiQmZ84b9rriL7iJpfgoVpVGjA6QB",
  "key25": "5LdCB1Sw6v4KmgvDcLkiob8gXR3K6gfa2bZtmFVpXPGprWpXxtuAtjHPUwFF1jUmJXPGkZcqhXeNrnmgAKQUwxmc",
  "key26": "2kAquPWbnsp7abUunDCpnkt4JKDWPtjuwCWd949cZ4FGmPqeqotag3xdrDxg1G1SSUqYWUH8qrzFnd1nRZRL6o6L",
  "key27": "3nHEBHS1RSogvDgaxXyrY2ihuEGTDhfbc2fWi7VjeuKmNAXTmPJ4ZfWewczMAQtwk5ovbc34mxatt22opUmSD3tn",
  "key28": "5ftWD9cTRzPw9tDFG1HKY26TvfycEtkYvfdGMtNUovpX9w1yy71QBX6FhKFfjR6Wp4GfnLYZvNwkSQBZ6bwqCyws",
  "key29": "2eHzWU1K8wgQSxgRADB5feJG3uGvXxzZa7fUrUEjSnassiAfjRb81Phnceq15kXr4iRvS1FAyL2jkmHuzq28YuQ2",
  "key30": "2TUuKVHmxqkrsqS4AE5zxh9Pt3fJi9vuE4Y3UDGbyg7YQcn37LwqYjTbKACjAKcPC6Vas91B2Zr11J5aaySv4q4a",
  "key31": "L4JnitmgwwdRLxQEDkfTbW4qrSxDyQ8DyNDJNW6qFA4nVDSuRBtznL6PJnJnwBxjA1mhvEquhyM4uf6tefPrrkm",
  "key32": "2Ju9akmxmt5FMmAgBEfCu92Z9AzSv2VQsiFP3Ex5AabrUEgnekvGhdLpZyDtEn8xjKkRRCAbBGpTdnpi5hQ7azEx",
  "key33": "5ebqmkJmoSHixcQkDoJg6rbh22nye7t5wazCC8zKADMh1RkB6WiPPfZKneutRsR5pbKeUesWoWXGVQ3XmF7EQRmu",
  "key34": "55Gu1Z61a3hikFYXRAgv2xm9NHM5AnGz5eK4DNcE19XHi5ZBMmuJD2uFkvQw1QHtzjFNZEyACmJF55jKn9LCLEv2",
  "key35": "3PnVevzv3t2XCpzN7gnYeFJ9NrBXaV82fAstBRNU5FGUdEu4KDLZj4nRQqGiDSnpcRcwUug1nFF6jBZYxU1WyQu1",
  "key36": "5RfvaukRffBAupwDPhsrYHgXLiwXqnMAJS26evRL2pmYWEv758YXDsut9FKJNAo8oK3oaxLdhHCzZ2nU51sFmQXZ",
  "key37": "4ndSQHazSakButWqhQHrQAApu8VmFEpz2ufsJnYUdJYCmiCUmDUAXvwsLJvxTTZEY9K7GbdezGn3Jg7wFrgsw3ey",
  "key38": "5pTozbJoySZ1BEaaTKXNoYzETZLx72iHD1jSvpUbtAwECLnVHCDcEQebQbmipmfNjhAf6FD2zEKcDVqYAxqMpqXo",
  "key39": "23kZSHb1AAzpuAFa4vB9Rcy71mm3iFnRYWfQh1qy8hgU6wPVZDiSmDpVWxt8pa429LDwP4PQSYmz8QYcCbFxKP9y",
  "key40": "4fa28Vn5YLQShZpwAjN2yzkGvRUbq74k2B5n91cN1GrXbCWB18tTWvoHcoYwiUJUk2PaEEzRRVFZkqt22WEEYkxN",
  "key41": "3DNcbz58hPxfCpKtHKuSxvaVaTFekyDecCauAWVzVwREKTBSaYUFhqRYash7M5AcqFWkhTp52KS8tevBBgm7qv7H",
  "key42": "rC5vtdxjNHTfqbB7vJWeis7C8VmnEa5UK3bfg9d3btQ4ixCgtGbiVyX39dusQ2kYJ5t3haw4EkkWqL3BrWEbznv",
  "key43": "ZEPjmJagsXS4xNXRye4hFqfivhxXCh4ktWC6dpG53ZH2Xuq8pNgCmWD6wWWDjUVo1851UA69zqTnYmALtgk9BvY",
  "key44": "5rdEjrgewwbt58TorxGGcSzaYBh8DD6wa3hn2gExujchn17eqk2mUdJcNsih2JbCezyBYAMGFHaK2qFyRNbEFXpF",
  "key45": "5VjzFvmbPqyaV1sJXhzXH5typebGrdJjbDVeDuuoGg4ocEfrabMrYfhrixtfNVnS5ftWetBjZg2DiwxrXaZBpz6Z",
  "key46": "4zXYDnXpqFpF9Azn1yNajStyTA2bwJV7w87pH5cbUWkZd4aSFGwJR9pkVospuFWHsv7e8D3CWMGy58niTJnhAVYa"
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
