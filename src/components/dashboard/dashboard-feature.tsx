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
    "5uBkwUhMBjkt6Wt3g4TyMCKsX999BqrSrvFNtHTmQ2WDJGSC8ScZiH77sPKxFxNqu8YgSwauTd4kcejzEw1NcXb4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23Mp13AfaJM8rJpbQ5UgzMCnwV78YmxepThiK8sGYgSiAREsryysx1VccbbCDatH6Spom3pTvpdsNBQLvZjo77oj",
  "key1": "4uSscq1ifUHMKuD55Q22sVeRBLH1FwLa1w8nc5pTQQdRtPmq3ZkUPk5oyJkSKhhaPL7nUFBqEP1Nu7fEqX523pHF",
  "key2": "2cqK2soU5tBsi4Y4kHToBhhFQffnxczaBUCjCRZMtDYq7U2WjxAZtJmGNL4BrnswFQ39hf7RkscWSXLL5wC8SwrU",
  "key3": "31UnRpv2i1SGb1AVkQpUfYWxKmN1AhZkzxhRrZW13iKCoT5bVZR5ukvZWobwSUHc1GqyojGuGpP5zzTdgVSS4pRy",
  "key4": "V7ZQzEo31LjxbMfXDWYXhfBGnrFr7xzMD1TshcUuWarAtKSbCVYupG8XxY8fXkFGePVZDAkUfD848d5XBCs4dRh",
  "key5": "5ZeAyaR5UYTpyQchugrKMVANBPdNiFHDSUoprFJmupjai3kJwzPn8o9Apj5dM6gKzGPoR5Y87Vzs5metU1DQXNeL",
  "key6": "XoFSDQieLLh63PXnjQPvTe1RFBS8mBELU25bFRtFMrokBAjBiA3tk3Qwe2emYoiDCij8ftLitnFGaMfgw3zdtMJ",
  "key7": "3tvQXeFsuUjZJdhjopAu1RWdCNWGFyKz32QP8T4Xq5R2rESfznaZiduordHokXaKYirawFRML2v6z7rX1TChVoEZ",
  "key8": "45pvP9P7u6yv55PBfafG9p124LCJW8ZaQtDCofhLhs3dvL1k4E89f3QY6qZzJnTUyifUizJMF7mbRhC6SBNZ4hEM",
  "key9": "5ZWo5nXnimNqR9mCCZGjexEWf1gHsvLPqRm8hMenUmakFrQEb1hJDS54EBLSZWUFDsP4mphBV6jPmyAB9Zr9QrMB",
  "key10": "4m2mFG7P5U1aUC9G8XH7e4fKRDAoUBgCV5yXZ3cyJyHvhhDrAfMVXd4ADK22ULDCjqvQzoNC24jwTNqcAuFrDnjj",
  "key11": "3A2MJzBCV4HCpsfn1BzFLLWD32Mkn1UBaUgWmUTsGGMoQQ2KjSJYXcLtX7bBgqcDAPhBqddxjECyuQMmPD4MVLF",
  "key12": "35XLB3G4F7HDFXtZFsaxRAgyX2nxsSAsBxwn3hqu7JEQWJFdrsLgYFT1gThhsazGSL7CRhn5W4rezRG3pAyuHzmF",
  "key13": "qgjhoDHEbLczz2Bwz1j4x2Nq5qQX9jG5BCmMpBqp9Fzz33gy2Usrx2EAqjUqfwuBRbErb1AwdjFGmnfdbqNZBTu",
  "key14": "3tzdDZS6nNYRmzW4HeDhF4oLuboycqdzmWY5DLkmaPSpcfYZuxMMfn1frWgqqkKPKrZqdXohoBJEvTJbrGoUAJvw",
  "key15": "4z1Gi9GFibe3phwRuWzjb7ByGYDHeAPEXzWt5kMNyuqVr3NktSaGmH8W9Re2KcMvihLSmKhJcArUGmgH22zEVzTM",
  "key16": "5te9oJn7mkN7zUp8iyhB5em6NehHonbHK12i1TViiEKpyYUb875Kmh2vVSGko11D9Vrcs1KkF5TZSkimbN5uRhuS",
  "key17": "5wrb6hKTQpfVLBu9qQUH2nTXryyGQtjPfQ7rpNCehcdFofFo4kDy3ZuS24jNcJJi2i6c2LKj4C5KZwP4d6aNpfCK",
  "key18": "3zcwbsZonUNMpaFopPBSkgMQZGyychxfaUpxyzVsa7y5gn3gtXqE9efN4hmBfPigzy22bXTXRGLFktLw9GHkfyb2",
  "key19": "4GKkEhnPNRZVHJynjtRmwJqXM6EtU5MpkwbXoMpembukbaXiBUCNEtcugV6NBLg95VRzY681Py4BiVkDWj6rZzbr",
  "key20": "36TiC1qroh9E7ta8NwXotorANx114BWwBLKws1F7KY8kyJ92NRYLmyqLnBHN8q9vEthGYfFQffEn73rNL8xW2zhZ",
  "key21": "2UaoAB8CQDNSSBd1Jyt7MjLXzygzp87w4nkpEd6Re1NAAcsCY6tGds5gY5JFBMeKwREoLX3HNXhJG8wD9UbteTAw",
  "key22": "5ALzbaG1M3ZHWQ3FA1nGP8aQcfQHgVsvjieqa9cAfEL8cFJbMAFd6cpixs2PXjZurn5DeYppHdj1yFTmHDQGG9U7",
  "key23": "3tQghqpBqKRemskXJeSZpUDuL1Pb9yYXBGazKTDVzuWA4XSmDzwQBZQAPzETe5s5Fp5fYdyh1e4KYZ1Y62xGtXz2",
  "key24": "2npRTXuGAERFi5uz3RLQhroajZdYQwKoJZQiYqET8fSENbySvnQyV6Va129G5Pavk7MRPMqfaJ2ctxGKC2k2Pffa",
  "key25": "3JQt46GuGhEef3eHTeV8STatnyw4Lwz356i3jfw22V2f5j3L7aYUPBngMzbwMuz2z5y3QXhtPZs7QXNTXZNVzu4s",
  "key26": "3zmSKetpMDCGa9zmxwxrbmys37jbEHacDkUXdMBWwgunuKJ4mktyZZaDii8PN5MG7n9gt4fz8oAYgyUvvxLCNgdH",
  "key27": "3S7rZSyfxLH7p4LAmpqdzvQbNzwWFqPB5t4muB5Vw1Js1FZrqoJ9CSBn9eRchZfL1Dc16ZJt7oPnshHgLX1oCPdy",
  "key28": "42eDSwMuv6778CLFFtm4MxsJHqtBrm27j73im3Vgfew6TxinzxYTx7PfSYR6EGVgdFJJXp4JgYry22E3vbbbmCXS",
  "key29": "5rmoqU8yhhH6Uzmf7muky6XUpYLDBpdMYszTzqvj7FhhWRCXMmw6Qd2bk3d3VX7U2r67JbLCT7Wm3EpDJSes3u2G",
  "key30": "32fz7cZYBY9SFH5AA5cumXh2PiXx3hThz9rK34teouHDKNBRuhYBPzMFUWXmSoNVotdKtoAd1jMiUhYwcHkb3FXL",
  "key31": "31mYrbLY8zzNM4X14HXaovK4yfmnchjzRaDgLJeuV13woZ75PLAcDMzxgzeYoDpZRbvHFEviCkK9M7KETT7RWnXa",
  "key32": "5Q1ViVhGGtg8dqXJk4SYvU47hhGwpaMA3KiTZWt4Rj9XQg5yvYGe5Yw6vAn7SvsTEn9Z1vuBdk91Kbx595DhqAEK",
  "key33": "2KCBNY4HGKqmvChKSKxwvZmJGqyZpo3zdCfP5fCs3TLbg5DyMsrJZSEhJzteLUDSQ2qUNf38fPRwLWvRrZuZvQX9",
  "key34": "H792aGJUqCSHmpRcCC4h6xGrhM6rfuAMSQxEqqitCsQeyRUHD1E8aNphMv3wWsKH8726nHUP3nVegcjXhWRZKz4",
  "key35": "4UeQ9Yugfbeoj2qJemtjGUwp6BqVjKUbBGMGkRLaFoiXFHomKx7utUxK9c8vzuJ7mSeSoXPoe3Gqfd2jeYADk6rN",
  "key36": "4Q13NaxQejJwJ9JAMsfaygonC6J4oEmMn7CMpKuKYQ1wMEnCE8iqR2vxTkzF2JbYyFJo5FrbeXLqubwjpjGz86Wh"
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
