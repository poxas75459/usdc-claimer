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
    "4rC3Vaaunyj6A5ShZPgCbMP4UW7k6ztTHnoboSxZBEMsx1sfnaz6akCr3hZeS8WuXVYn4Zs2bM2471BfJzyyta9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28XPh5HmFgdXyEivpsvFSJdx4YYpg5j3ULSN188RTvEEEMNBL9FZazomDp727HJsZomyRvh4bbgSTxH6rLwtXKyt",
  "key1": "5d4fFWvJxYQpjCUDYNjExNcZgq5b6GV1KHGH42N4NXmawSCrYpyUtfHuq9xfZ7TA9vwW56vGunFsGHwyDxdfUq7Q",
  "key2": "5acjbLpTsT3BFrebRis3RUjs7D3WvgK62oXv35DvgRR539AxaiofRw9iMhtcRsdL3kPshrE3XgWCxP5yXamZ4Qhr",
  "key3": "5EiYXGiyvFwQ659Ne7NuspsEXXmvsW6PN39KqqHqqUAAmyn4Ya82Y5jCMjsXFw9teeXuFhVgu6VGVdpTUMHgagcr",
  "key4": "2T1w6rSxRHy8shdsBg27fPRp8kRqHYZAYtpt5iutPVc3zraWyptCTjpHYBUTvwuTZgAX8JvzcFmGjEwo12CQ687j",
  "key5": "4YYRmoyL9xS8X8wHkXmtfnusatqeA2FmcwNnuvePzYj2GRouHDSyVYgbrA2GV4VYXgmHxz4F2NaWYhD7HnsM5ZuP",
  "key6": "3CS8ARLgX3K8PZkiVeqyb69o3TDeuURMM1bANuVcxZqnudN7QdBcunJfwezgNUJtwBNhY3EGWgHhNZPH6hJUAmmv",
  "key7": "jCM6cL1ELszNBwtSwSr4dVaiJW4DaZM91XBPjD8L7fiMKMaspeTA2Q6gSsaHfRmesY2UbEvpiL31oqYQwVHEWwW",
  "key8": "iT8ezg5JzaBsY4rkmPYLLDzpQDoYWKBobXRJZkW9bwBF5QCeaUuM16RUyjFsFp3TXa17ixB289NGWyksrcPdJps",
  "key9": "3vdeqwkvXYvXgviCuYuS3QJPdGxpKSnnHETWQMAFQRxv6dAS4fn2zFi5i3unb7kmFBcLyFnVr2PDhKLguz3HJi6u",
  "key10": "5nbS8zFbaDt1MHnKpmDML6K9PWEgQx1229VRvHVt2bNVxahek1Lz1y45gRBZtzTCXSVycTMn4HHMDNaD6T2J9VW",
  "key11": "3R1S8HgoA63n5XKRRC1H9fGF8rAe4266QhyPi3BhygMEbC5r3691rYifVRDknqZ3jJRpdC7iJNGodpVPa75J1BhV",
  "key12": "5pRDybfFPWYgdfgaN4M4go5WYgXtNAqPHYgqZGhTpcRcaqBPExs1BoJR6NenydhcVVc6DUNGnW9XymAhTQ9bi4fL",
  "key13": "3n6KXroYNG1nSdnYqzy5jTQoNC5hDt5sgEMVzmc56edc4sdH6vg2YpjRydn3Lwp5vVrqC2gxE889mrAznMtHpsxu",
  "key14": "4gNnozxK6C59eC9mUfuMRz3yYDuta48QH5Zvc1jX7rAW3oSAAY3MDmrtLgM7bu2uphJuZLTMwNxnmyHf8kEQMy9S",
  "key15": "2bLcF2SragdENKn8RybGnyPF4sTFvp2pQUnrnGr7ECQBKnL8Rr6C5TBDg7cLpZ4UvGZWsL1un9SjFFNmrA1vAnqB",
  "key16": "2hVo5npwgzS79r4Dze8WwWu9PzXFSR8sjmKFkmhPL5Kwi5As71scimm87THqQEfyVgwzA5Zk6r1NfZcExWkEJiJ",
  "key17": "5fQk31d1EKjQgjCc7vchv4D8XZoM7WMUyUWpwQ4bmGuuht5nPWtmkFZxi94jMdhSP4cG6mv759noUaA8iukbHu8J",
  "key18": "WxWQunC8xbAzt7LycdeRYKZxoFznjcLd5bxc7hNw2gso2ue5FCRjfwqWVUQzXrqzaixUaw8i975ufNvUb5ELbH2",
  "key19": "458yD8F5EAEfgQBHzwaaEbvMbCUPGFd2fh9jFXfz42KHtLHMpj8MCEb8JsGpYhuA9ogiUJryRNaciEfSdavy6fVL",
  "key20": "5MKTj3JrjUsDTTuE27pjJg98vZTV9g3171G3T98CrUuytxLuuDHL5Vf7Uaeas6cxrTVyuhxFK8WD6cHtJScEb7ah",
  "key21": "4LjtQSpUzcvEMWyrbxuqGhfbs3NokHjzbjfrb64wP3VprpzmSobmipeqkA1y3md6V5H71Vd2JJANSehwKhBubsyf",
  "key22": "4DrG7C9jvuuRtuJsSejdrhunXLeYwSQKZhiFwEUCFfYxLCQN1mfgdn8AenLsPQWvMMGxKUdTAm14hCaxXKdQ65DC",
  "key23": "5w5y978i1FBf9MW1S3zF97SMZzuTrHurGYErG4JmfLn5sTtpe8Bq83wdCVwCGLng3uRMJesdZDEE8cgHV6XWeoki",
  "key24": "fTbRtxrXpmgUvyB5WvGUYFbAMzjzVj1g8navNFshEY1FG8tkAoSoBxerTJtV5dYABbZDxxGHSxNVZcs2UTsS43z",
  "key25": "tpFtJ3zYKWVkubftfH75CdkAVatDsTc1owmdLitoAXVUXoU8Fyd8ysGFXiq24RPQH1AsAugABHbWuziGKPRVrDU"
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
