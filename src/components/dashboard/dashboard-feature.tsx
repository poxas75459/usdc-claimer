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
    "3JV2iC2KMaJgtEUFBme9J8Lf6m4a2njQCyEFDSAJjYgACsgTU4SM1p6w3WCgrgdLjfbekCw3kA2NKZQcZf4TYtVa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BFHpubA2fJSRKpTf2PiadVj8YaTV5YMLHpFBU2PUxUpzZFB2GWMvEJ59rn8BVqZfxW6yF6gFc62MeBcifdrtMXj",
  "key1": "Sn3cXmcZGceRNPuuvde76rmuEK3NaST42TMFNskwhVvxJuiDu9wS6nnVJqqvBweNyMn3aNpSGBQ53Frt5efgKcV",
  "key2": "4dxMGHoa4gQPtK9ZYbzPAGQCeHKFxukeJ9imDKhHybJYwgbLpaTQEsRsQiBb9UScTKpTpCGwCnP1iihg5AFtrCiN",
  "key3": "29gY9ZVjJ4AbV886KJGJSfpvDUPMerb917LKhuKErPwFqTmUknzBV8Phv8BpZVdTsq8nYcTBLAEp57RBSm2MSgKT",
  "key4": "5bHq1U1peyyQrUAKE3oxt4NEiKMuTaBPTegnGscHznoyKbS8fahh2PzEgKUFo5Ws5hMpogD3mKqNf2VMn1J8jGye",
  "key5": "2La3cLy7sizGcxdze84ZSpGMzo7Bm1UK5fvgb3z3vdhzWt9WF5xH4dgJh1hvGQpuhM3vcYzugxG4zyva7z3H7bd1",
  "key6": "gnXTnqQbpt4gPKak5zvneLnLtknWEMai8JAnoqi5LjvLDR9JqtnWYoGsEan3RGrvCxNDjuEyGbSq7LecwQtKsgs",
  "key7": "33k65CF82zfS5R2hiVJ2dY3f2knkP5MacURapgFcxzMKiEh9YjU7tCt28sxgZnxrh7HYt266Q64HRmU1MMhRsbtL",
  "key8": "2c9gzAB4t1BX2FVjX9LykT2TESnPL1jUHHXmRViNdCn4V64KEQG24HnHmmfQYB8FpPw5yVTndS19Cc6D28V2YrAz",
  "key9": "4T7eedYwJN45dEtaAkchkN7obxBxaFSpXPWGZUWDd71wv36YGwMFmzrD6c9C48AMC3axpJWpWDA2KaaGLoqhqUA2",
  "key10": "5NkueLwaBUTC4H7yeF1HqmdLeQxGArEBdnKSvDiAvy9sbAfEJVe1CkNNDebbxYU2sKGW8YyXawMzq3BX7azDXvk",
  "key11": "3ZLH1a9Ej9eUgCnYU6AXXHxgsAgEqzGj5ogfdNS6yxGHmYUtySxbyWfTobhfMEh2QMdFEJ2hhhaFzTjuHaT5ynHV",
  "key12": "57RFSKsL7Bod9wGV3aRE1UL3W6rtAB7k3SVrHCjuyCJFTvwXDQu9JvFGFEFh6Nw91LxrUvwbxHPHvtKtBF8TTQaK",
  "key13": "5Zh8zNV39H6Zxfzeipn5SXPHETfvgG9x2U7N1hZGUfPZ6VHSZ45EEVSreqwwTgbcZYAkmLkFUfq1KEW5XzEo65UN",
  "key14": "3rBs813DLXKjKmqJMNzQnk4KEpaE3JEpuTk43J1nt3Gh3E2p8JrC45kiLga5HuMA6QVou8VrB7a46zMcYk8334GJ",
  "key15": "2rEThYPikEz6b42XykMjEFzymANiqGb4CTeSzQAhMX5V1Dyrw5nzqyUv7cTNdmDiReGQ8AyJSejQTR1jvMxrZbcE",
  "key16": "4mJnHBBJer6BcxYCCuWVxdvvzLmVmwLbFqA8j1rrS72CAmA4Kh8dCrufWr7hvshDrHPikpAanJNX7A2Rr8Skdp4Y",
  "key17": "65qicWd7rx1DxiDgfuJNWZjr6ajY2oAaK2HBKVsea1Uw9Rmfym1tKY3P3W8Fn3whCsbkxnZDDC8ZWt2V8Vsi5Qsn",
  "key18": "52ws59ovnZSQaSDkhdsuuWGoV9T8tgW6x6pqkY8NS2hSBP5anBH1X2srADYWDuFaD4mb3j4CCQBRZJ1zdsxRXhJd",
  "key19": "2WRkCuaXrsD3akg2Ppxn6Pp3gxHz9P35Q74FK9NFBLSm1GDYzu2dCvUGtiRvxFUf6Nxj9ikHq24167Ywn2WWgBGT",
  "key20": "38vj9G9W871FgyApx47XjoXcyyDh4QrMGjceNM3RbDwH5Spfeg2SQWfbF7M2vLuWAKW4dzTbcqEWgbRH7nCdiQCV",
  "key21": "2K5ZTqsXCpq1N7oPtgraNJZRyyMNopq3Vo9Guu3q7o2jJ2cWMBUPyRbKw5DhrvksLG7ADhgkG5hz44KhoJfa3ENU",
  "key22": "xhNTgKieQx7Ehw9N4WSsdhMLTgoKCiwBpphdGUysrkesJzDP1hvafYzih5CnbVVKL7XzmMDQq7kWg8CwvzHN65M",
  "key23": "3LEH3QLXVXLWPohUTZ13Le6kCu3iWLELUJnprJhne73vYfE41mwY1vDC1E411Y4qdZPKckRA3gp7Dp3EXKHsKfZJ",
  "key24": "LoHr9o8rdQsCb3rugMjqD39dHKEKKAyc7w5853sNx82mrADo5r8L9WLRX118zcASjz4apMA9E6WSBEvin9Nv74h",
  "key25": "5L9odURs1KXeNbGmR3q1R7GnmJkWzRZnaGyTo6jihvEiJqN3J7wScSC2UVthG9B3xTdd1wVQRt2Qz2v3DtXYP6xm",
  "key26": "5dAfyrzi8rchzFT2V8cadwvgCkfdatzAfMMeCn9CPw5uhWTuffG9ax2zN8xg6pr4Jjs2jJwvuTJGbmi8jA1L1ueA",
  "key27": "54RTuuq51UYTxghpQ4yGrZtFfBG8humoKdkGVdB1oQi1BtfvTSkd28t33WSQBMPWYLXuG2EY7Qv9gF7a55Rjko69",
  "key28": "51t3yF9KY8a9o3a4yckE6RS9JtW4W2dgm1Uvayw3gntqGm12REv2x4tsNEPMeyu2LkDvo3XTvSCYq12C7aCSAkAh",
  "key29": "5oJajMEWQ46sAj6RPudZw6yYv427yLJvNCCEJZbQtd5rTvozL5MkroGjymfQdew5HSYVuk387BKaXFZnQCunRF3v",
  "key30": "4UgZL5zjHHYAY5iRT9nULU5r7r4DRMMKP4n3KYRt93EThPfrF27gGbgwcoRXookdgZ9DEgFWroYSaK5oSqYxTG7k",
  "key31": "2VmjwD8wL4szkywbTM3NEWUnBJhFvD28A5bjaivpindwkHS1zRKenXMQ6hJepN8aLLH4hsxBPtLsy1FJF91r7aUb",
  "key32": "2Qyed5NMyvAosnEMbEqP6SVy8z5926qjK2QyA2CK7TzBfTCQZRAafLveaRiqA7qEWxozshNvmMqMmjywmkduR9Av",
  "key33": "24AWEzDyVSzykkngGyvU1Hhz3wi79cf1SkqZTDGmGVbVDJD87shbm8H85E1cZW4XySZ7b96jffsDrgtYwKoid5WH"
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
