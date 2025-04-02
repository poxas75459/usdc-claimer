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
    "3zLV6xopMWeKouP1Mv8XLvxxAm49bDPHGvK5FkpTVQAYPvdyofzNVapbUrw4KN9diYmY9rzjiWBAnDR1UVdaHoYE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jpJThUhYK6TBXnVwcgx6Y1bDfVFt6SuFH25YVwPTbYkwJjiEMoSwmy8dsGhWWihMCPNNSD1hZzY4Z99j1cE8zWt",
  "key1": "4RLCL4tQ8nxsxnPXxvUSzJFYtEnyPSPHjKJwCkvn7kaBRf4UMTrjKPHFQPXruKwi2LLcGuDzEpUSBfdQ2CCB7jq",
  "key2": "4zrv1oRr83a34DAp6EbSMT6iH9V2AEwi9TshkD4YHtD9n36gc6SWeSHa4oJsAUrc3T4EkBrfu6BMHEJnLT7jqLhN",
  "key3": "5toCRvJDAXBetRY68HqgfScRVayRtEPRM6W8E8H9Ayj5tNuvPgAJHsodsR6D6f8S4Ls71jiPSov9TaRfLsD2v3jq",
  "key4": "2CBVPQGAciAC2ziwm7EhQoM5DgoqA8scpcrRFwu1WApL57WS3vjCNr69wi1sYQdffXKdMRvNgyHVjtwHLmD7UhQV",
  "key5": "5LhKpg4eoSdjSq94ZAVRNfLuh5n7GHrmqonP1nLf1AcWbkPKz1p8W79QYHwMiPxoDZ4FuLpskERVF4LP5isGL452",
  "key6": "5t9Fe4nbMSmxYMEzGF7qwHquHoR57gUR5SMAxDraC6RNXyAvWoLBXgQJPH95qFK8T4nSP2CkHF6dy9C2p4y7AnQJ",
  "key7": "2WkjEYpMz3Cf7kDTbcYPLkCQnebdh8T6NuLHnzUzewu9jSQW6hcZr73XBFToHsDuKi1kQcnpWyFMLijcEYkknm6U",
  "key8": "3KMqZtnEYSqrR2pgN7WwVeTyRp7BPPX1ZDz6sswuzSjuzenwqBLMPejWVNYtPdomEJa8TX7GSNN8RAyNJVHMrFf3",
  "key9": "3RsAobKF8ztFbzUdzyyE7yHMuHUyn4t8Rvn8fkFfxMRXx5xmAvCdo7vHgP2rtD2BRfiXdigiK5Cethgj25MVkwYm",
  "key10": "5udAf7EjnsdCeqzNZ51rrKGCJQGx43mEir58CYT1b2ECMTVrayzskHHH46dMNX32SVtofoxB931XeCYD7BB6rs2p",
  "key11": "2JxLjsCG68Ak7jDtMCNdM4DyiTvv8GDFrp1pKjT56nbnwSYQFqt4ZJbSoToK3AHRSkvh9VJTnyHCuWmV3f1dQc6t",
  "key12": "5V6aZQxxCPdjiDidP7gpaYRuXBApiSeusgA6CiGk5mjGrMdsPTSZw2Sc8MTEbUPNpY6Tny9FmK4LMgpJaze2DJa2",
  "key13": "47rSXVW3XighdLxJwtTecWvESs9MN64P9Vrq3ACnQ7NGtpQziGxpxZZX8drZnMtyeV3KkhFeJMFcfQXTboSr3vqL",
  "key14": "4epmeEzgzbD49oEmQ9pvmxbf6GizU9V3Vy5dusd1QVHpAAuUfdwnyjXs1a9khWUStfEEQwFKs5L8YakcEGdtcitd",
  "key15": "41A23Sj7t5ffJkekvJTFiZkMQhmds9MKNmHRT5SaiJ8rRWpoNS3DViX7gNdFv4ZFJk5HSWw6F3xtVHP8Qi45tMze",
  "key16": "PzHp2jCUiTH8r7T2RWco7bckhcZDE73oQqFaoCMNjxHNajSBwuEmmgPzYnXGRdbzet3GrPdPvPQi24KmHwJFR3F",
  "key17": "3h48v3bhAs9jJGDXdkyHwfwv6oUUqJ6hc9MFcRYKp9ibf68yUdsS3sKnG2DBk8Sv6QkfRrR6bCuEMP2k3d4QeZ6D",
  "key18": "2jCuef2kMwwWSKwsCdsVpPvyWUQ6gJQEKFu8v1pg3JzeS5tFRxDU3yZDRLGLXVFSVyTwnqSZTTprDFJ2Y93ZZeQ5",
  "key19": "3RW4nQbYFmwUL3V5TJuZHFvFitoVw7a6JsK6jrt5jg1VeGzB6QASeakFKrrg5q8zRFXo9K17YZymZ7CFHTkqR12B",
  "key20": "2DNs1Vf5N4Eis4Vpbc9PNTUVX5VPKC43fkbhEqc24BkjaoFBXTevmwRqFhWuBecyr4PiCEin45fHiBBnNbx5uUrN",
  "key21": "5z8WR4h2jCW9i6Do7K7S14MFN7qWWviRK5ykQQF4WuV5MurnGv8yHfq4ehps5SVCoTaz1xpCsJxRiDzixV4wxrTk",
  "key22": "5SRhXF16EY5C3nuSbEwoPzomJtv3qVyU5rAbFVf9jWwzifLCtFZpiMHHiVJDguBfAsRfKxaXfGc9KJwdxXJbDgQg",
  "key23": "V2tgPS3NKN89srQr2E1pWRYHcp3t9KPq4AYep1hGhJozoAZqefZ6mMaTYQWiVGeSbHRwiDDEG6HW3R5nYii84eA",
  "key24": "igaJ3Djn1XCsEHAqC9JFtzieZD6wfh5r7cZUUzkGQmkq6KwT8uJyuU2mLXvuDPpT8NoT7HyCbDh2eQfppCHriKg",
  "key25": "5wvS9CJAwcdrwqZQxAU1Hdt1j8xWEeoo6qkd7GY1JVEVA9rXYtzksDUEJfmYnReFSZuiWUyhgMjmw2kkzmE8Af2j",
  "key26": "4EqZNPxHRQhtzHKjVbpHcrggFFjgwjXiDc3h7991NkeAgGrgKsp4QHLBj96sMVQeev4KrzV8inMfrKQe2DzLcArR",
  "key27": "53TCNcK3bfy8brRPaK2HSKEukRwqCf6aFz3wERhY4VT1W2wANqi8AnyGBB8hjxWgca52FwwWaEquGrVRwXaqryCa",
  "key28": "38Ur2ggzkfuMypN4jajSjkeEjFigb17EVzQAQ75DPW9BmKZ75jfghP7Qo3to76mXDomQdyd9wFXSEGMsHcD89b36",
  "key29": "5ueachHcTYkEbTRhDtE8WpVQDM7JXPzGtMganDL7aP2E8Sb491ywvCr9B4raUi8fu71RyzHhvmRvixQrRFfCEMdn",
  "key30": "2gDWFPMPbXKamRmZXSTHW6GYVSbh1rRZzriSvfhBqYPPVRdT8oDqXNChTQxR8rRBWzjWURpMXhZXvRABTAT54BKQ",
  "key31": "5NybpSYovKXkdDypGYFLjELkT2jQscvZMS6CRyocurRjeoYdXh54VcFbrttnX3xxdQxMDKpKRP8j3vzqjfLEu5vs",
  "key32": "67AWdiACQzLDsJuQcCyR6W5jDbfwTe19HVbYPA9xGSdjN4pQFF8Wv2cnrNvHPFcFKGqCntKMsVMur5yWrAEMpHDK",
  "key33": "345kmg4y1BtkSonVWT81jsmLG4J7JbawdWYEqaK8QAB2Pe66KLTY775wg1WxrhaS1yxfsZJmLTK6nLUTsdyvpn9t",
  "key34": "3k12GTEApHkmqpJomMVW2SXxXnahnbzutWssuJdHHcZ2Tte5vNmmK6qcd7QexGFCMrFNspKggFaGYbMMx9RAKXXL",
  "key35": "393mAF18wfvq4hqYovAC5SNurPM7VBr7TgysjvNkT4kvPR675iKp5QQaPTD2oWrK6QT9VhbKHZYgeswvNzYtmZsu",
  "key36": "4VcUsoFet7D9uazNKGLF1tsjm3EFt2yjJSqDjrB3r48MeeSkp5nkPyy7dVR2TeGwKTzt67iwoj6GkKRTMwMg44B7"
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
