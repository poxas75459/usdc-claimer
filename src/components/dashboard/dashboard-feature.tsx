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
    "4jCQj6tE5nCd8sa882iUMVThVJUYkC4ffGrfoKxry1QTzKA5D7EHfjbLSoVTznQRQgWaQcVgyiS9Qwgd7jcEYzK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cMMoEUVFHXk7c3j7MEarjc3E1XX7Roj4RAsQgaEAF918dkv9F8w9wKNxe8eSgqKMaXhtZSNedESZ25gvagHUBw",
  "key1": "4v7johAZ7Nn8kDSMFMPbqFcz78JPpFbRHJS6MUQn2anQyen758sc6xgH3P5LSQanAjq5f8zmsq9F929avaXGhUUm",
  "key2": "2kpxbJPBPUeQag9EHnUmW35ZJ1n3Lv5BkYH3JF2yGXPDz1br7TqHKT8tF3KGCzZ2Qu1bfBnMrRsBHPFbaCqJki92",
  "key3": "4RzfTFTvZid2ogVSnLLaUPWmWaadcPxv58fAgWVfVtmy8xWXMe7PnCeLTLJnTuVZGhcnw6h5LGTYuQS5abTJEfVw",
  "key4": "62HvGS31MusiijgMpLTNwLuLN2F4H5cVmMPF4ghNU9o6HGutz3s84qezoEYQ84GKRCBEsVrNvthg7P7b9YapPmHe",
  "key5": "2LoKYdAJ1vdTM5Jekg111JQA8GMrJi8yKg8KdXfayf1hKCKKPVXu5ihhoNXneqYivLcRjgSbYGUGXoBQXhzRJBTM",
  "key6": "3BR3fo9g2RLKQP8uR4hsFbz339RaNYs9PGHqE8o77GAmamB1YN849M4s2Q1v3y5YwR3CvsCtB4ZwV1DzkrSperqE",
  "key7": "4aNy3b5j53u8vrMtKsixRv3gtQaHNwNNiWihBdDrgQuhWt5uQBTzjQ7WFKVdbxTgP5DRCPeE7shyWFyznp3hp8P5",
  "key8": "AQez9u3puchswBKCbRLVHh4rGCHeEYBwnyVKLxRmuPMfdYxDHefvLgj29pdQEbqWGwonw8UAapnBm4Dp4cfkJ5k",
  "key9": "NRw8Be1jYeXHnYnaq7k5XY42j8FHrARVXPEN6JzPxhiUugqmVxoUsNbFetuoTAuqNpZYRwFnoGQLZw64Xx5LWKD",
  "key10": "5QE4FJzLmVe2erSb6v9EmJyRBKH2tJbnRSLW6zQP7kULpah4DQkJJ6kz2BW37yRemaxsxFsvPy4kKxokFYEU62HU",
  "key11": "ZfzZMWwaLqTzbQ1kDJ1igJ1heNXbcFvwgpkQ6GMsHaWcP3HesvNvMRzMTaTnBtUgcKK8pKJD84sqSFMst9HkZHH",
  "key12": "4RF9v5kh42gkeJcwzYxSioUz71odSoACpQJEWgoVeJpx9jZ3FfjVL7437uh3DQZKFsoB7caTqtNKhDeutM7xoxdj",
  "key13": "4VMwR6pQx9Sxq6vobZWH2bvKZXXsa9SxzNDnjzgQv8eSaRDNKCQw2vdZggQ85cjFacc54rA1MZCSKdS1pEKgcuQm",
  "key14": "5pLKvqh1tQjKJwFo8hXkHcusYb1tmXR3Q7ciXAzoDyzbFfexhLTqsr9NDi5u4VqKk9BDuedcwC1daXuLbXmGYJpQ",
  "key15": "4KejCJHhuAX6y5i88m7uLJ38QaD2TeATQwHDSVUFbfsY5YxNxUcaiCcRYFi5Rap3uG1XnJ6b7FWPt3dDV9bNG7Es",
  "key16": "2uTYfFT1AtMEtm9jtcdiuU46uAAk9426EsCAYxDvBuuSp9MTv2vFZFZ7qBFk52Ts23PKWLHV3nZEgrtF6LnziirU",
  "key17": "4GQLauWy5FeMkJEUZAGmVs1CKVgrhjASGnjZ23mT1DKhMLT1i1Gmo9dpSd4EjikGwMfFcezodgtk9Cpvtkncz9Cm",
  "key18": "frk3q93Tw3ejuFe83WYkRmtCuU1CB7eSaVBYbWWTSbn9rdHirJRwrJeDhw4TJZkQsvznUq2ezkurkjJyHoAJhp3",
  "key19": "43PgvsVGUD9rHdFkB26kFBeZpwPzSDkURATue29dn3pbiVoR2oq7rdfoM5CyqR9ikgBuuGDYVjmx48R5jxofp2Eq",
  "key20": "4VcyJDiLtxzjQfFo1ihJnyCYG8ugWnh3NNnGi77jtyhfJBqams5rfctiwCvfMFTmXjqEUYXypnN8Jq8RBpw3KGXf",
  "key21": "2bwr8LVPNGzDAznriafTZ2YMew85mVfwChr7Pdc9vySDhFfQ8oPcyG1wTyyvdtuVqtszGpwWfgmpnczmKqBxZYZM",
  "key22": "2fgav5Box8Rpe9wjdMkrUrZDawgTPU3dDDymFzQD6deZErNx9YZ27HAmZvTwZjnkoSWm9cbVsEf3mmKA8LATZxPR",
  "key23": "5j382q1x8FGHvkvU26gw6LRbVLkgbK73nd9SG5Bmf6i8XZNDWDEcvDo6ReKKiPrx2ixjNKuYx8UkYj1xArTb2tWQ",
  "key24": "3QWqt9JNvdZRrdEtyhbpPEzx2YxpqQCJ7uyQkRyAavr6MacYT61AF3wtcoeT9E5znp3XoLd2qQrMGSwfWMf5XdPr",
  "key25": "475L3WUmfZoTVfpUoZa22tawAZMqVhcJpsqobAJmaRTLKHLGqHu89ugcw5V6sMkW15QaghJVkb9dByU2Rqg1AUs4",
  "key26": "2So1yqBu3W2oQwTBYguiQBdyFy8TtC1vU3QVN8CzCNjEQeX83GnHHYvsJTaSG8BxxRLFEuuzTnpnAqJ8nEcc6pq6",
  "key27": "2SQNVXEhQN36t6X4gvm9R4EohQtV5WnTZhvrCy67tGERcwCAvoaP7XBCkCUkEi5kPBqrYES3HcjVDWdqipLUGuKi",
  "key28": "245FzyNJEvaFDteRHjVDJTZtFis8gcMtpi8SpPosM2qaXz94obGY1pPYKa8bTWtc1BTpAGGdWKLuKx594pD1nvSh",
  "key29": "sgfb55Q52VqUWKuNgArx1Q1RA57SWoLv9NcDWEioKQDQuf5De61VW2D7r9r2WzVQ8JN3Pu5wVZrtdTtuhM5jA1c",
  "key30": "4ooAqCpneUo1LRe95LAmfUsebcfe4AVhipFDb3CR9TZSybak9TBhjZcUYp8ucWmfuaiSJeS1ANVDkDtgyVNx1d3w",
  "key31": "2tywzGoaDysx9vLode19fg8KrQyGu4xehXpuncJ4MxpMC5carLwjLtYrRZEnUgXuzBgPW1ffuvXji7XK4vadQjRh",
  "key32": "2aK3qBTN6jt3DjuBqDMDUXuWaYGJbMGroCLM2TEuAVQc7iJdK3Cea189nGpt9tK75sT6hzUCJWkyKif2yZLMMTMB",
  "key33": "4FAuQhzPFwMFBS3gxnB87d4Lz49W6Hko9DNTViNqbVSQpqTFpEBqdvphPZXgMjABfGA6BPqZo5EcCdmM72ic3Ta",
  "key34": "fYD1K2qY4pgnVd9JZGH6yY6AgLT8K6PdwtvviK2efPuwmHvv8Yp1TFy6cZ5XJB8nt3WTGMddY3ZC2fMPmjHSRPE"
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
