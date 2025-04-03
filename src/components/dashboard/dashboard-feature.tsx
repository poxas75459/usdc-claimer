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
    "54X7MRAGdPnsnZe5xX3bo1SXLxfMaPwZczzs14WGfp9nfLhrmCwHp5YgMWFuH2Kkfbr4m4wuJPKoFysXPELiWxih"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Whp5mkX1swd1PxZif7bxpMk99tP7J4NgwDDVaTVc9CT3dX4JVqdLX9ij9jUF7tyaoNVEa7Tg49FiYgXZc6KYrcJ",
  "key1": "QC6tMVzBH1JC2o2Hs5et6bALfVkFZbw4Lxn2utUSXbjXRGbyjcwqpb5awYEebbEy9mNNkpRhn2qwChY5sKhD9ja",
  "key2": "46KuVnB58x43TT3wFBYmzGWEezTr3u4G7PmbJsLmPgqomEnzCaNsit49wHxZFngcKKpW56b74ddt6zytG7uKRsSo",
  "key3": "3AHWAiUg4gfnXxMG8CL1dfAthLoLdzCAkcuGTecfESxMmjSYugUYM4vFSzh3X7BsxN5ZdkLnTvyKttvAunsfCkBS",
  "key4": "44tPptBMVVCSDiFYNKSbarbp4suAg5Lt7szK2TCfTqrFXmPPTjRyLb8cqW7gHNGkKnfY3nXMMHrdYkEoUmKDfU9x",
  "key5": "2rfPcyx4mrdeq5aomnYDhQbEGaCbEvZid1ipZDyao6CCdSCjZPLcN92K4q2h6sYfpJ94CsY4VzxPVgSXqfSuAkfn",
  "key6": "32rNGq3dj93LiGLt3euc4FgvHTj51kp5UAyhqTj8Phc4LGxRkSB6M8K6Eg5vKZcEsNDfgi3KmbVsT7QBCaCGFLWs",
  "key7": "LWT9S54NdeiFQ2R5JQQgApYnVp6mroJT4GQZ3qvDXeQ4c8LFxoGJPv5WWiu9XX6quTXgMER8iwRhh2dGWoNEdBy",
  "key8": "3vk8eUkLgz2mkk3wxgREYeSuLgRB4J1YRD12z7kPnRHHERc2YaM66byHYTLPtsXRQQZzive6CUeDM1pbqBPQ768W",
  "key9": "xEi4pSdreXyyvBMgzNW7hMaj7snPhDA639TakTBgp2cbEB1ZaNTyQCZfoMgvjvwZ2TQX8Xv4uoPbC9wNaJKorzb",
  "key10": "2KvGuWqkeszPEQjd8ButzdEZaNDHh1B61YvDH7avRFKnwFMXp9y9Kqsw8g72uVukqKM2ZSYY4e5qHnucB9vs2uEo",
  "key11": "3JSzRqR8Cr5hVz2b1GaX85BtJuCh2uiQARq2CUuCsLqWPiqDqxhgG8uyFny8A5VsowPCqs3e5dgvAw166TF9vQ8a",
  "key12": "48nye24SGNESQCJ4GgLtPqEYjpmj72zcc6LdWnUmwXqGmnf5M9FL59W7ccY2csC36UN14k74NCYoZzipLmcj32uK",
  "key13": "2V3oL2svQuWnMySVJxN931UUVdHtsJZovDrLboXTT8p7pck922DLtqsWwwA6zyEHpvTxiozeg1VBP8kNozLSYzbG",
  "key14": "2qacegcfQX8c6a7HrqLRLKr1FQdhebN3nXZLe2Roz8j6YbzdqjzzKpF9dt7nvwzbUNQqknNKs7fXkeQ7XYJZ2evq",
  "key15": "4S51zV4kjfpj6XyRYq8mZh2gbbrDYz1uYW1Fu9ddXuQtxUqFKwNKg83PhwqPHFUhbBj2NHDwzNxLTpeKWMUCjCw4",
  "key16": "2GknPXjXHcpGBMjBgxZgWf5q6i3hj5XFqp8fX3DDxPDaoddDVwRL5TBes4j2oW3BYuQPjnLRBw4EsZXGtJfnH6f3",
  "key17": "ySv27giwREpcAC6dGS29hmXcuHR9k8m442pecQdXeBeVhM1cidEmCcPVttCkLsoav3paxRPkRxvZgRhEKbpvth8",
  "key18": "aifV7HuXN86D43An2m1KSmTw2vanc2hBFDwQQpCSCNytou8MB98PSKim8yxqEuBsPF48cBPv16qHrCHwbRty9iT",
  "key19": "4hTjF5itWdtSZZjinTEet9UB7WF4BCCjNox28YLDHwMpNLDWEUytjE121PTVYjoxneM4SjeDqZTCofTkK1FKnHoP",
  "key20": "PQvNfNYZ1v2s9n1gUtwuMYrm3WfYFwcxqYs3hnJL674ksx3SzgAYkUrWPtCLnBWQ9Zkhy4nwtFCy6PwR4TTfrCS",
  "key21": "4inrWX1xCFq4Bcu5u3yG94ze3pjufYvDGK11qXehhwnmfEF47Aqn9RXo5HDhiTRmPyAV7cg6L1C5woFyYumNSWWd",
  "key22": "2kkCteBsuv6SLy8Yk5vKjt1p5zDtd7VvTtKj3WTKNxhZczeim1hW5F2RUU7RVX8R8obyxDqB5PRiaHpCcTC1tfcS",
  "key23": "5DbogrPQbry3J7Ffx1BHRrZWMav4D7CFCkGcgEUeuRLP46gyTHpZeMsxiULSJGUJNbVdJ4uctcUm2jYHoVAhRxVD",
  "key24": "2e6sVmpiPXfhykD6wyuMn9fZx7FQ7roGDtUipM5ZTUQKCRbCWGXayDv9g1Nx6HbRNnztUHjm9vfQCZHvovGkx5DU",
  "key25": "EqDw1Vm3yaCgDt8Q6DXcfTezLp8TJoNcxALorzfvzkse2g7b4c7nmPoyff5vHExyy979hQw7v9xXbqxAWbkw9ae",
  "key26": "5rajAL2qzQomyaiXgo6sYvDxRaED7JAN4wE6oM83yNeFgbkPuUZt9pW46Uw29G2Nte2WQ7Vff57aDbom5UZghWPs",
  "key27": "3F6C3TMnZRTFt2gf4WgrLEpqVegAgBWtUgWmrELVPka3LcqqkYznm9fv5ebNFWXvvb5zu1c8b7kdEByDySzZrPN5",
  "key28": "2zWDub4ihQUFmSxhMAaR7HdWKAY66wNYcvU94aAvmqo6LBcCGBv5xvqf2AQjrCdiNqPvoZ81ZqfvJDSXgj5V9v9V"
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
