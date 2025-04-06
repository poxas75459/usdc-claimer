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
    "ZwQ1eBmvWBDtXnq4ScF9bbpMDPahGKDvqe7L6bZqG1t83ivbVxLdc9XzFXjJZ8cAuge8aKRoRzEth18e59ykejB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZyZnThBY4QrBgQmj8SX6EZLeVphPCy9cMpsDHy3uhciHDVq7pTztDNANwVAsjme1GS5HTFSeccJAJKMbvzBC8qs",
  "key1": "3133hcdm1hoTkGy4DuzAiLZpgHi7QZ8bePKHENpP2tJf61FSEi4nNE4wYZnnQijgtG6bqD7tb5kquYc7WAgDaLrE",
  "key2": "TuhDvR1RUxpFNXCDLygiyg899wx62NBdTgDzHmCXbHzMcq7DD7J5SywvM2UUFjRXNXv8bWdoiEW9UHjeS6BE5su",
  "key3": "iM7UwN4cHQKFCmr7xvwBzR3FssdU1K1eb5Qa1X8oh3Tuyn72NShQfqQ4VvzLdmy7pSe295tu39tzmZbwAP1aEMm",
  "key4": "3CY7WGpchGYwobnu6ULL6GKwbcfYfDKyH8uCsc3fqi3iM9y3ceH4WqGpZRwvCCzXHihcSTs9tKFhRiyB833HEmGK",
  "key5": "5ujq2hjpF3G71FGSdpnSVCim243u4mcMvp7rvJfkkztYZg7z2JxVAZGRdYEAM4KAczxaHQGLW5BAD2sKsiXnPxHs",
  "key6": "zxSopvdGmBmwNGUFMHWdgvrUkmm9bRTpuJeYi4abgMMswcwQmEMQjJZFtSWAi7sjbePa2smYC5JgebnruaQerQB",
  "key7": "2YBdAaafe6BZW8t9gYjchdo9ozAbBE3vhQjAPMm7Jx32PtMJjp5ZS9yYDxgkV9eyAKFf7YqgmsbzkreemdrH8B35",
  "key8": "5jtpcQtRaYMtTyFvLGpcXbrcaUSFuHrZWv2pStQW5ayefS4tDMHtaCjQPW9AAknbbHK1rkdX9WZES65LJi7P5Zf5",
  "key9": "3jSkhNA6k3KZGjcj68N7tHKi4Ys4uDh9BS5nBxAYbySPELdnmKKcqEpfhWjtmjPXLShKRwNGKQ5dGb96M5v3v1J",
  "key10": "p388CzZ3mxc9uVgdhnQejZhuDDSrGX7udmpfz2YEfi6TCjuk5kmoSR8biUh4DWkghavRHREL1TyHEs6U9U3NJKv",
  "key11": "5oQTrFZJf6uD6ommXTEVkD7AQmvM5xgRbqN9jrgqvobJhELt1SHP9YDdtDibQ8qv6EdPDpx4GBvHq99SE1uMMAya",
  "key12": "46MbTPvDj3NF7wLfmf5Jj56c8UsU5FLNs2xwmVtWXCgUD7HS1s6udgVGogUDwhdbF6yCoqSXKm78LxVw8ZzwbEE3",
  "key13": "5xKv1yLRYsY6GnVQSAAhWeJc9cJJsHvgACYwp8jEcvTNaudVzkBb4eDiZWJUxMSzcTzhWXcuaqBLxXXSEkSBVjT2",
  "key14": "9CTLnwYfBwgY8kSe8Towri8gUTy3saqnf6zFyE8QpY7Yjnw6q5uABzAeiiBRcRsoHeRubynpQniyrLbqr5gg6Xj",
  "key15": "572VYTeGc2r8rT6x5U6xeHDfYN9unuyqdJNAQ3he7FfVRNdS8Lr3vTwtaaoHzx2jyMr1CrTVz57RRbhNgQ6nPYzK",
  "key16": "yqEVywkNZYZ8hB4Zm3bRjLprSbo3mPVPPtEYVCi7eBBcREp6BgFdrM8sCNSN4sH35HqbWF1EP9Eff5pp62DTudM",
  "key17": "2xxypbjzv7C6aQoxZGQ631YJb1JruNFTz5M5gY5WjpHNrzXM2WYq3DA5eHca1qHddxJNa5e5E5cJXzr4ULP97cRd",
  "key18": "2zhAFdKuNJ9NTtBnJksUx8r9aUCQyNo3cMZ3rJUJrkTD6XVtzDBp1isTFFwMsQRztABe2buMzVUnn5BsLuGDEt9E",
  "key19": "4qN4H4mZynMzxBTgoxkmzxQgRwc4gpmn1B1rzwEVNM21peAoLpvJpW1BpUKEM9pXYYJke4FJv1QDJu5rKKrGQtxP",
  "key20": "Svzi5gWyjWrHevbESQwddgLm7skZBzYRb5YMGFmUfnVzTR1ifWkenGZihFZUybAbRu9dBuVPuf93LppXoBX7HCQ",
  "key21": "2Au6irjmG6qEvEgBBJTvr6BnK3bcTwEhSyKXcaA95hNh9DcmiWkkznuKyuLQ6AAKwjnv39Gsx47yUdGGibTPWuTr",
  "key22": "32Xsrw5Cp1UujiMujFbYxgUBpnikfS9bZGsU8BUG9bQfgQ7V2YArEig4iVnhE8fpDqkSeuKP5DCpYcdtabnu5p9V",
  "key23": "HLhzyZ9qVCSfLhB9QxYdParLczyt72QP1HNU8TwRKfQGmZs4Asc5C5bDNAN7VeABCD8riWxkViizx7kp4tE2aAN",
  "key24": "4ALqgrYfvqJBqckg9Co6Dg2BcySLx1RtTuNLrRCK6MTeuioSspEEHPzLc8H1DoxGuNk7CvkPHP9X8yu7zUBaNvMr",
  "key25": "37UKbyiQB4hz7D791M5kcmQQWPwQuL97chxcTeospPDaJ6kqL2FuYjZto3LWp6JDC8mX8EHTDoeFazAFxnUkhV8v",
  "key26": "3EQoqXFqcevcuHQvEsaD532dRs6ViDRAttLHaW5msRD1SMWqAddD5c3UDwkvAYRxPVzAMV4PtS79ji8rjvshBymc",
  "key27": "2ejGphGAaHTARsHc2SvSJkgTVqYV9Gv1Qv7qJgUNpJGtT9PD1k2KU9GdWdTqP2d9kotPVSNYvyjMJUnse8JicSV8",
  "key28": "4nHVAcoXN8Av8eb8BVLKEN4ptcT2L9UTDKtmvNDMWqeE7fpBaKdaYHHmeFVPupU4CjvWjhtCA8jF917ZDgLEQ7e8",
  "key29": "CzCLxRHU1337vJvaPA1HY9q6MkWFK5LEvLc6tLAoTmwBBEc29so3AKrf4M3A6MRP9R8Mn1Je8LoWXWBmDxnwZeM",
  "key30": "3shss9WcUQ8JtN3DxsbpKmEdm2m5jFLcyTbfuJisDAT81fxXKfz92DdWfd8hLFipcv4AJc7JHuFPXcFF3ugh4ieH",
  "key31": "2LnXp5eNyyKGp95Bocqfw2rt4yPQ5oA5vXfoRrDUz6WtEF9Dv8wGisaMDsRdVHMNqaR3mYJvvicyBgk9FFe2ZkWd",
  "key32": "2sG1bUNm8pCaYJMDKLvzRg8D2ggWAmDRiq6uVkq1MNwRVUYGoFSCiMVuhvCYjsreK96j3RGuxLkcUGszkrrKACuF",
  "key33": "yKFri84ShV6T7icowbHyyGFqJADvDmQWg8r6vSasXvnmSdzXfrcUiA6urXFHenypNkNn8S5hoe1EUiawyPkiudh",
  "key34": "2MdF74qd3tgNJ64iHHw13zW4GzHRMP3pQDccZonTByRf3qXNgeF7ZCWk3FNPCcieHxv2NYCGAhwuE8TxZo1gbPDH",
  "key35": "2ifQCvzLbvystV21qjQPnFDV3EpZKQwfMmoqchQ8LJCgVpMbJpA5tfFpNREwo9KUBjWyCrom2zmG1NArtDGSWqXR",
  "key36": "2zfewFkrnmGu5XGxzzaXpUtwP9strBGn8xpnxH1fbv2UpptPJFTUXS1TvMESbQ1A2t2MtuYKDoTsTKbHnUP1ZkBf",
  "key37": "42iDEuh7kErXCpGHDji85WS6diqniUsufmJbuyHCzE4LzknSFWHBpKGv6MZSXnY3NMiKHJUwKD8nCexHcWytQF3A",
  "key38": "2cE73eezwR1PDEwA6sHLs1JHM7q3EvbVgvyPo6XDU9m2zWaqvrEtmkiB8UbSzbPhem4yeDGh3DhYPh35J6xk1VZb",
  "key39": "5YpwaUmCShaG9dbnkpF1BtrC6ohmk87DtFNm4xPZvM6iavWtK5QQZiHHM3yq6Px8h54SetamWJVk9ut3DGginBuu"
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
