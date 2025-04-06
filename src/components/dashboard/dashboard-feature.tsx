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
    "663WgVjZ1agM2wZgNzxPGMGLwquXcgkZ1Yeqiz9eyLgZ1mwSbXqkE7nyYwDYYpGh14PSairP1LB2SHATZvGinhVE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LiYb4n7MarPscjRM8XUS8h1Mc3Vvhj96zdprv7ELXDX5iL7hyfCvRDhSUddDdnUiEqhW59HsUhfKE3hu9HVmJsj",
  "key1": "5yfmAmWTnrdu2cnKFjJwq7P5x7YLEgSmCD7YxCpRNSkyhwEV3GYqdy5AwdrF6JY4P9uT87k3sMcX4Nq8LGqwVf4q",
  "key2": "3XVy3ZYg7aLcV8g4qTgSdwyN8gMY9HpqgbMZ7ZVDf7hNJEeFeyyKr1HiuQHstcxjoWnUsF8K4yJPqg55aQJFPHo3",
  "key3": "3CGTczET9Yb6rbDJRnw8rs1dxv5itvhHEX1PTAmZmELgVDcMjMHhj9crw52rnbjgtvwdjPKh1kyV6bZ6V1PSyWpj",
  "key4": "3Xwu9HMiBHb8LGkLe3abBzB8WNx796rm9pxTMZtiRVvpBPgwSZnVA3TdDRjRzicY2Aq21rjwnFYqENm4dDDwPM8v",
  "key5": "cJrpxzzUwMcPEYMxzZrKC8PjQmDVhx4D7z98QUp2Ur7dfduzHA4BYKBxcEYd98A5dabPBSEzR9kpave2aGoR4CW",
  "key6": "4r4afj5hNXXNqkddLh1SDcANAWeH51iXsaKWBkDFuVJaDo5ZiPv7ofXcLPkQpKc5rhrYAqyy3X6hUrChyqCyEzDR",
  "key7": "5aG4RX8eKZi51zHeke7Ncn9YQU96scK82dfCE9XH68BQsLYdvKUHfpoXoxc7qz6VPP1PtKv8hvWtjkQMkrYUVjBW",
  "key8": "2RgRPzNMR9fmw5HspdKn19bQuAySagXKz2GoPkpNnPXEHsM6z7ETXGgMgHXgydkjmdfxQQ1WnTXsT2v43ajrRMCZ",
  "key9": "26bocF1bcGsRCJYSRzdaosCmQJ3hiSWZc7Vv7bC4wFPJvjErdPryEnurm2fJjB2mWm6Y2F2ws4ooGcdmpB4g9KPY",
  "key10": "488zvs4hkpjU73353s5m9syWsN7Ko6sRZkQ7babhqsKWsMvwhsfZJiuBaHh61EQUzqANpKmBuz9frCqDo7nHkoXd",
  "key11": "4GG44S79TnDBGYCa62kPvxSSmSi8zBRQFiF9N6xHUiNFzbRcjCxCfeY6rbstRYACiKE1AKaTESAv82zZ2fo4iQgG",
  "key12": "3876aZkeTuiJ55VwiRjY1yv8evCs5kfevMsSZtinNoo87wcisCpJKuk1hTBNEDAzGhNQmcdimDNCwrgA9yVJUf9h",
  "key13": "u86nE4SiWgPyx3AtmE3fAP4pMKcbzuQHF2NPQFmjVTjRHFrBh1JoXTUUoLrac918pzAqMURseDLxqF1gyjR83R7",
  "key14": "4mA7QXv7FPNnBE3nrjaDQsjSXRQmFwVMAkdMixXZRTFeqVn6x9Gzz9HEwmwqmXjtVFxGRC2Q5aeNLWycpMugX57R",
  "key15": "2mxfHLeq8ZE9KTuMpsgC2KH2hwLZ8RcnDuN6L6cxYNRzoU8GnMw3uoa18BBTtKh2kHoAsnXcVsGbVVDHRrKZ8175",
  "key16": "4UfzU69WbdNFdPBmFxAiFHqiJKymsGRhBKTY1uvBiD985G9fTYcANhJ2bEjKUicf9oycQ2YC1zdyqTahNbD2CBNw",
  "key17": "4hjw4LqrBi8JVqjaecRMuhJKbcU6MsJTrBnQroxFPWwxFnxaVNVp3kdeUQE2UV4rxEkBax8Th14eNvNjWycvQ2ot",
  "key18": "3uc1sdw78hGNAmrLevDMyhD7Z7DZJYKUnBFmsSCoHJmVqTiSeJGYvyrPxhksZ1L98v1ooJg3endj8c24bHHZ7j4X",
  "key19": "2Acp5h7b7GSssQrkvhS699iGbZrPFJWPTVTJrzDXodiC8DzMhnayWxCk4nbCmuP86NeLxw18eixyvjkAwAcWDotC",
  "key20": "2wpPsu3bjmpYXmmiJkw4rHj1VRNMJuBJPYTvp5YAVuKTBfVgPjHmMt4Yg4v4UpQw8M7S9LfYHNbptoq7fn82WW2g",
  "key21": "2X86yovTb4qCBZBqWeJj658qhGbdSYFXf63zWzPi9kxrfAPB7gSpCT6FSSXVT9JWYWQuw426hatuX9JUrVNvo79v",
  "key22": "V1ZaHeWLTRJDkfnB9T6LJVaw2ZgEkfLuvwEByXypzuw8yRBt4QJYxhTQztvrCtVgtjPFw1mNhvMqr3WuzqYi3WR",
  "key23": "3o4w5mBSNxwhz3my6rmdyUnnR96iDfjAQBaA8UEyoHmKF7WrDQkq1rZDTiJBqWW1ENpSzkYrNatoNKmc1xur1i3Z",
  "key24": "WjykToQBCFLBksPrLvLsvKotFfbMYrunCUd5rj3MACeWNuhyUdXMWgXPTo3fvD815ay2Z4w22mdntMmh9Avntt5",
  "key25": "uXHWQw3cKdZMDz86H5pJMeuhSRRXx37Jq36Q78wbMu86TmpApAy1foL5jXqQTp87TtQ9M7DiS33rbzdBX6CdDoQ",
  "key26": "ycmSNMGhBfMHEnVvKzJLphbSr7QDC8fy6RsYDxUG6uDzqRoViagR9HwvdkhFagwBSDZEmuiqHVEfBGfdHR4jg7V",
  "key27": "34B8QjF5rRvbD8AmTEVc1omFYjZEKD7xfACjPogkJfAiZg99m8DuyKLuZscevR6Yrtk37dHz5gYjhXfnyRjb8pHL"
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
