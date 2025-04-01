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
    "51rWMggiKCJC2NhHuM25ybZKdf4XnN2a6sCb3rBVAMQBALZMV3Qv7QTkqEETVUxUK5GhLmhHf8xkxzTazog6t25j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nPRcUwGZZ29AUVy1j88aDaw32GZvkw2PRGkW6kwbrTrX7tjTbjhepHThLF8w4PzU8ShB8MHzJ9N2wCYjodgZ2HJ",
  "key1": "3xSWT4d6HzYwc5CD4CddeSFuMKwsrjKjk6HU2BsYLGoStohdGFoxcKvDwNoBSd9Y6q8FTjbPpbw9WMc9Xg2V5EUe",
  "key2": "3HBVQNjSQvamKu1Xr2hWmVV8AF1m1B6gaGAvDWcYvz3vXHxqxztTGMEVNXxroyewgm8zLgnAKDyvgsETpt2VbhsT",
  "key3": "4F44ymZfBkCXonM13zzaWjEUCsYfuGt8idCZA8KA6J6BxcJtny45KXtoKPSfMnBnHvX2XgEwKqCty2L91Dq5CMmj",
  "key4": "3N1hFe7NqUsYK14E9UT9Njo3grszxfmuTJnEpDEZHJBmEMJmk3NpgBkKpGiK1Y6djhUok5PUDT5nFToKBAX8s96V",
  "key5": "5PzvV6USbZbPzVLAc4gRPKBsWZPY7sSZFtEPcYqAuzomrWmWKJYFL83JsLDS6REtY9MV8ugjNFS8CFivvAqTkeqo",
  "key6": "nNpnK3s381uqua2kCveBKfosSzeW4buJJECBkYPH4JvvywHa1B53hLEx3uYJJ75o9BDKq1y1PDmckwAmBAuFTQo",
  "key7": "2KERqDJAvp5ypCc7A8JZoNMHSZ5XkT6Lcttz5UeTrzev9o2Po8k2hQgHY7NAmvMXR5qzKeroRQoe7RstVo9a1AZ",
  "key8": "4i1rnYgDBarFfXwgH3yRERnmwt1D3HrPrrj9m2QdQghFtDUWaCdpq4CcZeH1KDzkZ5LViRRtPAFHACj3WDmXGhst",
  "key9": "51tLVKZyepAsdRN2HywrQCF7N3RjHjtWmN64en9gnkzTrFDs7bKWx52PE6ejfCtXJmdhqzJ6yNXatffGsAaFDBMC",
  "key10": "4QA3cruUSWFUN8VHKiGRUekUKckaxRUEauneJQVdmPDCXnhQ8xFPaEgdvrWmNvApgEgAacsphMSZkLa25zwh4o7b",
  "key11": "39utzyfkgg5pSJFshzmSBHwG1z6mUF38v5D6joNfbjffehtxww9R4aff56rFsGPPM59mVyZjDK4wzm2QPbK3buDa",
  "key12": "3DAGt9iQY3PPRLSricLV3LupJMb82MGtMQRQXWhwf757r6hSmcpBqBd1HdnqPwjNtf7Pi4uFG4EDv9iYRxZEKLzH",
  "key13": "4vjgKpN1Uqj54TLuaAV7W1dEDA61U2D7WKKMrrj4cVQE741M5b1t3uQnhj5EJZRJrn1J8gfLMB9xVumWQCg4UNK3",
  "key14": "5wyQvzyjABHA29dvPvV86kbDmyvy2FntwjW9JP12e5G3MM5aih1E1aHccuSSnTvds582bP9cnwmA15qBM7MBHy1i",
  "key15": "5X82wEcDXSsVGAnBbuj2pbBDAnUqjFtapzCk8j8ZhSBwYidCGzHQFjuUw2RmPWrspu6nu81PbtuVcL2Eg8Qq2BH9",
  "key16": "3rzQJZTLStQmDQ3CYFpfLTvro1svMATgiCiVQ5FETEGPFzMCzg9PQ4HnML1r5fjXPr3mimtu1iqXP6wQgcpuH7wn",
  "key17": "5ADdHzvAyBBiGKNVUrsB3AN2xHFWevtqoXuqwNZ7bYD8FWtjj9smVaZpBGUWUMf56eiGCf426EC7BgtKTA6VgVeo",
  "key18": "3LLxMqu1N3tmpSR2fhbM9JE4CFsxEQb6QUWsTnoEG2g36N2MmT813cbeJs2L7i4wyM1usPg48tAmAEmXjL4L9d6",
  "key19": "2CW5x4zuT7BiMqqj1tEwqkmsSk1vHu9EhrCSBEwmDSZyzoAjk5CzN8NdwZpN6VdLQiCWNZv8WNyS4herKaTX5KqY",
  "key20": "4oy8ULC7wZJWha4a2YEQjLsTmMjjHSxJ3hEbiY8P6eX7GGbvSBXJUJ24AP4nLvVr4LkQmSGPLEMbHvLFGieY7Xwn",
  "key21": "5VNkQRHtoEnF2rtGkw48jwbwRKR53wbGUZSdUCXuwPCTgLMYpFoGTSP3M9iEXKk6yBDdgW53TYAiP2GrEWTGCXTb",
  "key22": "5VbwUeZtmdqErQTbuzeEoCZz4ybpA17qPjsL9jdzuP9MRWP2xtwbKsgFigeDywLhB1Zv6PbeDqJBSRhhtD4pwQn1",
  "key23": "3Mmg4gwS2e5XPSmJUiTFk73azuMtoj7sZ5DZjuFaHvdQfzGwTYvLVP2Um1V4mNwbS49EsrQqwmQ7e6QtqVYfY3yu",
  "key24": "3SAc9jyfuLiRbAKVqjeaAAeb4jdYBbPMJVNkGz9benWkb8gE58zNvHDYCC2QYd9o7VmhLs9pRhCwuiu21HVGe5sx",
  "key25": "2ic2Mph2aSVMgLrnGu1jga6r5wfReGNiGwvd73EeR9e6kUBidYCbBgtpGYYDG9LHd6Hy8vRgHt8ewWwroUESThJE",
  "key26": "2MuqKXDVvQvqz3MNKetBo9uv2kFXTUvfRmHCWyhLb3NT5FZXNXUbD4C4K48Gg9XCpkv11B5uVmDowtxLQw44Tszo",
  "key27": "LNZTWaR1HTmAfzkUz3DgaTr3ccq6NqYsBp1iYGQhCCpEKRKJHZCnyzMy7RvAS6vGzViaovEzqfbUnfiBov8rMSr",
  "key28": "5ey3NyvHZse4WqvnDHZ5A931pzrPSNUNiD6ApS6jXQXRmtigf5fnJBuLMEXcW1vQ2F6VrEhJYQMrWbVMunSKBkFa",
  "key29": "5eCut7m95E7gCbknjyguTn5PNfpDrXB2c2rXBj8ErvsxZZcgJ8wzmg41cYdAteX6xtc8jpXMkVApmQnGNRUqfY81",
  "key30": "5Dap7a43WkKK31u3kKpVW4Pnwx51xeDG3y9jMNwRoh3wWewbudf4tAfigs7oFAT46z7o4JPb3juCsMFAQYxzgF8J",
  "key31": "3Q62K8DujKkdp9htRnLDwr8UzTnTnnnMPkT4442vn3hS6W3wGLfJYBBajUqg8dsxiwcCppZadEAuQt9aFSWCipeH",
  "key32": "aqMzJaZHv5CWPSDGT8xq4b4VGrk3q7mJqJXhKDEU57D9T142t6qgbEhmocEZJYdJQHb4JbLDWxvhSfDDJvmEzvu",
  "key33": "ExPrdjCYEJMmobPBUUMwXuBLKhS8ikDF4PLcVLHHqJBv3cxsR5zsAtqRsU9XPcdbGDFzNiAEF98anTV4QAdM8CP",
  "key34": "4tb9bYm6CdcaHp5Ab2uK6Y2ek8DqVoSaRi4XxJcBxL3mogbH9zLpWKFzPBCG69VGbZ5Fdfvmz3EyA31AAyTCAtp7",
  "key35": "3qLwNZ3xxwJ2DM53tAJzMv657L6Lb7fr2qdzi19KCeGSswUtVu6E9jEM9chkvLyD8u87ahqssz8gAg8tTjYQHV4C",
  "key36": "2jtK8yYjGjBnnGrbaBc38jS9tcSKrhmudLpT7Js8bPCrNwxK81spcF568P9oyj2AVYTyi7YpLjQuJAcmRPBAZ6cY",
  "key37": "47AqCScedQZCMUD2YcKEAHkampjgKagnJYDTn1UF5qkxehT6HPRyT8Q5B3TzPxcVeWFx8iJHhmfB881Z2xva8jsq",
  "key38": "4UacYQbhVP98f1TWNFSCPMiMwbPtirSTTF87fHRCRmahDsXCtibR6KB71SCEnUboC2xFkuGAYkrYCpoAgKjEu5xg",
  "key39": "3wBHEym7xCbo2v4FR3wUfeQ63EYWqPJywRW2Y4gix8eDaneno68zRMDtGybh8etEu511TzwyfrUrw1VETajg5c71",
  "key40": "4DFvwQzQ86fSRxz6udBN6Lv7QhPY6EGdnZYyYqr8LnEjBsdEDZfdmGairVy4W8CiK2tkjYM4YHVUj4huaSLycwrE",
  "key41": "3vNnqPeX9LR4B2EWq2rggvjNtsbELsEsW38N4QCUS4UPe1gjFkrxihMx5gRZ8fq1MbG5mLADotLgSx1S3VWFkiVX",
  "key42": "5nKRweRqE3DMq4thMhB2Ug7X3oCTbTHXrc1sPpPZbU4hMW4TcK9QdocDhDUVH2L14NgEGYoehCAcTH7WWfMzDwfJ",
  "key43": "NSaHDZoJ8TCYB8ZLLKxDGboE8oLTThrW5n9FaD5jSSFogpzpMMeM2djYjjuXE5mdA34L93J4MGWgyiZgMHGS9jD",
  "key44": "4n51YykwRp47SvT1MZ6kFTaNhmEviejkRfEJTFSm5PxFTajUuq7vUysozJVU1XXYH366j5BKw9R4ZKHBLso34125",
  "key45": "xPiqf6NEHrU1oEQWJDaKroKXmv34Si2A1ra4jxcrE7aMtKPENUQNRDKXSwa9DwhYG5swP6B4T891WYtUbcJYjqz",
  "key46": "5R7wh2ToRD9m2UYsdeuJBcgbKFjpzkTpFrvacHhmM7wKC3Xh8fBWczQJdHChYa3ZwhQ2YUH5ngo9QFtc4F5JRiCU",
  "key47": "5QCpVBwujyYULBzfeqYoyaqstTgns7s2nEskN8qiECYTKfA2Xc9ARakEmnpjuXfpdpc5s5HMuhJvtMpiVfKafB63",
  "key48": "2htQqVZpU2TAb6WSWNP9uUozSFL4iVxwtNZCEqBhvBu8Vuf8FzprTumP1qTQVVwg8BozVJLMjsNhemvGLHw8euk1",
  "key49": "4cs2AWnPg2r49n9AMxEy8bN83oBRaw1K3FmcKRHysFBH7t6xGk8xjrPDQTHP7a7MaLuQE98duhwZ3PK1ZiRhtHPF"
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
