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
    "XQU2rtAF8fxFMVJ55WXCnKhdqqtRSJ1JkgMGtV83eTAbxmu4sjhach8rLsKHpaa2iawq6BNF17hvr8ro3zFGGJX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UAz7KeYZMcrsuFEFN8GxiezJPeNd6UksHH5n1uqrzGiSWTzcAA5dzpddqesdfsQwrVZ4VrNB2EjudbWnMvijXhU",
  "key1": "L3LyHttViabp2CCwj1xFVzMzCZyRSgxQWo7a9Zup5o9NLfNmKTMAzt81kKk9c54A7XyF3tH83KUqFwHJN7EZ16h",
  "key2": "2uR3mqoNipXwz7KRfVsU8yxrbjeNvbtYAfe378qrr2KxDrtWTcVZ3PaFmJky66wqQY32uLddFiM7xvUKEx7bBapd",
  "key3": "4LBuzsnwdhKdMNvBiMCSZJMExFrcnqA6uHgEhnv8aMB9EKVpPu2BtfLQ6ug3wvT2DYSwNvcqrS3NsEW9ySt1AJno",
  "key4": "4S6cTsw7ofXUjPCjMzKb9H9fB6ie3w86GVaa2f8jPYn6FMmUFEqwnHMrvCJxLuteLunbjdqHS2pHrsUwhNannPeb",
  "key5": "2ujTWtzH1HDxTDTidDY3cimAFLW5XkDdXnEdtYniRgrFWCEvbf6Tq7cQiKuG5C4MTPYCqw2o5BqRxzsEdFJZkhZ9",
  "key6": "5ZYNUAbBUSEdz2rW5FuxdzNkoF3yW2YXYmNVbjWdk1a3MZwq9Luj4XT7pVQBV3CTjUoTHV9LAvNg6vEjmxYF5hkx",
  "key7": "C4VdWBBrAk3dwMbhRuzYrWUcZBHt8WYSM8ttUZQH9iZkaUcRJ7B4nkf3ojTXRAnrvxCLkAfPEyvLoMRokJSxfMQ",
  "key8": "5yCDuSwXaucozGd9LxH1sN2ZD4q2oU14SUsnboMAiU812mrQyY4tZLWSjwaHbBPvtSfSNjCPGzeF1RF7sqr6rMEw",
  "key9": "3QtTSezCSVHf5utCLyGD4S7nbPgDimmDQAAgQRL4hZvDWV1xQ6vuByBr8kD35caMEtEQr7RYRtMd6par57YYqMLp",
  "key10": "675WS49SrbtWj9TjUo99ZLq9usTRXgKm5Vr8g8mSqucpxJK5BGNtgpDaZpeNRWQDQxMaNzJqLuM1CXDuV6rVXgcy",
  "key11": "5xzoP5u2XG9CgWdmEQfLafSoAvccypac3RDzbjuBvxSfcYpQFXkeGK2X9QZfxCi7EJ6V69jv27oQDniGaZ4B5zpd",
  "key12": "28NgpqiosTwFKGAmxs9GQtC3w7JJPAMhNgb4cfiLjwigrfg9kos14Gc1xnMZsbX5uHMaN6cM8JkFUuhj6HGzGQE9",
  "key13": "4AaNq6HC4hDg4J1NfvrKX2eoyxwKEFjVxSAi8vz7yi5JpRifswGJrVKGAiTijvFBdz9EgdZWeCybWKwjXFcTJUXa",
  "key14": "5ktNTT7ccxmgxbiRk4g3X49TFHkAVMdRiwkCY2433AhTuYXMVCxN9xdLosxR8PXBj356y7RtMVnboRPsdGPfzVa9",
  "key15": "YUXaupGYfJ2Fxpmq9DHV1nAzrBiCzSP5MQ8AhdobHKqta2m6Qzv7cmjJmhU2QWHoWAEmrMJHZGBb5JPzEJfWt4H",
  "key16": "22Yk3CYVQTH7eQMk9FtDwp6hXtSoe2xD84oRihK6jaeXyDnGdrHPRPew74SFDkQdzNiZa8Y6m8KwUoau9rXux9Hy",
  "key17": "3WJoXzsSv4Wnw43V8RTDEyuuHxRFqo2ComnzoM8ztAA5QoMTa5agACFsJ9ne5os9kqWADNrH2zfq8GAZvFY51T2f",
  "key18": "3HforKPAWziD8iozqPc7PStuBHBL9EzUTdVNQQPPyLD5rrTndNr6tsof27BcFwoEEeLTH2mqGhMundzLAJUWRLr6",
  "key19": "5xoh8jzSZaj8pNGZQJD2nJWidWttZav3wXdRYHm2jdeRhZ624otBGXV9Lk7fnysWmbtSXGUoUTWSmhhDuYgGQRgV",
  "key20": "4W6Gx7aE5zDYeEV3tRV7j4ojeVVDAhg9ttXs9TDvEKH33DXqHHzWvsNrDbBWpwZKpTpik2HgeVpeMjArE86RPigh",
  "key21": "3r5J7MjcvGkmJcHBYjxHR5YtNjgzpxungC41HwKg6JAWbK9DiNNrUr1sBzAYneyhL5MsngdywpCUnNHHx8AxJwmh",
  "key22": "3sqectbnwfQf7A1ABgS5a1Vdt9Bhv8B7MrpXCoJngFVagB9pnm8Kaewkx1486ED4ssbzY4ukivXUhJ1J6d7Jwbkm",
  "key23": "CGmkJFJpUHYbuc9vcLPLWNH77hjHfiKY9jKyG3f8bZNnM1jRbxAoSbhiidVcz1vUcFXfPENMesRM4DiiwPogiTi",
  "key24": "46ejZzUYKYtwEKdsjUZCG5An51amnsPMypFV91ZuQSMNSBm1Qw65RPQATSxcgp8E2jw5zGc4iXG5teLQyZykBiDy",
  "key25": "37bB9LU1CxR9o1DaeC3a8P8fSHGzWQePEeDsrUFMh7zS5AYjkhsCBdueScZ2jAhH3zAEiRxMzpYfs5FoEhi9MLc",
  "key26": "xzFEHhpHTXCYUyzFPvyniSPV1WmJPJkDSLu1d3zTpeHoTKnfxYbHBuJ3gVQfgmmFtma4NtgbFZcsq8i8AbnjXe4",
  "key27": "5yU4Bf477LEmAi76hc5qkP6m4JURhZJ7BMXHoxshWs6xCNGynSmFS78ifoSQmfLp9zGnv5NgAgMRiRZktczH3zBE",
  "key28": "2KiTaqFVGmKBJvvuz7qQLyPehktyiFVPYR1YnRqLiJGUxgYtP2V83XBxE9WDULMRkrvSE2ZgCUu8dyAcVWsTbJQS",
  "key29": "5mDVhiP7EwVG7G8LByfgWs24NS2MSZJtiQBCSuRhoh7WmLsWK9JSDwBRYw3tJhtZx3JhrRGsKRgP7TRgV1Xfbpae",
  "key30": "3b3LqiFEb7BtkCzXWwBH9Y8e92TukZqc3wZE4CoAvZVez6becneEYZcQLg8aHGE54YWUnZuGXjdvChqktzwcgxL3",
  "key31": "659zfZdBFiijStqqVyvudihxP779N8Vg8qVAVj5i1TfuhiSDVar1aHZ7Q9qZtkK8rV1NEYe529QTzoWikjwEDd11",
  "key32": "3peFqxKuDYzmhkboUJ4cEHzw28PvirkzCWme9kDdsWg5YBCWBaZHg75a4MLN1DQsp3T2z6jq52JEaKGLX9AwEqdK",
  "key33": "4UwwDFUkRk8PsAQqnh2nTPz1AtQj5QuvzmH4rjrZJ3QKduM1D5xysEW5PRFT16RWgypsfZacaXz2nvMfk8P6keDW"
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
