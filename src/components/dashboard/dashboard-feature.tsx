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
    "38vBynkCjTfSp9srSK3rRVdGs5rKbtf7YYSiHVUsfRdLpV3srwQ7VX3y6bzpAx96wwEHPa4ycYiLrtxHheRsGQ98"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YVXG2Uum8JD2dXvgYubLoqXVTgn6Yn2sXLhXQcQa28GzcCghEcbSpBbaSr9U2zo54zrodjj8LZrjpUknRAjzeJJ",
  "key1": "2WHrByR8ue6mvj2QqwevzTx8WMhyeZzEWcY7h197JAuvvBrcVtfYUSLTEtL5NbRcay2nagvC1Z5i4dF1Toquyyxr",
  "key2": "4JzG6eNXe1iChMot2T2wF79NEvvz6EoEqGDg8Rd2Av15TtEL7xFSaAVH99cf83G76iaBzVbd6ndpNB8KCS6uhsNi",
  "key3": "V5r9y66bFU613nmUsHq7NQQSxvAGc9oFv1xeSrCdHZEJFp5zNfShtMumHdPCtJrYjfHmqWc631wCtvmHJRemkMU",
  "key4": "3zUhLEq3Q5TaD2DqTRWotE1Cf2JtKMHvGzc4rdCMpkAfK5jX4qVBQjGyLM1dJXex8HMf5N5nEScdGov2swQLYvwY",
  "key5": "ueWsviLq7WWn1adMyTYJesWYrHUg57mu3HY7cseTwk5djPFEMkbjT8UQ8oKBrcuNaWV7Kaxqz3r4FYfziGxsN9b",
  "key6": "3uc1fs7fRwGe9TjYvQfY7hnL4vV92LDgtcLbwCxz9WiTvrHxk3tyGHucpfogzMEJzamYx4Y2VyWXk56rb9UGSmPn",
  "key7": "5cSCr4EDtU2ucocn4hdu7pC2RXVGEvrUyGNptAjwiLzXnj9X4gPTmCxoLYYyooWQLZnURmxncSTQz6fnQGRB4L8G",
  "key8": "3h3gM7424Vwdy9HzAcef3d1gsL4gFaYthsobavRi6ydoAKyMiWvCzGYgU9mZuW3cidSBTUxC8LjtC4oK483JARtm",
  "key9": "3n48ThuxdnXzJJM7qkGF4bq1DTJF1pnMb4KbvqpUsPjhmCeCpZwpFxe2WSVR5UjGCVbkx1hk7b5NGKaPxuRs2WnV",
  "key10": "3svieHVaJePCJRB2M1jotnzDri9Doe272f1b1GyDXdVTKDb5u15Abae9Qr6fDLhoinoh8iPqcnx3pn2bFzWqy9AB",
  "key11": "2cefJNU3wh8pMHSzMuPJWxmRZ1uQdpfJAhZWoTo1x2ZSmRRuNTPZkMDcCbhpKfoei6J6UtreioYq8Znjoh5w8CMZ",
  "key12": "3Rsm2Nd1kUDJRgKXLVk6As25WCzNFQcmEExAi1yPqjD7VHJ6P7DEZeJWKz5cDuyj9oxrjmEzD3JTyp8dTCMHfd5T",
  "key13": "2LXvj4xSYcEQqkcvsEatpMAVSnivbTxkSt98S6VneuyQQmMNP6G4aWB6Z1DNwUpjcatiiDbtqJ7Y5HQW6CWAszL5",
  "key14": "5VnnBcZPtAtNm1peDmtaik4GjMGQAwicqdCwzTyg1wNQ6SvmDqQmXMTP4vmmQSA3iGQShftz64Kqi5pykgTSJ2Na",
  "key15": "A2ZAci1d1Yt5r61uH4GcVtGAWvf3zRFCrj5ATWEgSmbzpRCsPiQA2LUMttXcPXKPeRo16rvAAUTb3oq9tLZLmNg",
  "key16": "Xi2VbgMnpthCiBzckJ9vuRBTCw5r33vesNjGgrfNf9hyJtEoY8CcAjQEuGwBJDPZBLtNSa3irePTrUKharig2ef",
  "key17": "gEEBpHDJQMTca2PZzHudYZy8HfzKdeDWV5rZSn6YPKRijf9iMGctUpmdoRDMWAEuh4tzn9fiN9npb6b8mUe8vxu",
  "key18": "5UjaWVD2rLQA28y1mSbnGaBSF7Lc8qFYFjN1kzLXjwSUq7VdJBmPiqbX1c4E5F8qWioR5TWSCyf3VvMNH4iYC2Su",
  "key19": "2k72a22XqDTRMSHEqzg7pNLupoXatkmtD6P7tLWJtEETEemd3fFnyHTnHJ4uPLJbtKdrRPBsKvmxFG2n2DjrkvUj",
  "key20": "4hEFhXt72YUtvDnqoqRv43Lwi9JUwULV4TyP9LsLtfwbm7neY8eRcZEsczTdgowYUPq6bZksRqjijkRCEBuZ2LHC",
  "key21": "5AFWZfv97DBAvkrS5atvAvYHnkLSTGN8XvnDuM7yXYadUcTN5ATp6LLwbxgsiaXqa8n1B5pyePRK3y93ehnL9kh6",
  "key22": "55iP4xCtWomeoJyaV42etDa8fMnCe8PeyFabz8sBESCZC17VmgeYLsVxksBCbDBdmXMRLdGfjHvSxGhu6NLfc1o8",
  "key23": "3j6uW8Mp5wkBMSBwJGJdZVp8JR5HPzMxjCz3jZF8XFZEbRJSmi8R7QSAaWT8gPdCa4M6NFFhjuEqJbh3T1Ven3zh",
  "key24": "5eCo4w9wxZjSYNJErwkxq4nDimoeXt8BbehuUFQ4amYMDKX9XoHPYnGTnd8hA6LPXbSGybQkM3YG1hxHqEBQEYTC",
  "key25": "4BUzk7yXSPgjkfRLNiqe4QRJja8VawVCnay1moMG8kJPXUaYCqVtMgCdHQDVhKwpSHmDSHUFS6GrSSN4REoqaFoP",
  "key26": "ibL9QgMZLdpVQXdMUPCtEDv4NZe2ek4PK2KwN4JmJhnzu46qYe3D6ovcEU8HubLXQtEBYNaD7FqCmAeX8o8pbs6",
  "key27": "Hf3ru1PCV5umtrrquk3geTQrtm1QXrp7VNBfKg3RpB22qZzU766kaTUmqf1mBwP3cqBhLdrpbL4KdjeY21EUFru",
  "key28": "45ZP1TkEWffjKZkcKT4JsyoKLCJHvChXe8pgNeq5AsoqyXD5bjUDv5N7951JTP962Wg4muRjMyy93McyjPT3Y6Vk",
  "key29": "2K82789JAvKu9jdrep91CmDvaMR2CkUY3qWRFbVvvJchLDVaGXiTz6j4ST2Xe4jv6Wj38tDjbstCsRcEZERX8wpn",
  "key30": "5dLV7eCzJV6T3TStbRPwrHPk6hyBFuGGyxJM2cXat6EkktF2mc8nibS39aWi4CTxJZtqf7tMwYK4dSZW2v8mkREw",
  "key31": "411uPftbLqYgaFYBD1JxBcMzEz5jryumZUEmywgz4DX5BfRXj4KnGcCbqVZwyyFNAba5wyCpHbXQbjyDPTCt3PsQ",
  "key32": "5gavu7HqamNGyNLYQcy2NZ7S3ijJDvhWfYmvHnxCwG8r8LgpxTSvhFeo6zrdoHkguUH2Uyxax45cTgVwLLWVqci6",
  "key33": "2y5uDxeD7cc2MtJXGHWFWg8vfKqv4kgFxhZXCNCDqbhtNA32LwyLW5Ms1AXxkrs1nX7Dkf4gcizF3Jm1rCMZogJh",
  "key34": "27UFqmCmwRVtpNz9AVaDZBoyLVbwwcMaj3FL3an2QgvtLXZxopRfGWn33YDHoB67vazjjkZLUTdcPwkAbfUDSYyZ",
  "key35": "2qAihjBZu9q27mb7iygYGXsNutdViQNAjayLHN6GkR6e9v1QkqSkCmwC6msSLhYY1fgyzGyVgUE53UQ4TTSyuJhQ",
  "key36": "4WWpN986hLtnoLVzZ372fAmjMJGmspnqrXvwrx2vQ5Em6mXqwEmccXrHhbHniELmrgsNfEJU5TZ6n9MN4BSdaKfC",
  "key37": "5mjLxx7iEPTsTDUgaVbjMhpnLCp4TussNAxUxyLbhmszxwK45S1BZVZig7H9EBSx9VQwNRVoFBtbCfgJKAd8To7G"
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
