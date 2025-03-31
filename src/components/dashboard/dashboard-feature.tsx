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
    "3RAPo1uwRjN36dAgSCzwwGovfNsEAjjWW9duRZQUfFzaBrg9hzpJkZtuMFCyvEK5Lp3Bp77HMHmFsodZnyeeztd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57aEzMgVEk2B2uXr2TyknNYmf7asfBqTH6x9DK6peYWn1in1h7kDY32mrXmfhHPEJxvvbcPr9FzUrJnNQN3qAwty",
  "key1": "4zLUfLKWvJV3XE566TpcpBqaZ2QgGtuQ4BuYABjQdaDUHtVFJeNVzirwyJJ8Vf2YC4C98fUUnr9KkXT3pxWiheXw",
  "key2": "4dpXnJznPJoFfEcwfanPtFNw6Fj4DhYTk5CL3GyT7EantuAuHWhGNjzwBCw8KCJRTtzKmzVvxfpmvMsRcFmfqeDS",
  "key3": "2kdYg6n5zpWZvUJyYTnQQ6MFxoHrTtvAh85UiCnaLyc5EZNQpYr1qSHusBWnJYkUCmyqjFoz3qdTMTDzK7sBvRWE",
  "key4": "vioi4NvY92ntwh7GhJJ7s8KgEtMzBKPC3Tu6LLJ8bu97iieEwDM6LVoKjrs5g1JvgWfzx1nqL5r4YKe4wdBXWbY",
  "key5": "2j8NfdCybNamyYJ5ytBM88RNiLyAbe2z5VwDzL44Uyhczuu27vL8bmdjkGfRc3uQcyWbgKnVxLEKkcvDBMdMWbAV",
  "key6": "3oGsmqo1bevBDQnm5biuavR3YV9WDjnsL2DT7zEP23rGfbupBk4dfCdtNMyi5t17tyWSNLnPmS5Y9tVU3avmgQyi",
  "key7": "34W269t6bA6AEHN6gewZCqdd3XH5vo7rMqxRTX3EXTK3qKRuFg7Her8WnmdzhFdmGaUfrFYgvn7mrU5bMaFNj63t",
  "key8": "HADQLnHyDDbEyZak2tYRffEDN53B4Hw8jBrJfobjKJo9WtiL4r5j5nU4Rxsc3vdwcVAjN7QdTiwtPb54k5txMGC",
  "key9": "382JkFVtCNwYdnoMRJdU1ASh6dhHrwcXzfAW8Q7PpVPZGRr21ywBH371vopHu7byyyYyQ2fsfT1uxU94k7GqdrD1",
  "key10": "5HHcY5p4gWY3Qe8juL8B9hiwZyfgoEyBAeaeB9vcJebNgmCsgHgKhmGUML8nabc6Ucon5WrLaAnNNgkMEkWrE9wy",
  "key11": "3PCeYnCrRvyisFW8LYqPC7rhwuBmz7Jx6EG5w8iKrJt4bdE8nFJPCcX8BHnq4fj2RhrwV22mzydGNAZiBhRdP4o9",
  "key12": "LQ6JQuACKSLJ1x2BPZCntpMoi2kYQnyr2wf6X1cgQ3cYLaZjmaNVBLXaYgxMEijLVRBthwikUw9Kze3YCAF2n5Z",
  "key13": "22Bi1iTStxcAEQU52uMtG8tVPAQ8KqEmXb2PAh1zkddS3We7NjSbrGSBouTrxbsDg44qqWMBVxxihoF251WTa5jL",
  "key14": "4ohzBL6TDVE8vkAep94GxUNtQexcMwj5nVc7iHY1oVdLeuFN2NeMvEnWDT9nC6pNSgQqcd9bCfpbXg5zb5YSeEkQ",
  "key15": "2KS2GTsSKP9apVcjCt1SgYHHaReNA4F7VowaWaAfAH55wr8rq9NGf2etY4WE3Z5y5CsR3tiLXafzzJWrmhRU3mmj",
  "key16": "2uGMTPP7aCvm9fgBXxBQpFbuucfgRex88QpW3VRDL1GHCyS2MtiWH9oEj83xn2jMjFHJkkCYpEVjxqkqfUxCWoM4",
  "key17": "co2knmR33nzQ9Eyv4yhF73maq4c4pAgq3MJB8Lg3b4NBP1Dhr6vHnW82f2NZAcMpYhh69tU3qziQnfdE2T5VPbP",
  "key18": "tZWvDk9GV7TfXWPLuFyKEEtrfM3sdQagg1Jc9cqEU8R8aHHgZ12CT86eLo5A8kkomav1EdLAg9qGsF1M5Ke2Tnf",
  "key19": "4aVRQ8nmEhhJzNyhC5bFVjHwZmvfj5qr1WLZFVEnQrKEbhDvbTLN1Zg2xHUFSkkcHMvXAFCtejS5vDVckwNVpiU1",
  "key20": "YBxf5PnEFyFQt6ZCHduJGbJVCrGR3Z1dc2LsGiLNWGnZFuz8T5fWCYbt7WpjoCHJrtineCdxgmVYyBYB7kEEqP8",
  "key21": "5cj2eBr4uWEnHM41kXwKHrGZoGFmBBL3ELow933J6Dw6hAHtmhtT6ptyKKqrMxP8mDHkVkakFAu19gnhJd4VXMCH",
  "key22": "3X1qmXjSSmt8Qh54BDwtECcuhQdbnCJRhwmDxtytf3CXzsvww5sr8mWxivfwW3Vce5yZ1yD8nVsrL29g5qmNVSbP",
  "key23": "53tZJyhu29tNX2Z8skzfFXGtssaEDWDoDDuDN596nSR5yySsyfnHtbh9LtDiPUet3qQzBGh72GCkJq6ioKM3yLv9",
  "key24": "4fBKzhTVw5spSkeeHdKTyXBCLQWiWjvAkYe5JkYx2bHKa8j7tnNYV3XW5sdc14ZY6dFe1fXUPE5XmfXQaQhmkfW5",
  "key25": "23jMDbNRma4Tj4MtMoTEv33VsWkHVicCKTwDJxncxhY7HezoFBP7LeL1ZKZvS2u8e1NXEaGpSrBqyjNhUodpteyQ",
  "key26": "673saAR6z8gY7AiPrcrAHwVkRZhFuDrt9epX83p9JQFzGM5WLHWTsBd5XeuiCzyPiPBB98u8kCmSLAyeaLFPnHfd",
  "key27": "2ZaAWk7fpbVuSXLbXzt57F7GTSdHc8qiJYwc6yZ9MF3v4XZJ67Ket6RYqaaD9kHu67KhgLE5BGeX7Da1drhUCTya",
  "key28": "4uzp88BGyD4D7jdXzMKoG8wSmq35dLFRPMPD2MK6Bzwsc5gmz4QWyDQdnK5fsJhQiJu3HjXsbJpmFwNwEZcnm37S",
  "key29": "4J9mjKYyJXZS8ZgLcDZekjXZzg8ELLix3DbXnTeRnnrMbCH2DUZw46Etcp2z8ZLtibbrEZNunKoPy6Bn4mV54Stk",
  "key30": "paQWJ6uKRkZjo7cXrGx886EjjDLpxkQ5nA2Ban15yuRSQXCPWdCpjWb5KYKsTupwtfec4yXo26xuUaHeZQGKPDs"
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
