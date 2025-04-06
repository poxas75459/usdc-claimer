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
    "36sscv19iNAsctd8gzLWoCULbRAYKuUXjonupFRBK4ZucpMd5x3T97DCED1SfrpdTbmcz85MQ7bqBNtVRzn5xB5s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cz2YUtaDXgStvUED3ZnpqXNSTNbeToT3A1GwEkDEk3foJNDpMfs6cQVbRxuguFTSqXiiPTPzt2BKfCEuciJVBsS",
  "key1": "5udH8bPcwPFtXow3yLEdb7j4cMwxWaR3aDqHSpkt6J1a6UNLgTdQHqXqMBwGrD3kQQanL6NimnuM6qx8bAr6ry64",
  "key2": "bZJk91X9kTDeR1jLxQYtsvDs1Pvb6eLcp8q1YgGJWp5rWqTWVDbJRPuY1KdAD8Q3TmMktBDUui7fGUTLfDtYByd",
  "key3": "4ph96RcimDgBZNtu9RxNSAx1yXmspXBnmoWt6r1cx2H6Lm4tk7sP5S3P2NrLQcD8YFecGUxFJfNcgbNvmo2pEiCj",
  "key4": "ScPyZCy4sX58u1uQRHxypQRSWHXDS8ndq3BUW6UR9Tc7pKxtUUUUABgvnh7HmJ5KufVLCi5viTGriVJPbvFRLr7",
  "key5": "4q2qpQkdi3zxZKr4Q2fG9baH5sShdS6z8G8fznasG6HFJoT51J611UHgH4fw5remT5c896DQzTiNgQz38YcsHssr",
  "key6": "5brnsbsmTW5bM3WRgqvHUiALmVC8y3DUeu1Mq38N7EcNwQ1JX5FFTP7LejVD5wiFMSHG9F2v9eKJDdjEWcrYQnQk",
  "key7": "4BGShFWtZTSaTzSDH1dmnyjjW5vpGFV6icpKEhRZoThDQXsoTpoZT4xEPz2muFxorH55vtwhWjMuHhwHavF4qnRn",
  "key8": "46njMYQ5cxw5b1XqVgP8ZwSRx7yrzu3mJ41qDYypkFkste2wRiL58cA6xN9gwCPQpe4tXGPn5Cajz2h6aLXnzbPL",
  "key9": "EMKk7hYczx3UrnzMQ5uAJ1cuLiwogHMF9vgYj6AxS9uzB6DZ1VKZEbMNts8eTQecsKaZJJz4G86ZBSqgGnzrVKs",
  "key10": "5Trbhre9gymjyTvC5nLQs9oBMhgjCeERnpPfxAXTjtGJ2VhQt8xdsGNywcqNuyrpQLZYSxMwhJcHatuWgBHonnuz",
  "key11": "5RY1qPZXE81i2SGS9StGxvZrMBPdZ8YsmYEsQUCRFgsieiUuwN5EpBF6EvrdaxqeQ4cfaeTSEHR9Z5y4QRMo7GAb",
  "key12": "67Cymo2oX4ZEofkFXdJu9zBytx58PAz9rxMpA48v46R5tS5kUpFwQUnU1Sq4x9zHMvXkKso9LYRyaevpF2kgXqv4",
  "key13": "4qtG6pYoNSwbMtQ2N6aeWRkPwqc8YmxaJvGduNLG8uaZoPRoTBJGAhNKQToQGGNzF18WjT6nmg2S4QsAkrm6HWoV",
  "key14": "3FnhwmQKsyzNunLh914pfd7XR9fTJgyBxEvf2hgotv72k17bSfnrHyxktdjggfhYEbHpQQ4iQC5ZXPBw9jFnn96i",
  "key15": "3XkQZNVYpiQnfkLN6NtwNXf1rQ1G6LsL2eAKgXPd1oYmWzeDE12HYGziKWegm1wnXNX8Kd7swZMgkkcJbZNVFHTA",
  "key16": "4W2cYTQ2yzJTQQTaguUXPindNicUFHtnsAguwLKSRu4hGYhN4RmhodVjrTuXu8ziZHfQsDNAqK2PTtzavfmZHLUV",
  "key17": "wcHxQ4ai4YFN7A8c1zqmujWNvsuTqFwb7WxhMsoJrcQLVXKJrEKsQ8BGrzQSEkMkxhuWWaUsiCBQzRhzKLdVcE1",
  "key18": "pGfcQKr7Jwd3b4rDGave642G46qWMVBGQePbiXWCWkkvFHjM2PF8JdvcjDu7e5ptcx5SS3dv7rLJzFeJ8b6M8Jz",
  "key19": "PRgk21EiuTLPA1TvNSzG3xfyEXuyNQ8NBRuSEKbUH1iv5QW21QUvjMRcaSWrnyTkYEyDokHMcTnLWKHWxwEGrGK",
  "key20": "4p1jnrQgZ8qJ1V6YPumQL6ctqjfqz2fLx1QepTvSZerd7LCZEb95oEx8UKM86ZHvsAecxo1NVXnUv1DWhWASpfBj",
  "key21": "52KWuRnqjtYvyXHW5vojHBoUDGo6Wn2XYppu8we5nSdA931DCLDHfUBuEcy1XdFBKB38wozQ4Kp7cHMRYvfhkGct",
  "key22": "4DET3vf88oBkcZFAu8MsNwz5nJHhtG7q1fNVYujHN83CpXHmiXQZ7D3MJH6rRAKu8uYuij4ToruqgPtTJFvv27cN",
  "key23": "5ubhQW1kJvB2k8DwbNH35r6BwCsMe1JPcLGhXBvJmNiRNAcMmgBoPtahKguSxwRrxYapYvFVCmMutcnn8bRAs5Zu",
  "key24": "AoqrigtkEXBxxH5RFZDxSEuV1JCSBWGVwuZtuyw9BSqwEbpfztg5vsPY1kbni5AgQY77mdLnJ6REQ6P22FXNR2E",
  "key25": "4UMAjARkYiwZhhmCFN68Hqm6XQiUHcg4sXM3hojQQ8Sx21tHumPbXdFgFnPeKv8CYezEUuYq3m1PWzmiJn9wdwhW",
  "key26": "26BT1xeJUEWzjgkgLPXW7rb6RGmznnjQyNnkjZUBRymjqLLx3JDzVAHDiCSiJQXWJxVmZhnuZSPwavsuzg9RsV22",
  "key27": "65D1amom3ssxQeGFjJUk5WkK91V73eFUnyemVBgCmny3ktrhnuJGrCPKHmnVWA6ewVAKCaaL7F3MpYurkc7DLzTi",
  "key28": "56wyAKRNUSYag8kFYg1ptciQM91zTqfozUt1doC6q3HHocwAE3py3W2C1oJosk9ikQiJ7NDJUCLmdVuddanCvWXv"
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
