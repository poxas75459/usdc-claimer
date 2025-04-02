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
    "4vxjEHBKhbNKKZW2AVjhjV2fKT3wWT42GF8ReR4jQ6EJ1DedvNjV8MMHn6AEj8f4T4FhY3qYC3ZTuVdCX7do5fo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KwoTKowZRPCmetLkMndiNXmSXSZ81dtjEDZhMxW6mYwwuo4DFxooc1CqeEgwwp6x7LndsWTi9BTWCsgaWrdXDBK",
  "key1": "2yMu76qBJRZm4vLhWMytV6ieNSCPKfXXtRdGGrsfCSGYgNtuDPmvqGfXRW5ovitud5T2Le9ESkwpEKNpgQzkKrrd",
  "key2": "2uNsDk6FkQ5Hiy4Z9axXBZ9KnvVfPfdd56WpnCpqzgSePSkpBrKBCPRDwjNrNg1Ptu96Z3LjvGvmfu9jn6m5vzpF",
  "key3": "3Hqr9yhNEu429PYLE1w6RAAHxkf4mNi1wPZbM1LZeRqXQP6Snqrz8zhbrrK2q38fu4He5de45U2kCBt73BDAXzGe",
  "key4": "2VWdY8xH8DbcSJeB9fMEac3rKEpD9sJQBbXyw5SVbxAogTZHqFSwaqyLDxatVkfiuprQCJE7VM3nS7zsXLZYAEk9",
  "key5": "3GZCJAZaFgkGiaAbnjw5rumbjjk426G4MywbJjT8ReiRLB8N8QWNVTPZtgmhMdgAxUqATfTKYzMaVUpin62nW13q",
  "key6": "4vBmuh2mWeuH2BbQ3yvaopKKfGZjyk9uFmkvTCgmt43GTVZRn1ZEaVQ3ioVrNubNFkhRKgwT21wBVVh5pEGqB2q1",
  "key7": "3vJdGNpTpcXvV66mS9YsQ3MD34ZGcujLpLT7sTC4wGFRBAwt4Q4APxFe9Z4on7Sh6NbzBxnSkLgcGwRbBNqbccyX",
  "key8": "2tKaoYsJQXsjM8RixjLWYK1h22Xt56ztrmX3jtK4ZmWNet57TF98YFjUZ2knxW5HtXgJKpJfC3KEDtqDt5m1MNhH",
  "key9": "4d86aafoBpgkjedTjXaGoUuYdNxR1eyiCi5miC65ZhGUxAXbbMQCjovVpgcvpCDZ5miHvYW2vhSKYTsWi36dyZFj",
  "key10": "3bZyzhvzaUee11tZgDv5ko8BRveXrJXQESM5rtcqTLbTwMfJFeXA8Mkr7sYMVHS9gKCCHjGWSwXVnWrdahWhkSd4",
  "key11": "5H3ZiC7WVVgNmyonD8paxDDFP6bWJte9Nk1ktPCzPMTGPCsH6ATySc7j1HH7bWjrPXsQpmnXZju5Lm7R9zavy2e",
  "key12": "65WzzkqNxfnqXr5mDapa73TbAdvcLX48nju3QLNKa9372g2aUsGipnVETEUem9HRizyLvbKYGFHdE3fGgNbFFqUG",
  "key13": "4M9kabc2Yc7JkcguqcKmGt1wUvB8FyVE1nowBVQqPekE2jc95hoJj1cPAuxfCQavkPEmDaLZ4fTtDdECZKmeD2Eg",
  "key14": "5Gf97Qsd5PxiEvkyf56dWoaeVq3Eafr1vHHdR5L4AVjgJPsChqt5GiM7CccfGgHVWtKpwASpaZ9zAnzaXRQJgxid",
  "key15": "3fizNbnUnWCPuKzzp2pWtdUnXniV87omhFEL33SF86dFmYF9qPzQSK5YoP2oNRTfwxNj3jbEWvamCyBT2oUCvyAK",
  "key16": "T8DvwLVtTWQLTpzNCCQWSGq5E3XuK8hUam2cGZD1367WYPoW2USr61PiDU9yPTazNBvnCPmnWCbfHBqQSeh4T1B",
  "key17": "4RiwnxpjthmMgCTT4knKXSY76oKSXatYCEqWCCengZra6z726PvyeVnyufdRcah2PG6sdLHdrHPcpbM97Xic7nJM",
  "key18": "51xHoaSGtEssBfsRg3tyvX9o9QeuBS3CkEzBMQSqU6HoiLu3q4vdPZyxXVdFRucDStMvtFmjrekPoE6J9tmYgDPD",
  "key19": "38pG9dCeS1dF9LeudY2LAPuKfEUf3XNkK21HNKgQLqxRqU3854CAJD9Y8Bz5hSpV5EjJYwdKtj31EDmpp954hsdz",
  "key20": "2Uhs2YFqEFnh4Eyb9oi27DUmAiFufR4NQWYo8P4VVk14UqwZVadnkGiaYNzuE8NL3k2Z8wS8XHiMvMeVsxhMSEdj",
  "key21": "4YGAAxf3uy4VmQs55MrxAbEpWk3NWheU2ddpF7uo1mm8ZPLH9kiwizgeTEht9PY68fgaktpGb6HqJrDbhc9A5fAH",
  "key22": "aXTTjyDhcPfwfEyQjp7jygQPX2w3gsBmCmQSrgd6a1wQNE264jCsfYor52g39Kte25RFZU98Fdhvbm1iuhrnRVV",
  "key23": "5sjtvyGxVComKvtFPXygUEfJt5wNZiAnW9hVhG9fJWcurXUtxkD4p9gMnMDG77DpyjUnyfVBZPcNJJTuVGwpg3kU",
  "key24": "RwWdNomYrKQ5hGzY2jPiacR4VUE6nnJfGFX21XKhxioQ4fmvqaXmD9xinGrfv3KfW9LESw8NnD162WRPGViWVUm",
  "key25": "5FmQNCccK6ZpbHn38BJmuWbd3HbxTPLpK4jReAoEo8S2SrqAis63LZPs7SpybzpGgSHiJyZvWtRuTJDxCsF9GDHE",
  "key26": "3T3AB8WQwLSB51q9wHTNngjKbhrt2FtejDJJr5LqqCHw3i2mqQ1ZRMvjd17cw8LXjB1btbyEbiRX6iqMYJGYrKHV",
  "key27": "5tFCbXJ7yBkMyPqaBH73iJppvAbrCAUq6cJbBcWgRGSHdn6saD1MDKUKGV5GUM94VMahFw9D19QDkK1DpQSgwNsq",
  "key28": "24YUTaT3oguaMpWN5Zc1KFkCvSyFjdBXHHiyFdfon4oWKh58jzcDseaLD9Kdx64GX35TkJt2RTrCD17KspFtZS48",
  "key29": "4Q5b78QyL7iaEsSPdbaCgdViG1VfsUFgAARWSxV5EGRHJr1ZTG25heVWcDjm1QSd9B8sEtWQZ9ZELLPAh3shWTZP",
  "key30": "2x1DRxDnsGsdDafto2pLFAUuoUSBM2B7Pg7BqCFnFwsobTWWNyiNJ76qpxiwtoLEByxbiZf2ZD3g82Y8Kx8gZW4M",
  "key31": "nrHJWCS3Lmch6fCGNE9JJM5dSb9Los7bj9VBUdgp1W6Vzb1kFio98ZxYQgGiDRA1FtMeQuAZmpAXjepUqhm1h7E",
  "key32": "5jUpvF1ZSR7xPKM5BgfwkZwN2mrCXAmUD6h4M1kngn6BM2GZgrEbr75FXhGhFkxcNWrV9uQf8x8aCdjrEcEvvfq9",
  "key33": "4MJLEtpotiUCdQJvHL7kzcjHTJHC9xvnt4jQjFfuzYpaqXjEpVTXDnbGxj3hj79jnHvaXfi8CuBTKdJ542Gb4Abm",
  "key34": "4A7BYcJkvUssY1Ed8eV9YiHMQHqXkq18eYJGFiquypWYDa2Y6gv5DLU3E3JBW38vdzovxJTg2W6G7DHKBgXimfri",
  "key35": "5LXsjDc34t1VPjFAu5YswPWLTCgNaaCFsDYSQiKNBjryzGDaNKd493vaooenLZty9W3t189hwseR8HeHpvEv9HaC",
  "key36": "f794iJU5qFTtFtshFJ2GrqujX7aNk27yMjbn3JBAnbpvAHLS1fpKzuGacYznSpJfJPQRtQ2CURW2ioqnXMYFu65"
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
