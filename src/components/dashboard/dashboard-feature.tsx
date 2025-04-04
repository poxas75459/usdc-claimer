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
    "4epDdAc7Ko4MASTJ8E7x21k2itERtY3DZ7XkQmJZrnaog5TFfHFSUiqcrvExBzzDTyg8MhzvBPf6PzZEnBEDgneo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nF48HdZhTpWZ7WKPpaTXftEvCAPTnyEo27ESM31jsk5Z7BziE7JRLkhBRi2h42vweJFEz3kDszTyQXwqXztF9xS",
  "key1": "PkYqGjj4UVDDvYFxHPmwXmqNdXF7naL3Tz9Zak8TfZjzCK2iAxdEV1zw5zUThXfN9ctrCx1KKEfiTqoHdupazvc",
  "key2": "4MNiGvLWaHoHWXDogdoFgCsKko8QPnmaAqDRobc1BoKfjNvY22XVvAZKsQfhGVg9DS98kywwRByjSS66bwrkSy3b",
  "key3": "3T9GeXewpXZiSH1s9T5EABiMktqhUZuFEVxuW8WmUfdRStJpvvW8MvPuERQXz42As4ZipLCijPcBL7XsYtisY8rg",
  "key4": "5aDrjMMgWV6bAg9equKH3LTamn17FtNTZ417tyxm91UadEyZRKvQuPXZoHQ4wuA7KZnxF5RxscnUGGuiEgJaJrKV",
  "key5": "3znwXmwkRY64YRnwzn4A7SLPsmS7DiMm4BmukRqW7SBg9STyG2DaPv8Aaj6vXLnmNikHsvkAzCUgdh9MbMTD8qsz",
  "key6": "2PUKf2wxmKi6J3UDkqCxYcKfiNm4Nvo9JVerAJyLG49mNhfdqfHB1pttGg1MkGM7tBDLqYyevfnhv13BXnUB9TJz",
  "key7": "2vfjczkQCLPcmFPDrBujv1QiSZ5eTqg7TCcaSdWpu1Y5dWJvgnNY25UaAkv81FruYJ5QNrN8u3H6ybGAdGGAD2Y8",
  "key8": "bk4BxqCfjRkxo4syL4m48sCMMWXGh1TfTujoU6yqkaQLGkr4SL3km1pQtghxbQYdPtUHX1Yc4DckcVwXvqLTyha",
  "key9": "29G7VyXQY4HSm6QptESmfJwgwwhyAt8fSbx9sErWMbq5tN9TSk7mjmdQYRLFPRXshKPDskxWrCLFRKXgkL2iEKed",
  "key10": "4tWgVScEmTKSM1v2q7edK8Xx4idSogBaFeG7Jtb22goi5Euuc5p8T2tebr7HqSP9u3obiJQu24KPfERcLk8P8NWi",
  "key11": "4zWbZLrJZRQoymmwPzrShHsx9Wn4u3CvzwsNJu6LwnoVMpFYcDbuLf9KxNYQqeYpQAfm5NxMoRASVXerYvUbQpQW",
  "key12": "5N2dYviQAMoovsshkzzQg3pvfs3n6jyo1wUAXJiAay5ES2TegCA9FR8613AmxZ7BnkB66bBs7J1nnvUypnzcLE6A",
  "key13": "4BPnMi9WAeWTdk457t35xMWhWsp6EzKd3C6bhPrm5LibCz36w6rnG9DjhEAnssfGRoo5iD2SerWZ9KcvR9md2zgX",
  "key14": "NUkLkBdkDHsCooVN4ZLEZfoiqjv9GFoMF4SEiD7sLYcZzvVFgizVP6Sb56ryXXsAFfYvAHWNj5325zLLxUsmCo1",
  "key15": "Zph5EkuY8ZVLic6uebNSnurNPaXKSbmMsBmRNEAZQs4TFeU6xPaUccVHEDyKMQUW24c3MVvWF8j1HdQU4a9aQW5",
  "key16": "3NBKun3U82fG4L97pqeT6wjiyHHacc9dPtE4MbqRZbpk28fSGnXaskuWRLDVQouG3b8GmwxabsouAvjqySsg1TKP",
  "key17": "5oRZambj9vcg8stfDxQ9znnns9siUmsYkzZHa7mqPbabBN3HC1h3ah5suo6E3gycK1H9bsPBu5sSP18ofTsiHxUE",
  "key18": "2zU2YYtHuZAeQaJipUSsKB4CpmpHi1ZPHsfsFTua9YW15gyTtsL54KVMXDAeF8nTHggyvkiWgpgDtQTtgi7f6Qs8",
  "key19": "jhWvdByYfUoEGjXVW5U6M5maYbsUNQgmU94BC8ZksZLhmaLUfN1BBXa86zvMiAB5KL6ZToZBSJ6N9odaFrAaBDD",
  "key20": "3fGdokFkhkpUTuWA1yih2aGCcnsNkZD5HyuhEtSFANQgYnizVs5FS9imPCEKzh7jWTfjfcXTEW4k5gsfr8F4AJVe",
  "key21": "39LSQQB2mz5J4kC8SaVHg5GAswJgBK1JwCXXtNC82uEwxUaQ4PdJEoZ8L1Cd6D2cbKokfQNR3zqUirurWqQn2TkE",
  "key22": "4ZLxGG5hTkhTroRHLB2q3MqpsmLqCSnZjnEo1Z13WE9HgqoeV8k38Mo1fMJVZDtGiFp1ftvy3GVgtdKgWSfjnSJ",
  "key23": "5941S5FZAAp4ZS73Bh4xuXTQ6krjwFp9D8wU56iaj7CHaxkFE595oXbruRuyLAELJgfE8LdgRVC7phodDxTu4E9Z",
  "key24": "3WN4gkXbsQhx4MPkofU8RE3D3xuf8Yp2Dvi94FjhCGXUz78c7zYEqtNF7esNaAq8NdH7S3QqnWRYtMP3WPhkNnnm",
  "key25": "5BGoww6MLuUmvMniD45j22NDArkxp2n3EyiJMedCdVFs22u3DkegkiKAcX2N6kmvdhxAtFVcijKigWk9PSGsd5T2",
  "key26": "Ktv7ZDzcmcCTN7XpJJ43R1gxW6utHBBLj15dzpCUGT5hHBGrLCDDD4uETofRewQ6K7UcuSSYHviJ3UZnY1rTSZc"
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
