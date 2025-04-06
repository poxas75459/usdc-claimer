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
    "31hFV4bNHHsFat3vftsAX1DMBdEcQVwZTAV3hxqSdS7Q2XTuccerJFcRhRQJrjtmxvPAZQQu5CJu7bkeCG9rCG6g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TTkM6gdb2RUndA5oTo7ZRiNRbi6KvDazk7GRMVQb3YGvXdMtuYz2S7TFtnad5yhFccdcDHoTAFB4nevsPZGDCdX",
  "key1": "4SxLc1xCEFX86aQN68KMFe1xCSx4itxKrnXvDHSrAFXG6EqaxeXTfoARAA5GPC1s6PmLfRfTy8u7tU3uZUW3sJdj",
  "key2": "4vbFfAPSpyCUaNDb7Pj7dvm83bqMSEk3YbZA9M8epk5EJxC41yQ5QNQz6TJ1WHC6648xuquApi8uuE1d5ycMgUso",
  "key3": "4913TZJyHWktnBwjc4yVADGivun4Kp3QKEW3TADLAAco1eWhVHesesP8gzwkuds1UEBJpK9MxPWag5mUEoVvDuM2",
  "key4": "48cKZ51XHweEyEhH8ruqicqShetUj66rwsgLCGk6NgRQBD1rcs9BsHCgxL7oYyvjHz1ypZG6KA5K8pq1eGP6uEXZ",
  "key5": "FfQg1Ef8cjLbRB4K2s6JLwVok5pEPYQEsUKEb2xp3Bn9LUXwFvT9fiynhJjAqUhEevu9MDVCz7kPWTjZecsZVrt",
  "key6": "483EhBUeBupbUuz7qVDL6jVgc734qxE7gxWF2cjbMHaenrsEMDv9wJEMy3QPmTNbNkiQ4zNDnp8Nxpqir4KheKbX",
  "key7": "BUPJZNSXeHQ9cmwBJ9BQHuwosHBkQHWj1tQYw28dQMTcvEhgbTBesDbAy9ctDzgpNw7rVpzNBKPR4gxjvLNS1vW",
  "key8": "hrGskZJrkN6qpPh8MBwuZu3kQJMbyNKFS6XxPCdiLWNfXHmxMDY9mS27dzxSLXPyE1SzEMuQk96qf2Y2KaxVrkk",
  "key9": "3PYoqFouwidqk8xDuTSkyRgshgPbyaFjyAW25EqoByj2tRVQWTB2uy25nu4oKh3kDDJrZSSq2PzNKuiUQoTufbmK",
  "key10": "5TE6StLvonbn3scHbhtRe6YkW13BBpsDoe2sGbvf8Cjf19gfta2PPCKpPEcGs2hTxoUfW4GDyMcxyVrovRhdySeE",
  "key11": "4QkeRW69ix5dHEXCudPmsnJw87cF9kJT4pGU1NN4WzoqRxdNAx7miEQdNXb6ShY1gpcEwdyYEK5awdSEVVPEgtc7",
  "key12": "QhFFL4Mmcesv9ytWTpegrQfRwH8Bw4PMKzhnSVyucRavDjDwHWanKxTdvHVY1CeCGVobucVwLnH6bsgMTvLsSwB",
  "key13": "2NhtkTmAAy2ghJ342MXMgo8Y6XcJaD8bRkwfTH2ZZgBv6UiTNQPmyU4qKpANQR1MSj9RVeKp8JMk9KmYiA4zKdoJ",
  "key14": "3oDUgmsC6zwzWG2YumzDYKM1AmiED1aq5hnL7uA2vC5ezaBiQABXuBVfVJ7fvcvCARrJiKJGxbE8tni6FPgY3ThD",
  "key15": "5gAEBAHrZByaS5gChGDQWdKtFoGEPEMJZxEXeZbup1pRV2ad85SdybpQdhJpDWj5Y3RbZauEZXyYn3XdT3jfzLqy",
  "key16": "3KHAey8s41cJMGQfFdV4eLLMA6x6sCHtuG3PJsS9m2YGi32NevFCG1ReEELTBeowm1YHzM8V5nQzV2vYKAf5oPhu",
  "key17": "2E6eiz52TBFpZ8nwcEvUE6aE2PTJZYZW7bpYKB3NBvEZNuxozmBL9qdLznFG5LUdRpLk2y6xFPum9Ah8y9zhBiRZ",
  "key18": "2V1narZJ53sb85JxDWRjfrH7NQUe8Dqrs5mBsC4tcjwxVe7NERngKeu4Xf9cLjmFH4fuULMCjRRrSfP3HvbDMfG2",
  "key19": "GJdnbTdw98WUadsw2q5EUQMcMunz8adUFY5pR9xZcYgdNkT4yqDubWCzbLAXJo3cnheU4iEREtNNYniiP47jqjD",
  "key20": "2fabChCMtiJnTahPp4wm8T46XcNwA86zaxm2cRjWevM5PNv5utPHGbVm5YcqbcQdR7NaxFhQbYpvLuBQCsU3o3cd",
  "key21": "2J48wqDZWJfcPAd42E34Wbzfq3deMHZTWiDxarmTKZ77RXknJwkvXQ5X6SefeZdqeZhp741eJifDgiQF2tJovY32",
  "key22": "61b4eyXUaJcKVY83BqwnuMJAaCUnEkCJJ1HhvGtNTiA5jAMfxk2d3n8i175j3KoQdaDcyTP7DvdSQ7ZK9vFzgV2X",
  "key23": "nVMHLFM4n5br2dPoMRpxJfgCea74hBcSCmWiSSYr8XgBSL5LCmxA6akuGAaisyxgYjYMdNRyyqwTVxSXYstd9AE",
  "key24": "GE89nkHvtADRgCFQapgvFk49gwtcahuwApRt4EhZE4WUtxS6in8ryCPynHA1hgPEp7kh5RtutvTxqFtN9wcH31i",
  "key25": "3KJpCfwyjNNQq1jek8sYaqYSoErR4UBo996dN5m6pw85rkHZD1YR1bMbDTs7UdwGZ8suznhSZSM2htQSWW8EKuLQ",
  "key26": "3oMvtz8H2jL3CvmHb7C6XKB1gTMQ6c44Wofsbap84QCkzdCPG1TTbQCGvRQMYerAqJtQ43xJNHTbSWJ4qUNKk7UA",
  "key27": "3wVkHcdtjPoeZzWqwMxKdFivcFR86d45rP9JNKERmYJGPZCXD2FerNoURVFdHLN8Yriz8hV6X6Lb5RwKwXaRTjEu",
  "key28": "57q24TSFBsBeWZiH6jQiXkVZFJjQdAWcZmg2UwM9EnKu2a1XG8jMUbJNfo5JKbmcqoPtDkZANeVW1UpdG2cWamMz",
  "key29": "LfyxP7v3eWLEWS3dWtwoKCz7q97Qt3mHUx6Gq68jBjes63KfgWJSwcCDCdFoYYQ5p8NtSBQBhb83Qj18V1nJNVg",
  "key30": "2QNiU7mxHsovV6iq6FNpd7F2PJTbncTE3EGSH2PZrSpduRaE7Yq2K3sMmGSeFVyh7bqpmJPqxGgSav7AC28xCeGr",
  "key31": "3fkBL3yLFe18ooggqof5UdMTeiho2Uaz989RuUKZnhmD8vFHavfPMcKNReuLp3Fcp8jrVGw6hD5Ld9FKafC4AFu9",
  "key32": "67qGtAhr6DiyusJz4tC2RXuGg5nSYMQPTjdXcQwFBhvQoEPzLJCLH2zCnfwvtZ2gHM4Emu2zwbUyqPeaonVUAgXS",
  "key33": "2TnPApHw2oTDBKWEoPgHPNwaVMS45PKqRDkwMUDsJVzKbjj8Y7z6z9RuEumT8WXZnr2GqLJrfET3gpdVZctcm8mB",
  "key34": "3ic2UhxcgzfMVCU5Tjy8btwGv5JyoFBRLwdp1v8aQ3EjfB6mweAR6v5UVHWo4pexyNFNHe7TMm3LcjFvsZ4rUUjC",
  "key35": "4xP8cvUhofJoQGpJzWA1pDVRJ8kd8g5jtQnY7RhnxustG29NcAgtgBUmGV4PKRJTSETxyR29h9F1joDx2tWaVkzS",
  "key36": "nZ3NSTFJHeg6M5JtfXzqhg7CdoF6fpznDujR9JRaBjcgxxLnsfrVsCbbKDCXbdYt3o6m7Mrvydztf6fhk437prV",
  "key37": "34Bqffckuqv9dSVXH96eV7u4DZRnjpf4bri1FCrPJ8SLtA8rdYMkGcJfCQuPtRkRM4LiuNPeK764pjrw1pGxaHY8",
  "key38": "VsWTKp4yWhC6dTeuSV8W5y5xiXFC5nUCC934Ei3tUnjr6TVKMi2jFGqv6tjdCJ63AMqA5YpLcU8BL2kNyYRHrnj",
  "key39": "4jHPP9XnTudMg9w16RAppd8A8xcnaXnC13LrxeMYoJda2c63yTbvWidq51WsWyzbbdvemHrZ4b3eNjJ41RgnPFdS"
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
