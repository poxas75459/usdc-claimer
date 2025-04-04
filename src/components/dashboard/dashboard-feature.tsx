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
    "3j7w5gApFz7v3Ynt4wwhe8P2y4EsFt9ENMSoNsypwJPiHxjqsMTy4gyvh2JvoZbfchbVrNeDAiMeJjsAvwRetdth"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43bhdCnrVVt2zW7mYQthd6fdiLvFQ3fTmne7qE7ViJvJU4euFwtJJCfEtwZmjPkYo6N6iN1AzemkuXLarEh79tr5",
  "key1": "4PB8UJo1hPSrRAB3VutZN9UFrFa3EzBQkuPK2jpmAWP4XcixxSWpEBRz7pRhXpuovQbGpyAzsdBUXNU9mS7TNHG",
  "key2": "Qs48LQ8g4PKRSgy8r72tHzMNa39Jp8t1yPJkgKeubu6UsZrHe6v8qCiVecbwU2xYtFvLDCMcgFczkMpTJgawtwN",
  "key3": "2Z32rgfnKoonQv3RVHQTNWZSLh1b7bvnbq6Nh1Qq539ZUkvRy6QR5tKgES34TtFe33FNTSNnEpusscvoFjPpF9Cx",
  "key4": "2MKiAFMzr2Dt3jNnLNoajJzLqkX1AQ1zBe7oxU6LsN24D58kwNQZnniwzE6DihdN4JE8CMkuFeTUTPkZBsug6mLc",
  "key5": "5B95G4DMMkdwcMnz7rofxWt8yMesBSuSUJPbbcYy1aWjqtfhiZj5hNSQo2wRVV9R3K8e3ToFK2fKkQqiVbv6Xtz7",
  "key6": "3EapqgpWTiUCU4sSFs2e25Rc8suYh5y27ccyZ9jr4AVzfrugodM9ymSiwP9fueFPeTttLiq1f7KWVSqCowt3Tfi",
  "key7": "fdVaJkaXn1cBewinmb6Ywkegy2tzBMUpbrdvGnQZM8SsF1YzuY5tqAm8JSkPYvzyBYxikbKGq6V4r7SAjzGwANN",
  "key8": "4FekwxsCuX9Jsn6diebEuceKVi93t2tiqPWGXajvB92dGENLx9aT9AZseEcTD1QXkjf7ouZ2sS8QVgnzun6yJCoy",
  "key9": "MoKuizYjzhzCAugNtuffbMRTWgZ6bScsEJaJfE8Rxd31xMyBUN7CyazUvuBrkLhzEQt6hcW55WYevyXcYa1jbMh",
  "key10": "4yZnCrKsCeveATjmn68xTDgExNBhLBsiBZfimAYwDKakY3jM2woJitPU4MTYJfuYDhTVjEyPTauRt8d4HdQh8S2",
  "key11": "3gJRYTzZYc5YTHNRdwR1QhhjFp8XiKgfWKphHvq74QxZGuz4mTvjisidWc1HGTW54quYgcumTe2XXsQ3z41Vh7zc",
  "key12": "5THq7ERiryD3CyhNGMtPVDexjtK243QrgZmPSPTWVpLj531Q91QARpem1fTh6bfWWt8DXPocRp6wmv2Q3UMUderv",
  "key13": "2BwmxaXuRz12qx7HRzoF4Pff84ad69m3rf3HDFueojfBcwuFtje74Br7ijioNXC7THMd5XuERNjD4dkuNU6AnBgE",
  "key14": "34NwgdYy8P4H3vYaBLsMYZkx9DVaDGhuBua9S9iSun9Y87RNL73SjeuZrswhyczY9NQAj66LdMcma1BAz7yXh2wm",
  "key15": "4AQatAraP7LwNe2B64vcimgwqhs7dtn5VQen9jS2R9E3pGF5BQgc1x1Z7thoAsUzzZ3EJ98Hq7gDs1PN47BRr4j6",
  "key16": "4e14U1u2nJSBP6FWuuuu4FctkadHUpXGDYdKanX5MywnnFv8LgBmrn6Gva5tJabpo8cy3347rMPtLQmuSYKSjYrb",
  "key17": "dpyPWM9ajdgDJENzoEGrTiBCXgMvpVpuCwSns1mJBFsxKaTHU4DkTXRHviUe3Qa1DqP8N5nnTVn7kmgdKNxUqDU",
  "key18": "4JMoZb64mnwhZtMJW9BCpRsg8PQqXJFyybhh4EHVWktjCLi88GqyBYweAM3bqHxBSL1pPMQjVLraEyT1tuLdWvy6",
  "key19": "2tQ8ijBFgkcGoeovPXQkiYQYAT96oy1ZaCrAG7ZuvBrAzBwyd8tWEznqLzWTLWKWRuAf1zeQWsAjrZ78VLQWWvJL",
  "key20": "56GbTxyJKXjvyXub9jDPBPDNN3tC95eewCM7p6iwrai9i7xCQ4RTAVtir1mGKDJJxYz9KvPJzxZ9fF3wxZRY7Jym",
  "key21": "3vSdqxi6jPwyapHnsdsEyPAjs3qb97wY8JmQvfADQwyATAHntfHrzU3Tu8XSfxQDS3f9r6bEyLPcs69dajpST6Ne",
  "key22": "2J5qBhFXxejqFRSPUH6CCDnJoJL3AugXn7sAiZfcjnCzicDM4z2oRMBF7X3RdfCmJCwx4y9NLTGCvouJDpLhLWBj",
  "key23": "3otccERB8SqDevFgEXQDmkMUk3xBtFpPBV2hkWYM1YB6L659cHnBBftMnpe9cwGt6To7vJo3BBMcek6bYxqSqxcS",
  "key24": "61uTfL4zeorKeEwGjUno1xVj5GdeAqCd4Uhu1upGVvE3iPPaCsDgpBCgcd6WTpvhmxc6mQqbYKYXhjWR7sHRphZy",
  "key25": "4ANKQj5CmBC8YCWX8XSmo16DZ5JUdHE6wiE94jPN3824UxgR3VHpQZnDeyqminjjHkdZPqZqBvAbe7uAsaAPtf8Q",
  "key26": "3cQcEg6Kead1ZrQ3hWmLtS464ZVqrJBs9nHVcgmSD5A75Py8STVdDSPmACz2Ez8ohVRMshVobBNHcAzXcXr8tPya"
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
