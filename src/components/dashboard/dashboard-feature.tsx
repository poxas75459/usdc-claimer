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
    "4XXSrYyoNexZ3w2RvMhR7eRGxkBmFFCtqQd8duy1edF1pfiNkwmPGgC552DAziwUmNDGJcs2FADrLLXEQyj1zf4r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vu98DfHzLDpncJaBCuVThMQWt9au547mTFMm8t14xnitPMygxapYcaKR4Ld2xMSEDevipfhrRCeXNcUJRUho3wJ",
  "key1": "2pAjoZHfKVVEGnEJbPKiVSkMiPnGB3UMQnADWpqguAz3Un83KnAgSKGeJqMQCowUScxYcQ5PGDtbm8uNzht962or",
  "key2": "4CsHRifWop4AFfCRpCGBK1oS6XH3iK22WSpFZwZCrZf54WKxhDLobTxGxTt61gsHJcApkPKC1y5VUsWqhfGXS2Bp",
  "key3": "2zCFGqRt9UffzZi4cuT1LXuq146fgcE7Fy9VFgtcL3PQVZoNZBgQFKKNK2JRmb3oRwYL1o13J8TbUohfzzPz1Xzt",
  "key4": "5iJYoRABQ2ZMC8SDjmgVWuiHJbeBSoYrgYAxkNEEu6fRfmiZrjeuFCGDPxTaewwhTRC6cPsVhNAFEidy4hniGuTQ",
  "key5": "5Wirxk5pYQ1vCPc1jTgfJpnBewHqYeMxHw3F9uh9BchqCfduhHeDQSeoX3rVmhMEkzKAAxijVdEBUnaT8W1Q8qtJ",
  "key6": "4zooNtrvs497VLBWH6om6BEhha3E4nn6FMJYDz7Th1WFmxrsD8i1xtHy4821Bo9KHfnm31SFfvx7kngD5V9dj8m3",
  "key7": "5y58UwMo3BkQhSUmQxMBj1y2xzhuLT9zsRLrFncQs9nqwJJeowEoXbU4QPGWjiaiDvnReEYNz1jGt89SZpfF9u3f",
  "key8": "2Qp1CUFc4ZttaDZiddGJVSgpWzy8GRKdpevSx6C44ULVdxsvcEGmMAaCtjXF9wWRETViY6hEvUGdPMnWQAAw7qec",
  "key9": "2SH5GWGcSqWwQRe2tAZyadqcxoFNGaY7pHAjsuMAx7rKJoy7CBrs2b1G8XQsoDYCkxD2kURVStHVMpEKUnqnVCt9",
  "key10": "5wqLAy8XYLKjX3SYjmDs3AyoREpXyMYo9xBntJPSBwELaAKNsqeVKbbTNghWu1wWVwURFwzrFA98zGhUxR6nJsH4",
  "key11": "3LMKFq3Vxe9JQXVxQxiZBUXiHaHwkUsBAuWCDXwPyHMuF2DxppWRBf57XF8Eytt9cAfTPaPmcua6aZQhgvMNHniN",
  "key12": "4uXyJAbsXPxQ7LgjhZyv7xg9d7LjdMroS8beY9f6cQZNNcGxDq3NAmsx1oY871xjvP8GBtnsK5io4Bv1dJDucacT",
  "key13": "4RGLr8RjmuX4LYXwufT4kn48GpqDKrBLrF29HfVfrQ5QAyjfrKvEL9bNEDNtsKF8xvdiiXUGM1LHk75Yx3SRKqFM",
  "key14": "32LdeEmTq9QkX6K8QrYjdnHDJftwSGkxvKEMoLWBSUrEWPCjPynrdAad1U9tPwDnEVSaBFc7sDd5DmqF4gemVMVA",
  "key15": "5eMzetEDoM9PtaSHrv4NpgALcxasJxHsHJRBhKnn7EePFneAzcN4CovvwAGamkxutAQbCnMtvx1jegMC5zdw42gK",
  "key16": "2hEKXuNzjYdhcZWSZDEJvRumJqK45sAz5DTCsnVew94giyc6KeLKR26nKusdvAHekPwuT3hqB9nDjHh987xDTn4b",
  "key17": "5hn6Ada8XhezDFSKGY4pZVjfeuZ3VV7XPo9bV3XqKNEBbrJEnjut2dyfLYW2aR17bJBeosYTFyGT2pWEDnRAo5ke",
  "key18": "5hKngwh74v53pNmRfjTaRDW8VGVzPmws57kNjXhDE9KkqyGz6twB5WJPTtqHLGiAyqzooox43XKCGXppMQAX1q2F",
  "key19": "51RWtrW6TekLztGtV7b4CfXk8ZDV7HhAtZjYYgG4gFgZFG2pv9JHE2GLuNafRrTfjPDs1XK5e1brvSEd9xbErQM5",
  "key20": "mshPrdpbc8vHC3yWUFN4KeYD5yu5EM4qzgmMnBx1GZmMrDiL7Xr35CMpUsvv1FK9mbMbEPefAqkRrBfcNUaE1a9",
  "key21": "23ZYaWAppR6ai5gaWpyHdgQSQQ7UmbfVmSZMpnoRRQH2Za7yMGZJdHvpGfvDSrhjGWZrzcdVEtUpXvUDYFfX9yar",
  "key22": "2CudPx4SrMw31XyLj3SK1UM7oN9tGswWYSTP2GmvXLQPPW85HrMNCm8PTmBp1Ew1Wg3QDVrgdxgKaMwemGvK95nD",
  "key23": "1beLtUmzxrRwHVLU4QD4AuaLbF2avdfguehFo2miM3PMo9LTbSczzwHogmD6ynnWE1U2X3tBaiqjutXtozRf3Wq",
  "key24": "34j2ujL7FsKnkE1zQQAo3vFiHBZXuymb1YVCVSyQCVNkJ37BUk77NwxTvAhC9NfMdQ3TTS3LcWGfX5QtmfMCgxH",
  "key25": "4W7fWr5ZqQKZW122A8iV7AQifqREUWWtACzhf4UKf7ebJiLE8AbDZfLkizZvfj86VUwSaC4uiSFTncqCFihnjzAp",
  "key26": "37qZGRfehGF8Ljbex8bAHAxmePexWR5R5aUiJWAa5XgRZD9NZ894UYMY4BwWEf7TMunwRe5jj35QuGnZSn3wo8gB",
  "key27": "37cLSjuTjGoFzt7W8bLZ8tKJccu9NjnNyKhNcziQLvwCpgzscMD7Vq3RHbhPVKLTNoMSHGcT8eLqbt1rqfR3ku7A",
  "key28": "5pA48YPDCcWPcByRXYkVghRXkpKPhnDLRuNKeyFxDPVaALjNCNVczQpTh57baXFErNMBuP1pRf1U5MDJMgjzU91P",
  "key29": "4X7MGiERgU8YArf8SJXHevJJKdF8ucc5oDyCfyqVWH5fpiCBX12TeF93qQeFJewwERjM6n8tUwno6QoUYBg8uehR",
  "key30": "3Fz1ETEc4F96ZwFNbiJNMKujbmCNqSbsE9S2FyfZbAf6f3jeTouhJx8CQJyrbjwUDSFHdQ7Mr1jKMymYvZXcor6A",
  "key31": "4z3fDSywQL7vmZ8HdgGeCU3rYdHzDkAV95xDsQCrKxxDpGfJPF3YhSipe1qRMTSN9MddPUoKBR2xPJMvL9UJm2tH"
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
