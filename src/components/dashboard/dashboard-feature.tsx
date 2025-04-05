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
    "4RCxkjaSkXKpK3U88Xs4PcJ26Xt4DEMJrMTSZkSi5b1rMWAungNS9kc2tso3DPAwZU7baSPnD8RE47uXbysZva51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K9eJS4oqx8qiPCf4ARt4spEh5e9GnYDK6zLGueNet54KuohLccBByfyVEGzzFVpZ8KXAaXAtCxNsYySgX25hnNz",
  "key1": "3p46EGx2JmBVBVtdvj7AzhMR1v95YA6SmZtrhZXt8fEMERay8G5F2xm9R9wLV9xnrFUdzDrPrR2JoHsiGFoSHFAo",
  "key2": "27LNMcxu9k82eiPdFWdzqoTrk96eQ5cWebJyrogfBhSn1Dg881DM2npPDGKZxnL3jvNbq2biKf2aeDGmmURytKkX",
  "key3": "2ZxTDspRKKvksa26CYZj3uC1dsF6m1VQc5WGz7Zxy4UpBLWaayeRta9vpfzTSFMsdx3u9KSPVQL5R7bNDPKbH1HJ",
  "key4": "5rMcQGPXNpN47qSUTwR5CHzVAQNNB965tXPptTT3ucvoq43XXn3rzZhbaKU7exqDsVnZKDNQofNdisLyGbs7VrXw",
  "key5": "3sHCskBjhvR5MADXwyxNNAYon8vMq7agSpnV4r8wXpN2nXM3rPsvuCRojBxDGcHpmG8KCR3sJkU2K62RQuK6r65P",
  "key6": "4wWznwZqH3x6ZRkczk6z3SkBgmV4xy1zPzTpJPt6CkKaeZdcKYHLcNwQ1MXHB2c9CEEdhHHsvwKsRU5LNnDuSdSD",
  "key7": "2xV5bzgELtZgb9qjQ8o8JiESDFVDr7a3XWYJsw8immLCRDg2KoxFzKYTqqRuchWmpMz7FEDVW86Lp8GjA6FhXVph",
  "key8": "kKYNyTojAbMf4WVDSoQqBgWvrPX9Z8Ex3PyDXPYDJQN2XktCFTG1AJ5enquK5rtKGNNMCVwjJ3wBiArMpFMJD9M",
  "key9": "5GsWsYFNhMayQS9RoXV13Fk7vGshyyYZuBnxsmFscfhssrmfxwoX2p6rhjXzQWmoBD1kTshgMeZyzaXA5vySCK1X",
  "key10": "3ndenYX2zEWDzF4STFvz7Ni2HJD95qVmvyB2UFYJn4nDWD6mnKRk3feKwm7jwZuosA36xALywYBriUtS1BFTSa9W",
  "key11": "3stBEts388RZXVqAcEnqoWnGcgjtfN78iWsuEgDZmucTRf1AYuvogMPCkDk86MTpTLNeqPhJtKKf4X2pZkQtK5RP",
  "key12": "5QbqEkPkhtpA9EUBFTkPKbrwxB4WHyaPFJMcvXRHLHKfk4QtbRy3iddVD35gnpJeRdZHiFvzLZ1yuNp4bgqP7Pjy",
  "key13": "5PTD7rV3GQseQqVYY96e3B8XYnD2w9cx1qy8rVs1nx3grN9Cp9iFzhQNv7W25d9z8Hcp36SGqtDfGRipKWrKL27p",
  "key14": "2vZ6Defifvq53nstvf6nEoMRcKJcMr2mDXTPjXXYSFQwqL1Pik1ZkoRTq3Q3jW8djmZ9VM1ZtFd8iAAVjmpNXq3U",
  "key15": "3Rtz53VeTo5FojughqRJyx7TJ9EDHjyv9K9W6Mpp4oLkRHpLjToftQjjzHxDjiTFFmaHBGZoMgqbQp8QnE6d1aP5",
  "key16": "JAhgLuD4J1CXUeqU44PZdwKmi28aQJftvSaS3cgG8JNmBci6xnMpSiuQPQcKacYNR8BMmJqEEfbXUTP4wZi4hhb",
  "key17": "61r5hcdyayEWYyV4iX6K5s8eoaxw5yfHXfNyEwwbjc6vTqtmv8gN776YD5TTgnejTkgswAzvsBnLiVQ8zRXWDdRV",
  "key18": "4ps8wZFvBCVZjXhfSbkG1gLWfF7i6FnuucgbLMuFqg9wU43n4TPu6ei8EsH9t79HM6DeknCuvuk1c9D6joth4d6T",
  "key19": "mgpBpvuCMVdLiP3T1jabbn5UVGMB4e765yuifMpmMyXWDpedo9JdfBWUrcitBxLt3LDdY5kxcgS55t3syKNSns5",
  "key20": "zxsxKuYond7Dc3EdGzoNKYzwkJoSV7LFCnof3z46k56k2isLT9tVULZFHaoevBWKZC3tnUsoRx4ykxhyfnFypi6",
  "key21": "pszpn9dRHqFdtkWxJueMpgrokawVBZBEQ3qFMUPjGamYo2ZZ9moDsBoGqVFhergHuCNTCZ9gc8ZhxiTfNHYwsgy",
  "key22": "zqrVfqVLyAgT74pgAWwHcZUGdGBx8Zgm2Mb2Y2RUjaMrE7g99Goy5n2hGuZuqPwo48XDKWDPTxJTzf4H6h5zZxp",
  "key23": "3kt2kD65ypHbKJZDiXoRZEsKh6nr3opC35zBGzSuyUdFbjHpS4v43UJ6LLxGQjNnCKKdD4g9pACtZAyDwC5D2Lis",
  "key24": "4twgJYv5Wv8BmxvFjyYvvdFPow5MqkXJm1MB36NdkjXsqiPfgPbGiN3t92mmkqHrT3XH1LfguQTtgwbPDbiWzNc",
  "key25": "5fhVWRd5EmFRJMDnX8NpEpX9YN8PK3vE3FWFSHt9Esiq11mNo5kypoafxJUa6cowB4pZgFfEYWbsj1efEUGwFkTj",
  "key26": "2WdsXvDur57Q6QSFPvuyELA5UjmYrvPUfMa9CRhsC58MiBWs5eS9arrtVApt7NQSmsjFdEcMXgQYgJKQfWHuQeje",
  "key27": "qfCe7eL8j1DqYWzqdp6wXMFDMxuagSNai5Y3vM7u88KhBoPcMG4ePXKCvCnq3EYcgUa32w73djvQuyM6tM8zRnM",
  "key28": "43HJBsFHt5Rz9zVcR3W8xDZo8cVg6qfDMALd2QexGiGfYb6NHTfKfSGc3k1n5zkZDUerkh2eQwYJLqCZPebnWeRT",
  "key29": "5rmGkRKy2Exnq9ooy7ZHPF9T3REaENEsPc1pat9nBHPdChkLYTSXcAEjUBVqDn5jaNmempbNjnmjrP3UsNTnLAie",
  "key30": "5JguDxXEHXcAizBxghDURuPfjHpWkdVgPk3mofBQTAQuKUH3wdgwS5fTFLsEaVepTJxUVZ9S8xnTjJctpCdCq1Sp",
  "key31": "4Prfx9mwzMkhzWc5ioK1uViKBSktbiszecw68bugYvMxedRF1g8wunuoCSQdyP6UgKcVoC8cTUc3v2X4s9cH4Ppo",
  "key32": "47shJRxGKMYt23nzqyMRQ2LCDdAYALN4uWpfsgHdxqPzzkEy4whvg97Za31n7Qni4thcABU9ZzzZiGFDqK5WkNFs",
  "key33": "4FMM22rK6pUzggff6TsFJmV3XUguF2JY3RxaonojqougNAYTmGaRXioosZCqe81G8bCpRsb5bgFxp4Sz9euSeqb2",
  "key34": "U4y2hUEhkqbqKsXRtBUgm8M8TqV99yabtdnyNTCUAqZUX2j4n7jrG6WffhqMoGDMpcwTancnULYiikmLWTuYqMo",
  "key35": "HGUBoHK1tvmvUcjbL4U14E3ubxwo6ouasxL4xNfBdPmqKM6gqNhar75qomzujazwbH9nJHMAa6pyMt6ZyWnLXdo",
  "key36": "qUCtYvhsNv5TRvv2bRAjpAuLyWeEdyTWx2xYU2bX4tSK5L11z6oT3qaKGz4Dki4GovcqH2bjveHn6vtRNMptz6U",
  "key37": "4zNTAbQyRS7LLzoYyJX2xxAH2CfevUCxo3tWsWekGTNaXExv1ByGFooxjR4pra17EZeK8NwJrfFYdy67FTq39Nbh",
  "key38": "24mpVRzUwazJo1GJanW2icRoyXN2ro56BsejZqdL3PjYXUbg99mca2CMZ8evuv75VZa8YtXKp7uNaw1Jbm9M1mK4",
  "key39": "3uU1pv5579UeV8mFfGRngQcuP7ZXdTAbYJTrNFWM5r8JT9hsA2whK5nGWcn7wqd155duhhmmk7Gtnf5CMWi2ZamQ",
  "key40": "XcQ9bgd4TGzunhxDd6yv79mUtp2YxNq4e8wLPY6CiFXni5JVLpRdwtUX45rCfSEpd1bY4o1NjC5rnkWPRNatjVE",
  "key41": "4wEm4aCaFNUJjG8gXJTJ5nEeXw3oYxjnnWGc6shdS2mGNiHTH3zpqt8aHBCGRbcqQ7CERHzhD9UYtwtJeHCmrpyC"
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
