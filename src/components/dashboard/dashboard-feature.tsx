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
    "5ztir2nQM2fwbgnhutucRNFbgrKJzwyrJT2u3UZKGM68DDoYZc6iZ9mHfZrdcfzkJvsW59obYiJzLDpYfEcpCj8L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VeyjbBWRsDZyqNkzv4DZ8dJwmwEUnx7KS8JiwYX3jKHaJ6YqjR97x2CshqHBbCfMgwRoqG7QDbs9UghPSB7Md33",
  "key1": "2c5wgdxLZYz2iQ4MFePbS1iDbxYuL5shNQC44jTSd5UBYv6EJaDRsN8pjbfBAJThH8AgToRvUhKF3YDzwNoVScTu",
  "key2": "3qDsfvvQkfdebrkWh9Ds3iPDuxd61DHKeeHKTFEgnCUa8mJdEwyrt2k5LPtYHuAMQXG8yR1N3BBo41EBU8nRmbYX",
  "key3": "YF3uRmCMsiQ4E8NrzoTnCuqUjxJDRBdcet1gzYTtgPSyLF1tettCznoH6dxX7R3cFDQk4nQMy5V6zkACaveMrpy",
  "key4": "5g63BG8GqMCHpCFJnpMgNwVUa9HNcNuau1DdcmXZ7yHmM8bmSJ2HiMPULHJA58kS79iSR6g3gArPo3Tro5JQKTrr",
  "key5": "3Myzb6Hnd1gPimkcSpUeetmAt7rKSQg6zZVEemAcN6ZSScF5C9yVHhigRsNcisCnVGDShARqTfahFXg1xFZuSvMh",
  "key6": "4VMJXk3zquqR16cVEmLFF4cFxFp396GD7kkA176p8xXurmxbxfw8vmKfic2a6PQVfvmwf9aZmnCRXhVpkzXc2EuN",
  "key7": "MXc6wTTDMuTMumnPdQyhz7DRg6fPZ5V1DZWn4Y5eyHiUDZMmimmNgBXFCVzJYPH3qm7Fs52K6nct5RUioXcqqtB",
  "key8": "ZJSWSN19ECj2n6WqPWRDGJ9ZpsKqfncA6V6zSeTLGbaA3CnvgkYAF8Npv7JZBR7Mvy9Qra7VB22VzNQqUmX94JD",
  "key9": "2Hg5jxowskTe2UhqYBaZBGEQHW62r8AddNR1cw7aXCV3w2ikgDj2FcBHAf6sqF1L7kHjZQXWTF4JMtn1TKBBDmpW",
  "key10": "3kwcmtoDSdsia4PSxsYw47kaufioVa4kXmEVBrwWNpNeEELeKShwYjcaSZWhPisky518zk6CdWEoJMJBWq7n4aAL",
  "key11": "nzmS5R9NdPfZ4Vx9GoUefyHANmv8RjvyNPwG9NQRkYPPKqw8hLqjX3WcBvsKU174EnWLgvZHJXbKXQyrc6t8MZS",
  "key12": "5RXkZdwdcYSJPv25GhpXRkqtJxKEgaTbmAME26FLwoivRc4E6zvRUB3wJLYCgNJWUN8AqC1SGXNTcM6pB7FSQ9qd",
  "key13": "HRYxFKrTmvWp4RihyUgDTxtkbRrB3QM36QtGGShupD5Jxdvx8xmFytwFfJovzf7bYXwgjzuc8K19WLoQs1PE9QM",
  "key14": "3Z5fF1K9jESsS26aMGgGGLk36QmathYYA6CnCg9NbqTTuzmuUo6PBzcJwmEqbPUkxAa1AzqgEfoycBuEsyWxiJjz",
  "key15": "5pBP1XQ62r72YqsryJSNRszBPhETQXx6ikg4aWbhArh6X7UwdfsnJ9iZjB5cpyQcPdaxR6EMjVFzqQ4VKzzR14nn",
  "key16": "4MarYQPW3tRNfZ4k8DDSFSw5WuNVjvqYLTCNFu35pHF5buFduXheKpzBZm6H2zabfsJTRkvQjPAZufTimPXWrNKS",
  "key17": "3tbQD23SwQwwmzrB36i7gq1ZNzxoiZgsUukor8CgsgY7WDfhhQkJay48zud2L6SXcg1uiqpEiNTyd6aPbEurivGn",
  "key18": "2oaaJZzsVrTfCbUS8s5CmyjDcubHta2KkJsYTJUPpKxjW7XbC1HJQu2NNNmrbMe5Juj9FEEV7jn2RwnbrMzosNT6",
  "key19": "JrtiaT6hPfGW9B51scTqetA4drESHrR3RJnQZKvMNGK5VkWxX9bXPzHKB6VBpLQ7herFhZKjpC55UB62PMCLV93",
  "key20": "5Lw2hpKfCTDek2uCMTUKnnFtnfnHr7fUax8xvP1syDLdtd1gGm1XDTSKgj5ic6EoFDToeEBHhd4dszb335rDV8n2",
  "key21": "37c1vR4PPy1Xi9renK1GeXmxmx4Rt6U6ySj39Z69rwP92hLctijDxQMgnMHZ6CQWmaoLUZsTN8HeAcREatE59Skb",
  "key22": "3Zxpwq72tbK9toN5D2F21Qz27xM7cD5xxxuhMnedzGnLt1hbyJkmhirQjKY2jkAd4zAjauejypJknHpGsbYP8jSo",
  "key23": "yuUWQTs2RSR9BTgzJV5BXjGVkaLpHAsi56CxdDh5mh467wpchJiX1jncefP91sE8at4sL7X4jPwqhzWCETbo9qK",
  "key24": "4xYUTLMkf1Qj4eLx2F7DQYmmjJWxrkzjc4eSHwZiyxc8yqQz7VWCUUeQGUY6mCus6sHQjFFRMjKsdNpNosHHZS3q",
  "key25": "3Z2capTPcWsSgA4VUGUDckzaSM84SuKuXZtAhmY58prRmGLpxygWLVNRHMGiKNGTjjGX1qswhNueAzXrgUDsajCf",
  "key26": "2TrLRKrzxvsq37JPQz6exMyYXxF53gQf9EcHpJtb1MDoEcukWR7PqdJhindJqUtBsSUUTCfFqF5cTmD6XaXqEiUZ",
  "key27": "2qdtPtPLhj3V4NbQb5gNkkfsJtGSbMws93aZm4q4GTNicGkpu5hQopUBknzABXq2ZW63fNu6QrsRBUmxLprbSjEu",
  "key28": "SdjmBWnpokE1KyCZ9NJdaESZGzgCvw52CA5GNhYmQRAYyuGL2HH3pefXvEDSsVA2mSm9vG9DTwpAs2EFjAfyL6S",
  "key29": "5J6zkuBAdF84oY3h3gBE2UxYRNfhBHhNWBtEnRQY36nDKSCBUn56NF8nU1yLwbYVaAP7oCm8rzahzoGW8x14KTu5",
  "key30": "sGm2B238jfryHFDsPN78hfDX511GV6kEQFPtid4qBJXnaNcaxCP8jDb8iq9hF9Tw55WViL2hx5QatLP5bt9ANAL",
  "key31": "pa7Z5nnV4jYqXg9kAQ553ff2G4guHebpVgnnybhs1VgJjhCsyg9M2owD8yxBEHwzbQUAB5Chz3hLxHVipwZmySn",
  "key32": "25gzpgGtEi1sVPzS4h1wSMVZByTFw6W7S8JCkb66WXHxYf4GVKFjPSEdAk3t29zmmsmjtR8GiXciFMDNbPASQjRL",
  "key33": "cr9S7SDwyRpjLTB4V8iFn4f6pePqhrL567AMbPVg5RT9u5js5kz2kwYjSioe8YBM1xM8YQmZejiP9Fy9unjZ9aw",
  "key34": "SrS9JQ7fonaSNjV8869ZA12Mw1UoWvJU1tryQgBcG8mk6vVKpYYDV4VAdKZM2hdunQ22ay279KfabbcBnbSnJwM",
  "key35": "2gLeAC5JGP49ySzz5p6eDvH8SKJRxnzY9tCF9VtfKWNjCfW9GUDw27GtVdmk339YyPcLi6erTZMvGGwJ2iXYeQMu",
  "key36": "XzbGxQ6qSbCYKCamo7m69uaLsmntAP5zpvd2xjr85bqfG4yEXjLXkckc1857rox857LatQwWCPMyYjff7CmrPTW",
  "key37": "2KEy18HkksnVdAgPgqvTUE8GEy3zGnqRF2YkBeCatubjCp4CNed9iU37vxTiP9uGHmibbtqe1reznHP6r7jLimMu",
  "key38": "5YetGRdA5ohQsSjfu35jqCryXRhMBXowNYVw92Ae1Hu6Ykaa6ZNcmdxH39P9H9ggWptzHLZWjci499yayQgYqdYd",
  "key39": "57UnzxbcPT5ZBGzgFaKyVdU7eDJh42SfkgoqgFxGQdoaXuCE5gGeKrXKhcoV6V7RQk1mrgLxZZ9FCDjDxaXM2otJ",
  "key40": "56FWsoChEAXErNhix7TsBfPwKoi4WKHhyDQpNMUX1kXn36MeC3je1itM2NiDTcFj9Mx4ivq7JzrZ24MAEPMa21ij",
  "key41": "mxyCcW22Z4khzb9ZLaGX3KUAAfkzSPRcipUCfTZPKX8EQYPVUkxaPNHsxLd6DvzKaDphjEtXV698aiun6vQj6r7",
  "key42": "2WaLcdUoN6KnYShVrWh2oVpUWCSVQDdcc3tdBzL51ZNx74H3m2Z7ZB2Cp2tBZWvqErPp568MEfenYNusGk5rrDQL",
  "key43": "3h1wVcUfM4Et82cf4jRVpjT4WRzZHeaSyUGVTdpMdBdhcPqEjrfN3xMCGjVzaKAQq6oDcq9FmbnwenzjRnYVzk91"
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
