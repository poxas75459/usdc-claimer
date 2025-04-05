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
    "3vJQH4fdz5p4jtLyD9mwY2LKUgf6soDBCT8MMR9LVXoANXERyke9fhgLEv4EJWg7GLbmf5jpnCunKEFje4GLZLtd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5arAtAzv7WheLsEmoV5z2SCSHd8HN9MfsQngiMU6VvVwv6p3uMBUn5K5xaPLKyV1GNuGXsMZjn23DqN2ssy6SLZF",
  "key1": "5x1my3fLiLn8xbEh2qkRqcYnCMF3vupYGXz9kna1VNL5mvueUQ2smZptbnSiBQxYKnuxTjPndQ3Gy9r15HMNmRQ6",
  "key2": "3zgfdnueHotuGSPezfcooUMNwXo42yyjzZrboTjD2xQt7rqJhiGbkGqf9JsJKKBWpmZNipr7m1d86PFTYKCPJrUj",
  "key3": "2peiBKHYDDjekmMNyng4U1BFw4Q182RDHKWhaWsAGYXLjEoPtLsCRWZyit8JVoNwo3jTLnW9scHoizKi8nz3vJTT",
  "key4": "WhQ27cHMBhajavGB7UaZAkZaMiEjCEknwEdXfWZXvRghhvchwvvTeuubvxH31Y6wF2XJLNvB1W5T2EnkHiNsWw4",
  "key5": "2YzjdTtZDJZCJemhkGZHMSsDET1UmJvDPLGD8C1VuAA9RhD9xvYabQNVqkjaoy574EtzgfrQhRNAUG1Hd23K6pHf",
  "key6": "2wXb6KNV8AHLvqCAKy2ER57QDsoMD4HsJ9pGcBv2m8j9TbttJE9BWyUFkveH4tGyh662Cdaux29X1xpe12MUW1BW",
  "key7": "rt82yw51JJsrrYHXvLF6teprbTVmmKozwjLVDQ27J9xLWj7WFYxQbv7nLPJWtN6gaXhuvDA7XrRQYPFewGRMKZJ",
  "key8": "5uSQ4QNf5jvifDPAM3z4SkgBk5nvqCxtmfy1KD8dEEceefSP9ZG9p2jfrHconSxKKoxg9wkbExU6JyjWwtuYeP1x",
  "key9": "5aBKUEVTYyZwNvksH189VPDbiKE5Y22CyPpi6DjmzCVd7BttVzb12nYam3bSVCWD5NtVQL6KepqgUHhdrT2sX68p",
  "key10": "LNWLKMWpu7stE1cmh1btyfPSjzXoW11e9jzofcg5rgCWxFVkyphEjK6iyC3b5NudHTwprX29HQT6Cx8Gj7wU4Zj",
  "key11": "35eng9fu4t1pxZxj1xZzsyyCz69nprTBhSFEVARGXmMu2M9psCBdiVbJu1dvKHrhLqQCSNSsQQKa2qjfjC9W7Bnf",
  "key12": "4LRxRvSbUgFH98hycyQb4FhgfBzkWv82ytrPnwVN6naj2d2dy68E72mN5bTsV2YbivxK1HrBgv9QpezPRxV6UuKw",
  "key13": "4FsMszxecCN9WBywzvCdbrqvd2Z6RPbM2YrUMFnu1Ma7viSr2iniaz6wjSqA1c1b94sxZP2LAoTFJaF4FAVj8hvx",
  "key14": "2asLYuNoXiL4GQvEBcs7ah5CViVxmiTJo9NkurLxi94Uv5WrvPqco8JJr8a3LJbNddrfo7ZSGMqMPnmeW6sPfJqe",
  "key15": "53fvPfEvEbeRiyuqftDe7imbJqTUTWF85NkmttTdq4eZPGn7HWLabhMXVQsLT1LM6TyeWZQkYzMWSmtnx15VWeZN",
  "key16": "64SwquYgMWLKA82XETFyNXHJAVqJa5xC1s92omeaFhvDf8obnxFiPvVXHv8a4HFwUUDYoVoxsXUEmHjDhEcSJvfE",
  "key17": "2vTVg3E1LbKCpPPLni8V4A3LTGwAD8tiCtPSZVzRU3gowSEfUc85N1nNekvhGWHXhnbudm37uDzZbjaT8iyLzXCQ",
  "key18": "5W8sT1xXiwHE4GgERiZvqSNim2wJxJqXyg8FKgjj1ZVKtrJqhjmEtvLmSLFs99BBYtqZtvMoGsQKunaMwFaY7wR3",
  "key19": "28tBBDtrxEwGKbTyWSQBP6LGe4Vmp16T5v8Y4C7TFKYbrV7SHXYfqEWKpieLETFF6jFFnrc4Jbv3n4cywTB4ZWe3",
  "key20": "229uJGUysAYD1B4QHBtN9s8w2WLJrAJnQqXdQEtNtEroP85bjCBTHB2GaThpbdsMqRtxumtsbD9uc7hpncSUpavN",
  "key21": "2JVRrMZbJ3m4uXPfyAX4WwXfZUA5UvafcQDVVjFQ68dGRTBX1AsEVapnGeU6zDvZkmRJoGUSPvrgmrQP2dQkQj33",
  "key22": "34MgC36QziaZcQhJPKJ6UDMxf8AztjyrtHuTFRfaHQGZTNBuGFrxDRLCHNPWrZLhx5pTbDVATEHrfeZyC2m61BJA",
  "key23": "38vX4X7gYzD5qsUsfcA3gx5smJpC2Ly1V6ZgKoiGnHX3wgHViArukmaeddEFRtuUTt2ztpPv1xpgY1jVweJkHUB",
  "key24": "5QFjVkPcQQdBp3oeYsfk3oxorVcUEkBr72xE656dsvEMB1nAbZHJhT1MXSsFwfCSBf6Le8mxQcYCfkyCNR3M9c7b",
  "key25": "pT5ZqSYMp6TSfAhAPJLKaDBn6cwzGuMci87T1aV3BoL7paJrQ1dc7R2J2YComPXK2wPNqyRk2ZVsk31gYQVZqwE",
  "key26": "om35xT8r9Yrh2DXrMVcPPbqhaxKG1vrFMLHsEuyuUivjGJtXTXC2GMqie8Q25X4EMqfsp8JvtiN9PYyj9UrKFKW",
  "key27": "3iiAtxLJFy8yEVT1AQEVizFi54iEbB4vDjA1L5BfLUcfqxwzkFwqZrgkZ7tpyU9BzhRG4R8KoyUWPLQwgrcjXUQA",
  "key28": "4VBtLhyWCu2R29NqC4NNaiZucFfHun71dwCnJpXkr6inED1YwwvanPNdfNwiNHDDiB7CViLNdoJfcfagoP3BKYMc",
  "key29": "3vgaKQzB6npbNg1oGzMZmsro3ndzibZnWmybqEK2KYB71rhRoiY5nzCKQG3ge9ZBmq7ddmTiV2xZwaWo8fDsyk6q",
  "key30": "2KpHprKZ2BEX3uzZEYKahtSWY1CxQGsxnw6xEaAnzQG4fWREkhrpBdzXqVQZ1aE8wkcjvfqpGY8atSSNL77ER4dG",
  "key31": "tURKvCWQgNBgLrBmoo4ogA2J7Lb3hdBiQBDWi1h7c3LTZ1TypgEY4xFhyodtD2p3PaVNV9GHrB8qdUkr1pgymLW",
  "key32": "2xR4pprsr2HEAE1USgKeozq4W6muBRFbyxxgWcV1ze6V57kT3QcBwA9Tqikc2R2dA6kQSHNmZRm2But4Z9HqD1Ko",
  "key33": "28jLHAHQ4bCpgPUz6GvZXEMgXQfqrjHX5kVJWtxufyYXQPDQaU6imMd54edbxcJU57ev6iVvwa79xg6SKsnGUUpW",
  "key34": "58FNKpZPY4yoPwFLmN5QRpZNhcUXYH8MZZ4JeGFH2kA8B2dPtkVrKeJwj5oGG7PLG27uaGjKrsRxzhP95tMerc5L",
  "key35": "CPwaSZxmgGGdZHJMULthmdW4WCGgBC9x8D8wYV4fDLhr6u9nz1w7JVVr3ReVjbVr8uyfsuYbU6rcsSxA5mMpzxh",
  "key36": "5z62WKJmmi34HbZxyGu6hXugsHeZc7UchWwiUEesVQwQcFdAVLt39DZm1sHBM4oGf3yPzb5WoKgdrNgiDzbHqNPv",
  "key37": "4JXGBpqEePW2qDYTbKqfbF7Gh5qAsHRmd5dyYR5sgDzwb7qiL4BEUCaywmJTKBZB1epNQvw352b3G1wg29KcxQPt",
  "key38": "2aUytJWMK1uafmYwA9kq46MYNJQqYnA78swRqWjdt1ULAsrrM7Q7S9CK8jWjZvcnTHHNsTyn6CUkRnj3xXatgdFT",
  "key39": "3TvFi4TuNrwohhKB49XaEv5pQKCbpwzwWVX236VifTJuTDVr74kueFmvKtkQFNkZBAk1MqsDbqcSUfiFBPRYozsU"
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
