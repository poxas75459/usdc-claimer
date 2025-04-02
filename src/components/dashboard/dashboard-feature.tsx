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
    "5Ad44XhekQBXhP1wGbeRanzXxRJJv5kNZp3UPRohFZaVZF5jJimjQ1QQVz6xzZjufZ5J6yR9RjfMWqc19tsB8Msi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qydBdYc9DWvR712HWsdikgB6SymNpxqLbZzNJjVLs64ueGwRaRiprMmcQjVWffnVuBPtW88RtuAdDgHBAKmZkb",
  "key1": "2NQdgQz31QeN2KUngw6e6PaALFoKYvjbvc12NPFGPnwfCKuC1LWKpxVwZjGiYg9WAYDrt4HkCdLeTjkjCjC7CvUD",
  "key2": "3EPrZyNj2z3h3YmSUmQx1znzmgDLFbNT8in2QiJ89axDC2pNFuWhGXn9gfKTA5abVXzpv4q1WeE6wwL86BTu1NA9",
  "key3": "29uUQaQGxnisGYQyoFcCMWGJY9287UQYxfRYS4oGJAULXN9hsqbkd7EAss4Pn646goAChk4STtmQWb41LiCpWSov",
  "key4": "FV5dDnT3CbgTz2VP82tKSaCEzW4TTSkckKnSbf6zJXXTvDYr3BSJtsuwZEnkUKH4ku5ME9J45bgvzpU55DstTiJ",
  "key5": "2pW6UeJve5n2f6gXV6xuFSS45CRWSo21Y5T6P2ra11hALgXjY7tvnzGrqUtzTihc6ndujNzBtDfeUiE1yYsUTtm7",
  "key6": "5Rdbh4YKxo3oxLwgVjEtf6JkC9eEAPC9TQNwWUBah7QerouczbYwXVj9eZQJ8CgXpgAMiTT4KYPkXzQy3aWqvcpi",
  "key7": "5McjebnhyDRHE1fEdp3S1eyXUsAN4hVpXDqG5AiWPQWyWbhsYe6p68UaY8BSsVkXBkC7P92nBhH6RA62r2WVWgB2",
  "key8": "4fDdLujqUNu5Ydsk6twi429AqpkrwLms5x68qkAAhxeExfiw43wc9ZyCN6HR2XQTypU8YCpKNDUouekpsWH6ExfJ",
  "key9": "5eeFLa4NsfhnLVVRiwTCdA151PfQiMBuNQgmnzWfh59CySUEz5sdvvWur2vHW6VG5QVcjxHjMB4axr9pETA4wwEc",
  "key10": "2PU81AFv9Lc7u5DPLUXJnf2VLXhXqJXVFeZbf89DzVmoUM7dRhMRH45Daq43VrPanoBy8UX4fKuUSKBzN1CRPjcu",
  "key11": "2id6ENNcevvosJHfCsvEH54acAoxZpxR5qqfeyY2wtFvc7p2zosrZpAHPExvPGjJp4eA2wj9GaWC8kaFxQ9NbLrr",
  "key12": "5vrYaG8emzqeXWKVf2c6qpvANNddQcTZo6jC1RyJ7HrT6XeFUNL2egsYjReESg5uXut4ZVyCP2qcuMTe2V2chw7e",
  "key13": "31UZtXLK4gThLBDey5mvRQPTmwTDdBu2uzx5onawrCZk9WnskThuHLCCWGGT3k6ycc7UrE6iwbhWzna1bd71wvyj",
  "key14": "XjXcDbKHza7m1sMZuWY5mE58akAP66xYsCGhDXbXVVY75hX5Bit7CzzQvFHAxCWWXsrM6Crt4PTkQkgPqbxuLKp",
  "key15": "2BSUQ7XipquQRNcFnhtogsRKG1KzovUa7Hbosrq2mUynPw488AJRQk4h5vQpBJJUnchdoKnNUaoU7ZeZSZ65RwFC",
  "key16": "3X7d8NEHVNLUbhN97ScA4ZATNDcWuEesc4KLEiJxabXPBHg7ZtFXCKMfeZD3Tymon5tRwP4HK4NggshhRbnS7r92",
  "key17": "5qBmC9JCFEs2QMALUGR5C2YyPA8hA4WVSjF7q8ML54APtb9qrBYXBZUj56WnDXWmNyPnHoLEF9oxkd1P76k69iuc",
  "key18": "2m5xJ16vStWzep2U2TVM1UgRt6Ak259v4QAeuBKTsVWnRbpWmAueJmWufgUiaR72WYxL8eoZaBT97BiJA8NZodw3",
  "key19": "NLPFRJe6FUSd6nwJxwT3YiDBLGfz3VMHjdNyYtpbpfeyR58Cz8L6qFoVehaRPynxj55XFd4zuRAg36pASqSNh12",
  "key20": "gp7eWUM474rau4Nnge6zpbc5vdDDmVU9N6NMXzZmSuBaDFUTvo6oPb7QTnyKjYHGkAxyhFLpCQbHGS8m1dZAZUD",
  "key21": "4aiGP4s6giQ6p6YZiSgETXHS89yZNKrTcAKDZSKtCK8rFQi6omG6zNvFPKjZNMZNXjJaiVJ3Zf4HVib7FiRv2Qkk",
  "key22": "4u8pUfiy9X1rH3NYhkHRfA246VreiN6YGaTp6PgxLUToV3tjzTFVtbfw9zFX5sXpLxrn46wSaCj9zuyJZzkGC8v5",
  "key23": "XNhjM5AfsXnJQEQp83xjqSLCHNioKWC5496ecniQEVDGpCLNUDStxLDxK29EFJMx3XkhoMihEXpcseJaX9WZ8z6",
  "key24": "52PNmfGzmyHxTTRwVrzvwQNgt5Bq5zVdDKmkzH4GfavQhsLBoQgH3ZarCoZkyzdGMUJvedQ7skE4RusJjuXmQrsq",
  "key25": "5YAqaDCLjbQSbh6rtnfkSemUthMjWPFbZdCYpjcHRWxbrJ4FdyDTu8tFLfWaoKKpEPXpgkzypaM7fHjHsABdL4k1",
  "key26": "5nnnoqHrHHFEhqXRLVHXfqUimNPRCbLJyE3LH8SGjyyGgcEUx1rhVuXDiEc6epwUXensusXJkSrRZzTenj1rUYma",
  "key27": "54UaXfJRo8ZruSzxYtriFotLf3ZjnVLfCf868tRTYVeGTbxcxh5BG3DKNUZEm1x1bqBYCQSpcAwUti1VVncZQzS4",
  "key28": "4X6NyhPG9Kmy5EhTGttTtjgQAWVnj7dQeKVp7w5pznCcCyTAvUcN1xwuQhZsb59NpCZRzn7x5CZv6xXFVKz6cf2N",
  "key29": "2aa38g8wUxma4gY1R6KxsViTEBJ8y5vKWQsXbaLtT3b8bJHVgH2X9U65KEkCS97XwbPvVv6UWXv8M2Kp2hsJW9Fq",
  "key30": "2TWM2uy4KTsiSxfeELBzDPM5TV3KZyS4Wu584uL6aSerjQuaRVz67GMPdjudgpegKa9CnrjsF65QrUemMfJ6cuia",
  "key31": "44RwWjeMp9K3Bbk1YHoNHpSPcEQhJZCzVDnKt3ZuryJ59gm1MVjBZYsq59DmHBxHadKHHAfi83ZnPK8dGKYCWEQh",
  "key32": "3pdfzC63znJdhX8oqYsxxGcoNHpbYcXGJJDdGQqsPBguMrVdaK84zmtzpXvKen6Q4xJgHjXZqjR6MZHULTFvhYEP",
  "key33": "5WN1HyVfr6oZ2qd44UXeoaVjkPc5nLKrVTsGVHL1WXVPHuS876YPCaNUqpp2Vwo3i3DKRs5X8syeGpABAYvFQzpp",
  "key34": "4AKwtXTXxHYL8Qu4WBBYfBa3qp879rosnzWweQwsB9UkXbqnHj59JTFCgzgmSo5E2MUHkkS2dYe4cqSoDYLPwqJk",
  "key35": "5BPYEZXZX3WhC5jFUhaZP3GndDjdnL7yNTn1wETossEtpSRaF9TJUuCddxVBKMivkjJxxHbr4xApJmNyMtqfoTDd",
  "key36": "eN7dgSggeDHvjeRhGvqutHPuCg6aSAqqHpv1mfWuGnGKbfX2DYdtcTC4p6UcZHzG7H6cuEXivBkTFKxVNbgADPS",
  "key37": "3WvggXC2Vj8EsJheEVc2pbbN7NsRhyDeabfaT8esGGVkHXwetpg7Ak3yoY4ZD14hDyN53ErX5MSLsYokjqRPt76q",
  "key38": "hUeV2QDfpF7b4Jq2QYjgHv3qkkoEcA8miipopTb59iHSspK6JzjYHixZ8fmwK8VAg6EqJKc85G82z2Z6kBJqfzf",
  "key39": "3qeTC85WybvLejaHFHbjtMNtY9CptC1FeWearYoQMvFPn9UtFCmPpaHZtHQzYhsT4YqsYEneCKaULCX6n7af3dTA",
  "key40": "5asw7MwseRk2cf2Q3b3cX6m85QE33RRnhAaKthFZMguko4wxHNqPtSZ52GwaVoYLR9xoyC5SsrvoFPXU42XRwN5q",
  "key41": "5P8n9EE46aVLJ2v4yyU3WeAxXzQSB6gtcF3kvMgNCPBjRZaS8LkEYKQTynEpRVM8YUNvqmZHG5FyGxjXFp9PyY2T"
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
