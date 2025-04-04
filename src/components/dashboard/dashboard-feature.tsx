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
    "4dit4RDCmXz42PXPVBKvitDfQyPQ7yzXfTArhVdNXMCV6mJGJJeDbAMiLd5HL9wrA8xqyrajgYXeq7BdPzcEeWMN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BtEgSygS4bViTMbw83YN7u4puJNdJ9ELaYiQGic9PBT6HsckwTa9QfWDT2aw5Jjc4W1MPSPZgzLtUrxC1nZVKzU",
  "key1": "43oR6xuw8HWvVYHfigySRn3H7gBoSvFAWCaRUfM1EpzRGwmrRkLvvdusNobHQzepABe8u4WBUUKkbDJsecYkM3sw",
  "key2": "2MCiEgAWnMa6cJTjDcLJ5fhRfM7fmVpwpHvwgDnYq69air7m2dC2P3kqW9dgW6QxKjcifJkNnFgtpRTyMNQercZy",
  "key3": "2Lp4Zvh4SDmTVyo4Xq3pTuyTrFM494h3ketn9ibydAxgKbrpc8GxVxLmmUad36vaFrFzfUbZ8gdPR83Q9Azyedb2",
  "key4": "FoVq3rfNPEyDP9hsr8dWY635uFPTRq7E2TqfjLQez5aLMp9avwRMqZP2P5cnkGmX8MariWt7nS2VmcigxYPEGpC",
  "key5": "3wZiv35SC7rsvg9xH8WFRdtLznNsG7vDh4NPr7RcgMLrSdmH9Ng86gwPArmmJXo2xmHc8A95NXxW93xdByeg5cEQ",
  "key6": "s84YvKFmPcWPZAjJZQzQ7WsLYhMyqHDztRQqdm8wzoy8jH161aEmSKa5tPWwn8wWUHonkca1avWcMPWjm4iRkW6",
  "key7": "4c5H7vhGf9ujNjfHvKL9VruwJ1YFgN9V8kByaLXd8LbNdPiCLvwHiMd5naM2f9rEiqj7ivkQ3UPW4LfbbgW4TaJX",
  "key8": "4kQZ9Upo5PGfr8HhQKh6AfHXZTTmEaNG2xqWqff61YJYmEqWqNRKxtei4DfWh1mXo5qVAE2Ngy8VmYfS9tNdRG3a",
  "key9": "4TYd79kUN67KAUiGyX1PtETVx2QHtnFHrcwskJBR75Q9E9z5cBPtVRMJhBjEjZt3mJRPaQWJkdyBe5ibbqC9cb4G",
  "key10": "3drd2aMqmK6cAGx1Bjs4SsU2g7Eq3gcfqcBtjhockGMm2di6aQg2hFg864JE6Y54TAbVkNUYTf5YW8azsoU59qhq",
  "key11": "nJYQ2oibb9ASDY5hKCryGENVBv4ZHAN9AavXGBv36qU33u1qq17EFrapp5TS9h3f3D1hJNfDubjpoVP5JwX5opy",
  "key12": "4pKdwsjUDaT3vstsvti1R9Zf1W4VLLkuJ86z6LC1cL5hqsUeJt7igcKPyYhqys3TgNWnZmaHhMFwLeziTtq15i2U",
  "key13": "5bsZ8VaRSsHqTcRwnfBL5rEdPxD3nZ4BywJ5fmABe6k6mTMgJLXApecooJN7kjsXZXom6BVm3xTRSwvwPwdqy37d",
  "key14": "3d8nmXbChHEa6VzhorCDrmwRdtGEk4tWnsRCtQgD7VzDitdsUSkdM1GsC7dPSARMtDu8ZT4rRMoPF3m6765K1oRu",
  "key15": "RumrgXnJzSYRUWqgZmYbuJJHDMoKg1Z8YyUQBwq7iQsB1jXxcdYGF5YaEhmUbJt3xRfY1QTB9B5cWkNXLbo3NfU",
  "key16": "2bQhqGoNSTWQo2w6zHw3kRszBsp1xBfZ96rMdRq2HBPpkjPGo2KFdsQfkxjXYKAAifHviFimabHQVVCv29G2TvQL",
  "key17": "3y53diXJEM6Zdbp2A3tP5PmyHA8Vuxw4wbHiq2BVHbcmCwsoA2hmYzMmcXX3hvkfLsdTUW84PupYqFhAvkGw8TsF",
  "key18": "3zBrxDFFugrVCMYHSAz8Dodug7Xa9HBH1djykaDJtwGZkyFQWAmnrGbjiYUTjJTHb8jPa6mr6ZHm4bczfFfZ8k71",
  "key19": "xpnMQGqpYESGczwXVAhAbpGwTJVXna9kRZNY6mKph9orzG5V6Hzrb22ZPreFajhPTqdp4LJ52CnMuMhmUJBRW6d",
  "key20": "3QSuQtfuAQTSSkLpWJDaYAeAr1rso1Uqatnz2j9fXfCAZz7fZqPqbn83gY8oRjfEBsJoAom7RuxXoHJv3HC5UcZb",
  "key21": "4gyTqFftP53JPy9EJFrGYwShFHgRQmhe9TFJqZeGLYR9v8RZJzUoegMx5xG4fAKaFunfzMVv2kttvCpfcncL31vP",
  "key22": "2QkEiG5eCJDgj2FxgcyDQ8CBhnCVeVQa5KnjbRJdkHbCcPtb5G2T59wfkH2nrQhzseiRDuLYTVU1m7wAaNGwbMzD",
  "key23": "DrWg1DdNoJcNWN2F37UiNNv17Q3sj1LFTyERNK4Xf3HUM3PgeMFvB9teRJC1v6iFfE36reWKuVvzdheZ4apy19m",
  "key24": "2YAD7k1Cy7xL46bUtZdD5xqVQ7EDeQi3Rv7Bfazs6mc8gRZs71kNY46BSLrtCZHyGK5i4qaeLDynGoLGrKeiBYoy",
  "key25": "4cApDco4BzH8KrUqr9BcRFxh9psMTMbCSthKJd88CztqX85sdhw44hP77oynqNuXr1YnKk6jHUBonc7g8wsoLHiq"
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
