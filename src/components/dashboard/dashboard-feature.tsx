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
    "45oGGdVVa8Mzb5s1nxtCLAByYMjo9uo5WAVAMEnEEqRePqyC7C2cWfRSpsNQsQ6cciLbUEhnCp43NqCXseYmxKDw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PnMzEQtXJNxi8SYjsaZtf3g4j3cyuFTAGoJjDoUnfMhiZeQdPcb8vETevR21PXbH1spwz5w24FsJpeHknxHVRF1",
  "key1": "39Q2SWD2zU6da2jQ6dcbpv1KiDArvJNyBBF5hXkt3FguaTTJyZXW6ZuAXrTAhGsafhHojrWz4fPUVVDdtiRW8K4m",
  "key2": "37h6tQ2DA1uhBDDYFYo26rajKgWqfYJ5Q3PRynVDTrGGhzpsAXfYQHz8AxM57smiqRM6jTgSBGpUWBArPexFF7jN",
  "key3": "2GGNyGkL4L7PexVitTARrGUuoggb5VhCpyt33s9j39SkA1E6pgntxAwGPHJ6iWhj1FJ9qs6cLQN3DkgRCWyAfuE1",
  "key4": "5YC1CVhExTyEYPd7AzBHUALx7xdoJHCo5LJ1vXbpxRreCR2jocENJo62XuZBotQU8ruonCb7GSdc1Ei2od4QNBXU",
  "key5": "4d5BzQXkPY2CEGzpMe8hSWgsHfzz6bBUrvibFHcS5Y1rGCGm2jftwXWED4vdVMng6u4g94Xkh9akoYtBLiMxVG1W",
  "key6": "5z6Dcu4VNyfeZnjNXVdsTZ59qHWpEAtSGaiu5ybP3NVtKQRcZytV5j4Hkx8i1DaXsWpTyNXL3be8Mr2yEMPBPH9K",
  "key7": "5RZ9CegS65BcTAmAfdLv8AAk1zcyV653EJP35X7My8GUwZ8bgD3k8nC8VYkzuHLebzprLxSVjx7ks5SVKdo9eSSM",
  "key8": "3LTijaSYPLDHBZF51Reyjtxm8YtQMH4s4ojfZJtwL8EJ6B2R3NEtobZoQ3x2JsmXtyVXj6KpRuVDvHcDkLNqb7gW",
  "key9": "4Nv2QjdCDp6MWWVKaGm83P1UojDp5jh1BaPqKkz9AGH4W5Xy4haCMQTMxctb87m9DkoxwnE8oYgpsYpwBivdkZ2o",
  "key10": "fDo4bnJPo8ax4E5ddDxcvfrqt8a3pfQTz64oyopfcB4oVYchfzqTM6L6DoS96YpCetTKdMfhF5AffiaM7464Zvg",
  "key11": "4baWuvWAiLdHbt5hmbhgnUY5CixVBhboQxW5ZmC1ASw15MuJq1D9aBbXBBvy3Arpx9HpSn5XWvNkZKXTNWCNWNqM",
  "key12": "2Z1Z27tm2GtfeUCQBrWdC4Z4aHBqbrR25H44XzouoJEhycRJKDF2GPgrn6oZfwhXUSeSXBe2DxWqnq7KAsea6XHC",
  "key13": "5vwTmfgtK9UBrtJX68UHtPPgua3NiibinN6i1Ez1z5sFpD3Sx7PWBN4KETYZ4SAgThAP6YE8LaMNDVoGKdEjPjtS",
  "key14": "jzCAKiWekXCk6YnkRspCBjwwg87ZEESskymT6dtMCuFoFPnmtogPyWXrmNX2X4RfgA7g23SMVZRMRfn4duE7xqi",
  "key15": "29yc5K8E5ew1tJsevbLLRmwRmsd5rXuYGg3cr6zFoYyDG4jpgSsrEBXAqeRTiHravkDjMuYZfMYiWSSzpVugYcNq",
  "key16": "A2dvzxvucnEPGxN5KExTMhuP52QPNKkeHU4zfT2uqmjFBYtFET9zd3V59KbAwp19psP92iD9uDKb11GA51gGrXV",
  "key17": "2sWAZG7zX8BfxGPJViAY5G11qVySHGs2Ed2ynSeRtmkxhQwrttwrDBEu938ncH99ZUpYwLNf7m7Jicjgra6sKhkR",
  "key18": "2u29qwB4Vm5pWHjuCk76qhmi1qJm77arHy4Cxwmbuc2qjiuRteVNb5zeqGqxeRhZTB4LZB6Pr1jigX35SdGgGLVu",
  "key19": "KbGNq9XUte3n38YiosB5ygBJWmas4xvRpasYjfEzHo2pHAeeXoFDm3uJR6qYA2PjdZwa7nxKru8TZBvNBQGqXew",
  "key20": "7GLQMKohxJfw4YzkB8p41c7FmUzKGmDz9xEdKhD8w3afoR3ScLdPUbYSHyLaVY4RramkeMy9BmQ7pd11cCjr1Ef",
  "key21": "5EpYwAyauDjBcso3tzEvpFMEWoLZum4s2SV2hGee7we75F9nsqAF38Gsqv3oxu2wn5Dyszf54FRZRVQkBU2DNLAg",
  "key22": "NxkBEjpGN3xftcoACoxsc2iEq9PmAGETsHgNYKoYJLRjYK98jz8mzawWkcCTXtvdmoq3Ujxtb4i3GdsMZVu2Bkc",
  "key23": "3cQUyYusPYdDRHdTjodmQjodMFcKxQpcJPWTRpqpndxwoke2MK9FfihzPiCY4JgeYkSSFHTe8JiNc4hPRdEeZyj1",
  "key24": "bts7eQkJopPA4CBQT2VHu1nYxUDpGJ6EmCfaAPw7Y1hnPcywp2aBKit1thVAKhQ64hWxnHsb3RcTpC8YmX4PLgZ",
  "key25": "49eyutidvGG4VbLfCxHgxjBTZkxEJtbTmjNX9bMZtby9wAmVeETuLR97uGGH3mXjcLw2mHwrWrW3sTyyrKnBh4Rb",
  "key26": "5G9fhDFKsPpkx9bhVnfZmUrPq6JXkGdZueqF9twJ87SFNXmYebphjUyErt2K4qacM9HfpyD5YB4TV77PB2vo5Fo6",
  "key27": "Ko4FGedz7xCSRMcgEMmf4SaqTgSnqkw2LpCKvVDafq6hKsjmKLmcAJ9QsvpV1Grhs5iNCASjZKdLTP9YxkH5tQs",
  "key28": "uCkp4KavHV1QiuYWWySpHMB5utYGT5oxzWRMtrytgV55JPaY17jnavQ6kKxXCx6Tzybk3U3SXhmUPgfddRYyQmn",
  "key29": "72Sb9YEAPrZnwE2UwggTZ7WszsVFUNeyTsaDW8qapnKJAT1Raqe8iAfR413pc4s6hbRZW7Yyr9a5rimWdjDmLy5",
  "key30": "9Kmq5L9sVMMTF925Tkrjrwbu2WfNMx16AHVmicS2vS5wr7sgV4bsiN4RVnJGYr62i5UYXWipKBUkXJR53kVUGAq",
  "key31": "21ubBPdFXNTCbi5GduofjSugSj2FQs15HFto4TnDYBs8hqbesSv4UNYKkRpMXvpxeLV5VtgbvorMCz3R4RDeUmrR",
  "key32": "4PFdVzr6oSkR5nRR4YTpUMAc7sMtp8QCijjFAUr7UW2RwrU15BFNdiHxvHv8XKJ7dDKJzftmXU7yrZ6G8NcNmMfU",
  "key33": "63pXt6bS7ap1FMzgPhs72MTB3snQzNCzeMcz8cvg5DP6fbNSyj4Ke5y17qvzQBwYTmKBdEL6kUQdw2PxY7XK8Ty",
  "key34": "sanNBcjz48cWGtpLU9asYNACUzpaKg6uxVJczjpDXcZ8W6P8gCo19AnM49rKGuiLFxAGq35pwzoksAns9X3S1Us"
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
