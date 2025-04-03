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
    "5gPmszU2YvXYusmukQGuDrACPW3MRGY3S5tgm9fvoyjwYNnLMEzWRBiyHuc99LA8UuXfppWQqLkFFUALc3mN5Zy2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AWfmSHV8QErq3EX1HAp2UT4uqQb282Kffkpbn2CfmNAQ3M6opUdES9uVBj6w48ekf5aXbnFGULkzAQKDeQL3pjD",
  "key1": "4KnHjihEoLvmWhLEMxdPXHooRibyPdzU6Rp882oGimNdRCSPL58RYJACKLsF7AFFiME9Gcy8Txhfa3TgosX7iqYS",
  "key2": "gsktw4aeKudmPH7L9JUza3pRmwMU4kkedBc9zYNZKL7FX2QXMvJhTZUoqEZaFUBEu79W8pEZCoLt3DZEPXrMoca",
  "key3": "rGjnzXRKBefRLZzYLuv76HTgaBajMpP2mds8ns9TcDMvWw4F5T6mnY8aCn4w5zG2WAqecEzQonKiCN6Kch7TSWF",
  "key4": "39FpG8u4Zf7uRE7XJ5shxKCJja3ggetQFkbzZQY5qqoz8f8HiLMVc95d5gJLXwV6NdfQjuad6wpAsCZ7hZZSg1dZ",
  "key5": "56q8reQZ7XUeSntsnNNnKnP1MJT5YJ8yqDDVqgsGs2SSFcGBA2JLcyyhRDy1BCa5CHaznEsxwL91rargTr7TfpKA",
  "key6": "47zrEC5oVjH32xjEK4ocDSu9yHQ9UzUko3M2yk41F7pQuGUL7nPKk48ZqD6aDHp1DF6itxLWxBYRkXhyMzvAhy9d",
  "key7": "3F37ScjSw6Robciizve2Ya5vB56kZR4HFk74WZYgVDTpfpqUTekfBqVNGfKPvnop7oQHqsES6XzSmgE3Jt29rSqV",
  "key8": "2RiEmgVUGVcLQh3A6EG8sxb45H9GfHoj2HoHM3G1JahLePHspnbR9NArEfM47YccLYxbVBimMN1NUMJimohrFjfr",
  "key9": "54vJuMwtq45T9RNGpXe94i46hZjPAbUrLgJS1ebZCxJ7Dvkju2qfPSFs3Cyvvcs2JPyKxipTRqSxDaNYUZeQodqw",
  "key10": "5gpkMQEHoQ91QZvm1aGREgj2GrgjK4AismQpieKo3CDWQXud57VP7i9iLc8pcsxCxTEqiSpkJSVzo72Sa5R6hCdP",
  "key11": "3QhVEPVpE4JFARVD4uXq1i1Q4XzbNtbnpPNtAPxnTiCMNEPx2F5P6GZApT8wVu5yBJ1n13dEyDSXxuaJb898F9fd",
  "key12": "mfBBsj7j11mBwDLxFrB2uCQe9jMfYuL4ooLJXg2An5NpsM4uiioF59j4gDuzbTCyGG8zQZ78Cje4fUwmpUc2FT9",
  "key13": "48uR3k3qtV3LEoHB1vrhJxkWNqujAKRVY8bHqP7W5aqkjq8nis5ChyP4jGe3PFF1swyrhSxTSTVvzXiN8eftTTbs",
  "key14": "66oDo1TXuw6atK3AoQnR5dwgLStKxnwirRfk6ECThhnUcrRQgYQM8tgqtnL8PmkyyBghDeyW1Mur8rnEiyyraNAj",
  "key15": "u2efi96RizASrgTdho2tuxYtHuw8KP1rW9qJAQ47cW4f5GV4YepusnefEcrKVpyc8sSBoCmW4pAmUxGW3AUCob1",
  "key16": "63tJRNBF5cf1o3BwQTDtVFqUwwie44tY8fywKDq1Q3moM3K5R3dcu5R52kvGmBDFjtGTXyYHRAwaxoNkh3m2oPu4",
  "key17": "31MjfS6RvFLfTmAaiJJsBH4EU6SkWQgebz3abLkGdh2CbqRhFQuadKmwBCzyJyuHg3wwD4exEFHpw4GKfqJpEN9z",
  "key18": "2BNYWiZxjfqL3FEVJV3bnoroHXEgrTt8BWtMTP78HhqyiFtcCK7og72WSNCzBttfNZYTpKThcw2UuJkUoWhePVC6",
  "key19": "3L7NXEXWFWAzbMjMX8pcfBKNonAXhn5ijNJLDMBgrdFEogUVDBq7GHE7XCX6xQsfCDd9KYBx5gdAocPuYa453PFG",
  "key20": "2BCbMzHGeB4tGtouo8TjCgFPX8xdaVXygKHv7En1okju5cMdsAbdBxNBsFwDjBoM795uwM9WHdt8pvN2Z5Voxie3",
  "key21": "gF3SydL1MsivWQJyd16DnGiagsFiwLRaYTYbryaHDB5AfuLLVRT3uNMpPiL84DqH6BGRdVKNsQTtZmStqxTePMT",
  "key22": "5w6i35QFZq1NeMBs4uY6Bf2mz3s9CVDt6DDUBpNFALwa2bVQAY9RmwZGsAnq3SJCuQEjAiYH3KUWLo8UZCi7kJAt",
  "key23": "2C8nNGKVNQdqyJ4XB2zqbACkhNQhEna6KiDSPBMLarsb65b9vMmGobVmUqzb13xGmdzwDENQJxybbqs2tZPqzPBy",
  "key24": "2yxsksi46aNsFspXK3cDaQLZLJmGCARBqa8Y68YbWAN51uE68VNq6jujEv1whRVbVUxAny87R1Y6prNT1sggWPSX",
  "key25": "2mtVcLAdx3eSBat7oStBsXPtcZw221dVwAqeMr68cC6zqkdJTv5FMPPZepaY2h77VjL6YJCDLJiNqwcMfUa7QBAU",
  "key26": "RyYjtJWc2F7tywVfeVAhjgH9iLpyQtnB6sDKwDLXFVybjxXGKy8viG1SuswNg9RHeGLqAPNEas7YmizoYd9u3ib",
  "key27": "46rDEq3TBPwvRHUpqWqxyqJ76nwEPAPXMvfFi942SMb1sMUos2ucb7fKuqWdeMKaCJt1yzsRCFhPn9TKxzZRmBgu",
  "key28": "dn6bzSPmcPAf9ixmZHbmdb8NmkGNHzkNRCvG93NvyWhi9Jg5uw3fCascE1WAPYZEc8anbLi6H1N6mbTySUsZWn3",
  "key29": "9BQvRtBVxKkkUU81JC5GY1ZFvgPKqH4WtwLNu81yVEmxedJ22aBj3gdfYfM8y5GaYEyZ6bidaX1QmqMBCxJo5fo",
  "key30": "36gXdRvjV6obmJTEzH4Kge2weQ8fY9YS8cNT3k2fYd9P4uxGRaiWuGop6TBTZY4yHzkQo5MRrFJ7tdr7Ha9qoYfe",
  "key31": "2mKdc2KJHNz4a69ZbiLVR8EBtyWjuAQaLx1n1STLMKjhCvmDCTgew1B35kB1niNnZiKsg5nxCsLHzMBcgZBvx9z1",
  "key32": "MAkXUtudsTckQrA3rnLPiwxooU7qfUp15tksdohwnDDHfnveLzzH7MSBHL5Ykxw2FkpthJfqAGsGquyP5LPzoQT",
  "key33": "5WTbujT11GvMQKWX6fUUNLrP94VBfrK6crw7N7WTfsd8Z4mv3n2GJD3rn3dXddd4tY5fmpz4RxwNeCquiXm1JNtt"
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
