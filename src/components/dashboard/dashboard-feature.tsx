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
    "1hSTwMneM33kvmGNHQypg4Hkc1tH5PhVvxfAHzrX4s7JMBXJcQdD1s7Xn1ckVt1NYy4roCjS9Je8qfGQ9o2jKMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EDDQbSU1Y9ynYAFpvzPPeFLZpS2915SyLzSTvfaz4Z6b73NDyaJYkYrwsA8oG9qFdjvkV9Gw2fLmRRcMEc4UspH",
  "key1": "3tHS9cxYjMYszCTXiku231xvfXKa6qJzwtUtU3wu4Q3KkGihQLaWh8hm6zb6hLewWwg59smwKmDaF7iBgrtuKaB2",
  "key2": "3fYnXoN974MyPGE3dNFAHd62px28uUU9qJ92tz27o7cP3vdxJdWAuy4dUXk4XHWVVonqNpqfCjXomdSf8XttzjwU",
  "key3": "VdzvNKWFHH3e5u58CseXEgrx6Wgy999VPvgxARUg4M8yado78EmkzE54W3H1rDBpwPPyoCNMyBuHBK6Hk3qmkJo",
  "key4": "5ERRvP5G1dApBUvFt4WiUoPphZZepd8iRf6e9cazaNMNEgZScYsFqaq2Xe7jpt2PXbbWYvc4Jh9XHuf9hHxy23w5",
  "key5": "5nokGw8nPeTZzvWAXNBiFUxZygXHHdyiLRXDVdoDStUcA2QYLoMDCchhHEj9VDAQLbDGXW8V7gJ5bnFn3fKrygXw",
  "key6": "2f2jKQ8DhuwLyh244hDYBPPcLb5HS5TGMC4uUNXqRyZPgyRsKEkhY19C9Qg1r4yGfuBwzqEVk6WQGg7t8hbdnr4f",
  "key7": "2amDvDk7a8SaLoXvptk8oHpj6gyxHjQaQYqMzkqL4emPSJQmznK7D8vgNaYrku9M5Q8S5HUgh4homXZqbtYBdFqY",
  "key8": "4ZYSktMXN5uzYwHLr9Zg1YMWsf8rE61mNzNC5WrqNCRWcRggfw3A4zHW3w5CVNYaJoUmovvxnvGuUaVP4MWhJ2vy",
  "key9": "366xU5hUKzVM1aZFkuWZKrVbFeM7L1wXZKMu2q1eEnC6KMm77eRzQsvsuJBGdsfktwZtxPWsk7StCngbLe8QMyCP",
  "key10": "1mD4h4kPUih4oh6ZmVMDC9wBJ1NmUjvuoHAeP4ykcAvEbUN7iQ8a5qCMCBnWWu5VUeEKzkeZACdurPVDmAtCy5W",
  "key11": "5nxku78gS9V94aFxUSz1pzngFZ2Dv1oTRPBdbnYpKDWNYkeUENWEQHiqZRsgTAWXM9dGcWSZVfZ6euNLq62M1yvJ",
  "key12": "4y3Pw56dSNUQeYCqtXiyabNuPEAMXC3qsnhtgZAUipeBNZDGHjDrvQHv3UkkXpiryijaiULSz3RpqRjawuUhnfrb",
  "key13": "3nVy8W2fAj9SPn1Df9L3tyFT3ZVgZZwmoWFbFNwuDs1ZkhJx9YF3kiN8JEJEXmGwcCG4YQcFgQgFvdkmwfnCNJ3f",
  "key14": "sxJEJ9EKE4uN7zfrw5SPD9QZogf3GJ4sg5ygzTjRc1oPFyW3hRst9Z9f9QriDnw8q3XSoh3amD1357ndDPTmFku",
  "key15": "3eXzu9qZtfhAPH43rWV29vzznBuJs3ZFm3jhRFpfgceoUkJxXWH6JQ66G4ppaTGaKrDPBHFNgNeq1J3aTinadJsY",
  "key16": "TjVQi523XPWJQ9dwXCMxJwUcCxgoKPHf5LTUebJtG5fBWzRQMZ3WEmXY1y6o517CZpBhrHfJZGHksAE71gq2smv",
  "key17": "uPxMBrRBgCai32dRjciYAc3k11TeuJeug6TSvbvnoXjBupG5D8n9arhb5KaxZK9vBwnp78dPhyAzukWAPsu9KHM",
  "key18": "2a6Xd8XWcPjpPB4sYKbg2qTPFPzdsbMa8DqEiW7uqby1h5JiZuyonD2zfFEVPjaUQHVKUBwnNRxRX3yCQjhDLDq6",
  "key19": "3V6271LYmLnTdA8ruV4WW7rD1UK7KZ9P3bwU9wSBrYinaApgf3gtbCe5QaRn3fiVvsxSAorie2niJbsBxNeVZeBQ",
  "key20": "67r2HFXX27BVVBJ9NnFT1CEDTv7PsFozxdd2QnFzC3qBQekFWAtRhUdMwRqSJcrMgaoeUiYfm4XNVrRc8RC4PSXk",
  "key21": "45zWgRUvNmz7Bwp12axgoqjBgfyrruKaCGW6EXuxhn97eWwmoviEMM2jMkLSompRTY1fUPRzwxKCm1Ur7BEcrRJp",
  "key22": "3RSeSVrFYnvXF5pMqeUYD1Q63BsVTpD4dNnBUXx9iCzbbJy2J9vBnVg3DtwU2GCUZu6eETsUzNcUYU9CFY3F3SRW",
  "key23": "3pmS7m8qcBsmSgU8LPnPirov6846Mg8r28WkMTuLEPMZPdSEp2bvrur5Hh2VSZCE8ipetVufx6xTrJDQgF1T9Ca9",
  "key24": "EBDD4zuY8Q22UTXXSgcQj6xjBx2nCPB2uVAbDyCPuWZ5ibJesMWZo7kKAZVuSZn6BHABGjLxgWWFZiUyQ5Pvqum",
  "key25": "41LrJU8FaPUkTj5Af9mwhbwr7sAnJ6rwiFAevT1T27pWw3NdxjLkvndfhvpdQsxgvg6bn6yMLxVpkSWaZvWUrUnZ",
  "key26": "K8WzS34cjxW1fUWC71QVxLWLhtG57aao8R6ff9ZzkkCFgn1MA2tcSc2zYA8AqbGQMazAeV4dC5XFJdEWkgdXcVR",
  "key27": "ZxKa39FkkvkC5fueU3XGWBfXGcJpxkpwhrYTK2Rz75o8GKHQfGUGKvW23Bf12xbWNifxpbn7YQ5vThoad99frfm"
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
