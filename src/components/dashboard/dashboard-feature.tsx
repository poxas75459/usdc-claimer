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
    "5rHxvWXgqiUtgpdVCNjpx7eUr3ojnfhsYiKqc2FxS7uiFvv5rtpPJK2uPUoZEkD7Jr5oETXiLEC99sWyMKQYQeN8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H7xARXt7eYwjAZrhY4YC5fAZiWHN7Nyh9rSHpjWuX9Y3j1M7cLRKuJM9U1GnqnsBG113T7N3EnAVgL2KEXBXYMx",
  "key1": "2ZP1zFxmBbrSft4EgL2nLyvh25wHv3qBCGRNMGNyoKJ18Ggx68xzYUhp9Xh9q7X85PBR3ZwKuDyP5ZKabJ6NXXnN",
  "key2": "238PBVDE32nHMYeWH9dcc687XEcPPGfvyV1Vheqv6yW11EuYbdAnThHBA6Gb9H9nxpqGwgSabSzVzR9VCYCixk36",
  "key3": "2LTMidVwEdjuySrdMCvuroqwdbg3CHjPA7kRijfcWJSdtx9auzXZdDuRM24CfmipYNELm1Tpbpciu6qgxv81zXk7",
  "key4": "PBpdmnkzL9KtWVmMyH6A2EtdsEd7duXikrZ82npRPDX3ovo3pVcUoCV7Ba2Esu8h8oWiWkV5LGPd9qpWRVyTERc",
  "key5": "3jhUWyn3Bm1urJNSpEahMxRpxRjsBZNwyFYzmvE9nNJ4VB4BXp7mLtfcNnU1R6KoALyy2CtSqeXAWME3hQMUA1Ge",
  "key6": "48Zgb3vsa57hV8scRLQhbXuUetLruiszUyXLat2trPf7CvC49M2SuUE5tDVQicnFA3Hxj5mL4uPJKN6Nx33K4LpV",
  "key7": "oqS1Z1g8wdLk4evAJxi9cWD6eBJ9Lufic64FBQaWUTemsL4jvsnJnx2JVPqCrNwA3Ac5YTwP8NLZN23fPqRmhyv",
  "key8": "4xyZWsJjKAdGntBM9pGyYbKT9kSHZx4Hst86j5MP7jYeXgUWvY18yJCi7DmYN5j6TjvcbC1hgGtVQpfEuSWx6qDh",
  "key9": "4oPeXxoCgVRZFPzV541wAdfKnTQr5jpqwtMEVALQ3ohcMfgG3uB3N6ybineAiRU9iheexJw9fZ1ksmewYTbGrXhV",
  "key10": "2EhNbN1mT5777Mfxy9oSWoAiFkMi5MtGWdCfA7JanatkCMKo1JTvNh21QZYG8PvyBTjfYyUPE4REZLceSCMQpfM2",
  "key11": "3r2J5GbYNt1pJ6T5YJosckpLLT3fof4EyyZosqgsVBovktuHZBLJZ8jogGdDpDhoRkWzSHudfV3Mhe5Jmfz5kh9s",
  "key12": "4hQDeR1iJHPMJYf3sh8vd51wpcZsYrMmeSVAq9ZpKNiJx25rT4vdhcib7CVJTPzzu8mgAgyu84EGUBmGucqJnF9k",
  "key13": "66t8Bg8hyvAVJRAHWSxY1YwP1onh9k7ixJsn6FPAWLj5PyrpZR5oABciqgWK3F1pyxQqppjSVqi7Wze7J6F7dzii",
  "key14": "49SXQA2f3acxY1CqETXGrCnMxGRpye92NcpDcZEYTQrrx8xRNBBfvLCggL8Ff9trErLk8wtkji7YLqgwQ4XjoLXa",
  "key15": "2cAjFGgC9xKXDrNwWEC1jp6E6g5oQJWSgQhFpQVugkSjs79Rio1FE3XCdN5aFpD4u9CRYGwxmkVjAMKo9mBKQVGb",
  "key16": "3aJihSjA8ZNjyJsVpjnCPgES5Qo8Rd7wMGibWeU1hDP4cDeow1TDTdXzjXHEUiqG9r7nXQnmssmsQkrq4Qw2o6hQ",
  "key17": "2vVuum2m76HYwMbyE5WkY8W1shEhT4o6FbifrXd2H5bvdmZJHKy7bRX9sKgxExTnWPpqXCytrd127zqr3WUemExA",
  "key18": "5VDEAaviTfUYHCe2jvhq91jSwD36FnZzC9Rp1aWv1Cj8kgPShWFjSqxb9PAWZk73n5n43z7UmQuAuVQkCoLwd5UU",
  "key19": "nerA4YfGWpEYXfxGxCGM47bKFegrSCDYw4s15ZZ8vG5pBLEcTFHweFLrNShXN3FWRkEJoXzuM1JcSWTfQqUoGFn",
  "key20": "2Z7acC2ArRTfhrBWW1B6KyYchvPdLXeuZ2ZJ43w15uNfWxiCSvJHCcgo2J6jWeJvuNck2k9EETazuQHesFeFaDaJ",
  "key21": "4oUothdFjfA1htufoFPA3E4bNiAzK4eqn6B5DwG12gazdZrhy4AC5Aoz3mqd976whdfApxndj4i26oJo6PAti8hn",
  "key22": "Mj6fdUTFBKroofvgzeLdHe77hTW2L2iVwnRkFb1hdGiysfVQbgM6qcngxneSh3dQE31nCjhJ6YEgrviVhBbtE7n",
  "key23": "3T1goeM7HuFVRuw8MoRMg1tQrWPFLTkDQSQabKUn5JMAwgEnxXz6HnsZvBFooLobJyPSQD2JvHBR172bAJW67Qah",
  "key24": "abhzbY4jcKekpia6cFBGMWvBKQCd3m5pEMLxqzZvdhX1cSDu9NMZeWWRWgZrQFkATuxiHsK6pKYUrFFxRmEf488",
  "key25": "2BjFRcRRqhCfw22uuiMcH6ddaXbpzZJXZUXNpTGG9JsFSifAgDYbNub1cEjRMrZdcieuqtFsj51DiMBiqzu8r21i",
  "key26": "511hfQJsaEwF7mu5Mufyr5RpU5RKscir52T7MetcGcfJkYFVaSUQRR72AiffFndFUhtdonkjFgruCC79DU9Xcd3y",
  "key27": "49yGWLsqhqVW4H8K4vyHQmQaXG2bzXZzhE7FrfkVRpEEFXUWqC7GrgQkp8ddst4Ka4DgDaWocJ9nPPFF7Qzc5tG3",
  "key28": "5YmW1HxsfQFMQKhNob2nd4USAepXE4Ym6pGQmLRrRXU98KQFy5ZESk7zj1XwXwLhVcBhTc8rD3FNX9BqF2ofHvTh",
  "key29": "cCJpfppvSx9P1VP6AYzYhBBHFgqMxqh9Rft5MtZ9s8pFpbxGkmaUUH2L3cnsjY6MCWyvDuWXzW1T6yjktm7pza7",
  "key30": "GFNuvKTvFeTu7nMf8xwDmY7FcwS9v3EyZMrWW9BeNdseRrkd1PhJVdxMb72QzFQyQY3rHVyyUfTqFqhRqSVSetK",
  "key31": "3TbfxAwXBdXoatCUBsARQumgshBVbPbXuhXKbShd7SgTr9PH91rS71E6f6oqY6rW7jtUJWJeRxGRLqbMCjbwwJtA",
  "key32": "3VySKQzXF7SwJMEF9kL82euduh4gkEDxEDtTvMU5rnnh9fGoUdJVPCXdcn4A7AfT7tAJGXFZbJao1fLRWYGGXBvP",
  "key33": "4oHKsBmEoALoaqXx4Uw9eyxinUFYhEBfBsu9mb9i3sFgPSro7SdKXDfDiZ9ENKzhhfTHCodu1Zbvc3fNmh9941g5",
  "key34": "5x1zzZa8Grw4ETC41nsigiEFDzTwCHuB8o8FJivGNRpumyvhtu3VxXXLkacX6rrKaPKDrGgsEEoFKQYBLGva7kdG",
  "key35": "4N9jJ1vNJPB67dtvBFKoUttA8Y5qik2d32BoSfpWimZpMZ4HwWP9wN7YDkKUjnfP4icRtjGGmgiSgizkpKxffoSL"
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
