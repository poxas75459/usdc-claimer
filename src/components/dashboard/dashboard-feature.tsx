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
    "57XGfaQcrhK6F9sgew53HB5mcV6uG6JvhLUpg28fvkEEsFiSDcAXU1gM9U96PaJ3qftw7DFQQJejafRmCseXAyZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NU5RUA9FwXyT7NR5kfWuaTuGhB9ni4YJL3R5Pf9njDjkKpWFQtGCatT5udsYP9S27WvYt4Y4M8N3M36vM4mXQhf",
  "key1": "3T8UZVRyx4xVPLLWo2UxQoKpaBeBbwWFJEMaDdacQRWAPJUmaTScuV1gPzEZqEn5PfJ8xbFiVp6fntkT3hXuz5zG",
  "key2": "3ZjGoQT1LbGVofESwf2c7chAt8FXq2hAtYUYBRoGA6UEJkq7heVC8dre4YkJUkAPMrMR53vPo4aoyGvMyJuqb39b",
  "key3": "2jxUkYqsJMvoQ97CrzcGRqvqCE2hXaWLp633iytvMcy1ZkooyLg7rx3PRidSTZhFATY5rGXD1gthx5dujS2nNxYD",
  "key4": "3JtmPSGQfHx9TSgG1rXqEqPTJfwaY9GK6UxLUvRu2iBpv6eKVBLvJ28n3BdqzDYKuw67ygLkW9wr3TPYBTCXX5R1",
  "key5": "2QtvL8MGfysvY7ZCzQ97b6ZcPKht1Lq3L31hwiteEAwemGUwwzH71LB1zunYtRgCVC6cjSekmAbq4XhT4zT1RKfT",
  "key6": "5uZ9TTkWmmoacTV5kZ4nCnfLu3FT1REz2k61Nk3GAef5fFdtUFL3GQuf47RSzBpeTa3r4fWmctii3XPweUCmvJ6W",
  "key7": "34V8PcbjefcAq7Haydp3n9WB63ZMj6ZW2R3wssLVTarXtyvCdt5kr8QtLMeZdC9fmeYpgtmSaaduVrafMBVochuN",
  "key8": "2zP7tvmQgsN5G6Lg1tnQKaWLBKzqt6LkZKPr9BwWoF52zgLHvUgxaSLa8buQebRRrynSobSoxEtG8xQVYKJ97cRS",
  "key9": "Fu59DX2ndkWWpcHdm9CYmf5qdFDjNkXgoWXATfshd5qZLaN8YfLMzhXxyRXVZPgXq41jRLVEroHeokQJmKssNT9",
  "key10": "2o4M59RZSYMh4NcsNmFAHSfmEc1H1KafrEXVxMsrk8o97FNGzsSrBFeUhV6HR49oEJtsizkF1EYiKkAD56LnHhAe",
  "key11": "5D3UuMKmF4vUChq8aJFB84bQjPspxRxBiSgYTxWWYKQdWLJpr9ghNeus1FUBWRA7sczat9XcJ8ZXia36jeYgRPhF",
  "key12": "46nMvEbgk98YEZRjuTedv4Q4zvEDAnS9SGmVyn617nQuP7zQWpM9ZyDEvgZxYZ9nuZZhDeAyF7Vxg2gC25yFvidW",
  "key13": "5YGYnTXhz3UgUeneoJrNB72x6PuJCmLgEFZt7TqGkkJMzW1xhnk4Zui9Nd2pDJTykCF2E2mm4vUaKpwX8vosKotE",
  "key14": "3a4mhnX8X4vBNz1tFjb9dLrHeLx9WB4fiHPoHJSPGWdE7jniTRhNoAdiFwQxwhverqcVn63bvUiYsGjfPdJdNkk7",
  "key15": "54kYh5qsVCbJ4CovUY75j9J42TnotTrtz5gDgri5gV9QMwa9ekYXjk7KoKHjDTSqrxoJ92BmNdEdcjugJH7xkZBM",
  "key16": "3gTEfxx5oq2t5HfnBbpCgyT1Zwm9tyHw6B3evchzpZ6bchbYVnhCc5FEUWpvfkkjiGwS5gKTBXzhY1g4yQjfEKmN",
  "key17": "5hCBfsFQWseYmaAsu147Gfi5o7s4FzFk1bwhC9Dj9xoXuZNT4FErKijzB9Wta932x4JE6mudJ3tfAzZ8wg6fbf5S",
  "key18": "3vUJUPi5zPbN1iCgZQsJ9VtjtURftumamn9DqNKJ9kGzNfyKBEkXaobXaGr8LsHydCJuX4GwmX9o9qAQPXsHT9Bh",
  "key19": "M4z1c4m93GfDzyScHmKEyg4ULVfLrvR57thg9fmGjHwQVa9VHUWXFVTXDdb1jjfPiaysnxckfWYaxLD42GpUppJ",
  "key20": "3BgoKRtpXxmNBttdu42wD68qS3b8Vq7LZXmvAkJ23f92ezR6b72SCc1Qi3LjKe5YZMVKzw8K34whooMe34Yqsxwi",
  "key21": "4pTGD52ArRMvzv3mRMDWakgZiwENRdW6hfnosrQ1XhHTkCJExVq8D8kshMizAzw6BMbRKMgiCidkw4SFQkwrAnmM",
  "key22": "jyZ4mxM7A1LgkWLwd5gvtWzsEngFB2haKJn9ibfEQCyA36Vjz25MyNJnbwdWpsKKsnHFanBH87yucqHBuHuwcpN",
  "key23": "52tpkjrW7i8f4EUcmmhsHqRFd9ebQCuCC2CusnDwX7CEfDdq8eY5YuXaFgwYWWPy4KFFhLBkMwg33gA1kbwxBKdK",
  "key24": "mdEwNGHQDw1zyU2hswTaQ1JT2cgb92o1BbVMtUgQR2QypXAwBeJHRHqBztRynXqcnsSa6Ms7izyA8pWf6GCA3kd",
  "key25": "xhsn8Th3cEkfdtWxTQiNP5ZUkAAgnG4xwrDnJWeXonimaEiSrxuYHJmUayVxCD6HM4oSEatnYt5EGhqqd3rW5nD",
  "key26": "4UWq1Ne3jgDgKBSSN1xV3Up8WFGCED2kXSab6u8gLXwQRowpNhspUHZs1vgnV8S8KLQ14XZcYzNANXaiVsfRjSZ8",
  "key27": "5Cuuf8jAAsJSNR7PBCF3GGCnwVjS8x2LHhBdtGbkAc93Ud6GgLsvfxp3YqX1yzpYJP4hqizEHNDVMKMthQvU9rUT",
  "key28": "4UcHaz6uhjGgigSu9ZTPQz5R8QnEjbtG5jiQKs2N9uSqpsEkCh6rb5fZHJb7YVfawVsvmFmqvarfAXvpuSRP3Wyk",
  "key29": "61KRea3FazLY85p2LtjYMyC7HPrteUVB7PhxvEfoTyaM8uVMfPqovXNfF3Sb2LiAggWYXDrdtw7mA6aJqmSuiotH",
  "key30": "4nMPkoL2EpgvqX2nkVMxtRC6d27n5N4jPHouEKawhWs8cYvLfWZ8fkS79N1DPG9d3yL6KRCbFpwg3NZdce59oLWJ",
  "key31": "5fFMQpDGVk2gndxV9XFa2ZHta2DWzdmw9r7LrhyCWNBsfkEBbisnkQErbe3so8vUSxF9oetoK3TCMx5MivCMvjcc",
  "key32": "2Z94LyZEhPY7bE4Vcp8zEhVLxMddu28dqs4i4cDeNomXvM39YnC5DWEBtcwxErqRhSjN4pHk7fpRsjAEGAXyHniS",
  "key33": "5WspsAeuddcgKCwPV6ZndAm45GjnUws947Q2P2ZMfPye9cSQZTDG6bngchxVEc31Kq5hRTuS61RgcwAmd8FVzhR8",
  "key34": "4ArnKm9pfimJLnvNEiEJgCLAJLXGRWrtAbA8MK1tg1ofZJ5QehMWsWJUEwxsnX5UCEfr4yr5kPKwnzwDBK7cBLws",
  "key35": "gQjQy4v4866KuFrrTbFmKe9dzp2EeFNwHoqfRyUpQ7qujMsu8uY5K9YeLxWhnB8uvYJCs5uEamzDvgRe6zZZU1W",
  "key36": "W4JpEPMZefZZVa7oYAr7eSHqvzjZ1ut6eSbWLTVkhmaci38Nu5vsmaLFNLhLohsNaJ73HTGSHvTy4kNsT5Ejh4C",
  "key37": "5FCFsg8mCrwpQdzpxiycaRwuWiGu9XY4n8PHs5tu34gdq5AT63dX89E9eqjb4DWreW9eBjy2G962q1AMkFs8f8cH",
  "key38": "3RFgVsGHFNjwsRYjRfmMzEpXP9Er7gertouFV9R1tFKYo7j2VG2j1vErajPLs7UQaAfhw9StD8aHDLXW4yQ77xz7",
  "key39": "3gWohKgwwX5NSP1hYJPquaCu43PNo7Cx2HjGcWnRZbYmxAPetVPLLeewiMfCtdayuuMmY97GcRLN1k5FeNSuwC6d",
  "key40": "5pDDC2yBibtS1EKN93xhw4NWRYSQebhTLWfpUnQ3VQvu5gUvDpYJQ6dGPnfsyKhnh8Yg6i1SWqMzwx2tKXuBUqCB",
  "key41": "5c5SiJQkFAx7piywa17iTJ4xUT8Hoecn3BgiPz2U36jNaqK8ZQAeUSe73iSbygttR6UFBrDbkx5puEGyx9YKHJds",
  "key42": "4MKUnycC6ArYqRsh6cTh5hyHqH57LGu8CCnHSy8jd2uTDDFs8Vd7gEkGoJDUhSRbrug287NBSuJVZ9DrrrPE5A9Z",
  "key43": "DVdE15yJBkkBvciVnDSdw4v4fyfZ5GgXC4vHGr1zdoFTPm4FWj9jANLdGjKZkj2nWXWNhtf8YmeQ6ho6jNQSxhw",
  "key44": "2chFP321SCKLsj9xTNPpsxTVsiWoP6PFYZzqYZ4pHLa9NGSLx6YGnD2Pfn8xU4eQ3nt6Y9nUp4uhxGWkd3wF4Kb7"
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
