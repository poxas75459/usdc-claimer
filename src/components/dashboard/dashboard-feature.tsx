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
    "a61JKFMwuQG5TvMLHjHEfbMiETRBdr67kHgx1iswVyxiMAw62HswmQnjPm8USzKrqrEC6Gt42W6W4uSbLhiNqwp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e9e5AJ3RcxS1JSLKJVhaJErcsDo9vY6dB5dk2mk8Yb4oBTYK3DTvohoAmiuNMEDnKHVndB6kPcbvbTa2y2iqGE9",
  "key1": "2rcgH6hQPfbJekXgBrt2xjbU3QQXjZTCMRKgmp24SYV2sZKn4YfdBBpY7kncUYSrDAmaGTdX5wN96RmUQLm7UnJf",
  "key2": "5PpsPRvYvFvofSXyAXhC2sLv9yq9ynRdvQKWf1djsrzoMJg3xNChiBydJALnRjECAMcVnc2fcQqVAGi1bh444Uq3",
  "key3": "3Nb3qBbJYbuGLh8ygnX3QEQAdDCyrsQYoAjcfNGEi9RKt1ZVwE9uBgiUxCgPU1JRXwPorHacgVMU5NtdFobyzyuS",
  "key4": "aRho3q3aJDbs722DT9RpcHaZrJFTV8SEQ8vfztHbxQQjhv81MgStK5DVrgznNBpE7UXZ2dq5GYKsoY4jpt1Cq4s",
  "key5": "3kXSUp5LVk9GZNWTZEx9o1cw4XjDQxsEimmf86NwYCFqQmTSDFFcF1owPMy7puqiHC1Sac5q6rWT91ejcvs5uT6t",
  "key6": "5wmf4Y2C58vgPa4AhbmwgBcHE1XNCcqAkKtnR7vCxdsTcdpKBtAQHrazwxqAbpjgVJTJ37eB35rzWtDCkYrqYaLX",
  "key7": "6RjkKszqBw7zPE1gSQsvSF8oDj3rkh7AvMMfmCcgkj4akiZC5MevwGT1qr913Dku33BwnyX36y5nesjiKgCVNQp",
  "key8": "3xiqAr3otC8cB6e9bfdwAwX9pRY2EZDw8SrGQ7kVRHL8rmsti6NGvFDDjhA5AGjL56KgiVJAfqagDpZrVPGaQwF1",
  "key9": "35v4sbhWpB6YfKHgxAxY5Xev14ntUY7vp8MwSer8L6LFEZ7NRB7m9rwnX12TGmMYXan8RriLyp3yL2CkUBebjXgV",
  "key10": "3Zd2toiL6dtFqxY78YkwjdMvP94hFyCWDfpFbQR7kqRbXCnfrMv2d8KNaUZ8Y1bxiA1UmqKthq7oxc7wP4eocvX1",
  "key11": "3Ja15FuNrbecMUZFTs63ToJ8qq1F8s7Hh53jV5MFjqkk7xrrXnLviPXcEh86djXZ1XH5dgp2oCkiZ9bceayXvYNZ",
  "key12": "fHKaMSBETeHkzKetq51GE4LCFZ5zr4obEhTebWfSHLewqTmRUsm4i9e78trBrPuXajBzH6zyf9soWh2c5ruv6fP",
  "key13": "384LcAkXWCrkZnSw7pTb1pgMzR84UH9pDXtiCWMTo56AFuNHiAsv3LxygAvb9Du4NSCWeQFQrWzcDpKGqWT3hRuQ",
  "key14": "4oRF5c5eG8FS6i9Uon5rjDYdPNm4cd8fHnrf6xWriZ8Arzj138YYHFxWiRBqrxUGxzRDiEXVBG9Ui82nev5Xt4g7",
  "key15": "5Rrqm9JTWwns2ZE8B3TSUt6yeH6nP7nQtBqgy5MS9Ec1fb5HEa3CYzWsQ9KE3VMJEoSo4GYdNX1vNEWpVMU4BJdp",
  "key16": "1eEKjy2aUUsrZxvAbKJ1W4PieTCGpULSFcpVstnHiQtw2yWpvvUmtk2g2qVrS6XXUuzYV4mdZPxtJ1XW3kNfsHe",
  "key17": "5zsjSGZjTDHPsKdJeUYdJEVDaQrX6cTUHa4WHZi8e3Ss5QH6VbQQ4Ffq5KXzdUGxz9SDda8XxLzg9zsh3sxqjSsd",
  "key18": "9avt5uRZUTKspAh1GWjEfn7vnuwWZBLZJD9XyMoWFwFabr7ZMp2Lfq1uM5TUoxUd3FL96sn7uvfmFuTU4Ebv1Po",
  "key19": "2gLTRQJ7uKtanKnKCWsbSBE4tDMJEjUeN11vwmK31hBeTAPpqjWy4kajNKHqdHmk8HhBSvDjhqxqx7mLSX8Y8jsW",
  "key20": "2N4LZJSpbxbcLbuYqHZriMdcy2ioLyb52WBCnD3Jx2CxcFrmN38Dzj3tbttyDRphwzjuTUjJX1Y5mMhDyGu6oHyY",
  "key21": "4sQVstEGB5fHPFWqHJiWxmYwBrbbRUtFKpknEbgJw3GAfRPAcDtDoobTmQ3XX2D35kpKiSBuAVVcEJdzzh1xmtzP",
  "key22": "TeKewJe4z3ZpwfZuUUrQjMr3duYuBRt7ceRPbzhu6bDAqhxjCnJFkZN52zzm4dQ2tWFrr3D7Kdxo6T6HR7hjaiK",
  "key23": "3ktjXFZa9549Gn1t8AafiJN5aWjx5E7b78CwnBWtUCgdVCmYfRnBuHyCosqwkyqHL9hRMNGQXu2BL28QbmQC7oa7",
  "key24": "39ESLHgLWq6fCMvK13A58GDebm8Jmiwm2UR7P99V8A9E7CYwKThFjYgAUz2mQisTz42A9JRNA675hUCNFWAtbhq5",
  "key25": "4yVgaG4XXwRUmPJDRmy6ArqjPWMknVdKEfsvHZzRULHnJtPZ5iA4oMdBToQLGjPgbrFUZUyfXtvRnb7Ur5qSQJGt",
  "key26": "2p7NnqZQJgmZdhorAjSj57KMgQ5GD9bGcew8vmajivuSUkPsYMK4DfG9TchWXNZYtE83s26nTVCovQ1kTcWKu3YR",
  "key27": "4Va9svRhK6LLyNrmCDeZRj5bJGeh9GkPKZVB4zGggwVo44SXpPk6agVhkx7uDcJM7XSoAMjiAijcYWAcKvhKW8EB",
  "key28": "7TCQGb1EBgz5g2SaiRe12kT7kCaMRmEjXj52LsNSnvZUD3Pf3oLs8VqYmXGV6YcEP1yad6ULyXTyJmvp3qgHDeM",
  "key29": "2CyYmPzhGKXArg2EedC1PzxQgwyL1GCSST9xHtfsJihkPrihs71BKX5a3Jrhsu8bzKBVYJWmzHaHrMWzBiZjvgM9",
  "key30": "3ZL6CDdTbu53GQ7Av6kZBMs8BHojo5Q11cTM4rSEL9JSPb9dSa839dR9fVQcBQ7ioPUYzX1BPiZyQxWXeK7RptVo",
  "key31": "fwQRmv4SJ795V8juawBftw5BSeCam1RsEckFxJmGvhbkfZmdXnkPGiHVnCC7Gq9yHFy2DYJUnDpdfpbZBwDm7T2",
  "key32": "opnoxuXhkwhQnfEVUkFfKgC8Bd9Xm4bw63ooJV83jWyaYeQaQ67t5Uyuwfxnpi8aeYZ7fJwtvsNXWy89Nkuqtzm",
  "key33": "4U9pfVCNVHiNX5iEsdncSsNcJvi4F3XnjMQ6uo5mHRUymUeSZU7bzvAL9S4ane9dTRJDq3QGtetTN71f2pUHwjAh"
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
