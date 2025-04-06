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
    "3H1q4rcskkt3ezvTzryAUvxBwJL8JDpe7TurpYFVKbLs6mS3mLmpLFBzDFZNW9uCamgjCgEcvqnosKyE8ebB8mey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oiTELUSt8WFh8ymVPtSiFcXUjqG4cJBuLuGs34mmqv1w27xQ3jqryYWAjJ4b7vh8ZSZqXzpYAsgESNWfiE8Lb5f",
  "key1": "4PiJahcP7s9pMK9wLYXZKoC2s5X6CAVJkiisdZWACPpseYvpqZqwRviRzJfTXcajMt1cPLsg2SmiUd9CzgcgtP3h",
  "key2": "Rs4bhD5cXzYKp7wGSNTYCBsCiukCBc2TExH8XsnL7kdTA7hghcKQtHkMtnSc8Uex6NniUWCJRjnFCbL1mK8C4YS",
  "key3": "25ZWxPBuDcAVK6NgM53uK9qHSZz6y1Y66mz5DAJVq6et32htZgNgTSfnbqLqM6rmd7qNLDKWcjFybFc7TueZ5kJk",
  "key4": "4vWanaLYYVyystNBHGm5GQmscpNg4SiRhJYoJTNfQCpZ1LFmMZ3fQz3yDcmNxqeVR4onXR7QCaB3coMMzkTX7onV",
  "key5": "5gxddpCbU4ZiEYK1FHQtuuALCw8SjSHVbvFCMn5QAiBVWpn2jkTmnDbHiVMtks9pGb5XjvpzM8tv7gfE3LZhuzmQ",
  "key6": "w2H5c3tA9XScLqB6e75133uWKJjwrwVc5hagXxZfVHVhugGPQM64BriyywJfb2aVoSbJkVtFQpXVe1vN8ktTzHK",
  "key7": "YidaGcyrrUhxa6bY7xsTP3GeTNJRCB6CanjenvDjzcDfMBjGG4JLvCj5pA2pCH8REnWpknBKJoXf16pJ6mrNcmc",
  "key8": "5n8UsXWNvEokRun6pkgPYM4FCY3EGpnekorWjRmjUDvRAHpXJbcqs8teCyqmiTfQjRDwY2oUMd6v35QDbXvnZULD",
  "key9": "3MxK5PiqprVwifkM6wiePKgBorknPRNGr15gLb8WvrADHrDgq3i6J5fo9w4CkxtB8i22LfG5mnpj3K9DbxmMXvau",
  "key10": "b1aoPGBCqXUSjDtx6acgFfA1Dt2HUq3hkNMuibbiRwj88p6BAinzaCJqNaWCr5ubNdWFh6PSCx7BoBDgBh47JVg",
  "key11": "4UtMTxWKuumpL9aEt2FbhMm5rc38G4YP1LaXAFQuaX86ftaiSASXJcGb2mxKNjqeZL1PBN9VinGzoESvz2ZLDm3x",
  "key12": "ZEpLQw2Y694oRRUVR53Emi9jPn4yHPZSfAk6yRYmdcKfV1yPVGJrmzFp16XRGLGDUpDX8onJ1SaVbyqpHJbwHGJ",
  "key13": "4BPpLjyHwvhchT734DbfrS9PVhEqXrasbHFzSEbpcXbxv8cAcnmgr4mW6DpcGa33jPmSthkzhvNSK41okHwz2Ca2",
  "key14": "4ZLhLqLR5HChPgQDX1ciTKEtD6vCAyrqS61kTPcjYscL2AprwEH42g8Piqwq8G7VeVYBntX27p8vzSfbYU7enDRS",
  "key15": "4z2UtmSnsb7VW95bpewyXi86m9T2ts8PRd9JZf1xq12XQWJceDpkfB2BRG5Fz3MnT5wdqPJ5L5EAYQH3JTDTZtsV",
  "key16": "4BC2ir2knHhmG2SDyhhnmeZXMnByLZ4VmH5e72gHZZykeeZycDNp6qAA9z4zy7Y9QMQQsqcoeg5MSUf3eUPEUTce",
  "key17": "wozMWZmDVLR9uW2i9ZQR5vY92EY43yGAvKAz6MNPXjV21pC6sLxo1c9cpUxDW9YaBWP4hr1P654ABe3TrTGiFZw",
  "key18": "3K8aCywuLJeMyGkfzkz1ykKwo3Ri6aaFnRMwfvjx14KyNryixpRg4RdEKnJ7ZtHxLPN2PiT6kv5WyLyUCe93ABSP",
  "key19": "bD2kbPxDEw6U86dKAN39W8k9HatAy4amcfEwJhjtsWNxowXm88ZB1C8ixtnkbvmYr41xFJ7cBk6aiXsqH4WjbpV",
  "key20": "3nNcmPosVrwumR64qSCuD9NLVvpRWFCkNvHGVKriRXwaC4cpkbLH9pqbonXEYV2d8qk2E7Az8i1E4ihoUFCYT8ka",
  "key21": "5t5mRbG6zuiAwdjHB9zK5dtQ2mvt8DnQbd4m5oA4zF2JA8f4P1xXHt6xpbM4tQmwNTTDkTKVxGDKE913VU21npf5",
  "key22": "ebYGMFNohUKxtaramuVUU3Ww1zPvZsLdSfC3cnxRbWA7RbpzxkwzGhBY32655rw22N5Mxw7LkeRyfnDFMZbhhuG",
  "key23": "5mENtaAZp6cykmXhySwSkK1arijEq1yrA4DrTPV8CTnz8wTdGjuVXrjoZFdZHs9jXkLpVPNfEmui3vwKnG1EnPv2",
  "key24": "5kGpeLHcnms9EursELHJ1uTJ1CmnHJTUASU5FDnmpoNktN2i9SepeQ6kQgjzcavkG8LSHdiYcbb2xBkJD8XLcRMQ",
  "key25": "4P7V15HAJYLzh4P5hKykkz65BnmSDjcvNwZtjUbgMPdaitCzLPwGsFLSbFh2CKuuaJCm7SLzPeu2wU6YcaEmDMUM",
  "key26": "2GsbBJyFP8FAWxXnXY7GYMQwEV4o3hHfseXRpXGD2PwxaiQVRr3dJuYETumpFQxyZBtfb87ETi8duanahHikBW9e",
  "key27": "2VAmLnK1L2M4FAwNHk6VXWLWXXHVpteMNF4zXacN5Gmupw7vEqEDKmJbrbsKjVzVJ4eDqjU4mVgof5P69hTZFVUh",
  "key28": "5KNUQHVSYPYRj5RhZa9iY9Nj6z78t9GjQoHRHA6XEiMgr4BPyF11JX9fyMRLs8cngvNpfSYSZxtoHhfBrhmc1VGY",
  "key29": "vA93aPQpx9mLCJDKLegTG2SJQkF21R8uJ2i64qtfc3CZHiMvf9kXxAHvJiDWEoiak4q7NEVLLXTBnyAnCaxxBBR",
  "key30": "62CCC7cjMFrmccpEfMn9XpXrsQa6Pm3q81aqgNajYeWHB5NTQhWcXGrETKthyskv2EKivmUGcxyuYz8mJT5XpTJo",
  "key31": "V7PboAk43CssqfGYcVuJaUUTZ3WLiHBREaRYGoaVB9EypbD1KvpGVWmABA7rGF66Uf9Wqowy6UwrtmE7P5ks2E5",
  "key32": "7jq9kZKrWWRn215gT7Dav6v8wQABpmaJJeSyEGgJa8AynEMML7kzDF48bCgTDHRdh1ahn6RnEwyKTCpBLeCf3cg",
  "key33": "46aT3xJX3FSzK5jT6HBhk4L8PMfDwPJaTC1xbMsKQnacEnwQ836YstV1TW8HpTQBMjeK6gPeKDD8QNixNKjiGyR9",
  "key34": "3Lxin3Ex2GCYJUzv1rDdFuTRW5jyUcDC5ZTqBwLSH3ofgrXi1vyJ7eq1xZpwXXfch5uvkBqyPr6mptJTBSJYacSC",
  "key35": "qPnybntu3MwY2hqDnoy6AJQzYyt8R2FRQA1oXSk7oEqb5uYsy61GYv5o7b2hPmKk67pJCERYyNx3AQyuU7NThPm",
  "key36": "5D2d2J9iFzuLTXNofSFwfGwaZzL6V5imvTU7JfBE9EXZs1dwUp7Ep8FsbZqkJxJpiLjXku9A6ZybcEaYHRPyyw2j",
  "key37": "2338my288gW27UPVFBLp9tMsE42wiiLq8uhcnUgiMSeXcCqbjAeDdKN2uzPVE9WtHGnxrNr1xR9bUVpS8bxqaGtM"
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
