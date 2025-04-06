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
    "67SKfvprxi3qsZsVrUBC1ALKg9UYAkhMx5VnXqb684tHxBuTSzYcbjTB8B88CtYymghY8x44G447zBQy1E9guQox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZjgasyBW9y6LCtTWdz4Cq5zDvSVecUZQDVqocepDWdaGWoXcLNBWthMGxvQmZsonTwiP967ks8MbidjvXYA3uSY",
  "key1": "3TC5NiNNhiHbRGeCy97QC4MwBDBjbaFRaoMRhHQnzPU5aHguLpHD7aNyhfEZoTxskHs8E9YP4rhfHhV6y2bYGwum",
  "key2": "53YoQsCV2FAQp9dVyVSKGeKiWhCNvzwfQ94tgGtgvJ4JaoPWa9hi4X7hLoz5oTezoHrSki4rPcauUdKP6qN5kVTR",
  "key3": "631J8v7fuCYPs48tu126QvQAFpRoWngy2dDB8ghAUZBBtS2RGvC1pNTeRdSHar3PkxeqCHEpktiJUw32sNCx7LNt",
  "key4": "2BQ41QQjDPJBptE3Jw1WCE8VooGR2jfHKnJqvBJNYZH3XNW7GGFcNrCbfyk1sKPPQACAieue9xygfBbyUVRU4od4",
  "key5": "4CF8F2SVKBpTqJvLwTGYVUgqr5Xa2MuYPSTQYdQRQmYbmjonGo29vfvBTzwC8Cgc9oXw6cnYCrRADxe2nsKFB36K",
  "key6": "2HFYADhYzaQ8nEuZatfEUSBNzWQfDUQXVzoVCcrHuzyPt1Jv275j1LjrsMcVuR8rgEz7kzUDFVAWThWoDMyyEWGw",
  "key7": "5tFVJRc7kuUJ7jFKt7SP9bJfpazGft9DK58QSeyzPKtNRJd6u77izQfksYyNoqWWMHJDhK2rt2M2X88uB8ynLA4R",
  "key8": "2yvirDZeLm6ReTngNvtZCeAmVVeSW2pQokG7ZiJetBRNy5D2CjdosC2AaUwpMxsrCF6xAqaiAnVeYL2WWa27Yi4x",
  "key9": "32isK6fGaZz7wrZ4TwbA6HwYryg5RGtSVhERfyKUTcDMSHTYWuV8ZniWukmycKfz1UdSZhRNDHV8ondLsMxeZydW",
  "key10": "321vA8i8mVkYJbcAorAU4zEHr7PHEkzK4aA5yPhd6UkFCo1xnWjeupTuMkrNznvnLdj2XEguFbVRSqtiKkuPqec6",
  "key11": "4YvzKRT8PSgJPFukQ1xcL5R2cc335zoVW2wX8qyfL8WFNBxQwQuwCRM7Zoc55dfHYwHKvPptYJEGXbxTHXaGie8r",
  "key12": "2BNJio2j27yy7Lq2J8yFhnDiePH4vDjiToqQXN3m3wf4WnWRF4FT5E6ovq2MjPzHSy3BbvLwFQduQDGNbcnm9DrW",
  "key13": "5pEVS67XeVWCPfcT8hGxb6NB3RMXoEcCRN4L3DrQyv8N8sZSwynJWDD5BG82h1RRmacspJqTzLJt9pTF9FPvdgE3",
  "key14": "6rPMMmbj6PjqD2vyS16ZwG2hDJXZV4QT1gPDq1o7tXdHnSEJubf2ZhXnU1NNqj2BrKnQ836DYR87VtQdzCHW1cy",
  "key15": "3Sr99MbKaELQBzMcxqyuNYgpz8zK1SrSRdKfEhyeaJNoAFS2S1JgeJASenYKP7eSXXMswVaWzPnUqw6MWYJG1GLo",
  "key16": "3qwxoBuSMTKN64F5ZBzX85fE7LoFo6SN9C927Asy4bKpNqt3FEXqtDsnfpdXWP6PsbtKZnGMQ3ZYbahXKXcdBGJi",
  "key17": "rdcofviaywumLz8VrrfRG6gmuaqswx76icb6YkQEsYJnq8gTnaNGXk6BgFM2BMEE3QE11vAkppGAVArYMfuw4Vp",
  "key18": "4YdgHuPvKP59QXbnaNCfZvfJAG8WNxeWRN6YTmuZkASUMiBKmsE3z1gSiBFDWXQ1zbhkrEFkkRdqiaEaJsMatTNE",
  "key19": "2zWyJkssTNQppL7bwQNTE18xvr4czepbvMiL9bK46je75YrLVR846nVfNTvEQ3r15wgnGJf7NbFPNYiNq9pHMG7T",
  "key20": "4kNqHgjQnmDtZKoAUyJVdCMoGLZwowZbksSK7gZFfBTVPHkGSTuxa53mbzZz94MrySAdT3GcJDNkb1oWU3UkACFy",
  "key21": "4NP75eBCvENEgvFwdPDq9FgUpBssVuJGB1hogDTvsryMy1E2DfVf4jMd3SmMby7EXKBw3eraFRYoSXqmuL1Qv4JM",
  "key22": "3k1puQybMh3jK7BScm48Erdh5qqSa8VuvT5pekCCfnSigN1DfAUNHYK3ZSupP9VXiTjC5Hfi9GxJwBeNhzwgTYj1",
  "key23": "58h6QDigmR7TKVAsh5JYyKhVchrpHvtnUwmaSAtveexUXx9oCWUBsYy9Fxg5WHdHWAmkTnHBF9TdFnjeaJ8eY8p9",
  "key24": "2gtTouAof5W933jwtPkFkABo9uvkfrLTgMkpPeQkvheCB4SCVdvLaWC82RsQFrFywJk2Tje2PLR9G8EhzMGxdw5G"
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
