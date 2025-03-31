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
    "5JAyvGa5YgmYVyRF3Y6BvbHqbjYPV5yuLusVb7qKPTBbRULQY3MsqER22jZ9gY3Bzjk6RD39g3bb3bYhSuikLeDA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Swkh1QAY6533KhMFxCM3fDYjJZDjXbAB1MQCaJGk6FNuLJa9Th8sU17PSLVoLS1j325MXb3eppvY9mK1hj9Bv8h",
  "key1": "23kuGyB2B1rv2N3WYHM1p3zvjh1nxHqCoxmVCCttRYTxwszWdsPvyB7tkN87wtf6XS1ruU5UTUDcFmTKeMoQiciD",
  "key2": "3igEbt44ikSMJAReQBD9kQa17AU6irxYqShMi4gfNa8wT15cHTpBsKiFg51G7ZqrBaCVtQDx2EmzQ7PZB4n2zK4U",
  "key3": "X6WSTXQKxYYuX2vJNMLdjRX42dTGeC2XQh5izrD58dFBtEgnGbikeH7NcLh3BR9KWS5dftbJQ2KikHzoFBrFZki",
  "key4": "4iUg3M6e6pqrLdSizozYiChdJV3RwW94FuQcEBKiy3K67dw4djFfUQTdSf5qHkiKS5Trfj1iEHv1Wj8i7sSXHPsV",
  "key5": "3h7n6zYUbyp6mPw9vM8zTo1YwoaiQNrHHBHHLamZ6iHkT8CKLYrjD3hnr5TUGYbN27UdgESqd8UnHUyY47bmmd19",
  "key6": "dgbN6Hm35XJeWCw9n74d4SYac5RS6afRUzeRpfGmUBLUqo9h1fk2oz1PL4bZojiKZz5sve8fSvGLBarLbfQZeRM",
  "key7": "2xgaJwhWXGh3C25SZFJ4AQiG1vPnTVT6WDQMuAZ4MckoA2QrA2vo4P4YGKrMk6th7R9bjbWCjJkVVbrbm4N5smYN",
  "key8": "3wjKaxdj5vdqSEV6RWA5cZKF33dkS8RnmVaN9GwBAGnu4sUQUGia2NA3B7MTt2jnHZYjngYEsQnrBei2w17ofpW",
  "key9": "3pjdENV5MFjguEngev4ZAtMDdK3q7AMdWEByAmkX8ycFcBsoqeDUNV5Sj3XTDTTwEouPq8MmYew83vD8iYfP4F1f",
  "key10": "3duc45t79fQAfDVZo6ra2x3KonNvyPxS9cLqdFkrM8xQkxJqCpXxrTr7yCTidvQnAruTik4mV6qz63m4Ywuy5BnK",
  "key11": "3YucKfAQ6zMGhUnptp1q4KYi5JP12dtm7Bhe17XuA8z82aGpz8H2oY1S3Q9mEFRNQb3G4boUTAJqaMvf61iXmJsH",
  "key12": "5hVh2ih7MgTFacWRj9bwDj8V6VcXtkSPofYAtVwwA6nN1Nw5WhjZK44kwEVHQDxP7xEanuCgtRAYdurtEc7UuZUz",
  "key13": "4psbxctSvGDTaVjQ4RmLLXdvDpbRGtEDu3NZgZyE3CCNXK2D3XTrmELUeg2f4je7M2Eb1hFZg4eBaJgckrhGw2yJ",
  "key14": "PMGeXiYpwP7edqZhQbxYvFUfdaV7sE2bJa6xMv5sGokRVJ7VXHPtN7eQ9Wn1jsQTHo2R6QRMVVG6Gyya1qNsk5a",
  "key15": "4aBSn7Np2fvoRvJUEqmWE4Nu1oSQ9vodM864pKWQeTixiXjPcm6cz3qftnHUfgqZ7MtwzHRVfKdAvuRdL2EP5RRD",
  "key16": "23DN7U8Vi6WHQq94zByxKBeXZokfCyPMVpaL2BKhS1hEQPy92rPreoGWektcsvg7Y5b8hkjdyC9fiW4Yhu7SJSRe",
  "key17": "64GYMyW1chthbb8pcmdN5MgLGm4UWCnXEbvnm3whVDrNAzKWDffCryY9SAhwxmDgSHcW6AaWuxbaWh69nS3FdUxt",
  "key18": "627EH9LPyFPEdKCUkKsG7a1dsKZkXCGSzVPUAY1criQiizCU6zLL2z3pweZ3mRXcNdcMjQpNBCA2HmLYJDMTwL3m",
  "key19": "KPARUNvtiC7wQutPqBwy1pPYuZNGfBAQDnxrfyCAHhdrHjVCUDddVJu3RV354tr69YioBghjw16jEH8VsVqg6aQ",
  "key20": "4anZCYncERVdBPB7paZf2zHwPxA75E3xn6ZtEcYx2kx8Ln2sGkQn39axrvZNZumhBJGg6YLpvHiRJu9FzYuTeXmV",
  "key21": "4JH8SD8QM3LeBqRLG8PnxKfoFkk99zMqGBW8ycKuQ2e4h157PsszixcqiPY54NsMsuQo3a9P6zyfty3bhCPJS8Fv",
  "key22": "2RYYtLwyL876LbUnEfTSPLAcFBuDo4KFNuQ8v4R8BR2hQLLt3okvWENtYXujrhKgu8pbZgojfzQoE78AXNrGyKSC",
  "key23": "4sCpo3RoTJ4qE3jYQd7mS8QyFS8ertAmSM6VCqDNMRsdFJhknnEwuAYKdpBoKNpzKkfgsg7hV97PHSwJYF6HkhZE",
  "key24": "2iTgYMSPnTGKJTwzZiv5PiDXPpH8c2S36P8cncB8ibUUj1CB6aTLXPhNHyZGffxiUCaN4SWzHT1mTB7GZotFscuo",
  "key25": "sRrSYATGohvzBRFWgn1ojDCLw9eKmAEs347LiF28DPnEh5J3odJaBkXjtQ8GQ1nYWA8WU56VxfGKKF7so9xmTxD",
  "key26": "66e4J1PhExvj9tJEtRyBE6aPdMnaWGjcppeKgGrn1U5Vg1W6Y4J2AP7KzaTnLWNVqN9BgJjQJrBe2zv8wHir4X9W",
  "key27": "o9QJ5W4GNuUJVtR9oAgUAkHwcuHhhKrtxxLpJqhkkqS9MNUkzgLAEiUg4L1QR1dX1BMAVZxAiRobfcT29q7neiR",
  "key28": "4pLV3mTxNDkhWAknVhzkhnF7EXLbd6Wckpg8nkdhwVBg6EaigQsaVEzWnhXbgBd2KkgzYkJzTCGHHADbNU3E5aXE"
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
