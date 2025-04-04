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
    "5JJKrx1U7dDHQqaWXLhfGEjzY1uCwHoJXDUGmfHSe3bGrmnBwyxjT2iUmgjL8NSKL9YKfKZa63cErQkShmtDP7ti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GHJQR1Q8pS5nJEBs4Wrx5YcraGQ3Pbt5qaULYCrVgAJ3iVPeERtvArgrw7XxzHJFTEjHmC6YPUq7rFUy4LPJW9F",
  "key1": "21z8rLvY5YyuCRtHSxUQKVSr9Pd8zxL2TYmRrY9L6G346o3RiKGDfRzYmyx4pMU3o5RtofHkK9CW917Jw5DyTzWG",
  "key2": "3jqcHWVBkYXLGPQ1rQa7tyRQdFdT7fMUdxqSff4gnXdEf6QypgkK9NYY941ynTHH7GwosUYJTY1QLUR1yY1FXRT6",
  "key3": "5Ya8reFaZ12EJQjxgKUETRTjimzYv3Vz5Vi3AdbcntSwFrjUw2mdXb5rVYYZ9XEa6NaEzT5TvJ9BeNvL7CwGw1pF",
  "key4": "34Zk6XC7ZPEufAjH1vVHGFGSx2qL3Ns7qEzRFsbz748ri67dzmHK6viNBUWCKkzTCxV4hMgPpkju3DAr4A56NvDR",
  "key5": "rpuco41Jr4Vs2JA4Lso4aDkc9bB3tGR8eA1vv5CZUJMuRBNEPioGKSzNGQ55pM51p5dDYhREfWKTCW4bajvbT2j",
  "key6": "3qzS2ZkAr7AmhuJLukC3GiyLdY8j3y11XdjoSZ9GHoqwqZzfaQ9bBU4cv3xBgFJAtRavYqM2avDfGbnvZEKzAQEj",
  "key7": "3eW3C1gh4agHj7ArwczeW4u9QzszDcfSDWjv4uk3eW2RbATFuQE4bdagrJqBRbPCq4qfCg4NskGBM4HYZ8tvZFCm",
  "key8": "z4xyHU1pTbZKXRLpdR1o4ZXemavemdiCAi8AaryCgtFUaRKGYJTnThnqzE6cQtA7rxtS73x9FWmo2htC4UWq9hg",
  "key9": "3rFwJD7bZvLz9XAQ4hxcoGUwMPqrXVQKghyHn54HxoujmUBvhWfYHYk8ewvTjkMSce2vUNyqav2pidJAgSvHBNHP",
  "key10": "2T5XuDuS2ctVCKpimkXzYbS8UAujrGmtzeef76kJqsWhrRC5VLMCJPFPiVZDyhn7MQ2jKYjgJFKzzxJtMVajWMCy",
  "key11": "5YTybjHN3cfZYAWWTghLUY391KpFBAThLYZbWmGPx9GSdHYDkmfabAham8Nz6NVonRgAMpzQKX8EoiyJMbgUBuSB",
  "key12": "rpVAxg587Hb4wGxp4Yr7nQyeqGgiBhD4SWPNdeiXYTihqBURABTd4oRsEVum49BBi8t5dqvNidnC6jiSxpypnhs",
  "key13": "5CMcLXH8Wdk4iUMK7AsmocPN8bTmnSNhxvqjwFTK9bHEdSVT4tYcwWGe5NH3ZGaaevtCviSV6wA4sVseJ6ewmEq4",
  "key14": "3ZgY9VwZChEFVXHh7hs1LuPAKeHirFfGSjxQJ4xxixALs9de1oBh7HAvj9b2JkaaNdAB3xF3WB2MGCQGZpcqazfv",
  "key15": "3LS54w3okkXqBDq5jrzFqy2rarA4c28jgFDPzhJ7DZ17oumkNU4JZdwfhUvbUn6xTRdgWoGQoqA7UU9zMFpoBLgC",
  "key16": "5afFLJ8hxvcDU9X4RydW1yHiMrtU9A8KdvXE9q8A1jeq6XqFapbnofRFjxNrKWn6FJvYQCsJfoDvQe8eL3Yt8Dqn",
  "key17": "3ya1YexUpngiFpbdUveKB8eQwjb3wrqWwWjFrwPvHMLawZjn3oMBoNd1aYvQbo7YboVLGyHYgdJJE2JMA2d2QDCa",
  "key18": "4ZoRHxAXuK4LDEae5s4f1ooGvbyE4GrWqTLJwnEwqzHXVXu8MStezh4B142JQVdGGP2fZ2aNv6W7uyk2RkVuPgss",
  "key19": "WQBq3kxiJhLz5roVeCM6MmaegdH5bD8fm9PfCLsLmsSZUar424LGbDA3RXT3yVmYZTy64HrX4SUh5gXeqFc2mae",
  "key20": "348Yxgw3WcdkSmn38KH8vXoDvdxNCPHmJLCA9M8CNPVjhtzdKfXFd1pPD9KmNoencrmmgJfx759KweuEuheF3cBT",
  "key21": "2wzWMx4GshpLurop5x92iYpKR3FcZhiZFXPQQ91xaUZf93TWRDBjKZaJmYRWEtJ3wZUbUs2ziX4gBA6YH2C4n875",
  "key22": "5j6Ykenw7eqDRDFb7QGHbmCfqnxnkxukyFHdGwXm4pevPkFZ686Ca1YheDRSGwr8suxQiY9uhfxSMFHP3WhE5xXr",
  "key23": "27wwPHPUSg12AxXaxhTKgDFgaoWqGTb9SuDGX94FQUofyzzLe6YL8AMTJUG2x8Co1oFwUYw1AJSRMARb3Cp8vu6i",
  "key24": "5ZC8SSa79nZCoNRMn7WtZY38f6c7MGQgKQvNFiQSDygFC3m1wxYko4HqtZ6DqeTrC7Pny9e1up7pWGezn3YGQtJ9",
  "key25": "4Gy5Wn4xemhn3EMPGiqE7wJpvs4fgTJGXN2WNQrJypEhJ8Tztj39HvqhVPsMfBKnSeMAcNc2d248RUQwmjv7Rviw",
  "key26": "5yKvmmYKHVdfFnGvAcrUajLxNMdnCQEjq8rUdMLBe6uLow2gAqZeEAbwXeDLSycKgoRsdunVg4eNZ6QeShMtvqeC",
  "key27": "5wS5JgZ4fWGRUNGkPYLS6u4kjnEoasAYa7nVekKeuj22BgZ5KuChrTSRFGZEEdfxnjCWbh6VedDFK44KUtdNYabM",
  "key28": "4JVTztd4gHCh4yYNwmyfR7KxMLzG4azMWri3YEsWxSAbeJiWBceTkx5f5zp2vCZmQMrWCKPUCfWSznjwG4Xco4Ew",
  "key29": "7A9ZiXWnincghHsDt7Q5q7evDrFCnZPh7fvaDawG17bj3fcs1Zyvwo8vwP81GuEowU4dhMtNxfao88GWoJdgNAC",
  "key30": "4ueTwR4inwkC93i2qLJwmhmneAQzSw7jqoJhUfEpMzgMp7jMakDH1g4QRfHG2UdiftJpwUrM2gy6zfA8M6huPXRX",
  "key31": "4eAZpuipEHXxEdnRTAix8bEpykiyv9nQwNMWB15c9ffwYdVUnpzBZNcFTyPbM41BZHCV5htqMQvVtmA3bipZf3hq",
  "key32": "5bSULH4zuwaLA8g8vxMrjGEZF9HUzDwu1wGFg44zGXmt8eQJWGn3sTRja7CoQDLJr5S7CRVThAPj6qkAr1YSCiyc",
  "key33": "4drtgMH2Y7zqSDbALhFxRyjrPxv19xtG9N2aTfgzQNtXxD5Rr3QXzWo3TbsiPsbxxAcPQNZAH47nxoirg7fMb81N"
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
