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
    "4ec17idy4EtE1YAfy7cAVi85h2CPFbxPrTMWGbDBvnyFwTny31YyZQe1Fq7kTVRYZiT1giqR6k2y3o7bdJYjFea5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44A1uNsT5wZHADiA842t8tnz6e5Va7cJFXyQvHDQdxxKhmSNeVCHDiLa22jEYv8YoujeShzcsS8EnuBA8L46CUFK",
  "key1": "4LnHVmogEPrKhndWQhJtfF9oGoW5Y6smhGQwqfevU68vcUBowayPM6rrTFqURUySPsiXG7JKo6u3Yv2aeCnFvhmn",
  "key2": "2Eqt8MK9dwvdB34hSEcAdEA6bCDoSF2CHCN3iHbWBsriqtqw4yiFJCDRnxMDmAgseH661AD82TSQUTMAGZVoNDU7",
  "key3": "33eadcgqkTmGiKhAk7VmKqNzxPcc8kABRqZRVvwLsSmtmWVkcyeVrGiEV954B9FoKJmgBGEyfuR3EGfdjr5DSoNG",
  "key4": "4vcRgo8T4BViEkzxnx13L69CzxoStuf5AESMjg1ogHAumXDSgqycPCac8iZckHeRJdGhCTspcCbB3Mo3dapc3ALW",
  "key5": "25Bzt47nZNvCk5Uxxj6nuwMh56qLU7oMuwmzt2QeDCBEZHVKwjiezmNqmRAMarRzu4VMuh79jtbJQ488vvUva9sa",
  "key6": "CtNjVPazAeN8rCwyffJHbrCtpGPt2twYatiKLtsPBiLLBU8nRXiASX6psy8nFxQVMwitudvgmDT9gJEiu9dQnuz",
  "key7": "tRv4ke3pe51WwqJCmwaMrnj41GL3z1Gnwh2aX3pAirrHfWsmbLHYU9B4usM7eFpHWkNAn2XiVNjRbMdeni7v9NP",
  "key8": "4nKYoEBtqKhnAtpsWDQivk2mY8xktNXmRTSEgfGzneHDLd8XQ6fodKuGzK1g7Yu5vMNaFkcRAfDi5wyyHpsxGy7a",
  "key9": "2fuW5dWpuE2pKX2uJtk41UswSAbfAiLGJdu3K9AmbnU4N9QWHBxZJRpQwJWDbc3awLe2r4mCt9vLvoRMQyFXJAin",
  "key10": "mPdhDqqg2aMziXyZ5RMRfYTxN1zj8qSoYkHJjUBwvD3DrzrpLKYhG52eup5rWmnRAEXRWB9rfJB6QEXnESgqVaX",
  "key11": "2WkJPkYVbGj8DVGx9KQvVaAzjT8ZuGo7xBewsr6QqT6HPtNvdN78BteJH4WHmwRU6fLZYfCZZDmjbWzzpLMU3yau",
  "key12": "5XbsiyNqXW1AnmrVEbWV1xhQDWsqiL7yzxCVtdt5nm2e5xvP9upHQAtePPE2TZ7TQRhxqKBF48wRjEdM5PsVEcai",
  "key13": "447mbi8WaFs5zd1ZQ5xxWYmMPRMxkZa3Dod5N7NHLT7WfsApYNKCUrhjhF5zfWYera2nazqNFMAjsTeuqSJoJV5z",
  "key14": "4GwadwbXxCoKMNT1xcTXX8w9cePczConGBeL1yNiVtsd221HMYt25XbKGkF1FNHLPjKkvZyribPmXcGRqpurxxAr",
  "key15": "36yxCF3cnQNPB99UzbAX2DeP763vc3xEwdZSEp3R7v6LNQieibYKciZE6yzczLByPLdWxMYqJXFpxPpcraxYNGro",
  "key16": "3Sa73kn8S1ipEq6XLUX7cBmv6yjL3RUZF4V7ww7wPsqRGca52wfCDVpZGNWTn8wfGeiKZps8SFinjt3nLmaGJnLg",
  "key17": "5h6YT1kZMMuombf4wNaChWbdP8V8Jek49DLsF5G9671NtLH3hhy7FKoUf6bFSCAn2oRqy9wPs6Y1rHFrHeP1Grk2",
  "key18": "4vNF8yTFfkbtgtUp5e5yLPeo71T9iLiW32FUyFsLs87MrK7qgqrLcxpQ6ytFrraVEkRkvKa741T1tFrQ3vKxnSHe",
  "key19": "44AN8n791uh8BbXd2z4hztcw5f6LRPhq9jQw54WdSJ2KBzBuYS7WoKgLcug8aaTgce5xVy8RsoPD74AyxYG5mXdp",
  "key20": "51zyb4hD71RSD3moB7voVrpmCu2Qct2hRXzQa3RgLr5tTQgTqPm228Jzv7X6QkqHizdif2dakqk1t685W7wFbfTc",
  "key21": "iSPymB83PXibA4rUxxyLSSYfzxZ5UqsJXP66MrRLG11y5VCuhwMNLiNUeuZDCKHNLnD45aa3mGtJ3vrkh61n1bj",
  "key22": "2RmvVQ2g2eio86cAxEZHhvGnzx9xwTTFE3T1XGGumNyDctW5FGCjcnE49933Cup46V2dd4Dzptqih4YsuAfAMjvw",
  "key23": "3mzFAhtjM6TLR1yfL68ut85Cvo9AnBfSp8j4swwhX8T2xTwu3ot1ixUwJm2kmK32xbkyjmrg1BKScykia2dTsSt2",
  "key24": "3VRo72ssaaWgbu8QJD8DEzBs4neYKSRZv3pUyrVAoE61Je2VUeqoczwzeQNsRqSXuRXLf6N8F5dLcxd1aTUB6rsV",
  "key25": "22pm4NQui2aV6qc8etyaH8d1hbe5m4CJ1DQd5EwiuTH4vnb5jDZgxmLDY9kTq8Bq4MFnpcAHyQehixzXGjHXgVfm"
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
