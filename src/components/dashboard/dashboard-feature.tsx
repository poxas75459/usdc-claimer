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
    "Uhb5n284wbbtW35yFGLRebEt6AwVb8qPh3wJuN2oyoBke9DMsPzV1qSwbL9vfRpgeyQTfMFbxG4HwYknFiWZEZG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U63gguKXsdngSh69kXohPJuLj6JqQHX6QJFv9pXAnkJoKNbDc7KPjv2uR9AqvkhuHgXKPgSnC9os2ZGJZtNQD5z",
  "key1": "3mMwM3fAFpXyDncHBmGTGHABUwxUYXrc1jsKfkL5YwRr4fr9MBq4HvQtpQEKfd2cYXwwtSknr5eHJbt7cGUHKFuQ",
  "key2": "YL3oEYM4Q7XVk9ps42sdESsdgmCELZoJgVetod8zabFdiAZkcCZFDh6tvUccAPYpGh4CeTgotj3pKdSgAT7QiaA",
  "key3": "2wgLBh5AVeiiDopLaCq4avEcqwF5HtjY29JejdEkQf6eSdphV6QGusEwAwsnp7c2YQFQjzLEYXk23ouRQ86Btee1",
  "key4": "5EvHQtEw4SkMZzqiVmqnKRCF7t4C2qGPEvopzqSh4M7u8hCTEys9d4zBLtAaHJ3Jk1izXD8vTWXH9jTg7FgFXrCG",
  "key5": "3EjUhuUxYcP25A7YocbyTmjtNznznAszPNFqyi6rLY6y4sjoo2SdGrTnMnVzJektnKBSy1ca39T88FJKgpdgToFf",
  "key6": "WcndehqZFTTDNLkTWsKNnqjSrsKjTqaLnQK773K7iwX2XTFyvFB8ebJTcwQBVWjd6eusjvwhnV4yZQUnj86PQ7D",
  "key7": "5wUUjmh1JiXjswtkk5s6jL59B3ko7HDAkg5exTjTFCTiUtXydkKrPsuAVzYx48H3sBXur4hqAog1V8N5iBtNWRSF",
  "key8": "51Jm52Ec4rVjrH1XpmatyTQdEdTib3c5NQpw2hY1LcCMHbMDSqSQJ25myj2ceTicgeW43MMNxUuVK76EFpcovYQP",
  "key9": "51Xqz5k5dw9E2JfhAubj6TkYcg13ksZGr5HbX5npzBhaEJDRGsobo9fv9gqoJac5YzwTPAynDguYNeutVkwMyu1Q",
  "key10": "bgBHsGHUewDe98E5cEQ8LoHJapLXtMktZpAYhQ1BqA8qRpgEUZ7mtkBHGt4QWfeSjz7LXEkZPeWjArY1L66UYCy",
  "key11": "3SpvvCM3dEGSpK2E4pNB2PJi2ztzt5YDrMSjTJ6ostoA82upncEErCdjfkBaAKmzLdUBXfX869NCQ18EvE2mZF8Q",
  "key12": "37V1PDrdmtJSSM1tnmFLVezToAepnNeW9nZEuXz3hefrkySKN3UJdFFRt9PtR41SG31ud3pDuSrZUQ7Zs5s3XuTB",
  "key13": "xjgJBTNuDy3zt3TYs2NTbewSLsyKpMwmNTSRTjKAzTmTsUiSFk96FxGsnMFB67BhSvkSRaCgmquZyHk1K7UdXxK",
  "key14": "27A6c8wV6r6HcR5tbRMei8VKy61qARMsAJFaECcHUoGguB4bXAdBotKdNndFMoS76kBVYQUvbLFraBY2jNGDhnot",
  "key15": "4gjMZb5XtFzUMR3z3gKGqv6TJ5M9mgFURqgXRGUejtQH9wZu3bxVJ1HVhqJdFdUW1CjkEPAoYKnnGEkM8zqdN6sD",
  "key16": "3U1XBLTrziyLExDarTyVmbApgsgx8Eyx1XC2K9bHk23DvUAVBte1vcQpGx74hauU33mZt1M5fwYWQKwJQ2Y19RwB",
  "key17": "5teU7KzHarpbZyL9NVsmXV3Hi8APg5r6ZiqFdZwS7p86RMSDwSGcuJ9UYoPSC5AcsjkXiXWEBNFXXKfZn7rnzmRD",
  "key18": "vVNnh9VKpuTfDx4axCinXQd2mFnqgyX7YQF8KtGfGBoU3faBQUzvr5E2MKUFYkNYgfDzjQPaM4ygnVmdy56LaUB",
  "key19": "5UhcU9UufAZwuMHwtCWjcP1dbpdKVyzWCh9EfkbX2zd11rCpeX1YjFYDDLTGPCe5XEy3VXu1TZsCSj1uAjsbXJXQ",
  "key20": "2NHSRzn3hat2jJ5kZd5TuBJq7uu5oXsphcptmap3TrFWiwinVqJsUHMQU3UwNiteAUSXzxKMKfutcqG6f4G4jGL1",
  "key21": "2tiYb6BL5a7VkieyVqpn8UuMFXiEDJtUCuWPZRom2m22JntLdkc6CouGB9bhAmEY65zVP4ZmGFpamDuNWTqjXgYU",
  "key22": "4FEk4RDSz7hcDCrsxP97PxNNUmF7LJXauGw1LgGxZcrph4gdNExPJwY52AokJSVGUDusGA9RHGfkoKHnB77cSqkf",
  "key23": "5GBreTAcgFYaHfKuPZWUp1tohYo292Y7tT481jc3RZ3X2Q5AbhqK92teSshXUQLHWhxvsYG9jmYijsFmBYCHQGCR",
  "key24": "4Bn2qDdTqjQkwhLKgWnHCPBzTkBCQprbSqba4XSyfMS3wf2tpjcnREKy2SaGUAaiXAU6QXssczSn9tWzqEyXbyzw",
  "key25": "2g8YDzuzgz4a4ctPkmGqX3dsFUb6G1mb5hVSSenWPZ6xse5hMc1v2w4P6284oLuYb6Hd5LS1Bipvjjhmdx7Qr21i"
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
