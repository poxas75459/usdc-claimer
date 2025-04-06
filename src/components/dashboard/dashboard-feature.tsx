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
    "4pVNpDFSqsvk3SoDqrVtTd8MykDwAHr5u11xW5Z9Q82EcapaHWBKCTJRUxsQovRp7MunjFfKKMLTCcnPBHeAiRMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kkpFkKwNAU3LaLahor6oLCotGYM3Xp7gxS5gXTxRD8D3wxqZRepSvojFzu1Jtne7o5zZ7CfybDYpcvqXBSVYmnN",
  "key1": "F7FN9m6cnWKyDtUPzPFMrrTFzyej7qzDnMZgDcTqXeHbRsyDF42mSvFE6jmTfvUau8TXGmK3H8fqG38CxsveCEm",
  "key2": "5DYphRkJH3XwXjDQn7665b5ZhnnyUhpAdXR1Kwt1n6beK5pZmhFnDqWXedT4wS3k2emrvwV15VKaaB2rtTRQEhrG",
  "key3": "gPiFypf3W29vxCX2A5LkPjMQGw5h4wxhxrXpqc2SAjnbypsVwYmLLTcyNDXmYo7t81pcgKm5WBZjxa38aDRqpTx",
  "key4": "BgTaKpMSU9G4RtN4n1dMTcGoARRDS47oVhv3P9Jr7BDNLxY5mwc1iBaYCBfS634pCooxcyxJjpsoqyjtigkzv8Q",
  "key5": "4BcCKAshc8cYiWE7P4uaCp6S1Zkz4yR93YnmN66fkbEq6PaUf7UPeq4cxNBfuirBqEZLK4GQn4Dwak4kskrGdeFq",
  "key6": "3pNmteisPtYtzXF356Wkmu2NMYdfCaFKZKDS9N2S8oEqgkonEobTPFsegV9RG6E36wC3fpZska2P29thCQ3TrnJp",
  "key7": "59566g5nxVfGVr3eQ5d2sHL8FaJsSYPFqLr3ThRRRKCSrHwSdLqAwN3d9d8t64TKCSTFvVfSAHeNnmtmbMmm5CVa",
  "key8": "4SXVrssnCnwsm1aEJ2EoszSwMUQjS3cTKC39siXirTpeyz4phXz4A3tnLi5sfZ217493zq1LS2UsFG3zdu5dincg",
  "key9": "g7Y8zyV67P2cdCmaFusy3QTyNbQwwRzyUi8Xz3Y79AJwoeqeBkChpfCUgBoSe9Z6MTmzQv8ynkhkkZ6bCJD9ULG",
  "key10": "2uT47tSURaeNiDoTcZsRqK1v4YdbX5uPjKvZyKvoTGq3R7cpZW5Hx8U2kqgMHqdPw1Cq6widEdoX1bwkR9EtMJLu",
  "key11": "4rR1ku2NaQkYgxHooADvsAqnGjAEbsN2gBwZomDFdwAdEdxSnkwEEmwLC2VFSY3YQdTHVjnCMjodYMfcUwsYba1z",
  "key12": "2NwVkYiwTpmyZnHWvpJZWhuBovbMEizsV9FNdzgA7ci7XC9kGX5fWDqBSm3n8zSx859wGgXuRCJYL3ZMvAKYs5wo",
  "key13": "XMBH42NYzPxatUZrJp7B3JGFF2vGZVY5DnTUBCBCkcYcDfQgBCpybFw7aFFqEUdXS9cd38nYAbfHDZ9DFBBvyo4",
  "key14": "tCc39SzHYijiu3Eg1bwxpQfV2UAST2xGegSq1mGC4HmFJwBEyyT6djG9gzoCRpwADX4nmQdYnosZ1uS588MRUgG",
  "key15": "2fUsdjpaWLEJn8dXi8ubnnKnttGABtUdcFV3RLQemMymq8gqP5g3wSkEo6guUFg9BjuqZcC94G4CNMepduPqDPWe",
  "key16": "47V44iryMgDudPqpe4VhNsmfdL73D7R7DNjVUjkeETjobP61M3dZPxMJv1w3ktZ79d66z1wKALptEsfKhys62FCh",
  "key17": "2fkqNLDb2MkUbTGVS9BpQrGaKopsmdXMEffPE4vwVSpGVkyotet2h9wTGLnUeCg7TtZ1aQNBRuvvKdWFYo3SjegT",
  "key18": "4fDQ8678qa1ke7aVE6B4DZYg9kunNhrxXF83DV3qw6n8SDQEXc95FsNgD7cQ4WmtdTxChxu2TGASqKyUVPhz1JyY",
  "key19": "51cXLfPu2Lgq7UyncFte15SHx9jgUSp6YRq2g1MYmCBL7Ag25LnbmFjfVyQ8NZZeA6fhir9jMoYqA7UCDZKNDagc",
  "key20": "5qU5CFGNT7SQhQshWWb3syHr2MgMwGMz8H6pGgo9tKMBA6aCovuyZ6kQLAadxNtFW3zwT9rnexwbNgrPnxmtqQpm",
  "key21": "3KT1X4CoxAkq2DfuZoNY9fAirTtQzDjW8t9ad4sPzqBi6ZMUc6yQh7C93JtcpEeWu7epEpXJWPEZM8xD2HBBQUYd",
  "key22": "5GURE33LJn1U66xUntRBAvAGxza1pWttzTqxZ1Yjka5JVsp4PcomjHoWhLm8Tt47QscbdYRAQpKYobjzmn3oDiDY",
  "key23": "3HERZNDQP7u9wQ2bgm7hYSbQHR6B7nhJwBJYLCVmH3mvqjgd3ZJdiDDudNBUPErZYXJGM1msBu9QTbGkDT4hZgMd",
  "key24": "KaankPfp6eFCeVZLy1CbcimSS3RRt7Dhj7r79UvLFrbmK4CvvM3v79xXUbSyCVwUDhgptTicKyUe2zRbW3ELgh2",
  "key25": "2oM3FR67iE4LW1UVqBxHVNCgvZT7y8JnqcQ6cyYxmXLfdpmKiGAf1QLMrAimW4wm9C2HUuuoFqBmFa5HDuZTK55n",
  "key26": "4iWm9tmW8nqk837aqC6pt9NwdKGtXXz6XoEENK3mQmdoyN9HAor7JTyeSfa3JPrvkGpqm47BmTWKDmAu66wSNdJe"
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
