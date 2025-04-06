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
    "57DCBFKXbtXQNCefu4Xr7zowW7iDbPRtQd6NMK71f9xTVdkThojrUJ5tvXV23DZrUvC9DMkMqx8qiweDw8iX3cDA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wrxZCcqQG2a2CP4nubZ2S93Sv7ZVBJts18FDz91QAiFLPFFD2evFQgnuYVqauMwENd6dsZeENLxHD2eWbeYWkx5",
  "key1": "3veDfPBZbURZjgtGna7M3946Xn3ig6YhLZnBSWinaRWQni8ssYDYT434h2BWsrrjMwnig1b2w44uUdBVJbGxEdKV",
  "key2": "2UKwzCtztxwQGeiLvaxZiiaEUfZUt3bdt4cnLCDHbWNPZF5zjhoNN1BwebFKZdwa4Qdxp2U1a79Tg2a2TkF3QVUs",
  "key3": "3EkkfEJXjNAKzaLkHFLQRPwpYNRbv2QjE3cPJk2MJm58FJU62m6hJSmXNSrHGMziu8SaLWKjHDcv8cjo8UUqsWxF",
  "key4": "4sJRKsnhJe1zAzSx487NiSZE4uWTj9MHriEzaFabMWAHHbSYuoReST2Fd49yWudxHPCFppoJhQw1oxL9CGwR3BFD",
  "key5": "4SmHqUAisLFXK6JHFJfsEMGArZFUWxgpsA6uSQed7rMBqYxbH49Rm6DbqDNuY8ig353QFV9qpGZ6eGAf5V6513aD",
  "key6": "2Z6mp9Qf4r1DWyHg6Efc6QvJWbmNCbmKsHdwVadky8Zie4HBNrcNz98w3d15gSu2KvEaDnVPZqHWN41MvvGr4nsU",
  "key7": "4Z6Z764wj8YYQc1Xh6HBSj5KkNdezt1N3citZjGQ2oMFUe5XZDDH2Pys27qs7iDVpn2ms3TFy1orS2axi911A6j9",
  "key8": "5KwCMYixKrCAESTgvUwmK59XVa9FJhoYBRk92vp7XyVhDfR3HRbVkyKYgYMqkRzCm2z3G9GeN2NrdHGfm4M5Sv8y",
  "key9": "3ykuYGuFKJ8sbxU4v9bhZ8ZcLPfEvWmnDTxavgqfd3ZgL9CahC2bWe2AM4tj7Qi8JT1pNujWQoTMPVzagUg5iaF",
  "key10": "vQe2gwLNCXsMf4EjQm8vmxj8dcJanupqQNmUETQpPAYRR7YyhvufhrMYNzPtu54qPdYe4os5zE8ZYUgs2LVy3FZ",
  "key11": "5niX35TG8nJ1SSFs12w6hmZMnw8iMESdG17RoeY79hf3wvAWpkavgQPurDxz6YFy572ZRiUys9hb9j5FwWs96cWq",
  "key12": "2pEb8zh3AN4E7UmqVTiR1YF6cZb5W9dDGn46nGopaBXSmf7NBKHNtM1WFTK959nhVTJDRiawfqy6P2TiSBgqqo8y",
  "key13": "2cyNVBVB6RSS56tpoYVK8Nq2Lst14RRLJQrvLWKHkGdAP78rP5REXbNMdm3XYLVVjwPMsTnp11JWf4NsDANZiDkS",
  "key14": "5ugT5UAevzwh7LL9USvCNwHREsWSRy8wrYxxodHXuY5Zd79w6J88My8jjvP9ALGD3Gf4orXnWTi1RBsuJ1W4EZDz",
  "key15": "4NbRVygP6sfjgJ1wbgrB51A3pv1HjzPe9cWprVf12wNMii8YpCzR7vD22bJVTTgPGBvXeip3KYZNu4UgEiWckXk7",
  "key16": "5Pkkfi6rk7nMbjfaveV53yWgKAsoHR6ctXddb25rtop38ZzKxb5Udo7UdQmxGcuWoj1VJLtLiutqpLgTzupNopW2",
  "key17": "34PSj9BUr6HNErLLCttQTHDj1MGND3JxVdiPxSeAxqcKXJeCY4nbTqwRT1KftMvUDxmRooBXSxa4pNSBYKy6fAbG",
  "key18": "5X5PL9pccG8j77fe4xUg5pAxpkKcu2dQzaNmoYoNRjh7jEpKanA1wh8r7s4c3iTvGX4PBVDfqrQPxNaTEyH46PD7",
  "key19": "hkGoNi9MQ8tvKpWre8pR1wU1ZzgJigwNfi9Fka4ydqyaccSMnTSthFfVP97GGKP8VQeWr3LXWHRCkW98yQtkS9z",
  "key20": "E1gnTGPdWsEwRxwG5bknm1QPZ2oJsz2mGQfZZKGbQ2h8XYNseWDU2G7mRkRYCMtt88gPRAjLa3y2NvfLDQtEysz",
  "key21": "9ELcKr9D9pyECRE3ckYZptEMPJZ6cCXh1XbRqSoxW2yjvPQggWSa65vyjAraq51xYp8VaZqLEyNfojb7Kopibfn",
  "key22": "3mPjNZEo2VN94V49MKk1LqZTaZjGCweYbd833gF3MPbyLxnZd6BqTXRK1FUCPaUG4ZFyBHw4FRhoL83fruDFKfJp",
  "key23": "5mYh7cbSNNisxaqZHM1anEPzwb5yggqDekZHzFS89LDFZiw2jSYuRZ5DoW7ZGb3UrArsBNbef2sU8C2vEvK7u1dT",
  "key24": "3wv6Nq4Vf9reHWiqA2B6VznnLF9uYnqLNRxRWLT7miz2K5JR3yPC7r9mesxLPBxYkBVcA7qa79tvmzm6eGZW92Wv",
  "key25": "5EHfidshtgHLek6mzq2gTp6JFR5yxRdZ4JFz4uhVhb3grDbmxCH93nJAZJYykNhZZ6pUSFqZahZ5Y5gty8FzJnCn",
  "key26": "3nUKfxqPfmgK1knjBhq3D93j1a7q4mvXUWqxPX9wkgVxFkiNLKMzuhkCouMa1erRCRagpxaUQnq7uYpRzRTfzyFT",
  "key27": "25cskKcKfbyivpL5UCdobaRHhUQ7cKdXtmUFzUDS94hqPbEpApWseWwpTcwjicvXEqYkLrMRE6wypXyMZbS6FUsY",
  "key28": "2RpDJtq4JS3iVWiam74AgvFCJ5d1FGoTkC7WxGaAspi1yt82EhXmGcuRBadjMNtvwYm8XSF2UR3epwJYzdQy6eYH",
  "key29": "Pu5y6EqCovkxRLvTJvp59AN7fJnRwmS6SjxAY8TCCaSjtmUyA4DnUMux8Ca9U75cWdCpw9n5vsxrDfeQqw5fZqk",
  "key30": "21XWRf8TZV4oC3WUvGhwzcKdmjsyaPFDEiyZA75NEhxZW2Z8hX7T8R7hghYanqB1B5weVqLE9xqZTqGnUyGRw2X2",
  "key31": "whceukf7gmSCzToH7qPjknsEVcDBBDcKCtwyV68RVdFKyGCE5BRySgukWhMCksfk3zFmg16UugkjDuBahi4Kwfq",
  "key32": "2WzFDLiaESqxGzaHTSXeWBTzDb4JxSjN72uA6D7pdQLf1XUqDbFnxSfVGLB1ed3MxmCkxQp2y5rhWU5ESqAPbuGA",
  "key33": "3Ng1XTTZNuqNHM9EUFANABsD6VvyBYrsCLcujXAQymgjpBkr4AUKyzADTHCZW1ttUZRpeedxMvqmi2T1buYBf3f8",
  "key34": "4JfgMnwz1VzCu7xobvpgcuo6WVCKKJtkPXD7aAJLuGfKYQyMd2e1otBJ2dw9agzgxb2bTpkDxmaih6H1y4vPEUYq",
  "key35": "4j3Q7pL7JoHxiPytD9TsfUxUmyNiqiW8FvcTBfC2v8MrxRyKTdWw34ARVyhaPVfV5L2y2k2n1oVeQ5bHuFFiAZNX",
  "key36": "mEMiTYuJTxFUKuWhpZ6JfhF8en2ERgZFhyag5sckVY9KtgNZQ2pymwTamxmhqCVnK2YFHjM81cBT5P9Gj21Vhy4",
  "key37": "3H4c9uiLbMkg4mHNAqQ7gPMEjDSc1YanyY2f8cSDj4VU5VkVmS5o8GemZ7h1NfSzt9NE1ct3qug8xxpHQyiJaUt2",
  "key38": "2P4xfcMWbKppiuaDbCrwdGQ1jeRPKBLUgXgmBqGxFjHK79a27pxGh5RXQ9HjsPMtFzxya73Z8ykZ4Jz3pk86HjJd",
  "key39": "2ymc8W9NAmQb6p7dw5TgHU1EuzQNuBSx1tJacim2kHSmhJ5KWC1EqCwwxT7numKpaNcADXPXcLX3TZ9fp2FYqBY4",
  "key40": "4MynPEFQukP1hUs3swKuDp3VNadiLUXVhosNNDNP9kLSdcQEG6Ey4dCNiEV7RytiCcE8CyoLSFvJ6CYuTAgLfsSE",
  "key41": "4c9FCRvdMJdp4Dwm86BgjG2SqpTRFwMd8t73EJKJ8hVsiLcnsfsmvGuSfZDva3gwALeDS9cPshr2QED3oBf2rG5x"
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
