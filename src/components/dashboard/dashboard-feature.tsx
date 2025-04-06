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
    "23QWKA9yxFjBn2mWQgzBg4k7jVe96LS8JY1VPPwtfStLXtC6LwS22dGfRUjx9fcK1wpYiLABXjNZHjEozYpw2cNW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jwsd3wwjST7zWfUysWdbTLTYHY9oK5wkRWL7N4bxPdWsxarWumxZYsQFpZJR1yx7PcxseSxbmB2v3ya6sMGTJv4",
  "key1": "43tXcyNUjfsodYJDta5J3fhMGiryyiLabVkzWBq9CaNtRUtnBYPpvgx5HEnP9EUMY9wGUMj9Zw8qyRpbXv4QCVC1",
  "key2": "2Dc34jDcokh1rxWboMTFjgFq3H8ztX6xyLFrctdYXwVbL7WaTDQAmvjUFTard1zTYpqtU5RjmEZghvGN4RaCfLCd",
  "key3": "3dThnukozSFXGENKPgNhivbf2V2GSExwFRAUvoJKKG7fEUKpyjziRUidALekEXgpoj9XfcVU41tKQJCqP97DMWf1",
  "key4": "2L9rthXA5tWaSskc2LfQxSxRcdfWCPU5LBoXfECjgibNaAWauQHs5zMjw1c8LVP62ic6pQwGt7eUZafW2LMt3992",
  "key5": "3waBKWWjL8VzrJXB2q1YWeiVgCZogzKqXRkuVTwiVqAqjJHV1FpePmNpKJivCMdV83KX3zW4AreR1G4REMoJx7jZ",
  "key6": "3STYJju3KHxfbsAAgjeu6XaF4VbQY5Q7et5zJ5HZroW67zeu2gHbSZe6gzu726dhweTtAagmpN8CMDf9mcxkMG3e",
  "key7": "MVmg2dXyzGKSKRQCbF4UdLncJ6fA4rNfvRH4rZMFhPJQ3hX9J6PVEV6nC7ZoSfGRvwJWQFjuChkJgq7BrtjZoUn",
  "key8": "2neWSMiTmqXttBqQB8begDb9jN8uST9ncjNTsqLTxW9AbPhHqFPLNJ5U8iL7qzHo6b6TCtyMEfCxLnRigbrdVevK",
  "key9": "5VxhfzynsmYhofU3p6hbth4Bgzt72T8zYMWMTeLbnzxbMQxnEs4a9wYR7QZLCPeLTzYAmU6FzC8XK2VP7twHSA9o",
  "key10": "5MLRhnkp1ALEAa1pAUGurL7iwyxGSKY5bSoxzTyuub8yh2ZTaRu7ri8q3LfMZs3uHzvoL67G4YtK4D8gnK8XCNZj",
  "key11": "3p7pQeVE1jHVHSBPmsJShedjCrmybeXCUPbkGJSjU93mh1XCUd1yDcbdSeQ1C6fy8ukYeCnjot9CRMtCSHKqNUA4",
  "key12": "8dTEvNQtJsMyYXg9r52iZT3aVngPkzKZ5C1qUe6hTmPvRaq9gRd9sVuoZb3oBsencDVA1W2U12qWxSYRZ3GE1id",
  "key13": "93AkCKjtiDeu4CmxB9rzWfhK4BaZd9GSjCS2ZtXpwEpDy9c9pwfXrcs9xq1dCGTaj8PCT9MStPBba736GctQCvB",
  "key14": "4mmBWG4L5eUMXxfK7zAzZKBaiVDgFNUhEZqxqtKoWa9i5cAqmoEuxQEKzSZ7Va5DNLnhf336kmoycn7Qmram8gf6",
  "key15": "26CuT4i9dhoLGqm1sPc6LDJjQ8gjnGyHPREKoARPQTTd2B9aNA3xyk47mkKeJESVjiF8dJdmq26vJCNSxmLVp5u9",
  "key16": "XWHpPN1EE9G4PJeYSYNKkW8kYCSWhJaFWPXdHkp2PifJib7PEV6ppkRHQkkHYrdVkaD7rD5rRs7anBtCtUj6oT2",
  "key17": "2Ko5qUtNgqh6qUeLBkvsGeNEC9SurxTmt4584BVe26nNmhVnAXcVKpVxYf2r5n7S5d2toumC55GzSBFxdPPioQuV",
  "key18": "2M3og54q5HiYG2uGKpufAduDeyTzGsBYrj3NUnhXa6pSjd1f95i6e5toxMtPPZ3ahpmRwRqXJTj4hereLUXHj1Hv",
  "key19": "LmamBYwjt18UoCmQmj9SapAt6V61mtfvj498gY572nLSFYKJzu4L8TUqdH4C18XjMaphW3g3GBgAMvkbB3GULzv",
  "key20": "2uw4XqeW1i3rZa4bNRjycGwWbR2gMwuXkp1YKZWN3DLirWvds5ZAyfH3jwh6qe3D8QYEFBzk7NrHu2hmH8eXc8Ax",
  "key21": "Xs1wPda9wQR82c9fchTyXyGMwtuy8SMAYXzsTHLGir2fJb3JJaTDUC3Ks1QW3egtVGroaz9EcbPc2d8saEFN25E",
  "key22": "4FoEsnKRbMTHp3Ya3WU7VvrVw3AgaH6WsqYApU272xtASCHF9KNLTcSbuNJAMar8FVVR8biDDRrhhecVfTmmoXjE",
  "key23": "3DF5EmhsoHhM33txKnFMFg2DFLCFUi7e7up6mZd6xLML7wDFQbLV554RMKvunBsxKf27bEEV67RnFh7wzezno986",
  "key24": "5cBRmX8wKsV8rocCqGFpCVi9a81PenNF9mmv9GMbfZYCEyKmkth5bvKwwNTjbsN4KHiTRF4ZVEg4gkVcJevHDRDE",
  "key25": "boUXFHGuSxS79846CTqDETFrCswB78CzJqAkez7VfDZDr8YHY3nFG8vwAhadj6pQfnn8r4C3yZaPeAoyEmzXDSB",
  "key26": "GsvzkwwGc8ds99F2tV5N7qaMFMZfpExpGsiwsur83oWdwJATornpadwtyggHe3GfxKqPqJ52EyAkmi81m6imFSB",
  "key27": "2TMTEnQPTVPFW4k321TZ7ij4dNyXBvf1EMjYyfcWfgeyNE7eDYCrEaAkmYcnswVBW1bdcb7J1hayFxV7ZDCJaVW9",
  "key28": "4TEUMVVSzKUD7BxYmuWexCfNkP5zHp1LnthNd3SxYU9NXjxK744TPiWbiBKDQuM2K1UmSuAw5yjqkhMWj5uaRKLt",
  "key29": "5wV4md1guohzH8iotbR7eM6AWBPa7LQVxtFJAoQzyzy9yrvcMQnfPeLDKmhdhTA9b8L1iW1c8FN9H7XhPgGJxVox",
  "key30": "4cFaT9H1hHAogYk2ytvw9NzGBbwBrzcYar8skACSTE6hGvFX5aDRQ8ieQoYUmsxFym3NdUCPe8igpNTjLDB9C1RS",
  "key31": "2g2Cb5GYzYym3swZr4LZk8MGbUGCy6JuoxAJDiPuDu22o3My2UGTKwqBEAQ6vMYozvhs3MsyL9codBaSjmrRVJrF",
  "key32": "4eUhHDxSt9b8V6H7oyRetCuTFBbzERRiHjShizwMHqVtoYAN4gQ7RS9nv3pCmqPhiD4ma2jovnrcuvxeywhJTz39",
  "key33": "4AtFHKi9vdQ78VZ8nhyYEYybbd47PtP5zuNg644mSXardiFxQ1gdQWLQ7dzwZFWffGE74jFLM5mo7sWgQU6oUaLn",
  "key34": "2FzBCJrV3Wq59wDBYuEgezNLuyz2TfRn781DhAZGTPWwSDQktXitfBAKFR7bBDuPpXBgNDniJUq1giP8tETUVPfQ",
  "key35": "5ipN2xrK5GN2vpj49LEv4gK3BDEd8Zhm8cacUJ6FidmwUuomC8TWTSjwirZdiCF5RHMLBE69GbTRVhnRUHMu8xiB",
  "key36": "5Hhnu63advzgs5EycLP3UpknziDmkU4kZJ6xLTGi2BRrBfNcwEP62TZKsNVf7GfDeoSM7MQtxbdpgumtruUxP1HC",
  "key37": "2CfRovNZbNQ3LketyRWR2LCRFiuQ7FXNm5uvgejBcdpqAFe2PDxLPkwxgMFtCBArjCxpxm52TTvYzxBrnm78N43T",
  "key38": "526ymgYvsDZtvqUJAUqVnQBUpt4tKfnFaHLUMSeqjUJHbpYWc26phqZNK4fDG8t9ntrUFk2A4ZzARADB4wQkJh9N",
  "key39": "3Usg3gEU9iyvSs9c5HycCKZkuRkEBuBitpS42HrudTPTG7vyLDy6yo54DLtZnKLCwnPukkEa1Rv3iRAMCDBAoTtg",
  "key40": "3u6nmXTMtXXrAE9e4mG46wzidU85XTSk2FqAeBnEdD4Y7XasWZ2qotHy49NiNsa8hE3egB9bpz8t2f2QacUzvVuQ",
  "key41": "onxXo674pVggfxqZUDnVqH5vFNrzdZSRC9oTr8tk7ZJQxFjvoqEe4Jp3mPYQ422xyj3dpZ8ReaLWzyyLrARnKV2"
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
