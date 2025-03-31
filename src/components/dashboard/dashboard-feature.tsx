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
    "4fni8UUWAbNSwoweT9W4ZHuipUrGzx9XMUkWHfUm48ZTcVJWEKztkBAdKA1jp4Jno2MbZaugUkTrbqU2fiief6jf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65Nyoe6cQb6Rn8fcNtzzCzDoS4Fvj27qdri3eceZCMk3byzR4A6MPzYeKshLDHXcL8CcNTsVPjMU6wmMg7oKjdd1",
  "key1": "NbisYCifZhgot8yxm4QANM73W3QgjXfhGxGUSJJMk9xgKnyiWZpjccXy5hgVwNqWAigqV5P9JkShvgfa4N6B7gN",
  "key2": "U3zsowkUMNYA5E27zg3EjVLq6Hjppoe1VSD3EeD7t6WVzgYsWtNPLc5YPz8A9nV2KZjWmdrgwDP8sKXLGwrFCan",
  "key3": "5qqahBdcpviJvpYQag9DMXHva5L46NQ65ErYVxQbCWFDctuTNRoqASb9CiWYWbJEKuQSceZnqJeJ97dvkBEm42HU",
  "key4": "3zYsLpAmFcRpo3DNoWG62tRhR3WVC3zYDWxGcYgG5CaoeNiV2VmQstMZSKFLx3HMjL3eEfdWUxbzbZkv7ovGG51H",
  "key5": "43BVaWtXq7XteUjc2hSJm6qyZQTLjVeFJRbnTcJ7Jj6PK7juQhVwBTJmXNe5HLkhxXPUHYAqdNA3x2YocZGJWSag",
  "key6": "4dPnJDZSGQNPixH2ohVSjgn4qbS1dwW1aRd4NuRbTB65TvMGgyQvkR8wDVHdDPShXcoRBH1RdiLKsVsDft5u1evp",
  "key7": "59S1S2ypLDvuMD1hCBsrLTa457JPpcCv3oiTGsSdyAiFtNhTBBML33kFjW447RaUrsE5qCBhQaCkCqfA4dV7hjjX",
  "key8": "2ePWgscsSRCg4wjMS1hiv1BLLJSomU8Hyn3ETEf19Mxh4qRG7gNBJkt5Kv3ovUdfkaPMGUeUrAn18X3hAVyB2AP5",
  "key9": "3ruaAT2g1AKDq1iGRUfCjabXSLE6jkFkwb7QvCQkZCTMM81dJydL1WMMenk4e3RQDTab2NiTMVMLQgFS2ZXUnTQc",
  "key10": "2j25yxywJ7SneGeHVe83WKsxogxKojketpwGzFkgppWcuRUx3yphKgKo7Tf2PtWNNX1Zc4uaGcEjvSx7ra27a9a6",
  "key11": "4qwgU81umjUpZGLDUWnKiU6F6T9rmD3rMfU8GDtSLnC7emAbTX2ooitE54ifnVXN5pmZKLDs2LM1AMgZcJmA3X7W",
  "key12": "9VaH1RUxNRm3odXqwe9oPhF1iWwY3JxNngTXr8jwwqM2SJS4qtBJJQBJoWLame2mjeyWaDqLdKh26h2Bi7H1Zro",
  "key13": "567n4BLY4FGXWPTNsmdbWs2Z8nzes8AaTvwRDEzj1qRtTTyzbJkuFYURGrXU1uKCXx3vaFnYuJZiDo3oMH6Qm6mr",
  "key14": "2ro7QD8tCQFKtggLupGLptDbgxrxvF94KGsEGiXxjrWRrxLWDxiatgb4aJJNAsgtDjYKbhopjvMsmTB8q3WEGat9",
  "key15": "3SrDLbii9gU5nQUEQ27YTRCigr51cxzgcpbF7xPmczpGoPuDADbrTC5cDMD3eGKCFyMHn1GnsYDxjnpnPtcQsrLD",
  "key16": "58kMYofAJRdNTvnRgqy726963mKSB1WFRTYNogJbhP9VRkqnmZmKAJgyepTiW9E127KgEDwwUaxCrrLNgZ8SSvb1",
  "key17": "32u5yYYs1dHJYsxc65yu243qmQ8YQMq4J2t7tYARGPCAV5GznogagGxDrkuQK2oAeqLEChmMBULKRqrmPPz4CdjK",
  "key18": "4PTBc9sCCGkbjZAWrNCZKhZ5YKzAgk7F9qxe4d7CTrtxoDFMjehBpcLHk9xcjzTRR3ew4MgWEJhRxSW5pJgtyUgG",
  "key19": "2pDtp1Re8ffz5oik9rYXoAZDUdFX71fDQ6Gkmo8htfPMZfZmyMEmaGHbaHtGFhgp3LkcjnsgDVcaMGBZRHyEGcYG",
  "key20": "2ajtZNozhwQac17tGFm3sPCfUJfWBKNxb7WrwcJ4ejyAji8Y9NSZQ39catJraqxfKFx4LSB57indJLUNSeYeMwgH",
  "key21": "3NxR3CMYvAxL86jEroP6HB7mUNm1RDdBERpycVDeu3eNMUC7cbArzPWGhip4pMRjWhZP2TrPyNCsT9ctGt33PsyK",
  "key22": "2EuxUtGxNgRimPcYmB1oeFyLrHrWAKcsqC5A1o5pFHwAkxP1fbuMho3vx4pJnrQU35Mx5hSfC4fzcgd4wDqXfHKA",
  "key23": "3bpPcbt3ijtwBWaMjUktCVDZPSVkMoydGAMhxJG7gnATpnwQN69sXi6itF33qyL4az4sE1uHYS9boUxDS3R6Qmtp",
  "key24": "2qa7LuRceXbmrbxaeTad4DsXSPqkAQG7H3HeS2x881nKNxrnCXzEUgh1UmNgJusd85rsuhhKXamdnEWsAPnhUGH4",
  "key25": "2A7LCimCNNFbF1QYGHzNSrpB3Hcdimy2hAkK4trqwTeQrB4h37cQ1cwuEzGzqK6dnVrcusNqgWhmZ2JD9fphE8Vi",
  "key26": "2uWnfwY8m19hA93SZnAZTVmR8xuKfYa9g9N5BCKwAQmoFN57X7GCBqZcXoV29yff4uHSYc6mQBDChefhDhNyid94",
  "key27": "4tUm3aXzhupEuqB7u83ZDjFUCxTboLsiy9Zu2esXbeNPzTr4PMUgW4jXBcxB245arTUWYwCDHCVXd1RCqj62Wpwm",
  "key28": "5n1vmqZfhbJSw9fAairWVsYBNM8cgtKHj1mJVkC5J14hfAFKA2gbRA7WV3TGA8hv4QSXfTgbtS9tCr4pDMLZ6kZZ",
  "key29": "5CTVqJ8Xp9xxNM4JsGngfGDAGzi5iyJfb7kfRRH8WnQLH2X3ZdMFW9rxnvfn6PZXKjqcpoajVyKyoPcd83PM7Syz",
  "key30": "3DY1Qnauu3kCu96p1fhKTh7D2drGMj56jeyUV1uPm48vfxUMFv2ZL1BGJfRT7EbhzmqoFpiJrvuzVREq3FEpxmEt"
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
