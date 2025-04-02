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
    "3TpAj59KMZSEnNRhn8zh4mi8WrRm6cFSauHWZREvbrXgq6srHzNxi64Cihk6AajS4EJoKjr2UKyFRTwqpds37km5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gpsx5864LyAcj1ua8H53ArnT5QmiXhri295FEw3gQXCRxsxXHcRfKBMWhD2R9uSKj2s4vRqCjU8RRmka7Ntq7iv",
  "key1": "21y99L8d8efZyN78W7VVzqfkKcfstszfnPHThc694NKgHefBXqCSTGqZsxSK8aCupWkF6t4aSZXBErnHEx3BHtzD",
  "key2": "ZAXb4VqTkw3oz4jZ4N4VCu35ZhwVv7WDCcdMdwohk7TxiBWC7SufvX6U94NQSTaKENwf7tbzs1DahP84Pddi8fY",
  "key3": "48VSMHqezi3dZGhTcGuPdfTNeajbQgAvLcwFipztJfbGQp564CCxvcrYHExQayLn5zAUYWGpgoavPMdxsFscD15k",
  "key4": "4RHyoNPT7bdoGAmngeMcAWYqpLmJAutSdtsyrHqowTAdgPk69UsLYmYTdpL4Y4isGE6K4AqvSBo4S5eqscLJra1R",
  "key5": "hu4BV1TS4jq1KRtx7rgDqUmhCNJT2RpcTd7CLGe4SvhXTpYWsvCUQfnNtTNMizPvFy8XnWpfkpDXd7QgNaGd5yp",
  "key6": "48Hv2f1quuTiumUXhStwfEvyWz76tQoH3wSxFhw4mpWAsG4n1qvib8zDPXMrS5yznWeU2wMG8vA9K2NqwQbDFWje",
  "key7": "3gQVFv4CarNZ34nCYaSFhvHYCWPipfa4LUh6HaEjC5Bx5vXLu1WJRUsdysnWWbKoM7v9aXxBqti2qV7nwmaEMsxN",
  "key8": "3TFWuZhr7huvqYnqizXk3XEVMjRKyNuscvP2omwv9XtzeMAbK6WF1PxJoTdEhNL5EMnUe8E3sb2htruVEeY8HzX8",
  "key9": "5RbCbWoQc9U6ETQs8cwYV2w5StqWhQNUhuYw9dKa92XoFWGWCvPYG5zknL8EcFpL1nVAJ78SB3jwwvFLimcrPy42",
  "key10": "2MVdKTppgeEgTQmkU4y3Mu28GnxdjPCKL84VfiVBNx8VeBNN9eVHTFkKnjRjUvrwMsHy8hTZPn48kJy3twq5LnRb",
  "key11": "4mHR773mjgFGmyia47Sv8LBdpeRyoKUpvYhmGJcYPbWtnJvSmjNW2SiLQDLJB5GqJReZDsctHNzBqZkFdwEWXBy5",
  "key12": "2r3cdLwvfnK37uQPTbx1HMeoGz38pJLQTiY7jBekmjCfnnHbiLfC8KiQTq3h9FrYVaqjm69ezBShJVoU1HcGyGyH",
  "key13": "2xEaLgwjuXxhB19vRKm1TFrkNjwpEjMuuBD73Gyh1s5h72L9SuQSqXXyf1RaxzUmi8dKjtUEkGdCYgQEdcdZGV42",
  "key14": "2KA9N3GC83aM2AaQGZUcFKnbzPTvhKUAhuHNYaGU6Ars4QiXrzcDctBVsfR6e9GM9aRX9zcasYP89k4XcMCrYnKY",
  "key15": "zKeCH3pWGKyML1HNgHK4ERLPdj7EG3gHvW1iqycDGCc973QJryQb1wedc4hwg4XYju86F4AyVoYxAQPtm3SMU4x",
  "key16": "2uvHTvVk9YYaP446zU4aqP2XLn7QrsrYoUXy5SdrY5dr3QUWTY9AAXdyrVM4ecD8ur5PnUbTTxLbRQDN3G851gu7",
  "key17": "2DSKZHzQ91EoiXDhu2DN3TKWkbTrzXirtSARx5uaPuUVw91J1kwi2AvqfN7KezqvmgXjqpmcLfU1kUA2UWBsec22",
  "key18": "5WxDVFMuQ54ruwAxcpvhoeJZdNSm2J9Ne2DQJQosg9eazdy2uv3P5jhCMF1UkaCKLCDrJ7mQTsJMxYY6eHKnxFut",
  "key19": "3NT6Z2jhEyNfUB4G7Ea86fdva2tDdPTC1QTYWmNq5v2p943UAD1PnmuyYuADRDkseysx51x7QbuJsfVnK9bCwvwu",
  "key20": "3UVgMgEyVnvNj8zUNyi7NzpwW4Rrw66YHBgv2pXBBfbh5ww4tMm2fNcBfmsGpq7EJ2hQjeHUzLf2xRsEQvSZzwCU",
  "key21": "4qqp7H9GfDYLTpaNSWjDRMsB5Xr75C8jxj2Pt6zQkdAz6W9zcCqZUhABC4FGALDz2xF1PidjeCmF4UJZqh4kSA5u",
  "key22": "25ixLnqG94V3J7qwCu4eucW3wbv3W2XJqMRkRvjShHH1aBYcGsBJvMzba5YgPPJ5yYPNoiEzXFxK5a9r4f5GkLRh",
  "key23": "5kDRvLMqpg8bmxxwEYMfRR3KH5emsjL1syVzoGa3DbeVpaT839dYVs9AaRSWAVGnyNLiAxai6eeNV3ioJcpGbciV",
  "key24": "FFXjhdmdVJHQPbRqxN5rB3XL1ujBWdCLtPegN7ckXYad1gjenuMzMWxbnxV9KQob4p3bZ83LqSbDANp9Efk3ocU"
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
