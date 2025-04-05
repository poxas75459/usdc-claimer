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
    "55cYPn644k3wF81UvhGAjems7tYGGw6DuEbdPrFMyFcoVjxatKAv7nrhdVGg5EPhzhe5GP6fYGKbTLxHzt6qTk21"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dQd7zvNuVZc9evHif3cqCoWc2vrd6y8GqD44iSU2iX1PZwziwGr3vBtZauM2vwJWTHLYzrJzHgaWV6XLh6p7sfh",
  "key1": "4BWiAskTC3qKtDWjyXMigJ3ujJgsHeognJY23vM9NtUB5ppYPzjeoTbSbFw3fLqg4EVACu6sx76feMQ4CkcEmwWa",
  "key2": "2xycXY27p9JY7hNW1x6UMwW56xNm4tDtgPPfkL7yC7jeUTZEKkVaLFtYsSj3CLQ4ANzU2oaMGtv3esRwq44AaNSx",
  "key3": "AeTFe3FkRZTXAPuRuU7MoiqzkZtgcBg3R7KuxsEgk7Kjo6T6ASzynpWRiTTNSb7SMefEJ54HCAVXbHjL4YDXgeQ",
  "key4": "Arr5d3LiLDjFXzBU4CT8EaUAFSEkeVcQ57HJNtLje3ST8MPooWFAafvXtM3bqfKKXM3er3DqHjMjGaGj88kLxKS",
  "key5": "5J91iZEGgbHmCfekZC881mYAwcpRfTBXCCSwNJdy9mTGHRBmWueg6suRQddGgfSm7a5wjt84BsVyvV1sMFyYaKZT",
  "key6": "4Z2N1wAoFtC13xX2ixjrGuuaU9dN2hTGFhnv6y15BXLkW9pJSANXUWHRc4emA6wSzcwp3V6vepj6F91Uiy7jZLZ4",
  "key7": "5kYeZj4r4aufXRCWD4HjuYeYwC4RqJDa3EbtscFiGBUnARS2WkxhSYo6rKEKXf3pLCPicxDQnttsX8HCg23umWDH",
  "key8": "5NBiXqkniym5R8figiTmTrMnX8GAojAAjEmCpqfRwQrpjArQLQpee6xRmytzMXm7XR3HqTpDP4oVWkjqdCG5g3Pf",
  "key9": "EkMDfeH26QhEewfcxtQ2B8eCUkdL4fqDCKE7MfwVLd1uMjFYFD5Nqguk2u636uxFY4d5NsRTfb7BAboVK1oQNCf",
  "key10": "3FswL87VmFiZYHqwB2BzF7ZBTNbTK1xNy4VtLE8wCcgDW1gZ9hVaJsSTKhrErTrkRqQBP4jBVhySWz9WzkjAxWEZ",
  "key11": "33Q1NhLhyhJBnU3ZHMaH3V84StQVtP2qVPHVrnCoJk483b3xAyRqnD7LnTZM27Z61bW2iesVmEcrrgBgmUjL9eQZ",
  "key12": "x36CfQSjYZiTwV5m1Foj3qPfznbtVJMGBZUTHCa21SrsPBoVvXPXmRVmrcX5KRoywPjKTJe5Fi1M7gsnsNjdThw",
  "key13": "Dsczrgk4egSg7WbsVNg8f9ccLThxrW7bbqA1wFuky2pmHjspk38MgKJPQ3BMviBbio37eQCRHhKgPTHeBu5bnpB",
  "key14": "REpX35vk2CsVHNgFFv8dfa53suKKCPkVe2QB3HPuCEBXbEPDJdMxpaM6B4bXSynNnPsBn6tmxk9kHcwhbyAc7wT",
  "key15": "47VJwjMWFCYmChex3aoJES8SSs1oxjPsEpBL2EvyS8nA5xgWLXSayN6Z9DpnKdo4xTpcqqWYZf79vNt8AUSBHttQ",
  "key16": "2EgW9KYayEEDtxNZkSwt2iYbRkRZHnfvbnfiWBDdJnjS4pqoBqPMtEr8fw5FBforSgxxxf85pwKptzqMCKcrdLmE",
  "key17": "5tpWVcuRwvKKis2QCM5aZ3B2L8hG9NjDpgozgnndFXoYBvGxWz9tKnJNgHpBR6uhejcZoR7JRsRyBXR2jNPRdRfF",
  "key18": "2C5PuK2u1m4aEQwZxvbSeMDXfGhe2P99BsHoVMmNyiJh6zbryJXEX1MLHPFFRpCk9xCrFdeniXqso4NjN3zsfuBJ",
  "key19": "4fp2sQjabakc7bCzrKUd3NFGoW3fgpiEMwqTJhejS6UpKy4GHcuhRRQTYNuQnEAeF7N4aVxkzQ2zJVFzExULjb8v",
  "key20": "3YFvSxTExesvVP5jpNDzihaHTu6m3iHAv6vvERxQ75uqV3PezeT9Yuj1os6p9PdPcdCeMi4VQitcg2Dn9GERmfBv",
  "key21": "2RtGvtSrtNjjbdByoscJeEzYkoKcPEo5NhhqCxxiLoLQ6Fa56ziHAuumcQLq32k8woKS5GWut7gZ4o4a9v8SW7bc",
  "key22": "qmLpE9Qq7hcPhqpPLQrHi7dAHwfJk5XEpAGeitDQHMjM9zrrkhyCXj7q6Umvk8TZUUAUMqohEWT9DCJy7qXGwXf",
  "key23": "3vXtE3DG6388356MhHSvmQHaTFQpC4RmNX2eyCJvqq3TXLj2CYzryqaBrfVee2MnSpdA31zBJyKA9qjZjM8UPJZZ",
  "key24": "5xCxqajoKAtNfUhR2xXHepMZuXw4r6MorqQQvDEvdA346xY7cLzSYU7aovdrHzVyjZjFNvs8rffzPUS7GSowBmUE",
  "key25": "3gLPsC9GFUheSRUfL7i1bQxhH9Q4LJR2gCrQq1B9Yq3Uo514n9wMjQQ6PWcqBZNWNEsedsD4DxNLJQmKBs4dHEAM",
  "key26": "2qxBPPqKVgv6qUQvVpYdHkPaCYPnc7pmzje7LpZaujMyher81Pkhzu3TdxAiLM718CCRm5oJoMsumYX9V5UwzdYA",
  "key27": "647L8NQeExaNEAXTmukDYaP5y18Ey7x3rerrCymNpQnEgr6DZzSuf7BDT8AgfiH6czYszz1WCoNutqKkwdrTDWsr",
  "key28": "MbM7ebiu5EK8HVwZhj9dsX8cS2g564Ct62MfHEsb7QSemZqqfyJqXUpizYMPino5m1at9ydyWR6tbJ41PNd7kZ3",
  "key29": "4pe7PwH6zPE6F1H7WBte2ezyqaVhHGKhgEcEsPUGiPzbo2bE7CRdvqY7eqdUGo6bhUSM8BLKtiKq23wX7BM8JfYt",
  "key30": "5n9M2qRj6ZRK7nuofH5yQXVRcQvJVeHVws1abxE2d7hf1D5DW98c1sYH7nX57ej8oBUUe4uCnXzGSawSZgtwJf2t",
  "key31": "2fV3ujryRhbk8cVm9VZ3rYKnfEYecozX1QYHdjJGkz1pnb3ZkLhLNKx7FFTP2hdhCgbcxWEL6ytwwxnGsPgvxqxG",
  "key32": "3j8vP2D5M3BRVj32T7ZE15zLuDKCcZLCFDqvwBNTf5wqXqnZcTcnhg81Jh1DcF2ENqoqfq7ky253HcuD82NreqxF",
  "key33": "3uwJ8cxaXUvvWPJiS2YybMxtuDeN82XCaVecsm6qnnsJHT36XPTBimGzJd7Y1nTjQUpsSrdrDgBAeSA52ynwHD3k",
  "key34": "26ci92Tfij637cUfwLbNCnoThCqcGnBLkPCvuPMupMjemakBJWuhSBhv3e9yUTro3uk77Ls1ixymgpFT9c5nic2N",
  "key35": "4n9B5zVwarWQPz4HLKoFkoTF8AYLxgbiEj9CdCcWwnSVoMEdomuvfKVPwPdbyfrjxZAzwB9u4kJZ9i6uKxeCUaBu",
  "key36": "5Fgt749dsup2M2pG4rnvrZaaMr4b5JKJxmNCXGcyYZruapYgkt5ygs1Wtw4dCQC3JvpapN5ETRcHZcXHazBhoS3y",
  "key37": "5TYcwkTv8reBL3P5CdE8LWL2J6gG938eoqY8zWLodsU4YmNW1ZGu3VRWTJyRrFLzmShL3Chcr1389B2U8AY4qdai"
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
