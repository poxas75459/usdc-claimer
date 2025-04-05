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
    "2gGpvSYFQmnbkykggrqAE2NforsqFGTNurSLqDR3R4tMUauaeuosLNNXkwMmJGwJ1mdPAnPpb8P85UMMZJKmbEzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vczXcJYV1v9p6aEeBqh3XnQ7Efr95Zop5Sgmn2ihVipG4tK3jZpLts5AbUgwHj5QAX1dpjAGQSVu8rde5TXWeKR",
  "key1": "5pRq3HGPaEQjCXDbCo9ytpz5eKnzcrNFkhDgbWbsmrJWKmMxy2imRyirFg1vhLGSWvDZrETFgSvictcLLkJEmqGD",
  "key2": "2R4KR6ZGdi7GK9ypfJgByGYTREKpBVbEr1r59hgSSvhc19g45rUuEGM7q6Xhg5YdyehRg4R2orVZQhp2jr9DPNW",
  "key3": "5iyxJpeibZeMofzPscWyUBH1pmpMYzLDiZb61h5MLhXC9oQLWYisa68XGffgTR7MnN7uhRKfWR5tYGAvYmBm2idG",
  "key4": "D35YvrUQ6zpHLM21CJojyKVr2DbFVNyxWZ4haagjREE2xX3oLdiYuzowgxmUAn2MvMhSiSBJ83bWaqqeEnb2gCU",
  "key5": "65a4GxAu6J9UDukVbEm7cvd9Bf9uFkFNCr7abebjh5HiZshy81Hm5orYrSonwX7u2t1tBd1T7GV8p5M8M2Xgqmit",
  "key6": "4Qhy52cD92Zff2SPg2XLRKjmozgP4U9QQNCtiyiNjTS26aw8w8fg25DcjGq3QBkDne1Nr7iwho9NUiynjtpm2wUQ",
  "key7": "w6SAsr2QL61hpxcvC9Qzw6bAH7CkMT8MauqkJsZH7UsFmur5xnneivvmsLEbVXVqdfbNiEVfNDNYCQAoPoQrrnA",
  "key8": "2S8uAc8UXyNQYjR1fwp7mER5HsdhRSnz847bhojnue9UUPfBrvMot25rVFVDCg4qns2DFYnYzx3B94JspTiiKRp7",
  "key9": "2V3EXLVP2mvptbF8ArT67uUmEN4E9R9DbE7pvzqd8GJ328iUEsgQwcmWb8UhtUqXWsgMMnv4e7gdxzdP9MRL5xrN",
  "key10": "3FSW4xeRgViTY3rCEPGDkDd1YFxyCNDCjyD9PVFLWEKmyL39ZXcQFzsWS368rzqFTtaccbV8gAvttD6kYbYqnjwv",
  "key11": "3ThQphxU3fnfppDExkkCm37ZENKXRwLiiLae7GYnUS8ZkZA8pfMKcDR32v4VkzWKiQrQN7W7dRK8zwiY9rtjXVdw",
  "key12": "5uTk71ixFB7yXUAsKfPJBtnzB5PJmFTJEp3d4Nk5oeGa6F1pPREhGwNZA6L5NueeErEHY25BVuGR83t2THSgYQ3a",
  "key13": "5qhNgN8aqzNqq9K5hv1Vdp6YcJ5EFTTD13yNnTzbRgKBFjmXUeyFSGYeo6JrbHQpmLxS9BvtHrZV3jLWJvHWG74J",
  "key14": "zhQMWhVKsJz8QqBzkHMMhq8uhYTJBPGKeYkMSfRfnEXD1ouSUmYTtgniRBd2j4WViVtmwmoaszvToSW54fNmTKn",
  "key15": "4XTEsLtCrZfNPkonD3iDW1XMPz8yxFLNKMTbn4xcLfSd83fQjPKNQFSnoL2rNsfX2p2ZdHr2d7edLPgN7wk6vh2j",
  "key16": "5XXypfMq8yTDxmEUFUBuZVUtEjcHZnJwjjcJV9ypWyrG7JLZ24VSdrqjCETMTkvBMnttDfMfqy9LSj6DX26u42pa",
  "key17": "2G69PyXQApimJsFFzPBXFKQwzb6AFcCocanpGncqGtXSZPJQdWKsU58NtHcFgft2b7xVTH3pdk6UBrGBSsaVveme",
  "key18": "5NfnTMawjdAYtnziGepd78Seu2DFBG9oHZM8XG8N6vH64TqgEiKm7DpoQAqLxvKJjmNFok7p5D1A8HXqwwkQc6QW",
  "key19": "2DtYn5iErzfQauS3ZWxAqaDbAgwLxF6yWck8vjEgXKGJwrbiNXQXcEuJk3DeXp9WHhMrCSgLkCS9ny61xGdab1xY",
  "key20": "4A9cm8D1UXy4Uakev4oAu2bqM87MSNAhJx4rnWLNLeTCnEiY1UbnX1Jk7UEQY4YZ7qoiHhSPmbsVMjKn4DGKtzV9",
  "key21": "51QZoJt8zVAVYPouQh6iVk1DUhtYAyw6KV2f9QHvdDgUTsQYqd5t6DkzEFyoJGczGGNsPkgWSg4tHS8X1SojMBpo",
  "key22": "5PeErzq8U1uRsn7PDrG8rcwQCswB4YqpN5xbRaMhZsVzPnSA4fzTux4dk6vmoN5MSswTGGBXCCKsFodciKbAkdNV",
  "key23": "3ANPnqL9gQYSJbcg5wB4Nf2nNPwG3Qo9dhkYFVFze3aJv3f2VYDQcFgWUBeAKn32zLvomVSoP1KgTj38Xe5CXNoz",
  "key24": "3eZVKmkNcRpm7rpGNmJEvrteBeac67TLniRzSmCiEf1zYwnC3cZ2Wxi4KnpWjZHe9LpBhn2F3dKVafErmsTdeEXn",
  "key25": "ns4Ekv7YkXA6F6VaP9jxrQXHwffuPLcFbmVr6Lg7uG8TLGs5YVqAqtyfFgBXTnLTVJcCEURGy8eXDNxvUWJeR84",
  "key26": "646mseSaBuBp2mQEawVVQuJfqNBCWoo5iozq2DDPEoe2JLFLDPcrkAmaJwFSVxnhLTuPxDXz84Nc8sPJN9kWJzLJ",
  "key27": "4hhsbQVJFRzFHvrubYRRirher4zRdtp96AbxCj2mgxxNpzT5NLo1RkksNtzja1JgoRmE8JVQLyvveaT7N1DS23yV",
  "key28": "7ZMShYtXkGAaiv45Xr7K3JQykAPjoXBH4VYuzxkzGfXuue2Q5Sir8vQkYk9ZWV79f1e1cxRtxkoyTKgn68itEMU",
  "key29": "2FigNgLaZMdoGXJ5uEVNuev3q1NkY5f2qVx3yTQFJZTbytBTa6HE5qnPpnFNRyv1Ki57TFZ6uSac4DAfZC4gaiVg",
  "key30": "2cnPBxYwbWbTSvvBdeN3fR4mo8S3uNgWa3z8NBkhSGnHqgpPSor5a1k4nZ7bnUZrQzrNccg6rV1ZJrrTG6uATfn6",
  "key31": "5wmzTNd2FgdLfumqZRbYSqs7v16D3cKoNw7VywQAPfuvFbpLpJEx2VkQ8YaqAJrwAYuXSsmr4ZnNewsiX6ECVVW5",
  "key32": "3WAsdx7zX4cFVKDdTHefSF55J9jj8YnJkURWmGRMvswaa5PdGa3k2Wdmy3scsbqjeavh3BGjEs52wwZMXsoUv7Na",
  "key33": "48NYEMdxRDmmVmEHVbSvF23q8fmwGbLoPu2SAUW8Uu2s21LCh3c6MtUSp6CRHY2eUpvBS7Hcd6NRAmDJn6w1Z9xB",
  "key34": "54YGKjvSxHfxJkxTzCDUcx4E6Y1j6gDD35QdUZy4MGbTeALYkAvbJFnHbu1rPfTnqXqa418zBTJxFEaB152sY34L",
  "key35": "fKTnLk6NGgWLdf16N7QbPdJdy3sZXhAU5gMwirBw7CTZMvjX3g8g9c45Vyz8C7wYDoWNaN25EMHzHpQfqK67FxL",
  "key36": "28XPdhJSUwSLHzBYk3YMgUKMk8kdb9GKwDZmgWkq4xbWU3byV5a4MWpP1Uijq9z3xTrep1u6t3PUygmJp6f5JsWV",
  "key37": "2pdNzddJoY1UfRPVgSYCqBrVVgTNmEpmWer66fcmc4MENEXfjnfssUatdYVby2rLekc3ot44KgDnzoCm7suC2TLt",
  "key38": "59Q4F7MsXhCdEm5p7jpm8BVqYkbfQLxudGhrKK1sNMVae4cFmjTEDZ5UUsqPy3mMGCqfHbXYixiGvb29xubiXsWq",
  "key39": "5vkXzHazQrVYa5uLgeeAcqbVH89nAvGqrtr6JmKtPrykoaxr6GiDxb1GWYs6owFcasWJXR4n4wkWf3RrZ87qFT3K",
  "key40": "48VXzpoEwA2Ykz1RyayzJEP5DgtnAZAuiVqkqoJXA3DMSU1mMqvbTUVQMdntzJesJAMm6vn5LeDq6AsTcHnekZvn"
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
