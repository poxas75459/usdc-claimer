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
    "4EjGkWZ8CTGUBXXmDAZde9dpeRZLzcbKRGpYesr185FAF8WT3p6APBTToXAaos5HBoxnazLaMbQhY8hGjPX6Vwe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67nwe15Vr8hSvg6oJmuqsCzXehWXSHKLtn15rhWRUCCkCHFofzrWPr2WVf69HEkCUCq1KCHmQ6octeg4nzYPqtsF",
  "key1": "4jLsMwSi7mN5YN7omm3zpN4ZCBHFB8kLasQKQkMBMjgDT1EMFUU1rwkPZLPrwfEVQZjPbpraFqoXTrc7JLoB6zAL",
  "key2": "46RGRSfu13iDLPqfQM5kqBvePLaFCmeVwLU2Rv6fNEiZrha9xe6nWKSqGKn5sXCA3PrgabMBAjZ6qVDJKCz23Btb",
  "key3": "4uzhc9PKUhHb59wD7eamYFM4T7V7tJs4rHp2q4sHyNKcxafUQbWtfLTDiiMHWT3GBLCHePXXn6kDN7AzmWXU7mLH",
  "key4": "dYZfncfpXeYMoUGZPMz7BCLhkNtBxUAJ7phyqGfJPeq9D9Xn49rD8pRH1wfNHB1oNoCsaUgjuWyWBCVAha6kYQf",
  "key5": "5gAUsBh7j7zdi9Q84f5iaUY4quwroKgQGkNfDKW3Am5UiWefPiRWF2MBaeYtuDBwxRago2JNRcxDwq2g3614PcK",
  "key6": "52RJdHhs1DDH6XL7LC61hqo5aeBCJSYyKG4Eyak3yUKfko6Xk6MMCsD8NwiWgKCoAW9NfN5ZVhurfkwai9HT4wyv",
  "key7": "3E2MgWNPQj9EULowcuLpW5vJoGA9UH5cx3EL9Jh5cRKBLm7daa142iThkKPiiaF7RmeD3rAV5Apti4WAunEXvbE1",
  "key8": "4YTNAfoAoyf4G2eiuFY7hefBti8ygMT1bAbNDzbDYciWhbGdN5RnqcE3VNrHRFPp6Y5M5nYR2gnKx3tp8GLvH4LZ",
  "key9": "3DS3qivnH8TZyzYurAmvPgTPmWPDhEStrtghZwaGedNnya67h7K41wTGgJLrLCzyFoibcC5NRfqhDZzxgL8MPrT5",
  "key10": "3YcPHn3tjZKAM91SWoM4xsgyH94kTbmpcQQEx7fxzTvQvh6Ke1hhKozJNirdJTNwQuJ5jr8n8JN9AqRQzghqDeEL",
  "key11": "DYZP229V9bwBX6fvNLz4c6yP6JdALNVYg1QBRmJh8DLEk3DA9Xz7bQVopG3rUz5Nds3P3uyT1RefFbbB6FtXSY1",
  "key12": "5e1wA6GeQd6qrUaP8Ucc1B8H98bgRKFxgPDzNiqM59rZHEQ1n9bpYaTnKMcEsRPuxC91AGftcuUHSrCMN4jEooNu",
  "key13": "2SeQHv46nZ6quYGqetJqfdqV5qDiFsUY418AxWUaRnGXjNYg8RzVt8SqpNgPF6ibGBYXaL1eFAA5EL11GYGi5zka",
  "key14": "34MDdNUvBQqLzA2CbAfRugcYkJGtpqtjo5Gg7Usnp97RZP5bV35YvkFJJg2pXmC8dBE8QcCM28KQLxd1GfcRrbzL",
  "key15": "2BEkVqiLec1kY1C4dYph6VNUaMh1DfxFY2VAsetesTjE2H3VdJpmdyQo3ws7f9paPN1t3FfWjN8XZtoA5aGcaL6F",
  "key16": "yuLBuBhcRt8aAVvZcuPKaUghtJ2xenGreT23pNbpFSu2fubFhwRrftA5hHKnNnkGE9hNGJym3GtK5ioViHJZvJF",
  "key17": "3Kxs5UMvjNJHzZ84cF7nBQKDFoNXLemtU9s7mFkfG9vrTtagpqFTLs56nKXY6mFtpG5iwJHSTS8KpHHb8S5NpKD5",
  "key18": "5J4SxGKxStPcdbEunfAD7buV4VxyQgEyg6ARb6g4KYisNMAQQCPwDNdTK8BHQTnGM9FyscaGJt3ZcGuG9wdCUUFb",
  "key19": "5ApyRpnZov4wJbC9VZTAR3gDN7LzdQHcVXDhhY6uZsbCrp2poap4cXt5mjMPwe9xtzeLUNZVvDBdmTaHfteNAB3E",
  "key20": "SK9TLhhJy9NYjBC14TjRH63qD6C5Vkpc4Xgd3XahkY1iMGauCmACctfmTN7nh9MY6vEACdjCv1ckoVuAzk3AEza",
  "key21": "5J47aYGgXHcrXEnfFZaZ2bEQHwBq8fdT1okVXFGjuxcWvhZipUrGZUShpFmBSabcndDNcF68fpV8g2psixj3sQwh",
  "key22": "3gRUmp3jhygqVeZrw3T6koqMtuyoK8yYiy2CiJgpYFuUfVydq5m9QRnEQXWdvrbiTVWKJ24oTNvNe6t5fUj9tmXK",
  "key23": "3xEz4mzNnmWYKG6E4mtqdRAmGSXjCQy6Tgn2Zraqr1n3ztrnqs7bPip7Y96XjaYP7vDmTCz98dKPfeum3o8wWTRp",
  "key24": "abHgr2zFLFCvufQwWCCBTTi2RTGhcbVw8yQUbvTPm18uFUGmoDJYTYAUYuQeSWpqpk6jN1sUcuca6fG3XtpBbJX",
  "key25": "3opCabGJqZyES2cYujVfrLSz7gtEwvYGojLagAHJf4bgXgtREmNd98BAaaCkxirUoUkhfrEhqhPWTQdotfq1m5sd",
  "key26": "4Q4H4RrMAtqxsrpNbURMcmi2BBEvQDBiXQpfT3JPXfXtkhQNypKnVVYaLJfUGSaqwq9jF3DiaKVUXAQP2bfLGL4z",
  "key27": "4a1swKbmkKEsmuu63HhqWmBTXQDq9PF7n6Unu42kxErw3iwW8L3KuzmcUbk7jz4sSNKAWuG25rjn6YNFTgNNueSQ",
  "key28": "Dp2c7YWGPncGYWTmTKFoBzdBMf1CwB6tyUWJg8xSbSR8fE7GcQKTgEX9NdEquC2nJjvchZEX5QLnQyHxJpccG6Q",
  "key29": "41dSTXGKSJUBLVgG33UDxwMCZSYqy5WS79VeE9NotnHCvox8xAgwxfPe5TeEA7vxVbdPMw2foJ2ziAoxfc6X6NkK",
  "key30": "37F8vSC9Tq8Tmk5NtGsvbcAeM5UXrjCiQFZRxCWsTo3wgZopdGDjSUTiHeGNyAAxvJn9wibZLEz7JfUP4nL99ZiL",
  "key31": "3PGjZyBMmauxhkgrmkJHHwiGSSk7nEx88GfdmE3t9hkD3RP2eoDoQ9SzaKZjtNpDajcxaDZcxZd69eWf4MsdGMqS",
  "key32": "57DCZ9mCj6c9sbTP67NhkGqozjgySJoeGad4puSX3aQxyo69ih26d26nPetMQpnJHCNd5ry35pPx9htzXqmyXMsz",
  "key33": "257r7i4AoWGB9VZ2nDz2w2w2fn1aYi7V4AJXn3xwdCavshFSUstMbaFPsuaEwcUAWM3ErS7uX3JRQtWbtSp1RHAZ",
  "key34": "28GRTSNeE5jxhb8FTAGtDDhUNzCjn7ML7FxQg9u3st6PCi4MXHoj3kqknvQboLmQa5JMkhpu4tZgP9Fe3qXm8N5z",
  "key35": "4XqzuDz9RJ3wCMYbsz65W8rZcqB1NoCn8THKowCqEk5zr1scWdYJYanrSDVS47fgyeCSwXWa58ifYBfDmtnroseU",
  "key36": "VVmwtoketDWmSZzDrfzRDXrfwdiduAs68pVhV2YXiDmNejgc3upSwunhcA8rppRDoUiwzkCBwMQfQ7L7Knm27gv",
  "key37": "2Zcvx1QCHgPavUeKLEqRYA6txRU6hRkGaHiV1D8H6ppYLyT9k8WVJ21BsYie64azgu4sfG5psRskPTGcQL8yBgzW",
  "key38": "zGBv7yMode166G7RvwSrM7bXfKaViUVTsqcN3BUXkAYsgthBsNoNxEjRUfmoZjokXcTZBHiaFzn7KooVBEa4s3t",
  "key39": "5pa7FPiRKhAGH8aLRKRfaFcPY1d8juszG4usJQM94RTqK6KfJEcNtATWJetJg3fPvX2rf7VAJoTVATKeWVdqH986",
  "key40": "NxLhj3YJDi8M8whazRcWypTLuSxc7W77zmTEF1rVkw13vjYrVBk853YNe5A4yGiHJnz6jrkbeqfDmzHnpWHWddB",
  "key41": "5s1qGoLK5ZJHRV18aP5ZxHxyBPLb8kvRxKwHTGkmkUcFCLTqWDUGcVknv4CER9etqJG5EnuumNAub2f2PNejBoB3",
  "key42": "4o9VZmAH7rY6Zp7SJ7hba8kVWamGqPyxShfrbfpXKWSF2eVhDyP3kqKFRkriL5f4f1ENNfiT1mfieBRBNKUMJsK1"
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
