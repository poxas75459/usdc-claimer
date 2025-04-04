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
    "38P6v1EWTYCcWAKwauHgXSssMzAdzLDWFZPfMFaFvhP8XY696SCvqk8cXtuGSXF95wamaUCoaD7q66SwoYcWS9a1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CEGtDmFvWveYQGpqzWDgcfxqFnDWCmE3W9bfoXp2CHgmrwnydwGrJptTHGqN9VoX8x4MhGuKGTbnaa3wy7Wpf1G",
  "key1": "4qUMKJnZuGymbC6oNqVK4KKuad4DWR4ZonX3YXwe58Z91ZQNZbZrCM1x91jJkZEcHAputSEPt5mDQuZ3sof1GEW6",
  "key2": "2YXtCBZZ8inRn8JyjX8F6T4hW8A7JMB1QbUxSXeuU4umBLzoZZ7k2NQCzbc4RtggZ3HCAPP6sPgdSGgsbUH1oz6s",
  "key3": "3457WSVsErVHUpmFVsXAPhx91YaS9fvoTtjJMS39JaRzTs7hewBAoqpmJiKRiMKT8eN2WsLadG8Mbv6uvuc8imoP",
  "key4": "5PPRudoVuJbzY67cnjNBbJP1uNyXj2aZWuZwgD2VACvfuzNwiLcMxJwAkErwq72EJSGSBNE7w4TzVHGz5yG3yyWZ",
  "key5": "2Xf4ohrpK4JdTKZ2jDxuh3RMNGv55zadLWBhGNoVg4tabRQ4XarPK7tMMdDgWqXKXV1wd18Cjbrzvv5tJGccVmQm",
  "key6": "5jPP9MJFR1KQH7v5pSWh3KohPT4tvnwM8ajkapFrKogH9Rtg4CjTWbL3nApFio6SCEaoZBEToZieWKshk67yAPAr",
  "key7": "2kieQ1kXW9THXM1Q2nnicHTZKwzPvBy8Ru24uzrECZRavH5RCgm62V9aecn2QJ1hW1tewGZdy7t3JNXaxEbHCGL8",
  "key8": "5Sx33XVJn22y3hwCiwp3Uav6UwP8NchadVzav66XwrF7nUwjeCNXjzCbLmbC18wP6X7f6pvm7tRcEgZzxBSSkdQY",
  "key9": "3QaGe9uxysabchPUXuSbJ14gjuSSZXQEJnXdU5eSUCEkPuymJKd1uFnkNDw4AJ578AxEJfQqPVxfsnos3BCxUb3d",
  "key10": "4hcj8K8owhcwNNFQeff8bUD2An6k3jrGq63qbWiFgKBbgaF4qxbcKG9iJCK9m91G9SQZ3Nb6eF89E1dp7tQ1aJnu",
  "key11": "F6oCt4fesSRqo6PiDPwxUAa49gMarFfJNoKtPP6ozUJH9FGqquBp8TQADD8fNxbMCzDFMoTtPD6eXcSC2mUUF8Y",
  "key12": "2fN5T9e79AkDwhXtcGWRh9g7bjjLBeEbC9bcebNCCzLV9PJ8uCpv3mpwktrsj9dsxegaSRP2SQP1qoc6SftApzBK",
  "key13": "2wVoqsQZhN9XFyMpf7KXaLNb7Eus6yUiTK72qPwJ28XCa8NZTLAy2CA44i6Fdf5bM3jzFZVnshmTqKvPij5yF5V2",
  "key14": "5h45dWjAdSRRHbxhvj2Nhybd1QCBDqcrm7MrDBiE9m1fhig8HE8hDPay6oAqmtdYX7Vo3kWUnKLVrx6e7FnaMszr",
  "key15": "4rZTXbnVzp7VzrSMsnJDbxGfd7GmTUfhY2xbqEaX6dEQ5bbjCGitQmu6z6sYWUqu7FvwhZchhctp2r4wpNtuWNcQ",
  "key16": "2KHYYDqhAKTAHS7mntmHgbQexpP6C2iFeu7guQPxmDzkGZFnsJ2Eo29NCBFHrz1BJWMQqxGWb7SmadeRotxtZHKx",
  "key17": "641HYTSvA28w5sHLYUaLnHJvYuX6JUrZ5dbNX86YBZTfhAEsN5wUeFraTzshquyGLhuDFuQMPb46v7ecWoxm9TvJ",
  "key18": "5i58QjNdZ4vkF1JRwWLojN69uyhRAvpkNc1dNUav39jQfqbFVKiA1zDrKnFzqpxDcLnvKE9YiWU7Xr765tNs1Epx",
  "key19": "4bv1Ey6bx27KuijCjMivcUnfkinbdjTUYv1C454Kujhbu8bi33WVSpEPNPKJx6tMiDyyNTdFDGdfsj2fNEmVCmwY",
  "key20": "3QP7wybAs5aHqNab2mVCiaVm3BXd9H8hXSEeo94fmk3gcwshrTovUroJ1TndaAEJE6cGhvb773cjT9hyqPUZbtkU",
  "key21": "5ivFr7PkK8XMzcY6UG7Zc7LMXegqzxMiWVMJ8kqT3zGB7LruwHTiECACKpraS6jswsK3VDe93HyqRaDx6C6q4BAV",
  "key22": "QhKbEsgSHJdwXMDhofReWkeN3rNi7BDPxtrsRr8km3kwZHRLfNHBhtSnZQjVpKtqvfWdJcrYZEcoG85sDTBhGCA",
  "key23": "c2bY3uRXSGXwG8uk7ScEQzGAMMsnbYsUmhoHnvVzgnMFtz35sLS9iWgcj45CPSzw9q2nm39yn2Gy5yJ96zJTrEs",
  "key24": "3SUxg7hyZ32hhTMYVLddEAH8ft7kYrvPfSGAHrAigob7abc5dnB3xF5FycdKYaLbTMqqjv2AgRVwbZVHz4yU41uj",
  "key25": "sk2ohkNDCTmKTktSTSEW9gNqNAovaztw5XaQFMRTLZ2RME8qQFNBkHXvnCkjVHuSkWSooQK1rtdWfQsgv82ynxn",
  "key26": "2YHL2bbBS2dkDBXGYUL9XEgH7D48KdtVgJmaYuGedubmMnHA4VBqD1zNsFhvQMkeHv5mFE3ju68KECHMnA7kf2Nc",
  "key27": "3p6UQccfw1Xi76oaMXDxnfKh1AXXPADWa71moGcLaMowBqiLEsNzYLYChjnGbAcTmfgNZ4oU5K73NG8uXQN3mQat",
  "key28": "NZbMsaV1Mw8HPGiCpCBgLriNDGBT8UQjQRMEyJzUddNmhRzvDKBpbrMNkPoTAiggJTv4g7oqenxSGfDZv6MHSaW",
  "key29": "5wJeogV6ze5Xi8ZsCMRwQYW8sANTaMsRSfBHRYX8f2jvuJ8NRT6eRU5XvZ8bPS86VcpgxScfKorQ4LQM8ASWo9Ks",
  "key30": "2x3Ps1yxe2CPeqf5XE3i7v2H32muZuJiZZwHnrfMNCTC1hwutxYcbmHinMt5tVC5Y8Qy92JpcUUKTP3pNu7ZjB9T"
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
