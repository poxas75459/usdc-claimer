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
    "38qCU6nWYLzvqfhgtxbxcTVw3xpShGYqMN2qBp5b51AbdbK5qF5sYYHrsxvz6h1DesfgfnyR81m9teFLzMRdcfVM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P4F3nRZYLoa8ARyZj76mZ6on9bXZnFr9eyH2ZsziaKmgv7YtUwyM39uY9PMisRjMpZqULCmEigV9ZxuM6SFh79c",
  "key1": "4XUQPJgJffAsUxa2tnNr6RnE8SoVA74ULz5R9cHYg6tJ6SVE3phGE64Ae6dxe812xQY52vFtQpm3Pdn83rx2CRvC",
  "key2": "2bKzuE2JhxD9dXPSLnLBPiAw5GKMj8YkPNcQR8dLpQ4caB5WX3W3gACBSYYcNeGiWmBWxMzEPWNMm66Pm61cu2te",
  "key3": "VUX9qrZ2TcMh6GEDqkzcGGA39vfKeCwmce9ox1gWGqCqNXsMpJbU2MVXcAYB552aDWALc5tVUH81ujPLzQZhCLP",
  "key4": "3Y37oK6PPzSD8PoC5vAXQmdMM7BcX8KpgWb1v9phrwixG2jysCsQV2sRz6LVCMYKmWSznKL4EaeUGdmYspcfdrFe",
  "key5": "5tV6D2vWeYkcJ3FSv5VNQTEY7E2Ts2JKjguvRX73LYsVDzcUkdYzDqrbiw5auiQXnJ8tnDfuMayBU4S9otjhmaaK",
  "key6": "58vEpd5MN5JVRvPtgRxNtz8J8TDEoNpYUGeiYhicxh6X4npofJzMDxVz9bEKBE3ZrddXR9pBvqF1mKAtVVmvig6k",
  "key7": "pe59EUxHsLt1yKm8Jgh8FV2wJGV8FZRLAvi1r9UmC2LHaDb4phparSqTsM4AxWXAbEuzhd3eeqiuiCjN4z8VCMt",
  "key8": "4PM2yQV263dDqgr84MM665PWH5zh3fQGUNBDrpQCT2vno8dAA7DG72zEBqFmSZATfKrZnYzaUR7sa72s55K7wGi7",
  "key9": "Bttm3fNZYaDmjGKLzqWyjzUUHNoGpGC1ASoZfnxpz5PNnyvqz17nCr9PWTBBsJWWLNBfmbPNjEsbxmLDo17hqir",
  "key10": "EDFYXciCax5L3Gw25a1YkyA8Jq2qGMapVAbD8JewPazVrEAbrbxV1C1v1coJ1twMEhgG3bzyRLShF149yAeybmf",
  "key11": "4Fs4VXnKoc8jhBfiBgSUyzSJemGc8jSjztzJwZEJLwVsbkYEpPFKYFi2uCoxGVoQ1w3kWMFVQVQ6CZE9bvTVExer",
  "key12": "3t8ECtbMZQMtzWXPjaycy1Cb6VPSgbgP9d5c1NqxLe43FUExydRG3LZQTgZ7nisGn7XZQfTx5xkrJwA2uQxFsWQq",
  "key13": "2TWgxauEohZ8mSnBqGax6E1t4PNSLtawf9WWNtij8RV94yt7WYCeABHuo1EBK7TTZ75mmoEoAyEPexSNqm7WB7p",
  "key14": "2vCfykahQmAFFnBccurNwYdTHfFxtsa9L1ngZhVJuqHHHiGHrN6tuwh4CzeN23BrK9jGjR4iASVw1c63ZEyCTmjT",
  "key15": "2Q4HgCbWsLrZJrSWSn5hZJZqv8q5e6yzchQqUCssoMY6uUsgnMK8jtqbZPu3yLUVLtycPJuHFJBXU3mfb5Ba6wE8",
  "key16": "5NwfmGfQAWhBxUKYhvvVnz6aA7L2q13poTA7mLWrpuPe1XQKftZAussMBTkeyaZfn3AEjDMNG6HveoRYqdFBDPnZ",
  "key17": "91yvC1qsPFDE8D9Y7sodaSWP3MgRtkM9Am6Z4jtXsMQSGYJFE9gyVxrf79yYt4nDnAizf21u7iWoYkRpsehfGuM",
  "key18": "4Nmb9RGd9SwcMQEkr9pyq78yBosVao5e8oCZBj7rnn965GENMNjdZo5sqTkSqezyanWUiFKjdCcBsVwRmAz1Dbqj",
  "key19": "4zrMxJaoxxcBwCnuQ7Tjva1aw7AwQLwASVHWhCvL33BjBZFu2xPz9LxBBTYGR4RSMnvishhW4NHpMuSeY1yTipcQ",
  "key20": "4wG49A6LaHpoPTi5KWkLd1t35Es1paR4Tk1EFrjUfTfGr863q2Z44ZtMuX7zaF7ia3MPjF3NnSgwkkWxCm9Y2D6N",
  "key21": "35HY8XKtgmEEdChfW6Z8DGDeyx61XsBjawGHH3Ky36W6kqK6drsGpizSZyzUB3N2fLTRHQgGcXmRjtyHx9UkbJSJ",
  "key22": "4n8XipbwnhMscnoo6JqpsT835dt8SpzoC7YQNBHQ9TmKM6AUV6pofjs5rGmmSyhb7tF5unextN85tYD12RuD55eh",
  "key23": "4FY3C2djkCRnz2Wr9Yge369tRi54jnrK9NoLYnXfs5rL7H4Y3mJaj4exRp8ng4Wo4GpNUbJ6UwXF32119iX9zrMp",
  "key24": "4ny5JUEr1EXvgEDspwLPgUC1JiMRmSpobmcWQ6kCt1rtNuoAeQyGRbMvmBVZPwKxLAdDin5gaToKbywayLu7Yx4q",
  "key25": "MtvQ5nLMZEjkDBVmuP7WtGRYNXbvrR7rKaVtz7o3Qd5gSWEmcGUSuEPYkggpVocdvVP5VP8UncxT74w6156hEuv",
  "key26": "5wHDQPi4w9TkcC6mDmoBJ2rfrCVu2TraNSdHaBSkhdyzWDaNWjAy9BNrWVRo88E95ctQFtsSKd3mmwgEifmWZEqa",
  "key27": "2MyfXxJmYFVEAeErjZnKkw8viG92J5W41eWPPkZQxYkFJG27nkJg25tP8CUdv5T9Z8g6U3AD47xtJjksdaRsseJs",
  "key28": "4b3fGzv3Y8678XJeXC8zD1Bo2b1TcEzMjTqnDvwKLZTtsy9wx4TT96FEufNdJQJ3U8HambpbfFKJGJHjAsT2Xx6B",
  "key29": "246grfHih1NbKdAvUkTr8UfmxJyrHtZckCYJVWQKwJH1wLBBcXe8stHjX29yTtvCMU93Gq2NaS5oHQpw5KFKGYVz",
  "key30": "4LjyjT3RiWsYGSrzKU4row7qwoJF2LkUjQRvyjeYRwhNgeit1XDsbdHig89b6dSKxVo2nAN9vJnbnobgFy6TTsnz",
  "key31": "3ua5v1jP2Fb6jQD5fSgoxQ9qBedALr17dsPSKZGCJkVqrQaLz9ULMzg3tcce9xGYwJ7eFwa354Jy69Ya4vWfzDCf",
  "key32": "4x2bivV1quR7g57i1xjDiXmsQvbo8NL1SHhTbkuMqLnUJkj8e1S3ZpKyspBMv9guNkP2DJiuxREVVs1jj1rHj5iR",
  "key33": "2UPLjNCTGwUh9NPN4A3sncSzJHUoJCphos6eDFZCr8G2zoxnRiqVLArbapra6AwVmBC35decK7vczC5NWm2FLXGv",
  "key34": "5Ku41cQBsNoFEUaUjx2C4R8eiss8aCnxJkyHLJxRjV3him91APk4V8zhafmNCN2Zb9XcYgp7Z96LSW2Eqq5E8u95",
  "key35": "6FiyER2XArcaAokNb6kJKKMyQqxoENLkeaxcy9YwF1oo6qkaN6DsFh87SXYstE171ujn54HrpyBZiEwBBLvqaCt",
  "key36": "5urc9uF3rpnWpbhhya9NHFSKYaEfX35J8yNFuHLcWB5N2p4qfKKnjT1wkJovhNggQtnXVm1K8JczYJ8uXk8oUX2f",
  "key37": "4nz4CQ8jnQ2kZ9rvNo5JxJA4d8n83pk5iK9Z3nZA3vgy9R2cAt2cs8BDzBCzGFgXR5sRcGKVGToosJhPV8ufQSnD",
  "key38": "2cRA7B6A6y2z3B4UyhyCoo2wB5auxPBu6nFJV9WpBKPDPqfNCcvoyugxNHZwwkNL9PH9LKAcRhDAqpu6hns2VMAR",
  "key39": "2MrjVNPP6i4kPVrFwFRf7FUEghxog35vH3rT6qzHgXKw58wtVcxadothazdjVGSaGZJaA279WhqsT76F4dvCnuTY",
  "key40": "2gru2hzeK6KdLjpqJMjgvR21CxJs9D9Es78goFyAaDfdZViKMH2U1XcB2WpGwweGWtwyZEjduSP58Re5SvMwVuwb",
  "key41": "2Ta87DZYpoSPPE5c3Cj4NNp4MsG3vWokd1DJVRzCjQX4v8tjs6Np6NDSPmrCZXRWgzXdKtFV7d3WQGzUtuUh1iko",
  "key42": "5mhmjVpr8a7d4jaVXrSK7R8YQ8gkwx8Ub9UXgwujACkSVfDS2K48e6x1ek5b2s3GETFNK5hH79bLHxbsjRX28wHy",
  "key43": "3x3vj18UaW6znh3KQ3yCsomY1DjaC91pvKeyWnuMm4XDBGH19EuMiuTGakHaR2MYkp5zqHtgwUuThLnMjBCcXMtK",
  "key44": "518XThW5vuWUk6V1xvaXx4qUCLSorcmShCBgnzAYDaZHDR93utjLhpj6tjCxVQyR1hiCBpaD2WNC459nf2d3gH9J",
  "key45": "TbWzw3hNfkYY2wYyoxg8ZxKX1KehsYnMccHiwazrbqWsTCmp5bqEHpqLfZMGJv2FCRzu7M12zEw4t9oXcWhzDBA",
  "key46": "3bkFf7tAeWhUwPiCzSkgqNwxb27zQTH9EgQ3UL1Rm5RZcjqKT7U8LuqF37pPMXPtm4m8NqFHykpCBaKzoAuqJ3TC",
  "key47": "DtuF3a32pjVKgdzdyiTrZ29xBfmxf7E214uRyFHNsvV7MHzXp5zTo4gEj2TkmEdyutR2P9zUcJQgNgeRVAD9Kuo"
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
