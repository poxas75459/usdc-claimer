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
    "47tKi2z96yziU6RPPsyT2cEQhVU4yczyYHKhCVLWJFQ9gq4vRNbJAuFDdMxDv1V5UxTX8sDNxtruTvsP9FPaSg5d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4izqVxjdAmeuB3pZoKnpMBUzjCPR3zCjNFde1W7EKc33GB54iTHBKbA28j8VjcqVSHchPFQBzUc5rd4mcKNsnGsS",
  "key1": "2aEBR1DRJPt3sMzEVcpN9X16RGbFSWvPWuf81hjX9WcfrVrqc3ZZSGoouS8WdmMxHAvcHPNJYyFav2yt6fkDxXCT",
  "key2": "63dx8vCHZYNNLHdp6BAbhZSHfe6S9knWTsySCe8iPjitpE6YXua9qJ9Ur2cWgzevqgcpLLXRZvgBLN3q3syuuxCE",
  "key3": "yXRNjf37X1kNQapQ3EJb41XQVTnnJ68vw79MrA43GmaM2fK8dSqXzgxwrRApuY7XLpWrP2L89ryGEUjh52WjNdX",
  "key4": "5QT32nkA6vjbnBNpEE7tZnK7Grfh3tLUivn2sVcbeuodNPDVFHD8pquUsVJY2pRrWd6azghYxxaXUQXVcDCt7jUb",
  "key5": "4i7xksCAhSx27hzyBc3BpBXdw6fAU6gXCgAFTgDiXcKHjSe6jJ8dX9n3A93suCnpTkT2RzFwWC2qiF8MnK5gnNja",
  "key6": "5HcHWp8jw1S4sQD5Nx8y892RQxJTY12PdEL974ZomZTUjWkBteCZ51LvZknSn2JkP1mfvzjhgmfAmY47YUF1rEJZ",
  "key7": "jg4JZpitQT5WW93JPq2KJ6tcB9uiyr8GDxbWmSB5cbmscAwy7EfJ7HCn9SeKU8hdSeHK7hMEibaWdZVMMMwEuXg",
  "key8": "QyCqEHM4uc13NkgHJnENqXXnQwGjDtCDnfyAt746kAvLPia9jQ2mQwj9FQWcDg7MDkRESmeXfq8Ly5YfKmYPvPm",
  "key9": "J1tBMew4r723hPxrS8x5UXztkG8vJ15fJrfRwhjuRRgk6c9n2dQBWFhBQCj3bhRXKjNd2yyVqdN9PMCt5Nhf3Zh",
  "key10": "2G5QcMPmhD9JmyXvu6Tb8CTuWp7K66xSwygNdgdrS91xHazZwPLXkT5EK6ajoutMz28Pt6X6AcZRwajx99yBY4qN",
  "key11": "3ZtVrNMUJaywusZH7so2XjVJapLQtdeugUSEh3My4iNT4x1CW3AmQy8tpgpj6tiqUqCPbEnTv3HXBi6Qeshpak3L",
  "key12": "2UB6FmdGamcBzgXEiK4ETLcZiiGTEPnkpvVQ2eZqSxVuvY8RqqpbjfmNGs1kKgUgwsiGJfiXjUhu2xDZxNAcJ8Qx",
  "key13": "62VnfrdG12SDa7hWybBvWjDivF5ocFErRPDsHdUBpeiBoyzgfAsZBhm7NwS8PyELFtDF9C3wocWKR5Vt2yfxVk77",
  "key14": "4XF9JHWyTtj79U9GsbY1rrzaBnyJUg16Wd9TNYbpiYA4TQxvVLLmNRW99dTcz7YhVz6P5ihbtq4hN3FPpnzRzuvG",
  "key15": "3Qk91k6vYYQb5EbkUWoaFCGApZwb1cCVgjuLyNdF6Nc7PiR6P87PmkGxsRRg49VtHaC6jUre917JjmoMgzkw5Gi5",
  "key16": "2VKyMdfVPFvifHD1SFgYXzEM3kEFuu9apqi5ftYXpVHEnqnxPQsQT5mTBwKjNbMmqSpJbkf8MHcoz6qf3jHk43mA",
  "key17": "2sSQ1dW8rd5FGPtRy2bou7VTTqNhv16b8KSY8wGpVJ7JTHPQ6d3qKJPzzUc3cvq93kxGQ8GLU3RaePUchW1Lv2Fm",
  "key18": "4xXVTCXf39Ym8z7znwgLk5wZd2hmKBYA88qoJaNvGmHxUSX3nE1vj4DfCSc7qXRoXTAUKkbX8KP27XBFoweUR8Sx",
  "key19": "UKKantF9cP7isRAEuNVLuBGHkVzEn8PQy9YL3UoFSkK4wyFzUzXxEDXDmfG6dMn1wvripLVcsfuJsAEF7PyBaYq",
  "key20": "5MDTD4ABMxukowbxu21GRkXqMGz6MDVq7vYizzDYAuXqXtNqaLu4T7zyAJupCXniD64o7Dt3kL8Pbt7JrUvhP7g1",
  "key21": "28o54s9wT9K6MYHseGF5BnHKX3xLMRscLK2UambvYQh84V4r788hPTiufvvungg4zS2WMu6p49vj4LAQBZQR9t3T",
  "key22": "53PHh9CXuSxrDfpYycmgiD7sMuqdTvq3KYFtbA9LnjrnFtKH2TkFhRfT7eE3BGtUn6CU6e69GeevYfaeLatECb1M",
  "key23": "Miy1KJ8zPnhhKyRLYxgWKPJhBXC7AkCow931zYangZAqmqydjgsmi4LUkmo2RRA8FZzQx6RT2BUsZjiJYj4d6v4",
  "key24": "5g7nxSJ9Qk4nz7f18Ydbvi4PbLqBbfARiFQwSkcYhT19XXPwWdEJ1mES7S8WacrPcExLpMP79QuQqrSUQz11Rnrw",
  "key25": "5ArkFLwr3fHb3myFCcxq7jhDAfGFSiDwiSqbFgzPyLS3HyUCNv9ZXs6K581sUCgHiYeu2pGDAWuh5rJjsQCeVVb3",
  "key26": "2REy3GZeJh7QwpSY5xqCStNtvjEdzpJrrwBA9ME6hDkhwWaDQc5WgJEdtAWjx34uAhLw3bm7ZzS5h68As3eUjGFZ",
  "key27": "3EMV9HBAnuTUYGCT5g1RLHGSrKPDsZmWuXXef3T6WS22gt4NVA3QRiYXALbK9CvDfJfLPVEtdtTwo6ueneLy4dUv",
  "key28": "373TPp3RyDTi3pybe8QpTRvnZe32MiWVk4QsS2gPfNGWasJ9KfUFxBruXMXn5NWUf3sBXLjUkkqHqG61sS6VWUcF",
  "key29": "oZpeXdAqbeFzftWVac3TWEDVRva5VBrLjLN8adLD2En5FUErwzQ7o9M87z9n5iqzpGgF37j3s4DNrJquhrwhouz",
  "key30": "47if3UmkiRXbn48eSex8dbHLvZFcVYoqPLWEvmGKVwfajAmdh49SXHwmqsuB2UPibQHQMCMgpK4YChWZknsS8FCm",
  "key31": "4RuVyEuTjmfeDMu6ndgNTu2Px58xUxTHhqiAAMMnjnXqyXCefLLYCnQKWvhdNw56ScBWm5k312vHdEtoSbdGRdpY",
  "key32": "5XZSYyJPXKpvsL3aUu3RrgGKUQHwtFQWtveJ8TKLCc4nk5n49Ty5h3LhRTKJVyJbLBi6GAUYwzZfjkV77AkTC8LT",
  "key33": "2uEVG3tDs7TQZbniWGKiriJWDQpW4b5GJoCygfymaqf4Pd6w4kEhyMNmncNmLkoKzjrRjGrFqf3rBqU7i3c7jcKQ",
  "key34": "2goE4ka91jRegwJ26FnQk6KzBf1bKt3SmDJH6MS5pr2LaDrYjpFuu6hWm2w5Ab2h1fJ8QvvtvtZZ56ro2JqPazQy",
  "key35": "t4YFdnLB6cDrKSY4p9abVzgCewqhm8SNzShjNZpLf7ot9NwAmHpiUmRMNpdTBNWKHsi9wus5YoW746avT2qEimG",
  "key36": "4G77sfoDowgtwH4ck7KPkjdkFzBi7hnjk72sPWW1AyhJxhnqcXfMkDUPsNbtBpnq1bM7GqRkYfDb2dJoE1dQAP8Y"
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
