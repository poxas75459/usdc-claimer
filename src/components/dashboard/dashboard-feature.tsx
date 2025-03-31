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
    "5A26jGPAKiXQbyiBWUBhUyiTfgwQJ2VG7BnFr7oWZA9egw9jD1DfytBZDEEYapKZQkzEW6DmD9k93rMVdALkLweg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47j1MdFD3HfH6iYCVmnJENSwFDadM36yiboDmHvdd7F5siucfnQudpDPh3Ti8aMXzG6efJtpRPpkkA212Mp6312o",
  "key1": "WmvjgSLwi2QKXQQTAPTeJKpTrLisTxpZu7xHjtMAmacQetDau1MPvMaajZL5s17fPJrJP15BgbNkQNm81DowqGL",
  "key2": "27STosxyysQEpKP1PoPMNuVQZrj4SkVt8qDCJjFE4aSVXQ11LpJe7jNZTmaAdkg7etUu5RBVozXdMLzKvLLvccj8",
  "key3": "3AVvEta3mXawJuhnr7XwXDuZvFV5DR5DhYEDPUJCoZzLTpps57pwZPxxt3n9sHRXbuEgP7X9cLPZdT8nNP4YyG2n",
  "key4": "4nBaWRGdgDinuG5Zpa4zxKp36TzCRw8k9xypbKyePPvnCMNvPa3JqCFJLcixD86noo139jSWCTAgxJ5KoUsxxENc",
  "key5": "5pHnWfdg9NRVzSs6riuAUXpgHuBoEXjbNXPq84qpyUcxVQMGJ2Vaf2mc9dqWhAca5DqJx4kGB96bzLpJbyv2mL3u",
  "key6": "377LhSimMAm82GXxENmbL9YQD5e4cVJx1LSYZ8kxMmm8KHGohxFTnme6PMgBHDzhxxYCCVt8zzLLccEQPxqRnUnu",
  "key7": "4d9EP6teVcpjNEe15kLyTU7bC21fCi3JZEVfyiifCKjKk2zWnYKvCsmMWWaf5VRPKVGVCvVsRnVrjbU7XVtJFES2",
  "key8": "3nQAPuTok5B9C8vsXheYxkhVaE3BuXj8pLLqKNaB1VN1WAJj8ssrJnEYaf54WnnB1raCG8ECj87dmbmLD4LrQ6mE",
  "key9": "5fbGCGyomNBU8WFgpHkW7o8vKXbdEXRH4Kx1DaLkg5VGS7ZuzW6DkLdpA6vpnWfNRkqpB1GurMTNQ6GVAku3z9v6",
  "key10": "2ngRSV6YKhqvAKTXjv1YprNkckjFzA9bkwJm3DSmviRFBuKfiV2eqQPhSRgsnLfiPzUTczLfKFzgtvZm1bKYmGv",
  "key11": "39XbebPUkQbDu1XpM51p6rqh3pqsaFiKaKVRPyKffaXKrbev5vr2xDJipFWjAVrDiTvfiLkHNf2VBMPWb4og1q2e",
  "key12": "24mU4L4c5XgvYJR61doJRU25fcp1xSE59jNdXGcvTvLmF8spjAZ9TfEgGjG5opUwsNXBxmG1pkA9URU1AMwcwZ9x",
  "key13": "3hUM2rsYqX3gxr1wmiq4jfengKHESJ7hKatK48z8ceavFnujbWcVMofE7GJBJvFVgZZwKpGBBjiorbdpNkdiKCcg",
  "key14": "4uEK2tGDpXf5QWWEgAdPQn5hmRX4TX1NfLAsCfq7cXiZw1otYv15pLEgm6o5fhYUNA4QimrQHS6ai4jHgVoJ9RcW",
  "key15": "52JXycCaoNuBiNf45RLRcqP9aTMiy6whHCbQe1Bx9zyhPxBM6KroWaY1uYpVRCHKP8Qgnu15wbbxD8wPtdE2o4kj",
  "key16": "3hyJVjTXGj77hVkX7aLW7X5h8ksVKrd7aKbmM2pyzCWoeG5xV5qVd54HMvwfSpqijbJ7j1m8PPHDa8rHgGgenbGV",
  "key17": "RX2eGAhZPUkxuByycvD4RWadC8Rq6d4zBHJv2bg5q6yT9dE74vqLC2xZgf5KsnxWezrmr1p1FFx5ya6FVJsmMKJ",
  "key18": "5eUAhew6pUERDoAhzi8DRtTDBVtb1XMynvLzERar8xeQFeV4BqRvg62w3ZsrFmW1VqcXbEUuGv3XdL5FmGVTgkce",
  "key19": "4dnbVYRE2otor1WA8QPE46oarVVVt8pp6LKps9r3bAE5msG3pQ9DxY5QnhtXZg2ZnsrgeUyKocDiMFUBHMWJvK4S",
  "key20": "51xGSdXF8UyDDxTLZAGZqbhj88ZB4s1JcHAVC2S4ezqC2xVU4skfvXEro2jkF3atnHUuN2nyUyZpANwqjVYhQPFc",
  "key21": "6odNfCpTApHDfwr6jN8JxLCXYJnL38Y6NnYzzvsPse9CTQpdXndeTAnwx6WFGYKWR4F1BHbYAzrBe7b7byVSc8x",
  "key22": "58SGAmtHTUSURwwj9YaV6sbvYS8K9nzFRBY9MjnE6WBCaQMVdSQXCBFehXr8RK4Z7H49QKbSKbQcAxLLAV2igrxN",
  "key23": "woY8CS76dHSWgQ3gBTVS4ydy8f3Ws3NZ4V6yjMMUPLCXM6EqjK8ozB3J275N6qXKHvxUTpD4tbNRqVJm4b2rZep",
  "key24": "JBeuH1ycYgKB2yeT9icXko3SoCHrnrSASGeYJfd7dMSfLQRb9j6XpnZjX11wUG79RWNYbDa7aNRY7VwkZkhGqtH",
  "key25": "5EaKDNuzhux7ANmuB8TKySs6tjfjVgd8QtjtQ5zBajGUCbKBcYYiG2NrgPzGiZtYkr54iNzdtWK3Eyw8MncShSfk",
  "key26": "PUYeM9jRhV5wWstewVAVbsTcFGwXDMFjthfcnCRjWLjwLjbAr4FF4o6n1wayj55p22cyFXV9PRNiPS8AeQ9aX5Z",
  "key27": "3Sa6fn8z85ydPwjgV5STHaTwktiVh51UeMPEjL4KznJBZBAjWRySvPUP9esrX1EfBJdKkSrCGM4JrJSm6cpGwKVG",
  "key28": "vvVbzXBj6ZPpJBY741vzFegiVZCiinMEZQhREkAHmUEaDkUg5RJXaXxAv4QnRUvcX3FM54bpxGDoTEny3GK8whE",
  "key29": "4cmntcmkAGrvPLS6JfqaEaqcyrs7VCCJP8n2cWbEfAGx13uYN1mgAs8J3LCvBhzcg1nyFqvtSWvCcrP3DD2V2tU7",
  "key30": "2yrukcSNWoLJey7gYsYoPFyGVeCFykk7rpWpb8Ctirqh13TUPLDtmPPCsx4bQctsVaGUTAPXsK4W6BmecWRFzHem"
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
