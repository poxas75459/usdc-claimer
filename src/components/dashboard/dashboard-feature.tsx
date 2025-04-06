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
    "21vyC1fiQYwuAq9uBaTLt5ENcJ8iA8VithBidcNXFSHSNDfPnCZo6Cyy32vZ7W64h5gd8mGZpUGPKC3AnfBZwZH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zcDuj1cYmFxugWkMfQAD38496YgrJQD61YWzeYuAr7cfDKmdpj7qLyKhSCoWaUBfSPJZVAsrcmT8poxux8MJCEh",
  "key1": "DwFvTRiJXRfuwPTLfGBmaMq1RJM6ReKWGtmrfMDZXixDgt1FwgPQxKG9M29fEhYbuK5A6PdB72VoC9n1N47RfcU",
  "key2": "2zKtUUUvZDSnNYtf45vYdpkLL22wVrh3AZXiXZVNMJkJrXj8vmcEdXp8LtZdq7mqf5piWtmNCBwyHUDnK8A3coAK",
  "key3": "4vcpCQ4pJVJZS3fSzEgjPm6qNNwnmnvvwVmUGgefXJ3JrbAbVrf6DAb9t7wLTXPM3CMAeLbR8hmCCZCsG6Vf5qWq",
  "key4": "Qa2pg7oK98vFXCbNLBibU76eLwjJFvkwpnUwaEP8EUqa7A2f4eeg18fPVYaJcD18UBpb7ijx96kDES5paLWRjhh",
  "key5": "5om75jBnZiUE3RNWeyHLXzepnCbRu4U2CZ5jw3bvBbjznz1KXohjr3kgMSeKk2WPAW3cPTKCzhKtPpS4TF8Phi3F",
  "key6": "5Th6areUfSzb5a5jfPjc9TjB6F5c2pGBfvBGVZX79Q8mVVKWsK8HA5wpXEEfunFS1Cg7qDaSHPqwf6SEowSLBSot",
  "key7": "4cusNrxwYirRoEuLQVsyw5j3Eq7EZE8L1xDxy3cdLGTqVjpXGGS9trPg3AdzyoEeoVUUTFUJJiTsNCmoJnwCmVsr",
  "key8": "5EmScp6AaoJAEcg3h2aNm9xgbxfyPeshF5Z6j6Ai8b4TPa4NrzkEpsAzMpbGDTnkS588qBHpWu6iDTDr8Aw28yoV",
  "key9": "3nZbpgUBEJJNfwsHdJ5f5otLs62w8LHEdvaVapg5fgctc9kvpj3i4AymYRGEPgVCSFY4baZd6UMqC5L8bsN2A7Ux",
  "key10": "5qGSS3FpgVq7pvk1gUdePdpmh67JbPAKPEFcwGiB5TJePDaEqet9bxotc33kaqnzR7K2rbjS7XAuxtXMdeZEmd4",
  "key11": "366z7qprf1Ho4rjHMoE4tw6cvmPHXb7CLvrH1Jzoz3fBLk3UHnwxoSRr5FZLEApTctHXBzE4nXHt3FLWfypDdJEC",
  "key12": "M58AZx3ZN147Q5AhHHjwtsjUd87vunkFV2kmpdauJVLMjG9aPcHsJQhCTH8SNhHtid4ohGUgAM6CPc5cYwr1NuK",
  "key13": "5dCZB9UkXD9wz8dief31zmW7rxkGWg2dQfv1WChwD8a2n1zNAGsztqjDca8mXr6JFnbjZS3PoDVXSSop7yB7rWjZ",
  "key14": "42HZypiC6FMLWrz8iFFd1apRqd5yreCkT47zvQaeUtzbwtFJcusBa7ZzSbBRUuDr4PBqZMr72FSthod7aAqKePhg",
  "key15": "wzSn19ggstw9zTL4G5TJMh8ReEgnpNzN9CoWripjX1V8gFtzT7uH1mzwSMv6MiRoKQpmKQnm9X6xWnkvnfMc86A",
  "key16": "3q2Z2fLGV4An5B2FMGhiUKbfMZVvvm62skrr2V66kCJjR5jJK54BowRG1hiKV2YJKVD3XkUvviQVcHF59nDGb2ct",
  "key17": "5kNgX32R23sRuzA3AVaMk2Ex2Mz9qHByfk3nLSVgrqNcEEqjJ7NKMgeM5kjvU5jbSxsikyT6wEq417BuLMX6xYY7",
  "key18": "GCh29qpUTpXSNvNvkWUCpNaSdisBxC13LMCSsUDMN6BcogjwtENPhXqms2PCPLxTHAYRgjz1xfHyJF2EDWoLtG7",
  "key19": "5HXDZSoXZaFhakGSEKBT5n49Fihcf2kLQgDP7D7c2iKLz85ecRedb1731BNUFVmyRH5KzQSCmdSCa3mEkLGQFfvY",
  "key20": "xMijxzHXmqcSgHZNCLRnVDLvMcR4dsoBqVxNTuwhkVEWAzZQ3RSiRoYFcCJPrp3hoYqsoT68Znb4FKDE5kW5QAm",
  "key21": "28aognHhB6S5PkwhgWyQPt266wv9QNtetVcMX7Yo2LUzwfci5KsRdqo3yyXDAqpJECk6SKnydAuS8ggmjvsw4zp6",
  "key22": "4Z92fmGQF2CKF3yDNHRKk2vHSru9UCa1fzDwtjdDnfBhbMJ21MRk4ouVjxaPStMhXT3ojNetaQ3BSKZpwt7hfKaA",
  "key23": "3a9YSd9rFSCSEY1SfhAjjY14zPi4ApMDeFUucgzHAq9mAadMGpD21Xr4cMrK1MSNo5NnD59m268Qo5pgBx7TCBbG",
  "key24": "2PjGq6SR7CJqhzvZyC5WsXNsYnHJ1aStkEpBykKnghgVo4BD69rxm8JRHpbRuiZRESXLsgfb5LwvEr1a5KSTkq7v",
  "key25": "ed27ot6fWvozr4gdBxdfA9ShYK8mTanGQuQGYXCCuy8auVF3bX1TA7q4cYUxFsYTQYLzUf3njdTbURg6bckZNnV",
  "key26": "3YJEUvNNSnvrW3GLKxjvPExdaMsfegkMftFdx3HwsDfhkPWYVqJr4ZUdiLCBgthqVxjjycQ4PbXPWjqFh3y7oAs6",
  "key27": "4vWyeTmYsfVpLR7tgvq64RHFVB74qrRn5epE1XcXuWx5CB43JaSwxKFPVTKgqTTcx717hXerpfW4xtKAMeJ5vcDZ",
  "key28": "3fU1xT5CNW6NiwCZNTW63XiGJLU3GHJoseh8Kkb42g5n8adnUxM7oUqRWbdYB7eqYXV8mH4ki8d22KiHgWEXqnbZ",
  "key29": "5m1qYEGN3Y36rwkxCe258Qn27CLX9Tgyzjter8rTZSG8HSWV8nCSvauFpKNCfbYsr3NM8xXDtNzCvhCx9YTfpPCh",
  "key30": "5DcTXfbAeiaWEkKVSiQ1vSUvHTYfPS3Wjxb3xYwxS4xqLz3gUDf6GztnvUANGRJ8huRbG4fDYhVvivkcFyz4YBc2",
  "key31": "5Ysj6qidHHWuXKfjq2QWuUZWj2QRfAR1VzAsHv5cTd2x3paxJ9aR3sgfdxfaPb88HusoAtdXvzMJYhGc43TSkFFK",
  "key32": "5akmXuXR6dh5A4nNi5t6VdBMfG6uJ2BSBpWbz21p6vGHGYRYSGAgjAMtTFQQbPVmKX2oba5hJJMAQytkCqcn6tfi",
  "key33": "2q5tKTRevDToasGtkx5MzXZJg5MHTH4LgmMNDTcj2HMbkFDeeTZ8rcAPtGpweaRLS8usb1tZBKh57UmdmYKf6cTn",
  "key34": "4jJEVWzN6V58GCZzqz8MTLgMZAHESKWtw5gV4RAfpGt1pm6ferKm2FbKcpaYqJXmE9xPPNAMYN1BgzpMRTedpTtA",
  "key35": "DoekREt4e2gHmUzNAqC92N3rzctTeF3BTiXPSnERYtD27PC4ay1FrHTiEvYrwAGRGxqmJVfLntrr1FFECNgbJM9",
  "key36": "ksjBtmGvHQfbBpAYMd7pEzGPsexpkvzn8UAxxqpYCdyHWvW9J9PWiBQmCckFVzsBb9qwNFWy1ZNAMLXT9WBycjP",
  "key37": "8gY5EoHkWNRZCcc4sj55cfndskbPHS1eS9hsSbjndLpvE7PRigC3X294PqtFyEsEhGt7yxtkacMSVP7skU3AGbY",
  "key38": "3HaV8EnHpfWWirKWGQvV3szLkKF2RxQjGhHaizwGRHcxL5GWmpgCvCm2LV2yqkkFZdXXj5QUDfuRduwYbHCinEL9",
  "key39": "2FLSrJzUsHkANJcQwYUcF5AnRUcpvLF4MB8xFAsvXcH9XHG6PRUJMBxXUVU4jckfXM3tTFGHaUvAFRXUQk38WVAW",
  "key40": "idS5hKbCEQMMK7gSSj4Ei9sATNqG7H8FHD1kVasU3D9U2bLBhtgg4kHV31Gw9gu7ggNct6GWmbWaJySykqw1wMR",
  "key41": "1GNN6PNfVHZJBfCekrinXy6zaktgYGB78FbeTax91ApyRSJVvbKfxSLCMyBKnRTXur3b2xDD4Lu77o9Dn1bWFzb",
  "key42": "g9XTjxuewkZaZ5ZPPCunGoqPyoD3vjfcAhj13495y5du9B1hAjwgR5A3muNVJG13Y9C4u5c18EfKLCKietwi19M",
  "key43": "2HNx4hXSaGnD4kTLuW447a6fxAUhcdZoSfWrVa7gY7Ek62XTjbQKBEzHuxwuQULv8y8zAnE8gjPyGrY1zSCowP6D"
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
