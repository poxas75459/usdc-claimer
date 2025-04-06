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
    "54y1bBz53VzfGeB1nWLLQGAgJPREAzatbsUqUh4RVoYnHgzph31zuXuzH2A6LEr6MN7AqzJyijL8JkpzYKjddDcL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Vz6gUKZGN9BsUXCcdYp33Sf331LzLLbrA9dsMLhL7xKezGGFrad9E8yucoXvgUi2zktqcQhWDtnkbAPCBUEGRa",
  "key1": "65ndL9yW8tihQ3cazY2Bw4YE1WyuPfAYhuF2fX8UjoVsJnFWN4cbkAFtGWHL3BEoXrsMwn3Uk7hLisqvR5SrdxsK",
  "key2": "4EwSdqwQ3kgfLZtdpiGEGd92bfZWPNBqQ3Rsi6moPvYHLFAtj3icGqzzkeHETs6vsgi53v4ByfFdTQztHcam9dah",
  "key3": "5sKLogYS7ub72yyRDckErxAeMELKYAAyqTMWqiZqPK9Zx8CpBQr48zuc8yizTY2BjAAmEsNHNoj7hhFEYBgittZi",
  "key4": "zuS4w38Lgt2UKGWDtpP5pP6yRdXU3NYVaCiyEWGNtTdkJdytfzougrjucctcZpqw6vTXAzwffdneVU59FJxiJka",
  "key5": "4uFBMsN69rFzSthshZ4rTY917Pu1ygaZcv6GmK2xCqR8PB6QMat6RTZYco5vsCCjq28ewF8EmKrKFEjEeCgBgiLv",
  "key6": "7emRgMVhZgL1GUN6iV8d6F6ec9TSWfzJA4q3XVvPY45suaRwvuEtDXWeK4F4hVPTLHeJr6ED7XK6N7GvGr59UpN",
  "key7": "4DJn1XDum3mFFCLQ2dsF7MxLcMhUbhx1RxWBhfrYrTRFpMbYV6nFFaCGroP7taYZMLeHWsy3EKzUfHj8p7ZbicTV",
  "key8": "3TiMyMd6pUDJyR2Mpk9zQsPtmZMMLuMiJbMLYzBVPNqbUH6pGC9eHm6LAVMXPWE8cTS7g8mohD36aquw4VKsVHa1",
  "key9": "1RgATaxMAvn9u7bzXpREQJDEHAfV3vbhC7jSYa8ycEJg4H6QdZycLs6tMGPpeQqPSqp9L15NsT2NG5YpR2iBCBZ",
  "key10": "2hNr9eWNBr5gS2QXwT41EicQ2UScHoMCxkevbsV757qss1xY56d6tZ6FNj7jVvefzpx8FLnEJygbjn84YfFaVBUX",
  "key11": "Jnzka1fuv2j49ETYJaPx7vrSMFyLp6nT4kdb7m7jnE9EDkPq56jPvqXruzVu6R4toDHsDF7fyEds4rXPH5NABwM",
  "key12": "4C5grw7bK4R4xdAz4pV7Livtgm3cYAmmggowvqKT5fPc9211pDmAxQG1U2zecu4ucQf19FKVkF4sv8gywb3T3qcj",
  "key13": "4eqSBjoL9EZzXXSt2r4QoKG9NiHAe3Hnox1svSSC6pGC9ihMmxit38PTPAFPTS3Mdf3B6JAaNi5MwCwNyPZq4oPn",
  "key14": "K4pMkNMSDbrmyMPEHz2edKFFfFkV186CAZxecJDFJgWTifa7CfnDWcuhEpuJYRQNzCnLnGuRBcYYPrsjK1z9NcE",
  "key15": "3CN7ZkoyPHBwbSh9DXUpN8eYYhqCDoXwtV9H8rsN9jhuM6rFzEE9TKrLQ1w6vCMwAXHWLmQUYufsfJc7f8eR4NAw",
  "key16": "5sMfv8eK5fUy4GiTGPQgRC7fNF6PwrCgGP2YxUeAbpuTLxdubHuHF85UN9Rydk53hDnqp5nPMhTcYNBKNDxEC6Tn",
  "key17": "4C3oTVFGRTEf22GB3CMfZFfMfNzRPGjEhEVCQGbHwZN3SfEHMpBuv2V9phUpB2WqLTrBnMB2VioWjYLYQufMXJb1",
  "key18": "Ew3wCj7k37MgBQ6Qg1eEWev7qZuWPxzivrhcsqaLEECXemz8ZaDY3LJgvmyPXoQXtSiGiQfsay91E3yDjA5YPvs",
  "key19": "2YP7dHqQuBBztVbTvZDiohHhJDbgePbG8W2RjLYsTe4GaKNCAgbcJT9mqYtaLTurTUq6rJeQEqXgT1Xj5JWxdzea",
  "key20": "5jZvmmKN6UdN484oUU6f5TLdfiSfptJfBRS3beeg37dgUMNNsiyzURWMqjrNHs9y9TbWxY7157QS1xGXFJLh7S8s",
  "key21": "4mLLYqUPrcxxST1Stk7s7CPTiHqk6Ggr1J6QmoQeYk1ZTfai2VGq4fhR6bPejw6oG9bRNMRb36tC3Xnr4Dt3hDC6",
  "key22": "2FAehrmPCLA1NYphv1CtcEb3ukyQoanWzEQHEfPvvQjaDMXyQz5YFMBncRsUJFTVzvJ1kHhH5dXKQ8LUAXni2Xr9",
  "key23": "CS3ECid4xyaDRVS7AFbMNmkUB9opDketCztxgDQtPRMMJz2zSn6u3kuxXmnxFLL8qSb2mVtwxfy4vdWA3PcekgF",
  "key24": "65xJo4MbpnLEnXStSnMXbN44RVZXpPrAT1KjjHJ7Ume9phhFQKjbcihgsCztUsS1Mu7iJQncMnQqqbbFHz4xHcdp",
  "key25": "5RXFn7gTrv6GP1n1hvnEWNDk3uYS3Mddo3p3nVLsXB9WADYsH41XKTVUXXD883ktb6EFnweQHLYae5Hd5YZuDEGx",
  "key26": "4esE6ARZQA3Jqz1SBbnH6HaJngds2hoo19MuHWg65VBHyCWsPnU2MVNNLHyLyUiTrSUqbbuqAzLWTuiiCaQUqtXT",
  "key27": "46BsWqkE4Jiufz1AohZxGtu8S1y41h3oTSM9beCRCScbvrgf8nVDReCQg9TvQAKGgULVXSLJzjTMiWXzd6rjd6kB",
  "key28": "5ZxMAHB9Tzj6Ui9gzbNJD4dvxrfv8cmHTo1Ce5d19YRqMgEvWhhPvgywAsa3qg5jHspG7yh32r95pY6vfFH3NQwg",
  "key29": "2W2kwybX8f9qYehfekBQKJn9vngN2GKZ4d45wzCb12aa7w8PPBAVYkrKwNhQgCihbdCaGHwJ4XioiT1HZZ6BUUDz",
  "key30": "2KABsty34jFtUBaQSky1EzULsHeN4okKYkh4rAtKWT6Tcm8DPbpQxUUGoM1r3up68oBqEi2Cv5iYCH7WcC3cD443",
  "key31": "5fBFeeS4AC8bDjJQiECAjJNy3qyppDsiQ8AxJx9muQCwQYqeQAE5sWbJLKJ6qCJaBJMjmFm1NXiPdp1AXupX9z2h",
  "key32": "5uS1uiSWj81YRb3i24obTb2uZBAYWJrmjicucW5hXBkBS1ygXX5gp4Fuads9xxqQoHeuCoubGknUiXX1LxwCePq2",
  "key33": "41ZiFqv3jDeeHGVMEkhaSyYqmy5mbQcnx42JJJuHgfaddQz5NUErDj4QnabC19jK8n4jf6ki2QjN1sFC2DpG3hkJ"
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
