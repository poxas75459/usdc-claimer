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
    "63kpsM6sYPU2Dkbgfqgmqrgue1pTAQTfJWeoEQ8JHmRYXrWtmSBKFYVMGBrKMfafxWpvHmzPbwHT6UtPH95xi1rv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fBPzmVqKAMFbXBFtgTAFVf2W9dP1ESutyjECHysA6fXtMJJAEHTCbYnJiMLcpB32rGmDtm6a5twpRm1KWbnuHzu",
  "key1": "2g6fSmc8Zmb5Vv4PXmhXHa7HkjwtG452ZBPkoybd6nnGZiQWMmRFd651FW4JYBi4UmkZrsjJnQ9WqhCBHR7VEpBV",
  "key2": "4tdnjgGS3UkB2aeBvjxZyaVGs9CHsiquhCnCLKyrgXrAkEeutkpdz3rodfocKQ7NFKqk4fnxktvzrWjaXqX1W7bT",
  "key3": "6mCJqHoiaNu4QH9DDLSi2ZDkafVuTM9z7aJZkLeXbNQXT2CsoLTeBiM4jdD7exY6KZ3tZFooKcCA9GQTeRJUv63",
  "key4": "3Mu5XyVmDCFznpxRz1NNihURTtHMuMufyihycAAzcjecZjGPuewPpDByX87ZYH8MDT7xfdgXnW1SvrE9jUnagKdK",
  "key5": "5QPrCHz2dk57Q5bUBczMMSGZSgQ5nSMzG6AFmhsVbfo8wg4VacdsNXQkLREQYuoE4x9ZdNatXAcbXQxJjmAWccxm",
  "key6": "YqVNLiXH3hMcpSM6sTb1BQQF5VfKkw5iSYsH1RGXvNPAobWp9N3SKZHxRoqxV3a3S94MbNEaNLxfYjiwteqqh4n",
  "key7": "CCzRDEZckbMkEwXYt943yc1mxKTBjP35J6nJf3PqKbUrxFXLF2Jj3jwoL2UpRhu3GwvTniSh5QaT8uUSprfE2F6",
  "key8": "nyU2UtuP1brDfVtbBiVtnDyrfydYf3skfAgaTq79rSAP5zPU2ZJaQEd5Awuwz4JwzForVnAonCP2BzVAowk2B8t",
  "key9": "5iKYKL5LnDdz54ZemFhPCR6JdrDhZ8PaqWwfvYa9wXRq7BzZcXYzFeJtXuxTtGfm2b3uxvvoVuKZWcZU1Cx7WxJK",
  "key10": "65inVbfaME1pexDAnCq8YL2SPWH81HthvaMJANpurjCseGbG98hWptaLkJEZeRhfDYMws3fm9nN6up8rq3YB5WoA",
  "key11": "5MXQMYMMq1VW1akefndJvB6fQNN7cQC673kCgePeVT5inE1WVBPi8xKXdNNQxHpsu71mU5DR5WRAQ566q4ZBbiy7",
  "key12": "3BvFfnyyipqEy8YB8t3EKbiPFEH8BgxekkG6ouZsSPPU5uQoqvA4hkrTarQhgekuEM8QsrX5RiVktHcXo9YbStTj",
  "key13": "59QQFYgk3E8M7hudVEFtoonTDPHtNqe6AJNHFGygnoowTbP7DpPNtySyuR1JTDsmn9PPTVe1v23fjNHwxX3Jn7F",
  "key14": "3VJmk9wm3MxVB6Zt12Sozk5rDS7WCngqLUwEeWKSkAQy7qK7kbUWY5ufJuTQdFeBwCqDfbunr1UQTBi256ASX6GP",
  "key15": "2EEmpuuRWLVAH9PoA5nbCgi9tb8gbSE9dBsXXs8pDR1bHmPb1UGcNPh8MpdDj6ovCraBLvyrh9DNRpQsjwRYL8o2",
  "key16": "5tCzD6t3tdynpwYqXmexS5BsvWErrHhxg1Satdu7vvpJXEaSG87z892yYNaNnUdf4Njo2vXLgmsKVV3YeK47MSVr",
  "key17": "3B5gNgxPyPMZjmNeMbQrZTzz2BYV2Yn5nZQ4KmnT6f1v4Q2bHEZ2YtSo9bGFtGaEp5HMMHm92F1v2ZKNCaouAckW",
  "key18": "WoeM6viVHM42oeyMYAWU2SMfwDSuEXy4KnQksgSC1u3FcDbfTKYW9fG8cEjNttm7xZQuYD6FG5agXXUGFZAb3pY",
  "key19": "3rhpTJPeGM2ManxaPE7G32jdn3nYTiscrCfLTwgubd9s1WZxJhpnUJnXwLHxR11getEac6bZ746XcwCLSNh8Lqot",
  "key20": "2GmRWQXJxz4VeGgv6oLwbaTYELXREekhchcrmsRkSWY89kW67vD1eEw3mFPrhmvBiCq6EvqkqgiCkRHDfgV4kqcF",
  "key21": "4Qi3QZhaicegc5wV7RVqJbUQ6rhcGTGy2q5amnwnEe5KQGBcjWEtKLbYsFeqyZX4z21t3qAA22t2M15QPhuLBsYu",
  "key22": "2PHUJ9JgBNzxKcFqehu2y1e5t8vhW67Yjcqyscvqa9JPuyuKm753DTSRHWgbsRKXL1wv9SEKcHdZZvE1Lj6jFrtZ",
  "key23": "2eq1JD3hoDx31XLmJ2PuWDAJFd1WGf7hzGDHBmtvibqTxhDowf6CEA9TdkwvW4vYNQV1hCWBUtBQZX2qo5Ba1fUw",
  "key24": "2mMtrNY6nDwT5bcNBBM1ccjVUCmpErVAetMCzoqGdVK6MTdxWdczZHTtBae1Navs3t5FPCokNycKiXe9XqGd3aWr",
  "key25": "3NaGvqfTExG9ujQx4gC7tKoggtqQQSaA2Pc9FYQHNdJye6d67BDB8CaeqqwNVFf9cCpwfYCzUJkfq2ARoUTKA2va",
  "key26": "4kTXaKCZw7fJ1ntVWCSMdP8a6ckLHfNVTURj4WjzQoexNtAkioWvnj8HfAzKsXKWLKqBuxH7dezD1CgRr3L7Zz6k",
  "key27": "5my9SNw91SJS8xP41QYtgYTYmgqM1D4HS2AN6LoGKd8uis7bfSpAnPYMKuiXAUgr4gA5k697dsPQqU5X7yPYrZ4X",
  "key28": "41DAYwgY46hCj4Rirnv2UMEzJqwA7azCX7fZaTJgPGBqzndckzYwEwCC8JPfuPrB3JjnRdiioP1efPp6GKBRQ83s",
  "key29": "G4y3H2qXNbMa6mvZHXFCt8wHyjBzKka4y2W4n66QAVBay3aVuUVtbRhKx5hPXFAUZVbsUtCmuMN1KHwknu3632G",
  "key30": "4SPqnxtystDPGfM3KqYmucS1txJYmuPmCPSfLnBTY1tmDxuQv7nbojTkTSYwzaijT46VqCR1rCno7QHCDx3ELwgJ",
  "key31": "usgykFXw9fdnFUVdDPR8nKQQ6rfzynywduWAn5eVkT62Ln4XMRt3Jf18u87uPGGuTVvxbZJ5T3LVG8meNEcnRL5",
  "key32": "yBekQLs7v2n22qeWAso8McZNZ7RBgyCkYHcVGESpYu5jc4TikT8JjDuHdG6woRf96eHUmh2PiBcu8ws2KeVJN6Z",
  "key33": "xBdedmPdsrAS8ikcHWCGGramtPtcjmsheVmvd3QhMN2BJUdCtgGVQBNUQ9YFmU4JpSwMFciqzQdEZwGyumcgC59",
  "key34": "2cjz9uAZpAm1kRWAmB7FQ3EGGq5xAqEdQXfYMeU3SHSBBqGcV93ggskUjKFn4njJknMcH7noRYDmtNPhoR9D6CU2",
  "key35": "5QMPXcyjwCiohASSvGiq527aKbUFcn3uYUwPEHG9sUEaNhaK4eWREsFo25T4JGzitmcpFaaxvcvMahytcBWkK8Nz",
  "key36": "4z1ZatAoC8p5XsFp6HorV6wp6Tca7UEtvinSuEswnA5Ph9qNKEwUYAG6HfSUxwJoVMmgA8v2QBPTtU3mjCrFF1ur",
  "key37": "4vLuxPkxDHH9gGpPDrcCVVsHv1DbHgu54dAiWjeK8XwiLtpx4cQHXapoZQWeTpLwDwZTb65rWkavajHVGzqXXemp",
  "key38": "gEewAkvFj6pNRMEy9TVjpds52teKo2vyiLqn5g81Zx97SoEchsoqikxfBx6PFC6BhVRRAB7PX1Y3DyzmNyxvdxt"
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
