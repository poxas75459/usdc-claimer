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
    "2mhzESoMMQGBBMTUC6bnRbcwz61aVwBkyZeVNW9exTRPQquuVy3ocpZrxtSQAzAjVvbyLcqM5HWHB2mH9AfwsnUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e9fbFEpdkpKCYfXFNhmPKK3oGEy3eaPchLLASE2GuFDYbNhX4tq8J9EiVgzXhnZzrzAGZKvpzLMkBBUZefiftqz",
  "key1": "5v4g2r42Hhjn4gV1nT9jtJPYYkSueExaHnLLMBmhyvVa6iiZqbH9x4UHsfymfBJ9A6NrYdKzqrdEV1kEpDN34noE",
  "key2": "2XMXV3m12q48N5UL51NkREgasKjoia5YB4VBwAQUWJsk4mkfwwoV3Yz7uzb6NQa1xGeSVfEj6CKe9HnP4oq5QYe8",
  "key3": "4gqTxZ59idG3sETLYL9r8Kk21HuLRixmMjNHQKS5TtWDTYzBMuX6wwYYgjh4Lh7AaV8Bk5LgjcSo3jq5qwxwLRpj",
  "key4": "66qYsfKXidccvppykDBiQbC1iAbUm1TLh6dtFPJDMa3JXstQnLP16dt4CmrBivSLWydMbeRM8vEyq3r9FZbzDwA9",
  "key5": "38vjdvtvQh4RrqvsVzGgfz7xPQYsnBdFejHbaoYzvqYSkmAhvrfChNDsDBDFBbwWjsg9debScTeACYeQDvhdVh5z",
  "key6": "5SwhWsCkbTN9TbzUJ8M2YLTLZzLokpHVEXiaweDhdpV7WvXjS4GMureh1te6RMABkYJRUQDeX4dveYV3YapYfqV9",
  "key7": "uSoyRh58mfErUf4ytABFeYGGj7Y3GS83Wgt2qzyxR2Pum8he1q8dym5ctmxtmXRYSwgCBwD9YEP36fPwKQCzwpn",
  "key8": "5Tz7KBxh2r5AFNCYeVhYD2bxHQVnuaMiHq9hW4zCqjEGiKXHK83cqtiNR15HWRA5mNVSohxsJy8AYFe2RypprLRX",
  "key9": "3f3PvyEJjLDz3GkAD9k5JTk4yCWEWhPnivoMcTqTTr4kPRix9a9TtjcvzwFp87tmggxVnDEaJrhpfWoa6vE3Fd56",
  "key10": "3yhhzySX2Y5QH289twFNqGpcY9jxjeim3aL4nmTZkAvq1PSZUaYx8Nwfs2FbGD8FKt3Xya58JhgSWyZBti1uA3Fc",
  "key11": "5Gh8BjWuqkvSMnff67Y3fmV6iHucZ9N7NVPbLeYbP9B7DciodCznPfECBxft2RhToxCBBTHB6UEbM6tVjG6LKFmq",
  "key12": "2jhVKkNqnvmsJG2voamAaHAGzqU1w4GPCQBQna5SrfdMciLGaKWrtmD3qqqe2jNgSJWMUdNoGoaF2BS8iV6HMDET",
  "key13": "5uuK1th8R8cwgUzaNQmonYw4zmBShLQ6E1fNzmjpDHeicTmAqnypSfSHGxnAuBbtB8hEnbqmqDtYPUFQU1wUaAT9",
  "key14": "4s7S6xfxhuS1YFoiWdMJ6MBqfccSZR6peiNomdPcrX3pXWPwrT4X8R6fbrE6T5AgY3Ez99ZrqpJgkMSSju5MeCjL",
  "key15": "2JdxhKyiPCXCUNb7V4WYZ8rKX4xRfQn3c4DUD4nGYAvMn4AFeJiSyWmbwcmzngoCLdygWcBJprvhbX8jpyYjkr7L",
  "key16": "2pLxA9cSXcV35A4Tu1pf1usVTE2dqk46fq5Uziyt3yymgnJ8wuVY45PJmtwWbQmVC4BMW3FVqN6cXaWdB7wexy8K",
  "key17": "3nCn97ApRLTQVUdhc2WqDqgRn2dZwgBMU2Xmi1PpjuAJ9BjgNbubwoWGpyuRpHWKmy3iTVhwKDr3ArxhZVMGVr5o",
  "key18": "4LH9hZBivCv4yVEpdQMQF9wMUzL6ZTnTXbmHpbw9QChS2hHW9xnhWqoUw3dDSGuVmPJz4dxVtNPKFWe2uDT6dyvc",
  "key19": "2i8GZmgLivg7eWiAMDX38cmi8J2DjPX4EBPAsjFsmjuC2VNdZJcaNZ6MvctgvKAoAiptdYjpUzvYRSDCPDrAzmXH",
  "key20": "2r8wmHVnGPU3mo7SpvDdRNbNF3mvkNmFxC8y9qsV8qJRs5LuT5qtPXc2iKLxAPnCUbmFYjchmZgMNuy7fBVX232s",
  "key21": "5KdDZhLtuJtXTGXgWCR3AHfhsYka6FmEoQ1NhX669VmHiveqTJy7S9xPVjdqUytJC4XLEX82VfwwHECSQrMorV2N",
  "key22": "2kQhMzr6jpBXSHzms3QoMJwFnAdfRKSRrwsQPmiBFanMdr5SFSAciAVWAYFAd3BuPbSzRrW2tPCNVpFxTfTxyH3t",
  "key23": "4AY5gT8pacsA37FkoY8eVG6PL9UCDbFByxb51JyXv63ig9BNF8an26hv7SNtDwbprsHpFw6St4c7Xv6vAg1R82sS",
  "key24": "3SrrhtNXDHnjs7ztXbLLgoTD1Q2i3zfd42ybnhYvppNZAwy2QoALNaJHZCrnKF4nn7cR62zPyiKMmaihFWqcVQz8",
  "key25": "GnN5G6sTAZ8LfXJJzZayMdZvkudVadAReC1nTNU7WWktVnyZjdM1Ua4keLU6nLvf4QXzUKZZM4GYXXAtg1dh6oF",
  "key26": "2A5WoBRYAQvq3qmyvJ69ENjc4tgDURodGu6wnC4iKtiPQntdKF32gVetymXAym93HJeSirHeanjNeyRK78YngBjF",
  "key27": "2XDWjnqXrwfgP76WgWSE5Ftbc9Vc99xjUNUP7VUbdCKWWQspvTNv2YFbjoAHtRgjqB4CP3HsAbG9xAVJ2Miwd2b2",
  "key28": "4UPvvQX19hDnG7RX2TH29upTrwMJQMrNogLRKnHooTfFBf61cZHnkswRaQMCUQM1Bv2SFZby6HdWiuEnkUPzsha2",
  "key29": "5MJQpBh3CiC47TxK6eeaiTefnqxDY35fg7SgoFLeAy9cjaqC5ZYC3Yr5XfAjnxbB86ZL54MFoV1ocqixkRZtVF3W",
  "key30": "64dhrQ4sHhq1xL8DyzDVKpr28e6PLarkui7f5RdTvE7bvuXwhNhPGXNWEEAnQJGaFBfpn2LnPj2YYQVq4HQY1w8y",
  "key31": "29sD9AC2p3jwmFoaiM14krY22ciMFZNhqPJhqvLAHqZcmPVHVRYoZVQ9WwmRDLLy5BDegJcVsXqfVv7sZsjbyofn",
  "key32": "62CTqedZU11uCwVr7hRPoBHrVLRQ83rPqBZiPZHAfAdaZ2XH1URk5Pp45mN2T1E7QRqRorRPR2zmg5tpseoSWn21"
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
