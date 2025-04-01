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
    "3aDsgRxwAsNBxFcea2Gj2gaoDsjyK4D68kWTHMDKkDP3kQeQ9o7EkpFnpGn51czRxwmvPKUd3ihr8PFmdq7uFNS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b9Zvm8yLtQ8aCLB5nNrcNMReyJeNTScZqdnauyk4sUNkUvBsBjSVCEgZeAymZPBx2yuiS1NCQU1Mgor3Hbbe8E",
  "key1": "44SoKjnpGct7USmeQcKBb7HPJDZ1awNmnxy2WGsVzijLRjtwr2J1Dfa45urhC6sNhVssXJgCASnSbGYhe5AkeKB2",
  "key2": "5XYHLXfTqyw1cG3m8CbMABiycMSJX7MKdiEBCVp1rz49UNyP1kmfqQXm19XaM4FSiNGYgkZoshg7tjKtvftNFty3",
  "key3": "3tDW2xSRqKjYBD8FLQwV8yaFsGa6qCSCavRqDC2tpSd7DM8pdtn6ARU8BGU2wYfBC6X424Nx2t2Q3M1tET8Nso2x",
  "key4": "4inmAo2yEhEHiKkZquVpHpUbY67YHcMS9h6Bm3qCh92LLKmuMwJRPpreE9Z3oxaw7kgc9L1N3jWBmN5idr3PgJ5n",
  "key5": "4DEWaC7kG4jQm6uYKkSUonGH4J4mrpZWcJnawJZJmworiND1Rx4xo8nxyVtFRuJV81Jrk26UuCF3yEiy8MNs9PVd",
  "key6": "b7nX4b7q3c2FtFZrVYw4HPCQ8Xd34RN8Qpdj6RBo2x9YfLCUpVwHG6ZWy5wZGEXt2XbsKEhythC2DJunHJzGCsQ",
  "key7": "4DHHCan9fHrN2zTVG7jv1zr4czEFLJMJgtfzbYLLhm5ejUiYr2TWDHDq1ckmnKno9C8gEsBPi9JqRnEcCohJJT1t",
  "key8": "2FCJ4mWjVPV8UpVCeoTsPH7LRaeBdsiSh7Syigi8eiPbES4vBjtM1GDQSZadiQmSJdpgyfgkrWdTcTC5iE5B9JfH",
  "key9": "2BMFLLPiidqaRchFGh1uXw3UL634uhXwEpniWoQQX3E1mDz1m28Pwjx5TsLSVL5KXwWRinAaRuDSU6CnN3YsU74f",
  "key10": "4MSfRU382BkSBCftZUR3rVNgZBLw67VMfwu6Q6bKK44ZFwvvMCdzGYaYZrWF4UoVno1eHW3DrThLWFSbsGDXF8jk",
  "key11": "GKTawfFXuZstPpcVAjdHbW28pfCj5yE2GRy2P8a845KBbkxPeu4CFrcExBibVgyGJxTPnTXnUG4Ktusbm4naY5R",
  "key12": "2GjaYbESWTL5SKa7eMDAwxQ2dzXT5tn44oxLYqvvwX7XMmajviYW1qywrReoMJafmedsdBmFGzuuiBDx9d2rcdE4",
  "key13": "67baNC6Q8z2RwiUqoCfG2oZD34WQssLQ798nG6mq3SAJ82m5LQe1c5hYmxQx9XTXxC8A5BRh9PwudNPZYobnXsYG",
  "key14": "2ewcCMCnftsEo2ytG7aKqC28PKqUm4jJyKjnubXkA4XCkQ91BLosmgQtB4DQ3xCLgp1uebZet8qkFwL8JL39F51B",
  "key15": "3QzwbMM4PFjjzdUn5MdWCjU7aishm2LsiRTPPqXFSMeRpQBJAZjfiyiQJ94HntPN5k51bWU6wDHX78ZgyKrKJqn2",
  "key16": "56F4MRvZvva9aZ5Dvo7HQmG3xC4bUC11yRM88skifpc1V5BisCc5QntvyL35mXQ7sfk7WfKHLKQ6dVAYFJbwwUWc",
  "key17": "4z9dd5DfbRYsLtYkUSDU8G499iUFvoziWjgkUKwHo76CCXx4uxvym6SsYpfJ9GvDDv1ptNFXNyFHmgTBJPeETRxF",
  "key18": "3r5tCmmEDU9tAPWDhx8xJY1VmZxUTw2zcEueRTwwgN99Uvo6HTda3DfpUFxtBnLm3Zqo3czSFU3N24pXWQquMkvu",
  "key19": "2M7EhxmFNatQcjpSjADKq3dpTKqESB1GAHLDjFwgsH2TmBJz6AxD7j4BTKCLFfu3YoKZcerq2BFSU95W5NcuEKZf",
  "key20": "SVoBFUqSnUnNiCFA5hnxknRr22ixMfR4CrtGerhB4CeZcbFUbg6in8gfgccSXGqe1sXNXNZ8GHLjkNXidfZtcXa",
  "key21": "22Sh6iDoTpb1QXug7GR4sg9szeGqXXbB4TfMaeTLfWLRG8YbtWfyVSbdpAd2VAq3khmZZGx7nVLNRmydnkpdEhiV",
  "key22": "4zjTAsgyFquQy9dmNoeSdMAiqo7jtkEtf2DZfRT1jb3j5pE5RMeWJAfsPXuMiNdo2MmVYRLpyo3EbAJWWdityzRo",
  "key23": "3i2WHuxQ9fNuasjzg4VrzX1WdzwqSnbLhrMM22PpeKQNFFdJ4aHDdEoEU5MeHoJ5JnEG7VkGKHeiAB38RkAHDnk7",
  "key24": "28d2DyqkPwzQSryB97dFErAnCDWmgjYiw4SUAgD3RbHgoVwD7yYameEdfyrKXvRtBR7s5WHwLTSBthmQfB6A4f4b",
  "key25": "7oeXvM54iRNgpn4kGRoBU3CU4mHRYZyCKnNFJmyphqKb5SCpZamS92nHg1kMdN1pjMiuhK3jJ7S3EKxo23k6PQi",
  "key26": "5TsMWgbdHr4npzWJapDoJPQX88pnzDeS5qdTT8DGTtkz18fPEcyi1ynC5LDkzUTGFk2Rq5xYb65scsU7k1EiAWeH",
  "key27": "21tVFqcLVGNgzWcUCgQnoYSThgXJXdDNpepcLCunpQQrP9gE5f6W7mZhUApNmbXYFqt5L3nUxy2boZNVtuzn1LuY",
  "key28": "2Y7fRwP3wjBuYoaFPCTBkTWXdTpADMMVydLX1dDx1WnqFQN2WHJLt11AQXKEAH7FrXoFCHYZxattfVJRiCkZGm2Z",
  "key29": "3y14CTjmvbDufhUEueSQzgNbWunzZF6U26EyTfUmzRFma2TGzM3rLiwd9uEXRfBz2c1yMJoxotmfqmMEvK44w2Cz",
  "key30": "3tp6YPLXjiMvcMSVWZ9tTYfYMbfNAsRp78kxFPBpFXYwXgaBpNXyYYEztvPzw5JyZk1d4j11ZForuchGXs6nx49M",
  "key31": "5ofZdEUiKjWMfrinWDBBdvENtcbj2SMP45mRjgypvHTUiA8aSsUsQ5cqCaSnnDenwem7JHZgvgipPDu93HjiPvno",
  "key32": "2tRUQ2UAzKDSsd3aCqfmse4xrXyqTL25cdPcK2D8Xryhpq4fPLkEJNkaAHZeBTYJmYLn93YThXrpXgz1ZjXHN1wT"
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
