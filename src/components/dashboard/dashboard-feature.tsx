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
    "3M3ZetesZckPuHaexuCMFXeMXL4hKBEqzzp82aM5inDsmiGaYmaDZch6FTJWjpXFvsNK9AkJZMgmWEJTUyc2iJKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34HsfHNsQyznVrRc9bnWd3bwFjpfTaJkSdNk3jccdQZvZczv6cfNjbVpsfcLAqqn2pMUrvejoQfG8D9CRrG9eJx8",
  "key1": "5xuL98cV6KRyrsjmBAb6qVUZNU4e85Fb18YsM2uA5sxdeeSY8jW4pUGK3nhoSFjpaxJ1Puu7DCr9AcNBoG18uA7e",
  "key2": "4uc4tJM52U21r3SpjXjUyQtbxoDXRn2cST98BZ8kRbdSJPwPiXoqQNz6zsB1vyVajntwRaVTNMCfdpX7wpKtbHv1",
  "key3": "2LDApAniQ57DcWXYrUDWTnSu1ErNpuYHBRSbUBicDgvNLpsh2ik5wSLZNPN9rhSbXY1X3XjWv5YM4AAd36ddCSFb",
  "key4": "v1WBQyKWPNaXgTBh1aSZY8VWJh9SQ5JxAisGPJkZPwxuAYDcLv8YeUB3VQpU6LoAsz5QdGEH4uhPxHGPDnnn26u",
  "key5": "3LMnrM1rSgByYE4MsMDdLEKNb6pk9bVsfgGeDztzm2EURD8MsHpx8zAJXobS2rR5ix7sYLz5pU9QnQ5HrgF6uia6",
  "key6": "42i9tQb3mRtwXg7jL5eLZabgVDFTYGjAohf5y6r8LxsqLtK7CwY5d2nafHq3KZZHzzHnTzB7sCkeyChQva3Ye2VQ",
  "key7": "zasMszyehE7kXBq2Xh9TXZuyekfyd2G2TNvMFm3yT5RQ1AXqsgQ7PdcGi81un2sTqHero4j6ebcUXB1XWo3wcLx",
  "key8": "2oPUqHCHWGwp8SKJ8EdCNQRLAraFd17SfVsg4GJ66ZE1Znhm1VFTnD4yfYugfJzmzR8AEFCn5qKvBNK6Eap6dSBX",
  "key9": "3QgeMdqVTgTK1iNL7JTSu1Ce6LbMsHnaLpeVLgtbhrrcUmSxQ6WHVan49pboew2oVRDtNy5dnZxuafiKrbsuWaM6",
  "key10": "3FAs3KWmXDM7EFiFsKiY8AdcWe1M1PLQwMAcxRo9Ttb8Zcg3Yx4c7cNufi8GZP7zmtVvqLCFLb4VmxE9Nz8jd15V",
  "key11": "24Sc7DJRmMQtdUGdTWkaK9aN71n86aKe4F3qvMnXy3TSeapAhx2z1jh4YUAphmYqDdBDi72sLid9vDnW9o8Av9gS",
  "key12": "5uebbF762dMZLeufkjzywd5Dn8PUNTE9G63BmYYQkyE5pUwgmsgJNyUSGersGMtRJA8Tqi79zGopk5q7Cvbqjb98",
  "key13": "2wLZb44iRRpnjnBFqa3cuHGNhAed1fsZiBWRj9KfsQFoHH9zRrRUytuDqZ19kcCMQuXkV7fXDoiamECFAfvThZgP",
  "key14": "2o24PBP6HGTuEqaxVX8vL7KujvvuVSuqLQrP1XfSeEWwBd6mtPm2sBwvkTkdpXhQKgrwAD9LeEHopdpoLLpE3ha7",
  "key15": "xE5SgSb2uyQSWZCCRGR64sBATc9rkNGwffRPQpWewjuNmGacbvhs2Wkc218SifqtwX1HWMvcjMVRSmTqLmatZRz",
  "key16": "4npPKLTKxiG7pWcD9pdL1oqeW6x2EckpcLxC8UGc5pYX8B2gKHvdLYbR5Q23wNVhbYKzGwFLbSM9sMhapjZQChGL",
  "key17": "5CY9Q4uszSRjWUScaSByQpMe9Zbg9uX9h3W7U6jFJ8B6cqdV5xevcAKia91ekBaTr6aitFK4A6gWiUErFrUUeUHF",
  "key18": "gUxPzSSkQzsqW94wcSyEpoJrUgXdheyQXS4uUUzDxFQyrqtbr95vahuGqq9qPsWbTF9kwxSaWxJDtqCpnB3AVV8",
  "key19": "XTWxFsjSzZxrBAiALU1dFHLYRgJRupu7sDhGZPM9y8zLyjwiydoUEZU4Ax1c99qMDAoRctWHr2AjybECnzKNpVo",
  "key20": "5BwV1G3ErDv2wUaJ2CFYbTLdxLKg3x3DceUPQsPchNMFtuNjn8tRBSD3smaDn2gpsGpFV95wWUV9wKGUgEvVaKvS",
  "key21": "4iB3u6ZQerm4aaSrmf2dKMSBjGkc6ZPQ1kmqDZk5JHN1Pt8xrKwBgVNtzFQdBNKir3BV1uzMjEPTqZXkLH2bkdby",
  "key22": "5a49mvzQZenToqe9snShGt7HzAiansfCJ5GZmzFMUfqoGNidYMWzRgPERSFdAPrbFJLSn9y48kgHvLgGPpM148nV",
  "key23": "2U2Fepd6H2MNqhkTGudpfWtV2S18ti9FiW5gk6mDUfyF583EYPyxGR2v4BS457WFR9FrCjJhMwhqNfMek2wxaGMH",
  "key24": "21689TfJAneR4ihH5aio4ZA2bfXaXDNKjwXaUqnA64xgkXLi6E7T4tuVoW2nUhpja4nxu8zS9485TqQGpgvejDKC",
  "key25": "34gcFeQCUY2W4jFMZbqA2HX79dmH3a7z3QcaDhs2san1eKwpRJeEhKd1RDHW2Zi5xg187DW8KXXpXCXDDyqsVqoP",
  "key26": "4xfavH81pqsrKnhjzg13w8Xq4Ma9Gyh8bccwnVpTS3mutSsAo5erzXBaE8rUQi2e71TyjeteeMaWvgHNxJr5D4DP",
  "key27": "24vMVCa7YHxEjttxmAuNdoDjNDbBxuBBpTWwSRgS24XMcTWAwSYPUD9WvPANiv1HG4T7z7q1nopoeM1KYT5pdcLG",
  "key28": "4Hy5BRXpZjiFeT3kWctShoXrjSHWfL3jwp8npFS71SczdGfFWXYsHTK1zq9ePu7rJDziWjvuKMeozqeHnQR34LV2",
  "key29": "3kQy2A5NHegTgq71wG6vKCHGsxToDyM9i49QgHYzZxLc1RFa9RJ9UQ4NdQVZZ4h2SUUkv7pzBx1oDVKq2yH1NJ2V",
  "key30": "2Rj92LiMDvQ4MTBwBr4bgNKAxraPiNQj9EnMsQX9RVicdoGUDdztexeNCY1Emee6HsGzzYDYKjjs3tJcZ8SUD4ko",
  "key31": "DqWNFXe8k8MjqA8xpQmZWBfHa46duPcyqhf3kR9YupDz5ZzC37GsQ4EKmq7brYnEUtv5qbtgoC9sWAzhg7YvRxY",
  "key32": "3LuBYvC1ux6biE5RGd4YaTnheY1mdEotwQEt59zxaED8qH4fhMnRkGASLRFqEeQxWDHEbsce18af2u49sN7oHJbQ",
  "key33": "2ya8xaYvttZvQiVEVC5tG8uF3kKdnvwqpuAuiZu2Gf5RVDQNk7BFkvSThJUmwiw75H3dzBgypwbK2BjB2er8patv",
  "key34": "5uie48Nji4JBYk1QyBjAm9G1zM6xAdX48DreTYuoEpbcMCmB3EVqEgJUbJUPdAN48HgZgr9cSMxmMdEipDpU6oqt",
  "key35": "2SdHBLNtCgEaZ7p91JA3j5e93krxmsDpJLUNM1CsdG5fKSjCbhWuzLioTkjepG162LFVVVe69XqhGwMUmnFxxQ2z",
  "key36": "39mqzXCJGebmWVVEbrHCqLucX3zmHSqVZGDCqon9DEudftW57BiF7kj8mH4uZuBxEFe5NS9iyt2YJsUGnYQChM8C",
  "key37": "5guCSzKFrM4eLnmjC2bUQjHVxDXQj7kPGgQyYntCNJL1CZ7ftPxr3rnaadUxjrc21jEFxMC2tENSM9C9LCryHeCd",
  "key38": "548vFbe9jnEYNrBrZPKKXwihJFGY7wnnErcLDv1ffC9JkzbjKivKFvEtWdf6hLruBysHdymy6NA9necFG7VtrMZC",
  "key39": "2iwuEBdJ8YJv81UiGtj2qhQsCeVDHSBNaaobCAq55veQLVTe6NRZL8w2RCF7QhrZedSACC1jAQksQDd92fuMeUbh",
  "key40": "3WsLunYxtibLsiVS8pce2congfvJjuhEBdzhhoLrhu9Yj6wmrwALzWg7c5KhoQkRxF1KKtkNDNJAx36DVAvYBrsR",
  "key41": "4HkteoWKKhMiBP2vkFvjjtZeF6Q5EWPVyS1kYnZCjpSibb6UKovsq9DpaZ95uuEtSPhzyFTnzZHXTxiP9LD5zKzB",
  "key42": "4TA6WV5HA7mmjEEXKyqTFqpsbPosG9yUQEwsyisyWTMTcmh6qjwiVk8DcALTWnTrXC8cfrMUhRpwwzeunoLw3v1R",
  "key43": "vPGiAU1oChTpewoqYtB4MAq7E66HEhG1QNBJtwKG6CZBUqmbFHHRSdzycZgJPHDywUAThgYrkdXsYsZFWxdoRQh",
  "key44": "2ZtRjYmpYVPjjXms5edrYSMNVVZyr6u4f1v2Ke8n79mJQ7viJUvNez55WC6oXiRirQML6VzftZ8AEqKn913kdYuD",
  "key45": "66hvy2pj5tFKmXSfQSqK33X715xpigVqVEm7w7Ehoa4HXiRPGkB5VZZec5qyGaisjqMM6CXsyLQ12EQ2qrU7vgCa"
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
