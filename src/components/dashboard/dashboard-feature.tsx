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
    "5vc23BdeFUBVjEGw59HRJe9AgenkV5UbAEihBUvUwZ8JDSFNkGMheNvikt2g5PB35z8XhdxLwCqAdvSsGddHgTjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J35kJz3PSn2PiW6Cr3gA5RVgYzVkfWo3jzKFoxbrT3bi9oRswcTJnGRmLbmoXZkdjwePEtzgdJR8aufDy52gx7D",
  "key1": "3A5dbbS15mLzBFQ4ubA69HscfN6tZrpPHEyfMU4NH68sdHyxx7nXKGCvZTkRoQ6fSTN4LqYyuJC2qgihbexbGCWj",
  "key2": "3GZVzdJZ48UkPrQdTSuQwChhGe9q8K6LYbHiQZqFce9asUwpdrkQE8d6zYngxhgaNm6NzaJ4D95U9o3453Rycnbg",
  "key3": "4ox2EnvVwWrqWUsN5t4VmRPy4WwAnfGtfT8p2wFHfAKPVkSVauncnnbSvT6Z4bSvnyUAr6TxcdYDWkgS2N2f2exf",
  "key4": "2RFAGufiHqtSH5sQCdAqNJAfoNpsLGk9jeEWRXFZyXYsiMwiFZsD2D3bGwhuanrXxCvitzmpbPAXfWXzhWAphBxD",
  "key5": "5jjA5dxEsBSp5EdSaFCVg4gufHvGrWdcVsSFk1uf3FyVfQR36Tr3zSMoeKGqjMCwjtb3JUFf4rUtd9agnxYwCgQm",
  "key6": "5ZTN9ixS3RuQCZMoNBuGdmSyc1tpWN4betc9mDiBDxrxzEuXy3XTxYPzJyu3Uyoawzmo8vbtV5jkqiRNDtNyb7jM",
  "key7": "3H3zbX2rPXKhAKnydovP74pp49ajmkQP4oAa3QChHipJpXs8i5Q4okQ1chB4AY9g3UpSCnEBksZbcZKdMq3WoPTa",
  "key8": "4xEyufHEaFqchaC9d19XDGuWyah9WJ9RZxkVi77fgWxGywTJBohhPhGZYGgcLJXy6MXDV8KV2JSdLpydyVwyjyqD",
  "key9": "4SWJngJEMb8bUonWR478w1TkQpat2Nd69nVEjQceNiW4Wmt7kUErwNZWoh98zuV5suBCggzKyAbd8EWke7ogFUPK",
  "key10": "5GhNyRa85ak8bouXPnk8LrT3uY1xyDAwCJrwkoez17z2qzt6nQ3zYfX88CWV3JbM7jc38HC5vk5hMLE9TMfqsFd",
  "key11": "3M3czKf9VSjPhREpTXveA8NZSJuCFk1fWwZtMDivwL46uQNHg73oGE2av86vYBkcjomcsaGxy5DPB1yYYomp5nzF",
  "key12": "65ZgziiECGTxCh1Jw2Ttd8uwL8v1Vz23qyiG3vZNv1ntaT5LUH8VMcawhDspjkaePUGTCKZsacSiypnY3joqk6yv",
  "key13": "2xyoDSRXF4XAsAt1uAPTH6XQftBKYP6F9qeZB7p3u8YueasFq6q74X8yFx75LwBys2vqYGZhuZMm5UCzP4LdNyA7",
  "key14": "2PftzhrVQLrpYybaeuf7cyDPSda4knfMPLkTqFvVcBc64yFcfM38MpciwzGqHmEoCNjwgA9WuTQ7GMWx3ZZpgyDo",
  "key15": "BkLbcKUU99tBeXovGQbF8jb5QbEtq6THng17FSLyw9vP4tHGKuiekw98YnQGfY9oEneVShbMuRRMfYbkiC3Scii",
  "key16": "zhuDBH4W6Unsd6waTNSSYGsA72RX4cUu2v6qxrrSdUwaJwWeQvD3EJ3CreKWJ8FoyEDwM584UDGndNmHpmBqy32",
  "key17": "4AZ1TNy8FtQS2cV6oRxLRDjaSaS7kZh5nMFV7cK2WJSZLCp2yXZVsExPV6Np27mynbN53qZpxJcbo9GMwwRRwwgD",
  "key18": "2bPfNXoZ6Rsnn58MhkcKTd4jjgaC9DxQApg6J4ugHv8Fc7CMuiLTZDvWaMNgtX4Xy2dBG1QSVc61Mj9sA5oMaLct",
  "key19": "2gU6UQH3Ro9mnCKc9zhRmCth3Qo9rBuSdXcPN1pRTU6cyqkF4dAG8h1BeBunqED7ZzWvUSQ8BUwqoX5nGF2pwcq4",
  "key20": "33UsDD6fzQzrhFJU4bhXZmdLobqm8gs61pwNJYaCc2b6je5r2u2QzhSYG8Vk59jSJPXN8h4mvSpJMTHQsWpgxHtz",
  "key21": "49drdCSYu3rhbc3H59VGKVzjndoj9GPCGZmTdwzmSmm7NWxkeiLPec7LXUyZ5FUj3PA2MLohFuLsQMe7GxETrzDJ",
  "key22": "CqPVChsAJq7ffV3BXTmQxzFqzkvVFuvdLY1BY7bKo7rU9GDwQVgixG8WXT9rPsTRpTpsvWe2BKYCzL4emXZyqJE",
  "key23": "57FL3fMyz7LHSdqSDBvjwQkbih5zBCad4DzCBpEPoLLuJJxuPKn3N3fi4BqA95G5fREwYSsQqBnvXztx1dJzDwfu",
  "key24": "wUK57RuG8J3rkp1Ki2GqJTvk269foRRcnFCyk1kDTxfqfcaCm5stDWafYn3SGfL6TCnix5uc8W2cHfAhwz3hCjY",
  "key25": "YZobTSdFsnZULNPhwgWDDGv8P9NQkn4SxgmEe9vntMGzhBKqhrtged4pR6XNygvXWVGpY9VFms5JpHGThf8uq8D",
  "key26": "GVUYn7u2664eC2SddQj2VCsWHQ1RP8zPLLdxwrXN5pmZnHdSY5oFfD4YdTUsNiqUKA3xf9aB2zcDjf3AdCvbmT2",
  "key27": "4f2GbJK45cfimpJ8aRfaKFdDR4ifSp4Gzhsu8BKZ7BkDXviTAz8jRFFSocVgK2MCw8G8RADdAB5QxjogXXm4fcAw",
  "key28": "2t3ccKar4KMZjEkHkb8ZaPkAtGHu1dDFbERPDnUW2F5SY8DeQuBdvJ2azzqiPdMF6ThYK7eTDZDyMjb8GX8mGZeP",
  "key29": "4b5fC1Vf8AwwfSTC6NJFLFRNoKpF9B6jtD8Qivy9KgAx8ezgzoaY4pBY9egBik9dZ3Wy9XtCKAYdbQ46vefQhCfu",
  "key30": "67qHYV3sCTUx14CV6fhook8moBpQD66ZphAvCwYXCRBk42Dzj5tbSEpLcfDArpVvmq4zo7CJ7wYdDaac1piKN369",
  "key31": "5W38qAT3m5V4QYoENDMfe1YizENqwTtWneCu82N7UkEECh7fBBVNCetGVDgCF7Sp1AMp7tMsXifTFEECLwvs1AeR",
  "key32": "4nJjTFsoUUoXizAdXdv3SoyAgThHYRodbiyfxLV5ELsNcChQrz2bayxVdGZDLzZqbGgJz6GRvdXxrRYovEvQAx3v"
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
