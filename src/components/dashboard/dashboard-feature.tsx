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
    "rKqDdnxrzkcB2bQ8L4hB3xNZKksdhCw7n3TVU9CqZhHcXxHBDJK954UeNXrSeXpZNxAA6kky5xhpwodFDqh6Mad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38naiHMzguYXuADZ5xcAvmWHeUEti1htDqh27EVbgPpq59gubGc2NMXcHeNGehRDyjSWEpMjmxF92zhKJ7LjyGD4",
  "key1": "Pe1B5apySxNC25xjcBt39jnxWAMLjj4tJzRC4WPcvkMSwwSw9utrnZoGyq9a9Ezbo3W85VPAdKqLNFbY5fs9d5T",
  "key2": "2VuxCLT3kpiazpD9uJLnWhiBJvBfHzJeRbwvmTYy4Znzd3KsrdWuaYYSsNfvbTUqQgW68woMuWGU1SZPRaUmJAhY",
  "key3": "K9pepmMZtY29iTWYCUcG6BvcWsBgnZjtdQ3cJFKMxFGxyJJpd9DDm8dLd7cRovxVZwkVWWfLC2fFTR5qoi5jS2i",
  "key4": "56bDVT169X3LRY4XFnsnWZHLmt2tHUocST7fmFBNfDsb3BCES5oCF1Q9ZE26aPBKfaci1Nzfj9cHrvAaxKX5GxgZ",
  "key5": "3B1vmPuBtGAfGwKnPQwcg2hsGHkpyayxpjF66kVXJA4kjfcJw4SFm15p6Li7S3P3tXdEca21ihA7VermY7oMAeHf",
  "key6": "38hg747u1xDK2dVsGzf1fNgeeQqGoa4RE2uYzYNHAXGDW94JkFYhEkbVDDDsFwbPoMpMsh6WKfucP8bAQLbSZgrd",
  "key7": "3HJmUhVRkLU1VCBuWeDmXciSUtsUQx7Nv4jogQtPz91tNrx8FfRPjEdzf4KBAiNVYmypVxhFrHKrSaUYEycsikZk",
  "key8": "4CRuWHGer5pP6Znbr9UqH744yQhdQFy2QbtFiyPztobUDEd43PAh9u5R3rSPoLFk6nh92cNL4F1hF7Lv62Xsb8ZS",
  "key9": "3ucda6BvenPxt752ocZbNnVPbX1vFpYcLG5JpUkfgwpGEAgSVvhWWZmUchoH5asJLQgv4DfojYPGMcrfJe8Ex7RE",
  "key10": "5J53UYeX7f2eBogp8YgEJbmrjhwxbMbfnvFFU4bTNCCTLZtRKq2q7KmDwksdYfE83wPRYScPB4ZreQAFcToNq62K",
  "key11": "4uMYMYSRc3HGHqUhkfKB8eYCfmskpiLgfN7zC54AzMCVeQGxaaEcVLDDbSbPJJTCJiKivVKuF2hYJ8Gx2UWjpoBR",
  "key12": "afhhmp4WyfjDme8PsvqdbnSGmCGt1RFmrfB3xSLy9Aq7UZSSh1r4iCAQs7U76yfFFPd2apE9BuGPX9JEyL6V3Xj",
  "key13": "44CFUP2DCkpxaCccL75dYPdCeB9xAr7sMMQTVvDtxg6EQ1wh9MBeAJSCoHsFhLXpacPQjqnyTt9w7BYF6FPvi8By",
  "key14": "3eQPtXaSKvm4zUdopZhSw64ChLkDMXCQqUSzRMqkVUd9duraM6Y8HWUNfrgcsFiPSVSQAohDggNXcynSSEa3h4Uc",
  "key15": "14cv1xiprbcxJNmC3hXyHNk5GwoTdoLeDyRQ96Xv1VAvojK6gQ6Jj3oD4NVnTBdrR8QfHBHUDgwkTZ41WkXZVvU",
  "key16": "5iJ3XrfmwTxKuAe7PUakydo8tuAJJJ82QqkipTxbc6TzPQ28bSMMGe5YNdXYgUWQnYjbWMVgHGDXcWmrboznfwBb",
  "key17": "4tD8Pwv1TDW8AqpjrgUe4uMhu89m9jzvULnz7RfntVeWXVpbVGhavxust1v7cJH2j4dr8TYSdsy4Z8ApzNzc8obX",
  "key18": "gAjwe3PaB6XdqGCzJPXxG7e8gK6QbXMDXS6QYmKVwELxzyJARszvYUi4341mSdYxqoCPwJtD6yskzCX3r1G5UDg",
  "key19": "2k4Tq5GgbfsCKAcHY2XUYEzmK92zPKNw4TGqB8rG5dMZiv6p5Uyzt9YVh7gkgAcczJtZ2xV19DzYsad4cLVYXpHX",
  "key20": "5KusABovkWDczoD57db4GtXg9Mzii5yuAahipHJci39AfQLKBBofJsoULEtV3WsxkjbXXsumpeZ2fyrF7FzwJi5p",
  "key21": "2bfPeruECMd9g4kEmBZyj6eoo63r2SBXvvw6UQYovE4CiS7bpXPEcc9ceLq4ZjpXA5z6gafANe7MMHtHDWjL8DLg",
  "key22": "3hv1PjQrCefhYDxRGmM5nLjDbzTQYKfX5uGzXtNANHMLbpVxuEVrEitwAsr5a2WA89bHUTdprKtJYADnmDAkBbyR",
  "key23": "2S7bWwggNaTzLSdEt3tKBJyrF2pNMp9WmEWZb8KHv85KH4G4V7QnfSTPuUkF63B7ZZurWBoL7WYZn3DYVHYoo4s3",
  "key24": "3sRABbuy4cFAjU8sshSVDR4c32aS8mtK4kBoFTvPmqY5dqnQy6JGiLs6rbCs1c1Lb291EnAWNdLS7hcL4tUMk75g",
  "key25": "ShCbAvqvDJBNXzgiBXr8L2885y5nZrjifcqFihw5HUqvMtocuTmeQ8LxtgdNYuaPEBHWvWxpdFKTSsUKap5t2yA",
  "key26": "LGkt6owjj4mwe4p5TGVFgHKFywoH69X4PzH2k6vpuGVDVJaRj71enatkuER3KfvCB8oTkxfjXDbiGzYKv7SurJZ",
  "key27": "3zfjmXsxibQ7NDQutS3NsM6FGCMe5isnpiGuEGz1wDppnVPHKMk6GGjkqVS9TvRqyKiF6H4oNBoHSsaPPEQwANqJ",
  "key28": "4x1FcMsBSgxpw9HqMi68yfUpf5kDVbPwzLFvFgn2D4p5n1o6xQer2SHktpCFSugLKQtf3KTRxA4qgjDpokGrJEni",
  "key29": "4ZmMxeGynPz5iNHKqytqChH1W6Fyaqjg9dHwoBdPQCVPrEgFq4WQpiLVvZvuyqNSTxbCogBuCHTxPx3W67wGeSWf",
  "key30": "532ayKg2vcgNtEFen812Wz76CinUdXjvfz2adDcNSwJyhsPwQcfNdYQCRmYNE68ZjCC9hX8hGLEi5CzYTmQBbahp",
  "key31": "4PtP9CAgHNARfxiX4cpw8CkG8pXMTECAqdtD3WsPDHRxKuf53YSBRpJPRTv4cpN5sYZt8zEcygigS8WqzsPdrPRb",
  "key32": "3wYBD252x92bj8Kh1tpdKtWmGQb9KMC88fm2VdrJZQgwqiRYjpKbRkBrdoQ4KAzyTe3jBNwYiEShf9wF6usJ7x3g",
  "key33": "4Yendnw4jWYszkv5vjjHAogrVm14PYrr9kuUrwGRLEYAgwjW4vtcji5UdEiTSTF4eQeRWrxpAx9vGEFtD6wiM5nT",
  "key34": "4B6MMrFzTCEkuLZNART8bPfi3rLaVefgdcN7tQYLZ8Pdmm6AGJPA54U5TxbhzHBMd2XGLmgpv35cfixs9Ge6qfUX",
  "key35": "AMMWb3PKByEC7c9g4dSXEqzedB3TbARdTcTZuERUMRstFLm3ZWcGHHNszD1UxVyNiCXqVyN2mp7yYrMg6rryJHo",
  "key36": "GGRfcVEifhTFVVmJ8c6haEYDgpXUDmDwCvmS7aL9MiV99f1gErJFN74nazgveRJxGAjULZK5fszxSiehk77TUKN",
  "key37": "32mBz812f2i1972oudtEquWiX3WdNH5Q4LpQvpMkEX1WRbfZcx7U84iELc61wytGpxiDAmp9qAttqUUCpVu9J7FW",
  "key38": "kovwGmPw18TzYDYvQNbkBwLtU3BrYQ7Fx2gpEdArn1BraqPCdzG8EQedeiBA1sx251ctjvN2z9yTVLBKvaqCECW",
  "key39": "2eZZ2jdVbf6YJL242VYkLCTeaf85CjZgRMeSrytXC5Tu21FqQgpVwVZ96mt78gX6v25LQ7Q9RVyaM9RQ7RURhCEs",
  "key40": "274RV8sbEcxyV4znA6XycMdZTGga9NLoLZHNBBZQKH3U79rGEpe2dv3aPXb6criGmnTy8cfajTWgHmrbuhFwvg4f",
  "key41": "27pfTBC9koyRkK8y55cU3FhhP89jcfuw37WzRHhu4n8tc8NPN8reBoxnitgpbbEoS8dT9RFkeWZLbLFLJXdtagmo",
  "key42": "4mTMQUVupAoY3bdCtcBa6v8Na5JVytnM1KMjkfF6XmHTxU8XLDGKt2satDNUoAak3CaoLtwXnDP42RXQNL4my85A",
  "key43": "3bqAswMQbJwn3PfWCrNubBt7FrKtZ3f8itcNdHfMfb2B5dCXVkd4rQMyfzD6BwSy67yHbyrMEUwrcF11ija5FrUi",
  "key44": "5Tru39zRLxKstiN25G8vKJs6x8PkjbjPQyk97FaRgw9EBXzsLM6cvmXY6cWU8BcFiAWHE1jjUTHwkddZHAEqhDuS",
  "key45": "2J6BrMyZ6yL74hU6xn1jnniTCJ3WCaegQQaZyL7q4FAx3eMWrBUkoRRtnyE7DY36aZ8L5Yah6PC91BCpr5gwHJyG",
  "key46": "54NZ1E8ux3LQvFAn4BEDwWwQ3vdC4cuwdWKdxWx8pfRGCZiye1cpayg1jHHchz3AMyHiG1YE4tGGiXydDVzg77eG",
  "key47": "2Ay1yGocYjGhebsgVxGp44Tm6tqvhLwY5pAAk4nEsaUhuvMz2QKWpMeFDSVEsbkfmeNPR1tBciHZpjDUoACtgGgS",
  "key48": "Jy5BxD8ennJxJ81m1fCsyVGrfZ3vJrE5cWno14FswVjz8NSA8JwvnXNJAPyesroCV9BRBGPXUv4CEM9gyJKNGwP"
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
