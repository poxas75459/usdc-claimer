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
    "24LMs4MD7jsXmocETbFvBrTQm7qv9QmeEg7m9Yv1drd2b8QxWe82Gi5Th2bcF5K8UZRmTxLNMypdrSBRLD5aybTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MPHFaY2NYNRpGKmAZpsf1Mp9gyuALBP6wwgw68hzVpaTBoU3KB6oV7yvjAaePxGWiT4LifXcK7qPedmYUK7NAN4",
  "key1": "3zEPKDxeGvvdFa6hqpnK2GBF9UKJSVMu14ZB52aZGSubqGCAQeUJJqz9MHQcj1Nm4j6GUJKjYjjD8p1dDDbrvrnW",
  "key2": "5fMnpphEBWP8w8mtUpFQstjvej4omiLapJeGtqkG9nuqP2W87NDrxL6KLfFfzMJtfHSiWVNnad7NVim4FAi5ETAo",
  "key3": "3RJbpbxSVReavjS32cycMiEjhsbVmtCCCtAzd6DzCrk8mcDavWsMV3vA2SNF8oHX8S3cNn9nGyMJPuVcEdxYeQVr",
  "key4": "39PdesnxeNN8FLGR1ArQ1gyZQZ3Ue7ux1oZTA8ffLL6bEyLqFTtdjmUW64h3Y5Kx6H4mPbtFrRu7WSehB8i4odLQ",
  "key5": "5GVX43x18XvqC8u7nWfLRJujsEdxD8eXt3E2bjNB4GcPk32h43WCAeRSi8eEKnddUS9GwF9e62F4JkCihBeBTzzZ",
  "key6": "3qhikBpbomwzFovNXCn4M963ZkruLA5fLtqbYQqQeDcyS4D39v9MtbUK7ZkjrfHQhNe4CPUZpmVGVkffy2DUhAqf",
  "key7": "3k5au8L7P59TWkFntSyqr4NJY94gi8Ua4yQPU9SCL7bX2RaaWK4v1cVb3j6F6M81e6njqng54pZWyUcT97Ayk9R1",
  "key8": "2ATZSR2z3yPL954igUQPaym3uaFoCnZRMHxkF22HDFqsofyMAXKphLYRZgKzkzevKGvG2SG6s9XcDhbfs1uWQKAb",
  "key9": "3KkoaEvtsiztfm1ZCLsAsdUtRsLXWhTvK8FgnKACLoJwMJRsXNizFvUJhYm4ai4HC6rvR1yXDFQy9dB2xLDLbnDW",
  "key10": "3h4VTK6pymcrChQkoYUJeBTrmNgAgpGaBNSkyZc1rFjh1SumZkcTYnY4oyNyNZQdu2h56iRtQ9CfSTgZyapLYkpF",
  "key11": "5DnPy8ojoA5XQ2nBv3FBft51Qp56i2aBPPGoStdQxPf3DMrL8oNexB8DqwFTXtizoy41zdSfv32vrUMJ3wz7PpwR",
  "key12": "2aLVFwT6dooMZPN4zZcCkHNafCAZDRRq5nXbZR6bPRne5DFCSBQRW6XxS2W9JjVTRmt3167TvVVtDCNZU69kuHt7",
  "key13": "4BxCgkvM3wZak9sqEShvKyyqN3KWVA3MtibDod8nG4YC7WXZ7iAjc11o8KgpLt9TmH6Mdc9MTP8f93ktEnuukiX3",
  "key14": "4C5c5BCpbEXqVnkagSboby3f5ARRv6EyL8rPGLKWZkqXbKtnZZyjt2eKfASazKJdYKoEVVohsZU4g84Ni6qsyCsx",
  "key15": "5TLy4wooiEevEyN9M3VyiAxaWk7efFiu5UAqZfBmU4K12A1GepQkFQChjEySvs75wskbZAwvEyuBNaFpyuVCE7gv",
  "key16": "2WsHyAPQeh6DzheqyfScW2H4SJ5oVJA3bqKqtTP8L1Kyn9ksSjht2tGHUzvjPEFC2dTjnwScs7k5hMJNzYtHe25Y",
  "key17": "34CkbPg6pFcP4Fqwg8iKvXBDwwemuy6UYfFVV2oBiyvmkW6apxB1Qi8EzvvMGcBP59EKrFF5qVc2uBP9RXVPiw3U",
  "key18": "433odmSCkBixsu8wts2fsvjT4bse8G8GjJhvwV1BEcgz11KqsUZP6ciogoiYjE3mr7uzo3QH7Wi3TeS1TNxyVWkt",
  "key19": "3bwvDzA271SE7BFTMyD5pTdjVE3ahLm3qqAXWmtYtXcX8XU9KsK67C1P71G7TgKmhUym9wmKpUVZgD7cDbSiJZk9",
  "key20": "5L8Z9qDaGf3euxWMxKh7WA3xjoV1bKtW3YKj7SWMcXkS8ErkZicdbnSypZvw6uU6W4tXdmhZqMXLy3hSp8JHxF31",
  "key21": "2CDJzt6sbZ7JafwyGPmbYcKyTZRKYiGuRNiXVqWM5a3veewpU64jR5fkNGLUxe34eE7N9jW4Vcf9qjzzLFZmRyw",
  "key22": "368Ct14nS3Wqp39XNWkKteuBFHuWuY25dK8diim8Nn9GSRCvJT2himkammpxa9GYcYj1XYysTHLp9e7M82Guss7z",
  "key23": "63rJjaLWqWugzAs7sYzmKQY1pnCRWvxFAS3XBtGgdopu12M6hyhGtHwGACSuxu57gosp7ZXyVfR89U8NcJo3L9us",
  "key24": "4pGTwpLF6dPGWgiQAtcNh5qNCa98WKRczD48h8Mmdw3eAuhgrxFStYaTbRXMmK7J2mPWcvhcwFpFwatZtJm5n1xG",
  "key25": "4jsS6jDq69dfbPX64JA65QiCBzaUS3ubNbYkgyWscRWSDYewfvuSmAGAhNR18KhCFu6Kvjk7h8peXErdSM63ELfA",
  "key26": "nDTWgZT1MsgcaUgDFjXDZgHwmUPEaUAiMoqaRp3RrW5ebhrJ2B8PFhmgiiaZTAdvtUmfg8c1reyMx6QidUESSdS",
  "key27": "2anqUvMraqg2yMLTD6uALR1ambkYJisk99kpWzYkmT561aY21LryDRw1D253fzaV6ANx18y1yxkL2D2W4U35W6fv"
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
