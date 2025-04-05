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
    "gcVUReSxJPiUWqzoAgC8JKmcHJxs3nC4SobovwWtTauMispYmiM5nVKHKcsyQvnBUXWNthiaqVpd2SdAKrYWDTv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fR6j6xhs2TZu7NgbjvqhgS3QHtPUibULHbwVXuTDbT4x6VTaTeSSzexr6a9mft88MZPa71Jn3nd6Vnhf1XfR5s8",
  "key1": "34pwh8wjSNHNsqtSgQGQM7qqQLvHNAfM4U37dtKYVJYMFeTrPGJSrsBUjgNEZCJSJEbQTRyZkoaWsaCwPuJvHaAr",
  "key2": "2VSAKS83UyzsUR1gbpBwAH7TxbwxvoARFmwc1wLKCXfgGAzebFuQo9cRgk4WZF9sWtn1Uv91HAi43VXkiQ8Kmz5m",
  "key3": "5hoMGcr8NCPEvaUWzMP5pkXaEF3A73CRZUokfjRD3W18PcgUjwyfkTNLrRmye3HEuxPZ49Fpb8W7JFb8E4SVKN24",
  "key4": "2yQpMqqLQNCVv55fZy4LUZSu7cQLGsb9k2jz5wxGNkzPiVUGSoKtDmNceG7z9DTAbwckfHcSMxbegfU6vbFsbKs6",
  "key5": "3astwiab6HUQ7TuRhrzKyhYUmpSYNt5DU6DdbBV4w9WdCdtQQ5Gy7yPjPag2X4YHXcQgUMPFKFoP1wMRgngPEbop",
  "key6": "2FEaQAUpYoNW5zupMvJXrHQS8EXM3BNrSpLa2x5YnKFbwDqHBcaeuB9iAAYgyePxZuQPV7qWQLuRgoDvQ9fYjjUw",
  "key7": "2p2kuacrNxfYt4TxewZPb5jAMmLTKpeyn63utMaXGHFkk9rS6R3sdER5We8yvkMGDa4uUsF85AXQWXkF5NEP6Y4p",
  "key8": "2hr3tx7joef8TQyS5ynh4RBV8t3FLhgwJuZkrZfU2ESUZdmHHi6ZhtGCmRi7r2soitx1vquSobLSWAe1DN7CFe2c",
  "key9": "B7n35LRorr2gp94K5T1rwZoqG9Cb3C8mnLg6kL1HDsBjFobXvU8RcoXun7B86biMnChu8YSeMHgAwaEhHimyQxL",
  "key10": "3p6fHio8otEAQ7Zt1fhhmKWLXRwaE3ZK5w2QKGEmTdbtcNhPiLyRVwMqVDpvzSx3hKBwi2rFwnYTgaE425KDY3PE",
  "key11": "diwLUTUNh3hh6YVyN8C5ELYwkHuM34KVdTFTAZWurjLTBJoU5MSp6NiRsWyMwF4uJZArsfezVeHSYFTCvNM95q6",
  "key12": "CUaf4KKBwx7Rz6jvv2TXMJVABTH392Kq2uPCHkbELVB717bmGTAvvdr1ZMkrJMV8Xmx5pTSWrdHchGKV24GTA9f",
  "key13": "43f2JUf5rvSreWT4qaC45VZu6yyJMMpru34KaHTqRMd7d9KL2aaRZqqALUk6dfx9vo8KVs8XawNKC7AByr5H3t2q",
  "key14": "5usLoTyTnHZkRMchYa8PDvwb1y12aPCQyw6mq3V7j641YgDu1cZQsGg1ZHR1Bw1MnW9KxttV6afV9HqNfBd4xTnV",
  "key15": "2SNkkRwFFMV78FmW3WJ24kepxBYdGHyJfu3GfTSdn3FNrLDdPUQumot1wE8SMmKxrnSPDRNKXzAx2QA3SmJQna6j",
  "key16": "5BxvWr2bhRdNdNotZkA2dsf73EWWMPXoKDs4DbrLMm1eU22zQdfMesZCNB3farSrsZiYq8j6ZTrsuSEf2TYXUnTu",
  "key17": "5Kwpnyw2j9gnYz4HRRcVND7xWZHoyCp5BzJCr6U4xTHNXr9iHT3q9U2rnEddpvd494Vho2jcXNdQid2Zs76z7t3g",
  "key18": "2b7tJkvYTMPhd4vMPv55YUrCGWTtCDxN5KDYfdgL5ELjPS1ii3guWFCwnuxpcsjVMvDybDzUPPSZTWY15maTDvan",
  "key19": "2UWX1m9b7fX8sy3dX1aBASz3tq1RQBsVaddq6MegXTNwdMS7MJndtqe4m7nWJv1ZQDecsxYGg7nDF9P4q4MD95bD",
  "key20": "3o4cDFQupPT4mBr5ihEXbFjPNj5nPXaHR18r5BnCsWB1AzdAvgynP7NPDTz92jjEKBTDxNSyVhX2Q6bxonYAk83C",
  "key21": "3KZRVCqQpoZSaHx73HBNttX92dT2CN4JNRR5jw4JHM8TpXfGMwbHX9uxqhuBJHbKrysGnpqvAZcxZJ1FYFe1pHBn",
  "key22": "31LCH1zvDBo2uN3CzWyzkhQ1qqFcDZ7zUBD6X4GqbE28YtNbxRFe7949RzKboHhmiT833D84nBXXvvLSpiK473Re",
  "key23": "5bfyBYRezMR1KqKpc6NidSD5zcvoSsSmtnP5uaQDY7pZhipSMczvYRco4izv5oZUvZbzf34qFampgAfYoZNLzmUh",
  "key24": "3Kui8cFApy8X3sBemmU7XGr45VqPgdYefVTcGyMccr34XJy5HyjqG8KSE5Jmth3BaYKBZqMf2FHJ5cb6scRcgfXd",
  "key25": "4dunaCHTnEdac5qKGkhM19u5KyEQit31a1K7JAbyptG7oCqLcskr7VWMT4undkooMLPEBeZsuTk1DQPKFdbn8bra",
  "key26": "5anFg73i89EjxqngCAksGyyhwVLyKPMPkrEiLweR52VDfmo484vkz5sfLkKxfCpxV32j4eXGSMTp9GoyXxPufER8"
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
