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
    "5ttJMXmhZsMBpDPCKPUmVoR8Wnfh8sqHqLzN5sH7oqY26V6SrhHWM8a8MjjfTFKeZhmC2tzCGNqwPRaD8LaGZFWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JNP4q8sYN8aSauxtAdcbLfK3DRVjLrRcQtXcn2jZrCT6ZQX1RjygzjYWibWXiKBArAys33qBjCNZ5kVa8J3tYfa",
  "key1": "5y7AXnqNXLbFKe888D43hdppWd6q7uTRYZXJmLLYvAM6ZCsN4fewfZ9aaCtNisggeB5hbiS1dfNDNCUQQAE8jeL1",
  "key2": "V6dszeg8PcnayTkDCqc5NojDcwncqVDQmdYJszT2VV6zmCxVQ1trRgZdn2MDJ5FatqCtJuwGzLVxpvAUB6XSdPj",
  "key3": "a7MsSQgb4FQuNT9sUZGMCVCzoQRJuwoBUcuQwRKCrRJ8uPiC1SbnNsynMC4ErT35s5GqfShf4ZJtM2FAf1MGYa1",
  "key4": "2m2ZfSb93vbfsEk2PmuhTi9j9wDWKQaq4MzxTzLRqPnVqvQb9nteJNdXLGzehHvua29knPxLujjrrKCgqo34mXMU",
  "key5": "5hX6932rrBMLMiXtfJrbswG86tT635GVNDg9ZxAmhphwVCaPR729s9fyoTFn4fKvhfiTNLmTak1WsEy73ZSZCBfJ",
  "key6": "2a2TJ33cLN8HdKtakWmaqaSdvqKKfabeTXH3jhDUSuMnJ6Rf1xSxDxAbRDAkA9EASpFJtDaEA1VMVj2d6xV2qGN8",
  "key7": "631D2wVVLBdhKhvX4ii7UHC62CSU5rekLNgVTNcP54vStkEsLDyrVivSGaD43whs1aiejq5m1SMDtNmRDiS4JHDv",
  "key8": "3qX1L78YAm3eD5yUwEtGek9xpXFnoazhkwwm86NEE2S4frn1s3iXu68TPrNxMB3Usw1fbu1mrtaiaTV2GDnyTQuE",
  "key9": "5v9atFQAnBangMdcTxVwWQnaWBifHbQPfPGj5xfC9zome8MBMK59xSis5YciWZqvw5CB36hDFZS9CBhsUWw5s6gs",
  "key10": "4D4ybSRrRUPw6GMd97gXoJWMx1hLXGQMYs37u8hVno5bbvzALJLfWrp3gSkN6myxmNjbN9kbYbziKPjNKk6QDQDr",
  "key11": "2g43amtvQLUq93FCYXKMjHsxR7SCa9WUARLvyoB6mqcEw6LTkTHdy5DzRAwue7R2Sh78DPqfogKCDxZnqYunbpu6",
  "key12": "5sUJ5yEsVHqu6kGgm4DCQnLzC8JEQrR2fjKccXb8LkLob5cMXqpqDwBHHYhfsoLXaGMUFwWyaLPLPKGXpo5Z5Rtn",
  "key13": "REgQmDmbNyrVPJ2GWbqtmCSJZamQosQJPtCT7s6rbowVibwhZsT5ZsWnTaD3KBnwgrWgBRGFstjoYMSRJNK9Hy5",
  "key14": "58Scyi6DTzzreYYeu9z5P9XnSy1UQPe77jyTLroHdx1CYiNPN3W6HbwMWZTR1UJ56k4fzAsZDkCqxiWXfLH7BAEz",
  "key15": "2pXotgc84jrAvKJGjsuWqHKXDT4tndBPyVL3E3HbLj9KpdTYqS3gkUWLg8dayGL9SB7rcmAtYs4nYCDbRbWyWT8t",
  "key16": "2ZwKRS5RXSQKsyAxEUTjtet583hhEKZSV5xd4gugqvupmkZNJPSEaZi1KYxoDgBNTKs17QpUS9rpHjCW39SjcCiw",
  "key17": "3gUf3r9d3UaJKFyz9VV4xfLF9Jgs6za2RARShUzwtDi8pnbhFjhdbk1Hpk26KYjvDjEYAvDyVP8fZNsJAukvXraX",
  "key18": "5vBiPwiBtRB8S2hFqinWYaojTqdm783UnNPQ3fUpmUZXB4rYjBaLGNgHhRv4ER8WGr2SF8xjjB9SnboqvLQgMwRq",
  "key19": "51RUcqJ6GxHi9yzvsEhrt2Nwx2XLYmCEEQaRwYp6nUdnZLaEbcjyy663r4mdXmbSpgCh6pgkVsgHWj5Vh6t2qKZV",
  "key20": "3YJU74s8mW8EutVJweYnADtzJ3ikMoJB6ZWfrw6E3529LTkVyE9uLx5UvBuKgzia9X49hJfRe1NX4rFAobYtFSoW",
  "key21": "3Q9V2TUXGoSKX3GiKyMGA3eDATm1bTHvbTwEEzTJ4J4bm1rS8PLbxVDrD6QpCyhSUPEv6HqS9DToCZSeDTJWVtDy",
  "key22": "4Qxr7Zgv9Yox5fMy7AR4rnxD2nsC7nGcc9XHs8LFy1c5rTj1njcFhaoirPWwnPPnPLk9Tc86vbNeZa8xBzsu2zuF",
  "key23": "2qZsqvhdU3h5CSesyoJHNpA9RSkGo3RMBCVeKeewW7ovCp97SFmd4J9AhHQhJBa74pcFcBtu2T6hRZPxtYE41R1H",
  "key24": "3AEe2zMmqJnPri1AvSbfXK6o7YdPQzu6oAJu2xaAYRcTx95Kn5AReK4uhgcWPRFQVbAUsM19j8qQh5ADF4trFCmh",
  "key25": "2JYEAXhavo66ikijgNy4hbsFQ6SeThj8cnZHUc2GmMNb137HFfFAjfmTMQP1KF7k3BJ1ZGRg3XHbqSmhGKaYWyid",
  "key26": "5X7SSFr6CLeDAPGbMBCAdBkqxenjdfTa73mWus8DHibnwibNxkMb4khRZkfCzEdR7GXSzQYJbgva4K3ZPf4mgLfG",
  "key27": "2dzzwrQSMRypkynfaNA2CidR5bE6Fhwx4t581q4ifcV5E5pqbRkYYPZYa1YkUq9yZoyvHccbmVmnct4uuMjRMtXd",
  "key28": "3XhHyy7iP5GK4NmPnBP9YiW4hhBfKFqk2bGx4mwz89ytAZwGLRqS3nTu2K56Nm4mnSYTyrAAotNFQvARPdCcvTsV",
  "key29": "4tumcdhWFUqtqvRnDNpT4QUnQ6NBmZ15RsZRtscYy8cSjM7Km8HFn21JZaBzw28VySjLh11iaZPRGsY8pY4dcERi",
  "key30": "42LFVpvtSth8YudAhc7U5f9ZQ1ZEQosxa5J5jfNBLfhj2k2jyHAgCJdZQmgFY568gcDJ61fVoqKSbcVjT5gD1HK2",
  "key31": "5nnLjGjGoKo16JqUVvZAL1m676DCG9fQ4UDTGpQbXRtTZeDR9Hdht6RQqz2Ne5saG1hYgz2SbfwRZwHqduj7iCaK",
  "key32": "2vXRJwhBuubWKSR3jDnzxQBcyn9DvHmEU9drVApqfYEPgWdTfQkdpcRxgxM5pzNUcYyHcVfCxe3VVJhAHVCfcNJ",
  "key33": "33huEAC17im6V3rtM5Utey6PeLBzuvg4o6PR18rZKaqLoRKhja4zYvHeWTpnbP2hH29e6eYPgvHhnUbnGubxNquq",
  "key34": "2q4efNWbwPigub74w4q769RA4BX5Kxx7nhHb62fEq4Cks7e14PUdSn2erjDnYrtanEmVfKqgbXFUEQnFoqryF6pD",
  "key35": "4THAtaoSiDRJXUqufY3VwVejiaM7KSFP1d8ZiuyReRcuRN395trv3tj7HHhV9Pdf4EPwDvXjXaFKoC2anVr857jF",
  "key36": "2ZKbKz4k9VwheA3UpTvPS8eVUEzGjksHinoAhVMaG6rr4fvoru5EkZXbxK2PZMdtyspcXTPwJpLtKfq9Eie4mwwt",
  "key37": "jG5zqW4ibnVAY7xwU8hfY1VWRhKViNwaX2Dpw2bx1dAvjDiMeFHnVs6CVPEuVAkFCst73a94kynYvm24VvBXi4V"
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
