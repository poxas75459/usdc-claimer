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
    "5icWLo4a7n1KG9CDJVjffaXhyvRNmZ5ELRsq7fH1sidkDtxv2YRH44SzFJhGR3xN4iAGC21cEBB913W5EbHMGnf9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SAi8tFCmS2dtKYURYzriBRfrHkvYXasZ942sYPp5pxBgmbaJEtdzgMfJEPkzJcEarrZS3u5xP21LM1CYsdv9M47",
  "key1": "33pqkpDP1PUSJMb8dffLRbm6VVpsFcwyVSdw9rHxPkvHLouUMLh6EU4nti6wDRsRDKmFxGxJ2fFGZjZAt57zRtqL",
  "key2": "2wGfSL9NgD2A1owNHhFXAXUuBjXfsHmkAsh5Yuu1FZm2abnfdeRnGHGQf87k5EfXbMEgC7YpuE44C1v66nSemnc5",
  "key3": "3hsT7JonXo1haCChmjsTG5VgXTdd1ZagXvRoSy64ECkeM3dXjqGb3K3TNUWAcTxrkAjCpbw7iutxjXaFphSYNWEn",
  "key4": "2LKpRw5QgF2Tf3DSYY96Bt138FZNwZ6EQiJzvg1vFe13y363Cu2nAV1V6pTgNZxQ9cTfbCXywDmeeNWqtyuUfYn5",
  "key5": "R1Wsif4mnafrvAq8hMYYC3EykYrPWotCbjoogy9drj11DFYU4kbZpvWto97cegtU2XxeGx3ZkARTFzNuNribMm7",
  "key6": "hSCt1tvNEVDMPRTnbBWU3w5TEJ1k8vk8xGb3erfrWUJw8qXvEPG783PZsAm2QFYCDroQPsm9ri3mnByqewCA5vA",
  "key7": "8Gbo3pXn21wzu4wUXcLw4yJhp8WX5B59C4SuGpvZMDo2pErMvhjbckZfibCNwYhYcqJTZ8b5emc7mQDNb2YRmke",
  "key8": "59tB16fXZgPWs7x8jgTRotyvMzKDG83mExZVNmfcGftxEMEGLFxZFLm9zEXReDUzPc2jtaTMmGrzKiq21zf6PtFx",
  "key9": "4XBDYSzXMWLbiAgm6cZpTG6naopTdZdRnh8dQvZRZ3VsSRrpdod8b2EiwJ2oL21puwZm9ngSrj9PEUvZhp3nug5a",
  "key10": "xZkV3S6mdtm1yk61wNawqdLKc9jYqheqvp9FmLnStj3CPxgs9TZtJmoEY1BHqc9gzBTd5rtH9KnEnhjdC7SLTYw",
  "key11": "4hFj7kJXcxG5tRC1oqRnfZUj4BAaDLUgxsZK9zC96D3QSdcqFfyLMQqB3At7mqZjm551f42mTHtJmGFiEqmhUBoF",
  "key12": "5C9bCqdr8rM62o48iUA2cFLBhyrb4TmtTWZYz7NoJsj3bkMBiLNj2JZCW8mEGEpRjMHMGq7VK2tzc5ZMMMp45akS",
  "key13": "2QaZw4t4JGCyo4z8tZb3Lkz7gNsc2UzqnPaN9g2rfAg7szREbw7TQeB6usFRgy2bzUokAzkuFTevtsVr25Kjz97b",
  "key14": "5B36hYzqtkAJigJdZShh9rjdiJNzBAjSrZESwCqNjxxKc882xPiTBNdpWJg8aJXxNLcinLJMBXueeCftDPKob6z9",
  "key15": "3dAGz5qzozQxr3M4zrai4XLttq4Sym2EDJcDYkutqjoMKGXQCYxg8Szuarqg1sAHn2SqLsLFKLNXYxwzySTUVQHj",
  "key16": "38gNmuFhSCZ6x275ibRd6trQHVBwwKFufaQRRTUZgntKGktn296x8ioMgzgDofbusGtYGymqtLQ5V664nu7RyFtb",
  "key17": "4SCGG7r15XNaNvsTH1tj2Y64Eo3HS6WvPjWf23PmGUf6pNnq2YPVgs8wm3qtdhWk5DcpQbrLPPmRh2MygGqe49Nv",
  "key18": "5yGmorLKRsXMENYj8V9RdrqKoJ4isWufC2oWDEiHNvJxaGsjxJnVxSF3gnwjkVFx5hNxDzYPBZHS4oyr9vUSwFfk",
  "key19": "35PUrreGQrhBwHhzXFwiYxPuV44fXUyxsKYfXWyRBcPq1UmSjqQYquvfRRxFk66Xr7YKA7DbFo367uGRKRwNXbVN",
  "key20": "WCBASC9d7n33mgkpot9aZbhyKqaSaWz5SmCBPKme5NXNbcrNW5tnhdifhfBuH7hACkKz4orFDSwRey2P2gHEXtF",
  "key21": "2h1SNKUikVjH4UAR9TsekyMXzaGMh2C3MQp9eueiXGqxem92pnA7uS3ZmYWyN31pEb6gs5BZn5PguZhdqEcpJx6M",
  "key22": "53TYQ6k9E7kue7foY2JBhn1JRpur5AhC85GaiN8kFhpXvkeLetffsBK4yuzpoVtcCN4qM5LvcJGVKu4jar44JAL9",
  "key23": "3PpZRKyDcfwxBpcWUd1xB3XJf3mnKq6eWBN6faRnZDzcYjfU1NQXhVs33uPqJ8hfDhG5ekQtyUWUtwkRZi9d3wDQ",
  "key24": "y8KuuTqHpBjPixYjwxdpU9LFDVNx12k8LmfDaUHpqyDCyAofpj3roWxbtnmHfSn4bmc4XaoVdn3M6hPgbGzc1PB",
  "key25": "58LwWnmMfGaPVmjUWohwAGqQWfpmxcwCDX12yqKwG8tAfNYRUZUHNkUdMsGdHjjScsXF3EKbm2WCp67vaKDrMXsu",
  "key26": "3Tet8uXLsBNG3qrHbfpfN5NUwaV2UgfWP4iWpdZhDyqDHrxpYjWKkwwUzhy84cVdwBcQHoXw3RAg922ffq47ttA6",
  "key27": "48Sdiz48BVfG4oAZpaHsxxRjDKeFCpFrUvfqTr4jis7jrHhX3dA7XkkhY2BtArxceChhz6QRUcsSrAqw9v4ycqwo",
  "key28": "74vY63eeJW8HNbULpxCddSFYiG8HG6KZi9zhk1vDg2cu798vyU47Myq2m9TtAuVf4WzWBUoLQ8jE6bXxMcSpTSB",
  "key29": "21toLeqH5Ky5bAyACmz3vk8X3tbdV1H31QoknT4iAfHh2Dcp575MbyRxPJx3x52cKMrnuLkSkxvcEAsWZLgD7oj5",
  "key30": "q21sixtrJTkgtMRStsWY5oUadrwdboz7Cn64Fk9VSsDzykz5FSfwK5Ub8rkKdcEDFM766yV2brWqaDrpLZ9MTbj",
  "key31": "62uKLUEMXJYGoGAKLb4eb4LdaUnEcLbsRQdxifwcrv2XFHAJmJ26CS2NRCtKcv513VhwsJ2NFK7w7ueEVJxPc8DV",
  "key32": "4rDMKJC4Z5CFeXGcseDUciJNitYNWKUjoe3AVAbgpAEuBYPaNbvyzVYHVPwpMvnF6qAHGhjjfHWj498wDzasMRQ8",
  "key33": "4LbKgx4vsSsTVxAKp5VhXzQgSdrkNGyiA4dEUz2FC6E7KvCzQJkUjffhki5U9Yjv2UFaQd6fCEfgALabrXnf1bnP",
  "key34": "67R7aW6hvJS24U8DP1awgooGwTwDnsR56qW9C2uk9xARGhy8ckFL6AgrXamAPM1vMH4PgbtUFGzz3kNra25nVnvU",
  "key35": "3aTenGy2pQ1BWZj9hZrG7eoVgaJLxcpbo51yvoehjGZ4LcdRGoctA1CpN9TQqsgaY6aZJjrjw4v77qjkqkYUZBpQ",
  "key36": "2iERzSp4WeiVGgyV8cQgxVSxNE5AtFXsmf1zHgxYg2ixYaaUzRqcPJnDH7qbmjdy83P7JLqEmWgcZmahwyojJ7N1",
  "key37": "5asyfMM1xmEfv46HMuKowjivEwRNBihy6Z9vGf1j1gssvPnBvCcR4h9BpWdLk65ESnjz4AscgCMLqvfKJ6UPfLvF",
  "key38": "3afW26kkegPHTwX6cWJL3yALAho1vD6JYLRdmkaVPhqLXkuDBYQhF7mgGDECfMDjW2WbqP4jLkTma76PEw4QNfWH",
  "key39": "2a2LuH6d7ruX5rJjoH64rdFBFfk2phVdXMUGxjNhxC8bFaQa1Bgym1cb3MJPXQBnTLBNzUtz34E5T1YLNhhfYYLx",
  "key40": "54opsp1HLkNBnE94nc4rtAjPLdBDPiRfFxtLFSAx19ccJu78KUjwURuLF1Yr2icqb3NFYiUs8oX1C69aVF1CZYY2",
  "key41": "5bwuxtLRvVPuv4nmpYYXgHXo8SjD39UpTYwHbQmKeSfJZ42XVNihGi5EgL2apwNAkTmSFBSccwHF5jLvNvz3X66t",
  "key42": "UEkKFmS7T3iKmPoXoLLsRy4T3ZYZjAQEFcBTTVPMnnqY294LDJgjmtv36zyNnn7VzHVbWVvFBNvUyTSGaZerjDq",
  "key43": "2gwY8XYAPt6gkfG4gNkv1XXdirZtDT6VmETnDskE5b6UPMbPZvxUbJdYQK74wmx5Br1afDMyBxrLJFrZeZmvuMNJ",
  "key44": "2DWvNTQEjM4BPMFvmSEueMzRzSk9UzP5SHnQdC4i8eADRMdeBeYoVSQa2WJWyJqNf3HAh8kEqTDHSAbVn5Twq4Dt"
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
