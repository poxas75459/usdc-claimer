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
    "4bMn3ETWsuCSsafjjRhuxFYxWLBP8JXYQP2sV1xSQfX5nUnuLAW5TGpWcKvzUijFXocPndTSu6SwZ4nyxxBtTPv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64Sm2AYQS8pMZFtzbVfr1rWh9GdvLTtYoss3Zz8kzHBJgyP94vr2Ga3ZXjxK49Tf4rUEknjtuzsWaDqb4FXorELb",
  "key1": "4XgvSgRVB1hCcCwyrjG6VQx3iJT1f1TPPjUfrYENfbxkbFqPcJPTnqEGQ1b4g2T6aH8UGavgusbRoinjmbDoCSpA",
  "key2": "5RPzzAnQ5J9RRsMQcyeWH42Qqye2vHoyGRRvzo82QoYjRRJBGXRFgnmPbozBdPNqtDVm8Twt2joZr371Pabmd9DX",
  "key3": "thxYQfJcnzCd2Nnrs4zZx81CRHETinSdfoPj5tx35HwNwNrrbWy37D1Fg8zj5PxUbhjRrJdKKC4nqP4iFskob2S",
  "key4": "4gVBLWFLPw5KrvmwtBSoQWdeWfZ7MysMmmzbzihYCsrcSC8p8zf8bi8ii6bMWp4e8C2hVQTkd6aucaicu9s6vTHE",
  "key5": "m6tuHwFWJG2ikPNkf3dDAmYuwYs7ZKdYGrmXyYHc4VQge2QWZpUMFtq6antiLHc8xGeAsu6rNwkWXH8gStMeZ4u",
  "key6": "23tqnUvjxnsN7a9ZzpDjhUuRY4wF1ZRx2A6r2VimXUMXUKk8AGhf8AE4SiKPMvpRhjW77UVDyg67yFXW8dGnZGbo",
  "key7": "2YR6T3uDafQhDdsNmeFFqhFVwu11rLDMM9gR1uQJfkC6jYDdmaNcWB573kvBqPz11QHepPfM3NENmGdmkA8bFpov",
  "key8": "3Zb3g192WCy11oW597H9N2NqQ2RiLDuQssGkEXWttUTyq7ZaF2aGk6gFcDAKR4j8CPok9Tsv3w8asfZHPUR93xWb",
  "key9": "3AwXucvwh7pPNatXhow6bi8Tn9rWPrsjUyQ8uT1kxAKDECEs4QBjYZZibHvLivkZvjxAnU8ZmgX6zU5gsVco5kZT",
  "key10": "4GJ7xNunpS33jjpZavuCHZBrEwYJtZxg3ZZ2ZVZ33za7Z3JtxTLv1FKmNQ2mfpufZssGVqf29idodghRCVGkwCyC",
  "key11": "2ipRCzRwu77mxhjyVhvQtSpbNaDDXQhurVV6VgaJ6nongHaH9rwj9fwRuDAgXCgTp6EJG9kFt33eEpxSpfhyTDcR",
  "key12": "wCVPMKd1izRCw3McNKZxzRiio8ZUPES9JUQmct7ShmcboRcfrTQVKtco58ewDE4VsZzEtFx2UMw47qRH4K9uJCw",
  "key13": "Jz4pNKueTevxbdHiNEtGkYHeW5U6pzimCUpBMTGG7pGJrzNJEn1rG8mvDbK6epdn3JAE2k8AURrJDN7qa3AyvCe",
  "key14": "3uNcygG8LZQnb9Z1k9PSmSLB9c4zsKoM3fu56SzG129r9tV6KXfsJPD4rQ2me6JfMPL6jb4kfh9PLSqMNzVsYPzt",
  "key15": "55Cj3rNMJxfb5NWqDN54EDDKgk5memzyhz7ttzbDPi9hVPSg6CjjhtG6KQ1GPcBv75SyTvSivLJVKiGfFTuxCFxi",
  "key16": "2venFarQQk131TfyRbSK3xxQ9uXxi8qKouuQeWDZAHiWx1KqfLgvoRBufXqSxQsghZdrusJcYpwdcKYtk8mDUYK1",
  "key17": "3zUVbHd3mPcAwGEAsWH7TNtofzB6dCw2N5ZnEGKvGpQdzQbmuVB3mrTg1eAdYXd3fxZajFbSPtqBA4DprGfxEbTR",
  "key18": "368uSESscStUcsuawgmiyZs6e6uTfyfcEGvjSUDgrNfGByHsu4n6EoKqN7mDWpsgDzNTNMkVmtDq6TR8TbT5o1cU",
  "key19": "2DX4evmTV9X3m8TZmdUPPyk446f6jnGmWbpAzuTGpyLiJsC8jHdaQMEWEGSFBCnLjsid1S8jNv3tcBMTCaYqXJkL",
  "key20": "gQ6WaE4Zz47vyHwpMvM5sXWsgapdDEXcUYTHnkbFXzQX1pE5KcXxyC6QHPnpdvhsWAVPjjLF1aURorUc9m1fMQD",
  "key21": "579UT7KQUUv4iHZiGRk6xmXMB4wvLnKB6odUfHzWCBQ15p16hS2reS339M6eaHeaRMQjwCyrQVNPN9DmDiMd9EV2",
  "key22": "2cMKRP2yQwxZTDJHs2AtTZSLVPQLxkzwn52p7yN2bcqh2x7FwV4YchCoC4BTQrgchwhLHu8eDNRRyeaWw3N86FsY",
  "key23": "51tn7zdBtf4dx2dSkFdBjRTHNB8jgDWQSfjGM1HVB6PbE9HmBQn9oJ5Lza3nYoWAC79hmb4Zm8L36VGfPXdkR9E4",
  "key24": "29iFoguvrCpro1z4YJgLAofjcznsxi8e8J3vtoxzhQ9PjAUjC3USP1m9Shtq8fN9X35bww31YDjMW1inTC2o2DKp"
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
