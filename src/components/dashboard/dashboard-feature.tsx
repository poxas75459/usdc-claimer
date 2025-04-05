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
    "3st52ujArjCKoyTUyMGtrfeBQm1XvHy9WBqfFXad1RSi7tepQyj39eWGSuSAkhS5GEUW3KBQEFzPqKUmtz2oB245"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZFWjqv1e8mdTJco2mGCfyU6qt9PMELDNNRjspEkgaLwNyD72xzy12AfWJQTF39Tzz3PXS9ajKZizHndSvn3tKqB",
  "key1": "48LsrkNmCrqdvZdqEoVLUGBRQu8L7nfdLUz8tmpFVcM5GXZUbhsWBzTrJWs5An1XJ21noEGjj5rBT7eyFoiTkndf",
  "key2": "5x1vWrf79nRE3Thxpbq5VAw3n47MMkkG9PyFepYpwUrFnLHxMeM7VE7jgi7u5betHD2JpVCoCiaCP9hoLi84FXwp",
  "key3": "5hd7ESDTDw83RSy3YUqNsNXFJzNZwgkshwxhR5Xe4FBP4YN12obJcxRvWxcr22qfdkj4dGXXFPWZhR4V6XQYEonT",
  "key4": "5DWnJDX7JEj7hbZnZ51hMcJTJAhZMNjwqYCYTD37ibNBNJjmYKUR2iPknsT3bFMan1oEQMxQWhK541srfVnC8ZJm",
  "key5": "VhrsdpSBV7u9ubkn8PqV12wnvjP17XFLyXzMgb6z2gdN9HcrUVTnzTQnMKbbGyzBTW274gAtE8pKEKCcEDfbi21",
  "key6": "4f5SFQMB2S5W1uz5nEUgmtPkzGSTY445c583ohMHsNizY9hTWVnTtpjBjWvpiePPkFeZGK4iCR6d2LCttzTZT5b2",
  "key7": "35qze8wfeYniVE1f88dRW3tXjQFhYvZ1Gbn81qfvQBgRokePpUcVkHXRsTqMFZrcN5PmvKYuheyjpE3dUPc97A7d",
  "key8": "2j24MosrgXKJeULsr8TLZHnSmDReq8iFLgvjQ55GBdJ9WQN8b43dGmjjai6gevA4q2EANdAVx5xP1vABFEYmLWRn",
  "key9": "3yqHN33Vyt9xwn92uq6EaV9q29ExCKzD2oJgDGPsDdCwhHgXJmgsZtaA5Gpw3v5gL7UxPnpMGKwnmJnNCFqevU6r",
  "key10": "3hJtjosHu7SKjyu7JH4AHinJTk765AQvXYxGXpwAPtbdhyQbQXEnUpoYwVkrhkmRKmPtQxhGhkS8GRPC8mcSeBPp",
  "key11": "53yEuH3CYWKyaCNWQZx7C9hy7RZdyTGMWXYuF9pKNJjuWGa1mfNd3pNoL2bo1Z8vgD4AYuwmcRGQ7CzW5mhgPK82",
  "key12": "2czguh2XwXXnhPHpocaRuEo6bKf5QmLdcsWSnyi5br315asRYVJGgkXo6YP6pWmH3tAkXv9kTTekdVammywCkRzb",
  "key13": "3oVyear97wbu33ZzKcokV4RRfvgioQV5Ns8MXfvPcFxRciAL3dSm24BCksKpf85pwkbFWdbAGWJjaKCBe3gBtWYF",
  "key14": "4gairLuj1RmDx81keqyzGJMAu2ueSNsgoLm7h25HVDQvxBUaTVc8iDkWC6Smn5qkSLtMiEa8jcQR2H3YP4H8n4h4",
  "key15": "HRENNvXu6JeNpXkDoTMePAdXS8WnBZpRRLt5fAGFEjcTzBcxmoRNKSeiXwxKfr7aCJo36595owuDodLX7LesHiW",
  "key16": "4JAswX7fprYQcvAwwdMoEGX86sTyRPu8qBFYh6Y2TCLknA1miwFcM8hs3Ea6PgCafPx7A3WkLqpRK1PEFk1wGwEG",
  "key17": "35ipN2M6duZywYaWy85rTaQ9rbmP67jk1kYCq9vZpEhJJgeYoLuMipNVMN6ubRFrKteSKTmNRRSKB8ur2mXykkDt",
  "key18": "wPcKsJxkdyXqGKCPirbpNmKM4XH64BTHWXEj8Yb33iGXDSx5yFXLvnquA2W7uaQSoK12S5DpzuCz5gQk9bpfZ5S",
  "key19": "iCiMRT7gqqM2CSUr9TgACfzLd2hfmUgC884dLLC837vA4HvvzkTHsxJyXkztA5MXB9S7T7CkrQSNfGXKfjrbQ9T",
  "key20": "2Svo4xxrSKRzCQrdBEnkeGb9qePH7RDjQFwELQ1my3g69yzstKqgyFFqwDB4xePDgSySEMMJHr7ZtX1Jkr6TRraZ",
  "key21": "4iN9QebzGThsm3Mik6RkhZ6N9TdTk53MGNy741gbnjfYdFvBD6KX4zpMjGAJEdC1pgHNQJQTpS44uA7NuNHpQnZF",
  "key22": "2t2TBETgd3qFBYwQVnWHVKgpekKJN29JHV5q6ksEukwExqgqbn6HXUcLYzwFXUPcxthqinMLVccXCmmiZ51vQgBN",
  "key23": "4pFrqiB2zk1juKySaM4y8TLCnSmkuQzN96UJcV7exDLzGPHX9i3SkesCM3decSCue2zvM4R1GSbSkyBXhEobayfQ",
  "key24": "3dFFBgSysLtLyzRAnHoUJUcon3LRihGXJVFqzpbHJuJYeP8n4MLWQew3kRNN8X7zzCCgXXJofMGsuia24HieHA8F",
  "key25": "C76kgGMubU7irFHfM17Pd6dESYxC5Gmnr8GSo3fNQN83GP2EyLjnHDyLZyiVAxpWFQH6aLKar9XRrnopChbMhgn",
  "key26": "441X1g5vcP4KRH51NBghZRz95bb7mPskM9rn8cVfcgGe3Uve2rfVrf9FrJap8zDgTcXSzmSqAjS8PsHgjo8mi6o9",
  "key27": "544TcBfindLBmZr8qk1buvMGtZGn9fmrVRACeMHLLmFauKvu1DemY7iMXPexUnufxviV4jEqjFmAG8wyN9vt3TJ",
  "key28": "5i4turq7BgW8ryB7LCGfNWRYo1MZdwev5evNg9o2SMzzqVBeV63X9RkaJQmHd7XJQFY88HC2qp5R7d6ApcAz47zn",
  "key29": "4z3V44T1Vcp8K9kQ4Zbfyg4Vk5DqQneSz6TBtQyK8Z1FVcVtiwfemPB72deXW7MQSxcawmDnxstvsSFy1bSYRsUZ",
  "key30": "andiJ1tfqChp4N9PWt3Bne3oLjBKoezDPRxHEVhXS9vZ8NGXoAiADiycjuz8fDfTPoyL7MJXbDGE9VWevXq68om",
  "key31": "2KLd78Umh1XuaXYSzprFGx4bxNs5Np63ZdTtKihHQh3ygLjg4t2J36NUXKfh8QhQxs3PQJC2C2UWD7qqYkvBhA8m",
  "key32": "CdiH4QpfgN9KHvrtcda6J1Q3zt6cj5Go9SyumPW6S3WcEXXMBUh7T2WWeDVLmGkarygmeAKjC1R6MzGXCKB7sLt",
  "key33": "3XhWV95VbzwtnBYgjuT2fWbaYTyBAhdT7yUCKJTLvzt2yqcwTLxYUZeY6pLBwdbtyKAGSDDryTUr1iLaorMVmrvX",
  "key34": "C47NGoCThxPX8K2pVe98HHhY2L9EUMHuCkyR4AJQfgGcd9brSAg8RFK2BXheZQ1Xu4KjnWQupVpZwjaPLJyk63v"
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
