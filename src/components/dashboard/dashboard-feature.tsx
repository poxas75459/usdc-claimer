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
    "51iL6qgQFvvmhtqFLsmWRY4zsyZExpeTQnKKhNAdHxW322RutcW9GZHK55LBicCjooqN1RhC49FcK9nYoYwmUZ9t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jPvHQZmwo5AEoATAqmJNpYmzzUufSkD5uvB6qT4MBJC9GiraVAWYXsiYB7SAR1fPjcf5tPst7PVE2ycB3yvJsbs",
  "key1": "UWmALdhL9jWUoqzdkoJ64chExNhp9vu4YBtsEtdm1FqDdwxAoNXjD9qvSD7psyTd23C7WTrMhRuiN6EmNTuH8gx",
  "key2": "3pMQj4JxVzs9j5iWzsnvdMf1j461g4ftnwtJzCCWaoGz9L4TuVyJ8oAdEFhKg4aMKidY594jjjS8wm9kFnTdpZV5",
  "key3": "5uuqC6ajNwbizBx3RNVZhitt5WvJxduvpp8PJLz7cJLigWX6oMDspBwptFVmRZpnPanr1FgcCkJ6D5HWFoEgWKg8",
  "key4": "3mjoJXJDfFtroJ9Dm4JbzLyTGwy1XFtvfRHF9e5nywRAfjJLVbcP2ghKthaS5GESurKpkH5wguEvxStpWXP5EVeN",
  "key5": "23eLykajLd2xabYPAASpXeouGKvxDqo9MbPSBR5yREESAjQZRtA4HAEshWMdAiTGJbDxna7DBoTWWgvFm8wzYgpr",
  "key6": "5nhWf7nRpTpk1agdSB9WAyb4WLLzD4BcvAPDK4xQ6WE8LDgBcSevvPkJGL5T1y5ut3cvc89uY9oo4FZEc5rHYTF1",
  "key7": "36NR5jyzRHARiyNAXFX2CuvCF7AZMVTFABQTjjTXPfmYaVB9f4NWxohRm7yNuHnAQR6pkigprppUXRCxKYPrEscQ",
  "key8": "61zrBuZQEM5L2sXSqwAtpf2itM5QMdxiJjYnM5jJFg93DmtMPVT8KQZMd6rtbiDo68wd7FpsxXegHsBQmawN2yvp",
  "key9": "2uMR2UYMdA6DAECPoQyQhB5Mza93rvCWccbRKMEugiwYSyKhr6SiYAtdFDWTLkWWyjCK3ZHS2BnGxQo98GEuRof6",
  "key10": "2bTnsNZnC1uqZHnyhceyLeoibHyA68QJUMvgZy7Um1Ka2afhrs1iiXcE97Ux5msrgkCpyDYC9W8EJaLRSnNNM6yx",
  "key11": "3XcKhAC4g2kimxvy6EBGV3xVNQ1hLkWT2DoC9TuSpFNpVTy5zCjCcXmMnk1enYPa7bwtkhK8MaQ7MNpNYcWip7Ao",
  "key12": "42z3seH8jXzhw4rZeUgaCP4XctYm2RKHapeSz61rpHuooAzYpbEMYf1V6Micxc8HRSNycYeJZ99HU8ZuH99NTRcy",
  "key13": "4bnZbLRxsnrvtFr5LpLsJ2JWRa6kbr8u8LGBSpY88ojCPzAy7AGoMKRjqepRqAQbcJCRdkW4sLwepjWXPNzrRqDx",
  "key14": "59apSWWKCp2VTJG1TGvxmYQeBbRV5eb2bgonemhzMxs2sMZpYdkFcDhU2fSGrko1ezHQucnsNk77ZSYMkDXdPsFW",
  "key15": "wRWrfKZcqvgyxpYKgWJcp9JptzwK11x9Rd9gFxKy9f7LTWHCtjMHfb7noe7XksNRRyYzytnxjgQ63S5VTpUwfFs",
  "key16": "4dkmPnbmpBSZPiAELNK7h7E9sGbk96gTvQhFmoFp8SL6TpWp57d9BsVyGsbAfgquMKK7WDJw8hrvsSfdEQQ93NYt",
  "key17": "51WvqK1zZHHGFLzcGcCngW3NMCqRsnNRv1duAa4zm3WSUQqDZGKZQtxVmWH3hURwNaecmu8s51foJkWWc5at8mKp",
  "key18": "5CTJNpFKTZt1Qyhkcru5y8yyLEKQjCE5K19fkSssmWPRWb3Lgpe1W186XVBa3xVBv3YXqDJQmcHjBMeAjLnrhiKm",
  "key19": "2tjVwQ8aCZVtz1t3w5TAAFKCZ8zZUqT65C4fxjkmHsi3anBFZTvpgTtvrrLu4VUQQSZhDb2DY84tbE7W5EdNsP6A",
  "key20": "2G4JV5NaweebVCjgLnpT6VXbSPm8Fx1cYD1Bpq4ATT3yFLqu9o9VfxqwHCCsbEEN8WstNwUMsoUzVUnjwu7oH7CE",
  "key21": "FhUabwGwPKduEjTKcBcWW7odmwEWGUzoTaPi2936atC5tqLyJo77hyJzvJ61tfVgNaWFkD9uZePzEbyRoVJP2D8",
  "key22": "4GjEZRTin4Cd4G9N2rTgQWcCt4HpP9Y4mGuExGd1qXHVFcSA3LCNhJ7fAFWCbq58U48HAr469kx5s4bn5fbzwyGK",
  "key23": "HWTDW9nQvQnfhM7utMCKtKKkFRtoBM1qW5CAUdpDEpsBw7KpY84Jfz3PTFA2p7z7oe5hUdaADScz144Mz18mom1",
  "key24": "5FcaKZAtSes5qHSez4KXXkNKEmoNn229WkmPTV2CrUzNQTXY71D6PLQQpS5R6R4cRLbMUEdwgAqvQ281GfYhC4LQ",
  "key25": "2T2692MxasifPBzT34a8WhLQwNaRRCQEbNsjNpazCs5JCFH3z4CcmYzjsCotQvYg4ULAQqYr4WhLgEGoiJVqQqib",
  "key26": "2WR63qWHav9CLMsnXBTpMe9WaQsXjH3RJBMT69dnuSYv1px4xotKUNdtnxfkxU31X8SMdhpon8HJmAf6en4brxx8",
  "key27": "oqTirrQRnp5iRTuGib76R62iKUpgwQkDAKmXTgoMqhKS5q5oBgL6tygXfY5gnovYbfw8vRK2cEQnZWJjFhoMLzk",
  "key28": "5T3zCx6CbGz7cdMffSxsGWMQsH9DcCbU9RZsSUtoStkpQeuHHUe7y5UWnkBY4ZFk9jVG2ivP189N4n8PKpvrS88M",
  "key29": "3QQG5R1XcwRHRf2EwpLD84xjobXhCDZUeedZSsHBzvzsUC74GuphtkK975Zo95Dykw475qkbKa5f1afZjL2JiRmQ",
  "key30": "2vZHh9pKrMANYkUTLw8wWPWST6Cref9zjD8jqvBE6k2cgwQW3HSHAVAHhKYVe5he1L5kDS7evQ6ENG2JezwtYWFp",
  "key31": "2omcoMxDXYxyKfPbn4D3NeP7wKni7gDKc9QT6ZHKNppk3aQAnBbpkBgAixTtKbXvKWKFppFJdiJbqqyjK1fSvTEY",
  "key32": "2oTxY1PMJwGrrorRZMBBSe9nYW2Bb5DRRyWfQ4bm63csGomGukpuwRmoiP966p75Ne8Ue7UqhXn1n4gWGUNGy9yx",
  "key33": "2WxT9QEMCV63M1HRn36dgkmYokzQ2pWyc4vELgsg1cno3W9cYk4Kjd5EJy7DtqqgQ4dcT2euJtSZizguYbKKv1dM",
  "key34": "5Hx4UhCZqqzxD9aoQVa5QsXZ9iUdwQGFWdwSzKDPoELynsq9CRJYrd6PUN9sBsubbrNMg2J2rTGSNESbY5yFxMYj",
  "key35": "3CVCELbe7fZJpYYCm25ZMfbfG3D3NFb5BqiAeQi7hKSCBm738rgwMvFdJcrPPcK8VVTpPkT64yYNSRZkBReg8PPQ",
  "key36": "3U1kVfjNMDdtp75GNYBnSBdgjg8fCS7wJ7e9pAaTLx4g7d4pw4xEXLKZX5TW9jcHsS9ghC34h2ffVdySG6GL2bjQ",
  "key37": "33NcErZ9GsAH9yUgLQPhSzn137myxHYXYFWFsBzy1sDeqEKwJW6c6dYiPeGTSMWcn3VKhbAcKpzXK7aPyLzVdah1",
  "key38": "44GZKXMLrCbuvbwyrnADr1pfYx8AwWTFBHA9LwnNGd4LeRNAM6VtNqZGu5iiNUSibPhuDmM31dzMvVuK7qZ7wWzQ",
  "key39": "728XyYmY4cuU2dCLbAJnYmBscAso9aCKHXoe3cLyw9e16XWRTZe8H9Au8Zp7HASfxwUpMZjbhBWdYVbaJqmtM6T",
  "key40": "sd2pFa948uv8tZXGFFVHv67Muy8MHPkNAMeQXyVcfKHoeuqT35CXP8eVJgCxMnybCVunQ9W1FRhLFMuFFteyNjH",
  "key41": "2jRjCCGfwqTKL4mi92BHLHYoh9WWCvT7rTdmBnF3Z5ZvP6rGidcGLsmv9P3TZfEZ2Y5DAPzk6cx8nikV2dqpAsnZ",
  "key42": "5dhkithWqfqppYnXidvoYAXjdWZdPm5A2nzyxskPfkeiC3BUkrsuqv4n7KsdFeLj6TZo8rMRSd87m5W5x69DfUU7",
  "key43": "sSSoaLiRosZe6gcFKCfeB5LWyspWQCgustE6swoc4iaoVszE8HLgUDQscBzGa9ZyoBr1KbZkuTFczpbxDJjoprL",
  "key44": "3fx9gdn7nxVECWvr9BbQtoLxReWKG2WNTsdYbXXpJTXwq7ZPncSqH5mqekqBYoaYc5pcf9dLA7xoHjemwVwf8KwM",
  "key45": "2JumEZudKfcrJ8XDjRCs62EGtcHLX28djv5bH2pY6Gfk42d1qkUsnUJLzneNKXU33H1u4Ui25EiZbNwLfMuoEjN8",
  "key46": "4r8pVHvorNy8TxRom9Vf2eBhae1AJTatS8jywAosgczid4G87n142MRwLTpja5Cr9xaUAuCizi7jJp7dmtrng5oH"
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
