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
    "2VhvcdRCshKFGJeCRULFnJQDeJm5Ys4G4vyWbhrNXH8Jsx4ZgG4mW7zhBmejWHY6Q1Mzra8vbxhe8ReREao88zYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xY8pwgbdae6Mq2r5H28fqAP2BCaiXrmz3Gqc31FZrG5oheSJMSzQcBsmRCNZrDKrHwcV9UfWULCTtEjS5y3nAyC",
  "key1": "3QDGCfj7Ny87mBqqyraqj9SWdspuj3YbtPXpe9y2grfbPvecCLsEuNUEttfJruu2GycHrQU5ZuFkQGb6L8dgzDt6",
  "key2": "4jqzxscYGrXFpW2nXrtdnXq9MGATULYfqAZYjoA3RHre6nkh9nUfKtAuLR1BHDn2Kvwh1wdbn4mKCjZZVkfDMuHF",
  "key3": "5PLg2xTz1LQ6gfTwFLpwPNZsr5kgg1ygwgKPAL2VNWFJvDm83YH8TvZ8naeXsxu17aAFJJg7DqZh5sM3v4oVKEqN",
  "key4": "4sy4gTjogWWLfQjB7RjXmKfVKYSqedG7LTiWmby3iavm6iuk5rWJRnEz3jCUjokGFawxGvQzuyz9tgHcgx12pyZ3",
  "key5": "cpFsr4CPK1hDXgRfYf4UKAKhvxtdmTcXUkQbmCNt63Zj2QJVxG28xyuTQEyUZwHKVd2Zu9VRgxnq5LrBhxS3K4s",
  "key6": "5TRU5R2bUkbT6iVNVc8nHfiAzQ9rBdfkvTtimdJyyRy1TyjmC7FoerKpytos1Pzk6eh2AhDnSZbKpxY8yYyBvkpB",
  "key7": "67QatLzT8sUC59nbQn1iC4NM5h1aJupWzwGWygLDSPpuBQ84AyjREhwFYKcckvHSn1j9m5knALKYaPZaTnXPeFhD",
  "key8": "3gWv2aSDA8DKmmyvfVHLyt8R3C4frqaeAs83UCLjuCMnMKoVBUq4PqwoSS4rBxssVL7xfCgsEe2dpzYa2niQCKNT",
  "key9": "63xzeS2TubFPBqzj3Yy1VPqtJReCTvxqcpUD1fD3ntY1ZZ2ebdJxzR488GgfGF7Uth5oft2EdUfhTpVoWZcs4Yvi",
  "key10": "3TFedb4eHNH77YZpP6rV6bLMBLDuzM1HmQyp1aa2kMSqSKs9QxbohuT6MJYXYjGBwGjYdDoTGBUQmRuQzdV8fABM",
  "key11": "25vdXZbRUZmWnPmWwcxmUFeRn39YyARq3ujajtNy6Xrkaumd77JV6XgesXYZkbM77ZbjSMA2T3iopAkJoLN9Vc5N",
  "key12": "N9JAtNcEMsTX9HjHZTZbqJAayfcNQb3F9ovb2Qq9TH79NMyCZc2mp5Um5kHZ7PnGsU49iT7ucVwLfLzSTcH5AhM",
  "key13": "5J651UgGQNgdN8KDY9fGGaWMQtS3buDsVMRFRsDUZxNcHwBPVjKEyo4vy4qiDiLpKAtKFn3ndVcDXShwx6n4Bhav",
  "key14": "4GRQdQ9FprPqKfpF9xCP7ZDMB3FYTFDAe9RhaRGiwzJLHjQTu6ww6X27oXC2kBFTUw5Wwc6Ep7q9KKtRkbCTBTAJ",
  "key15": "49Qj3JKKymRuyHj38cxmYJTmv8q1Ref2znDVkaFPjStneLqRHiUukNuotR2T2FYrdrSnV6dBVk8ypYBmFcPUcKs",
  "key16": "2vHCYSbAq9TBqnkvZQS41X6TokjN5ivTJCW53nbWHDuvkGGoWFHwyHakBJfeHANX5uxNrKLA2pofDZvQYM8BgQ7n",
  "key17": "2AFb35ZTKnCttovoGEnDhi1xjfc9G3rxAB9WKbDZnmsjkDnjG8gkqYu7yUoMdooUu9MMcEoixtdE4HnmRhUzao7Q",
  "key18": "52Egzo3dckgou5erTcEPizCgU5sttnZurTzaVf81gn122gxCw1L2ZJ2gXFoJqsTzaJ8ZHh8DGjS7okDr2pL6Qt62",
  "key19": "P6oLerZtM2vEcmH638ZjygEVRDiUtXChr4EKUbwnNUGetvWuEJsFsUWydiRKXpzMjdyWRKnetacEY7Sf4FyPMg4",
  "key20": "5Tc7PJBcrmyk5qKJ1GcsaJYHk5pXxuVRxjPfNmkBhGn5szKgUgKMAeZ1w8cRBMvKxQ6uFQ8q4DgHaQ7XHUAToBpm",
  "key21": "5qZTrx8TLrvorCABiFqJxiQxZjkRZfEG9uR77shHoitrsXGQCZ4cSTjcCyGiAYn15RDmdBbGu64Njo4BxfGqZKAo",
  "key22": "2jpiybaSeQ8Ku2WpWM6a9fAdU5c9gmV4HseAxhQtbuRkApsHg4vyQ1WHgp7YxXdDRQYcfaQCKcGJcPta4P9n3EHM",
  "key23": "2E9pF5PmZb5o9v5CBWos1dsv2TygSh7RPJL3EYvwmQbLzUSnXK9rZWgfz4NnMaPVMR2YUPdMjzbXkXP3NZTQuSLT",
  "key24": "5BQSnYvK361pQ4gbPnLsejvNGQs2Qa27PaWE5HbmsMx75k2o8YCBhjvC1paJzJXzkqpB7wv8G25WCG7UQ1NxHZgh",
  "key25": "276tBbEoytCMHGjGJKewyLWDXeJP3VYrowNDSACvkVG1R7hLgxzfPxrp1YCjSDogkiqTAgLSoo89pASkop8PT5gF",
  "key26": "2TykhYfmjx5d6akh4CcCqCSeZTtSNjG22dSWWFjJECxRnf9RDQwdUqPsuSBCm1FQ7vxNM1cnVoTipkMBuNNeNnLJ",
  "key27": "pjbDJvW3DdqBCKmF9JjoyTjKAt3T7EEA7mhhbqC73XnFvNkuathn2h1aawXvX3nCtfhWcBuZJ52TQ5Z6u8vARTm",
  "key28": "5XnNWZgpsZHd8WzJhGxY1wWwrPPAPE8bwL1PkBoVMeFWAUHKLgbaetwDHT4SCfrT5a5dFwYNyar9tDqPhLtiUmPk",
  "key29": "2LVrvoPYhEiL6DDyVjaPUEoKW1JUonavQPQ3CR61Q9RJRcsPYLMtVThm6JHtGhQcnZcXckbgmhuKaQHGFRVgojHV",
  "key30": "5hnLXxFVK2VAXJfAfomMVb4PPTM792AfQeNzj1ixLn1T2gjsdZaaUqw7BDwS8XkFd8Y6QwTjdAk8qrkJszTQwab9",
  "key31": "5voTEkbLKBSGAxhP6kB6a7sgrt8QzceGGrKmupHLqSbGA33UBFE1DuY6A8h3y6LfeFhcdNE2faGp54Q6GuQJ355b",
  "key32": "32HK6BdACdNqjbjHdWK4cGokjanxMNsvhswSbknF3uzqcSndt1BiBBAxuKacqA62mFFnS1hvHkyRwREAdDTTojJ9",
  "key33": "2dcMC4YdHZ7a7thu9EEShkTAckmjDQ7PMaqM7BJZ2mVpzo29GU6kaU7e1UWvPtwaMMdZ5Ld1FjmoWir1r24UaWBe",
  "key34": "2Jd9HTXQsL4bQeJsryKap4L8i1sr7cWo1QGyunAqGnXL1xky4wGXRfxpSDpNr5rTdkqFFWyme8BuexHpgridU8t",
  "key35": "3baHYVYjDqUiN2SX5fw3zwhAW2Yh9317YtNMTEAfZtRN8jBs9pb6tmx1MZZTr41MHwwuNC6yqtqam5e1GsrXmHn6",
  "key36": "4sSHTZ5Mh3kaoa6FXxAFB5iEkmrHVHXKD3hpbXd67WzvbgyQJV6QK7NqW4bTNSgNacKDD2VNjQCMiP3hwtdnXVri",
  "key37": "2d2pRh2mktkuxNF7wttgHzeNXP8ggXXq7kxYjgt6gRbD4BXyxYtgtUuuFbfp3MofJM8np1whszXUohi437ycoHPP",
  "key38": "4kyGrAXLAzxTnMWLuaHZWkrpJTdL1w2zoCFKLDbgfQyPf5uLu77bbZPNzLZWXdLBsKHZRMimTrNHityraE52rNiP"
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
