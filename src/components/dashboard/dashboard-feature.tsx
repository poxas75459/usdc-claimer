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
    "jZw2sr8mFm28Ggqcf41yxpDW2zuAHjQMd58Q9AeTaN9jVyNeki8f2uN4qNy24QK73ubQrEeo6YR1FZDdAeRavFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PwnPvvuc6RiZGDi2WLPJg8eRwCWEdnGGS9KMUkd5jcJfoQ8WTWELHdkP5fhGmiW6RgwQVRzqN8TRio2bBM28Bg8",
  "key1": "21hBYT4CTc6xnCoP1RWEchJy1ppnsa4Ruze9h4eN6BURysrmwKp19cfWKRrA9WCNgpbfdsdv438HWU9YAEMu5D1h",
  "key2": "uEZsZCWWCPV12zzP1Q2VnHm7P3Za4yFAbL2VP1cjSZy5FNptouaGTzNCBee9aMPjyFtCG1x2XGG7JEwBWiZ5T98",
  "key3": "4QtKDD918NwbG7ygRBduE1fxue2zna49hJx2xfFvgRw6ccaRvGwSV7WzwzMYFQ7iKNkoAt5E1qu9pPFH42LdMnu1",
  "key4": "anzYFjF6jS42VEWGiXz4rpGJcGEarWXHsdmJUkBmmftKF5dCz6cAq4Ahqmw7THCeiZ7k51dtVPsm3CajAkAm2ud",
  "key5": "2jZxLfL8jSxU2FUSPkWhzTUhFQHwzZTVNYzh3ammTCNanokbJj2rVLq1atYtYdsPfFGL84NB1ubFu3LVaWKtnEts",
  "key6": "3KB9a54dTBBTJAnVtavLd66e1Zua9TTK2fRpvUes6W59auPr8b3pwn4e7WXG8pdjXHQdkPNVBLBGTCQB7nkGK2pA",
  "key7": "2waPf5fMyGh4duzSf5nU4GsFNy3YBwZR7EzAr7nnN1dXmPSMxww5B545yCvMwkA9xMuUpqgTLozoZTeBD7MDmsLq",
  "key8": "2m7hWYj7esAvEcU6ZbSp9KgdWVytP1j2vnZHqsoRxyB3ZEn7hmQcmfff1NdPZJUummjk8qhLkyyHcpAfjQmkZZJt",
  "key9": "4iUjEJyZ5BRm1xogBM1puabUCtVmL76tUvsXAeSHkQqcXE9qQjYQdgn1seTFDUghq13rTjWaPscbvvugpePbgq6T",
  "key10": "PxnyYv8m91DtRrEoULphLimm25Y1eJEsUmSUzvrgzi7RNymhwwqEchEi7Ccm9Xjo55Kq49P5NiHdYshkA2LdHae",
  "key11": "3aE1Uk6MNwASSzX9EN6rbS3oJDar1dh69ht8SRq89rhE4mK211N1sDYqsu2LwRERDhk4Nrq52vfBYiWbmMqEuBqY",
  "key12": "2rQXrAqescjpA9aXrNSeb4Rxtr7orbu3xiVkJaBpN7UVNdjjKabx4zvtN5M6LNUfoMrdTqfvJMCEUqzbvfnbbooP",
  "key13": "2zqyeBRgPYzmZ4GFtg7fQcZdAxJrCoFMKTyyAR2MaSnGczBaC6Goq7noz4wpCquRzDwXu9wASJq35CFEbNNXmLkf",
  "key14": "53wA8R8EUYE325t1tVyJhqfLodPDktV3vY6yZJwU717MMcAe8ij76VH21ybzewDKu2jzLt4N372tZwJpv4LAiLA1",
  "key15": "4X31BghCTL6yvhNGijtAhK5jBRBdbzgA2WQcakSt7rwhh7XdwGCYqUzqD4TEm3oCvfWTADk2FJycEDs5CMEx8nn6",
  "key16": "5oGSPViVupFwXW6wJABn6DpQyKxTJh8UeCdX2oeAySdiyUFfbgWeK2tiqy71BUkBjTFvbRpfzMPcQydxho5cZoQL",
  "key17": "5bn6fD7Kin5FUiSzwdEKKQRVkp4eVX17ptdn15RDy8ePijkUvJQbSxL6Qg5Rph7heGcSEB6s9aDKn9fkDDzmiGra",
  "key18": "47dnDKZFxaCQ8sbBQkGra3GASHFjUScApR6uxjoAVE3TRKxV62HDfsR5TY7Pa3HALoreLnqytgEkK7yzvEzgN3TW",
  "key19": "cPsPbtqifJwDp3jmpqxzBUpp8ccsNEpLhEZxZu182fS6PbkEtrMsYEAHiWvSyTNXbK3AFT5Au5n2SF9NWFrKyLT",
  "key20": "zr9X4fa4dvzsWuWuYy8ER1H4cKFM6EJX1a9NWcJoyfSVRDRoQVwSXQoccsrXrYRhJDKz67c9DSLkFr7PxvptPR3",
  "key21": "5GAuGCESx1Ma73LPYQtdZcAE35tSzMM8jfTLxb8Af3DpgUM1Fi3h7kDLUS9TnJWoXTXeeRgQPQDYL92veDeZC1j9",
  "key22": "2RTWTM6hCuFHMbN6us4h1yG4XPHX8ZrYChCWZbbS416PA3S1w6hvSycu2t8yXGsRnrBa4oYjKyNYgf93iw17YXRQ",
  "key23": "3ZXcYCtBQwLVR2sLmVLh72JYpeGbStReAQpYaWSH341CofizCCi8sdvuLWGjqxCRNbn8jKRHsCmvztcFq8FeveU5",
  "key24": "41DX7YesZEuC9sW92iKfG5c1fiBG67sEf14farphCArACuB7bLUhPwoSCWz7LVEd1h7TBtrU9zvvQ8e4zMFdJDLm",
  "key25": "5xCv1syKkQcqjc9iM6BdBkYbue5uosZ6kA4eXy2qqDUvc5vkUnyFyWDzwsf8QdJdZKxdyEdFuprDPP8CDEJDFBTa",
  "key26": "49hRY2NG1UZtWii4FPiTLBrU1HchUapDNJqEb2xfbqPXZtJ32syuJVG4EWT6kBSGuBMhqYr1XquFEPuKX2x2feF7",
  "key27": "56cMfdSwjicVEnvSu4Vm8ejXhxDgVsyxHR8ZkBngFnm8XBTrxWhvxBTcuJsMbztYPVKTB3jqTiBVrViAPEf8UVNQ",
  "key28": "4RCgEi8syRj5PapdbrUHrhtobUooaCdxicswB38BbCCWbn7jVMeLpUEv62kKEs2HV4Z3v6oFPdeVsvA51AKj7MZZ",
  "key29": "4epwuJXGzvRqWZp1wW5anG1ECiyNHiwyBEJUNvzfWwFj5xQcUgmPpPXMko727Z1FXRbhwcGQRef1xyfc2fsReoUF"
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
