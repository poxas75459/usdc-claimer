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
    "W1KKJALggThu6jCJqeWaWVof53fWYSpBe3vTwNMRkEVbdSwdF1zMT1nc5s8eh9TsHeJ28PUzcphzVLvWgAyhTBU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EAyricSkuDfnW1NQZedWEHND573HaE5kexVoJcyoC2JipPiHWDbepiYKyZXNYNr8j13ds7mjZJHyhzQDt1PWtMP",
  "key1": "2v3ceYD8a4AC6tQx7trTm36A8Bczx9kZRFLdbEsDgRwwwfPm5vKy16nzYEtPyLWAY1tU7WKLWStXkowdpa4oRZ1c",
  "key2": "5NhX6ocvw28KHNeqPHMv3HpqaKdTfaaFTbvrnrEdqTMzW2j8R3micFAJC6CqMQX25qFzdDjypfxtL51azzjf9hmi",
  "key3": "3Ahz4GEVhsRTSwseEpE9sujL2AKcW5DoxM6FfAQNRHf5CZ7ntnMsrCSJLVFcsMG2C2xBVm6zXZWpjksKFqGTkqbf",
  "key4": "28YdSDdGpZzJPp6bpfwPJDhgfJUmw6ExXP1oqZkYk8xnUQzSsytkU3txJguwgykNNjGT7TPkpCW1fxpqnhwJozgc",
  "key5": "56eoGUvUUoc9y6xvEBLAbYvDwFou52oRiMtYRexyAuo7psWZpfzkpTdnFYPhDF86LGhdtAS3wzxqDWWCFSFmRER7",
  "key6": "25hMEs1Y7ibQBV5Mx5nLfMUrrqumwEruyKGZWWCs9UyN8LMdPqSW7gtmjBDUz4gxpoUqQqAPHpmCXN1XY99UY4L4",
  "key7": "4DGxHDvn2qUXR11ZN588MEWBs2cmAFDjNm6PwvbX3ZY2CSr42fv256m3xAqbfq1Tjwu3NuRBWEtxLRXXxjo2Vdee",
  "key8": "3DP1Sfy4aFMxHbMSby8fe3HR8rm2QyYUqBwwzUUghv3Ldpvrixev65jLiJWmnADmRxhh4dvvRZE8EErUF8awWNwo",
  "key9": "5oS9gwimH9BEp67PyWjwG7tj33kXpkwbkWbt54nvp9YDVcddoCF5JzCK829hAasqPtdE1ScB3AwwfR88LqfFky67",
  "key10": "rZoRDLxeA2XyZ3kFdcG484fKkx19gcCVRG7m64e2y9A5mhyeeHPR1YfBiRXiJwjevRhGJrVuFHgh5YyQsMMabAc",
  "key11": "5EsteBGWpBrjti8gYvhzG4gPKwR3CA9xarU3im9yEDrHo8ZCt6TFPdHacK27xqpL3J2xzUkGcBQSES7e6vR2vqCT",
  "key12": "22zMXYzJLYdFx7D2ZVQHR5VSx81Uvq86vqPqwMtgQAtiioZ7MoKSPdytRL2YmExqqPxdrDiV8pNrvqAQbqmsjDuF",
  "key13": "2VjAhwRkEZJPcxVHRodzJeyVVZXAWKj38HCcqvztPxZ71qfbx5rfk9RyZ2ZBMJcnmaG2s89M7p2m82E3MefHbrnQ",
  "key14": "rnUHA1S5XZ9i9w9oDC4fSGypt4Y8EWM7NATKPQs2dCn1Fjz3M4phSUtVqvbs3225BSPM9YdjgMUWPsJntBtHDtM",
  "key15": "2rTZFmuUjJtNFUFNfHQaSPRCfAmXvBFxsAS166eBCqAiD8aVmToawneDvv6CUTe613SY3KhdRaR7Tz2h5wzccZau",
  "key16": "4dmKqF9ARwQN4WnL2KxxKKqYFaBzG7KAbWiKkmBaAdhwhmsrnjfopeu9YyBENmAaVMPLmt4AeMMwgXkUi28Egxu2",
  "key17": "18e72S57SyT9rcf3qfwjzz3ZaNZoj9Rmi5xNRtkkQh1T7qjXmajUwZgjAJchiPRt6W48bNGzPS9mMX8ezgdZobb",
  "key18": "5GwGVzWPBRyMcdYMwqj33XoLgkzQMsTms8KYp1XMinDw15drUieuqctQWwwUnNdMQFVA4RbtqoSabTwtSVAhkNcz",
  "key19": "5vZWjpb9oE3pYT8czeiagqQpC79JQ6CTBPwduSGL9pAVgjuRktDkMEL8FejnXe8G2B5gmw8uXwe472Q8gBfhV3Xa",
  "key20": "289tmEx3GYaJ4Auttxjz1oPBvukQG4TtLSefdq5NK4HtxLCT5orrUuKwGcdugbNJf51U6D4us6G6B7SNXLSFcgsY",
  "key21": "5LP6ZnQKahBhuyKiwTprPzmMw72gkCZ2LcineYp6ztugxmMSWNz4v3D1RJfCubGY56QTQmMgfvWbmN7442R6eTRT",
  "key22": "462ux4xwZAUhsUg7YzCGNNn4hyKQvTNrcsaQeAG3WNEry3QH4unUU58Wdg1ddQdLbC3Lg2fyQ1XSd2CCU8wfqUgp",
  "key23": "28pRktQDC6SgAM6g7bWmEHUz7wCv86gK547i9X7KmHm3enR1ihbWQbEwtExtRytzwd41fAfgAsJMA6R2iCLQH7ph",
  "key24": "2XBuWru5gmaEBXrcUrfRmdvdXFUHezd3AkkBch88rZmbDTQTa3BxPqu669YW1rXuMBDW1bMJCbqiD6FhyZ3oREQ3",
  "key25": "JRhzgfhsJEYjybb4UhtikeBaj1pZkKV5qAjrDhXb4b4BRADmQNKHPt45142XgAYk7vn96ybAR7eRhnjZt77Wihp",
  "key26": "2ZUiJr4v2GDkMo3YdnT5qYfieFXfs5aTfHpnqJLSSna9wBppQ2tuBTGtYGRQJAHewLaYLL3caL4PMgoCmDjLxWb4",
  "key27": "5XUqh6K9booWskrYYETcLiSijNZdR1wsjr4KTzTyWBvTMAJTcm1KqVQXeY12g48eMyHA57gF21yJtg8YBb1BtoFD",
  "key28": "oPrdZ3Fq8NLSP5qc3cqviumnasnbGwb9y2cy1AUyUnr7SpRViK7x1mt94YxLRY8u7m7ybQhcauxbAd1vaLjDj3m",
  "key29": "whYgDzLnYB5ViZu4JvAeqkeNhX3sHHCHraCwXFrL5KAdPYWoygTxy6DzXN8qusRWQsPDeCeBSEUiuGiBKWjmEui",
  "key30": "5dSWCVGNc9YL7aA1RSnabrG6xproB1gAdERbBQStTVmXFr8ShkBPxQ4r25zQxv7xGaeJcmkAFCkBY5WVN73djMSa",
  "key31": "AqCtpVSDaLJ5eRsSKwxiqpoXNYEWiPoEMac2E1SD7pwmH2m3QaQHBScM8XjHinp4fhD9g1SJDCNsAkYmErhGgrH"
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
