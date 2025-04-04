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
    "5voX4KotiQrqpixJPy4Q2T2YN2NBAh9d4EisEibT2GfaDhb2xavBaKUHdaRijZqqNRLjzg7qoAxpVPr8F1gGi4QW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UAxmLAz5AHmo39vCRj8AjeQ17TkxxvhtjyFmCdbURiP69EX5EtjPancALEVNsSDPEu1u2njpYSveC1mnowEesPF",
  "key1": "s8U4eusHP5Wwkzuj6HtNAwAAM114ojQmRoZ3DgJxDouSgYkzLWMLgSP8p9B6v9KVKw8fogeyNMRUPDVFQ8LBGz9",
  "key2": "5FXaEJcD8Xwk7uZopiunZBUoxseDLZgHdVPRXuSPYaEWdDn7dGGJTTXUdXaUBpsN2MFmfLQ8gZpxJpAi5xXrrq7i",
  "key3": "65wjtegTLH22aKnDmgxozabgZQHB6xLgfcyZHZGerKRWgjMsYjHXRDTmTgKHr5xbQuBaLGH7KrP9RGpK36CWdjfD",
  "key4": "2cW3nsfXnebbVXhb17QcG7q7uBmMuLDkF4cDS4E3hMheRXUZFmsgEY1yHcg8SmF2Zrgas6AWq9p5Qy1iir1Dhwoe",
  "key5": "2PCe2augnJUv3rDDyZtciYbMzViy3UGpkiGj4uyLcbSBT3uqeWQFsNDTd3bW1j3RHjoL6K1Mk7nD4cTqHrN7vTMX",
  "key6": "5GPSh2v5zPs7iKKubX4rNvyH2yfsb8UrGzcm4Qh27TUsHJs1U3GzPDPowUURFqGdkEfeJ442E2HWEZfxzaND814K",
  "key7": "5DnMM71HKyATd2VkNW8ob47WdQYmtLtgV1L8YZ2YSG8TdLEafTJjGyunPpr8WkeVi6BBujVbmcdRBMHEk3aRrUbd",
  "key8": "4PKVkWnELWmhS5ZX8VnSp3L6BzP9hNXQW4VK9AjAaDENNMjCe76cXFFEorFhRjSwXdiN4d4exEoQvNptzrK5HVyV",
  "key9": "5PA8VFtjpVGDbRqktHoAWv9T6N4PoiRnhegdJaPFwL4MDPHVFrjpYo3r314ZQEfpx1MzY4h1cjwUfyyJcM3oZZp6",
  "key10": "3ttCwSTPtFSp5hjFdSD5MfREcB6ZqvP9bq34sAKeeywFxdnt6nEmz8E3JkzVNerTL7R5sZCf2Lb9PqDZgREDDcKT",
  "key11": "3pVYLRRBvJJsBqYh5w77sHRUCwXgpzQVPVHr42KuQZo3Cwd19veQ6Hnv4hRHvLtFmHVoWM2ZNUCXcJSDbR7NjvQP",
  "key12": "2Hf9B2udoVy6vFymdxiRQp2sbjAc8T854Pu14tyQGKMLysCDJfRJX8qa4Xix7S8pGdDd49JweU1oPs45Lrywu8s2",
  "key13": "3ezPF5jzAwjeQKfs5RjMxN5vode1jpHctLz95GpUkvPdyRxmeTqSKNUYn8ngiioSkytm1ejpqqmRrnhrnvhYHbof",
  "key14": "pNhE29Ghrv4BDqHKnNnh4gBnBJ72eTVMFzLWBdgGtyXBVsz2DwhKBJVUGxzwscMj7qbSjcHXfbfxLYeK3N1LSKa",
  "key15": "2784PzVNy7xKdA3QfRH8evfp3mqD254vFQbwX7ZRskDPMMoVGo6fMfxXkZZ2yDZRaLQxneZTkEErQhMnWQECDEKj",
  "key16": "awGN9VeLcHmcqMcnJ3exbbt77j1iKiQ7UWwLu5LMtZnKpa7BUjFV31UeyDf5YYMHb9cHhE7gmJ1J6fuMcbigm1w",
  "key17": "2tTcR1uY8RCVfhGrk123BpDJmzZk1iwcGKcHWbGrdnUmdTfCtB58gp9R6Dt9LqZtsei5ywfx7Q1tKZzn9cCCxwwU",
  "key18": "mNMizD1qNsqkhzoJ2qXQnKF5Tc8vBnyriwfiSTUq7JdjbNPriaASR9N8fUrjWajFwKagXM14X8gxcSRrk8jAnaJ",
  "key19": "3m8te1JPgYx24Dm8KuvnLeCa5Ky8cQvrCoowCTW3Rk5SxLHhDNrUdiuDyqLHnH4GQ4QWLmp11BH1zuPriZ8boWgJ",
  "key20": "4bbP1Eam1Cb3u9ofHJ2cz3V174TPs45unewPkhvDdXWxhpwMK8LVkLEH4Zn3pKgfJ9f7kGbGHjJNp3FsquixvkR5",
  "key21": "nxNVEhvn2WBM3m2mLRsfKy4dv2HhSao53mnbNznz5jRVtfeus9oQeC5vKnL7t5acrSZxSbaxhWr1aEwEwEimkFX",
  "key22": "2VgTHheasJGJNtigiTGHJXu4AXfq3QEYvUWM6BCXUB3ikzuyxbAzMHKnJstBEdFTJKn1Z8WfA2JS5spAvFCLqTCQ",
  "key23": "4wTfq1CF6dEAUDKRLZKqQDJe3rd1bnfmmz91WNie9dda686bhqoQ4xF3QzVQL3tnfqCQ5wNDCMmsSLMWTb9jHRjb",
  "key24": "3DQT9MgjxJzoBtV6qmT8JCSm4BggUGDYBES5wv4Ph8yUNg9nxgkHJyxTFNP4LAB7Lb8NhKrgioUUDZ1VysLqPwCg",
  "key25": "5H9XVDHu7Y76icR777WbepuhyjH1J8229MgfJ3ZwH6beL44xDVBGWCCJEphau1xV3PrmMFWxHsZu8ceL227Pd1pw",
  "key26": "4iKkiHxHLAVoesZkscUyZWsLajerQBvePFaJQ2pPHGWc8DXKF1UbJsFhvsTiQx7ryPrJuep9qY1EHwtYKrypF7Xn",
  "key27": "2whGEPCx4KuQq1T68aQWiV68Xem6mhhCEmj77HmmpBM1YXhuEotfZbhBvVntF9viQGLfsHLJfbtCXJq3En1NqBXP",
  "key28": "4GiTq5FhpV7Q6CyggFrEQcTrRpPWSHFHTevrHrWXRNT5k8fcr9TmQh8kZ4ob8gFEQTDTkxnKsrRy7Vt2FoojWnV5",
  "key29": "3mgvektvwEPVQA8UstUdAz4dA7Umk1azWt4AqLd5nzqyRivk5RconMF8yH55M5ywuJLHBpWjUp8UW6U92gtuXpUM",
  "key30": "3HZVFbSpmZ2yToM6WXopfVdGL8Xifu5RX1zWJ8dqFuy3z4PkGoVhzfhvVgfTfZhs6F2KPbogUNKGrpXBcX9gogKG",
  "key31": "YGhiLydtmiaTZVRKxZUBwjZE5aGNzw8MXPzvXWf4EENWYcNvMvqdsyfK9EB8VAqS94Ng42Y5ZFLLKH9NqpGm1rb",
  "key32": "2DNhRoKLusmbfXL45Trmp9TqAAScrZC61DJDctnxxA112Sfji1ogXq3cgKmBkVXEtftd7WeLuAd8XapxqAdB5QYH",
  "key33": "4Ex9JUm6vaBsX4VEPQ4iDWpTyDKVbR3SLC9yjUbzavPksidENAWZN8kYeuieMi2PbEsAjr9mnmfCv54eBioV1aBs",
  "key34": "3BbdDiFgiDd8vzCnYwFEt3CEG6YiDDTLpkeQ4Gbd6qXzL9y5NHH86qCd3FMEHsX9aaAzWY9BX1VxZRsQQLxmCJve",
  "key35": "2pw5cThaabGxsMs4ZPAK8H62a5qeoTgH1W23DPNJCfNXudLZwvCnt3ckm1SEsMUufbMPqdMr2maQP3MptNQJMb2f",
  "key36": "2Y7JBuYJPLpeqisW2QuEWgUc4DhPvP4fgSsatXN7MUJWy2QX1JjMPiqd2P3aEHDBEqVj4pGJTGsg2EH8nJ4yeVrH",
  "key37": "tBJ8HfmXfLLNhr61XXa2uXX8fT9FexMupxkY6p72T2ackcwHFKWv7L6M9mGXVTwU8nwPGkaDFXcxUJUue6on8R8",
  "key38": "2PUevh1XsPBAbhLEomdJNBcT1W2sou89ebqAH3cYxD3VBkduYiAEjbsom4VFNwAkLQbADgoJCfr78d3EKw6RPej",
  "key39": "5jGeUJqnTmm2ZfdqdiebyEeCrepg4cCTgo8SNqFCrCZQkaYFpNWiXnEVQ2QKvvw7BPDe7qd4JEhZkAEYgY6RaQ8C",
  "key40": "5KDhxyXDEFUmaEuCYYAHyc8Hwb5Mpns38oaTSoauQeLJwM7L5Tx42GddNSv4SiVPMaRWJZbwRG8KHVYYo8UeG5Vc",
  "key41": "9QZdAY2jxvZRUK83k9evMgaXJmykNQJxt8aKeUCsgCh2AU3QoiYehWQVbgZbcKiwfzozmL3g6VxPFZTMHwEBTB1",
  "key42": "2kxtA8Xf2eWxziCCrntXh5NbH3371WT8PQWC7Hz9n2oXkuNYYaxvbciGEanWenKavvZKjY524vMxSHRZFpAGjjxU",
  "key43": "4EK6JmYuMobXPZmtjixrxc5toW79pMcKnhTUWjj9U39Ly3fPEjZ8mKkvixnG4xgkKPxfLpyYYnrAdGXXyW7x5nXo",
  "key44": "5cjQoXxYgyTzXemMfkEizqdfib93Wx2Zzx5Hoa2Pmo6s7uWFQ1R8KGAwfRvy6iGuVAYFmDDnmzkhzNaXyybT4hay",
  "key45": "2jEVQW9h1KVpA2r7yvHfpFvXJxfe1hCNbposKJezUNRGGafz9fWoCHE1tradmAVdeiz28DBjFfBteje4ChotqigS",
  "key46": "3QX9yaYAPnS9WEEi3jv6yZq7woRieFVQBmLqEvHdDkzNTEMQEY7RDzizMHwk51zYiAaEPnAUZs64VNvrw6zp5GT3",
  "key47": "5Ufu4TGgTh5ERnHA3jrJxEbNWeL7vZp3H9CARpYTPtNMZe8BsgmUJp5Mcsq5pefVx2cMGbEQBZbV6Pp6Tk5ybNXT",
  "key48": "65ExrHLZ3cfMbcdaUWwPGF3pidX3KGrvgTrjijuxDFrEPkK3RELawZRLDFTcKXac4heas7y6a2MddDXzYC3yoWbn"
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
