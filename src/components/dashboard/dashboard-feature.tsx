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
    "4D3UomqqzkkeBsiR6Zf7tqHp6V4y4wrvjKB6VmYMDE6QzmCXHcLasmAxFGuvSQDVfbNiGELkqFMoviH4bnP5Pu3P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HiDSWjiXogSPmC9VDCX28PprKHW2wMAYHLPtc5anQaKhCXa2o2g7xS27Nk95eBo34nJGtM9AATBMezT1tobttAU",
  "key1": "3jRqtm1wcg78nafXM9RVUap4q2zYguzXGYc2Jz7zPMFunVBYWKQf15NvT5QocWRQHgTXMbmdptForMJSgNpHLFv9",
  "key2": "ZodHkfGKz8yoA2ZDAN6ZpeVvRfHkAZCsXeDEi4Fd6SpAduFNRgraQGLuoHpvn3xb3ZVo61BL7EkmS3vJJQitnt7",
  "key3": "2K6S9RSQfrWXgqRqAAUWPa7MHuLvAN5AaM7hqMfCU8ts7tdCgE71GAqfwQ4PgCzxioV2Zs5dZ7cQ56F813rzYiz",
  "key4": "qaXjvNnLTegrsUZnwJUNz64eRiT3aTBiamuicoMqKxvYRytpaSwPpz1zqXvfiKCf31Y2kVUFZ1SfofUs1UVMK3u",
  "key5": "rBsFNGJvaErhWz1YraTwirNKwggh6eTfdwsCzwPtsxqw6wPRDtNMEWsic3DpscXLyJjdV71UpLQXyJAV82ogBE2",
  "key6": "uNskiymXXZriFbdN5NpcgHb7LwLDaDbLr7N2AZsEDE7qPh7onPjF4ZXPXPdb1SwZYfXKfJ8qLdTp4hc3ozepGL1",
  "key7": "4pD8Qj36DcTV9j7pGCKTM8JQUFFLQWBt6ywPC4o6vC2JrBhGV7QfQHRpntXAjQtwoL2ZKTWWEU9hu9NuRUHtDMXd",
  "key8": "4ZR6UMHrCD31oBopcZS5nHtJfV7StbYhFqfYAg7QY8koffuLKKG3oser2dTrwSB6aL6xFqrDTuRhK9n2qYEE395n",
  "key9": "2WzmBUy4hWowbtzBcJ1Ct8wgAckABMWBe2keBbWShPdPd6TQEqVSiK5j87SBumKYNf4nSGwsfePyfdHGBFDtz9fq",
  "key10": "2RikegnoMCKEysQCrDpeYL1Bv1WqtaeWqF6phmwwFbDyHBtUbKPsyjYBwvFUZDDFcqGX5BgXRJkaac1v5nFTNweR",
  "key11": "4ewAN5aqPLDQk18WS5R5jVL2NgeGkYv6VobueFGvqt72kpPc5N3HND2G1XGk4D3pLdzgyDFEpaqyT2WBeCeFn8EK",
  "key12": "33NSrdLTQXVK7LAnmEKqw69EoRfNpg9tApoyS5R7GChh2M3NNVA5VnQxgqY4HaiuVtDcLbvJtcqMVqS23Vw5iRfQ",
  "key13": "4aoH6rwuiowHYdJkfFNW4aX95vrabcnd5rd8cgt3kPLX7FyN66ey4nRBeDT7cdXoJLjAf3DGXEvsQ2pqeGhDC4co",
  "key14": "prbkBv2DBCgkyrxTMMY3PCqRzHGgCbWDin7kkfyWuhzwPFhwYeFBsqKGWH6oBAKr1ytiUfyFM3nxNgrXaNuzg8B",
  "key15": "2RdbJU1w7S3iZzp8soPdygkmp3nrMCpNmr581j8QuckUt7sigdTJHwXckziCXBKZBxu4Fh5KZtJkJbat43xfCCYg",
  "key16": "43bJuxv4FdCxFTE6ttGkBTXUk4TLeUzBwJJFCFJxa7KbKWd7ZSM4cC3nbSGqSqnVNHkhiDenuwqXtvm1wPAxLrAY",
  "key17": "54n9JANYy8hPUGZSL66ED8WG6UfkwebYbnNGXLDpiDyxYXi5AVVs35x1oGCSDo6Qk8QM8jaSHW2zWXgdq1zr34q8",
  "key18": "3pwaVZcEwu9mKMHCCbNvjTGPUazdFvpB6fHYVgKfFMpzj175HpbJoZ1djPpJrRoxBvTuuTx6Thc195ht77dTTJhw",
  "key19": "91jqFV4mFrinwYWrPbUUZvy2miJd1Qsu4TZTiajVmBsQC4dVBq1VSUDpsivov6kt6nm7AzMzMUUGJVXeCfbkjmT",
  "key20": "3gAHLysxEVjQsw9uFJC7gR8292Vww8nUcHKjEMFKhSwUyohoDMELxj3ptRajZttJRFBC4VCKPF2G18VPioLykgUu",
  "key21": "ssbfy3u1T2meuABLG7qxajSzwwmCw1Uuw29hjsTBMfoGdbYP5PPKxsxtB7avDdtcjoQrfLsGfyw9kiFwggN38Lp",
  "key22": "5Thwd2NQwZokCyemBp1YkwHiFC1Bw5oGkLopc7cXLLtTVi8FHT6xDnoJanDmnoF1P2CkZGKk3dqvEucUT9CzLiJ2",
  "key23": "eFgPV5pyo1rbSjvj661KxhPJ1SaA8e9LAw4fbAFx3hBKaqzgtAuxJzReo4BhCC8QNiDD5Qkkpeh1gjLNvUzhTtH",
  "key24": "4fyZDgoc9TMByQSeNWzE8Zx6rgW1WAw8fxACoNvfUFWPZ1rSM2poU5ediWufWR4vtCqfEYFFMmeCddXgno2SvAYp",
  "key25": "2MDj8xYTHUkzf25EWj9jsvfQ6WMV7Uq4H93Jy5yRpwv7VySEErGHx6usTuw4PAQJUNrCViyK7pZSFThrBi7u5vNQ",
  "key26": "4A2C7TtcYsnbVfUkuy6UtuN9JLMaQzaj8HorAArDRFBRriXyC7DPAkrhKpQm3Tzpr2R8F27GG6ZDuRBYMr795GFX",
  "key27": "3pXghCDFWqjvMKnLCLgJRuZApYJfJMbhHGSMsqZ9b9Exdx43B4obhoeRvmVKB6zPgtrQoKN9Hn5iX2nUFL79ySoG"
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
