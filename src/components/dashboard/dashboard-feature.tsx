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
    "5cFYAP8MnL94GhkFxCJwi1rP7cJUk6DLyczuYoYVYqm68mKpQzMFzX45qgAXVa6eaF31VMJYoXfiSDabfnFBLCNz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ciBDwGwprvkjsBNBjeNRYDcZJG9kGGFTMK1QFD38QmB1RMxi42fJi2a5eHr8B4YyJ12ZkFgbcta3qbkkwohsXSN",
  "key1": "65jyboJzXr7MveH5yQWGtA2R7sEBC44dqfkCAyTMTzpgNivEsLrd7q1QwPoe1m6SPEW29V1n1mDLPTyAWGc4vtV8",
  "key2": "3dFuxT5De7hTSPTLFMjUrvGtEkd8Ahdff8pdzzqb9ZvSH73Fs5M1CpH1daQc25P2r7bzo8uB7tzjvMv8E7Yek3TX",
  "key3": "2N2ZCZJuzrGH94pu3NbzhXzR3QhPSxtxQwZSvj316SZg9cHzFZr5t58qwDHneHsjihWe3wViVuAzSrjoS5oSGofD",
  "key4": "3NfnLG1KH94CTJgmZRbYZdcLywd1UvKxMKqfYz9i343tJaD2yNFJSEKLHV9KNo3VpKi8W7AWgPo2S92pdKyh3rRi",
  "key5": "4n9vCKof8uphomW84vRDb5aHowsDeUqaVboojSCi3HDBpnhR8pXL6UhGGgxHU6KNzG9WkVntDoLgMT4KEHpxJzkY",
  "key6": "xwnsqApteqsHyoMEndN8Cc8Mrb5b1gDsHcqeg4KsXMY1Hps9iPDat6RjcDUocjX9S7N2Vidp2TRbxjQgcfEhPKr",
  "key7": "4WnRXfkuWernMSaVAdwz7U5uP5ByVsPReoSAVCWghvSHwSgGBucKs3w28JNvnqSqVXGh6g5e4idG2e4kEGuGVAE4",
  "key8": "2UaUaYiusdawDuA6MBvTuSqZVr2RsahtYJA2jRdqVjhQP1PpGXBBi9kxb5JnxRtdFoV62fkFDQ5Mn48qKaU5q6Rq",
  "key9": "2YPuqVncbTBHdZBWFv9b8A5qJJhXMGxzgZFrGskWzzoTPuipju127mfRLmwzC7RdXpoppPNyF3weukW5R24MnqtG",
  "key10": "2ma9bwiKgnHMGhSfUsWxTBBMnGPdF5nXGQyqBE7ZHdqQFLe1xM7C4GRW8cekmhPb2QjFF26oUBVSi7XdvXZRbkDP",
  "key11": "2HD33fz557jt5zqfeP8bhMNQGbz8iddcNSgGkB7mKF6E4iEXhoWs1n9EvYXZxvmiFRrX3ZTCzdBo59X2k5Thy7di",
  "key12": "3iHJECCxK9VotCz6WEa55LutQydbKamPPR9dLNBcYSo7W7uETV7pVfGSuN5Fq2W5HR58vVsoZv2QXvjEprHuaVXr",
  "key13": "CL31cV63v45Khmjme946wX8LPuD45rkZvMcrXy85LXVXStRHXiKVidZt24eoh8cHr7nTpiB8yKnPeVGZsaCVF2N",
  "key14": "3cggUijvPMgdTbARFtagBXfczPSSYDxEzYYY8c55BvZ9nmBAEdRNCWMoQVhKaFKP28oFGLJD88TPu91tiqogjhHm",
  "key15": "7pp86pdgQNWFGi6jc8WtLrE5JqgRx8DGr1yjJTGHZ6pASomRWayBqzszjESUwSW1rK6NyHreoeia9QJJDPtxydM",
  "key16": "QrJ78GAhZaG77u7aUK5wSzd36PyJRezQeUD6hwUMruZkVNytqNT1UcMvVQLYR3kKVeZWiF3RKCbaP13eiQ3vJRW",
  "key17": "45rWPXbHJ5WtN9BWnhyrMsEoKh6BEh4JNCapyNHd3kEL6WXruc25FtzhEGxxPoWQuRp82WP6sraKFPZnFwcF5bYx",
  "key18": "4mfomshijx559CsErcyqXMfmqyHKVibEKWsQrepP49yLyg2Zy9rQz64vt72FphBQSKj3zApSbhq2aenqok4KiQZj",
  "key19": "3PayqpjPteMYJmMb9dfHjLMcn3rbS7p7wrJo4geewegrL1BgyhgveH1DTcnvb5YjXKv3bX3cxaQzyVup3pW3xotX",
  "key20": "5ZJDhBhYnMcLJBik3RJPDLLcFm3ZKd1UTG91aoWLPzHAgNbbm6U8ms4YK1zwobWm7pNcAZQZmU9Lt5mfMzaynwEa",
  "key21": "5DhbEQ4k3dNKqLDCbpA8eHb7MWZhdCtbZTW9Uhd3MvTRXrworn4PZgUwFXAEghaWUmrL9Pyg5CcstuE2tehrPddD",
  "key22": "52woqxmxwPWPEQVQucoH5ARoy9EsY4xYokzHJaPnWrHT7kxfhLDVXsweygvWgMSCnTnvMZCUrjmAj5tf7LyWQuf3",
  "key23": "2sjaugMneDr4ZTtJrV8rDnfcAbXyMYYtWSF3gajRuuuCfWjSDi3RaGtuWzmKnj81hbVZEvE9R1jqzJy94WH4hrpK",
  "key24": "3xsyDdHX61ND6wt6iVoyJw4QY5TMrrv8bGFcXWP5vEMY78uegVbqgbgPN7WLpJvAEFZ9DNLLZLGDbjM565WLHXxY"
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
