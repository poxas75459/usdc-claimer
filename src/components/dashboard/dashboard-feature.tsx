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
    "bGMVerxxa1Dj2M46RCSCcAp8ydtT5ruufXjxxTZmVvJE4QDJiYkvQ73rbzSzRtGTdmMYzDahbythf31c5vbbGgJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HXkS6s6dVXJwupf35edpdhhV3KdeN3Z5AYFJzp8GAvmuWgwFShMxQE4Sd8PasHQ4ttVD3wuRt53CUBBav3oPe5P",
  "key1": "2ZBLx1fek1mqPfdj7QzBDtLohZgyk3vU66zBJraqMRkpnFRUjoPtuHBfrP217nRPDZA5oZionVfCtzqmXdDMtkz7",
  "key2": "5TfhceVNdcimckLiPBH9Q2HBKwkPtvSZ39EXmrGW21T21YRq4P6yi3pw7LShXRcD4dLCJheQmn3G7S5fV8jSJi3w",
  "key3": "3F4aD3H6kVJwHnusEmJATWrVhHMSMtsHvnCU9s8seBgdH42j8ck75KfaXTcCWSz66mNjCrXB9D2XkvdPjVAV7JXY",
  "key4": "122HM7Ksd7vE6gwLKKWT8DUv9dCQAgmGnPEJHc42LkUWSdGCG3bzdouTvoSonCofVuR7uikURfGkC6VE3PLQqTvR",
  "key5": "34xAh9ZG2rZt6NxRGugd99TKQm6taoRa3RMQA6b1dfiqdj2A5e6Xh1p97wE6kxGqy37Wv1fFHJytKJnCCUfacx83",
  "key6": "2W4jNCYu7KmR61wwnf6Lx27zW6ghxzdESi7NpVQALMeXyMcekdSZquMGZ9UZoRpxiY5fZ4jLKLaS6UYovk7aQqBB",
  "key7": "3M5rAnr4u5csgoevETrTKZ4VsBH8sTk1CF2462Lc6kyWrR1RGF4eJHvsfN6kSA64fjJVvcGBLkAayHfo2n82Ah6x",
  "key8": "5uDndFuZTmXoqdaCe1dUjSwF4hYdK9JqWKm1A1Vhvu2ka3pAbGty6oGnJTHi4St8acFUc5iZkRzAPYssqkG9zzLo",
  "key9": "aTKVwUa1NCSGnydsKynqSWo2rZ7qNhthTkkpDDAYRpNGAM37754tXQcKqUbNumtq5zjeHzuVF9omkiCcN1dkH9b",
  "key10": "5EMLz5L3yTsEHAg3ueNHswrfD1TwJHsrRQ9jeKJajEpRy6DWDaVwoLDPdHw462GJE3WGTWMx1DTSBugGoNjJvxxP",
  "key11": "59pxAEvWsNvypKhjvi8YsRyEwjjxiRfARQgw5YoapetPrk6nEspiKqJCe9a7uZjRPwXivWU6kpexen3DQa7Xq8vR",
  "key12": "CDst6YfGyeJ8LLq9aWxUxhnCx8xkaxd1RyTonFn7DfiCye86KdoYWiNLByZkYLxuTSS8DCgwrbWRweQsJVb5EQ1",
  "key13": "2rdcf6fU9QB1wqgFWb3kCecdhF8XeU3mFk6X7wPKVsPSHHAFWJ7enXQSnDdFSTA3rjR5xJvT7jcZ4RfNua3qUBsu",
  "key14": "9hFka4hyyHytaJedX8R7LJdyUc89FbbrvjXY91d8xMj68aWNCXDLc8gcPMRJ1mq29H7UX6YnDQuBJJpu7wJVaBi",
  "key15": "5y2RtqtUWvM2y4QB8NAVRV8PvJCxf17uJ1yDEcePbo8MHpFfa5rWfdtmEzAdvMZ9kZzxETMBM2T2BRFyqeBgUcdG",
  "key16": "2av83pJuUuZoQEzGobfahhHs55x6rcjE3wiRPtkWnF51SYyzVjGg8tfsMNdaVC6UZQ25ZiSa5AczzNWhcKH619x3",
  "key17": "53kffx5hN8SkuAKkDgnRU94pP2MofWa417z2knq95yss4XCTcRsRGdjqbAc5jtP96qRiikzWL5XqvHyjLWoW5rxY",
  "key18": "5Ja8wNrmhM3xWJNLcG5y5rZRT17PEmQ6TiMhTAUgtkHRyWTtr7Dtywu6LuuURYDW1YLDKJSxeGvGFWeH238u4QyH",
  "key19": "123w44qYr2BWjmEiudYQCcSqqjMYhyZdSaqf99kEB77AZubtBZLMCA9UFC72vFDJazVuVLPKcTTuDtrWKB83ugLo",
  "key20": "3ZgVWRHGxFkZS1UBxNwgPQuy9fuGXgGjacKcVg8YBVgPCNgez6Ln6ftVWSHdUEUC4AJpMhrXKMB3NZ4ft6Sa9PQ8",
  "key21": "34yG9kEMnFQMLwATeHhawmSJwttV9jpdUkTB2jCTuWXzwsqXSjqmjU4miPWwPpTRPJ6LenvpMAmjQXV34EJe9rko",
  "key22": "2wJEBnBbzCmtgCgcakXMZ87GuUbf47BKq3Eddeit5J6dQjv5Mzfe4gc2PDggVociQbMNjPSXN7HPSU43gNUwfX5x",
  "key23": "nNNFtCScbs17KW6Vc7ND7GVUrLndNWNMjJ5T5mLPcybGFCydGKpVqzN8s2trGhJWFjyd9RTYzai927toZ6K9FDx",
  "key24": "3yPey25NRopyfomRY35q2xruq21X5vQkSyS7P8jJD1Htfnbk6GqQ6sK3vancLFLjYHf8PX5apn9Qzf4tVQuPafYK",
  "key25": "3jeVyMh7BQSPjVSqgRmYzuLrXBgszmCSE1CDSNbKkpQJqYXBprNB2dW7xE65y8rUdhm9QmL8UZ3U5GdFtik8A6zm",
  "key26": "DrR4Le1TxWkFkiV4LX3NFzuxMDB833ajfHXSvvXBJsekbAYwr35juoTnphdmBCXAaHtZv5ATeZecGyRdUwXuNu6",
  "key27": "5R2Ktag3sejShU2SMbWqUSR8y34zqzSYnr96y5D5BBXY9jmD72EfCECLa8ZthcJEdXSrwRbGpR25uyk7fZraxhzk",
  "key28": "2TgRL58Toy2kErBgu5qtEt9u8Cg5gefGDNDZ8ohjA1cpEFdaK1fUpDvVq1rchsm5bjLZ2hmZE6vUBeHkU48y85Vg",
  "key29": "2V8AMjDkJvZrvnss6WsBGPqY8oEgcAbZtxphQ2MFXFhucZLssB85983Fsn5g528Bu6VnRWJ5JRVbhYht2HUdYeqC",
  "key30": "3MQQ55pjY9iSRDVY9zA3nRuLWR4FD66jwk9GwqtrE9QZuuYWdzuYpTKLHYqLUruv8QUAN6aFySQrTf47iqgD5Cia",
  "key31": "5ed8gkGmsjZch1dQRMCva46YqcyUyY4mCogq6WhNuW9MSmWiJ82GLBoDQJ1cRV5rbFYJkkr7hjVEWUjXzgGiw8iN",
  "key32": "3DWmWN5breL8HhFw6DB9XHELcJ1rjUvKw7hy8ib5CCeR86jCLHZqVqCxzt4GH6gffc899w311gKWdUCG7rgsFRxm",
  "key33": "434A1uJ4hXDGPoF2kXaMW9w3WteUtPZTeB8GxAU6fg1zsivMe5sANSuGFKjFueWgikaUnphHG3TGR2KEvpy4eQvn",
  "key34": "4FbT1XeAyn1tED6FCpnJ2TraYBzYZ7pb7pnX2zdz37pzD5AyDsW9Y7KX5xzCj2jSRPXTFph9K3eD5UmPKMouJaTH",
  "key35": "5oU6pFHRf1MBjEi9YYGTZywXPdvEzgteZjvK7Fa4Wy2AWxB1KSGNxyaHrG2aJUf7GGV8sYMxkqMub8AF6sqCmA1j",
  "key36": "28V3gNeiheTL5yy9jr2sxzYMptmGbr3EEXfY4W8Sd2BGZaqbiUThwqTWjj3vhSCTJmTqCpBfHWNvfCBgLB7A6AvY",
  "key37": "3nvEdcjoZKeDQGbNhZuPLCH8pN3nYje3BJ7jPoheH73n1d5in1AcEvatdv9J1puzc2pKWPEwmSFPQWGSEHxSqpzL",
  "key38": "5rHx8yvdEEbaQCSDTQKiirASWJcmYVxK1q8oNUhTLuVQVuF24GdNhCxWvAuErJEAVQD51Rz4neBZkYvL7VF4E6Du",
  "key39": "3HyadV8RVNRAhGzyNcJTRNXZmg7ETiE5VK8WCU6SHxmSdRDHiCLz4qo1CJNB8z9QQf3SQWRod96zEEAgpPDE5S4J",
  "key40": "5ifjV4vNCbfWaCAFZkPPmUYePx7rjbkXbP8764ZUGKyVN8xK9WLTW8VFkyihptgshLrmoiKs4dzEj29shenKFWYP",
  "key41": "4MBzm39R6Hg36JJy6b6JkYKgoDHGwYPeAucHDgGAL1b9phSGXxjRDJrxAfzCmbMxdwiPEP8B8sH7VCu7PmPUNuAE",
  "key42": "5RfN3rZTSBo5tTQXSJ9x3bFUPxtPPidzUvc8xNte8Kzbsz2bkKKJPUu7zHPdTaVwKHmtZ6Z1z8s31v21mTj3BA5Y",
  "key43": "Bop4RRksUdfsRSGHr4rxd4EPkwj17gzdo9nBdd9QdMtyiNeNHfrPx1uDxgWK25mXQQRixCyp77MgHdpDURpL2WR",
  "key44": "VGzV4FYTyh9MSe13sTwCZdYEf8vgyDpGvDTCQBhUauiiiWcE96rUXWLiUBS4q7zNKvNiAaP1q2gjZBQHUcM8Jup"
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
