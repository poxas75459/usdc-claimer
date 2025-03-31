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
    "4kEpoEPP7RuoPzbFtUx3AF3XvB4b4NLSSpVzT6R98uKxUCu5HDmyHFVcCf2ut1H6m1yQWyqm58hgWgs2BUBXKfQd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iicjq1xCDmet4KFZque2FzvGf8Zo5tYiJ1H8x45rRwrehxrJKtBFHB1qyDyohfjTcrcX7RDzJV43Vs96gmPHNKT",
  "key1": "UFQS969qYXvWH8Li6BkoWgW9epTPn3DMDAHZxjXiiTSxJnXJ4J6yhxYSTBKXibEYvh5eU6KucsjqAnX2yVXhEBH",
  "key2": "2DidbztezMUUiFfhJVhm4eAGTEECYYPK4m1ykV6cRtHECNKsHwapVevNtDF4beZtSwbBZjEJkosF5o2o8ehTBb45",
  "key3": "55QPq4tCh88meBK6sLQpQnAmmAdpxuJCXBn6GckdaaZ56xGGM4eEH1hnqhDgcEy6KEWwdEtUQhd9mtaiovAKDSJN",
  "key4": "5q6Sq174goJTyGgEunfDwshC6PC532m3VEMU94ManBiqUeWRL3iuCqGiu7MayAXUep3GTb8rurvJtMcPtS1hcuo8",
  "key5": "Q42xoYA3dfuNBpqV3Q1WHiN5m6oJ9vmNrKmGrM6omRTk1KHBfMSZTUM3Ff5FLL6WrafTNxLmDYTPFxzNkqvoNfX",
  "key6": "5QkJNjtKZCUBq523R4kY3DXQ8y8rddNRszbNKRitn8g6myWT16nnfPFa5TFchP7FDFHRmMg1P4g1Cm6pzv4pV5bG",
  "key7": "3twphQBTQqhKYfZuSK5azu5VoNU3SXNah8xmLPefhPrWus4178NuSmEE5tuxYCwVhVJDJW6cZRRS9YAF5kSfzMFJ",
  "key8": "5ZawFbTQEwDUX5JTxzfFVXdgHDNYSx11iJfdh6kd4ZEYZC1J3zAxorzhSKXbqv8G8LYQzdYQJeh6zU718eG4VWHh",
  "key9": "25KT4tJCAiti9zBnVLUBus4ampgHpdA19h56jrLwX9mhte7a4uCX62A3M2S7wGtz1q8qLSub5JGQYgzfDwTAVbqY",
  "key10": "2Zg5LibtWNMTjhqt3EXQ24d12CV9fTUhq6mHscDH2VxqRSThjhiWQwbxSajMqY24vPuAAHh21PDCKrs3AKzydcWp",
  "key11": "AHAPX19dnz2no8gRfyHa17TAoMaVLNqVz9sZPzfFSzFskBqK42U7swLrsRGub5AbNCn6KZvHX3VDFNffjEj9iBi",
  "key12": "4i7o1NU963pQdDL1YcjgayAzhZmPzVeJMJXyudde5TkeZfrGFddbEYeRiJ6uvLbGrhusMvrgg96cwjR8vAqps39w",
  "key13": "3p6uTZXdXQ4RfGt1PuEPverKVJix2bTkRJAZbDGcFyDGiM1LduNAs9hDgoTM6fFftpKGcWLVMLNWmTg6xo2e8D2j",
  "key14": "3PD47vnZdLSF91xXU6Xz26pfRd2a2W9SkwAVWui9GtwebFkvVcFEYW98fKRE3u11xV3ExVXZYBdzwrkY8z1XSWKg",
  "key15": "4pqXfnSLc2ZaJM5BLgiJJHPLpf7dnoW2Cd7Nprk3MFy9apnYhRzGTgoXHEG4vws1h7SVZv5BZVww2ReZ9EBzhEn1",
  "key16": "2eFDJLMG8yMqfAYEbsuHp9MRBZewByku8LvdMMCeVnkj92TKm3QHya4EicxzdehBrKsjKuMU4icaDEixZSJsfxWT",
  "key17": "5sDMy1byuNLtWbLve8WTruWqcaNsETvDxL4s6fuSkXsQyeFkbiEEg9g1VUCnZ69enxXtCKoyuKHgrCgX6Wo21ecM",
  "key18": "5M5n5u5gwppjCM9JtkVJkmryyDBN1yzejq8wox4S5x2hFBPkr8zMFX4MSLEFMdgLp4nNAq3nzUM4eohrSBG7pizf",
  "key19": "5EAynxpsdp27MvC1fRTDkz3dWu9n12btdhoLbxKwRTu6U4ATEP8CupYAxFE6hZNDhC2A88A5oSAght6P76zd7ZV7",
  "key20": "xAJTutwWRGU8yPjF8HhqxM8GhH11S8ivRZALomb2usUPXdUNVE2byHJB62UpGAMaYvDxTJjPfcvV4jwWD1VQd7G",
  "key21": "5uxKjNXYndVeWewjdZJ3PKiAh3iSQjP15FhiqPp5FwL6uFpAvf296vByp5Tm876z92745JZdaGzg7PjGiU1zGYhM",
  "key22": "23D1JV6b8tMvVuQA2zJp2kDtid9wNwiMnLHd3mhj7ngFsKmEu1winhP2rd9XQExqeLra142CiFyZQ1b62cEuxvQL",
  "key23": "4kwqCLw3tZnEvrQ4hAnVAouh9MzC61HCGBBKYz8K6iXRETr7qDeGH2M34UJ8MesLYi8iXWu39MxRvEZH6xWV333n",
  "key24": "2ubiodHUqcaFbpzWafRUEVjDH2U2WG6258siNceNyzpCQ5zKCK1WZsFJFLNZHEDbQXrdk9mAwm7yCmcxm4nBKVcw",
  "key25": "5EGarNADSimaYMHUM98g5QA2WJkbeUMLWJoPqKWtKf6XgzZ6qPXjHaSTGCAF1WfkazU9txBPaHKz4VybRDRFWzeM",
  "key26": "4GdJRyZRstWHREwUE6HaukyPFaz2FCn7FuUJNGktuYK6ZeJQqKHz2UZ83w7YgnddaFFBfW78CDiWjTZ4HXs4D3b7",
  "key27": "3Sw9RBdxixLqKum8YYT1jyfLn6gT94AV5tEFAF4nNGRVeuDMGviddtQkhfZvAvp1M5cbQhpM5saKCyZZ62qJgaTH",
  "key28": "3Kvs2P7DJUsz7UsAPSYGKDJPiuc2Z1672U5ZCVLMA1zmSpcdM8LEUGdpp6KiaT96ptMu2iMFj4KGtMvWczWATPST",
  "key29": "3544qpddGtPkw9ef1cQ9trgp13iEExpmPJYjYvjDCpdXSLFY6Ai7iVNjJNeUBAJtbdbk8ZpjxWBpUs8hZFPH3Uto",
  "key30": "5qxX62mAUXeP6gVTx5Ae1tmQ7M9fhWhQ6kLxQkmmL3FJohgu67fGUdFzixTKeFDgaTaXUF1QozGTXVCKLwwXacDa",
  "key31": "3XdRd2LP6gsBSfegFgRbP35NT3vbZ7iGWtaKkM3Sjx8gPkApjzC7w91e29VS5iKdFZGtCCmW92yPoF5Umpm8i1zV",
  "key32": "3x7ZCGy6L9yBMLt2gVwpMt1355rRr5rHeB1b9gy2FGGUJMfKGUNgTRCQ8RKwLApUdPfbXHXGxaZyHnYLSiPjrUew",
  "key33": "3qf2ZKe4R7X676LFyQTxEnWcT7Nh14XkzQkvfkuytxPnRgmX9png676gHY3Pyaoeng4B4TPJNLB6qFwtNnVNs5Gs",
  "key34": "4Mjz8ptKZ8jgPB2AdwS4DYeU5S65GwDaHEcFUL9DecyanzAUsujA1P9ffp4DhMmja7Yt6oPHTHvwT4N373kz5G9H",
  "key35": "4QTrmx9gJxbz3AW6fLcRrhwXMdmECCkm7Nmz8Pyf6ncorVXnsEAhFraxgraMbTPtmQcppGRKtvSB9MGBPhVdkNJv",
  "key36": "4otmeVDtTi35g91h6cetTnwcPtzQaR8BSqhKwKB48hagq1Vdbsx4ZTKV5wVfeHGnmHaipkkZbf1q4nCxfoxaqDCH",
  "key37": "2S3ruCY4SmnDmDiwjDky5V23ReFS9JU8BBgdH6PtUyeHt1Lq5onse55JFxNTnq4Ui61JhEt8wxR7pxBPg7gZN9gR",
  "key38": "2n9mv5hjtuckEbqxdH5xUzZ3S95geGwemyjcH8Ntjp9YjsKKuPGVbAHWnwe9BkqRgkDCTfZvDHtrdjPtSijd9xMA",
  "key39": "i2zAP9GCv37PTYXi6Ro3vNUcgQ76iBDEerW6TZjNvqgcmaTJzxcPpkuXnnFhT65kWWYmzDrkHhfEwtiNdn3R68T",
  "key40": "394bzTudXk5EXyFQVGY2N64eYLKWiGz1pttnVJ2BydqDaQoT84Bzg65DbYjZi9eQCzBsPeUqSznXwt743R6MWSLJ",
  "key41": "neFkYkLsivR3DQXR1H6B8M4ZrECjusCYbCfhd8TdQbbaReABtNQ2JuNtL3y19STvYYKj8RWPUJgpUjyP6o2AAzC",
  "key42": "3Tx9RRbEJvfke4Giy7vvzuYLRgrZsUvV5LkCoXsFXEMfvGbepjZsywKfB4gW1eS6Ww3ELbMPp1d73znKdrUZ4g2q",
  "key43": "PAj42ZN4HAgV9aSN7PJkWdoxX7P3jL1KtcLAYdw7cgFutVniSfUkD7H76NCvdkvHYYRxfBWDFBPKhegFxTbKWZb",
  "key44": "63qXBXexDCGwphZPu57PAJDACUB4e4eRZhV12bRSbRCMycmMs6W5no33PWWDP9GSvatxgQwSs6ucgpL9TUaK3sjX",
  "key45": "wk9sykMHaKFExr6LBsZ77Paps4k21qxFCYPCQ2Q3A4AHzCEG7gNhr6ZuhSyshB4hH2BX67JdghQrLRP5HxtKyUs",
  "key46": "4zFZtzgSFzyCwdAcNW8acjbBHgYnznxStYUSdEUVGawyjRi8698TVDSVkocsMzrtZ8yBGQ3Wtk7nDHpCnkegpHeS"
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
