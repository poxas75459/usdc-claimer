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
    "E9wdKQBt8hqZJRp6hpHrv2EgdFhuKC8dFEVC7roFwRL51gb1UeqGFLhyHzRoxK37nhP7tjtwW8ivuiqq8HAsmDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CAVibWrsUBh8UVuEbMwyxvYExepprCFBtrTpADRzja4rZ4K8qrS5YSHrKq8KGZ1BwjUUtUSdrNPPMrMQkCtwXLc",
  "key1": "23cL6MNtWYm4NJ5gL2PbQFVTFyWhTB3TDmB4LPXMkzUU5a1x6yrEDpXJmLtZSKXFgzdEt5GZCktAvXtmicSTSmGw",
  "key2": "4hdiwyvfDbU8Y4DAjh3sRKdbERiuTHdXYF26tJJgYujXoQ8EuKz5YWvesJdSRb1FU9rtnqSM1ifV4AtRuhocHc4R",
  "key3": "64DCg5MdeyfWfh5d4VBj6W6UnTJsAgZriSe8ZWYq7Eho4pLuR1UGZxhuFtgy3GvDsBqjvW993peKCmDhBPuABifp",
  "key4": "5BHh4HwHqpWnJ9T2JCVdLekpcUnyuE2MPkGJuzSkdGZNcDkMVLAb3bGuRpu7vUasXaQirTgfYYF6en3ywa5RfG1A",
  "key5": "2xazmQAg24M9fXZj3dFjasHmfGDgFwfAQhdk93MqU8dxLnLLCSuWcGcAad6HgcoPhifg5vhoP39a9S5tvAtD3pxg",
  "key6": "5JMY2KmeRVnufnRSZe8v3rBEtA8FK64JBE6FQ9EhqsYukW66j6FZMjWhaWVgAEXnQCsrVYXomeb8SmgW3xESorGo",
  "key7": "48wqGmKNujdAhoSSobaVfAJbdwV3q9agGU27TawgK6YyaTdp2k8CjdFu6By6kD92PfH8zfLGojaQSw1zPecZd1UT",
  "key8": "2YgkDpDdhQYLkLVbmjU1BK5Udar4owkABM6xomwURXyHRDax3WQX3i9QhxRn97d3dyMftgGh6bYzvDyhG2CzuNfn",
  "key9": "dRsZ8JXFADEYVGpkjSFPJjJpwuGXvggYsjzsc3TZ3RehUijusMWg6QqrQZL2i3E3NLiviRVmqFcvJkV3HoUwYTN",
  "key10": "2mQoxYEfG7hJxv3uuRwgR4RPVJSUDUcHkXZKiWFQQfYSnnxz17vjRVLkKQ9WEhVisPC53NKHAEjTzeRfFn7d8ET6",
  "key11": "3BvitfVYNP9iVAN95GFKJUCUNuSS3SkTcKLVTvYiMSQzAxcLDDFr9boV4rhEJbcSU4YL6F3KD7WqVA68QSwG3PnM",
  "key12": "3saEPHPgAThf1wC1vPpZcHqK3nFrfgxYtZa6rsTJ9MGuegEKa3N5own3DGveYQYrc4z2mKddNDKmCE75r5LwXM6T",
  "key13": "2rNsC4xouyXqWVnSAw7ucjTo3u9u87imeZiQV33ZrenX7f9Exdtk8tu8tf5dM78KfgUwUsoxLJsYgCzYF9XiZ6Ut",
  "key14": "4U68xmQCiwJNmN8DsofpM6Am4P7gNTUfVPzFW89qPNh4nhdwMaUvG6qGxj88ydYhHz9XnbJNtn4j24SLz3mJM4oj",
  "key15": "4yReaiL73KwNKkfeMCPoUNNZVTw7yUY1GxFrg8gwL3jraknLVhgCf1XCv3g486dQrYY7JEthBjRSbydk76xvf2my",
  "key16": "ExhPRTsyQczmBzruoq6Ht9M4ur4x8ei1KYCeL6kBGMzfvGXJX5ufY72SNav3ViP1z8xVkU3hV8c3c2YyVW3bvt7",
  "key17": "2kDDLDRYAgNEuRuVpomzXfkX1ywpKkZttbfeGa6CLEVeazMyrToVRamybtJUHSC1sQyMjj31gLZcsCUNAbHVj6FQ",
  "key18": "3H6L2hxr3gmV1Xs8py4wXJLVfsKp3GV7SFtQRrPF8E7x2frhRaCHcvHszYbXhCEthoFXnJ8BQ6DJdsiUm4q4UfYP",
  "key19": "2p62K3j1mg5LY4BTyf7h1LLbS2f92CuNcTrDRVXPTM5X4sAojPmPz9DUZFbGeAtykmsAobESjM6c4RjhFHvpDXKV",
  "key20": "4XKpA5Pu88EsC6ZYVkbedMCSkZ7KDLv2XrvsaGAxfTkcQdSeZZigYkVbaGEnNY1HwEfUjYVPKeWqC52VUqCj2ay9",
  "key21": "2kNuRewGTKqMesEpCyDphukqCujww2jacFviXVPM9py5EFjmFd6Ztu7MrpKjAqbUvvPBocvRtisT8QBPk38DxWUM",
  "key22": "4tzHza9cD6atsQQ2ZK8vnw3ApCPDLrTfWrc7ay22uQy5dpPAXzTUJuRNXe14g68owbSfojBDmosgv1ZPVwdyanSJ",
  "key23": "uKsedTXWuMiqePxvef9UWmH9JENDGcgjihPekkHdRxoqn2XT8Uv4m79PQqZdaFjmSJyXftAbAQko9BZPHJqWjyK",
  "key24": "NY8AXWYyLyLRQXKf8x2tmjVoSZHnhJ1JsbMQ4GjfDWyxvbdVMNj8AMrqoGpVytAyUJPomtWxHiYjttnZmEaFnKT",
  "key25": "5geagmXfNmWprVofvBF69q6fBfpD4R3xeWreLaJuiuhCE3Vux3EQ3DqVXYRYUc5DFDWDYLZ1EN3KmhYtzBhbfUUx"
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
