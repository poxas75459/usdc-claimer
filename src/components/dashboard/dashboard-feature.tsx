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
    "3y26XZZ9fL3cAbT2SrdftQhKDEqAFymxhwURUTrnmnQHxRxxGB9L6GY4AxNPU5EUhLD8wyA11KDR2AguqZ4soDxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZCTgtGbwWpbUdL51LihnRPBPGozeskZ5QH9gZu4SXpjfFkCn6dFfhzqGVYLFG9nFGgxm5jv2Vt9jS62nis2KFJa",
  "key1": "4LPUd8Bdb8DXNBnFfgkuRJZLsKLrjcqd696rnjkPquLHVZcXFmGY5B3y9XmXtS67r6LXTvioBSWUFzSpiPEDoy3a",
  "key2": "4g9eWDb6GSLH9CyAeoVaKsfRa4xNx8CZsGAabPbRo62EM4mYUBqahd7huZ3hHP5ZSV6AHTh2CfoNpgmSrHDrL332",
  "key3": "4P78XXKWG3P2mt3ubGR9x6Ku5k9Scr99NrmUAjB2rdJzYeuyz9EBFhbud3oPT1yNhA3X4EHKUshXT6ATBLt78tRP",
  "key4": "4U5nULKbxhchiPEjvr8DBGYP88XdKXNy3AfA23HiaFUcDCFXcHTw4Cfz3s5AddynA6M29Eb5yG91J1io4ozQF93p",
  "key5": "5Yu2DgSC24E2gyGsapdhKVmh3e25NvKUTeN78ayz3JPTL7wmc33TwjehJKUWkVFidvnVu5a3pnoxhDDz6rfh8ST3",
  "key6": "2ZmypyEKRXY4vZKfq7pXnEDrzKCv7SoNS5ZurE2QSVXKrc2ffPQXaXD5WVyLKfNMdZokgh5AUXd3g9uc8cLX8s9g",
  "key7": "5jRb2YLuRjg4qX9tyaZZvK1iiKDShikDhXnDCiYV1Kxki5rFJBh4NXdRSevzbvK5usiTuPWA1wE3MRoxRVPKX65W",
  "key8": "JyDYkmr82CsJsbT1ou1N3KwoAKCpfK1SvzrSzctdPE7FGg62tn8J8LA3nGyfkUKLzKLMMKP1yEBojTGfanfoyS8",
  "key9": "5Epn1wXdvYUni1NMR1V6FTjsmPw2UN47SMRpMY5o13xVm28LVHbJ14zNTtL3aDcPBQCuV5DyPAMgHbtJsSY1cEy3",
  "key10": "5P6RNCizjLM3xZvbYKvKBTES7SjxgcMaSUmGGmJ4s7eKzW33A5wJ84CmScfTVfreSUzV2z2r3TpXTbz9azpg4QSG",
  "key11": "4YD2qKiu744HsgL9JZ6sUbYVbQBkACGMMLKfFoEV8SQ3sVHQq376TRztKLNoB6FjKt8Qn8W8EYzNUb7ouqcun6nX",
  "key12": "47pj3YvTDXMzC8apL7M9DfDSaUC2P9dokzBexwsnE4eTTdxxCBwBH7tzdbMzUorYjc344w4DH253wbssKhU5AoTA",
  "key13": "4xfdC5qdAaAwwxa4MEhEuLCzmbTZsLbN2js3rNEAohkqwwLtrS9Kr4Z1qut1PzzAgVzB8Bv64PiTHE2GUXpxHYqc",
  "key14": "4wkoyAiKiAHcUfo7N44LZ4jzZp1Mjij3Wc6KSaTiZTg5WS4boPeedmaB13dT2ZUPdafcRWMgSYQTdtTXe6gv4Yf5",
  "key15": "2thehF9T1g1zNHS6YjYQMcxC6emmW1Qbw4cYRXUzncKiZyr31naPAVBdrChbAnEG36ZxbKsTAN2bq64RAfUdskX",
  "key16": "3LC22grpakhh7epXS2GxorZ6NUedN5q4bCD8z3Pa9y9Xi9qzyWtTSkp9hNmp7Fhsdo9pxkpb1awXp8fVFnt1t5xj",
  "key17": "4Eym83AmhDZ12yroxJT8j8UxG3hkhXpDLzqMZYriZpmQd5ZBrumbGAbhRBoFtMgdY2MXYCTYPVmcJjPuLe3nQ7xz",
  "key18": "5PomAzSAcXbKHZxwmqnimtNcL5TMDNfZDmrTVKCMZDgE3jHx4QKmsYbQ8dpkCBbVTjWHcvi7KpGX6pFJSBf2rdQc",
  "key19": "Yyx9hsLaZ2YUB9DkWwdL8MxvDcYv3RMEZogyiYExgSAiLrtGzR5DXLwGHM1hbN5cuTuwHbv2vTZ268cnC9kMnLA",
  "key20": "4ycy2NEtAnqZqk8KNgddn9Ja8oc9evrw4Ta9rEV8uM8Muki5WghSmqneuvGAzNAYh5Dnnq5mjNRtVns1vmgXrUns",
  "key21": "2a9cu47KoNQLNYxBy7YqG647qfuQ5MRwSYrT5GmHuBsuCs4WYn4D9tPUBqv9GQ8DNhoQrFc3aV1HrkVyGBxWnC7p",
  "key22": "45G6YwFpRhmuwnp9vyg7jZimjZY8yHXvLsmhoJ6W6oYHuQkHihZgXS8WFM89bTCwwATwuv99gZ9FEWwdvivjwQJg",
  "key23": "4AEv7WQ2n7e55pJETud3q5YU9iBk4WYuRsmgBu4kfFxJGR3EYp8Hh2HC13mnqvKYpmYLstpUUYiiGwAsAFEcPQ37",
  "key24": "3h2TZewmznsWsaTnX3JASx63A39JXRiFM33XJ31PDmeknbwhSxaXDjTUiogiMg9bVSW8DwxNGbKdeK8ETmbDN2Zb",
  "key25": "38uNvDZ6HAatC1vtY3Eq7JiDqeqKCfZPCSwCxc4BZSFV1jHgjCfzo4QEesnLhSQUNdn2pgAuKtxADHLk5NgmQEHw",
  "key26": "4oegBdDakPEPSyq97RrK8zgq7M1nuFMo7UYQ61Q89owkBEqjQZtp57RZ8wjBatj45Q2SBuJfjJ6Jxks33Uw55wfH",
  "key27": "49QxHn3ijvQvfitfZTX7qn2U2HW2sybKBHgUg79J5AizEKTyNQdYCCVWxXVhVRDFThmsVkafXDGymvqZyx1s3NYj",
  "key28": "2YiQLiuNSWy7Y5ujxMjdVApusC36GZSdvJ1Z5yVGdL4T7tBfCNFLyRaEfQHmoZiwufKbFi156xUh66mkVApr3fkY",
  "key29": "5hYPbBRghj2coQuYqio7MwCdgwXXuhuszb7psPwuBTzUKfueWbg2ogpgDAMQAhtyS4yv7ddE2sVM2sd8K3ykVQMB",
  "key30": "5LLG94eZcARhZbeQNzUyssMAUeUFssJiTbLqYN7MDjeyCBTxsUayKB6wcUuZUVQ4hxTJxnKqt875hVQiWSfnZKsZ",
  "key31": "5No9eernYr31QW7EiF8Wf2pgJ3F4iYwGxfBpBFwbZdWwpSvuiBaQpVYYXBMuP4TbYjx3oLdFtBT9NbNXFk9kxk8u",
  "key32": "2CcnqrduQksCjqJge9qnpioSgoWMbxxaKiVcy2z6TTpp5ALfmR3pudadgRruiENk9LASYSYBnaUe5SAJ3Q1P5KGp",
  "key33": "XybnYaLaHArMDaHB1eCsx6fDmReawnrPGDTBjm81aTJ6FdavrGk5BGfZhcpsgSFHWYWdvsK4ymfELjPwExDfbm3",
  "key34": "5L42xBqxMYmQgqzQYYubRHfeLv5Vc9KgSoiCqNCEKKdfTv3xL2JZxRhJxrFHDFnS7RYj3nuY9281xZRkxAaLMGAf",
  "key35": "2MVevm2TqvW6B44M87FMtHFS4i3Ra3MLAnXZXTRUzRCsBCfpRhZWikeoULBAJGJGNTCE8jCJr4EwbarpWWRWeWDY",
  "key36": "5tHBoLuQUYZN5z7A2ykofaEaEBzPV9rsFVe1zfkzzL5yRLMz4tgUh7aHV8nUuzVKi5fr2pbePssUfcaCzfirghGh",
  "key37": "4UZRTzmFNss5SSQr7rh2yPuroLEW5StNhQe1N3wsdHonGbSVM1jViN4Pqcu5moQrX4h83vsqNwU94hiyJKBMwJDN",
  "key38": "3ws7bxtCqo417TexfkYV66wzHSyXbQMnk5h9cCAY22SdmRQQvD7bg2zXoq82QDx3Z3XUUJpcdWWo7S4xdr58n7Ym",
  "key39": "61UZa4KZTCtSyo6ZxCsPc3VNZDZiUFzakBP6cW1esKbmzByHq9AXEiDeWwXoRVZziyLqFmiReHBxDZ6UBqn9boGP",
  "key40": "5h44uNthyTXZZVjFs2zywXinbwVP7GLdQsUjQTVZXgAo5ZuXywwE6ps4JAsqsGV48WDpaN37zZDT1FYj9v4eQyn6",
  "key41": "4HHLTP9deeD3ENRnR1hi3tEHbMqXGQjCARF4DKnFLAuV3hhCNK25kdgsAbGXhF3aRyQCwcmxME9pmjPupXYEEVsf",
  "key42": "5vRmzojRPvNwY155UFpwm67SFjDwNUwEnAUq7EyoosA6jdTitGskGQiVUSntRWgBN2oAGuhmX3QU9KjqTzPnSG9Z",
  "key43": "4xwgNTQEotDKeVssoRCQLg3oKmD2rHopUPxQ5LG9mTbZHbtS2CRUPZER69rwe4ALCdc4z8ENV85Rhq1AwKysGy16",
  "key44": "5qtMUSydnDhevKM4P4jG7CeycUEizhjiAkwACtkRms2ne6ekbvB9gN19Kukid7aLYez4aQMtmZJNRA7HKvLPrnc5",
  "key45": "9buxM4RoHtgxzb2xoTfLJ1NuGhUEy5yisREH7Ze9deEYWvz5nM6GfZBfpyGL9Go9Q4uWWZU49mze1QzYrQZ7zEk",
  "key46": "3bPpUdMt7BAa72rnCgLD7KyRz78wCD1U7krdokRc3VeQMfLJx5gZBG4a2qgyAwjKRuVSacSbhR4ZctQqUxycPZof"
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
