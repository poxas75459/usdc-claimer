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
    "4uKnrALJT33axkJWP1WCTY8PqRt1qjkS3qZnXkmdEN8PEdWoLkiJTt2nNbA6Rab8byeFDFsEwWcvanPUs9u6MvdN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48dknWxg94MdFkmx1VmQ8e1yLqus6kiqo1SJkXijNa3P7KyqXp4LGepSEMLtx1oy5qL7UpomuCujrTXjgceBEyES",
  "key1": "2knUKPXkV9oTeove9qBN9sNKnFUW3KNfkNJzhauZ8agfqp22WPFGamLrPyxNT9pvqa8Wc61GFKygHKnMoisBEtyW",
  "key2": "3jLoNX7Kt2RdQpS2KYcUjMpG9gLLYgp7Zg2aVoJRQf57tSTspUZ5j2rePJVAU69HGEuAYJ8Kd119kzJyExCAf2a8",
  "key3": "Bh3XYtsvQGCnQ6KrBEpF8ov1o1KAbemM8y9CMiudEGMKhLXMZLqC3TXXU7SpSq2vwFZ1xZELJMc8mbdjjCBKTBj",
  "key4": "2oKK7KMm9hbENvzKjPDCakmoxD2mDaNq6wZkPnqKLfVWf9oW8toTEkFDCQ9G5jh3PSYDWnX3hjMnsm8WaMzfmKR1",
  "key5": "4ivoNZNBheAemR9MxnLu3Lu6RQqmWpcPgGQHjLLStTLe649SYp5hdrXX15AsMLJePobQk7E9AQqdKTzTk7yRg2XX",
  "key6": "5PTq3iz3NPDoEGpwwT8gcDRnU2jbBPipm2cAgJaBr5jBrHGuyu4EYpyHZqf5cYEgfFptpuFGehRNbE7Uh1Xuvzxd",
  "key7": "3Sm9wd93RrvNCWgxn1fqRmMXtMUV5NJkJfrqVU5xTQiyqzAvzA6bAD5jKSsgFX736FNjTpgruscpEGT263dMeQCu",
  "key8": "XuvGYvBqjJsKFnwKMc95ZXCAogt1toWrhkCzeW9RTUdALotNLiPJGDs4BEMmEaHupRXBB6PbvinaSoCuvG9YTQL",
  "key9": "49QvR335ZUzTDkWrkY6xN4MWEBNbx9RYS13pcE6xnF9B56jZA2K3r9JQ75GrPMryqZiGc44hpSLaaa8YcXTFsLmH",
  "key10": "4zMumoMJsYN8EdEK6QsRuRrshqHUh72w4fwkktkPFh9tRaXk8aHVaW2FSznDYVL4HRFfpfYh8Xe8ptYn6WsNan7S",
  "key11": "2TG1aQcQkSdFwnGyeZVMf2G22CZpH8tkAAGMTBKpbdB29N8v7L1Mxs5iuSuAyub4YgFcY8RUbEyQ6Pn9jyDKCqUd",
  "key12": "52HYtCa35BdAPVMJPkFK9zisVqFZepLLC4wm4vxxSDJaQU89NNSYM8tLooPvedNr9rrpgWAUP1r34FrThmn9YPVd",
  "key13": "dEBAQqMfgc16BDWFzhKFLNQ6mQhG1eKAXRFvQJfv5hFVCy1BzKhPhwbCPCyxV2rX5AcLuUtsnokQbbAPkPiYfft",
  "key14": "257nXru3FV4ZjdRdcEaRLfo8aSebsxdpRU9419ZU1waqeW14Q3bZncNsJmvoGKA9B1fhBEJKeRW2mbXfQWX1z1Xg",
  "key15": "3tjzFD45TyUq2VLpRX7EA2X454G6mX8eqNgQSaweBh4ijJ64bnHskMb7oNL3w1BUSE634VEqtATQNMv3p33NYcxT",
  "key16": "5wJNVNkKVxWPxnfSRrqiBvwxA9tQggjfQQ71CM26qJNTTXag3M64R321i7amrPsgoHQokmju5dhxe8NUmJXJS5eK",
  "key17": "5jTDzhNvQT9o2p5hikkJezrFA1E4x3NmxBbntpsL9es8UPWvLXbNupDVFUYbAHp4BgCjbdk3a8EL4dEu7VX8YEpV",
  "key18": "5ok79ZkzoCBiFZQWvr3MYYhQDZptX2AQfc8zSeivqqMJLSkEtTFGmbH29kGT6AquYwrCjDyRDap2qo4iH6Ecjfo8",
  "key19": "3haVBWKUPRHSLR2afg4BTziQZPuxTjNXfnnPGoiuukFpBfYgiTWF9hAa6HL1xmmRnNxPiGyNb5GYGebwtPkK1fjv",
  "key20": "3pVwvrL2pXhqBKaoRuyQfF1xDjBGp8zYpo6LfwsW5cbhSnS4qxVj29AaWPzqarjBkUFavMLYtpXgi5hxWwXgLZTs",
  "key21": "3v25FEQaYWDrVi4TSt29XzodtVfyswYQvfbB8NGiRUVnYcv9FsSaKBjLfFKAWcUo6CpM4Grx2NGwxaTnm6YfYZfW",
  "key22": "gnPQRNMEyeoTp33drA9ejmrF6zZMbtLnAPK1tJLab4mTG3hFzSyY1RwrPGzGPctNS41G82V38WQUcS8L622kxKS",
  "key23": "34tMoDJvmoXbBL8MzJvQBzpPwA6tJYzWDZkn6fPURVLuz8uPo9AhDNfgdCSBpCexjC1JEsDj6hrsbMz1w3ffT1Tm",
  "key24": "45xA8GD92KMRz2dgw1XSNcW7fLwwJj8njtinnMtWjT56M3RKFcatUk82Tf6TXndYq7PF7krtKNYSYMAWT7VHfXeD",
  "key25": "2gesGPeUKPMcgJumLfB3SPRKS9buoUJACGC1Mu5aWwnMMUaCtqX7rxRxfRjMm8FRenzPrQwMkG2fuxqBf5XfCGtw",
  "key26": "3TocU74Gyqnjps5dG18FdU2D7LsK8FnMYCcpvvJQ5ojfT4CdupRLwSyHMTrwCVKSGyzJgT1hEs2oYRf5R4RsoyKr",
  "key27": "5MsEh4uYTvjDfyTWzrLKc3VCbEkgHwZmpBhw8CTPisyNYXurg62ahEQ6j7UMXEWbvRATfq1yunBGhzxVQcFcwYXX",
  "key28": "oVZFopomZmQnSFPjYrYbXnrgNNPBa5n17HhV5Liw2BFUrYmFD7FcD5oJqUceEPEM4bW9P47VjT8ikcdedfF6S2T",
  "key29": "3sC8E8kdwykTH9XNuakX5miGDjv3aYFM2i3uhj9AiiTUxRWzxqcWuYGovtK5YA7dNVQhGNJmtjUYEvoEtU2byv4p",
  "key30": "3PYyRUN8VwKTz5LBwz8zEb8VTkfMrYcJi51KzaPYTpjFJoefzan8Zbjg1TG3Lo4t141tg5y8N6Dwj423omdPGduX",
  "key31": "2bzBAB13XA4xtaUSeoZwNVSd4P8bq91aARZW2QFkkzW17FvWSCYrhfbmnwpDpQunPASbSYJCSaLpmmAbXTQSLB4K",
  "key32": "2R5PMFqvCVhaMUbnT5D6Sffp1ZSCKaLmmNvvDESyXLfBHTrqc49pVGZMYrYa8TkSGRTWSjfzYS7WtACQSvNJLkwn",
  "key33": "5PpB9cXCD39HViBYhQMKho5QviV1iVAjBcb5cs24y4mZWfanVcRWoLLsN4ffqZNCYRKpcVfaDkxgiWAxP2uU4g6c",
  "key34": "4BPYmSDY9uBdp48vwp9xGBrVNKdznmUpNcVeQY1Jq7wZrGM3FZhv7CaN42emRUVGiENDq2dUQdSxgkr43EHeXEww",
  "key35": "53qHRR9TDYbpMUonAzUfvp5PndokXcdjifdWfEwzM6i37s5X27wdrJGYgc4ryyh3iwArvzdrZvxWHfCPzLfxQ9f"
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
