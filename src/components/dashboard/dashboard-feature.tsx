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
    "2yzMB7kJGqS6auZu53ixcPYYHPkhCuGbzT7unPY3xpkC1x6ydXTWn7PJbKmoQAa4dLU2AkffETT3aDmg5eHZQrUm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZTHKqYE365xayMp1gA8rEg5Q4Y6DhNMABn2ETgbuNFXvUXZv9GwX1cK4C9ruWnJhZTmeowA1DDeKiAC38WxncNt",
  "key1": "4uRsGUu8RGs4dzcpYEj1rhujiabx2hsnghb3Ac3XfYnUQE8eAmo33nhtFqAKGysDEaMLLpAxL9AigkPJsvmTGAsp",
  "key2": "2tDAuqGLHvER8K4PUX3A7XXtXjtRryJZBKFVGfkvZtq6CG2NgLKjGApXiF9bJhAVTbcJYBkn3XQ43cGSKUKkM3pE",
  "key3": "4kdiR2sS2XpPxZSfBANF1rxFEHeMMEZw7t83d5vZ8mgTKyJaD3m2tNi8wYgzeoFm5gs74VJMyJFBXULmeTgbZiDb",
  "key4": "2FsyW3Wrm5ov1Csacq6Gx5FdbmaNfLMgHvwyafpjgDNb71CjSXYERJJ2B6v4TTMDw8PADnmXwQjRzQMrNWtXSDFC",
  "key5": "HoXU725TuzE53nA5GFb6y48RhmqQ5pA1bT35bB2Aee6navaqqfWuMuUCLpNbaNCxi1HkCt68aqDFoKjQttQQkTA",
  "key6": "4ttmSH5nTeQhTyX32BzBY2SXW9H4pF6DHFKU4nKmBu6xcDFxxvx7QovH4Zr32pgyB3P88WtRQgWDXXBo4cyePyLU",
  "key7": "CqysoDtfwHwwknzN9Y7YEJqjrjrr5tHgsPu2bDL8AHnRbWstN9HqmLpFe22AUSkA4zFtTRYUJdZWRqnurjUs6Wv",
  "key8": "4qtv8M4dTjJGD5mPk71hbE1d7s33PZyApTUk78ecPa4ubumk5XT1rtTVBimAZDbveiCXHtT6awyJ47JwUcw4cDBp",
  "key9": "GdBe94jCNtUX4V4uVwrhzAgw4q25Kdzs5f7mo4SXQsdBYKybK8YPD9J3PNQNUhTbrrP5KzaR859ouUrEKhAb57N",
  "key10": "5snbYTYUpooc4VF7C9bKx4saJcPoNgsFx3cu7zhRn5gDZUdBh7EL22eaRNdSxS4Cv6prYDSpoZBC5jJJaJz3kDZk",
  "key11": "245GAj63Hk5n3Qk1y1wLSGGEvsKDS13zChLxNMbAu2FiKprCwLkGHQZySJmtosAoAsig8qegimzrM58tAnF1gfhD",
  "key12": "4VrLgBwGKmeNvHXcucqCHu1JeihsgYoMyFFTcc5YCxGS2uMbxfzZnVSiw1cnukJfivQyMKsqe6CLu9ta2sQJqJtk",
  "key13": "4o1biuHyaqTniuhsWWsZ78oXaHJ8T15SiKCGepCk1QzZ6BwkinoJePkWnx38WjPiH1ZW5H65iXh7kjDvWoEQFqGb",
  "key14": "2HLVvNhd9iF7qra7ASKgcGZ57qWA8LJvB2g3qoR6kymUhygrF3nDSE6Buzh6f8kAHZLbL7tJj4pFNpuoxfhMoDqv",
  "key15": "4ocNGGdAP3LfaFHFDwnDqpHrtB1XGjkBmVMp7XXBZAk6tdVrv7c1dAerkkqQdEFP72xhydU6yWqFL6JUxzZWi61T",
  "key16": "3QriNZCskT1JxZ1xo6xEnsaLuftg8zpD8tfDQBdtLZ18pSKjpbXMnDEZkVKcF5pKEX69W4RpN7TXDnUBKHVirV3",
  "key17": "3wtSH34SSzy3kGzQks5CLsNvby3vWFnkDv6rRDXvUdJqL2kCEGeHQqoA227FKocAA7Y2Weyz22zHRzbkGjHTi3WU",
  "key18": "4wwRCMrrqnw6TsPhuhytt3NqhGCLtNkxZeFkms46fjwhX7FuvnUcPX2wmqLq8pDfRHsE4yjkG4Fudz2CN25kUauR",
  "key19": "j4bFNCy6LG93qa4Knsp58U4F76mqPGV53a8PyHFkCJZm1LgYGY34X8JNBapL5Xyw57V3JMJzmjYiwuobWiKJkhR",
  "key20": "4ZBVvR9jA8u2ENBbUewmkUwbRamPyvAhmuKuWWED8ukGAQDAadyGqnFFLWxzb19EYpT842rz3wm2zX3kowwzYEJ9",
  "key21": "3AsasgcFXgnjhSgdVhDDSEARGoWbL2bqT6VvS4F5dE4gFyyQxZQyxE2s3wC3oxvSKeB6bwHYDkSGA7b7vbEPaqzu",
  "key22": "2P9Gb2Mo43DPnLnFKzxhQGiaZy8TcFne2AEzCqxRdMerJMas8KYLDqbKCW6mDry8yZauTsBNJASYBaomhcUQrmF2",
  "key23": "zsKSiQM98hG3TzZgNTfQWDphxNh5ZRZkaZof7D5P4dE4vgLZK3wUQivr8uHnXxpCv5xb7WyzNPCBXwAJTBbBLg5",
  "key24": "5ss2Br4JhA4FfWRCHHuAmHMBaCG9Gt8yfKWigWNVP2G9NmYVWNpN72QR8FbHRzJyvu3wnxM8hHXKBoxks577mK5s",
  "key25": "5ZJ9D5SbBPFd2Qmi5KhXCaUrg1BKLZzVmynBNDRZgC74jaViXfia8aBGTAi7WbFC3NTk5X1RjebHoqLAwUvj1crE",
  "key26": "5M4UyHVToStLDd3eWZEG9HDhjCMQw7mRwfFbuzcmg38XJ4XMicTYTxvwbR9WHek4o36yCez17pg7VA9XbVF9iWjs",
  "key27": "4GfiG8gGE72Pjfd9wy1K77pt6nvdG4WzraVQwCU7iL8q5anDs92Fme73i1BZS9UBfYibD3s1GqnjpQfbLXsDhpnD",
  "key28": "5ejWsnKZ8mC6yWSaKCf6mh1A7dZDtEMBYyn6ATMPk1CXGLjbLhENqnSFRdxM18SKCarcVfv3AjxDFjDZVPZ8triJ",
  "key29": "4neNjToLvC2DL7iNX7bf6eN1Rp3J11qAMR33PjtH1WtsJCn2eSG6yY5FxRmndCw1LgMikuqrvexyatMWQyXrqeTx",
  "key30": "2dos81t2oqj7d8rC5RFw3dpbzXJCjuoVUpY1pYsWZZ6urQBHjzrAxcQHC5xCnYmpxAqeRhMPcP2vCt9TQvkmRozM",
  "key31": "2sh9Ed9UAazHsS3DwtUeT48Nn6KAqPeBE5WJXkAVsDA9P3Eu9GKnojAMyHtnzuSePYiSWugx4mKtKXCk7Koms4Li",
  "key32": "2cuz7BP3Beh52rK6Ga1iAjMXuSiXzJJWgDRDLkFKgcws62SWP2RArPM3DW7qYpicikKpLz9T9qpXcDunjURJEEMn"
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
