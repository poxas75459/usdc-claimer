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
    "66HZ5sEYrKbrT4xqauPNzd9hwXgBY535bG8sKapBUCEpHsSr1nFMJ66KontDVWZL2BHzUngXVkEef6BKib7Gnpky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WUxBkjpTXaCzag881Bwc73mURREgPtPn1zHDdxgiS8U7DttXfsfY2CyJk6fFLQPvbE2AaSBCyeQJEGv7dfyJXZc",
  "key1": "tT2ibvoYpb5yVyiNZ6ybsAb8VBeuq4XD7AWxJTq1CKuLjSF8sEmoVRXWgMgXgQVWhCkqx8N44T2qJNHfkKAQtKA",
  "key2": "4DPL5VfToBRkxCC1fQ3o7YMLAxgUzZXd9WhcDRVr1sYFcdZ629H7nbvLMnPnaUt8Ks7UJDQymcxi6r5rwNfE9adZ",
  "key3": "PEPQVJbDSAL2GW7GZejAB2Rv4ee9CJdDA3jfS3dmTTj8vfgayQia4PsB1x3STjoovR8FsZMyksrPtdH5AuohXfX",
  "key4": "GGpigtd3eRDEmuVHpKwXZX9M4zPDbPD39a7rHnSk9Yj9Xt1bmCm6xAoxs6JeEGgpK7rYdEd3Wkphgt7XP5dEUcL",
  "key5": "31uNZXF4xjStbJVyGSio2UbFGDLZNJSf7QYY3Bh9VobJhvmdXMGLidbFuFkqLv7R3q5XXr99qf1CUk17TUvtZofo",
  "key6": "3Qgxyvaxtk8w2zqFtz15BRkUiiLtW3JjuTzguxJnLW8a3SpWGQtSK8W2dGWJtGRRfH6VJqT5Bn6b7rxu7AWsjtbU",
  "key7": "eSmNsSaDLhi7eBnkacpxz65bFfpopbzehUVKawiUcmsVeydsE8QPSozcBFqLtZoZtLVrFonpsU5Mvhspymw3TWK",
  "key8": "5pYwwJEGJUF47PvzYXgFgfpFEVvA6w92uTDLjqptRaTdbXfBjvhNjbvYX51JT9qAZoxrwhKrwjNTwUgyvL5xfES4",
  "key9": "2JETA4qSc7GgAzBrzqJtk4AsspBBhM7LzH6CrhXhMYcujVmYS9aGkw49ZfxbwsyakdwHPTiZfRh2m2FthfHGcMpW",
  "key10": "qkEYMkQotXojVZcH7uvGsMNiMcj5w8KdkrRYd9yr23fmxCAyAwtEdbER2gXe7ELFWFj7EKeMJPh3deAbDpcad8v",
  "key11": "dmEQ61fS7rzAsob8BXFC1UhxmPEybNoGh8UJ9NuKHbvJuThxooyiMsaFo7mftdH3ARHaAoSFmNy3PUo1mGpLKKG",
  "key12": "3om6ctKeu9377gGDT8YhZhC5nkLwviXcMbJkWGkPWnnLgMATgTcZgPMFHqjQVpz3SbwUg88RgBAr5Lwi9SVxia8N",
  "key13": "ARWVH1meju7Xfwyt5vmQNTkUww6M5MSJQGwEVtPBKYeWFQ8oQKUx4hcCyhRJ2VoEECXMawa2AHCHwexoqUSqgir",
  "key14": "QUYr9t4oep2ny4XrJmgpSx7ZSvQGAmFvZoWxgV5LGNkNHLa97kxj8vTbRDxwuofYjNypj8hR4w6s6wms43xTbP4",
  "key15": "3neenTqqhcKbdhKCv1wm7f2KZ59R2jd46Z5DdAJPDVjLc1w5qUGyr4kA76R7SXajycW89dfhLz3JgTvqMRuTZCL5",
  "key16": "4mYdgy85KkUfJLuPenrfjhN61JbSFYdkaVXursXxpEwNUmK7jK9wrTwiNf5oS15RGTWSAS6eih8zZSRHBFqZAsXt",
  "key17": "oWiz52sXzsS9EZYNhGasHwGE2fRxUnx2FP6eo73ksHTxxyVZ54nasiqLJiev3d5vjZxaW5vQsXnq32EcqiuTcVo",
  "key18": "47seCz7W3K9ptMqWPNZpw5vRwbjD6oK5scLSzyEN9t1yXjWdgqptKbwAd5oW2AyBjuxFAHv7yDfh7eK4hzR8aRM6",
  "key19": "2UHLDTB2U3Gi1MqZE8Q9UrHUXyGhk23xuHyAsutnGCfPmcntZBDBA9vdGrkdgP5iH21vsH1DdTtqeS4jtrFYznoP",
  "key20": "5SShmswgxmQqP2RtQCUX7ddSY99uPuSDFfhGmAWci9vZMARrSiGeuBwb9JCev37TAewySekWb8pkafByErKRNSfo",
  "key21": "5z3nyjZmp1ss7DpWoRc8aUHQZdzeDVaG4giaFRpj77bQG2U9iRqT7ziLx2QHXQEsyCeraCsnZjQYqhF5UmjHe7dR",
  "key22": "4e5NWJKwJXXNfvmm66YAEa6E4zxyADdtGrSmBPGdpQhAKwYWbf8HScFx2PvirJmdxwdnR5rA4UWEFPeKbvx8T11B",
  "key23": "2DoVSQmLt4EnMhv4imZ4hhU7imhp7FRWUFJwz4PCMfCW7bWFsyvkNbaWr2ZmkedEUM2jMwZbA4qPhbdnoLmLVQfe",
  "key24": "5z7gJayqgPYSZypWeq2tLgJyU6KDEUZM8hekHd3GWuuxeFovEQu7Tvi6GWxvvsHnGwCKwHBE8BnqaE5an19N4T7g",
  "key25": "4CG7PUeR7kKUAQmCGuTVFcKinPV82ScHYanjCMmEQCbfevPjrmNb4LXqajw2KB7rhCD5vBiiWFnrxg4N7zu2BRcS",
  "key26": "65vEeZipX4mpjMQSDPdjYzB7LJpJ74FYvonfH349BQBW3amBRUFT2FyqMhJv84p6g83jheSGXv6KujY5wF4xay6i",
  "key27": "4y5zgELdfp6hAJLrpGfueLR5J8ukPCs9MoMUMNjHN6e1joj5rCiP95uyA9kTvT4GVsoSAzGixFYgu8wrk5f242oT",
  "key28": "3rBvWwHVqqzK42jBsGapbTAjSecU5BTAByMXMRCTjJsPXqCtcJNX6ymD9zFUMPkPtRp2bmu2k5fxTqBgsRqb5wkE",
  "key29": "55qgH8PMQFHM79pQHcaTUu79MmkZ43CaxodtYvTcHQHse8fdQmZiQDXyWNnDQdQLzftPHz9fxqkgJBSr3CXg4Aea",
  "key30": "47BTZATodtQ59khdcfxcCwt8gwqsakK5zUXVDRULEHRKYtUhDVJXUBNcueB6pc3Tn5syC1YecB5VVyp5qe6K8CmM"
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
