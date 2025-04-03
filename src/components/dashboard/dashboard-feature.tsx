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
    "uVTAx955qXXeFQ1WMaFVwUBujfJd3uGheE4cpjt3RLuPcYYoYv44kvkv8NUmZUeACycE8yubCmmzQZmrxRQCbuZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H7bCAyzTotNZYe69o9cr9AV3hmgu9brjvhsQBhqTU5qLD66pYHpWdiKMsps4XTgFWopHphbPQavpLZ1BWGrekM7",
  "key1": "2co17kU7GV5tMGTUhB6xa3cuLXmfRX3HFSMZBrFALowZGbiw1ubkTtvmLSkAbWqWZtSCLfbcL6rJh4GJRA1KHv3Y",
  "key2": "3SzMz8umBGPqSvJSUYC74HJUCWggsC2iLRJiRdRH9Q3m6WKyfmTr54Q6bKrgRGZ1EDJnLGFTNAHQGY5wCwDAYpPF",
  "key3": "5DcqGuJPTaBpzxru8rcmkr5kQEJ2MLtR9oVLUQZ44Y2U4iFjorcJ2Bc3jBbGT2AMv7zbJpmkM1YR3zn9Pn49TP2A",
  "key4": "39s6hXK2jczcqKEZWTxBmgaoucLP7xQDMkXzJgdW4A97e8mwZRbZLHHPmRA4vBMG3M14Q59tYc5nysRvkkq25WUp",
  "key5": "7gafuHtPqRPARfKdz5vTDAdbEA5SJVWoLkfLJkcWFQUjGu9LEKoam8qqN64ftLUso3oByTekKiJZNY2N2isp5DV",
  "key6": "2mLuhkaf8Es2VSjn9NXVQNVoYPhsjbhVHnwzcyxgszmXwFWv7teLDbend494C1hxsYdZsdqM38MtEugw4kGP8rrf",
  "key7": "5REeLkL2S7tFGWZXhVjTCUf7eJeXPYEbFY87BaX9xE5TVH3QbJtnMdMS4X51hfjotzNewxdw4i2ziPR5SEMpKMTr",
  "key8": "4ZZuPcajpcy2EAwaPmZNT4vR2awCRohv6zT4M1pnht6gtn9LtLLh9gKFKaYDGPvAvYdMuatnhpXdnGLXmfWxYLGH",
  "key9": "3oj5vuREUFGpF9WGyc2PHx4K5fph2dLwfVYFZDd2TFBKku25ZT5gJFmxYC2SHdNii8Msd1aKHijyLiqXz7vxcYxr",
  "key10": "5dxWYYQMbQbgBQ3fkWFqViiVDvaEucwaXaZUoFMx5vxwta15ung7cndrMqLwXyLsTXpjT4jrJQp9SDuxLToSztt6",
  "key11": "jp7L8PPiuLxmNS9iwH9XxoYxVzKeMVyxj9hYWR7vSwLffuBQEhR7pNRmpFF47mSH49rMKyu4J3DagFYK4234LUj",
  "key12": "4V9YJu2jcXFJs4dTWrXU3U8PHqweSrXL1FCeNgFuaWmr8TFquAhDCKngQbEvAntGv5z2gcL2eV6yojanQWFyhWK4",
  "key13": "5LZr1ndUPrhmGwWuxEaoUWfyUEv3eKGLy6oxSTbU64ZLBmxuEAm82Li6B5uCFegXe8JDhaQMmDQURqskYPZXrwXJ",
  "key14": "QXKADjpw6Z3d6gKqjjbhvTmQxvAgDjUvZWSmrgXXvEWpGrH3zsMUEqwjfMdvycEnMMWNfGGTMYnjdJvW4JnnWFj",
  "key15": "2puoZQi3v9shvvHbbV7avngrvwDDZKKCwdYvFqyvb4B8WCMNBnoXtiJxsZkV4r2ww26GvMZYuVHpk84DdMgi3Ryf",
  "key16": "125serEjfBKGoCsPm5uFe2MZfzq8SHC3pXcz3P5y8HXzLGuGYk5xnfNMKZjFWyK8kTGqWKLmLoT8wVVYAcvN78Xc",
  "key17": "5L7GoVCHf578DRosh8StC29x7hwgMTe9MaQPJa1fjjV6xhyAwSWH27KXQB4n4rxRJ8avCqK4GP9jKbLYViA7NZfe",
  "key18": "3K7wH7MZLnxSBDiLPEyfNTNsgbUHmn3f3SV9aapXdQZmnVaqbBVXK2C3kBKuoixRGHbVfnUTBndE1miw5Tq3oGst",
  "key19": "4Ly4PSjRcDnvmTwh6f1W3xrHh3HqAibUG2pABxHsjRXnVfj1tA5vYfTFvtpiTM9b4pkEy1hhydbKt9xP43VV8c1h",
  "key20": "4czgUFPXXmsxrGCbPn3uGGyvKp5T1zwbQX2d9zQcjdMoteoWLrAcBP1pz8vAHh4yvZva8w3kYq75u2TzRJr7nhfE",
  "key21": "286dyYALVfVd2wCAQmP2otq9b28P3F94qYTxcokLXCzyMdScs69EVL3csofsJkifqHAb3zrvsggZpTnfjuxysrKh",
  "key22": "BfW6yvk5YxivQy3LtaPaLkSMvFuqXhp4EYz42ZAViyHMZPN9q1ErP7pFANWMFi4T2YCuW2BQoAt3kekq8hf5z6h",
  "key23": "4VGZRBR2DW1zZjkR5FYnF7vWecUnxyqhNNPq19HNCCZR7ws5xZTmkZH3B9kJAwgAL9un6nTjXLd6Ks33hNpr3qs6",
  "key24": "2iQwj9HW28id4kRi7Poy7q4XQLj9P5tUmZwcghY1uch6JDvwjFdnC9THQmwCkA7MwqgpusbZbtfk3FPv4drbUzUk",
  "key25": "3ezVGtZWt91dZWZiV1Dp3LE3CToCyGdjM5yrWaDG3tFvSwQ1eZaHhYUHPCoNH9aRHJoVU3waHeQmtV3XFLWz9FMm",
  "key26": "HYVtWXBXb292P5dweoYoWW6DqsLqnbQSVwNYXNMwzJvRSytyNjGuDGat4qyyF1xZnUKnMrSnWHf1dvdmAJzk3rZ"
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
