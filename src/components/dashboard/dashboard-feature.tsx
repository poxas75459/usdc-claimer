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
    "3xga1goKeV14rPmJA3zqda33XA3V5nrypSNxS3376suYmdWTwFQs1YmSdxp97G3B6DA2NXLPHSsozqYVh6gZ9nwm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Go6YEvjE5yK2CVnBdkqrdYMC2qFqFbFQ7pgKPWhp2j1DgdNc8FgAWTfnfpV77ZrEHcf47RMDZ7x8QzgnLfh1WGg",
  "key1": "21uPdx7HmW8i4jx7iETGuhF79oZhTh7NuspwmkA2L1FSSsPNdDfeDAw413xcXQ61r2S15mN5T5kjv5AoaQUSt7wU",
  "key2": "4grJWGZTRyvCABd48xiq1dUNNaRbjyF7heyZhnYxKRVuwBzHrBm8PRHjFF8VdyaS5W5yXzNGWAgdA7h5BQP3KgKA",
  "key3": "YmQt4AorWARacf1Wupd9yrRaVJSvfvn9kELUShyZCUf6QaFTRfRFnLjoh2P5EryhuW44RxV2pd4Z4uKhtvWvnkn",
  "key4": "ADQ5GBEUXyNvCNC43nHe9enfrtHo8X22dcF7AkiwdRXVzqAeCt65vhwJEc2wpBbGfK71XToG97cqsDXxBazLkFo",
  "key5": "25LmtxAJiikKaRZouJoH5MAMPp3ztWX6WDJe74gnZFvpuv4jS5VFHce19fBU8CPcahskD2fUCLwmZpu5SvGoN9iw",
  "key6": "D31vNoYS2i3n2EKj96qZxnCJpU4cEK64ts5m3G1gADi3YcXvpzw7QLMHM99zwUM9FjvKVnVdSW93inABCrC2M3P",
  "key7": "1WmrM5f6hZwNUdAR2RYT8aoxTGFJ4HY7ed6NebruUJTH9pQZgy2PQiJTMs7XcJvuJNwryBxXW1hexPcK84NXtHF",
  "key8": "45C4AbPbncGk2DDsDcX2Yq2jDVCv5MFpA3U7fr4PMFyX3BQvrTJihj5qFW2hARVjfSTHaak43tAtdnx3RBuQ3VzZ",
  "key9": "4JNEyevbbKzikujuxU2m56J4HgYamrMnJWXuppn3BHFWqmFA444MHtuH4wAx6NsGrHCdnkShf5kbCR9UFhUMTy38",
  "key10": "3dUeaD4JA2S2EeBPEN8mdXMKNw5vyxehjEMUgffvnUs5rPmWB71ek7PbpUWy1oKGcndm55Z2vJ7y8v3iz8gJePMu",
  "key11": "3K3SVT1GcYasEK5LQZjYkM5jFnoHcGvwTXtk4KHRq3BpqbxVrhsn8jsr3Aucjpd1BGTExytoqpWMXm8iPPBEYFJ3",
  "key12": "5rKEkLBsbY35347qejcGUNzsZBA59EcrpxRcq7iH4fQULfyVFGfxWfkgmNEpX8juH8kmkpD5Dr8ujsNDcX4SvTEK",
  "key13": "4B45Ah7jXww3wTbKF8Fdhd7LyqoixkqXKYPhvivpWdgp4hKYt2qBVp4446iUmQipDECJh8CXcaHaA1ogLPpZu3W",
  "key14": "5veb8idH9KwcqU4dTs72BnFcAoYUyQd2BBB3phboztDHRQJvMwJMSRhk8s3QA6ACHw5SQruFfFNu88wYHoh3ccAm",
  "key15": "42nYc78pkr8hZmNAzqDGZaqseSCmCJqQoy7uCdCDDy73LUiRMpQfaqFqcpNxzXtuzHU2ayAQDbvf6mVKpMtS4fdH",
  "key16": "5u7x3V915UwFYK6zD2AaHZpPsQ56VMnxz2dvwVT3Sk1DReBqu12WSMakN8HpVBLRYE1updp8HGfeRLmBJUA9HJPY",
  "key17": "3C2nKV5J9GKTEKU6fEGvx6PiGsv42C6MY822TjgYHScbtc3dPnQUvxLDcTtEa8Rdu4sjXLDWcD4fGhiqcy9oBRdM",
  "key18": "5UXVFNTwVmK2GMQeSwFx6Fw51xankmvvepLsWdmfwG2CmUNZYAcUSxDaui3WXWcA7qSLdXUX8yifGYqUoTMkrxBD",
  "key19": "4P2yk7uRiUCXFVX2gw48rpQPNE3Y7vN31i84AHRg36ECv8FRJSchJtqcfybGdxCfmomM3KDWPTeNxbEf6mBuV6X9",
  "key20": "57uZhd4HsNx8gfSMVEyqn7B7uF1b52N7NeL5VssDiGubRx4mYLJvSgnoTuc61E3b2pqZRyqrDRsyiFTVMG3tJD9x",
  "key21": "42kZSJAhaSUG3U9ELiSkK6vpc3ov2YtCge3Z7Fot465Kh9y4BHiZ2FecsCBa8WddWjmjvEJ4sLBCyHMusSYc25jB",
  "key22": "57J1d96rtz3mjkoYscS7p22RVYqwNh9ZdCRcFxnZZGE1o5L4bh1X3xsQYHJLa3UQQiYoSDWRowbV3xRAp169GyuV",
  "key23": "3UaDqtcBuDgWCcqPo8s5ZfhyZYVXkaZ5BD9sjBdJsGCyFawKgSKbMiGi4uMRvSDCVNVBmByKTWz59HQbtcTqei3S",
  "key24": "3viNXMTnJkwTRgB1M3V8VazKED9L3LPWjQE1FxZd5u8S1JamNNSkgSfVQ1Dxkp28zUE3bSp4zzzySTh5Y4RL6msy",
  "key25": "3cMESivD5MnJ92HCZEyoPiSkvM8F2ubGxjU6ZjteiZEJJVDdGn9f8Tpb2snUvP2CbzLBMwzduy79yJy3NLT8yngb",
  "key26": "226m6DTrJHEfjgoa3sS9DSRGjrkrBUpXScpxTJuSs1aLXm4Xp5zppqeKevVxLatMEHvzKpn2ypaFprwmYtt9jYA6",
  "key27": "3MYJFmASvjDXkn9PqhVFiJ1CzmFkAFua8TDAukPND94UsLxFXXL3QY1v1V253swvgzsKgfURZQSYQmjhE4C5V7XT",
  "key28": "G7UrNuHzzPZXxuhS7JLiaRUKymvRJ6XBUWujheBraA24hpJLnec6jMbYAwxB5tvicuhduvJX8B8pV7TWZFFZSvQ",
  "key29": "23BQ5kqGZGxM7UUk7FE8msjrTdMgFW4VbaQqUEauZKeQre49cTap1d75cgZJ6RcmusLv8nATZYudUppB8Dw6an1d",
  "key30": "3Nm2xibFXcqG5vL7gTD7nfFiBJfWVG9ejKRKRbFtGjucr8h2RvzU87DfJjyXUDesuayYuuXKrS2WmDdgpeAmnJ1e",
  "key31": "2VYLeadtt219XwfQ1GLEwMKEL5TvmsjG1kwjpuxurZzd8b8VYHVrL6TWf5NxasEuTEcMHwfuRkuMrvEHdNh8koVE"
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
