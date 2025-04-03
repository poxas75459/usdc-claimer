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
    "44psTKm8TMFSZMBiNnBtdpQNaRv5e5y3DcPFZFq15qM1HXpPFxxnSdXBKJruwpBG5Z5Qt8jpTx4LahJexZKya1VA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tcwPHUkVTUp174b3kVs9NWaTjAsiKmXsRnCbNmBaAdJDDYEJNVBXfKCdvRKSTrmAJJuXdZ35QNv4PSk9sSTFpcU",
  "key1": "3wh3yhiQtEhZMogBDirVESiRLGZ6h2kCfbp2LV8M6yLJ8LeKa2gbxPbtDdNHJRYHZSheLF7xLYACv6PJgRpvJ459",
  "key2": "5bsrcGKYhny9VLDEsDr4DLenFbjDiiFF7cJUKohHrtFKqSSv31JXp5F6FLVQzm8yPFQZWG7uBCv3x9rx1Zmtp5iT",
  "key3": "4Wjrqn6PcqJPN6dTPNpqZFTEj6ND2gEoAf63DjPgsdj8UnRSuRitWUmzQqz9XYStjCiTr9cYwJcsJuE6ebTQ4Mb3",
  "key4": "3RPrLXYgbS7tTiCW6NLZTfe48pTEED8qMqpzogQFVjHQGyi63zBib9jd2EYeT9pUAcVXwroxpU5oxde8ywQxECwJ",
  "key5": "2nh9566GRNkhNRU8x7dMXnTS9REgLPdHkKhn244L7S9PoCZjgAKibjp9X2a3DEdjzFdJugJRieHFBHCD17X2DYim",
  "key6": "4PeU7av7MJ2PJbftnbQeJR38dpBcM7neUehuhA6RhdnqHoakEgDai5ZbF1zE3TJR3j2mgvVCugKaSGDAKJp4Frrn",
  "key7": "5Ey8T4c4deAnyjheSQBGYP2ieF5UgKfTfjxXBgcqAayjGBgzvwYLUJSNn9mboUGNRumzzCQ7y1ejxg4QKNbnYrRD",
  "key8": "5uJLM8aRJfUazLpRq5D7ZUM4gPDfhJamVDYPLNksp9yooLZtyoAjT2q73HV3qdVcrZSUu4zMHaFQJLC3AghRTPWX",
  "key9": "3CqthdYFW9hM4HMmZ3LQXbkNkZXBj8MyBPsvumfcBtDEVW1sPFDksXhEXA24wup8KfL4tUpwD6PCAJoUyzSg4dTx",
  "key10": "5eknDekNE5tEXWFe5xH1EhnRf2q8pNv9d34nXgqJeGKT6XEkQXojDqtserM46RfbPR3Kx39EYJMQAwo2zXn4iMBP",
  "key11": "5qoWcvstjvMPhYivJehrW8PxALm3L1nhcEHpuvjVG9edZ5JAS6u2sgQZgipywcXvJF9bsr2fETGQps5ta9X8TXyu",
  "key12": "hVLeU8bqHntJZTr5PN1w5bm3dVAwKtpzL655Rsb5ew3euSNhWXj1DWC64kTNFqBwZgSbFNsSZwcyd45TpewCuQR",
  "key13": "2VC1dTUpdS7KXiDYuh4UcMQYsEap9Sxtr6NSV9xLN3rTf9vo2S6gw6YSoT6etgiMUosVVKzt4uEZHRA3F3kztAV9",
  "key14": "2EaqcFp7f7DUULB5J1rC6hW4PThyFejNt4FLVwYQMxfk3hQqgqJzKGqrAnVZMYUeEoFyGQwrjjQ6PfhRZJSPuLKb",
  "key15": "3QfMeis9ERUrSJHAWgwswQ2s4mLgZs85RTGnsSupcFACqTM8zT4DXK2ikWk7VmBdnaU6ZEMpE1j5DHFSaG4fshHm",
  "key16": "54Yd7ydoxr11z3kNznvAGXuDbN6eQDV6N73YV6MMt8p6dHUCRhu2hknmce7wFgvMV3AhF7m4bGN2WiMRFXAdjtbZ",
  "key17": "46ZxVt8gqCvn732LJJSzTB7tKQbD5rjc5ubWhYscbYke1NohmS8mjhc796yVWMgdWhBWXTXnyCUJNNaYjW3Bebew",
  "key18": "61sCSZ1bF2qthMETM9C2WRii1dBgoGcStPbBMmbo1EnzBU11tDCcg5MJUi4rYeaN8vSbQrJXyVTMwbdMLZ5Zcoph",
  "key19": "4NP6YsnXKwYo1YjDvmfKrnyJvyxitUxaAvjRCLgKRxYuzWzdK6EfYymsXoMp5qLcps3fWRteXDzj8VGBUUBeSa7k",
  "key20": "5W3SJWZ4SYBxehDzS743QuoVTiuUYtzUjZYZs3KGf2YEyxHQRYRYmf9WsiBRQqxgW3xaNrVYR5nSt52WRiyxeAWk",
  "key21": "5W88ckDure3X27BfUf5iYUrgtX22gyd8uVwRyiXjNKxHDNWdvaPVD2JfDq5r3zcivx4XG4RByt8gotDxQSmftCaw",
  "key22": "498WaC5nJo7wqi29QGTJeF4RFcfnhvBYukVAsUfGXY82kw4YaroEq5DCP4jW22314Mzg1F8tBmQLqrDZSU5gD8at",
  "key23": "5myQbUxAYB4yCFYCTsWnxdkhShAgQnEdjP1YwofY7ovNoFz8fkeHGmZRSYrJLMWCHQCrQTwu6BhghLp3BJfW2SLT",
  "key24": "wN1s1sJatRCjFxNruE3UuHPC5GRNFhqRScvQSVufZMZaNvi3ovtmzzhRo3s3rdqxP6wUXoLwYsS79oxjkRPseEu",
  "key25": "3X5q26fo6CgtVYLLkHpr9XNsWr422J5vBgP6vpMk4WJwTfNiVRDZsVgr2awbB6DLL2CrtpyRn9X3tPeVaA1UDKbH",
  "key26": "3zG1ePHymn13cfPTXNUFjA8eAvEmfwm1i8BScrmraTfgaTzFvZ5E5j6s96h5zyCaQ5acyQzjo67SM9fprXKFL5UF",
  "key27": "3adxzaU4JXci4yBgzxFcJxKXmKkyF8Ap4qbWfGpxYZy9hnfiU4Uwfc1mHYPD93tW8Pac8s7dCMJF9WERDzjB2G9J",
  "key28": "3C4CBZAgm5G8CZksAJdSUjzJZXJNgGFH62JqQP3poNgR5KoeKB3RGcKBtDV8Kx22zTXa1tzT1wgUf1tseKA91LNj",
  "key29": "4xjJuZCvsQcsUs7vSzY7K13GrZvQm3dr22aN8NzwaBQPpGWcUfq2A2SuMLHQjzxBQqhUonWAq4eD9qA3eGgnJN3z",
  "key30": "2CG7J8ZPR1R113ZsqbGnfH9hCKT8SRSqhSN14QfPbqxm6tjWNBuahZSwhKs28XZMA4VzJAt86JimncKJxoCt8Gaq",
  "key31": "5pUFzVDXVg2uvWP3L9bvxKWJ3XPEgs2ebbUvTeknFMkd4m6aQPkLUZjZ3orqNMCZ8nYhDGQkc9Hr5EGPmYpmUbQ1",
  "key32": "4r42vSjSPftQ9tdoUGw2UwJmb5aJnvAvCVBpFDh5FvVz4mX2h5uTn5zXy8aY3zBTZsNrh5vUMSHYYC1onrjxH36W",
  "key33": "5Gcaf8PtacPsyRi13BmuT3VP2M5Bvn9fyAzaeY3nfdnphxGBQujUtbnycDsZWv6fvhwf8RNSnSbDqiixQ62NxFdG",
  "key34": "3XgUJKVAbYQUWYU48CgtCpekANv4yRfwMf2CscYKrDjKS5xphjLjSumdQBu4WgxzSyZhvuNyYM43h6a2ydPDVkNH",
  "key35": "2ELxA5kJ4AV55iLP4o3rmHAZ6G3yXpnRDWbasJYBTqAcZSoXe8D2zD9UAiHgJZYmd2iKhSZqBbPfocoMR5E7heAh",
  "key36": "4FJZ6Pj3XzpoKhQTiUxsdGFQWnqwHec12HwcbwRYcTsoTTZsZWraRpgg387BnZCF7oQnCRUS8d3Uo4VUyHP47yQF",
  "key37": "24jAenH3pXWbLALWjoU5cU7jihP8uN5tCGTCogFFhMJ7xqS2YBEKwd3HjZ7tsisWyETtFQ5hQvazMgDDsgv6rzgG",
  "key38": "3tJssMbyfQctNTPyUrey8V4V4XVcWXJXUN6B3ooKsyqoMEJX7vm5EcqFkJWjBRgr8DPyWJEZPKZBBRCgKjmSWC1",
  "key39": "2EBBfJNB6TxFskgomGkdmfbUb1QhA3cMJjRvk8qjfKnUmfKR94Y5PWyh5nfpiMRCiYUR6pQBqbca8fiVza6hkRoA",
  "key40": "2MATzR1YBbwZ79NqhqjKS43z5eaS5eP9CDHr96J4PPfYeFXWRrrxhRrMMT7MSBKobpuqWMcrf3FyyX2JYHFhmi39",
  "key41": "3A8a9nDo787jW22YTZT1qojqSLkR2KEabKZ9mR9zwGjUkSipdJJU2fFCgnQAS3FPrzqZ2t4t7bpMPK7T6jozVcse",
  "key42": "4YzqZvzCo8JqkWP89HKPsxUgWdcjo66zy62GqZpC9nUyDVJej4UTBJ6T9ZiYBhjRZQ8gNewPsqZarPv4agfyTcdd",
  "key43": "2vdjDLcYeHxABuEYcfBrTF7NW3YDPLFaFUNoxLH6MkvP7iXs8PWFAZYekM7NnetPJwEwTZcqXYwH13FFR7qZo7b2",
  "key44": "2yq3Y6nT7JXzbfbdPbugAK4VemMhrTG6UehH61o2DV6ajidvCXipH6dcdCsPPaHM2ywJV7ErC12xGotm8HBYy3VD",
  "key45": "4sTScjUomCAzufVbYwUztbLgyNbDZDDAp3o1v2KEsKuEiDLfkWZQ5MpqaqheQotEsFThgZb5Pa6mnWzwgFLZiNDG",
  "key46": "HUderWNw3VBeMU5YsPaFZ4pyUCV8A99YYBe2aJZdpdKUFi1jtkQsy5Ajr9Uv56KhbKobVsk9gh3Ejm4c8QXdxFq",
  "key47": "5w2SWJ3oMFCaBF9p3a5ufidccx7ZRkjppTs9QDsm2Pqq6xE272EMdwgCdKvd9ue9pJTq6sHWCMAXAAAQCqDjsvrQ"
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
