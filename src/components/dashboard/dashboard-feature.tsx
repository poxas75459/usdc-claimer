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
    "4cRtyc4z6BkMYg43LRe2q4jFjPUpnodMDvHJs7XBsGHBqddeQFnia23DXqwPPxQg7VHdHhidUdCcMdDPpsVfqzd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SsfzpNHjcThsp5Tdi9SQEUYTNTdUxec9VTwDFyvUrosUbek8XV1TYAAiq4e7nZ7kio49u97qDX2Cxh5n4tFH1bt",
  "key1": "4eSu38qL6p9x4ctJdxbEnJvmNHaXjWZL8FtyeobvfBZtpfuMpdc8WGcZJEQGyrhEiZJ24N38bRdRg2K3UHUKXrui",
  "key2": "6UB3MUbgZUcMNjtAuVehFZrSkNG98iAgKvAqpsMhab2ciUTYexxCecFwxdwGMCnXdd3MsggrufcE4S1PcWehfc2",
  "key3": "5sJPbmB8rwTYqj8sJp25wc6HJdEsWCFbdfkSQAk1icELSmEmV19ce36UHEuVvgm3eybq2skTjo299JjVv5j6bjzf",
  "key4": "3bRRNoGrEr28NbzeVggU91g4WQkEbsrqMbywXkRHG63jmEBtxhLfGX1asrQtMhskd9mP3ZhdAxVVg8Sq1orvQqYR",
  "key5": "237We7MPSgQKGwDHKicEqAkchXpsYZU9rqQ3vnAKjn6nzt3F4Ms4Pt9psxJBniz5LuD8gTdHM7bbByfZ8rYcWgej",
  "key6": "4H7fP6eY4uyepkVKADbrSiRq2RFSeSB8hYvPQXx1YttAkCNZ81mMMRXyyvzD5xBb1QebP2uZacY2Ce4uSF428xRL",
  "key7": "3SVAanvrWrscY35oP3KMtaabGmac37wtXEoQJYkkYAhVqoJPCrSxA7Dr4qKUb5L2o3Vb2PMXrcmFsdRn1q4CvHxi",
  "key8": "2KzoDXGhCEweqoRNro3cjwAbpxfJiF3HkpQ9m5teKFyUrbVKxAomxNdceBrnX29szhWFNhn5iV6445ZYJjx4A5uL",
  "key9": "2R79znYSAJEN3dZwsFYZZttbTqrJpFbS2zsu9JjEzS4HmC6EkjmDNuGoYYvhn1pp8RrUknXxciu4HHUtSrEe89vP",
  "key10": "5ogBBaEh1hpfpv5YupPmL5YYakZ1h5KiyAjGHgN6wPnNcBGRPFADQ37NiMVujfYY9GyBJ287o3RFDzkQPs8PrphP",
  "key11": "5jasJ5SERSy1nSD21zu5YJsspTehGJ79Cqdknm966X2bx2X6ax9Kk8i9WsAt8WLLiXUfkthdjMyhk8sc7jf5534b",
  "key12": "5QHW55gC27syNxm4Qt5w5VwT7bsawu5LUzqUGeXHf8X2egqGDxpXc3aY8NCeqeRQgnfanxiFyiD895uxCw1qFNAW",
  "key13": "3Txoy4xZHKk72nRhLuo9HPbyM3cT6ZJd4qfioxXjitfhHxe6pq5hFxu9rceksY3jM1V3Y7SnCJZWNApuh4e1jrua",
  "key14": "5wBRXRZ4bUSgEwWGyHyV5JQZdtD2tZAeTboW4m762mxy4iwy3xkxn8FDzVcGGM1mkhWNgvV3bmZvd52FrSQQL9Cm",
  "key15": "UTdCABLgcGHaeE37NSuQgVm9p9z3Sm4i9ELJsSQjSokApy6LZrgjmS4KUT14t2WSeABq6nNVEApRKMEydVuuFhd",
  "key16": "59H3v6s1Q7Ud2XnXktqNogGwczmFdJGos9Cx7AzFVEYtjkKb2Jpu8NnDnMnbQMTiwd1fdyiWeon32Zqu9kFe2pp5",
  "key17": "5SWwqkzmmXcYhmfYgshJiJT63rmkJDpYNCVBAGq1oBkeTYRR7QEaoxRE2GtncFq6Zegd1pi7JVk1Wrw6XUR1F1FN",
  "key18": "3EkSArEoAQFPKon6oHf9TKygMdquwfJywnygzkJPANLXCAU1QpVE99eHNjEBvX3bobQ4ML1pRouDtuuGZwQE7tHL",
  "key19": "2SCT2Dh9LvbMJhVtDPzdaaJHMyvQGCDe2Pam2fVdHtdseYJXdcpqCwYpNdPSWJjTm1qzLjdvgjdxj5FEvWA2uQgv",
  "key20": "2HM2FXbiYYY6t5F9ep6X9wm3eeZcU9HBEJYkZMRaHg7LZfuvsEeN7N9AdSciKPK1dwa2okVKczyy1pPdgdeAUwYt",
  "key21": "GQhWEgvkkMXgUt5hCj85BJtPhTRXm2YkisFyadWjiN3dgeN8KPAm1pNKzKGTZZ5ELzFY6zwwj1NF95vJrpNvBkb",
  "key22": "5zHFwTwnvngEbSsER27VDNW6jTNS7qYjyUjwiN72c3mv4fvw4EwWJ6UV8PsjXLxP9WEBfPB1but69vwhfXfKtZup",
  "key23": "5Mw1Xrf6GyP2fxJUZSnxLFH34mfuSwUSUyMxEm7HKAMhT2Pxi1xy4FHsyMwWUiGpy11foYAwL9sWkzktmiMPw9d6",
  "key24": "2yqFeZ3BGaFthFDi2UGeLeoNhotEy4xQe5tcygjnkMvDRTxsin9Crcv2mfN3zfWXvYG29UbxMEUmhpesATVXuGjy",
  "key25": "5fdLT4ergrmkj22yhwDeAfBYyekX5GY8TgWgjUgmvor2qKtpkS7sK2DDXLtscajPwSk3FnyxtemqU7CFT6W9BF7X",
  "key26": "3g9a6Bt4AdFfJ9W5Ag9SXsesPrCrR4SzXNUtKSLZokc4kWZo3NrfSPnYeBvK17FRS3xv3vzvWVTtMjAK8cfk3Qmc",
  "key27": "3AQLnhj518hxdcNKuoJnVBiC8v7NGB6Rdm8LwYERHejBA4VQcJhh3PXMBBwtWeDTMQrTMoZYVKaynwuLw35k7zQZ",
  "key28": "4YzQ6WBA6PhEPYrStkh5eDP9N4TfivhugX9yB5cHmPAy2kpYq7U32VHTWuGwXjUyGuFuE32azwukZPe9LSattgRr",
  "key29": "w9kaZZ5EdY7oYPQGeLno93Qeoo6wvKN3aTfWg7eMewYy3m1R1q87T4HRbWe6vVvQq9jWZR7RJCg1qgKWdQY71DH",
  "key30": "4HyLMS3P9NCs2QkSh79aFWrpSWjLfC4VdW9Xf5b1izrNrtFKJGCkLUkXzDpRG9NqhHRS8fLpyUgX8YpbVTwckLSJ",
  "key31": "2rJSUusQrP71Av9EFcdVXC66mo7Y78vXz83DicnQq8CKxc4fWsBEivKbPcAxyoDKtQfCz3GjNLcqk55P5DCTojvH",
  "key32": "X2bVosyY4kwsZWmGuaV6BUBkPceWMTFjkijoz8gQdD3MAyYVkw5irm5WcKG4ZTTc2XMgq4JBUxbHjaLpJHtP7wB",
  "key33": "64qKTs2Tse6XXznVPNVVkuzJNmW6Zq4GqEssvzbLf963GPk8Pj632YeQSFzRCDMgcLMuLN6k11GEE7naCUeD2fLH",
  "key34": "2nzfAWZMSUocAWgT8t9woPjoBitzBzgzjWwXgTMvAQ3HG8bGCVvL1Sp7Q7QkrdeQVAqDYjhCJJbnYrPF6wBvtZUU",
  "key35": "55SBqYkt3qiEGusdhmSkCLjMEUbDD6QQ9Z3jDyRUs3QnYgMa5BtzuYvf9DSSSJoo4cStNXAFi6K3Ybzx3VY8md3V",
  "key36": "2e5Wtp9VGSp85u7ME6u9Svtjq7gk5y93psutf2gubqrrX7HKYsAaocPwcDawPb9T9LCM2rF5KLYAJhPPfs6JB4qt",
  "key37": "5c1V6b12k1GQMLjg893tundUMF3AUq6nuUxGNJDaf1pDytFWwc2KwkTmRPe8Qn2Zijt7U94QuS3QuLSro3h7PL7R",
  "key38": "4QvRWTTeC3iwGThLQYnuAz9EJwsqEpsXixWsy6qSEFU9cUNSgg1PPQafDAjJWN88RDHF8R49TqLxCP5N76jh3cUJ",
  "key39": "zf6FTwbo4USbPZYgEejq57DSMMhBbBXNxkJ3DLGgSqRDrsUAqjLa6v76AmnW7teNbAiLpc4xdy9Z6m5yddbW3Kv"
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
