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
    "2miCwzaJMDSgjfCh4nTRincmorAUdZCSM3pgvFbF7EsdRQadVSyjfq2beWRFwEZUvTWKASfYUcbcTieX2uRfieeM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WCRd4TRNfdGqEWLGDMnHHiiW41uLeDFuHoYHU2ZLDeiiEbMN8oBfP2V1VMsUyDQNE89URvPFWJjLbCdfo2jW8Yi",
  "key1": "5VgV8LDPwV1qBBqmsc6qVz2JoQaGMXSETQCeqZmgsUALE7uEjzAAwQVTMznwxvR53Liywoem1CupfRuBSrW6GTXN",
  "key2": "3w7mpr2BsQLuFQtTBmU719sUpYwULncehT7i79Ss73NAouQ4yNQse7LkcXZTMDKj6DrHe1sLDw5mcRqPwdjkMi4M",
  "key3": "4iGJMSzobThtVo1hw6n6hanot44jGmdGAWDDGnyBCAg3mob3UN1pU7mhevtzYnv3wMWpHupL64Ayc156Nj7YpPJz",
  "key4": "63EvzotvSoMFaSXKjus4LB7f9hphNYiw7CEq5Vo63Bo3H532QTReeqFTWvaADfzvLuYF5yyBZCX7LZVoGP1Zq1Xb",
  "key5": "wjNH3wWV8QSvkfDvZBpRg7gfCGLWDSWLJvwdJPq4ArR8Lv59AeYCmv45HiVXp1BrNeyWNxThW9B62RKsTWdT429",
  "key6": "2U4RFFzX4SUWXEJuV8KHsmksLMd5BeM1w11N58mFPxhZtM9PywRgRcSDq2weuAXwMaNoVetJpcJZJEfX6Gksp85B",
  "key7": "2rqKidvTkg2L6eJHBDXQTaS7rfp4cUjxASjse3hhBwXsTe1vm9mXCpZR7hHh72M31PKTnmt7zpbWSQhUuBdrGV5n",
  "key8": "3w1J2S7nMyRwYyNwF7XaXn3etkwGh9ADbWTmaWCfoEu1YHQRG2KeuZrPhtwsbXXP14d4fmpiRh1Zd9gqanFyZdMs",
  "key9": "5MnW9zGfcqZUrF79YmDKaQPTB123FtjFWYTLzMgt6sEvnT56E6iU4cuSunTftL9mcU4hjjhxZ55Z7qPUNqyXcQnG",
  "key10": "YzggUWmHjmULYPVvnsBsaEHnJhvDi4wwqkymjgXT36JX39Sg6YbseuUA7tVALs7udXaWU7J2iEWsH5A4Vujwjd2",
  "key11": "5GYsW9ELTG7Cc58Mx14nsYtdNe9w7URsGqFcosaEWHX37A51LoZEosjjPEFenLoVuh57X8kR7UUXiU2Bqkn4rLYr",
  "key12": "3ZPxo1VrWxn3iKzzAuzuj2xqfio8FUPydm3WFVFoZfwivXKovK1zqjevSVwG1Cve6tXnoh8CgjpGkmcwcNRYv987",
  "key13": "3PsdtrgdFA3sjrwAWcbNgvBGKenesEco5Etz9vv2A6aKcwJi4JRNGpyZRaaHFiQNiPbRK1PAMn7n4wfQKtePBJLT",
  "key14": "4vn3ZZvwuM6iQTw34qwWcoRMiXehfFgQ5jhZ1pisZuprBixDnzi5MLAM7taqAQm2t2mAdYjStmxEyeBzGnsFniJw",
  "key15": "2SggTs6T2o3yXGocuVK15Xwqqawe3KzWx6koHndcbJz8GxMfzidTzmnrUcio861zs2tESJD4HUBW84cYbBVmxDR8",
  "key16": "33atZVJ1FyGPiZB2VeMcVpKDHVLWJ4Xg6XCDAHwv2Xzp7RxHWUbhhFPsgtgJVf8j6PpG42ERCCDTXDvA5rnHZKPY",
  "key17": "UZZUD5v9weusyMBA9VXJN3K4dRj9216fF9Q9YTMRXcbMCDSf5CrQXR8UC4iYyU7YgDaRK4gzLwU5ttwUwMyMo7Y",
  "key18": "58ndjrVQQEpxSFSD8J3Dipn2LmunRRYgEePFVjc8JcJoPUF8xxK1x3Ysby424jXfiUkVgFaZJwyZWPxRFbsxzmA4",
  "key19": "D4GJUE13eYabqHbp87WLUEXfbc6AuEUTA3mKWsMP8cjXaUUCevgESojDZYkMkVscVXLvPWFPPyzbopzTYLDmg8X",
  "key20": "3USMe4xeAGw5FSyXYZ8TusMm18BuNcpv8iaQsPojhdEVrd9AJmG7oFgJ68ssZAVB9ZuCZrFZ7y5CXm7BZDuHUMzE",
  "key21": "23XqcEgm8tKuzNJxDFthTe5WywrqApyWipveXrYG1fqhQ4hsdiSP13iibqMcZEPajacU7ZRHw5ojvj6Gq8h6T7N8",
  "key22": "5S12k4gFxp3KuTSaiVoGZCgXc75BVcDXdGgsdYM6FNz9yRvZqVpr9zAjo35mQhsHW1EcV1uq8erWvsuCjqa2s34",
  "key23": "5hHu61NzbhHxrQqpNfFq5YMFbCp4yuPr1p1j25R1mqQD7W9b9YYFbiuqvhXoafi68WPd1eVpiafizR3enJ8N1BUP",
  "key24": "4gk2vke6v8SSwnDg46qCGEszHhKoiavoYtYhZV9KdoS4JHbYiSpUmY7dvLVRnQUMtzMFcWdxQaMSs8cGpCGkuVdc",
  "key25": "2Bf4yYNjFCVq5oNWkzZH7ZQokSDj9bB697RK6YKGXRFR4NvbnsW1gFudTPBMzq6xRpZCnjeeostNUhToLjcbzEJy",
  "key26": "guhEBowdW98RSEQSGCgwfntgK4ocgDFPGKMv3FFJe1KHRVX4YJy6U2bRU7b33ibgYVQGQHGNsm5GXgNuWGwnBr5",
  "key27": "2UvEqjRmiqwa9sfgfDwBAof8pyFmFDzpZHsQHuQAG2hd9ewEs2YVFu8oi39knvdq66E6VrEbu51q3CNebSPwFyk"
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
