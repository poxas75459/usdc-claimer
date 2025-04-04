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
    "KXCwzLA9o17CEFzHgmKYPQMQMJXioKr3eopd9CvWWY8JrACkP4ABb5oH5mEqKK3vwVYCftA4zfhv96kibejtoMu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VCCNj9vNHZK3KuFgcmDKMZmZ6x44YFqL6tPThFcRKQTyMtBGNVoRdXfXhn2iGYHU5QFDSawnWSuiDLVTQxJo2Hi",
  "key1": "4zunAJMnU3cKp2CmJ4cDSTHRjizpqJ7oq9Nsx2wQvpieAcyiJheBHPPDHMCqSjR8N3AB7pYpLm16D39qJ3TjH1JN",
  "key2": "2VSzk6Goj8g9P25qbDQboQSzcaHwjE5AxKBzp6nxvRzGgUgHge1WhygKi5TDYPtXoUbcGSf5knBKRVxzuyrPA4mx",
  "key3": "2gnwQQPyYsQptzB3WLKWv5bgWTbGXZmQNHmj6akaNHH6zgsjfzLSujKFBF8wYZquSL8J7A51zvJTBzLyr5Lc1EdK",
  "key4": "585gaw2CRVfMnfexeVo3q6zRB67rdfiqPe6N4tb41LoeHaiAE4EafyaXDjn69yuBy3jMyPsU3dmfxxG1TSqKHx82",
  "key5": "63NzJ6AN7Dri3ZaTvCSB62GQrnKUPUioqexXenM7YYNupzANGkeZEJS5KVP1LXwMTVu3Wzf1gWJ7bd4MNF4n3vGS",
  "key6": "67o9wCC17ZyNRG4ru6U51R8yX48kYGh5Twc33XMezjaM6DTirNqcYfTexod2ttaS2wYUDSUKp7TLJLy8SCdbuxrY",
  "key7": "46sb1MxCaeETmergvRRMvd4aBPn8pEUhhHS5Az3dRgLrck9i1mLb9CjBVkY2mPEDpGbYpVTyabSpCGzfoSA3sXPP",
  "key8": "3eTBSTiU8X835jx3Stx29H7b9ArV2H1fDCk1sc677VBZzhxhBFMfFUkXuDkopicZiecqAae8uFM9XCCUTx89xtAq",
  "key9": "5R8KJyFS2ejNa3VkmTxCiKSSzNRjXWM4e8HnbnKRF966onp4uVyMjPRzLYTqaSNTB65kC1g2ER9vMFkzamCh2Yc2",
  "key10": "5zkzcFJx8CrmUX6ADfAomoKuoMzWEy331Ww6ueLTDETPwLNzBMnu9eSiYBiwK3MrBJM3hFsv9WMBEdP7PCeUPtdw",
  "key11": "35zzeX5Tf5fdrABHQ2rwcyD8yvbdH8kg6kBxatcRcmwiXrDQ66xNHHMMmhv78UtYUYXqXPsSuaha5FDYnDQAg1d4",
  "key12": "3SDoD6BUqqR9D2qbgNGXV8qErLysu78vpGEz5DMVCkkLk8wrVCwhGNSsTzBoBukbSyfDZ7AfsT85RCDEYqJM4RMk",
  "key13": "5ismKiYr2etSK3K3mJxr8GY7XZJ1aEYYfXVggW6Jy2g2mEmA3P5N5GsewyGGEEoZzKAFLPjvvfQBC7uiSbivfhD7",
  "key14": "5zo2PyqAkAKHJhWWkicVPZgvqkGZbWDJQ1Fo2JFRxqhagd5n1QhLyjoTEJV86JNgqUzdwC34ugnxnhpKfoCYGcTE",
  "key15": "3CkdUfoaxYeAMrUGvzWUWQkZFMYQmZuYhrSdqWFJBS7NqaM1adpm9GNYuGfNUYyQXrW8rZqiPdasC6rqsVx4C7q4",
  "key16": "67Eh3ktBUCx8HMmSr6q75YUWhp3csCUmEeyboAxjsqDPKfgN3dfYj1eYyb2LiqfUyVTZnYZYEvAqUfnir64jQA2M",
  "key17": "2qEC385GGc8GZHyXNXviKfLpGHpTiNv4CcPh242r4ykeYD3bhofEo2PqzLiTpNdibLgo6ZxzMxaQ5HfKW3uf5HDA",
  "key18": "2QV5osNFa8C88iA9uaRZ6v3v77y2AmM3Ejz1DUEH3p7CjmNRuQPHhBsUAQr2eWTCes7YtJTuXBpLabydqHf8uG3s",
  "key19": "4wjoaak1rYcvDeivvZDWDP4rqMedt7YtnmpVSwZN1HHECcND1F8tdFq9pWtrXQAVDBX33yWyJ7ENrZwZD2Tmmr3N",
  "key20": "5jUZonMJC5NjTJgkk4pgMjyntmHvP4BZD7hVBhzZpwp4yU5K6scCW7yE55U8myKR98b7N8Rkg1qNsHnzSPJdNA6d",
  "key21": "4NTB3VAMgYZcqFJrbx7mqszrh4yP1U1uLLcrYRDSyeeSaretKUQUXv8U1S5gMWMMqrApxPiYac9ebgLpuwqSbTNU",
  "key22": "4d9mwyoE9JfJYX4WrhKsD6S4DfoANauvjeUh51bK6sBTEhXqC2v3mcz5dCToQoCsrGWRuXF6GQqZrZsMzP83CDTz",
  "key23": "2Dbk9qFGw5a2tfebP8yMiYKxoMBtVSJHMakTfT9qCNA1qEisTtKuxwVjcXrp6CBg6F3ArsT7Tr5Br39Yt9XpU2KN",
  "key24": "qCzCBTRbrQe9yAN1JKC9apFv6AvriqM2hfGcx6tZyxaxhBm963anQW9HKjKiXCC6o4DqP5vjuoE8JVrpKH4UCfN",
  "key25": "4EGhiP3cb5tEN6NU1P52V1L2TCnjoMvAnTZoP5mePTxGKMWZBhV9YfPon3tpbxfp46AbmaJXjbVR6xy1T1xqHCsC",
  "key26": "3QJSRQNa73Gm9haceB1eYZw8gqGhVTkR3P4D5PrpKtRMvAMLRCUf6K3VakQr65QG3kT6JiSnn3LQ1sCCaqkm2SfH",
  "key27": "2KfhEEXRPVe51FTkbNdYgzygyPLGBsvFsqCHXSYGGcif7sFa4FnHrYHyBg2P66pu7dqByFdb1Z19hafiANHaBQYA",
  "key28": "3rzbYyCJQXsTjqzGqEsGxNZwAEhG6Y8QJCrsM7H4gAKh1PTQCYhRXm1c3NhXoqz5tytBuNnj4YUN1T1ewMzAjREG",
  "key29": "32QuX6LjQeTwp5Go8s5F4KSWyGkhvZTEfcCfg4pr7uBi98st119P4Qp7raKFXA4VaRuEBUB6AVPLbsR8f4HrGSaH",
  "key30": "6qriEB6YxD3FL9y7r1X8rK32MzBRkNtEGXKCae6iPiHSG69gAcSHDCWNm1b9FNHHN4m8dHEi1jx5qnXAGtM94Xe",
  "key31": "5mYpTwDcwGwJYpoooXWNj13efH3VMrXpQkif8hoFU4AKdeXsioMKY25f5hLZfkMW3Y7QQwiep3fqm1haT3kPaxH2",
  "key32": "361Wcxh7JoUDtPGx7zWQ2Shw83aoizgJHwtUUwokaqiwMQbGWPPdXMG1uQWTKE62gvTknJcZN31SesjSyQqNK19T",
  "key33": "4xndZoSrDMsjsa8JcAdFrZCfiREzkBb6GefjiDhgs3Xus55ETtyM3FuDZJG6HaK8eh7s9PrGAaCkQCLfJFxPMoYR",
  "key34": "4XyEjadkgZyPwZzzgKByPLYSkqc1Q5Nqf62GHuD9vMwMLBRLYs9XziSzjL2ynqchHQd5JL2WcPAayKV36iBtRhmB",
  "key35": "4bw6QAUbp25GTiPQKaT1z2kSD1aV4BhsQBda1oZAxaEBRevXL681UkyzvzFuDCwYwiYFNpbqaA5Upx5xZm3LLqJc",
  "key36": "294hnB7JYTKJ2hm4ZU8ApZnEMxPfpgbJWVBYNSk9WPYo9FjwjvoQbyA51EmKRinJf8nci5yqqnRU2KpQYQFAr7fZ",
  "key37": "3Ut3bTXiBXvHGmLoWhUozUT2FTyj5nqEcw9fBz6MuDudpbWkTWy7uiVHTgP7EACxUpBxHZxKfTwSJB6rZcW9NFUV",
  "key38": "rxPzbMrVtDN5gELiuihJYFPe6HGPYX3rFSF3ZyQ8Sht2wWyz8rFNtU6HWAppZ9AwT3Krigd8hYXCTMww1Dkpk4R",
  "key39": "46LhfWf7sWHpVBZLsgsCQ6rF7ziZHhNq5nA5DoxmCq4aEnNpAT7j57hs6ChNX6GdHX2tF4Axhirx1UKEdfrCDntv",
  "key40": "3vBbhPZs7m99ufqBHQZd7GwnWQdtXRCFLvUv2GMpqzepForjKmRFkkjCdJRK8P3PLJCUk9jqfoPA4jhPahvZLP6b",
  "key41": "35KoszyapasXD7ATXT6W7a87f7EKgTrvVegKP9dgTdgvug9GTZWQFc3yAgfbPL4EU5MUvkJqYxBe7zyYmUT2VHCc",
  "key42": "4q17W2iMjNMBsTsTj4KkNyaMc8Mt87ZPX5mCEfq8bSYWSbRiFyMH3EBqAY6xWuficMWUw5JKCEPnsk7DwXu9XVtB",
  "key43": "3nUo5vvSeiiabKRbSGnuh2QLBXkNxhEYc6MrZt1g9m6b82nmY3rcUWJEqq5WBBRmi5eqhHZeDBiL83Q37pdJuCoS",
  "key44": "dmiFnPgx6MjYRdqucoYDj6yMxb3t9vH5ecaaiDDw3tT6g8oC9GEWi5r2Uu7RHAacB27CYp6eUr25s2mbKG4qaZd",
  "key45": "rhtWr47vyRDbSndSz6HUQzRg4vDTPM3gjapPUpxKQWny7yVf7kssbkMGuqXRos9W26oa6JwsSaMrQUBUKE35PB8",
  "key46": "4kFsTbqCUk5yJxATsizvRTrdnABcD6zFgibM6LdAdM9V11EGu8fkjGYpD4KvM17qHjEquTusFVbaJLnTcG4KbtP7",
  "key47": "3Wqv3cscAx8bFeruG4HAi4pqC2bBu1MGzo1fHVNy13aX2j9tKpH87XWPWnUyZ1z6jm7pcsntaugvnHD8z1yTWcaT",
  "key48": "3EnovPbEMbXHami69JSiHw2PWcgEeynU6XCsUgBLZNreCqJ4M5nbWPtsbhz65ot6cbUV7nPQkv9jK3T1E5mff6uT"
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
