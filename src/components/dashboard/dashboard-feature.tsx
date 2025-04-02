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
    "64o8hFXZHMrLAd3gLSGqK6SpMAfJiHeAXxfb6JssuBiCV6c8B8B22xCwfGu4P11HJmtpCtGef3GuJe9CT6G1cruU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "486G8p4LTfiqPgfQ97L88BYaDcUkJUMs7DPkNSj5tsCSxzFk9eNEXVwkGaNeuqpkT61qR6eB1TGfyXznyUp28MPe",
  "key1": "pYPupb7XGbtFR1w5AbjWkayHBQtS9G7DakpNafpYS8dXPeCDoJzPrwbrAJVvhaR39w6yys1CoUDcSvXVg8qBQDz",
  "key2": "2bTvVr6goY4JBgyiUk85ZzdJHf5KD2wEvMbKDTjnpG6RS7q4FHz17Fd9wuYexx7B3eyevC2reL1FZkd8pSzbdFZT",
  "key3": "3Eac3vcTdWgWyBXgFUpF7169NnkJjnqRFqCMrhQ5Lr8YWtnjRwSMM9Kr5fU126JgfRrobtVCnVpTyNyECdU7UUSp",
  "key4": "2tX7V9HrhwTRN9wqi97Lvh15wFRtByavqi2NxrymnTF6g4jwc25wKogVNNVDorvYNN7GdV94f4zNdB7VeMJ9EKf9",
  "key5": "g6TX4xDLNJ3B6XjzRjEXNeahdEHmLhofRctU1LNnbjwZnDzgyXJaTj9vJZjnCLkJQ7JCQaH3a2TtB9dfuFuZgV1",
  "key6": "2bqhUYDE4ykrHq8vsuXyRLE9kn3SNyFzSj4nBcH1NK8DvWWgzHYFTZhPGeGyLWXdeeze3pk3viNnoc199AxxQe3t",
  "key7": "5q6VJRBVr27ThmvgBtMx2qS6tkK6cHRaa9j6ZbBS7GfoKGujrSSNz9fTUeaWkP3Dq8bXqLNBWBUno8MfHxJWqpzW",
  "key8": "3UNzBsuTQndVQ28TYiQzXVetZALkNZFQzsHXaDMLg2BGxJVWE1onEmijzasJKxfCxKxzMacFwYBCCb5s4XqxpWSy",
  "key9": "58bGps4uqWnVrgKH5WpyHufvmJ4kGw8b583M3AoXzJonw6SHBpQ7ZmeGBwehbwxAp2HBqPMHehYgeYEavY1GLFuZ",
  "key10": "2CeKVU6QPBVRRbmia3JXwvbjXx8Pc9TwAiXicPQ3hvAtXNnfJfhMwzjSHMUyRS8XqqDLqq9PSSTAGTwd9ErtWAV1",
  "key11": "4vqBy7HGhcFqe9H9GCRvFynEQNVSKZRNDxKRhJeK1NwPHuSr8YRuK5XGYG4SPYt79kjXdETjbuA4hsnFtjx8A4Wi",
  "key12": "4soV9yRxcZAPYbLnGYWUqJnFs4SdezagMW9xMf5AdLhjtTXx47DidE7cdRNi6i77ouv2gRw7SEmvNrcgLHe9UnmC",
  "key13": "3w6NgUKZPoCr8GSsDP9tDpRYwgrbffKBSW5DqhMKKnvcZ1ZRoZoU7jy9ZrihaosQ92cMVCspVFFc7t3uXdQEnoVU",
  "key14": "39CDfeCTrrz1engivdcETAD7Ykzzkee2kC51HngJoNKnM38ivfEsE1ncL9tXdCR8ZXnKLemvd4Mqh3BpNdVGcQTV",
  "key15": "Ehr1hoFkpgoDAj7aaCmx8Axt5qyQpQJRgX1iEohwoNLxuytECJf6hXt4dJPeo5aLv95P7mQ2ri8NZCjJ2ytETSw",
  "key16": "5yesV2eGDD5ozfyVMMx2BjPwqf9CCKm5PczWE6WzdD5rLdwx43TaXXWFAGAd5vbLk1cT8V1xyGtmT9if3BoQuNUB",
  "key17": "3XbaAaRQv7XUa43Xrsfep9FsoxLU79Mfh6uDcYesNSFmw9u4r87qSAc5EUg3kUMsuKgA3dmmixDXpxnuawvEMVCT",
  "key18": "3d19XPfK2zuei1KGRub9ET2Y18wFLFaDeBMF4ow49VBLeNCPZEUV1FxmvZXHfFc3gE1VhbYvQg5wHYWSao5wf4Xw",
  "key19": "2Z55W1RgwkoitjpDhvy2cad7MJ1XxChtsbVwbkUh9dKXgZNfxGKawuw7Y1jw7R8S4vh3AoMA6bk5xku7xbAj5pCm",
  "key20": "51QVFgxeeSss2iTQBmAV8cg63S4MsMWEKWHXuyr8oiZzUzrBfYUYqKHHoXRHrgoAzft4Am2YAbANbzYBxxFWhWNT",
  "key21": "37EcD47V7EqBuCGqw8Az8WRkwizXNWwBBdGtzQjDaixnLjDddKw9DH68TaDDivoYNZCtdm1xMU9fCRiYf4TfvsPs",
  "key22": "4hnzFBkL1DEy8LBi4oX6imMUr7Pu31XFvB1sWWPingh2HXVzVUVgMFW7JhhNVuniVGqF7X7gD3kcut13Vq5JHfKM",
  "key23": "34pv7Tx8NKFyJSQ4yBRzmwhi2AsGwEMMNZfYb59DHtAvZ69d1KskK4VGVHDkvWduDeQM3xjXL8Q3W8oWRUq1coGn",
  "key24": "5UP1Z89rVA5pKzBtHe8kZRRxGkTfSg2qU4nsEAJhRvu5fyEEu56u2V5EB9PJKpAyNNGKi3uP2es4RfxyQhWhvAJZ",
  "key25": "4L7iyBJG1UEFk6CJncBFCNeW1pg37crajPKgK9m4ZyMMxjZdKPi2Xbr6GbYWew12C1qGyFm3AT2kuLZngFx2YhVt",
  "key26": "BkgpNwBGWKhbhFfCBRXSouE5GZt5X3BUBSiXUwcUVk3GhVFZ7TXGqABWvfo5NsdWw98ZkkTYuX46B5ZhgKs7tjd",
  "key27": "4idaTgM4gr8x88ENEpCFSmJAHtTytkFKKuvh5L54c8UR32JzBdE4R7cfuz4mTksQWJwUBsu8mm9p8PRz3c85AERg",
  "key28": "5fcN4ZyR1rcw7PGwpCY9U63nPVLHxauTrjVJ3oURWGz8SdG7SbFSBm4yTPbtPgQGwUkKrwtWfyyKwUG8nPsF7XXJ",
  "key29": "5LroZTpFiZZUzEAxKf1BsgxwZSFAvMFeZWguLMxT2LNTcm6JSHZjQBVrzZKoHjH18YztMnq7cUiW8S7nWvwtXdMQ",
  "key30": "2si4G7A7FfCzAVVoKALxeNqrDbE65MHX2aCSnbPFYWj8x6L3B7mjTUuv4xha1vZwnTfetfN3G4wxFVDsrazEiGb2",
  "key31": "4YfeZhmiY5okqoPpCPj4Ea5PUjvfbgfVdjs1NVg3aC5EcN2dgr2gwyPeXnKzwKmvLWzPHMxrmE3duQmDMNZxgHaj",
  "key32": "3BT84fxDysZxArBLojUJTSDJspaU63JvHSjca7Sf9YQ5Fp6Dz5unp3wWC7og7Zhr4f9DPbD3vYvKRok5TA1xjGp6",
  "key33": "NxypX73BxuGupChXYfj7ZiPmygAiSdAWn4P4JZLLgmEuECnpnd9xYTvi576gN2FwEtuQgKwRFRKvL3wMWTWXNuM",
  "key34": "2pCtnnJ6JghQ2ZX1fUiF9vCKDPCRiY8rLamJgAc91YuRxrZoVqy1oPgGGjMS7L3eaGxMcZYtL3hoSHNwZidK5JtU",
  "key35": "4YUeNwTzkHiJ7pBMPpAjUoX7bLerxt9jgEu81R9cVC3PXxy6BLNPMXUhRjy9iCPjTFLgrYJPJCnR1Q1RQiUyGtM6",
  "key36": "5vdJbeZcfnvDSAbGcZ7LYdXUDu6ntXgtLfwiUgpf3awxowG4XtRLtLc1Hz24f1bMNDPM6MJj3LTXSf18DUeNMvWU"
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
