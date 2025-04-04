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
    "4d1zQYihoYd4YFs65iLUpFdDbVLT3CwsD4RAobUgpp2NdyTdiBtx8wiNja5gee8QuQxCE7cFKg2BHwMUGJdwnrRs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "439ctD9WTZ7tUCbFXj4PkkBdvcVy17bCopB3S8YYFu8kLDQZqDDeFtoeCFf7hEMc4NfCxEFkgzYdCdCKnj2whTxS",
  "key1": "5mNtaE4BxDs3HKNJFohRSnHEkJFt8v2Upar44Ty2P9B3u4pntMveqKtuEmkFM4ifoLUS3YjxQifjVSRPmYdmKTfn",
  "key2": "75X2AQM159f6DH6GYrRzeojBJGmbcYGmdP2PGynBBgXL4jU5kEPWH2YwuZLZBJDSmVrsa5uHxtUjD3LaXFLAotx",
  "key3": "3t8L6myfuThnQJD4LRBEqfR4epu1mZwrTmjodSjEFFXe9Rz6D4wWpNCppdFyRbNYmWgerz8AX7vjVcdx1cd853RC",
  "key4": "4XEBkDyQVy2e3nTQhRFqL7cFvwS2BB5dHPZ1ZNhw9MmSDhiGdJGETTbpvjxA8uT4F9AMcpb51ejqA2RVzSozGYr4",
  "key5": "Wb8NJiPGsM1FAUf7hWPAgqnkR37FLKg1s3gQGC56zk98HAea7KzF5VuPHaGUZNnBnp2MEoyQ5UHFrj7Vi5LB2ru",
  "key6": "2YocngaiXtNgTmWfqeTptYD2Z32a9bRo2a29UVoAptUSMoTYoeWUBZHVhJSz2Xd2Fy6u5JGWNap1gVG5NK8V73Re",
  "key7": "AJekkgBTooPH2BXf2pdANkY63YS7uZJd8TF2dMHaArjiHemL1aG9QgxrDzsByGPuZQsF8i8WArurNqVYfwABsW7",
  "key8": "3aWgJErg5U1pJspQEVSrJ4Ncd8JtXpAV9e2H3w1c6zvfs1XKQpswpNzpWKwqujLF2uJW8qUjR1rC92N3yhmWuxj3",
  "key9": "2YqtADHnpqFG1e7xq4EY9RqM71NmxTsfmxF5SiUbB3e7WbzcWE86kcay2wJFsh1MkWsBkYj4ZqCmDocH2r8hy27u",
  "key10": "2JW1x7J6bhJumbTtZHXrGGxJ1ec9zG1QbC4WvgAXpbB33PB8PnqNm6BdYbs5wQtyyA2TcAkE7KUsKPwme6Dbsmxc",
  "key11": "3gSFG17xEf1SXTk32NW8EDNBWgvnNdRUyYWdFXMQ4Hududh1CskvmVP7qDK1KgCvTRhtuFhzGk5U7z2W3yp8xbdc",
  "key12": "37RMqXAuqcJpgiJffjhBdg6v3Jzsqn3BWXXunN2rY2GTq3fh8e3Jn97hu3FyYcUSjdQWcCzhD1CpDapnFFj534yp",
  "key13": "66fMPmVC5gkZtpHoba5rb6J15ScFPEBZ62RhwVasgrjxr9Ba2wJisxWfhHEoLF3PRBf8HoUmDH3ikjEd494f99zH",
  "key14": "5CXtscDSsQPrvgU6ttePogtyioiFmd4yQcMYL8LH9hKTWTcwKa2U3X2hz36589U95Jhzc5NeeSv5CGx2riya89CT",
  "key15": "yn7j6QHqmcvi2sT9ZvQDiNNgRaLS6pY3n429MDFyzwK5uGMa3gvMctXMn66kj2XDT1SauBgbpnpTucPvpwVJ63A",
  "key16": "38DdUtxmPYrZmd6NgUcQjVeXGrupLzunyV7CBKpMgauGA4EhPSfUVrJbcWnsMPFqrMbidaE3wdVshAw28YmRphNF",
  "key17": "MsmfFC62QzuxrJrcfbZuLqaL9M3x5bsPa1w1L19j2ydJJ2bojDkYGxLvnMiYgdxhxjjoBkB3Lagz68vTyiyhgpw",
  "key18": "3AL5pZ6XFiAxeojMxQmotFi23kRmzHH7sMmSoJineCscCNkknno7LAAs17HdvBB4QQpYmvTG8SXoDcsWdPAbHqJG",
  "key19": "3zYg9WAFHKSvHFgsC1gtewLBhwUkaKGL5GMpNtpEMKbo7jiyKiKiUEBrALFxHZSPhbvZZhBHqqLfHhEsA6AmCeBw",
  "key20": "4YrGk3DFyKnMu5bgcoxLbnhDgtnWdcuqDgqVt6iHDbsYokmhuDCPgtQRukrSCeuKDwMcpSfWq9dHpWQuPhZ9q8wX",
  "key21": "3YZgpQ3mUzevLXggjfi2whRJZGV54LsWsKLMTBG9Se2RkZqegAcpC9d2yWWiT2bMsPgzN6H7HDbYu1wBFDsxtNqW",
  "key22": "5WzNmtjbnmWPdKt4vmxHdL5c68DKu1h7Rsa6SRyhZDSrq3DgU1BFa1z1e7LkHzzF9A2Dsd6e33UgYYnrmtTMjSwJ",
  "key23": "4DvBHQrDbYGZqK47cdK14tHuffMY7YTs1hoaLtVj5V3AndA4tNtFikVAWpjRZovM3XwCygJbXXdrBnweutPUhPf5",
  "key24": "6vaEjPXE9hpRgqv8C5X8yA3QZ9afcbcZS6CbuH2wdz2t4AV7dTeD38uZcLMCH33s6bcvojKoNmzF8baCUkHhVtM",
  "key25": "38zevuCYYarBUFKRBBhWUV29j9wRu7cqeGcS49jTWsCpq4CZtJtCpGys8pTpDb9g9gVGfFc4S7Vk62qQkWQCBDNQ",
  "key26": "3X7XYV6yeNxCuFTZE22oDbhE5PWHHVA2sxneM2gbZ1e4A3aonM3tyLP8zj7SxihaXPRw2MCJ7nkj2vji5Za7k7Mz",
  "key27": "2sHv1WazKZR4Zk8K87KwxzaGrT41hs2dXVsPLPDvYVXkKEM9zwyRaaU2UavVsboBk9nfaYYocVkXnSMuLdPWNoeX",
  "key28": "48zRoq3csTuYL7Vs8dEnoVLyxCvNZ9eupLWGo45Ajnzk8ZMKvpsXhZPGdp3G29X3SebSP73o18E5QgThZA5S42U4",
  "key29": "2iv3ZgfcNgyHWtb2gXBmUapvuYLDvBrcZQQC4ViJU6zfy3ocyqWfXS5iBYcTmCZu9nnCTxFksjUWqNTj2ScEouxo",
  "key30": "4iqcLPZhyDRGyZ61GiMUoHtiaiqJvdtSb3EQmuMeMFj2Mjgni72kSqK3CKL5NVySo1dmddqqMmFe4XNFBPLcWVV4",
  "key31": "36nwqxUNvy6BEFaXztc27jwYC21wE3Zerv6GaTMPiwAWQj2E53HRWBfsiY8WvUAJPbkStSziCFXNF2H2AoDnosGU",
  "key32": "3tom2hhjwvnqz8eHNB35LByx7NY7bSVeo9Wd4h2xEUzJNU7Z99yneBjMAVnoRU242GuAtTGRMtM5wZ42KdM9awJK"
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
