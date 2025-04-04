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
    "y71pvNjDazRDZ31KbcJ3ta8Srp6srcJ2mHYfTpG2ChpDnJoJyRrajHNqrPd8DxdrAkCLwefJ8fsXRGcfhQCJE5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26P4Sncjt6LLB6Lov5TZXU27vMX8msgwcRpdsvgKREpZd3BgUovx97jYsB8n3LJCnh5G94aZrXKj4kaxNDCU64Nf",
  "key1": "3UUaKD1zCED2VTtNadUGPbQ9qusYLpygMsWhKYoK35MrBAmPdrGeqZ661csBMBeqxgQoeKyesg8DxVqqbKG7RqkK",
  "key2": "H7x81qZWmCK43zSpkZ5kGzcqTrxpZ41RvZexT2BdXiXEPjqZCyQXc2Hcno1DbtXLej6ykp49PcCBzn2AgFWHWon",
  "key3": "VGxPqQSYANzZ7hoKGKWPmERHriiJTiU44LjQ1jZ9HhVWEgKRiryFbvX3Rgh4zJ73YS711QRkTQCuqY5QwTPjPyB",
  "key4": "4bKkbFaQr7GZsadFEY53U3weaBPS3kRgP51a27S6Hd26XpD8uCpkrMqUTp9WKX74Br5HyE64AaM2wydqnq5rMzjq",
  "key5": "5wiKxaPsrnXZDevWb9RNM1Ur73KCNTLyQDPyCzE3wQdA65uQ2kwBURfRGgumskFdgviV2Sp48RQqj6ZqXJxaYAvb",
  "key6": "2hFs5t1ncLhznfKDZrTB33VEiwu5fh8DCuTDecHrcXSQ9kgFztoKKqSxryCjXUsrkwVAs4C9pJUicuuqsBdJ5Vpz",
  "key7": "3y3YjFJp1jE3aqMJY69Wo7wf55skGnxdwac5h6NWLZBqtAwkUVjSwqisAgqjLtjjTe33Qi4nFj6sHJzWixHyy8Ey",
  "key8": "3ALUBCrtbvfX68G5neidpr3pdKmry6ctNbbGG1sKNWYkGhuSeBdtKkG7QBdHafVEaLgbga5FMxpvK6tJZwAcMuXX",
  "key9": "2Vo9NkTmWY2K73rjQm6YtXkged9g6bfvhohrmR2Sx7fDEC8Tx371V8bXBGTVT8dKUMsrofnnr2MaXyg5zSZ41SZD",
  "key10": "RftvZw42QW5mr1DdnzbXNmatKkMKsiRYGYLHJihUmcn9KAai9cYCApbz1a7vN5jQuYES1nACKbiCkXpMC4QL3Xc",
  "key11": "23oF3TNeMhtocmHiXnESXe2hL1S5iQH4fy8KV5h3tBT9FWQWFRMTPhkeaCSd9VyQBJWtRLUEiMuHF1uAhb1AgYWZ",
  "key12": "3pkQgQuBcFiayCEAwqDVTanyyeNH3nm3m34Bo5wAsHy9xiS3ojZQvEB8TsEH5RQV3syJ2XywD1JMrXcQbCKJnQMB",
  "key13": "pxKYEYX2w277FZMg59nsKoDFinxouXpqc3Kvki2K8J8cNJCKyq76yL8yHcCHg86z7VPXdqL9zw5CFuGWwmenbN2",
  "key14": "2kcja4AiaY81ZHJU84bUHtvpPw69twD7QD3cmsJafbvikf1CsJVRGCRTYMWB35Lp152dh4iWt7bL99ZQ91NQY7iM",
  "key15": "53iB54PUCMtUH2yQ7ZjEEkVXGpe8dLciGgKLWbw1MN58bpuqyLFwmdKY7QmoQDLbFxyqdkhn87X5oB8Pbm8mywNt",
  "key16": "2w2ZGA1qYjAiYSPHdpgxwLE5M59cBaKYCQjmxUD1KkponaMaZ5SB1dTVfDpNZkpQTh2qbEgfchpuuPDvBMoT7YoB",
  "key17": "2VoT6hc7fv73ZSWy2Jd4MdmGAEH6MDaoVcFMr3ogceHENjzUxppEQhiULMtKm19i6PWSFy1sXYqn1V6ioFUwmeEr",
  "key18": "AfsQ1Rg6hTZPRDV2HEHLGQ2t1o6Hxmfni9znMG7hHyc1VvMJpcbsFJ2qBvQsKqX9bdZoiaUhpcPM93vtexDk9zB",
  "key19": "67oXdHGzzomFGAro6dghRy1PF5fKJ76gqHeAxTEdDLXZkqWdHBbLjL9FmLjyCoL7gvbDtZk9M5opK8tsDDYzoigm",
  "key20": "3gTc4xrMYey3QAwyYChKCJ3pbbSLtecS3JzWVmbsWCNxhU4GQPVJgnEmN5GAqgmpVTuZcW7bF4J4VWenJ1q4XgAh",
  "key21": "3Fpi4bkDzP4pv5DcpmCFUHhffnj5nsiiaTaS9RHnod4Cfjrs4T2cZrNLdzaJPC6QBWrU1LA8KotDVX41eNmsfiq9",
  "key22": "3TLP8g3txJNscfZbQGTd4w23yh6X2u1iP5MhRySAtqddrSdw86zkQbPHFebLLdmH8xqcraVZ5qhqKYU1QkVJn6ZD",
  "key23": "4m38dPNB4SB6ePSPkncwg6JsiNfKLSRw573X4mEEWKchPMjCV7obFmTBwiLpto7Vc9MBYzxSusbWoHaaVkvFjRLL",
  "key24": "2yqVmeFp4BG4dQicv6LzfZtMgXg8JphKPHmNC59oxX6ywKRwjHoxsJAZ7MivEkZHpZx11hh3EssnrouCiot1W66",
  "key25": "31EpDrspC25tZZgN26f6YX7tCNejjsbTsB6v2k32YD8CQq7eqbP8jnWngZkfUjqRcpoFotZ5T9wveprrgFAfyPSN",
  "key26": "4cNGNGYxNqv9Fa94V1r8jVxkHcRrJNPz8wVDhqEoYPXJprpn8K6djDSbvUnJM5JNJv1hVj1EkkCpS1vg5aE2RxqN",
  "key27": "3ujzsuFrsHr9qHEenpy9CEG5VVFLoRL4QgMfuziwSq1uFUAbWfaQqprqynicQVXWbVZrQVoKZrmnGXPdyVohQ3i",
  "key28": "2e7x4n3yL8yHzc4HsCSxocNFocuN2So6q5Fuhhm8ufHKZdtcA2ZPQu5U4FHvhYU5n1tCKNCc9Li9F5pKBYHqJdAm",
  "key29": "TYgrMUYucNKnKz69fjNHyD4tmYi7mcvi8mDy5FuoFbnDbwELbjAtpLDWu7e2Su4dr7s5JEX6t5vQUcWVB99ENTG",
  "key30": "4MWFVTfCJKbB2C8rkoHNrW5zNTsEXe1Y4eZJbmhmLzA72q68XiyjigVJYbaRxUmvV9DZmPHxx9KJrFodyNaBChNU",
  "key31": "3iYJ5X74QLbaUgcM1G32xdvvwy7gqQ4F3mxN4o8YFq2qaHnPtWVj1LrDw7hMw9ManXvKSkaabHEN9AeThJPZMb4t",
  "key32": "HV74V8iZz3WywC2NjSdJeMqdcGkTpbNuFmUEPTZwSE47LUxwjS1q2N7WHmbXGkFHkFbeb6bDZDgtqVvi32mBN9d",
  "key33": "4jqbyQbC24Z3ZkZGUGLAHuW4KdrFnTytRsPMfjvzo7K6ucmCn2FyTF4URVCkTouLEYugaWJeh12VYGp7oSiC9JHk",
  "key34": "3ecNgpN7h1NoTYjA6pqrYELFZy6jAw7Nvshja9sLx4NmG8iTp7kmjDrxVCfrDcVpvbic9GHCCnqgUW22c4GuKRHt",
  "key35": "5NJ9AgNrvCHcwW47tA4KWgAH4J3E4FuwqJurg4M4VsbZhNJWRoqgF8hCzU8LJvFQmLzAw2WRuuRA7WKBJhLxtfeN",
  "key36": "gSgbvJ9ZyPAArtsiupeJccyasqr72stL2BGpi4Wcvi33XquDNuGbVZdxxkozDcV4TPj7beyAQM1ETK8X6Tgtocj"
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
