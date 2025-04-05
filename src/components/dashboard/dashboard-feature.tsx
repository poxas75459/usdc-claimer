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
    "5reBgpvEkkfRLmspWd8CJQjWMd593iAsaU7pRNuzNmEoSYTMqZzKFXuydBFYN9F9sNmo4r49MeLXBXVXhX4AAbb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wkB1endzdUVShMe31bDwPhRz6dJKWsGW796jAq4ZpBRRX5yuRwKjdXL3dcZmBWaNM4EYizRpZ8Cw5tXY64URHvZ",
  "key1": "5ubeePkv2MGUqrsSGSvx36wo9mcN1JXC6fgTfBUV5WszFDz4HmZEckx55bRdWyT6bSffnx4h2mRaBycmLuttXJiV",
  "key2": "2vpea7Da71CyfSJryuxhresibSrVd8fa17pyRU9hGqi2wkiQsKER5Mi16A9yVqoPZdP3rgvXbtexetf7dNVk7jUR",
  "key3": "2u3Bm4HjfxUCpwBtb3Sdtp1K4AmRzbcJKFMQnntWjdKHioDB6ntYvZfw8kwxXnYTPcHvEviPpHNyhG1i8kxLYS3",
  "key4": "4xxiFzs3M7zpwDTzcuWd8jSzfJWgt9jmW1ie7THhRFcj5ZprYkzX92QcC1bjGLZZphKWo3W5LQkiWyEBuKUTDcrW",
  "key5": "4a3Xqh7RH5yw8KwsZRpr3KTm89ZWKjRtoRDuQFqRNfUyKM1Tm6w9MAABercJG2PYjzQpjRRRWojMFw9AqKt6PbFE",
  "key6": "63WqzNjSzATATWGCwsV4ckntv8otBsK1bsVgkYM9skyCAt7ceLB6ErUYsu3RmrxuYa6AQgDtPs4qiKies7SzcMLv",
  "key7": "HT8mQ5gWQYiBNdZqYvCfzLJwEPMARQUtWNWP9qh2EXruyJSuypYnhDFdx6qW9gEsJ2A5MS537ZyrHGoK9oh4NZQ",
  "key8": "3qcMNd4T1c77V3vysJWKofTxkNVYEn58mzfWQD5fG5KLWja9HGYrTFyQrW1hxDX9RF92HB2AjJmP6urzHc6M14ao",
  "key9": "243Z5skC2fWv4whDnm7xrK4GREzH3WVLZRkzGcPoWeNU9w5Ucxwg5B3ZekcgiF4gzkpN78vy7VUECPtR3zqH9Phy",
  "key10": "2SvFue3aNNLomKpaipSprwoCgTCDQyjfX5bmUZHu4CFW9v1ZuSWAJtyxn2jZLLxvhFEWEcwpxXvn5M2Y5PgE1SeP",
  "key11": "28F7yZ3hwASzUxhums98wsQaQyv6RhALqfqhVAmRcjhrHsSR2rrGBvENrbr1erEqGr9hgosw3ptGUDLmXPicdtAx",
  "key12": "64QZyc63c8AxhfnYkjmAPz16DSSkD1MSR65MKZiwVjTxx8Tfzf2mJoGQZW37hFrQAHKW7F1Ha6fccy7VSmDrGPmg",
  "key13": "4MGnDpRTiBxsZATSypCptktSZsPjNyk7xSBh7YaESL5iy6758B58jqGcJ3AXzuYjEHfWcHxvy5yg6A563yzxYc3s",
  "key14": "3RCj9UPjU1w4Epmmuvw8u1XdZEiaywPTAihL1aSapNbM1sRFrdmRu74xSwbtKqwK7yCB6KvoD2Lg6q9gYN8p8sKY",
  "key15": "4c4gS2H9BvVq7or42Z5ihGXpbxxDPqLMEUqwUPRgHLZcLVbwfPyPUq2rFEE7bQgz6DnVxQn46bNsPJBEesU3dS86",
  "key16": "KTEh9GBn7trsb6QKMZbdp9ZsSXnUXF4wUzY4RY4v2N5QSPynsYEoRp6gz5mKqsjttyJHfHckq9CgrY3Cdycy1Lu",
  "key17": "59RbGYEzodZymAqAgik7KHkvq69iNeNLUrsNdGiNYNGUPwQvEV2XrPmRfqVSBvXd9QpxLvUX4Fr1BsgsYDg2rJrD",
  "key18": "2d2FZHwP1WR5AArkkxME8rbCxcY3Twgb5U5Xvzj9fWA4pyu3Mz7E3cg9WGXhixxHUqXuNEUvRrYABaP3GLNbUApW",
  "key19": "3eznFV6jMi4ggiwzwHm5cUoLPveySmmwYzCN26HuWrWKakxr6YUAEohomFgrvJw3YLQrDyZ9FxcCKJCgHJfbsjwk",
  "key20": "3SvATLt2x5M8pS6ox6B6wRfjMJHwwjsyP26JgZWtwJ4aw1nRGyjETYtNzx6AaT54dcBNABvZRz1eRLoUAMXsZoBN",
  "key21": "3uSpbqPwS1rrnRUYGVdGvKvHBnJPpA8hYkuF2dJgqkVQrLr8VNRmPbLqJf9byBYxogditRJJ1rH5zhYCbgE7iwmR",
  "key22": "298da5VVqi3B1yySfC874ASMN2hkTXjNDj7gMWmSSFbk7qV1qLWgJ3RTZTcfk3gBFAKq3qZ4qte5MLm2Yrmp8poC",
  "key23": "63APqoe3KuBg5dWXWjEWSdAsYY29euwQoXWDyXpwAxoGgJi8LtXhaX25i9hsY2yV28forcEaG1JDkcCJHpqgRFXj",
  "key24": "33VzY85phxxVv63iGAPqwf2QnK4pa1M1SB2EmogCdBbcmErDPU5i6ijd3P2nhhxjEXLTposJSYCySMScLJuzvNzN",
  "key25": "5RpWquhFG7BJucnYgKvWnUrpdSAbeGCbPqfep5igyaN6YZdrBCZBK6bGT2KVS7QpUtFbukoi5Zp3tdw9DPwC4L2K"
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
