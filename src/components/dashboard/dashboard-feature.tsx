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
    "3XxqnPFQr66dWD1SJtNMFFetUR1LHXi56Rdjt2seAa2ejZei5dELzjdtEbwmT3r8kPqkwBDJ6Ux1v5NxMbK6inAs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SVnUQ8QGxCp3Fpypv7tKJ2rhDFHkrjPuRfE5ET8pJEZb5RxbN92QLabDESr21g8kmhLXGrF9eE66Sd8qaUyiZeZ",
  "key1": "4pWAAQjS3DiVJwXtk9ANG369GrQfhsKcqAH4Mp2SJsrbYsQNvqZeEuWpCcM63T1XpNm3RNPLSEL84qZF9dP6eVjy",
  "key2": "3bGrPhtdmgqaCm4mFT2LA5NWZATuojznC2N3bAk3BjPMB8VYMXegs3osHbXEKYVmokSV9bcokwWr3V8tNmCQN8f",
  "key3": "3oG4A2BsDxiXDRByFU6MEsM1JWeej1687TuUNyPkQmm37WyzdwFhXEQqtfCSiDk9jAPh9D9HNe65SBh6XrW4hKme",
  "key4": "62fMCFdW4ZSED33qWk7f9tSAfB4zoUBdSnbMHeMcVFPnZfbCLFvpgkAfrySAegx7fLKCjiaP58ZqvYMifYNNxRzS",
  "key5": "BC2bvGVkMawAx15x4SqrmRCFzHH6Wp85wTB9EFk7i9oxDbxyZcHdepgn9AHmatQ6aSzwZVQo4fvSvoMNVSkjfPG",
  "key6": "4xdhYoMfs2JfF8qjN3mJeFLM9xX8KYro5TmdGPEmEoVcRkK6gtcyjPHcbFQjQ6hbgxp6F8cujJ9HhpGzQWGNwRGy",
  "key7": "2sWRtcvCWr4Bz4wusTMeuFJFDq3CkLDNvWUF2Niw8feEZRLVxB2ZN6GMuHx5LfR4kAW5BceteBuzZPmpbgRcfeyE",
  "key8": "2H8Wj9j2ypmaXoJN1UZ3bSp7zivq3N9v5deyueCNQE69KdpfQg4fazoFG2mtX44JgXk2nhcve5UJfMZy1xHdTdbU",
  "key9": "5TxFBVnbwNVjxFDUk6BT4nepr3zehRKMcMk3qJaMC5R2hgAxSb3eJBYeLXhi1EVkjG9dQBqqaFkR8Z2ubjSgbsFG",
  "key10": "7iaMZPfUSC4R4mj46sVyXMA1YMfigvyZDMv3GBwUGJ9uWpnH3vgYgDeUpQDkqGhnmAnvibtpsjsRmFsYRqWzTDd",
  "key11": "3oXuVyAJvGuXa8h7EdcAzrNAiiqgSGtKYa1DW2foJfEgMFAwxX7CW63DZT7aaFd6MWtHNhe5h4R6JXD8fGqNFRZJ",
  "key12": "5FHkAgQ2AiC7Rh9V7PdmWqi5DkQX1C2utr4KvjGroZMLRhoa1JNwDHGNgr6BV2KSAsemZLzRkqbHnGq1JspAbEX",
  "key13": "56mkjLwuAapxfws76cWagHzRNqgvPk6RVJPz6djuww2gNGjbudpqfEyzF4iMzYPXfTWq3fzvd9yw2hSowE7BsFrG",
  "key14": "5ACgdrfH7qbAdp3FSrqRCoHQg27GfxMkx1VC5QB3BUYKiVRc135Hr7b7CFbcwU7mFieQJXWaaGTUTGNypfQSndzi",
  "key15": "7FxVSHztGAsZo8veEBJpfJehvbB3ymeePB8nFmszwtwFGqAk1Z2MgbiA2iMds3NCVKCH9R9w4T4GfpAv2S2CcaT",
  "key16": "4sk5cDZ49JXLn2sxfEC5RWvcBmUDmy299EBCBe5YDMBwStZU1bMUpVHNDFyMu2sGaXUTEZnC2x2LRvSVf3GsUcXW",
  "key17": "kbHRqfYKUDLWZFyg7DM9NUFSazvxGttcisbv3kW9Ab7jHRgE2unQZwn99EFRxWK5WYP6UANZxFKE8scDh3n5iz6",
  "key18": "5eADWR3ZWBQg9x8uyBNVaPrcVN6e45YFVBT1LJPQqi3zRQGQdJaqtmWonvw82Dzhh76MqYBTfmwDh55sSUXZ292w",
  "key19": "4dErHEqByuwpRpva5nyW3jxLFPbHoVnVEqG4XfCSW1iugaX418Rv3918yaHXV2jfwDH6SFUpmSCESfcwmkNL7o5J",
  "key20": "2DfhNnePrZHeUWBL3gN5tdC2yAubSbaEnJsbVfAs3NzqB2MNXhYu6QUFgwKwiCDmL5N19RMkMWJAatv6eH9rQSvi",
  "key21": "44hrNTWN7gdfY7mJVyKnLbZidJqgLhvSGAGRpEZhvcBw3u7xT1HWT3PL9s1GEcXJS1XoyEbRnpyou8YrzcQQTEqN",
  "key22": "3U2fSEQGrTPqMKvr5LdJcbzSgsaN15b8BmrYNzeZmtbqypL5oPPjPcHRbUs27tcmeMWxraRBKEfxvtKiPwGsCA31",
  "key23": "iRDEUcKNsxXjsT3No57VV2burgXhh9tJKn75uSYgPb5a4N2VQnYVF1DeykwJ6yo1GurVps3hwqYqLhwg26H668A",
  "key24": "4SQHVkHnhFxwCdL79VtAiezYDxHyy2ZdpJ47WRKBeGkTQqx8eZakVXnCxZ8gd1CTed9ov434chVN8ZMavppQvoTv",
  "key25": "2grkH85jDcsx6MQu8cC7myn4QxVGeb6ZwLzfgC24n8nQCpNAU1J8GHziLTES4bakTLFPq8PyJjX2SENqg8fMaZNW",
  "key26": "4CEb8T9WgiTLJv9znfPSf8bFQYrwXtm1RM8S85MiZLYdRna8zr6C2cRx6tdqps2e4yjA8zBr8u8md1NueeJKrDE9",
  "key27": "5FnUrkhDTq5VkJ1HXvRvEp7aY2b57ntjN5kDa6H43qcCeq162gq66Ur9XGiZZ2NG4eg1ep99PoywkWyFvf7Y2Pe2",
  "key28": "3GQ6BdbgTBmKFjoNbLao3BRZ69sDZoeHGiDKoSointVqW3rK3Bg9hT83tQ9nKDapxfLgfHAKwgNBNhva1AGBdRG1",
  "key29": "28uiDGKvHE1vH5p5s69ZrBWt2au9NwB6Twug42KbGMnUeyuBFMtT9kJuG9iYN9wUffxFYuvvdBhW2DRPs6x7gp3m",
  "key30": "a7t59DCiD6HeVxKWzS9Lo9CVqrUdYNDVgnzCtMNAbkFPqjYLSx13mgUwqhxZeMR5qrupx6rHeq97nsistWomWhT",
  "key31": "E2uKsR9tKNuazHWdnqNSYHW4ZdyHYT5fDC4mqW6VBA9B89NptuXiC6oCEw4vJh6tReAEkqgDcJG5gnLro8duC4G",
  "key32": "4NEYU1CsMXhz5KsXUggtuRLzcc67WFw9eSYr76AxtE52cS1qG5erq9cLNkdZwbZrEwS7tiqJLDBZVHRdEs6yfv8Q",
  "key33": "4W6n7nycmM7tRkNL3zUnnTkBznfRrFgM3rP1igdaz1yp6C2V9tQt3YTjGxSNZb2r9FSGu1CpDrzDfedtB4iHq8BD",
  "key34": "2yKxGSvhL6Cn1LU3CjAJSfNjN9Zsyavz6cFfArn4zfc49BwmdykqsQqHLhPkXwatk8NS795EL4u6NKrjHFeK4SvH",
  "key35": "24wZMQGnxYCeTryvLCf5JVyVU8a79EZ6YGWN1RJ6P2Hmjs2QeMFX3p3XFJzYyPuyc8rvzUP4yVEAZWcBQukxiUZh",
  "key36": "37F4KHcoaxGRq52kEMoQtrSa8VTs2nLhBb9VSGRX58jHAsr4qktJfKHksEgAGi6P9uqvYkXiaTPMFChWbevxv9Mp",
  "key37": "58NtpcfQJp7zQDkb1oi4H1TCFrmHB67X5dKECy2hA4gCR2kN3BXGE5YCurJwMfnqDD8gGaTnWxaC711e6oAUVCL5",
  "key38": "2eaCYMTDnmvftiFJjEsF2aWvBSC2TYFVnRkfmodNyHLpW8zgqZCcSpxKxvaG5P2HYQ12e1pxm3FpWJZyo2FUuaA2",
  "key39": "3sDyQaUjtHavrYiXuYZ7eQKb6WVSdrRs1FFozQ4KeGUCinL1E74Rb74dTA8SH8uQUxm1VVyskVBKxwnQ4AA1VQa6"
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
