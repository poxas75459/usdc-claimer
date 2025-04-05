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
    "5CgaTv9iaCWH6Zv8cDCMpNkw62TwHFvumcqgNQMGhAfwiVrvtnReHTvUmvqA83gVA7hfWQNsdqLv7CMnguk85utp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hfLZtjPg8NShKac6NuXWvnUowuCsP5mdjZHVT9aq4Vpj5tH5o5iAnsEPoLgANwxYix9RiNdnkLqT2efnsVuMyMb",
  "key1": "2xE2MZfRTRZ9M2Esvq6i7VeoBwBKYdVusyAYiPKx9pYWwLyXP5KmkNi6EmAvEN5cSLMDPXwXdQpDUryKCefDK2h9",
  "key2": "4JVrJQ8E2f6HVPQcxDjBY6FuUkZzSgDdDgiDdnyuXq41zf68Hv9ZAGPpSJWKRtFn9vsKK78FbTp3JuqKuxgHwDxY",
  "key3": "28iAUhEHckjyGXFDHRt7PUyLGZmRpVvTBcXqNueCb6ZRg1mEui42Txkbx6yRsXQ6hzb7quE3xBUiqhfNyP33ZHZP",
  "key4": "3nMb7T42858rDor39vS4atMzbhrCWLfp39MBXFLPngdady92ezi4ASbcoSpf4hF6pGAEZFYD2DfVpDp2xAzoNCtV",
  "key5": "5tdCxRfgVhAxGK617PTq4vkAAVnZByKmgJcHYLfTty3e5oNBtokSdZP3UCG4dZRFUXGrBUtAkKNZSmYpNAfziDDJ",
  "key6": "5nRVjT8XSGXGzQQTfaYsA7EBGzHkc6JxiRMKucxEw6XGTfou7puMHexJBxYDB2BjJNS9V6aSQEqaxXg3x8EuHrR3",
  "key7": "3TE56mBonQYxeFiapmFdrwrcuzLPK154X6chzLa3G3dx6XL1DbpX471iR3TUY51y9BCAgLYfN6DiTP3KLAob8v6E",
  "key8": "3PgBkVGpr28wU6UoGHpnvWGTsUCCwh5aznjbbF7tokbrpDpYgEJWTPkY1GLx3uZPmwz6cSo5TJoXJeBFBusQEeSe",
  "key9": "4RCnUwjR7jq1dextY2wkGs6YKTTVVYx2m6boKgjhDcdXogyfa9tmKXAiakAJvnFDQWFDM2GZSTDnv6fjWsxmieqc",
  "key10": "5HsrWS3xVLS8XR7vBx2e5VCjp5Q8waYAi1EPMbuP9XqHMFKZdbU64LnDYg5KGgnNess1BAchmsyvgXaxQiidradH",
  "key11": "5iHZu8wKHXD52vBD9eqYCh8XmmVCwipRxpRpvvUGE6qSEeK2ArH3WPwiFrnZHsCzndAgYyiEmxkhv3TEXMCGQ71a",
  "key12": "66E2uYUVyuR7sbbK4qCnd4KfP9UrVpC7nUVQtnjEBk5qWoNNHXLoqEVBM1vS5NBTUarwF7B17fM65TePkF983GhS",
  "key13": "3fhj2BvmsiVTV6tbT4L6S5nZeRtDNW1ytv5DQUnsEM3MVG9xZzEvRNRiC12rcFBNPh5eYLjWCiDPtxRjgFcyfQf2",
  "key14": "3PT5Gg2Mcp4SqL11kU1CUrSS83ydxnX6RPu8UjTeJJGyQcJdDU5Fhr6EFnxKqeaBTVHtQidPYuUz5TDLrjU37V1r",
  "key15": "2MqshkFVFRSzmBe4NfhhYnNzZUmB5jEu29CsEQt8FWLFL9RiymMJePgopXXxEvMqzdqmRwKYd88UdQJBw7r5M2jm",
  "key16": "RpiboqeUXgbF17fAnYZ7kmy6ENVaZYH2AtPBkg2qqYRUETx6vnCcrPjsvkKiEDbTxZptDoindv1ftmBucSp9CnP",
  "key17": "4HiTWeQ9mJtsbWdLCPhVSzz5tjoAhZmvGkw5pHWUHDYPDFUmhMumpy6zaLEfod2j5hYDxtZLKXGExSb4JezspnGx",
  "key18": "5FcxvRuVo5hePRB3E6RcnydUuM7aA6jhFyVHJ2NGh4XNvNX8kB1dSJYF5eKk3kFr2gHK5pD2aMqaa5SpuBZN5Yo1",
  "key19": "SMJEpBzQzuswEtH2isQWcKLi297YGxpNwvxkAa7ffKQpHFQ45sVBXenKzJdD14Tp6f78xEYuiQ9BmeuTaxLLoAs",
  "key20": "3g3s6LS9iqtdMcmUo2q4T5s6kRMhQkGAmnT1sjkew9ftTbesBy81ipvS594GYqR2VqpyXg57DBgy9kuVR6BUpQP3",
  "key21": "5dKfG9oN6dXsRUWisgnQ6Kb5bTtUiiSWJAxMBtNA4oYiwTTHvWUCzsBuVAEbehrYptEUr33BMhCCwaiYdXZuV7yn",
  "key22": "2CHZNPZaQrDA32XmKcCBYBFP3VnHGdyx9etGgeGrmdwGfThvXANHwqCuFDwFrNessJffuyFgvathoQFW4iB5i4K1",
  "key23": "3myNjRfwYiRHGwsqucpGWSry6twpk7uY9xy9siiVfDo6qmDS7fR8TBL7gh2RCHdmKeasvtEpELXQUwxCUCoEtFK9",
  "key24": "43AbxGUa2WmWSrupm69QSjRieuDuGD61UFx8AtQibqbKfnzoqiMG1qkziMgw82Ls1eDRZMgU41s38Xuymr2fnnxL",
  "key25": "3S4FUPAtckPCaQw24ToySAzyTHumfojQ13VtDf8R5y61uTZGBmXojY6eEAWShXGsW1NSthi8R26GnwXVt8cj5hM6"
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
