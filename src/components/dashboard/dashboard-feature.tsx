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
    "5VJJXNZwdVgaM7UY9MeKYbyknft35hNANL2fe5abRw2eQerT57LNUTFVove9h63Q14Bb4jEuy22B4XhE6Dg9maUi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wbxbG78GWDcMsPzsUpUusNjBnjkNVFvYW83V21SDsdRc2iTwALnLHmf2vzWZH1LipC24rkg91zsLUDUP55cWHDg",
  "key1": "5fAcgLATUFpNmqeTBcFSnnGyhcVJ6Xiiw2VETExmuUUh8B4zRSmoZw61DaT9NxJowWXbesDpqj6Y1YYj6MNgrGg5",
  "key2": "LghTKVZr3bx5ikAT83TM8FNPaEjvSyrcL1SaYy2mzztW6qLaxH9EMmqQMbMK9eBn983whHZB2pzHyv1m7NxWTbg",
  "key3": "3atMzDvrfbTaeYYcjfjG8uqgBbbtH3Pgh7sgF49AgkQ3MNNBxsMaiokwqfUsPHMqs6zXQvYsRGUGB6kZo797Thcw",
  "key4": "2Cf5fFpRD7yFCtJXRFRyLaXZCrhGqCY6qWL9cP1WAyaoe4UPzwiaiWvoM5FBhQVcgTrEAex5tjEaFRDnyaJhXd1n",
  "key5": "55Pfn6jBkcCguhu7frqXSkV5pzyWXXgcBMDWupAvdwwsUPZmcwQoqoaQw125qidRA8Ct18MqDBuiMmdD34EXJA7i",
  "key6": "3CaayEJiSLQRkDwBGNXz6GcdM5jcxtjYAa2ba97sFErNTc9F31Ys2KDQ59dbcPg9QnzwUtBGna168NZ4mHe1sv93",
  "key7": "5q2XKqQhgYnkmanifmnA7RbCBBz4sfY6suF1HeerkMz92hW1MjWYjBFPFQwMpu233kTMJijiWZuTmBnjGKtAtFzo",
  "key8": "2RmawYoffxKtqa15hAJS6XUb4o6s57pqgSjMFRsHxcNuP9WSGGaQXjXAypLMorQqUeGCJeJnhjoiMHrrkzMAnWrM",
  "key9": "37AC1JKGUPJXKcz5Jt7A6LfKb4RvvNXFgwAWdzAqN9sUZrR1shkXxAwgoaDpWDetPCCGrRfvWnGWRYThHoHeT5XV",
  "key10": "f7nHjoswEWKkgbpyA3vTNi9PBvLbFZxdCvTC85sjAcg4kN6Qi3iLPAm6dhGtyyhK9F9pSq9hrFb7biYasuHBeF2",
  "key11": "34JjyVa7EbjQkxCzcMujakBcA2cMUq2UTsJWdXkMC74WdMu7Q4vmRqJn93Rsp5rh1JvEhSfKX7GHJnTpVm8NYWnD",
  "key12": "5WGaVHF8jP97YGXGWMxpfYfLsg9khBv1fC1Qjm7XbrXXZ8HNh5Wynp77ZKS8cvzx29p7msxq81cq1NocEsyq4YfQ",
  "key13": "2qbGGXVgj3TVTPGQU3iyJTXS1xmKnd48GaE1zcBWkLVFxNrrgaP9Bi7fH8nXTfJTxeyjeXEgkNRFj4VgQofEwFNK",
  "key14": "512amKUkUHkXHS5hxAfw7zY3UozBFxAHEvDUW9wsFqVbSuXdTkpgfrfjn15T8NwuMCZjjL8GChqbu4U6X5ze35Ci",
  "key15": "KK26awKXAnFhuStKWxVmx8KUeLdUvXpTVPdNEizYQt4AqVVnuWt4kfgDbwVWrZpV3Yuc8FLSXdaH4Sy974ygNSV",
  "key16": "5NC6hVKrv2Vfh1j13jJNysK7NEjA7WFPaoEUHAwevaWmLL2xUrVxK4tAtr2JuLq4ipuCmyLyGo7yKhYhEZ4pJsVA",
  "key17": "2o2VxHe1AWxw37HFBHxpnHcjcgNGQd9qem8DTzbNwACwwewqPR3SxGtuYzArwr6JtztRTUHpy8sGMDgRot7dazB9",
  "key18": "4tajpLsuqy89TWkHhRyVbzui1MAcEQHsWBcNPBKf6azB38TegSu7YFwErRREnin7yTZwm6XXQpso6JBd9rLT4XD3",
  "key19": "4qg1RTLxJ7agHbtAAZEjMR1QdmyGc7Ukc6TGxq5LPAQNTuZVcBTQH57Y9EoCYRHkwYi7w2rFNEZd3BoTUMGRFx2L",
  "key20": "4nd5RX74iuJTM1JmT9u3YDadnk73QKnAZMwSXCmJNGKYFmVwFdLmaLSwQE6rCXrducs9aqChwmHsqrYSKyabTrPo",
  "key21": "2zgqZVZtkqQYkjFHaMUi9yQ42romvPCR4dBUXzCrNZV6HJHv5QP2xeev4n9fufV3VdKpZekrWiooFtKMNQLnwMpR",
  "key22": "4u3QEatCJnPHSz3rjCG4UefekiTZMWa5gMXS4SDVrvgyNg2VM9G26Bccwjw8R3VyrEqRwUWJYFvgkvgo8zAMjmpB",
  "key23": "KUSb9baqUeAdHUryUW1L1bpzGBe8FQtj3fkRNezQbMM31MYCz9K99XtgExPEy3ykachLg9z7a2oq8Q4negFKiGb",
  "key24": "3UL9gtBJidxTZ4HLN2YfFND3k7hqZgAozQKAKBxPSVYLFmJnFzKjUJ3FGTY3RWA6QAFA9ELdzXB5CLmFi2s9abaB",
  "key25": "61nJ4ybMrrPn41YCCAQUna6PvT8SXQ2xYjKT3LKRTrAuGGboMStzCRbACNYQKPPadg7Bxrvf13WPcxHreSG8ED6c",
  "key26": "5HsniibNXQo8FwtGMy4pkBiT5TSBxVPeV2g3WVSFFQ9xPNqDszBC6g7FSxyMnwt862omczH1sJctpuETwf6dnd4T",
  "key27": "5tqkZ9zriTn56jUW6c2DZ6oQ3ovfpJuSDYdvi9McNgXmJG1QemiL5Gq8BrVPuTvhuxLhHo6WVbFoGdj5b4y5rhi1",
  "key28": "666p1K6Sa9XpLjJV9Hu94Ef4Wszc7LqaM3ZL9rqUUgRboRBzA1wn9ip3dqLq6dF3NyHiyx44xFKQ9Wwv4QKup7gL",
  "key29": "uQWLQxdTApwi4asbXY6gdU8ELVyJfLCQu8oP9TmrxAkdsdFCw1zuQjsvmkcTz67Qg7XF5Xh7TjkPUbtjeTbJkJy",
  "key30": "fz4J4LwbK72PBF1w5TmHX4J1Z94GEEgdeSYFWECnHfb6a6kQbViQJT7M2RPLXSi1tukpgkRmL9gcUu5r1NLL8tr",
  "key31": "3EaRjc6mxzBMvkpD4fXwfvuLk6stxVW1C16Ub5mzeEGmuqf3omUBbmdpyECKaUHbB2Nj85y3zcaPzmVzyRUtuX39",
  "key32": "53L6ZN3iEiuvHjGoToqGaicRV1wDXi8AkJhMPRDtTcMCv9GCGRHtLAZgr71t1X7Htjysx2mrErwA9cVENQvFMBrg"
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
