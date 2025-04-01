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
    "4DxxchDCYmLtv62oWq86dYJAeZNNNivqe4aLivPeEqUaP5irLMiTd18JkhbTQDsFdeFxiFKAtyTYpoRuhbBPB8ho"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oLCvg6HSMwVANAuV8W14Yy4EzZ2q9kvARtamCZR22D1sebTHHAZkopwTf2Y9h8LWgfEsfHXoqY4FhhpxqjC1hT6",
  "key1": "5gAmHzvHH1b6n4bVWHkVMiKdQV3iZMYQdSUyNzW7P8LqB8B18qeA8xptJzX53YW85J4Xrj6JSkHQA9Z448n8DCou",
  "key2": "2zNW5oMik9TgFFCgDH42okqhR3jA8sxZBv2zb59DCeGenLAmaVB7AZ5L9mNBVpktCeVUcJYKZ7gu6PYWxRrGzRqr",
  "key3": "2npK6R3joDiDe6JP1LsQQPRKAHobstNqFGsdqDTYEYjpFyXMY5VkKg63w7eVg6Xq5YHPUixg7SehgQ52BV9pXQKD",
  "key4": "4REa2A4Tybizmj8YrEM5L4zKea7D4oaCVMxCtL8ejDusKc8Gt4w55YHGKdmfeYRkpEt7QA5mGAD7knBCC4vifLCe",
  "key5": "34NUdcfuaqJdekz28djDRwELifKS9gjUZ9go7sYxtWPXEgVVMt1nVDCjH3C6QNuboKBXW4Rq7pJA7k2ZKXBv6c8J",
  "key6": "3Mv8TCYUEuwp1uMnvp6F1FxZBqnLv2tJqHqW8UpXrvk9FRcyUHPSpoqgkquCWTPzFUsLz7whDRxqXbUPE4jppZXk",
  "key7": "2xm4mHmw9zCTHr3ja951m4rXDnkPqrBANmYmm11NBE22T2AKYr2D9vvgX9fZJLgs2sLM3BBUeZ28JArGBFD67Lue",
  "key8": "2BFmGCZm1xv3QipUeyzLGJke9psBA4tJSY8fo5Z5RmocjAKHfHs237htu3JSJFu2mxxDkp6vuwvzZ1RG9BN4E6nw",
  "key9": "5G2Zao7HzU976Gv9qUZdp2p9tLgtQyWRMHbG2W6sgfwhRE4BhNNcdXJUy5GaoSXAM58cNjHFt9d7CdMYmRrsMWAk",
  "key10": "2BcfpUHRX3WFqVmU69zGf9wfRXziVnydSnoqb4JTX3a4cwHMxAwYbnurW3XK95JtqJXjEUWqcEaVnYQGMwsgoFBH",
  "key11": "35tbFihYHXsas3etVr8CMQRFg5rYfq7oGDR3uvVRpqVjxEXE2D2Zokmp1dsDn8maHMwiATjDQdtLU4LXPWxJH2v6",
  "key12": "qwd6ukdhYbCNfp9NnHQCtiYRJN5h481AK24G4BqByVGGHotxkeZaGxrcBR69pes49jbepbG88EFvJVpx1YTfRTP",
  "key13": "3P8tVJM2mKY3sNRejp7BsSR5XY3BAk48svQLhuffvXqGYJYtzQm1Rm8aZraP1oXd7mfcJCB5MhdTjtpRsQNMt67N",
  "key14": "5Khr2ZRPepejDLGkYw7yXhT32YazcJH1WKnQaSiKECDBo5Tx99YXK7jkA9dL5TXXvPXG124iY1eeCid9XfvqCRCQ",
  "key15": "5H4DmoWiL68B9Cb3jbRr2n2dffAdkPbqYgwaANmMKc7CWgCnSkRfgSZryWgpiAPeJdxRHqBNCujR5Ag8AtftB6zU",
  "key16": "67grYDGqDBNCCDfcNxUyGUqMhQdvdxs6o446SZQzxpfR9NcHZpBhod7jG7i7D1zvjJsUXsNSATqXE6jQLE7i1B6t",
  "key17": "tQHGyKvnPbZJtkjn5jjLUMtupJQ122dP7hr4tDGssfmvSc6NrnHjbpfeGwzPdPHaBuzGw6YEXNdZyMwsgfgF4oZ",
  "key18": "4pvgAAE2oq7bo4WzEyqcSBxdDL9ah7YnhJk9BdnjLcnYHGyQiy7wWXTDL69yTuwUaGyjhxuTmWU68qZ8UHptX3DN",
  "key19": "2D5q1APhma7rrTuXcddNG7DE69rpUDA2r9ruW6TByZGG6VSJ423ZkNf3BCCr2HrkrrVkkvdeMs3X59T1F7chP7h",
  "key20": "5geD9WHsLaZwx6MCLe5GhUdWHBMjdoAfXXcsL2MLRUa4go3AVjNzsNzpUBAvoauw6tMDEcwBDP1irKZMTfjjDA4w",
  "key21": "2MeM57h3ecYxKR9ibgfZAHEWsXwddrb6A8uJh3U4qa9RyRVmqcAfbtRjSwM625RPF4TyRkMNRmdyyLhTmUnRyAsy",
  "key22": "3Vw4esqYmFwJLfGjypnTXtMoVj4ZT6kRpzHgXZdwaCZVNmcwQ2gsHossyUp4PBB9yaYh73AoH7z3gB7S6LzHkWdZ",
  "key23": "67QdhVhRNnfrB8mnx3x58dxzwxssu7yLfs5QkCTXjG9ZES5SWTXY6Jr4jPpi9FELboebbDQZ36zdTAD66SxBJWK1",
  "key24": "3YES5epzhi7h9k2HixnE6GGHsKucJ7h4pg2J9uD53iLdHiRExGYXVeafGAg9LnpNTuZ6ENMJ7MjeJA5XV73zss6P",
  "key25": "595yCUmuJmr6m9do2W6WNcDxqn44V3GWBS9bA7da5Wp1CDBT3TZ1umQinbNwtsyMefdScRcfxQgiAEoGKddJZT4y",
  "key26": "Qzj5qcNxaSXcGqDQKhMkriMiDzDJxVnhFkefRpAe3BP8Kew65NDJEFrCaCREgSDha7meRCMiYLyVw3EGWMPVCYK",
  "key27": "2szEsR1Jf8CxQGJu6QmugZHMuXdqAdaPBE3qs53xgQD1c2QanAVpaG2BVCyPYu2eM4cYTji8rwuD1P5mjXgfSJ3W",
  "key28": "5hEMAirMFHZkKydqBNSMXMWeCaCVwE9m2uwXxu1LKX5iDmbn5yi4ziU9347mmCHSHFMSFJkvqR4dTa6CWZHEzhJj",
  "key29": "2AZ46j6TzMHCFH3kSS2514DUurDiSzELEAWxmSiYdzJUc6EuPRt3DoaafV9BihtemaNgnHMVYgk5t1ht5DqkMtBX"
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
