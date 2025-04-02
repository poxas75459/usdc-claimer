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
    "5fsHrLXkaSrJF3xrf9NST3Jtoz87xa2hb8upa6U8DCcUZNKkggFaTA6Kn5CtSvNMRvVmnJTgL18EX3awWEx8LPZh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HsFiZ96evggaAnYfL2reeDF5FnBHAFUCJCk6RwqEaAfWY3FPnznFudKuKtgub2nKeL2a4vqo3skzAGXQXYNiRVh",
  "key1": "28eDf2RBiqYtDhwMxaM1cQnoPHhRAMQmZ3ZiDiRfHcrAsEZzzM5vL38EKqcDoE4aDbEiDFe7Ud6pqU5Md2N7ZvPN",
  "key2": "3bKsWaD3JTQtyHW3n8rWTZYriePVoQcaaNftAxLJbr687UQh46T2hFxzRXjqBq4p7S1tFVvkCkZzCHAgiPoccuS",
  "key3": "HaAegtEJiUsbfJ6EbY5pEGKYTNjzhPtZUHGWdrm8ozxHPuYsoGyhMTQ9Q9FnZhg9a25agHW2uiZHKhrkZeGyfKo",
  "key4": "523Xot8UNNzPVirBdDvEu1yN8gz2KaDizTvBHdjjxMm62fe8GsiYrjgWY9QBRViXWtUs2CFvtKBJnW6UAA9CqkYX",
  "key5": "3U7CtQpXwggsTF2zFk1i1vmakxymU7wouoY8PHdfrgEu2BmNhAg4qVDjsPqupoA3jFPDhnJmvhyZAUuGnxdT1ubb",
  "key6": "7xkNyJ3ozJj5VuLN2XaEsNfHkKhCKkYq8UwUqPxRyDKvQqpenuqChTtGa1Cr4NyQaS6rucUduD92biWvjaR7Bfa",
  "key7": "4uF2bwFppBm38R9pcWysDp8VRgBovHREZ8TRFvs5j9sJVqhm81ApeR8WWVHNb5SbGdduuatY8Um5owUrqFdHEmR2",
  "key8": "3AWjmmJ6E7y4gcTZZQSfQK8d3gUydXq2qS5rHDkeiwNmZpPvRGtrmbCUs5pL1AfSCP6rX8J3ZJMFrNSjzC3V4Zav",
  "key9": "UWN9GTAP4ZBuMKSed5fFGp2YtnP5KnUt481gFssfdGkrJPBSw9ucaVNZES1oT3PqsRVGEhtyYh7UiGn4yeT3EBS",
  "key10": "x8KyMV84oHb48MHR1VJUAzQYrXPEXcFeYpZAvP9BTaE3YC7y2Ug8EXAkpceyERZqtKoJrvSBLG7Ho2vMPEYKDDb",
  "key11": "3XtJp8NhsWefXgU4qWMvAekYZovyaNHL7ogfMKdL9F43v4pAjXSoq1oUkNWgovWw8YdDjfsGniLKyyNoAEDSgQe9",
  "key12": "5nPdmLWCtfMuD5xxVPq13oT77bDTgTRBBetCVANvHg8pWawUuFq8Yzp8Yr4CqeLpvw7CSL5BFWA9HV4xQAgHUtUk",
  "key13": "51Ntg6FYjF2wWRXhzYzsUXQ2PexM4RAMUT9axqDYoGKm24Thubgn6thLg9iWPgbjQ92ZWxX9EKBoPE8GZvkCJRoy",
  "key14": "2PBWzkRp7f1HVao3rnL5ERJjKa7QSV4vZnN3qsfZPFoYDGwNCUgAYk48A5Yq22UjB1j7hRa9FJatgbfQqbdYv3dT",
  "key15": "2JxxgeQKwBynHFd7Xkv19ebeMi3z11vAMFD4xaaUGQVhYYo5iHK9UTcquTwukBKTHpU8q2UNGBQd1yhyKkHEasQx",
  "key16": "HqD4oxjdQ61CWgk6zPrQtW6M8hkFX5x8kgMRrKzuNhAmGuFkGmeyQTVnVDCtzrZ2ZgvWawY9BJXRjvuX8KKYtBf",
  "key17": "2SXWxUkf1wjNbCxWVugJg6AWy6RzF5MAjJumazsCW4Zzt5MYhCdkUPJmghYB1FDYtErWiThjDMmkHErEWkk8Vjrr",
  "key18": "5otDCHPwkjxBgu7TE4vAv1RUvpgBY5vPB7HtTdTg4ootVCfD5UeY8B5qmsvbrNy69dk4nVayJBGHUedsL4X5N9KC",
  "key19": "4n8T7fjqhdy9369TpAHA3ekwWbCVxjxAJg46K83PNdxtQnkpxLdQJQDf5NE2LSdmT9z7fFyqDyTULBT2Gg9uvBRR",
  "key20": "31RSLVogbwPXYNiLc7uohnoL97BvBJQht8U22A4vFvuUx6uWQaNhuGoco4jWYXUBroCPrbedD3dBFwTUe25rg5YQ",
  "key21": "4pHZYmHfKc5bYuEDNhWTpvyCdU1PrZ9L9KkKrxH8GNVyy94U5rCteuS2Sw4mvixZpAmwkdQpDPhCtyrtqDwNV356",
  "key22": "2ygM2Cyb7MGDvCrL1YjYNosrCF55EqNFttNMra3nGKvRTN8Lj3fjwPFtzkwAyf2Boecv4cBsyia5hNJx9wRdpq32",
  "key23": "7JB6of5SgAafb1j66EeffiWukSRVUUpB7PFEUKeKWTKRczJBxRzq6UJDTWMT3Hkctwcaq37R6C9kZLikTccmUqZ",
  "key24": "zz8cqTx3iQ4aXwpQBgaP7TFdV3wDGvQSKo5a2UietGHHwq2UjTPPs9niAVmrFW3PEoFYGPqP8S5221DUEuiq95b",
  "key25": "5MkEjGXLWQRMDvt47zxst6jLvk2e3tApJZcLtjMwMJWBrX8EQ9JQDYJZeuA8oKRTyCBmVJ1zi442CCa6NGJdGWux",
  "key26": "3qxAJe8dpYF2BefVZrfBWVxEv4ACBioLMLLkDMsLWaadrKnCxRUU5ry1yZVmDgXj4obDMrSzuNe838FfmHTfZxBD",
  "key27": "HvTwuBovXE69BCFUx5U3nZhzqwbWfzH8URwDmEseaW7EPBC5kQRpTFbsoUqEXqWLSN5heVMNaRfNrii4qnyUN75",
  "key28": "4T6oawNUFKAUc6pwmPKRjNp5cFE1ySesbBenFRfeZkddZw5tic1WVm5v9436KQumV6UJzpESrZDrGj2TPviiTcz4",
  "key29": "2F7fpFGbozu5BToe5F5dWeWCVqFk9FVnFjMMkmBdfSBR2qRNWnm9rAJi5XcD1VvY9LnEujCkyEcchipGWGDPs9xV",
  "key30": "3y7etLxCuQ3ipHQCqUt43dDupCXJZiqDxPojzTzk8BrDP2e6VVM5kRj6R3YaV5Amoj1NKp2e4ELfEG7pGCamzMv3",
  "key31": "4rz3iFqLUFCuUi5avaB7b5PNDewfxmKcpczyUGmk5coZ4Y9SNQzet2mUsbVU63uzMMuaMfoqZYPV2JnYDRrmVvrE",
  "key32": "NHkTFJFNaxvNtgJSZ6di3ZUo9NXnQNpDJHJSRdo867VTYbpy6Yb4UPZ783PnTfcFVoqmrPR22TcBV2YuwdswZow",
  "key33": "3fqtUkM5q8czWLwsRRk3paNEaocALb4csKH8mVzPFLGvD2W7wgK4Ym5y85o3GfzTvEvRxPbu3mUH5hDwR9TooyKm",
  "key34": "3greKybYkgty3GzRgy58LVzuirzNZjf8CBAh3nfeqL6ZfgExkMRnJNp9pAFfwTY2JanAkXjFAdVU9BPx9YVHBy1T",
  "key35": "aSdDn7NnvvCPwPDh29yrk2QF5VHRCtuVzzrj3UGNdtZUCYR7uEv592gTpKj7pJn8iiCeVeGRuucJB8BMd4MjDew",
  "key36": "2YF4rHnW5kwSZA2JZp2m6Nk51MACTJQHoP5FznYJAEGt9o8jRW9SekjAba9V6omXzDSQAdoWvmGkZ7kCofMM7wti",
  "key37": "pwiGQLUgnD51YNJWeRuFrZRpqNdJo8MAPRgnDRc8N45Tq9vTshH58dK43Eaum6dFPrqxQne4EBondP5LzMbZ65W",
  "key38": "ftj7QGzkECuVsAjPmtomR5CUHAvVevyn95NFfAKpBxccTyWs1q8PzDhENiznLJKdzWdcWwQ1yiDa7ScThtvJ9P4",
  "key39": "4MWSYXWPihbtDuVticHimdX2xdGitjcwBxp1rfi6VZZ8ec5XuRodyiqd8S8M3SHJzBXBzcxPexrexghUhyvf9Y5U",
  "key40": "58svhpiyxsybocPpsSvqFyeP75mm8XMYGQTV2T2Jqs69i5JwjivMMJV7CsMnTqFc5WMD3MyiaSFVA2m8JmSwGBZi",
  "key41": "62xNwSM2k7eBuwBzBX7F7HCzUN6ToGu52ysygxYENdRzNeDUVxkUtMEjLr2tbWkincGjD2u3upCPUXTrd8An2BDr",
  "key42": "2ybtEUEmsWf8qzVTKs8YP3fqBvn3CmDPcAYmMBhC7rauETpT8bTBqqM3ixD9y93D1GHy7F9ehZVHM2HG1UaNJt2M",
  "key43": "458zu4bjp4rGEjymmFwBfYyQZWJSf8AbAsX8DUJ9A46ywL5fKrJn7siW8W8MTARkdNkB89S4Rd8M3AgB15YyAd3m",
  "key44": "2XaVhsuuFEDN1Vi4yG6zyuAZNNFLF9qsi1Q2cFVLydj1b9QM8EajXAYSoZKgsV9CZmHVvf5a9H9CrSJ7BiozHHPE",
  "key45": "4Pv3BqSjf4jatScapjsDq3iqtJAweqekj3jdcdgmp9CvhxegwBXzLN58NCfKeM22xZtmAf5PHJpfA7J2Va3WtaWW",
  "key46": "51LZ8QMTdbk6NtKvXEuiDkXXf9LrepAgXNMPRtPBgtMFUVGjZsnJUH57wa61hyk1a2AEecDWpDBgRLbpknnJGY6x",
  "key47": "qcdFHDhrjj3mqcc1rCCJJXDdBpQtCQfwoBQ7thtFu5MbRXG5y95AQVo6M2h1C9DXUQ1vFkg1qf8JhKYUMCehTLs",
  "key48": "2zBB6VqViP6JttzjeDQshy35B1fTSBhhrdbTeraE161gMrwVNurpjVoZyqTnEdvvinvXt3n9nqERP65bXCnAmJah"
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
