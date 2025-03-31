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
    "3VgBRCg8xQ8afdm8feGJMoXoEGKLkYCJNhneYeHThjsKUWTAEk37cpsMUBpmE28dLHSNRXiSXypvAg4B3V5ZhdU3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PDPv2ShTuXcR73uNTtfegMfY3jNEhY49QrWsgsCUtnYA4d2HaXRzeXg8eqQpWk9J32DmNoWth8CWCkwoNchxqhs",
  "key1": "38UZsvdTvQV9HMnbs5Ej2YjEfToTbnq59UMYD7rCEHFxwYFX1HjX8yXJH5sJmrZWzZxV152rCbb4xr6LivuDDdR",
  "key2": "6FPX1smHKTKHCVrmfgbniWyhX9yc66FZ8hEmoaCMAKpxnYB31DPdKCfnS6mzcAhiuDBjBrs5mHrnmDcL5iMb356",
  "key3": "iJ9AoVbHmk3iMMfGKGhzMG4JSLzCn3ZWnjLmEtGDNQCpihrkPKXb2o6JkiUdmYNrGCKwcfMcgfG14ttacMUfEXv",
  "key4": "Eo9PbsuKjnJtay6D9xkQe5NFzXhsYv8Mb4VpfyhKB4Lq9fY68tLVy2foAZnK928PJB9qbncRSmhqaEMKLxqEH3f",
  "key5": "2PMRvD76HwKkCMJ4TgAeC1vhA7FHAx2TXfhaYeMHxhPXawYUUzJ6343xZ6EhHVr4Cm152astAagYQTJtqLVg1WGi",
  "key6": "2UThSFahwaszJ2o2xzLChsLbe35z3rvk7TQ9xhzcr8MyiaedKmnBjhKDn4zyX6g7ZLWhs8Mh48d2eqP6KBwe1eso",
  "key7": "6tPGHTZFWWkSmoZ8VaKKaXRxREAuPbkuCxjCAsdaJYnckHaEPF6GU59YPgWhHFDYT3iAj2FBCDbhsSFGDqb9Atz",
  "key8": "2Sh2VyVohNNuwbHqvZ5sUJdgvpwFzFosaBeHdEVCgubmmA17SBh7gduMPTxNTGEkiPAGqiezAUD1AnJDJZ1WZbsw",
  "key9": "65doTarXVsLWFyZuEMXfLMr42vCdFTFjwvkmALfKEKpeE2ez36nMcL6MNXJBXfRMRsqcqotGjRL5c1FBuAPBGJAb",
  "key10": "zNQQsD4Fvx5WxD9nVqyMZ14QUxNRdqThPbeSqMVUq5KoFAFncpNiS4tQzWW3KRFFEqcqXjns4Lpc9nmLQsc8Ty1",
  "key11": "2b2oJYyre4aG6uUqsRAxkB4t9Vd5yNBeiEupRUaFdTy2NANikuNSR64sYzPNDADcTZ9WwgA9tcnwQxPG3YTHGgFU",
  "key12": "5jFFVJyL3CUcCEdX7D6NJHWee6tJPufEEGbwUYLbc1HhbU7cRAuwpWkL9yAY8FrVgHt4S55ojnreJzEso7f9qcmb",
  "key13": "29iHyfXCvX3vHYSBKmdD84iY54HkTcBAMzQZEJjkzQaxiVuTB4vJvMwU6kxs8HR8HjYbFJbpGCJ2TnGD9Tht9xmp",
  "key14": "ZTDzZTgghc6XHHknsAC2tR2NRqdhZVJypiQ2p2H7UFshipGjozB1E8dVF2BHSeVvbRdcxf9LKTcGSNyccxAubHn",
  "key15": "5FemkrvtVtdCHNWejo3nPgyXPRBE4rFf5kEmgXWV9kEmuuyaoFftBszbu71F1psSLS8akJz8RhGsJzetVBL4EuHj",
  "key16": "3wnv5edTfWQKDmJbqTARq7yubRMqtMZ1MfZYmPJrsYd3PvUqibmxi4hfbmV9Hx5dAyjpoBt5GEtjydKncMDDkhfz",
  "key17": "dXtdf1yDZgJ8JNfDT119jemFUc2oMsd5V5GsCWfwgCt43Gk6EKnotqjt4kkNuo5jhJ6oqTU2ahPxgTjEjkK97tV",
  "key18": "cxE7HuxXXEJm83ykMkwQFgfdWhYt3fxrvxksDbrsxpsrEbgCX76zXv2H6VGETUjEGPnraBiy3QbqQp2VJuY7r7T",
  "key19": "4W6AAhbxuzjj8WPmmk4pggTBznn1DL4mQsvWwx7BsbyGTeexWNdZWi8Bmar8vPYCvBv7XuFxuKd9ZSiwy2cxPTP1",
  "key20": "2HrA7Y1i6iWJG6vHVjFozscCR8SRM9j2nSVjUyD2e3TAenqu5vGWiU83QG7KhZ6ePBN27WgTKVGJogEJijPowNsq",
  "key21": "2acHs7K9zaDhexRqqoaQhdoDSvDRYePshjLkKnR8UewHtxDpQQNyYqSJb2ZKCFA5sTKEzeS21thDkKYfUGjcPDaX",
  "key22": "64pPnb81aCu2n3MJ5DRwTLxwPz2wDK1tercDbv5EyafruxJY4kRcM96CrqTrgyw1NsET4N4cAMLZj7c8GnPQfK4x",
  "key23": "Vk241hkDQUsMktcDkYiJgdgfk1RX16n61p17Sd4MoK8AUwmjWGLA6RZAQ9Rj2za1dECGS9zJALtPEYqvememyHa",
  "key24": "2zJeVjVyaueH25tzj2kzQZiPgNTMixqXa7xgvrBvqja8PhkSaeb5BvyTTs5eqqywcxw7uqrCXeCrEwq2YCg7Hjk1",
  "key25": "5Vp9rkNG8qpB2e2D1v7Wt3yQzagjS6he2fEvqegX6yhHYpoPJHzFEnE5fSiK3KqD3JFJU8gFUqYTLJM8fA4TaWVD",
  "key26": "5zBXr1f2FN8yDE8kcqSPkaaiFsmV46apLjWifD37uReC36679W8sgQ3LBHqbFpJyNPRVAopMqnMHZ7jP5BNFsw2T",
  "key27": "4fEufdapjCjSDKiRtakHqqhxigUKdiBTgRPYRtC4x95VKoozupR28CGprGHiTAjGSDTpaEavVbXTzDAbhthHLhpx",
  "key28": "381tVfPueg9PLEfRqEaAQzH7zpLvitUV5Hg3Yun7uJo5LBbV1uy87NbBRZV5D15CXDmimgWgkdEV51SA14nfXS1z",
  "key29": "4xSo6Dgn2JxRZasFM4uEBgusHyx2XZPCX3mFibzcQnb9YG8USTHLpdWyi6qLYC5YamHc6UxyV5jseC3JXZXE3EeG",
  "key30": "29i6exX4snvRHSWCyj6Td5mb6gQrnLhpzRwyTR6aJcf9szTRneeTzpmzwJnGkCzbE9kacSXMBCYLCVcjeNs7AiRc",
  "key31": "5PrDgDDt3wZkXhJg1Vyzx4c3tDcqViLDcNzxzMR8mFiT6mTm6ruY5Bd1W34PExzg92LVEcAbPnJeSPAQH5XY3egE",
  "key32": "5EevN1aY9YNf5ShmmoVKSg9QbSucodsPmPh7DXm33xtSWw7LQdpgfjjFk5S6WikqAXDRKy6SCLtZYixz44T2iy7j",
  "key33": "5Vbs3ppe76qPwFa4w7RJM7JLXRuJncgpYbvQdMFUv1u7nTmuhbXXpcW2ckpg8e25Ni7Hprn2SHKGFHqPsrW9zhbu",
  "key34": "25cxVYHmTe6PKSjB6eirogeTWjW2Q4tfBGMjGqG9Kn2hjH4ykkfC12JBGVnNenTG2NZyGDNPUFfgZfqVYeCmzpX7",
  "key35": "vebn4wvvD9U6RYiQjsN69eDvj3YuW6DGU35jKRbhFgji3gRSyvuKCnqwCWjmC2Fi18HGAaBUtgAoY9H2SEmEHZb",
  "key36": "2UaEZZJYnVSoSCB9XEgr5a6ozEQGP8d4vFy77N9BTPt7gKCQWwskvRrXUb78cLmtALgwMh4KpNP4FMeHKKCeLR2q",
  "key37": "32d8dDs64K52MNS1jgY1RGGeNDkTFPYJsY16v9ixTmgQt7rCUCP4sTGYLr88ZYF71jWo33f7M8pzd3KbiUHsPJPo",
  "key38": "iXHoT23D9VwbSc4S7xdf3Usix34kDJARjpnvSAw4Xa72riUF55SchzA5rVDpm2PDHXQ49FGFNA5aFHDA4wLbUaf",
  "key39": "4uqhn9Q7Bec4ac1iPnmm9ztdHi6M3Afj2TJS1s4TAvwNp558kMaCkuno1PrsKfCSP86KchBTSqJrJiEYXfXKi7Y3"
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
