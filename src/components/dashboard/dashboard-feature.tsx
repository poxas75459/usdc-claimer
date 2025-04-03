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
    "2AjCVGVdCFWQ3xVRZhsbU6ZL12fwQ3Hi9P8b2hrebGbqu4eMWgToHyWQU1A58bfYARDbVDTtbHRReFPJ8fREEvqR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DPdP1t1zXbwZUCefA8gQPibfzNjnL4p8g4pLw6R68rXxdPgezvVocBq4XkC22tmJkg4tPUbyM1Gjw7FkZZZhnaR",
  "key1": "4NT9pfQBjVWpBG6s3hfz2DiLKc7N3FAR2hLMWNJUTGbzt1Rhxq1hqus1HjdmM2Xk2fFQ9P5XcKjSwNx5yinvJyGy",
  "key2": "4VebWNfr7tUsw5ZxvRw3Ke9uZkuUJq99JVw7fgewHregf8nA2KJfY6xNeh93Te3UNaMoF29qtrw2nvZ5THEy2ipJ",
  "key3": "4664mFHprmeTCiMCnoSFJtQ1yBbSs6LdhAKmxzuzQARYJFRk2afrUufcn3XgVPKoQtzJerPBCkc1drvGWKkr1v1X",
  "key4": "5bywnQEk6eG2JRXCeB1GsMNAtxxNqyjAD9pD6LikuFe7GabRcSTyqYS1CxZzMxCP5qZDY8H1WwuFnPwxku1mHJpu",
  "key5": "5qb2pTjXj45Jo6iEgaZAKfwdw2tUacmTVSRFbBTn2DCGV7MUxY94xAu26KuJZsGj3zuATYNtWU8UQUJ3HFACPNxN",
  "key6": "3KidVMzTrEBQiver8MVXmkUNMXV5C4Sk1qWaCvUm5kDntFKrLfUnoRcqh6pfXZSYfohZKxnWAWyqzyAnENqvqmpQ",
  "key7": "4B38McWe8pJAE8voYrE8oK2uQ2AXhRg3wpUfd24Zb5QYHmTQNToPAdiW7uR7ZGZuAzgnQZpUHs2aaUmAd1k5MFJk",
  "key8": "3xqDCmFgox8ZPevxu7Cxk6rkGatHeW8zTNFL5Nrt925Wqf3Pxfy7SMTwGt3bURZCBQTtQ9F5qa6QhW81w8f9BNWB",
  "key9": "5ksSscXLu1GbfDwyBFpExJKMAGtkb7pyVFanfV4XvUKs1jYAn8HXpkxN9mEyc2g6G56DCD9YjdpiKuMar63EkUUV",
  "key10": "2DDZdbyKVPamEtwoQMPEQfneC5ZcL4TcjeMwQViHSBtZrQK6UC8zP8NSB7j6CoqamM6VUpHyKt8PoMi12AEJr7Xb",
  "key11": "2CXMaW4uNzJANs9YNzomFSjH9RCzo8BrdCPkKMrTp7fdvUJfJdhFX95zhPcY4k5kePSqcv5mqsxDTdhND9fCpCbt",
  "key12": "2sAY4TPzm8hz2Xh8r4ETc8fwgJdKomQk5x8JkinYvRJqJRJUhtfnq8LZj7yXUH1HmjtLcWg1HqyJvpB4T6UdnfUa",
  "key13": "5ZZiPPW73EUZZB2Hatn57x32neQSK3m9TA1abfJdxwfo64PjtnoYMV48gRgNJJZf3mEFrfM2jyuCDUTb3QXR8aXu",
  "key14": "zRngm2cvqomAdbzJJ4SAfXMFEGtufZwpyG7qA5QFHc1924CnDU4aU82KXoueRvPJsFae88mNQdSbQJjtnQWMAam",
  "key15": "xKc5Cfni6SPQFD9BMyxtfMdxSB2xHDiRar6cwhqWUc2S5BSyE9GairrvEawsT3fUmNZ9NKWtPXvE8YNuUSfbiBM",
  "key16": "2nJtNM9Txxibfv6pUoKbARw9B5NZKBBj9CBFzndr5WVxp8GmzoD3dtrqEUnekdFiojeSmhsH5pzms5AncYUvZxkC",
  "key17": "4oNPATC5VKZCdjjNd4x45FWRuypPd6QN9TA6P75vrrutQVrzCVizpBUH9yqYEbN7HvbYXUwavnAcNTDaaiNnXsnz",
  "key18": "YR2cUY28o7MsGprXmPKLG1RQkZeuvaUm1PwZk9moNqBUH56Nh6XhMLzFTsbbxyLqBb8ub1Q81584PvdThadqbok",
  "key19": "xkid5ic76DWvWJk8q4sPcGYcbh216vdtVngVgdZBhtfBWhC1eyjDRKWceE8WqDhKxCvHTgYHKE6jbTu5kHxjECn",
  "key20": "4NmG3bpu7TwzT25mrhQ5wPQZFFGsdGxRETSPQbptjmZtAjrBxErNtSRTRraZevmhAejKgUDtRtNNGPMF7FVpYXv1",
  "key21": "2rMD6gbuBeF6KVgu3jF91YXWE9ccwLh3SYbRe6Y8KKySPEBtz49A61jpxfGVXvRYpySrkQjdmhY9RW8RrTp7oK5D",
  "key22": "4Lz5QBisSMNzdDijPcxUvoahaK5KEmaaRFPVQJnE3e7js68e9Km6MiuEWqwv4xU6h8EL6yJzDxSExWuEcrLwfdip",
  "key23": "eqg9ZhW9YX62BPYwESF6vCnvBXfaaUMKajr1JrMBLgRi9ooTFy2n1AeCNrFX7usm2xdkaD64BLMVLeqSRrQUx5L",
  "key24": "4fAG5NgS68buSjYYB6epZbgRJdCktQnxjReiwtTGUz73Y86HeiCPSnqeVsHRtGf5vF4vthpmV7RrtdqedmQMLTG6",
  "key25": "3LpDTNrVSt8fGo2LiQMMiLV1DQ73hoLPgqeiENxLuDN8BBxscE4UxHra4aCkjLm9RbpgZm3wV4Uwa8z9t4EeRSoj",
  "key26": "oC1NLTvzWD8BguJTyXodebdTvHRCNYcJvdt4xdaS3qNetbRWdjS2RjHduRLhsawVpMMtbqe6pjdsvBmk1jy5Xr1",
  "key27": "4vFz7weprZieRD53oHWiLFYwUxE4h1mamRrqGAAMbNDj9Z2YSwMLfCjJ4WGZhgUgiyroV9NrDsZzpjsbYzBHXcxh"
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
