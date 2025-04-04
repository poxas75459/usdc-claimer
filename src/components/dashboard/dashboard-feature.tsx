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
    "3baWBN24EJZfLFH2X1ks9Jf8w1zHiArF6xRQ7C8NqQrHehT2xcSYgsfS2HhGzz9rSmqUXFpDw2KiX3hVTGpPW74p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qZUGGm8HyWF3J9qCfFfdtararBr4q2WVkX84zXHypZkPQwABpUkFzRrzvDvSjMGSMr9WznCKweQ8Nvtw2rPgU3L",
  "key1": "4dhSRT1H8eZGndW2UL2jqN4R98PrRKxcd52tWTqyiTJVzcbjYd5NEdn6oTNFgShNUPnm4GjZn2xZSccuuWcemk4t",
  "key2": "56YhTQqFwwiPUhdVMrSeqvm8YYY9Q1UmzzmEK4wbxkTJ3nbuCkiFfH4vhzAotANEFgWK3MX9CarqME1cXGNS2TVw",
  "key3": "2gQb2XSfwpdwYYKYyxdvk1vdYc3qqTQLpdj86eUTLKaf6YxFhoc54CtmjP8eAepecusH7GLAnwgw6Ws2erVkBP4Y",
  "key4": "5P71en76iMrYeMPg28v8Yg4rm8jByiF9exUCprTX6DmMqoyHi4KHF1kKWRnMxPY1U1js9MehmNsxgUPveMWcVkPH",
  "key5": "4dRp4xDo5NjkwS2htY2ijdh85vTDvJx8X5Lhc3BAy1gzBmSmymGemevV3MBmF8FNbcE4dzHKt3ig59pgZjLYiSBE",
  "key6": "54xTMSCiMFFp4fueWyL7SRpENBybuZgch8if2wWWuAeMdb68fL7eXNshgNsmSFA4VrCqwJn3huEm5Lp8ZwPSxc7C",
  "key7": "5ZKYKXCp9JUPKjvKrZF3rviXcu8r3qguAjH587hwjMgadKpq9GzMyGzMFjj6McqokCZFR85tdi2MsopYDdMEPtCU",
  "key8": "33rYHyEzA1mqWM2Hpd2joP87eqFyJXpuD2dASxHctpF5uP1FyrivTKC4ZgQt8vUFZ4QDPidd9tNonqZ6ZecPZejw",
  "key9": "2EwQFkqaBJH4VtGGhVLiAsgKYUos7AVb2XFrDB1tXvaWtBVFY9sntmMdhUiPjUwPPg7yj2QTg9QquCMJgheq2C1h",
  "key10": "5dBY3RhsA2Bb193fBHRCosgEQnRrb3Q3ZJPMjtPNoyWe4GMfi4pf9zTjmrruRmmhezztFDmaF1oepMypQaFQixYE",
  "key11": "3rw2BaCFALZkTMDgzy6wwx5QT7rMykbFzMfscjHgAHDDhzyKBawt8dmbYU6y9XGoLiu9nYAWKL91UN4rywnm8RBP",
  "key12": "MhAJqYU8dyG7mzvozMnsXLH7qdUWV8jXMaHZzWfaGcqTmktoKzHDVBFY3th6AJTPQiE96t7J2wmkDZ7WtLspu8M",
  "key13": "53dr3BVMXnd7jLZthaREuXBikQHiJtm7GXDKgFEomVfCv5U71LbQQ2iGJfF92kzudrDNPr2Rg1miT6JsmKHQhKSL",
  "key14": "45etkuY3tAvDGfCHTVDpCrRDK7rQuuhBUKW2Azere7dNZ3GUMemvZEfaLj57tibHN4N33TkULE63LD8mZRrjztCh",
  "key15": "3AXVQwzTYoXaNkrVq6YJpEDY3j7KSmS5BzNE4zvoywsYBvbs2PWru6wmwzgEq5mjg97MqYTqtEFSvqUY1BQwVcMe",
  "key16": "2FjtQG9ZfyqpKpRHM422eBN4Tq1n8d1mbYxCyfj42A82ewHvH9XHhvxLguV4XiHWWyKPQbPK4yFEUVpTfPvSYcNV",
  "key17": "5eqh1SDrxWjGK5EoMqPYR5p5nn8GktbNrrKZRxoQSm6qN7H2MEhWaBN7p9iP64NHkRYJapmFRd3cQAPbfbSfVqcJ",
  "key18": "xfkWfSw75NBRFoBL79eNPvNGFqG9bHwGiR1ynhi8HVxWU1qQzs9gXLZyfZJr8NyakQ1feqXun2v6g6zVWLiPV1H",
  "key19": "2yPSY6jX83Hps2E7qdwFngZV6LWmY1BVeWBuFWHobpb1p8tT5kZGym9jhKJmoUdxLbw2Ry88D67HyQPg3EDaWWWG",
  "key20": "2icMbjSoSo9HqdvqtUsebTiYDLezp4akSsN38idhzqusgQ6WF52oZWVHKVWmDkfYoqFgS7WP3sQye4aNZAfGSuEv",
  "key21": "W2w7124cmxx1nKMkeq45JRDt8pEYzJSFYQDjhiW5zbpam5KvaNHH9fo4xdVyHLTmsWBvhPZkCmaDF35DXYtsNSw",
  "key22": "7nDG2LMj5o2TcJb7cfGRMT1K4rKwrLKvHch55ZyMRQFobWPYxPxJkaRoks87ZPDVVd13FgLUoPNH8zP1TJZZRUy",
  "key23": "5D2hC9VJxyjhdbR5YAqoZcsJtFMa44e7qk3vccE6y7F8pDv1CzsaThHYt8tQjpsxPAkFxCqrtVyRwrUtKJdyr61j",
  "key24": "2PW9sw4t9WAAmr6DyhFLwPun6ch4KteJ3r7Bpn5qTNFgDwuLtdrsxwjMorBNb8UpGUwFrHxiww6nS5C19LZkEmna",
  "key25": "4iepRmyAmZqXy5KicBiaPDM1uz2RvQTdr7TZhDoWUTt1EVV7JxR5GYfrM4hc6KgoatNgB6CURDKZZYDmFZpSdCAT",
  "key26": "5ySKaRbekeGqiE2NEVXKzP42Md7Sw2vQYMM3QenWsA7i2Yso9bn2LngtPVSpdwCkq9GgWpAfj1cL8YbiThkg7ubZ",
  "key27": "4NtrDSaVX5xB3GYcX44Amvcxb7JJ1QGFjqnSHGMuKdQ5gdm9sdb9r5sqRinyDzruKXVc6RxoQmBmdBcJR6NRNAQm",
  "key28": "5NfTTCoiHMSW6pH8C2uKLTEuu4fCf4aTMAprT8ujcbk9e38G5od71uF5DqEDJwVmxqqcRZKJPWV19Gcapuf8paij",
  "key29": "42nbQFYugjysdaLboFpnuMaGDV8ZT9gM444BaEpBiYHrgxQgi6zTzM5sVT6zRhkWLqBB7W6Ubozu2emcAy54HTML",
  "key30": "2nnxWWjK41ya6YXprmiD7yAAZJ9ASt3L4oNfEBsdkMrFtGhEJ4dnLJPnF1AkHzVJ6VbwDSC9SGgk3nTerpghLzvG",
  "key31": "3ej31ua9rtFAjVg1uaLuS9X3zb6uKe8c7E2a7VepLtZEc1C6jc29uJT3f67r8XgjK68tdqfDgAoZhLq86qqtrUj",
  "key32": "2EL58oGniLFsG7Ao6E9wWdPnVUEDw8NMrzP13fy7EPRxNFFMdRXTgFEzffJKznVf61WwybbbgqtgdCmDGgZteVXJ",
  "key33": "5FiSEtKNZ5HJx4buZrt9io3QkHfWX74vMFWRKzMETNmA8yYS6owewK54YjdXqr5h5uf7RyqrSnQwoWSmwZFtxcFT",
  "key34": "32o9SHGEK2yp3Z3rrmax1MMwFHLtR2e6ig2h4sUWD2sY12mtWSfV2t6Jc8LscnsqZ3XyBU46s6jCiqnXSQMPWyeC",
  "key35": "59Y8onNRHDZLAALSaeeVRxwv4uM6inK8MSZxJvhyGHdpd92jPaW1wX8wZiMviKPY6jVBM2aaUL6gzAN88AqAJEXJ",
  "key36": "61UbonYiXU2yWZCimezLniL4NvkNGkottXToDYAvAyWwLX9t3Z3CVNgqvj1TQpWPWogXyKN2a4WBbqbyYhaZmVoo"
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
