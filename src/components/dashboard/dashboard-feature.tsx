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
    "4VtvSXLcmbJCFhUeTqVxkZ1CJ6MNAwt1eWTVKVJBDNJ7r1uXuHhQLhaku1KMxruzhmoXpc23uQTcKu3j77qsy2zn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DRbGKJYXkiskh389iEK5PCc5pDEkaUdWM58taK2wi6Vn6vufj6KSBjUdXP7yujoPvS9dDaos6ZGQyQJ1tCLzgu1",
  "key1": "3YbcMhoWr2WMHNYY798AGi1x58t34CaFUrX9ntgcA7FN2GwmvsfakRFbmRPLYczbAHYXeaeq6Jh1oAASkSoiCAHz",
  "key2": "4GtZnP46XaWhofAtK3xUiHwCDCNZjMxCNtntmPRJV1dVGzeHu3bp5qwSZf5kHFuPGuKraA1ZDmWkBBuYjY4FSAns",
  "key3": "4Ke8F12zKGicdqABYp4tbraudSSPjaUfrMkzXqwuN9MNwSiikCTyBNDjvYezzQahq365W5MMkVZXkxfxseQbGqHZ",
  "key4": "2X5cCg6SBGJX4QcsYKZdq5wpWj9H1zG1u1wqUPyhC9Vqqi1eAyo2e6xwXxX3xyhwA4t8ymdUyXx8Vfu212wEPmA7",
  "key5": "2gdjS6mjvDTyMKQVeE5QbAaZbTQe6QvKnYW7uGZ4x4ZGNpda7KwSUohG4ZjqRuHgyJVD2pQFoCPAo3FkVkiZyJmh",
  "key6": "3KV8qPzsHaV3tLjVEQNcg86fwb1dQEWq597e8MMk6i7AAzxeTocScUB6wJXVAKaJsRcnPsdPFT8fYNUpaMvZNeN2",
  "key7": "7ZiyNWHFb5hzzsFQo55ZFzPr93d881Mv8AqHDp2VyZZK2sR91RRP14hbmZLXExRuYXiqpTiMMQ4mPoedT2CknPU",
  "key8": "4dwR3rsCTdUFXLEeBwD6PXf1KkoLT9tkRE3shSGjGEALHW9vJg65zzLgd7VzfVfHdSq9dj6V5qBRzSNFKTUYcZ11",
  "key9": "2ey4XYEjYv1LKBw4ySmKjiM42pN2j38oaYVJfNzDnqhwLPQRLxJagt3D3zRZtGbwJQ7bNPTii32Hk7AT1z7pVZrA",
  "key10": "2CidCs7Ntck4BtMTotw8cwum4nC8iFEd5QreWfRuzmP2UASdmYHwbsMxHA3y2GoBmvLXRrXgkwWTNzr1FrtE3zpL",
  "key11": "53L33o2amuuDYvi6sFaksSwnU8MX6brg2ztSwNdAjKrXZqzsHvtb4XmXahKViF38oVXaErSGGJnwNovhvbXe3jM6",
  "key12": "5GpVPzEqL2ffnvxVUfBDt8fxRZqevgXmpJLiSW3R6zRc7FaSS4yMV9knAAmFAWSmzemXPrn29M1MHS8B8GXcWCB1",
  "key13": "5iPm63XtzRRghrLTTKiHjNYwhJMX1gogpg9EDQnNhU6h5WU4EYX428MuTNo78qMEnaP6YvvXw1yJqGP4JW9j5veQ",
  "key14": "3z35ut1qSJj4ARXcLdRs3PueBueWTbvL29CPcqsfmKrCqaMoMp7Zw39UA4RuDuK3iDFCqfzziBw8rjJwCddZGEXP",
  "key15": "4xqjiT41DoEe7qNBNcyqF5nhpLRF9tDoGX4wwerWPbPFoe9pWH7JPdwStyZ9bXGzJdyFGNrFySGExGV8fD1owo2E",
  "key16": "5oYYPQnX5at4WJbnTwCNcfbh3PCAmMceBVRjnCGATwdtKm4QJzhj87fhoyhMQqteYTUCW7Hjh9YKnjQEiip9qRGD",
  "key17": "2g1rhqrvq9tLEpNmb7gdqMh6vG86tK4fWtj9SRjUxFCrF5GiJvMLWWDXJBcPi1bHpVYKAEM7bXZmu54wcD6gdJqj",
  "key18": "xpXiXbgaMbm67zeqCsHMn1tz25sn518Lo7XKSHzHqcw9amwM5k8QShwDccREK6o7QuoYh9NREmtC46vjkF1Rhch",
  "key19": "4CWT2ti1XFgmHqvUyWjabkRz2u28r3thUvAudKZ2RK8b2nLBMGL85eNbnGw7Ntup7Y9YKKdBhkgpzYfNVH8Fph2c",
  "key20": "5WHvG1WzhJx8YRNmcKyLjwpWpDMuxQ3qZ2EStHuxQLhDrAeTMf9mQRNDbqYcEaoa5vmovQsYncPV1A1WkEtTnEX7",
  "key21": "Z3DG5bApQtUyEbJwgymkUEwk21n1pCUWzUTmWcTA4GDfYpJjZaG7kDEKQcxTfSLkyJhzFTUW5YPqWhi6CEBPW5d",
  "key22": "3CM4E2M9gZrmVvwY4JBvm8F8FHH5cbvFVTE4iokvBL8stqs2WBXFxmBrEm83tSowF9oYFnppE1yQVXxhcmpeh5nq",
  "key23": "YYirZ7AWLp7JDpKEGG5Kdp9G5F6pKx9oaANe5Q8fucUKLGvKbRnfDtjbuQXjv697YxH3KivENGTH5YNt1ovSwUp",
  "key24": "54nte1JQD9uKQ2SzAa5qFDiDQqcgBJuNejtEFeVKsLcPUZKr6iJPVSwFq6ytRrCd5gAMvuaz8uqRxxxDPuUTGrGt",
  "key25": "5WuG8JWPrLTYfYe2CsxA837soeLDEMGfBHecz7NPqGvHV8umLzT9aQSNVw8Ugtgn2kiJuFGYy2ne95dCDXhRuT4Z",
  "key26": "49FuBM7SyA6neaFTMV9uuxFcSyHsud3ciYm15wGP8dotay8UMvoWHo4GJctR5DDxv65hZBfC6FVHk8fma2uWztnr",
  "key27": "9o7aPUPsyhmhfDzxtH47uTZW3Zxvgfq4beSV5JkKPxYShQyRJZ5sTEZo6417UDdmH5rtN2Snor6fDQFxmTDYHVE",
  "key28": "4gsG4wBKbr1rbmwxbTXDtGWMRATfYgnkaFgWNBP96BHqR4AiBLrvTs7SeAwEoyx34dTH37tnCjjH46HEArBfY9ch",
  "key29": "gh4jG3cNjKPn437XPsJApKVHkerdvHxxPRSPHnUR16oJADswD7B8tHRiFXseRyM4g7gwpP8kGE6mQDh5GutymGe",
  "key30": "2fPtn5ET4hvLoV5CE85KSq39jcabC2EduyhfAPUnUAFxeP9o3bzDdqDVgKxibCUvagee1ZRTLUCj4dzqgwcCvC7U"
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
