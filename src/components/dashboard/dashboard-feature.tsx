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
    "3YJc64o2dPqwCTK8chXjEW5d3B11LjMNxVxKP2ib1pDdsR3imyTzxFz8eUaFSVtqChpjuQetBA8DLQUXi5xEbi4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9YtNBGscfRMjb5UZiM4LXRUk7j5Fs51mQ3bQjh3B3F4BJaobpEhT5kgHN8Ew28dyxf7atytB4WHXkJFyfv1rtjr",
  "key1": "5J5PFTH3XpSo3Fdokzbq1F5tE8PmteWZ6pSFge6i9CGQVFXec3kXbeKzvGG6NBhefnsTQqhrpBhxZyjWCdc5Mmp",
  "key2": "4W1bbwTEHUcGntfNiZf5zmBFxz3CYz3Sfkvq8vTT2mUbDpLuC3gK3cm7Rk21sjxx9mRfuzkeRb7FghTyx9irXHbk",
  "key3": "5bXg5TBdeYUpahNHWXaM92XrRnr623JA8VKfL33DTTmNZ5AicEMaaqQ8Y8SZABR5MDLg3hk2c9mD91aRDKHtPxmr",
  "key4": "3EUB3qNkmoSGW9xeDURUrK6hDrTism8th86YNCwYSbj7FK4THVTCA8132y1sXqvW6HfjWqu5Ma2AwphdRNkuZwi8",
  "key5": "5d8AjnVrEcbVpnDurFpf6Lsnr7S6KRMHiWfNexbJtueqh6Sja6kiiFRnd9cueSXu55oa4UZ9VjeNH71yth83pgr1",
  "key6": "5XXmGeZMK2w2WAN9iw6YF7wNPZCEHFHDAjDxKjnhAxuBLoc4phv3xhgji6DU55mRvkdztbVCEU9rFShLUs1SeuzV",
  "key7": "5DQXsfXMzM9HTY2DzuvLwuSqdvJ2Ameb5SFiVRUshqzUiisn5hSPr8ZpJ9SvGJTmMnTUoTbyeBW8VTw76g4frcPb",
  "key8": "4tVGxn38EtYKAK7Gv7UH8FL19myxVuEwrCYTFBa47N38qWT7UUAKM4kDLAoUoZCeCufjCPswiJCZLj4kHRJDcL5X",
  "key9": "5vEe9nETUXvjFuzzkE8exShW8KrcgwAmEz2wyHtyahZqQrGC4SLqjAnuKAhnaMDmsHhudtS9dHFxwqk6zMjwCF2o",
  "key10": "4wocGvpyLyDpcyAeWFxBKX3W7weTz8RAaKBFuMPhkKaYhiv7HTJti5mCaDqoPQPQuqmCUxbuuj8ohAc1AUaSP6UL",
  "key11": "jnzyRn99Sig223PwzgNSj1a16XgZZS5bp92KLrRaZvyipVX6orUn7isL7XeXqfiv5R1JE1kg8P6e4mZ98TqYm3z",
  "key12": "5gmUS8qHJqVFFFCcW6Dat43oiPebrWZtP5svQ8j6o6yfxX5GP8ahsgxQrZhGR6E522mS594x1y6h78rMGt5TkD1G",
  "key13": "MYYzXoNycBKkpkmKA9i7qcFYDNLUMhHjpaiHWRVcEXVLajbgH7h5gG1dD4ZiN2HZDFK1b7bqocTL4dgMsya9XAi",
  "key14": "48zMnFqSQgrU59iMhpq55UyDpqoCYmQUabwhTJS7zARLPKT2DXJohz1JkzoTTwb5HkV5RwcrR9Tfv5AkW4Ft41Vi",
  "key15": "Vf8sQBHqGWbEGaiFw8w6V3BFVmZgV5puZ9HdhWqD1iKcVFroo5vX7WzouYTKiAF6gQyo8rMZUdF82q79yRUUSaS",
  "key16": "4CZn6HXj27aJWAW7xPVxtgdK6oUxwpnAPjjTR24L7nWqRdNvvVXfqtUrrLuqNQdmptxuZy2Z4X1xXnrMveFYEP21",
  "key17": "67jUadzkLxLBNuTxSV9hNRaKdGbr7ci9H478xe7cYD1XVivFyeBZsNBxBbAnhUevq7e4DX8ZdjDR1nBQv5txy7qj",
  "key18": "2axjpT6sREZZdbeUaxe3tjomzoJS6CnoQ17Mkt4gWPeYZaybLhcY7G8wZ9tYxhGLpymU4XLZSZiFhCjKsES5gD1N",
  "key19": "2qdPVBjPdBUAYUV8pZWnxeZm5vdLSKTCbPkCXbwZ9rxq4EKeyvNfZYKwViidnqAUpE7obHZh5yEj3ECuNC816YsL",
  "key20": "2pxeQQYLM2kYh6g1pWUWLbyY2iFEpU7GWFRvCgR348TBke6ibVTxuxoJQXgivjVQBSaQbzT14RHKZ7QayhEPgt2U",
  "key21": "627Hv6HMBeDUifdXTjSiMZoa2G9ozLyiD5NiWZywUeKrfALwz1u3UjNbVorWAnh3msBVsu4RbQ8c2i1AppfkjJkB",
  "key22": "jsV6fYbCmksFHnGBQumpY64urBc2JPbsVefpN2jm6yDo8dPsymN2yEYVYFVvg5GYvW4Rr4qma31dMVhvSFp6Jjv",
  "key23": "612z68ztx7b73bKL1KrdRfTZWWPFb1m9675c1sZhnKpSBxacPGwWBzPut8LRDFn3589SAagVx72krSot4RiLW499",
  "key24": "2g9ycQYGY9gJM27hz2sC38c1hDss9dR342dHJ6mXEZn1wr3ew5dePAB2WV9QNfFGoQcJDkSL2Co7H5kpcF14MBef",
  "key25": "2wEX7FQrBC5bHyhgCTVcc4o6phue6WpiWP2k8fb22jJatrdkDscRzijSvTgaMwB58kzoT5fdADAZnv2JQ9fpvBP7",
  "key26": "2x3GzrnKp3aMfxwEwumhgZCES3vtoLHKHfiQHmoBnyNhwpWFwdtGghoQt69STRtjU9oPc38Co6TJs3ucepTw58P4",
  "key27": "5xDQ9P5BgmYJhCL59eeQAbDnH4JJiKkunCVkt5NJBZ9jggTwvCK9ifUntSE9qeYcn8c6AJwcbjG221vWdUgT7MGX",
  "key28": "2hbBpKSAjnHJH2MQRba4Ljmto4JZaGZMP6QjLPQq6LEHGFEfbW4WejPuMCoYcenA61dPNgfZeuaH9Yti8d3rfRyZ",
  "key29": "2TRTvDfREDRz8QMwXnQAQc6JcXbV6mT2a71g8ta6NuFzPD97LNf9AupD46QUSLiitYFVn3h8yqTe4dUzDc3WM8vf",
  "key30": "2hRnmSHinpan4LwbkqY17YMd2zLo7s561Z64tRFdcgEwzLibQ6EGVWD76DPHPEvxH4ACAvDyzMhcq4JyJRpGJ1Yg",
  "key31": "3U22Xz9pTBCRpurgVZwBZnHfqkHmfduvvocQN32Gh5MTwZDhAAoaubFp1tcmstt775Ewawb29PuTF7xvipvm6nPC"
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
