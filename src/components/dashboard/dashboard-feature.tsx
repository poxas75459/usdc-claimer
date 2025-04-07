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
    "5xJN7QroTKYXSvagfvDDREuKm5Kxsp1YA4dqTy6KPJxWr8fHyJkFV2kKwzDdCT7WtjDF262efF8GGnRbr2VrEjAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3waU7Ran9opBw9mb784HLEGVYCKQoMHcTqCXWEiQjMWYEzN6Li3SFwyeDeWCWUG4KTeysrQHTxduqCtDqSTLGR37",
  "key1": "4rMSTq26daDnv6Z8DANLyfuZhWEj9dbb3dMBzd8XgFa8iuEpqiUJBBBymyv8Yo295QqGnz2WD1vSCRZvwsXGfP9",
  "key2": "5YihPiibQzhH8tHf8eorg14nYHS9eyHBqpmU222odgCWagZZrirCM5ViCt6ZcLTfy3TKCDX7F5SiorAeFkiZo9VV",
  "key3": "2TQjj1vvimZY7sfCBBvBvZHtnmswFMDqpHziJ8Pho89zuGoMrE7kgjCT8beHE2uXADpmJn6jPCVEjA8ptFCZwPJi",
  "key4": "61F82u9fpfjfA8CygUJvu9Pi6uEF1fzzYrEmP1AtUxDYaACsJzVza7hfKhA91goWkLmEzcCknjmvQG4BLDd356az",
  "key5": "43x9L2D5GQGVTDxX5gv2FJeCRvTfuAHYPJRVyNHLB3rxnFkBPwWor2o5rvjrxuLMi5Uwd7xdi8asDfMKDV5K3xeN",
  "key6": "2hHtN6eQvcX1V3p8gAMAmV1b258m1cxLmkUEhamng6sgch5gg2yeHPVxoE2TFjMw2q17okZxNwm7zhRTjyCcQ3kA",
  "key7": "3QZa5hzmMZCZ554hmv92dmrx9wgQrmoJkMgUn77fjZVYrgM93rFBqEWMb6e2eh1W8mgQQDP1n7KLeog6Ecc9JNVj",
  "key8": "AsW1agb8DFfJgcMW3VoZ9DJLhsbyAYdFNKuf4RAonFtwxX3wRu9r3SvP29Edt85kw1FKTGVbTAB3p5K572X5cTU",
  "key9": "2H58pxQrvqkeA3Uwta6dAfyRF7WPh9mzkf4kSyuYoXB4iZhQYqCzj2t7d9B1nmRNig2FHvaRn45GKCpvCyaRyg61",
  "key10": "8wf3FxYdpzdrJ7ZfKEC3g86jMZaNHDskJmyxFTaxLwj1hnQCxne8eGHZrSi5DZ2FCJszvgRrxpKStuakBcvLECo",
  "key11": "3cqQtxtWnVsG1aZRJ3cgLxg5AK7NEBM7gUCYFxJdgJB7Nz776v9qrX22gghofxDK7im5oebbKBwGuswFY9M6aaGt",
  "key12": "VydTgToCdt8wc29TqrXAHKNbdhqKyYisH2E7JEhb86MAMDZAtKTnNLjPsGH553qd6rJ9z87HQ4y1tjHx8BxYsj5",
  "key13": "Uwx5arNhE6pWVtQyCki8ncppggwBXdH5JvqmoNnrRMY5Q7uqY8fBz1DARnmi4ABNUHWVMBaQEArgNE1jrFJSH2f",
  "key14": "3JShBJnEWv3R6rxTpC6T9fYuSWB7wBNbPzBuzYzg1pE8h9YQCjtHF5aXf5HHm4byb5T1zTdrTeUJnnZ6a6rj4HEZ",
  "key15": "THffv3pn7z6jzuCuzdZHPW7eKsLvyaPmSJvpoTfaVBzF3Vg8s5cr7Xxx3yDfKvS1hFMv5DWgvooJxJ8sAvbz33b",
  "key16": "2HPwa8Tb7Hm3vY8SB3t3GAyo8fEZu4WPTzzuGQc7YPn5ijx7E5ZTnPiiL3ErXopAJGD3DygVGJGu9E8s8po6Ax7Y",
  "key17": "4PZ368fGWHxo56nwV2omoSqiH4Z9e846y1JJ4T7Kv4zxhD21viYnz4V6RkpJywMg5xJwNFqEYBpeebjjjbgAzwaB",
  "key18": "2oo1sPrgQFA3ou6xeKNDX2iUray4NKqXSgFNVEsDv8eKPahA8fNbciEPahpyu32BKaYPU8sxGV5iBLtqej1sjRLu",
  "key19": "4xVcjDtqEV8S8KFZMSDoS5uLtsPaoPyz32zvHMr6G4dMQekdveuRqPFtXNbKbJMVqJQMsP6SuCgs59Ns6cVyCjme",
  "key20": "UabTgseFy95NHuEBUydzajcSpg59aTLTGo9pXJY7gSp2wJQaHrGsLtg2dD58t4sjGpTLUkCGztW9xR7K6MbGRML",
  "key21": "5eqnGVfUUUFKMKb46qx9raJmcmvaZ4Yv9AqtSuYVQEuSuysrcvvPW6MD9AhqDjGqzco756Vsvq5mayq9umoTcyJs",
  "key22": "CxjxyerymugGxuLvKbJSUeBy5oNCQhoBTbr8EcCtWnTqeWgHpwPFb3F8To45FCH4AwMsRzie56mLTJiy93E34fN",
  "key23": "2AJJeW65YzM66mrSeM371ZH9HSuxh3p9Umg45HjMJrdjiMHMyNabXJsqQb99DFDfqQHPPPgfqJ5W3wxxDsEBqsmd",
  "key24": "GzQgUVNRatoopQ8k4g2SoYZCjY8hGmB35vygK6xg8VYxZQFdvPEoNWYmsCrDmnZ6qdmMEMLop887t9xE4VCEmMt",
  "key25": "5HmQTrY4urXE5UwmNfMxVLXmZFXCy4NtGd7VF4nHCEAXRF6f5TKRZFftRqUVnGbQqc4E69GGUkk39fusY9f2UCLb",
  "key26": "5LA92vs1F3BWkeMMmAFFiPmrVPs1HvGGaL5gCgu3ey6Xzv3wCbg5EKVq5Wp91umqmhENDtany8VJfYKsQQd53FXd",
  "key27": "5iHiVw79NQev2Tbc21JMbgEeiGgoushrC34sYuswXpmCJy6oWPp2nd9g2Vym3V8w2XAQb4ivgeBvooZxswmakSGa",
  "key28": "3EwC2hDCR2Gky469YfXb4b2xpS9Gnh39e2bkVcjLffX3nRhsFXwfiRg5w3bCsJMAdWQHffVqo23Rp4V57bWhWE1A",
  "key29": "eP4p9Uo6zEtJRXvCAt6rcBCp1pV3nYLxSth96UrpvE8fJeuoDEAAD1V7G7upjDsHBUwWjFuLBUTpVphsAJzV4CV",
  "key30": "Tq9HDUeYSVgnGQnHicsxBUKTzpesH1yKXWPU5HeJXUD3WfbnXTJLWm1RHJ4UvsU2dpT9z3o1nPKM1QwqjuLuRiL",
  "key31": "3QiVRPcNRQswcTUWCDyUJPRu8dCVFCbsb7ABXVSH2pPzdFkgJ7rucZi6bUhzejx5TKfLXg7WzEqpaDhKJaSp5rxW",
  "key32": "5DENpGaxneWjba4DDDHjyZhLQGYwb5odXJ7zpARi4uPJTbCmQbbDz1NweNp3TNK4VCunMZov24qB2Z9SUgHbjTFY",
  "key33": "2cEKTm4hJwnmrJKMXwdxv3q7jpPRbAG5rFpY5FWvnX45rBXzfPpBrRhtaN2SvMd4MbKmiCi8YM52p6rpWz6ZgJxv"
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
