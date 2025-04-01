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
    "4ihjzDWwD7FNx1jHn8W7weSk1NB96cjFadwdpA3tyhSzQZK4NhvYS4KW67VMXrewigQvsGrhgw8fQmNBxP43wmed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CRxmVUYtcoRuSF1HurBypvTAudD1tZ51EpwWffDFCGc1A7AqwY9PyYwGGpaMpGGQSmbXAUUbuBJWNrVeh2Q3F4X",
  "key1": "4yXdU1d8EaEbsDvzNXWmJjmJkiWn2xog9VWQ1Fe48JTWs9J6ChfdLgwPpSFyqazLGTjbkAKHZ891xdPMS5yjUyrD",
  "key2": "48eSpCMcN744A6CPNd7WRyt1YVaymTUWLMiyj53aTZ5Kj5mdikQPWCNjNR5RA8HZPCwPApuoYvPvpEjEfAYACdDR",
  "key3": "NiKeZnP6vFgk7CYF7rsSYujLH82Vj2qmN7KwCUtu63UDLk2WsBh8pf2kRYx3HjoktqLyPAaQ4H5hDbxofzBHMaa",
  "key4": "367BCpnjN9sWxmhX358p3NjSs2gZ52h96bugKQLJ2K6DgmxokXNzcRaM4CWYx5wh6kjKEuJ2JKeSM1Eu6iT1WyMp",
  "key5": "65tjU9RYsPTK8bpYbnPAVQyRhydqHfxcBxnaDQTkx9gZdSaVBEPuNvnD83waJ1tpGZn9YgKypN2eQ2XMwmr4RWef",
  "key6": "3xnSC4C7Qj6yWz4ooZcSiKKdEKzmgJdbnnyE8buSYVxGjn99sZKUpxoEtYC6TaBpbpwGkDyTeLGP2xQtQu2K27Sy",
  "key7": "3y8q6X6BmiDkjNmz5T1hNTh8nr8gHfEUxyizNFPNwGAvshH6hnuYwujFSxUGoRzEiXufrhBugKboT1d1RdgNbbcg",
  "key8": "GJqWwJp7oowSnYEB8GdbMnkDxt8n9vezouqfQ5UfcL417zpuNBf5JtfGde9UkNEhGWH5hZ7fhFXcvQVhJNUh6tk",
  "key9": "5ekwH4V5BvJaLmBvkB7LMXXXZbJCyTYnYwstqtGJA8zEPaCDByFExfEMgcrWnY8VC7U43yXzunKvgw2rosQtVZCe",
  "key10": "5nhMyVq89dYBo2Cm78xU9oqsi8y8syF97HixiPHd4hp9H8Y6KvE6tWLC9FJtUdenwdUNeTo5BnahizaSjiDzEcXU",
  "key11": "2Hhx46p7mYBHyFzrbbJiBijBQ6BHcCgohR2V1st4urk3vtBMa3vBCQMYYBHjwTXD1zdF173kFEjGcifwf52h9x5v",
  "key12": "4Drprw4dFYDFCA9R3gPSNQTMNh1WA1FapegDaABXSdjksCYT1Yy4JS4qhDZmJAvAe5V25n5htq85yqMxLCpr2xd9",
  "key13": "3f1TBQpz3ZsM4fp3pRa5hwekLSeGnCuFmarETRxxxFBTEGC1tfpxHLtwjsnAn479vypbYfyrhZEPwAdEwbW2ENH1",
  "key14": "2MxdbsWQjvcH1xfEAR4qGjnYeJuTanV1xTUfwKaKRboLZnhCNfmJ1oWDrTC2q1nhZ2ctxFhSRXTgh7fjgePA4c8W",
  "key15": "2atB7NcEijn6AP7BAyF3jdtZMs8XKqMcamUSHkjLk9Upf2AniaRcByrjDBMHjGzjAZ7vsF7j6GnecpXm3cvkpTJc",
  "key16": "5rdgtpZEYpnv4W4uKdPVkLa2JUmzwpxeiiQetxPit4TNBCx1mWZpJLJgEMS1H5Y2apT6nyhF73B1ZZTh5is17cQb",
  "key17": "4mu2oPBoB4ULLccbztSS23RWrkjPiJMxJ6Wor2P6DmFURtW6PsyQ4rxSccvvi5CZ2h1LWfqDBS8VczemREk38ZRu",
  "key18": "2PxB4Az1ypEtmFN4aUGZFq7ZhCHmHxzKd6aK4eTD4fdUGY8SHLnX3JtphRErkvbRA9AzDoXDEN4VeAakHt9PtUDQ",
  "key19": "2PoNcTzjz8LUrP8MDuJERAra3qxDN1cBP43SN8wMacUgfhd2HybZTvKaAzcRvTst3SoNhZVJWNmcNgeKXc1tK265",
  "key20": "5qBMh2ppPif2ndqLba3vTrpgweYWz8vkvjywpbUn75sunGiVUgmAT59aZujQNU6wtwz38xVT2LUa6j9jcfw6KpYZ",
  "key21": "3pLhmH88vnoDBDLUKWUXPDXsweqxtEtNGHj79EeS57JRaXeH1un7q1s2LyejeKm1BDMC8WX6N6CPDFZXLRnpPixy",
  "key22": "3VtHgGLVvDLJgwNe6cwabUdxMKWFbdEBdNYybvCxSaCXRYgDVgCaSeFQMYBfNJFd16jeSTJThtMri1ZcgBxGWb2m",
  "key23": "4ePBXCSdmVcghNj24WE1dsXBZs2B48zsws4tyDVJpQ5Hu563CdET8NhN4qr9aBVTCCNtMTnv1CjknuoxHUK53muL",
  "key24": "2apPL9we1eFQYFR3qJDBArEBqGptqo5CVrCCSXLZrQqacG3avapRmtwgqZiGiAKXKQWPiY1FA1VxTq2EQi2UdpEt",
  "key25": "FDM2YiLxCQW28bsCNgy7zkTVyTAcFLykZ5Zw5jxWUZurUdcjTf1Buvek4g91vvzkxsSW7dnuFdvx59jRqgjBjZp",
  "key26": "5WsYv1kHtxcWQzxHx4DjDwURhVDybzeEVwzKtayMwiXQYRsB7ASQigibQc7Z6vFtHyWihWgznnAeuWo4yf2Gjsuy",
  "key27": "2YUReLJoroKtsqmqs92PPMeQ61rd5rSSjAHC8Wndbvk7mNycB4jQXXxKFrvgxtb4n1ok4p2JB6NTFhzb4CZcPGsK",
  "key28": "2GULFC6eg8oUyhyHyjWikb2vNPjNWzJdj3xr6MXSf2Ea81UFopcHUpoXeCNZUzsuY2MYUhoqhqsYTr71ScZxUnnA",
  "key29": "sHqwYQfrdh4j5DmbyiC4fwYGsFm6XRVhCyWdXxeBzZ9uYmeX9BVipmcv419HaN75jAd2HZQoZH4wQeCi9xxS3XZ",
  "key30": "4kDYs9U5AnWKNnoujSsGcKeyw5CpeHefm4aSFLo9B3anupBBijbHDskSiUYtXr11PgK14yYGvwtnzcbLVkWzyu4P",
  "key31": "2LrJ29scCkuPRx1Nw8PRHjuzwyqrvQ6nEhh8rH44PbvJjkVAQcZup61kPXBfP57buGvEEKaxesguYuAtTDAkpgrm",
  "key32": "3DeCRr8UuBkeMWZn7rKaw67PHKViPAcqsBPEQ44hqkCiHYZQbBnMpuwETzfGy1BysqCDKne8UfKmrmavJBBamBzy",
  "key33": "23raiLu122Qz8n6HnyHYSRiC4R3rBMTFEeFCsrgwKZ5NKDuHrezFzhnEHfCKznDP4aMzHrSuzqbHqbMVkWA293eJ",
  "key34": "4RwmrassnD1gx12xTpiQba85owr7x9cgycJLv4ZQpoWb11Mq5aFyyKKerXsUDN6roth2fiEkiJK5MuQGYBou8CFE",
  "key35": "4A5397pyFpAHt2qXD82ch6XdEG6p6eeFvAQ59Z6g68FQDQowmpchHEG1rDXWMhkcxJERH4xkYYmqv8idX23zkKA1"
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
