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
    "412rQzV1vY6hDsxWGtQ11Qrz4GC5KerF1GmmcxVJDKvTfqFauERmHpeMzedR7LFqUGsEasWdoRnz6cUkJEu8zPTw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bzo7VY4niKusiUhtRcdFDDffShnQBE2k6EPZ1oSDeow7XwdzaTFQiSJLYt5VtJmaR5Z1fdXK8w6STdN329Lbxdq",
  "key1": "4TKMLSvc1mDcgYAgqgTZUCjrwSsuXqVW1e2Wc4EpdFpG1eqpqaXkQNo3bKN8tQQwu9rbT5hkYTG2CQwSV3F9K3Ph",
  "key2": "5Zjw7nQgfR8GfSihpJ9uCKwpLxCC6BJzkEDjL5juiPcq98W2N8PMsPFcdjZsC7NSiohpnP3BLZ9rPhqBcW1nHAFQ",
  "key3": "2W9sNUUnaczdUroL48Ud5eeMJ6AS6hFFKJ79g8EAoyDFBFntGKucdRNyRo8ARW2FjUmLcaGGLhFqNprzfr3PvMcW",
  "key4": "63PSDfNW9mxLb5VMgxFHk6fe6sLiE2ZuBGQpLQAk6uqqL3zbGfeaXSEhCS7SHyBkVHMnd72CAkRnpu74ov4SETbU",
  "key5": "5n7Be6u19AKRptH4zmPXanMFu1x9uGVQ4SJgGrgYDpybBd1nwYZAYbmtDQBUYG29DNfFPW85GgLdXwRC7UqyC389",
  "key6": "3MsLfzgscAruPXjXJgDYbxPUsiZJgcAyWKF5TKftkxf5szegNEd6wbXkjiAkHB6HENDfd7Ljm2AcbM9RSRFA8uWK",
  "key7": "fPwkDLKjGZkiZBaRiTDKv8Ybhq2euBC6LfnvAJhV3DML1ikCfWpfpc2Dg5SFTqvzuNEtui3KprdjMoMiTW11ij7",
  "key8": "2KcoNTDucnr83RUPTpCzurEnton7bHNAWHvWg1m42eKbRbyfCsDXMZy8iaLQL8d73rnozGFxRgiwQ29uayGtf2tK",
  "key9": "5DPiuF7NWbCSJCeptUGZs4tmX6vH4vvgfcx9ukyrHsjxsWAu3mxx3U5qGuEPE2t2yovJq2Lr5d2ieFgMc8VHMdb6",
  "key10": "2erSiF5cMsZ6n3U5tCXXnG4W9FKW3L8RTHQ9baQoiyRgxZuNT7d9RvQV25zXRbEb9VfXo9wcdKWg8RDDdMcbARNd",
  "key11": "4E2GnXbX7zE5ppUpedo2sgLuqrSKZpixnTgKvKhnstQRPMDBZgxbfLTQNeJD6SZnhrvmPN9mpBBE1R7aQXqoqjGR",
  "key12": "3GkEkaMvZZsyVrnrqYY1rNaA7165iDCd7yikcrA3kPUFeY3ZZKBFrn9Y8JFJFvSSrxvdwzWiyWmef6S8iBucEFDZ",
  "key13": "4Q4ZSwm6oTKTCmQEJEMECbcibKh456Wc3teDHQusrvoD6Wr4aER6SfK2dfRh9HFUvT5bewuytNDexB3eZjvD4AGK",
  "key14": "QRSDJRFdXcU4UYnBoFt1QbEbCPEk3Wm8ycRPmSWBGSeCysvdm6mo4gqXLpysuXB2ij58EMrrUZZrxEuDATnZzyK",
  "key15": "2ar5pmrnQ8kBzJwa2vVo4LqZuxgQqoobBmnZgXKgosJtkdYxcCA3jV1Px3xPSmMDRwc6pC3TMSoSvvtjhoWzwcfQ",
  "key16": "41dfurthpPGQ6BBZ5m878JLgECpmMRHmoJbtUU9R5pFCp1ysT8DbMhP3cVpCw45dLzhzSEvt8D2ermj8BnuL8PED",
  "key17": "3cnjn3jbY722JtL2MEk5ADYkPnCr31MxxPNbb6R8i8AbeQamyLsBtLx5SREJmmz2gp4w6arJP7J1bp3LkK4dwfYB",
  "key18": "4WKArFiRe7mBXKQMNUWEHHxDy5RxHoTnc3AR9GMecpvqtJZq44EuFv39PArrNveD2YafZ5585nywMM3XukrDr7Ky",
  "key19": "3L9Lrsx3LH5FDdSBqPfd9pQFFG5X1ibhhvumKE3J9KfjrxQASZZTYL45S5uBxAXFJzUXngPNeiidCKveF2m87and",
  "key20": "5CMRFEP2gX1LTz4FVSmY426paRURFDH46cyN6JaGg8qmtJT5Ne1h22HfLL9vBKPT5qkejZtYV5aH82DrJMjmSuHM",
  "key21": "27sr7qR1q4dkbtT8BEBrvFZvEUL7vDGR5ZBQyVSk9S3Y7rkn3xt4meue9EoZ89g8NHkws3KrcYyiRm1PmCVQmLLs",
  "key22": "619aaSxpYn9q5JRKrJfBrhZ11hRY2btb2AnnmHXZJHAG7qACPqr3bRugpnSC5b6G1hpqi8fGSJHrjnJfC5gSyeYj",
  "key23": "Egwd9sGQwHJbvjppt8cCBYnbyZgs95yp81oAWSM8raVUJhjT331bi11xX3FHpCYc5PJiGKGNSL4vBTLa39d8xUx",
  "key24": "5Q5KPG53Dg647HDB8j7BP6iPytpDQNjb1Rif1HqLjt43KYQijyC9u6vH6ajqPYJv3EXNEpyC38FpEjfSTyFx6owj",
  "key25": "3PisDMFjBQrbTxkh2eZrN39bsqzgHftcmJEmY4xJBWHeVngzzo33NvjF74Dnc9L362N3wHENphad2PVJbkj5a7Fs",
  "key26": "3Mpo6dkZ9MyDgEq7UzLjDt7UjLaDcssMuTL1GW3g8pQUr6kTjBPF2Jx2eS3LFKQnYvTvgHXgCAcK8zKwiF2SQGcF",
  "key27": "5bqEhfiQMthnf7RtZ6w5R2mDCxhVwH8yprmUaRJDS6L8yygUefDxUcZaPokcwxeMBFz4LGLfL1uNMhgpvNfEdKuk",
  "key28": "3U518TinGp7aQcmW4gSkqgd8J4TYGA6TAJjz29QVvZtNMvjLTCq4eAeWyptjrMKJTAPkC3WBoQdpwYCMyxu8j6fw"
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
