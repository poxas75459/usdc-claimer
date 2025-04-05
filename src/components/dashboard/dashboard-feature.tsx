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
    "4JK8unWWqgHELXKh8oiWyYeRuy4tFfPSLs2Ya57tEsVmLRWr7Hmco2yvB8nrpfiLNLs3n6SnQ2vTEA6MPxoHK9dc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iuSzWrQ2D763cyppkzx6H8P6oDPVSjpfmFGg2T7kGnqYmb3Z86MmfCvtNU1mhu3g2ky4d6gcwr9bcz1kgo4B9cP",
  "key1": "wq3NzBFMwxfaswttyuFskT8k6dQWFkD7aYqjHNvamu7S7qE95Jx9HXbXjmUGFsco6KNFC5cxx1x1JRtPdYpcgJC",
  "key2": "3VV16YFLQSZRZW2NWoWynsx8n2DeFEvddvGjpRGeDMCC9XkcazEQXUs2hBfiz1u1WAL7R2qhmTSfr7RytjYeR62s",
  "key3": "5dvBD84WsKsh82gJMiyUjF211xqKnbZ6eNEC9JoaRrzjXpwXH3DBLMehEjGB817uE3d1dhj9eCejcRqf6mMZHkfd",
  "key4": "53gw3JTiJi93uPKZN6o1XUWdrDoMdJxR5FFhvcHmnYdMVfA8euejnMvPqdhvjVyUwRWEGFwjogmY2kgpvbmVaQ1z",
  "key5": "eCHGTKNthfoFDBtVoWiBQ8KvVDiobgzaRnNuj2wHXAeb14wpwBgmWCLg4DM6CmceSYhyZdbKgaqBYdDzv29Pz56",
  "key6": "5MnhQQr8Um4RTpMZ5euLc8U12mK8Xi81KPb41ihchScHEAjDTFFoZXZBPaDWvqHrqpHPwbxSL2dgpsHcnNyb2fxQ",
  "key7": "5JfTmvTMTqHD6iTcVFuZh8Lj3vrJq9VdWkx5p1svhKjSDYR6TsKHfSRBWrfMmVcKdhY1jvPVWDGKZRwozmygBFeY",
  "key8": "E49s87umLBHgMBBWK2VSh8AieyfdVzuR3r77aLA93daNJEYYMX44d43BvZm7W45i8gQn2NJKuQ6ech58bT1qbS4",
  "key9": "39nRpvgFJVNbZ1Rn4ukFCB1BZ6mn11eTboCdE8GGUMPR2BGJ4kMT97ZoCNZX1WEum8Lx8vjHVTjLztck96h6Wc9R",
  "key10": "3E5dxkyiDfJRkSFrQP6vjpepakC8JRoTqzpvVrmfv9qkVLt9hbCN3tETA3wqeNzpkHHxrrmEmVhw5tN1j7nLEkzj",
  "key11": "2hhCS2R5JRfRqh84tfKcemTh1X2yPB4b8CuPAwzonWwLWi99krEdjLU1vDymdjaXr1ruMF3UwqhYF2SviE2cz5Lq",
  "key12": "3zboTmDHHXrd2rTWf8tBfY9foHDF9NGSWx4tGZXMpe5bEkyTUpk2eS4spQe29VTvX9xLq711XG11YLiSP3bGUiJN",
  "key13": "5SGoP3YbifjMhJWbheHYcxoAaArNVvH5hw1jjYn6Q3N9LJ75VfM88z2VFmpZvPBT7W2BcsMTDa8f4xE5XyT7hnx7",
  "key14": "23jxiiAi8gXUWp12FcqcbHqYNv3hExuXTka2PpL4vDU98qkb3hPAi1yNLpiczgpKjWrTXXYKPohSz7WLSgwmr1uw",
  "key15": "3oV6qbgHBuJ512davpdpgkgtfhghqTcEmbEPeFB1RPFZo24spcTJC6teC6MSZtRnUWMKRqdre3BzeEr8ZsnA2jER",
  "key16": "46kMXS2NrZjRPHRXWnxJ3WkRCYP2ZEnUzrgA7KRgJ4xsqkn41krCzDBmwsXhw44EewMnCDtSCJa8NDyERXVT3wHD",
  "key17": "32x24xpgas7KbKzDXtsP8ErNui8W9tHFFvHDPdg9wQVaiBVMqcSpmf64pvxUcwnfLxWDcMZWpDG5yARwBNePCqXs",
  "key18": "6evyurbULDpkPnvbG81G1LPPWHb1EQRpqG5jnZjAsAQCuoHdRxE7HzhDMUgcwTR3npo87aaJLj4Fq4YwDYf8eJ1",
  "key19": "5uXct99BSgX6grdSknzwUBgTGrgEQjmik6uiJW4AnV72fVV8yGG1QsfFTKXNmtC8gLEr4v1ghtvhdSY1QCqbpuyM",
  "key20": "4hBLo5NsGvcdm5gpctc1auej5ftbxT3zHkxq5r8shhJuEw7DHhveZ1ZbczQQ6UNhPVmh8hUDdTqLHY59zYmQTJrT",
  "key21": "3NvmRnmAZLN7QBATNheGEe2SJvJrQD48usGPacxexu5VDubiFQRufyKnB3iuW4XeDLh6HdgwfrttbP2G5YNaPw6r",
  "key22": "2c4HbeoLj9jy2uGGVy33Bz7sUKYgFji2TCmr9BsX6SRWzuoFA1JzzKqxSGfDe9BmAQL8eJN3anGJnBZg5pdhar6T",
  "key23": "3PpySpjwumWaQtNHZZKvMDgwatbW79kQ1pSJtmKoRJTwY1EhQTLxBhG2btNf4JJtugiaQrM1ZMLak7rvavzu5AuE",
  "key24": "5DvbPE49uhKpunwmWSqwMJD8Y4MvvASaS1xvJhojVmk4hRTa13rcSP3TyBthZVomeVZXZ7mT1pJa4cNQsTmxDmqg",
  "key25": "61Rzfqmufa7L2fQY7UeZ6YnQTFgD3GY4GmvRgQPMvvPFqvcM6U8URb6Uv6EG5FmbgJmBkuF8xGSJVnQL4nKYUBbL",
  "key26": "gykhxp5E76iMALDUoo39YfqcVrnTyxnqUonKi3B6gXSCCV2fnGt615JERSspcGNnU8jgctS2LCPb7yYnYtaHRsk",
  "key27": "23jZdBPtV1eKjZiJFZBrmkr1vSbY5n5kffD9G9MiD2naAhssNtkHSiYJEc2vPLAhVoVK4VAbwq1k9Drob2JmXwVm",
  "key28": "4AJ84WGfc8GT1EFGXFwq2bRbhT8vUzghyxSreirNHUariZrqjamWCVwaL8Xvv6GQESZaJQ6vLLgwnEL3Gts1HVED",
  "key29": "57HRzUcHqEik3icD1pmyCqL7ZPHfdSmBhs2zSNXmCDysQiFSPRWBeMcf7qLYeDQkZbNDDZ29T77otS5t9TgVjeRo",
  "key30": "24awGw4Y6TV2N7gfynVombpbMpy2WAPDLUqhKdU2XuxQRy7AU4KRuExb2saRkaqUixSdHHwNs3Xn9j1JRUcBskkn",
  "key31": "hokAKEr1d7ZGBhSt7h8BDwFzoYMUVQtkN392ModYMXPM7RHhzGUpU89Jk2sXLoRV4ftem8pz1vR6un33cgNP8A8",
  "key32": "2FmEJbyXPzeMjcUJcUAXH6GdomuMVYEybu2nbsQvoZLuBkd1exB1EHUTRMcK9FvfLw76EBYjUTezLNXy1wTUkCrL",
  "key33": "4NQvT8mkNFZBcCg6V8XKQgABNU5Qa2icKqmbXPLeDPYQv35vsBPp1kowfQWQMQwDnf1rjzZvR75LkrK3Eaou3nXC",
  "key34": "5t6bCVAYyWU8o5RNWX2LJhC4HcdogEEnJP4SLeko7sT43Ba4o1RUQ8pAUoaw8xMpQK1pjrwi6n9tvQfeEJD6atcn",
  "key35": "ppQLSUkcSV6JM6oBH1H5sV9YegfoD1KEcFh7KiTG968jFtq7Zccjs8cuSRN8pti4aHJ6WsBTHiXjQAj4fLhbCUK",
  "key36": "2521NdLUPSbwLVYnqGAKUbpmiqULWhy5WDEx3ZmKiG5qDE7vW22RfSjCFhWrtZpXqwrQk32bTQPXmEjWYHax6TEQ",
  "key37": "fPYFQpsV7qXeysiqt5cMGZsquEEbe623gb2W1fxeyUo55JfKn2RJWtPkh1DAdz9EEEYLCPSvdFMuTKESX5xkCvs",
  "key38": "5yvx8KyNkFBff4XSAL2WxA1hgWPjd2RDik9gWjcQ1J4qMaeCGVNSDWzHg1Yv7bJQbaqFHc8tTohgQ897bc35spec"
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
