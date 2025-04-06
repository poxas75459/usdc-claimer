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
    "5F32EUruJS3DpBbwGQQTd1ZeJJtpPNBtGCZdWghcfeheW7nY31KNPnEjUZpmc7Qm6evwGZZS2tHwSZ7ntq7j7cU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VoC5EVkWJqhoRwxEczHqhFnwKKQ7kfmhQnfRN1itc4JvZvdWiXoSXpBhg98rewohzm6qz1pHneeq9aLAvZkVip1",
  "key1": "3dQ7FHXdtn7HJrMnpbFdy5pCuMWs1ab6chVfJfkg4UsNoZNbjkav2vMu737PHJSiupxVMymogBUfbRiXC6cHegTD",
  "key2": "2yWiKq4EXWknJ9qgKp8qog8dAGPmxsp5wnaUi3BTwXBhxHeAyHsF2tiorxX5qD9y4Dwu8TvLjkXTH1yFEFeq9eNT",
  "key3": "iz9uRcrAa7uGiMgxhNUhmD1McUNoKdwK69cRSSHjDboWJwWiTBzCRbmu9C711sFT5vggo4n6CemYHFKHf2pbRjd",
  "key4": "37eVcrSXqXMWbiJ8bNUcA6CFNbhbAamQjNCHDGPeb4gPGWzFQ1KqWCmJte8M2Hv5RtEEZ4XHD7oGysjohtBqs43P",
  "key5": "U5Rkscez3tCv3DAnNFqzGE55G9WBwnTyPFZAxe5fax9VCGuhYBW4Qevgp8fSYhY5RVVFPtD4sC8yAKe3CBZH29y",
  "key6": "66i3ZhKSMTJ4YmMCrCGXgztUBzYhcRoLmbt5mFngbDjLs13QGNdvfmLVpHYb5gGF4jygum5KEQe49nZ4MujzyorN",
  "key7": "QJUBzGAKS8UXWp2zXLMfYkMnsnkkDACX2mnhUVGfSAEXG6iasbQRYkKLETxqbDvUionDR8YXSvwmvCGcX9CBbJ3",
  "key8": "2Nt6JrQogkgjcm9nLG575wT474KouDZuPZxAQrCs1KpN6KPxE5k1YKtLDsQZPenx6Us9E5wEr6TBoKAEEAZvjXJr",
  "key9": "2SRhxhVrTY5WJkzRB6cyUeRY4cWWE5ed2cMg6RLYYAVFJKK849FsQ2wxbFjhiBJVmTYuPkqNdrZDY822UNnnoANv",
  "key10": "4B6wrDrwA71fpVuCE7TqK8YJbNo8u67rGMBjRiytfLikPAUA27TiAqCnos73hfXz6YXtDg692x7fu45SZqzGAgvH",
  "key11": "3awQwaqVr6qDqqr3JySBTF23Ft5Hz92NmHm98vupVwGZJYdLVTpYqwX8Acgip2e92ghvBCTtSnLZvAfeDwRfuitr",
  "key12": "36bnsSREvnKCtiwCEsPNWGySuMPpDNrG4yU6t7SjyTdW8AzGhsHZnk7cCAEN2Gxs76xJDGiCCdTV4CWz9MkvkVLL",
  "key13": "4PRPP3v8GYoNTe22i5So3WPa1j4U56kC8WbqRbTD1rvH83KMPfSZjmPZ55q9QbXcdpik1arqGkKsDpJzjxREXGpV",
  "key14": "36Dx6eBWSGsRHxFXhbj6tKCeEpAMgU7sY4QS8RWFPDTmWKYdZfAD29nAuDgfiGdbDoo3jvQ4NGStwopuKrjTHRBi",
  "key15": "2wCCsRcqoYkDdvtG8KSYbhgc2oyvv4g9UdBboQqAsChAd1VzdpFtSdanG9VDBi2rtKbj52RzTtcKEZc2zNXJrzo5",
  "key16": "2BAGsu2Y21LAxCh3tG9N5gmMDb5U8UDEqsecMD6JkPnQGUr7giEyW62tAb4iYXcAvs1Qcrn36ja3bhQUXUHBBBUk",
  "key17": "2ju6W72BdsmHJ2rosQUyrUemjDJ3hnGVVpcwK6JHeLk1FNWQhxmZyU39aLbvtCVXHQz5yHP7Fx3bjpSPBA7Goe3G",
  "key18": "occSgZBpbCtc9qXKma8KdyK6neUStY2DV1YpxxuXRyXpvKDPJ28YKN9nTA9CNkhFMeJ6fpRj9wZDoqeB1SqjHXu",
  "key19": "3gr8ZjvKAXozuajZsd9cfCQR8xE7EzdeHSGdt6eb9iZyiBJEtD8grEhexJZ142hW7z5QtAeeFVWNi6ncRTUhGGij",
  "key20": "2R9joQvaXKttWDSoNXybCGZ4NFv83M2FU1MnHVzpysArQzDZcJcSWzjmQsUxikf6dk9d1ZqF8cZHAiWAcoZRUAsf",
  "key21": "5ios1Em8sjDTcP3C6kf7ommU79d1ZdDwaVR4ut9Q7h261GKR7hWScfCvYKF1LLLCBFLyDk9czvtkTVTrMKV8kYjQ",
  "key22": "4ur2XbLGJMfbAc9BtEQadB7quTUvdw2jCmvHR6wnBscrBi1GXUzMg19NAjTy7Z2iyzTqu13NbPrGhDQwDipKLghK",
  "key23": "5RHtNWav1hm3TiqwhL1RVHAQjm3pRuuRs4iauMqPmtLQ88A4CXgxpEcqJAqqQh5zDPDrVUNMikxYfhmJaKC9mWMp",
  "key24": "4YN5Yw9F9y8QNQWp7oM7tQscahadnrexuJ3dh6SGFGbBdaiTE9H14SEEDodKW4YaBbKCVfwmYL8up4gJGAgBnDfF",
  "key25": "4fKAPa5N2zYmrwmhsn41H2x4a4im9pyqLAhVNydrSWRcF3EEurPPbWw9nKkzR9LYDpEBYqt58Bd1PVjkcGpHnigs",
  "key26": "3g3brKXtBJye4CUKdBhw16d4HJboGxooyshsSwR21zXr9ZpeC4U38VYuHEa2APKM72AdtrusGEuziWBSKh8ZZGhT",
  "key27": "MeGxiKkyUNoSLmJwL18xCDHnNZoC3AKfzwPkorWb3ZgJcFg7Fx9ysaxKdhFo9mZd1ZZ6ywD1cRYPbNad4Y8UnX2"
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
