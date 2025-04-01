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
    "2hXaZQTrGfbteNRck8Mg7zxcNJNmme6jMPfLjArkUJfbZUmXYT7FVYqsVExvRJ6HRGUpw21VDMSJPT3Aymphy3Ne"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ea7Ci3E44ApsSSt65NfuiUEhakJbHokasrfeiuRrmPUgHJAFP8TaMTEGmeFzApZf1CDWczxerePgSQ9koYt1yzB",
  "key1": "5SRSHNbnVFuVqUT6jxC2wvHVA8uYavDET5oW6WoH4Y7aJ5VsfD9WiiybmfsK61U5xk8fKGrVcvRB3fk2hJwJNgEt",
  "key2": "3JehC32dKkR1RkY9J5rv81T6oz8wNYA1gCvnvVQSZf6v5iGPja8qcY7ZyePjRtfB8JyaSL32xcW6eiuaMvSuqvqZ",
  "key3": "57hcRhbXZyd18JSsP7g337Z6wvV5X48jPcE1UTP1YyfNToXgTvv2BurPR8NzZWDUNBULzz14Vk7kdNf78YkzXC9V",
  "key4": "4ocpGohz69f64TDJu28W8DM5GXb3YBHGyJvkp3SBdfJi35e1oJTNZ2mN3Jgi4P1iqoNjTLFbzGc7cHgakGreBn9P",
  "key5": "3Rgo9tTUm5rK5GBWsFFtmkTfqfiX2NYo7kt7GT9NStvjKyWyDLZ34hd5QCHgF2AygVpS8ZzgaWdabwhdgVbX3p45",
  "key6": "5mTTsXyBAkdc3aPqyDxoCK847ewEzCKjUFZrUx35CaLnqs8QSBY19ABvDgsL9WoUSSFCpQRoGropS7DZfWQG2d2y",
  "key7": "bSDg7nASeCX4zX2fLKWo6y4p2DbDaPVUb4EsUmzfoKTGgEVBEV2Zx5EP3uVQEtYJXm435chqQnSykrUyWR67Ebb",
  "key8": "5aKEWMLrG2VH9rd8qsSgkWbr2adxcZdH9MYWNasAZvAoYmLjaRs5KQN3abgMXy33vci81wC2y8Pf2rmtWJZ4oDXo",
  "key9": "4quhFmr5jpHBHKT6HEU2B7zoh3ycXePrkYENroQ3gjWjTJFx4UMHKTJXRShwefE2VFh6ZFc6Qd8cY8Kx9oFuPeBF",
  "key10": "3i7jfBs99iGK6vi9L3vHh4W1NaDv4xDqtUmwoRTabjSRMLBKHvasZTS1CBDiFNuFEi9smQDvAfteNA5xnaWo5z4C",
  "key11": "29z9Jvy3bNaims1ubbRUYSD67ctAL911Cqgub77hsE2swebsCZq4aVLyL6zBDuur7VChvtEhdpUxVzhu7QCUQB3K",
  "key12": "5dwsEnTQeQqqgg6jrJ15fV9wMgpVLLxFQPEio4L9UBh2fkCu7q958QZ1eNUK77M14QkhbL6Q4sijNLG3AQKKGMWF",
  "key13": "2qfJtnCT6HecqbFDtw2vUiN949VVBG3trcdf3ooi9YKKMrKpcu3sknEpkCiSVLVRKaZRVdeJAeDmj2Sv11FtRvaM",
  "key14": "48kjbbNB4EQGnSxC98PzWBTAUPgbWraZwyyERahXp3kiUxqthTwa9RLD1CTiUgWS296Z1HueD2MGkzfgCZcFY8CZ",
  "key15": "5ALPQNXxPF1ojGwkaPFjsuaPMimTZa67PtTePwB9EH3ZcN2ZAHpQhJ4ppVAHCNf7yXRR6iKGRKqoVEm1FJwdU5t7",
  "key16": "rMC95oRBACBgPsKc4K1P3Ud6agMuMNwaZAdufc7khVogn6ziLpuALPbyEgxRpo68YNeFVQD3F5xhQuaE5c1S9f1",
  "key17": "3zcjV8BNdbEwxbhSiWexH9JH99tzPz3TpAht7nivaXT5CgEFqM3zyK7DaCrNS1EzuH1GLNQfMEREor6R6643TnFD",
  "key18": "Ukd3ww4vQq2QpnVBb3PTwP5v7y49e7PAgWnPVDRzqbHHrzVyzHj5rXr2co4zMXsSD4qhLnGzxJ9FNTEjp91T2tk",
  "key19": "3G83VCyGEUeDV1xeuL1K7SgfJQvZFdNBQmwt2UGxodqxKsc7oQRHEQJmJMDVWLVAiyNzDmeiNwA4Kpn81EC2iPmf",
  "key20": "3XEpdywpB4Pmkmbqw78xRDPmqo3uavgCuZUjLiaGEQMzmE1cBZKQpeGa6oactvYhRBNzF3MiazLZdeZQZEVyPnNA",
  "key21": "4TtBhoM3JHZF76AwdYNYvfqy3X9s6HohUn8tYetYpC5i6nZHw4WM7viXB41WdsUtK1AGWkZsuvm4uzQ2PoFcCwAb",
  "key22": "4uBrBBXuv8Uow4VdsFiPgB86wsCQ2rg5LAiUjUAzkopgAmVQk9fv6TiudzK5Xvff1xkWRNof5beWN5mbkHvo68s9",
  "key23": "3dfp6H8bedVJGE2goVSt1WhdPszTmzAjx86cPj2EFtEAsRyEs9izKZyANkWKJp9fL7px5yMJuwvGEWpdGEjzm7Uy",
  "key24": "Wr9Fs25f7w7572hDK8RejFEDonr9EyzSP5qNbAmhyG6wFKwNQf5cGPyrHNSmMqtjCLUQwdoc2LzYgD5YNwhTBYF",
  "key25": "4mkKLxjHFPeNqbfch4nTQYZmo7yjEmDuUcatCCyRbGYUV9xLc4dQTSNJpKMQUjppkmVgqdcvPyiJyMejKJbm64Q3",
  "key26": "4M2xmYHQVEWUv13FeF6qCWzy4Em27neeBwaJE7BV1RXnFW1uMrda8oPPUxPYhv4npj9ozr7ZKT3QH2Y5QR9rDZoA",
  "key27": "53xGDBN4QrE3eq7mWyCaX4643z4xLjxNc61co6qP9fr3uMVvy2Td8WjbPx7iLP1vbajWpskEu1eUGNm1nDeWoDtH",
  "key28": "t7vgusGvq5RMQDaQrJugqyyFzcv3W13dUtNTnG5wcUAa2yWG8Fst7KFwqSiv6P9nQukv72mqAA2coKpmB5xSpEp",
  "key29": "5Xi7VfeCjjeBRTZNYRHLHsEbKBicpe8hWhYA4oxYBFZZGd5xp914zvVYfYmd4oniG7aDBsif5JLNMAXyppsMafw4",
  "key30": "4oLc5nkE7tei71SXmQ2ZqtPA4ZKhw9cjVs79KbvhjyLhoSdbn3pUT7zZZUAKNBCXAyH1VntgVcQUPvQbaFobpaJF",
  "key31": "43tvAg421bjX9M1J7K41yk3Rs5oQfydTHh7kpPZYk1yLPZp1ZiFQYFeniQxgrNJmda7fD5LHsmntCGtGx8XHamVh",
  "key32": "4sBE4AGJBScB3wjoY6jBVQLEAMrCRfUqC6C4VRHhoLtAP1jU6xA1Ry76Rq6cK3YixNEEz5ouAQPqmt4hpFvDbd9W",
  "key33": "4tPHy5PrkAVpXJWKtPpVsRnaoHz88MU6sTAcLfAKWrDaNpuMx38bzwCKnLD2rHEzX2RfdFXiU2RVnAkmamkkGE1v",
  "key34": "2b7Umbu5wHyruD6tGfyyoJYsuMY23c7Y4ai9q3tCqDFX8UPpDGCyh1cLxsPB7FSMfC2YSu9hriTGJtQbdnZqGYv5",
  "key35": "3uLjGz5HuTD56KUMen1G97rmHQu4TycpqiVGxy2nFn1D8tLAqg7ahKPnfxcVhxNzheRkz8aUrD7QBa7yjCW7T3E",
  "key36": "fhGqjcJZ3YwMU1zdHKdHkovJLB58bL9ndG9T4quwi5De2X6amZfd7iSPTx5unha5k9trQjyc1KvMXGLBQoRZPVC"
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
