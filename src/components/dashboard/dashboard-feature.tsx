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
    "2GBvJFb29fEEnYUokDGssmy4nu8SMp6eTQCKEE5U79o2trdmiUhRbbnNnDSzY6PgQgWJSHYhAg797ryi8ACNetZa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cjeaPzihT3RhaCryiW43bFYMs6wFxJUaLmU8szaeYnU2Vx9aBXHaxHTrhYDBpq4T5YtnEhG1gu4QVvAhmjEBeMk",
  "key1": "2PXFfMgQRaDRXpRngjW23CLx1PcQa3r7mT6L58V4CvVbLCJV18e6oPipXGJYk2KBFtz2Nkf8n7T2V5LLN6poNVeX",
  "key2": "4jc5XTAmCS1PMqQYKPgd64vqyniM671QnFcbaeJfGLrune6DxQKPgCbg5HzzNBegxCoEjw5cEkvUMdbJtQtTs9xR",
  "key3": "2QgMrK5iht48sZVkRaumHxU5oTMwP9PwDJh7PsqCEzpiPmnpN88m3uaFe4fcCSFvDZvvf2qRtbRZUq9XyAdQpuP5",
  "key4": "3bpBb6E4xpe7X76UZMJ2PZ5v3oxsBaXh74FAjpaqsxuvLpRaRdVx548EaARLBd2AEnNAMKSkoRPUVDkGLkiFm5yU",
  "key5": "5MmnKWLrCznA7VVbSCUgrzHiM9Zfiq3KpVqaDtFjVPbRzhfvsyp8m3vWNdaEwDeCxQa9eee1EXgiujZJedFcBMWv",
  "key6": "2mHbAPePkpbLxptkfn9cmyCPN1LM37DjaYMq1D8romHCmNiuJzuJE2DH7swXJXVwyqAhFhMwKeLKQ2hn8Z8Uvg1T",
  "key7": "2VSKKRdiCxMZBaA6o3YMLUrh7cgYmmTy79r2FCZnf9JP7ngAaRjAEZNpDEaCuVPg7NjASB67X5C3VjNVW7xfzuPb",
  "key8": "2iaUNfZVjnTjRmYcjHjU5Lcgz4q393sxz5kWySe9cetvMhq4LhEoHn3wVP1TChpRmAaS3kvBA2a8kzJ6gjfLwcwm",
  "key9": "4qKB15UEuLdZ2RMviSMam7YXaXV1upqkRgwMzrh5jgSBysM87TVAy193mgNZZcXrrqgM99iNGKHU8f63kFph6kwc",
  "key10": "jGuqusHnhX3qUUqgfzNX9piU5Ckcp1EzHv923Sgn3iEHmZah4ZgnonJ4povW9b4XcFVqfAXw7vHdLBcis8DUPsK",
  "key11": "4uX9L5qVGzpg3Svqa7kt8Q5Z17uC8YwFXgbTj5BHunXSS3NMg2syj5G2zcqTmZApuzcGDv1mTxLrL7RNhBCSPYc2",
  "key12": "2pi4rmawZX5npdyjUtdMKdoy6aMhuHJBiHMz2YKm1bruUV5Ksp8g3anMqF7TYpcLq8HrYtBKQvxT853aW8Y9qG7C",
  "key13": "XYCEPXTfkp8UJRef37pmf5RjtnZkCBFHfnmC2VqRr7E5gKcqfWKFu8bZH9Vr9T53HYdj2Xwo8DKWtPJXhAuZwHi",
  "key14": "2fEnSCS869AEnhdWo1VeP8NMGvnBR5aWoQAHxxCfEdnB7JVNYn6H2McnmHyt4Q3gnw3CMwnAEdNDGoq3aU7vgUXh",
  "key15": "RFHE7r8LSK85UFWi8fA5MP9ioe7rcLqZ3i4AskSC6uSLqKA3PswMNkhsTyKhsrB29QpiVvS7qggGsLbBiLWHDxc",
  "key16": "5SPfwoHaxebYq5XQwFEryszxKXLqxhu3BKKorTTW31eWTJuTtTtsdibd93fUKaWBfiADZbJrjrSgmECBy2vstED1",
  "key17": "yt5AUwfNrTnJNdx2JjyuBvwYCXrpLNxKzGtNju45hzzd5Xji7jVKiHkbLr3po9Q4yYGgLXLnBdNhnMsrjAeCjFY",
  "key18": "3E66Sm9YXVm7cdJeTufiVPxKCb2V4Se9dG4K5DUZC98YNBCJSrsuTPzK5c6YRuKTtJE48N52DVuSvRU12tg4GwXU",
  "key19": "3rb7Bn1maesxScZVdfd5JNFBG8bkUT1BakaPhyWVLg6bFfvVGrSewX5kXPGxd37DREipSDPiUFu56Z3vFfvrzDdp",
  "key20": "QNoEzENmLMGbRTunZeWdxZNJ32kgLCtrLLJE7Pkc6dzXobPK1PkzEq8qy9gsdU4BQaeuYCHoVYKk7xuiyz4VpWK",
  "key21": "rPSWyocgHe7tXGiqXeenRVuNsJ4Pz5thRgHLKuQ8mu2otHy1twwboCEGb9fQnHxeBMSovkixMCyeuBZWRAffsKG",
  "key22": "317zhbLpr5YPfiJfZbLAu5GqdrqJG68gAEVkzX4AprZ9LtFk632uq4n1V8NYLRBiraRW1ovQUvCxek3FcgNpWXji",
  "key23": "4gdcZDj8rexxsAqEvEqGjAf5JobMuFdAgUdgZzhPqYFvU1ukfqmX1nmoDA4DQpnjA8d1yjwaUnuwZyPWb9XKJWmS",
  "key24": "3aLsuC9YKfTSBxvc1uZAXGBVNSsP46NjwedVe75avtNKAk6WHKCvahq2y7JUAxxNu2oVY1JmKBZSnbXpbt9Xwq6",
  "key25": "2x8dJvp4jBdriGvCfVHzs2otYgrMFs8m1zCfREeq3RFdZpWBspe6FdZLbYVP4skRpirVBzXCbZn9EHLqsFSMZGzM",
  "key26": "41NGNYyCdc28yTFxEe79EQ8sL3pLGcQCZcFPHD99cnVCPLsoDSPCRqCmZrDU5it7qBoQufSGaWxhh4mZQ3NXbe9z",
  "key27": "8jEEHn6HPoMNVUr8rtS8pcXfUzjLasiLp3P1EKu28spXDUkBkgtdq8Y4oeJuURxfD4zAxsdtbGmRW1f1ecr8LTg",
  "key28": "3ErhYaNVuBJHjJqWCvQHicFuvJLdMCT4qqU1wo1iqTVm6tAdYWVBbzPJTXTSaCDeitYz6jGiyWkrGhxy9hFJdtk6",
  "key29": "53AyJdpZwmU6xwWyWMVGX7BwpC1Q2nJFV5KfJj9yzLgXur9pv9vaZRXpTq3VQxjWKiV7MRonSAEthNwpPqkdbine",
  "key30": "2WoJcissmJjHjCCejmVPJVmyDGvunc6urveWqDgZMhYdW6S97x41qiDRtxhrCUioob1U73Snh5sBM542emqeGnqc",
  "key31": "Jgw7m8HHCiy7enfRWRDP2iw9bcsgJKDDojpQo6RX5oyYzvYgjXYdQn9iE7NpELw7LT5HgoXP7iU77A8tHStrZiS",
  "key32": "2aUPvYTmMpLfieP96efyJUd7UAGvDUE4KSQ49HvrefjhL68AoyBjoZhmoWKWp4WowMnGRFmCPcfQTZY4KQGVgsi7",
  "key33": "eDExuWE1dXagU4Ek217dfELrHvBReWCEXw6Q6ppwuu4f1sXghPfKbqSRyPX8GonzvtRtme63Qd1zaw5kXzhLRpT",
  "key34": "2YtdfWschwKxjZRbWtx8pHMNq1q2Dwi1NNwD4AoPDHWrZJy2cJjfXG6GHo9rBiYaYiaqnrX1vDC6xBXfiqKhmT9C",
  "key35": "3DCS8SVTJU36Rb79aY2tgJGpNzMXFV3r5gRaT6hvT9HkY4yNA2Zuiqu6nMQ8nH2L7ZjsiXjkJVD96anb5JU3WDky",
  "key36": "27ucBgerjSwW1Jd3Kkq53VQBW6R6Eb185G4sKs3FJNc4xJiGaXR1jfcWLHeQvafzkNRFCjtwJ3SZuhJM83hw31Dw",
  "key37": "5M6TzGzb9mWkb41Tuqse1xBrcX7zpLRfXoU84n1X9mEWQugA8QuEQmBxQaiANzrT33dpyVpZyXRjxqkWXHVjBWzz",
  "key38": "51JTPC8Q7A4rqN1iSW49z7VVqLvHm9GsCQHmRnLQcWUqwCaakUk6vZH6k1Zg75uNZBULZX2aN8yMR1qQUXA6FLNh",
  "key39": "45UYKi7gxLp2U88qSm6yipz6wTrFprsWEeyUaDJcGH5HBSnUKZMmBGxQDwvYCB141rGd1RniJnJqvJvsJu9MYJtw",
  "key40": "53neWUtdaacD2TsR5uL5LmHkaawcR19kU6RuWVzZbCG4LaZc4aZAgNZCYnoqVQU1BEjapAAXtnHCncjzAnKayJRi",
  "key41": "FAWuvaHu2KUJ6m5Wtisd4ivLMPT83bB6esTHZtdZWeLH2v97MNNUrSSRh3UmrQ8Yo3oyeqDJPCKjdxEozfj79Pm",
  "key42": "5xVRsyfdTAEjqhCmbx81zwLBuhNRmB2GBRM4hPbDqFFkjqEnFNW66ZKaEYH9wPtcyPr6FeZv626TT8fpk4kyNjtt",
  "key43": "451wBntMLz9hbTQ4KYex2FAigQbDTJxD5VSRKsrYc5f9yn6hSZenk5A6UGhtt9eSTTgrSTuZcoMPf6mtBXNvBQPv"
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
