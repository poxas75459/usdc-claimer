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
    "2CLxcCpPEzPouYykKiYRZFwYGcPNv9T1NrF1WwJAU6aaDSqHgk9yryQtLwCZkYXG9mUZY3a12Lu8K4K4GQoVkWo7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bLuHgJoGYLuvDj6gJuziCv9R4GepxrkEhBigadwPoYeYPWSGuGFo41q17g3H95cLUoLKVmKVbVsyo6bsFJBN5VZ",
  "key1": "25MRdM6avdkjKyPZPsWAPiKQ12eVLGX3b7sZ4gSMpbZyVxd8Ahe8Zm5E2AbLS1JhvebHtVDQT9aEn6KtB6DK1ZU9",
  "key2": "5TYgsAsBdyYGoBtUUUZtrXmRAqJfQ47rKLo6wpXpCbh6SG6pDEse1rguJaT6hN8BUpeR2BdkL2wGB7xFe34HJ7QZ",
  "key3": "43V4mjrBv237M6ET15T9miNUv8evSGfpM9ARiEsSB7BX9WZDw36FX73gCvwNBCPXhs2qq7W4mz646B5He4DosAd1",
  "key4": "3Z3eA356budkur2G8cwf4mTqSqSkumTTHaQato8Deam6QNcNBu7Phs3Lsd5GZJnityiijwGx3eefnRqGfBgZjtPx",
  "key5": "34h7D1L5MouAZYHN2Bf5SLhbW3UbZhzDxMFPpzY9VDaNdveYHwfzEyqgpzPdm9b7BAxumLDwLKc3qZjWMfBrfRVt",
  "key6": "5yW1NiSUqTag8sHnLf3r3aHPA71smwbSp59wMsBJJowvZ7RQsaYjSUaSf8ora5wTqRzas7ENtqDhpqNE5zZq7Kd9",
  "key7": "64MvfBHXkbQAXaeFqKxp6jEgsQuQXb3oURNMfW9qg9xz66bwHQja6p9jGB8g38boffjmPubvXr7stvzGzVFk8rKM",
  "key8": "5U1oEcRrjVHFVej54qWLpSu7XgPTnauyJNWmjZfi1K6VzpsbcEdhqc44YQjMNPz5nema5MqJTXwhvNeLpQkYzvjn",
  "key9": "21WetSrPXDAEqhJtGPX8s8m47deR1wRrLeHVzQgvQUDscvaK9fbLuFb7zMADpeDRSxNB2mygAL2i3YHKewjC3RQK",
  "key10": "3QCMUWcryzDDX2u84QmZTSQCqxK9XxJDJ4x32aVUMsu8mDBV1BgAjckAwBvgpfbCYKpFZtdRigFtxXwzyLZWwok9",
  "key11": "5vWu4baEsUgK5ncifnqqrWz2Bxa5SHTTh3MEtUrrWuHXQ4hL2YS7ZWfUWsRH83HVSNhN9DKmH7nULF9BTheJhTp",
  "key12": "2aFuh4pQtTf5TE2YyDdcY3mZw8Y4HrCL3hpstBmkzFhhck84d1i24PSgZFhJqbxbt75DgyyPdqLHWtZwTaLXnXC",
  "key13": "29Xrhqjj4qnBGKVDH62Wv5SgZDPhW6UpP7GchrhAHNEqpjqRPk1CCtUCU3hHGjZhrMw9QkfBPJP995xaQNZWNxP9",
  "key14": "3YwMaqTPsmK5ZL4MH6uZp7MbJRFHJbA4ti4aeJ7nuxRc8YZctAkyLR3gDRjx3Mc1ovWxQ5unSzgi9ZJU7xZoJ7Sc",
  "key15": "3GqjiaTE1QFT6fkLbrUdmUD3akcubsFQbS2LRtmiTkXqZjBAESQGVLbeiYcVosEyu5Zecs6ykc9wy2C1tTeEEJev",
  "key16": "41saCKub3HhV2kdcp5mwwwBLapJ4bTbRBbEAkT5eXYdKAdbEBCrVADzADeXD93afbDFV6FPa4eBcZcGYE29EmTFZ",
  "key17": "5nKXb48J6ttUHtETZCspZDppUcGnAdXqYBV8pA3n25HCQqKeezovP2QGAETRn2YGWAjxUorbRgh2zBfjwEK6ywkZ",
  "key18": "5MpBv5DXgwTEfK1SBexqJomyTbBpYLrnQtbM4qAi6UHkWY2cP6J8EPVW4UTRJKRQLNs4xv1MGTwnji9BxF26VbGU",
  "key19": "5WtFKrYv4Jk67K2tX3X4vTyLHPBAYY374tbRGzDk3kKrXb8MDJSfHStHf8AtEPm7ZFjdanUFjZt16baP1uBhXaSW",
  "key20": "63dB7hcWAYGVswnbbaaA1rj7jq7fDQroM7wSC2u26Vsny49p3VSvTF34qJeDXJKi6KkvW5Knhuqn2R4xHXueqZ43",
  "key21": "4ffJwSBzFaMLMarvzP8R1e1AnKBiy6tEPdrw6QhHHD2eGhxgTUbJyFJCJF2crrQVZTMWxcRHHCaHiw8xMZi2iHHL",
  "key22": "2sj8hHaix8QmqaFrHPXzfDueHdm9UgK6wimXnvSgfGxRwX8YEbtb1PaoEjhd4iA2xbovAHJGYf2J3b4W95wDhM8n",
  "key23": "3RbaQHruSScQ6kL9mqmzb8sEr4Ys3bxpyq7YFc9rKwzzoqb7GdN6gNLaK9GnARTnrDfY1HLG1FWTqrCZjvqhAB7c",
  "key24": "4sJo6GECW4vb8HAxQSzreXea4ACdTeuoiMdzSfUSa4aeVmjgU3qiRujmWMb4NQcJyPKtWn2HgJttLyAQhapXCzWo",
  "key25": "5pDTX4hzqZh5wtRfUfsru6AyKibT47rdAn6yTp3VgHTk2g7e9RCrn4UvUNNY2DV8JW7b6kDyyhumrUkDNXT4jyua",
  "key26": "NezaYdiCXKywdTEiTUHy1x38EHXVVodotd1hHN8SaZoZfvMjxYdU7a5fZ4CEsAkfpKhDCYFrHYKE4LjuSyn7m3G",
  "key27": "5EqZP4eN9qbf4cxmnVQWbD5rNhTZXHQqKA8YCWa2wk6oF6AQ2z1oUDoFLtrjrkjNEYH9M2et1YTG6Va9gAg8up1W",
  "key28": "2BcsxV4PgYF7AxTevQm1sPW1j4M5w8i6qDRCSP5JosiAcSx2c8GcGWwewVvRTYP7shVPPYnAUf9b5BHdihJngKCG",
  "key29": "598nxSvdHP6DthxPiLTwSjFpZqMjPJ5Gh5DdpRuMJnvs5hAg5gbFHUW8ppTCxvBvpKJzDJrAqUQo6wPC2eeP1FJQ",
  "key30": "5zCWXDUPdACvv6PTG8WD6yuEiicHPbyQkpSPFVwM6u6C9bYNDVD2Z9cRVsPaG3C3uvWRK3AvRP2RRELAFgv82Dmm",
  "key31": "2e22fUvCig7oKvFrapYfaYYhGTuBBnC1SvodtKSAdP6uyPMZqpoSEohMznBHn6KyaiTCTF4ceioQtc3e6y6gBm7V",
  "key32": "2BjKYHLoE9WV2KKAPH58v1Ar3ALjJPgu5aMFyqt8To4uNdhTsVq52Bt4WmBPfe6B3z4u4iyqTwYh3AJdSFXNhs7y",
  "key33": "2fdXL6aTCnkRFVdRtC7a4pQo9Zxno7mMkUzAaTScNY3vt8CtQJK2djbry8YYyFgpxy5CDsTEetNn8jpYjpCufEH1",
  "key34": "2GhqewTJmb2jmbgwvL9SFWzB1Un2LUXfGY7JZPt1RQYjizdN8HkhVB1era3hiHzxBHwchCvuR4yxdk6k9DBY252o",
  "key35": "3vCAdVJ9MrVvujgkhsLjdKVXDR8Quzs9RpPs3SyBh4yBcmDm9fzsuiAno6YxFic4wfvXy9MaVMHAzYCBFRGZqfdP",
  "key36": "4yuae3PdQZREwVpz9T2FuPr4tzMDU7xmGUf1ooVhfVRVaDUBHVvkCoV4iiZaN1n12xPR7usE2cDMum3Z7msacuYt",
  "key37": "5JiuNZpHLkEcoJmheYT4pha6DYbG99LdNf1cvh5crBp7bhJXyQEJtfVnAKrykUgtj55FbB4or2iWhFRng6siH4Mx",
  "key38": "D7Rh8WhGfGrEDomSuqGkockeU45tx315J3WoVaEuHPBMZ9LzUXZVzTyX6KJMwoFGmRBWGH8mAUZdrebrfbAnb84",
  "key39": "2cTZKjJbCdVd85TJHCkpLbyobP75a1jDn9nJqZnt2jXTWPWQdkRFLFiiD7rNEuMdcjHfCLSr4tXDAtRn3yPHSuL9",
  "key40": "i3RkMcY3soao7vY83xDiszkPyPVMsvDx8M8DkLMuARQSDwaYhsRQMfJsPDAGk39cGUZU9WwF4szms1wCxKxFH7R",
  "key41": "5xgYF9PbKAK2WTYHZwbHU9Bd8nJXWS726TrhdGQXHZYrrMEo6f7ZMBbEE3rQ4VKD6N6ku6YRn2DPnjvY3td3LFkM",
  "key42": "5NfGz79xkMAJwnQhnVTUQC4rBtjzY4oi7GGmRNfTvZC6iVNBtvccDyBQ4cYnWQcUC9r3HnbQhx4aR3iawGQdTpc2"
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
