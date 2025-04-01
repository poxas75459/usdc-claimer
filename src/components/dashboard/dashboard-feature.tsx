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
    "2hZmjg8bpKoJ8KcrV1mqrCRkM4DDRWKDkCiNtRDQgDc4QpYGqxForTU6RJWQXG9DEFMNTirBnvTsP9UwrDyBw53X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52EANsAkq53Bpz5u77uvRb3rC7YCEF4pWEQHHYcBxug52ajADbQ6sGceuz6hw9eGpmv9hr4UkFQi3ZGwsRGgNTzd",
  "key1": "5FmRQBTK2nkTPdzHADjJ8ossrkajWumQxFD5ZjUyxwJ75TZWbsRpetpw9ewRPGySnADy1VrHgZXHvn8ZFhMJkFMr",
  "key2": "5i1gbNbPT5Lbi1H4ukEGxn3jE1y8syUUiuxNVPbnKHPKs3Hx9C5TtAh4nd4XUy45SSD3XNgKvVwV1HuN8Fr7MCiN",
  "key3": "jJAVzMvLZo21MsNaRC27etrYiVpYLPF1fdfAtQA8jf5G1H4niBk9QKG7qBdDffowH4LoyvSL2VjNr22LfBuBfLU",
  "key4": "47hEf1v4tdSggL5xB1e2SVMfAzvVXDjRUPHKSGEqvzCgBdkXAegxDyzonULL7znbK3zM4n7GQVUvYozdXiCr8zLX",
  "key5": "v887NhPBSAHFcM6xEPPnv5jvmWceNna4Ddi68iBKBXtmnfxEZUyEYfCJM6VDq6NedBVnKnxMwxNv1mEQwNP4fFi",
  "key6": "61aKn8nAypa8wuHQDLLenopyvyNKccK4Vka3wwfWnChKUaercTJPs4AxXehLP7Rj9isrgETFV4uEjL6e6EAc3ux8",
  "key7": "3WFzt5TZA3RBqk3JbAKgmBzqnErbQYuHfq7RrrinPktek8XE2x44ETZF46HyMaCRcrCRxGwsD5dLnVVhkkLQLfvS",
  "key8": "akQx89kwyvrLypyc2RswRn4Xbq8ZpiQBkiQhoZbSxteSv89qgGei5SLDGd9Zmdgg4Xy7fhTHWMwP82ygm1TC2YE",
  "key9": "2RMsqC7HcgPC6x4KA2p5N3Cu6JBH1Nxgr25V5iyc1SAdyw64wPiwu559Cj2rhNGgdM4yXsv96Rme237BewTxwboZ",
  "key10": "CtkxgWSC1Vi8TB3QH2eoCxhtQKtYZU5PaYny3nE4SAcDpdorH4GB1LWX3BgqLQGHxGz8qt4FHebAACvL25CcXHQ",
  "key11": "23hppBhPoCEt4UtAhAXoJ5BXnAajnUF7g7LVhzNEXCBZh7cKyHPZ27g4bsfjg8VpVeitg92MrySBRvCXbadkMZrP",
  "key12": "5RyycXWPzasymkYY9W5Df2hxgSGNnhnMMKFhBnyT7keHzJhFKeVVQ1BwmbwGVwdMitk2KBPEgzPKThq12L5K3fLP",
  "key13": "26B8qWh7GdZuXmSXWLpkpHMjK9VZganHQWQmR3Vy2qp7ZgMPLXcPCXqy35nrNV3HZNe715Lz5C3Evx5TxU4uxnjL",
  "key14": "2XSPx8VCrjE9auEHq8TQYaEB4LW4XrT8tJG5sXun7G4TdHRh9wgUTzD7jmgpY1gqMLmnSdKTXwLmY55Ly3VVwyPa",
  "key15": "62njnBB3xUU6Ecj3jsHaUiZ1FpC2NnZfoJGzDY4pADtEcKQxb8vKo2DXNehw2mkTnFMxWB3827qe8uCgcfvy41eM",
  "key16": "5zo2nYb2giqoFcTCXf5mj79TLsed44W5n2S2MF5NJnmnHCMHidGrqhUCBXx8yVRPCcCMXxjJcpvXDApwvpHf61jS",
  "key17": "WLkfLvcanWqWfxQLwffPdG3HGS6Csv5WPh3tdr4EnbDw7M4craBwb8Ke5z8rjQYeFUmxCa6R1HLuYB8qQbMxUGi",
  "key18": "5t5jLj42aUhsY6TuZdjbejrp42s5yZqhwF1srd4cZKExKhXygRW9BSFQ1V5d9YDaaekJRQh8bDdE5YoF9PrSuPVi",
  "key19": "2JCcj4Vwh6nTLuFi9ffrSEgXTXT8HE3gvDbfWLNfKYyqby64bk5Yr118hhw9Qm1WqZRAQyTyTFwG5W8FsdDZciLR",
  "key20": "4WSHTDj6D9KvoAheAmmXyBbpSVbusGVnBy8XaidAGUt8eTamPRAzSJyGLYGm6ao2D5Ma2FLvKNtN7u959NPFstFw",
  "key21": "2foYvc94pihdieDFE2JHGc4uiF98jC9T7LavpWEubooeCuNknNcNBpDq9zZVaPsCk2BRmZi6VKmMqqGnsK45CayE",
  "key22": "5QqjuFX3TTogHGuEqyxz6cnPE3EpMxJYK2RampBtV4WLovuXtD7tVsDKvU5bTy4Bi3UZe2hm6y3HisNT8Mi1Zupu",
  "key23": "43SqruwBV5S1HCmx9snHdDRbxoAZgkE9Z39mMonMhBxatpN3bG1rj51HXogPDmL7C83jU2QSAhjqmWRwhMZpG9oJ",
  "key24": "54nprLWMCHJo63qjrhibwotM2D4GhhgDLYCDLZhjoxY3c8j7iUbtDaZ3NKaH5b6QkvS8gMGSwLvjsGEdBjKrCTYd",
  "key25": "5rgRYa13ukxtHaNLw635fRNhyW2RCdW8NaYjHnFdUPxooxXDQH3TxKLVhLWHPvtpi2XPzqLWmX6JXFU2RENd1hrS",
  "key26": "2dvqrYGFzxasr2uMH4GReMfm96KpRtzy2mS1jXU9LJEwgxJrVtWHRJKR2bAdoQ2Rq6ZMaadp5ZuUT562zyPVLNtt",
  "key27": "5GmQ1MdMWgZh7CkZfYhxMUkBMGGSYyQFPjEJwBWy63Z92FEC8XjbGxeu8DYHAGuSUx1nmosMouHASC1oyq6i7F6w",
  "key28": "3gf2xN7g4WoRhuAedBbqvHUD2DJyvNBpm1U2C5X9euo2NsaiZn6kjLdm1vBFkT6tYmiCsK7mVuLPy4qqgBn5ZGL4"
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
