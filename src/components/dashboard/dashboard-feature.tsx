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
    "24kZGSfegZa1r2qytBxUk2Q3CEhgtzAuDr3uXAmpRa2m3HDNLZnGe6US75bafHrjWCB24rsq8mFMkeaAzdgJbDhC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pkDBtCxFDpzjBuCiRKnZPH5i6XfAZWsKysDBqrLzUCw75xq3omoaGxtdnE132enQNfwwnn4hTq1QMoXUuTSz9DJ",
  "key1": "5KptesVc3eKuVqmb6dd2jUy9HJnizSuDbh4e7NkxJswxCxUoHh5fzUY5153MK4dqgKowYctLGjVN6Tgg78QeYcAK",
  "key2": "2p9fbsnMFUDWEVezTQYAJFwQx5oS5YD4TcLu8YdvZKaKCakRdsHjKDsfvs4daoGAwkHmdBXQ7Erm4AcjTN8QMzPX",
  "key3": "3UTL7GGzTCx76mDZkh1g6oAvf2SGX46qDVFWh4riaKGzoBP9fpSVgL7d4xdHNg37gP8zbJKJd1XUTAxiMjZ66f8d",
  "key4": "5njp2NfR2EesyMf1nzRFDJN8BowrZJ6C2B6Skdsd42KbTDQewxx1e4NUNwmhKSgf5qHoVPocXe1NdoEZ58EN9pWr",
  "key5": "36rLcYcUWVm8NAVhXu11jsvfn5LPnDRRoPMW4YedUbRGAn9tFKpeXjCvFYtCK4uYUqHGX9APi7G9Ghq56SCz4DEy",
  "key6": "3H58AFDGRhzgGh8mWYVwfPjAjED3bAxgmzveMQgYrZQXSyWqdFvaJch1Xra8JySfb5RhyuMhB4a8pFkPMdJX2Lwj",
  "key7": "3qNCPcYTYqQBxei6374nMAvPPFk1qwyUeP11PAEgHnZaNEVxhhnrwiL7KZNtLyRHYMfJqxCEoYLDMZepaLZCFkHC",
  "key8": "4Kt2Xf1u1k8P8fH8vWA7CmLvPKRuFF3o6zWJC8ksRpCcSn1vNxfGDdyAaxYTwQuaSxx2wCtGh1FQ88Jzr3wNRTvn",
  "key9": "2bNqGCc8GNZCchXwy7aBccGArR8fkdNtBQ6fmi9kXbEgh7bcMpCiC7E7aZWWfja1wFvmcYifiKAogY213LE3CRAA",
  "key10": "3GSpFw4jx1K28vVqECLpDNQQhioU8PcJohZFPm6fvWxmTRrfQCSwW4ixC6hLnqQnDnNPndK8Gk4Fv1g7ZWyEFUdf",
  "key11": "4b17siDpYS1ayXPvTPM9RvNFLhtkcJBdn7Yzru81XntJT3oZK1qza3Y37nHBJjidCLYAE9eam9tjTGXXAaa7KiJQ",
  "key12": "5DEuZawaWCu64uqbDnTx4KDzD7Nhr3S8RJXRXzZ8MXd7ML2Ekcnq8Lo49aoKWAUKUFv7kuL11VFesM915zU1GTkX",
  "key13": "4vDJFKRqGxHKhQTKSkz8h1EZ2DFudxC6RdDopw4SEsxUHXZH235aQYXC8VEhgrTeVWK3QugEG1XEY2yeM1wpkg2h",
  "key14": "yHtLbqFsWbGm2xL6hHdJpi36rc6GjdBziqKP2YkM15PNe4fBLoW38aQGYNNyGbibZePv6CE284Mq7wb67k8cfSi",
  "key15": "3YHir694siRNcMxS7xAtfZVKfJ7q1mnx64dAg769kXeoDyeFyiMi4n4sWZCbEUTWgFPBBBij72zVaa4peUK5BLgp",
  "key16": "3HifS9KzonU3RC5SDtpkR5Djwt2gGhzWQxmceUB56vcpZLGZGS5db2XFtgPnj3Kq5iWiohwackx7s5rDbFQhwkGG",
  "key17": "2wbge9yCrsSLSQUvZmxqNRymag375ZSLuLNMiSn6DHLm4hCLhMWutE1yvoRd7P7eaCuWpodAET2x1Wp768L8RxYG",
  "key18": "tkTzmK72aMMh6gsb467q9swFTe99tPWkX3pDqPvcNPhoi5eQ3PbuWVD65d6oRBNz5YsfuPSTFiGcUsM8Xo2CsyD",
  "key19": "5UAm3VuzqxSspo7Aw1W6DQuv55k9Q72LsGBiZA4trvxbEKiuBiLGkCz34qCjT95sqNgfu6kXVppUKDuGhKvWWxKD",
  "key20": "62Th4ef3ncirkm311YH4KYaT9yVwCWntiYWeYoxkSAXKstfRmBoJLd2oQBMaNSh9ky9Ypz8ovom7trVxkqZG3Ga2",
  "key21": "2D9FfCEWGCChnxTXR45P2aDJMp9b4dQGBw6fkVEJECYgFSSZGqLK5c9o96VMBDCPrv1TB5bMtVjxYQ839MnXhXeB",
  "key22": "649MXDS79ckay6qdFg2MutjXzpf1G62Nt9AvwnCvYNefnPieY2jnV14cKPxifU94XEJyGLZ9vNMWbVTPPtxzcV9u",
  "key23": "2eFpV1qKraE5i5hX64VYq7GNbJ15JNNe9Ph4a4fp8a4qefzQHdVWT3k36Z3JyeZn8o8iniXAyj9BDMqqjqorgJEw",
  "key24": "2kAndRARvfu52j2PPNLGqtP4zrGX3Fma3HVPNT4vWMbjJnGWx9aXbwGMJ46HJr9Dd8B8jxUWwpoqApJzke7NFBZn"
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
