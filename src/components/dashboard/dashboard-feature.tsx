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
    "5k9j92i9FQrP3NMmAEjCmEtsKodsEiEHiVfqBsTg4uKVKyB8nm7CqTbwGurKFuKGKVLobcVLifSHc9MVyEz3if3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pNG6CuRY6kmyfDT1nAjVHqNMsdqmsE3x8CHHJx5X8hwbTwVntKkWbXctpBo3y4EBujMjpj1TkBzJrPtyiicgb4C",
  "key1": "HQcKh1QtXrvKkhXfUCaVgYEBeURD1ye1hbrjiGP8zav8czHDjX63CettBDC5ANwwi9z75jFPt7XYAoutzWdq6ft",
  "key2": "2nngAiny5eR9wb6A5T6JC2ThgTC7ba3iyZZdcp3K6rkHdBmW8MURzQTVWu8sy3Jdv2KJFQGMocx3ziXRGGpbVEiP",
  "key3": "X2yDyEfsisJ9FQapqN6tgbnxes978v3N868p3rDRcWiwLJG9Me6JNrvLRcisuyYPzcWhJQDTnbFgbGtJzMNpvDW",
  "key4": "M8YbCLcazJqV9nS6yd6Uw8cCLxnkT62vqZWkd9Ykfu5heqhL1P57DosCwj4phzg4734AWRJvsB5Kjiwxo8Xncma",
  "key5": "RQPz7XicxhtmbhQGKPgPFgxNiwhnnGKafRmcvAiGNxCPCdnkgs8b8G5c8tVKEPEAVCsjKWG4Hgq6ae8EsoLnrFE",
  "key6": "5Po4opWi6KKEZSmwXWGijYUbQrxhNmbNkBG8FrAEwtTDDbs7tYab8gqR5f6enXrVfkEExLpAagEKYZRmEpV7xMd7",
  "key7": "43CtZTJnKD9FPvmu9ZykTL3szrJ1k9FTnodP8wRzS5guuGpghPTYYVbFWjNEyU52TWjFHVQwMFLiJid9SBQCYzAe",
  "key8": "f42SSCUzze7F5ZSKgLtMPkuox1vjNcPaAouxWTWnshd3FYN8be5ccpFFjVnxwYHmuurVzfwbejB4naSg3RaYzgm",
  "key9": "4mTpHEhyf17zRuUwJMoEBgSHEosEpDUWnrZUzuShRL6TFeNuo4wdV8xtemZUBSrVYbC7hJabcK1fyh8o4Bz1JwkN",
  "key10": "4ydEE8BGNHc7NhERUnbjTNzSTB1rP1GdrzPydkV8sMKaTiKR3nFdQnR7kAjcNsX9wpCmFaNVRHix3V7TLNtaShTq",
  "key11": "3RWReP6PFYkraLqViERPP7bD1pNAtEJv1sRusmpmSYWG6QzoidPJedHPmBFYhF1GknusLp9Dvaar2nviMSuDJDP3",
  "key12": "BXdBuJM2CBEafkeu8vHExaCfjNq4RXsKE2CjxwmjTjCsJqezyXXHqsgVfsBhm29rNJ7zCwTSustmjSma7pzjcxr",
  "key13": "23ED8GAqvvJQRwzJyh1qXz7yaDWEsThfadFLteNcQ22wvmaWvb3QwcMjjHwWGifpcFUi2iEXi9X9NhDfd3MJf1vH",
  "key14": "3GZGs5hfRSc72GHc6WvpUQvmnutjB1zeukWx3W46E4Cz6f5LkGtMhr89DzvjPqHweBg7BARCp4PupPScRzA3KoxK",
  "key15": "3GS9yAnL1EG9LTZZ9Lf8vc8bjTwzGtvouKtXJerRXWEmeFPzGUhiLV4qWFKERiSZLTobGwsrv7t99po4nhutKNqZ",
  "key16": "2fr97x9RajsKffu4Rijj2BPdPZyZyQUJ9vPt1tbcYmyfSGnJ1Qno2oLXvxYk3HKycjSR253aHDiVfVBHh98XYVKD",
  "key17": "44u8LbaEizeiMn2WHUGdqn5QhwB9dFszTSekRpnznvvTzBDjAqmm8E9oov4WwxeBF9r3QxT2nZ6ZPWr2YFPMWAT3",
  "key18": "4EEuz6VdC7reJVzNbSb35S5M1r67W2izQgVzDKk9gDSrhK7AV5kWFQAzRqP6TkNnicSgstWRuYQBce1GpfMjUPdC",
  "key19": "2aXHVWTN7rbqCZpBq961UtpR72iTy3tknzv9CcH6FLQZTauHLcG4fUycYndw3xdQkC2FK6jCQmkFkAdoW624z8wU",
  "key20": "3FqJy9mAHU8E1CGkAsnwcaQKUcYFdL42mwWPU6B6TmJntPAapBnKD57FcWtvFgtKzuqf3gVwWL7KEv8vg2NMBQjK",
  "key21": "3kBb3CYn2rsRxyBBy39zNpTrgBHtQzBuVmX2JM4KYTEKpx9ALFNWco7k7aui36fL3vc8McyYyiC8tR7QD1JsMnwq",
  "key22": "4GSrDZEMyDxULnowDqihvx65PmytPBtNHwRsTSgg1FY8uu2ctyZgv8pJLYFt3tkeBrGYCRpiTeseR1ZVzegQb78X",
  "key23": "4aAZN1oxJfWsfFhVck6Vba2d57xe216TGERVh1W77D1PmU8BZ2rPSZXtY2HG8SMtT6QNRUvjbtXxJTaSiXmWNSjN",
  "key24": "4qjiXevPQ38Qr8fJAUooWtX7knS2oAePxQuiC4K43i7v8nJZsN3AxdaxTtVmTWdZjjz3ZebLNJJszeTwZ92MKT7w",
  "key25": "5RZSW4sMrfeHmcQzDEspDGsAzhibt5HHXoqngojNjWNu1FVQBCMPu3MujCc7W1Szejubv8SaQCvD2JAJyP23dNKc",
  "key26": "4oF9qxRqpDydzSDSDNT9XqC6BpqdfWC4iofNT4AY24SirtgTRZKQqJQ3RrKTNBtABY88bGVHBRADiDdcxnRgyacS",
  "key27": "5p7NWLjL9sRrV36rW9RDt1dVYpdcf8sLCWA4nJxs15NBwktMDvoTkBwqAopNK1MkL9fSaJSKJHv7baC3dotQdCFS",
  "key28": "427z1qhdGZWAcVZ1JUuMLNCLn8KX3m2yW5AZp8goemtzqz7cPZanQTjciSkZAGHPErPtpJWS7rTE7F9Hw5vB8K3A",
  "key29": "2LKfrkNfPdZmsoEqfiscc1xyJasJkg9NynF7GDGDPmJJAYfyg7qzKLxsYQy1A5NpasnZk8XaDA1rBz2QzcrfiFD6",
  "key30": "3wvALZ6sHCjbdUgZUvYXQqjZzqK9DMVK4GuhzjnubzGD92gwmgz5diDd61qUuRkv7rYvQPo8HACNaxChsb8yjhQy",
  "key31": "Ey5EG6H3D4bg9ZnChQGN2SWSDJiCcJP3focQvUsByGx4hKkqL2Bd1GpGY9p8fkZqiVSLAnD47sBFuRhVLsBEo9f",
  "key32": "3UE6WL8qvD83wAbhAHpzd8WkeaugzUhf6cmgy5sFdPm1P5quPKzUT2CUKnBtZQZwgsf3wPPM5LnX2RaWrp3zmvM3",
  "key33": "2uVVagRtjqJx232VuiiDXNoTG3vhgZnDUNMCgYkwtAxLQDdxQPo5hWsL8eNCx6eKHzCMEFJVJpkPD1vjCkk2TPQw",
  "key34": "xQs4namryZGLd6h68UghjBnfyF7Kkdo14GqZSeEQLugQsojHV1RMNrtkw5sgFfti918DAczxjRPJXAoVkWGZrSc",
  "key35": "4BhFRyYAJNfMa3gTLaHcTrHLFikqSqZWTkBMGhq6Y4GaHct38hVcyWoNYECKH8CGnkJyrHWbvbRfh5SZmNtGV1Dq",
  "key36": "56kA7WAt8pB4ktquLYXgEeR8Jv4enRaoswKqLepEauVvEmEe2BHz21JecxgopEMeqUnhh5QzeQ8Wp4fz5uHM6Vrm",
  "key37": "5Eh5wXZZkLnM67vB3hKvZFarAJWHzRmipcgCukJcsCYfZr5vGzL62VyNjHj65HPz2JsWSgJWeDM3WJDzq13rRQcY",
  "key38": "kjavBraz5DdZMVwT94ZTKDgD8hNoKginybd4tt9ognGCRJYr4JDjM8PudZKZsr9XUmu9RsQZ2NAjtTUShbxAfT6",
  "key39": "FRJWc4sw6QvfSfuVEXKhkXChvw3o85BUwbCFnYYKjGrMdvawinFVUgFnUQzJiihUVZUdXRcpMv4vApVCo9A2B6k",
  "key40": "5U4s35SnXuXgUcGEwpVSZWSbWQTXjbF4jQ1tv3MP75u5mknRXxWZwKhi7P4vbpN3ek8LLzd5HmhgTo1rWfDjF9L1",
  "key41": "5f7bpPcao4gtXEaKCGafzpgHgLvVwtB8zgdTWscsnGAh2VfMR6C5TwTjZyv8paW62c1s6LwoyPdnnmfQ4KL2JEEB",
  "key42": "2TTLbo3poZ7qKxb1mZAoAmhWJrQ5xDcH3UT3pLaykMTBqtfCBrQguNWxp5m9jcWtY18KDisGoTNXGi3Wbu7zpwy8",
  "key43": "3ZKDNq1p617xo2DkQX5geaFXsJZCUTfLpdYis8LdGAfnqMBb4w6C3RH8R6636kfEjZgcbL5EhvH2SzGc6M2UUkq2"
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
