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
    "2tLQqLj6MmfqoAzP2CanPTqiHomkuoJWcz4wFFd4KYW3jhtpr24uyPA5uWYtpJBJh2TfYKjTTiDqhcZHRHw4LR9W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44SgDouW8hbDsqHq3fHFxVqT25pWhECL5k8Zpb9ErfwndugGSDBasurGkCh6NGRHkfpLfSbTzngrEfABW43gcqUG",
  "key1": "2XxRjMPwikQjUWdqwvz7n8nq4FzzkZdXTqEK39TRP71PuJXhJUWaPNaxhekhK45RqW9ekemaBEYzM7sr6aY3DRLi",
  "key2": "51A4aTdRi7TXiKrt8tzT86R9Pf9fHXbSkZgX5E97QbkNb5PG893vomJRseZ8i2JXvh1oM2DjEje9NfyRKzSNZWgo",
  "key3": "4E4s3DEUaSXpqr41xTT6dhU8tpfFeL21goMeZKjRrfnnwV3afGsuMNqgrNqHpQn762oEgXpd7iJAQp16HuWYXG8w",
  "key4": "r7vTiWNgeDeHTXNRrqvHLS66LmwbqAjU6yiTNStwYi7prdNaHNvF6MsDQ26TNKD46x8cUP4Ri5jSSQpLJTGfY5o",
  "key5": "3Y9VcB74ftguL8fU3vZvLg6B13vTqecJN9nFFCFpeHB5YMF68ERNtZAWq6DoF6zUwLJkuH9oCFNyegByQT46CrR8",
  "key6": "2uALqVg2ehTdLPQuTRktEJZ54j2tBBJ9aZUFBQN31gLZzLGSMF4fXNdvENybJrxmmmZZUseui6aLYvz4eZWB1JWh",
  "key7": "2SchNvUxCDnvvWgo8rywD9VBL4Pkn8ms7Eb9jkLABDTAcbcP4KwNvA9yB9v5JY43Yc2XC7UanzXZ9qLaCjbbiKkA",
  "key8": "4483Cf36GUxqMkeaAQm61CQ2P3E3vyQUbhR7EngBj4HVYXzBrK5oUmCtHqw1zRci3299SaG93yoyxZQ23jyKKqmA",
  "key9": "3LdH9BnDPWWy7HJo1Q5iDxt3pfEEwYnz3v4pczWk85LXV5RJeCTEQ6DZ3ocQgk7zQGDPH5n7sffh18TrgxV3iPuT",
  "key10": "2wsftfNAnss9unWyj3LxxCR47GNH7CT7R8LHpTBCrXf9sJ8fBo4KVxjRkYLcxKCdzmNb5QG6GtB3G5bBWWtH8Vfq",
  "key11": "4jJTwPNt9wDDXvpEiwAPEciWHJW3ee8wNWZrddzmmJ3k37hzMDCJbcbqCJbZmPiUe7FYSMNdd2cV8umxahxgHa5v",
  "key12": "5P1MA27ZEATzyiLw3J7Z8ikAuy5aNcppMXboM7qbPUTdUGg2DqdY47AQ9dCXg7ZFGSzbpcXVLqjc7QjHsmke61p6",
  "key13": "3NYSx6vBT5nghtnz2HL73bVyXmfd61pEnwiiu4PPB7sn2qsLkvWrbW5VVASSYkhxgw2TmY9EQ6trEA8ijwoZdqWi",
  "key14": "5dZhSgRMQ5wP4jFA6iYHSFJrwNv6w39aK5xULxtPbH2KLuc9vQgAZXUuEPAiJMXD3QQh8j3UMvivCzYZCjVWjbV6",
  "key15": "4NzTSG5dWN5x8PZcT4s6K8zBGa8DaiGmThsSSwWPw2CppfEWmZCHfxXzMn7PSGipUG1D6WUuKGYuMnneF55eUuCe",
  "key16": "3hgPpJKpUn3z38TLvi3sBUzzNDWUoetRW7Fu3cn8HCsBHZirgaU8ZwKwzn7xgbGMYB9RsXL31wrftSecPHEMhjp",
  "key17": "3JK3uboBeLEChzcko5ZMoQqgLcKumb5qDCYBv95hX2DpiE5hVANf2rqBqV3NKkv5Vbd79BfJhv1HWvqsV5C6x7hd",
  "key18": "KM9rfscyPorvy34eaTkCkTtpJFgUftvoE1S28yDrevq6GKeePK79MssGUZJGVRrkYWznwwBKcsVStABTJUYL3yz",
  "key19": "3LBZ4utT1WXcxc1HRVHrFwBGMP2aroigk5ZmAvRw1dU8GWAPmCmaEXYfGnYQ6yocgYanuXnTHV9z2MsFgMorpqPb",
  "key20": "4aCeYUMzTHF3WhQbDasGrLSYaMaWeyMXQ68r4nWazzfaHMzPfwWQ4HCi7vVULDCmj9LpTp3pnY8xKSkjJU51rzAf",
  "key21": "24heAycwVW6Z8D8RZWWEHAVbwBVZ3nruBYB8tDEd9nQSpPR4Y48TWBcQvqBXpbVyMXv8UPeipcfjQaHkEmhcVSEo",
  "key22": "VfaTJ51yAefU5g8TsWzd5KWyHZkUH8zYwK85D3MpgnWn6ECayKbn7xqAK91hnkaNCWT1yQ5YghqHsFVgcBW2Rmu",
  "key23": "5saXHZFk667bGg82ZV8xoPGrFsKqiqyLwZdz8fHKYb4NQ5P7Nue6CawtdZbyoF4UE9PoVEguZ2kMdnTHkb3XjZrJ",
  "key24": "4cJ6ycU5r2774K2FunT85nVytS4rw3mRnLYkiCuHBFyEvz5dKmzcUah2aK2mJmn3FTSxbCyLqbg4BNq2KMP4wBeP",
  "key25": "3L9uaVvfBBBrTtCwsUMz1WSWbJLjb76qaG65PD8P6apn6haiAeAzELij18G9cGZA3r4c4Xs2GLKwTnq7PjJKj1ej"
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
