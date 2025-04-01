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
    "T1YBSZ4hKdCSfSKwQfANejR7dUQvWprvbbPEMz5TsZvqtoATCntEtuuep2J7MVw996v8t4CGqbs9u2jxcLxgLdt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D9Nr3JSpqmhGtEvJcruJC1Wg6YUD9U5qexuZNVSYNqiujNMfHBtJ2Cw3HYhxxm227mcf3Dnyo7NoxRYVtW59uSF",
  "key1": "3SYdkUDuERb5kdbYPqxMKFDpTbesS2N1BKtqPeJ7srzb19RWHDK2iBkGpKDJaDH4Nzfwx6qjs9ZArZfVwkhAwcZd",
  "key2": "5gSGzP9oBzVVYshLiBwek16XqFXtDh3qdbDjU3D2gMEfpN9guEDs56V7pUH7NSXk14dVwVNfprPWns38JH8n4am9",
  "key3": "iVNAbDMmVTPvM28gxnpnSB8aCEteQmkS2jFDScaLyndfQY3PvhWCtgYUaqkUgr56nfzMUGsT3orZ4ZkoBtdKgm4",
  "key4": "5CjJQ8k65SbtDGWc4TC25Prj6C61jv3ZH9XMUTedtCm9x6cWTVCWKikMfNGgtxVa2G3UE3wp3Kjj7pgV1pFv396E",
  "key5": "2o5zQmHyDvJrBXS97AHfuLwxmTH27SnYguyDaxVoUtyHhwrQBFkXmtXsYDiArbG3BEPHKZFDN7YBvKcErA6EaqT8",
  "key6": "5CapbMPaqvJqC1HAf7BwHBHCuAVcXsRNoadqW4dCDDK6yKfUCiyh4GVAsrqWhW7GafqEK1HeUd7g5pBHF8pL5HfF",
  "key7": "2fumR4Dto61rbxvNuCjh1vneRSieWYcLywsYEgvdf5cMTsHF816ZDGaoNUg68tzggAWgzPwyFAmQfqL1sxpDD52X",
  "key8": "5AsLr3r9vgfZvbHkSFe8QV3tXfMEcUQek37r9g3H6ioJq6CXrrhJNp79ZDabWmJXY3UvaGPi5NsTuEizZpryEiic",
  "key9": "2EFYNbPcjnJ6ML1PYkXH4nfrFfFPRrydWK6YLYwnbHn4DFk2EjYivzaDqMA9UgJ7eNzR7myp4Jx48tu2Kheo1TrM",
  "key10": "YShqUMcVZ5AZfDEV3K1wF9byvqbPHH6G8oyRiR5gaVbVqn2FiTsefKNDFvpZXMqrhB9ZUfjsv6aBoBEq8Pc4FVU",
  "key11": "3aRuww46eBdydhsqRzpTe9r58T65F9kw3FRFUvf7UgjduBSvyn6BKzDeSbn5hxwMr49FBQk3jUw4B9DEQgBWwJx3",
  "key12": "31r2hDgMkxmpP6PYjkKei6VtnsqsEGTaqnnBG2JJRht4sxWDiKqv6U3ViDhhyNkdBpVzGz5v6qifeGHQC6V5ekxT",
  "key13": "5YHBGmf1sNrdGVmsEo5tkFiB9bYtJ4cGhc8S7FVianayaSEzvxxQphBcMkvKE8GNKUVpAXDfRzCknnHbNxqYskvf",
  "key14": "XGxzB6Nfg8rZxLtfRRPnmb6VuhP6uaRsboydfUoJpjKY5FcBkGkJN4nn7uuT2cugipeQVJuMmvn5gnTEA2VgstU",
  "key15": "3nqNumasgHQciE5ytCJEPW3DqsG7kv59kQPNCxa3mqwBdfUq8y2pewcc765Jr1vqdYXjVZvxkze9KLg6uP5yBhZM",
  "key16": "A7EarxjwStt6qc53PGkpDj174FBdgowTT2QctTir7csjWJBva8mv1U1SJrB5jkxqux2ELtFpqJo2N8wEKgmgnDh",
  "key17": "3LXVt1SqSyapxBTNzgUnGFC7A58guMvFXbfD6Ge7tru7CRihfNkENQ5vyaNuN36K9JwiF7xzhPqsqKY1uaDsZkcK",
  "key18": "3Ve7hY4TGFgNHCKdfUCzbP1Befok8xBVAasiwD2UNrrDvC3WXCaGCWBBmTSd3R7JutYDetjEqKL4vftJ3yw5bCq9",
  "key19": "4NJnKQtCiKUPidJBc8APA6ZhjRs6kkSLQfsMNHwVhd3bSf6Mpm3rB86wNCriyiMG6bcBVvG8zyM9o4psSrPD9cjD",
  "key20": "k2NgLxrMp1eRUuehCLppZx5JczDdRiwvLoukzQpyxjhpydEoHDJs4njECG9qeqS8nWoaMhdQ6aagtuP55QENAzi",
  "key21": "473KaeLVnRYcWMvQNfFtPfHzQPJcMV89H8C19ScGPxBAA9hhNQSrHad8gSAb77jcmX1F7JsAiRMewx4k7pRHA21B",
  "key22": "e8dry5jtzf6nx4nqNEzZY9xE2vDn1oazt1WEbGaJyiV4rYLxZmAY8c62ykHJct6W9sGXNaogENshHS4v6Gy3yNy",
  "key23": "BRjhpVSBSTwPpqCSov7J2bCXCeZrJfp1PSZfxY6JbVJczhTj8tJ93xcQgYC3eWJ51yPM7Uhb83T8ZLRqZhq4w5T",
  "key24": "BFmXqChpNt6VG6TWAaWzrhoyRwsimWyqKiAi8bVNKargED3UfUBQ2BnRHKauNfpStWcrmYuQVEM3wfKd4gfi4s2",
  "key25": "37AzfXgqDhdXNATnQUdjCCJL4qPEbXPG1akPtaSwabdKgbCXdTzVBp5HcpGno4h7FqQehYCUEoDf8GPxku1uC7ix",
  "key26": "4waG66Z2VCxvHX6fnF7PJR6kD1ZESNYcvGhYgBzZRztysjcsHLHkicv3vqj9neyXMxx3ajDGhW2TLezoWcnCC3W8",
  "key27": "5mv27oKF8SSMfrKMnP9D92sML8KSLmNpu76xQrUhwY42jLKWeEHCxrwGxw4rKUDE2kg99UWi7L7PzbK2ALU7yLZe",
  "key28": "336n9rEsJbKtxWaSAneCPxWzjEWfeU9VF6sueWBRoDcZhaNujhJQ4RArmzjwvEpUBCxZTDiXy5ciEqjw3GujFZwH",
  "key29": "f2dG95Q6LW4d9ixENXn8umwV1JbBre8hSaeLSXTtD9C4q33u9zJwDe3hdcsXaZWCc1vkKtZHiqNKjmwndjzvc7x",
  "key30": "nHtuFKAT2WPyVgn1CPajGuGgCXp6SDBPyYHUtTHLbAAz8wKUE9fe2enf3X77inDJS6Eyatut1iQcrdat6WT9Sad",
  "key31": "3DBMhuv3iFgkU4WXVbLodnFCpwKLQ77veH2Jbt9PKsNLfvo2B6GLyBxy2QeTXDZh5yjfvLwnJTpuD7FTPTcb8vSC",
  "key32": "zuLaJ7fkK5eiWJHo7s8fhxGc9bK6cXTokgsrubRKKDVP6FFRuBdN45JND1PK7MQ9D4ho5GSj1rT6VicSB7A3XQT"
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
