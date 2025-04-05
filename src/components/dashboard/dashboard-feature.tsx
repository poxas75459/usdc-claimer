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
    "5RLv9oe1nJpDqDbHqR7FnJzgh1umWb2USWGm6PPWm7NRgiKXUfWBzPj1zNr4Yju93bDR1jeSPuEQheq7BMNnUwrU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CxfrodpUYgLjBUAcwZazrEdzfWKPeuqbWwsVqGQsFVFFiSvEhUWabZdrKxUjM78aNKMGG2hx57HeAgQ7rXNn5B9",
  "key1": "3r9rg8dunHfqpB31t8BwiebSnuDdZNvn7p993VpmXnGTrg9ccBSPV6dfmr4SuVyFzYRjqr1qh2AsMb5vW4FbyBJc",
  "key2": "4toP58umGeDhoEmqjmJVEb5nJcSNYUXD4GGRgN4872JJe2TGqNqoutJk3NYsvDzWSTw62XYWxoiaipUF79CDGxyQ",
  "key3": "23HiZhFGdrww3A3siA1aQ7ujwAHY1N7aZ2qqgnMdw7Dk9ocpm6tNAcCQeyBEiGKrEhRhHeEYr9PB94WpvMwAUNfo",
  "key4": "2G4zhDYGfug8fFvWqoa5TVaAoiordsDSAUiKpmuUtsJXnSmbqZB4oM2nBWQMKQwjf3rfTiSBb3FWCYZkhdL453Ys",
  "key5": "5PoLvmDeGQFPkLpYvF9ZUz3TATFkLvPd86AuSMPGUbs2sah1yjYhSKriCMsYt7s4LSGZoBAKnhupfcDzH55o2WPW",
  "key6": "JTSkb9PDm52NKSZXoBGWmo2S5RJx7KDYELVMyZocndkhmZAsfdQLYT7kRYVngPggpkqvmTs6X48WjLi8ecfqL42",
  "key7": "2uieq5r6uquRckhqPziy6p4UARVweq75QFQyMUiPkthYfhNu275VjbfQhnDogEmJ4BSaGaCKywmKRNifPVBwwJLK",
  "key8": "2U85TeHuUFGa93dTXCotN6X7SQrcDxXztWDfPaxvZ2fvLVonx8DUWHEk6ZfExHssBJChi2kb1matkTHPadSnsbrX",
  "key9": "3veab9KDq5nR75jGcErmD2EoWya428diyo22yfSC6xsfSh18ZDC6geEgCCuw4fe3jC8g6GT4YqejCn8BWxt1q7W5",
  "key10": "GHpNc5wXh4krjSnWRT6C4JuvPRDfy5tMUDUWFhxV6DbQnj8yqRdBoWfY3dKWbtrG7yd22vj2RbdNqxEWnqxWbLK",
  "key11": "35rXWGPGKrstesgCMRAHLchBzz4ShnMH8W4FYLGw4Puy3HcEo6RfgfFM5Y4R6eujihH2QxByN4iKag5PUhCZmksV",
  "key12": "4YY8gPHtzngPmp89ZXbuHfKva9MybkbvdQXqgMhxGAXReDKF491nLS1sDhGAb3WF4XEDPVasKLHMouPDxEZaru1i",
  "key13": "4W1y3TiwddLCNBa8dE7bZUQwYbmtaSTogxR9XyyzaDQgP2xTEzzwtaPTr7UxdQ4pj89sfuGXPmBe6zYvqUwAs3AT",
  "key14": "4KvRkF3WAYrvRVadravxCqPQ1bZH9VR51s9nRGQSunP4ozZhcgHuPFP8AZJhvcVXSjdwxQke8sDgiZCP7TmSyLKH",
  "key15": "MDpxhFVNNYJf8J91kqJZg1RkLG8rgKg2To4VMgSx1Yuc1MTpacPXmVhBhUZVz1gNZe7C2qriaE6VxENet9yMymR",
  "key16": "5AzEusttpDZkw6bmwBvP7KSFZVLy7ZfbeADUFZV4zq8azqotNVdvtRdg4ugSCtEtNfz8eJEzxXZT1xCBH5QoAEqM",
  "key17": "3njxwBvJ7PAXamBjnDjsv5nTHn4gbdMidCstQSLD84HNArVxWTrZNvabCFNrt3iPK4yNuJQZnpMm5QVBJPDYDmia",
  "key18": "3zhjVLJoYyEMnuKXkQLSGeU2BwcZpR1y9zkbPHeXCGPhsG6Y63RxEyqKA3YjSPvHsZeUg1SJ2Qn83FZQC4Gudozo",
  "key19": "fnnCzQhvQ8TNgkTvrg5b6D3Ck9GzZuvE2CwQz4kTmp9vmroRnaWvSDd9PGutDNfyHRgcZkqbc8pbgvaR1L7GjhB",
  "key20": "4QwiuDp8FqNYbGQdAG8ZH89ZgRWm1tPsDxpqENSnFd3isGVNpW1ysis21XYQcM5u1bbwvWfC7dkX8AcaweMHAKVc",
  "key21": "DF5Qzvsz3YSErNxPRRjzq1obddX4c7s8QYdDYZifQfTyhMvU4bvLjQrSQR2MMrhDMpNY15rn3NycZLms9QnWf85",
  "key22": "5Cu5e4G3wsEXqVPdYyG1AF3dQiMaaRbVrw84S1fzEh2rawd2gy27bqiuVRoh2kQr8YXm9HXqpd7BDRgY7GBcAAFw",
  "key23": "oBRz3NSnTGswk3JunHUgiEHFRkJQNdzR5F2LA2dzGZP9ctKDT1fGh4B2upes7txdtxytGg5F9dkNCeZesKSGufU",
  "key24": "4no9YX79X995W31Gxx531q54wrLmVk9BYqyX6Q5uET9Gim5kY2SN2duXDk2VkqHgEfnSCMfHfqmzN3nV432h7cz3",
  "key25": "4mxJ4SSuoNt4SmnrPorg2VGtLoKSDgBL6GHuPBo7ixSbsiXPEdpx4ftVSFbjy4UphdFryDLhoFeM3EcKMyfcRW6T",
  "key26": "4ZWuCT7CnjmTRBjPoyVtWhB2FmK7ZkMBQwCygKN3y8impX1YB9RSqbFCXoqfAqo9VLCGDqPvE3hkMpt1d3MYxmMT",
  "key27": "5Et3953A1U9yGnUtAnGLZzqH8EK1phyvi1moop78Sdqv7yqrYk4TF7GoEsuaaWpfRCPumbSd9pfsCCm2Xffi2Vc1",
  "key28": "2FR419GY4rQyKhESJnptH3UGXgKNWrHww9V3jp5gz7uRxtPh3WzQjRfarygGZPfsfHDY2uyvNxjTQYvqMikCru2b",
  "key29": "4Fzjn5ia21fR5BejQiGceKoghQgZuWLMEQLeQMbjsRq9LwHb31rvz5iZRf3AMNoZpwnnTsLSf3cTKBTtGPMyxU6K",
  "key30": "4QeinWuyZcujffAczj4f8so9382mCQCpkvzNbDF2ghDv57Gt7uGTmf2vGcRTHua2kES3txm8BKNNrbkezy9Me3sQ",
  "key31": "39J419Q6BHdiRfpbRkQpCDLX5ZFJLB2tVbzor1D2R8QL1z6nngkoHgKx2UqvayirSgBF8qKWcaxaHkWo6QZdVYPN",
  "key32": "4mo5Ar34PgoNkYmbi547ns9wxtVL4evtjqgpKPSuLdchptdkHv4qWYW66FGTUBkrfuTCJZeRcUzJzTekEA3BDfNc",
  "key33": "55cv6yHupKbdkwgo7frmikwWre1AhGSBVyQWEfv3iksdc1yd4UKrnhjDSfngzgzqmGRZ6QEHwB8ggdjnimNieE9U",
  "key34": "4fEHQPrggrpp6VuBvvN18gNdjdyVuVz5zqVj3ntr1APRRF3XCdNpKHrMbC5KTWJv2Y95bh6Cdpcd8rB1BXGfXg53",
  "key35": "62yb4GYQJBeu9jRceToJ77kxPixSx7iJE7BrPDsRqC2p4z9kx5gqfmrVHnPf4J89JcNL458bT8fsXNwfWWDvYu9V",
  "key36": "54vfTk8bAQKvQ26HrZaokfiGpyFiCfNVXHui8SdGeGBteiZH2Q4jPCQtMh1HH9XjzHHCnsjQVtyqMqYPeaKEEngG",
  "key37": "2VN2wAQmrSagozpPzV72VzBGStYAFn4dxgDSqUk4eaBBXELd52iK594mgjY4GDvxyHEqEgvfcfxWnpF2NeuRf9WK",
  "key38": "Jjag2J7Ecjgv4KanfJZEkKUyrzM3TCYh4wSYKpX4D2H6huza1EwRDuP1QasGzSUsUz8Xs7VqpoUoUHy8c27W3ZB",
  "key39": "41R3BFqvbVRNukNM9zVb6QYdSrRvkRhkdE27dbVTsJ7EMLcHbc7gGMxqsDP8837Mc8gDtuDPJ2KeFv6QpGbJivSB",
  "key40": "5LvLxqeYEqkxBUgnZEZ3yBaMeGsZkaq2wb79hWxWMhEDqDqX2Ah3nSeGBCHy58Yddh23ZWS23hQDzB9ELmw2Qjr4",
  "key41": "4tXQxEvfUCC53n6mHgBrSeYfL1SHcYHKBs7FiD4s1yA8sJgfWv7dEDwixLB62gYS3CKBz8Ago7yjEDhKhuC8eZ7K",
  "key42": "5qEqa6VoaifvGVkhsYq7RmYa3rxnHgZjGpnTbVDZyGhZCLbReV4BmRsS5NXgnVkXuxcwYHnBUfTidhCE17GJqyVC",
  "key43": "BeSfXmivJAhk49Detu7y6pkm7cDiDBsSMX2RPWW6hGkzfwcpf3bXRgtecSMWkvKGK7duJ7f6xTfYNYQasXro8RB",
  "key44": "23Ggc3NMy4KZdNDKL7KWeu191VufH7oScCNxvxTWiqSTxmkEgrLtnWRvdZaQyzqGUqD63cwKYGvyRLD7ArTHhVLX",
  "key45": "5i2Kvrqo9eWNB3TaedRA7GMaNk92VrFqaxEdo1UQCfuvGjLx333y31ULvEe7kerFcLPYj3QMigXvqXgYqwfbRWJD",
  "key46": "3krbBY5dyFFY7a6DUBC2XMQicXHFPQCwJJ1bDtdk9Hynmjc7aAmNPcGAcW8MN1iscqnzvg5oAZoz6UCajh8g6AB4",
  "key47": "4Lw1e7GPNrw2t1pfAnn6jnCh79sQ9eT1EQdX2XWdtN3YrcVDkoscMCbB97Fvdm7GmrUhxuNa2thhQzDT4j3NDMPg"
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
