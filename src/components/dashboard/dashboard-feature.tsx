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
    "4ejsELhS3ehKhCfnm3zccGxFTVcJJjUnxSYHcUbWK3jG7xzFZfyFb8vDUcKDaquvn9peQqVDi8o3JTtJp13aXJng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27cDS12sdzS1d8M5DWPPZAf3x5HFaHTcDLGXkm8APk5da8bXwzGVSEy6L2o9q4zJijgFQE8Zh69DvWXZQafHNh9K",
  "key1": "3JcPQFrm76WFgbt1rphxZHj593nkRqA6ykUgjyVmzvXhf9JthMW6PWLvJnVajLhoLJPCcgyKMkd562vyUw5RZXcs",
  "key2": "4Y8uTZUYkfduo2tozCgZaDahhbayYXnjYieuDtei8zHXH4YrfoMefoRzBgzyE3DZ1dHKyPAz1vBS5NLLw2U8DzTc",
  "key3": "WJ3R2AUxfMRF4DD5EN8i21HZXaKcvbKXdL9oRBTHSyyMShZCibZakgKRFNQwZFrGEwddt5paXo5gJ2Vz1X5RPWh",
  "key4": "23QKnyCzv5WxEmHgZMXaW1cEcgMPSK7y6xCXACbWVRwwzvZ65MWBSjvqbFXWAiGj3oypK3Cbbp57DRPvY8GXw8Xo",
  "key5": "2ofMhHpizL8uwUXFV6SgnUF9hu5m1tNRzatUtaD7sWdCkv5gNWP9JiwNmzRahrtbQo1Lvt7AmbDvn6FU5GmMxCME",
  "key6": "5DnqS4bV8rd8SNViUjz7tRr2o2T9n89j3ebq96BUbdcNcpStJqbhdr7neEp37FmBEQN4FyvTWXRWUL2QNy5RHHcs",
  "key7": "5X8QyhWzC63Njq9hqtwXGpL7t1i4sSfdWCcM2KN7uSdj8WejoosNnGEB6pkjYE43n93DgLst9djWhiTaPhxZwQhQ",
  "key8": "2WKeF7TDfqt6YDfuJgujGTcbiCL8Zuch7XHXB5PtgCGTUBWv4ERwc2zQw5rjTcVnL3q1W1U5KgJfmLD5AFBRaqZd",
  "key9": "3qxcHD4WEr1RsXgHJCX5vSRqLoRCuojkywne2owVCY9NZtpPiQBxAGUkdNqccNkkNbjjAJy6wgq8gVYcLMy51Uqs",
  "key10": "481dg1yH1iJchNNpfAs91oH12qBKHxBNsYFhpffoxFKTxGrfLngq4MV4CzsYKdMGoDNnYxKwTAf63yYxnCPTWXVS",
  "key11": "5UrLKTSAZ1nANAj8Ab9gtrfTd4y9W7Fa9Dn5pddV6g2LSB97NhAsRq16uff2Tz5j5C51VU83UdeJKaGpWvKSEjbr",
  "key12": "48aAtmA6ZUXrpfm1mQTViFX3qqBDAtAGPp95S7EHk6YjB1AT7xs6iTUNY3qwBSa1vo2cJ3XVy1AfjQ7doGRYe7b7",
  "key13": "VobhPmAoBRutRPfC8Jx79eBRoGFhmX6W5gDeK3s6vBBjNSMbEyFUMBxzBdw9W7da6YHftKURNFRUZTvVQtMey5M",
  "key14": "YBK8EQGi6P2isVmcV1YurFnf4377wkkLAVqDPv2vAv5Qp9613baPRSgmxX4cBaz1SpLcEZNFRNkRXuEBChedbZb",
  "key15": "2WcYSvX4tG9bF4aXiLURdihoKX5h9MEsd6Kg964P4uxMBtFJmqLYywRqetadxaxptzW4WczWkFhimqckx7SA6MG9",
  "key16": "5Gqo6CeVJjSPnQw6f2ktx3Lxi2XmLsJvmZ8ZDTtMAazaQ4hpH1gwzbvkAQ7hyE1qCCiSLzFQ9xicHR6fuv1SGwk2",
  "key17": "2irSKKuEgwxmq9bbrDz9WGyhPXeqKbQvQhgbdedoN26zfTZ13sn4KUjJTEMeUqpgpPUajczrKW1Vh8Hm2FuzZvtJ",
  "key18": "d954p1nBzdBAsuTmBAbnuy8YjGBgX2BmpKRcie3Pje7MfAHgMD1NuS9N8iW5KJu5VLXtsWrGF5T4ovNPy79Cg1S",
  "key19": "38ScgMLCb8HTRBGDzNRJjL2wTs699cbhaqNFSorjVeYJZshg6g7ixsMpFqt2HAYWqYvBY7GoZyg34DA15gMTzf1b",
  "key20": "2QoKxqfDyEBkV3RWWnTkFPqGPQ9sRH2qXVaHNX3btgcRkHUTHUys6HgNNChpbroWm4c4JyedxYkhXnLUAnWv7sL1",
  "key21": "2erj1e5sjeHx8bDYArCNvDHmxKc6iUtoeFZhDD31RAkdcrYbWVXQaMyTc4hpRHGvd3nse7qWF5eJe8CcgS33hV6f",
  "key22": "5GnCABx5JbgnRZJMVPW8wnQciwEu6sSqceAGuZPwAxUauW8Qpxb8DrE12wsysda7nqg1CJP31b1zEgvhjAwGMdLJ",
  "key23": "4afCEmVvRCPwMWLw5SbXbk3UsKg8r7fcjdTPtL3SxfEoiuMCvya9dBDxztoeapv8aTkss6ghjYRuAvXDMm4xWUFH",
  "key24": "5bzaLyNjbQwjpwcea58ndS1JR4HzWL7CtmTDDeqnanHZw5ZsVxJsMDSzqSQk5AqnMF34WDBy8F69cXZmtBcWDuy3",
  "key25": "3d1Ek6MeXExYR4gRH2ur954wG86iboqJx85vzRBych3uE6ZQY6jGFuzKbqyvPYo3xxuPTFMWKqhynMBDzGp9VegN",
  "key26": "45ogKcTMkPapmmpKwFYuULJoxQP5djgNPWMRRtDVuULpFJUtuf78dNxNFs5wFf4MaR7npmLQpwZMKLqXLS7npfJ1",
  "key27": "4cLC2K2PsJ4fFMnxRh7282sP5NxE7op88NqHHdPanX7imKD7c5QoiWgkSf8Lsph4SqLXoEJmb7g5KeP3LgiwqEFW",
  "key28": "ST53u1KDPhoCPa2AeVzhKRCnLCFzHzrNpQaUkgdj1ngGyPXhgC3NgqaaoaCTqyiXTjNqDP6vXYXb17C5ZgLUdky",
  "key29": "4F4Zzzcevhzviib4XDB5ivE4eyTgsXMj51ac9QhcHdyYYoANsAxD5KQSZLtgn21hucmYkgJiPjXjjNyBYS9CCa3c",
  "key30": "3xGLVUQu2BwWB8A4zqH5Lkw9D6usfbZHswxHQ63PBcH4WKNgay3dxXKzcjwbVjkKi7761rTg4QxkC3dwDRaEoc6J",
  "key31": "3RkwKSnXYYkiZmoPgUgFgbmbhV6TjKhJfMLo6ngDUjPp7E6bC431jy6Cdz2qhHYKLG3A5n19QdWm579hx2mm5ckC",
  "key32": "4NfDndRJFrR8M7N9YTvcU7fQLVxVA17ETWowbfwDfGAtR619hRAn99znkVVmDcFKdciMfEBqN51yhgKoyw6KBT2Y"
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
