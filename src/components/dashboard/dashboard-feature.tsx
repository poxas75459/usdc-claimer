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
    "5PwfLR4LF8wE9M8XT7pqxtt7rPgHz8gKDWqpAznTc3Whcnz7Lr8H2rhEf9BCYnye2upR6Ns3CyUhnxRSkz8KTmjX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fNPw5BABwPn8moaZxuQ8fBxWeK8pgd969xYcrDfXFejbwAAPGWRG8fkxuvqq4Pe8w2TWYXQrfJsPrAcJW43EpYL",
  "key1": "4kXkmFcPLVrCGz1mjxHoYCX23om2UyGFFQQrvsPFTdy8k61Lu1eVf1T2UbSs2mdETXGC9Z3VpRuJKBf5US1w4uXh",
  "key2": "43FjP6YW2GFwQdgppiwYy4PtGYvVfFDLeRVFr7vb9fbxd8ECQf6HonA73Y8iuBR9EK23G8eTeonUMC5AaYQ7CLS8",
  "key3": "3AMuhMokXe5iervzkDMdv7Qg8cudeEdmextMN96HQxie6wdVWf9wYR79fms2vf5oFL7wbtHuUQJit52FvdzrJLSm",
  "key4": "3H94oDCcmRVQVY3WsD6DEn4RAxnxPSVLKFF9ksVLhKoJw7PWzkDX29WGwT1rddLhN8VebkzToqT3CXbdp9CC8y3b",
  "key5": "4ZsEKQmgVM8biTziDoxGgupejLsq5PK7Ykg8F6UrQybaAYbk3aAqQdEo5K2AADtkpYEWpkbryUQUUBHYoPRhjuk1",
  "key6": "qNA3N5FKDTH9Y3EQGSyBMur5rrdXUW1TrHqAB7wzQJoiZLnfAk6pNh1i9Wg862hebV8h3UhrjUJ8HaTtvC8H1Yp",
  "key7": "4Ff3Qpkx47LUhv2qy7aha2hP8mguUtWWxSP5fZsCGVZFPryMFPFHfqu3aLqaqHSxJayUQRUeshxY5PtJiVGwgyLS",
  "key8": "1qdwu9LCyEyphM6ypYohgTenzDgjzfmieBxmwbGwjrxKQzTZa2VB1vfXBBrcC3pNyGJntXDd8ztToU8ZNLFvSa",
  "key9": "48TsErcjs4EfXxjwvTocp9LouzBvv6HxLsWDAeMgNcibY3Rtg1Hk5eBEjwtrfA7WLaU3aqdj3rFKp3UWx3upX7W8",
  "key10": "2VioSNf8xSY8Aa1KUmrTBjTpg2AKKbxqWRzh4DDbeWC7gnjfNctkV2FpmT53HyjAuZ7wvTdFtB2D9N8PThBVNQ6h",
  "key11": "5nxMRZqtDwKBHsucEmWsLpcXf6byKioRjkYxPDU6ivsRFu885FhEjpEAnneePjt56a1Lfw4MYBj9NuHA4WgSFXMn",
  "key12": "4pHN9vwFMdk4TvppfWfKLe5TaqE1dw3KXZ8CyUvvLZX86waZd7RwxNSLZN4jN9RHUJmqPtSfCdN15xbudiJvwq2R",
  "key13": "2cFWWuG1eZoTf5xuWCSdt4gfgpDcypT7kSk1GT7293jLu3VyL3rCztgm8fAVDpLgV4B8LjEuPbZ4dBLdeUa3p46o",
  "key14": "3gUh48PzJXjmp56N8NEqQZGa6HGENn5Z5MfMB3TV1CPS5VZnXSvBkW7VWkPqBcAE5jCFMeN2n7ELAExqdtgxZcTX",
  "key15": "LsfuMX76rCVLH2DXtXxtfngjGnFn3epwaVUxppCaHFyugQbdccjj7epxk6J4UiNn722ufPqW8xjaq3WG7Z8o1kN",
  "key16": "4DQDSCdpyaeJPG1WeXvKdThPSwpZyGuJaTtQmZ7z6heMFSLXpNobw1xhJqcKA6iEDdyWgcFzjpHABtGjSpDLw7Vc",
  "key17": "63fPqFKAZxDVEu6H8YarHuYTeYKWuvDScUdoQRMYhyrErPFE3CH8mmTqsLk3nAyTACHAiq23wALbLehkAXEkxTZW",
  "key18": "2nCJ5Gcxp8iFT5kLFtWMAjnYaa7eeGCxk3rc88T5wffzsUYfTb5ihqJcJbnHyezSM5FxSftLqfhUxeTTpitDwU8n",
  "key19": "bUu5KuweiqFYy8UAEVKjsQ8aFy5J6tadaotXmgQpxPXCXzinMnqMwoVg9br2VwQdpmcm3CRsWCPjDX7R1xA2fkz",
  "key20": "3yDZ73jTW3jHyjzez2MYm3xE6syeAVNK5Yx9igK5tCqfHQBDvtP4WQ5vrSaJAWtLWz4PqFYRKC7ioB9RFHNMedgC",
  "key21": "3hJHqTxCGCTB4mxSuzPaHAQs6Z8XwZx7tuA9beXV7HHu6w8hoHtaBDUuoaV6nsSijap91ZH4pERVTkZBhrq4TYr9",
  "key22": "219bmjeJZsRpNbm7kqkda6JYtkS7Myrz6Kf6kDx9V1JN5XjZXomDZgPFpADozpNf5gDSBQq31YGV5XQeS1kfKii4",
  "key23": "2CguLhrrDMC7Dop6us8Tvx1zQMK8G5ZvUZFaMAYfgSJ3WZKyQGsBF73X49zVnUnfiahJSR7aMfzadcqrFTQgS75s",
  "key24": "3K5ZDo5ervBYDmA53y1vN2b9VrUusYe3RvVjKweeXseSuQw2v4nkswNmUJh9WuwbXx2XYAvHt9s76Mc4Q7XoA8pQ",
  "key25": "2jVd5aWEAB1NcvuUFBxScXrLyPxS9ZiHvandqVhRzGgbCtdA4y9Vxo3bm5Z2oZbt3fjHnenX2EJqYRfQG6vs91dy",
  "key26": "3FLdjsxv9cUmAHvxDk82yWmcTpaJWoDSJc5CrmtiEdDXrkuauiaaGtYqCbwAevNVfhfJdxQdivmdxd1EMXtFAhcV",
  "key27": "2NFPVzz6KYtagikF3wYht3BiRKrRJgwgR4o1JyboSWxnHxBfrzCJL3WBHFF3ebPEk2xmeQNgdM31MJvdvgencHAj",
  "key28": "2YJCEjRX1ZP5Zmaz4kYa4y77EFAGN3rhXEDjoSgRbWrByLC6iVFVtTPBt6mz5yfEbZzwQrDU68Xydam8SepF8SBa",
  "key29": "3Ac71CQ4bn61Tu8hJxC26q7VmiKbEmSN6smysi9rMgCU3demxu9a3T6P5rqX48e93Te31BZvPEEejgLrUPtoJFpi",
  "key30": "4eR5cDsYMJHeC9wdZxsKfRUw7FGC9pSAAVv8LBCFkqgDyYQnDXTZaocLxFzm6Lc7V6naJWA7PtdzPM67m8ZRFRNP",
  "key31": "63XoPk42H4TSeeSYh1XFUmsiPQNMVSQbJn3mNogJDbSv1H67AEWZ16up94s5nE6NvGkPf9iFZfQHH3CHud6MFc6F"
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
