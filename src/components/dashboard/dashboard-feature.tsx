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
    "2a2zXpnX9ajxQiKtEkpNGhmopJUu17tMNGg71pHFezhQgXc4BR9Vvg1M27yRJqB4PMnqj74tudYAXwP4c5YFwmg7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HeckDPNTDPc5i6xGLjkykTHJS8aXF6nDgeUbGzHrkV17VawnhBjTuwHMg9CzuBGKPWwxYM9LRDzVV4XrDAp9x6n",
  "key1": "3wKT5ms2TY6dvr692DHU6wnRxEFW7Gy8Xnwxg665GTcqMT7Du6kQabAEuesBaYuqhU5813nWV37YC2Rc3ULmd6Vw",
  "key2": "2r7vtDDa7mJxrDU6qUPotccNecUF9mZFWy9xEm7PDofXPVtPM4zFr9yoVLqxATqP6683DWXn9uJnWZLww6vRoVgr",
  "key3": "dqJGPg83L8zFTkiGL3EHP9hTbNnRZWhS3rq52LWsgA3JS4LrsYnqNHQWxCTHeXPBXTAwF6wARp3b647ka1SZsBM",
  "key4": "MX4tPdZAjbnU4yygCFvppGsq71k24QaiE9Ni6CMDzg3zYXRtvspR7uKXBtefGsF8qKqRuvyyTRG93xnZVTdVmRV",
  "key5": "52X3Aifng1bvBzEDfyPFijLuXE7fcCBR98h4HCst6nW2BQNUFNZGm5uRrdy3h8Ho9wyDqkLN6BZe2diASTYr4ZtQ",
  "key6": "3p2s4AsWV4BLSjhm3D7q1gV9iozLXfboTXjVfLLhMFBUwPwBGKWRdG3o7cKJRwvzMr2Hba2VGJJLD7ENkmJXJYUh",
  "key7": "5o3pkx4UXaARHwwHtURxCc7t5XUuy9orcpYDCsSskbCweikm5P7HjaeYiqJyK8fi6Tq7xRh9nm3psarNAbGQxMQY",
  "key8": "3aw37airE6EbomGbvyU4gMxZbJT481gihoeGo73LZhEL81SEUPCHDrqY46jse75dutWU9v1VeT9dEuMR94mXQdWR",
  "key9": "eokitu43XgWqY6C5ZRws7sFzfgWUiVmn9YreNH5cUfdbDhjFHiJDGLKyTbLtYb5oGYz1yxph4SYxa1zLXrVurCK",
  "key10": "WgLEay7XFQc64C88Zg98QhXBZ5VuXATfEohFLE4RmSHg5jap7FvcguKhsYuLCzoe72XyP5kqYd9ep2Nv5gNvTnZ",
  "key11": "4n1Jz28pv5HwQuvrMS72CmGVDWfAbphHJ8DnSAnhQbejsFBfEHDGMozoEdA9rkrQ9CjRSfvk1YNAdFUDqeJREwTY",
  "key12": "M7u6DyVE91fBGpKbHP7BYMupTByE58o2HR7W9kKowmrijGnvxYiKCqus7rYrU14E4dE6dnFPeBswR7yZb8my2uv",
  "key13": "5VDk2v2nhrnQaqy9GDZXu89sHNPDBjuTLDdpkebNpBp7TNC3jrn4x4PF3zWP1X2oyY1Q6y1ccBYdv8wJh3tWVGUQ",
  "key14": "vhGpfYThfKrb7DvUJwMKCCjvJsScBSZxrLRxheqbhP15qam7oJXbXDxNBCEJVZaRGAZbzY6tNQyJ18xxhVe31HW",
  "key15": "2z48hWhPpbDjemsAPKiSYDgKph5bim5mRo5dpEjuzwMjWqxmtY1Aaz8WFrtpCDLYgXb1MFuoJb1hGxxRdQxmUgHD",
  "key16": "5jUDdd2SvBE4ET12iRGju9S63XUAR6fdsmDm2iLeUNujSQ1Xb9TanPMSbsxFMsa6iG8r3Heuuz3Jaq5EX4g8rAg2",
  "key17": "2WF48A83rBPNsteyweo1iXPZv3u9p4Svak58pZAcDAirLTfJBu6E7Vf5cVoNmNVmrm3yJWUw7Hzb9gURbzv5LfxQ",
  "key18": "2zpvCfEsXMQFDN8fuhP458havFLfpSDfuRzAHpdiYmB4FppRKdWRMrgs5MQYykgrgKZngdkqKoi9Xsb6V4aCp91X",
  "key19": "VqFdUpzttkktPpfdxN1gvbmzPmbSTYmGMvafcpKFZq51srrF2dpoKoNfTh9SGzQtZ5BFYQXWbjWHS9xy8RE6FY2",
  "key20": "3AcmJdgSjJ6SqG3syNHDJ6bDx4jjVDNKHtUmh572yA1yr84TtaJBvbWkEfE8T1g8ZWGEu4iipiVmv56P7fEqByye",
  "key21": "qFEBXHhv7MiZUzh54k3UKSsUogPQ8jvc4aMsgohJPFHCLP8w6AMa2i5Qvt2xPkQwiKceU8TCT2MTGooLp8bhyq5",
  "key22": "2qhydVKBqfrJKjS5cFzBYoSRyLgf1EWLMoVq1Nd1z9MMAkVaZKBAL8q6qjozSichtayzjDFc7LQd9QjEo5DdPj4W",
  "key23": "3HvU1mPi7K7VTTTBKoKH1dUqN5oWLQ3oJHmxDxy3g3YiW67r2EhWhxw9R4rtCH8chqPwo3GkF4dWN5XKjci3nDiC",
  "key24": "4vcDqGqP6VgX2wHJ9gPU65bJaX1QLHfD8nAhHCRVwqbq3eKwquSwHrAair539VkaAq5zZBNvpHprDXLb4gFAPxrX",
  "key25": "3dxHXVj843s68SVEE46yLdCJX4FdTd8yPYMzKbUBbjUW6Z9VbA9DBJvJCzm6qcKBnX7vS7chNGx6PSd1EocdDJ7F",
  "key26": "3NDR6xeujMHa199hxBqn735urPRj2KknB2SWCFb39HWbDnbVke2MEaULNF63Xf6hajcAvXXWXNwKzor3XNxddJ5Z",
  "key27": "5tDxrsqc7vWd7rLDvAjVoKn1e2tBcQpcaMpsZBzUCjxBoMHeXDyrE6hnMJgBDtbXt5Rb83VrEoz5dC5ENRvRDQs4",
  "key28": "4tMS7M2tFhjGfakqz4QVtGDEKkx3ei5T86899jDjzV9DMtJfziRU7dA3w3Qjg9VJHkH8LU69UnjaxhpS2BwCjtZM"
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
