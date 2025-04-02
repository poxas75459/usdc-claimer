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
    "2ZKyrkJqcmcA7bczWYHu23LaWGes1DLjbiYARRS5F5gkPA9GypQKFsn8rUjeWHXggrZG2K6YtUSegEMC5UrzXeFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E64vgZTEimFTCZEWRvQnEFXg3hWk8BwmAxHs4cBuG9fLvGuZ6YkCog589ZCjya2Yc8W5FewyGGNPGKPSKoRrgHv",
  "key1": "5VivP7fJWCq4uzr8M6x4rN1bWP7FZUToi4jyh9RydP28cRjqwoUvAURQhrFfLqVjjBHka2Z4L2woSFFMWDjKdX89",
  "key2": "4SNXK64NpJiFTGXFTJb4gCxbwFicsssJwf9GGJBiomS2oxhREKTqaHCpCJxvcB54vH9vLpNVNqMLczbP8hxaR3cs",
  "key3": "3krSmfQ8zuXTnoY8BjajX23AsUSqyfc87j2MLbwiZARBnrUvBDSV6LTpeM1MRm5H5DnrRV47RsypzeYSJpweeCGS",
  "key4": "37RFhassFw9NqzpUYC7vTs5QXNfnDR4ZPjpb741SSy2fMPmWtNpDMtRKA6QnjgQACU1R8wG6rmDi5WroXHiK4LRY",
  "key5": "57rpEbrviDdwg3tR74y9yZaikTTsi3cx3MsFLgUk5WZ9mRsGCtD7Gay6XKBpNyg6UYPS86fYCLadoZSxGUdSwn4q",
  "key6": "5u9QveRy4SSMwQ7yyj98VgTJtC5hDmGmL49uFCCdF7NwdzXRWFgQVjCJt8ocbx4rNi9Bdaf1fq87WKrm6YrVmeFH",
  "key7": "53mjSpsMANfMbXxkymKnAN6JACFovXFezpZTcWQ2HHPYo6iUS2LeyUaY6q2PfFmYkZDZkXV8WTbidf1V1dfR9rKw",
  "key8": "AeTbdBtfggptFFCD2SYKu3Lf7tErrG1wf9KRRAiAN4kbe3vUUmTAUDbh1TQcbYtaYr1Rurb8zp6nWAHa4GRyWhQ",
  "key9": "3wzdAave69WS8Ws69HWrjUrptWicZqvTEQFiiSkNTL6s5yqgnWoSEjQjhcwwUNzMaynC9LfKs2KwN2Sm2UnxrVLk",
  "key10": "2wea2bKNcRR5ahuJvvkwHQao55xyfTcDm2JBDX6vxg9SnYWSF9WzsnodHXM97CZvHXdMn3VvKL15TFjP26PzksjT",
  "key11": "oJXN6noeyAX22ram5zZwWcSxJci2seyp3G9rQR5KKppJnmP9aaRsThoVWpxkWTfTBFDGKb3mo3q6PZ9ioumgrsJ",
  "key12": "3mzcxXBb2w6YPnAew4453ePZTAGZmVpqgnG7fdqYpt1dgv6JtryjW1HbUZe1Ft3SkuP1PZ63eXiNmG38m4P2ndbT",
  "key13": "3V34Ygcif87bJqay99zHrLgWFKWiSNjeVTU9M2v7W5WK78qyQyo9WAwJjSjsQRx7JeJTm9uhq5M8WaFyG1vCzn3T",
  "key14": "1MRKgk9JU2KSfPsGxVv9GnDLteiftTcJRpdXb3AhtMQApexk3Eu5TpScuePceCYUjKHqu8Z6b6MZEBKxMieLyws",
  "key15": "2Xwp82ja74oUrs7WvCeDX4nA1rNHWwtrfg2qCoPPv5WjKPmrnga1U63Yw1hQem76x632NYJq7aj3FmRz93fGzUnw",
  "key16": "479tHah6NaUquoTLJuggBNW766pcenm1vA3yVRaRoKLcF4pE44xP63VxPpDH2kVMbEqYh3Q1nhzdJvzXrcKBN2Fe",
  "key17": "yFEvh1bVVc4QCb4pq7pF7ASSPYWgfHTv9CYP35Qa731P9eSkxKL1YT3VGFV6aVJqQAQAsPcmTJUF5niP1Btonny",
  "key18": "5ZGhC1kRxV3DAfrHdEuetqhRZKqwJXDZ7dxusgQq1epNxS5nMkAmdgSahpzbgDRW2SGDHX4FfmzzDAENV5CNya5i",
  "key19": "3usVGDFsgX8EHhNC4c2epFGzridukmVRRA49ULtPaTTYbRUY16vyVJhHMUBCEnnwJYoRkFurVtQG1e8mo4HLGKz",
  "key20": "4nsTv1wYnk1bWz3TUGizS4X2Q3TnuDBjWj8azxbNfDHDXjnVNiXqThJxpXYZTQwVrzNZJPMyu88AgEqWxFeVx7it",
  "key21": "3dbs2NeSiEJiJynawrJPetvGke5rfARC3cty8H27jgAoRyEhX8sDi8z3JsvDCrh8L2wbyM8nApANRRGmNEjgFCuy",
  "key22": "37ssiCjGk3UiYbX7YPmdz5J3zMBaK19YHkbcykspdrij2j45p2oWV6VmVERduJLk8NkkXF7P7G5KwkC94wrhTygX",
  "key23": "dwDncttXPbAizv9HmzKW8uPYhB4DUtCM6KYMGA7wthkXqou65ubcEcWsXkZN8aPq5qf6XBtLGQjwfE5m7Hx4UjN",
  "key24": "3i9KScYd3YeC4mhi2d8r3AVADEt2sTULJGpySvZZu2TVhPzwoczBUx24J9NLt5hu7js3gyHpcBC4V2hkknLnaHvJ",
  "key25": "4w6SnneD8QyeDNodTBdpwEUfXE3mCER81WDeDepeTEFkjtb2MooLSh6tDeEKXNmLVfcC8AiAem1pckH2mfMJ5LzL",
  "key26": "5iVDux74ecyMR6YDjpBnRw17gQTyAkR74MFmwFfm9HUFTxT7YvcNvz6EWigThzQviZiZLUehWmwgSwKgiJTCwRQu",
  "key27": "5vkzXttiJJBQQG7LEgya8YEn2YnHy2xMvohMs8b8mgEFHe1gZveoCJS77Cw42mT8VTDB7jM6Mpz53chinKnYQ9uN",
  "key28": "oSmYxa9CWQrD7GProKLFACfAtDETaTGNAQokHodBSBrR9FGta56whGsjcKTXhoHh159Lzmo7PBAFLNNqPjbTyq2",
  "key29": "5QugAowUzQqDf8ZTN2wQtjPNgFwsrtdCyQUxaXMFooBTFsn8N5j2ZoSUpZjn5YdaoM788R5VNX4B48ReoBfhtZby",
  "key30": "5qT72z5XzC7NG8HZdN7csTojLAsQQS2sjdFEmeagjWXpyytBB8gb2HX1nSKTGV61X1e2bwKxuoYUCBRGX2dwVmT",
  "key31": "3HUhDW3dCcjmYfPeyKpvmf7n9m8Pb5snH2E3E4zTjjWyDjyTsbHNuLz732AUjts116SyKzt2N18cbqv2BjRJSqHc",
  "key32": "5RxBP64Fht6HnXUetW56MT9NPb1wfBT7BLPBFaBxS525ygmdgqjznFFgxckGb4EPvLfhd9rUFd8f3AKL92pYZo37",
  "key33": "2wd5YyYMncBZPLS69M7vK7d9xDuDAudkhS2JvGfNMaNSknUJN3Qk2aS2a3FGvU7ZhWxgo9u9vUKcxkpJYhA8KEMw",
  "key34": "3mbBW26aW2SbctgKDPtR3JvMCMiNZY54qBJXUVmgBAGM5qBUzsKYy8eLapaR9zDLfTB4MvzJ1ZBUgVMHuVMGWVWs",
  "key35": "5f1UWmUmwuKdfqgqSKKDDddrQRRHSgg1u6tJMi6QSkF91eV3MTkGLCGigffArd8edGw1TE8xbXA4mcm5eLPuru3g"
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
