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
    "4NKnbLh8nHhhQXybvDDo1AsaLWkPyQuepErBm7596tW9PMUxH9RBmqdANUqBf43kUX8VAJvWCDuUNRPbzfongtFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wTBpQEgV3UVwBxYANghjDUFWFHdigKuoDkxPNApLA3kgwoU4Xdgnm2Y9gCsFAg4Ygzt1kcDbyFBcnanGLbPx1iP",
  "key1": "4nfZwyJxDK6xCDzEUD5vLe8hY8ooaNvNR55JWtPCq84pjFQJFP1weW7fMq9dmv18c3FkabqQJH3jdw7229KJebwa",
  "key2": "2crd414c7GYfprKYGejLtrHE2dc2XXpaVtwnp22zYX4NrRyVRTmCHkgAGjaCeZDzxSfWM5KbZ2uW2Wsu9g3T1okD",
  "key3": "2sGAaMEG8pGNmxom8Ym1vFfkVrf5Aqf9e8KJxJz57Cz6m9Fc1NBgqsfhd4mybmY6MLgrnnxzF2azGzwtQWsa2z7q",
  "key4": "cfVEYhik5AssuzicXDdfjXb5v2qsfw6n94KMZEjKNmzvKRvTpLuutBqB37VvTL9ky3za6W6rKe9udT2eJQ3jj1m",
  "key5": "fA4uESMdZXsC6J92Emjy6VthjgJ7X8nEQnedRtSttjYRR8DqoatfZT38MfiiW8XgccJDF3gjadpKvGyLaM3smS3",
  "key6": "5Uhe7qUiLbSdJDp6Pr7MjJb5Xf1fkv5X46LyEsrEZvzubsH3VPBg159pMoVo7brqdModDKc7SdWN2gaW2pUqzLYA",
  "key7": "26LJZcmKQExJPTVV46Vjkn1UKXXhNH6KPD2awrExTDgVHvphAmtcHUGMbqxFRJGjwq3mjzoxgVYkuDUXVvuDHCUz",
  "key8": "5FVWmaGRLMXDXtV7Tmec875S1j9MZcPQoqXa4eGY35mVhDKqnW45q2rsbgPd3UeC1aqGxh4ic35Y78YjXmeyjWK2",
  "key9": "3GvcNGZnjDN37RyuhSbLgmqiYUZuN49Qw58M2dqi5kNfrCi3GqiEdwdt8C2HWMv9jYDSZX9jqQAJvtUoarXUPuCt",
  "key10": "wA7hcFMGTdpacQCVDqhFBMX2UdF9xLmaCp523w4uYYYapYiiUZXfikFXhhUgbejpep3uX5cWkL6iAfmdQtuWCNq",
  "key11": "5Xje9edAxEW8QfR48b1VwXfYwAfPDT7KGxgo2d1qHsVBvGAqWRpAxZVdX16ktFPMJCa7u78raLhqrXGVQVJ6UMux",
  "key12": "3SgiynxTsVpn936NrYekn4UeiX9z8hByx18ZSkD5HuoY11ehAByh1px2PdFPicdhG489JAGsmeV36Xb5teaZeP92",
  "key13": "2YCEwH2QUVnYFHgZuAHkaZzk55CxCDNr94S3Fzdg9RHESwR83wQY8uT6h4LMvby4MbGK8grvzKKSDhgCpDvvf7Hc",
  "key14": "24CV3jouxiLoBsqGMPSTFjK89dFN2S9KDJZ24R3hQdU1VWYunCEaD4Je16k4cD3S5oknoxiJaqgnmUuGQt1MhoVs",
  "key15": "5FvJbKi58V5qEW2kdeAdEk7nRwuB1aNJoMZQPCPz5vHKG3QvzPUZQACsK1HCHENLgGgVGi9a91YosLrDBir4MqXa",
  "key16": "rFcjUUFGbrxvBsvARsiV1FNcwHf91xAXRuc2Bynr7sEagnG4TtJfB1pXLG9H21RsTs1YrLwGMppwhwqwQM6a2AZ",
  "key17": "9yA2Nzg1N6eAyQPjqnfSoYT9AaJuEPzYi1Hf8EYdpCrX3LCP5xyAW7mhgZGDSp7RosSbv8q8ypdBmSmphQ1XsRw",
  "key18": "5AxZkc3BpFHaBw7H9Ly6hgVW8QoKKk7eYrcqjXGN2QqtwXLiRLWE1qYJ6vtPcYbdfskhGaT5sY1iZqazyEA66L3b",
  "key19": "3aAJHjuihMErWQRzjQMQSsWBuArjmgVnBP1AVmGkUC7rmzRpVZfKz8NGBjri2mHUWAhVsLYeDiqBr7HaUPtnQDZY",
  "key20": "MA9s1R3t62h8F7ZF4ALgRSaq8RGr7HB18sBvH56H5drQK5mk37QLRJsJiKBnBhevnVrPtp6hcP58ou7iBfKDh7f",
  "key21": "zBFP62GxjCSa4epaNsgX8tvrmcuc6k89iwixcUxQCtya2a4FouSUQCDEA1J8BA1YAhUEBX8boL8zfW4RhkCx8D1",
  "key22": "8737VLWLaSWatDAXCbvv7YuVqgoHdBpFj54UXwPjqFA5YJqKWG8gHH79S6kBhxS6MywoALnio99192Daf4PoNcj",
  "key23": "5tZT9i8nwR2np4azThbkjoqJWWUawRuK6MKkVqUuHMkNHn5bo6LQsXm1LZrsUpvg7tScG5cDyCXEWJ6UcPkX2qFm",
  "key24": "5k7NZmETXiY4QJd9zJMMtG7GfKYtWpFwfana3rSQUwZErn7czoQ78TXstFp2cSRduVxHmD6nKR8JLG7dFcrXDrAs",
  "key25": "2HW7V1qi4x4nakukRdZJF2HpYRm6hAaJUzcw6haUpgYngRYgd91DNKAVXJyBe5Aou8hbkLqiqiUrozf7Rq9RCnMd",
  "key26": "4mBrJCq7UdPowXokVmi1nqFUEZWKXEgzGLXNx7Fziun3ECfaNFA8B3jjPPrNRdpYV8c3y8J7J3LKZ8G1TZamt761",
  "key27": "3SuKZF8mx95vW3Wq4wPbNDD3rYy5JnfDGLv6DNcKC9qC6zYATB3XZGpiwSkUsU2FXwuwpgekxfJ3F9kwJMH4TZ6F"
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
