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
    "53jAP6tW4o1NVknFmJM3nxdFUgoMu9znmfrn13XGdgRcwh7d2cp5eSZWxQxS2fjRf2tJ3ioiUouXqXooVeq9qp6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zRxi3F5Z2H4o5Mksa1Zd75YYUeH57XTkjFRi26Vh8uxdao9eMBFxyEXjwpn4nQED1VLDXj2i16Rn5nCCdtBWacP",
  "key1": "5FkB6AnvEAXscob1EWV2uLf249GdU7QDaVgFBtEagcWQdaFHjVgjuUc88zA9Bampuj2ZL2kaY9CTUMFvfX31E5xD",
  "key2": "BxGB1n27AQ9AyJkRrwHRaRS2DNxGNPA5XRurMg6ZKdNVs7EeuxJBLS7rkf6ryWgHwQqTDEADM9EH9pnamVX6LmX",
  "key3": "dqFcqg3p33cCujSbut6qig42aRSx9oFywe27tyYTpbdBT4f943kaiAyQTwCiFwAxJzDRryRGkhY3EPSE9LPzTci",
  "key4": "45eh48ZiKpioiLfNxS7f21jF5UmdbC2UGYusqmii8fQYKXnX5mkfV2CqBmCcSoeYQjpQhWc2ythxfhBoTc2wLnQh",
  "key5": "QFs9QqPdu4qHPnoQ9VaWv5t11q6gmNKyASiyRm6W1bdgwwPYs7wEgiKMRsRUc5HkrpFW3zRqnzDvVrzeox4tVvC",
  "key6": "4tcQuLvGsfvWQhgQc1vAuKDg2qznu7e5bKcZqnDPGsMGbQqYdemn26hGmXjWyaVEEh1NU7n3quENsK5k4SUsjTAp",
  "key7": "Fj6caCC7s7Cy6Wiosrhmt1amuVwinoUCcrGTU3PiLA5y1bxPfsw24RcGMRRrSwU36HWeHp3QSYurGMenNEL1qJt",
  "key8": "4WzpqT1NxyBARQ4hpvNA4rpkvVcC1WWenwV36KDQDaqSqF8khMkp5Tw2tcempKDdCj7ovdGo2BtacgoewgnjuUD6",
  "key9": "4UtBaMxjXbp65nCpfzHwhZD2sG17sXrZSDVc7XS2DE3eaxR1zaCej4qcmRFkh84KSXsE4nQwppMYaULp6jwTRCTZ",
  "key10": "3PRLnFjcNQW3Jur2RdYTJJbyN26FzQm2n8QvP4WHt9wuDmLDoouRssQwCPVmNVU5ajv6VZYuYRBa6epX6EYegxus",
  "key11": "4x1vEH3yWU5JWWxFMFEof5q9vF2J73KdWP73ECdQHdpL3YqNhA2VsDrJ1YnsUoDtuHYYLN2Mo9CNAPzCjJ3evSo7",
  "key12": "3AJPQd9sScNGNDWWo9SihncPnWJHm9myRXLGu9n8a6jgB9KFVkeXgJ5vmy6YkWdWzvDCh9ab3L7kVL6ZjozQ8ewk",
  "key13": "5s8wK6jspz7BksskocUyfChpAzaYGffCNgJrTMeEYWeQykqPj7jwP52iD4PTq1AsiLgiSrf6wRv47SzddZABfTST",
  "key14": "65nbE3w3W9MVq9Hi6TDKezPDmUBacwptRedyD2JUnA1JDR6FU3iPTCPKaa9NeFMkvZ5c7jycgHPH2z95uExBQwfT",
  "key15": "Hu7X6hCL3vPn87axpSuNfG6PxYGL1hjDGm3wzP71gBEFcX4P6RdCFe3RrHnHbcFkv3gJT3N2NrhpEUT6ryEcFFn",
  "key16": "275r59an3KZSCAnm94yT2Fb4xtAvuUJ9uog5d77Yuf99CtwaCSSb7Ta9s4spjP9Q2ZRxf2yoLGr2kSxtFMWNZBKJ",
  "key17": "21jiF5iFdLVixE3JQgKyCnYfvuTgZVAb7nJDMjKaVzKKNBdW5RAxhcT4QVepisWhUe2UocsoCKyAQcndJsC49Xhg",
  "key18": "2pW27nMYJ9JyM5Wpmz6FKmwhXTpJrd2Np4whuRJMPU7Nyouen338NrdxRX33tWHob5n18npNg1PFDbtStZFgnp5M",
  "key19": "3s6ix1VYXXdaLmuNVdNvuRuQzimShybrAPfRFgTHTnBwWr4H2GMqrU46XrEKUA4Pt41JnJikgqGeUp2S5dLWa59y",
  "key20": "4FsVeZcVqmunvjpJubW82V6KLVTmwjCiSYkw7Qr3Ka7R4vLhQfB6GFW68aX8a7SLMSPG5o6ownyzzq9aABLkyjwu",
  "key21": "3zW3H6Dr4EBm9ZMun1tiJaBydtt6Eic9vCPspehs9tb81EYiGWyDRXdoPcAiF55PvTaK93KPbtQiMjg7B9oxra8d",
  "key22": "5Lkze6nTLQWfTCd3yEGsubQw59JjMh52ew1WPy8gsihT4DzgCvCQMZkp9AzMWrh3WjZgarzA65RVBU2WyE9BCQNq",
  "key23": "3cXjSuQTgbMGe1587xkexpryJ6Vh5t66sg4K9PbAgY8pEAMGZfVFcCq5JH4EMmy4NATqm3WU1h78qu5Hwf9rLRLq",
  "key24": "wNo49GMGgyupu3qMfQWBzn7XvR7rUeF63peuEB2q9Tbka46W6juXvnrzh5dCEkQTEH6VqEvov7NCoWub8crjrVq",
  "key25": "3BLV8XpguqGsdXxie9AV9gkCTtBTJxbmCPL8mHakeZ7w1ztnwwV16F5YDbHRrdVgP2SDLJ6zxDVLNgEkkgcFmyPr",
  "key26": "4xiwBU6iFvpSr56FeHJYFJeJJutfpdvBh18HGmV618iEqmFkttJRVr5uVxaMkaoZv33nL8vc6aMJKwkuxNSXiAQC",
  "key27": "4ff546coFj9SP7Hido5NrgWS3sWCq3VBuyM4ZpaAnVYatToiwaG4Q3amwvKtRLS5z6kwisqTDoQFRAJoUy7a5t91",
  "key28": "62vyPCLBqi33zztEJmk9MTc1Eyj8sPSjf7jJnxXZfyoQxmtFgv8SzyJAZeBtYsNV6E54HP9qMvAGLzHpmqL9a7bC",
  "key29": "38HncFuju93vfHbTHe7wzn7f4UY6HP1zaY8dvmaj5YAo8Hr1tsk2bDbsTUZ7PYYRCFtfrv9p1fPwB6m57gaGJWVe",
  "key30": "2jCfaSthNqADu3PKMenbsA1BkthKK8Yvdz6kjp8hzErDYjtubaTXjsvzsqeh3bPbRv9BnpuvAHKnQyA9aojv5RMg",
  "key31": "5kfC5zNXbkZGhuYvXnyHo5AFquN4o2hTfP4Rn5582mr5a2K1P3az7bHod5c1kyF7yb14pzMHQvJ14FXRraL5fG2k",
  "key32": "5gteE2rxJt3XX4JjWFUrbUEeqrcrEf7xQrEuNkQBsKxDkq41oqhS1nT9waz1bzdwfjkfnGmwHj5e1zHqWViL4VXg",
  "key33": "qRHnXoFkmjkgt8MF4ETbeAdy3BHvtHMrET7GufgwBAWuKx63qrfQrdpZrCjsJw9LUHiLpAUvWaB43fnuJ1Z6Tar",
  "key34": "5fuhnSsGTqCJq44FipyHn6D5x25K85tHqjASMJRd7Pheoj1y8tzYWxfECQKxyKqELncpcJT7ZVkB3FiwX4CP6mJp",
  "key35": "3eCDfXnrbtUEM1rpMKCZQvYpAU6nLckfQh2Ktzzp1JKFzxoHnXJiKEasviGKQkJYSanFnYABoYm4gYWcfmc7TqvX",
  "key36": "4fC7xH2Hk2gZdtVhrwgTYEC7DSuYxMKPFwC1j7imzZnf9PMpQUADvg9PNnBoSQHFD3mtGyYTHtfKKbfjX37NRq2m",
  "key37": "4odf47FABjQWu27kfNS9v6Cok4wjZLwAs7Vb8aK6Z6419BJUZMYDmXg6MPmTdL6Udo7rUCRzPbedPTC7JtTB6Nvf"
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
