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
    "5rZ7ooQZcLDbDHxrbswyyo7MFYaKpkePvrZL3uja5EQiFw9S83iobotNnmvVQeUzLUQTqPMQVkToeenNyPL1CTFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zWS7ZAWa3fWvRdY3a2AEAwynhB2JPATwqRmGqbxjJokESiYmbAr2uG9q1JeLUJDwishwhPjnHrFhFLJLSqBwYfp",
  "key1": "8mD4uKG6BWBuKSzrLJ8oXkTZ1jFqC1tf9t2CFS8pz54oAeumWSEYKqUtzEMYAatKwHBDtrBcchdDMmps16bG6oa",
  "key2": "43iZtowEwk6jrCiTMNcNhhAUCgtUvrZ1P89LQc9ot28xFC11pETSTvopgqcTTfoSsFPLVaEwjqFwxw5gNBVd9sQA",
  "key3": "581NE7DPDJPxricbFpzBDX3aCppKAbMuoRiVC5d1pZFcadCVkpF88fqMyJgp5eCVx6SQM7BocYuYFTP3dvKLhzsv",
  "key4": "Tbo51oA14CqnFe1duMsjzyTysh2KoK2UEmzELQNGgNKq6ZdCab8RdJVkWeYhMVPBr2cZ15ABJJHfN3pN4phF84U",
  "key5": "3cvUjXULogMuXoyZsgjwSMTJNCHdRwafMuXwViuELYftby9EesQggJ2f5JEvHyEWym9S2zsnLL4YDyZFdexFcB4C",
  "key6": "3eFvyu6FeK9dozyDzoYauqPEemXBF1H7K9avpgo12Zjo6h2guYr86mLnkhYGe6qpDNA8uwozF9C2JZfM1L4aVLnG",
  "key7": "mr44YNoTfL3ZbZCggKpHZyQRLy4kP7h3Bnhm1ZFwbEpRPYzkZjehwVSVjQkFdc17ogWbDSCqGuZ4QYXCovyAFz9",
  "key8": "2qvzEWPCqLAsqPfzznQJSC9j1SEbsaDyJ8CVp5epRKJ48aYcwSJWPpWStPN2ekWSoAgrw4rDigZenKvBwgC1Ewe4",
  "key9": "348TiU56KhuySS4wousWe2eDKmd1sm2PrQ4onvBqrVamwysERBTh8PE4mvPegRwsVf92b5LXZ7CEfno3Pr4AcrwR",
  "key10": "3bQ9oQFkSLT58dWNvGjQRACtbSiDAKur2kAPgoKBHsoGpjeqDCQWhzcMmzXz4jUf7GHvSe5J4M26JWBNjp3vXXCz",
  "key11": "3ud8rKyzg7XtPeJR2KgdYucruBjABcwWBe19k9XEXQm5CxeKGRFt5zPm4JWP3txckcu1pUQ9h6S5Fy4zrrWpEUF9",
  "key12": "4V2eZfX3vu8VLYz84Sp3ySHcn2ZuYGwAff8fXUf8vQb1kA7qyPdK3WPzvnrmG9zWc6wRLL96RsBYRVpZofoAmcW1",
  "key13": "U2ZrxkEry73wD3XdsC8awU2eCGpQw9NYjP43ZXTLTw9YeMi8ndg8U5w1w4LbodjLRsDs8rfn5TWVQtScXhzakA2",
  "key14": "5CzAowJ86VzQzNPX4eYwZD3s83DgxrgRYYkGLazXftCCrHd1RVeu5ypGrALSsa61PpxRrTXvma3oUCgbeFaxsTEh",
  "key15": "5VocaHTF2M997AFuqBMtP7JTfuQdrDN2BNvugFZ7oYLmdNnRQ6sdQbKPNaqhjUSyxFcXd2g4NCNeHr7nKZSkKUk1",
  "key16": "2m2zdkKvxgZQPchccDU1FEJjPUZTRUnWApdLN3dw52kRwtQ54ZnxwRA81TtFnJt4Vf7ewBvqGnHgLCs4dM2HnpHW",
  "key17": "4ZWn4YYttrnwx6gCjuhui4UFVXrtE5tgRoN8H2Pc9dw4sxd9U6ivmyc1bTn8dD4SeUFCkQoNCRPZJPEDa6ZGRfT1",
  "key18": "2SrPagn2T1d6ZvDv6TwERmn9LuAWh1s9kXA3Ry3gXqTb8wopCTGHKnULiDRZ188VoAEkDrdqxrTaUgsndfN59s9s",
  "key19": "qJS3MG4cYGTGkYGf3a27VdfFt4BxzC9SyFKMTXYwDYB4naoZ6JZEnQRyFSdTkTiCNizusQa9gh5sbTFdog9C83e",
  "key20": "2oz3F3LN1wmZbRTwH8WSpLPvkzpSJwhDBdDGhcBZLoKzbVu9FrqmtDXtbcGXZvcygLE9KEVABD56aWFu2f1EnbXo",
  "key21": "e6E7SqDWJ6Z1zDfPpWAfmZKZbP4WRLEU72AhnNeAuv4iD8ETYocRAyHFeDfYiehq3HgUMTVNo3Tpu5RsQuZonGz",
  "key22": "43S8fMiCnQEtmVP8Z8u8pHpiE3h8kvfgFaQUANwyFt2EthQhPSM36HYB9pYqHFMdUFh7MereQuDJ2HEAoJvcPNo2",
  "key23": "jFNZYR6tchDsMLu5axgRUNsV8yeTUZA7YVGQEKvxoYruDcCh5Qyaqska2WNpAyCpxGQR7ceJwU2MbS1jqKbm5pd",
  "key24": "286Pt89QiA2EdqNuD8jqmVez9DW3sy5qkTRHFHNvLRMgAanUCxm4jTCRjmYeqKHEo7k9LtqqhjHvqLoDfqzhxzws",
  "key25": "qUAB6RnerBSXaHVvrin7g1LG6do2SmnTdvddsQMz7eX39fHKe3wgFZq1q4xbNosc3oTTpEjtrYkBwQX51YJYGRw",
  "key26": "4psCvanJgFtwVFjmbY2Zs8niqRNCXL68sDt496o2YQ6MMHHjZqnRA6tsaHFQPdaYATwt62xmjjPmzEJLzvyVeS3D",
  "key27": "2jbkqY52UJFqpYGHN3F3HzjsRbT9WucqMQ6HLeYgtW2Chmz2JBoRX2GU8Q7tybpLnhSEchuaRTjc8rvsigouhHvB",
  "key28": "2YM3vMksBsfXd7cQ7oCkeP5zpdNJ5wuD7cKdKqbx1Nyt7zzuiQ158qiUoh2H1mqpuULDzfg9Lhnc7e1E87ChDWYb",
  "key29": "3RgJWCa1txsSWSuavC39i3GpBqhC1Z6Ng2MNRnYUfZBJGQ6upR5k1rdXhgVNghBefUipTBFSJK8wdGQJHaBtBzcX",
  "key30": "379c5jbLiUiD8Eoq4r58Vs11mLifDW63NzQaN33Fu8oDrHPKTtyP2idUwSdkN2i4VU9fzAg9zdEqd1Y6fvyAzXvm",
  "key31": "3ptsAdVtEoCf6QaRugqNxGd8RdHsGNQFWTEP94xvAt8DVPmAK28xEBTpxQAGK3QjXsJfBPQwaDmtnURrEPHi1EPo",
  "key32": "3SCnGAmpuRMpWRzRJqW29Z43ifeKnyMyzxpoxdQXAVdhmbMJN5NN2UHADxjbRLrVDrF2zWiF4Qio7oqo6G3TGza4",
  "key33": "3WYZXFE9b5xZH3JL58izVotArViBd9sTQxJ75TF666zUg2H9z1sZN7TKBPK5ft1qyohvwE9JaJUn172AmqHTt31Z",
  "key34": "2f2XrC1XcVjVKUVecdrXq3RRpz7Y8isGEvVZ8Et3YjVvxVm1RFYJpwtS2MKW2osWuqZRnNVVFiitajLu3HJmUcGN",
  "key35": "FB4y6MfvCmSB1yo9C7evVXd7R3pP8nE1cey2EENFbeE5JmSgdGRzt1cMdNa7SyBStq9U81xcbumi67VFjJsRWkw",
  "key36": "5N75FGBGo6ypgjB5zXHzwU4KucrPEKu7KXZnpW3aFdE4Gfti2Fse5XySRDW5m9oRyHdfPmgH2oFGHXMgw6weSApX",
  "key37": "3SaaPZkw5pQjHmVjJbEgfGFMwDbgWamioE8BhLhxogYMfyH54fVjk5g36MBy6FYUP2pNbByAdzGTL3ZCRiqJPCwg",
  "key38": "DRyL9MHxhxMXxgEmu9oCG6xMdpstiCBZF2L1kJNmiXKG1W1aYNdgJccBqZ6igFxE8HQWyDseR6Y3n75zgvHiesH",
  "key39": "3Bz5YvXkNY6aT198QnWPeU4rBUu1j1r4aabnxT9wozXgqFG5sSwu3qqMDgjVnTFjFwYFbKPpWJkTfq3r9vwia4Nv",
  "key40": "5YdEQuwCMQXMda5v4iPRKaeAZbVa9Xwn21iaYHeaRrE7GLa3c2VSRVZHnrzgAg9HYHc6wuRMKgj3QbWpZsxKbQGL",
  "key41": "zhQkPxVLUaSw6gAKRxuFAizPNsuyTeXLGYYSgiV8eByTfKshBeeisgJKfYZzHHWjkDBauVerNNofKHeENV8kpR9",
  "key42": "4JMR7EUroorJvnaEnRUovbxCmnRjoxhnbx6DfxTCDFj3jgauY1fNdQKrQZDc5cSZdAtJCb2cQ45QMGwPN5FGjGML",
  "key43": "2jsH6vKJDH5dxesmN6PmEVSmb4sReGh2UjSWWH3ksFQ5fuMXWjijqutXvU7D2PtdmEURXwpSqfntZP4KqGcqoSTD",
  "key44": "2utgxDuXLqLYAHK5a9sPbCTgoeefKoDSgoDULBK1nA5bTA7vqz6tjC7fEwBHFM4Yazar6tEQVAnfuPtG8JXXuMnQ",
  "key45": "4neMPXFh4bN2wPWA6RwSjQUNneoBJjqb4aaoBWMd2E5oN7vESP9vSzye52H7N35MaswCPc45mgcuGoHBzXrtJBNJ",
  "key46": "2R9bWYzufRKcyRSYBWeHpm3Dg8vnvpJkyyHQqEWbSqRjCjFHMjVUZ3wDhYAgNcysCw8Xqrd3cZmea24GQYCU5Ta6",
  "key47": "2inaYgwoWKZFprzEi8YR6aSYLFv66fV6Ftn3U7JjB1XXDZY5osA3ESRmQc1AiEzuB9YB2tZDyszDjHxvDXS1BfhW"
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
