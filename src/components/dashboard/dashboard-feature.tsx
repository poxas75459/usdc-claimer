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
    "31jfUZ8vrcpPtksXsTop4upZoM2E7SLZGgeXH6UZMC1ozh4xD882fLKbBYPntXcUrhr4eo5jZfh3cFXqyPHGQC14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "512kmfZp2fX8Mr6e3kPdQzHHgmqKdbJzGXPfXCTWqKktSzvkWQDp8mYpWS7aiwJMAMSJERLSbnXe3oLa8Na7U5aZ",
  "key1": "veZ47a7ZdFyMuDS14jbFwxEb4ZFjiXpTcnxejpVHu7nbGoHAAyCaoWddnnPnEuM4ccDzch82Ggaju6xFRGgEdUt",
  "key2": "3xciAniGRb22QfWF7fdNDuMJhG2KDHKeFjzGqqAWaBZ1s75LDvaTsszudjMFN2xY3iRozZadwmm4ZJBaxBu9oMbk",
  "key3": "3zefTVNv5BK3MMAk6N9k33eEB4WHd8Q9FjCtRuMoPZ4fDndDM3MxL4Tc1yGp1nnKtkKV5wd26WvUyR9TnHZFtpUa",
  "key4": "2b4tXLMpzfCqnRNYCJejtEa3m4kjpQnNJxXMqM5i38afEqxweUTbhtRJGPGryN7qbxSrADNW4GJy5UcwPJxv7WMz",
  "key5": "5xDV46yaZjGZnPZWHkz7f7SKe9F3SAVZPkW956qh15q1sZv7CwAnJU85afEeGKHhBecv2FQQ1GExPdNDcEuBBmFH",
  "key6": "3yedk6sLAwPmkhJviYvNFKt27MZCTKRatHqA1jfSvdARedEKo2kEc2RafVDzNWHpEHrd4QhWdsfYSac4X9yVv5Kf",
  "key7": "4jPHe4HeEkMFomkbgvFJJtxE1obqRZoVuFmcqR5KaDoMPqiERqS5BFT6w3yRARLW2CYeKfLHrkGNWHTjaWS3QLPw",
  "key8": "2NFPvGkkxhjdbewPhKGirvheBHYgoaKz1tUJEzcyG3ypGN1R2e1okw3QzNr88MWdyvtc6kFYoYVBBVZwbL7CVCPw",
  "key9": "VZwqLpSurNrZCsBP2ixTgnmwWjgxyKMU5Ph3rYShUfKrVhKoTf7gZHxNT7BGDDdMLoFyCmKj721iduCqqX5NLut",
  "key10": "4itkS7G4uDwoxyEHp5t1CrsZ3HgJc3HSFb2p4WCMikeSTT7bcVWE1dNeD51DSu6X5S7BdT54HuBmeTaCpnNv9fmB",
  "key11": "3dmxsYNwpSgJTG3QErQRauuUpsnsDHumqCM5PFPPzcw77spWzncdv4s69sAwwYaHsEsJyWPbSg1bFWx75w8hwrCR",
  "key12": "2VMEKjJcgwGL9vuAHro6rcdkMAZdcEsxrsTGRWZMjSYdMgpVp9PRMxgtKziGLCyV7Hw2QmF8uxxTuFNnsCKVEVTw",
  "key13": "3bjmWyJLK6EuT3BigeUTd3yRuUNWh2J7ZPDmEqmUbifysm3ckNmLf8Emfhk7cSWZ8DAHGWXmYiEvqMstvvw6rXNp",
  "key14": "P9tFfwpi4NrTeREc7CrA3YRNwV6sGWE9VzG2r9oosQSPiPcvUsd3VTx6DgUvypeyzQ4Wd6ss83tDDaGycHVne8u",
  "key15": "3jbYhbAPMiruZULADSH5e7wgUb8NdWXMT68xracL1RjTmKJd9QhYiEizTunYbXFsmrEdd3gorxpComDUYqPeoGLH",
  "key16": "2U4WY1aLc127RTUPY1ySdQgyhiVqYrqktY3KzW1W77tppuHKF2VhFWvANxSudUpzZPHub1MFpHyWGmA36rK8YPAA",
  "key17": "5ucBPk14TZPbYypEstvnYAB2Vr7Xb8jD9bkMqseci1xMKVNafJ2psp5XSkJ3vfjcNgwXBCYJkG92a5RVVdE6Fstq",
  "key18": "65VysxiAuQRSrNAqjBr1RoKqCjuo5cuPLUZPakjj7UFRARcFVh6NpJN7Bgy6UzDDFdbmbQyYYAtiSbV1LZe6u98z",
  "key19": "ANdpNFDCvVxJvATNigqaimbnmBafCwx13ugMDT92iJYMVpPgZmQejgurZajc49xj4AzPmwiLL4ASdFTqa5qEHiA",
  "key20": "YeEqKgAoBuKap7dHdDgP5XjXQgw2w7qwsGjCPgBvPdYutixiS17NQcdLbjYtAsePecCC8Qcw4G4Sv1vzqGwQ7ZR",
  "key21": "Me1GaSe5PdasrStkT4RThXfupZcwgxuEbTtH7NAh5CnQNTJKfZKr1YDoij7ygfPh39thJkPwivierCpoUQuJdmX",
  "key22": "5sXcmzn9FJfY2DL6MeBq4tgmAJFRvmbQwh2CdhcUUfuSdkKxoTWWnat56FfUzL7WKRA5N3uX3NkEQZpAkjRq1dxg",
  "key23": "36MHRgwa2z6tTAwnVXf6ykn8XjLDmVzweRwRHAaWRBTScAKdbCjUECdyrA7eVPZouSnajzt9Wgo3eSWtHyMVcung",
  "key24": "5SFudu2J6ZQfHby2ZoRbPDMCLbYT2jaujUZ1vestX1GSX5ppwcpE5QKtgqP6xx3WSYyv4yxucPnYmf2EXpycYAPZ",
  "key25": "3PFuK66bas5uKMg9JtKTdtPn7ppDeeJ3GM7DyuDC9jfRCT6tgRBnbJPvZ7iUomyvU8vCYQ36gQBq5a4AuSDoXdYJ",
  "key26": "3xy4YhmviwE9vrZgCigLro3fcyQ8JbR31XHNXwfNs1ikwKrx3B1mf9q7jwbXvtsxVTkLGxWKeF8PakjacmFMoh8m",
  "key27": "21pbXCN746xhw7ahLG2rEiv2Gci5jNqC9jSUqq31AFYffFpwmPVWSbBS5N51iMN5PHeWemDjEGt5dtvJYvCqmLkp",
  "key28": "2kFT9zV7ECdoL6YbqQj7M2m49iUFCHpFLZC4bR9SZBg2t8he4b9iHmrdFFrungVi3dVBDQfJUyojmumCghpiahYt",
  "key29": "5NeZugJkM7UfcZkFmtbA1XdfaHGaCXxRBC7RBHdToGT31eRDK5Qe7TAsGZkGipXPARHTRKxqrBj98UJ1BSFCJL2h",
  "key30": "5o8kVa412ha8ZCNQuh6zJT43zU2Jo8RfQkmWSPpmTi8ssW3JjehuVjRzEtcCQDnuZVqWDfkbmPvBdTgLnNTTiNg8",
  "key31": "5efx5bgT5ziMD1T7AFvG4kaCwnrGFiVBrL7v1bokHgEF98hB6xFJn5D8HZ3z6YRxXCGVmPkhda329zmF6o7TbLa4",
  "key32": "4nfZyUGZtkkMLUx8Gab2ePWaQRR1YMM1mGaokkWFfksYbABZ5MAWEPET65wZ1Wak7mKY1PrKv3APZAQghk9mU5WN",
  "key33": "2cmjaCgokgsXNm3J5u5DVrJ2hVCXWzE8RRyxtGEszfj6ju634HncQbBWCATSnCzt4yNaV6gnWHX9aAx1SMgkGsR2",
  "key34": "373AwUEQGEQPDi9cMtVnCPASuE5NnmVKdvNMKPMBEtZQ39UJ9pE334Luoz7MpAqcbmbCWkAmDg8FXPw2Ce1FDujM",
  "key35": "4uzpaiGsGQQEfJcJAvmKvi3Do8tB7Q9sZhbdnkUcgbM31Nhmmu6QX99xbkoKdT5be1oHvptLPAqnyLb6fdc2FXeC",
  "key36": "44zfo21hmyKeb9GpKuerh6qmfc9zhf64AwVZqeagN4ThGD8eQPddWXfeLQUXTnGkMX8QfMhGLLRCYHtW3aXgJqg4",
  "key37": "4M3kWFneE6iZXdKFpGSzN5AY6LFJnHoQAZQRTE1qLsMhj1yPfoDSfkGikXU4cGeU1Z7HY6B54dz5aTWAQC9aZRPX",
  "key38": "5maJwhkyWrVaYTAoD7PyzSto5FnUiSFi5AeiWhJBj9sChAWxDkpTMoqPMqDHo7VTqsHEFbWFj8VJs5eKqh8qXi7e",
  "key39": "2vp43VMRKPxxNGofbRCnzVj2Ka9GLak1NL6N5h7XJM3CX5W71yootcXrkeEPsyuxG9CxrWXWcjPSgT9rU4evB1p",
  "key40": "3vNwDToXzcvo7FJDNLyJz6FcD2VUv248dYVykBkt32zP5ySERS1B6m6yppSse2d8kgSTk4tC4rgyshgrGKZwk5Fj",
  "key41": "3Nhsr987VcpJEmfP6UCUSy7sMQnF3obay3PEVGb38MpuewLYrcSTEauNBriN17z5NnNbv7MwSiWHaPR6SJHimSh5",
  "key42": "4HT64KdTqQguf91Xx7QfpeAfxFVYfJyfF9spdq9Tysjt6XDwF36USorjnHHB1PpbnnihCZM22NNzGK3rQb8aH3s7",
  "key43": "3vP5qXstAXbEkqsdUrqEf9FqYbr36HEoZWuHtD9Y8mkZ12ZeLvBDyMDSkgSxQe59QfwShJWehMX1Es3Dw6BUiv29"
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
