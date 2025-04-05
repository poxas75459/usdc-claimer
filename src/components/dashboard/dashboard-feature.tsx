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
    "jwU1fKTsf38KiQHftMWjpT3GQ9wnV1eYS8Y1FedeB8o7EDZMYKJcLuxPQwZ48vyRfQQSxAiDg4u4tYUYwhpvqKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GN41zcQJyyDvBiagaj1wt6ssQdkjkdvGwjmHoT7SfHNx6qetvDru2Y7WTpHzHHDuJYkbduxMPekjjk7HWNSozGB",
  "key1": "2cXrsFjt42Ka1CK7mimi9Wda7sWpxCPCzD6QZRpwXKPxsQNyrRFsp9c1tj3hy62N7Z68Mu9vB9SjHc2Gf8TLfd4",
  "key2": "5ZkNmH75Z93SwZAh64VXWpDcvuxmiKUtW47LWsf3qMpqdLBqj1ydExR2VygXXvC15DudgwjtYkBCHA1H3YJyvdsL",
  "key3": "5Wu8fARBmZ18eJeh1UdoVSUAUQjGzJWDQxqGmxe941GFXkX7zj6iRu97Rs1jRWsBQmhkhANDmB8MB6Xxn3HacEeq",
  "key4": "kkYee7xC4naGYUvy6ZCCj45mQp8XFLM8rTczjCSWMazoZvdeQXQHdgWGBUwaBoSbfmHAEsHH7uqjiuq3epbRfB5",
  "key5": "4adMarJ22HGSEBYVufVLTkrBzhU5PNFTCC3SB9GZMkPkNV3qVs9kppErf8j9D532x7p1H6dm6pmwtANCq2JQtPqE",
  "key6": "5Hfr95FrgjBAQLMHQT57CPBWim1myHRa1GwSiZ6V4uEipBPktfSAe8f5MSx6PBR2E4iR7nWzjePtfjEBTnx6nZk",
  "key7": "3iBsbd97Yxs1QMNWawMmabfYhUZdKAAKBVtHr5A7nZKQYZ5c598KJ1g4jWVgi1Xn3tqsspuRwoChRXeT8G6y313Z",
  "key8": "uKo5MVGfp7GvVjG7ypuGYTzK6qrvmxjqk2r62DbaQShQdfA3H5bEEX3iFXdJEAbuXmwNzESApDo72czbFDCfR4P",
  "key9": "67JfjkjfvXdZNtVPtFYe7MQyhuUYWhbEg28CRiphxyrnwvPZkCYHFygMBgkSvSyitabNU522sjELjz3VBCqiZPAM",
  "key10": "4MW2xwMLWQxRA3SkEcgbwAMymrccxsgcWmw6CaiqVGKey9R7XaK23gLeg3YnBRA29M6S6yDBPDAXbyZ75cNpzi4y",
  "key11": "49vt6f3fpauBr77ysDz33m6VgmsdNnXvoit5ybiWEK6Wwx8PSm5pNJxP7qggTte3XZUWyrRuWRUB8htr3Q3pZiHD",
  "key12": "49vMXoNnUyuWZVwD91wEqSMG75F39j4dyxH2sPxi3fPkUtFKBNi3yaL31yErREvgEm5tiKb5C6VDJaCV5BJY9L6c",
  "key13": "2hWZckHk6pHSCdqnNuayHQaVt4gfpZtD8b3odoR5ibMgx9GFvB8mNxJ5vRm1nXjsCQ3VPLTyshfrx4xGRTFFXnRo",
  "key14": "4VH5TmGPVCBQeWvdymMqHjNWnmCjkMdXGozhxyTLJwXK2TdqCbbgmpgJUctFZgzwwPvoeQN1QpGWfBPysPGYfGjs",
  "key15": "pimqQ613W7d9MzWGf2KWZgcSmGknRnXFDvaEfJ5A9x8jVjZFBLV2F5DwukHimjVZFj84sS3oC1mJyUBxMc6DC7n",
  "key16": "adtLynpdSr8KL6EL8uVi6FkackC632CxtY9uB1215gFyvXu2dtauYHcAF386StnBYbLP1T4HyRLMNwJzr4eCauc",
  "key17": "3AF1Y3EXEL5Zs7FfPzYPCRbzjgpN22RQFaWCfkP8q1YPaEPwhLt9pFGofQMFS4AGnDEmGBQCUiXU4qLiV2b5E4VT",
  "key18": "3i9jemWJrLj1hTh14EZtYRzcraG4ExFXeiTVzQLWeZFJoD7HJqnhY3auncuJPRtWMo7KGqbHpdbCAwP7bp5PVong",
  "key19": "3wURRJs4rhpVNU3eze1WZkJ848nPouwoYLbJDXysVBHFsGrvgZnk5AdQDNKsoiCDmNeJ7uxaiACrCSJp9bGDLaVi",
  "key20": "2LWVvda3DEnURKU68EbNYBxxBhqCNgXnqQDADQ5gQsYn6HynkkJVGy3xJix2gDYc4DbWQPW27No93t4xYPYGxCSS",
  "key21": "4QovZFK921V7zv5UHmvmxN2MEWBaXG4DoAHB867aW3DhX8HxXN9zojVPpMGokWJWa5KaG44D9NgSHSsAVSWFtdis",
  "key22": "3EzkHuzWgF7V9c9RbVD1rjxt2UBsoStDon7Fzgk5AdTnw7fGaAdHwABuoSm3kWc5PDQykEBLz6ZS3CW8RbWFhn5j",
  "key23": "5ivAifmCJvtoS27c1ucYJMSsHMXmP1bomyXGrv6zNUZ646jVWwx8HcQgBBX9SSWHzwbr9w4nxPByQxoA6nsAEgA2",
  "key24": "498oNqtUSuXsVDkfjxdfogjWq9TtX2kVaREUnMWEig3fiHWtuVFMsfqh1PDw6TLLZnkRnW5HvZXDTbLt4TCGBrg4",
  "key25": "5afEyzWA9HC1GCkRyGtP6E3ju5VM9vgQPjRTt4LKjqYRasCjEr8VBziCMQpZVHhtE2ZiZcLhQBrFYBoJmaChCTs2",
  "key26": "5sDjwBbuXDPzgYva8qxkmwb3hwswBA5Ci8YbQntXK46RxvQjM4cbE1bydkwbYZhgUi1VK6nbaNkoRNA2NQpr14Bc",
  "key27": "3cewtrugaRv4Tvgc5Y9mdn1sjfG5nYwMymHxhkgmJtomdhVGaFyfbShZdL2K4XSnfNRWqUvREsacniCtfdJJpYcc",
  "key28": "59yUigcWeFNdCNtbh3KLNRSQ8SBhFp7f3FoP9pNrMfQGyfZaTfw5SqrWocujvw2sYsFzeXX5EqGs1Sg5QEztGhng",
  "key29": "4mfBgKYAsQmUx8f5gaPFBW4MZcP6Z28ikPTGfR89CTbzEexhmNQW1PVEh9UTLJjrqUD3bT5UDDaGH6k9b9CS9ekf",
  "key30": "4bzB78FyQGC71QVVG1t4jkLrisjrX8H4a8k1Y4RkSEhkFgEDrtdLRXZR1Gu51vXUJxEigzJ7tXGukFPEDx3WduuA",
  "key31": "43NH2gNhL8gH59EUKHruZzgSApvTjhk4Ypw5VUkchESEZiY9fPeopCGSzQDQSFjobA4ktUDQERujJfVzUG9XiNMu"
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
