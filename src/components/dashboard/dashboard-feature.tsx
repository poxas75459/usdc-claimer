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
    "2bHVqaE9kEDQVGkTA2mfuFzRPQNAzctPYpMW3xEWrng2TsE78wJexRwpabav7VpTJXXB3Nexb19u7yQ4Hg39Hcma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48VY2ScKv7tdYHRFShuihGNATEoT4scqWgA8c4hoiq7xqxhBunUM5ZzgaxGaYzBWfEow11CM3h4rQbcLmhP7P3AP",
  "key1": "44f63DBAzgRVy4iyEQ7BEEuLGEQVsYjMTVYeoQHf6koVAc4pMaYrXM11d1nMSdvU7vPFCEpTxU5LoYyzLkcp58EL",
  "key2": "4JBvuTAP7Pt5M5KVJDabgtz28fPxKhSKfzxo54oDyAnXcUyY2QxjgiBy7T9AfMUWynESRCDho3otj7uysQx2Ekt6",
  "key3": "3wU6RMk8AHJZ3AUsiJeMV8Jp51gixKZHu9gAJo3Mq1RBuFeCFanrzWRDTRraBjpP5YceQeXSX7rNo1XLdkGReCCH",
  "key4": "37cAaYhzpZxDvzysKRReYGQVYZqLMyPcuhFPkfVtjyp5EBrqKGUz9LEVPAYabQE471TnFwzQvboUVvcb1YtJPGg9",
  "key5": "LX8rE2TiKDctr69PDNdXrDXxaY3W9qn4APK8LkD3E8cx6C1j3yDL99u64rW4d3YVMqb25RnDzUHgLhRDMTLK54g",
  "key6": "3bbhkw8avQ5kfjdBXSqaByE8tpXKnnNNdWDL38Hjp9DZPy2AahLk5jq1HQkCSm9RiegYyBRQdgQdPM8pyLQaVzpU",
  "key7": "4XytScjyE2Zyc2WX3r1tidcxG3bYhGJxHdC5Z5aLj6XXweBHx18cLMJGJWNZp9KwTDMM4YjzeaFZ4qxDXddRhWJg",
  "key8": "54gDY8GmtTr9ApGkW62v8cGrze4nWCbxpN635v5S2tDcLBAi3BzuSeLeoJgr65b8bE9VNznUTfiHkgf3L3JBJBUj",
  "key9": "5xMPAkukiQKLS9SNqpCVPzWdmgKecf3bqyk8FjuUqrDfBxxuAuiqBDgWLTSYzuF1R21ob6xxg2fJNvgsynPRoskJ",
  "key10": "fjL5fWzZPTWYhPMUW6XSHHof7SEYsw82uwDvyw1giBeRyEqNMMPgTXDTocadmF5ysrU71bSWGn4YdPZcLxSMHhm",
  "key11": "2eWCi5RT2atXJ9bth942y4xdUrjhZZeqKm1r5mfAXngjbYC9DCPsEPYSb2GK5vsMLfWhURPJeKais6aABFtqYtgN",
  "key12": "3811ZeoaDL9yWTrBpNkNiwGrah7soAxgN5j7x4HNnZBrX2cFhCH84Ax2S3Cjkg2ZVGjeY8QVrj7pKhdpgPKaB1Hu",
  "key13": "5qcfMJRMS11YjjMw4RR1RLXRXv27q5YjyQ4AcLV2xSahobYS4tZKdoBVo7DxArSLbV8deBGDvCH7ADnB7AcbvJtn",
  "key14": "39VXdCfCDxWuJq9MzufnSSNCDvPtqNKDWzeDxXj5yaGQ4JBbW2Wv8S5By8ZGmibD7qTdZTJpdBBtGpTEfush3PV8",
  "key15": "5uGxKZBnyyrdVtL4rpmn9y9U5YgXFP3ZQJozcSbGkaszqDh5eNC7kX2p65zD7A9YALaT2GBD7ukdYz7Qhpj3AkPr",
  "key16": "33hAzyYk4JMRejdS5gVtbtrF9pdEndgBPEeTryt6TZNLx4gXADSGEUNVihg78msVf32tgFKbM2cKDdE8n5HKKyCZ",
  "key17": "RYVxSenE9P5QqTmz5dvG37G6jduqVAHnAYykzc1jdP4A3NCFoaHP58MXfdwwyxkGNzfaLsb7nMAKwKYKZ1hq9Nr",
  "key18": "32ZmkyGQGFUNvYnJeGe5j5Vo6TfgRF6NgHpzWG7fnXDd6Gn2FBh4G4hmkZzTvTsN5S8b9VHDYdPrijDHc7Tp4wyp",
  "key19": "en1wPZYZH8XaKJJrLNwbTi1rhcewqqmfcZY9No1sN57s2KighTcHj4BnFBgbFz6Zi6XgRpAEz5tzkfs6F6Epnnc",
  "key20": "52rjwzGY3BTX9vdYNTe2mChxyWT4kpVxckteu8nAYhbXNvbwoc8myH1zJhgcJ3w4MzGsijQPNmxwdbj5ZtEHVzFZ",
  "key21": "5rNd7uGMV2gqtpRsKff3Ce6dREkZRGRaqK59SD4aTrHehB1xC3bFUQ8Feump4iRppcHHvJyzJzJhesDKGZWdd8C8",
  "key22": "2g42hCAL8bhZExCYQsX7QkEmdeeRd9PCaMhWXwDSqK34E65zxBsaDVW9zA12aqDtnC9jYSGtnuxrD4D4zH3ZMgRq",
  "key23": "5igkNHwzovQRixbQegokKTuzh2GiGTyL1tfnE4xpKHFwT7TafbmrzfqNxTmePpcm2QJUCuo5cyTqzxbZQK8hKkFN",
  "key24": "4Bmc4RxMpBDTP5xh1opgcVqPodw1uYStwKT1RRyWm39CptsDbkQdQbvW7UzTz5Wz9WGtcXXUo46jQBL4Cb8kxJBQ",
  "key25": "HMGho6XF2TF2ybXaaeDjnSAFN2oLKNtDE8MwG7Z6RvRGVGhmyCCYUrDkcEz8NkGfmce7VxkTYjj3EPtwm74rtu4",
  "key26": "4Lh7U8JJjqYFrZXACTcsaJfCC3HqN195r1VzbTDTZkfxUqmu9iAuwgpZNP3Lwybee5DaubVvQuGQ57mGL2SUJvxL",
  "key27": "5x2extNTpYgXC9mTkXdiRFTgPDNpfJCXcnxN9g6g7kyDEuCG36DcAt89MTxK8VXLx82qmCsVRaGpMqGx3wZCFiiC",
  "key28": "2BwAxEye54k8b2J8bfBMDbhWUBSGav8DAJKaTTVQh3CQ74K8obvnRQYxDgyS64r6bqkaJqYK9x1PuLPoNYyd3Cfp",
  "key29": "FdY1a4tAz7ycLuiX5DTpk4CGe7GnnUGQVNmGqhkTH4cyz27AceQEbfAQJmZp6CrvmZbgiZHX9FmAScJCKoNtWP1",
  "key30": "cSQjcXxD172ciAZYLsVTBpW3mE7Jo1VbC5Q7An1AovZM75LG2ViqaUTHRiMQUQdMhV1HesszZxBn1G2P4hUrkn7",
  "key31": "fXLUAfEB2M2TbEbUkfy1zR11mkgXCZRiTqcsRXsm7o8tCdX5DceTcvhBCVHRUhg33rJamxfEpqErZM6gz72qsXr",
  "key32": "4kdB4djz9cRpoHoBpCbggSSkywcukgicriEM3aUVoU8hiiuRnogyhAG5N9LhcxTUV9EfSopSG4R851CrUZwFGfN9",
  "key33": "Sk75b1v4gx9ftYLa3JsJyWiL9BMqRioZ29N5h6gGT9AYgx1W3PCH5e7mvCPdrRSRWjVciqTXiyByH11RHcJ1mjM"
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
