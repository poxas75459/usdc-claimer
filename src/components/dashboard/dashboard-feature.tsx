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
    "2fi6TRuLyE5ABqWgJdSHvUrECwnWxp2UEMzyWPaGduJnZ6MaaYExycsrHcfG3B1pyYAWUBrF5TaD37a76KsgDjjB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HDZgS6fsQqTciXURgevdsefeeCMbSp82eB6tiYiWSkVGeaM212kt9wZ7fgzWazxmWNC6yNxqYw7tT8EhwvQXZJh",
  "key1": "2Ci9WHMpB3bQTS8jqPgdMMca3wvqGYBAJ5q6Q25FunJ3QLMJ7j4pxP2WjH9gdx9tVLWoQCEGeGfqQ8HvXRcaHGHU",
  "key2": "5XvWsGgA87DQAogtCj1bxmrGkoRA9frEb4yeSf3boagrCVNaqWSikhLujhwQubQw9yKiFP5fuYG1GyNDmS5zgcNF",
  "key3": "4ZDwkm1RePd3Ea4bx3fqTmBMftD2dPikVQzXGx8Gxa2oJ1hFQmzYzw72hvcVzx6RQAd9NcaacM8GbSrENqe9Kb3x",
  "key4": "5SVdS8BTNzbuMBcniRrb3G1gWfNj29t4sReYaHtyjXaCUUp62dLHonjW5AfSqYciQwLfgeC6xgLK8LGPQUKTuzLr",
  "key5": "51FYLZk8iNN7Ko9c9TcMSGdE5sdExRyikMeH28ZKj5nhpgQwqstd1AVeR5ySgCQU2Bw6yWuN22sCvBehtbvN31Xn",
  "key6": "2hUYKsEWohnpxn5ZVDKPgd9uh3TQCotaxCaVSg7xKjdLqzSLCuvVqoDt178fEqsAzipjvXKed9UcLvjMj5p7mYUS",
  "key7": "4djwakHW2zkcS1TBZGqzmJ5uyA1HTZd6YhWbCL4UnnhbYAAhnzvNeZEJ69TLM55tGgyofqdmZgSVysSy4NALWsRT",
  "key8": "63j8RubYztU586uSE4QWY8mr3bjhB39E48GqAWuW4kJqTTvmgwmywyASRPXyM1gXGv99sfNq6xga7aFJiqEQffP",
  "key9": "2n1apvXv8jEWL2z8ZnBnmQQ2Lrcuo8rXSUBj3RaHHfsSp6YGFNH2wrJeLyTfw5cV5pMyhg3LQK5FW3Bdae2Fzbmw",
  "key10": "2znJR7VT3w8FK1wU5CNeyR95nEjbdEHdm7fbXq6ZoMv2FvBMZpqB6xvURGMuGKCe5KR4bMUfabtha2kQ31Ue5Jd5",
  "key11": "46bkYoYZuaEVMaSq4dZ3Y2zcf6wy93mghZbtai6jvxQJ2jgA5uZswhYSow91NjbVg85xisFVsz8r3edETujcbqVL",
  "key12": "dXuG5f4KzF6esztuKUHfkFvo6e7Z9dntQRbhc6AF6xHkiWAuS6Ck7HveLSP1F3HHhyLkrCVANcyzUUREf5Y9T8y",
  "key13": "2cRBknS8exY3cgPzZSVdGC12gJZRqmYuVyk8e92GN4EFuXdpukzTT8UWZ6h9mQxus7MyeDDHXdXZ2iL2hX9fXfSf",
  "key14": "5GfURuPUfHSGAfGBKDy1wHnu1nguGZ2yvDAYvD2BE9eKdShnnTo1tkMoLM2kjhFQ4VLKnFurNKPQGFR5P3fAmGAN",
  "key15": "5gVqWzF34TNwCeWJeYWwVYDwpJ68Dmzc1LfxptAwZArqZFnmNcK2gnem4kJAw9Nirm5Gu9Mz3eG8trFqPBcQy6s6",
  "key16": "2GwvTLZWUUatu4dTyMdmkdG2HxAptNuEuQz5ycqMxGc7kFyZ9RYLf6Mx1uey8TB5zRLbPHXBwEqXS73CHWF8ih9D",
  "key17": "2xTNUGHSiNAddzbQSpZN1zmvLxF4CgsZPPXnXeUPNjNV8svUFXc5Ku8C1E8NHMQPPaMKQ9SbhoESkSiTkWFVXQTH",
  "key18": "3QWgARcohwHFacFdRrw7UjzacopuBrnfrqYnxq2s4WFeQseoZu5RvMtuHCSPcRZpdXtm7XqxLpe98WzTHZGoT9TC",
  "key19": "4SzXyQuEg9XZSNTXgMwi6LUBadCGD6eYmN1C8Rp7DvPn66m2PTxq21TgxuabaqcRi6cUWbF2XLx6Rz9Apiy3TARG",
  "key20": "3nrAwqvZ5dFpgfyq3ufFdaXnvmahn6VxBQPRa11CSG97hAaH8UsfRr54pET8T4C6qJ2tFUtyF85RgbQJ4qkP72S6",
  "key21": "DLFJCGGwQjfeyfhew1h3T9RPzaRgNYjaF7MsUzLbr2SxzPs76R3c9EG6P7BgAmY5pozrntL47Qbcf1TeQ2nYYdT",
  "key22": "3k6FgHoB78NMNGF5EekhTCPUyKkzShWnHfShpDZrMKjaUJR6x1xea3zHnutqg3U1tBwFftCLuTeH6DP7NihCQGQK",
  "key23": "3KWgWb565x5Vk2E71he9tFeKY4kRMWAaUuV2D8TxzDWiKexMcAPhcS6hPSmZHMcQhdVpZFUP591VnuvjnbkZmFhG",
  "key24": "64sVN1dVfDup4tvqx437fErbeR9qqfAqZmhG4M1LVxDSunb74tsM6rRyeojQdiGppJRAQurAt6u98v8V2DdUKDT5",
  "key25": "2tHPdZcefhc1qFftWgu1fiwaMofRP4nvDP1uNjQT8KQe1dzZRJgxPCBkjzi1mvAuRavDCbhw1uWdkcT1KdmSY5bD",
  "key26": "4D9h8XoRiSRB4oMLACW8EHSMon2z8YNs6mDAexLLN9PmqD3nnW8sFhCrAXZcFHEJfPuVUimV8HYV578q7DhCCMeP",
  "key27": "3GP7h7rVZowp1DUTmbkU9SDnkXE2ikFdTGxTHLUddW4Yxi6qxdQEJ3TCjKyTuiof4YG5WUsz1zfq9qjxUxos2qtu"
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
