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
    "2whif5cH1ycGjYttDQ8PKTVM1AHKyZBYgKC7dRveQv7p6PBGbcfkYU4pSCrqW21YCZwWBnypECXC9r4d4sysMTUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y4sGCbpjYoVhMDFWvnKyA2gsbhmvxe3AFakBX9AfiaxJpFcM98k74vPkgNUZT2Z7R7zqLcBC2Wz8Y2bunpKi4g1",
  "key1": "jmDxMFSsYFQk4pN5JtuF7fU7aTbgwkLM7hJm5oELkfWcdDBKtSZPdCk6p8xtP2AjgF43WiCBrnsAdHeNVHtX47E",
  "key2": "2eDv8x5xbvKej31JupLqfoFLX3oyVA3ymHMVtKNSmjFz81V1H75b5bo51s6dXunx1fDZLqPZeh2mRDf6pTNPv5Yb",
  "key3": "3bjRrcKezqsL34qJfcBjGbELjYKpFWsrpYFt1PjVgqt4MNmCT72mNF5DHAmu8Z98pMKFPW2MCgyVyXeh1HYrwKZ",
  "key4": "56fsLPjcPUuCHg9Z4F6hfLF4Mh6aXMTKCXhhkPg3ruphX6b62b6JjrUtHwnMmPuyrqvouy7ztDM7ydxoUdGJCtfZ",
  "key5": "3A7FoJ7Ytmno5owwrQgdvDnyaLjYtXdJRP2ivPdeVYdufT3BFyf3xRbbSydhcivgwa6MzSC8JkKrP4wUcsesCSMi",
  "key6": "2xDgxWN5E6BApWAsMUtxDgs8vHq7GyhxrcfWzJ3N7FTFKtDAcQA1KKzoY58FDCfnoKUwrj9hEEMPcCWubjbUnUBw",
  "key7": "sdfzdQd3Zjsby9xHY78C2dmECLCvPmM3YFRcJmMEMKr6smtQf1LRxWxbRkzcQJ6jZ7Kw1JBxy5A8wpf5SLciNdh",
  "key8": "51JBBJtBPPidcFbS3wgNkpf7MM6gQMj97MbW9mJVyC8WJZtPaePzQLeMxg5Am6Gp31fK5rkajtjuR2k3TGEgz29g",
  "key9": "5V2C2jFjiF56AV45Zk1WJWEFDewSxbFbDAu7B8ZEG4qDZCZ8hdcizEunK6KSCGRSC12j8UqitA7hrjMrd8rX5fGz",
  "key10": "3KH7Y3TsWMaDcjxe5gh8tEP3nEejEff2NiPgToazQnM4fAcTDeoYxaJi358aqEbSw1Pg6TwC9nJ6zm79zR9PsM9a",
  "key11": "46pkpijTCs9coduvc1jETJfMjvXZFuCTyQsbzQdMGjxJZbzM69mbqvhV9SZ13PqfDNrqwdiLU5Ps4hsEsH69nyWK",
  "key12": "5BhT7EXt5r6b7Qjgu4aUUafjM8qVvrfnC89mtWXvN7XRFUU42pX8EgbVYPXtNWcKUo8hop45UC1Neiyzqd2Bv55T",
  "key13": "4tuowqxCHiaTP4Fmuo1Z7eqE1tAp6XQyXRzEbDUsXRt689WAFRiqisgbpfnWESLn9bvUSHtX1Lmfzob5TJXdKe2K",
  "key14": "49HZvm1dLCECrmK2KmnHtK9mCVPnqmKeMugpD8BeqW3gCBW4JWsj5QcAwsXiXV2fjhfipV1WFAFjcy8oKazugPvt",
  "key15": "5gb2E8R9yxdogZHsMQGEir5zsN556iV56Wh4BjWRSivZep1dzPMs2U8ww1VRFA78M1Hs9kH1Kigww4jPzwEtf8mm",
  "key16": "5NMyYXxjanzV4jjRs31dsoptZZonwbabbX56hbKFSuWWQjCE8GrTppLMh9YUw46XeLdW3sgzavXVQHxpB5QgyMf3",
  "key17": "5VY5ngTjWyNRKsRwbgRfUaV3UaGQQsUyp7uuDmVEqtKLX3LggVXedi9usycUZ45BDpGPARHC3x4hjxJwcvdC3FvK",
  "key18": "29eSzXYugpXT9ABtjAr4TUCZSxXSachiyzxGKuFYkUrPkuayUx2B5d9dZW4HRMP4gzxQTZzv8aEtavmrRmYDQHzX",
  "key19": "5yhhjLE92czBHmdR3F9L4atNw9Wi1XZKPj37mh3YPGxHJWVn6dTLmpEjNaTHPdxnjDJyDgrT48Ye59ngiejJSHRv",
  "key20": "5j73eVavgYctfm1A4cXb9RGn71tUcFWp1NEt2Qs1ZZUuCqwzvLUfkFZunw5RQFN9jsvrpjJCJsopJNcmEJqoAbBZ",
  "key21": "5yAU7JdwPMPeo8odCzUfqg8rjMaxCHeRLAqhDx8J7NJkrxgp7Ts4aWWRiBV8PhewibQSZGeKy3A7EBZnuPw3d7uv",
  "key22": "4LXv6wxDqZLi27Y5WLuxpvGbvYqmDVDL2Er2ecvKzrifkrdZ9NzzP1szHciSzspeYiH3sQ7xBppdQ2VhFeMJboj1",
  "key23": "55JitxgqtLU45qEA9zgdHvPgB4PE63eMkAsaQXwY5kWz672TJYfnvMCZm22kkLCtKfmXwVLGH9WEZGVxWDXdNuhb",
  "key24": "5WYzTBNbyT1mSjCQDxLUpuEFQ8saBERAqrSk5oE3xen6Thqvd4TbjT3P1QwMLNXQbPQiNXxSvzSheja4ut1Tbor8",
  "key25": "4ze3kGeLtnif3trK2uxZL3hwoykTYCX8ERc3YzgNqGzvXhZ6Fmehy9J6NjWkrNNqeTMzeJyMgLMpbwL5Yvt2dLHm",
  "key26": "5PyDbdiSJEcP3Rwav4LcucQAriBoG5YpbHELt4ufMMWu6uGBo5SrqMbceypkB7cxP8MuGEfCXnD1wSzBXkh4rKS5",
  "key27": "2R746m1sR1PqZGPt8iqUk81qXsnkGcbite35nwN2iVCQcmPaBn95Cj4n4iApUdKb27jU7cX6WjbGY5sZo7U8Jgf9",
  "key28": "4HQXaXpnhZFaVaeuxcvxgcbeEyYF4RxuzgLJdNXLDoDLSwfSXNvpsp3bpERrf5FJVh8PMVY7Ziv8nKY5tnAnGjKw",
  "key29": "3Tcx76qz52NgBaJD8bJm7zXhvERzncAmoFJ7GDb8pcQtcM8xf8CoZhUb5hShdPBr2TMJskJxCSG81Z35joppAiWp",
  "key30": "52rgJvYFypB2g4x6mUECZmuJRk4TJ5NZZWPhanchmntK8ASsmNu5kfJjZbKgUhF1B6gNQMx15orawJm4awRZJqm5",
  "key31": "xC76KakJACAAG4Z1jXu1xuuxj5YQoaWybBPVKTnR9ygEUkZmXJysPYktvBvYJ4H9Z6VQvAepQxxF6TuBGtGT6Zq",
  "key32": "3Ujhs1qXTL2QUSyVudSwEdCureBJsorq5oiMHyRwBhes1w3yazmTLZ7uvdQ8XxjjKUbLfixJofgi7NFtyM2o9R3T"
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
