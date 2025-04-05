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
    "AWdribxjP1zYZat5769DJimUgKKZ51fAsV7mBkiL79ZGQPitXuDnkVHFHN8PEfxsXftT2xZQWzcyBm5fGLL6bE3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QqmdvB9AS5q9NNtmEJSos7Uc8Gs2wVztjiDTVV8zvsaVummD8q2r82DAGhrQ4qCwPMQD8UQyca4zjYiMXK9e6xY",
  "key1": "7HxXWmggVTCN976ibeJrRHg6JKwYND69GquCzNiRN6FRYxmGygEYn3jzad2nRR98oNWwr3EfTPmEka8U5Q174yC",
  "key2": "58LEVu5EC9XAvCBwfjMbxMJvERNJE15QuXoa86wuwDyvs8in7ojGUhAkzgnNrCm4Ff9hU74AGG7cyeVr2firnow4",
  "key3": "wExyuAFT3FK4hwqLiVJyh61NwcRSFmQzPTLaS6nkvMkqSxZwRRTg8PedT6yVtXNM5YQFRXz5jSiE1c585tYdbyA",
  "key4": "2mNyifMYbKzVuchLZGyrCddx1yA8fReLNC3favic1fcS6wBBkcDtyqmH9QuBNfmnfUMW9EwG7PaimJ6vs6L8uXCh",
  "key5": "3t3K7KrkDRjdGEjsU9Upnj2v7h175LyUGLdpVkKsSYSmeAYFUypfykVHMpXyYMd6dJCP8uzCpN6yqyTG41g8cxAu",
  "key6": "3HiFhsvFafRcnFsq5iX7UQ2fB7NzkzsA13mJzMM3G21x1pUPK5BjLqkG23T8zFk9XkBD4f1EaKPaGQxhPHR6JYru",
  "key7": "o3MNUAFpZqTwQpsHtPgginKEbHTwCPNsooUtkFEZZTnT3R4pqu6G6dWscCfDYLPAWJyrnVAnCKrvXEsSdU96nLj",
  "key8": "3LJZTS8fSnaNH4TwSxMdiFXeTCJ7AwcNab1u2iD7vS1Gs2ny2gXtZuwC5nbL1Svx86rMkMMg438q55gq5EBc68vD",
  "key9": "5Ye41ay8axp3uBN2PkLj3ncfUHBECBDnFG3dbBwapVpSDWHbybttstnrXahYhXdnGCqR6S9qQNXtTbxwqcdoQ6jK",
  "key10": "3FmjEDWmSQseNBoZmtU8nJ6CjrzVFwqLHGQzqD5BES4LbUU68RiEc12A7v2Gpy9WjKCcbJvhym2kzYKztN915spN",
  "key11": "4nLPN7w4ZjwBWp8TGp5vHMT9vwnLeP2PcxeDyUy6ejSDhuDtfpthqbGnCBettaMpjDobmGH2DTsG8Ee8dAq8LMM4",
  "key12": "3KoVAdDLybFojY85J79GfRT7u1TnKsSomtfEhw31GaNcEUfKgRf1H3Q9fs2b6HGeSRUpQQxZekV2pq2DBtpRtMgb",
  "key13": "3FDXYwtjZ919XpsYiV2zFRYXrKNSiFv3C7TEkgueWBijkRS4MNPxpkbY4vSSijzzrCVtUx4fWDtyKnwzBpyXzFRf",
  "key14": "5WJ1Z2NvmeKXuiwV3hCq51PU5Mkuo89CKZhu758comyypjpKdux1nyk1twS6WUQZHTQe55Ep4rX9PdVNwj3nhbSJ",
  "key15": "38PYbv9q39oE3Y9rVkyxBhghytpAH1ytqm5HSS2ZoVLUbo7TsrGekAgYB63Dshf96mnVZnmJ9KpcLJNAKvieAiAN",
  "key16": "5ieFyAmCqJnukSD4sts5JcdoqqiVuVihViah57eejxiLZfPoSCiTEJUtCPGU9j1PWkUyhRwpPC3fdxvRE6dRRoS9",
  "key17": "3yh2xa54HJCsDnGevvfea2U1Cn84MaeNGTEsY4AZbRn4cBR2YiGXdhioHX9E7AzV87oZ9NUiDdQcmNvm5kwvtLCC",
  "key18": "5vkMmN5B8y4GWWDLURj8mHxzSWLSLruCuyPpZSRTEvUZ5NxVWdyqzrN3mJGNUyFWvDaswvJhmxuHPmmSNrWK9xZ2",
  "key19": "3cJuWsUc2HkF3oMVnoy1MwucZAvUQ9Wt85YovmR5NuRbwzYSHCb1A8Y7UYwKJtA7RD9iexCyRAC5dDidYwrgpoZr",
  "key20": "3NhLbV8VXGnrs27yqqMTcp1Dtz8DefEb1snopeEw7Wgw4dF3jMj364m92nL6ztUHZqj7Uf9z6oKMUd86qgpTu873",
  "key21": "4WHrJAaRHXKvdoBoPoUzPxp1EFxEJiLsg171wuCwxMND4u2X1z1Y3bZabFJ7XxR6e8nuX3sqdg29YLQQvFd2JzXV",
  "key22": "5ct2zbXuissVdE9WkgCACmcD4vK5qu4yMQeJY9EpxqGq9R6R9MbrpYw6nbfENqvnJchvRDgDK79FhGcgj7DZgKfE",
  "key23": "51MgcYvkdxsUzZ44eAJny2Tw8EcDtRGLXScwuFv9DFWT65k4gPdcxct73VmrSndn9LXyg4cup7xgA5TneWjvLcrC",
  "key24": "2jcENHKSfJrBeQD7Dpw9RE3LinVniHbgvxsn3PgogQCHsZEbyrr6jbbtqwvTfa2aeWmCLxyGUxcFbvzapua2vKvr",
  "key25": "3Ab3HG2Js6fxMx7NQi438aS8kNxD6VxHxyZhgig794zj4oqzYnzw85gdX6rFbTg2aoJRgLW9xhfyZvKswMtqs9ve",
  "key26": "5CaScrHnYMJLqjBwnRwKfRk1H68SxLdZHwg5QAzhsReyFchXAaQ3qV74ft2EXx6TgMSrY5MZfBzD63mb1QS62Qjo",
  "key27": "3i291yrERaAP5PKLLEzPfQYpGXPNz54p9U8zzyDPr4n3jRWZcDNvyw6zHgN9VqMX7E9atri1DxvEzapbHGYD3txY",
  "key28": "TFWSsipMrk6DnkTtHFJuvT9NfXr9wyDL8A61mPULrfUv7T7scA6KzwczcPhU3Dc1YXyvXuBftVgoYaQ7duJ7She",
  "key29": "4nsMtzCP3GYsHMHwx77m2d8iS98wc8pbCTB7D9q7oktymoFyhNqfECnT2aYYqMjmitcrqVcV5RH3NiFWbdAySo9L",
  "key30": "2NZyZ1NCzDkGoKVdsrY6ZzpmJojxiAZ5SYcjKHK8jMGZMnQgYGuYRg3otaHT5Sy1vRbmK5JSEeqozNVRUHwHhaep",
  "key31": "5KnUpxU7awgALAy4jnrqESP697sVJi8RRqbWab5gHciL4JoCFNN84gC559HUXy92YaavfALh6iGFudYAGpSfnEXp",
  "key32": "31u2sWqE413b7GTP9sQWtTA5qsqJqhAF8oDHrWdFhtPe8MS4Q8uxhSveBnTU2doEnSHmgoTT8RZQwjh2RMjrMuZQ",
  "key33": "9fDrk3usuG5gyJvgoS9t5CgYvQjyNBNbcaqTd6fUCEKb9aKWCCdoW2JZozZpa6LaSHS8sdbvszz1HqAFzjBJ7eH",
  "key34": "3r1DCpTPTGwfit9Qt4HubCSgan8kR8zUQRAS1S59gvNUGMgccCe3Mhg99YnJUDGb9THxzwHCv36Y8DN8gGitfdXd",
  "key35": "2PzFUW6fdATmfkb989Z3q7XcXA3iooBo8D23Kmq5uhZra6WWU6e1KzdVSyhSNHNnAke1PUdQnEcsbEveSgCLV2k3",
  "key36": "46m3fNxDedUYzfaNZw258mD3PXJmLW3L8CqCxwqNfDLD7kg2MdfbN8kETGYrqUxC3dwSDVmZSgL2rVDy4VaekKk5",
  "key37": "5s7JwtBV2GuHQVpNb7r132ERxTuneaTUVGJithYjqnBGvV5hdzXndZAkb1ucLqtn9z3hq1udWUMvV42PvBFZm2YK",
  "key38": "4ZCsxWrfaTE2WPPh3aQfhwTrjLEyDjj48LVDddb5xrQoHdmmDLxYzKtAbywmMqUd3G1ZRH5trj9WCgsF5Zbaz77d"
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
