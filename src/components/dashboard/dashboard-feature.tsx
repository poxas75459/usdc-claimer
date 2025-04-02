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
    "2aZEsrT6NvR23HYCi6kQoufRFAVv1GJ3dBGQPxSwU6yJMRfHdaWCZH4tzZPrXDdkfSjzXc6CmuKysYMUnk8cnUHE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XowCmAP4eap8h35YPpzP9zquoqhHWK54H8oAF5X2eWj5xifNBXndFXsC7cdq3txqh31SvFPrqU2KX7AfNMiN5RN",
  "key1": "Su8Js6WYSwoXjTk6cTh1xP2Uvru7Z1SSYWeuGcyGzErgJWa3uT84qCsL46Aw2yxGEPRpkRY3mbpPCavFkrMzeEM",
  "key2": "4b6nqYE3VpXQERy13KUSGFWYfcmKjpeLBC1MZUCAWfxHnpSexV6GSAB738Qj6ChWCHMkyFwyuoGyVcc7RfSwgcCS",
  "key3": "3t3WK1JYcH88hi39LUDBtUjH9B1QRP7Y2mP75o2A3PG76yEQ9x87rMQQz9mWHfTCKYk65miQtCk8cQS3wsyEbAaR",
  "key4": "5Y9sBKkPp2y9UhKfKKHW5ScSHikWzTx8kCj8hNgwj3Joc9EFgM41zNgR64XwWZKLNXabAAg2BxbTZJ3wvruaSckr",
  "key5": "3RdQEnNRxrQ1ygtcVs4YzkVN2o9fQKqZkfuAffT5wPNCKuZvJPwXsybqyW4WHnNbGsXnDZAsLDpCk5idceBY1fcs",
  "key6": "3RgBy1qNx62BTmxXYduDMkhMiDQJahyAGNvm4gmJehrE5DZHUL4meX2r3SUXtYiSC45SWrwHQ1VPgVhfoTDktLD1",
  "key7": "kDcFEEmLu6NtQJ8RbREVdK1ioe4T1SsrACLbCjHaATa7xbm494mwmMyd1ePeFX3dj38NrxdK575QH83kPzqniJV",
  "key8": "uWV7g7hcyHppqw1opDU4CQALGzFERahMXLxXk4LLVWTHJoTG7qay76QaocfK4oEc8fYNN2tXyUbyb7E6caPXqu5",
  "key9": "3QCnJreo7nPjns57cDCdXeZKXPjhAB144t4L14tjxTZ16UEgVdYGAeM6WQV24RMdhQRpLXPB57GeKnNYWmdFn483",
  "key10": "5rHf8ax3EQ1ES6Vu1VMdkrdMhea1MWziySYpG2VDSgRyMb7xEug8RzrMuLsgoAW1mB5ANq6eigi5fnrDncT43RP9",
  "key11": "4A2HAmXLzBRxCaiWhcqKUZgVckTUKpsTLhnbUdpHqhhQKoDR9N6sFHYfkiY4LsUP8ATe7FwNjR4KNDHvHqKpsFD1",
  "key12": "3ZCtuE4uSt2o3qqSrWqk6SnuTbdnkAr1U1qW2A1MBBW3hgP9kV7mA5ESBNsS1HRzQJ6DYDfaSoWxToLv7RmzSdEw",
  "key13": "61ixthEZVWibmdSVkAhshh6BR4eQG1EMwJfAw7P5dEh6nKxvBUwtb8S9iDwnR1hAm6MiNkJ2taL2AQj22YVu8GmP",
  "key14": "12aubssVkUBRjbF6TTMNRQLay6T8LZqdWaeKBXpYmBexL46aj1MeuV4DYcbQ7MKJknk8z6AQaRusyftASqNE494",
  "key15": "4zBNzjAXVKaHUgyTiFVxBAsJmNUbHBV6eqMm9xgLRQEYBYT5Zqf86fN626mS5oCSXqhjBB7h7BeHDmz9K4WjwmMk",
  "key16": "3dp8pLSkaJrizfXuArDmFCowDdHPedo8V6vwenqQtKo2AGxnL9BjDjf4hiPkXtLbvfexdg4AUT88EHEAov3Lf9Kk",
  "key17": "3b7yta8EUw1juXxMKe2fkLdjsdH2AzPjZsqdYviJsHp4B17ixpHq76qiF9pJu4V2kwheCFzqBukRu7ru75Cs7uDp",
  "key18": "2xUehZF36AhyprpQ6EB5NVtK3gvYp8pfFr5xaDpNjMixEAzwz5frisiEWafvcYhFVQW4qc6Y6fWHbsdgJjVMmZyf",
  "key19": "55HYvAhNpj6xq6WK7bHwnCtAyJ5zUwMgHhWAVcfPYL5YMXbtFpSCBtnrh34QwBd6cPu94ZoHXBHTXtMBfsGUZk33",
  "key20": "5RxkDR9Weko7AUFoJ5YXyYEtGWbNYEKHJgvjXYWksNeqgYyVjbTZz4tja1HUmq7Lxgd8cchQnvNbaxUnvmFz7SEd",
  "key21": "58xnhdBgzQp9vMSkoowjrgR7xEkkYc4wo3CDJzschJpZb9JE8xL77JmgqjCG1vbMFttC8jnYoDYVZd1TmvcLxVxe",
  "key22": "2Y4aFZCUibhYSrR32JBEMxDdbidx4brDgAmtG77We7jB9UZipH7vz8occBBaY9ofFFd3SnsjrEH8pbMLQ4QhW5no",
  "key23": "5bRWL3r7mV5hR6JNYXWaZx8Cm5UREHQ4FM2TbZrwHuMpuwNKgQUMoa9rAUqihv93CjRzrK4kWdHN5XGtWxNfBAeK",
  "key24": "41P2pcBsnPFPsToceR1efhFUXLVFFiNBHZWpKp1f5mn2wRXghLAErH1XAf5SLjG1McxUHEkxp58Ak9N6qy7SdESJ",
  "key25": "3pfWY97Hd31MffhkxABky3Konw5SATiBtbsvNJGm7zKeYKxtDZeSZuBmXr64pNGNZJgJyu6stNjJtHagh4V5RZ31",
  "key26": "jipRfVZ5w6LLAqFQh27Ljn67nUWZWYaBZtdca9zSWx4sinqWZnMoC4U6JAmA8LmYdFwmTiZfoFYSHRBebcHq8P9",
  "key27": "JhdyLj7TyXA3RP2unSn4Jm73LoNyhAxhP9C7k33hWkd8T1jtjujRtJNezmkKiV7BAYz2jbyy5iYG8wFKqFJxnzY",
  "key28": "C6h8VS9AjtfMM6eNjbYt3x6jPs4VbZDJxQtqti3fWMsHsHgPYQk73Y34aVSo4E3VJ5Bax5xzGAivJwJ4HA69pXj",
  "key29": "24NzMMzt2BC9EAnGZFBTKjR6ns7RQYVeeqYKnW31F89NgUiXtwkBigGQoGa4u2DrQdjyDVPGRg2YjGWrysZ6eKzi",
  "key30": "MinZ4yuk24S2PNukZS3ubAeky2JCjRjzN8gGxkrc2C5tZh5M5pxJZjPBjt4zFjCC9DPN4TDcRwAdgEax417aSEt",
  "key31": "2YKK3BDSAQFSbaK82rAUfsWoLkQbi7MRuLCBFahmckJUG7m8hzMuuWikuRU91bVxgqN1krYBeWKJ5LNUSNt995wp",
  "key32": "hTPU99CvF1KQwrLZmnRiAKuwvY8Ys5PcNZ12i8NhHtaKu9g3k4KTcuHrQES9EAhi4R9iQGJ6b75oi2JixXqeWBw"
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
