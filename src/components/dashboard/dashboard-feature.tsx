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
    "64GeTG8UU37kF6hkaVBytQ6pKJmmqzA3uHvLWuzMcMB5AoHnFpgVdze8sH9FTZ9CxboorTGx5JeoiseBUFtTPomg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oHn6DWhamaBhZjShX5Gr2khNgjq8jC1rsfn5AXVSk5fuim7VoLdiGxKmo4Whan8KtiKTpAn6AbUHymWteSB7nfr",
  "key1": "4KYY79vv9yzCrhRVCdRuP9sbpvJhmGQHFig6NMbwRYpLVe2UXmF1eKbtGqn1pX4MPiAU5jMy3PqeByxV66CRQjSk",
  "key2": "52rKnBTiHYnwuh79AaWLBrvxgGifHqdhXcxFsbBZo3Yqny31aV3NWcotq6ck19NKn9Y4ePCvvubm4jNdjL6E6zFb",
  "key3": "5Mr8sv56Echd3qCkom4GAeHaQWVmHvtp6Rnx4Xn4DhJ2tXVCgoEuejPY1MnXBUe6tbQwXFeddb9uTPmPZSHKcNxZ",
  "key4": "2QytXNrGQWui6d9tvYwP5KuWzcEjhvBPT4E4RYwChMso6YvpqNs1acRRqUHkb44aj8fNLDKQ7QefjFMLBpDSH4Rr",
  "key5": "2dUSQKtB5pA1Xiz3UstudgdvS6fPrBJYZnYgzjA1WVVk66nH46LTT1wJEwsEtP4EpAv61JWgRmo62K1Q639bvhRX",
  "key6": "4PQBux8itbAwuTF6qwSbxyyip9UrFXArD1fquJDCujGZ3wtNAtdopgT6Gv8TW82kuWfwt1tCKpBUv12595khgVSR",
  "key7": "39NTBiZfoJ3FuidmpwpMcFLViQPxdCEyBpiTkktzsFfMmrCWTQYs9ecezbR4UPh3VJZCuFViK7YydtHvx3iTDzzS",
  "key8": "4Ko1s8SLQqxzxXrUw6iVCDtWYQCT5VZFSUjxTy2A4rhUiW4466owCptdxVJ3LAwUpw5fPCrKvethND2iaAG1X8dC",
  "key9": "2bggd5xZgPrz7DosRtoRqNAvoXvBktCWttUjcfZhnqXgqXAgo5ukj8seJ3fWe8hRJHZQxwy4DkKpufUrVz8v9A46",
  "key10": "5ECGkifKvmiXTQPy4C2et24Kdkr6RZWhwsaHTksPZB8tFDJmPkoWJWT9zWJ37ArhcyLDrr7wMkDjwm87bJt1h1KV",
  "key11": "34T6U92Vb3WNZGTbrqgTpevaEJ1aaEnrRt76sRFRCgodCEThUjgNaTN1QPa2vYS1reRtFzEAa1LFLMHXKt6jB4Gi",
  "key12": "3g6kaicd6KcGJp9PQYg72i6eEG48X5q99TePbwvYWG9YxmoSChF9qMH6oc9TchX11z12GHw4eEs7xhoDy6a7vw6x",
  "key13": "2M77491rPUgvPawjKYnLrmDc7pcfLYWKL8FWhQ9Ukkh5AafgBgvWJ3z3NRMBQbjTzY4p8gyC9v7hxbFLUTCxJUzE",
  "key14": "5mGmSrmSqAixFL5TztvE17fK1P9aBPgThgR1TNTm1vkUJyTYHbB3yqNq99N6NDecjDMwrw7iSgsjECZtA2Rxzk1",
  "key15": "48Q2CA2ZnhpoCT7ZrnY4Ts9bLofjDzV5qS83LTaQAoP936ntkRWJ9ihiAPz9a1n8eN9vDamFQ2PtnmUMFQZtEsPr",
  "key16": "nLMyQts51sEvswHrKLvysPVZhWvMZR3RVVLqLbdxUaMQZDfEsSeccNkcyMFG9SBjZvMUQrM5vjA5NBdNMuv57TR",
  "key17": "K3234djxFtSCe6ooBDA5ZTXcnVRvrDzxAkVy2SPCSsabzZTRSbJ87E75P43dqCMBtjR1rqtSfyPNbo9fZcymaWn",
  "key18": "3cJuoiZiRThPkt7nWHaqwU2VwQ1Rmge47gNw7pcTKquYt8cEyVeDY4CY4swPgtWXn6m6YJdPUUroujBmo9z9eCUT",
  "key19": "4qH2gjgweXb5MiVcvuSna2z8RLcEcKfwf2MhxykozAuNNrstxSeDaLf4WakjtecnCawJAUMjTs3q3XLmAUbdc1gw",
  "key20": "2iRuSzeJo6nucrPugJxL4Xr23gjXjY8mnmgkrcdjfWSoEyhGKrXoTnwVMx4BdaobpMf2uM5sdoF1Y5VT7n4M5SJn",
  "key21": "2fkwJ3eookBwF3dgv3K6qWRzFF3kKFrT4qeTvxT6bBHHJN2iF2d8QRMXSX5ecp9MPY7vk8xx88Fd7WCiLqZdn9vH",
  "key22": "5AGywi19xmhpRXPCYJwPQ8XvightRXvWgmExvDvvDwRKkJtBnx8anN4PnKVZFpZ7Bs5u8ZPfUkjTAcQ15ZADBPsf",
  "key23": "4c8PC7J1e4zew4AqDy9nNrh9X8ujfR2ZtbTYLuqYEfw8yqbhhT6pFr29fWZ1oQK7W7oYJRL5ZFWLZq7WwEZoQxV5",
  "key24": "446ixqq2Fs1PGfRy8DfHnFHs9wE7txN8Uoatiff3UesrqeFqoZu6YFDekGGYHiftpKQg1VCGc4qC2DDpEUUuGzDg",
  "key25": "2G1LKsBCWDLZYmsU9eouaBExSHFHm4HJQ1rMpQzmdnojCAjo3d3ND3KvftSXT9zdeFhm683SeLAougkxuLuEo5tQ",
  "key26": "Q6djgwfj8TCLpv1opoXqZH9jS9U4DNB3Pnc3m3gf96t16g5DZ8WVUNEGJR6EHine9QwJ3aBk3ztGQyQ7dJibrbS",
  "key27": "35HoGfte4xcs3LajbDyiFiArvEWgyEFwpCS1DUNWTvEYFWJHNZgvE98ZyfvV1LkjoZAajd53sPpyXX6SEWKd6xvS",
  "key28": "3CUd4e1BkH4vATnrC3uAC6vmBRutyu3Mm3LyMXKFZjesXMACbyfmttw7KRUbLjbhsTLCYXfCUf4QWD3ZFMSSuG75",
  "key29": "5XYdnddKAhmzpff8jxfyerJ4GSdGnUv8zAMbhxZkVMcv4BVhgSZXghU1kG8C9d6QCmjsHaAJpN6GLaqm5NMMYkEo",
  "key30": "2ap6tCkwnLQphyM33muJXC7t6MXU4D66RMYJP26RszV2HTaZDJmViowkU1LDk2W7pPaSeb2F4iDVBGKKXrGAGMoF",
  "key31": "2uAEZ66PGBoASG5mCKJgiN8BY3BB7yEm256i7UDT6RLzM7dqmmFk7btcSn9UwNoFoVoij8omqEqYbkTmM94nGmHR",
  "key32": "5sL6YjA2W1bgMvu2kic1CvXBWXdPXxuJccaEmUkjXr1HLQunVuQqyCCBsTs6k4d1hWV8kfm193C5rZ7H6qa5cAsT",
  "key33": "EwyHiGPHELPcJJVZoJ1C4US5zcBXDYJkrrZpxQE3oZN37Z3RTc3aUDrDwRHoSkEtxz4McuhpuieZaFkrpjnYKk3",
  "key34": "5BJpN4DJbPSQpseeyJPBqW3PexkygbZ9DM7vRxveQYo3mGNkBWCN32oJQ3AcVN6prh4RihmUSCyFqZKatwU1Tsf2",
  "key35": "3cr3NRahD5RVeF1tQwndLzCeCWvEBq9uVW65LzAtUyc8U78ZVydZfY2BpoxVPfVXuTS55gpv19qJfFoKeZuuusmu",
  "key36": "3ZVDXkpcpMBLZ3VAijK6bPibjrS5imBFiBdEhjVaoDGFezqegkHHVuEkGwTgX8eFQdWD27K1D8rEpMuy1rka4MS5",
  "key37": "2kiYJXrNw5P6i6wXSb2T36kfizepMG1zbg9nEvmGPEmyEms7VmyPgKvKFJFWGyT8d8dVAHJcaTFKy9yC39tKYuoR",
  "key38": "w1hhmRhMPnqQdhmqHfd3gteGHvxqgr2xmwJj8SoqAg1NWFVi5g9Dnpyd7J22p3jiawrfbGPYCwGhf4YLyF5NS5U",
  "key39": "3sErThxz9KUbypQW9yNGxG2jXhCpF6V9mZ9RrYfjYZFBWzzBQx4ACkUxw17enHe7tGmizX26qATT78Fuw8zAKEaN",
  "key40": "3EB8Myq4UMHSWxtNzC9cPpogY9JRP2RctaFxR25GrbMSgAXUNSP3whJgHyDnFYrbeqjYMudtJAMFbAUUDonPrEQm",
  "key41": "4AssNbEUeCpH6J99Nh3z83ADmQX8rSrF9zdsLs5MX8pR9wndwT1KpKWottJbQuRGQhzeEDDJy4QN8zHgUBQ3SYQ3"
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
