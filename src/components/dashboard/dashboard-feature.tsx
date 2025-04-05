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
    "3R1KVd8MaepqsTyRcZR3mPQ2QuBjkJZv4uKu3aYngQUWxGDHRrPK1wM9q85bG5K5tcbPuMDizHY7Gwwdpc3pjC2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3575MSFUetkJxPfQ4DojpeBzNNrdDnf28UQCDqhYD13MX2K9d9g6enXY854rmMsjduDSaTe7tJtNiUHEogpaydmS",
  "key1": "2gXUhBEewEycjXShDn5PPwFJHbza9iDTAZDSCnbVyMQZUk2HeEzwVftj3Bj3wq24bHvqu37VLhBphPktZsCYNa4K",
  "key2": "5XWRZr9ezN8hMjgc7mG2AHzhzhK2uhC6qHjR5edDZP6TrqPVzd5NEuSJm3p2tPBdm6JSMsKxQQyFAFCRmqv88Nve",
  "key3": "fzqpCiKgpztq1JbvQD5CiVNwS4yi8Lz8qtsn1ae1TZHocxhJdejoXY2ptD3Mej4DuLmza2Qw9ffKxNHTT1LLN7z",
  "key4": "3nJpRje3abYEfvMj6pMJAUhgZeHVWTTscPnyRNogphDmXSBLShQZoq59wHsyaDpHfsajmY34cDyLZfZLcvDpNNyz",
  "key5": "3dRGtizUo54KvjvKnuyobUUKqu2vvVopfsrqh9hyaH7RStmtkf5mfMyWFkPc6Eqy4c55X7LTtXWgvR7tEgfg4DGc",
  "key6": "5w3RoJVY5uhCFM5Q9Wmj2Ujc9UmXy585sVzx4cfmdfT3UQd491jDeUwJSVaRaiwzatzcwixHYu7ABRmepeZCE6JU",
  "key7": "5jHqKwHkamnMsdqARd5A4b5rzVmvTYjuxdWyd4pXqwWFEGRGBeSwWMj94QJN3yHFJGJHRfokprRFZqqY9KHErQS8",
  "key8": "3iAGkutXided4V35N2wsnBhrUjNKymfs5v9uY3CoNYTtu5YxWVuud7Lw98BxMP7RoE8WqTURRvZdSzTuNy26GtVe",
  "key9": "3PvuiUCbUgrG7R2GXsUTXiRDPTgUDxMEz9aGcjhs41cr2Y1sDkxKb9VTbtsn1BkYFeZVgES5KD1gkHS78rsiHYwy",
  "key10": "2MfGSHFbcpjPdGWK5XtWUYxqb6ymHXXTymNMLGYWiPiwbkjpQ51S2faMchuoz3rGrLa2gu7azHvcxz8yACTywRGR",
  "key11": "4FnfFFkttsZkRf9NfzX6bckXfHvAQboDa6iX32811JowGQwwR1G9T4z7teea9hVa1UhVpgNzkSCCKkYHGdBTnnjK",
  "key12": "NrgN2itrEnjcTheH9XmHEoGotH4QSSDutmHYAMtBM6o95jf4DyHdD293s5eBFNYb5pd3h3TbDodthgUJ5aUtPcX",
  "key13": "4qnsT3ijsMc5YaF4Lj449UWLWsmqcyzqXLxX5uPTLWEEZcTRQRbuiBuyJSzmMpYxFSc15f8qofcVHXogbFwPz2i7",
  "key14": "5eV9bJFXseeizm4mfduEfAPxAVe3ZE3tZco5zB7WuhNX2wwSPtMR1vyijUy1kM9vg1wTkhMgMiucLEQCqjFW5Ns3",
  "key15": "44tC481Ce8bjTG9QAnEXtyJGsFP9Qj9BJS3vbVPpXoYnCKvUizMRu9C7v3fqdv3RmoycD4Ubo1WurWoGrxveCtyx",
  "key16": "2gnwwXS5t8AW6UF8gQRmQJ3b2GE3trKc4HQWXPJ1fNWUt4hGpPJm7vBjTY17UYDkMhbb8utJnjmueP1kZPFBofag",
  "key17": "2C8G8oSp9UKVu3HwKvgZuUQYhbQdcNyc97gGu6YfD5Qpbbpo6QfvWFCAjSDNSaaWzJpV4Zp27McN6kN6P4LDJtmu",
  "key18": "4tPHNo247bG975NzTmYJv2brhfSEj7okTxWvZbRBCniVtotyNeiLf2qzTXTsuq196S5VvE4TM4WX8wvsEtzzi2Sb",
  "key19": "4H8ayn8dt4CMD9wBoPmnLMUKhWgm2bVUcyA28wbyTom5VLgKhRkAeq5zwb3wmt95XC6Ts4UsNpQftWftzcMkLxn2",
  "key20": "2jwG4V8VUK2VMbNHzpbu2qUY4tc22uCSnSu2W5ScQmy3yUQJsnwNxXjRJzZsQ5drs9CJMuxecfmoJEuMGxFSYnMH",
  "key21": "aqh7iaYuwjPJCC8JaCViyHApguZpJCD6CfFigtUcgHnaVKSn9d6XQLSdu1Dj68fr9TxaiSdL3Mbt2nhhfWMgVej",
  "key22": "3fTcV1zUe8mbnRcAEht2pXYTruT1AQ2zfgFyKrupgBotbzqJ8RgSDWHYVt8s5ZEYJMRH3yjGyV1XGmYKPLsTY23r",
  "key23": "7QntiRGZvt9m9CV9FDK5V32UZmNeUMqEaZ822YYt3Es7Vqw5bFZhFHG9J4A6bZT8UEZatoU5BNNkw8L9376c4rT",
  "key24": "2eXrcNiXPrgYmVEL9BDESxv4nesGddmygG15Uaie4RkmimFQJMNMv9jFRji4jcoZvWFLDt55M2xvrq6GzQ7k3Ge5",
  "key25": "BxWtCjr9kvpb3rHUyaCVtrp7LDaosWSsRaQ29ybE3eEC8y8NuPQuRrY9EgETdq4KHtZ4B6zdFQUjF4wYMuib3WC",
  "key26": "W7xqgiPkLRh3RK3a7Wvbd7HkC4rXHnjzRPQvRwPjEXZyzbfeKGU2EnfYcF6bFwrYNUUvK2sqJUxtn45KHgWd986",
  "key27": "dsSUWCX37m559GuztafGHRWkDJToFE9NcBfpEu2N2b4fGAWeTrt45kYuuZfFJFyr2SWcq47diaMiYNTttyWpg7y",
  "key28": "2kzH3fytfxWiZXcgvuUxB86xfvpbcZQ93isX4GKsLc4hfaZceEZafdZQYf4s5Sbv5Fk5sb7os1Yu3T1wzs2RCxay",
  "key29": "5bUtCHhdM7LYbSgNGh2CLgvaNdisBx9fK8JwkMCwW4XatdugAA3oNL9S7HFzBWmvXcb2w2BYPMreytj5JhgJUSJ6",
  "key30": "2zBFW166JkXwvPjReTR6uU89M7s7ZXECRVpfWc3tzAsmQ8PnFe3DNxRq4y2uzbGVMbVkzWA3y264R95JhnB6CZJj",
  "key31": "MZV9SwTgpjJ7R8hz5Pc184oeaa726EEQsvWSqxevjuiDGV92rP394aAFAxzQ6bePDMEkEfy6yfnEpzYt2A5yYHT",
  "key32": "4hCS24xyV7XZuQBcTk7H6B1r6bTtkgrstuasBNfqyJdPVq7Cr1bxrNZGHn69KM6DATL9HiSf1QpKaTYxftznLLb8",
  "key33": "317SMV5GKadVLTwRJh1iF3kmrecMibEUS1BZsHwMu1i2UDsp1AtCt9ZtbWj13Dewq8Fpq9yT4ngfiyusqvaRfN6p",
  "key34": "4Xd91mUghMnGPJeYGujdresDvcpp18PnGE4wGSgQQBcMwsfouAC3Mtz192t91F2wfmnVZHFEU3uX66KdFXqfzLTF",
  "key35": "3PfwwRR6hc25fTnYf7Mmo3SvmrDqQqcoFotAKD6GW5o8GVnYWDSocLAPCF9pXeJUzL5zPmdhLop4j6MW3TJ2V9Jb",
  "key36": "3SCeb134iGMPX156bgditNLHe6QQUK6ViZmsMLk6NgrVU942vzpavKymQjAxZvvaNozymFkJmYNb9aSxB47vQv5Y",
  "key37": "aA3uCV86cPjSV3icXb2oHAy91v1smpr5dmW5516xvX8urTAo6xBEJ5wuG2DG2MNXhdMaPegXRWJpdVmpwzyncAL",
  "key38": "3i8dmB5kjr3k6ysWpTYsymTajLtVViNdCLDmSpzoqeXbXWPFsNq5B4aQgKM2M9Vtf3HKgjCMxkh3KBpdmqyiQJge",
  "key39": "3s5YAReuj1B7KJFtDo3jtB9iCUDh4riXrbFc7oZHVG1pksAym9Lp3FC2ke7rcrcQnygMnPLiSNLqGWWQnyzDLAG7",
  "key40": "29RgYKEHF9qkKB9cUtoGc57y7T1EXiSTrzUWviAWC6Xsqm5vBaV9rNqv7hapvVvXL62rarafMN4b67tYejT8Ffnu",
  "key41": "2kMRpoMtafRxidGHvAZd7ZYFcEkuvJuCwsWbZYzH847SQCTn23cYWqn94VsT5TT1ZLDHdqWermVDLpSxTbSHwE9M",
  "key42": "3Q8LKdysZtPKocFBUEi82YdTmKBhMeoebsJjmCynz1uR5quUmgzijtxujQWKooybpBh18kkkmVZkeGw6wgAdouot",
  "key43": "2umDWnYKudJN9dbdTZGDMoXaRZ9DA6zhyTZjc3WK7dWKPC9PJFy7PUFoN8VhkQsgicpZ1F2v5jZEMAdqDtXtJ91t",
  "key44": "2Mm1HNsBCE1uBJFopjKsF8Hiovpd3b8PjDSuMS2Z5Q2TZJdAgEMsbY9N6Yfp8ZVztwcRSrWoPSY172D5NLSxdPmt",
  "key45": "3UPQWXsX82SEyM5SDHQHJ9bD6bmxjfTyNCQwBH6RiFNpuHxRVRHi44wzzNvDcmpKXNG5zokc8hwwjjdqh26L4ptE",
  "key46": "3VLRB9ccG9qcLPknbhGo3hoTcckn3ATHWKy8aocDFP7Mfe5c12gdqG8ceRp1paPHXsuRy6ph85RNwg7scYND8z6h",
  "key47": "5smvU5nHYZJcHcjuKPvRejKzQxBe21LWrvWF7uk41YhMRupcDk6aByZhMWSpuh1PGH9G7idzBtzDs9xJBKTs7dEG",
  "key48": "354jyQnsS8sAdrDgqypiSsdp8UU2XoyruW5bw2f4kWU3UnkV3rcYjsHyyznbHtkFUV83yJAn3xR3MpHvch8oAphq"
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
