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
    "3DyudpPbfg4gsgfr5BtN7yp3WfroXtd2hL1C8o557Kygbwdj9KwimGijvEeMLV3fpcgrcgHp2y9ovNvkm5zarxhb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QpHLXxJHsPyFCki6vZ4Me1rZsWkkhcdeBfQsvE1qBbSLBYH7p3edyzCNbsMSeyos8FLSg79zR5gAbVWqkGqNekJ",
  "key1": "2BaYgTfPtF94W8RJVWazgSEx2kGxqMnK3HayX3KwZgtRbgWKS93eFLVD5J2r9Nxd2vrbHt7Fdo93LBFK54Vu8PB5",
  "key2": "2Ucy2AURBw43ZSyfQgrspNYhJ7ejLy3a3zCQDK28yioHZuzqU7PCfRyDtE359KpApM17ZaazEbFXst4m8gxnn3VV",
  "key3": "3E7VPLSc2xzGLPMM2QUnWtxLyz5bQ4H45iETuKZLfpnXzg9sBdfy6viBtzaBd9vBJtkGP1PkXjK51vH2egs5VsAs",
  "key4": "1vKRW9QQmpwGB1tNTkNywPEnSoxpfgBpoPh28YMwbfEXqBYNKVZHhmTqwXjga2ewddaGQyqpQ9kiR6Am26o92xw",
  "key5": "34FrH9qpTiPuz5firsRWr3yYJ4WpA7DsJgwsS7bqK8WaaezgYnzKLqC6eo7WMWEPoiuzt8fNnNo2LqfJBTV1SrGE",
  "key6": "4QpGJUMcG8phW8BaULpJz6TWQBtkj5XQbfc5UMyMUKv9octd2hwQdxGcK4uRocdjfTZKpGXbpNXxtweaLftADr7X",
  "key7": "32zcEVdnmtTsJbSmqkoW9m2D3UtcF9PQ5EPWKLMRnNcL8iBHKEoPnKLqX4M4n1Q8w2N3CwHC75iwZhwLtjPsoNpx",
  "key8": "57J8WhWd9ZqvvqSixDa3b5AaoaxUXLkdN4TvgUEuwXTEud94a5QNRe4xSJEqAxYZcgymiTDkTSL78HYKKesGCnVb",
  "key9": "2yuBEn4BEMhQG7Ygs6eYx2j9M6m2qRrjK7Cx3E7rqVX717ZkPQbWrATr35ChjzxdG3QuWzAoP5GqwvsWEbW5WTyT",
  "key10": "3imUffFrz3wM2AZGQAAAEpPWvhXzbQYZnL39xcQ3ciLwBszJihX7hY2T5WbVJeL8rVxobbWovA77VKxY9r4eJRJz",
  "key11": "4Pac8RCGvFQSzXnEEst1akdTiM2zzmWuZFiTQA95nHJ8gUDetFU8rDACLSHRMq852ytNpfm4XLoUZa5bmj5rmmx4",
  "key12": "3ByoNmkyN1Trv8aC9rTXuHGdh3nTQC81A423WZPDfeVS4p6xqEL23fDbndXY7nLxC5DsXu7LM5ofngEbH1uwedmh",
  "key13": "wEh81NuFnc2WBsL5hjvd6FXxZ3AQxBTfdKNfzhp6nHMHwiENb2ckP4xrfChmQPedpF1cuQHWX1qYN6VLHxtLDBe",
  "key14": "3865CUNeSmz8uEpQSRK3EvkXby1HPrpPBLF8EAVRKxmpPtoiwN4JzZnAZUd9u7Zu46hgqjNywf636ujGWmTfoqgG",
  "key15": "56SL5iTUHKUBLKEaccuLBcoqaR8A4aXgGKm3BndNGuEsAGz4917kTee48RfYj7adkf1cb9pbLcTravQ3j7oLPFdR",
  "key16": "4x3mwYyMetEfvPpMERBfLhZqALhEZGTEbh19AqjFJyt4EJeBP46w7j1MVwC4KuNCFxAEfoiASCQahbkwxiz9B7p2",
  "key17": "52KciFrfnmb7zcAPSLhMspYivcAHxFUjmRti4L2NJJb2MagTQZGGTN8vrrofamNeUnHMuwF9W3CATrv88niHUEbd",
  "key18": "25BNkY16sKw9EiwYMrnGmZZqH8xZWQmTMUDCp5J8QxcKpg9RqQqhLApwYMV7MFfYXHEmjTL8WvJp7jGjoDmXT2S4",
  "key19": "snSGxcD7UG2jTHNaXxEFbTC9a3bxW1XZL7y2ctHhvKRXPL1Q8KdE2iiYaKQrk8quFNgwtMn2mvW11ESFWMStjTR",
  "key20": "4N4mrGChsdBNSqBL8MzboKCMUheHmSBMZTPmkpaMw5ejS8YTJdSvHLKin5Quy3J8Uth6vAKhaGVz6YzGkHVR8vCu",
  "key21": "3egsRwo2fML98gaDFTvUa7UijVf7MeaTQnHvFDUaPfd9MgyEcJXmJxwz6h4VcjnAM6U7nsXG5ZPhyp449mLjwr9r",
  "key22": "39LtWKj582isPMS78eBbe59s8vBVybYx1qpcpHxmUi8YbroGnHUtPnB4E7Y3j1XGLbeyRPfYnncn1CvZMXa6FAez",
  "key23": "5yfZYygpRpjRrfQ82PyHEBgDrgtHDMFX8A9snHbWnTmzaAi6PTGRwc8GMVc68k4LZMfmKhqWcYAaeuqH7oQXY3Nm",
  "key24": "49mXtBvNByTWjV9e8ECqgoCShxTEzsFnakzTzW52JWEdLB9ejMgLwKghKkMcpx98XW3kENCMv2rfXUkiPDfAB1Wf",
  "key25": "2JT1feAUrmKxHkWqTLduuJLZ1D62mVzMLKcjNPox4tVkSULGWCjtxbcidooGyWBzzd3NPVGQwccUk5KtbW8xJFd",
  "key26": "pQ6qa71pMqSC7vK5Tf1w8sLkPYLZ1UGccGpgcnx8oNcPfZmCo4BrK3vJLvS2zUy1Evm2NNdCs5LbfrgmT4JXVNL",
  "key27": "3LeyXnr59ZVwnZVN6zUxTsFF5cFWmdMC3gyvHM21okCB5TxRYto5s99w8zdpvvA58ogHXYjHFTh8EbRg1X8FbUKf",
  "key28": "R1mBgLiy86gdpc7CzT2Cys1TcChLPV635gjgtBguFpny1M9aipHL4BAizoGEntJiZJnn5tpk4pTaaPqHmryY37c",
  "key29": "2eqypUQGWeWAsgFffbJSmSvTZUmHzo58crpdSDH1L1tjakhV73HaT57Zmn5hgdHvZnj4MzA59H3KZj7ksXjCECq",
  "key30": "39kWetKGtnteUmp9cZb9LX6MRKn79gZ5cxPFA8TeLtJHFSozyx1BoZZHqBnsCfonyoBuvmwE9nToyaP9Ht1oX1Pg",
  "key31": "2EQwcdTynKS8GwWKJWtxc2tiCKGtyv521sLVBYBW4YjomTunksTwKvPhR22my6woTL1dF3ahNhsV2oDZUdPPMVSa",
  "key32": "9qxniJpTk5U4xBjhbCppyMSeSn2zB1L9LgEuELWeMWtP7Vbg2SDirsSwh2ES6f2CQj9eAnzZv8uJMYwQH6Gwvv4",
  "key33": "5kDLpDTEetrE1zMNVqmr15QJgL92sHudLaNWWvVRahbjkYNrUnXBxQCgPNiskFxGBFEodKQZGnzVh1jewvAthysU",
  "key34": "RS1BReyQZWWwHyExQertGpuGWRTtfDtaupSWCooqX3SdCCCozWA9vPPDy9iek7DRSKEKKUnjRVDdCEdXFdYhYSP",
  "key35": "EzevK1uXv5iLwErrgBzwJLVjRJG44YRXzHE12Uc1sfMw7VZAAnJpRXYAbjTkhcBLuKEZx6yx6fje4WKZ2956fXs",
  "key36": "2Hod67wDanQRsmkaYdAB1yWmmBt2tTzgXceabhMMnTwgpqFr4xGwffiSnW5gyfbUAXYjuwGKxrWrZ9jpyMvLHfjp",
  "key37": "4e4Ew79fFQsjkKtmmSciVov3hwyLiaDB5StgpmqzzUoysqhu8LrQuKCYcASZkPLkoVTXtr2b3fBkBkDg6muzqNYy",
  "key38": "5UpCpcgfLhcM25zmFychj4uYjs24HYenHgEASYFRfLfcSi7S2jrPQboNRdMFZiaTeZ5kbsN3krdDgMumze5XK9TH"
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
