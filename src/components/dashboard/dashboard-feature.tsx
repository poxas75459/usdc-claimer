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
    "25dy3bSFWbfDGojDwLHRkfoSfrUiUxxHa3R49pQ276K2XRVfYeeh15662wJwSKmHqFdgfQTgPBjLDsqL8yKWCrWP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QnTfsXuFfATbcYVZbxJYVucRoGb5vKWxweRSQnMfsxi1K8szH757n85Kfg5s7naV4WZXypSGsE9PXA9LVxvrj6J",
  "key1": "2vhggT3cTyzN9ersmUtvNJMqsjYgDtCzjKs96z4GE1USWJ5tQ99L8udPQ4sVLGccbyY1JtFgcMPnbho99kptn5Zc",
  "key2": "PR19jFJcUsREpTpaeHH7uxP2wGqmjNjtLANfEUU1VRcb46zdoEnEnUova895LzvZaFQw9TjVsBArQPBMzZRnzcX",
  "key3": "3MRXnbDKzpEPKWiUB61U1GEaDsbhHXQbfsv1eZCUzmLP6tseNUK7jh6KeTn7FKT4rTVL7wyN5wodu8nb5kPERUJN",
  "key4": "3Zin935kVCirrD5fF4wny6LwxQYtiwwkNgLwk5JqoNXcg7LfFVL1oZwF3t3Lc3vhRqXxc9Cj5FxoaTdB1ypVrUbh",
  "key5": "4XUUf8Vr5Khve6pycofCKXQorxfvv23PaS3ZRUhMXJibvNxmRjjohNm84w923bvceDmWJvHutd7ve43Xoc7LW6Lp",
  "key6": "4qBQYUhg3Hqm8g8gbcVriJGQCECuoyP4wYe1hDPZpvaJKTnoSS3T9Y1BzS7kbwa6KqhcNkk6TRRqfnvZEy1qCUiw",
  "key7": "3cFMKdJnvCzpbL3DMwoNni283scD3B4Jq7GtKuUSTKAQShJHNZp46f1Nj93D3cvFLAd1dEwTa2FuTch8nJbyQPtF",
  "key8": "4UdLoPUMRm5cjLhCwSfyYvwLHHVEkUHSRsdAwWGZ1s69e6rhzXo8XMms693X8Xmn3LaFqwaUpQPmvNZQRNW8bw1B",
  "key9": "5jyBj7Q5nvvrRR2aLeZqBUVoKXoZ6o5PqPW8a68TCRpwoLJVgXdCHQFKTmVfgoQr1NnQ37JFTYDB4ifWiWq1Yggh",
  "key10": "enX8xn2LvBGCY6NTYKTqc4Pt54uimZqFq7vUTnypm3hskP8DTPd6d3f2ZfGuVrMCbrJ7ytEf9zhJbyZvp1BfLoW",
  "key11": "4HMUv37h5PsMfi544JVTmzP86p7QC8JT9AXAirN4SpECuBmMoJyNoVHWHtL6APsCLxTNYA2tUT5GUY5V2hfAgxPW",
  "key12": "5NoZQJooc2SbJiUiXoCeURy7tDizeQAbc7R51YPUnmW6Gu5DoSWZzQFodRPo1Ym3mqVa6LKCwihRTZ7fjjAdJwio",
  "key13": "24DJDh9JgjNxKD4tc5YV1dbLCA77WKvMjmWG6i7ojHT8C7kggntNdmYMivwCjBfqxp9fVqRqaXTeZSBKdQf8w2H5",
  "key14": "26uL7ZAkA5toY9m4rLJ68WThW2V2RFGGbBuRCzbpbudGuf3rxYwR4EYTdHihwm3rXfUAN7EUWQyDDWhu88NU8CuQ",
  "key15": "2sqS9bNin2AsJNXd1CHktAAoU3wnRmaVJ5Y8VKFEJWrjwQyNJ6WfJJK3cCRMicYEM9bKCgParDZwzyCeghZF2BtB",
  "key16": "2pp7xATaRkFr5QSDb7ZipZMNwZoXcXGiD3FahRxCxX6WjZw2QbRMefvo5ZLrmt9dne6KZh3ub2TEkSSgcmnozeXn",
  "key17": "4d22u4fQoX4P5NgMJ6fXviGAamGnJQSvEVsziuKHZNa3A98Q5Emx8XnhEqj1vFk84sbjUnj6iVWXSZFSHfk7mvse",
  "key18": "2o87WkL9kpuyt8qaLaX2C5QanA7JEVKWdoKsz4ZJrMh6SAdb5NsfZoSR8ic5bkdJsJJPtqEkH5NqSFDC6V6zzMeb",
  "key19": "3dmfBWuaZSQRDNxzU1HfRQgV4Pn3mgB62CdJnKzFqG6Eo5xhdjMLmsbi3ZanuHavxsP5dGW7eBLUs2rHLbcPdamc",
  "key20": "5LqdrNGTrwv6XULiLtmE56XRnRkRSMKaF8qU4gcAyhk4a1sgJ2A26Z9WzpzaYX1A4hECKuXtNZwxhyFcYT6CU972",
  "key21": "56Jb9LTfD9VBx3kqxkbwa6tuwG1oV3wkcJfpPYWDxEiG7iAneHAKGWYAQRD1SJd7izHpuQvnfwyyW6HgjgFY6ZCf",
  "key22": "57UQ8iZMYDqKpruaRLveS1hyDY2w31RtULo2tvZBHJQZxPGD5QhTJKdAUHuDfjkcZaExgKXD9a75ZgN1x51VuS3r",
  "key23": "4deVDiLhEZntTcbKVPPrXcQwGmGnoH3rfmgo1aD32KfzsK4V2tYRrTB2SEwsph4bf9AyZTcH1xPxnk3DVVSLYpzk",
  "key24": "v2QvyzZZq2G7rpNShUd7QTXXD4SzixGK5Qow32jFxTftaAmBZX23NwEqeqBkibDmkPRj32281QGLNFfNgupTmPp",
  "key25": "4ox5UVdZdZxGWGm3R9EKruEpwKP8Z1YGMrWufucezouYkjmEHCP6jYiUMmbTSLWqedASYmviExCdTqrYeArrJ6zt",
  "key26": "5W5dhxCE3wKzDrXxoMm6AL34pRdYGt6zSnZUKzWWCyf5VvxWJtTrfyDBBW9dwmj9AKaMCxoVeCvaiVoUx8Ze84Y3",
  "key27": "kWywL34ur5LW1J3SbtLFqizP4hJighogiTkSmiuF58ogTGUVR1g4GQ4qdd6hHpPePDVqy7Gxshi4223HLJqrbSL",
  "key28": "5AZG2XgSrVpeqVo8aiKykTaj25HWF52bfntrV5a6kN1Vr6QVfbB6huwe5TpVFVYdRLPUc65bzMzoFSB39SZFN2n8",
  "key29": "HVTxiqQp6cv64fqahAcRUXwCTz1mHy3QnmqyfTY8QKMn5xodSjQmNtgFjBq61m9cZ98Vb3En4Nq9Vjy4r42kVmt",
  "key30": "3ze6EAabspe8CSWpFDYUJYcd4MipH6TGbbihg4xJa9m5PKv8ZKviWuRD9ck2Y7np7TusXFmPJjZQex81MU2iFdaW",
  "key31": "hQxLCRotar7hQkbwLTPR4ANMorj64mtj6wUD6VsY5sWbqjWx2KtQzqDnp1Ugoobgv3cNa3ijwcK53BbQALFoXXp",
  "key32": "49Capo4922Mz4owdmbbThBoPvWAjR541MUpVRnZkhuoc8e26utakb5WzvXDTRtQNYujrmnGve54vLvYq3hHkmKDn"
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
