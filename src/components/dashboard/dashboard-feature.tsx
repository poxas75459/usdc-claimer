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
    "QnH8LLh25ueACDGG3s3tfD5vkFH38QMcLnyvNWoMJAkZsyM9q2MxD9fxYY8XBoqpXecYfSKYC6S1QjEqHkTJHVP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KMNUd35u8cWindngP1ZsMYPTQr2BYW52idw3275yf2gvrUJDhE7kSfDnYHhTC8G2HMSYtwiuv77i4KeWJKk8CUN",
  "key1": "6z1Q9Ue6LtFWp9nrKJxxcXKivvWyCZzYJyE1N7AAd2RtFMGZFm5ij76tAf8rQkLPzJuwaoqRVyRK8UwQGrn5R5f",
  "key2": "531H9DNm4tmLtwX45fn5acaGrUVCYt5Keg6BDRuWsvBTDMWB5j4AYxt7byKntv92yRpTiP4187DEnDy85D8w7BCn",
  "key3": "4G88Urs3iEvKgWaXFbGUVjDaso7XfU71WgQ5E3Auro9CfA5cuvUTYNUdpv4r3ysftPoP4krjRJmLMPcT33w7exCt",
  "key4": "3yXixD1Zupo29NQ8vVY85mxCmgcTjawzM8NN9fmPRQbnr19R9Qv1gr4vrd5jbDEk3npXxUDzmDV1v94g6EM276xA",
  "key5": "hfRsWaCkfcmAMFQ8QMv2BetZffKFXPtAazKNwwfriYyXqjop97cmjJU78U23zGfHR8DVBNomNtqTdofJFqy8TDd",
  "key6": "2dCp9HAChnjuaBCyNGGkybA6qCrtYnA3BG3fMrvcywC31NP1oYuepqaWXmtvTwtHUUvbNWjfkYVPdcH2WHsMig72",
  "key7": "2ffRcucwfkFp2Js7Y11ihYxPJhtziFnC2sptXYmi5WDKJA7iz74dhxqsA3Vo7fQQgX2kQGjLv3LhQCvmy2oPvJp1",
  "key8": "2K9S7a6MAp5fc5GtCnGxTi5mP8a4Zw7jvDmcSFKEksFfyJMhfgx5BMbDKPdrC8TCsFNNPTjNobPAvgdcQpTAoKuB",
  "key9": "2Z623rKMjJLk6i31agbLjsDXQaPsY1QTHeERF5pWiFXgUKJFxf2wgYpaM9oyw9Ev1FfXPZhitRYPErRS2YWVa6tE",
  "key10": "5iGijkLhiLqqmgnC9aBsRJQJjqmrH9ptgPKw4nhx6NHc5Gekh2RdtbacKzcnbm1rb4rdFGUtzWk5w2N7HFuLqPLy",
  "key11": "5ji7vxy9vEPXTAi9tadkKoWf67tuwvV2ePoxe4UaEuHxfJmcyLbF1vVH8nPkLyaUvG6cyzD2PNd5U7dAmMBC122Y",
  "key12": "5WS7xoKkNEtMdTgnAjRX7td8QrPN2SV2nW6MG7Q567ibcWvJCpjckdxPZx8GDPR773AhTJiwgEYCD4wWrbZsnpbd",
  "key13": "4WdieFGP2yETjFEg2Aa6x41a5uvNtm76r2g9mQGK93z1KhD3qxHa6DH7vTADADFYYhoTkLeYgqa1W4CpDE3b7HCj",
  "key14": "YWzsZTVhiz7nZKxtUMTE2t6GvAPjZubuyRZpRCEWTPF7g538VbczyTp62pM3pkcjxN1uA9DkEkjFDLqLtwfLd4s",
  "key15": "3iv6qxq5y3zbA8qocjbCEc3H92Lm8PJu5bUWrJ5n4grZ6pLfNi7Y3APFcM2UEmhsLp8L3fgUmJMugV5Yo9d5TBGA",
  "key16": "4PxRbvhybnYAF2iRwxphuu4hj5Mqw2msKmpm9TFNtYvPeqA3TZA4NcMNaEDdFP7LCydoN8YBSjHh1xcvpPFGpGia",
  "key17": "JTGrJNL8T5Y5UG8mM5aGRJo6xmGitvifL8VQ5pPoe4YVAhDGJpa7FjEEj6dbFsS1GvPuWccGdftGWTtyBqFP8da",
  "key18": "4qYnLbsQwCLEWQGTijMU9HJcFEC5LLdkrhw8fTrbyTTnQJiCyrKmPGRjoy89o7FKvAnjwsJtqj7E1VhTQFJsjW3x",
  "key19": "TuPvwxaqUXgvAPHpbU9ax1vPE4cpHVCiFg5pzz4k5PmKRB1w1xAk7ivSS18Lgxss1mqV9SH4hk3CGWEXAnoRQxp",
  "key20": "2QnLSHqJEYcqCadFEUHcYGJyELh573ig9dfsG95b34hcxxtJKmACXa2yZmcK6KcwStFnq9bgCD1qxfgZh9LUtpME",
  "key21": "27rMnHVMYJ47YVXz7CbLYedvtsBWK9muDWEQBZpGWQvZjNzhDF1BZ1CBwY9LjbNCWgGgdH6KAgGB1iviEHJczE2J",
  "key22": "5M6fWYne9fynyJ5iVfChWX6kRsTTkZJLmGb4iSRPZrpEWSQukRCqPHDUUA4bGKNBptzDth6U3UFVy9PKP5dKBWHg",
  "key23": "4nBsyX7JSoYySjhZtYyuWoGR3VD7SGxukbYpbE7qLYeGjyyUpeFBqkzgBaZcDd24RWeGEVvuNe3jXsCcd4ciyXkx",
  "key24": "PhhhST6zumQkLNRJdVdRohU213vBy9BC6yzWErifutirhCBuqRjcjZqDr7vfnsxgKcP4yr9AF9EkoCFE2P8Ad4v",
  "key25": "378Zqe6bBUejAJPVJUeTmJYJpy3tGSAZZbXzQfGWfnCyu1pYzj3M7dgaYcZGZG2JQBTvsDXYtHirN3aJ57PruB6A",
  "key26": "4cVvyhuXz9ZPKPePS4YrrEYUaHtHJoHC2dDJMExXJYaoqtc7qLufMu1wuqVZAkfnW2mTmnECzNsL3w1EaeGYzaji",
  "key27": "3RR4HZhS1rtLzQNeyHXFXtoLSh6Ffzen8Vq61JMn34gVzM8GR6rJfEMcLoJSH17v2KsUCv4KoobMA7a2ZMfZJXSM",
  "key28": "3YrqmLoziHziXyq2iuUtn9eoVHVjkmp7Z12SZn4pBRNjdu2xuzyidzocghohjpagA4ueHMM4fCAAgWLAHCjPfF5y",
  "key29": "58XEZ7MLUopjgte9Jo8fK7uQrVB7sLLth4Pc98fD7EkEuCuzfyzr2esvMrdmaKBuCS1AERWxhuHdnrxYBrG4JRdY",
  "key30": "2SjEhpWcqdYeQBPvpEikyMcfQErq8t9QWyqqEKsVpw6rFjCrvU3NcqgKrzVQQKBDjkbo2CjQZHtrYn4R1LaKVqwx",
  "key31": "3MKW7Svg8MBgGAhpntPmAvYDTD9kZCemcvU5Xtx65C4n6Ji71SezU7UawmRBx51eia7ehLbrWL7GckSGJZnQzY4j",
  "key32": "m3o3C8pSmvdztoEMvrHePWHPjDVCuonLtto7kSdNBPqyBVncgsY1wPSh2cCiQRFEpcnbMe2ypmquw16inRpUWzM",
  "key33": "ia8AzJ6hoD6bdcFJZzfJCVMMqG3zKtSXVsYavUmeVrKNm9edehanwaCRSVVdCiZyUP18TwtjEhBe1iV1bhk8dvS",
  "key34": "3m3YJba7Dr11TXGf5d4AKKjryzMEfeE5LaFBpWLoapKhBDYYf8qszxeWsaFjiCf1fTJTo8szGEAiZW6Du2sF65uH",
  "key35": "5t3w72TWmR9H8CARqspRbTCQ1nLScEv5BL7vGH2MGXwNDsEJFvocGR93ESvsNVQZfPE5qnVH6Xng2amiEigNqGMx",
  "key36": "2kNKs3ULHvpjPUuhEufXwyAnw8kgE1iufPnvSWRRWGHi2rBCtj86WJdLrRXR2oWaZxVVgbiT859921dTvPwcD6Bn",
  "key37": "3YACRgQA1S7xDb1bezD62g1Lq99ZRyXZStWrS3175B8Q7JjGkQS2agjkxdsU99XpRRmGoF2k3KhtHzujvgjWaiig",
  "key38": "2tcKAALRLVTg51XbbzZh7QmzjYWzarbn1ke1US7dpT8yR48A2jGEDrUKEXqJEB5x7Vsi9JnaGJ8ME68KKR8fMdAp"
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
