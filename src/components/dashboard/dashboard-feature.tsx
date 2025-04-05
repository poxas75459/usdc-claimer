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
    "62X82xhwnNa7aDa78f7G2XipAGYx1Q9RMucDaCfNVuBeBgeyDBrKYjt3n54rpEGmse1o8nqvvKRwgqvyZ5fyRTK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eTLNqRXvKZbVnkVdAQP5pfFzq9UcGzD4g9WHHsiWrfqhXh1rVx9ec1VrQNFKXvCKuTtWGJ5ohfPZoAQuYmkXGMZ",
  "key1": "HycBXjx87pr2iX7i1evA7Rw29YJNcrZ246LTbXM4MppCw4YWauKLgJFA5wk567kL3znjGWgkMf4bp1z7tg4WcXf",
  "key2": "3qepryr818vzPkF8J3At9t436vCLtMMBRpaQ4hoPmFzbBxUp15JwTFFTKSaVSjzyq7xLeJaCRYcU2rirQBWLmvgH",
  "key3": "3sgrUtfunMcdCMvN367CneLDjVnVRf6zi9gcqFLYwnVb3Ga3yLaK3foAPHK9heuQrT1FmjzzbL96mwfETWQLpYq2",
  "key4": "2nEy36Vx7j3NAzvBwxwfauyrRk3yPr69JX2UJKxWmNAekqhvBrEQMSkgs2UzWJF3bohVeB9Gc21zLsC2oEBEo5ee",
  "key5": "5ywFAoyqqwWwW8QraQAgKYh6HHAVW8iJBsCDrxQA3Wb9Eox19A84mz22zBYvJE8suzmhG1eLSnjJwBjGTkdRSgWa",
  "key6": "5yAcQVncBXBBVvjpgakzkvtYV6AwqSrQaSNYhNrPKyyKps72quFXCxuaYXb7cADSU8NSCKoBG69up8fCqvsH3U2",
  "key7": "3E2zp4hPxB51daahXVrAXuwEa4dneRWStiPcH7ZtacLBzASjWZtUG7PvkdJy9F1evWyC1mjAEtao4qATkwiTCLNb",
  "key8": "3eJR3AaB3GHJftAKtxg2GX3SGk6ZAf6DNDNBtBXFA3u21nw6NHyqC7YgNBnqp27sWDw7aeNXWG1K7Lx2ynNZGo4H",
  "key9": "xeCHgSf4715mBMKzDGPCUvrJABqsP6qpExTp7KzHCDY9vtqeTfrTWCC5BCWDTmh9UEP2SJvco6fzJApVjLKEDLd",
  "key10": "3VYaGzSUAnZxfaguDC3rXyKp5uKjLSDPMoZrd4ysVEmo9Dm7KFSLt5Wa6irqALvWz6cnNiqMUjjNjuxpuyAYwZHP",
  "key11": "3FB2UztUVC8839G6sSHqmKYHm4rWzfGHcyD7J6XKRPgN8xdhrBXnhMhi8tk4qcZmbHbuVJx6Cym8kNGC4LNC7c12",
  "key12": "4Z9d5xYe9vYmza9M6fcgvwzFgGUVDaR2mTw2Lba2uuyQyY5SmhuExZUkYExasySpTgExvGL9YgSNRQnFYdmfPigV",
  "key13": "3RHChYuCqcr6d1tnZYKPrWwCLNhMsWL1xfCieHtt9LWSdgGXWcpQM5SNqBKMNVVm92A6AJ4o6Ko7e8eeHeQUt5Y7",
  "key14": "JFupYF2PvJKw8mkjA1RNKRF68v4PL9NjsvA4rDTp5QGgZhgrsGj2Yz1tseVNnxVqrwQALdq4wnNPfsKSTthUnSE",
  "key15": "2PYXvydmyHuFyWBrEetzTddCgAWuB9FZjDAYvDtAaad9Ee2HrtZSVKipE2n6vEJrVEDCKhaYF4nyWZyEzjNLL6d5",
  "key16": "3sdSBb1BCZtdGbRt2p49Ty8ks3222TsLxYLJ74XEvuVyvgXZEhpbyNNnNTkC5rdKvZPTzgnD1heEbFFBKFuQ44Aw",
  "key17": "2peFsGok4uYUU4kVdtFyAwoAnPb2qA1kqedzDuNZivHCGvYV9Y7Zg2PYn2KXbjBCCa6epdw7WzrsZKNS7gmi7x3n",
  "key18": "ZWd1LUBuyuV5ZBPTLXEHA33YfWR5tVPRAVjjHjX3VQmNyCFmG8RH3FzHCWiN4DcVLawPqMiLUotJVGr5rjbkztL",
  "key19": "3GfBp8bKccVZYCY17E4tZZ1P2goc3k1yq51Rq21eyDV5XXj9K6nLhvmMFCJJWrc8Nh4SAUb1yShP7X24ZFL5ybm8",
  "key20": "5aoSj9CCejWrZhnkFPb3VTjqqbaEoQKUQuhj9fNtcMgz4RgU19VawkaT6cXnKrJyDVvRYuSbgGtcFp6f4B3fSic9",
  "key21": "CT8Mi7dnZXne8VkQSXJNBjJcasKGFcZfDp82mv1Np1M6EWfC67pb86fWNVzK62ARgYmHsHkWPap9Z7VBWTrUirp",
  "key22": "JbF4eUrn71NLhT94W8ejTMvUUr5TrEjoqQgb3UZcHYWodZhZ7yfsCfDFXiVjiLsTeXXQWjanhgRJoqFKep1uDBH",
  "key23": "sHm223Bu8PK3Af55yRvsLekjCN6aqrU7iMDmZmKVhPR18nozYEigALiiyiPaYqVQKn5kXPtxrbjhxcYRVzbrqZa",
  "key24": "3LMhLizUvfYZW5Bwhhu76wBQtCCWiuGnX7g1muvJF2GaSPsNt4mVxxR6HPEya7g1d5enxb4nRyyNUbJES6JqX3od",
  "key25": "61Z2i6rGZUES5z1qciCy5dLTWtSnWuYrjxRjENrUFmk5iZWfx4qsd6y5PMJUby7kVhmqeLmZ7yEEbo85JhjcuVg5",
  "key26": "3XeJxF1PMqnAAugPJAPbxeBhd1iBEF8ftV3hwre1mzrMUWMMHDZ4UzdTCyXneFHAyuthvEuVwVWsNihTcANFhC8J",
  "key27": "2dhfds4v7roM51iTuVZjdyJ7As4NqEo7ADkqRK52CaXV5WhL6RWXdfm1o9KhMf5dSbvFZcK75515a7qbz2NvoU3n",
  "key28": "3ETfjWCGsCRsQ6q1UoE8ezn2rWcfLQk2zFtdqLGzygusrp1n6Ng2f8ctW9SdGxwWVTm7skdbiQAWSRyqYPzzJJYH",
  "key29": "4kkyBWVuShqeDVdrd2RQt6ztmiafG1pgkjRuh1YzGh68btGbNtDh2x4xParU46q6sPxtk93cGQHc76Wakbq3WRyT",
  "key30": "2r9GWCqyJGp8TkJjzW72uFCD5AEuRLkbmf82fdMpvctCVF7TYexGvk6SzpLJyxvgH69o2B4jj7G76GwSTkmV4pN",
  "key31": "2P2kvxiPtk6DCHvP2Fn14fQGH37UefcfcwTNhB6YKHx8DkSHkufGvGfcgUvf6mHTQD9PjxTWCU8VuYBBgVXsvAWf"
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
