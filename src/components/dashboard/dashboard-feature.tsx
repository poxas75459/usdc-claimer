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
    "F29LAcdRtxQSZpWvnr95m5tB364w8wNismeWZdPWUQs3eRKpwZV4U6v9ZAkv2Hvopa6z6D8DzEYE6zJ7nrw2T1S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uVaxy1WgdHusWXBHuxGkmjVDjrJRNLw2y4ERYFLmXCKeDUKEMvZzwVfcHyYZtbfk5d8oaifDvasyKS1EYq3SXsv",
  "key1": "3ztepT94a4uMgfS5SCU3iA3orji915NVxErJ8v2m3TkGBG9787pJVkHXr3EUHpPs25ebgi7ZLen7yX4cjeHKcGeT",
  "key2": "2JeJYn1foREJQZU6GCBd5kZY8fEdYuVUD2zb1QRcZBSwB1F7TR1nvSX8kJw9jwEruUQuGPkVAieMvkPt9mxoUGvr",
  "key3": "5SjVK5u74djqNw76wiTXR1SpUGY3EFhFsY8jhawYfdPhyFyVQPabqor8CBv2nthmgRyZoKKk7CgwvRw2s3XcoKHn",
  "key4": "3Y9WkJLTHKXn9z3MKfyeuBPjS2QQDYjL4RRBD2atbVBbHTMKa3EhTE1gUtAJ2BCApCNYd1qA3LVedVZV49fQfRs7",
  "key5": "4G59g83j7uZ1akzA3HoedvU9uoaAzuxavcKDzVkF32nMvkUsc7aeVtPgpRzNPn7NyhebZZkh7LywfZtNfVy5dAaa",
  "key6": "4nArVh6SPhkKEWcTa4Y1ExEcDZTGuk23hgeXtpq4af79TFKvi6bNH3eXAC9PsG9HBB8RF67QrxiMcZdTnDi95KwZ",
  "key7": "2NTtBSDCxUBjU2ZVn3TcHUCpMVQpnCn3pd5vKPcXsx7fqkH4imHZdbEpE3az2K3jcXaYDgRDrNHoP9r93JNpohmd",
  "key8": "NpA5iFDrzzzQSBbPixtdarGWFmQgm9VVHj9vxSjp9cBG8HYpM6rv8SBPDU58NK9gZCRn4eTZBcYA9xYx1gTHt7L",
  "key9": "3GzFnz8dWeUHcrAtTmDRsAvZP28qKXxd11Cd4qv1G57oXBbVBgUWGSRyWnX542FyjSe8cqKq6K1fC8nZ3xeRa284",
  "key10": "2ZkNhS9EkiPjT8yP8LtgS1TTFgPdaRKMgYsEuftkSM1w5Nv61tUwvSAauHkmbrtFGjTezGWXVp9xYBuaq9EMW4DR",
  "key11": "eLo78MdhPLKBxLvf5gZLK9JzUKaVet1RHDzd4S7Ykfz1scHtC3Fg3Cwtc2zUsTfvsJcLipS7NQGPg5ri6JxeTdh",
  "key12": "29Du5P1cvoGYNzhPE5yr9qArhBEt1rT2p4w6qpgNEq9GpjVjjzqeNQ6k6HQrhaNSFA19sBHYHEcsWMVgaznAQN2L",
  "key13": "4vZA1o4NKCoyAYHwtWZ2pWd7kBygvehu2CQ4tfDUZS65qoAnoH8aY4vRaLaMohWxFfUjB8eC5kYd19gMCsCDq7eS",
  "key14": "3dM2HU7CZ8FKCpBZXJB4tyLk93h6Xe8bSaF3rpnDS4Ynm4tmycoBLmKXDb7vLyeiDD9hFAwsfDWZRgYdbgrP4ReN",
  "key15": "5SojGmsncJKvFXdUBf5fXsspgTxS8Z54kjRvmihVQmsikQYUgX9mMCatazTQ8wHidzuUinGVeWuuq7pRNV3uBbR2",
  "key16": "55q3d3QBGNzDPzcFk2E8YgKYgt1qjuE9iZ3p1mtContZywgPnyfjXCJnRtcjYcawhhyN1yuxjbxQLgHyuCAYeh78",
  "key17": "4hE3UPZHqvzxjsTzwtZw1j3GTuv4S3MGrcKAReWQfqvrAa1uFxc6zXjdtyaJpuohQEsSDBtrTJqryLuVrYdzgpf3",
  "key18": "4ivpkHd7vrfUosFBkGFTZ1tQ2hFgpKwXMJ4EpVpWns8LFw8iU6zg87jJJfdbvoRy57vxPWQBd2DYzCGvgXGBV9DK",
  "key19": "2nttde8TtrLzDjCMZuyeMSSyTMwBKzTDCnv8Hb3UioLwcinEa56KQi1ZaWQAhfSNN9RuNU5q9eTxWUND6Zk15EKk",
  "key20": "5yPdFbtMYMW9kdfQBVkqc4S8qFLEzqEua2zJS4Bh6MQ2V89Ye7tFkn1isM9pNKW7gM8TJnyB9ffqLbARWsr5YxsL",
  "key21": "2cw5DSa47TvjA9vEX9AtTzcPD52x9RFYu21vCadNujUAVXxUPMWqjBgvQkxEGE7PRhmnBKc5NcjDDNZ8ZPqmWkaT",
  "key22": "fc2Nzh8rE2xybV2H1zAQzgkgQ4TAjJLcUVMQxPFoi9LciWXkpdi5W6n4ooFgEBtDynbVpyfY31GZwXCdEw7Cjqs",
  "key23": "4TzTsoWq3YY45AgfV9EsAVeQPHarydmBJ4aPSKGJmj1Gb14LgkQVnPyozUmKvwudm5i7VEkpZezWbyANUsx2JarK",
  "key24": "4THjc5HptAS4Vk5S1fFXyKPZa6HYqx5UL1iTnrmhrpXmGZptHYgkGfW3RKqyTqTqE8qVko79KmovcKy6NQ7rFsig",
  "key25": "xMziVoKTJyxg8ikascWxuJJ3bG19muoLem55uiqP33Tdq3JsaHsJfs56Wz2mfZzxJJXSpC8xmXMvJaCxoph1BcP",
  "key26": "61tkogiichwBvh6A3rJCPSExEV46Eo4E1LbCsm78pMpPw9Ly8qBwUqKzmzWWdHZxtAkgLtR7dTE313BB38vnP5wQ",
  "key27": "2pE3PtNvZQEhgxeRpNQvhu61fe1ux8shpB9hz85k5vuDnta9Y8mc2tZuceojbBc6aCLS6yNQviUbeu5rJ96Qyi6R",
  "key28": "3W7xCpEixPAuezTcTfa7AeJYhSD7ruXvNev558DukqH47j7nvRsGDX6Js1o5RDEc4K4Mosie7ojLqGL3c7BE6h2i",
  "key29": "5582i9E2jbN1UUkgppdTgvmdMtFsfVUsYvHP13DHJ2r7ZLWTd2djdPF61bLUiEKJcwRmERdu8q32f2b2UpWxK3pM",
  "key30": "4GES3qDKowsgV3MEjGMs5iqMNXtzdzQ58TA89jCrjyA6To65NkeGyiwRPEWfvr2THTVtDPWF7X9mQcpNqgynGGQ4",
  "key31": "4vfyk3AajVL7XkAYk7Bg2WtbB14yw2RkVxM7zvfLhKXK4WhZjAEWfevoKpuJFkV2UEXG59pR1J1RoR4gHzyqdtFi",
  "key32": "yiyBnxBBBZUQhjdGbriTcKo94tVHDiCiMGsQhhAwtJ4GgmZgot3ojLxUk2TuDXpmu18AYX64x1k4gTSeWKkMPye",
  "key33": "5NH67odrLtTHnFcQJyR3WHE8jeVS3885VEypSWTNe3Y5eyJQdE28kR2QZ9JvMrAS8MyMr5TnCCd6MB7SnemHHSow",
  "key34": "4UV4gVwe1D8ZmhCD2WaqhgkMhihoU6PeDNLNbXRfukZqbBKZdLS1T7myHbr8FJsfCYJZyYzqYpgrPtSSevZMEcKa",
  "key35": "3Nqi3g55ptBAmoVcrWBqKEEQbPFvouY1rnEWHhNT183u24i4QUVJ1ZmKaNuA2KmmC83iTzVbKKuUgVfxXVTZTtTg",
  "key36": "4MCE1ghiYhQefP6WZJQr5DeVQfqmi98PzERjgnf9ubu3is2cQ9kU4HN5kPDANoZFz9JKbKGb753S5QGXu6XXNk67",
  "key37": "viZapyX34S19rCqChvasCDwPfR1Ji7hX5g6VU2t1Cu36XDncGvE8ehK2ZzvzPg1LpVJ4P96zejS74AbbJW8pLcU",
  "key38": "5RHfUXW7oUPW8MfYNZG5nfDCmTaCSC6hBdV3DPCXASEjenWiVGiR3i4rCteb2zyCrKxyW5Ycqxded1EkEphjMZMg",
  "key39": "49zxH2bqJq5iMzExP6mVV69AA9pnr4aCARhMYN5mjAFEZn72HY3R2vYPxA1FPUmQtjMmbQuCUxCrMhvuYJTdzqpm",
  "key40": "a8wMNiVsCZ4WMCZocULRQi6DCe87YEjoDorkHtcu5XvzKV9fNxvj7ENWZYqf6ogzFsai4bAk6YjQtbyaENXY26M",
  "key41": "342FHuySFk7jBEkMXCtsb9iVByvtWHLAAUKdkBqRrfESXDHbm5JwC1Zx8bD9f5uwpBqWFxkNYCRPrefmumkWkW5p",
  "key42": "5zfNq3jskr1jZYqKr389NeM9P5ZmEddP7jEB4vqP9agdv4TBvjLfwugLcUSCbUbRRXDN2TnPurbQ4z8WA8TNZaxf",
  "key43": "2GCfHdSMHngSDkU5hsPF2MKB3FyyQKRTS4b1u2wvL7dhoHWUZyJaeqPH7m3xKNoizFsAaYrN644CK7ijjPCEAUZF",
  "key44": "3PAWiBHjoeoVNJsbuknMxUW3cuEvjHM6VB3KDNSXdJuK3Q13vrK5Mzbx7pkgysSwBi87smBTsEzULjdCyHGRbaQ6",
  "key45": "y7KRMpQYaXk2teQjPD8eQpuadJ1YyJe6mNfdeKDvTBnbN6cUb8KfsqjaMpg8WNCanuzQtPjrFytMF1FFG93K6YZ",
  "key46": "2RpFC5C8Q9xXyjBmRinfhs2XhXHwuR3m7FzwJ4Mg29jCP4efB5saafd3NdoSzawGzwbNQ6NBWUz7raTz4vfHzgHL",
  "key47": "2zgmRkLp1P1kxuoG8djn6SZT8SzG2Cs3QAuXwxCckCBbqmN7hiajbkX4oUqBPWmcCZDP8Tx8Wf8PRzJSSumbP3Pw",
  "key48": "4dszjs5Ej6WDhEC9Db5sBXjbVdioSwDR7T7BtBEP7qSx7mG5zYLxR8NNeFV3YgT8Sf8oYtfkqqeStSSHmPaoDiy"
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
