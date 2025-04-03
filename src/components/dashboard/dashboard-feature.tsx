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
    "5NP7e9PZ1ccDJJh1uhZ9x13CgnUD4bbFsiUfZnogqAkdq25BWBUvJ9tLR6iyjHsEsmpK8GH2TvssjbsTLxs974P8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fd7UeyC49FZXJ7PqmEFGwXWA8aWfedxE8QdVEhE95rfsaFNhq9KSPtcDK8zaLZ8ZWRv832oL4agCKyHVJodQfJy",
  "key1": "7muQCDnnGo3B6zkcabqo7Bz2dWotntfCAtFVdv8d2Ec1odBos56tvsgfMgnpENR6Neipvgkb6S2p8S7TK6WZG9c",
  "key2": "4E9MCuLmtdkrn6d1ZDiorD892y74wH8SGhUw7Np8qw5oCMnVi2g4yGezmaGbH6d4mczKTxtoQYcEHKKU8rMyve4X",
  "key3": "48cyiBU9frpatyf5gKvJ72aNtdgpmtQxiQVonzs12ZBJVhVm7GYKYyJtRJigZpB6E7MiH6KkLRxcBWW8KTyynjYt",
  "key4": "2bDYC15Zuk6rkM6GynNZnL78fYYv3mBqhR9t2UDsduX2JZaCtnr6TE9QBC6AYjkAAGQJYFEqPnFPv6j1hKQVACD2",
  "key5": "TUQ1wmRmw4vNQATjM1U7aW9bWRQVyGtmg3Gb36VgV67umHram95nwFe6Dym3CLsFbKawHUV8jVmEvz4beYVbygN",
  "key6": "sCuaNjmX8tVttsfdmW5BBrbF2gf9Qng8Zq37m6rN4SDoECMk7Pqk63v31CWMitA5T5NdxTr65eeffuZYvKDvTTh",
  "key7": "PFUNhPpuVAspGq6c3y5AhphTRicxcxQ85qNTKs1esKxYStfwAmijQvNPAAyR6k5yUPgZyPKdEFhzmySwGmyAEDs",
  "key8": "4cJekqT3qnjGDbyVGKCPcntd43V1X8YrJDDffo6yFHD4BZVDihB2RuP6ZhD9HxFNWJGmqAHbEUnwtLSHZTBkeW7j",
  "key9": "5mmQPkR4o865ZHEYbFSpX7KkrJxxDqmBD7RKhW6UFLpSzpffvScKg3GKNEigoDsjg1g8oM9quevcKbCUG6EtEctn",
  "key10": "JFo5p1tpJXdLCChQU5XAB2hh59rYNb8VStHsV6DKrfe7jCyuTFWdupnA94cxaqMi2QDaRz3DxUcbJza7oLBz1M8",
  "key11": "3LMGcM7XF9RtowrWg4qaYeZ3nDzSo7PzAfXR1UkRoFUQsbfSuufYZZvJZZfzn2PNb4bWfxucQ65nDHvg7mn1VdED",
  "key12": "41wWZ4cBUcA2chFx6h18ZA4Aq9LbhT882Fw2cAA8X7qaBbRiAG7jFpZbx1HTJogsA8cYJeH5HRw15EnMaKXgRrNr",
  "key13": "3C6EgPq4TY2ZXTEsjYuwHznjWSHLrzjERBmNaHEDtcwu591BoWG6B52XCxvwest5ai3MMfxcxk8fyobJFFv7eVrZ",
  "key14": "4GfKgCeZFMaGBKfV2wdxUSSgoC2Zvi9JHZws36dtFfAqqSmyGVf5cuvqWY3PwvRZrzCyGfBuf5tEd7zb5VhvJEke",
  "key15": "3irJ79FDeeJsv9hG5gqsfEATPqApuAEtdFKeLEUAg6pCDStFUBXFEe5FztN5nzwrLXTTCbUBtCinhxXNx7jz56kE",
  "key16": "2eCx5AaQYouxrtgvcuVMQ73UyUFn7pn2WY7trhuRHe1HYdePY5YwuzWjBqiSApL5K8jQPHGtryfrkpbS8C8n2gS2",
  "key17": "4XmbrhWiF8tYwVodiebMnoTrX9NhJ8VF3aYrPovC87v48ZABE99r3P3yz1zuxaXJf52TQNRuwsT3LikubvFmsgAZ",
  "key18": "2NwRUc1hDzWuVEcfLubAEXkPCM6w1VHZfVZdhJWBdPvHoF5nGpHuiBfzF6RkheqtUYb7XXvwf6X6U4imNKtEiCAS",
  "key19": "su8XAHzELavBNPaLDjbCdQCq46obQwmPSTPHzELFUQZ9JcLtzJZr18SxxLC9BwB5tyE8YbPSgVUPbi9amj7GWTf",
  "key20": "3vzBNTGPu2srwSr6c66B88qw24r3HRK6xSkfEog1NA6aYNWVUZWoWwzY5LU58KtfiGuSqLXMxYruxdUnxCxZAmQm",
  "key21": "5fXAzjuZSWU51HmUp6QEafDoXa2xKb5NGCG3K4pGaZ7m8p5giwiPDEtoWCAqVcboXoHNicz4dZAmcGhxqBNkvSTU",
  "key22": "3MfFAHL4udJgdH11PP6t3JqxgQoEK3CTRVXUUpP7AVUh8VEWWTE3bSSipox2ds1poiAHBfBNue21TwX55a3QRiRs",
  "key23": "wFxUvGDNarTs5p2WPcENigcJJcyUinbUezLGB3NCdhxSRUfCLitYKnxwqDFYsj7nFaPoCUy3xzMtm7GeDmxF2oJ",
  "key24": "53q4tjx9CPjuTk4phj3s43hYzxDSXCbeKykahRKJaTfyGg5AWr2jxSuTkmc9C6ftBrM64QGMRVmP5KnsEFHK7kyL",
  "key25": "9dgi7JpWywEVYNBEFQd5G9aU9FAwmn4t7WhPMmuriFrjTHPTHj1pBq4JgUX5VYpvaibcSBEBZQug5inKnTyH6sT",
  "key26": "3njvWprNHSuxXBMjrxjgeUyLJz4YKWL8sRJZygswJaLRBJsAWEEUDPHSBKXMXNTzYiRRKyaqUgYVLiF5QxUqGEzD",
  "key27": "4keM8d7VKT6GotgjuQT7FXKPJ8JEKZEaykkPSrXyvqHYoKcdSk9DTPUVLWAfLpBp293BjzaEHLnym3ztYGo9DSqG",
  "key28": "4S8rSTKhLsoXLaQFYzVN1Tx6sbUf7BwuNs8Yw661WwDJA1tRUDDbw85BUe5dxuQmmqZymzWjtdX4R1v1rAkP3m1N",
  "key29": "PsY3GRprCPXgvyY1nWXZ97KsxyGdYqct9g2orpBMtYJ4eWy4aMNLxNo4k8C6cLkPEXTrz8LH6952QHgudLYSwpM",
  "key30": "ssB7ggErEjmD2ZcscWDFcjXhXv82jBZLXsJKRXEMDTZHnFKnrwu3ngZKk4uqc7niXg55xtvTu6d5kYKLeYiTCsj",
  "key31": "2B8LUfFykNkt58Nb49KL9xNTw7npAXnJ9SAkPeqhvfyWEUmW6NLKfFnDqqFXAmKHp6STyHPgiNPd15bNSEfMw8DN",
  "key32": "3JQMHqGVnXHgxbHjKzNA7ABcatPX38meifSqDtycSmePtDkMRoS76oJH3HapZ7BpHgq47K1SFQasmcNoYrR6bWVk",
  "key33": "5PUxV955pUghfsZNmX5C6WQ3FVYF8uBAjHZM78QbrfGawRE5XQt4aXBBCzkiyhMf3WtrC3PjyXJsRsy82RQwLeNj",
  "key34": "2ZF7noot7suXfigW6fG7Xu4vBQ3tuoCDC3UbUkAdxBGetjzgiMyZhtKEQutqNZgJaT6HPumi8rbWTpJH6JDWqUwq",
  "key35": "4oqLhcGo6xYL6G9cwSaxcd6piLMxbSMgkAHhFoiNLeTSjDEoA6QE7w5XD2dxx3dNKmBRse8KLJcLoDmXbCduaadz",
  "key36": "4ZJThrtw5dUjjQ5SCrrXc1bMuBfgu6z1fUCGr1tbtyKUHb2e2pZogv6eopNytXAwXW7wmZx6YF5cjACKgtGuY6Az",
  "key37": "5jWzPaVkn3dY2Br9pV6NCD8PJ4eKnwJEuSakhfePaLtWiJQ8yKhsijy2PUUaPc8QaVV1iA3PzvLCMqNZg6LEh71d",
  "key38": "31NE7Lr8eoxYTsi3h8JqwuHKXHMVH3EnQC9T5r1bkKBEf4XtuizBBg1vqV8ympAHBqFmFDU5TeyrbgH3kYN137PA",
  "key39": "2KcWX9NgrECFAoxXj6pCNXPxKTh94MsiPG6ZYkkACdsicHs3Hv6Wq52kxNCvhunqWLgCa49rrKYf5y7vrdgJVJCE",
  "key40": "5SnyoTjAyC4FcBiH4Ka1WdHADib7udCSL6K4rbNjo6KxYdog2VcVTgK3p4bR3nPP3gxfSVm2XMDYpjooZa4nTqtT",
  "key41": "2UpWsyLbYebYkw4BeEa2xEoPpfYWqN7xdjZop7khmRSnP5kvCjPHda96kpRxaxWi2u71mHrCweXmp63DbKFztjK6",
  "key42": "KWcEGTMXCkiecxqmPkvTcHspaFXgKpJ4z6eW99KKPCfkwxm7o3z83D6cjeAtaTKj8Rpxxdmk5aSvdmfDV3kEY7i",
  "key43": "2U9C5baxQMsj9zykMebaiYhp4SgonRysALgNWFEBowuVAADeQdXhMmvNUcKt3KLGycf7Qrut75SnNcbpT2YVyed4",
  "key44": "2ticEHcLFrA9jMd1S4Z8mZxgm1ktL3TwMFHZgf3osRfFn9x96854GfKmdVrwDXVteTQJcPAnFFF2VwEwXw7tej3L",
  "key45": "5Ko2apFXfzUJB89CjV242ewRHFJUgvFySLD8ZPQTq8RdoBxpJrT464gwNdyavCW2KKQPAhpyAeEVhy1t3VvCap1n",
  "key46": "2iuH3hM1uTDD8oyn1EvNZiKDtZ4fhSbhNogJXHUhbGiKgHGLS6AYEr3K5hk7EvAgsFhXA17zn4CbrUjFMyCquT5J",
  "key47": "49yy7uH67WpAxTPxsFcdR4k5qHFNBdfH1yVQSoFwwysQhcaLv3JRvkqhx4qz38HPpcJ76D9UD2gU1Yd9vqc2xk51"
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
