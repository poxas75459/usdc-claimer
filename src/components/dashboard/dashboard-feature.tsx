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
    "5aDtrvaExfBt3nPcnKoPiSPpmDctjDu6EnFXKzRzgYzh7Jt4suTSDj73ivaD44ATNMV2oP7E9o65CinVb9NimoYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h99vnb8tJ7idMkPJaNzVnBJyNB8NtvbhLu7tnbVvvBJJeF3CnpLz65YAkzocXorozg6dvETi4PLSR36MFNnZZzP",
  "key1": "3VN2S2QfNnEutQeyc9wifU4NgGaazspc9sG2fVQByJ6679sUWdCgu1chxR64FUDHJmwrvDpUhYi9TD8ebyMTaUog",
  "key2": "3wM7aA5iGhqZZuwYBoy12hDzmCXdNQbBCRcUT54w7BiTtSEjNu1ra14HxEMK113zgbVKueYAPTMRJQPUNhTAQdCE",
  "key3": "RYYBZRwLPyq83NdjCErr8T32Wj8r2NU3Y2gZuuRasCY2rrVSzen8aQ2SebukjDmCdCucxjWZMAaKVALunHEQAjm",
  "key4": "4rwyd8nDp4JsrwwEjVoZf51nrkaKT5fRbtxFDF8g9JiJz3A9gq39KmDeCx3Roxjn9o9muqmKsRKx66Abrjgivi5E",
  "key5": "ZAdUvRjH4VvDgUxGU5vnoSkNdY6VqEejmras2w2PD5Nt3MPRKTUhYgG8bHsCZ9K3UaykrKk5LDiPiL1jReGbBHm",
  "key6": "2a78ZWBzdWZgap5ngb6ekcTwNVo65YjzAxWbe2f8o2xaHJgVMkqkoLgjYuoqqBm9p6qbN19CPd4i4eEBywZEL7iN",
  "key7": "4e6eGZVCzB9H7e9EFTGhHXm1irEWfPAz4FFQZ9ksyQCvdUDyZm4ohsY7eQeVepBEpgszNtzxNprKnKKVLHSoboRp",
  "key8": "4BZThGBraNJx3GU8vgNPdEdxU6MVEDbPUAJ1gz6E5aRr3Czu5iFPiEbTDSx58uFtyCCCTMnr5Y9AJ6cPFTidxm3W",
  "key9": "f1P6zr9snSx3QjYcvvrbakH62NM4K1Mk4pernWez7cFPyEVxpNTjExkUHB7W5rr3pT84u8eEz3J2RcpAhbUPgrR",
  "key10": "3MQhWMdVaZNgJ8DD1rdgYG3dfvowxgNEentAivwE3NN641Nacojy79nqMgVUCiEWCE4XSD3aFpMG9o1z6dDgtFZ",
  "key11": "2QanyNtjWM2cwbES76cC2it8fKuA28syMaC6aDGGqPjsvGy7vaZMJnJbn6UE3kVZjuYHQZjJ4F4Ygv74zjTpabZ",
  "key12": "7Q7n1bDJvGTCoJ8MWktYtK4q4BxkF5ZgCu9L94hsQZ1WUXLpqnTEUFj273tV2xn6xauoetnqL5vptvRuG89UMyq",
  "key13": "5dk1sSdcYi3vHnMyG3UDQoGEVuchqpAQQ88RtgM92g6KXPTa2qK7bAhUL34kgxCN6hc9uU8aw3GG2ocMPowEQgCf",
  "key14": "2WVpq6pY6DWcX7c8xXg75nJ5HpRyM96aoxg6FNXS81X2yCMWSqXVy7mXnoHDTe1gUs3tzfAPoLLkEp8hHGZ29ELQ",
  "key15": "5qKKX6R23VYf9PqYhYrcbbAgoReFJbGXE2VqqaZ1iv7VLDjY5FVkPvaLSoXc7xdd4JxVgBBWGvextDFKG5N2DnYL",
  "key16": "4m58ZE419FBhcw8XrXD7c5BGShCCKQXuiRf6oTc2QTXNLd9jVs5LtQ5j6Zz26MACmpKQkBMq65YLmBnmUheEcb6G",
  "key17": "3pJWopZKWrhpHU2NzHQXKoZhFAxogxyoScB9VRgEyxfbainBPPYTH3wNRzVJKvHfS8h1JgYyB6r4Jh91ag7y65o4",
  "key18": "pS98ivG2uxN1fXN3b6bdyY1DUi8yEMUqQ3dthkRUs4iDQ3vdSqmA9njrB8VJMQo8RJ8rHUBCq6EtYB45YecgnK7",
  "key19": "2z8p4NZZ6D9w9gZ8P6faMuEk4XiRYEDoBP3reV8mSxuMd7N4p3BcZE5pTHA6QucjMwnpxwdKDbaTpMqgbyBHyhns",
  "key20": "5Z79NAHXVqo6SWL36tnSiEydH5ZawgCSkEL463r2QWkZsHDoPREPqVm4nsZVKE9n4tsmXZqMfdHZ4xLsfDwa9XBh",
  "key21": "ze523vbiCwry1obhCn2Y68FaPYvz11YmWU2XQMiWT1aeactfVeqSQvA4vdHxLyi5f5WZgPxzRUUJJb1X2QPo2FK",
  "key22": "5AFkMjAfkw9hEV6GbrZBKairqJdvBnaWPfmhQpgeJUY6JYW6XiUuodyoRMwQqSgrbwD5P3cUJHN1Sfr9SX6D4PEk",
  "key23": "3P9caEJpBXbxQ9J3YhDKpGL4WaK3FAVniNVpmRLJn6UtBcQbBLNvpYQsRfWgavXrpbQ2M7YXT5cLqHoAPuNN4MxF",
  "key24": "2XrBxeEKTnDhW5swx6CHcMyNZM7pxu3RJbhpLeFUv34Zu42RTJ492Pf3TAREmZmfejJfSmLxwnjCf2qomc3Henrv",
  "key25": "47NGC7Ztjr4hPLkWZ95qyrw54WFt5Cez4gXUDwf7uGGjDsbihBKUF1zMxpNatSg98sHK7MBmYGBbLyMcZDDcyXfz",
  "key26": "3d1U83gTdkrPqDpMMXTRVU68XDiNd31mpxFAfbZZpJzjKuLMQskkD2AKFRkNnAyd2vd3UvKr1BUu6aQ1sDuRFTSE",
  "key27": "ccUgyqq8LCpX4Fuqvp6TDV6EdgzomicCgBmkVhZK6fMwisN5ePR4xpnLK54Uxf6L6XqLaNRumCPzCpC32fdGWFb",
  "key28": "4hxd4nZYsd7gKN2HHoUenb5wVJ4ZHpMEDPX3qLAKzH6uaThVJenDwNywSHZ4ea6nVPdYaiwvG9RayczhQM1rvLzK",
  "key29": "2rkPjwkSVuTzFyLvwNptnzuVoSsNyGLpq1BPmm5KViJBftZi42G4oLv365sxZHouvPFhg32LarCqcKqkA6sLkVnu",
  "key30": "2YdPMve8skqZQxe2zA4YVaZ4dzHiV3o7WwLtu8KfPuuSMDouztPVTUKtf2ydRYvYhb73dqHgWD7VqacjvEKfyodK",
  "key31": "4dfGk3JFdsA1wb5mW4UyD8W2p5jkQbR5QdS3wr8e54vxGQCSxRM8qVCC8e5XpnTrWrRA2kAqBiz6GE1rGQBEaT2x",
  "key32": "5vHvqfHsmQgQiEPik5FgjNCtpMJn3F1JoXhCj5UAeUPiB3smELTa1WrKddP3gEw5StCFriYMHMixBX1XtfavfFjw",
  "key33": "3zPQcXwGVC8g7LJEvTPnJmZMySZqiYkxLXV6rwURothsoHHnFJK8Tr8NSWXpLwgCpM4jd8ZjkuWPBEK5jF2aGvYy",
  "key34": "4aZBVmU1XCRLXDrD4gaHhTSyn5xhwTj4X7psXCYAahcUEXH2NquRZ3MwSFoEV97MTncp6PeDggJe85wxU6fCeXcL"
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
