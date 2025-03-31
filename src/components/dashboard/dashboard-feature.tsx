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
    "5X8ErL9kLrne6xHRZNUs7FujRJjH7NB8UTr1tsJBzrNsvKE7Mpma6ieqgC7QBvNLqsvDgBgFVwUjq7FMxU9UNncW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ct61CX1PobErZrfjn5ggLnimutuvhaUZimsP9q4jwy8fZ5SXZfUpFqsNe8hfhwqCmX3MLeCnqxZatxmJ7JT6HQe",
  "key1": "2A1eiSK3fbo2mfRU8FWDie33ogk7BF6o7u9LpYWaMS775nkv1EoH8d9gnqjcKAoDG3BgaeqxiMqCxveYhiffYbiQ",
  "key2": "3o3dKpUWTfeBsvcaepJX8ASbbJJBLcX5ApzUNFfVDZuYbHtXcdBVeXj3v5tTVJGvfiDmeBFbdbUdFKxUHp7oXQBe",
  "key3": "2Yf1SsTuQj9C3JxokoS1h8b1nWGGGCjSMHNcSRQ2aipnPxuo3kxaTtKWyoz5vRFy7poMJZC2ysMF1VxyxJHrnu8k",
  "key4": "T9rcKEvssYTCgpvwDKXMo2353PdDR4LT93ou3hGzKmzrYQDBQkYfczKb78ArSCay2EbijudHC5mt4RFLsET252i",
  "key5": "4Uizq1RsPsEAf7D1NoMXBJd8fcVrquPBavBXoSiHH8NKamnPk2m3w3DZ9MqRSTyvUKV56ccBqoYm5ATQfw2Vt55Y",
  "key6": "7o67AiMnoWG1LVyrL641cKZGFcGLtVPu2LxC2DNtwrZ9jjDr8RKCbvADt5zpRrkJJnXawhGQEpEMhrMEn6aNors",
  "key7": "5YPrH1Gk7BhY7WUEso8wrviQYbs8rxdcapZcdp8Qu8GwLU6GuoPs64iEUHZJgiCy3tWn5rAFNULRd2jnrbfTSAJ8",
  "key8": "RLhXW4rShKCo49PsAGX6dXvVsJmU1yUCMhnPKyzMLo5N1AdtRpt77dUY5rNiPMW73F7NdxibjFv56Gk2aTgXMne",
  "key9": "3m6NNg1MdWtUsjRS1pLnALKx4vjTjwvkjmN9cEUbQoZnpbReBfigjhP8gmoRbxw4xLis2nZx7UZTaATT6K2LkTVa",
  "key10": "UgQaUZKr65Mtyqn93wjuohp1Cp57jYhK9FoD9JfDRS3eNzXkDxyskSFmfb6bZ8mB4ksEniMuPxLrDYKS9nKqNgt",
  "key11": "vYPrnKcNtvpzzb37d9grbJVZEP729hgFCpMgM3TbE9kNrdJAkTt5YTXBFusHMwtcfTNaZgGMuGmt1eZiFEQkLR1",
  "key12": "5vWopNGkv8tQqvpNgscGj3NgrVgxuH7xkCFi1YwB435aKidztif7WV5icgjshPt5rAyYPNcNR2LgYq18o4VyVfgu",
  "key13": "9obQdymDkepBSvtSkfiXEbqewKsiQey8kp33qUD9GwsDvDhKE571i1KMUAKPuEqWaZB68ojRKtTSUXLkB6iu7JJ",
  "key14": "3WxCcVq7wR6UomWFj8jfT9uCaPDJooC7TNjS41vgUB8JkoBVoCMuRu8Lv8gvh2T5PnAuNkfEcLMEFR3KDiTCAiZN",
  "key15": "u4Ns77hU1qUGKd3p4eTCpSXjPMY3HtUivvnbx8JJoDPsHkDiZd2Jj476AXPtYEkKb7EQ5vGV9bM9yjf5fpAZ8U4",
  "key16": "53wLGTESMznJrt4A9z5J8sdnRJKFJmbcrwEzW2CcdWHZYHv3Se1WYJFd2qDF1d9gB4SS9W8ZbzKhNL69mwU9sT6j",
  "key17": "52pNPvc5U8b2TCv5fGp9HXe6igaj8ybmTT6cdnrcDQk3R8KdXbhCLqs72Ew2dH9haVr2NFfzeMw7VZi8paS5PmcB",
  "key18": "zDsfKq5LSETGTC362mgCbKaYq74RvWCchjJCv1vPSyR4oLDP2JM2zFsN3GCyB7oPeHki7terYjrga9Kz9NVGnym",
  "key19": "3jTHhJ1qTATe2K6TGsvJ53dKGH8gVtG8fAjTwGDX7F9P3RboqeVZuemxELfozGy8uitHdMHRhYU7YHQcmcXyLQYA",
  "key20": "2L5Juo8TsoPz4sGYhe5xAbReFksUHM2poHuN2U8KoSmUYrYqHbgpcKy3EJAhcaCSRWBpcZZVGVB2gb9YBFpaJZLH",
  "key21": "493MdYaP2M32Pbm47LTqWesQxFKEtTfGKLhQe4ChegRVatxxoFKVaWMb9Z2Vo9AF8JtykwxbQuMphhKfFfU4JHxe",
  "key22": "2h8rp1stc463RZDxz2P3MKqZBEQ7aZYtR98rByHeSoKE6jRhKE53Ui5Wm7VQf7tiTUi9p8tPUxbHE3G4QAA2fHE1",
  "key23": "3EnMea1tgJvaymHS3EVE6Aw97vaCjaxJewt9qfrBxdBzobttp8uh8ArHELL1tTXsAP1122WqzvjCpx4hL6i3NnsD",
  "key24": "2LjKe1PnwWaQtv9ky3XXCdoCQLXNmdcnmVfJqwao1Yos7CCuuwzFrYkBQmJGWHHA4aboe78H1qBpWHi1dmi5BaNL",
  "key25": "3JXkPWJnHH21oU2diyXjjLSwtanZrkEFNf3mSVQ1gCWdcgAgWdAKf3MHhCZ7QCbs1wPtoZkzQMbVixsneQLaFP6o",
  "key26": "3yxhQ6kjdWWj3D5Xs2WotfuS9r6xP8j3r6p8mrdq9ybNtLVrMX2davGWcDsRW3Zi8nkWP4h3F5DbM7d7SgZhseL2"
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
