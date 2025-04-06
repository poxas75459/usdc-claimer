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
    "DXgMfYGNoMUvco7eUuW3JoUNXabrYi5SFcVTAdQKuBaDXA997gSTPDPZ1VoRJ5c2PeCf3F4d3R7u7ntucxuKUqn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FBL9QFf8rb4ijXFLkpqvrW63tQyKDSzApKHWHfqmF7C5GZjofkJ8wJhicJWRucp8HAENmxRRVxtAAwabRbR8U1P",
  "key1": "ZatFEAcyFrhbsVkGHu4cbiqJaJRZPuRU4w8Xdy2TvqbuhZUpKN921wGtuLGj9jhtGWuNgr7cdCj28mvXmfTN3gj",
  "key2": "23hCmb4zpvyuoiWFqwo58bX6EdA6zQPe35KmgrRXrZTa79AZV3yvhn2P5mXccJUQ13PNbdwitAi3i2kJ3rAJ8VvJ",
  "key3": "4yUu7dEJ3QfvaQrRqhgFkRHu7inQJbt9JZMcPUULPjFAevm19sK3N3dBj7B7HFAYmjGjKeZu1tb8hfybS2LTNFWg",
  "key4": "5RidYKeaiCHjuQP46ocyckL142q9tp4Eywxf7ZY1EMckCfRnn6EMwLoPxyw5m26VLCkD3X9D1xJNoG7J6wX5bkyH",
  "key5": "ePMHsnDfB6BvnRQ8UzumvD5ZxviJka4EqMKU5jVZvj8zABTUwWirXJA6b1C2J14sfH5gkPbEjeKQq5BtWFk884V",
  "key6": "2pnFRUZNP5bEYrtoWP4hUkm5w26zEyjZoonAMLRHWjq8ZVLyUYMSFWwGaBhES8UTqcW9m3M3Kc1ebJ6N1nfqeFgT",
  "key7": "azaZsxiUPWaX3oKdvrDa7qowjJtUrGkLrV8eofr5cEsPZo2cYzWgMVg1tNAeJjZ2afw8xUkQqAzVizY3ouTQW7d",
  "key8": "5ib7NjMEmU1cmPkTx7x1qDQi7Ari3x2Ypy3iSa1Sk3TAhKQrtXoVhmYXnXWUMdUGcfWM4kLqkMmdNfXwcmLegeWU",
  "key9": "2AWfYcpiLNSUQQb5Rj1CTn5zYZD377RY2U9RS5iJe4Fu4bP3T9DdSksGihtPaMZsG8KMXbhFgbMnrdCqAQo88q6X",
  "key10": "2qX2TPSigfdiUPJooip6XNJowmvT5BeXno6hRCJVypLKvDm8NJ8AumCUMvvpBvuu5uhn9x9RVcSZ4Ha7hk71HNr4",
  "key11": "3vk4CTrzEXdvcYdWsvWpdFAtYSBGJQtk9irP2DZUYsfR84dSrHPDbHmHwHeqzGzaLf1iAy82Y4kbQUFVCq5weuz3",
  "key12": "9EJzZfWHRc7ktM2bZHGyJLHaksRFWxCDmm6pAGYAH8PEDcg7X3jubf5sqcQyBEAwXQ3RJib2Lpq6DZ5guk74ia5",
  "key13": "5BmoVB1HM1nv3f6FWXCe5V68ujyaVRcgG7SQexYSMLijFgYhrmet1VVGShFxunsX474xauRp4pxrhzYRDiH5egEL",
  "key14": "34fBNq7xNSsji9nTJyPEcfiqWVbyg4BkJBUAyiFctRbBvx7ExLe4NVVZADT1rLizu2ipZMVfwWSqcBNqpLYyfS6B",
  "key15": "52ShFjZWdTvCuck6Tja1mUWcTB981EGajD7tBhuZQdroQAKwo4aJEKDaCjVoMW7RL5s29cXQGUWnhDbGpFYwscJv",
  "key16": "37umbGBqDxzoeoAUYvz38Raj74PmeUdRfH3MGoVLVBbvg66KZqRzPUwLjKjvKomeMneYWBoKMMYNwRDB2nDsPq8b",
  "key17": "5DJd9VzQpyqskHRGPSv7a7TsDtD7b6wsNYvBxBhQ92XwYK7LGdmB5EXE3S2WFWYtBQBfJwZZqf31tYWg2cKoM73z",
  "key18": "4oVG999nzaaXGd5uLMqkHyTvF9o1D8fEQW8rcPm1dyTWeseV3MQJk88uKYTSx7CLb75SGArMAPqGWx6BCkjP54KM",
  "key19": "qkfiYhrsm7PdydCaBXw8BhfZqdExde2BoeHDpWhVcqhqfW99TSEiJEvnkAxA4c3xEaW311WtbDerMXj3uM1zUdS",
  "key20": "4WHXDCt6s9G5oyDhMNsnz6v64YGEMVzip6RabssqKWSXT8B6PpBsEfQnWPSd1VQ5qgWAPmenXpiKN5tmBKPDYhHj",
  "key21": "3xCXgb5Wx6nWQZdZTGwouEjYaEvHyzBt5LceDwfcYsy9PTXw9xtrKihjkS55xoLz8krLTWJSXMouUGjruAscNWKM",
  "key22": "4ETsuhkvh7bW95245PFoYTxW9egdZBHrCcmTTkTsNdTsyVfS9ZJHqCbS8YLT4AcnKXPh5DXztTuFFbhhFTS9FYeH",
  "key23": "5vHj5G328tUsS1BZnhJ7tV8FzUh8ggvTFfYENhRuPsh7CxENePnXQesHcZy31Wovo4yvQtZdaZ9GpuDeFyhRg4dp",
  "key24": "21rEVzPnsko7qu2Tx2a7tkiREZk4pqYq97wMv5DPyMEVjEWd324Maw37QhtM3yKntLcLtxm4V1MMFuYEvoNXuXtM",
  "key25": "5qjGWeJ8EJoqRX9hYgvC5AeLLqLgQJnZz5HUtJXQpUC5iskRe2KC56F7UaFxgucNXVWdxD9GT6GTxrxERRmkKQCp",
  "key26": "MRk1tT3uKSXf1sXVHcxGFQPH6hDHeKRt6YxD5unx6fHe97eLoMgjP2qyQUFiajKmfNn78btpdJYMBRz3AkqB48L",
  "key27": "2Y3CM8bTPgLD8kF7kWtBjePLVmrHFPtR3dmUnYXNJNmYLujp3K4aUbyN8ErhmAV5YFpZBCCtxr4VGHCufcxPN4vz",
  "key28": "3ivKsuiHNdkVyUfV8oq4YUE1tg7uZecZHsZFqf9HKT5Eym9wVj3rrZbsWqLoadSZggQzbeojpGA22stSCRaRqqhR",
  "key29": "26pjNL7xf8JPHZFxvzgGcm48rqXU9h7RNiFGy72nBJVQ16fStxN4hoRFjYzvaKmbfTKiazJveZD678jaxeKbucrY",
  "key30": "4ixVH9L5Xw5uME1azUxBqMiUhR9K5QkyeA6ruK44eSNdrH2bXParx5FF9x8Ms4PpnrkyUmDEzxc7VugBeoBH2Lzn",
  "key31": "4SytdEkMYBub9EFAuJQDvabV6UDx2Chh4qRs5dGW7agV51BBGQPs9LnNGoaxPJUTNAk18Xi3zyiKbuv9fSae1qFA",
  "key32": "61JHxWj56jyyLHShTwsmREgd99yGquGudD8UB8ZAjPG8L3Zk8hjXC6gWkn5mNGqTwCPa6BRqwVEiXyWpPbvCaD9G",
  "key33": "5ZdTzz8R9PESS8MTx8fx84cuVvFfA9DA5h7haiYywmGgoVdkSespFCj9Z1mx4TkbVNKgjYUqULPQhbzZuym7xRRB",
  "key34": "4Dh4i9p67BRwP61Tu3e3MUKcup8drBZstNf58YsikUrCuYauYHdJUKkpMWx5pS1bPZBs32sHqDPWa1Nx7LMUiU4G",
  "key35": "LNp992Sa3VrK3F6XzSoYvfSNmQoZyNWxzYoT4sZgLfFC8ByVEUNP1AVAcMabmURUqib7kCBWaB4CKUJcL7cKqiU"
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
