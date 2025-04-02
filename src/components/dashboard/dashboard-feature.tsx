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
    "5YgENXKMw15NBqPH8U21StGxc6FE6ByTByNg5HMz2fyff4fJ7QuTxHCvqNFeWjy1zBVRTogqKu2fqAcwyLdK7HLk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dLnxKr3S75WcCKEdzzdrUMTccC4NwX9ht2VgzSNW6qWKB3qYSwxFjcUiZq3w84QDeZLscbuVCAV6UKXjxHxGZ1E",
  "key1": "4SydjMivdPQZaJ72Cd4CydifZY6jYAv7vG3mDweuV6cJfXGrWHCfccM5Nt7xTz9nfd1aX37684tDMCPDGuUjb5LM",
  "key2": "2Mb3iXaogUcrwdCcqStcAtLJgCbcBqQBBQHBPnBcB3mxfD78sxE5FqjMJTcgrQrxzy8FGK6uxeo55Ee2SW9XLx54",
  "key3": "35H7H3FXhwMS7EdHniPtoUYFvK8Zxximma3DBBU35VNKpJRFjPAwy2sz9EFoJ5pPHEpK8aucdbYKJnUuEKps1GjZ",
  "key4": "2WoSWojdA769FcuhAHHEhA53rgCDDZdnCb7J78wchdSQ6NeRHo1xGfTcJuYMJWfG8ykcozGfyUGQ9DRMqwexv8N9",
  "key5": "38xDZE6h1LXT5LaaDfJ4saUhHqB1V5PhVuvuqj3Umy8m6QwHALDbxsJHxeCbj6wYFc2fH5G8a9rWL5LF6Wi9Dukh",
  "key6": "3bXhZ6DvSKWB76wxzobNJu4ZYpnDwDC3RWySRG5whBbYGKdAvy7WSQAazHV2r7XBx32dqBB6PhnAMYcsRGPpQ9XN",
  "key7": "49p2n7N7SJhgEAi4KfWDVHXapHGrtTVoS1r516UnmkV3DCfzFXS5q99rkns6R9wxoeHY82oXtzddxoTU4byqpFWs",
  "key8": "2uht2wDYLBMCw5K7BzoVLvWP8L5kwzpNKu6wCWN9cxzJYDWgqhvdUhrkwuWFXcXypEE64s15AvqAeC5jrLFmG4im",
  "key9": "2Y8aTZswoY719XEx4X65aagQjmC8zTpTebqaK19ZWxPsoDNyfLK7xKwX4AsssspLUAhQSQHBUy6R1EBsAMLoohT6",
  "key10": "2WK1exfskDBe5XAbshEymiae99VsmT8pxFmMpaVWNirPyNHGZ7kNgAvnABEaoQG8riXi55WYQVtFFeMQqDyGE4KZ",
  "key11": "3djFRhkb7V93xcTaWgWzqS4MVjnUxvmAvBd3nAKPVb5aBpnurWA75dwcZ2bCBu151YXNq7qbYW9kk425pjxBUyTW",
  "key12": "2BHMF3tKHrYHg51TyWqXiJnWwF66dVAKWEYiWcsKUU8dToVjCUoT88kMtmZApzc2ex2HXg3nCeJQYdemZAHtdnrK",
  "key13": "2jjEYqna8WAJ34isps3xgbyx8zP6pAi4QTjQ2nrtoQ7zWiG1rACKqwkoCfwrQPZJKYwmsCvbhZodFQVf4B1CbDhs",
  "key14": "5aX53HXLQwfJiUBjzKsgAggffuEiYKEm2xkNqfzZetB4JFqLsBX6c9KJEn3cTtzbyjpXnfK4MUMTzKiNQD8CBjUb",
  "key15": "2P3aubhyhzjfV5KehC7a27y8xHZ2aBF4LLDfAwjobpmL3iHNmJme6KQTgErjGahMRmmkaVnBLP8ea9T1MJ4Jtbim",
  "key16": "5W1mHHeS7k27fae8mKUox3isZnAjBsxA6W32kpfjZeZLTDUTHqoupeKRuUgq5sYZv9Hm6UwP3VCQK5NBFKXxpwk2",
  "key17": "5TwbfEEsiaEHfK4P88FvhxrgdZ8rtjm1Li384XbJsXjN4psuj7J3ScKHbj2mDfkHhswU7BkmZ4tTMUodQa2fbv3C",
  "key18": "4ToyiCtDRA6Nt1BTykQDhnfiNvMfYjwBEZF1U17bmZaUuMog5frPdaDdbNhLsG1RNvEHiJ64nowvYsrmiFLjcJNE",
  "key19": "52NTMeqA1Aji61xNSHDANQTkTia1oHoJNuVQvUCeXGgVK5rBRP42k5wr61w1YSk9if3rBuEc2X7uNSACAx96EUzx",
  "key20": "55D1omK6vRbReN4vq2s3YoX76doEQ6y6CDRzR4JCFcGrAifCM7LvArTxMRWYkBrVeD9QRwbdurCUhsWEqHrFy9R7",
  "key21": "56it2AL12LZ7Z9VEdKXQNaoKKt37ZZEvQA5CPvhYTwb7TizBLw7HciirWc5au1T5g4xxvG7udQd55TiQ3RBVhq6o",
  "key22": "65nHEMcqbFUMBePnA6ZkPtUTbNku9EAAntBrwYCbFyYUkb7kB4URgZyVZKLGebw3eSBMCS49EUX5ZE8wCGHyAgNd",
  "key23": "3f5tGBBFPf4Jh7oLoUJTw97VBcctYztmUgerJjXB8ky9wvRr6TcCfFHzNLghysfKgchnmPuh6WcsmWsRqeXK9RTh",
  "key24": "4iSCQPHhTNghjiop4wQB651AVNtd6X9MVrRkQxuwzGiwn8y3ec4dVSA3QkqM8jpiyXDk68KdAG3YKZivkmzZ4ib7",
  "key25": "469GzjUWXLZcpDRKCZe4QDckTDQ7FQ9ccK8rJP1dBZ4zHwPt1s3xHV3vV6ZDgbBMPYes7bYxKuUhdzLheypiVHEg",
  "key26": "e1u22bjwN2YogQV7C2WzFLxKxdQwUoW3FBRhnjiKE8o6Jc5vDo8SNMWGffRTtQBiyWEwR59mkPSEvy77aVa7rUu",
  "key27": "3fbXwBqQYe8LmW3ZX5UEv5BEP4WCyn3e2YtVKuG8KTamD5LVufYbC1N5rnSyKiSmrXTtwTiXTErpHSJoKMawGUwe",
  "key28": "4v54NRs73gUFVWGgNftdQfCBURs5mb5sneWBjnLmgHpvwUM9vSNryyK6tcx4htEX2Yrhvd1cAUB5mtNrjTqHMvja",
  "key29": "2At1q5GERXD2MuQbWL3PokC2HR76VmkaSGw2cVgfqhaK6vYrJc7M6dtpS9UwJ6K8hqX9Rg3ofJNzbD3ZjzgLRrCv",
  "key30": "4xwGHDG23xbShwjpUK7h8iGjcwBvgHkiH4sDg5s2C1cH4xCPKBxZvFyjxScChXHKVBTRRDGUvqyew2oawaECUWsn",
  "key31": "4z9z2sWdxy24ZuFmVjkrcJPELEAF6rtXZ6V62veaRQNWh8fLFcKHU6Hw6S9PBTRTpUb38t553abcALdiPjWe2m4p",
  "key32": "4R8podPoHJgGCDxSjq1cn8BSjsVJ4uac3ho3buJcAp6V4Gf4cnpWUVoC1L45AfVLtEmcjRz6cCzUy5iZvDtypABB",
  "key33": "2kgG1BrrAy978dantomfhHt7Gk4pTVdFPjV9QrEVmYartiaFdY1evrER6os5SBcU9PJgrJYSafh5XdF6yiKzPxSm"
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
