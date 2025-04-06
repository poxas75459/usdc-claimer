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
    "3w3yEFTuo4JdmWB69rZ3JkF1oSKPCJ4Wu9SBRknGrqXVfw5KT1cypbdSqzuf3gBxCn8ngqo6fxG9vkAhjAqx9UZv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54JnLpd1WeLb3c2iUKPueQ4VbD7w1ewWe6u1Miz6re9ECwskxhy7KxBwjMn693ccDsfah9v3rwCqPKPmWL9Kt8gn",
  "key1": "3JbgWqNBEejfgj4gH5LL2yiZeQCiNfZCeuKeuqjAsx4fAvvfAST7UgQVkS4ohyaSAyr35Q4E7c5MquCJmDacDuuT",
  "key2": "UzT84tTyppQcsh28CuH2gdQw2tG57iVWqu49wP1Ygmdivosq58g83ayxRPvPoHuho85bWyrtHraz9k6XXa6wSG4",
  "key3": "5GANntqA3bRU6VBPLko9CDsaVDw2RCnegAyUpree66JEoNs6gZwoGbyFs6i7QWpsdwMxFivghUv9LSsYkHPhnGLN",
  "key4": "479U418qrnrB6MRbGr35PCWJGuZuefLJkHDybBKbrCUM37W83k95NU15jVXhBNnyq8YC3tY9zErzPgkrrggzD7e1",
  "key5": "4RJ2sbfzrfGJJhMEJkbVCVgzfbvXnsYYN3jR9rjzuAhcXtY4s1egFRLvcwzifXLkeyG8kATSY5Nd9n4MVf5U45ho",
  "key6": "2HpVGZd4pMVdDdmVAZUJgjUXicpzfEBVbJkv21zFNYc1e1HeWJ5eNdBEA9BkKXnipm78UNUpSkSkPDwdPC1yFc3f",
  "key7": "kffdABdTMJ5yQvWnatD2hEJ3DGCphGeSLVJTnQXqCz3paPQwdfNyu36dEtDdU5vrrPmhoXirj6jiJa7hb86mejk",
  "key8": "2RV7YtDBo4UynCyC1fqqDdMuTgbcACdGRBW6YbgNkRBh3EnVo98jiHdiy3oy3MiBuHijyRTzUfVAuvQsd3D4b6Bz",
  "key9": "gJLMGWrRN4YKGz6M4BxhJqmSo8esYRP7mAxbiHs3DtrDwDm11L7mSkaEmAQz5w4tqisPAnMCWTF2GoFhKmhVYmC",
  "key10": "2VnqxLYKHeSJcSLGjWXaWMGBeGMeGKXHW4nPE9a2pLHKZwFtz3Tre6ocdSn5PQqixkt2qnFbXfWfBAmkDUMLsxTn",
  "key11": "4HpkddgwVqDeZz3jDWN7qJda7qx1U9pNnameAZ5dNtNMRLdd8m5kkKELdCBtNf2iJGfBwHgbETMYmkijFtf3tdgX",
  "key12": "3d8L6NHw9JhYhon94DTkRWxd46LAncjMp8xppg23qZfibfUksnV9tcmKSY6jWCbjbvXWDr9ygnuSfCUrJa11BkyM",
  "key13": "vQPsp2usL1wDumC7eMEGLMuiuzrNSR8p14sFayjwXMdvLmbfGMs4Y47LV3daykKuj7B13GH4egS3VYUYVd1LoBE",
  "key14": "2s3qboBG8aBma3P2UuWTmPW1oRvcPH8RDQmZz2F9i799UygFASusZwHKbXRQhCm84jrL4skqnkET1ob3SA9tCU1R",
  "key15": "yaeS4rqN4W63xbTujen1Fbo8xdPD1rpd6JF4XD6MDAPhBTQvdxd8bjwbjv5E9A8K8iaNhTvQ2KxvcYLrnHe5kSY",
  "key16": "DLiMSAdjjtKGyxA3YYPZXeP33AAGX8R3Nd8oMSX5ujC6PHGin7WNHgE2TXZRzqExh4Fii3exHbF9ZhRJn7Lw5e8",
  "key17": "4s393Cts2SzD4noo9MnE5gwY6gSWR3qsB6Hemzf8BoE8cXMrKhGA2tvc24kzbKWSixCh1jnyP8C9DZjoRkfDNKor",
  "key18": "38TgshQLYF3wLRTsGaZyYe46zXTPsvvWViybW4vsbeLVXHuSvKTFbG8mNu6D8RfZTPvZreqYYZdQYKDVKNxXa6TL",
  "key19": "W2BMRcA6kzHzHWSjvSz2o4E3TnYZE5cVqJJeNbospejgN5ctPGM9KVW35BWAahFoacwVR1fnHfUkY8ULXUvMrdS",
  "key20": "5VKf1qjvZcVdKgnrq1sRtNQzAJcjjq9p39zV1gBD7u4AMJeVYe4XUCQTY1EuEdyXgoVA2wGN6EHxR5LcrEq2xWNa",
  "key21": "4wLZRfsB233u6wuQ1B1qkcsrnM5dwvQhuQ5cFu5YZU5c1AKNNQsaUpFtJQEaKjs865PX74vZzGRoxifJQr81tR5W",
  "key22": "5qb9rDpQoVGXTKqzXTfmFGwaDVbE1Qdgh4g5TTe75BHqvitTsSUjj1R1BigzuX4aqxcS24exMdtx6eLv7cLrkPkc",
  "key23": "67d1CxWzPtw7Uove5EZ9pDTe66393mc4ZWhLHX2fbMHbdNCnK3VGxXCap9HJpnLPvbpMepVYt6NPtKqgGZG34vtA",
  "key24": "n8RSVPRKx4bWKMw9wCC367RpoawvmG7NZ9oas7keHWW6DtkCXMptoL6S7xgHJkAfJAgPNeZLeaGqnipqzrVM6JR",
  "key25": "oMRhWVkW5RuqbbKmNgRYxRMx9HAGxyKNhvciKmDTGR6usWHNBRaG9F5hPj4qgjCHRGZmkHW2hiXd6dvJais9EW3",
  "key26": "5JC35K331J6rHJUMnapFFpAYpFFpzPR1FwaHsQ6Gz3uKrExStaKZKucJtBucc8uApCtZSnjUPbwvX2DNf68HLnSB",
  "key27": "hJMExzp5zGoHuQvuqZtbEpPxyEWvBzQoKrHJhSgrvxSu5SezVwZVTQGV7xwhDFYTxcR6YeRE99GgQ5WHaxWn3gN",
  "key28": "4BcwKQh6DJHwfvAfAxgbsKb5XfoXfMyhst4H9gE6cfH3MHE9xB2PxLrRS4ztx9MDx9zvW9n3s6kHQ7j7N6BUYfMU",
  "key29": "u6h6W8pdvkKTtSzbNfNKx5uekTdTX98HQguKTrc237EuGxVcit6YKpdDVvvLQXq7ZF23PJccSt9Yc8ETqc7wBid",
  "key30": "2tnsgti237fF2nA5xLCJxfuSFNA41MrvxNnmrfBn7BxkaAYGfcBgZSy346t5TdtjJxhzkJdASXTaXDSTHQwQkiz6",
  "key31": "5J77a4kU3GPv2toQHhqJtjMVVDcdAHM2i8QTbu2gMuaiKifHqesfPmhm9ko6e25oPwjyTGaDuHGm2stuJuT7GwUo",
  "key32": "CU9HfP9oT5LmeBsv8U95mvudADMfmdg9vFvud3sAfUu3gVS1Z7HXAFaSXmHPSXipMwYbRNnQ9ss43ZMdgdi7j9s",
  "key33": "3KxJnw8CYGEk8uiYivYFWo3HPxN1v7Bahh9YKvi9FaVpx4VMKP43TYe78yBm5Xy4HkBmbjNnUoUTFTVyQra3MMbf",
  "key34": "24m9SgyC58BCHit73PvzMmRnd3m2PJzjpftMqrf1xyefPasL48aHZbBATccytw92JUtxUSuNWyM5iUamm176juo1",
  "key35": "2msVcnCq3q9YLtURCLYFFcQtEmVjnsWwrd4bBkYZQVJWgjJtpzZXHUNWxr7JAoc3nz1UGPeoJacvRoru73ByYRfr",
  "key36": "B9w6PPU91Wq4grqdvYTQ6Q4G5Zr6bLfDerLxGyG4hhaV2dtf7T4s1tGaLGdj3hoga9zzHZgjJyHWHq7TqSwqNBB",
  "key37": "1X1LZq7CRxCZyLGCipKgHiDRLRHw4fuzT1Q731rG9mBgYvd3Gmm9kGkjJ6asD4P2pDzDNK7GnCRgUSo3H5XXP4o",
  "key38": "3LVhtafVRUn2JTea7XDNK4w7zYpTVFzs5ccPWSe3zQvaFGeYn997nWJxG4zG6dBKWsde3YV6sWFn7waNvM2Sd9DM",
  "key39": "5LuPTFEbUzCwv8DbacE43LkedgXzdLJtMtbTFtHb79YfLh5x2YwAJVya6qEswtgA7rCTKnKQsVaYnX5HktRsqnPu",
  "key40": "27UdFxfGKpm1TU1WawH65kV8cuAcZWRawnqSyd7s2nn9MdsEEd1PNR3ANxU5puKd8WmWEEDgZqdNqbLXm952u1Ju",
  "key41": "irkaUfSxkDuXbJzhoMArEM31b22WuaVgcRdvBqHvMsPsdrPDbNbZhhzV8yLWgGUDFvtBRUGA5oBQhYLkfz6FatM",
  "key42": "5r4JAgegkAzJT36n1DfPRGAL2eeQMsMBZ9JWu89M4PxD9BKFQuKZBRnkZtz3uL4WzjEWjWxf7NPEGDCi6s9REFsE",
  "key43": "4R1c5EvdBffAMbPQ3ZKP5DtoFPaFJC1VxmcofB5D1APqsapwgqejLzr1cmx6dKRWpdxxji2ZQkbh5pEUPXWFum1c"
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
