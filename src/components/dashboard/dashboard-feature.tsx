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
    "4YFRjpeXZ6jBVMEPcM7gi1VDt3Eyk5Yit4HgWbhGZD2gPTEvw9dUR5Am4cEWhTAG82AQ1n7FVeFt8T2SsuZJ3fH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32UUS9NHj24hSfzNAivavppG3VTR7Nzw8gZGTr4MKJrPrYc4AMQFd6zhEk4GY1BeZTCT8FV3aqvYmtZW6g4HNqJm",
  "key1": "663LrVSEgjo7CHUAj6cVSLW54ejqynPTaDT1Bab8AiPQ1NPKX7mCKx2ui2zfV1JwbXd7K6VLBcUHxNDQj3MTCZ6x",
  "key2": "4JuJezDR9okf4CKP2fQLbfq3A7maAr15239eEyKHp9pixycbr79xb4QJyBhL7WFYUDYDWv18UZtdobRVFzj64FEj",
  "key3": "KoEQUfHFNEvjSMoC1SduTbAgm7kRb7mAKy1NWcHP7nG8nE8APjRgmESGzfVgER89mGYT9ioAJGZNjYUwVrw9w5w",
  "key4": "5XcptdXsu2YzvWfkU2BvNoyEJjg1M9TV6PcxMoFE9gAXztrhi2FiNf89ALzRAzczaDgaELGxQufygfKbNWqT3216",
  "key5": "53X4pcjASGPd6zwnQiEHmytr5aMrh3DcmzwqYNwJp79tGa5j9JXYd8crtKBBeRMWn3G8Dq1SdKEYMusB8ApLsu9Y",
  "key6": "41gaN2GGwbMSPVgD4LGvz5itDTtUBgrMfccenrSHX92SU3XzNhsz1kJ3sHh7S8YMgjtZWsWbdpy2dZ2Dw3GEihk9",
  "key7": "67m4QN3s4ymBPtieXmeXLMCvC3Qpk7DqCMrVjNnZNzhW5P8h7eSD5KPPXoXXSYQHJ9QgE6WayFXryKfkbM4dkqg6",
  "key8": "32iTwHxrZSRxvLTwbKrk8X1ZDuMDWsffJPRWTL3zHnoP1TxnNkivHEsUAqTqiacuDfvggb8VAbyro4GuhRk6mHFy",
  "key9": "4FbWpRzg9vYHmoLwsq6nHfn7UoXnWZ4WmqQ2YGPzc4R9xFaUKqZrX58KanhWyx42prxqVTeyvmribbyUpff2aUsG",
  "key10": "1nc65MiB6QggXkhcZ1x87jfXbdZCvJJCe1xJpwNsAA8cTHUwRigb6PBvVRzob3bfJzwC9sAxPV7Lo1XcUZRr1pz",
  "key11": "2YeheXDBkZSMQovHa3mJUhPjVSPCEU6WS7Bn3ewt7ZzA1VgLb3Uezzjr266PY16JQco1LWfcUWX6rG3uKnVcYLnm",
  "key12": "4P7aQAVDHfe8iFc4Mb1QwKZUEAZjraGQVwULKbmo7VZigcnYLnBwLoTi4gxDbNMrdJEZ3MYKE18gjpX6LLKViHBH",
  "key13": "4jAfJxeKHjWw4sV6jjFHnMwRweqsWyvzfy2uHFWVQUT5JbkAvUPiYA74o7FwcSY3fde1o18124YYJQbQ66kgGTi2",
  "key14": "3TfR3wTEa4vAhQA9ZgnkcV73vjaX9LHujHLP4bLmDb3epCwipv51ktpmqjpyKUWBbok68s7ErhGota6oYcyNBfJ8",
  "key15": "3Jp8DBwwEuzmC5k7FJXfhy1foxoLPPnpk4DrHpQSPcZxa9enhDL5TAgSWVqjgJtAEFSHZaUfc1ZGvrJcJXomB6FQ",
  "key16": "5WYzCrpaNt4kYuffNor6ZeJik8cdKW3tzgRRBKxrce9WgT3aVAmVA8EonP9MHThrFCWjjfECieg5LHddskeDQa4y",
  "key17": "3bcu7jtLzsjPHZVbPDdQxS2i4WzR6pgfapvV1pgxqtKJcRQTJvFihVNyZUAiY1YyZemLQFo9GUYSQJKi27dy3jGM",
  "key18": "51RaE4wqTzJmij45gvNgi71sxwG3LYkwJBVMdMchVKNzkdbWdXn6aZZSUCwfdUtuFM5mxufGBjPPEjtdG9LHsZcg",
  "key19": "61jTgTHwfVmBpriAwCqonU3LR3n1PGtVheVY8n5TtSS9i6WbQMjwHubCweUWf7aiSVGqDKMRdmyYPMMcfHkuLGoK",
  "key20": "2SkBc1R7nuVeUJRX3g1reizBhaeXShNdB2AWG1XiBDLiwmtrKRDVFDBpzvo6twyg3BZiAPUCaPV91ew1BTLh7kyu",
  "key21": "xFghsr2pUrGwVrCYNR44GENyWCBdZkWUYsAqq2xVrvrgpDN6vFL3FTUFPqC7VHtqQaYYxjmhMUyE5NhaGZJzMNE",
  "key22": "qPtTGQerF1uJcmhD9VfAxiHbNLbYjeU5G5ogqKcuVBJeaEbZNhTKcEFTCxsBjtKQEQExfmTkefanA75H6zPXk5W",
  "key23": "JwZjStFHifgxF2sD9X7iNo8QZfg84tRFqiZjt8j7TFkHF3To6z3EckLXsQFNBKwWZDhACadsfUeHEs6fswfTQYz",
  "key24": "3ZGnsMMHPLKSvF26wVKqqivYTzEPgNtLFMwMhPg29BRx2bY5TiiRZg6vNAvzyzwUHGtRNQeYDCfLAMnc2S7UrqqN",
  "key25": "tgPzUDSs8ZWUW2hB35jgCifZogzD4xVhKngdmL5YXtSrG9gZmXFKaC4sKwq8bT77qzm398sqDWESidZEVtuo451",
  "key26": "4SPn9GCenD28KHxtNKdm7B898yErTnu21caXpkR5N9c66MNZRBgW75SFyGy4BJKm63yFsZCWop2ZDfKadikcgnhp",
  "key27": "zVq8WSHTiq4xBkDk4G7PCkphFzH7RFhEJrhAERZj6fVaw2f9qZhwuoABYPrR4NJBoiKhJpMHEK1NrkEqvDa4Skj",
  "key28": "5nWg51haQ2PUrm7WA3zz6CkgGCBpTszP131ZF6U8mSRtD6boDDqzVgLju1iCuZGVyPLPwwjQEU1dQ74DuZeJXW7J"
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
