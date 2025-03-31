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
    "27GR3zJRG9oZ69m8MhLKpnKGDHdofY62LspBxCAQcwzNjpvVAKyuUNCA5PpBg7xKFr33YN8fj2LXS4rp7DoLaLmZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EAUCCiCC74nK6eQuT4iJiG4Wi8xszc3FQp32DbC7eV7UmnRB5M3w7ouXP9mT6L6geKXnBuevSXQzk99wQ5gz5pq",
  "key1": "5V54RneD4WytTjpRVco4z2Vvina2uZA9ABYQmk6hBe3uecQDLdhaUcJ4ycZ9FG61ivgZGJhfv1KykEaqMVnhXToP",
  "key2": "4MtmuSnJujUb2QME46tF5A1S4NJGTRi9dqrRNb3yr5rPZCYv5Jin97djK2wumsqHsuWcQEWr1UCBxigNM7A9jcjQ",
  "key3": "2BiC9YaqbysMu2ZatdAkBkT9B5AfnG2zpG57VaNpmUWQAoooLr9vGJrv29QbY71Y68xFGRu6iL4WzAfMJE7PNejf",
  "key4": "nUUR24WXZTXvbtoHwnymAgATrbAD2izPGUyWmXJ7VP3C9QtUG82Kxx7BACGF69tk33uXBmXqriHb5R4zhAAhoSA",
  "key5": "2Ec8ExXdvZimhchgx7Wue1fWipB986xycrHYCRRawwF4FFc3paQdc4NpRptuXtpNT9tAoDpdQ1Kr3sE4vh4wXF5L",
  "key6": "4XwVGYYJFHaBqHGxDWzFKy4rwNsXwSwq2yGTTiNWkGFedZzGbYKY5pVee5VjtGdWKGFXmTziGFbYntUcJmXobiQA",
  "key7": "5HSodPc3FAaMTkhLSzqEPNq7kRWnBBrjR4YHtgTb18VCJfef6nmpUBC13DVKzLqu8dzKRPkxVWtCtWG4Gc6MkiJw",
  "key8": "2GdD2ZMM4mRv5mELbwD9PuqCTFxsyw7z4rydGPCBQpXJzbUh4C3k47dsqSS1Q8GcuBYRKDG7HBKgbPLVurY9a83K",
  "key9": "4k4oX3XMKG9nPZPjv1Tsc2RhyRS2bqvBPswCj5VE2uBueJhAndUp9uYwpkSbm17yLp7Y2YFEWf5k31TVXK9hsPtH",
  "key10": "5KNyyiNb8K7YYe2S7aSMuxQpQsgmakoWGvBPcmE9zQho9oicDqkDyNmTcrRWGyc53b7wStAzxphFtWW4fXTdbJ4Q",
  "key11": "3rCKUbgT3bpZYpea72tQCNjBykBVeQnVFpNtVCVAKz8u1iYLsrXnUu3cxTAXo54as273WZZ6d9ui9GSKUx1FbRF4",
  "key12": "hcJiSPzLjaeJJ9hnofYLT95LPfkwwzsBEX7DU2TLu8Y7nryoCCxRzFC1er7MM6TjVoJQm8Hdf9MmRM3thZpyPfu",
  "key13": "extYg67uDunujotytuwXvV6oK6KeLRo8E7z1t3qLYvkTnRVj952FcY3fzP9vxncoXAVati7ZwSBh3q6ovTMGDv3",
  "key14": "2GezhryGhLJoBHnhHCLmqdfG5JDJHmMUYWiUMMHDGhbKPqpZ6HpQxGw9nxvzkmdyaeFn41xiRmSduumZWwZyFXa3",
  "key15": "4jt6bNPwp5dZ8YTjwGQYghH9RXbiRB4msq7A6dAbHmHEV5A5MqbDK5PxYxumkyft6a4Ds99skgc8gM5nZu3gTYRX",
  "key16": "2iTTtA9MzuwieSqAxh9xeu8MUGHGwsfPwXSXYkubHC3XS2oFgT4oBSetDNn3cfhUYC9CBsXdTgxsBvAriBM2rrhc",
  "key17": "2KGmVnJgo2uixud5kPBzzZ7ChEbFESwfVs2xM5Mz1gKmdAQCK9cya3ypA9ePXCz75TT6RSzJ5qczdUKE4Q7UUwCk",
  "key18": "4hERYRzhJaWof29hstrcgfPi2UyvQjb3mnsPiBXcW2KEQXxuSuBQS8o416E2NJtKXr1hDtt6UEx7Ey7XcCbaSBLo",
  "key19": "3dTRCqfU74ekb7K3gBxyjSdiUHWBdquzi97eSa86pG9UU1wA4hK6kJa4jUbU6v7r7h9M2hmTiygfMeqkPB71c8si",
  "key20": "4YWBEo1eXwQYVnD22FgRfNwaAQioEoaCDZwWob5tfQqSKwRU3bfMZRMUMYcJdqWmTpejc4MJ3eAcKjBLmtKSam4R",
  "key21": "2dycJ5PcYxvHSkqBQvd34r6kKjQbEvYnGbpMzDM7TMCxHrfeVSHkRTA7z1X23GPn4iwbAC4GbeWdTBJfB5Rtm6WF",
  "key22": "5yFXAEqhuRwkH6yfmt8FjJpomGSj1sDcxiqY2RPBncVuB7o7vavbu77hhtezn1QwtD7AxUciVyZEJEfGVNfQSwbz",
  "key23": "3XXem5gmcwx6MAH6yTB4pkGdMWhWYNQKqmCdNhfJerxGFUS1DCTqvEYCmjyy1VhxhpNADuPwJt51aBgDHrsG9aPc",
  "key24": "4EXZWu7NNXkAMMResPHQAJxtB6GWBof2cmkhTy6vE9rhzsravb8kcTWhptnFtz3UVS6fR1pXPo6VQheXkod3ZPax",
  "key25": "51AcGjDRoZyqEqfYUHKKrqWunjoPVgRtgqMgi99TGn3XBLLRKisssDFFbKQ5MNxurf7BbjAHJ5GzYiHPMZGGDuGL",
  "key26": "4YhUbWAYHjNDXW3vQ7FLiLA9QUvGUpfa2TVNpvz7YeSUamRRM9cQhJUxuQR4D2bDcT2PbBD7apkA6n24SZg73yx5",
  "key27": "2AzpPXtxC1bg2qUX3iEgYRBSLvF9YZSPam3ekjUxXauKJ9sZ38E9qYajKc8AUxp6hsBvjf52b2UiKDwSZ4hnshgF",
  "key28": "3oshUcHjgssZxw9gnAQnSrCPtuhnaAZKQQFSTosZX7keZwZ7kh3msRucfE68XAe17SKjniJn4Nx6wVfW96eHYbLJ",
  "key29": "3CQxEL4mtGpdSad7utjBsrPF1qeb7W9wS9eoVReBiM4eotT6v5YubN4V5Qqio8ERDAUbMbuWGbpdZCFcUJFw3g1T",
  "key30": "2KqNXL6vn4gv5kkEEhYZ6tB6FWTSLSSz7DRQCYcA4tA3z39LHLiV3K6JDruyGQkqHC765swM4NjXyAU5K4W6KCQu",
  "key31": "Xpqs1VEC25LP9Hnua4HMdez6hjdnyBTtEeYFUYbhXQn7zt8sey9Rd84L5r565dEJec4SjxLuVqZszsekUkri7LC",
  "key32": "5fYjVdUDBDv6VuF9hk3puSbfZmFoNEMTb5oNuUeXZdV8Sr7tXfcGQiG7B7KrMSQxwGK7xVv6zaRaGMZVUMydieVw",
  "key33": "64pVwnTyrV9xENCG1acKKz5YURqmFdF89m2SVGwztM2iGm2fdmdNXBqBCoNCyXgww47N3HcvQBPEYDXGSHWYrhU5",
  "key34": "2XEG9CAwoVTzNkX2KwwHxMW2is8mneeWaWZAUoymvCXUumX2Z7tsUCP6mjpHFkZwmCUWXtVS7rWfSAeTHVredS9k"
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
