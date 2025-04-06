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
    "2VpsiLm2StKA7TVJGsLYdzr2rdUHEPb9rgLkg2WyCKnskPEXptKAkWMRZy5Y98z4iWGQ4gmFfWp2BmxvdH1ZiHVS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5etuamPUqNQyYwdomahdVen6KvLVuQ7dJeofhBcGWJAcZGLprEvvC52YRaFTerxRY6ayYPJABtkcNDTFyXvNdbab",
  "key1": "PtyP35NwHTXop7t2HmETB9QGDjNo7evoVATVWQHXBXx8jxX8fnQj8V4kNpThL8WrhGEVGPkYfaBwaeTC3d9oBzg",
  "key2": "2vNaaaiYhNWyvSz8Jy47KxhHpgtEa27wXbrCQRH2n1akzTDcvmhTkH3McCeWbj4hKJZbAij7w5rdmkHBjPSzfvpY",
  "key3": "5PZSmnBB9sv5pWWYunEou1VCESpQ8wg6SBcnBRZip3RmAHwMJ6cr4da8c2Hbx95mgzRBfyCwiNkiSVQG7hEmyrVU",
  "key4": "5HqDvc4SucZeRsdHZBPFSg1PdeLpZEnr9CeTTX1xfdSd4rdn21mcoJ8aHQzyo1rHZn9djXyjpx4oUyFqjGj2od2B",
  "key5": "2R7vPe7wDPAAh5oJDSBiQj5oduaLniVdp9r1LTtHa1ER3yXRXNUgCkHCDyjbFoHtPEM1oLeMm2A1nK3EzsTXs1pQ",
  "key6": "57JAHg6ALWCmdDoe4r8ZdsCGqpPfWGYnrC3WF4zpEbWDd5Xrt8U6P8vHjgTrtPAMLRG3biQtTmSf33NPdZ44TAEM",
  "key7": "23qVMiMHUvNvfsNTLtFvF8DguqbAy6vyL4TGgukN6gyPZS7z1xc62djCiJ11b6NS1ckU4ZQ3yw3mXnc2MfTYwSeo",
  "key8": "2A1o8HmuRVUWwEeUwjhrzzDWeDJCQU4Md1WNgHRYRG4iVUnTdPBKW63Jem3S9w2kGpBZybgREw6U8vF6V2f1PHwr",
  "key9": "W6QcsxkRDDVc2hBfxXnVunbFt8eXYJKuWunMFNprzLCxyiWyVST9gaCWv3mcncbUs1aJm2nnPdbKLDjzWBHj1WU",
  "key10": "2Y3C7Jjy1TXksGY9BLegTd1wp6ERBeBMGT9EB4gAzUNrz3FQgfGYQS5RDqkunn5PKk4VaryDrL7r6PzrKRE5A2ic",
  "key11": "5VAxopUkUtHA6JqStBhiX5jzACv9gn9Y4eV5vtjoFepKvEYNsp1d57ohqm7tz9hz6YnCN9TNbCE9wJG9dJh3hPZo",
  "key12": "2fjofiaDW4opMzWfJGv4bcu5GmBFEzmkfXkrqC4UksQQ3DAgeGe2Yg7hFFoAtGEYR68J1f5MzPz3ZmqGSQaJB2eB",
  "key13": "2hgsdcvJFpKSiUCwo3nj7zXnEB4gNqrbvGqaHtRefAuWYbvgUUAs7Pdyzf3njmURNjhJ4dLyWqZiTMvtGHJjtX2o",
  "key14": "2GJpDkx9gkwsxopVqsSgFTN4JjeE2bFG7hmzWppvJ9bJBi77bexpNgi3EvDeMAJ3wAtQ7xPjcDy4Xz8ik5GAkqLW",
  "key15": "2pkGc51drc3rX7HXBX4jfxPeC6f72cPGYT1WdHYRbJphoCXasznHyrVErNxpPkHvpr5jb124xXuPajLauRHrpC2D",
  "key16": "3diK5cWCQwEYg3p4tUSk3roqUuKD4Ck5tXcdMxib2bCxjgXKrBohGB6XNB5viGMQ5D6nxyUdnSJmVzyuyT4AJyTP",
  "key17": "d5wUEhQE7oQHdqpAmthVJvK36aaFZcoGCEHz2Dh2uPEAkzRA94rcpa8D6jEnBt7BBbWXTQHrjxjCBf8oMRgXQ5p",
  "key18": "G5kHd9ZL8cVRcH45DEmmUXGi4JoR7WjomePTdWQSTwnvRs2nniWbY3MEGF4ecXH7U9zUiu6bkwJnZSSgY858fun",
  "key19": "46iQqF327LYK2g5xUyvxN8WwcamXb3XZc7pwEgWvAHHMxY7W1o9DxZT5j28xHeag4jng2Y2YxYebEjCffuAYqtZV",
  "key20": "4Yte7Mn1Cq2iFAXoBBRM73qVYoSVtC7qaRxdjXqLb3QTZXAXRU1t998PmYFtyE3gqwiyt4h3JGYN1mT2EpYuSpSL",
  "key21": "3HvdmAYays9Zv2YKDxRiXk5AwNEzSra3aFmpWW5wLMW4Je9xQ6DXxxDJ7LgfF6yX3Qkqt8s7T6PqJpcGGz88QPsC",
  "key22": "27JB7nnaKYBasCg7634AhnhNjXJkdb87YVYdSWiqhfH9YnBC8jcmZJt2r3oPkD6Jon9D1YkNxYd5JUtjzu8iJoSc",
  "key23": "Zk7TABS66sfyLvUbj9cQf8uMXw9Sye8V282sjqY1hKAez6yReJgPZDjv9fsgmT45XrKcYgGKstsyJ5FyVsbYFoP",
  "key24": "3cKWpZCGrLjeunfLpuMTiNVNcXwbJtwqtpim9ZPFjHeZ8zcyDigs5yRNcbFEhA4ZK7H2ENncKTK5cFdymaCpuTzx",
  "key25": "5bLe4A5Cou9UpsNxeAVAV5NR6Vs8JYgvMyJkkg2TzmBaTMCoANjfYz8c48krQX1J9RHarH4yCGecHAJLCfUwhPXg",
  "key26": "3akugGhjaw1uWMGWao3sUpjBiv7emELsDibzthDSWsCrq3n2EKBtGP86SiT55q1W1XPW1erNkrp8f22jufyZrDHf",
  "key27": "32g4AYmRuJyv4MTfNGwcncjG8YEMcVbdtT3NE7jTZr5X2kqCziWHCSWYXoy8RqxR6Smu3aqCn4nYExM7XaEvcteJ",
  "key28": "2JCi566f3rsmR3UC2RQtmRuiCmBgLqBpSLq2Utpky13R4aP9YDimikwZneyZiaXaSWXce4wWWGBMHWG9yqXtbnoE",
  "key29": "3WFEcXTNJ9S4D3H4ucvcKj2AKgxGvDXGkHSf93nmHa7mXAQS1zqd32zVdudTVE95nP7Zo8oj9nocyRWiQEb89hc7",
  "key30": "4qMSA5JmJj8q6nkYF2ypeBSoMbotiwtoNJ3n6NXA4UNR4M8Fawhxw7AGkLkGUHUFZy889KT7W5ognMSgdszx2mXN",
  "key31": "8DD2cpXBg6bERe8f5grRD3tKSjaUa6StnoJwZfHnXCG3RtWZSSBrf852xVw7qWwCiuPyAVoEkupPB2soCvY3taz",
  "key32": "37CivDRHbz6zQzH82gYNdbNfTRraUwPhHwwYsC6auVGYFLSTkLxYAmQKoLvBgySCsz9Xt8wcRWp5E25UDKLACvzo",
  "key33": "LRNjoum5LhVoFCXRbPdrUamjNFnuf34Hg2NrWca8t6rqJk5v8inh1zqsbNSJt27cs8EMWnZoFhKiTYEcMMoXJUn",
  "key34": "3BaHrmeeqbPmv4p5C8bgdnqWXjw3b1Du9a3JucCKsa1UGTRLNzA6ZB2SERwJ521sAADZ2sSh8pCP9YP9JCR3ZLLE",
  "key35": "LpYWJo5uv1YdTPit6A1VA8tf491qTfvnRt9ka8DasX5yeFirw46hoqx92BVS1QaaYVgsvYGDwH5VCmhnH4reNQQ",
  "key36": "5fQVvkkzmNssGraoxk9v51hnqpLNpyGxTUXtCCU5jZEpYTHdw3iVzLozDsLYhy97RzQyJr2ozzULCYSNY6Ucj5kc",
  "key37": "2SFLC4FY18Sn3tZaW4DLcsB74bf7183dLzZc5aTUJng8yP1b43TJjvHEibodsJSXdAtzjNMEdLDCfonexRSENS38",
  "key38": "3iACzKfnEU1uUdkunwqtS7aUprbKXEbsjSK31KfW3x4xeptpK3GBDa3ybLQtKpaKdYhwnbSCoY65dsXg9cy4LCeN",
  "key39": "2fjJBA87rkWgs9xfZi7JAJeqHPi79gApmSyMMPLsEtjRNk5c4W2YLtT8AFkEdNFZbkEJzSTPF4r1N4ttoQJgP1n9",
  "key40": "4TAdRghawJ3iiV3yqAsGEevFA1uRS2sGVxL94Squpf6xN3HX4czGNNVTNzib6XkDiuc5R1rqhSLzoVb4oWhxExdA",
  "key41": "3QCJZqVggwYyfdx2gkpFFY7TVBRFStFTxw4wpMFAK73yd8eujuQ2ZQCZQD2rcNDUosXPfSh9hDgoNVvU9CJc3SFu",
  "key42": "4LM191k1P514ospKQa86MHaVFdc52cDHb4jA7Y6V3boFnQMFGknJUhwMq4eh1kzTBtbeeXhRPhPHZZmmSUtz93yC",
  "key43": "kZxKfTt5r9J8acFQVuPVQitVgkVjhHUNpmxWdhRAvX6aLo8pttrSyPMQygr4kEZiw4qrBXoYXucAUPWphnK5d3h",
  "key44": "1pvEk4mNHfEzqah6o8UqP5oziswyr16aovhE79nGxNfWvsZLmSVC9TDKa1Fv78WMcQMAQjgBRM533FmqxtR7Xbc"
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
