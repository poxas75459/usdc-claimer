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
    "5BQJW1GJL6huQYjTbdKLSNdHi3VH44rd3UiENB7bPVSiLCdPcpR1PnRYbRYLXEPNxyi6PPcPtoYynzxoawgXi74x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42LMXmYBpSpc6Eo79GMPcMpMQc5Wd914CGmzoUEC7szrK42B8fWEM8biv2A1wYpgRBcgcpG5Zs6oMEKcApi3WMHv",
  "key1": "u5gMtNeNkEMfoW8J4SJivrQ8qgd3UC1ww4th3ddSN5NKvk55bbq8qqnYQkHCS8FtUK6UjUXxWut7pdo7orJjnpd",
  "key2": "4VsJZ4wzgQ89ev2fB68Gva25sFn2PHrcLuRCbbHdC7iq4NjTPhuRxpkf7CGpCc4L4RvyGagDNVrbRRU7jnMJq1Z7",
  "key3": "2NpFGf8Xrs3NWdx6BD56hziTPYVL6J5WUsNCFpC9ErJ8PS6kda1sWG5AfctZcHebXSTEB4uukJdoh3Rw4UgMHhUP",
  "key4": "5t1f5dsWRdohV4GGNcZ1bFnXC8P3x4inLwyuu62G26X5tUakYQtntYpJ5syBhbpqFsRYsL8bZXriGDs92RWswrn9",
  "key5": "3BZkainUFpvqC36TxYwGG6a6jCKHQtVeWt1Q1fqpPPHJoj6sTY3QPYr7FroyuF5BDt3PZguJAMeBEHmUuAV7oCZc",
  "key6": "MDdBkYQSKFaiq2v1TGxFMzgX5hJzuMjmVn9e9a5UZN1x7gmEEqQbYefwWCaAZJJuDu7Y3DQoE8WSVpWFQjs1yZB",
  "key7": "3tm5pPEaBPfgU941D1718QKVrsYJtC5wQm5U1FfoxPYcdsppwTi9h7V6udU32BPNWT5uF8h5hR7LMASJ9joHQ82u",
  "key8": "5iqqZVLd4pGZL81CzAwkTu7nxXAbrgTPbowabF38wVSUSufojPNHdw9AuaiE5d4hsSDJe3mtyAuDxyNpMHeRqFqv",
  "key9": "62sxLXybjoSznpZuaKnis1jiGuCXJZB7PL4VPqpps7pPUu4BdCwjunx2zUcKxHcNm5b6h8WN8yJY66wKgpntae9E",
  "key10": "48imc8BgpaqHfNDkVjsHMDttSd166johPFJwFDbDB7Byn3f7J7ibCskzXVXFrxbYFFagriJSpx5WRU9iwAA5bqMQ",
  "key11": "2pDnyTdkmJWVx6ZZtsLJ4gChbdmEk3m3p3nSjTRSL2D7P6r6EX9QYrsoUALuqf7NMebT3Dwo1uy8pv5Q8B559eZX",
  "key12": "ZhGMHbE4jNrH5SXKvJWm5Vn3ipysPAMysFbydj37e6aUUcXG8GqPr76y36rx7AuQTndLoZcVW8sCTfXoogDdUVE",
  "key13": "286q5wRT6REegM9XwX1uawC47T8hhP9XPppGnttB6mjCpUCuLATZpttUECKKiPnnPboqxJbqh1JG2VpQGWojsNND",
  "key14": "aAC3na8C6RB6zdqfpJagKE2fntCsZDTXwcVKzCyWPLzUuLKFouUwLu9tmwegriVmhuHKczS5B2JgGC1EmZF9b3h",
  "key15": "4Nd58arKx3RvqQYfwBWiDuPBsXqtNxT9hNgxSW8qGJ1vqCYSj2bcd2pSWUuuxByZmhx6Eq6ZutbksFGye61efmmt",
  "key16": "5fzuUxYMbBKEEUZVS4GtdXt9CbqkYAkn5DFeYe7YVp8UcKHAyGgEJLYqBEvWRYoA6LgPH437S8VEgmk3Xmcnd9EY",
  "key17": "28igrbRrTG8P9cvKqCg2GPMFSGWYkgJ72mfV2DNuVap8yzusqPUpYG6dYNbABDnryp8BYdNDuQwQ3pRTLHcTdSuL",
  "key18": "3NzURgpmwqWkkna8BqvTF3CqpYDsiUp3RNxgLw5sTSCt7SPzbpouJBeF3GQwE9yGficEMgSkztVffmFmc6wiKqDb",
  "key19": "4ByuzP3yqQTUPYK51uTusx8QBCGGn1syjfNGWAEtjmrjzeUXJC5dQaMbQz7QwagoChrAWgt6ZcoJdeHRR4zszyxB",
  "key20": "31QuTcarrVgNg4E3xtwTk5V4svcshLuKhwHgukBf3QS3xRG4ydk4BS9duPKRAdcF6CiebU1jZcGpRdPi6pjHbpMh",
  "key21": "5NKrexFLUqzid3PnUgqFfNPhZBNSFoT49FMa8yTbDuayK69r8wuz1VePhF4DbMmaPPgw4mwEmwZAKNAMXJFa5yMy",
  "key22": "5or4fJZfgLFXHtUojowSEPDTce4fdYL1FXT41JsdJZ8Gc3Ajxnq8nBdRBwd82w8EV6ELCdd49RNoQr95ivAV7NBL",
  "key23": "4vZjt3DPrmHprcQKCH6CFHLMm6tVDYkXc6SJekUTThMZx2NDF31UbyZmPsUX6FWdySBHe2bzCCobunNmpEbMobFQ",
  "key24": "2FLC6nFQK1NhffcePMG272g4ZeENiw7SdvDpbPresHnXoNAivr6bAehPt7Vap94QwsPtpGgP7xk4BVE7XqsARnf8",
  "key25": "4AHtN9cZAy4PTkhE9YN8yjzn3wXiH3HwzRiH36qq2LQbK6u5fahv49aC1yCesDZAhUoi4MfxBho3w8gTzyaNLop8",
  "key26": "3hrLPwY74V3NDUx441MBLZ9m8UTyoGuGSWNE4mS5tSTNtcUECy7T1ZXHtSvWLtnTbWevTPatXLWsSbxbWnAvoUaE",
  "key27": "3iRkWJBEY35YVDvXfhiXajvRN9E8HC5R2MzraHkUMe3T1ZZ81cw1HwVGqv4NjmeMXFrWchsvWuYQfNDcxCP4qeux",
  "key28": "5fxaRZADGZyHfUzvvNjhNKCi1ckc4fA12g8KZ7esFC8NBznXUdH3oscCWeQJ5TimckWoWyyu3swPsxoAT5wA954X",
  "key29": "49ZnZVek4jLfVa1penFps8P24g4ZbAydcu96Ac87uVj578osprMhwxubhhPRq4wr3fT7vvJS2dmStSevnEhmruNU",
  "key30": "2KRepjRb4GMzJKYkCgxFbNenxELU39qZV73HP9pEUMesHo2FuCp7yeSuEu5XzNwTU4eJ1bwaSz5XTax7aBPK4UYS",
  "key31": "DgnQxMPMbQVdfvNuWbawP34RF44S4fL9JrWsb6fZRYuFpCrPGrWMaFCab4g4aU9KHXneW74SKBRybgBzhAkCa7i",
  "key32": "5BcV5r8MkukrvU5ETXrb5sEjkDTikunW8DF1t8VB6BhCErdKNYuzTB44XgHxppjQkotTRUEdWGSRjogZ9WU6Nhk",
  "key33": "3Z1iiTBD7vrkb2zq4GGVZVhmKWKLmJfHJkjCiN5GFu3iGAZjdsCgf13R6Yq7wgTiHdbybfPbtbHa4eGqTHcTCd3y",
  "key34": "4FfHKb3mmUnW1sFmg6eWVfs3F5Kdv1jeboRGXT7HJeg6khXtXxSjBzRLfYJVqTWtuUbUX2osvJBpVp5QveZ1ogfo",
  "key35": "2vHKk3mcdUAAv35rYKfoJbDQ3mXhfu7Nzo3nzo8q4sM8CCxSJ4GRy1zmZJxPxN7i7zBSEHWzY8KodeQRAGYoEFbh",
  "key36": "2CYpyKpJzkPbycKPAXSoYRv93vwsYQdSqgudFvFfzZfkZpBF9nszyCcUVXCuw6aa8ejyLxY63LJ8moN2UqjsARhc",
  "key37": "44yDvd9vr4WkCnaTtiaR1BtAScNMYKcitQ6Rter4CivZq2ZavbH3kR9ZyAa6XXi8tdPAg2utSWLgC8RsPLJmRxsu",
  "key38": "2s6tb9twas3PofAvkJaN4DDN227wZfn6ebK3snkfkMrUbT1YtnNB2VNm1yiGqLSvPaLCs57eKhYDPyorUTw3HroS",
  "key39": "4MCQr6ukBAFQ6331rfoMKAgtyPxqTEWPr15XUxhsqM4cCRqtmorVxfs85H5hMSPmZBoveb2Xegtne4Jw2om43fwe",
  "key40": "3LfSmX5LpXMmruAB5mRv4XSGXqm8LNL9fbyva3hfg76nYG1mLX6ZhpZN9hrsB6uqjGPYNp1FhaeAiTnNJGMPisqe"
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
