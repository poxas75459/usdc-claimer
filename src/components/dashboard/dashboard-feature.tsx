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
    "3dU1ycaJafZfnnPgAqd51tEGR5fe7aBJ3nRKqopkzN6hxS1jit7w5KDbwidj9yRNHFDo26WrDdegNoBxFTsnB7xB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y58G2Qd3ph2wtSceZvV1KsYKWZkTaA1mn5MFzqCAFfdoAzY5jR783HwtT5FCEXaHvaQ58pSgo6vVe9iv1bLQJMx",
  "key1": "3iDaJk2NHRUvaVPoTUc4Vj11HvSWUESa46XSha1kgqfKsE8vDYrLWimhANUgNwza9i7imRHKWFyrQxFTU2UWoR1x",
  "key2": "5kjeuWs5SLpFzmeAXxFcxSDUwDTwRtsy6xamA3aSptKEsSsL4dFXeabdDPBTnoVq7M33kxcLiGhhVsrqUvJ83gEx",
  "key3": "4J5EgTPxbqn23RrpRaaACnsru5Me6dsknsJaeyfgkBk2SV6KWxjfbxrTpthjo1KUSQyRPs1TNQcqNyTV5BWD6rhy",
  "key4": "4N8JsuQtFqsAtDwMhRHsiNgzaxEojGG2mjKA1SYsdxYj2SCymPEEEVK47h9yC3bdzG6nkDcURgYn4ZFe8bC63Sdw",
  "key5": "4zdWjLNG7iGgoV6dVSEMteTUqnVEWqsXwPhvABHGF2a3bochAXgEB6QzyP3jEmrAcPNattAFr2sqGN8NEUp3BwxJ",
  "key6": "36WAu64rHHPMWbkq1knQjnBpRzRAcWMUKhSWibqM4WX58Xh2GuMDegQZncvFVjACXULzyb5hRmstCKRCcQUQtoJd",
  "key7": "45VfB8BKz1m3fw3Dr6TcaiZAEzGUHLchayvV6ARktZWiutT3zBmmw4pSdxBv2xZFuQB3qmdwPdrH1E1v3ofnT2rt",
  "key8": "1KbU3dj3vU6FemLQEGLvnp3mjF6CdK8ZaCVxetpdsNhCnPbK7iM6WXVFSaFRyyFC4WofNU73KQmuwV6t7Anm2e1",
  "key9": "5mZRW9wK3SzpCsctiAsBHdb9Viuhj3KKLQwCrjPFVm5xCzyFDKA5cJaoSjNVbFv1vq2wsCZtXY3HJ7KVJ4wzs7rE",
  "key10": "HC47G1t7DYmTY2hata9NQJiQCM5MbJD9fDtFxpfMWsEwvzLnaDQjEVJvLKxEav2ib8ZqUqP3XLxQDP4DUV3uem8",
  "key11": "u5qU2nHc6dcMq4BjPnenCDsMHHp52YY6gZKMxmesVa3hExpF3w7etZKssM4vzpuBRfdQFSy5vqY758kwVE7uX9k",
  "key12": "3vxAJSBSM7pE4jiXji31WTjLjJFMejCt9oYbUbwS3sWxK38XD4dDvLAbtHQGBsAdQiVG7fLfuVHKpiShbEkLvBcz",
  "key13": "34YsmSYNP16jccKvhKw6xXN1WoWfEEZ8caD1c2kzLCwfVhKhqQnT1sxdSwRtAKdvhV91cF3ze6nza11NCz3XTkZq",
  "key14": "Y4tyeiMUsfRCSC8c3yo8BpxrHJGfBK1WhuTrq5WdGFjcYjUwy9WdBY1NN1Ti9us5WDqkvGty1q5m68cDGbgNSUz",
  "key15": "4MtEMRiDCNTiL8KesHQwgatoUMa6WPNZv4a2uja6TyxVEMW9VDsrzMeEjXmsHP8jMDcc4nGjry6xyGCrk4YXmFXu",
  "key16": "Pkw3DthV8V7fPxETnKstRdqyZmR4zWYSX4m3mqyQn4AC9gQqt1cA4rcyr2jHrDXsFSGvAZt3wmyDxyMh7Z5AEog",
  "key17": "qStHgRfUVYqkEUrM3dHyCTG5CDeh3THsUh2qviEM2tJT7pYRXgorXV3WUiiiJrV2udVtT5n4zGm5AJkT4KbSNEY",
  "key18": "4qG5xxLeJD4ECJCGjjqrFJxJiwdZxbjsmSVgdfBCMmgfePpUcnuL5wk9bPtvcWm1MEDdRt7tbWRdsZnQ9ie4CfgR",
  "key19": "4ZAwVHCrdUUKNgujmS72Sd52JC1aL29jGbvupBECqSQcS1qevcTHDU53xGMpsiTFhE9w6YZgQv2u7iFgMyGboE9y",
  "key20": "3HvFNqWdMNiNuwREaFouvhPPV3kj74EtYPEVF9yff15pFomRqwt6K4oDy9Vuixbc2YKqgThGGJDxVJdCTB8Wr6vv",
  "key21": "3du1SCPMqYFA3TCUbaEeN1SGnz27S1MJDWibwAFiBocf5ZU8GHqy2isYAV1qkeNTP331wLcmecnbpzgJvaDUHtF6",
  "key22": "1vm7bWA2aAcmpbJiB4u5S3A1A2dSa7jKZXLCnhhPS7ABa65UUTaugxsNkqrBZQeqkfAWMRWv76S4nceHMtrhsWA",
  "key23": "42xR7nmZDPZHSAu9UtB9cH4KLM4KquLtMoqQnmw1BK6A13D38ifsAFT9BV28fBDMHwn9CKC3oDqdWn4RXD9sPtag",
  "key24": "4hXRDQEtR1XaFQNH81gjooDywQntz1baRkE95RRgVtJueQYZsFogccQPNJimvyk7jdbafRevcLKXRTqR935DpKnv"
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
