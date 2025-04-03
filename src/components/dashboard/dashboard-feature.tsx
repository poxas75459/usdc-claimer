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
    "4PjKDkqSkEDQ8tFFV6CiH87dMvJHPqTP2tN99jJynqkzQBw89YnWkAgf4VRto2EpymcaVg4nsoSJXJirNbhp18dN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1T5GN97u9BpWrnqEVUiAkfgCjDwM1fSSw5kRjVY16rBPQt3eXCBcQiQRL5GbdiPtYFFhiqMexQNpXcHjpqw98dF",
  "key1": "5p2WHgvVTc19mqJ8vGUk9Cw7sS7cCXTwQRccd3dND7UXyEa2Uw31YJkeqohqmNa1tWY13R9J5Qhn3ayVhA5SNvx5",
  "key2": "3NbmevahvDtnnNgBxDXpnnrBN6GYpuZMuonYoAhiFnLxs3V9RPYaaB7sL8C1EE5uYKE5MZY3AWCk3KGiF6Me1wsd",
  "key3": "4Gg3udtpaCeVvwXAzd4p1n6hunv7YkRXjYAmG5QEiNWcGv6GmzaDVaQKZzwNbr7AqiFEdMApmRiinc1bNQzBXxvC",
  "key4": "5HJR4VMVxG1xDpnWicbR6chG5L56CsKYsLLGMBBBJsvTK46BmX1PEFZsbLDFQhua74Wz2Sx6w132EitEYUicXu3m",
  "key5": "35YKnefA3EhvCFsxcNx9F85okmDBCS3VafWa9ti5CXMSAshGjRW3FWgp64jtvjCNmE5CMN852MQeBZZwJGERhnQK",
  "key6": "4T3KEiVYHETkZLD2K5AA6XAJcE4p5wcY7KMGw58QVAX7JFsueUys8tzpDNXaFtx3m3nMUcGw4HmFj8uEBFoEEUgs",
  "key7": "fziSLP7qCMJhXzfzM72u2drzyonHGTBUMx8mF7bo9Q4cce6PtZvqKawUKNR2c1TzwPfXF4uGVMgukLjFnaGADCA",
  "key8": "2mDhpk4kbhPZnvDH3QquUhi9ZLnYtktxebAYb69Lpxme1eWQ8p8XY6z7iFmLDhCtT1Keq2JuVp2BCJsUN8Y8VnEY",
  "key9": "2vc1t3Mfs2FxVjVkH127FTZrn1zgSBRkwZyD8kEbw6DSctaobuyKDNWgw3enibcETTQG71DiwDazjJrfgjTY7fGx",
  "key10": "3PHKi5ZHXVnLjFF7NPQshG4v8WjqedHi1WQL93ptBa2C3Ev49rYButdCZ1yx1qtBE3etnAuTk3tp1yjyJf8gG9um",
  "key11": "3Bjt558CsYHbZvgvtcrWUV5u5PVQMMWiQyn8jPcuo1eL2e6atvpLSeU6QiRX2yRtFqFLGBWpkbMiCaG8YDMvz9aN",
  "key12": "2LvkkGJXKPsaVMEb2p6HCPnZWLxDyKW6k8aKXt7wmaYxeTf6FcXnMT9agkvuAsa1341uV81nLuL41CrEmeTRkjGj",
  "key13": "2t3hNNK9SBrT6iELY7xvGW2i57upFTe3FLcnsY3WgnkumcvKutgKSG4f7GHLBYHBK7sE3oS8Ac54iXgFz3f2MT9T",
  "key14": "5gc2m4FVvCbQs6tEpLqonsJJkkB7a4jfKSFTsQVgTzVuy1hQeBeGwor9vPPYBuXKo9DBt3hEtX2Lga48cCCY5nPP",
  "key15": "2PRkty2T9gqB9m3iiXR6Ec7wvqG3gVVKU7PsYKBvfAVShD5ndnzZmT2hKTxNrFQuSSPsWiekBFFDE9zoNiGVr7yx",
  "key16": "2LfuJJvytjvw4Qzfhj7TnEfK7wDbzvvB7jWtYP7xvk4v76amzYCj6hjHewqdcgqmKtKRyEdE1qWnePkG69kU511f",
  "key17": "54RbMn4C4FLAiJrd7ZtER9UE2PR6n67rvyiHSpvXimCYgKhafwxz2qtnkn3BBvz9xMJcrehsuLfYBA1G1UcMELzv",
  "key18": "2ADc2yrSpQNmqVBGDjL2YU66Wstg8NDJietjjs2adgw55Vu5z6bdTRan1jMDGNt6HGQfHdvGFzwdJ5nd7Qcem2G5",
  "key19": "2MywacaUpmxRHpiA7udWXL1Ejc4dB4uRJdvpk6Q3H2xUVtuB9ppJ7j3RCWzmzx1BcnwkwhZRkiSHeZoRwmmvh6uh",
  "key20": "3EgVfUg3GzdsNhStDRFkakMHK1Xt3rpey8R82gzyEQ8eUo2t7qw71WA5SHejjMGgT9jDMkNpYD9sqeE6GKcVQsev",
  "key21": "4HwR5qd6tYceDQixWURzTK7ebxrhVTpXQSWcdVZ5ZTUa9zd8bZppM5STqcBt4fdJ8oDnFr4rePNh2pb9QES3TMAw",
  "key22": "3dskVMXqCHwtWztPDUuSKtexiiJhaHXVYwY2MkyWcLcHH8NQs3LH7qc2FsjU7JbE7pFUgcC8w7McVVZEp1p332gj",
  "key23": "3ifSrjMAUheFwRqzuaJaAsTwxYdzh4t4YADs3zZvSE1U6C7rbkmjUjtcprdVpKoz94Mwgz8c7YduiVubcphhMtj6",
  "key24": "5ApESLrvsoDoQ1a63Kmj7UPdbwXdv5LbWh18sTRTnTRhXNh2cLBd9SRP6HZhdFRnjFPjjhsQrLyAihsmmSyTFtmw",
  "key25": "3DCTgZqtJqkzTTieHQbzxivWvUPqJeC8kGsbWUkBxqPPgyDnyivfZfVpdjE8rvsXTJbf3ou6E7NDdGLgUu9eP7wQ",
  "key26": "QUZjRzhi8CY9RPL4KX48ESXtnuRvjeKp8anRXdmoGHHd7PCi4LAZ9BDWGVrVx7Yo8dCM15WhZPBLNNcA1zS5zyG",
  "key27": "4hjGhpyFDHpXHUttdTbybz9bdoAYruzAb8o8ZNkh2h14CTmHs6asLo3gxzhas2KZWVmuNvAyr3UVGLNFNR9qiicu",
  "key28": "2pUtk8iqtWkhLdNspP4v4Tb1ZdzboyRirCxm61mjgBHrnvHFjVWBjJ14npEPfv1BZWkbYog8ikHH1PKA73rNV6AV",
  "key29": "42f35zfJpMPfvAiNvKp2kMxxJUcF6vNPUvtMCBYCTgLLkRWCmXM8vUTnbEKr3f93nQqwwFL9LHAxfwQCQXFVHvVs",
  "key30": "2FTcytrjFGFGNWAnniPubY49WM9t8QLfDGk7ZEwGxWF8sfLQRCUDs6xQimiWv6SKSMsqA4jzn4GLLJstXSNfvMcF",
  "key31": "2kMAxRyHVcKY1rzp36cYsn5oRuizY5HbKnNX9jhr5NNPQroiaRjo1LpNfECUgrRhqEXEmEd8z8UytaAJjH83aDBc",
  "key32": "5dRfByGpYo1YRT5tHxCdrRrJVEBro9vDUuWNf5ghm4norKSGg5xfRHPmN58rytfycDUNNcguHmNAWofvxqkH5EM",
  "key33": "4Q2W4ZVY1XjdfQ1MMzugaG6HbaP34Ygx4zfhQfPAUem5ntPUno5g8y5GPVP2Ruvd3vKvKGjPKmkD68qFNHboUDYD",
  "key34": "qbQqDjy3o2E7eacK3qnt12GHPSBpQA8QT7SbpVBX8QCyk7PpKTwjkU8oYwPjiPq7SGUPnpNWVzwrJnPPXm7FvAr",
  "key35": "43xV9g2FY8Dz6cDXwtqNwP2Fiv5qcsW3ZiLWVRK3MDjJ4tpeejsEvYMSypYFTTdCHeTzB2Zgmkq2cdDQ475XtGFS",
  "key36": "p295EiMQ7et8JouP5wXZGvhJSqYLnU7gg8xicTd5apaye44oSRvcgUYPDGLgBAz5BmijpED1oHuBXkmGVsx9TyM",
  "key37": "sw8r7gT8dX1RgKnyHAd2L8m8meRQkYWa3ZGdWMPhTD4Mp8n4CvVfr7W4ErynfXyeBLYq8FEMa4wrmZAwtvsyckJ",
  "key38": "45rMLvL4fYfTCPZLHGgTYMDygesPvX9ETzzugQYU4RTcEAnJHoov1f7FbguohS5po5TpAsBkavRy6xhdU9ZhHaZE",
  "key39": "5MTEuFB4SDYJksWKEB7XATb3rqgWE55PXmeMQruW9QjbQbsL69UzsbWsSYgRHcsMfVhKYDG7fHAb75pjgW9Hc3qZ",
  "key40": "WmV5i2YkVXA7UUWm2ZpqRJ6R8MFL6bpyUbUg4FvdGdqt8nVr64habW3kfoZfkBNcSY9LbdcBfELKVxn7EwC21CK",
  "key41": "2s7fEorWQJHSngPqnWo4XEYoNfSaCYftsynRnsJDnEg5a9zTHE1fKrHPkRtrcnZ5Lmrko7rApwVmaaa2dZApFguo",
  "key42": "V1krF5bnkxeJAbFGG3zh8ucxU816EdhoUJZ4M3nVFtRn88MF77jMBZoTbUkj7PQUBHGnT4HFwSvksKFkH64RsEi",
  "key43": "5rQT4sauq4pfU28UJJvFFXsEghwPFLYvM3CcH6WkgHMasC6UiuRoHMveDAYABpTuVv8HdsGstZ7Tobn3dSPxxYZi"
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
