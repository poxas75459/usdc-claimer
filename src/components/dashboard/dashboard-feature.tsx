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
    "nNhrtaAMPNgeRwtzjPjBRgBMEoQ4KTF6Gif3cQKhtV3R81T21t6moR92zXLRKCZEFMx5Pbi1Upg7iGypcsysR68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YFdVugPoiBzeAnY7zxk58fiqBJi3t7aPsyubpTesUace6V16aCyQ2aFQtnxxoBFdqHsDCbQxKR4zvcdLEwmpoc6",
  "key1": "5PKuVPZc3MbM6tgkmAbEHEdxWXhZkdDH54JeJbVZmdctXPXnfD4RUAsRTo8NRbDgD3P6awZPVQJC4ExiUQXqZBwA",
  "key2": "3xgvSxAjdFXixaV6RVpfHdZN1REU4Te5kPDMymANYygyLbXvm3YxPFGT8YHj8T2ndMURoBvtnx42yPhdZto2kLbi",
  "key3": "5zU4w4bJeim1vigG7xkFacBnpDvkGxDnxwqsinq3qv6LQAC6HMfwRLd6WNugUZcQxu2U1s73MBd6CRX4E2HUXxhC",
  "key4": "hEQQLQcQRZabmoCGk39FuPC9ZHiggsyTXRAJYpDcK9YaYUcLna88fDSd3c9zWLgMKFwVdszLHhRCz7yMhYdzhV6",
  "key5": "5nMPMaP4WEyX19TKGgSGbnghafXa3eaeHpfhHQRF8HpUZiaC3Z3XnUQ25z4C3qW3qSEfFuXi5XJZSFh3pLtwNKuy",
  "key6": "2y3qFjQSA4qLUHEPQ7HpbRQRSXE2raepTpvpdcT8hDvHUEGFwSfHEkDGD3dEiYptyF6XfJKgDenLgxRk6JPd6vVz",
  "key7": "CmTA8qbcBrKGsopJhRHR4YQJTwBpGyb7bUgirnvCx7UcR7THaRgaiJTte2VzsyTQFdnvtquVKUrVT49A4okRr3S",
  "key8": "3giYDeqo4W7ZoHGcstWqXAPd93cFLEGv5Cu7zQv2FEjmiEj8gEKDFu79w6SqN47hhPdcNsCnbNvu5Vb14qRDPDwx",
  "key9": "2cfziwGUFMqfGEMN77LWiyokb7LPiDRc2V6RmKoH7HHRVqTy2hcE5GUg4Y1APKm1UE6f35obtdSQNbG5RQrctkFY",
  "key10": "D83PqhxbCztMMJYtPvtUA38QWcEHM91RymNHZ5e6jPAodM3aurJbM4fwXx6En4XwrUjjcMXBEtwqgneKWg9km3p",
  "key11": "4JfZk79zs8tLKFw75iXcG1CJgpxyzydkLer1Q3jZ7hYoPoNoBqx2z98YBnFXyzxmrDBwrx1HmkYuvAkD3mP6sozQ",
  "key12": "65YeEiwcxHXa7hRq5tEws4zYexrjkeZR9kQkCLdvQTciaTdbYJohsk7MNg1PvCGvn6bzBTXDEAi5zUjHQH3DEm72",
  "key13": "3VzJZebRSRc8gJ6ZvoTQBgSuyDcY5G1BeL8pEzrureJFKc8aKYDeSCgrKkbfVp7j7ZYEsSmpSxksivkZppdYqoDw",
  "key14": "cXoyFUT6Lc2GHWJdsfHm1GFoY238eTmWATtWyECTgZzEMSmqENcSSohBVe4r5wLLdijUhrJM9pMxAphGJGR912d",
  "key15": "54FWJ6NwdT14vuv4R4iSzN3kXep2xKEossTfhDZkpwPE95zsgTsunkzdNAuWEJiCj89uA1B414erhfg7PDo37mne",
  "key16": "26FEdHpcvz87vivLYoJqzmG1Zjx9jR9xTc6foYiKSCLdKxhe41nefNbaGbtn9QQ5QuNDSRrKCy8yRdgiwTYBw1H3",
  "key17": "63ogd177H6QyoXRqeoVXqBhV3d7JiJPhpHYSh4SW5Ma6w3bVEUDxMMXYiXxsrPM7WmtppbLeJeps42HiKZDuMhcs",
  "key18": "3aVoJ6cEjLtYKAmy7dVdzEVhPzDnmEmXK1dJP5uwLxCZvcozLzANFf2XWoDd8xyFHLMhoTn6Gyvz5bYFv2gsaye8",
  "key19": "f9L9Vk4yozB6hJA5AbxdT674VaMYksfAYC3avTpefRZ66RYrqnbk41xWpXQtDanYmQCcyrYboGRgvu7LrPkCxRu",
  "key20": "2C39RR3xmiuubudd345Xz7HBfNHGxebTikpSaHbx17n6qBkmHkzX36Nfq9USTaR7sSdHTV4DDhiFiyPec15GWxaT",
  "key21": "5wTKXncMPdtbhvd5XfaWf4ikcLFh9Ez1nBWZbPEUbniThdSoVMwHy5Ev3Rs5KtsvqsoYr5cNx8dFA8NkchbqythF",
  "key22": "b8dBpcMMxYzkwEXaati3CWtRWstZPE1F4VtZNEpD7ic8gT2iSshRScJvSia9vLEK1mLDh19QSC5WBn2gzJ3LCv5",
  "key23": "3ody5tkbLVTomko8CqNdoGNQMoWniY4qeXf5kvrDCenKdGpZZRXk5B8QYJsjKxKyFiYuCWXjeio74k7PP7v1ZkZf",
  "key24": "3ai8aQSsAXsJRwo92MoW2U16CzKKw9SGD2EsVE9siir2oBbbUkGQiAnPX4E3bmfQhehyky6eR2Hae8agWKQavVkb",
  "key25": "34Na6wdWCz6ggtXJmVtuHfskKE4aMNEC81nF3ZuQZtdHqhtAC4rRKEbDFPsJAE8j6nAC56UUsjWqqfi631yPmWup",
  "key26": "4oKCJyoxiSZyAx2BGjPGoBS2LqXaW6CqhKuDjfgesX4CR3Lna9AjrA1YdM2JbaSQfB8FeVWgffCnNwAz6okhiTaF",
  "key27": "5iNxT1oSu5iERkT78mi6H1WmxbxYis6tmjCizZQHb47Cpwahd4K7DUz9SwoEeHmgsQ5P4mTGno3yF6RnUJ32hzun",
  "key28": "4nsaTFtrTVMN6VohUv6q19wKfRuTunjuNzyjNjxdgXuTbkPYULLr5XfdNVNgHqiQbEeFThjjqTBMjZiS3H2GgEs1",
  "key29": "568cs3EFQHaucjngQ9c6bpzSrqNZjY6vr4MWmY4H1rUVSJ6aw8ct2iUCuAD8NCNs7Ah5QJEqrSo8qA4WahxLGCso",
  "key30": "4vyqsKbmo5M4ipxU27u7rNJjjhUWyV3HWCrFkS6PaPmAxV9kZnswsyni2qoMBDjjAdzqtEtMperArj6U11cbzqYu",
  "key31": "x9mG9vDzuJLMFn3niVd9eN6gZSNbAH1qUsvRF5tKmcdTUfuk1d1wtTRXE1yACUHfA2MEg9afW2x3ZKDsc4xRp1Z",
  "key32": "2PcTAWAXSbTbfoCRxjSnfNEcCutNrQgtRA1SC3KjBoFR258xQuCMGeY9GgZkBjvmvq52heoQSL6c2JJaDuKCC1U9",
  "key33": "4qDyUGi8fYUYQLb1VgPKvZj92eoJVk7Jb6qrHeqEXgcb5QyT5AunHzsBSDcnuL61KNWrNsJ4Y434HpEqMjoV7RtG",
  "key34": "hu9EpVWiEhnNxXkECP5rarXsuf8tDsUXxQaoD5iziLgWvPmF5aRiuqbT8tUxGNhebZM2RjkEz1HEcw4SUAagrnU",
  "key35": "4sr1zkaKDPgSzGJYdhjFzmHDdBnwgBheoS61M4Yw54wirAH6sv3yEPXFjVDWsi9hhdEetB2VeyVyPNnQGxz45NNV",
  "key36": "3Rzry8GUqmCRp1HCnSiUb3nG1oCMWnLfCYFLBgmxJ3p53Vd1i37NnBRGou9BL6q5VmXQsYEpcJigrJgTSeDwdRg3",
  "key37": "4KcnffSKcWpzmQU9HLcqopiLKfqmk8EyNK8j4DjDhuqak9B3iaA8yRnj8p5YPUmeHToY9ribcAQf9SppXsxAtQxV",
  "key38": "57AtU4iQnXMoVb3kPDP88McU899iyJKeUDF5QzLr5kZcEKKLiHNpguGWanhMex9wXTN2bkQ9AoQSJ4U9ZD9szgps",
  "key39": "3ScRQWhdxukzbR6sNhGe3vQw8sWDmbeGK6CCu6KWkmoPPWDiWe2URNFXU3ekG7SAphWyLY7QMTqrpqM4Pq5J66YL",
  "key40": "31vmLu12eX2Q9eviV8ZZbYGU3CRrJZbimBCvjp62sqjNQG4mECXrTk2SjBMKZ91dLGEe3d9KHNMLf4g6tMdiAf79",
  "key41": "2piWGER4R6WrQJcu3xYJKFyoAvQYQNvTfFmiZmt94UBdfPqSj2eSzLUEyxcchSAqW5cp3GQgtuDyXdyfukmq39A2",
  "key42": "4A49SmLnktRdx1bEuBCGbqhwRq7qAjHvRf7ESyS6x6Ahn7Smd9ZTfVgp389Qqv6vaAQfLDKQ1kYPxmAaxpw1rPKK",
  "key43": "2CPmJ5vAvXZNMFTBJjoW6nkCgPHodjtuodKTrQQrdHc82cQrkvq1e68YTsKx4zsAuGQmH9SPEQwRKadxpbc1kHdX",
  "key44": "3u5bkbiZQArqsQPTEefNHq2B7PVuVDyc4KK4GdiNmLbKTyNBkJrpLfih4qiTqYm5mJhrbXTcWG4Rm7Q9J2tQMYjb",
  "key45": "5jb2E4fymm2vYhXq8966ZUZkwkWBywFqxmDS2wewjL9Ky9yj1jhG4Bp5PXEtcS3L53dBaWzoqDm871cTjAJ5HF4T",
  "key46": "5rJdMJm4rT1UAQwrZpU8xYCqDTdX4mqCAKsPz2mNW6mja91Ufp3EmEekGnzLGWZPfKqm5n4KXecDwy16QwjHqkg6",
  "key47": "4Rr884JSWkRWhQKkGNhgugKKkX61yViU9Tq6eU7izZMtKaLJToaU7SBT7ukwWeeocPj42bdhLkYoK45AMwmtBv93"
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
