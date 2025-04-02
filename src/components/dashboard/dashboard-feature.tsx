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
    "4kVY6PE5VD8RwgUkNeQXbuhfQuBjXJW1P2VxGkRGqvPSjA4Hxqd9waXtYTgvmcwphHNHoBHqhA62TTmkcdiGwCzq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39qeMwiFVcErEwR63AnW3cRJ7JeQTfQWmHKiFdSYMhCFow2kZBDysVGFG3rARq5TX5gLnLvajudUp5ZfPvqYcxQy",
  "key1": "4PnmhCVaK6ZuFcHdH9CPrG5HzZqUSD6VxMYUiFFhuks8CuTrhjFue3yAxS1VF9a4jHWwVs7E1tMpeAna1r9AcwoS",
  "key2": "3KYBiZ6XsfeXJXRJRFWJFyqJirY21hGzstU9dBzJr4GdpM9Sc7fESQeGjD5BMwrQd7vfti4N7GRidwSWHG13H4yv",
  "key3": "3M3t9hxtZMJHY8u1Dxcrp4bmSqs8cAf33cnzyEkrRdZiG2tqMuK7N5ikw7nrxNodVpq8TZ41huN7rfvLMsrCEJmD",
  "key4": "4LpDkLK6JxafnzDFuJ5YUrkR4aqw712VkMPthSF1vpkrdRC1kSwcYXgBRvPSpZkBG63UXXNTUCESzk3QxB85wfJp",
  "key5": "2Y6LCMTHBgZm3sT9zcDNcLjHwfr1j9GrzFHQJzzu7DbJ7f8bbKdcmQLhbhkaoibEFVvBY8Vg235w5pFsB4oFLBTM",
  "key6": "3Mi4FZvywEq7JCncg9E6c1izexqGcDf9Xv8dESswGdgoFnoPgC6K8RVoCBy5socCsL53jStiKmoYmy4vVSMQgMqR",
  "key7": "4WXCx18Cn6up9FGRPkjLxbbmGu3y25opwrTr6sGVZo7KxbQbMK8BSfWzcfFHDEMPhjugZ9nPoqFKi749cEXbScgH",
  "key8": "5qKjJwhaCV4Ve93LCrbxdRgewidNt7J69YPufQvcwrhfwP5mJfynJq5TWXtzLUWdh7XniekTowAzUUQhBmaVePrc",
  "key9": "4a3mBFhDmrkRPTutSZhknsjLP4bSC8ncJkzX5H5jJZ5UCqPgSrRDSmYvrKZyxrvaXEa8mqeqSTsJraaaPZVt6YrQ",
  "key10": "2az6SqehdoRpFLR4mFixN8t6aCUNTyRbjCeugV8qxaXVKxkimAzeW8LknZGzZHfvBjW77s44GjJc25QM3uqMua9x",
  "key11": "5MtTnbrRrxuHaG2yPmtVbWzuswP3TZvx3FBqpxt61yNxFvKfv1mFwvpsUsANaYem2hEYZ24Bn14cb4L6sfuSdyf6",
  "key12": "56RNjvRuigAs9kN6EA4gvwDFJFdqWZDkYVnordzb9rD4ThsREK1quG8W6kgNgFHgRSPpD3UHfzPRqJeZbXZVyGe9",
  "key13": "5FnaidyJ5iZwSFzmv8m6Cg97v4uEMAEJ5UnWj1dtRvUQDH4QPkrpYUYDErMqyqw2SeV4SYHmoGbzxSAKcr1LhddP",
  "key14": "3YYqKw12uuPEGvh5osH2iP3mDu5UTJoLwL2PEe9WMXnmVFZ9xYRkCktxNLMQ7aZnBM1yBgTaFpB2qeqNyNX4ZxH3",
  "key15": "3DkDBQ8tHc6C7pVjZUAx9RM3kVfoMV9zxWPu99nLgXyAKYfLPtD5PoUqGUPxhVg5e6ZkwVUWkeWdnaQmjqTYUixk",
  "key16": "gyreHKco7KQb7LSnskbUwYZ8GcsDEiNzf4EgVTrrYS5U32rPcHWGkAHUS6tFc3piMFhzZSDxa1EtwH1oUvGc3aW",
  "key17": "X5Soaif97iM5p7n4XPd9mPq8xerWNGH7mJY9ZV3WQfthrVNc8ETMf8nf2zfmbRPwuCesu1BByYSE7kVxEzU5RfP",
  "key18": "5YgrfTkuPu7NGDMDeERDijCVAzUkWo68ZUjUbYtAcyTtuB2o7NmVDNRHEMEYDsr6uBPp5fcYBJKRVDhNQEvE8Zju",
  "key19": "TeNqZGdTQFAmrAYDwRekDxxVoocArqtet3FQhMv53AXZdpjZamoqhcVxqmd5nJALRkZigVfBrGyjhULkMVVuVVp",
  "key20": "29cwp6QkgkeEm9jZza9zEE7bhc8BzgqQnCqcP1ppeqKbgLaBh5ppkzVFGYsSJQezchpuU9y1HChWKnx1YtTNgU1D",
  "key21": "3xydFGq9Fedqc9utXkbzbLBrgjPZnDrcR9Jy121Skqukruc5AefSsKxx3jCp4GNZH4YtzzFLTYNGLeKVDCGbvnBF",
  "key22": "5ucvmxEGj7wdSriBEuzgPHqUfzZixBs4zezKB5hWE9xPvag2SpbGeCXmtAMKrbeC9xHDFaNFPvPbU3DDXQ1CUYkm",
  "key23": "3snMxnZfJpcBdPBBeMXYXrr4YwhEbpemGStBvZkoNmNWLSfMHYZfDP9RHBAt22qKBXjByHJNvVpyJEmqPhnwVbbQ",
  "key24": "Q4ccE4REiTwJSRVN9jv6GyTHeEpGH5vwsadcoFg4kf8AoGvSbJxbV4wDMPBTAk8AqfWQoUis6zG5Ggt9TnEPVrL",
  "key25": "5Zeg396K4ik1GEF2uN29Gq7C5wHfesRnaBgC5LfnXnPMGjfzcqgXDM11ZRMvGzgMQCyBqQCZHscGehvoG6Fo8kLn",
  "key26": "4yTjFFKBUM6yseiodKMFzhEBZZEFqMzTt428LGxaRUgTmNRrjw1gSPGGrNT9WsSoE5oQ86YeccsNUBCZ41fLWz6v",
  "key27": "5i3onp6yKDvBZmwoYiyCom5XeCWq6rWxKxNVvsEb9fP7iRzAx4Uyv75PN4MWiYPqFfT2pvXt2iKHDn2AzaANccKQ",
  "key28": "5b9Xhp4pQPikQcHehwBixYMRNfs4pH2zgyMf8JJdTYBRuwDU79wbzdkWyYE3R4WmJd1jhnjqEj9hi2NTY5RFXDWT",
  "key29": "3F1M4NZFgnDrQnKLtuUpPgDTMr8PvXty9j2XZWoLaabcuPEW1yaCbkvAt9VmKyGHyTzwiKAPbY4jeoo1AMiMz7QE",
  "key30": "bXxma6cADzTYpVVJnbp7fLFdaUMUb9QojAeaE1V5VfKcYufRB46kpsYwSQG4rtNvo8rTCTfuDPZCXxNYE1hMQv3",
  "key31": "5vs6gNakZiSRgdqjW3z1NiongB2sEoFvGRntyKwH31jZMB7S6PAfCNm4dwMmJ71SR5pkE5qosEmkPzMUj5ncuoh1",
  "key32": "71yMcn7xHuJ6rRP1kk3DT7f7AMD1k7oHm7sKKykge2CBTtgoR47bSKbWpLnRzYqdMfHZTgKep7saMeAuvYgiXAh",
  "key33": "34w9bnE5MX975twp8grVjhJJAGbdTyAWoMXCwLh7Rs7kDqodopDQJL1srbC6Wg7gUjknd2MXEfkHUz9Lww51NaXq",
  "key34": "3Fa2AzLNUFctwCc26Z8MXsd6JZzKhMrQCtzQRA49ubGbnNTKPrKkyFhUMKuHpgYF5hQUh2yGJGEHzAbvJgoRJS2D",
  "key35": "38Q1KiKoybjnRuXuCDAxz2LBezz1dn8U2Kh8USb41rBQs2vhGkxctaUeNNrCBCDmvAtXGhjjFnH4rzoPS9z6byHr",
  "key36": "5ohYDr5TW1yi1W3bxFa64Ljw4ZUoWqRceuFfEzVkM7UPRR7gUQ6hEhxTs7uuLNwEnTs2Luf8SFQ1SxpfWh7EgPKp",
  "key37": "5FwenpAuo2tRmB3pUFDEPeguh62BUaMi1YxBmJrfcegb5ANDzBXhQEfD8L3iHLjZQBSTFYKJe5is8oHECoNi37N6",
  "key38": "3rfNsBje5MneuaB4La9CFMgww7GnATwkujAHUq5RR2gbhr6iDxLtXshXyDoRwk4Fk2EtTgAa9zyrQusivXnTYYi",
  "key39": "5NQHn9qTfnpk7djyokixnW69A2mGqJpiTekEHVe6gEr4aEjm2v3KLedmfNCMzsnfV26ZJEvUK3bDqBowncrLPv1a",
  "key40": "5ho7WDExQ2V5sAwTKnYGzjUCVkQbySmrhVaPseyq5uvAtoqaoxscbWcUC1VHKDj7qTThbTZ14yG6ByHPciKGXpBg",
  "key41": "65QFEsd5LTgFAxUds2wXGSZnRkJVmq3bZS6hTCdTTHG4s83JwKEhbBPjpmwTaupa51UiRfdk8fqXXsD8V3kh7eH8",
  "key42": "5tqQtHyGWdhVTczGKbZQ9fitAdUM1JAEqKjwJBDqVNMFYLMsev56rNbuiWi16a43i14Xwe19HfbpRH9UwNvj2ue3",
  "key43": "2sEeeeruMjYci32s7T28TCEfKqzp8cFA5U5M4bmZbjZ3A25jbYZbVev758rrnptG1DUNfNgXZ2GKRrwgMg7eS4QX"
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
