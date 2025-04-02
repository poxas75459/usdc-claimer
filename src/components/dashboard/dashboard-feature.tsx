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
    "AtPBDdMLjtxkg7hpDP6sicfTFpbqgssA6gGYdT6dHrVSAKiRFMtHjd6B3gAUZdqg98CdozBvoF3E4CFHeyrvSbG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29v54nM1n9nB5G5A5DcZrx6D58suSgvezxWuwgZJZh1dVnF6SR3QY44x4wCSpeeHKFczZM3HMJ9vL77U9HFimhcT",
  "key1": "4bQgudjZczRPqdXaca2BcNog7hRjZZNFgoFPjxGEoyvv17QHphMzf2jJ1i877NFhPhS5MUnAxyGf8K4jVYLb413G",
  "key2": "3yVD9y9mvsKA2h62PgDZDZj6vxfn9QyCN6DHtmmF4WLnm4FtXUgC7KBVC9828SZVymENL17p95t86u5dqj64AGbX",
  "key3": "3VcEXos9VChm8ef2NFQu7q12bZ21mUd4HmMMEU5PSM1kK7F69sXyZFQi74HZYp7BUxEqj8tGaQgiQGQbPbZKWCKC",
  "key4": "24Wcy5kLL6YgV69P5L3SoAbec7592frNjQHb4xDtEChS2Vkof6XDVD1GjZKgyjBfHZGKpdk4dztqTyNFBGrJ7EwA",
  "key5": "4954SwtHjbsvwE768Li9KCZHEuFLtrNy755nWvz96MHyWNsY8j38ptpKGLe7rpj8vDdVpxnJhWTw2epRHZuUVZwN",
  "key6": "4JfQtnidAiZBsicxRJjt2fCxWX571e6Z9UaTMpHSgNyVF8MjMgjyEcrwRHvkCx3tszFCzcdN6mawkLWktYmdhxbM",
  "key7": "3dh1gAaVBi5gPznaePm5T1wwMxi9sHy9pYQQyFiuL4Wa5p53Ws2NtMqtJAwjASrRP9p9VutqXRFQHU9JhmQYmBTm",
  "key8": "2pBNmm2eGDuFU4GZHFBANex6BpbHWZDv3oCFouNQe6yiJugRDxGs5Z2hdATDU3k4qb4npi5ktK5cDwMtzijLnMx6",
  "key9": "4eCeTy6NQ33xzCTCpTePMXi1s1srCgy5jkWNF8J64HVMg7jmCdBcKrEqbbksqpkReRfNqQoN6vLPEQkw7y3NXDtz",
  "key10": "5dFDatVnqq51eQdmimNFxDPMHffZAztiA3xH7xA8L7E2WKKjEMjMFTbfoaopXa5xpMiMuEaPsTgygCD2UeQdZTNb",
  "key11": "4QaAkRGyz6ZtG3pQv2Dh8W42F8F4mfhajhxzKBm6PCsEaV5bySGJm7tzZiXZyUUPvaWXsxdj4kKazaQpLmWc7QfH",
  "key12": "5QEUapMtrjZRmj9YBv3U2kiLNkBH2HCm1ArHoY9L5wwH4JrL12qwxbPenYCnpKHTy9GKepujTLBDp1xdf78bkwcn",
  "key13": "61GWRNdLeHfEcEe4hAyEGxup1yQ8w51Q2ce7g5scLeKdooUhxdDxWhyxFR8v8b4AFTmf4UVtNPBBbKyoCmXWf1Ax",
  "key14": "5jr7nkpvV5ddr7s88Ex6csg6xNd5e9YihZjY3ydLKu47gTVRCUQHwo9b1AzDiNsEb9v7dV2N4jHwSWyizfsBNB96",
  "key15": "62LDXyUWwuVDhxPjy1FaDJL8rKputufgU5sah9RbynjqYqe93PJyUgj1UGTqXQP6p6BdCBJymy2eA2SD9uBcAbb3",
  "key16": "yiQP7H2HginBEqYjwv1kbCLFY25WitmwHAsFSgYSug4TW7p4spysQb2NtDbCCLstBQvKuA7zrk9ax95fyKAeBZC",
  "key17": "4bsBZNjBbxa3e3ANSaWMgZLJbpGZE5HPmFPWpNivLeWmQmcdzDzY3ana8PJV771AxZYrdjSMWvmt9NWtuXVY2Bz5",
  "key18": "5JW3ixs9BD42UQnrTdgBP5TsBwYYUVYis44b1Yy8CxWHs2FsGpLAVRomjueAviELGsHB7dx4DRj3bNuosfb1ftf8",
  "key19": "3SDCG2iSxpejRERCPswQaDfrNXv5HVRXnEKzDsfhyEQ3mSRGuKZFoZqRNjMTNr1g16t4j7xcWqmcVDuXrsncBWKD",
  "key20": "55zR6x3FA1W85iyJZoAuYGySaKgGYhkUzLY9oVe9hjo4xX9RRHEc6znuvXfRWemcrLWkPZdKbQq7NC5my5wX3pWZ",
  "key21": "5M4sBu2szumjop7qDE2EdNbu7fs6S1Sevr5c3hhd84JFpnEbxLaVzGvyiBEW85ih7QN6bKJNbZGMgdAJ2YxC6Rbp",
  "key22": "3r14bTgLFhh6K14Fv4xJM6vbbEdDydk5QUCUSgTJ8FffcfbJYnVHTKChSUsW9cFrEa8M78ZHuXoU56xTYcL1HzfL",
  "key23": "2kpYoyDSA8snVWJX6R4iNd9b12ziR1bdiQAXqZEZqkQku9xEJFLnRY8dX8gUNXoegXLzKhiq4rfsZ65RTWQfBn7r",
  "key24": "4CqVqtD9vC4NZz5myvsbiFdFrbB256MHHpnjKjB4x293oedCqSP1TBDn2RjLpztjDvxJGJRqpSRcyrg8MFtSvB8m",
  "key25": "4bjghdvK9oQosPhTLCDcDuGZq4TMviaQupjhkKyrsLJ7myHtsAZaRvVng5UEgfBkxUATuP49HEBgoyosuegcmKba"
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
