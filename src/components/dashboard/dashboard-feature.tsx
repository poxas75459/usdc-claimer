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
    "4kde1yY3bcx8YzhUSxtsNW1ESk6Hk6JcgoGNJzUYQmBUuhveGeXBLevqT24weuX4crEW5qE4AZGgVrYQ6Au7hXkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gRsFuGHKbvYDtuyksmxMseDmrGY8FDMYg3YVVRmWwqQW5dn9fmibL19NStgawTW2TnvEsq5ta4XTdNRnYDEmWok",
  "key1": "2haHxk14uzo9Uie2qsqCLBtPTfwgTW14TgPVqbgWymHuzZ33mGJg2cLtFQ7MR4oY4RXFHH42pFPYFRU3PMp3rKqS",
  "key2": "1Uke9pzYZmR9CCpKGRQ8yoivqo9j15mo4ZCprXncYxvk3mZLnUcxyjHj4EAyfHopPjkYjY4uXEELQ2hCBdVZUhf",
  "key3": "G1WBHDcVp7dtjMs6yZApFKbNTY4EWBoXASD8rX7yWNFfb6EeVHnQHZJDGmUbycmHzp2e7cXXmGve2rJB4mr7dPP",
  "key4": "45YyY7y1jrrVC25bADZntKvx1WW1JENK4U5uQZuWbd6KZgJ5uEmYd36arbeV3NeEH6evqr2PP1igjVvsBgojSzo2",
  "key5": "2scLyLdfAE4GiR1DrZBdxodnEnTCTnUnmDU228v3JGYhEvZn7GsqVEvuNa6CtKQbzPW2qsKvyWzkXmzEiW7KK5bV",
  "key6": "Gq3VrRcJSEXaUsBVySKHYUz54XbJWNnufZmaVa8uZLpRcqdpJGgzKSW4j7J7hT33HoZBX32gKvfvPcKPzRu3Dpc",
  "key7": "hwxQzRrH5TKCVSYUtwJcix9NPFVmK4EatUifDwbUNDYBWXoaeeJr1U5ZgTi1YbRRadj5wCo6UxckgDjREchFUJR",
  "key8": "49ExbijB3KifKd2FiD9yeSBrNE6RsTfj7RQSJdVFEEtbw953JCb87Egi8Rm5b78EEmAfzbdNre1ArS3qiKaaVVKS",
  "key9": "4zw93u1zqY2d85iJa76hwn3eVhyyUtwffZjSHkya2aPiY3PnUfXNGqCRrYiSyXyCpDs1c1ZkvDv3DrcVbGioXkux",
  "key10": "2YRr7gHoJ8rwA4pxC9ven3Q6uBvsAtopkQ1R2wTftQqEwC1XZbgbw3vEiG7TcvjX3VBAw4huQs3AXTNsofvtHXto",
  "key11": "4AsSpsh3ZzYnaH5jAVqRXjQ65ceBDYXqN2zECTYq855jVXbCeymAxao7bjRZW5FxjC2fARm2ztBrDHeW917h6APh",
  "key12": "5rUJGXoLA1FjsknQQUEtKdMum9Ho5aXjz9BsArV3rj1wVTzfc24qWMd64hgikVAnBuQUJiauogSVB3hLSXDXaNAg",
  "key13": "5Vf1RCq7GVCjDeQ2vmeQwFKh7TsynSBSQTiU46Nenu2syYEy6NPJ6AhwVRJpVs25KjpJnobKHx7nd6HJednDSGpX",
  "key14": "5ZyHF9y1mt8M6kSP9sBsc3mgj7ifSwCbCTuDP8eo3sDiGebK8BTBBaL47vDFMrFvyfFPQmCx9ND4B1uRX9gSrsN3",
  "key15": "2TZw5ChNrizES8euGZbBokWn4EipsKtWcbFpkZyzchbyPkaX93X1XsosYpYcAecNcgfXETbi1oSy7wzcdSVXRwhP",
  "key16": "4WhnnuK5mzoc4XJKf4aC94C3F1u7acEuJ8hcF3xJUCHyD4Cgr4nTita6aZ1aRh1rnUqKXjs49QGX9xPrwRGdXZNF",
  "key17": "c2sRwbQC1tRTNW1XQAadYZhZH4UApm7xCmcpUT8VtwXqAC5kQgbUHjZv2V1YKxR5G3C1GSP99QBpfFyb3kpzKMq",
  "key18": "zypzrLdPPZTTQn2BAiUmbPS45k1LR6tC1Nf7cDmPmJSGgnhfdE1Ao7ugKCg1dK3gbFVjEwawDLb5qpxaQSvsCzV",
  "key19": "3uPRZP2uv4odbDNNdzV56NKk7wEQFzDGTwngAS9Nh1sGgVKnbVRBFwWQquJjjW5NFhRGBwdDXYoPfsy4pLimCvsN",
  "key20": "3rysznT8bnSU6YgVWSqQHZgP12pz1z7ng4afPvkZx4ZFVQkb6fQYyBNSDDUiTXRdQFuGgNzzb7aCq2rG6gG24URf",
  "key21": "2f7eTitXrHmavoiCQaAsg3fKpnncxF4FofBqZwmnzmEUrsxhvJBZKubrZk5Kq8WUB4TmeiQK64TNx1FGrjG9JaKW",
  "key22": "ci6XjfJwk5G1nEgXXEzQ9gQfiAg88FeDPr7THVoYRVVY5znMKsxnf3HeoARKki69CKNN6F4pWowdWrBFz4Spma6",
  "key23": "5YZDPE3o5UGmyVwzB8oZb2ofhE9i3U79mbp9ymmrsTrU4EQkUwy3W6HTPZgEN5h27j37hSrXLTohqXvDc65nZGFc",
  "key24": "4DQqc4Wwd3inEMvMnMHVi6rP8vPxxFvnYixXo53vRWEK8aqSAdtBuwr8FXfJGF4yNAk5hY2oTsJ5r7dpf3MpPcca",
  "key25": "2rHzpjyvx9on2CY98FU9MrTDRHxHrkWCKT1NgqyqFcCvrGTkkHx1yCDj89oEhYDJvKHe7dM3X8kChmGy6TTW1fYV",
  "key26": "FDrYwJzdRJFXjmSNqgn96u5pKQzZSSMhPTdiTURjfpyC9qYT9vq4hqRcrA4Mk2uurTxdWPEjdAaXLssg4LBLb2g",
  "key27": "2KWQzCBwMhBnFkYanyAckwVGXbN9dxWrvVCx5SwKaMVfNiSaYFpFDkAjKJpNc5SUw737w1gUtdFsDqdmM3n468eH",
  "key28": "5Hcv9Mq8mjqp2mj9bQSxjqv5P7dCGsy4vnv3WQS4tnFH2c6J2snBdcJhTPNhqFCWkoagnHLG2wtrvHDyPpmtzL49",
  "key29": "5QqrxxWqMmuULNj32RgH4Jq8s25SdLTdS2Er4hpMjwJLmyHupV4iX3SahZLYXSUJ7GN7GR6gzKbFRebpkVuAXqEw",
  "key30": "4kGSkoAcrgw1TNfjAubvhdxUaKpyh3bjxGXrZ5gCTGZHd2cosaJA7DWzbNsfTMGaCc7HRxuvCFjHwQcwy3mRRcX8",
  "key31": "3EMLoUzQ4sHKKhiekxjNVX6KVn8h1EjDguhRUH3vpZauwF3DmstjqebgNJL6rnRAuTDuJg3apDvjGsVRqvNurgT7",
  "key32": "BYTRSJKfgos3zUDK76wnzzaNyRgihWQ1r8Eh7hJPbeMuXzJHfVWbg4Girho247xtcsCKGwxx56GMagN58yxqFzu",
  "key33": "3Z3XT12erA7DvHViHSPiMaPLoMf4NnaMvBkidbzxKHu4ycTheg1NjUCoFN7kWos9DyUPrRnKdTtbCjiJUrnJpuLy",
  "key34": "59ishjcDNawM7vVQkBaJdsTnCnWLEmNe9bt3MMkbgUT1sMGMsBEwomXNngCrHEZFUBpedRRcn2cuDsoQMFDE4Exi",
  "key35": "5fFAqQVj4HRdbo1aJcXcM9YrQA8w4S81n8ZZPp4W4z2g1dFJJm7XCjLXs2BVF6gDSNFJXbBzVa8p8aiH3g3Dax2P",
  "key36": "4mpRqkz6Ss3E7y6TyBpSWeQ3izWoVbDpqapQRavP772fx79pPLquVEZJgiYSyjM38tyzLipEQ2ty8VsJ6WJM2tF",
  "key37": "2ZDsWLH9FmTyBMnzoYk7mUBoacwW1RzBcv3PPtfTPFy3QMM4ZcRGD8aRujMFAB5vfojSFKd7PZYtrwCqE5mCKKt3",
  "key38": "5zrsN9ZvyGY7DEgw8RSMkttzeKj4JtgzE3XJC26MkK5cAKEP3ELNShxTdb2KdkfYq8QPHKGr2dugXi6kxAcvRonu",
  "key39": "HYmwa79TX6pW1XUajL2LPKuz9yXTDK1wNebeXgeq2TWRkGRNTc1eDPbsDnSU3trwzW3hS4piqSsCutcLWN8x32F",
  "key40": "5GRbddizR6QENWpJ1c6L5RgTod7nSYMTGLQpUunJXuiNMNxQDtukKRY3HDZ5CfJmWQmx49gFmLJuWQo6mdPPoUb",
  "key41": "27dWAJYp3Yudo1nPieE8FMT3NpvXsucim5C3u6jPyiHxzjC6Chdkagr4ias1n94kU9PEkbeot57uSggC4pEUr261",
  "key42": "3mciG4tfZzPMcbFRXMmC72rrpNDPf8pysK1GUfHweMSg8aa4Hokr5RYYYTD28m1uVdGYLnqcDWNqTutREFRYkZkL"
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
