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
    "3cfxLSfqNhcfFpDSxFeXCYtFGcsk5as8WgN7xqHaDWCzumka6zH1wbX1xGbt17r1AXarygUZBmev4d7NrjNaCydy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NV8BkTi9XgNqSKRGYdz3BYRT8VsqMyHjpiwtFwTk4jCwfEYQg6pgTbWy7AzWtwK5BiCpiU5SQ66DPs6cKChWDiQ",
  "key1": "2dDayn1UHgEME9irbsGJH7iTqe2auSWdbG8xyJ6WMxpX8eyjH96Ugk8ymhdMHSdye1JGEoGwGby5MY969By1qm39",
  "key2": "5CKa5G7K1KBtsw9FX7Jej4Fa3FpmsyYPKnsXvpq519MmzUzSE1Uf271P6wKLpQSoTraVdg1qKz8qcydLWLD4idV1",
  "key3": "4XM78ou5p7gmXVwkfxydnKY2qmpuddivcgGvcpJyvKsJfJe6CHoBYWnSUWi3srYcE6AuhQLhwdyb1XiGo1g14rvB",
  "key4": "3DtGEunCz4WRtAB9PS6Sd9r2LgNW2J92PX15B71HNSkwC6Cjd2f5oUKsuVHRPoDTEg1hDwdpBUaa2fLWvZch28y6",
  "key5": "5f7tUdAxdc2DRo4ya6gRtybB8zZosgZqboXPUZfNgcVAznikUZPPtbffH2AgCicvPgx8x4ntu7id5bULH8aJLVNS",
  "key6": "5EVeZGiaEsYdaHcA3T3nHfxeXMGB9xfF96az3L7TwEw3bWoNZFL2zAqDVMWxnsf57EnAWKddwKnUKXqqmfRPkdCD",
  "key7": "3jYCijRhvH2362bQBpZxp7ykFQ4dBvQoHgULqKEqt7qiXPGBYwyfMqbeuHKtZM23AChm8nd8XXCHE6KZWK1CrCYr",
  "key8": "2NGutWMFGNkGR4PEdcbAx4Mkdj5ndJJqSU2NSt3Co5mACrZvm2QTaVKpyd2u8pVtJir62YHSNMdzmeEhStraP49W",
  "key9": "p62happpZ4dbmBvWwVHpLz1qHmBS7XLwu4SPTx8pxgis3UR685C15EfEsEbrdsPpehgCDzc8UbSMVV5FWkNYe7W",
  "key10": "4vW8md1FRENMjgB1mEKceF2w1QxfWM8ejb96MftJqqQQpRkMcnmta42L6PpiDMfJoAZJPBeepYygnhvTcnHpJg2A",
  "key11": "22FAUESt8HfrAuzA6uHGYmowgJ6pNXCFx8J9fBayH8Q2RWEy83LmZpHewq21q1kZM1k2kJLsRtZBXx3wab6JJk5b",
  "key12": "wzpbYDypsLg24pRNKdaQLz3j5VRGLcsBGhjMKtx2ZnKqdKhMxPxZEKyfQJhtTAeRn1CWtxW632yq3hbFn1iFzMM",
  "key13": "eYZofsRxv6M2CjxCU7BQ3WsExTe7TUk64CjpZWDzdaLYbG1CC3qefjWZzPoyxyRzn8Y5SCaN9CZTPLk4ZBcHrAA",
  "key14": "28yUwetyyiD2yXZsXUeTRW7N7m11XzpJC2G1bt48FAk6mQFsWAaHhgiyzbgyjDvGGHcBBQTk3uE4V75nEBTPCXRs",
  "key15": "3KqqWnVynjYZ9CQJq1beiJx1uAtB6stYGLB43bcq2AkCsr3KAPnNCUzxcCdaaFad5g4BAZez3cD4mVYevaQtdbLP",
  "key16": "4VvDDiaGdSLcsKi9hSDSFYmHnvoKtnycksWhzAf3LwitBj9m63aMyRjWVMxsEMaMJLbGVvmQzY4rmaQc3fxm5HWb",
  "key17": "2ZnoQb6bm1wcuE1m8AUPnyPqNzJisyKmuf8AHQNPMSkRmRMWxWHeUnrMnVFJEkmdxWXvQuhR6iwXWfAmQ6yc1gXL",
  "key18": "4DQbxTXLV41zkp5xH76ZgBjnXoijRG4GsAPhf5WStVJ4PRufTSCFMgYHVvh4fKCfyVBr9qmL74UsPPAtcSA5k3KF",
  "key19": "EvuR3b2CkV5F9VqkA5FK3kAxFUJhBGcu85NDXDt2D2EunPChzD6UQ5CQYXLYMQLgXr6zUVgy6ad2FYZc85gGnTy",
  "key20": "3ZoQg1VaGaukr1yUvPWvcsf3DtRqZ3RyzJ5TQYbdqsKDnspWADQarPrDj7wqEFm6jdAV3zgFWygyUjy6cgL45Aeh",
  "key21": "2VpMKbpw92s8hXYn6AN4pKdfNRWKjzMp1KfcZAzgpuKUZMWp3UTfZ3WVQARWeQdGpwZrX7vUBy9S1JPMmm3cyjVb",
  "key22": "3virKqU3xLmW915T9zG7x7zoKMhr5dFpQ4Vk11BUHi7jtoUb9rXKmSNG3VnrZEzP76uYwXvgGqWb3YJBLo1pdgnX",
  "key23": "48R9d6S6LCaWgmSkw587LhU8V5xrvSMZkKuXD95GztB36UzkUAUc2kLjNMvEtPyNm3JTyH2zm1yXRS1pgYTHLUrB",
  "key24": "3xDY1WtgLwvBk31XtCwpfAQ2st5EATh7mQMV3pD6CNAqsNkVfc6wVWwXobw9gU3QuX961NM48PFZWrD2LvvHorps",
  "key25": "sAJUgZVqGLkx2hXw821ktsfcxYphW78ygX6gWbtZe8GKj8CnjiXD5eeZ5ZxqwKD72Axa7GqHx1UBYxe5m1jhvan",
  "key26": "TuXRSsmQRisNwDpcGVA5p6pfQ1Yf6fWPbX5Xk4HRVjLqb6aXBk3yiRwWzi1QwLku7WazfW5GtYNGp7pwEcQzn5k",
  "key27": "YUFVqdocykmD6cgQpS1e1hkmqSf3qbT8j9V4a98KMz4m1moWpWYXkMHAnjhwwb3HQ3Tuwgu3xwXKvDkztXDrYJv",
  "key28": "43ExUqaADutSchjz2jbiUH4nyC5w6LR1M2cHMBakR2P8qrHBS44cDgTHuQg8ib2HfEyJuPMfYCs5mVVizsj65LY7",
  "key29": "5F7bhNa7UVBiniEfxXJQPngKUrTYMzCTxGJBStpH8dynDtAadRkLhKEMT3Y6M8XCBCctQw1iEvqeeYEAfkjmja5A",
  "key30": "45x4Y4FshSrATC2HpCqQku2kQQxXrNhviNe3r1ha98srFxLawQtEytfEbbKzpphhAYxsAxuHjKXa68vVrwxVdDLw"
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
