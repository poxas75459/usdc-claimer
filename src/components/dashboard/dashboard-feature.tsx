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
    "328UCxSYdUZnzXxuuqAnzecHBKFtKfChTLsLRUuCMbULdVZr5ARRWVFpavdz5YSSRLEtME4n8vSbphXKJLGTKG9W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ArRZibgwymYZHGJPCUjdEhidthjoS1XWzYEWqYeKSMRn4DS4pvftJonnWCYxdD9DD85nttZfcn7NdQdgDvDh633",
  "key1": "3x4MdCfuDSaa8w86KgmFdHNZRBCvFqwh7V6tgq9NFbWfSMF7DFhpodoWNzdPuWKrXaycMyGJFW65fMjnstzCkokx",
  "key2": "3xyi8YHqC9Dzf29HVbc8uARdanYCG4s1qB7XJcGUcTRLJkJh6FSeDEADuDYUkMxq3fGccXrXD733tPXbgCXt5T2e",
  "key3": "7UYiVKhWGFTEuWpE9mbcLca1T3zeEe6qg1t2ke24BzzAm31y5CAfrq5cqZq6aJqZpAdpVjoTG11Ftxh18rkTEf3",
  "key4": "3cfz9EdN1YrL8wBERDCvuXmSqFBKcGWGyVbpPQJ7UXAwBCxufakDaZPxRBSdfLrEmRQXbNNgnbo58WWE6hp2XKoE",
  "key5": "1r1DnNxHEjesGU7eygGEq377QvqhP5WCqLh5PfzMfJ7oJHoqDuXZ5fN77ttdav2sGCDopRReS468JUiFoqQhrwx",
  "key6": "2uFvmqfZm44z3E8abFxBYkU5ChGxnWqFq5oWqFBJsJLSSn1oFqGdAQfM6oJHNnxgPHtP6mzpSi59RgfQfWACx6CP",
  "key7": "4CwmjP4KhDMzVsdKjpmm8GKCndJhkUCS9FHxUNbgf8VGhse2NAqsmVDJjscoj8UrS37xCJwW8k5YFojDpCMRQgpU",
  "key8": "3hW87nUq7uv1FJZQyhW6hgjoiFBGQ7F5XG6JfmDchdnrHgEigvcyEwWypKq53WybErpFqP7oHo6tkMU59PzYrwgi",
  "key9": "2sWjK56qBWpjRAFQiguGDRxCvFRmW2HceYHrRVyGtQLPmy1LBd7yWUokgCq36fNYpy3hVszZiMWubjnQLbKdb9L4",
  "key10": "5LdR39kUGZp4yRFqYUGZ8GJwwH4468peWorCvkj7Gu3s7AraRv4FvuWkFaEfJhZtfZ9sGLXkmHKhph73yx5po2ho",
  "key11": "4PbLhpQvCPzT4YR8wUh42uczttrgfHTAKTqzmJUCHBdVBWGqVWic3Fzispv6w14k6ZLx9X4Dwnrw8mbP2bycDBuP",
  "key12": "5muV7i7sjSGy95kb1N7sp3ncTe8Wb62XCbp7umGAoogtnVAxFgEDKaYoT8NDWraAbWnZLfAA9nU6z9pYkNLz5xK4",
  "key13": "4cCDsAEDKRjdALoqSmVB33VaWhZG9g5s41njrNbY5GJSK8iEtu9xDAbm3KMqiGx1JzpzFf1UBCFmo9UzERBbQbxc",
  "key14": "2XSMxqHvJvhKMKh7jar9ipfPB1sYZKPxgzkEEFswC9zhMZhrAJhr6NUvsd8pYDWGYqs6d2XFHjTjFQVRUzeMptiZ",
  "key15": "HntpxAgQ5kfkE5qhiaHBFNU3RAJqfo7XdkEddJGv1aStiNBANzAgW5jsp8XNHFpkNmaBHubtniDHzc9Dx6UBmcn",
  "key16": "3LcDeSzXz2uQd29qnChMetLb4fmt7dM1teyCZ4LgTY77JVbbSSdXjuBZGuhh16XzbEydhxxAJZYCvBL8cC8kjNvS",
  "key17": "3wRgsLhMtom19UxxLsz3UAEU6fzN1hcwqeypwWt7N2evNuxVKEoV8QykgaUJEy417x5wHx8h97q9zyXFUCSEcVqS",
  "key18": "nyAwAo6FDgKuxE7CSF8o62atU5KVS7tM7VEdPzEDUjSCLHaiW2YHsPrnLz5uNkAPrq1UYnbPYSJ6ePnX8zro8bL",
  "key19": "53ANX9E7VMT5JHwNb73pJAdUQUB3UhqhwjXRg6bHD92DURuyRZm43QcVVVCTCH3gJ9msnyN6VxXM4VqbYdyiEL4y",
  "key20": "4TNPzPGQ1Q2YoctgxLFTiVtYDqTSeQaJjKd1wKrBBVVBnwjeUM6VMvBT6N4AoeNDauu5CvmPYLoSDFtb9vjhco3o",
  "key21": "5eEveY9G4mBgqTnfE4YoAN6dJMLZrZ9ToKL9XfBXTAyLGHLZCbSuR3kY7MCeNXjB7LJgu7eoLi4u38CYgRtZ1t8T",
  "key22": "5VD18N9XbXEjTrKDvX97ubKAN3Um2bZjFed6a4JUbjNLxrYasamhvTra6T34aMyfAV4tAgHYV3cyvWKcWTfkMLeK",
  "key23": "2aB4H8icSCMg75JGHR2RqrQsGQV3msDWW43zSW9kxdHAW59Pcieaf6Ct8vBSjdc6btFDYQRG9pz2ygnko6nTw6Ym",
  "key24": "2s2EYLytCVcZoxs2yQj8CY7hgJErERH2DUxtix2GqaKkjMQvFAriLVfSjeU2AzBknPh6pBnBVL4WhyAvHLXk451W",
  "key25": "3Pq7wRy8JMpYKXmvMKDd2gZrHUqPAxuBCPKczPjSS6GtKEcEAZ8CE6i6coLw6cDPZZWvuSSVMFCeib2vYAFfyBoV",
  "key26": "3AMmMASuWUgrBnZg9w6fCSN5nHY7Y7fArKh5hbxoB7DMz1CmBvYGcni4MEFy6NReQ7rBPhjF4jH4ktrNznrb5Sht",
  "key27": "3TsEoLugnuxeTedpeg7v6phN4KhM6FCYS1utcysqmD4TKYAp6VnVL4hCxb3R9eYZ3jZbYneXTWvYRoDRZWhWRx54",
  "key28": "5X557oE3VnRyDS5FhBRbYth44KFuV5NKjhxp2kJVsyAiTRVfBY7pQ9Hxtw9jU6mLS9oc1p4NoXNgDJfC7MePC3pR",
  "key29": "3FDpWzeXTv8UosePhGJJcAbRGpHafh5LW6TTd2yAqg1EdDfPfJ3emEnEVBv6tr89dWDdYMHAXFRk66cm4meTJvqB",
  "key30": "3cuULnjF3ofmoM4BQuCy8wc2djVa4ynyduearW2k79PeJ9fTWUcnpuPJE4sofjcHo54KD1yE2BcDFPwU4Nvm9Dcb"
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
