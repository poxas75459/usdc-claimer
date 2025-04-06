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
    "4sX7ZVrrcKSD3UuYcC3RC4XXzC3E9YmvScyab8Uz4ugYHtwBhAw3nY6BEbxp8UVu1T4RMAdYtefdRynfcGqKY4pt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lb79PoqVGFFtGrPmRnADtSmiXwmrboo3gaMz3Y2GM2UpNoFQjEKU7M6aSiqC9ejQLqUSeseTUM9Agb87aS32Uo",
  "key1": "3x6qE2aR6C9bJdJ8XsqKY8hAqfiGctw1qqeHb8rsLDR621wDzj7HpBGW4VfVL2CT57FT32Gqabbkiaf3tzzA43vr",
  "key2": "EYFaXKyRkhUqd5rhYCaGfukG1bqDNwMLux94iddMswV9PkprBQpCLoN4EfkPhhM6Wy7sK2C9vLSDiEs7pDcFJBA",
  "key3": "5CATLbQ1rVm1JhRYKHUexXY9uDde2NhRRoqxoY2gjmqMXttqkqeQDe4KENx6xMECkSoWX1yPzpX2norRDCLBoZET",
  "key4": "47Z6HyXJhwT8HDvpsyqjx2NDMHdQt5Gzk6rs45akqUDdKKFrj9YDNak2GiMVkEF8o8aLfv8jBv9WG3eicBBfYdSE",
  "key5": "3gdUrSA5qaTrHh1QtTTQyveU8k5RyZHM6bfYHYvAoKLy5ALYc1PVUTfUpyNkqGVsuCndb6ms86K58KBqw6C4gAaP",
  "key6": "3eZirX59mGNWb2agejbjPobkRe8rGM6siaZqUTF2wS1JjQC8DxFL13vmxCMB4ffeFqDGfweNPtKc5Q91vzHRXYyi",
  "key7": "3u3oLU4nkfnAmpBD9YPrQDRNorkGGFcoawJY2SxnXU3e8n7mMUiV2mMnD9bHmeck1qxAcKncM5iaQgapwS3UkzwH",
  "key8": "Ro9eSKnmKDZRq3hBHHHL9dfRc3BMRe2GtXWmtGyVrt4ocNwKFS79jobkhWnVyXQmvQYJQdVMsHeN1KaHwMHCDqo",
  "key9": "3fT424GdboYhFbU4NYsGdDUZnjb5WKmMXdHQcZqpg2QStS4Tw3PzNGD6LCWzbrzpSo2iWsiyro33PDFcVsxjiSru",
  "key10": "2sMqNNDXvJDkA6Ezs7R822EhNMSycfjLyVo1sRXTn7UtGrHtXLnC7vm7okDs1x23yZfRR1dfYCZgSbpqzBKYswTr",
  "key11": "2XoiAPdbwEFpr4yvrqtege1p9MhEGJtMBinfEqstzBe7bUHHSgzt66iEdqtcfxSpba1FtRyfkdPZqs6uAZakZDNN",
  "key12": "27gkzqMnmDHoSUExbZisFgAf83U2mKsD7cWV8XMSCdhmRhMiaCHva1u6r3V58w4NtAs1UWW853JfmVGEquvHzYSa",
  "key13": "3bGt1qovhJzYymboYYFAKj6z3NMSt247yFVZrHijBVMDTubbMfcQdC8vX4VzFx25Cwz27acKUetNUWhLcF9VFyPy",
  "key14": "N2a4uwibM94CYfCrVWUjoujMcFxEHe43dbHa7ArqkoZb6XnLa6oTpiEBUJJcGv5SebbLN9t9jdeF6qXYxwhQcCY",
  "key15": "5E9k2nTAm2mTkKFJQE8FQc2a5sZRfHhQKFdxdA7rzFhRFt7aWUt7MsuUBJqs3upYBgBmyfDtramMQV4wnSdjpR8k",
  "key16": "jVKXWmLPgZLMXmhdB99vxNDUogogXrgv68At2J7Bhkj1uFkniTXd64PRJDDZoASrRxFvoEG6rR8N6E2VeKHPraW",
  "key17": "RpEN7UTP8sjvEVsfu83MqbVusrz6MRbkDEL2FhyhasKfo1XER9FrFzeaqozjjaQcwJvJyAXVUKGe7E1kJeMYT8y",
  "key18": "CdQwyvZJxVoAwiMQ79D5wjpTuvF92HYhLsNgNFkvm99bg26mv7oPG31Ni21ydLAYpua5N46bVmDRDRSDTdnNYXv",
  "key19": "GwiTzvaKiau7BsHVnn7pfmto1FQvLUx6pURbANrbr5VGSQFuQY5GsahGVa93TACG3eu4RLbA1YFs7QzMtfeZmMc",
  "key20": "BrNndogmjCt7D8VbhX1VKsyCvmJkVeC86VJrRUaK3LKVa1T4DAzNrNp6zKP4YBqyyHFKJ5CyEYgy8Ba13cKHphH",
  "key21": "4w72B6aaJUVg6e5T6SiPFMSQo6yTBAjHe94H5YehTcL4JUBeMoqvvdH8wUUrtEWHWhhqpfmwN3ULhjhgUd9FMMUL",
  "key22": "3BeMt9FvFRhD2sWVvGXB1hcAjcoFug9fJGRazY29vKDfu9NCiaCzdxLTq9Xpr2grVGoe4MYaJMdKBMqLmhSY3mgb",
  "key23": "2knXWWG7oqnH3tnnPSy4GDCa8unXipTWnmi1H5ZHa9hqrZed5JpKz1UCfWdxnr18br2T5wdALpro5U2sgFm6911S",
  "key24": "5xgsf6Zy6XkbWq7cwZuyiWru5ShnMQomBi8Fztqri9gjNzJGN2zci625zWDSHbkq5RV3uueNdksqMbfxfMgqBzT1",
  "key25": "3M3ofFc698M2eSG2osZuqKJChSyeF1Rk6SZyVqzdFcFKghTWQW5GR1i1C4rATHejzvzaQPJ15rB3drUP4JtjDcMi",
  "key26": "43BDxjSHLgLBA619cJBHFPkchRmuFXH1yia8skSsVSoNJHUt7VXrGWqPwxsNu9GFhKTLyCGfwpoQwJQtuNKdW7rS",
  "key27": "zCFfZQi7WgGZjiT5P26xUJyLh8VUgLT7zYM3kJvi8Egxb6FwcDzfYgfUYXfAwzkuQkpLVSKBCiesANoDFiPjUQz",
  "key28": "2GvBmFmbjmbtZ5n1sVFbi9Gyjh91hkyn6GXB1Zn15rt2Uji88E2x1VVrEWyhAwAaHuwLiDbCAijAdyrAxToq6Kq3",
  "key29": "fzvyrwccYPqSHEMfq815Egu89XjghsvjVEq1yCdj7UtQ92fEBH86zSciamSEFsGgHf1f4betN5YB1vmRn2X4iM6",
  "key30": "4VUavxhnErNQD1aH3z3aWurJw65pZKznqruVVrP8iRdKC9JnsPA7YQTvboryboWRhMvn5KUvPWzpYYVnoh4TtGW3",
  "key31": "621yUzHYpc648yJvQ11vtBPJRsR6x9aXZzfcYAdaKCB3L7JE8UqPFHh9bomkVipg5bwPV2fecfWdWDX511hjsfio",
  "key32": "2y1zxZonXWJie7L9Lb1QCrXXff5VnNDqAEbHFt3f9zY3nGrF7rA8UCTtQrJb9kjZ4HKu9KUsuAF9a3eQFkDcSeyr",
  "key33": "4Cy5DBRmnNDPX4NuMVs3fpnNxESUUguRtGbXPYQ4ZP38psnkDpYvE2XDizix18pZpB92etL6RjpePi2hj2HoaoiJ",
  "key34": "vWwQyHGbX1KzdrrARTqix8GhJFWmS2WTH4MegGQvsB8G5NKpfNQSyR2hT1167L5tXZt58rPs52DsEV5MfmM4uuH",
  "key35": "ecGXp1Pre96ebxdNMhur1zKftGmMg7aAz53uj1Ru8gdT96fNZ73eqPXPwxeToi2HieKUCQmoj9C6KNe2fDz835u",
  "key36": "HEEdqzp6nNM4JcRfCdQvToJheXFQWrBjWHwRADWwLsYY5YpGofpY6PbT4AaNZUyQu2hBzhaUWJBtN9afbPApuSe",
  "key37": "5g4RgGJfVF43N6VWtzsD4TXT5YD3G6k4ExqS7EEybh5GL34S6r16RjxSUPGRaxbJUTWS51bDFdCw8NA5E2oFdGNv",
  "key38": "2kgdPb7iTaDjdyQ6npHp23GXfKPha2yqf58LokF4RTXWqosWA4ZWfQ5E631f1VXdrJ1rzWY1A96rCdT5MdPNAXY9",
  "key39": "2cRBABqU5nDyZwVea6nwjWaVrfEBcjTehktRDpoM684z7CF31nGirN1E3JsHeTMm8P4X48sKZkCMhGWrSzDnJL8L",
  "key40": "45XVkWkfBEffDBgamsMsWZLaSztPNzDoXqGxCGNhzfrvffhWbrYK5ai1pHvHhvHwqGHmyUG8gWjV8pzpCKW6tfZe"
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
