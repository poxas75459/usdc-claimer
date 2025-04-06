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
    "5Rg2fdVgwK5BTNUaDFJUqwH7daA8DVtbx16VkzPbdMB5sbPFK8MNf537LQGzcmKN2oQLZjex1rV9p4gUgHgPRs1g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZHkmqHdQjeDoE4jWhJ9NxxpQYhqU8K8tkyMGHMfjcVkNTuHSk3VjSYTUVEZnLT2tHEeLNKfBXhev7nwGkdJn2tk",
  "key1": "2AWbGXxvcpLrWHgYT6ATeGwD2ygAjLHhFQuqdGDH6Ushcbvk862hDzcjDbD4zQEwMQQHq3a5WfP4FWmG6MznrKKR",
  "key2": "3QN2ma5jhNzAHpY1QKbKCavgwwZs3NkypwmWGsrR8WXEEWpuer4MmtTEV1GWtEV2PyVUtza6tCAGM1RPStFEWDi3",
  "key3": "7LFaVHJBd96D9eGYYXSFNaA1L5rTLeDfah8SB2vhMxs7njekagLZMX4Lgz1XzQw7fVfzRJLYCDrBMciT6moSKoX",
  "key4": "5RVTXB1NsTiyQtGP5WhZgTsWpbi2sxy7xD3v3uNpHJMbtLzqbLBWCmx9dPGEovJPbdQgmULUM9zWrdVXvXovVoqa",
  "key5": "2oNvxjFBCZ9M76U5HKeUMsm5HhXcAPjzy8vs7UMXQ8vUho4n9urjKc14j9Hu3bgnxHfpoVqFU5SYA4555sPLUbLA",
  "key6": "2DkagaMRg1bZH45n8iveamZeiepCQrQ9nxv4nKjaywGrsXQyR1vHar28vCTtF1AEkes9SCZ9b3rGjsJYWWzxiwzm",
  "key7": "5yiwSq7QcGxdbDgTxyba8md5tYi6uFRgkdFZXP3nTMWU8zyXsVFRAtkhkzh8oCvh8pBjgiGQn1scdXGyxXNTrr4x",
  "key8": "yPQLtNWzqAeExCRDSxEsz4zC1hXmqB8TiaLiHY2d5Xpq6oYdMA3vZcBdM78iQngSaGM11ChJ2zPzsNAe8WVBZWy",
  "key9": "67f3eerYecsB34mEknd4La1BVbSYKeYKHL1ZTpBN4t5xm7vN5jUwBHZ1uZEJHU1D5zbEggcwpbeNRacj9BrGR2MP",
  "key10": "2r1Mge62TtumhCevPEk874ZhDoAa9Uh6pexog2Ab9rxtZr4tzzghGFz2CotbfJWSNYBpWQNWGUwf6Z1NsB5txhEV",
  "key11": "4tVMGQgpVmE9eJeNboArEmKNM1ZjeDRiQFEPRkgfZg1ThWG8s4hQ4mzF8XxvucCD5Fun3ScTg7U4NQFL7EBhjAk8",
  "key12": "2HDGoyM7meVJp5J7ZTZNn52Fw7zBqgwMyiDhUCL3ctEMMGmYPHm71oqNzkyVPWVZLNyRgZduD4VYABNLckAiLkr9",
  "key13": "2qd7GFL7td1cf9ZhVk4C5gQMv6BVigVKzj5EWN95ToDCZZsfsMKUs9uzfgph8jnHoG7C75yLj8mjDfNcFrohyJ3W",
  "key14": "5jMLQbcFNTCS38XAvYpVqq21qVe7iVhBMLicX4LbbMpnULx4K89HGyPVxJppYHn4wKst8so2EdVQAxk5eT88snp2",
  "key15": "3v2Js29kF74pgNosPiufHG3JStLtn44NAnqBmHk8AJdwrnegfiWhWW8WLERen5WCtHLjBrH4htvPxncJq47TnDKV",
  "key16": "2rdb4sVd6Sfws6gb9Z6aai1fz9gn1ydfZtWxgtU97rsdXhVF4xfDQMbFAW6oT2jor6F4z87oyTu9WLcgJRLaj78V",
  "key17": "4vnRBiZMaZCoXfyBWTZKdvptQRbje38EhwPuHEmd9ebSzVJ9GnojYdHgqT3Q3SM6b7mkU5YzAoAFnvdYnxb1yUZ5",
  "key18": "2F5ordafkVsAuKkXwqWfNGVDMuYwLyqCMZ89HGj2iN8WVrfjKG6tYFCht6jGLbeLASVF7s1fdAEmRBtGfGTMW4Tk",
  "key19": "5TppYZNLQJFjvikMZ9LK91GgjBqbwLTkij3kmZuU6Tn8w2GJnSzsr6XAEujVUJTYtgSYgn62J1vYqaD24NfW4kth",
  "key20": "2Joz6WAtxah3BYE7DhvkHyy8MW6BhLRQCBUWsrqRo19S2eoLzEiqcQKNvPR7xuvbxugWW5GTg42rWRMso2cUCxKB",
  "key21": "ERGXVExU3ykBnUaaBM6235iiLGbJSFLEbaxbjrvAJFNr4jn89K3637MoqURSMAKXzALbmjbKt9wcLWB46mjFBJr",
  "key22": "3ADuYZhMjuPUFJd77ad6G45VTY35F2jP6bf17sFb7DGqFd3bkQ7aX7GdLhH1E19Zked5gRVXJUmmkHp4MyuQMh1i",
  "key23": "duSgANjmkc3nJeMMbuTMNvbwMRn8aJs6wZujwXYRpV1edewCeeCDQ8uLjhmNTNZZf3E4ey7bqcYsbEHj5aMPveq",
  "key24": "4XwqvtXrpAzheNRoZcSeCWaaGc88cBPokrEq63rDapWRaSzMdnU5X6mSCwErv7vVhSBJVvvwJwSUsLqAE9k9YTVQ"
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
