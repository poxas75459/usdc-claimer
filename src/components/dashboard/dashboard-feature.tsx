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
    "4z2on1MpSq7doDfsBJjCiqtPMgfb2QGatJ6S1wmFa6HhTEtfdBRWVKE5BvCU8PQ4CgAXYvnV88EaTHuxsZnLWHNm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SYvnh9nUJNAjtuLgpxWB5J1D3zU67brA8BEaD1gdNaF1nfEGrANXdqXMjsKoZfFXv1KzUzvKCarfUE2C2rkwCxk",
  "key1": "4U9bLumzngk3kvd2fh2jBqwv8mYRjst9FikV2qjy2PmJ4L5A1oCGVCdedmzC1ZjN56MJqzUQC7hsPrCsRUSSa7Mf",
  "key2": "5cizE1chhuFR63SvuqkD3qD633iRmkpMoA98n9wvBWr7oVmuWiG9bR8UuYQM18Z83pnEA9zR54ukPeUe2KKvqHvt",
  "key3": "4hHHpgnrFhc57saQMoRWACY3Tjuj1xqByUJ8uy51afCfANfCVfx2L8cZkPCkXniyULLi9ftFEs1z2ZdoTiBXcZCH",
  "key4": "5uA4kVH8AcrdLptMxshFqeHD4HTZdjShWm3PLc8grAmfPWqpuHMs1Gi7yZ7A7sAxzMVCsH47Ps6tXkWBMqhHnTUX",
  "key5": "51yMb9W65XHjVQw8f7q2rLhHCjvpjUnU2bJ5mqeXyowQyzqR36d2AVDkpypEfTMDvAcKYX6KHWvpeS6km5HyLNXn",
  "key6": "pXqqrsBeo8SizYFFjdfKac4mHL8eceKLEGBkycLuLk2s9BXtvJpvCpKKMrq5aKMt62bwLkT7yhnLY8WzetV3C6F",
  "key7": "65cCuDvmib4MnK5LGeZaEAox8VrKMo1bmcu8B3bQvCZg8UEq7gu5LzYKuwVGmPyN3DHxU7utDq1t5REMHSh85Pub",
  "key8": "4wGjdMDCGXkR6S5SxAuBpygZArKyQ2ZUxsDwdGdkW6RaUvyWZE7drWPQnVRH5othyg4qvrkhQXdNdCyeHFbu4ZJ1",
  "key9": "LdiXDzWtKwn3KM6smKV41JdgFF68zrbwELkAV8A8s41jdVRePhT2FSfa4xg3vVUopbksSw7NnA5Pxbp9o94CP8M",
  "key10": "38ZhnSev44vGCDBUpF8xqGUnnn97caVt73GBKcQQ98XjFGijFWU2p3DFBaNCERnXX6WCgW9kTJCmri8TYSj8Et73",
  "key11": "3qLh1NsQX7BwLkCGQrm4utjPcm7aziMZWVoMVJ3CEBy7K1HvEeYXd3RCJFy5fwm5po2ue2HPmd7VRGgf5hjUVo3q",
  "key12": "52rDrxheZrbE6HDf5HCFEjsowPFdDLKezKYKmyofX1pVYhP5FTB4tN8WtT1zmmqRhoM5FbSequhADP8jrB9HeLQL",
  "key13": "3X3Q9Wz8q3HHKfi5eRnWht7EqCpQ5zw4r9RC4HsA9v3b4cf41kpda7ZMHcWLegaehNrnKezx2igdKf6fjpHXbKYC",
  "key14": "5b4UVPh9C9xkEc5mjwBa1kN9rKBhDZ4bV5x4w863tDmGudWckJwPWnss8PSJn3a3J6zynL4SsKsWee9ihSNoGxD1",
  "key15": "4ZHJQc7nJQ47AWUxfUdE3R72pXL3ktDggbNiZgPjK3GhF98DujhptmLHfn2nHTL24NtcAvkah23WXbiNVWnzsbmA",
  "key16": "DYQMtGA2m3MFtZ8kQqFHg2RGeNLNMorUPsfzsreJ8MvTVBYJ1mZGQTZYAYqzsX2HCUHhUu6z5VXL1gYLrhh84eK",
  "key17": "4wkg4F1a2WboQ2Sbsyz96jRN39ZFZCEHgu7oyzXbSerpSxozzMzEfrWo4nCNNPNFd9jkeWAsk6aJ4AJfeysoDzDd",
  "key18": "uu6kd4cnxkeQZsRg1HNG5wG3sbg6GWycFyLYB7XitXDhZ1L8ss1Ne8Zse82qNwAeNCsDvi8NPeho19e4ZNGobV3",
  "key19": "31Ksj5cBUHBJNGVY5JwmNNoANqGjhKPFkdf1CzfBUbz99ZfyKaDoUub65mVhiXgYTmfft5eELy5SZSFDpApPgNk2",
  "key20": "4Rk8xf6oyzQstnEnrGBr7pSrQRYqMjhNNy9jVRrR2tZdTqpNTXZgBmfk9cYJUKWxuyyEYKatdMNV6kY83PVfyJvC",
  "key21": "5458hj65iyxZuezER5hX1a2DLNw6APLsjUVS4pkpcBF115c9EsxsRU3Tjv4XetM6chEo3oW183mXa9Z6HUWkwPVE",
  "key22": "5DtM6T2W9Nop1kfnZNdpaWPoo5JrRfEkpewsoj8L1wPDy5GZGzhYYXDDtaDiC35ShuUVUvt5d5kGEumek7SBiLt6",
  "key23": "3qsEFRJRxuHMhAzYF2FB6z2SG6mgt3Qm8dxK9HTy7TK81YafVFfQERmeHA2vs8MWLgS5xubxkX31iGh4Gjpms5Tc",
  "key24": "3M5biwKaNEijPSwwinvJRUHPkFwugnoiRV9EPtn59MX58g3ujwSmHC4NkWQ2n2QrceDW3uFT9wbEpRd8n9ngTBdW",
  "key25": "2aSBATiikXN1xH9zMRbqCBYQLq2KXWowADxJcuChE7e6Km7ioYU5d1EioinyrHYdPHEX2FzbbFR3m9J2VVfsgP5A",
  "key26": "5gWioTHWHiV4comBaA5p54xVSzfsYdJduEztJFVA59JAezVbooiEWWeR652q4bLieH8zHFdbzfc27vXbkBHcQbg7",
  "key27": "2a18im3oHVDNvHJ6eiNnMw6enCGarkNBXfuMeB2suA2pHrVCiyAbxnoJHbHUWoWnFiR7wGdX6rtnhUW9j3LKDetq",
  "key28": "YM5cMWECAoh6zecJ7hnevR4NB8mNdc3Ex2oX2Hk84nxmsg4vBLJ9HBnLCdSs6q4ExJPhKeSXTEWjgquWpbSSxAV"
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
