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
    "2w7UaoLAjMmgVjYhARGM6cXvCP9SGPS5mc2wz1L6SENoMPMJ6Q8rim7UP3J3eU5xpwie9H84ms4qnzKwYqx7N2KZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c8ux4ZKGyGQDtqjbB8HHZbLZgzN2RqLhfRoFHmD3L4xfqTJAUrKu4ns75EHmH3285gN8w956R3gtLtB4rmME3Gm",
  "key1": "5WjVckT1euSbn2cWJk6tFefB77huEFqRLoQA1MFe81zdLcviXd8kfCGV8KeCuqvr162A3WH1t6fsSxZ6yRzizzNK",
  "key2": "3oamNRdyRhx7KyuvnWfwz8uj1aFje4GkN61grFiVvXjnj83nGpQaDgUr5WDfDY7WpeeVWdFs3dhNf1k93WvrMFms",
  "key3": "Uuo8QAjKgPJ1tzrJvXt3hVo2oMzsQ3wXvp7QDbkyN3G8WupWk9s3TJgwuWpr1QsDw98aCzvM4X9DLfisqns7c4r",
  "key4": "348psfN79SunB9BAggBAUdgCuwBUbYjNwywh8fdX8abd64GVwUz6m14yGJgsYDNYP1QT3ahJQo2trE32FTtLnh8x",
  "key5": "51NZmz6uu4RB1FB5Zu2j6DFaqJJUZcqQ7swVVoezufFy23MwcqgPNT4iY8oJMR3nsK8KXrXVw5X4m6K9sqeom27q",
  "key6": "4ULMCAf4N8fW3DVVCJYGUSL6kZuSXn5wmerKRQr62UM5XbDb3gmW6Gz3h6dC5iJvoBCH27bPmLc4Vng5sufDFo4x",
  "key7": "3Xw2sQLtzRRef4cpoZdeQ9DdqxzXBY16nFYWhQPGvmpMnqnYPfXCvzZf4tna4dKsFw2vSEupmxkhmNN4kw6Ubnym",
  "key8": "2xXYBmELveVkwDDwqCrEXBWf4BZxD5BEAjJsBP6gUJXyPuQzdmu6dJaKzAsg9hxefM2zWFVL3jAa4TKJ9LvqN9Go",
  "key9": "4RjtguGxEkLDE2zSSSRo8C6HM98kDXFqAV1GSgLxzjrpbd1ZWWBdTbH3TDpA1AsH23BitKgDM9977SXXf8fctkGv",
  "key10": "2iXpzwWsGPNiCu7SDvY7oK7PWX6BbLg6WVcJv3RwanutN4KZD8iENgtrKfPMXHJjtbavFAtPNEYF23Zkcoqqq2aa",
  "key11": "3v27thD2JuuNtS5BQj7AfqVrWHTfHkSpvEPoeudWz8TrRuFqTtNDwb5DMsbEo4BH68waU8AYoGDDnfC9jcfVL25k",
  "key12": "mizUoE4HswvTmBFx6XbZCFFFCrSnwqtbd28ECbq1AbdCicEKBQz7UtwDCRiM23icArofqBZYS4pK6CyxwSeTqvS",
  "key13": "2gMVjSArxSy73p6uS3YbeaWeHmWYWsbedX21Pb8hCuDj8X3Lw6g7YuA4mS1CAEWRokc1XnqHqC9FxdVxum4JVsE",
  "key14": "3A7g3aFWYz333Jn8ffVwesjd4iQAG5YpvvTWLAjHCvv27t299yi5Yhj9HRsnwdnX7K6D3GTtmTDDZuLFtkQv94X1",
  "key15": "m17T7J8bAAKCSschKohqwA9XJjQuzQ7c882RQtabeYU9BGKyLC1fLorvxzKghcx9nrDR9vmxtR7CXxrovq7WtXd",
  "key16": "5xnDrn8AEwVfok2mCKHETqfACU8ndwmRAXu6Kfx2vWxxaq6h8nWAkJ17Jya1KrPo7gDpxWfw88KWgzBsFeXdvjdZ",
  "key17": "2iWzUuwjdy5ntwEaDkcMVvDDNFaXXBAdrSBSAjHNUtK2aYkxJtmQbksfKDrK8u5KifnYmvMkrdYSxVFKFAz3aA5r",
  "key18": "3Ni9SvXgrXHngibgAB79kLxw4agayyf5byPutcT2S5qsNKQbL4wgerBcKaSpv8eKE41QaZM42WWYyntN1XNL3yyT",
  "key19": "3KuicbjohMQiUPqP3qHcrPoeP7Xv7kWYVHVbKex2epkfLEwjbfBxYdGMijrwg7eVcYw3w5CDSTzvRuc95z8mGzPH",
  "key20": "25joMacL9NYpvKZA7tB6Ve7zzUuwU186dk9fUC2DaDaxNtweLPXbsadbXjtc5dDFNLBwPRg8Hrt4TUSAiZVzf2f5",
  "key21": "2rLnrTQZAU1qbDssocQ1xc61fL4ogiyZe3b84iy6uxKd9vhJuMaJnLNBAHdiKiC9hDEYZ5LodMfzuQLAPqbk9nSa",
  "key22": "41H9qdSqCbrpM9JT6xi5AQGaNpAdBu7dqgYdS3dxQwgaxuhNHLs5SwN19Wj9V5nj7WQLFx7aQjCm3iRLaqhtAK62",
  "key23": "2VxKCga8iwZuTYRTViu7PV3s3e9oyCSbwb7mGXAxZwpunccbKo7dQWkad5bbPQcPpNGL13DoGUYLBhbcpx82sTYZ",
  "key24": "2aRYaGvVckL2PdnN6XEgTnkjAqkh2MCwbHNNZhdV5ctJP5z3XwWXXtPJBruxfk6YGpNe1XLDc1Xg3RUx2YL3DaW1"
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
