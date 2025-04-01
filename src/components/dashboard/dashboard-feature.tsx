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
    "33Qorn1Astg6WsdQTMVPHxT9cpbNTtRqcW9Jh8bVuC8xiA7ekcybbaHFigSDkL9hYXoJpfY4q4qnPH6pByhjeSkR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SJ8TS4QNeiXVMCuMrw2SrvaHPM76VvvxEH3FZcuwqtCwfXYbXSqGfXkQ2wjsEDPx4BbGMvoZiHDCVqYEbo1B4tj",
  "key1": "2ezLH16eTpYoozmGEdggVw2dUWXaWBt1VPYvZpK2Swv5whARDbSNc9Tis3kMshH3PBA72e9FT5SSQwf8aMKEw4bW",
  "key2": "2r52DREXjc622gtfVkuG2q2rjzgLuqR2zXhbmiLpeKXme7zkUsye7FNGFpR4HRohMLUNkEs7T7ChVURXfZkXynzh",
  "key3": "2q4Kgdg9L7GCgWbEk3PwTMXBWviqKpQoNrAPk7V8FSXHGj2ejYcT4VWseuc6cGbF4ELm5E3bvpyjMWsn8tUCSQj4",
  "key4": "3Frmi58omCxwjVbpa6PK8ruhpE7zcC322a6wfK5gA4sKaUymGFDGtvBpcHo4cBc676gRVp5QY6imCd8LsDdk7NiC",
  "key5": "4aXhRzMMFFvyFw4N6NkXyETkVDdoHNXVR74QSF6UTHfN34jLKz74vhPvcgQ2LvpZLrjCsTiawfwTTPLFf4ZJp2PL",
  "key6": "3RfGs5ZRdchTVuh7QdRBkCDSaTxsM5GkoFc8KyhHiJYzPCsPg8RmLKM1E5G7JkUSFEPYHKuFf1AjkziKnpjFV1Sz",
  "key7": "4Gz8AWe28E84BK1gPhNM6T7oh7bE5yPKseU71sFFHBTwThS7cNNweisWSxpXhQWnLxRXmjXqKfaUpC2EGpA6CEsd",
  "key8": "5no4bLovecWCmyLjHMf9woaLNi3drRheKoMzhNBikqrPVHPKWHBWYiLdEbrqVaNzuhL3gJGUXrGby1CCowAS83se",
  "key9": "2keGMXHJny8jiFEcM92JpZt1Bi115BVeEY9e9jYJn8ci6ogfTYNta9Zg75A9JkvdkwyGNuKmmdS29kzSZS4zFFu6",
  "key10": "3YrCJVLf8TbSaX2b6cMeqARAPvzZDqeMPhiGmetGpGoddNjC3Z96XUMsBFi5LAZmZBGEMdHrWfFNvgYj8ermj7rj",
  "key11": "2dF3XaazsaRS4ye5g1p6cJKccp6qU5znkNtCsAg3fMJYPtPf649rWYP6gADuwwM16uuwuYrTnLLNMJFxCtks4HBr",
  "key12": "4n3YKAAb8XQzZKELU2BAkvvr7EEED9r6FAPsMUA5NJYBNz7sqdArER5FqYvMmxEfjSQMJQeoErNYSgZ9ufWVibQy",
  "key13": "tvJSHC1aqgXi2UCH5s99N13dpeA7xRu28fvFGG1ioiqSEAstQSdMhc51VHG6m9HKWTyKxefYatzruGnthqCms2M",
  "key14": "4nZ4Rs1JkxAXb7n55TKXv6AT4DMfXVMzgyk2khX9vCF9U6RHKEvy4fh2AFH7yHEeEUgSHggNMcAZz9P6KqT5MbFS",
  "key15": "365faCCqj4L5s2HSVYnBXVSK74jNZj7gdXd1PjgKsR3tJNX6LE25uw6VkKXNWV4Cna8efv1TAdDC9AhkUe9XXRbH",
  "key16": "4HDTyXrGnGnotLDriWasL6MsUJntKebANaKV9GseFjyq7Ct686oRsh5jPbXb2apWQ1cPoTVxzmicGLVAGNsYmMcY",
  "key17": "2AnF8zh6utaWKLhpZchD39Mhqss1SBfU7rZ3DUoSjuqcD5XfY6FehVnSn5UZCtKEAUX3PNXAGEHukZDAy7tJiXST",
  "key18": "2JGKT8k82ssa7yBUAwz9oFz3GsM3QSP8NGSpHWRt1BED1564WjkegE4txa3QSzXE5KrjcYgPcbvu8DQ8RLkMJapm",
  "key19": "3FbE3twBpT11jePiCkzRTcCoVxegGFKcBm5wUuwoCdzX7p5YLHvZqViF8uZAENsdVvdAbYMbaUyqChjP41Gc63oD",
  "key20": "48XHCmVo7ii1Y3PfFiqufU58dPsy18TBpK5Qf8Gv7wtKMRD9XJb2QyoCjPASnZb9HHinMecTKNCPzB2RSe2FLvVh",
  "key21": "2kkmAC5vXjNZ7RLebTpeEWMBMiKKTzGpbyVHVQp8KkKyFgZRNY9oPVzjR89DS4FwQesdrdauq7JyjkeqEMQyaLWn",
  "key22": "56TcwCUKi3s6Ju8M4Lvht7LjT6SFXHAqW4Go9jNJ9wQUSRuwHex9hv6EYgy4syDsgBHBAr4x2EcyMjTyLsPcBBJU",
  "key23": "5Ai5NKA7bdpfBQ73nNYPSZ1swJB7badxQ9aiA83PX3XsQ7wQyVx35EEk5t3jW5PpF6XiJxyaxRbbZHbBYJGFKB1L",
  "key24": "23k3vRVGLnD35gLrT8xr7RDsBzJiJWY9WS1nrXbeWKvt7eW3d8VgPLdZbyuAkwmbPgJ2uY2uimCLhaxXyBAG3K3Q",
  "key25": "5h5FSvrcFG2oo3Ba8XaNnvrzMgKLiqZYun6ynFaHaFWoJ1Jijsxc4djhrQsQWYNQs4EXex3Bqb7MFfofNxSp2fG1",
  "key26": "2qBgspmeDXfnA479EdNk5hg1njcCfQFhBgQ8noSneJUPMRY387wCbMVrCKVyQjixUtLNzGpDYuAtiwNJzV4CNZ6D",
  "key27": "dvLXgt9VNh3x46frS66kED6NgRdd4wBxVtyHEss6oUkCUuVPr1bEiLjwAbiG5edCTatSM9jxW2jxhdnGkWw6rnX",
  "key28": "3FoK3snTQbkc58t8GmRmkbRFrEGAarC4o8zeZTayhFkqx6G3FGeG6LkSdp2nyrpPj469mnrvCWfyav4SAnFdnD6X",
  "key29": "4JgVzALirTYCXPvEK23WyZg6QxjuB9fts8VhkawvCxVHR7igPYsWdR2oXPWxcotztX4nbxTgcD8wqtmcBBTCGbkn",
  "key30": "5Th1BdEqirDTsEzfGzAFyniRHfrcVLjoVgyeeq7nEGEWadF9pJxCs4bLTkvGPeWLLEGqqaTzYYP5ehFj4HUJgroz",
  "key31": "2mtpW8c7gHzUz7piSPVdGvuXYSUNXDmHmUF5n1NcCk5eycr6mQ3KMnHwQ4B9yESm6evqpVsRUgvZHzGdwJViZf9M",
  "key32": "3AaW3nTqANjjhZru7scc6muvA1qRKBCH3K1p6JD4kSkWtevYHcroo3Zst9Rtm9CK6gnWN98zwxQGYK3jBq1st7B7",
  "key33": "L67TqexAvRbgNdJ8TsvtyjrmpNYHBJzg84hhXCiseJueWp51s8o3L34MgCHnBXSuqbdZHYdmm2WLWExdPuUPMMs",
  "key34": "7Dn495PB8JMP1aZhMtwxpJEnETjhvzpcrv7u3LWw4yBBB9QeYYHAkZXb1bLXtFKw8PPYcCAxd6UKtWJS6aer9VN",
  "key35": "3zHovpRPS9NZjG2zyvWg2M2xMjmtd3hFYj2gi8DbS4hsaRjedHgSd93vvq9uEUPjgHDaXTRW72h3bKc4SSwgK7vj",
  "key36": "HPbSBv3i9U6V2Q4k1xCBDuGMFa9b97KCmtTw5PA417kQzAjYNEtGkKHo4A6jBxyaFD3U68VgRaM6PTJ4eGx5diA",
  "key37": "aHNMAG7AuZTkAr89Ygs3otT2HeWZHLkMWHFYCwRncapwGUJbuVvkGd8TF9wVtUyCTy5ZBcTKXjyPuMRsdXUyAtv"
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
