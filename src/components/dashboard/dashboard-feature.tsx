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
    "2VHewiHEK6WZf1m9j26e2RjfLW8urrYxRufxPeqP2gBCAzNBVTxPUpw9g9hwp5ExTYuo2gkk2igFz3awq1eWmYrt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NYFxCeEeKghMm6GzeRuLBPhykXLUvGsMCtTvjSnHDGDezYt3wy7vjtnzUyhBb1SQW8ryFf3nnzuHXKN9gWS7VLi",
  "key1": "2NXAWZ91uoMNCQWcbpt1A94g2nzu94KqQN8RE4AgcFPnfgeFxbVNizv3NETsD46nahkx6GZCXCBzY5GevJUjdgTC",
  "key2": "3tjKMmghj3cComgZ6si6e5TjSRJkPySuz1dAzSJRFtcpm6qXQA1YUeF1H6ji3bkQM6wtx4ipzmTGiHgq1m1uw4qU",
  "key3": "XuC5CDnTKiriai88E1AxLbx7BcL7uCr67hWXNNuijAo9t6edip1qbs2N5Myd9yuYii9yr97AEEngEtXh3TmM5vh",
  "key4": "5bGoYfS4QfgJQtqYWNQgPrcBJ4YDMxvSLTpUhsMJTdfvR9voxDPDg6M69ndh3u2EEASEu2vqHx6jcfJddg97WtUY",
  "key5": "5JUme6PKDLh3VqrpTQ8prSHDQQQqiGcCi5qxC7vQEdHzsJvhYont5Q74YqR9s6gf6ia6bAt19C3KjToLaWTKyM4s",
  "key6": "Get1eGdiUWpHZd24LC7La7jTWfdWTtHs5UD9pKXATu89fy3jxRhmcqoj6BpnFSPfktH9fzB5hMEJC5tKMPZXXXp",
  "key7": "nULd3St7Kz6F8L1Xr6629rXWuWxq8XenfsbuaNAMgW4f3nS3fugJKTc2VGzbbaWkMSpojEU6b1hQWdhReAGKvdL",
  "key8": "2Lz8NqHAYKy77efLCP3DmN7Hc9FN6V7m43PeX3WAQfqawVKkpacg9c9pwGajoDFiQ2QKuCjokoXLbaaBFhCAcccj",
  "key9": "5aLGFX35LKfdG4vbzo1N23yK35JPNbQ4b6zFE9dkKXDrMp9kk1HowWNHuzgeyqWyRn2BUvPjo4RddVVEykWFyiVz",
  "key10": "32eNAbYc5CNRkabv4eds5AjqLDF7fatwzZok2MTLXjoxrfPRQNLA7uBg33ojS8EBcKHNViNaXF2SRJzNbLXNpKfu",
  "key11": "3UBcnsjUX79gASKTdxs5vcTzxafeHbu8DkTQTHa8VcpiLRYzyxTKuamAbT7marZbKVnHEth18KvhbiapSNMBzPSW",
  "key12": "3w1UcQPmFMWP6dwBJuyPVutfgAxCznnhj5JLf66ZfTCLjmrUzMWr6twYVMQF8Dq6AymrAga7tT6RYAvmygVd7Toh",
  "key13": "2FehigFKZqmZBkUiQ5BZ7fSWRv2P4PfEwX4vHS4Kjkphp6XXa7Xe56pTPTEktGLnoEPkDG13aDkeQrLHMEfuhADy",
  "key14": "35bZC1MxF9rR4RptUAqGEVQLLtVR7oLgUKL7HUd6QydEtuAPARss75ASs5YEL8yJ1C71VNHNmZTEF4j62ChRGNSd",
  "key15": "3fhpjjZnppbDYR2VF3pggNrW95QUEYdhFJg2t2rBtTX6M53HRPpwpfC6HZciQ2E9vJ8NU2yT6pfPEmHCw1NSdqJU",
  "key16": "4ud4gLeZANfLRQDAyDF2oxkBte7SH5hb45YLTrSvdUxUvLBhaL75xPhHovEf6Ra1bF4gjk3v8tiemzYJhcMi4nCy",
  "key17": "3yneymHt6GJaA87NqiJ6vZgfDiqqPsvEcujznLZiazSLsVWfKauR4uaDTs3sRgeFPNag1jA7gSyiUXS5jhSuWvGY",
  "key18": "5CkoDEHSZocF8qBR7agXUN9Z64pMob2J6TprqBb1GkoGbAYZLDtS8qD8sAVSUiux9jmFvqpWR4kuqUGcqAFrfF7o",
  "key19": "31AwrN23E7b1huiixNvyCBbMvoEH9rSj5RxujELypu6r4623Wq2KET94ZuvBvxaMKr27WGxLT44SZSqrvos3MdSX",
  "key20": "q5r8a4xUgxQnVTZEtZ4jSAPoUYNiL1hZqws5PaFaeTfGUUoc8Rt3Ye3mDVr59zQPx1oD84rWZStN4MYSxNvuLSc",
  "key21": "MTDNFij6dLCP7BWCx4tscicokNJ62Ln1XZwFyDyLgAzNrnu12gVygvMAng76iwG8Pa6MB9d7Pt3rwApcc1oAwpG",
  "key22": "5CC3rXnzwQxyrjYMoqBzv2b3tWBHLPWvK1X8yWJTJVPX2RFJixrxPwXn6so6jmSYJvBUka7uyYZkaRsVXQNUi1Qm",
  "key23": "5sEjLJNcQPTJjkqMEZLvTbiUWLswUtFhB9U4EWSx34um6ePtmBdgE9yUMEmsGE3kQXB2Z1tkZHajXd4SZbbAEQkC",
  "key24": "37cudEjdwDhNr6CeSMPVykMgSpvzR113n322651RPpsAMRaBA3ZcT2Psdfay7nbFHveztwk5bQx639fMoqfu8vbB",
  "key25": "2FJsWfa1NhdyANS5jGkR3swhRhRgRB3A5tb6326rF5ioPV44AzmybqCLZp684X2noFxpPrh97f61BQm9yJepahS2"
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
