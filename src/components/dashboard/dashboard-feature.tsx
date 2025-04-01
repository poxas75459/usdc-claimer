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
    "TxMsypacaoj1k7qTqURmD3f2hiKKW4zb46L5HmPgwAPSEcbnD5HVmVCasQfSiZsdaXSo1ENsLGyVAF5BxGjQcui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BixZFe4EUF6RpUD5VPsu1kgwZqySoB9vCr31ar2jauQ7Ei99W1kPgizUFureqNk49yfUrqyTFgxYbfJQHCjKjsU",
  "key1": "2DHawFh6ocHzxN8mjUDe8LmpTW8qXwQrjKdS9y4Yvoahou9Dga7nUw7XnViZz6JoyAEf3QaLN9XszJsaS2gWLgHU",
  "key2": "4QNpUruYXJJqCJV1N4s4DionuVJz7vXi3JS4vhd9n9AXCNDC3277MrLrDrhrWcTLPPVQTEnpYCrJqMUvD2TCbMzS",
  "key3": "4ZgQWAwqwZM1bCCMEa6Gmn4fLmYyMCRnZnvbLUhFtMav8djDLXpkkcxRng7a5Jpy5PVdX63GAjj3UyGVAv3nEmUF",
  "key4": "5T2Czdqfyu8KsCzGsMbvUWUhdM8tiN9GjLHh2J4Lsrd2Mk7yhfjt1QLKn5Fj23tg32TDu6g7kUV5dCqRqTfsqwhb",
  "key5": "wD2JGEWJGG4g3E5JVUAnimduicbQBgHxeeB97fQd9GrJz58NfbTePJW197r6w5xBAn6ji7tCDS9XG8NzNE9tY62",
  "key6": "HTrBq6SyugmPHVa1ztgyRmTk7EkXMnhKJvNEWbXcRvc5VqbpD7pyLHVRcu8ayqYX5mDf8M5FQLzq2GmHmy1e3LA",
  "key7": "4UGiB5rzwByi4ymxE6WpZLcVF3XdRkGPUTvfWbbgUodcNy8v9m8CPr227H3ojp49bPrdqU48Ywy3YQePfSe9hAiN",
  "key8": "4qTLMFoer4RWNbpPgauxDAwSCjxyXreryjEkTH4Ce97mFAYPGuxGLqHcuNnw78ktekhuWssNeFu18XTArveyc3v8",
  "key9": "ojtsfakJanb7EPqgmvbn9M1YifEu4gQ5wbSohqxpnVqEu9aMBxvXRbL2nMPicz5VYYDNEYEVgn9qu5L9Lsg4C6z",
  "key10": "3cVwNnoQk2CA5ma7VnyWra4TRY8YXFsfVPksBLrgKLjiSwfVuQZPZMk4h6Ef8ALqBpuLznq4wPUgzsFn9roGj1wv",
  "key11": "5ZjdJcTuVB6KcGsc5WHZ6bKBffEBAEphJzDTwW6dyeM7iUdrdHLnW58AJqeQkByeWZNdDgH73VjRb7ZnzkUcbEGP",
  "key12": "62dE8Jkqpr7FPLeR4BThoDmZ6zxAnX1rWsBL614WsxMHzDkVm6VjNZ17QSYRKzMZDhZR5Zfb1sykNz4cETwykpHX",
  "key13": "Sozpji4xaUtPCNiELP9jSiSrkHJ4QZcYugTf5uJvAP6UXWMMJZavifPEamjBM32sFjp62NUe8ETt76ChX5USXf9",
  "key14": "6kfzMYJ5zNyBqnqQ8wrhkdtGTUW4V7VA2mXDSbRUwSg4wTPhKinKZ3YDkUFJTBQhh7YycEUPn7F8VnnfApWZMG2",
  "key15": "5dueuC2nPZZtUeifqkbVYHNryTPC4AUpP45EieTWHXnsoqDjQJJGPrDx2sd2fhZRVnaKRNj4pyKMRpDDLb9mVCtT",
  "key16": "3zvD2Vi3oWB6cyLFp6HEyLKAgBFimJnTKrUPoJkpKUjoAxXBP9uLs9VEK6ok56jGk5KWdAgseUDXCRQiicDM52hV",
  "key17": "5tixPSpfDB9A62ABazkC5Kahp256rx9pVVysh8tp71otd3XeoAuUqEgEaxZQrcGoa4sNqMAnGiBYYWhRDv2r62AX",
  "key18": "5vHxvtE7ynyYHXBin8u7KgxmQo84TLvbAiySFunRhHWDQjqjR9abgdPC3TeKJQ3gZfwxprNa3dEsEJYMtLvnFEL2",
  "key19": "3miZykpZ8mKEHBEB96intZHfhnWERnpi8HA79YN5dwJLvyAZ7xJFBN3SitKnEuSoL29vbdGirjUeKrZ4cv1MfGee",
  "key20": "3TFSpJuWZAqnijtoStcHFjyLADaiPKyst9fvfwX9zCZRSd6TezZHoWyaM5vGd7ZBxDwRzcVs4U1Kz29UAjCJt76L",
  "key21": "3CiQVY6vnoCjdLxg8mspKP7tomQdaLShYXNZXdLdViKJVfYZtJWvsxm3szetrNHDC17ZHwy1eNM7xAPQH1LjbFqa",
  "key22": "3iZ68RQiQxni6UL5E78bo9KFivfScPS9rBCpRDNpQQvs3QUfb64hMjmEwfqwFWuzeukdaQAu7NCd5jiRgGte9yQM",
  "key23": "21h2wehU7JhHUDPeYE6Ah5TMa9W5C2WbAkmMbyE9T3BcGBMY1P3hGTCvvz81WaiK3Na2rsqUuCu1LvpyFUFRXTb2",
  "key24": "ZEDMdnLWLa8rocxMKgtU6s3ao1GoMTT4MmtpFahtSgDUa5iQ4GDHXcx8RYzkqHZJJFM69YhTYSSFBhZnyXaP3UG",
  "key25": "5zWZHKz4UuUH14zFDQFektm2iqFRoqs17kuQFfZxCrhmHV6VeKXEp8fKZ26UXQc1ptpdAYD5pSygRcXoUeVJNBbV",
  "key26": "4XbApo9o1a8FRw2uPZ7zPdYT9GBTfT9uQw9bj5uzYtKTwK6cXU2pPBvp61RqGTqfWtxbMiUhkx8CmKKfpXP1uPpz"
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
