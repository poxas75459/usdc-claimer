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
    "2cHWATLb9h9jqUpstRuC3caz4m7WnWF5Siq527sCcJwCR6iEdkqZBt3BtLtVBeiRhdn9hZTiFzFxe945vY6eB6u8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f7JBRnPU4MF8TzNwcBEBwsKqZssAr4vAftqFYryZV59qvCDUtuay6wigrhyXUphWjGSoXkzaLsdntcBu9PjW16q",
  "key1": "5wJqC6hoBANC3TUpNQD46MW5jLvanUcE1jw4N4rzR8RhKrJkGGKcDnr6MPUCdimQmfk83rDa2hMssWigXJqfxXjn",
  "key2": "5ppMi61GmauZ9gaVAMxGxdhhaaafD5aKv2xpgtLTN9eo5cwe22oGZbmMyYnRBqZHbX9h1cQp9X38xv16G1guTqd1",
  "key3": "ENV4BrzyBwPLp6ybXGjFoMwuEmDgchjzJ3YK8LTS5y8Y5nrvjrMb3wSibXH2scDwGTabkUtUUc4mkmSofSuozSf",
  "key4": "2kZ1du8BUxWfbHPfN38hkQoQcnrkYyNkrRXtG2Rim3gTxX8iPAuXRt5sQ5hDdJutPWTY966j3omJevsaXs9xeS6R",
  "key5": "mE8Ec3jAKR65WNK3Rj9TKAw4FFpFy9YxRu7syYmBKosbUp9misT8X2EcsgQgQaAMuFAousN2tyw4wWaA8jgB91P",
  "key6": "27x13Lx4hxPf68m2EcJFEJJ6dYtHxLWyMnXh6KTuZdRPf4CLbDq5cV4uEZhxPsVpfFrn7GuhQGy9E3WgixZuWRfi",
  "key7": "3FVB2jTUvaew2ieQ1XWewPwWw4EPJMJfpvyQGvF28SG8YdVfaC4Tc8CY2uBTMn4ofqrMvtFJTfrCjcavteC8zZ2r",
  "key8": "4NL45tpSqFonfd51REGQKYQU8bnkwTnwDhhR21HJ4tJeo5HDht6ekCAZB4FimH9Rub9fwFeExEuyWUphDEYLmE88",
  "key9": "4bDwLKQfwhaA9iySy5UNMVBzg4X67R455WQoMiLVLmvTMd6wK3VA5z7BT9ECbxtQbBqyKPSwyzS9wDKymTX5WKTj",
  "key10": "5D81btNTWFjpZtFnXBXY348Nxh8GTqVfWVkyH3Cney9THD53Zk9j9jSFbkasjy1tzju6zRWqs9o97g4CMzXmGUVU",
  "key11": "2NN57c97miBkWXzyTvDdMNG3FLYzy55MoS3fzBfgdJdXrzQzzxwHddAeq5okvTk59URwwchPintw3GgzJM92L3LU",
  "key12": "2fQE3yMAZxYz3DuDv8YSBbxtKjBftNU8qr7vynfsNtKf2AHSokzsTWS39QdHQ5C2pi9xLgf8wLbv1ECCbkFcdd6U",
  "key13": "3Ke9XYm6kjJzkMFtibkXK5b54os1myz4U6KRnWbS8dVydgpxZwaTG1jQG9xnjT748GDGLAGRJHHp1gWkRTPjrxXr",
  "key14": "4ad72PrFP1V8MGRNEcMzK4AQe8xp7Lm8655nfZvSoSBTXSMy5TNauz1zwsSF4cUC5Bpd2dMcoreryXYoMZd3X5y9",
  "key15": "6454dPJ51nwfmEJJ9pujoGddtQoLfmfHApYssFgaeYa4kSoGcU81odhiNgnqZwjp4CSjuDtwCKFtieAaZqGz7VyS",
  "key16": "591xAwZxRC3Hkrw5qZnaF9MNDtnBLEuBLwa2qgTCQT88HAKApeQUmF2BMFW4vEv6Dvr2XV3zwPXE2KNWAY1y4C3s",
  "key17": "4Zztj85hJpqDZ2nBk6EYh6GhEBG3u6y7rBfPMhb3m79sGuk3Agv9qghGNB6LzLWtHAh8uwdSosxecRBhZvUAj4u9",
  "key18": "32PBFTxW8YW2bWJ2dRNS1xoqYguHjkXD4rPkYYSjwUfrSdeuSesHKzkdtKEQEfVqt4MrEJ8PytEQyqs86rnfnoMm",
  "key19": "2T8Wc1sRYQLxbXmzhShyaufQZgFJxeJJvneTSo2MfvTPkiJ9J5QiPy9C2n4WbJ7xeLA6TNrkjjZQ1PKJ7Xk7As44",
  "key20": "4XxJZQMD1EtKaaryhpaE8G1QikYPABaEoJ6a7CGRAb4ePFek5bM9QcK36pQaEmXLr8dbcz2ATmTFVtbj3Pgjv11P",
  "key21": "VG3pe7gbojb2TqaMAHhunq7wwYMQJgo7U6XgRwzqj89EtoEF8GrixTi8Tku7i3XfJURfi1iKiyBQ8j1Civ4uHhL",
  "key22": "2bJRnwLcVtGMPqb2Hft1wSd5KxLkV4cSvNrkL8WQyqazzKdvAWMtaVHUCATCzUrZNTt1RPSnz4mf43ZLsu2Rc1nZ",
  "key23": "36Z3wqsc9KWs4Uc4169mEGVs8cxXbgop9SDZS8nzNX36Zb45KJFtHDjP2CeLkSqMSonM4GjWF1hxPyx6LGFUdURs",
  "key24": "5hn4XApbN6NETp5kpS7aiPTrKfecbJAdXejNJ4ZGZP7E9QBkJrexhu7ZNENFLBgwiSfE5DDE3jqNA2cCPfAfE6iY",
  "key25": "4dSRc51Fq22fBpUaKRS1JtgaYY8uCkGqrWhPikVpcshDPAiYaDKs4SrgwjeDxS4tAHHGRH4qJ8NpdgPwZEL1w6Vb",
  "key26": "5h7ACmvoxkA3wGsRbQqkigQVf9XWhRQ27Nj7Z7XKzsHfXmpzxYebAd4KzRLrJFQYnFMUHDebYFn5RykF5c8UDaT9",
  "key27": "583GPd4ajae4FiePS67Y44zjSYe7pjYNmXYTNctv4YsD8iTTEdgpuaRsVmDpsLijaCGHVWiiX9TpRgdJwzECCxH7",
  "key28": "3PSzwzYYMocKZKjR6H6C13fPrGSvmjBbrUnPaex4aWqDSFfDuR2hPs1NyZsXYs2iXHiWxr74KvNqbDTYXtQyXbZa",
  "key29": "4enJ124rRV1L8GnYyNR9Mm1x7Zcz8c7kz4gjnRWtYGgLgyFSTN7BvAFgzFGYqHTwVsPseYwgtAi6yiBczuj3hFxp",
  "key30": "3JGw8zmPo8bxxnt9Pv5TfjEauuWzwJAHZasKxLULtDLmRTWFvc6ExD1E683Cw6KcP3FuXaFKhJUp9WJf3ewDpvQB",
  "key31": "2qD3YD7agLUsGFX7YQ1qBgdHds5BoevgHe8paX3QWqCYfKeq3Actgevot4nkxJKVsZyatfLzfkAnoDYyjYmBPm9v",
  "key32": "4GJNLzBNv2dvGuGGzeMa1KFQDZd51ZyfB95usCXwYJv6KQEWoL2KPZFbc9rqgsguT5eMMohN9uCmdtj8XZ8MMvUL",
  "key33": "5sQwTvs9ma3B9wj6XuydkeXKyqNM74QotxBnJK1uGBKZqpco9LsoYEH2JRyHF6mvgvN2RTmu7xhgCbE7YG3qAMPc",
  "key34": "YDnpXfaB3m4CnKpHyyU36qr6C5T2a74frSRvDnG7NwU3eowQGW8QjJk59WKWebpvoduqLTxUJwzPxvkoAMnXoeK",
  "key35": "3z37voQCsQavfzCjUm8YLn4KHpoxfPXKad3L66MHXve8Zzn6Nzq2YKUnCNUvQbRcAAgQN7oWGUJ2zq4juc9P1wZ5"
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
