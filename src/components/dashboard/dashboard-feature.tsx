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
    "4citX1FksueCu9k1BAinySdPkLzdiig2NcUSXNGb5oBLTQvadL95SAgKAouFS9VPZpDAu7WkxqRxfEPjn7g1mxxD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31UCjmubFXhPhLFPZBPzepqfHTXNLmDrcWdAZE1TRgCPaj9k338ZvZ3DbiQyaM2xoFRaF2gB5VdQncVLEqMpR2na",
  "key1": "5mNLWntSTgjq7cbNXrhnCPigS86HZue7CPnrZBXxrQAaijgHELLK9eqZktRVrKzhUU1kdJWEDkjraM8pnBfEQJr1",
  "key2": "28Z6m24WPYpd9MUyXbeFnKjNReZXnH1RZeZpkUdkrETxUdk1TnU3zSqcopwB8b97qZaPzA3ztgQypxQMk5H8dxaW",
  "key3": "2rMEdnhtn9VU87tquhsNCXhVj649wMsRXxfJYBCjCWDXVvhbGD9pzmsZepGRTCpNEXeCca9G3t5SDKChMHFreCnL",
  "key4": "dLnjznsEt6k8juypGXVFQgDT68RDVwwCZyQB6D3bQfmHyoLu3DdaqyZBbK3UPmMLs2eRadY6ZLjJ5mpBkfwPViQ",
  "key5": "4hjXTCA9UvsaWxhsJXToeSNo59LU8XfkfwcMxLSEGy7VgKxGwQTE1zqw14KTBS7DGuUCmjip2mzpVBCz4fsRzUbb",
  "key6": "66KiD1aLSegAAyPD7zSc5pTJgBB6jKzTYEqUewcSEVLnRBWufEEUj5jciK1ACavUSLjMt6K1Xn8turbw6CsSs9Fx",
  "key7": "2vtVRoZtLkJ7B2h1ePPYfJtH4WmtqF2hsXiZMbCodRkRKswA9iJrhYTofULyt968AkBKmfRy1zjmqYYAb1FAeVy9",
  "key8": "5rvgAUhE9Le3fhfPQWwDJS24KstK9M8KH6VtmvVLtB7L6SjZzetWxuD464HBckU872HKto7N8qZCTZ8w73GqMMsQ",
  "key9": "5cSoWC7JZaSM9D5MyTZWLfNrqKDHNjmSPWBzYk6yHWSCGVb4JNi1L6KYgQZ2m4NvSup1JL9x8kb6u71pkXENmWt7",
  "key10": "53veafd4XV8LeLziFPR9guwE7mmg7yryunCyCx1mh76zbBxeXtF8nL9A4xSNb8SZBuS89tCZcdX4mrADQJHKWeMo",
  "key11": "3QYUmSfh6rcfrYmaJLj4dbaBTPC9nYRPqWYXpVxtAxbgurY72qU7n9Msf7PDQseUK4QYbhTvmMeXEiZQHCAWg3as",
  "key12": "3XGgmiw3T7EZshtqTfMqWgrxKHHTSEHEHB42PdhLGuLwsG5ZQVJRYMqQrkjtGRHk9oiTVLUSgrTct7R6rhocXzkJ",
  "key13": "4TJVPJxXXMxsNd9pp9DpV3LmTvNwzc5tnkiL1inJGN4tFt7Jr43B55cLxdF3RWVMrmfp9gCFy4iPMmBJyRAck9VS",
  "key14": "5vwt4qMUiQaNdokeGRs6WEhgDsMAe7fjn1thHq1piRoTdL28XJ8V4t3aeoVHDuKG44BoiHiv95wLJDnYa5bJSwD3",
  "key15": "2BDw4b2NEm3uhHM9cvb8ekAoXm6Qg9QCZKqbHyMp8W5QwyxjHtVtfQn6JUmwe82khJsZ8jYsn8bVVg62KQvtaAja",
  "key16": "5chFspXjwXKTWc864sPnoSgxqqUUkkqRoeeqsgnBMYNF31BRQJP4qH4aKidnZbXTVtFwmFbZu79eziLBtJgbZS6C",
  "key17": "3KmiyNm3QCDnthHUKVieuCQFdiWRkicfhAytvSzcf7YZZeWfcubpnF41dJXUdpb9Y7f1rrW8z8xPfamrKAeaSrG5",
  "key18": "5KyXVrHpKLX9KhcFP2vYp895XScBAwj4Tp7otpBsdA5RPysNfj9zQzLq9hgHm21g7q2bmpkBnqdRMVXjwttrKu5e",
  "key19": "3zzGGwLiMX54L2m1MohRMagzab2Ls4ZSX7NKW6ukaFCJ2yz8WLARTkzJ37dPgH9M2hniejmyaKHyxPQu5ZCPtfuu",
  "key20": "2L6MA2EzuBzw6nkgQB2pYvR9g9JcoB8wpBXyfenJiFBU8MJn7FgsKhUpgnKwRUWE246NYoDjDTF6pHayzPvM9iD6",
  "key21": "2Gz9tJhNKCZLMpy7i4hZFfvVKjp7nNhDS8otiRdDtcrdB1ZiV6ds2yQUQTwDzfkc8mJcMN2wtYW7wk7u1BaYG2Qi",
  "key22": "5ssjbXE4UhM4Cqx7Lt1BykpqQ7Rr2JpfyUFUy9hbASGSUqfnGk7m3ZNHVzDfrTu8Shhi5bFiLErw6ng5bgTeE4fx",
  "key23": "inff6Ex9hwfqSpZKw1UYXLZkqj5umjzwwcCout3w26b9R1XLTfPkBoB5tEme6T1HsG63oeA9Fdem3dtMsCuGrMG",
  "key24": "3maEi8bn6aYJv9xPfknEmsG15W5TVCfP1Vw4NTYqBMPM8kAjjC3PcZn9XjNcDxTSjbMFG5UvNRPw4nDfW1xXpwnb",
  "key25": "ZcHjCC6wJYjqYFyRsDzAaMVtHEwM5bGPiVuGJGohTNw2eFW4ifCBwuvKBmf4N6Kwua9woUDhaKRih5AMHXESCgj",
  "key26": "3gjyPYF5biiePJ2X5sgVvtSQoULxdy3tNeVtjAq8bEfjaXyeEeSYXM7dWCvN8ZpMMSEwCAZyjVAmPUGb6BYmkS3K",
  "key27": "5NZuErQjGMPTtUM2oRyFg473jtutxHdqLFF4K4qfjMGz4y6uRB2y6jTHZXmtFBUQpeJKXY3jRRFsGCpdztXo7QmF",
  "key28": "5Fc4QdvKYuVHMGuhiEBGLQcbYKeHqUe1AAFw2dehew7YK43USWMjNmm7xW4LaRvoGTYtJcYSRdv5Y7MSwmo9pzsi",
  "key29": "4hXgHPyhbDEUfLMwAqdVSiDQXbpLzgqTaXg7NMHSy6LpqTYt7u1cQ1QhDoWyWaAVmLvyatd9fYjB1YrPGvbPFeJn",
  "key30": "5unxnADYgDqU6w5kYubCiMSDCQr6xHXWj5YKFZ4rVD4KfJFeDfJymEhsznRdf71yGUiE1DS6WxRbobAiZq2Uyp8z",
  "key31": "3SNyxVdoY9WKDfXhLc43MBW9qbExi8bBFCfXt2C753KZCTQVxVhKPLTB3rLtcZTJSFiHVaSrpYtyiMHnTDFWgCrK",
  "key32": "5FxauVZTVvRGDSz4CnHpsqr7TbaNdXNw5ionr9vzqbMZK4wNvkKaLt5jvD22RAKPTDBtkAjRyK66BKYHF9bNMaRM",
  "key33": "3F7T2rgN7FXM63qjrcJz1BHmM4Hc8krxd2CTyt1Y65QTJTz3xVXDbLqLAzx73kXMiKqwtpDMfwnnNNCxbTLRLzC7",
  "key34": "1TbmgDwMRd3FWGY6fwuvwto9KzDpEWWS1sbvRQ3WPehBB9xsqjvNbmRDBAAJn77S2SzLg9rpTbwz5BUFGpEJnvc",
  "key35": "5B86kEDZtQd4xQ33AMvzpDHE2ZJRE497CPPQy44Add84ctnqdZkaYCxcYv1akbRrS1aVzYbTnEJxFUkpdiAYfbCu",
  "key36": "4c7LTNGFbbNPGLXRr51H6RFAxnkjvqeWyvgi236Nw7DoYja3RkKpMhJvpQMdqNY52x58Pbbc3cMwjFodytmUpgF7",
  "key37": "2RwdXchpZs1wQmk9zSihDXDkQvrxM6DYyPr4YHcztCZQ9JNPA82qvMnvNkeGjPLnfdaRGyKR53W5wEpBGz4Nebar",
  "key38": "2yDMkXudvzVdVWeeNsKHtUJS8mmLetES6gWiLNpxxYVFdQH5jU2cCHpBYHZNiL6r2x8c8XSjjaD7Tqs8TPw1451h",
  "key39": "2TCgfhHrsk9d3YYEZBjvEfHrASKCNmut1cpv3ksSc2WNupRRm4ex14HYoWLCHmUbhFdJSsdiekrEmvYeHRCoYQcy",
  "key40": "4MZErHzzDaX69rJXbbCaHqTZts6BwpNzMrwwy8bDdjNzipwhj8TQmW2egw5vEWp3M3ubUj1VzAhMZQPwYfitVDaf",
  "key41": "3eMZvqYj7qizXAZnqxiHZKJA4juANNThYyLJawG3jVspXdQMwBbmSGcXyDqmVpvxWkn1aXN1Sva1K7yP8ZXQ5uys",
  "key42": "2pvnxTLRvVmAKoe2Z1xpQQZmLDMXXvYtMH9oVn3Y4RViiKYtLHeFH2KzapABXCZ9ZNZ3AcqSURsLriH2kdqPxWFi",
  "key43": "Sjmh3jqjMhoQSsdaNaG8vDrr6EfQVqfpoPD5NVGMittTuoV5Px1aRaYxcHEozikHWMD1LJqzQbVcgoPxFDHyEX8",
  "key44": "58pfCHEUu66QNfTfCsw9Sr98EZwdR6KMKK3FVMh83PCLN8E6sQZCxMv4yzTMi9twhuvoBH1zXrLRBKe9DTpmpgak",
  "key45": "64yZ5skB6ueShLvNQRpZFRckx6wUtR7ySyP5FwGUkae4SgEwRQv574GsB458eauPGZBsHU7nADwA9QJV4QaghpU3",
  "key46": "22wY38ZTmDzPZgWmFzgA2VdL6Jc7vc78P6jxt4sQWnBagpqUavtUm5k17uQKCLETYFRGVnZLtW64bWWsPx3HD4JX",
  "key47": "3VRa4cYx3HBkGQ23SpQuN8df6gg8xV3kXtNNGdcHjZzdP6AkmGMj6DwtDQqbJ8bzHPi1wCvj48Lp6687wK3x8dK7"
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
