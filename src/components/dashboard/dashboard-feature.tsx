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
    "3b1YK9WomrEzguCosBbnZ7G854CfBDd9H8DJmgLHjMuXu3e3k3Vjm7d7EFEyn8JScZuvbmvbgvQafhy7Sm4A9XW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xyzjKbV4ECWMmY9FCY7xQaZMQPuRseaUQixDn1q3cDS5PYTp9GrkgtmmgqxHEHYxkRm8JwhKWRBV29HXvhEGJU4",
  "key1": "4xVhmb6f7ht1pxiHKFxVsqK9hBCSVsjo3M67Z8nCcHkmgALiL21BNwYDe8in2GVePFG1v9UEHZT97RySmcNdTYEr",
  "key2": "4YMXGsKnuGETM2zfoSYqCkEk2i7iMUhbmXTyoTLBJ3WJeJCJ9fFcokYBtnvQRqWRmJpzqR8muzWWHFKiTzYWCXuS",
  "key3": "3Jzh1t6aoUuB7M8dry4JDYWXsfuSczkAnyzAYNwsKdTZa672c8A2oZN3tc5gtQywLoHt8sUEeZQRZ9uymLq5mexi",
  "key4": "366tu7WNkpH2smmGmThQqP1qFVeuUBAZQc5EZeioBPDW8PdMCSyRQcNN8YK2gw3cssvgYBJeZm3UBouDey48oHkc",
  "key5": "XT6cmf4MqpGkrphwetotyL3aanCaP7b7yzDKHjcD3ELtivt8BeNcDC3t8Un2HotGfV6Ykzensh5DscQsKPWzizc",
  "key6": "5exYnhCCSE6dCffUbWSCkr9oJvH8C4iXvLHZyy2WT3cbsLt9rYsNEjtfhKNXXqugb2BYzruVfxXYhqgLkXXa1zqt",
  "key7": "47Fh6N5PQcYxYCKzhZmUzLb2HeLeVggLgT4ZYNTbwKbcwatbNdHRSnHVTEy7owgFusexS1KsXdDAF7nddjZCpqU4",
  "key8": "4SQdaK7iFkkGxgC86JuG9W4qzNxwcUEq3T4KxS5x6cwCdP26g8HXwcZG212VuFF4dCyNM8KveTXkvBZADMfUfb3u",
  "key9": "2CiRkUSjJBJJmBzAwrQbCWqm5mrwykKhWhhgbngt5hrEkS7ZAJaTsqa9M7dQLwrrKidhFqZ4NcWhfAxNXJg4pJqe",
  "key10": "5mymAu49jnjff2YYbssQm4u5P2RiJn8h4b1JMk6nxcwSjowTx4MuRpzSQwwd27unwfujUaVbHWkRDNBnHFZuv3TE",
  "key11": "eW68FSB8GVgbQXZa5ttyYGpJU4nJPJRJ4bXSLoteMV2fx18nEgfNazS1WwPQiubXxkYHUpmarF6kZ7c1chERS84",
  "key12": "SKQqHwN6sUaLSqicpRoBsCr2ZjJcYdG9ZoXmDJVqvGELZQLgxdLDFHEgXgpwddytn8RmLqgnC2nhQ4gctpnLY7v",
  "key13": "51TsaquJwQA8cyeV1NCuKW5WFusq9EqQ8dwkYKHFJ1XVodx3mzZLW8J8GwNmPUYjjbQgrTrnBfJzpkFqTaVLjm1V",
  "key14": "4b7TYzKsqq3t3tucqB54eFxqgoiVS1wZs2fbnRhjq3BAA8YivuCxsV9ELVXSkEhycwF5WBnx8QAmCTjxqqBr4RZz",
  "key15": "4btTRoyCtkqYUejwFLuFF4RAojkfT4em74tS33bcAcRRRJJ2rHNSxFZ1UmZm67qPmiiCYvHWNSYdNbcYhvg1gcUX",
  "key16": "5T8EemEXvLZBzEA2cxTL2T1k396BPZhe5Yp2TamXkHqLZKWQAJmvMgRFz9bmaRuL56MfmLgGHhUyu2wg3xmtgwUu",
  "key17": "2n7hNhp77PjyVJqwNvSHVvhvPas6ACnfGX86LGhAdwx246RoNKZ45UY7hetjrPLbnoktkg1yG3gQtaNtpXuehSCx",
  "key18": "3SG36cwwVj46cgyQgQGvYsqCMBdWBfxy8awTna3RcL3JiMDLU2Wegd7vsNJtnWV4rLhvPagKL33q6HFCTe5Nb7px",
  "key19": "3R8YPUb8rDpvpUbYatedP2VLjdRdjXvku6XpaPp6H2YhUnV4bhhGQkXavs8vK9h32M3N3hbpafDUpgofNTvniXat",
  "key20": "62qcvJLh23RJmK2jwuNw3KVsmkKztzjJKyET5LUv3hoqaWNSRdSbiWbGDXxi2qDDyDrvdj7L3JzKeyRJTWjrnVGM",
  "key21": "cFAsLpk7miGmGu17vtppQpbszZTgBEBhTP1HvP2VcaU13XVc3DDWfxUz3pj66UMd56qpM7A1dk7R7LH8GnuNBuz",
  "key22": "3uqT34QWAUUHuYFCt68kJoDAtNap8xBj21ZCcYwDezPkB5qeK5vxfyoepcS15ykZNF4mnccveLXnMw1UpMb7vnzZ",
  "key23": "4iqpQBG1p6zC4XjMNqUWdbKBA82xPWDQ9Gfvopf2uWYCdiqcqyFvU71F3xHanHoPrN4JoNkKKZQVHmgXJPaiSxqY",
  "key24": "4yVNoKRJ7qVqLyEdZbCMgejdkpKstTLz7wYWh3p19EnYEpkEAqcnkNcipd94PLFGvTaL2BnVFHFFKc26ncRyMPc2"
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
