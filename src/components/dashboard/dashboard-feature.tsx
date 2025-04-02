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
    "3ko9ShkLxD36xMVyH2kv8nyxrbJhuEGdrKaafBJkcfNZeCF7EYG6aXTEwTEGgu3hVxLnqsKfy7ZB8gbjNu2nNBoE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KQKEVa2iuWxXM8LdmRqGuGSfXF3fykWkygYADnwVF1PRKMsJs558b1xmEQx7oVdNguvXp1N2gSgKYjK6PHhujhQ",
  "key1": "5gNoyPAPRUeRxUdRxiBETKvoodf75WqKNoDTGZgr2tdAbYzYZhDM8Ss6AKrhNG3cMSsJFdKPkxcfwirpCGQq3aFg",
  "key2": "2f26wuFbPraXgoxhxLf5HcgmtVWGrUUuCQLfUySaVAkEknme2YNp5NDaFqJ4kWp1CJ1NQLhNwzUrnzX3P4vknRAF",
  "key3": "23ThgcvtxtvN9eYnVJqKAo3vjtQxJHpB4KxSyW8q4LmM6KC8NFhgruRkfQcpUc7yFijKAnGVRxGpgHMNFqNeJrpQ",
  "key4": "z7bL2ssGHyDhzu6gspnuj8o6RykR52ShXyR8H59D9Gr3Uhbpm45r5YfmAR8AC327G8yoZC1gyqN2RGe1THGFXPH",
  "key5": "TMBdk6yqvX5tupi5ekg3hYiLm8mQ1DtEpKe7NNMtX5HEetEa8NRXAboZRhKzrtDZmu344PMyE2So7r4CD5sgrGu",
  "key6": "3kMGTNxEVuZtN8vNB4uWHSbA8MY5P1pjWkgKoBxupTWe5v22BhXpUF2pJq4zkQUkYSXs7c5Nh3UuCqdYzYe2PxU4",
  "key7": "o99Xq4jMQvJBotgj3VzHbEjdcGwZztAH1wgRQoxmd8hjHaJNHtMBMvN3Eux1FgQvfCdsDqZiiWrzMBapE9SEW3s",
  "key8": "4NT2KFQie3VsuWkm24d5VnM4UpUTfT8pPzy2aK37LMqqfh1cHkxgiRCRNtfNwRwGKSKr8cg83zCZ4bS2gEqmp9bj",
  "key9": "2QWpkNcPP2pHML2LUUqMP5vMTLmYneum5b7PnQn92BVGbA5DNdYTVBds4gd3CtMqWtNgRC9DSaEubQ27oRot3ryK",
  "key10": "4QuYHAB8gd44VoSu1coLsNYTag7R4yLTCND2YS1msjF3m1euQZNfdU83jVYSQa3u3z5GCDw41a4C7tUKKo1gyFvc",
  "key11": "2TpYikVoFZJAzYpVVoBDCfZAxkmVFPMwzgCxWm7bsUnZkgjMzb3e3Kh59CcKR5NG2nCKj4dzAeaYCRdagQwvyKpW",
  "key12": "dXHvYX8ovCEtt6e62oF7MijrXuagkaDd1Q1HgaiUpPhc9MNBZrBfchz4sYR4WDXbQyMAEwt2KiNYwGo4dBV8Zag",
  "key13": "53QJXm6HM4ziUGPUKQdnBrYK29Fa2D6v4MgeiQSAJE8qdRnxPs8tmgME3mRgo7JdNbkSuPmCN1f9fr7iCYrKNu63",
  "key14": "5qtKpapYPfbQcfZuGMPDKrYFahG2UR4GWv2sEXKi9U1Yv3AzHzyT9BjX2mETRbGXvGH4MdiUFYd67D4RhbfBCdLr",
  "key15": "28aKqvwAvVnsUZbmWnv6J1KrqbGUzNmwb6MbbkLR7doBSmEFkA9iZbcFf3DFmhcGmeTCdEroBuFwWB4161367rbm",
  "key16": "3nCv1gP4ub7wBXhUwRLAiXAbBJXWRsR8MZoAeix2qjKpmhPMemUtCRXaoiDAeXewmDR1HVsMegFEtDzHST9vyBNa",
  "key17": "tZ4bpi3NCytGmuW1sttWZYeSim2KycLa9ouBTpPVcB9a7WyMvJbbwrZqZVS2xKK7GrK6f3jb92pVYQBQcP9ejQT",
  "key18": "4w45rNGx4BVHMPFhcQRPkNQJX2x5XT78kDMbnHx7TDuKKFAyBLn2BiJxqzNwxu6r94rRCFrR8t9eGcXvjKU8AfyQ",
  "key19": "3eaYa9vB8gpVEaHaY8DG45JNvsyDypkyYU3AuTkGZvj1Gsm6U7PWuXhQTDBnc8rThPH8xLpiYUR9sEd8iQJ6WsxU",
  "key20": "4xDp2Z3MYTjQzJbgGy1CJPE3QY792n1kjUEvQzmGZ15V1ueeW3dAYcVQvuRXxgdxS71tqUdXk8YhCUPc2YcvA9cT",
  "key21": "5scG9jLzCLmuZCpSeQzcEZCTV8XyJb8S64VSKusaohfDYxDvnrFsHDhSbNAXVWZ1MfGgYfP3gFi66UKWADTsaCM5",
  "key22": "4daLGHS8Udf3hkzbyyp7cgKinYtewUgSRmAZ4PfFvJ6KyfodwGepvDf3fT8UNR6RTJ7apEEZtEbkwrtz1hn6Viyy",
  "key23": "4bv5m27nymgKVnLQHrYb3E82wg9p9xkVsJtdTL6aJPHQoWpfvcGoB9MLZ4ZCJCLRJicC6J4u3VQGXaHCLtKjwoKo",
  "key24": "Y1Ur4DEqXJFRSJqrFZjA2wgXbKwbbSGeR7YTy1JMRBguKwsZEh1hYNHrFV5Mdoiqxt8kGHVSXcia7nJahGLEYJe",
  "key25": "5cGAvmyofzw5wRaRJqtYCdSQGDLx1wutfBdUKoZT2GuSZzvvgrPysfiZLHfijA1uQ8fruG3ygxjA56P3prtyXEpL",
  "key26": "cXEFDCem23ARj6ZZeJ9jYxyS3MD2EPNa8sixhe9DHkYHiJLb5eP2ZkhbSKbx6kEqHvbMRD8vdMgZUKbtDk75tQF",
  "key27": "4ABn9CEJKMoLPtFzipuBBS9H59xRoRyNqRLU2hc7FKMpQWU5cPQFT7SpVMqqWyj9nVazRucosHBQF7vuNK1ACcG5",
  "key28": "36m1h4cPV2gtnL3JzusHXP4YGRbm4BnJfSxMaMo7CsyFGWcUYiuxVaWPB4oxzGgpGgZb4o7jGrkAm8T4qpadW8Xi",
  "key29": "5Bn4XXqsrdvhM9pgrtfgfm6TbdmQ2SnWubBGShhQcXxXTHXK7qYuNDh6iRCUzbsJg58RE5pWSEwgdAogu7wfJM2J",
  "key30": "2PXbSDWEeF1oN4GQ8vJz7jWrepWWYQohpxAdPdGqqeZudXPuUKihAMM1irnSPoFBBnHKeXfZvFpb4qbwbuqZ2kpU",
  "key31": "bBDUATzYU7cAU8oMG4yyU1mcwdTP4f69c9UKKLBxLgofpFMZPcVvt5SFJc28NNVfRh9YMNB5ViAfV1nDXXw7KRv",
  "key32": "4MkXTK5tkHHq3xW7ztwD8CvjBx3MJ6W6iU3P2f859iHdoW2UEpnS98W86JuBLPhWwpMLjwpvUEXeRz6ZBXqpVLxM",
  "key33": "39xU1v6EhZjnxWXPnDTvUegh5uyUyjkX595fv1FZAUTx4AYbpZntqtorjySFvBndnNxrfDaFQgBCGKYsE26dM2js",
  "key34": "4zPDkSKGkFWCxwn3VScXFyxKBUSK94tr4YC1B9VBiL2CPdgtbh4oeFUTxaFrL6Zr9v3xyRuReLsehB6BzoebokNm",
  "key35": "4gwddQEdChBFEJsxykKfp4eCYjPpAwQWC3gnoPX7tP6C2xGMwaRdBq6mkkm4ToQTVWsQ8AHgFRQq1RzZjktGPxps",
  "key36": "JD1SD9qVqdhViRJmAuea5BbX3EzZCnAyPSJLPp3sTKSN9L8qr47pJBqotoq1Ex4yP41LWDExdKDa3Mo6S6KNz2J",
  "key37": "Wfr1Qxy3x9Y5d9YnLy6FNuEDJaEuyAKXiRSw1jTtDv98PohxZwFUVXPg6DtX36RE3snnyfMerVY2kvH1WRGSPWE",
  "key38": "KEBfioeaXha7ZsBJbRbFUTY7GFJKDc6SrDSAV3iYQ424CM8otNj7nTUVE8sp7aAG1GMrDLXSmM4Xs6jZWo34UtB",
  "key39": "6SHVneLwLg6fHSKdgeBXC2XCQsjpHhMAp6JAX3VgbzjEytF3WrkJB47RbGBSrHfJLtinFH1fUHAFDQou8dtH99v",
  "key40": "rPA9iaLs6Kn456jwWy1xjcNezXFyowhcrBdWpzT66XokbzVG5NFfKLTWQYrcCQ6t8Tprg2no9FXw4tHQcTzss2Z",
  "key41": "2GYp37VThU8VengvcjHAW6VnTaUN6JTq8aeYpeE12ENAofNycGqp9QzTGsChSvNuTMyFPSurgkQTYj52TTbyjkF",
  "key42": "2EMKUuj8TsfctJVGcJFTb7CSwD1fA1nvLTFJZUisgDRyTxUnvKTCsBGr3VqC1GDTYa6NiiSh35fiNLoYRTE8j6hK",
  "key43": "5sfXNj3zZWVkmM3BtQnkhN1UvkadM5dYq8tKcJRDY1HvxykZ6867RzexifSdYM7eAPJTuigeDDsKa6tNyHHE66zd",
  "key44": "6Ka1tXBEUZP1yiQSgD3UohwitkV28HSiq2dDWdHeqhZ5hutQ1pwcDmQw7CoCopf4wrd9mJbj3JFq9Pzy9t2k6a8",
  "key45": "5mkd19XcbKhs3RJqPnbkPpwwEShU1pZh6RbBnm5KxVFukrPg7yxro5JypM8K6YTjsmHHvcxigooprDH9yTzGQCoB",
  "key46": "4TE4To9a6hdg1efDwBE3gUNygWaoNVTGbMsTqxwebgdXbspW3G29a6vumfN6ec7DeWP2EM8FU835M1jFK52gjQZ",
  "key47": "9KUogVRA6LLVuoRAxziArasJQacpbyrs4K6wNqs7bEyBwUSrBnH1uX2EChLaSRyEUo9meveNDf93yNFmJZQeDfc",
  "key48": "2QkxizWkyg8ZRSyw8my8p32jiCWDq5VoMHiCbRUcUN9uFdAuLq5BqbrXDSVGZQgi63jnyM5H5SsrkW88QKmkgbRZ"
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
