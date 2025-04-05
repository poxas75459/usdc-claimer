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
    "4kLe1doLLEVXRr3FkLeSG8knu9ZTK63YwK6Fkjyna9KjK5Vbx4EVBWhxc366Uz8BAJgrW4iiAUJzsAJRNLuszZiY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HXi5h4W4SNgZvtiwrB62Nr8ZManm7mk946j1BrKZucqwoosV8jFiUsyJHXYimJdzfv2qWMkPy6XQZf17jo4ArVc",
  "key1": "49VUvtZBcEz59EgJTWRa7B8krRk4f5DN2yFeQ9yZXZjDY6b1N2CKw8szqzFbQ7zeWJTm3CPJ1XJ9YvzbTutvPfi8",
  "key2": "5wS9YKSsER7PVzez9qN9TmC8r7Hraewi1pVsGNkAUfwDv2nLPuW1vwVmjZEHG2sJNfuvMCfWk4RbH8yZfrZP6RQN",
  "key3": "35kP29siAdBv1G1VGCtHHn8KdfqTuiVANoHTgRkATz1neamEB84u32cTKisGTCS3Knu1zgBN9kTzX8c7XCPyCL1U",
  "key4": "VyMUbzapauAe7xjqPDndQGEC5LcnEx7tT9joLbL7D92PpnoTK5zhx81yBfc3KMUThnMWvdkozV8tia2de9DtB2G",
  "key5": "5ptWDSuAmCQHvJ7QGTHcdwjNixvkX9fkSQ9u1rwkBcw3S4nkABAmCLv5LiHejdSCbWRYSHuBtRzXn3jp6Nh2U42b",
  "key6": "2FvoERf6KNBgwBa7rqsinfwe6EUNKXhgzPECts6brM2kvBTJwhn5k8LQR9kFeigeSkNbD4LwqUF65rQXdRALaZ1P",
  "key7": "xb7UbzPDM5meK9aBdB5tx8ksRU8Hv6omJE7FkEkgikLPWTnXD5qJDk4ZXurwBZ1vvV1Rtg1npFbWZLb7BoDfvsz",
  "key8": "3aqiGZ5AhVqx8d8i5PM9odBGLDoXy2HxQCbVdKjLhCaMTrZ5prGuRZD6BRo5QDnzktx5sdTg3PwCJ65foJZt3XES",
  "key9": "5RvjWf4udg1dffuFeL83v3HAzWvtdXx56C8Wy32HGqKHUDF3eXa5A64rVkSroCkFthft8w9b3dDSmpgc6sjCbBeU",
  "key10": "4nQTKKxZf5W6SwcPXmdJdAJGJtVH4LnnhNbSVraPy7mRJfEUjm9CBVxX4mARvpy89L4QR6qQhPGGCJKaA9FJhw2x",
  "key11": "5GrR35gcSQX1m1uN3k8tEmm33bNH7fZbdVPqxjdR8qvUfrfqDy9dM52jogM5KLwYdbCqgdm5wGtoErSqjuenzPUa",
  "key12": "2Lb6yJRj2n4dYzTNkKusKWbT9YM9rVk5GznYfwFRpWqNFFxoa59wzjbyqzaTj95c59wWzCragaE6SHLiyUMZqL3w",
  "key13": "ivvPcFspJGJJgARCeZnVzqDWsgkJ4Ep8TbB3fL8S7zMhBprKX9cSsbgHSEG4UnWskzGceuJmVpaqmj95aFsgXG3",
  "key14": "5tGdXvMDJa6PRXxjZTemDoG2vKemfqoseZWexvXH32UwAbLMJYjRUdyenxi6zvScsAb78CKziArcMconmRLWaLcj",
  "key15": "5fLDxSvYrqrWpCwHmbzo2LhzBe5NyL3qmdpAXuyKSH33kuLht7VR26XqqmFZS2teUgq1Pn6GfjcTk5PDHyBt5e7c",
  "key16": "2eBJYbGNSaC2HYa2JLid3BYfpnzzdFLrBuq4UMwwTyq3i9kUTCrvCEoe8C9TS71Cv6RDkLyskhxqzQsUjgjD3kYp",
  "key17": "x2WENSuwqGD7euzQFfKQbdVd5dvr68AhxrBcYwz8z7DAHScG77CL6KgWGtXtxzuckMG7zEVNN1BDyNbHgrirjXV",
  "key18": "Fj33dZMo745FuquwwvzVSi9tVzWRfFa1ZGzX6SVpjr7u4iAKzdHoRsdbPBDDWDLrEgNFSP2Gi4g2BZvYM9bo34w",
  "key19": "3k8ejvvScChaoPQ5H9VWGv1xQbuUJSFYL2tuVPKCopk52tW7TAK7zhjTiwRYpuZR43hWKQKdsqGjMbFUmFfAxa2Z",
  "key20": "4qRM3pcgQ4MHVB5DEyP8fBv64xCTjoNzz2zmV7HZ4g3ypHHTFcofECaLMGB12roDPWsNJkW9Gwa6rMbCTC3XeENk",
  "key21": "3xZPsk81nVVvAvaojUa3LsYL5yYTBMyzYMARBr35acz4vhku3gSrVkhq4j1dHo9Kgnngp1RRnZcNMPx8K5CEgLfF",
  "key22": "2gBmf65fjd3yzJmK2T2bJ6W1TwwPpcw7fSMbo1b33devnR2UWAr98JQ4PCC7gw1za9D8eush3qZVR9xwKwNCYGJW",
  "key23": "2SSUQkqtNk8VnsBxYnos16Um5HBgqo79gSibotn1iWumWTwusb3yE3vaSLhYoEXEcRQTLkcrVAurGbkipc9pVpoB",
  "key24": "qhAfQxquDysDN81EkRD7SBfhZcuBAPTgNVTSBypqwha4iVpQTSEMXrr65uX64FWGEWLHSvtj7rbm44Pk1Fsz116",
  "key25": "2KVHd5PdkJs3bkkrA1fMufMYTxhozJNk9iLHp61GRbpJkjyhFoDh14ESEd3ccCeY21XSWvvsMbMyZEhdKPzhSsFY",
  "key26": "4kBTzokpQRUvM4JevLPyzGUTQ8scwRB8sdqeXw85hmpf6ZZ4pJv4jCkQBv227dX8SCNvCMa14kKqnVrdvD1eB5jj",
  "key27": "4mG6ZhSWskFyokTRTETU2yvAoCEgD4v8PkDc8VaxJQrZh1Y6sVjfe8xTnieApAdDiiKNCBkZ2ysVX33RL6PeWXTa",
  "key28": "5AVBU9Sax89QU1XzkM9oURVC3SKRzoTMhsFPGRYG23R4eVkbquvuRTopUGcrKASHL5EogoV9x64mxSUG4jfQnusz"
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
