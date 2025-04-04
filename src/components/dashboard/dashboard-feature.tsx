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
    "3RvC8sAdemKAz1uoHYXkPL5NjVPXMSfe9sGw3cS7JHyUTne2CSYk3noQ5G8YWq2odkXamqZyh9WRR7h9AmqPk6ps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mMAc657kNA3CRuhEJW3yQUNMQfrvThqDJDhgJVj2USVUe17AyBmDiiRs9AXpvw9V5JTfQ8wiEHDEmbfwQfsbswT",
  "key1": "2LbXDftNFbvPzDpHQ1Ar5HfaiWdyJSZigrqQqEmHXCbTRJExrP4MZYsbmMYs5ZMnjGWhoT3TCuPUjuY8dwVeUwh4",
  "key2": "4efVAkgbrSxCwYAUe2Rdc14jNfN2NV3M65uoUit7BhQ9pykqMxuufq1YJcvbKYF9mpuVCKd6y7Tr318ZEM4ZtTBx",
  "key3": "3jRPbtyu8Gdj3CGLqU846LE4dnK7Yz9qbrCC1nM17rXBiWAYXkm144ve7V6aPFtUkHrX6FTtoz55DgXSpxKRHHTL",
  "key4": "4aDtAFWneovMzoQ2s5F61VcoSPPjnXsBh94B9iV48geBuov8Chnvihv6SBQBkad29C2v9J6BY9spRPCset1kLkQK",
  "key5": "RmNM1JxQEvEnpXXJEcUSBEtse439HMwc6apJTYKMVLWrU4tKGG58cacKzt7zd3jx6xb43HX44xyt8Gzqi9en2rd",
  "key6": "3xKLVacoVrBWV8ED6yyRwcogZDbeuaugpQCUDAn9XNx9CyXp2Yk8FWoTsncW4tRubsqq9NwmYjF5pjXmHk3jygwz",
  "key7": "5qWfnmDr3y1q36V2QNJ7BgbdhSmLGqxfay3ULF9kRLGrDBygyWiyLWMA3ZqY2saqvxyzMTEzRqamJz3p9SH8aq16",
  "key8": "45TbRrTUwv2XHjf5u1Jd66TWfEfxMLLkvez8Etp8zyYVnzefA1csSZyto7BZCpLZ9yDnFwtkYtyHRxBX2mL5BsYJ",
  "key9": "5aubAcshYeMcgQ2wX6qbyjeSMm1J9xn5XT3TfjKS9SjUnuAqC1KQbCsP1GPq2CS1EJs3AsV5VNE7mqv9VpmJdJZg",
  "key10": "W5tS1uuifww8dg6Ae2QkFuYbC11NU9VsV8Ar3vo5ae3HwmAZq54qu8kkrm99yUHiA2xr1gN8gdtvAUfx5LDG4em",
  "key11": "2yjL7uQCmAE58u1oTNLTwpMhMWLvYH7K5wHifQFUPo3AwEo1yvnQuWSQJcpNtNswU97a3JMYnUocAJnBwiwvhfXZ",
  "key12": "GgZmV3o4tisrXjemFkhkoPmknAc7ucWEMbSDBj3ePbk7pYbjxK6KsN8gYuL7KRrPUQGyb9rFEXhqPk8APPCBApn",
  "key13": "tebzaCYevquCp8mJLFNmHJY6g3XRW4eisCvjaCV1tGqEevhmm6XLDYHkqsmk9NJ2k3VS5kQrQYvmmDUD5DTm2X5",
  "key14": "28pRZ7w9WhgkkfBrxAfZWRXbwCkoNsiFM2zcBybTEggGJ3fgrbMTFDh9VGiFNrM5UKrxkZLb8GruEpyzNqpqkFbs",
  "key15": "3ZFpBzLPdv6rZ4aErE24FQbNVoE9uMfick61jfQiQwEjP4YLLccvHDMGTBLK6z3SXSkKkHZJR6kZmFfe9AiYbSq1",
  "key16": "46rhbgrU3eWbgUoKuj3ECWTrjyXBBRpyp59RBT7pAik8JRQJ4qDYrGEJM6dSbwrPmozqjQhHp1GnMGGKYaQerbGN",
  "key17": "2bPWtjHAZcw9ioLtTbb4vT1ddB5bae8vTVQCuEehT3tiM6ASpQJXCvwNL9ZEV1uS3uQ2idGfrvNjGSaL12q9ZMLd",
  "key18": "5qDBR2pQ3EPSErrupDFKtKRGS6nbaieQVU9RqEpe5YDTXWiBE5fo8nkDwcgAatbX3meXkdw5wxPeCH3t4sT4EUSY",
  "key19": "39wjdmfHVkNtpfZi3m7BgpprVyDm6W1RKdxDm8eJKsonK38mLsTZsfQk8tqj4Cz9zooaPC2mjAmgiPHPbxWeNZFM",
  "key20": "4uxw7cMYYDEeWcjnbZJ88ymhPXcaWbZPiRbx4sGY9zNaDKrVH9GKYdNke8afvDzF6BtEvX3eY82i7vHUvoFWmnt",
  "key21": "5eT4MwbPkPiknf6rQ9k4w3WoEPWpxsWWTaHxBZwsnXuc4CVM7ZtugZmVbwVFPMtQnRS7enkXwnV9hE4Bkccd9kRq",
  "key22": "5JW2cJVSXEhPs5g9PRCJDeUwkL8CGetA48GRyf2D2gKLqxX2skozzF8HLR9zVvcrRbhxxzuGhLLyYboKmwKYxyHM",
  "key23": "5fMgN1yKPUxF6YJVMkBYLJAvVZdR98abxcegDyNAGCNjgkNyXAubXS8vYQEg9Cm4nvVfctojhnEK81LSYG5mEKCP",
  "key24": "3JkSkbvPVTfNHc2dX6ogE2HLuQ7Ha4FCqfxUQQ8MkEJZGkH9zR3PGRnvqwrmpwRVA23VACYGoAs7gXBAgWCbXUBN",
  "key25": "4MdFPAgFtYu1xhQUvA5mVDpe3s6ibUoBo8749UuH3ryxg54F52Yst4G6yzkr8Cq8FKDNzdYcdzasxWY33htzQ3Fo",
  "key26": "5hcSfrT4uwo629DfBe627zbk1oHVYzaLdgJ8xczbDGxQvXZU1gwc5QvcUSA6Ed4Jh5FzRffGsGTE795Bds2oNxRu",
  "key27": "GgaaRnaMbA24sAtWgPLwXvQfqdi1tBvxhC8DYvNH347md32bPGQTic36qKJCJUDhaUVwf78Dw345jM3zUCRTSuZ",
  "key28": "4iK2WjsovoPQ9Rd5SoR3nkoovHWtv9h2rRcNtfj6smh9jc2A1237DMeMjiyJcN2Gpeca3jrnD4AAqgfVbTrm4KoD",
  "key29": "21LKXjRTQpm6HLS4vPfiwr2nBUAbABfez5GYwahbWGZbVAozqMwDAyLVw52nyDuK3vLEZ7syqRH9ge3tBtaaf8oJ",
  "key30": "9z1tV3v2yT4f1kjXRVuqu4GFxbFRxWwSYqRbiPp8mC35Em3tRrSTXLQQYuVKWj1u9mBhVWBGfj65ygEpxYVAVXM",
  "key31": "5c7MSRwfK3hQpbwUq98nEGG7VtkUQvppiEZxmvoESVFve3gezw4F7KRvVEDgmCfaAb4XDasEWsFUZfqhx4V46wjY",
  "key32": "4d8Pbc3gbcbHcbHKceqxjC1ySkoecgu7L7oWy6oqx2Lf7ssUJzPJ44LBYNGpdpQknWBY8N5oCBQV5xwEap85Z4ru",
  "key33": "XeqQ3pUUqgwJquEHWp9ij2L5FB8NHHsd1LtK3t8H62PGGAgH13kq2XYjCnTjmxwN5BodhfNsxwmprFkXPgAp6Mt",
  "key34": "2yWVrDu37Ee6xD2sYwRgtwpoyv3xQJhysNtKdCX8jNquVN7quSBuNfydDYeLdhcrFLhdYhWaudSHcxyVXUm4P2du",
  "key35": "35wbprge6SCWYt2aEgGHx3y3mc8PZFweGzZrfrBQBn65CTf7BXFtjav54PwJiRTcWU1ibeg3PjEmRmu3cZ4eAkR1",
  "key36": "2nQYRJP7fTmXGw7VxBQwa1jXSL1c6q2JTZdgeXSMow2yfKCEtcKMM4aeGbNoemmrFKMFWtugxmzACzbW5gLuq4TJ",
  "key37": "2CPGZKNgD7SgWW1Qgv1hfs4Vkt5ooiz7VveEYj9VkrSXDpjcmHei5JLCJafo4hPRQSmWL6aswSUUkKSNrRjavNBC",
  "key38": "4wEJxfiCNhK3iVMyEbUs9j9d5zbVbV1ChanxVZynQaZ8hxX4tHFeDyU8fA2CQdaJMXHuJ4znqqmVYLgKUMMWs8q9",
  "key39": "4cNmFv99k75Gu7U5eXDqMNGXu7k3xBmHB6Sw52iFUy51ceD7Pt6agvBLNdAzS2mzzru7watGtFGyoVbhZutdhYhV",
  "key40": "2BGaBWngCoz3inKP2UCaiGwTerRpMsVC31xeb8eFZsAXabeAgso7sTkjjjqJjBYnUaP277osGLSfDqWMvK1zSjft",
  "key41": "WFgi8DhGTfvdMeGUBtLmSYEiXEa1CRXQGroeL3dLubMakm8DZY7uucsPvczhGX6MbbHkHu5pPrRFWbhkdKtRddv",
  "key42": "47pRB8Yu8vY6ETQfjUnj6SA8GzpFonwrbMvk5FLt1C2htaDJL7VnFNTnKhvfBZhhs6MrABY4zcKS3sZk8HSkC53H"
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
