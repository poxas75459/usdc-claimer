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
    "3fDLtvX5SFeEa3upE7uRyHTtmo5qkCGFS3fgnQKjxYaKaNMW8Tub6dXhWvhU8KiCG2tVmxBrWkUvUxrETTMYKEsw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23gzQxamUJFxn4W7Gxr9LbX4yVEeT2xDaAcMZTkYsNUdpUWFTozLz9pdPtUn5PPRVDGPELavJyJyzXpVtBJYReQ6",
  "key1": "4x28nR1EydZcoPq86dhiVE8UKaxKhN9f6jdqbZ5gFyEox1X4UcDNHg7pRNCT24cQSHMhQsEKLendt4mR5i9QosrC",
  "key2": "3zicbqZcXbH5WVJr8KRNyepbRkLiEewfFwTubrhr4Gdb443VedMgF1eFRX2HY4NqQZcwVoXWiQGTkrJZxErvqREk",
  "key3": "dbMMU4eeSLi6CHJ3NjUyDVKVCQNo4c2tugfXcCSYELARfdC7TuPF6M3QSjF3dWAGy11rjmKjasSMYxi1vgDimJd",
  "key4": "3JmBk8wq5wduK54dKczREFS6KZUHYE1eG2JK2kouauPrTy3KRtowtALyum4gpgY24Z2uvbABuWovqxGYrmHGsAzd",
  "key5": "26G25Xw39Yzq4rdp44srspfnonKLmfSLhUGE5VszZYg3S5jdUEC3T7rCKgsyZvA6BtKTBKK4QmaL7NDK1NoT6kzf",
  "key6": "33fE453wBigq8VMLYByp5irjHmTwypiEdCYMKhBwsAytCn2w14UfH7j11HRyGJGwHoNLrb9MzRNV6nuMFGPvAzL2",
  "key7": "mDGp9pJuDPzuwgCYPM16pdhxSYZpcqomgVkNp9a6qrJvW3Lm4frNnFFeMgAZ3VsyMQmMjpjB3XWoHxE89eTWaXy",
  "key8": "3YzB4Dx6941Q5Y7QRCArMSvgzkS8diMwM5Ma2qC5JF2xFnbwt4Snek3ZrgH8YD7Nzu3Z5tvnqBNLodwSGBB85apq",
  "key9": "wXWctbCWpWEaKjAkZk8aRnouiYMWiq5V59a76vnkzLxQud3ifmRLqYVdNd2sFyc1PnpEu7awLkWBc4Tuz5VFWr6",
  "key10": "2tcGhj23PPCHfuG8KA76TmFsDXNCAo8LyY63cUhVqkgdc66pCQeHjeNayB6RETYaozvv7habPzZy3QmVWsyHnuun",
  "key11": "2cLQ4q64rveKvJfd3XDSZfP3xnEQXXKb8J1ciedwPpYdfadmNe6zcw8EyKiH1Y4rcTm3H3Vg7MFT3UDna3tLK1Fu",
  "key12": "39cPNrk3D8qLjoGcBuxxpdh71LCzVPnmA4e7km2ZxQwtY9SVhFC31CYC2QXwuHep5JywQBfytQ7Y7eX3N21QFkub",
  "key13": "4st4LjzfnGGP9TMzWksiamjFuNLj2HMJubxKsqeoa8x9p9Pn8t8V45cvi6n2TVJsZ4WwR6jxzV1pZ4Vi2KzJYC1K",
  "key14": "5navB81A8oTHSiDvB59hS2PYAiDwNH3ypBY6bEpxyFVsM7pjx4tzvRfi2ivhXk2SJk8uSBQjVuQDsKqtyT9CQbXd",
  "key15": "22Ge4J15915iYe1xmRg9hJhb1z1LahHaiz1v8DFKMZ4SQgv65mHF7Fif89d1rS7Af7RQH4DmXj2H38JfQw5WDnx7",
  "key16": "4Xf7LJ4zzPKzaVVNbSsbCJHSHHRCD7BnFmqzkrnsq3v6ZAoucLjTTmDFTWr8SgbK7WPZi8WEqPvSbKMHXiAHJGKV",
  "key17": "UdChwnNUszfksdzbn7sQ5iLWe1rgfzkqMdQNjqHcuTYEvoF1JzjVXDVPXPWASxSNLwRrUdgFo3WnmPm2tiyEsp1",
  "key18": "5eGjxqNpLCqch4nTxAky25WoVmE6XnzY9zhD3hqgWDd1tmYH5QHXu4LuimfCWmC41osZyhiX3efGJ8NBQYzMqSgq",
  "key19": "67oqAJS4Zh7wKkYaMdbAxUgWDzCybHfLJ7H8yGfR8rgxYTjcZ2zLbwGuHrUD9cvNyzAgyFMxQi2HDjY9ywt2sZqG",
  "key20": "37rfFsw5T6Zs7suK5kshRamHzAtG9fuHqzmEKFqVs8CEWmxPSHzyjhPMjKVKXP4nMyDzyn5xaaP8MXve7ptcrxXZ",
  "key21": "3fLhMJaoGNR1ET2dAmjoHQMeLrZyLAgDVS9MSvMQJ6dLJFEeuzYPuCJPPvw7fsCh8oAXCNndhERsExyRgCWmajBo",
  "key22": "4tSaAYzAkfGDndgTRYm2hwaJQcWpJ98et1S5EDxxTKGBzdvE9Fgokftp6WfkCXwWZQhEPLFnp7YbYyeZgnYWVwcL",
  "key23": "37eCiXwP4r75gYMzQVvvrrSFLE9hxi6L7F9CU6JrtHJ85LodQqPQNjhjnEbcgM79MezkGUkQ1hQ8Fhb5xnPL17Fa",
  "key24": "23LysPe5osvv3FXQHb11N59cd6maHystCV7DT9GMcFuE5obS4zLGZbaGYxYqg5VU5H3f149Ruy9XmjjBdmws7kyD",
  "key25": "4ptxXhZ9AxwVNVCzhv9ENuEcQ2pRaFoiJYJCEFQp2rH3r48aws35JFwznvSW6mpy6HC9bufww8oXNtcersLnE3P2",
  "key26": "5m32ro2mfJyLM6TGxFxP7ajY1GAsPVHo6dV26jtRjcR4KufVmPVTsPLsBvD11mjBf1t7Z7r4L9cUCovkAfQNL7AF",
  "key27": "3DdwyyYSJkfigndzgK3frcctn6TQDVneEVCBL7uHrResMKMU7cQTy79fjKvBeuFFQCng8rjpabJG58sbybeM25hr",
  "key28": "5LAnBTFn9uKrZxEX98mQHsRo3J1bbRjxzQ6Kq49mGxzpAui6oa9h92w7ZdqiwLxqV1xFeTkn8rX1Sqo1C7sYbN2E"
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
