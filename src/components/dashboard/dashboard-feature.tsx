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
    "kG6qxEGDTySGFeJCEqbZVJ7Xcur3YHhTTrQ9HW6BfYzqN89CFsMyCFDnJb2295cLEFuZeM54MHv2yB21D1aiPY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "369URWBrcqofvNaiJBJQ1iHDMBdEsGfTEqH2NzJqVT96iuDKtnU946WQ9wxZCT5dPK9FfGzEoDYTyjDTFVUkVPhj",
  "key1": "5oR1BDXGaaZFjsYWX8jDPh6LUn7vC5ZPf6eXWnEUkecczvuBNG4pQUuKRo131wWjr7U33ZSqdxLwVHrqw4tQBppc",
  "key2": "34VoyKvHm3oi5dGFVVsF4rb6N9NmKh3UnQikkDBRbBPYxhTAza8Hxyoh534t3ZmQMhcjpyxm7yVQ3Vdk7fzya3Eq",
  "key3": "3sbasQftxiNRMTVB9rCxYH6GpKGDBHa9k7Bqwd4xjLNRXM8VyXhUT7LQ8N2h4HHQdENRy6TdPjkA2vWFFQFdkA4E",
  "key4": "TmMPuTPkZ62qb5qWqRKru839Re9DXP9t648rzJtnhvWVN9ZXhLvidkFWmo9161YqhWJH4qEFanr3cY9fybkmEgi",
  "key5": "2wJiw5oKcDbgDremySz8kVTjK9yhMCnC2p5i4PgigLZQySyZ7n23VjMeGnVihg9Ewqrgk6rAvgMBtQcyzyQMoAk6",
  "key6": "5i1tcFNMukJC6NBqVc9rkxukr6hUjab2rqsX3ibKRjD53QJrgqiDu4WyYLVAVGAYCEzR11n1NzchZaU5aNw6fnwD",
  "key7": "5Y6FBYoBSBzPz5vLdekxYtyYwKFNQdJmJtoKFv3H3jACo9NBxB7nh3RQsTxcSKfN5vSCt2JBFq7t1ff1dYeNzzQm",
  "key8": "5jmCDCUkfgiAFXRBKUQ1A8keVAGukE1bKJoxhdqwnkE85eUwrtgUtNx8DrY3j82bcgRFzQNYDc4jWV7gLcFaSgsR",
  "key9": "5hTCnRC1YZCsbz9mrBfjSWtxFfP5TbJCTmZuJknyKFSnvKkgdMFSEW5XgYLncShiAwt5vvG6TQ5a888Ur1a3Wnsp",
  "key10": "2ZAVp3hkVCgfRKuVgyNoqDSJKTowACG92NAhngwEnkwwCTZTjfMLyu6JvTokVuConRravrysDajfq2WVcxjyJpA6",
  "key11": "4DsiWsBW8oVuzLgnnESq6xm3QhKjdyUKbPVGiurW84z5dKGoUX2JEztpJY3TiAN4mLtk11zRdtENxe2qW756FGis",
  "key12": "4ai5yQkLS4MMo3CR2J6KV8hexisuJB3iGmyNb3F1D1jB4X1wkkjStji6FV6Atv4zsRZ5BkEckKAnrGmztvBXQ31F",
  "key13": "3H6g1XrNFtvuC8SYRcZ6GB4a3nAes9weUmTTdfXAJf6Pcue2nECRkE9Wavu5raZhjLG6Lo2qubSg74dDVDj7SbqF",
  "key14": "65SuwqaXi9isdi83aC8Qw2KFXvBCWefTiiBy5pbYHjVqGm5UmL2KuW7pYTf98eybCRJJYQfLj5akoUqvgwJN7rne",
  "key15": "4K2Tdi6RViuMRJAgS6xLwiVqH1EH5imWSCKDqQjuFP7YapGVEtxJNpSsuSJi6PuYenYr53bKySFabYH6UDLhsY5Z",
  "key16": "4JV3iLs6853BbSMLdysutBNzaP7dyRnGYXMWaVLWUBhveLUGT7S8EC4AKuhryYrDTZm568qqZr7W9rEDFg1kQG2g",
  "key17": "3eCqfL8v1rX1y8SwbWJEgcT12BLTWyfFTfewhhRQQAz8D7eu2t5GyZbEAXX6b7EEFNWwYaBwWqTSAGob4GACdzuw",
  "key18": "549nuQkeVTdJYwLKbEha8m8DDAvAmguvMd1T19Q8gZEXpTEXSgXjrjMtRVZMz9c4x4ZZWSZbaE48u78HePA7zPFe",
  "key19": "2ATcRLcnLusgq9QyRMG1CcmLbajBtbHthK4gAh4bmnvg6sAqpW39GwzcSKWYw4o3nrvfXQwAZPd86s3QFHA6ECcc",
  "key20": "2WYVPirUms1JRio9GDTqNctWp16W1D1rsD5jxnpYZgYywL3qWQomnDrQBhUdb4CACfLLaZ6Uo46w1GTuKksBwNNW",
  "key21": "eJJp2ovNfAyEyFM1ifshWYVfuawavVHZbmMTi2oMSfBYjdV4Ae6axb5b3x1uZKh5Ukxe2JVKL7W3KjUBYnCsxAZ",
  "key22": "5vSNNaP31UVBjEm8segpCbhtVvqQtM2siHvFtmn3wopLPrzYjY5mAVoPf1VTn8jNZG3t5QVxyfgRrxJqX5THjtho",
  "key23": "3NW6W5jjcCAMZbY2CJ7iLZVktuv59cgqMnZAQQVmtLGKzfRxd828Eok4pojR8ZV6Wzhb8joGvKoAZF5bq82KyPvR",
  "key24": "CMej27KMhL2SVyw8JusjfMHNevGh6egU6wnbhaWH3kBiFbeFrhmVXfcDbVEu28UQi1wh39QJem9DrDkR67sZZwN",
  "key25": "F7DX19RvPitesr4iewCRaowYhBn4qnznPEKWVtUYahtURFNpziovkvwy46JGwFPMyhkt5Y1NdvD2uiCFr6xpvpE",
  "key26": "4PoGPta5KCWCLi6MMH55jDAMcTF7B6UDm1cxktb3C1j1owpRBXj3kLQNQe4mMqxqxLnvbuqAKDSqnBbHw3qHCqbL"
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
