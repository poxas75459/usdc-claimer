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
    "3Zt76eBZf9dDY3wYAbijJ29tVg71ZsnC2rwzHdQvamnBUwK88vQoayWKEEsfjpMeQGpADkuF9VGjWp89MyLfJuRe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vXYyw21WKkzTxNKocEMsUeQv8jBBtEdckW223edTXDhVYVtpU22wAE2AQsLFqD1nWaLEgmNtFxPn1KvSeXitjr1",
  "key1": "qn1JGb4k7d2x31SVntcf3WoqgbjVXsTnKVSwvxMMemkWfHW7nSMwNS1oUuj4tpcx5uTnSyrqYw3jDqnLj4b78Ww",
  "key2": "3cx6hqZRWwyP8dEDfh1HrjJuot7M51KJmnw39LxZnDMQppWwG2FFZVwzKrfkVSEjJ276h3ZF9AYgE5kzLayg2fUT",
  "key3": "2dAbnipaeXCYTjHeAqvM3HVJxDaUL6z9QSFneQVZrGkuDydkPpdFFXj74S81dz3SKdg5curFQW8QKp3bYuqLNuvf",
  "key4": "4PsBRMazC6xWpvQAWsGN1G6Jj2wpznodUrhzEvthEbbxBhnkuVi6RJm2avxsfifK4gJvKCTGYV5vv2CYM1s3YmWt",
  "key5": "2kaviZBPwUyghdhwD5rNe9CRGW3vM8ZYH7kBZWxqrDHk6f6JQorpQE56SdejD6nV8WK2XcT8hGAZLDkVbfW8xeuT",
  "key6": "2gtWfxH55HRtUoFkVAQrd3H4SPVpnnwt2zkMM7BoeEGKSi4ynzTwRnCYmyiVjC5f3jBYXawMe8N1XC1jSaY98LSs",
  "key7": "56aXsQAhoa8S55hhrUrCqsEJ1FBknctxqbfCaPm5DupubB33TuFvuJtjnojXwKxyRRSGVVBq8yQCG9HedjTb4ebG",
  "key8": "5pwYpZSyG6zSrKnJQB166Y13ZaL49mK7NzFhWMmtfCJ2F8j8sFfscneffKxSgsxC9MrhAybq2ZR2x5ZuQush8SX",
  "key9": "2cARdhm5vego6vaJZeJjhWkNs2auAuk7Nd8ytKciapBBoQATjREDVCmgPMewKZ6gzXfPHXvkQ6sWA2uHKe5qZTdR",
  "key10": "YdD3SfNfRAkEdo3d2nHFvAVoymTf3YmaBipSh78xMdNu6yo45axxkcL1JBqxXYBMLYXCnWN1oeRega1zZZsHnpu",
  "key11": "Yuu4q6gvWSysAL8jwiBqEFQ142SeDNW8i16y3AV5v8vmhrm98nR5gg1etaYEVu8rTFp8ijx6Vr5nSHTB27HwGDD",
  "key12": "39NNg2dCcz5mAw6bDsqAX2EuveiWrNsrR98ztCjF91B8PjKQBhbXfVqV4PtgWEzrBXcUuuwWHdvQ6q4ZgRyMo6oR",
  "key13": "3Vi7dhcyGcZSYYKfChskZffWRGxGRsyaDqjJPfuRYM5NCY9u7YvjsMMAZMT2PZWrHDUud42LcegKL3MgDL6w3XYK",
  "key14": "38gzzcZAPSUw6tNQHaN5jvYc7P55ahz92B8yMCCyD12HECXcXfFVYfVuTaww5gZoCf1kLDX2kLLA7vKrSWcVfYwY",
  "key15": "52UV9PLrSepZowGQYZuJfAkkWKPHWbgEuAvxtzhuGMqWgbFRAYfMBJp9BTb8Y1YCx9WniWqun7zM3jAqDv7tMpve",
  "key16": "5uMAHgtdEU8Q9YwbotDgzDt4wNDMK18AgPELui7PkWXdvqkard2ougfpP8nKCtykMq6Qw4HmVvZ54Jpu81wH3yxY",
  "key17": "3e2f2ozxwBy4whBWujNUyrPt8ZK6fKwzDRtzknX7BPxwuLyXnvNQMxwZxCb1E21c8zEALeKVKcDXctdsDBWxgdrh",
  "key18": "2LxL3y363jhBrSB7DepBTXsJn1qLZgQHaMYRAVrmpTg1ZvPc9rdYTWSAuBBS1XV92NeCk1bXtkHaHcqrHSBszat4",
  "key19": "2k6kUVqBScD88fw3YPBR4PCmYiCoMZVQUX3FtC8tmP3VAaMmwEVjAVNdzq2LnFrUZWjv8Lx25CYUsDNHhZMcgZyc",
  "key20": "3QC9Asqg3V1ZAvGqQLjfFax9MGhWkJD9yyokwRj8vsUASoopdPyKLLaz8ahA8hfwVw3teHMiZFPupFKNj6Ad1kBX",
  "key21": "3zNDU2MSLKb3sU95Mb3FfK8HNgHdNDzu2BxatVFVa5dj4AoS1mDReSrA5rFtheh5oxdRB9pfmcw72ZkKZfstuba",
  "key22": "4kLjzF6GdMP44k2kt6J18LdN7uugCaXL8QRs68a7LDScGm3znmfSMCJdDEgVAbriujWCgPum9nRSG1LzKHEEbPGc",
  "key23": "2jKCTCknLuaaZvsYc1QWUi7yePTYWddHvSMCiBEvo1ycYzGkm4AZrvaztwkmm46zQeUBtnAjw5AdU4sPCk6LA2hp",
  "key24": "5RPk5xdA7E1J9QQMzFuZLjA5Gj4uAwU9PAMXrRECohRgEhueZYjcyHUHeMU5sTrwFvJjLLWViP89Wygw7L2yCX9h",
  "key25": "sGdEjjNLNYJCLyR3KjqcHDrnWu5Ln71rQFyZGtuVdHaCigrfgMtxioFwgG35MLsKm7RjMGPMj9tzAHJdKHK4nzW",
  "key26": "2FFP8LXLTJegZbLXGCYjrZx3ZQzuQvZvrwyjQqE2pnXp6jmtZiZjXBp4GyAJSTAiCGP2NujHJWftzbm6YFSmnaC7",
  "key27": "Qm2pWeGzkii7AVc3UbhobREVVyxfFHTbJSz9XmL4LpPFFyr1R2Js4TeURNVfcAvtUqxEGpGpJvyjdptg6CxrU7E",
  "key28": "2pmaKAKNr8fUV36zdzgtZ53rajp9HpMyy6CFBQgehbjCZMMmJcmr8n8dDaJdZhDqeaLpeTv8cUfgU848uw8hwTfy",
  "key29": "4Do4ZyNCwaK1i1wfKXZNmYexzzZ89W2xpHaFU7YLEYfxrHd1cqNQaEkLsRGnj9XUWAUBA1fHdCBTy3WjH5kKwTni",
  "key30": "tEhUeAFrWAfi3j2mtAkjZW322kSGyrp257x2nDiKvraGmeXzWfUiKbsAGgbB6d7sP4fLMpXfvtPg3C9Cgy42DC2",
  "key31": "4xuiXqNHjSpiqcKbwdsVv5JJ3g9P2T5bBvExx2X4G1Mx9u2ePRWzWWahuucvALeAvLxii7N2fVc83hRngZAMXCoj",
  "key32": "3AtkSpQVJ5FeA64VwXoW8XdvpAcm93v3P8MeaVafAX3WHUmegmyczBu89K3fJmD1Ne1f1YUZqxBzNMZPoAL92sRN",
  "key33": "ZngvQMQdrtJokMi5oysEv12ZLcHwqjZct6kxC6kuxLTsEpDFNyRZWBaRHQfneeLr2QMTYjQfk1rU1D6gbNkPW38",
  "key34": "4irfcwHag45i5duuE5WBd4aQQ9b3o6i2gxcQKmvmP7wHkf1rUGBErm8uiTkR7weeqAm5GWHfHcoYMw8xDLVPBRpS",
  "key35": "4etzSuneJTNoFfzCiF7G5KeiUdDd5n5eEseVPVYDCb5HMPrA2YnuAXrvhimw68ZzAaF353nQCBqQfu6PZiTNEkUo",
  "key36": "4zCjUvhxmbHv4tKWqTuqsW8YuHyeTZu86QyGExc23zV29dWn3wAHM7QtyPxrHBsHXkQ6jQQszi7ttftsa7t5nx1k",
  "key37": "26JmX68VZDnyYk6yZydQoYuRkuxYrkNXyiup8XdtWtuGv8NpZpipQMiX969kY4iYCVAh7kaENgG2XtUfnH9FY5aN",
  "key38": "62SUnemS1Lhivrv8iBMumyZxZYAb9bwm8YuAHMZURAHpjkyQMwycg9X9p7vG3j2jfd6QMM6ooQarARcpN8TyFKUh",
  "key39": "4FKTmNZHCa2PNpCtNNx5CspDzneCVrh15MAcvSoL6QsqGa3ZuMAbDuyNnZHgDw5yV1QfRQrKP6pTX1VLThTT6sth",
  "key40": "MgyKXp7riiSsSV9AwmiH4RoPLD34GjauNqgwcAFBZRauHANWrvgVYWg3nnJ1APQrtqmtJ96xY9TaVsekRTc2KHW",
  "key41": "3xdRjMFmE4ReeocU9AY5LBSg5u1GAT5tUnD6PhFugp2scd5ZG74m7cPo2CWoA54ZWMFqUkaMxs4mXSHq5jDf4mEj",
  "key42": "5WG5jy6CD1wsa19fctR2ACCwDqo9ndSGJ3Pz25SC6qvJEpao388SyU37MWvSr9LyM2Gxf3opRV2i5CxmSwuRdFyY",
  "key43": "4tzBE1Uqnu8nmX5HMB43NZ4wW27FuYyWTXeX11PD5SXKBtcGeBkvPLqb3AxhThFWsa3oyLw3NjzN7brbG9ggWwhw",
  "key44": "2TikdQkTiaabjDat3ZxoumxV74UwE7MzoosiKp9fBngaaxeZjEEDU61QVnL6Cuqk8JidCB1axHzfoMr3cu8pKULd",
  "key45": "4X4tH32DNTLnC5yXZfkJaDQEdDKQvyHV2tyEXZ4X4Q8JbBK33fBgJhT6JaoPKWWjtdv41bBVo6HkuzFmwvKamHG8",
  "key46": "Mw5TTZQekvjUhgvXzAtJU82aTe4SZCwWoSmKSBYAvYvPMs1qpWCNeiV5pyALE8rmpxUHorzsi4qjkT6Yp44bWz2",
  "key47": "5wQNFXiiZAMcpS7acKnDaVcRLfpQf3eV9h4T8jDfaKYqWLpcVMzWVEeHAcZmdf5dtPcoTMvBh4aaxCmwGwf6aXFX",
  "key48": "5VqBELCt1rDBNiJeiadjx1Lg2SD2HNDNmNtrPRfHSybYDeWpLHTkMYnNLiPAmoLCGG15n2di2v6BtDD3fpt4sWLy",
  "key49": "3gkFxcE4cgAeaSMSD8R7wKfwWKNk53yar2Lw3JJsDzhxN1bXCdpSPAcKQDSDA9Qfa3Gin9vXvNMK8coeVgvj8Hjv"
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
