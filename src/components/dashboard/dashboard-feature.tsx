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
    "3DVVWhrWW35ySwcfrKJ9Pk8Gp4nxN1Q6JNYdpaLsqtSQNUzEFV6qtKmxXw94KMVc3q7WUALb6WmCQuUKmJiHPfVz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fM4YCb6x2Lhjo64Pp58bmkXjq8HsabL1wmGBzAXripHhfZmocXfxftaTjNpm4Spn6s3HtnkTVWubKHM86AkinCX",
  "key1": "5EbQwEPsJ7vsegxsABzbf9kF8APxcuPb21TS6bubDHsWWH93C8nCJXdnNx6hgs1DGxzKBQmbcD4aBp8H4poXX6VD",
  "key2": "5GKh6h8uRyEqj5X5kHNBLDu9wBXoeqpJS2iD7Kgoe27xeUu6QoRtN9kf38knyoDtLuRfJhyKTpP9H5NJZ7QHov4D",
  "key3": "2PembXuV46Q37Ut8RPf5kAU8XbJqhyf4uPzArobMUstC7xG456xpPR2wGYiQPTs9dLBna5X1oJXezr757m6MyNgs",
  "key4": "2PbiMFYRT37VorFHcUCNZsTtutznxTys1ALUW5owb4uSy9umiP4aeLS81xXJ6vSyruyG1f6s1BiZWmLqUCHMuCMy",
  "key5": "4jTwscEik6jwb77aXef1BDWJuKK7QK1M6NxWQbR1wrCQ1DdpGBjHSqx7RD3brwmQPUktwTE6LAJPif6YRG7iDrua",
  "key6": "2XDdEhrQfoaSTsxS5QYdaMtUawQXyy4sMY3zo5vUHfx54DjBtHT4hj7Ek7xxCBsra3pdGkHb8HfeDjDVCMqtEEM5",
  "key7": "JLqc2EtXjFFD9TReheuEAUjT6jqLQEtPgaoDQrSxDYpsUqBcuCKdMHzkdpU4VxKsj8NpHVhwUQaBB1atFsauPFQ",
  "key8": "5GuhU2n3sYWwcLT4KuFUYXG8VFr5iFnjmADn7Rqqf59MhTkYykaReEYSpMwycanRcNyhMDx4e9XDDP9THZjqXGAF",
  "key9": "oow5y8SXHBdZfVsfeKpC9tGrfb1vFq4TeNwEKxGCVnvoNFg12jwGdXqoPVTvoWzwZ3idMVerqA4M1XK8ipMY9sh",
  "key10": "3m2zxFFLeQfHqMZfdKaFxS3ZcSQRK6r8Mr1eov3ydCqgKkETG8uvcSrHptqU5WPUNCp5zsTZR3VedCmFjUT8WhnB",
  "key11": "q2MxNLoogWDhsj4xKbQ5BXYCRBb1Uv395gzTcTWYpTCN5h9ReRFePNKSbDcYqzvF4aeE6hhEJxZ6xN9dbeoK7bs",
  "key12": "2RFgozejSFbuMYQnKmdhMYXaZgbkcfAyVaMmvDsfFBx2gkqPwKtLP9uttgj5CML61Ag7bUtPL1V8H4KokuoxFcAJ",
  "key13": "3zLEZx7AnJ2BpnoJnGdZ2bFiNbQMTbkp7EKNxf76tAxWpEBmjDU1LEdozDFuwJkwZRq662frCyE3YhY6CyPQG5JG",
  "key14": "66wvPiHYsUNzUjZHJ1bWufNpTRSDBRr3Q92QRsEM2FtTvarpoJnJespthHCc4uwniCQrMLbJhyk6uYt9rPRnQEaj",
  "key15": "44m42ZkG3qvie6b5kHSiSJNMgY2rAMamxJA4WZRBE3wvKm7wa5EqGrBQb4bfQ7BxhGMQd3zozUumLTpeuEwUQjpP",
  "key16": "3pviRUKS6dXfp3CeqpZ7aAXMxYZYAs1amkHW5gQs8SgNqhy1JRrQg2qGJr9bfnm2nGCZHeu4QyuyKiiFwzY4GpFz",
  "key17": "2UsEZYA1AwsKPifz7TkkW1cd5KHLa5Mkeu8F2dp5G8ykqzPCqTbHWxowXnQBQf4gssGGbEssi8tLABBtHQdZ8qwY",
  "key18": "4BSTQhCGgNSBuJjTsaUax5mUhda8hTmGcuB5taTAeKNB9kWw83M1qRVrymqk2grokbYE4xwn6Rzp7o7gsHSe2f5Z",
  "key19": "2Lvy8pXwqEiCW4uTioee7yXufsFq6ptvBhiKdoyfYgnTQVD3oXbiFjHJpzdF3dZgdzJ1MAEpP9Fp2KQKqWSV1ht4",
  "key20": "KDa9DsmahPG13pHa19P9dbkg7zkJTajC8UpiG2vjnzFQZ4WHUPMkv1L8Urc12FLtshKXsApHs8aHzhUVUTMLLxd",
  "key21": "2MGoNQzUcFAADL2MacQZEBiF8ydvYfFr4CDVPMX4Pr6BENwcbPBFBNhAL7ggBSVqk3QznvjnDY4oUKGkSQ6FBXEF",
  "key22": "go9SziGeiG2UiubWvj49f6tohn75p1WBbnDgh24E2PQJKxiYyhJ79kxU2KKUGf9qVe2bZX7jQMVQKPV6dHHwfZr",
  "key23": "2EQkAiGTBkJCSsqeB3yMxgKFg2id9AKE1jKSPF4z2XNt11T43dpDtK2dgviQpiBfmTyJsnjwhTMbXb3KH2VAFyZG",
  "key24": "5ttW9jLnCnCpFST1ahrV9snNKdgN9DXnzxP1NfEBVQui87GAbHjkSMFTsYje5TDcPdT1hHyE5SiMEx7tAZfn5oVp",
  "key25": "3STWBM2e6D3HCVry44Dg9iac7aqSmoab4KGHi7cNZ7fMkhNJ2xgQUuZmmdrQXE9dEiatmFUoGJ5SGrPLpBaESgU2"
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
