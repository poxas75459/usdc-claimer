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
    "26Z9yfDJaqCwZZQD5TBqDqafrtHh6ffkiQbNbLHK833LW527Taxp1rMXBcHByeb4KWXjRAi8BR53bdGwA5KcxAA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ocnDhw7u5tdhVPU2ezZwn7ESyeLXXrQRy52Yr86iVEBP4QTySP3MhFgTpMxdRQRUtHmnaqnDzzpuixYbKH9hHCn",
  "key1": "AUqjy3r2YwemkE3tjiyhpbDvXKi12mYBTFWvzB4H9naqVfww45KqXpoWfgTAaJZJDk5PrkGPG1bzEgL1kqaev23",
  "key2": "2MTqg1v96a1VgWMctuSZPYkMs8vYdL45G7HtUryKeEubvZWDR9ujF9ye9FaP3zXAumd4ww4CGkFijmxmE7svfi4o",
  "key3": "5Vf1tBUAN6njD53DxtNqvywDdVt6RwDRMrrJaSxcJ9AqBDT1pfT7epWK4xkZLVGqY3kgCbVyYY2bLR4LFBNT8yAr",
  "key4": "Ja4bFQcJgc7xSu8BT2HMm335TD8CTDobaZgso1KhHnEcUyknFH9QigCkzBAHnFXkssnZwiHiDxBq7JxCjqseKcr",
  "key5": "3GPqCRsKfq7bYTaZHbFiWqtpnrFYcc32p1S3F69CC3QRmGGiv4JHn7Apc1j2Jd7QdmqtGmrdCUMu4KBZYzJA5Wss",
  "key6": "XT7e9h2HniUgMQ8aH3ksL31bWAGPvtghibgoXdCGHhyAF1AGxeDoRE1Ls2QmqEvzNdtBV7TjrMu4dQztaotmdsC",
  "key7": "5cTgoEjo6zTbiFBZ77xVMarUvVPZibSzNKwbHcfuLGvKnjxGg5V2hYQcLGARHj64xrpxMjNggTaP97J2T55anNmn",
  "key8": "3ZkgyWUc2FdGYAJfa7kRH2ZzQvFG4zcxUHQY4r1bwxpzPcKrPJ7V8ex4mTCnZEPmJeoa76YiEj6ToKXmY1fEftZy",
  "key9": "3qjbYb11smyt9TSvQe3Tk7J4Lz3kBSKgLkMczx2fhFJbPijGVcgFmSWfAF2272HTxqfkgkysjKG5UiNq2kQD7nHk",
  "key10": "33LqC1BxXz8AnF8MXTjUDDHwyxjPx6r49bAVpYD2Hx8hr5dSnKw3o3n521aMjspYUpEgBptxBGB2oqj4xsWSbnc6",
  "key11": "3Ynhs7hRZtVT1CQnDMAmTdkchmZee8fAyfpixEHhVCeyej1wPJNU4fuQWfsEr3cfzN5Xoag39VTWsz4uSc3Nx8pD",
  "key12": "5Ys4AG6bQQndQFe7mV4aeBknkUCqPgs6PSakgftzMPdmzqfHKemuuMFrcnLZRfrMaXDZxj1JRgtKBmJN2odfkaQ4",
  "key13": "2xWdagCiBDg1fmUQWVeZpkP9dtPjGAmwiPNpwmsRN9i3L55kTF8FpB8tgFsaiznCEo3DdjK8diofL35D2EQ4XqVq",
  "key14": "4BnnjfREedvTVtzT38rq9Lx2NFDrstEC2GuJskT7YT6xd9ZctcT3LUGguKKXfcL7Qe1LXdBGDdACXvZkruTzjDmJ",
  "key15": "5nsVcCEoXQYwQSei77CjgJxSZPyr3i9psTR61XydPMJxv4sS55mupQks2dPouUB7pN94TKgQD9yMAaBs6AqV7dG6",
  "key16": "4GUvZSo3xYFwWtiWJZYXMVkKTaQkqW7oFpYRy69zgfs3HV5KnEagzuJP4NoLjjrGrVfNNeuGFEaBc2MjpRsVyPrk",
  "key17": "54qPnncPSvTfNowH1gAofMCdc37f9irkKjq6GBrzBHapjUbafVG75pHGsQm5zuzPPJivrqRpJCeRzk3ZdnsCudxR",
  "key18": "FKA1SCvNNmbqwz1TuySFnmb3GXKzT353HVmQqhV3Go5TMMFZMby5mZAM9CbCTivbBHoy22Qp6LmZYDFQUXFJsgm",
  "key19": "4JMGKxGYk58yt4zJkW6h6uJKyuz9QsmqLV54xx7VuX2mS6UgzzireTp9voSq2Td6eeb5Y7TjxqddHsUxyRSPPX42",
  "key20": "5Bffh72ZYZ59aXRQqwsLTUiJ6FXm2m9AjG1CnJTCFAPwinx4XAdBonAyoNH8Kbon1TAoREWzD3sEUSBxzThJNVDH",
  "key21": "3jn5u7DjEdzLctdVwR2AWXYdBeRQpN8rk1vwKn6rQpfZRe7o1bWoyxFWAS8dBT1tmp2a725e4JKYTbaJVT4wYT1f",
  "key22": "4SASZ7AfQxAox2FPNqbHdNcaiP5JN7pnMTAbRMsbgRZwR9HiJfVic66GbrajDT1d8WfGB1CU5aL8kNX3RcTFDKZJ",
  "key23": "3M1cfktiFEBv663Ru67tQXZzeB7cgfGEYnaWsAda6RiBd9SkeFqk5w6SE8QDZitFf894eZtMvCPNkrDcPR8HsFuo",
  "key24": "5sT9Y36PG82LTVFMsAaNiaWqNMmxPF5ERJsKkFaW9goxbzM4xrnQQVLiGZMWJuxJiegdS6BM1tRHzLthUuhZCWcN",
  "key25": "aasMaZekfedwXop28mxatZaZKgxYhZjaBQZsYM48SRRxvy5VFTJGFkrv3c46pnbFv9wFzrBGau1TFRU7M9ySSH3",
  "key26": "Rxvqq2KztuDFuiUS35NYuDHehs92AvuyY2m32oy6XgrxUpk3faP71gghfNKHAdJeaGRsp2KtYKxVm1SaSAtTVsy",
  "key27": "3jv4RWX69Vk6qKG4PJeG5QA1fqJi6ytwrjTWEqzqaLkmBYbjKcBJE7PzdTuphkfW3sUBGVgDZNyrSqVV4XAnMnA9",
  "key28": "59tzjfDLytV7RwYpZHyHBGXLuTE7Ks1z9c8FPVHazmZhqqVhmbiis7QddxM28Wkc33pwZaVvZFvzwvpX82Tia8vu",
  "key29": "4aiWkjbP7RsGg6HqzbTPPYPUhrxBtzStSLxfNvxxJxSvgBLXGRZvMCeSSKLAL87c84V1wT2UjHhJupitMNRXE84V",
  "key30": "2f2uGQSVZf7nuwjmd6WFwU5HmA8A2CyTbJuNDVfzgwct3nGNDWNkewbciRAz6hkopgrR5gEKc1FEhFkE5RXLMtDY",
  "key31": "hv9RjuH6c7KqiNvXUSwFN3GHn4hbMP1VVd5hFRdqAXgJ1iyo92DUoZ4HQ4HHoyiZE4EammbdMQ7rHSirPnUmcwe",
  "key32": "4RcR1a6BgqamUQoHtTMzXwu1HnhmoQWJu2WLhrU51ReQ932J94JrMUo5E6q5k2Tg8mJYx2MxiFAstyy1Y5unXUNS",
  "key33": "3piPJz1VATqWJfhrv6X8RiDySfb1hWjrsVqNpaRwWsZ1TrzLbRYLe1XYYkCz9tLyyE9UuAEqV6Xh7bGnj5HFrJoD"
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
