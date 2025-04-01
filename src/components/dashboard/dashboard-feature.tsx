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
    "2tGCQLmMDQZiocVRpQFjYL1kkA86h544bgn2xKuyPvVrKgWXUrr3SN7Y4dT7whvyXoiRppBZzfHb31SiwYbrh7iu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RTjNcMz2DErrA9acxp1tE4ZZmcYPmYVu7EQF98AT5Z4EiWRMxqRtmrJqnUpeGpyKC6o6oZ2SqxXyTDXxGGk6eBg",
  "key1": "5tDKJ1vThNTArdHvskADjFVKZXsL9jftLzxPQefjKWN4pBjY4gT8omFGqfGdty511URVASdsiFtqbTShskeyW4r1",
  "key2": "3wJzKsdxVwNzzWE4nsCZP3dicfxvRJhysZ2MF4fkWzMVY6nKFCPRYtFiMpYkbugDynfd1KyVEgY2ZvuwuabRm2U9",
  "key3": "9eAHvQ7hA2vfPoRDZNqNzZ8tQYVUHGkMACGo57vrgTUChAhWJaDp95cQCGABmDfzYqU2qjCvUSKwMuM4MPFVqqE",
  "key4": "CjqZCY5dWUhCKvg8wF3aXhE8FVXyE2srf2mXVq4rDah9GhR681fXnVDekJD44Rub6stCzTNN2uuzUNt8jjpYytX",
  "key5": "3A5zDaX1skGbVeWZaZu1bAJuh8SeCM6TxDgJz4yRDEadQuLFNu2gA9Z22uUgMSWVPFsLKzw2PxypkTPp7KLEtt8W",
  "key6": "5FeJFH4D6BZTd5VqY3MQ6XDGey4G38h6NdbD9jKDq7JmKk1pDrHnQ2TCsbcFyGprtqsUJ2GugLKBwjMphj25uzYK",
  "key7": "4T2N2ZFxaQJtAQ5xXjR3Cg9XxktcJaNUyJEYtnrHaQLGcoWgKk9bGpbAiG2EpFcuTvTe5t5m5hkSVGFeneLJo71S",
  "key8": "PxmT199aZqCQQvWf9r76GoDKZRS7jLE1VBSswWqCF5p5KNSxsFrPKoNh3jRPxMa95mqRQodihPgCvMedf4HdsDp",
  "key9": "3gUbeiuEKoyqXdvX6NWASttZAdwKosv3a2EsQc5gwLZannS74byEMkaJ1bpYKg3keTDnCVnbjFjNvtZCi2vLiwQD",
  "key10": "3sm1SkPRRWxAHGPyVY5mxvLei7yCUgjsR4cVQh7euvxcefieoJfdSFjRCaDfKZnYK8Tv54Q7PH6SCefEyX7a14JT",
  "key11": "4ns4Gt13Ztrgt4eLrj4du6oWq2YyHZJb6SqUotCokKQicsetzYFJHShhJLBEUHnZ7HT7ZvieayR1GxZc55cj7hYE",
  "key12": "5sQbQiCABZU8X9B6prSpPB9Yw7stY4nViXEuiqXugisky6SG8C4zNeDDCVbortgkwyAXmgXX8uBJobU5wj3isnd",
  "key13": "3RAJG1jD1imSTbTFaAvnLaBdeo3hc8uviMXZXRPa9wdvk5i3fdcyENiKEMCgE7smQXJCVduQh7SbCCdsy5naaTu9",
  "key14": "4GET6dVBmiKYzb7t5cF351bKugcJD5QGRUQLZanWjSDzCnULBmowTLxJt57GhgdRfPPh4mtW79m71zPBSeN567kc",
  "key15": "4WmGrF4h6zQcq4m23iU4CXhwK1inWzm77YnfNqUpqSv9xq1ConUYDLXJ3bshpJ8dJttMK69oqDzN1kx2VtMM22gS",
  "key16": "4KznZHEK7SYmgFmfFJJmnwEvtTg6q4DegWTaZhvRa8U73pcEuX3tHPDr5XMwEgfhfGtXonzcu5Tg7CNWQq4hcqoF",
  "key17": "5J3Cq5W9UpxLuRH39tyiLEqM889SD1fSERn954agKH4SyREBt2DNXJ6GVvCBanmRTURGXUwseG6rfyvHjzL7Mxiw",
  "key18": "xnMTigk1GjAuzvYDiivn5TgsE3neyGPCEDSGEXHggADNdVW83KMcy7aH93XZdbwSyRDRtpFDAoMBodMKRGG1JFg",
  "key19": "327heywgCyN1WsVEvE74t1HePQwr8qQrGhmuUtjxKrzVWcNP4sedr4AvMq8gVstUPuTPhdzrgDa8ShXrmr9wAZKg",
  "key20": "4fz8mfdirLo9MHerp5iygV6ACk2tFSt2d4B6HZffFtMg3Kafn4vSpT7gGq5QdjiUbNqsymPH6pXYj231ZjRZdS8y",
  "key21": "3JEBMtnqAJmmudSBrqNAqxuREXGANUEytUnxtfTQJUz9UW8qxzq1F3FfofY9MU1gyoM5izJ933y3JrSbkFcD1y1K",
  "key22": "2jsBnbSsaVNuV5Pcxqnsvb34wfXpwubPrFQBoU2fRy84BE4itnqHHhf89s8ArXSkA3ksMenXyG3AHXyZPPGpgaAr",
  "key23": "3ZpFiQCtCR5mrRec7QoK6n7hGAy4WHYbKHwgoQ9LVeozSoGxgGLB6CKEmdtoaV7An7KLAVwMmpqvecaf3RH5eYg6",
  "key24": "3zGUqK2rvBCP4c6xTB1598cfUX6NWasVjxhW53vmUna3hvAsnUD2HJPLvmAfUVT2KZrphZLNKcKJS9Jte1QhZMxG",
  "key25": "27H1jkeAU3pesqNZ7f5TFzKirhoEqemyYdz9TDsvDy4vBiqcdMCr5xxuUkae6sk6sne6h68Hy3A9CDDVNZXUbyCV",
  "key26": "4UWwieRToL4c8CCrqEyx64LrEnHHQPchhj2s5WrVBvhy6mnrUbpHsjEa6SQrtT66jHsUsbmr2qLARyrQasN8w87v",
  "key27": "4hUZFhJA7g3fBDd1YwmrL4tkbSAByL6vQesiFDLw7n97rfUAxNgW7Pen7gi4Nofz1CLxJioEMsGCdZsoQZMxQMHW",
  "key28": "5DuJFuwHjSCdgMtxR4DoPoDESNB4fcenaWXhcoj6r1xT1LW6BK9s6tJS7dAqnkCBT7vHV9eSPiWyZHHsPmcEKGTE",
  "key29": "5erW1MRYrB9E2bTo7dD3PrHb2B6XQ3FcmuDumaw4Avyvn4Tvkwj2gGgrvKPDNrgpvYA8zGHVzuA6X6P8BFvXboS1",
  "key30": "2aNbrA2Bev5hnnKTkZXFQhPVU26JJaYqn8zEcHZ8Eiqd5yU7xic4RdFAC78Gc2spAcb1Gn4orGvfDXyvZQjNuGaK",
  "key31": "2Rd7pLgDTKMA2kcz24Zb7gBFJVTNnGEeamS6vdWehFEzEMBVpEF6EvHJgUyrZhvsUzSfRwiCX41b4McRSiC8vfLq",
  "key32": "3XU6oyCZDdXfPsLMWfDLSvhtnzskPXfvXmRULP1w8n6KCz5vHXC9yaXusXHndXrnojvhFW2Kfd2qLDpsztbfXNRf"
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
