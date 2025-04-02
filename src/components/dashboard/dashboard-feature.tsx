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
    "3rpDgywbxFixAx4kfXj48nxmC4Jzz74uTNfTn77K1T2BjUbPvJdv12BWrKXzanMfSToyQoiCp7AQcyHpJohmCGaU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iStRBBm1KL2X2dbok8QGYXmb8DPozLzKM4afHFLsEFuRvGcx1YufZxbQVjPRwfv5dQCww1M5STUixcCAwM1MeSM",
  "key1": "65qsrGzkdrF68BKEoyoywVjZRxSvXebgTgeDsX11SyhuLtJBnsQhkXBfwErYKZ5AR1P5dM5MEJudQYAG4GkSSXjC",
  "key2": "2nn2fesUP6ktHFemD4pLQztJh6MGjQwtUajFmbCQnvfjYp6BW9x8VSsJ1kYCqqXVFdmK62M5nrL99wsAUGfUnLvJ",
  "key3": "43773d2S2qm1PSpCesHYLpjVyN6RdYR1124jA4xB57WVkKRZMdR1ZndEesApoR1MxikXyfAaKyQ46WFHwesW81wY",
  "key4": "RaHsfPWjM2G6rYuQ3KMFujhpMt1W4G4Z8q4mXpsh7oLDfmMeecWbvJGQdoVHT7Ab4TugY9YE6XPR8yio72sAJq8",
  "key5": "5Gca521RtBXFbixHuqGRTMFSSeT5Z5CeiunG8g6Q4NyGZ6XdZp1pDnA2ofUDpaBTBP1gxL67U46z5mREFKLpXyuV",
  "key6": "DdFFkrZT2nRJyPBSRPh4JgKmifQSkAfXC29Duwtj5s44WyAHuWjv5mr4BygQ1HwVYnf5TV2eGqiK3ewkZmVEcx5",
  "key7": "45jy9zHuxT7mgQduUx5FW2YcH4YjFFtyTYQCNKiGM6tx8KEW9khVmQh7Wx1EH7sqfBT4n4dF6j2sS4Z7wRuQvRuF",
  "key8": "4htXuUynoh5QYG6ou67Vwz4W4BigtSEH7pywjc5A7xVefkx4NSYYfAX3cBMhw8StDbqMgLJTtb5RdYqiNVEmaWGf",
  "key9": "3uV4YnfRhm3631E4JdPkJrhdWC5SEHmRVDPUu4pKpYGCGbUs3k1ceygF2kCkvPRNLRDuCbx5xenScz67kapb8pcP",
  "key10": "5SmXxq1taWvkyFVrbFCm7sFEopxDpDiSYTcRsvMXKoJS1rvPSnUQkanHCjf6Dx5gqq2UNPvHt1q1DU19YX3RSpia",
  "key11": "gyPm6zY6SKPcGLkxVi1bXRER1uQPUzJSAFnpgejwz8nUAG94sKVcaqY7jpDwm4mreHPU4cKD3XMXoeLRs31ME3T",
  "key12": "2uqoKKYbz1KYQNHNC3DXoj4QDCEg1XPYLbspXfbxcN4A5xAeycL7KkobgFrdAMX2JiKQ7S3tGX8Yh8dEvQR3XJ5G",
  "key13": "3PMuZCuVYx25Q5wJ5kArVnfat2wAAaW9NKunKphHspxCg9G2EFyj82rmRFLvu5CjxdTasJga3fPspY1pqP7wCtGT",
  "key14": "55KFLD4YM2P9Vi1w1ZKq3PERP5GqcQdmQ5tLJnqjySrDzqHoqEf2tzgep9znuDshbgeJ9Exat2dceqLTzZLQqc1Z",
  "key15": "3NcdDC5EeNPvBHFN1dTXv3k3KyR9d3zhrbfVgtbPrRJyafz1o8gtU7eEKHQXkDYmY9QK8ZWUbexUyc2nntWRQkuK",
  "key16": "3n9vmLXyhjWv1T6UczmsamdoiwwUQn9EoHtasGoW2BKHvngC2Z5JEqN2niCGtCN3dNbRxgLnRZWnEcTAMYrbS8kV",
  "key17": "4vqp8ttQRZCdGrJyMfSMag9LP5EDf3Mn9bLjK2LQkeXEFVUf67ruKzkqKBnoKKWkSuyfoN8soMYKPyQXfHM4LHT4",
  "key18": "Yu2Fe8Ye9rRTzwv1kW9Wktu9tboiwQEgg7j4o7rDLvUnSQENmbGNFtvNYapEpNZ8c9nQCXirKkaWyyFh82wgHqw",
  "key19": "3vHDNEkUsoLpg8d7P3xVbKq6FdZ9N7eqUiqEoFDvWZsbe6kMRpJihavq4SGtrpP7rnrDxMsS864zWtEENGuw7Kcm",
  "key20": "3SYawnAVnDbHTpvEhk5GrxRsspkvz2gV19PpAJ2ScPEdZq3dEY5owceLfvTmeLoUek9NgbwgnCo9E58FFJhnNL24",
  "key21": "2xT8NqiiLWr8GjSwr4TQyGfayTwAEg1gK7Uy8mjm1HBmuWTDQZNNw1XjcN99rQGHAodcrafHyiSJzfFnqPYuWrjC",
  "key22": "DwWkKga7X4gVGWuCooV95Xj1GK4Q7VzxGaP224hGgHEeL3vgYWquS2hhZGtiySxfEpDdiBroyTh2zSi6To2RNRv",
  "key23": "5ZfPExQMP6sARoYG789agyafZs96LfmUtq9fyJLn2hSVfcc35GhnVPb7UYcDWiqfUDhMQawDxMnZEFyAZoGJXpA7",
  "key24": "64mvACB9ruvmZqfaH8oFsvukPPRucgeXksC5EMQXmeGsy8R8pLRJpfxS8jbe8GVMDzDonstr7TbzgY1RCnZoafkH",
  "key25": "4YKDDXzzvHYzZEZcMJ6SstxSSiaGeyohRmy8xk2USkKCES8rLghLQy6JfwsewPU2wD1tpT45S1DWxpVe29RpxjrL",
  "key26": "xRXTGrpSDM2B1ZVvDEkQ14BeAxd2mSBerQwLNpcMp9xqVa2X27cQb39UPag6zWdS3jPFF67GaCvJA4AAbdufpCh",
  "key27": "YY2cwoszNKKxhi8GDKfVYyT9xr19qnwpGa8ughziHj7XNJm5NVdxyEePLeDZuFFtuLwDWZ1yNuHWpxKT6C9xMi2",
  "key28": "3X9SuWhknMXAgJFkEE7ZgzkPBJPfA8QXF7Y2Pg6tNwrs99gMcvdRKgKZYyp8dAR2RB8H6DkqLRqkBGsxNTGuDQw2",
  "key29": "5QV7w2myFTHVfSjhrUy3wSp44BYrKcMbHg2anQvDtrTqh9r91jys2xddsvuqZhhtFwLM8tmcYM8rqbfsDCg3D91V",
  "key30": "2u9etHM5DXRp275uk9JE61LLNkScDXVANpMh6UgNcho74WJGunyX4Vfivq1hyX7FH2BuvrSq8M9gT347Gc2gi6QZ",
  "key31": "XvyKkxzXVEjfTvzBCv4K3LiP9zXpEspwzVSpx9mePPJ7RHTj3VQReJkDkAYEKAdqWAUTQSKYCYgHYsNqunvkyEe",
  "key32": "4M7ZobQkusLe2TKWGtUg6rEaetwKDkqzBDhhDejwvwtdT1uWKo6AeFrSjNyi7rLby58zBBPLdFNd9NYmzJh6RwSD",
  "key33": "3yi212rG5Sn7kgfzH2YhEEta5Bqkr5a1s5AEHLHXg9fHzfVZsNhAQXnLvQQeM63eH5rZEkp4g5gX7sLmGmG5pdMj",
  "key34": "3XcYcreJQvBUXq9zUhDajFuMDRQZS3WvLYStaGv3z9LyRwwfmToRdn9NmYSWFzFejT1zszRMT1UKtBfp4RJWLByn",
  "key35": "3uRsPVNcma5tUe7B1HAk5iuHxSAKTQNdGxiNxpeTnqH5ZjtDVZFGUKmhcHwRqvKGK97m7yAQkMAtd8nLSAAZRhbe",
  "key36": "5VbNL5LdcUiZf5VaCDG5xRmDYPo9CxxiW37tC8WSZdKtAeximXmebXgyBpYW2XXrzYTTmAPyUJgepaXcZoWCE2Y9",
  "key37": "5jEFNDNVcsvSreZHWv1WAD8DA7FnKiVSmFpVWesYDEvzNCWujCfEJxGfNaAYy9KixNioXWuagAUggKv8vwDFsbPD",
  "key38": "2o3bLFbEk258t7GuqTJzuGWhxAR8rrnBzNaWdmXMrqXtYbfp5vFfeDHMztWHX1ZjMw59A1VwtSSpJrThJPbZ77z5",
  "key39": "25TZymtjDSsErA69RwGbRTUsmytZ7VcMKg6ejh6w3MTyHjo4v2cYPKZxofWc4rcb9jNoqZvJ1GxaKS5daHTDwN9V",
  "key40": "nAu4JENxp1vs21czPgtqAo3JcxoitNxmx6cMiowwuAhPTc2edpuA8wQUpAn4ygR1rZyDR6cHJJjHAkpZfbasRt9",
  "key41": "56a1hu5BcsPjYXaGku6fWUFdLgJAxNRHms85VPF1ep9TP1Jn2LVo5GYDibeTYme4yQWYh3FSJ9uAZgamnYaskG9E",
  "key42": "5HQQCWXQ6zPxjkb6jJuTQEULq54qpe9Miv3vCyZ3jY7ExeJgCHfUWcfpGSBFZvNmWJ2JpFvXUna9XmdhTMgwoWhf",
  "key43": "4b1vJJzNeyfoXhoVSE98dcphT348wQKAWQ2GSE824PJJDJ52xHoQiGibMS4UrErRf3jBo361ok7pD3WHwxVrY5ro"
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
