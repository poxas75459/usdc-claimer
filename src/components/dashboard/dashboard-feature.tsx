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
    "2RdK8UahPVkEj5j5PVeBQ24hByCdAx8wvzDceRtMcX6j4krSA94sj2sVNJYkgp6diJzoHPVdp3xfMEwv6vGieS7V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zt1hk4PdQp2kbhHvNoeRr6FdHMrRJNeWYBM5T4CsANnMPwJRfZLnS4UgpHujZappWrGYacmxGwE1TSp7V8uz5Yr",
  "key1": "36W19ST8dPAad82WRLKmeJt3BXtoejkH4FGyjssfAbHBf3gq46qfJ4x5U3qhXrCU8bLnnu8RobQfcCjPsbkMUNkN",
  "key2": "2iMmPKJkmNX5JaAgRYWSqEtR2EV628dujp3EGPbWyRuPKdeaxNV5mxFCzR4bJYSLio5cVunktx2MwtfnqZNtCBcg",
  "key3": "5ha31bu3qAkXVLxXKj1vCdQ6Jg6vfKpHp9LjqQqo4TCgpBWGvy6HBm53XQ1B88dF4F58XipHaSbHGpQ9wPX7rptD",
  "key4": "2iY7VCHx69y2rV9RGz7ZFrZLb6TvdeqQNm7MXsYEzvQ6aLU4WZZdN4JChTLhryBjQqqeKZnJF8VtSzivePkLRV9v",
  "key5": "3GXwC8q13b6Pp8PV7GSZM6vbZMokprsA3xK4naH4Vay3XqKT53EnCFQDJP8h7mc9hwesGab3ZHHWVt56PKdCp9og",
  "key6": "2Mh1Cv5ufXHvYvnUkuNBJGvvHbqsewHCvQGnhPvMmkTRG5pTyLygyzUPeuFJgjXBy3cg6mL4ZgpGYyFY3cugqGGe",
  "key7": "5uVEQUrh57PksuSv4Mpmw5omMpufyWuCEwYRFhHL9UGtiowGVGXEGm4C1FbmvBHEvxFwYxf98VpTGPXmuFStoTVq",
  "key8": "4cxEvEH3dezUmtGwjnW9ZG8JP65AdKMkUyNhrfmbN43rPx7cZ7gi2wWdSiSqts4iWX9K5veF6LTqNiaAbD1aiaPn",
  "key9": "5k7xinb3VRPNxcrGmivovxz7koF9dE8rRPkTinphL5hUw4Mr1onjtRh7x5WnpzcqsmQXjVRxg4PQF8DiCMLmgnbs",
  "key10": "KFFFKcYfm7YKM4T4WhSJE68UNZU7hy8da12guCc18SJF7rgEjwirnYmnk6JjyxPnhwnv91g6WmBV2pjngx4K2jY",
  "key11": "5jiPpVpoeMRr8vKUWGD2a9M8i7bVwjJxcnPqRhSiCtqFbHWN3YKJUMA2Qv5rnCkeVhGRD8XDbzAZFveBWoXKFjgF",
  "key12": "3eLcx538vtCWC5s4jHCpNMnn6hdH8axymP1mLRTrPvEfvF6z8dK4zEbfk8PqdPG75yHNupUMgRvv1ZPFHoemJg3J",
  "key13": "2LQb7dYAianWSWmxdB8MyjtAqjGgsKYHrxyL93sW8wwi5dtv8e78U4bucUkWgQRxTTsSRNi53oEETtR9UqaHuQSf",
  "key14": "4E3McZ1Mj4Rcd8Mhi2X1vdJNgbFuPw8b2xNF6DSsmtS4Tufi7RytfbN317ink7PwchA5EnbmBL2HffW41kAwEjRP",
  "key15": "4Hqd39pxtJVs7YpiMTNVZr1E19n9n3L7K9LKe4qqc5P6W3g35Q76HoZXkqye3qnJRbfmkG7cYwYbYpAicQ112oXw",
  "key16": "311PANqv1ZMzHf7gbQXCNNxe9YBRvt7iNtM6Rjbw3uhBKaT3J1p8WBQ5WWecSChiqjq4RtgqfwPEDBMgp6bUgZHS",
  "key17": "23PmyRxdChUK4sDMJvR8usxT1RRAw8jE5bkAQUTTQLwkVHNeNvgAxEbyZ5xi6D93SrbDmdD9EuWdn1PCn1QcjPjf",
  "key18": "xHpB3sTkDivrDJXNEuH7uVzXfpuYahGTMNYEsQCmUvpTEx8pvNzeZXham5Qoohj4SMg8Ytv7fX8CnUebFKVSCMS",
  "key19": "4VVaLGQUyjpgkwbwLifHdQ8YszR37kUSHmCYkHpa6Kk5ECmAntWmiUPgFuQhtXj2kEMQVnyWsgyEfWpKQed1jfFe",
  "key20": "2giRDAarhLs8zH5kz1qTzhfV4vxZtUFN8TYvzn7feGC1oii4JGk6rDAyHaCKZ93Gy9BaqoWyWVo6hHUoi7Bda1PK",
  "key21": "v8igzQ3pwQ3B1uvtCZthcwAh3LQL9Gq4fhaYaucLebmo6UUjUCXS9Syo9mL3C3LdpCb3rHrvNA74oefDSYUT1kb",
  "key22": "2ypmaYyaVxGMjVwLjqm24LSrVBdjfR5jVTjReh9ZKBrGuRupNUtbjU1W2C34snvBZvUvFJHayhMnodviDwCGd53X",
  "key23": "2FY83RsC3opovHpA5WaycYH16kxdZvKoqd2ZHCTFfHva7NeZuZbFjje7etrKVEG55VEUdPQKXQpfxMXV4Np5g5Sp",
  "key24": "4dDDJ7pacaTgE2A7NQw4VajWPC1CYHAcphdEC9B5Vz9aMQU9MJiAWGVv5oDsrWnpg49QEQ9SDsPTsRYp9pxRrxcp",
  "key25": "4qiip3cGobvcfVQBqDZLK6VA6SzvvUL8dqD4PRcr1N8MPCTHaryvR6U51VhGEknktX3z2f5JL97obPQh4kk1x7pC",
  "key26": "3V3SVUW3uycXhZc7cEypBs31XrqciCNe6wLK9p6sJPRJuTRKbZHHe913979jw94Z9RWXkaUo4SjoBrDh8C63Td3d",
  "key27": "58KuYyxfZo5eKstLsP3LT1k82HzSmRV3LcqmKDsoAwsuui4CuW21baXaKaBktKgCY3Cv2q7d7H7aSgdYbXWqVRXn",
  "key28": "3WtW2F1Nm5sUSMDWnbTnjY9A1U7XmGnksLvBnuKs4ZpiswhEjxRrKT4Pcdc3NqJhkWf472LowVSPxWyALBh9tqFD",
  "key29": "2DYQrWxvyhupDEsdh8GaTJposGqM2BMTnPadYJp65e86m3F5KeVrmwUxG4kZuReiJiU8Pxk9FFpkWqQdyfueSQCF",
  "key30": "658rJgu762h885BzfBQtxnYzTrpf193XGE8b95KZpkiC7ZXWf4kNbSajnydvuHUnpn8rDoY4FyrPbAUzPuMWiHki",
  "key31": "66nSmwFtHWAWtQVhtofEkQSnwkGzj4bGQ2rw1ADeuECdp68vXjZtTxJmnSeUgmKrkfXQXuspJ6ZCiRx77Ty6NRdZ",
  "key32": "2vVL8JqezVSNe8bS3U7R5EuyGL3GdGYJhMYDiBq1F1EC9TRj8hPus7HsZnL81D2UufKpnqPfTddbst66huog3e6m",
  "key33": "2GTjWXpp2xviXVtv6ooXVLi1mwEDNZarNZYnvZCeCFBuuknABUvLdAqewMwHBQaTKhBD4t8NjvZbUKQ6aXUUu33L",
  "key34": "BqM85hxZmufWcKKSHw1w4sykj65cf5c5N57V2EcmT1koxymDhNmXbnqh6MJM5T46u6trJp1b5QDtwm7M7VHyHMg",
  "key35": "KYYU6q68vqShAaQaXnG3PZjLMKb7g6XHCY7M9EpPE2oUyUGZHJGa23mnEQRAEtTCu4goqEv7RSzqusCvbUEhSaj",
  "key36": "5QaW8dhjvPsWNEQ9BB8PbpeKd19YBMcUiHCQhJM4KDd53c3QbynQb1RDZfWJ482ZWBJ5gG19qVCeSZrE59SwdoCQ",
  "key37": "61W3R8xjh6K5mVUZoDfojhMhddkXrTM7Z3bB9E5jrqwTKPLSZz6LrgwZpRNVhn8iCc8vMrznxWLDPh84xpyNdjk1",
  "key38": "CDjdeYR2nLN77ecZyXkXogQZQtEdtjSUDD1MjPQayDXoeGXaG5wWrTFw1FcCSkhs4mu49JdKWj8LshGE8nVqWZb",
  "key39": "4d19w9fGQgyzPYABAHun4nf9WiUi1QiRaW76CUGhCCDNotyQnWcTMZALKFKXkv29dPCNdb5SaqYLJyGzp5w1toyi"
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
