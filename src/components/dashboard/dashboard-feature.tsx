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
    "544EDjBpP2Ac212Rw9CwEKbfcgsyqGuHwXfNM27XtWLvsMPkNsoZ1uU15FiEBbvc2UMCDJR3kwvsNCfq2t3hXZm2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wFGBkzLn69JZrTvtCt3AD6XidopxwMdniRS7DwtfA4h1jCGJTi6sCF8VCAY4dGE5BC92yUZsLLVPkSB4Zu1wfzE",
  "key1": "2LMwaaNdWxQLXBp6pD3pbsyhC2qN5jmvzuGuSv4aaJGohEMJqzCMwhEMbCgpckz9aaKLuakm2d25YdjfDwocEtYV",
  "key2": "4J7nZtfdxwjV64dmoNoeNcPJhin32kPJgWzfbkuE7q5GMo759ZJUAj82nL1o2uZk4FZyL4EYw5VQ7Y4R74gXFdW1",
  "key3": "VRVeH81GWfJLoSBM7zzzgXqWDMnYB3XevVfpFQh5J6BeGvcbVcDhaABzegzWbZmLyLg4TBU2VaVgqaW1cxFoyaf",
  "key4": "3zNg5LMmfmYdvf1wstJt72BNdrK1S4ZmVAW5YGBGj34qhTBRkGqDHc6H9orDGyh8ky5Uuy2aPcjTxpDc23XcJnK4",
  "key5": "3XnubBXKRuxPa6ZQFov1sxfF7DfCTdLXaNaRi7B2iDCmCe3xJ724yp1Lj9bM9uSH14mLxPmWbGCtUTost8NF6fgo",
  "key6": "2i6MCQDMrXZpDTJzsEqJEoYGb2pknGjGRjUVtmvCf86go24mowZknmKtqLP3DNyzGQXvk5HnkPyLi59oiT8KFgs5",
  "key7": "cC3G4RysQFfhbZqPrcK68nj8U6LLHEd6Cv5NSjBMFHajeijFRnWG3m2HgVFpmAQqCxxbDrYnUGH4FiJAHAxxHfm",
  "key8": "4jpTgVaP1ag6i8qBNZPZLrQ1vc7GX37DRRi2fSkAvXiEVBLXbpkXpgoLWspLB967Si3bPiuZ93vVNse2qQjprqZr",
  "key9": "2ZcufSZHZ2gufXyKu1FnZEoxT6wYEQNkBue73DZZ4UAwe35ZK7w3VP1ufgyKp2QHndAuQW1sHYupqo1ocQECPvuB",
  "key10": "63KUYNdRbjwLmuoK7PBuaWByGAxM8wZVALeMmYoHmXvDWQ9k8v4mDCBxvN5uuq27YWc3T9WUHpZveJ7pjEHdQiNi",
  "key11": "2ykpmF3D48zTQdcniTtiXxjqjgB5fbbfrpwFzqWGvBpAUP835NVXTgakUiHadbS3fzoHLXfYPrdu4oZKbNRjCqrY",
  "key12": "2TsMde8EVxA9XGhnhCVq97f9durtkayfyhK1kutSAvqXbG9j3aYxg9Wo5upyyQE2yhYFsSZwPDabzoWAGEVdrF28",
  "key13": "3gmcpPAx916a8pmusAthB4cnUab2mkVHPrDZRHRuYAmxdFt4A9iN6T9jPgHkiuN3hXWYboc898ZrudasCBuofNv6",
  "key14": "4zrLBadfHrpeu3123u9DEurKHVYEJ5PBFvf3FPdUq5bQqzRyvTP2CHk1nW1g4YaePSXjNn3GqxpfVJe943EAno9j",
  "key15": "5VEhMH2Y368toD7HU6cTtNtunM1cRqDXBsHXJFx6FkZBFgMSCgCHxvPpYqcXB8Nirsin21STgqVS5fZnfQSqBkEP",
  "key16": "5Vn8N8aaed5fB3GFdTBQoFxxQtHyDbKbaQKpQJ6sui5AGWjnumiMTMKi9k3JikeZbpnTyo6mK8oHj7FhmEaMkbii",
  "key17": "425TVuLr8YcQws9pwfPCCTxiwk9ECu28NoMhnx2kitdVyG7bKfQpYuRQu8v7fmpSL3zwNbNvRCDiJ3Lq1h9JnYoX",
  "key18": "4qrRKqur7F2gNoeZLZdj4sQj4vnyMs2CUzxocHceHfiXwkEE2L2jrZfJx2mxAoTKUvpqg6xNPTSVG6JM1g1fxQSV",
  "key19": "31Wr5Jk3Cj9oDDKP3xTzsnrx3bLYNwa4Q3GHwWfNJ2QB1TedjRj5yjTfmsa8oRpfntQTmaRMHmxo6ZeVhMgWdRm3",
  "key20": "2SYULZQZoDFpdhsdJWQAuwkU8fHUBSBwoSQAZm4bx8C11NDPCXZKSfCNJV2CKWVPZYoKeaWfB7tzvhH3TwyERyYj",
  "key21": "5jB1vXLQtV6uus6vF2HteSvE9zYXDchzc7Xx9aELvTYmi49MnwXCHddURhNhugKemkJjBpAxMyDzNjTjZnRZYsii",
  "key22": "25uypLKYYqXZ31vXyXNehCpmnDKLGWeTvWcg2xBBEhFyAyvfJuF2MKEXsX6BmrEz1m6y9gMFCqxt1W5yWwCR5Z6y",
  "key23": "2yBfsTbg61aQRV3Vcrjuso2nf4txKHeqsgAYGTSqv6sJC5yf1uRxXR6guE7i2E9bbwZgYS47URkzbwzRVzkahmCa",
  "key24": "24xUcxAJXJoSgqxugQbUFpStEeEUkP1HF598ygVPEU9zc6JqTaFouNcBHqMmE2N1c562vSfrpQBz5YKLh2ZEPduh",
  "key25": "3khBBuCTR4uqtDbwMKsRnZKBXwbWKrhvdWvK8WGU4Y9udANMb56KurrZWLT5b8Nt991aayhjwYWEXhoW2G9tGnQv",
  "key26": "bBgxyHbb6oKCTVGQjdCzBsxunp6G1CqPj25Qe4w6Ewsw1W3LS1sEHBLfPPoH7ZCbmKDoL8ADJgLMnqst6KUksxf",
  "key27": "3YY37MWfjmCZ4aEGUA7WAAknkr6J9vw3tzrzVkvHdtiiQgWueJnRymtcs44Lz2EBRBqgmosSGbk1C3DcNUWXmU3x",
  "key28": "4PBRMhhMf1xQ9tZhVMZHSE16yxAdvW4ku65MG1ZeDM1Z8WMAhEBoAjjgzEnrLmwUntWfzgJDGgjJYfPuVajp1mAa",
  "key29": "9oNzcWUYZUhe1UcSXdwTm57HeA8Y1TjATJb4fSvmJy2PSNLMdeTnNEaPbawFJzS2CjLYRdkf1hpebqAap55SJ21",
  "key30": "sKMeTPCReq3fn2EmtxUttKG2YFSM7BCosahg2Evic1VWtbkwPg83URJFNNoAKQGce7hZrWcwCrynJGtNY5mjtQ3",
  "key31": "RbBb2mh9uznV1tdX3P6Une6RQAJchiKSNevmrnm8RYdTEFG6m3N4PgxgHUyXyWZEuYyQyg7t2Fx2BDXLA6KSJ8g",
  "key32": "2rE4dkoVFHkvtUF8KFT6fV2jQNpxx21ShGKS3XivZUERVgFzN6d5nG7ppxjv68itAZ5w1vz11Y3i1MKyPY43XR83",
  "key33": "3LvdMhgGe9xhvkGMxwRc5aRcmuuenaLDFsir7ztUgHsCsr6U5uH7jqJjpxCr9eyFwKBAShKz8CE7NLwcHTSMWvVG",
  "key34": "2ZSdEeW2ZPtjS8p1Efk2R9oiYZLWBSUfjJReWymoBoyPPz5okUf9Q7tUetNrccdNR1FUSE76k1CHkQpdj2nCn7kM",
  "key35": "9u2nuj3bX8e2iP7H2gyhi14vrs76uruebqgxhaxqgKCgkp9cmAZQTvDpwdXkMRMJtxKD59jktFPCn8be3VUy9re",
  "key36": "5xbkmKaGLxzrQ2sRauqtDoTAdskcGdSk4QRp12PYYXZRZ8SauRKYSozDTz7QcghnshEnMp7ZpvPYkEDBMWGvP8Yo",
  "key37": "2tW5sENKwXskGr8QjN33BoFNnz9iEVEikPhvd5fhNtCoCbKA5jP3RF9UAHD5a1ezSWGKbwdytCvKkJDLmXJD9Wk3",
  "key38": "4y9BcMfKb1jCn9j78N4ykPXB87JXZbdXkYsSC61L5Vhx9diasuiFNP6EyXz3MQq9xc1YbveJtJNTRcLCJLeADVEo",
  "key39": "Qc1pxoYG7RgvZbJZbMHCo8e3TMPJrcraaDUVy5b4EcUkoGekf6CFvLyUUaqQptypHSgkUKj5QdMqjgkoTdXVgFr"
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
