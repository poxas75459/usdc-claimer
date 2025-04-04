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
    "3ohHoQSXxrdM8MXGoYxaiHzh1V6TFxDxL8aNfNwtGCV6NqRQ3ZyX6gw9mqiG1csAw9KyFJmw5n6ngPgkR84WeKhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nrTJxyN1szpK4ZtvCsNGKZFpXvkchcNfSPa3vMQYh7QF4wySwH6JZxF3LNBMwEb9QwFG1Nj17feaMpri8MK4Mm3",
  "key1": "47wmpZufMzjVfdxAyDLhXPG1HgZf9yPBm2ioBViuJW8cSsuZBbJAkS9QgjG3DBXfqMcfGsMXfVtHUQnxXGhyXqyi",
  "key2": "3yQFHXd1GSAdbMXnEr5b3L1sqxLfTtJG3FM4cysaDcBdRGcfzfXKFjdN6SGw6iLq24oSA9ky2q3o9iL3eVWnPdCv",
  "key3": "2VTCxe1QzQ4KosSJmcpcbyy4GBnB4Ah6Gc2h7szo8iHjtkVikmpyrVkQXUcC8N7XKgGbQiXQUh1JQDGWqSvmrbpC",
  "key4": "2GqQPbVFv2Hmimsrw7W9ut87XNSKiteDgievPP51QGMceop9PsEBxjqk63P4G7vRFgXn1EnTmUt9MKu5gLogsXGV",
  "key5": "5uTFcxKSf9WnnwgVjupUg1WUc1JvppS4GSyvDcSCtLoVLWjWCQL9qMzWSHsKar6i1aSNMvse9jHTqwNqyXBhEBgv",
  "key6": "2GM1okmL3uYf3c3iucAkYde9KR3iVCDaNMvBNG1TLSFQhf1Z1A9fJYDcft5MuvtJBCUSTNMMXDnEgtA67Ku2C9z2",
  "key7": "zi3VtHmds67cEsURLLJTbBsEmUdc6ddFdZag5JojxsepDMCfnu64oMW4TByGtKB5j8Uq4XNaY9ySm2tPacvu8aQ",
  "key8": "62SdreiQQPrbtbJnSoTVY2ZoLt1b7N3QrwghnH8EU3cg9UVhtn26QxFrMe3To3X7XiK82pTNywycp8Si79DXMEsH",
  "key9": "4T8tEtuPgF5kMzDnMVrnrpLGzw4qc1GdCMjgoK2RZEpUqkrKFDr5VzdFQQiFWnkq3A8G1AgY8vaS49y9SZXruy7J",
  "key10": "4zdTde53aWosD2BC1xMdVYvU2s3RnTrg3gA85VhtdDiqCGX4PdXdnk9VP6joPat9QXRoTrE41h7NKDcN3A8MxTBu",
  "key11": "GXRvq8D7xnZzw3LXmbboFbUHqyaSJ3JJMcbhVBexrGqbgegeA5GSpQ2Pp4sUtZXg2VTMPMTQ9CmVQFbqeCbyN2P",
  "key12": "3xTA5sq1DdkS94UynvCLyt4JMdS6nw3ywi7K5gPLQrVVPEyKp7mXHkSBuATPRLsHPnR6Xq3instKZQttzouVQJzq",
  "key13": "5swtKsWT2FHWa1v61NDiskQ5pEoW25du3PPuPvRJN6SXtzkWW3DoSUiFGbmDRDRSqvCDyy1Q8GVmrjhxDa5rZXvY",
  "key14": "3gU3xEHkJViuNVHMDh9HX9A1FAJbPCibTuZ8ZV3zuFbDTmu4fNnX5HTGgVoMt7YRJ7qHJj86DfAZNSSamFqH5KVJ",
  "key15": "RVaxJUYSN9T5dnE6tJUatr2xL2t6dGVnzWgp3jt5epEcfabJGe5LrdL7zShsuwyTik8z22WYHeKwYx6czC5E4KS",
  "key16": "23f9xseKHCJdn3zoHBB3nffwswo67bwtJTNRy5ppSTct3py8pnGoVhpwdwi1kpZ7xMoRpBXxxJSLKQ9hSychRmXM",
  "key17": "3GRohkxWPosEwcwJv4XWA2GJjuhqTtLSGG7piupvLVRkTAKuoGvYfHmVYKv43c6dFRzAMk7CYnDdENiJvqVw5N7x",
  "key18": "5qZeME33xvd3a2yZf1vMJTM78Ykp6ngS7NgBhVjAawtAihinJ52byATR5LWcTAqiz4uG4XJKzwcMqfeYgDS2ATh8",
  "key19": "5PzmQ6uWhPLrxBrTG8ubD3rXm9LeoGyXSH4RUzPptTdUxShXBed5yGoW6wTqrbF9vv9C1hL2DDfizPvreUeaqxJo",
  "key20": "4VYa6yy1MvGur67fTkzY2srV9jJWWEpY6cTf7T9odTeshQnHCQczcDwodzYkKzjdNFGNAJXLZCHG1kDsgG8BQzkK",
  "key21": "5oqRubQfGQUaXNMAmxTswnddjFA87JhHjsxYfJeRjJnVgP2x5GP6heFxN2sU3JPadk1bnhqQH6LiHPGHnoVPAVqF",
  "key22": "4JWeLKfQSPRUJXso875MmvF9rJGFmAN44YELHmyuEi19VD855acHUVm1any7STnbFnhUVdPtrTGSiXEe8TDh4bg5",
  "key23": "DZqUdDAZJxfAnjwFXfbrNNttRJ6SbHx7sy5Djw2u7sWcVvYpxB79YDUwFAGh2GyajJadtgBwAw3bTTpPDAAUXTP",
  "key24": "2YfkpnZVAS5BtT1wwnADT3nnZgkmkhbRL9qPSPaRgLU2o1HRZqQ77YcjJ4hpcC755YUHF5LXL8th3nTFvJ39giD5",
  "key25": "21wH2U4Bnj36XJrcyZ8U3r9QZmdq4mF8ypcMughy98NPxUoxUdVkskYefEr4ATu2tmdixpgQL9WeaDEsdEiCMgwc",
  "key26": "kgVYqR25nhUAqJJEjdnj232AGzKz8GH4K84MFszH3Pvd81GNbKM2rAJsNCXPnu2Ncb3x5Z6ja8hhV2Jc553DpnF",
  "key27": "2WepNUFc9rfWtta1Gsmb3dcg2xnKiyacGwoqPBaaCgSQ51VjRRLPcxfvMJzybeJu9YmjkFzSmC4sbXJ2BPuopqzP",
  "key28": "5sXkFZMbK9c4K5qoXAQa5GtxpDvgpFsXr2bkafPHJdzbkdGuqcMRWpzg641QUYg3NtMU5K7mqPftvuxLkMPJ46fj",
  "key29": "zKsm4jAYoMmLngbFrEGqF73yRsaKcMBApZPDSSudmh9caA6ouR8Y6aApHriUb6b3aXRTVkn7YBSJXakh7PENUGi",
  "key30": "3YEt6PzppNfQiXiVhNC5MAbbbjS6xCThVy1HtWx7oc5uFXGnSzPqJeVCyfahJZ3NeZATrvxuWzxQcfwhCpRxg6kW",
  "key31": "2FTmgvKWZvqLsg81YbRo7XrNeGCnkaPWuyX3kSCPfm4U5XS8imMPve2qbqbqg6paz5WqWWPAijx62cQ9HUQjGuyr",
  "key32": "53vULzBakbKWT6ra4jVHohNFXjm1ZGV2SMtuw4TuYUi7heP8bNLeKaJ5HGqkjygUGedhMrz1WSvKkcKGjTZQL4Mw",
  "key33": "oKZyVktvFjeqCtsMuSvrDksPNaNDofgfoXUTEbcW1qhb1Gsgbk9qhQ6nmvqZB9HMUE9MqE42F5uKK2PNhX9yzYE",
  "key34": "5B8Yt5ayeWMaRNTKFuaETyoJYpMNWb9Uwsq8upPHSVjHx1H7L8xCL3S3z18H2s9dANivB1JtNCAixktK9k56DG2y",
  "key35": "2u41y7Dkka3mmbnV1LS6nhtGSuWNuPJ3V5VBMnPpcwSReqAfK2uSqJPeTUE6RsdsjzKr7PwpPGvUMaTjMQmgw5t5",
  "key36": "62iBJVbYFMdJkynRfDWekJB6oZoM4CqGz8i5Y4KE53TdwiauACNjbqGo3nWUDLnowqGrLZ4Y6j1DoDf72hS9AV4U",
  "key37": "2KAiKjFss5PvgyDPPwGEtSmuXpmpbtmnZydZBgzj4BuiQuFW83ujBqRqDjdJTsAR7m4FDuEV7NeqGATxpZhekv9K",
  "key38": "Ve76U6aiZ7jQQieqXW8F4QTVHRp2Qv9QteyxoVEEpVXPrfPgRASwp8z1oqHa9NT89BLSMDmGjYwFUHuRSGgs8xP",
  "key39": "3UoxLq8CJ3kALALZL4k6TcsLdAN1UgohYxMwBbrNToFcCGfCCGe7JnEHWPQ2HABrkJvgUytc2eCiheKvRSeh3AS",
  "key40": "5xMJeR1Z82GEsTJNxan3KvydgA5KSF8xY99RHv43FkFVXmcMY1vkWmnRuuVWP3XRC9WYbv8BJ5W1ZchwrMcU4kf3",
  "key41": "3fF8Xoc2uF4EW6vvbpGsGeuyTcLNGqTUPqEGzyB4XWVgAazsb6C1WHhGCG3edaXWEQMRenArDmLro8EEKCMfSRiS",
  "key42": "4GQjRvNAxGA8chkGbxGTxf4uzjWZ3XQXLpJNYngpF6GkKLk4Fsb4qL4mWYem5t4qbo56Dw52DQtZ9ckaArmYALiR"
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
