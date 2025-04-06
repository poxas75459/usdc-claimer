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
    "2qqX3EmQPcxJVhzNtKPeacNeYWwshxz8u6thpiGL7aP2FD1pvTb1LRLbACWoMwfV99bjSTg3GKuFJP6Txnwe2ZKu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26iNKotDX4eQdkSoV78u8ho8FLpdaviVfMeW1uepW46rRrp26d5SpBwZ34eVpX156poRasnSUMiBBdhWmwXL14BB",
  "key1": "32PCs1HJ39pDqNMWrgCSRCAxWg4EoHaDe3PovfKt1KbFvkk3oHuLQoB4VzyJkijwErmzTXCTEChUVPkjNCTubayd",
  "key2": "4VCVXRupsTACUCDspE5xKnDhWzX5u445rH84BzwMU34qvSS4gxwgEDUQZ2x8MgG9u3cqVeCp8UBG4AXnrn8gGVEe",
  "key3": "2spVkYNX5e8ViHkN5i4Fxx1WtPx9dLW2yTMAmg61vSNtgXX5ib1e8NUoSnu7AqMvdxAhaVm4SzQ4gULKx7onoQkG",
  "key4": "33Ye5TJMgcPiLB84MPYmUV71vq8KDaddBzFgYDzcD8mx64uCeVotG51pvmDQVLQUDmNjo9dhuRcDXA7nHMRn3KJm",
  "key5": "44yKyeg3gBzyJZKJvuu7uGxztCjQraKXTKPNCYHrxqtQ26uuSuArXDPvQUNyBq9BXA8Su4C973RCbjWCu9C7RoTs",
  "key6": "3dif44dtc17N7WMWpNSMNaFJG8tJDPnkr45x4esG5EcgRivJDfTR9AFo3jNjKWDn7fMGju9ALx4azoMtzFwoGWcJ",
  "key7": "pmMZf7QzZWnb1HdLVKq3asXWJn96rimTDegeGwhcoNEVXPEbFk1D6fucdMky8WF1JrZwe9YPFYJxsRtZJaXKs8B",
  "key8": "49PEZ6cpdV6NzWw4eWFeMTZF3UVciZDY4oGWoJ42WiD9fxiL9d1GztiTaLqWtiGAFeq666rYZNVdjbaQpKz7Nsi4",
  "key9": "5LBiRUq1Mo6vQ2tLiBRtda7kmNKfoVELpGQm6EHjGrZDVmGoKFkeJ9dhWEZ58rvsga2A285j4C2n7Lep4CE1oUeK",
  "key10": "5SErFsxMv4CHGsiEPG33BjR3gStr2Tf3vzsg3Tu7ctdSPS6xWX8VxoTbFD51dWv4GeYFtRz91yAuUctWcqMdxJkp",
  "key11": "2mQcBb3oeW5a42UAnQdeuipAbaCNqQMzyeRNFMz7dEfaHrjJATV42b4De7a8qhU6aYuYw47NjYLnYywJskvi4NfL",
  "key12": "3qdFYwTcVPCxhiGuXowEbA5eR1mfebceX5oMA1wvFzCW5WCZj91tC47tNg9PqCmXzTi7D1zF7KpfNS9PpmzzREfp",
  "key13": "oXjjWv9Tymh6Hbxtw2rxDUjBjCQVNKdjJTet3VmsDCJzANgt2TvfL3uL893EnWy3R4avs6UMu8xraDEXVr4qiKY",
  "key14": "3oC1Rtjcg1KjiitHNccrPbpB4f2kfmp5FNq7Ahd8NGuX1zr8vyrrmvN68YC32iyAxRfbSjTxz2osU6Ve745CezPL",
  "key15": "5vSH3EcvqQysvxkBSCLdjXLDDfJGUG4nKba66QWvekNMfJdtco8G5FWg7qSr3U3CwMRuVZik87fb48ziCFS9LjtF",
  "key16": "wA7RyRV3hiUMacXJv3bMy51J3LEFNvT91wn2F6vZWPihinfhPVKhNphAMErXu7xmgkXD8UK4QyNYhZ1PdgofxSr",
  "key17": "2p7cwTFdiZwAMmMtr5exyxcKfcVcp8C2C4ReLs22GEKutiVgQEJpmjFQ7KuWXxawaX2X7zF8TfcFkiyu2Du1getS",
  "key18": "4prjLUFRkrHV7XrNbzUxb8oLdXjzMbMKn4exJHmbLCrNSGXgbRGSY9qyqAQgNjuGspEhv2bEmkzX1o9o65uEw2dS",
  "key19": "41qbtL4N6FXGtcMZGWQw7mbsUUZSfULoVoBMd6zjU4rTk5DNJ86RnEKTQesbkrwTDTmsdz7f4dTPxtjEVwPDjy22",
  "key20": "5YoLYWfyF2dRdWyqKVWSYvvtrvUS1BMPthehgjET9U73G8pXuSTW5kEttb8Ab8T6Hv5qxbQoNaA5e2DUcjMDwjAJ",
  "key21": "29gwm3ZmPtWK2utKwUVyCRq9dxMLnDdDJVMtShDC65agzwRM4pcCnYXRmrn3bJHKA7z5qLRDjWp1uFepodWMXzvg",
  "key22": "2WCNP4Vm8TZ6kQj4z5S1nv8bMkHQq4nKakKnsM6BWFybz1RY6AdGwQLT9mYvZRyfzxa89SXfq8BMdhzr8fJoHWLm",
  "key23": "36DEMRfv7WS2Jv5jLTYzpHv5Rvktmu5RUgG2qyA8Cknhr5Nbu4GBkTvca81ysDeLgkksDWZeycTQcChNxcDsmW1C",
  "key24": "2qAHswMXdWuhuKGB2xp7Gp5TwUyJExkciD1bZzJ3Vk6Nt1ooQ6J7nLRz8fVyNMe91uYw8agocuvT3JkvZCHCrMkK",
  "key25": "58Vp59eJ5RNQyp9ji8zvzs1MoCN6JqDZMJLfNoAtj3zUfv57grXfd1MMLwrBxDPrTkB3hQMvtjZ2DSkE3UoUSHM3",
  "key26": "J9GondFdSiqMetRLxgAAqgefbEyW3CHmfme2Eqr84NdU6CRP1TFHzeZBJ6wBZrkARLXtmxxSPdChLQKssfmoxxD",
  "key27": "513xraBTtAnUX1RFm3dHj7Ni2AN8wvuy22mww3jssmvB1rgyn3qzbhPYPEzqjp8JmMwC1mY4a7U3eLjAqv7amLtN",
  "key28": "5nVZD8SbwtrxYUSo9UaEUvmpKDGNJxkZS5PNbYemjGygLNiP6o5utDcHQB4VkSTuiobBBRrS2vgwg2xFriJEXpQC",
  "key29": "B15gGwnNwqVGTxaDrzse6ryWiYpUN3KXRxHxQgtCvudxBrsbLUZUXq7prj9bQLyfCB3SSF8aB1vyoQmNeYsjStF",
  "key30": "4byggU1vHjDNzpCZC1nUW9DVgfzsL4Q6Qe3B63X2KUt7pB2eXYJD6nuqH7f2qcrhGzoWHKz5EVD4D17Nt5Ujx8nN",
  "key31": "5icm6UkFr7ydpkdrexbJbgy49crRVH49r1ivh2BGWaqTmLCHMiuLteyoyG5NfuPsNQfHDZzooaNnqW7ucpdS2dR3",
  "key32": "oTwybQ2fTByvQbVhSNYKhBdYZCLcQ1m8uwGaWL7siDfSpfS6VuASzMAmNEK1NT2JVUxSuhupHfXbePX5ySgNNKJ",
  "key33": "3ierdxAxgB7i8AhCc5QguWhCFDPtUK7SAMoqSThZUqfauvk1kYgawZHGBFviBMFdaLzfiTKmiutBRKLJEf55EbEn",
  "key34": "3XpNaXJNuncvkQdfXBsagnyDHXMfDVdNWgreQBdarRFkGve5ct2Urzbqev66sV78wG59uSgWVZhBoDBzFYh2wtFt",
  "key35": "vBmTD2RtoBJ4qB48mHowiJaGgS2ftCbDQeWtLrhUXoAnwqPqyu8faoGjBH5JKkeSejqwNM14U9iuHWuMU2m1pLU",
  "key36": "3zNh4cXhkyqR7EBsVLkg4opVwycn51M8YBQKH2M93sGEudYCzjVRpZHpsd3F4h4NuJDdkYxmdgfrRrXKBW45SX7k"
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
