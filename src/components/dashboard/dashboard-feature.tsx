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
    "4dB4Jmw3s7VKNSqAedWNy8no8tJPHiXcgpPT5yChgJyDxcNGxaLTcGsdx6TgGJ1SRi6Fq3KvrxzemV2PskxvfYGs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WXtsne7RFfdoyiRXfgzWQ5AVDRaTaKQrgCHj8T5JwjMmFpZxqZBs8cJBcSDv5T9EVAWuXh5aHMNCpon5pHySUft",
  "key1": "2hBej6MD9JYJEfYh3iPpHwq6h4vCMFkJWXGpUJb56tttdkYDNwL7dhRFkwEg7YSTf4HFEJHmk2iAwVRJBxqWcTcg",
  "key2": "3tEGcekK5yGturwHKVku3fbKk86rMbDdqqnzpggEeuWn3JQoYoi53PgcJoK7Fki49B2koYbmAQbHQpvwonfPf4E7",
  "key3": "UfJFzSD5YdyvD626oYDFnmgAXoBaxPweEUs7WiZwjgkDPQMQdRVrNSj8hqfQLmbgF9smAeFThap88eCWXkWt2jh",
  "key4": "9RL5zaHrpMjVRY7aMfrwCNKs4rxAcpssEqvUvdbuKiwtVUAnGMzQHL1EgDC7gXGfvnVJvjdsQK6ffySBncpWNGu",
  "key5": "29dCGBCeQvrNwbCXSsbcHqXF7symDuYQ2gftJq4dr1KGcZhaFzurqdNufk6hRdVsh82GmLeuDWqq3whSHNvcVexE",
  "key6": "D1i2AUQ5Law4rwi2e89tm3ti6sHo6UNVALrAV3sGu6mmUG3akXKj1Ziz3gqEEwZBRDf1XMEvEtte4uExRHsRQJP",
  "key7": "4PzWKF3YchycZyQtPu7Tjdmm2iNWuVtSbNYm8iVDyVzfVjHp3kC11JEQo6xHoM7mfAwMrDJMdpXAaQDHn5iM8oqp",
  "key8": "5n1jfnsT1UR31sug7cRRUWpQpF6y7zzYKXGJb1jcbDxtWqed2YT7rQtESCXYMckBxYMjpAzDo5oLgF8tNToxSrdS",
  "key9": "2uoPJu2pqQVsGi3PhBeK712PFtmfT7hDPTANZEjjgAzg7N3z7HQyexZCxyN8ZhbyY3vJzn4MmAGJEQMHkccMeQEa",
  "key10": "maBDPZz3ufEQbjuQay113hodSVdAbHyWAg7QiYGd76yoHCrHMuK8fvWuLV9tFmHfybAk8VZpmwcnrJXH42Qy3S6",
  "key11": "24KEerWGzeFjEp2sgvWLC4T82xesfbYHW3fBecjWjcu1CasX7wuMaKUay4X3NQubP2TDiwAdREY6JfPdyVXi1Mmw",
  "key12": "5yJqrTHwBu2j1nSFcJVym3PAkGrtTD2wxmNELCDTffim17NkbPerzDHwc1PzgxXsBq26KdxJa4nVEXwv5iTnagck",
  "key13": "4qmmZnM2ZeGxdkrNKdAdFnzhg5MWYMURTFvaSHT49FRMNFR2VxD5xhahVToBjft7BqnevGag96XfHzMuF8oNVRUZ",
  "key14": "34jqhovG6EwtXkNC7Es6FW27deU4TCgiDjXkngmSGBVtEHdQ8u3BxdCKvie8pqphnv7YwVeGVtSNmz1ugW1KmCAV",
  "key15": "3vPbwjUVftgn4RuUWmL3Ma5zcWXaToFeeRA2GAVvHYKwixCG1xLpYjtUGNzUVxwHRTRhMqaG6qcBPaAroXH8eCSo",
  "key16": "31ZAU7Rs6nv97aGm6QrzYZJMnnt6mgu1YpgyWBZnGU71V3wVKkbmB1hVonAauPEQCSFQw5pXEy3DMFJQirGtm1g3",
  "key17": "V8xknjsoQsUuGxZdX1ML3ckeJTMN7pLuFRbVmgUTA2TKJd3tZQ9SX2cPXXvfbxdyJSoutww5k9NVGWphzLNZ2V6",
  "key18": "2ECpW8GjazTGzvfEfExpq41cSRcyV5GfuAXeMqSSqXAjjk6DE6gPNvXbJm9y2pJM8GzMxPKMHYxM138R5562DqbD",
  "key19": "DKEN6kGXNaWAvPmnpn3awb6PnAcRSiMEHMUo7nHysn9mLf9dQ6dPHrDUgx887B8Mo8WmjqPCMkDHZsPr3dErh13",
  "key20": "hCDVi61LEbcavu7Fjn8162Nx8MTMydiuB4rLHwWzRm6NEVhakcM6AYkfNP96FqDdC1sLughkLayyRZEVZU7Uqua",
  "key21": "5AuNWP2KCf4nBJ5DSXHwprsCkX4qF959RU5Hk8yubQFRh4REBFVMhQ1K9L5CQwV9wvT179bvPmLdGAvGdFSm3RPQ",
  "key22": "3AZByKrJ6rQyJTpQudARYfDkaygnjUHBsYfvZit5DkCAAakM6FeWBSLzUsJwdri2qgk2jLvNbZSrpRtkxX4nTScS",
  "key23": "2u8y6SLzDoe4fSLhsKCremujEnJy8xxXMTMWC4nxQ1oTeMPhYHq73ocv3bNzCTQq6jd2Ymc6qktiCpGoQqV3xfkW",
  "key24": "2H3ZThcMNeZRvKasDtGU2Av12RNBaJbhieokwA2YHt3ZxHJLb8p7Y6ebAbfpsXHN6pHZq5CkcjWuyuVjvSm7geWE",
  "key25": "2DDGrKmNos3kb6FNhWFNhbYtaETD4K2UmtcHmkMGRW7xfAS3E2caLPxsJysBmDGAPVAYXNS6BWbbQo8nW1d2wKJr",
  "key26": "sXbhCcEBa9oL7j3nZxMLd4NePnVbjK1wKdWzzT4miUd8xmv8exSXXS1Lzh7WdwivPnmhvT6dSfiWqC4QEhst84S",
  "key27": "5twRSCEtqPxwU6V56ZNAXtxhSmTbwPmXbtsBGpdt8QjAvn1vP3rty91Cqf4XY3TrVxBuRJvnYxPsDxTFhBTvJFa8",
  "key28": "5LTEqCDmiejj3jmbyxirmZFfBpNf3hTvuirWkSrVTojr47oYhajc9iXsXoLfADD1eXinqUYd5P4YpLVt3756H2Z",
  "key29": "32WufK1xU2PUZ4becSMw8c16RCXrxoJ12Qkh9iunS57J7DZiKPdLLBvX2mpRtRaM9h7FFonMa2V1JvcaNoC5tbrs",
  "key30": "5ByP8MnYBSsWYcJbtDtvdjRsgm4o3CefMXXsbgshau43RSX4wWPpEBwGLKaoRwi9Yk6HC8qR4c5vuB8ovj5YBEDg",
  "key31": "2oxtxNBTVGf56mW4uMDvry8vC6yHdTnkyBNQYzCxkxxGBBRLNwbUtTXm768eERFXtmziViKHL7MSpazpNi6hhaGA",
  "key32": "gMcRtLYEQgYmUfqFUi67kujKujqSn9vRa1hB4gx3SVvueYwNC4rjQcmNGYnKkJwozcWifWFhR5LsKfj6t7246MU",
  "key33": "rH2qDTCf1QV4TjM8PEmZjSMp3tkA9Z6wjwQZ7HqAVPdE7kFwemKxQCtMeV9xvZBg3PuKToW6fWp5FhXRpvUreub",
  "key34": "3ja3BXSDJmnHpLtRwuN39B5zXs9dNYVc2BtbAkc2rZEBTzJQKQ4J7U9sCyShT3xfjn4QknG9VeeLL4uqm7DTodxD",
  "key35": "5dRwfmwsf7cncjT1aTgU8vLiTtVRtHQnfNo72SbZbbvx8JnpX3FwzWnQwPYoM8apYuV11oRdbvtRGY3PE1SdEcU3",
  "key36": "53fQdQDwsFnZv5GYYa1SpK1dJJzzxtTCL1d57Wx2WCKK5AuaP2UHWQNLiiJDCG4oWSqQEedQMKy67LhoyLNEQZKZ",
  "key37": "xpXLtsQx3kR56jwHY4NDoZQaEP5FUFYayTBcLnpCZxWXnRE5ZhALG17bVKHTRJ1RnyW73KfgCXsibzYGRAcsi47",
  "key38": "5LLpPa5R2Wu9GuWSEJAJbqf49xCPDQY2E8EoqJZS9nL94YSQSo2wLrfYuyxMRca7teDFXiD1Tag2tBN71Bw1iG3e"
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
