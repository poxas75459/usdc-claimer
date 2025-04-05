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
    "4y3e3QLpxk17dGrGusYdtBme1tx8UQ2rwHMK4oHgew9srtMhN2SUiJHfv7GTrZKco7fjavayxxcJvXF1r7e9i5rD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gsSWbV6sV7oThbKJMgz81mHQQxgUi45SCrkhkinnLTs3TmXdfrJnfJanBjnF5Ve8WLHDYZRp5fZS4r5nYRjQ1Za",
  "key1": "vsCwRL4SDJbZsdJGVLrW7U5rshsERiVCpDE7Hy9RQfdwKMsxFx2Nqr51ovVZCz8SYmJ85CKQ9XFQhyuKVabmnuo",
  "key2": "2eLssWbuix2XtxJrhk5za1BPbUoUJf5wBNWEBAXRxAwc1f95XpJw2QbhduYDYFJDEg7oTgP6ZedrEwoLpoUfKaJg",
  "key3": "4Hf4eKNQVuC5cyjoWMHMgwuUEd5VRtDujaYiYcVuFNs6kKnvKHEB5crcHwKzjZ7BHxaRjyRFXqBhTJBfZ12dP3sP",
  "key4": "5cuBCy5S7QZCerMCwimJgz8fMJqXPuc7DxmJEJgSrTms7rZ5cKumfUQaYnBE1D3i2vRGoY53imrtW53ZtpDZt99f",
  "key5": "4MSyoX49bT6sLLHDz1T8qijyfzkBYgFrCgvJcF4wfcL3aWiLdTBebYebmhCynNGDEH9ZmYoCmsFJhLAWyNLqMMQj",
  "key6": "2wJPLX5br1A9LPHFyVtHeKxC1ePkMNwyLvFPR4sU9hSb8nVzQFk9WhFMkbaSnzf5C9LXgi58zQ6XfWgNcXfNEJod",
  "key7": "4R7C7DZbsb1fr7RquKmUcBGsBymu1Wt3rkaQk7xfhXaSzTmpPnh6uwheQQagWioH46LxRVYUKLTpMPUqcRDaziq4",
  "key8": "4qKoM3kk9xSuTqDp4g6hpKRnpVtaxJNHXGpqqXkLdVB8ZuGyJHeQ2X7rmukbEQfJwQtrm7DQq2K8oy8CtEs4fL7L",
  "key9": "45pXR4fyYFegh9hNNPDR1oe4xQ5xg8wuhCtg3VPZKiD4h38Lsrb9yTwsDC7WR6KPzAKbYJtnZwonArP7z8AwMLeH",
  "key10": "4Pb1z8wRrZivpSiB3LoZS66XiT6tALsEXVEV4TxFZbA4BLGzdbX6YLScCf9tgK3XcNfhF397Xtqfhmxc97xQruTm",
  "key11": "4o4YaeZA6doG8fvemHqo9vR5EiVx5ATXma9P8KHiuaWrLT1cstRu7fGuhF2LKpmBPTkunTbr2Jajni752p5GA9k8",
  "key12": "4wYzsN3HGVzFMU1CZYTaDnrrvjFqbGMBMNuPnZohX3bHrQpRuW2c131N7m3Qc4KYY2YqvS49SKkPVKb7fPL85QG6",
  "key13": "4qVdx1g3XQmuXhDkYYszitGpdjUpXfBo1HiopiHmefMPG7M6UiN9kHj7GXBzuncYkhwQPPCuwe44KQRnGPhu7hSb",
  "key14": "4Z5p4DXkE1qPZkWfHipQejaRZtpd1Zspx7NfFMjHE6cWm2SfjVGL6ZCh4TegCJAw9EeTn7hBFrJQmjvP21kgbhgH",
  "key15": "34jAD7kXEFtYUBZjfFEz7jFPK5bDT3MZUGpefYEM6qpcQwcTAtGX2pAceg2bJ1tW3jaGTwwL4j17gvG2obghmf8U",
  "key16": "34B6QLJNdtVRTawsDtBEdaQeC4Qxy3LZpLBRubtC5gFcaWv7i6jTvyzRfw4ctWeo7RU6rTy5ixhQV3RzPdk5qEAV",
  "key17": "3Vs8pAibbSgTvKbs1Zc5DdXWmF5MUsXMww54WgQNBNuSm18Xs7HQV5Fx3JW3vYRqALJAVXp728drNZkAnPRWfuv9",
  "key18": "BJe8QKb6DsEJATwmq3AHYJxB9GLWHMfjQcq4WXa5XaTMGKcRA7h7gWmS2pXvXro3f7VrEZ9yAbMV4H1tDvsmMhg",
  "key19": "5rbPFqaxXNbg3eqJhQm8EKW77BbkibSqGbGGdSocT9fiqaq3XCRhdCwLmyrAM9wADsvCGsY46Mwq61ncLfDCEYhE",
  "key20": "3PWWfZMWee3AcHUyuDtvNg9oXByc2XqJt9EdBZ3e8mYjbe2Bh1AscPRadk81LXe8QXYjdhh8zDzWgnfnorPewSJs",
  "key21": "2kcF2x8b4JL6Q35M6f1C69CVdkBsjF2wt1xwfUGKSaRuoUtiM5D5nrU18Y4XrdX9EvorNzmF83ohtqS4uLKMiFZP",
  "key22": "2237F759uWWYTj88dAL7VJ3GnKXr5RPbCGKPjoE4NPTXPTzZZ8u2b12nH4Aizre5XxpDpENBNYCvewgv4XYjMoqz",
  "key23": "4eZu1cD6UZ6Jja9cwDw876AhfwKXrY2z9Des7RRLTHKH7KQU5scAPx8YQ3r7rHecQFYG4peJUms8vx72cn6YzXio",
  "key24": "3F8S4ducVJUij2aS3agsnuEiC7qRPZ9RWDjE8YSRNGhYprW19GwtgAyU9Gqh49LK3vYRq54gQ6FmGp8VyeyZx6MQ",
  "key25": "2eRQaiPHg3dGdRQcqSQkUJdnk4T5UmCgvFMR4UkzknKtn7UyEMgo5N32nN68dsKuxopwo3BFzeLuyNv9Duxb44pb",
  "key26": "5pHQ2y9X5Kdy8Gbz4pWYraZmFFGjBrQAXw92BL7mheUGbMVVc9BYcKmJnkCrwNqgNd75TeAAsYBSNy6s562hkwyo",
  "key27": "3zKhJUWhuDcDTJhcFPJoRmXRQJ5YKLSYuRsnscqpukHVtyyCcVVrGjYbvKZ95CDvdncmQg1TJXUf64fJrjE1QCs3",
  "key28": "4G8mRFigeskKZfXjDEaTbVDz7w5X2PKggxXdkRFjgZf6XwV8CyfMG1a837thRMn7UMWCbnXoFNKv9VfAqEptwXWq",
  "key29": "5TVRi1nTBYYxxUEVLnt6tEymf5cyXj5cvLUmTm6fZ4df8VoKhMy9B4oYnv4Zb8rMbgjsnQ9g5fgxf78n6MhP9snn"
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
