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
    "f3qNx3Nt6X2gxjRmgu3zWZFzfTVtN5UcYF5tJTKh7twHTZw615JXSgJRTMSfW9cooA7ouFM9XvQuMxGzq7LwF7i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "326iW1ysgiSjkZ6dWBTjiGQMTQGD5BFRCrVo38ktZwdwG9w1gcWQSWQLfncNGSGss9zTKqEADnBp8FTrmQGkZ9oZ",
  "key1": "3XUnXCeFNqZP1h7XX8Xi7PQ9Q8Uqn42Mchut6q6iFnsVrrt8UPVZQdTFVGYF4gw3jhkst4sTz1G55AJ6u3eefUFg",
  "key2": "2j9eeGJFsPp5Qq1bGW1KLY5DAh5fZNJyuvEvHLaqfqg42qrnuxj9pLufK6chx2vrShQ3K3t54Hdg2j2YuWfEqqGU",
  "key3": "e8RfsFdYg4cpq2N2eVSP7G2sBJMs1hyQzPxZCphpqeMCrLBBcATK92bqL9g3D5QUEYgBshMQVQnS5pZQcnYcUqD",
  "key4": "32Y3N4swkwMUYK8auThKA7gRBwzadZxmwfV3NCDp21GBiXpdpzUbeRuHUZokjtGR2xNUPqbAGZTZvzLSNfHqLcFp",
  "key5": "2pGUmpj58JgdWiix25CEfFgXnLcUdKezivvd3a9bezNxWVbChxcC8ys12fYtRzoueQsAD1AjNHzmbf6E3i77RYL6",
  "key6": "3U2VE2z73QdgEApQK8xdePy9CGRedM3dEc6nBLF2prS57Zzi4jQoxSFmL4zMppwpUK7xyuTRFYE4GQXU68VQHsZS",
  "key7": "228XrDrEdfmyucvvbgsF4RfntfkCzSDmXPKT8FTd97vfXT1DZN8gQxVDNEXSJ2zrysw5LH9AxUcpVi123PMsCQHy",
  "key8": "5jNAGeUuJMs4pt9A3Q95vRXExFnpSmTWCNcCHaC2R9vDADoVHHDU5xw58YoWzXK652cjXgHZZ7gbsj1efkzECbFa",
  "key9": "HYphmu2kfZMwWbitQiyUaWKzdBuzuBGMRWBqJffLVU4PevUewJ619DTu3mqwahKRL41FW9BXoBpMuY85JGZQapz",
  "key10": "Qiacui7HMiNgy3zWFw4ECnkuvENzXFL7GLorwP15PuyUiV6Qp8Bca1d2C6UBrAeiHRCfUx2GmgzmkXhd95mqRCb",
  "key11": "22FJPwtwg1gVbBYadfy45ebGxvWLasmoRuYopjwm6zp3xJWNyqDLK9YbzLH8kbhgkqiYN5jX4hsJtzXu9hZi7Hmg",
  "key12": "5WfDikknToWCSHYx9pT7b4H3Z59K4nez8rforzPXw4DDSqJnA8eHDohXQ9YUwYT5r2xGxz1HE5ahVBJ4YBKzBv8V",
  "key13": "3kWXENWGgcSAC8hudpFSk1ZfixiPzovwg8anhPVv9tUNmRsxGxcMyqygTRaSw7ZZABTtuew52WH8wiQXvJP1TiHZ",
  "key14": "4qVL8VnBcWxRjn4oxWXfNmgcAy6XuP8VUDN514cp5HYRBd1YZ9Nt2f2wauxaG7y15U1sZTuayM1zswBgjiQ5f9Sy",
  "key15": "4nevYbxhXoe8WG6NBw8Hcyi3NjEotnQUn2DG7eCFk1aot4yGVYdmKq5PcquYAbYiHqix1JkSLtjm3TiAUpZZn5KF",
  "key16": "JxpnJyYCe8yUCH6bxnEzRU6e5SLkULRDYpCKX62U1e5J7AbawuypKPwNvTGS5dcBGZpzH5KxDkHt1E1n84V3BRd",
  "key17": "qzrbKvW3rq66gff7TFnNfTzFhTyC4YuxDwDJw5ZTaLy85UfhzUx2tikptggaYh7QfvpPPAAaPjNUQxpBcrB4FcQ",
  "key18": "2bjKiAft2erxbxDZAhh8THCHu6BrThHzPeRNByC8HYMdGJJ3jmfFjiPGU7kb45mA38feL6TEmncUSzZBdvvaRfqb",
  "key19": "KinL3zeff1QVBQ2ca6TmT2dSuDZKYDRxtyTg9hPM2orDYw8jLrxN9GzmPmn5WLGP7Sa7uoSgg1D432A8A7JW1eD",
  "key20": "4tJipW3wHJ95LEdqo1YNmQs3VkbKr3a9nECSvE2e5Xg6qrZ2W5oQf6GK1x93LK54QGQTd7CzPFPqawW674kRnnV",
  "key21": "MkCNF3WAbpY8R2NrEJF2X879hDFZpcn5WMswsPiaP7TsHWdBG3VLu8Xxv3F7Yrn3Z2uMcMUu66L8FNpREg8vzr9",
  "key22": "2uGEiiGeXVPvUADbsZRdHi2wCHQjrJPJ179sCdP2dPFBXwK3HsVnV7zKSv8dLu8QVwPrD7NkPXkukduaT5od8yvG",
  "key23": "2Gn95mbcdDF55rpmbAaoVRYok9t5Ng5RoLThviHU1wTEM2stN518Q5U5uVPKWVHJA1kLdnJkkqAP2YopYS734ZJm",
  "key24": "3KVnhmxJvNJBqwDFj2XuvmS1KCUidHt8Db2zB9zfHj2VwZQUGMmUNEHWiGTQau82WDmS43a7k5HBroSoBjJ6bDc6",
  "key25": "4VXQbE4CcZWwLLs6VVpRrsvYXN9GDBy3NEkEpePVDvbUnDf4D1BAhPo2opoSLq8f4J7L7m2fuDTJqre88iviSa9x",
  "key26": "3BYf29c16769nnogQptqG3Dk1RYWto5HyWuMApZLMxdXvRtSHhwf8ibjwzQYFWMrZ3ELpk1wEFmH2DAeMV6962sc",
  "key27": "2XcGnE5yFY5wY2FDStLJrn6rZG95Dx4bWBWNciBHtXddv27jcCdrxYkbwv2R9g37V2G7hqkoNPXi7sXgvAtov2z3",
  "key28": "5aijkKMb4HdjAFU9hqSHz99qRmYsf86Lk8M3dLEGAe2594SGDfiNWdnNEdE6YAc7vzU4xFkwrPHRRYsD3yn7EeN8",
  "key29": "2PuWyJj5nQFsR6m6BfvLS3KDbG3p8c3zbdqhfoG6yDpptwcNnoUpxCBuAGVGQq8ahF3ARaAzqCkEb69iRiLRJ9US",
  "key30": "2V2AzK9ynVqPZEN2RBSURDFL3xPNtR14ZEZnAM8mY4fWPZFRcSn8gcFrcG3V2LE4JBjih481sMUdXSbYCsQBNKuK",
  "key31": "KHHvedwhF8U8hYSBbUENiGrn4hVKEb8CGhF5YawduT7FzFH1gRZQXE8vRb6LEaxtXMaKbotpaG5fEiFPy5zQMyF",
  "key32": "2uhUrx6Hs38T2hweRirexNdAdpuaK82PBReJTuoHdAGXqewzphWQgxmCW9tsvGpNsVVYkiuQgLAE7MmoduHUJZBP",
  "key33": "31Ue5z3ijCE56B2Me4eeXUDmvsaV58h3UD7h4pzpc8F5KW9CkHnkqxnmQ7MAvTMgkEVRPartCEHBEbLjvyvgiBPo"
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
