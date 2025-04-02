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
    "5WZBpeB4ioGkanYtzBipSe5fb4D3B899FcvDNUfEbPZq91xLRZWK21iFLHPu9dHrAetkzHfmnMAGbn2ArMF8N1vJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RxDLahayAu2DtAEfwyL7aKEWWu9u19GWHwp5Nz3UGPkjFZBXbCrS7YzdnzfaFHehbJnshZ8g9RAozJsrdHe6A4x",
  "key1": "2sXb4sLTag5ipzBtWt7podiHHQHek66YPUTESvCnH28tVzUtmzoaLLwiXTaSz52u9FcLRCCZxeKkwKKoYgabT9yZ",
  "key2": "ArmLp862QGGyiAvfEm47tYvQfaAaXvA5NtfmWSe2ic5BLccAZNkFCsj7zXxDNavXNYpZ11sbZPe4P3FfbyYDxDY",
  "key3": "2sGkWa7YjGw4GrSLjyZ3hAc78pDn5Ytw7xR6QaZbtDwLdRj7sWJGBfPNVuW2RajGGm7kH5vuKkFJY5Acw38EUEfj",
  "key4": "4o2wcGyRXcAkLxqkH77ui2dgEKWG9vHfEBSngW1coqGE1fctJH3L1q2rdrHbtE9veP9AxPetxvGtp1TkEQM6KXUo",
  "key5": "31KLgWyREfdymA8U6c5FP99E3n2J4Q84CjXBLPg9bVndczkZWvHhUAqBSSkxArdkX52TMDhmUu5HSfzDznKqFk9m",
  "key6": "3PNAVmQfS3b8TrPUhutovqrCULaKZQPanDEtkzSGfaYpWQsBZcsfcaA6A7LQG6A5rLwSJ74kYsV68y3NNYXWN3Ca",
  "key7": "fXhLZC3iBzQMz8XGGMSkRjX9ztCrUyebpDuUHeLynFPFnbWpdgrYkB2CGkdhfDAQy4FuYwx2rSPWqmPjQoeHN9a",
  "key8": "rrAtukJnRxVa2sEca26BaLyfN5Bvo8oedGrjaMUTtwYHaLS1ZeQkrHSwBL1y92RG8cs4zKrh9nYDVgUASdZ35R6",
  "key9": "3YzDpsqfxaWP3FxnC3Eshctf6vqj2DqqWhEoXD5R3gJsQt34ovcpZbqYxWcqmbJTnAbVsemXRvxDj7Y3xECqNfHM",
  "key10": "4r3KyVu5N24WvQzQ5UwyxeUAom9YGvr4UmTKHJejFjp94XK8SmdxXsdCawe68f8S5NP2ALErFTX9XW7xdgUFBoYc",
  "key11": "5Hx7MHYD4P1B7p6uNLnZxnMzomUPr2BxLzV3e49az8adZQQJ9e6bEZRowNcqrB2oPwnX6jeLEdQfRFqYD82CTaVC",
  "key12": "2YC5DcXQRC5ASqa1PetNWNBGf96jEH3r8V7hLRwinDf7zDkBgH9oikzW2xYdDjp43DX1cZtkM6TFUWFSpJaSwAfc",
  "key13": "5YXik8BrJvi9FgkR9LdLCv9FkgwS7XGdFHwy9ncJCnKSxcEMUH6iujU3tcsct85TUAYMHnLqtZB7ekXKuK56F1jh",
  "key14": "3kQ9JnxpGWSnEafK8FbyCfgoeazsGovdGrzsQYDHg8GCp4J88TpLGSGx4CfqcEX3aptdXEwinsRPkVYL4WsDeFnH",
  "key15": "4SKD4NKddrpqjrwwgj7PFswgjnGsrKPYKzZeHTot4aBcz7nGkbiAewBviUuKc64T4gMgowc3qP1HoRoyrBkgsjD4",
  "key16": "5NLpDnJ2EAsNFjLXLvWqwbmP8ij1RL5CsVrdJ4ZraKjDFPRs5MCf6rnWbSjzbJDKspZuDPdaQqFNAM7ZZdiFMdg9",
  "key17": "4GFTUJ8mM4zhHU46mD856gAs9uxQZqLPi5vH4AECT19KiFWpNvnCHsGgmJYA5ZV2YVoK3EHkLBscsjjPyJAzKYnk",
  "key18": "3wXAYf6RQrLo4CQsiEteR7VwHuCCY6FsLTwCyb13Cx5KWHfTfU2ZWrBQE43QFzvna1yzXLMhBxQ2UsQM2dg25hdP",
  "key19": "2VYQTMxnKpn6dBSxwt6xSGoJawk9ZJphR5Gm3tbFyaWYfLwD7L1Guns3dW3EXdxBQzm3q8eH5KMYf8oDpc7m6zUb",
  "key20": "3F6jHSX266r6RMQLEuVh9LJA3E4XeXfEHWqLeFVp1kSLHPFunjUovbkKPCGK9RZJe98C5nqrWGpyGDcqNJjjrm7M",
  "key21": "oAWQbVCLdX4xsKCMSii1aLhMpKcMbqyVPUjXu5qLfDXhyvhQomSYvvYp4HxDtj5yC5MER3HQDG6RCkMn8JX4zVX",
  "key22": "5vBmwYNVjwUBbJSQk6U7iC1e3p1aEsWjK2KcGksus8qqd4hJxEarcq7YrnuqXBQDK5nXSXuD85tH7J5ayX9VbSQd",
  "key23": "2GSmwzKHjZnpPXk7hjQCsWfGRGnFzKtKESGf61kXaDqACAEeAqPCo7UwY4LcV9NARZmnnaFtD896qbfDVpjWHmUX",
  "key24": "TpH1hC67LzXKqDhMc2uKDEkbBwpUunYCGgxxiqUGa3wVKLHZUiPn1Wnqa49HAxgPwVTG9sRcvZz3U6FckPTWUtC",
  "key25": "5fjiGVUo9ZH98tUpjdLjBTGGxYRmf2tcy1kmCWGiyZkbHWD6iXQYXhYYHcyzTHhh5x7nuUe6M6A6UCx1TAHA8HE3",
  "key26": "3yTeh2dHvPT9gsfLifWLYN49UZBQAMhJnNDQFRT7T34vu5iHozp4m4r27jyPm5mJgR2fCNPsatJxutwmc23wJPfp",
  "key27": "2MPnhvo53qPHdV199poufTnjoXvuiFa6U6JgoZ4qbgBVzocrtXsKzhNmTDaMY2b4jhDh8bJ2CbA8uwrxcKgiidzo",
  "key28": "4drsXEqe7kWDFtJNsFT2g3BmhjNWDTMhNay4Gx6firYNVguzrKWAE8sdpwhaiYjiVSx9xkSkVHusEBpi5wAA7EFc",
  "key29": "5N7eJTqgdsmUsJwR7ztVAaPVfS8hHMfxeM9bPCa8X27sy6ydC8x44EyVNkEVP8NVpjjfx5aLbxTsyq6d2mspfSjz",
  "key30": "2Ga77Bbjuwj4tqqkRgS2xyLj6wJpyNwCN39W8xE2SJcL2SaayAUb1cDxp2XAwUnDUU67DPDEFvTnXwWYtw7x4pqg",
  "key31": "3HuKqVh6JKZrFjFkSa7ueanCgJUoTRdxonKrQJpPmiQWvahXAif9o5itpwGaDdPCJeQR7fpfTz1pJDQK82VEph4",
  "key32": "5C86foypxA6JtshXvgrvjdBuZkQuuUShDpjoA4H3d5SopZfNYj1iwFdcg9KJ82JPVtFJAUFVwepbchV3XT4sSZpJ",
  "key33": "3nH5UmubK8f3AxdA88SXo93t91nUyCAuwVY57FveCZjnNUSUHUtWmEwRuXBhtPLzYqjvPorXXNqXcSs5F9dxMEgG",
  "key34": "2gHAfTg9a8QLCCbgdgWnP2yLc7p8KJZtstpoyYGtdSDvahB6RNesqRuHx4r6tsMpAPxBuewPzSRSSc4U6FiEF4W2",
  "key35": "4GuEaWrTCSXsEUoDkCP8AbUaCTiEjuvVgmyX9spxDs3f7PnEBeQY2Fxtq7zWxAt3AZwBNi49PYgHU9QqYDxVizjJ"
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
