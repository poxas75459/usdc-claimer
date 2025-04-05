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
    "3mBpWwsprbt2P5zfoCLLcRYKymSE9XDbWT4EJ3wReNZBgKa45uev2wZ67M388q9NvMH5epvUuPX6Ai7KfmVEp3ax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22tf6PnR28HvLNx6tnjVHsWZLw7VG1Bn3QdGTntbCcLHph3zEFrrHu21T5cFKf6zjxkFNpzA8eDGqABJDjvXiAnZ",
  "key1": "4h2WKbcwoFAHaVfVkmi1xTv4fUc9yNUq25Uk1cUL2VDcNZxRaGHvPvNxH82pLFv3dbGjR5eusVVv7EpMiSrR898E",
  "key2": "2XFM1AdGKhVP4VdG8EnxkdjXmUSn7b8KPqwo1wHDzSznWAptvsrgjEjurKaMGmjDwvqXbkxifQW57YrLCHK3HCk6",
  "key3": "3UARS6B192KJj1XA1WvZv4gL1k1N6Thhof1Ry3VbUZJt8eYCmJoAa67A8Cc8QzCMMwB4N2swULKeMySskwHiPfVP",
  "key4": "UpBiq35rx9Nh8gSw9nmtDwbWTPzcnxqbq6JjphgD6QA8X6pJ6M4K5K6bSM4WWcfVCTdFjADxotQ1JFR6HfyUofE",
  "key5": "2XkrwmAGasCHk98wY7rGqqxoWPvhARkfdXpYsP4n9jR8cVDwqme84v4vw5FU9iyRsMTUdUD7M1fKo459Aut5ugHp",
  "key6": "4ywLybp5U1sbZqpfyZjQfFNnnVZ7ZsfiigbEyAvmyA7M5nVEhMYkbxawtgrs8e7BitkUpTHWW5Kt4LQghjcoGN1i",
  "key7": "5xuXVhE691BMFEp8uVGULr1Kp9FDUTKyp5ckHQ2HRQZUAEqXFHcDtk951uKuBqkwcp4K32C8VzbjWpkAYpYjENyE",
  "key8": "2Stu8HBe8q5hbgPKAPxzWJK6fYrd2KmXMbYzG5Rn2jSvHvVR3fnGHNtpY5TbCPkeF7f7QnF6jXv6KJwkE7M3sfVT",
  "key9": "2uwAx5z8U1BymGHsshRggC5V39gAphyWJxgnMXdHf79xUL1WwwNrvtPywp18jqb4uWZjH9MKfw6bzVfwzLDNNyjy",
  "key10": "GuNj2Fu8tZewkhEBaNWUMQm2Tz6dXkMNbGEgmgax5voyZ8gzusf1DKKs4xmdMXVh4CysTV9t7VmhgXbSAWcmbPL",
  "key11": "5ufPWDCqUWqsz5MWrvA4T8kBySNXz9fW49MLEJW8neDJ3tRvuNrNhbZQHtRyUM8Aed5PF7sP7W56VeotVspGyQiy",
  "key12": "5ipXWZesSQWYL847p7b3dK8v4mtz4G9RihmUausmuCRcrG1hxAzNmyjKk6U5rmDWWXDw63zHAd3YMA9XWPs4NVt1",
  "key13": "4tyX5z69ZfUtCsuKGnqHVKDHUvWNG2L8HzAQ5VTDYF4JhU6Dvh1SAWkc5Sh9Tef84kCXWnRASjMF4CiN8DdRvDeX",
  "key14": "5FzNV4dEjvGDv5Mo9T1pXDuAMFGQmtMh8yi8My5CqThkFv5XGJrntwCbTrQBiACqrpLpqZCjC5Z1fjNdtq4KGuuc",
  "key15": "42fenbR7sphXJ3UAUx4bvNFjVQ3tEQoy93oq33AiHVsCTeQmCkmUK2rhrE2pgbJPzBHCAAx3ZR65KctuBGzcLXdF",
  "key16": "3ma1XBSxDSvpcmqNwHJJa83HkBLsFmf3wSs9UtbB1pmpZmgxc9TFG13VfnV7qr9k6V1AiC51BCZ9sbde87E3uD7e",
  "key17": "3ARDPtBAe5rbLFmTTqEiahyV4UucsM1aNqqH83mSWauHTWC93GTj9gxWGfFsGgYASqjNUP8VXa3BVZ5mYNnLgaQh",
  "key18": "3z4XwvYQkG3i2dNT5SvfMyw53TdUu32Ja32VrdBzzJrhdCCmMydGNFENuwJG69mt99DgyfMqR4T8DUwhH9XkYkBm",
  "key19": "4g8por8HD1t9RMbMRhyi6v3xRFBYxUiEHN79Mnd2SVSDu1BhdqgLyesept5tsFWh2c4QLbM9yA4qde12bTDdQ6Mw",
  "key20": "2xWWF1ww3upCfn5hUgwwMbKYr268f8E3K5Uaify9U9b4JBJZN2hVpdT75UEJ4KHpHSk5is89VhYDiMrhPcZzejAh",
  "key21": "2MjhPkPEAA1rUEhYCeQLHmmBwX9E5siqxBaf2FZMeyWW7VDiintadskosPJekYswngYDVCheAWwkrpJe6LXCPhCJ",
  "key22": "4AKasHdEyGJJBizrbULWbdVEbGGXqdnmhUWbXkFmnfkK41Zbk8WcHUAHemg6rowD6RxegSftwMeHMobq9k3PMQ6a",
  "key23": "49mGhQt3WXKtgGqHGMBKr4RMbyPwxoCJ11pLNpbmnbBuBduTfww7yjvv5Kzn4UTbvGeCM3xPeMixniZKRnwkAprG",
  "key24": "3mhNBAxwWk7T4GJcuNUQcusvmdb2MY2YXrMCsvecVfzsd4w9i2GR8JsuaUKER86r4LHMm7jc5aqAMWWTPw4fXST9",
  "key25": "KbeghcLm8Q7oeThJWARJ9qYHHRvm6JYnhi67m2NAiugwaUvi4AcofB6mminrvPUYtZ1QPxZD3AT9W7EkmHmCSXD",
  "key26": "5KQVKYxFYxuKhAgvs1rfYmbRiM5hBaH8YqQ1oX8fNLj9hXHDZ47d7jYoLvG8A89jzmCU5L1PZVeJfwJSxyXMVesi",
  "key27": "5Ha9u5jgR1wFpjgv6MbemDKNTH5jym4bawuHr8MXFEsCTa54jBF1yQoAFRyo6PHmxNsrotuCafToGw64KZ34PXAR",
  "key28": "4JSF661KcgZeyYkBYeL2yY2wk7LHAGiWeAUWdoUPitadPojg1aXdD4PWiqPoME5bqfiptHwitwxmwxbwB617q5qZ"
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
